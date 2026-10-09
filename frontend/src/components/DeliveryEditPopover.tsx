// Delivery Edit Popover - set the arrival date and delivery note for a line

import React, { useCallback, useState } from "react";
import {
  ActionIcon,
  Button,
  Group,
  Popover,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import type { DeliveryLine, UpdateDelivery } from "../types";

const NOTE_MAX_LENGTH = 250;

interface DeliveryEditPopoverProps {
  row: DeliveryLine;
  today: string;
  onUpdate: UpdateDelivery;
}

export function DeliveryEditPopover({
  row,
  today,
  onUpdate,
}: DeliveryEditPopoverProps) {
  const [opened, setOpened] = useState(false);
  const [delivered, setDelivered] = useState(true);
  const [date, setDate] = useState(today);
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  const label = row.part?.IPN || row.part?.name || `Line ${row.line || row.pk}`;

  const openEditor = useCallback(() => {
    // Opening the editor is most commonly used to record a delivery
    setDelivered(true);
    setDate(row.delivery.delivered_date ?? today);
    setNote(row.delivery.note ?? "");
    setOpened(true);
  }, [row, today]);

  const dateError = !delivered
    ? null
    : !date
      ? "Arrival date is required"
      : date > today
        ? "Arrival date cannot be in the future"
        : null;

  const save = useCallback(async () => {
    setSaving(true);

    const ok = await onUpdate(
      {
        lines: [row.pk],
        delivered,
        delivered_date: delivered ? date : undefined,
        note: note.trim(),
      },
      delivered
        ? `${row.order.reference} - ${label} marked as delivered`
        : `${row.order.reference} - ${label} updated`
    );

    setSaving(false);

    if (ok) {
      setOpened(false);
    }
  }, [onUpdate, row, delivered, date, note, label]);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position="bottom-end"
      withArrow
      shadow="md"
      trapFocus
    >
      <Popover.Target>
        <Tooltip label="Edit arrival date / note">
          <ActionIcon
            variant="subtle"
            size="sm"
            color="gray"
            onClick={() => (opened ? setOpened(false) : openEditor())}
          >
            <IconPencil size={14} />
          </ActionIcon>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="xs" style={{ minWidth: 260 }}>
          <Text size="sm" fw={600}>
            {row.order.reference} — {label}
          </Text>
          <Switch
            label="Delivered to plant"
            color="green"
            checked={delivered}
            onChange={(event) => setDelivered(event.currentTarget.checked)}
          />
          <TextInput
            type="date"
            label="Arrival date"
            value={delivered ? date : ""}
            max={today}
            disabled={!delivered}
            error={dateError}
            onChange={(event) => setDate(event.currentTarget.value)}
          />
          <Textarea
            label="Note"
            placeholder="e.g. packing slip number, dock / bay"
            value={note}
            maxLength={NOTE_MAX_LENGTH}
            autosize
            minRows={2}
            onChange={(event) => setNote(event.currentTarget.value)}
          />
          <Group justify="flex-end" gap="xs">
            <Button
              variant="default"
              size="xs"
              onClick={() => setOpened(false)}
              disabled={saving}
            >
              Cancel
            </Button>
            <Button
              size="xs"
              onClick={save}
              loading={saving}
              disabled={!!dateError}
            >
              Save
            </Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
