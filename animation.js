! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return V.call(t, e) >= 0 !== n
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = pt[e] = {};
        return Z.each(e.match(ht) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + s.uid++
    }

    function u(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(xt, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? Z.parseJSON(n) : n
                } catch (r) {}
                yt.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function p(e) {
        var t = Rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, i = e.length; i > n; n++) vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, i, r, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (vt.hasData(e) && (o = vt.access(e), a = vt.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (r in l)
                    for (n = 0, i = l[r].length; i > n; n++) Z.event.add(t, r, l[r][n])
            }
            yt.hasData(e) && (s = yt.access(e), u = Z.extend({}, s), yt.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && kt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function b(t, n) {
        var i, r = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : Z.css(r[0], "display");
        return r.detach(), o
    }

    function x(e) {
        var t = J,
            n = Ot[e];
        return n || (n = b(e, t), "none" !== n && n || (Ht = (Ht || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ht[0].contentDocument, t.write(), t.close(), n = b(e, t), Ht.detach()), Ot[e] = n), n
    }

    function w(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || zt(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), $t.test(a) && Bt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function C(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function T(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Kt.length; r--;)
            if (t = Kt[r] + n, t in e) return t;
        return i
    }

    function k(e, t, n) {
        var i = Wt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function S(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(e, n + Ct[o], !0, r)), i ? ("content" === n && (a -= Z.css(e, "padding" + Ct[o], !0, r)), "margin" !== n && (a -= Z.css(e, "border" + Ct[o] + "Width", !0, r))) : (a += Z.css(e, "padding" + Ct[o], !0, r), "padding" !== n && (a += Z.css(e, "border" + Ct[o] + "Width", !0, r)));
        return a
    }

    function N(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = zt(e),
            a = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = w(e, t, o), (0 > r || null == r) && (r = e.style[t]), $t.test(r)) return r;
            i = a && (Y.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + S(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function A(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = vt.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Tt(i) && (o[a] = vt.access(i, "olddisplay", x(i.nodeName)))) : (r = Tt(i), "none" === n && r || vt.set(i, "olddisplay", r ? n : Z.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function E(e, t, n, i, r) {
        return new E.prototype.init(e, t, n, i, r)
    }

    function D() {
        return setTimeout(function() {
            Yt = void 0
        }), Yt = Z.now()
    }

    function j(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ct[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function _(e, t, n) {
        for (var i, r = (nn[t] || []).concat(nn["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function L(e, t, n) {
        var i, r, o, a, s, u, l, c, f = this,
            d = {}, h = e.style,
            p = e.nodeType && Tt(e),
            g = vt.get(e, "fxshow");
        n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = Z.css(e, "display"), c = "none" === l ? vt.get(e, "olddisplay") || x(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Qt.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    p = !0
                }
                d[i] = g && g[i] || Z.style(e, i)
            } else l = void 0;
        if (Z.isEmptyObject(d)) "inline" === ("none" === l ? x(e.nodeName) : l) && (h.display = l);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = vt.access(e, "fxshow", {}), o && (g.hidden = !p), p ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }), f.done(function() {
                var t;
                vt.remove(e, "fxshow");
                for (t in d) Z.style(e, t, d[t])
            });
            for (i in d) a = _(p ? g[i] : 0, i, f), i in g || (g[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function I(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = Z.camelCase(n), r = t[i], o = e[n], Z.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = Z.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function M(e, t, n) {
        var i, r, o = 0,
            a = tn.length,
            s = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (r) return !1;
                for (var t = Yt || D(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Yt || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (I(c, l.opts.specialEasing); a > o; o++)
            if (i = tn[o].call(l, e, c, l.opts)) return i;
        return Z.map(c, _, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(ht) || [];
            if (Z.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function R(e, t, n, i) {
        function r(s) {
            var u;
            return o[s] = !0, Z.each(e[s] || [], function(e, s) {
                var l = s(t, n, i);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
            }), u
        }
        var o = {}, a = e === xn;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function P(e, t) {
        var n, i, r = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Z.extend(!0, e, i), e
    }

    function F(e, t, n) {
        for (var i, r, o, a, s = e.contents, u = e.dataTypes;
             "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    u.unshift(r);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (r in n) {
                if (!u[0] || e.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function H(e, t, n, i) {
        var r, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o], !a)
                        for (r in l)
                            if (s = r.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"]) t = a(t);
                        else try {
                            t = a(t)
                        } catch (f) {
                            return {
                                state: "parsererror",
                                error: a ? f : "No conversion from " + u + " to " + o
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }

    function O(e, t, n, i) {
        var r;
        if (Z.isArray(t)) Z.each(t, function(t, r) {
            n || Sn.test(e) ? i(e, r) : O(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== Z.type(t)) i(e, t);
        else
            for (r in t) O(e + "[" + r + "]", t[r], n, i)
    }

    function B(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var $ = [],
        z = $.slice,
        U = $.concat,
        W = $.push,
        V = $.indexOf,
        G = {}, X = G.toString,
        K = G.hasOwnProperty,
        Y = {}, J = e.document,
        Q = "2.1.4",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        }, et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        tt = /^-ms-/,
        nt = /-([\da-z])/gi,
        it = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: Q,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return z.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(z.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: W,
        sort: $.sort,
        splice: $.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], i = e[t], a !== i && (l && i && (Z.isPlainObject(i) || (r = Z.isArray(i))) ? (r ? (r = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(l, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, Z.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !K.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[X.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(tt, "ms-").replace(nt, it)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(et, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : W.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : V.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) r = t(e[o], o, i), null != r && u.push(r);
            else
                for (o in e) r = t(e[o], o, i), null != r && u.push(r);
            return U.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = z.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(z.call(arguments)))
            }, r.guid = e.guid = e.guid || Z.guid++, r) : void 0
        },
        now: Date.now,
        support: Y
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        G["[object " + t + "]"] = t.toLowerCase()
    });
    var rt = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, u, l, f, h, p, g;
            if ((t ? t.ownerDocument || t : O) !== L && _(t), t = t || L, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && M) {
                if (11 !== s && (r = yt.exec(e)))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && F(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = r[3]) && w.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!q || !q.test(e))) {
                    if (h = f = H, p = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = S(e), (f = t.getAttribute("id")) ? h = f.replace(xt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + d(l[u]);
                        p = bt.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, p.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(ut, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[H] = !0, e
        }

        function r(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function d(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l = [B, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (u = t[H] || (t[H] = {}), (s = u[i]) && s[0] === B && s[1] === o) return l[2] = s[2];
                            if (u[i] = l, l[2] = e(t, n, a)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function m(e, t, n, i, r) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), l && t.push(s));
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, a)), i(function(i, a, s, u) {
                var l, c, f, d = [],
                    h = [],
                    p = a.length,
                    v = i || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : m(v, d, e, s, u),
                    b = n ? o || (i ? e : p || r) ? [] : a : y;
                if (n && n(y, b, s, u), r)
                    for (l = m(b, h), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[h[c]] = !(y[h[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (l = o ? et(i, f) : d[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else b = m(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, u) : Q.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                return e === t
            }, a, !0), l = h(function(e) {
                return et(t, e) > -1
            }, a, !0), c = [
                function(e, n, i) {
                    var r = !o && (i || n !== E) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));
                    return t = null, r
                }
            ]; r > s; s++)
                if (n = C.relative[e[s].type]) c = [h(p(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                        for (i = ++s; r > i && !C.relative[e[i].type]; i++);
                        return v(s > 1 && p(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ut, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && d(e))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function b(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, u, l) {
                    var c, f, d, h = 0,
                        p = "0",
                        g = i && [],
                        v = [],
                        y = E,
                        b = i || o && C.find.TAG("*", l),
                        x = B += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (E = a !== L && a); p !== w && null != (c = b[p]); p++) {
                        if (o && c) {
                            for (f = 0; d = e[f++];)
                                if (d(c, a, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (B = x)
                        }
                        r && ((c = !d && c) && h--, i && g.push(c))
                    }
                    if (h += p, r && p !== h) {
                        for (f = 0; d = n[f++];) d(g, v, a, s);
                        if (i) {
                            if (h > 0)
                                for (; p--;) g[p] || v[p] || (v[p] = Y.call(u));
                            v = m(v)
                        }
                        Q.apply(u, v), l && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (B = x, E = y), g
                };
            return r ? i(a) : a
        }
        var x, w, C, T, k, S, N, A, E, D, j, _, L, I, M, q, R, P, F, H = "sizzle" + 1 * new Date,
            O = e.document,
            B = 0,
            $ = 0,
            z = n(),
            U = n(),
            W = n(),
            V = function(e, t) {
                return e === t && (j = !0), 0
            }, G = 1 << 31,
            X = {}.hasOwnProperty,
            K = [],
            Y = K.pop,
            J = K.push,
            Q = K.push,
            Z = K.slice,
            et = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = it.replace("w", "w#"),
            ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
            at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(at),
            ht = new RegExp("^" + rt + "$"),
            pt = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            }, gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            xt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            Ct = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, Tt = function() {
                _()
            };
        try {
            Q.apply(K = Z.call(O.childNodes), O.childNodes), K[O.childNodes.length].nodeType
        } catch (kt) {
            Q = {
                apply: K.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, _ = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : O;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, I = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), M = !k(i), w.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(i.getElementsByClassName), w.getById = r(function(e) {
                return I.appendChild(e).id = H, !i.getElementsByName || !i.getElementsByName(H).length
            }), w.getById ? (C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(wt, Ct);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(wt, Ct);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                return M ? t.getElementsByClassName(e) : void 0
            }, R = [], q = [], (w.qsa = vt.test(i.querySelectorAll)) && (r(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + H + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || q.push(".#.+[+~]")
            }), r(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (w.matchesSelector = vt.test(P = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), R.push("!=", at)
            }), q = q.length && new RegExp(q.join("|")), R = R.length && new RegExp(R.join("|")), t = vt.test(I.compareDocumentPosition), F = t || vt.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === O && F(O, e) ? -1 : t === i || t.ownerDocument === O && F(O, t) ? 1 : D ? et(D, e) - et(D, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : D ? et(D, e) - et(D, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[r] === l[r];) r++;
                return r ? a(u[r], l[r]) : u[r] === O ? -1 : l[r] === O ? 1 : 0
            }, i) : L
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && _(e), n = n.replace(ft, "='$1']"), !(!w.matchesSelector || !M || R && R.test(n) || q && q.test(n))) try {
                var i = P.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, L, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && _(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && _(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && X.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : w.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(V), j) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return D = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Ct), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Ct).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                for (c = m[H] || (m[H] = {}), l = c[e] || [], h = l[0] === B && l[1], d = l[0] === B && l[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (d = h = 0) || p.pop();)
                                    if (1 === f.nodeType && ++d && f === t) {
                                        c[e] = [B, h, d];
                                        break
                                    }
                            } else if (y && (l = (t[H] || (t[H] = {}))[e]) && l[0] === B) d = l[1];
                            else
                                for (;
                                    (f = ++h && f && f[g] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[H] || (f[H] = {}))[e] = [B, d]), f !== t)););
                            return d -= r, d === i || d % i === 0 && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = et(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = N(e.replace(ut, "$1"));
                    return r[H] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(wt, Ct),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Ct).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return mt.test(e.nodeName)
                },
                input: function(e) {
                    return gt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[x] = s(x);
        for (x in {
            submit: !0,
            reset: !0
        }) C.pseudos[x] = u(x);
        return f.prototype = C.filters = C.pseudos, C.setFilters = new f, S = t.tokenize = function(e, n) {
            var i, r, o, a, s, u, l, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) {
                (!i || (r = lt.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), i = !1, (r = ct.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ut, " ")
                }), s = s.slice(i.length));
                for (a in C.filter)!(r = pt[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : U(e, u).slice(0)
        }, N = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = W[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                o = W(e, b(r, i)), o.selector = e
            }
            return o
        }, A = t.select = function(e, t, n, i) {
            var r, o, a, s, u, l = "function" == typeof e && e,
                f = !i && S(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && M && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(wt, Ct), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = pt.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                    if ((u = C.find[s]) && (i = u(a.matches[0].replace(wt, Ct), bt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && d(o), !e) return Q.apply(n, i), n;
                        break
                    }
            }
            return (l || N(e, f))(i, t, !M, n, bt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = H.split("").sort(V).join("") === H, w.detectDuplicates = !! j, _(), w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    Z.find = rt, Z.expr = rt.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = rt.uniqueSort, Z.text = rt.getText, Z.isXMLDoc = rt.isXML, Z.contains = rt.contains;
    var ot = Z.expr.match.needsContext,
        at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        st = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Z.contains(r[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = Z.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), at.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ct.prototype = Z.fn, ut = Z(J);
    var ft = /^(?:parents|prev(?:Until|All))/,
        dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                 (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && Z(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? V.call(Z(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, i) {
            var r = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Z.filter(i, r)), this.length > 1 && (dt[e] || Z.unique(r), ft.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var ht = /\S+/g,
        pt = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? pt[e] || o(e) : Z.extend({}, e);
        var t, n, i, r, a, s, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, s = r || 0, r = 0, a = u.length, i = !0; u && a > s; s++)
                    if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            }, f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(t) {
                            Z.each(t, function(t, n) {
                                var i = Z.type(n);
                                "function" === i ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), i ? a = u.length : t && (r = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(e, t) {
                        for (var n;
                             (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), i && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], a = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, o) {
                                var a = Z.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, Z.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = z.call(arguments),
                a = o.length,
                s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : Z.Deferred(),
                l = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? z.call(arguments) : r, i === t ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && Z.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, t)) : --s;
            return s || u.resolveWith(i, o), u.promise()
        }
    });
    var gt;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (gt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return gt || (gt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), gt.promise(t)
    }, Z.ready.promise();
    var mt = Z.access = function(e, t, n, i, r, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ("object" === Z.type(n)) {
            r = !0;
            for (s in n) Z.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0, Z.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                return l.call(Z(e), n)
            })), t))
            for (; u > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var i, r = this.key(e),
                o = this.cache[r];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[r], t);
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, o = this.key(e),
                a = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (r = Z.camelCase(t), t in a ? i = [t, r] : (i = r, i = i in a ? [i] : i.match(ht) || [])), n = i.length;
                for (; n--;) delete a[i[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var vt = new s,
        yt = new s,
        bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xt = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return yt.hasData(e) || vt.hasData(e)
        },
        data: function(e, t, n) {
            return yt.access(e, t, n)
        },
        removeData: function(e, t) {
            yt.remove(e, t)
        },
        _data: function(e, t, n) {
            return vt.access(e, t, n)
        },
        _removeData: function(e, t) {
            vt.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), u(o, i, r[i])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                yt.set(this, e)
            }) : mt(this, function(t) {
                var n, i = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = yt.get(o, e), void 0 !== n) return n;
                    if (n = yt.get(o, i), void 0 !== n) return n;
                    if (n = u(o, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = yt.get(this, i);
                    yt.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                yt.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = vt.get(e, t), n && (!i || Z.isArray(n) ? i = vt.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = Z._queueHooks(e, t),
                a = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return vt.get(e, n) || vt.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    vt.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = Z.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = vt.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ct = ["Top", "Right", "Bottom", "Left"],
        Tt = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        }, kt = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue
    }();
    var St = "undefined";
    Y.focusinBubbles = "onfocusin" in e;
    var Nt = /^key/,
        At = /^(?:mouse|pointer|contextmenu)|click/,
        Et = /^(?:focusinfocus|focusoutblur)$/,
        Dt = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, u, l, c, f, d, h, p, g, m = vt.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                    return typeof Z !== St && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(ht) || [""], l = t.length; l--;) s = Dt.exec(t[l]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h && (f = Z.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = Z.event.special[h] || {}, c = Z.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && Z.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = u[h]) || (d = u[h] = [], d.delegateCount = 0, f.setup && f.setup.call(e, i, p, a) !== !1 || e.addEventListener && e.addEventListener(h, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), Z.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, u, l, c, f, d, h, p, g, m = vt.hasData(e) && vt.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(ht) || [""], l = t.length; l--;)
                    if (s = Dt.exec(t[l]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = Z.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, d = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && f.teardown.call(e, p, m.handle) !== !1 || Z.removeEvent(e, h, m.handle), delete u[h])
                    } else
                        for (h in u) Z.event.remove(e, h + t[l], n, i, !0);
                Z.isEmptyObject(u) && (delete m.handle, vt.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, u, l, c, f, d = [i || J],
                h = K.call(t, "type") ? t.type : t,
                p = K.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[Z.expando] ? t : new Z.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[h] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                if (!r && !f.noBubble && !Z.isWindow(i)) {
                    for (u = f.delegateType || h, Et.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (i.ownerDocument || J) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                     (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || h, c = (vt.get(a, "events") || {})[t.type] && vt.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Z.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = h, r || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Z.acceptData(i) || l && Z.isFunction(i[h]) && !Z.isWindow(i) && (s = i[l], s && (i[l] = null), Z.event.triggered = h, i[h](), Z.event.triggered = void 0, s && (i[l] = s)), t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, i, r, o, a = [],
                s = z.call(arguments),
                u = (vt.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = Z.event.handlers.call(this, e, u), t = 0;
                     (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                         (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? Z(r, this).index(u) >= 0 : Z.find(r, this, null, [u]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = At.test(r) ? this.mouseHooks : Nt.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? Z.event.trigger(r, null, t) : Z.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !Z.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Y.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = vt.access(i, t);
                r || i.addEventListener(e, n, !0), vt.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = vt.access(i, t) - 1;
                r ? vt.access(i, t, r) : (i.removeEventListener(e, n, !0), vt.remove(i, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = c;
            else if (!i) return this;
            return 1 === r && (o = i, i = function(e) {
                return Z().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        _t = /<([\w:]+)/,
        Lt = /<|&#?\w+;/,
        It = /<(?:script|style|link)/i,
        Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qt = /^$|\/(?:java|ecma)script/i,
        Rt = /^true\/(.*)/,
        Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ft = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ft.optgroup = Ft.option, Ft.tbody = Ft.tfoot = Ft.colgroup = Ft.caption = Ft.thead, Ft.th = Ft.td, Z.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0),
                u = Z.contains(e.ownerDocument, e);
            if (!(Y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (a = v(s), o = v(e), i = 0, r = o.length; r > i; i++) y(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || v(e), a = a || v(s), i = 0, r = o.length; r > i; i++) m(o[i], a[i]);
                else m(e, s);
            return a = v(s, "script"), a.length > 0 && g(a, !u && v(e, "script")), s
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, u, l, c = t.createDocumentFragment(), f = [], d = 0, h = e.length; h > d; d++)
                if (r = e[d], r || 0 === r)
                    if ("object" === Z.type(r)) Z.merge(f, r.nodeType ? [r] : r);
                    else if (Lt.test(r)) {
                        for (o = o || c.appendChild(t.createElement("div")), a = (_t.exec(r) || ["", ""])[1].toLowerCase(), s = Ft[a] || Ft._default, o.innerHTML = s[1] + r.replace(jt, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
                        Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
                    } else f.push(t.createTextNode(r));
            for (c.textContent = "", d = 0; r = f[d++];)
                if ((!i || -1 === Z.inArray(r, i)) && (u = Z.contains(r.ownerDocument, r), o = v(c.appendChild(r), "script"), u && g(o), n))
                    for (l = 0; r = o[l++];) qt.test(r.type || "") && n.push(r);
            return c
        },
        cleanData: function(e) {
            for (var t, n, i, r, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Z.acceptData(n) && (r = n[vt.expando], r && (t = vt.cache[r]))) {
                    if (t.events)
                        for (i in t.events) o[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                    vt.cache[r] && delete vt.cache[r]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return mt(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? Z.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return mt(this, function(e) {
                var t = this[0] || {}, n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !It.test(e) && !Ft[(_t.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(jt, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = U.apply([], e);
            var n, i, r, o, a, s, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                d = e[0],
                g = Z.isFunction(d);
            if (g || l > 1 && "string" == typeof d && !Y.checkClone && Mt.test(d)) return this.each(function(n) {
                var i = c.eq(n);
                g && (e[0] = d.call(this, n, i.html())), i.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = Z.map(v(n, "script"), h), o = r.length; l > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), o && Z.merge(r, v(a, "script"))), t.call(this[u], a, u);
                if (o)
                    for (s = r[r.length - 1].ownerDocument, Z.map(r, p), u = 0; o > u; u++) a = r[u], qt.test(a.type || "") && !vt.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Pt, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, i = [], r = Z(e), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(r[a])[t](n), W.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ht, Ot = {}, Bt = /^margin/,
        $t = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
        zt = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
        }
        var n, i, r = J.documentElement,
            o = J.createElement("div"),
            a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(Y, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), a.removeChild(n), t
            }
        }))
    }(), Z.swap = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = a[o];
        return r
    };
    var Ut = /^(none|table(?!-c[ea]).+)/,
        Wt = new RegExp("^(" + wt + ")(.*)$", "i"),
        Vt = new RegExp("^([+-])=(" + wt + ")", "i"),
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Xt = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Kt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = Z.camelCase(t),
                    u = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = T(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t] : (o = typeof n, "string" === o && (r = Vt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = T(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = w(e, t, i)), "normal" === r && t in Xt && (r = Xt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || Z.isNumeric(o) ? o || 0 : r) : r
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Ut.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Gt, function() {
                    return N(e, t, i)
                }) : N(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && zt(e);
                return k(e, n, i ? S(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), Z.cssHooks.marginRight = C(Y.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ct[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Bt.test(e) || (Z.cssHooks[e + t].set = k)
    }), Z.fn.extend({
        css: function(e, t) {
            return mt(this, function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (Z.isArray(t)) {
                    for (i = zt(e), r = t.length; r > a; a++) o[t[a]] = Z.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = E, E.prototype = {
        constructor: E,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = E.propHooks[this.prop];
            return e && e.get ? e.get(this) : E.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = E.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this
        }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = E.prototype.init, Z.fx.step = {};
    var Yt, Jt, Qt = /^(?:toggle|show|hide)$/,
        Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
        en = /queueHooks$/,
        tn = [L],
        nn = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = Zt.exec(t),
                        o = r && r[3] || (Z.cssNumber[e] ? "" : "px"),
                        a = (Z.cssNumber[e] || "px" !== o && +i) && Zt.exec(Z.css(n.elem, e)),
                        s = 1,
                        u = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, Z.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --u)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }
            ]
        };
    Z.Animation = Z.extend(M, {
        tweener: function(e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++) n = e[i], nn[n] = nn[n] || [], nn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? tn.unshift(e) : tn.push(e)
        }
    }), Z.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
        }, i
    }, Z.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Tt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = Z.isEmptyObject(e),
                o = Z.speed(t, n, i),
                a = function() {
                    var t = M(this, Z.extend({}, e), o);
                    (r || vt.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    o = Z.timers,
                    a = vt.get(this);
                if (r) a[r] && a[r].stop && i(a[r]);
                else
                    for (r in a) a[r] && a[r].stop && en.test(r) && i(a[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = vt.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = Z.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, Z.queue(this, e, []), r && r.stop && r.stop.call(this, !0),
                         t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function(e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, r)
        }
    }), Z.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        Z.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), Z.timers = [], Z.fx.tick = function() {
        var e, t = 0,
            n = Z.timers;
        for (Yt = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Yt = void 0
    }, Z.fx.timer = function(e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function() {
        Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function() {
        clearInterval(Jt), Jt = null
    }, Z.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, Z.fn.delay = function(e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", Y.checkOn = "" !== e.value, Y.optSelected = n.selected, t.disabled = !0, Y.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Y.radioValue = "t" === e.value
        }();
    var rn, on, an = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return mt(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === St ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Z.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(ht);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Y.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), on = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = an[t] || Z.find.attr;
        an[t] = function(e, t, i) {
            var r, o;
            return i || (o = an[t], an[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, an[t] = o), r
        }
    });
    var sn = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return mt(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, r = Z.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || sn.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(ht) || []; l > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = Z.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(ht) || []; l > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        a = e ? Z.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, r = Z(this), o = e.match(ht) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === St || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ln = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = Z.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, Z(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Z.isArray(r) && (r = Z.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = Z.valHooks[r.type] || Z.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, u = 0 > r ? s : o ? r : 0; s > u; u++)
                        if (n = i[u], !(!n.selected && u !== r || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = Z.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = Z.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Y.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var cn = Z.now(),
        fn = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var dn = /#.*$/,
        hn = /([?&])_=[^&]*/,
        pn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mn = /^(?:GET|HEAD)$/,
        vn = /^\/\//,
        yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bn = {}, xn = {}, wn = "*/".concat("*"),
        Cn = e.location.href,
        Tn = yn.exec(Cn.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Cn,
            type: "GET",
            isLocal: gn.test(Tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? P(P(e, Z.ajaxSettings), t) : P(Z.ajaxSettings, e)
        },
        ajaxPrefilter: q(bn),
        ajaxTransport: q(xn),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var u, c, v, y, x, C = t;
                2 !== b && (b = 2, s && clearTimeout(s), i = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = F(f, w, n)), y = H(f, y, w, u), u ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (Z.etag[r] = x)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, u = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", u ? p.resolveWith(d, [c, C, w]) : p.rejectWith(d, [w, C, v]), w.statusCode(m), m = void 0, l && h.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(d, [w, C]), l && (h.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, a, s, u, l, c, f = Z.ajaxSetup({}, t),
                d = f.context || f,
                h = f.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                p = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = f.statusCode || {}, v = {}, y = {}, b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = pn.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Cn) + "").replace(dn, "").replace(vn, Tn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(ht) || [""], null == f.crossDomain && (u = yn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Tn[1] && u[2] === Tn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tn[3] || ("http:" === Tn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), R(bn, f, t, w), 2 === b) return w;
            l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mn.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (fn.test(r) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = hn.test(r) ? r.replace(hn, "$1_=" + cn++) : r + (fn.test(r) ? "&" : "?") + "_=" + cn++)), f.ifModified && (Z.lastModified[r] && w.setRequestHeader("If-Modified-Since", Z.lastModified[r]), Z.etag[r] && w.setRequestHeader("If-None-Match", Z.etag[r])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) w[c](f[c]);
            if (i = R(xn, f, t, w)) {
                w.readyState = 1, l && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, i.send(v, n)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, i, r) {
            return Z.isFunction(n) && (r = r || i, i = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var kn = /%20/g,
        Sn = /\[\]$/,
        Nn = /\r?\n/g,
        An = /^(?:submit|button|image|reset|file)$/i,
        En = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) O(n, e[n], t, r);
        return i.join("&").replace(kn, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && En.test(this.nodeName) && !An.test(e) && (this.checked || !kt.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nn, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Dn = 0,
        jn = {}, _n = {
            0: 200,
            1223: 204
        }, Ln = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in jn) jn[e]()
    }), Y.cors = !! Ln && "withCredentials" in Ln, Y.ajax = Ln = !! Ln, Z.ajaxTransport(function(e) {
        var t;
        return Y.cors || Ln && !e.crossDomain ? {
            send: function(n, i) {
                var r, o = e.xhr(),
                    a = ++Dn;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) o[r] = e.xhrFields[r];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) o.setRequestHeader(r, n[r]);
                t = function(e) {
                    return function() {
                        t && (delete jn[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(_n[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = jn[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var In = [],
        Mn = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = In.pop() || Z.expando + "_" + cn++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (Mn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Mn, "$1" + r) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || Z.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, In.push(r)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var i = at.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, r), r && r.length && Z(r).remove(), Z.merge([], i.childNodes))
    };
    var qn = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && qn) return qn.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (i = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && Z.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Rn = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, u, l, c = Z.css(e, "position"),
                f = Z(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (i = f.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                }, o = i && i.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== St && (r = i.getBoundingClientRect()), n = B(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - Z.css(n, "marginTop", !0),
                    left: t.left - i.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Rn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Rn
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        Z.fn[t] = function(r) {
            return mt(this, function(t, r, o) {
                var a = B(t);
                return void 0 === o ? a ? a[n] : t[r] : void(a ? a.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
            }, t, r, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = C(Y.pixelPosition, function(e, n) {
            return n ? (n = w(e, t), $t.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            Z.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return mt(this, function(t, n, i) {
                    var r;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? Z.css(t, n, a) : Z.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Pn = e.jQuery,
        Fn = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Fn), t && e.jQuery === Z && (e.jQuery = Pn), Z
    }, typeof t === St && (e.jQuery = e.$ = Z), Z
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        e(t, window, document)
    }) : e(jQuery, window, document)
}(function(e, t, n, i) {
    "use strict";

    function r(t, n) {
        this.a = t, n && e.extend(n, n, {
            a: n.autoFormat,
            h: n.autoHideDialCode,
            d: n.defaultCountry,
            i: n.ipinfoToken,
            n: n.nationalMode,
            t: n.numberType,
            o: n.onlyCountries,
            p: n.preferredCountries,
            v: n.preventInvalidNumbers,
            u: n.utilsScript
        }), this.b = e.extend({}, s, n), this.c = s, this.ns = "." + o + a++, this.d = Boolean(t.setSelectionRange), this.e = Boolean(e(t).attr("placeholder")), this.f = o
    }
    var o = "intlTelInput",
        a = 1,
        s = {
            allowExtensions: !1,
            a: !0,
            h: !0,
            autoPlaceholder: !0,
            d: "",
            geoIpLookup: null,
            n: !0,
            t: "MOBILE",
            o: [],
            p: ["us", "gb"],
            u: ""
        }, u = {
            b: 38,
            c: 40,
            d: 13,
            e: 27,
            f: 43,
            A: 65,
            Z: 90,
            g: 48,
            h: 57,
            i: 32,
            Bi: 8,
            TAB: 9,
            k: 46,
            l: 17,
            m: 91,
            n: 224
        }, l = !1;
    e(t).load(function() {
        l = !0
    }), r.prototype = {
        _init: function() {
            return this.b.n && (this.b.h = !1), navigator.userAgent.match(/IEMobile/i) && (this.b.a = !1), this.isMobile = /Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.autoCountryDeferred = new e.Deferred, this.utilsScriptDeferred = new e.Deferred, this._b(), this._f(), this._h(), this._i(), this._initRequests(), [this.autoCountryDeferred, this.utilsScriptDeferred]
        },
        _b: function() {
            this._d(), this._e()
        },
        _c: function(e, t, n) {
            t in this.m || (this.m[t] = []);
            var i = n || 0;
            this.m[t][i] = e
        },
        _d: function() {
            var t;
            if (this.b.o.length) {
                for (t = 0; t < this.b.o.length; t++) this.b.o[t] = this.b.o[t].toLowerCase();
                for (this.l = [], t = 0; t < c.length; t++) - 1 != e.inArray(c[t].iso2, this.b.o) && this.l.push(c[t])
            } else this.l = c;
            for (this.m = {}, t = 0; t < this.l.length; t++) {
                var n = this.l[t];
                if (this._c(n.iso2, n.dialCode, n.priority), n.areaCodes)
                    for (var i = 0; i < n.areaCodes.length; i++) this._c(n.iso2, n.dialCode + n.areaCodes[i])
            }
        },
        _e: function() {
            this.n = [];
            for (var e = 0; e < this.b.p.length; e++) {
                var t = this.b.p[e].toLowerCase(),
                    n = this._y(t, !1, !0);
                n && this.n.push(n)
            }
        },
        _f: function() {
            this.g = e(this.a), this.g.attr("autocomplete", "off"), this.g.wrap(e("<div>", {
                "class": "intl-tel-input"
            })), this.flagsContainer = e("<div>", {
                "class": "flag-dropdown"
            }).insertBefore(this.g);
            var t = e("<div>", {
                tabindex: "0",
                "class": "selected-flag"
            }).appendTo(this.flagsContainer);
            this.h = e("<div>", {
                "class": "iti-flag"
            }).appendTo(t), e("<div>", {
                "class": "arrow"
            }).appendTo(t), this.isMobile ? this.i = e("<select>", {
                "class": "iti-mobile-select"
            }).appendTo(this.flagsContainer) : (this.i = e("<ul>", {
                "class": "country-list v-hide"
            }).appendTo(this.flagsContainer), this.n.length && !this.isMobile && (this._g(this.n, "preferred"), e("<li>", {
                "class": "divider"
            }).appendTo(this.i))), this._g(this.l, ""), this.isMobile || (this.j = this.i.outerHeight(), this.i.removeClass("v-hide").addClass("hide"), this.k = this.i.children(".country"))
        },
        _g: function(e, t) {
            for (var n = "", i = 0; i < e.length; i++) {
                var r = e[i];
                this.isMobile ? (n += "<option data-dial-code='" + r.dialCode + "' value='" + r.iso2 + "'>", n += r.name + " +" + r.dialCode, n += "</option>") : (n += "<li class='country " + t + "' data-dial-code='" + r.dialCode + "' data-country-code='" + r.iso2 + "'>", n += "<div class='flag'><div class='iti-flag " + r.iso2 + "'></div></div>", n += "<span class='country-name'>" + r.name + "</span>", n += "<span class='dial-code'>+" + r.dialCode + "</span>", n += "</li>")
            }
            this.i.append(n)
        },
        _h: function() {
            var e = this.g.val();
            this._af(e) ? this._v(e, !0) : "auto" != this.b.d && (this.b.d = this.b.d ? this._y(this.b.d.toLowerCase(), !1, !1) : this.n.length ? this.n[0] : this.l[0], this._z(this.b.d.iso2), e || this._ae(this.b.d.dialCode, !1)), e && this._u(e)
        },
        _i: function() {
            var t = this;
            if (this._j(), (this.b.h || this.b.a) && this._l(), this.isMobile) this.i.on("change" + this.ns, function() {
                t._ab(e(this).find("option:selected"))
            });
            else {
                var n = this.g.closest("label");
                n.length && n.on("click" + this.ns, function(e) {
                    t.i.hasClass("hide") ? t.g.focus() : e.preventDefault()
                });
                var i = this.h.parent();
                i.on("click" + this.ns, function() {
                    !t.i.hasClass("hide") || t.g.prop("disabled") || t.g.prop("readonly") || t._n()
                })
            }
            this.flagsContainer.on("keydown" + t.ns, function(e) {
                var n = t.i.hasClass("hide");
                !n || e.which != u.b && e.which != u.c && e.which != u.i && e.which != u.d || (e.preventDefault(), e.stopPropagation(), t._n()), e.which == u.TAB && t._ac()
            })
        },
        _initRequests: function() {
            var n = this;
            this.b.u ? l ? this.loadUtils() : e(t).load(function() {
                n.loadUtils()
            }) : this.utilsScriptDeferred.resolve(), "auto" == this.b.d ? this._loadAutoCountry() : this.autoCountryDeferred.resolve()
        },
        _loadAutoCountry: function() {
            var t = e.cookie ? e.cookie("itiAutoCountry") : "";
            t && (e.fn[o].autoCountry = t), e.fn[o].autoCountry ? this.autoCountryLoaded() : e.fn[o].startedLoadingAutoCountry || (e.fn[o].startedLoadingAutoCountry = !0, "function" == typeof this.b.geoIpLookup && this.b.geoIpLookup(function(t) {
                e.fn[o].autoCountry = t.toLowerCase(), e.cookie && e.cookie("itiAutoCountry", e.fn[o].autoCountry, {
                    path: "/"
                }), setTimeout(function() {
                    e(".intl-tel-input input").intlTelInput("autoCountryLoaded")
                })
            }))
        },
        _j: function() {
            var e = this;
            this.b.a && this.g.on("keypress" + this.ns, function(n) {
                if (n.which >= u.i && !n.ctrlKey && !n.metaKey && t.intlTelInputUtils && !e.g.prop("readonly")) {
                    n.preventDefault();
                    var i = n.which >= u.g && n.which <= u.h || n.which == u.f,
                        r = e.g[0],
                        o = e.d && r.selectionStart == r.selectionEnd,
                        a = e.g.attr("maxlength"),
                        s = e.g.val(),
                        l = a ? s.length < a : !0;
                    if (l && (i || o)) {
                        var c = i ? String.fromCharCode(n.which) : null;
                        e._k(c, !0, i), s != e.g.val() && e.g.trigger("input")
                    }
                    i || e._handleInvalidKey()
                }
            }), this.g.on("cut" + this.ns + " paste" + this.ns, function() {
                setTimeout(function() {
                    if (e.b.a && t.intlTelInputUtils) {
                        var n = e.d && e.g[0].selectionStart == e.g.val().length;
                        e._k(null, n), e._ensurePlus()
                    } else e._v(e.g.val())
                })
            }), this.g.on("keyup" + this.ns, function(n) {
                if (n.which == u.d || e.g.prop("readonly"));
                else if (e.b.a && t.intlTelInputUtils) {
                    var i = e.d && e.g[0].selectionStart == e.g.val().length;
                    e.g.val() ? (n.which == u.k && !i || n.which == u.Bi) && e._k() : e._v(""), e._ensurePlus()
                } else e._v(e.g.val())
            })
        },
        _ensurePlus: function() {
            if (!this.b.n) {
                var e = this.g.val(),
                    t = this.g[0];
                if ("+" != e.charAt(0)) {
                    var n = this.d ? t.selectionStart + 1 : 0;
                    this.g.val("+" + e), this.d && t.setSelectionRange(n, n)
                }
            }
        },
        _handleInvalidKey: function() {
            var e = this;
            this.g.trigger("invalidkey").addClass("iti-invalid-key"), setTimeout(function() {
                e.g.removeClass("iti-invalid-key")
            }, 100)
        },
        _k: function(e, t, n) {
            var i, r = this.g.val(),
                o = (this._getClean(r), this.g[0]),
                a = 0;
            if (this.d ? (a = this._getDigitsOnRight(r, o.selectionEnd), e ? r = r.substr(0, o.selectionStart) + e + r.substring(o.selectionEnd, r.length) : i = r.substr(o.selectionStart - 2, 2)) : e && (r += e), this.setNumber(r, null, t, !0, n), this.d) {
                var s;
                r = this.g.val(), a ? (s = this._getCursorFromDigitsOnRight(r, a), e || (s = this._getCursorFromLeftChar(r, s, i))) : s = r.length, o.setSelectionRange(s, s)
            }
        },
        _getCursorFromLeftChar: function(t, n, i) {
            for (var r = n; r > 0; r--) {
                var o = t.charAt(r - 1);
                if (e.isNumeric(o) || t.substr(r - 2, 2) == i) return r
            }
            return 0
        },
        _getCursorFromDigitsOnRight: function(t, n) {
            for (var i = t.length - 1; i >= 0; i--)
                if (e.isNumeric(t.charAt(i)) && 0 === --n) return i;
            return 0
        },
        _getDigitsOnRight: function(t, n) {
            for (var i = 0, r = n; r < t.length; r++) e.isNumeric(t.charAt(r)) && i++;
            return i
        },
        _l: function() {
            var e = this;
            this.b.h && this.g.on("mousedown" + this.ns, function(t) {
                e.g.is(":focus") || e.g.val() || (t.preventDefault(), e.g.focus())
            }), this.g.on("focus" + this.ns, function() {
                var n = e.g.val();
                e.g.data("focusVal", n), e.b.h && !n && !e.g.prop("readonly") && e.o.dialCode && (e._u("+" + e.o.dialCode, null, !0), e.g.one("keypress.plus" + e.ns, function(n) {
                    if (n.which == u.f) {
                        var i = e.b.a && t.intlTelInputUtils ? "+" : "";
                        e.g.val(i)
                    }
                }), setTimeout(function() {
                    var t = e.g[0];
                    if (e.d) {
                        var n = e.g.val().length;
                        t.setSelectionRange(n, n)
                    }
                }))
            }), this.g.on("blur" + this.ns, function() {
                if (e.b.h) {
                    var n = e.g.val(),
                        i = "+" == n.charAt(0);
                    if (i) {
                        var r = e._m(n);
                        r && e.o.dialCode != r || e.g.val("")
                    }
                    e.g.off("keypress.plus" + e.ns)
                }
                e.b.a && t.intlTelInputUtils && e.g.val() != e.g.data("focusVal") && e.g.trigger("change")
            })
        },
        _m: function(e) {
            return e.replace(/\D/g, "")
        },
        _getClean: function(e) {
            var t = "+" == e.charAt(0) ? "+" : "";
            return t + this._m(e)
        },
        _n: function() {
            this._o();
            var e = this.i.children(".active");
            e.length && this._x(e), this.i.removeClass("hide"), e.length && this._ad(e), this._p(), this.h.children(".arrow").addClass("up")
        },
        _o: function() {
            var n = this.g.offset().top,
                i = e(t).scrollTop(),
                r = n + this.g.outerHeight() + this.j < i + e(t).height(),
                o = n - this.j > i,
                a = !r && o ? "-" + (this.j - 1) + "px" : "";
            this.i.css("top", a)
        },
        _p: function() {
            var t = this;
            this.i.on("mouseover" + this.ns, ".country", function() {
                t._x(e(this))
            }), this.i.on("click" + this.ns, ".country", function() {
                t._ab(e(this))
            });
            var i = !0;
            e("html").on("click" + this.ns, function() {
                i || t._ac(), i = !1
            });
            var r = "",
                o = null;
            e(n).on("keydown" + this.ns, function(e) {
                e.preventDefault(), e.which == u.b || e.which == u.c ? t._q(e.which) : e.which == u.d ? t._r() : e.which == u.e ? t._ac() : (e.which >= u.A && e.which <= u.Z || e.which == u.i) && (o && clearTimeout(o), r += String.fromCharCode(e.which), t._s(r), o = setTimeout(function() {
                    r = ""
                }, 1e3))
            })
        },
        _q: function(e) {
            var t = this.i.children(".highlight").first(),
                n = e == u.b ? t.prev() : t.next();
            n.length && (n.hasClass("divider") && (n = e == u.b ? n.prev() : n.next()), this._x(n), this._ad(n))
        },
        _r: function() {
            var e = this.i.children(".highlight").first();
            e.length && this._ab(e)
        },
        _s: function(e) {
            for (var t = 0; t < this.l.length; t++)
                if (this._t(this.l[t].name, e)) {
                    var n = this.i.children("[data-country-code=" + this.l[t].iso2 + "]").not(".preferred");
                    this._x(n), this._ad(n, !0);
                    break
                }
        },
        _t: function(e, t) {
            return e.substr(0, t.length).toUpperCase() == t
        },
        _u: function(e, n, i, r, o) {
            var a;
            if (this.b.a && t.intlTelInputUtils && this.o) {
                a = "number" == typeof n && intlTelInputUtils.isValidNumber(e, this.o.iso2) ? intlTelInputUtils.formatNumberByType(e, this.o.iso2, n) : !r && this.b.n && "+" == e.charAt(0) && intlTelInputUtils.isValidNumber(e, this.o.iso2) ? intlTelInputUtils.formatNumberByType(e, this.o.iso2, intlTelInputUtils.numberFormat.NATIONAL) : intlTelInputUtils.formatNumber(e, this.o.iso2, i, this.b.allowExtensions, o);
                var s = this.g.attr("maxlength");
                s && a.length > s && (a = a.substr(0, s))
            } else a = e;
            this.g.val(a)
        },
        _v: function(t, n) {
            t && this.b.n && this.o && "1" == this.o.dialCode && "+" != t.charAt(0) && ("1" != t.charAt(0) && (t = "1" + t), t = "+" + t);
            var i = this._af(t),
                r = null;
            if (i) {
                var o = this.m[this._m(i)],
                    a = this.o && -1 != e.inArray(this.o.iso2, o);
                if (!a || this._w(t, i))
                    for (var s = 0; s < o.length; s++)
                        if (o[s]) {
                            r = o[s];
                            break
                        }
            } else "+" == t.charAt(0) && this._m(t).length ? r = "" : t && "+" != t || (r = this.b.d.iso2);
            null !== r && this._z(r, n)
        },
        _w: function(e, t) {
            return "+1" == t && this._m(e).length >= 4
        },
        _x: function(e) {
            this.k.removeClass("highlight"), e.addClass("highlight")
        },
        _y: function(e, t, n) {
            for (var i = t ? c : this.l, r = 0; r < i.length; r++)
                if (i[r].iso2 == e) return i[r];
            if (n) return null;
            throw new Error("No country data for '" + e + "'")
        },
        _z: function(e, t) {
            this.o = e ? this._y(e, !1, !1) : {}, t && this.o.iso2 && (this.b.d = {
                iso2: this.o.iso2
            }), this.h.attr("class", "iti-flag " + e);
            var n = e ? this.o.name + ": +" + this.o.dialCode : "Unknown";
            this.h.parent().attr("title", n), this._aa(), this.isMobile ? this.i.val(e) : (this.k.removeClass("active"), e && this.k.find(".iti-flag." + e).first().closest(".country").addClass("active"))
        },
        _aa: function() {
            if (t.intlTelInputUtils && !this.e && this.b.autoPlaceholder && this.o) {
                var e = this.o.iso2,
                    n = intlTelInputUtils.numberType[this.b.t || "FIXED_LINE"],
                    i = e ? intlTelInputUtils.getExampleNumber(e, this.b.n, n) : "";
                this.g.attr("placeholder", i)
            }
        },
        _ab: function(e) {
            var t = this.isMobile ? "value" : "data-country-code";
            if (this._z(e.attr(t), !0), this.isMobile || this._ac(), this._ae(e.attr("data-dial-code"), !0), this.g.trigger("change"), this.g.focus(), this.d) {
                var n = this.g.val().length;
                this.g[0].setSelectionRange(n, n)
            }
        },
        _ac: function() {
            this.i.addClass("hide"), this.h.children(".arrow").removeClass("up"), e(n).off(this.ns), e("html").off(this.ns), this.i.off(this.ns)
        },
        _ad: function(e, t) {
            var n = this.i,
                i = n.height(),
                r = n.offset().top,
                o = r + i,
                a = e.outerHeight(),
                s = e.offset().top,
                u = s + a,
                l = s - r + n.scrollTop(),
                c = i / 2 - a / 2;
            if (r > s) t && (l -= c), n.scrollTop(l);
            else if (u > o) {
                t && (l += c);
                var f = i - a;
                n.scrollTop(l - f)
            }
        },
        _ae: function(t, n) {
            var i, r = this.g.val();
            if (t = "+" + t, this.b.n && "+" != r.charAt(0)) i = r;
            else if (r) {
                var o = this._af(r);
                if (o.length > 1) i = r.replace(o, t);
                else {
                    var a = "+" != r.charAt(0) ? e.trim(r) : "";
                    i = t + a
                }
            } else i = !this.b.h || n ? t : "";
            this._u(i, null, n)
        },
        _af: function(t) {
            var n = "";
            if ("+" == t.charAt(0))
                for (var i = "", r = 0; r < t.length; r++) {
                    var o = t.charAt(r);
                    if (e.isNumeric(o) && (i += o, this.m[i] && (n = t.substr(0, r + 1)),
                        4 == i.length)) break
                }
            return n
        },
        autoCountryLoaded: function() {
            "auto" == this.b.d && (this.b.d = e.fn[o].autoCountry, this._h(), this.autoCountryDeferred.resolve())
        },
        destroy: function() {
            this.isMobile || this._ac(), this.g.off(this.ns), this.isMobile ? this.i.off(this.ns) : (this.h.parent().off(this.ns), this.g.closest("label").off(this.ns));
            var e = this.g.parent();
            e.before(this.g).remove()
        },
        getExtension: function() {
            return this.g.val().split(" ext. ")[1] || ""
        },
        getNumber: function(e) {
            return t.intlTelInputUtils ? intlTelInputUtils.formatNumberByType(this.g.val(), this.o.iso2, e) : ""
        },
        getNumberType: function() {
            return t.intlTelInputUtils ? intlTelInputUtils.getNumberType(this.g.val(), this.o.iso2) : -99
        },
        getSelectedCountryData: function() {
            return this.o || {}
        },
        getValidationError: function() {
            return t.intlTelInputUtils ? intlTelInputUtils.getValidationError(this.g.val(), this.o.iso2) : -99
        },
        isValidNumber: function() {
            var n = e.trim(this.g.val()),
                i = this.b.n ? this.o.iso2 : "";
            return t.intlTelInputUtils ? intlTelInputUtils.isValidNumber(n, i) : !1
        },
        loadUtils: function(t) {
            var n = this,
                i = t || this.b.u;
            !e.fn[o].loadedUtilsScript && i ? (e.fn[o].loadedUtilsScript = !0, e.ajax({
                url: i,
                success: function() {
                    e(".intl-tel-input input").intlTelInput("utilsLoaded")
                },
                complete: function() {
                    n.utilsScriptDeferred.resolve()
                },
                dataType: "script",
                cache: !0
            })) : this.utilsScriptDeferred.resolve()
        },
        selectCountry: function(e) {
            e = e.toLowerCase(), this.h.hasClass(e) || (this._z(e, !0), this._ae(this.o.dialCode, !1))
        },
        setNumber: function(e, t, n, i, r) {
            this.b.n || "+" == e.charAt(0) || (e = "+" + e), this._v(e), this._u(e, t, n, i, r)
        },
        utilsLoaded: function() {
            this.b.a && this.g.val() && this._u(this.g.val()), this._aa()
        }
    }, e.fn[o] = function(t) {
        var n = arguments;
        if (t === i || "object" == typeof t) {
            var a = [];
            return this.each(function() {
                if (!e.data(this, "plugin_" + o)) {
                    var n = new r(this, t),
                        i = n._init();
                    a.push(i[0]), a.push(i[1]), e.data(this, "plugin_" + o, n)
                }
            }), e.when.apply(null, a)
        }
        if ("string" == typeof t && "_" !== t[0]) {
            var s;
            return this.each(function() {
                var i = e.data(this, "plugin_" + o);
                i instanceof r && "function" == typeof i[t] && (s = i[t].apply(i, Array.prototype.slice.call(n, 1))), "destroy" === t && e.data(this, "plugin_" + o, null)
            }), s !== i ? s : this
        }
    }, e.fn[o].getCountryData = function() {
        return c
    }, e.fn[o].version = "6.0.6";
    for (var c = [
        ["Afghanistan (â€«Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†â€¬â€Ž)", "af", "93"],
        ["Albania (ShqipÃ«ri)", "al", "355"],
        ["Algeria (â€«Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±â€¬â€Ž)", "dz", "213"],
        ["American Samoa", "as", "1684"],
        ["Andorra", "ad", "376"],
        ["Angola", "ao", "244"],
        ["Anguilla", "ai", "1264"],
        ["Antigua and Barbuda", "ag", "1268"],
        ["Argentina", "ar", "54"],
        ["Armenia (Õ€Õ¡ÕµÕ¡Õ½Õ¿Õ¡Õ¶)", "am", "374"],
        ["Aruba", "aw", "297"],
        ["Australia", "au", "61"],
        ["Austria (Ã–sterreich)", "at", "43"],
        ["Azerbaijan (AzÉ™rbaycan)", "az", "994"],
        ["Bahamas", "bs", "1242"],
        ["Bahrain (â€«Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†â€¬â€Ž)", "bh", "973"],
        ["Bangladesh (à¦¬à¦¾à¦‚à¦²à¦¾à¦¦à§‡à¦¶)", "bd", "880"],
        ["Barbados", "bb", "1246"],
        ["Belarus (Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÑŒ)", "by", "375"],
        ["Belgium (BelgiÃ«)", "be", "32"],
        ["Belize", "bz", "501"],
        ["Benin (BÃ©nin)", "bj", "229"],
        ["Bermuda", "bm", "1441"],
        ["Bhutan (à½ à½–à¾²à½´à½‚)", "bt", "975"],
        ["Bolivia", "bo", "591"],
        ["Bosnia and Herzegovina (Ð‘Ð¾ÑÐ½Ð° Ð¸ Ð¥ÐµÑ€Ñ†ÐµÐ³Ð¾Ð²Ð¸Ð½Ð°)", "ba", "387"],
        ["Botswana", "bw", "267"],
        ["Brazil (Brasil)", "br", "55"],
        ["British Indian Ocean Territory", "io", "246"],
        ["British Virgin Islands", "vg", "1284"],
        ["Brunei", "bn", "673"],
        ["Bulgaria (Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ)", "bg", "359"],
        ["Burkina Faso", "bf", "226"],
        ["Burundi (Uburundi)", "bi", "257"],
        ["Cambodia (áž€áž˜áŸ’áž–áž»áž‡áž¶)", "kh", "855"],
        ["Cameroon (Cameroun)", "cm", "237"],
        ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
        ["Cape Verde (Kabu Verdi)", "cv", "238"],
        ["Caribbean Netherlands", "bq", "599", 1],
        ["Cayman Islands", "ky", "1345"],
        ["Central African Republic (RÃ©publique centrafricaine)", "cf", "236"],
        ["Chad (Tchad)", "td", "235"],
        ["Chile", "cl", "56"],
        ["China (ä¸­å›½)", "cn", "86"],
        ["Colombia", "co", "57"],
        ["Comoros (â€«Ø¬Ø²Ø± Ø§Ù„Ù‚Ù…Ø±â€¬â€Ž)", "km", "269"],
        ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
        ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
        ["Cook Islands", "ck", "682"],
        ["Costa Rica", "cr", "506"],
        ["CÃ´te dâ€™Ivoire", "ci", "225"],
        ["Croatia (Hrvatska)", "hr", "385"],
        ["Cuba", "cu", "53"],
        ["CuraÃ§ao", "cw", "599", 0],
        ["Cyprus (ÎšÏÏ€ÏÎ¿Ï‚)", "cy", "357"],
        ["Czech Republic (ÄŒeskÃ¡ republika)", "cz", "420"],
        ["Denmark (Danmark)", "dk", "45"],
        ["Djibouti", "dj", "253"],
        ["Dominica", "dm", "1767"],
        ["Dominican Republic (RepÃºblica Dominicana)", "do", "1", 2, ["809", "829", "849"]],
        ["Ecuador", "ec", "593"],
        ["Egypt (â€«Ù…ØµØ±â€¬â€Ž)", "eg", "20"],
        ["El Salvador", "sv", "503"],
        ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
        ["Eritrea", "er", "291"],
        ["Estonia (Eesti)", "ee", "372"],
        ["Ethiopia", "et", "251"],
        ["Falkland Islands (Islas Malvinas)", "fk", "500"],
        ["Faroe Islands (FÃ¸royar)", "fo", "298"],
        ["Fiji", "fj", "679"],
        ["Finland (Suomi)", "fi", "358"],
        ["France", "fr", "33"],
        ["French Guiana (Guyane franÃ§aise)", "gf", "594"],
        ["French Polynesia (PolynÃ©sie franÃ§aise)", "pf", "689"],
        ["Gabon", "ga", "241"],
        ["Gambia", "gm", "220"],
        ["Georgia (áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒšáƒ)", "ge", "995"],
        ["Germany (Deutschland)", "de", "49"],
        ["Ghana (Gaana)", "gh", "233"],
        ["Gibraltar", "gi", "350"],
        ["Greece (Î•Î»Î»Î¬Î´Î±)", "gr", "30"],
        ["Greenland (Kalaallit Nunaat)", "gl", "299"],
        ["Grenada", "gd", "1473"],
        ["Guadeloupe", "gp", "590", 0],
        ["Guam", "gu", "1671"],
        ["Guatemala", "gt", "502"],
        ["Guinea (GuinÃ©e)", "gn", "224"],
        ["Guinea-Bissau (GuinÃ© Bissau)", "gw", "245"],
        ["Guyana", "gy", "592"],
        ["Haiti", "ht", "509"],
        ["Honduras", "hn", "504"],
        ["Hong Kong (é¦™æ¸¯)", "hk", "852"],
        ["Hungary (MagyarorszÃ¡g)", "hu", "36"],
        ["Iceland (Ãsland)", "is", "354"],
        ["India (à¤­à¤¾à¤°à¤¤)", "in", "91"],
        ["Indonesia", "id", "62"],
        ["Iran (â€«Ø§ÛŒØ±Ø§Ù†â€¬â€Ž)", "ir", "98"],
        ["Iraq (â€«Ø§Ù„Ø¹Ø±Ø§Ù‚â€¬â€Ž)", "iq", "964"],
        ["Ireland", "ie", "353"],
        ["Israel (â€«×™×©×¨××œâ€¬â€Ž)", "il", "972"],
        ["Italy (Italia)", "it", "39", 0],
        ["Jamaica", "jm", "1876"],
        ["Japan (æ—¥æœ¬)", "jp", "81"],
        ["Jordan (â€«Ø§Ù„Ø£Ø±Ø¯Ù†â€¬â€Ž)", "jo", "962"],
        ["Kazakhstan (ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½)", "kz", "7", 1],
        ["Kenya", "ke", "254"],
        ["Kiribati", "ki", "686"],
        ["Kuwait (â€«Ø§Ù„ÙƒÙˆÙŠØªâ€¬â€Ž)", "kw", "965"],
        ["Kyrgyzstan (ÐšÑ‹Ñ€Ð³Ñ‹Ð·ÑÑ‚Ð°Ð½)", "kg", "996"],
        ["Laos (àº¥àº²àº§)", "la", "856"],
        ["Latvia (Latvija)", "lv", "371"],
        ["Lebanon (â€«Ù„Ø¨Ù†Ø§Ù†â€¬â€Ž)", "lb", "961"],
        ["Lesotho", "ls", "266"],
        ["Liberia", "lr", "231"],
        ["Libya (â€«Ù„ÙŠØ¨ÙŠØ§â€¬â€Ž)", "ly", "218"],
        ["Liechtenstein", "li", "423"],
        ["Lithuania (Lietuva)", "lt", "370"],
        ["Luxembourg", "lu", "352"],
        ["Macau (æ¾³é–€)", "mo", "853"],
        ["Macedonia (FYROM) (ÐœÐ°ÐºÐµÐ´Ð¾Ð½Ð¸Ñ˜Ð°)", "mk", "389"],
        ["Madagascar (Madagasikara)", "mg", "261"],
        ["Malawi", "mw", "265"],
        ["Malaysia", "my", "60"],
        ["Maldives", "mv", "960"],
        ["Mali", "ml", "223"],
        ["Malta", "mt", "356"],
        ["Marshall Islands", "mh", "692"],
        ["Martinique", "mq", "596"],
        ["Mauritania (â€«Ù…ÙˆØ±ÙŠØªØ§Ù†ÙŠØ§â€¬â€Ž)", "mr", "222"],
        ["Mauritius (Moris)", "mu", "230"],
        ["Mexico (MÃ©xico)", "mx", "52"],
        ["Micronesia", "fm", "691"],
        ["Moldova (Republica Moldova)", "md", "373"],
        ["Monaco", "mc", "377"],
        ["Mongolia (ÐœÐ¾Ð½Ð³Ð¾Ð»)", "mn", "976"],
        ["Montenegro (Crna Gora)", "me", "382"],
        ["Montserrat", "ms", "1664"],
        ["Morocco (â€«Ø§Ù„Ù…ØºØ±Ø¨â€¬â€Ž)", "ma", "212"],
        ["Mozambique (MoÃ§ambique)", "mz", "258"],
        ["Myanmar (Burma) (á€™á€¼á€”á€ºá€™á€¬)", "mm", "95"],
        ["Namibia (NamibiÃ«)", "na", "264"],
        ["Nauru", "nr", "674"],
        ["Nepal (à¤¨à¥‡à¤ªà¤¾à¤²)", "np", "977"],
        ["Netherlands (Nederland)", "nl", "31"],
        ["New Caledonia (Nouvelle-CalÃ©donie)", "nc", "687"],
        ["New Zealand", "nz", "64"],
        ["Nicaragua", "ni", "505"],
        ["Niger (Nijar)", "ne", "227"],
        ["Nigeria", "ng", "234"],
        ["Niue", "nu", "683"],
        ["Norfolk Island", "nf", "672"],
        ["North Korea (ì¡°ì„  ë¯¼ì£¼ì£¼ì˜ ì¸ë¯¼ ê³µí™”êµ­)", "kp", "850"],
        ["Northern Mariana Islands", "mp", "1670"],
        ["Norway (Norge)", "no", "47"],
        ["Oman (â€«Ø¹ÙÙ…Ø§Ù†â€¬â€Ž)", "om", "968"],
        ["Pakistan (â€«Ù¾Ø§Ú©Ø³ØªØ§Ù†â€¬â€Ž)", "pk", "92"],
        ["Palau", "pw", "680"],
        ["Palestine (â€«ÙÙ„Ø³Ø·ÙŠÙ†â€¬â€Ž)", "ps", "970"],
        ["Panama (PanamÃ¡)", "pa", "507"],
        ["Papua New Guinea", "pg", "675"],
        ["Paraguay", "py", "595"],
        ["Peru (PerÃº)", "pe", "51"],
        ["Philippines", "ph", "63"],
        ["Poland (Polska)", "pl", "48"],
        ["Portugal", "pt", "351"],
        ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
        ["Qatar (â€«Ù‚Ø·Ø±â€¬â€Ž)", "qa", "974"],
        ["RÃ©union (La RÃ©union)", "re", "262"],
        ["Romania (RomÃ¢nia)", "ro", "40"],
        ["Russia (Ð Ð¾ÑÑÐ¸Ñ)", "ru", "7", 0],
        ["Rwanda", "rw", "250"],
        ["Saint BarthÃ©lemy (Saint-BarthÃ©lemy)", "bl", "590", 1],
        ["Saint Helena", "sh", "290"],
        ["Saint Kitts and Nevis", "kn", "1869"],
        ["Saint Lucia", "lc", "1758"],
        ["Saint Martin (Saint-Martin (partie franÃ§aise))", "mf", "590", 2],
        ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
        ["Saint Vincent and the Grenadines", "vc", "1784"],
        ["Samoa", "ws", "685"],
        ["San Marino", "sm", "378"],
        ["SÃ£o TomÃ© and PrÃ­ncipe (SÃ£o TomÃ© e PrÃ­ncipe)", "st", "239"],
        ["Saudi Arabia (â€«Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©â€¬â€Ž)", "sa", "966"],
        ["Senegal (SÃ©nÃ©gal)", "sn", "221"],
        ["Serbia (Ð¡Ñ€Ð±Ð¸Ñ˜Ð°)", "rs", "381"],
        ["Seychelles", "sc", "248"],
        ["Sierra Leone", "sl", "232"],
        ["Singapore", "sg", "65"],
        ["Sint Maarten", "sx", "1721"],
        ["Slovakia (Slovensko)", "sk", "421"],
        ["Slovenia (Slovenija)", "si", "386"],
        ["Solomon Islands", "sb", "677"],
        ["Somalia (Soomaaliya)", "so", "252"],
        ["South Africa", "za", "27"],
        ["South Korea (ëŒ€í•œë¯¼êµ­)", "kr", "82"],
        ["South Sudan (â€«Ø¬Ù†ÙˆØ¨ Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)", "ss", "211"],
        ["Spain (EspaÃ±a)", "es", "34"],
        ["Sri Lanka (à·à·Šâ€à¶»à·“ à¶½à¶‚à¶šà·à·€)", "lk", "94"],
        ["Sudan (â€«Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)", "sd", "249"],
        ["Suriname", "sr", "597"],
        ["Swaziland", "sz", "268"],
        ["Sweden (Sverige)", "se", "46"],
        ["Switzerland (Schweiz)", "ch", "41"],
        ["Syria (â€«Ø³ÙˆØ±ÙŠØ§â€¬â€Ž)", "sy", "963"],
        ["Taiwan (å°ç£)", "tw", "886"],
        ["Tajikistan", "tj", "992"],
        ["Tanzania", "tz", "255"],
        ["Thailand (à¹„à¸—à¸¢)", "th", "66"],
        ["Timor-Leste", "tl", "670"],
        ["Togo", "tg", "228"],
        ["Tokelau", "tk", "690"],
        ["Tonga", "to", "676"],
        ["Trinidad and Tobago", "tt", "1868"],
        ["Tunisia (â€«ØªÙˆÙ†Ø³â€¬â€Ž)", "tn", "216"],
        ["Turkey (TÃ¼rkiye)", "tr", "90"],
        ["Turkmenistan", "tm", "993"],
        ["Turks and Caicos Islands", "tc", "1649"],
        ["Tuvalu", "tv", "688"],
        ["U.S. Virgin Islands", "vi", "1340"],
        ["Uganda", "ug", "256"],
        ["Ukraine (Ð£ÐºÑ€Ð°Ñ—Ð½Ð°)", "ua", "380"],
        ["United Arab Emirates (â€«Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©â€¬â€Ž)", "ae", "971"],
        ["United Kingdom", "gb", "44"],
        ["United States", "us", "1", 0],
        ["Uruguay", "uy", "598"],
        ["Uzbekistan (OÊ»zbekiston)", "uz", "998"],
        ["Vanuatu", "vu", "678"],
        ["Vatican City (CittÃ  del Vaticano)", "va", "39", 1],
        ["Venezuela", "ve", "58"],
        ["Vietnam (Viá»‡t Nam)", "vn", "84"],
        ["Wallis and Futuna", "wf", "681"],
        ["Yemen (â€«Ø§Ù„ÙŠÙ…Ù†â€¬â€Ž)", "ye", "967"],
        ["Zambia", "zm", "260"],
        ["Zimbabwe", "zw", "263"]
    ], f = 0; f < c.length; f++) {
        var d = c[f];
        c[f] = {
            name: d[0],
            iso2: d[1],
            dialCode: d[2],
            priority: d[3] || 0,
            areaCodes: d[4] || null
        }
    }
}), $(function() {
    $("#sms-num").intlTelInput({
        autoFormat: !0,
        autoPlaceholder: !0,
        onlyCountries: ["us"],
        utilsScript: "js3.js"
    });
    var e = $("#sms-num");
    $("form#sms-me").submit(function(t) {
        t.preventDefault();
        var n = e.intlTelInput("getNumber");
        number = encodeURIComponent(n), numberData = "number=" + number;
        var i = e.intlTelInput("getValidationError"),
            r = e.intlTelInput("getSelectedCountryData");
        if (i == intlTelInputUtils.validationError.IS_POSSIBLE)
            if (1 == r.dialCode) {
                var o = $("form#sms-me button");
                $.ajax({
                    type: "POST",
                    url: "http://smsmanager.meteor.com/users/signup",
                    data: numberData,
                    success: function() {
                        o.text("SMS Sent");
                        var e = "Successful Signup: " + n;
                        ga("send", "event", "Form Submit", e)
                    }
                }), o.addClass("btn-disabled"), o.prop("disabled", !0)
            } else {
                var a = "<p class='error-message'>Bummer! We're only in the US for now.</p>";
                $("#sms-me").append(a);
                var s = "International Number: " + n;
                ga("send", "event", "Form Submit", s)
            } else {
            e.addClass("error"), e.on("keydown", function() {
                e.removeClass("error")
            });
            var s = "Invalid Number: " + n;
            ga("send", "event", "Form Submit", s)
        }
    })
}), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.el = e(t), this.options = e.extend({}, e.fn.typed.defaults, n), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var e = this;
            e.timeout = setTimeout(function() {
                for (var t = 0; t < e.strings.length; ++t) e.sequence[t] = t;
                e.shuffle && (e.sequence = e.shuffleArray(e.sequence)), e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
            }, e.startDelay)
        },
        build: function() {
            this.showCursor === !0 && (this.cursor = e('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.init()
        },
        typewrite: function(e, t) {
            if (this.stop !== !0) {
                var n = Math.round(40 * Math.random()) + this.typeSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    var n = 0,
                        r = e.substr(t);
                    if ("^" === r.charAt(0)) {
                        var o = 1;
                        /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, n = parseInt(r)), e = e.substring(0, t) + e.substring(t + o)
                    }
                    if ("html" === i.contentType) {
                        var a = e.substr(t).charAt(0);
                        if ("<" === a || "&" === a) {
                            var s = "",
                                u = "";
                            for (u = "<" === a ? ">" : ";"; e.substr(t).charAt(0) !== u;) s += e.substr(t).charAt(0), t++;
                            t++, s += u
                        }
                    }
                    i.timeout = setTimeout(function() {
                        if (t === e.length) {
                            if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                            i.timeout = setTimeout(function() {
                                i.backspace(e, t)
                            }, i.backDelay)
                        } else {
                            0 === t && i.options.preStringTyped(i.arrayPos);
                            var n = e.substr(0, t + 1);
                            i.attr ? i.el.attr(i.attr, n) : i.isInput ? i.el.val(n) : "html" === i.contentType ? i.el.html(n) : i.el.text(n), t++, i.typewrite(e, t)
                        }
                    }, n)
                }, n)
            }
        },
        backspace: function() {
            var e = this;
            console.log(e), e.el.text(" "), e.arrayPos++, e.init()
        },
        shuffleArray: function(e) {
            var t, n, i = e.length;
            if (i)
                for (; --i;) n = Math.floor(Math.random() * (i + 1)), t = e[n], e[n] = e[i], e[i] = t;
            return e
        },
        reset: function() {
            var e = this;
            clearInterval(e.timeout);
            var t = this.el.attr("id");
            this.el.after('<span id="' + t + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), e.options.resetCallback()
        }
    }, e.fn.typed = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("typed"),
                o = "object" == typeof n && n;
            r || i.data("typed", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }, e.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 0,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.ramjet = t()
    }(this, function() {
        "use strict";

        function e() {
            document.body.appendChild(x), w = !0
        }

        function t(e) {
            var n = e.cloneNode(),
                i = void 0,
                r = void 0,
                o = void 0;
            if (1 === e.nodeType)
                for (i = window.getComputedStyle(e), y.forEach(function(e) {
                    n.style[e] = i[e]
                }), r = e.childNodes.length, o = 0; r > o; o += 1) n.appendChild(t(e.childNodes[o]));
            return n
        }

        function n(e) {
            var n = e.namespaceURI === b,
                i = e.getBoundingClientRect(),
                r = i.left,
                o = i.right,
                a = i.top,
                s = i.bottom,
                u = window.getComputedStyle(e),
                l = t(e),
                c = {
                    node: e,
                    clone: l,
                    isSvg: n,
                    cx: (r + o) / 2,
                    cy: (a + s) / 2,
                    width: o - r,
                    height: s - a,
                    transform: null,
                    borderRadius: null
                };
            if (n) {
                var f = e.getScreenCTM();
                c.transform = "matrix(" + [f.a, f.b, f.c, f.d, f.e, f.f].join(",") + ")", c.borderRadius = [0, 0, 0, 0], x.appendChild(l)
            } else {
                var d = e.offsetParent,
                    h = window.getComputedStyle(d),
                    p = d.getBoundingClientRect();
                l.style.position = "absolute", l.style.top = a - parseInt(u.marginTop, 10) - (p.top - parseInt(h.marginTop, 10)) + "px", l.style.left = r - parseInt(u.marginLeft, 10) - (p.left - parseInt(h.marginLeft, 10)) + "px", c.transform = "", c.borderRadius = [parseFloat(u.borderTopLeftRadius), parseFloat(u.borderTopRightRadius), parseFloat(u.borderBottomRightRadius), parseFloat(u.borderBottomLeftRadius)], e.parentNode.appendChild(l)
            }
            return c
        }

        function i(e) {
            e.__ramjetOriginalTransition__ = e.style.transition, e.style.transition = "", e.style.opacity = 0
        }

        function r(e) {
            e.style.transition = "", e.style.opacity = 1, e.__ramjetOriginalTransition__ && setTimeout(function() {
                e.style.transition = e.__ramjetOriginalTransition__
            })
        }

        function o(e, t, n, i, r, o, a, s) {
            var u = e ? "translate(" + t + " " + n + ") scale(" + (1 + s * o) + " " + (1 + s * a) + ") translate(" + -t + " " + -n + ") translate(" + s * i + " " + s * r + ")" : "translate(" + s * i + "px," + s * r + "px) scale(" + (1 + s * o) + "," + (1 + s * a) + ")";
            return u
        }

        function a(e, t, n, i, r) {
            var o = 1 + r * n,
                a = 1 + r * i;
            return e.map(function(e, n) {
                var i = t[n],
                    s = (e + r * (i - e)) / o,
                    u = (e + r * (i - e)) / a;
                return "" + s + "px " + u + "px"
            })
        }

        function s(e) {
            return e
        }

        function u(e) {
            return Math.pow(e, 3)
        }

        function l(e) {
            return Math.pow(e - 1, 3) + 1
        }

        function c(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }

        function f(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function d(e, t) {
            e.style.borderTopLeftRadius = t[0], e.style.borderTopRightRadius = t[1], e.style.borderBottomRightRadius = t[2], e.style.borderBottomLeftRadius = t[3]
        }

        function h(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function p(e) {
            var t = document.createElement("style");
            t.type = "text/css";
            var n = document.getElementsByTagName("head")[0],
                i = t.styleSheet;
            return i ? i.cssText = e : t.innerHTML = e, n.appendChild(t),
                function() {
                    return n.removeChild(t)
                }
        }

        function g(e, t, n) {
            function i(n, i) {
                var r = e.cx + o * i,
                    s = e.cy + a * i,
                    d = T(e.borderRadius, t.borderRadius, u, l, i),
                    h = T(t.borderRadius, e.borderRadius, c, f, 1 - i),
                    m = C(!1, r, s, o, a, u, l, i) + " " + e.transform,
                    v = C(!1, r, s, -o, -a, c, f, 1 - i) + " " + t.transform;
                p.push("\n			" + n + "% {\n				opacity: " + (1 - i) + ";\n				border-top-left-radius: " + d[0] + ";\n				border-top-right-radius: " + d[1] + ";\n				border-bottom-right-radius: " + d[2] + ";\n				border-bottom-left-radius: " + d[3] + ";\n				" + j + ": " + m + ";\n			}"), g.push("\n			" + n + "% {\n				opacity: " + i + ";\n				border-top-left-radius: " + h[0] + ";\n				border-top-right-radius: " + h[1] + ";\n				border-bottom-right-radius: " + h[2] + ";\n				border-bottom-left-radius: " + h[3] + ";\n				" + j + ": " + v + ";\n			}")
            }
            var r, o = t.cx - e.cx,
                a = t.cy - e.cy,
                u = t.width / e.width - 1,
                l = t.height / e.height - 1,
                c = e.width / t.width - 1,
                f = e.height / t.height - 1,
                d = n.easing || s,
                h = n.duration / 50,
                p = [],
                g = [];
            for (r = 0; h > r; r += 1) {
                var m = 100 * (r / h),
                    v = d(r / h);
                i(m, v)
            }
            return i(100, 1), p = p.join("\n"), g = g.join("\n"), {
                fromKeyframes: p,
                toKeyframes: g
            }
        }
        var m = ["length", "parentRule"],
            v = void 0;
        v = "undefined" != typeof CSS2Properties ? Object.keys(CSS2Properties.prototype) : Object.keys(document.createElement("div").style).filter(function(e) {
            return !~m.indexOf(e)
        });
        var y = v,
            b = "http://www.w3.org/2000/svg",
            x = document.createElementNS(b, "svg");
        x.style.position = "fixed", x.style.top = x.style.left = "0", x.style.width = x.style.height = "100%", x.style.overflow = "visible", x.style.pointerEvents = "none", x.setAttribute("class", "mogrify-svg");
        var w = !1,
            C = o,
            T = a,
            k = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                    return setTimeout(e, 16)
                }, S = k,
            N = function(e, t, n) {
                function i() {
                    var s = Date.now(),
                        f = s - h;
                    if (f > p) return e.clone.parentNode.removeChild(e.clone), t.clone.parentNode.removeChild(t.clone), void(n.done && n.done());
                    var m = g(f / p);
                    e.clone.style.opacity = 1 - m, t.clone.style.opacity = m;
                    var v = T(e.borderRadius, t.borderRadius, a, u, m),
                        y = T(t.borderRadius, e.borderRadius, l, c, 1 - m);
                    d(e.clone, v), d(t.clone, y);
                    var b = e.cx + r * m,
                        x = e.cy + o * m,
                        w = C(e.isSvg, b, x, r, o, a, u, m) + " " + e.transform,
                        k = C(t.isSvg, b, x, -r, -o, l, c, 1 - m) + " " + t.transform;
                    e.isSvg ? e.clone.setAttribute("transform", w) : e.clone.style.transform = e.clone.style.webkitTransform = e.clone.style.msTransform = w, t.isSvg ? t.clone.setAttribute("transform", k) : t.clone.style.transform = t.clone.style.webkitTransform = t.clone.style.msTransform = k, S(i)
                }
                f(this, N);
                var r = t.cx - e.cx,
                    o = t.cy - e.cy,
                    a = t.width / e.width - 1,
                    u = t.height / e.height - 1,
                    l = e.width / t.width - 1,
                    c = e.height / t.height - 1,
                    h = Date.now(),
                    p = n.duration || 400,
                    g = n.easing || s;
                i()
            }, A = N,
            E = document.createElement("div"),
            D = !0,
            j = void 0,
            _ = void 0,
            L = void 0,
            I = void 0,
            M = void 0,
            q = void 0,
            R = void 0,
            P = void 0,
            F = !window.ActiveXObject && "ActiveXObject" in window;
        !F && ("transform" in E.style || "webkitTransform" in E.style) && ("animation" in E.style || "webkitAnimation" in E.style) ? (D = !0, j = "transform" in E.style ? "transform" : "-webkit-transform", "animation" in E.style ? (_ = "@keyframes", L = "animationDirection", I = "animationDuration", M = "animationIterationCount", q = "animationName", R = "animationTimingFunction", P = "animationend") : (_ = "@-webkit-keyframes", L = "webkitAnimationDirection", I = "webkitAnimationDuration", M = "webkitAnimationIterationCount", q = "webkitAnimationName", R = "webkitAnimationTimingFunction", P = "webkitAnimationEnd")) : D = !1;
        var H = function(e, t, n) {
                function i() {
                    f && d && (e.clone.parentNode.removeChild(e.clone), t.clone.parentNode.removeChild(t.clone), n.done && n.done(), c())
                }
                h(this, H);
                var r = g(e, t, n),
                    o = r.fromKeyframes,
                    a = r.toKeyframes,
                    s = "_" + ~~(1e6 * Math.random()),
                    u = "_" + ~~(1e6 * Math.random()),
                    l = "" + _ + " " + s + " { " + o + " } " + _ + " " + u + " { " + a + " }",
                    c = p(l);
                e.clone.style[L] = "alternate", e.clone.style[I] = "" + n.duration / 1e3 + "s", e.clone.style[M] = 1, e.clone.style[q] = s, e.clone.style[R] = "linear", t.clone.style[L] = "alternate", t.clone.style[I] = "" + n.duration / 1e3 + "s", t.clone.style[M] = 1, t.clone.style[q] = u, t.clone.style[R] = "linear";
                var f = void 0,
                    d = void 0;
                e.clone.addEventListener(P, function() {
                    f = !0, i()
                }), t.clone.addEventListener(P, function() {
                    d = !0, i()
                })
            }, O = H,
            B = {
                transform: function(t, i) {
                    var r = void 0 === arguments[2] ? {} : arguments[2];
                    "function" == typeof r && (r = {
                        done: r
                    }), "duration" in r || (r.duration = 400);
                    var o = n(t),
                        a = n(i);
                    return (o.isSvg || a.isSvg && !w) && e(), !D || r.useTimer || o.isSvg || a.isSvg ? new A(o, a, r) : new O(o, a, r)
                },
                hide: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                    t.forEach(i)
                },
                show: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                    t.forEach(r)
                },
                linear: s,
                easeIn: u,
                easeOut: l,
                easeInOut: c
            };
        return B
    }), $(function() {
    function e() {
        $("#imessage .message-input").text("")
    }
    var t = $(".messages-wrapper"),
        n = [{
            message: "hELLO ANY HELP!!!!! ",
            user: "to"
        }, {
            message: "Startup Ownerâ€™s Manual (http://amzn.to/1LgAwVY) is a great guide to testing your startup idea.",
            user: "from"
        }, {
            message: "Thanks, which parts should I focus on?",
            user: "to"
        }, {
            message: "Chapters 4, 5 and 6 are very relevant to testing startup ideas in the early stages.",
            user: "from"
        }],
        i = [{
            message: "Hello ddhdhdhddh",
            user: "to"
        }, {
            message: "Check out Venture Deals (http://amzn.to/1Jejatq). It gives an excellent overview of the most important parts of a term sheet.",
            user: "from"
        }, {
            message: "Any specific chapters that you recommend?",
            user: "to"
        }, {
            message: "Terms sheets are complex so read the whole book :) But chapters 4 and 5 are key.",
            user: "from"
        }, {
            message: "Thanks!",
            user: "to"
        }],
        r = function(e, t) {
            var n = [];
            return "from" == t && (messageFinal = $("<div class='message from'>" + e + "</div>")), "to" == t && (messageStart = $("<div class='message-start' id='a'>" + e + "</div>"), messageFinal = $("<div class='message to' id='b'>" + e + "</div>")), messageFinal.hide(), n = [messageStart, messageFinal]
        };
    n.forEach(function(e, n) {
        var i = r(e.message, e.user, n);
        t.append(i[1]), i[1].show("fast")
    });
    for (var o = [], s = [], u = [], l = 0; l < i.length; l++) "to" == i[l].user && o.push(i[l].message), "from" == i[l].user && s.push(i[l].message);
    u[0] = o[0];
    for (var l = 1; l < o.length; l++) u[l] = "^3000 " + o[l];
    var c = function(e) {
        var n = r(o[e], "to", e);
        t.append(n[1]), f(n), s[e] && setTimeout(function() {
            var n = r(s[e], "from");
            t.append(n[1]), n[1].show("normal")
        }, 1300)
    }, f = function(e) {
        {
            var t = $(".message-input");
            $("#b")
        }
        e[1].show(), e[0].css({
            width: "300",
            height: t.height(),
            position: "absolute",
            top: t.offset().top,
            left: t.offset().left
        }), $("body").append(e[0]);
        var n = $("#a"),
            i = $("#b");
        i.css({
            opacity: "0"
        }), ramjet.transform(a, b, {
            done: function() {
                n.addClass("hidden"), i.css({
                    opacity: "1"
                })
            }
        }), n.addClass("hidden"), $("#a").removeAttr("id"), $("#b").removeAttr("id")
    };
    $("#imessage").on("click", function() {
        t.empty(), msgInput = $("#imessage .message-input"), $("#add-message").fadeOut(300), msgInput.typed({
            strings: u,
            typeSpeed: 0,
            showCursor: !1,
            onStringTyped: function(e) {
                c(e)
            },
            callback: function() {
                e()
            }
        }), $("#imessage").off();
        var n = "Video Played!";
        ga("send", "event", "Video Play", n)
    })
});
