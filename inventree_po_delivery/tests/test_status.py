"""Tests for the order delivery status and the Line Items table indicators."""

from unittest import mock

from django.contrib.contenttypes.models import ContentType
from django.template.loader import render_to_string

from common.models import InvenTreeCustomUserStateModel
from order.models import PurchaseOrder, PurchaseOrderLineItem
from order.status_codes import PurchaseOrderStatus
from plugin import registry

from inventree_po_delivery import helpers

from .base import LIST_URL, PODeliveryTestCase


class OrderStatusTest(PODeliveryTestCase):
    """Tests for the "Partially Delivered" / "Delivered" order status."""

    def order(self, pk=3):
        """Return a fresh copy of an order."""
        return PurchaseOrder.objects.get(pk=pk)

    def state_name(self, order):
        """Return the name of the custom state of an order (or None)."""
        if order.status_custom_key is None:
            return None

        return InvenTreeCustomUserStateModel.objects.get(
            reference_status='PurchaseOrderStatus', key=order.status_custom_key
        ).name

    def test_custom_states(self):
        """The custom states are created on demand."""
        keys = helpers.get_custom_state_keys()

        self.assertEqual(
            set(keys), {helpers.STATE_PARTIALLY_DELIVERED, helpers.STATE_DELIVERED}
        )

        for name, key in keys.items():
            state = InvenTreeCustomUserStateModel.objects.get(
                reference_status='PurchaseOrderStatus', name=name
            )
            self.assertEqual(state.key, key)
            self.assertEqual(state.logical_key, PurchaseOrderStatus.PLACED.value)
            self.assertEqual(state.label, helpers.CUSTOM_STATES[name]['label'])

        # Calling again does not create new states
        self.assertEqual(helpers.get_custom_state_keys(), keys)

    def test_custom_state_keys_in_use(self):
        """Custom state keys which are already in use are skipped."""
        InvenTreeCustomUserStateModel.objects.create(
            reference_status='PurchaseOrderStatus',
            logical_key=PurchaseOrderStatus.PENDING.value,
            key=120,
            name='OTHER_STATE',
            label='Other',
            model=ContentType.objects.get_for_model(PurchaseOrder),
        )

        keys = helpers.get_custom_state_keys()

        self.assertNotIn(120, keys.values())
        self.assertEqual(len(set(keys.values())), 2)

    def test_status_transitions(self):
        """Placed -> Partially Delivered -> Delivered, and back."""
        self.assertIsNone(self.order().status_custom_key)

        self.set_delivered([self.line_open.pk])
        self.assertEqual(self.state_name(self.order()), helpers.STATE_PARTIALLY_DELIVERED)

        # line_received is fully received, so counts as delivered
        self.set_delivered([self.line_partial.pk])
        self.assertEqual(self.state_name(self.order()), helpers.STATE_DELIVERED)

        # The logical status is still "Placed"
        order = self.order()
        self.assertEqual(order.status, PurchaseOrderStatus.PLACED.value)
        self.assertEqual(order.status_text, 'Delivered')

        # The list endpoint shows the custom status
        response = self.get(LIST_URL, {'order': 3})
        self.assertEqual(response.data['results'][0]['order']['status_label'], 'Delivered')

        self.set_delivered([self.line_open.pk], delivered=False)
        self.assertEqual(self.state_name(self.order()), helpers.STATE_PARTIALLY_DELIVERED)

        self.set_delivered([self.line_partial.pk], delivered=False)

        # Still partially delivered, as line_received has been received
        self.assertEqual(self.state_name(self.order()), helpers.STATE_PARTIALLY_DELIVERED)

    def test_no_lines_delivered(self):
        """An order with no delivered lines has no custom status."""
        self.line_received.received = 0
        self.line_received.save()

        self.set_delivered([self.line_open.pk])
        self.set_delivered([self.line_open.pk], delivered=False)

        self.assertIsNone(self.order().status_custom_key)

    def test_order_save(self):
        """InvenTree keeps the custom status on save, and clears it on status change."""
        self.set_delivered([self.line_open.pk])

        order = self.order()
        key = order.status_custom_key
        self.assertIsNotNone(key)

        order.save()
        self.assertEqual(self.order().status_custom_key, key)

        order.status = PurchaseOrderStatus.ON_HOLD.value
        order.save()
        self.assertIsNone(self.order().status_custom_key)

    def test_on_hold(self):
        """Orders which are not Placed do not get a custom status."""
        self.set_delivered([self.line_on_hold.pk])
        self.assertIsNone(self.order(4).status_custom_key)

    def test_other_custom_state(self):
        """A custom status set by an admin or another plugin is kept."""
        other = InvenTreeCustomUserStateModel.objects.create(
            reference_status='PurchaseOrderStatus',
            logical_key=PurchaseOrderStatus.PLACED.value,
            key=150,
            name='AWAITING_PAYMENT',
            label='Awaiting Payment',
            model=ContentType.objects.get_for_model(PurchaseOrder),
        )

        PurchaseOrder.objects.filter(pk=3).update(status_custom_key=other.key)

        self.set_delivered([self.line_open.pk])
        self.assertEqual(self.order().status_custom_key, other.key)

    def test_setting_disabled(self):
        """The order status is not changed when the setting is disabled."""
        plugin = registry.get_plugin('podelivery')
        plugin.set_setting('UPDATE_ORDER_STATUS', False)

        self.set_delivered([self.line_open.pk])
        self.assertIsNone(self.order().status_custom_key)

        plugin.set_setting('UPDATE_ORDER_STATUS', True)

    def test_events(self):
        """The order status is recalculated after order events."""
        plugin = registry.get_plugin('podelivery')

        self.assertTrue(plugin.wants_process_event('purchaseorderitem.received'))
        self.assertTrue(plugin.wants_process_event('purchaseorder.placed'))
        self.assertTrue(plugin.wants_process_event('order_purchaseorderlineitem.created'))
        self.assertFalse(plugin.wants_process_event('order_purchaseorderlineitem.saved'))
        self.assertFalse(plugin.wants_process_event('salesorder.issued'))

        # line_received is fully received
        plugin.process_event('purchaseorderitem.received', order_id=3, item_ids=[])
        self.assertEqual(self.state_name(self.order()), helpers.STATE_PARTIALLY_DELIVERED)

        # Receive the remaining lines (bulk update, as InvenTree does)
        self.line_open.received = 10
        self.line_partial.received = 10
        PurchaseOrderLineItem.objects.bulk_update(
            [self.line_open, self.line_partial], ['received']
        )

        plugin.process_event('purchaseorderitem.received', order_id=3, item_ids=[])
        self.assertEqual(self.state_name(self.order()), helpers.STATE_DELIVERED)

        # A new line is added to the order
        line = PurchaseOrderLineItem.objects.create(
            order=self.order(), part=self.line_open.part, quantity=1
        )
        plugin.process_event('order_purchaseorderlineitem.created', id=line.pk)
        self.assertEqual(self.state_name(self.order()), helpers.STATE_PARTIALLY_DELIVERED)

        # Re-placed after being on hold (InvenTree clears the custom status)
        order = self.order()
        order.status = PurchaseOrderStatus.ON_HOLD.value
        order.save()
        PurchaseOrder.objects.filter(pk=3).update(status=PurchaseOrderStatus.PLACED.value)

        self.assertIsNone(self.order().status_custom_key)
        plugin.process_event('purchaseorder.placed', id=3)
        self.assertEqual(self.state_name(self.order()), helpers.STATE_PARTIALLY_DELIVERED)


class FaviconTemplateTest(PODeliveryTestCase):
    """Tests for the shared favicon.html override."""

    def test_render(self):
        """The override includes the core icons and the line items script."""
        html = render_to_string('favicon.html')

        self.assertIn('img/favicon/favicon-32x32.png', html)
        self.assertIn('po-delivery-indicator', html)
        self.assertIn('/plugin/podelivery/lines/', html)

    def without_plugin(self, slug):
        """Patch the plugin registry, so that the given plugin is not active."""
        plugins = {key: value for key, value in registry.plugins.items() if key != slug}
        return mock.patch.object(registry, 'plugins', plugins)

    def test_inactive(self):
        """The script is not included when the plugin is inactive."""
        with self.without_plugin('podelivery'):
            html = render_to_string('favicon.html')

        self.assertNotIn('po-delivery-indicator', html)
        self.assertIn('img/favicon/favicon-32x32.png', html)

    def test_other_plugin_missing(self):
        """The template renders when the table select fix plugin is not active."""
        with self.without_plugin('tableselectfix'):
            html = render_to_string('favicon.html')

        self.assertIn('po-delivery-indicator', html)
        self.assertNotIn('isSelectionInRow', html)
