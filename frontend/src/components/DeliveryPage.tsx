// Deliveries Page - the "Deliveries" panel on the System Overview page.
//
// Used by members of the Delivery Group, who may have no Purchase Orders role
// (and so cannot open the Purchasing or Purchase Order pages). Everything is
// loaded from the plugin API, which does not return any pricing information.

import React, { useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Group,
  Loader,
  Paper,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import type { InvenTreePluginContext } from "@inventreedb/ui";
import { errorMessage, useOrders } from "../api";
import { formatDate, statusColor } from "../utils";
import { DeliveriesPanel } from "./DeliveriesPanel";
import { OrderBrowser } from "./OrderBrowser";

type PageView = "pending" | "orders";

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Stack gap={0}>
      <Text size="xs" c="dimmed">
        {label}
      </Text>
      <Text size="sm">{value || "-"}</Text>
    </Stack>
  );
}

// A single purchase order: order details and its line items
function OrderView({
  context,
  orderId,
  onBack,
}: {
  context: InvenTreePluginContext;
  orderId: number;
  onBack: () => void;
}) {
  const { data, isLoading, isError, error } = useOrders(context, {
    order: orderId,
  });

  const order = data?.results[0];

  const back = (
    <Group>
      <Button
        variant="subtle"
        size="xs"
        leftSection={<IconArrowLeft size={14} />}
        onClick={onBack}
      >
        Back
      </Button>
    </Group>
  );

  if (isLoading) {
    return (
      <Stack align="center" justify="center" p="xl">
        <Loader size="lg" />
      </Stack>
    );
  }

  if (isError || !order) {
    return (
      <Stack gap="md">
        {back}
        <Alert
          icon={<IconX size={16} />}
          title="Error Loading Data"
          color="red"
          variant="light"
        >
          {isError ? errorMessage(error) : "Purchase order not found"}
        </Alert>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
      {back}

      <Paper p="md" withBorder>
        <Stack gap="sm">
          <Group gap="sm">
            <Title order={3}>{order.reference}</Title>
            <Badge variant="light" color={statusColor(order.status_color)}>
              {order.status_label}
            </Badge>
          </Group>
          {order.description && <Text size="sm">{order.description}</Text>}
          <SimpleGrid cols={{ base: 2, sm: 3, lg: 6 }} spacing="sm">
            <Field label="Supplier" value={order.supplier?.name} />
            <Field label="Supplier Reference" value={order.supplier_reference} />
            <Field label="Issued" value={formatDate(order.issue_date)} />
            <Field label="Target Date" value={formatDate(order.target_date)} />
            <Field
              label="Completed"
              value={order.complete_date ? formatDate(order.complete_date) : "-"}
            />
            <Field label="Destination" value={order.destination?.pathstring} />
          </SimpleGrid>
        </Stack>
      </Paper>

      <DeliveriesPanel
        key={order.pk}
        context={context}
        mode="order"
        orderId={order.pk}
        editable={order.editable}
      />
    </Stack>
  );
}

export function DeliveryPage({ context }: { context: InvenTreePluginContext }) {
  const [view, setView] = useLocalStorage<PageView>({
    key: "po-delivery-page-view",
    defaultValue: "pending",
  });

  const [orderId, setOrderId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  if (orderId !== null) {
    return (
      <OrderView
        context={context}
        orderId={orderId}
        onBack={() => setOrderId(null)}
      />
    );
  }

  return (
    <Stack gap="md">
      <SegmentedControl
        value={view}
        onChange={(value) => setView(value as PageView)}
        data={[
          { label: "Pending Deliveries", value: "pending" },
          { label: "Purchase Orders", value: "orders" },
        ]}
        style={{ alignSelf: "flex-start" }}
      />

      {view === "orders" ? (
        <OrderBrowser
          context={context}
          search={search}
          onSearch={setSearch}
          onOpenOrder={setOrderId}
        />
      ) : (
        <DeliveriesPanel context={context} mode="index" onOpenOrder={setOrderId} />
      )}
    </Stack>
  );
}
