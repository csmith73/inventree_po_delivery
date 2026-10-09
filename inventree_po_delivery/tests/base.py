"""Shared test setup for the PO Delivery plugin."""

from datetime import timedelta

from company.models import SupplierPart
from InvenTree.helpers import current_date
from InvenTree.unit_test import InvenTreeAPITestCase
from order.models import PurchaseOrder, PurchaseOrderLineItem
from order.status_codes import PurchaseOrderStatus
from plugin import registry

LIST_URL = '/plugin/podelivery/lines/'
SET_URL = '/plugin/podelivery/lines/set-delivered/'


class PODeliveryTestCase(InvenTreeAPITestCase):
    """Base class for PO Delivery plugin tests, with line items on orders of each status."""

    fixtures = ['category', 'part', 'company', 'location', 'supplier_part', 'order']

    roles = ['purchase_order.view', 'purchase_order.change']

    @classmethod
    def setUpTestData(cls):
        """Create line items against orders with different statuses."""
        super().setUpTestData()

        # Ensure the plugin is active (and the plugin URLs are loaded)
        registry.set_plugin_state('podelivery', True)

        sp = SupplierPart.objects.get(pk=1)

        # Allow line items to be created against the completed order
        PurchaseOrder.objects.filter(pk=5).update(
            status=PurchaseOrderStatus.PLACED.value
        )

        def create_line(order, quantity, received=0, **kwargs):
            return PurchaseOrderLineItem.objects.create(
                order=PurchaseOrder.objects.get(pk=order),
                part=sp,
                quantity=quantity,
                received=received,
                **kwargs,
            )

        yesterday = current_date() - timedelta(days=1)

        # PO-0003: Placed
        cls.line_open = create_line(3, 10, target_date=yesterday)
        cls.line_partial = create_line(3, 10, received=4)
        cls.line_received = create_line(3, 5, received=5)

        # PO-0004: On Hold
        cls.line_on_hold = create_line(4, 7)

        # PO-0005: Complete
        cls.line_complete = create_line(5, 3)

        PurchaseOrder.objects.filter(pk=4).update(
            status=PurchaseOrderStatus.ON_HOLD.value
        )
        PurchaseOrder.objects.filter(pk=5).update(
            status=PurchaseOrderStatus.COMPLETE.value
        )

    def set_delivered(self, lines, delivered=True, expected_code=200, **extra):
        """Call the set-delivered endpoint."""
        data = {'lines': lines, 'delivered': delivered, **extra}
        return self.post(SET_URL, data, expected_code=expected_code)
