# InvenTree PO Delivery Plugin

A plugin for [InvenTree](https://inventree.org) that tracks whether purchase order line items have been **physically delivered to the plant**.

"Delivered" is separate from InvenTree's "Received":

| State | Meaning |
|-------|---------|
| **Delivered** (this plugin) | The goods have physically arrived at the plant (on the dock, in receiving, etc.) |
| **Received** (InvenTree) | The goods have been booked into stock against the purchase order |

## Features

- **Pending Deliveries tab** on the Purchasing page (under *Plugin Provided*)
  - Lists every line item which has not been fully received, on purchase orders which are **Placed** or **On Hold**
  - Delivered toggle on every line, with arrival date, who marked it and an optional note (packing slip, dock / bay, etc.)
  - Bulk "Mark Delivered" / "Mark Not Delivered" for a selection of lines (e.g. a whole shipment)
  - Filter by delivery state, supplier, overdue lines, or free-text search; sortable columns
  - Overdue lines (target date passed, not yet delivered) are highlighted
  - Export the filtered list to CSV
- **Deliveries panel** on each Purchase Order page
  - Same table, restricted to the order
  - Optionally show fully received lines
  - Completed orders are shown read-only as a delivery history
- **Order status** on the purchase order list and PO page
  - **Placed** → **Partially Delivered** (at least one line delivered) → **Delivered** (every line delivered)
  - A line counts as delivered if it is marked delivered, or has been fully received. Extra line items (e.g. shipping) are not counted
- **Delivered / Not Delivered badges** in the built-in **Line Items** table of each purchase order (below the Received progress bar)
- **Delivery-only logins** (optional): members of the **Delivery Group** can see all purchase orders and line items, **without any pricing**, and change delivery state - without being able to edit purchase orders (see [Delivery-only logins](#delivery-only-logins))

## How the data is stored

InvenTree does not support parameters on PO line items, so the delivery state is stored in the line item's built-in plugin `metadata` field, under the `po_delivery` key:

```json
{
  "v": 1,
  "line": 123,
  "delivered": true,
  "delivered_date": "2026-10-07",
  "delivered_at": "2026-10-07T14:03:11+00:00",
  "delivered_by": {"pk": 3, "username": "jdoe"},
  "note": "Packing slip 4471, bay 3",
  "changed_at": "2026-10-07T14:03:11+00:00",
  "changed_by": {"pk": 3, "username": "jdoe"}
}
```

- No database migrations or changes to InvenTree are required.
- Only the `metadata` column is written. The line item's received quantity and the order's total price are never touched.
- The record stores the line item ID it belongs to. When a purchase order is duplicated, InvenTree copies line item metadata, so copied lines correctly show as **not** delivered.
- Delivery state is not cleared when items are received: fully received lines drop off the Pending Deliveries tab, and remain visible (with their delivery record) on the PO panel.

## Order status

The plugin uses InvenTree **custom states** to show the delivery status of placed orders. The states are created automatically the first time they are needed, and can be changed (label, color) under **Admin Center → Custom States**:

| Name | Label | Logical status |
|------|-------|----------------|
| `PARTIALLY_DELIVERED` | Partially Delivered | Placed |
| `DELIVERED` | Delivered | Placed |

- The order is still **Placed** as far as InvenTree is concerned: receiving items, completing the order and the "Outstanding" filter all work as normal.
- InvenTree removes the custom status when the order is put on hold, completed or cancelled. When an on-hold order is placed again, the plugin restores the delivery status.
- Filtering the purchase order list by status "Placed" only shows orders without a delivery status. Select the delivery statuses as well, or use the "Outstanding" filter.
- The status is recalculated when lines are marked (un)delivered, and (via plugin events) when items are received, a line is added, or the order is placed. **Enable event integration** must be enabled in the plugin settings for the events.
- If an order already has a different custom status (set by an admin or another plugin), it is left unchanged.
- The status is written directly to the order's custom status column, so concurrent changes to the order are not overwritten.

The order status can be turned off with the **Show Delivery Status on Orders** plugin setting.

## Line Items table badges

InvenTree has no plugin hook for adding columns to its own tables. Instead, the plugin adds a small badge to each row of the PO **Line Items** table:

- **Delivered · Oct 7** (green) - hover for the full date, who marked it, and the note
- **Not Delivered** (grey) - placed / on-hold orders, for lines which have not been fully received

How it works:

- InvenTree has no plugin hook for running a script on every page either, so the plugin overrides the core `favicon.html` template include, which every page loads in its `<head>` (the same approach as the `inventree-table-select-fix` plugin). The script is in `templates/po_delivery/line_items.html`.
- Only one copy of `favicon.html` is used (from the first active plugin in the template search path), so this plugin, `inventree-table-select-fix` and `inventree-mobile-access` ship the **same** `favicon.html`, which includes the scripts of whichever of these plugins are active. When changing it, change every copy and keep them identical.
- The script finds the line item shown in each row from the props the table passes to its cells, and fetches the delivery state from the plugin API. If a future InvenTree version changes the table so that this no longer works, the badges are simply not shown - nothing else is affected.
- The page template is cached, so **restart InvenTree** after activating or deactivating the plugin.
- The badges only appear when the frontend is served by the InvenTree server (e.g. `/web/` on port 8000), not from the frontend development server.

After an InvenTree upgrade, check that the core section of `templates/favicon.html` still matches the core file:

```bash
diff <(sed -n '/core template (begin)/,/core template (end)/{//!p}' inventree_po_delivery/templates/favicon.html) \
     <(sed -n '/<!-- Favicon -->/,$p' /path/to/InvenTree/src/backend/InvenTree/templates/favicon.html)
```

## Plugin Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Show Delivery Status on Orders | Show "Partially Delivered" / "Delivered" as the status of placed purchase orders | On |
| Delivery Group | Members of this group can view all purchase orders and line items (without pricing) and change delivery state, without any Purchase Orders role | (none) |

## Permissions

Permissions follow the InvenTree **Purchase Orders** role, or membership of the **Delivery Group** (plugin setting):

| Action | Required role |
|--------|---------------|
| View the tab / panel | Purchase Orders - View, or Delivery Group |
| Change delivery state | Purchase Orders - Change, or Delivery Group |

Delivery state can only be changed for orders which are **Placed** or **On Hold**.

### Delivery-only logins

InvenTree permissions apply to whole tables: anyone who can view purchase orders can also see their prices (order total, unit prices, supplier price breaks, the PO report, CSV export), and anyone who can change them can edit every field. To give a login (e.g. a receiving terminal) access to deliveries only:

1. **Admin Center → Users → Groups**: add a group (e.g. **Receiving**) and leave **all roles unchecked**.
2. Edit the user: make them a member of **only** that group, and make sure they are not **staff** or **superuser**.
3. **Admin Center → Plugins → PO Delivery Tracking**: set **Delivery Group** to that group. **Enable interface integration** must be on.
4. Log in as the user: a **Deliveries** tab appears in the main menu. It opens a page with two views:
   - **Pending Deliveries** - the same list as the Purchasing page
   - **Purchase Orders** - every purchase order (filter by status, search), with delivered / received progress. Click an order to see its details and all of its line items, and to change their delivery state.

Members of the group:

- Can change delivery state (Placed / On Hold orders), even without the Purchase Orders - Change role.
- See the purchase orders and line items through the plugin only. The plugin API never returns prices, currencies or costs (order totals, unit prices and extra lines such as shipping are left out).
- Cannot open the InvenTree Purchasing, purchase order, supplier or part pages (unless they have the roles for them): these are shown as plain text instead of links.

> **Do not give the group any role that shows prices**: Purchase Orders, Part, BOM, Build Orders, Stock Items, Sales Orders or Return Orders. Each of these makes some prices visible in InvenTree (e.g. part pricing, stock item purchase price). A user also gets the roles of every other group they are a member of.

The **Deliveries** page is a panel on InvenTree's **System Overview** page (`/core/index/deliveries`), which every logged-in user can open. The other tabs on that page (Users, Groups, Contacts) do not show prices; Contacts is empty without a Purchase Orders / Sales Orders role.

## Installation

### Via InvenTree UI

1. Navigate to **Admin Center → Plugins** and click **Install Plugin**
2. Fill in the following:
   - **Package Name**: `inventree-po-delivery`
   - **Source URL**: `git+https://github.com/csmith73/inventree_po_delivery.git`
3. Toggle **Confirm plugin installation** to ON and click **Install**
4. Once installed, activate the **PO Delivery Tracking** plugin
5. Ensure that **Enable URL integration**, **Enable interface integration** and **Enable event integration** are enabled in the plugin settings
6. Restart InvenTree (required for the Line Items table badges)

If you also use `inventree-table-select-fix` (1.0.1 or later) or `inventree-mobile-access`, keep them up to date: they share the `favicon.html` override with this plugin (see [Line Items table badges](#line-items-table-badges)).

### Via plugins.txt

Add this line to your InvenTree `plugins.txt`, then run `invoke plugins` and restart InvenTree:

```
inventree-po-delivery@git+https://github.com/csmith73/inventree_po_delivery.git
```

### From Source (Development)

```bash
git clone https://github.com/csmith73/inventree_po_delivery.git
pip install -e inventree_po_delivery
```

Restart the InvenTree server, then activate the plugin in **Admin Center → Plugins**.

## Frontend Development

The frontend is a React / Mantine bundle, built into `inventree_po_delivery/static/Panel.js`. The built file is committed, so that the plugin can be installed without Node.js.

```bash
cd frontend
npm install
npm run build      # type-check and build static/Panel.js
npm run dev        # rebuild on change (unminified)
```

After rebuilding, copy the static files into InvenTree and hard-refresh the browser:

```bash
cd /path/to/inventree/src/backend/InvenTree
python manage.py collectplugins
```

## API Endpoints

All endpoints are mounted under `/plugin/podelivery/`. None of them return pricing information.

### `GET lines/`

| Query parameter | Description |
|-----------------|-------------|
| `order` | Restrict to a single purchase order (any status) |
| `include_received` | Include fully received lines (only with `order`) |

Without `order`, returns all lines not fully received on Placed / On Hold orders.

```json
{
  "today": "2026-10-07",
  "can_edit": true,
  "links": {"order": true, "supplier": true, "part": true, "supplier_part": true},
  "summary": {"total": 13, "awaiting_delivery": 12, "delivered": 1, "overdue": 8},
  "results": [
    {
      "pk": 1,
      "line": "1",
      "order": {"pk": 1, "reference": "PO0001", "status": 20, "status_label": "Placed", "editable": true, "...": "..."},
      "supplier": {"pk": 1, "name": "DigiKey"},
      "part": {"pk": 43, "IPN": null, "name": "R_100K_0402_1%", "description": "...", "units": ""},
      "supplier_part": {"pk": 12, "SKU": "...", "MPN": "..."},
      "quantity": 1000.0,
      "received": 0.0,
      "remaining": 1000.0,
      "fully_received": false,
      "target_date": "2026-10-10",
      "target_date_source": "line",
      "overdue": false,
      "destination": {"pk": 3, "name": "Bay 3", "pathstring": "Plant/Bay 3"},
      "delivery": {"delivered": false, "delivered_date": null, "...": "..."}
    }
  ]
}
```

`links` says which InvenTree pages the user can open (purchase order, supplier, part, supplier part).

### `GET orders/`

| Query parameter | Description |
|-----------------|-------------|
| `order` | Return a single order (any status) - the other parameters are ignored |
| `status` | `open` (default: Pending, Placed, On Hold), `awaiting` (Placed, On Hold), `complete`, `failed` (Cancelled, Lost, Returned) or `all` |
| `search` | Search the reference, description, supplier name and supplier reference |

Returns the newest 250 matching orders (`count` is the total number of matches):

```json
{
  "today": "2026-10-07",
  "can_edit": true,
  "links": {"order": false, "supplier": false, "part": false, "supplier_part": false},
  "count": 1,
  "results": [
    {
      "pk": 3,
      "reference": "PO0003",
      "description": "...",
      "supplier": {"pk": 1, "name": "DigiKey"},
      "supplier_reference": "SO-4471",
      "creation_date": "2026-09-30",
      "issue_date": "2026-10-01",
      "target_date": "2026-10-10",
      "complete_date": null,
      "destination": null,
      "editable": true,
      "status": 20,
      "status_label": "Partially Delivered",
      "...": "...",
      "lines": {"total": 5, "received": 1, "delivered": 2, "overdue": 0},
      "overdue": false
    }
  ]
}
```

A line counts as delivered if it is marked delivered, or fully received. Overdue lines (target date passed, not delivered) are only counted on open orders.

### `POST lines/set-delivered/`

```json
{
  "lines": [1, 2, 3],
  "delivered": true,
  "delivered_date": "2026-10-06",
  "note": "Packing slip 4471"
}
```

- `delivered_date` is optional (defaults to today, or keeps the existing date) and cannot be in the future
- `note` is optional (omit to keep the existing note), maximum 250 characters
- Up to 500 lines per request
- All-or-nothing: if any line is missing (`404`) or belongs to an order which is not Placed / On Hold (`400`), nothing is changed

Response:

```json
{"updated": [1, 2], "unchanged": [3], "delivery": {"1": {"delivered": true, "...": "..."}}}
```

## Running Tests

From the InvenTree backend directory, with the plugin installed:

```bash
cd /path/to/inventree/src/backend/InvenTree
INVENTREE_PLUGINS_ENABLED=True INVENTREE_PLUGIN_TESTING=True INVENTREE_PLUGIN_TESTING_SETUP=True \
  python manage.py test inventree_po_delivery
```

## Requirements

- InvenTree 1.4.0 or later

## License

MIT License - see [LICENSE](LICENSE) for details.
