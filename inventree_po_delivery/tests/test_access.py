"""Tests for the "Delivery Group" (delivery-only access, without pricing)."""

from django.contrib.auth.models import Group
from django.urls import reverse

from common.models import InvenTreeSetting
from order.models import PurchaseOrder
from order.status_codes import PurchaseOrderStatus, PurchaseOrderStatusGroups
from plugin import registry

from inventree_po_delivery import helpers

from .base import LIST_URL, PODeliveryTestCase

ORDERS_URL = '/plugin/podelivery/orders/'

# Response keys which would indicate pricing information
PRICING_WORDS = ('price', 'cost', 'currency')


def find_pricing_keys(data, path=''):
    """Return the paths of all keys in the data which look like pricing information."""
    found = []

    if isinstance(data, dict):
        for key, value in data.items():
            if any(word in str(key).lower() for word in PRICING_WORDS):
                found.append(f'{path}.{key}')
            found += find_pricing_keys(value, f'{path}.{key}')
    elif isinstance(data, list):
        for idx, value in enumerate(data):
            found += find_pricing_keys(value, f'{path}[{idx}]')

    return found


class DeliveryGroupTest(PODeliveryTestCase):
    """A member of the Delivery Group, with no InvenTree roles."""

    @classmethod
    def setUpTestData(cls):
        """Create the Delivery Group, and remove all roles from the user."""
        super().setUpTestData()

        cls.delivery_group = Group.objects.create(name='Receiving')
        cls.user.groups.add(cls.delivery_group)
        cls.clearRoles()

    def setUp(self):
        """Select the Delivery Group in the plugin settings."""
        super().setUp()
        self.set_group(self.delivery_group)

    def set_group(self, group):
        """Set (or clear) the Delivery Group plugin setting."""
        plugin = registry.get_plugin('podelivery')
        plugin.set_setting('DELIVERY_GROUP', str(group.pk) if group else '')

    def order_pks(self, **params):
        """Return the order pks returned by the order list."""
        response = self.get(ORDERS_URL, params)
        return [row['pk'] for row in response.data['results']]

    def test_urls(self):
        """The order list URL is mounted."""
        self.assertEqual(reverse('plugin:podelivery:delivery-orders'), ORDERS_URL)

    def test_group_access(self):
        """Group members can view and change delivery state without any role."""
        self.assertTrue(helpers.in_delivery_group(self.user))
        self.assertFalse(self.user.has_perm(helpers.PERM_VIEW))

        response = self.get(LIST_URL)
        self.assertTrue(response.data['can_edit'])
        self.assertGreater(len(response.data['results']), 0)

        # No links to InvenTree pages which the user cannot open
        self.assertEqual(
            response.data['links'],
            {'order': False, 'supplier': False, 'part': False, 'supplier_part': False},
        )

        response = self.get(ORDERS_URL)
        self.assertTrue(response.data['can_edit'])
        self.assertFalse(any(response.data['links'].values()))

        self.set_delivered([self.line_open.pk])
        self.line_open.refresh_from_db()
        self.assertTrue(helpers.get_delivery(self.line_open)['delivered'])
        self.assertEqual(
            helpers.get_delivery(self.line_open)['delivered_by']['pk'], self.user.pk
        )

        # Completed orders are still read-only
        self.set_delivered([self.line_complete.pk], expected_code=400)

    def test_no_core_access(self):
        """Group members cannot read purchase orders (and their prices) from InvenTree."""
        self.get(reverse('api-po-list'), expected_code=403)
        self.get(reverse('api-po-detail', kwargs={'pk': 3}), expected_code=403)
        self.get(reverse('api-po-line-list'), expected_code=403)
        self.get(reverse('api-po-extra-line-list'), expected_code=403)
        self.get(reverse('api-part-supplier-price-list'), expected_code=403)

    def test_no_pricing(self):
        """The plugin API does not return any pricing information."""
        # Make sure the orders have prices to leak
        line = self.line_open
        line.purchase_price = 12.34
        line.save()

        responses = [
            self.get(LIST_URL),
            self.get(LIST_URL, {'order': 3, 'include_received': True}),
            self.get(LIST_URL, {'order': 5}),
            self.get(ORDERS_URL, {'status': 'all'}),
        ]

        for response in responses:
            self.assertEqual(find_pricing_keys(response.data), [])
            self.assertNotIn('12.34', str(response.data))

    def test_not_in_group(self):
        """Without the group (or the setting), a user without roles has no access."""
        self.set_group(None)
        self.assertFalse(helpers.in_delivery_group(self.user))

        self.get(LIST_URL, expected_code=403)
        self.get(ORDERS_URL, expected_code=403)
        self.set_delivered([self.line_open.pk], expected_code=403)

        # Another group selected
        self.set_group(Group.objects.create(name='Other'))

        self.get(LIST_URL, expected_code=403)
        self.get(ORDERS_URL, expected_code=403)

        # Invalid setting value
        registry.get_plugin('podelivery').set_setting('DELIVERY_GROUP', 'abc')
        self.assertIsNone(helpers.delivery_group_id())

    def test_view_role_and_group(self):
        """A user with only the view role can change delivery state via the group."""
        self.assignRole('purchase_order.view')

        response = self.get(LIST_URL)
        self.assertTrue(response.data['can_edit'])
        self.assertTrue(response.data['links']['order'])

        self.set_delivered([self.line_open.pk])

        # Not in the group: view only
        self.set_group(None)
        response = self.get(LIST_URL)
        self.assertFalse(response.data['can_edit'])
        self.set_delivered([self.line_open.pk], expected_code=403)

    def test_order_list_status(self):
        """The order list is filtered by status group."""

        def expected(statuses):
            queryset = PurchaseOrder.objects.all()
            if statuses is not None:
                queryset = queryset.filter(status__in=statuses)
            return set(queryset.values_list('pk', flat=True))

        # Default: open orders
        self.assertEqual(set(self.order_pks()), expected(PurchaseOrderStatusGroups.OPEN))

        for name, statuses in [
            ('open', PurchaseOrderStatusGroups.OPEN),
            ('awaiting', helpers.editable_statuses()),
            ('complete', [PurchaseOrderStatus.COMPLETE.value]),
            ('failed', PurchaseOrderStatusGroups.FAILED),
            ('all', None),
        ]:
            pks = set(self.order_pks(status=name))
            self.assertEqual(pks, expected(statuses), name)

        self.assertIn(5, self.order_pks(status='complete'))
        self.assertIn(6, self.order_pks(status='failed'))

        self.get(ORDERS_URL, {'status': 'xyz'}, expected_code=400)

        # A single order, of any status
        self.assertEqual(self.order_pks(order=5), [5])
        self.assertEqual(self.order_pks(order=6, status='open'), [6])
        self.assertEqual(self.order_pks(order=99999), [])
        self.get(ORDERS_URL, {'order': 'abc'}, expected_code=400)

    def test_order_list_search(self):
        """Search by reference, description and supplier."""
        self.assertEqual(self.order_pks(status='all', search='PO-0003'), [3])
        self.assertEqual(
            self.order_pks(status='all', search='more screws'),
            list(
                PurchaseOrder.objects.filter(description__icontains='more screws')
                .order_by('-reference_int')
                .values_list('pk', flat=True)
            ),
        )

        supplier = PurchaseOrder.objects.get(pk=1).supplier
        pks = self.order_pks(status='all', search=supplier.name.upper())
        self.assertIn(1, pks)

        for pk in pks:
            self.assertEqual(PurchaseOrder.objects.get(pk=pk).supplier, supplier)

    def test_order_list_order_and_limit(self):
        """Newest orders first, limited to MAX_ORDERS, with the total count."""
        pks = self.order_pks(status='all')
        refs = [PurchaseOrder.objects.get(pk=pk).reference_int for pk in pks]
        self.assertEqual(refs, sorted(refs, reverse=True))

        original = helpers.MAX_ORDERS

        try:
            helpers.MAX_ORDERS = 2
            response = self.get(ORDERS_URL, {'status': 'all'})
        finally:
            helpers.MAX_ORDERS = original

        self.assertEqual(len(response.data['results']), 2)
        self.assertEqual(response.data['count'], PurchaseOrder.objects.count())
        self.assertEqual([row['pk'] for row in response.data['results']], pks[:2])

    def test_order_list_fields(self):
        """Check the serialized order data and line counts."""
        rows = {row['pk']: row for row in self.get(ORDERS_URL).data['results']}

        # PO-0003 (Placed): open (overdue), partially received and fully received lines
        order = rows[3]
        lines = PurchaseOrder.objects.get(pk=3).lines.all()
        fully_received = sum(1 for line in lines if line.received >= line.quantity)

        self.assertEqual(order['reference'], 'PO-0003')
        self.assertEqual(order['status'], PurchaseOrderStatus.PLACED.value)
        self.assertTrue(order['editable'])
        self.assertIsNotNone(order['supplier'])
        self.assertEqual(order['lines']['total'], lines.count())
        self.assertEqual(order['lines']['received'], fully_received)
        self.assertEqual(order['lines']['delivered'], fully_received)
        self.assertGreaterEqual(order['lines']['overdue'], 1)
        self.assertTrue(order['overdue'])

        self.set_delivered([self.line_open.pk])

        rows = {row['pk']: row for row in self.get(ORDERS_URL).data['results']}
        self.assertEqual(rows[3]['lines']['delivered'], fully_received + 1)
        self.assertEqual(rows[3]['lines']['received'], fully_received)

        # Pending orders are listed, but not editable
        self.assertFalse(rows[1]['editable'])

        # Completed orders are never overdue
        rows = {row['pk']: row for row in self.get(ORDERS_URL, {'status': 'all'}).data['results']}
        self.assertFalse(rows[5]['overdue'])
        self.assertFalse(rows[5]['editable'])

    def test_ui_features(self):
        """The "Deliveries" page and menu tab are provided for group members only."""
        InvenTreeSetting.set_setting('ENABLE_PLUGINS_INTERFACE', True, change_user=None)

        def features(feature, **params):
            url = reverse('api-plugin-ui-feature-list', kwargs={'feature': feature})
            response = self.get(url, params)
            return {
                f['key']: f for f in response.data if f['plugin_name'] == 'podelivery'
            }

        panels = features('panel', target_model='core')
        self.assertEqual(set(panels), {'deliveries'})
        self.assertEqual(panels['deliveries']['context']['mode'], 'page')
        self.assertTrue(panels['deliveries']['context']['can_edit'])
        self.assertIn('renderDeliveryPage', panels['deliveries']['source'])

        navs = features('navigation')
        self.assertEqual(
            navs['deliveries']['options']['url'], '/core/index/deliveries'
        )

        # Purchasing / PO panels are still provided (the pages themselves need the role)
        self.assertIn('pending-deliveries', features('panel', target_model='purchasing'))

        # Not in the group
        self.set_group(None)
        self.assertEqual(features('panel', target_model='core'), {})
        self.assertEqual(features('navigation'), {})

        # Users with the Purchase Orders role (not in the group) use the Purchasing page
        self.assignRole('purchase_order.view')
        self.assertEqual(features('panel', target_model='core'), {})
        self.assertEqual(features('navigation'), {})
        self.assertIn('pending-deliveries', features('panel', target_model='purchasing'))
