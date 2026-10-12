// API hooks for the PO Delivery plugin

import { useMutation, useQuery } from "@tanstack/react-query";
import type { InvenTreePluginContext } from "@inventreedb/ui";
import type {
  DeliveryLinesResponse,
  OrderQuery,
  OrdersResponse,
  SetDeliveredRequest,
  SetDeliveredResponse,
} from "./types";

const API_BASE = "/plugin/podelivery";

// Base query key - invalidating this refreshes every delivery panel
export const QUERY_KEY = ["po-delivery"];

// Fetch PO line items along with their delivery state
export function useDeliveryLines(
  context: InvenTreePluginContext,
  orderId: number | undefined,
  includeReceived: boolean
) {
  return useQuery<DeliveryLinesResponse>(
    {
      queryKey: [
        ...QUERY_KEY,
        "lines",
        { orderId: orderId ?? null, includeReceived },
      ],
      queryFn: async () => {
        const params: Record<string, string | number> = {};

        if (orderId) {
          params.order = orderId;

          if (includeReceived) {
            params.include_received = "true";
          }
        }

        const response = await context.api.get(`${API_BASE}/lines/`, {
          params,
        });
        return response.data;
      },
      // Receiving terminals may be left open - keep the data fresh
      refetchInterval: 60_000,
      refetchOnWindowFocus: true,
    },
    context.queryClient
  );
}

// Fetch purchase orders along with their delivery progress
export function useOrders(context: InvenTreePluginContext, query: OrderQuery) {
  return useQuery<OrdersResponse>(
    {
      queryKey: [...QUERY_KEY, "orders", query],
      queryFn: async () => {
        const params: Record<string, string | number> = {};

        if (query.order) {
          params.order = query.order;
        } else {
          params.status = query.status ?? "open";

          if (query.search) {
            params.search = query.search;
          }
        }

        const response = await context.api.get(`${API_BASE}/orders/`, {
          params,
        });
        return response.data;
      },
      // Keep showing the list while a new search loads (not for a single order)
      placeholderData: query.order ? undefined : (previous) => previous,
      refetchInterval: 60_000,
      refetchOnWindowFocus: true,
    },
    context.queryClient
  );
}

// Set the delivery state of one or more line items
export function useSetDelivered(context: InvenTreePluginContext) {
  return useMutation<SetDeliveredResponse, unknown, SetDeliveredRequest>(
    {
      mutationFn: async (data) => {
        const response = await context.api.post(
          `${API_BASE}/lines/set-delivered/`,
          data
        );
        return response.data;
      },
      onSuccess: () => {
        // Let the Line Items table indicators (templates/po_delivery/line_items.html) refresh
        window.dispatchEvent(new CustomEvent("po-delivery:changed"));
      },
      onSettled: () =>
        context.queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
    },
    context.queryClient
  );
}

// Extract a readable error message from an API error
export function errorMessage(err: unknown): string {
  const response = (err as { response?: { data?: { error?: string } } })
    ?.response;

  if (response?.data?.error) {
    return response.data.error;
  }

  return err instanceof Error ? err.message : "Unknown error";
}
