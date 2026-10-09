"""Helper functions for the PO Delivery plugin.

The delivery state of each PurchaseOrderLineItem is stored in the line item's
``metadata`` JSON field, under ``METADATA_KEY``:

    {
        "v": 1,
        "line": <line item pk>,
        "delivered": true,
        "delivered_date": "YYYY-MM-DD",   # physical arrival date
        "delivered_at": "<iso datetime>", # when it was marked delivered
        "delivered_by": {"pk": 1, "username": "..."},
        "note": "",
        "changed_at": "<iso datetime>",   # last change (including un-marking)
        "changed_by": {"pk": 1, "username": "..."}
    }

The record stores the line item pk it belongs to. InvenTree copies line item
metadata when an order is duplicated, so a record whose "line" does not match
the line item it is stored on is ignored.
"""

from order.status_codes import PurchaseOrderStatus

# Metadata key used by the plugin
METADATA_KEY = 'po_delivery'

# Version of the metadata record schema
SCHEMA_VERSION = 1

# Maximum number of line items which can be updated in a single request
MAX_BULK = 500

# Maximum length of the delivery note
NOTE_MAX_LENGTH = 250

# Permissions required to view / change delivery state
# (both are granted by the "purchase_order" role)
PERM_VIEW = 'order.view_purchaseorderlineitem'
PERM_CHANGE = 'order.change_purchaseorderlineitem'

# Custom PurchaseOrder states, shown in place of "Placed" once lines are delivered.
# The states are created automatically (if missing) and can be edited by an
# admin under "Custom States" - they are looked up by name.
STATE_PARTIALLY_DELIVERED = 'PARTIALLY_DELIVERED'
STATE_DELIVERED = 'DELIVERED'

CUSTOM_STATES = {
    STATE_PARTIALLY_DELIVERED: {'label': 'Partially Delivered', 'color': 'info', 'key': 120},
    STATE_DELIVERED: {'label': 'Delivered', 'color': 'success', 'key': 121},
}


def editable_statuses():
    """Order statuses for which delivery state can be changed.

    Only orders which have been issued to the supplier can be delivered.
    """
    return {PurchaseOrderStatus.PLACED.value, PurchaseOrderStatus.ON_HOLD.value}


def panel_statuses():
    """Order statuses for which the "Deliveries" panel is shown on the PO page.

    Completed orders are shown (read-only) as a delivery history.
    """
    return editable_statuses() | {PurchaseOrderStatus.COMPLETE.value}


def get_delivery(line) -> dict:
    """Return the delivery record for a line item, or an empty dict."""
    data = line.get_metadata(METADATA_KEY, None)

    if not isinstance(data, dict) or data.get('line') != line.pk:
        # Missing, malformed, or copied from another line item
        return {}

    return data


def delivery_info(line) -> dict:
    """Return the (normalized) delivery information for a line item."""
    record = get_delivery(line)

    return {
        'delivered': bool(record.get('delivered')),
        'delivered_date': record.get('delivered_date'),
        'delivered_at': record.get('delivered_at'),
        'delivered_by': record.get('delivered_by'),
        'note': record.get('note') or '',
        'changed_at': record.get('changed_at'),
        'changed_by': record.get('changed_by'),
    }


def user_ref(user) -> dict:
    """Return a minimal reference to a user, for storing in the record."""
    return {'pk': user.pk, 'username': user.username}


def build_record(line, previous, *, delivered, user, delivered_date, note, now, today):
    """Build a new delivery record for a line item.

    Arguments:
        line: The PurchaseOrderLineItem instance
        previous: The existing delivery record (from get_delivery)
        delivered: New delivered state
        user: The user making the change
        delivered_date: Physical arrival date (None = keep existing / today)
        note: New note (None = keep existing)
        now: Current datetime
        today: Current date
    """
    record = {
        'v': SCHEMA_VERSION,
        'line': line.pk,
        'delivered': delivered,
        'delivered_date': None,
        'delivered_at': None,
        'delivered_by': None,
        'note': previous.get('note', '') if note is None else note,
        'changed_at': now.isoformat(),
        'changed_by': user_ref(user),
    }

    if delivered:
        already_delivered = bool(previous.get('delivered'))

        if already_delivered:
            # Keep track of who originally marked the line as delivered
            record['delivered_at'] = previous.get('delivered_at')
            record['delivered_by'] = previous.get('delivered_by')
        else:
            record['delivered_at'] = now.isoformat()
            record['delivered_by'] = user_ref(user)

        if delivered_date is not None:
            record['delivered_date'] = delivered_date.isoformat()
        elif already_delivered and previous.get('delivered_date'):
            record['delivered_date'] = previous.get('delivered_date')
        else:
            record['delivered_date'] = today.isoformat()

    return record


def write_delivery(line, record):
    """Save the delivery record against a line item.

    Only the metadata column is written, and the parent order is not re-saved.
    This avoids overwriting concurrent changes to the line item (e.g. received
    quantity) or the order (e.g. total price).
    """
    metadata = dict(line.metadata or {})
    metadata[METADATA_KEY] = record
    line.metadata = metadata
    line.save(update_fields=['metadata'], update_order=False)


def status_map() -> dict:
    """Return a map of PurchaseOrder status key -> label / color (including custom states)."""
    return {
        item['key']: {'label': str(item['label']), 'color': item['color']}
        for item in PurchaseOrderStatus.dict().values()
    }


def order_status(order, smap) -> dict:
    """Return the status information for an order, considering custom states."""
    key = order.status_custom_key or order.status
    info = smap.get(key) or smap.get(order.status) or {}

    return {
        'status': order.status,
        'status_custom_key': order.status_custom_key,
        'status_label': info.get('label', str(order.status)),
        'status_color': info.get('color', 'secondary'),
    }


def _date(value):
    """Return an ISO date string, or None."""
    return value.isoformat() if value else None


def serialize_line(line, *, smap, today) -> dict:
    """Serialize a PurchaseOrderLineItem for the delivery table.

    The line item must have been fetched with the related fields selected.
    """
    order = line.order
    supplier = order.supplier
    supplier_part = line.part
    part = supplier_part.part if supplier_part else None
    manufacturer_part = supplier_part.manufacturer_part if supplier_part else None
    destination = line.get_destination()

    delivery = delivery_info(line)
    fully_received = line.received >= line.quantity

    # Effective target date: line target date, falling back to the order target date
    if line.target_date:
        target_date, target_date_source = line.target_date, 'line'
    elif order.target_date:
        target_date, target_date_source = order.target_date, 'order'
    else:
        target_date, target_date_source = None, None

    # Delivery is overdue if the target date has passed and it has not arrived
    overdue = bool(
        target_date
        and target_date < today
        and not fully_received
        and not delivery['delivered']
    )

    return {
        'pk': line.pk,
        'line': line.line,
        'reference': line.reference,
        'order': {
            'pk': order.pk,
            'reference': order.reference,
            'supplier_reference': order.supplier_reference,
            'issue_date': _date(order.issue_date),
            'target_date': _date(order.target_date),
            'editable': order.status in editable_statuses(),
            **order_status(order, smap),
        },
        'supplier': {'pk': supplier.pk, 'name': supplier.name} if supplier else None,
        'part': {
            'pk': part.pk,
            'IPN': part.IPN,
            'name': part.name,
            'description': part.description,
            'units': part.units,
        }
        if part
        else None,
        'supplier_part': {
            'pk': supplier_part.pk,
            'SKU': supplier_part.SKU,
            'MPN': manufacturer_part.MPN if manufacturer_part else None,
        }
        if supplier_part
        else None,
        'quantity': float(line.quantity),
        'received': float(line.received),
        'remaining': float(line.remaining()),
        'fully_received': fully_received,
        'target_date': _date(target_date),
        'target_date_source': target_date_source,
        'overdue': overdue,
        'destination': {
            'pk': destination.pk,
            'name': destination.name,
            'pathstring': destination.pathstring,
        }
        if destination
        else None,
        'delivery': delivery,
    }


def get_custom_state_keys() -> dict:
    """Return the keys of the delivery custom states, creating them if required.

    Returns:
        Dict of state name -> custom status key. A state is omitted if an admin
        has changed it so that it no longer applies to "Placed" orders.
    """
    from django.contrib.contenttypes.models import ContentType
    from django.db import IntegrityError, transaction

    from common.models import InvenTreeCustomUserStateModel
    from order.models import PurchaseOrder

    reference_status = PurchaseOrderStatus.__name__
    placed = PurchaseOrderStatus.PLACED.value

    def existing_states():
        return {
            state.name: state
            for state in InvenTreeCustomUserStateModel.objects.filter(
                reference_status=reference_status
            )
        }

    states = existing_states()

    if any(name not in states for name in CUSTOM_STATES):
        used = {state.key for state in states.values()}
        used |= {item.value for item in PurchaseOrderStatus.values()}

        try:
            with transaction.atomic():
                for name, config in CUSTOM_STATES.items():
                    if name in states:
                        continue

                    key = config['key']

                    while key in used:
                        key += 1

                    used.add(key)

                    InvenTreeCustomUserStateModel.objects.create(
                        reference_status=reference_status,
                        logical_key=placed,
                        key=key,
                        name=name,
                        label=config['label'],
                        color=config['color'],
                        model=ContentType.objects.get_for_model(PurchaseOrder),
                    )
        except IntegrityError:
            # Created concurrently by another request
            pass

        states = existing_states()

    return {
        name: states[name].key
        for name in CUSTOM_STATES
        if name in states and states[name].logical_key == placed
    }


def is_line_delivered(line) -> bool:
    """A line counts as delivered if it is marked delivered, or fully received."""
    return line.received >= line.quantity or bool(get_delivery(line).get('delivered'))


def order_delivery_state(order):
    """Return the delivery state name for an order (or None if nothing is delivered)."""
    lines = list(order.lines.all())
    delivered = sum(1 for line in lines if is_line_delivered(line))

    if delivered == 0:
        return None

    if delivered == len(lines):
        return STATE_DELIVERED

    return STATE_PARTIALLY_DELIVERED


def order_status_enabled() -> bool:
    """Return True if the plugin should set the delivery status on orders."""
    from plugin import registry

    plugin = registry.get_plugin('podelivery')

    return bool(plugin and plugin.get_setting('UPDATE_ORDER_STATUS', backup_value=True))


def update_order_status(order) -> bool:
    """Set the "Partially Delivered" / "Delivered" custom status on a Placed order.

    The status is only changed if the order has no custom status, or one of the
    delivery states - custom states set by an admin or another plugin are kept.
    InvenTree clears the custom status when the order is completed, put on hold
    or cancelled.

    Returns:
        True if the order status was changed
    """
    if order.status != PurchaseOrderStatus.PLACED.value:
        return False

    keys = get_custom_state_keys()
    current = order.status_custom_key

    if current is not None and current not in keys.values():
        return False

    state = order_delivery_state(order)
    new_key = keys.get(state) if state else None

    if new_key == current:
        return False

    from order.models import PurchaseOrder

    # Only write the custom status column, and only if the order has not changed
    # in the meantime. PurchaseOrder.save() always writes the full row (it
    # recalculates the total price), which could overwrite concurrent changes.
    updated = PurchaseOrder.objects.filter(
        pk=order.pk,
        status=PurchaseOrderStatus.PLACED.value,
        status_custom_key=current,
    ).update(status_custom_key=new_key)

    if updated:
        order.status_custom_key = new_key

    return bool(updated)
