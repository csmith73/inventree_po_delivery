// Order Browser - list of purchase orders (no pricing), for the Deliveries page

import React from "react";
import {
  ActionIcon,
  Alert,
  Anchor,
  Badge,
  Group,
  Loader,
  Paper,
  Progress,
  Select,
  Stack,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDebouncedValue, useLocalStorage } from "@mantine/hooks";
import { IconAlertTriangle, IconInfoCircle, IconRefresh, IconX } from "@tabler/icons-react";
import type { InvenTreePluginContext } from "@inventreedb/ui";
import { errorMessage, useOrders } from "../api";
import type { OrderStatusFilter, OrderSummary } from "../types";
import { formatDate, statusColor } from "../utils";
import { SearchInput } from "./SearchInput";

const STATUS_OPTIONS: { value: OrderStatusFilter; label: string }[] = [
  { value: "open", label: "Open (pending, placed, on hold)" },
  { value: "awaiting", label: "Awaiting delivery (placed, on hold)" },
  { value: "complete", label: "Complete" },
  { value: "failed", label: "Cancelled / lost / returned" },
  { value: "all", label: "All orders" },
];

// Count of lines, with a progress bar
function LineProgress({
  label,
  value,
  total,
  color,
}: {
  label: string;
  value: number;
  total: number;
  color: string;
}) {
  return (
    <Stack gap={2} miw={110}>
      <Text size="xs" style={{ whiteSpace: "nowrap" }}>
        {label} {value} / {total}
      </Text>
      <Progress
        value={total > 0 ? (value / total) * 100 : 0}
        size="sm"
        color={color}
      />
    </Stack>
  );
}

function OrderRow({
  order,
  onOpen,
}: {
  order: OrderSummary;
  onOpen: (pk: number) => void;
}) {
  const { lines } = order;

  return (
    <Table.Tr
      style={{
        cursor: "pointer",
        backgroundColor: order.overdue
          ? "var(--mantine-color-red-light)"
          : undefined,
      }}
      onClick={() => onOpen(order.pk)}
    >
      <Table.Td>
        <Stack gap={0}>
          <Anchor
            component="button"
            type="button"
            size="sm"
            fw={600}
            onClick={(event) => {
              event.stopPropagation();
              onOpen(order.pk);
            }}
          >
            {order.reference}
          </Anchor>
          {order.description && (
            <Text size="xs" c="dimmed" lineClamp={1}>
              {order.description}
            </Text>
          )}
        </Stack>
      </Table.Td>

      <Table.Td>
        <Stack gap={0}>
          <Text size="sm">{order.supplier?.name ?? "-"}</Text>
          {order.supplier_reference && (
            <Text size="xs" c="dimmed">
              {order.supplier_reference}
            </Text>
          )}
        </Stack>
      </Table.Td>

      <Table.Td>
        <Badge size="sm" variant="light" color={statusColor(order.status_color)}>
          {order.status_label}
        </Badge>
      </Table.Td>

      <Table.Td>
        <Text size="sm" style={{ whiteSpace: "nowrap" }}>
          {formatDate(order.issue_date)}
        </Text>
      </Table.Td>

      <Table.Td>
        <Group gap={4} wrap="nowrap">
          {order.overdue && (
            <Tooltip
              label={`${lines.overdue} line${lines.overdue === 1 ? "" : "s"} overdue`}
            >
              <IconAlertTriangle size={14} color="var(--mantine-color-red-6)" />
            </Tooltip>
          )}
          <Text
            size="sm"
            c={order.overdue ? "red" : undefined}
            fw={order.overdue ? 600 : undefined}
            style={{ whiteSpace: "nowrap" }}
          >
            {formatDate(order.target_date)}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Text size="sm">{order.destination?.pathstring ?? "-"}</Text>
      </Table.Td>

      <Table.Td>
        <Group gap="md" wrap="nowrap">
          <LineProgress
            label="Delivered"
            value={lines.delivered}
            total={lines.total}
            color="teal"
          />
          <LineProgress
            label="Received"
            value={lines.received}
            total={lines.total}
            color="green"
          />
        </Group>
      </Table.Td>
    </Table.Tr>
  );
}

export function OrderBrowser({
  context,
  search,
  onSearch,
  onOpenOrder,
}: {
  context: InvenTreePluginContext;
  // Kept by the page, so that it is not lost when an order is opened
  search: string;
  onSearch: (value: string) => void;
  onOpenOrder: (pk: number) => void;
}) {
  const [status, setStatus] = useLocalStorage<OrderStatusFilter>({
    key: "po-delivery-orders-status",
    defaultValue: "open",
  });

  const [debouncedSearch] = useDebouncedValue(search.trim(), 300);

  const { data, isLoading, isError, error, isFetching, refetch } = useOrders(
    context,
    { status, search: debouncedSearch }
  );

  const orders = data?.results ?? [];

  return (
    <Stack gap="md">
      <Paper p="sm" withBorder>
        <Group justify="space-between" wrap="wrap" gap="sm">
          <SearchInput
            value={search}
            onChange={onSearch}
            placeholder="Search order, supplier, supplier reference..."
          />

          <Group gap="xs" wrap="wrap">
            <Select
              size="xs"
              data={STATUS_OPTIONS}
              value={status}
              onChange={(value) =>
                setStatus((value as OrderStatusFilter | null) ?? "open")
              }
              allowDeselect={false}
              w={260}
            />

            <Tooltip label="Refresh">
              <ActionIcon
                variant="light"
                loading={isFetching}
                onClick={() => refetch()}
              >
                <IconRefresh size={16} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </Paper>

      {isLoading ? (
        <Stack align="center" justify="center" p="xl">
          <Loader size="lg" />
          <Text c="dimmed">Loading purchase orders...</Text>
        </Stack>
      ) : isError || !data ? (
        <Alert
          icon={<IconX size={16} />}
          title="Error Loading Data"
          color="red"
          variant="light"
        >
          {errorMessage(error)}
        </Alert>
      ) : orders.length === 0 ? (
        <Alert icon={<IconInfoCircle size={16} />} color="gray" variant="light">
          No purchase orders match the current filters.
        </Alert>
      ) : (
        <>
          <Table.ScrollContainer minWidth={1000} maxHeight="65vh" type="native">
            <Table stickyHeader highlightOnHover verticalSpacing="xs">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Purchase Order</Table.Th>
                  <Table.Th>Supplier</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Issued</Table.Th>
                  <Table.Th>Target Date</Table.Th>
                  <Table.Th>Destination</Table.Th>
                  <Table.Th>Lines</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {orders.map((order) => (
                  <OrderRow key={order.pk} order={order} onOpen={onOpenOrder} />
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>

          {data.count > orders.length && (
            <Text size="sm" c="dimmed">
              Showing the newest {orders.length} of {data.count} orders. Search
              to find older orders.
            </Text>
          )}
        </>
      )}
    </Stack>
  );
}
