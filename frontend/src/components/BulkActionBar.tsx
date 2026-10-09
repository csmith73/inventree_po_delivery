// Bulk Action Bar - mark multiple selected lines as delivered / not delivered

import React from "react";
import { Button, Group, Paper, Text } from "@mantine/core";
import { IconTruckDelivery, IconTruckOff, IconX } from "@tabler/icons-react";

interface BulkActionBarProps {
  count: number;
  loading: boolean;
  onMarkDelivered: () => void;
  onMarkNotDelivered: () => void;
  onClear: () => void;
}

export function BulkActionBar({
  count,
  loading,
  onMarkDelivered,
  onMarkNotDelivered,
  onClear,
}: BulkActionBarProps) {
  return (
    <Paper p="xs" withBorder bg="var(--mantine-primary-color-light)">
      <Group justify="space-between" wrap="wrap" gap="xs">
        <Text size="sm" fw={600}>
          {count} line{count === 1 ? "" : "s"} selected
        </Text>
        <Group gap="xs">
          <Button
            size="xs"
            color="green"
            leftSection={<IconTruckDelivery size={14} />}
            loading={loading}
            onClick={onMarkDelivered}
          >
            Mark Delivered
          </Button>
          <Button
            size="xs"
            variant="default"
            leftSection={<IconTruckOff size={14} />}
            disabled={loading}
            onClick={onMarkNotDelivered}
          >
            Mark Not Delivered
          </Button>
          <Button
            size="xs"
            variant="subtle"
            color="gray"
            leftSection={<IconX size={14} />}
            disabled={loading}
            onClick={onClear}
          >
            Clear Selection
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}
