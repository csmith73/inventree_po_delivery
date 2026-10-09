// Detail Link Component - link to an InvenTree page (ctrl / middle click opens a new tab)

import React from "react";
import { Anchor } from "@mantine/core";
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
}

export function DetailLink({ context, path, children, fw }: DetailLinkProps) {
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
