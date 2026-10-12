"""PO Delivery Plugin for InvenTree.

This plugin tracks whether purchase order line items have been physically
delivered to the plant. This is separate from InvenTree's "received" state,
which indicates that the items have been booked into stock.
"""

from django.urls import path
from django.utils.translation import gettext as _

from plugin import InvenTreePlugin
from plugin.mixins import EventMixin, SettingsMixin, UrlsMixin, UserInterfaceMixin

# Events after which the order delivery status is recalculated
ORDER_EVENTS = {
    'purchaseorder.placed',  # Order issued (or re-issued after being on hold)
    'purchaseorderitem.received',  # Items received against the order
    'order_purchaseorderlineitem.created',  # Line item added to the order
}

# Key of the "Deliveries" panel on the System Overview page (part of its URL)
DELIVERY_PAGE_KEY = 'deliveries'


class PODeliveryPlugin(
    EventMixin, SettingsMixin, UrlsMixin, UserInterfaceMixin, InvenTreePlugin
):
    """Plugin that tracks physical delivery of purchase order line items.

    Templates:
        favicon.html: Shared override of the core include, loaded on every page,
            which adds the "Delivered" indicators to the PO Line Items table
            (see templates/po_delivery/line_items.html).
    """

    # Plugin metadata
    NAME = 'PODeliveryPlugin'
    SLUG = 'podelivery'
    TITLE = 'PO Delivery Tracking'
    DESCRIPTION = 'Track physical delivery of purchase order line items, separate from stock receipt'
    VERSION = '1.2.0'
    AUTHOR = 'InvenTree PO Delivery Plugin'

    # Minimum InvenTree version required (frontend is built against Mantine 9)
    MIN_VERSION = '1.4.0'

    # Plugin settings - using plain strings to avoid lazy translation proxy issues
    SETTINGS = {
        'UPDATE_ORDER_STATUS': {
            'name': 'Show Delivery Status on Orders',
            'description': 'Show "Partially Delivered" / "Delivered" as the status of placed purchase orders',
            'validator': bool,
            'default': True,
        },
        'DELIVERY_GROUP': {
            'name': 'Delivery Group',
            'description': 'Members of this group can view all purchase orders and line items (without pricing) and change delivery state, without any Purchase Orders role',
            'model': 'auth.group',
            'default': '',
        },
    }

    def setup_urls(self):
        """Set up URL patterns for the plugin API."""
        from . import api

        return [
            path(
                'lines/set-delivered/',
                api.SetDeliveredView.as_view(),
                name='delivery-set',
            ),
            path(
                'lines/',
                api.DeliveryLineListView.as_view(),
                name='delivery-lines',
            ),
            path(
                'orders/',
                api.OrderListView.as_view(),
                name='delivery-orders',
            ),
        ]

    def wants_process_event(self, event: str) -> bool:
        """Only process events which can change the order delivery status."""
        return event in ORDER_EVENTS

    def process_event(self, event: str, *args, **kwargs) -> None:
        """Recalculate the delivery status of the order affected by the event."""
        from order.models import PurchaseOrder, PurchaseOrderLineItem

        from . import helpers

        if not self.get_setting('UPDATE_ORDER_STATUS', backup_value=True):
            return

        if event == 'order_purchaseorderlineitem.created':
            order_id = (
                PurchaseOrderLineItem.objects.filter(pk=kwargs.get('id'))
                .values_list('order_id', flat=True)
                .first()
            )
        elif event == 'purchaseorderitem.received':
            order_id = kwargs.get('order_id')
        else:
            order_id = kwargs.get('id')

        order = PurchaseOrder.objects.filter(pk=order_id).first() if order_id else None

        if order:
            helpers.update_order_status(order)

    def get_ui_panels(self, request, context, **kwargs):
        """Return custom UI panels for the Purchasing index and Purchase Order pages."""
        from . import helpers

        user = getattr(request, 'user', None)

        if not user or not helpers.can_view(user):
            return []

        can_edit = helpers.can_edit(user)
        target_model = context.get('target_model', None)

        # System Overview page (needs no InvenTree role) - for the Delivery Group
        if target_model == 'core':
            if not helpers.in_delivery_group(user):
                return []

            return [
                {
                    'key': DELIVERY_PAGE_KEY,
                    'title': _('Deliveries'),
                    'description': _('Purchase orders and deliveries'),
                    'icon': 'ti:truck-delivery:outline',
                    'source': self.plugin_static_file('Panel.js:renderDeliveryPage'),
                    'context': {
                        'mode': 'page',
                        'can_edit': can_edit,
                    },
                }
            ]

        # Purchasing index page (panel is requested without a target_id)
        if target_model == 'purchasing':
            return [
                {
                    'key': 'pending-deliveries',
                    'title': _('Pending Deliveries'),
                    'description': _('Open purchase order lines awaiting physical delivery'),
                    'icon': 'ti:truck-delivery:outline',
                    'source': self.plugin_static_file('Panel.js:renderIndexPanel'),
                    'context': {
                        'mode': 'index',
                        'can_edit': can_edit,
                    },
                }
            ]

        # Purchase Order detail page
        if target_model == 'purchaseorder':
            try:
                order_id = int(context.get('target_id', None))
            except (TypeError, ValueError):
                return []

            from order.models import PurchaseOrder

            order_status = (
                PurchaseOrder.objects.filter(pk=order_id)
                .values_list('status', flat=True)
                .first()
            )

            if order_status not in helpers.panel_statuses():
                return []

            return [
                {
                    'key': 'deliveries',
                    'title': _('Deliveries'),
                    'description': _('Physical delivery status of line items'),
                    'icon': 'ti:truck-delivery:outline',
                    'source': self.plugin_static_file('Panel.js:renderOrderPanel'),
                    'context': {
                        'mode': 'order',
                        'order_id': order_id,
                        'can_edit': can_edit,
                        'editable': order_status in helpers.editable_statuses(),
                    },
                }
            ]

        return []

    def get_ui_navigation_items(self, request, context, **kwargs):
        """Add a "Deliveries" tab to the main menu for the Delivery Group.

        Members of the group may have no Purchase Orders role (and so no
        Purchasing tab): the tab opens the "Deliveries" panel on the System
        Overview page.
        """
        from . import helpers

        user = getattr(request, 'user', None)

        if not user or not helpers.in_delivery_group(user):
            return []

        return [
            {
                'key': DELIVERY_PAGE_KEY,
                'title': _('Deliveries'),
                'icon': 'ti:truck-delivery:outline',
                'options': {'url': f'/core/index/{DELIVERY_PAGE_KEY}'},
            }
        ]
