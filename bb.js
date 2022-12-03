/*!
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 *
 * billboard.js, JavaScript chart library
 * https://naver.github.io/billboard.js/
 *
 * @version 3.6.3
 */
! function(t, e) { if ("object" == typeof exports && "object" == typeof module) module.exports = e(require("d3-axis"), require("d3-brush"), require("d3-drag"), require("d3-dsv"), require("d3-ease"), require("d3-interpolate"), require("d3-scale"), require("d3-selection"), require("d3-shape"), require("d3-time-format"), require("d3-transition"), require("d3-zoom"));
    else if ("function" == typeof define && define.amd) define(["d3-axis", "d3-brush", "d3-drag", "d3-dsv", "d3-ease", "d3-interpolate", "d3-scale", "d3-selection", "d3-shape", "d3-time-format", "d3-transition", "d3-zoom"], e);
    else { var i = "object" == typeof exports ? e(require("d3-axis"), require("d3-brush"), require("d3-drag"), require("d3-dsv"), require("d3-ease"), require("d3-interpolate"), require("d3-scale"), require("d3-selection"), require("d3-shape"), require("d3-time-format"), require("d3-transition"), require("d3-zoom")) : e(t.d3, t.d3, t.d3, t.d3, t.d3, t.d3, t.d3, t.d3, t.d3, t.d3, t.d3, t.d3); for (var n in i)("object" == typeof exports ? exports : t)[n] = i[n] } }(this, (function(t, e, i, n, a, r, s, o, l, c, d, h) { return function() { "use strict"; var u = [, , function(t) { t.exports = o }, function(t) { t.exports = e }, function(t) { t.exports = c }, function(t) { t.exports = n }, function(t) { t.exports = s }, function(t) { t.exports = i }, function(t) { t.exports = d }, function(t) { t.exports = l }, function(e) { e.exports = t }, function(t) { t.exports = a }, function(t) { t.exports = r }, function(t) { t.exports = h }],
            g = {};

        function f(t) { var e = g[t]; if (void 0 !== e) return e.exports; var i = g[t] = { exports: {} }; return u[t](i, i.exports, f), i.exports }
        f.d = function(t, e) { for (var i in e) f.o(e, i) && !f.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] }) }, f.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, f.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }; var p = {}; return function() { f.r(p), f.d(p, { bb: function() { return da }, default: function() { return da } }); var t = {};
            f.r(t), f.d(t, { area: function() { return Cn }, areaLineRange: function() { return Rn }, areaSpline: function() { return En }, areaSplineRange: function() { return Ln }, areaStep: function() { return On }, bar: function() { return Bn }, bubble: function() { return Nn }, candlestick: function() { return Gn }, donut: function() { return zn }, gauge: function() { return Mn }, line: function() { return Pn }, pie: function() { return Xn }, polar: function() { return $n }, radar: function() { return Fn }, scatter: function() { return jn }, spline: function() { return In }, step: function() { return Dn } }); var e = {};

            function i(t, e) { if (t !== e) throw new TypeError("Cannot instantiate an arrow function") }
            f.r(e), f.d(e, { selection: function() { return sa }, subchart: function() { return oa }, zoom: function() { return la } }); var n = f(4),
                a = f(2),
                r = void 0,
                s = function() { return i(this, r), "object" == typeof globalThis && null !== globalThis && globalThis.Object === Object && globalThis || "object" == typeof global && null !== global && global.Object === Object && global || "object" == typeof self && null !== self && self.Object === Object && self || Function("return this")() }.bind(void 0)();
            s.requestIdleCallback = s.requestIdleCallback || function(t) { return i(this, r), setTimeout(t, 1) }.bind(void 0), s.requestAnimationFrame = s.requestAnimationFrame || function(t) { return i(this, r), setTimeout(t, 1) }.bind(void 0); var o = null == s ? void 0 : s.document,
                l = { AREA: "area", AREA_LINE_RANGE: "area-line-range", AREA_SPLINE: "area-spline", AREA_SPLINE_RANGE: "area-spline-range", AREA_STEP: "area-step", BAR: "bar", BUBBLE: "bubble", CANDLESTICK: "candlestick", DONUT: "donut", GAUGE: "gauge", LINE: "line", PIE: "pie", POLAR: "polar", RADAR: "radar", SCATTER: "scatter", SPLINE: "spline", STEP: "step" },
                c = { AREA: "initArea", AREA_LINE_RANGE: "initArea", AREA_SPLINE: "initArea", AREA_SPLINE_RANGE: "initArea", AREA_STEP: "initArea", BAR: "initBar", BUBBLE: "initCircle", CANDLESTICK: "initCandlestick", DONUT: "initArc", GAUGE: "initArc", LINE: "initLine", PIE: "initArc", POLAR: "initPolar", RADAR: "initCircle", SCATTER: "initCircle", SPLINE: "initLine", STEP: "initLine" },
                d = { Area: [l.AREA, l.AREA_SPLINE, l.AREA_SPLINE_RANGE, l.AREA_LINE_RANGE, l.AREA_STEP], AreaRange: [l.AREA_SPLINE_RANGE, l.AREA_LINE_RANGE], Arc: [l.PIE, l.DONUT, l.GAUGE, l.POLAR, l.RADAR], Line: [l.LINE, l.SPLINE, l.AREA, l.AREA_SPLINE, l.AREA_SPLINE_RANGE, l.AREA_LINE_RANGE, l.STEP, l.AREA_STEP], Step: [l.STEP, l.AREA_STEP], Spline: [l.SPLINE, l.AREA_SPLINE, l.AREA_SPLINE_RANGE] };

            function h(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t } var u = f(3),
                g = void 0;

            function v(t, e) { var i = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), i.push.apply(i, n) } return i }

            function x(t) { for (var e, i = 1; i < arguments.length; i++) e = null != arguments[i] ? arguments[i] : {}, i % 2 ? v(Object(e), !0).forEach((function(i) { h(t, i, e[i]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : v(Object(e)).forEach((function(i) { Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i)) })); return t } var b = function(t) { return i(this, g), t || 0 === t }.bind(void 0),
                _ = function(t) { return i(this, g), "function" == typeof t }.bind(void 0),
                m = function(t) { return i(this, g), "string" == typeof t }.bind(void 0),
                y = function(t) { return i(this, g), "number" == typeof t }.bind(void 0),
                T = function(t) { return i(this, g), void 0 === t }.bind(void 0),
                w = function(t) { return i(this, g), void 0 !== t }.bind(void 0),
                A = function(t) { return i(this, g), "boolean" == typeof t }.bind(void 0),
                k = function(t) { return i(this, g), 10 * Math.ceil(t / 10) }.bind(void 0),
                S = function(t) { return i(this, g), Math.ceil(t) + .5 }.bind(void 0),
                C = function(t) { return i(this, g), t[1] - t[0] }.bind(void 0),
                R = function(t) { return i(this, g), "object" == typeof t }.bind(void 0),
                E = function(t) { return i(this, g), T(t) || null === t || m(t) && 0 === t.length || R(t) && !(t instanceof Date) && 0 === Object.keys(t).length || y(t) && isNaN(t) }.bind(void 0),
                L = function(t) { return i(this, g), !E(t) }.bind(void 0),
                O = function(t) { return i(this, g), Array.isArray(t) }.bind(void 0),
                P = function(t) { return i(this, g), t && !(null != t && t.nodeType) && R(t) && !O(t) }.bind(void 0);

            function I(t, e, i) { return w(t[e]) ? t[e] : i }

            function D(t, e) { for (var i = _(t), n = arguments.length, a = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) a[r - 2] = arguments[r]; return i && t.call.apply(t, [e].concat(a)), i }

            function z(t, e) { var n = this,
                    a = 0,
                    r = function() { for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];--a || e.apply.apply(e, [this].concat(i)) }; "duration" in t ? t.each(function() { return i(this, n), ++a }.bind(this)).on("end", r) : (++a, t.call(r)) }

            function M(t) { return m(t) ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;") : t }

            function X(t, e, n, a) { var r = this; if (void 0 === n && (n = [-1, 1]), void 0 === a && (a = !1), t && m(e))
                    if (-1 === e.indexOf("\n")) t.text(e);
                    else { var s = [t.text(), e].map(function(t) { return i(this, r), t.replace(/[\s\n]/g, "") }.bind(this)); if (s[0] !== s[1]) { var o = e.split("\n"),
                                l = a ? o.length - 1 : 1;
                            t.html(""), o.forEach(function(e, a) { i(this, r), t.append("tspan").attr("x", 0).attr("dy", (0 === a ? n[0] * l : n[1]) + "em").text(e) }.bind(this)) } } }

            function $(t) { var e = t.getBBox(),
                    i = e.x,
                    n = e.y,
                    a = e.width,
                    r = e.height; return [{ x: i, y: n + r }, { x: i, y: n }, { x: i + a, y: n }, { x: i + a, y: n + r }] }

            function F(t, e) { var n, r = t && (null == (n = t.touches || t.sourceEvent && t.sourceEvent.touches) ? void 0 : n[0]),
                    s = (0, a.pointer)(r || t, e),
                    o = this; return s.map(function(t) { return i(this, o), isNaN(t) ? 0 : t }.bind(this)) }

            function B(t) { var e, i = t.event,
                    n = t.$el,
                    a = n.subchart.main || n.main; return i && "brush" === i.type ? e = i.selection : a && (e = a.select(".bb-brush").node()) && (e = (0, u.brushSelection)(e)), e }

            function N(t) { return !("rect" in t) || "rect" in t && t.hasAttribute("width") && t.rect.width !== +t.getAttribute("width") ? t.rect = t.getBoundingClientRect() : t.rect }

            function G(t, e, i) { void 0 === t && (t = !0), void 0 === e && (e = 0), void 0 === i && (i = 1e4); var n = Math.floor(Math.random() * (i - e) + e); return t ? n + "" : n }

            function j(t, e, i, n, a) { if (i > n) return -1; var r = Math.floor((i + n) / 2),
                    s = t[r],
                    o = s.x,
                    l = s.w,
                    c = void 0 === l ? 0 : l; return a && (o = t[r].y, c = t[r].h), e >= o && e <= o + c ? r : e < o ? j(t, e, i, r - 1, a) : j(t, e, r + 1, n, a) }

            function Y(t) { var e = B(t); return !e || e[0] === e[1] }

            function V(t, e) { var n = this; for (var a in void 0 === t && (t = {}), O(e) && e.forEach(function(e) { return i(this, n), V(t, e) }.bind(this)), e) /^\d+$/.test(a) || a in t || (t[a] = e[a]); return t } var H = function(t) { return i(this, g), t.charAt(0).toUpperCase() + t.slice(1) }.bind(void 0); var W = function(t) { return i(this, g), [].slice.call(t) }.bind(void 0);

            function U(t) { var e = t ? t.transform : null,
                    i = e && e.baseVal; return i && i.numberOfItems ? i.getItem(0).matrix : { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 } }

            function Z(t) { var e = this,
                    n = t[0] instanceof Date,
                    a = (n ? t.map(Number) : t).filter(function(t, n, a) { return i(this, e), a.indexOf(t) === n }.bind(this)); return n ? a.map(function(t) { return i(this, e), new Date(t) }.bind(this)) : a }

            function q(t) { var e = this; return t && t.length ? t.reduce(function(t, n) { return i(this, e), t.concat(n) }.bind(this)) : [] }

            function K(t) { for (var e = this, n = arguments.length, a = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r]; if (!a.length || 1 === a.length && !a[0]) return t; var s = a.shift(); return P(t) && P(s) && Object.keys(s).forEach(function(n) { i(this, e); var a = s[n];
                    P(a) ? (t[n] || (t[n] = {}), t[n] = K(t[n], a)) : t[n] = O(a) ? a.concat() : a }.bind(this)), K.apply(void 0, [t].concat(a)) }

            function J(t, e) { var n, a = this; return void 0 === e && (e = !0), t[0] instanceof Date ? n = e ? function(t, e) { return i(this, a), t - e }.bind(this) : function(t, e) { return i(this, a), e - t }.bind(this) : e && !t.every(isNaN) ? n = function(t, e) { return i(this, a), t - e }.bind(this) : e || (n = function(t, e) { return i(this, a), (t > e ? -1 : t < e && 1) || t === e && 0 }.bind(this)), t.concat().sort(n) }

            function Q(t, e) { var n = this,
                    a = e.filter(function(t) { return i(this, n), L(t) }.bind(this)); return a.length ? y(a[0]) ? a = Math[t].apply(Math, a) : a[0] instanceof Date && (a = J(a, "min" === t)[0]) : a = void 0, a } var tt = function(t, e, n) { void 0 === n && (n = 1), i(this, g); for (var a = [], r = 0 | Math.max(0, Math.ceil((e - t) / n)), s = t; s < r; s++) a.push(t + s * n); return a }.bind(void 0),
                et = { mouse: function() { var t = this;
                        i(this, g); var e = function() { return i(this, t), { bubbles: !1, cancelable: !1, screenX: 0, screenY: 0, clientX: 0, clientY: 0 } }.bind(this); try { return new MouseEvent("t"),
                                function(n, a, r) { void 0 === r && (r = e()), i(this, t), n.dispatchEvent(new MouseEvent(a, r)) }.bind(this) } catch (n) { return function(n, a, r) { void 0 === r && (r = e()), i(this, t); var l = o.createEvent("MouseEvent");
                                l.initMouseEvent(a, r.bubbles, r.cancelable, s, 0, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.dispatchEvent(l) }.bind(this) } }.bind(void 0)(), touch: function(t, e, n) { i(this, g); var a = new Touch(K({ identifier: Date.now(), target: t, radiusX: 2.5, radiusY: 2.5, rotationAngle: 10, force: .5 }, n));
                        t.dispatchEvent(new TouchEvent(e, { cancelable: !0, bubbles: !0, shiftKey: !0, touches: [a], targetTouches: [], changedTouches: [a] })) }.bind(void 0) };

            function it(t, e) { var i = t; for (var n in e) i = i.replace(new RegExp("{=" + n + "}", "g"), e[n]); return i }

            function nt(t) { var e; if (t instanceof Date) e = t;
                else if (m(t)) { var i, n = this.config;
                    e = null != (i = this.format.dataTime(n.data_xFormat)(t)) ? i : new Date(t) } else y(t) && !isNaN(t) && (e = new Date(+t)); return e && !isNaN(+e) || console && console.error && console.error("Failed to parse x '" + t + "' to Date object"), e }

            function at() { return !1 === (null == o ? void 0 : o.hidden) || "visible" === (null == o ? void 0 : o.visibilityState) }

            function rt(t, e) { var n = this;!1 === e() ? s.requestAnimationFrame(function() { return i(this, n), rt(t, e) }.bind(this)) : t() }

            function st(t) { var e = t,
                    n = e.config,
                    a = ""; if (E(n.data_type || n.data_types) && !e[c.LINE]) a = "line";
                else
                    for (var r in c) { var o = l[r]; if (e.hasType(o) && !e[c[r]]) { a = o; break } }
                a && function(t, e) { var i, n = "[billboard.js]";
                    (null == (i = s.console) ? void 0 : i.error) && (console.error("❌ " + n + " " + t, "background:red;color:white;display:block;font-size:15px", e), console.info("%cℹ️", "font-size:15px", "https://github.com/naver/billboard.js/wiki/CHANGELOG-v2#modularization-by-its-functionality")); throw Error(n + " " + t.replace(/\%c([a-z-]+)/i, "'$1' ") + " " + e) }("Please, make sure if %c" + function(t, e) { var n = this; return void 0 === e && (e = "-"), t.split(e).map(function(t, e) { return i(this, n), e ? t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase() }.bind(this)).join("") }(a), "module has been imported and specified correctly.") }

            function ot(t, e) { var i = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), i.push.apply(i, n) } return i }

            function lt(t) { for (var e, i = 1; i < arguments.length; i++) e = null != arguments[i] ? arguments[i] : {}, i % 2 ? ot(Object(e), !0).forEach((function(i) { h(t, i, e[i]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : ot(Object(e)).forEach((function(i) { Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i)) })); return t } var ct = { button: "bb-button", chart: "bb-chart", empty: "bb-empty", main: "bb-main", target: "bb-target", EXPANDED: "_expanded_" },
                dt = { arc: "bb-arc", arcLabelLine: "bb-arc-label-line", arcs: "bb-arcs", chartArc: "bb-chart-arc", chartArcs: "bb-chart-arcs", chartArcsBackground: "bb-chart-arcs-background", chartArcsTitle: "bb-chart-arcs-title" },
                ht = { area: "bb-area", areas: "bb-areas" },
                ut = { axis: "bb-axis", axisX: "bb-axis-x", axisXLabel: "bb-axis-x-label", axisY: "bb-axis-y", axisY2: "bb-axis-y2", axisY2Label: "bb-axis-y2-label", axisYLabel: "bb-axis-y-label" },
                gt = { bar: "bb-bar", bars: "bb-bars", chartBar: "bb-chart-bar", chartBars: "bb-chart-bars" },
                ft = { candlestick: "bb-candlestick", candlesticks: "bb-candlesticks", chartCandlestick: "bb-chart-candlestick", chartCandlesticks: "bb-chart-candlesticks", valueDown: "bb-value-down", valueUp: "bb-value-up" },
                pt = { chartCircles: "bb-chart-circles", circle: "bb-circle", circles: "bb-circles" },
                vt = { colorPattern: "bb-color-pattern", colorScale: "bb-colorscale" },
                xt = { dragarea: "bb-dragarea", INCLUDED: "_included_" },
                bt = { chartArcsGaugeMax: "bb-chart-arcs-gauge-max", chartArcsGaugeMin: "bb-chart-arcs-gauge-min", chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit", chartArcsGaugeTitle: "bb-chart-arcs-gauge-title", gaugeValue: "bb-gauge-value" },
                _t = { legend: "bb-legend", legendBackground: "bb-legend-background", legendItem: "bb-legend-item", legendItemEvent: "bb-legend-item-event", legendItemHidden: "bb-legend-item-hidden", legendItemPoint: "bb-legend-item-point", legendItemTile: "bb-legend-item-tile" },
                mt = { chartLine: "bb-chart-line", chartLines: "bb-chart-lines", line: "bb-line", lines: "bb-lines" },
                yt = { eventRect: "bb-event-rect", eventRects: "bb-event-rects", eventRectsMultiple: "bb-event-rects-multiple", eventRectsSingle: "bb-event-rects-single" },
                Tt = { focused: "bb-focused", defocused: "bb-defocused", legendItemFocused: "bb-legend-item-focused", xgridFocus: "bb-xgrid-focus", ygridFocus: "bb-ygrid-focus" },
                wt = { grid: "bb-grid", gridLines: "bb-grid-lines", xgrid: "bb-xgrid", xgridLine: "bb-xgrid-line", xgridLines: "bb-xgrid-lines", xgrids: "bb-xgrids", ygrid: "bb-ygrid", ygridLine: "bb-ygrid-line", ygridLines: "bb-ygrid-lines", ygrids: "bb-ygrids" },
                At = "bb-level",
                kt = "bb-levels",
                St = { chartRadar: "bb-chart-radar", chartRadars: "bb-chart-radars" },
                Ct = { region: "bb-region", regions: "bb-regions" },
                Rt = { selectedCircle: "bb-selected-circle", selectedCircles: "bb-selected-circles", SELECTED: "_selected_" },
                Et = { shape: "bb-shape", shapes: "bb-shapes" },
                Lt = { brush: "bb-brush", subchart: "bb-subchart" },
                Ot = { chartText: "bb-chart-text", chartTexts: "bb-chart-texts", text: "bb-text", texts: "bb-texts", title: "bb-title", TextOverlapping: "text-overlapping" },
                Pt = { tooltip: "bb-tooltip", tooltipContainer: "bb-tooltip-container", tooltipName: "bb-tooltip-name" },
                It = { buttonZoomReset: "bb-zoom-reset", zoomBrush: "bb-zoom-brush" },
                Dt = lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(lt({}, ct), dt), ht), ut), gt), ft), pt), vt), xt), bt), _t), mt), yt), Tt), wt), St), Ct), Rt), Et), Lt), Ot), Pt), It),
                zt = { element: function() { return { chart: null, main: null, svg: null, axis: { x: null, y: null, y2: null, subX: null }, defs: null, tooltip: null, legend: null, title: null, subchart: { main: null, bar: null, line: null, area: null }, arcs: null, bar: null, candlestick: null, line: null, area: null, circle: null, radar: null, text: null, grid: { main: null, x: null, y: null }, gridLines: { main: null, x: null, y: null }, region: { main: null, list: null }, eventRect: null, zoomResetBtn: null } }, state: function() { return { width: 0, width2: 0, height: 0, height2: 0, margin: { top: 0, bottom: 0, left: 0, right: 0 }, margin2: { top: 0, bottom: 0, left: 0, right: 0 }, margin3: { top: 0, bottom: 0, left: 0, right: 0 }, arcWidth: 0, arcHeight: 0, xAxisHeight: 0, hasAxis: !1, hasRadar: !1, cssRule: {}, current: { width: 0, height: 0, dataMax: 0, maxTickWidths: { x: { size: 0, ticks: [], clipPath: 0, domain: "" }, y: { size: 0, domain: "" }, y2: { size: 0, domain: "" } }, types: [] }, isLegendRight: !1, isLegendInset: !1, isLegendTop: !1, isLegendLeft: !1, legendStep: 0, legendItemWidth: 0, legendItemHeight: 0, legendHasRendered: !1, eventReceiver: { currentIdx: -1, rect: {}, data: [], coords: [] }, axis: { x: { padding: { left: 0, right: 0 }, tickCount: 0 } }, rotatedPadding: { left: 30, right: 0, top: 5 }, withoutFadeIn: {}, inputType: "", datetimeId: "", clip: { id: "", idXAxis: "", idYAxis: "", idXAxisTickTexts: "", idGrid: "", idSubchart: "", path: "", pathXAxis: "", pathYAxis: "", pathXAxisTickTexts: "", pathGrid: "" }, event: null, dragStart: null, dragging: !1, flowing: !1, cancelClick: !1, mouseover: !1, rendered: !1, transiting: !1, redrawing: !1, resizing: !1, toggling: !1, zooming: !1, hasNegativeValue: !1, hasPositiveValue: !0, orgAreaOpacity: "0.2", orgConfig: {}, hiddenTargetIds: [], hiddenLegendIds: [], focusedTargetIds: [], defocusedTargetIds: [], radius: 0, innerRadius: 0, outerRadius: void 0, innerRadiusRatio: 0, gaugeArcWidth: 0, radiusExpanded: 0, xgridAttr: { x1: null, x2: null, y1: null, y2: null } } } },
                Mt = function() {
                    function t() { var t = this;
                        Object.keys(zt).forEach(function(e) { i(this, t), this[e] = new zt[e] }.bind(this)) } return t.prototype.getStore = function(t) { return this[t] }, t }(),
                Xt = { bindto: "#chart", background: {}, clipPath: !0, svg_classname: void 0, size_width: void 0, size_height: void 0, padding: !0, padding_left: void 0, padding_right: void 0, padding_top: void 0, padding_bottom: void 0, resize_auto: !0, resize_timer: !0, onclick: void 0, onover: void 0, onout: void 0, onresize: void 0, onresized: void 0, onbeforeinit: void 0, oninit: void 0, onafterinit: void 0, onrendered: void 0, transition_duration: 250, plugins: [], render: {}, regions: [] },
                $t = { boost_useCssRule: !1, boost_useWorker: !1 },
                Ft = void 0,
                Bt = { data_x: void 0, data_idConverter: function(t) { return i(this, Ft), t }.bind(void 0), data_names: {}, data_classes: {}, data_type: void 0, data_types: {}, data_order: "desc", data_groups: [], data_groupsZeroAs: "positive", data_color: void 0, data_colors: {}, data_labels: {}, data_labels_backgroundColors: void 0, data_labels_colors: void 0, data_labels_position: {}, data_hide: !1, data_filter: void 0, data_onclick: function() { i(this, Ft) }.bind(void 0), data_onover: function() { i(this, Ft) }.bind(void 0), data_onout: function() { i(this, Ft) }.bind(void 0), data_onshown: void 0, data_onhidden: void 0, data_onmin: void 0, data_onmax: void 0, data_url: void 0, data_headers: void 0, data_json: void 0, data_rows: void 0, data_columns: void 0, data_mimeType: "csv", data_keys: void 0, data_empty_label_text: "" },
                Nt = { color_pattern: [], color_tiles: void 0, color_threshold: {}, color_onover: void 0 },
                Gt = { interaction_enabled: !0, interaction_brighten: !0, interaction_inputType_mouse: !0, interaction_inputType_touch: {} },
                jt = { legend_show: !0, legend_hide: !1, legend_contents_bindto: void 0, legend_contents_template: "<span style='color:#fff;padding:5px;background-color:{=COLOR}'>{=TITLE}</span>", legend_position: "bottom", legend_inset_anchor: "top-left", legend_inset_x: 10, legend_inset_y: 0, legend_inset_step: void 0, legend_item_onclick: void 0, legend_item_onover: void 0, legend_item_onout: void 0, legend_equally: !1, legend_padding: 0, legend_item_tile_width: 10, legend_item_tile_height: 10, legend_item_tile_r: 5, legend_item_tile_type: "rectangle", legend_usePoint: !1 },
                Yt = { title_text: void 0, title_padding: { top: 0, right: 0, bottom: 0, left: 0 }, title_position: "center" },
                Vt = void 0,
                Ht = { tooltip_show: !0, tooltip_doNotHide: !1, tooltip_grouped: !0, tooltip_format_title: void 0, tooltip_format_name: void 0, tooltip_format_value: void 0, tooltip_position: void 0, tooltip_contents: {}, tooltip_init_show: !1, tooltip_init_x: 0, tooltip_init_position: { top: "0px", left: "50px" }, tooltip_linked: !1, tooltip_linked_name: "", tooltip_onshow: function() { i(this, Vt) }.bind(void 0), tooltip_onhide: function() { i(this, Vt) }.bind(void 0), tooltip_onshown: function() { i(this, Vt) }.bind(void 0), tooltip_onhidden: function() { i(this, Vt) }.bind(void 0), tooltip_order: null };

            function Wt(t, e) { var i = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), i.push.apply(i, n) } return i }

            function Ut(t) { for (var e, i = 1; i < arguments.length; i++) e = null != arguments[i] ? arguments[i] : {}, i % 2 ? Wt(Object(e), !0).forEach((function(i) { h(t, i, e[i]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Wt(Object(e)).forEach((function(i) { Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i)) })); return t } var Zt = function() {
                function t() { return function() { for (var t = this, e = function(n) { if (i(this, t), P(n) && n.constructor) { var a = new n.constructor; for (var r in n) a[r] = e(n[r]); return a } return n }.bind(this), n = arguments.length, a = Array(n), r = 0; r < n; r++) a[r] = arguments[r]; return a.map(function(n) { return i(this, t), e(n) }.bind(this)).reduce(function(e, n) { return i(this, t), x(x({}, e), n) }.bind(this)) }(Xt, $t, Bt, Nt, Gt, jt, Yt, Ht, t.data) } return t.setOptions = function(t) { var e = this;
                    this.data = t.reduce(function(t, n) { return i(this, e), Ut(Ut({}, t), n) }.bind(this), this.data) }, t }();
            Zt.data = {}; var qt = "$baseLength",
                Kt = "__colorPattern__",
                Jt = "$dataMinMax",
                Qt = "$dataTotalSum",
                te = "$totalPerIndex",
                ee = "legendItemTextBox",
                ie = "$radarPoints",
                ne = "setOverOut",
                ae = "callOverOutForTouch",
                re = "textRect",
                se = function() {
                    function t() { this.cache = {} } var e = t.prototype; return e.add = function(t, e, i) { return void 0 === i && (i = !1), this.cache[t] = i ? this.cloneTarget(e) : e, this.cache[t] }, e.remove = function(t) { var e = this;
                        W(t).forEach(function(t) { return i(this, e), delete this.cache[t] }.bind(this)) }, e.get = function(t, e) { if (void 0 === e && (e = !1), e) { for (var i, n = [], a = 0; i = t[a]; a++) i in this.cache && n.push(this.cloneTarget(this.cache[i])); return n } var r = this.cache[t]; return b(r) ? r : null }, e.reset = function(t) { for (var e in this.cache)(t || /^\$/.test(e)) && (this.cache[e] = null) }, e.cloneTarget = function(t) { var e = this; return { id: t.id, id_org: t.id_org, values: t.values.map(function(t) { return i(this, e), { x: t.x, value: t.value, id: t.id } }.bind(this)) } }, t }(),
                oe = s.setTimeout,
                le = s.clearTimeout;

            function ce() { var t = [],
                    e = function(e, n) { var a = this;
                        rt(function() { i(this, a), null == n || n() }.bind(this), (function() { for (var e, i = 0, n = 0; e = t[n]; n++)
                                if (!0 === e || null != e.empty && e.empty()) i++;
                                else { if (!1 === at()) { i = t.length; break } try { e.transition() } catch (t) { i++ } }
                            return i === t.length })) }; return e.add = function(e) { O(e) ? t = t.concat(e) : t.push(e) }, e } var de = {};

            function he(t, e, i, n) { var a; if (void 0 === t && (t = !0), s.Worker && t) { var r = function(t, e) { var i, n = t.toString(),
                                a = n.replace(/(function|[\s\W\n])/g, "").substring(0, 15); return a in de || (de[a] = new s.Blob([(null != (i = null == e ? void 0 : e.map(String).join(";")) ? i : "") + "\n\n\t\t\tself.onmessage=function({data}) {\n\t\t\t\tconst result = (" + n + ").apply(null, data);\n\t\t\t\tself.postMessage(result);\n\t\t\t};"], { type: "text/javascript" })), s.URL.createObjectURL(de[a]) }(e, n),
                        o = new s.Worker(r);
                    a = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        o.postMessage(e), o.onmessage = function(t) { return s.URL.revokeObjectURL(r), i(t.data) }, o.onerror = function(t) { console.error(t) } } } else a = function() { var t = e.apply(void 0, arguments);
                    i(t) }; return a } var ue = f(5);

            function ge(t) { var e = []; return t.forEach((function(t, i) { var n = t[0];
                    t.forEach((function(t, a) { if (a > 0) { if (void 0 === e[a - 1] && (e[a - 1] = {}), void 0 === t) throw new Error("Source data is missing a component at (" + i + ", " + a + ")!");
                            e[a - 1][n] = t } })) })), e }

            function fe(t) { var e = t[0],
                    i = []; return t.forEach((function(t, n) { if (n > 0) { var a = {};
                        t.forEach((function(t, i) { if (void 0 === t) throw new Error("Source data is missing a component at (" + n + ", " + i + ")!");
                            a[e[i]] = t })), i.push(a) } })), i }

            function pe(t, e) { var i, n, a = []; return Array.isArray(t) ? (i = e.x ? e.value.concat(e.x) : e.value, a.push(i), t.forEach((function(t) { var e = i.map((function(e) { var i = function(t, e) { if (void 0 !== t[e]) return t[e]; var i = e.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "").split("."),
                                n = t; return i.some((function(t) { return !(n = n && t in n ? n[t] : void 0) })), n }(t, e); return void 0 === i && (i = null), i }));
                    a.push(e) })), n = fe(a)) : (Object.keys(t).forEach((function(e) { var i = t[e].concat();
                    i.unshift(e), a.push(i) })), n = ge(a)), n }

            function ve(t, e) { var n, a = this,
                    r = t.rows(e); return 1 === r.length ? (n = [{}], r[0].forEach(function(t) { i(this, a), n[0][t] = null }.bind(this))) : n = t.parse(e), n }

            function xe(t) { return ve({ rows: ue.csvParseRows, parse: ue.csvParse }, t) }

            function be(t) { return ve({ rows: ue.tsvParseRows, parse: ue.tsvParse }, t) }

            function _e(t, e) { var i = t || (null == e ? void 0 : e.data_keys); return null != i && i.x && (e.data_x = i.x), i } var me = { convertData: function(t, e) { var n = this,
                            a = this.config,
                            r = a.boost_useWorker,
                            s = t; if (t.bindto && (s = {}, ["url", "mimeType", "headers", "keys", "json", "keys", "rows", "columns"].forEach(function(e) { i(this, n); var a = "data_" + e;
                                a in t && (s[e] = t[a]) }.bind(this))), s.url && e) ! function(t, e, i, n, a) { void 0 === e && (e = "csv"); var r = new XMLHttpRequest,
                                s = { csv: xe, tsv: be, json: pe };
                            r.open("GET", t), i && Object.keys(i).forEach((function(t) { r.setRequestHeader(t, i[t]) })), r.onreadystatechange = function() { if (4 === r.readyState) { if (200 !== r.status) throw new Error(t + ": Something went wrong loading!"); var i = r.responseText;
                                    i && a.call(this, s[e]("json" === e ? JSON.parse(i) : i, n)) } }, r.send() }(s.url, s.mimeType, s.headers, _e(s.keys, a), e);
                        else if (s.json) he(r, pe, e, [ge, fe])(s.json, _e(s.keys, a));
                        else if (s.rows) he(r, fe, e)(s.rows);
                        else if (s.columns) he(r, ge, e)(s.columns);
                        else if (t.bindto) throw Error("url or json or rows or columns is required.") }, convertDataToTargets: function(t, e) { var n = this,
                            a = this,
                            r = a.axis,
                            s = a.config,
                            o = a.state,
                            l = !1,
                            c = !1,
                            d = !1;
                        r && (l = r.isCategorized(), c = r.isTimeSeries(), d = r.isCustomX()); var h, u = Object.keys(t[0] || {}),
                            g = u.length ? u.filter(a.isNotX, a) : [],
                            f = u.length ? u.filter(a.isX, a) : [];
                        g.forEach(function(r) { var o = this;
                            i(this, n); var l = this.getXKey(r);
                            d || c ? f.indexOf(l) >= 0 ? h = (e && a.data.xs[r] || []).concat(t.map(function(t) { return i(this, o), t[l] }.bind(this)).filter(b).map(function(t, e) { return i(this, o), a.generateTargetX(t, r, e) }.bind(this))) : s.data_x ? h = this.getOtherTargetXs() : L(s.data_xs) && (h = a.getXValuesOfXKey(l, a.data.targets)) : h = t.map(function(t, e) { return i(this, o), e }.bind(this)), h && (this.data.xs[r] = h) }.bind(this)), g.forEach(function(t) { if (i(this, n), !this.data.xs[t]) throw new Error('x is not defined for id = "' + t + '".') }.bind(this)); var p = g.map(function(e, r) { var c = this;
                            i(this, n); var h = s.data_idConverter.bind(a.api)(e),
                                u = a.getXKey(e),
                                g = d && l,
                                f = g && t.map(function(t) { return i(this, c), t.x }.bind(this)).every(function(t) { return i(this, c), s.axis_x_categories.indexOf(t) > -1 }.bind(this)),
                                p = t.__append__,
                                v = null === u && p ? a.api.data.values(e).length : 0; return { id: h, id_org: e, values: t.map(function(t, n) { i(this, c); var l, d = t[u],
                                        x = t[e]; return x = null === x || isNaN(x) || P(x) ? O(x) || P(x) ? x : null : +x, !g && !o.hasRadar || 0 !== r || T(d) ? l = a.generateTargetX(d, e, v + n) : (f || 0 !== r || 0 !== n || p || (s.axis_x_categories = []), -1 === (l = s.axis_x_categories.indexOf(d)) && (l = s.axis_x_categories.length, s.axis_x_categories.push(d))), (T(x) || a.data.xs[e].length <= n) && (l = void 0), { x: l, value: x, id: h, index: -1 } }.bind(this)).filter(function(t) { return i(this, c), w(t.x) }.bind(this)) } }.bind(this)); return p.forEach(function(t) { var e, r = this;
                            i(this, n), s.data_xSort && (t.values = t.values.sort(function(t, e) { return i(this, r), (t.x || 0 === t.x ? t.x : 1 / 0) - (e.x || 0 === e.x ? e.x : 1 / 0) }.bind(this))), t.values.forEach(function(t, e) { return i(this, r), t.index = e }.bind(this)), null == (e = a.data.xs[t.id]) || e.sort(function(t, e) { return i(this, r), t - e }.bind(this)) }.bind(this)), o.hasNegativeValue = a.hasNegativeValueInTargets(p), o.hasPositiveValue = a.hasPositiveValueInTargets(p), s.data_type && a.setTargetType(a.mapToIds(p).filter(function(t) { return i(this, n), !(t in s.data_types) }.bind(this)), s.data_type), p.forEach(function(t) { return i(this, n), a.cache.add(t.id_org, t, !0) }.bind(this)), p } },
                ye = { isX: function(t) { var e = this.config,
                            n = e.data_x && t === e.data_x,
                            a = L(e.data_xs) && function(t, e) { var n = this,
                                    a = !1; return Object.keys(t).forEach(function(r) { return i(this, n), t[r] === e && (a = !0) }.bind(this)), a }(e.data_xs, t); return n || a }, isNotX: function(t) { return !this.isX(t) }, isStackNormalized: function() { var t = this.config; return !(!t.data_stack_normalize || !t.data_groups.length) }, isGrouped: function(t) { var e = this,
                            n = this.config.data_groups; return t ? n.some(function(n) { return i(this, e), n.indexOf(t) >= 0 && n.length > 1 }.bind(this)) : n.length > 0 }, getXKey: function(t) { var e = this.config; return e.data_x ? e.data_x : L(e.data_xs) ? e.data_xs[t] : null }, getXValuesOfXKey: function(t, e) { var n, a = this,
                            r = this; return (e && L(e) ? r.mapToIds(e) : []).forEach(function(e) { i(this, a), r.getXKey(e) === t && (n = r.data.xs[e]) }.bind(this)), n }, getIndexByX: function(t, e) { return e ? e.indexOf(m(t) ? t : +t) : (this.filterByX(this.data.targets, t)[0] || { index: null }).index }, getXValue: function(t, e) { var i = this; return t in i.data.xs && i.data.xs[t] && b(i.data.xs[t][e]) ? i.data.xs[t][e] : e }, getOtherTargetXs: function() { var t = Object.keys(this.data.xs); return t.length ? this.data.xs[t[0]] : null }, getOtherTargetX: function(t) { var e = this.getOtherTargetXs(); return e && t < e.length ? e[t] : null }, addXs: function(t) { var e = this,
                            n = this.config;
                        Object.keys(t).forEach(function(a) { i(this, e), n.data_xs[a] = t[a] }.bind(this)) }, isMultipleX: function() { return L(this.config.data_xs) || !this.config.data_xSort || this.hasType("bubble") || this.hasType("scatter") }, addName: function(t) { var e, i = this.config; return t && (e = i.data_names[t.id], t.name = void 0 !== e ? e : t.id), t }, getAllValuesOnIndex: function(t, e) { var n = this;
                        void 0 === e && (e = !1); var a = this,
                            r = a.filterTargetsToShow(a.data.targets).map(function(e) { return i(this, n), a.addName(a.getValueOnIndex(e.values, t)) }.bind(this)); return e && (r = r.filter(function(t) { return i(this, n), t && "value" in t && b(t.value) }.bind(this))), r }, getValueOnIndex: function(t, e) { var n = this,
                            a = t.filter(function(t) { return i(this, n), t.index === e }.bind(this)); return a.length ? a[0] : null }, updateTargetX: function(t, e) { var n = this,
                            a = this;
                        t.forEach(function(t) { var r = this;
                            i(this, n), t.values.forEach(function(n, s) { i(this, r), n.x = a.generateTargetX(e[s], t.id, s) }.bind(this)), a.data.xs[t.id] = e }.bind(this)) }, updateTargetXs: function(t, e) { var n = this,
                            a = this;
                        t.forEach(function(t) { i(this, n), e[t.id] && a.updateTargetX([t], e[t.id]) }.bind(this)) }, generateTargetX: function(t, e, i) { var n = this,
                            a = n.axis,
                            r = null != a && a.isCategorized() ? i : t || i; if (null != a && a.isTimeSeries()) { var s = nt.bind(n);
                            r = s(t || n.getXValue(e, i)) } else null == a || !a.isCustomX() || null != a && a.isCategorized() || (r = b(t) ? +t : n.getXValue(e, i)); return r }, updateXs: function(t) { var e = this;
                        t.length && (this.axis.xs = t.map(function(t) { return i(this, e), t.x }.bind(this))) }, getPrevX: function(t) { var e = this.axis.xs[t - 1]; return w(e) ? e : null }, getNextX: function(t) { var e = this.axis.xs[t + 1]; return w(e) ? e : null }, getBaseValue: function(t) { var e = this,
                            i = e.state.hasAxis,
                            n = t.value; return n && i && (e.isAreaRangeType(t) ? n = e.getRangedData(t, "mid") : e.isBubbleZType(t) && (n = e.getBubbleZData(n, "y"))), n }, getMinMaxValue: function(t) { var e, n, a = this,
                            r = this.getBaseValue.bind(this); return (t || this.data.targets.map(function(t) { return i(this, a), t.values }.bind(this))).forEach(function(t, s) { i(this, a); var o = t.map(r).filter(y);
                            e = Math.min.apply(Math, [s ? e : 1 / 0].concat(o)), n = Math.max.apply(Math, [s ? n : -1 / 0].concat(o)) }.bind(this)), { min: e, max: n } }, getMinMaxData: function() { var t = this,
                            e = this,
                            n = Jt,
                            a = e.cache.get(n); if (!a) { var r = e.data.targets.map(function(e) { return i(this, t), e.values }.bind(this)),
                                s = e.getMinMaxValue(r),
                                o = [],
                                l = [];
                            r.forEach(function(n) { i(this, t); var a = e.getFilteredDataByValue(n, s.min),
                                    r = e.getFilteredDataByValue(n, s.max);
                                a.length && (o = o.concat(a)), r.length && (l = l.concat(r)) }.bind(this)), e.cache.add(n, a = { min: o, max: l }) } return a }, getTotalPerIndex: function() { var t = this,
                            e = this,
                            n = te,
                            a = e.cache.get(n); return e.isStackNormalized() && !a && (a = [], e.data.targets.forEach(function(e) { var n = this;
                            i(this, t), e.values.forEach(function(t, e) { i(this, n), a[e] || (a[e] = 0), a[e] += y(t.value) ? t.value : 0 }.bind(this)) }.bind(this))), a }, getTotalDataSum: function(t) { var e = this,
                            n = this,
                            a = Qt,
                            r = n.cache.get(a); if (!y(r)) { var s = q(n.data.targets.map(function(t) { return i(this, e), t.values }.bind(this))).map(function(t) { return i(this, e), t.value }.bind(this)).reduce(function(t, n) { return i(this, e), t + n }.bind(this));
                            n.cache.add(a, r = s) } return t && (r -= n.getHiddenTotalDataSum()), r }, getHiddenTotalDataSum: function() { var t = this,
                            e = this.api,
                            n = this.state.hiddenTargetIds,
                            a = 0; return n.length && (a = e.data.values.bind(e)(n).reduce(function(e, n) { return i(this, t), e + n }.bind(this))), a }, getFilteredDataByValue: function(t, e) { var n = this; return t.filter(function(t) { return i(this, n), this.getBaseValue(t) === e }.bind(this)) }, getMaxDataCount: function() { var t = this; return Math.max.apply(Math, this.data.targets.map(function(e) { return i(this, t), e.values.length }.bind(this))) }, getMaxDataCountTarget: function() { var t = this,
                            e = this.filterTargetsToShow() || [],
                            n = e.length; return n > 1 ? e = J(Z(e = e.map(function(e) { return i(this, t), e.values }.bind(this)).reduce(function(e, n) { return i(this, t), e.concat(n) }.bind(this)).map(function(e) { return i(this, t), e.x }.bind(this)))).map(function(e, n) { return i(this, t), { x: e, index: n } }.bind(this)) : n && (e = e[0].values), e }, mapToIds: function(t) { var e = this; return t.map(function(t) { return i(this, e), t.id }.bind(this)) }, mapToTargetIds: function(t) { return t ? O(t) ? t.concat() : [t] : this.mapToIds(this.data.targets) }, hasTarget: function(t, e) { for (var i, n = this.mapToIds(t), a = 0; i = n[a]; a++)
                            if (i === e) return !0;
                        return !1 }, isTargetToShow: function(t) { return this.state.hiddenTargetIds.indexOf(t) < 0 }, isLegendToShow: function(t) { return this.state.hiddenLegendIds.indexOf(t) < 0 }, filterTargetsToShow: function(t) { var e = this,
                            n = this; return (t || n.data.targets).filter(function(t) { return i(this, e), n.isTargetToShow(t.id) }.bind(this)) }, mapTargetsToUniqueXs: function(t) { var e = this,
                            n = this.axis,
                            a = []; return null != t && t.length && (a = Z(q(t.map(function(t) { var n = this; return i(this, e), t.values.map(function(t) { return i(this, n), +t.x }.bind(this)) }.bind(this)))), a = null != n && n.isTimeSeries() ? a.map(function(t) { return i(this, e), new Date(+t) }.bind(this)) : a.map(Number)), J(a) }, addTargetIds: function(t, e) { var n = this,
                            a = this.state;
                        (O(e) ? e : [e]).forEach(function(e) { i(this, n), a[t].indexOf(e) < 0 && a[t].push(e) }.bind(this)) }, removeTargetIds: function(t, e) { var n = this,
                            a = this.state;
                        (O(e) ? e : [e]).forEach(function(e) { i(this, n); var r = a[t].indexOf(e);
                            r >= 0 && a[t].splice(r, 1) }.bind(this)) }, addHiddenTargetIds: function(t) { this.addTargetIds("hiddenTargetIds", t) }, removeHiddenTargetIds: function(t) { this.removeTargetIds("hiddenTargetIds", t) }, addHiddenLegendIds: function(t) { this.addTargetIds("hiddenLegendIds", t) }, removeHiddenLegendIds: function(t) { this.removeTargetIds("hiddenLegendIds", t) }, getValuesAsIdKeyed: function(t) { var e = this,
                            n = this,
                            a = n.state.hasAxis,
                            r = {},
                            s = n.isMultipleX(),
                            o = s ? n.mapTargetsToUniqueXs(t).map(function(t) { return i(this, e), m(t) ? t : +t }.bind(this)) : null; return t.forEach(function(t) { var l = this;
                            i(this, e); var c = [];
                            t.values.filter(function(t) { var e = t.value; return i(this, l), b(e) || null === e }.bind(this)).forEach(function(t) { i(this, l); var e = t.value;
                                null !== e && n.isCandlestickType(t) && (e = O(e) ? e.slice(0, 4) : [e.open, e.high, e.low, e.close]), O(e) ? c.push.apply(c, e) : P(e) && "high" in e ? c.push.apply(c, Object.values(e)) : n.isBubbleZType(t) ? c.push(a && n.getBubbleZData(e, "y")) : s ? c[n.getIndexByX(t.x, o)] = e : c.push(e) }.bind(this)), r[t.id] = c }.bind(this)), r }, checkValueInTargets: function(t, e) { for (var i, n = Object.keys(t), a = 0; a < n.length; a++) { i = t[n[a]].values; for (var r = 0; r < i.length; r++)
                                if (e(i[r].value)) return !0 } return !1 }, hasMultiTargets: function() { return this.filterTargetsToShow().length > 1 }, hasNegativeValueInTargets: function(t) { var e = this; return this.checkValueInTargets(t, function(t) { return i(this, e), t < 0 }.bind(this)) }, hasPositiveValueInTargets: function(t) { var e = this; return this.checkValueInTargets(t, function(t) { return i(this, e), t > 0 }.bind(this)) }, orderTargets: function(t) { var e = [].concat(t),
                            i = this.getSortCompareFn(); return i && e.sort(i), e }, getSortCompareFn: function(t) { var e = this;
                        void 0 === t && (t = !1); var n, a = this.config.data_order,
                            r = /asc/i.test(a),
                            s = /desc/i.test(a); if (r || s) { var o = function(t, n) { return i(this, e), t + Math.abs(n.value) }.bind(this);
                            n = function(n, a) { i(this, e); var s = "values" in n ? n.values.reduce(o, 0) : n.value,
                                    l = "values" in a ? a.values.reduce(o, 0) : a.value; return t ? r ? s - l : l - s : r ? l - s : s - l }.bind(this) } else _(a) && (n = a.bind(this.api)); return n || null }, filterByX: function(t, e) { var n = this; return q(t.map(function(t) { return i(this, n), t.values }.bind(this))).filter(function(t) { return i(this, n), t.x - e == 0 }.bind(this)) }, filterRemoveNull: function(t) { var e = this; return t.filter(function(t) { return i(this, e), b(this.getBaseValue(t)) }.bind(this)) }, filterByXDomain: function(t, e) { var n = this; return t.map(function(t) { var a = this; return i(this, n), { id: t.id, id_org: t.id_org, values: t.values.filter(function(t) { return i(this, a), e[0] <= t.x && t.x <= e[1] }.bind(this)) } }.bind(this)) }, hasDataLabel: function() { var t = this.config.data_labels; return A(t) && t || R(t) && L(t) }, getDataIndexFromEvent: function(t) { var e = this.config,
                            i = this.state,
                            n = i.inputType,
                            a = i.eventReceiver,
                            r = a.coords,
                            s = a.rect,
                            o = e.axis_rotated,
                            l = "touch" === n && t.changedTouches ? t.changedTouches[0] : t; return j(r, o ? l.clientY - s.top : l.clientX - s.left, 0, r.length - 1, o) }, getDataLabelLength: function(t, e, n) { var a = this,
                            r = this,
                            s = [0, 0]; return r.$el.chart.select("svg").selectAll(".dummy").data([t, e]).enter().append("text").text(function(t) { return i(this, a), r.dataLabelFormat(t.id)(t) }.bind(this)).each((function(t, e) { s[e] = 1.3 * this.getBoundingClientRect()[n] })).remove(), s }, isNoneArc: function(t) { return this.hasTarget(this.data.targets, t.id) }, isArc: function(t) { return "data" in t && this.hasTarget(this.data.targets, t.data.id) }, findSameXOfValues: function(t, e) { var i, n = t[e].x,
                            a = []; for (i = e - 1; i >= 0 && n === t[i].x; i--) a.push(t[i]); for (i = e; i < t.length && n === t[i].x; i++) a.push(t[i]); return a }, findClosestFromTargets: function(t, e) { var n = this,
                            a = this,
                            r = t.map(function(t) { return i(this, n), a.findClosest(t.values, e) }.bind(this)); return a.findClosest(r, e) }, findClosest: function(t, e) { var n, a = this,
                            r = this,
                            s = r.config,
                            o = r.$el.main,
                            l = t.filter(function(t) { return i(this, a), t && b(t.value) }.bind(this)),
                            c = s.point_sensitivity; return l.filter(function(t) { return i(this, a), r.isBarType(t.id) || r.isCandlestickType(t.id) }.bind(this)).forEach(function(t) { i(this, a); var e = r.isBarType(t.id) ? "." + gt.chartBar + "." + ct.target + r.getTargetSelectorSuffix(t.id) + " ." + gt.bar + "-" + t.index : "." + ft.chartCandlestick + "." + ct.target + r.getTargetSelectorSuffix(t.id) + " ." + ft.candlestick + "-" + t.index + " path";!n && r.isWithinBar(o.select(e).node()) && (n = t) }.bind(this)), l.filter(function(t) { return i(this, a), !r.isBarType(t.id) && !r.isCandlestickType(t.id) }.bind(this)).forEach(function(t) { i(this, a); var s = r.dist(t, e);
                            s < c && (c = s, n = t) }.bind(this)), n }, dist: function(t, e) { var i = this,
                            n = i.config.axis_rotated,
                            a = i.scale,
                            r = n ? 1 : 0,
                            s = n ? 0 : 1,
                            o = i.circleY(t, t.index),
                            l = (a.zoom || a.x)(t.x); return Math.sqrt(Math.pow(l - e[r], 2) + Math.pow(o - e[s], 2)) }, convertValuesToStep: function(t) { var e = this.axis,
                            i = this.config.line_step_type,
                            n = !!e && e.isCategorized(),
                            a = O(t) ? t.concat() : [t]; if (!n && !/step\-(after|before)/.test(i)) return t; var r = a[0],
                            s = a[a.length - 1],
                            o = r.id,
                            l = r.x; return a.unshift({ x: --l, value: r.value, id: o }), n && "step-after" === i && a.unshift({ x: --l, value: r.value, id: o }), l = s.x, a.push({ x: ++l, value: s.value, id: o }), n && "step-before" === i && a.push({ x: ++l, value: s.value, id: o }), a }, convertValuesToRange: function(t) { var e = this,
                            n = O(t) ? t.concat() : [t],
                            a = []; return n.forEach(function(t) { i(this, e); var n = t.x,
                                r = t.id;
                            a.push({ x: n, id: r, value: t.value[0] }), a.push({ x: n, id: r, value: t.value[2] }) }.bind(this)), a }, updateDataAttributes: function(t, e) { var n = this,
                            a = this.config["data_" + t]; return T(e) || (Object.keys(e).forEach(function(t) { i(this, n), a[t] = e[t] }.bind(this)), this.redraw({ withLegend: !0 })), a }, getRangedData: function(t, e, i) { void 0 === e && (e = ""), void 0 === i && (i = "areaRange"); var n = null == t ? void 0 : t.value; if (O(n)) { var a = { areaRange: ["high", "mid", "low"], candlestick: ["open", "high", "low", "close", "volume"] }[i].indexOf(e); return a >= 0 && n ? n[a] : void 0 } return n ? n[e] : n }, getRatio: function(t, e, n) { var a = this;
                        void 0 === n && (n = !1); var r = this,
                            s = r.config,
                            o = r.state,
                            l = r.api,
                            c = 0; if (e && l.data.shown().length)
                            if (c = e.ratio || e.value, "arc" === t)
                                if (r.pie.padAngle()()) c = e.value / r.getTotalDataSum(!0);
                                else { var d = s.gauge_fullCircle ? r.getArcLength() : -2 * r.getStartAngle(),
                                        h = r.hasType("gauge") ? d : 2 * Math.PI;
                                    c = (e.endAngle - e.startAngle) / h }
                        else if ("index" === t) { var u = l.data.values.bind(l),
                                g = this.getTotalPerIndex(); if (o.hiddenTargetIds.length) { var f = u(o.hiddenTargetIds, !1);
                                f.length && (f = f.reduce(function(t, e) { var n = this; return i(this, a), t.map(function(t, a) { return i(this, n), (y(t) ? t : 0) + e[a] }.bind(this)) }.bind(this)), g = g.map(function(t, e) { return i(this, a), t - f[e] }.bind(this))) }
                            e.ratio = y(e.value) && g && g[e.index] > 0 ? e.value / g[e.index] : 0, c = e.ratio } else if ("radar" === t) c = parseFloat(Math.max(e.value, 0) + "") / o.current.dataMax * s.radar_size_ratio;
                        else if ("bar" === t) { var p = r.getYScaleById.bind(r)(e.id).domain().reduce(function(t, e) { return i(this, a), e - t }.bind(this));
                            c = 0 === p ? 0 : Math.abs(e.value) / p } return n && c ? 100 * c : c }, updateDataIndexByX: function(t) { var e = this,
                            n = t.reduce(function(t, n, a) { return i(this, e), t[+n.x] = a, t }.bind(this), {});
                        this.data.targets.forEach(function(t) { var a = this;
                            i(this, e), t.values.forEach(function(t, e) { i(this, a); var r = n[+t.x];
                                void 0 === r && (r = e), t.index = r }.bind(this)) }.bind(this)) }, isBubbleZType: function(t) { return this.isBubbleType(t) && (P(t.value) && ("z" in t.value || "y" in t.value) || O(t.value) && 2 === t.value.length) }, isBarRangeType: function(t) { var e = this,
                            n = t.value; return this.isBarType(t) && O(n) && 2 === n.length && n.every(function(t) { return i(this, e), y(t) }.bind(this)) }, getDataById: function(t) { var e, i = this.cache.get(t) || this.api.data(t); return null != (e = null == i ? void 0 : i[0]) ? e : i } },
                Te = { load: function(t, e) { var n, a = this,
                            r = this,
                            s = e.append,
                            o = t;
                        o && (e.filter && (o = o.filter(e.filter)), (e.type || e.types) && o.forEach(function(t) { var n;
                            i(this, a); var s = (null == (n = e.types) ? void 0 : n[t.id]) || e.type;
                            r.setTargetType(t.id, s) }.bind(this)), r.data.targets.forEach(function(t) { i(this, a); for (var e = 0; e < o.length; e++)
                                if (t.id === o[e].id) { t.values = s ? t.values.concat(o[e].values) : o[e].values, o.splice(e, 1); break } }.bind(this)), r.data.targets = r.data.targets.concat(o)), r.updateTargets(r.data.targets), r.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 }), r.updateTypesElements(), null == (n = e.done) || n.call(r.api) }, loadFromArgs: function(t) { var e = this,
                            n = this;
                        n.config && (n.cache.reset(), n.convertData(t, function(a) { i(this, e); var r = t.data || a;
                            t.append && (r.__append__ = !0), r && n.load(n.convertDataToTargets(r), t) }.bind(this))) }, unload: function(t, e) { var n = this,
                            a = this,
                            r = a.state,
                            s = a.$el,
                            o = a.$T,
                            l = e,
                            c = t;
                        (a.cache.reset(), l || (l = function() { i(this, n) }.bind(this)), (c = c.filter(function(t) { return i(this, n), a.hasTarget(a.data.targets, t) }.bind(this))) && 0 !== c.length) ? (o(s.svg.selectAll(c.map(function(t) { return i(this, n), a.selectorTarget(t) }.bind(this)))).style("opacity", "0").remove().call(z, l), c.forEach(function(t) { var e = this;
                            i(this, n), r.withoutFadeIn[t] = !1, s.legend && s.legend.selectAll("." + _t.legendItem + a.getTargetSelectorSuffix(t)).remove(), a.data.targets = a.data.targets.filter(function(n) { return i(this, e), n.id !== t }.bind(this)) }.bind(this)), a.updateTypesElements()) : l() } },
                we = f(7),
                Ae = { selectRectForSingle: function(t, e, n) { var a = this,
                            r = this,
                            s = r.config,
                            o = r.$el.main,
                            l = s.data_selection_enabled,
                            c = s.data_selection_grouped,
                            d = s.data_selection_isselectable,
                            h = s.tooltip_grouped,
                            u = r.getAllValuesOnIndex(n); if (!h || (r.showTooltip(u, t), null == r.showGridFocus || r.showGridFocus(u), l && !c)) { o.selectAll("." + ct.EXPANDED + ":not(." + Et.shape + "-" + n + ")").classed(ct.EXPANDED, !1); var g = o.selectAll("." + Et.shape + "-" + n).classed(ct.EXPANDED, !0).style("cursor", d ? "pointer" : null).filter((function(t) { return r.isWithinShape(this, t) }));
                            g.empty() && !h && (null == r.hideGridFocus || r.hideGridFocus(), r.hideTooltip(), c || r.setExpand(n)), g.call(function(s) { var o = this;
                                i(this, a); var u = s.data();
                                l && (c || null != d && d.bind(r.api)(u)) && e.style("cursor", "pointer"), h || (r.showTooltip(u, t), null == r.showGridFocus || r.showGridFocus(u), null == r.unexpandCircles || r.unexpandCircles(), s.each(function(t) { return i(this, o), r.setExpand(n, t.id) }.bind(this))) }.bind(this)) } }, setExpand: function(t, e, i) { var n = this,
                            a = n.config;
                        n.$el.circle && a.point_focus_expand_enabled && n.expandCircles(t, e, i), n.expandBarTypeShapes(!0, t, e, i) }, expandBarTypeShapes: function(t, e, n, a) { var r = this;
                        void 0 === t && (t = !0); var s = this;
                        ["bar", "candlestick"].filter(function(t) { return i(this, r), s.$el[t] }.bind(this)).forEach(function(o) { i(this, r), a && s.$el[o].classed(ct.EXPANDED, !1), s.getShapeByIndex(o, e, n).classed(ct.EXPANDED, t) }.bind(this)) }, setOverOut: function(t, e) { var n = this,
                            r = this,
                            s = r.config,
                            o = r.state.hasRadar,
                            l = r.$el.main,
                            c = P(e); if (c || -1 !== e) { var d = s[t ? "data_onover" : "data_onout"].bind(r.api); if (s.color_onover && r.setOverColor(t, e, c), c) d(e, l.select("." + dt.arc + r.getTargetSelectorSuffix(e.id)).node());
                            else if (s.tooltip_grouped) t && (s.point_focus_only && o ? r.showCircleFocus(r.getAllValuesOnIndex(e, !0)) : r.setExpand(e, null, !0)), r.isMultipleX() || l.selectAll("." + Et.shape + "-" + e).each((function(t) { d(t, this) }));
                            else { var h = r.cache.get(ne) || [],
                                    u = l.selectAll("." + Et.shape + "-" + e).filter((function(t) { return r.isWithinShape(this, t) })),
                                    g = u.filter((function() { var t = this; return h.every(function(e) { return i(this, t), e !== this }.bind(this)) })); if (!t || u.empty() || h.length === g.size() && g.nodes().every(function(t, e) { return i(this, n), t !== h[e] }.bind(this)))
                                    for (; h.length;) { var f = h.pop();
                                        s.data_onout.bind(r.api)((0, a.select)(f).datum(), f) }
                                g.each((function() { t && (d((0, a.select)(this).datum(), this), h.push(this)) })), r.cache.add(ne, h) } } }, callOverOutForTouch: function(t) { var e = this,
                            i = e.cache.get(ae);
                        (P(t) && i ? t.id !== i.id : t !== i) && ((i || y(i)) && e.setOverOut(!1, i), (t || y(t)) && e.setOverOut(!0, t), e.cache.add(ae, t)) }, getDraggableSelection: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.state; return n.interaction_enabled && n.data_selection_draggable && e.drag ? (0, we.drag)().on("drag", (function(t) { a.event = t, e.drag(F(t, this)) })).on("start", (function(t) { a.event = t, e.dragstart(F(t, this)) })).on("end", function(n) { i(this, t), a.event = n, e.dragend() }.bind(this)) : function() { i(this, t) }.bind(this) }, dispatchEvent: function(t, e, n) { var a = this,
                            r = this,
                            s = r.config,
                            o = r.state,
                            l = o.eventReceiver,
                            c = o.hasAxis,
                            d = o.hasRadar,
                            h = r.$el,
                            u = h.eventRect,
                            g = h.arcs,
                            f = h.radar,
                            p = r.isMultipleX(),
                            v = (d ? f.axes.select("." + ut.axis + "-" + e + " text") : u || g.selectAll("." + ct.target + " path").filter(function(t, n) { return i(this, a), n === e }.bind(this))).node(),
                            x = v.getBoundingClientRect(),
                            b = x.width,
                            _ = x.left,
                            m = x.top; if (c && !d && !p) { var y = l.coords[e];
                            b = y.w, _ += y.x, m += y.y } var T = _ + (n ? n[0] : 0) + (p || s.axis_rotated ? 0 : b / 2),
                            w = m + (n ? n[1] : 0);
                        et[/^(mouse|click)/.test(t) ? "mouse" : "touch"](v, t, { screenX: T, screenY: w, clientX: T, clientY: w }) }, setDragStatus: function(t) { this.state.dragging = t }, unbindZoomEvent: function() { var t = this.$el,
                            e = t.eventRect,
                            i = t.zoomResetBtn;
                        null == e || e.on(".zoom wheel.zoom .drag", null), null == i || i.on("click", null).style("display", "none") }, unbindAllEvents: function() { var t = this,
                            e = this,
                            n = e.$el,
                            a = n.arcs,
                            r = n.eventRect,
                            s = n.legend,
                            o = n.region,
                            l = n.svg,
                            c = e.brush;
                        [l, r, null == o ? void 0 : o.list, null == c ? void 0 : c.getSelection(), null == a ? void 0 : a.selectAll("path"), null == s ? void 0 : s.selectAll("g")].forEach(function(e) { return i(this, t), null == e ? void 0 : e.on("wheel click mouseover mousemove mouseout touchstart touchmove touchend touchstart.eventRect touchmove.eventRect touchend.eventRect .brush .drag .zoom wheel.zoom dblclick.zoom", null) }.bind(this)), null == e.unbindZoomEvent || e.unbindZoomEvent() } },
                ke = { generateClass: function(t, e) { return " " + t + " " + (t + this.getTargetSelectorSuffix(e)) }, getClass: function(t, e) { var n = this,
                            a = /s$/.test(t),
                            r = /^(area|arc|line)s?$/.test(t),
                            s = a ? "id" : "index"; return function(o) { i(this, n); var l = o.data || o; return ((e ? this.generateClass(Dt[a ? "shapes" : "shape"], l[s]) : "") + this.generateClass(Dt[t], l[r ? "id" : s])).trim() }.bind(this) }, getChartClass: function(t) { var e = this; return function(n) { return i(this, e), Dt["chart" + t] + this.classTarget((n.data ? n.data : n).id) }.bind(this) }, generateExtraLineClass: function() { var t = this.config.line_classes || [],
                            e = []; return function(i) { var n, a = i.id || (null == (n = i.data) ? void 0 : n.id) || i; return e.indexOf(a) < 0 && e.push(a), t[e.indexOf(a) % t.length] } }, classRegion: function(t, e) { return this.generateClass(Dt.region, e) + " " + ("class" in t ? t.class : "") }, classTarget: function(t) { var e = this.config.data_classes[t],
                            i = ""; return e && (i = " " + Dt.target + "-" + e), this.generateClass(Dt.target, t) + i }, classFocus: function(t) { return this.classFocused(t) + this.classDefocused(t) }, classFocused: function(t) { return " " + (this.state.focusedTargetIds.indexOf(t.id) >= 0 ? Dt.focused : "") }, classDefocused: function(t) { return " " + (this.state.defocusedTargetIds.indexOf(t.id) >= 0 ? Dt.defocused : "") }, getTargetSelectorSuffix: function(t) { return (t || 0 === t ? "-" + t : "").replace(/([\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\])/g, "-") }, selectorTarget: function(t, e) { var i = e || "",
                            n = this.getTargetSelectorSuffix(t); return i + "." + (Dt.target + n) + ", " + i + "." + (Dt.circles + n) }, selectorTargets: function(t, e) { var n = this,
                            a = t || []; return a.length ? a.map(function(t) { return i(this, n), this.selectorTarget(t, e) }.bind(this)) : null }, selectorLegend: function(t) { return "." + (Dt.legendItem + this.getTargetSelectorSuffix(t)) }, selectorLegends: function(t) { var e = this; return null != t && t.length ? t.map(function(t) { return i(this, e), this.selectorLegend(t) }.bind(this)) : null } },
                Se = f(6),
                Ce = function(t, e, n) { i(this, undefined); var r = (0, a.select)(t.cloneNode(!0)); return r.attr("id", n).insert("rect", ":first-child").attr("width", r.attr("width")).attr("height", r.attr("height")).style("fill", e), { id: n, node: r.node() } }.bind(void 0); var Re = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
                Ee = { generateColor: function() { var t = this,
                            e = this,
                            n = e.$el,
                            a = e.config,
                            r = a.data_colors,
                            s = a.data_color,
                            l = [],
                            c = L(a.color_pattern) ? a.color_pattern : (0, Se.scaleOrdinal)(function(t) { var e = this,
                                    n = Kt,
                                    a = o.body,
                                    r = a[n]; if (!r) { var s = t.classed(vt.colorPattern, !0).style("background-image");
                                    t.classed(vt.colorPattern, !1), s.indexOf(";") > -1 && (r = s.replace(/url[^#]*|["'()]|(\s|%20)/g, "").split(";").map(function(t) { return i(this, e), t.trim().replace(/[\"'\s]/g, "") }.bind(this)).filter(Boolean), a[n] = r) } return r }(n.chart) || Re).range(),
                            d = c; if (_(a.color_tiles)) { var h = a.color_tiles.bind(e.api)(),
                                u = c.map(function(n, a) { i(this, t); var r = n.replace(/[#\(\)\s,]/g, ""),
                                        s = e.state.datetimeId + "-pattern-" + r + "-" + a; return Ce(h[a % h.length], n, s) }.bind(this));
                            c = u.map(function(e) { return i(this, t), "url(#" + e.id + ")" }.bind(this)), e.patterns = u } return function(t) { var i, n, o = t.id || (null == (i = t.data) ? void 0 : i.id) || t,
                                h = e.isTypeOf(o, ["line", "spline", "step"]) || !a.data_types[o]; return _(r[o]) ? n = r[o].bind(e.api)(t) : r[o] ? n = r[o] : (l.indexOf(o) < 0 && l.push(o), n = h ? d[l.indexOf(o) % d.length] : c[l.indexOf(o) % c.length], r[o] = n), _(s) ? s.bind(e.api)(n, t) : n } }, generateLevelColor: function() { var t = this.config,
                            e = t.color_pattern,
                            i = t.color_threshold,
                            n = "value" === i.unit,
                            a = i.max || 100,
                            r = i.values && i.values.length ? i.values : []; return L(i) ? function(t) { for (var i = n ? t : 100 * t / a, s = e[e.length - 1], o = 0, l = r.length; o < l; o++)
                                if (i <= r[o]) { s = e[o]; break }
                            return s } : null }, generateDataLabelBackgroundColorFilter: function(t) { var e = this,
                            n = this,
                            a = n.$el,
                            r = n.config,
                            s = n.state,
                            o = t || r.data_labels_backgroundColors; if (o) { var l = [];
                            m(o) ? l.push("") : P(o) && (l = Object.keys(o)), l.forEach(function(r) { i(this, e); var l = s.datetimeId + "-labels-bg" + n.getTargetSelectorSuffix(r) + (t ? n.getTargetSelectorSuffix(t) : "");
                                a.defs.append("filter").attr("x", "0").attr("y", "0").attr("width", "1").attr("height", "1").attr("id", l).html('<feFlood flood-color="' + ("" === r ? o : o[r]) + '" /><feComposite in="SourceGraphic"/>') }.bind(this)) } }, getGradienColortUrl: function(t) { return "url(#" + this.state.datetimeId + "-gradient" + this.getTargetSelectorSuffix(t) + ")" }, updateLinearGradient: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.data.targets,
                            r = e.state.datetimeId,
                            s = e.$el.defs;
                        a.forEach(function(a) { var o = this;
                            i(this, t); var l = r + "-gradient" + e.getTargetSelectorSuffix(a.id),
                                c = e.isAreaType(a) ? "area" : e.isBarType(a) && "bar",
                                d = n.axis_rotated; if (c && s.select("#" + l).empty()) { var h = e.color(a),
                                    u = n[c + "_linearGradient"],
                                    g = u.x,
                                    f = void 0 === g ? d ? [1, 0] : [0, 0] : g,
                                    p = u.y,
                                    v = void 0 === p ? d ? [0, 0] : [0, 1] : p,
                                    x = u.stops,
                                    b = void 0 === x ? [
                                        [0, h, 1],
                                        [1, h, 0]
                                    ] : x,
                                    m = s.append("linearGradient").attr("id", "" + l).attr("x1", f[0]).attr("x2", f[1]).attr("y1", v[0]).attr("y2", v[1]);
                                b.forEach(function(t) { i(this, o); var n = _(t[1]) ? t[1].bind(e.api)(a.id) : t[1];
                                    m.append("stop").attr("offset", t[0]).attr("stop-color", n || h).attr("stop-opacity", t[2]) }.bind(this)) } }.bind(this)) }, setOverColor: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = a.$el.main,
                            o = r.color_onover,
                            l = t ? o : a.color;
                        P(l) ? l = function(t) { var e = t.id; return i(this, n), e in o ? o[e] : a.color(e) }.bind(this) : m(l) ? l = function() { return i(this, n), o }.bind(this) : _(o) && (l = l.bind(a.api)), s.selectAll(P(e) ? "." + dt.arc + a.getTargetSelectorSuffix(e.id) : "." + Et.shape + "-" + e).style("fill", l) } },
                Le = { getYDomainMinMax: function(t, e) { var n = this,
                            a = this,
                            r = a.axis,
                            s = a.config,
                            o = "min" === e,
                            l = s.data_groups,
                            c = a.mapToIds(t),
                            d = a.getValuesAsIdKeyed(t); if (l.length > 0) { var h = a["has" + (o ? "Negative" : "Positive") + "ValueInTargets"](t);
                            l.forEach(function(t) { var e = this;
                                i(this, n); var a = t.filter(function(t) { return i(this, e), c.indexOf(t) >= 0 }.bind(this)); if (a.length) { var s = a[0],
                                        l = r.getId(s);
                                    h && d[s] && (d[s] = d[s].map(function(t) { return i(this, e), (o ? t < 0 : t > 0) ? t : 0 }.bind(this))), a.filter(function(t, n) { return i(this, e), n > 0 }.bind(this)).forEach(function(t) { var n = this; if (i(this, e), d[t]) { var a = r.getId(t);
                                            d[t].forEach(function(t, e) { i(this, n); var r = +t;
                                                a !== l || h && (o ? r > 0 : r < 0) || (d[s][e] += r) }.bind(this)) } }.bind(this)) } }.bind(this)) } return Q(e, Object.keys(d).map(function(t) { return i(this, n), Q(e, d[t]) }.bind(this))) }, isHiddenTargetWithYDomain: function(t) { var e = this,
                            n = this; return n.state.hiddenTargetIds.some(function(a) { return i(this, e), n.axis.getId(a) === t }.bind(this)) }, getYDomain: function(t, e, n) { var a = this,
                            r = this,
                            s = r.axis,
                            o = r.config,
                            c = r.scale,
                            h = "axis_" + e; if (r.isStackNormalized()) return [0, 100]; var u = (null == c ? void 0 : c[e]) && "log" === c[e].type,
                            g = t.filter(function(t) { return i(this, a), s.getId(t.id) === e }.bind(this)),
                            f = n ? r.filterByXDomain(g, n) : g; if (0 === f.length) return r.isHiddenTargetWithYDomain(e) ? c[e].domain() : "y2" === e ? c.y.domain() : r.getYDomain(t, "y2", n); var p = o[h + "_min"],
                            v = o[h + "_max"],
                            x = o[h + "_center"],
                            _ = o[h + "_inverted"],
                            m = r.hasDataLabel() && o.axis_rotated,
                            y = r.hasDataLabel() && !o.axis_rotated,
                            T = r.getYDomainMinMax(f, "min"),
                            A = r.getYDomainMinMax(f, "max"),
                            k = [l.BAR, l.BUBBLE, l.SCATTER].concat(d.Line).some(function(t) { i(this, a); var e = t.indexOf("area") > -1 ? "area" : t; return r.hasType(t, f, !0) && o[e + "_zerobased"] }.bind(this));
                        T = b(p) ? p : b(v) ? T < v ? T : v - 10 : T, A = b(v) ? v : b(p) ? p < A ? A : p + 10 : A, isNaN(T) && (T = 0), isNaN(A) && (A = T), T === A && (T < 0 ? A = 0 : T = 0); var S = T >= 0 && A >= 0,
                            R = T <= 0 && A <= 0;
                        (b(p) && S || b(v) && R) && (k = !1), k && (S && (T = 0), R && (A = 0)); var E = Math.abs(A - T),
                            O = { top: .1 * E, bottom: .1 * E }; if (w(x)) { var P = Math.max(Math.abs(T), Math.abs(A));
                            A = x + P, T = x - P } if (m) { var I = C(c.y.range()),
                                D = r.getDataLabelLength(T, A, "width").map(function(t) { return i(this, a), t / I }.bind(this));
                            ["bottom", "top"].forEach(function(t, e) { i(this, a), O[t] += E * (D[e] / (1 - D[0] - D[1])) }.bind(this)) } else if (y) { var z = r.getDataLabelLength(T, A, "height");
                            ["bottom", "top"].forEach(function(t, e) { i(this, a), O[t] += r.convertPixelToScale("y", z[e], E) }.bind(this)) }
                        O = r.getResettedPadding(O); var M = o[h + "_padding"];
                        L(M) && ["bottom", "top"].forEach(function(t) { i(this, a), O[t] = s.getPadding(M, t, O[t], E) }.bind(this)), k && (S && (O.bottom = T), R && (O.top = -A)); var X = u ? [T, A].map(function(t) { return i(this, a), t < 0 ? 0 : t }.bind(this)) : [T - O.bottom, A + O.top]; return _ ? X.reverse() : X }, getXDomainMinMax: function(t, e) { var n, a = this,
                            r = this.config["axis_x_" + e],
                            s = Q(e, t.map(function(t) { var n = this; return i(this, a), Q(e, t.values.map(function(t) { return i(this, n), t.x }.bind(this))) }.bind(this))),
                            o = P(r) ? r.value : r; return o = w(o) && null != (n = this.axis) && n.isTimeSeries() ? nt.bind(this)(o) : o, P(r) && r.fit && ("min" === e && o < s || "max" === e && o > s) && (o = void 0), w(o) ? o : s }, getXDomainPadding: function(t, e) { var i, n = this,
                            a = n.axis,
                            r = n.config.axis_x_padding,
                            s = a.isTimeSeries() && e,
                            o = C(t); if (a.isCategorized() || s) i = 0;
                        else if (n.hasType("bar")) { var l = n.getMaxDataCount();
                            i = l > 1 ? o / (l - 1) / 2 : .5 } else i = n.getResettedPadding(.01 * o); var c = y(r) ? { left: r, right: r } : r,
                            d = c.left,
                            h = void 0 === d ? i : d,
                            u = c.right,
                            g = void 0 === u ? i : u; if ("px" === r.unit) { var f = Math.abs(o + .2 * o);
                            h = a.getPadding(r, "left", i, f), g = a.getPadding(r, "right", i, f) } else { var p = o + h + g; if (s && p) { var v = o / e / p;
                                h = h / p / v, g = g / p / v } } return { left: h, right: g } }, getXDomain: function(t) { var e = this,
                            i = e.axis,
                            n = e.scale.x,
                            a = [e.getXDomainMinMax(t, "min"), e.getXDomainMinMax(t, "max")],
                            r = a[0],
                            s = void 0 === r ? 0 : r,
                            o = a[1],
                            l = void 0 === o ? 0 : o; if ("log" !== n.type) { var c = i.isCategorized(),
                                d = i.isTimeSeries(),
                                h = e.getXDomainPadding(a),
                                u = a[0],
                                g = a[1];
                            u - g != 0 || c || (d ? (u = new Date(.5 * u.getTime()), g = new Date(1.5 * g.getTime())) : (u = 0 === u ? 1 : .5 * u, g = 0 === g ? -1 : 1.5 * g)), (u || 0 === u) && (s = d ? new Date(u.getTime() - h.left) : u - h.left), (g || 0 === g) && (l = d ? new Date(g.getTime() + h.right) : g + h.right) } return [s, l] }, updateXDomain: function(t, e, i, n, a) { var r, s = this,
                            o = s.config,
                            l = s.org,
                            c = s.scale,
                            d = c.x,
                            h = c.subX,
                            u = o.zoom_enabled;
                        i && (d.domain(a || J(s.getXDomain(t))), l.xDomain = d.domain(), u && s.zoom.updateScaleExtent(), h.domain(d.domain()), null == (r = s.brush) || r.scale(h)); if (e) { var g = a || !s.brush || Y(s) ? l.xDomain : B(s).map(h.invert);
                            d.domain(g), u && s.zoom.updateScaleExtent() } return n && d.domain(s.trimXDomain(d.orgDomain())), d.domain() }, trimXDomain: function(t) { var e = this.getZoomDomain(),
                            i = e[0],
                            n = e[1]; return t[0] <= i && (t[1] = +t[1] + (i - t[0]), t[0] = i), n <= t[1] && (t[0] = +t[0] - (t[1] - n), t[1] = n), t }, getZoomDomain: function() { var t = this.config,
                            e = this.org.xDomain,
                            i = e[0],
                            n = e[1]; return w(t.zoom_x_min) && (i = Q("min", [i, t.zoom_x_min])), w(t.zoom_x_max) && (n = Q("max", [n, t.zoom_x_max])), [i, n] }, convertPixelToScale: function(t, e, i) { var n = this.config,
                            a = this.state,
                            r = n.axis_rotated; return i * (e / a["x" === t ? r ? "height" : "width" : r ? "width" : "height"]) } };

            function Oe(t, e, i) { var n = t.config,
                    a = "axis_" + e + "_tick_format"; return (n[a] ? n[a] : t.defaultValueFormat)(i) } var Pe = { yFormat: function(t) { return Oe(this, "y", t) }, y2Format: function(t) { return Oe(this, "y2", t) }, getDefaultValueFormat: function() { var t = this,
                        e = t.defaultArcValueFormat,
                        i = t.yFormat,
                        n = t.y2Format,
                        a = t.hasArcType(null, ["gauge", "polar", "radar"]); return function(r, s, o) { return (a ? e : t.axis && "y2" === t.axis.getId(o) ? n : i).call(t, r, s) } }, defaultValueFormat: function(t) { return b(t) ? +t : "" }, defaultArcValueFormat: function(t, e) { return (100 * e).toFixed(1) + "%" }, defaultPolarValueFormat: function(t) { return "" + t }, dataLabelFormat: function(t) { var e = this,
                        n = this.config.data_labels,
                        a = function(t) { return i(this, e), b(t) ? +t : "" }.bind(this),
                        r = a; return _(n.format) ? r = n.format : R(n.format) && (r = n.format[t] ? !0 === n.format[t] ? a : n.format[t] : function() { return i(this, e), "" }.bind(this)), r.bind(this.api) } };

            function Ie(t) { var e = this,
                    i = e.getDataById(t); return e.levelColor ? e.levelColor(i.values[0].value) : e.color(i) } var De = { initLegend: function() { var t = this,
                            e = t.config,
                            i = t.$el;
                        t.legendItemTextBox = {}, t.state.legendHasRendered = !1, e.legend_show ? (e.legend_contents_bindto || (i.legend = t.$el.svg.append("g").classed(_t.legend, !0).attr("transform", t.getTranslate("legend"))), t.updateLegend()) : t.state.hiddenLegendIds = t.mapToIds(t.data.targets) }, updateLegend: function(t, e, i) { var n = this,
                            a = n.config,
                            r = n.state,
                            s = n.scale,
                            o = n.$el,
                            l = e || { withTransform: !1, withTransitionForTransform: !1, withTransition: !1 };
                        l.withTransition = I(l, "withTransition", !0), l.withTransitionForTransform = I(l, "withTransitionForTransform", !0), a.legend_contents_bindto && a.legend_contents_template ? n.updateLegendTemplate() : n.updateLegendElement(t || n.mapToIds(n.data.targets), l, i), o.legend.selectAll("." + _t.legendItem).classed(_t.legendItemHidden, (function(t) { var e = !n.isTargetToShow(t); return e && (this.style.opacity = null), e })), n.updateScales(!1, !s.zoom), n.updateSvgSize(), n.transformAll(l.withTransitionForTransform, i), r.legendHasRendered = !0 }, updateLegendTemplate: function() { var t = this,
                            e = this,
                            n = e.config,
                            r = e.$el,
                            s = (0, a.select)(n.legend_contents_bindto),
                            o = n.legend_contents_template; if (!s.empty()) { var l = e.mapToIds(e.data.targets),
                                c = [],
                                d = "";
                            l.forEach(function(n) { i(this, t); var a = _(o) ? o.bind(e.api)(n, e.color(n), e.api.data(n)[0].values) : it(o, { COLOR: e.color(n), TITLE: n });
                                a && (c.push(n), d += a) }.bind(this)); var h = s.html(d).selectAll((function() { return this.childNodes })).data(c);
                            e.setLegendItem(h), r.legend = s } }, updateSizeForLegend: function(t) { var e = this,
                            i = e.config,
                            n = e.state,
                            a = n.isLegendTop,
                            r = n.isLegendLeft,
                            s = n.isLegendRight,
                            o = n.isLegendInset,
                            l = n.current,
                            c = t.width,
                            d = t.height,
                            h = { top: a ? e.getCurrentPaddingTop() + i.legend_inset_y + 5.5 : l.height - d - e.getCurrentPaddingBottom() - i.legend_inset_y, left: r ? e.getCurrentPaddingLeft() + i.legend_inset_x + .5 : l.width - c - e.getCurrentPaddingRight() - i.legend_inset_x + .5 };
                        e.state.margin3 = { top: s ? 0 : o ? h.top : l.height - d, right: NaN, bottom: 0, left: s ? l.width - c : o ? h.left : 0 } }, transformLegend: function(t) { var e = this,
                            i = e.$el.legend;
                        (0, e.$T)(i, t).attr("transform", e.getTranslate("legend")) }, updateLegendStep: function(t) { this.state.legendStep = t }, updateLegendItemWidth: function(t) { this.state.legendItemWidth = t }, updateLegendItemHeight: function(t) { this.state.legendItemHeight = t }, updateLegendItemColor: function(t, e) { var i = this.$el.legend;
                        i && i.select("." + _t.legendItem + "-" + t + " line").style("stroke", e) }, getLegendWidth: function() { var t = this.state,
                            e = t.current.width,
                            i = t.isLegendRight,
                            n = t.isLegendInset,
                            a = t.legendItemWidth,
                            r = t.legendStep; return this.config.legend_show ? i || n ? a * (r + 1) : e : 0 }, getLegendHeight: function() { var t = this.state,
                            e = t.current,
                            i = t.isLegendRight,
                            n = t.legendItemHeight,
                            a = t.legendStep; return this.config.legend_show ? i ? e.height : Math.max(20, n) * (a + 1) : 0 }, opacityForUnfocusedLegend: function(t) { return t.classed(_t.legendItemHidden) ? null : "0.3" }, toggleFocusLegend: function(t, e) { var n = this,
                            r = this,
                            s = r.$el.legend,
                            o = r.$T,
                            l = r.mapToTargetIds(t);
                        s && o(s.selectAll("." + _t.legendItem).filter(function(t) { return i(this, n), l.indexOf(t) >= 0 }.bind(this)).classed(Tt.legendItemFocused, e)).style("opacity", (function() { return e ? null : r.opacityForUnfocusedLegend.call(r, (0, a.select)(this)) })) }, revertLegend: function() { var t = this.$el.legend,
                            e = this.$T;
                        t && e(t.selectAll("." + _t.legendItem).classed(Tt.legendItemFocused, !1)).style("opacity", null) }, showLegend: function(t) { var e = this,
                            i = e.config,
                            n = e.$el,
                            a = e.$T;
                        i.legend_show || (i.legend_show = !0, n.legend ? n.legend.style("visibility", null) : e.initLegend(), e.state.legendHasRendered || e.updateLegend()), e.removeHiddenLegendIds(t), a(n.legend.selectAll(e.selectorLegends(t)).style("visibility", null)).style("opacity", null) }, hideLegend: function(t) { var e = this,
                            i = e.config,
                            n = e.$el.legend;
                        i.legend_show && E(t) && (i.legend_show = !1, n.style("visibility", "hidden")), e.addHiddenLegendIds(t), n.selectAll(e.selectorLegends(t)).style("opacity", "0").style("visibility", "hidden") }, getLegendItemTextBox: function(t, e) { var i, n = this,
                            a = n.cache,
                            r = n.state,
                            s = ee; return t && ((i = !r.redrawing && a.get(s) || {})[t] || (i[t] = n.getTextRect(e, _t.legendItem), a.add(s, i)), i = i[t]), i }, setLegendItem: function(t) { var e = this,
                            n = this,
                            r = n.$el,
                            s = n.api,
                            o = n.config,
                            l = n.state,
                            c = "touch" === l.inputType,
                            d = n.hasType("gauge"),
                            h = o.boost_useCssRule;
                        t.attr("class", (function(t) { var e = (0, a.select)(this); return (!e.empty() && e.attr("class") || "") + n.generateClass(_t.legendItem, t) })).style("visibility", function(t) { return i(this, e), n.isLegendToShow(t) ? null : "hidden" }.bind(this)), o.interaction_enabled && (h && [
                            ["." + _t.legendItem, "cursor:pointer"],
                            ["." + _t.legendItem + " text", "pointer-events:none"],
                            ["." + _t.legendItemPoint + " text", "pointer-events:none"],
                            ["." + _t.legendItemTile, "pointer-events:none"],
                            ["." + _t.legendItemEvent, "fill-opacity:0"]
                        ].forEach(function(t) { i(this, e); var a = t[0],
                                s = t[1];
                            n.setCssRule(!1, a, [s])(r.legend) }.bind(this)), t.style("cursor", n.getStylePropValue("pointer")).on("click", (function(t, e) { D(o.legend_item_onclick, s, e) || (t.altKey ? (s.hide(), s.show(e)) : (s.toggle(e), (0, a.select)(this).classed(Tt.legendItemFocused, !1))), c && n.hideTooltip() })), c || t.on("mouseout", (function(t, e) { D(o.legend_item_onout, s, e) || ((0, a.select)(this).classed(Tt.legendItemFocused, !1), d && n.undoMarkOverlapped(n, "." + bt.gaugeValue), n.api.revert()) })).on("mouseover", (function(t, e) { D(o.legend_item_onover, s, e) || ((0, a.select)(this).classed(Tt.legendItemFocused, !0), d && n.markOverlapped(e, n, "." + bt.gaugeValue), !l.transiting && n.isTargetToShow(e) && s.focus(e)) }))) }, updateLegendElement: function(t, e) { var n, a, r, s = this,
                            o = this,
                            l = o.config,
                            c = o.state,
                            d = o.$el.legend,
                            h = o.$T,
                            u = "circle" !== l.legend_item_tile_type,
                            g = l.legend_item_tile_r,
                            f = { width: u ? l.legend_item_tile_width : 2 * g, height: u ? l.legend_item_tile_height : 2 * g },
                            p = { padding: { top: 4, right: 10 }, max: { width: 0, height: 0 }, posMin: 10, step: 0, tileWidth: f.width + 5, totalLength: 0 },
                            v = { offsets: {}, widths: {}, heights: {}, margins: [0], steps: {} },
                            x = t.filter(function(t) { return i(this, s), !w(l.data_names[t]) || null !== l.data_names[t] }.bind(this)),
                            b = e.withTransition,
                            _ = o.getUpdateLegendPositions(x, p, v);
                        c.isLegendInset && (p.step = l.legend_inset_step ? l.legend_inset_step : x.length, o.updateLegendStep(p.step)), c.isLegendRight ? (n = function(t) { return i(this, s), p.max.width * v.steps[t] }.bind(this), a = function(t) { return i(this, s), v.margins[v.steps[t]] + v.offsets[t] }.bind(this)) : c.isLegendInset ? (n = function(t) { return i(this, s), p.max.width * v.steps[t] + 10 }.bind(this), a = function(t) { return i(this, s), v.margins[v.steps[t]] + v.offsets[t] }.bind(this)) : (n = function(t) { return i(this, s), v.margins[v.steps[t]] + v.offsets[t] }.bind(this), a = function(t) { return i(this, s), p.max.height * v.steps[t] }.bind(this)); var m = { xText: function(t, e) { return i(this, s), n(t, e) + 4 + f.width }.bind(this), xRect: function(t, e) { return i(this, s), n(t, e) }.bind(this), x1Tile: function(t, e) { return i(this, s), n(t, e) - 2 }.bind(this), x2Tile: function(t, e) { return i(this, s), n(t, e) - 2 + f.width }.bind(this), yText: function(t, e) { return i(this, s), a(t, e) + 9 }.bind(this), yRect: function(t, e) { return i(this, s), a(t, e) - 5 }.bind(this), yTile: function(t, e) { return i(this, s), a(t, e) + 4 }.bind(this) };
                        o.generateLegendItem(x, f, _, m), r = d.select("." + _t.legendBackground + " rect"), c.isLegendInset && p.max.width > 0 && 0 === r.size() && (r = d.insert("g", "." + _t.legendItem).attr("class", _t.legendBackground).append("rect")), h(d.selectAll("text").data(x).text(function(t) { return i(this, s), w(l.data_names[t]) ? l.data_names[t] : t }.bind(this)).each((function(t, e) { _(this, t, e) })), b).attr("x", m.xText).attr("y", m.yText), h(d.selectAll("rect." + _t.legendItemEvent).data(x), b).attr("width", function(t) { return i(this, s), v.widths[t] }.bind(this)).attr("height", function(t) { return i(this, s), v.heights[t] }.bind(this)).attr("x", m.xRect).attr("y", m.yRect), o.updateLegendItemPos(x, b, m), r && h(r, b).attr("height", o.getLegendHeight() - 12).attr("width", p.max.width * (p.step + 1) + 10), o.updateLegendItemWidth(p.max.width), o.updateLegendItemHeight(p.max.height), o.updateLegendStep(p.step) }, getUpdateLegendPositions: function(t, e, n) { var a = this,
                            r = a.config,
                            s = a.state,
                            o = s.isLegendRight || s.isLegendInset; return function(l, c, d) { var h, u = this,
                                g = d === t.length - 1,
                                f = a.getLegendItemTextBox(c, l),
                                p = f.width + e.tileWidth + (g && !o ? 0 : e.padding.right) + r.legend_padding,
                                v = f.height + e.padding.top,
                                x = o ? v : p,
                                b = o ? a.getLegendHeight() : a.getLegendWidth(),
                                _ = function(t, i) { i || (h = (b - e.totalLength - x) / 2) < e.posMin && (h = (b - x) / 2, e.totalLength = 0, e.step++), n.steps[t] = e.step, n.margins[e.step] = s.isLegendInset ? 10 : h, n.offsets[t] = e.totalLength, e.totalLength += x }; if (0 === d && (e.totalLength = 0, e.step = 0, e.max.width = 0, e.max.height = 0), r.legend_show && !a.isLegendToShow(c)) return n.widths[c] = 0, n.heights[c] = 0, n.steps[c] = 0, void(n.offsets[c] = 0);
                            n.widths[c] = p, n.heights[c] = v, (!e.max.width || p >= e.max.width) && (e.max.width = p), (!e.max.height || v >= e.max.height) && (e.max.height = v); var m = o ? e.max.height : e.max.width;
                            r.legend_equally ? (Object.keys(n.widths).forEach(function(t) { return i(this, u), n.widths[t] = e.max.width }.bind(this)), Object.keys(n.heights).forEach(function(t) { return i(this, u), n.heights[t] = e.max.height }.bind(this)), (h = (b - m * t.length) / 2) < e.posMin ? (e.totalLength = 0, e.step = 0, t.forEach(function(t) { return i(this, u), _(t) }.bind(this))) : _(c, !0)) : _(c) } }, generateLegendItem: function(t, e, n, r) { var s = this,
                            l = this,
                            c = l.config,
                            d = l.state,
                            h = l.$el.legend,
                            u = c.legend_usePoint,
                            g = c.legend_item_tile_r,
                            f = c.legend_item_tile_type,
                            p = "circle" !== f,
                            v = d.isLegendRight || d.isLegendInset,
                            x = h.selectAll("." + _t.legendItem).data(t).enter().append("g"); if (l.setLegendItem(x), x.append("text").text(function(t) { return i(this, s), w(c.data_names[t]) ? c.data_names[t] : t }.bind(this)).each((function(t, e) { n(this, t, e) })).style("pointer-events", l.getStylePropValue("none")).attr("x", v ? r.xText : -200).attr("y", v ? -200 : r.yText), x.append("rect").attr("class", _t.legendItemEvent).style("fill-opacity", l.getStylePropValue("0")).attr("x", v ? r.xRect : -200).attr("y", v ? -200 : r.yRect), u) { var b = [];
                            x.append(function(t) { i(this, s); var e = L(c.point_pattern) ? c.point_pattern : [c.point_type]; - 1 === b.indexOf(t) && b.push(t); var n = e[b.indexOf(t) % e.length]; return "rectangle" === n && (n = "rect"), o.createElementNS(a.namespaces.svg, "hasValidPointType" in l && l.hasValidPointType(n) ? n : "use") }.bind(this)).attr("class", _t.legendItemPoint).style("fill", Ie.bind(l)).style("pointer-events", l.getStylePropValue("none")).attr("href", function(t, e, n) { i(this, s); var a = n[e].nodeName.toLowerCase(),
                                    r = l.getTargetSelectorSuffix(t); return "use" === a ? "#" + d.datetimeId + "-point" + r : void 0 }.bind(this)) } else x.append(p ? "line" : f).attr("class", _t.legendItemTile).style("stroke", Ie.bind(l)).style("pointer-events", l.getStylePropValue("none")).call(function(t) { i(this, s), "circle" === f ? t.attr("r", g).style("fill", Ie.bind(l)).attr("cx", v ? r.x2Tile : -200).attr("cy", v ? -200 : r.yTile) : p && t.attr("stroke-width", e.height).attr("x1", v ? r.x1Tile : -200).attr("y1", v ? -200 : r.yTile).attr("x2", v ? r.x2Tile : -200).attr("y2", v ? -200 : r.yTile) }.bind(this)) }, updateLegendItemPos: function(t, e, n) { var r = this,
                            s = this,
                            o = s.config,
                            l = s.$el.legend,
                            c = s.$T,
                            d = o.legend_usePoint,
                            h = o.legend_item_tile_type;
                        d ? c(l.selectAll("." + _t.legendItemPoint).data(t), e).each((function() { var t = this,
                                e = this.nodeName.toLowerCase(),
                                r = o.point_r,
                                s = "x",
                                l = "y",
                                c = 2,
                                d = 2.5,
                                h = null,
                                u = null,
                                g = null; if ("circle" === e) { var f = .2 * r;
                                s = "cx", l = "cy", h = r + f, c = 2 * r, d = -f } else if ("rect" === e) { var p = 2.5 * r;
                                u = p, g = p, d = 3 }(0, a.select)(this).attr(s, function(e) { return i(this, t), n.x1Tile(e) + c }.bind(this)).attr(l, function(e) { return i(this, t), n.yTile(e) - d }.bind(this)).attr("r", h).attr("width", u).attr("height", g) })) : c(l.selectAll("." + _t.legendItemTile).data(t), e).style("stroke", Ie.bind(s)).call(function(t) { var e = this;
                            i(this, r), "circle" === h ? t.attr("cx", function(t) { i(this, e); var a = n.x2Tile(t); return a - (a - n.x1Tile(t)) / 2 }.bind(this)).attr("cy", n.yTile) : "circle" !== h && t.attr("x1", n.x1Tile).attr("y1", n.yTile).attr("x2", n.x2Tile).attr("y2", n.yTile) }.bind(this)) } },
                ze = f(8),
                Me = { redraw: function(t) { var e, n = this;
                        void 0 === t && (t = {}); var a = this,
                            r = a.config,
                            s = a.state,
                            o = a.$el,
                            l = o.main;
                        s.redrawing = !0; var c = a.filterTargetsToShow(a.data.targets),
                            d = t,
                            h = d.flow,
                            u = d.initializing,
                            g = a.getWithOption(t),
                            f = g.Transition ? r.transition_duration : 0,
                            p = g.TransitionForExit ? f : 0,
                            v = g.TransitionForAxis ? f : 0,
                            x = null == (e = a.axis) ? void 0 : e.generateTransitions(v);
                        a.updateSizes(u), g.Legend && r.legend_show ? (t.withTransition = !!f, a.updateLegend(a.mapToIds(a.data.targets), t, x)) : g.Dimension && a.updateDimension(!0), a.hasArcType() && !s.hasRadar || a.updateCircleY && (a.circleY = a.updateCircleY()), s.hasAxis ? (a.axis.redrawAxis(c, g, x, h, u), r.data_empty_label_text && l.select("text." + Ot.text + "." + ct.empty).attr("x", s.width / 2).attr("y", s.height / 2).text(r.data_empty_label_text).style("display", c.length ? "none" : null), a.hasGrid() && a.updateGrid(), r.regions.length && a.updateRegion(), ["bar", "candlestick", "line", "area"].forEach(function(t) { i(this, n); var e = H(t);
                            (/^(line|area)$/.test(t) && a.hasTypeOf(e) || a.hasType(t)) && a["update" + e](g.TransitionForExit) }.bind(this)), o.text && l.selectAll("." + Rt.selectedCircles).filter(a.isBarType.bind(a)).selectAll("circle").remove(), r.interaction_enabled && !h && g.EventRect && (a.redrawEventRect(), null == a.bindZoomEvent || a.bindZoomEvent())) : (o.arcs && a.redrawArc(f, p, g.Transform), o.radar && a.redrawRadar(), o.polar && a.redrawPolar()), s.resizing || !a.hasPointType() && !s.hasRadar || a.updateCircle(), a.hasDataLabel() && !a.hasArcType(null, ["radar"]) && a.updateText(), null == a.redrawTitle || a.redrawTitle(), u && a.updateTypesElements(), a.generateRedrawList(c, h, f, g.Subchart), a.callPluginHook("$redraw", t, f) }, generateRedrawList: function(t, e, n, a) { var r = this,
                            s = this,
                            o = s.config,
                            l = s.state,
                            c = s.getDrawShape();
                        l.hasAxis && o.subchart_show && s.redrawSubchart(a, n, c); var d = e && s.generateFlow({ targets: t, flow: e, duration: e.duration, shape: c, xv: s.xv.bind(s) }),
                            h = (n || d) && at(),
                            u = s.getRedrawList(c, e, d, h),
                            g = function() { i(this, r), d && d(), l.redrawing = !1, D(o.onrendered, s.api) }.bind(this); if (g)
                            if (h && u.length) { var f = ce();
                                (0, ze.transition)().duration(n).each(function() { var t = this;
                                    i(this, r), u.reduce(function(e, n) { return i(this, t), e.concat(n) }.bind(this), []).forEach(function(e) { return i(this, t), f.add(e) }.bind(this)) }.bind(this)).call(f, g) } else l.transiting || g();
                        s.mapToIds(s.data.targets).forEach(function(t) { i(this, r), l.withoutFadeIn[t] = !0 }.bind(this)) }, getRedrawList: function(t, e, n, a) { var r = this,
                            s = this,
                            o = s.config,
                            l = s.state,
                            c = l.hasAxis,
                            d = l.hasRadar,
                            h = s.$el.grid,
                            u = t.pos,
                            g = u.cx,
                            f = u.cy,
                            p = u.xForText,
                            v = u.yForText,
                            x = []; return c && ((o.grid_x_lines.length || o.grid_y_lines.length) && x.push(s.redrawGrid(a)), o.regions.length && x.push(s.redrawRegion(a)), Object.keys(t.type).forEach(function(e) { i(this, r); var n = H(e),
                                o = t.type[e];
                            (/^(area|line)$/.test(e) && s.hasTypeOf(n) || s.hasType(e)) && x.push(s["redraw" + n](o, a)) }.bind(this)), !e && h.main && x.push(s.updateGridFocus())), s.hasArcType() && !d || L(o.data_labels) && !1 !== o.data_labels && x.push(s.redrawText(p, v, e, a)), !s.hasPointType() && !d || o.point_focus_only || s.redrawCircle && x.push(s.redrawCircle(g, f, a, n)), x }, updateAndRedraw: function(t) { void 0 === t && (t = {}); var e, i = this,
                            n = i.config,
                            a = i.state;
                        t.withTransition = I(t, "withTransition", !0), t.withTransform = I(t, "withTransform", !1), t.withLegend = I(t, "withLegend", !1), t.withUpdateXDomain = !0, t.withUpdateOrgXDomain = !0, t.withTransitionForExit = !1, t.withTransitionForTransform = I(t, "withTransitionForTransform", t.withTransition), t.withLegend && n.legend_show || (a.hasAxis && (e = i.axis.generateTransitions(t.withTransitionForAxis ? n.transition_duration : 0)), i.updateScales(), i.updateSvgSize(), i.transformAll(t.withTransitionForTransform, e)), i.redraw(t, e) }, redrawWithoutRescale: function() { this.redraw({ withY: !1, withDimension: !1, withLegend: !1, withSubchart: !1, withEventRect: !1, withTransitionForAxis: !1 }) } };

            function Xe(t, e, i) { void 0 === t && (t = "linear"), void 0 === e && (e = 0), void 0 === i && (i = 1); var n = { linear: Se.scaleLinear, log: Se.scaleSymlog, _log: Se.scaleLog, time: Se.scaleTime, utc: Se.scaleUtc }[t](); return n.type = t, /_?log/.test(t) && n.clamp(!0), n.range([e, i]) } var $e = { getXScale: function(t, e, i, n) { var a = this,
                            r = a.scale.zoom || Xe(a.axis.getAxisType("x"), t, e); return a.getCustomizedScale(i ? r.domain(i) : r, n) }, getYScale: function(t, e, i, n) { var a = Xe(this.axis.getAxisType(t), e, i); return n && a.domain(n), a }, getYScaleById: function(t, e) { void 0 === e && (e = !1); var i = "y2" === this.axis.getId(t),
                            n = e ? i ? "subY2" : "subY" : i ? "y2" : "y"; return this.scale[n] }, getCustomizedScale: function(t, e) { var n = this,
                            a = this,
                            r = e || function() { return i(this, n), a.axis.x.tickOffset() }.bind(this),
                            s = function(e, i) { var n = t(e) + r(); return i ? n : Math.ceil(n) }; for (var o in t) s[o] = t[o]; return s.orgDomain = function() { return i(this, n), t.domain() }.bind(this), s.orgScale = function() { return i(this, n), t }.bind(this), a.axis.isCategorized() && (s.domain = function(e) { var i = e; return arguments.length ? (t.domain(i), s) : [(i = this.orgDomain())[0], i[1] + 1] }), s }, updateScales: function(t, e) { var n = this;
                        void 0 === e && (e = !0); var a = this,
                            r = a.axis,
                            s = a.config,
                            o = a.format,
                            l = a.org,
                            c = a.scale,
                            d = a.state,
                            h = d.width,
                            u = d.height,
                            g = d.width2,
                            f = d.height2; if (d.hasAxis) { var p, v = s.axis_rotated,
                                x = a.getResettedPadding(1),
                                b = { x: v ? x : 0, y: v ? 0 : u, subX: v ? 1 : 0, subY: v ? 0 : f },
                                _ = { x: v ? u : h, y: v ? h : x, subX: v ? u : h, subY: v ? g : 1 },
                                m = e && (null == (p = c.x) ? void 0 : p.orgDomain()),
                                y = e && l.xDomain;
                            c.x = a.getXScale(b.x, _.x, m, function() { return i(this, n), r.x.tickOffset() }.bind(this)), c.subX = a.getXScale(b.x, _.x, y, function(t) { var e; return i(this, n), t % 1 ? 0 : (null != (e = r.subX) ? e : r.x).tickOffset() }.bind(this)), o.xAxisTick = r.getXAxisTickFormat(), o.subXAxisTick = r.getXAxisTickFormat(!0), r.setAxis("x", c.x, s.axis_x_tick_outer, t), s.subchart_show && r.setAxis("subX", c.subX, s.axis_x_tick_outer, t), c.y = a.getYScale("y", b.y, _.y, c.y ? c.y.domain() : s.axis_y_default), c.subY = a.getYScale("y", b.subY, _.subY, c.subY ? c.subY.domain() : s.axis_y_default), r.setAxis("y", c.y, s.axis_y_tick_outer, t), s.axis_y2_show && (c.y2 = a.getYScale("y2", b.y, _.y, c.y2 ? c.y2.domain() : s.axis_y2_default), c.subY2 = a.getYScale("y2", b.subY, _.subY, c.subY2 ? c.subY2.domain() : s.axis_y2_default), r.setAxis("y2", c.y2, s.axis_y2_tick_outer, t)) } else null == a.updateArc || a.updateArc() }, xx: function(t) { var e = this.config,
                            i = this.scale,
                            n = i.x,
                            a = i.zoom,
                            r = e.zoom_enabled && a ? a : n; return t ? r(b(t.x) ? t.x : t) : null }, xv: function(t) { var e = this,
                            i = e.axis,
                            n = e.config,
                            a = e.scale,
                            r = a.x,
                            s = a.zoom,
                            o = n.zoom_enabled && s ? s : r,
                            l = e.getBaseValue(t); return i.isTimeSeries() ? l = nt.call(e, l) : i.isCategorized() && m(l) && (l = n.axis_x_categories.indexOf(l)), Math.ceil(o(l)) }, yv: function(t) { var e = this.scale,
                            i = e.y,
                            n = e.y2,
                            a = t.axis && "y2" === t.axis ? n : i; return Math.ceil(a(this.getBaseValue(t))) }, subxx: function(t) { return t ? this.scale.subX(t.x) : null } },
                Fe = f(9),
                Be = { getDrawShape: function() { var t = this,
                            e = this,
                            n = e.config.axis_rotated,
                            a = e.state.hasRadar,
                            r = { type: {}, indices: {}, pos: {} }; if (["bar", "candlestick", "line", "area"].forEach(function(n) { i(this, t); var a = H(/^(bubble|scatter)$/.test(n) ? "line" : n); if (e.hasType(n) || e.hasTypeOf(a) || "line" === n && (e.hasType("bubble") || e.hasType("scatter"))) { var s = e.getShapeIndices(e["is" + a + "Type"]),
                                        o = e["generateDraw" + a];
                                    r.indices[n] = s, r.type[n] = o ? o.bind(e)(s, !1) : void 0 } }.bind(this)), !e.hasArcType() || a) { var s = a ? e.radarCircleX : n ? e.circleY : e.circleX,
                                o = a ? e.radarCircleY : n ? e.circleX : e.circleY;
                            r.pos = { xForText: e.generateXYForText(r.indices, !0), yForText: e.generateXYForText(r.indices, !1), cx: (s || function() {}).bind(e), cy: (o || function() {}).bind(e) } } return r }, getShapeIndices: function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = a.data_xs,
                            s = L(r),
                            o = {},
                            l = s ? {} : 0; return s && Z(Object.keys(r).map(function(t) { return i(this, e), r[t] }.bind(this))).forEach(function(t) { i(this, e), l[t] = 0, o[t] = {} }.bind(this)), n.filterTargetsToShow(n.data.targets.filter(t, n)).forEach(function(t) { i(this, e); for (var n, s = (t.id in r ? r[t.id] : ""), c = s ? o[s] : o, d = 0; n = a.data_groups[d]; d++)
                                if (!(n.indexOf(t.id) < 0))
                                    for (var h, u = 0; h = n[u]; u++)
                                        if (h in c) { c[t.id] = c[h]; break }
                            T(c[t.id]) && (c[t.id] = s ? l[s]++ : l++, c.__max__ = (s ? l[s] : l) - 1) }.bind(this)), o }, getIndices: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = r.data_xs,
                            o = r.bar_indices_removeNull,
                            l = e.id,
                            c = e.index; if (a.isBarType(l) && o) { var d = {}; return a.getAllValuesOnIndex(c, !0).forEach(function(t, e) { i(this, n), d[t.id] = e, d.__max__ = e }.bind(this)), d } return L(s) ? t[s[l]] : t }, getIndicesMax: function(t) { var e = this; return L(this.config.data_xs) ? Object.keys(t).map(function(n) { return i(this, e), t[n].__max__ || 0 }.bind(this)).reduce(function(t, n) { return i(this, e), t + n }.bind(this)) : t.__max__ }, getShapeX: function(t, e, n) { var a = this,
                            r = this,
                            s = r.config,
                            o = r.scale,
                            l = n ? o.subX : o.zoom || o.x,
                            c = s.bar_overlap,
                            d = s.bar_padding,
                            h = function(t, e) { return i(this, a), t + e }.bind(this),
                            u = R(t) && (t._$total.length ? t._$total.reduce(h) / 2 : 0); return function(n) { i(this, a); var s = r.getIndices(e, n, "getShapeX"),
                                o = n.id in s ? s[n.id] : 0,
                                g = (s.__max__ || 0) + 1,
                                f = 0; if (L(n.x)) { var p = l(n.x, !0); if (u) { var v = t[n.id] || t._$width;
                                    f = c ? p - v / 2 : p - v + t._$total.slice(0, o + 1).reduce(h) - u } else f = p - (y(t) ? t : t._$width) * (g / 2 - (c ? 1 : o)) } return t && f && g > 1 && d && (o && (f += d * o), g > 2 ? f -= (g - 1) * d / 2 : 2 === g && (f -= d / 2)), f }.bind(this) }, getShapeY: function(t) { var e = this,
                            n = this,
                            a = n.isStackNormalized(); return function(r) { i(this, e); var s = r.value; return y(r) ? s = r : a ? s = n.getRatio("index", r, !0) : n.isBubbleZType(r) ? s = n.getBubbleZData(r.value, "y") : n.isBarRangeType(r) && (s = s[1]), n.getYScaleById(r.id, t)(s) }.bind(this) }, getShapeYMin: function(t) { var e = this,
                            i = e.axis.getId(t),
                            n = e.scale[i].domain()[0],
                            a = e.config["axis_" + i + "_inverted"]; return !e.isGrouped(t) && !a && n > 0 ? n : 0 }, getShapeOffsetData: function(t) { var e = this,
                            n = this,
                            a = n.orderTargets(n.filterTargetsToShow(n.data.targets.filter(t, n))),
                            r = n.isStackNormalized(),
                            s = a.map(function(t) { var a = this;
                                i(this, e); var s = t.values,
                                    o = {};
                                n.isStepType(t) && (s = n.convertValuesToStep(s)); var l = s.reduce(function(t, e) { i(this, a); var s = +e.x; return t[s] = e, o[s] = r ? n.getRatio("index", e, !0) : e.value, t }.bind(this), {}); return { id: t.id, rowValues: s, rowValueMapByXValue: l, values: o } }.bind(this)); return { indexMapByTargetId: a.reduce(function(t, n, a) { var r = n.id; return i(this, e), t[r] = a, t }.bind(this), {}), shapeOffsetTargets: s } }, getShapeOffset: function(t, e, n) { var a = this,
                            r = this,
                            s = r.getShapeOffsetData(t),
                            o = s.shapeOffsetTargets,
                            l = s.indexMapByTargetId,
                            c = r.config.data_groupsZeroAs; return function(t, s) { var d = this;
                            i(this, a); var h = t.id,
                                u = t.value,
                                g = t.x,
                                f = r.getIndices(e, t),
                                p = r.getYScaleById(h, n); if (r.isBarRangeType(t)) return p(u[0]); var v = +g,
                                x = p("zero" === c ? 0 : r.getShapeYMin(h)),
                                b = x; return o.filter(function(t) { return i(this, d), t.id !== h && f[t.id] === f[h] }.bind(this)).forEach(function(t) { i(this, d); var e = t.id,
                                    n = t.rowValueMapByXValue,
                                    a = t.rowValues,
                                    r = t.values; if (l[e] < l[h]) { var o, g = r[v],
                                        f = a[s]; if (f && +f.x === v || (f = n[v]), (null == (o = f) ? void 0 : o.value) * u >= 0 && y(g))(0 !== u || ("positive" === c && g > 0 || "negative" === c && g < 0)) && (b += p(g) - x) } }.bind(this)), b }.bind(this) }, getBarW: function(t, e, n) { var a = this,
                            r = this,
                            s = r.config,
                            o = r.org,
                            l = r.scale,
                            c = r.getMaxDataCount(),
                            d = "bar" === t && s.data_groups.length,
                            h = t + "_width",
                            u = l.zoom && !r.axis.isCategorized() ? o.xDomain.map(function(t) { return i(this, a), l.zoom(t) }.bind(this)).reduce(function(t, e) { return i(this, a), Math.abs(t) + e }.bind(this)) / c : e.tickInterval(c),
                            g = function(t) { i(this, a); var e = t ? s[h][t] : s[h],
                                    r = t ? e.ratio : s[h + "_ratio"],
                                    o = t ? e.max : s[h + "_max"],
                                    l = y(e) ? e : n ? u * r / n : 0; return o && l > o ? o : l }.bind(this),
                            f = g(); return !d && R(s[h]) && (f = { _$width: f, _$total: [] }, r.filterTargetsToShow(r.data.targets).forEach(function(t) { i(this, a), s[h][t.id] && (f[t.id] = g(t.id), f._$total.push(f[t.id] || f._$width)) }.bind(this))), f }, getShapeByIndex: function(t, e, n) { var a = this,
                            r = this.$el,
                            s = b(e) ? "-" + e : "",
                            o = r[t]; return o = o && !o.empty() ? o.filter(function(t) { return i(this, a), !n || t.id === n }.bind(this)).filter(function(t) { return i(this, a), !b(e) || t.index === e }.bind(this)) : (n ? r.main.selectAll("." + Dt[t + "s"] + this.getTargetSelectorSuffix(n)) : r.main).selectAll("." + Dt[t] + s) }, isWithinShape: function(t, e) { var i, n = this,
                            r = (0, a.select)(t); return n.isTargetToShow(e.id) ? null != n.hasValidPointType && n.hasValidPointType(t.nodeName) ? i = n.isStepType(e) ? n.isWithinStep(t, n.getYScaleById(e.id)(e.value)) : n.isWithinCircle(t, n.isBubbleType(e) ? 1.5 * n.pointSelectR(e) : 0) : "path" === t.nodeName && (i = !r.classed(Dt.bar) || n.isWithinBar(t)) : i = !1, i }, getInterpolate: function(t) { var e = this.getInterpolateType(t); return { basis: Fe.curveBasis, "basis-closed": Fe.curveBasisClosed, "basis-open": Fe.curveBasisOpen, bundle: Fe.curveBundle, cardinal: Fe.curveCardinal, "cardinal-closed": Fe.curveCardinalClosed, "cardinal-open": Fe.curveCardinalOpen, "catmull-rom": Fe.curveCatmullRom, "catmull-rom-closed": Fe.curveCatmullRomClosed, "catmull-rom-open": Fe.curveCatmullRomOpen, "monotone-x": Fe.curveMonotoneX, "monotone-y": Fe.curveMonotoneY, natural: Fe.curveNatural, "linear-closed": Fe.curveLinearClosed, linear: Fe.curveLinear, step: Fe.curveStep, "step-after": Fe.curveStepAfter, "step-before": Fe.curveStepBefore }[e] }, getInterpolateType: function(t) { var e = this,
                            i = e.config,
                            n = i.spline_interpolation_type,
                            a = e.isInterpolationType(n) ? n : "cardinal"; return e.isSplineType(t) ? a : e.isStepType(t) ? i.line_step_type : "linear" }, isWithinBar: function(t) { var e = F(this.state.event, t),
                            i = $(t),
                            n = i[0],
                            a = i[1],
                            r = Math.min(n.x, a.x),
                            s = Math.min(n.y, a.y),
                            o = this.config.bar_sensitivity,
                            l = t.getBBox(),
                            c = l.width,
                            d = l.height; return r - o < e[0] && e[0] < r + c + o && s - o < e[1] && e[1] < s + d + o } },
                Ne = { setContainerSize: function() { var t = this,
                            e = t.state;
                        e.current.width = t.getCurrentWidth(), e.current.height = t.getCurrentHeight() }, getCurrentWidth: function() { return this.config.size_width || this.getParentWidth() }, getCurrentHeight: function() { var t = this,
                            e = t.config,
                            i = e.size_height || t.getParentHeight(); return i > 0 ? i : 320 / (t.hasType("gauge") && !e.gauge_fullCircle ? 2 : 1) }, getCurrentPaddingTop: function() { var t = this,
                            e = t.config,
                            i = t.state.hasAxis,
                            n = t.$el,
                            a = i ? e.axis_y2_axes.length : 0,
                            r = b(e.padding_top) ? e.padding_top : 0; return n.title && n.title.node() && (r += t.getTitlePadding()), a && e.axis_rotated && (r += t.getHorizontalAxisHeight("y2") * a), r }, getCurrentPaddingBottom: function() { var t = this,
                            e = t.config,
                            i = t.state.hasAxis,
                            n = e.axis_rotated ? "y" : "x",
                            a = i ? e["axis_" + n + "_axes"].length : 0; return (b(e.padding_bottom) ? e.padding_bottom : 0) + (a ? t.getHorizontalAxisHeight(n) * a : 0) }, getCurrentPaddingLeft: function(t) { var e = this,
                            i = e.config,
                            n = e.state.hasAxis,
                            a = i.axis_rotated,
                            r = a ? "x" : "y",
                            s = n ? i["axis_" + r + "_axes"].length : 0,
                            o = n ? e.getAxisWidthByAxisId(r, t) : 0; return (b(i.padding_left) ? i.padding_left : n && a ? i.axis_x_show ? Math.max(k(o), 40) : 1 : !n || i.axis_y_show && !i.axis_y_inner ? k(o) : e.axis.getAxisLabelPosition("y").isOuter ? 30 : 1) + o * s }, getCurrentPaddingRight: function(t) { void 0 === t && (t = !1); var e = this,
                            i = e.config,
                            n = e.state.hasAxis,
                            a = e.state.isLegendRight ? e.getLegendWidth() + 20 : 0,
                            r = n ? i.axis_y2_axes.length : 0,
                            s = n ? e.getAxisWidthByAxisId("y2") : 0,
                            o = t ? e.axis.getXAxisTickTextY2Overflow(10) : 0; return (b(i.padding_right) ? i.padding_right + 1 : e.axis && i.axis_rotated ? 10 + a : !e.axis || i.axis_y2_show && !i.axis_y2_inner ? Math.max(k(s) + a, o) : Math.max(2 + a + (e.axis.getAxisLabelPosition("y2").isOuter ? 20 : 0), o)) + s * r }, getParentRectValue: function(t) { for (var e = "offset" + H(t), i = this.$el.chart.node(), n = 0; n < 30 && i && "BODY" !== i.tagName;) { try { n = i.getBoundingClientRect()[t] } catch (t) { e in i && (n = i[e]) }
                            i = i.parentNode } var a = o.body[e]; return n > a && (n = a), n }, getParentWidth: function() { return this.getParentRectValue("width") }, getParentHeight: function() { var t = this.$el.chart.style("height"),
                            e = 0; return t && (e = /px$/.test(t) ? parseInt(t, 10) : this.getParentRectValue("height")), e }, getSvgLeft: function(t) { var e = this,
                            i = e.config,
                            n = e.$el,
                            a = i.axis_rotated || !i.axis_rotated && !i.axis_y_inner,
                            r = i.axis_rotated ? ut.axisX : ut.axisY,
                            s = n.main.select("." + r).node(),
                            o = s && a ? s.getBoundingClientRect() : { right: 0 },
                            l = n.chart.node().getBoundingClientRect(),
                            c = e.hasArcType(),
                            d = o.right - l.left - (c ? 0 : e.getCurrentPaddingLeft(t)); return d > 0 ? d : 0 }, updateDimension: function(t) { var e, i = this,
                            n = i.config,
                            a = i.state.hasAxis,
                            r = i.$el;
                        a && !t && i.axis.x && n.axis_rotated && (null == (e = i.axis.subX) || e.create(r.axis.subX));
                        i.updateScales(t), i.updateSvgSize(), i.transformAll(!1) }, updateSvgSize: function() { var t = this,
                            e = t.state,
                            i = e.clip,
                            n = e.current,
                            a = e.hasAxis,
                            r = e.width,
                            s = e.height,
                            o = t.$el.svg; if (o.attr("width", n.width).attr("height", n.height), a) { var l = o.select("." + Lt.brush + " .overlay"),
                                c = { width: 0, height: 0 };
                            l.size() && (c.width = +l.attr("width"), c.height = +l.attr("height")), o.selectAll(["#" + i.id, "#" + i.idGrid]).select("rect").attr("width", r).attr("height", s), o.select("#" + i.idXAxis).select("rect").call(t.setXAxisClipPath.bind(t)), o.select("#" + i.idYAxis).select("rect").call(t.setYAxisClipPath.bind(t)), i.idSubchart && o.select("#" + i.idSubchart).select("rect").attr("width", r).attr("height", c.height) } }, getResettedPadding: function(t) { var e = this,
                            n = this.config,
                            a = y(t),
                            r = a ? 0 : {}; return !1 === n.padding ? a || Object.keys(t).forEach(function(a) { i(this, e), r[a] = E(n.data_labels) || !1 === n.data_labels || "top" !== a ? 0 : t[a] }.bind(this)) : r = t, r }, updateSizes: function(t) { var e = this,
                            i = e.config,
                            n = e.state,
                            a = e.$el.legend,
                            r = i.axis_rotated,
                            s = e.hasArcType();
                        t || e.setContainerSize(); var o = { width: a ? e.getLegendWidth() : 0, height: a ? e.getLegendHeight() : 0 };!s && i.axis_x_show && i.axis_x_tick_autorotate && e.updateXAxisTickClip(); var l = n.isLegendRight || n.isLegendInset ? 0 : o.height,
                            c = r || s ? 0 : e.getHorizontalAxisHeight("x"),
                            d = i.subchart_axis_x_show && i.subchart_axis_x_tick_text_show ? c : 30,
                            h = i.subchart_show && !s ? i.subchart_size_height + d : 0;
                        n.margin = !s && r ? { top: e.getHorizontalAxisHeight("y2") + e.getCurrentPaddingTop(), right: s ? 0 : e.getCurrentPaddingRight(!0), bottom: e.getHorizontalAxisHeight("y") + l + e.getCurrentPaddingBottom(), left: h + (s ? 0 : e.getCurrentPaddingLeft()) } : { top: 4 + e.getCurrentPaddingTop(), right: s ? 0 : e.getCurrentPaddingRight(!0), bottom: c + h + l + e.getCurrentPaddingBottom(), left: s ? 0 : e.getCurrentPaddingLeft() }, n.margin = e.getResettedPadding(n.margin), n.margin2 = r ? { top: n.margin.top, right: NaN, bottom: 20 + l, left: e.state.rotatedPadding.left } : { top: n.current.height - h - l, right: NaN, bottom: d + l, left: n.margin.left }, n.margin3 = { top: 0, right: NaN, bottom: 0, left: 0 }, null == e.updateSizeForLegend || e.updateSizeForLegend(o), n.width = n.current.width - n.margin.left - n.margin.right, n.height = n.current.height - n.margin.top - n.margin.bottom, n.width < 0 && (n.width = 0), n.height < 0 && (n.height = 0), n.width2 = r ? n.margin.left - n.rotatedPadding.left - n.rotatedPadding.right : n.width, n.height2 = r ? n.height : n.current.height - n.margin2.top - n.margin2.bottom, n.width2 < 0 && (n.width2 = 0), n.height2 < 0 && (n.height2 = 0); var u = e.hasType("gauge"),
                            g = i.legend_show && n.isLegendRight;
                        n.arcWidth = n.width - (g ? o.width + 10 : 0), n.arcHeight = n.height - (g && !u ? 0 : 10), u && !i.gauge_fullCircle && (n.arcHeight += n.height - e.getPaddingBottomForGauge()), null == e.updateRadius || e.updateRadius(), n.isLegendRight && s && (n.margin3.left = n.arcWidth / 2 + 1.1 * n.radiusExpanded) } },
                Ge = { setCssRule: function(t, e, n, a) { var r = this,
                            s = this,
                            o = s.config,
                            l = s.state,
                            c = l.cssRule,
                            d = l.style; return o.boost_useCssRule ? function(o) { var l = this;
                            i(this, r), o.each(function(r) { var o = this;
                                i(this, l); var h = a && (null == a ? void 0 : a.call(s, r)),
                                    u = (t ? "." + (Et.shapes + s.getTargetSelectorSuffix(r.id)) : "") + e;
                                e in c && d.sheet.deleteRule(c[u]), s.state.cssRule[u] = function(t, e, n) { var a = this,
                                        r = t.rootSelctor,
                                        s = t.sheet,
                                        o = r + " " + function(t) { return i(this, a), t.replace(/\s?(bb-)/g, ".$1").replace(/\.+/g, ".") }.bind(this)(e) + " {" + n.join(";") + "}"; return s[s.insertRule ? "insertRule" : "addRule"](o, s.cssRules.length) }(d, u, n.filter(Boolean).map(function(t) { return i(this, o), m(h) && -1 === t.indexOf(":") ? t + ": " + h : t || "" }.bind(this))) }.bind(this)) }.bind(this) : function() { i(this, r) }.bind(this) }, getStylePropValue: function(t) { return this.config.boost_useCssRule ? null : _(t) ? t.bind(this) : t } };

            function je(t, e, i, n, a) { var r, s = t.value,
                    o = this.isCandlestickType(t),
                    l = y(s) && s < 0 || o && !(null != (r = this.getCandlestickData(t)) && r._isUp),
                    c = e.x,
                    d = e.y; return n ? "start" === i ? (c += l ? 0 : 8, d += 4) : "middle" === i ? (c += 8, d -= 8) : "end" === i && (l && (c -= 8), d += 4) : ("start" === i ? (c += 4, l && (d += 16)) : "middle" === i ? d -= 8 : "end" === i && (c -= 4, l && (d += 16)), a && (d += l ? -17 : o ? 13 : 7)), { x: c, y: d } } var Ye = { opacityForText: function(t) { var e = this; return e.isBarType(t) && !e.meetsLabelThreshold(Math.abs(e.getRatio("bar", t)), "bar") ? "0" : e.hasDataLabel ? null : "0" }, initText: function() { this.$el.main.select("." + ct.chart).append("g").attr("class", Ot.chartTexts) }, updateTargetsForText: function(t) { var e = this,
                        n = this,
                        a = n.getChartClass("Text"),
                        r = n.getClass("texts", "id"),
                        s = n.classFocus.bind(n);
                    n.$el.main.select("." + Ot.chartTexts).selectAll("." + Ot.chartText).data(t).attr("class", function(t) { return i(this, e), a(t) + s(t) }.bind(this)).enter().append("g").style("opacity", "0").attr("class", a).call(n.setCssRule(!0, " ." + Ot.text, ["fill", "pointer-events:none"], n.updateTextColor)).append("g").attr("class", r) }, updateText: function() { var t = this,
                        e = this,
                        n = e.$el,
                        r = e.$T,
                        s = e.config,
                        o = e.getClass("text", "index"),
                        l = n.main.selectAll("." + Ot.texts).selectAll("." + Ot.text).data(e.labelishData.bind(e));
                    r(l.exit()).style("fill-opacity", "0").remove(), n.text = l.enter().append("text").merge(l).attr("class", o).attr("text-anchor", function(n) { i(this, t); var a = n.value < 0; if (e.isCandlestickType(n)) { var r = e.getCandlestickData(n);
                            a = !(null != r && r._isUp) } return s.axis_rotated ? a ? "end" : "start" : "middle" }.bind(this)).style("fill", e.getStylePropValue(e.updateTextColor)).style("fill-opacity", "0").each((function(t, i, n) { var r = (0, a.select)(this),
                            s = t.value; if (e.isBubbleZType(t)) s = e.getBubbleZData(s, "z");
                        else if (e.isCandlestickType(t)) { var o = e.getCandlestickData(t);
                            o && (s = o.close) }
                        s = e.dataLabelFormat(t.id)(s, t.id, i, n), y(s) ? this.textContent = s : X(r, s) })) }, updateTextColor: function(t) { var e, i = this,
                        n = i.config,
                        a = n.data_labels_colors,
                        r = i.isArcType(t) && !i.isRadarType(t) ? null : i.color(t); if (m(a)) e = a;
                    else if (P(a)) { e = a[(t.data || t).id] } else _(a) && (e = a.bind(i.api)(r, t)); if (i.isCandlestickType(t) && !_(a)) { var s = i.getCandlestickData(t); if (null == s || !s._isUp) { var o = n.candlestick_color_down;
                            e = P(o) ? o[t.id] : o } } return e || r }, updateTextBacgroundColor: function(t) { var e = this,
                        i = e.$el,
                        n = e.config.data_labels_backgroundColors,
                        a = ""; if (m(n) || P(n)) { var r = m(n) ? "" : e.getTargetSelectorSuffix("id" in t ? t.id : t.data.id),
                            s = i.defs.select(["filter[id*='labels-bg", "']"].join(r));
                        s.size() && (a = "url(#" + s.attr("id") + ")") } return a || null }, redrawText: function(t, e, i, n) { var a = this,
                        r = a.$T,
                        s = a.axis,
                        o = a.config,
                        l = G(!0),
                        c = o.axis_rotated,
                        d = o.data_labels.rotate,
                        h = function(t) { var e = "middle"; return t > 0 && t <= 170 ? e = "end" : t > 190 && t <= 360 && (e = "start"), e }(d),
                        u = d ? "rotate(" + d + ")" : ""; return a.$el.text.style("fill", a.getStylePropValue(a.updateTextColor)).attr("filter", a.updateTextBacgroundColor.bind(a)).style("fill-opacity", i ? 0 : a.opacityForText.bind(a)).each((function(i, g) { var f = r(this, !(!n || !this.getAttribute("x")), l),
                            p = o["axis_" + (null == s ? void 0 : s.getId(i.id)) + "_inverted"],
                            v = { x: t.bind(this)(i, g), y: e.bind(this)(i, g) };
                        d && (v = je.bind(a)(i, v, h, c, p), f.attr("text-anchor", h)), this.childElementCount || d ? f.attr("transform", "translate(" + v.x + " " + v.y + ") " + u) : f.attr("x", v.x).attr("y", v.y) })), !0 }, getTextRect: function(t, e) { var n = this,
                        r = this,
                        s = t.node ? t.node() : t; /text/i.test(s.tagName) || (s = s.querySelector("text")); var o = s.textContent,
                        l = re + "-" + o.replace(/\W/g, "_"),
                        c = r.cache.get(l); return c || (r.$el.svg.append("text").style("visibility", "hidden").style("font", (0, a.select)(s).style("font")).classed(e, !0).text(o).call(function(t) { i(this, n), c = N(t.node()) }.bind(this)).remove(), r.cache.add(l, c)), c }, generateXYForText: function(t, e) { var n = this,
                        a = this,
                        r = Object.keys(t),
                        s = {},
                        o = e ? a.getXForText : a.getYForText; return a.hasType("radar") && r.push("radar"), r.forEach(function(e) { i(this, n), s[e] = a["generateGet" + H(e) + "Points"](t[e], !1) }.bind(this)),
                        function(t, e) { var i = (a.isAreaType(t) ? "area" : a.isBarType(t) && "bar") || a.isCandlestickType(t) && "candlestick" || a.isRadarType(t) && "radar" || "line"; return o.call(a, s[i](t, e), t, this) } }, getCenteredTextPos: function(t, e, i) { var n = this.config,
                        a = n.axis_rotated; if (n.data_labels.centered && this.isBarType(t)) { var r = N(i),
                            s = t.value >= 0; if (a) { var o = (s ? e[1][1] - e[0][1] : e[0][1] - e[1][1]) / 2 + r.width / 2; return s ? -o - 3 : o + 2 } var l = (s ? e[0][1] - e[1][1] : e[1][1] - e[0][1]) / 2 + r.height / 2; return s ? l : -l - 2 } return 0 }, getTextPos: function(t, e) { var i = this.config.data_labels_position; return (t in i ? i[t] : i)[e] || 0 }, getXForText: function(t, e, i) { var n, a = this,
                        r = a.config,
                        s = a.state,
                        o = r.axis_rotated,
                        l = t[0][0]; if (a.isCandlestickType(e)) o ? l = null != (n = a.getCandlestickData(e)) && n._isUp ? t[2][2] + 4 : t[2][1] - 4 : l += (t[1][0] - l) / 2;
                    else if (o) { var c = a.isBarType(e) ? 4 : 6;
                        l = t[2][1] + c * (e.value < 0 ? -1 : 1) } else l = a.hasType("bar") ? (t[2][0] + t[0][0]) / 2 : l; if (null === e.value)
                        if (l > s.width) { var d = N(i).width;
                            l = s.width - d } else l < 0 && (l = 4);
                    return o && (l += a.getCenteredTextPos(e, t, i)), l + a.getTextPos(e.id, "x") }, getYForText: function(t, e, i) { var n, a = this,
                        r = a.axis,
                        s = a.config,
                        o = a.state,
                        l = s.axis_rotated,
                        c = s["axis_" + (null == r ? void 0 : r.getId(e.id)) + "_inverted"],
                        d = a.isBarType(e),
                        h = s.point_r,
                        u = N(i),
                        g = e.value,
                        f = 3; if (a.isCandlestickType(e)) g = a.getCandlestickData(e), l ? (n = t[0][0], n += (t[1][0] - n) / 2 + f) : (n = g && g._isUp ? t[2][2] - f : t[2][1] + 4 * f, c && (n += 15 * (g._isUp ? 1 : -1)));
                    else if (l) n = (t[0][0] + t[2][0] + .6 * u.height) / 2;
                    else if (n = t[2][1], y(h) && h > 5 && (a.isLineType(e) || a.isScatterType(e)) && (f += s.point_r / 2.3), g < 0 || 0 === g && !o.hasPositiveValue && o.hasNegativeValue) n += c ? d ? -3 : -5 : u.height + (d ? -f : f);
                    else { var p = 2 * -f;
                        d ? p = -f : a.isBubbleType(e) && (p = f), c && (p = d ? 10 : 15), n += p } if (null === e.value && !l) { var v = u.height;
                        n < v ? n = v : n > o.height && (n = o.height - 4) } return l || (n += a.getCenteredTextPos(e, t, i)), n + a.getTextPos(e.id, "y") }, markOverlapped: function(t, e, n) { var r = this,
                        s = e.$el.arcs.selectAll(n),
                        o = s.filter(function(e) { return i(this, r), e.data.id !== t }.bind(this)),
                        l = s.filter(function(e) { return i(this, r), e.data.id === t }.bind(this)),
                        c = U(l.node()),
                        d = function(t, e) { return i(this, r), Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) }.bind(this);
                    l.node() && o.each((function() { var t = U(this),
                            e = (0, a.select)(this),
                            i = d(c.e, c.f) > d(t.e, t.f) ? l : e,
                            n = Math.ceil(Math.abs(c.e - t.e)) < Math.ceil(i.node().getComputedTextLength()),
                            r = Math.ceil(Math.abs(c.f - t.f)) < parseInt(l.style("font-size"), 10);
                        e.classed(Ot.TextOverlapping, n && r) })) }, undoMarkOverlapped: function(t, e) { t.$el.arcs.selectAll(e).each((function() {
                        (0, a.selectAll)([this, this.previousSibling]).classed(Ot.TextOverlapping, !1) })) }, meetsLabelThreshold: function(t, e) { void 0 === t && (t = 0); return t >= (this.config[e + "_label_threshold"] || 0) } };

            function Ve(t, e) { void 0 === t && (t = "left"); var i = y(e); return t.indexOf("center") > -1 ? i ? e / 2 : "middle" : t.indexOf("right") > -1 ? i ? e : "end" : i ? 0 : "start" } var He = { initTitle: function() { var t = this.config,
                            e = this.$el;
                        t.title_text && (e.title = e.svg.append("g"), X(e.title.append("text").style("text-anchor", Ve(t.title_position)).attr("class", Ot.title), t.title_text, [.3, 1.5])) }, redrawTitle: function() { var t = this,
                            e = t.config,
                            i = t.state.current,
                            n = t.$el.title; if (n) { var a = t.yForTitle.call(t); /g/i.test(n.node().tagName) ? n.attr("transform", "translate(" + Ve(e.title_position, i.width) + ", " + a + ")") : n.attr("x", t.xForTitle.call(t)).attr("y", a) } }, xForTitle: function() { var t, e = this,
                            i = e.config,
                            n = e.state.current,
                            a = i.title_position || "left",
                            r = e.getTextRect(e.$el.title, Ot.title).width; return /(right|center)/.test(a) ? (t = n.width - r, a.indexOf("right") >= 0 ? t = n.width - r - i.title_padding.right : a.indexOf("center") >= 0 && (t = (n.width - r) / 2)) : t = i.title_padding.left || 0, t }, yForTitle: function() { var t = this; return (t.config.title_padding.top || 0) + t.getTextRect(t.$el.title, Ot.title).height }, getTitlePadding: function() { return this.yForTitle() + (this.config.title_padding.bottom || 0) } },
                We = { initTooltip: function() { var t = this,
                            e = t.config,
                            i = t.$el;
                        i.tooltip = (0, a.select)(e.tooltip_contents.bindto), i.tooltip.empty() && (i.tooltip = i.chart.append("div").attr("class", Pt.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none")), t.bindTooltipResizePos() }, initShowTooltip: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.$el,
                            r = e.state,
                            s = r.hasAxis,
                            o = r.hasRadar; if (n.tooltip_init_show) { var l, c, d = !(s && o); if (null != (l = e.axis) && l.isTimeSeries() && m(n.tooltip_init_x)) { var h, u, g = e.data.targets[0]; for (n.tooltip_init_x = nt.call(e, n.tooltip_init_x), h = 0;
                                    (u = g.values[h]) && u.x - n.tooltip_init_x != 0; h++);
                                n.tooltip_init_x = h } var f = e.data.targets.map(function(a) { i(this, t); var r = d ? 0 : n.tooltip_init_x; return e.addName(a.values[r]) }.bind(this));
                            d && (f = [f[n.tooltip_init_x]]), a.tooltip.html(e.getTooltipHTML(f, null == (c = e.axis) ? void 0 : c.getXAxisTickFormat(), e.getDefaultValueFormat(), e.color)), n.tooltip_contents.bindto || a.tooltip.style("top", n.tooltip_init_position.top).style("left", n.tooltip_init_position.left).style("display", null) } }, getTooltipHTML: function() { var t = this,
                            e = t.api,
                            i = t.config; return _(i.tooltip_contents) ? i.tooltip_contents.bind(e).apply(void 0, arguments) : t.getTooltipContent.apply(t, arguments) }, getTooltipContent: function(t, e, n, a) { var r = this,
                            s = this,
                            o = s.api,
                            l = s.config,
                            c = s.state,
                            d = ["title", "name", "value"].map(function(t) { i(this, r); var e = l["tooltip_format_" + t]; return _(e) ? e.bind(o) : e }.bind(this)),
                            h = d[0],
                            u = d[1],
                            g = d[2];
                        h = h || e, u = u || function(t) { return i(this, r), t }.bind(this), g = g || (s.isStackNormalized() ? function(t, e) { return i(this, r), (100 * e).toFixed(2) + "%" }.bind(this) : n); var f = l.tooltip_order,
                            p = function(t) { return i(this, r), s.axis && s.isBubbleZType(t) ? s.getBubbleZData(t.value, "z") : s.getBaseValue(t) }.bind(this),
                            v = s.levelColor ? function(t) { return i(this, r), s.levelColor(t.value) }.bind(this) : function(t) { return i(this, r), a(t) }.bind(this),
                            x = l.tooltip_contents,
                            m = x.template,
                            y = s.mapToTargetIds(); if (null === f && l.data_groups.length) { var w = s.orderTargets(s.data.targets).map(function(t) { return i(this, r), t.id }.bind(this)).reverse();
                            t.sort(function(t, e) { i(this, r); var n = t ? t.value : null,
                                    a = e ? e.value : null; return n > 0 && a > 0 && (n = t.id ? w.indexOf(t.id) : null, a = e.id ? w.indexOf(e.id) : null), n - a }.bind(this)) } else /^(asc|desc)$/.test(f) ? t.sort(function(t, e) { i(this, r); var n = t ? p(t) : null,
                                a = e ? p(e) : null; return "asc" === f ? n - a : a - n }.bind(this)) : _(f) && t.sort(f.bind(o)); var A, k, S, C, R, E = s.getTooltipContentTemplate(m),
                            L = t.length; for (R = 0; R < L; R++)
                            if ((k = t[R]) && (p(k) || 0 === p(k))) { if (T(A)) { var O = (c.hasAxis || c.hasRadar) && M(h ? h(k.x) : k.x);
                                    A = it(E[0], { CLASS_TOOLTIP: Pt.tooltip, TITLE: b(O) ? m ? O : '<tr><th colspan="2">' + O + "</th></tr>" : "" }) } if (!k.ratio && s.$el.arcs && (k.ratio = s.getRatio("arc", s.$el.arcs.select("path." + dt.arc + "-" + k.id).data()[0])), S = [k.ratio, k.id, k.index, t], C = M(g.apply(void 0, [p(k)].concat(S))), s.isAreaRangeType(k)) { var I = ["high", "low"].map(function(t) { return i(this, r), M(g.apply(void 0, [s.getRangedData(k, t)].concat(S))) }.bind(this)),
                                        D = I[0],
                                        z = I[1];
                                    C = "<b>Mid:</b> " + C + " <b>High:</b> " + D + " <b>Low:</b> " + z } else if (s.isCandlestickType(k)) { var X = ["open", "high", "low", "close", "volume"].map(function(t) { return i(this, r), M(g.apply(void 0, [s.getRangedData(k, t, "candlestick")].concat(S))) }.bind(this)),
                                        $ = X[0],
                                        F = X[1],
                                        B = X[2],
                                        N = X[3],
                                        G = X[4];
                                    C = "<b>Open:</b> " + $ + " <b>High:</b> " + F + " <b>Low:</b> " + B + " <b>Close:</b> " + N + (G ? " <b>Volume:</b> " + G : "") } else if (s.isBarRangeType(k)) { var j = k.value,
                                        Y = j[0],
                                        V = j[1];
                                    C = g(Y) + " ~ " + g(V) } if (void 0 !== C) { var H = function() { var t = this; if (null === k.name) return "continue"; var e = M(u.apply(void 0, [k.name].concat(S))),
                                            n = v(k),
                                            a = { CLASS_TOOLTIP_NAME: Pt.tooltipName + s.getTargetSelectorSuffix(k.id), COLOR: m || !s.patterns ? n : '<svg><rect style="fill:' + n + '" width="10" height="10"></rect></svg>', NAME: e, VALUE: C }; if (m && P(x.text)) { var r = y.indexOf(k.id);
                                            Object.keys(x.text).forEach(function(e) { i(this, t), a[e] = x.text[e][r] }.bind(this)) }
                                        A += it(E[1], a) }(); if ("continue" === H) continue } }
                        return A + "</table>" }, getTooltipContentTemplate: function(t) { return (t || '<table class="{=CLASS_TOOLTIP}"><tbody>\n\t\t\t\t{=TITLE}\n\t\t\t\t{{<tr class="{=CLASS_TOOLTIP_NAME}">\n\t\t\t\t\t<td class="name">' + (this.patterns ? "{=COLOR}" : '<span style="background-color:{=COLOR}"></span>') + '{=NAME}</td>\n\t\t\t\t\t<td class="value">{=VALUE}</td>\n\t\t\t\t</tr>}}\n\t\t\t</tbody></table>').replace(/(\r?\n|\t)/g, "").split(/{{(.*)}}/) }, tooltipPosition: function(t, e, n, a) { var r = this,
                            s = this,
                            o = s.config,
                            l = s.scale,
                            c = s.state,
                            d = c.width,
                            h = c.height,
                            u = c.current,
                            g = c.isLegendRight,
                            f = c.inputType,
                            p = c.event,
                            v = s.hasType("gauge") && !o.gauge_fullCircle,
                            x = s.getSvgLeft(!0),
                            b = x + u.width - s.getCurrentPaddingRight(),
                            _ = s.getCurrentPaddingLeft(!0),
                            m = F(p, a),
                            y = m[0],
                            T = m[1]; if (s.hasArcType()) { "touch" === f || s.hasType("radar") || (T += v ? h : h / 2, y += (d - (g ? s.getLegendWidth() : 0)) / 2) } else { var w = l.x(t[0].x);
                            o.axis_rotated ? (T = w + 20, y += x + 100, b -= x) : (T -= 5, y = x + _ + 20 + (s.scale.zoom ? y : w)) }
                        y + e + 15 > b && (y -= e + _), T + n > u.height && (T -= v ? 3 * n : n + 30); var A = { top: T, left: y }; return Object.keys(A).forEach(function(t) { i(this, r), A[t] < 0 && (A[t] = 0) }.bind(this)), A }, showTooltip: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = a.scale,
                            o = a.state,
                            l = a.$el.tooltip,
                            c = r.tooltip_contents.bindto,
                            d = t.filter(function(t) { return i(this, n), t && b(a.getBaseValue(t)) }.bind(this)); if (l && 0 !== d.length && r.tooltip_show) { var h = l.datum(),
                                u = h || {},
                                g = u.width,
                                f = void 0 === g ? 0 : g,
                                p = u.height,
                                v = void 0 === p ? 0 : p,
                                x = JSON.stringify(t); if (!h || h.current !== x) { var _ = t.concat().sort()[0].index;
                                D(r.tooltip_onshow, a.api, t), l.html(a.getTooltipHTML(t, a.axis ? a.axis.getXAxisTickFormat() : a.categoryName.bind(a), a.getDefaultValueFormat(), a.color)).style("display", null).style("visibility", null).datum(h = { index: _, current: x, width: f = l.property("offsetWidth"), height: v = l.property("offsetHeight") }), D(r.tooltip_onshown, a.api, t), a._handleLinkedCharts(!0, _) } if (!c) { var m, y, T = (null == (m = r.tooltip_position) ? void 0 : m.bind(a.api)) || a.tooltipPosition.bind(a),
                                    w = F(o.event, e),
                                    A = { x: w[0], y: w[1] },
                                    k = null == (y = t.filter(Boolean)) ? void 0 : y.shift();
                                s.x && k && "x" in k && (A.xAxis = s.x(k.x)); var S = T(d, f, v, e, A);
                                ["top", "left"].forEach(function(t) { i(this, n); var e = S[t];
                                    l.style(t, e + "px"), "left" !== t || h.xPosInPercent || (h.xPosInPercent = e / o.current.width * 100) }.bind(this)) } } }, bindTooltipResizePos: function() { var t = this,
                            e = this,
                            n = e.resizeFunction,
                            a = e.state,
                            r = e.$el.tooltip;
                        n.add(function() { if (i(this, t), "block" === r.style("display")) { var e = a.current,
                                    n = r.datum(),
                                    s = n.width,
                                    o = n.xPosInPercent,
                                    l = e.width / 100 * o,
                                    c = e.width - (l + s);
                                c < 0 && (l += c), r.style("left", l + "px") } }.bind(this)) }, hideTooltip: function(t) { var e = this,
                            i = e.api,
                            n = e.config,
                            a = e.$el.tooltip; if (a && "none" !== a.style("display") && (!n.tooltip_doNotHide || t)) { var r = JSON.parse(a.datum().current);
                            D(n.tooltip_onhide, i, r), a.style("display", "none").style("visibility", "hidden").datum(null), D(n.tooltip_onhidden, i, r) } }, _handleLinkedCharts: function(t, e) { var n = this,
                            a = this,
                            r = a.charts,
                            s = a.config,
                            l = a.state.event; if (null != l && l.isTrusted && s.tooltip_linked && r.length > 1) { var c = s.tooltip_linked_name;
                            r.filter(function(t) { return i(this, n), t !== a.api }.bind(this)).forEach(function(a) { i(this, n); var r = a.internal,
                                    s = r.config,
                                    l = r.$el,
                                    d = s.tooltip_linked,
                                    h = s.tooltip_linked_name,
                                    u = o.body.contains(l.chart.node()); if (d && c === h && u) { var g = l.tooltip.data()[0],
                                        f = e !== (null == g ? void 0 : g.index); try { a.tooltip[t && f ? "show" : "hide"]({ index: e }) } catch (t) {} } }.bind(this)) } } },
                Ue = { getTranslate: function(t, e) { void 0 === e && (e = 0); var i, n, a = this,
                            r = a.config,
                            s = a.state,
                            o = r.axis_rotated,
                            l = 0; if (e && /^(x|y2?)$/.test(t) && (l = a.getAxisSize(t) * e), "main" === t) i = S(s.margin.left), n = S(s.margin.top);
                        else if ("context" === t) i = S(s.margin2.left), n = S(s.margin2.top);
                        else if ("legend" === t) i = s.margin3.left, n = s.margin3.top;
                        else if ("x" === t) i = o ? -l : 0, n = o ? 0 : s.height + l;
                        else if ("y" === t) i = o ? 0 : -l, n = o ? s.height + l : 0;
                        else if ("y2" === t) i = o ? 0 : s.width + l, n = o ? 1 - l : 0;
                        else if ("subX" === t) i = 0, n = o ? 0 : s.height2;
                        else if ("arc" === t) i = s.arcWidth / 2, n = s.arcHeight / 2;
                        else if ("polar" === t) i = s.arcWidth / 2, n = s.arcHeight / 2;
                        else if ("radar" === t) { var c = a.getRadarSize()[0];
                            i = s.width / 2 - c, n = S(s.margin.top) } return "translate(" + i + ", " + n + ")" }, transformMain: function(t, e) { var i = this,
                            n = i.$el.main,
                            a = i.$T,
                            r = null != e && e.axisX ? e.axisX : a(n.select("." + ut.axisX), t),
                            s = null != e && e.axisY ? e.axisY : a(n.select("." + ut.axisY), t),
                            o = null != e && e.axisY2 ? e.axisY2 : a(n.select("." + ut.axisY2), t);
                        a(n, t).attr("transform", i.getTranslate("main")), r.attr("transform", i.getTranslate("x")), s.attr("transform", i.getTranslate("y")), o.attr("transform", i.getTranslate("y2")), n.select("." + dt.chartArcs).attr("transform", i.getTranslate("arc")) }, transformAll: function(t, e) { var i = this,
                            n = i.config,
                            a = i.state.hasAxis,
                            r = i.$el;
                        i.transformMain(t, e), a && n.subchart_show && i.transformContext(t, e), r.legend && i.transformLegend(t) } },
                Ze = { setTargetType: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = a.state.withoutFadeIn;
                        a.mapToTargetIds(t).forEach(function(t) { i(this, n), s[t] = e === r.data_types[t], r.data_types[t] = e }.bind(this)), t || (r.data_type = e) }, updateTypesElements: function() { var t = this,
                            e = this,
                            n = e.state.current;
                        Object.keys(l).forEach(function(a) { i(this, t); var r = l[a],
                                s = e.hasType(r, null, !0),
                                o = n.types.indexOf(r); - 1 === o && s ? n.types.push(r) : o > -1 && !s && n.types.splice(o, 1) }.bind(this)), e.setChartElements() }, hasType: function(t, e, n) { var a, r = this;
                        void 0 === n && (n = !1); var s = this,
                            o = s.config,
                            l = s.state.current,
                            c = o.data_types,
                            d = e || s.data.targets,
                            h = !1; return !n && (null == (a = l.types) ? void 0 : a.indexOf(t)) > -1 ? h = !0 : null != d && d.length ? d.forEach(function(e) { i(this, r); var n = c[e.id];
                            (n === t || !n && "line" === t) && (h = !0) }.bind(this)) : Object.keys(c).length ? Object.keys(c).forEach(function(e) { i(this, r), c[e] === t && (h = !0) }.bind(this)) : h = o.data_type === t, h }, hasTypeOf: function(t, e, n) { var a = this; return void 0 === n && (n = []), t in d && !d[t].filter(function(t) { return i(this, a), -1 === n.indexOf(t) }.bind(this)).every(function(t) { return i(this, a), !this.hasType(t, e) }.bind(this)) }, isTypeOf: function(t, e) { var i = m(t) ? t : t.id,
                            n = this.config.data_types[i] || this.config.data_type; return O(e) ? e.indexOf(n) >= 0 : n === e }, hasPointType: function() { var t = this; return t.hasTypeOf("Line") || t.hasType("bubble") || t.hasType("scatter") }, hasArcType: function(t, e) { return this.hasTypeOf("Arc", t, e) }, hasMultiArcGauge: function() { return this.hasType("gauge") && "multi" === this.config.gauge_type }, isLineType: function(t) { var e = m(t) ? t : t.id; return !this.config.data_types[e] || this.isTypeOf(e, d.Line) }, isStepType: function(t) { return this.isTypeOf(t, d.Step) }, isSplineType: function(t) { return this.isTypeOf(t, d.Spline) }, isAreaType: function(t) { return this.isTypeOf(t, d.Area) }, isAreaRangeType: function(t) { return this.isTypeOf(t, d.AreaRange) }, isBarType: function(t) { return this.isTypeOf(t, "bar") }, isBubbleType: function(t) { return this.isTypeOf(t, "bubble") }, isCandlestickType: function(t) { return this.isTypeOf(t, "candlestick") }, isScatterType: function(t) { return this.isTypeOf(t, "scatter") }, isPieType: function(t) { return this.isTypeOf(t, "pie") }, isGaugeType: function(t) { return this.isTypeOf(t, "gauge") }, isDonutType: function(t) { return this.isTypeOf(t, "donut") }, isPolarType: function(t) { return this.isTypeOf(t, "polar") }, isRadarType: function(t) { return this.isTypeOf(t, "radar") }, isArcType: function(t) { return this.isPieType(t) || this.isDonutType(t) || this.isGaugeType(t) || this.isPolarType(t) || this.isRadarType(t) }, isCirclePoint: function(t) { var e = this.config,
                            i = e.point_pattern; return "circle" === (null == t ? void 0 : t.tagName) || "circle" === e.point_type && (!i || O(i) && 0 === i.length) }, lineData: function(t) { return this.isLineType(t) ? [t] : [] }, arcData: function(t) { return this.isArcType(t.data) ? [t] : [] }, labelishData: function(t) { var e = this; return this.isBarType(t) || this.isLineType(t) || this.isScatterType(t) || this.isBubbleType(t) || this.isCandlestickType(t) || this.isRadarType(t) ? t.values.filter(function(t) { return i(this, e), y(t.value) || !!t.value }.bind(this)) : [] }, barLineBubbleData: function(t) { return this.isBarType(t) || this.isLineType(t) || this.isBubbleType(t) ? t.values : [] }, isInterpolationType: function(t) { return ["basis", "basis-closed", "basis-open", "bundle", "cardinal", "cardinal-closed", "cardinal-open", "catmull-rom", "catmull-rom-closed", "catmull-rom-open", "linear", "linear-closed", "monotone-x", "monotone-y", "natural"].indexOf(t) >= 0 } },
                qe = function() {
                    function t(t) { this.api = void 0, this.config = void 0, this.cache = void 0, this.$el = void 0, this.state = void 0, this.charts = void 0, this.data = { xs: {}, targets: [] }, this.axis = void 0, this.scale = { x: null, y: null, y2: null, subX: null, subY: null, subY2: null, zoom: null }, this.org = { xScale: null, xDomain: null }, this.color = void 0, this.patterns = void 0, this.levelColor = void 0, this.point = void 0, this.brush = void 0, this.format = { extraLineClasses: null, xAxisTick: null, dataTime: null, defaultAxisTime: null, axisTime: null }; var e = this;
                        e.api = t, e.config = new Zt, e.cache = new se; var i = new Mt;
                        e.$el = i.getStore("element"), e.state = i.getStore("state"), e.$T = e.$T.bind(e) } var e = t.prototype; return e.$T = function(t, e, i) { var n = this.config,
                            r = this.state,
                            s = n.transition_duration,
                            o = n.subchart_show,
                            l = t;
                        l && ("tagName" in l && (l = (0, a.select)(l)), l = (!1 !== e && s || e) && (!r.zooming || r.dragging) && !r.resizing && r.rendered && !o ? l.transition(i).duration(s) : l); return l }, e.beforeInit = function() { var t = this;
                        t.callPluginHook("$beforeInit"), D(t.config.onbeforeinit, t.api) }, e.afterInit = function() { var t = this;
                        t.callPluginHook("$afterInit"), D(t.config.onafterinit, t.api) }, e.init = function() { var t = this,
                            e = t.config,
                            i = t.state,
                            n = t.$el,
                            r = e.boost_useCssRule; if (st(t), i.hasAxis = !t.hasArcType(), i.hasRadar = !i.hasAxis && t.hasType("radar"), i.datetimeId = "bb-" + +new Date * G(), r) { var s = o.createElement("style");
                            s.type = "text/css", o.head.appendChild(s), i.style = { rootSelctor: "." + i.datetimeId, sheet: s.sheet }, n.style = s } var l = { element: e.bindto, classname: "bb" };
                        P(e.bindto) && (l.element = e.bindto.element || "#chart", l.classname = e.bindto.classname || l.classname), n.chart = _(l.element.node) ? e.bindto.element : (0, a.select)(l.element || []), n.chart.empty() && (n.chart = (0, a.select)(o.body.appendChild(o.createElement("div")))), n.chart.html("").classed(l.classname, !0).classed(i.datetimeId, r).style("position", "relative"), t.initParams(), t.initToRender() }, e.initToRender = function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = n.state,
                            o = n.$el.chart,
                            l = function() { return i(this, e), "none" === o.style("display") || "hidden" === o.style("visibility") }.bind(this),
                            c = a.render.lazy || l(),
                            d = s.MutationObserver;
                        c && d && !1 !== a.render.observe && !t && new d(function(t, a) { i(this, e), l() || (a.disconnect(), r.rendered || n.initToRender(!0)) }.bind(this)).observe(o.node(), { attributes: !0, attributeFilter: ["class", "style"] }), c && !t || n.convertData(a, function(t) { i(this, e), n.initWithData(t), n.afterInit() }.bind(this)) }, e.initParams = function() { var t = this,
                            e = this,
                            a = e.config,
                            r = e.format,
                            l = e.state,
                            c = a.axis_rotated; if (e.color = e.generateColor(), e.levelColor = e.generateLevelColor(), !1 === a.padding && (a.axis_x_show = !1, a.axis_y_show = !1, a.axis_y2_show = !1, a.subchart_show = !1), e.hasPointType() && (e.point = e.generatePoint()), l.hasAxis) { e.initClip(), r.extraLineClasses = e.generateExtraLineClass(), r.dataTime = a.data_xLocaltime ? n.timeParse : n.utcParse, r.axisTime = a.axis_x_localtime ? n.timeFormat : n.utcFormat; var d = e.config.zoom_enabled && "drag" === e.config.zoom_type;
                            r.defaultAxisTime = function(n) { i(this, t); var a = e.scale,
                                    s = a.x,
                                    o = a.zoom,
                                    l = d ? o : o && s.orgDomain().toString() !== o.domain().toString(),
                                    c = (n.getMilliseconds() ? ".%L" : n.getSeconds() && ".:%S") || n.getMinutes() && "%I:%M" || n.getHours() && "%I %p" || 1 !== n.getDate() && "%b %d" || l && 1 === n.getDate() && "%b'%y" || n.getMonth() && "%-m/%-d" || "%Y"; return r.axisTime(c)(n) }.bind(this) }
                        l.isLegendRight = "right" === a.legend_position, l.isLegendInset = "inset" === a.legend_position, l.isLegendTop = "top-left" === a.legend_inset_anchor || "top-right" === a.legend_inset_anchor, l.isLegendLeft = "top-left" === a.legend_inset_anchor || "bottom-left" === a.legend_inset_anchor, l.rotatedPadding.top = e.getResettedPadding(l.rotatedPadding.top), l.rotatedPadding.right = c && !a.axis_x_show ? 0 : 30, l.inputType = function(t, e) { var n = this,
                                a = s.DocumentTouch,
                                r = s.matchMedia,
                                l = s.navigator,
                                c = !1; if (e)
                                if (l && "maxTouchPoints" in l) c = l.maxTouchPoints > 0;
                                else if ("ontouchmove" in s || a && o instanceof a) c = !0;
                            else if (null != r && r("(pointer:coarse)").matches) c = !0;
                            else { var d = l.userAgent;
                                c = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(d) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(d) } return (t && ["any-hover:hover", "any-pointer:fine"].some(function(t) { return i(this, n), null == r ? void 0 : r("(" + t + ")").matches }.bind(this)) ? "mouse" : c && "touch") || "mouse" }(a.interaction_inputType_mouse, a.interaction_inputType_touch) }, e.initWithData = function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = n.scale,
                            s = n.state,
                            o = n.$el,
                            l = n.org,
                            c = s.hasAxis,
                            d = a.interaction_enabled,
                            h = n.hasType("polar");
                        c && (n.axis = n.getAxisInstance(), a.zoom_enabled && n.initZoom()), n.data.xs = {}, n.data.targets = n.convertDataToTargets(t), a.data_filter && (n.data.targets = n.data.targets.filter(a.data_filter.bind(n.api))), a.data_hide && n.addHiddenTargetIds(!0 === a.data_hide ? n.mapToIds(n.data.targets) : a.data_hide), a.legend_hide && n.addHiddenLegendIds(!0 === a.legend_hide ? n.mapToIds(n.data.targets) : a.legend_hide), n.updateSizes(), n.updateScales(!0); var u = r.x,
                            g = r.y,
                            f = r.y2,
                            p = r.subX,
                            v = r.subY,
                            x = r.subY2; if (u && (u.domain(J(n.getXDomain(n.data.targets))), p.domain(u.domain()), l.xDomain = u.domain()), g && (g.domain(n.getYDomain(n.data.targets, "y")), v.domain(g.domain())), f && (f.domain(n.getYDomain(n.data.targets, "y2")), x && x.domain(f.domain())), o.svg = o.chart.append("svg").style("overflow", "hidden").style("display", "block"), d && s.inputType) { var b = "touch" === s.inputType,
                                m = a.onclick,
                                y = a.onover,
                                T = a.onout;
                            o.svg.on("click", (null == m ? void 0 : m.bind(n.api)) || null).on(b ? "touchstart" : "mouseenter", (null == y ? void 0 : y.bind(n.api)) || null).on(b ? "touchend" : "mouseleave", (null == T ? void 0 : T.bind(n.api)) || null) }
                        a.svg_classname && o.svg.attr("class", a.svg_classname); var w = _(a.color_tiles) && n.patterns;
                        (c || w || a.data_labels_backgroundColors || h) && (o.defs = o.svg.append("defs"), c && ["id", "idXAxis", "idYAxis", "idGrid"].forEach(function(t) { i(this, e), n.appendClip(o.defs, s.clip[t]) }.bind(this)), n.generateDataLabelBackgroundColorFilter(), w && n.patterns.forEach(function(t) { var n = this; return i(this, e), o.defs.append(function() { return i(this, n), t.node }.bind(this)) }.bind(this))), n.updateSvgSize(), n.bindResize(); var A, k = o.svg.append("g").classed(ct.main, !0).attr("transform", n.getTranslate("main"));
                        (o.main = k, a.subchart_show && n.initSubchart(), a.tooltip_show && n.initTooltip(), a.title_text && n.initTitle(), a.legend_show && n.initLegend(), a.data_empty_label_text && k.append("text").attr("class", Ot.text + " " + ct.empty).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), c && (a.regions.length && n.initRegion(), a.clipPath || n.axis.init()), k.append("g").classed(ct.chart, !0).attr("clip-path", c ? s.clip.path : null), n.callPluginHook("$init"), c) && (d && (null == n.initEventRect || n.initEventRect()), n.initGrid(), a.clipPath && (null == (A = n.axis) || A.init())); if (n.initChartElements(), n.updateTargets(n.data.targets), n.updateDimension(), D(a.oninit, n.api), n.setBackground(), n.redraw({ withTransition: !1, withTransform: !0, withUpdateXDomain: !0, withUpdateOrgXDomain: !0, withTransitionForAxis: !1, initializing: !0 }), a.data_onmin || a.data_onmax) { var S = n.getMinMaxData();
                            D(a.data_onmin, n.api, S.min), D(a.data_onmax, n.api, S.max) }
                        a.tooltip_show && n.initShowTooltip(), s.rendered = !0 }, e.initChartElements = function() { var t = this,
                            e = this,
                            n = e.state,
                            a = n.hasAxis,
                            r = n.hasRadar,
                            s = []; if (a)["bar", "bubble", "candlestick", "line"].forEach(function(n) { i(this, t); var a = H(n);
                            ("line" === n && e.hasTypeOf(a) || e.hasType(n)) && s.push(a) }.bind(this));
                        else { var o = e.hasType("polar");
                            r || s.push("Arc", "Pie"), e.hasType("gauge") ? s.push("Gauge") : r ? s.push("Radar") : o && s.push("Polar") }
                        s.forEach(function(n) { i(this, t), e["init" + n]() }.bind(this)), L(e.config.data_labels) && !e.hasArcType(null, ["radar"]) && e.initText() }, e.setChartElements = function() { var t = this.$el,
                            e = t.chart,
                            i = t.svg,
                            n = t.defs,
                            a = t.main,
                            r = t.tooltip,
                            s = t.legend,
                            o = t.title,
                            l = t.grid,
                            c = t.arcs,
                            d = t.circle,
                            h = t.bar,
                            u = t.candlestick,
                            g = t.line,
                            f = t.area,
                            p = t.text;
                        this.api.$ = { chart: e, svg: i, defs: n, main: a, tooltip: r, legend: s, title: o, grid: l, arc: c, circles: d, bar: { bars: h }, candlestick: u, line: { lines: g, areas: f }, text: { texts: p } } }, e.setBackground = function() { var t = this,
                            e = t.config.background,
                            i = t.state,
                            n = t.$el.svg; if (L(e)) { var a = n.select("g").insert(e.imgUrl ? "image" : "rect", ":first-child");
                            e.imgUrl ? a.attr("href", e.imgUrl) : e.color && a.style("fill", e.color).attr("clip-path", i.clip.path), a.attr("class", e.class || null).attr("width", "100%").attr("height", "100%") } }, e.updateTargets = function(t) { var e = this,
                            n = this,
                            a = n.state,
                            r = a.hasAxis,
                            s = a.hasRadar,
                            o = function(a) { return i(this, e), n["updateTargetsFor" + a](t.filter(n["is" + a + "Type"].bind(n))) }.bind(this); if (n.updateTargetsForText(t), r)["bar", "candlestick", "line"].forEach(function(t) { i(this, e); var a = H(t);
                            ("line" === t && n.hasTypeOf(a) || n.hasType(t)) && o(a) }.bind(this)), n.updateTargetsForSubchart && n.updateTargetsForSubchart(t);
                        else if (n.hasArcType(t)) { var l = "Arc";
                            s ? l = "Radar" : n.hasType("polar") && (l = "Polar"), o(l) } var c = n.hasType("bubble") || n.hasType("scatter");
                        c && (null == n.updateTargetForCircle || n.updateTargetForCircle()), n.filterTargetsToShowAtInit(c) }, e.filterTargetsToShowAtInit = function(t) { var e = this;
                        void 0 === t && (t = !1); var n = this,
                            a = n.$el.svg,
                            r = n.$T,
                            s = "." + ct.target;
                        t && (s += ", ." + pt.chartCircles + " > ." + pt.circles), r(a.selectAll(s).filter(function(t) { return i(this, e), n.isTargetToShow(t.id) }.bind(this))).style("opacity", null) }, e.getWithOption = function(t) { var e = this,
                            n = { Dimension: !0, EventRect: !0, Legend: !1, Subchart: !0, Transform: !1, Transition: !0, TrimXDomain: !0, UpdateXAxis: "UpdateXDomain", UpdateXDomain: !1, UpdateOrgXDomain: !1, TransitionForExit: "Transition", TransitionForAxis: "Transition", Y: !0 }; return Object.keys(n).forEach(function(a) { i(this, e); var r = n[a];
                            m(r) && (r = n[r]), n[a] = I(t, "with" + a, r) }.bind(this)), n }, e.initialOpacity = function(t) { var e = this.state.withoutFadeIn; return null !== this.getBaseValue(t) && e[t.id] ? null : "0" }, e.bindResize = function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.state,
                            r = function(t) { var e, n = this,
                                    a = [],
                                    r = function() { var n = this;
                                        r.clear(), !1 === t && s.requestIdleCallback ? requestIdleCallback(function() { var t = this;
                                            i(this, n), a.forEach(function(e) { return i(this, t), e() }.bind(this)) }.bind(this), { timeout: 200 }) : e = oe(function() { var t = this;
                                            i(this, n), a.forEach(function(e) { return i(this, t), e() }.bind(this)) }.bind(this), y(t) ? t : 200) }; return r.clear = function() { i(this, n), e && (le(e), e = null) }.bind(this), r.add = function(t) { return i(this, n), a.push(t) }.bind(this), r.remove = function(t) { return i(this, n), a.splice(a.indexOf(t), 1) }.bind(this), r }(n.resize_timer),
                            o = [];
                        o.push(function() { return i(this, t), D(n.onresize, e.api) }.bind(this)), n.resize_auto && o.push(function() { i(this, t), a.resizing = !0, n.legend_show && (e.updateSizes(), e.updateLegend()), e.api.flush(!1) }.bind(this)), o.push(function() { i(this, t), D(n.onresized, e.api), a.resizing = !1 }.bind(this)), o.forEach(function(e) { return i(this, t), r.add(e) }.bind(this)), e.resizeFunction = r, s.addEventListener("resize", e.resizeFunction = r) }, e.callPluginHook = function(t) { for (var e = this, n = arguments.length, a = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
                        this.config.plugins.forEach(function(n) { i(this, e), "$beforeInit" === t && (n.$$ = this, this.api.plugins.push(n)), n[t].apply(n, a) }.bind(this)) }, t }();

            function Ke(t) { var e, n, a, r = this,
                    s = this.config,
                    o = function() { i(this, r); var t = n.shift(); return t && e && R(e) && t in e ? (e = e[t], o()) : t ? void 0 : e }.bind(this);
                Object.keys(s).forEach(function(l) { i(this, r), e = t, n = l.split("_"), a = o(), w(a) && (s[l] = a) }.bind(this)), this.api && (this.state.orgConfig = t) }
            V(qe.prototype, [me, ye, Te, { categoryName: function(t) { var e = this.config.axis_x_categories; return t < (null == e ? void 0 : e.length) ? e[t] : t } }, ke, Ee, Le, Ae, Pe, De, Me, $e, Be, Ne, Ge, Ye, He, We, Ue, Ze]); var Je = { resize: function(t) { var e = this.internal,
                        i = e.config,
                        n = e.state;
                    n.rendered && (i.size_width = t ? t.width : null, i.size_height = t ? t.height : null, n.resizing = !0, this.flush(!1), e.resizeFunction()) }, flush: function(t) { var e = this.internal,
                        i = e.state,
                        n = e.$el.zoomResetBtn; if (i.rendered) { var a, r; if (i.resizing) null == (a = e.brush) || a.updateResize();
                        else null == (r = e.axis) || r.setOrient();
                        null == n || n.style("display", "none"), e.scale.zoom = null, t ? e.redraw({ withTransform: !0, withUpdateXDomain: !0, withUpdateOrgXDomain: !0, withLegend: !0 }) : e.updateAndRedraw({ withLegend: !0, withTransition: !1, withTransitionForTransform: !1 }), !i.resizing && e.brush && (e.brush.getSelection().call(e.brush.move), e.unselectRect()) } else e.initToRender(!0) }, destroy: function() { var t = this,
                        e = this.internal,
                        n = e.$el,
                        a = n.chart,
                        r = n.style,
                        o = n.svg; if (L(e))
                        for (var l in e.callPluginHook("$willDestroy"), e.charts.splice(e.charts.indexOf(this), 1), e.unbindAllEvents(), o.select("*").interrupt(), e.resizeFunction.clear(), s.removeEventListener("resize", e.resizeFunction), a.classed("bb", !1).style("position", null).selectChildren().remove(), r && r.parentNode.removeChild(r), Object.keys(this).forEach(function(n) { var a = this;
                                i(this, t), "internal" === n && Object.keys(e).forEach(function(t) { i(this, a), e[t] = null }.bind(this)), this[n] = null, delete this[n] }.bind(this)), this) this[l] = function() { i(this, t) }.bind(this); return null }, config: function(t, e, i) { var n, a = this.internal,
                        r = a.config,
                        s = a.state,
                        o = null == t ? void 0 : t.replace(/\./g, "_"); return t && o in r ? w(e) ? (r[o] = e, n = e, i && this.flush()) : n = r[o] : n = s.orgConfig, n } };

            function Qe(t) { var e = this,
                    n = this.internal.data.targets; if (!T(t)) { var a = O(t) ? t : [t]; return n.filter(function(t) { var n = this; return i(this, e), a.some(function(e) { return i(this, n), e === t.id }.bind(this)) }.bind(this)) } return n }
            V(Qe, { shown: function(t) { return this.internal.filterTargetsToShow(this.data(t)) }, values: function(t, e) { var n = this;
                    void 0 === e && (e = !0); var a = null; if (t) { var r = this.data(t);
                        O(r) && (a = [], r.forEach(function(t) { var r = this;
                            i(this, n); var s = t.values.map(function(t) { return i(this, r), t.value }.bind(this));
                            e ? a = a.concat(s) : a.push(s) }.bind(this))) } return a }, names: function(t) { return this.internal.updateDataAttributes("names", t) }, colors: function(t) { return this.internal.updateDataAttributes("colors", t) }, axes: function(t) { return this.internal.updateDataAttributes("axes", t) }, min: function() { return this.internal.getMinMaxData().min }, max: function() { return this.internal.getMinMaxData().max } }); var ti = { data: Qe },
                ei = function(t) { var e = this; return i(this, undefined), btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, n) { return i(this, e), String.fromCharCode(+("0x" + n)) }.bind(this))) }.bind(void 0);

            function ii(t, e, n) { var r = this,
                    s = e || n,
                    l = s.width,
                    c = s.height,
                    d = new XMLSerializer,
                    h = t.cloneNode(!0),
                    u = function(t) { var e = this,
                            n = []; return t.forEach(function(t) { i(this, e); try { t.cssRules && t.cssRules.length && (n = n.concat(W(t.cssRules))) } catch (e) { console.error("Error while reading rules from " + t.href + ": " + e.toString()) } }.bind(this)), n }(W(o.styleSheets)).filter(function(t) { return i(this, r), t.cssText }.bind(this)).map(function(t) { return i(this, r), t.cssText }.bind(this));
                h.setAttribute("xmlns", a.namespaces.xhtml); var g = d.serializeToString(h),
                    f = o.createElement("style");
                f.appendChild(o.createTextNode(u.join("\n"))); var p = d.serializeToString(f),
                    v = ('<svg xmlns="' + a.namespaces.svg + '" width="' + l + '" height="' + c + '" \n\t\tviewBox="0 0 ' + n.width + " " + n.height + '" \n\t\tpreserveAspectRatio="' + (!1 === (null == e ? void 0 : e.preserveAspectRatio) ? "none" : "xMinYMid meet") + '">\n\t\t\t<foreignObject width="100%" height="100%">\n\t\t\t\t' + p + "\n\t\t\t\t" + g.replace(/(url\()[^#]+/g, "$1") + "\n\t\t\t</foreignObject></svg>").replace("/\n/g", "%0A"); return "data:image/svg+xml;base64," + ei(v) } var ni = { export: function(t, e) { var n = this,
                            a = this.internal,
                            r = a.state,
                            s = a.$el.chart,
                            l = r.current,
                            c = l.width,
                            d = l.height,
                            h = K({ width: c, height: d, preserveAspectRatio: !0, mimeType: "image/png" }, t),
                            u = ii(s.node(), h, { width: c, height: d }); if (e && _(e)) { var g = new Image;
                            g.crossOrigin = "Anonymous", g.onload = function() { i(this, n); var t = o.createElement("canvas"),
                                    a = t.getContext("2d");
                                t.width = h.width || c, t.height = h.height || d, a.drawImage(g, 0, 0), e.bind(this)(t.toDataURL(h.mimeType)) }.bind(this), g.src = u } return u } },
                ai = { focus: function(t) { var e = this,
                            n = this.internal,
                            a = n.state,
                            r = n.mapToTargetIds(t),
                            s = n.$el.svg.selectAll(n.selectorTargets(r.filter(n.isTargetToShow, n)));
                        this.revert(), this.defocus(), s.classed(Tt.focused, !0).classed(Tt.defocused, !1), n.hasArcType() && !a.hasRadar && (n.expandArc(r), n.hasType("gauge") && n.markOverlapped(t, n, "." + bt.gaugeValue)), n.toggleFocusLegend(r, !0), a.focusedTargetIds = r, a.defocusedTargetIds = a.defocusedTargetIds.filter(function(t) { return i(this, e), r.indexOf(t) < 0 }.bind(this)) }, defocus: function(t) { var e = this,
                            n = this.internal,
                            a = n.state,
                            r = n.mapToTargetIds(t);
                        n.$el.svg.selectAll(n.selectorTargets(r.filter(n.isTargetToShow, n))).classed(Tt.focused, !1).classed(Tt.defocused, !0), n.hasArcType(null, ["polar"]) && (n.unexpandArc(r), n.hasType("gauge") && n.undoMarkOverlapped(n, "." + bt.gaugeValue)), n.toggleFocusLegend(r, !1), a.focusedTargetIds = a.focusedTargetIds.filter(function(t) { return i(this, e), r.indexOf(t) < 0 }.bind(this)), a.defocusedTargetIds = r }, revert: function(t) { var e = this.internal,
                            i = e.config,
                            n = e.state,
                            r = e.$el,
                            s = e.mapToTargetIds(t);
                        r.svg.selectAll(e.selectorTargets(s)).classed(Tt.focused, !1).classed(Tt.defocused, !1), e.hasArcType(null, ["polar"]) && e.unexpandArc(s), i.legend_show && (e.showLegend(s.filter(e.isLegendToShow.bind(e))), r.legend.selectAll(e.selectorLegends(s)).filter((function() { return (0, a.select)(this).classed(Tt.legendItemFocused) })).classed(Tt.legendItemFocused, !1)), n.focusedTargetIds = [], n.defocusedTargetIds = [] } },
                ri = { load: function(t) { var e = this,
                            n = this.internal,
                            a = n.config;
                        t.xs && n.addXs(t.xs), "names" in t && this.data.names(t.names), "classes" in t && Object.keys(t.classes).forEach(function(n) { i(this, e), a.data_classes[n] = t.classes[n] }.bind(this)), "categories" in t && n.axis.isCategorized() && (a.axis_x_categories = t.categories), "axes" in t && Object.keys(t.axes).forEach(function(n) { i(this, e), a.data_axes[n] = t.axes[n] }.bind(this)), "colors" in t && Object.keys(t.colors).forEach(function(n) { i(this, e), a.data_colors[n] = t.colors[n] }.bind(this)), "unload" in t && !1 !== t.unload ? n.unload(n.mapToTargetIds(!0 === t.unload ? null : t.unload), function() { var a = this;
                            i(this, e), s.requestIdleCallback(function() { return i(this, a), n.loadFromArgs(t) }.bind(this)) }.bind(this)) : n.loadFromArgs(t) }, unload: function(t) { var e = this,
                            n = this.internal,
                            a = t || {};
                        O(a) ? a = { ids: a } : m(a) && (a = { ids: [a] }); var r = n.mapToTargetIds(a.ids);
                        n.unload(r, function() { i(this, e), n.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 }), n.cache.remove(r), a.done && a.done.call(this) }.bind(this)) } };

            function si(t, e, n) { var a = this,
                    r = this.internal,
                    s = r.mapToTargetIds(e),
                    o = r.state.hiddenTargetIds.map(function(t) { return i(this, a), s.indexOf(t) > -1 && t }.bind(this)).filter(Boolean);
                r.state.toggling = !0, r[(t ? "remove" : "add") + "HiddenTargetIds"](s); var l = r.$el.svg.selectAll(r.selectorTargets(s)),
                    c = t ? null : "0";
                t && o.length && (l.style("display", null), D(r.config.data_onshown, this, o)), r.$T(l).style("opacity", c, "important").call(z, function() { i(this, a), t || 0 !== o.length || (l.style("display", "none"), D(r.config.data_onhidden, this, s)), l.style("opacity", c) }.bind(this)), n.withLegend && r[(t ? "show" : "hide") + "Legend"](s), r.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 }), r.state.toggling = !1 } var oi = { show: function(t, e) { void 0 === e && (e = {}), si.call(this, !0, t, e) }, hide: function(t, e) { void 0 === e && (e = {}), si.call(this, !1, t, e) }, toggle: function(t, e) { var n = this;
                        void 0 === e && (e = {}); var a = this.internal,
                            r = { show: [], hide: [] };
                        a.mapToTargetIds(t).forEach(function(t) { return i(this, n), r[a.isTargetToShow(t) ? "hide" : "show"].push(t) }.bind(this)), r.show.length && this.show(r.show, e), r.hide.length && setTimeout(function() { return i(this, n), this.hide(r.hide, e) }.bind(this), 0) } },
                li = { show: function(t) { var e, n, a = this,
                            r = this.internal,
                            s = r.config,
                            o = r.state.inputType; if (t.mouse && (n = t.mouse), t.data) { var l = t.data,
                                c = r.getYScaleById(l.id)(l.value);
                            r.isMultipleX() ? n = [r.scale.x(l.x), c] : (s.tooltip_grouped || (n = [0, c]), e = b(l.index) ? l.index : r.getIndexByX(l.x)) } else w(t.x) ? e = r.getIndexByX(t.x) : w(t.index) && (e = t.index);
                        ("mouse" === o ? ["mouseover", "mousemove"] : ["touchstart"]).forEach(function(t) { i(this, a), r.dispatchEvent(t, e, n) }.bind(this)) }, hide: function() { var t = this,
                            e = this.internal,
                            n = e.state.inputType,
                            a = e.$el.tooltip,
                            r = null == a ? void 0 : a.datum(); if (r) { var s = JSON.parse(r.current)[0].index;
                            ("mouse" === n ? ["mouseout"] : ["touchend"]).forEach(function(n) { i(this, t), e.dispatchEvent(n, s) }.bind(this)) } "touch" === n && e.callOverOutForTouch(), e.hideTooltip(!0), e.hideGridFocus(), null == e.unexpandCircles || e.unexpandCircles(), e.expandBarTypeShapes(!1) } },
                ci = function t(e) { this.plugins = [], this.internal = void 0; var n = new qe(this);
                    this.internal = n,
                        function t(e, n, a) { var r = this;
                            Object.keys(e).forEach(function(s) { i(this, r); var o = _(e[s]),
                                    l = n !== a,
                                    c = L(e[s]),
                                    d = c && Object.keys(e[s]).length > 0;
                                n[s] = o && (!l && d || l) ? e[s].bind(a) : c && !o ? {} : e[s], d && t(e[s], n[s], a) }.bind(this)) }(t.prototype, this, this), Ke.call(n, e), n.beforeInit(), n.init() };

            function di(t, e, n) { var a = this,
                    r = t.config,
                    s = function(t, n) { i(this, a); var s = y(n) ? n : !1 === n ? void 0 : null;
                        null !== s && (r["axis_" + t + "_" + e] = s) }.bind(this);
                w(n) && (R(n) ? Object.keys(n).forEach(function(t) { i(this, a), s(t, n[t]) }.bind(this)) : (y(n) || !1 === n) && ["y", "y2"].forEach(function(t) { i(this, a), s(t, n) }.bind(this)), t.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 })) }

            function hi(t, e) { var i = t.config; return { x: i["axis_x_" + e], y: i["axis_y_" + e], y2: i["axis_y2_" + e] } }
            V(ci.prototype, [Je, { color: function(t) { return this.internal.color(t) } }, ti, ni, ai, { legend: { show: function(t) { var e = this.internal;
                        e.showLegend(e.mapToTargetIds(t)), e.updateAndRedraw({ withLegend: !0 }) }, hide: function(t) { var e = this.internal;
                        e.hideLegend(e.mapToTargetIds(t)), e.updateAndRedraw({ withLegend: !0 }) } } }, ri, oi, { tooltip: li }]); var ui = { labels: function(t) { var e, n = this,
                            a = this.internal; return t && (Object.keys(t).forEach(function(e) { i(this, n), a.axis.setLabelText(e, t[e]) }.bind(this)), a.axis.updateLabels()), ["x", "y", "y2"].forEach(function(t) { i(this, n); var r = a.axis.getLabelText(t);
                            r && (e || (e = {}), e[t] = r) }.bind(this)), e }, min: function(t) { var e = this.internal; return b(t) || !1 === t ? di(e, "min", t) : hi(e, "min") }, max: function(t) { var e = this.internal; return b(t) || !1 === t ? di(e, "max", t) : hi(e, "max") }, range: function(t) { var e = this.axis; if (!arguments.length) return { max: e.max(), min: e.min() }; var i = t.min,
                            n = t.max;
                        w(n) && e.max(n), w(i) && e.min(i) } },
                gi = { axis: ui };

            function fi(t) { var e = this.internal,
                    i = e.config; return t ? (i.grid_x_lines = t, e.redrawWithoutRescale(), i.grid_x_lines) : i.grid_x_lines }
            V(fi, { add: function(t) { return this.xgrids(this.internal.config.grid_x_lines.concat(t || [])) }, remove: function(t) { this.internal.removeGridLines(t, !0) } }); var pi = { xgrids: fi };

            function vi(t) { var e = this.internal,
                    i = e.config; return t ? (i.grid_y_lines = t, e.redrawWithoutRescale(), i.grid_y_lines) : i.grid_y_lines }
            V(vi, { add: function(t) { return this.ygrids(this.internal.config.grid_y_lines.concat(t || [])) }, remove: function(t) { this.internal.removeGridLines(t, !1) } }); var xi = { ygrids: vi },
                bi = { groups: function(t) { var e = this.internal,
                            i = e.config; return T(t) || (i.data_groups = t, e.redraw()), i.data_groups } };

            function _i(t) { var e = this.internal,
                    i = e.config; return t ? (i.regions = t, e.redrawWithoutRescale(), t) : i.regions }
            V(_i, { add: function(t) { var e = this.internal,
                        i = e.config; return t ? (i.regions = i.regions.concat(t), e.redrawWithoutRescale(), i.regions) : i.regions }, remove: function(t) { var e = this,
                        n = this.internal,
                        a = n.config,
                        r = n.$T,
                        s = t || {},
                        o = I(s, "classes", [Ct.region]),
                        l = n.$el.main.select("." + Ct.regions).selectAll(o.map(function(t) { return i(this, e), "." + t }.bind(this))); return r(l).style("opacity", "0").remove(), l = a.regions, Object.keys(s).length ? (l = l.filter(function(t) { var n = this;
                        i(this, e); var a = !1; return !t.class || (t.class.split(" ").forEach(function(t) { i(this, n), o.indexOf(t) >= 0 && (a = !0) }.bind(this)), !a) }.bind(this)), a.regions = l) : a.regions = [], l } }); var mi = { regions: _i },
                yi = { x: function(t) { var e = this.internal,
                            i = e.axis,
                            n = e.data,
                            a = i.isCustomX() && i.isCategorized(); return O(t) && (a ? this.categories(t) : (e.updateTargetX(n.targets, t), e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 }))), a ? this.categories() : n.xs }, xs: function(t) { var e = this.internal; return P(t) && (e.updateTargetXs(e.data.targets, t), e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 })), e.data.xs } },
                Ti = { flow: function(t) { var e, n = this,
                            a = this.internal;
                        (t.json || t.rows || t.columns) && a.convertData(t, function(r) { i(this, n), e = r,
                                function() { var n, r, s, o = this,
                                        l = 0,
                                        c = 0; if (a.state.redrawing || !e || !at()) return; var d = [],
                                        h = a.getMaxDataCount(),
                                        u = a.convertDataToTargets(e, !0),
                                        g = a.axis.isTimeSeries();
                                    a.data.targets.forEach(function(t) { i(this, o); for (var e = !1, n = 0; n < u.length; n++)
                                            if (t.id === u[n].id) { e = !0, t.values[t.values.length - 1] && (c = t.values[t.values.length - 1].index + 1), l = u[n].values.length; for (var a = 0; a < l; a++) u[n].values[a].index = c + a, g || (u[n].values[a].x = c + a);
                                                t.values = t.values.concat(u[n].values), u.splice(n, 1); break }
                                        e || d.push(t.id) }.bind(this)), a.data.targets.forEach(function(t) { i(this, o); for (var e = 0; e < d.length; e++)
                                            if (t.id === d[e]) { c = t.values[t.values.length - 1].index + 1; for (var n = 0; n < l; n++) t.values.push({ id: t.id, index: c + n, x: g ? a.getOtherTargetX(c + n) : c + n, value: null }) } }.bind(this)), a.data.targets.length && u.forEach(function(t) { var e = this;
                                        i(this, o); for (var n = [], r = a.data.targets[0].values[0].index; r < c; r++) n.push({ id: t.id, index: r, x: g ? a.getOtherTargetX(r) : r, value: null });
                                        t.values.forEach(function(t) { i(this, e), t.index += c, g || (t.x += c) }.bind(this)), t.values = n.concat(t.values) }.bind(this));
                                    a.data.targets = a.data.targets.concat(u); var f = a.data.targets[0],
                                        p = f.values[0];
                                    w(t.to) ? (l = 0, s = g ? nt.call(a, t.to) : t.to, f.values.forEach(function(t) { i(this, o), t.x < s && l++ }.bind(this))) : w(t.length) && (l = t.length);
                                    h ? 1 === h && g && (r = (f.values[f.values.length - 1].x - p.x) / 2, n = [new Date(+p.x - r), new Date(+p.x + r)]) : (r = g ? f.values.length > 1 ? f.values[f.values.length - 1].x - p.x : p.x - a.getXDomain(a.data.targets)[0] : 1, n = [p.x - r, p.x]);
                                    n && a.updateXDomain(null, !0, !0, !1, n), a.updateTargets(a.data.targets), a.redraw({ flow: { index: p.index, length: l, duration: b(t.duration) ? t.duration : a.config.transition_duration, done: t.done, orgDataCount: h }, withLegend: !0, withTransition: h > 1, withTrimXDomain: !1, withUpdateXAxis: !0 }) }() }.bind(this)) } },
                wi = f(10),
                Ai = function() {
                    function t(t) { this.owner = void 0, this.config = void 0, this.scale = void 0; var e = Xe(),
                            i = t.config,
                            n = t.params;
                        this.owner = t, this.config = i, this.scale = e, !i.noTransition && n.config.transition_duration || (i.withoutTransition = !0), i.range = this.scaleExtent((n.orgXScale || e).range()) }
                    t.getSizeFor1Char = function(t) { var e = this,
                            n = { w: 5.5, h: 11.5 }; return t.empty() || t.select("text").text("0").call(function(t) { i(this, e); try { var a = t.node().getBBox(),
                                    r = a.width,
                                    s = a.height;
                                r && s && (n.w = r, n.h = s) } catch (t) {} finally { t.text("") } }.bind(this)), this.getSizeFor1Char = function() { return i(this, e), n }.bind(this), n }; var e = t.prototype; return e.getTickTransformSetter = function(t) { var e = this,
                            n = this.config,
                            a = "x" === t ? function(t) { return i(this, e), "translate(" + (t + n.tickOffset) + ",0)" }.bind(this) : function(t) { return i(this, e), "translate(0," + t + ")" }.bind(this); return function(t, n) { var r = this;
                            i(this, e), t.attr("transform", function(t) { return i(this, r), b(t) ? a(Math.ceil(n(t))) : null }.bind(this)) }.bind(this) }, e.scaleExtent = function(t) { var e = t[0],
                            i = t[t.length - 1]; return e < i ? [e, i] : [i, e] }, e.generateTicks = function(t, e) { var n = this,
                            a = this.owner.params.tickStepSize,
                            r = t.domain(),
                            s = r[0],
                            o = r[1],
                            l = []; if (e && a)
                            for (var c = Math.round(s); c <= o;) l.push(c), c += a;
                        else if (t.ticks) { var d = this.config.tickArguments; if ("log" !== t.type || d) l = t.ticks.apply(t, this.config.tickArguments || []);
                            else { var h = Xe("_log").domain([s > 0 ? s : 1, o]).range(t.range());
                                l = h.ticks(); for (var u = o.toFixed().length; l.length > 15; u--) l = h.ticks(u);
                                l.splice(0, 1, s), l.splice(l.length - 1, 1, o) }
                            l = l.map(function(t) { return i(this, n), m(t) && y(t) && !isNaN(t) && Math.round(10 * t) / 10 || t }.bind(this)) } else { for (var g = Math.ceil(s); g < o; g++) l.push(g);
                            l.length > 0 && l[0] > 0 && l.unshift(l[0] - (l[1] - l[0])) } return l }, e.copyScale = function() { var t = this.scale.copy(); return t.domain().length || t.domain(this.scale.domain()), t.type = this.scale.type, t }, e.textFormatted = function(t) { var e = this.config.tickFormat,
                            i = /\d+\.\d+0{5,}\d$/.test(t) ? +(t + "").replace(/0+\d$/, "") : t,
                            n = e ? e(i) : i; return w(n) ? n : "" }, e.transitionise = function(t) { var e = this.config,
                            i = t; if (e.withoutTransition) i = t.interrupt();
                        else if (e.transition || !this.owner.params.noTransition) try { i = t.transition(e.transition) } catch (t) {}
                        return i }, t }(),
                ki = function() {
                    function t(t) { void 0 === t && (t = {}), this.helper = void 0, this.config = void 0, this.params = void 0, this.g = void 0, this.generatedTicks = void 0; var e = { innerTickSize: 6, outerTickSize: t.outerTick ? 6 : 0, orient: "bottom", range: [], tickArguments: null, tickCentered: null, tickCulling: !0, tickFormat: null, tickLength: 9, tickOffset: 0, tickPadding: 3, tickValues: null, transition: null, noTransition: t.noTransition };
                        e.tickLength = Math.max(e.innerTickSize, 0) + e.tickPadding, this.config = e, this.params = t, this.helper = new Ai(this) } var e = t.prototype; return e.create = function(t) { var e = this,
                            n = e.config,
                            r = e.helper,
                            s = e.params,
                            o = r.scale,
                            l = n.orient,
                            c = this.splitTickText.bind(e),
                            d = /^(left|right)$/.test(l),
                            h = /^(top|bottom)$/.test(l),
                            u = r.getTickTransformSetter(h ? "x" : "y"),
                            g = u === r.axisX ? "y" : "x",
                            f = /^(top|left)$/.test(l) ? -1 : 1,
                            p = s.tickTextRotate;
                        this.config.range = o.rangeExtent ? o.rangeExtent() : r.scaleExtent((s.orgXScale || o).range()); var v, x = n.innerTickSize,
                            b = n.tickLength,
                            _ = n.range,
                            m = s.id,
                            T = m && /^(x|y|y2)$/.test(m) ? s.config["axis_" + m + "_tick_text_position"] : { x: 0, y: 0 },
                            w = "subX" === m ? "subchart_axis_x" : "axis_" + m,
                            A = s.config[w + "_show"],
                            k = !!A && s.config[w + "_tick_show"],
                            S = !!A && s.config[w + "_tick_text_show"];
                        t.each((function() { var t = this,
                                m = (0, a.select)(this),
                                w = this.__chart__ || o,
                                A = r.copyScale();
                            v = m, this.__chart__ = A, n.tickOffset = s.isCategory ? Math.ceil((A(1) - A(0)) / 2) : 0; var C = m.selectAll(".domain").data([0]); if (C.enter().append("path").attr("class", "domain").merge(C).attr("d", function() { i(this, t); var e = n.outerTickSize * f; return h ? "M" + _[0] + "," + e + "V0H" + _[1] + "V" + e : "M" + e + "," + _[0] + "H0V" + _[1] + "H" + e }.bind(this)), k || S) { var R = n.tickValues || r.generateTicks(A, d);
                                e.generatedTicks = R; var E = m.selectAll(".tick").data(R, A),
                                    L = E.enter().insert("g", ".domain").attr("class", "tick"),
                                    P = E.exit().remove();
                                E = L.merge(E), k && L.append("line"), S && L.append("text"); var I = Ai.getSizeFor1Char(E),
                                    D = [],
                                    z = E.select("text").selectAll("tspan").data(function(e, n) { var a = this;
                                        i(this, t); var o = s.tickMultiline ? c(e, A, R, d, I.w) : O(r.textFormatted(e)) ? r.textFormatted(e).concat() : [r.textFormatted(e)]; return D[n] = o.length, o.map(function(t) { return i(this, a), { index: n, splitted: t } }.bind(this)) }.bind(this));
                                z.exit().remove(), (z = z.enter().append("tspan").merge(z).text(function(e) { return i(this, t), e.splitted }.bind(this))).attr("x", h ? 0 : b * f).attr("dx", function() { i(this, t); var e = 0; return /(top|bottom)/.test(l) && p && (e = 8 * Math.sin(Math.PI * (p / 180)) * ("top" === l ? -1 : 1)), e + (T.x || 0) }.bind(this)()).attr("dy", function(e, n) { i(this, t); var a = 0; return "top" !== l && (a = I.h, 0 === n && (a = d ? -((D[e.index] - 1) * (I.h / 2) - 3) : 0 === T.y ? ".71em" : 0)), y(a) && T.y ? a + T.y : a || ".71em" }.bind(this)); var M = E.select("line"),
                                    X = E.select("text"); if (L.select("line").attr(g + "2", x * f), L.select("text").attr(g, b * f), e.setTickLineTextPosition(M, X), s.tickTitle) { var $ = X.select("title");
                                    ($.empty() ? X.append("title") : $).text(function(e) { return i(this, t), s.tickTitle[e] }.bind(this)) } if (A.bandwidth) { var F = A,
                                        B = F.bandwidth() / 2;
                                    w = function(e) { return i(this, t), F(e) + B }.bind(this), A = w } else w.bandwidth ? w = A : u(P, A);
                                E = s.owner.state.flowing ? r.transitionise(E) : s.owner.$T(E), u(L, w), u(E.style("opacity", null), A) } })), this.g = v }, e.getGeneratedTicks = function(t) { var e, n = (null == (e = this.generatedTicks) ? void 0 : e.length) - 1,
                            a = this.generatedTicks,
                            r = this; if (n > t) { var s = Math.round(n / t + .1);
                            a = this.generatedTicks.map(function(t, e) { return i(this, r), e % s == 0 ? t : null }.bind(this)).filter(function(t) { return i(this, r), null !== t }.bind(this)).splice(0, t) } return a }, e.getTickXY = function() { var t = this.config,
                            e = { x: 0, y: 0 }; return this.params.isCategory && (e.x = t.tickCentered ? 0 : t.tickOffset, e.y = t.tickCentered ? t.tickOffset : 0), e }, e.getTickSize = function(t) { var e = this.helper.scale,
                            i = this.config,
                            n = i,
                            a = n.innerTickSize,
                            r = n.range,
                            s = e(t) + (i.tickCentered ? 0 : i.tickOffset); return r[0] < s && s < r[1] ? a : 0 }, e.setTickLineTextPosition = function(t, e) { var n = this,
                            a = this.getTickXY(),
                            r = this.config,
                            s = r.innerTickSize,
                            o = r.orient,
                            l = r.tickLength,
                            c = r.tickOffset,
                            d = this.params.tickTextRotate,
                            h = function(t) { i(this, n); var e = ["start", "end"]; return "top" === o && e.reverse(), t ? e[t > 0 ? 0 : 1] : "middle" }.bind(this),
                            u = function(t) { return i(this, n), t ? "rotate(" + t + ")" : null }.bind(this),
                            g = function(t) { return i(this, n), t ? 11.5 - 2.5 * (t / ("bottom" === o ? 15 : 23)) * (t > 0 ? 1 : -1) : l }.bind(this); switch (o) {
                            case "bottom":
                                t.attr("x1", a.x).attr("x2", a.x).attr("y2", this.getTickSize.bind(this)), e.attr("x", 0).attr("y", g(d)).style("text-anchor", h(d)).attr("transform", u(d)); break;
                            case "top":
                                t.attr("x2", 0).attr("y2", -s), e.attr("x", 0).attr("y", 2 * -g(d)).style("text-anchor", h(d)).attr("transform", u(d)); break;
                            case "left":
                                t.attr("x2", -s).attr("y1", a.y).attr("y2", a.y), e.attr("x", -l).attr("y", c).style("text-anchor", "end"); break;
                            case "right":
                                t.attr("x2", s).attr("y2", 0), e.attr("x", l).attr("y", 0).style("text-anchor", "start") } }, e.splitTickText = function(t, e, i, n, a) { var r = this.params,
                            s = this.helper.textFormatted(t),
                            o = m(s) && s.indexOf("\n") > -1 ? s.split("\n") : []; if (o.length) return o; if (O(s)) return s; var l = r.tickWidth; return (!l || l <= 0) && (l = n ? 95 : r.isCategory ? Math.ceil(e(i[1]) - e(i[0])) - 12 : 110),
                            function t(e, i) { for (var n, r, s, o = 1; o < i.length; o++)
                                    if (" " === i.charAt(o) && (r = o), n = i.substr(0, o + 1), s = a * n.length, l < s) return t(e.concat(i.substr(0, r || o)), i.slice(r ? r + 1 : o));
                                return e.concat(i) }(o, s + "") }, e.scale = function(t) { return arguments.length ? (this.helper.scale = t, this) : this.helper.scale }, e.orient = function(t) { return arguments.length ? (this.config.orient = t in { top: 1, right: 1, bottom: 1, left: 1 } ? t + "" : "bottom", this) : this.config.orient }, e.tickFormat = function(t) { var e = this.config; return arguments.length ? (e.tickFormat = t, this) : e.tickFormat }, e.tickCentered = function(t) { var e = this.config; return arguments.length ? (e.tickCentered = t, this) : e.tickCentered }, e.tickOffset = function() { return this.config.tickOffset }, e.tickInterval = function(t) { var e, n = this,
                            a = this.config,
                            r = a.outerTickSize,
                            s = a.tickOffset,
                            o = a.tickValues; if (this.params.isCategory) e = 2 * s;
                        else { e = (this.g.select("path.domain").node().getTotalLength() - 2 * r) / (t || this.g.selectAll("line").size()); var l = o ? o.map(function(t, e, a) { i(this, n); var r = e + 1; return r < a.length ? this.helper.scale(a[r]) - this.helper.scale(t) : null }.bind(this)).filter(Boolean) : [];
                            e = Math.min.apply(Math, l.concat([e])) } return e === 1 / 0 ? 0 : e }, e.ticks = function() { for (var t = this.config, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n]; return i.length ? (t.tickArguments = W(i), this) : t.tickArguments }, e.tickCulling = function(t) { var e = this.config; return arguments.length ? (e.tickCulling = t, this) : e.tickCulling }, e.tickValues = function(t) { var e = this,
                            n = this.config; if (_(t)) n.tickValues = function() { return i(this, e), t(this.helper.scale.domain()) }.bind(this);
                        else { if (!arguments.length) return n.tickValues;
                            n.tickValues = t } return this }, e.setTransition = function(t) { return this.config.transition = t, this }, t }(),
                Si = { getAxisInstance: function() { return this.axis || new Ci(this) } },
                Ci = function() {
                    function t(t) { this.owner = void 0, this.x = void 0, this.subX = void 0, this.y = void 0, this.y2 = void 0, this.axesList = {}, this.tick = { x: null, y: null, y2: null }, this.xs = [], this.orient = { x: "bottom", y: "left", y2: "right", subX: "bottom" }, this.owner = t, this.setOrient() } var e = t.prototype; return e.getAxisClassName = function(t) { return ut.axis + " " + ut["axis" + H(t)] }, e.isHorizontal = function(t, e) { var i = t.config.axis_rotated; return e ? i : !i }, e.isCategorized = function() { var t = this.owner,
                            e = t.config,
                            i = t.state; return e.axis_x_type.indexOf("category") >= 0 || i.hasRadar }, e.isCustomX = function() { var t = this.owner.config; return !this.isTimeSeries() && (t.data_x || L(t.data_xs)) }, e.isTimeSeries = function(t) { return void 0 === t && (t = "x"), "timeseries" === this.owner.config["axis_" + t + "_type"] }, e.isLog = function(t) { return void 0 === t && (t = "x"), "log" === this.owner.config["axis_" + t + "_type"] }, e.isTimeSeriesY = function() { return this.isTimeSeries("y") }, e.getAxisType = function(t) { void 0 === t && (t = "x"); var e = "linear"; return this.isTimeSeries(t) ? e = this.owner.config.axis_x_localtime ? "time" : "utc" : this.isLog(t) && (e = "log"), e }, e.init = function() { var t = this,
                            e = this.owner,
                            n = e.config,
                            a = e.$el,
                            r = a.main,
                            s = a.axis,
                            o = e.state.clip,
                            l = n.axis_rotated,
                            c = ["x", "y"];
                        n.axis_y2_show && c.push("y2"), c.forEach(function(a) { var c = this;
                            i(this, t); var d = this.getAxisClassName(a),
                                h = ut["axis" + a.toUpperCase() + "Label"];
                            s[a] = r.append("g").attr("class", d).attr("clip-path", function() { i(this, c); var t = null; return "x" === a ? t = o.pathXAxis : "y" === a && (t = o.pathYAxis), t }.bind(this)).attr("transform", e.getTranslate(a)).style("visibility", n["axis_" + a + "_show"] ? null : "hidden"), s[a].append("text").attr("class", h).attr("transform", ["rotate(-90)", null]["x" === a ? +!l : +l]).style("text-anchor", function() { return i(this, c), this.textAnchorForAxisLabel(a) }.bind(this)), this.generateAxes(a) }.bind(this)) }, e.setOrient = function() { var t = this.owner.config,
                            e = t.axis_rotated,
                            i = t.axis_y_inner,
                            n = t.axis_y2_inner;
                        this.orient = { x: e ? "left" : "bottom", y: e ? i ? "top" : "bottom" : i ? "right" : "left", y2: e ? n ? "bottom" : "top" : n ? "left" : "right", subX: e ? "left" : "bottom" } }, e.generateAxes = function(t) { var e, n = this,
                            a = this.owner,
                            r = a.config,
                            s = [],
                            o = r["axis_" + t + "_axes"],
                            l = r.axis_rotated; "x" === t ? e = l ? wi.axisLeft : wi.axisBottom : "y" === t ? e = l ? wi.axisBottom : wi.axisLeft : "y2" === t && (e = l ? wi.axisTop : wi.axisRight), o.length && o.forEach(function(r) { var o = this;
                            i(this, n); var l = r.tick || {},
                                c = a.scale[t].copy();
                            r.domain && c.domain(r.domain), s.push(e(c).ticks(l.count).tickFormat(_(l.format) ? l.format.bind(a.api) : function(t) { return i(this, o), t }.bind(this)).tickValues(l.values).tickSizeOuter(!1 === l.outer ? 0 : 6)) }.bind(this)), this.axesList[t] = s }, e.updateAxes = function() { var t = this,
                            e = this.owner,
                            n = e.config,
                            a = e.$el.main,
                            r = e.$T;
                        Object.keys(this.axesList).forEach(function(s) { var o = this;
                            i(this, t); var l = n["axis_" + s + "_axes"],
                                c = e.scale[s].copy(),
                                d = c.range();
                            this.axesList[s].forEach(function(t, h) { var u = this;
                                i(this, o); var g = t.scale().range();
                                d.every(function(t, e) { return i(this, u), t === g[e] }.bind(this)) || t.scale().range(d); var f = this.getAxisClassName(s) + "-" + (h + 1),
                                    p = a.select("." + f.replace(/\s/, "."));
                                p.empty() ? p = a.append("g").attr("class", f).style("visibility", n["axis_" + s + "_show"] ? null : "hidden").call(t) : (l[h].domain && c.domain(l[h].domain), r(p).call(t.scale(c))), p.attr("transform", e.getTranslate(s, h + 1)) }.bind(this)) }.bind(this)) }, e.setAxis = function(t, e, i, n) { var a = this.owner; "subX" !== t && (this.tick[t] = this.getTickValues(t)), this[t] = this.getAxis(t, e, i, !("x" !== t || !(a.scale.zoom || a.config.subchart_show || a.state.resizing)) || n) }, e.getAxis = function(t, e, n, a, r) { var s, o = this,
                            l = this.owner,
                            c = l.config,
                            d = /^(x|subX)$/.test(t),
                            h = d ? "x" : t,
                            u = d && this.isCategorized(),
                            g = this.orient[t],
                            f = r ? 0 : l.getAxisTickRotate(h); if (d) s = "subX" === t ? l.format.subXAxisTick : l.format.xAxisTick;
                        else { var p = c["axis_" + t + "_tick_format"];
                            _(p) && (s = p.bind(l.api)) } var v = this.tick[h],
                            x = K({ outerTick: n, noTransition: a, config: c, id: t, tickTextRotate: f, owner: l }, d && { isCategory: u, tickMultiline: c.axis_x_tick_multiline, tickWidth: c.axis_x_tick_width, tickTitle: u && c.axis_x_tick_tooltip && l.api.categories(), orgXScale: l.scale.x });
                        d || (x.tickStepSize = c["axis_" + h + "_tick_stepSize"]); var b = new ki(x).scale(d && l.scale.zoom || e).orient(g); if (d && this.isTimeSeries() && v && !_(v)) { var m = nt.bind(l);
                            v = v.map(function(t) { return i(this, o), m(t) }.bind(this)) } else !d && this.isTimeSeriesY() && (b.ticks(c.axis_y_tick_time_value), v = null);
                        v && b.tickValues(v), b.tickFormat(s || !d && l.isStackNormalized() && function(t) { return i(this, o), t + "%" }.bind(this)), u && (b.tickCentered(c.axis_x_tick_centered), E(c.axis_x_tick_culling) && (c.axis_x_tick_culling = !1)); var y = c["axis_" + h + "_tick_count"]; return y && b.ticks(y), b }, e.updateXAxisTickValues = function(t, e) { var i, n = this.owner,
                            a = n.config,
                            r = a.axis_x_tick_fit,
                            s = a.axis_x_tick_count; if ((r || s && r) && (i = n.mapTargetsToUniqueXs(t), this.isCategorized() && s > i.length && (s = i.length), i = this.generateTickValues(i, s, this.isTimeSeries())), e) e.tickValues(i);
                        else if (this.x) { var o;
                            this.x.tickValues(i), null == (o = this.subX) || o.tickValues(i) } return i }, e.getId = function(t) { var e = this.owner,
                            i = e.config,
                            n = e.scale,
                            a = i.data_axes[t]; return a && n[a] || (a = "y"), a }, e.getXAxisTickFormat = function(t) { var e, n = this,
                            a = this.owner,
                            r = a.config,
                            s = a.format,
                            o = t && r.subchart_axis_x_tick_format || r.axis_x_tick_format,
                            l = this.isTimeSeries(),
                            c = this.isCategorized(); return o ? _(o) ? e = o.bind(a.api) : l && (e = function(t) { return i(this, n), t ? s.axisTime(o)(t) : "" }.bind(this)) : e = l ? s.defaultAxisTime : c ? a.categoryName : function(t) { return i(this, n), t < 0 ? t.toFixed(0) : t }.bind(this), _(e) ? function(t) { return i(this, n), e.apply(a, c ? [t, a.categoryName(t)] : [t]) }.bind(this) : e }, e.getTickValues = function(t) { var e = this.owner,
                            i = e.config["axis_" + t + "_tick_values"],
                            n = e[t + "Axis"]; return (_(i) ? i.call(e.api) : i) || (n ? n.tickValues() : void 0) }, e.getLabelOptionByAxisId = function(t) { return this.owner.config["axis_" + t + "_label"] }, e.getLabelText = function(t) { var e = this.getLabelOptionByAxisId(t); return m(e) ? e : e ? e.text : null }, e.setLabelText = function(t, e) { var i = this.owner.config,
                            n = this.getLabelOptionByAxisId(t);
                        m(n) ? i["axis_" + t + "_label"] = e : n && (n.text = e) }, e.getLabelPosition = function(t, e) { var n = this,
                            a = this.owner.config.axis_rotated,
                            r = this.getLabelOptionByAxisId(t),
                            s = R(r) && r.position ? r.position : e[+!a],
                            o = function(t) { return i(this, n), !!~s.indexOf(t) }.bind(this); return { isInner: o("inner"), isOuter: o("outer"), isLeft: o("left"), isCenter: o("center"), isRight: o("right"), isTop: o("top"), isMiddle: o("middle"), isBottom: o("bottom") } }, e.getAxisLabelPosition = function(t) { return this.getLabelPosition(t, "x" === t ? ["inner-top", "inner-right"] : ["inner-right", "inner-top"]) }, e.getLabelPositionById = function(t) { return this.getAxisLabelPosition(t) }, e.xForAxisLabel = function(t) { var e = this.owner,
                            i = e.state,
                            n = i.width,
                            a = i.height,
                            r = this.getAxisLabelPosition(t),
                            s = r.isMiddle ? -a / 2 : 0; return this.isHorizontal(e, "x" !== t) ? s = r.isLeft ? 0 : r.isCenter ? n / 2 : n : r.isBottom && (s = -a), s }, e.dxForAxisLabel = function(t) { var e = this.owner,
                            i = this.getAxisLabelPosition(t),
                            n = i.isBottom ? "0.5em" : "0"; return this.isHorizontal(e, "x" !== t) ? n = i.isLeft ? "0.5em" : i.isRight ? "-0.5em" : "0" : i.isTop && (n = "-0.5em"), n }, e.textAnchorForAxisLabel = function(t) { var e = this.owner,
                            i = this.getAxisLabelPosition(t),
                            n = i.isMiddle ? "middle" : "end"; return this.isHorizontal(e, "x" !== t) ? n = i.isLeft ? "start" : i.isCenter ? "middle" : "end" : i.isBottom && (n = "start"), n }, e.dyForAxisLabel = function(t) { var e, i = this.owner,
                            n = i.config,
                            a = n.axis_rotated,
                            r = this.getAxisLabelPosition(t).isInner,
                            s = n["axis_" + t + "_tick_rotate"] ? i.getHorizontalAxisHeight(t) : 0,
                            o = this.getMaxTickWidth(t); if ("x" === t) { var l = n.axis_x_height;
                            e = a ? r ? "1.2em" : -25 - o : r ? "-0.5em" : l ? l - 10 : s ? s - 10 : "3em" } else e = { y: ["-0.5em", 10, "3em", "1.2em", 10], y2: ["1.2em", -20, "-2.2em", "-0.5em", 15] }[t], e = a ? r ? e[0] : s ? s * ("y2" === t ? -1 : 1) - e[1] : e[2] : r ? e[3] : (e[4] + (n["axis_" + t + "_inner"] ? 0 : o + e[4])) * ("y" === t ? -1 : 1); return e }, e.getMaxTickWidth = function(t, e) { var n = this,
                            a = this.owner,
                            r = a.config,
                            s = a.state.current,
                            o = a.$el,
                            l = o.svg,
                            c = o.chart,
                            d = s.maxTickWidths[t],
                            h = 0; if (e || !r["axis_" + t + "_show"] || 0 === a.filterTargetsToShow().length) return d.size; if (l) { var u = /^y2?$/.test(t),
                                g = a.filterTargetsToShow(a.data.targets),
                                f = a.scale[t].copy().domain(a["get" + (u ? "Y" : "X") + "Domain"](g, t)),
                                p = f.domain(),
                                v = p[0] === p[1] && p.every(function(t) { return i(this, n), t > 0 }.bind(this)),
                                x = O(d.domain) && d.domain[0] === d.domain[1] && d.domain.every(function(t) { return i(this, n), t > 0 }.bind(this)); if (v || x) return d.size;
                            d.domain = p, u || d.ticks.splice(0); var b = this.getAxis(t, f, !1, !1, !0),
                                _ = r["axis_" + t + "_tick_count"];!r["axis_" + t + "_tick_values"] && _ && b.tickValues(this.generateTickValues(p, _, u ? this.isTimeSeriesY() : this.isTimeSeries())), u || this.updateXAxisTickValues(g, b); var m = c.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0").style("left", "0");
                            b.create(m), m.selectAll("text").each((function(t, e) { var i = this.getBoundingClientRect().width;
                                h = Math.max(h, i), u || (d.ticks[e] = i) })), m.remove() } return h > 0 && (d.size = h), d.size }, e.getXAxisTickTextY2Overflow = function(t) { var e = this.owner,
                            i = e.axis,
                            n = e.config,
                            a = e.state,
                            r = e.getAxisTickRotate("x"); if ((i.isCategorized() || i.isTimeSeries()) && n.axis_x_tick_fit && !n.axis_x_tick_culling && !n.axis_x_tick_multiline && r > 0 && r < 90) { var s = a.current.width - e.getCurrentPaddingLeft(),
                                o = this.getXAxisTickMaxOverflow(r, s - t),
                                l = Math.max(0, o) + t; return Math.min(l, s / 2) } return 0 }, e.getXAxisTickMaxOverflow = function(t, e) { for (var i = this.owner, n = i.axis, a = i.config, r = i.state, s = n.isTimeSeries(), o = r.current.maxTickWidths.x.ticks, l = o.length, c = r.axis.x.padding, d = c.left, h = c.right, u = 0, g = l - (s && a.axis_x_tick_fit ? .5 : 0), f = 0; f < l; f++) { var p = f + 1,
                                v = Math.cos(Math.PI * t / 180) * o[f],
                                x = p - (s ? 1 : .5) + d; if (!(x <= 0)) { var b = (e - v) / x,
                                    _ = v - b / 2 - ((g - p) * b + h * b);
                                u = Math.max(u, _) } } var m = i.filterTargetsToShow(i.data.targets),
                            y = 0; if (!s && a.axis_x_tick_count <= m.length && m[0].values.length) { var T = Xe(i.axis.getAxisType("x"), 0, e - u).domain([-1 * d, i.getXDomainMax(i.data.targets) + 1 + h]);
                            y = Math.ceil((T(1) - T(0)) / 2) } return u + y }, e.updateLabels = function(t) { var e = this,
                            n = this.owner,
                            a = n.$el.main,
                            r = n.$T,
                            s = { x: a.select("." + ut.axisX + " ." + ut.axisXLabel), y: a.select("." + ut.axisY + " ." + ut.axisYLabel), y2: a.select("." + ut.axisY2 + " ." + ut.axisY2Label) };
                        Object.keys(s).filter(function(t) { return i(this, e), !s[t].empty() }.bind(this)).forEach(function(n) { var a = this;
                            i(this, e); var o = s[n];
                            r(o, t).attr("x", function() { return i(this, a), this.xForAxisLabel(n) }.bind(this)).attr("dx", function() { return i(this, a), this.dxForAxisLabel(n) }.bind(this)).attr("dy", function() { return i(this, a), this.dyForAxisLabel(n) }.bind(this)).text(function() { return i(this, a), this.getLabelText(n) }.bind(this)) }.bind(this)) }, e.getPadding = function(t, e, i, n) { var a = y(t) ? t : t[e]; return b(a) ? this.owner.convertPixelToScale(/(bottom|top)/.test(e) ? "y" : "x", a, n) : i }, e.generateTickValues = function(t, e, n) { var a = this,
                            r = t; if (e) { var s = _(e) ? e() : e; if (1 === s) r = [t[0]];
                            else if (2 === s) r = [t[0], t[t.length - 1]];
                            else if (s > 2) { var o, l = this.isCategorized(),
                                    c = s - 2,
                                    d = t[0],
                                    h = t[t.length - 1];
                                r = [d]; for (var u = 0; u < c; u++) o = +d + (h - d) / (c + 1) * (u + 1), r.push(n ? new Date(o) : l ? Math.round(o) : o);
                                r.push(h) } } return n || (r = r.sort(function(t, e) { return i(this, a), t - e }.bind(this))), r }, e.generateTransitions = function(t) { var e = this,
                            n = this.owner,
                            a = n.$el.axis,
                            r = n.$T,
                            s = ["x", "y", "y2", "subX"].map(function(n) { return i(this, e), r(a[n], t) }.bind(this)); return { axisX: s[0], axisY: s[1], axisY2: s[2], axisSubX: s[3] } }, e.redraw = function(t, e, n) { var a = this,
                            r = this.owner,
                            s = r.config,
                            o = r.$el,
                            l = e ? "0" : null;
                        ["x", "y", "y2", "subX"].forEach(function(e) { i(this, a); var r = this[e],
                                c = o.axis[e];
                            r && c && (n || s.transition_duration || (r.config.withoutTransition = !0), c.style("opacity", l), r.create(t["axis" + H(e)])) }.bind(this)), this.updateAxes() }, e.redrawAxis = function(t, e, n, a, r) { var s, o, l, c = this,
                            d = this.owner,
                            h = d.config,
                            u = d.scale,
                            g = d.$el,
                            f = !!u.zoom; if (!f && this.isCategorized() && 0 === t.length && u.x.domain([0, g.axis.x.selectAll(".tick").size()]), u.x && t.length) f || d.updateXDomain(t, e.UpdateXDomain, e.UpdateOrgXDomain, e.TrimXDomain), h.axis_x_tick_values || this.updateXAxisTickValues(t);
                        else if (this.x) { var p;
                            this.x.tickValues([]), null == (p = this.subX) || p.tickValues([]) }(h.zoom_rescale && !a && (s = u.x.orgDomain()), ["y", "y2"].forEach(function(e) { var n = this;
                            i(this, c); var a = "axis_" + e + "_",
                                r = u[e]; if (r) { var o = h[a + "tick_values"],
                                    l = h[a + "tick_count"]; if (r.domain(d.getYDomain(t, e, s)), !o && l) { var g = d.axis[e],
                                        f = r.domain();
                                    g.tickValues(this.generateTickValues(f, f.every(function(t) { return i(this, n), 0 === t }.bind(this)) ? 1 : l, this.isTimeSeriesY())) } } }.bind(this)), this.redraw(n, d.hasArcType(), r), this.updateLabels(e.Transition), (e.UpdateXDomain || e.UpdateXAxis || e.Y) && t.length && this.setCulling(), e.Y) && (null == (o = u.subY) || o.domain(d.getYDomain(t, "y")), null == (l = u.subY2) || l.domain(d.getYDomain(t, "y2"))) }, e.setCulling = function() { var t = this,
                            e = this.owner,
                            n = e.config,
                            a = e.state,
                            r = a.clip,
                            s = a.current,
                            o = e.$el;
                        ["subX", "x", "y", "y2"].forEach(function(e) { i(this, t); var a = o.axis[e],
                                l = "axis_" + ("subX" === e ? "x" : e) + "_tick_culling",
                                c = n[l]; if (a && c) { var d, h = a.selectAll(".tick"),
                                    u = J(h.data()),
                                    g = u.length,
                                    f = n[l + "_max"],
                                    p = n[l + "_lines"]; if (g) { for (var v = 1; v < g; v++)
                                        if (g / v < f) { d = v; break }
                                    h.each((function(t) { var e = p ? this.querySelector("text") : this;
                                        e && (e.style.display = u.indexOf(t) % d ? "none" : null) })) } else h.style("display", null); if ("x" === e) { var x = s.maxTickWidths.x.clipPath ? r.pathXAxisTickTexts : null;
                                    o.svg.selectAll("." + ut.axisX + " .tick text").attr("clip-path", x) } } }.bind(this)) }, t }(),
                Ri = { initEventRect: function() { this.$el.main.select("." + ct.chart).append("g").attr("class", yt.eventRects).style("fill-opacity", "0") }, redrawEventRect: function() { var t = this,
                            e = t.config,
                            i = t.state,
                            n = t.$el,
                            a = t.isMultipleX(); if (n.eventRect) t.updateEventRect(n.eventRect, !0);
                        else { var r = t.$el.main.select("." + yt.eventRects).style("cursor", e.zoom_enabled && "drag" !== e.zoom_type ? e.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(yt.eventRectsMultiple, a).classed(yt.eventRectsSingle, !a).selectAll("." + yt.eventRect).data([0]).enter().append("rect");
                            t.updateEventRect(r), a ? t.generateEventRectsForMultipleXs(r) : t.generateEventRectsForSingleX(r), r.call(t.getDraggableSelection()), n.eventRect = r, "touch" !== t.state.inputType || n.svg.on("touchstart.eventRect") || t.hasArcType() || t.bindTouchOnEventRect(a) } if (!a) { var s = t.getMaxDataCountTarget();
                            t.updateDataIndexByX(s), t.updateXs(s), null == t.updatePointClass || t.updatePointClass(!0), i.eventReceiver.data = s }
                        t.updateEventRectData() }, bindTouchOnEventRect: function(t) { var e, n = this,
                            a = this,
                            r = a.config,
                            s = a.state,
                            o = a.$el,
                            l = o.eventRect,
                            c = o.svg,
                            d = function(e) { if (i(this, n), t) a.selectRectForMultipleXs(e);
                                else { var r = a.getDataIndexFromEvent(s.event);
                                    a.callOverOutForTouch(r), -1 === r ? a.unselectRect() : a.selectRectForSingle(e, l, r) } }.bind(this),
                            h = function() { i(this, n), a.unselectRect(), a.callOverOutForTouch() }.bind(this),
                            u = r.interaction_inputType_touch.preventDefault,
                            g = A(u) && u || !1,
                            f = !isNaN(u) && u || null,
                            p = function(t) { i(this, n); var a = t.type,
                                    s = t.changedTouches[0]["client" + (r.axis_rotated ? "Y" : "X")]; "touchstart" === a ? g ? t.preventDefault() : null !== f && (e = s) : "touchmove" === a && (g || !0 === e || null !== f && Math.abs(e - s) >= f) && (e = !0, t.preventDefault()) }.bind(this);
                        l.on("touchstart", function(t) { i(this, n), s.event = t, a.updateEventRect() }.bind(this)).on("touchstart.eventRect touchmove.eventRect", function(t) { if (i(this, n), s.event = t, !l.empty() && l.classed(yt.eventRect)) { if (s.dragging || s.flowing || a.hasArcType() || t.touches.length > 1) return;
                                p(t), d(l.node()) } else h() }.bind(this), !0).on("touchend.eventRect", function(t) { i(this, n), s.event = t, !l.empty() && l.classed(yt.eventRect) && (a.hasArcType() || !a.toggleShape || s.cancelClick) && s.cancelClick && (s.cancelClick = !1) }.bind(this), !0), c.on("touchstart", function(t) { i(this, n), s.event = t; var e = t.target;
                            e && e !== l.node() && h() }.bind(this)) }, updateEventRect: function(t, e) { var n = this;
                        void 0 === e && (e = !1); var a = this.state,
                            r = this.$el,
                            s = a,
                            o = s.eventReceiver,
                            l = s.width,
                            c = s.height,
                            d = s.rendered,
                            h = s.resizing,
                            u = t || r.eventRect,
                            g = function() { i(this, n), o && (o.rect = u.node().getBoundingClientRect()) }.bind(this);
                        (!d || h || e) && (u.attr("x", 0).attr("y", 0).attr("width", l).attr("height", c), d || u.attr("class", yt.eventRect)), g() }, updateEventRectData: function() { var t, e, n, a, r = this,
                            s = this,
                            o = s.config,
                            l = s.scale,
                            c = s.state,
                            d = l.zoom || l.x,
                            h = o.axis_rotated; if (s.isMultipleX()) t = 0, e = 0, n = c.width, a = c.height;
                        else { var u, g; if (s.axis.isCategorized()) u = s.getEventRectWidth(), g = function(t) { return i(this, r), d(t.x) - u / 2 }.bind(this);
                            else { var f = function(t) { var e = t.index; return i(this, r), { prev: s.getPrevX(e), next: s.getNextX(e) } }.bind(this);
                                u = function(t) { var e = this;
                                    i(this, r); var n, a = f(t),
                                        s = d.domain(); return null === a.prev && null === a.next ? n = h ? c.height : c.width : null === a.prev ? n = (d(a.next) + d(t.x)) / 2 : null === a.next ? n = d(s[1]) - (d(a.prev) + d(t.x)) / 2 : (Object.keys(a).forEach(function(t, n) { var r;
                                        i(this, e), a[t] = null != (r = a[t]) ? r : s[n] }.bind(this)), n = Math.max(0, (d(a.next) - d(a.prev)) / 2)), n }.bind(this), g = function(t) { i(this, r); var e = f(t); return null === e.prev && null === e.next ? 0 : null === e.prev ? d(d.domain()[0]) : (d(t.x) + d(e.prev)) / 2 }.bind(this) }
                            t = h ? 0 : g, e = h ? g : 0, n = h ? c.width : u, a = h ? u : c.height } var p = c.eventReceiver,
                            v = function(t, e) { return i(this, r), _(t) ? t(e) : t }.bind(this);
                        p.coords.splice(p.data.length), p.data.forEach(function(s, o) { i(this, r), p.coords[o] = { x: v(t, s), y: v(e, s), w: v(n, s), h: v(a, s) } }.bind(this)) }, selectRectForMultipleXs: function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = n.state,
                            s = n.filterTargetsToShow(n.data.targets); if (!r.dragging && !n.hasArcType(s)) { var o = F(r.event, t),
                                l = n.findClosestFromTargets(s, o); if (!r.mouseover || l && l.id === r.mouseover.id || (a.data_onout.call(n.api, r.mouseover), r.mouseover = void 0), l) { var c = (n.isBubbleType(l) || n.isScatterType(l) || !a.tooltip_grouped ? [l] : n.filterByX(s, l.x)).map(function(t) { return i(this, e), n.addName(t) }.bind(this));
                                n.showTooltip(c, t), n.setExpand(l.index, l.id, !0), n.showGridFocus(c), (n.isBarType(l.id) || n.dist(l, o) < a.point_sensitivity) && (n.$el.svg.select("." + yt.eventRect).style("cursor", "pointer"), r.mouseover || (a.data_onover.call(n.api, l), r.mouseover = l)) } else n.unselectRect() } }, unselectRect: function() { var t = this,
                            e = t.config,
                            i = t.$el,
                            n = i.circle,
                            a = i.tooltip;
                        t.$el.svg.select("." + yt.eventRect).style("cursor", null), t.hideGridFocus(), a && (t.hideTooltip(), t._handleLinkedCharts(!1)), n && !e.point_focus_only && t.unexpandCircles(), t.expandBarTypeShapes(!1) }, generateEventRectsForSingleX: function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = n.state,
                            s = r.eventReceiver,
                            o = t.style("cursor", a.data_selection_enabled && a.data_selection_grouped ? "pointer" : null).on("click", (function(t) { r.event = t; var e = s.currentIdx,
                                    i = s.data[-1 === e ? n.getDataIndexFromEvent(t) : e];
                                n.clickHandlerForSingleX.bind(this)(i, n) })); if ("mouse" === r.inputType) { var l = function(t) { i(this, e); var a = t ? n.getDataIndexFromEvent(t) : s.currentIdx; return a > -1 ? s.data[a] : null }.bind(this);
                            o.on("mouseover", function(t) { i(this, e), r.event = t, n.updateEventRect() }.bind(this)).on("mousemove", (function(t) { var e = l(t); if (r.event = t, e) { var i = e.index,
                                        c = a.line_step_type; if (a.line_step_tooltipMatch && n.hasType("step") && /^step\-(before|after)$/.test(c)) { var d = n.scale.zoom || n.scale.x,
                                            h = n.axis.xs[i],
                                            u = d.invert(F(t, this)[0]); "step-after" === c && u < h ? i -= 1 : "step-before" === c && u > h && (i += 1) }
                                    r.dragging || r.flowing || n.hasArcType() || a.tooltip_grouped && i === s.currentIdx || (i !== s.currentIdx && (n.setOverOut(!1, s.currentIdx), s.currentIdx = i), -1 === i ? n.unselectRect() : n.selectRectForSingle(this, o, i), n.setOverOut(-1 !== i, i)) } })).on("mouseout", function(t) { i(this, e), r.event = t, a && !n.hasArcType() && -1 !== s.currentIdx && (n.unselectRect(), n.setOverOut(!1, s.currentIdx), s.currentIdx = -1) }.bind(this)) } return o }, clickHandlerForSingleX: function(t, e) { var i = e,
                            n = i.config,
                            a = i.state,
                            r = i.$el.main; if (!t || i.hasArcType() || a.cancelClick) a.cancelClick && (a.cancelClick = !1);
                        else { var s = t.index;
                            r.selectAll("." + Et.shape + "-" + s).each((function(t) {
                                (n.data_selection_grouped || i.isWithinShape(this, t)) && (null == i.toggleShape || i.toggleShape(this, t, s), n.data_onclick.bind(i.api)(t, this)) })) } }, generateEventRectsForMultipleXs: function(t) { var e = this,
                            n = this,
                            a = n.state;
                        t.on("click", (function(t) { a.event = t, n.clickHandlerForMultipleXS.bind(this)(n) })), "mouse" === a.inputType && t.on("mouseover mousemove", (function(t) { a.event = t, n.selectRectForMultipleXs(this) })).on("mouseout", function(t) { i(this, e), a.event = t, n.config && !n.hasArcType() && n.unselectRect() }.bind(this)) }, clickHandlerForMultipleXS: function(t) { var e = t,
                            i = e.config,
                            n = e.state,
                            a = e.filterTargetsToShow(e.data.targets); if (!e.hasArcType(a)) { var r = F(n.event, this),
                                s = e.findClosestFromTargets(a, r);
                            s && (e.isBarType(s.id) || e.dist(s, r) < i.point_sensitivity) && e.$el.main.selectAll("." + Et.shapes + e.getTargetSelectorSuffix(s.id)).selectAll("." + Et.shape + "-" + s.index).each((function() {
                                (i.data_selection_grouped || e.isWithinShape(this, s)) && (null == e.toggleShape || e.toggleShape(this, s, s.index), i.data_onclick.bind(e.api)(s, this)) })) } } },
                Ei = f(11),
                Li = { generateFlow: function(t) { var e = this,
                            n = e.data,
                            a = e.state,
                            r = e.$el; return function() { var s = this,
                                o = t.flow.length;
                            a.flowing = !0, n.targets.forEach(function(t) { i(this, s), t.values.splice(0, o) }.bind(this)), e.updateXGrid && e.updateXGrid(!0); var l = {};
                            ["axis.x", "grid.x", "gridLines.x", "region.list", "text", "bar", "line", "area", "circle"].forEach(function(t) { var e;
                                i(this, s); var n = t.split("."),
                                    a = r[n[0]];
                                a && n.length > 1 && (a = a[n[1]]), null != (e = a) && e.size() && (l[t] = a) }.bind(this)), e.hideGridFocus(), e.setFlowList(l, t) } }, setFlowList: function(t, e) { var n, a = this,
                            r = this,
                            s = e.flow,
                            o = e.targets,
                            l = s,
                            c = l.duration,
                            d = void 0 === c ? e.duration : c,
                            h = l.index,
                            u = l.length,
                            g = l.orgDataCount,
                            f = r.getFlowTransform(o, g, h, u),
                            p = ce();
                        p.add(Object.keys(t).map(function(e) { var s = this; return i(this, a), n = t[e].transition().ease(Ei.easeLinear).duration(d), n = "axis.x" === e ? n.call(function(t) { i(this, s), r.axis.x.setTransition(t).create(t) }.bind(this)) : "region.list" === e ? n.filter(r.isRegionOnX).attr("transform", f) : n.attr("transform", f) }.bind(this))), n.call(p, function() { i(this, a), r.cleanUpFlow(t, e) }.bind(this)) }, cleanUpFlow: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = a.state,
                            o = a.$el.svg,
                            l = r.axis_rotated,
                            c = e.flow,
                            d = e.shape,
                            h = e.xv,
                            u = d.pos,
                            g = u.cx,
                            f = u.cy,
                            p = u.xForText,
                            v = u.yForText,
                            x = c,
                            b = x.done,
                            _ = void 0 === b ? function() { i(this, n) }.bind(this) : b,
                            m = x.length;
                        m && (["circle", "text", "shape", "eventRect"].forEach(function(t) { i(this, n); for (var e = [], a = 0; a < m; a++) e.push("." + Dt[t] + "-" + a);
                            o.selectAll("." + Dt[t + "s"]).selectAll(e).remove() }.bind(this)), o.select("." + Dt.xgrid).remove()), Object.keys(t).forEach(function(e) { var o = this;
                            i(this, n); var c = t[e]; if ("axis.x" !== e && c.attr("transform", null), "grid.x" === e) c.attr(s.xgridAttr);
                            else if ("gridLines.x" === e) c.attr("x1", l ? 0 : h).attr("x2", l ? s.width : h);
                            else if ("gridLines.x" === e) c.select("line").attr("x1", l ? 0 : h).attr("x2", l ? s.width : h), c.select("text").attr("x", l ? s.width : 0).attr("y", h);
                            else if (/^(area|bar|line)$/.test(e)) c.attr("d", d.type[e]);
                            else if ("text" === e) c.attr("x", p).attr("y", v).style("fill-opacity", a.opacityForText.bind(a));
                            else if ("circle" === e)
                                if (a.isCirclePoint()) c.attr("cx", g).attr("cy", f);
                                else { var u = function(t) { return i(this, o), g(t) - r.point_r }.bind(this),
                                        x = function(t) { return i(this, o), f(t) - r.point_r }.bind(this);
                                    c.attr("x", u).attr("y", x).attr("cx", g).attr("cy", f) }
                            else "region.list" === e && c.select("rect").filter(a.isRegionOnX).attr("x", a.regionX.bind(a)).attr("width", a.regionWidth.bind(a)) }.bind(this)), r.interaction_enabled && a.redrawEventRect(), _.call(a.api), s.flowing = !1 }, getFlowTransform: function(t, e, i, n) { var a, r, s, o = this,
                            l = o.data,
                            c = o.scale.x,
                            d = l.targets[0].values,
                            h = o.getValueOnIndex(d, i),
                            u = o.getValueOnIndex(d, i + n),
                            g = c.domain(),
                            f = o.updateXDomain(t, !0, !0); if (e)
                            if (1 === e || (null == (a = h) ? void 0 : a.x) === (null == (r = u) ? void 0 : r.x)) s = c(g[0]) - c(f[0]);
                            else { var p;
                                s = o.axis.isTimeSeries() ? c(g[0]) - c(f[0]) : c((null == (p = h) ? void 0 : p.x) || 0) - c(u.x) }
                        else 1 !== d.length ? s = c(g[0]) - c(f[0]) : o.axis.isTimeSeries() ? (h = o.getValueOnIndex(d, 0), u = o.getValueOnIndex(d, d.length - 1), s = c(h.x) - c(u.x)) : s = C(f) / 2; return "translate(" + s + ",0) scale(" + C(g) / C(f) + ",1)" } },
                Oi = { initClip: function() { var t = this,
                            e = t.state.clip;
                        e.id = t.state.datetimeId + "-clip", e.idXAxis = e.id + "-xaxis", e.idYAxis = e.id + "-yaxis", e.idGrid = e.id + "-grid", e.path = t.getClipPath(e.id), e.pathXAxis = t.getClipPath(e.idXAxis), e.pathYAxis = t.getClipPath(e.idYAxis), e.pathGrid = t.getClipPath(e.idGrid) }, getClipPath: function(t) { var e = this.config; return !e.clipPath && /-clip$/.test(t) || !e.axis_x_clipPath && /-clip-xaxis$/.test(t) || !e.axis_y_clipPath && /-clip-yaxis$/.test(t) ? null : "url(" + (!!s.navigator && s.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0 ? "" : o.URL.split("#")[0]) + "#" + t + ")" }, appendClip: function(t, e) { e && t.append("clipPath").attr("id", e).append("rect") }, setXAxisClipPath: function(t) { var e = this.config,
                            i = this.state,
                            n = i.margin,
                            a = i.width,
                            r = i.height,
                            s = e.axis_rotated,
                            o = Math.max(30, n.left) - (s ? 0 : 20),
                            l = s ? -(1 + o) : -(o - 1),
                            c = -Math.max(15, n.top),
                            d = s ? n.left + 20 : a + 10 + o,
                            h = (s ? n.top + r + 10 : n.bottom) + 20;
                        t.attr("x", l).attr("y", c).attr("width", d).attr("height", h) }, setYAxisClipPath: function(t) { var e = this.config,
                            i = this.state,
                            n = i.margin,
                            a = i.width,
                            r = i.height,
                            s = e.axis_rotated,
                            o = Math.max(30, n.left) - (s ? 20 : 0),
                            l = e.axis_y_inner,
                            c = l ? -1 : s ? -(1 + o) : -(o - 1),
                            d = -(s ? 20 : n.top),
                            h = (s ? a + 15 + o : n.left + 20) + (l ? 20 : 0),
                            u = (s ? n.bottom : n.top + r) + 10;
                        t.attr("x", c).attr("y", d).attr("width", h).attr("height", u) }, updateXAxisTickClip: function() { var t = this,
                            e = t.config,
                            i = t.state,
                            n = i.clip,
                            a = i.xAxisHeight,
                            r = t.$el.defs,
                            s = t.getHorizontalAxisHeight("x"); if (r && !n.idXAxisTickTexts) { var o = n.id + "-xaxisticktexts";
                            t.appendClip(r, o), n.pathXAxisTickTexts = t.getClipPath(n.idXAxisTickTexts), n.idXAxisTickTexts = o }!e.axis_x_tick_multiline && t.getAxisTickRotate("x") && s !== a && (t.setXAxisTickClipWidth(), t.setXAxisTickTextClipPathWidth()), t.state.xAxisHeight = s }, setXAxisTickClipWidth: function() { var t = this,
                            e = t.config,
                            i = t.state.current.maxTickWidths,
                            n = t.getAxisTickRotate("x"); if (!e.axis_x_tick_multiline && n) { var a = Math.sin(Math.PI / 180 * Math.abs(n));
                            i.x.clipPath = (t.getHorizontalAxisHeight("x") - 20) / a } else i.x.clipPath = null }, setXAxisTickTextClipPathWidth: function() { var t = this.state,
                            e = t.clip,
                            i = t.current,
                            n = this.$el.svg;
                        n && n.select("#" + e.idXAxisTickTexts + " rect").attr("width", i.maxTickWidths.x.clipPath).attr("height", 30) } },
                Pi = void 0,
                Ii = function(t) { return i(this, Pi), b(t.position) || "end" }.bind(void 0),
                Di = function(t) { return i(this, Pi), "start" === t.position ? 4 : "middle" === t.position ? 0 : -4 }.bind(void 0);

            function zi(t, e, n) { var a = this; return function(r) { i(this, a); var s = t ? 0 : e; return "start" === r.position ? s = t ? -n : 0 : "middle" === r.position && (s = (t ? -n : e) / 2), s }.bind(this) }

            function Mi(t, e) { "grid" === e && t.each((function() { var t = this,
                        e = (0, a.select)(this);
                    ["x1", "x2", "y1", "y2"].forEach(function(n) { return i(this, t), e.attr(n, Math.ceil(+e.attr(n))) }.bind(this)) })) } var Xi = { hasGrid: function() { var t = this,
                            e = this.config; return ["x", "y"].some(function(n) { return i(this, t), e["grid_" + n + "_show"] || e["grid_" + n + "_lines"].length }.bind(this)) }, initGrid: function() { var t = this;
                        t.hasGrid() && t.initGridLines(), t.initFocusGrid() }, initGridLines: function() { var t = this,
                            e = t.config,
                            i = t.state.clip,
                            n = t.$el;
                        (e.grid_x_lines.length || e.grid_y_lines.length) && (n.gridLines.main = n.main.insert("g", "." + ct.chart + (e.grid_lines_front ? " + *" : "")).attr("clip-path", i.pathGrid).attr("class", wt.grid + " " + wt.gridLines), n.gridLines.main.append("g").attr("class", wt.xgridLines), n.gridLines.main.append("g").attr("class", wt.ygridLines), n.gridLines.x = (0, a.selectAll)([])) }, updateXGrid: function(t) { var e = this,
                            n = this,
                            r = n.config,
                            s = n.scale,
                            o = n.state,
                            l = n.$el,
                            c = l.main,
                            d = l.grid,
                            h = r.axis_rotated,
                            u = n.generateGridData(r.grid_x_type, s.x),
                            g = n.axis.isCategorized() ? n.axis.x.tickOffset() : 0,
                            f = function(t) { return i(this, e), (s.zoom || s.x)(t) + g * (h ? -1 : 1) }.bind(this);
                        o.xgridAttr = h ? { x1: 0, x2: o.width, y1: f, y2: f } : { x1: f, x2: f, y1: 0, y2: o.height }, d.x = c.select("." + wt.xgrids).selectAll("." + wt.xgrid).data(u), d.x.exit().remove(), d.x = d.x.enter().append("line").attr("class", wt.xgrid).merge(d.x), t || d.x.each((function() { var t = this,
                                e = (0, a.select)(this);
                            Object.keys(o.xgridAttr).forEach(function(n) { var a = this;
                                i(this, t), e.attr(n, o.xgridAttr[n]).style("opacity", function() { return i(this, a), e.attr(h ? "y1" : "x1") === (h ? o.height : 0) ? "0" : null }.bind(this)) }.bind(this)) })) }, updateYGrid: function() { var t = this,
                            e = this,
                            n = e.axis,
                            a = e.config,
                            r = e.scale,
                            s = e.state,
                            o = e.$el,
                            l = o.grid,
                            c = o.main,
                            d = a.axis_rotated,
                            h = function(e) { return i(this, t), Math.ceil(r.y(e)) }.bind(this),
                            u = n.y.getGeneratedTicks(a.grid_y_ticks) || e.scale.y.ticks(a.grid_y_ticks);
                        l.y = c.select("." + wt.ygrids).selectAll("." + wt.ygrid).data(u), l.y.exit().remove(), l.y = l.y.enter().append("line").attr("class", wt.ygrid).merge(l.y), l.y.attr("x1", d ? h : 0).attr("x2", d ? h : s.width).attr("y1", d ? 0 : h).attr("y2", d ? s.height : h), Mi(l.y, "grid") }, updateGrid: function() { var t = this,
                            e = t.$el,
                            i = e.grid;
                        e.gridLines.main || t.initGridLines(), i.main.style("visibility", t.hasArcType() ? "hidden" : null), t.hideGridFocus(), t.updateXGridLines(), t.updateYGridLines() }, updateXGridLines: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.$el,
                            r = a.gridLines,
                            s = a.main,
                            o = e.$T,
                            l = n.axis_rotated;
                        n.grid_x_show && e.updateXGrid(); var c = s.select("." + wt.xgridLines).selectAll("." + wt.xgridLine).data(n.grid_x_lines);
                        o(c.exit()).style("opacity", "0").remove(); var d = c.enter().append("g");
                        d.append("line").style("opacity", "0"), d.append("text").attr("transform", l ? "" : "rotate(-90)").attr("dy", -5).style("opacity", "0"), o((c = d.merge(c)).attr("class", function(e) { return i(this, t), (wt.xgridLine + " " + (e.class || "")).trim() }.bind(this)).select("text").attr("text-anchor", Ii).attr("dx", Di)).text(function(e) { return i(this, t), e.text }.bind(this)).style("opacity", null), r.x = c }, updateYGridLines: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.state,
                            r = a.width,
                            s = a.height,
                            o = e.$el,
                            l = e.$T,
                            c = n.axis_rotated;
                        n.grid_y_show && e.updateYGrid(); var d = o.main.select("." + wt.ygridLines).selectAll("." + wt.ygridLine).data(n.grid_y_lines);
                        l(d.exit()).style("opacity", "0").remove(); var h = d.enter().append("g");
                        h.append("line").style("opacity", "0"), h.append("text").attr("transform", c ? "rotate(-90)" : "").style("opacity", "0"), d = h.merge(d); var u = e.yv.bind(e);
                        l(d.attr("class", function(e) { return i(this, t), (wt.ygridLine + " " + (e.class || "")).trim() }.bind(this)).select("line")).attr("x1", c ? u : 0).attr("x2", c ? u : r).attr("y1", c ? 0 : u).attr("y2", c ? s : u).style("opacity", null), l(d.select("text").attr("text-anchor", Ii).attr("dx", Di)).attr("dy", -5).attr("x", zi(c, r, s)).attr("y", u).text(function(e) { return i(this, t), e.text }.bind(this)).style("opacity", null), o.gridLines.y = d }, redrawGrid: function(t) { var e = this,
                            n = this,
                            a = n.config.axis_rotated,
                            r = n.state,
                            s = r.width,
                            o = r.height,
                            l = n.$el.gridLines,
                            c = n.$T,
                            d = n.xv.bind(n),
                            h = l.x.select("line"),
                            u = l.x.select("text"); return h = c(h, t).attr("x1", a ? 0 : d).attr("x2", a ? s : d).attr("y1", a ? d : 0).attr("y2", a ? d : o), u = c(u, t).attr("x", zi(!a, s, o)).attr("y", d).text(function(t) { return i(this, e), t.text }.bind(this)), [h.style("opacity", null), u.style("opacity", null)] }, initFocusGrid: function() { var t = this,
                            e = t.config,
                            i = t.state.clip,
                            n = t.$el,
                            a = e.grid_front,
                            r = "." + (a && n.gridLines.main ? wt.gridLines : ct.chart) + (a ? " + *" : ""),
                            s = n.main.insert("g", r).attr("clip-path", i.pathGrid).attr("class", wt.grid);
                        n.grid.main = s, e.grid_x_show && s.append("g").attr("class", wt.xgrids), e.grid_y_show && s.append("g").attr("class", wt.ygrids), e.interaction_enabled && e.grid_focus_show && (s.append("g").attr("class", Tt.xgridFocus).append("line").attr("class", Tt.xgridFocus), e.grid_focus_y && !e.tooltip_grouped && s.append("g").attr("class", Tt.ygridFocus).append("line").attr("class", Tt.ygridFocus)) }, showGridFocus: function(t) { var e = this,
                            n = this,
                            r = n.config,
                            s = n.state,
                            o = s.width,
                            l = s.height,
                            c = r.axis_rotated,
                            d = n.$el.main.selectAll("line." + Tt.xgridFocus + ", line." + Tt.ygridFocus),
                            h = (t || [d.datum()]).filter(function(t) { return i(this, e), t && b(n.getBaseValue(t)) }.bind(this)); if (r.tooltip_show && 0 !== h.length && !n.hasType("bubble") && !n.hasArcType()) { var u = r.grid_focus_edge && !r.tooltip_grouped,
                                g = n.xx.bind(n);
                            d.style("visibility", null).data(h.concat(h)).each((function(t) { var e, r = this,
                                    s = (0, a.select)(this),
                                    d = { x: g(t), y: n.getYScaleById(t.id)(t.value) }; if (s.classed(Tt.xgridFocus)) e = c ? [null, d.x, u ? d.y : o, d.x] : [d.x, u ? d.y : null, d.x, l];
                                else { var h = "y2" === n.axis.getId(t.id);
                                    e = c ? [d.y, u && !h ? d.x : null, d.y, u && h ? d.x : l] : [u && h ? d.x : null, d.y, u && !h ? d.x : o, d.y] }["x1", "y1", "x2", "y2"].forEach(function(t, n) { return i(this, r), s.attr(t, e[n]) }.bind(this)) })), Mi(d, "grid"), null == n.showCircleFocus || n.showCircleFocus(t) } }, hideGridFocus: function() { var t = this,
                            e = t.state,
                            i = e.inputType,
                            n = e.resizing,
                            a = t.$el.main; "mouse" !== i && n || (a.selectAll("line." + Tt.xgridFocus + ", line." + Tt.ygridFocus).style("visibility", "hidden"), null == t.hideCircleFocus || t.hideCircleFocus()) }, updateGridFocus: function() { var t = this,
                            e = t.state,
                            i = e.inputType,
                            n = e.width,
                            a = e.height,
                            r = e.resizing,
                            s = t.$el.grid.main.select("line." + Tt.xgridFocus); if ("touch" === i) s.empty() ? r && (null == t.showCircleFocus || t.showCircleFocus()) : t.showGridFocus();
                        else { var o = t.config.axis_rotated;
                            s.attr("x1", o ? 0 : -10).attr("x2", o ? n : -10).attr("y1", o ? -10 : 0).attr("y2", o ? -10 : a) } return !0 }, generateGridData: function(t, e) { var n = this,
                            a = this.$el.main.select("." + ut.axisX).selectAll(".tick").size(),
                            r = []; if ("year" === t)
                            for (var s = this.getXDomain().map(function(t) { return i(this, n), t.getFullYear() }.bind(this)), o = s[0], l = s[1], c = o; c <= l; c++) r.push(new Date(c + "-01-01 00:00:00"));
                        else(r = e.ticks(10)).length > a && (r = r.filter(function(t) { return i(this, n), (t + "").indexOf(".") < 0 }.bind(this))); return r }, getGridFilterToRemove: function(t) { var e = this; return t ? function(n) { var a = this;
                            i(this, e); var r = !1; return (O(t) ? t.concat() : [t]).forEach(function(t) { i(this, a), ("value" in t && n.value === t.value || "class" in t && n.class === t.class) && (r = !0) }.bind(this)), r }.bind(this) : function() { return i(this, e), !0 }.bind(this) }, removeGridLines: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = a.$T,
                            o = a.getGridFilterToRemove(t),
                            l = function(t) { return i(this, n), !o(t) }.bind(this),
                            c = e ? wt.xgridLines : wt.ygridLines,
                            d = e ? wt.xgridLine : wt.ygridLine;
                        s(a.$el.main.select("." + c).selectAll("." + d).filter(o)).style("opacity", "0").remove(); var h = "grid_" + (e ? "x" : "y") + "_lines";
                        r[h] = r[h].filter(l) } },
                $i = { initRegion: function() { var t = this.$el;
                        t.region.main = t.main.insert("g", ":first-child").attr("clip-path", this.state.clip.path).attr("class", Ct.regions) }, updateRegion: function() { var t = this,
                            e = t.config,
                            i = t.$el.region,
                            n = t.$T;
                        i.main || t.initRegion(), i.main.style("visibility", t.hasArcType() ? "hidden" : null); var a = i.main.selectAll("." + Ct.region).data(e.regions);
                        n(a.exit()).style("opacity", "0").remove(), (a = a.enter().append("g").merge(a).attr("class", t.classRegion.bind(t))).append("rect").style("fill-opacity", "0"), i.list = a }, redrawRegion: function(t) { var e = this,
                            n = this,
                            r = n.$el.region,
                            s = n.$T,
                            o = r.list.select("rect"); return [(o = s(o, t).attr("x", n.regionX.bind(n)).attr("y", n.regionY.bind(n)).attr("width", n.regionWidth.bind(n)).attr("height", n.regionHeight.bind(n))).style("fill-opacity", function(t) { return i(this, e), b(t.opacity) ? t.opacity : null }.bind(this)).on("end", (function() {
                            (0, a.select)(this.parentNode).selectAll("rect:not([x])").remove() }))] }, getRegionXY: function(t, e) { var i = this,
                            n = i.config,
                            a = i.scale,
                            r = n.axis_rotated,
                            s = "x" === t,
                            o = "start",
                            l = 0; return "y" === e.axis || "y2" === e.axis ? (s || (o = "end"), (s ? r : !r) && o in e && (l = (0, a[e.axis])(e[o]))) : (s ? !r : r) && o in e && (l = (a.zoom || a.x)(i.axis.isTimeSeries() ? nt.call(i, e[o]) : e[o])), l }, regionX: function(t) { return this.getRegionXY("x", t) }, regionY: function(t) { return this.getRegionXY("y", t) }, getRegionSize: function(t, e) { var i = this,
                            n = i.config,
                            a = i.scale,
                            r = i.state,
                            s = n.axis_rotated,
                            o = "width" === t,
                            l = i[o ? "regionX" : "regionY"](e),
                            c = "end",
                            d = r[t]; return "y" === e.axis || "y2" === e.axis ? (o || (c = "start"), (o ? s : !s) && c in e && (d = (0, a[e.axis])(e[c]))) : (o ? !s : s) && c in e && (d = (a.zoom || a.x)(i.axis.isTimeSeries() ? nt.call(i, e[c]) : e[c])), d < l ? 0 : d - l }, regionWidth: function(t) { return this.getRegionSize("width", t) }, regionHeight: function(t) { return this.getRegionSize("height", t) }, isRegionOnX: function(t) { return !t.axis || "x" === t.axis } },
                Fi = { getAxisSize: function(t) { var e = this,
                            i = e.config.axis_rotated; return i && "x" === t || !i && /y2?/.test(t) ? e.getAxisWidthByAxisId(t, !0) : e.getHorizontalAxisHeight(t) }, getAxisWidthByAxisId: function(t, e) { var i = this; if (i.axis) { var n, a = null == (n = i.axis) ? void 0 : n.getLabelPositionById(t),
                                r = i.axis.getMaxTickWidth(t, e),
                                s = 0 === r ? .5 : 0; return r + (a.isInner ? 20 + s : 40) } return 40 }, getHorizontalAxisHeight: function(t) { var e = this,
                            i = e.config,
                            n = e.state,
                            a = n.current,
                            r = n.rotatedPadding,
                            s = n.isLegendRight,
                            o = n.isLegendInset,
                            l = i.axis_rotated,
                            c = 30; if ("x" === t && !i.axis_x_show) return 8; if ("x" === t && i.axis_x_height) return i.axis_x_height; if ("y" === t && !i.axis_y_show) return !i.legend_show || s || o ? 1 : 10; if ("y2" === t && !i.axis_y2_show) return r.top; var d = e.getAxisTickRotate(t); return ("x" === t && !l || /y2?/.test(t) && l) && d && (c = 30 + e.axis.getMaxTickWidth(t) * Math.cos(Math.PI * (90 - Math.abs(d)) / 180), !i.axis_x_tick_multiline && a.height && c > a.height / 2 && (c = a.height / 2)), c + (e.axis.getLabelPositionById(t).isInner ? 0 : 10) + ("y2" !== t || l ? 0 : -10) }, getEventRectWidth: function() { return Math.max(0, this.axis.x.tickInterval()) }, getAxisTickRotate: function(t) { var e = this,
                            i = e.axis,
                            n = e.config,
                            a = e.state,
                            r = e.$el,
                            s = n["axis_" + t + "_tick_rotate"]; if ("x" === t) { var o = i.isCategorized() || i.isTimeSeries(); if (n.axis_x_tick_fit && o) { var l = n.axis_x_tick_count,
                                    c = a.current.maxTickWidths.x.ticks.length,
                                    d = 0; if (l ? d = l > c ? c : l : c && (d = c), d !== a.axis.x.tickCount) { var h = e.data.targets;
                                    a.axis.x.padding = e.getXDomainPadding([e.getXDomainMinMax(h, "min"), e.getXDomainMinMax(h, "max")], d) }
                                a.axis.x.tickCount = d }
                            r.svg && n.axis_x_tick_fit && !n.axis_x_tick_multiline && !n.axis_x_tick_culling && n.axis_x_tick_autorotate && o && (s = e.needToRotateXAxisTickTexts() ? n.axis_x_tick_rotate : 0) } return s }, needToRotateXAxisTickTexts: function() { var t = this,
                            e = t.state,
                            i = e.axis,
                            n = e.current.width - t.getCurrentPaddingLeft(!1) - t.getCurrentPaddingRight(),
                            a = i.x.tickCount + i.x.padding.left + i.x.padding.right; return t.axis.getMaxTickWidth("x") > (a ? n / a : 0) } },
                Bi = { axis_y_clipPath: !0, axis_y_show: !0, axis_y_type: "indexed", axis_y_max: void 0, axis_y_min: void 0, axis_y_inverted: !1, axis_y_center: void 0, axis_y_inner: !1, axis_y_label: {}, axis_y_tick_format: void 0, axis_y_tick_culling: !1, axis_y_tick_culling_max: 5, axis_y_tick_culling_lines: !0, axis_y_tick_outer: !0, axis_y_tick_values: null, axis_y_tick_rotate: 0, axis_y_tick_count: void 0, axis_y_tick_show: !0, axis_y_tick_stepSize: null, axis_y_tick_text_show: !0, axis_y_tick_text_position: { x: 0, y: 0 }, axis_y_tick_time_value: void 0, axis_y_padding: {}, axis_y_default: void 0, axis_y_axes: [] },
                Ni = { axis_y2_show: !1, axis_y2_type: "indexed", axis_y2_max: void 0, axis_y2_min: void 0, axis_y2_inverted: !1, axis_y2_center: void 0, axis_y2_inner: !1, axis_y2_label: {}, axis_y2_tick_format: void 0, axis_y2_tick_culling: !1, axis_y2_tick_culling_max: 5, axis_y2_tick_culling_lines: !0, axis_y2_tick_outer: !0, axis_y2_tick_values: null, axis_y2_tick_rotate: 0, axis_y2_tick_count: void 0, axis_y2_tick_show: !0, axis_y2_tick_stepSize: null, axis_y2_tick_text_show: !0, axis_y2_tick_text_position: { x: 0, y: 0 }, axis_y2_padding: {}, axis_y2_default: void 0, axis_y2_axes: [] };

            function Gi(t, e) { var i = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), i.push.apply(i, n) } return i }

            function ji(t) { for (var e, i = 1; i < arguments.length; i++) e = null != arguments[i] ? arguments[i] : {}, i % 2 ? Gi(Object(e), !0).forEach((function(i) { h(t, i, e[i]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Gi(Object(e)).forEach((function(i) { Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i)) })); return t } var Yi = ji(ji(ji({ axis_rotated: !1 }, { axis_x_clipPath: !0, axis_x_show: !0, axis_x_type: "indexed", axis_x_localtime: !0, axis_x_categories: [], axis_x_tick_centered: !1, axis_x_tick_format: void 0, axis_x_tick_culling: {}, axis_x_tick_culling_max: 10, axis_x_tick_culling_lines: !0, axis_x_tick_count: void 0, axis_x_tick_show: !0, axis_x_tick_text_show: !0, axis_x_tick_text_position: { x: 0, y: 0 }, axis_x_tick_fit: !0, axis_x_tick_values: null, axis_x_tick_autorotate: !1, axis_x_tick_rotate: 0, axis_x_tick_outer: !0, axis_x_tick_multiline: !0, axis_x_tick_width: null, axis_x_tick_tooltip: !1, axis_x_max: void 0, axis_x_min: void 0, axis_x_padding: {}, axis_x_height: void 0, axis_x_extent: void 0, axis_x_label: {}, axis_x_axes: [] }), Bi), Ni),
                Vi = [gi, { category: function(t, e) { var i = this.internal,
                            n = i.config; return arguments.length > 1 && (n.axis_x_categories[t] = e, i.redraw()), n.axis_x_categories[t] }, categories: function(t) { var e = this.internal,
                            i = e.config; return arguments.length ? (i.axis_x_categories = t, e.redraw(), i.axis_x_categories) : i.axis_x_categories } }, pi, xi, Ti, bi, mi, yi],
                Hi = [Si, Oi, Ri, Li, Xi, $i, Fi],
                Wi = [{ data_xs: {}, data_xFormat: "%Y-%m-%d", data_xLocaltime: !0, data_xSort: !0, data_axes: {}, data_regions: {}, data_stack_normalize: !1 }, Yi, { grid_x_show: !1, grid_x_type: "tick", grid_x_lines: [], grid_y_show: !1, grid_y_lines: [], grid_y_ticks: void 0, grid_focus_edge: !1, grid_focus_show: !0, grid_focus_y: !1, grid_front: !1, grid_lines_front: !0 }],
                Ui = f(12),
                Zi = { initPie: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = n.data_type,
                            r = n[a + "_padding"],
                            s = n[a + "_startingAngle"] || 0,
                            o = (r ? .01 * r : n[a + "_padAngle"]) || 0;
                        e.pie = (0, Fe.pie)().startAngle(s).endAngle(s + 2 * Math.PI).padAngle(o).value(function(e) { var n = this; return i(this, t), e.values.reduce(function(t, e) { return i(this, n), t + e.value }.bind(this), 0) }.bind(this)).sort(e.getSortCompareFn.bind(e)(!0)) }, updateRadius: function() { var t = this,
                            e = t.config,
                            i = t.state,
                            n = e[e.data_type + "_padding"],
                            a = e.gauge_width || e.donut_width,
                            r = t.filterTargetsToShow(t.data.targets).length * e.gauge_arcs_minWidth;
                        i.radiusExpanded = Math.min(i.arcWidth, i.arcHeight) / 2 * (t.hasMultiArcGauge() && e.gauge_label_show ? .85 : 1), i.radius = .95 * i.radiusExpanded, i.innerRadiusRatio = a ? (i.radius - a) / i.radius : .6, i.gaugeArcWidth = a || (r <= i.radius - i.innerRadius ? i.radius - i.innerRadius : r <= i.radius ? r : i.radius); var s = e.pie_innerRadius || (n ? n * (i.innerRadiusRatio + .1) : 0);
                        i.outerRadius = e.pie_outerRadius, i.innerRadius = t.hasType("donut") || t.hasType("gauge") ? i.radius * i.innerRadiusRatio : s }, getRadius: function(t) { var e = null == t ? void 0 : t.data,
                            i = this.state,
                            n = i.innerRadius,
                            a = i.outerRadius; return !y(n) && e && (n = n[e.id] || 0), P(a) && e && e.id in a ? a = a[e.id] : y(a) || (a = this.state.radius), { innerRadius: n, outerRadius: a } }, updateArc: function() { var t = this;
                        t.updateRadius(), t.svgArc = t.getSvgArc(), t.svgArcExpanded = t.getSvgArcExpanded() }, getArcLength: function() { var t = 3.6 * this.config.gauge_arcLength,
                            e = t / 360 * 2; return t < -360 ? e = -2 : t > 360 && (e = 2), e * Math.PI }, getStartAngle: function() { var t = this.config,
                            e = t.gauge_fullCircle,
                            i = -1 * Math.PI / 2,
                            n = Math.PI / 2,
                            a = t.gauge_startingAngle; return !e && a <= i ? a = i : !e && a >= n ? a = n : (a > Math.PI || a < -1 * Math.PI) && (a = Math.PI), a }, updateAngle: function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = n.state,
                            s = n.pie,
                            o = t,
                            l = !1; if (!a) return null; var c = n.getStartAngle(),
                            d = a.gauge_fullCircle ? n.getArcLength() : -2 * c; if (o.data && n.isGaugeType(o.data) && !n.hasMultiArcGauge()) { var h = a.gauge_min,
                                u = a.gauge_max,
                                g = n.getTotalDataSum(r.rendered);
                            s = s.startAngle(c).endAngle(d * ((g - h) / (u - h)) + c) } if (s(n.filterTargetsToShow()).forEach(function(t, n) { i(this, e), l || t.data.id !== o.data.id || (l = !0, (o = t).index = n) }.bind(this)), isNaN(o.startAngle) && (o.startAngle = 0), isNaN(o.endAngle) && (o.endAngle = o.startAngle), o.data && n.hasMultiArcGauge()) { var f = a.gauge_min,
                                p = a.gauge_max,
                                v = o.value < f ? 0 : o.value < p ? o.value - f : p - f;
                            o.startAngle = c, o.endAngle = c + d / (p - f) * v } return l ? o : null }, getSvgArc: function() { var t = this,
                            e = this,
                            n = e.state,
                            a = n.gaugeArcWidth / e.filterTargetsToShow(e.data.targets).length,
                            r = e.hasMultiArcGauge(),
                            s = e.hasType("polar"),
                            o = (0, Fe.arc)().innerRadius(function(s) { i(this, t); var o = e.getRadius(s).innerRadius; return r ? n.radius - a * (s.index + 1) : y(o) ? o : 0 }.bind(this)).outerRadius(function(o) { i(this, t); var l = e.getRadius(o).outerRadius,
                                    c = l; return r ? c = n.radius - a * o.index : s && (c = e.getPolarOuterRadius(o, l)), c }.bind(this)),
                            l = function(t, i) { var n = "M 0 0"; if (t.value || t.data) { var a = !i && e.updateAngle(t);
                                    i ? n = o(t) : a && (n = o(a)) } return n }; return l.centroid = o.centroid, l }, getSvgArcExpanded: function(t) { var e = this,
                            n = this,
                            a = n.state,
                            r = t || 1,
                            s = a.gaugeArcWidth / n.filterTargetsToShow(n.data.targets).length,
                            o = n.hasMultiArcGauge(),
                            l = Math.min(a.radiusExpanded * r - a.radius, .8 * s - 100 * (1 - r)),
                            c = (0, Fe.arc)().innerRadius(function(t) { return i(this, e), o ? a.radius - s * (t.index + 1) : n.getRadius(t).innerRadius }.bind(this)).outerRadius(function(t) { var c; if (i(this, e), o) c = a.radius - s * t.index + l;
                                else { var d = n.getRadius(t).outerRadius,
                                        h = a.radiusExpanded;
                                    a.radius !== d && (h -= Math.abs(a.radius - d)), c = h * r } return c }.bind(this)); return function(t) { var e = n.updateAngle(t); return e ? c(e) : "M 0 0" } }, getArc: function(t, e, i) { return i || this.isArcType(t.data) ? this.svgArc(t, e) : "M 0 0" }, transformForArcLabel: function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = n.state.radiusExpanded,
                            s = n.updateAngle(t),
                            o = ""; if (s)
                            if (n.hasMultiArcGauge()) { var l = Math.sin(s.endAngle - Math.PI / 2);
                                o = "translate(" + (u = Math.cos(s.endAngle - Math.PI / 2) * (r + 25)) + "," + (g = l * (r + 15 - Math.abs(10 * l)) + 3) + ")" } else if (!n.hasType("gauge") || n.data.targets.length > 1) { var c, d = n.getRadius(t).outerRadius;
                            n.hasType("polar") && (d = n.getPolarOuterRadius(t, d)); var h = this.svgArc.centroid(s).map(function(t) { return i(this, e), isNaN(t) ? 0 : t }.bind(this)),
                                u = h[0],
                                g = h[1],
                                f = Math.sqrt(u * u + g * g),
                                p = null == (c = ["donut", "pie", "polar"].filter(n.hasType.bind(n)).map(function(t) { return i(this, e), a[t + "_label_ratio"] }.bind(this))) ? void 0 : c[0];
                            o = "translate(" + u * (p = p ? _(p) ? p.bind(n.api)(t, d, f) : p : d && (f ? (36 / d > .375 ? 1.175 - 36 / d : .8) * d / f : 0)) + "," + g * p + ")" } return o }, convertToArcData: function(t) { return this.addName({ id: t.data ? t.data.id : t.id, value: t.value, ratio: this.getRatio("arc", t), index: t.index }) }, textForArcLabel: function(t) { var e = this,
                            i = e.hasType("gauge");
                        e.shouldShowArcLabel() && t.style("fill", e.updateTextColor.bind(e)).attr("filter", e.updateTextBacgroundColor.bind(e)).each((function(t) { var n, r = (0, a.select)(this),
                                s = e.updateAngle(t),
                                o = e.getRatio("arc", s); if (e.meetsLabelThreshold(o, null == (n = ["donut", "gauge", "pie", "polar"].filter(e.hasType.bind(e))) ? void 0 : n[0])) { var l = (s || t).value;
                                X(r, (e.getArcLabelFormat() || e.defaultArcValueFormat)(l, o, t.data.id).toString(), [-1, 1], i) } else r.text("") })) }, expandArc: function(t) { var e = this,
                            n = this,
                            r = n.state.transiting,
                            s = n.$el; if (r) var o = setInterval(function() { i(this, e), r || (clearInterval(o), s.legend.selectAll("." + Tt.legendItemFocused).size() > 0 && n.expandArc(t)) }.bind(this), 10);
                        else { var l = n.mapToTargetIds(t);
                            s.svg.selectAll(n.selectorTargets(l, "." + dt.chartArc)).each((function(t) { if (n.shouldExpand(t.data.id)) { var e = n.getExpandConfig(t.data.id, "duration"),
                                        i = n.getSvgArcExpanded(n.getExpandConfig(t.data.id, "rate"));
                                    (0, a.select)(this).selectAll("path").transition().duration(e).attr("d", n.svgArcExpanded).transition().duration(2 * e).attr("d", i) } })) } }, unexpandArc: function(t) { var e = this,
                            n = this,
                            a = n.state.transiting,
                            r = n.$el.svg; if (!a) { var s = n.mapToTargetIds(t);
                            r.selectAll(n.selectorTargets(s, "." + dt.chartArc)).selectAll("path").transition().duration(function(t) { return i(this, e), n.getExpandConfig(t.data.id, "duration") }.bind(this)).attr("d", n.svgArc), r.selectAll("" + dt.arc).style("opacity", null) } }, getExpandConfig: function(t, e) { var i, n = this,
                            a = n.config; return n.isDonutType(t) ? i = "donut" : n.isGaugeType(t) ? i = "gauge" : n.isPieType(t) && (i = "pie"), i ? a[i + "_expand_" + e] : { duration: 50, rate: .98 }[e] }, shouldExpand: function(t) { var e = this,
                            i = e.config; return e.isDonutType(t) && i.donut_expand || e.isGaugeType(t) && i.gauge_expand || e.isPieType(t) && i.pie_expand }, shouldShowArcLabel: function() { var t = this,
                            e = this,
                            n = e.config; return ["donut", "gauge", "pie", "polar"].some(function(a) { return i(this, t), e.hasType(a) && n[a + "_label_show"] }.bind(this)) }, getArcLabelFormat: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = function(e) { return i(this, t), e }.bind(this); return ["donut", "gauge", "pie", "polar"].filter(e.hasType.bind(e)).forEach(function(e) { i(this, t), a = n[e + "_label_format"] }.bind(this)), _(a) ? a.bind(e.api) : a }, getArcTitle: function() { var t = this,
                            e = t.hasType("donut") ? "donut" : t.hasType("gauge") && "gauge"; return e ? t.config[e + "_title"] : "" }, updateTargetsForArc: function(t) { var e = this,
                            n = this,
                            a = n.$el,
                            r = n.hasType("gauge"),
                            s = n.getChartClass("Arc"),
                            o = n.getClass("arcs", !0),
                            l = n.classFocus.bind(n),
                            c = a.main.select("." + dt.chartArcs),
                            d = c.selectAll("." + dt.chartArc).data(n.pie(t)).attr("class", function(t) { return i(this, e), s(t) + l(t.data) }.bind(this)),
                            h = d.enter().append("g").attr("class", s).call(this.setCssRule(!1, "." + dt.chartArcs + " text", ["pointer-events:none", "text-anchor:middle"]));
                        h.append("g").attr("class", o).merge(d), h.append("text").attr("dy", r && !n.hasMultiTargets() ? "-.1em" : ".35em").style("opacity", "0").style("text-anchor", n.getStylePropValue("middle")).style("pointer-events", n.getStylePropValue("none")), a.text = c.selectAll("." + ct.target + " text") }, initArc: function() { var t = this,
                            e = t.$el;
                        e.arcs = e.main.select("." + ct.chart).append("g").attr("class", dt.chartArcs).attr("transform", t.getTranslate("arc")), t.setArcTitle() }, setArcTitle: function() { var t = this,
                            e = t.getArcTitle(),
                            i = t.hasType("gauge"); if (e) { var n = t.$el.arcs.append("text").attr("class", i ? bt.chartArcsGaugeTitle : dt.chartArcsTitle).style("text-anchor", "middle");
                            i && n.attr("dy", "-0.3em"), X(n, e, i ? void 0 : [-.6, 1.35], !0) } }, redrawArc: function(t, e, n) { var r = this,
                            s = this,
                            o = s.config,
                            l = s.state,
                            c = s.$el.main,
                            d = o.interaction_enabled,
                            h = d && o.data_selection_isselectable,
                            u = c.selectAll("." + dt.arcs).selectAll("." + dt.arc).data(s.arcData.bind(s));
                        u.exit().transition().duration(e).style("opacity", "0").remove(), u = u.enter().append("path").attr("class", s.getClass("arc", !0)).style("fill", function(t) { return i(this, r), s.color(t.data) }.bind(this)).style("cursor", function(t) { return i(this, r), null != h && null != h.bind && h.bind(s.api)(t) ? "pointer" : null }.bind(this)).style("opacity", "0").each((function(t) { s.isGaugeType(t.data) && (t.startAngle = o.gauge_startingAngle, t.endAngle = o.gauge_startingAngle), this._current = t })).merge(u), s.hasType("gauge") && (s.updateGaugeMax(), s.hasMultiArcGauge() && s.redrawMultiArcGauge()), u.attr("transform", function(t) { return i(this, r), !s.isGaugeType(t.data) && n ? "scale(0)" : "" }.bind(this)).style("opacity", (function(t) { return t === this._current ? "0" : null })).each(function() { i(this, r), l.transiting = !0 }.bind(this)).transition().duration(t).attrTween("d", (function(t) { var e = this,
                                n = s.updateAngle(t); if (!n) return function() { return i(this, e), "M 0 0" }.bind(this);
                            isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle); var a = (0, Ui.interpolate)(this._current, n); return this._current = a(0),
                                function(e) { var i = a(e); return i.data = t.data, s.getArc(i, !0) } })).attr("transform", n ? "scale(1)" : "").style("fill", function(t) { var e; return i(this, r), s.levelColor ? (e = s.levelColor(t.data.values[0].value), o.data_colors[t.data.id] = e) : e = s.color(t.data), e }.bind(this)).style("opacity", null).call(z, (function() { if (s.levelColor) { var t = (0, a.select)(this),
                                    e = t.datum();
                                s.updateLegendItemColor(e.data.id, t.style("fill")) }
                            l.transiting = !1, D(o.onrendered, s.api) })), d && s.bindArcEvent(u), s.hasType("polar") && s.redrawPolar(), s.hasType("gauge") && s.redrawBackgroundArcs(), s.redrawArcText(t) }, redrawBackgroundArcs: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.state,
                            r = e.hasMultiArcGauge(),
                            s = n.gauge_fullCircle,
                            o = e.getStartAngle(),
                            l = s ? o + e.getArcLength() : -1 * o,
                            c = e.$el.arcs.select((r ? "g" : "") + "." + dt.chartArcsBackground); if (r) { var d = 0;
                            (c = c.selectAll("path." + dt.chartArcsBackground).data(e.data.targets)).enter().append("path").attr("class", function(e, n) { return i(this, t), dt.chartArcsBackground + " " + dt.chartArcsBackground + "-" + n }.bind(this)).merge(c).style("fill", n.gauge_background || null).attr("d", function(r) { var s = r.id; if (i(this, t), a.hiddenTargetIds.indexOf(s) >= 0) return "M 0 0"; var c = { data: [{ value: n.gauge_max }], startAngle: o, endAngle: l, index: d++ }; return e.getArc(c, !0, !0) }.bind(this)), c.exit().remove() } else c.attr("d", function() { i(this, t); var a = { data: [{ value: n.gauge_max }], startAngle: o, endAngle: l }; return e.getArc(a, !0, !0) }.bind(this)) }, bindArcEvent: function(t) { var e = this,
                            n = this,
                            r = n.config,
                            s = n.state,
                            l = "touch" === s.inputType,
                            c = "mouse" === s.inputType;

                        function d(t, e, i) { n.expandArc(i), n.api.focus(i), n.toggleFocusLegend(i, !0), n.showTooltip([e], t) }

                        function h(t) { var e = (null == t ? void 0 : t.id) || void 0;
                            n.unexpandArc(e), n.api.revert(), n.revertLegend(), n.hideTooltip() } if (t.on("click", (function(t, e, i) { var a, s = n.updateAngle(e);
                                s && (a = n.convertToArcData(s), null == n.toggleShape || n.toggleShape(this, a, i), r.data_onclick.bind(n.api)(a, this)) })), c && t.on("mouseover", (function(t, e) { var i; if (!s.transiting) { s.event = t; var a = n.updateAngle(e),
                                        r = a ? n.convertToArcData(a) : null;
                                    d(this, r, (null == (i = r) ? void 0 : i.id) || void 0), n.setOverOut(!0, r) } })).on("mouseout", function(t, a) { if (i(this, e), !s.transiting) { s.event = t; var r = n.updateAngle(a),
                                        o = r ? n.convertToArcData(r) : null;
                                    h(), n.setOverOut(!1, o) } }.bind(this)).on("mousemove", (function(t, e) { var i = n.updateAngle(e),
                                    a = i ? n.convertToArcData(i) : null;
                                s.event = t, n.showTooltip([a], this) })), l && n.hasArcType() && !n.radars) { var u = function(t) { i(this, e); var n = t.changedTouches[0]; return (0, a.select)(o.elementFromPoint(n.clientX, n.clientY)) }.bind(this);
                            n.$el.svg.on("touchstart touchmove", (function(t) { var e, i; if (!s.transiting) { s.event = t; var a = u(t).datum(),
                                        r = null != (e = a) && e.data && a.data.id ? n.updateAngle(a) : null,
                                        o = r ? n.convertToArcData(r) : null,
                                        l = (null == (i = o) ? void 0 : i.id) || void 0;
                                    n.callOverOutForTouch(o), T(l) ? h() : d(this, o, l) } })) } }, redrawArcText: function(t) { var e, n = this,
                            a = this,
                            r = a.config,
                            s = a.state,
                            o = a.$el,
                            l = o.main,
                            c = o.arcs,
                            d = a.hasType("gauge"),
                            h = a.hasMultiArcGauge(); if (d && 1 === a.data.targets.length && r.gauge_title || (e = l.selectAll("." + dt.chartArc).select("text").style("opacity", "0").attr("class", function(t) { return i(this, n), a.isGaugeType(t.data) ? bt.gaugeValue : null }.bind(this)).call(a.textForArcLabel.bind(a)).attr("transform", a.transformForArcLabel.bind(a)).style("font-size", function(t) { return i(this, n), a.isGaugeType(t.data) && 1 === a.data.targets.length && !h ? Math.round(s.radius / 5) + "px" : null }.bind(this)).transition().duration(t).style("opacity", function(t) { return i(this, n), a.isTargetToShow(t.data.id) && a.isArcType(t.data) ? null : "0" }.bind(this)), h && e.attr("dy", "-.1em")), l.select("." + dt.chartArcsTitle).style("opacity", a.hasType("donut") || d ? null : "0"), d) { var u, g = r.gauge_fullCircle;
                            g && (null == (u = e) || u.attr("dy", "" + (h ? 0 : Math.round(s.radius / 14)))), r.gauge_label_show && (c.select("." + bt.chartArcsGaugeUnit).attr("dy", (g ? 1.5 : .75) + "em").text(r.gauge_units), c.select("." + bt.chartArcsGaugeMin).attr("dx", -1 * (s.innerRadius + (s.radius - s.innerRadius) / (g ? 1 : 2)) + "px").attr("dy", "1.2em").text(a.textForGaugeMinMax(r.gauge_min, !1)), g || c.select("." + bt.chartArcsGaugeMax).attr("dx", s.innerRadius + (s.radius - s.innerRadius) / 2 + "px").attr("dy", "1.2em").text(a.textForGaugeMinMax(r.gauge_max, !0))) } } },
                qi = { initArea: function(t) { var e = this.config;
                        t.insert("g", "." + (e.area_front ? pt.circles : mt.lines)).attr("class", this.getClass("areas", !0)) }, updateAreaColor: function(t) { var e = this; return e.config.area_linearGradient ? e.getGradienColortUrl(t.id) : e.color(t) }, updateArea: function(t, e) { void 0 === e && (e = !1); var i = this,
                            n = i.config,
                            r = i.state,
                            s = i.$el,
                            o = i.$T,
                            l = e ? s.subchart : s;
                        n.area_linearGradient && i.updateLinearGradient(); var c = l.main.selectAll("." + ht.areas).selectAll("." + ht.area).data(i.lineData.bind(i));
                        o(c.exit(), t).style("opacity", "0").remove(), l.area = c.enter().append("path").attr("class", i.getClass("area", !0)).style("fill", i.updateAreaColor.bind(i)).style("opacity", (function() { return r.orgAreaOpacity = (0, a.select)(this).style("opacity"), "0" })).merge(c), c.style("opacity", r.orgAreaOpacity) }, redrawArea: function(t, e, n) { var a = this;
                        void 0 === n && (n = !1); var r = this,
                            s = (n ? this.$el.subchart : this.$el).area,
                            o = r.state.orgAreaOpacity; return [r.$T(s, e, G()).attr("d", t).style("fill", r.updateAreaColor.bind(r)).style("opacity", function(t) { return i(this, a), (r.isAreaRangeType(t) ? o / 1.75 : o) + "" }.bind(this))] }, generateDrawArea: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = r.line_connectNull,
                            o = r.axis_rotated,
                            l = a.generateGetAreaPoints(t, e),
                            c = a.getYScaleById.bind(a),
                            d = function(t) { return i(this, n), (e ? a.subxx : a.xx).call(a, t) }.bind(this),
                            h = function(t, r) { return i(this, n), a.isGrouped(t.id) ? l(t, r)[0][1] : c(t.id, e)(a.isAreaRangeType(t) ? a.getRangedData(t, "high") : a.getShapeYMin(t.id)) }.bind(this),
                            u = function(t, r) { return i(this, n), a.isGrouped(t.id) ? l(t, r)[1][1] : c(t.id, e)(a.isAreaRangeType(t) ? a.getRangedData(t, "low") : t.value) }.bind(this); return function(t) { var e = this;
                            i(this, n); var l, c = s ? a.filterRemoveNull(t.values) : t.values,
                                g = 0,
                                f = 0; if (a.isAreaType(t)) { var p = (0, Fe.area)();
                                p = o ? p.y(d).x0(h).x1(u) : p.x(d).y0(r.area_above ? 0 : r.area_below ? a.state.height : h).y1(u), s || (p = p.defined(function(t) { return i(this, e), null !== a.getBaseValue(t) }.bind(this))), a.isStepType(t) && (c = a.convertValuesToStep(c)), l = p.curve(a.getCurve(t))(c) } else c[0] && (g = a.scale.x(c[0].x), f = a.getYScaleById(t.id)(c[0].value)), l = o ? "M " + f + " " + g : "M " + g + " " + f; return l || "M 0 0" }.bind(this) }, generateGetAreaPoints: function(t, e) { var i = this,
                            n = i.config,
                            a = i.getShapeX(0, t, e),
                            r = i.getShapeY(!!e),
                            s = i.getShapeOffset(i.isAreaType, t, e),
                            o = i.getYScaleById.bind(i); return function(t, l) { var c = o.call(i, t.id, e)(i.getShapeYMin(t.id)),
                                d = s(t, l) || c,
                                h = a(t),
                                u = t.value,
                                g = r(t); return n.axis_rotated && (u > 0 && g < c || u < 0 && c < g) && (g = c), [
                                [h, d],
                                [h, g - (c - d)],
                                [h, g - (c - d)],
                                [h, d]
                            ] } } },
                Ki = { initBar: function() { var t = this.$el,
                            e = this.config,
                            i = this.state.clip;
                        t.bar = t.main.select("." + ct.chart).insert("g", ":first-child").attr("class", gt.chartBars).call(this.setCssRule(!1, "." + gt.chartBars, ["pointer-events:none"])), !1 === e.clipPath && (e.bar_radius || e.bar_radius_ratio) && t.bar.attr("clip-path", i.pathXAxis.replace(/#[^)]*/, "#" + i.id)) }, updateTargetsForBar: function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = n.$el,
                            s = n.getChartClass("Bar"),
                            o = n.getClass("bars", !0),
                            l = n.classFocus.bind(n),
                            c = a.interaction_enabled && a.data_selection_isselectable;
                        r.bar || n.initBar(), n.$el.main.select("." + gt.chartBars).selectAll("." + gt.chartBar).data(t.filter(function(t) { var a = this; return i(this, e), t.values.some(function(t) { return i(this, a), y(t.value) || n.isBarRangeType(t) }.bind(this)) }.bind(this))).attr("class", function(t) { return i(this, e), s(t) + l(t) }.bind(this)).enter().append("g").attr("class", s).style("opacity", "0").style("pointer-events", n.getStylePropValue("none")).append("g").attr("class", o).style("cursor", function(t) { return i(this, e), null != c && null != c.bind && c.bind(n.api)(t) ? "pointer" : null }.bind(this)).call(n.setCssRule(!0, " ." + gt.bar, ["fill"], n.color)) }, updateBar: function(t, e) { void 0 === e && (e = !1); var i = this,
                            n = i.config,
                            a = i.$el,
                            r = i.$T,
                            s = e ? a.subchart : a,
                            o = i.getClass("bar", !0),
                            l = i.initialOpacity.bind(i);
                        n.bar_linearGradient && i.updateLinearGradient(); var c = s.main.selectAll("." + gt.bars).selectAll("." + gt.bar).data(i.labelishData.bind(i));
                        r(c.exit(), t).style("opacity", "0").remove(), s.bar = c.enter().append("path").attr("class", o).style("fill", i.updateBarColor.bind(i)).merge(c).style("opacity", l) }, updateBarColor: function(t) { var e = this,
                            i = e.getStylePropValue(e.color); return e.config.bar_linearGradient ? e.getGradienColortUrl(t.id) : i ? i(t) : null }, redrawBar: function(t, e, n) { var a = this;
                        void 0 === n && (n = !1); var r = this,
                            s = (n ? r.$el.subchart : r.$el).bar; return [r.$T(s, e, G()).attr("d", function(e) { return i(this, a), (y(e.value) || r.isBarRangeType(e)) && t(e) }.bind(this)).style("fill", r.updateBarColor.bind(r)).style("opacity", null)] }, generateDrawBar: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = a.generateGetBarPoints(t, e),
                            o = r.axis_rotated,
                            l = r.bar_radius,
                            c = r.bar_radius_ratio,
                            d = y(l) && l > 0 ? function() { return i(this, n), l }.bind(this) : y(c) ? function(t) { return i(this, n), t * c }.bind(this) : null; return function(t, e) { i(this, n); var r = s(t, e),
                                l = +o,
                                c = +!l,
                                h = t.value < 0,
                                u = ["", ""],
                                g = 0,
                                f = a.isGrouped(t.id),
                                p = !(!d || !f) && a.isStackingRadiusData(t); if (d && (!f || p)) { var v = o ? c : l,
                                    x = r[2][v] - r[0][v],
                                    b = "a" + (g = d(x)) + "," + g + " " + (h ? "1 0 0" : "0 0 1") + " ";
                                u[+!o] = "" + b + g + "," + g, u[+o] = "" + b + [-g, g][o ? "sort" : "reverse"](), h && u.reverse() } var _ = o ? "H" + (r[1][l] - g) + " " + u[0] + "V" + (r[2][c] - g) + " " + u[1] + "H" + r[3][l] : "V" + (r[1][c] + (h ? -g : g)) + " " + u[0] + "H" + (r[2][l] - g) + " " + u[1] + "V" + r[3][c]; return "M" + r[0][l] + "," + r[0][c] + _ + "z" }.bind(this) }, isStackingRadiusData: function(t) { var e = this,
                            n = this,
                            a = n.$el,
                            r = n.config,
                            s = n.data,
                            o = n.state,
                            l = t.id,
                            c = t.index,
                            d = t.value; if (o.hiddenTargetIds.indexOf(l) > -1) { var h = a.bar.filter(function(t) { return i(this, e), t.id === l && t.value === d }.bind(this)); return !h.empty() && /a\d+/i.test(h.attr("d")) } var u = r.data_groups.find(function(t) { return i(this, e), t.indexOf(l) > -1 }.bind(this)),
                            g = n.orderTargets(n.filterTargetsToShow(s.targets.filter(n.isBarType, n))).filter(function(t) { return i(this, e), u.indexOf(t.id) > -1 }.bind(this)).map(function(t) { var n = this; return i(this, e), t.values.filter(function(t) { return i(this, n), t.index === c && (y(d) && d > 0 ? t.value > 0 : t.value < 0) }.bind(this))[0] }.bind(this)).filter(Boolean).map(function(t) { return i(this, e), t.id }.bind(this)); return 0 !== d && g.indexOf(l) === g.length - 1 }, generateGetBarPoints: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = e ? a.axis.subX : a.axis.x,
                            o = a.getIndicesMax(t) + 1,
                            l = a.getBarW("bar", s, o),
                            c = a.getShapeX(l, t, !!e),
                            d = a.getShapeY(!!e),
                            h = a.getShapeOffset(a.isBarType, t, !!e),
                            u = a.getYScaleById.bind(a); return function(t, s) { i(this, n); var o = u.call(a, t.id, e)(a.getShapeYMin(t.id)),
                                g = h(t, s) || o,
                                f = y(l) ? l : l[t.id] || l._$width,
                                p = t.value,
                                v = c(t),
                                x = d(t);
                            r.axis_rotated && (p > 0 && x < o || p < 0 && o < x) && (x = o), a.isBarRangeType(t) || (x -= o - g); var b = v + f; return [
                                [v, g],
                                [v, x],
                                [b, x],
                                [b, g]
                            ] }.bind(this) } };

            function Ji(t, e) { var i = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), i.push.apply(i, n) } return i } var Qi = { initCandlestick: function() { var t = this.$el;
                        t.candlestick = t.main.select("." + ct.chart).append("g").attr("class", ft.chartCandlesticks) }, updateTargetsForCandlestick: function(t) { var e = this,
                            n = this,
                            a = n.$el,
                            r = n.getChartClass("Candlestick"),
                            s = n.classFocus.bind(n);
                        a.candlestick || n.initCandlestick(), n.$el.main.select("." + ft.chartCandlesticks).selectAll("." + ft.chartCandlestick).data(t).attr("class", function(t) { return i(this, e), r(t) + s(t) }.bind(this)).enter().append("g").attr("class", r).style("pointer-events", "none") }, updateCandlestick: function(t, e) { var n = this;
                        void 0 === e && (e = !1); var a = this,
                            r = a.$el,
                            s = a.$T,
                            o = e ? r.subchart : r,
                            l = a.getClass("candlestick", !0),
                            c = a.initialOpacity.bind(a),
                            d = o.main.selectAll("." + ft.chartCandlestick).selectAll("." + ft.candlestick).data(a.labelishData.bind(a));
                        s(d.exit(), t).style("opacity", "0").remove(); var h = d.enter().filter(function(t) { return i(this, n), t.value }.bind(this)).append("g").attr("class", l);
                        h.append("line"), h.append("path"), o.candlestick || (o.candlestick = {}), o.candlestick = d.merge(h).style("opacity", c) }, generateDrawCandlestick: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = a.generateGetCandlestickPoints(t, e),
                            o = r.axis_rotated,
                            l = r.candlestick_color_down; return function(t, e, r) { var c, d = this;
                            i(this, n); var h = s(t, e),
                                u = null == (c = a.getCandlestickData(t)) ? void 0 : c._isUp,
                                g = +o;
                            r.classed && r.classed(ft[u ? "valueUp" : "valueDown"], !0); var f = o ? "H" + h[1][1] + " V" + h[1][0] + " H" + h[0][1] : "V" + h[1][1] + " H" + h[1][0] + " V" + h[0][1];
                            r.select("path").attr("d", "M" + h[0][g] + "," + h[0][+!g] + f + "z").style("fill", function(t) { return i(this, d), (u ? a.color(t) : P(l) ? l[t.id] : l) || a.color(t) }.bind(this)); var p = r.select("line"),
                                v = o ? { x1: h[2][1], x2: h[2][2], y1: h[2][0], y2: h[2][0] } : { x1: h[2][0], x2: h[2][0], y1: h[2][1], y2: h[2][2] }; for (var x in v) p.attr(x, v[x]) }.bind(this) }, generateGetCandlestickPoints: function(t, e) { var n = this;
                        void 0 === e && (e = !1); var a = this,
                            r = a.config,
                            s = e ? a.axis.subX : a.axis.x,
                            o = a.getIndicesMax(t) + 1,
                            l = a.getBarW("candlestick", s, o),
                            c = a.getShapeX(l, t, !!e),
                            d = a.getShapeY(!!e),
                            h = a.getShapeOffset(a.isBarType, t, !!e),
                            u = a.getYScaleById.bind(a); return function(t, s) { i(this, n); var o, g = u.call(a, t.id, e)(a.getShapeYMin(t.id)),
                                f = h(t, s) || g,
                                p = y(l) ? l : l[t.id] || l._$width,
                                v = a.getCandlestickData(t); if (v) { var x = { start: c(t), end: 0 };
                                x.end = x.start + p; var b = { start: d(v.open), end: d(v.close) },
                                    _ = { x: x.start + p / 2, high: d(v.high), low: d(v.low) };
                                r.axis_rotated && (t.value > 0 && b.start < g || t.value < 0 && g < b.start) && (b.start = g), b.start -= g - f, o = [
                                    [x.start, b.start],
                                    [x.end, b.end],
                                    [_.x, _.low, _.high]
                                ] } else o = [
                                [0, 0],
                                [0, 0],
                                [0, 0, 0]
                            ]; return o }.bind(this) }, redrawCandlestick: function(t, e, i) { void 0 === i && (i = !1); var n = this.$el,
                            r = this.$T,
                            s = (i ? n.subchart : n).candlestick,
                            o = G(!0); return [s.each((function(i, n) { var s = r((0, a.select)(this), e, o);
                            t(i, n, s) })).style("opacity", null)] }, getCandlestickData: function(t) { var e, i = t.value; if (O(i)) { var n = i[0],
                                a = i[1],
                                r = i[2],
                                s = i[3],
                                o = i[4],
                                l = void 0 !== o && o;
                            e = { open: n, high: a, low: r, close: s }, !1 !== l && (e.volume = l) } else P(i) && (e = function(t) { for (var e, i = 1; i < arguments.length; i++) e = null != arguments[i] ? arguments[i] : {}, i % 2 ? Ji(Object(e), !0).forEach((function(i) { h(t, i, e[i]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Ji(Object(e)).forEach((function(i) { Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i)) })); return t }({}, i)); return e && (e._isUp = e.close >= e.open), e || null } },
                tn = { initGauge: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.$el.arcs,
                            r = function(e) { i(this, t), a.append("text").attr("class", e).style("text-anchor", "middle").style("pointer-events", "none") }.bind(this); if (e.hasType("gauge")) { var s = e.hasMultiArcGauge();
                            a.append(s ? "g" : "path").attr("class", dt.chartArcsBackground).style("fill", !s && n.gauge_background || null), n.gauge_units && r(bt.chartArcsGaugeUnit), n.gauge_label_show && (r(bt.chartArcsGaugeMin), n.gauge_fullCircle || r(bt.chartArcsGaugeMax)) } }, updateGaugeMax: function() { var t = this,
                            e = t.config,
                            i = t.state,
                            n = t.hasMultiArcGauge() ? t.getMinMaxData().max[0].value : t.getTotalDataSum(i.rendered);
                        n + e.gauge_min * (e.gauge_min > 0 ? -1 : 1) > e.gauge_max && (e.gauge_max = n - e.gauge_min) }, redrawMultiArcGauge: function() { var t = this,
                            e = this,
                            n = e.config,
                            r = e.state,
                            s = e.$el,
                            o = e.state.hiddenTargetIds,
                            l = s.main.selectAll("." + dt.arcs).selectAll("." + dt.arcLabelLine).data(e.arcData.bind(e));
                        l.enter().append("rect").attr("class", function(e) { return i(this, t), dt.arcLabelLine + " " + ct.target + " " + ct.target + "-" + e.data.id }.bind(this)).merge(l).style("fill", function(n) { return i(this, t), e.levelColor ? e.levelColor(n.data.values[0].value) : e.color(n.data) }.bind(this)).style("display", n.gauge_label_show ? null : "none").each((function(t) { var i = 0,
                                n = 0,
                                s = 0,
                                l = ""; if (o.indexOf(t.data.id) < 0) { var c = e.updateAngle(t),
                                    d = r.gaugeArcWidth / e.filterTargetsToShow(e.data.targets).length * (c.index + 1),
                                    h = c.endAngle - Math.PI / 2,
                                    u = r.radius - d,
                                    g = h - (0 === u ? 0 : 1 / u);
                                i = r.radiusExpanded - r.radius + d, n = Math.cos(g) * u, s = Math.sin(g) * u, l = "rotate(" + 180 * h / Math.PI + ", " + n + ", " + s + ")" }(0, a.select)(this).attr("x", n).attr("y", s).attr("width", i).attr("height", 2).attr("transform", l).style("stroke-dasharray", "0, " + (i + 2) + ", 0") })) }, textForGaugeMinMax: function(t, e) { var i = this.config.gauge_label_extents; return _(i) ? i.bind(this.api)(t, e) : t }, getGaugeLabelHeight: function() { var t = this.config; return this.config.gauge_label_show && !t.gauge_fullCircle ? 20 : 0 }, getPaddingBottomForGauge: function() { return this.getGaugeLabelHeight() * (this.config.gauge_label_show ? 2 : 2.5) } },
                en = { initBubble: function() { var t = this.config;
                        this.hasType("bubble") && (t.point_show = !0, t.point_type = "circle", t.point_sensitivity = 25) }, getBaseLength: function() { var t = this,
                            e = t.state,
                            i = e.width,
                            n = e.height,
                            a = qt,
                            r = t.cache.get(a); return r || t.cache.add(a, r = Q("min", [i, n])), r }, getBubbleR: function(t) { var e = this,
                            n = this,
                            a = n.config.bubble_maxR;
                        _(a) ? a = a.bind(n.api)(t) : y(a) || (a = n.getBaseLength() / (2 * n.getMaxDataCount()) + 12); var r = Q("max", n.getMinMaxData().max.map(function(t) { return i(this, e), n.isBubbleZType(t) ? n.getBubbleZData(t.value, "y") : P(t.value) ? t.value.mid : t.value }.bind(this))),
                            s = a * a * Math.PI,
                            o = (n.isBubbleZType(t) ? n.getBubbleZData(t.value, "z") : t.value) * (s / r); return Math.sqrt(o / Math.PI) }, getBubbleZData: function(t, e) { return P(t) ? t[e] : t["y" === e ? 0 : 1] } },
                nn = { initLine: function() { var t = this.$el;
                        t.line = t.main.select("." + ct.chart).append("g").attr("class", mt.chartLines).call(this.setCssRule(!1, "." + mt.chartLines, ["pointer-events:none"])) }, updateTargetsForLine: function(t) { var e = this,
                            n = this,
                            a = n.$el,
                            r = a.area,
                            s = a.line,
                            o = a.main,
                            l = n.getChartClass("Line"),
                            c = n.getClass("lines", !0),
                            d = n.classFocus.bind(n);
                        s || n.initLine(); var h = t.filter(function(t) { return i(this, e), !(n.isScatterType(t) || n.isBubbleType(t)) }.bind(this)),
                            u = o.select("." + mt.chartLines).selectAll("." + mt.chartLine).data(h).attr("class", function(t) { return i(this, e), l(t) + d(t) }.bind(this)),
                            g = u.enter().append("g").attr("class", l).style("opacity", "0").style("pointer-events", n.getStylePropValue("none")); if (g.append("g").attr("class", c), n.hasTypeOf("Area")) { var f = (!r && g.empty() ? u : g).filter(n.isAreaType.bind(n));
                            n.initArea(f) }
                        n.updateTargetForCircle(h, g) }, updateLine: function(t, e) { var n = this;
                        void 0 === e && (e = !1); var a = this,
                            r = a.format.extraLineClasses,
                            s = a.$el,
                            o = a.$T,
                            l = e ? s.subchart : s,
                            c = l.main.selectAll("." + mt.lines).selectAll("." + mt.line).data(a.lineData.bind(a));
                        o(c.exit(), t).style("opacity", "0").remove(), l.line = c.enter().append("path").attr("class", function(t) { return i(this, n), a.getClass("line", !0)(t) + " " + (r(t) || "") }.bind(this)).style("stroke", a.color).merge(c).style("opacity", a.initialOpacity.bind(a)).style("shape-rendering", function(t) { return i(this, n), a.isStepType(t) ? "crispEdges" : "" }.bind(this)).attr("transform", null) }, redrawLine: function(t, e, i) { void 0 === i && (i = !1); var n = this.$el; return [(0, this.$T)((i ? n.subchart : n).line, e, G()).attr("d", t).style("stroke", this.color).style("opacity", null)] }, getCurve: function(t) { var e = this,
                            n = this; return n.config.axis_rotated && n.isStepType(t) ? function(a) { i(this, e); var r = n.getInterpolate(t)(a); return r.orgPoint = r.point, r.pointRotated = function(t, e) { 1 === this._point && (this._point = 2); var i = this._y * (1 - this._t) + e * this._t;
                                this._context.lineTo(this._x, i), this._context.lineTo(t, i), this._x = t, this._y = e }, r.point = function(t, e) { 0 === this._point ? this.orgPoint(t, e) : this.pointRotated(t, e) }, r }.bind(this) : n.getInterpolate(t) }, generateDrawLine: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = a.scale,
                            o = r.line_connectNull,
                            l = r.axis_rotated,
                            c = a.generateGetLinePoints(t, e),
                            d = a.getYScaleById.bind(a),
                            h = function(t) { return i(this, n), (e ? a.subxx : a.xx).call(a, t) }.bind(this),
                            u = function(t, r) { return i(this, n), a.isGrouped(t.id) ? c(t, r)[0][1] : d(t.id, e)(a.getBaseValue(t)) }.bind(this),
                            g = (0, Fe.line)();
                        g = l ? g.x(u).y(h) : g.x(h).y(u), o || (g = g.defined(function(t) { return i(this, n), null !== a.getBaseValue(t) }.bind(this))); var f = e ? s.subX : s.x; return function(t) { i(this, n); var c, h = d(t.id, e),
                                u = o ? a.filterRemoveNull(t.values) : t.values,
                                p = 0,
                                v = 0; if (a.isLineType(t)) { var x = r.data_regions[t.id];
                                x ? c = a.lineWithRegions(u, s.zoom || f, h, x) : (a.isStepType(t) && (u = a.convertValuesToStep(u)), c = g.curve(a.getCurve(t))(u)) } else u[0] && (p = f(u[0].x), v = h(u[0].value)), c = l ? "M " + v + " " + p : "M " + p + " " + v; return c || "M 0 0" }.bind(this) }, lineWithRegions: function(t, e, n, a) { var r, s, o, l, c = this,
                            d = this,
                            h = d.config.axis_rotated,
                            u = d.axis.isTimeSeries(),
                            g = d.axis.isCategorized() ? .5 : 0,
                            f = [],
                            p = function(t, e) { i(this, c); for (var n, a = 0; n = e[a]; a++)
                                    if (n.start < t && t <= n.end) return n.style;
                                return !1 }.bind(this); if (w(a))
                            for (var v, x = function(t, e) { return i(this, c), T(t) ? e : u ? nt.call(d, t) : t }.bind(this), _ = 0; v = a[_]; _++) { var m = x(v.start, t[0].x),
                                    y = x(v.end, t[t.length - 1].x),
                                    A = v.style || { dasharray: "2 2" };
                                f[_] = { start: m, end: y, style: A } }
                        for (var k, S = h ? function(t) { return i(this, c), n(t.value) }.bind(this) : function(t) { return i(this, c), e(t.x) }.bind(this), C = h ? function(t) { return i(this, c), e(t.x) }.bind(this) : function(t) { return i(this, c), n(t.value) }.bind(this), R = function(t) { return i(this, c), "M" + t[0][0] + "," + t[0][1] + "L" + t[1][0] + "," + t[1][1] }.bind(this), E = u ? function(t, a, r, l) { i(this, c); var d = t.x.getTime(),
                                    u = a.x - t.x,
                                    g = new Date(d + u * r),
                                    f = new Date(d + u * (r + l)),
                                    p = h ? [
                                        [n(s(r)), e(g)],
                                        [n(s(r + o)), e(f)]
                                    ] : [
                                        [e(g), n(s(r))],
                                        [e(f), n(s(r + o))]
                                    ]; return R(p) }.bind(this) : function(t, a, o, l) { i(this, c); var d = h ? [
                                    [n(s(o), !0), e(r(o))],
                                    [n(s(o + l), !0), e(r(o + l))]
                                ] : [
                                    [e(r(o), !0), n(s(o))],
                                    [e(r(o + l), !0), n(s(o + l))]
                                ]; return R(d) }.bind(this), L = { x: d.axis.getAxisType("x"), y: d.axis.getAxisType("y") }, O = "", P = 0; k = t[P]; P++) { var I = t[P - 1],
                                D = I && b(I.value);
                            A = p(k.x, f); if (b(k.value))
                                if (!T(f) && A && D) { if (D) { try { A = A.dasharray.split(" ") } catch (t) { A = "2 2".split(" ") }
                                        r = Xe(L.x, I.x + g, k.x + g), s = Xe(L.y, I.value, k.value); var z = e(k.x) - e(I.x),
                                            M = n(k.value) - n(I.value),
                                            X = Math.sqrt(Math.pow(z, 2) + Math.pow(M, 2));
                                        l = (o = A[0] / X) * A[1]; for (var $ = o; $ <= 1; $ += l) O += E(I, k, $, o), $ + l >= 1 && (O += E(I, k, 1, 0)) } } else O += (P && D ? "L" : "M") + S(k) + "," + C(k) } return O }, isWithinStep: function(t, e) { return Math.abs(e - F(this.state.event, t)[1]) < 30 }, shouldDrawPointsForLine: function(t) { var e = this.config.line_point; return !0 === e || O(e) && -1 !== e.indexOf(t.id) } },
                an = function() { return i(this, undefined), G() }.bind(void 0),
                rn = { hasValidPointType: function(t) { return /^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(t || this.config.point_type) }, hasValidPointDrawMethods: function(t) { var e = t || this.config.point_type; return R(e) && _(e.create) && _(e.update) }, initialOpacityForCircle: function(t) { var e = this.config,
                            i = this.state.withoutFadeIn,
                            n = e.point_opacity; return T(n) && (n = null !== this.getBaseValue(t) && i[t.id] ? this.opacityForCircle(t) : "0"), n }, opacityForCircle: function(t) { var e = this.config,
                            i = e.point_opacity; return T(i) && (i = e.point_show && !e.point_focus_only ? null : "0", i = b(this.getBaseValue(t)) ? this.isBubbleType(t) || this.isScatterType(t) ? "0.5" : i : "0"), i }, initCircle: function() { var t = this,
                            e = t.$el.main;
                        t.point = t.generatePoint(), (t.hasType("bubble") || t.hasType("scatter")) && e.select("." + pt.chartCircles).empty() && e.select("." + ct.chart).append("g").attr("class", pt.chartCircles) }, updateTargetForCircle: function(t, e) { var n = this,
                            r = this,
                            s = r.config,
                            o = r.data,
                            l = r.$el,
                            c = s.interaction_enabled && s.data_selection_enabled,
                            d = c && s.data_selection_isselectable,
                            h = r.getClass("circles", !0); if (s.point_show) { l.circle || r.initCircle(); var u = t,
                                g = e; if (!u) { u = o.targets.filter(function(t) { return i(this, n), this.isScatterType(t) || this.isBubbleType(t) }.bind(this)); var f = l.main.select("." + pt.chartCircles).style("pointer-events", "none").selectAll("." + pt.circles).data(u);
                                f.exit().remove(), g = f.enter() }
                            c && g.append("g").attr("class", function(t) { return i(this, n), r.generateClass(Rt.selectedCircles, t.id) }.bind(this)), g.append("g").attr("class", h).call(function(t) { i(this, n), r.setCssRule(!0, "." + pt.circles, ["cursor:pointer"], d)(t), r.setCssRule(!0, " ." + pt.circle, ["fill", "stroke"], r.color)(t) }.bind(this)).style("opacity", (function() { return (0, a.select)(this.parentNode).attr("class").indexOf(pt.chartCircles) > -1 ? "0" : null })), c && u.forEach(function(t) { var e = this;
                                i(this, n), l.main.selectAll("." + Rt.selectedCircles + r.getTargetSelectorSuffix(t.id)).selectAll("" + Rt.selectedCircle).each(function(n) { i(this, e), n.value = t.values[n.index].value }.bind(this)) }.bind(this)) } }, updateCircle: function(t) { var e = this;
                        void 0 === t && (t = !1); var n = this,
                            a = n.config,
                            r = n.state,
                            s = n.$el,
                            o = a.point_focus_only,
                            l = t ? s.subchart : s; if (a.point_show && !r.toggling) { var c = l.main.selectAll("." + pt.circles).selectAll("." + pt.circle).data(function(t) { return i(this, e), n.isLineType(t) && n.shouldDrawPointsForLine(t) || n.isBubbleType(t) || n.isRadarType(t) || n.isScatterType(t) ? o ? [t.values[0]] : t.values : [] }.bind(this));
                            c.exit().remove(), c.enter().filter(Boolean).append(n.point("create", this, n.pointR.bind(n), n.getStylePropValue(n.color))), l.circle = l.main.selectAll("." + pt.circles + " ." + pt.circle).style("stroke", n.getStylePropValue(n.color)).style("opacity", n.initialOpacityForCircle.bind(n)) } }, redrawCircle: function(t, e, i, n, a) { void 0 === a && (a = !1); var r = this,
                            s = r.state.rendered,
                            o = r.$el,
                            l = r.$T,
                            c = a ? o.subchart : o,
                            d = c.main.selectAll("." + Rt.selectedCircle); if (!r.config.point_show) return []; var h = r.point("update", r, t, e, r.getStylePropValue(r.color), i, n, d),
                            u = r.isCirclePoint() ? "c" : "",
                            g = G(),
                            f = r.opacityForCircle.bind(r),
                            p = []; return c.circle.each((function(t) { var e = h.bind(this)(t);
                            e = l(e, i || !s, g).style("opacity", f), p.push(e) })), [p, l(d, i).attr(u + "x", t).attr(u + "y", e)] }, showCircleFocus: function(t) { var e = this,
                            n = e.config,
                            r = e.state,
                            s = r.hasRadar,
                            o = r.resizing,
                            l = r.toggling,
                            c = r.transiting,
                            d = e.$el.circle; if (!1 === c && n.point_focus_only && d) { var h = (s ? e.radarCircleX : e.circleX).bind(e),
                                u = (s ? e.radarCircleY : e.circleY).bind(e),
                                g = l || T(t),
                                f = e.point("update", e, h, u, e.getStylePropValue(e.color), !o && g);
                            t && (d = d.filter((function(e) { var n = this,
                                    r = t.filter(function(t) { return i(this, n), t.id === e.id }.bind(this)); return !!r.length && (0, a.select)(this).datum(r[0]) }))), d.attr("class", this.updatePointClass.bind(this)).style("opacity", null).each((function(t) { var i = t.id,
                                    n = t.index,
                                    a = t.value,
                                    r = "hidden";
                                b(a) && (f.bind(this)(t), e.expandCircles(n, i), r = ""), this.style.visibility = r })) } }, hideCircleFocus: function() { var t = this,
                            e = t.config,
                            i = t.$el.circle;
                        e.point_focus_only && i && (t.unexpandCircles(), i.style("visibility", "hidden")) }, circleX: function(t) { return this.xx(t) }, updateCircleY: function(t) { var e = this;
                        void 0 === t && (t = !1); var n = this,
                            a = n.generateGetLinePoints(n.getShapeIndices(n.isLineType), t); return function(r, s) { i(this, e); var o = r.id; return n.isGrouped(o) ? a(r, s)[0][1] : n.getYScaleById(o, t)(n.getBaseValue(r)) }.bind(this) }, expandCircles: function(t, e, i) { var n = this,
                            r = n.pointExpandedR.bind(n);
                        i && n.unexpandCircles(); var s = n.getShapeByIndex("circle", t, e).classed(ct.EXPANDED, !0),
                            o = r(s) / n.config.point_r,
                            l = 1 - o;
                        n.isCirclePoint() ? s.attr("r", r) : s.each((function() { var t = (0, a.select)(this); if ("circle" === this.tagName) t.attr("r", r);
                            else { var e = this.getBBox(),
                                    i = e.width,
                                    n = e.height,
                                    s = l * (+t.attr("x") + i / 2),
                                    c = l * (+t.attr("y") + n / 2);
                                t.attr("transform", "translate(" + s + " " + c + ") scale(" + o + ")") } })) }, unexpandCircles: function(t) { var e = this,
                            i = e.pointR.bind(e),
                            n = e.getShapeByIndex("circle", t).filter((function() { return (0, a.select)(this).classed(ct.EXPANDED) })).classed(ct.EXPANDED, !1); if (n.attr("r", i), !e.isCirclePoint()) { var r = i(n) / e.config.point_r;
                            n.attr("transform", 1 !== r ? "scale(" + r + ")" : null) } }, pointR: function(t) { var e = this,
                            i = e.config.point_r,
                            n = i; return e.isBubbleType(t) ? n = e.getBubbleR(t) : _(i) && (n = i.bind(e.api)(t)), n }, pointExpandedR: function(t) { var e = this,
                            i = e.config,
                            n = e.isBubbleType(t) ? 1.15 : 1.75; return i.point_focus_expand_enabled ? i.point_focus_expand_r || e.pointR(t) * n : e.pointR(t) }, pointSelectR: function(t) { var e = this.config.point_select_r; return _(e) ? e(t) : e || 4 * this.pointR(t) }, isWithinCircle: function(t, e) { var i = F(this.state.event, t),
                            n = (0, a.select)(t),
                            r = this.isCirclePoint(t) ? "c" : "",
                            s = +n.attr(r + "x"),
                            o = +n.attr(r + "y"); if (!s && !o && 1 === t.nodeType) { var l = N(t);
                            s = l.x, o = l.y } return Math.sqrt(Math.pow(s - i[0], 2) + Math.pow(o - i[1], 2)) < (e || this.config.point_sensitivity) }, insertPointInfoDefs: function(t, e) { var n, r = this,
                            s = function(t, e) { i(this, r); for (var n, a = t.attributes, s = 0; n = a[s]; s++) n = n.name, e.setAttribute(n, t.getAttribute(n)) }.bind(this),
                            l = (new DOMParser).parseFromString(t, "image/svg+xml").documentElement,
                            c = o.createElementNS(a.namespaces.svg, l.nodeName.toLowerCase()); if (c.id = e, c.style.fill = "inherit", c.style.stroke = "inherit", s(l, c), null != (n = l.childNodes) && n.length) { var d = (0, a.select)(c); "innerHTML" in c ? d.html(l.innerHTML) : W(l.childNodes).forEach(function(t) { i(this, r), s(t, d.append(t.tagName).node()) }.bind(this)) }
                        this.$el.defs.node().appendChild(c) }, pointFromDefs: function(t) { return this.$el.defs.select("#" + t) }, updatePointClass: function(t) { var e = this,
                            i = e.$el.circle,
                            n = !1; return (P(t) || i) && (n = !0 === t ? i.each((function(t) { var i = e.getClass("circle", !0)(t);
                            this.getAttribute("class").indexOf(ct.EXPANDED) > -1 && (i += " " + ct.EXPANDED), this.setAttribute("class", i) })) : e.getClass("circle", !0)(t)), n }, generateGetLinePoints: function(t, e) { var n = this,
                            a = this,
                            r = a.config,
                            s = a.getShapeX(0, t, e),
                            o = a.getShapeY(e),
                            l = a.getShapeOffset(a.isLineType, t, e),
                            c = a.getYScaleById.bind(a); return function(t, d) { i(this, n); var h = c.call(a, t.id, e)(a.getShapeYMin(t.id)),
                                u = l(t, d) || h,
                                g = s(t),
                                f = o(t);
                            r.axis_rotated && (t.value > 0 && f < h || t.value < 0 && h < f) && (f = h); var p = [g, f - (h - u)]; return [p, p, p, p] }.bind(this) }, generatePoint: function() { var t = this,
                            e = t.config,
                            i = t.state.datetimeId,
                            n = [],
                            r = L(e.point_pattern) ? e.point_pattern : [e.point_type]; return function(e, s) { for (var o = arguments.length, l = Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++) l[c - 2] = arguments[c]; return function(o) { var c, d = t.getTargetSelectorSuffix(o.id || (null == (c = o.data) ? void 0 : c.id) || o),
                                    h = (0, a.select)(this);
                                n.indexOf(d) < 0 && n.push(d); var u = r[n.indexOf(d) % r.length]; if (t.hasValidPointType(u)) u = t[u];
                                else if (!t.hasValidPointDrawMethods(u)) { var g = i + "-point" + d; if (t.pointFromDefs(g).size() < 1 && t.insertPointInfoDefs(u, g), "create" === e) return t.custom.create.bind(s).apply(void 0, [h, g].concat(l)); if ("update" === e) return t.custom.update.bind(s).apply(void 0, [h].concat(l)) } return u[e].bind(s).apply(void 0, [h].concat(l)) } } }, custom: { create: function(t, e, i) { return t.append("use").attr("xlink:href", "#" + e).attr("class", this.updatePointClass.bind(this)).style("fill", i).node() }, update: function(t, e, n, a, r, s, o) { var l = this,
                                c = t.node().getBBox(),
                                d = c.width,
                                h = c.height,
                                u = function(t) { return i(this, l), b(t.value) ? e(t) - d / 2 : 0 }.bind(this),
                                g = function(t) { return i(this, l), b(t.value) ? n(t) - h / 2 : 0 }.bind(this),
                                f = t; return r && (s && f.attr("x", u), f = this.$T(f, r, an()), o && this.$T(o, r, an())), f.attr("x", u).attr("y", g).style("fill", a) } }, circle: { create: function(t, e, i) { return t.append("circle").attr("class", this.updatePointClass.bind(this)).attr("r", e).style("fill", i).node() }, update: function(t, e, i, n, a, r, s) { var o = this,
                                l = t; return o.hasType("bubble") && l.attr("r", o.pointR.bind(o)), a && (r && l.attr("cx", e), l.attr("cx") && (l = o.$T(l, a, an())), s && o.$T(l, a, an())), l.attr("cx", e).attr("cy", i).style("fill", n) } }, rectangle: { create: function(t, e, n) { var a = this,
                                r = function(t) { return i(this, a), 2 * e(t) }.bind(this); return t.append("rect").attr("class", this.updatePointClass.bind(this)).attr("width", r).attr("height", r).style("fill", n).node() }, update: function(t, e, n, a, r, s, o) { var l = this,
                                c = this,
                                d = c.config.point_r,
                                h = function(t) { return i(this, l), e(t) - d }.bind(this),
                                u = function(t) { return i(this, l), n(t) - d }.bind(this),
                                g = t; return r && (s && g.attr("x", h), g = c.$T(g, r, an()), o && c.$T(o, r, an())), g.attr("x", h).attr("y", u).style("fill", a) } } };

            function sn(t) { var e = t.config.polar_level_max,
                    i = t.getMinMaxData().max[0].value; return e && e > i && (i = e), i } var on = { initPolar: function() { var t = this,
                        e = t.$el.arcs,
                        i = t.config,
                        n = i.polar_level_text_show,
                        a = i.polar_level_text_backgroundColor;
                    e.levels = e.append("g").attr("class", kt), n && a && t.generateDataLabelBackgroundColorFilter(a) }, getPolarOuterRadius: function(t, e) { var i, n = sn(this); return (null != (i = null == t ? void 0 : t.data.values[0].value) ? i : 0) / n * e }, updateTargetsForPolar: function(t) { this.updateTargetsForArc(t) }, redrawPolar: function() { this.config.polar_level_show && this.updatePolarLevel() }, updatePolarLevel: function() { var t = this,
                        e = this,
                        n = e.config,
                        a = e.state,
                        r = e.$el.arcs.levels,
                        s = n.polar_level_depth,
                        o = sn(e),
                        l = tt(0, s),
                        c = a.radius,
                        d = l.map(function(e) { return i(this, t), c * ((e + 1) / s) }.bind(this)),
                        h = (n.polar_level_text_format || function() {}).bind(e.api),
                        u = r.selectAll("." + At).data(l);
                    u.exit().remove(); var g = u.enter().append("g").attr("class", function(e, n) { return i(this, t), At + " " + At + "-" + n }.bind(this)); if (g.append("circle"), g.merge(u).selectAll("circle").style("visibility", n.polar_level_show ? null : "hidden").attr("cx", 0).attr("cy", 0).attr("r", function(e) { return i(this, t), d[e] }.bind(this)), n.polar_level_text_show) { var f = n.polar_level_text_backgroundColor,
                            p = "#" + a.datetimeId + "-labels-bg" + e.getTargetSelectorSuffix(f);
                        g.append("text").style("text-anchor", "middle"), g.merge(u).selectAll("text").attr("dy", function(e) { return i(this, t), 5 - d[e] }.bind(this)).attr("filter", f ? "url(" + p + ")" : null).text(function(e) { return i(this, t), h(o / l.length * (e + 1)) }.bind(this)) } } }; var ln = ie,
                cn = { initRadar: function() { var t = this,
                            e = t.config,
                            i = t.state.current,
                            n = t.$el;
                        t.hasType("radar") && (n.radar = n.main.select("." + ct.chart).append("g").attr("class", St.chartRadars), n.radar.levels = n.radar.append("g").attr("class", kt), n.radar.axes = n.radar.append("g").attr("class", ut.axis), n.radar.shapes = n.radar.append("g").attr("class", Et.shapes), i.dataMax = e.radar_axis_max || t.getMinMaxData().max[0].value) }, getRadarSize: function() { var t = this.config,
                            e = this.state,
                            i = e.arcWidth,
                            n = e.arcHeight,
                            a = t.axis_x_categories.length < 4 ? -20 : 10,
                            r = (Math.min(i, n) - a) / 2; return [r, r] }, updateTargetsForRadar: function(t) { var e = this,
                            n = this.config;
                        E(n.axis_x_categories) && (n.axis_x_categories = tt(0, Q("max", t.map(function(t) { return i(this, e), t.values.length }.bind(this))))), this.generateRadarPoints() }, getRadarPosition: function(t, e, n, a) { var r = this,
                            s = this.config,
                            o = this.getRadarSize(),
                            l = o[0],
                            c = o[1],
                            d = s.axis_x_categories.length,
                            h = s.radar_direction_clockwise,
                            u = W(t).map(function(o) { return i(this, r),
                                    function(t, e, i, n, a, r) { var s = t && n > 0 ? i - n : n,
                                            o = 2 * Math.PI; return a * (1 - r * ("x" === e ? Math.sin : Math.cos)(s * o / i)) }(h, o, d, e, w(n) ? n : "x" === t ? l : c, y(a) ? a : s.radar_size_ratio) }.bind(this)); return 1 === u.length ? u[0] : u }, generateRadarPoints: function() { var t = this,
                            e = this,
                            n = e.data.targets,
                            a = e.getRadarSize(),
                            r = a[0],
                            s = a[1],
                            o = e.cache.get(ln) || {},
                            l = o._size;
                        (!l || l.width !== r && l.height !== s) && (n.forEach(function(n) { var a = this;
                            i(this, t), o[n.id] = n.values.map(function(t, n) { return i(this, a), e.getRadarPosition(["x", "y"], n, void 0, e.getRatio("radar", t)) }.bind(this)) }.bind(this)), o._size = { width: r, height: s }, e.cache.add(ln, o)) }, redrawRadar: function() { var t = this,
                            e = t.$el,
                            i = e.radar,
                            n = e.main,
                            a = t.getTranslate("radar");
                        a && (i.attr("transform", a), n.select("." + Ot.chartTexts).attr("transform", a), t.generateRadarPoints(), t.updateRadarLevel(), t.updateRadarAxes(), t.updateRadarShape()) }, generateGetRadarPoints: function() { var t = this,
                            e = this.cache.get(ln); return function(n, a) { i(this, t); var r = e[n.id][a]; return [r, r, r, r] }.bind(this) }, updateRadarLevel: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.state,
                            r = e.$el.radar,
                            s = e.getRadarSize(),
                            o = s[0],
                            l = s[1],
                            c = n.radar_level_depth,
                            d = n.axis_x_categories.length,
                            h = n.radar_level_text_show,
                            u = r.levels,
                            g = tt(0, c),
                            f = n.radar_size_ratio * Math.min(o, l),
                            p = g.map(function(e) { return i(this, t), f * ((e + 1) / c) }.bind(this)),
                            v = (n.radar_level_text_format || function() {}).bind(e.api),
                            x = g.map(function(n) { var a = this;
                                i(this, t); var r = p[n]; return tt(0, d).map(function(t) { return i(this, a), e.getRadarPosition(["x", "y"], t, r, 1).join(",") }.bind(this)).join(" ") }.bind(this)),
                            b = u.selectAll("." + At).data(g);
                        b.exit().remove(); var _ = b.enter().append("g").attr("class", function(e, n) { return i(this, t), At + " " + At + "-" + n }.bind(this));
                        _.append("polygon").style("visibility", n.radar_level_show ? null : "hidden"), h && (u.select("text").empty() && u.append("text").attr("dx", "-.5em").attr("dy", "-.7em").style("text-anchor", "end").text(function() { return i(this, t), v(0) }.bind(this)), _.append("text").attr("dx", "-.5em").style("text-anchor", "end").text(function(e) { return i(this, t), v(a.current.dataMax / g.length * (e + 1)) }.bind(this))), _.merge(b).attr("transform", function(e) { return i(this, t), "translate(" + (o - p[e]) + ", " + (l - p[e]) + ")" }.bind(this)).selectAll("polygon").attr("points", function(e) { return i(this, t), x[e] }.bind(this)), h && u.selectAll("text").attr("x", function(e) { return i(this, t), T(e) ? o : x[e].split(",")[0] }.bind(this)).attr("y", function(e) { return i(this, t), T(e) ? l : 0 }.bind(this)) }, updateRadarAxes: function() { var t = this,
                            e = this,
                            n = e.config,
                            r = e.$el.radar,
                            s = e.getRadarSize(),
                            o = s[0],
                            l = s[1],
                            c = n.axis_x_categories,
                            d = r.axes.selectAll("g").data(c);
                        d.exit().remove(); var h = d.enter().append("g").attr("class", function(e, n) { return i(this, t), ut.axis + "-" + n }.bind(this)); if (n.radar_axis_line_show && h.append("line"), n.radar_axis_text_show && h.append("text"), d = h.merge(d), n.radar_axis_line_show && d.select("line").attr("x1", o).attr("y1", l).attr("x2", function(n, a) { return i(this, t), e.getRadarPosition("x", a) }.bind(this)).attr("y2", function(n, a) { return i(this, t), e.getRadarPosition("y", a) }.bind(this)), n.radar_axis_text_show) { var u = n.radar_axis_text_position,
                                g = u.x,
                                f = void 0 === g ? 0 : g,
                                p = u.y,
                                v = void 0 === p ? 0 : p;
                            d.select("text").style("text-anchor", "middle").attr("dy", ".5em").call(function(e) { i(this, t), e.each((function(t) { X((0, a.select)(this), t + "", [-.6, 1.2]) })) }.bind(this)).datum(function(e, n) { return i(this, t), { index: n } }.bind(this)).attr("transform", (function(t) { T(this.width) && (this.width = this.getBoundingClientRect().width / 2); var i = e.getRadarPosition("x", t.index, void 0, 1),
                                    n = Math.round(e.getRadarPosition("y", t.index, void 0, 1)); return i > o ? i += this.width + f : Math.round(i) < o && (i -= this.width + f), n > l ? (n / 2 === l && "tspan" === this.firstChild.tagName && this.firstChild.setAttribute("dy", "0em"), n += v) : n < l && (n -= v), "translate(" + i + " " + n + ")" })) }
                        e.bindEvent() }, bindEvent: function() { var t = this,
                            e = this,
                            n = e.config,
                            r = e.state,
                            s = e.$el,
                            o = s.radar,
                            l = s.svg,
                            c = n.point_focus_only,
                            d = r,
                            h = d.inputType,
                            u = d.transiting; if (n.interaction_enabled) { var g = "mouse" === h,
                                f = function(e) { i(this, t); var n = e.target; /tspan/i.test(n.tagName) && (n = n.parentNode); var r = (0, a.select)(n).datum(); return r && 1 === Object.keys(r).length ? r.index : void 0 }.bind(this),
                                p = function(n) { i(this, t), r.event = n; var a = f(n),
                                        s = T(a);
                                    (g || s) && (e.hideTooltip(), c ? e.hideCircleFocus() : e.unexpandCircles(), g ? e.setOverOut(!1, a) : s && e.callOverOutForTouch()) }.bind(this);
                            o.axes.selectAll("text").on(g ? "mouseover " : "touchstart", function(n) { if (i(this, t), !u) { r.event = n; var a = f(n);
                                    e.selectRectForSingle(l.node(), null, a), g ? e.setOverOut(!0, a) : e.callOverOutForTouch(a) } }.bind(this)).on("mouseout", g ? p : null), g || l.on("touchstart", p) } }, updateRadarShape: function() { var t = this,
                            e = this,
                            n = e.data.targets.filter(function(n) { return i(this, t), e.isRadarType(n) }.bind(this)),
                            a = e.cache.get(ln),
                            r = e.$el.radar.shapes.selectAll("polygon").data(n),
                            s = r.enter().append("g").attr("class", e.getChartClass("Radar"));
                        e.$T(r.exit()).remove(), s.append("polygon").merge(r).style("fill", e.color).style("stroke", e.color).attr("points", function(e) { return i(this, t), a[e.id].join(" ") }.bind(this)), e.updateTargetForCircle(n, s) }, radarCircleX: function(t) { return this.cache.get(ln)[t.id][t.index][0] }, radarCircleY: function(t) { return this.cache.get(ln)[t.id][t.index][1] } },
                dn = { point_show: !0, point_r: 2.5, point_sensitivity: 10, point_focus_expand_enabled: !0, point_focus_expand_r: void 0, point_focus_only: !1, point_opacity: void 0, point_pattern: [], point_select_r: void 0, point_type: "circle" },
                hn = { area_above: !1, area_below: !1, area_front: !0, area_linearGradient: !1, area_zerobased: !0 },
                un = { bar_label_threshold: 0, bar_linearGradient: !1, bar_indices_removeNull: !1, bar_overlap: !1, bar_padding: 0, bar_radius: void 0, bar_radius_ratio: void 0, bar_sensitivity: 2, bar_width: void 0, bar_width_ratio: .6, bar_width_max: void 0, bar_zerobased: !0 },
                gn = { bubble_maxR: 35, bubble_zerobased: !1 },
                fn = { candlestick_width: void 0, candlestick_width_ratio: .6, candlestick_width_max: void 0, candlestick_color_down: "red" },
                pn = { line_connectNull: !1, line_step_type: "step", line_step_tooltipMatch: !1, line_zerobased: !1, line_classes: void 0, line_point: !0 },
                vn = { scatter_zerobased: !1 },
                xn = { spline_interpolation_type: "cardinal" },
                bn = { donut_label_show: !0, donut_label_format: void 0, donut_label_threshold: .05, donut_label_ratio: void 0, donut_width: void 0, donut_title: "", donut_expand: {}, donut_expand_rate: .98, donut_expand_duration: 50, donut_padAngle: 0, donut_startingAngle: 0 },
                _n = { gauge_background: "", gauge_fullCircle: !1, gauge_label_show: !0, gauge_label_format: void 0, gauge_label_extents: void 0, gauge_label_threshold: 0, gauge_min: 0, gauge_max: 100, gauge_type: "single", gauge_startingAngle: -1 * Math.PI / 2, gauge_arcLength: 100, gauge_title: "", gauge_units: void 0, gauge_width: void 0, gauge_arcs_minWidth: 5, gauge_expand: {}, gauge_expand_rate: .98, gauge_expand_duration: 50 },
                mn = { pie_label_show: !0, pie_label_format: void 0, pie_label_threshold: .05, pie_label_ratio: void 0, pie_expand: {}, pie_expand_rate: .98, pie_expand_duration: 50, pie_innerRadius: 0, pie_outerRadius: void 0, pie_padAngle: 0, pie_padding: 0, pie_startingAngle: 0 },
                yn = { polar_label_show: !0, polar_label_format: void 0, polar_label_threshold: .05, polar_label_ratio: void 0, polar_level_depth: 3, polar_level_max: void 0, polar_level_show: !0, polar_level_text_backgroundColor: "#fff", polar_level_text_format: function(t) { return i(this, undefined), t % 1 == 0 ? t : t.toFixed(2) }.bind(void 0), polar_level_text_show: !0, polar_padAngle: 0, polar_padding: 0, polar_startingAngle: 0 },
                Tn = { radar_axis_max: void 0, radar_axis_line_show: !0, radar_axis_text_show: !0, radar_axis_text_position: {}, radar_level_depth: 3, radar_level_show: !0, radar_level_text_format: function(t) { return i(this, undefined), t % 1 == 0 ? t : t.toFixed(2) }.bind(void 0), radar_level_text_show: !0, radar_size_ratio: .87, radar_direction_clockwise: !1 },
                wn = void 0;

            function An(t, e) { V(qe.prototype, Hi.concat(t)), V(ci.prototype, Vi), Zt.setOptions(Wi.concat(e || [])) }

            function kn(t, e) { An([rn, nn].concat(t || [])), Zt.setOptions([dn, pn].concat(e || [])) }

            function Sn(t, e) { V(qe.prototype, [Zi].concat(t || [])), Zt.setOptions(e) } var Cn = function() { var t = this; return i(this, wn), kn(qi, [hn]), (Cn = function() { return i(this, t), l.AREA }.bind(this))() }.bind(void 0),
                Rn = function() { var t = this; return i(this, wn), kn(qi, [hn]), (Rn = function() { return i(this, t), l.AREA_LINE_RANGE }.bind(this))() }.bind(void 0),
                En = function() { var t = this; return i(this, wn), kn(qi, [hn, xn]), (En = function() { return i(this, t), l.AREA_SPLINE }.bind(this))() }.bind(void 0),
                Ln = function() { var t = this; return i(this, wn), kn(qi, [hn, xn]), (Ln = function() { return i(this, t), l.AREA_SPLINE_RANGE }.bind(this))() }.bind(void 0),
                On = function() { var t = this; return i(this, wn), kn(qi, [hn]), (On = function() { return i(this, t), l.AREA_STEP }.bind(this))() }.bind(void 0),
                Pn = function() { var t = this; return i(this, wn), kn(), (Pn = function() { return i(this, t), l.LINE }.bind(this))() }.bind(void 0),
                In = function() { var t = this; return i(this, wn), kn(void 0, [xn]), (In = function() { return i(this, t), l.SPLINE }.bind(this))() }.bind(void 0),
                Dn = function() { var t = this; return i(this, wn), kn(), (Dn = function() { return i(this, t), l.STEP }.bind(this))() }.bind(void 0),
                zn = function() { var t = this; return i(this, wn), Sn(void 0, [bn]), (zn = function() { return i(this, t), l.DONUT }.bind(this))() }.bind(void 0),
                Mn = function() { var t = this; return i(this, wn), Sn([tn], [_n]), (Mn = function() { return i(this, t), l.GAUGE }.bind(this))() }.bind(void 0),
                Xn = function() { var t = this; return i(this, wn), Sn(void 0, [mn]), (Xn = function() { return i(this, t), l.PIE }.bind(this))() }.bind(void 0),
                $n = function() { var t = this; return i(this, wn), Sn([on], [yn]), ($n = function() { return i(this, t), l.POLAR }.bind(this))() }.bind(void 0),
                Fn = function() { var t = this; return i(this, wn), Sn([rn, cn], [dn, Tn]), (Fn = function() { return i(this, t), l.RADAR }.bind(this))() }.bind(void 0),
                Bn = function() { var t = this; return i(this, wn), An([Ki], un), (Bn = function() { return i(this, t), l.BAR }.bind(this))() }.bind(void 0),
                Nn = function() { var t = this; return i(this, wn), An([rn, en], [gn, dn]), (Nn = function() { return i(this, t), l.BUBBLE }.bind(this))() }.bind(void 0),
                Gn = function() { var t = this; return i(this, wn), An([Qi], [fn]), (Gn = function() { return i(this, t), l.CANDLESTICK }.bind(this))() }.bind(void 0),
                jn = function() { var t = this; return i(this, wn), An([rn], [dn, vn]), (jn = function() { return i(this, t), l.SCATTER }.bind(this))() }.bind(void 0),
                Yn = { selected: function(t) { var e = this,
                            n = this.internal,
                            r = []; return n.$el.main.selectAll("." + (Et.shapes + n.getTargetSelectorSuffix(t))).selectAll("." + Et.shape).filter((function() { return (0, a.select)(this).classed(Rt.SELECTED) })).each(function(t) { return i(this, e), r.push(t) }.bind(this)), r }, select: function(t, e, i) { var n = this.internal,
                            r = n.config,
                            s = n.$el;
                        r.data_selection_enabled && s.main.selectAll("." + Et.shapes).selectAll("." + Et.shape).each((function(s, o) { var l = (0, a.select)(this),
                                c = s.data ? s.data.id : s.id,
                                d = n.getToggle(this, s).bind(n),
                                h = r.data_selection_grouped || !t || t.indexOf(c) >= 0,
                                u = !e || e.indexOf(o) >= 0,
                                g = l.classed(Rt.SELECTED);
                            l.classed(mt.line) || l.classed(ht.area) || (h && u ? r.data_selection_isselectable.bind(n.api)(s) && !g && d(!0, l.classed(Rt.SELECTED, !0), s, o) : w(i) && i && g && d(!1, l.classed(Rt.SELECTED, !1), s, o)) })) }, unselect: function(t, e) { var i = this.internal,
                            n = i.config,
                            r = i.$el;
                        n.data_selection_enabled && r.main.selectAll("." + Et.shapes).selectAll("." + Et.shape).each((function(r, s) { var o = (0, a.select)(this),
                                l = r.data ? r.data.id : r.id,
                                c = i.getToggle(this, r).bind(i),
                                d = n.data_selection_grouped || !t || t.indexOf(l) >= 0,
                                h = !e || e.indexOf(s) >= 0,
                                u = o.classed(Rt.SELECTED);
                            o.classed(mt.line) || o.classed(ht.area) || d && h && n.data_selection_isselectable.bind(i.api)(r) && u && c(!1, o.classed(Rt.SELECTED, !1), r, s) })) } },
                Vn = { subchart: { show: function() { var t = this.internal,
                                e = t.$el.subchart,
                                i = t.config,
                                n = i.subchart_show; if (!n) { var a, r;
                                t.unbindZoomEvent(), i.subchart_show = !n, e.main || t.initSubchart(); var s, o = e.main.selectAll("." + ct.target); if (t.data.targets.length !== o.size()) t.updateSizes(), t.updateTargetsForSubchart(t.data.targets), o = null == (s = e.main) ? void 0 : s.selectAll("." + ct.target);
                                null == (a = o) || a.style("opacity", null), null == (r = e.main) || r.style("display", null), this.resize() } }, hide: function() { var t = this.internal,
                                e = t.$el.subchart.main,
                                i = t.config;
                            i.subchart_show && "none" !== (null == e ? void 0 : e.style("display")) && (i.subchart_show = !1, e.style("display", "none"), this.resize()) }, toggle: function() { var t = this.internal.config;
                            this.subchart[t.subchart_show ? "hide" : "show"]() } } },
                Hn = f(13); var Wn = function(t) { var e = this,
                    n = this.internal,
                    a = n.$el,
                    r = n.axis,
                    s = n.config,
                    o = n.org,
                    l = n.scale,
                    c = s.axis_rotated,
                    d = r.isCategorized(),
                    h = t; if (s.zoom_enabled && h) { if (r.isTimeSeries() && (h = h.map(function(t) { return i(this, e), nt.bind(n)(t) }.bind(this))), function(t, e, n) { var a = this,
                                r = n[0],
                                s = n[1]; return t.every(function(n, o) { var l = this; return i(this, a), (0 === o ? n >= r : n <= s) && !t.every(function(t, n) { return i(this, l), t === e[n] }.bind(this)) }.bind(this)) }(h, n.getZoomDomain(!0), n.getZoomDomain())) { if (d && (h = h.map(function(t, n) { return i(this, e), +t + (0 === n ? 0 : 1) }.bind(this))), n.api.tooltip.hide(), s.subchart_show) { var u = l.zoom || l.x;
                            n.brush.getSelection().call(n.brush.move, h.map(u)) } else { var g, f = d ? l.x.orgScale() : o.xScale || l.x,
                                p = [-f(h[0]), 0],
                                v = (g = Hn.zoomIdentity.scale(f.range()[1] / (f(h[1]) - f(h[0])))).translate.apply(g, c ? p.reverse() : p);
                            a.eventRect.call(n.zoom.transform, v) }
                        n.setZoomResetButton() } } else h = l.zoom ? l.zoom.domain() : l.x.orgDomain(); return h };
            V(Wn, { enable: function(t) { var e = this.internal,
                        i = e.config; /^(drag|wheel)$/.test(t) && (i.zoom_type = t), i.zoom_enabled = !!t, e.zoom ? !1 === t && e.bindZoomEvent(!1) : (e.initZoom(), e.bindZoomEvent()), e.updateAndRedraw() }, max: function(t) { var e = this.internal,
                        i = e.config,
                        n = e.org.xDomain; return (0 === t || t) && (i.zoom_x_max = Q("max", [n[1], t])), i.zoom_x_max }, min: function(t) { var e = this.internal,
                        i = e.config,
                        n = e.org.xDomain; return (0 === t || t) && (i.zoom_x_min = Q("min", [n[0], t])), i.zoom_x_min }, range: function(t) { var e = this.zoom; if (P(t)) { var i = t.min,
                            n = t.max;
                        w(i) && e.min(i), w(n) && e.max(n) } return { min: e.min(), max: e.max() } } }); var Un = { zoom: Wn, unzoom: function() { var t = this.internal,
                            e = t.config,
                            i = t.$el,
                            n = i.eventRect,
                            a = i.zoomResetBtn;
                        t.scale.zoom && (e.subchart_show ? t.brush.getSelection().call(t.brush.move, null) : t.zoom.updateTransformScale(Hn.zoomIdentity), t.updateZoom(!0), null == a || a.style("display", "none"), (0, Hn.zoomTransform)(n.node()) !== Hn.zoomIdentity && t.zoom.transform(n, Hn.zoomIdentity)) } },
                Zn = { drag: function(t) { var e = this,
                            n = this,
                            r = n.config,
                            s = n.state,
                            o = n.$el.main,
                            l = r.data_selection_grouped,
                            c = r.interaction_enabled && r.data_selection_isselectable; if (!n.hasArcType() && r.data_selection_enabled && (!r.zoom_enabled || n.zoom.altDomain) && r.data_selection_multiple) { var d = s.dragStart || [0, 0],
                                h = d[0],
                                u = d[1],
                                g = t[0],
                                f = t[1],
                                p = Math.min(h, g),
                                v = Math.max(h, g),
                                x = l ? s.margin.top : Math.min(u, f),
                                b = l ? s.height : Math.max(u, f);
                            o.select("." + xt.dragarea).attr("x", p).attr("y", x).attr("width", v - p).attr("height", b - x), o.selectAll("." + Et.shapes).selectAll("." + Et.shape).filter(function(t) { return i(this, e), null == c ? void 0 : c.bind(n.api)(t) }.bind(this)).each((function(t, e) { var i, r = (0, a.select)(this),
                                    s = r.classed(Rt.SELECTED),
                                    o = r.classed(xt.INCLUDED),
                                    l = !1; if (r.classed(pt.circle)) { var c = 1 * +r.attr("cx"),
                                        d = 1 * +r.attr("cy");
                                    i = n.togglePoint, l = p < c && c < v && x < d && d < b } else { if (!r.classed(gt.bar)) return; var h = function(t) { var e = t.getBoundingClientRect(),
                                                i = e.width,
                                                n = e.height,
                                                a = $(t); return { x: a[0].x, y: Math.min(a[0].y, a[1].y), width: i, height: n } }(this),
                                        u = h.x,
                                        g = (d = h.y, h.width),
                                        f = h.height;
                                    i = n.togglePath, l = !(v < u || u + g < p || b < d || d + f < x) }
                                l ^ o && (r.classed(xt.INCLUDED, !o), r.classed(Rt.SELECTED, !s), i.call(n, !s, r, t, e)) })) } }, dragstart: function(t) { var e = this,
                            i = e.config,
                            n = e.state,
                            a = e.$el.main;!e.hasArcType() && i.data_selection_enabled && (n.dragStart = t, a.select("." + ct.chart).append("rect").attr("class", xt.dragarea).style("opacity", "0.1"), e.setDragStatus(!0)) }, dragend: function() { var t = this,
                            e = t.config,
                            i = t.$el.main,
                            n = t.$T;!t.hasArcType() && e.data_selection_enabled && (n(i.select("." + xt.dragarea)).style("opacity", "0").remove(), i.selectAll("." + Et.shape).classed(xt.INCLUDED, !1), t.setDragStatus(!1)) } };

            function qn(t, e) { var i = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), i.push.apply(i, n) } return i }

            function Kn(t) { for (var e, i = 1; i < arguments.length; i++) e = null != arguments[i] ? arguments[i] : {}, i % 2 ? qn(Object(e), !0).forEach((function(i) { h(t, i, e[i]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : qn(Object(e)).forEach((function(i) { Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i)) })); return t } var Jn = Kn(Kn({}, Zn), {}, { selectPoint: function(t, e, n) { var a = this,
                            r = this,
                            s = r.config,
                            o = r.$el.main,
                            l = r.$T,
                            c = s.axis_rotated,
                            d = (c ? r.circleY : r.circleX).bind(r),
                            h = (c ? r.circleX : r.circleY).bind(r),
                            u = r.pointSelectR.bind(r);
                        D(s.data_onselected, r.api, e, t.node()), l(o.select("." + Rt.selectedCircles + r.getTargetSelectorSuffix(e.id)).selectAll("." + Rt.selectedCircle + "-" + n).data([e]).enter().append("circle").attr("class", function() { return i(this, a), r.generateClass(Rt.selectedCircle, n) }.bind(this)).attr("cx", d).attr("cy", h).attr("stroke", r.color).attr("r", function(t) { return i(this, a), 1.4 * r.pointSelectR(t) }.bind(this))).attr("r", u) }, unselectPoint: function(t, e, i) { var n = this,
                            a = n.config,
                            r = n.$el.main,
                            s = n.$T;
                        D(a.data_onunselected, n.api, e, t.node()), s(r.select("." + Rt.selectedCircles + n.getTargetSelectorSuffix(e.id)).selectAll("." + Rt.selectedCircle + "-" + i)).attr("r", 0).remove() }, togglePoint: function(t, e, i, n) { this[(t ? "" : "un") + "selectPoint"](e, i, n) }, selectPath: function(t, e) { var i = this.config;
                        D(i.data_onselected, this.api, e, t.node()), i.interaction_brighten && t.style("filter", "brightness(1.25)") }, unselectPath: function(t, e) { var i = this.config;
                        D(i.data_onunselected, this.api, e, t.node()), i.interaction_brighten && t.style("filter", null) }, togglePath: function(t, e, i, n) { this[(t ? "" : "un") + "selectPath"](e, i, n) }, getToggle: function(t, e) { var n = this,
                            a = this; return "path" === t.nodeName ? a.togglePath : a.isStepType(e) ? function() { i(this, n) }.bind(this) : a.togglePoint }, toggleShape: function(t, e, i) { var n = this,
                            r = n.config,
                            s = n.$el.main; if (r.data_selection_enabled && r.data_selection_isselectable.bind(n.api)(e)) { var o, l = (0, a.select)(t),
                                c = l.classed(Rt.SELECTED),
                                d = n.getToggle(t, e).bind(n); if (!r.data_selection_multiple) { var h = "." + Et.shapes;
                                r.data_selection_grouped && (h += n.getTargetSelectorSuffix(e.id)), s.selectAll(h).selectAll("." + Et.shape).each((function(t, e) { var i = (0, a.select)(this);
                                    i.classed(Rt.SELECTED) && (o = i, d(!1, i.classed(Rt.SELECTED, !1), t, e)) })) }
                            o && o.node() === l.node() || (l.classed(Rt.SELECTED, !c), d(!c, l, e, i)) } } }),
                Qn = { initBrush: function() { var t, e, n = this,
                            r = this,
                            s = r.config,
                            o = r.scale,
                            l = r.$el.subchart,
                            c = s.axis_rotated;
                        r.brush = (c ? (0, u.brushY)() : (0, u.brushX)()).handleSize(5); var d = function() { i(this, n); var t = r.$el.svg.select("." + Dt.brush + " .overlay"),
                                e = { width: 0, height: 0 }; return t.size() && (e.width = +t.attr("width"), e.height = +t.attr("height")), e[c ? "width" : "height"] }.bind(this);
                        r.brush.on("start brush end", function(e) { var a = this;
                            i(this, n); var s = e.selection,
                                l = e.target,
                                d = e.type; "start" === d && "touch" === r.state.inputType && r.hideTooltip(), /(start|brush)/.test(d) && r.redrawForBrush(), "end" === d && (t = o.x.orgDomain()), null != l && l.handle && (null === s ? r.brush.handle.attr("display", "none") : r.brush.handle.attr("display", null).attr("transform", function(t, e) { return i(this, a), "translate(" + (c ? [33, s[e] - (0 === e ? 30 : 24)] : [s[e], 3]) + ")" }.bind(this))) }.bind(this)), r.brush.updateResize = function() { var n = this;
                            e && clearTimeout(e), e = setTimeout(function() { i(this, n); var e = this.getSelection();
                                t && (0, u.brushSelection)(e.node()) && this.move(e, t.map(o.subX.orgScale())) }.bind(this), 0) }, r.brush.update = function() { var t, e = this;
                            0 === this.extent()()[1].filter(function(t) { return i(this, e), isNaN(t) }.bind(this)).length && (null == (t = l.main) || t.select("." + Dt.brush).call(this)); return this }, r.brush.scale = function(t) { var e = this,
                                n = s.subchart_size_height || d(),
                                a = r.getExtent();!a && t.range ? a = [
                                [0, 0],
                                [t.range()[1], n]
                            ] : O(a) && (a = a.map(function(t, a) { return i(this, e), [t, a > 0 ? n : a] }.bind(this))), c && a[1].reverse(), this.extent(a), this.update() }, r.brush.getSelection = function() { return i(this, n), l.main ? l.main.select("." + Dt.brush) : (0, a.select)([]) }.bind(this) }, initSubchart: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.state,
                            r = a.clip,
                            s = a.hasAxis,
                            o = e.$el,
                            l = o.defs,
                            c = o.svg,
                            d = o.subchart,
                            h = o.axis; if (s) { var u = n.subchart_show ? null : "hidden",
                                g = r.id + "-subchart",
                                f = e.getClipPath(g);
                            r.idSubchart = g, e.appendClip(l, g), e.initBrush(), d.main = c.append("g").classed(Dt.subchart, !0).attr("transform", e.getTranslate("context")); var p = d.main;
                            p.style("visibility", u), p.append("g").attr("clip-path", f).attr("class", Dt.chart), ["bar", "line", "bubble", "candlestick", "scatter"].forEach(function(n) { i(this, t); var a = H(/^(bubble|scatter)$/.test(n) ? "circle" : n); if (e.hasType(n) || e.hasTypeOf(a)) { var r = p.select("." + Dt.chart),
                                        s = Dt["chart" + a + "s"];
                                    r.select("." + s).empty() && r.append("g").attr("class", s) } }.bind(this)); var v = p.append("g").attr("clip-path", f).attr("class", Dt.brush).call(e.brush);
                            n.subchart_showHandle && e.addBrushHandle(v), h.subX = p.append("g").attr("class", Dt.axisX).attr("transform", e.getTranslate("subX")).attr("clip-path", n.axis_rotated ? "" : r.pathXAxis).style("visibility", n.subchart_axis_x_show ? u : "hidden") } }, addBrushHandle: function(t) { var e = this,
                            n = this.config,
                            a = n.axis_rotated,
                            r = n.subchart_init_range,
                            s = a ? ["M 5.2491724,29.749209 a 6,6 0 0 0 -5.50000003,-6.5 H -5.7508276 a 6,6 0 0 0 -6.0000004,6.5 z m -5.00000003,-2 H -6.7508276 m 6.99999997,-2 H -6.7508276Z", "M 5.2491724,23.249172 a 6,-6 0 0 1 -5.50000003,6.5 H -5.7508276 a 6,-6 0 0 1 -6.0000004,-6.5 z m -5.00000003,2 H -6.7508276 m 6.99999997,2 H -6.7508276Z"] : ["M 0 18 A 6 6 0 0 0 -6.5 23.5 V 29 A 6 6 0 0 0 0 35 Z M -2 23 V 30 M -4 23 V 30Z", "M 0 18 A 6 6 0 0 1 6.5 23.5 V 29 A 6 6 0 0 1 0 35 Z M 2 23 V 30 M 4 23 V 30Z"];
                        this.brush.handle = t.selectAll(".handle--custom").data(a ? [{ type: "n" }, { type: "s" }] : [{ type: "w" }, { type: "e" }]).enter().append("path").attr("class", "handle--custom").attr("cursor", (a ? "ns" : "ew") + "-resize").attr("d", function(t) { return i(this, e), s[+/[se]/.test(t.type)] }.bind(this)).attr("display", r ? null : "none") }, updateTargetsForSubchart: function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = n.state,
                            s = n.$el.subchart.main;
                        a.subchart_show && (["bar", "line", "bubble", "candlestick", "scatter"].filter(function(t) { return i(this, e), n.hasType(t) || n.hasTypeOf(H(t)) }.bind(this)).forEach(function(a) { i(this, e); var r = /^(bubble|scatter)$/.test(a),
                                o = H(r ? "circle" : a),
                                l = n.getChartClass(o, !0),
                                c = n.getClass(r ? "circles" : a + "s", !0),
                                d = s.select("." + Dt["chart" + o + "s"]); if (r) { var h = d.selectAll("." + Dt.circles).data(t.filter(n["is" + H(a) + "Type"].bind(n))).attr("class", c);
                                h.exit().remove(), h.enter().append("g").attr("class", c) } else { var u = d.selectAll("." + Dt["chart" + o]).attr("class", l).data(t.filter(n["is" + o + "Type"].bind(n))),
                                    g = u.enter().append("g").style("opacity", "0").attr("class", l).append("g").attr("class", c);
                                u.exit().remove(), "line" === a && n.hasTypeOf("Area") && g.append("g").attr("class", n.getClass("areas", !0)) } }.bind(this)), s.selectAll("." + Dt.brush + " rect").attr(a.axis_rotated ? "width" : "height", a.axis_rotated ? r.width2 : r.height2)) }, redrawSubchart: function(t, e, n) { var a, r = this,
                            s = this,
                            o = s.config,
                            l = s.$el.subchart.main,
                            c = s.state,
                            d = !!e; if ((l.style("visibility", o.subchart_show ? null : "hidden"), o.subchart_show) && ("zoom" === (null == (a = c.event) ? void 0 : a.type) && s.brush.update(), t)) { var h = o.subchart_init_range; if (Y(s) || s.brush.update(), Object.keys(n.type).forEach(function(t) { i(this, r); var e = H(t),
                                        a = s["generateDraw" + e](n.indices[t], !0);
                                    s["update" + e](d, !0), s["redraw" + e](a, d, !0) }.bind(this)), s.hasType("bubble") || s.hasType("scatter")) { var u = n.pos.cx,
                                    g = s.updateCircleY(!0);
                                s.updateCircle(!0), s.redrawCircle(u, g, d, void 0, !0) }!c.rendered && h && s.brush.move(s.brush.getSelection(), h.map(s.scale.x)) } }, redrawForBrush: function() { var t = this,
                            e = t.config,
                            i = e.subchart_onbrush,
                            n = e.zoom_rescale,
                            a = t.scale;
                        t.redraw({ withTransition: !1, withY: n, withSubchart: !1, withUpdateXDomain: !0, withDimension: !1 }), i.bind(t.api)(a.x.orgDomain()) }, transformContext: function(t, e) { var i = this,
                            n = i.$el.subchart,
                            a = i.$T,
                            r = null != e && e.axisSubX ? e.axisSubX : a(n.main.select("." + Dt.axisX), t);
                        n.main.attr("transform", i.getTranslate("context")), r.attr("transform", i.getTranslate("subX")) }, getExtent: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.scale,
                            r = n.axis_x_extent; if (r)
                            if (_(r)) r = r.bind(e.api)(e.getXDomain(e.data.targets), a.subX);
                            else if (e.axis.isTimeSeries() && r.every(isNaN)) { var s = nt.bind(e);
                            r = r.map(function(e) { return i(this, t), a.subX(s(e)) }.bind(this)) } return r } },
                ta = { initZoom: function() { var t = this;
                        t.scale.zoom = null, t.generateZoom(), t.initZoomBehaviour() }, bindZoomEvent: function(t) { void 0 === t && (t = !0); var e = this,
                            i = e.config;
                        i.zoom_enabled && t ? i.subchart_show || e.bindZoomOnEventRect() : !1 === t && (e.api.unzoom(), e.unbindZoomEvent()) }, generateZoom: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.org,
                            r = e.scale,
                            s = (0, Hn.zoom)().duration(0).on("start", e.onZoomStart.bind(e)).on("zoom", e.onZoom.bind(e)).on("end", e.onZoomEnd.bind(e));
                        s.orgScaleExtent = function() { i(this, t); var a = n.zoom_extent || [1, 10]; return [a[0], Math.max(e.getMaxDataCount() / a[1], a[1])] }.bind(this), s.updateScaleExtent = function() { var t = C(e.scale.x.orgDomain()) / C(e.getZoomDomain()),
                                i = this.orgScaleExtent(); return this.scaleExtent([i[0] * t, i[1] * t]), this }, s.updateTransformScale = function(s, o) { var l;
                            i(this, t); var c = n.axis_rotated;
                            null == (l = a.xScale) || l.range(r.x.range()); var d = s[c ? "rescaleY" : "rescaleX"](a.xScale || r.x),
                                h = e.trimXDomain(d.domain()),
                                u = n.zoom_rescale; if (d.domain(h, a.xDomain), o) { var g = d(r.x.domain()[0]),
                                    f = c ? s.x : g,
                                    p = c ? g : s.y;
                                e.$el.eventRect.property("__zoom", Hn.zoomIdentity.translate(f, p).scale(s.k)) }
                            e.state.xTickOffset || (e.state.xTickOffset = e.axis.x.tickOffset()), r.zoom = e.getCustomizedScale(d), e.axis.x.scale(r.zoom), u && (a.xScale || (a.xScale = r.x.copy()), r.x.domain(h)) }.bind(this), s.getDomain = function() { i(this, t); var n = r[r.zoom ? "zoom" : "subX"].domain(); return e.axis.isCategorized() && (n[1] -= 2), n }.bind(this), e.zoom = s }, onZoomStart: function(t) { var e = this,
                            i = t.sourceEvent;
                        i && (e.zoom.startEvent = i, e.state.zooming = !0, D(e.config.zoom_onzoomstart, e.api, t)) }, onZoom: function(t) { var e = this,
                            n = this,
                            a = n.config,
                            r = n.scale,
                            s = n.state,
                            o = n.org,
                            l = t.sourceEvent,
                            c = (null == t ? void 0 : t.transform) === Hn.zoomIdentity; if (!(!a.zoom_enabled || 0 === n.filterTargetsToShow(n.data.targets).length || !r.zoom && (null == l ? void 0 : l.type.indexOf("touch")) > -1 && 1 === (null == l ? void 0 : l.touches.length))) { t.sourceEvent && (s.zooming = !0); var d = "mousemove" === (null == l ? void 0 : l.type),
                                h = (null == l ? void 0 : l.wheelDelta) < 0,
                                u = t.transform;!d && h && r.x.domain().every(function(t, n) { return i(this, e), t !== o.xDomain[n] }.bind(this)) && r.x.domain(o.xDomain), n.zoom.updateTransformScale(u, "wheel" === a.zoom_type && l); var g = a.transition_duration > 0 && !a.subchart_show && (s.dragging || c || !t.sourceEvent);
                            n.redraw({ withTransition: g, withY: a.zoom_rescale, withSubchart: !1, withEventRect: !1, withDimension: !1 }), n.state.cancelClick = d, c || D(a.zoom_onzoom, n.api, n.zoom.getDomain()) } }, onZoomEnd: function(t) { var e, i, n, a = this,
                            r = a.config,
                            s = a.state,
                            o = a.zoom.startEvent,
                            l = null == t ? void 0 : t.sourceEvent,
                            c = (null == t ? void 0 : t.transform) === Hn.zoomIdentity;
                        (null == (e = o) ? void 0 : e.type.indexOf("touch")) > -1 && (o = o.changedTouches[0], l = null == (i = l) || null == (n = i.changedTouches) ? void 0 : n[0]); "drag" === r.zoom_type && l && o.clientX === l.clientX && o.clientY === l.clientY || (a.redrawEventRect(), a.updateZoom(), s.zooming = !1, !c && (l || s.dragging) && D(r.zoom_onzoomend, a.api, a.zoom.getDomain())) }, updateZoom: function(t) { var e = this,
                            i = e.scale,
                            n = i.subX,
                            a = i.x,
                            r = i.zoom; if (r) { var s = r.domain(),
                                o = n.domain(),
                                l = (s[0] <= o[0] || s[0] - .015 <= o[0]) && (o[1] <= s[1] || o[1] <= s[1] - .015);
                            (t || l) && (e.axis.x.scale(n), a.domain(n.orgDomain()), e.scale.zoom = null) } }, bindZoomOnEventRect: function() { var t = this,
                            e = this,
                            n = e.config,
                            a = e.$el.eventRect,
                            r = "drag" === n.zoom_type ? e.zoomBehaviour : e.zoom;
                        e.$el.svg.on("wheel", function() { i(this, t) }.bind(this)), a.call(r).on("dblclick.zoom", null) }, initZoomBehaviour: function() { var t, e = this,
                            n = this,
                            a = n.config,
                            r = n.state,
                            s = a.axis_rotated,
                            o = 0,
                            l = 0,
                            c = { axis: s ? "y" : "x", attr: s ? "height" : "width", index: s ? 1 : 0 };
                        n.zoomBehaviour = (0, we.drag)().clickDistance(4).on("start", (function(e) { r.event = e, n.setDragStatus(!0), n.unselectRect(), t || (t = n.$el.main.append("rect").attr("clip-path", r.clip.path).attr("class", It.zoomBrush).attr("width", s ? r.width : 0).attr("height", s ? 0 : r.height)), o = F(e, this)[c.index], l = o, t.attr(c.axis, o).attr(c.attr, 0), n.onZoomStart(e) })).on("drag", (function(e) { l = F(e, this)[c.index], t.attr(c.axis, Math.min(o, l)).attr(c.attr, Math.abs(l - o)) })).on("end", function(a) { var s = this;
                            i(this, e); var d = n.scale.zoom || n.scale.x; if (r.event = a, t.attr(c.axis, 0).attr(c.attr, 0), o > l) { var h = [l, o];
                                o = h[0], l = h[1] }
                            o < 0 && (l += Math.abs(o), o = 0), o !== l && n.api.zoom([o, l].map(function(t) { return i(this, s), d.invert(t) }.bind(this))), n.setDragStatus(!1) }.bind(this)) }, setZoomResetButton: function() { var t = this,
                            e = t.config,
                            i = t.$el,
                            n = e.zoom_resetButton;
                        n && "drag" === e.zoom_type && (i.zoomResetBtn ? i.zoomResetBtn.style("display", null) : i.zoomResetBtn = t.$el.chart.append("div").classed(ct.button, !0).append("span").on("click", (function() { _(n.onclick) && n.onclick.bind(t.api)(this), t.api.unzoom() })).classed(It.buttonZoomReset, !0).text(n.text || "Reset Zoom")) } },
                ea = void 0,
                ia = { data_selection_enabled: !1, data_selection_grouped: !1, data_selection_isselectable: function() { return i(this, ea), !0 }.bind(void 0), data_selection_multiple: !0, data_selection_draggable: !1, data_onselected: function() { i(this, ea) }.bind(void 0), data_onunselected: function() { i(this, ea) }.bind(void 0) },
                na = { subchart_show: !1, subchart_showHandle: !1, subchart_size_height: 60, subchart_axis_x_show: !0, subchart_axis_x_tick_show: !0, subchart_axis_x_tick_format: void 0, subchart_axis_x_tick_text_show: !0, subchart_init_range: void 0, subchart_onbrush: function() { i(this, undefined) }.bind(void 0) },
                aa = { zoom_enabled: !1, zoom_type: "wheel", zoom_extent: void 0, zoom_privileged: !1, zoom_rescale: !1, zoom_onzoom: void 0, zoom_onzoomstart: void 0, zoom_onzoomend: void 0, zoom_resetButton: !0, zoom_x_min: void 0, zoom_x_max: void 0 },
                ra = void 0,
                sa = function() { var t = this; return i(this, ra), V(qe.prototype, Jn), V(ci.prototype, Yn), Zt.setOptions([ia]), (sa = function() { return i(this, t), !0 }.bind(this))() }.bind(void 0),
                oa = function() { var t = this; return i(this, ra), V(qe.prototype, Qn), V(ci.prototype, Vn), Zt.setOptions([na]), (oa = function() { return i(this, t), !0 }.bind(this))() }.bind(void 0),
                la = function() { var t = this; return i(this, ra), V(qe.prototype, ta), V(ci.prototype, Un), Zt.setOptions([aa]), (la = function() { return i(this, t), !0 }.bind(this))() }.bind(void 0),
                ca = {},
                da = { version: "3.6.3", generate: function(t) { var e = K({}, ca, t),
                            i = new ci(e); return i.internal.charts = this.instance, this.instance.push(i), i }, defaults: function(t) { return P(t) && (ca = t), ca }, instance: [], plugin: {} },
                ha = void 0;
            Object.keys(t).forEach(function(e) { return i(this, ha), t[e]() }.bind(void 0)), Object.keys(e).forEach(function(t) { return i(this, ha), e[t]() }.bind(void 0)) }(), p }() }));