// Deliveries Panel - main panel component (Purchasing index and Purchase Order pages)

import React, { useCallback, useMemo, useState } from "react";
import { Alert, Group, Loader, Stack, Text, Title } from "@mantine/core";
import { useDebouncedValue, useLocalStorage } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconInfoCircle, IconLock, IconX } from "@tabler/icons-react";
import type { InvenTreePluginContext } from "@inventreedb/ui";
import { errorMessage, useDeliveryLines, useSetDelivered } from "../api";
import type {
  DeliveredFilter,
  LinkPermissions,
  PanelContext,
  PanelMode,
  SortColumn,
  SortState,
  UpdateDelivery,
} from "../types";
import { exportToCsv, filterLines, sortLines } from "../utils";
import { BulkActionBar } from "./BulkActionBar";
import { DeliveryTable } from "./DeliveryTable";
import { SummaryBadges } from "./SummaryBadges";
import { Toolbar } from "./Toolbar";

// Links to InvenTree pages, if the API does not say otherwise
const ALL_LINKS: LinkPermissions = {
  order: true,
  supplier: true,
  part: true,
  supplier_part: true,
};

interface DeliveriesPanelProps {
  context: InvenTreePluginContext;
  // Used by the Deliveries page, in place of the panel context
  mode?: PanelMode;
  orderId?: number;
  editable?: boolean;
  // Open an order within the Deliveries page (instead of the PO page)
  onOpenOrder?: (pk: number) => void;
}

export function DeliveriesPanel({
  context,
  mode: modeProp,
  orderId: orderIdProp,
  editable,
  onOpenOrder,
}: DeliveriesPanelProps) {
  const panel = (context.context ?? {}) as PanelContext;
  const mode: PanelMode =
    modeProp ?? (panel.mode === "order" ? "order" : "index");
  const orderId =
    mode === "order"
      ? Number(orderIdProp ?? panel.order_id ?? context.id)
      : undefined;
  const orderEditable =
    mode === "index" || (editable ?? panel.editable) !== false;

  // Filter state (persisted per panel type)
  const storageKey = `po-delivery-${mode}`;

  const [delivered, setDelivered] = useLocalStorage<DeliveredFilter>({
    key: `${storageKey}-delivered`,
    defaultValue: "all",
  });
  const [overdueOnly, setOverdueOnly] = useLocalStorage<boolean>({
    key: `${storageKey}-overdue`,
    defaultValue: false,
  });
  const [showReceived, setShowReceived] = useLocalStorage<boolean>({
    key: `${storageKey}-received`,
    defaultValue: false,
  });
  const [sort, setSort] = useLocalStorage<SortState>({
    key: `${storageKey}-sort`,
    defaultValue: {
      column: mode === "order" ? "line" : "target",
      direction: "asc",
    },
  });

  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 300);
  const [supplier, setSupplier] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [busy, setBusy] = useState<Set<number>>(new Set());

  // Completed orders have no outstanding lines, so always show all lines
  const includeReceived = mode === "order" && (!orderEditable || showReceived);

  const { data, isLoading, isError, error, isFetching, refetch } =
    useDeliveryLines(context, orderId, includeReceived);

  const { mutateAsync } = useSetDelivered(context);

  const canEdit = !!data?.can_edit;
  const links = data?.links ?? ALL_LINKS;
  const today = data?.today ?? new Date().toISOString().slice(0, 10);
  const allRows = data?.results ?? [];

  // Supplier filter options
  const supplierOptions = useMemo(() => {
    const suppliers = new Map<string, string>();

    for (const row of allRows) {
      if (row.supplier) {
        suppliers.set(String(row.supplier.pk), row.supplier.name);
      }
    }

    return [...suppliers.entries()]
      .map(([value, label]) => ({ value, label }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [allRows]);

  const rows = useMemo(
    () =>
      sortLines(
        filterLines(allRows, {
          search: debouncedSearch,
          delivered,
          supplier,
          overdueOnly,
        }),
        sort
      ),
    [allRows, debouncedSearch, delivered, supplier, overdueOnly, sort]
  );

  // Only lines which are visible and editable can be acted on
  const selectedRows = useMemo(
    () => rows.filter((row) => selected.has(row.pk) && row.order.editable),
    [rows, selected]
  );

  const onSort = useCallback(
    (column: SortColumn) =>
      setSort((prev) => ({
        column,
        direction:
          prev.column === column && prev.direction === "asc" ? "desc" : "asc",
      })),
    [setSort]
  );

  const onSelect = useCallback((pk: number, checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(pk);
      } else {
        next.delete(pk);
      }
      return next;
    });
  }, []);

  const onSelectAll = useCallback(
    (checked: boolean) => {
      setSelected((prev) => {
        const next = new Set(prev);
        for (const row of rows) {
          if (!row.order.editable) continue;
          if (checked) {
            next.add(row.pk);
          } else {
            next.delete(row.pk);
          }
        }
        return next;
      });
    },
    [rows]
  );

  const updateDelivery: UpdateDelivery = useCallback(
    async (request, successMessage) => {
      setBusy((prev) => new Set([...prev, ...request.lines]));

      try {
        await mutateAsync(request);

        if (successMessage) {
          notifications.show({
            title: "Delivery updated",
            message: successMessage,
            color: "green",
          });
        }

        return true;
      } catch (err) {
        notifications.show({
          title: "Failed to update delivery",
          message: errorMessage(err),
          color: "red",
        });

        return false;
      } finally {
        setBusy((prev) => {
          const next = new Set(prev);
          request.lines.forEach((pk) => next.delete(pk));
          return next;
        });
      }
    },
    [mutateAsync]
  );

  const bulkUpdate = useCallback(
    async (value: boolean) => {
      const lines = selectedRows.map((row) => row.pk);

      const ok = await updateDelivery(
        { lines, delivered: value },
        `${lines.length} line${lines.length === 1 ? "" : "s"} marked as ${value ? "delivered" : "not delivered"}`
      );

      if (ok) {
        setSelected(new Set());
      }
    },
    [selectedRows, updateDelivery]
  );

  const onExport = useCallback(() => {
    const name =
      mode === "order" && allRows.length > 0
        ? `${allRows[0].order.reference}-deliveries`
        : `pending-deliveries-${today}`;

    exportToCsv(rows, `${name}.csv`);
  }, [mode, allRows, rows, today]);

  const title = mode === "order" ? "Deliveries" : "Pending Deliveries";

  if (isLoading) {
    return (
      <Stack align="center" justify="center" p="xl">
        <Loader size="lg" />
        <Text c="dimmed">Loading line items...</Text>
      </Stack>
    );
  }

  if (isError || !data) {
    return (
      <Alert
        icon={<IconX size={16} />}
        title="Error Loading Data"
        color="red"
        variant="light"
      >
        {errorMessage(error)}
      </Alert>
    );
  }

  return (
    <Stack gap="md">
      {/* Header */}
      <Group justify="space-between" wrap="wrap">
        <Group gap="sm">
          <Title order={3}>{title}</Title>
          <SummaryBadges
            summary={data.summary}
            delivered={delivered}
            overdueOnly={overdueOnly}
            onFilter={(value, overdue) => {
              setDelivered(value);
              setOverdueOnly(overdue);
            }}
          />
        </Group>
      </Group>

      <Text size="sm" c="dimmed">
        {mode === "index"
          ? "Line items on placed or on-hold purchase orders which have not been fully received. "
          : ""}
        "Delivered" records that items have physically arrived at the plant. It
        is separate from "Received", which books the items into stock.
      </Text>

      {!orderEditable && (
        <Alert icon={<IconLock size={16} />} color="gray" variant="light">
          Delivery status can only be changed while the order is Placed or On
          Hold.
        </Alert>
      )}

      <Toolbar
        mode={mode}
        search={search}
        onSearch={setSearch}
        delivered={delivered}
        onDelivered={setDelivered}
        supplier={supplier}
        supplierOptions={supplierOptions}
        onSupplier={setSupplier}
        overdueOnly={overdueOnly}
        onOverdueOnly={setOverdueOnly}
        includeReceived={includeReceived}
        includeReceivedLocked={!orderEditable}
        onIncludeReceived={setShowReceived}
        refreshing={isFetching}
        onRefresh={() => refetch()}
        onExport={onExport}
      />

      {canEdit && selectedRows.length > 0 && (
        <BulkActionBar
          count={selectedRows.length}
          loading={selectedRows.some((row) => busy.has(row.pk))}
          onMarkDelivered={() => bulkUpdate(true)}
          onMarkNotDelivered={() => bulkUpdate(false)}
          onClear={() => setSelected(new Set())}
        />
      )}

      {allRows.length === 0 ? (
        <Alert icon={<IconInfoCircle size={16} />} color="gray" variant="light">
          {mode === "index"
            ? "There are no outstanding line items on placed or on-hold purchase orders."
            : "There are no outstanding line items on this order."}
        </Alert>
      ) : rows.length === 0 ? (
        <Alert icon={<IconInfoCircle size={16} />} color="gray" variant="light">
          No line items match the current filters.
        </Alert>
      ) : (
        <DeliveryTable
          rows={rows}
          mode={mode}
          context={context}
          today={today}
          canEdit={canEdit}
          links={links}
          sort={sort}
          onSort={onSort}
          selected={selected}
          onSelect={onSelect}
          onSelectAll={onSelectAll}
          busy={busy}
          onUpdate={updateDelivery}
          onOpenOrder={onOpenOrder}
        />
      )}
    </Stack>
  );
}
