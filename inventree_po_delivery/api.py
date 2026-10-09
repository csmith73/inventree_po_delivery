"""API views for the PO Delivery plugin."""

from datetime import date

from django.core.exceptions import ValidationError
from django.db import transaction
from django.db.models import F
from django.utils import timezone

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

import structlog

from InvenTree.helpers import current_date, str2bool
from order.models import PurchaseOrder, PurchaseOrderLineItem

from . import helpers

logger = structlog.get_logger('inventree')


def error_response(message, status_code=status.HTTP_400_BAD_REQUEST, **extra):
    """Return an error response in the format expected by the frontend."""
    return Response({'error': message, **extra}, status=status_code)


class DeliveryLineListView(APIView):
    """List PO line items along with their delivery state.

    Query parameters:
        order: Restrict to a single PurchaseOrder (any status)
        include_received: Include fully received lines (only with "order")

    Without "order", all lines not yet fully received on PLACED / ON_HOLD
    orders are returned.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Return the list of line items."""
        if not request.user.has_perm(helpers.PERM_VIEW):
            return error_response('Permission denied', status.HTTP_403_FORBIDDEN)

        order_id = request.query_params.get('order', None)
        include_received = str2bool(request.query_params.get('include_received', False))

        queryset = PurchaseOrderLineItem.objects.select_related(
            'order',
            'order__supplier',
            'order__destination',
            'destination',
            'part',
            'part__part',
            'part__part__default_location',
            'part__manufacturer_part',
        )

        if order_id not in (None, ''):
            try:
                order_id = int(order_id)
            except (TypeError, ValueError):
                return error_response('Invalid order ID')

            queryset = queryset.filter(order_id=order_id)

            if not include_received:
                queryset = queryset.filter(received__lt=F('quantity'))
        else:
            queryset = queryset.filter(
                order__status__in=helpers.editable_statuses(),
                received__lt=F('quantity'),
            )

        queryset = queryset.order_by(
            'order__reference_int', 'order__reference', 'line_int', 'line', 'pk'
        )

        smap = helpers.status_map()
        today = current_date()

        results = [
            helpers.serialize_line(line, smap=smap, today=today) for line in queryset
        ]

        summary = {
            'total': len(results),
            'awaiting_delivery': sum(
                1
                for row in results
                if not row['delivery']['delivered'] and not row['fully_received']
            ),
            'delivered': sum(1 for row in results if row['delivery']['delivered']),
            'overdue': sum(1 for row in results if row['overdue']),
        }

        return Response({
            'today': today.isoformat(),
            'can_edit': request.user.has_perm(helpers.PERM_CHANGE),
            'summary': summary,
            'results': results,
        })


class SetDeliveredView(APIView):
    """Set the delivery state of one or more PO line items.

    Request body:
        lines: List of PurchaseOrderLineItem pks
        delivered: New delivered state (bool)
        delivered_date: Physical arrival date (optional, YYYY-MM-DD, not in the future)
        note: Delivery note (optional, omit to keep the existing note)

    The update is all-or-nothing: if any line item is missing or belongs to an
    order which is not PLACED / ON_HOLD, nothing is written.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        """Update the delivery state."""
        if not request.user.has_perm(helpers.PERM_CHANGE):
            return error_response('Permission denied', status.HTTP_403_FORBIDDEN)

        data = request.data
        today = current_date()

        # Validate line item IDs
        line_ids = data.get('lines', None)

        if not isinstance(line_ids, list) or len(line_ids) == 0:
            return error_response('"lines" must be a non-empty list of line item IDs')

        if any(isinstance(pk, bool) for pk in line_ids):
            return error_response('"lines" must contain integer IDs')

        try:
            line_ids = list(dict.fromkeys(int(pk) for pk in line_ids))
        except (TypeError, ValueError):
            return error_response('"lines" must contain integer IDs')

        if len(line_ids) > helpers.MAX_BULK:
            return error_response(
                f'Cannot update more than {helpers.MAX_BULK} line items at once'
            )

        # Validate delivered state
        delivered = data.get('delivered', None)

        if not isinstance(delivered, bool):
            return error_response('"delivered" must be true or false')

        # Validate delivered date
        delivered_date = data.get('delivered_date', None)

        if not delivered or delivered_date in (None, ''):
            delivered_date = None
        else:
            try:
                delivered_date = date.fromisoformat(str(delivered_date))
            except ValueError:
                return error_response('"delivered_date" must be a date (YYYY-MM-DD)')

            if delivered_date > today:
                return error_response('"delivered_date" cannot be in the future')

        # Validate note
        note = data.get('note', None)

        if note is not None:
            if not isinstance(note, str):
                return error_response('"note" must be a string')

            note = note.strip()

            if len(note) > helpers.NOTE_MAX_LENGTH:
                return error_response(
                    f'"note" cannot be longer than {helpers.NOTE_MAX_LENGTH} characters'
                )

        updated = []
        unchanged = []
        records = {}

        try:
            with transaction.atomic():
                lines = list(
                    PurchaseOrderLineItem.objects.select_for_update().filter(
                        pk__in=line_ids
                    )
                )

                found = {line.pk for line in lines}
                missing = [pk for pk in line_ids if pk not in found]

                if missing:
                    return error_response(
                        'Line items not found',
                        status.HTTP_404_NOT_FOUND,
                        missing=missing,
                    )

                # Attach orders (avoids a query per line item on save)
                orders = PurchaseOrder.objects.in_bulk({line.order_id for line in lines})

                for line in lines:
                    line.order = orders[line.order_id]

                not_editable = [
                    line.pk
                    for line in lines
                    if line.order.status not in helpers.editable_statuses()
                ]

                if not_editable:
                    return error_response(
                        'Delivery can only be changed for Placed or On Hold orders',
                        not_editable=not_editable,
                    )

                now = timezone.now()

                for line in lines:
                    previous = helpers.get_delivery(line)

                    if (
                        bool(previous.get('delivered')) == delivered
                        and delivered_date is None
                        and note is None
                    ):
                        unchanged.append(line.pk)
                        continue

                    record = helpers.build_record(
                        line,
                        previous,
                        delivered=delivered,
                        user=request.user,
                        delivered_date=delivered_date,
                        note=note,
                        now=now,
                        today=today,
                    )

                    helpers.write_delivery(line, record)

                    updated.append(line.pk)
                    records[str(line.pk)] = helpers.delivery_info(line)

                # Update the "Partially Delivered" / "Delivered" order status
                if updated and helpers.order_status_enabled():
                    for order in orders.values():
                        helpers.update_order_status(order)

        except ValidationError as exc:
            return error_response('; '.join(exc.messages))

        if updated:
            logger.info(
                'PO delivery state updated',
                lines=updated,
                delivered=delivered,
                user=request.user.username,
            )

        return Response({'updated': updated, 'unchanged': unchanged, 'delivery': records})
