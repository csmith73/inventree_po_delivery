// Filtering and sorting utilities

import type { DeliveryLine, LineFilters, SortState } from "../types";

// Text which can be matched by the search box
function searchText(row: DeliveryLine): string {
  return [
    row.order.reference,
    row.order.supplier_reference,
    row.supplier?.name,
    row.part?.IPN,
    row.part?.name,
    row.part?.description,
    row.supplier_part?.SKU,
    row.supplier_part?.MPN,
    row.destination?.pathstring,
    row.reference,
    row.delivery.note,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function filterLines(
  rows: DeliveryLine[],
  filters: LineFilters
): DeliveryLine[] {
  const terms = filters.search.toLowerCase().split(/\s+/).filter(Boolean);

  return rows.filter((row) => {
    if (filters.delivered === "delivered" && !row.delivery.delivered) {
      return false;
    }

    if (
      filters.delivered === "awaiting" &&
      (row.delivery.delivered || row.fully_received)
    ) {
      return false;
    }

    if (filters.supplier && String(row.supplier?.pk) !== filters.supplier) {
      return false;
    }

    if (filters.overdueOnly && !row.overdue) {
      return false;
    }

    if (terms.length > 0) {
      const text = searchText(row);
      return terms.every((term) => text.includes(term));
    }

    return true;
  });
}

// Return the value used to sort a row by the given column
function sortValue(row: DeliveryLine, column: SortState["column"]) {
  switch (column) {
    case "line":
      return Number(row.line) || row.line || null;
    case "order":
      return row.order.reference;
    case "supplier":
      return row.supplier?.name ?? null;
    case "part":
      return row.part?.IPN || row.part?.name || null;
    case "sku":
      return row.supplier_part?.SKU ?? null;
    case "quantity":
      return row.remaining;
    case "target":
      return row.target_date;
    case "destination":
      return row.destination?.pathstring ?? null;
    case "delivered":
      return row.delivery.delivered ? row.delivery.delivered_date ?? "" : null;
  }
}

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

function compareValues(
  a: string | number | null,
  b: string | number | null
): number {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return collator.compare(String(a), String(b));
}

export function sortLines(
  rows: DeliveryLine[],
  sort: SortState
): DeliveryLine[] {
  const direction = sort.direction === "asc" ? 1 : -1;

  return [...rows].sort((a, b) => {
    const va = sortValue(a, sort.column);
    const vb = sortValue(b, sort.column);

    // Empty values are always placed last
    const emptyA = va === null || va === "";
    const emptyB = vb === null || vb === "";

    if (emptyA !== emptyB) return emptyA ? 1 : -1;

    const result = emptyA ? 0 : compareValues(va, vb) * direction;

    // Tie-break on order reference and line number
    return (
      result ||
      collator.compare(a.order.reference, b.order.reference) ||
      collator.compare(a.line, b.line) ||
      a.pk - b.pk
    );
  });
}
