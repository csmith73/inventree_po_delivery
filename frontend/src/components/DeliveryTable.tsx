// Delivery Table - sortable, selectable table of PO line items

import React from "react";
import { Checkbox, Group, Table, Text, UnstyledButton } from "@mantine/core";
import {
  IconChevronDown,
  IconChevronUp,
  IconSelector,
} from "@tabler/icons-react";
import type { InvenTreePluginContext } from "@inventreedb/ui";
import type {
  DeliveryLine,
  LinkPermissions,
  PanelMode,
  SortColumn,
  SortState,
  UpdateDelivery,
} from "../types";
import { DeliveryRow } from "./DeliveryRow";

interface SortableHeaderProps {
  label: string;
  column: SortColumn;
  sort: SortState;
  onSort: (column: SortColumn) => void;
}

function SortableHeader({ label, column, sort, onSort }: SortableHeaderProps) {
  const active = sort.column === column;
  const Icon = !active
    ? IconSelector
    : sort.direction === "asc"
      ? IconChevronUp
      : IconChevronDown;

  return (
    <Table.Th style={{ whiteSpace: "nowrap" }}>
      <UnstyledButton onClick={() => onSort(column)}>
        <Group gap={4} wrap="nowrap">
          <Text size="sm" fw={600}>
            {label}
          </Text>
          <Icon size={14} />
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

interface DeliveryTableProps {
  rows: DeliveryLine[];
  mode: PanelMode;
  context: InvenTreePluginContext;
  today: string;
  canEdit: boolean;
  links: LinkPermissions;
  sort: SortState;
  onSort: (column: SortColumn) => void;
  selected: Set<number>;
  onSelect: (pk: number, selected: boolean) => void;
  onSelectAll: (selected: boolean) => void;
  busy: Set<number>;
  onUpdate: UpdateDelivery;
  onOpenOrder?: (pk: number) => void;
}

export function DeliveryTable({
  rows,
  mode,
  context,
  today,
  canEdit,
  links,
  sort,
  onSort,
  selected,
  onSelect,
  onSelectAll,
  busy,
  onUpdate,
  onOpenOrder,
}: DeliveryTableProps) {
  const selectable = rows.filter((row) => row.order.editable);
  const selectedCount = selectable.filter((row) => selected.has(row.pk)).length;
  const allSelected = selectable.length > 0 && selectedCount === selectable.length;

  const header = (label: string, column: SortColumn) => (
    <SortableHeader label={label} column={column} sort={sort} onSort={onSort} />
  );

  return (
    <Table.ScrollContainer
      minWidth={mode === "index" ? 1150 : 900}
      maxHeight="65vh"
      type="native"
    >
      <Table stickyHeader highlightOnHover verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            {canEdit && (
              <Table.Th style={{ width: 40 }}>
                <Checkbox
                  aria-label="Select all lines"
                  checked={allSelected}
                  indeterminate={selectedCount > 0 && !allSelected}
                  disabled={selectable.length === 0}
                  onChange={(event) => onSelectAll(event.currentTarget.checked)}
                />
              </Table.Th>
            )}
            {mode === "order" && header("Line", "line")}
            {mode === "index" && header("Purchase Order", "order")}
            {mode === "index" && header("Supplier", "supplier")}
            {header("Part", "part")}
            {header("Supplier Part", "sku")}
            {header("Received", "quantity")}
            {header("Target Date", "target")}
            {header("Destination", "destination")}
            {header("Delivered", "delivered")}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row) => (
            <DeliveryRow
              key={row.pk}
              row={row}
              mode={mode}
              context={context}
              today={today}
              canEdit={canEdit}
              links={links}
              selected={selected.has(row.pk)}
              busy={busy.has(row.pk)}
              onSelect={onSelect}
              onUpdate={onUpdate}
              onOpenOrder={onOpenOrder}
            />
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
