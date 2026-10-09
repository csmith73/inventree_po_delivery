// Summary Badges - line counts, which also act as quick filters

import React from "react";
import { Badge, Group } from "@mantine/core";
import {
  IconAlertTriangle,
  IconClock,
  IconList,
  IconTruckDelivery,
} from "@tabler/icons-react";
import type { DeliveredFilter, DeliverySummary } from "../types";

interface SummaryBadgesProps {
  summary: DeliverySummary;
  delivered: DeliveredFilter;
  overdueOnly: boolean;
  onFilter: (delivered: DeliveredFilter, overdueOnly: boolean) => void;
}

export function SummaryBadges({
  summary,
  delivered,
  overdueOnly,
  onFilter,
}: SummaryBadgesProps) {
  const badges = [
    {
      key: "all",
      label: `${summary.total} Lines`,
      color: "blue",
      icon: <IconList size={12} />,
      active: delivered === "all" && !overdueOnly,
      onClick: () => onFilter("all", false),
    },
    {
      key: "awaiting",
      label: `${summary.awaiting_delivery} Awaiting Delivery`,
      color: "orange",
      icon: <IconClock size={12} />,
      active: delivered === "awaiting" && !overdueOnly,
      onClick: () => onFilter("awaiting", false),
    },
    {
      key: "delivered",
      label: `${summary.delivered} Delivered`,
      color: "green",
      icon: <IconTruckDelivery size={12} />,
      active: delivered === "delivered" && !overdueOnly,
      onClick: () => onFilter("delivered", false),
    },
    {
      key: "overdue",
      label: `${summary.overdue} Overdue`,
      color: "red",
      icon: <IconAlertTriangle size={12} />,
      active: overdueOnly,
      onClick: () => onFilter("all", true),
      hidden: summary.overdue === 0,
    },
  ];

  return (
    <Group gap="xs">
      {badges
        .filter((badge) => !badge.hidden)
        .map((badge) => (
          <Badge
            key={badge.key}
            size="lg"
            color={badge.color}
            variant={badge.active ? "filled" : "light"}
            leftSection={badge.icon}
            style={{ cursor: "pointer" }}
            onClick={badge.onClick}
          >
            {badge.label}
          </Badge>
        ))}
    </Group>
  );
}
