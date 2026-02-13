/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(ie, e) {
    "use strict";
    var oe = [],
        r = Object.getPrototypeOf,
        ae = oe.slice,
        g = oe.flat ? function(e) {
            return oe.flat.call(e)
        } : function(e) {
            return oe.concat.apply([], e)
        },
        s = oe.push,
        se = oe.indexOf,
        n = {},
        i = n.toString,
        ue = n.hasOwnProperty,
        o = ue.toString,
        a = o.call(Object),
        le = {},
        v = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        y = function(e) {
            return null != e && e === e.window
        },
        C = ie.document,
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in u)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }
    var t = "3.7.1",
        l = /HTML$/i,
        ce = function(e, t) {
            return new ce.fn.init(e, t)
        };

    function c(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ce.each(this, e)
        },
        map: function(n) {
            return this.pushStack(ce.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: oe.sort,
        splice: oe.splice
    }, ce.extend = ce.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, ce.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (c(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        text: function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                while (t = e[r++]) n += ce.text(t);
            return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !l.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (c(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: le
    }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = oe.pop,
        de = oe.sort,
        he = oe.splice,
        ge = "[\\x20\\t\\r\\n\\f]",
        ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
    ce.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    };
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function p(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    ce.escapeSelector = function(e) {
        return (e + "").replace(f, p)
    };
    var ye = C,
        me = s;
    ! function() {
        var e, b, w, o, a, T, r, C, d, i, k = me,
            S = ce.expando,
            E = 0,
            n = 0,
            s = W(),
            c = W(),
            u = W(),
            h = W(),
            l = function(e, t) {
                return e === t && (a = !0), 0
            },
            f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
            g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
            v = new RegExp(ge + "+", "g"),
            y = new RegExp("^" + ge + "*," + ge + "*"),
            m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
            x = new RegExp(ge + "|>"),
            j = new RegExp(g),
            A = new RegExp("^" + t + "$"),
            D = {
                ID: new RegExp("^#(" + t + ")"),
                CLASS: new RegExp("^\\.(" + t + ")"),
                TAG: new RegExp("^(" + t + "|[*])"),
                ATTR: new RegExp("^" + p),
                PSEUDO: new RegExp("^" + g),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + f + ")$", "i"),
                needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
            },
            N = /^(?:input|select|textarea|button)$/i,
            q = /^h\d$/i,
            L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            H = /[+~]/,
            O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
            P = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            M = function() {
                V()
            },
            R = J(function(e) {
                return !0 === e.disabled && fe(e, "fieldset")
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType
        } catch (e) {
            k = {
                apply: function(e, t) {
                    me.apply(e, ae.call(t))
                },
                call: function(e) {
                    me.apply(e, ae.call(arguments, 1))
                }
            }
        }

        function I(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (V(e), e = e || T, C)) {
                if (11 !== p && (u = L.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return k.call(n, a), n
                        } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n
                    } else {
                        if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n
                    }
                if (!(h[t + " "] || d && d.test(t))) {
                    if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
                        (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return k.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        h(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r)
        }

        function W() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function F(e) {
            return e[S] = !0, e
        }

        function $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function B(t) {
            return function(e) {
                return fe(e, "input") && e.type === t
            }
        }

        function _(t) {
            return function(e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t
            }
        }

        function z(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function X(a) {
            return F(function(o) {
                return o = +o, F(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function U(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function V(e) {
            var t, n = e ? e.ownerDocument || e : ye;
            return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function(e) {
                return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length
            }), le.disconnectedMatch = $(function(e) {
                return i.call(e, "*")
            }), le.scope = $(function() {
                return T.querySelectorAll(":scope")
            }), le.cssHas = $(function() {
                try {
                    return T.querySelector(":has(*,:jqfake)"), !1
                } catch (e) {
                    return !0
                }
            }), le.getById ? (b.filter.ID = function(e) {
                var t = e.replace(O, P);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function(e) {
                var n = e.replace(O, P);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }, b.find.CLASS = function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
            }, d = [], $(function(e) {
                var t;
                r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
            }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function(e, t) {
                if (e === t) return a = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
            }), T
        }
        for (e in I.matches = function(e, t) {
                return I(e, null, null, t)
            }, I.matchesSelector = function(e, t) {
                if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
                    var n = i.call(e, t);
                    if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    h(t, !0)
                }
                return 0 < I(t, T, null, [e]).length
            }, I.contains = function(e, t) {
                return (e.ownerDocument || e) != T && V(e), ce.contains(e, t)
            }, I.attr = function(e, t) {
                (e.ownerDocument || e) != T && V(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== r ? r : e.getAttribute(t)
            }, I.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ce.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) he.call(e, n[r], 1)
                }
                return o = null, e
            }, ce.fn.uniqueSort = function() {
                return this.pushStack(ce.uniqueSort(ae.apply(this)))
            }, (b = ce.expr = {
                cacheLength: 50,
                createPseudo: F,
                match: D,
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
                        return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(O, P).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return fe(e, t)
                        }
                    },
                    CLASS: function(e) {
                        var t = s[e + " "];
                        return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = I.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(d, e, t, h, g) {
                        var v = "nth" !== d.slice(0, 3),
                            y = "last" !== d.slice(-4),
                            m = "of-type" === e;
                        return 1 === h && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                c = m && e.nodeName.toLowerCase(),
                                f = !n && !m,
                                p = !1;
                            if (l) {
                                if (v) {
                                    while (u) {
                                        o = e;
                                        while (o = o[u])
                                            if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                                        s = u = "only" === d && !s && "nextSibling"
                                    }
                                    return !0
                                }
                                if (s = [y ? l.firstChild : l.lastChild], y && f) {
                                    p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if (1 === o.nodeType && ++p && o === e) {
                                            i[d] = [E, a, p];
                                            break
                                        }
                                } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p)
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
                                return (p -= g) === h || p % h == 0 && 0 <= p / h
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: F(function(e) {
                        var r = [],
                            i = [],
                            s = ne(e.replace(ve, "$1"));
                        return s[S] ? F(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: F(function(t) {
                        return function(e) {
                            return 0 < I(t, e).length
                        }
                    }),
                    contains: F(function(t) {
                        return t = t.replace(O, P),
                            function(e) {
                                return -1 < (e.textContent || ce.text(e)).indexOf(t)
                            }
                    }),
                    lang: F(function(n) {
                        return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = ie.location && ie.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === r
                    },
                    focus: function(e) {
                        return e === function() {
                            try {
                                return T.activeElement
                            } catch (e) {}
                        }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: z(!1),
                    disabled: z(!0),
                    checked: function(e) {
                        return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return q.test(e.nodeName)
                    },
                    input: function(e) {
                        return N.test(e.nodeName)
                    },
                    button: function(e) {
                        return fe(e, "input") && "button" === e.type || fe(e, "button")
                    },
                    text: function(e) {
                        var t;
                        return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: X(function() {
                        return [0]
                    }),
                    last: X(function(e, t) {
                        return [t - 1]
                    }),
                    eq: X(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: X(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: X(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: X(function(e, t, n) {
                        var r;
                        for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: X(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = B(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = _(e);

        function G() {}

        function Y(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(ve, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
        }

        function Q(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function J(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = n++;
            return e.first ? function(e, t, n) {
                while (e = e[s])
                    if (1 === e.nodeType || c) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o = [E, f];
                if (n) {
                    while (e = e[s])
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    while (e = e[s])
                        if (1 === e.nodeType || c)
                            if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;
                            else {
                                if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
                                if ((i[l] = o)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function K(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Z(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function ee(d, h, g, v, y, e) {
            return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function(e, t, n, r) {
                var i, o, a, s, u = [],
                    l = [],
                    c = t.length,
                    f = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    p = !d || !e && h ? f : Z(f, u, d, n, r);
                if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
                    i = Z(s, l), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = s.length;
                            while (o--)(a = s[o]) && i.push(p[o] = a);
                            y(null, s = [], i, r)
                        }
                        o = s.length;
                        while (o--)(a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s)
            })
        }

        function te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function(e) {
                    return e === i
                }, a, !0), l = J(function(e) {
                    return -1 < se.call(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [J(K(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
                    }
                    c.push(t)
                }
            return K(c)
        }

        function ne(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = u[e + " "];
            if (!a) {
                t || (t = Y(e)), n = t.length;
                while (n--)(a = te(t[n]))[S] ? i.push(a) : o.push(a);
                (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = E += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == T || (V(o), n = !C);
                            while (s = v[a++])
                                if (s(o, t || T, n)) {
                                    k.call(r, o);
                                    break
                                }
                            i && (E = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                            f = Z(f)
                        }
                        k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
                    }
                    return i && (E = h, w = p), c
                }, m ? F(r) : r))).selector = e
            }
            return a
        }

        function re(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && Y(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = D.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n
        }
        G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort
    }();
    var d = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && ce(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        h = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        b = ce.expr.match.needsContext,
        w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function T(e, n, r) {
        return v(n) ? ce.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? ce.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? ce.grep(e, function(e) {
            return -1 < se.call(n, e) !== r
        }) : ce.filter(n, e, r)
    }
    ce.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ce.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (ce.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
            return 1 < r ? ce.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || k, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t))
                    for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this)
    }).prototype = ce.fn, k = ce(C);
    var E = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    ce.fn.extend({
        has: function(e) {
            var t = ce(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ce.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && ce(e);
            if (!b.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ce.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return h((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return h(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes))
        }
    }, function(r, i) {
        ce.fn[r] = function(e, t) {
            var n = ce.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function L(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    ce.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }), n) : ce.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        ce.each(e, function(e, t) {
                            v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return ce.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < ce.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, ce.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
                    ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return ce.Deferred(function(r) {
                            ce.each(o, function(e, t) {
                                var n = v(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t))
                            }
                        }
                        return ce.Deferred(function(e) {
                            o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ce.extend(e, a) : a
                    }
                },
                s = {};
            return ce.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = ae.call(arguments),
                o = ce.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
            while (t--) L(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function(e, t) {
        ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, ce.readyException = function(e) {
        ie.setTimeout(function() {
            throw e
        })
    };
    var O = ce.Deferred();

    function P() {
        C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready()
    }
    ce.fn.ready = function(e) {
        return O.then(e)["catch"](function(e) {
            ce.readyException(e)
        }), this
    }, ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
        }
    }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
    var M = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n))
                for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ce(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        R = /^-ms-/,
        I = /-([a-z])/g;

    function W(e, t) {
        return t.toUpperCase()
    }

    function F(e) {
        return e.replace(R, "ms-").replace(I, W)
    }
    var $ = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function B() {
        this.expando = ce.expando + B.uid++
    }
    B.uid = 1, B.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[F(t)] = n;
            else
                for (r in t) i[F(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var _ = new B,
        z = new B,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        U = /[A-Z]/g;

    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                z.set(e, t, n)
            } else n = void 0;
        return n
    }
    ce.extend({
        hasData: function(e) {
            return z.hasData(e) || _.hasData(e)
        },
        data: function(e, t, n) {
            return z.access(e, t, n)
        },
        removeData: function(e, t) {
            z.remove(e, t)
        },
        _data: function(e, t, n) {
            return _.access(e, t, n)
        },
        _removeData: function(e, t) {
            _.remove(e, t)
        }
    }), ce.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
                    _.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                z.set(this, n)
            }) : M(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                this.each(function() {
                    z.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                z.remove(this, e)
            })
        }
    }), ce.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ce.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ce._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                ce.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return _.get(e, n) || _.access(e, n, {
                empty: ce.Callbacks("once memory").add(function() {
                    _.remove(e, [t + "queue", n])
                })
            })
        }
    }), ce.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ce.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ce.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
        Q = ["Top", "Right", "Bottom", "Left"],
        J = C.documentElement,
        K = function(e) {
            return ce.contains(e.ownerDocument, e)
        },
        Z = {
            composed: !0
        };
    J.getRootNode && (K = function(e) {
        return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    });
    var ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
    };

    function te(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return ce.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, ce.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ne = {};

    function re(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    ce.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? ce(this).show() : ce(this).hide()
            })
        }
    });
    var xe, be, we = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i;
    xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
    var ke = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function Se(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
    }

    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
    }
    ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
    var je = /<|&#?\w+;/;

    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
                else if (je.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            ce.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < ce.inArray(o, r)) i && i.push(o);
            else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
            c = 0;
            while (o = a[c++]) Ce.test(o.type || "") && n.push(o)
        }
        return f
    }
    var De = /^([^.]*)(?:\.(.+)|)/;

    function Ne() {
        return !0
    }

    function qe() {
        return !1
    }

    function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return ce().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ce.guid++)), e.each(function() {
            ce.event.add(this, t, i, r, n)
        })
    }

    function He(e, r, t) {
        t ? (_.set(e, r, !1), ce.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n = _.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)(ce.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
                } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne)
            }
        })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
    }
    ce.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
            if ($(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(D) || [""]).length;
                while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ce.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(D) || [""]).length;
                while (l--)
                    if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = ce.event.fix(e),
                l = (_.get(this, "events") || Object.create(null))[u.type] || [],
                c = ce.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = ce.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[ce.expando] ? e : new ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ce.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ce.Event = function(e, t) {
        if (!(this instanceof ce.Event)) return new ce.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0
    }, ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: qe,
        isPropagationStopped: qe,
        isImmediatePropagationStopped: qe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp), ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(r, i) {
        function o(e) {
            if (C.documentMode) {
                var t = _.get(this, "handle"),
                    n = ce.event.fix(e);
                n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)
            } else ce.event.simulate(i, e.target, ce.event.fix(e))
        }
        ce.event.special[r] = {
            setup: function() {
                var e;
                if (He(this, r, !0), !C.documentMode) return !1;
                (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1)
            },
            trigger: function() {
                return He(this, r), !0
            },
            teardown: function() {
                var e;
                if (!C.documentMode) return !1;
                (e = _.get(this, i) - 1) ? _.set(this, i, e): (this.removeEventListener(i, o), _.remove(this, i))
            },
            _default: function(e) {
                return _.get(e.target, r)
            },
            delegateType: i
        }, ce.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = _.get(t, i);
                n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = _.get(t, i) - 1;
                n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i))
            }
        }
    }), ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        ce.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), ce.fn.extend({
        on: function(e, t, n, r) {
            return Le(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Le(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function() {
                ce.event.remove(this, e, n, t)
            })
        }
    });
    var Oe = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Re(e, t) {
        return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
    }

    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events))
                for (i in _.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
            z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a))
        }
    }

    function $e(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = v(d);
        if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
        });
        if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : m(u.textContent.replace(Me, ""), u, l))
        }
        return n
    }

    function Be(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    ce.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = K(e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
                else Fe(e, c);
            return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[_.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0
                    }
                    n[z.expando] && (n[z.expando] = void 0)
                }
        }
    }), ce.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return M(this, function(e) {
                return void 0 === e ? ce.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return $e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ce.clone(this, e, t)
            })
        },
        html: function(e) {
            return M(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return $e(this, arguments, function(e) {
                var t = this.parentNode;
                ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        ce.fn[e] = function(e) {
            for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
        ze = /^--/,
        Xe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = ie), t.getComputedStyle(e)
        },
        Ue = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ve = new RegExp(Q.join("|"), "i");

    function Ge(e, t, n) {
        var r, i, o, a, s = ze.test(t),
            u = e.style;
        return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ye(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = C.createElement("div"),
            l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"],
        Je = C.createElement("div").style,
        Ke = {};

    function Ze(e) {
        var t = ce.cssProps[e] || Ke[e];
        return t || (e in Je ? e : Ke[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
            while (n--)
                if ((e = Qe[n] + t) in Je) return e
        }(e) || e)
    }
    var et = /^(none|table(?!-c[ea]).+)/,
        tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        nt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function rt(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
    }

    function ot(e, t, n) {
        var r = Xe(e),
            i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
            o = i,
            a = Ge(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i)
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ge(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = F(t),
                    u = ze.test(t),
                    l = e.style;
                if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = F(t);
            return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), ce.each(["height", "width"], function(e, u) {
        ce.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function() {
                    return ot(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Xe(e),
                    o = !le.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
                    s = n ? it(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s)
            }
        }
    }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        ce.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (ce.cssHooks[i + o].set = rt)
    }), ce.fn.extend({
        css: function(e, t) {
            return M(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((ce.Tween = at).prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
        }
    }).init.prototype = at.prototype, (at.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ce.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ce.fx = at.prototype.init, ce.fx.step = {};
    var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;

    function dt() {
        ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick())
    }

    function ht() {
        return ie.setTimeout(function() {
            st = void 0
        }), st = Date.now()
    }

    function gt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function yt(o, e, t) {
        var n, a, r = 0,
            i = yt.prefilters.length,
            s = ce.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: ce.extend({}, e),
                opts: ce.extend(!0, {
                    specialEasing: {},
                    easing: ce.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: st || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, Y.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            v(e) ? (t = e, e = ["*"]) : e = e.match(D);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ee(e),
                v = _.get(e, "fxshow");
            for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ft.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || ce.style(e, r)
                }
            if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && re([e], !0), p.done(function() {
                    for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r])
                })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }), ce.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }, r
    }, ce.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ce.isEmptyObject(t),
                o = ce.speed(e, n, r),
                a = function() {
                    var e = yt(this, ce.extend({}, t), o);
                    (i || _.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = ce.timers,
                    r = _.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || ce.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = _.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = ce.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), ce.each(["toggle", "show", "hide"], function(e, r) {
        var i = ce.fn[r];
        ce.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }), ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        ce.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), ce.timers = [], ce.fx.tick = function() {
        var e, t = 0,
            n = ce.timers;
        for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ce.fx.stop(), st = void 0
    }, ce.fx.timer = function(e) {
        ce.timers.push(e), ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function() {
        ut || (ut = !0, dt())
    }, ce.fx.stop = function() {
        ut = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fn.delay = function(r, e) {
        return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = ie.setTimeout(e, r);
            t.stop = function() {
                ie.clearTimeout(n)
            }
        })
    }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
    var mt, xt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function(e, t) {
            return M(this, ce.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ce.removeAttr(this, e)
            })
        }
    }), ce.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.radioValue && "radio" === t && fe(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(D);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), mt = {
        set: function(e, t, n) {
            return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || ce.find.attr;
        xt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;

    function Tt(e) {
        return (e.match(D) || []).join(" ")
    }

    function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
    }
    ce.fn.extend({
        prop: function(e, t) {
            return M(this, ce.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ce.propFix[e] || e]
            })
        }
    }), ce.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), le.optSelected || (ce.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this
    }), ce.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).addClass(t.call(this, e, Ct(this)))
            }) : (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).removeClass(t.call(this, e, Ct(this)))
            }) : arguments.length ? (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function() {
                if (s)
                    for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var St = /\r/g;
    ce.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = v(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : Tt(ce.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                            if (t = ce(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = ce.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t)
            }
        }, le.checkOn || (ce.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Et = ie.location,
        jt = {
            guid: Date.now()
        },
        At = /\?/;
    ce.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new ie.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Dt = /^(?:focusinfocus|focusoutblur)$/,
        Nt = function(e) {
            e.stopPropagation()
        };
    ce.extend(ce.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || C],
                d = ue.call(e, "type") ? e.type : e,
                h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !y(n)) {
                    for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = ce.extend(new ce.Event, n, {
                type: e,
                isSimulated: !0
            });
            ce.event.trigger(r, null, t)
        }
    }), ce.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ce.event.trigger(e, t, n, !0)
        }
    });
    var qt = /\[\]$/,
        Lt = /\r?\n/g,
        Ht = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;

    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) ce.each(e, function(e, t) {
            r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== x(e)) i(n, e);
        else
            for (t in e) Pt(n + "[" + t + "]", e[t], r, i)
    }
    ce.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Pt(n, e[n], t, i);
        return r.join("&")
    }, ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = ce(this).val();
                return null == n ? null : Array.isArray(n) ? ce.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Mt = /%20/g,
        Rt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        Bt = {},
        _t = {},
        zt = "*/".concat("*"),
        Xt = C.createElement("a");

    function Ut(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(D) || [];
            if (v(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Vt(t, i, o, a) {
        var s = {},
            u = t === _t;

        function l(e) {
            var r;
            return s[e] = !0, ce.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Gt(e, t) {
        var n, r, i = ce.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ce.extend(!0, e, r), e
    }
    Xt.href = Et.href, ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
        },
        ajaxPrefilter: Ut(Bt),
        ajaxTransport: Ut(_t),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
                x = ce.Deferred(),
                b = ce.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
            for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = ie.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return ce.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ce.get(e, void 0, t, "script")
        }
    }), ce.each(["get", "post"], function(e, i) {
        ce[i] = function(e, t, n, r) {
            return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, ce.isPlainObject(e) && e))
        }
    }), ce.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), ce._evalUrl = function(e, t, n) {
        return ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                ce.globalEval(e, t, n)
            }
        })
    }, ce.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                ce(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = ce(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                ce(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ce(this).replaceWith(this.childNodes)
            }), this
        }
    }), ce.expr.pseudos.hidden = function(e) {
        return !ce.expr.pseudos.visible(e)
    }, ce.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ce.ajaxSettings.xhr = function() {
        try {
            return new ie.XMLHttpRequest
        } catch (e) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Qt = ce.ajaxSettings.xhr();
    le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i) {
        var o, a;
        if (le.cors || Qt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && ie.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), ce.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ce.globalEval(e), e
            }
        }
    }), ce.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ce.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = ce("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Jt, Kt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || ce.expando + "_" + jt.guid++;
            return this[e] = !0, e
        }
    }), ce.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || ce.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0
        }), "script"
    }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
        var r, i, o
    }, ce.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ce.expr.pseudos.animated = function(t) {
        return ce.grep(ce.timers, function(e) {
            return t === e.elem
        }).length
    }, ce.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = ce.css(e, "position"),
                c = ce(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, ce.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ce.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ce.css(r, "marginTop", !0),
                    left: t.left - i.left - ce.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
                return e || J
            })
        }
    }), ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function(e) {
            return M(this, function(e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), ce.each(["top", "left"], function(e, n) {
        ce.cssHooks[n] = Ye(le.pixelPosition, function(e, t) {
            if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t
        })
    }), ce.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        ce.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            ce.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return M(this, function(e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ce.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ce.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }
    }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        ce.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ce.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(ae.call(arguments)))
        }).guid = e.guid = e.guid || ce.guid++, i
    }, ce.holdReady = function(e) {
        e ? ce.readyWait++ : ce.ready(!0)
    }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e) {
        var t = ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, ce.trim = function(e) {
        return null == e ? "" : (e + "").replace(en, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce
    });
    var tn = ie.jQuery,
        nn = ie.$;
    return ce.noConflict = function(e) {
        return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
    }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});
/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    const t = new Map,
        e = {
            set(e, i, n) {
                t.has(e) || t.set(e, new Map);
                const s = t.get(e);
                s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
            },
            get: (e, i) => t.has(e) && t.get(e).get(i) || null,
            remove(e, i) {
                if (!t.has(e)) return;
                const n = t.get(e);
                n.delete(i), 0 === n.size && t.delete(e)
            }
        },
        i = "transitionend",
        n = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))), t),
        s = t => {
            t.dispatchEvent(new Event(i))
        },
        o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null,
        a = t => {
            if (!o(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1
            }
            return e
        },
        l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        c = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
        },
        h = () => {},
        d = t => {
            t.offsetHeight
        },
        u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        f = [],
        p = () => "rtl" === document.documentElement.dir,
        m = t => {
            var e;
            e = () => {
                const e = u();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => {
                for (const t of f) t()
            })), f.push(e)) : e()
        },
        g = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
        _ = (t, e, n = !0) => {
            if (!n) return void g(t);
            const o = (t => {
                if (!t) return 0;
                let {
                    transitionDuration: e,
                    transitionDelay: i
                } = window.getComputedStyle(t);
                const n = Number.parseFloat(e),
                    s = Number.parseFloat(i);
                return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            })(e) + 5;
            let r = !1;
            const a = ({
                target: n
            }) => {
                n === e && (r = !0, e.removeEventListener(i, a), g(t))
            };
            e.addEventListener(i, a), setTimeout((() => {
                r || s(e)
            }), o)
        },
        b = (t, e, i, n) => {
            const s = t.length;
            let o = t.indexOf(e);
            return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
        },
        v = /[^.]*(?=\..*)\.|.*/,
        y = /\..*/,
        w = /::\d+$/,
        A = {};
    let E = 1;
    const T = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++
    }

    function x(t) {
        const e = O(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e]
    }

    function k(t, e, i = null) {
        return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
    }

    function L(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e || i;
        let o = I(t);
        return C.has(o) || (o = t), [n, s, o]
    }

    function S(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            r = t(r)
        }
        const l = x(t),
            c = l[a] || (l[a] = {}),
            h = k(c, r, o ? i : null);
        if (h) return void(h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")),
            u = o ? function(t, e, i) {
                return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (let {
                            target: r
                        } = s; r && r !== this; r = r.parentNode)
                        for (const a of o)
                            if (a === r) return P(s, {
                                delegateTarget: r
                            }), n.oneOff && N.off(t, s.type, e, i), i.apply(r, [s])
                }
            }(t, i, r) : function(t, e) {
                return function i(n) {
                    return P(n, {
                        delegateTarget: t
                    }), i.oneOff && N.off(t, n.type, e), e.apply(t, [n])
                }
            }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function D(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
    }

    function $(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s)) o.includes(n) && D(t, e, i, r.callable, r.delegationSelector)
    }

    function I(t) {
        return t = t.replace(y, ""), T[t] || t
    }
    const N = {
        on(t, e, i, n) {
            S(t, e, i, n, !1)
        },
        one(t, e, i, n) {
            S(t, e, i, n, !0)
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h)
                    for (const i of Object.keys(l)) $(t, l, i, e.slice(1));
                for (const [i, n] of Object.entries(c)) {
                    const s = i.replace(w, "");
                    a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector)
                }
            } else {
                if (!Object.keys(c).length) return;
                D(t, l, r, o, s ? i : null)
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null,
                o = !0,
                r = !0,
                a = !1;
            e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            const l = P(new Event(e, {
                bubbles: o,
                cancelable: !0
            }), i);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
        }
    };

    function P(t, e = {}) {
        for (const [i, n] of Object.entries(e)) try {
            t[i] = n
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: () => n
            })
        }
        return t
    }

    function M(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function j(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }
    const F = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${j(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${j(e)}`)
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const n of i) {
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = M(t.dataset[n])
            }
            return e
        },
        getDataAttribute: (t, e) => M(t.getAttribute(`data-bs-${j(e)}`))
    };
    class H {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? F.getDataAttribute(e, "config") : {};
            return { ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? F.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [n, s] of Object.entries(e)) {
                const e = t[n],
                    r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
            }
            var i
        }
    }
    class W extends H {
        constructor(t, i) {
            super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        static getInstance(t) {
            return e.get(r(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.3.2"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const B = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? n(i.trim()) : null
            }
            return e
        },
        z = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
            parents(t, e) {
                const i = [];
                let n = t.parentNode.closest(e);
                for (; n;) i.push(n), n = n.parentNode.closest(e);
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
                return this.find(e, t).filter((t => !l(t) && a(t)))
            },
            getSelectorFromElement(t) {
                const e = B(t);
                return e && z.findOne(e) ? e : null
            },
            getElementFromSelector(t) {
                const e = B(t);
                return e ? z.findOne(e) : null
            },
            getMultipleElementsFromSelector(t) {
                const e = B(t);
                return e ? z.find(e) : []
            }
        },
        R = (t, e = "hide") => {
            const i = `click.dismiss${t.EVENT_KEY}`,
                n = t.NAME;
            N.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
                if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
                const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
                t.getOrCreateInstance(s)[e]()
            }))
        },
        q = ".bs.alert",
        V = `close${q}`,
        K = `closed${q}`;
    class Q extends W {
        static get NAME() {
            return "alert"
        }
        close() {
            if (N.trigger(this._element, V).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(), N.trigger(this._element, K), this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    R(Q, "close"), m(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends W {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }
    N.on(document, "click.bs.button.data-api", X, (t => {
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle()
    })), m(Y);
    const U = ".bs.swipe",
        G = `touchstart${U}`,
        J = `touchmove${U}`,
        Z = `touchend${U}`,
        tt = `pointerdown${U}`,
        et = `pointerup${U}`,
        it = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        },
        nt = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
        };
    class st extends H {
        constructor(t, e) {
            super(), this._element = t, t && st.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }
        static get Default() {
            return it
        }
        static get DefaultType() {
            return nt
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            N.off(this._element, U)
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, tt, (t => this._start(t))), N.on(this._element, et, (t => this._end(t))), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t => this._start(t))), N.on(this._element, J, (t => this._move(t))), N.on(this._element, Z, (t => this._end(t))))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const ot = ".bs.carousel",
        rt = ".data-api",
        at = "next",
        lt = "prev",
        ct = "left",
        ht = "right",
        dt = `slide${ot}`,
        ut = `slid${ot}`,
        ft = `keydown${ot}`,
        pt = `mouseenter${ot}`,
        mt = `mouseleave${ot}`,
        gt = `dragstart${ot}`,
        _t = `load${ot}${rt}`,
        bt = `click${ot}${rt}`,
        vt = "carousel",
        yt = "active",
        wt = ".active",
        At = ".carousel-item",
        Et = wt + At,
        Tt = {
            ArrowLeft: ht,
            ArrowRight: ct
        },
        Ct = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
        },
        Ot = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };
    class xt extends W {
        constructor(t, e) {
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle()
        }
        static get Default() {
            return Ct
        }
        static get DefaultType() {
            return Ot
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(at)
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }
        prev() {
            this._slide(lt)
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval()
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ut, (() => this.cycle())) : this.cycle())
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void N.one(this._element, ut, (() => this.to(t)));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? at : lt;
            this._slide(n, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t
        }
        _addEventListeners() {
            this._config.keyboard && N.on(this._element, ft, (t => this._keydown(t))), "hover" === this._config.pause && (N.on(this._element, pt, (() => this.pause())), N.on(this._element, mt, (() => this._maybeEnableCycle()))), this._config.touch && st.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const t of z.find(".carousel-item img", this._element)) N.on(t, gt, (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(ct)),
                rightCallback: () => this._slide(this._directionToOrder(ht)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new st(this._element, t)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Tt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = z.findOne(wt, this._indicatorsElement);
            e.classList.remove(yt), e.removeAttribute("aria-current");
            const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(yt), i.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(),
                n = t === at,
                s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s),
                r = e => N.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r(dt).defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end",
                c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => {
                s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), this._isSliding = !1, r(ut)
            }), i, this._isAnimated()), a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return z.findOne(Et, this._element)
        }
        _getItems() {
            return z.find(At, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }
        _directionToOrder(t) {
            return p() ? t === ct ? lt : at : t === ct ? at : lt
        }
        _orderToDirection(t) {
            return p() ? t === lt ? ct : ht : t === lt ? ht : ct
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = xt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else e.to(t)
            }))
        }
    }
    N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", (function(t) {
        const e = z.getElementFromSelector(this);
        if (!e || !e.classList.contains(vt)) return;
        t.preventDefault();
        const i = xt.getOrCreateInstance(e),
            n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
    })), N.on(window, _t, (() => {
        const t = z.find('[data-bs-ride="carousel"]');
        for (const e of t) xt.getOrCreateInstance(e)
    })), m(xt);
    const kt = ".bs.collapse",
        Lt = `show${kt}`,
        St = `shown${kt}`,
        Dt = `hide${kt}`,
        $t = `hidden${kt}`,
        It = `click${kt}.data-api`,
        Nt = "show",
        Pt = "collapse",
        Mt = "collapsing",
        jt = `:scope .${Pt} .${Pt}`,
        Ft = '[data-bs-toggle="collapse"]',
        Ht = {
            parent: null,
            toggle: !0
        },
        Wt = {
            parent: "(null|element)",
            toggle: "boolean"
        };
    class Bt extends W {
        constructor(t, e) {
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = z.find(Ft);
            for (const t of i) {
                const e = z.getSelectorFromElement(t),
                    i = z.find(e).filter((t => t === this._element));
                null !== e && i.length && this._triggerArray.push(t)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return Ht
        }
        static get DefaultType() {
            return Wt
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => Bt.getOrCreateInstance(t, {
                    toggle: !1
                })))), t.length && t[0]._isTransitioning) return;
            if (N.trigger(this._element, Lt).defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt, Nt), this._element.style[e] = "", N.trigger(this._element, St)
            }), this._element, !0), this._element.style[e] = `${this._element[i]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (N.trigger(this._element, Dt).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
            for (const t of this._triggerArray) {
                const e = z.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt), N.trigger(this._element, $t)
            }), this._element, !0)
        }
        _isShown(t = this._element) {
            return t.classList.contains(Nt)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Ft);
            for (const e of t) {
                const t = z.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }
        _getFirstLevelChildren(t) {
            const e = z.find(jt, this._config.parent);
            return z.find(t, this._config.parent).filter((t => !e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function() {
                const i = Bt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }))
        }
    }
    N.on(document, It, Ft, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of z.getMultipleElementsFromSelector(this)) Bt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle()
    })), m(Bt);
    var zt = "top",
        Rt = "bottom",
        qt = "right",
        Vt = "left",
        Kt = "auto",
        Qt = [zt, Rt, qt, Vt],
        Xt = "start",
        Yt = "end",
        Ut = "clippingParents",
        Gt = "viewport",
        Jt = "popper",
        Zt = "reference",
        te = Qt.reduce((function(t, e) {
            return t.concat([e + "-" + Xt, e + "-" + Yt])
        }), []),
        ee = [].concat(Qt, [Kt]).reduce((function(t, e) {
            return t.concat([e, e + "-" + Xt, e + "-" + Yt])
        }), []),
        ie = "beforeRead",
        ne = "read",
        se = "afterRead",
        oe = "beforeMain",
        re = "main",
        ae = "afterMain",
        le = "beforeWrite",
        ce = "write",
        he = "afterWrite",
        de = [ie, ne, se, oe, re, ae, le, ce, he];

    function ue(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function fe(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function pe(t) {
        return t instanceof fe(t).Element || t instanceof Element
    }

    function me(t) {
        return t instanceof fe(t).HTMLElement || t instanceof HTMLElement
    }

    function ge(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot)
    }
    const _e = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        },
        effect: function(t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function() {
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                                return t[e] = "", t
                            }), {});
                        me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                            n.removeAttribute(t)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function be(t) {
        return t.split("-")[0]
    }
    var ve = Math.max,
        ye = Math.min,
        we = Math.round;

    function Ae() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map((function(t) {
            return t.brand + "/" + t.version
        })).join(" ") : navigator.userAgent
    }

    function Ee() {
        return !/^((?!chrome|android).)*safari/i.test(Ae())
    }

    function Te(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(),
            s = 1,
            o = 1;
        e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
        var r = (pe(t) ? fe(t) : window).visualViewport,
            a = !Ee() && i,
            l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
            c = (n.top + (a && r ? r.offsetTop : 0)) / o,
            h = n.width / s,
            d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        }
    }

    function Ce(t) {
        var e = Te(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function Oe(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ge(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function xe(t) {
        return fe(t).getComputedStyle(t)
    }

    function ke(t) {
        return ["table", "td", "th"].indexOf(ue(t)) >= 0
    }

    function Le(t) {
        return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Se(t) {
        return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t)
    }

    function De(t) {
        return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null
    }

    function $e(t) {
        for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) i = De(i);
        return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Ae());
            if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
            var i = Se(t);
            for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0;) {
                var n = xe(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function Ie(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function Ne(t, e, i) {
        return ve(t, ye(e, i))
    }

    function Pe(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }

    function Me(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t, e
        }), {})
    }
    const je = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = be(i.placement),
                l = Ie(a),
                c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                        return Pe("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : t) ? t : Me(t, Qt))
                    }(s.padding, i),
                    d = Ce(o),
                    u = "y" === l ? zt : Vt,
                    f = "y" === l ? Rt : qt,
                    p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                    m = r[l] - i.rects.reference[l],
                    g = $e(o),
                    _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                    b = p / 2 - m / 2,
                    v = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + b,
                    A = Ne(v, w, y),
                    E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e)
            }
        },
        effect: function(t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function Fe(t) {
        return t.split("-")[1]
    }
    var He = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function We(t) {
        var e, i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.variation,
            r = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            c = t.adaptive,
            h = t.roundOffsets,
            d = t.isFixed,
            u = r.x,
            f = void 0 === u ? 0 : u,
            p = r.y,
            m = void 0 === p ? 0 : p,
            g = "function" == typeof h ? h({
                x: f,
                y: m
            }) : {
                x: f,
                y: m
            };
        f = g.x, m = g.y;
        var _ = r.hasOwnProperty("x"),
            b = r.hasOwnProperty("y"),
            v = Vt,
            y = zt,
            w = window;
        if (c) {
            var A = $e(i),
                E = "clientHeight",
                T = "clientWidth";
            A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1)
        }
        var C, O = Object.assign({
                position: a
            }, c && He),
            x = !0 === h ? function(t, e) {
                var i = t.x,
                    n = t.y,
                    s = e.devicePixelRatio || 1;
                return {
                    x: we(i * s) / s || 0,
                    y: we(n * s) / s || 0
                }
            }({
                x: f,
                y: m
            }, fe(i)) : {
                x: f,
                y: m
            };
        return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e))
    }
    const Be = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: be(e.placement),
                    variation: Fe(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                    isFixed: "fixed" === e.options.strategy
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    };
    var ze = {
        passive: !0
    };
    const Re = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = fe(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function(t) {
                    t.addEventListener("scroll", i.update, ze)
                })), a && l.addEventListener("resize", i.update, ze),
                function() {
                    o && c.forEach((function(t) {
                        t.removeEventListener("scroll", i.update, ze)
                    })), a && l.removeEventListener("resize", i.update, ze)
                }
        },
        data: {}
    };
    var qe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function Ve(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return qe[t]
        }))
    }
    var Ke = {
        start: "end",
        end: "start"
    };

    function Qe(t) {
        return t.replace(/start|end/g, (function(t) {
            return Ke[t]
        }))
    }

    function Xe(t) {
        var e = fe(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function Ye(t) {
        return Te(Le(t)).left + Xe(t).scrollLeft
    }

    function Ue(t) {
        var e = xe(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function Ge(t) {
        return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t))
    }

    function Je(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ge(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = fe(n),
            r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Je(Se(r)))
    }

    function Ze(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function ti(t, e, i) {
        return e === Gt ? Ze(function(t, e) {
            var i = fe(t),
                n = Le(t),
                s = i.visualViewport,
                o = n.clientWidth,
                r = n.clientHeight,
                a = 0,
                l = 0;
            if (s) {
                o = s.width, r = s.height;
                var c = Ee();
                (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop)
            }
            return {
                width: o,
                height: r,
                x: a + Ye(t),
                y: l
            }
        }(t, i)) : pe(e) ? function(t, e) {
            var i = Te(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i
        }(e, i) : Ze(function(t) {
            var e, i = Le(t),
                n = Xe(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + Ye(t),
                l = -n.scrollTop;
            return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(Le(t)))
    }

    function ei(t) {
        var e, i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? be(s) : null,
            r = s ? Fe(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case zt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case Rt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case qt:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case Vt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var c = o ? Ie(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case Xt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Yt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }

    function ii(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.strategy,
            r = void 0 === o ? t.strategy : o,
            a = i.boundary,
            l = void 0 === a ? Ut : a,
            c = i.rootBoundary,
            h = void 0 === c ? Gt : c,
            d = i.elementContext,
            u = void 0 === d ? Jt : d,
            f = i.altBoundary,
            p = void 0 !== f && f,
            m = i.padding,
            g = void 0 === m ? 0 : m,
            _ = Pe("number" != typeof g ? g : Me(g, Qt)),
            b = u === Jt ? Zt : Jt,
            v = t.rects.popper,
            y = t.elements[p ? b : u],
            w = function(t, e, i, n) {
                var s = "clippingParents" === e ? function(t) {
                        var e = Je(Se(t)),
                            i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
                        return pe(i) ? e.filter((function(t) {
                            return pe(t) && Oe(t, i) && "body" !== ue(t)
                        })) : []
                    }(t) : [].concat(e),
                    o = [].concat(s, [i]),
                    r = o[0],
                    a = o.reduce((function(e, i) {
                        var s = ti(t, i, n);
                        return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e
                    }), ti(t, r, n));
                return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
            }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
            A = Te(t.elements.reference),
            E = ei({
                reference: A,
                element: v,
                strategy: "absolute",
                placement: s
            }),
            T = Ze(Object.assign({}, v, E)),
            C = u === Jt ? T : A,
            O = {
                top: w.top - C.top + _.top,
                bottom: C.bottom - w.bottom + _.bottom,
                left: w.left - C.left + _.left,
                right: C.right - w.right + _.right
            },
            x = t.modifiersData.offset;
        if (u === Jt && x) {
            var k = x[s];
            Object.keys(O).forEach((function(t) {
                var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
                    i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e
            }))
        }
        return O
    }

    function ni(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? ee : l,
            h = Fe(n),
            d = h ? a ? te : te.filter((function(t) {
                return Fe(t) === h
            })) : Qt,
            u = d.filter((function(t) {
                return c.indexOf(t) >= 0
            }));
        0 === u.length && (u = d);
        var f = u.reduce((function(e, i) {
            return e[i] = ii(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[be(i)], e
        }), {});
        return Object.keys(f).sort((function(t, e) {
            return f[t] - f[e]
        }))
    }
    const si = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function(t) {
                        if (be(t) === Kt) return [];
                        var e = Ve(t);
                        return [Qe(t), e, Qe(e)]
                    }(g) : [Ve(g)]), v = [g].concat(b).reduce((function(t, i) {
                        return t.concat(be(i) === Kt ? ni(e, {
                            placement: i,
                            boundary: h,
                            rootBoundary: d,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: m
                        }) : i)
                    }), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
                    var O = v[C],
                        x = be(O),
                        k = Fe(O) === Xt,
                        L = [zt, Rt].indexOf(x) >= 0,
                        S = L ? "width" : "height",
                        D = ii(e, {
                            placement: O,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c
                        }),
                        $ = L ? k ? qt : Vt : k ? Rt : zt;
                    y[S] > w[S] && ($ = Ve($));
                    var I = Ve($),
                        N = [];
                    if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every((function(t) {
                            return t
                        }))) {
                        T = O, E = !1;
                        break
                    }
                    A.set(O, N)
                }
                if (E)
                    for (var P = function(t) {
                            var e = v.find((function(e) {
                                var i = A.get(e);
                                if (i) return i.slice(0, t).every((function(t) {
                                    return t
                                }))
                            }));
                            if (e) return T = e, "break"
                        }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function oi(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function ri(t) {
        return [zt, qt, Rt, Vt].some((function(e) {
            return t[e] >= 0
        }))
    }
    const ai = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = ii(e, {
                        elementContext: "reference"
                    }),
                    a = ii(e, {
                        altBoundary: !0
                    }),
                    l = oi(r, n),
                    c = oi(a, s, o),
                    h = ri(l),
                    d = ri(c);
                e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d
                }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": d
                })
            }
        },
        li = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = ee.reduce((function(t, i) {
                        return t[i] = function(t, e, i) {
                            var n = be(t),
                                s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
                                o = "function" == typeof i ? i(Object.assign({}, e, {
                                    placement: t
                                })) : i,
                                r = o[0],
                                a = o[1];
                            return r = r || 0, a = (a || 0) * s, [Vt, qt].indexOf(n) >= 0 ? {
                                x: a,
                                y: r
                            } : {
                                x: r,
                                y: a
                            }
                        }(i, e.rects, o), t
                    }), {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
            }
        },
        ci = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = ei({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement
                })
            },
            data: {}
        },
        hi = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = ii(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h
                    }),
                    _ = be(e.placement),
                    b = Fe(e.placement),
                    v = !b,
                    y = Ie(_),
                    w = "x" === y ? "y" : "x",
                    A = e.modifiersData.popperOffsets,
                    E = e.rects.reference,
                    T = e.rects.popper,
                    C = "function" == typeof m ? m(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : m,
                    O = "number" == typeof C ? {
                        mainAxis: C,
                        altAxis: C
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, C),
                    x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                    k = {
                        x: 0,
                        y: 0
                    };
                if (A) {
                    if (o) {
                        var L, S = "y" === y ? zt : Vt,
                            D = "y" === y ? Rt : qt,
                            $ = "y" === y ? "height" : "width",
                            I = A[y],
                            N = I + g[S],
                            P = I - g[D],
                            M = f ? -T[$] / 2 : 0,
                            j = b === Xt ? E[$] : T[$],
                            F = b === Xt ? -T[$] : -E[$],
                            H = e.elements.arrow,
                            W = f && H ? Ce(H) : {
                                width: 0,
                                height: 0
                            },
                            B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            z = B[S],
                            R = B[D],
                            q = Ne(0, E[$], W[$]),
                            V = v ? E[$] / 2 - M - q - z - O.mainAxis : j - q - z - O.mainAxis,
                            K = v ? -E[$] / 2 + M + q + R + O.mainAxis : F + q + R + O.mainAxis,
                            Q = e.elements.arrow && $e(e.elements.arrow),
                            X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                            Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
                            U = I + K - Y,
                            G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
                        A[y] = G, k[y] = G - I
                    }
                    if (a) {
                        var J, Z = "x" === y ? zt : Vt,
                            tt = "x" === y ? Rt : qt,
                            et = A[w],
                            it = "y" === w ? "height" : "width",
                            nt = et + g[Z],
                            st = et - g[tt],
                            ot = -1 !== [zt, Vt].indexOf(_),
                            rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
                            at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
                            lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
                            ct = f && ot ? function(t, e, i) {
                                var n = Ne(t, e, i);
                                return n > i ? i : n
                            }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
                        A[w] = ct, k[w] = ct - et
                    }
                    e.modifiersData[n] = k
                }
            },
            requiresIfExists: ["offset"]
        };

    function di(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = me(e),
            r = me(e) && function(t) {
                var e = t.getBoundingClientRect(),
                    i = we(e.width) / t.offsetWidth || 1,
                    n = we(e.height) / t.offsetHeight || 1;
                return 1 !== i || 1 !== n
            }(e),
            a = Le(e),
            l = Te(t, r, i),
            c = {
                scrollLeft: 0,
                scrollTop: 0
            },
            h = {
                x: 0,
                y: 0
            };
        return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        }
    }

    function ui(t) {
        var e = new Map,
            i = new Set,
            n = [];

        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n)
                }
            })), n.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        })), t.forEach((function(t) {
            i.has(t.name) || s(t)
        })), n
    }
    var fi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function pi() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function mi(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? fi : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, fi, o),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function(i) {
                        var s = "function" == typeof i ? i(a.options) : i;
                        d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                            reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
                            popper: Je(e)
                        };
                        var r, c, u = function(t) {
                            var e = ui(t);
                            return de.reduce((function(t, i) {
                                return t.concat(e.filter((function(t) {
                                    return t.phase === i
                                })))
                            }), [])
                        }((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e, t
                        }), {}), Object.keys(c).map((function(t) {
                            return c[t]
                        }))));
                        return a.orderedModifiers = u.filter((function(t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function(t) {
                            var e = t.name,
                                i = t.options,
                                n = void 0 === i ? {} : i,
                                s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({
                                    state: a,
                                    name: e,
                                    instance: h,
                                    options: n
                                });
                                l.push(o || function() {})
                            }
                        })), h.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (pi(e, i)) {
                                a.rects = {
                                    reference: di(e, $e(i), "fixed" === a.options.strategy),
                                    popper: Ce(i)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o && (a = o({
                                            state: a,
                                            options: l,
                                            name: d,
                                            instance: h
                                        }) || a)
                                    } else a.reset = !1, n = -1
                            }
                        }
                    },
                    update: (s = function() {
                        return new Promise((function(t) {
                            h.forceUpdate(), t(a)
                        }))
                    }, function() {
                        return r || (r = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                r = void 0, t(s())
                            }))
                        }))), r
                    }),
                    destroy: function() {
                        d(), c = !0
                    }
                };
            if (!pi(t, e)) return h;

            function d() {
                l.forEach((function(t) {
                    return t()
                })), l = []
            }
            return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            })), h
        }
    }
    var gi = mi(),
        _i = mi({
            defaultModifiers: [Re, ci, Be, _e]
        }),
        bi = mi({
            defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai]
        });
    const vi = Object.freeze(Object.defineProperty({
            __proto__: null,
            afterMain: ae,
            afterRead: se,
            afterWrite: he,
            applyStyles: _e,
            arrow: je,
            auto: Kt,
            basePlacements: Qt,
            beforeMain: oe,
            beforeRead: ie,
            beforeWrite: le,
            bottom: Rt,
            clippingParents: Ut,
            computeStyles: Be,
            createPopper: bi,
            createPopperBase: gi,
            createPopperLite: _i,
            detectOverflow: ii,
            end: Yt,
            eventListeners: Re,
            flip: si,
            hide: ai,
            left: Vt,
            main: re,
            modifierPhases: de,
            offset: li,
            placements: ee,
            popper: Jt,
            popperGenerator: mi,
            popperOffsets: ci,
            preventOverflow: hi,
            read: ne,
            reference: Zt,
            right: qt,
            start: Xt,
            top: zt,
            variationPlacements: te,
            viewport: Gt,
            write: ce
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        yi = "dropdown",
        wi = ".bs.dropdown",
        Ai = ".data-api",
        Ei = "ArrowUp",
        Ti = "ArrowDown",
        Ci = `hide${wi}`,
        Oi = `hidden${wi}`,
        xi = `show${wi}`,
        ki = `shown${wi}`,
        Li = `click${wi}${Ai}`,
        Si = `keydown${wi}${Ai}`,
        Di = `keyup${wi}${Ai}`,
        $i = "show",
        Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Ni = `${Ii}.${$i}`,
        Pi = ".dropdown-menu",
        Mi = p() ? "top-end" : "top-start",
        ji = p() ? "top-start" : "top-end",
        Fi = p() ? "bottom-end" : "bottom-start",
        Hi = p() ? "bottom-start" : "bottom-end",
        Wi = p() ? "left-start" : "right-start",
        Bi = p() ? "right-start" : "left-start",
        zi = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        },
        Ri = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };
    class qi extends W {
        constructor(t, e) {
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return zi
        }
        static get DefaultType() {
            return Ri
        }
        static get NAME() {
            return yi
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!N.trigger(this._element, xi, t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t)
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!N.trigger(this._element, Ci, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof(t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = bi(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains($i)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Wi;
            if (t.classList.contains("dropstart")) return Bi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...t,
                ...g(this._config.popperConfig, [t])
            }
        }
        _selectMenuItem({
            key: t,
            target: e
        }) {
            const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t)));
            i.length && b(i, e, t === Ti, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = z.find(Ni);
            for (const i of e) {
                const e = qi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(),
                    s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                n = [Ei, Ti].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
                o = qi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
        }
    }
    N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, (function(t) {
        t.preventDefault(), qi.getOrCreateInstance(this).toggle()
    })), m(qi);
    const Vi = "backdrop",
        Ki = "show",
        Qi = `mousedown.bs.${Vi}`,
        Xi = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
        },
        Yi = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };
    class Ui extends H {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        static get Default() {
            return Xi
        }
        static get DefaultType() {
            return Yi
        }
        static get NAME() {
            return Vi
        }
        show(t) {
            if (!this._config.isVisible) return void g(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation((() => {
                g(t)
            }))
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation((() => {
                this.dispose(), g(t)
            }))) : g(t)
        }
        dispose() {
            this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement), t
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), N.on(t, Qi, (() => {
                g(this._config.clickCallback)
            })), this._isAppended = !0
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated)
        }
    }
    const Gi = ".bs.focustrap",
        Ji = `focusin${Gi}`,
        Zi = `keydown.tab${Gi}`,
        tn = "backward",
        en = {
            autofocus: !0,
            trapElement: null
        },
        nn = {
            autofocus: "boolean",
            trapElement: "element"
        };
    class sn extends H {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }
        static get Default() {
            return en
        }
        static get DefaultType() {
            return nn
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t => this._handleFocusin(t))), N.on(document, Zi, (t => this._handleKeydown(t))), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, N.off(document, Gi))
        }
        _handleFocusin(t) {
            const {
                trapElement: e
            } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = z.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward")
        }
    }
    const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        rn = ".sticky-top",
        an = "padding-right",
        ln = "margin-right";
    class cn {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, an, (e => e + t)), this._setElementAttributes(on, an, (e => e + t)), this._setElementAttributes(rn, ln, (e => e - t))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
            }))
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && F.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = F.getDataAttribute(t, e);
                null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
            }))
        }
        _applyManipulationCallback(t, e) {
            if (o(t)) e(t);
            else
                for (const i of z.find(t, this._element)) e(i)
        }
    }
    const hn = ".bs.modal",
        dn = `hide${hn}`,
        un = `hidePrevented${hn}`,
        fn = `hidden${hn}`,
        pn = `show${hn}`,
        mn = `shown${hn}`,
        gn = `resize${hn}`,
        _n = `click.dismiss${hn}`,
        bn = `mousedown.dismiss${hn}`,
        vn = `keydown.dismiss${hn}`,
        yn = `click${hn}.data-api`,
        wn = "modal-open",
        An = "show",
        En = "modal-static",
        Tn = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
        },
        Cn = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
        };
    class On extends W {
        constructor(t, e) {
            super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new cn, this._addEventListeners()
        }
        static get Default() {
            return Tn
        }
        static get DefaultType() {
            return Cn
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
        }
        hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
            N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Ui({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = z.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, mn, {
                    relatedTarget: t
                })
            }), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            N.on(this._element, vn, (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            })), N.on(window, gn, (() => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            })), N.on(this._element, bn, (t => {
                N.one(this._element, _n, (e => {
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }))
            }))
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn)
            }))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (N.trigger(this._element, un).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback((() => {
                this._element.classList.remove(En), this._queueCallback((() => {
                    this._element.style.overflowY = e
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = On.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }))
        }
    }
    N.on(document, yn, '[data-bs-toggle="modal"]', (function(t) {
        const e = z.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, (t => {
            t.defaultPrevented || N.one(e, fn, (() => {
                a(this) && this.focus()
            }))
        }));
        const i = z.findOne(".modal.show");
        i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this)
    })), R(On), m(On);
    const xn = ".bs.offcanvas",
        kn = ".data-api",
        Ln = `load${xn}${kn}`,
        Sn = "show",
        Dn = "showing",
        $n = "hiding",
        In = ".offcanvas.show",
        Nn = `show${xn}`,
        Pn = `shown${xn}`,
        Mn = `hide${xn}`,
        jn = `hidePrevented${xn}`,
        Fn = `hidden${xn}`,
        Hn = `resize${xn}`,
        Wn = `click${xn}${kn}`,
        Bn = `keydown.dismiss${xn}`,
        zn = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Rn = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class qn extends W {
        constructor(t, e) {
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get Default() {
            return zn
        }
        static get DefaultType() {
            return Rn
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || N.trigger(this._element, Nn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new cn).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback((() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, {
                    relatedTarget: t
                })
            }), this._element, !0))
        }
        hide() {
            this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback((() => {
                this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new cn).reset(), N.trigger(this._element, Fn)
            }), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ui({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, jn)
                } : null
            })
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            N.on(this._element, Bn, (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, jn))
            }))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    N.on(document, Wn, '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = z.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
        N.one(e, Fn, (() => {
            a(this) && this.focus()
        }));
        const i = z.findOne(In);
        i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this)
    })), N.on(window, Ln, (() => {
        for (const t of z.find(In)) qn.getOrCreateInstance(t).show()
    })), N.on(window, Hn, (() => {
        for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide()
    })), R(qn), m(qn);
    const Vn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Xn = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
        },
        Yn = {
            allowList: Vn,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        },
        Un = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        },
        Gn = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
        };
    class Jn extends H {
        constructor(t) {
            super(), this._config = this._getConfig(t)
        }
        static get Default() {
            return Yn
        }
        static get DefaultType() {
            return Un
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = { ...this._config.content,
                ...t
            }, this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
            const e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
                selector: e,
                entry: i
            }, Gn)
        }
        _setContent(t, e, i) {
            const n = z.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"),
                    s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s) {
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue
                    }
                    const n = [].concat(...t.attributes),
                        s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n) Xn(e, s) || t.removeAttribute(e.nodeName)
                }
                return n.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return g(t, [this])
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent
        }
    }
    const Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
        ts = "fade",
        es = "show",
        is = ".modal",
        ns = "hide.bs.modal",
        ss = "hover",
        os = "focus",
        rs = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: p() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: p() ? "right" : "left"
        },
        as = {
            allowList: Vn,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        },
        ls = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };
    class cs extends W {
        constructor(t, e) {
            if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
        }
        static get Default() {
            return as
        }
        static get DefaultType() {
            return ls
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = N.trigger(this._element, this.constructor.eventName("show")),
                e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {
                container: n
            } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement)
                for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
            this._queueCallback((() => {
                N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
            }), this.tip, this._isAnimated())
        }
        hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
                this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback((() => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")))
                }), this.tip, this._isAnimated())
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(ts, es), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn({ ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ts)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(es)
        }
        _createPopper(t) {
            const e = g(this._config.placement, [this, t, this._element]),
                i = rs[e.toUpperCase()];
            return bi(this._element, t, this._getPopperConfig(i))
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return g(t, [this._element])
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return { ...e,
                ...g(this._config.popperConfig, [e])
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                    this._initializeOnDelegatedTarget(t).toggle()
                }));
                else if ("manual" !== e) {
                const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                N.on(this._element, t, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter()
                })), N.on(this._element, i, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave()
                }))
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, N.on(this._element.closest(is), ns, this._hideModalHandler)
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                this._isHovered && this.show()
            }), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                this._isHovered || this.hide()
            }), this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = F.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Zn.has(t) && delete e[t];
            return t = { ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config)) this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1, t.trigger = "manual", t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = cs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    m(cs);
    const hs = { ...cs.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
        },
        ds = { ...cs.DefaultType,
            content: "(null|string|element|function)"
        };
    class us extends cs {
        static get Default() {
            return hs
        }
        static get DefaultType() {
            return ds
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    m(us);
    const fs = ".bs.scrollspy",
        ps = `activate${fs}`,
        ms = `click${fs}`,
        gs = `load${fs}.data-api`,
        _s = "active",
        bs = "[href]",
        vs = ".nav-link",
        ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
        ws = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [.1, .5, 1]
        },
        As = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };
    class Es extends W {
        constructor(t, e) {
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }
        static get Default() {
            return ws
        }
        static get DefaultType() {
            return As
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values()) this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window,
                        n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n
                }
            })))
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t => this._observerCallback(t)), t)
        }
        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`),
                i = t => {
                    this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
                },
                n = (this._rootElement || document.documentElement).scrollTop,
                s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t) {
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return
                } else s || t || i(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = z.find(bs, this._config.target);
            for (const e of t) {
                if (!e.hash || l(e)) continue;
                const t = z.findOne(decodeURI(e.hash), this._element);
                a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);
            else
                for (const e of z.parents(t, ".nav, .list-group"))
                    for (const t of z.prev(e, ys)) t.classList.add(_s)
        }
        _clearActiveClass(t) {
            t.classList.remove(_s);
            const e = z.find(`${bs}.${_s}`, t);
            for (const t of e) t.classList.remove(_s)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Es.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    N.on(window, gs, (() => {
        for (const t of z.find('[data-bs-spy="scroll"]')) Es.getOrCreateInstance(t)
    })), m(Es);
    const Ts = ".bs.tab",
        Cs = `hide${Ts}`,
        Os = `hidden${Ts}`,
        xs = `show${Ts}`,
        ks = `shown${Ts}`,
        Ls = `click${Ts}`,
        Ss = `keydown${Ts}`,
        Ds = `load${Ts}`,
        $s = "ArrowLeft",
        Is = "ArrowRight",
        Ns = "ArrowUp",
        Ps = "ArrowDown",
        Ms = "Home",
        js = "End",
        Fs = "active",
        Hs = "fade",
        Ws = "show",
        Bs = ".dropdown-toggle",
        zs = `:not(${Bs})`,
        Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,
        Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
    class Ks extends W {
        constructor(t) {
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t => this._keydown(t))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                i = e ? N.trigger(e, Cs, {
                    relatedTarget: t
                }) : null;
            N.trigger(t, xs, {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
        }
        _activate(t, e) {
            t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), N.trigger(t, ks, {
                    relatedTarget: e
                })) : t.classList.add(Ws)
            }), t, t.classList.contains(Hs)))
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), N.trigger(t, Os, {
                    relatedTarget: e
                })) : t.classList.remove(Ws)
            }), t, t.classList.contains(Hs)))
        }
        _keydown(t) {
            if (![$s, Is, Ns, Ps, Ms, js].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t => !l(t)));
            let i;
            if ([Ms, js].includes(t.key)) i = e[t.key === Ms ? 0 : e.length - 1];
            else {
                const n = [Is, Ps].includes(t.key);
                i = b(e, t.target, n, !0)
            }
            i && (i.focus({
                preventScroll: !0
            }), Ks.getOrCreateInstance(i).show())
        }
        _getChildren() {
            return z.find(qs, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = z.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n) => {
                const s = z.findOne(t, i);
                s && s.classList.toggle(n, e)
            };
            n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
            return t.classList.contains(Fs)
        }
        _getInnerElement(t) {
            return t.matches(qs) ? t : z.findOne(qs, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ks.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    N.on(document, Ls, Rs, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show()
    })), N.on(window, Ds, (() => {
        for (const t of z.find(Vs)) Ks.getOrCreateInstance(t)
    })), m(Ks);
    const Qs = ".bs.toast",
        Xs = `mouseover${Qs}`,
        Ys = `mouseout${Qs}`,
        Us = `focusin${Qs}`,
        Gs = `focusout${Qs}`,
        Js = `hide${Qs}`,
        Zs = `hidden${Qs}`,
        to = `show${Qs}`,
        eo = `shown${Qs}`,
        io = "hide",
        no = "show",
        so = "showing",
        oo = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        ro = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class ao extends W {
        constructor(t, e) {
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get Default() {
            return ro
        }
        static get DefaultType() {
            return oo
        }
        static get NAME() {
            return "toast"
        }
        show() {
            N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback((() => {
                this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }
        hide() {
            this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback((() => {
                this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs)
            }), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose()
        }
        isShown() {
            return this._element.classList.contains(no)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            N.on(this._element, Xs, (t => this._onInteraction(t, !0))), N.on(this._element, Ys, (t => this._onInteraction(t, !1))), N.on(this._element, Us, (t => this._onInteraction(t, !0))), N.on(this._element, Gs, (t => this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ao.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    return R(ao), m(ao), {
        Alert: Q,
        Button: Y,
        Carousel: xt,
        Collapse: Bt,
        Dropdown: qi,
        Modal: On,
        Offcanvas: qn,
        Popover: us,
        ScrollSpy: Es,
        Tab: Ks,
        Toast: ao,
        Tooltip: cs
    }
}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*!
 * GSAP 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "function" == typeof t
    }

    function t(t) {
        return "number" == typeof t
    }

    function u(t) {
        return void 0 === t
    }

    function v(t) {
        return "object" == typeof t
    }

    function w(t) {
        return !1 !== t
    }

    function x() {
        return "undefined" != typeof window
    }

    function y(t) {
        return s(t) || r(t)
    }

    function P(t) {
        return (i = yt(t, ot)) && Ce
    }

    function Q(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function R(t, e) {
        return !e && console.warn(t)
    }

    function S(t, e) {
        return t && (ot[t] = e) && i && (i[t] = e) || ot
    }

    function T() {
        return 0
    }

    function ea(t) {
        var e, r, i = t[0];
        if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = gt.length; r-- && !gt[r].targetTest(i););
            e = gt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new jt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function fa(t) {
        return t._gsap || ea(Ot(t))[0]._gsap
    }

    function ga(t, e, r) {
        return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function ha(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ia(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ja(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ka(t, e) {
        var r = e.charAt(0),
            i = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }

    function la(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function ma() {
        var t, e, r = ct.length,
            i = ct.slice(0);
        for (dt = {}, t = ct.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function na(t, e, r, i) {
        ct.length && !B && ma(), t.render(e, r, i || B && e < 0 && (t._initted || t._startAt)), ct.length && !B && ma()
    }

    function oa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
    }

    function pa(t) {
        return t
    }

    function qa(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ta(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function ua(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function va(t) {
        var e = t.parent || L,
            r = t.keyframes ? function _setKeyframeDefaults(i) {
                return function(t, e) {
                    for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
                }
            }($(t.keyframes)) : qa;
        if (w(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function xa(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
    }

    function ya(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function za(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function Aa(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function Ca(t, e, r, i) {
        return t._startAt && (B ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }

    function Ea(t) {
        return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function Ga(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Ha(t) {
        return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0))
    }

    function Ia(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ha(t), r._dirty || Aa(r, t)), t
    }

    function Ja(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = Ga(t.rawTime(), e), (!e._dur || kt(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -V
        }
    }

    function Ka(e, r, i, n) {
        return r.parent && za(r), r._start = ja((t(i) ? i : i || e !== L ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), xa(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ja(e, r), e._ts < 0 && Ia(e, e._tTime), e
    }

    function La(t, e) {
        return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Ma(t, e, r, i, n) {
        return Ht(t, e, n), t._initted ? !r && t._pt && !B && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Et.frame ? (ct.push(t), t._lazy = [n, i], 1) : void 0 : 1
    }

    function Ra(t, e, r, i) {
        var n = t._repeat,
            a = ja(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ia(t, t._tTime = t._tDur * s), t.parent && Ha(t), r || Aa(t.parent, t), t
    }

    function Sa(t) {
        return t instanceof Ut ? Aa(t) : Ra(t, t._dur)
    }

    function Va(e, r, i) {
        var n, a, s = t(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
            u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Gt(r[0], u, r[1 + o])
    }

    function Wa(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Ya(t, e) {
        return r(t) && (e = st.exec(t)) ? e[1] : ""
    }

    function _a(t, e) {
        return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
    }

    function cb(r) {
        return r = Ot(r)[0] || R("Invalid scope") || {},
            function(t) {
                var e = r.current || r.nativeElement || r;
                return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
            }
    }

    function db(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function eb(t) {
        if (s(t)) return t;
        var p = v(t) ? t : {
                each: t
            },
            _ = Yt(p.ease),
            m = p.from || 0,
            g = parseFloat(p.base) || 0,
            y = {},
            e = 0 < m && m < 1,
            T = isNaN(m) || e,
            b = p.axis,
            w = m,
            x = m;
        return r(m) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            }[m] || 0 : !e && T && (w = m[0], x = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, c = (r || p).length,
                    d = y[c];
                if (!d) {
                    if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
                        for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
                        f--
                    }
                    for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === U ? 0 : T ? c * x / f - .5 : m / f | 0, l = U, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === m && db(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Ya(p.amount || p.each) || 0, _ = _ && c < 0 ? Lt(_) : _
                }
                return c = (d[t] - d.min) / d.max || 0, ja(d.b + (_ ? _(c) : c) * d.v) + d.u
            }
    }

    function fb(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function(e) {
            var r = ja(Math.round(parseFloat(e) / i) * i * n);
            return (r - r % 1) / n + (t(e) ? 0 : Ya(e))
        }
    }

    function gb(h, e) {
        var l, f, r = $(h);
        return !r && v(h) && (l = r = h.radius || U, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = fb(h.increment)), Wa(e, r ? s(h) ? function(t) {
            return f = h(t), Math.abs(f - t) <= l ? f : t
        } : function(e) {
            for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
            return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Ya(e)
        } : fb(h))
    }

    function hb(t, e, r, i) {
        return Wa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function lb(e, r, t) {
        return Wa(t, function(t) {
            return e[~~r(t)]
        })
    }

    function ob(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function rb(t, e, r) {
        var i, n, a, s = t.labels,
            o = U;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function tb(t) {
        return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!B), t.progress() < 1 && Ct(t, "onInterrupt"), t
    }

    function yb(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * At + .5 | 0
    }

    function zb(e, r, i) {
        var n, a, s, o, u, h, l, f, c, d, p = e ? t(e) ? [e >> 16, e >> 8 & At, e & At] : 0 : St.black;
        if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), St[e]) p = St[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & At, p & At, parseInt(e.substr(7), 16) / 255];
                p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & At, e & At]
            } else if ("hsl" === e.substr(0, 3))
                if (p = d = e.match(tt), r) {
                    if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
                } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = yb(o + 1 / 3, n, a), p[1] = yb(o, n, a), p[2] = yb(o - 1 / 3, n, a);
            else p = e.match(tt) || St.transparent;
            p = p.map(Number)
        }
        return r && !d && (n = p[0] / At, a = p[1] / At, s = p[2] / At, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
    }

    function Ab(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(Rt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function Bb(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(Rt),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = zb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = Ab(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Rt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Rt)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function Eb(t) {
        var e, r = t.join(" ");
        if (Rt.lastIndex = 0, Rt.test(r)) return e = Dt.test(r), t[1] = Bb(t[1], e), t[0] = Bb(t[0], e, Ab(t[1])), !0
    }

    function Nb(t) {
        var e = (t + "").split("("),
            r = Ft[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(oa)) : Ft._CE && It.test(t) ? Ft._CE("", t) : r
    }

    function Pb(t, e) {
        for (var r, i = t._first; i;) i instanceof Ut ? Pb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Pb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Rb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ha(t, function(t) {
            for (var e in Ft[t] = ot[t] = a, Ft[n = t.toLowerCase()] = r, a) Ft[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ft[t + "." + e] = a[e]
        }), a
    }

    function Sb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Tb(r, t, e) {
        function Hm(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * G((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / W * (Math.asin(1 / i) || 0),
            s = "out" === r ? Hm : "in" === r ? function(t) {
                return 1 - Hm(1 - t)
            } : Sb(Hm);
        return n = W / n, s.config = function(t, e) {
            return Tb(r, t, e)
        }, s
    }

    function Ub(e, r) {
        function Pm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Pm : "in" === e ? function(t) {
            return 1 - Pm(1 - t)
        } : Sb(Pm);
        return t.config = function(t) {
            return Ub(e, t)
        }, t
    }
    var I, B, l, L, h, n, a, i, o, f, c, d, p, _, m, g, b, k, M, O, C, A, D, E, z, F, Y, N, j = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        q = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        U = 1e8,
        V = 1 / U,
        W = 2 * Math.PI,
        X = W / 4,
        H = 0,
        K = Math.sqrt,
        Z = Math.cos,
        G = Math.sin,
        J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        $ = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ot = {},
        ut = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        ht = {
            suppressEvents: !0,
            kill: !1
        },
        lt = {
            suppressEvents: !0
        },
        ft = {},
        ct = [],
        dt = {},
        pt = {},
        _t = {},
        mt = 30,
        gt = [],
        vt = "",
        yt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Tt = function _animationCycle(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        bt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        wt = {
            _start: 0,
            endTime: T,
            totalDuration: T
        },
        xt = function _parsePosition(t, e, i) {
            var n, a, s, o = t.labels,
                u = t._recent || wt,
                h = t.duration() >= U ? u.endTime(!1) : t._dur;
            return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * ($(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
        },
        kt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        Mt = [].slice,
        Ot = function toArray(t, e, i) {
            return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && zt() ? $(t) ? function _flatten(t, e, i) {
                return void 0 === i && (i = []), t.forEach(function(t) {
                    return r(t) && !e || _a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t)
                }) || i
            }(t, i) : _a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0)
        },
        Pt = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Wa(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        Ct = function _callback(t, e, r) {
            var i, n, a, s = t.vars,
                o = s[e],
                u = l,
                h = t._ctx;
            if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ct.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
        },
        At = 255,
        St = {
            aqua: [0, At, At],
            lime: [0, At, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, At],
            navy: [0, 0, 128],
            white: [At, At, At],
            olive: [128, 128, 0],
            yellow: [At, At, 0],
            orange: [At, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [At, 0, 0],
            pink: [At, 192, 203],
            cyan: [0, At, At],
            transparent: [At, At, At, 0]
        },
        Rt = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in St) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Dt = /hsl[a]?\(/,
        Et = (M = Date.now, O = 500, C = 33, A = M(), D = A, z = E = 1e3 / 240, g = {
            time: 0,
            frame: 0,
            tick: function tick() {
                wl(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Ce, (h.gsapVersions || (h.gsapVersions = [])).push(Ce.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame), p && g.sleep(), _ = m || function(t) {
                    return setTimeout(t, z - 1e3 * g.time + 1 | 0)
                }, d = 1, wl(2))
            },
            sleep: function sleep() {
                (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T
            },
            lagSmoothing: function lagSmoothing(t, e) {
                O = t || 1 / 0, C = Math.min(e || 33, O)
            },
            fps: function fps(t) {
                E = 1e3 / (t || 240), z = 1e3 * g.time + E
            },
            add: function add(n, t, e) {
                var a = t ? function(t, e, r, i) {
                    n(t, e, r, i), g.remove(a)
                } : n;
                return g.remove(n), F[e ? "unshift" : "push"](a), zt(), a
            },
            remove: function remove(t, e) {
                ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= k && k--
            },
            _listeners: F = []
        }),
        zt = function _wake() {
            return !d && Et.wake()
        },
        Ft = {},
        It = /^[\d.\-M][\d.\-,\s]/,
        Bt = /["']/g,
        Lt = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Yt = function _parseEase(t, e) {
            return t && (s(t) ? t : Ft[t] || Nb(t)) || e
        };

    function wl(t) {
        var e, r, i, n, a = M() - D,
            s = !0 === t;
        if (O < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, z += e + (E <= e ? 4 : E - e), r = 1), s || (p = _(wl)), r)
            for (k = 0; k < F.length; k++) F[k](i, b, n, t)
    }

    function en(t) {
        return t < N ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / 2.75) * t + .9375 : Y * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ha("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Rb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Ft.Linear.easeNone = Ft.none = Ft.Linear.easeIn, Rb("Elastic", Tb("in"), Tb("out"), Tb()), Y = 7.5625, N = 1 / 2.75, Rb("Bounce", function(t) {
        return 1 - en(1 - t)
    }, en), Rb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Rb("Circ", function(t) {
        return -(K(1 - t * t) - 1)
    }), Rb("Sine", function(t) {
        return 1 === t ? 1 : 1 - Z(t * X)
    }), Rb("Back", Ub("in"), Ub("out"), Ub()), Ft.SteppedEase = Ft.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * kt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, q.ease = Ft["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return vt += t + "," + t + "Params,"
    });
    var Nt, jt = function GSCache(t, e) {
            this.id = H++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : re
        },
        qt = ((Nt = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Nt.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Nt.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Nt.totalTime = function totalTime(t, e) {
            if (zt(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ka(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === V || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), na(this, t, e)), this
        }, Nt.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, Nt.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Nt.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Nt.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1
        }, Nt.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -V ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -V ? 0 : this._rts, this.totalTime(kt(-this._delay, this._tDur, e), !0), Ha(this),
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, Nt.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps
        }, Nt.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Ka(e, this, t - this._delay), this
            }
            return this._start
        }, Nt.endTime = function endTime(t) {
            return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, Nt.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e.rawTime(t), this) : this._tTime : this._tTime
        }, Nt.revert = function revert(t) {
            void 0 === t && (t = lt);
            var e = B;
            return B = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), B = e, this
        }, Nt.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : r
        }, Nt.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Nt.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, Sa(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, Nt.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Nt.seek = function seek(t, e) {
            return this.totalTime(xt(this, t), w(e))
        }, Nt.restart = function restart(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, w(e))
        }, Nt.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Nt.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Nt.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Nt.resume = function resume() {
            return this.paused(!1)
        }, Nt.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -V : 0)), this) : this._rts < 0
        }, Nt.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -V, this
        }, Nt.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - V))
        }, Nt.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Nt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function zo() {
                    var t = i.then;
                    i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = s(t) ? t : pa;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? zo() : i._prom = zo
            })
        }, Nt.kill = function kill() {
            tb(this)
        }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ra(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || Et.wake()
    }
    qa(qt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -V,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ut = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), L && Ka(t.parent || L, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger), r
        }
        _inheritsLoose(Timeline, i);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Va(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Va(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Va(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, va(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Gt(t, e, xt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return Ka(this, Gt.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Gt(t, r, xt(this, n)), this
        }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
            return r.runBackwards = 1, va(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
        }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
            return i.startAt = r, va(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c, d, p, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : ja(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== L && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = Tt(this._tTime, o), !_ && this._tTime && c !== s && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
                        var T = d && 1 & c,
                            b = T === (d && 1 & s);
                        if (s < c && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Ct(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Pb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Ct(this, "onStart"), this._tTime !== v)) return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -V);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || B && (n._initted || n._startAt)), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -V : V);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -V)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ha(this), this.render(t, e, r);
                this._onUpdate && !e && Ct(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || za(this, 1), e || t < 0 && !_ || !v && !_ && m || (Ct(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(e, i) {
            var n = this;
            if (t(i) || (i = xt(this, i, e)), !(e instanceof qt)) {
                if ($(e)) return e.forEach(function(t) {
                    return n.add(t, i)
                }), this;
                if (r(e)) return this.addLabel(e, i);
                if (!s(e)) return this;
                e = Gt.delayedCall(0, e)
            }
            return this !== e ? Ka(this, e, i) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Gt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Et.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = xt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = Gt.delayedCall(0, e || T, r);
            return i.data = "isPause", this._hasPause = 1, Ka(this, i, xt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = xt(this, t); e;) e._start === t && "isPause" === e.data && za(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Vt !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(e, r) {
            for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof Gt ? la(s._targets, a) && (o ? (!Vt || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
            return n
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this,
                n = xt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = Gt.to(i, qa({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || V,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, qa({
                startAt: {
                    time: xt(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), rb(this, xt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), rb(this, xt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + V)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return Aa(this)
        }, e.invalidate = function invalidate(t) {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(t), e = e._next;
            return i.prototype.invalidate.call(this, t)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = U;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ka(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ra(a, a === L && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (L._ts && (na(L, Ga(t, L)), f = Et.frame), Et.frame >= mt) {
                mt += j.autoSleep || 120;
                var e = L._first;
                if ((!e || !e._ts) && j.autoSleep && Et._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Et.sleep()
                }
            }
        }, Timeline
    }(qt);
    qa(Ut.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function _b(t, e, i, n, a, o) {
        var u, h, l, f;
        if (pt[t] && !1 !== (u = new pt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
                if (s(t) && (t = Qt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || $(t) || J(t)) return r(t) ? Qt(t, a, e, i, n) : t;
                var o, u = {};
                for (o in t) u[o] = Qt(t[o], a, e, i, n);
                return u
            }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new pe(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c))
            for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }

    function fc(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if ($(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
            return a.push({
                t: e / (r.length - 1) * 100,
                v: t,
                e: s
            })
        });
        else
            for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
                t: parseFloat(t),
                v: r[n],
                e: s
            })
    }
    var Vt, Wt, Xt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
            s(n) && (n = n(a || 0, t, o));
            var c, d = t[e],
                p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
                _ = s(d) ? l ? ee : $t : Jt;
            if (r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && (!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Wt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, c, d, p, _ = new pe(this._pt, t, e, 0, 1, se, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === g ? f : ",",
                    s: c,
                    c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _
            }.call(this, t, e, p, n, _, h || j.stringFilter, l)) : (c = new pe(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? ae : ne, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c)
        },
        Ht = function _initTween(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c, d, p, _, m = t.vars,
                g = m.ease,
                v = m.startAt,
                y = m.immediateRender,
                T = m.lazy,
                b = m.onUpdate,
                x = m.onUpdateParams,
                k = m.callbackScope,
                M = m.runBackwards,
                O = m.yoyoEase,
                P = m.keyframes,
                C = m.autoRevert,
                A = t._dur,
                S = t._startAt,
                R = t._targets,
                D = t.parent,
                E = D && "nested" === D.data ? D.vars.targets : R,
                z = "auto" === t._overwrite && !I,
                F = t.timeline;
            if (!F || P && g || (g = "none"), t._ease = Yt(g, q.ease), t._yEase = O ? Lt(Yt(!0 === O ? g : O, q.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !F && !!m.runBackwards, !F || P && !m.stagger) {
                if (p = (l = R[0] ? fa(R[0]).harness : 0) && m[l.prop], i = ua(m, ft), S && (S._zTime < 0 && S.progress(1), e < 0 && M && y && !C ? S.render(-1, !0) : S.revert(M && A ? ht : ut), S._lazy = 0), v) {
                    if (za(t._startAt = Gt.set(R, qa({
                            data: "isStart",
                            overwrite: !1,
                            parent: D,
                            immediateRender: !0,
                            lazy: !S && w(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: b,
                            onUpdateParams: x,
                            callbackScope: k,
                            stagger: 0
                        }, v))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (B || !y && !C) && t._startAt.revert(ht), y && A && e <= 0 && r <= 0) return void(e && (t._zTime = e))
                } else if (M && A && !S)
                    if (e && (y = !1), a = qa({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: y && !S && w(T),
                            immediateRender: y,
                            stagger: 0,
                            parent: D
                        }, i), p && (a[l.prop] = p), za(t._startAt = Gt.set(R, a)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (B ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
                        if (!e) return
                    } else _initTween(t._startAt, V, V);
                for (t._pt = t._ptCache = 0, T = A && w(T) || T && !A, n = 0; n < R.length; n++) {
                    if (h = (o = R[n])._gsap || ea(R)[n]._gsap, t._ptLookup[n] = c = {}, dt[h.id] && ct.length && ma(), d = E === R ? n : E.indexOf(o), l && !1 !== (f = new l).init(o, p || i, t, d, E) && (t._pt = s = new pe(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            c[t] = s
                        }), f.priority && (u = 1)), !l || p)
                        for (a in i) pt[a] && (f = _b(a, i, t, d, o, E)) ? f.priority && (u = 1) : c[a] = s = Xt.call(t, o, a, "get", i[a], d, E, 0, m.stringFilter);
                    t._op && t._op[n] && t.kill(o, t._op[n]), z && t._pt && (Vt = t, L.killTweensOf(o, c, t.globalTime(e)), _ = !t.parent, Vt = 0), t._pt && T && (dt[h.id] = 1)
                }
                u && de(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, P && e <= 0 && F.render(U, !0, !0)
        },
        Qt = function _parseFuncOrString(t, e, i, n, a) {
            return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t
        },
        Kt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Zt = {};
    ha(Kt + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Zt[t] = 1
    });
    var Gt = function(z) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var s, o, u, h, l, f, c, d, p = (a = z.call(this, n ? r : va(r)) || this).vars,
                _ = p.duration,
                m = p.delay,
                g = p.immediateRender,
                T = p.stagger,
                b = p.overwrite,
                x = p.keyframes,
                k = p.defaults,
                M = p.scrollTrigger,
                O = p.yoyoEase,
                P = r.parent || L,
                C = ($(e) || J(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
            if (a._targets = C.length ? ea(C) : R("GSAP target " + e + " not found. https://greensock.com", !j.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
                if (r = a.vars, (s = a.timeline = new Ut({
                        data: "nested",
                        defaults: k || {},
                        targets: P && "nested" === P.data ? P.vars.targets : C
                    })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
                    if (h = C.length, c = T && eb(T), v(T))
                        for (l in T) ~Kt.indexOf(l) && ((d = d || {})[l] = T[l]);
                    for (o = 0; o < h; o++)(u = ua(r, Zt)).stagger = 0, O && (u.yoyoEase = O), d && yt(u, d), f = C[o], u.duration = +Qt(_, _assertThisInitialized(a), o, f, C), u.delay = (+Qt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, C) : 0), s._ease = Ft.none;
                    s.duration() ? _ = m = 0 : a.timeline = 0
                } else if (x) {
                    va(qa(s.vars.defaults, {
                        ease: "none"
                    })), s._ease = Yt(x.ease || r.ease || "none");
                    var A, S, D, E = 0;
                    if ($(x)) x.forEach(function(t) {
                        return s.to(C, t, ">")
                    }), s.duration();
                    else {
                        for (l in u = {}, x) "ease" === l || "easeEach" === l || fc(l, x[l], u, x.easeEach);
                        for (l in u)
                            for (A = u[l].sort(function(t, e) {
                                    return t.t - e.t
                                }), o = E = 0; o < A.length; o++)(D = {
                                ease: (S = A[o]).e,
                                duration: (S.t - (o ? A[o - 1].t : 0)) / 100 * _
                            })[l] = S.v, s.to(C, D, E), E += D.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || a.duration(_ = s.duration())
            } else a.timeline = 0;
            return !0 !== b || I || (Vt = _assertThisInitialized(a), L.killTweensOf(C), Vt = 0), Ka(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(P._time) && w(g) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -V, a.render(Math.max(0, -m) || 0)), M && La(_assertThisInitialized(a), M), a
        }
        _inheritsLoose(Tween, z);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c = this._time,
                d = this._tDur,
                p = this._dur,
                _ = t < 0,
                m = d - V < t && !_ ? d : t < V ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
                    if (i = m, l = this.timeline, this._repeat) {
                        if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                        if (i = ja(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
                        a !== o && (l && this._yEase && Pb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ma(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
                        if (c !== this._time) return this;
                        if (p !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && (Ct(this, "onStart"), this._tTime !== m)) return this;
                    for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -V : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ca(this, t, 0, r), Ct(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ct(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ca(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || za(this, 1), e || _ && !c || !(m || c || u) || (Ct(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()))
                }
            } else ! function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s, o = t.ratio,
                    u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1,
                    h = t._rDelay,
                    l = 0;
                if (h && t._repeat && (l = kt(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || B || i || t._zTime === V || !e && t._zTime) {
                    if (!t._initted && Ma(t, e, i, r, l)) return;
                    for (s = t._zTime, t._zTime = e || (r ? V : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    e < 0 && Ca(t, e, 0, !0), t._onUpdate && !r && Ct(t, "onUpdate"), l && t._repeat && !r && t.parent && Ct(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || B || (Ct(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, e.targets = function targets() {
            return this._targets
        }, e.invalidate = function invalidate(t) {
            return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), z.prototype.invalidate.call(this, t)
        }, e.resetTo = function resetTo(t, e, r, i) {
            d || Et.wake(), this._ts || this.play();
            var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Ht(this, a), n = this._ease(a / this._dur),
                function _updatePropTweens(t, e, r, i, n, a, s) {
                    var o, u, h, l, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!f)
                        for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
                            if ((o = h[l][e]) && o.d && o.d._pt)
                                for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                            if (!o) return Wt = 1, t.vars[e] = "+=0", Ht(t, s), Wt = 0, 1;
                            f.push(o)
                        }
                    for (l = f.length; l--;)(o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ia(r) + Ya(u.e)), u.b && (u.b = o.s + Ya(u.b))
                }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? tb(this) : this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Vt && !0 !== Vt.vars.overwrite)._first || tb(this), this.parent && i !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var n, a, s, o, u, h, l, f = this._targets,
                c = t ? Ot(t) : f,
                d = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(f, c)) return "all" === e && (this._pt = 0), tb(this);
            for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function _addAliasesToVars(t, e) {
                    var r, i, n, a, s = t[0] ? fa(t[0]).harness : 0,
                        o = s && s.aliases;
                    if (!o) return e;
                    for (i in r = yt({}, e), o)
                        if (i in r)
                            for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                    return r
                }(f, e)), l = f.length; l--;)
                if (~c.indexOf(f[l]))
                    for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && p && tb(this), this
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r)
        }, Tween.from = function from(t, e) {
            return Va(1, arguments)
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, Tween.fromTo = function fromTo(t, e, r) {
            return Va(2, arguments)
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return L.killTweensOf(t, e, r)
        }, Tween
    }(qt);
    qa(Gt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ha("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Gt[r] = function() {
            var t = new Ut,
                e = Mt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function nc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function vc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Jt = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        $t = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        ee = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        re = function _getSetter(t, e) {
            return s(t[e]) ? $t : u(t[e]) && t.setAttribute ? nc : Jt
        },
        ne = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        ae = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        se = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        oe = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        le = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        fe = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        de = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        pe = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = vc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || ne, this.d = s || this, this.set = o || Jt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ft[t] = 1
    }), ot.TweenMax = ot.TweenLite = Gt, ot.TimelineLite = ot.TimelineMax = Ut, L = new Ut({
        sortChildren: !1,
        defaults: q,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), j.stringFilter = Eb;

    function Cc(t) {
        return (Te[t] || we).map(function(t) {
            return t()
        })
    }

    function Dc() {
        var t = Date.now(),
            o = [];
        2 < t - xe && (Cc("matchMediaInit"), ye.forEach(function(t) {
            var e, r, i, n, a = t.queries,
                s = t.conditions;
            for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
            n && (t.revert(), i && o.push(t))
        }), Cc("matchMediaRevert"), o.forEach(function(t) {
            return t.onMatch(t)
        }), xe = t, Cc("matchMedia"))
    }
    var _e, ye = [],
        Te = {},
        we = [],
        xe = 0,
        ke = ((_e = Context.prototype).add = function add(t, i, n) {
            function Cw() {
                var t, e = l,
                    r = a.selector;
                return e && e !== a && e.data.push(a), n && (a.selector = cb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
            }
            s(t) && (n = i, i = t, t = s);
            var a = this;
            return a.last = Cw, t === s ? Cw(a) : t ? a[t] = Cw : Cw
        }, _e.ignore = function ignore(t) {
            var e = l;
            l = null, t(this), l = e
        }, _e.getTweens = function getTweens() {
            var e = [];
            return this.data.forEach(function(t) {
                return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Gt && !(t.parent && "nested" === t.parent.data) && e.push(t)
            }), e
        }, _e.clear = function clear() {
            this._r.length = this.data.length = 0
        }, _e.kill = function kill(e, t) {
            var r = this;
            if (e) {
                var i = this.getTweens();
                this.data.forEach(function(t) {
                    "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                        return i.splice(i.indexOf(t), 1)
                    }))
                }), i.map(function(t) {
                    return {
                        g: t.globalTime(0),
                        t: t
                    }
                }).sort(function(t, e) {
                    return e.g - t.g || -1
                }).forEach(function(t) {
                    return t.t.revert(e)
                }), this.data.forEach(function(t) {
                    return !(t instanceof qt) && t.revert && t.revert(e)
                }), this._r.forEach(function(t) {
                    return t(e, r)
                }), this.isReverted = !0
            } else this.data.forEach(function(t) {
                return t.kill && t.kill()
            });
            if (this.clear(), t) {
                var n = ye.indexOf(this);
                ~n && ye.splice(n, 1)
            }
        }, _e.revert = function revert(t) {
            this.kill(t || {})
        }, Context);

    function Context(t, e) {
        this.selector = e && cb(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
    }
    var Me, Oe = ((Me = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = {
            matches: t
        });
        var i, n, a, s = new ke(0, r || this.scope),
            o = s.conditions = {};
        for (n in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ye.indexOf(s) < 0 && ye.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Dc) : i.addEventListener("change", Dc));
        return a && e(s), this
    }, Me.revert = function revert(t) {
        this.kill(t || {})
    }, Me.kill = function kill(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }, MatchMedia);

    function MatchMedia(t) {
        this.contexts = [], this.scope = t
    }
    var Pe = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = s(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: T,
                            render: oe,
                            add: Xt,
                            kill: fe,
                            modifier: le,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: re,
                            aliases: {},
                            register: 0
                        };
                    if (zt(), t !== i) {
                        if (pt[e]) return;
                        qa(i, qa(ua(t, n), a)), yt(i.prototype, yt(n, ua(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    S(e, i), t.register && t.register(Ce, i, pe)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Ut(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return L.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, n) {
            r(i) && (i = Ot(i)[0]);
            var a = fa(i || {}).get,
                s = e ? pa : oa;
            return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function(t, e, r) {
                return s((pt[t] && pt[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Ot(r)).length) {
                var n = r.map(function(t) {
                        return Ce.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = pt[e],
                o = fa(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && oe(1, c)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function Ux(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var r, n = Ce.to(t, yt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
            return Ux.tween = n, Ux
        },
        isTweening: function isTweening(t) {
            return 0 < L.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Yt(t.ease, q.ease)), ta(q, t || {})
        },
        config: function config(t) {
            return ta(j, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
            }), _t[i] = function(t, e, r) {
                return n(Ot(t), qa(e || {}, a), r)
            }, r && (Ut.prototype[i] = function(t, e, r) {
                return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            Ft[t] = Yt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Yt(t, e) : Ft
        },
        getById: function getById(t) {
            return L.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Ut(t);
            for (n.smoothChildTiming = w(t.smoothChildTiming), L.remove(n), n._dp = 0, n._time = n._tTime = L._time, r = L._first; r;) i = r._next, !e && !r._dur && r instanceof Gt && r.vars.onComplete === r._targets[0] || Ka(n, r, r._start - r._delay), r = i;
            return Ka(L, n, 0), n
        },
        context: function context(t, e) {
            return t ? new ke(t, e) : l
        },
        matchMedia: function matchMedia(t) {
            return new Oe(t)
        },
        matchMediaRefresh: function matchMediaRefresh() {
            return ye.forEach(function(t) {
                var e, r, i = t.conditions;
                for (r in i) i[r] && (i[r] = !1, e = 1);
                e && t.revert()
            }) || Dc()
        },
        addEventListener: function addEventListener(t, e) {
            var r = Te[t] || (Te[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function removeEventListener(t, e) {
            var r = Te[t],
                i = r && r.indexOf(e);
            0 <= i && r.splice(i, 1)
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return $(e) ? lb(e, wrap(0, e.length), t) : Wa(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return $(e) ? lb(e, wrapYoyo(0, e.length - 1), t) : Wa(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: eb,
            random: hb,
            snap: gb,
            normalize: function normalize(t, e, r) {
                return Pt(t, e, 0, 1, r)
            },
            getUnit: Ya,
            clamp: function clamp(e, r, t) {
                return Wa(t, function(t) {
                    return kt(e, r, t)
                })
            },
            splitColor: zb,
            toArray: Ot,
            selector: cb,
            mapRange: Pt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Ya(t))
                }
            },
            interpolate: function interpolate(e, i, t, n) {
                var a = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!a) {
                    var s, o, u, h, l, f = r(e),
                        c = {};
                    if (!0 === t && (n = 1) && (t = null), f) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if ($(e) && !$(i)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = i
                    } else n || (e = yt($(e) ? [] : {}, e));
                    if (!u) {
                        for (s in i) Xt.call(c, e, s, "get", i[s]);
                        a = function func(t) {
                            return oe(t, c) || (f ? e.p : e)
                        }
                    }
                }
                return Wa(t, a)
            },
            shuffle: db
        },
        install: P,
        effects: _t,
        ticker: Et,
        updateRoot: Ut.updateRoot,
        plugins: pt,
        globalTimeline: L,
        core: {
            PropTween: pe,
            globals: S,
            Tween: Gt,
            Timeline: Ut,
            Animation: qt,
            getCache: fa,
            _removeLinkedListItem: ya,
            reverting: function reverting() {
                return B
            },
            context: function context(t) {
                return t && l && (l.data.push(t), t._ctx = l), l
            },
            suppressOverwrites: function suppressOverwrites(t) {
                return I = t
            }
        }
    };
    ha("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Pe[t] = Gt[t]
    }), Et.add(Ut.updateRoot), c = Pe.to({}, {
        duration: 0
    });

    function Hc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function Jc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, n, e) {
                e._onInit = function(t) {
                    var e, i;
                    if (r(n) && (e = {}, ha(n, function(t) {
                            return e[t] = 1
                        }), n = e), a) {
                        for (i in e = {}, n) e[i] = a(n[i]);
                        n = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Hc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, n)
                }
            }
        }
    }
    var Ce = Pe.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s, o;
            for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
        },
        render: function render(t, e) {
            for (var r = e._pt; r;) B ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Jc("roundProps", fb), Jc("modifiers"), Jc("snap", gb)) || Pe;
    Gt.version = Ut.version = Ce.version = "3.11.4", o = 1, x() && zt();

    function td(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function ud(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function vd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function wd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function xd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function yd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function zd(t, e, r) {
        return t.style[e] = r
    }

    function Ad(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function Bd(t, e, r) {
        return t._gsap[e] = r
    }

    function Cd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Dd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function Ed(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function Hd(t, e) {
        var r = this,
            i = this.target,
            n = i.style;
        if (t in rr) {
            if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = hr[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                    return r.tfm[t] = mr(i, t)
                }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : mr(i, t)), 0 <= this.props.indexOf(lr)) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(fr, e, "")), t = lr
        }(n || e) && this.props.push(t, e, n[t])
    }

    function Id(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function Jd() {
        var t, e, r = this.props,
            i = this.target,
            n = i.style,
            a = i._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty(r[t].replace(sr, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), !(t = Fe()) || t.isStart || n[lr] || (Id(n), a.uncache = 1)
        }
    }

    function Kd(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Jd,
            save: Hd
        };
        return e && e.split(",").forEach(function(t) {
            return r.save(t)
        }), r
    }

    function Md(t, e) {
        var r = Se.createElementNS ? Se.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Se.createElement(t);
        return r.style ? r : Se.createElement(t)
    }

    function Nd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(sr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Nd(t, dr(e) || e, 1) || ""
    }

    function Qd() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (Ae = window, Se = Ae.document, Re = Se.documentElement, Ee = Md("div") || {
            style: {}
        }, Md("div"), lr = dr(lr), fr = lr + "Origin", Ee.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ie = !!dr("perspective"), Fe = Ce.core.reverting, De = 1)
    }

    function Rd(t) {
        var e, r = Md("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (Re.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Rd
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Re.removeChild(r), this.style.cssText = a, e
    }

    function Sd(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Td(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = Rd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Rd || (r = Rd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +Sd(e, ["x", "cx", "x1"]) || 0,
            y: +Sd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Ud(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Td(t))
    }

    function Vd(t, e) {
        if (e) {
            var r = t.style;
            e in rr && e !== fr && (e = lr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(sr, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function Wd(t, e, r, i, n, a) {
        var s = new pe(t._pt, e, r, 0, 1, a ? yd : xd);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function Zd(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = Ee.style,
            f = or.test(e),
            c = "svg" === t.tagName.toLowerCase(),
            d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            _ = "%" === i;
        return i === h || !u || pr[i] || pr[h] ? u : ("px" === h || p || (u = Zd(t, e, r, "px")), o = t.getCTM && Ud(t), !_ && "%" !== h || !rr[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Se && a.appendChild || (a = Se.body), (s = a._gsap) && _ && s.width && f && s.time === Et.time && !s.uncache ? ia(u / s.width * 100) : (!_ && "%" !== h || _r[Nd(a, "display")] || (l.position = Nd(t, "position")), a === t && (l.position = "static"), a.appendChild(Ee), n = Ee[d], a.removeChild(Ee), l.position = "absolute", f && _ && ((s = fa(a)).time = Et.time, s.width = a[d]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ia(_ ? u / n * 100 : u / 100 * n)))
    }

    function _d(t, e, r, i) {
        if (!r || "none" === r) {
            var n = dr(e, t, 1),
                a = n && Nd(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Nd(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, c, d, p, _, m, g = new pe(this._pt, t.style, e, 0, 1, se),
            v = 0,
            y = 0;
        if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Nd(t, e) || i, t.style[e] = r), Eb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ka(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || j.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = Zd(t, e, f, _) || 0), g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: d - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else g.r = "display" === e && "none" === i ? yd : xd;
        return nt.test(i) && (g.e = 0), this._pt = g
    }

    function be(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = gr[r] || r, e[1] = gr[i] || i, e.join(" ")
    }

    function ce(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], rr[r] && (i = 1, r = "transformOrigin" === r ? fr : lr), Vd(a, r);
            i && (Vd(a, lr), u && (u.svg && a.removeAttribute("transform"), br(a, 1), u.uncache = 1, Id(s)))
        }
    }

    function ge(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function he(t) {
        var e = Nd(t, lr);
        return ge(e) ? yr : e.substr(7).match(et).map(ia)
    }

    function ie(t, e) {
        var r, i, n, a, s = t._gsap || fa(t),
            o = t.style,
            u = he(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? yr : u : (u !== yr || t.offsetParent || t === Re || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, Re.appendChild(t)), u = he(t), n ? o.display = n : Vd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Re.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function je(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || ie(t, !0),
            f = h.xOrigin || 0,
            c = h.yOrigin || 0,
            d = h.xOffset || 0,
            p = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== yr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Td(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[fr] = "0px 0px", a && (Wd(a, h, "xOrigin", f, w), Wd(a, h, "yOrigin", c, x), Wd(a, h, "xOffset", d, h.xOffset), Wd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function me(t, e, r) {
        var i = Ya(e);
        return ia(parseFloat(e) + parseFloat(Zd(t, "x", r + "px", i))) + i
    }

    function te(t, e, i, n, a) {
        var s, o, u = 360,
            h = r(a),
            l = parseFloat(a) * (h && ~a.indexOf("rad") ? ir : 1) - n,
            f = n + l + "deg";
        return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new pe(t._pt, e, i, n, l, ud), o.e = f, o.u = "deg", t._props.push(i), o
    }

    function ue(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function ve(t, e, r) {
        var i, n, a, s, o, u, h, l = ue({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[lr] = e, i = br(r, 1), Vd(r, lr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[lr], f[lr] = e, i = br(r, 1), f[lr] = a), rr)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ya(a) !== (h = Ya(s)) ? Zd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new pe(t._pt, i, n, o, u - o, td), t._pt.u = h || 0, t._props.push(n));
        ue(i, l)
    }
    var Ae, Se, Re, De, Ee, ze, Fe, Ie, Be = Ft.Power0,
        Le = Ft.Power1,
        Ye = Ft.Power2,
        Ne = Ft.Power3,
        qe = Ft.Power4,
        Ue = Ft.Linear,
        Ve = Ft.Quad,
        We = Ft.Cubic,
        Xe = Ft.Quart,
        He = Ft.Quint,
        Qe = Ft.Strong,
        Ke = Ft.Elastic,
        Ze = Ft.Back,
        Ge = Ft.SteppedEase,
        Je = Ft.Bounce,
        $e = Ft.Sine,
        tr = Ft.Expo,
        er = Ft.Circ,
        rr = {},
        ir = 180 / Math.PI,
        nr = Math.PI / 180,
        ar = Math.atan2,
        sr = /([A-Z])/g,
        or = /(left|right|width|margin|padding|x)/i,
        ur = /[\s,\(]\S/,
        hr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        lr = "transform",
        fr = lr + "Origin",
        cr = "O,Moz,ms,Ms,Webkit".split(","),
        dr = function _checkPropPrefix(t, e, r) {
            var i = (e || Ee).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(cr[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? cr[n] : "") + t
        },
        pr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        _r = {
            grid: 1,
            flex: 1
        },
        mr = function _get(t, e, r, i) {
            var n;
            return De || Qd(), e in hr && "transform" !== e && ~(e = hr[e]).indexOf(",") && (e = e.split(",")[0]), rr[e] && "transform" !== e ? (n = br(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : wr(Nd(t, fr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = vr[e] && vr[e](t, e, r) || Nd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Zd(t, e, n, r) + r : n
        },
        gr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        vr = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new pe(t._pt, e, r, 0, 0, ce);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        yr = [1, 0, 0, 1, 0, 0],
        Tr = {},
        br = function _parseTransform(t, e) {
            var r = t._gsap || new jt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w, x, k, M, O, P, C, A, S, R, D, E, z, F = t.style,
                I = r.scaleX < 0,
                B = "deg",
                L = getComputedStyle(t),
                Y = Nd(t, fr) || "0";
            return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Ud(t)), L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[lr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[lr] ? L[lr] : "")), F.scale = F.rotate = F.translate = "none"), m = ie(t, r.svg), r.svg && (O = r.uncache ? (P = t.getBBox(), Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), je(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== yr && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? ar(b, T) * ir : 0, (f = w || x ? ar(w, x) * ir + u : 0) && (o *= Math.abs(Math.cos(f * nr))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (z = m[6], D = m[7], A = m[8], S = m[9], R = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = ar(z, R)) * ir, g && (O = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), P = M * v + S * y, C = z * v + R * y, A = k * -y + A * v, S = M * -y + S * v, R = z * -y + R * v, E = D * -y + E * v, k = O, M = P, z = C), l = (g = ar(-w, R)) * ir, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, T = O = T * v - A * y, b = P = b * v - S * y, w = C = w * v - R * y), u = (g = ar(b, T)) * ir, g && (O = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = k * v + M * y, b = b * v - T * y, M = M * v - k * y, T = O, k = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(M * M + z * z)), g = ar(k, M), f = 2e-4 < Math.abs(g) ? g * ir : 0, d = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ge(Nd(t, lr)), O && t.setAttribute("transform", O))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + B, r.rotationX = ia(h) + B, r.rotationY = ia(l) + B, r.skewX = f + B, r.skewY = c + B, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[fr] = wr(Y)), r.xOffset = r.yOffset = 0, r.force3D = j.force3D, r.renderTransform = r.svg ? Cr : Ie ? Pr : xr, r.uncache = 0, r
        },
        wr = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        xr = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Pr(t, e)
        },
        kr = "0deg",
        Mr = "0px",
        Or = ") ",
        Pr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                c = r.skewY,
                d = r.scaleX,
                p = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== kr || h !== kr)) {
                var b, w = parseFloat(h) * nr,
                    x = Math.sin(w),
                    k = Math.cos(w);
                w = parseFloat(l) * nr, b = Math.cos(w), a = me(g, a, x * b * -v), s = me(g, s, -Math.sin(w) * -v), o = me(g, o, k * b * -v + v)
            }
            _ !== Mr && (y += "perspective(" + _ + Or), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Mr && s === Mr && o === Mr || (y += o !== Mr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Or), u !== kr && (y += "rotate(" + u + Or), h !== kr && (y += "rotateY(" + h + Or), l !== kr && (y += "rotateX(" + l + Or), f === kr && c === kr || (y += "skew(" + f + ", " + c + Or), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Or), g.style[lr] = y || "translate(0, 0)"
        },
        Cr = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                c = o.rotation,
                d = o.skewX,
                p = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                k = parseFloat(f);
            c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= nr, d *= nr, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= nr, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = Zd(g, "x", l, "px"), k = Zd(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), k = ia(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), k = ia(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[lr] = s)
        };
    ha("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        vr[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return mr(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var Ar, Sr, Rr, Dr = {
        name: "css",
        register: Qd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, i, n, a) {
            var s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w = this._props,
                x = t.style,
                k = i.vars.startAt;
            for (c in De || Qd(), this.styles = this.styles || Kd(t), b = this.styles.props, this.tween = i, e)
                if ("autoRound" !== c && (o = e[c], !pt[c] || !_b(c, e, i, n, t, a)))
                    if (l = typeof o, f = vr[c], "function" === l && (l = typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f) f(this, t, c, o, i) && (T = 1);
                    else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", Rt.lastIndex = 0, Rt.test(s) || (d = Ya(s), p = Ya(o)), p ? d !== p && (s = Zd(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, 0, x[c]);
            else if ("undefined" !== l) {
                if (k && c in k ? (s = "function" == typeof k[c] ? k[c].call(i, n, t, a) : k[c], r(s) && ~s.indexOf("random(") && (s = ob(s)), Ya(s + "") || (s += j.units[c] || Ya(mr(t, c)) || ""), "=" === (s + "").charAt(1) && (s = mr(t, c))) : s = mr(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in hr && ("autoAlpha" === c && (1 === h && "hidden" === mr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Wd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = hr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in rr)
                    if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || br(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new pe(this._pt, x, lr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new pe(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, td), this._pt.u = 0, w.push("scaleY", c), c += "X";
                    else {
                        if ("transformOrigin" === c) {
                            b.push(fr, 0, x[fr]), o = be(o), v.svg ? je(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Wd(this, v, "zOrigin", v.zOrigin, p), Wd(this, x, c, wr(s), wr(o)));
                            continue
                        }
                        if ("svgOrigin" === c) {
                            je(t, o, 1, y, 0, this);
                            continue
                        }
                        if (c in Tr) {
                            te(this, v, c, h, _ ? ka(h, _ + o) : o);
                            continue
                        }
                        if ("smoothOrigin" === c) {
                            Wd(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === c) {
                            v[c] = o;
                            continue
                        }
                        if ("transform" === c) {
                            ve(this, o, t);
                            continue
                        }
                    }
                else c in x || (c = dr(c) || c);
                if (m || (u || 0 === u) && (h || 0 === h) && !ur.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Ya(o) || (c in j.units ? j.units[c] : d)) && (h = Zd(t, c, s, p)), this._pt = new pe(this._pt, m ? v : x, c, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? td : wd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = vd);
                else if (c in x) _d.call(this, t, c, s, _ ? _ + o : o);
                else if (c in t) this.add(t, c, s || t[c], _ ? _ + o : o, n, a);
                else if ("parseTransform" !== c) {
                    Q(c, o);
                    continue
                }
                m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])), w.push(c)
            }
            T && de(this)
        },
        render: function render(t, e) {
            if (e.tween._time || !Fe())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: mr,
        aliases: hr,
        getSetter: function getSetter(t, e, r) {
            var i = hr[e];
            return i && i.indexOf(",") < 0 && (e = i), e in rr && e !== fr && (t._gsap.x || mr(t, "x")) ? r && ze === r ? "scale" === e ? Cd : Bd : (ze = r || {}) && ("scale" === e ? Dd : Ed) : t.style && !u(t.style[e]) ? zd : ~e.indexOf("-") ? Ad : re(t, e)
        },
        core: {
            _removeProperty: Vd,
            _getMatrix: ie
        }
    };
    Ce.utils.checkPrefix = dr, Ce.core.getStyleSaver = Kd, Rr = ha((Ar = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Sr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        rr[t] = 1
    }), ha(Sr, function(t) {
        j.units[t] = "deg", Tr[t] = 1
    }), hr[Rr[13]] = Ar + "," + Sr, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        hr[e[1]] = Rr[e[0]]
    }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        j.units[t] = "px"
    }), Ce.registerPlugin(Dr);
    var Er = Ce.registerPlugin(Dr) || Ce,
        zr = Er.core.Tween;
    e.Back = Ze, e.Bounce = Je, e.CSSPlugin = Dr, e.Circ = er, e.Cubic = We, e.Elastic = Ke, e.Expo = tr, e.Linear = Ue, e.Power0 = Be, e.Power1 = Le, e.Power2 = Ye, e.Power3 = Ne, e.Power4 = qe, e.Quad = Ve, e.Quart = Xe, e.Quint = He, e.Sine = $e, e.SteppedEase = Ge, e.Strong = Qe, e.TimelineLite = Ut, e.TimelineMax = Ut, e.TweenLite = Gt, e.TweenMax = zr, e.default = Er, e.gsap = Er;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
/*!
 * ScrollSmoother 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function s() {
        return "undefined" != typeof window
    }

    function t() {
        return D || s() && (D = window.gsap) && D.registerPlugin && D
    }
    var D, L, O, N, U, K, q, V, j, J, Y, W, G, Q, X, r = (ScrollSmoother.register = function register(e) {
        return L || (D = e || t(), s() && window.document && (O = window, N = document, U = N.documentElement, K = N.body), D && (q = D.utils.toArray, V = D.utils.clamp, Y = D.parseEase("expo"), Q = D.core.context || function() {}, X = D.delayedCall(.2, function() {
            return j.isRefreshing || J && J.refresh()
        }).pause(), j = D.core.globals().ScrollTrigger, D.core.globals("ScrollSmoother", ScrollSmoother), K && j && (W = j.core._getVelocityProp, G = j.core._inputObserver, ScrollSmoother.refresh = j.refresh, L = 1))), L
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(ScrollSmoother, [{
        key: "progress",
        get: function get() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]), ScrollSmoother);

    function ScrollSmoother(t) {
        var o = this;
        L || ScrollSmoother.register(D) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), t = this.vars = t || {}, J && J.kill(), Q(J = this);

        function za() {
            return z.update(-A)
        }

        function Ba() {
            return n.style.overflow = "visible"
        }

        function Da(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), d = !1, e.animation.progress(e.progress, !0)
        }

        function Ea(e, t) {
            (e !== A && !u || t) && (x && (e = Math.round(e)), C && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", n._gsap.y = e + "px"), F = e - A, A = e, j.isUpdating || j.update())
        }

        function Fa(e) {
            return arguments.length ? (e < 0 && (e = 0), M.y = -e, d = !0, u ? A = -e : Ea(-e), j.isRefreshing ? i.update() : _(e), this) : -A
        }

        function Ha(e) {
            b.scrollTop = 0, e.target.contains && e.target.contains(b) || E && !1 === E(o, e) || (j.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, "center center"), g = e.target)
        }

        function Ia(e) {
            var r, n, o, i;
            S.forEach(function(t) {
                r = t.pins, i = t.markers, e.forEach(function(e) {
                    t.trigger && e.trigger && t !== e && (e.trigger === t.trigger || e.pinnedContainer === t.trigger || t.trigger.contains(e.trigger)) && (n = e.start, o = (n - t.start - t.offset) / t.ratio - (n - t.start), r.forEach(function(e) {
                        return o -= e.distance / t.ratio - e.distance
                    }), e.setPositions(n + o, e.end + o), e.markerStart && i.push(D.quickSetter([e.markerStart, e.markerEnd], "y", "px")), e.pin && 0 < e.end && (o = e.end - e.start, r.push({
                        start: e.start,
                        end: e.end,
                        distance: o,
                        trig: e
                    }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)))
                })
            })
        }

        function Ja() {
            Ba(), requestAnimationFrame(Ba), S && (S.forEach(function(e) {
                var t = e.start,
                    r = e.auto ? Math.min(j.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
                    n = (r - e.end) / 2;
                t -= n, r -= n, e.offset = n || 1e-4, e.pins.length = 0, e.setPositions(Math.min(t, r), Math.max(t, r)), e.vars.onRefresh(e)
            }), Ia(j.sort())), z.reset()
        }

        function Ka() {
            return j.addEventListener("refresh", Ja)
        }

        function La() {
            return S && S.forEach(function(e) {
                return e.vars.onRefresh(e)
            })
        }

        function Ma() {
            return S && S.forEach(function(e) {
                return e.vars.onRefreshInit(e)
            }), La
        }

        function Na(t, r, n, o) {
            return function() {
                var e = "function" == typeof r ? r(n, o) : r;
                return e || 0 === e || (e = o.getAttribute("data-" + k + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + k + t, e), "auto" === e ? e : parseFloat(e)
            }
        }

        function Oa(r, e, t, n, o) {
            function Db() {
                e = f(), t = h(), i = parseFloat(e) || 1, c = (a = "auto" === e) ? 0 : .5, l && l.kill(), l = t && D.to(r, {
                    ease: Y,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                }), s && (s.ratio = i, s.autoSpeed = a)
            }

            function Eb() {
                g.y = d + "px", g.renderTransform(1), Db()
            }

            function Ib(e) {
                if (a) {
                    Eb();
                    var t = function _autoDistance(e, t) {
                        var r, n, o = e.parentNode || U,
                            i = e.getBoundingClientRect(),
                            s = o.getBoundingClientRect(),
                            a = s.top - i.top,
                            l = s.bottom - i.bottom,
                            c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t),
                            u = -c * t;
                        return 0 < c && (n = .5 == (r = s.height / (O.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, -c * r / (2 * r - 1)) * (t || 1), u += t ? -n * t : -n / 2, c += n), {
                            change: c,
                            offset: u
                        }
                    }(r, V(0, 1, -e.start / (e.end - e.start)));
                    m = t.change, u = t.offset
                } else m = (e.end - e.start) * (1 - i), u = 0;
                p.forEach(function(e) {
                    return m -= e.distance * (1 - i)
                }), e.vars.onUpdate(e), l && l.progress(1)
            }
            o = ("function" == typeof o ? o(n, r) : o) || 0;
            var i, s, a, l, c, u, f = Na("speed", e, n, r),
                h = Na("lag", t, n, r),
                d = D.getProperty(r, "y"),
                g = r._gsap,
                p = [],
                v = [],
                m = 0;
            return Db(), (1 !== i || a || l) && (Ib(s = j.create({
                trigger: a ? r.parentNode : r,
                start: "top bottom+=" + o,
                end: "bottom top-=" + o,
                scroller: b,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: Eb,
                onRefresh: Ib,
                onKill: function onKill(e) {
                    var t = S.indexOf(e);
                    0 <= t && S.splice(t, 1), Eb()
                },
                onUpdate: function onUpdate(e) {
                    var t, r, n, o = d + m * (e.progress - c),
                        i = p.length,
                        s = 0;
                    if (e.offset) {
                        if (i) {
                            for (r = -A, n = e.end; i--;) {
                                if ((t = p[i]).trig.isActive || r >= t.start && r <= t.end) return void(l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(g.y), -F, !0), I && l.progress(1)));
                                r > t.end && (s += t.distance), n -= t.distance
                            }
                            o = d + s + m * ((D.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c)
                        }
                        o = function _round(e) {
                            return Math.round(1e5 * e) / 1e5 || 0
                        }(o + u), v.length && !a && v.forEach(function(e) {
                            return e(o - s)
                        }), l ? (l.resetTo("y", o, -F, !0), I && l.progress(1)) : (g.y = o + "px", g.renderTransform(1))
                    }
                }
            })), D.core.getCache(s.trigger).stRevert = Ma, s.startY = d, s.pins = p, s.markers = v, s.ratio = i, s.autoSpeed = a, r.style.willChange = "transform"), s
        }
        var n, b, e, i, S, s, a, l, c, u, r, f, h, d, g, p = t.smoothTouch,
            v = t.onUpdate,
            m = t.onStop,
            w = t.smooth,
            E = t.onFocusIn,
            T = t.normalizeScroll,
            x = t.wholePixels,
            P = this,
            R = "undefined" != typeof ResizeObserver && !1 !== t.autoResize && new ResizeObserver(function() {
                return j.isRefreshing || X.restart(!0)
            }),
            k = t.effectsPrefix || "",
            _ = j.getScrollFunc(O),
            C = 1 === j.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === w || !1 === w ? 0 : parseFloat(w) || .8,
            H = C && +t.speed || 1,
            A = 0,
            F = 0,
            I = 1,
            z = W(0),
            M = {
                y: 0
            };

        function refreshHeight() {
            return e = n.clientHeight, n.style.overflow = "visible", K.style.height = O.innerHeight + (e - O.innerHeight) / H + "px", e - O.innerHeight
        }
        Ka(), j.addEventListener("killAll", Ka), D.delayedCall(.5, function() {
            return I = 0
        }), this.scrollTop = Fa, this.scrollTo = function(e, t, r) {
            var n = D.utils.clamp(0, j.maxScroll(O), isNaN(e) ? o.offset(e, r) : +e);
            t ? u ? D.to(o, {
                duration: C,
                scrollTop: n,
                overwrite: "auto",
                ease: Y
            }) : _(n) : Fa(n)
        }, this.offset = function(e, t) {
            var r, n = (e = q(e)[0]).style.cssText,
                o = j.create({
                    trigger: e,
                    start: t || "top top"
                });
            return S && Ia([o]), r = o.start, o.kill(!1), e.style.cssText = n, D.core.getCache(e).uncache = 1, r
        }, this.content = function(e) {
            if (arguments.length) {
                var t = q(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || K.children[0];
                return t !== n && (c = (n = t).getAttribute("style") || "", R && R.observe(n), D.set(n, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }), C || D.set(n, {
                    clearProps: "transform"
                })), this
            }
            return n
        }, this.wrapper = function(e) {
            return arguments.length ? (b = q(e || "#smooth-wrapper")[0] || function _wrap(e) {
                var t = N.querySelector(".ScrollSmoother-wrapper");
                return t || ((t = N.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            }(n), l = b.getAttribute("style") || "", refreshHeight(), D.set(b, C ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }), this) : b
        }, this.effects = function(e, t) {
            if (S = S || [], !e) return S.slice(0);
            (e = q(e)).forEach(function(e) {
                for (var t = S.length; t--;) S[t].trigger === e && S[t].kill()
            });
            t = t || {};
            var r, n, o = t.speed,
                i = t.lag,
                s = t.effectsPadding,
                a = [];
            for (r = 0; r < e.length; r++)(n = Oa(e[r], o, i, r, s)) && a.push(n);
            return S.push.apply(S, a), a
        }, this.sections = function(e, t) {
            if (s = s || [], !e) return s.slice(0);
            var r = q(e).map(function(t) {
                return j.create({
                    trigger: t,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function onToggle(e) {
                        t.style.opacity = e.isActive ? "1" : "0", t.style.pointerEvents = e.isActive ? "all" : "none"
                    }
                })
            });
            return t && t.add ? s.push.apply(s, r) : s = r.slice(0), r
        }, this.content(t.content), this.wrapper(t.wrapper), this.render = function(e) {
            return Ea(e || 0 === e ? e : A)
        }, this.getVelocity = function() {
            return z.getVelocity(-A)
        }, j.scrollerProxy(b, {
            scrollTop: Fa,
            scrollHeight: function scrollHeight() {
                return refreshHeight() && K.scrollHeight
            },
            fixedMarkers: !1 !== t.fixedMarkers && !!C,
            content: n,
            getBoundingClientRect: function getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: O.innerWidth,
                    height: O.innerHeight
                }
            }
        }), j.defaults({
            scroller: b
        });
        var B = j.getAll().filter(function(e) {
            return e.scroller === O || e.scroller === b
        });
        B.forEach(function(e) {
            return e.revert(!0, !0)
        }), i = j.create({
            animation: D.fromTo(M, {
                y: 0
            }, {
                y: function y() {
                    return -refreshHeight()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function onUpdate() {
                    if (this._dur) {
                        var e = d;
                        e && (Da(i), M.y = A), Ea(M.y, e), za(), v && !u && v(P)
                    }
                }
            }),
            onRefreshInit: function onRefreshInit(e) {
                if (S) {
                    var t = j.getAll().filter(function(e) {
                        return !!e.pin
                    });
                    S.forEach(function(r) {
                        r.vars.pinnedContainer || t.forEach(function(e) {
                            if (e.pin.contains(r.trigger)) {
                                var t = r.vars;
                                t.pinnedContainer = e.pin, r.vars = null, r.init(t, r.animation)
                            }
                        })
                    })
                }
                var r = e.getTween();
                h = r && r._end > r._dp._time, f = A, M.y = 0, C && (b.style.pointerEvents = "none", b.scrollTop = 0, setTimeout(function() {
                    return b.style.removeProperty("pointer-events")
                }, 50))
            },
            onRefresh: function onRefresh(e) {
                e.animation.invalidate(), e.setPositions(e.start, refreshHeight() / H), h || Da(e), M.y = -_(), Ea(M.y), I || e.animation.progress(D.utils.clamp(0, 1, f / -e.end)), h && (e.progress -= .001, e.update())
            },
            id: "ScrollSmoother",
            scroller: O,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: function end() {
                return refreshHeight() / H
            },
            onScrubComplete: function onScrubComplete() {
                z.reset(), m && m(o)
            },
            scrub: C || !0
        }), this.smooth = function(e) {
            return arguments.length && (H = (C = e || 0) && +t.speed || 1, i.scrubDuration(e)), i.getTween() ? i.getTween().duration() : 0
        }, i.getTween() && (i.getTween().vars.ease = t.ease || Y), this.scrollTrigger = i, t.effects && this.effects(!0 === t.effects ? "[data-" + k + "speed], [data-" + k + "lag]" : t.effects, {
            effectsPadding: t.effectsPadding
        }), t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections), B.forEach(function(e) {
            e.vars.scroller = b, e.revert(!1, !0), e.init(e.vars, e.animation)
        }), this.paused = function(e, t) {
            return arguments.length ? (!!u !== e && (e ? (i.getTween() && i.getTween().pause(), _(-A), z.reset(), (r = j.normalizeScroll()) && r.disable(), (u = j.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function onChangeY() {
                    return Fa(-A)
                }
            })).nested = G(U, "wheel,touch,scroll", !0, !1 !== t)) : (u.nested.kill(), u.kill(), u = 0, r && r.enable(), i.progress = (-A - i.start) / (i.end - i.start), Da(i))), this) : !!u
        }, this.kill = this.revert = function() {
            o.paused(!1), Da(i), i.kill();
            for (var e = (S || []).concat(s || []), t = e.length; t--;) e[t].kill();
            j.scrollerProxy(b), j.removeEventListener("killAll", Ka), j.removeEventListener("refresh", Ja), b.style.cssText = l, n.style.cssText = c;
            var r = j.defaults({});
            r && r.scroller === b && j.defaults({
                scroller: O
            }), o.normalizer && j.normalizeScroll(!1), clearInterval(a), J = null, R && R.disconnect(), K.style.removeProperty("height"), O.removeEventListener("focusin", Ha)
        }, this.refresh = function(e, t) {
            return i.refresh(e, t)
        }, T && (this.normalizer = j.normalizeScroll(!0 === T ? {
            debounce: !0,
            content: !C && n
        } : T)), j.config(t), "overscrollBehavior" in O.getComputedStyle(K) && D.set([K, U], {
            overscrollBehavior: "none"
        }), "scrollBehavior" in O.getComputedStyle(K) && D.set([K, U], {
            scrollBehavior: "auto"
        }), O.addEventListener("focusin", Ha), a = setInterval(za, 250), "loading" === N.readyState || requestAnimationFrame(function() {
            return j.refresh()
        })
    }
    r.version = "3.11.4", r.create = function(e) {
        return J && e && J.content() === q(e.content)[0] ? J : new r(e)
    }, r.get = function() {
        return J
    }, t() && D.registerPlugin(r), e.ScrollSmoother = r, e.default = r;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
/*!
 * ScrollToPlugin 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function l() {
        return "undefined" != typeof window
    }

    function m() {
        return f || l() && (f = window.gsap) && f.registerPlugin && f
    }

    function n(e) {
        return "string" == typeof e
    }

    function o(e) {
        return "function" == typeof e
    }

    function p(e, t) {
        var o = "x" === t ? "Width" : "Height",
            n = "scroll" + o,
            l = "client" + o;
        return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[l] || c[l]) : e[n] - e["offset" + o]
    }

    function q(e, t) {
        var o = "scroll" + ("x" === t ? "Left" : "Top");
        return e === T && (null != e.pageXOffset ? o = "page" + t.toUpperCase() + "Offset" : e = null != i[o] ? i : c),
            function() {
                return e[o]
            }
    }

    function s(e, t) {
        if (!(e = y(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var o = e.getBoundingClientRect(),
            n = !t || t === T || t === c,
            l = n ? {
                top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0),
                left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            r = {
                x: o.left - l.left,
                y: o.top - l.top
            };
        return !n && t && (r.x += q(t, "x")(), r.y += q(t, "y")()), r
    }

    function t(e, t, o, l, r) {
        return isNaN(e) || "object" == typeof e ? n(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + l - r : "max" === e ? p(t, o) - r : Math.min(p(t, o), s(e, t)[o] - r) : parseFloat(e) - r
    }

    function u() {
        f = m(), l() && f && "undefined" != typeof document && document.body && (T = window, c = document.body, i = document.documentElement, y = f.utils.toArray, f.config({
            autoKillThreshold: 7
        }), v = f.config(), a = 1)
    }
    var f, a, T, i, c, y, v, h, r = {
        version: "3.11.4",
        name: "scrollTo",
        rawVars: 1,
        register: function register(e) {
            f = e, u()
        },
        init: function init(e, l, r, s, i) {
            a || u();
            var p = this,
                c = f.getProperty(e, "scrollSnapType");
            p.isWin = e === T, p.target = e, p.tween = r, l = function _clean(e, t, l, r) {
                if (o(e) && (e = e(t, l, r)), "object" != typeof e) return n(e) && "max" !== e && "=" !== e.charAt(1) ? {
                    x: e,
                    y: e
                } : {
                    y: e
                };
                if (e.nodeType) return {
                    y: e,
                    x: e
                };
                var s, i = {};
                for (s in e) i[s] = "onAutoKill" !== s && o(e[s]) ? e[s](t, l, r) : e[s];
                return i
            }(l, s, e, i), p.vars = l, p.autoKill = !!l.autoKill, p.getX = q(e, "x"), p.getY = q(e, "y"), p.x = p.xPrev = p.getX(), p.y = p.yPrev = p.getY(), h = h || f.core.globals().ScrollTrigger, "smooth" === f.getProperty(e, "scrollBehavior") && f.set(e, {
                scrollBehavior: "auto"
            }), c && "none" !== c && (p.snap = 1, p.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != l.x ? (p.add(p, "x", p.x, t(l.x, e, "x", p.x, l.offsetX || 0), s, i), p._props.push("scrollTo_x")) : p.skipX = 1, null != l.y ? (p.add(p, "y", p.y, t(l.y, e, "y", p.y, l.offsetY || 0), s, i), p._props.push("scrollTo_y")) : p.skipY = 1
        },
        render: function render(e, t) {
            for (var o, n, l, r, s, i = t._pt, c = t.target, u = t.tween, f = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, g = t.snap, x = t.snapInline; i;) i.r(e, i.d), i = i._next;
            o = d || !t.skipX ? t.getX() : a, l = (n = d || !t.skipY ? t.getY() : y) - y, r = o - a, s = v.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), f && (!t.skipX && (s < r || r < -s) && o < p(c, "x") && (t.skipX = 1), !t.skipY && (s < l || l < -s) && n < p(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (u.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))), d ? T.scrollTo(t.skipX ? o : t.x, t.skipY ? n : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !g || 1 !== e && 0 !== e || (n = c.scrollTop, o = c.scrollLeft, x ? c.style.scrollSnapType = x : c.style.removeProperty("scroll-snap-type"), c.scrollTop = n + 1, c.scrollLeft = o + 1, c.scrollTop = n, c.scrollLeft = o), t.xPrev = t.x, t.yPrev = t.y, h && h.update()
        },
        kill: function kill(e) {
            var t = "scrollTo" === e;
            !t && "scrollTo_x" !== e || (this.skipX = 1), !t && "scrollTo_y" !== e || (this.skipY = 1)
        }
    };
    r.max = p, r.getOffset = s, r.buildGetter = q, m() && f.registerPlugin(r), e.ScrollToPlugin = r, e.default = r;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r() {
        return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we
    }

    function z(e, t) {
        return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t]
    }

    function A(e) {
        return !!~t.indexOf(e)
    }

    function B(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }

    function C(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function F() {
        return Be && Be.isPressed || ze.cache++
    }

    function G(r, n) {
        function Tc(e) {
            if (e || 0 === e) {
                o && (Ce.history.scrollRestoration = "manual");
                var t = Be && Be.isPressed;
                e = Tc.v = Math.round(e) || (Be && Be.iOS ? 1 : 0), r(e), Tc.cacheID = ze.cache, t && i("ss", e)
            } else(n || ze.cache !== Tc.cacheID || i("ref")) && (Tc.cacheID = ze.cache, Tc.v = r());
            return Tc.v + Tc.offset
        }
        return Tc.offset = 0, r && Tc
    }

    function J(e) {
        return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function K(t, e) {
        var r = e.s,
            n = e.sc;
        A(t) && (t = Ee.scrollingElement || ke);
        var o = ze.indexOf(t),
            i = n === Ke.sc ? 1 : 2;
        ~o || (o = ze.push(t) - 1), ze[o + i] || t.addEventListener("scroll", F);
        var a = ze[o + i],
            s = a || (ze[o + i] = G(z(t, r), !0) || (A(t) ? n : G(function(e) {
                return arguments.length ? t[r] = e : t[r]
            })));
        return s.target = t, a || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")), s
    }

    function L(e, t, o) {
        function pd(e, t) {
            var r = Ne();
            t || n < r - s ? (a = i, i = e, l = s, s = r) : o ? i += e : i = a + (e - a) / (r - l) * (s - l)
        }
        var i = e,
            a = e,
            s = Ne(),
            l = s,
            n = t || 50,
            c = Math.max(500, 3 * n);
        return {
            update: pd,
            reset: function reset() {
                a = i = o ? 0 : i, l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l,
                    r = a,
                    n = Ne();
                return !e && 0 !== e || e === i || pd(e), s === l || c < n - l ? 0 : (i + (o ? r : -r)) / ((o ? n : s) - t) * 1e3
            }
        }
    }

    function M(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function N(e) {
        var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }

    function O() {
        (Ae = we.core.globals().ScrollTrigger) && Ae.core && function _integrate() {
            var e = Ae.core,
                r = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
            t.push.apply(t, ze), n.push.apply(n, Fe), ze = t, Fe = n, i = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }

    function P(e) {
        return (we = e || r()) && "undefined" != typeof document && document.body && (Ce = window, ke = (Ee = document).documentElement, Me = Ee.body, t = [Ce, Ee, ke, Me], we.utils.clamp, Ie = we.core.context || function() {}, Oe = "onpointerenter" in Me ? "pointer" : "mouse", Pe = E.isTouch = Ce.matchMedia && Ce.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ce || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, De = E.eventTypes = ("ontouchstart" in ke ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ke ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return o = 0
        }, 500), O(), Se = 1), Se
    }
    var we, Se, Ce, Ee, ke, Me, Pe, Oe, Ae, t, Be, De, Ie, o = 1,
        Le = [],
        ze = [],
        Fe = [],
        Ne = Date.now,
        i = function _bridge(e, t) {
            return t
        },
        n = "scrollLeft",
        a = "scrollTop",
        Xe = {
            s: n,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: G(function(e) {
                return arguments.length ? Ce.scrollTo(e, Ke.sc()) : Ce.pageXOffset || Ee[n] || ke[n] || Me[n] || 0
            })
        },
        Ke = {
            s: a,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: Xe,
            sc: G(function(e) {
                return arguments.length ? Ce.scrollTo(Xe.sc(), e) : Ce.pageYOffset || Ee[a] || ke[a] || Me[a] || 0
            })
        };
    Xe.op = Ke, ze.cache = 0;
    var E = (Observer.prototype.init = function init(e) {
        Se || P(we) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || O();
        var o = e.tolerance,
            a = e.dragMinimum,
            t = e.type,
            i = e.target,
            r = e.lineHeight,
            n = e.debounce,
            s = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            f = e.wheelSpeed,
            p = e.event,
            d = e.onDragStart,
            g = e.onDragEnd,
            h = e.onDrag,
            v = e.onPress,
            b = e.onRelease,
            m = e.onRight,
            y = e.onLeft,
            x = e.onUp,
            w = e.onDown,
            _ = e.onChangeX,
            T = e.onChangeY,
            S = e.onChange,
            E = e.onToggleX,
            k = e.onToggleY,
            D = e.onHover,
            I = e.onHoverEnd,
            R = e.onMove,
            Y = e.ignoreCheck,
            z = e.isNormalizer,
            X = e.onGestureStart,
            W = e.onGestureEnd,
            H = e.onWheel,
            U = e.onEnable,
            j = e.onDisable,
            q = e.onClick,
            V = e.scrollSpeed,
            G = e.capture,
            Z = e.allowClicks,
            $ = e.lockAxis,
            Q = e.onLockAxis;

        function Qe() {
            return ye = Ne()
        }

        function Re(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || Y && Y(e, t)
        }

        function Te() {
            var e = se.deltaX = N(be),
                t = se.deltaY = N(me),
                r = Math.abs(e) >= o,
                n = Math.abs(t) >= o;
            S && (r || n) && S(se, e, t, be, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), _ && _(se), E && se.deltaX < 0 != le < 0 && E(se), le = se.deltaX, be[0] = be[1] = be[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), T && T(se), k && se.deltaY < 0 != ce < 0 && k(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (R && R(se), re && (h(se), re = !1), ne = !1), ie && !(ie = !1) && Q && Q(se), oe && (H(se), oe = !1), ee = 0
        }

        function Ue(e, t, r) {
            be[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), n ? ee = ee || requestAnimationFrame(Te) : Te()
        }

        function Ve(e, t) {
            $ && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", ie = !0), "y" !== ae && (be[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), n ? ee = ee || requestAnimationFrame(Te) : Te()
        }

        function We(e) {
            if (!Re(e, 1)) {
                var t = (e = M(e, s)).clientX,
                    r = e.clientY,
                    n = t - se.x,
                    o = r - se.y,
                    i = se.isDragging;
                se.x = t, se.y = r, (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), i || (se.isDragging = !0), Ve(n, o), i || d && d(se))
            }
        }

        function Ye(t) {
            if (!Re(t, 1)) {
                C(z ? i : ve, De[1], We, !0);
                var e = !isNaN(se.y - se.startY),
                    r = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
                    n = M(t);
                !r && e && (se._vx.reset(), se._vy.reset(), s && Z && we.delayedCall(.08, function() {
                    if (300 < Ne() - ye && !t.defaultPrevented)
                        if (t.target.click) t.target.click();
                        else if (ve.createEvent) {
                        var e = ve.createEvent("MouseEvents");
                        e.initMouseEvent("click", !0, !0, Ce, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                    }
                })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !z && te.restart(!0), g && r && g(se), b && b(se, r)
            }
        }

        function Ze(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && X(e, se.isDragging)
        }

        function $e() {
            return (se.isGesturing = !1) || W(se)
        }

        function _e(e) {
            if (!Re(e)) {
                var t = ue(),
                    r = fe();
                Ue((t - pe) * V, (r - de) * V, 1), pe = t, de = r, l && te.restart(!0)
            }
        }

        function af(e) {
            if (!Re(e)) {
                e = M(e, s), H && (oe = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Ce.innerHeight : 1) * f;
                Ue(e.deltaX * t, e.deltaY * t, 0), l && !z && te.restart(!0)
            }
        }

        function bf(e) {
            if (!Re(e)) {
                var t = e.clientX,
                    r = e.clientY,
                    n = t - se.x,
                    o = r - se.y;
                se.x = t, se.y = r, ne = !0, (n || o) && Ve(n, o)
            }
        }

        function cf(e) {
            se.event = e, D(se)
        }

        function df(e) {
            se.event = e, I(se)
        }

        function ef(e) {
            return Re(e) || M(e, s) && q(se)
        }
        this.target = i = J(i) || ke, this.vars = e, u = u && we.utils.toArray(u), o = o || 1e-9, a = a || 0, f = f || 1, V = V || 1, t = t || "wheel,touch,pointer", n = !1 !== n, r = r || parseFloat(Ce.getComputedStyle(Me).lineHeight) || 22;
        var ee, te, re, ne, oe, ie, ae, se = this,
            le = 0,
            ce = 0,
            ue = K(i, Xe),
            fe = K(i, Ke),
            pe = ue(),
            de = fe(),
            ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === De[0],
            he = A(i),
            ve = i.ownerDocument || Ee,
            be = [0, 0, 0],
            me = [0, 0, 0],
            ye = 0,
            xe = se.onPress = function(e) {
                Re(e, 1) || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = M(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), B(z ? i : ve, De[1], We, s, !0), se.deltaX = se.deltaY = 0, v && v(se))
            };
        te = se._dc = we.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = L(0, 50, !0), se._vy = L(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, Ie(this), se.enable = function(e) {
            return se.isEnabled || (B(he ? ve : i, "scroll", F), 0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", _e, s, G), 0 <= t.indexOf("wheel") && B(i, "wheel", af, s, G), (0 <= t.indexOf("touch") && Pe || 0 <= t.indexOf("pointer")) && (B(i, De[0], xe, s, G), B(ve, De[2], Ye), B(ve, De[3], Ye), Z && B(i, "click", Qe, !1, !0), q && B(i, "click", ef), X && B(ve, "gesturestart", Ze), W && B(ve, "gestureend", $e), D && B(i, Oe + "enter", cf), I && B(i, Oe + "leave", df), R && B(i, Oe + "move", bf)), se.isEnabled = !0, e && e.type && xe(e), U && U(se)), se
        }, se.disable = function() {
            se.isEnabled && (Le.filter(function(e) {
                return e !== se && A(e.target)
            }).length || C(he ? ve : i, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), C(z ? i : ve, De[1], We, !0)), C(he ? ve : i, "scroll", _e, G), C(i, "wheel", af, G), C(i, De[0], xe, G), C(ve, De[2], Ye), C(ve, De[3], Ye), C(i, "click", Qe, !0), C(i, "click", ef), C(ve, "gesturestart", Ze), C(ve, "gestureend", $e), C(i, Oe + "enter", cf), C(i, Oe + "leave", df), C(i, Oe + "move", bf), se.isEnabled = se.isPressed = se.isDragging = !1, j && j(se))
        }, se.kill = se.revert = function() {
            se.disable();
            var e = Le.indexOf(se);
            0 <= e && Le.splice(e, 1), Be === se && (Be = 0)
        }, Le.push(se), z && A(i) && (Be = se), se.enable(p)
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]), Observer);

    function Observer(e) {
        this.init(e)
    }
    E.version = "3.11.4", E.create = function(e) {
        return new E(e)
    }, E.register = P, E.getAll = function() {
        return Le.slice()
    }, E.getById = function(t) {
        return Le.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, r() && we.registerPlugin(E);

    function ya() {
        return ot = 1
    }

    function za() {
        return ot = 0
    }

    function Aa(e) {
        return e
    }

    function Ba(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function Ca() {
        return "undefined" != typeof window
    }

    function Da() {
        return He || Ca() && (He = window.gsap) && He.registerPlugin && He
    }

    function Ea(e) {
        return !!~l.indexOf(e)
    }

    function Fa(e) {
        return z(e, "getBoundingClientRect") || (Ea(e) ? function() {
            return Yt.width = Je.innerWidth, Yt.height = Je.innerHeight, Yt
        } : function() {
            return Mt(e)
        })
    }

    function Ia(e, t) {
        var r = t.s,
            n = t.d2,
            o = t.d,
            i = t.a;
        return (r = "scroll" + n) && (i = z(e, r)) ? i() - Fa(e)()[o] : Ea(e) ? (qe[r] || Ge[r]) - (Je["inner" + n] || qe["client" + n] || Ge["client" + n]) : e[r] - e["offset" + n]
    }

    function Ja(e, t) {
        for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2])
    }

    function Ka(e) {
        return "string" == typeof e
    }

    function La(e) {
        return "function" == typeof e
    }

    function Ma(e) {
        return "number" == typeof e
    }

    function Na(e) {
        return "object" == typeof e
    }

    function Oa(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function Pa(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }

    function eb(e) {
        return Je.getComputedStyle(e)
    }

    function gb(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function ib(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function jb(e) {
        var t, r = [],
            n = e.labels,
            o = e.duration();
        for (t in n) r.push(n[t] / o);
        return r
    }

    function lb(o) {
        var i = He.utils.snap(o),
            a = Array.isArray(o) && o.slice(0).sort(function(e, t) {
                return e - t
            });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return i(e);
            if (0 < t) {
                for (e -= r, n = 0; n < a.length; n++)
                    if (a[n] >= e) return a[n];
                return a[n - 1]
            }
            for (n = a.length, e += r; n--;)
                if (a[n] <= e) return a[n];
            return a[0]
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = i(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o)
        }
    }

    function nb(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function ob(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }

    function pb(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function qb(e, t, r) {
        return r && r.wheelHandler && e(t, "wheel", r)
    }

    function ub(e, t) {
        if (Ka(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in I ? I[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function vb(e, t, r, n, o, i, a, s) {
        var l = o.startColor,
            c = o.endColor,
            u = o.fontSize,
            f = o.indent,
            p = o.fontWeight,
            d = je.createElement("div"),
            g = Ea(r) || "fixed" === z(r, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            v = g ? Ge : r,
            b = -1 !== e.indexOf("start"),
            m = b ? l : c,
            y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === Ke ? T : S) + ":" + (i + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = b, d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), d.style.cssText = y, d.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d), d._offset = d["offset" + n.op.d2], R(d, 0, n, b), d
    }

    function Ab() {
        return 34 < gt() - ht && (w = w || requestAnimationFrame(j))
    }

    function Bb() {
        v && v.isPressed && !(v.startX > Ge.clientWidth) || (ze.cache++, v ? w = w || requestAnimationFrame(j) : j(), ht || W("scrollStart"), ht = gt())
    }

    function Cb() {
        y = Je.innerWidth, m = Je.innerHeight
    }

    function Db() {
        ze.cache++, nt || h || je.fullscreenElement || je.webkitFullscreenElement || b && y === Je.innerWidth && !(Math.abs(Je.innerHeight - m) > .25 * Je.innerHeight) || c.restart(!0)
    }

    function Gb() {
        return pb(Q, "scrollEnd", Gb) || It(!0)
    }

    function Jb(e) {
        for (var t = 0; t < H.length; t += 5)(!e || H[t + 4] && H[t + 4].query === e) && (H[t].style.cssText = H[t + 1], H[t].getBBox && H[t].setAttribute("transform", H[t + 2] || ""), H[t + 3].uncache = 1)
    }

    function Kb(e, t) {
        var r;
        for (it = 0; it < At.length; it++) !(r = At[it]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        t && Jb(t), t || W("revert")
    }

    function Lb(e, t) {
        ze.cache++, !t && ut || ze.forEach(function(e) {
            return La(e) && e.cacheID++ && (e.rec = 0)
        }), Ka(e) && (Je.history.scrollRestoration = x = e)
    }

    function Yb(e, t, r, n) {
        if (!e._gsap.swappedIn) {
            for (var o, i = q.length, a = t.style, s = e.style; i--;) a[o = q[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[S] = s[T] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[mt] = ib(e, Xe) + kt, a[yt] = ib(e, Ke) + kt, a[St] = s[Ct] = s.top = s.left = "0", Rt(n), s[mt] = s.maxWidth = r[mt], s[yt] = s.maxHeight = r[yt], s[St] = r[St], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    }

    function _b(e) {
        for (var t = V.length, r = e.style, n = [], o = 0; o < t; o++) n.push(V[o], r[V[o]]);
        return n.t = e, n
    }

    function cc(e, t, r, n, o, i, a, s, l, c, u, f, p) {
        La(e) && (e = e(s)), Ka(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? ub("0" + e.substr(3), r) : 0));
        var d, g, h, v = p ? p.time() : 0;
        if (p && p.seek(0), Ma(e)) a && R(a, r, n, !0);
        else {
            La(t) && (t = t(s));
            var b, m, y, x, w = (e || "0").split(" ");
            h = J(t) || Ge, (b = Mt(h) || {}) && (b.left || b.top) || "none" !== eb(h).display || (x = h.style.display, h.style.display = "block", b = Mt(h), x ? h.style.display = x : h.style.removeProperty("display")), m = ub(w[0], b[n.d]), y = ub(w[1] || "0", r), e = b[n.p] - l[n.p] - c + m + o - y, a && R(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y
        }
        if (i) {
            var _ = e + r,
                T = i._isStart;
            d = "scroll" + n.d2, R(i, _, n, T && 20 < _ || !T && (u ? Math.max(Ge[d], qe[d]) : i.parentNode[d]) <= _ + 1), u && (l = Mt(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + kt))
        }
        return p && h && (d = Mt(h), p.seek(f), g = Mt(h), p._caScrollDist = d[n.p] - g[n.p], e = e / p._caScrollDist * f), p && p.seek(v), p ? e : Math.round(e)
    }

    function ec(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === Ge) {
                for (o in e._stOrig = a.cssText, i = eb(e)) + o || $.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            He.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function fc(l, e) {
        function Uj(e, t, r, n, o) {
            var i = Uj.tween,
                a = t.onComplete,
                s = {};
            return r = r || f(), o = n && o || 0, n = n || e - r, i && i.kill(), c = Math.round(r), t[p] = e, (t.modifiers = s)[p] = function(e) {
                return (e = Math.round(f())) !== c && e !== u && 3 < Math.abs(e - c) && 3 < Math.abs(e - u) ? (i.kill(), Uj.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio, u = c, c = Math.round(e)
            }, t.onUpdate = function() {
                ze.cache++, j()
            }, t.onComplete = function() {
                Uj.tween = 0, a && a.call(i)
            }, i = Uj.tween = He.to(l, t)
        }
        var c, u, f = K(l, e),
            p = "_scroll" + e.p2;
        return (l[p] = f).wheelHandler = function() {
            return Uj.tween && Uj.tween.kill() && (Uj.tween = 0)
        }, ob(l, "wheel", f.wheelHandler), Uj
    }
    var He, s, Je, je, qe, Ge, l, c, et, tt, rt, u, nt, ot, f, it, p, d, g, at, st, h, v, b, m, y, k, lt, x, ct, w, ut, ft, pt, dt = 1,
        gt = Date.now,
        _ = gt(),
        ht = 0,
        vt = 0,
        bt = Math.abs,
        T = "right",
        S = "bottom",
        mt = "width",
        yt = "height",
        xt = "Right",
        wt = "Left",
        _t = "Top",
        Tt = "Bottom",
        St = "padding",
        Ct = "margin",
        Et = "Width",
        D = "Height",
        kt = "px",
        Mt = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== eb(e)[f] && He.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        Pt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Ot = {
            toggleActions: "play",
            anticipatePin: 0
        },
        I = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        R = function _positionMarker(e, t, r, n) {
            var o = {
                    display: "block"
                },
                i = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + Et] = 1, o["border" + a + Et] = 0, o[r.p] = t + "px", He.set(e, o)
        },
        At = [],
        Bt = {},
        Y = {},
        X = [],
        W = function _dispatch(e) {
            return Y[e] && Y[e].map(function(e) {
                return e()
            }) || X
        },
        H = [],
        Dt = 0,
        It = function _refreshAll(e, t) {
            if (!ht || e) {
                ut = Q.isRefreshing = !0, ze.forEach(function(e) {
                    return La(e) && e.cacheID++ && (e.rec = e())
                });
                var r = W("refreshInit");
                at && Q.sort(), t || Kb(), ze.forEach(function(e) {
                    La(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                }), At.slice(0).forEach(function(e) {
                    return e.refresh()
                }), At.forEach(function(e, t) {
                    if (e._subPinOffset && e.pin) {
                        var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            n = e.pin[r];
                        e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.revert(!1, 1)
                    }
                }), At.forEach(function(e) {
                    return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Ia(e.scroller, e._dir)))
                }), r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }), ze.forEach(function(e) {
                    La(e) && (e.smooth && requestAnimationFrame(function() {
                        return e.target.style.scrollBehavior = "smooth"
                    }), e.rec && e(e.rec))
                }), Lb(x, 1), c.pause(), Dt++, j(2), At.forEach(function(e) {
                    return La(e.vars.onRefresh) && e.vars.onRefresh(e)
                }), ut = Q.isRefreshing = !1, W("refresh")
            } else ob(Q, "scrollEnd", Gb)
        },
        U = 0,
        Lt = 1,
        j = function _updateAll(e) {
            if (!ut || 2 === e) {
                Q.isUpdating = !0, pt && pt.update(0);
                var t = At.length,
                    r = gt(),
                    n = 50 <= r - _,
                    o = t && At[0].scroll();
                if (Lt = o < U ? -1 : 1, U = o, n && (ht && !ot && 200 < r - ht && (ht = 0, W("scrollEnd")), rt = _, _ = r), Lt < 0) {
                    for (it = t; 0 < it--;) At[it] && At[it].update(0, n);
                    Lt = 1
                } else
                    for (it = 0; it < t; it++) At[it] && At[it].update(0, n);
                Q.isUpdating = !1
            }
            w = 0
        },
        q = ["left", "top", S, T, Ct + Tt, Ct + xt, Ct + _t, Ct + wt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        V = q.concat([mt, yt, "boxSizing", "max" + Et, "max" + D, "position", Ct, St, St + _t, St + xt, St + Tt, St + wt]),
        Z = /([A-Z])/g,
        Rt = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    o = e.length,
                    i = 0;
                for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Z, "-$1").toLowerCase())
            }
        },
        Yt = {
            left: 0,
            top: 0
        },
        $ = /(webkit|moz|length|cssText|inset)/i,
        Q = (ScrollTrigger.prototype.init = function init(S, C) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), vt) {
                var E, n, d, k, M, P, O, A, B, D, I, e, L, R, Y, F, N, t, X, b, W, H, m, U, y, j, x, r, w, _, q, o, g, V, G, Z, $, T, i, Q = (S = gb(Ka(S) || Ma(S) || S.nodeType ? {
                        trigger: S
                    } : S, Ot)).onUpdate,
                    ee = S.toggleClass,
                    a = S.id,
                    te = S.onToggle,
                    re = S.onRefresh,
                    ne = S.scrub,
                    oe = S.trigger,
                    ie = S.pin,
                    ae = S.pinSpacing,
                    se = S.invalidateOnRefresh,
                    le = S.anticipatePin,
                    s = S.onScrubComplete,
                    h = S.onSnapComplete,
                    ce = S.once,
                    ue = S.snap,
                    fe = S.pinReparent,
                    l = S.pinSpacer,
                    pe = S.containerAnimation,
                    de = S.fastScrollEnd,
                    ge = S.preventOverlaps,
                    he = S.horizontal || S.containerAnimation && !1 !== S.horizontal ? Xe : Ke,
                    ve = !ne && 0 !== ne,
                    be = J(S.scroller || Je),
                    c = He.core.getCache(be),
                    me = Ea(be),
                    ye = "fixed" === ("pinType" in S ? S.pinType : z(be, "pinType") || me && "fixed"),
                    xe = [S.onEnter, S.onLeave, S.onEnterBack, S.onLeaveBack],
                    we = ve && S.toggleActions.split(" "),
                    u = "markers" in S ? S.markers : Ot.markers,
                    _e = me ? 0 : parseFloat(eb(be)["border" + he.p2 + Et]) || 0,
                    Te = this,
                    Se = S.onRefreshInit && function() {
                        return S.onRefreshInit(Te)
                    },
                    Ce = function _getSizeFunc(e, t, r) {
                        var n = r.d,
                            o = r.d2,
                            i = r.a;
                        return (i = z(e, "getBoundingClientRect")) ? function() {
                            return i()[n]
                        } : function() {
                            return (t ? Je["inner" + o] : e["client" + o]) || 0
                        }
                    }(be, me, he),
                    Ee = function _getOffsetsFunc(e, t) {
                        return !t || ~Fe.indexOf(e) ? Fa(e) : function() {
                            return Yt
                        }
                    }(be, me),
                    ke = 0,
                    Me = 0,
                    Pe = K(be, he);
                if (lt(Te), Te._dir = he, le *= 45, Te.scroller = be, Te.scroll = pe ? pe.time.bind(pe) : Pe, k = Pe(), Te.vars = S, C = C || S.animation, "refreshPriority" in S && (at = 1, -9999 === S.refreshPriority && (pt = Te)), c.tweenScroll = c.tweenScroll || {
                        top: fc(be, Ke),
                        left: fc(be, Xe)
                    }, Te.tweenTo = E = c.tweenScroll[he.p], Te.scrubDuration = function(e) {
                        (o = Ma(e) && e) ? q ? q.duration(e) : q = He.to(C, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: o,
                            paused: !0,
                            onComplete: function onComplete() {
                                return s && s(Te)
                            }
                        }): (q && q.progress(1).kill(), q = 0)
                    }, C && (C.vars.lazy = !1, C._initted || !1 !== C.vars.immediateRender && !1 !== S.immediateRender && C.duration() && C.render(0, !0, !0), Te.animation = C.pause(), (C.scrollTrigger = Te).scrubDuration(ne), w = 0, a = a || C.vars.id), At.push(Te), ue && (Na(ue) && !ue.push || (ue = {
                        snapTo: ue
                    }), "scrollBehavior" in Ge.style && He.set(me ? [Ge, qe] : be, {
                        scrollBehavior: "auto"
                    }), ze.forEach(function(e) {
                        return La(e) && e.target === (me ? je.scrollingElement || qe : be) && (e.smooth = !1)
                    }), d = La(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
                        return function(e) {
                            return He.utils.snap(jb(t), e)
                        }
                    }(C) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
                        return function(e, t) {
                            return lb(jb(r))(e, t.direction)
                        }
                    }(C) : !1 !== ue.directional ? function(e, t) {
                        return lb(ue.snapTo)(e, gt() - Me < 500 ? 0 : t.direction)
                    } : He.utils.snap(ue.snapTo), g = ue.duration || {
                        min: .1,
                        max: 2
                    }, g = Na(g) ? tt(g.min, g.max) : tt(g, g), V = He.delayedCall(ue.delay || o / 2 || .1, function() {
                        var e = Pe(),
                            t = gt() - Me < 500,
                            r = E.tween;
                        if (!(t || Math.abs(Te.getVelocity()) < 10) || r || ot || ke === e) Te.isActive && ke !== e && V.restart(!0);
                        else {
                            var n = (e - P) / L,
                                o = C && !ve ? C.totalProgress() : n,
                                i = t ? 0 : (o - _) / (gt() - rt) * 1e3 || 0,
                                a = He.utils.clamp(-n, 1 - n, bt(i / 2) * i / .185),
                                s = n + (!1 === ue.inertia ? 0 : a),
                                l = tt(0, 1, d(s, Te)),
                                c = Math.round(P + l * L),
                                u = ue.onStart,
                                f = ue.onInterrupt,
                                p = ue.onComplete;
                            if (e <= O && P <= e && c !== e) {
                                if (r && !r._initted && r.data <= bt(c - e)) return;
                                !1 === ue.inertia && (a = l - n), E(c, {
                                    duration: g(bt(.185 * Math.max(bt(s - o), bt(l - o)) / i / .05 || 0)),
                                    ease: ue.ease || "power3",
                                    data: bt(c - e),
                                    onInterrupt: function onInterrupt() {
                                        return V.restart(!0) && f && f(Te)
                                    },
                                    onComplete: function onComplete() {
                                        Te.update(), ke = Pe(), w = _ = C && !ve ? C.totalProgress() : Te.progress, h && h(Te), p && p(Te)
                                    }
                                }, e, a * L, c - e - a * L), u && u(Te, E.tween)
                            }
                        }
                    }).pause()), a && (Bt[a] = Te), i = (i = (oe = Te.trigger = J(oe || ie)) && oe._gsap && oe._gsap.stRevert) && i(Te), ie = !0 === ie ? oe : J(ie), Ka(ee) && (ee = {
                        targets: oe,
                        className: ee
                    }), ie && (!1 === ae || ae === Ct || (ae = !(!ae && ie.parentNode && ie.parentNode.style && "flex" === eb(ie.parentNode).display) && St), Te.pin = ie, (n = He.core.getCache(ie)).spacer ? R = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = _b(l))), n.spacer = N = l || je.createElement("div"), N.classList.add("pin-spacer"), a && N.classList.add("pin-spacer-" + a), n.pinState = R = _b(ie)), !1 !== S.force3D && He.set(ie, {
                        force3D: !0
                    }), Te.spacer = N = n.spacer, r = eb(ie), m = r[ae + he.os2], X = He.getProperty(ie), b = He.quickSetter(ie, he.a, kt), Yb(ie, N, r), F = _b(ie)), u) {
                    e = Na(u) ? gb(u, Pt) : Pt, D = vb("scroller-start", a, be, he, e, 0), I = vb("scroller-end", a, be, he, e, 0, D), t = D["offset" + he.op.d2];
                    var f = J(z(be, "content") || be);
                    A = this.markerStart = vb("start", a, f, he, e, t, 0, pe), B = this.markerEnd = vb("end", a, f, he, e, t, 0, pe), pe && (T = He.quickSetter([A, B], he.a, kt)), ye || Fe.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
                        var t = eb(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                    }(me ? Ge : be), He.set([D, I], {
                        force3D: !0
                    }), y = He.quickSetter(D, he.a, kt), x = He.quickSetter(I, he.a, kt))
                }
                if (pe) {
                    var p = pe.vars.onUpdate,
                        v = pe.vars.onUpdateParams;
                    pe.eventCallback("onUpdate", function() {
                        Te.update(0, 0, 1), p && p.apply(v || [])
                    })
                }
                Te.previous = function() {
                    return At[At.indexOf(Te) - 1]
                }, Te.next = function() {
                    return At[At.indexOf(Te) + 1]
                }, Te.revert = function(e, t) {
                    if (!t) return Te.kill(!0);
                    var r = !1 !== e || !Te.enabled,
                        n = nt;
                    r !== Te.isReverted && (r && (Z = Math.max(Pe(), Te.scroll.rec || 0), G = Te.progress, $ = C && C.progress()), A && [A, B, D, I].forEach(function(e) {
                        return e.style.display = r ? "none" : "block"
                    }), r && (nt = 1, Te.update(r)), !ie || fe && Te.isActive || (r ? function _swapPinOut(e, t, r) {
                        Rt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Rt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                            var o = t.parentNode;
                            o && (o.insertBefore(e, t), o.removeChild(t))
                        }
                        e._gsap.swappedIn = !1
                    }(ie, N, R) : Yb(ie, N, eb(ie), U)), r || Te.update(r), nt = n, Te.isReverted = r)
                }, Te.refresh = function(e, t) {
                    if (!nt && Te.enabled || t)
                        if (ie && e && ht) ob(ScrollTrigger, "scrollEnd", Gb);
                        else {
                            !ut && Se && Se(Te), nt = 1, Me = gt(), E.tween && (E.tween.kill(), E.tween = 0), q && q.pause(), se && C && C.revert({
                                kill: !1
                            }).invalidate(), Te.isReverted || Te.revert(!0, !0), Te._subPinOffset = !1;
                            for (var r, n, o, i, a, s, l, c, u, f, p, d = Ce(), g = Ee(), h = pe ? pe.duration() : Ia(be, he), v = 0, b = 0, m = S.end, y = S.endTrigger || oe, x = S.start || (0 !== S.start && oe ? ie ? "0 0" : "0 100%" : 0), w = Te.pinnedContainer = S.pinnedContainer && J(S.pinnedContainer), _ = oe && Math.max(0, At.indexOf(Te)) || 0, T = _; T--;)(s = At[T]).end || s.refresh(0, 1) || (nt = 1), !(l = s.pin) || l !== oe && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert(!0, !0)), s !== At[T] && (_--, T--);
                            for (La(x) && (x = x(Te)), P = cc(x, oe, d, he, Pe(), A, D, Te, g, _e, ye, h, pe) || (ie ? -.001 : 0), La(m) && (m = m(Te)), Ka(m) && !m.indexOf("+=") && (~m.indexOf(" ") ? m = (Ka(x) ? x.split(" ")[0] : "") + m : (v = ub(m.substr(2), d), m = Ka(x) ? x : P + v, y = oe)), O = Math.max(P, cc(m || (y ? "100% 0" : h), y, d, he, Pe() + v, B, I, Te, g, _e, ye, h, pe)) || -.001, L = O - P || (P -= .01) && .001, v = 0, T = _; T--;)(l = (s = At[T]).pin) && s.start - s._pinPush <= P && !pe && 0 < s.end && (r = s.end - s.start, (l === oe && s.start - s._pinPush < P || l === w) && !Ma(x) && (v += r * (1 - s.progress)), l === ie && (b += r));
                            if (P += v, O += v, Te._pinPush = b, A && v && ((r = {})[he.a] = "+=" + v, w && (r[he.p] = "-=" + Pe()), He.set([A, B], r)), ie) r = eb(ie), i = he === Ke, o = Pe(), W = parseFloat(X(he.a)) + b, !h && 1 < O && ((p = {
                                style: p = (me ? je.scrollingElement || qe : be).style,
                                value: p["overflow" + he.a.toUpperCase()]
                            })["overflow" + he.a.toUpperCase()] = "scroll"), Yb(ie, N, r), F = _b(ie), n = Mt(ie, !0), c = ye && K(be, i ? Xe : Ke)(), ae && ((U = [ae + he.os2, L + b + kt]).t = N, (T = ae === St ? ib(ie, he) + L + b : 0) && U.push(he.d, T + kt), Rt(U), w && At.forEach(function(e) {
                                e.pin === w && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                            }), ye && Pe(Z)), ye && ((a = {
                                top: n.top + (i ? o - P : c) + kt,
                                left: n.left + (i ? c : o - P) + kt,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[mt] = a.maxWidth = Math.ceil(n.width) + kt, a[yt] = a.maxHeight = Math.ceil(n.height) + kt, a[Ct] = a[Ct + _t] = a[Ct + xt] = a[Ct + Tt] = a[Ct + wt] = "0", a[St] = r[St], a[St + _t] = r[St + _t], a[St + xt] = r[St + xt], a[St + Tt] = r[St + Tt], a[St + wt] = r[St + wt], Y = function _copyState(e, t, r) {
                                for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                                return o.t = e.t, o
                            }(R, a, fe), ut && Pe(0)), C ? (u = C._initted, st(1), C.render(C.duration(), !0, !0), H = X(he.a) - W + L + b, j = 1 < Math.abs(L - H), ye && j && Y.splice(Y.length - 2, 2), C.render(0, !0, !0), u || C.invalidate(!0), C.parent || C.totalTime(C.totalTime()), st(0)) : H = L, p && (p.value ? p.style["overflow" + he.a.toUpperCase()] = p.value : p.style.removeProperty("overflow-" + he.a));
                            else if (oe && Pe() && !pe)
                                for (n = oe.parentNode; n && n !== Ge;) n._pinOffset && (P -= n._pinOffset, O -= n._pinOffset), n = n.parentNode;
                            f && f.forEach(function(e) {
                                return e.revert(!1, !0)
                            }), Te.start = P, Te.end = O, k = M = ut ? Z : Pe(), pe || ut || (k < Z && Pe(Z), Te.scroll.rec = 0), Te.revert(!1, !0), V && (ke = -1, Te.isActive && Pe(P + L * G), V.restart(!0)), nt = 0, C && ve && (C._initted || $) && C.progress() !== $ && C.progress($, !0).render(C.time(), !0, !0), G === Te.progress && !pe || (C && !ve && C.totalProgress(G, !0), Te.progress = (k - P) / L === G ? 0 : G), ie && ae && (N._pinOffset = Math.round(Te.progress * H)), re && !ut && re(Te)
                        }
                }, Te.getVelocity = function() {
                    return (Pe() - M) / (gt() - rt) * 1e3 || 0
                }, Te.endAnimation = function() {
                    Oa(Te.callbackAnimation), C && (q ? q.progress(1) : C.paused() ? ve || Oa(C, Te.direction < 0, 1) : Oa(C, C.reversed()))
                }, Te.labelToScroll = function(e) {
                    return C && C.labels && (P || Te.refresh() || P) + C.labels[e] / C.duration() * L || 0
                }, Te.getTrailing = function(t) {
                    var e = At.indexOf(Te),
                        r = 0 < Te.direction ? At.slice(0, e).reverse() : At.slice(e + 1);
                    return (Ka(t) ? r.filter(function(e) {
                        return e.vars.preventOverlaps === t
                    }) : r).filter(function(e) {
                        return 0 < Te.direction ? e.end <= P : e.start >= O
                    })
                }, Te.update = function(e, t, r) {
                    if (!pe || r || e) {
                        var n, o, i, a, s, l, c, u = ut ? Z : Te.scroll(),
                            f = e ? 0 : (u - P) / L,
                            p = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                            d = Te.progress;
                        if (t && (M = k, k = pe ? Pe() : u, ue && (_ = w, w = C && !ve ? C.totalProgress() : p)), le && !p && ie && !nt && !dt && ht && P < u + (u - M) / (gt() - rt) * le && (p = 1e-4), p !== d && Te.enabled) {
                            if (a = (s = (n = Te.isActive = !!p && p < 1) != (!!d && d < 1)) || !!p != !!d, Te.direction = d < p ? 1 : -1, Te.progress = p, a && !nt && (o = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3, ve && (i = !s && "none" !== we[o + 1] && we[o + 1] || we[o], c = C && ("complete" === i || "reset" === i || i in C))), ge && (s || c) && (c || ne || !C) && (La(ge) ? ge(Te) : Te.getTrailing(ge).forEach(function(e) {
                                    return e.endAnimation()
                                })), ve || (!q || nt || dt ? C && C.totalProgress(p, !!nt) : (q._dp._time - q._start !== q._time && q.render(q._dp._time - q._start), q.resetTo ? q.resetTo("totalProgress", p, C._tTime / C._tDur) : (q.vars.totalProgress = p, q.invalidate().restart()))), ie)
                                if (e && ae && (N.style[ae + he.os2] = m), ye) {
                                    if (a) {
                                        if (l = !e && d < p && u < O + 1 && u + 1 >= Ia(be, he), fe)
                                            if (e || !n && !l) ec(ie, N);
                                            else {
                                                var g = Mt(ie, !0),
                                                    h = u - P;
                                                ec(ie, Ge, g.top + (he === Ke ? h : 0) + kt, g.left + (he === Ke ? 0 : h) + kt)
                                            }
                                        Rt(n || l ? Y : F), j && p < 1 && n || b(W + (1 !== p || l ? 0 : H))
                                    }
                                } else b(Ba(W + H * p));
                            !ue || E.tween || nt || dt || V.restart(!0), ee && (s || ce && p && (p < 1 || !ct)) && et(ee.targets).forEach(function(e) {
                                return e.classList[n || ce ? "add" : "remove"](ee.className)
                            }), !Q || ve || e || Q(Te), a && !nt ? (ve && (c && ("complete" === i ? C.pause().totalProgress(1) : "reset" === i ? C.restart(!0).pause() : "restart" === i ? C.restart(!0) : C[i]()), Q && Q(Te)), !s && ct || (te && s && Pa(Te, te), xe[o] && Pa(Te, xe[o]), ce && (1 === p ? Te.kill(!1, 1) : xe[o] = 0), s || xe[o = 1 === p ? 1 : 3] && Pa(Te, xe[o])), de && !n && Math.abs(Te.getVelocity()) > (Ma(de) ? de : 2500) && (Oa(Te.callbackAnimation), q ? q.progress(1) : Oa(C, "reverse" === i ? 1 : !p, 1))) : ve && Q && !nt && Q(Te)
                        }
                        if (x) {
                            var v = pe ? u / pe.duration() * (pe._caScrollDist || 0) : u;
                            y(v + (D._isFlipped ? 1 : 0)), x(v)
                        }
                        T && T(-u / pe.duration() * (pe._caScrollDist || 0))
                    }
                }, Te.enable = function(e, t) {
                    Te.enabled || (Te.enabled = !0, ob(be, "resize", Db), ob(me ? je : be, "scroll", Bb), Se && ob(ScrollTrigger, "refreshInit", Se), !1 !== e && (Te.progress = G = 0, k = M = ke = Pe()), !1 !== t && Te.refresh())
                }, Te.getTween = function(e) {
                    return e && E ? E.tween : q
                }, Te.setPositions = function(e, t) {
                    ie && (W += e - P, H += t - e - L, ae === St && Te.adjustPinSpacing(t - e - L)), Te.start = P = e, Te.end = O = t, L = t - e, Te.update()
                }, Te.adjustPinSpacing = function(e) {
                    if (U) {
                        var t = U.indexOf(he.d) + 1;
                        U[t] = parseFloat(U[t]) + e + kt, U[1] = parseFloat(U[1]) + e + kt, Rt(U)
                    }
                }, Te.disable = function(e, t) {
                    if (Te.enabled && (!1 !== e && Te.revert(!0, !0), Te.enabled = Te.isActive = !1, t || q && q.pause(), Z = 0, n && (n.uncache = 1), Se && pb(ScrollTrigger, "refreshInit", Se), V && (V.pause(), E.tween && E.tween.kill() && (E.tween = 0)), !me)) {
                        for (var r = At.length; r--;)
                            if (At[r].scroller === be && At[r] !== Te) return;
                        pb(be, "resize", Db), pb(be, "scroll", Bb)
                    }
                }, Te.kill = function(e, t) {
                    Te.disable(e, t), q && !t && q.kill(), a && delete Bt[a];
                    var r = At.indexOf(Te);
                    0 <= r && At.splice(r, 1), r === it && 0 < Lt && it--, r = 0, At.forEach(function(e) {
                        return e.scroller === Te.scroller && (r = 1)
                    }), r || ut || (Te.scroll.rec = 0), C && (C.scrollTrigger = null, e && C.revert({
                        kill: !1
                    }), t || C.kill()), A && [A, B, D, I].forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }), pt === Te && (pt = 0), ie && (n && (n.uncache = 1), r = 0, At.forEach(function(e) {
                        return e.pin === ie && r++
                    }), r || (n.spacer = 0)), S.onKill && S.onKill(Te)
                }, Te.enable(!1, !1), i && i(Te), C && C.add && !L ? He.delayedCall(.01, function() {
                    return P || O || Te.refresh()
                }) && (L = .01) && (P = O = 0) : Te.refresh(), ie && function _queueRefreshAll() {
                    if (ft !== Dt) {
                        var e = ft = Dt;
                        requestAnimationFrame(function() {
                            return e === Dt && It(!0)
                        })
                    }
                }()
            } else this.update = this.refresh = this.kill = Aa
        }, ScrollTrigger.register = function register(e) {
            return s || (He = e || Da(), Ca() && window.document && ScrollTrigger.enable(), s = vt), s
        }, ScrollTrigger.defaults = function defaults(e) {
            if (e)
                for (var t in e) Ot[t] = e[t];
            return Ot
        }, ScrollTrigger.disable = function disable(t, r) {
            vt = 0, At.forEach(function(e) {
                return e[r ? "kill" : "disable"](t)
            }), pb(Je, "wheel", Bb), pb(je, "scroll", Bb), clearInterval(u), pb(je, "touchcancel", Aa), pb(Ge, "touchstart", Aa), nb(pb, je, "pointerdown,touchstart,mousedown", ya), nb(pb, je, "pointerup,touchend,mouseup", za), c.kill(), Ja(pb);
            for (var e = 0; e < ze.length; e += 3) qb(pb, ze[e], ze[e + 1]), qb(pb, ze[e], ze[e + 2])
        }, ScrollTrigger.enable = function enable() {
            if (Je = window, je = document, qe = je.documentElement, Ge = je.body, He && (et = He.utils.toArray, tt = He.utils.clamp, lt = He.core.context || Aa, st = He.core.suppressOverwrites || Aa, x = Je.history.scrollRestoration || "auto", He.core.globals("ScrollTrigger", ScrollTrigger), Ge)) {
                vt = 1, E.register(He), ScrollTrigger.isTouch = E.isTouch, k = E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ob(Je, "wheel", Bb), l = [Je, je, qe, Ge], He.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                    var t, r = He.matchMedia();
                    for (t in e) r.add(t, e[t]);
                    return r
                }, He.addEventListener("matchMediaInit", function() {
                    return Kb()
                }), He.addEventListener("matchMediaRevert", function() {
                    return Jb()
                }), He.addEventListener("matchMedia", function() {
                    It(0, 1), W("matchMedia")
                }), He.matchMedia("(orientation: portrait)", function() {
                    return Cb(), Cb
                })) : console.warn("Requires GSAP 3.11.0 or later"), Cb(), ob(je, "scroll", Bb);
                var e, t, r = Ge.style,
                    n = r.borderTopStyle,
                    o = He.core.Animation.prototype;
                for (o.revert || Object.defineProperty(o, "revert", {
                        value: function value() {
                            return this.time(-.01, !0)
                        }
                    }), r.borderTopStyle = "solid", e = Mt(Ge), Ke.m = Math.round(e.top + Ke.sc()) || 0, Xe.m = Math.round(e.left + Xe.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), u = setInterval(Ab, 250), He.delayedCall(.5, function() {
                        return dt = 0
                    }), ob(je, "touchcancel", Aa), ob(Ge, "touchstart", Aa), nb(ob, je, "pointerdown,touchstart,mousedown", ya), nb(ob, je, "pointerup,touchend,mouseup", za), f = He.utils.checkPrefix("transform"), V.push(f), s = gt(), c = He.delayedCall(.2, It).pause(), g = [je, "visibilitychange", function() {
                        var e = Je.innerWidth,
                            t = Je.innerHeight;
                        je.hidden ? (p = e, d = t) : p === e && d === t || Db()
                    }, je, "DOMContentLoaded", It, Je, "load", It, Je, "resize", Db], Ja(ob), At.forEach(function(e) {
                        return e.enable(0, 1)
                    }), t = 0; t < ze.length; t += 3) qb(pb, ze[t], ze[t + 1]), qb(pb, ze[t], ze[t + 2])
            }
        }, ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (ct = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(u) || (u = t) && setInterval(Ab, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ja(pb) || Ja(ob, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = J(e),
                n = ze.indexOf(r),
                o = Ea(r);
            ~n && ze.splice(n, o ? 6 : 2), t && (o ? Fe.unshift(Je, t, Ge, t, qe, t) : Fe.unshift(r, t))
        }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
            At.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (Ka(e) ? J(e) : e).getBoundingClientRect(),
                o = n[r ? mt : yt] * t || 0;
            return r ? 0 < n.right - o && n.left + o < Je.innerWidth : 0 < n.bottom - o && n.top + o < Je.innerHeight
        }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            Ka(e) && (e = J(e));
            var n = e.getBoundingClientRect(),
                o = n[r ? mt : yt],
                i = null == t ? o / 2 : t in I ? I[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return r ? (n.left + i) / Je.innerWidth : (n.top + i) / Je.innerHeight
        }, ScrollTrigger.killAll = function killAll(e) {
            if (At.slice(0).forEach(function(e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill()
                }), !0 !== e) {
                var t = Y.killAll || [];
                Y = {}, t.forEach(function(e) {
                    return e()
                })
            }
        }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        s || ScrollTrigger.register(He) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    Q.version = "3.11.4", Q.saveStyles = function(e) {
        return e ? et(e).forEach(function(e) {
            if (e && e.style) {
                var t = H.indexOf(e);
                0 <= t && H.splice(t, 5), H.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), He.core.getCache(e), lt())
            }
        }) : H
    }, Q.revert = function(e, t) {
        return Kb(!e, t)
    }, Q.create = function(e, t) {
        return new Q(e, t)
    }, Q.refresh = function(e) {
        return e ? Db() : (s || Q.register()) && It(!0)
    }, Q.update = function(e) {
        return ++ze.cache && j(!0 === e ? 2 : 0)
    }, Q.clearScrollMemory = Lb, Q.maxScroll = function(e, t) {
        return Ia(e, t ? Xe : Ke)
    }, Q.getScrollFunc = function(e, t) {
        return K(J(e), t ? Xe : Ke)
    }, Q.getById = function(e) {
        return Bt[e]
    }, Q.getAll = function() {
        return At.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, Q.isScrolling = function() {
        return !!ht
    }, Q.snapDirectional = lb, Q.addEventListener = function(e, t) {
        var r = Y[e] || (Y[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, Q.removeEventListener = function(e, t) {
        var r = Y[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, Q.batch = function(e, t) {
        function Io(e, t) {
            var r = [],
                n = [],
                o = He.delayedCall(i, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1)
            }
        }
        var r, n = [],
            o = {},
            i = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) o[r] = "on" === r.substr(0, 2) && La(t[r]) && "onRefreshInit" !== r ? Io(0, t[r]) : t[r];
        return La(a) && (a = a(), ob(Q, "refresh", function() {
            return a = t.batchMax()
        })), et(e).forEach(function(e) {
            var t = {};
            for (r in o) t[r] = o[r];
            t.trigger = e, n.push(Q.create(t))
        }), n
    };

    function hc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }

    function ic(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "") : "none", e === qe && ic(Ge, t)
    }

    function kc(e) {
        var t, r = e.event,
            n = e.target,
            o = e.axis,
            i = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = i._gsap || He.core.getCache(i),
            s = gt();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; i && i !== Ge && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !te[(t = eb(i)).overflowY] && !te[t.overflowX]);) i = i.parentNode;
            a._isScroll = i && i !== n && !Ea(i) && (te[(t = eb(i)).overflowY] || te[t.overflowX]), a._isScrollT = s
        }!a._isScroll && "x" !== o || (r.stopPropagation(), r._gsapAllow = !0)
    }

    function lc(e, t, r, n) {
        return E.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && kc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && ob(je, E.eventTypes[0], ne, !1, !0)
            },
            onDisable: function onDisable() {
                return pb(je, E.eventTypes[0], ne, !0)
            }
        })
    }

    function pc(e) {
        function Ep() {
            return o = !1
        }

        function Hp() {
            i = Ia(p, Ke), S = tt(k ? 1 : 0, i), f && (T = tt(0, Ia(p, Xe))), l = Dt
        }

        function Ip() {
            h._gsap.y = Ba(parseFloat(h._gsap.y) + v.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0
        }

        function Op() {
            Hp(), a.isActive() && a.vars.scrollY > i && (v() > i ? a.progress(1) && v(i) : a.resetTo("scrollY", i))
        }
        Na(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n, i, l, o, a, c, u, s, f = e.normalizeScrollX,
            t = e.momentum,
            r = e.allowNestedScroll,
            p = J(e.target) || qe,
            d = He.core.globals().ScrollSmoother,
            g = d && d.get(),
            h = k && (e.content && J(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
            v = K(p, Ke),
            b = K(p, Xe),
            m = 1,
            y = (E.isTouch && Je.visualViewport ? Je.visualViewport.scale * Je.visualViewport.width : Je.outerWidth) / Je.innerWidth,
            x = 0,
            w = La(t) ? function() {
                return t(n)
            } : function() {
                return t || 2.8
            },
            _ = lc(p, e.type, !0, r),
            T = Aa,
            S = Aa;
        return h && He.set(h, {
            y: "+=0"
        }), e.ignoreCheck = function(e) {
            return k && "touchmove" === e.type && function ignoreDrag() {
                if (o) {
                    requestAnimationFrame(Ep);
                    var e = Ba(n.deltaY / 2),
                        t = S(v.v - e);
                    if (h && t !== v.v + v.offset) {
                        v.offset = t - v.v;
                        var r = Ba((parseFloat(h && h._gsap.y) || 0) - v.offset);
                        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", h._gsap.y = r + "px", v.cacheID = ze.cache, j()
                    }
                    return !0
                }
                v.offset && Ip(), o = !0
            }() || 1.05 < m && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
        }, e.onPress = function() {
            var e = m;
            m = Ba((Je.visualViewport && Je.visualViewport.scale || 1) / y), a.pause(), e !== m && ic(p, 1.01 < m || !f && "x"), c = b(), u = v(), Hp(), l = Dt
        }, e.onRelease = e.onGestureStart = function(e, t) {
            if (v.offset && Ip(), t) {
                ze.cache++;
                var r, n, o = w();
                f && (n = (r = b()) + .05 * o * -e.velocityX / .227, o *= hc(b, r, n, Ia(p, Xe)), a.vars.scrollX = T(n)), n = (r = v()) + .05 * o * -e.velocityY / .227, o *= hc(v, r, n, Ia(p, Ke)), a.vars.scrollY = S(n), a.invalidate().duration(o).play(.01), (k && a.vars.scrollY >= i || i - 1 <= r) && He.to({}, {
                    onUpdate: Op,
                    duration: o
                })
            } else s.restart(!0)
        }, e.onWheel = function() {
            a._ts && a.pause(), 1e3 < gt() - x && (l = 0, x = gt())
        }, e.onChange = function(e, t, r, n, o) {
            if (Dt !== l && Hp(), t && f && b(T(n[2] === t ? c + (e.startX - e.x) : b() + t - n[1])), r) {
                v.offset && Ip();
                var i = o[2] === r,
                    a = i ? u + e.startY - e.y : v() + r - o[1],
                    s = S(a);
                i && a !== s && (u += s - a), v(s)
            }(r || t) && j()
        }, e.onEnable = function() {
            ic(p, !f && "x"), Q.addEventListener("refresh", Op), ob(Je, "resize", Op), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = b.smooth = !1), _.enable()
        }, e.onDisable = function() {
            ic(p, !0), pb(Je, "resize", Op), Q.removeEventListener("refresh", Op), _.kill()
        }, e.lockAxis = !1 !== e.lockAxis, ((n = new E(e)).iOS = k) && !v() && v(1), k && He.ticker.add(Aa), s = n._dc, a = He.to(n, {
            ease: "power4",
            paused: !0,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: s.vars.onComplete
        }), n
    }
    var ee, te = {
            auto: 1,
            scroll: 1
        },
        re = /(input|label|select|textarea)/i,
        ne = function _captureInputs(e) {
            var t = re.test(e.target.tagName);
            (t || ee) && (e._gsapAllow = !0, ee = t)
        };
    Q.sort = function(e) {
        return At.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, Q.observe = function(e) {
        return new E(e)
    }, Q.normalizeScroll = function(e) {
        if (void 0 === e) return v;
        if (!0 === e && v) return v.enable();
        if (!1 === e) return v && v.kill();
        var t = e instanceof E ? e : pc(e);
        return v && v.target === t.target && v.kill(), Ea(t.target) && (v = t), t
    }, Q.core = {
        _getVelocityProp: L,
        _inputObserver: lc,
        _scrollers: ze,
        _proxies: Fe,
        bridge: {
            ss: function ss() {
                ht || W("scrollStart"), ht = gt()
            },
            ref: function ref() {
                return nt
            }
        }
    }, Da() && He.registerPlugin(Q), e.ScrollTrigger = Q, e.default = Q;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
/*!
 * SplitText 3.11.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

! function(D, u) {
    "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
}(this, function(D) {
    "use strict";
    var _ = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function k(D) {
        return e.getComputedStyle(D)
    }

    function n(D, u) {
        var e;
        return i(D) ? D : "string" == (e = typeof D) && !u && D ? E.call(X.querySelectorAll(D), 0) : D && "object" == e && "length" in D ? E.call(D, 0) : D ? [D] : []
    }

    function o(D) {
        return "absolute" === D.position || !0 === D.absolute
    }

    function p(D, u) {
        for (var e, t = u.length; - 1 < --t;)
            if (e = u[t], D.substr(0, e.length) === e) return e.length
    }

    function r(D, u) {
        void 0 === D && (D = "");
        var e = ~D.indexOf("++"),
            t = 1;
        return e && (D = D.split("++").join("")),
            function() {
                return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
            }
    }

    function s(D, u, e) {
        var t = D.nodeType;
        if (1 === t || 9 === t || 11 === t)
            for (D = D.firstChild; D; D = D.nextSibling) s(D, u, e);
        else 3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e))
    }

    function t(D, u) {
        for (var e = u.length; - 1 < --e;) D.push(u[e])
    }

    function u(D, u, e) {
        for (var t; D && D !== u;) {
            if (t = D._next || D.nextSibling) return t.textContent.charAt(0) === e;
            D = D.parentNode || D._parent
        }
    }

    function v(D) {
        var u, e, t = n(D.childNodes),
            F = t.length;
        for (u = 0; u < F; u++)(e = t[u])._isSplit ? v(e) : u && e.previousSibling && 3 === e.previousSibling.nodeType ? (e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue, D.removeChild(e)) : 3 !== e.nodeType && (D.insertBefore(e.firstChild, e), D.removeChild(e))
    }

    function w(D, u) {
        return parseFloat(u[D]) || 0
    }

    function x(D, e, F, C, i, n, E) {
        var r, l, p, d, a, h, B, f, A, c, x, g, y = k(D),
            _ = w("paddingLeft", y),
            b = -999,
            S = w("borderBottomWidth", y) + w("borderTopWidth", y),
            T = w("borderLeftWidth", y) + w("borderRightWidth", y),
            m = w("paddingTop", y) + w("paddingBottom", y),
            N = w("paddingLeft", y) + w("paddingRight", y),
            L = w("fontSize", y) * (e.lineThreshold || .2),
            W = y.textAlign,
            H = [],
            O = [],
            V = [],
            j = e.wordDelimiter || " ",
            M = e.tag ? e.tag : e.span ? "span" : "div",
            R = e.type || e.split || "chars,words,lines",
            z = i && ~R.indexOf("lines") ? [] : null,
            P = ~R.indexOf("words"),
            q = ~R.indexOf("chars"),
            G = o(e),
            I = e.linesClass,
            J = ~(I || "").indexOf("++"),
            K = [],
            Q = "flex" === y.display,
            U = D.style.display;
        for (J && (I = I.split("++").join("")), Q && (D.style.display = "block"), p = (l = D.getElementsByTagName("*")).length, a = [], r = 0; r < p; r++) a[r] = l[r];
        if (z || G)
            for (r = 0; r < p; r++)((h = (d = a[r]).parentNode === D) || G || q && !P) && (g = d.offsetTop, z && h && Math.abs(g - b) > L && ("BR" !== d.nodeName || 0 === r) && (B = [], z.push(B), b = g), G && (d._x = d.offsetLeft, d._y = g, d._w = d.offsetWidth, d._h = d.offsetHeight), z && ((d._isSplit && h || !q && h || P && h || !P && d.parentNode.parentNode === D && !d.parentNode._isSplit) && (B.push(d), d._x -= _, u(d, D, j) && (d._wordEnd = !0)), "BR" === d.nodeName && (d.nextSibling && "BR" === d.nextSibling.nodeName || 0 === r) && z.push([])));
        for (r = 0; r < p; r++)
            if (h = (d = a[r]).parentNode === D, "BR" !== d.nodeName)
                if (G && (A = d.style, P || h || (d._x += d.parentNode._x, d._y += d.parentNode._y), A.left = d._x + "px", A.top = d._y + "px", A.position = "absolute", A.display = "block", A.width = d._w + 1 + "px", A.height = d._h + "px"), !P && q)
                    if (d._isSplit)
                        for (d._next = l = d.nextSibling, d.parentNode.appendChild(d); l && 3 === l.nodeType && " " === l.textContent;) d._next = l.nextSibling, d.parentNode.appendChild(l), l = l.nextSibling;
                    else d.parentNode._isSplit ? (d._parent = d.parentNode, !d.previousSibling && d.firstChild && (d.firstChild._isFirst = !0), d.nextSibling && " " === d.nextSibling.textContent && !d.nextSibling.nextSibling && K.push(d.nextSibling), d._next = d.nextSibling && d.nextSibling._isFirst ? null : d.nextSibling, d.parentNode.removeChild(d), a.splice(r--, 1), p--) : h || (g = !d.nextSibling && u(d.parentNode, D, j), d.parentNode._parent && d.parentNode._parent.appendChild(d), g && d.parentNode.appendChild(X.createTextNode(" ")), "span" === M && (d.style.display = "inline"), H.push(d));
        else d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML ? O.push(d) : q && !d._isSplit && ("span" === M && (d.style.display = "inline"), H.push(d));
        else z || G ? (d.parentNode && d.parentNode.removeChild(d), a.splice(r--, 1), p--) : P || D.appendChild(d);
        for (r = K.length; - 1 < --r;) K[r].parentNode.removeChild(K[r]);
        if (z) {
            for (G && (c = X.createElement(M), D.appendChild(c), x = c.offsetWidth + "px", g = c.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(c)), A = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;) D.removeChild(D.firstChild);
            for (f = " " === j && (!G || !P && !q), r = 0; r < z.length; r++) {
                for (B = z[r], (c = X.createElement(M)).style.cssText = "display:block;text-align:" + W + ";position:" + (G ? "absolute;" : "relative;"), I && (c.className = I + (J ? r + 1 : "")), V.push(c), p = B.length, l = 0; l < p; l++) "BR" !== B[l].nodeName && (d = B[l], c.appendChild(d), f && d._wordEnd && c.appendChild(X.createTextNode(" ")), G && (0 === l && (c.style.top = d._y + "px", c.style.left = _ + g + "px"), d.style.top = "0px", g && (d.style.left = d._x - g + "px")));
                0 === p ? c.innerHTML = "&nbsp;" : P || q || (v(c), s(c, String.fromCharCode(160), " ")), G && (c.style.width = x, c.style.height = d._h + "px"), D.appendChild(c)
            }
            D.style.cssText = A
        }
        G && (E > D.clientHeight && (D.style.height = E - m + "px", D.clientHeight < E && (D.style.height = E + S + "px")), n > D.clientWidth && (D.style.width = n - N + "px", D.clientWidth < n && (D.style.width = n + T + "px"))), Q && (U ? D.style.display = U : D.style.removeProperty("display")), t(F, H), P && t(C, O), t(i, V)
    }

    function y(D, u, e, t) {
        var F, C, i, n, E, r, l, d, a = u.tag ? u.tag : u.span ? "span" : "div",
            h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
            B = o(u),
            f = u.wordDelimiter || " ",
            A = " " !== f ? "" : B ? "&#173; " : " ",
            c = "</" + a + ">",
            x = 1,
            g = u.specialChars ? "function" == typeof u.specialChars ? u.specialChars : p : null,
            y = X.createElement("div"),
            v = D.parentNode;
        for (v.insertBefore(y, D), y.textContent = D.nodeValue, v.removeChild(D), l = -1 !== (F = function getText(D) {
                var u = D.nodeType,
                    e = "";
                if (1 === u || 9 === u || 11 === u) {
                    if ("string" == typeof D.textContent) return D.textContent;
                    for (D = D.firstChild; D; D = D.nextSibling) e += getText(D)
                } else if (3 === u || 4 === u) return D.nodeValue;
                return e
            }(D = y)).indexOf("<"), !1 !== u.reduceWhiteSpace && (F = F.replace(S, " ").replace(b, "")), l && (F = F.split("<").join("{{LT}}")), E = F.length, C = (" " === F.charAt(0) ? A : "") + e(), i = 0; i < E; i++)
            if (r = F.charAt(i), g && (d = g(F.substr(i), u.specialChars))) r = F.substr(i, d || 1), C += h && " " !== r ? t() + r + "</" + a + ">" : r, i += d - 1;
            else if (r === f && F.charAt(i - 1) !== f && i) {
            for (C += x ? c : "", x = 0; F.charAt(i + 1) === f;) C += A, i++;
            i === E - 1 ? C += A : ")" !== F.charAt(i + 1) && (C += A + e(), x = 1)
        } else "{" === r && "{{LT}}" === F.substr(i, 6) ? (C += h ? t() + "{{LT}}</" + a + ">" : "{{LT}}", i += 5) : 55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319 || 65024 <= F.charCodeAt(i + 1) && F.charCodeAt(i + 1) <= 65039 ? (n = ((F.substr(i, 12).split(_) || [])[1] || "").length || 2, C += h && " " !== r ? t() + F.substr(i, n) + "</" + a + ">" : F.substr(i, n), i += n - 1) : C += h && " " !== r ? t() + r + "</" + a + ">" : r;
        D.outerHTML = C + (x ? c : ""), l && s(v, "{{LT}}", "<")
    }

    function z(D, u, e, t) {
        var F, C, i = n(D.childNodes),
            E = i.length,
            s = o(u);
        if (3 !== D.nodeType || 1 < E) {
            for (u.absolute = !1, F = 0; F < E; F++)(C = i[F])._next = C._isFirst = C._parent = C._wordEnd = null, 3 === C.nodeType && !/\S+/.test(C.nodeValue) || (s && 3 !== C.nodeType && "inline" === k(C).display && (C.style.display = "inline-block", C.style.position = "relative"), C._isSplit = !0, z(C, u, e, t));
            return u.absolute = s, void(D._isSplit = !0)
        }
        y(D, u, e, t)
    }
    var X, e, F, C, b = /(?:\r|\n|\t\t)/g,
        S = /(?:\s\s+)/g,
        i = Array.isArray,
        E = [].slice,
        l = ((C = SplitText.prototype).split = function split(D) {
            this.isSplit && this.revert(), this.vars = D = D || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var u, e, t, F = this.elements.length, C = D.tag ? D.tag : D.span ? "span" : "div", i = r(D.wordsClass, C), n = r(D.charsClass, C); - 1 < --F;) t = this.elements[F], this._originals[F] = t.innerHTML, u = t.clientHeight, e = t.clientWidth, z(t, D, i, n), x(t, D, this.chars, this.words, this.lines, e, u);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, C.revert = function revert() {
            var e = this._originals;
            if (!e) throw "revert() call wasn't scoped properly.";
            return this.elements.forEach(function(D, u) {
                return D.innerHTML = e[u]
            }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, SplitText.create = function create(D, u) {
            return new SplitText(D, u)
        }, SplitText);

    function SplitText(D, u) {
        F || function _initCore() {
            X = document, e = window, F = 1
        }(), this.elements = n(D), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = u || {}, this.split(u)
    }
    l.version = "3.11.2", D.SplitText = l, D.default = l;
    if (typeof(window) === "undefined" || window !== D) {
        Object.defineProperty(D, "__esModule", {
            value: !0
        })
    } else {
        delete D.default
    }
});
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by HernÃ¡n Sartorio  */
! function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function(t) {
                var n = e(this),
                    i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t) return "update" == t ? this.each(function() {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function() {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this),
                n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);
/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.10
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function(e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function() {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // deprecated 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.w = 0; // canvas width
        this.h = 0; // canvas height
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook
        this.scale = 1; // scale factor
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null; // component div

        this.run = function() {
            var cf = function(e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s._carve().init();
                s._configure()
                    ._draw();
            };

            if (this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend({
                // Config
                min: this.$.data('min') !== undefined ? this.$.data('min') : 0,
                max: this.$.data('max') !== undefined ? this.$.data('max') : 100,
                stopper: true,
                readOnly: this.$.data('readonly') || (this.$.attr('readonly') === 'readonly'),

                // UI
                cursor: this.$.data('cursor') === true && 30 ||
                    this.$.data('cursor') || 0,
                thickness: this.$.data('thickness') &&
                    Math.max(Math.min(this.$.data('thickness'), 1), 0.01) ||
                    0.35,
                lineCap: this.$.data('linecap') || 'butt',
                width: this.$.data('width') || 200,
                height: this.$.data('height') || 200,
                displayInput: this.$.data('displayinput') == null || this.$.data('displayinput'),
                displayPrevious: this.$.data('displayprevious'),
                fgColor: this.$.data('fgcolor') || '#87CEEB',
                inputColor: this.$.data('inputcolor'),
                font: this.$.data('font') || 'Arial',
                fontWeight: this.$.data('font-weight') || 'bold',
                inline: false,
                step: this.$.data('step') || 1,
                rotation: this.$.data('rotation'),

                // Hooks
                draw: null, // function () {}
                change: null, // function (value) {}
                cancel: null, // function () {}
                release: null, // function (value) {}

                // Output formatting, allows to add unit: %, ms ...
                format: function(v) {
                    return v;
                },
                parse: function(v) {
                    return parseFloat(v);
                }
            }, this.o);

            // finalize options
            this.o.flip = this.o.rotation === 'anticlockwise' || this.o.rotation === 'acw';
            if (!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor;
            }

            // routing value
            if (this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input');
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = s.o.parse($this.val());

                    $this.bind(
                        'change blur',
                        function() {
                            var val = {};
                            val[k] = $this.val();
                            s.val(val);
                        }
                    );
                });
                this.$.find('legend').remove();
            } else {

                // input = integer
                this.i = this.$;
                this.v = this.o.parse(this.$.val());
                this.v === '' && (this.v = this.o.min);
                this.$.bind(
                    'change blur',
                    function() {
                        s.val(s._validate(s.o.parse(s.$.val())));
                    }
                );

            }

            !this.o.displayInput && this.$.hide();

            // adds needed DOM elements (canvas, div)
            this.$c = $(document.createElement('canvas')).attr({
                width: this.o.width,
                height: this.o.height
            });

            // wraps all elements in a div
            // add to DOM before Canvas init is triggered
            this.$div = $('<div style="' +
                (this.o.inline ? 'display:inline;' : '') +
                'width:' + this.o.width + 'px;height:' + this.o.height + 'px;' +
                '"></div>');

            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();

            if (typeof G_vmlCanvasManager !== 'undefined') {
                G_vmlCanvasManager.initElement(this.$c[0]);
            }

            this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;

            if (!this.c) {
                throw {
                    name: "CanvasNotSupportedException",
                    message: "Canvas not supported. Please use excanvas on IE8.0.",
                    toString: function() {
                        return this.name + ": " + this.message
                    }
                }
            }

            // hdpi support
            this.scale = (window.devicePixelRatio || 1) / (
                this.c.webkitBackingStorePixelRatio ||
                this.c.mozBackingStorePixelRatio ||
                this.c.msBackingStorePixelRatio ||
                this.c.oBackingStorePixelRatio ||
                this.c.backingStorePixelRatio || 1
            );

            // detects relative width / height
            this.relativeWidth = this.o.width % 1 !== 0 &&
                this.o.width.indexOf('%');
            this.relativeHeight = this.o.height % 1 !== 0 &&
                this.o.height.indexOf('%');
            this.relative = this.relativeWidth || this.relativeHeight;

            // computes size and carves the component
            this._carve();

            // prepares props for transaction
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            // binds configure event
            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            // finalize init
            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            this.$.val(this.o.format(this.v));
            this._draw();

            return this;
        };

        this._carve = function() {
            if (this.relative) {
                var w = this.relativeWidth ?
                    this.$div.parent().width() *
                    parseInt(this.o.width) / 100 :
                    this.$div.parent().width(),
                    h = this.relativeHeight ?
                    this.$div.parent().height() *
                    parseInt(this.o.height) / 100 :
                    this.$div.parent().height();

                // apply relative
                this.w = this.h = Math.min(w, h);
            } else {
                this.w = this.o.width;
                this.h = this.o.height;
            }

            // finalize div
            this.$div.css({
                'width': this.w + 'px',
                'height': this.h + 'px'
            });

            // finalize canvas with computed width
            this.$c.attr({
                width: this.w,
                height: this.h
            });

            // scaling
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h);
            }

            return this;
        }

        this._draw = function() {

            // canvas pre-rendering
            var d = true;

            s.g = s.c;

            s.clear();

            s.dH && (d = s.dH());

            d !== false && s.draw();
        };

        this._touch = function(e) {
            var touchMove = function(e) {
                var v = s.xy2val(
                    e.originalEvent.touches[s.t].pageX,
                    e.originalEvent.touches[s.t].pageY
                );

                if (v == s.cv) return;

                if (s.cH && s.cH(v) === false) return;

                s.change(s._validate(v));
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k",
                    function() {
                        k.c.d.unbind('touchmove.k touchend.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function(e) {
            var mouseMove = function(e) {
                var v = s.xy2val(e.pageX, e.pageY);

                if (v == s.cv) return;

                if (s.cH && (s.cH(v) === false)) return;

                s.change(s._validate(v));
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k",
                    function(e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (s.eH && s.eH() === false)
                                return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k",
                    function(e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function() {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;

            return this;
        };

        this._listen = function() {
            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown",
                        function(e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                        }
                    )
                    .bind(
                        "touchstart",
                        function(e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                        }
                    );

                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            if (this.relative) {
                $(window).resize(function() {
                    s._carve().init();
                    s._draw();
                });
            }

            return this;
        };

        this._configure = function() {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function() {
            this.$c[0].width = this.$c[0].width;
        };

        this._validate = function(v) {
            return (~~(((v < 0) ? -0.5 : 0.5) + (v / this.o.step))) * this.o.step;
        };

        // Abstract methods
        this.listen = function() {}; // on start, one time
        this.extend = function() {}; // each time configure triggered
        this.init = function() {}; // each time configure triggered
        this.change = function(v) {}; // on change
        this.val = function(v) {}; // on release
        this.xy2val = function(x, y) {}; //
        this.draw = function() {}; // on change / on release
        this.clear = function() {
            this._clear();
        };

        // Utils
        this.h2rgba = function(h, a) {
            var rgb;
            h = h.substring(1, 7)
            rgb = [
                parseInt(h.substring(0, 2), 16),
                parseInt(h.substring(2, 4), 16),
                parseInt(h.substring(4, 6), 16)
            ];

            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function(f, t) {
            for (var i in f) {
                t[i] = f[i];
            }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function() {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2 * Math.PI;

        this.extend = function() {
            this.o = $.extend({
                bgColor: this.$.data('bgcolor') || '#EEEEEE',
                angleOffset: this.$.data('angleoffset') || 0,
                angleArc: this.$.data('anglearc') || 360,
                inline: true
            }, this.o);
        };

        this.val = function(v, triggerRelease) {
            if (null != v) {

                // reverse format
                v = this.o.parse(v);

                if (triggerRelease !== false &&
                    v != this.v &&
                    this.rH &&
                    this.rH(v) === false) {
                    return;
                }

                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.o.format(this.v));
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function(x, y) {
            var a, ret;

            a = Math.atan2(
                x - (this.x + this.w2), -(y - this.y - this.w2)
            ) - this.angleOffset;

            if (this.o.flip) {
                a = this.angleArc - a - this.PI2;
            }

            if (this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {

                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = ~~(0.5 + (a * (this.o.max - this.o.min) / this.angleArc)) + this.o.min;

            this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function() {

            // bind MouseWheel
            var s = this,
                mwTimerStop,
                mwTimerRelease,
                mw = function(e) {
                    e.preventDefault();

                    var ori = e.originalEvent,
                        deltaX = ori.detail || ori.wheelDeltaX,
                        deltaY = ori.detail || ori.wheelDeltaY,
                        v = s._validate(s.o.parse(s.$.val())) +
                        (
                            deltaX > 0 || deltaY > 0 ?
                            s.o.step :
                            deltaX < 0 || deltaY < 0 ? -s.o.step : 0
                        );

                    v = max(min(v, s.o.max), s.o.min);

                    s.val(v, false);

                    if (s.rH) {
                        // Handle mousewheel stop
                        clearTimeout(mwTimerStop);
                        mwTimerStop = setTimeout(function() {
                            s.rH(v);
                            mwTimerStop = null;
                        }, 100);

                        // Handle mousewheel releases
                        if (!mwTimerRelease) {
                            mwTimerRelease = setTimeout(function() {
                                if (mwTimerStop)
                                    s.rH(v);
                                mwTimerRelease = null;
                            }, 200);
                        }
                    }
                },
                kval,
                to,
                m = 1,
                kv = {
                    37: -s.o.step,
                    38: s.o.step,
                    39: s.o.step,
                    40: -s.o.step
                };

            this.$
                .bind(
                    "keydown",
                    function(e) {
                        var kc = e.keyCode;

                        // numpad support
                        if (kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {
                            (kc !== 13) // enter
                            &&
                            kc !== 8 // bs
                                &&
                                kc !== 9 // tab
                                &&
                                kc !== 189 // -
                                &&
                                (kc !== 190 ||
                                    s.$.val().match(/\./)) // . allowed once
                                &&
                                e.preventDefault();

                            // arrows
                            if ($.inArray(kc, [37, 38, 39, 40]) > -1) {
                                e.preventDefault();

                                var v = s.o.parse(s.$.val()) + kv[kc] * m;
                                s.o.stopper && (v = max(min(v, s.o.max), s.o.min));

                                s.change(v);
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(function() {
                                    m *= 2;
                                }, 30);
                            }
                        }
                    }
                )
                .bind(
                    "keyup",
                    function(e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max)) ||
                            (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }
                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw)
        };

        this.init = function() {
            if (this.v < this.o.min ||
                this.v > this.o.max) {
                this.v = this.o.min;
            }

            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset &&
                (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc &&
                (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                String(Math.abs(this.o.max)).length,
                String(Math.abs(this.o.min)).length,
                2
            ) + 2;

            this.o.displayInput &&
                this.i.css({
                    'width': ((this.w / 2 + 4) >> 0) + 'px',
                    'height': ((this.w / 3) >> 0) + 'px',
                    'position': 'absolute',
                    'vertical-align': 'middle',
                    'margin-top': ((this.w / 3) >> 0) + 'px',
                    'margin-left': '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px',
                    'border': 0,
                    'background': 'none',
                    'font': this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font,
                    'text-align': 'center',
                    'color': this.o.inputColor || this.o.fgColor,
                    'padding': '0px',
                    '-webkit-appearance': 'none'
                }) || this.i.css({
                    'width': '0px',
                    'visibility': 'hidden'
                });
        };

        this.change = function(v) {
            this.cv = v;
            this.$.val(this.o.format(v));
        };

        this.angle = function(v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.arc = function(v) {
            var sa, ea;
            v = this.angle(v);
            if (this.o.flip) {
                sa = this.endAngle + 0.00001;
                ea = sa - v - 0.00001;
            } else {
                sa = this.startAngle - 0.00001;
                ea = sa + v + 0.00001;
            }
            this.o.cursor &&
                (sa = ea - this.cursorExt) &&
                (ea = ea + this.cursorExt);

            return {
                s: sa,
                e: ea,
                d: this.o.flip && !this.o.cursor
            };
        };

        this.draw = function() {
            var c = this.g, // context
                a = this.arc(this.cv), // Arc
                pa, // Previous arc
                r = 1;

            c.lineWidth = this.lineWidth;
            c.lineCap = this.lineCap;

            if (this.o.bgColor !== "none") {
                c.beginPath();
                c.strokeStyle = this.o.bgColor;
                c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
                c.stroke();
            }

            if (this.o.displayPrevious) {
                pa = this.arc(this.v);
                c.beginPath();
                c.strokeStyle = this.pColor;
                c.arc(this.xy, this.xy, this.radius, pa.s, pa.e, pa.d);
                c.stroke();
                r = this.cv == this.v;
            }

            c.beginPath();
            c.strokeStyle = r ? this.o.fgColor : this.fgColor;
            c.arc(this.xy, this.xy, this.radius, a.s, a.e, a.d);
            c.stroke();
        };

        this.cancel = function() {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function(o) {
        return this.each(
            function() {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

}));
/**
 * Swiper 8.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 21, 2022
 */

!(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ?
        (module.exports = t()) :
        "function" == typeof define && define.amd ?
        define(t) :
        ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t());
})(this, function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }

    function t(s, a) {
        void 0 === s && (s = {}),
            void 0 === a && (a = {}),
            Object.keys(a).forEach((i) => {
                void 0 === s[i] ? (s[i] = a[i]) : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
            });
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e;
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) => ("undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        },
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e;
    }
    class n extends Array {
        constructor(e) {
            "number" == typeof e
                ?
                super(e) :
                (super(...(e || [])),
                    (function(e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e;
                            },
                        });
                    })(this));
        }
    }

    function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return (
            e.forEach((e) => {
                Array.isArray(e) ? t.push(...l(e)) : t.push(e);
            }),
            t
        );
    }

    function o(e, t) {
        return Array.prototype.filter.call(e, t);
    }

    function d(e, t) {
        const s = r(),
            i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"),
                    0 === s.indexOf("<tr") && (e = "tbody"),
                    (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
                    0 === s.indexOf("<tbody") && (e = "table"),
                    0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e]);
            } else
                l = (function(e, t) {
                    if ("string" != typeof e) return [e];
                    const s = [],
                        a = t.querySelectorAll(e);
                    for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                    return s;
                })(e.trim(), t || i);
        } else if (e.nodeType || e === s || e === i) l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e;
        }
        return new n(
            (function(e) {
                const t = [];
                for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                return t;
            })(l)
        );
    }
    d.fn = n.prototype;
    const c = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e) => e.split(" ")));
            return (
                this.forEach((e) => {
                    e.classList.add(...a);
                }),
                this
            );
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e) => e.split(" ")));
            return (
                this.forEach((e) => {
                    e.classList.remove(...a);
                }),
                this
            );
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e) => e.split(" ")));
            return o(this, (e) => a.filter((t) => e.classList.contains(t)).length > 0).length > 0;
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e) => e.split(" ")));
            this.forEach((e) => {
                a.forEach((t) => {
                    e.classList.toggle(t);
                });
            });
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length) this[s].setAttribute(e, t);
                else
                    for (const t in e)(this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
            return this;
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this;
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this;
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;

            function l(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if ((s.indexOf(e) < 0 && s.unshift(e), d(t).is(i))) r.apply(t, s);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s);
                }
            }

            function o(e) {
                const t = (e && e.target && e.target.dom7EventData) || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
            }
            "function" == typeof t[1] && (([a, r, n] = t), (i = void 0)), n || (n = !1);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (p = 0; p < c.length; p += 1) {
                        const e = c[p];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                            t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                            t.dom7LiveListeners[e].push({
                                listener: r,
                                proxyListener: l
                            }),
                            t.addEventListener(e, l, n);
                    }
                else
                    for (p = 0; p < c.length; p += 1) {
                        const e = c[p];
                        t.dom7Listeners || (t.dom7Listeners = {}),
                            t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                            t.dom7Listeners[e].push({
                                listener: r,
                                proxyListener: o
                            }),
                            t.addEventListener(e, o, n);
                    }
            }
            return this;
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;
            "function" == typeof t[1] && (([a, r, n] = t), (i = void 0)), n || (n = !1);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (
                        (!i && s.dom7Listeners ?
                            (a = s.dom7Listeners[t]) :
                            i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
                            a && a.length)
                    )
                        for (let e = a.length - 1; e >= 0; e -= 1) {
                            const i = a[e];
                            (r && i.listener === r) ||
                            (r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r) ?
                            (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) :
                            r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1));
                        }
                }
            }
            return this;
        },
        trigger: function() {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            const i = s[0].split(" "),
                n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a, {
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        });
                        (i.dom7EventData = s.filter((e, t) => t > 0)),
                        i.dispatchEvent(t),
                            (i.dom7EventData = []),
                            delete i.dom7EventData;
                    }
                }
            }
            return this;
        },
        transitionEnd: function(e) {
            const t = this;
            return (
                e &&
                t.on("transitionend", function s(a) {
                    a.target === this && (e.call(this, a), t.off("transitionend", s));
                }),
                this
            );
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return (
                        this[0].offsetWidth +
                        parseFloat(e.getPropertyValue("margin-right")) +
                        parseFloat(e.getPropertyValue("margin-left"))
                    );
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return (
                        this[0].offsetHeight +
                        parseFloat(e.getPropertyValue("margin-top")) +
                        parseFloat(e.getPropertyValue("margin-bottom"))
                    );
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        styles: function() {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function() {
            if (this.length > 0) {
                const e = r(),
                    t = a(),
                    s = this[0],
                    i = s.getBoundingClientRect(),
                    n = t.body,
                    l = s.clientTop || n.clientTop || 0,
                    o = s.clientLeft || n.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop,
                    c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                };
            }
            return null;
        },
        css: function(e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e) this[a].style[t] = e[t];
                    return this;
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function(e) {
            return e ?
                (this.forEach((t, s) => {
                        e.apply(t, [t, s]);
                    }),
                    this) :
                this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        },
        is: function(e) {
            const t = r(),
                s = a(),
                i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1;
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            let e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]]);
            }
            return d([this[e]]);
        },
        append: function() {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild);
                    } else if (e instanceof n)
                    for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
                else this[s].appendChild(e);
            }
            return this;
        },
        prepend: function(e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
                        this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
                } else if (e instanceof n)
                for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
            return this;
        },
        next: function(e) {
            return this.length > 0 ?
                e ?
                this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ?
                d([this[0].nextElementSibling]) :
                d([]) :
                this[0].nextElementSibling ?
                d([this[0].nextElementSibling]) :
                d([]) :
                d([]);
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
            }
            return d(t);
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ?
                    t.previousElementSibling && d(t.previousElementSibling).is(e) ?
                    d([t.previousElementSibling]) :
                    d([]) :
                    t.previousElementSibling ?
                    d([t.previousElementSibling]) :
                    d([]);
            }
            return d([]);
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
            }
            return d(t);
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1)
                null !== this[s].parentNode &&
                (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t);
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
            }
            return d(t);
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e]);
            }
            return d(t);
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1)(e && !d(a[s]).is(e)) || t.push(a[s]);
            }
            return d(t);
        },
        filter: function(e) {
            return d(o(this, e));
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
    };

    function p(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }

    function u() {
        return Date.now();
    }

    function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = (function(e) {
            const t = r();
            let s;
            return (
                t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle),
                s || (s = e.style),
                s
            );
        })(e);
        return (
            s.WebKitCSSMatrix ?
            ((i = l.transform || l.webkitTransform),
                i.split(",").length > 6 &&
                (i = i
                    .split(", ")
                    .map((e) => e.replace(",", "."))
                    .join(", ")),
                (n = new s.WebKitCSSMatrix("none" === i ? "" : i))) :
            ((n =
                    l.MozTransform ||
                    l.OTransform ||
                    l.MsTransform ||
                    l.msTransform ||
                    l.transform ||
                    l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
                (a = n.toString().split(","))),
            "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
            i || 0
        );
    }

    function m(e) {
        return (
            "object" == typeof e &&
            null !== e &&
            e.constructor &&
            "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
    }

    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ?
            e instanceof HTMLElement :
            e && (1 === e.nodeType || 11 === e.nodeType);
    }

    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t],
                        r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r &&
                        r.enumerable &&
                        (m(e[i]) && m(a[i]) ?
                            a[i].__swiper__ ?
                            (e[i] = a[i]) :
                            g(e[i], a[i]) :
                            !m(e[i]) && m(a[i]) ?
                            ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : g(e[i], a[i])) :
                            (e[i] = a[i]));
                }
            }
        }
        return e;
    }

    function v(e, t, s) {
        e.style.setProperty(t, s);
    }

    function w(e) {
        let {
            swiper: t,
            targetPosition: s,
            side: a
        } = e;
        const i = r(),
            n = -t.translate;
        let l,
            o = null;
        const d = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
            p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
            u = () => {
                (l = new Date().getTime()), null === o && (o = l);
                const e = Math.max(Math.min((l - o) / d, 1), 0),
                    r = 0.5 - Math.cos(e * Math.PI) / 2;
                let c = n + r * (s - n);
                if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({
                        [a]: c
                    }), p(c, s)))
                    return (
                        (t.wrapperEl.style.overflow = "hidden"),
                        (t.wrapperEl.style.scrollSnapType = ""),
                        setTimeout(() => {
                            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({
                                [a]: c
                            });
                        }),
                        void i.cancelAnimationFrame(t.cssModeFrameID)
                    );
                t.cssModeFrameID = i.requestAnimationFrame(u);
            };
        u();
    }
    let b, x, y;

    function E() {
        return (
            b ||
            (b = (function() {
                const e = r(),
                    t = a();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                    passiveListener: (function() {
                        let t = !1;
                        try {
                            const s = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0;
                                },
                            });
                            e.addEventListener("testPassiveListener", null, s);
                        } catch (e) {}
                        return t;
                    })(),
                    gestures: "ongesturestart" in e,
                };
            })()),
            b
        );
    }

    function C(e) {
        return (
            void 0 === e && (e = {}),
            x ||
            (x = (function(e) {
                let {
                    userAgent: t
                } = void 0 === e ? {} : e;
                const s = E(),
                    a = r(),
                    i = a.navigator.platform,
                    n = t || a.navigator.userAgent,
                    l = {
                        ios: !1,
                        android: !1
                    },
                    o = a.screen.width,
                    d = a.screen.height,
                    c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                let p = n.match(/(iPad).*OS\s([\d_]+)/);
                const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                    h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    m = "Win32" === i;
                let f = "MacIntel" === i;
                return (!p &&
                    f &&
                    s.touch && [
                        "1024x1366",
                        "1366x1024",
                        "834x1194",
                        "1194x834",
                        "834x1112",
                        "1112x834",
                        "768x1024",
                        "1024x768",
                        "820x1180",
                        "1180x820",
                        "810x1080",
                        "1080x810",
                    ].indexOf(`${o}x${d}`) >= 0 &&
                    ((p = n.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, "13_0_0"]), (f = !1)),
                    c && !m && ((l.os = "android"), (l.android = !0)),
                    (p || h || u) && ((l.os = "ios"), (l.ios = !0)),
                    l
                );
            })(e)),
            x
        );
    }

    function T() {
        return (
            y ||
            (y = (function() {
                const e = r();
                return {
                    isSafari: (function() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
                    })(),
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                };
            })()),
            y
        );
    }
    Object.keys(c).forEach((e) => {
        Object.defineProperty(d.fn, e, {
            value: c[e],
            writable: !0
        });
    });
    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return (
                e.split(" ").forEach((e) => {
                    a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
                }),
                a
            );
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r);
            }
            return (i.__emitterProxy = t), a.on(e, i, s);
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ?
                s :
                s.eventsListeners ?
                (e.split(" ").forEach((e) => {
                        void 0 === t ?
                            (s.eventsListeners[e] = []) :
                            s.eventsListeners[e] &&
                            s.eventsListeners[e].forEach((a, i) => {
                                (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                                s.eventsListeners[e].splice(i, 1);
                            });
                    }),
                    s) :
                s;
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ?
                ((t = r[0]), (s = r.slice(1, r.length)), (a = e)) :
                ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
                s.unshift(a);
            return (
                (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
                    e.eventsAnyListeners &&
                        e.eventsAnyListeners.length &&
                        e.eventsAnyListeners.forEach((e) => {
                            e.apply(a, [t, ...s]);
                        }),
                        e.eventsListeners &&
                        e.eventsListeners[t] &&
                        e.eventsListeners[t].forEach((e) => {
                            e.apply(a, s);
                        });
                }),
                e
            );
        },
    };
    var S = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.$el;
            (t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth),
            (s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10)),
                (s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(s) && (s = 0),
                Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s
                }));
        },
        updateSlides: function() {
            const e = this;

            function t(t) {
                return e.isHorizontal() ?
                    t :
                    {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom",
                    }[t];
            }

            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0);
            }
            const a = e.params,
                {
                    $wrapperEl: i,
                    size: r,
                    rtlTranslate: n,
                    wrongRTL: l
                } = e,
                o = e.virtual && a.virtual.enabled,
                d = o ? e.virtual.slides.length : e.slides.length,
                c = i.children(`.${e.params.slideClass}`),
                p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [],
                m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length,
                b = e.slidesGrid.length;
            let x = a.spaceBetween,
                y = -f,
                E = 0,
                C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = (parseFloat(x.replace("%", "")) / 100) * r),
                (e.virtualSize = -x),
                n ?
                c.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) :
                c.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }),
                a.centeredSlides &&
                a.cssMode &&
                (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
                    v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            T && e.grid.initSlides(p);
            const S =
                "auto" === a.slidesPerView &&
                a.breakpoints &&
                Object.keys(a.breakpoints).filter((e) => void 0 !== a.breakpoints[e].slidesPerView).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if ((T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display"))) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0]),
                            l = n[0].style.transform,
                            o = n[0].style.webkitTransform;
                        if (
                            (l && (n[0].style.transform = "none"),
                                o && (n[0].style.webkitTransform = "none"),
                                a.roundLengths)
                        )
                            $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                        else {
                            const e = s(r, "width"),
                                t = s(r, "padding-left"),
                                a = s(r, "padding-right"),
                                i = s(r, "margin-left"),
                                l = s(r, "margin-right"),
                                o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) $ = e + i + l;
                            else {
                                const {
                                    clientWidth: s,
                                    offsetWidth: r
                                } = n[0];
                                $ = e + t + a + i + l + (r - s);
                            }
                        }
                        l && (n[0].style.transform = l),
                            o && (n[0].style.webkitTransform = o),
                            a.roundLengths && ($ = Math.floor($));
                    } else
                        ($ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView),
                        a.roundLengths && ($ = Math.floor($)),
                        c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $),
                        m.push($),
                        a.centeredSlides ?
                        ((y = y + $ / 2 + E / 2 + x),
                            0 === E && 0 !== i && (y = y - r / 2 - x),
                            0 === i && (y = y - r / 2 - x),
                            Math.abs(y) < 0.001 && (y = 0),
                            a.roundLengths && (y = Math.floor(y)),
                            C % a.slidesPerGroup == 0 && u.push(y),
                            h.push(y)) :
                        (a.roundLengths && (y = Math.floor(y)),
                            (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 &&
                            u.push(y),
                            h.push(y),
                            (y = y + $ + x)),
                        (e.virtualSize += $ + x),
                        (E = $),
                        (C += 1);
                }
            }
            if (
                ((e.virtualSize = Math.max(e.virtualSize, r) + g),
                    n &&
                    l &&
                    ("slide" === a.effect || "coverflow" === a.effect) &&
                    i.css({
                        width: `${e.virtualSize + a.spaceBetween}px`
                    }),
                    a.setWrapperSize && i.css({
                        [t("width")]: `${e.virtualSize + a.spaceBetween}px`
                    }),
                    T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides)
            ) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i);
                }
                (u = t), Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
            }
            if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
                    [s]: `${x}px`
                });
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t) => {
                        e += t + (a.spaceBetween ? a.spaceBetween : 0);
                    }),
                    (e -= a.spaceBetween);
                const t = e - r;
                u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (
                    (m.forEach((t) => {
                            e += t + (a.spaceBetween ? a.spaceBetween : 0);
                        }),
                        (e -= a.spaceBetween),
                        e < r)
                ) {
                    const t = (r - e) / 2;
                    u.forEach((e, s) => {
                            u[s] = e - t;
                        }),
                        h.forEach((e, s) => {
                            h[s] = e + t;
                        });
                }
            }
            if (
                (Object.assign(e, {
                        slides: c,
                        snapGrid: u,
                        slidesGrid: h,
                        slidesSizesGrid: m
                    }),
                    a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
            ) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                    v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0],
                    s = -e.slidesGrid[0];
                (e.snapGrid = e.snapGrid.map((e) => e + t)), (e.slidesGrid = e.slidesGrid.map((e) => e + s));
            }
            if (
                (p !== d && e.emit("slidesLengthChange"),
                    u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                    h.length !== b && e.emit("slidesGridLengthChange"),
                    a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || ("slide" !== a.effect && "fade" !== a.effect)))
            ) {
                const t = `${a.containerModifierClass}backface-hidden`,
                    s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t);
            }
        },
        updateAutoHeight: function(e) {
            const t = this,
                s = [],
                a = t.virtual && t.params.virtual.enabled;
            let i,
                r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = (e) =>
                a ?
                t.slides.filter((t) => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] :
                t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)
                    (t.visibleSlides || d([])).each((e) => {
                        s.push(e);
                    });
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a) break;
                        s.push(n(e));
                    }
            else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r;
                }
                (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function() {
            const e = this,
                t = e.slides;
            for (let s = 0; s < t.length; s += 1)
                t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = (this && this.translate) || 0);
            const t = this,
                s = t.params,
                {
                    slides: a,
                    rtlTranslate: i,
                    snapGrid: r
                } = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.removeClass(s.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    c =
                    (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
                    (l.swiperSlideSize + s.spaceBetween),
                    p = -(n - o),
                    u = p + t.slidesSizesGrid[e];
                ((p >= 0 && p < t.size - 1) || (u > 1 && u <= t.size) || (p <= 0 && u >= t.size)) &&
                (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)),
                (l.progress = i ? -d : d),
                (l.originalProgress = i ? -c : c);
            }
            t.visibleSlides = d(t.visibleSlides);
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = (t && t.translate && t.translate * s) || 0;
            }
            const s = t.params,
                a = t.maxTranslate() - t.minTranslate();
            let {
                progress: i,
                isBeginning: r,
                isEnd: n
            } = t;
            const l = r,
                o = n;
            0 === a ? ((i = 0), (r = !0), (n = !0)) : ((i = (e - t.minTranslate()) / a), (r = i <= 0), (n = i >= 1)),
                Object.assign(t, {
                    progress: i,
                    isBeginning: r,
                    isEnd: n
                }),
                (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && t.updateSlidesProgress(e),
                r && !l && t.emit("reachBeginning toEdge"),
                n && !o && t.emit("reachEnd toEdge"),
                ((l && !r) || (o && !n)) && t.emit("fromEdge"),
                t.emit("progress", i);
        },
        updateSlidesClasses: function() {
            const e = this,
                {
                    slides: t,
                    params: s,
                    $wrapperEl: a,
                    activeIndex: i,
                    realIndex: r
                } = e,
                n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(
                    `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
                ),
                (l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i)),
                l.addClass(s.slideActiveClass),
                s.loop &&
                (l.hasClass(s.slideDuplicateClass) ?
                    a
                    .children(
                        `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass) :
                    a
                    .children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`)
                    .addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
                s.loop &&
                (o.hasClass(s.slideDuplicateClass) ?
                    a
                    .children(
                        `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr(
                                      "data-swiper-slide-index"
                                  )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass) :
                    a
                    .children(
                        `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr(
                                      "data-swiper-slide-index"
                                  )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass),
                    d.hasClass(s.slideDuplicateClass) ?
                    a
                    .children(
                        `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr(
                                      "data-swiper-slide-index"
                                  )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass) :
                    a
                    .children(
                        `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr(
                                      "data-swiper-slide-index"
                                  )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)),
                e.emitSlidesClasses();
        },
        updateActiveIndex: function(e) {
            const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                    slidesGrid: a,
                    snapGrid: i,
                    params: r,
                    activeIndex: n,
                    realIndex: l,
                    snapIndex: o
                } = t;
            let d,
                c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1)
                    void 0 !== a[e + 1] ?
                    s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ?
                    (c = e) :
                    s >= a[e] && s < a[e + 1] && (c = e + 1) :
                    s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (i.indexOf(s) >= 0) d = i.indexOf(s);
            else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup);
            }
            if ((d >= i.length && (d = i.length - 1), c === n))
                return void(d !== o && ((t.snapIndex = d), t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                    snapIndex: d,
                    realIndex: p,
                    previousIndex: n,
                    activeIndex: c
                }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                l !== p && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
        },
        updateClickedSlide: function(e) {
            const t = this,
                s = t.params,
                a = d(e).closest(`.${s.slideClass}`)[0];
            let i,
                r = !1;
            if (a)
                for (let e = 0; e < t.slides.length; e += 1)
                    if (t.slides[e] === a) {
                        (r = !0), (i = e);
                        break;
                    }
            if (!a || !r) return (t.clickedSlide = void 0), void(t.clickedIndex = void 0);
            (t.clickedSlide = a),
            t.virtual && t.params.virtual.enabled ?
                (t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10)) :
                (t.clickedIndex = i),
                s.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
        },
    };
    var M = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {
                params: t,
                rtlTranslate: s,
                translate: a,
                $wrapperEl: i
            } = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = h(i[0], e);
            return s && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
            const s = this,
                {
                    rtlTranslate: a,
                    params: i,
                    $wrapperEl: r,
                    wrapperEl: n,
                    progress: l
                } = s;
            let o,
                d = 0,
                c = 0;
            s.isHorizontal() ? (d = a ? -e : e) : (c = e),
                i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
                i.cssMode ?
                (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c) :
                i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
                (s.previousTranslate = s.translate),
                (s.translate = s.isHorizontal() ? d : c);
            const p = s.maxTranslate() - s.minTranslate();
            (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
            o !== l && s.updateProgress(e),
                s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function() {
            return -this.snapGrid[0];
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                void 0 === a && (a = !0);
            const r = this,
                {
                    params: n,
                    wrapperEl: l
                } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(),
                d = r.maxTranslate();
            let c;
            if (((c = a && e > o ? o : a && e < d ? d : e), r.updateProgress(c), n.cssMode)) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll)
                        return w({
                            swiper: r,
                            targetPosition: -c,
                            side: e ? "left" : "top"
                        }), !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    });
                }
                return !0;
            }
            return (
                0 === t ?
                (r.setTransition(0),
                    r.setTranslate(c),
                    s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) :
                (r.setTransition(t),
                    r.setTranslate(c),
                    s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")),
                    r.animating ||
                    ((r.animating = !0),
                        r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function(e) {
                            r &&
                                !r.destroyed &&
                                e.target === this &&
                                (r.$wrapperEl[0].removeEventListener(
                                        "transitionend",
                                        r.onTranslateToWrapperTransitionEnd
                                    ),
                                    r.$wrapperEl[0].removeEventListener(
                                        "webkitTransitionEnd",
                                        r.onTranslateToWrapperTransitionEnd
                                    ),
                                    (r.onTranslateToWrapperTransitionEnd = null),
                                    delete r.onTranslateToWrapperTransitionEnd,
                                    s && r.emit("transitionEnd"));
                        }),
                        r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                        r.$wrapperEl[0].addEventListener(
                            "webkitTransitionEnd",
                            r.onTranslateToWrapperTransitionEnd
                        ))), !0
            );
        },
    };

    function P(e) {
        let {
            swiper: t,
            runCallbacks: s,
            direction: a,
            step: i
        } = e;
        const {
            activeIndex: r,
            previousIndex: n
        } = t;
        let l = a;
        if ((l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n)) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`),
                "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
        }
    }
    var k = {
        slideTo: function(e, t, s, a, i) {
            if (
                (void 0 === e && (e = 0),
                    void 0 === t && (t = this.params.speed),
                    void 0 === s && (s = !0),
                    "number" != typeof e && "string" != typeof e)
            )
                throw new Error(
                    `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
                );
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t))
                    throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t;
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: m,
            } = r;
            if ((r.animating && l.preventInteractionOnTransition) || (!m && !a && !i)) return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const v = -o[g];
            if (l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * v),
                        s = Math.floor(100 * d[e]),
                        a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ?
                        t >= s && t < a - (a - s) / 2 ?
                        (n = e) :
                        t >= s && t < a && (n = e + 1) :
                        t >= s && (n = e);
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1;
            }
            let b;
            if (
                (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
                    r.updateProgress(v),
                    (b = n > p ? "next" : n < p ? "prev" : "reset"),
                    (u && -v === r.translate) || (!u && v === r.translate))
            )
                return (
                    r.updateActiveIndex(n),
                    l.autoHeight && r.updateAutoHeight(),
                    r.updateSlidesClasses(),
                    "slide" !== l.effect && r.setTranslate(v),
                    "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1
                );
            if (l.cssMode) {
                const e = r.isHorizontal(),
                    s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && ((r.wrapperEl.style.scrollSnapType = "none"), (r._immediateVirtual = !0)),
                        (h[e ? "scrollLeft" : "scrollTop"] = s),
                        t &&
                        requestAnimationFrame(() => {
                            (r.wrapperEl.style.scrollSnapType = ""), (r._swiperImmediateVirtual = !1);
                        });
                } else {
                    if (!r.support.smoothScroll)
                        return w({
                            swiper: r,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }), !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    });
                }
                return !0;
            }
            return (
                r.setTransition(t),
                r.setTranslate(v),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, a),
                r.transitionStart(s, b),
                0 === t ?
                r.transitionEnd(s, b) :
                r.animating ||
                ((r.animating = !0),
                    r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function(e) {
                        r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                                    "transitionend",
                                    r.onSlideToWrapperTransitionEnd
                                ),
                                r.$wrapperEl[0].removeEventListener(
                                    "webkitTransitionEnd",
                                    r.onSlideToWrapperTransitionEnd
                                ),
                                (r.onSlideToWrapperTransitionEnd = null),
                                delete r.onSlideToWrapperTransitionEnd,
                                r.transitionEnd(s, b));
                    }),
                    r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                    r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
            );
        },
        slideToLoop: function(e, t, s, a) {
            if (
                (void 0 === e && (e = 0),
                    void 0 === t && (t = this.params.speed),
                    void 0 === s && (s = !0),
                    "string" == typeof e)
            ) {
                const t = parseInt(e, 10);
                if (!isFinite(t))
                    throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t;
            }
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
        },
        slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this,
                {
                    animating: i,
                    enabled: r,
                    params: n
                } = a;
            if (!r) return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide) return !1;
                a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
        },
        slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this,
                {
                    params: i,
                    animating: r,
                    snapGrid: n,
                    slidesGrid: l,
                    rtlTranslate: o,
                    enabled: d
                } = a;
            if (!d) return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = c(o ? a.translate : -a.translate),
                u = n.map((e) => c(e));
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach((t, s) => {
                        p >= t && (e = s);
                    }),
                    void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
            }
            let m = 0;
            if (
                (void 0 !== h &&
                    ((m = l.indexOf(h)),
                        m < 0 && (m = a.activeIndex - 1),
                        "auto" === i.slidesPerView &&
                        1 === i.slidesPerGroup &&
                        i.slidesPerGroupAuto &&
                        ((m = m - a.slidesPerViewDynamic("previous", !0) + 1), (m = Math.max(m, 0)))),
                    i.rewind && a.isBeginning)
            ) {
                const i =
                    a.params.virtual && a.params.virtual.enabled && a.virtual ?
                    a.virtual.slides.length - 1 :
                    a.slides.length - 1;
                return a.slideTo(i, e, t, s);
            }
            return a.slideTo(m, e, t, s);
        },
        slideReset: function(e, t, s) {
            return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, s)
            );
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = 0.5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r),
                l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
            }
            return (r = Math.max(r, 0)), (r = Math.min(r, i.slidesGrid.length - 1)), i.slideTo(r, e, t, s);
        },
        slideToClickedSlide: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: s
                } = e,
                a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i,
                r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                (i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                t.centeredSlides ?
                    r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ?
                    (e.loopFix(),
                        (r = s
                            .children(
                                `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                            )
                            .eq(0)
                            .index()),
                        p(() => {
                            e.slideTo(r);
                        })) :
                    e.slideTo(r) :
                    r > e.slides.length - a ?
                    (e.loopFix(),
                        (r = s
                            .children(
                                `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                            )
                            .eq(0)
                            .index()),
                        p(() => {
                            e.slideTo(r);
                        })) :
                    e.slideTo(r);
            } else e.slideTo(r);
        },
    };
    var z = {
        loopCreate: function() {
            const e = this,
                t = a(),
                {
                    params: s,
                    $wrapperEl: i
                } = e,
                r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e);
                    }
                    n = r.children(`.${s.slideClass}`);
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length),
                (e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10))),
                (e.loopedSlides += s.loopAdditionalSlides),
                e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
            const l = [],
                o = [];
            n.each((e, t) => {
                d(e).attr("data-swiper-slide-index", t);
            });
            for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / n.length) * n.length;
                o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0]);
            }
            for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function() {
            const e = this;
            e.emit("beforeLoopFix");
            const {
                activeIndex: t,
                slides: s,
                loopedSlides: a,
                allowSlidePrev: i,
                allowSlideNext: r,
                snapGrid: n,
                rtlTranslate: l,
            } = e;
            let o;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                (o = s.length - 3 * a + t), (o += a);
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
            } else if (t >= s.length - a) {
                (o = -s.length + t + a), (o += a);
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
            }
            (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
        },
        loopDestroy: function() {
            const {
                $wrapperEl: e,
                params: t,
                slides: s
            } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                s.removeAttr("data-swiper-slide-index");
        },
    };

    function L(e) {
        const t = this,
            s = a(),
            i = r(),
            n = t.touchEventsData,
            {
                params: l,
                touches: o,
                enabled: c
            } = t;
        if (!c) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (((n.isTouchEvent = "touchstart" === p.type), !n.isTouchEvent && "which" in p && 3 === p.which)) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const m = !!l.noSwipingClass && "" !== l.noSwipingClass,
            f = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
        const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            v = !(!p.target || !p.target.shadowRoot);
        if (
            l.noSwiping &&
            (v ?
                (function(e, t) {
                    return (
                        void 0 === t && (t = this),
                        (function t(s) {
                            if (!s || s === a() || s === r()) return null;
                            s.assignedSlot && (s = s.assignedSlot);
                            const i = s.closest(e);
                            return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
                        })(t)
                    );
                })(g, h[0]) :
                h.closest(g)[0])
        )
            return void(t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        (o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX),
        (o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY);
        const w = o.currentX,
            b = o.currentY,
            x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (x && (w <= y || w >= i.innerWidth - y)) {
            if ("prevent" !== x) return;
            e.preventDefault();
        }
        if (
            (Object.assign(n, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                }),
                (o.startX = w),
                (o.startY = b),
                (n.touchStartTime = u()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                l.threshold > 0 && (n.allowThresholdMove = !1),
                "touchstart" !== p.type)
        ) {
            let e = !0;
            h.is(n.focusableElements) && ((e = !1), "SELECT" === h[0].nodeName && (n.isTouched = !1)),
                s.activeElement &&
                d(s.activeElement).is(n.focusableElements) &&
                s.activeElement !== h[0] &&
                s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            (!l.touchStartForcePreventDefault && !a) || h[0].isContentEditable || p.preventDefault();
        }
        t.params.freeMode &&
            t.params.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !l.cssMode &&
            t.freeMode.onTouchStart(),
            t.emit("touchStart", p);
    }

    function O(e) {
        const t = a(),
            s = this,
            i = s.touchEventsData,
            {
                params: r,
                touches: n,
                rtlTranslate: l,
                enabled: o
            } = s;
        if (!o) return;
        let c = e;
        if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
            return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            h = "touchmove" === c.type ? p.pageX : c.pageX,
            m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return (n.startX = h), void(n.startY = m);
        if (!s.allowTouchMove)
            return (
                d(c.target).is(i.focusableElements) || (s.allowClick = !1),
                void(
                    i.isTouched &&
                    (Object.assign(n, {
                        startX: h,
                        startY: m,
                        currentX: h,
                        currentY: m
                    }), (i.touchStartTime = u()))
                )
            );
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (
                    (m < n.startY && s.translate <= s.maxTranslate()) ||
                    (m > n.startY && s.translate >= s.minTranslate())
                )
                    return (i.isTouched = !1), void(i.isMoved = !1);
            } else if (
            (h < n.startX && s.translate <= s.maxTranslate()) ||
            (h > n.startX && s.translate >= s.minTranslate())
        )
            return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements))
            return (i.isMoved = !0), void(s.allowClick = !1);
        if ((i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1)) return;
        (n.currentX = h), (n.currentY = m);
        const f = n.currentX - n.startX,
            g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            (s.isHorizontal() && n.currentY === n.startY) || (s.isVertical() && n.currentX === n.startX) ?
            (i.isScrolling = !1) :
            f * f + g * g >= 25 &&
                ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
                    (i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle));
        }
        if (
            (i.isScrolling && s.emit("touchMoveOpposite", c),
                void 0 === i.startMoving && ((n.currentX === n.startX && n.currentY === n.startY) || (i.startMoving = !0)),
                i.isScrolling)
        )
            return void(i.isTouched = !1);
        if (!i.startMoving) return;
        (s.allowClick = !1), !r.cssMode && c.cancelable && c.preventDefault(),
            r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
            i.isMoved ||
            (r.loop && !r.cssMode && s.loopFix(),
                (i.startTranslate = s.getTranslate()),
                s.setTransition(0),
                s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                (i.allowMomentumBounce = !1), !r.grabCursor || (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) || s.setGrabCursor(!0),
                s.emit("sliderFirstMove", c)),
            s.emit("sliderMove", c),
            (i.isMoved = !0);
        let v = s.isHorizontal() ? f : g;
        (n.diff = v),
        (v *= r.touchRatio),
        l && (v = -v),
            (s.swipeDirection = v > 0 ? "prev" : "next"),
            (i.currentTranslate = v + i.startTranslate);
        let w = !0,
            b = r.resistanceRatio;
        if (
            (r.touchReleaseOnEdges && (b = 0),
                v > 0 && i.currentTranslate > s.minTranslate() ?
                ((w = !1),
                    r.resistance &&
                    (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) :
                v < 0 &&
                i.currentTranslate < s.maxTranslate() &&
                ((w = !1),
                    r.resistance &&
                    (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)),
                w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext &&
                "next" === s.swipeDirection &&
                i.currentTranslate < i.startTranslate &&
                (i.currentTranslate = i.startTranslate), !s.allowSlidePrev &&
                "prev" === s.swipeDirection &&
                i.currentTranslate > i.startTranslate &&
                (i.currentTranslate = i.startTranslate),
                s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
                r.threshold > 0)
        ) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
                return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return (
                    (i.allowThresholdMove = !0),
                    (n.startX = n.currentX),
                    (n.startY = n.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                );
        }
        r.followFinger &&
            !r.cssMode &&
            (((r.freeMode && r.freeMode.enabled && s.freeMode) || r.watchSlidesProgress) &&
                (s.updateActiveIndex(), s.updateSlidesClasses()),
                s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
                s.updateProgress(i.currentTranslate),
                s.setTranslate(i.currentTranslate));
    }

    function I(e) {
        const t = this,
            s = t.touchEventsData,
            {
                params: a,
                touches: i,
                rtlTranslate: r,
                slidesGrid: n,
                enabled: l
            } = t;
        if (!l) return;
        let o = e;
        if (
            (o.originalEvent && (o = o.originalEvent),
                s.allowTouchCallbacks && t.emit("touchEnd", o),
                (s.allowTouchCallbacks = !1), !s.isTouched)
        )
            return s.isMoved && a.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void(s.startMoving = !1);
        a.grabCursor &&
            s.isMoved &&
            s.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
        const d = u(),
            c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || (o.composedPath && o.composedPath());
            t.updateClickedSlide((e && e[0]) || o.target),
                t.emit("tap click", o),
                c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
        }
        if (
            ((s.lastClickTime = u()),
                p(() => {
                    t.destroyed || (t.allowClick = !0);
                }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
        )
            return (s.isTouched = !1), (s.isMoved = !1), void(s.startMoving = !1);
        let h;
        if (
            ((s.isTouched = !1),
                (s.isMoved = !1),
                (s.startMoving = !1),
                (h = a.followFinger ? (r ? t.translate : -t.translate) : -s.currentTranslate),
                a.cssMode)
        )
            return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ?
                h >= n[e] && h < n[e + t] && ((m = e), (f = n[e + t] - n[e])) :
                h >= n[e] && ((m = e), (f = n[n.length - 1] - n[n.length - 2]));
        }
        let g = null,
            v = null;
        a.rewind &&
            (t.isBeginning ?
                (v =
                    t.params.virtual && t.params.virtual.enabled && t.virtual ?
                    t.virtual.slides.length - 1 :
                    t.slides.length - 1) :
                t.isEnd && (g = 0));
        const w = (h - n[m]) / f,
            b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
                (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)),
                "prev" === t.swipeDirection &&
                (w > 1 - a.longSwipesRatio ?
                    t.slideTo(m + b) :
                    null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ?
                    t.slideTo(v) :
                    t.slideTo(m));
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ?
                o.target === t.navigation.nextEl ?
                t.slideTo(m + b) :
                t.slideTo(m) :
                ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
                    "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
        }
    }

    function A() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: a,
            allowSlidePrev: i,
            snapGrid: r
        } = e;
        (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ?
            e.slideTo(e.slides.length - 1, 0, !1, !0) :
            e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = a),
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }

    function D(e) {
        const t = this;
        t.enabled &&
            (t.allowClick ||
                (t.params.preventClicks && e.preventDefault(),
                    t.params.preventClicksPropagation &&
                    t.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation())));
    }

    function G() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: s,
                enabled: a
            } = e;
        if (!a) return;
        let i;
        (e.previousTranslate = e.translate),
        e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
    }
    let N = !1;

    function B() {}
    const H = (e, t) => {
        const s = a(),
            {
                params: i,
                touchEvents: r,
                el: n,
                wrapperEl: l,
                device: o,
                support: d
            } = e,
            c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener",
            u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1,
            };
            n[p](r.start, e.onTouchStart, t),
                n[p](r.move, e.onTouchMove, d.passiveListener ? {
                    passive: !1,
                    capture: c
                } : c),
                n[p](r.end, e.onTouchEnd, t),
                r.cancel && n[p](r.cancel, e.onTouchEnd, t);
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0),
            i.cssMode && l[p]("scroll", e.onScroll),
            i.updateOnWindowResize ?
            e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) :
            e[u]("observerUpdate", A, !0);
    };
    var X = {
        attachEvents: function() {
            const e = this,
                t = a(),
                {
                    params: s,
                    support: i
                } = e;
            (e.onTouchStart = L.bind(e)),
            (e.onTouchMove = O.bind(e)),
            (e.onTouchEnd = I.bind(e)),
            s.cssMode && (e.onScroll = G.bind(e)),
                (e.onClick = D.bind(e)),
                i.touch && !N && (t.addEventListener("touchstart", B), (N = !0)),
                H(e, "on");
        },
        detachEvents: function() {
            H(this, "off");
        },
    };
    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function() {
            const e = this,
                {
                    classNames: t,
                    params: s,
                    rtl: a,
                    $el: i,
                    device: r,
                    support: n
                } = e,
                l = (function(e, t) {
                    const s = [];
                    return (
                        e.forEach((e) => {
                            "object" == typeof e
                                ?
                                Object.keys(e).forEach((a) => {
                                    e[a] && s.push(t + a);
                                }) :
                                "string" == typeof e && s.push(t + e);
                        }),
                        s
                    );
                })(
                    [
                        "initialized",
                        s.direction,
                        {
                            "pointer-events": !n.touch
                        },
                        {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        },
                        {
                            autoheight: s.autoHeight
                        },
                        {
                            rtl: a
                        },
                        {
                            grid: s.grid && s.grid.rows > 1
                        },
                        {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        },
                        {
                            android: r.android
                        },
                        {
                            ios: r.ios
                        },
                        {
                            "css-mode": s.cssMode
                        },
                        {
                            centered: s.cssMode && s.centeredSlides
                        },
                        {
                            "watch-progress": s.watchSlidesProgress
                        },
                    ],
                    s.containerModifierClass
                );
            t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function() {
            const {
                $el: e,
                classNames: t
            } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
    };

    function q(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0],
                i = s[a];
            "object" == typeof i && null !== i ?
                (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                        auto: !0
                    }),
                    a in e && "enabled" in i ?
                    (!0 === e[a] && (e[a] = {
                            enabled: !0
                        }),
                        "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0),
                        e[a] || (e[a] = {
                            enabled: !1
                        }),
                        g(t, s)) :
                    g(t, s)) :
                g(t, s);
        };
    }
    const j = {
            eventsEmitter: $,
            update: S,
            translate: M,
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    a.cssMode ||
                        (a.autoHeight && s.updateAutoHeight(),
                            P({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }));
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    (s.animating = !1),
                    a.cssMode || (s.setTransition(0), P({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }));
                },
            },
            slide: k,
            loop: z,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (
                        t.support.touch ||
                        !t.params.simulateTouch ||
                        (t.params.watchOverflow && t.isLocked) ||
                        t.params.cssMode
                    )
                        return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    (s.style.cursor = "move"), (s.style.cursor = e ? "grabbing" : "grab");
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch ||
                        (e.params.watchOverflow && e.isLocked) ||
                        e.params.cssMode ||
                        (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
                },
            },
            events: X,
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: a = 0,
                            params: i,
                            $el: r
                        } = e,
                        n = i.breakpoints;
                    if (!n || (n && 0 === Object.keys(n).length)) return;
                    const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l) return;
                    const o = (l in n ? n[l] : void 0) || e.originalParams,
                        d = Y(e, i),
                        c = Y(e, o),
                        p = i.enabled;
                    d && !c ?
                        (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
                            e.emitContainerClasses()) :
                        !d &&
                        c &&
                        (r.addClass(`${i.containerModifierClass}grid`),
                            ((o.grid.fill && "column" === o.grid.fill) || (!o.grid.fill && "column" === i.grid.fill)) &&
                            r.addClass(`${i.containerModifierClass}grid-column`),
                            e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t) => {
                            const s = i[t] && i[t].enabled,
                                a = o[t] && o[t].enabled;
                            s && !a && e[t].disable(), !s && a && e[t].enable();
                        });
                    const u = o.direction && o.direction !== i.direction,
                        h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(), g(e.params, o);
                    const m = e.params.enabled;
                    Object.assign(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev,
                        }),
                        p && !m ? e.disable() : !p && m && e.enable(),
                        (e.currentBreakpoint = l),
                        e.emit("_beforeBreakpoint", o),
                        h &&
                        s &&
                        (e.loopDestroy(),
                            e.loopCreate(),
                            e.updateSlides(),
                            e.slideTo(t - a + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", o);
                },
                getBreakpoint: function(e, t, s) {
                    if ((void 0 === t && (t = "window"), !e || ("container" === t && !s))) return;
                    let a = !1;
                    const i = r(),
                        n = "window" === t ? i.innerHeight : s.clientHeight,
                        l = Object.keys(e).map((e) => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                };
                            }
                            return {
                                value: e,
                                point: e
                            };
                        });
                    l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < l.length; e += 1) {
                        const {
                            point: r,
                            value: n
                        } = l[e];
                        "window" === t
                            ?
                            i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) :
                            n <= s.clientWidth && (a = r);
                    }
                    return a || "max";
                },
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: a
                        } = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s;
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                        t && t !== e.isLocked && (e.isEnd = !1),
                        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
                },
            },
            classes: R,
            images: {
                loadImage: function(e, t, s, a, i, n) {
                    const l = r();
                    let o;

                    function c() {
                        n && n();
                    }
                    d(e).parent("picture")[0] || (e.complete && i) ?
                        c() :
                        t ?
                        ((o = new l.Image()),
                            (o.onload = c),
                            (o.onerror = c),
                            a && (o.sizes = a),
                            s && (o.srcset = s),
                            t && (o.src = t)) :
                        c();
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e &&
                            e &&
                            !e.destroyed &&
                            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                                e.imagesLoaded === e.imagesToLoad.length &&
                                (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const a = e.imagesToLoad[s];
                        e.loadImage(
                            a,
                            a.currentSrc || a.getAttribute("src"),
                            a.srcset || a.getAttribute("srcset"),
                            a.sizes || a.getAttribute("sizes"), !0,
                            t
                        );
                    }
                },
            },
        },
        _ = {};
    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
            if (
                (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ?
                    (t = a[0]) :
                    ([e, t] = a),
                    t || (t = {}),
                    (t = g({}, t)),
                    e && !t.el && (t.el = e),
                    t.el && d(t.el).length > 1)
            ) {
                const e = [];
                return (
                    d(t.el).each((s) => {
                        const a = g({}, t, {
                            el: s
                        });
                        e.push(new V(a));
                    }),
                    e
                );
            }
            const r = this;
            (r.__swiper__ = !0),
            (r.support = E()),
            (r.device = C({
                userAgent: t.userAgent
            })),
            (r.browser = T()),
            (r.eventsListeners = {}),
            (r.eventsAnyListeners = []),
            (r.modules = [...r.__modules__]),
            t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach((e) => {
                e({
                    swiper: r,
                    extendParams: q(t, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r),
                });
            });
            const l = g({}, W, n);
            return (
                (r.params = g({}, l, _, t)),
                (r.originalParams = g({}, r.params)),
                (r.passedParams = g({}, t)),
                r.params &&
                r.params.on &&
                Object.keys(r.params.on).forEach((e) => {
                    r.on(e, r.params.on[e]);
                }),
                r.params && r.params.onAny && r.onAny(r.params.onAny),
                (r.$ = d),
                Object.assign(r, {
                    enabled: r.params.enabled,
                    el: e,
                    classNames: [],
                    slides: d(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === r.params.direction,
                    isVertical: () => "vertical" === r.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: r.params.allowSlideNext,
                    allowSlidePrev: r.params.allowSlidePrev,
                    touchEvents: (function() {
                        const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                            t = ["pointerdown", "pointermove", "pointerup"];
                        return (
                            (r.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }),
                            (r.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }),
                            r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                        );
                    })(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: r.params.focusableElements,
                        lastClickTime: u(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0,
                    },
                    allowClick: !0,
                    allowTouchMove: r.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0,
                }),
                r.emit("_swiper"),
                r.params.init && r.init(),
                r
            );
        }
        enable() {
            const e = this;
            e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
        }
        disable() {
            const e = this;
            e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(),
                i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className
                .split(" ")
                .filter((t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ?
                "" :
                e.className
                .split(" ")
                .filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
                .join(" ");
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s) => {
                    const a = e.getSlideClasses(s);
                    t.push({
                        slideEl: s,
                        classNames: a
                    }), e.emit("_slideClass", s, a);
                }),
                e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
                params: s,
                slides: a,
                slidesGrid: i,
                slidesSizesGrid: r,
                size: n,
                activeIndex: l
            } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e,
                    t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1)
                    a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1)
                    a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
                }
            else
                for (let e = l - 1; e >= 0; e -= 1) {
                    i[l] - i[e] < n && (o += 1);
                }
            return o;
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let i;
            s.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode && e.params.freeMode.enabled ?
                (a(), e.params.autoHeight && e.updateAutoHeight()) :
                ((i =
                        ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
                        e.isEnd &&
                        !e.params.centeredSlides ?
                        e.slideTo(e.slides.length - 1, 0, !1, !0) :
                        e.slideTo(e.activeIndex, 0, !1, !0)),
                    i || a()),
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update");
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this,
                a = s.params.direction;
            return (
                e || (e = "horizontal" === a ? "vertical" : "horizontal"),
                e === a ||
                ("horizontal" !== e && "vertical" !== e) ||
                (s.$el
                    .removeClass(`${s.params.containerModifierClass}${a}`)
                    .addClass(`${s.params.containerModifierClass}${e}`),
                    s.emitContainerClasses(),
                    (s.params.direction = e),
                    s.slides.each((t) => {
                        "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                    }),
                    s.emit("changeDirection"),
                    t && s.update()),
                s
            );
        }
        changeLanguageDirection(e) {
            const t = this;
            (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
                (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
                t.rtl ?
                (t.$el.addClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "rtl")) :
                (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "ltr")),
                t.update());
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return (t.children = (e) => s.children(e)), t;
                }
                return s.children ? s.children(i()) : d(s).children(i());
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                (r = d(e)),
                (e.className = t.params.wrapperClass),
                s.append(e),
                    s.children(`.${t.params.slideClass}`).each((e) => {
                        r.append(e);
                    });
            }
            return (
                Object.assign(t, {
                    $el: s,
                    el: e,
                    $wrapperEl: r,
                    wrapperEl: r[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction &&
                        ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                    wrongRTL: "-webkit-box" === r.css("display"),
                }), !0
            );
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return (!1 === t.mount(e) ||
                (t.emit("beforeInit"),
                    t.params.breakpoints && t.setBreakpoint(),
                    t.addClasses(),
                    t.params.loop && t.loopCreate(),
                    t.updateSize(),
                    t.updateSlides(),
                    t.params.watchOverflow && t.checkOverflow(),
                    t.params.grabCursor && t.enabled && t.setGrabCursor(),
                    t.params.preloadImages && t.preloadImages(),
                    t.params.loop ?
                    t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) :
                    t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                    t.attachEvents(),
                    (t.initialized = !0),
                    t.emit("init"),
                    t.emit("afterInit")),
                t
            );
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this,
                {
                    params: a,
                    $el: i,
                    $wrapperEl: r,
                    slides: n
                } = s;
            return (
                void 0 === s.params ||
                s.destroyed ||
                (s.emit("beforeDestroy"),
                    (s.initialized = !1),
                    s.detachEvents(),
                    a.loop && s.loopDestroy(),
                    t &&
                    (s.removeClasses(),
                        i.removeAttr("style"),
                        r.removeAttr("style"),
                        n &&
                        n.length &&
                        n
                        .removeClass(
                            [a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(
                                " "
                            )
                        )
                        .removeAttr("style")
                        .removeAttr("data-swiper-slide-index")),
                    s.emit("destroy"),
                    Object.keys(s.eventsListeners).forEach((e) => {
                        s.off(e);
                    }), !1 !== e &&
                    ((s.$el[0].swiper = null),
                        (function(e) {
                            const t = e;
                            Object.keys(t).forEach((e) => {
                                try {
                                    t[e] = null;
                                } catch (e) {}
                                try {
                                    delete t[e];
                                } catch (e) {}
                            });
                        })(s)),
                    (s.destroyed = !0)),
                null
            );
        }
        static extendDefaults(e) {
            g(_, e);
        }
        static get extendedDefaults() {
            return _;
        }
        static get defaults() {
            return W;
        }
        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e) => V.installModule(e)), V) : (V.installModule(e), V);
        }
    }

    function F(e, t, s, i) {
        const r = a();
        return (
            e.params.createElements &&
            Object.keys(i).forEach((a) => {
                if (!s[a] && !0 === s.auto) {
                    let n = e.$el.children(`.${i[a]}`)[0];
                    n || ((n = r.createElement("div")), (n.className = i[a]), e.$el.append(n)),
                        (s[a] = n),
                        (t[a] = n);
                }
            }),
            s
        );
    }

    function U(e) {
        return (
            void 0 === e && (e = ""),
            `.${e
                .trim()
                .replace(/([\.:!\/])/g, "\\$1")
                .replace(/ /g, ".")}`
        );
    }

    function K(e) {
        const t = this,
            {
                $wrapperEl: s,
                params: a
            } = t;
        if ((a.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
            for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
        else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update();
    }

    function Z(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = i + e.length;
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
    }

    function Q(e, t) {
        const s = this,
            {
                $wrapperEl: a,
                params: i,
                activeIndex: r
            } = s;
        let n = r;
        i.loop && ((n -= s.loopedSlides), s.loopDestroy(), (s.slides = a.children(`.${i.slideClass}`)));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), d.unshift(e);
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n;
        } else a.append(t);
        for (let e = 0; e < d.length; e += 1) a.append(d[e]);
        i.loop && s.loopCreate(),
            i.observer || s.update(),
            i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }

    function J(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        let r = i;
        s.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = a.children(`.${s.slideClass}`)));
        let n,
            l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1)(n = e[s]), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0);
        } else(n = e), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), (l = Math.max(l, 0));
        s.loop && t.loopCreate(),
            s.observer || t.update(),
            s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
    }

    function ee() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t);
    }

    function te(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d,
        } = e;
        let c;
        a("beforeInit", () => {
                if (s.params.effect !== t) return;
                s.classNames.push(`${s.params.containerModifierClass}${t}`),
                    l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                const e = n ? n() : {};
                Object.assign(s.params, e), Object.assign(s.originalParams, e);
            }),
            a("setTranslate", () => {
                s.params.effect === t && i();
            }),
            a("setTransition", (e, a) => {
                s.params.effect === t && r(a);
            }),
            a("transitionEnd", () => {
                if (s.params.effect === t && o) {
                    if (!d || !d().slideShadows) return;
                    s.slides.each((e) => {
                            s.$(e)
                                .find(
                                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                )
                                .remove();
                        }),
                        o();
                }
            }),
            a("virtualUpdate", () => {
                s.params.effect === t &&
                    (s.slides.length || (c = !0),
                        requestAnimationFrame(() => {
                            c && s.slides && s.slides.length && (i(), (c = !1));
                        }));
            });
    }

    function se(e, t) {
        return e.transformEl ?
            t.find(e.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden"
            }) :
            t;
    }

    function ae(e) {
        let {
            swiper: t,
            duration: s,
            transformEl: a,
            allSlides: i
        } = e;
        const {
            slides: r,
            activeIndex: n,
            $wrapperEl: l
        } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e,
                s = !1;
            (e = i ? (a ? r.find(a) : r) : a ? r.eq(n).find(a) : r.eq(n)),
            e.transitionEnd(() => {
                if (s) return;
                if (!t || t.destroyed) return;
                (s = !0), (t.animating = !1);
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
            });
        }
    }

    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
            i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || ((r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`)), i.append(r)), r;
    }
    Object.keys(j).forEach((e) => {
            Object.keys(j[e]).forEach((t) => {
                V.prototype[t] = j[e][t];
            });
        }),
        V.use([
            function(e) {
                let {
                    swiper: t,
                    on: s,
                    emit: a
                } = e;
                const i = r();
                let n = null,
                    l = null;
                const o = () => {
                        t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && a("orientationchange");
                    };
                s("init", () => {
                        t.params.resizeObserver && void 0 !== i.ResizeObserver ?
                            t &&
                            !t.destroyed &&
                            t.initialized &&
                            ((n = new ResizeObserver((e) => {
                                    l = i.requestAnimationFrame(() => {
                                        const {
                                            width: s,
                                            height: a
                                        } = t;
                                        let i = s,
                                            r = a;
                                        e.forEach((e) => {
                                                let {
                                                    contentBoxSize: s,
                                                    contentRect: a,
                                                    target: n
                                                } = e;
                                                (n && n !== t.el) ||
                                                ((i = a ? a.width : (s[0] || s).inlineSize),
                                                    (r = a ? a.height : (s[0] || s).blockSize));
                                            }),
                                            (i === s && r === a) || o();
                                    });
                                })),
                                n.observe(t.el)) :
                            (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
                    }),
                    s("destroy", () => {
                        l && i.cancelAnimationFrame(l),
                            n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                            i.removeEventListener("resize", o),
                            i.removeEventListener("orientationchange", d);
                    });
            },
            function(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e;
                const n = [],
                    l = r(),
                    o = function(e, t) {
                        void 0 === t && (t = {});
                        const s = new(l.MutationObserver || l.WebkitMutationObserver)((e) => {
                            if (1 === e.length) return void i("observerUpdate", e[0]);
                            const t = function() {
                                i("observerUpdate", e[0]);
                            };
                            l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
                        });
                        s.observe(e, {
                                attributes: void 0 === t.attributes || t.attributes,
                                childList: void 0 === t.childList || t.childList,
                                characterData: void 0 === t.characterData || t.characterData,
                            }),
                            n.push(s);
                    };
                s({
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1
                    }),
                    a("init", () => {
                        if (t.params.observer) {
                            if (t.params.observeParents) {
                                const e = t.$el.parents();
                                for (let t = 0; t < e.length; t += 1) o(e[t]);
                            }
                            o(t.$el[0], {
                                    childList: t.params.observeSlideChildren
                                }),
                                o(t.$wrapperEl[0], {
                                    attributes: !1
                                });
                        }
                    }),
                    a("destroy", () => {
                        n.forEach((e) => {
                                e.disconnect();
                            }),
                            n.splice(0, n.length);
                    });
            },
        ]);
    const re = [
        function(e) {
            let t, {
                swiper: s,
                extendParams: a,
                on: i,
                emit: r
            } = e;

            function n(e, t) {
                const a = s.params.virtual;
                if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
                const i = a.renderSlide ?
                    d(a.renderSlide.call(s, e, t)) :
                    d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                return (
                    i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t),
                    a.cache && (s.virtual.cache[t] = i),
                    i
                );
            }

            function l(e) {
                const {
                    slidesPerView: t,
                    slidesPerGroup: a,
                    centeredSlides: i
                } = s.params, {
                    addSlidesBefore: l,
                    addSlidesAfter: o
                } = s.params.virtual, {
                    from: d,
                    to: c,
                    slides: p,
                    slidesGrid: u,
                    offset: h
                } = s.virtual;
                s.params.cssMode || s.updateActiveIndex();
                const m = s.activeIndex || 0;
                let f, g, v;
                (f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
                i
                    ?
                    ((g = Math.floor(t / 2) + a + o), (v = Math.floor(t / 2) + a + l)) :
                    ((g = t + (a - 1) + o), (v = a + l));
                const w = Math.max((m || 0) - v, 0),
                    b = Math.min((m || 0) + g, p.length - 1),
                    x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

                function y() {
                    s.updateSlides(),
                        s.updateProgress(),
                        s.updateSlidesClasses(),
                        s.lazy && s.params.lazy.enabled && s.lazy.load(),
                        r("virtualUpdate");
                }
                if (
                    (Object.assign(s.virtual, {
                            from: w,
                            to: b,
                            offset: x,
                            slidesGrid: s.slidesGrid
                        }),
                        d === w && c === b && !e)
                )
                    return (
                        s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`),
                        s.updateProgress(),
                        void r("virtualUpdate")
                    );
                if (s.params.virtual.renderExternal)
                    return (
                        s.params.virtual.renderExternal.call(s, {
                            offset: x,
                            from: w,
                            to: b,
                            slides: (function() {
                                const e = [];
                                for (let t = w; t <= b; t += 1) e.push(p[t]);
                                return e;
                            })(),
                        }),
                        void(s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"))
                    );
                const E = [],
                    C = [];
                if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
                else
                    for (let e = d; e <= c; e += 1)
                        (e < w || e > b) &&
                        s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
                for (let t = 0; t < p.length; t += 1)
                    t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));
                C.forEach((e) => {
                        s.$wrapperEl.append(n(p[e], e));
                    }),
                    E.sort((e, t) => t - e).forEach((e) => {
                        s.$wrapperEl.prepend(n(p[e], e));
                    }),
                    s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`),
                    y();
            }
            a({
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        renderExternalUpdate: !0,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0,
                    },
                }),
                (s.virtual = {
                    cache: {},
                    from: void 0,
                    to: void 0,
                    slides: [],
                    offset: 0,
                    slidesGrid: []
                }),
                i("beforeInit", () => {
                    s.params.virtual.enabled &&
                        ((s.virtual.slides = s.params.virtual.slides),
                            s.classNames.push(`${s.params.containerModifierClass}virtual`),
                            (s.params.watchSlidesProgress = !0),
                            (s.originalParams.watchSlidesProgress = !0),
                            s.params.initialSlide || l());
                }),
                i("setTranslate", () => {
                    s.params.virtual.enabled &&
                        (s.params.cssMode && !s._immediateVirtual ?
                            (clearTimeout(t),
                                (t = setTimeout(() => {
                                    l();
                                }, 100))) :
                            l());
                }),
                i("init update resize", () => {
                    s.params.virtual.enabled &&
                        s.params.cssMode &&
                        v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
                }),
                Object.assign(s.virtual, {
                    appendSlide: function(e) {
                        if ("object" == typeof e && "length" in e)
                            for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                        else s.virtual.slides.push(e);
                        l(!0);
                    },
                    prependSlide: function(e) {
                        const t = s.activeIndex;
                        let a = t + 1,
                            i = 1;
                        if (Array.isArray(e)) {
                            for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                            (a = t + e.length), (i = e.length);
                        } else s.virtual.slides.unshift(e);
                        if (s.params.virtual.cache) {
                            const e = s.virtual.cache,
                                t = {};
                            Object.keys(e).forEach((s) => {
                                    const a = e[s],
                                        r = a.attr("data-swiper-slide-index");
                                    r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                                        (t[parseInt(s, 10) + i] = a);
                                }),
                                (s.virtual.cache = t);
                        }
                        l(!0), s.slideTo(a, 0);
                    },
                    removeSlide: function(e) {
                        if (null == e) return;
                        let t = s.activeIndex;
                        if (Array.isArray(e))
                            for (let a = e.length - 1; a >= 0; a -= 1)
                                s.virtual.slides.splice(e[a], 1),
                                s.params.virtual.cache && delete s.virtual.cache[e[a]],
                                e[a] < t && (t -= 1),
                                (t = Math.max(t, 0));
                        else
                            s.virtual.slides.splice(e, 1),
                            s.params.virtual.cache && delete s.virtual.cache[e],
                            e < t && (t -= 1),
                            (t = Math.max(t, 0));
                        l(!0), s.slideTo(t, 0);
                    },
                    removeAllSlides: function() {
                        (s.virtual.slides = []),
                        s.params.virtual.cache && (s.virtual.cache = {}),
                            l(!0),
                            s.slideTo(0, 0);
                    },
                    update: l,
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i,
                emit: n
            } = e;
            const l = a(),
                o = r();

            function c(e) {
                if (!t.enabled) return;
                const {
                    rtlTranslate: s
                } = t;
                let a = e;
                a.originalEvent && (a = a.originalEvent);
                const i = a.keyCode || a.charCode,
                    r = t.params.keyboard.pageUpDown,
                    d = r && 33 === i,
                    c = r && 34 === i,
                    p = 37 === i,
                    u = 39 === i,
                    h = 38 === i,
                    m = 40 === i;
                if (!t.allowSlideNext && ((t.isHorizontal() && u) || (t.isVertical() && m) || c)) return !1;
                if (!t.allowSlidePrev && ((t.isHorizontal() && p) || (t.isVertical() && h) || d)) return !1;
                if (!(
                        a.shiftKey ||
                        a.altKey ||
                        a.ctrlKey ||
                        a.metaKey ||
                        (l.activeElement &&
                            l.activeElement.nodeName &&
                            ("input" === l.activeElement.nodeName.toLowerCase() ||
                                "textarea" === l.activeElement.nodeName.toLowerCase()))
                    )) {
                    if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                        let e = !1;
                        if (
                            t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
                            0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
                        )
                            return;
                        const a = t.$el,
                            i = a[0].clientWidth,
                            r = a[0].clientHeight,
                            n = o.innerWidth,
                            l = o.innerHeight,
                            d = t.$el.offset();
                        s && (d.left -= t.$el[0].scrollLeft);
                        const c = [
                            [d.left, d.top],
                            [d.left + i, d.top],
                            [d.left, d.top + r],
                            [d.left + i, d.top + r],
                        ];
                        for (let t = 0; t < c.length; t += 1) {
                            const s = c[t];
                            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                                if (0 === s[0] && 0 === s[1]) continue;
                                e = !0;
                            }
                        }
                        if (!e) return;
                    }
                    t.isHorizontal() ?
                        ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                            (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
                            (((d || p) && !s) || ((c || u) && s)) && t.slidePrev()) :
                        ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                            (c || m) && t.slideNext(),
                            (d || h) && t.slidePrev()),
                        n("keyPress", i);
                }
            }

            function p() {
                t.keyboard.enabled || (d(l).on("keydown", c), (t.keyboard.enabled = !0));
            }

            function u() {
                t.keyboard.enabled && (d(l).off("keydown", c), (t.keyboard.enabled = !1));
            }
            (t.keyboard = {
                enabled: !1
            }),
            s({
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                }),
                i("init", () => {
                    t.params.keyboard.enabled && p();
                }),
                i("destroy", () => {
                    t.keyboard.enabled && u();
                }),
                Object.assign(t.keyboard, {
                    enable: p,
                    disable: u
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a,
                emit: i
            } = e;
            const n = r();
            let l;
            s({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null,
                    },
                }),
                (t.mousewheel = {
                    enabled: !1
                });
            let o,
                c = u();
            const h = [];

            function m() {
                t.enabled && (t.mouseEntered = !0);
            }

            function f() {
                t.enabled && (t.mouseEntered = !1);
            }

            function g(e) {
                return (!(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) &&
                    !(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) &&
                    ((e.delta >= 6 && u() - c < 60) ||
                        (e.direction < 0 ?
                            (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), i("scroll", e.raw)) :
                            (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), i("scroll", e.raw)),
                            (c = new n.Date().getTime()), !1))
                );
            }

            function v(e) {
                let s = e,
                    a = !0;
                if (!t.enabled) return;
                const r = t.params.mousewheel;
                t.params.cssMode && s.preventDefault();
                let n = t.$el;
                if (
                    ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)
                )
                    return !0;
                s.originalEvent && (s = s.originalEvent);
                let c = 0;
                const m = t.rtlTranslate ? -1 : 1,
                    f = (function(e) {
                        let t = 0,
                            s = 0,
                            a = 0,
                            i = 0;
                        return (
                            "detail" in e && (s = e.detail),
                            "wheelDelta" in e && (s = -e.wheelDelta / 120),
                            "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
                            "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
                            (a = 10 * t),
                            (i = 10 * s),
                            "deltaY" in e && (i = e.deltaY),
                            "deltaX" in e && (a = e.deltaX),
                            e.shiftKey && !a && ((a = i), (i = 0)),
                            (a || i) &&
                            e.deltaMode &&
                            (1 === e.deltaMode ? ((a *= 40), (i *= 40)) : ((a *= 800), (i *= 800))),
                            a && !t && (t = a < 1 ? -1 : 1),
                            i && !s && (s = i < 1 ? -1 : 1), {
                                spinX: t,
                                spinY: s,
                                pixelX: a,
                                pixelY: i
                            }
                        );
                    })(s);
                if (r.forceToAxis)
                    if (t.isHorizontal()) {
                        if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                        c = -f.pixelX * m;
                    } else {
                        if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                        c = -f.pixelY;
                    }
                else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
                if (0 === c) return !0;
                r.invert && (c = -c);
                let v = t.getTranslate() + c * r.sensitivity;
                if (
                    (v >= t.minTranslate() && (v = t.minTranslate()),
                        v <= t.maxTranslate() && (v = t.maxTranslate()),
                        (a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate())),
                        a && t.params.nested && s.stopPropagation(),
                        t.params.freeMode && t.params.freeMode.enabled)
                ) {
                    const e = {
                            time: u(),
                            delta: Math.abs(c),
                            direction: Math.sign(c)
                        },
                        a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                    if (!a) {
                        (o = void 0), t.params.loop && t.loopFix();
                        let n = t.getTranslate() + c * r.sensitivity;
                        const d = t.isBeginning,
                            u = t.isEnd;
                        if (
                            (n >= t.minTranslate() && (n = t.minTranslate()),
                                n <= t.maxTranslate() && (n = t.maxTranslate()),
                                t.setTransition(0),
                                t.setTranslate(n),
                                t.updateProgress(),
                                t.updateActiveIndex(),
                                t.updateSlidesClasses(),
                                ((!d && t.isBeginning) || (!u && t.isEnd)) && t.updateSlidesClasses(),
                                t.params.freeMode.sticky)
                        ) {
                            clearTimeout(l), (l = void 0), h.length >= 15 && h.shift();
                            const s = h.length ? h[h.length - 1] : void 0,
                                a = h[0];
                            if ((h.push(e), s && (e.delta > s.delta || e.direction !== s.direction))) h.splice(0);
                            else if (
                                h.length >= 15 &&
                                e.time - a.time < 500 &&
                                a.delta - e.delta >= 1 &&
                                e.delta <= 6
                            ) {
                                const s = c > 0 ? 0.8 : 0.2;
                                (o = e),
                                h.splice(0),
                                    (l = p(() => {
                                        t.slideToClosest(t.params.speed, !0, void 0, s);
                                    }, 0));
                            }
                            l ||
                                (l = p(() => {
                                    (o = e), h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                                }, 500));
                        }
                        if (
                            (a || i("scroll", s),
                                t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                                n === t.minTranslate() || n === t.maxTranslate())
                        )
                            return !0;
                    }
                } else {
                    const s = {
                        time: u(),
                        delta: Math.abs(c),
                        direction: Math.sign(c),
                        raw: e
                    };
                    h.length >= 2 && h.shift();
                    const a = h.length ? h[h.length - 1] : void 0;
                    if (
                        (h.push(s),
                            a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s),
                            (function(e) {
                                const s = t.params.mousewheel;
                                if (e.direction < 0) {
                                    if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
                                } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                                return !1;
                            })(s))
                    )
                        return !0;
                }
                return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
            }

            function w(e) {
                let s = t.$el;
                "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)),
                    s[e]("mouseenter", m),
                    s[e]("mouseleave", f),
                    s[e]("wheel", v);
            }

            function b() {
                return t.params.cssMode ?
                    (t.wrapperEl.removeEventListener("wheel", v), !0) :
                    !t.mousewheel.enabled && (w("on"), (t.mousewheel.enabled = !0), !0);
            }

            function x() {
                return t.params.cssMode ?
                    (t.wrapperEl.addEventListener(event, v), !0) :
                    !!t.mousewheel.enabled && (w("off"), (t.mousewheel.enabled = !1), !0);
            }
            a("init", () => {
                    !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b();
                }),
                a("destroy", () => {
                    t.params.cssMode && b(), t.mousewheel.enabled && x();
                }),
                Object.assign(t.mousewheel, {
                    enable: b,
                    disable: x
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a,
                emit: i
            } = e;

            function r(e) {
                let s;
                return (
                    e &&
                    ((s = d(e)),
                        t.params.uniqueNavElements &&
                        "string" == typeof e &&
                        s.length > 1 &&
                        1 === t.$el.find(e).length &&
                        (s = t.$el.find(e))),
                    s
                );
            }

            function n(e, s) {
                const a = t.params.navigation;
                e &&
                    e.length > 0 &&
                    (e[s ? "addClass" : "removeClass"](a.disabledClass),
                        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
                        t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
            }

            function l() {
                if (t.params.loop) return;
                const {
                    $nextEl: e,
                    $prevEl: s
                } = t.navigation;
                n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
            }

            function o(e) {
                e.preventDefault(),
                    (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
            }

            function c(e) {
                e.preventDefault(),
                    (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
            }

            function p() {
                const e = t.params.navigation;
                if (
                    ((t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev",
                    })), !e.nextEl && !e.prevEl)
                )
                    return;
                const s = r(e.nextEl),
                    a = r(e.prevEl);
                s && s.length > 0 && s.on("click", c),
                    a && a.length > 0 && a.on("click", o),
                    Object.assign(t.navigation, {
                        $nextEl: s,
                        nextEl: s && s[0],
                        $prevEl: a,
                        prevEl: a && a[0]
                    }),
                    t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
            }

            function u() {
                const {
                    $nextEl: e,
                    $prevEl: s
                } = t.navigation;
                e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
                    s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
            }
            s({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled",
                    },
                }),
                (t.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }),
                a("init", () => {
                    !1 === t.params.navigation.enabled ? h() : (p(), l());
                }),
                a("toEdge fromEdge lock unlock", () => {
                    l();
                }),
                a("destroy", () => {
                    u();
                }),
                a("enable disable", () => {
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass),
                        s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
                }),
                a("click", (e, s) => {
                    const {
                        $nextEl: a,
                        $prevEl: r
                    } = t.navigation,
                        n = s.target;
                    if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                        if (
                            t.pagination &&
                            t.params.pagination &&
                            t.params.pagination.clickable &&
                            (t.pagination.el === n || t.pagination.el.contains(n))
                        )
                            return;
                        let e;
                        a
                            ?
                            (e = a.hasClass(t.params.navigation.hiddenClass)) :
                            r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                            i(!0 === e ? "navigationShow" : "navigationHide"),
                            a && a.toggleClass(t.params.navigation.hiddenClass),
                            r && r.toggleClass(t.params.navigation.hiddenClass);
                    }
                });
            const h = () => {
                t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l();
                },
                disable: h,
                update: l,
                init: p,
                destroy: u,
            });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a,
                emit: i
            } = e;
            const r = "swiper-pagination";
            let n;
            s({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (e) => e,
                        formatFractionTotal: (e) => e,
                        bulletClass: `${r}-bullet`,
                        bulletActiveClass: `${r}-bullet-active`,
                        modifierClass: `${r}-`,
                        currentClass: `${r}-current`,
                        totalClass: `${r}-total`,
                        hiddenClass: `${r}-hidden`,
                        progressbarFillClass: `${r}-progressbar-fill`,
                        progressbarOppositeClass: `${r}-progressbar-opposite`,
                        clickableClass: `${r}-clickable`,
                        lockClass: `${r}-lock`,
                        horizontalClass: `${r}-horizontal`,
                        verticalClass: `${r}-vertical`,
                        paginationDisabledClass: `${r}-disabled`,
                    },
                }),
                (t.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                });
            let l = 0;

            function o() {
                return (!t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length);
            }

            function c(e, s) {
                const {
                    bulletActiveClass: a
                } = t.params.pagination;
                e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
            }

            function p() {
                const e = t.rtl,
                    s = t.params.pagination;
                if (o()) return;
                const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    r = t.pagination.$el;
                let p;
                const u = t.params.loop ?
                    Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) :
                    t.snapGrid.length;
                if (
                    (t.params.loop ?
                        ((p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)),
                            p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
                            p > u - 1 && (p -= u),
                            p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) :
                        (p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
                        "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0)
                ) {
                    const a = t.pagination.bullets;
                    let i, o, u;
                    if (
                        (s.dynamicBullets &&
                            ((n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"),
                                s.dynamicMainBullets > 1 &&
                                void 0 !== t.previousIndex &&
                                ((l += p - (t.previousIndex - t.loopedSlides || 0)),
                                    l > s.dynamicMainBullets - 1 ? (l = s.dynamicMainBullets - 1) : l < 0 && (l = 0)),
                                (i = Math.max(p - l, 0)),
                                (o = i + (Math.min(a.length, s.dynamicMainBullets) - 1)),
                                (u = (o + i) / 2)),
                            a.removeClass(
                                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                                .map((e) => `${s.bulletActiveClass}${e}`)
                                .join(" ")
                            ),
                            r.length > 1)
                    )
                        a.each((e) => {
                            const t = d(e),
                                a = t.index();
                            a === p && t.addClass(s.bulletActiveClass),
                                s.dynamicBullets &&
                                (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`),
                                    a === i && c(t, "prev"),
                                    a === o && c(t, "next"));
                        });
                    else {
                        const e = a.eq(p),
                            r = e.index();
                        if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                            const e = a.eq(i),
                                n = a.eq(o);
                            for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                            if (t.params.loop)
                                if (r >= a.length) {
                                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                                        a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                    a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                                } else c(e, "prev"), c(n, "next");
                            else c(e, "prev"), c(n, "next");
                        }
                    }
                    if (s.dynamicBullets) {
                        const i = Math.min(a.length, s.dynamicMainBullets + 4),
                            r = (n * i - n) / 2 - u * n,
                            l = e ? "right" : "left";
                        a.css(t.isHorizontal() ? l : "top", `${r}px`);
                    }
                }
                if (
                    ("fraction" === s.type &&
                        (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
                            r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
                        "progressbar" === s.type)
                ) {
                    let e;
                    e = s.progressbarOpposite ?
                        t.isHorizontal() ?
                        "vertical" :
                        "horizontal" :
                        t.isHorizontal() ?
                        "horizontal" :
                        "vertical";
                    const a = (p + 1) / u;
                    let i = 1,
                        n = 1;
                    "horizontal" === e ? (i = a) : (n = a),
                        r
                        .find(U(s.progressbarFillClass))
                        .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`)
                        .transition(t.params.speed);
                }
                "custom" === s.type && s.renderCustom ?
                    (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) :
                    i("paginationUpdate", r[0]),
                    t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
            }

            function u() {
                const e = t.params.pagination;
                if (o()) return;
                const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    a = t.pagination.$el;
                let r = "";
                if ("bullets" === e.type) {
                    let i = t.params.loop ?
                        Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) :
                        t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                    for (let s = 0; s < i; s += 1)
                        e.renderBullet ?
                        (r += e.renderBullet.call(t, s, e.bulletClass)) :
                        (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
                    a.html(r), (t.pagination.bullets = a.find(U(e.bulletClass)));
                }
                "fraction" === e.type &&
                    ((r = e.renderFraction ?
                            e.renderFraction.call(t, e.currentClass, e.totalClass) :
                            `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
                        a.html(r)),
                    "progressbar" === e.type &&
                    ((r = e.renderProgressbar ?
                            e.renderProgressbar.call(t, e.progressbarFillClass) :
                            `<span class="${e.progressbarFillClass}"></span>`),
                        a.html(r)),
                    "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
            }

            function h() {
                t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
                    el: "swiper-pagination",
                });
                const e = t.params.pagination;
                if (!e.el) return;
                let s = d(e.el);
                0 !== s.length &&
                    (t.params.uniqueNavElements &&
                        "string" == typeof e.el &&
                        s.length > 1 &&
                        ((s = t.$el.find(e.el)),
                            s.length > 1 && (s = s.filter((e) => d(e).parents(".swiper")[0] === t.el))),
                        "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
                        s.addClass(e.modifierClass + e.type),
                        s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                        "bullets" === e.type &&
                        e.dynamicBullets &&
                        (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
                            (l = 0),
                            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                        "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass),
                        e.clickable &&
                        s.on("click", U(e.bulletClass), function(e) {
                            e.preventDefault();
                            let s = d(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (s += t.loopedSlides), t.slideTo(s);
                        }),
                        Object.assign(t.pagination, {
                            $el: s,
                            el: s[0]
                        }),
                        t.enabled || s.addClass(e.lockClass));
            }

            function m() {
                const e = t.params.pagination;
                if (o()) return;
                const s = t.pagination.$el;
                s.removeClass(e.hiddenClass),
                    s.removeClass(e.modifierClass + e.type),
                    s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    t.pagination.bullets &&
                    t.pagination.bullets.removeClass &&
                    t.pagination.bullets.removeClass(e.bulletActiveClass),
                    e.clickable && s.off("click", U(e.bulletClass));
            }
            a("init", () => {
                    !1 === t.params.pagination.enabled ? f() : (h(), u(), p());
                }),
                a("activeIndexChange", () => {
                    (t.params.loop || void 0 === t.snapIndex) && p();
                }),
                a("snapIndexChange", () => {
                    t.params.loop || p();
                }),
                a("slidesLengthChange", () => {
                    t.params.loop && (u(), p());
                }),
                a("snapGridLengthChange", () => {
                    t.params.loop || (u(), p());
                }),
                a("destroy", () => {
                    m();
                }),
                a("enable disable", () => {
                    const {
                        $el: e
                    } = t.pagination;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
                }),
                a("lock unlock", () => {
                    p();
                }),
                a("click", (e, s) => {
                    const a = s.target,
                        {
                            $el: r
                        } = t.pagination;
                    if (
                        t.params.pagination.el &&
                        t.params.pagination.hideOnClick &&
                        r &&
                        r.length > 0 &&
                        !d(a).hasClass(t.params.pagination.bulletClass)
                    ) {
                        if (
                            t.navigation &&
                            ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                                (t.navigation.prevEl && a === t.navigation.prevEl))
                        )
                            return;
                        const e = r.hasClass(t.params.pagination.hiddenClass);
                        i(!0 === e ? "paginationShow" : "paginationHide"),
                            r.toggleClass(t.params.pagination.hiddenClass);
                    }
                });
            const f = () => {
                t.$el.addClass(t.params.pagination.paginationDisabledClass),
                    t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),
                    m();
            };
            Object.assign(t.pagination, {
                enable: () => {
                    t.$el.removeClass(t.params.pagination.paginationDisabledClass),
                        t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),
                        h(),
                        u(),
                        p();
                },
                disable: f,
                render: u,
                update: p,
                init: h,
                destroy: m,
            });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i,
                emit: r
            } = e;
            const n = a();
            let l,
                o,
                c,
                u,
                h = !1,
                m = null,
                f = null;

            function g() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {
                    scrollbar: e,
                    rtlTranslate: s,
                    progress: a
                } = t, {
                    $dragEl: i,
                    $el: r
                } = e,
                n = t.params.scrollbar;
                let l = o,
                    d = (c - o) * a;
                s
                    ?
                    ((d = -d), d > 0 ? ((l = o - d), (d = 0)) : -d + o > c && (l = c + d)) :
                    d < 0 ?
                    ((l = o + d), (d = 0)) :
                    d + o > c && (l = c - d),
                    t.isHorizontal() ?
                    (i.transform(`translate3d(${d}px, 0, 0)`), (i[0].style.width = `${l}px`)) :
                    (i.transform(`translate3d(0px, ${d}px, 0)`), (i[0].style.height = `${l}px`)),
                    n.hide &&
                    (clearTimeout(m),
                        (r[0].style.opacity = 1),
                        (m = setTimeout(() => {
                            (r[0].style.opacity = 0), r.transition(400);
                        }, 1e3)));
            }

            function v() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {
                    scrollbar: e
                } = t, {
                    $dragEl: s,
                    $el: a
                } = e;
                (s[0].style.width = ""),
                (s[0].style.height = ""),
                (c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
                (u =
                    t.size /
                    (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0))),
                (o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10)),
                t.isHorizontal() ? (s[0].style.width = `${o}px`) : (s[0].style.height = `${o}px`),
                    (a[0].style.display = u >= 1 ? "none" : ""),
                    t.params.scrollbar.hide && (a[0].style.opacity = 0),
                    t.params.watchOverflow &&
                    t.enabled &&
                    e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
            }

            function w(e) {
                return t.isHorizontal() ?
                    "touchstart" === e.type || "touchmove" === e.type ?
                    e.targetTouches[0].clientX :
                    e.clientX :
                    "touchstart" === e.type || "touchmove" === e.type ?
                    e.targetTouches[0].clientY :
                    e.clientY;
            }

            function b(e) {
                const {
                    scrollbar: s,
                    rtlTranslate: a
                } = t, {
                    $el: i
                } = s;
                let r;
                (r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o)),
                (r = Math.max(Math.min(r, 1), 0)),
                a && (r = 1 - r);
                const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
                t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
            }

            function x(e) {
                const s = t.params.scrollbar,
                    {
                        scrollbar: a,
                        $wrapperEl: i
                    } = t,
                    {
                        $el: n,
                        $dragEl: o
                    } = a;
                (h = !0),
                (l =
                    e.target === o[0] || e.target === o ?
                    w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] :
                    null),
                e.preventDefault(),
                    e.stopPropagation(),
                    i.transition(100),
                    o.transition(100),
                    b(e),
                    clearTimeout(f),
                    n.transition(0),
                    s.hide && n.css("opacity", 1),
                    t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
                    r("scrollbarDragStart", e);
            }

            function y(e) {
                const {
                    scrollbar: s,
                    $wrapperEl: a
                } = t, {
                    $el: i,
                    $dragEl: n
                } = s;
                h &&
                    (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                        b(e),
                        a.transition(0),
                        i.transition(0),
                        n.transition(0),
                        r("scrollbarDragMove", e));
            }

            function E(e) {
                const s = t.params.scrollbar,
                    {
                        scrollbar: a,
                        $wrapperEl: i
                    } = t,
                    {
                        $el: n
                    } = a;
                h &&
                    ((h = !1),
                        t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
                        s.hide &&
                        (clearTimeout(f),
                            (f = p(() => {
                                n.css("opacity", 0), n.transition(400);
                            }, 1e3))),
                        r("scrollbarDragEnd", e),
                        s.snapOnRelease && t.slideToClosest());
            }

            function C(e) {
                const {
                    scrollbar: s,
                    touchEventsTouch: a,
                    touchEventsDesktop: i,
                    params: r,
                    support: l
                } = t,
                o = s.$el;
                if (!o) return;
                const d = o[0],
                    c = !(!l.passiveListener || !r.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    },
                    p = !(!l.passiveListener || !r.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                if (!d) return;
                const u = "on" === e ? "addEventListener" : "removeEventListener";
                l.touch ?
                    (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) :
                    (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p));
            }

            function T() {
                const {
                    scrollbar: e,
                    $el: s
                } = t;
                t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
                    el: "swiper-scrollbar"
                });
                const a = t.params.scrollbar;
                if (!a.el) return;
                let i = d(a.el);
                t.params.uniqueNavElements &&
                    "string" == typeof a.el &&
                    i.length > 1 &&
                    1 === s.find(a.el).length &&
                    (i = s.find(a.el)),
                    i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
                let r = i.find(`.${t.params.scrollbar.dragClass}`);
                0 === r.length && ((r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`)), i.append(r)),
                    Object.assign(e, {
                        $el: i,
                        el: i[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }),
                    a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"),
                    i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
            }

            function $() {
                const e = t.params.scrollbar,
                    s = t.scrollbar.$el;
                s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    t.params.scrollbar.el && t.scrollbar.el && C("off");
            }
            s({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical",
                    },
                }),
                (t.scrollbar = {
                    el: null,
                    dragEl: null,
                    $el: null,
                    $dragEl: null
                }),
                i("init", () => {
                    !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g());
                }),
                i("update resize observerUpdate lock unlock", () => {
                    v();
                }),
                i("setTranslate", () => {
                    g();
                }),
                i("setTransition", (e, s) => {
                    !(function(e) {
                        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
                    })(s);
                }),
                i("enable disable", () => {
                    const {
                        $el: e
                    } = t.scrollbar;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
                }),
                i("destroy", () => {
                    $();
                });
            const S = () => {
                t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
                    t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
                    $();
            };
            Object.assign(t.scrollbar, {
                enable: () => {
                    t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
                        t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
                        T(),
                        v(),
                        g();
                },
                disable: S,
                updateSize: v,
                setTranslate: g,
                init: T,
                destroy: $,
            });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                parallax: {
                    enabled: !1
                }
            });
            const i = (e, s) => {
                    const {
                        rtl: a
                    } = t,
                    i = d(e),
                        r = a ? -1 : 1,
                        n = i.attr("data-swiper-parallax") || "0";
                    let l = i.attr("data-swiper-parallax-x"),
                        o = i.attr("data-swiper-parallax-y");
                    const c = i.attr("data-swiper-parallax-scale"),
                        p = i.attr("data-swiper-parallax-opacity");
                    if (
                        (l || o ?
                            ((l = l || "0"), (o = o || "0")) :
                            t.isHorizontal() ?
                            ((l = n), (o = "0")) :
                            ((o = n), (l = "0")),
                            (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px"),
                            (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px"),
                            null != p)
                    ) {
                        const e = p - (p - 1) * (1 - Math.abs(s));
                        i[0].style.opacity = e;
                    }
                    if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
                    else {
                        const e = c - (c - 1) * (1 - Math.abs(s));
                        i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
                    }
                },
                r = () => {
                    const {
                        $el: e,
                        slides: s,
                        progress: a,
                        snapGrid: r
                    } = t;
                    e
                        .children(
                            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                        )
                        .each((e) => {
                            i(e, a);
                        }),
                        s.each((e, s) => {
                            let n = e.progress;
                            t.params.slidesPerGroup > 1 &&
                                "auto" !== t.params.slidesPerView &&
                                (n += Math.ceil(s / 2) - a * (r.length - 1)),
                                (n = Math.min(Math.max(n, -1), 1)),
                                d(e)
                                .find(
                                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                )
                                .each((e) => {
                                    i(e, n);
                                });
                        });
                };
            a("beforeInit", () => {
                    t.params.parallax.enabled &&
                        ((t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
                }),
                a("init", () => {
                    t.params.parallax.enabled && r();
                }),
                a("setTranslate", () => {
                    t.params.parallax.enabled && r();
                }),
                a("setTransition", (e, s) => {
                    t.params.parallax.enabled &&
                        (function(e) {
                            void 0 === e && (e = t.params.speed);
                            const {
                                $el: s
                            } = t;
                            s.find(
                                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                            ).each((t) => {
                                const s = d(t);
                                let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                                0 === e && (a = 0), s.transition(a);
                            });
                        })(s);
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a,
                emit: i
            } = e;
            const n = r();
            s({
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed",
                    },
                }),
                (t.zoom = {
                    enabled: !1
                });
            let l,
                o,
                c,
                p = 1,
                u = !1;
            const m = {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3,
                },
                f = {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {},
                },
                g = {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                };
            let v = 1;

            function w(e) {
                if (e.targetTouches.length < 2) return 1;
                const t = e.targetTouches[0].pageX,
                    s = e.targetTouches[0].pageY,
                    a = e.targetTouches[1].pageX,
                    i = e.targetTouches[1].pageY;
                return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
            }

            function b(e) {
                const s = t.support,
                    a = t.params.zoom;
                if (((o = !1), (c = !1), !s.gestures)) {
                    if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                    (o = !0), (m.scaleStart = w(e));
                }
                (m.$slideEl && m.$slideEl.length) ||
                ((m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
                    0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
                    (m.$imageEl = m.$slideEl
                        .find(`.${a.containerClass}`)
                        .eq(0)
                        .find("picture, img, svg, canvas, .swiper-zoom-target")
                        .eq(0)),
                    (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
                    (m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                    0 !== m.$imageWrapEl.length) ?
                (m.$imageEl && m.$imageEl.transition(0), (u = !0)) :
                (m.$imageEl = void 0);
            }

            function x(e) {
                const s = t.support,
                    a = t.params.zoom,
                    i = t.zoom;
                if (!s.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (c = !0), (m.scaleMove = w(e));
                }
                m.$imageEl && 0 !== m.$imageEl.length ?
                    (s.gestures ? (i.scale = e.scale * p) : (i.scale = (m.scaleMove / m.scaleStart) * p),
                        i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5),
                        i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
                        m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) :
                    "gesturechange" === e.type && b(e);
            }

            function y(e) {
                const s = t.device,
                    a = t.support,
                    i = t.params.zoom,
                    r = t.zoom;
                if (!a.gestures) {
                    if (!o || !c) return;
                    if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !s.android))
                        return;
                    (o = !1), (c = !1);
                }
                m.$imageEl &&
                    0 !== m.$imageEl.length &&
                    ((r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio)),
                        m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
                        (p = r.scale),
                        (u = !1),
                        1 === r.scale && (m.$slideEl = void 0));
            }

            function E(e) {
                const s = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (((t.allowClick = !1), !f.isTouched || !m.$slideEl)) return;
                f.isMoved ||
                    ((f.width = m.$imageEl[0].offsetWidth),
                        (f.height = m.$imageEl[0].offsetHeight),
                        (f.startX = h(m.$imageWrapEl[0], "x") || 0),
                        (f.startY = h(m.$imageWrapEl[0], "y") || 0),
                        (m.slideWidth = m.$slideEl[0].offsetWidth),
                        (m.slideHeight = m.$slideEl[0].offsetHeight),
                        m.$imageWrapEl.transition(0));
                const a = f.width * s.scale,
                    i = f.height * s.scale;
                if (!(a < m.slideWidth && i < m.slideHeight)) {
                    if (
                        ((f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
                            (f.maxX = -f.minX),
                            (f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
                            (f.maxY = -f.minY),
                            (f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY), !f.isMoved && !u)
                    ) {
                        if (
                            t.isHorizontal() &&
                            ((Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x) ||
                                (Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x))
                        )
                            return void(f.isTouched = !1);
                        if (!t.isHorizontal() &&
                            ((Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y) ||
                                (Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y))
                        )
                            return void(f.isTouched = !1);
                    }
                    e.cancelable && e.preventDefault(),
                        e.stopPropagation(),
                        (f.isMoved = !0),
                        (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
                        (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
                        f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
                        f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
                        f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
                        f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
                        g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
                        g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
                        g.prevTime || (g.prevTime = Date.now()),
                        (g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2),
                        (g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2),
                        Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
                        Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
                        (g.prevPositionX = f.touchesCurrent.x),
                        (g.prevPositionY = f.touchesCurrent.y),
                        (g.prevTime = Date.now()),
                        m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
                }
            }

            function C() {
                const e = t.zoom;
                m.$slideEl &&
                    t.previousIndex !== t.activeIndex &&
                    (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"),
                        (e.scale = 1),
                        (p = 1),
                        (m.$slideEl = void 0),
                        (m.$imageEl = void 0),
                        (m.$imageWrapEl = void 0));
            }

            function T(e) {
                const s = t.zoom,
                    a = t.params.zoom;
                if (
                    (m.$slideEl ||
                        (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
                            m.$slideEl ||
                            (t.params.virtual && t.params.virtual.enabled && t.virtual ?
                                (m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`)) :
                                (m.$slideEl = t.slides.eq(t.activeIndex))),
                            (m.$imageEl = m.$slideEl
                                .find(`.${a.containerClass}`)
                                .eq(0)
                                .find("picture, img, svg, canvas, .swiper-zoom-target")
                                .eq(0)),
                            (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`))), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length)
                )
                    return;
                let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
                t.params.cssMode && ((t.wrapperEl.style.overflow = "hidden"), (t.wrapperEl.style.touchAction = "none")),
                    m.$slideEl.addClass(`${a.zoomedSlideClass}`),
                    void 0 === f.touchesStart.x && e ?
                    ((i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
                        (r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY)) :
                    ((i = f.touchesStart.x), (r = f.touchesStart.y)),
                    (s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                    (p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                    e ?
                    (($ = m.$slideEl[0].offsetWidth),
                        (S = m.$slideEl[0].offsetHeight),
                        (l = m.$slideEl.offset().left + n.scrollX),
                        (o = m.$slideEl.offset().top + n.scrollY),
                        (c = l + $ / 2 - i),
                        (u = o + S / 2 - r),
                        (v = m.$imageEl[0].offsetWidth),
                        (w = m.$imageEl[0].offsetHeight),
                        (b = v * s.scale),
                        (x = w * s.scale),
                        (y = Math.min($ / 2 - b / 2, 0)),
                        (E = Math.min(S / 2 - x / 2, 0)),
                        (C = -y),
                        (T = -E),
                        (h = c * s.scale),
                        (g = u * s.scale),
                        h < y && (h = y),
                        h > C && (h = C),
                        g < E && (g = E),
                        g > T && (g = T)) :
                    ((h = 0), (g = 0)),
                    m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),
                    m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
            }

            function $() {
                const e = t.zoom,
                    s = t.params.zoom;
                m.$slideEl ||
                    (t.params.virtual && t.params.virtual.enabled && t.virtual ?
                        (m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`)) :
                        (m.$slideEl = t.slides.eq(t.activeIndex)),
                        (m.$imageEl = m.$slideEl
                            .find(`.${s.containerClass}`)
                            .eq(0)
                            .find("picture, img, svg, canvas, .swiper-zoom-target")
                            .eq(0)),
                        (m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`))),
                    m.$imageEl &&
                    0 !== m.$imageEl.length &&
                    m.$imageWrapEl &&
                    0 !== m.$imageWrapEl.length &&
                    (t.params.cssMode && ((t.wrapperEl.style.overflow = ""), (t.wrapperEl.style.touchAction = "")),
                        (e.scale = 1),
                        (p = 1),
                        m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
                        (m.$slideEl = void 0));
            }

            function S(e) {
                const s = t.zoom;
                s.scale && 1 !== s.scale ? $() : T(e);
            }

            function M() {
                const e = t.support;
                return {
                    passiveListener: !(
                        "touchstart" !== t.touchEvents.start ||
                        !e.passiveListener ||
                        !t.params.passiveListeners
                    ) && {
                        passive: !0,
                        capture: !1
                    },
                    activeListenerWithCapture: !e.passiveListener || {
                        passive: !1,
                        capture: !0
                    },
                };
            }

            function P() {
                return `.${t.params.slideClass}`;
            }

            function k(e) {
                const {
                    passiveListener: s
                } = M(),
                    a = P();
                t.$wrapperEl[e]("gesturestart", a, b, s),
                    t.$wrapperEl[e]("gesturechange", a, x, s),
                    t.$wrapperEl[e]("gestureend", a, y, s);
            }

            function z() {
                l || ((l = !0), k("on"));
            }

            function L() {
                l && ((l = !1), k("off"));
            }

            function O() {
                const e = t.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                const s = t.support,
                    {
                        passiveListener: a,
                        activeListenerWithCapture: i
                    } = M(),
                    r = P();
                s.gestures ?
                    (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) :
                    "touchstart" === t.touchEvents.start &&
                    (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
                        t.$wrapperEl.on(t.touchEvents.move, r, x, i),
                        t.$wrapperEl.on(t.touchEvents.end, r, y, a),
                        t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
                    t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i);
            }

            function I() {
                const e = t.zoom;
                if (!e.enabled) return;
                const s = t.support;
                e.enabled = !1;
                const {
                    passiveListener: a,
                    activeListenerWithCapture: i
                } = M(),
                    r = P();
                s.gestures ?
                    (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) :
                    "touchstart" === t.touchEvents.start &&
                    (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
                        t.$wrapperEl.off(t.touchEvents.move, r, x, i),
                        t.$wrapperEl.off(t.touchEvents.end, r, y, a),
                        t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
                    t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i);
            }
            Object.defineProperty(t.zoom, "scale", {
                    get: () => v,
                    set(e) {
                        if (v !== e) {
                            const t = m.$imageEl ? m.$imageEl[0] : void 0,
                                s = m.$slideEl ? m.$slideEl[0] : void 0;
                            i("zoomChange", e, t, s);
                        }
                        v = e;
                    },
                }),
                a("init", () => {
                    t.params.zoom.enabled && O();
                }),
                a("destroy", () => {
                    I();
                }),
                a("touchStart", (e, s) => {
                    t.zoom.enabled &&
                        (function(e) {
                            const s = t.device;
                            m.$imageEl &&
                                0 !== m.$imageEl.length &&
                                (f.isTouched ||
                                    (s.android && e.cancelable && e.preventDefault(),
                                        (f.isTouched = !0),
                                        (f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                        (f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
                        })(s);
                }),
                a("touchEnd", (e, s) => {
                    t.zoom.enabled &&
                        (function() {
                            const e = t.zoom;
                            if (!m.$imageEl || 0 === m.$imageEl.length) return;
                            if (!f.isTouched || !f.isMoved) return (f.isTouched = !1), void(f.isMoved = !1);
                            (f.isTouched = !1), (f.isMoved = !1);
                            let s = 300,
                                a = 300;
                            const i = g.x * s,
                                r = f.currentX + i,
                                n = g.y * a,
                                l = f.currentY + n;
                            0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
                                0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                            const o = Math.max(s, a);
                            (f.currentX = r), (f.currentY = l);
                            const d = f.width * e.scale,
                                c = f.height * e.scale;
                            (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                            (f.maxX = -f.minX),
                            (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                            (f.maxY = -f.minY),
                            (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                            (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                            m.$imageWrapEl
                                .transition(o)
                                .transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
                        })();
                }),
                a("doubleTap", (e, s) => {
                    !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s);
                }),
                a("transitionEnd", () => {
                    t.zoom.enabled && t.params.zoom.enabled && C();
                }),
                a("slideChange", () => {
                    t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
                }),
                Object.assign(t.zoom, {
                    enable: O,
                    disable: I,
                    in: T,
                    out: $,
                    toggle: S
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a,
                emit: i
            } = e;
            s({
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                }),
                (t.lazy = {});
            let n = !1,
                l = !1;

            function o(e, s) {
                void 0 === s && (s = !0);
                const a = t.params.lazy;
                if (void 0 === e) return;
                if (0 === t.slides.length) return;
                const r =
                    t.virtual && t.params.virtual.enabled ?
                    t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) :
                    t.slides.eq(e),
                    n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]),
                    0 !== n.length &&
                    n.each((e) => {
                        const n = d(e);
                        n.addClass(a.loadingClass);
                        const l = n.attr("data-background"),
                            c = n.attr("data-src"),
                            p = n.attr("data-srcset"),
                            u = n.attr("data-sizes"),
                            h = n.parent("picture");
                        t.loadImage(n[0], c || l, p, u, !1, () => {
                                if (null != t && t && (!t || t.params) && !t.destroyed) {
                                    if (
                                        (l ?
                                            (n.css("background-image", `url("${l}")`),
                                                n.removeAttr("data-background")) :
                                            (p && (n.attr("srcset", p), n.removeAttr("data-srcset")),
                                                u && (n.attr("sizes", u), n.removeAttr("data-sizes")),
                                                h.length &&
                                                h.children("source").each((e) => {
                                                    const t = d(e);
                                                    t.attr("data-srcset") &&
                                                        (t.attr("srcset", t.attr("data-srcset")),
                                                            t.removeAttr("data-srcset"));
                                                }),
                                                c && (n.attr("src", c), n.removeAttr("data-src"))),
                                            n.addClass(a.loadedClass).removeClass(a.loadingClass),
                                            r.find(`.${a.preloaderClass}`).remove(),
                                            t.params.loop && s)
                                    ) {
                                        const e = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(t.params.slideDuplicateClass)) {
                                            o(
                                                t.$wrapperEl
                                                .children(
                                                    `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                                                )
                                                .index(), !1
                                            );
                                        } else {
                                            o(
                                                t.$wrapperEl
                                                .children(
                                                    `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                                                )
                                                .index(), !1
                                            );
                                        }
                                    }
                                    i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight();
                                }
                            }),
                            i("lazyImageLoad", r[0], n[0]);
                    });
            }

            function c() {
                const {
                    $wrapperEl: e,
                    params: s,
                    slides: a,
                    activeIndex: i
                } = t,
                r = t.virtual && s.virtual.enabled,
                    n = s.lazy;
                let c = s.slidesPerView;

                function p(t) {
                    if (r) {
                        if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0;
                    } else if (a[t]) return !0;
                    return !1;
                }

                function u(e) {
                    return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
                }
                if (("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress))
                    e.children(`.${s.slideVisibleClass}`).each((e) => {
                        o(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
                    });
                else if (c > 1)
                    for (let e = i; e < i + c; e += 1) p(e) && o(e);
                else o(i);
                if (n.loadPrevNext)
                    if (c > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
                        const e = n.loadPrevNextAmount,
                            t = Math.ceil(c),
                            s = Math.min(i + t + Math.max(e, t), a.length),
                            r = Math.max(i - Math.max(t, e), 0);
                        for (let e = i + t; e < s; e += 1) p(e) && o(e);
                        for (let e = r; e < i; e += 1) p(e) && o(e);
                    } else {
                        const t = e.children(`.${s.slideNextClass}`);
                        t.length > 0 && o(u(t));
                        const a = e.children(`.${s.slidePrevClass}`);
                        a.length > 0 && o(u(a));
                    }
            }

            function p() {
                const e = r();
                if (!t || t.destroyed) return;
                const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
                    a = s[0] === e,
                    i = a ? e.innerWidth : s[0].offsetWidth,
                    l = a ? e.innerHeight : s[0].offsetHeight,
                    o = t.$el.offset(),
                    {
                        rtlTranslate: u
                    } = t;
                let h = !1;
                u && (o.left -= t.$el[0].scrollLeft);
                const m = [
                    [o.left, o.top],
                    [o.left + t.width, o.top],
                    [o.left, o.top + t.height],
                    [o.left + t.width, o.top + t.height],
                ];
                for (let e = 0; e < m.length; e += 1) {
                    const t = m[e];
                    if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                        if (0 === t[0] && 0 === t[1]) continue;
                        h = !0;
                    }
                }
                const f = !(
                    "touchstart" !== t.touchEvents.start ||
                    !t.support.passiveListener ||
                    !t.params.passiveListeners
                ) && {
                    passive: !0,
                    capture: !1
                };
                h ? (c(), s.off("scroll", p, f)) : n || ((n = !0), s.on("scroll", p, f));
            }
            a("beforeInit", () => {
                    t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
                }),
                a("init", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
                }),
                a("scroll", () => {
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
                }),
                a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
                }),
                a("transitionStart", () => {
                    t.params.lazy.enabled &&
                        (t.params.lazy.loadOnTransitionStart || (!t.params.lazy.loadOnTransitionStart && !l)) &&
                        (t.params.lazy.checkInView ? p() : c());
                }),
                a("transitionEnd", () => {
                    t.params.lazy.enabled &&
                        !t.params.lazy.loadOnTransitionStart &&
                        (t.params.lazy.checkInView ? p() : c());
                }),
                a("slideChange", () => {
                    const {
                        lazy: e,
                        cssMode: s,
                        watchSlidesProgress: a,
                        touchReleaseOnEdges: i,
                        resistanceRatio: r,
                    } = t.params;
                    e.enabled && (s || (a && (i || 0 === r))) && c();
                }),
                a("destroy", () => {
                    t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass);
                }),
                Object.assign(t.lazy, {
                    load: c,
                    loadInSlide: o
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;

            function i(e, t) {
                const s = (function() {
                    let e, t, s;
                    return (a, i) => {
                        for (t = -1, e = a.length; e - t > 1;)(s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
                        return e;
                    };
                })();
                let a, i;
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function(e) {
                        return e ?
                            ((i = s(this.x, e)),
                                (a = i - 1),
                                ((e - this.x[a]) * (this.y[i] - this.y[a])) / (this.x[i] - this.x[a]) + this.y[a]) :
                            0;
                    }),
                    this
                );
            }

            function r() {
                t.controller.control &&
                    t.controller.spline &&
                    ((t.controller.spline = void 0), delete t.controller.spline);
            }
            s({
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                }),
                (t.controller = {
                    control: void 0
                }),
                a("beforeInit", () => {
                    t.controller.control = t.params.controller.control;
                }),
                a("update", () => {
                    r();
                }),
                a("resize", () => {
                    r();
                }),
                a("observerUpdate", () => {
                    r();
                }),
                a("setTranslate", (e, s, a) => {
                    t.controller.control && t.controller.setTranslate(s, a);
                }),
                a("setTransition", (e, s, a) => {
                    t.controller.control && t.controller.setTransition(s, a);
                }),
                Object.assign(t.controller, {
                    setTranslate: function(e, s) {
                        const a = t.controller.control;
                        let r, n;
                        const l = t.constructor;

                        function o(e) {
                            const s = t.rtlTranslate ? -t.translate : t.translate;
                            "slide" === t.params.controller.by &&
                                (!(function(e) {
                                        t.controller.spline ||
                                            (t.controller.spline = t.params.loop ?
                                                new i(t.slidesGrid, e.slidesGrid) :
                                                new i(t.snapGrid, e.snapGrid));
                                    })(e),
                                    (n = -t.controller.spline.interpolate(-s))),
                                (n && "container" !== t.params.controller.by) ||
                                ((r =
                                        (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate())),
                                    (n = (s - t.minTranslate()) * r + e.minTranslate())),
                                t.params.controller.inverse && (n = e.maxTranslate() - n),
                                e.updateProgress(n),
                                e.setTranslate(n, t),
                                e.updateActiveIndex(),
                                e.updateSlidesClasses();
                        }
                        if (Array.isArray(a))
                            for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);
                        else a instanceof l && s !== a && o(a);
                    },
                    setTransition: function(e, s) {
                        const a = t.constructor,
                            i = t.controller.control;
                        let r;

                        function n(s) {
                            s.setTransition(e, t),
                                0 !== e &&
                                (s.transitionStart(),
                                    s.params.autoHeight &&
                                    p(() => {
                                        s.updateAutoHeight();
                                    }),
                                    s.$wrapperEl.transitionEnd(() => {
                                        i &&
                                            (s.params.loop && "slide" === t.params.controller.by && s.loopFix(),
                                                s.transitionEnd());
                                    }));
                        }
                        if (Array.isArray(i))
                            for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
                        else i instanceof a && s !== i && n(i);
                    },
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null,
                    },
                }),
                (t.a11y = {
                    clicked: !1
                });
            let i = null;

            function r(e) {
                const t = i;
                0 !== t.length && (t.html(""), t.html(e));
            }

            function n(e) {
                e.attr("tabIndex", "0");
            }

            function l(e) {
                e.attr("tabIndex", "-1");
            }

            function o(e, t) {
                e.attr("role", t);
            }

            function c(e, t) {
                e.attr("aria-roledescription", t);
            }

            function p(e, t) {
                e.attr("aria-label", t);
            }

            function u(e) {
                e.attr("aria-disabled", !0);
            }

            function h(e) {
                e.attr("aria-disabled", !1);
            }

            function m(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                const s = t.params.a11y,
                    a = d(e.target);
                t.navigation &&
                    t.navigation.$nextEl &&
                    a.is(t.navigation.$nextEl) &&
                    ((t.isEnd && !t.params.loop) || t.slideNext(),
                        t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
                    t.navigation &&
                    t.navigation.$prevEl &&
                    a.is(t.navigation.$prevEl) &&
                    ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                        t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
                    t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click();
            }

            function f() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
            }

            function g() {
                return f() && t.params.pagination.clickable;
            }
            const v = (e, t, s) => {
                    n(e),
                        "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)),
                        p(e, s),
                        (function(e, t) {
                            e.attr("aria-controls", t);
                        })(e, t);
                },
                w = () => {
                    t.a11y.clicked = !0;
                },
                b = () => {
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            t.destroyed || (t.a11y.clicked = !1);
                        });
                    });
                },
                x = (e) => {
                    if (t.a11y.clicked) return;
                    const s = e.target.closest(`.${t.params.slideClass}`);
                    if (!s || !t.slides.includes(s)) return;
                    const a = t.slides.indexOf(s) === t.activeIndex,
                        i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                    a ||
                        i ||
                        (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
                        (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
                            t.slideTo(t.slides.indexOf(s), 0));
                },
                y = () => {
                    const e = t.params.a11y;
                    e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage),
                        e.slideRole && o(d(t.slides), e.slideRole);
                    const s = t.params.loop ?
                        t.slides.filter((e) => !e.classList.contains(t.params.slideDuplicateClass)).length :
                        t.slides.length;
                    e.slideLabelMessage &&
                        t.slides.each((a, i) => {
                            const r = d(a),
                                n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                            p(
                                r,
                                e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s)
                            );
                        });
                },
                E = () => {
                    const e = t.params.a11y;
                    t.$el.append(i);
                    const s = t.$el;
                    e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage),
                        e.containerMessage && p(s, e.containerMessage);
                    const a = t.$wrapperEl,
                        r =
                        e.id ||
                        a.attr("id") ||
                        `swiper-wrapper-${
                                ((n = 16),
                                void 0 === n && (n = 16),
                                "x".repeat(n).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))
                            }`;
                    var n;
                    const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                    var o;
                    let d, u;
                    (o = r),
                    a.attr("id", o),
                        (function(e, t) {
                            e.attr("aria-live", t);
                        })(a, l),
                        y(),
                        t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl),
                        t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl),
                        d && d.length && v(d, r, e.nextSlideMessage),
                        u && u.length && v(u, r, e.prevSlideMessage),
                        g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m),
                        t.$el.on("focus", x, !0),
                        t.$el.on("pointerdown", w, !0),
                        t.$el.on("pointerup", b, !0);
                };
            a("beforeInit", () => {
                    i = d(
                        `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                    );
                }),
                a("afterInit", () => {
                    t.params.a11y.enabled && E();
                }),
                a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
                    t.params.a11y.enabled && y();
                }),
                a("fromEdge toEdge afterInit lock unlock", () => {
                    t.params.a11y.enabled &&
                        (function() {
                            if (t.params.loop || t.params.rewind || !t.navigation) return;
                            const {
                                $nextEl: e,
                                $prevEl: s
                            } = t.navigation;
                            s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))),
                                e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
                        })();
                }),
                a("paginationUpdate", () => {
                    t.params.a11y.enabled &&
                        (function() {
                            const e = t.params.a11y;
                            f() &&
                                t.pagination.bullets.each((s) => {
                                    const a = d(s);
                                    t.params.pagination.clickable &&
                                        (n(a),
                                            t.params.pagination.renderBullet ||
                                            (o(a, "button"),
                                                p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))),
                                        a.is(`.${t.params.pagination.bulletActiveClass}`) ?
                                        a.attr("aria-current", "true") :
                                        a.removeAttr("aria-current");
                                });
                        })();
                }),
                a("destroy", () => {
                    t.params.a11y.enabled &&
                        (function() {
                            let e, s;
                            i && i.length > 0 && i.remove(),
                                t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
                                t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl),
                                e && e.off("keydown", m),
                                s && s.off("keydown", m),
                                g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m),
                                t.$el.off("focus", x, !0),
                                t.$el.off("pointerdown", w, !0),
                                t.$el.off("pointerup", b, !0);
                        })();
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides",
                    keepQuery: !1
                }
            });
            let i = !1,
                n = {};
            const l = (e) =>
                e
                .toString()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, ""),
                o = (e) => {
                    const t = r();
                    let s;
                    s = e ? new URL(e) : t.location;
                    const a = s.pathname
                        .slice(1)
                        .split("/")
                        .filter((e) => "" !== e),
                        i = a.length;
                    return {
                        key: a[i - 2],
                        value: a[i - 1]
                    };
                },
                d = (e, s) => {
                    const a = r();
                    if (!i || !t.params.history.enabled) return;
                    let n;
                    n = t.params.url ? new URL(t.params.url) : a.location;
                    const o = t.slides.eq(s);
                    let d = l(o.attr("data-history"));
                    if (t.params.history.root.length > 0) {
                        let s = t.params.history.root;
                        "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), (d = `${s}/${e}/${d}`);
                    } else n.pathname.includes(e) || (d = `${e}/${d}`);
                    t.params.history.keepQuery && (d += n.search);
                    const c = a.history.state;
                    (c && c.value === d) ||
                    (t.params.history.replaceState ?
                        a.history.replaceState({
                            value: d
                        }, null, d) :
                        a.history.pushState({
                            value: d
                        }, null, d));
                },
                c = (e, s, a) => {
                    if (s)
                        for (let i = 0, r = t.slides.length; i < r; i += 1) {
                            const r = t.slides.eq(i);
                            if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                                const s = r.index();
                                t.slideTo(s, e, a);
                            }
                        }
                    else t.slideTo(0, e, a);
                },
                p = () => {
                    (n = o(t.params.url)), c(t.params.speed, n.value, !1);
                };
            a("init", () => {
                    t.params.history.enabled &&
                        (() => {
                            const e = r();
                            if (t.params.history) {
                                if (!e.history || !e.history.pushState)
                                    return (t.params.history.enabled = !1), void(t.params.hashNavigation.enabled = !0);
                                (i = !0),
                                (n = o(t.params.url)),
                                (n.key || n.value) &&
                                (c(0, n.value, t.params.runCallbacksOnInit),
                                    t.params.history.replaceState || e.addEventListener("popstate", p));
                            }
                        })();
                }),
                a("destroy", () => {
                    t.params.history.enabled &&
                        (() => {
                            const e = r();
                            t.params.history.replaceState || e.removeEventListener("popstate", p);
                        })();
                }),
                a("transitionEnd _freeModeNoMomentumRelease", () => {
                    i && d(t.params.history.key, t.activeIndex);
                }),
                a("slideChange", () => {
                    i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                emit: i,
                on: n
            } = e,
            l = !1;
            const o = a(),
                c = r();
            s({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            });
            const p = () => {
                    i("hashChange");
                    const e = o.location.hash.replace("#", "");
                    if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                        const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                        if (void 0 === s) return;
                        t.slideTo(s);
                    }
                },
                u = () => {
                    if (l && t.params.hashNavigation.enabled)
                        if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState)
                            c.history.replaceState(
                                null,
                                null,
                                `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""
                            ),
                            i("hashSet");
                        else {
                            const e = t.slides.eq(t.activeIndex),
                                s = e.attr("data-hash") || e.attr("data-history");
                            (o.location.hash = s || ""), i("hashSet");
                        }
                };
            n("init", () => {
                    t.params.hashNavigation.enabled &&
                        (() => {
                            if (!t.params.hashNavigation.enabled || (t.params.history && t.params.history.enabled)) return;
                            l = !0;
                            const e = o.location.hash.replace("#", "");
                            if (e) {
                                const s = 0;
                                for (let a = 0, i = t.slides.length; a < i; a += 1) {
                                    const i = t.slides.eq(a);
                                    if (
                                        (i.attr("data-hash") || i.attr("data-history")) === e &&
                                        !i.hasClass(t.params.slideDuplicateClass)
                                    ) {
                                        const e = i.index();
                                        t.slideTo(e, s, t.params.runCallbacksOnInit, !0);
                                    }
                                }
                            }
                            t.params.hashNavigation.watchState && d(c).on("hashchange", p);
                        })();
                }),
                n("destroy", () => {
                    t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p);
                }),
                n("transitionEnd _freeModeNoMomentumRelease", () => {
                    l && u();
                }),
                n("slideChange", () => {
                    l && t.params.cssMode && u();
                });
        },
        function(e) {
            let t, {
                swiper: s,
                extendParams: i,
                on: r,
                emit: n
            } = e;

            function l() {
                if (!s.size) return (s.autoplay.running = !1), void(s.autoplay.paused = !1);
                const e = s.slides.eq(s.activeIndex);
                let a = s.params.autoplay.delay;
                e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
                    clearTimeout(t),
                    (t = p(() => {
                        let e;
                        s.params.autoplay.reverseDirection ?
                            s.params.loop ?
                            (s.loopFix(), (e = s.slidePrev(s.params.speed, !0, !0)), n("autoplay")) :
                            s.isBeginning ?
                            s.params.autoplay.stopOnLastSlide ?
                            d() :
                            ((e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0)), n("autoplay")) :
                            ((e = s.slidePrev(s.params.speed, !0, !0)), n("autoplay")) :
                            s.params.loop ?
                            (s.loopFix(), (e = s.slideNext(s.params.speed, !0, !0)), n("autoplay")) :
                            s.isEnd ?
                            s.params.autoplay.stopOnLastSlide ?
                            d() :
                            ((e = s.slideTo(0, s.params.speed, !0, !0)), n("autoplay")) :
                            ((e = s.slideNext(s.params.speed, !0, !0)), n("autoplay")),
                            ((s.params.cssMode && s.autoplay.running) || !1 === e) && l();
                    }, a));
            }

            function o() {
                return void 0 === t && !s.autoplay.running && ((s.autoplay.running = !0), n("autoplayStart"), l(), !0);
            }

            function d() {
                return (!!s.autoplay.running &&
                    void 0 !== t &&
                    (t && (clearTimeout(t), (t = void 0)), (s.autoplay.running = !1), n("autoplayStop"), !0)
                );
            }

            function c(e) {
                s.autoplay.running &&
                    (s.autoplay.paused ||
                        (t && clearTimeout(t),
                            (s.autoplay.paused = !0),
                            0 !== e && s.params.autoplay.waitForTransition ?
                            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                                s.$wrapperEl[0].addEventListener(e, h);
                            }) :
                            ((s.autoplay.paused = !1), l())));
            }

            function u() {
                const e = a();
                "hidden" === e.visibilityState && s.autoplay.running && c(),
                    "visible" === e.visibilityState && s.autoplay.paused && (l(), (s.autoplay.paused = !1));
            }

            function h(e) {
                s &&
                    !s.destroyed &&
                    s.$wrapperEl &&
                    e.target === s.$wrapperEl[0] &&
                    (["transitionend", "webkitTransitionEnd"].forEach((e) => {
                            s.$wrapperEl[0].removeEventListener(e, h);
                        }),
                        (s.autoplay.paused = !1),
                        s.autoplay.running ? l() : d());
            }

            function m() {
                s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    s.$wrapperEl[0].removeEventListener(e, h);
                });
            }

            function f() {
                s.params.autoplay.disableOnInteraction || ((s.autoplay.paused = !1), n("autoplayResume"), l());
            }
            (s.autoplay = {
                running: !1,
                paused: !1
            }),
            i({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1,
                    },
                }),
                r("init", () => {
                    if (s.params.autoplay.enabled) {
                        o();
                        a().addEventListener("visibilitychange", u),
                            s.params.autoplay.pauseOnMouseEnter &&
                            (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
                    }
                }),
                r("beforeTransitionStart", (e, t, a) => {
                    s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
                }),
                r("sliderFirstMove", () => {
                    s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c());
                }),
                r("touchEnd", () => {
                    s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
                }),
                r("destroy", () => {
                    s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
                    a().removeEventListener("visibilitychange", u);
                }),
                Object.assign(s.autoplay, {
                    pause: c,
                    run: l,
                    start: o,
                    stop: d
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs",
                },
            });
            let i = !1,
                r = !1;

            function n() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                const s = e.clickedIndex,
                    a = e.clickedSlide;
                if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
                if (null == s) return;
                let i;
                if (
                    ((i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s),
                        t.params.loop)
                ) {
                    let e = t.activeIndex;
                    t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
                        (t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft), (e = t.activeIndex));
                    const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                        a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                    i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
                }
                t.slideTo(i);
            }

            function l() {
                const {
                    thumbs: e
                } = t.params;
                if (i) return !1;
                i = !0;
                const s = t.constructor;
                if (e.swiper instanceof s)
                    (t.thumbs.swiper = e.swiper),
                    Object.assign(t.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1,
                    }),
                    Object.assign(t.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    });
                else if (m(e.swiper)) {
                    const a = Object.assign({}, e.swiper);
                    Object.assign(a, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }),
                        (t.thumbs.swiper = new s(a)),
                        (r = !0);
                }
                return (
                    t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
                );
            }

            function o(e) {
                const s = t.thumbs.swiper;
                if (!s || s.destroyed) return;
                const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                let i = 1;
                const r = t.params.thumbs.slideThumbActiveClass;
                if (
                    (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView),
                        t.params.thumbs.multipleActiveThumbs || (i = 1),
                        (i = Math.floor(i)),
                        s.slides.removeClass(r),
                        s.params.loop || (s.params.virtual && s.params.virtual.enabled))
                )
                    for (let e = 0; e < i; e += 1)
                        s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r);
                else
                    for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
                const n = t.params.thumbs.autoScrollOffset,
                    l = n && !s.params.loop;
                if (t.realIndex !== s.realIndex || l) {
                    let i,
                        r,
                        o = s.activeIndex;
                    if (s.params.loop) {
                        s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
                            (s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft), (o = s.activeIndex));
                        const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                            a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        (i =
                            void 0 === e ?
                            a :
                            void 0 === a ?
                            e :
                            a - o == o - e ?
                            s.params.slidesPerGroup > 1 ?
                            a :
                            o :
                            a - o < o - e ?
                            a :
                            e),
                        (r = t.activeIndex > t.previousIndex ? "next" : "prev");
                    } else(i = t.realIndex), (r = i > t.previousIndex ? "next" : "prev");
                    l && (i += "next" === r ? n : -1 * n),
                        s.visibleSlidesIndexes &&
                        s.visibleSlidesIndexes.indexOf(i) < 0 &&
                        (s.params.centeredSlides ?
                            (i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1) :
                            i > o && s.params.slidesPerGroup,
                            s.slideTo(i, e ? 0 : void 0));
                }
            }
            (t.thumbs = {
                swiper: null
            }),
            a("beforeInit", () => {
                    const {
                        thumbs: e
                    } = t.params;
                    e && e.swiper && (l(), o(!0));
                }),
                a("slideChange update resize observerUpdate", () => {
                    o();
                }),
                a("setTransition", (e, s) => {
                    const a = t.thumbs.swiper;
                    a && !a.destroyed && a.setTransition(s);
                }),
                a("beforeDestroy", () => {
                    const e = t.thumbs.swiper;
                    e && !e.destroyed && r && e.destroy();
                }),
                Object.assign(t.thumbs, {
                    init: l,
                    update: o
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                emit: a,
                once: i
            } = e;
            s({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: 0.02,
                    },
                }),
                Object.assign(t, {
                    freeMode: {
                        onTouchStart: function() {
                            const e = t.getTranslate();
                            t.setTranslate(e),
                                t.setTransition(0),
                                (t.touchEventsData.velocities.length = 0),
                                t.freeMode.onTouchEnd({
                                    currentPos: t.rtl ? t.translate : -t.translate
                                });
                        },
                        onTouchMove: function() {
                            const {
                                touchEventsData: e,
                                touches: s
                            } = t;
                            0 === e.velocities.length &&
                                e.velocities.push({
                                    position: s[t.isHorizontal() ? "startX" : "startY"],
                                    time: e.touchStartTime,
                                }),
                                e.velocities.push({
                                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                    time: u(),
                                });
                        },
                        onTouchEnd: function(e) {
                            let {
                                currentPos: s
                            } = e;
                            const {
                                params: r,
                                $wrapperEl: n,
                                rtlTranslate: l,
                                snapGrid: o,
                                touchEventsData: d
                            } = t,
                            c = u() - d.touchStartTime;
                            if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                            else if (s > -t.maxTranslate())
                                t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                            else {
                                if (r.freeMode.momentum) {
                                    if (d.velocities.length > 1) {
                                        const e = d.velocities.pop(),
                                            s = d.velocities.pop(),
                                            a = e.position - s.position,
                                            i = e.time - s.time;
                                        (t.velocity = a / i),
                                        (t.velocity /= 2),
                                        Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0),
                                            (i > 150 || u() - e.time > 300) && (t.velocity = 0);
                                    } else t.velocity = 0;
                                    (t.velocity *= r.freeMode.momentumVelocityRatio), (d.velocities.length = 0);
                                    let e = 1e3 * r.freeMode.momentumRatio;
                                    const s = t.velocity * e;
                                    let c = t.translate + s;
                                    l && (c = -c);
                                    let p,
                                        h = !1;
                                    const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                                    let f;
                                    if (c < t.maxTranslate())
                                        r.freeMode.momentumBounce ?
                                        (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m),
                                            (p = t.maxTranslate()),
                                            (h = !0),
                                            (d.allowMomentumBounce = !0)) :
                                        (c = t.maxTranslate()),
                                        r.loop && r.centeredSlides && (f = !0);
                                    else if (c > t.minTranslate())
                                        r.freeMode.momentumBounce ?
                                        (c - t.minTranslate() > m && (c = t.minTranslate() + m),
                                            (p = t.minTranslate()),
                                            (h = !0),
                                            (d.allowMomentumBounce = !0)) :
                                        (c = t.minTranslate()),
                                        r.loop && r.centeredSlides && (f = !0);
                                    else if (r.freeMode.sticky) {
                                        let e;
                                        for (let t = 0; t < o.length; t += 1)
                                            if (o[t] > -c) {
                                                e = t;
                                                break;
                                            }
                                            (c =
                                                Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ?
                                                o[e] :
                                                o[e - 1]),
                                            (c = -c);
                                    }
                                    if (
                                        (f &&
                                            i("transitionEnd", () => {
                                                t.loopFix();
                                            }),
                                            0 !== t.velocity)
                                    ) {
                                        if (
                                            ((e = l ?
                                                    Math.abs((-c - t.translate) / t.velocity) :
                                                    Math.abs((c - t.translate) / t.velocity)),
                                                r.freeMode.sticky)
                                        ) {
                                            const s = Math.abs((l ? -c : c) - t.translate),
                                                a = t.slidesSizesGrid[t.activeIndex];
                                            e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                                        }
                                    } else if (r.freeMode.sticky) return void t.slideToClosest();
                                    r.freeMode.momentumBounce && h ?
                                        (t.updateProgress(p),
                                            t.setTransition(e),
                                            t.setTranslate(c),
                                            t.transitionStart(!0, t.swipeDirection),
                                            (t.animating = !0),
                                            n.transitionEnd(() => {
                                                t &&
                                                    !t.destroyed &&
                                                    d.allowMomentumBounce &&
                                                    (a("momentumBounce"),
                                                        t.setTransition(r.speed),
                                                        setTimeout(() => {
                                                            t.setTranslate(p),
                                                                n.transitionEnd(() => {
                                                                    t && !t.destroyed && t.transitionEnd();
                                                                });
                                                        }, 0));
                                            })) :
                                        t.velocity ?
                                        (a("_freeModeNoMomentumRelease"),
                                            t.updateProgress(c),
                                            t.setTransition(e),
                                            t.setTranslate(c),
                                            t.transitionStart(!0, t.swipeDirection),
                                            t.animating ||
                                            ((t.animating = !0),
                                                n.transitionEnd(() => {
                                                    t && !t.destroyed && t.transitionEnd();
                                                }))) :
                                        t.updateProgress(c),
                                        t.updateActiveIndex(),
                                        t.updateSlidesClasses();
                                } else {
                                    if (r.freeMode.sticky) return void t.slideToClosest();
                                    r.freeMode && a("_freeModeNoMomentumRelease");
                                }
                                (!r.freeMode.momentum || c >= r.longSwipesMs) &&
                                (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                            }
                        },
                    },
                });
        },
        function(e) {
            let t,
                s,
                a, {
                    swiper: i,
                    extendParams: r
                } = e;
            r({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                }),
                (i.grid = {
                    initSlides: (e) => {
                        const {
                            slidesPerView: r
                        } = i.params, {
                            rows: n,
                            fill: l
                        } = i.params.grid;
                        (s = t / n),
                        (a = Math.floor(e / n)),
                        (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
                        "auto" !== r && "row" === l && (t = Math.max(t, r * n));
                    },
                    updateSlide: (e, r, n, l) => {
                        const {
                            slidesPerGroup: o,
                            spaceBetween: d
                        } = i.params, {
                            rows: c,
                            fill: p
                        } = i.params.grid;
                        let u, h, m;
                        if ("row" === p && o > 1) {
                            const s = Math.floor(e / (o * c)),
                                a = e - c * o * s,
                                i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                            (m = Math.floor(a / i)),
                            (h = a - m * i + s * o),
                            (u = h + (m * t) / c),
                            r.css({
                                "-webkit-order": u,
                                order: u
                            });
                        } else
                            "column" === p ?
                            ((h = Math.floor(e / c)),
                                (m = e - h * c),
                                (h > a || (h === a && m === c - 1)) && ((m += 1), m >= c && ((m = 0), (h += 1)))) :
                            ((m = Math.floor(e / s)), (h = e - m * s));
                        r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
                    },
                    updateWrapperSize: (e, s, a) => {
                        const {
                            spaceBetween: r,
                            centeredSlides: n,
                            roundLengths: l
                        } = i.params, {
                            rows: o
                        } = i.params.grid;
                        if (
                            ((i.virtualSize = (e + r) * t),
                                (i.virtualSize = Math.ceil(i.virtualSize / o) - r),
                                i.$wrapperEl.css({
                                    [a("width")]: `${i.virtualSize + r}px`
                                }),
                                n)
                        ) {
                            s.splice(0, s.length);
                            const e = [];
                            for (let t = 0; t < s.length; t += 1) {
                                let a = s[t];
                                l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a);
                            }
                            s.push(...e);
                        }
                    },
                });
        },
        function(e) {
            let {
                swiper: t
            } = e;
            Object.assign(t, {
                appendSlide: K.bind(t),
                prependSlide: Z.bind(t),
                addSlide: Q.bind(t),
                removeSlide: J.bind(t),
                removeAllSlides: ee.bind(t),
            });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                }),
                te({
                    effect: "fade",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        const {
                            slides: e
                        } = t,
                        s = t.params.fadeEffect;
                        for (let a = 0; a < e.length; a += 1) {
                            const e = t.slides.eq(a);
                            let i = -e[0].swiperSlideOffset;
                            t.params.virtualTranslate || (i -= t.translate);
                            let r = 0;
                            t.isHorizontal() || ((r = i), (i = 0));
                            const n = t.params.fadeEffect.crossFade ?
                                Math.max(1 - Math.abs(e[0].progress), 0) :
                                1 + Math.min(Math.max(e[0].progress, -1), 0);
                            se(s, e).css({
                                opacity: n
                            }).transform(`translate3d(${i}px, ${r}px, 0px)`);
                        }
                    },
                    setTransition: (e) => {
                        const {
                            transformEl: s
                        } = t.params.fadeEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e),
                            ae({
                                swiper: t,
                                duration: e,
                                transformEl: s,
                                allSlides: !0
                            });
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode,
                    }),
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }
            });
            const i = (e, t, s) => {
                let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === a.length &&
                    ((a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`)), e.append(a)),
                    0 === i.length &&
                    ((i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`)), e.append(i)),
                    a.length && (a[0].style.opacity = Math.max(-t, 0)),
                    i.length && (i[0].style.opacity = Math.max(t, 0));
            };
            te({
                effect: "cube",
                swiper: t,
                on: a,
                setTranslate: () => {
                    const {
                        $el: e,
                        $wrapperEl: s,
                        slides: a,
                        width: r,
                        height: n,
                        rtlTranslate: l,
                        size: o,
                        browser: c,
                    } = t,
                    p = t.params.cubeEffect,
                        u = t.isHorizontal(),
                        h = t.virtual && t.params.virtual.enabled;
                    let m,
                        f = 0;
                    p.shadow &&
                        (u ?
                            ((m = s.find(".swiper-cube-shadow")),
                                0 === m.length && ((m = d('<div class="swiper-cube-shadow"></div>')), s.append(m)),
                                m.css({
                                    height: `${r}px`
                                })) :
                            ((m = e.find(".swiper-cube-shadow")),
                                0 === m.length && ((m = d('<div class="swiper-cube-shadow"></div>')), e.append(m))));
                    for (let e = 0; e < a.length; e += 1) {
                        const t = a.eq(e);
                        let s = e;
                        h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                        let r = 90 * s,
                            n = Math.floor(r / 360);
                        l && ((r = -r), (n = Math.floor(-r / 360)));
                        const d = Math.max(Math.min(t[0].progress, 1), -1);
                        let c = 0,
                            m = 0,
                            g = 0;
                        s % 4 == 0 ?
                            ((c = 4 * -n * o), (g = 0)) :
                            (s - 1) % 4 == 0 ?
                            ((c = 0), (g = 4 * -n * o)) :
                            (s - 2) % 4 == 0 ?
                            ((c = o + 4 * n * o), (g = o)) :
                            (s - 3) % 4 == 0 && ((c = -o), (g = 3 * o + 4 * o * n)),
                            l && (c = -c),
                            u || ((m = c), (c = 0));
                        const v = `rotateX(${u ? 0 : -r}deg) rotateY(${
                            u ? r : 0
                        }deg) translate3d(${c}px, ${m}px, ${g}px)`;
                        d <= 1 && d > -1 && ((f = 90 * s + 90 * d), l && (f = 90 * -s - 90 * d)),
                            t.transform(v),
                            p.slideShadows && i(t, d, u);
                    }
                    if (
                        (s.css({
                                "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                                "transform-origin": `50% 50% -${o / 2}px`,
                            }),
                            p.shadow)
                    )
                        if (u)
                            m.transform(
                                `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${
                                    -r / 2
                                }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`
                            );
                        else {
                            const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                                t =
                                1.5 -
                                (Math.sin((2 * e * Math.PI) / 360) / 2 + Math.cos((2 * e * Math.PI) / 360) / 2),
                                s = p.shadowScale,
                                a = p.shadowScale / t,
                                i = p.shadowOffset;
                            m.transform(
                                `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${
                                    -n / 2 / a
                                }px) rotateX(-90deg)`
                            );
                        }
                    const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                    s.transform(
                            `translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${
                            t.isHorizontal() ? -f : 0
                        }deg)`
                        ),
                        s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`);
                },
                setTransition: (e) => {
                    const {
                        $el: s,
                        slides: a
                    } = t;
                    a
                        .transition(e)
                        .find(
                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                        )
                        .transition(e),
                        t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
                },
                recreateShadows: () => {
                    const e = t.isHorizontal();
                    t.slides.each((t) => {
                        const s = Math.max(Math.min(t.progress, 1), -1);
                        i(d(t), s, e);
                    });
                },
                getEffectParams: () => t.params.cubeEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                }),
            });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0,
                    transformEl: null
                }
            });
            const i = (e, s, a) => {
                let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")),
                    0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")),
                    i.length && (i[0].style.opacity = Math.max(-s, 0)),
                    r.length && (r[0].style.opacity = Math.max(s, 0));
            };
            te({
                effect: "flip",
                swiper: t,
                on: a,
                setTranslate: () => {
                    const {
                        slides: e,
                        rtlTranslate: s
                    } = t,
                    a = t.params.flipEffect;
                    for (let r = 0; r < e.length; r += 1) {
                        const n = e.eq(r);
                        let l = n[0].progress;
                        t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                        const o = n[0].swiperSlideOffset;
                        let d = -180 * l,
                            c = 0,
                            p = t.params.cssMode ? -o - t.translate : -o,
                            u = 0;
                        t.isHorizontal() ? s && (d = -d) : ((u = p), (p = 0), (c = -d), (d = 0)),
                            (n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length),
                            a.slideShadows && i(n, l, a);
                        const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                        se(a, n).transform(h);
                    }
                },
                setTransition: (e) => {
                    const {
                        transformEl: s
                    } = t.params.flipEffect;
                    (s ? t.slides.find(s) : t.slides)
                    .transition(e)
                        .find(
                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                        )
                        .transition(e),
                        ae({
                            swiper: t,
                            duration: e,
                            transformEl: s
                        });
                },
                recreateShadows: () => {
                    const e = t.params.flipEffect;
                    t.slides.each((s) => {
                        const a = d(s);
                        let r = a[0].progress;
                        t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e);
                    });
                },
                getEffectParams: () => t.params.flipEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode,
                }),
            });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0,
                        transformEl: null,
                    },
                }),
                te({
                    effect: "coverflow",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        const {
                            width: e,
                            height: s,
                            slides: a,
                            slidesSizesGrid: i
                        } = t,
                        r = t.params.coverflowEffect,
                            n = t.isHorizontal(),
                            l = t.translate,
                            o = n ? e / 2 - l : s / 2 - l,
                            d = n ? r.rotate : -r.rotate,
                            c = r.depth;
                        for (let e = 0, t = a.length; e < t; e += 1) {
                            const t = a.eq(e),
                                s = i[e],
                                l = (o - t[0].swiperSlideOffset - s / 2) / s,
                                p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                            let u = n ? d * p : 0,
                                h = n ? 0 : d * p,
                                m = -c * Math.abs(p),
                                f = r.stretch;
                            "string" == typeof f && -1 !== f.indexOf("%") && (f = (parseFloat(r.stretch) / 100) * s);
                            let g = n ? 0 : f * p,
                                v = n ? f * p : 0,
                                w = 1 - (1 - r.scale) * Math.abs(p);
                            Math.abs(v) < 0.001 && (v = 0),
                                Math.abs(g) < 0.001 && (g = 0),
                                Math.abs(m) < 0.001 && (m = 0),
                                Math.abs(u) < 0.001 && (u = 0),
                                Math.abs(h) < 0.001 && (h = 0),
                                Math.abs(w) < 0.001 && (w = 0);
                            const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                            if (
                                (se(r, t).transform(b),
                                    (t[0].style.zIndex = 1 - Math.abs(Math.round(p))),
                                    r.slideShadows)
                            ) {
                                let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                    s = n ?
                                    t.find(".swiper-slide-shadow-right") :
                                    t.find(".swiper-slide-shadow-bottom");
                                0 === e.length && (e = ie(r, t, n ? "left" : "top")),
                                    0 === s.length && (s = ie(r, t, n ? "right" : "bottom")),
                                    e.length && (e[0].style.opacity = p > 0 ? p : 0),
                                    s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
                            }
                        }
                    },
                    setTransition: (e) => {
                        const {
                            transformEl: s
                        } = t.params.coverflowEffect;
                        (s ? t.slides.find(s) : t.slides)
                        .transition(e)
                            .find(
                                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                            )
                            .transition(e);
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0
                    }),
                });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    },
                },
            });
            const i = (e) => ("string" == typeof e ? e : `${e}px`);
            te({
                effect: "creative",
                swiper: t,
                on: a,
                setTranslate: () => {
                    const {
                        slides: e,
                        $wrapperEl: s,
                        slidesSizesGrid: a
                    } = t,
                    r = t.params.creativeEffect, {
                            progressMultiplier: n
                        } = r,
                        l = t.params.centeredSlides;
                    if (l) {
                        const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                        s.transform(`translateX(calc(50% - ${e}px))`);
                    }
                    for (let s = 0; s < e.length; s += 1) {
                        const a = e.eq(s),
                            o = a[0].progress,
                            d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                        let c = d;
                        l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                        const p = a[0].swiperSlideOffset,
                            u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                            h = [0, 0, 0];
                        let m = !1;
                        t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
                        let f = {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            scale: 1,
                            opacity: 1
                        };
                        d < 0 ? ((f = r.next), (m = !0)) : d > 0 && ((f = r.prev), (m = !0)),
                            u.forEach((e, t) => {
                                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`;
                            }),
                            h.forEach((e, t) => {
                                h[t] = f.rotate[t] * Math.abs(d * n);
                            }),
                            (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length);
                        const g = u.join(", "),
                            v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                            w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
                            b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                            x = `translate3d(${g}) ${v} ${w}`;
                        if ((m && f.shadow) || !m) {
                            let e = a.children(".swiper-slide-shadow");
                            if ((0 === e.length && f.shadow && (e = ie(r, a)), e.length)) {
                                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                            }
                        }
                        const y = se(r, a);
                        y.transform(x).css({
                            opacity: b
                        }), f.origin && y.css("transform-origin", f.origin);
                    }
                },
                setTransition: (e) => {
                    const {
                        transformEl: s
                    } = t.params.creativeEffect;
                    (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                        ae({
                            swiper: t,
                            duration: e,
                            transformEl: s,
                            allSlides: !0
                        });
                },
                perspective: () => t.params.creativeEffect.perspective,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !t.params.cssMode
                }),
            });
        },
        function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: a
            } = e;
            s({
                    cardsEffect: {
                        slideShadows: !0,
                        transformEl: null,
                        rotate: !0,
                        perSlideRotate: 2,
                        perSlideOffset: 8
                    },
                }),
                te({
                    effect: "cards",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        const {
                            slides: e,
                            activeIndex: s
                        } = t,
                        a = t.params.cardsEffect, {
                                startTranslate: i,
                                isTouched: r
                            } = t.touchEventsData,
                            n = t.translate;
                        for (let l = 0; l < e.length; l += 1) {
                            const o = e.eq(l),
                                d = o[0].progress,
                                c = Math.min(Math.max(d, -4), 4);
                            let p = o[0].swiperSlideOffset;
                            t.params.centeredSlides &&
                                !t.params.cssMode &&
                                t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                                t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                            let u = t.params.cssMode ? -p - t.translate : -p,
                                h = 0;
                            const m = -100 * Math.abs(c);
                            let f = 1,
                                g = -a.perSlideRotate * c,
                                v = a.perSlideOffset - 0.75 * Math.abs(c);
                            const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                                b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                                x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                            if (b || x) {
                                const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                                (g += -28 * c * e), (f += -0.5 * e), (v += 96 * e), (h = -25 * e * Math.abs(c) + "%");
                            }
                            if (
                                ((u =
                                    c < 0 ?
                                    `calc(${u}px + (${v * Math.abs(c)}%))` :
                                    c > 0 ?
                                    `calc(${u}px + (-${v * Math.abs(c)}%))` :
                                    `${u}px`), !t.isHorizontal())
                            ) {
                                const e = h;
                                (h = u), (u = e);
                            }
                            const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                                E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${
                                    a.rotate ? g : 0
                                }deg)\n        scale(${y})\n      `;
                            if (a.slideShadows) {
                                let e = o.find(".swiper-slide-shadow");
                                0 === e.length && (e = ie(a, o)),
                                    e.length &&
                                    (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - 0.5) / 0.5, 0), 1));
                            }
                            o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                            se(a, o).transform(E);
                        }
                    },
                    setTransition: (e) => {
                        const {
                            transformEl: s
                        } = t.params.cardsEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                            ae({
                                swiper: t,
                                duration: e,
                                transformEl: s
                            });
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode
                    }),
                });
        },
    ];
    return V.use(re), V;
});
//# sourceMappingURL=swiper-bundle.min.js.map
/*! odometer 0.4.6 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
    q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function(a) {
        var b;
        return b = document.createElement("div"), b.innerHTML = a, b.children[0]
    }, v = function(a, b) {
        return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
    }, r = function(a, b) {
        return v(a, b), a.className += " " + b
    }, z = function(a, b) {
        var c;
        return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
    }, u = function() {
        var a, b;
        return null != (a = null != (b = window.performance) ? "function" == typeof b.now ? b.now() : void 0 : void 0) ? a : +new Date
    }, x = function(a, b) {
        return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
    }, A = function(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }, t = function(a) {
        return a - x(a)
    }, C = !1, (B = function() {
        var a, b, c, d, e;
        if (!C && null != window.jQuery) {
            for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function(a) {
                var b;
                return b = window.jQuery.fn[a], window.jQuery.fn[a] = function(a) {
                    var c;
                    return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
                }
            }(a));
            return e
        }
    })(), setTimeout(B, 0), m = function() {
        function a(b) {
            var c, d, e, g, h, i, l, m, n, o, p = this;
            if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
            this.el.odometer = this, m = a.options;
            for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
            null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
            try {
                for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) e = o[i], null != this.el[e] && ! function(a) {
                    return Object.defineProperty(p.el, a, {
                        get: function() {
                            var b;
                            return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
                        },
                        set: function(a) {
                            return p.update(a)
                        }
                    })
                }(e)
            } catch (q) {
                c = q, this.watchForMutations()
            }
        }
        return a.prototype.renderInside = function() {
            return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
        }, a.prototype.watchForMutations = function() {
            var a, b = this;
            if (null != l) try {
                return null == this.observer && (this.observer = new l(function() {
                    var a;
                    return a = b.el.innerText, b.renderInside(), b.render(b.value), b.update(a)
                })), this.watchMutations = !0, this.startWatchingMutations()
            } catch (c) {
                a = c
            }
        }, a.prototype.startWatchingMutations = function() {
            return this.watchMutations ? this.observer.observe(this.el, {
                childList: !0
            }) : void 0
        }, a.prototype.stopWatchingMutations = function() {
            var a;
            return null != (a = this.observer) ? a.disconnect() : void 0
        }, a.prototype.cleanValue = function(a) {
            var b;
            return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
        }, a.prototype.bindTransitionEnd = function() {
            var a, b, c, d, e, f, g = this;
            if (!this.transitionEndBound) {
                for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function() {
                    return b ? !0 : (b = !0, setTimeout(function() {
                        return g.render(), b = !1, z(g.el, "odometerdone")
                    }, 0), !0)
                }, !1));
                return f
            }
        }, a.prototype.resetFormat = function() {
            var a, b, d, e, f, g, i, j;
            if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");
            return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = {
                repeating: g,
                radix: f,
                precision: e
            }
        }, a.prototype.render = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m;
            for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", g = this.options.theme, b = this.el.className.split(" "), f = [], i = 0, k = b.length; k > i; i++) c = b[i], c.length && ((e = /^odometer-theme-(.+)$/.exec(c)) ? g = e[1] : /^odometer(-|$)/.test(c) || f.push(c));
            for (f.push("odometer"), p || f.push("odometer-no-transitions"), f.push(g ? "odometer-theme-" + g : "odometer-auto-theme"), this.el.className = f.join(" "), this.ribbons = {}, this.digits = [], h = !this.format.precision || !t(a) || !1, m = a.toString().split("").reverse(), j = 0, l = m.length; l > j; j++) d = m[j], "." === d && (h = !0), this.addDigit(d, h);
            return this.startWatchingMutations()
        }, a.prototype.update = function(a) {
            var b, c = this;
            return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function() {
                return c.el.offsetHeight, r(c.el, "odometer-animating")
            }, 0), this.value = a) : void 0
        }, a.prototype.renderDigit = function() {
            return s(d)
        }, a.prototype.insertDigit = function(a, b) {
            return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
        }, a.prototype.addSpacer = function(a, b, c) {
            var d;
            return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b)
        }, a.prototype.addDigit = function(a, b) {
            var c, d, e, f;
            if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
            if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
            if (b)
                for (e = !1;;) {
                    if (!this.format.repeating.length) {
                        if (e) throw new Error("Bad odometer format without digits");
                        this.resetFormat(), e = !0
                    }
                    if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
                    this.addSpacer(c)
                }
            return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
        }, a.prototype.animate = function(a) {
            return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
        }, a.prototype.animateCount = function(a) {
            var c, d, e, f, g, h = this;
            if (d = +a - this.value) return f = e = u(), c = this.value, (g = function() {
                var i, j, k;
                return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
            })()
        }, a.prototype.getDigitCount = function() {
            var a, b, c, d, e, f;
            for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
            return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
        }, a.prototype.getFractionalDigitCount = function() {
            var a, b, c, d, e, f, g;
            for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;
            return Math.max.apply(Math, e)
        }, a.prototype.resetDigits = function() {
            return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
        }, a.prototype.animateSlide = function(a) {
            var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;
            if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
                for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
                    if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
                        for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) l.push(Math.round(c)), c += n;
                        l[l.length - 1] !== i && l.push(i), b++
                    } else l = function() {
                        E = [];
                        for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) E.push(a);
                        return E
                    }.apply(this);
                    for (m = w = 0, y = l.length; y > w; m = ++w) k = l[m], l[m] = Math.abs(k % 10);
                    g.push(l)
                }
                for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x)
                    for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");
                return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
            }
        }, a
    }(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function() {
        var a, b, c, d, e;
        if (window.odometerOptions) {
            d = window.odometerOptions, e = [];
            for (a in d) b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);
            return e
        }
    }, 0), m.init = function() {
        var a, b, c, d, e, f;
        if (null != document.querySelectorAll) {
            for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new m({
                el: a,
                value: null != (e = a.innerText) ? e : a.textContent
            }));
            return f
        }
    }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function() {
        return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0
    }) : document.addEventListener("DOMContentLoaded", function() {
        return m.options.auto !== !1 ? m.init() : void 0
    }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
        return m
    }) : typeof exports === !1 ? module.exports = m : window.Odometer = m
}).call(this);
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).VenoBox = t()
}(this, (function() {
    "use strict";
    /**
     * VenoBox 2.1.7
     * Copyright 2013-2024 Nicola Franchini
     * @license: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
     */
    let e, t, o, n, s, i, a, r, l, d, c, v, u, b, p, g, m, f, y, x, h, L, w, k, S, C, A, E, q, P, M, T, j, H, O, z, I, V;
    const B = document.createElement("div");
    let N, D = 0,
        Q = 0,
        X = 0,
        Y = !1,
        R = new Image,
        F = !1;
    const K = {
            bounce: ["sk-bounce", "sk-bounce-dot", 2],
            chase: ["sk-chase", "sk-chase-dot", 6],
            circle: ["sk-circle", "sk-circle-dot", 12],
            "circle-fade": ["sk-circle-fade", "sk-circle-fade-dot", 12],
            flow: ["sk-flow", "sk-flow-dot", 3],
            fold: ["sk-fold", "sk-fold-cube", 4],
            grid: ["sk-grid", "sk-grid-cube", 9],
            plane: ["sk-plane", "", 0],
            pulse: ["sk-pulse", "", 5],
            swing: ["sk-swing", "sk-swing-dot", 2],
            wander: ["sk-wander", "sk-wander-cube", 3],
            wave: ["sk-wave", "sk-wave-rect", 5]
        },
        U = {
            selector: ".venobox",
            autoplay: !1,
            bgcolor: "#fff",
            border: "0",
            customClass: !1,
            infinigall: !1,
            maxWidth: "100%",
            navigation: !0,
            navKeyboard: !0,
            navTouch: !0,
            navSpeed: 300,
            numeration: !1,
            overlayClose: !0,
            overlayColor: "rgba(23,23,23,0.95)",
            popup: !1,
            ratio: "16x9",
            share: !1,
            shareStyle: "pill",
            spinner: "bounce",
            spinColor: "#d2d2d2",
            titleattr: "title",
            titlePosition: "top",
            titleStyle: "bar",
            toolsBackground: "#1C1C1C",
            toolsColor: "#d2d2d2",
            onPreOpen: function() {
                return !0
            },
            onPostOpen: function() {},
            onPreClose: function() {
                return !0
            },
            onNavComplete: function() {},
            onContentLoaded: function() {},
            onInit: function() {},
            jQuerySelectors: !1,
            focusItem: !1,
            fitView: !1,
            initialScale: .9,
            transitionSpeed: 200
        };

    function W(e, t, o) {
        if ("[object Object]" === Object.prototype.toString.call(e)) {
            let n;
            for (n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(o, e[n], n, e)
        } else {
            let n = 0,
                s = e.length;
            for (n = 0; n < s; n++) t.call(o, e[n], n, e)
        }
    }

    function Z(e) {
        return e
    }

    function _({
        timing: e,
        draw: t,
        duration: o
    }) {
        let n = performance.now();
        requestAnimationFrame((function s(i) {
            let a = (i - n) / o;
            a > 1 && (a = 1);
            let r = e(a);
            t(r), a < 1 && requestAnimationFrame(s)
        }))
    }

    function G(e) {
        if (!e) return !1;
        y = !0, r = e, L = !1, w = !1, S = e.getAttribute("data-maxwidth") || e.settings.maxWidth, C = e.getAttribute("data-overlay") || e.settings.overlayColor, A = e.getAttribute("data-ratio") || e.settings.ratio, E = e.hasAttribute("data-autoplay") || e.settings.autoplay, q = e.getAttribute("data-href") || e.getAttribute("href"), P = e.getAttribute("data-customclass") || e.settings.customClass, I = e.getAttribute(e.settings.titleattr) || "", O = e.getAttribute("data-border") || e.settings.border, M = e.hasAttribute("data-fitview") || e.settings.fitView
    }

    function J() {
        return !(!r || !document.body.classList.contains("vbox-open")) && ((!r.settings.onPreClose || "function" != typeof r.settings.onPreClose || !1 !== r.settings.onPreClose(r, p, j, H)) && (document.body.removeEventListener("keydown", te), document.body.classList.remove("vbox-open"), r.settings.focusItem && r.focus(), void _({
            duration: 200,
            timing: Z,
            draw: function(e) {
                k.style.opacity = 1 - e, 1 === e && k.remove()
            }
        })))
    }

    function $() {
        ue(j)
    }

    function ee() {
        ue(H)
    }

    function te(e) {
        27 === e.keyCode && J(), V || (37 == e.keyCode && !0 === w && ue(H), 39 == e.keyCode && !0 === L && ue(j), V = setTimeout((() => {
            V = null
        }), 100))
    }

    function oe() {
        y = !1, a.style.opacity = 0, a.innerHTML = x, F ? (a.classList.add("vbox-grab"), a.addEventListener("touchstart", ae, !1), a.addEventListener("touchend", re, !1), a.addEventListener("touchmove", le, !1), a.addEventListener("mousedown", ae, !1), a.addEventListener("mouseup", re, !1), a.addEventListener("mouseout", re, !1), a.addEventListener("mousemove", le, !1)) : (a.classList.remove("vbox-grab"), a.removeEventListener("touchstart", ae, !1), a.removeEventListener("touchend", re, !1), a.removeEventListener("touchmove", le, !1), a.removeEventListener("mousedown", ae, !1), a.removeEventListener("mouseup", re, !1), a.removeEventListener("mouseout", re, !1), a.removeEventListener("mousemove", le, !1));
        let e = a.querySelector(":first-child");
        e.classList.add("vbox-child"), e.style.backgroundColor = r.settings.bgcolor, e.style.transform = "scale(" + r.settings.initialScale + ")", e.style.transition = "transform " + r.settings.transitionSpeed + "ms";
        let t = a.querySelector(".vbox-child img");
        t && t.addEventListener("dragstart", (function(e) {
            e.preventDefault()
        })), i.scrollTo(0, 0), e.style.transform = "scale(1)", k.style.setProperty("--vbox-padding", O), k.style.setProperty("--vbox-max-width", S), W(k.classList, (function(e) {
            "vbox-overlay" !== e && k.classList.remove(e)
        })), P && k.classList.add(P), M ? a.classList.add("vbox-fit") : a.classList.remove("vbox-fit"), _({
            duration: r.settings.transitionSpeed,
            timing: Z,
            draw: function(e) {
                a.style.opacity = e, 1 === e && u.classList.add("vbox-hidden")
            }
        }), r.settings.onContentLoaded && "function" == typeof r.settings.onContentLoaded && r.settings.onContentLoaded(x)
    }

    function ne(e) {
        a.classList.contains("vbox-" + e) || oe()
    }

    function se(e, t, o) {
        let n;
        a.classList.add("vbox-loading");
        let s = function(e) {
            let t, o, n;
            if (o = e.match(/(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i), o && o[7]) t = "youtube", n = o[7];
            else {
                let s = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
                o = e.match(s), o && o[5] && (t = "vimeo", n = o[5])
            }
            return {
                type: t,
                id: n
            }
        }(e);
        if ("vimeo" == s.type || "youtube" == s.type) {
            let i;
            n = o ? "?rel=0&autoplay=1" : "?rel=0";
            let a = n + function(e) {
                let t = "",
                    o = decodeURIComponent(e).split("?");
                if (void 0 !== o[1]) {
                    let e, n, s = o[1].split("&");
                    for (n = 0; n < s.length; n++) e = s[n].split("="), t = t + "&" + e[0] + "=" + e[1]
                }
                return encodeURI(t)
            }(e);
            "vimeo" == s.type ? i = "https://player.vimeo.com/video/" : "youtube" == s.type && (i = "https://www.youtube-nocookie.com/embed/"), x = '<div class="venoratio venoratio-' + t + '"><iframe webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="' + i + s.id + a + '"></iframe></div>'
        } else n = o ? " autoplay" : "", x = '<div class="venoratio venoratio-' + t + '"><video src="' + e + '"' + n + " controls>Your browser does not support the video tag.</video></div>";
        a.classList.remove("vbox-loading"), ne("animated")
    }

    function ie() {
        var e;
        if (e = x, B.innerHTML = e, g = B.querySelectorAll("img"), g.length) {
            let e = 0;
            W(g, (function(t) {
                let o = t.src;
                R = new Image, R.onload = function() {
                    e++, e == g.length && (a.classList.remove("vbox-loading"), ne("animated"))
                }, R.onerror = function() {
                    e++, e == g.length && (a.classList.remove("vbox-loading"), ne("animated"))
                }, R.src = o
            }))
        } else a.classList.remove("vbox-loading"), ne("animated")
    }

    function ae(e) {
        if (!y) {
            let t = .84 * r.settings.navSpeed;
            a.style.transition = "margin " + t + "ms ease-out, opacity " + t + "ms ease-out", D = Q = "touchstart" === e.type ? e.touches[0].pageX : e.pageX, T = v = "touchstart" === e.type ? e.touches[0].pageY : e.pageY, Y = !0
        }
    }

    function re(e) {
        if (Y) {
            Y = !1;
            let e = r,
                t = !1;
            X = Q - D, X < 0 && L && (e = j, t = !0), X > 0 && w && (e = H, t = !0), Math.abs(X) >= 50 && t ? ue(e) : (a.style.marginLeft = 0, a.style.opacity = 1)
        }
    }

    function le(e) {
        if (Y && !y) {
            Q = "touchmove" === e.type ? e.touches[0].pageX : e.pageX, v = "touchmove" === e.type ? e.touches[0].pageY : e.pageY, d = Q - D, c = v - T;
            let t = Math.abs(d);
            if (t > Math.abs(c) && t <= 180) {
                let o = 1.5 * (1 - t / 180);
                e.preventDefault(), a.style.marginLeft = d + "px", a.style.opacity = o
            }
        }
    }

    function de(e) {
        if (!e) return !1;
        z = e.dataset.gall, h = e.settings.numeration, m = e.settings.infinigall, o.innerHTML = "";
        let s = e.dataset.vbtype;
        e.settings.share && "iframe" !== s && "inline" !== s && "ajax" !== s && function(e) {
            if (navigator.canShare) {
                const t = {
                    url: e
                };
                o.insertAdjacentHTML("beforeend", '<div class="vbox-link-btn vbox-share-mobile"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/><path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/></svg></div>'), o.querySelector(".vbox-share-mobile").addEventListener("click", (function(e) {
                    e.preventDefault(), navigator.share(t)
                }))
            }
            o.insertAdjacentHTML("beforeend", '<a target="_blank" href="' + e + '" download><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg></a>'), o.insertAdjacentHTML("beforeend", '<div class="vbox-tooltip"><div class="vbox-link-btn vbox-share-copy"><span class="vbox-tooltip-text" id="myTooltip"></span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg></div ></div>'), o.querySelector(".vbox-share-copy").addEventListener("click", (function(t) {
                t.preventDefault();
                let o = document.getElementById("myTooltip");
                navigator.clipboard.writeText(e).then((function() {
                    o.innerHTML = '<div class="vbox-tooltip-inner">Copied</div>'
                }), (function() {
                    console.log("copy failed")
                }))
            }))
        }(e.href), f = document.querySelectorAll('.vbox-item[data-gall="' + z + '"]'), l = Array.prototype.indexOf.call(f, e), f.length < 2 && (h = !1), f.length < 3 && (m = !1), j = f[l + 1], H = f[l - 1], !j && m && (j = f[0]), !H && m && (H = f[f.length - 1]), f.length >= 1 ? (p = l + 1, t.innerHTML = p + " / " + f.length) : p = 1, h ? t.classList.remove("vbox-hidden") : t.classList.add("vbox-hidden"), "" !== I ? n.classList.remove("vbox-hidden") : n.classList.add("vbox-hidden"), n.innerHTML = I, w = !1, L = !1, (j || m) && (L = !0), (l > 0 || m) && (w = !0), F = (w || L) && e.settings.navTouch;
        let i = k.querySelector(".vbox-next"),
            a = k.querySelector(".vbox-prev");
        w ? a.classList.remove("vbox-hidden") : a.classList.add("vbox-hidden"), L ? i.classList.remove("vbox-hidden") : i.classList.add("vbox-hidden"), e.settings.navigation || (i.classList.add("vbox-hidden"), a.classList.add("vbox-hidden"))
    }

    function ce(t) {
        if (!t) return !1;
        e.style.backgroundColor = C, b.innerHTML = function(e) {
            if (!e) return "Loading...";
            let t = '<div class="sk-center ' + e[0] + '">',
                o = 0;
            for (o = 0; o < e[2]; o++) t += '<div class="' + e[1] + '"></div>';
            return t += "</div>", t
        }(K[t.settings.spinner]), k.style.setProperty("--sk-color", t.settings.spinColor), u.classList.remove("vbox-hidden"), o.classList.remove("vbox-top", "vbox-bottom"), n.classList.remove("vbox-top", "vbox-bottom"), "top" == t.settings.titlePosition ? (n.classList.add("vbox-top"), o.classList.add("vbox-bottom")) : (n.classList.add("vbox-bottom"), o.classList.add("vbox-top"));
        let s = "bar" === t.settings.titleStyle ? "100%" : "auto",
            i = "pill" === t.settings.titleStyle ? "5em" : "0",
            a = "bar" === t.settings.shareStyle ? "100%" : "auto",
            r = "pill" === t.settings.shareStyle ? "5em" : "0",
            l = "transparent" === t.settings.titleStyle ? "transparent" : t.settings.toolsBackground,
            d = "transparent" === t.settings.shareStyle ? "transparent" : t.settings.toolsBackground;
        k.style.setProperty("--vbox-title-width", s), k.style.setProperty("--vbox-title-radius", i), k.style.setProperty("--vbox-share-width", a), k.style.setProperty("--vbox-share-radius", r), k.style.setProperty("--vbox-tools-color", t.settings.toolsColor), k.style.setProperty("--vbox-title-background", l), k.style.setProperty("--vbox-share-background", d)
    }

    function ve() {
        if (!r) return !1;
        switch (r.dataset.vbtype) {
            case "iframe":
                e = q, t = A, a.classList.add("vbox-loading"), x = '<div class="venoratio venoratio-' + t + '"><iframe src="' + e + '"></iframe></div>', a.classList.remove("vbox-loading"), ne("animated");
                break;
            case "inline":
                ! function(e) {
                    let t = document.querySelector(e);
                    t && (a.classList.add("vbox-loading"), x = '<div class="vbox-inline">' + t.innerHTML + "</div>", a.classList.remove("vbox-loading"), ne("animated"))
                }(q);
                break;
            case "ajax":
                ! function(e) {
                    a.classList.add("vbox-loading");
                    let t = new XMLHttpRequest;
                    t.open("GET", e, !0), t.onload = function() {
                        x = '<div class="vbox-inline">' + t.response + "</div>", ie()
                    }, t.onerror = function() {
                        x = '<div class="vbox-inline"></div>', a.classList.remove("vbox-loading"), ne("animated")
                    }, t.send()
                }(q);
                break;
            case "video":
                se(q, A, E);
                break;
            default:
                ! function(e) {
                    R.onload = function() {
                        x = '<div class="vbox-child"><img src="' + e + '"></div>', a.classList.remove("vbox-loading"), ne("animated")
                    }, R.src = e
                }(q)
        }
        var e, t
    }

    function ue(e) {
        if (!e || y || !document.body.classList.contains("vbox-open")) return !1;
        G(e), ce(e);
        const t = .84 * r.settings.navSpeed;
        a.style.transition = "margin " + t + "ms ease-out, opacity " + t + "ms ease-out", e === H && a.classList.add("swipe-right"), e === j && a.classList.add("swipe-left"), u.classList.remove("vbox-hidden");
        const o = a.style.opacity;
        a.classList.add("vbox-animated", "vbox-loading"), N = a.cloneNode(!1), N.classList.add("cloned"), N.classList.remove("swipe-left", "swipe-right"), N.style.opacity = 0, N.style.marginLeft = "0", N.style.marginRight = "0";
        const n = a;
        i.append(N), a = N, a.classList.remove("cloned"), de(e), _({
            duration: r.settings.navSpeed,
            timing: Z,
            draw: function(e) {
                n.style.opacity = o - e / o, 1 === e && (n.remove(), a.classList.remove("vbox-animated"), ne("loading"), y = !1, r.settings.onNavComplete && "function" == typeof r.settings.onNavComplete && r.settings.onNavComplete(r, p, j, H))
            }
        }), ve()
    }

    function be(l) {
        return !(document.body.classList.contains("vbox-open") || !l) && ((!l.settings.onPreOpen || "function" != typeof l.settings.onPreOpen || !1 !== l.settings.onPreOpen(l)) && (G(l), document.body.insertAdjacentHTML("beforeend", s), document.body.classList.add("vbox-open"), k = document.querySelector(".vbox-overlay"), e = k.querySelector(".vbox-backdrop"), i = k.querySelector(".vbox-container"), a = i.querySelector(".vbox-content"), t = k.querySelector(".vbox-num"), o = k.querySelector(".vbox-share"), n = k.querySelector(".vbox-title"), u = k.querySelector(".vbox-preloader"), b = u.querySelector(".vbox-preloader-inner"), k.style.opacity = 0, ce(l), de(l), a.classList.add("vbox-animated", "vbox-loading"), _({
            duration: 200,
            timing: Z,
            draw: function(e) {
                k.style.opacity = e, 1 === e && (a.classList.remove("vbox-animated"), y = !1, ne("loading"), r.settings.onPostOpen && "function" == typeof r.settings.onPostOpen && r.settings.onPostOpen(r, p, j, H))
            }
        }), ve(), l.settings.navKeyboard && (document.body.addEventListener("keydown", te), document.body.addEventListener("keyup", (() => {
            V && (clearTimeout(V), V = null)
        }))), document.querySelector(".vbox-prev").addEventListener("click", (function() {
            ue(H)
        })), document.querySelector(".vbox-next").addEventListener("click", (function() {
            ue(j)
        })), void k.addEventListener("click", (function(e) {
            let t = document.querySelector(".vbox-close");
            t && (t.contains(e.target) || t === e.target || r.settings.overlayClose && (e.target.classList.contains("vbox-overlay") || e.target.classList.contains("vbox-content") || e.target.classList.contains("vbox-backdrop") || e.target.classList.contains("vbox-close") || e.target.classList.contains("vbox-preloader") || e.target.classList.contains("vbox-container"))) && J()
        }))))
    }
    const pe = function(e) {
        const t = {};
        let o = function(e, t) {
            let o = {};
            return W(e, (function(t, n) {
                o[n] = e[n]
            })), W(t, (function(e, n) {
                o[n] = t[n]
            })), o
        }(U, e || {});
        return t.close = J, t.next = $, t.prev = ee, t.open = be, t.settings = o,
            function(e, t) {
                t.onInit && "function" == typeof t.onInit && t.onInit(e);
                let o = t.jQuerySelectors || document.querySelectorAll(t.selector);
                if (s = '<div class="vbox-overlay"><div class="vbox-backdrop"></div><div class="vbox-preloader"><div class="vbox-preloader-inner"></div></div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-left-corner"><div class="vbox-num">0/0</div></div><div class="vbox-close"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="vbox-close-icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg></div><a class="vbox-next"><span>Next</span></a><a class="vbox-prev"><span>Prev</span></a><div class="vbox-share"></div></div>', W(o, (function(e) {
                        if (e.classList.contains("vbox-item")) return !0;
                        e.settings = t, e.classList.add("vbox-item"), e.addEventListener("click", (function(t) {
                            return t.preventDefault(), e.blur(), be(e), !1
                        }))
                    })), t.popup) {
                    let e = document.querySelector(t.popup);
                    e.settings = t, be(e)
                }
            }(t, o), t
    };
    return "function" == typeof jQuery && jQuery.fn.extend({
        venobox: function(e) {
            const t = e || {};
            t.jQuerySelectors = this, new pe({
                pluginoptions: t
            })
        }
    }), pe
}));
//# sourceMappingURL=venobox.min.js.map
! function(p) {
    p.fn.appear = function(r, e) {
        var d = p.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, e);
        return this.each(function() {
            var l = p(this);
            if (l.appeared = !1, r) {
                var h = p(window),
                    a = function() {
                        if (l.is(":visible")) {
                            var e = h.scrollLeft(),
                                a = h.scrollTop(),
                                r = l.offset(),
                                p = r.left,
                                n = r.top,
                                t = d.accX,
                                c = d.accY,
                                i = l.height(),
                                o = h.height(),
                                f = l.width(),
                                s = h.width();
                            a <= n + i + c && n <= a + o + c && e <= p + f + t && p <= e + s + t ? l.appeared || l.trigger("appear", d.data) : l.appeared = !1
                        } else l.appeared = !1
                    },
                    e = function() {
                        if (l.appeared = !0, d.one) {
                            h.unbind("scroll", a);
                            var e = p.inArray(a, p.fn.appear.checks);
                            0 <= e && p.fn.appear.checks.splice(e, 1)
                        }
                        r.apply(this, arguments)
                    };
                d.one ? l.one("appear", d.data, e) : l.bind("appear", d.data, e), h.scroll(a), p.fn.appear.checks.push(a), a()
            } else l.trigger("appear", d.data)
        })
    }, p.extend(p.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var e = p.fn.appear.checks.length;
            if (0 < e)
                for (; e--;) p.fn.appear.checks[e]()
        },
        run: function() {
            p.fn.appear.timeout && clearTimeout(p.fn.appear.timeout), p.fn.appear.timeout = setTimeout(p.fn.appear.checkAll, 20)
        }
    }), p.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, a) {
        var r = p.fn[a];
        r && (p.fn[a] = function() {
            var e = r.apply(this, arguments);
            return p.fn.appear.run(), e
        })
    })
}(jQuery);
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);
/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 *
 * Find more information at http://www.meanthemes.com/plugins/meanmenu/
 *
 */
(function($) {
    "use strict";
    $.fn.meanmenu = function(options) {
        var defaults = {
            meanMenuTarget: jQuery(this), // Target the current HTML markup you wish to replace
            meanMenuContainer: 'body', // Choose where meanmenu will be placed within the HTML
            meanMenuClose: "X", // single character you want to represent the close menu button
            meanMenuCloseSize: "18px", // set font size of close button
            meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
            meanRevealPosition: "right", // left right or center positions
            meanRevealPositionDistance: "0", // Tweak the position of the menu
            meanRevealColour: "", // override CSS colours for the reveal background
            meanScreenWidth: "480", // set the screen width you want meanmenu to kick in at
            meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
            meanShowChildren: true, // true to show children in the menu, false to hide them
            meanExpandableChildren: true, // true to allow expand/collapse children
            meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
            onePage: false, // set to true for one page sites
            meanDisplay: "block", // override display method for table cell based layouts e.g. table-cell
            removeElements: "" // set to hide page elements
        };
        options = $.extend(defaults, options);

        // get browser width
        var currentWidth = window.innerWidth || document.documentElement.clientWidth;

        return this.each(function() {
            var meanMenu = options.meanMenuTarget;
            var meanContainer = options.meanMenuContainer;
            var meanMenuClose = options.meanMenuClose;
            var meanMenuCloseSize = options.meanMenuCloseSize;
            var meanMenuOpen = options.meanMenuOpen;
            var meanRevealPosition = options.meanRevealPosition;
            var meanRevealPositionDistance = options.meanRevealPositionDistance;
            var meanRevealColour = options.meanRevealColour;
            var meanScreenWidth = options.meanScreenWidth;
            var meanNavPush = options.meanNavPush;
            var meanRevealClass = ".meanmenu-reveal";
            var meanShowChildren = options.meanShowChildren;
            var meanExpandableChildren = options.meanExpandableChildren;
            var meanExpand = options.meanExpand;
            var meanRemoveAttrs = options.meanRemoveAttrs;
            var onePage = options.onePage;
            var meanDisplay = options.meanDisplay;
            var removeElements = options.removeElements;

            //detect known mobile/tablet usage
            var isMobile = false;
            if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
                isMobile = true;
            }

            if ((navigator.userAgent.match(/MSIE 8/i)) || (navigator.userAgent.match(/MSIE 7/i))) {
                // add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
                jQuery('html').css("overflow-y", "scroll");
            }

            var meanRevealPos = "";
            var meanCentered = function() {
                if (meanRevealPosition === "center") {
                    var newWidth = window.innerWidth || document.documentElement.clientWidth;
                    var meanCenter = ((newWidth / 2) - 22) + "px";
                    meanRevealPos = "left:" + meanCenter + ";right:auto;";

                    if (!isMobile) {
                        jQuery('.meanmenu-reveal').css("left", meanCenter);
                    } else {
                        jQuery('.meanmenu-reveal').animate({
                            left: meanCenter
                        });
                    }
                }
            };

            var menuOn = false;
            var meanMenuExist = false;


            if (meanRevealPosition === "right") {
                meanRevealPos = "right:" + meanRevealPositionDistance + ";left:auto;";
            }
            if (meanRevealPosition === "left") {
                meanRevealPos = "left:" + meanRevealPositionDistance + ";right:auto;";
            }
            // run center function
            meanCentered();

            // set all styles for mean-reveal
            var $navreveal = "";

            var meanInner = function() {
                // get last class name
                if (jQuery($navreveal).is(".meanmenu-reveal.meanclose")) {
                    $navreveal.html(meanMenuClose);
                } else {
                    $navreveal.html(meanMenuOpen);
                }
            };

            // re-instate original nav (and call this on window.width functions)
            var meanOriginal = function() {
                jQuery('.mean-bar,.mean-push').remove();
                jQuery(meanContainer).removeClass("mean-container");
                jQuery(meanMenu).css('display', meanDisplay);
                menuOn = false;
                meanMenuExist = false;
                jQuery(removeElements).removeClass('mean-remove');
            };

            // navigation reveal
            var showMeanMenu = function() {
                var meanStyles = "background:" + meanRevealColour + ";color:" + meanRevealColour + ";" + meanRevealPos;
                if (currentWidth <= meanScreenWidth) {
                    jQuery(removeElements).addClass('mean-remove');
                    meanMenuExist = true;
                    // add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'
                    jQuery(meanContainer).addClass("mean-container");
                    jQuery('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + meanStyles + '">Show Navigation</a><nav class="mean-nav"></nav></div>');

                    //push meanMenu navigation into .mean-nav
                    var meanMenuContents = jQuery(meanMenu).html();
                    jQuery('.mean-nav').html(meanMenuContents);

                    // remove all classes from EVERYTHING inside meanmenu nav
                    if (meanRemoveAttrs) {
                        jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function() {
                            // First check if this has mean-remove class
                            if (jQuery(this).is('.mean-remove')) {
                                jQuery(this).attr('class', 'mean-remove');
                            } else {
                                jQuery(this).removeAttr("class");
                            }
                            jQuery(this).removeAttr("id");
                        });
                    }

                    // push in a holder div (this can be used if removal of nav is causing layout issues)
                    jQuery(meanMenu).before('<div class="mean-push" />');
                    jQuery('.mean-push').css("margin-top", meanNavPush);

                    // hide current navigation and reveal mean nav link
                    jQuery(meanMenu).hide();
                    jQuery(".meanmenu-reveal").show();

                    // turn 'X' on or off
                    jQuery(meanRevealClass).html(meanMenuOpen);
                    $navreveal = jQuery(meanRevealClass);

                    //hide mean-nav ul
                    jQuery('.mean-nav ul').hide();

                    // hide sub nav
                    if (meanShowChildren) {
                        // allow expandable sub nav(s)
                        if (meanExpandableChildren) {
                            jQuery('.mean-nav ul ul').each(function() {
                                if (jQuery(this).children().length) {
                                    jQuery(this, 'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: ' + meanMenuCloseSize + '">' + meanExpand + '</a>');
                                }
                            });
                            jQuery('.mean-expand').on("click", function(e) {
                                e.preventDefault();
                                if (jQuery(this).hasClass("mean-clicked")) {
                                    jQuery(this).prev('ul').slideUp(300, function() {});
                                    jQuery(this).parent().removeClass('dropdown-opened');
                                } else {
                                    jQuery(this).prev('ul').slideDown(300, function() {});
                                    jQuery(this).parent().addClass('dropdown-opened');
                                }
                                jQuery(this).toggleClass("mean-clicked");
                            });
                        } else {
                            jQuery('.mean-nav ul ul').show();
                        }
                    } else {
                        jQuery('.mean-nav ul ul').hide();
                    }

                    // add last class to tidy up borders
                    jQuery('.mean-nav ul li').last().addClass('mean-last');
                    $navreveal.removeClass("meanclose");
                    jQuery($navreveal).click(function(e) {
                        e.preventDefault();
                        if (menuOn === false) {
                            $navreveal.css("text-align", "center");
                            $navreveal.css("text-indent", "0");
                            $navreveal.css("font-size", meanMenuCloseSize);
                            jQuery('.mean-nav ul:first').slideDown();
                            menuOn = true;
                        } else {
                            jQuery('.mean-nav ul:first').slideUp();
                            menuOn = false;
                        }
                        $navreveal.toggleClass("meanclose");
                        meanInner();
                        jQuery(removeElements).addClass('mean-remove');
                    });

                    // for one page websites, reset all variables...
                    if (onePage) {
                        jQuery('.mean-nav ul > li > a:first-child').on("click", function() {
                            jQuery('.mean-nav ul:first').slideUp();
                            menuOn = false;
                            jQuery($navreveal).toggleClass("meanclose").html(meanMenuOpen);
                        });
                    }
                } else {
                    meanOriginal();
                }
            };

            if (!isMobile) {
                // reset menu on resize above meanScreenWidth
                jQuery(window).resize(function() {
                    currentWidth = window.innerWidth || document.documentElement.clientWidth;
                    if (currentWidth > meanScreenWidth) {
                        meanOriginal();
                    } else {
                        meanOriginal();
                    }
                    if (currentWidth <= meanScreenWidth) {
                        showMeanMenu();
                        meanCentered();
                    } else {
                        meanOriginal();
                    }
                });
            }

            jQuery(window).resize(function() {
                // get browser width
                currentWidth = window.innerWidth || document.documentElement.clientWidth;

                if (!isMobile) {
                    meanOriginal();
                    if (currentWidth <= meanScreenWidth) {
                        showMeanMenu();
                        meanCentered();
                    }
                } else {
                    meanCentered();
                    if (currentWidth <= meanScreenWidth) {
                        if (meanMenuExist === false) {
                            showMeanMenu();
                        }
                    } else {
                        meanOriginal();
                    }
                }
            });

            // run main menuMenu function on load
            showMeanMenu();
        });
    };
})(jQuery);
/*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 JÃƒÂ¶rn Zaefferer; Licensed MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e && e)
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
                b = c.element(this) && b, b || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (null != j && null != j.form) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                    required: h
                }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    remote: h
                })), g
            }
        }
    }), a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]);
                    var c = a.data(this.form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b),
                    f = this.validationTargetFor(e),
                    g = this,
                    h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }), this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) a[b] && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b),
                    f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function(a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                if ("function" == typeof f.normalizer) {
                    if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
                    delete f.normalizer
                }
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }), this.errorMap[a.name] = c, this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b),
                    i = this.idOrName(b),
                    j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b)),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e, f = a(c).attr("type"),
                    g = "Step attribute on input type " + f + " is not supported.",
                    h = ["text", "number", "range"],
                    i = new RegExp("\\b" + f + "\\b"),
                    j = f && !i.test(h.join()),
                    k = function(a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0
                    },
                    l = function(a) {
                        return Math.round(a * Math.pow(10, e))
                    },
                    m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                    url: d
                } || d, h = a.param(a.extend({
                    data: b
                }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a
});
