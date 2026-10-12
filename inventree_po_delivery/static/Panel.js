var Fr = (e) => {
  throw TypeError(e);
};
var zt = (e, t, r) => t.has(e) || Fr("Cannot " + r);
var c = (e, t, r) => (zt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), M = (e, t, r) => t.has(e) ? Fr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, n) => (zt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), x = (e, t, r) => (zt(e, t, "access private method"), r);
const zr = "1.4.5";
var b = /* @__PURE__ */ ((e) => (e.api_server_info = "", e.user_list = "user/", e.user_set_password = "user/:id/set-password/", e.user_tokens = "user/tokens/", e.user_simple_login = "email/generate/", e.user_me_profile = "user/me/profile/", e.user_me_roles = "user/me/roles/", e.user_me_token = "user/me/token/", e.user_me = "user/me/", e.auth_base = "/auth/", e.user_reset = "auth/v1/auth/password/request", e.user_reset_set = "auth/v1/auth/password/reset", e.auth_pwd_change = "auth/v1/account/password/change", e.auth_login = "auth/v1/auth/login", e.auth_login_2fa = "auth/v1/auth/2fa/authenticate", e.auth_session = "auth/v1/auth/session", e.auth_signup = "auth/v1/auth/signup", e.auth_authenticators = "auth/v1/account/authenticators", e.auth_recovery = "auth/v1/account/authenticators/recovery-codes", e.auth_mfa_reauthenticate = "auth/v1/auth/2fa/reauthenticate", e.auth_totp = "auth/v1/account/authenticators/totp", e.auth_trust = "auth/v1/auth/2fa/trust", e.auth_webauthn = "auth/v1/account/authenticators/webauthn", e.auth_webauthn_login = "auth/v1/auth/webauthn/authenticate", e.auth_reauthenticate = "auth/v1/auth/reauthenticate", e.auth_email = "auth/v1/account/email", e.auth_email_verify = "auth/v1/auth/email/verify", e.auth_providers = "auth/v1/account/providers", e.auth_provider_redirect = "auth/v1/auth/provider/redirect", e.auth_config = "auth/v1/config", e.currency_list = "currency/exchange/", e.currency_refresh = "currency/refresh/", e.all_units = "units/all/", e.task_overview = "background-task/", e.task_pending_list = "background-task/pending/", e.task_scheduled_list = "background-task/scheduled/", e.task_failed_list = "background-task/failed/", e.api_search = "search/", e.settings_global_list = "settings/global/", e.settings_user_list = "settings/user/", e.news = "news/", e.global_status = "generic/status/", e.custom_state_list = "generic/status/custom/", e.version = "version/", e.license = "license/", e.group_list = "user/group/", e.owner_list = "user/owner/", e.ruleset_list = "user/ruleset/", e.content_type_list = "contenttype/", e.icons = "icons/", e.selectionlist_list = "selection/", e.selectionentry_list = "selection/:id/entry/", e.barcode = "barcode/", e.barcode_history = "barcode/history/", e.barcode_link = "barcode/link/", e.barcode_unlink = "barcode/unlink/", e.barcode_generate = "barcode/generate/", e.data_output = "data-output/", e.import_session_list = "importer/session/", e.import_session_accept_fields = "importer/session/:id/accept_fields/", e.import_session_accept_rows = "importer/session/:id/accept_rows/", e.import_session_column_mapping_list = "importer/column-mapping/", e.import_session_row_list = "importer/row/", e.notifications_list = "notifications/", e.notifications_readall = "notifications/readall/", e.build_order_list = "build/", e.build_order_issue = "build/:id/issue/", e.build_order_cancel = "build/:id/cancel/", e.build_order_hold = "build/:id/hold/", e.build_order_complete = "build/:id/finish/", e.build_output_complete = "build/:id/complete/", e.build_output_create = "build/:id/create-output/", e.build_output_scrap = "build/:id/scrap-outputs/", e.build_output_delete = "build/:id/delete-outputs/", e.build_order_auto_allocate = "build/:id/auto-allocate/", e.build_order_allocate = "build/:id/allocate/", e.build_order_consume = "build/:id/consume/", e.build_order_deallocate = "build/:id/unallocate/", e.build_line_list = "build/line/", e.build_item_list = "build/item/", e.bom_list = "bom/", e.bom_item_validate = "bom/:id/validate/", e.bom_validate = "part/:id/bom-validate/", e.bom_substitute_list = "bom/substitute/", e.part_list = "part/", e.part_thumbs_list = "part/thumbs/", e.part_pricing = "part/:id/pricing/", e.part_requirements = "part/:id/requirements/", e.part_serial_numbers = "part/:id/serial-numbers/", e.part_scheduling = "part/:id/scheduling/", e.part_pricing_internal = "part/internal-price/", e.part_pricing_sale = "part/sale-price/", e.part_stocktake_list = "part/stocktake/", e.part_stocktake_generate = "part/stocktake/generate/", e.category_list = "part/category/", e.category_tree = "part/category/tree/", e.category_parameter_list = "part/category/parameters/", e.related_part_list = "part/related/", e.part_test_template_list = "part/test-template/", e.company_list = "company/", e.contact_list = "company/contact/", e.address_list = "company/address/", e.supplier_part_list = "company/part/", e.supplier_part_pricing_list = "company/price-break/", e.manufacturer_part_list = "company/part/manufacturer/", e.stock_location_list = "stock/location/", e.stock_location_type_list = "stock/location-type/", e.stock_location_tree = "stock/location/tree/", e.stock_item_list = "stock/", e.stock_tracking_list = "stock/track/", e.stock_test_result_list = "stock/test/", e.stock_transfer = "stock/transfer/", e.stock_remove = "stock/remove/", e.stock_return = "stock/return/", e.stock_add = "stock/add/", e.stock_count = "stock/count/", e.stock_change_status = "stock/change_status/", e.stock_merge = "stock/merge/", e.stock_assign = "stock/assign/", e.stock_status = "stock/status/", e.stock_convert = "stock/:id/convert/", e.stock_install = "stock/:id/install/", e.stock_uninstall = "stock/:id/uninstall/", e.stock_serialize = "stock/:id/serialize/", e.stock_serial_info = "stock/:id/serial-numbers/", e.generate_batch_code = "generate/batch-code/", e.generate_serial_number = "generate/serial-number/", e.purchase_order_list = "order/po/", e.purchase_order_issue = "order/po/:id/issue/", e.purchase_order_hold = "order/po/:id/hold/", e.purchase_order_cancel = "order/po/:id/cancel/", e.purchase_order_complete = "order/po/:id/complete/", e.purchase_order_line_list = "order/po-line/", e.purchase_order_extra_line_list = "order/po-extra-line/", e.purchase_order_receive = "order/po/:id/receive/", e.sales_order_list = "order/so/", e.sales_order_issue = "order/so/:id/issue/", e.sales_order_hold = "order/so/:id/hold/", e.sales_order_cancel = "order/so/:id/cancel/", e.sales_order_ship = "order/so/:id/ship/", e.sales_order_complete = "order/so/:id/complete/", e.sales_order_allocate = "order/so/:id/allocate/", e.sales_order_allocate_serials = "order/so/:id/allocate-serials/", e.sales_order_auto_allocate = "order/so/:id/auto-allocate/", e.sales_order_line_list = "order/so-line/", e.sales_order_extra_line_list = "order/so-extra-line/", e.sales_order_allocation_list = "order/so-allocation/", e.sales_order_shipment_list = "order/so/shipment/", e.sales_order_shipment_complete = "order/so/shipment/:id/ship/", e.return_order_list = "order/ro/", e.return_order_issue = "order/ro/:id/issue/", e.return_order_hold = "order/ro/:id/hold/", e.return_order_cancel = "order/ro/:id/cancel/", e.return_order_complete = "order/ro/:id/complete/", e.return_order_receive = "order/ro/:id/receive/", e.return_order_line_list = "order/ro-line/", e.return_order_extra_line_list = "order/ro-extra-line/", e.transfer_order_list = "order/transfer-order/", e.transfer_order_issue = "order/transfer-order/:id/issue/", e.transfer_order_hold = "order/transfer-order/:id/hold/", e.transfer_order_cancel = "order/transfer-order/:id/cancel/", e.transfer_order_complete = "order/transfer-order/:id/complete/", e.transfer_order_allocate = "order/transfer-order/:id/allocate/", e.transfer_order_allocate_serials = "order/transfer-order/:id/allocate-serials/", e.transfer_order_line_list = "order/transfer-order-line/", e.transfer_order_allocation_list = "order/transfer-order-allocation/", e.label_list = "label/template/", e.label_print = "label/print/", e.report_list = "report/template/", e.report_print = "report/print/", e.report_snippet = "report/snippet/", e.report_asset = "report/asset/", e.plugin_list = "plugins/", e.plugin_setting_list = "plugins/:plugin/settings/", e.plugin_user_setting_list = "plugins/:plugin/user-settings/", e.plugin_registry_status = "plugins/status/", e.plugin_install = "plugins/install/", e.plugin_reload = "plugins/reload/", e.plugin_activate = "plugins/:key/activate/", e.plugin_uninstall = "plugins/:key/uninstall/", e.plugin_admin = "plugins/:key/admin/", e.plugin_ui_features_list = "plugins/ui/features/:feature_type/", e.plugin_locate_item = "locate/", e.plugin_supplier_list = "supplier/list/", e.plugin_supplier_search = "supplier/search/", e.plugin_supplier_import = "supplier/import/", e.machine_types_list = "machine/types/", e.machine_driver_list = "machine/drivers/", e.machine_registry_status = "machine/status/", e.machine_list = "machine/", e.machine_restart = "machine/:machine/restart/", e.machine_setting_list = "machine/:machine/settings/", e.machine_setting_detail = "machine/:machine/settings/:config_type/", e.attachment_list = "attachment/", e.error_report_list = "error-report/", e.project_code_list = "project-code/", e.custom_unit_list = "units/", e.notes_image_upload = "notes-image-upload/", e.email_list = "admin/email/", e.email_test = "admin/email/test/", e.config_list = "admin/config/", e.parameter_list = "parameter/", e.parameter_template_list = "parameter/template/", e.tag_list = "tag/", e.system_internal_trace_end = "system-internal/observability/end", e))(b || {});
window.LinguiCore.i18n;
window.LinguiCore.i18n;
b.part_list, b.parameter_list, b.parameter_template_list, b.part_test_template_list, b.supplier_part_list, b.manufacturer_part_list, b.category_list, b.stock_item_list, b.stock_location_list, b.stock_location_type_list, b.stock_tracking_list, b.build_order_list, b.build_line_list, b.build_item_list, b.company_list, b.project_code_list, b.purchase_order_list, b.purchase_order_line_list, b.sales_order_list, b.sales_order_shipment_list, b.return_order_list, b.return_order_line_list, b.transfer_order_list, b.transfer_order_line_list, b.address_list, b.contact_list, b.owner_list, b.user_list, b.group_list, b.import_session_list, b.label_list, b.report_list, b.plugin_list, b.content_type_list, b.selectionlist_list, b.selectionentry_list, b.error_report_list, b.tag_list;
function Vi(e) {
  var t;
  e == null || e.preventDefault(), e == null || e.stopPropagation(), (t = e == null ? void 0 : e.nativeEvent) == null || t.stopImmediatePropagation();
}
const qn = () => {
  var e;
  return ((e = window.INVENTREE_SETTINGS) == null ? void 0 : e.base_url) || "web";
}, Yi = (e, t, r) => {
  Vi(r);
  const n = `/${qn()}`;
  if (Ji(r)) {
    let i = e;
    e.startsWith("/") && !e.startsWith(n) && (i = `${n}${e}`), window.open(i, "_blank");
  } else {
    let i = e;
    e.startsWith(n) && (i = e.replace(n, "")), t(i);
  }
}, Ji = (e) => (e == null ? void 0 : e.ctrlKey) || (e == null ? void 0 : e.shiftKey) || (e == null ? void 0 : e.metaKey);
window.LinguiCore.i18n;
window.MantineNotifications.notifications;
function Xn(e) {
  var t;
  const r = ((t = e == null ? void 0 : e.version) == null ? void 0 : t.inventree) || "";
  zr != r && console.info(`Plugin version mismatch! Expected version ${zr}, got ${r}`);
}
var Ut = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function Ki() {
  if (Ur) return Ze;
  Ur = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var o in i)
        o !== "key" && (s[o] = i[o]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return Ze.Fragment = t, Ze.jsx = r, Ze.jsxs = r, Ze;
}
var Br;
function qi() {
  return Br || (Br = 1, Ut.exports = Ki()), Ut.exports;
}
qi();
window.MantineCore.ActionIcon;
window.MantineCore.Group;
window.MantineCore.Tooltip;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Xi = {
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
const Zi = window.React.forwardRef, Bt = window.React.createElement, V = (e, t, r, n) => {
  const i = Zi(
    ({ color: s = "currentColor", size: a = 24, stroke: o = 2, title: l, className: h, children: u, ...d }, _) => Bt(
      "svg",
      {
        ref: _,
        ...Xi[e],
        width: a,
        height: a,
        className: ["tabler-icon", `tabler-icon-${t}`, h].join(" "),
        strokeWidth: o,
        stroke: s,
        ...d
      },
      [
        l && Bt("title", { key: "svg-title" }, l),
        ...n.map(([p, g]) => Bt(p, g)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return i.displayName = `${r}`, i;
};
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ai = [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M5 12l14 0", key: "svg-1" }]];
V("outline", "plus", "Plus", Ai);
const es = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Zn = Object.prototype.toString;
function ts(e) {
  switch (Zn.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return ss(e, Error);
  }
}
function rs(e, t) {
  return Zn.call(e) === `[object ${t}]`;
}
function ns(e) {
  return rs(e, "Object");
}
function is(e) {
  return !!(e != null && e.then && typeof e.then == "function");
}
function ss(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
const lt = "10.46.0", ne = globalThis;
function xt() {
  return br(ne), ne;
}
function br(e) {
  const t = e.__SENTRY__ = e.__SENTRY__ || {};
  return t.version = t.version || lt, t[lt] = t[lt] || {};
}
function Sr(e, t, r = ne) {
  const n = r.__SENTRY__ = r.__SENTRY__ || {}, i = n[lt] = n[lt] || {};
  return i[e] || (i[e] = t());
}
const Te = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
let Pe;
function Lt(e) {
  if (Pe !== void 0)
    return Pe ? Pe(e) : e();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"), r = ne;
  return t in r && typeof r[t] == "function" ? (Pe = r[t], Pe(e)) : (Pe = null, e());
}
function nr() {
  return Lt(() => Math.random());
}
function os() {
  return Lt(() => Date.now());
}
function as() {
  const e = ne;
  return e.crypto || e.msCrypto;
}
let jt;
function cs() {
  return nr() * 16;
}
function ut(e = as()) {
  try {
    if (e != null && e.randomUUID)
      return Lt(() => e.randomUUID()).replace(/-/g, "");
  } catch {
  }
  return jt || (jt = "10000000100040008000" + 1e11), jt.replace(
    /[018]/g,
    (t) => (
      // eslint-disable-next-line no-bitwise
      (t ^ (cs() & 15) >> t / 4).toString(16)
    )
  );
}
const An = 1e3;
function ei() {
  return os() / An;
}
function ls() {
  const { performance: e } = ne;
  if (!(e != null && e.now) || !e.timeOrigin)
    return ei;
  const t = e.timeOrigin;
  return () => (t + Lt(() => e.now())) / An;
}
let jr;
function us() {
  return (jr ?? (jr = ls()))();
}
function ds(e, t = {}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || us(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : ut()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration)
    e.duration = void 0;
  else if (typeof t.duration == "number")
    e.duration = t.duration;
  else {
    const r = e.timestamp - e.started;
    e.duration = r >= 0 ? r : 0;
  }
  t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
const hs = "Sentry Logger ", Gr = {};
function ti(e) {
  if (!("console" in ne))
    return e();
  const t = ne.console, r = {}, n = Object.keys(Gr);
  n.forEach((i) => {
    const s = Gr[i];
    r[i] = t[i], t[i] = s;
  });
  try {
    return e();
  } finally {
    n.forEach((i) => {
      t[i] = r[i];
    });
  }
}
function ps() {
  Cr().enabled = !0;
}
function fs() {
  Cr().enabled = !1;
}
function ri() {
  return Cr().enabled;
}
function ms(...e) {
  kr("log", ...e);
}
function _s(...e) {
  kr("warn", ...e);
}
function vs(...e) {
  kr("error", ...e);
}
function kr(e, ...t) {
  Te && ri() && ti(() => {
    ne.console[e](`${hs}[${e}]:`, ...t);
  });
}
function Cr() {
  return Te ? Sr("loggerSettings", () => ({ enabled: !1 })) : { enabled: !1 };
}
const ee = {
  /** Enable logging. */
  enable: ps,
  /** Disable logging. */
  disable: fs,
  /** Check if logging is enabled. */
  isEnabled: ri,
  /** Log a message. */
  log: ms,
  /** Log a warning. */
  warn: _s,
  /** Log an error. */
  error: vs
};
function ni(e, t, r = 2) {
  if (!t || typeof t != "object" || r <= 0)
    return t;
  if (e && Object.keys(t).length === 0)
    return e;
  const n = { ...e };
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) && (n[i] = ni(n[i], t[i], r - 1));
  return n;
}
function Wr() {
  return ut();
}
function gs(e, t, r) {
  try {
    Object.defineProperty(e, t, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: r,
      writable: !0,
      configurable: !0
    });
  } catch {
    Te && ee.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
const ir = "_sentrySpan";
function Qr(e, t) {
  t ? gs(e, ir, t) : delete e[ir];
}
function Hr(e) {
  return e[ir];
}
function ws(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
const ys = 100;
class we {
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
      traceId: Wr(),
      sampleRand: nr()
    };
  }
  /**
   * Clone all data from this scope into a new scope.
   */
  clone() {
    const t = new we();
    return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags }, t._attributes = { ...this._attributes }, t._extra = { ...this._extra }, t._contexts = { ...this._contexts }, this._contexts.flags && (t._contexts.flags = {
      values: [...this._contexts.flags.values]
    }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t._propagationContext = { ...this._propagationContext }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, Qr(t, Hr(this)), t;
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
    }, this._session && ds(this._session, { user: t }), this._notifyScopeListeners(), this;
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
    const r = typeof t == "function" ? t(this) : t, n = r instanceof we ? r.getScopeData() : ns(r) ? t : void 0, {
      tags: i,
      attributes: s,
      extra: a,
      user: o,
      contexts: l,
      level: h,
      fingerprint: u = [],
      propagationContext: d,
      conversationId: _
    } = n || {};
    return this._tags = { ...this._tags, ...i }, this._attributes = { ...this._attributes, ...s }, this._extra = { ...this._extra, ...a }, this._contexts = { ...this._contexts, ...l }, o && Object.keys(o).length && (this._user = o), h && (this._level = h), u.length && (this._fingerprint = u), d && (this._propagationContext = d), _ && (this._conversationId = _), this;
  }
  /**
   * Clears the current scope and resets its properties.
   * Note: The client will not be cleared.
   */
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, Qr(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: Wr(),
      sampleRand: nr()
    }), this._notifyScopeListeners(), this;
  }
  /**
   * Adds a breadcrumb to the scope.
   * By default, the last 100 breadcrumbs are kept.
   */
  addBreadcrumb(t, r) {
    var n;
    const i = typeof r == "number" ? r : ys;
    if (i <= 0)
      return this;
    const s = {
      timestamp: ei(),
      ...t,
      // Breadcrumb messages can theoretically be infinitely large and they're held in memory so we truncate them not to leak (too much) memory
      message: t.message ? ws(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(s), this._breadcrumbs.length > i && (this._breadcrumbs = this._breadcrumbs.slice(-i), (n = this._client) == null || n.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
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
      span: Hr(this),
      conversationId: this._conversationId
    };
  }
  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry.
   */
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = ni(this._sdkProcessingMetadata, t, 2), this;
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
    const n = (r == null ? void 0 : r.event_id) || ut();
    if (!this._client)
      return Te && ee.warn("No client configured on scope - will not capture exception!"), n;
    const i = new Error("Sentry syntheticException");
    return this._client.captureException(
      t,
      {
        originalException: t,
        syntheticException: i,
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
    const i = (n == null ? void 0 : n.event_id) || ut();
    if (!this._client)
      return Te && ee.warn("No client configured on scope - will not capture message!"), i;
    const s = (n == null ? void 0 : n.syntheticException) ?? new Error(t);
    return this._client.captureMessage(
      t,
      r,
      {
        originalException: t,
        syntheticException: s,
        ...n,
        event_id: i
      },
      this
    ), i;
  }
  /**
   * Capture a Sentry event for this scope.
   *
   * @returns {string} The id of the captured event.
   */
  captureEvent(t, r) {
    const n = t.event_id || (r == null ? void 0 : r.event_id) || ut();
    return this._client ? (this._client.captureEvent(t, { ...r, event_id: n }, this), n) : (Te && ee.warn("No client configured on scope - will not capture event!"), n);
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
function bs() {
  return Sr("defaultCurrentScope", () => new we());
}
function Ss() {
  return Sr("defaultIsolationScope", () => new we());
}
const Vr = (e) => e instanceof Promise && !e[ii], ii = Symbol("chained PromiseLike"), ks = (e, t, r) => {
  const n = e.then(
    (i) => (t(i), i),
    (i) => {
      throw r(i), i;
    }
  );
  return Vr(n) && Vr(e) ? n : Cs(e, n);
}, Cs = (e, t) => {
  let r = !1;
  for (const n in e) {
    if (n in t) continue;
    r = !0;
    const i = e[n];
    typeof i == "function" ? Object.defineProperty(t, n, {
      value: (...s) => i.apply(e, s),
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i;
  }
  return r && Object.assign(t, { [ii]: !0 }), t;
};
class Ms {
  constructor(t, r) {
    let n;
    t ? n = t : n = new we();
    let i;
    r ? i = r : i = new we(), this._stack = [{ scope: n }], this._isolationScope = i;
  }
  /**
   * Fork a scope for the stack.
   */
  withScope(t) {
    const r = this._pushScope();
    let n;
    try {
      n = t(r);
    } catch (i) {
      throw this._popScope(), i;
    }
    return is(n) ? ks(
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
function Ke() {
  const e = xt(), t = br(e);
  return t.stack = t.stack || new Ms(bs(), Ss());
}
function Es(e) {
  return Ke().withScope(e);
}
function Rs(e, t) {
  const r = Ke();
  return r.withScope(() => (r.getStackTop().scope = e, t(e)));
}
function Yr(e) {
  return Ke().withScope(() => e(Ke().getIsolationScope()));
}
function Is() {
  return {
    withIsolationScope: Yr,
    withScope: Es,
    withSetScope: Rs,
    withSetIsolationScope: (e, t) => Yr(t),
    getCurrentScope: () => Ke().getScope(),
    getIsolationScope: () => Ke().getIsolationScope()
  };
}
function Mr(e) {
  const t = br(e);
  return t.acs ? t.acs : Is();
}
function Er() {
  const e = xt();
  return Mr(e).getCurrentScope();
}
function Ts() {
  const e = xt();
  return Mr(e).getIsolationScope();
}
function si(...e) {
  const t = xt(), r = Mr(t);
  if (e.length === 2) {
    const [n, i] = e;
    return n ? r.withSetScope(n, i) : r.withScope(i);
  }
  return r.withScope(e[0]);
}
function oi() {
  return Er().getClient();
}
function $s(e) {
  if (e)
    return xs(e) ? { captureContext: e } : Ds(e) ? {
      captureContext: e
    } : e;
}
function xs(e) {
  return e instanceof we || typeof e == "function";
}
const Ls = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext"
];
function Ds(e) {
  return Object.keys(e).some((t) => Ls.includes(t));
}
function Ps(e, t) {
  return Er().captureException(e, $s(t));
}
function Ns() {
  return Ts().lastEventId();
}
const Os = window.React.version;
function Fs(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function zs(e, t) {
  const r = /* @__PURE__ */ new WeakSet();
  function n(i, s) {
    if (!r.has(i)) {
      if (i.cause)
        return r.add(i), n(i.cause, s);
      i.cause = s;
    }
  }
  n(e, t);
}
function Us(e, { componentStack: t }, r) {
  if (Fs(Os) && ts(e) && t) {
    const n = new Error(e.message);
    n.name = `React ErrorBoundary ${e.name}`, n.stack = t, zs(e, n);
  }
  return si((n) => (n.setContext("react", { componentStack: t }), Ps(e, r)));
}
const Jr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, _t = ne, Bs = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function js(e) {
  return e === "http" || e === "https";
}
function Gs(e, t = !1) {
  const { host: r, path: n, pass: i, port: s, projectId: a, protocol: o, publicKey: l } = e;
  return `${o}://${l}${t && i ? `:${i}` : ""}@${r}${s ? `:${s}` : ""}/${n && `${n}/`}${a}`;
}
function Ws(e) {
  const t = Bs.exec(e);
  if (!t) {
    ti(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [r, n, i = "", s = "", a = "", o = ""] = t.slice(1);
  let l = "", h = o;
  const u = h.split("/");
  if (u.length > 1 && (l = u.slice(0, -1).join("/"), h = u.pop()), h) {
    const d = h.match(/^\d+/);
    d && (h = d[0]);
  }
  return ai({ host: s, pass: i, path: l, projectId: h, port: a, protocol: r, publicKey: n });
}
function ai(e) {
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
function Qs(e) {
  if (!Te)
    return !0;
  const { port: t, projectId: r, protocol: n } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((a) => e[a] ? !1 : (ee.error(`Invalid Sentry Dsn: ${a} missing`), !0)) ? !1 : r.match(/^\d+$/) ? js(n) ? t && isNaN(parseInt(t, 10)) ? (ee.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (ee.error(`Invalid Sentry Dsn: Invalid protocol ${n}`), !1) : (ee.error(`Invalid Sentry Dsn: Invalid projectId ${r}`), !1);
}
function Hs(e) {
  const t = typeof e == "string" ? Ws(e) : ai(e);
  if (!(!t || !Qs(t)))
    return t;
}
function Vs(e) {
  const t = e.protocol ? `${e.protocol}:` : "", r = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${r}${e.path ? `/${e.path}` : ""}/api/`;
}
function Ys(e, t) {
  const r = Hs(e);
  if (!r)
    return "";
  const n = `${Vs(r)}embed/error-page/`;
  let i = `dsn=${Gs(r)}`;
  for (const s in t)
    if (s !== "dsn" && s !== "onClose")
      if (s === "user") {
        const a = t.user;
        if (!a)
          continue;
        a.name && (i += `&name=${encodeURIComponent(a.name)}`), a.email && (i += `&email=${encodeURIComponent(a.email)}`);
      } else
        i += `&${encodeURIComponent(s)}=${encodeURIComponent(t[s])}`;
  return `${n}?${i}`;
}
function Kr(e = {}) {
  const t = _t.document, r = (t == null ? void 0 : t.head) || (t == null ? void 0 : t.body);
  if (!r) {
    Jr && ee.error("[showReportDialog] Global document not defined");
    return;
  }
  const n = Er(), i = oi(), s = i == null ? void 0 : i.getDsn();
  if (!s) {
    Jr && ee.error("[showReportDialog] DSN not configured");
    return;
  }
  const a = {
    ...e,
    user: {
      ...n.getUser(),
      ...e.user
    },
    eventId: e.eventId || Ns()
  }, o = _t.document.createElement("script");
  o.async = !0, o.crossOrigin = "anonymous", o.src = Ys(s, a);
  const { onLoad: l, onClose: h } = a;
  if (l && (o.onload = l), h) {
    const u = (d) => {
      if (d.data === "__sentry_reportdialog_closed__")
        try {
          h();
        } finally {
          _t.removeEventListener("message", u);
        }
    };
    _t.addEventListener("message", u);
  }
  r.appendChild(o);
}
const Gt = window.React, Wt = {
  componentStack: null,
  error: null,
  eventId: null
};
class kl extends Gt.Component {
  constructor(t) {
    super(t), this.state = Wt, this._openFallbackReportDialog = !0;
    const r = oi();
    r && t.showDialog && (this._openFallbackReportDialog = !1, this._cleanupHook = r.on("afterSendEvent", (n) => {
      !n.type && this._lastEventId && n.event_id === this._lastEventId && Kr({ ...t.dialogOptions, eventId: this._lastEventId });
    }));
  }
  componentDidCatch(t, r) {
    const { componentStack: n } = r, { beforeCapture: i, onError: s, showDialog: a, dialogOptions: o } = this.props;
    si((l) => {
      i && i(l, t, n);
      const h = this.props.handled != null ? this.props.handled : !!this.props.fallback, u = Us(t, r, {
        mechanism: { handled: h, type: "auto.function.react.error_boundary" }
      });
      s && s(t, n, u), a && (this._lastEventId = u, this._openFallbackReportDialog && Kr({ ...o, eventId: u })), this.setState({ error: t, componentStack: n, eventId: u });
    });
  }
  componentDidMount() {
    const { onMount: t } = this.props;
    t && t();
  }
  componentWillUnmount() {
    const { error: t, componentStack: r, eventId: n } = this.state, { onUnmount: i } = this.props;
    i && (this.state === Wt ? i(null, null, null) : i(t, r, n)), this._cleanupHook && (this._cleanupHook(), this._cleanupHook = void 0);
  }
  resetErrorBoundary() {
    const { onReset: t } = this.props, { error: r, componentStack: n, eventId: i } = this.state;
    t && t(r, n, i), this.setState(Wt);
  }
  render() {
    const { fallback: t, children: r } = this.props, n = this.state;
    if (n.componentStack === null)
      return typeof r == "function" ? r() : r;
    const i = typeof t == "function" ? Gt.createElement(t, {
      error: n.error,
      componentStack: n.componentStack,
      resetError: () => this.resetErrorBoundary(),
      eventId: n.eventId
    }) : t;
    return Gt.isValidElement(i) ? i : (t && es && ee.warn("fallback did not produce a valid ReactElement"), null);
  }
}
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M12 9v4", key: "svg-1" }], ["path", { d: "M12 16v.01", key: "svg-2" }]];
V("outline", "exclamation-circle", "ExclamationCircle", Js);
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
const Ks = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]];
V("outline", "check", "Check", Ks);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]];
V("outline", "copy", "Copy", qs);
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
const Xs = [["path", { d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]];
V("outline", "search", "Search", Xs);
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
const Zs = [["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M6 4v4", key: "svg-1" }], ["path", { d: "M6 12v8", key: "svg-2" }], ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }], ["path", { d: "M12 4v10", key: "svg-4" }], ["path", { d: "M12 18v2", key: "svg-5" }], ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }], ["path", { d: "M18 4v1", key: "svg-7" }], ["path", { d: "M18 9v11", key: "svg-8" }]];
V("outline", "adjustments", "Adjustments", Zs);
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
const As = [["path", { d: "M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3", key: "svg-1" }]];
V("outline", "tag", "Tag", As);
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
const eo = [["path", { d: "M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]];
V("outline", "dots", "Dots", eo);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M10 10l4 4m0 -4l-4 4", key: "svg-1" }]];
V("outline", "circle-x", "CircleX", to);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]];
V("outline", "trash", "Trash", ro);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [["path", { d: "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1", key: "svg-0" }], ["path", { d: "M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415", key: "svg-1" }], ["path", { d: "M16 5l3 3", key: "svg-2" }]];
V("outline", "edit", "Edit", no);
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = [["path", { d: "M5 12l14 0", key: "svg-0" }], ["path", { d: "M13 18l6 -6", key: "svg-1" }], ["path", { d: "M13 6l6 6", key: "svg-2" }]];
V("outline", "arrow-right", "ArrowRight", io);
window.LinguiCore.i18n;
window.MantineCore.ActionIcon;
window.MantineCore.Menu;
window.MantineCore.Tooltip;
window.React.useMemo;
window.React.useState;
window.React.useEffect;
window.React.useState;
var ci = class {
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
}, li = (e) => {
  throw TypeError(e);
}, ui = (e, t, r) => t.has(e) || li("Cannot " + r), ye = (e, t, r) => (ui(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Qt = (e, t, r) => t.has(e) ? li("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ae = (e, t, r, n) => (ui(e, t, "write to private field"), t.set(e, r), r), Ne, be, et, qr, so = (qr = class extends ci {
  constructor() {
    super(), Qt(this, Ne), Qt(this, be), Qt(this, et), Ae(this, et, (e) => {
      if (typeof window < "u" && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    ye(this, be) || this.setEventListener(ye(this, et));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = ye(this, be)) == null || e.call(this), Ae(this, be, void 0));
  }
  setEventListener(e) {
    var t;
    Ae(this, et, e), (t = ye(this, be)) == null || t.call(this), Ae(this, be, e((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(e) {
    ye(this, Ne) !== e && (Ae(this, Ne, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return typeof ye(this, Ne) == "boolean" ? ye(this, Ne) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Ne = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), qr);
new so();
var di = (e) => {
  throw TypeError(e);
}, hi = (e, t, r) => t.has(e) || di("Cannot " + r), vt = (e, t, r) => (hi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Xr = (e, t, r) => t.has(e) ? di("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), oo = (e, t, r, n) => (hi(e, t, "write to private field"), t.set(e, r), r), Se, Zr, Ar, ao = {
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
}, co = (Ar = class {
  constructor() {
    Xr(this, Se, ao), Xr(this, Zr, !1);
  }
  setTimeoutProvider(e) {
    oo(this, Se, e);
  }
  setTimeout(e, t) {
    return vt(this, Se).setTimeout(e, t);
  }
  clearTimeout(e) {
    vt(this, Se).clearTimeout(e);
  }
  setInterval(e, t) {
    return vt(this, Se).setInterval(e, t);
  }
  clearInterval(e) {
    vt(this, Se).clearInterval(e);
  }
}, Se = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Ar);
new co();
var pi = (e) => {
  throw TypeError(e);
}, fi = (e, t, r) => t.has(e) || pi("Cannot " + r), Oe = (e, t, r) => (fi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ht = (e, t, r) => t.has(e) ? pi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), tt = (e, t, r, n) => (fi(e, t, "write to private field"), t.set(e, r), r), rt, ke, nt, en, lo = (en = class extends ci {
  constructor() {
    super(), Ht(this, rt, !0), Ht(this, ke), Ht(this, nt), tt(this, nt, (e) => {
      if (typeof window < "u" && window.addEventListener) {
        const t = () => e(!0), r = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    Oe(this, ke) || this.setEventListener(Oe(this, nt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = Oe(this, ke)) == null || e.call(this), tt(this, ke, void 0));
  }
  setEventListener(e) {
    var t;
    tt(this, nt, e), (t = Oe(this, ke)) == null || t.call(this), tt(this, ke, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    Oe(this, rt) !== e && (tt(this, rt, e), this.listeners.forEach((r) => {
      r(e);
    }));
  }
  isOnline() {
    return Oe(this, rt);
  }
}, rt = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), en);
new lo();
const uo = window.React;
uo.createContext(
  void 0
);
const ho = window.React;
function po() {
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
ho.createContext(po());
const fo = window.React;
var mo = fo.createContext(!1);
mo.Provider;
/**
 * @license @tabler/icons-react v3.40.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]];
V("outline", "circle-check", "CircleCheck", _o);
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
var tn;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(tn || (tn = {}));
var rn;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(rn || (rn = {}));
class vo extends Error {
}
const mi = ["post", "put", "patch", "delete"];
new Set(mi);
const go = ["get", ...mi];
new Set(go);
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
const re = window.React, nn = /* @__PURE__ */ re.createContext(null), wo = /* @__PURE__ */ re.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), yo = /* @__PURE__ */ re.createContext(null);
class Ml extends re.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ re.createElement(wo.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ re.createElement(yo.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
const bo = "startTransition";
re[bo];
var q = /* @__PURE__ */ (function(e) {
  return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e;
})(q || {});
const So = new Promise(() => {
});
class El extends re.Component {
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
    } = this.props, i = null, s = q.pending;
    if (!(n instanceof Promise))
      s = q.success, i = Promise.resolve(), Object.defineProperty(i, "_tracked", {
        get: () => !0
      }), Object.defineProperty(i, "_data", {
        get: () => n
      });
    else if (this.state.error) {
      s = q.error;
      let a = this.state.error;
      i = Promise.reject().catch(() => {
      }), Object.defineProperty(i, "_tracked", {
        get: () => !0
      }), Object.defineProperty(i, "_error", {
        get: () => a
      });
    } else n._tracked ? (i = n, s = "_error" in i ? q.error : "_data" in i ? q.success : q.pending) : (s = q.pending, Object.defineProperty(n, "_tracked", {
      get: () => !0
    }), i = n.then((a) => Object.defineProperty(n, "_data", {
      get: () => a
    }), (a) => Object.defineProperty(n, "_error", {
      get: () => a
    })));
    if (s === q.error && i._error instanceof vo)
      throw So;
    if (s === q.error && !r)
      throw i._error;
    if (s === q.error)
      return /* @__PURE__ */ re.createElement(nn.Provider, {
        value: i,
        children: r
      });
    if (s === q.success)
      return /* @__PURE__ */ re.createElement(nn.Provider, {
        value: i,
        children: t
      });
    throw i;
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
const _i = window.React, ko = window.ReactDOM, Co = "6";
try {
  window.__reactRouterVersion = Co;
} catch {
}
const Mo = "startTransition";
_i[Mo];
const Eo = "flushSync";
ko[Eo];
const Ro = "useId";
_i[Ro];
var sn;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(sn || (sn = {}));
var on;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(on || (on = {}));
function Io(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var s;
      const a = (l) => l === null ? null : JSON.parse(l, void 0), o = (s = r.getItem(i)) != null ? s : null;
      return o instanceof Promise ? o.then(a) : a(o);
    },
    setItem: (i, s) => r.setItem(i, JSON.stringify(s, void 0)),
    removeItem: (i) => r.removeItem(i)
  };
}
const sr = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(n) {
        return sr(n)(r);
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
        return sr(n)(r);
      }
    };
  }
}, To = (e, t) => (r, n, i) => {
  let s = {
    storage: Io(() => window.localStorage),
    partialize: (m) => m,
    version: 0,
    merge: (m, k) => ({
      ...k,
      ...m
    }),
    ...t
  }, a = !1, o = 0;
  const l = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  let u = s.storage;
  if (!u)
    return e(
      (...m) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...m);
      },
      n,
      i
    );
  const d = () => {
    const m = s.partialize({ ...n() });
    return u.setItem(s.name, {
      state: m,
      version: s.version
    });
  }, _ = i.setState;
  i.setState = (m, k) => (_(m, k), d());
  const p = e(
    (...m) => (r(...m), d()),
    n,
    i
  );
  i.getInitialState = () => p;
  let g;
  const R = () => {
    var m, k;
    if (!u) return;
    const v = ++o;
    a = !1, l.forEach((I) => {
      var O;
      return I((O = n()) != null ? O : p);
    });
    const T = ((k = s.onRehydrateStorage) == null ? void 0 : k.call(s, (m = n()) != null ? m : p)) || void 0;
    return sr(u.getItem.bind(u))(s.name).then((I) => {
      if (I)
        if (typeof I.version == "number" && I.version !== s.version) {
          if (s.migrate) {
            const O = s.migrate(
              I.state,
              I.version
            );
            return O instanceof Promise ? O.then((le) => [!0, le]) : [!0, O];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, I.state];
      return [!1, void 0];
    }).then((I) => {
      var O;
      if (v !== o)
        return;
      const [le, xe] = I;
      if (g = s.merge(
        xe,
        (O = n()) != null ? O : p
      ), r(g, !0), le)
        return d();
    }).then(() => {
      v === o && (T == null || T(n(), void 0), g = n(), a = !0, h.forEach((I) => I(g)));
    }).catch((I) => {
      v === o && (T == null || T(void 0, I));
    });
  };
  return i.persist = {
    setOptions: (m) => {
      s = {
        ...s,
        ...m
      }, m.storage && (u = m.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => R(),
    hasHydrated: () => a,
    onHydrate: (m) => (l.add(m), () => {
      l.delete(m);
    }),
    onFinishHydration: (m) => (h.add(m), () => {
      h.delete(m);
    })
  }, s.skipHydration || R(), g || p;
}, vi = To, an = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (h, u) => {
    const d = typeof h == "function" ? h(t) : h;
    if (!Object.is(d, t)) {
      const _ = t;
      t = u ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), r.forEach((p) => p(t, _));
    }
  }, i = () => t, o = { setState: n, getState: i, getInitialState: () => l, subscribe: (h) => (r.add(h), () => r.delete(h)) }, l = t = e(n, i, o);
  return o;
}, $o = ((e) => e ? an(e) : an), gt = window.React, xo = (e) => e;
function Lo(e, t = xo) {
  const r = gt.useSyncExternalStore(
    e.subscribe,
    gt.useCallback(() => t(e.getState()), [e, t]),
    gt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return gt.useDebugValue(r), r;
}
const Do = (e) => {
  const t = $o(e), r = (n) => Lo(t, n);
  return Object.assign(r, t), r;
}, gi = ((e) => Do);
gi()(vi((e, t) => ({
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
const Po = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]];
V("outline", "chevron-left", "ChevronLeft", Po);
window.MantineCore.ActionIcon;
window.MantineCore.Divider;
window.MantineCore.Drawer;
window.MantineCore.Group;
window.MantineCore.Stack;
window.MantineCore.Text;
window.React.useCallback;
window.React.useMemo;
const No = 25;
gi()(vi((e, t) => ({
  pageSize: No,
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
const cn = window.React, Oo = window.LinguiReact.I18nProvider, ln = window.LinguiCore.i18n;
function wi({
  locale: e,
  children: t
}) {
  return cn.useEffect(() => {
    ln.activate(e);
  }, [e]), /* @__PURE__ */ cn.createElement(Oo, { i18n: ln }, t);
}
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fo = {
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
const zo = window.React.forwardRef, Vt = window.React.createElement, z = (e, t, r, n) => {
  const i = zo(
    ({ color: s = "currentColor", size: a = 24, stroke: o = 2, title: l, className: h, children: u, ...d }, _) => Vt(
      "svg",
      {
        ref: _,
        ...Fo[e],
        width: a,
        height: a,
        className: ["tabler-icon", `tabler-icon-${t}`, h].join(" "),
        strokeWidth: o,
        stroke: s,
        ...d
      },
      [
        l && Vt("title", { key: "svg-title" }, l),
        ...n.map(([p, g]) => Vt(p, g)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return i.displayName = `${r}`, i;
};
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [["path", { d: "M12 9v4", key: "svg-0" }], ["path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Rr = z("outline", "alert-triangle", "AlertTriangle", Uo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [["path", { d: "M5 12l14 0", key: "svg-0" }], ["path", { d: "M5 12l6 6", key: "svg-1" }], ["path", { d: "M5 12l6 -6", key: "svg-2" }]], jo = z("outline", "arrow-left", "ArrowLeft", Bo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], Wo = z("outline", "chevron-down", "ChevronDown", Go);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], Ho = z("outline", "chevron-up", "ChevronUp", Qo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 7v5l3 3", key: "svg-1" }]], Yo = z("outline", "clock", "Clock", Vo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M8 11h8v7h-8l0 -7", key: "svg-2" }], ["path", { d: "M8 15h8", key: "svg-3" }], ["path", { d: "M11 11v7", key: "svg-4" }]], Ko = z("outline", "file-spreadsheet", "FileSpreadsheet", Jo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 9h.01", key: "svg-1" }], ["path", { d: "M11 12h1v4h1", key: "svg-2" }]], or = z("outline", "info-circle", "InfoCircle", qo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [["path", { d: "M9 6l11 0", key: "svg-0" }], ["path", { d: "M9 12l11 0", key: "svg-1" }], ["path", { d: "M9 18l11 0", key: "svg-2" }], ["path", { d: "M5 6l0 .01", key: "svg-3" }], ["path", { d: "M5 12l0 .01", key: "svg-4" }], ["path", { d: "M5 18l0 .01", key: "svg-5" }]], Zo = z("outline", "list", "List", Xo);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [["path", { d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6", key: "svg-0" }], ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-1" }], ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4", key: "svg-2" }]], ea = z("outline", "lock", "Lock", Ao);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [["path", { d: "M13 20l7 -7", key: "svg-0" }], ["path", { d: "M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7", key: "svg-1" }]], ra = z("outline", "note", "Note", ta);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], ia = z("outline", "pencil", "Pencil", na);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = [["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4", key: "svg-0" }], ["path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4", key: "svg-1" }]], yi = z("outline", "refresh", "Refresh", sa);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = [["path", { d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], aa = z("outline", "search", "Search", oa);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = [["path", { d: "M8 9l4 -4l4 4", key: "svg-0" }], ["path", { d: "M16 15l-4 4l-4 -4", key: "svg-1" }]], la = z("outline", "selector", "Selector", ca);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = [["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5", key: "svg-2" }], ["path", { d: "M3 9l4 0", key: "svg-3" }]], bi = z("outline", "truck-delivery", "TruckDelivery", ua);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = [["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M15.585 15.586a2 2 0 0 0 2.826 2.831", key: "svg-1" }], ["path", { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h1m3.96 0h4.04v4m0 4v4m-4 0h6m6 0v-6h-6m-2 -5h5l3 5", key: "svg-2" }], ["path", { d: "M3 3l18 18", key: "svg-3" }]], ha = z("outline", "truck-off", "TruckOff", da);
/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pa = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Dt = z("outline", "x", "X", pa), te = window.React, Yt = window.MantineCore.Button, un = window.MantineCore.Group, fa = window.MantineCore.Paper, ma = window.MantineCore.Text;
function _a({
  count: e,
  loading: t,
  onMarkDelivered: r,
  onMarkNotDelivered: n,
  onClear: i
}) {
  return /* @__PURE__ */ te.createElement(fa, { p: "xs", withBorder: !0, bg: "var(--mantine-primary-color-light)" }, /* @__PURE__ */ te.createElement(un, { justify: "space-between", wrap: "wrap", gap: "xs" }, /* @__PURE__ */ te.createElement(ma, { size: "sm", fw: 600 }, e, " line", e === 1 ? "" : "s", " selected"), /* @__PURE__ */ te.createElement(un, { gap: "xs" }, /* @__PURE__ */ te.createElement(
    Yt,
    {
      size: "xs",
      color: "green",
      leftSection: /* @__PURE__ */ te.createElement(bi, { size: 14 }),
      loading: t,
      onClick: r
    },
    "Mark Delivered"
  ), /* @__PURE__ */ te.createElement(
    Yt,
    {
      size: "xs",
      variant: "default",
      leftSection: /* @__PURE__ */ te.createElement(ha, { size: 14 }),
      disabled: t,
      onClick: n
    },
    "Mark Not Delivered"
  ), /* @__PURE__ */ te.createElement(
    Yt,
    {
      size: "xs",
      variant: "subtle",
      color: "gray",
      leftSection: /* @__PURE__ */ te.createElement(Dt, { size: 14 }),
      disabled: t,
      onClick: i
    },
    "Clear Selection"
  ))));
}
function va(e) {
  var t, r, n, i, s, a, o;
  return [
    e.order.reference,
    e.order.supplier_reference,
    (t = e.supplier) == null ? void 0 : t.name,
    (r = e.part) == null ? void 0 : r.IPN,
    (n = e.part) == null ? void 0 : n.name,
    (i = e.part) == null ? void 0 : i.description,
    (s = e.supplier_part) == null ? void 0 : s.SKU,
    (a = e.supplier_part) == null ? void 0 : a.MPN,
    (o = e.destination) == null ? void 0 : o.pathstring,
    e.reference,
    e.delivery.note
  ].filter(Boolean).join(" ").toLowerCase();
}
function ga(e, t) {
  const r = t.search.toLowerCase().split(/\s+/).filter(Boolean);
  return e.filter((n) => {
    var i;
    if (t.delivered === "delivered" && !n.delivery.delivered || t.delivered === "awaiting" && (n.delivery.delivered || n.fully_received) || t.supplier && String((i = n.supplier) == null ? void 0 : i.pk) !== t.supplier || t.overdueOnly && !n.overdue)
      return !1;
    if (r.length > 0) {
      const s = va(n);
      return r.every((a) => s.includes(a));
    }
    return !0;
  });
}
function dn(e, t) {
  var r, n, i, s, a;
  switch (t) {
    case "line":
      return Number(e.line) || e.line || null;
    case "order":
      return e.order.reference;
    case "supplier":
      return ((r = e.supplier) == null ? void 0 : r.name) ?? null;
    case "part":
      return ((n = e.part) == null ? void 0 : n.IPN) || ((i = e.part) == null ? void 0 : i.name) || null;
    case "sku":
      return ((s = e.supplier_part) == null ? void 0 : s.SKU) ?? null;
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
const ar = new Intl.Collator(void 0, {
  numeric: !0,
  sensitivity: "base"
});
function wa(e, t) {
  return typeof e == "number" && typeof t == "number" ? e - t : ar.compare(String(e), String(t));
}
function ya(e, t) {
  const r = t.direction === "asc" ? 1 : -1;
  return [...e].sort((n, i) => {
    const s = dn(n, t.column), a = dn(i, t.column), o = s === null || s === "";
    return o !== (a === null || a === "") ? o ? 1 : -1 : (o ? 0 : wa(s, a) * r) || ar.compare(n.order.reference, i.order.reference) || ar.compare(n.line, i.line) || n.pk - i.pk;
  });
}
function Si(e) {
  if (!e) return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  if (t)
    return new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
  const r = new Date(e);
  return isNaN(r.getTime()) ? null : r;
}
function $e(e) {
  const t = Si(e);
  return t ? t.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : "-";
}
function ba(e) {
  const t = Si(e);
  return t ? t.toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }) : "-";
}
function Jt(e) {
  return e.toLocaleString(void 0, { maximumFractionDigits: 5 });
}
const Sa = {
  primary: "blue",
  secondary: "gray",
  success: "green",
  danger: "red",
  warning: "yellow",
  info: "cyan",
  dark: "dark"
};
function Ir(e) {
  return Sa[e] ?? "gray";
}
function ka(e) {
  if (e == null) return "";
  const t = String(e);
  return /[",\n\r]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
}
function Ca(e, t) {
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
      var h, u, d, _, p, g, R, m;
      return [
        l.order.reference,
        l.order.status_label,
        (h = l.supplier) == null ? void 0 : h.name,
        l.order.supplier_reference,
        l.line,
        (u = l.part) == null ? void 0 : u.IPN,
        (d = l.part) == null ? void 0 : d.name,
        (_ = l.part) == null ? void 0 : _.description,
        (p = l.supplier_part) == null ? void 0 : p.SKU,
        (g = l.supplier_part) == null ? void 0 : g.MPN,
        l.quantity,
        l.received,
        l.remaining,
        l.target_date,
        l.overdue ? "Yes" : "No",
        (R = l.destination) == null ? void 0 : R.pathstring,
        l.delivery.delivered ? "Yes" : "No",
        l.delivery.delivered_date,
        (m = l.delivery.delivered_by) == null ? void 0 : m.username,
        l.delivery.note
      ].map(ka).join(",");
    }
  ), i = "\uFEFF" + [r.join(","), ...n].join(`\r
`), s = new Blob([i], { type: "text/csv;charset=utf-8" }), a = URL.createObjectURL(s), o = document.createElement("a");
  o.href = a, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(a);
}
const G = window.React, hn = window.React.useCallback, it = window.React.useState, Ma = window.MantineCore.ActionIcon, pn = window.MantineCore.Button, Ea = window.MantineCore.Group, Kt = window.MantineCore.Popover, Ra = window.MantineCore.Stack, Ia = window.MantineCore.Switch, Ta = window.MantineCore.Text, $a = window.MantineCore.Textarea, xa = window.MantineCore.TextInput, La = window.MantineCore.Tooltip, Da = 250;
function Pa({
  row: e,
  today: t,
  onUpdate: r
}) {
  var k, v;
  const [n, i] = it(!1), [s, a] = it(!0), [o, l] = it(t), [h, u] = it(""), [d, _] = it(!1), p = ((k = e.part) == null ? void 0 : k.IPN) || ((v = e.part) == null ? void 0 : v.name) || `Line ${e.line || e.pk}`, g = hn(() => {
    a(!0), l(e.delivery.delivered_date ?? t), u(e.delivery.note ?? ""), i(!0);
  }, [e, t]), R = s ? o ? o > t ? "Arrival date cannot be in the future" : null : "Arrival date is required" : null, m = hn(async () => {
    _(!0);
    const T = await r(
      {
        lines: [e.pk],
        delivered: s,
        delivered_date: s ? o : void 0,
        note: h.trim()
      },
      s ? `${e.order.reference} - ${p} marked as delivered` : `${e.order.reference} - ${p} updated`
    );
    _(!1), T && i(!1);
  }, [r, e, s, o, h, p]);
  return /* @__PURE__ */ G.createElement(
    Kt,
    {
      opened: n,
      onChange: i,
      position: "bottom-end",
      withArrow: !0,
      shadow: "md",
      trapFocus: !0
    },
    /* @__PURE__ */ G.createElement(Kt.Target, null, /* @__PURE__ */ G.createElement(La, { label: "Edit arrival date / note" }, /* @__PURE__ */ G.createElement(
      Ma,
      {
        variant: "subtle",
        size: "sm",
        color: "gray",
        onClick: () => n ? i(!1) : g()
      },
      /* @__PURE__ */ G.createElement(ia, { size: 14 })
    ))),
    /* @__PURE__ */ G.createElement(Kt.Dropdown, null, /* @__PURE__ */ G.createElement(Ra, { gap: "xs", style: { minWidth: 260 } }, /* @__PURE__ */ G.createElement(Ta, { size: "sm", fw: 600 }, e.order.reference, " — ", p), /* @__PURE__ */ G.createElement(
      Ia,
      {
        label: "Delivered to plant",
        color: "green",
        checked: s,
        onChange: (T) => a(T.currentTarget.checked)
      }
    ), /* @__PURE__ */ G.createElement(
      xa,
      {
        type: "date",
        label: "Arrival date",
        value: s ? o : "",
        max: t,
        disabled: !s,
        error: R,
        onChange: (T) => l(T.currentTarget.value)
      }
    ), /* @__PURE__ */ G.createElement(
      $a,
      {
        label: "Note",
        placeholder: "e.g. packing slip number, dock / bay",
        value: h,
        maxLength: Da,
        autosize: !0,
        minRows: 2,
        onChange: (T) => u(T.currentTarget.value)
      }
    ), /* @__PURE__ */ G.createElement(Ea, { justify: "flex-end", gap: "xs" }, /* @__PURE__ */ G.createElement(
      pn,
      {
        variant: "default",
        size: "xs",
        onClick: () => i(!1),
        disabled: d
      },
      "Cancel"
    ), /* @__PURE__ */ G.createElement(
      pn,
      {
        size: "xs",
        onClick: m,
        loading: d,
        disabled: !!R
      },
      "Save"
    ))))
  );
}
const Z = window.React, Na = window.MantineCore.Box, Oa = window.MantineCore.Group, Fa = window.MantineCore.Loader, za = window.MantineCore.Stack, Ua = window.MantineCore.Switch, fn = window.MantineCore.Text, mn = window.MantineCore.Tooltip;
function Ba({
  row: e,
  today: t,
  canEdit: r,
  busy: n,
  onUpdate: i
}) {
  const s = e.delivery, a = r && e.order.editable, o = r ? e.order.editable ? null : `Delivery status cannot be changed for ${e.order.status_label} orders` : "You do not have permission to change delivery status", l = s.delivered ? `Marked delivered${s.delivered_by ? ` by ${s.delivered_by.username}` : ""} on ${ba(s.delivered_at)}` : null;
  return /* @__PURE__ */ Z.createElement(Oa, { gap: 8, wrap: "nowrap", align: "center" }, /* @__PURE__ */ Z.createElement(
    mn,
    {
      label: o ?? l,
      disabled: !o && !l,
      multiline: !0,
      maw: 260
    },
    /* @__PURE__ */ Z.createElement(Na, null, /* @__PURE__ */ Z.createElement(
      Ua,
      {
        "aria-label": "Delivered",
        color: "green",
        checked: s.delivered,
        disabled: !a || n,
        onChange: (h) => i({
          lines: [e.pk],
          delivered: h.currentTarget.checked
        })
      }
    ))
  ), n && /* @__PURE__ */ Z.createElement(Fa, { size: 14 }), s.delivered && /* @__PURE__ */ Z.createElement(za, { gap: 0 }, /* @__PURE__ */ Z.createElement(fn, { size: "xs" }, $e(s.delivered_date)), s.delivered_by && /* @__PURE__ */ Z.createElement(fn, { size: "xs", c: "dimmed" }, s.delivered_by.username)), s.note && /* @__PURE__ */ Z.createElement(mn, { label: s.note, multiline: !0, maw: 260 }, /* @__PURE__ */ Z.createElement(ra, { size: 16, color: "var(--mantine-color-dimmed)" })), a && /* @__PURE__ */ Z.createElement(Pa, { row: e, today: t, onUpdate: i }));
}
const _n = window.React.useCallback, vn = window.React.useEffect, wt = window.React.useRef, ja = window.React.useState;
function ki(e, t, r = { leading: !1 }) {
  const [n, i] = ja(e), s = wt(!1), a = wt(null), o = wt(!1), l = wt(e);
  l.current = e;
  const h = _n(() => {
    window.clearTimeout(a.current), a.current = null, o.current = !1;
  }, []), u = _n(() => {
    a.current && (h(), o.current = !1, i(l.current));
  }, []);
  return vn(() => {
    s.current && (!o.current && r.leading ? (o.current = !0, i(e), a.current = window.setTimeout(() => {
      o.current = !1;
    }, t)) : (h(), a.current = window.setTimeout(() => {
      o.current = !1, i(e);
    }, t)));
  }, [
    e,
    r.leading,
    t
  ]), vn(() => (s.current = !0, h), []), [
    n,
    h,
    {
      cancel: h,
      flush: u
    }
  ];
}
const Ga = window.React.useEffect, Wa = window.React.useEffectEvent;
function gn(e, t, r) {
  const n = Wa(t);
  Ga(() => (window.addEventListener(e, n, r), () => window.removeEventListener(e, n, r)), [e]);
}
const qt = window.React.useCallback, wn = window.React.useEffect, Qa = window.React.useState;
function Ha(e, t = "use-local-storage") {
  try {
    return JSON.stringify(e);
  } catch {
    throw new Error(`@mantine/hooks ${t}: Failed to serialize the value`);
  }
}
function Va(e) {
  try {
    return e && JSON.parse(e);
  } catch {
    return e;
  }
}
function Ya(e) {
  return {
    getItem: (i) => {
      try {
        return window[e].getItem(i);
      } catch {
        return console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked"), null;
      }
    },
    setItem: (i, s) => {
      try {
        window[e].setItem(i, s);
      } catch {
        console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked");
      }
    },
    removeItem: (i) => {
      try {
        window[e].removeItem(i);
      } catch {
        console.warn("use-local-storage: Failed to remove value from storage, localStorage is blocked");
      }
    }
  };
}
function Ja(e, t) {
  const r = "mantine-local-storage", { getItem: n, setItem: i, removeItem: s } = Ya(e);
  return function({ key: o, defaultValue: l, getInitialValueInEffect: h = !0, sync: u = !0, deserialize: d = Va, serialize: _ = (p) => Ha(p, t) }) {
    const p = qt((v) => {
      let T;
      try {
        T = typeof window > "u" || !(e in window) || window[e] === null || !!v;
      } catch {
        T = !0;
      }
      if (T) return l;
      const I = n(o);
      return I !== null ? d(I) : l;
    }, [o, l]), [g, R] = Qa(p(h)), m = qt((v) => {
      v instanceof Function ? R((T) => {
        const I = v(T);
        return i(o, _(I)), queueMicrotask(() => {
          window.dispatchEvent(new CustomEvent(r, { detail: {
            key: o,
            value: I
          } }));
        }), I;
      }) : (i(o, _(v)), window.dispatchEvent(new CustomEvent(r, { detail: {
        key: o,
        value: v
      } })), R(v));
    }, [o]), k = qt(() => {
      s(o), R(l), window.dispatchEvent(new CustomEvent(r, { detail: {
        key: o,
        value: l
      } }));
    }, [o, l]);
    return gn("storage", (v) => {
      u && v.storageArea === window[e] && v.key === o && R(d(v.newValue ?? void 0));
    }), gn(r, (v) => {
      u && v.detail.key === o && R(v.detail.value);
    }), wn(() => {
      l !== void 0 && g === void 0 && m(l);
    }, [
      l,
      g,
      m
    ]), wn(() => {
      const v = p();
      v !== void 0 && m(v);
    }, [o]), [
      g === void 0 ? l : g,
      m,
      k
    ];
  };
}
function Be(e) {
  return Ja("localStorage", "use-local-storage")(e);
}
var Pt = class {
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
}, Me, pe, Ge, Hn, Ka = (Hn = class extends Pt {
  constructor() {
    super();
    M(this, Me);
    M(this, pe);
    M(this, Ge);
    y(this, Ge, (t) => {
      if (typeof window < "u" && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    c(this, pe) || this.setEventListener(c(this, Ge));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = c(this, pe)) == null || t.call(this), y(this, pe, void 0));
  }
  setEventListener(t) {
    var r;
    y(this, Ge, t), (r = c(this, pe)) == null || r.call(this), y(this, pe, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    c(this, Me) !== t && (y(this, Me, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof c(this, Me) == "boolean" ? c(this, Me) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Me = new WeakMap(), pe = new WeakMap(), Ge = new WeakMap(), Hn), qa = new Ka(), Xa = {
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
}, fe, yr, Vn, Za = (Vn = class {
  constructor() {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support the default provider's concrete timer ID, which is
    // infeasible across environments.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    M(this, fe, Xa);
    M(this, yr, !1);
  }
  setTimeoutProvider(e) {
    y(this, fe, e);
  }
  setTimeout(e, t) {
    return c(this, fe).setTimeout(e, t);
  }
  clearTimeout(e) {
    c(this, fe).clearTimeout(e);
  }
  setInterval(e, t) {
    return c(this, fe).setInterval(e, t);
  }
  clearInterval(e) {
    c(this, fe).clearInterval(e);
  }
}, fe = new WeakMap(), yr = new WeakMap(), Vn), yt = new Za();
function Aa(e) {
  setTimeout(e, 0);
}
var ec = typeof window > "u" || "Deno" in globalThis;
function Et() {
}
function yn(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function tc(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function X(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bn(e) {
  return JSON.stringify(
    e,
    (t, r) => cr(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r
  );
}
var rc = Object.prototype.hasOwnProperty;
function Ci(e, t, r = 0) {
  if (e === t)
    return e;
  if (r > 500) return t;
  const n = Sn(e) && Sn(t);
  if (!n && !(cr(e) && cr(t))) return t;
  const s = (n ? e : Object.keys(e)).length, a = n ? t : Object.keys(t), o = a.length, l = n ? new Array(o) : {};
  let h = 0;
  for (let u = 0; u < o; u++) {
    const d = n ? u : a[u], _ = e[d], p = t[d];
    if (_ === p) {
      l[d] = _, (n ? u < s : rc.call(e, d)) && h++;
      continue;
    }
    if (_ === null || p === null || typeof _ != "object" || typeof p != "object") {
      l[d] = p;
      continue;
    }
    const g = Ci(_, p, r + 1);
    l[d] = g, g === _ && h++;
  }
  return s === o && h === s ? e : l;
}
function Rt(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Sn(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function cr(e) {
  if (!kn(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!kn(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function kn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Cn(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? Ci(e, t) : t;
}
function Tr(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var lr = /* @__PURE__ */ (() => {
  let e = () => ec;
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
function Mn() {
  let e, t;
  const r = new Promise((i, s) => {
    e = i, t = s;
  });
  r.status = "pending", r.catch(() => {
  });
  function n(i) {
    Object.assign(r, i), delete r.resolve, delete r.reject;
  }
  return r.resolve = (i) => {
    n({
      status: "fulfilled",
      value: i
    }), e(i);
  }, r.reject = (i) => {
    n({
      status: "rejected",
      reason: i
    }), t(i);
  }, r;
}
var nc = Aa;
function ic() {
  let e = [], t = 0, r = (o) => {
    o();
  }, n = (o) => {
    o();
  }, i = nc;
  const s = (o) => {
    t ? e.push(o) : i(() => {
      r(o);
    });
  }, a = () => {
    const o = e;
    e = [], o.length && i(() => {
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
      s(() => {
        o(...l);
      });
    },
    schedule: s,
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
      i = o;
    }
  };
}
var Nt = ic(), We, me, Qe, Yn, sc = (Yn = class extends Pt {
  constructor() {
    super();
    M(this, We, !0);
    M(this, me);
    M(this, Qe);
    y(this, Qe, (t) => {
      if (typeof window < "u" && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    c(this, me) || this.setEventListener(c(this, Qe));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = c(this, me)) == null || t.call(this), y(this, me, void 0));
  }
  setEventListener(t) {
    var r;
    y(this, Qe, t), (r = c(this, me)) == null || r.call(this), y(this, me, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    c(this, We) !== t && (y(this, We, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return c(this, We);
  }
}, We = new WeakMap(), me = new WeakMap(), Qe = new WeakMap(), Yn), oc = new sc();
function ac(e) {
  return (e ?? "online") === "online" ? oc.isOnline() : !0;
}
function cc(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ac(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
var W, S, pt, j, Ee, He, se, _e, ft, Ve, Ye, Re, Ie, ve, Je, E, ct, ur, dr, hr, pr, fr, mr, _r, Mi, Jn, lc = (Jn = class extends Pt {
  constructor(t, r) {
    super();
    M(this, E);
    M(this, W);
    M(this, S);
    M(this, pt);
    M(this, j);
    M(this, Ee);
    M(this, He);
    M(this, se);
    M(this, _e);
    M(this, ft);
    M(this, Ve);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    M(this, Ye);
    M(this, Re);
    M(this, Ie);
    M(this, ve);
    M(this, Je, /* @__PURE__ */ new Set());
    this.options = r, y(this, W, t), y(this, _e, null), y(this, se, Mn()), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (c(this, S).addObserver(this), En(c(this, S), this.options) ? x(this, E, ct).call(this) : this.updateResult(), x(this, E, pr).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return vr(
      c(this, S),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return vr(
      c(this, S),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), x(this, E, fr).call(this), x(this, E, mr).call(this), c(this, S).removeObserver(this);
  }
  setOptions(t) {
    const r = this.options, n = c(this, S);
    if (this.options = c(this, W).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof X(this.options.enabled, c(this, S)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    x(this, E, _r).call(this), c(this, S).setOptions(this.options), r._defaulted && !Rt(this.options, r) && c(this, W).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: c(this, S),
      observer: this
    });
    const i = this.hasListeners();
    i && Rn(
      c(this, S),
      n,
      this.options,
      r
    ) && x(this, E, ct).call(this), this.updateResult(), i && (c(this, S) !== n || X(this.options.enabled, c(this, S)) !== X(r.enabled, c(this, S)) || dt(this.options.staleTime, c(this, S)) !== dt(r.staleTime, c(this, S))) && x(this, E, ur).call(this);
    const s = x(this, E, dr).call(this);
    i && (c(this, S) !== n || X(this.options.enabled, c(this, S)) !== X(r.enabled, c(this, S)) || s !== c(this, ve)) && x(this, E, hr).call(this, s);
  }
  getOptimisticResult(t) {
    const r = c(this, W).getQueryCache().build(c(this, W), t), n = this.createResult(r, t);
    return dc(this, n) && (y(this, j, n), y(this, He, this.options), y(this, Ee, c(this, S).state)), n;
  }
  getCurrentResult() {
    return c(this, j);
  }
  trackResult(t, r) {
    return new Proxy(t, {
      get: (n, i) => (this.trackProp(i), r == null || r(i), i === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && c(this, se).status === "pending" && c(this, se).reject(
        new Error(
          "experimental_prefetchInRender feature flag is not enabled"
        )
      )), Reflect.get(n, i))
    });
  }
  trackProp(t) {
    c(this, Je).add(t);
  }
  getCurrentQuery() {
    return c(this, S);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = c(this, W).defaultQueryOptions(t), n = c(this, W).getQueryCache().build(c(this, W), r);
    return n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return x(this, E, ct).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), c(this, j)));
  }
  createResult(t, r) {
    var qe;
    const n = c(this, S), i = this.options, s = c(this, j), a = c(this, Ee), o = c(this, He), h = t !== n ? t.state : c(this, pt), { state: u } = t;
    let d = { ...u }, _ = !1, p;
    if (r._optimisticResults) {
      const B = this.hasListeners(), ue = !B && En(t, r), N = B && Rn(t, n, r, i);
      (ue || N) && (d = {
        ...d,
        ...cc(u.data, t.options)
      }), r._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: g, errorUpdatedAt: R, status: m } = d;
    p = d.data;
    let k = !1;
    if (r.placeholderData !== void 0 && p === void 0 && m === "pending") {
      let B;
      s != null && s.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData) ? (B = s.data, k = !0) : B = typeof r.placeholderData == "function" ? r.placeholderData(
        (qe = c(this, Ye)) == null ? void 0 : qe.state.data,
        c(this, Ye)
      ) : r.placeholderData, B !== void 0 && (m = "success", p = Cn(
        s == null ? void 0 : s.data,
        B,
        r
      ), _ = !0);
    }
    if (r.select && p !== void 0 && !k)
      if (s && p === (a == null ? void 0 : a.data) && r.select === c(this, ft))
        p = c(this, Ve);
      else
        try {
          y(this, ft, r.select), p = r.select(p), p = Cn(s == null ? void 0 : s.data, p, r), y(this, Ve, p), y(this, _e, null);
        } catch (B) {
          y(this, _e, B);
        }
    c(this, _e) && (g = c(this, _e), p = c(this, Ve), R = Date.now(), m = "error");
    const v = d.fetchStatus === "fetching", T = m === "pending", I = m === "error", O = T && v, le = p !== void 0, Y = {
      status: m,
      fetchStatus: d.fetchStatus,
      isPending: T,
      isSuccess: m === "success",
      isError: I,
      isInitialLoading: O,
      isLoading: O,
      data: p,
      dataUpdatedAt: d.dataUpdatedAt,
      error: g,
      errorUpdatedAt: R,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: t.isFetched(),
      isFetchedAfterMount: d.dataUpdateCount > h.dataUpdateCount || d.errorUpdateCount > h.errorUpdateCount,
      isFetching: v,
      isRefetching: v && !T,
      isLoadingError: I && !le,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: _,
      isRefetchError: I && le,
      isStale: $r(t, r),
      refetch: this.refetch,
      promise: c(this, se),
      isEnabled: X(r.enabled, t) !== !1
    };
    if (this.options.experimental_prefetchInRender) {
      const B = Y.data !== void 0, ue = Y.status === "error" && !B, N = (De) => {
        ue ? De.reject(Y.error) : B && De.resolve(Y.data);
      }, mt = () => {
        const De = y(this, se, Y.promise = Mn());
        N(De);
      }, Le = c(this, se);
      switch (Le.status) {
        case "pending":
          t.queryHash === n.queryHash && N(Le);
          break;
        case "fulfilled":
          (ue || Y.data !== Le.value) && mt();
          break;
        case "rejected":
          (!ue || Y.error !== Le.reason) && mt();
          break;
      }
    }
    return Y;
  }
  updateResult() {
    const t = c(this, j), r = this.createResult(c(this, S), this.options);
    if (y(this, Ee, c(this, S).state), y(this, He, this.options), c(this, Ee).data !== void 0 && y(this, Ye, c(this, S)), Rt(r, t))
      return;
    y(this, j, r);
    const n = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: i } = this.options, s = typeof i == "function" ? i() : i;
      if (s === "all" || !s && !c(this, Je).size)
        return !0;
      const a = new Set(
        s ?? c(this, Je)
      );
      return this.options.throwOnError && a.add("error"), Object.keys(c(this, j)).some((o) => {
        const l = o;
        return c(this, j)[l] !== t[l] && a.has(l);
      });
    };
    x(this, E, Mi).call(this, { listeners: n() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && x(this, E, pr).call(this);
  }
}, W = new WeakMap(), S = new WeakMap(), pt = new WeakMap(), j = new WeakMap(), Ee = new WeakMap(), He = new WeakMap(), se = new WeakMap(), _e = new WeakMap(), ft = new WeakMap(), Ve = new WeakMap(), Ye = new WeakMap(), Re = new WeakMap(), Ie = new WeakMap(), ve = new WeakMap(), Je = new WeakMap(), E = new WeakSet(), ct = function(t) {
  x(this, E, _r).call(this);
  let r = c(this, S).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(Et)), r;
}, ur = function() {
  x(this, E, fr).call(this);
  const t = dt(
    this.options.staleTime,
    c(this, S)
  );
  if (lr.isServer() || c(this, j).isStale || !yn(t))
    return;
  const n = tc(c(this, j).dataUpdatedAt, t) + 1;
  y(this, Re, yt.setTimeout(() => {
    c(this, j).isStale || this.updateResult();
  }, n));
}, dr = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(c(this, S)) : this.options.refetchInterval) ?? !1;
}, hr = function(t) {
  x(this, E, mr).call(this), y(this, ve, t), !(lr.isServer() || X(this.options.enabled, c(this, S)) === !1 || !yn(c(this, ve)) || c(this, ve) === 0) && y(this, Ie, yt.setInterval(() => {
    (this.options.refetchIntervalInBackground || qa.isFocused()) && x(this, E, ct).call(this);
  }, c(this, ve)));
}, pr = function() {
  x(this, E, ur).call(this), x(this, E, hr).call(this, x(this, E, dr).call(this));
}, fr = function() {
  c(this, Re) !== void 0 && (yt.clearTimeout(c(this, Re)), y(this, Re, void 0));
}, mr = function() {
  c(this, Ie) !== void 0 && (yt.clearInterval(c(this, Ie)), y(this, Ie, void 0));
}, _r = function() {
  const t = c(this, W).getQueryCache().build(c(this, W), this.options);
  if (t === c(this, S))
    return;
  const r = c(this, S);
  y(this, S, t), y(this, pt, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Mi = function(t) {
  Nt.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(c(this, j));
    }), c(this, W).getQueryCache().notify({
      query: c(this, S),
      type: "observerResultsUpdated"
    });
  });
}, Jn);
function uc(e, t) {
  return X(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && X(t.retryOnMount, e) === !1);
}
function En(e, t) {
  return uc(e, t) || e.state.data !== void 0 && vr(e, t, t.refetchOnMount);
}
function vr(e, t, r) {
  if (X(t.enabled, e) !== !1 && dt(t.staleTime, e) !== "static") {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && $r(e, t);
  }
  return !1;
}
function Rn(e, t, r, n) {
  return (e !== t || X(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && $r(e, r);
}
function $r(e, t) {
  return X(t.enabled, e) !== !1 && e.isStaleByTime(dt(t.staleTime, e));
}
function dc(e, t) {
  return !Rt(e.getCurrentResult(), t);
}
function hc() {
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
var oe, ge, Q, ae, ce, Mt, gr, Kn, pc = (Kn = class extends Pt {
  constructor(t, r) {
    super();
    M(this, ce);
    M(this, oe);
    M(this, ge);
    M(this, Q);
    M(this, ae);
    y(this, oe, t), this.setOptions(r), this.bindMethods(), x(this, ce, Mt).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var n;
    const r = this.options;
    this.options = c(this, oe).defaultMutationOptions(t), Rt(this.options, r) || c(this, oe).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: c(this, Q),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && bn(r.mutationKey) !== bn(this.options.mutationKey) ? this.reset() : ((n = c(this, Q)) == null ? void 0 : n.state.status) === "pending" && c(this, Q).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = c(this, Q)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    x(this, ce, Mt).call(this), x(this, ce, gr).call(this, t);
  }
  getCurrentResult() {
    return c(this, ge);
  }
  reset() {
    var t;
    (t = c(this, Q)) == null || t.removeObserver(this), y(this, Q, void 0), x(this, ce, Mt).call(this), x(this, ce, gr).call(this);
  }
  mutate(t, r) {
    var n;
    return y(this, ae, r), (n = c(this, Q)) == null || n.removeObserver(this), y(this, Q, c(this, oe).getMutationCache().build(c(this, oe), this.options)), c(this, Q).addObserver(this), c(this, Q).execute(t);
  }
}, oe = new WeakMap(), ge = new WeakMap(), Q = new WeakMap(), ae = new WeakMap(), ce = new WeakSet(), Mt = function() {
  var r;
  const t = ((r = c(this, Q)) == null ? void 0 : r.state) ?? hc();
  y(this, ge, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, gr = function(t) {
  Nt.batch(() => {
    var r, n, i, s, a, o, l, h;
    if (c(this, ae) && this.hasListeners()) {
      const u = c(this, ge).variables, d = c(this, ge).context, _ = {
        client: c(this, oe),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      if ((t == null ? void 0 : t.type) === "success") {
        try {
          (n = (r = c(this, ae)).onSuccess) == null || n.call(
            r,
            t.data,
            u,
            d,
            _
          );
        } catch (p) {
          Promise.reject(p);
        }
        try {
          (s = (i = c(this, ae)).onSettled) == null || s.call(
            i,
            t.data,
            null,
            u,
            d,
            _
          );
        } catch (p) {
          Promise.reject(p);
        }
      } else if ((t == null ? void 0 : t.type) === "error") {
        try {
          (o = (a = c(this, ae)).onError) == null || o.call(
            a,
            t.error,
            u,
            d,
            _
          );
        } catch (p) {
          Promise.reject(p);
        }
        try {
          (h = (l = c(this, ae)).onSettled) == null || h.call(
            l,
            void 0,
            t.error,
            u,
            d,
            _
          );
        } catch (p) {
          Promise.reject(p);
        }
      }
    }
    this.listeners.forEach((u) => {
      u(c(this, ge));
    });
  });
}, Kn), Xt = { exports: {} }, st = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function fc() {
  if (In) return st;
  In = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var o in i)
        o !== "key" && (s[o] = i[o]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return st.Fragment = t, st.jsx = r, st.jsxs = r, st;
}
var Tn;
function mc() {
  return Tn || (Tn = 1, Xt.exports = fc()), Xt.exports;
}
mc();
const Ei = window.React;
var _c = Ei.createContext(
  void 0
), Ri = (e) => {
  const t = Ei.useContext(_c);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
};
const Ii = window.React;
var Ti = Ii.createContext(!1), vc = () => Ii.useContext(Ti);
Ti.Provider;
const $i = window.React;
function gc() {
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
var wc = $i.createContext(gc()), yc = () => $i.useContext(wc);
const bc = window.React;
var Sc = (e, t, r) => {
  const n = r != null && r.state.error && typeof e.throwOnError == "function" ? Tr(e.throwOnError, [r.state.error, r]) : e.throwOnError;
  (e.suspense || e.experimental_prefetchInRender || n) && (t.isReset() || (e.retryOnMount = !1));
}, kc = (e) => {
  bc.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Cc = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n,
  suspense: i
}) => e.isError && !t.isReset() && !e.isFetching && n && (i && e.data === void 0 || Tr(r, [e.error, n])), Mc = (e) => {
  if (e.suspense) {
    const r = (i) => i === "static" ? i : Math.max(i ?? 1e3, 1e3), n = e.staleTime;
    e.staleTime = typeof n == "function" ? (...i) => r(n(...i)) : r(n), typeof e.gcTime == "number" && (e.gcTime = Math.max(
      e.gcTime,
      1e3
    ));
  }
}, Ec = (e, t) => e.isLoading && e.isFetching && !t, Rc = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, $n = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
const bt = window.React;
function Ic(e, t, r) {
  var p, g, R, m;
  const n = vc(), i = yc(), s = Ri(r), a = s.defaultQueryOptions(e);
  (g = (p = s.getDefaultOptions().queries) == null ? void 0 : p._experimental_beforeQuery) == null || g.call(
    p,
    a
  );
  const o = s.getQueryCache().get(a.queryHash), l = e.subscribed !== !1;
  a._optimisticResults = n ? "isRestoring" : l ? "optimistic" : void 0, Mc(a), Sc(a, i, o), kc(i);
  const h = !s.getQueryCache().get(a.queryHash), [u] = bt.useState(
    () => new t(
      s,
      a
    )
  ), d = u.getOptimisticResult(a), _ = !n && l;
  if (bt.useSyncExternalStore(
    bt.useCallback(
      (k) => {
        const v = _ ? u.subscribe(Nt.batchCalls(k)) : Et;
        return u.updateResult(), v;
      },
      [u, _]
    ),
    () => u.getCurrentResult(),
    () => u.getCurrentResult()
  ), bt.useEffect(() => {
    u.setOptions(a);
  }, [a, u]), Rc(a, d))
    throw $n(a, u, i);
  if (Cc({
    result: d,
    errorResetBoundary: i,
    throwOnError: a.throwOnError,
    query: o,
    suspense: a.suspense
  }))
    throw d.error;
  if ((m = (R = s.getDefaultOptions().queries) == null ? void 0 : R._experimental_afterQuery) == null || m.call(
    R,
    a,
    d
  ), a.experimental_prefetchInRender && !lr.isServer() && Ec(d, n)) {
    const k = h ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      $n(a, u, i)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      o == null ? void 0 : o.promise
    );
    k == null || k.catch(Et).finally(() => {
      u.updateResult();
    });
  }
  return a.notifyOnChangeProps ? d : u.trackResult(d);
}
function xi(e, t) {
  return Ic(e, lc, t);
}
const ot = window.React;
function Tc(e, t) {
  const r = Ri(t), [n] = ot.useState(
    () => new pc(
      r,
      e
    )
  );
  ot.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const i = ot.useSyncExternalStore(
    ot.useCallback(
      (a) => n.subscribe(Nt.batchCalls(a)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), s = ot.useCallback(
    (a, o) => {
      n.mutate(a, o).catch(Et);
    },
    [n]
  );
  if (i.error && Tr(n.options.throwOnError, [i.error]))
    throw i.error;
  return { ...i, mutate: s, mutateAsync: i.mutate };
}
const xr = "/plugin/podelivery", Lr = ["po-delivery"];
function $c(e, t, r) {
  return xi(
    {
      queryKey: [
        ...Lr,
        "lines",
        { orderId: t ?? null, includeReceived: r }
      ],
      queryFn: async () => {
        const n = {};
        return t && (n.order = t, r && (n.include_received = "true")), (await e.api.get(`${xr}/lines/`, {
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
function Li(e, t) {
  return xi(
    {
      queryKey: [...Lr, "orders", t],
      queryFn: async () => {
        const r = {};
        return t.order ? r.order = t.order : (r.status = t.status ?? "open", t.search && (r.search = t.search)), (await e.api.get(`${xr}/orders/`, {
          params: r
        })).data;
      },
      // Keep showing the list while a new search loads (not for a single order)
      placeholderData: t.order ? void 0 : (r) => r,
      refetchInterval: 6e4,
      refetchOnWindowFocus: !0
    },
    e.queryClient
  );
}
function xc(e) {
  return Tc(
    {
      mutationFn: async (t) => (await e.api.post(
        `${xr}/lines/set-delivered/`,
        t
      )).data,
      onSuccess: () => {
        window.dispatchEvent(new CustomEvent("po-delivery:changed"));
      },
      onSettled: () => e.queryClient.invalidateQueries({ queryKey: Lr })
    },
    e.queryClient
  );
}
function It(e) {
  var r;
  const t = e == null ? void 0 : e.response;
  return (r = t == null ? void 0 : t.data) != null && r.error ? t.data.error : e instanceof Error ? e.message : "Unknown error";
}
const Zt = window.React, xn = window.MantineCore.Anchor, Lc = window.MantineCore.Text;
function St({
  context: e,
  path: t,
  children: r,
  fw: n,
  enabled: i = !0,
  onOpen: s
}) {
  return s ? /* @__PURE__ */ Zt.createElement(xn, { component: "button", type: "button", size: "sm", fw: n, onClick: s }, r) : i ? /* @__PURE__ */ Zt.createElement(
    xn,
    {
      href: `/${qn()}${t}`,
      size: "sm",
      fw: n,
      onClick: (a) => Yi(t, e.navigate, a)
    },
    r
  ) : /* @__PURE__ */ Zt.createElement(Lc, { size: "sm", fw: n }, r);
}
const w = window.React, Dc = window.MantineCore.Badge, Pc = window.MantineCore.Checkbox, Ln = window.MantineCore.Group, Nc = window.MantineCore.Progress, at = window.MantineCore.Stack, A = window.MantineCore.Table, J = window.MantineCore.Text, At = window.MantineCore.Tooltip;
function Oc(e) {
  if (e.delivery.delivered && !e.fully_received)
    return "var(--mantine-color-green-light)";
  if (e.overdue)
    return "var(--mantine-color-red-light)";
}
function Fc({
  row: e,
  mode: t,
  context: r,
  today: n,
  canEdit: i,
  links: s,
  selected: a,
  busy: o,
  onSelect: l,
  onUpdate: h,
  onOpenOrder: u
}) {
  var _, p;
  const d = e.quantity > 0 ? Math.min(100, e.received / e.quantity * 100) : 0;
  return /* @__PURE__ */ w.createElement(A.Tr, { style: { backgroundColor: Oc(e) } }, i && /* @__PURE__ */ w.createElement(A.Td, null, /* @__PURE__ */ w.createElement(
    Pc,
    {
      "aria-label": "Select line",
      checked: a,
      disabled: !e.order.editable,
      onChange: (g) => l(e.pk, g.currentTarget.checked)
    }
  )), t === "order" && /* @__PURE__ */ w.createElement(A.Td, null, /* @__PURE__ */ w.createElement(J, { size: "sm" }, e.line || "-")), t === "index" && /* @__PURE__ */ w.createElement(A.Td, null, /* @__PURE__ */ w.createElement(at, { gap: 2 }, /* @__PURE__ */ w.createElement(
    St,
    {
      context: r,
      path: `/purchasing/purchase-order/${e.order.pk}/`,
      fw: 600,
      enabled: s.order,
      onOpen: u && (() => u(e.order.pk))
    },
    e.order.reference
  ), /* @__PURE__ */ w.createElement(Ln, { gap: 4 }, /* @__PURE__ */ w.createElement(
    Dc,
    {
      size: "xs",
      variant: "light",
      color: Ir(e.order.status_color)
    },
    e.order.status_label
  ), e.line && /* @__PURE__ */ w.createElement(J, { size: "xs", c: "dimmed" }, "Line ", e.line)))), t === "index" && /* @__PURE__ */ w.createElement(A.Td, null, /* @__PURE__ */ w.createElement(at, { gap: 0 }, e.supplier ? /* @__PURE__ */ w.createElement(
    St,
    {
      context: r,
      path: `/purchasing/supplier/${e.supplier.pk}/`,
      enabled: s.supplier
    },
    e.supplier.name
  ) : /* @__PURE__ */ w.createElement(J, { size: "sm" }, "-"), e.order.supplier_reference && /* @__PURE__ */ w.createElement(J, { size: "xs", c: "dimmed" }, e.order.supplier_reference))), /* @__PURE__ */ w.createElement(A.Td, null, e.part ? /* @__PURE__ */ w.createElement(at, { gap: 0 }, /* @__PURE__ */ w.createElement(
    St,
    {
      context: r,
      path: `/part/${e.part.pk}/`,
      fw: 600,
      enabled: s.part
    },
    e.part.IPN || e.part.name
  ), e.part.IPN && /* @__PURE__ */ w.createElement(J, { size: "xs" }, e.part.name), e.part.description && /* @__PURE__ */ w.createElement(At, { label: e.part.description, multiline: !0, maw: 350 }, /* @__PURE__ */ w.createElement(J, { size: "xs", c: "dimmed", lineClamp: 1 }, e.part.description))) : /* @__PURE__ */ w.createElement(J, { size: "sm", c: "dimmed" }, e.reference || "-")), /* @__PURE__ */ w.createElement(A.Td, null, e.supplier_part ? /* @__PURE__ */ w.createElement(at, { gap: 0 }, /* @__PURE__ */ w.createElement(
    St,
    {
      context: r,
      path: `/purchasing/supplier-part/${e.supplier_part.pk}/`,
      enabled: s.supplier_part
    },
    e.supplier_part.SKU
  ), e.supplier_part.MPN && /* @__PURE__ */ w.createElement(J, { size: "xs", c: "dimmed" }, e.supplier_part.MPN)) : /* @__PURE__ */ w.createElement(J, { size: "sm" }, "-")), /* @__PURE__ */ w.createElement(A.Td, null, /* @__PURE__ */ w.createElement(
    At,
    {
      label: `${Jt(e.remaining)} remaining to be received`
    },
    /* @__PURE__ */ w.createElement(at, { gap: 4 }, /* @__PURE__ */ w.createElement(J, { size: "sm", style: { whiteSpace: "nowrap" } }, Jt(e.received), " / ", Jt(e.quantity), (_ = e.part) != null && _.units ? ` ${e.part.units}` : ""), /* @__PURE__ */ w.createElement(
      Nc,
      {
        value: d,
        size: "sm",
        color: e.fully_received ? "green" : "blue"
      }
    ))
  )), /* @__PURE__ */ w.createElement(A.Td, null, /* @__PURE__ */ w.createElement(Ln, { gap: 4, wrap: "nowrap" }, e.overdue && /* @__PURE__ */ w.createElement(At, { label: "Delivery is overdue" }, /* @__PURE__ */ w.createElement(Rr, { size: 14, color: "var(--mantine-color-red-6)" })), /* @__PURE__ */ w.createElement(
    J,
    {
      size: "sm",
      c: e.overdue ? "red" : void 0,
      fw: e.overdue ? 600 : void 0,
      style: { whiteSpace: "nowrap" }
    },
    $e(e.target_date)
  )), e.target_date_source === "order" && /* @__PURE__ */ w.createElement(J, { size: "xs", c: "dimmed" }, "(order)")), /* @__PURE__ */ w.createElement(A.Td, null, /* @__PURE__ */ w.createElement(J, { size: "sm" }, ((p = e.destination) == null ? void 0 : p.pathstring) ?? "-")), /* @__PURE__ */ w.createElement(A.Td, null, /* @__PURE__ */ w.createElement(
    Ba,
    {
      row: e,
      today: n,
      canEdit: i,
      busy: o,
      onUpdate: h
    }
  )));
}
const H = window.React, zc = window.MantineCore.Checkbox, Uc = window.MantineCore.Group, Ce = window.MantineCore.Table, Bc = window.MantineCore.Text, jc = window.MantineCore.UnstyledButton;
function Gc({ label: e, column: t, sort: r, onSort: n }) {
  const s = r.column === t ? r.direction === "asc" ? Ho : Wo : la;
  return /* @__PURE__ */ H.createElement(Ce.Th, { style: { whiteSpace: "nowrap" } }, /* @__PURE__ */ H.createElement(jc, { onClick: () => n(t) }, /* @__PURE__ */ H.createElement(Uc, { gap: 4, wrap: "nowrap" }, /* @__PURE__ */ H.createElement(Bc, { size: "sm", fw: 600 }, e), /* @__PURE__ */ H.createElement(s, { size: 14 }))));
}
function Wc({
  rows: e,
  mode: t,
  context: r,
  today: n,
  canEdit: i,
  links: s,
  sort: a,
  onSort: o,
  selected: l,
  onSelect: h,
  onSelectAll: u,
  busy: d,
  onUpdate: _,
  onOpenOrder: p
}) {
  const g = e.filter((v) => v.order.editable), R = g.filter((v) => l.has(v.pk)).length, m = g.length > 0 && R === g.length, k = (v, T) => /* @__PURE__ */ H.createElement(Gc, { label: v, column: T, sort: a, onSort: o });
  return /* @__PURE__ */ H.createElement(
    Ce.ScrollContainer,
    {
      minWidth: t === "index" ? 1150 : 900,
      maxHeight: "65vh",
      type: "native"
    },
    /* @__PURE__ */ H.createElement(Ce, { stickyHeader: !0, highlightOnHover: !0, verticalSpacing: "xs" }, /* @__PURE__ */ H.createElement(Ce.Thead, null, /* @__PURE__ */ H.createElement(Ce.Tr, null, i && /* @__PURE__ */ H.createElement(Ce.Th, { style: { width: 40 } }, /* @__PURE__ */ H.createElement(
      zc,
      {
        "aria-label": "Select all lines",
        checked: m,
        indeterminate: R > 0 && !m,
        disabled: g.length === 0,
        onChange: (v) => u(v.currentTarget.checked)
      }
    )), t === "order" && k("Line", "line"), t === "index" && k("Purchase Order", "order"), t === "index" && k("Supplier", "supplier"), k("Part", "part"), k("Supplier Part", "sku"), k("Received", "quantity"), k("Target Date", "target"), k("Destination", "destination"), k("Delivered", "delivered"))), /* @__PURE__ */ H.createElement(Ce.Tbody, null, e.map((v) => /* @__PURE__ */ H.createElement(
      Fc,
      {
        key: v.pk,
        row: v,
        mode: t,
        context: r,
        today: n,
        canEdit: i,
        links: s,
        selected: l.has(v.pk),
        busy: d.has(v.pk),
        onSelect: h,
        onUpdate: _,
        onOpenOrder: p
      }
    ))))
  );
}
const Fe = window.React, Qc = window.MantineCore.Badge, Hc = window.MantineCore.Group;
function Vc({
  summary: e,
  delivered: t,
  overdueOnly: r,
  onFilter: n
}) {
  const i = [
    {
      key: "all",
      label: `${e.total} Lines`,
      color: "blue",
      icon: /* @__PURE__ */ Fe.createElement(Zo, { size: 12 }),
      active: t === "all" && !r,
      onClick: () => n("all", !1)
    },
    {
      key: "awaiting",
      label: `${e.awaiting_delivery} Awaiting Delivery`,
      color: "orange",
      icon: /* @__PURE__ */ Fe.createElement(Yo, { size: 12 }),
      active: t === "awaiting" && !r,
      onClick: () => n("awaiting", !1)
    },
    {
      key: "delivered",
      label: `${e.delivered} Delivered`,
      color: "green",
      icon: /* @__PURE__ */ Fe.createElement(bi, { size: 12 }),
      active: t === "delivered" && !r,
      onClick: () => n("delivered", !1)
    },
    {
      key: "overdue",
      label: `${e.overdue} Overdue`,
      color: "red",
      icon: /* @__PURE__ */ Fe.createElement(Rr, { size: 12 }),
      active: r,
      onClick: () => n("all", !0),
      hidden: e.overdue === 0
    }
  ];
  return /* @__PURE__ */ Fe.createElement(Hc, { gap: "xs" }, i.filter((s) => !s.hidden).map((s) => /* @__PURE__ */ Fe.createElement(
    Qc,
    {
      key: s.key,
      size: "lg",
      color: s.color,
      variant: s.active ? "filled" : "light",
      leftSection: s.icon,
      style: { cursor: "pointer" },
      onClick: s.onClick
    },
    s.label
  )));
}
const er = window.React, Yc = window.MantineCore.CloseButton, Jc = window.MantineCore.TextInput;
function Di({
  value: e,
  onChange: t,
  placeholder: r = "Search orders, parts, suppliers..."
}) {
  return /* @__PURE__ */ er.createElement(
    Jc,
    {
      value: e,
      placeholder: r,
      leftSection: /* @__PURE__ */ er.createElement(aa, { size: 16 }),
      rightSection: e.length > 0 ? /* @__PURE__ */ er.createElement(Yc, { size: "sm", onClick: () => t("") }) : null,
      onChange: (n) => t(n.target.value),
      style: { flex: 1, maxWidth: 400 }
    }
  );
}
const F = window.React, Dn = window.MantineCore.ActionIcon, Pn = window.MantineCore.Divider, Nn = window.MantineCore.Group, Kc = window.MantineCore.Paper, qc = window.MantineCore.SegmentedControl, Xc = window.MantineCore.Select, On = window.MantineCore.Switch, tr = window.MantineCore.Tooltip;
function Zc({
  mode: e,
  search: t,
  onSearch: r,
  delivered: n,
  onDelivered: i,
  supplier: s,
  supplierOptions: a,
  onSupplier: o,
  overdueOnly: l,
  onOverdueOnly: h,
  includeReceived: u,
  includeReceivedLocked: d,
  onIncludeReceived: _,
  refreshing: p,
  onRefresh: g,
  onExport: R
}) {
  return /* @__PURE__ */ F.createElement(Kc, { p: "sm", withBorder: !0 }, /* @__PURE__ */ F.createElement(Nn, { justify: "space-between", wrap: "wrap", gap: "sm" }, /* @__PURE__ */ F.createElement(Di, { value: t, onChange: r }), /* @__PURE__ */ F.createElement(Nn, { gap: "xs", wrap: "wrap" }, /* @__PURE__ */ F.createElement(
    qc,
    {
      size: "xs",
      value: n,
      onChange: (m) => i(m),
      data: [
        { label: "All", value: "all" },
        { label: "Awaiting Delivery", value: "awaiting" },
        { label: "Delivered", value: "delivered" }
      ]
    }
  ), e === "index" && /* @__PURE__ */ F.createElement(
    Xc,
    {
      size: "xs",
      placeholder: "All suppliers",
      data: a,
      value: s,
      onChange: o,
      searchable: !0,
      clearable: !0,
      w: 200
    }
  ), /* @__PURE__ */ F.createElement(Pn, { orientation: "vertical" }), /* @__PURE__ */ F.createElement(
    On,
    {
      size: "xs",
      color: "red",
      label: "Overdue Only",
      checked: l,
      onChange: (m) => h(m.currentTarget.checked)
    }
  ), e === "order" && /* @__PURE__ */ F.createElement(
    tr,
    {
      label: "Completed orders always show all lines",
      disabled: !d
    },
    /* @__PURE__ */ F.createElement(
      On,
      {
        size: "xs",
        label: "Show Received Lines",
        checked: u,
        disabled: d,
        onChange: (m) => _(m.currentTarget.checked)
      }
    )
  ), /* @__PURE__ */ F.createElement(Pn, { orientation: "vertical" }), /* @__PURE__ */ F.createElement(tr, { label: "Refresh" }, /* @__PURE__ */ F.createElement(Dn, { variant: "light", loading: p, onClick: g }, /* @__PURE__ */ F.createElement(yi, { size: 16 }))), /* @__PURE__ */ F.createElement(tr, { label: "Export to CSV" }, /* @__PURE__ */ F.createElement(Dn, { variant: "light", color: "green", onClick: R }, /* @__PURE__ */ F.createElement(Ko, { size: 16 }))))));
}
const D = window.React, ze = window.React.useCallback, rr = window.React.useMemo, kt = window.React.useState, Ct = window.MantineCore.Alert, Fn = window.MantineCore.Group, Ac = window.MantineCore.Loader, zn = window.MantineCore.Stack, Un = window.MantineCore.Text, el = window.MantineCore.Title, Bn = window.MantineNotifications.notifications, tl = {
  order: !0,
  supplier: !0,
  part: !0,
  supplier_part: !0
};
function Dr({
  context: e,
  mode: t,
  orderId: r,
  editable: n,
  onOpenOrder: i
}) {
  const s = e.context ?? {}, a = t ?? (s.mode === "order" ? "order" : "index"), o = a === "order" ? Number(r ?? s.order_id ?? e.id) : void 0, l = a === "index" || (n ?? s.editable) !== !1, h = `po-delivery-${a}`, [u, d] = Be({
    key: `${h}-delivered`,
    defaultValue: "all"
  }), [_, p] = Be({
    key: `${h}-overdue`,
    defaultValue: !1
  }), [g, R] = Be({
    key: `${h}-received`,
    defaultValue: !1
  }), [m, k] = Be({
    key: `${h}-sort`,
    defaultValue: {
      column: a === "order" ? "line" : "target",
      direction: "asc"
    }
  }), [v, T] = kt(""), [I] = ki(v, 300), [O, le] = kt(null), [xe, Y] = kt(/* @__PURE__ */ new Set()), [qe, B] = kt(/* @__PURE__ */ new Set()), ue = a === "order" && (!l || g), { data: N, isLoading: mt, isError: Le, error: De, isFetching: Oi, refetch: Fi } = $c(e, o, ue), { mutateAsync: Pr } = xc(e), Nr = !!(N != null && N.can_edit), zi = (N == null ? void 0 : N.links) ?? tl, Ot = (N == null ? void 0 : N.today) ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), de = (N == null ? void 0 : N.results) ?? [], Ui = rr(() => {
    const $ = /* @__PURE__ */ new Map();
    for (const L of de)
      L.supplier && $.set(String(L.supplier.pk), L.supplier.name);
    return [...$.entries()].map(([L, U]) => ({ value: L, label: U })).sort((L, U) => L.label.localeCompare(U.label));
  }, [de]), he = rr(
    () => ya(
      ga(de, {
        search: I,
        delivered: u,
        supplier: O,
        overdueOnly: _
      }),
      m
    ),
    [de, I, u, O, _, m]
  ), Xe = rr(
    () => he.filter(($) => xe.has($.pk) && $.order.editable),
    [he, xe]
  ), Bi = ze(
    ($) => k((L) => ({
      column: $,
      direction: L.column === $ && L.direction === "asc" ? "desc" : "asc"
    })),
    [k]
  ), ji = ze(($, L) => {
    Y((U) => {
      const K = new Set(U);
      return L ? K.add($) : K.delete($), K;
    });
  }, []), Gi = ze(
    ($) => {
      Y((L) => {
        const U = new Set(L);
        for (const K of he)
          K.order.editable && ($ ? U.add(K.pk) : U.delete(K.pk));
        return U;
      });
    },
    [he]
  ), Ft = ze(
    async ($, L) => {
      B((U) => /* @__PURE__ */ new Set([...U, ...$.lines]));
      try {
        return await Pr($), L && Bn.show({
          title: "Delivery updated",
          message: L,
          color: "green"
        }), !0;
      } catch (U) {
        return Bn.show({
          title: "Failed to update delivery",
          message: It(U),
          color: "red"
        }), !1;
      } finally {
        B((U) => {
          const K = new Set(U);
          return $.lines.forEach((Hi) => K.delete(Hi)), K;
        });
      }
    },
    [Pr]
  ), Or = ze(
    async ($) => {
      const L = Xe.map((K) => K.pk);
      await Ft(
        { lines: L, delivered: $ },
        `${L.length} line${L.length === 1 ? "" : "s"} marked as ${$ ? "delivered" : "not delivered"}`
      ) && Y(/* @__PURE__ */ new Set());
    },
    [Xe, Ft]
  ), Wi = ze(() => {
    const $ = a === "order" && de.length > 0 ? `${de[0].order.reference}-deliveries` : `pending-deliveries-${Ot}`;
    Ca(he, `${$}.csv`);
  }, [a, de, he, Ot]), Qi = a === "order" ? "Deliveries" : "Pending Deliveries";
  return mt ? /* @__PURE__ */ D.createElement(zn, { align: "center", justify: "center", p: "xl" }, /* @__PURE__ */ D.createElement(Ac, { size: "lg" }), /* @__PURE__ */ D.createElement(Un, { c: "dimmed" }, "Loading line items...")) : Le || !N ? /* @__PURE__ */ D.createElement(
    Ct,
    {
      icon: /* @__PURE__ */ D.createElement(Dt, { size: 16 }),
      title: "Error Loading Data",
      color: "red",
      variant: "light"
    },
    It(De)
  ) : /* @__PURE__ */ D.createElement(zn, { gap: "md" }, /* @__PURE__ */ D.createElement(Fn, { justify: "space-between", wrap: "wrap" }, /* @__PURE__ */ D.createElement(Fn, { gap: "sm" }, /* @__PURE__ */ D.createElement(el, { order: 3 }, Qi), /* @__PURE__ */ D.createElement(
    Vc,
    {
      summary: N.summary,
      delivered: u,
      overdueOnly: _,
      onFilter: ($, L) => {
        d($), p(L);
      }
    }
  ))), /* @__PURE__ */ D.createElement(Un, { size: "sm", c: "dimmed" }, a === "index" ? "Line items on placed or on-hold purchase orders which have not been fully received. " : "", '"Delivered" records that items have physically arrived at the plant. It is separate from "Received", which books the items into stock.'), !l && /* @__PURE__ */ D.createElement(Ct, { icon: /* @__PURE__ */ D.createElement(ea, { size: 16 }), color: "gray", variant: "light" }, "Delivery status can only be changed while the order is Placed or On Hold."), /* @__PURE__ */ D.createElement(
    Zc,
    {
      mode: a,
      search: v,
      onSearch: T,
      delivered: u,
      onDelivered: d,
      supplier: O,
      supplierOptions: Ui,
      onSupplier: le,
      overdueOnly: _,
      onOverdueOnly: p,
      includeReceived: ue,
      includeReceivedLocked: !l,
      onIncludeReceived: R,
      refreshing: Oi,
      onRefresh: () => Fi(),
      onExport: Wi
    }
  ), Nr && Xe.length > 0 && /* @__PURE__ */ D.createElement(
    _a,
    {
      count: Xe.length,
      loading: Xe.some(($) => qe.has($.pk)),
      onMarkDelivered: () => Or(!0),
      onMarkNotDelivered: () => Or(!1),
      onClear: () => Y(/* @__PURE__ */ new Set())
    }
  ), de.length === 0 ? /* @__PURE__ */ D.createElement(Ct, { icon: /* @__PURE__ */ D.createElement(or, { size: 16 }), color: "gray", variant: "light" }, a === "index" ? "There are no outstanding line items on placed or on-hold purchase orders." : "There are no outstanding line items on this order.") : he.length === 0 ? /* @__PURE__ */ D.createElement(Ct, { icon: /* @__PURE__ */ D.createElement(or, { size: 16 }), color: "gray", variant: "light" }, "No line items match the current filters.") : /* @__PURE__ */ D.createElement(
    Wc,
    {
      rows: he,
      mode: a,
      context: e,
      today: Ot,
      canEdit: Nr,
      links: zi,
      sort: m,
      onSort: Bi,
      selected: xe,
      onSelect: ji,
      onSelectAll: Gi,
      busy: qe,
      onUpdate: Ft,
      onOpenOrder: i
    }
  ));
}
const f = window.React, rl = window.MantineCore.ActionIcon, jn = window.MantineCore.Alert, nl = window.MantineCore.Anchor, il = window.MantineCore.Badge, Tt = window.MantineCore.Group, sl = window.MantineCore.Loader, ol = window.MantineCore.Paper, al = window.MantineCore.Progress, cl = window.MantineCore.Select, ht = window.MantineCore.Stack, P = window.MantineCore.Table, ie = window.MantineCore.Text, Pi = window.MantineCore.Tooltip, ll = [
  { value: "open", label: "Open (pending, placed, on hold)" },
  { value: "awaiting", label: "Awaiting delivery (placed, on hold)" },
  { value: "complete", label: "Complete" },
  { value: "failed", label: "Cancelled / lost / returned" },
  { value: "all", label: "All orders" }
];
function Gn({
  label: e,
  value: t,
  total: r,
  color: n
}) {
  return /* @__PURE__ */ f.createElement(ht, { gap: 2, miw: 110 }, /* @__PURE__ */ f.createElement(ie, { size: "xs", style: { whiteSpace: "nowrap" } }, e, " ", t, " / ", r), /* @__PURE__ */ f.createElement(
    al,
    {
      value: r > 0 ? t / r * 100 : 0,
      size: "sm",
      color: n
    }
  ));
}
function ul({
  order: e,
  onOpen: t
}) {
  var n, i;
  const { lines: r } = e;
  return /* @__PURE__ */ f.createElement(
    P.Tr,
    {
      style: {
        cursor: "pointer",
        backgroundColor: e.overdue ? "var(--mantine-color-red-light)" : void 0
      },
      onClick: () => t(e.pk)
    },
    /* @__PURE__ */ f.createElement(P.Td, null, /* @__PURE__ */ f.createElement(ht, { gap: 0 }, /* @__PURE__ */ f.createElement(
      nl,
      {
        component: "button",
        type: "button",
        size: "sm",
        fw: 600,
        onClick: (s) => {
          s.stopPropagation(), t(e.pk);
        }
      },
      e.reference
    ), e.description && /* @__PURE__ */ f.createElement(ie, { size: "xs", c: "dimmed", lineClamp: 1 }, e.description))),
    /* @__PURE__ */ f.createElement(P.Td, null, /* @__PURE__ */ f.createElement(ht, { gap: 0 }, /* @__PURE__ */ f.createElement(ie, { size: "sm" }, ((n = e.supplier) == null ? void 0 : n.name) ?? "-"), e.supplier_reference && /* @__PURE__ */ f.createElement(ie, { size: "xs", c: "dimmed" }, e.supplier_reference))),
    /* @__PURE__ */ f.createElement(P.Td, null, /* @__PURE__ */ f.createElement(il, { size: "sm", variant: "light", color: Ir(e.status_color) }, e.status_label)),
    /* @__PURE__ */ f.createElement(P.Td, null, /* @__PURE__ */ f.createElement(ie, { size: "sm", style: { whiteSpace: "nowrap" } }, $e(e.issue_date))),
    /* @__PURE__ */ f.createElement(P.Td, null, /* @__PURE__ */ f.createElement(Tt, { gap: 4, wrap: "nowrap" }, e.overdue && /* @__PURE__ */ f.createElement(
      Pi,
      {
        label: `${r.overdue} line${r.overdue === 1 ? "" : "s"} overdue`
      },
      /* @__PURE__ */ f.createElement(Rr, { size: 14, color: "var(--mantine-color-red-6)" })
    ), /* @__PURE__ */ f.createElement(
      ie,
      {
        size: "sm",
        c: e.overdue ? "red" : void 0,
        fw: e.overdue ? 600 : void 0,
        style: { whiteSpace: "nowrap" }
      },
      $e(e.target_date)
    ))),
    /* @__PURE__ */ f.createElement(P.Td, null, /* @__PURE__ */ f.createElement(ie, { size: "sm" }, ((i = e.destination) == null ? void 0 : i.pathstring) ?? "-")),
    /* @__PURE__ */ f.createElement(P.Td, null, /* @__PURE__ */ f.createElement(Tt, { gap: "md", wrap: "nowrap" }, /* @__PURE__ */ f.createElement(
      Gn,
      {
        label: "Delivered",
        value: r.delivered,
        total: r.total,
        color: "teal"
      }
    ), /* @__PURE__ */ f.createElement(
      Gn,
      {
        label: "Received",
        value: r.received,
        total: r.total,
        color: "green"
      }
    )))
  );
}
function dl({
  context: e,
  search: t,
  onSearch: r,
  onOpenOrder: n
}) {
  const [i, s] = Be({
    key: "po-delivery-orders-status",
    defaultValue: "open"
  }), [a] = ki(t.trim(), 300), { data: o, isLoading: l, isError: h, error: u, isFetching: d, refetch: _ } = Li(
    e,
    { status: i, search: a }
  ), p = (o == null ? void 0 : o.results) ?? [];
  return /* @__PURE__ */ f.createElement(ht, { gap: "md" }, /* @__PURE__ */ f.createElement(ol, { p: "sm", withBorder: !0 }, /* @__PURE__ */ f.createElement(Tt, { justify: "space-between", wrap: "wrap", gap: "sm" }, /* @__PURE__ */ f.createElement(
    Di,
    {
      value: t,
      onChange: r,
      placeholder: "Search order, supplier, supplier reference..."
    }
  ), /* @__PURE__ */ f.createElement(Tt, { gap: "xs", wrap: "wrap" }, /* @__PURE__ */ f.createElement(
    cl,
    {
      size: "xs",
      data: ll,
      value: i,
      onChange: (g) => s(g ?? "open"),
      allowDeselect: !1,
      w: 260
    }
  ), /* @__PURE__ */ f.createElement(Pi, { label: "Refresh" }, /* @__PURE__ */ f.createElement(
    rl,
    {
      variant: "light",
      loading: d,
      onClick: () => _()
    },
    /* @__PURE__ */ f.createElement(yi, { size: 16 })
  ))))), l ? /* @__PURE__ */ f.createElement(ht, { align: "center", justify: "center", p: "xl" }, /* @__PURE__ */ f.createElement(sl, { size: "lg" }), /* @__PURE__ */ f.createElement(ie, { c: "dimmed" }, "Loading purchase orders...")) : h || !o ? /* @__PURE__ */ f.createElement(
    jn,
    {
      icon: /* @__PURE__ */ f.createElement(Dt, { size: 16 }),
      title: "Error Loading Data",
      color: "red",
      variant: "light"
    },
    It(u)
  ) : p.length === 0 ? /* @__PURE__ */ f.createElement(jn, { icon: /* @__PURE__ */ f.createElement(or, { size: 16 }), color: "gray", variant: "light" }, "No purchase orders match the current filters.") : /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(P.ScrollContainer, { minWidth: 1e3, maxHeight: "65vh", type: "native" }, /* @__PURE__ */ f.createElement(P, { stickyHeader: !0, highlightOnHover: !0, verticalSpacing: "xs" }, /* @__PURE__ */ f.createElement(P.Thead, null, /* @__PURE__ */ f.createElement(P.Tr, null, /* @__PURE__ */ f.createElement(P.Th, null, "Purchase Order"), /* @__PURE__ */ f.createElement(P.Th, null, "Supplier"), /* @__PURE__ */ f.createElement(P.Th, null, "Status"), /* @__PURE__ */ f.createElement(P.Th, null, "Issued"), /* @__PURE__ */ f.createElement(P.Th, null, "Target Date"), /* @__PURE__ */ f.createElement(P.Th, null, "Destination"), /* @__PURE__ */ f.createElement(P.Th, null, "Lines"))), /* @__PURE__ */ f.createElement(P.Tbody, null, p.map((g) => /* @__PURE__ */ f.createElement(ul, { key: g.pk, order: g, onOpen: n }))))), o.count > p.length && /* @__PURE__ */ f.createElement(ie, { size: "sm", c: "dimmed" }, "Showing the newest ", p.length, " of ", o.count, " orders. Search to find older orders.")));
}
const C = window.React, Wn = window.React.useState, hl = window.MantineCore.Alert, pl = window.MantineCore.Badge, fl = window.MantineCore.Button, Qn = window.MantineCore.Group, ml = window.MantineCore.Loader, _l = window.MantineCore.Paper, vl = window.MantineCore.SegmentedControl, gl = window.MantineCore.SimpleGrid, je = window.MantineCore.Stack, wr = window.MantineCore.Text, wl = window.MantineCore.Title;
function Ue({ label: e, value: t }) {
  return /* @__PURE__ */ C.createElement(je, { gap: 0 }, /* @__PURE__ */ C.createElement(wr, { size: "xs", c: "dimmed" }, e), /* @__PURE__ */ C.createElement(wr, { size: "sm" }, t || "-"));
}
function yl({
  context: e,
  orderId: t,
  onBack: r
}) {
  var h, u;
  const { data: n, isLoading: i, isError: s, error: a } = Li(e, {
    order: t
  }), o = n == null ? void 0 : n.results[0], l = /* @__PURE__ */ C.createElement(Qn, null, /* @__PURE__ */ C.createElement(
    fl,
    {
      variant: "subtle",
      size: "xs",
      leftSection: /* @__PURE__ */ C.createElement(jo, { size: 14 }),
      onClick: r
    },
    "Back"
  ));
  return i ? /* @__PURE__ */ C.createElement(je, { align: "center", justify: "center", p: "xl" }, /* @__PURE__ */ C.createElement(ml, { size: "lg" })) : s || !o ? /* @__PURE__ */ C.createElement(je, { gap: "md" }, l, /* @__PURE__ */ C.createElement(
    hl,
    {
      icon: /* @__PURE__ */ C.createElement(Dt, { size: 16 }),
      title: "Error Loading Data",
      color: "red",
      variant: "light"
    },
    s ? It(a) : "Purchase order not found"
  )) : /* @__PURE__ */ C.createElement(je, { gap: "md" }, l, /* @__PURE__ */ C.createElement(_l, { p: "md", withBorder: !0 }, /* @__PURE__ */ C.createElement(je, { gap: "sm" }, /* @__PURE__ */ C.createElement(Qn, { gap: "sm" }, /* @__PURE__ */ C.createElement(wl, { order: 3 }, o.reference), /* @__PURE__ */ C.createElement(pl, { variant: "light", color: Ir(o.status_color) }, o.status_label)), o.description && /* @__PURE__ */ C.createElement(wr, { size: "sm" }, o.description), /* @__PURE__ */ C.createElement(gl, { cols: { base: 2, sm: 3, lg: 6 }, spacing: "sm" }, /* @__PURE__ */ C.createElement(Ue, { label: "Supplier", value: (h = o.supplier) == null ? void 0 : h.name }), /* @__PURE__ */ C.createElement(Ue, { label: "Supplier Reference", value: o.supplier_reference }), /* @__PURE__ */ C.createElement(Ue, { label: "Issued", value: $e(o.issue_date) }), /* @__PURE__ */ C.createElement(Ue, { label: "Target Date", value: $e(o.target_date) }), /* @__PURE__ */ C.createElement(
    Ue,
    {
      label: "Completed",
      value: o.complete_date ? $e(o.complete_date) : "-"
    }
  ), /* @__PURE__ */ C.createElement(Ue, { label: "Destination", value: (u = o.destination) == null ? void 0 : u.pathstring })))), /* @__PURE__ */ C.createElement(
    Dr,
    {
      key: o.pk,
      context: e,
      mode: "order",
      orderId: o.pk,
      editable: o.editable
    }
  ));
}
function bl({ context: e }) {
  const [t, r] = Be({
    key: "po-delivery-page-view",
    defaultValue: "pending"
  }), [n, i] = Wn(null), [s, a] = Wn("");
  return n !== null ? /* @__PURE__ */ C.createElement(
    yl,
    {
      context: e,
      orderId: n,
      onBack: () => i(null)
    }
  ) : /* @__PURE__ */ C.createElement(je, { gap: "md" }, /* @__PURE__ */ C.createElement(
    vl,
    {
      value: t,
      onChange: (o) => r(o),
      data: [
        { label: "Pending Deliveries", value: "pending" },
        { label: "Purchase Orders", value: "orders" }
      ],
      style: { alignSelf: "flex-start" }
    }
  ), t === "orders" ? /* @__PURE__ */ C.createElement(
    dl,
    {
      context: e,
      search: s,
      onSearch: a,
      onOpenOrder: i
    }
  ) : /* @__PURE__ */ C.createElement(Dr, { context: e, mode: "index", onOpenOrder: i }));
}
const $t = window.React;
function Ni(e) {
  return Xn(e), /* @__PURE__ */ $t.createElement(wi, { locale: e.locale }, /* @__PURE__ */ $t.createElement(Dr, { context: e }));
}
function Rl(e) {
  return Ni(e);
}
function Il(e) {
  return Ni(e);
}
function Tl(e) {
  return Xn(e), /* @__PURE__ */ $t.createElement(wi, { locale: e.locale }, /* @__PURE__ */ $t.createElement(bl, { context: e }));
}
export {
  Rl as default,
  Tl as renderDeliveryPage,
  Rl as renderIndexPanel,
  Il as renderOrderPanel
};
