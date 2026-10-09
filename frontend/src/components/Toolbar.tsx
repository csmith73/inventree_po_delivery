// Toolbar - search and filter controls for the delivery table

import React from "react";
import {
  ActionIcon,
  Divider,
  Group,
  Paper,
  SegmentedControl,
  Select,
  Switch,
  Tooltip,
} from "@mantine/core";
import { IconFileSpreadsheet, IconRefresh } from "@tabler/icons-react";
import type { DeliveredFilter, PanelMode } from "../types";
import { SearchInput } from "./SearchInput";

interface ToolbarProps {
  mode: PanelMode;
  search: string;
  onSearch: (value: string) => void;
  delivered: DeliveredFilter;
  onDelivered: (value: DeliveredFilter) => void;
  supplier: string | null;
  supplierOptions: { value: string; label: string }[];
  onSupplier: (value: string | null) => void;
  overdueOnly: boolean;
  onOverdueOnly: (value: boolean) => void;
  includeReceived: boolean;
  includeReceivedLocked: boolean;
  onIncludeReceived: (value: boolean) => void;
  refreshing: boolean;
  onRefresh: () => void;
  onExport: () => void;
}

export function Toolbar({
  mode,
  search,
  onSearch,
  delivered,
  onDelivered,
  supplier,
  supplierOptions,
  onSupplier,
  overdueOnly,
  onOverdueOnly,
  includeReceived,
  includeReceivedLocked,
  onIncludeReceived,
  refreshing,
  onRefresh,
  onExport,
}: ToolbarProps) {
  return (
    <Paper p="sm" withBorder>
      <Group justify="space-between" wrap="wrap" gap="sm">
        <SearchInput value={search} onChange={onSearch} />

        <Group gap="xs" wrap="wrap">
          <SegmentedControl
            size="xs"
            value={delivered}
            onChange={(value) => onDelivered(value as DeliveredFilter)}
            data={[
              { label: "All", value: "all" },
              { label: "Awaiting Delivery", value: "awaiting" },
              { label: "Delivered", value: "delivered" },
            ]}
          />

          {mode === "index" && (
            <Select
              size="xs"
              placeholder="All suppliers"
              data={supplierOptions}
              value={supplier}
              onChange={onSupplier}
              searchable
              clearable
              w={200}
            />
          )}

          <Divider orientation="vertical" />

          <Switch
            size="xs"
            color="red"
            label="Overdue Only"
            checked={overdueOnly}
            onChange={(event) => onOverdueOnly(event.currentTarget.checked)}
          />

          {mode === "order" && (
            <Tooltip
              label="Completed orders always show all lines"
              disabled={!includeReceivedLocked}
            >
              <Switch
                size="xs"
                label="Show Received Lines"
                checked={includeReceived}
                disabled={includeReceivedLocked}
                onChange={(event) =>
                  onIncludeReceived(event.currentTarget.checked)
                }
              />
            </Tooltip>
          )}

          <Divider orientation="vertical" />

          <Tooltip label="Refresh">
            <ActionIcon variant="light" loading={refreshing} onClick={onRefresh}>
              <IconRefresh size={16} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Export to CSV">
            <ActionIcon variant="light" color="green" onClick={onExport}>
              <IconFileSpreadsheet size={16} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </Paper>
  );
}
