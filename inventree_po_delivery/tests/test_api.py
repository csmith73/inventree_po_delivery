"""API tests for the PO Delivery plugin.

Run from the InvenTree backend directory with:

    INVENTREE_PLUGINS_ENABLED=True INVENTREE_PLUGIN_TESTING=True \
    INVENTREE_PLUGIN_TESTING_SETUP=True \
    python manage.py test inventree_po_delivery
"""

from datetime import timedelta

from django.urls import reverse

from common.models import InvenTreeSetting
from InvenTree.helpers import current_date
from order.models import PurchaseOrder, PurchaseOrderLineItem
from order.status_codes import PurchaseOrderStatus

from inventree_po_delivery import helpers

from .base import LIST_URL, SET_URL, PODeliveryTestCase


class PODeliveryAPITest(PODeliveryTestCase):
    """Tests for the PO Delivery plugin API."""

    def list_pks(self, **params):
        """Return the line item pks returned by the list endpoint."""
        response = self.get(LIST_URL, params)
        return {row['pk'] for row in response.data['results']}

    def test_urls(self):
        """Plugin URLs are mounted."""
        self.assertEqual(reverse('plugin:podelivery:delivery-lines'), LIST_URL)
        self.assertEqual(reverse('plugin:podelivery:delivery-set'), SET_URL)

    def test_list_scope(self):
        """Only lines not fully received, on Placed / On Hold orders, are listed."""
        pks = self.list_pks()

        self.assertIn(self.line_open.pk, pks)
        self.assertIn(self.line_partial.pk, pks)
        self.assertIn(self.line_on_hold.pk, pks)

        self.assertNotIn(self.line_received.pk, pks)
        self.assertNotIn(self.line_complete.pk, pks)

        # Fixture lines on pending orders are excluded
        for pk in PurchaseOrderLineItem.objects.filter(order__pk__in=[1, 2]).values_list(
            'pk', flat=True
        ):
            self.assertNotIn(pk, pks)

    def test_list_order(self):
        """Filter by order, optionally including received lines."""
        self.assertEqual(
            self.list_pks(order=3), {self.line_open.pk, self.line_partial.pk}
        )
        self.assertEqual(
            self.list_pks(order=3, include_received=True),
            {self.line_open.pk, self.line_partial.pk, self.line_received.pk},
        )

        # Completed orders can be listed directly (read-only)
        response = self.get(LIST_URL, {'order': 5})
        self.assertEqual(len(response.data['results']), 1)
        self.assertFalse(response.data['results'][0]['order']['editable'])

        self.get(LIST_URL, {'order': 'abc'}, expected_code=400)

    def test_list_fields(self):
        """Check the serialized row data."""
        response = self.get(LIST_URL, {'order': 3})

        rows = {row['pk']: row for row in response.data['results']}
        row = rows[self.line_open.pk]

        self.assertEqual(row['order']['reference'], 'PO-0003')
        self.assertEqual(row['order']['status'], PurchaseOrderStatus.PLACED.value)
        self.assertTrue(row['order']['editable'])
        self.assertEqual(row['supplier_part']['SKU'], 'ACME0001')
        self.assertEqual(row['quantity'], 10)
        self.assertEqual(row['remaining'], 10)
        self.assertEqual(row['target_date_source'], 'line')
        self.assertTrue(row['overdue'])
        self.assertFalse(row['delivery']['delivered'])

        self.assertEqual(rows[self.line_partial.pk]['remaining'], 6)

        summary = response.data['summary']
        self.assertEqual(summary['total'], 2)
        self.assertEqual(summary['awaiting_delivery'], 2)
        self.assertEqual(summary['delivered'], 0)
        self.assertEqual(summary['overdue'], 1)
        self.assertTrue(response.data['can_edit'])

    def test_set_delivered(self):
        """Mark lines as delivered and un-delivered."""
        response = self.set_delivered([self.line_open.pk, self.line_on_hold.pk])

        self.assertEqual(
            set(response.data['updated']), {self.line_open.pk, self.line_on_hold.pk}
        )

        self.line_open.refresh_from_db()
        record = helpers.get_delivery(self.line_open)

        self.assertTrue(record['delivered'])
        self.assertEqual(record['line'], self.line_open.pk)
        self.assertEqual(record['delivered_date'], current_date().isoformat())
        self.assertEqual(record['delivered_by']['username'], self.username)

        # Delivered lines are no longer overdue
        response = self.get(LIST_URL, {'order': 3})
        self.assertEqual(response.data['summary']['delivered'], 1)
        self.assertEqual(response.data['summary']['overdue'], 0)

        # Repeating the request changes nothing
        response = self.set_delivered([self.line_open.pk])
        self.assertEqual(response.data['unchanged'], [self.line_open.pk])

        # Un-mark the line
        response = self.set_delivered([self.line_open.pk], delivered=False)
        self.assertEqual(response.data['updated'], [self.line_open.pk])

        self.line_open.refresh_from_db()
        record = helpers.get_delivery(self.line_open)
        self.assertFalse(record['delivered'])
        self.assertIsNone(record['delivered_date'])

    def test_date_and_note(self):
        """Set a backdated delivery date and a note."""
        date = (current_date() - timedelta(days=3)).isoformat()

        self.set_delivered([self.line_partial.pk], delivered_date=date, note=' Bay 3 ')

        self.line_partial.refresh_from_db()
        record = helpers.get_delivery(self.line_partial)
        self.assertEqual(record['delivered_date'], date)
        self.assertEqual(record['note'], 'Bay 3')

        # Note is kept when not provided
        self.set_delivered([self.line_partial.pk], delivered=False)
        self.line_partial.refresh_from_db()
        self.assertEqual(helpers.get_delivery(self.line_partial)['note'], 'Bay 3')

        # Future dates are rejected
        future = (current_date() + timedelta(days=1)).isoformat()
        self.set_delivered(
            [self.line_partial.pk], delivered_date=future, expected_code=400
        )

        # Invalid dates are rejected
        self.set_delivered(
            [self.line_partial.pk], delivered_date='not-a-date', expected_code=400
        )

        # Notes which are too long are rejected
        self.set_delivered([self.line_partial.pk], note='x' * 251, expected_code=400)

    def test_validation(self):
        """Invalid requests are rejected."""
        self.post(SET_URL, {'lines': [], 'delivered': True}, expected_code=400)
        self.post(SET_URL, {'lines': 'abc', 'delivered': True}, expected_code=400)
        self.post(SET_URL, {'lines': [True], 'delivered': True}, expected_code=400)
        self.post(
            SET_URL, {'lines': [self.line_open.pk], 'delivered': 'yes'}, expected_code=400
        )
        self.post(
            SET_URL,
            {'lines': list(range(1, helpers.MAX_BULK + 2)), 'delivered': True},
            expected_code=400,
        )

    def test_all_or_nothing(self):
        """Nothing is written if any line item is missing or not editable."""
        response = self.set_delivered(
            [self.line_open.pk, 999999], expected_code=404
        )
        self.assertEqual(response.data['missing'], [999999])

        response = self.set_delivered(
            [self.line_open.pk, self.line_complete.pk], expected_code=400
        )
        self.assertEqual(response.data['not_editable'], [self.line_complete.pk])

        self.line_open.refresh_from_db()
        self.assertEqual(helpers.get_delivery(self.line_open), {})

    def test_metadata_preserved(self):
        """Other metadata keys and line item fields are not modified."""
        self.line_open.set_metadata('other_plugin', {'a': 1})

        # Simulate a concurrent change to the received quantity
        PurchaseOrderLineItem.objects.filter(pk=self.line_open.pk).update(received=2)

        order = PurchaseOrder.objects.get(pk=3)
        total_price = order.total_price

        self.set_delivered([self.line_open.pk])

        self.line_open.refresh_from_db()
        self.assertEqual(self.line_open.get_metadata('other_plugin'), {'a': 1})
        self.assertEqual(self.line_open.received, 2)
        self.assertEqual(self.line_open.quantity, 10)

        order.refresh_from_db()
        self.assertEqual(order.total_price, total_price)

    def test_copied_record_ignored(self):
        """A record copied from another line item is treated as not delivered."""
        self.line_open.set_metadata(
            helpers.METADATA_KEY, {'v': 1, 'line': self.line_partial.pk, 'delivered': True}
        )

        self.line_open.refresh_from_db()
        self.assertEqual(helpers.get_delivery(self.line_open), {})

        response = self.get(LIST_URL, {'order': 3})
        rows = {row['pk']: row for row in response.data['results']}
        self.assertFalse(rows[self.line_open.pk]['delivery']['delivered'])

    def test_permissions(self):
        """View permission is required to list, change permission to update."""
        self.clearRoles()
        self.get(LIST_URL, expected_code=403)
        self.set_delivered([self.line_open.pk], expected_code=403)

        self.assignRole('purchase_order.view')
        response = self.get(LIST_URL)
        self.assertFalse(response.data['can_edit'])
        self.set_delivered([self.line_open.pk], expected_code=403)

        self.logout()
        self.get(LIST_URL, expected_code=401)

    def test_panels(self):
        """Panels are provided on the purchasing index and PO detail pages."""
        InvenTreeSetting.set_setting('ENABLE_PLUGINS_INTERFACE', True, change_user=None)

        url = reverse('api-plugin-ui-feature-list', kwargs={'feature': 'panel'})

        def panel_keys(**params):
            response = self.get(url, params)
            return {
                p['key']: p for p in response.data if p['plugin_name'] == 'podelivery'
            }

        panels = panel_keys(target_model='purchasing')
        self.assertIn('pending-deliveries', panels)
        self.assertEqual(panels['pending-deliveries']['context']['mode'], 'index')

        # Placed order: editable panel
        panels = panel_keys(target_model='purchaseorder', target_id=3)
        self.assertTrue(panels['deliveries']['context']['editable'])
        self.assertEqual(panels['deliveries']['context']['order_id'], 3)

        # Completed order: read-only panel
        panels = panel_keys(target_model='purchaseorder', target_id=5)
        self.assertFalse(panels['deliveries']['context']['editable'])

        # Pending / cancelled orders: no panel
        self.assertEqual(panel_keys(target_model='purchaseorder', target_id=1), {})
        self.assertEqual(panel_keys(target_model='purchaseorder', target_id=6), {})

        # Other pages: no panel
        self.assertEqual(panel_keys(target_model='part', target_id=1), {})
        self.assertEqual(panel_keys(target_model='sales'), {})

        # No panels without view permission
        self.clearRoles()
        self.assertEqual(panel_keys(target_model='purchasing'), {})
