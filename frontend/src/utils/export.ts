// CSV export utility

import type { DeliveryLine } from "../types";

function csvValue(value: string | number | boolean | null | undefined): string {
  if (value === null || value === undefined) return "";

  const text = String(value);

  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }

  return text;
}

export function exportToCsv(rows: DeliveryLine[], filename: string) {
  const header = [
    "Purchase Order",
    "Order Status",
    "Supplier",
    "Supplier Reference",
    "Line",
    "IPN",
    "Part",
    "Description",
    "SKU",
    "MPN",
    "Quantity",
    "Received",
    "Remaining",
    "Target Date",
    "Overdue",
    "Destination",
    "Delivered",
    "Delivered Date",
    "Delivered By",
    "Delivery Note",
  ];

  const lines = rows.map((row) =>
    [
      row.order.reference,
      row.order.status_label,
      row.supplier?.name,
      row.order.supplier_reference,
      row.line,
      row.part?.IPN,
      row.part?.name,
      row.part?.description,
      row.supplier_part?.SKU,
      row.supplier_part?.MPN,
      row.quantity,
      row.received,
      row.remaining,
      row.target_date,
      row.overdue ? "Yes" : "No",
      row.destination?.pathstring,
      row.delivery.delivered ? "Yes" : "No",
      row.delivery.delivered_date,
      row.delivery.delivered_by?.username,
      row.delivery.note,
    ]
      .map(csvValue)
      .join(",")
  );

  // Include a BOM so that Excel detects UTF-8 encoding
  const csv = "﻿" + [header.join(","), ...lines].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
