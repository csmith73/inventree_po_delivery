// Type definitions for the PO Delivery plugin

export type PanelMode = "index" | "order";

// Context provided by the plugin backend (get_ui_panels)
export interface PanelContext {
  mode: PanelMode;
  can_edit: boolean;
  order_id?: number;
  editable?: boolean;
}

export interface UserRef {
  pk: number;
  username: string;
}

export interface DeliveryInfo {
  delivered: boolean;
  delivered_date: string | null;
  delivered_at: string | null;
  delivered_by: UserRef | null;
  note: string;
  changed_at: string | null;
  changed_by: UserRef | null;
}

export interface DeliveryOrder {
  pk: number;
  reference: string;
  supplier_reference: string;
  issue_date: string | null;
  target_date: string | null;
  editable: boolean;
  status: number;
  status_custom_key: number | null;
  status_label: string;
  status_color: string;
}

export interface DeliveryLine {
  pk: number;
  line: string;
  reference: string;
  order: DeliveryOrder;
  supplier: { pk: number; name: string } | null;
  part: {
    pk: number;
    IPN: string | null;
    name: string;
    description: string;
    units: string;
  } | null;
  supplier_part: { pk: number; SKU: string; MPN: string | null } | null;
  quantity: number;
  received: number;
  remaining: number;
  fully_received: boolean;
  target_date: string | null;
  target_date_source: "line" | "order" | null;
  overdue: boolean;
  destination: { pk: number; name: string; pathstring: string } | null;
  delivery: DeliveryInfo;
}

export interface DeliverySummary {
  total: number;
  awaiting_delivery: number;
  delivered: number;
  overdue: number;
}

export interface DeliveryLinesResponse {
  today: string;
  can_edit: boolean;
  summary: DeliverySummary;
  results: DeliveryLine[];
}

export interface SetDeliveredRequest {
  lines: number[];
  delivered: boolean;
  delivered_date?: string;
  note?: string;
}

export interface SetDeliveredResponse {
  updated: number[];
  unchanged: number[];
  delivery: Record<string, DeliveryInfo>;
}

export type DeliveredFilter = "all" | "awaiting" | "delivered";

export type SortColumn =
  | "line"
  | "order"
  | "supplier"
  | "part"
  | "sku"
  | "quantity"
  | "target"
  | "destination"
  | "delivered";

export interface SortState {
  column: SortColumn;
  direction: "asc" | "desc";
}

export interface LineFilters {
  search: string;
  delivered: DeliveredFilter;
  supplier: string | null;
  overdueOnly: boolean;
}

// Function used to change the delivery state of one or more lines
export type UpdateDelivery = (
  request: SetDeliveredRequest,
  successMessage?: string
) => Promise<boolean>;
