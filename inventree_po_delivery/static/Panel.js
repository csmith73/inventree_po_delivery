var pr = (e) => {
  throw TypeError(e);
};
var Rt = (e, t, r) => t.has(e) || pr("Cannot " + r);
var c = (e, t, r) => (Rt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), C = (e, t, r) => t.has(e) ? pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), v = (e, t, r, n) => (Rt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), T = (e, t, r) => (Rt(e, t, "access private method"), r);
const mr = "1.4.5";
var g = /* @__PURE__ */ ((e) => (e.api_server_info = "", e.user_list = "user/", e.user_set_password = "user/:id/set-password/", e.user_tokens = "user/tokens/", e.user_simple_login = "email/generate/", e.user_me_profile = "user/me/profile/", e.user_me_roles = "user/me/roles/", e.user_me_token = "user/me/token/", e.user_me = "user/me/", e.auth_base = "/auth/", e.user_reset = "auth/v1/auth/password/request", e.user_reset_set = "auth/v1/auth/password/reset", e.auth_pwd_change = "auth/v1/account/password/change", e.auth_login = "auth/v1/auth/login", e.auth_login_2fa = "auth/v1/auth/2fa/authenticate", e.auth_session = "auth/v1/auth/session", e.auth_signup = "auth/v1/auth/signup", e.auth_authenticators = "auth/v1/account/authenticators", e.auth_recovery = "auth/v1/account/authenticators/recovery-codes", e.auth_mfa_reauthenticate = "auth/v1/auth/2fa/reauthenticate", e.auth_totp = "auth/v1/account/authenticators/totp", e.auth_trust = "auth/v1/auth/2fa/trust", e.auth_webauthn = "auth/v1/account/authenticators/webauthn", e.auth_webauthn_login = "auth/v1/auth/webauthn/authenticate", e.auth_reauthenticate = "auth/v1/auth/reauthenticate", e.auth_email = "auth/v1/account/email", e.auth_email_verify = "auth/v1/auth/email/verify", e.auth_providers = "auth/v1/account/providers", e.auth_provider_redirect = "auth/v1/auth/provider/redirect", e.auth_config = "auth/v1/config", e.currency_list = "currency/exchange/", e.currency_refresh = "currency/refresh/", e.all_units = "units/all/", e.task_overview = "background-task/", e.task_pending_list = "background-task/pending/", e.task_scheduled_list = "background-task/scheduled/", e.task_failed_list = "background-task/failed/", e.api_search = "search/", e.settings_global_list = "settings/global/", e.settings_user_list = "settings/user/", e.news = "news/", e.global_status = "generic/status/", e.custom_state_list = "generic/status/custom/", e.version = "version/", e.license = "license/", e.group_list = "user/group/", e.owner_list = "user/owner/", e.ruleset_list = "user/ruleset/", e.content_type_list = "contenttype/", e.icons = "icons/", e.selectionlist_list = "selection/", e.selectionentry_list = "selection/:id/entry/", e.barcode = "barcode/", e.barcode_history = "barcode/history/", e.barcode_link = "barcode/link/", e.barcode_unlink = "barcode/unlink/", e.barcode_generate = "barcode/generate/", e.data_output = "data-output/", e.import_session_list = "importer/session/", e.import_session_accept_fields = "importer/session/:id/accept_fields/", e.import_session_accept_rows = "importer/session/:id/accept_rows/", e.import_session_column_mapping_list = "importer/column-mapping/", e.import_session_row_list = "importer/row/", e.notifications_list = "notifications/", e.notifications_readall = "notifications/readall/", e.build_order_list = "build/", e.build_order_issue = "build/:id/issue/", e.build_order_cancel = "build/:id/cancel/", e.build_order_hold = "build/:id/hold/", e.build_order_complete = "build/:id/finish/", e.build_output_complete = "build/:id/complete/", e.build_output_create = "build/:id/create-output/", e.build_output_scrap = "build/:id/scrap-outputs/", e.build_output_delete = "build/:id/delete-outputs/", e.build_order_auto_allocate = "build/:id/auto-allocate/", e.build_order_allocate = "build/:id/allocate/", e.build_order_consume = "build/:id/consume/", e.build_order_deallocate = "build/:id/unallocate/", e.build_line_list = "build/line/", e.build_item_list = "build/item/", e.bom_list = "bom/", e.bom_item_validate = "bom/:id/validate/", e.bom_validate = "part/:id/bom-validate/", e.bom_substitute_list = "bom/substitute/", e.part_list = "part/", e.part_thumbs_list = "part/thumbs/", e.part_pricing = "part/:id/pricing/", e.part_requirements = "part/:id/requirements/", e.part_serial_numbers = "part/:id/serial-numbers/", e.part_scheduling = "part/:id/scheduling/", e.part_pricing_internal = "part/internal-price/", e.part_pricing_sale = "part/sale-price/", e.part_stocktake_list = "part/stocktake/", e.part_stocktake_generate = "part/stocktake/generate/", e.category_list = "part/category/", e.category_tree = "part/category/tree/", e.category_parameter_list = "part/category/parameters/", e.related_part_list = "part/related/", e.part_test_template_list = "part/test-template/", e.company_list = "company/", e.contact_list = "company/contact/", e.address_list = "company/address/", e.supplier_part_list = "company/part/", e.supplier_part_pricing_list = "company/price-break/", e.manufacturer_part_list = "company/part/manufacturer/", e.stock_location_list = "stock/location/", e.stock_location_type_list = "stock/location-type/", e.stock_location_tree = "stock/location/tree/", e.stock_item_list = "stock/", e.stock_tracking_list = "stock/track/", e.stock_test_result_list = "stock/test/", e.stock_transfer = "stock/transfer/", e.stock_remove = "stock/remove/", e.stock_return = "stock/return/", e.stock_add = "stock/add/", e.stock_count = "stock/count/", e.stock_change_status = "stock/change_status/", e.stock_merge = "stock/merge/", e.stock_assign = "stock/assign/", e.stock_status = "stock/status/", e.stock_convert = "stock/:id/convert/", e.stock_install = "stock/:id/install/", e.stock_uninstall = "stock/:id/uninstall/", e.stock_serialize = "stock/:id/serialize/", e.stock_serial_info = "stock/:id/serial-numbers/", e.generate_batch_code = "generate/batch-code/", e.generate_serial_number = "generate/serial-number/", e.purchase_order_list = "order/po/", e.purchase_order_issue = "order/po/:id/issue/", e.purchase_order_hold = "order/po/:id/hold/", e.purchase_order_cancel = "order/po/:id/cancel/", e.purchase_order_complete = "order/po/:id/complete/", e.purchase_order_line_list = "order/po-line/", e.purchase_order_extra_line_list = "order/po-extra-line/", e.purchase_order_receive = "order/po/:id/receive/", e.sales_order_list = "order/so/", e.sales_order_issue = "order/so/:id/issue/", e.sales_order_hold = "order/so/:id/hold/", e.sales_order_cancel = "order/so/:id/cancel/", e.sales_order_ship = "order/so/:id/ship/", e.sales_order_complete = "order/so/:id/complete/", e.sales_order_allocate = "order/so/:id/allocate/", e.sales_order_allocate_serials = "order/so/:id/allocate-serials/", e.sales_order_auto_allocate = "order/so/:id/auto-allocate/", e.sales_order_line_list = "order/so-line/", e.sales_order_extra_line_list = "order/so-extra-line/", e.sales_order_allocation_list = "order/so-allocation/", e.sales_order_shipment_list = "order/so/shipment/", e.sales_order_shipment_complete = "order/so/shipment/:id/ship/", e.return_order_list = "order/ro/", e.return_order_issue = "order/ro/:id/issue/", e.return_order_hold = "order/ro/:id/hold/", e.return_order_cancel = "order/ro/:id/cancel/", e.return_order_complete = "order/ro/:id/complete/", e.return_order_receive = "order/ro/:id/receive/", e.return_order_line_list = "order/ro-line/", e.return_order_extra_line_list = "order/ro-extra-line/", e.transfer_order_list = "order/transfer-order/", e.transfer_order_issue = "order/transfer-order/:id/issue/", e.transfer_order_hold = "order/transfer-order/:id/hold/", e.transfer_order_cancel = "order/transfer-order/:id/cancel/", e.transfer_order_complete = "order/transfer-order/:id/complete/", e.transfer_order_allocate = "order/transfer-order/:id/allocate/", e.transfer_order_allocate_serials = "order/transfer-order/:id/allocate-serials/", e.transfer_order_line_list = "order/transfer-order-line/", e.transfer_order_allocation_list = "order/transfer-order-allocation/", e.label_list = "label/template/", e.label_print = "label/print/", e.report_list = "report/template/", e.report_print = "report/print/", e.report_snippet = "report/snippet/", e.report_asset = "report/asset/", e.plugin_list = "plugins/", e.plugin_setting_list = "plugins/:plugin/settings/", e.plugin_user_setting_list = "plugins/:plugin/user-settings/", e.plugin_registry_status = "plugins/status/", e.plugin_install = "plugins/install/", e.plugin_reload = "plugins/reload/", e.plugin_activate = "plugins/:key/activate/", e.plugin_uninstall = "plugins/:key/uninstall/", e.plugin_admin = "plugins/:key/admin/", e.plugin_ui_features_list = "plugins/ui/features/:feature_type/", e.plugin_locate_item = "locate/", e.plugin_supplier_list = "supplier/list/", e.plugin_supplier_search = "supplier/search/", e.plugin_supplier_import = "supplier/import/", e.machine_types_list = "machine/types/", e.machine_driver_list = "machine/drivers/", e.machine_registry_status = "machine/status/", e.machine_list = "machine/", e.machine_restart = "machine/:machine/restart/", e.machine_setting_list = "machine/:machine/settings/", e.machine_setting_detail = "machine/:machine/settings/:config_type/", e.attachment_list = "attachment/", e.error_report_list = "error-report/", e.project_code_list = "project-code/", e.custom_unit_list = "units/", e.notes_image_upload = "notes-image-upload/", e.email_list = "admin/email/", e.email_test = "admin/email/test/", e.config_list = "admin/config/", e.parameter_list = "parameter/", e.parameter_template_list = "parameter/template/", e.tag_list = "tag/", e.system_internal_trace_end = "system-internal/observability/end", e))(g || {});
window.LinguiCore.i18n;
window.LinguiCore.i18n;
g.part_list, g.parameter_list, g.parameter_template_list, g.part_test_template_list, g.supplier_part_list, g.manufacturer_part_list, g.category_list, g.stock_item_list, g.stock_location_list, g.stock_location_type_list, g.stock_tracking_list, g.build_order_list, g.build_line_list, g.build_item_list, g.company_list, g.project_code_list, g.purchase_order_list, g.purchase_order_line_list, g.sales_order_list, g.sales_order_shipment_list, g.return_order_list, g.return_order_line_list, g.transfer_order_list, g.transfer_order_line_list, g.address_list, g.contact_list, g.owner_list, g.user_list, g.group_list, g.import_session_list, g.label_list, g.report_list, g.plugin_list, g.content_type_list, g.selectionlist_list, g.selectionentry_list, g.error_report_list, g.tag_list;
function ms(e) {
  var t;
  e == null || e.preventDefault(), e == null || e.stopPropagation(), (t = e == null ? void 0 : e.nativeEvent) == null || t.stopImmediatePropagation();
}
const Rn = () => {
  var e;
  return ((e = window.INVENTREE_SETTINGS) == null ? void 0 : e.base_url) || "web";
}, vs = (e, t, r) => {
  ms(r);
  const n = `/${Rn()}`;
  if (gs(r)) {
    let s = e;
    e.startsWith("/") && !e.startsWith(n) && (s = `${n}${e}`), window.open(s, "_blank");
  } else {
    let s = e;
    e.startsWith(n) && (s = e.replace(n, "")), t(s);
  }
}, gs = (e) => (e == null ? void 0 : e.ctrlKey) || (e == null ? void 0 : e.shiftKey) || (e == null ? void 0 : e.metaKey);
window.LinguiCore.i18n;
window.MantineNotifications.notifications;
function ws(e) {
  var t;
  const r = ((t = e == null ? void 0 : e.version) == null ? void 0 : t.inventree) || "";
  mr != r && console.info(`Plugin version mismatch! Expected version ${mr}, got ${r}`);
}
var It = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function ys() {
  if (vr) return Qe;
  vr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var o in s)
        o !== "key" && (i[o] = s[o]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return Qe.Fragment = t, Qe.jsx = r, Qe.jsxs = r, Qe;
}
var gr;
function bs() {
  return gr || (gr = 1, It.exports = ys()), It.exports;
}
bs();
window.MantineCore.ActionIcon;
window.MantineCore.Group;
window.MantineCore.Tooltip;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ss = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = window.React.forwardRef, Et = window.React.createElement, Q = (e, t, r, n) => {
  const s = ks(
    ({ color: i = "currentColor", size: a = 24, stroke: o = 2, title: l, className: h, children: u, ...d }, p) => Et(
      "svg",
      {
        ref: p,
        ...Ss[e],
        width: a,
        height: a,
        className: ["tabler-icon", `tabler-icon-${t}`, h].join(" "),
        strokeWidth: o,
        stroke: i,
        ...d
      },
      [
        l && Et("title", { key: "svg-title" }, l),
        ...n.map(([_, w]) => Et(_, w)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return s.displayName = `${r}`, s;
};
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M5 12l14 0", key: "svg-1" }]];
Q("outline", "plus", "Plus", Cs);
const Ms = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, In = Object.prototype.toString;
function Rs(e) {
  switch (In.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return $s(e, Error);
  }
}
function Is(e, t) {
  return In.call(e) === `[object ${t}]`;
}
function Es(e) {
  return Is(e, "Object");
}
function Ts(e) {
  return !!(e != null && e.then && typeof e.then == "function");
}
function $s(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
const et = "10.46.0", A = globalThis;
function yt() {
  return or(A), A;
}
function or(e) {
  const t = e.__SENTRY__ = e.__SENTRY__ || {};
  return t.version = t.version || et, t[et] = t[et] || {};
}
function ar(e, t, r = A) {
  const n = r.__SENTRY__ = r.__SENTRY__ || {}, s = n[et] = n[et] || {};
  return s[e] || (s[e] = t());
}
const Re = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
let Ee;
function bt(e) {
  if (Ee !== void 0)
    return Ee ? Ee(e) : e();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"), r = A;
  return t in r && typeof r[t] == "function" ? (Ee = r[t], Ee(e)) : (Ee = null, e());
}
function Wt() {
  return bt(() => Math.random());
}
function xs() {
  return bt(() => Date.now());
}
function Ls() {
  const e = A;
  return e.crypto || e.msCrypto;
}
let Tt;
function Ds() {
  return Wt() * 16;
}
function tt(e = Ls()) {
  try {
    if (e != null && e.randomUUID)
      return bt(() => e.randomUUID()).replace(/-/g, "");
  } catch {
  }
  return Tt || (Tt = "10000000100040008000" + 1e11), Tt.replace(
    /[018]/g,
    (t) => (
      // eslint-disable-next-line no-bitwise
      (t ^ (Ds() & 15) >> t / 4).toString(16)
    )
  );
}
const En = 1e3;
function Tn() {
  return xs() / En;
}
function Ns() {
  const { performance: e } = A;
  if (!(e != null && e.now) || !e.timeOrigin)
    return Tn;
  const t = e.timeOrigin;
  return () => (t + bt(() => e.now())) / En;
}
let wr;
function Ps() {
  return (wr ?? (wr = Ns()))();
}
function Os(e, t = {}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || Ps(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : tt()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration)
    e.duration = void 0;
  else if (typeof t.duration == "number")
    e.duration = t.duration;
  else {
    const r = e.timestamp - e.started;
    e.duration = r >= 0 ? r : 0;
  }
  t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
const Fs = "Sentry Logger ", yr = {};
function $n(e) {
  if (!("console" in A))
    return e();
  const t = A.console, r = {}, n = Object.keys(yr);
  n.forEach((s) => {
    const i = yr[s];
    r[s] = t[s], t[s] = i;
  });
  try {
    return e();
  } finally {
    n.forEach((s) => {
      t[s] = r[s];
    });
  }
}
function Us() {
  lr().enabled = !0;
}
function js() {
  lr().enabled = !1;
}
function xn() {
  return lr().enabled;
}
function Bs(...e) {
  cr("log", ...e);
}
function zs(...e) {
  cr("warn", ...e);
}
function Gs(...e) {
  cr("error", ...e);
}
function cr(e, ...t) {
  Re && xn() && $n(() => {
    A.console[e](`${Fs}[${e}]:`, ...t);
  });
}
function lr() {
  return Re ? ar("loggerSettings", () => ({ enabled: !1 })) : { enabled: !1 };
}
const K = {
  /** Enable logging. */
  enable: Us,
  /** Disable logging. */
  disable: js,
  /** Check if logging is enabled. */
  isEnabled: xn,
  /** Log a message. */
  log: Bs,
  /** Log a warning. */
  warn: zs,
  /** Log an error. */
  error: Gs
};
function Ln(e, t, r = 2) {
  if (!t || typeof t != "object" || r <= 0)
    return t;
  if (e && Object.keys(t).length === 0)
    return e;
  const n = { ...e };
  for (const s in t)
    Object.prototype.hasOwnProperty.call(t, s) && (n[s] = Ln(n[s], t[s], r - 1));
  return n;
}
function br() {
  return tt();
}
function Qs(e, t, r) {
  try {
    Object.defineProperty(e, t, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: r,
      writable: !0,
      configurable: !0
    });
  } catch {
    Re && K.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
const Ht = "_sentrySpan";
function Sr(e, t) {
  t ? Qs(e, Ht, t) : delete e[Ht];
}
function kr(e) {
  return e[Ht];
}
function Ws(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
const Hs = 100;
class fe {
  /** Flag if notifying is happening. */
  /** Callback for client to receive scope changes. */
  /** Callback list that will be called during event processing. */
  /** Array of breadcrumbs. */
  /** User */
  /** Tags */
  /** Attributes */
  /** Extra */
  /** Contexts */
  /** Attachments */
  /** Propagation Context for distributed tracing */
  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */
  /** Fingerprint */
  /** Severity */
  /**
   * Transaction Name
   *
   * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
   * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
   */
  /** Session */
  /** The client on this scope */
  /** Contains the last event id of a captured event.  */
  /** Conversation ID */
  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: br(),
      sampleRand: Wt()
    };
  }
  /**
   * Clone all data from this scope into a new scope.
   */
  clone() {
    const t = new fe();
    return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags }, t._attributes = { ...this._attributes }, t._extra = { ...this._extra }, t._contexts = { ...this._contexts }, this._contexts.flags && (t._contexts.flags = {
      values: [...this._contexts.flags.values]
    }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t._propagationContext = { ...this._propagationContext }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, Sr(t, kr(this)), t;
  }
  /**
   * Update the client assigned to this scope.
   * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
   * as well as manually created scopes.
   */
  setClient(t) {
    this._client = t;
  }
  /**
   * Set the ID of the last captured error event.
   * This is generally only captured on the isolation scope.
   */
  setLastEventId(t) {
    this._lastEventId = t;
  }
  /**
   * Get the client assigned to this scope.
   */
  getClient() {
    return this._client;
  }
  /**
   * Get the ID of the last captured error event.
   * This is generally only available on the isolation scope.
   */
  lastEventId() {
    return this._lastEventId;
  }
  /**
   * @inheritDoc
   */
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  /**
   * Add an event processor that will be called before an event is sent.
   */
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  /**
   * Set the user for this scope.
   * Set to `null` to unset the user.
   */
  setUser(t) {
    return this._user = t || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    }, this._session && Os(this._session, { user: t }), this._notifyScopeListeners(), this;
  }
  /**
   * Get the user from this scope.
   */
  getUser() {
    return this._user;
  }
  /**
   * Set the conversation ID for this scope.
   * Set to `null` to unset the conversation ID.
   */
  setConversationId(t) {
    return this._conversationId = t || void 0, this._notifyScopeListeners(), this;
  }
  /**
   * Set an object that will be merged into existing tags on the scope,
   * and will be sent as tags data with the event.
   */
  setTags(t) {
    return this._tags = {
      ...this._tags,
      ...t
    }, this._notifyScopeListeners(), this;
  }
  /**
   * Set a single tag that will be sent as tags data with the event.
   */
  setTag(t, r) {
    return this.setTags({ [t]: r });
  }
  /**
   * Sets attributes onto the scope.
   *
   * These attributes are currently applied to logs and metrics.
   * In the future, they will also be applied to spans.
   *
   * Important: For now, only strings, numbers and boolean attributes are supported, despite types allowing for
   * more complex attribute types. We'll add this support in the future but already specify the wider type to
   * avoid a breaking change in the future.
   *
   * @param newAttributes - The attributes to set on the scope. You can either pass in key-value pairs, or
   * an object with a `value` and an optional `unit` (if applicable to your attribute).
   *
   * @example
   * ```typescript
   * scope.setAttributes({
   *   is_admin: true,
   *   payment_selection: 'credit_card',
   *   render_duration: { value: 'render_duration', unit: 'ms' },
   * });
   * ```
   */
  setAttributes(t) {
    return this._attributes = {
      ...this._attributes,
      ...t
    }, this._notifyScopeListeners(), this;
  }
  /**
   * Sets an attribute onto the scope.
   *
   * These attributes are currently applied to logs and metrics.
   * In the future, they will also be applied to spans.
   *
   * Important: For now, only strings, numbers and boolean attributes are supported, despite types allowing for
   * more complex attribute types. We'll add this support in the future but already specify the wider type to
   * avoid a breaking change in the future.
   *
   * @param key - The attribute key.
   * @param value - the attribute value. You can either pass in a raw value, or an attribute
   * object with a `value` and an optional `unit` (if applicable to your attribute).
   *
   * @example
   * ```typescript
   * scope.setAttribute('is_admin', true);
   * scope.setAttribute('render_duration', { value: 'render_duration', unit: 'ms' });
   * ```
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAttribute(t, r) {
    return this.setAttributes({ [t]: r });
  }
  /**
   * Removes the attribute with the given key from the scope.
   *
   * @param key - The attribute key.
   *
   * @example
   * ```typescript
   * scope.removeAttribute('is_admin');
   * ```
   */
  removeAttribute(t) {
    return t in this._attributes && (delete this._attributes[t], this._notifyScopeListeners()), this;
  }
  /**
   * Set an object that will be merged into existing extra on the scope,
   * and will be sent as extra data with the event.
   */
  setExtras(t) {
    return this._extra = {
      ...this._extra,
      ...t
    }, this._notifyScopeListeners(), this;
  }
  /**
   * Set a single key:value extra entry that will be sent as extra data with the event.
   */
  setExtra(t, r) {
    return this._extra = { ...this._extra, [t]: r }, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the fingerprint on the scope to send with the events.
   * @param {string[]} fingerprint Fingerprint to group events in Sentry.
   */
  setFingerprint(t) {
    return this._fingerprint = t, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the level on the scope for future events.
   */
  setLevel(t) {
    return this._level = t, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the transaction name on the scope so that the name of e.g. taken server route or
   * the page location is attached to future events.
   *
   * IMPORTANT: Calling this function does NOT change the name of the currently active
   * root span. If you want to change the name of the active root span, use
   * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
   *
   * By default, the SDK updates the scope's transaction name automatically on sensible
   * occasions, such as a page navigation or when handling a new request on the server.
   */
  setTransactionName(t) {
    return this._transactionName = t, this._notifyScopeListeners(), this;
  }
  /**
   * Sets context data with the given name.
   * Data passed as context will be normalized. You can also pass `null` to unset the context.
   * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
   */
  setContext(t, r) {
    return r === null ? delete this._contexts[t] : this._contexts[t] = r, this._notifyScopeListeners(), this;
  }
  /**
   * Set the session for the scope.
   */
  setSession(t) {
    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
  }
  /**
   * Get the session from the scope.
   */
  getSession() {
    return this._session;
  }
  /**
   * Updates the scope with provided data. Can work in three variations:
   * - plain object containing updatable attributes
   * - Scope instance that'll extract the attributes from
   * - callback function that'll receive the current scope as an argument and allow for modifications
   */
  update(t) {
    if (!t)
      return this;
    const r = typeof t == "function" ? t(this) : t, n = r instanceof fe ? r.getScopeData() : Es(r) ? t : void 0, {
      tags: s,
      attributes: i,
      extra: a,
      user: o,
      contexts: l,
      level: h,
      fingerprint: u = [],
      propagationContext: d,
      conversationId: p
    } = n || {};
    return this._tags = { ...this._tags, ...s }, this._attributes = { ...this._attributes, ...i }, this._extra = { ...this._extra, ...a }, this._contexts = { ...this._contexts, ...l }, o && Object.keys(o).length && (this._user = o), h && (this._level = h), u.length && (this._fingerprint = u), d && (this._propagationContext = d), p && (this._conversationId = p), this;
  }
  /**
   * Clears the current scope and resets its properties.
   * Note: The client will not be cleared.
   */
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, Sr(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: br(),
      sampleRand: Wt()
    }), this._notifyScopeListeners(), this;
  }
  /**
   * Adds a breadcrumb to the scope.
   * By default, the last 100 breadcrumbs are kept.
   */
  addBreadcrumb(t, r) {
    var n;
    const s = typeof r == "number" ? r : Hs;
    if (s <= 0)
      return this;
    const i = {
      timestamp: Tn(),
      ...t,
      // Breadcrumb messages can theoretically be infinitely large and they're held in memory so we truncate them not to leak (too much) memory
      message: t.message ? Ws(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(i), this._breadcrumbs.length > s && (this._breadcrumbs = this._breadcrumbs.slice(-s), (n = this._client) == null || n.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
  }
  /**
   * Get the last breadcrumb of the scope.
   */
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  /**
   * Clear all breadcrumbs from the scope.
   */
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  /**
   * Add an attachment to the scope.
   */
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  /**
   * Clear all attachments from the scope.
   */
  clearAttachments() {
    return this._attachments = [], this;
  }
  /**
   * Get the data of this scope, which should be applied to an event during processing.
   */
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: kr(this),
      conversationId: this._conversationId
    };
  }
  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry.
   */
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = Ln(this._sdkProcessingMetadata, t, 2), this;
  }
  /**
   * Add propagation context to the scope, used for distributed tracing
   */
  setPropagationContext(t) {
    return this._propagationContext = t, this;
  }
  /**
   * Get propagation context from the scope, used for distributed tracing
   */
  getPropagationContext() {
    return this._propagationContext;
  }
  /**
   * Capture an exception for this scope.
   *
   * @returns {string} The id of the captured Sentry event.
   */
  captureException(t, r) {
    const n = (r == null ? void 0 : r.event_id) || tt();
    if (!this._client)
      return Re && K.warn("No client configured on scope - will not capture exception!"), n;
    const s = new Error("Sentry syntheticException");
    return this._client.captureException(
      t,
      {
        originalException: t,
        syntheticException: s,
        ...r,
        event_id: n
      },
      this
    ), n;
  }
  /**
   * Capture a message for this scope.
   *
   * @returns {string} The id of the captured message.
   */
  captureMessage(t, r, n) {
    const s = (n == null ? void 0 : n.event_id) || tt();
    if (!this._client)
      return Re && K.warn("No client configured on scope - will not capture message!"), s;
    const i = (n == null ? void 0 : n.syntheticException) ?? new Error(t);
    return this._client.captureMessage(
      t,
      r,
      {
        originalException: t,
        syntheticException: i,
        ...n,
        event_id: s
      },
      this
    ), s;
  }
  /**
   * Capture a Sentry event for this scope.
   *
   * @returns {string} The id of the captured event.
   */
  captureEvent(t, r) {
    const n = t.event_id || (r == null ? void 0 : r.event_id) || tt();
    return this._client ? (this._client.captureEvent(t, { ...r, event_id: n }, this), n) : (Re && K.warn("No client configured on scope - will not capture event!"), n);
  }
  /**
   * This will be called on every set call.
   */
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t) => {
      t(this);
    }), this._notifyingListeners = !1);
  }
}
function Vs() {
  return ar("defaultCurrentScope", () => new fe());
}
function Ys() {
  return ar("defaultIsolationScope", () => new fe());
}
const Cr = (e) => e instanceof Promise && !e[Dn], Dn = Symbol("chained PromiseLike"), Js = (e, t, r) => {
  const n = e.then(
    (s) => (t(s), s),
    (s) => {
      throw r(s), s;
    }
  );
  return Cr(n) && Cr(e) ? n : qs(e, n);
}, qs = (e, t) => {
  let r = !1;
  for (const n in e) {
    if (n in t) continue;
    r = !0;
    const s = e[n];
    typeof s == "function" ? Object.defineProperty(t, n, {
      value: (...i) => s.apply(e, i),
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s;
  }
  return r && Object.assign(t, { [Dn]: !0 }), t;
};
class Ks {
  constructor(t, r) {
    let n;
    t ? n = t : n = new fe();
    let s;
    r ? s = r : s = new fe(), this._stack = [{ scope: n }], this._isolationScope = s;
  }
  /**
   * Fork a scope for the stack.
   */
  withScope(t) {
    const r = this._pushScope();
    let n;
    try {
      n = t(r);
    } catch (s) {
      throw this._popScope(), s;
    }
    return Ts(n) ? Js(
      n,
      () => this._popScope(),
      () => this._popScope()
    ) : (this._popScope(), n);
  }
  /**
   * Get the client of the stack.
   */
  getClient() {
    return this.getStackTop().client;
  }
  /**
   * Returns the scope of the top stack.
   */
  getScope() {
    return this.getStackTop().scope;
  }
  /**
   * Get the isolation scope for the stack.
   */
  getIsolationScope() {
    return this._isolationScope;
  }
  /**
   * Returns the topmost scope layer in the order domain > local > process.
   */
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  /**
   * Push a scope to the stack.
   */
  _pushScope() {
    const t = this.getScope().clone();
    return this._stack.push({
      client: this.getClient(),
      scope: t
    }), t;
  }
  /**
   * Pop a scope from the stack.
   */
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
}
function Be() {
  const e = yt(), t = or(e);
  return t.stack = t.stack || new Ks(Vs(), Ys());
}
function Xs(e) {
  return Be().withScope(e);
}
function Zs(e, t) {
  const r = Be();
  return r.withScope(() => (r.getStackTop().scope = e, t(e)));
}
function Mr(e) {
  return Be().withScope(() => e(Be().getIsolationScope()));
}
function As() {
  return {
    withIsolationScope: Mr,
    withScope: Xs,
    withSetScope: Zs,
    withSetIsolationScope: (e, t) => Mr(t),
    getCurrentScope: () => Be().getScope(),
    getIsolationScope: () => Be().getIsolationScope()
  };
}
function ur(e) {
  const t = or(e);
  return t.acs ? t.acs : As();
}
function dr() {
  const e = yt();
  return ur(e).getCurrentScope();
}
function ei() {
  const e = yt();
  return ur(e).getIsolationScope();
}
function Nn(...e) {
  const t = yt(), r = ur(t);
  if (e.length === 2) {
    const [n, s] = e;
    return n ? r.withSetScope(n, s) : r.withScope(s);
  }
  return r.withScope(e[0]);
}
function Pn() {
  return dr().getClient();
}
function ti(e) {
  if (e)
    return ri(e) ? { captureContext: e } : si(e) ? {
      captureContext: e
    } : e;
}
function ri(e) {
  return e instanceof fe || typeof e == "function";
}
const ni = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext"
];
function si(e) {
  return Object.keys(e).some((t) => ni.includes(t));
}
function ii(e, t) {
  return dr().captureException(e, ti(t));
}
function oi() {
  return ei().lastEventId();
}
const ai = window.React.version;
function ci(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function li(e, t) {
  const r = /* @__PURE__ */ new WeakSet();
  function n(s, i) {
    if (!r.has(s)) {
      if (s.cause)
        return r.add(s), n(s.cause, i);
      s.cause = i;
    }
  }
  n(e, t);
}
function ui(e, { componentStack: t }, r) {
  if (ci(ai) && Rs(e) && t) {
    const n = new Error(e.message);
    n.name = `React ErrorBoundary ${e.name}`, n.stack = t, li(e, n);
  }
  return Nn((n) => (n.setContext("react", { componentStack: t }), ii(e, r)));
}
const Rr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, at = A, di = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function hi(e) {
  return e === "http" || e === "https";
}
function fi(e, t = !1) {
  const { host: r, path: n, pass: s, port: i, projectId: a, protocol: o, publicKey: l } = e;
  return `${o}://${l}${t && s ? `:${s}` : ""}@${r}${i ? `:${i}` : ""}/${n && `${n}/`}${a}`;
}
function _i(e) {
  const t = di.exec(e);
  if (!t) {
    $n(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [r, n, s = "", i = "", a = "", o = ""] = t.slice(1);
  let l = "", h = o;
  const u = h.split("/");
  if (u.length > 1 && (l = u.slice(0, -1).join("/"), h = u.pop()), h) {
    const d = h.match(/^\d+/);
    d && (h = d[0]);
  }
  return On({ host: i, pass: s, path: l, projectId: h, port: a, protocol: r, publicKey: n });
}
function On(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId
  };
}
function pi(e) {
  if (!Re)
    return !0;
  const { port: t, projectId: r, protocol: n } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((a) => e[a] ? !1 : (K.error(`Invalid Sentry Dsn: ${a} missing`), !0)) ? !1 : r.match(/^\d+$/) ? hi(n) ? t && isNaN(parseInt(t, 10)) ? (K.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (K.error(`Invalid Sentry Dsn: Invalid protocol ${n}`), !1) : (K.error(`Invalid Sentry Dsn: Invalid projectId ${r}`), !1);
}
function mi(e) {
  const t = typeof e == "string" ? _i(e) : On(e);
  if (!(!t || !pi(t)))
    return t;
}
function vi(e) {
  const t = e.protocol ? `${e.protocol}:` : "", r = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${r}${e.path ? `/${e.path}` : ""}/api/`;
}
function gi(e, t) {
  const r = mi(e);
  if (!r)
    return "";
  const n = `${vi(r)}embed/error-page/`;
  let s = `dsn=${fi(r)}`;
  for (const i in t)
    if (i !== "dsn" && i !== "onClose")
      if (i === "user") {
        const a = t.user;
        if (!a)
          continue;
        a.name && (s += `&name=${encodeURIComponent(a.name)}`), a.email && (s += `&email=${encodeURIComponent(a.email)}`);
      } else
        s += `&${encodeURIComponent(i)}=${encodeURIComponent(t[i])}`;
  return `${n}?${s}`;
}
function Ir(e = {}) {
  const t = at.document, r = (t == null ? void 0 : t.head) || (t == null ? void 0 : t.body);
  if (!r) {
    Rr && K.error("[showReportDialog] Global document not defined");
    return;
  }
  const n = dr(), s = Pn(), i = s == null ? void 0 : s.getDsn();
  if (!i) {
    Rr && K.error("[showReportDialog] DSN not configured");
    return;
  }
  const a = {
    ...e,
    user: {
      ...n.getUser(),
      ...e.user
    },
    eventId: e.eventId || oi()
  }, o = at.document.createElement("script");
  o.async = !0, o.crossOrigin = "anonymous", o.src = gi(i, a);
  const { onLoad: l, onClose: h } = a;
  if (l && (o.onload = l), h) {
    const u = (d) => {
      if (d.data === "__sentry_reportdialog_closed__")
        try {
          h();
        } finally {
          at.removeEventListener("message", u);
        }
    };
    at.addEventListener("message", u);
  }
  r.appendChild(o);
}
const $t = window.React, xt = {
  componentStack: null,
  error: null,
  eventId: null
};
class Dc extends $t.Component {
  constructor(t) {
    super(t), this.state = xt, this._openFallbackReportDialog = !0;
    const r = Pn();
    r && t.showDialog && (this._openFallbackReportDialog = !1, this._cleanupHook = r.on("afterSendEvent", (n) => {
      !n.type && this._lastEventId && n.event_id === this._lastEventId && Ir({ ...t.dialogOptions, eventId: this._lastEventId });
    }));
  }
  componentDidCatch(t, r) {
    const { componentStack: n } = r, { beforeCapture: s, onError: i, showDialog: a, dialogOptions: o } = this.props;
    Nn((l) => {
      s && s(l, t, n);
      const h = this.props.handled != null ? this.props.handled : !!this.props.fallback, u = ui(t, r, {
        mechanism: { handled: h, type: "auto.function.react.error_boundary" }
      });
      i && i(t, n, u), a && (this._lastEventId = u, this._openFallbackReportDialog && Ir({ ...o, eventId: u })), this.setState({ error: t, componentStack: n, eventId: u });
    });
  }
  componentDidMount() {
    const { onMount: t } = this.props;
    t && t();
  }
  componentWillUnmount() {
    const { error: t, componentStack: r, eventId: n } = this.state, { onUnmount: s } = this.props;
    s && (this.state === xt ? s(null, null, null) : s(t, r, n)), this._cleanupHook && (this._cleanupHook(), this._cleanupHook = void 0);
  }
  resetErrorBoundary() {
    const { onReset: t } = this.props, { error: r, componentStack: n, eventId: s } = this.state;
    t && t(r, n, s), this.setState(xt);
  }
  render() {
    const { fallback: t, children: r } = this.props, n = this.state;
    if (n.componentStack === null)
      return typeof r == "function" ? r() : r;
    const s = typeof t == "function" ? $t.createElement(t, {
      error: n.error,
      componentStack: n.componentStack,
      resetError: () => this.resetErrorBoundary(),
      eventId: n.eventId
    }) : t;
    return $t.isValidElement(s) ? s : (t && Ms && K.warn("fallback did not produce a valid ReactElement"), null);
  }
}
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wi = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M12 9v4", key: "svg-1" }], ["path", { d: "M12 16v.01", key: "svg-2" }]];
Q("outline", "exclamation-circle", "ExclamationCircle", wi);
window.LinguiCore.i18n;
window.MantineCore.Alert;
window.MantineCore.Stack;
window.MantineCore.Text;
window.React.useCallback;
window.MantineCore.ActionIcon;
window.MantineCore.Menu;
window.MantineCore.Tooltip;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]];
Q("outline", "check", "Check", yi);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]];
Q("outline", "copy", "Copy", bi);
window.LinguiCore.i18n;
window.MantineCore.ActionIcon;
window.MantineCore.Button;
window.MantineCore.CopyButton;
window.MantineCore.Text;
window.MantineCore.Tooltip;
window.MantineCore.Group;
window.React.useState;
window.MantineCore.Group;
window.MantineCore.Progress;
window.MantineCore.Stack;
window.MantineCore.Text;
window.React.useMemo;
window.LinguiCore.i18n;
window.MantineCore.Badge;
window.MantineCore.Skeleton;
window.React.useCallback;
window.React.useEffect;
window.React.useRef;
window.React.useState;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Si = [["path", { d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]];
Q("outline", "search", "Search", Si);
window.LinguiCore.i18n;
window.MantineCore.CloseButton;
window.MantineCore.TextInput;
window.React.useEffect;
window.React.useState;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ki = [["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M6 4v4", key: "svg-1" }], ["path", { d: "M6 12v8", key: "svg-2" }], ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }], ["path", { d: "M12 4v10", key: "svg-4" }], ["path", { d: "M12 18v2", key: "svg-5" }], ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }], ["path", { d: "M18 4v1", key: "svg-7" }], ["path", { d: "M18 9v11", key: "svg-8" }]];
Q("outline", "adjustments", "Adjustments", ki);
window.LinguiCore.i18n;
window.MantineCore.ActionIcon;
window.MantineCore.Checkbox;
window.MantineCore.Divider;
window.MantineCore.Menu;
window.MantineCore.Tooltip;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ci = [["path", { d: "M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3", key: "svg-1" }]];
Q("outline", "tag", "Tag", Ci);
window.MantineCore.ActionIcon;
window.MantineCore.Badge;
window.MantineCore.Group;
window.MantineCore.Paper;
window.MantineCore.Alert;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = [["path", { d: "M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]];
Q("outline", "dots", "Dots", Mi);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ri = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M10 10l4 4m0 -4l-4 4", key: "svg-1" }]];
Q("outline", "circle-x", "CircleX", Ri);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ii = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]];
Q("outline", "trash", "Trash", Ii);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ei = [["path", { d: "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1", key: "svg-0" }], ["path", { d: "M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415", key: "svg-1" }], ["path", { d: "M16 5l3 3", key: "svg-2" }]];
Q("outline", "edit", "Edit", Ei);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ti = [["path", { d: "M5 12l14 0", key: "svg-0" }], ["path", { d: "M13 18l6 -6", key: "svg-1" }], ["path", { d: "M13 6l6 6", key: "svg-2" }]];
Q("outline", "arrow-right", "ArrowRight", Ti);
window.LinguiCore.i18n;
window.MantineCore.ActionIcon;
window.MantineCore.Menu;
window.MantineCore.Tooltip;
window.React.useMemo;
window.React.useState;
window.React.useEffect;
window.React.useState;
var Fn = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Un = (e) => {
  throw TypeError(e);
}, jn = (e, t, r) => t.has(e) || Un("Cannot " + r), ve = (e, t, r) => (jn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Lt = (e, t, r) => t.has(e) ? Un("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), We = (e, t, r, n) => (jn(e, t, "write to private field"), t.set(e, r), r), Te, ge, He, Er, $i = (Er = class extends Fn {
  constructor() {
    super(), Lt(this, Te), Lt(this, ge), Lt(this, He), We(this, He, (e) => {
      if (typeof window < "u" && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    ve(this, ge) || this.setEventListener(ve(this, He));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = ve(this, ge)) == null || e.call(this), We(this, ge, void 0));
  }
  setEventListener(e) {
    var t;
    We(this, He, e), (t = ve(this, ge)) == null || t.call(this), We(this, ge, e((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(e) {
    ve(this, Te) !== e && (We(this, Te, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return typeof ve(this, Te) == "boolean" ? ve(this, Te) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Te = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), Er);
new $i();
var Bn = (e) => {
  throw TypeError(e);
}, zn = (e, t, r) => t.has(e) || Bn("Cannot " + r), ct = (e, t, r) => (zn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Tr = (e, t, r) => t.has(e) ? Bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), xi = (e, t, r, n) => (zn(e, t, "write to private field"), t.set(e, r), r), we, $r, xr, Li = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (e, t) => setTimeout(e, t),
  clearTimeout: (e) => clearTimeout(e),
  setInterval: (e, t) => setInterval(e, t),
  clearInterval: (e) => clearInterval(e)
}, Di = (xr = class {
  constructor() {
    Tr(this, we, Li), Tr(this, $r, !1);
  }
  setTimeoutProvider(e) {
    xi(this, we, e);
  }
  setTimeout(e, t) {
    return ct(this, we).setTimeout(e, t);
  }
  clearTimeout(e) {
    ct(this, we).clearTimeout(e);
  }
  setInterval(e, t) {
    return ct(this, we).setInterval(e, t);
  }
  clearInterval(e) {
    ct(this, we).clearInterval(e);
  }
}, we = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), xr);
new Di();
var Gn = (e) => {
  throw TypeError(e);
}, Qn = (e, t, r) => t.has(e) || Gn("Cannot " + r), $e = (e, t, r) => (Qn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Dt = (e, t, r) => t.has(e) ? Gn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ve = (e, t, r, n) => (Qn(e, t, "write to private field"), t.set(e, r), r), Ye, ye, Je, Lr, Ni = (Lr = class extends Fn {
  constructor() {
    super(), Dt(this, Ye, !0), Dt(this, ye), Dt(this, Je), Ve(this, Je, (e) => {
      if (typeof window < "u" && window.addEventListener) {
        const t = () => e(!0), r = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    $e(this, ye) || this.setEventListener($e(this, Je));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = $e(this, ye)) == null || e.call(this), Ve(this, ye, void 0));
  }
  setEventListener(e) {
    var t;
    Ve(this, Je, e), (t = $e(this, ye)) == null || t.call(this), Ve(this, ye, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    $e(this, Ye) !== e && (Ve(this, Ye, e), this.listeners.forEach((r) => {
      r(e);
    }));
  }
  isOnline() {
    return $e(this, Ye);
  }
}, Ye = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), Lr);
new Ni();
const Pi = window.React;
Pi.createContext(
  void 0
);
const Oi = window.React;
function Fi() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
Oi.createContext(Fi());
const Ui = window.React;
var ji = Ui.createContext(!1);
ji.Provider;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]];
Q("outline", "circle-check", "CircleCheck", Bi);
window.LinguiCore.i18n;
window.MantineNotifications.notifications;
window.MantineNotifications.showNotification;
window.React.useEffect;
window.React.useState;
window.MantineNotifications.notifications;
window.MantineNotifications.showNotification;
window.React.useEffect;
window.React.useState;
window.React.useEffect;
window.React.useEffectEvent;
window.React.useCallback;
window.React.useEffect;
window.React.useState;
window.React.useCallback;
window.React.useEffect;
window.React.useMemo;
window.React.useCallback;
window.React.useMemo;
window.React.useState;
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Dr;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Dr || (Dr = {}));
var Nr;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Nr || (Nr = {}));
class zi extends Error {
}
const Wn = ["post", "put", "patch", "delete"];
new Set(Wn);
const Gi = ["get", ...Wn];
new Set(Gi);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Z = window.React, Pr = /* @__PURE__ */ Z.createContext(null), Qi = /* @__PURE__ */ Z.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), Wi = /* @__PURE__ */ Z.createContext(null);
class Pc extends Z.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : r.error,
      location: r.location,
      revalidation: t.revalidation || r.revalidation
    };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ Z.createElement(Qi.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ Z.createElement(Wi.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
const Hi = "startTransition";
Z[Hi];
var V = /* @__PURE__ */ (function(e) {
  return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e;
})(V || {});
const Vi = new Promise(() => {
});
class Oc extends Z.Component {
  constructor(t) {
    super(t), this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  componentDidCatch(t, r) {
    console.error("<Await> caught the following error during render", t, r);
  }
  render() {
    let {
      children: t,
      errorElement: r,
      resolve: n
    } = this.props, s = null, i = V.pending;
    if (!(n instanceof Promise))
      i = V.success, s = Promise.resolve(), Object.defineProperty(s, "_tracked", {
        get: () => !0
      }), Object.defineProperty(s, "_data", {
        get: () => n
      });
    else if (this.state.error) {
      i = V.error;
      let a = this.state.error;
      s = Promise.reject().catch(() => {
      }), Object.defineProperty(s, "_tracked", {
        get: () => !0
      }), Object.defineProperty(s, "_error", {
        get: () => a
      });
    } else n._tracked ? (s = n, i = "_error" in s ? V.error : "_data" in s ? V.success : V.pending) : (i = V.pending, Object.defineProperty(n, "_tracked", {
      get: () => !0
    }), s = n.then((a) => Object.defineProperty(n, "_data", {
      get: () => a
    }), (a) => Object.defineProperty(n, "_error", {
      get: () => a
    })));
    if (i === V.error && s._error instanceof zi)
      throw Vi;
    if (i === V.error && !r)
      throw s._error;
    if (i === V.error)
      return /* @__PURE__ */ Z.createElement(Pr.Provider, {
        value: s,
        children: r
      });
    if (i === V.success)
      return /* @__PURE__ */ Z.createElement(Pr.Provider, {
        value: s,
        children: t
      });
    throw s;
  }
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Hn = window.React, Yi = window.ReactDOM, Ji = "6";
try {
  window.__reactRouterVersion = Ji;
} catch {
}
const qi = "startTransition";
Hn[qi];
const Ki = "flushSync";
Yi[Ki];
const Xi = "useId";
Hn[Xi];
var Or;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Or || (Or = {}));
var Fr;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Fr || (Fr = {}));
function Zi(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const a = (l) => l === null ? null : JSON.parse(l, void 0), o = (i = r.getItem(s)) != null ? i : null;
      return o instanceof Promise ? o.then(a) : a(o);
    },
    setItem: (s, i) => r.setItem(s, JSON.stringify(i, void 0)),
    removeItem: (s) => r.removeItem(s)
  };
}
const Vt = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(n) {
        return Vt(n)(r);
      },
      catch(n) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return Vt(n)(r);
      }
    };
  }
}, Ai = (e, t) => (r, n, s) => {
  let i = {
    storage: Zi(() => window.localStorage),
    partialize: (f) => f,
    version: 0,
    merge: (f, R) => ({
      ...R,
      ...f
    }),
    ...t
  }, a = !1, o = 0;
  const l = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  let u = i.storage;
  if (!u)
    return e(
      (...f) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...f);
      },
      n,
      s
    );
  const d = () => {
    const f = i.partialize({ ...n() });
    return u.setItem(i.name, {
      state: f,
      version: i.version
    });
  }, p = s.setState;
  s.setState = (f, R) => (p(f, R), d());
  const _ = e(
    (...f) => (r(...f), d()),
    n,
    s
  );
  s.getInitialState = () => _;
  let w;
  const y = () => {
    var f, R;
    if (!u) return;
    const S = ++o;
    a = !1, l.forEach((k) => {
      var N;
      return k((N = n()) != null ? N : _);
    });
    const I = ((R = i.onRehydrateStorage) == null ? void 0 : R.call(i, (f = n()) != null ? f : _)) || void 0;
    return Vt(u.getItem.bind(u))(i.name).then((k) => {
      if (k)
        if (typeof k.version == "number" && k.version !== i.version) {
          if (i.migrate) {
            const N = i.migrate(
              k.state,
              k.version
            );
            return N instanceof Promise ? N.then((ee) => [!0, ee]) : [!0, N];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, k.state];
      return [!1, void 0];
    }).then((k) => {
      var N;
      if (S !== o)
        return;
      const [ee, ze] = k;
      if (w = i.merge(
        ze,
        (N = n()) != null ? N : _
      ), r(w, !0), ee)
        return d();
    }).then(() => {
      S === o && (I == null || I(n(), void 0), w = n(), a = !0, h.forEach((k) => k(w)));
    }).catch((k) => {
      S === o && (I == null || I(void 0, k));
    });
  };
  return s.persist = {
    setOptions: (f) => {
      i = {
        ...i,
        ...f
      }, f.storage && (u = f.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => y(),
    hasHydrated: () => a,
    onHydrate: (f) => (l.add(f), () => {
      l.delete(f);
    }),
    onFinishHydration: (f) => (h.add(f), () => {
      h.delete(f);
    })
  }, i.skipHydration || y(), w || _;
}, Vn = Ai, Ur = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (h, u) => {
    const d = typeof h == "function" ? h(t) : h;
    if (!Object.is(d, t)) {
      const p = t;
      t = u ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), r.forEach((_) => _(t, p));
    }
  }, s = () => t, o = { setState: n, getState: s, getInitialState: () => l, subscribe: (h) => (r.add(h), () => r.delete(h)) }, l = t = e(n, s, o);
  return o;
}, eo = ((e) => e ? Ur(e) : Ur), lt = window.React, to = (e) => e;
function ro(e, t = to) {
  const r = lt.useSyncExternalStore(
    e.subscribe,
    lt.useCallback(() => t(e.getState()), [e, t]),
    lt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return lt.useDebugValue(r), r;
}
const no = (e) => {
  const t = eo(e), r = (n) => ro(t, n);
  return Object.assign(r, t), r;
}, Yn = ((e) => no);
Yn()(Vn((e, t) => ({
  detailDrawerStack: 0,
  addDetailDrawer: (r) => {
    e({
      detailDrawerStack: r === !1 ? 0 : t().detailDrawerStack + r
    });
  }
}), {
  name: "session-settings-inventreedb_lib"
}));
window.MantineCore.Text;
window.MantineCore.darken;
window.MantineCore.getThemeColor;
window.MantineCore.useMantineTheme;
window.React.useMemo;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]];
Q("outline", "chevron-left", "ChevronLeft", so);
window.MantineCore.ActionIcon;
window.MantineCore.Divider;
window.MantineCore.Drawer;
window.MantineCore.Group;
window.MantineCore.Stack;
window.MantineCore.Text;
window.React.useCallback;
window.React.useMemo;
const io = 25;
Yn()(Vn((e, t) => ({
  pageSize: io,
  setPageSize: (r) => {
    e((n) => ({
      pageSize: r
    }));
  },
  tableSorting: {},
  getTableSorting: (r) => t().tableSorting[r] || {},
  setTableSorting: (r) => (n) => {
    e({
      tableSorting: {
        ...t().tableSorting,
        [r]: n
      }
    });
  },
  tableColumnNames: {},
  getTableColumnNames: (r) => t().tableColumnNames[r] || null,
  setTableColumnNames: (r) => (n) => {
    e({
      tableColumnNames: {
        ...t().tableColumnNames,
        [r]: n
      }
    });
  },
  clearTableColumnNames: () => {
    e({
      tableColumnNames: {}
    });
  },
  hiddenColumns: {},
  getHiddenColumns: (r) => {
    var n;
    return ((n = t().hiddenColumns) == null ? void 0 : n[r]) ?? null;
  },
  setHiddenColumns: (r) => (n) => {
    e({
      hiddenColumns: {
        ...t().hiddenColumns,
        [r]: n
      }
    });
  }
}), {
  name: "inventree-table-state"
}));
window.LinguiReact.I18nProvider;
window.MantineCore.Skeleton;
window.React.useEffect;
window.React.useState;
const jr = window.React, oo = window.LinguiReact.I18nProvider, Br = window.LinguiCore.i18n;
function ao({
  locale: e,
  children: t
}) {
  return jr.useEffect(() => {
    Br.activate(e);
  }, [e]), /* @__PURE__ */ jr.createElement(oo, { i18n: Br }, t);
}
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var co = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = window.React.forwardRef, Nt = window.React.createElement, O = (e, t, r, n) => {
  const s = lo(
    ({ color: i = "currentColor", size: a = 24, stroke: o = 2, title: l, className: h, children: u, ...d }, p) => Nt(
      "svg",
      {
        ref: p,
        ...co[e],
        width: a,
        height: a,
        className: ["tabler-icon", `tabler-icon-${t}`, h].join(" "),
        strokeWidth: o,
        stroke: i,
        ...d
      },
      [
        l && Nt("title", { key: "svg-title" }, l),
        ...n.map(([_, w]) => Nt(_, w)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return s.displayName = `${r}`, s;
};
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = [["path", { d: "M12 9v4", key: "svg-0" }], ["path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Jn = O("outline", "alert-triangle", "AlertTriangle", uo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], fo = O("outline", "chevron-down", "ChevronDown", ho);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], po = O("outline", "chevron-up", "ChevronUp", _o);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 7v5l3 3", key: "svg-1" }]], vo = O("outline", "clock", "Clock", mo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M8 11h8v7h-8l0 -7", key: "svg-2" }], ["path", { d: "M8 15h8", key: "svg-3" }], ["path", { d: "M11 11v7", key: "svg-4" }]], wo = O("outline", "file-spreadsheet", "FileSpreadsheet", go);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 9h.01", key: "svg-1" }], ["path", { d: "M11 12h1v4h1", key: "svg-2" }]], zr = O("outline", "info-circle", "InfoCircle", yo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [["path", { d: "M9 6l11 0", key: "svg-0" }], ["path", { d: "M9 12l11 0", key: "svg-1" }], ["path", { d: "M9 18l11 0", key: "svg-2" }], ["path", { d: "M5 6l0 .01", key: "svg-3" }], ["path", { d: "M5 12l0 .01", key: "svg-4" }], ["path", { d: "M5 18l0 .01", key: "svg-5" }]], So = O("outline", "list", "List", bo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [["path", { d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6", key: "svg-0" }], ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-1" }], ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4", key: "svg-2" }]], Co = O("outline", "lock", "Lock", ko);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [["path", { d: "M13 20l7 -7", key: "svg-0" }], ["path", { d: "M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7", key: "svg-1" }]], Ro = O("outline", "note", "Note", Mo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], Eo = O("outline", "pencil", "Pencil", Io);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4", key: "svg-0" }], ["path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4", key: "svg-1" }]], $o = O("outline", "refresh", "Refresh", To);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [["path", { d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Lo = O("outline", "search", "Search", xo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = [["path", { d: "M8 9l4 -4l4 4", key: "svg-0" }], ["path", { d: "M16 15l-4 4l-4 -4", key: "svg-1" }]], No = O("outline", "selector", "Selector", Do);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5", key: "svg-2" }], ["path", { d: "M3 9l4 0", key: "svg-3" }]], qn = O("outline", "truck-delivery", "TruckDelivery", Po);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M15.585 15.586a2 2 0 0 0 2.826 2.831", key: "svg-1" }], ["path", { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h1m3.96 0h4.04v4m0 4v4m-4 0h6m6 0v-6h-6m-2 -5h5l3 5", key: "svg-2" }], ["path", { d: "M3 3l18 18", key: "svg-3" }]], Fo = O("outline", "truck-off", "TruckOff", Oo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Kn = O("outline", "x", "X", Uo), X = window.React, Pt = window.MantineCore.Button, Gr = window.MantineCore.Group, jo = window.MantineCore.Paper, Bo = window.MantineCore.Text;
function zo({
  count: e,
  loading: t,
  onMarkDelivered: r,
  onMarkNotDelivered: n,
  onClear: s
}) {
  return /* @__PURE__ */ X.createElement(jo, { p: "xs", withBorder: !0, bg: "var(--mantine-primary-color-light)" }, /* @__PURE__ */ X.createElement(Gr, { justify: "space-between", wrap: "wrap", gap: "xs" }, /* @__PURE__ */ X.createElement(Bo, { size: "sm", fw: 600 }, e, " line", e === 1 ? "" : "s", " selected"), /* @__PURE__ */ X.createElement(Gr, { gap: "xs" }, /* @__PURE__ */ X.createElement(
    Pt,
    {
      size: "xs",
      color: "green",
      leftSection: /* @__PURE__ */ X.createElement(qn, { size: 14 }),
      loading: t,
      onClick: r
    },
    "Mark Delivered"
  ), /* @__PURE__ */ X.createElement(
    Pt,
    {
      size: "xs",
      variant: "default",
      leftSection: /* @__PURE__ */ X.createElement(Fo, { size: 14 }),
      disabled: t,
      onClick: n
    },
    "Mark Not Delivered"
  ), /* @__PURE__ */ X.createElement(
    Pt,
    {
      size: "xs",
      variant: "subtle",
      color: "gray",
      leftSection: /* @__PURE__ */ X.createElement(Kn, { size: 14 }),
      disabled: t,
      onClick: s
    },
    "Clear Selection"
  ))));
}
function Go(e) {
  var t, r, n, s, i, a, o;
  return [
    e.order.reference,
    e.order.supplier_reference,
    (t = e.supplier) == null ? void 0 : t.name,
    (r = e.part) == null ? void 0 : r.IPN,
    (n = e.part) == null ? void 0 : n.name,
    (s = e.part) == null ? void 0 : s.description,
    (i = e.supplier_part) == null ? void 0 : i.SKU,
    (a = e.supplier_part) == null ? void 0 : a.MPN,
    (o = e.destination) == null ? void 0 : o.pathstring,
    e.reference,
    e.delivery.note
  ].filter(Boolean).join(" ").toLowerCase();
}
function Qo(e, t) {
  const r = t.search.toLowerCase().split(/\s+/).filter(Boolean);
  return e.filter((n) => {
    var s;
    if (t.delivered === "delivered" && !n.delivery.delivered || t.delivered === "awaiting" && (n.delivery.delivered || n.fully_received) || t.supplier && String((s = n.supplier) == null ? void 0 : s.pk) !== t.supplier || t.overdueOnly && !n.overdue)
      return !1;
    if (r.length > 0) {
      const i = Go(n);
      return r.every((a) => i.includes(a));
    }
    return !0;
  });
}
function Qr(e, t) {
  var r, n, s, i, a;
  switch (t) {
    case "line":
      return Number(e.line) || e.line || null;
    case "order":
      return e.order.reference;
    case "supplier":
      return ((r = e.supplier) == null ? void 0 : r.name) ?? null;
    case "part":
      return ((n = e.part) == null ? void 0 : n.IPN) || ((s = e.part) == null ? void 0 : s.name) || null;
    case "sku":
      return ((i = e.supplier_part) == null ? void 0 : i.SKU) ?? null;
    case "quantity":
      return e.remaining;
    case "target":
      return e.target_date;
    case "destination":
      return ((a = e.destination) == null ? void 0 : a.pathstring) ?? null;
    case "delivered":
      return e.delivery.delivered ? e.delivery.delivered_date ?? "" : null;
  }
}
const Yt = new Intl.Collator(void 0, {
  numeric: !0,
  sensitivity: "base"
});
function Wo(e, t) {
  return typeof e == "number" && typeof t == "number" ? e - t : Yt.compare(String(e), String(t));
}
function Ho(e, t) {
  const r = t.direction === "asc" ? 1 : -1;
  return [...e].sort((n, s) => {
    const i = Qr(n, t.column), a = Qr(s, t.column), o = i === null || i === "";
    return o !== (a === null || a === "") ? o ? 1 : -1 : (o ? 0 : Wo(i, a) * r) || Yt.compare(n.order.reference, s.order.reference) || Yt.compare(n.line, s.line) || n.pk - s.pk;
  });
}
function Xn(e) {
  if (!e) return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  if (t)
    return new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
  const r = new Date(e);
  return isNaN(r.getTime()) ? null : r;
}
function Zn(e) {
  const t = Xn(e);
  return t ? t.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : "-";
}
function Vo(e) {
  const t = Xn(e);
  return t ? t.toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }) : "-";
}
function Ot(e) {
  return e.toLocaleString(void 0, { maximumFractionDigits: 5 });
}
const Yo = {
  primary: "blue",
  secondary: "gray",
  success: "green",
  danger: "red",
  warning: "yellow",
  info: "cyan",
  dark: "dark"
};
function Jo(e) {
  return Yo[e] ?? "gray";
}
function qo(e) {
  if (e == null) return "";
  const t = String(e);
  return /[",\n\r]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
}
function Ko(e, t) {
  const r = [
    "Purchase Order",
    "Order Status",
    "Supplier",
    "Supplier Reference",
    "Line",
    "IPN",
    "Part",
    "Description",
    "SKU",
    "MPN",
    "Quantity",
    "Received",
    "Remaining",
    "Target Date",
    "Overdue",
    "Destination",
    "Delivered",
    "Delivered Date",
    "Delivered By",
    "Delivery Note"
  ], n = e.map(
    (l) => {
      var h, u, d, p, _, w, y, f;
      return [
        l.order.reference,
        l.order.status_label,
        (h = l.supplier) == null ? void 0 : h.name,
        l.order.supplier_reference,
        l.line,
        (u = l.part) == null ? void 0 : u.IPN,
        (d = l.part) == null ? void 0 : d.name,
        (p = l.part) == null ? void 0 : p.description,
        (_ = l.supplier_part) == null ? void 0 : _.SKU,
        (w = l.supplier_part) == null ? void 0 : w.MPN,
        l.quantity,
        l.received,
        l.remaining,
        l.target_date,
        l.overdue ? "Yes" : "No",
        (y = l.destination) == null ? void 0 : y.pathstring,
        l.delivery.delivered ? "Yes" : "No",
        l.delivery.delivered_date,
        (f = l.delivery.delivered_by) == null ? void 0 : f.username,
        l.delivery.note
      ].map(qo).join(",");
    }
  ), s = "\uFEFF" + [r.join(","), ...n].join(`\r
`), i = new Blob([s], { type: "text/csv;charset=utf-8" }), a = URL.createObjectURL(i), o = document.createElement("a");
  o.href = a, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(a);
}
const j = window.React, Wr = window.React.useCallback, qe = window.React.useState, Xo = window.MantineCore.ActionIcon, Hr = window.MantineCore.Button, Zo = window.MantineCore.Group, Ft = window.MantineCore.Popover, Ao = window.MantineCore.Stack, ea = window.MantineCore.Switch, ta = window.MantineCore.Text, ra = window.MantineCore.Textarea, na = window.MantineCore.TextInput, sa = window.MantineCore.Tooltip, ia = 250;
function oa({
  row: e,
  today: t,
  onUpdate: r
}) {
  var R, S;
  const [n, s] = qe(!1), [i, a] = qe(!0), [o, l] = qe(t), [h, u] = qe(""), [d, p] = qe(!1), _ = ((R = e.part) == null ? void 0 : R.IPN) || ((S = e.part) == null ? void 0 : S.name) || `Line ${e.line || e.pk}`, w = Wr(() => {
    a(!0), l(e.delivery.delivered_date ?? t), u(e.delivery.note ?? ""), s(!0);
  }, [e, t]), y = i ? o ? o > t ? "Arrival date cannot be in the future" : null : "Arrival date is required" : null, f = Wr(async () => {
    p(!0);
    const I = await r(
      {
        lines: [e.pk],
        delivered: i,
        delivered_date: i ? o : void 0,
        note: h.trim()
      },
      i ? `${e.order.reference} - ${_} marked as delivered` : `${e.order.reference} - ${_} updated`
    );
    p(!1), I && s(!1);
  }, [r, e, i, o, h, _]);
  return /* @__PURE__ */ j.createElement(
    Ft,
    {
      opened: n,
      onChange: s,
      position: "bottom-end",
      withArrow: !0,
      shadow: "md",
      trapFocus: !0
    },
    /* @__PURE__ */ j.createElement(Ft.Target, null, /* @__PURE__ */ j.createElement(sa, { label: "Edit arrival date / note" }, /* @__PURE__ */ j.createElement(
      Xo,
      {
        variant: "subtle",
        size: "sm",
        color: "gray",
        onClick: () => n ? s(!1) : w()
      },
      /* @__PURE__ */ j.createElement(Eo, { size: 14 })
    ))),
    /* @__PURE__ */ j.createElement(Ft.Dropdown, null, /* @__PURE__ */ j.createElement(Ao, { gap: "xs", style: { minWidth: 260 } }, /* @__PURE__ */ j.createElement(ta, { size: "sm", fw: 600 }, e.order.reference, " — ", _), /* @__PURE__ */ j.createElement(
      ea,
      {
        label: "Delivered to plant",
        color: "green",
        checked: i,
        onChange: (I) => a(I.currentTarget.checked)
      }
    ), /* @__PURE__ */ j.createElement(
      na,
      {
        type: "date",
        label: "Arrival date",
        value: i ? o : "",
        max: t,
        disabled: !i,
        error: y,
        onChange: (I) => l(I.currentTarget.value)
      }
    ), /* @__PURE__ */ j.createElement(
      ra,
      {
        label: "Note",
        placeholder: "e.g. packing slip number, dock / bay",
        value: h,
        maxLength: ia,
        autosize: !0,
        minRows: 2,
        onChange: (I) => u(I.currentTarget.value)
      }
    ), /* @__PURE__ */ j.createElement(Zo, { justify: "flex-end", gap: "xs" }, /* @__PURE__ */ j.createElement(
      Hr,
      {
        variant: "default",
        size: "xs",
        onClick: () => s(!1),
        disabled: d
      },
      "Cancel"
    ), /* @__PURE__ */ j.createElement(
      Hr,
      {
        size: "xs",
        onClick: f,
        loading: d,
        disabled: !!y
      },
      "Save"
    ))))
  );
}
const J = window.React, aa = window.MantineCore.Box, ca = window.MantineCore.Group, la = window.MantineCore.Loader, ua = window.MantineCore.Stack, da = window.MantineCore.Switch, Vr = window.MantineCore.Text, Yr = window.MantineCore.Tooltip;
function ha({
  row: e,
  today: t,
  canEdit: r,
  busy: n,
  onUpdate: s
}) {
  const i = e.delivery, a = r && e.order.editable, o = r ? e.order.editable ? null : `Delivery status cannot be changed for ${e.order.status_label} orders` : "You do not have permission to change delivery status", l = i.delivered ? `Marked delivered${i.delivered_by ? ` by ${i.delivered_by.username}` : ""} on ${Vo(i.delivered_at)}` : null;
  return /* @__PURE__ */ J.createElement(ca, { gap: 8, wrap: "nowrap", align: "center" }, /* @__PURE__ */ J.createElement(
    Yr,
    {
      label: o ?? l,
      disabled: !o && !l,
      multiline: !0,
      maw: 260
    },
    /* @__PURE__ */ J.createElement(aa, null, /* @__PURE__ */ J.createElement(
      da,
      {
        "aria-label": "Delivered",
        color: "green",
        checked: i.delivered,
        disabled: !a || n,
        onChange: (h) => s({
          lines: [e.pk],
          delivered: h.currentTarget.checked
        })
      }
    ))
  ), n && /* @__PURE__ */ J.createElement(la, { size: 14 }), i.delivered && /* @__PURE__ */ J.createElement(ua, { gap: 0 }, /* @__PURE__ */ J.createElement(Vr, { size: "xs" }, Zn(i.delivered_date)), i.delivered_by && /* @__PURE__ */ J.createElement(Vr, { size: "xs", c: "dimmed" }, i.delivered_by.username)), i.note && /* @__PURE__ */ J.createElement(Yr, { label: i.note, multiline: !0, maw: 260 }, /* @__PURE__ */ J.createElement(Ro, { size: 16, color: "var(--mantine-color-dimmed)" })), a && /* @__PURE__ */ J.createElement(oa, { row: e, today: t, onUpdate: s }));
}
const Jr = window.React.useCallback, qr = window.React.useEffect, ut = window.React.useRef, fa = window.React.useState;
function _a(e, t, r = { leading: !1 }) {
  const [n, s] = fa(e), i = ut(!1), a = ut(null), o = ut(!1), l = ut(e);
  l.current = e;
  const h = Jr(() => {
    window.clearTimeout(a.current), a.current = null, o.current = !1;
  }, []), u = Jr(() => {
    a.current && (h(), o.current = !1, s(l.current));
  }, []);
  return qr(() => {
    i.current && (!o.current && r.leading ? (o.current = !0, s(e), a.current = window.setTimeout(() => {
      o.current = !1;
    }, t)) : (h(), a.current = window.setTimeout(() => {
      o.current = !1, s(e);
    }, t)));
  }, [
    e,
    r.leading,
    t
  ]), qr(() => (i.current = !0, h), []), [
    n,
    h,
    {
      cancel: h,
      flush: u
    }
  ];
}
const pa = window.React.useEffect, ma = window.React.useEffectEvent;
function Kr(e, t, r) {
  const n = ma(t);
  pa(() => (window.addEventListener(e, n, r), () => window.removeEventListener(e, n, r)), [e]);
}
const Ut = window.React.useCallback, Xr = window.React.useEffect, va = window.React.useState;
function ga(e, t = "use-local-storage") {
  try {
    return JSON.stringify(e);
  } catch {
    throw new Error(`@mantine/hooks ${t}: Failed to serialize the value`);
  }
}
function wa(e) {
  try {
    return e && JSON.parse(e);
  } catch {
    return e;
  }
}
function ya(e) {
  return {
    getItem: (s) => {
      try {
        return window[e].getItem(s);
      } catch {
        return console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked"), null;
      }
    },
    setItem: (s, i) => {
      try {
        window[e].setItem(s, i);
      } catch {
        console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked");
      }
    },
    removeItem: (s) => {
      try {
        window[e].removeItem(s);
      } catch {
        console.warn("use-local-storage: Failed to remove value from storage, localStorage is blocked");
      }
    }
  };
}
function ba(e, t) {
  const r = "mantine-local-storage", { getItem: n, setItem: s, removeItem: i } = ya(e);
  return function({ key: o, defaultValue: l, getInitialValueInEffect: h = !0, sync: u = !0, deserialize: d = wa, serialize: p = (_) => ga(_, t) }) {
    const _ = Ut((S) => {
      let I;
      try {
        I = typeof window > "u" || !(e in window) || window[e] === null || !!S;
      } catch {
        I = !0;
      }
      if (I) return l;
      const k = n(o);
      return k !== null ? d(k) : l;
    }, [o, l]), [w, y] = va(_(h)), f = Ut((S) => {
      S instanceof Function ? y((I) => {
        const k = S(I);
        return s(o, p(k)), queueMicrotask(() => {
          window.dispatchEvent(new CustomEvent(r, { detail: {
            key: o,
            value: k
          } }));
        }), k;
      }) : (s(o, p(S)), window.dispatchEvent(new CustomEvent(r, { detail: {
        key: o,
        value: S
      } })), y(S));
    }, [o]), R = Ut(() => {
      i(o), y(l), window.dispatchEvent(new CustomEvent(r, { detail: {
        key: o,
        value: l
      } }));
    }, [o, l]);
    return Kr("storage", (S) => {
      u && S.storageArea === window[e] && S.key === o && y(d(S.newValue ?? void 0));
    }), Kr(r, (S) => {
      u && S.detail.key === o && y(S.detail.value);
    }), Xr(() => {
      l !== void 0 && w === void 0 && f(l);
    }, [
      l,
      w,
      f
    ]), Xr(() => {
      const S = _();
      S !== void 0 && f(S);
    }, [o]), [
      w === void 0 ? l : w,
      f,
      R
    ];
  };
}
function dt(e) {
  return ba("localStorage", "use-local-storage")(e);
}
var St = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Se, ae, De, bn, Sa = (bn = class extends St {
  constructor() {
    super();
    C(this, Se);
    C(this, ae);
    C(this, De);
    v(this, De, (t) => {
      if (typeof window < "u" && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    c(this, ae) || this.setEventListener(c(this, De));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = c(this, ae)) == null || t.call(this), v(this, ae, void 0));
  }
  setEventListener(t) {
    var r;
    v(this, De, t), (r = c(this, ae)) == null || r.call(this), v(this, ae, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    c(this, Se) !== t && (v(this, Se, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof c(this, Se) == "boolean" ? c(this, Se) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Se = new WeakMap(), ae = new WeakMap(), De = new WeakMap(), bn), ka = new Sa(), Ca = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (e, t) => setTimeout(e, t),
  clearTimeout: (e) => clearTimeout(e),
  setInterval: (e, t) => setInterval(e, t),
  clearInterval: (e) => clearInterval(e)
}, ce, ir, Sn, Ma = (Sn = class {
  constructor() {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support the default provider's concrete timer ID, which is
    // infeasible across environments.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    C(this, ce, Ca);
    C(this, ir, !1);
  }
  setTimeoutProvider(e) {
    v(this, ce, e);
  }
  setTimeout(e, t) {
    return c(this, ce).setTimeout(e, t);
  }
  clearTimeout(e) {
    c(this, ce).clearTimeout(e);
  }
  setInterval(e, t) {
    return c(this, ce).setInterval(e, t);
  }
  clearInterval(e) {
    c(this, ce).clearInterval(e);
  }
}, ce = new WeakMap(), ir = new WeakMap(), Sn), ht = new Ma();
function Ra(e) {
  setTimeout(e, 0);
}
var Ia = typeof window > "u" || "Deno" in globalThis;
function gt() {
}
function Zr(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Ea(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function rt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Y(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ar(e) {
  return JSON.stringify(
    e,
    (t, r) => Jt(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
var Ta = Object.prototype.hasOwnProperty;
function An(e, t, r = 0) {
  if (e === t)
    return e;
  if (r > 500) return t;
  const n = en(e) && en(t);
  if (!n && !(Jt(e) && Jt(t))) return t;
  const i = (n ? e : Object.keys(e)).length, a = n ? t : Object.keys(t), o = a.length, l = n ? new Array(o) : {};
  let h = 0;
  for (let u = 0; u < o; u++) {
    const d = n ? u : a[u], p = e[d], _ = t[d];
    if (p === _) {
      l[d] = p, (n ? u < i : Ta.call(e, d)) && h++;
      continue;
    }
    if (p === null || _ === null || typeof p != "object" || typeof _ != "object") {
      l[d] = _;
      continue;
    }
    const w = An(p, _, r + 1);
    l[d] = w, w === p && h++;
  }
  return i === o && h === i ? e : l;
}
function wt(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function en(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Jt(e) {
  if (!tn(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!tn(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function tn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function rn(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? An(e, t) : t;
}
function hr(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var qt = /* @__PURE__ */ (() => {
  let e = () => Ia;
  return {
    /**
     * Returns whether the current runtime should be treated as a server environment.
     */
    isServer() {
      return e();
    },
    /**
     * Overrides the server check globally.
     */
    setIsServer(t) {
      e = t;
    }
  };
})();
function nn() {
  let e, t;
  const r = new Promise((s, i) => {
    e = s, t = i;
  });
  r.status = "pending", r.catch(() => {
  });
  function n(s) {
    Object.assign(r, s), delete r.resolve, delete r.reject;
  }
  return r.resolve = (s) => {
    n({
      status: "fulfilled",
      value: s
    }), e(s);
  }, r.reject = (s) => {
    n({
      status: "rejected",
      reason: s
    }), t(s);
  }, r;
}
var $a = Ra;
function xa() {
  let e = [], t = 0, r = (o) => {
    o();
  }, n = (o) => {
    o();
  }, s = $a;
  const i = (o) => {
    t ? e.push(o) : s(() => {
      r(o);
    });
  }, a = () => {
    const o = e;
    e = [], o.length && s(() => {
      n(() => {
        o.forEach((l) => {
          r(l);
        });
      });
    });
  };
  return {
    batch: (o) => {
      let l;
      t++;
      try {
        l = o();
      } finally {
        t--, t || a();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (o) => (...l) => {
      i(() => {
        o(...l);
      });
    },
    schedule: i,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (o) => {
      r = o;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (o) => {
      n = o;
    },
    setScheduler: (o) => {
      s = o;
    }
  };
}
var kt = xa(), Ne, le, Pe, kn, La = (kn = class extends St {
  constructor() {
    super();
    C(this, Ne, !0);
    C(this, le);
    C(this, Pe);
    v(this, Pe, (t) => {
      if (typeof window < "u" && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    c(this, le) || this.setEventListener(c(this, Pe));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = c(this, le)) == null || t.call(this), v(this, le, void 0));
  }
  setEventListener(t) {
    var r;
    v(this, Pe, t), (r = c(this, le)) == null || r.call(this), v(this, le, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    c(this, Ne) !== t && (v(this, Ne, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return c(this, Ne);
  }
}, Ne = new WeakMap(), le = new WeakMap(), Pe = new WeakMap(), kn), Da = new La();
function Na(e) {
  return (e ?? "online") === "online" ? Da.isOnline() : !0;
}
function Pa(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Na(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
var B, b, nt, F, ke, Oe, te, ue, st, Fe, Ue, Ce, Me, de, je, M, Ae, Kt, Xt, Zt, At, er, tr, rr, es, Cn, Oa = (Cn = class extends St {
  constructor(t, r) {
    super();
    C(this, M);
    C(this, B);
    C(this, b);
    C(this, nt);
    C(this, F);
    C(this, ke);
    C(this, Oe);
    C(this, te);
    C(this, ue);
    C(this, st);
    C(this, Fe);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    C(this, Ue);
    C(this, Ce);
    C(this, Me);
    C(this, de);
    C(this, je, /* @__PURE__ */ new Set());
    this.options = r, v(this, B, t), v(this, ue, null), v(this, te, nn()), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (c(this, b).addObserver(this), sn(c(this, b), this.options) ? T(this, M, Ae).call(this) : this.updateResult(), T(this, M, At).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return nr(
      c(this, b),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return nr(
      c(this, b),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), T(this, M, er).call(this), T(this, M, tr).call(this), c(this, b).removeObserver(this);
  }
  setOptions(t) {
    const r = this.options, n = c(this, b);
    if (this.options = c(this, B).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Y(this.options.enabled, c(this, b)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    T(this, M, rr).call(this), c(this, b).setOptions(this.options), r._defaulted && !wt(this.options, r) && c(this, B).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: c(this, b),
      observer: this
    });
    const s = this.hasListeners();
    s && on(
      c(this, b),
      n,
      this.options,
      r
    ) && T(this, M, Ae).call(this), this.updateResult(), s && (c(this, b) !== n || Y(this.options.enabled, c(this, b)) !== Y(r.enabled, c(this, b)) || rt(this.options.staleTime, c(this, b)) !== rt(r.staleTime, c(this, b))) && T(this, M, Kt).call(this);
    const i = T(this, M, Xt).call(this);
    s && (c(this, b) !== n || Y(this.options.enabled, c(this, b)) !== Y(r.enabled, c(this, b)) || i !== c(this, de)) && T(this, M, Zt).call(this, i);
  }
  getOptimisticResult(t) {
    const r = c(this, B).getQueryCache().build(c(this, B), t), n = this.createResult(r, t);
    return Ua(this, n) && (v(this, F, n), v(this, Oe, this.options), v(this, ke, c(this, b).state)), n;
  }
  getCurrentResult() {
    return c(this, F);
  }
  trackResult(t, r) {
    return new Proxy(t, {
      get: (n, s) => (this.trackProp(s), r == null || r(s), s === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && c(this, te).status === "pending" && c(this, te).reject(
        new Error(
          "experimental_prefetchInRender feature flag is not enabled"
        )
      )), Reflect.get(n, s))
    });
  }
  trackProp(t) {
    c(this, je).add(t);
  }
  getCurrentQuery() {
    return c(this, b);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = c(this, B).defaultQueryOptions(t), n = c(this, B).getQueryCache().build(c(this, B), r);
    return n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return T(this, M, Ae).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), c(this, F)));
  }
  createResult(t, r) {
    var it;
    const n = c(this, b), s = this.options, i = c(this, F), a = c(this, ke), o = c(this, Oe), h = t !== n ? t.state : c(this, nt), { state: u } = t;
    let d = { ...u }, p = !1, _;
    if (r._optimisticResults) {
      const U = this.hasListeners(), _e = !U && sn(t, r), Ie = U && on(t, n, r, s);
      (_e || Ie) && (d = {
        ...d,
        ...Pa(u.data, t.options)
      }), r._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: w, errorUpdatedAt: y, status: f } = d;
    _ = d.data;
    let R = !1;
    if (r.placeholderData !== void 0 && _ === void 0 && f === "pending") {
      let U;
      i != null && i.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData) ? (U = i.data, R = !0) : U = typeof r.placeholderData == "function" ? r.placeholderData(
        (it = c(this, Ue)) == null ? void 0 : it.state.data,
        c(this, Ue)
      ) : r.placeholderData, U !== void 0 && (f = "success", _ = rn(
        i == null ? void 0 : i.data,
        U,
        r
      ), p = !0);
    }
    if (r.select && _ !== void 0 && !R)
      if (i && _ === (a == null ? void 0 : a.data) && r.select === c(this, st))
        _ = c(this, Fe);
      else
        try {
          v(this, st, r.select), _ = r.select(_), _ = rn(i == null ? void 0 : i.data, _, r), v(this, Fe, _), v(this, ue, null);
        } catch (U) {
          v(this, ue, U);
        }
    c(this, ue) && (w = c(this, ue), _ = c(this, Fe), y = Date.now(), f = "error");
    const S = d.fetchStatus === "fetching", I = f === "pending", k = f === "error", N = I && S, ee = _ !== void 0, x = {
      status: f,
      fetchStatus: d.fetchStatus,
      isPending: I,
      isSuccess: f === "success",
      isError: k,
      isInitialLoading: N,
      isLoading: N,
      data: _,
      dataUpdatedAt: d.dataUpdatedAt,
      error: w,
      errorUpdatedAt: y,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: t.isFetched(),
      isFetchedAfterMount: d.dataUpdateCount > h.dataUpdateCount || d.errorUpdateCount > h.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !I,
      isLoadingError: k && !ee,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: p,
      isRefetchError: k && ee,
      isStale: fr(t, r),
      refetch: this.refetch,
      promise: c(this, te),
      isEnabled: Y(r.enabled, t) !== !1
    };
    if (this.options.experimental_prefetchInRender) {
      const U = x.data !== void 0, _e = x.status === "error" && !U, Ie = (me) => {
        _e ? me.reject(x.error) : U && me.resolve(x.data);
      }, ot = () => {
        const me = v(this, te, x.promise = nn());
        Ie(me);
      }, pe = c(this, te);
      switch (pe.status) {
        case "pending":
          t.queryHash === n.queryHash && Ie(pe);
          break;
        case "fulfilled":
          (_e || x.data !== pe.value) && ot();
          break;
        case "rejected":
          (!_e || x.error !== pe.reason) && ot();
          break;
      }
    }
    return x;
  }
  updateResult() {
    const t = c(this, F), r = this.createResult(c(this, b), this.options);
    if (v(this, ke, c(this, b).state), v(this, Oe, this.options), c(this, ke).data !== void 0 && v(this, Ue, c(this, b)), wt(r, t))
      return;
    v(this, F, r);
    const n = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: s } = this.options, i = typeof s == "function" ? s() : s;
      if (i === "all" || !i && !c(this, je).size)
        return !0;
      const a = new Set(
        i ?? c(this, je)
      );
      return this.options.throwOnError && a.add("error"), Object.keys(c(this, F)).some((o) => {
        const l = o;
        return c(this, F)[l] !== t[l] && a.has(l);
      });
    };
    T(this, M, es).call(this, { listeners: n() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && T(this, M, At).call(this);
  }
}, B = new WeakMap(), b = new WeakMap(), nt = new WeakMap(), F = new WeakMap(), ke = new WeakMap(), Oe = new WeakMap(), te = new WeakMap(), ue = new WeakMap(), st = new WeakMap(), Fe = new WeakMap(), Ue = new WeakMap(), Ce = new WeakMap(), Me = new WeakMap(), de = new WeakMap(), je = new WeakMap(), M = new WeakSet(), Ae = function(t) {
  T(this, M, rr).call(this);
  let r = c(this, b).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(gt)), r;
}, Kt = function() {
  T(this, M, er).call(this);
  const t = rt(
    this.options.staleTime,
    c(this, b)
  );
  if (qt.isServer() || c(this, F).isStale || !Zr(t))
    return;
  const n = Ea(c(this, F).dataUpdatedAt, t) + 1;
  v(this, Ce, ht.setTimeout(() => {
    c(this, F).isStale || this.updateResult();
  }, n));
}, Xt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(c(this, b)) : this.options.refetchInterval) ?? !1;
}, Zt = function(t) {
  T(this, M, tr).call(this), v(this, de, t), !(qt.isServer() || Y(this.options.enabled, c(this, b)) === !1 || !Zr(c(this, de)) || c(this, de) === 0) && v(this, Me, ht.setInterval(() => {
    (this.options.refetchIntervalInBackground || ka.isFocused()) && T(this, M, Ae).call(this);
  }, c(this, de)));
}, At = function() {
  T(this, M, Kt).call(this), T(this, M, Zt).call(this, T(this, M, Xt).call(this));
}, er = function() {
  c(this, Ce) !== void 0 && (ht.clearTimeout(c(this, Ce)), v(this, Ce, void 0));
}, tr = function() {
  c(this, Me) !== void 0 && (ht.clearInterval(c(this, Me)), v(this, Me, void 0));
}, rr = function() {
  const t = c(this, B).getQueryCache().build(c(this, B), this.options);
  if (t === c(this, b))
    return;
  const r = c(this, b);
  v(this, b, t), v(this, nt, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, es = function(t) {
  kt.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(c(this, F));
    }), c(this, B).getQueryCache().notify({
      query: c(this, b),
      type: "observerResultsUpdated"
    });
  });
}, Cn);
function Fa(e, t) {
  return Y(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && Y(t.retryOnMount, e) === !1);
}
function sn(e, t) {
  return Fa(e, t) || e.state.data !== void 0 && nr(e, t, t.refetchOnMount);
}
function nr(e, t, r) {
  if (Y(t.enabled, e) !== !1 && rt(t.staleTime, e) !== "static") {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && fr(e, t);
  }
  return !1;
}
function on(e, t, r, n) {
  return (e !== t || Y(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && fr(e, r);
}
function fr(e, t) {
  return Y(t.enabled, e) !== !1 && e.isStaleByTime(rt(t.staleTime, e));
}
function Ua(e, t) {
  return !wt(e.getCurrentResult(), t);
}
function ja() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var re, he, z, ne, se, vt, sr, Mn, Ba = (Mn = class extends St {
  constructor(t, r) {
    super();
    C(this, se);
    C(this, re);
    C(this, he);
    C(this, z);
    C(this, ne);
    v(this, re, t), this.setOptions(r), this.bindMethods(), T(this, se, vt).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var n;
    const r = this.options;
    this.options = c(this, re).defaultMutationOptions(t), wt(this.options, r) || c(this, re).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: c(this, z),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && Ar(r.mutationKey) !== Ar(this.options.mutationKey) ? this.reset() : ((n = c(this, z)) == null ? void 0 : n.state.status) === "pending" && c(this, z).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = c(this, z)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    T(this, se, vt).call(this), T(this, se, sr).call(this, t);
  }
  getCurrentResult() {
    return c(this, he);
  }
  reset() {
    var t;
    (t = c(this, z)) == null || t.removeObserver(this), v(this, z, void 0), T(this, se, vt).call(this), T(this, se, sr).call(this);
  }
  mutate(t, r) {
    var n;
    return v(this, ne, r), (n = c(this, z)) == null || n.removeObserver(this), v(this, z, c(this, re).getMutationCache().build(c(this, re), this.options)), c(this, z).addObserver(this), c(this, z).execute(t);
  }
}, re = new WeakMap(), he = new WeakMap(), z = new WeakMap(), ne = new WeakMap(), se = new WeakSet(), vt = function() {
  var r;
  const t = ((r = c(this, z)) == null ? void 0 : r.state) ?? ja();
  v(this, he, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, sr = function(t) {
  kt.batch(() => {
    var r, n, s, i, a, o, l, h;
    if (c(this, ne) && this.hasListeners()) {
      const u = c(this, he).variables, d = c(this, he).context, p = {
        client: c(this, re),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      if ((t == null ? void 0 : t.type) === "success") {
        try {
          (n = (r = c(this, ne)).onSuccess) == null || n.call(
            r,
            t.data,
            u,
            d,
            p
          );
        } catch (_) {
          Promise.reject(_);
        }
        try {
          (i = (s = c(this, ne)).onSettled) == null || i.call(
            s,
            t.data,
            null,
            u,
            d,
            p
          );
        } catch (_) {
          Promise.reject(_);
        }
      } else if ((t == null ? void 0 : t.type) === "error") {
        try {
          (o = (a = c(this, ne)).onError) == null || o.call(
            a,
            t.error,
            u,
            d,
            p
          );
        } catch (_) {
          Promise.reject(_);
        }
        try {
          (h = (l = c(this, ne)).onSettled) == null || h.call(
            l,
            void 0,
            t.error,
            u,
            d,
            p
          );
        } catch (_) {
          Promise.reject(_);
        }
      }
    }
    this.listeners.forEach((u) => {
      u(c(this, he));
    });
  });
}, Mn), jt = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function za() {
  if (an) return Ke;
  an = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var o in s)
        o !== "key" && (i[o] = s[o]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return Ke.Fragment = t, Ke.jsx = r, Ke.jsxs = r, Ke;
}
var cn;
function Ga() {
  return cn || (cn = 1, jt.exports = za()), jt.exports;
}
Ga();
const ts = window.React;
var Qa = ts.createContext(
  void 0
), rs = (e) => {
  const t = ts.useContext(Qa);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
};
const ns = window.React;
var ss = ns.createContext(!1), Wa = () => ns.useContext(ss);
ss.Provider;
const is = window.React;
function Ha() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var Va = is.createContext(Ha()), Ya = () => is.useContext(Va);
const Ja = window.React;
var qa = (e, t, r) => {
  const n = r != null && r.state.error && typeof e.throwOnError == "function" ? hr(e.throwOnError, [r.state.error, r]) : e.throwOnError;
  (e.suspense || e.experimental_prefetchInRender || n) && (t.isReset() || (e.retryOnMount = !1));
}, Ka = (e) => {
  Ja.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Xa = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n,
  suspense: s
}) => e.isError && !t.isReset() && !e.isFetching && n && (s && e.data === void 0 || hr(r, [e.error, n])), Za = (e) => {
  if (e.suspense) {
    const r = (s) => s === "static" ? s : Math.max(s ?? 1e3, 1e3), n = e.staleTime;
    e.staleTime = typeof n == "function" ? (...s) => r(n(...s)) : r(n), typeof e.gcTime == "number" && (e.gcTime = Math.max(
      e.gcTime,
      1e3
    ));
  }
}, Aa = (e, t) => e.isLoading && e.isFetching && !t, ec = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, ln = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
const ft = window.React;
function tc(e, t, r) {
  var _, w, y, f;
  const n = Wa(), s = Ya(), i = rs(r), a = i.defaultQueryOptions(e);
  (w = (_ = i.getDefaultOptions().queries) == null ? void 0 : _._experimental_beforeQuery) == null || w.call(
    _,
    a
  );
  const o = i.getQueryCache().get(a.queryHash), l = e.subscribed !== !1;
  a._optimisticResults = n ? "isRestoring" : l ? "optimistic" : void 0, Za(a), qa(a, s, o), Ka(s);
  const h = !i.getQueryCache().get(a.queryHash), [u] = ft.useState(
    () => new t(
      i,
      a
    )
  ), d = u.getOptimisticResult(a), p = !n && l;
  if (ft.useSyncExternalStore(
    ft.useCallback(
      (R) => {
        const S = p ? u.subscribe(kt.batchCalls(R)) : gt;
        return u.updateResult(), S;
      },
      [u, p]
    ),
    () => u.getCurrentResult(),
    () => u.getCurrentResult()
  ), ft.useEffect(() => {
    u.setOptions(a);
  }, [a, u]), ec(a, d))
    throw ln(a, u, s);
  if (Xa({
    result: d,
    errorResetBoundary: s,
    throwOnError: a.throwOnError,
    query: o,
    suspense: a.suspense
  }))
    throw d.error;
  if ((f = (y = i.getDefaultOptions().queries) == null ? void 0 : y._experimental_afterQuery) == null || f.call(
    y,
    a,
    d
  ), a.experimental_prefetchInRender && !qt.isServer() && Aa(d, n)) {
    const R = h ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      ln(a, u, s)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      o == null ? void 0 : o.promise
    );
    R == null || R.catch(gt).finally(() => {
      u.updateResult();
    });
  }
  return a.notifyOnChangeProps ? d : u.trackResult(d);
}
function rc(e, t) {
  return tc(e, Oa, t);
}
const Xe = window.React;
function nc(e, t) {
  const r = rs(t), [n] = Xe.useState(
    () => new Ba(
      r,
      e
    )
  );
  Xe.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const s = Xe.useSyncExternalStore(
    Xe.useCallback(
      (a) => n.subscribe(kt.batchCalls(a)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), i = Xe.useCallback(
    (a, o) => {
      n.mutate(a, o).catch(gt);
    },
    [n]
  );
  if (s.error && hr(n.options.throwOnError, [s.error]))
    throw s.error;
  return { ...s, mutate: i, mutateAsync: s.mutate };
}
const os = "/plugin/podelivery", as = ["po-delivery"];
function sc(e, t, r) {
  return rc(
    {
      queryKey: [
        ...as,
        "lines",
        { orderId: t ?? null, includeReceived: r }
      ],
      queryFn: async () => {
        const n = {};
        return t && (n.order = t, r && (n.include_received = "true")), (await e.api.get(`${os}/lines/`, {
          params: n
        })).data;
      },
      // Receiving terminals may be left open - keep the data fresh
      refetchInterval: 6e4,
      refetchOnWindowFocus: !0
    },
    e.queryClient
  );
}
function ic(e) {
  return nc(
    {
      mutationFn: async (t) => (await e.api.post(
        `${os}/lines/set-delivered/`,
        t
      )).data,
      onSuccess: () => {
        window.dispatchEvent(new CustomEvent("po-delivery:changed"));
      },
      onSettled: () => e.queryClient.invalidateQueries({ queryKey: as })
    },
    e.queryClient
  );
}
function un(e) {
  var r;
  const t = e == null ? void 0 : e.response;
  return (r = t == null ? void 0 : t.data) != null && r.error ? t.data.error : e instanceof Error ? e.message : "Unknown error";
}
const oc = window.React, ac = window.MantineCore.Anchor;
function _t({ context: e, path: t, children: r, fw: n }) {
  return /* @__PURE__ */ oc.createElement(
    ac,
    {
      href: `/${Rn()}${t}`,
      size: "sm",
      fw: n,
      onClick: (s) => vs(t, e.navigate, s)
    },
    r
  );
}
const m = window.React, cc = window.MantineCore.Badge, lc = window.MantineCore.Checkbox, dn = window.MantineCore.Group, uc = window.MantineCore.Progress, Ze = window.MantineCore.Stack, q = window.MantineCore.Table, W = window.MantineCore.Text, Bt = window.MantineCore.Tooltip;
function dc(e) {
  if (e.delivery.delivered && !e.fully_received)
    return "var(--mantine-color-green-light)";
  if (e.overdue)
    return "var(--mantine-color-red-light)";
}
function hc({
  row: e,
  mode: t,
  context: r,
  today: n,
  canEdit: s,
  selected: i,
  busy: a,
  onSelect: o,
  onUpdate: l
}) {
  var u, d;
  const h = e.quantity > 0 ? Math.min(100, e.received / e.quantity * 100) : 0;
  return /* @__PURE__ */ m.createElement(q.Tr, { style: { backgroundColor: dc(e) } }, s && /* @__PURE__ */ m.createElement(q.Td, null, /* @__PURE__ */ m.createElement(
    lc,
    {
      "aria-label": "Select line",
      checked: i,
      disabled: !e.order.editable,
      onChange: (p) => o(e.pk, p.currentTarget.checked)
    }
  )), t === "order" && /* @__PURE__ */ m.createElement(q.Td, null, /* @__PURE__ */ m.createElement(W, { size: "sm" }, e.line || "-")), t === "index" && /* @__PURE__ */ m.createElement(q.Td, null, /* @__PURE__ */ m.createElement(Ze, { gap: 2 }, /* @__PURE__ */ m.createElement(
    _t,
    {
      context: r,
      path: `/purchasing/purchase-order/${e.order.pk}/`,
      fw: 600
    },
    e.order.reference
  ), /* @__PURE__ */ m.createElement(dn, { gap: 4 }, /* @__PURE__ */ m.createElement(
    cc,
    {
      size: "xs",
      variant: "light",
      color: Jo(e.order.status_color)
    },
    e.order.status_label
  ), e.line && /* @__PURE__ */ m.createElement(W, { size: "xs", c: "dimmed" }, "Line ", e.line)))), t === "index" && /* @__PURE__ */ m.createElement(q.Td, null, /* @__PURE__ */ m.createElement(Ze, { gap: 0 }, e.supplier ? /* @__PURE__ */ m.createElement(
    _t,
    {
      context: r,
      path: `/purchasing/supplier/${e.supplier.pk}/`
    },
    e.supplier.name
  ) : /* @__PURE__ */ m.createElement(W, { size: "sm" }, "-"), e.order.supplier_reference && /* @__PURE__ */ m.createElement(W, { size: "xs", c: "dimmed" }, e.order.supplier_reference))), /* @__PURE__ */ m.createElement(q.Td, null, e.part ? /* @__PURE__ */ m.createElement(Ze, { gap: 0 }, /* @__PURE__ */ m.createElement(
    _t,
    {
      context: r,
      path: `/part/${e.part.pk}/`,
      fw: 600
    },
    e.part.IPN || e.part.name
  ), e.part.IPN && /* @__PURE__ */ m.createElement(W, { size: "xs" }, e.part.name), e.part.description && /* @__PURE__ */ m.createElement(Bt, { label: e.part.description, multiline: !0, maw: 350 }, /* @__PURE__ */ m.createElement(W, { size: "xs", c: "dimmed", lineClamp: 1 }, e.part.description))) : /* @__PURE__ */ m.createElement(W, { size: "sm", c: "dimmed" }, e.reference || "-")), /* @__PURE__ */ m.createElement(q.Td, null, e.supplier_part ? /* @__PURE__ */ m.createElement(Ze, { gap: 0 }, /* @__PURE__ */ m.createElement(
    _t,
    {
      context: r,
      path: `/purchasing/supplier-part/${e.supplier_part.pk}/`
    },
    e.supplier_part.SKU
  ), e.supplier_part.MPN && /* @__PURE__ */ m.createElement(W, { size: "xs", c: "dimmed" }, e.supplier_part.MPN)) : /* @__PURE__ */ m.createElement(W, { size: "sm" }, "-")), /* @__PURE__ */ m.createElement(q.Td, null, /* @__PURE__ */ m.createElement(
    Bt,
    {
      label: `${Ot(e.remaining)} remaining to be received`
    },
    /* @__PURE__ */ m.createElement(Ze, { gap: 4 }, /* @__PURE__ */ m.createElement(W, { size: "sm", style: { whiteSpace: "nowrap" } }, Ot(e.received), " / ", Ot(e.quantity), (u = e.part) != null && u.units ? ` ${e.part.units}` : ""), /* @__PURE__ */ m.createElement(
      uc,
      {
        value: h,
        size: "sm",
        color: e.fully_received ? "green" : "blue"
      }
    ))
  )), /* @__PURE__ */ m.createElement(q.Td, null, /* @__PURE__ */ m.createElement(dn, { gap: 4, wrap: "nowrap" }, e.overdue && /* @__PURE__ */ m.createElement(Bt, { label: "Delivery is overdue" }, /* @__PURE__ */ m.createElement(Jn, { size: 14, color: "var(--mantine-color-red-6)" })), /* @__PURE__ */ m.createElement(
    W,
    {
      size: "sm",
      c: e.overdue ? "red" : void 0,
      fw: e.overdue ? 600 : void 0,
      style: { whiteSpace: "nowrap" }
    },
    Zn(e.target_date)
  )), e.target_date_source === "order" && /* @__PURE__ */ m.createElement(W, { size: "xs", c: "dimmed" }, "(order)")), /* @__PURE__ */ m.createElement(q.Td, null, /* @__PURE__ */ m.createElement(W, { size: "sm" }, ((d = e.destination) == null ? void 0 : d.pathstring) ?? "-")), /* @__PURE__ */ m.createElement(q.Td, null, /* @__PURE__ */ m.createElement(
    ha,
    {
      row: e,
      today: n,
      canEdit: s,
      busy: a,
      onUpdate: l
    }
  )));
}
const G = window.React, fc = window.MantineCore.Checkbox, _c = window.MantineCore.Group, be = window.MantineCore.Table, pc = window.MantineCore.Text, mc = window.MantineCore.UnstyledButton;
function vc({ label: e, column: t, sort: r, onSort: n }) {
  const i = r.column === t ? r.direction === "asc" ? po : fo : No;
  return /* @__PURE__ */ G.createElement(be.Th, { style: { whiteSpace: "nowrap" } }, /* @__PURE__ */ G.createElement(mc, { onClick: () => n(t) }, /* @__PURE__ */ G.createElement(_c, { gap: 4, wrap: "nowrap" }, /* @__PURE__ */ G.createElement(pc, { size: "sm", fw: 600 }, e), /* @__PURE__ */ G.createElement(i, { size: 14 }))));
}
function gc({
  rows: e,
  mode: t,
  context: r,
  today: n,
  canEdit: s,
  sort: i,
  onSort: a,
  selected: o,
  onSelect: l,
  onSelectAll: h,
  busy: u,
  onUpdate: d
}) {
  const p = e.filter((f) => f.order.editable), _ = p.filter((f) => o.has(f.pk)).length, w = p.length > 0 && _ === p.length, y = (f, R) => /* @__PURE__ */ G.createElement(vc, { label: f, column: R, sort: i, onSort: a });
  return /* @__PURE__ */ G.createElement(
    be.ScrollContainer,
    {
      minWidth: t === "index" ? 1150 : 900,
      maxHeight: "65vh",
      type: "native"
    },
    /* @__PURE__ */ G.createElement(be, { stickyHeader: !0, highlightOnHover: !0, verticalSpacing: "xs" }, /* @__PURE__ */ G.createElement(be.Thead, null, /* @__PURE__ */ G.createElement(be.Tr, null, s && /* @__PURE__ */ G.createElement(be.Th, { style: { width: 40 } }, /* @__PURE__ */ G.createElement(
      fc,
      {
        "aria-label": "Select all lines",
        checked: w,
        indeterminate: _ > 0 && !w,
        disabled: p.length === 0,
        onChange: (f) => h(f.currentTarget.checked)
      }
    )), t === "order" && y("Line", "line"), t === "index" && y("Purchase Order", "order"), t === "index" && y("Supplier", "supplier"), y("Part", "part"), y("Supplier Part", "sku"), y("Received", "quantity"), y("Target Date", "target"), y("Destination", "destination"), y("Delivered", "delivered"))), /* @__PURE__ */ G.createElement(be.Tbody, null, e.map((f) => /* @__PURE__ */ G.createElement(
      hc,
      {
        key: f.pk,
        row: f,
        mode: t,
        context: r,
        today: n,
        canEdit: s,
        selected: o.has(f.pk),
        busy: u.has(f.pk),
        onSelect: l,
        onUpdate: d
      }
    ))))
  );
}
const xe = window.React, wc = window.MantineCore.Badge, yc = window.MantineCore.Group;
function bc({
  summary: e,
  delivered: t,
  overdueOnly: r,
  onFilter: n
}) {
  const s = [
    {
      key: "all",
      label: `${e.total} Lines`,
      color: "blue",
      icon: /* @__PURE__ */ xe.createElement(So, { size: 12 }),
      active: t === "all" && !r,
      onClick: () => n("all", !1)
    },
    {
      key: "awaiting",
      label: `${e.awaiting_delivery} Awaiting Delivery`,
      color: "orange",
      icon: /* @__PURE__ */ xe.createElement(vo, { size: 12 }),
      active: t === "awaiting" && !r,
      onClick: () => n("awaiting", !1)
    },
    {
      key: "delivered",
      label: `${e.delivered} Delivered`,
      color: "green",
      icon: /* @__PURE__ */ xe.createElement(qn, { size: 12 }),
      active: t === "delivered" && !r,
      onClick: () => n("delivered", !1)
    },
    {
      key: "overdue",
      label: `${e.overdue} Overdue`,
      color: "red",
      icon: /* @__PURE__ */ xe.createElement(Jn, { size: 12 }),
      active: r,
      onClick: () => n("all", !0),
      hidden: e.overdue === 0
    }
  ];
  return /* @__PURE__ */ xe.createElement(yc, { gap: "xs" }, s.filter((i) => !i.hidden).map((i) => /* @__PURE__ */ xe.createElement(
    wc,
    {
      key: i.key,
      size: "lg",
      color: i.color,
      variant: i.active ? "filled" : "light",
      leftSection: i.icon,
      style: { cursor: "pointer" },
      onClick: i.onClick
    },
    i.label
  )));
}
const zt = window.React, Sc = window.MantineCore.CloseButton, kc = window.MantineCore.TextInput;
function Cc({
  value: e,
  onChange: t,
  placeholder: r = "Search orders, parts, suppliers..."
}) {
  return /* @__PURE__ */ zt.createElement(
    kc,
    {
      value: e,
      placeholder: r,
      leftSection: /* @__PURE__ */ zt.createElement(Lo, { size: 16 }),
      rightSection: e.length > 0 ? /* @__PURE__ */ zt.createElement(Sc, { size: "sm", onClick: () => t("") }) : null,
      onChange: (n) => t(n.target.value),
      style: { flex: 1, maxWidth: 400 }
    }
  );
}
const D = window.React, hn = window.MantineCore.ActionIcon, fn = window.MantineCore.Divider, _n = window.MantineCore.Group, Mc = window.MantineCore.Paper, Rc = window.MantineCore.SegmentedControl, Ic = window.MantineCore.Select, pn = window.MantineCore.Switch, Gt = window.MantineCore.Tooltip;
function Ec({
  mode: e,
  search: t,
  onSearch: r,
  delivered: n,
  onDelivered: s,
  supplier: i,
  supplierOptions: a,
  onSupplier: o,
  overdueOnly: l,
  onOverdueOnly: h,
  includeReceived: u,
  includeReceivedLocked: d,
  onIncludeReceived: p,
  refreshing: _,
  onRefresh: w,
  onExport: y
}) {
  return /* @__PURE__ */ D.createElement(Mc, { p: "sm", withBorder: !0 }, /* @__PURE__ */ D.createElement(_n, { justify: "space-between", wrap: "wrap", gap: "sm" }, /* @__PURE__ */ D.createElement(Cc, { value: t, onChange: r }), /* @__PURE__ */ D.createElement(_n, { gap: "xs", wrap: "wrap" }, /* @__PURE__ */ D.createElement(
    Rc,
    {
      size: "xs",
      value: n,
      onChange: (f) => s(f),
      data: [
        { label: "All", value: "all" },
        { label: "Awaiting Delivery", value: "awaiting" },
        { label: "Delivered", value: "delivered" }
      ]
    }
  ), e === "index" && /* @__PURE__ */ D.createElement(
    Ic,
    {
      size: "xs",
      placeholder: "All suppliers",
      data: a,
      value: i,
      onChange: o,
      searchable: !0,
      clearable: !0,
      w: 200
    }
  ), /* @__PURE__ */ D.createElement(fn, { orientation: "vertical" }), /* @__PURE__ */ D.createElement(
    pn,
    {
      size: "xs",
      color: "red",
      label: "Overdue Only",
      checked: l,
      onChange: (f) => h(f.currentTarget.checked)
    }
  ), e === "order" && /* @__PURE__ */ D.createElement(
    Gt,
    {
      label: "Completed orders always show all lines",
      disabled: !d
    },
    /* @__PURE__ */ D.createElement(
      pn,
      {
        size: "xs",
        label: "Show Received Lines",
        checked: u,
        disabled: d,
        onChange: (f) => p(f.currentTarget.checked)
      }
    )
  ), /* @__PURE__ */ D.createElement(fn, { orientation: "vertical" }), /* @__PURE__ */ D.createElement(Gt, { label: "Refresh" }, /* @__PURE__ */ D.createElement(hn, { variant: "light", loading: _, onClick: w }, /* @__PURE__ */ D.createElement($o, { size: 16 }))), /* @__PURE__ */ D.createElement(Gt, { label: "Export to CSV" }, /* @__PURE__ */ D.createElement(hn, { variant: "light", color: "green", onClick: y }, /* @__PURE__ */ D.createElement(wo, { size: 16 }))))));
}
const L = window.React, Le = window.React.useCallback, Qt = window.React.useMemo, pt = window.React.useState, mt = window.MantineCore.Alert, mn = window.MantineCore.Group, Tc = window.MantineCore.Loader, vn = window.MantineCore.Stack, gn = window.MantineCore.Text, $c = window.MantineCore.Title, wn = window.MantineNotifications.notifications;
function xc({
  context: e
}) {
  const t = e.context ?? {}, r = t.mode === "order" ? "order" : "index", n = r === "order" ? Number(t.order_id ?? e.id) : void 0, s = r === "index" || t.editable !== !1, i = `po-delivery-${r}`, [a, o] = dt({
    key: `${i}-delivered`,
    defaultValue: "all"
  }), [l, h] = dt({
    key: `${i}-overdue`,
    defaultValue: !1
  }), [u, d] = dt({
    key: `${i}-received`,
    defaultValue: !1
  }), [p, _] = dt({
    key: `${i}-sort`,
    defaultValue: {
      column: r === "order" ? "line" : "target",
      direction: "asc"
    }
  }), [w, y] = pt(""), [f] = _a(w, 300), [R, S] = pt(null), [I, k] = pt(/* @__PURE__ */ new Set()), [N, ee] = pt(/* @__PURE__ */ new Set()), ze = r === "order" && (!s || u), { data: x, isLoading: it, isError: U, error: _e, isFetching: Ie, refetch: ot } = sc(e, n, ze), { mutateAsync: pe } = ic(e), me = !!(x != null && x.can_edit), Ct = (x == null ? void 0 : x.today) ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), ie = (x == null ? void 0 : x.results) ?? [], ls = Qt(() => {
    const E = /* @__PURE__ */ new Map();
    for (const $ of ie)
      $.supplier && E.set(String($.supplier.pk), $.supplier.name);
    return [...E.entries()].map(([$, P]) => ({ value: $, label: P })).sort(($, P) => $.label.localeCompare(P.label));
  }, [ie]), oe = Qt(
    () => Ho(
      Qo(ie, {
        search: f,
        delivered: a,
        supplier: R,
        overdueOnly: l
      }),
      p
    ),
    [ie, f, a, R, l, p]
  ), Ge = Qt(
    () => oe.filter((E) => I.has(E.pk) && E.order.editable),
    [oe, I]
  ), us = Le(
    (E) => _(($) => ({
      column: E,
      direction: $.column === E && $.direction === "asc" ? "desc" : "asc"
    })),
    [_]
  ), ds = Le((E, $) => {
    k((P) => {
      const H = new Set(P);
      return $ ? H.add(E) : H.delete(E), H;
    });
  }, []), hs = Le(
    (E) => {
      k(($) => {
        const P = new Set($);
        for (const H of oe)
          H.order.editable && (E ? P.add(H.pk) : P.delete(H.pk));
        return P;
      });
    },
    [oe]
  ), Mt = Le(
    async (E, $) => {
      ee((P) => /* @__PURE__ */ new Set([...P, ...E.lines]));
      try {
        return await pe(E), $ && wn.show({
          title: "Delivery updated",
          message: $,
          color: "green"
        }), !0;
      } catch (P) {
        return wn.show({
          title: "Failed to update delivery",
          message: un(P),
          color: "red"
        }), !1;
      } finally {
        ee((P) => {
          const H = new Set(P);
          return E.lines.forEach((ps) => H.delete(ps)), H;
        });
      }
    },
    [pe]
  ), _r = Le(
    async (E) => {
      const $ = Ge.map((H) => H.pk);
      await Mt(
        { lines: $, delivered: E },
        `${$.length} line${$.length === 1 ? "" : "s"} marked as ${E ? "delivered" : "not delivered"}`
      ) && k(/* @__PURE__ */ new Set());
    },
    [Ge, Mt]
  ), fs = Le(() => {
    const E = r === "order" && ie.length > 0 ? `${ie[0].order.reference}-deliveries` : `pending-deliveries-${Ct}`;
    Ko(oe, `${E}.csv`);
  }, [r, ie, oe, Ct]), _s = r === "order" ? "Deliveries" : "Pending Deliveries";
  return it ? /* @__PURE__ */ L.createElement(vn, { align: "center", justify: "center", p: "xl" }, /* @__PURE__ */ L.createElement(Tc, { size: "lg" }), /* @__PURE__ */ L.createElement(gn, { c: "dimmed" }, "Loading line items...")) : U || !x ? /* @__PURE__ */ L.createElement(
    mt,
    {
      icon: /* @__PURE__ */ L.createElement(Kn, { size: 16 }),
      title: "Error Loading Data",
      color: "red",
      variant: "light"
    },
    un(_e)
  ) : /* @__PURE__ */ L.createElement(vn, { gap: "md" }, /* @__PURE__ */ L.createElement(mn, { justify: "space-between", wrap: "wrap" }, /* @__PURE__ */ L.createElement(mn, { gap: "sm" }, /* @__PURE__ */ L.createElement($c, { order: 3 }, _s), /* @__PURE__ */ L.createElement(
    bc,
    {
      summary: x.summary,
      delivered: a,
      overdueOnly: l,
      onFilter: (E, $) => {
        o(E), h($);
      }
    }
  ))), /* @__PURE__ */ L.createElement(gn, { size: "sm", c: "dimmed" }, r === "index" ? "Line items on placed or on-hold purchase orders which have not been fully received. " : "", '"Delivered" records that items have physically arrived at the plant. It is separate from "Received", which books the items into stock.'), !s && /* @__PURE__ */ L.createElement(mt, { icon: /* @__PURE__ */ L.createElement(Co, { size: 16 }), color: "gray", variant: "light" }, "Delivery status can only be changed while the order is Placed or On Hold."), /* @__PURE__ */ L.createElement(
    Ec,
    {
      mode: r,
      search: w,
      onSearch: y,
      delivered: a,
      onDelivered: o,
      supplier: R,
      supplierOptions: ls,
      onSupplier: S,
      overdueOnly: l,
      onOverdueOnly: h,
      includeReceived: ze,
      includeReceivedLocked: !s,
      onIncludeReceived: d,
      refreshing: Ie,
      onRefresh: () => ot(),
      onExport: fs
    }
  ), me && Ge.length > 0 && /* @__PURE__ */ L.createElement(
    zo,
    {
      count: Ge.length,
      loading: Ge.some((E) => N.has(E.pk)),
      onMarkDelivered: () => _r(!0),
      onMarkNotDelivered: () => _r(!1),
      onClear: () => k(/* @__PURE__ */ new Set())
    }
  ), ie.length === 0 ? /* @__PURE__ */ L.createElement(mt, { icon: /* @__PURE__ */ L.createElement(zr, { size: 16 }), color: "gray", variant: "light" }, r === "index" ? "There are no outstanding line items on placed or on-hold purchase orders." : "There are no outstanding line items on this order.") : oe.length === 0 ? /* @__PURE__ */ L.createElement(mt, { icon: /* @__PURE__ */ L.createElement(zr, { size: 16 }), color: "gray", variant: "light" }, "No line items match the current filters.") : /* @__PURE__ */ L.createElement(
    gc,
    {
      rows: oe,
      mode: r,
      context: e,
      today: Ct,
      canEdit: me,
      sort: p,
      onSort: us,
      selected: I,
      onSelect: ds,
      onSelectAll: hs,
      busy: N,
      onUpdate: Mt
    }
  ));
}
const yn = window.React;
function cs(e) {
  return ws(e), /* @__PURE__ */ yn.createElement(ao, { locale: e.locale }, /* @__PURE__ */ yn.createElement(xc, { context: e }));
}
function Fc(e) {
  return cs(e);
}
function Uc(e) {
  return cs(e);
}
export {
  Fc as default,
  Fc as renderIndexPanel,
  Uc as renderOrderPanel
};
