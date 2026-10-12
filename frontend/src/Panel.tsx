// PO Delivery Panel - entry point for the plugin panels

import React from "react";
import { checkPluginVersion, type InvenTreePluginContext } from "@inventreedb/ui";

import { LocalizedComponent } from "./locale";
import { DeliveriesPanel, DeliveryPage } from "./components";

function renderDeliveriesPanel(context: InvenTreePluginContext) {
  checkPluginVersion(context);

  return (
    <LocalizedComponent locale={context.locale}>
      <DeliveriesPanel context={context} />
    </LocalizedComponent>
  );
}

// "Pending Deliveries" panel on the Purchasing index page
export function renderIndexPanel(context: InvenTreePluginContext) {
  return renderDeliveriesPanel(context);
}

// "Deliveries" panel on the Purchase Order detail page
export function renderOrderPanel(context: InvenTreePluginContext) {
  return renderDeliveriesPanel(context);
}

// "Deliveries" panel on the System Overview page (Delivery Group)
export function renderDeliveryPage(context: InvenTreePluginContext) {
  checkPluginVersion(context);

  return (
    <LocalizedComponent locale={context.locale}>
      <DeliveryPage context={context} />
    </LocalizedComponent>
  );
}

export default renderIndexPanel;
