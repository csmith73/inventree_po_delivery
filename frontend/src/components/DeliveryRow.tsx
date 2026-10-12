// Delivery Row - a single PO line item in the delivery table

import React from "react";
import {
  Badge,
  Checkbox,
  Group,
  Progress,
  Stack,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import type { InvenTreePluginContext } from "@inventreedb/ui";
import type {
  DeliveryLine,
  LinkPermissions,
  PanelMode,
  UpdateDelivery,
} from "../types";
import { formatDate, formatQuantity, statusColor } from "../utils";
import { DeliveredToggle } from "./DeliveredToggle";
import { DetailLink } from "./DetailLink";

interface DeliveryRowProps {
  row: DeliveryLine;
  mode: PanelMode;
  context: InvenTreePluginContext;
  today: string;
  canEdit: boolean;
  links: LinkPermissions;
  selected: boolean;
  busy: boolean;
  onSelect: (pk: number, selected: boolean) => void;
  onUpdate: UpdateDelivery;
  onOpenOrder?: (pk: number) => void;
}

// Theme-aware row tint
function rowBackground(row: DeliveryLine): string | undefined {
  if (row.delivery.delivered && !row.fully_received) {
    return "var(--mantine-color-green-light)";
  }

  if (row.overdue) {
    return "var(--mantine-color-red-light)";
  }

  return undefined;
}

export function DeliveryRow({
  row,
  mode,
  context,
  today,
  canEdit,
  links,
  selected,
  busy,
  onSelect,
  onUpdate,
  onOpenOrder,
}: DeliveryRowProps) {
  const progress =
    row.quantity > 0 ? Math.min(100, (row.received / row.quantity) * 100) : 0;

  return (
    <Table.Tr style={{ backgroundColor: rowBackground(row) }}>
      {canEdit && (
        <Table.Td>
          <Checkbox
            aria-label="Select line"
            checked={selected}
            disabled={!row.order.editable}
            onChange={(event) => onSelect(row.pk, event.currentTarget.checked)}
          />
        </Table.Td>
      )}

      {/* Line number (order panel) */}
      {mode === "order" && (
        <Table.Td>
          <Text size="sm">{row.line || "-"}</Text>
        </Table.Td>
      )}

      {/* Purchase order + status (index panel) */}
      {mode === "index" && (
        <Table.Td>
          <Stack gap={2}>
            <DetailLink
              context={context}
              path={`/purchasing/purchase-order/${row.order.pk}/`}
              fw={600}
              enabled={links.order}
              onOpen={onOpenOrder && (() => onOpenOrder(row.order.pk))}
            >
              {row.order.reference}
            </DetailLink>
            <Group gap={4}>
              <Badge
                size="xs"
                variant="light"
                color={statusColor(row.order.status_color)}
              >
                {row.order.status_label}
              </Badge>
              {row.line && (
                <Text size="xs" c="dimmed">
                  Line {row.line}
                </Text>
              )}
            </Group>
          </Stack>
        </Table.Td>
      )}

      {/* Supplier (index panel) */}
      {mode === "index" && (
        <Table.Td>
          <Stack gap={0}>
            {row.supplier ? (
              <DetailLink
                context={context}
                path={`/purchasing/supplier/${row.supplier.pk}/`}
                enabled={links.supplier}
              >
                {row.supplier.name}
              </DetailLink>
            ) : (
              <Text size="sm">-</Text>
            )}
            {row.order.supplier_reference && (
              <Text size="xs" c="dimmed">
                {row.order.supplier_reference}
              </Text>
            )}
          </Stack>
        </Table.Td>
      )}

      {/* Part */}
      <Table.Td>
        {row.part ? (
          <Stack gap={0}>
            <DetailLink
              context={context}
              path={`/part/${row.part.pk}/`}
              fw={600}
              enabled={links.part}
            >
              {row.part.IPN || row.part.name}
            </DetailLink>
            {row.part.IPN && <Text size="xs">{row.part.name}</Text>}
            {row.part.description && (
              <Tooltip label={row.part.description} multiline maw={350}>
                <Text size="xs" c="dimmed" lineClamp={1}>
                  {row.part.description}
                </Text>
              </Tooltip>
            )}
          </Stack>
        ) : (
          <Text size="sm" c="dimmed">
            {row.reference || "-"}
          </Text>
        )}
      </Table.Td>

      {/* Supplier part */}
      <Table.Td>
        {row.supplier_part ? (
          <Stack gap={0}>
            <DetailLink
              context={context}
              path={`/purchasing/supplier-part/${row.supplier_part.pk}/`}
              enabled={links.supplier_part}
            >
              {row.supplier_part.SKU}
            </DetailLink>
            {row.supplier_part.MPN && (
              <Text size="xs" c="dimmed">
                {row.supplier_part.MPN}
              </Text>
            )}
          </Stack>
        ) : (
          <Text size="sm">-</Text>
        )}
      </Table.Td>

      {/* Received / quantity */}
      <Table.Td>
        <Tooltip
          label={`${formatQuantity(row.remaining)} remaining to be received`}
        >
          <Stack gap={4}>
            <Text size="sm" style={{ whiteSpace: "nowrap" }}>
              {formatQuantity(row.received)} / {formatQuantity(row.quantity)}
              {row.part?.units ? ` ${row.part.units}` : ""}
            </Text>
            <Progress
              value={progress}
              size="sm"
              color={row.fully_received ? "green" : "blue"}
            />
          </Stack>
        </Tooltip>
      </Table.Td>

      {/* Target date */}
      <Table.Td>
        <Group gap={4} wrap="nowrap">
          {row.overdue && (
            <Tooltip label="Delivery is overdue">
              <IconAlertTriangle size={14} color="var(--mantine-color-red-6)" />
            </Tooltip>
          )}
          <Text
            size="sm"
            c={row.overdue ? "red" : undefined}
            fw={row.overdue ? 600 : undefined}
            style={{ whiteSpace: "nowrap" }}
          >
            {formatDate(row.target_date)}
          </Text>
        </Group>
        {row.target_date_source === "order" && (
          <Text size="xs" c="dimmed">
            (order)
          </Text>
        )}
      </Table.Td>

      {/* Destination */}
      <Table.Td>
        <Text size="sm">{row.destination?.pathstring ?? "-"}</Text>
      </Table.Td>

      {/* Delivered */}
      <Table.Td>
        <DeliveredToggle
          row={row}
          today={today}
          canEdit={canEdit}
          busy={busy}
          onUpdate={onUpdate}
        />
      </Table.Td>
    </Table.Tr>
  );
}
