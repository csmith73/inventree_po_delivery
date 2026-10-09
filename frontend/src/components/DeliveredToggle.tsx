// Delivered Toggle - switch showing / changing the delivery state of a line

import React from "react";
import { Box, Group, Loader, Stack, Switch, Text, Tooltip } from "@mantine/core";
import { IconNote } from "@tabler/icons-react";
import type { DeliveryLine, UpdateDelivery } from "../types";
import { formatDate, formatDateTime } from "../utils";
import { DeliveryEditPopover } from "./DeliveryEditPopover";

interface DeliveredToggleProps {
  row: DeliveryLine;
  today: string;
  canEdit: boolean;
  busy: boolean;
  onUpdate: UpdateDelivery;
}

export function DeliveredToggle({
  row,
  today,
  canEdit,
  busy,
  onUpdate,
}: DeliveredToggleProps) {
  const info = row.delivery;
  const editable = canEdit && row.order.editable;

  const disabledReason = !canEdit
    ? "You do not have permission to change delivery status"
    : !row.order.editable
      ? `Delivery status cannot be changed for ${row.order.status_label} orders`
      : null;

  const deliveredDetail = info.delivered
    ? `Marked delivered${info.delivered_by ? ` by ${info.delivered_by.username}` : ""} on ${formatDateTime(info.delivered_at)}`
    : null;

  return (
    <Group gap={8} wrap="nowrap" align="center">
      <Tooltip
        label={disabledReason ?? deliveredDetail}
        disabled={!disabledReason && !deliveredDetail}
        multiline
        maw={260}
      >
        <Box>
          <Switch
            aria-label="Delivered"
            color="green"
            checked={info.delivered}
            disabled={!editable || busy}
            onChange={(event) =>
              onUpdate({
                lines: [row.pk],
                delivered: event.currentTarget.checked,
              })
            }
          />
        </Box>
      </Tooltip>

      {busy && <Loader size={14} />}

      {info.delivered && (
        <Stack gap={0}>
          <Text size="xs">{formatDate(info.delivered_date)}</Text>
          {info.delivered_by && (
            <Text size="xs" c="dimmed">
              {info.delivered_by.username}
            </Text>
          )}
        </Stack>
      )}

      {info.note && (
        <Tooltip label={info.note} multiline maw={260}>
          <IconNote size={16} color="var(--mantine-color-dimmed)" />
        </Tooltip>
      )}

      {editable && (
        <DeliveryEditPopover row={row} today={today} onUpdate={onUpdate} />
      )}
    </Group>
  );
}
