// Detail Link Component - link to an InvenTree page (ctrl / middle click opens a new tab)

import React from "react";
import { Anchor, Text } from "@mantine/core";
import {
  getBaseUrl,
  navigateToLink,
  type InvenTreePluginContext,
} from "@inventreedb/ui";

interface DetailLinkProps {
  context: InvenTreePluginContext;
  path: string;
  children: React.ReactNode;
  fw?: number;
  // Shown as plain text if the user cannot open the page
  enabled?: boolean;
  // Open within the plugin instead of navigating to the InvenTree page
  onOpen?: () => void;
}

export function DetailLink({
  context,
  path,
  children,
  fw,
  enabled = true,
  onOpen,
}: DetailLinkProps) {
  if (onOpen) {
    return (
      <Anchor component="button" type="button" size="sm" fw={fw} onClick={onOpen}>
        {children}
      </Anchor>
    );
  }

  if (!enabled) {
    return (
      <Text size="sm" fw={fw}>
        {children}
      </Text>
    );
  }

  return (
    <Anchor
      href={`/${getBaseUrl()}${path}`}
      size="sm"
      fw={fw}
      onClick={(event) => navigateToLink(path, context.navigate, event)}
    >
      {children}
    </Anchor>
  );
}
