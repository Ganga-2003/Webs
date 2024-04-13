/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var c_ = Object.create;
    var ln = Object.defineProperty;
    var l_ = Object.getOwnPropertyDescriptor;
    var f_ = Object.getOwnPropertyNames;
    var d_ = Object.getPrototypeOf,
        p_ = Object.prototype.hasOwnProperty;
    var ye = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Ve = (e, t) => {
            for (var r in t) ln(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Gs = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of f_(t)) !p_.call(e, i) && i !== r && ln(e, i, {
                    get: () => t[i],
                    enumerable: !(n = l_(t, i)) || n.enumerable
                });
            return e
        };
    var pe = (e, t, r) => (r = e != null ? c_(d_(e)) : {}, Gs(t || !e || !e.__esModule ? ln(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        it = e => Gs(ln({}, "__esModule", {
            value: !0
        }), e);
    var Vs = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                };
                return
            }
            let n = function(a) {
                    let u = window.getComputedStyle(a, null),
                        f = u.getPropertyValue("position"),
                        E = u.getPropertyValue("overflow"),
                        p = u.getPropertyValue("display");
                    (!f || f === "static") && (a.style.position = "relative"), E !== "hidden" && (a.style.overflow = "hidden"), (!p || p === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
                },
                i = function(a) {
                    let u = window.getComputedStyle(a, null),
                        f = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px"
                        };
                    for (let E in f) u.getPropertyValue(E) !== f[E] && (a.style[E] = f[E])
                },
                o = function(a) {
                    let u = a.parentNode;
                    n(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
                },
                s = function(a) {
                    if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let f = a[u].nodeName.toLowerCase();
                        if (f === "img") {
                            if (t) continue;
                            a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                                o(this)
                            })
                        } else f === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var Us = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;

            function e(n) {
                Webflow.env("design") || ($("video").each(function() {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function() {
                    n ? r($(this)) : t($(this))
                }))
            }

            function t(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function r(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", i => {
                    e(!i.matches)
                }), n.matches && e(!1), $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget),
                        s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            r(o), a && typeof a.catch == "function" && a.catch(() => {
                                t(o)
                            })
                        } else s.pause(), t(o)
                })
            })
        })()
    });
    var Mi = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(d, T) {
                var C = new g.Bare;
                return C.init(d, T)
            }

            function r(d) {
                return d.replace(/[A-Z]/g, function(T) {
                    return "-" + T.toLowerCase()
                })
            }

            function n(d) {
                var T = parseInt(d.slice(1), 16),
                    C = T >> 16 & 255,
                    N = T >> 8 & 255,
                    A = 255 & T;
                return [C, N, A]
            }

            function i(d, T, C) {
                return "#" + (1 << 24 | d << 16 | T << 8 | C).toString(16).slice(1)
            }

            function o() {}

            function s(d, T) {
                f("Type warning: Expected: [" + d + "] Got: [" + typeof T + "] " + T)
            }

            function a(d, T, C) {
                f("Units do not match [" + d + "]: " + T + ", " + C)
            }

            function u(d, T, C) {
                if (T !== void 0 && (C = T), d === void 0) return C;
                var N = C;
                return Te.test(d) || !Le.test(d) ? N = parseInt(d, 10) : Le.test(d) && (N = 1e3 * parseFloat(d)), 0 > N && (N = 0), N === N ? N : C
            }

            function f(d) {
                ne.debug && window && window.console.warn(d)
            }

            function E(d) {
                for (var T = -1, C = d ? d.length : 0, N = []; ++T < C;) {
                    var A = d[T];
                    A && N.push(A)
                }
                return N
            }
            var p = function(d, T, C) {
                    function N(se) {
                        return typeof se == "object"
                    }

                    function A(se) {
                        return typeof se == "function"
                    }

                    function M() {}

                    function re(se, ve) {
                        function Q() {
                            var Pe = new ce;
                            return A(Pe.init) && Pe.init.apply(Pe, arguments), Pe
                        }

                        function ce() {}
                        ve === C && (ve = se, se = Object), Q.Bare = ce;
                        var le, we = M[d] = se[d],
                            nt = ce[d] = Q[d] = new M;
                        return nt.constructor = Q, Q.mixin = function(Pe) {
                            return ce[d] = Q[d] = re(Q, Pe)[d], Q
                        }, Q.open = function(Pe) {
                            if (le = {}, A(Pe) ? le = Pe.call(Q, nt, we, Q, se) : N(Pe) && (le = Pe), N(le))
                                for (var _r in le) T.call(le, _r) && (nt[_r] = le[_r]);
                            return A(nt.init) || (nt.init = se), Q
                        }, Q.open(ve)
                    }
                    return re
                }("prototype", {}.hasOwnProperty),
                _ = {
                    ease: ["ease", function(d, T, C, N) {
                        var A = (d /= N) * d,
                            M = A * d;
                        return T + C * (-2.75 * M * A + 11 * A * A + -15.5 * M + 8 * A + .25 * d)
                    }],
                    "ease-in": ["ease-in", function(d, T, C, N) {
                        var A = (d /= N) * d,
                            M = A * d;
                        return T + C * (-1 * M * A + 3 * A * A + -3 * M + 2 * A)
                    }],
                    "ease-out": ["ease-out", function(d, T, C, N) {
                        var A = (d /= N) * d,
                            M = A * d;
                        return T + C * (.3 * M * A + -1.6 * A * A + 2.2 * M + -1.8 * A + 1.9 * d)
                    }],
                    "ease-in-out": ["ease-in-out", function(d, T, C, N) {
                        var A = (d /= N) * d,
                            M = A * d;
                        return T + C * (2 * M * A + -5 * A * A + 2 * M + 2 * A)
                    }],
                    linear: ["linear", function(d, T, C, N) {
                        return C * d / N + T
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(d, T, C, N) {
                        return C * (d /= N) * d + T
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(d, T, C, N) {
                        return -C * (d /= N) * (d - 2) + T
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(d, T, C, N) {
                        return (d /= N / 2) < 1 ? C / 2 * d * d + T : -C / 2 * (--d * (d - 2) - 1) + T
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(d, T, C, N) {
                        return C * (d /= N) * d * d + T
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(d, T, C, N) {
                        return C * ((d = d / N - 1) * d * d + 1) + T
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(d, T, C, N) {
                        return (d /= N / 2) < 1 ? C / 2 * d * d * d + T : C / 2 * ((d -= 2) * d * d + 2) + T
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(d, T, C, N) {
                        return C * (d /= N) * d * d * d + T
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(d, T, C, N) {
                        return -C * ((d = d / N - 1) * d * d * d - 1) + T
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(d, T, C, N) {
                        return (d /= N / 2) < 1 ? C / 2 * d * d * d * d + T : -C / 2 * ((d -= 2) * d * d * d - 2) + T
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(d, T, C, N) {
                        return C * (d /= N) * d * d * d * d + T
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(d, T, C, N) {
                        return C * ((d = d / N - 1) * d * d * d * d + 1) + T
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(d, T, C, N) {
                        return (d /= N / 2) < 1 ? C / 2 * d * d * d * d * d + T : C / 2 * ((d -= 2) * d * d * d * d + 2) + T
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(d, T, C, N) {
                        return -C * Math.cos(d / N * (Math.PI / 2)) + C + T
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(d, T, C, N) {
                        return C * Math.sin(d / N * (Math.PI / 2)) + T
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(d, T, C, N) {
                        return -C / 2 * (Math.cos(Math.PI * d / N) - 1) + T
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(d, T, C, N) {
                        return d === 0 ? T : C * Math.pow(2, 10 * (d / N - 1)) + T
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(d, T, C, N) {
                        return d === N ? T + C : C * (-Math.pow(2, -10 * d / N) + 1) + T
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(d, T, C, N) {
                        return d === 0 ? T : d === N ? T + C : (d /= N / 2) < 1 ? C / 2 * Math.pow(2, 10 * (d - 1)) + T : C / 2 * (-Math.pow(2, -10 * --d) + 2) + T
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(d, T, C, N) {
                        return -C * (Math.sqrt(1 - (d /= N) * d) - 1) + T
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(d, T, C, N) {
                        return C * Math.sqrt(1 - (d = d / N - 1) * d) + T
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(d, T, C, N) {
                        return (d /= N / 2) < 1 ? -C / 2 * (Math.sqrt(1 - d * d) - 1) + T : C / 2 * (Math.sqrt(1 - (d -= 2) * d) + 1) + T
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(d, T, C, N, A) {
                        return A === void 0 && (A = 1.70158), C * (d /= N) * d * ((A + 1) * d - A) + T
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(d, T, C, N, A) {
                        return A === void 0 && (A = 1.70158), C * ((d = d / N - 1) * d * ((A + 1) * d + A) + 1) + T
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(d, T, C, N, A) {
                        return A === void 0 && (A = 1.70158), (d /= N / 2) < 1 ? C / 2 * d * d * (((A *= 1.525) + 1) * d - A) + T : C / 2 * ((d -= 2) * d * (((A *= 1.525) + 1) * d + A) + 2) + T
                    }]
                },
                m = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                b = document,
                w = window,
                x = "bkwld-tram",
                I = /[\-\.0-9]/g,
                L = /[A-Z]/,
                R = "number",
                P = /^(rgb|#)/,
                D = /(em|cm|mm|in|pt|pc|px)$/,
                q = /(em|cm|mm|in|pt|pc|px|%)$/,
                K = /(deg|rad|turn)$/,
                j = "unitless",
                Z = /(all|none) 0s ease 0s/,
                ee = /^(width|height)$/,
                ie = " ",
                G = b.createElement("a"),
                S = ["Webkit", "Moz", "O", "ms"],
                k = ["-webkit-", "-moz-", "-o-", "-ms-"],
                X = function(d) {
                    if (d in G.style) return {
                        dom: d,
                        css: d
                    };
                    var T, C, N = "",
                        A = d.split("-");
                    for (T = 0; T < A.length; T++) N += A[T].charAt(0).toUpperCase() + A[T].slice(1);
                    for (T = 0; T < S.length; T++)
                        if (C = S[T] + N, C in G.style) return {
                            dom: C,
                            css: k[T] + d
                        }
                },
                H = t.support = {
                    bind: Function.prototype.bind,
                    transform: X("transform"),
                    transition: X("transition"),
                    backface: X("backface-visibility"),
                    timing: X("transition-timing-function")
                };
            if (H.transition) {
                var te = H.timing.dom;
                if (G.style[te] = _["ease-in-back"][0], !G.style[te])
                    for (var oe in m) _[oe][0] = m[oe]
            }
            var U = t.frame = function() {
                    var d = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame;
                    return d && H.bind ? d.bind(w) : function(T) {
                        w.setTimeout(T, 16)
                    }
                }(),
                B = t.now = function() {
                    var d = w.performance,
                        T = d && (d.now || d.webkitNow || d.msNow || d.mozNow);
                    return T && H.bind ? T.bind(d) : Date.now || function() {
                        return +new Date
                    }
                }(),
                h = p(function(d) {
                    function T(ae, de) {
                        var be = E(("" + ae).split(ie)),
                            ge = be[0];
                        de = de || {};
                        var qe = z[ge];
                        if (!qe) return f("Unsupported property: " + ge);
                        if (!de.weak || !this.props[ge]) {
                            var ze = qe[0],
                                Ge = this.props[ge];
                            return Ge || (Ge = this.props[ge] = new ze.Bare), Ge.init(this.$el, be, qe, de), Ge
                        }
                    }

                    function C(ae, de, be) {
                        if (ae) {
                            var ge = typeof ae;
                            if (de || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ge == "number" && de) return this.timer = new Y({
                                duration: ae,
                                context: this,
                                complete: M
                            }), void(this.active = !0);
                            if (ge == "string" && de) {
                                switch (ae) {
                                    case "hide":
                                        Q.call(this);
                                        break;
                                    case "stop":
                                        re.call(this);
                                        break;
                                    case "redraw":
                                        ce.call(this);
                                        break;
                                    default:
                                        T.call(this, ae, be && be[1])
                                }
                                return M.call(this)
                            }
                            if (ge == "function") return void ae.call(this, this);
                            if (ge == "object") {
                                var qe = 0;
                                nt.call(this, ae, function(Ie, u_) {
                                    Ie.span > qe && (qe = Ie.span), Ie.stop(), Ie.animate(u_)
                                }, function(Ie) {
                                    "wait" in Ie && (qe = u(Ie.wait, 0))
                                }), we.call(this), qe > 0 && (this.timer = new Y({
                                    duration: qe,
                                    context: this
                                }), this.active = !0, de && (this.timer.complete = M));
                                var ze = this,
                                    Ge = !1,
                                    cn = {};
                                U(function() {
                                    nt.call(ze, ae, function(Ie) {
                                        Ie.active && (Ge = !0, cn[Ie.name] = Ie.nextStyle)
                                    }), Ge && ze.$el.css(cn)
                                })
                            }
                        }
                    }

                    function N(ae) {
                        ae = u(ae, 0), this.active ? this.queue.push({
                            options: ae
                        }) : (this.timer = new Y({
                            duration: ae,
                            context: this,
                            complete: M
                        }), this.active = !0)
                    }

                    function A(ae) {
                        return this.active ? (this.queue.push({
                            options: ae,
                            args: arguments
                        }), void(this.timer.complete = M)) : f("No active transition timer. Use start() or wait() before then().")
                    }

                    function M() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ae = this.queue.shift();
                            C.call(this, ae.options, !0, ae.args)
                        }
                    }

                    function re(ae) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var de;
                        typeof ae == "string" ? (de = {}, de[ae] = 1) : de = typeof ae == "object" && ae != null ? ae : this.props, nt.call(this, de, Pe), we.call(this)
                    }

                    function se(ae) {
                        re.call(this, ae), nt.call(this, ae, _r, a_)
                    }

                    function ve(ae) {
                        typeof ae != "string" && (ae = "block"), this.el.style.display = ae
                    }

                    function Q() {
                        re.call(this), this.el.style.display = "none"
                    }

                    function ce() {
                        this.el.offsetHeight
                    }

                    function le() {
                        re.call(this), e.removeData(this.el, x), this.$el = this.el = null
                    }

                    function we() {
                        var ae, de, be = [];
                        this.upstream && be.push(this.upstream);
                        for (ae in this.props) de = this.props[ae], de.active && be.push(de.string);
                        be = be.join(","), this.style !== be && (this.style = be, this.el.style[H.transition.dom] = be)
                    }

                    function nt(ae, de, be) {
                        var ge, qe, ze, Ge, cn = de !== Pe,
                            Ie = {};
                        for (ge in ae) ze = ae[ge], ge in fe ? (Ie.transform || (Ie.transform = {}), Ie.transform[ge] = ze) : (L.test(ge) && (ge = r(ge)), ge in z ? Ie[ge] = ze : (Ge || (Ge = {}), Ge[ge] = ze));
                        for (ge in Ie) {
                            if (ze = Ie[ge], qe = this.props[ge], !qe) {
                                if (!cn) continue;
                                qe = T.call(this, ge)
                            }
                            de.call(this, qe, ze)
                        }
                        be && Ge && be.call(this, Ge)
                    }

                    function Pe(ae) {
                        ae.stop()
                    }

                    function _r(ae, de) {
                        ae.set(de)
                    }

                    function a_(ae) {
                        this.$el.css(ae)
                    }

                    function je(ae, de) {
                        d[ae] = function() {
                            return this.children ? s_.call(this, de, arguments) : (this.el && de.apply(this, arguments), this)
                        }
                    }

                    function s_(ae, de) {
                        var be, ge = this.children.length;
                        for (be = 0; ge > be; be++) ae.apply(this.children[be], de);
                        return this
                    }
                    d.init = function(ae) {
                        if (this.$el = e(ae), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ne.keepInherited && !ne.fallback) {
                            var de = W(this.el, "transition");
                            de && !Z.test(de) && (this.upstream = de)
                        }
                        H.backface && ne.hideBackface && y(this.el, H.backface.css, "hidden")
                    }, je("add", T), je("start", C), je("wait", N), je("then", A), je("next", M), je("stop", re), je("set", se), je("show", ve), je("hide", Q), je("redraw", ce), je("destroy", le)
                }),
                g = p(h, function(d) {
                    function T(C, N) {
                        var A = e.data(C, x) || e.data(C, x, new h.Bare);
                        return A.el || A.init(C), N ? A.start(N) : A
                    }
                    d.init = function(C, N) {
                        var A = e(C);
                        if (!A.length) return this;
                        if (A.length === 1) return T(A[0], N);
                        var M = [];
                        return A.each(function(re, se) {
                            M.push(T(se, N))
                        }), this.children = M, this
                    }
                }),
                v = p(function(d) {
                    function T() {
                        var M = this.get();
                        this.update("auto");
                        var re = this.get();
                        return this.update(M), re
                    }

                    function C(M, re, se) {
                        return re !== void 0 && (se = re), M in _ ? M : se
                    }

                    function N(M) {
                        var re = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(M);
                        return (re ? i(re[1], re[2], re[3]) : M).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var A = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    d.init = function(M, re, se, ve) {
                        this.$el = M, this.el = M[0];
                        var Q = re[0];
                        se[2] && (Q = se[2]), J[Q] && (Q = J[Q]), this.name = Q, this.type = se[1], this.duration = u(re[1], this.duration, A.duration), this.ease = C(re[2], this.ease, A.ease), this.delay = u(re[3], this.delay, A.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = ee.test(this.name), this.unit = ve.unit || this.unit || ne.defaultUnit, this.angle = ve.angle || this.angle || ne.defaultAngle, ne.fallback || ve.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + ie + this.duration + "ms" + (this.ease != "ease" ? ie + _[this.ease][0] : "") + (this.delay ? ie + this.delay + "ms" : ""))
                    }, d.set = function(M) {
                        M = this.convert(M, this.type), this.update(M), this.redraw()
                    }, d.transition = function(M) {
                        this.active = !0, M = this.convert(M, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), M == "auto" && (M = T.call(this))), this.nextStyle = M
                    }, d.fallback = function(M) {
                        var re = this.el.style[this.name] || this.convert(this.get(), this.type);
                        M = this.convert(M, this.type), this.auto && (re == "auto" && (re = this.convert(this.get(), this.type)), M == "auto" && (M = T.call(this))), this.tween = new O({
                            from: re,
                            to: M,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, d.get = function() {
                        return W(this.el, this.name)
                    }, d.update = function(M) {
                        y(this.el, this.name, M)
                    }, d.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, y(this.el, this.name, this.get()));
                        var M = this.tween;
                        M && M.context && M.destroy()
                    }, d.convert = function(M, re) {
                        if (M == "auto" && this.auto) return M;
                        var se, ve = typeof M == "number",
                            Q = typeof M == "string";
                        switch (re) {
                            case R:
                                if (ve) return M;
                                if (Q && M.replace(I, "") === "") return +M;
                                se = "number(unitless)";
                                break;
                            case P:
                                if (Q) {
                                    if (M === "" && this.original) return this.original;
                                    if (re.test(M)) return M.charAt(0) == "#" && M.length == 7 ? M : N(M)
                                }
                                se = "hex or rgb string";
                                break;
                            case D:
                                if (ve) return M + this.unit;
                                if (Q && re.test(M)) return M;
                                se = "number(px) or string(unit)";
                                break;
                            case q:
                                if (ve) return M + this.unit;
                                if (Q && re.test(M)) return M;
                                se = "number(px) or string(unit or %)";
                                break;
                            case K:
                                if (ve) return M + this.angle;
                                if (Q && re.test(M)) return M;
                                se = "number(deg) or string(angle)";
                                break;
                            case j:
                                if (ve || Q && q.test(M)) return M;
                                se = "number(unitless) or string(unit or %)"
                        }
                        return s(se, M), M
                    }, d.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                l = p(v, function(d, T) {
                    d.init = function() {
                        T.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), P))
                    }
                }),
                F = p(v, function(d, T) {
                    d.init = function() {
                        T.init.apply(this, arguments), this.animate = this.fallback
                    }, d.get = function() {
                        return this.$el[this.name]()
                    }, d.update = function(C) {
                        this.$el[this.name](C)
                    }
                }),
                V = p(v, function(d, T) {
                    function C(N, A) {
                        var M, re, se, ve, Q;
                        for (M in N) ve = fe[M], se = ve[0], re = ve[1] || M, Q = this.convert(N[M], se), A.call(this, re, Q, se)
                    }
                    d.init = function() {
                        T.init.apply(this, arguments), this.current || (this.current = {}, fe.perspective && ne.perspective && (this.current.perspective = ne.perspective, y(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, d.set = function(N) {
                        C.call(this, N, function(A, M) {
                            this.current[A] = M
                        }), y(this.el, this.name, this.style(this.current)), this.redraw()
                    }, d.transition = function(N) {
                        var A = this.values(N);
                        this.tween = new ue({
                            current: this.current,
                            values: A,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var M, re = {};
                        for (M in this.current) re[M] = M in A ? A[M] : this.current[M];
                        this.active = !0, this.nextStyle = this.style(re)
                    }, d.fallback = function(N) {
                        var A = this.values(N);
                        this.tween = new ue({
                            current: this.current,
                            values: A,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, d.update = function() {
                        y(this.el, this.name, this.style(this.current))
                    }, d.style = function(N) {
                        var A, M = "";
                        for (A in N) M += A + "(" + N[A] + ") ";
                        return M
                    }, d.values = function(N) {
                        var A, M = {};
                        return C.call(this, N, function(re, se, ve) {
                            M[re] = se, this.current[re] === void 0 && (A = 0, ~re.indexOf("scale") && (A = 1), this.current[re] = this.convert(A, ve))
                        }), M
                    }
                }),
                O = p(function(d) {
                    function T(Q) {
                        se.push(Q) === 1 && U(C)
                    }

                    function C() {
                        var Q, ce, le, we = se.length;
                        if (we)
                            for (U(C), ce = B(), Q = we; Q--;) le = se[Q], le && le.render(ce)
                    }

                    function N(Q) {
                        var ce, le = e.inArray(Q, se);
                        le >= 0 && (ce = se.slice(le + 1), se.length = le, ce.length && (se = se.concat(ce)))
                    }

                    function A(Q) {
                        return Math.round(Q * ve) / ve
                    }

                    function M(Q, ce, le) {
                        return i(Q[0] + le * (ce[0] - Q[0]), Q[1] + le * (ce[1] - Q[1]), Q[2] + le * (ce[2] - Q[2]))
                    }
                    var re = {
                        ease: _.ease[1],
                        from: 0,
                        to: 1
                    };
                    d.init = function(Q) {
                        this.duration = Q.duration || 0, this.delay = Q.delay || 0;
                        var ce = Q.ease || re.ease;
                        _[ce] && (ce = _[ce][1]), typeof ce != "function" && (ce = re.ease), this.ease = ce, this.update = Q.update || o, this.complete = Q.complete || o, this.context = Q.context || this, this.name = Q.name;
                        var le = Q.from,
                            we = Q.to;
                        le === void 0 && (le = re.from), we === void 0 && (we = re.to), this.unit = Q.unit || "", typeof le == "number" && typeof we == "number" ? (this.begin = le, this.change = we - le) : this.format(we, le), this.value = this.begin + this.unit, this.start = B(), Q.autoplay !== !1 && this.play()
                    }, d.play = function() {
                        this.active || (this.start || (this.start = B()), this.active = !0, T(this))
                    }, d.stop = function() {
                        this.active && (this.active = !1, N(this))
                    }, d.render = function(Q) {
                        var ce, le = Q - this.start;
                        if (this.delay) {
                            if (le <= this.delay) return;
                            le -= this.delay
                        }
                        if (le < this.duration) {
                            var we = this.ease(le, 0, 1, this.duration);
                            return ce = this.startRGB ? M(this.startRGB, this.endRGB, we) : A(this.begin + we * this.change), this.value = ce + this.unit, void this.update.call(this.context, this.value)
                        }
                        ce = this.endHex || this.begin + this.change, this.value = ce + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, d.format = function(Q, ce) {
                        if (ce += "", Q += "", Q.charAt(0) == "#") return this.startRGB = n(ce), this.endRGB = n(Q), this.endHex = Q, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var le = ce.replace(I, ""),
                                we = Q.replace(I, "");
                            le !== we && a("tween", ce, Q), this.unit = le
                        }
                        ce = parseFloat(ce), Q = parseFloat(Q), this.begin = this.value = ce, this.change = Q - ce
                    }, d.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var se = [],
                        ve = 1e3
                }),
                Y = p(O, function(d) {
                    d.init = function(T) {
                        this.duration = T.duration || 0, this.complete = T.complete || o, this.context = T.context, this.play()
                    }, d.render = function(T) {
                        var C = T - this.start;
                        C < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                ue = p(O, function(d, T) {
                    d.init = function(C) {
                        this.context = C.context, this.update = C.update, this.tweens = [], this.current = C.current;
                        var N, A;
                        for (N in C.values) A = C.values[N], this.current[N] !== A && this.tweens.push(new O({
                            name: N,
                            from: this.current[N],
                            to: A,
                            duration: C.duration,
                            delay: C.delay,
                            ease: C.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, d.render = function(C) {
                        var N, A, M = this.tweens.length,
                            re = !1;
                        for (N = M; N--;) A = this.tweens[N], A.context && (A.render(C), this.current[A.name] = A.value, re = !0);
                        return re ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, d.destroy = function() {
                        if (T.destroy.call(this), this.tweens) {
                            var C, N = this.tweens.length;
                            for (C = N; C--;) this.tweens[C].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                ne = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !H.transition,
                    agentTests: []
                };
            t.fallback = function(d) {
                if (!H.transition) return ne.fallback = !0;
                ne.agentTests.push("(" + d + ")");
                var T = new RegExp(ne.agentTests.join("|"), "i");
                ne.fallback = T.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(d) {
                return new O(d)
            }, t.delay = function(d, T, C) {
                return new Y({
                    complete: T,
                    duration: d,
                    context: C
                })
            }, e.fn.tram = function(d) {
                return t.call(null, this, d)
            };
            var y = e.style,
                W = e.css,
                J = {
                    transform: H.transform && H.transform.css
                },
                z = {
                    color: [l, P],
                    background: [l, P, "background-color"],
                    "outline-color": [l, P],
                    "border-color": [l, P],
                    "border-top-color": [l, P],
                    "border-right-color": [l, P],
                    "border-bottom-color": [l, P],
                    "border-left-color": [l, P],
                    "border-width": [v, D],
                    "border-top-width": [v, D],
                    "border-right-width": [v, D],
                    "border-bottom-width": [v, D],
                    "border-left-width": [v, D],
                    "border-spacing": [v, D],
                    "letter-spacing": [v, D],
                    margin: [v, D],
                    "margin-top": [v, D],
                    "margin-right": [v, D],
                    "margin-bottom": [v, D],
                    "margin-left": [v, D],
                    padding: [v, D],
                    "padding-top": [v, D],
                    "padding-right": [v, D],
                    "padding-bottom": [v, D],
                    "padding-left": [v, D],
                    "outline-width": [v, D],
                    opacity: [v, R],
                    top: [v, q],
                    right: [v, q],
                    bottom: [v, q],
                    left: [v, q],
                    "font-size": [v, q],
                    "text-indent": [v, q],
                    "word-spacing": [v, q],
                    width: [v, q],
                    "min-width": [v, q],
                    "max-width": [v, q],
                    height: [v, q],
                    "min-height": [v, q],
                    "max-height": [v, q],
                    "line-height": [v, j],
                    "scroll-top": [F, R, "scrollTop"],
                    "scroll-left": [F, R, "scrollLeft"]
                },
                fe = {};
            H.transform && (z.transform = [V], fe = {
                x: [q, "translateX"],
                y: [q, "translateY"],
                rotate: [K],
                rotateX: [K],
                rotateY: [K],
                scale: [R],
                scaleX: [R],
                scaleY: [R],
                skew: [K],
                skewX: [K],
                skewY: [K]
            }), H.transform && H.backface && (fe.z = [q, "translateZ"], fe.rotateZ = [K], fe.scaleZ = [R], fe.perspective = [D]);
            var Te = /ms/,
                Le = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Hs = c((dW, Ws) => {
        "use strict";
        var g_ = window.$,
            h_ = Mi() && g_.tram;
        Ws.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                s = r.slice,
                a = r.concat,
                u = n.toString,
                f = n.hasOwnProperty,
                E = r.forEach,
                p = r.map,
                _ = r.reduce,
                m = r.reduceRight,
                b = r.filter,
                w = r.every,
                x = r.some,
                I = r.indexOf,
                L = r.lastIndexOf,
                R = Array.isArray,
                P = Object.keys,
                D = i.bind,
                q = e.each = e.forEach = function(S, k, X) {
                    if (S == null) return S;
                    if (E && S.forEach === E) S.forEach(k, X);
                    else if (S.length === +S.length) {
                        for (var H = 0, te = S.length; H < te; H++)
                            if (k.call(X, S[H], H, S) === t) return
                    } else
                        for (var oe = e.keys(S), H = 0, te = oe.length; H < te; H++)
                            if (k.call(X, S[oe[H]], oe[H], S) === t) return;
                    return S
                };
            e.map = e.collect = function(S, k, X) {
                var H = [];
                return S == null ? H : p && S.map === p ? S.map(k, X) : (q(S, function(te, oe, U) {
                    H.push(k.call(X, te, oe, U))
                }), H)
            }, e.find = e.detect = function(S, k, X) {
                var H;
                return K(S, function(te, oe, U) {
                    if (k.call(X, te, oe, U)) return H = te, !0
                }), H
            }, e.filter = e.select = function(S, k, X) {
                var H = [];
                return S == null ? H : b && S.filter === b ? S.filter(k, X) : (q(S, function(te, oe, U) {
                    k.call(X, te, oe, U) && H.push(te)
                }), H)
            };
            var K = e.some = e.any = function(S, k, X) {
                k || (k = e.identity);
                var H = !1;
                return S == null ? H : x && S.some === x ? S.some(k, X) : (q(S, function(te, oe, U) {
                    if (H || (H = k.call(X, te, oe, U))) return t
                }), !!H)
            };
            e.contains = e.include = function(S, k) {
                return S == null ? !1 : I && S.indexOf === I ? S.indexOf(k) != -1 : K(S, function(X) {
                    return X === k
                })
            }, e.delay = function(S, k) {
                var X = s.call(arguments, 2);
                return setTimeout(function() {
                    return S.apply(null, X)
                }, k)
            }, e.defer = function(S) {
                return e.delay.apply(e, [S, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(S) {
                var k, X, H;
                return function() {
                    k || (k = !0, X = arguments, H = this, h_.frame(function() {
                        k = !1, S.apply(H, X)
                    }))
                }
            }, e.debounce = function(S, k, X) {
                var H, te, oe, U, B, h = function() {
                    var g = e.now() - U;
                    g < k ? H = setTimeout(h, k - g) : (H = null, X || (B = S.apply(oe, te), oe = te = null))
                };
                return function() {
                    oe = this, te = arguments, U = e.now();
                    var g = X && !H;
                    return H || (H = setTimeout(h, k)), g && (B = S.apply(oe, te), oe = te = null), B
                }
            }, e.defaults = function(S) {
                if (!e.isObject(S)) return S;
                for (var k = 1, X = arguments.length; k < X; k++) {
                    var H = arguments[k];
                    for (var te in H) S[te] === void 0 && (S[te] = H[te])
                }
                return S
            }, e.keys = function(S) {
                if (!e.isObject(S)) return [];
                if (P) return P(S);
                var k = [];
                for (var X in S) e.has(S, X) && k.push(X);
                return k
            }, e.has = function(S, k) {
                return f.call(S, k)
            }, e.isObject = function(S) {
                return S === Object(S)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/,
                Z = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                ee = /\\|'|\r|\n|\u2028|\u2029/g,
                ie = function(S) {
                    return "\\" + Z[S]
                },
                G = /^\s*(\w|\$)+\s*$/;
            return e.template = function(S, k, X) {
                !k && X && (k = X), k = e.defaults({}, k, e.templateSettings);
                var H = RegExp([(k.escape || j).source, (k.interpolate || j).source, (k.evaluate || j).source].join("|") + "|$", "g"),
                    te = 0,
                    oe = "__p+='";
                S.replace(H, function(g, v, l, F, V) {
                    return oe += S.slice(te, V).replace(ee, ie), te = V + g.length, v ? oe += `'+
((__t=(` + v + `))==null?'':_.escape(__t))+
'` : l ? oe += `'+
((__t=(` + l + `))==null?'':__t)+
'` : F && (oe += `';
` + F + `
__p+='`), g
                }), oe += `';
`;
                var U = k.variable;
                if (U) {
                    if (!G.test(U)) throw new Error("variable is not a bare identifier: " + U)
                } else oe = `with(obj||{}){
` + oe + `}
`, U = "obj";
                oe = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + oe + `return __p;
`;
                var B;
                try {
                    B = new Function(k.variable || "obj", "_", oe)
                } catch (g) {
                    throw g.source = oe, g
                }
                var h = function(g) {
                    return B.call(this, g, e)
                };
                return h.source = "function(" + U + `){
` + oe + "}", h
            }, e
        }()
    });
    var Fe = c((pW, $s) => {
        "use strict";
        var he = {},
            Ht = {},
            Bt = [],
            ki = window.Webflow || [],
            _t = window.jQuery,
            Ye = _t(window),
            v_ = _t(document),
            ot = _t.isFunction,
            Ke = he._ = Hs(),
            Xs = he.tram = Mi() && _t.tram,
            dn = !1,
            Gi = !1;
        Xs.config.hideBackface = !1;
        Xs.config.keepInherited = !0;
        he.define = function(e, t, r) {
            Ht[e] && zs(Ht[e]);
            var n = Ht[e] = t(_t, Ke, r) || {};
            return js(n), n
        };
        he.require = function(e) {
            return Ht[e]
        };

        function js(e) {
            he.env() && (ot(e.design) && Ye.on("__wf_design", e.design), ot(e.preview) && Ye.on("__wf_preview", e.preview)), ot(e.destroy) && Ye.on("__wf_destroy", e.destroy), e.ready && ot(e.ready) && m_(e)
        }

        function m_(e) {
            if (dn) {
                e.ready();
                return
            }
            Ke.contains(Bt, e.ready) || Bt.push(e.ready)
        }

        function zs(e) {
            ot(e.design) && Ye.off("__wf_design", e.design), ot(e.preview) && Ye.off("__wf_preview", e.preview), ot(e.destroy) && Ye.off("__wf_destroy", e.destroy), e.ready && ot(e.ready) && y_(e)
        }

        function y_(e) {
            Bt = Ke.filter(Bt, function(t) {
                return t !== e.ready
            })
        }
        he.push = function(e) {
            if (dn) {
                ot(e) && e();
                return
            }
            ki.push(e)
        };
        he.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var fn = navigator.userAgent.toLowerCase(),
            Ks = he.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            E_ = he.env.chrome = /chrome/.test(fn) && /Google/.test(navigator.vendor) && parseInt(fn.match(/chrome\/(\d+)\./)[1], 10),
            b_ = he.env.ios = /(ipod|iphone|ipad)/.test(fn);
        he.env.safari = /safari/.test(fn) && !E_ && !b_;
        var Di;
        Ks && v_.on("touchstart mousedown", function(e) {
            Di = e.target
        });
        he.validClick = Ks ? function(e) {
            return e === Di || _t.contains(e, Di)
        } : function() {
            return !0
        };
        var Ys = "resize.webflow orientationchange.webflow load.webflow",
            __ = "scroll.webflow " + Ys;
        he.resize = Vi(Ye, Ys);
        he.scroll = Vi(Ye, __);
        he.redraw = Vi();

        function Vi(e, t) {
            var r = [],
                n = {};
            return n.up = Ke.throttle(function(i) {
                Ke.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (Ke.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Ke.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        he.location = function(e) {
            window.location = e
        };
        he.env() && (he.location = function() {});
        he.ready = function() {
            dn = !0, Gi ? w_() : Ke.each(Bt, Bs), Ke.each(ki, Bs), he.resize.up()
        };

        function Bs(e) {
            ot(e) && e()
        }

        function w_() {
            Gi = !1, Ke.each(Ht, js)
        }
        var Lt;
        he.load = function(e) {
            Lt.then(e)
        };

        function Qs() {
            Lt && (Lt.reject(), Ye.off("load", Lt.resolve)), Lt = new _t.Deferred, Ye.on("load", Lt.resolve)
        }
        he.destroy = function(e) {
            e = e || {}, Gi = !0, Ye.triggerHandler("__wf_destroy"), e.domready != null && (dn = e.domready), Ke.each(Ht, zs), he.resize.off(), he.scroll.off(), he.redraw.off(), Bt = [], ki = [], Lt.state() === "pending" && Qs()
        };
        _t(he.ready);
        Qs();
        $s.exports = window.Webflow = he
    });
    var eu = c((gW, Js) => {
        "use strict";
        var Zs = Fe();
        Zs.define("brand", Js.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                s = window.location,
                a = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                f;
            t.ready = function() {
                var m = n.attr("data-wf-status"),
                    b = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(b) && s.hostname !== b && (m = !0), m && !a && (f = f || p(), _(), setTimeout(_, 500), e(r).off(u, E).on(u, E))
            };

            function E() {
                var m = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", m ? "display: none !important;" : "")
            }

            function p() {
                var m = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    w = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return m.append(b, w), m[0]
            }

            function _() {
                var m = i.children(o),
                    b = m.length && m.get(0) === f,
                    w = Zs.env("editor");
                if (b) {
                    w && m.remove();
                    return
                }
                m.length && m.remove(), w || i.append(f)
            }
            return t
        })
    });
    var ru = c((hW, tu) => {
        "use strict";
        var Ui = Fe();
        Ui.define("edit", tu.exports = function(e, t, r) {
            if (r = r || {}, (Ui.env("test") || Ui.env("frame")) && !r.fixture && !I_()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                s = document.location,
                a = "hashchange",
                u, f = r.load || _,
                E = !1;
            try {
                E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            E ? f() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && f() : i.on(a, p).triggerHandler(a);

            function p() {
                u || /\?edit/.test(s.hash) && f()
            }

            function _() {
                u = !0, window.WebflowEditor = !0, i.off(a, p), L(function(P) {
                    e.ajax({
                        url: I("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: m(P)
                    })
                })
            }

            function m(P) {
                return function(D) {
                    if (!D) {
                        console.error("Could not load editor data");
                        return
                    }
                    D.thirdPartyCookiesSupported = P, b(x(D.scriptPath), function() {
                        window.WebflowEditor(D)
                    })
                }
            }

            function b(P, D) {
                e.ajax({
                    type: "GET",
                    url: P,
                    dataType: "script",
                    cache: !0
                }).then(D, w)
            }

            function w(P, D, q) {
                throw console.error("Could not load editor script: " + D), q
            }

            function x(P) {
                return P.indexOf("//") >= 0 ? P : I("https://editor-api.webflow.com" + P)
            }

            function I(P) {
                return P.replace(/([^:])\/\//g, "$1/")
            }

            function L(P) {
                var D = window.document.createElement("iframe");
                D.src = "https://webflow.com/site/third-party-cookie-check.html", D.style.display = "none", D.sandbox = "allow-scripts allow-same-origin";
                var q = function(K) {
                    K.data === "WF_third_party_cookies_unsupported" ? (R(D, q), P(!1)) : K.data === "WF_third_party_cookies_supported" && (R(D, q), P(!0))
                };
                D.onerror = function() {
                    R(D, q), P(!1)
                }, window.addEventListener("message", q, !1), window.document.body.appendChild(D)
            }

            function R(P, D) {
                window.removeEventListener("message", D, !1), P.remove()
            }
            return n
        });

        function I_() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var iu = c((vW, nu) => {
        "use strict";
        var T_ = Fe();
        T_.define("focus-visible", nu.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function a(R) {
                    return !!(R && R !== document && R.nodeName !== "HTML" && R.nodeName !== "BODY" && "classList" in R && "contains" in R.classList)
                }

                function u(R) {
                    var P = R.type,
                        D = R.tagName;
                    return !!(D === "INPUT" && s[P] && !R.readOnly || D === "TEXTAREA" && !R.readOnly || R.isContentEditable)
                }

                function f(R) {
                    R.getAttribute("data-wf-focus-visible") || R.setAttribute("data-wf-focus-visible", "true")
                }

                function E(R) {
                    R.getAttribute("data-wf-focus-visible") && R.removeAttribute("data-wf-focus-visible")
                }

                function p(R) {
                    R.metaKey || R.altKey || R.ctrlKey || (a(r.activeElement) && f(r.activeElement), n = !0)
                }

                function _() {
                    n = !1
                }

                function m(R) {
                    a(R.target) && (n || u(R.target)) && f(R.target)
                }

                function b(R) {
                    a(R.target) && R.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), E(R.target))
                }

                function w() {
                    document.visibilityState === "hidden" && (i && (n = !0), x())
                }

                function x() {
                    document.addEventListener("mousemove", L), document.addEventListener("mousedown", L), document.addEventListener("mouseup", L), document.addEventListener("pointermove", L), document.addEventListener("pointerdown", L), document.addEventListener("pointerup", L), document.addEventListener("touchmove", L), document.addEventListener("touchstart", L), document.addEventListener("touchend", L)
                }

                function I() {
                    document.removeEventListener("mousemove", L), document.removeEventListener("mousedown", L), document.removeEventListener("mouseup", L), document.removeEventListener("pointermove", L), document.removeEventListener("pointerdown", L), document.removeEventListener("pointerup", L), document.removeEventListener("touchmove", L), document.removeEventListener("touchstart", L), document.removeEventListener("touchend", L)
                }

                function L(R) {
                    R.target.nodeName && R.target.nodeName.toLowerCase() === "html" || (n = !1, I())
                }
                document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("pointerdown", _, !0), document.addEventListener("touchstart", _, !0), document.addEventListener("visibilitychange", w, !0), x(), r.addEventListener("focus", m, !0), r.addEventListener("blur", b, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var su = c((mW, au) => {
        "use strict";
        var ou = Fe();
        ou.define("focus", au.exports = function() {
            var e = [],
                t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var a = s.target,
                    u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && ou.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var lu = c((yW, cu) => {
        "use strict";
        var Wi = window.jQuery,
            at = {},
            pn = [],
            uu = ".w-ix",
            gn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Wi(t).triggerHandler(at.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Wi(t).triggerHandler(at.types.OUTRO))
                }
            };
        at.triggers = {};
        at.types = {
            INTRO: "w-ix-intro" + uu,
            OUTRO: "w-ix-outro" + uu
        };
        at.init = function() {
            for (var e = pn.length, t = 0; t < e; t++) {
                var r = pn[t];
                r[0](0, r[1])
            }
            pn = [], Wi.extend(at.triggers, gn)
        };
        at.async = function() {
            for (var e in gn) {
                var t = gn[e];
                gn.hasOwnProperty(e) && (at.triggers[e] = function(r, n) {
                    pn.push([t, n])
                })
            }
        };
        at.async();
        cu.exports = at
    });
    var wr = c((EW, pu) => {
        "use strict";
        var Hi = lu();

        function fu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var x_ = window.jQuery,
            hn = {},
            du = ".w-ix",
            O_ = {
                reset: function(e, t) {
                    Hi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Hi.triggers.intro(e, t), fu(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Hi.triggers.outro(e, t), fu(t, "COMPONENT_INACTIVE")
                }
            };
        hn.triggers = {};
        hn.types = {
            INTRO: "w-ix-intro" + du,
            OUTRO: "w-ix-outro" + du
        };
        x_.extend(hn.triggers, O_);
        pu.exports = hn
    });
    var gu = c((bW, gt) => {
        function Bi(e) {
            return gt.exports = Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, gt.exports.__esModule = !0, gt.exports.default = gt.exports, Bi(e)
        }
        gt.exports = Bi, gt.exports.__esModule = !0, gt.exports.default = gt.exports
    });
    var vn = c((_W, Ir) => {
        var A_ = gu().default;

        function hu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (hu = function(i) {
                return i ? r : t
            })(e)
        }

        function S_(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || A_(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = hu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        Ir.exports = S_, Ir.exports.__esModule = !0, Ir.exports.default = Ir.exports
    });
    var vu = c((wW, Tr) => {
        function C_(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Tr.exports = C_, Tr.exports.__esModule = !0, Tr.exports.default = Tr.exports
    });
    var Ee = c((IW, mu) => {
        var mn = function(e) {
            return e && e.Math == Math && e
        };
        mu.exports = mn(typeof globalThis == "object" && globalThis) || mn(typeof window == "object" && window) || mn(typeof self == "object" && self) || mn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Xt = c((TW, yu) => {
        yu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Nt = c((xW, Eu) => {
        var R_ = Xt();
        Eu.exports = !R_(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var yn = c((OW, bu) => {
        var xr = Function.prototype.call;
        bu.exports = xr.bind ? xr.bind(xr) : function() {
            return xr.apply(xr, arguments)
        }
    });
    var Tu = c(Iu => {
        "use strict";
        var _u = {}.propertyIsEnumerable,
            wu = Object.getOwnPropertyDescriptor,
            L_ = wu && !_u.call({
                1: 2
            }, 1);
        Iu.f = L_ ? function(t) {
            var r = wu(this, t);
            return !!r && r.enumerable
        } : _u
    });
    var Xi = c((SW, xu) => {
        xu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Qe = c((CW, Au) => {
        var Ou = Function.prototype,
            ji = Ou.bind,
            zi = Ou.call,
            N_ = ji && ji.bind(zi);
        Au.exports = ji ? function(e) {
            return e && N_(zi, e)
        } : function(e) {
            return e && function() {
                return zi.apply(e, arguments)
            }
        }
    });
    var Ru = c((RW, Cu) => {
        var Su = Qe(),
            P_ = Su({}.toString),
            q_ = Su("".slice);
        Cu.exports = function(e) {
            return q_(P_(e), 8, -1)
        }
    });
    var Nu = c((LW, Lu) => {
        var F_ = Ee(),
            M_ = Qe(),
            D_ = Xt(),
            k_ = Ru(),
            Ki = F_.Object,
            G_ = M_("".split);
        Lu.exports = D_(function() {
            return !Ki("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return k_(e) == "String" ? G_(e, "") : Ki(e)
        } : Ki
    });
    var Yi = c((NW, Pu) => {
        var V_ = Ee(),
            U_ = V_.TypeError;
        Pu.exports = function(e) {
            if (e == null) throw U_("Can't call method on " + e);
            return e
        }
    });
    var Or = c((PW, qu) => {
        var W_ = Nu(),
            H_ = Yi();
        qu.exports = function(e) {
            return W_(H_(e))
        }
    });
    var st = c((qW, Fu) => {
        Fu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var jt = c((FW, Mu) => {
        var B_ = st();
        Mu.exports = function(e) {
            return typeof e == "object" ? e !== null : B_(e)
        }
    });
    var Ar = c((MW, Du) => {
        var Qi = Ee(),
            X_ = st(),
            j_ = function(e) {
                return X_(e) ? e : void 0
            };
        Du.exports = function(e, t) {
            return arguments.length < 2 ? j_(Qi[e]) : Qi[e] && Qi[e][t]
        }
    });
    var Gu = c((DW, ku) => {
        var z_ = Qe();
        ku.exports = z_({}.isPrototypeOf)
    });
    var Uu = c((kW, Vu) => {
        var K_ = Ar();
        Vu.exports = K_("navigator", "userAgent") || ""
    });
    var Ku = c((GW, zu) => {
        var ju = Ee(),
            $i = Uu(),
            Wu = ju.process,
            Hu = ju.Deno,
            Bu = Wu && Wu.versions || Hu && Hu.version,
            Xu = Bu && Bu.v8,
            $e, En;
        Xu && ($e = Xu.split("."), En = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
        !En && $i && ($e = $i.match(/Edge\/(\d+)/), (!$e || $e[1] >= 74) && ($e = $i.match(/Chrome\/(\d+)/), $e && (En = +$e[1])));
        zu.exports = En
    });
    var Zi = c((VW, Qu) => {
        var Yu = Ku(),
            Y_ = Xt();
        Qu.exports = !!Object.getOwnPropertySymbols && !Y_(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Yu && Yu < 41
        })
    });
    var Ji = c((UW, $u) => {
        var Q_ = Zi();
        $u.exports = Q_ && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var eo = c((WW, Zu) => {
        var $_ = Ee(),
            Z_ = Ar(),
            J_ = st(),
            ew = Gu(),
            tw = Ji(),
            rw = $_.Object;
        Zu.exports = tw ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = Z_("Symbol");
            return J_(t) && ew(t.prototype, rw(e))
        }
    });
    var ec = c((HW, Ju) => {
        var nw = Ee(),
            iw = nw.String;
        Ju.exports = function(e) {
            try {
                return iw(e)
            } catch {
                return "Object"
            }
        }
    });
    var rc = c((BW, tc) => {
        var ow = Ee(),
            aw = st(),
            sw = ec(),
            uw = ow.TypeError;
        tc.exports = function(e) {
            if (aw(e)) return e;
            throw uw(sw(e) + " is not a function")
        }
    });
    var ic = c((XW, nc) => {
        var cw = rc();
        nc.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : cw(r)
        }
    });
    var ac = c((jW, oc) => {
        var lw = Ee(),
            to = yn(),
            ro = st(),
            no = jt(),
            fw = lw.TypeError;
        oc.exports = function(e, t) {
            var r, n;
            if (t === "string" && ro(r = e.toString) && !no(n = to(r, e)) || ro(r = e.valueOf) && !no(n = to(r, e)) || t !== "string" && ro(r = e.toString) && !no(n = to(r, e))) return n;
            throw fw("Can't convert object to primitive value")
        }
    });
    var uc = c((zW, sc) => {
        sc.exports = !1
    });
    var bn = c((KW, lc) => {
        var cc = Ee(),
            dw = Object.defineProperty;
        lc.exports = function(e, t) {
            try {
                dw(cc, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                cc[e] = t
            }
            return t
        }
    });
    var _n = c((YW, dc) => {
        var pw = Ee(),
            gw = bn(),
            fc = "__core-js_shared__",
            hw = pw[fc] || gw(fc, {});
        dc.exports = hw
    });
    var io = c((QW, gc) => {
        var vw = uc(),
            pc = _n();
        (gc.exports = function(e, t) {
            return pc[e] || (pc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: vw ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var vc = c(($W, hc) => {
        var mw = Ee(),
            yw = Yi(),
            Ew = mw.Object;
        hc.exports = function(e) {
            return Ew(yw(e))
        }
    });
    var wt = c((ZW, mc) => {
        var bw = Qe(),
            _w = vc(),
            ww = bw({}.hasOwnProperty);
        mc.exports = Object.hasOwn || function(t, r) {
            return ww(_w(t), r)
        }
    });
    var oo = c((JW, yc) => {
        var Iw = Qe(),
            Tw = 0,
            xw = Math.random(),
            Ow = Iw(1.toString);
        yc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Ow(++Tw + xw, 36)
        }
    });
    var ao = c((eH, Ic) => {
        var Aw = Ee(),
            Sw = io(),
            Ec = wt(),
            Cw = oo(),
            bc = Zi(),
            wc = Ji(),
            zt = Sw("wks"),
            Pt = Aw.Symbol,
            _c = Pt && Pt.for,
            Rw = wc ? Pt : Pt && Pt.withoutSetter || Cw;
        Ic.exports = function(e) {
            if (!Ec(zt, e) || !(bc || typeof zt[e] == "string")) {
                var t = "Symbol." + e;
                bc && Ec(Pt, e) ? zt[e] = Pt[e] : wc && _c ? zt[e] = _c(t) : zt[e] = Rw(t)
            }
            return zt[e]
        }
    });
    var Ac = c((tH, Oc) => {
        var Lw = Ee(),
            Nw = yn(),
            Tc = jt(),
            xc = eo(),
            Pw = ic(),
            qw = ac(),
            Fw = ao(),
            Mw = Lw.TypeError,
            Dw = Fw("toPrimitive");
        Oc.exports = function(e, t) {
            if (!Tc(e) || xc(e)) return e;
            var r = Pw(e, Dw),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = Nw(r, e, t), !Tc(n) || xc(n)) return n;
                throw Mw("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), qw(e, t)
        }
    });
    var so = c((rH, Sc) => {
        var kw = Ac(),
            Gw = eo();
        Sc.exports = function(e) {
            var t = kw(e, "string");
            return Gw(t) ? t : t + ""
        }
    });
    var co = c((nH, Rc) => {
        var Vw = Ee(),
            Cc = jt(),
            uo = Vw.document,
            Uw = Cc(uo) && Cc(uo.createElement);
        Rc.exports = function(e) {
            return Uw ? uo.createElement(e) : {}
        }
    });
    var lo = c((iH, Lc) => {
        var Ww = Nt(),
            Hw = Xt(),
            Bw = co();
        Lc.exports = !Ww && !Hw(function() {
            return Object.defineProperty(Bw("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var fo = c(Pc => {
        var Xw = Nt(),
            jw = yn(),
            zw = Tu(),
            Kw = Xi(),
            Yw = Or(),
            Qw = so(),
            $w = wt(),
            Zw = lo(),
            Nc = Object.getOwnPropertyDescriptor;
        Pc.f = Xw ? Nc : function(t, r) {
            if (t = Yw(t), r = Qw(r), Zw) try {
                return Nc(t, r)
            } catch {}
            if ($w(t, r)) return Kw(!jw(zw.f, t, r), t[r])
        }
    });
    var Sr = c((aH, Fc) => {
        var qc = Ee(),
            Jw = jt(),
            eI = qc.String,
            tI = qc.TypeError;
        Fc.exports = function(e) {
            if (Jw(e)) return e;
            throw tI(eI(e) + " is not an object")
        }
    });
    var Cr = c(kc => {
        var rI = Ee(),
            nI = Nt(),
            iI = lo(),
            Mc = Sr(),
            oI = so(),
            aI = rI.TypeError,
            Dc = Object.defineProperty;
        kc.f = nI ? Dc : function(t, r, n) {
            if (Mc(t), r = oI(r), Mc(n), iI) try {
                return Dc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw aI("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var wn = c((uH, Gc) => {
        var sI = Nt(),
            uI = Cr(),
            cI = Xi();
        Gc.exports = sI ? function(e, t, r) {
            return uI.f(e, t, cI(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var go = c((cH, Vc) => {
        var lI = Qe(),
            fI = st(),
            po = _n(),
            dI = lI(Function.toString);
        fI(po.inspectSource) || (po.inspectSource = function(e) {
            return dI(e)
        });
        Vc.exports = po.inspectSource
    });
    var Hc = c((lH, Wc) => {
        var pI = Ee(),
            gI = st(),
            hI = go(),
            Uc = pI.WeakMap;
        Wc.exports = gI(Uc) && /native code/.test(hI(Uc))
    });
    var ho = c((fH, Xc) => {
        var vI = io(),
            mI = oo(),
            Bc = vI("keys");
        Xc.exports = function(e) {
            return Bc[e] || (Bc[e] = mI(e))
        }
    });
    var In = c((dH, jc) => {
        jc.exports = {}
    });
    var Zc = c((pH, $c) => {
        var yI = Hc(),
            Qc = Ee(),
            vo = Qe(),
            EI = jt(),
            bI = wn(),
            mo = wt(),
            yo = _n(),
            _I = ho(),
            wI = In(),
            zc = "Object already initialized",
            bo = Qc.TypeError,
            II = Qc.WeakMap,
            Tn, Rr, xn, TI = function(e) {
                return xn(e) ? Rr(e) : Tn(e, {})
            },
            xI = function(e) {
                return function(t) {
                    var r;
                    if (!EI(t) || (r = Rr(t)).type !== e) throw bo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        yI || yo.state ? (It = yo.state || (yo.state = new II), Kc = vo(It.get), Eo = vo(It.has), Yc = vo(It.set), Tn = function(e, t) {
            if (Eo(It, e)) throw new bo(zc);
            return t.facade = e, Yc(It, e, t), t
        }, Rr = function(e) {
            return Kc(It, e) || {}
        }, xn = function(e) {
            return Eo(It, e)
        }) : (qt = _I("state"), wI[qt] = !0, Tn = function(e, t) {
            if (mo(e, qt)) throw new bo(zc);
            return t.facade = e, bI(e, qt, t), t
        }, Rr = function(e) {
            return mo(e, qt) ? e[qt] : {}
        }, xn = function(e) {
            return mo(e, qt)
        });
        var It, Kc, Eo, Yc, qt;
        $c.exports = {
            set: Tn,
            get: Rr,
            has: xn,
            enforce: TI,
            getterFor: xI
        }
    });
    var tl = c((gH, el) => {
        var _o = Nt(),
            OI = wt(),
            Jc = Function.prototype,
            AI = _o && Object.getOwnPropertyDescriptor,
            wo = OI(Jc, "name"),
            SI = wo && function() {}.name === "something",
            CI = wo && (!_o || _o && AI(Jc, "name").configurable);
        el.exports = {
            EXISTS: wo,
            PROPER: SI,
            CONFIGURABLE: CI
        }
    });
    var al = c((hH, ol) => {
        var RI = Ee(),
            rl = st(),
            LI = wt(),
            nl = wn(),
            NI = bn(),
            PI = go(),
            il = Zc(),
            qI = tl().CONFIGURABLE,
            FI = il.get,
            MI = il.enforce,
            DI = String(String).split("String");
        (ol.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                s = n ? !!n.noTargetGet : !1,
                a = n && n.name !== void 0 ? n.name : t,
                u;
            if (rl(r) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!LI(r, "name") || qI && r.name !== a) && nl(r, "name", a), u = MI(r), u.source || (u.source = DI.join(typeof a == "string" ? a : ""))), e === RI) {
                o ? e[t] = r : NI(t, r);
                return
            } else i ? !s && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : nl(e, t, r)
        })(Function.prototype, "toString", function() {
            return rl(this) && FI(this).source || PI(this)
        })
    });
    var Io = c((vH, sl) => {
        var kI = Math.ceil,
            GI = Math.floor;
        sl.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? GI : kI)(t)
        }
    });
    var cl = c((mH, ul) => {
        var VI = Io(),
            UI = Math.max,
            WI = Math.min;
        ul.exports = function(e, t) {
            var r = VI(e);
            return r < 0 ? UI(r + t, 0) : WI(r, t)
        }
    });
    var fl = c((yH, ll) => {
        var HI = Io(),
            BI = Math.min;
        ll.exports = function(e) {
            return e > 0 ? BI(HI(e), 9007199254740991) : 0
        }
    });
    var pl = c((EH, dl) => {
        var XI = fl();
        dl.exports = function(e) {
            return XI(e.length)
        }
    });
    var To = c((bH, hl) => {
        var jI = Or(),
            zI = cl(),
            KI = pl(),
            gl = function(e) {
                return function(t, r, n) {
                    var i = jI(t),
                        o = KI(i),
                        s = zI(n, o),
                        a;
                    if (e && r != r) {
                        for (; o > s;)
                            if (a = i[s++], a != a) return !0
                    } else
                        for (; o > s; s++)
                            if ((e || s in i) && i[s] === r) return e || s || 0;
                    return !e && -1
                }
            };
        hl.exports = {
            includes: gl(!0),
            indexOf: gl(!1)
        }
    });
    var Oo = c((_H, ml) => {
        var YI = Qe(),
            xo = wt(),
            QI = Or(),
            $I = To().indexOf,
            ZI = In(),
            vl = YI([].push);
        ml.exports = function(e, t) {
            var r = QI(e),
                n = 0,
                i = [],
                o;
            for (o in r) !xo(ZI, o) && xo(r, o) && vl(i, o);
            for (; t.length > n;) xo(r, o = t[n++]) && (~$I(i, o) || vl(i, o));
            return i
        }
    });
    var On = c((wH, yl) => {
        yl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var bl = c(El => {
        var JI = Oo(),
            eT = On(),
            tT = eT.concat("length", "prototype");
        El.f = Object.getOwnPropertyNames || function(t) {
            return JI(t, tT)
        }
    });
    var wl = c(_l => {
        _l.f = Object.getOwnPropertySymbols
    });
    var Tl = c((xH, Il) => {
        var rT = Ar(),
            nT = Qe(),
            iT = bl(),
            oT = wl(),
            aT = Sr(),
            sT = nT([].concat);
        Il.exports = rT("Reflect", "ownKeys") || function(t) {
            var r = iT.f(aT(t)),
                n = oT.f;
            return n ? sT(r, n(t)) : r
        }
    });
    var Ol = c((OH, xl) => {
        var uT = wt(),
            cT = Tl(),
            lT = fo(),
            fT = Cr();
        xl.exports = function(e, t) {
            for (var r = cT(t), n = fT.f, i = lT.f, o = 0; o < r.length; o++) {
                var s = r[o];
                uT(e, s) || n(e, s, i(t, s))
            }
        }
    });
    var Sl = c((AH, Al) => {
        var dT = Xt(),
            pT = st(),
            gT = /#|\.prototype\./,
            Lr = function(e, t) {
                var r = vT[hT(e)];
                return r == yT ? !0 : r == mT ? !1 : pT(t) ? dT(t) : !!t
            },
            hT = Lr.normalize = function(e) {
                return String(e).replace(gT, ".").toLowerCase()
            },
            vT = Lr.data = {},
            mT = Lr.NATIVE = "N",
            yT = Lr.POLYFILL = "P";
        Al.exports = Lr
    });
    var Rl = c((SH, Cl) => {
        var Ao = Ee(),
            ET = fo().f,
            bT = wn(),
            _T = al(),
            wT = bn(),
            IT = Ol(),
            TT = Sl();
        Cl.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, s, a, u, f, E;
            if (n ? s = Ao : i ? s = Ao[r] || wT(r, {}) : s = (Ao[r] || {}).prototype, s)
                for (a in t) {
                    if (f = t[a], e.noTargetGet ? (E = ET(s, a), u = E && E.value) : u = s[a], o = TT(n ? a : r + (i ? "." : "#") + a, e.forced), !o && u !== void 0) {
                        if (typeof f == typeof u) continue;
                        IT(f, u)
                    }(e.sham || u && u.sham) && bT(f, "sham", !0), _T(s, a, f, e)
                }
        }
    });
    var Nl = c((CH, Ll) => {
        var xT = Oo(),
            OT = On();
        Ll.exports = Object.keys || function(t) {
            return xT(t, OT)
        }
    });
    var ql = c((RH, Pl) => {
        var AT = Nt(),
            ST = Cr(),
            CT = Sr(),
            RT = Or(),
            LT = Nl();
        Pl.exports = AT ? Object.defineProperties : function(t, r) {
            CT(t);
            for (var n = RT(r), i = LT(r), o = i.length, s = 0, a; o > s;) ST.f(t, a = i[s++], n[a]);
            return t
        }
    });
    var Ml = c((LH, Fl) => {
        var NT = Ar();
        Fl.exports = NT("document", "documentElement")
    });
    var Bl = c((NH, Hl) => {
        var PT = Sr(),
            qT = ql(),
            Dl = On(),
            FT = In(),
            MT = Ml(),
            DT = co(),
            kT = ho(),
            kl = ">",
            Gl = "<",
            Co = "prototype",
            Ro = "script",
            Ul = kT("IE_PROTO"),
            So = function() {},
            Wl = function(e) {
                return Gl + Ro + kl + e + Gl + "/" + Ro + kl
            },
            Vl = function(e) {
                e.write(Wl("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            GT = function() {
                var e = DT("iframe"),
                    t = "java" + Ro + ":",
                    r;
                return e.style.display = "none", MT.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Wl("document.F=Object")), r.close(), r.F
            },
            An, Sn = function() {
                try {
                    An = new ActiveXObject("htmlfile")
                } catch {}
                Sn = typeof document < "u" ? document.domain && An ? Vl(An) : GT() : Vl(An);
                for (var e = Dl.length; e--;) delete Sn[Co][Dl[e]];
                return Sn()
            };
        FT[Ul] = !0;
        Hl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (So[Co] = PT(t), n = new So, So[Co] = null, n[Ul] = t) : n = Sn(), r === void 0 ? n : qT(n, r)
        }
    });
    var jl = c((PH, Xl) => {
        var VT = ao(),
            UT = Bl(),
            WT = Cr(),
            Lo = VT("unscopables"),
            No = Array.prototype;
        No[Lo] == null && WT.f(No, Lo, {
            configurable: !0,
            value: UT(null)
        });
        Xl.exports = function(e) {
            No[Lo][e] = !0
        }
    });
    var zl = c(() => {
        "use strict";
        var HT = Rl(),
            BT = To().includes,
            XT = jl();
        HT({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return BT(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        XT("includes")
    });
    var Yl = c((MH, Kl) => {
        var jT = Ee(),
            zT = Qe();
        Kl.exports = function(e, t) {
            return zT(jT[e].prototype[t])
        }
    });
    var $l = c((DH, Ql) => {
        zl();
        var KT = Yl();
        Ql.exports = KT("Array", "includes")
    });
    var Jl = c((kH, Zl) => {
        var YT = $l();
        Zl.exports = YT
    });
    var tf = c((GH, ef) => {
        var QT = Jl();
        ef.exports = QT
    });
    var Po = c((VH, rf) => {
        var $T = typeof global == "object" && global && global.Object === Object && global;
        rf.exports = $T
    });
    var Ze = c((UH, nf) => {
        var ZT = Po(),
            JT = typeof self == "object" && self && self.Object === Object && self,
            e0 = ZT || JT || Function("return this")();
        nf.exports = e0
    });
    var Kt = c((WH, of ) => {
        var t0 = Ze(),
            r0 = t0.Symbol; of .exports = r0
    });
    var cf = c((HH, uf) => {
        var af = Kt(),
            sf = Object.prototype,
            n0 = sf.hasOwnProperty,
            i0 = sf.toString,
            Nr = af ? af.toStringTag : void 0;

        function o0(e) {
            var t = n0.call(e, Nr),
                r = e[Nr];
            try {
                e[Nr] = void 0;
                var n = !0
            } catch {}
            var i = i0.call(e);
            return n && (t ? e[Nr] = r : delete e[Nr]), i
        }
        uf.exports = o0
    });
    var ff = c((BH, lf) => {
        var a0 = Object.prototype,
            s0 = a0.toString;

        function u0(e) {
            return s0.call(e)
        }
        lf.exports = u0
    });
    var Tt = c((XH, gf) => {
        var df = Kt(),
            c0 = cf(),
            l0 = ff(),
            f0 = "[object Null]",
            d0 = "[object Undefined]",
            pf = df ? df.toStringTag : void 0;

        function p0(e) {
            return e == null ? e === void 0 ? d0 : f0 : pf && pf in Object(e) ? c0(e) : l0(e)
        }
        gf.exports = p0
    });
    var qo = c((jH, hf) => {
        function g0(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        hf.exports = g0
    });
    var Fo = c((zH, vf) => {
        var h0 = qo(),
            v0 = h0(Object.getPrototypeOf, Object);
        vf.exports = v0
    });
    var ht = c((KH, mf) => {
        function m0(e) {
            return e != null && typeof e == "object"
        }
        mf.exports = m0
    });
    var Mo = c((YH, Ef) => {
        var y0 = Tt(),
            E0 = Fo(),
            b0 = ht(),
            _0 = "[object Object]",
            w0 = Function.prototype,
            I0 = Object.prototype,
            yf = w0.toString,
            T0 = I0.hasOwnProperty,
            x0 = yf.call(Object);

        function O0(e) {
            if (!b0(e) || y0(e) != _0) return !1;
            var t = E0(e);
            if (t === null) return !0;
            var r = T0.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && yf.call(r) == x0
        }
        Ef.exports = O0
    });
    var bf = c(Do => {
        "use strict";
        Object.defineProperty(Do, "__esModule", {
            value: !0
        });
        Do.default = A0;

        function A0(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var _f = c((Go, ko) => {
        "use strict";
        Object.defineProperty(Go, "__esModule", {
            value: !0
        });
        var S0 = bf(),
            C0 = R0(S0);

        function R0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Yt;
        typeof self < "u" ? Yt = self : typeof window < "u" ? Yt = window : typeof global < "u" ? Yt = global : typeof ko < "u" ? Yt = ko : Yt = Function("return this")();
        var L0 = (0, C0.default)(Yt);
        Go.default = L0
    });
    var Vo = c(Pr => {
        "use strict";
        Pr.__esModule = !0;
        Pr.ActionTypes = void 0;
        Pr.default = xf;
        var N0 = Mo(),
            P0 = Tf(N0),
            q0 = _f(),
            wf = Tf(q0);

        function Tf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var If = Pr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function xf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(xf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                s = [],
                a = s,
                u = !1;

            function f() {
                a === s && (a = s.slice())
            }

            function E() {
                return o
            }

            function p(w) {
                if (typeof w != "function") throw new Error("Expected listener to be a function.");
                var x = !0;
                return f(), a.push(w),
                    function() {
                        if (x) {
                            x = !1, f();
                            var L = a.indexOf(w);
                            a.splice(L, 1)
                        }
                    }
            }

            function _(w) {
                if (!(0, P0.default)(w)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof w.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, w)
                } finally {
                    u = !1
                }
                for (var x = s = a, I = 0; I < x.length; I++) x[I]();
                return w
            }

            function m(w) {
                if (typeof w != "function") throw new Error("Expected the nextReducer to be a function.");
                i = w, _({
                    type: If.INIT
                })
            }

            function b() {
                var w, x = p;
                return w = {
                    subscribe: function(L) {
                        if (typeof L != "object") throw new TypeError("Expected the observer to be an object.");

                        function R() {
                            L.next && L.next(E())
                        }
                        R();
                        var P = x(R);
                        return {
                            unsubscribe: P
                        }
                    }
                }, w[wf.default] = function() {
                    return this
                }, w
            }
            return _({
                type: If.INIT
            }), n = {
                dispatch: _,
                subscribe: p,
                getState: E,
                replaceReducer: m
            }, n[wf.default] = b, n
        }
    });
    var Wo = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = F0;

        function F0(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var Sf = c(Ho => {
        "use strict";
        Ho.__esModule = !0;
        Ho.default = V0;
        var Of = Vo(),
            M0 = Mo(),
            JH = Af(M0),
            D0 = Wo(),
            eB = Af(D0);

        function Af(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function k0(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function G0(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: Of.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + Of.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function V0(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                G0(r)
            } catch (u) {
                a = u
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    E = arguments[1];
                if (a) throw a;
                if (!1) var p;
                for (var _ = !1, m = {}, b = 0; b < o.length; b++) {
                    var w = o[b],
                        x = r[w],
                        I = f[w],
                        L = x(I, E);
                    if (typeof L > "u") {
                        var R = k0(w, E);
                        throw new Error(R)
                    }
                    m[w] = L, _ = _ || L !== I
                }
                return _ ? m : f
            }
        }
    });
    var Rf = c(Bo => {
        "use strict";
        Bo.__esModule = !0;
        Bo.default = U0;

        function Cf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function U0(e, t) {
            if (typeof e == "function") return Cf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    s = e[o];
                typeof s == "function" && (n[o] = Cf(s, t))
            }
            return n
        }
    });
    var jo = c(Xo => {
        "use strict";
        Xo.__esModule = !0;
        Xo.default = W0;

        function W0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var Lf = c(zo => {
        "use strict";
        zo.__esModule = !0;
        var H0 = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        zo.default = z0;
        var B0 = jo(),
            X0 = j0(B0);

        function j0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function z0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, s) {
                    var a = n(i, o, s),
                        u = a.dispatch,
                        f = [],
                        E = {
                            getState: a.getState,
                            dispatch: function(_) {
                                return u(_)
                            }
                        };
                    return f = t.map(function(p) {
                        return p(E)
                    }), u = X0.default.apply(void 0, f)(a.dispatch), H0({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var Ko = c(Xe => {
        "use strict";
        Xe.__esModule = !0;
        Xe.compose = Xe.applyMiddleware = Xe.bindActionCreators = Xe.combineReducers = Xe.createStore = void 0;
        var K0 = Vo(),
            Y0 = Qt(K0),
            Q0 = Sf(),
            $0 = Qt(Q0),
            Z0 = Rf(),
            J0 = Qt(Z0),
            ex = Lf(),
            tx = Qt(ex),
            rx = jo(),
            nx = Qt(rx),
            ix = Wo(),
            oB = Qt(ix);

        function Qt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Xe.createStore = Y0.default;
        Xe.combineReducers = $0.default;
        Xe.bindActionCreators = J0.default;
        Xe.applyMiddleware = tx.default;
        Xe.compose = nx.default
    });
    var Je, Yo, ut, ox, ax, Cn, sx, Qo = ye(() => {
        "use strict";
        Je = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Yo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, ut = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, ox = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, ax = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Cn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, sx = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Ue, ux, Rn = ye(() => {
        "use strict";
        Ue = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, ux = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var cx, Nf = ye(() => {
        "use strict";
        cx = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var lx, fx, dx, px, gx, hx, vx, $o, Pf = ye(() => {
        "use strict";
        Rn();
        ({
            TRANSFORM_MOVE: lx,
            TRANSFORM_SCALE: fx,
            TRANSFORM_ROTATE: dx,
            TRANSFORM_SKEW: px,
            STYLE_SIZE: gx,
            STYLE_FILTER: hx,
            STYLE_FONT_VARIATION: vx
        } = Ue), $o = {
            [lx]: !0,
            [fx]: !0,
            [dx]: !0,
            [px]: !0,
            [gx]: !0,
            [hx]: !0,
            [vx]: !0
        }
    });
    var xe = {};
    Ve(xe, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Px,
        IX2_ANIMATION_FRAME_CHANGED: () => Ax,
        IX2_CLEAR_REQUESTED: () => Tx,
        IX2_ELEMENT_STATE_CHANGED: () => Nx,
        IX2_EVENT_LISTENER_ADDED: () => xx,
        IX2_EVENT_STATE_CHANGED: () => Ox,
        IX2_INSTANCE_ADDED: () => Cx,
        IX2_INSTANCE_REMOVED: () => Lx,
        IX2_INSTANCE_STARTED: () => Rx,
        IX2_MEDIA_QUERIES_DEFINED: () => Fx,
        IX2_PARAMETER_CHANGED: () => Sx,
        IX2_PLAYBACK_REQUESTED: () => wx,
        IX2_PREVIEW_REQUESTED: () => _x,
        IX2_RAW_DATA_IMPORTED: () => mx,
        IX2_SESSION_INITIALIZED: () => yx,
        IX2_SESSION_STARTED: () => Ex,
        IX2_SESSION_STOPPED: () => bx,
        IX2_STOP_REQUESTED: () => Ix,
        IX2_TEST_FRAME_RENDERED: () => Mx,
        IX2_VIEWPORT_WIDTH_CHANGED: () => qx
    });
    var mx, yx, Ex, bx, _x, wx, Ix, Tx, xx, Ox, Ax, Sx, Cx, Rx, Lx, Nx, Px, qx, Fx, Mx, qf = ye(() => {
        "use strict";
        mx = "IX2_RAW_DATA_IMPORTED", yx = "IX2_SESSION_INITIALIZED", Ex = "IX2_SESSION_STARTED", bx = "IX2_SESSION_STOPPED", _x = "IX2_PREVIEW_REQUESTED", wx = "IX2_PLAYBACK_REQUESTED", Ix = "IX2_STOP_REQUESTED", Tx = "IX2_CLEAR_REQUESTED", xx = "IX2_EVENT_LISTENER_ADDED", Ox = "IX2_EVENT_STATE_CHANGED", Ax = "IX2_ANIMATION_FRAME_CHANGED", Sx = "IX2_PARAMETER_CHANGED", Cx = "IX2_INSTANCE_ADDED", Rx = "IX2_INSTANCE_STARTED", Lx = "IX2_INSTANCE_REMOVED", Nx = "IX2_ELEMENT_STATE_CHANGED", Px = "IX2_ACTION_LIST_PLAYBACK_CHANGED", qx = "IX2_VIEWPORT_WIDTH_CHANGED", Fx = "IX2_MEDIA_QUERIES_DEFINED", Mx = "IX2_TEST_FRAME_RENDERED"
    });
    var Ne = {};
    Ve(Ne, {
        ABSTRACT_NODE: () => qO,
        AUTO: () => IO,
        BACKGROUND: () => mO,
        BACKGROUND_COLOR: () => vO,
        BAR_DELIMITER: () => OO,
        BORDER_COLOR: () => yO,
        BOUNDARY_SELECTOR: () => Ux,
        CHILDREN: () => AO,
        COLON_DELIMITER: () => xO,
        COLOR: () => EO,
        COMMA_DELIMITER: () => TO,
        CONFIG_UNIT: () => Yx,
        CONFIG_VALUE: () => Xx,
        CONFIG_X_UNIT: () => jx,
        CONFIG_X_VALUE: () => Wx,
        CONFIG_Y_UNIT: () => zx,
        CONFIG_Y_VALUE: () => Hx,
        CONFIG_Z_UNIT: () => Kx,
        CONFIG_Z_VALUE: () => Bx,
        DISPLAY: () => bO,
        FILTER: () => dO,
        FLEX: () => _O,
        FONT_VARIATION_SETTINGS: () => pO,
        HEIGHT: () => hO,
        HTML_ELEMENT: () => NO,
        IMMEDIATE_CHILDREN: () => SO,
        IX2_ID_DELIMITER: () => Dx,
        OPACITY: () => fO,
        PARENT: () => RO,
        PLAIN_OBJECT: () => PO,
        PRESERVE_3D: () => LO,
        RENDER_GENERAL: () => MO,
        RENDER_PLUGIN: () => kO,
        RENDER_STYLE: () => DO,
        RENDER_TRANSFORM: () => FO,
        ROTATE_X: () => oO,
        ROTATE_Y: () => aO,
        ROTATE_Z: () => sO,
        SCALE_3D: () => iO,
        SCALE_X: () => tO,
        SCALE_Y: () => rO,
        SCALE_Z: () => nO,
        SIBLINGS: () => CO,
        SKEW: () => uO,
        SKEW_X: () => cO,
        SKEW_Y: () => lO,
        TRANSFORM: () => Qx,
        TRANSLATE_3D: () => eO,
        TRANSLATE_X: () => $x,
        TRANSLATE_Y: () => Zx,
        TRANSLATE_Z: () => Jx,
        WF_PAGE: () => kx,
        WIDTH: () => gO,
        WILL_CHANGE: () => wO,
        W_MOD_IX: () => Vx,
        W_MOD_JS: () => Gx
    });
    var Dx, kx, Gx, Vx, Ux, Wx, Hx, Bx, Xx, jx, zx, Kx, Yx, Qx, $x, Zx, Jx, eO, tO, rO, nO, iO, oO, aO, sO, uO, cO, lO, fO, dO, pO, gO, hO, vO, mO, yO, EO, bO, _O, wO, IO, TO, xO, OO, AO, SO, CO, RO, LO, NO, PO, qO, FO, MO, DO, kO, Ff = ye(() => {
        "use strict";
        Dx = "|", kx = "data-wf-page", Gx = "w-mod-js", Vx = "w-mod-ix", Ux = ".w-dyn-item", Wx = "xValue", Hx = "yValue", Bx = "zValue", Xx = "value", jx = "xUnit", zx = "yUnit", Kx = "zUnit", Yx = "unit", Qx = "transform", $x = "translateX", Zx = "translateY", Jx = "translateZ", eO = "translate3d", tO = "scaleX", rO = "scaleY", nO = "scaleZ", iO = "scale3d", oO = "rotateX", aO = "rotateY", sO = "rotateZ", uO = "skew", cO = "skewX", lO = "skewY", fO = "opacity", dO = "filter", pO = "font-variation-settings", gO = "width", hO = "height", vO = "backgroundColor", mO = "background", yO = "borderColor", EO = "color", bO = "display", _O = "flex", wO = "willChange", IO = "AUTO", TO = ",", xO = ":", OO = "|", AO = "CHILDREN", SO = "IMMEDIATE_CHILDREN", CO = "SIBLINGS", RO = "PARENT", LO = "preserve-3d", NO = "HTML_ELEMENT", PO = "PLAIN_OBJECT", qO = "ABSTRACT_NODE", FO = "RENDER_TRANSFORM", MO = "RENDER_GENERAL", DO = "RENDER_STYLE", kO = "RENDER_PLUGIN"
    });
    var Mf = {};
    Ve(Mf, {
        ActionAppliesTo: () => ux,
        ActionTypeConsts: () => Ue,
        EventAppliesTo: () => Yo,
        EventBasedOn: () => ut,
        EventContinuousMouseAxes: () => ox,
        EventLimitAffectedElements: () => ax,
        EventTypeConsts: () => Je,
        IX2EngineActionTypes: () => xe,
        IX2EngineConstants: () => Ne,
        InteractionTypeConsts: () => cx,
        QuickEffectDirectionConsts: () => sx,
        QuickEffectIds: () => Cn,
        ReducedMotionTypes: () => $o
    });
    var We = ye(() => {
        "use strict";
        Qo();
        Rn();
        Nf();
        Pf();
        qf();
        Ff();
        Rn();
        Qo()
    });
    var GO, Df, kf = ye(() => {
        "use strict";
        We();
        ({
            IX2_RAW_DATA_IMPORTED: GO
        } = xe), Df = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case GO:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var $t = c(_e => {
        "use strict";
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        var VO = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        _e.clone = Nn;
        _e.addLast = Uf;
        _e.addFirst = Wf;
        _e.removeLast = Hf;
        _e.removeFirst = Bf;
        _e.insert = Xf;
        _e.removeAt = jf;
        _e.replaceAt = zf;
        _e.getIn = Pn;
        _e.set = qn;
        _e.setIn = Fn;
        _e.update = Yf;
        _e.updateIn = Qf;
        _e.merge = $f;
        _e.mergeDeep = Zf;
        _e.mergeIn = Jf;
        _e.omit = ed;
        _e.addDefaults = td;
        var Gf = "INVALID_ARGS";

        function Vf(e) {
            throw new Error(e)
        }

        function Zo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var UO = {}.hasOwnProperty;

        function Nn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Zo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function He(e, t, r) {
            var n = r;
            n == null && Vf(Gf);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var f = s[u];
                if (f != null) {
                    var E = Zo(f);
                    if (E.length)
                        for (var p = 0; p <= E.length; p++) {
                            var _ = E[p];
                            if (!(e && n[_] !== void 0)) {
                                var m = f[_];
                                t && Ln(n[_]) && Ln(m) && (m = He(e, t, n[_], m)), !(m === void 0 || m === n[_]) && (i || (i = !0, n = Nn(n)), n[_] = m)
                            }
                        }
                }
            }
            return n
        }

        function Ln(e) {
            var t = typeof e > "u" ? "undefined" : VO(e);
            return e != null && (t === "object" || t === "function")
        }

        function Uf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Wf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Hf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Bf(e) {
            return e.length ? e.slice(1) : e
        }

        function Xf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function jf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function zf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Pn(e, t) {
            if (!Array.isArray(t) && Vf(Gf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function qn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Nn(i);
            return o[t] = r, o
        }

        function Kf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var s = Ln(e) && Ln(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Kf(s, t, r, n + 1)
            }
            return qn(e, o, i)
        }

        function Fn(e, t, r) {
            return t.length ? Kf(e, t, r, 0) : r
        }

        function Yf(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return qn(e, t, i)
        }

        function Qf(e, t, r) {
            var n = Pn(e, t),
                i = r(n);
            return Fn(e, t, i)
        }

        function $f(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? He.call.apply(He, [null, !1, !1, e, t, r, n, i, o].concat(a)) : He(!1, !1, e, t, r, n, i, o)
        }

        function Zf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? He.call.apply(He, [null, !1, !0, e, t, r, n, i, o].concat(a)) : He(!1, !0, e, t, r, n, i, o)
        }

        function Jf(e, t, r, n, i, o, s) {
            var a = Pn(e, t);
            a == null && (a = {});
            for (var u = void 0, f = arguments.length, E = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++) E[p - 7] = arguments[p];
            return E.length ? u = He.call.apply(He, [null, !1, !1, a, r, n, i, o, s].concat(E)) : u = He(!1, !1, a, r, n, i, o, s), Fn(e, t, u)
        }

        function ed(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (UO.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, s = Zo(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function td(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? He.call.apply(He, [null, !0, !1, e, t, r, n, i, o].concat(a)) : He(!0, !1, e, t, r, n, i, o)
        }
        var WO = {
            clone: Nn,
            addLast: Uf,
            addFirst: Wf,
            removeLast: Hf,
            removeFirst: Bf,
            insert: Xf,
            removeAt: jf,
            replaceAt: zf,
            getIn: Pn,
            set: qn,
            setIn: Fn,
            update: Yf,
            updateIn: Qf,
            merge: $f,
            mergeDeep: Zf,
            mergeIn: Jf,
            omit: ed,
            addDefaults: td
        };
        _e.default = WO
    });
    var nd, HO, BO, XO, jO, zO, rd, id, od = ye(() => {
        "use strict";
        We();
        nd = pe($t()), {
            IX2_PREVIEW_REQUESTED: HO,
            IX2_PLAYBACK_REQUESTED: BO,
            IX2_STOP_REQUESTED: XO,
            IX2_CLEAR_REQUESTED: jO
        } = xe, zO = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, rd = Object.create(null, {
            [HO]: {
                value: "preview"
            },
            [BO]: {
                value: "playback"
            },
            [XO]: {
                value: "stop"
            },
            [jO]: {
                value: "clear"
            }
        }), id = (e = zO, t) => {
            if (t.type in rd) {
                let r = [rd[t.type]];
                return (0, nd.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Me, KO, YO, QO, $O, ZO, JO, eA, tA, rA, nA, ad, iA, sd, ud = ye(() => {
        "use strict";
        We();
        Me = pe($t()), {
            IX2_SESSION_INITIALIZED: KO,
            IX2_SESSION_STARTED: YO,
            IX2_TEST_FRAME_RENDERED: QO,
            IX2_SESSION_STOPPED: $O,
            IX2_EVENT_LISTENER_ADDED: ZO,
            IX2_EVENT_STATE_CHANGED: JO,
            IX2_ANIMATION_FRAME_CHANGED: eA,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: tA,
            IX2_VIEWPORT_WIDTH_CHANGED: rA,
            IX2_MEDIA_QUERIES_DEFINED: nA
        } = xe, ad = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, iA = 20, sd = (e = ad, t) => {
            switch (t.type) {
                case KO:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Me.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case YO:
                    return (0, Me.set)(e, "active", !0);
                case QO:
                    {
                        let {
                            payload: {
                                step: r = iA
                            }
                        } = t;
                        return (0, Me.set)(e, "tick", e.tick + r)
                    }
                case $O:
                    return ad;
                case eA:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Me.set)(e, "tick", r)
                    }
                case ZO:
                    {
                        let r = (0, Me.addLast)(e.eventListeners, t.payload);
                        return (0, Me.set)(e, "eventListeners", r)
                    }
                case JO:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Me.setIn)(e, ["eventState", r], n)
                    }
                case tA:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Me.setIn)(e, ["playbackState", r], n)
                    }
                case rA:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let s = 0; s < i; s++) {
                            let {
                                key: a,
                                min: u,
                                max: f
                            } = n[s];
                            if (r >= u && r <= f) {
                                o = a;
                                break
                            }
                        }
                        return (0, Me.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case nA:
                    return (0, Me.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var ld = c((xB, cd) => {
        function oA() {
            this.__data__ = [], this.size = 0
        }
        cd.exports = oA
    });
    var Mn = c((OB, fd) => {
        function aA(e, t) {
            return e === t || e !== e && t !== t
        }
        fd.exports = aA
    });
    var qr = c((AB, dd) => {
        var sA = Mn();

        function uA(e, t) {
            for (var r = e.length; r--;)
                if (sA(e[r][0], t)) return r;
            return -1
        }
        dd.exports = uA
    });
    var gd = c((SB, pd) => {
        var cA = qr(),
            lA = Array.prototype,
            fA = lA.splice;

        function dA(e) {
            var t = this.__data__,
                r = cA(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : fA.call(t, r, 1), --this.size, !0
        }
        pd.exports = dA
    });
    var vd = c((CB, hd) => {
        var pA = qr();

        function gA(e) {
            var t = this.__data__,
                r = pA(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        hd.exports = gA
    });
    var yd = c((RB, md) => {
        var hA = qr();

        function vA(e) {
            return hA(this.__data__, e) > -1
        }
        md.exports = vA
    });
    var bd = c((LB, Ed) => {
        var mA = qr();

        function yA(e, t) {
            var r = this.__data__,
                n = mA(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        Ed.exports = yA
    });
    var Fr = c((NB, _d) => {
        var EA = ld(),
            bA = gd(),
            _A = vd(),
            wA = yd(),
            IA = bd();

        function Zt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = EA;
        Zt.prototype.delete = bA;
        Zt.prototype.get = _A;
        Zt.prototype.has = wA;
        Zt.prototype.set = IA;
        _d.exports = Zt
    });
    var Id = c((PB, wd) => {
        var TA = Fr();

        function xA() {
            this.__data__ = new TA, this.size = 0
        }
        wd.exports = xA
    });
    var xd = c((qB, Td) => {
        function OA(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        Td.exports = OA
    });
    var Ad = c((FB, Od) => {
        function AA(e) {
            return this.__data__.get(e)
        }
        Od.exports = AA
    });
    var Cd = c((MB, Sd) => {
        function SA(e) {
            return this.__data__.has(e)
        }
        Sd.exports = SA
    });
    var ct = c((DB, Rd) => {
        function CA(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        Rd.exports = CA
    });
    var Jo = c((kB, Ld) => {
        var RA = Tt(),
            LA = ct(),
            NA = "[object AsyncFunction]",
            PA = "[object Function]",
            qA = "[object GeneratorFunction]",
            FA = "[object Proxy]";

        function MA(e) {
            if (!LA(e)) return !1;
            var t = RA(e);
            return t == PA || t == qA || t == NA || t == FA
        }
        Ld.exports = MA
    });
    var Pd = c((GB, Nd) => {
        var DA = Ze(),
            kA = DA["__core-js_shared__"];
        Nd.exports = kA
    });
    var Md = c((VB, Fd) => {
        var ea = Pd(),
            qd = function() {
                var e = /[^.]+$/.exec(ea && ea.keys && ea.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function GA(e) {
            return !!qd && qd in e
        }
        Fd.exports = GA
    });
    var ta = c((UB, Dd) => {
        var VA = Function.prototype,
            UA = VA.toString;

        function WA(e) {
            if (e != null) {
                try {
                    return UA.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Dd.exports = WA
    });
    var Gd = c((WB, kd) => {
        var HA = Jo(),
            BA = Md(),
            XA = ct(),
            jA = ta(),
            zA = /[\\^$.*+?()[\]{}|]/g,
            KA = /^\[object .+?Constructor\]$/,
            YA = Function.prototype,
            QA = Object.prototype,
            $A = YA.toString,
            ZA = QA.hasOwnProperty,
            JA = RegExp("^" + $A.call(ZA).replace(zA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function eS(e) {
            if (!XA(e) || BA(e)) return !1;
            var t = HA(e) ? JA : KA;
            return t.test(jA(e))
        }
        kd.exports = eS
    });
    var Ud = c((HB, Vd) => {
        function tS(e, t) {
            return e ? .[t]
        }
        Vd.exports = tS
    });
    var xt = c((BB, Wd) => {
        var rS = Gd(),
            nS = Ud();

        function iS(e, t) {
            var r = nS(e, t);
            return rS(r) ? r : void 0
        }
        Wd.exports = iS
    });
    var Dn = c((XB, Hd) => {
        var oS = xt(),
            aS = Ze(),
            sS = oS(aS, "Map");
        Hd.exports = sS
    });
    var Mr = c((jB, Bd) => {
        var uS = xt(),
            cS = uS(Object, "create");
        Bd.exports = cS
    });
    var zd = c((zB, jd) => {
        var Xd = Mr();

        function lS() {
            this.__data__ = Xd ? Xd(null) : {}, this.size = 0
        }
        jd.exports = lS
    });
    var Yd = c((KB, Kd) => {
        function fS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Kd.exports = fS
    });
    var $d = c((YB, Qd) => {
        var dS = Mr(),
            pS = "__lodash_hash_undefined__",
            gS = Object.prototype,
            hS = gS.hasOwnProperty;

        function vS(e) {
            var t = this.__data__;
            if (dS) {
                var r = t[e];
                return r === pS ? void 0 : r
            }
            return hS.call(t, e) ? t[e] : void 0
        }
        Qd.exports = vS
    });
    var Jd = c((QB, Zd) => {
        var mS = Mr(),
            yS = Object.prototype,
            ES = yS.hasOwnProperty;

        function bS(e) {
            var t = this.__data__;
            return mS ? t[e] !== void 0 : ES.call(t, e)
        }
        Zd.exports = bS
    });
    var tp = c(($B, ep) => {
        var _S = Mr(),
            wS = "__lodash_hash_undefined__";

        function IS(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = _S && t === void 0 ? wS : t, this
        }
        ep.exports = IS
    });
    var np = c((ZB, rp) => {
        var TS = zd(),
            xS = Yd(),
            OS = $d(),
            AS = Jd(),
            SS = tp();

        function Jt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Jt.prototype.clear = TS;
        Jt.prototype.delete = xS;
        Jt.prototype.get = OS;
        Jt.prototype.has = AS;
        Jt.prototype.set = SS;
        rp.exports = Jt
    });
    var ap = c((JB, op) => {
        var ip = np(),
            CS = Fr(),
            RS = Dn();

        function LS() {
            this.size = 0, this.__data__ = {
                hash: new ip,
                map: new(RS || CS),
                string: new ip
            }
        }
        op.exports = LS
    });
    var up = c((e5, sp) => {
        function NS(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        sp.exports = NS
    });
    var Dr = c((t5, cp) => {
        var PS = up();

        function qS(e, t) {
            var r = e.__data__;
            return PS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        cp.exports = qS
    });
    var fp = c((r5, lp) => {
        var FS = Dr();

        function MS(e) {
            var t = FS(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        lp.exports = MS
    });
    var pp = c((n5, dp) => {
        var DS = Dr();

        function kS(e) {
            return DS(this, e).get(e)
        }
        dp.exports = kS
    });
    var hp = c((i5, gp) => {
        var GS = Dr();

        function VS(e) {
            return GS(this, e).has(e)
        }
        gp.exports = VS
    });
    var mp = c((o5, vp) => {
        var US = Dr();

        function WS(e, t) {
            var r = US(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        vp.exports = WS
    });
    var kn = c((a5, yp) => {
        var HS = ap(),
            BS = fp(),
            XS = pp(),
            jS = hp(),
            zS = mp();

        function er(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        er.prototype.clear = HS;
        er.prototype.delete = BS;
        er.prototype.get = XS;
        er.prototype.has = jS;
        er.prototype.set = zS;
        yp.exports = er
    });
    var bp = c((s5, Ep) => {
        var KS = Fr(),
            YS = Dn(),
            QS = kn(),
            $S = 200;

        function ZS(e, t) {
            var r = this.__data__;
            if (r instanceof KS) {
                var n = r.__data__;
                if (!YS || n.length < $S - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new QS(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        Ep.exports = ZS
    });
    var ra = c((u5, _p) => {
        var JS = Fr(),
            eC = Id(),
            tC = xd(),
            rC = Ad(),
            nC = Cd(),
            iC = bp();

        function tr(e) {
            var t = this.__data__ = new JS(e);
            this.size = t.size
        }
        tr.prototype.clear = eC;
        tr.prototype.delete = tC;
        tr.prototype.get = rC;
        tr.prototype.has = nC;
        tr.prototype.set = iC;
        _p.exports = tr
    });
    var Ip = c((c5, wp) => {
        var oC = "__lodash_hash_undefined__";

        function aC(e) {
            return this.__data__.set(e, oC), this
        }
        wp.exports = aC
    });
    var xp = c((l5, Tp) => {
        function sC(e) {
            return this.__data__.has(e)
        }
        Tp.exports = sC
    });
    var Ap = c((f5, Op) => {
        var uC = kn(),
            cC = Ip(),
            lC = xp();

        function Gn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new uC; ++t < r;) this.add(e[t])
        }
        Gn.prototype.add = Gn.prototype.push = cC;
        Gn.prototype.has = lC;
        Op.exports = Gn
    });
    var Cp = c((d5, Sp) => {
        function fC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        Sp.exports = fC
    });
    var Lp = c((p5, Rp) => {
        function dC(e, t) {
            return e.has(t)
        }
        Rp.exports = dC
    });
    var na = c((g5, Np) => {
        var pC = Ap(),
            gC = Cp(),
            hC = Lp(),
            vC = 1,
            mC = 2;

        function yC(e, t, r, n, i, o) {
            var s = r & vC,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var f = o.get(e),
                E = o.get(t);
            if (f && E) return f == t && E == e;
            var p = -1,
                _ = !0,
                m = r & mC ? new pC : void 0;
            for (o.set(e, t), o.set(t, e); ++p < a;) {
                var b = e[p],
                    w = t[p];
                if (n) var x = s ? n(w, b, p, t, e, o) : n(b, w, p, e, t, o);
                if (x !== void 0) {
                    if (x) continue;
                    _ = !1;
                    break
                }
                if (m) {
                    if (!gC(t, function(I, L) {
                            if (!hC(m, L) && (b === I || i(b, I, r, n, o))) return m.push(L)
                        })) {
                        _ = !1;
                        break
                    }
                } else if (!(b === w || i(b, w, r, n, o))) {
                    _ = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), _
        }
        Np.exports = yC
    });
    var qp = c((h5, Pp) => {
        var EC = Ze(),
            bC = EC.Uint8Array;
        Pp.exports = bC
    });
    var Mp = c((v5, Fp) => {
        function _C(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Fp.exports = _C
    });
    var kp = c((m5, Dp) => {
        function wC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Dp.exports = wC
    });
    var Hp = c((y5, Wp) => {
        var Gp = Kt(),
            Vp = qp(),
            IC = Mn(),
            TC = na(),
            xC = Mp(),
            OC = kp(),
            AC = 1,
            SC = 2,
            CC = "[object Boolean]",
            RC = "[object Date]",
            LC = "[object Error]",
            NC = "[object Map]",
            PC = "[object Number]",
            qC = "[object RegExp]",
            FC = "[object Set]",
            MC = "[object String]",
            DC = "[object Symbol]",
            kC = "[object ArrayBuffer]",
            GC = "[object DataView]",
            Up = Gp ? Gp.prototype : void 0,
            ia = Up ? Up.valueOf : void 0;

        function VC(e, t, r, n, i, o, s) {
            switch (r) {
                case GC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case kC:
                    return !(e.byteLength != t.byteLength || !o(new Vp(e), new Vp(t)));
                case CC:
                case RC:
                case PC:
                    return IC(+e, +t);
                case LC:
                    return e.name == t.name && e.message == t.message;
                case qC:
                case MC:
                    return e == t + "";
                case NC:
                    var a = xC;
                case FC:
                    var u = n & AC;
                    if (a || (a = OC), e.size != t.size && !u) return !1;
                    var f = s.get(e);
                    if (f) return f == t;
                    n |= SC, s.set(e, t);
                    var E = TC(a(e), a(t), n, i, o, s);
                    return s.delete(e), E;
                case DC:
                    if (ia) return ia.call(e) == ia.call(t)
            }
            return !1
        }
        Wp.exports = VC
    });
    var Vn = c((E5, Bp) => {
        function UC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Bp.exports = UC
    });
    var Oe = c((b5, Xp) => {
        var WC = Array.isArray;
        Xp.exports = WC
    });
    var oa = c((_5, jp) => {
        var HC = Vn(),
            BC = Oe();

        function XC(e, t, r) {
            var n = t(e);
            return BC(e) ? n : HC(n, r(e))
        }
        jp.exports = XC
    });
    var Kp = c((w5, zp) => {
        function jC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (o[i++] = s)
            }
            return o
        }
        zp.exports = jC
    });
    var aa = c((I5, Yp) => {
        function zC() {
            return []
        }
        Yp.exports = zC
    });
    var sa = c((T5, $p) => {
        var KC = Kp(),
            YC = aa(),
            QC = Object.prototype,
            $C = QC.propertyIsEnumerable,
            Qp = Object.getOwnPropertySymbols,
            ZC = Qp ? function(e) {
                return e == null ? [] : (e = Object(e), KC(Qp(e), function(t) {
                    return $C.call(e, t)
                }))
            } : YC;
        $p.exports = ZC
    });
    var Jp = c((x5, Zp) => {
        function JC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Zp.exports = JC
    });
    var tg = c((O5, eg) => {
        var eR = Tt(),
            tR = ht(),
            rR = "[object Arguments]";

        function nR(e) {
            return tR(e) && eR(e) == rR
        }
        eg.exports = nR
    });
    var kr = c((A5, ig) => {
        var rg = tg(),
            iR = ht(),
            ng = Object.prototype,
            oR = ng.hasOwnProperty,
            aR = ng.propertyIsEnumerable,
            sR = rg(function() {
                return arguments
            }()) ? rg : function(e) {
                return iR(e) && oR.call(e, "callee") && !aR.call(e, "callee")
            };
        ig.exports = sR
    });
    var ag = c((S5, og) => {
        function uR() {
            return !1
        }
        og.exports = uR
    });
    var Un = c((Gr, rr) => {
        var cR = Ze(),
            lR = ag(),
            cg = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
            sg = cg && typeof rr == "object" && rr && !rr.nodeType && rr,
            fR = sg && sg.exports === cg,
            ug = fR ? cR.Buffer : void 0,
            dR = ug ? ug.isBuffer : void 0,
            pR = dR || lR;
        rr.exports = pR
    });
    var Wn = c((C5, lg) => {
        var gR = 9007199254740991,
            hR = /^(?:0|[1-9]\d*)$/;

        function vR(e, t) {
            var r = typeof e;
            return t = t ? ? gR, !!t && (r == "number" || r != "symbol" && hR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        lg.exports = vR
    });
    var Hn = c((R5, fg) => {
        var mR = 9007199254740991;

        function yR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mR
        }
        fg.exports = yR
    });
    var pg = c((L5, dg) => {
        var ER = Tt(),
            bR = Hn(),
            _R = ht(),
            wR = "[object Arguments]",
            IR = "[object Array]",
            TR = "[object Boolean]",
            xR = "[object Date]",
            OR = "[object Error]",
            AR = "[object Function]",
            SR = "[object Map]",
            CR = "[object Number]",
            RR = "[object Object]",
            LR = "[object RegExp]",
            NR = "[object Set]",
            PR = "[object String]",
            qR = "[object WeakMap]",
            FR = "[object ArrayBuffer]",
            MR = "[object DataView]",
            DR = "[object Float32Array]",
            kR = "[object Float64Array]",
            GR = "[object Int8Array]",
            VR = "[object Int16Array]",
            UR = "[object Int32Array]",
            WR = "[object Uint8Array]",
            HR = "[object Uint8ClampedArray]",
            BR = "[object Uint16Array]",
            XR = "[object Uint32Array]",
            me = {};
        me[DR] = me[kR] = me[GR] = me[VR] = me[UR] = me[WR] = me[HR] = me[BR] = me[XR] = !0;
        me[wR] = me[IR] = me[FR] = me[TR] = me[MR] = me[xR] = me[OR] = me[AR] = me[SR] = me[CR] = me[RR] = me[LR] = me[NR] = me[PR] = me[qR] = !1;

        function jR(e) {
            return _R(e) && bR(e.length) && !!me[ER(e)]
        }
        dg.exports = jR
    });
    var hg = c((N5, gg) => {
        function zR(e) {
            return function(t) {
                return e(t)
            }
        }
        gg.exports = zR
    });
    var mg = c((Vr, nr) => {
        var KR = Po(),
            vg = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
            Ur = vg && typeof nr == "object" && nr && !nr.nodeType && nr,
            YR = Ur && Ur.exports === vg,
            ua = YR && KR.process,
            QR = function() {
                try {
                    var e = Ur && Ur.require && Ur.require("util").types;
                    return e || ua && ua.binding && ua.binding("util")
                } catch {}
            }();
        nr.exports = QR
    });
    var Bn = c((P5, bg) => {
        var $R = pg(),
            ZR = hg(),
            yg = mg(),
            Eg = yg && yg.isTypedArray,
            JR = Eg ? ZR(Eg) : $R;
        bg.exports = JR
    });
    var ca = c((q5, _g) => {
        var eL = Jp(),
            tL = kr(),
            rL = Oe(),
            nL = Un(),
            iL = Wn(),
            oL = Bn(),
            aL = Object.prototype,
            sL = aL.hasOwnProperty;

        function uL(e, t) {
            var r = rL(e),
                n = !r && tL(e),
                i = !r && !n && nL(e),
                o = !r && !n && !i && oL(e),
                s = r || n || i || o,
                a = s ? eL(e.length, String) : [],
                u = a.length;
            for (var f in e)(t || sL.call(e, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || iL(f, u))) && a.push(f);
            return a
        }
        _g.exports = uL
    });
    var Xn = c((F5, wg) => {
        var cL = Object.prototype;

        function lL(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || cL;
            return e === r
        }
        wg.exports = lL
    });
    var Tg = c((M5, Ig) => {
        var fL = qo(),
            dL = fL(Object.keys, Object);
        Ig.exports = dL
    });
    var jn = c((D5, xg) => {
        var pL = Xn(),
            gL = Tg(),
            hL = Object.prototype,
            vL = hL.hasOwnProperty;

        function mL(e) {
            if (!pL(e)) return gL(e);
            var t = [];
            for (var r in Object(e)) vL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        xg.exports = mL
    });
    var Ft = c((k5, Og) => {
        var yL = Jo(),
            EL = Hn();

        function bL(e) {
            return e != null && EL(e.length) && !yL(e)
        }
        Og.exports = bL
    });
    var Wr = c((G5, Ag) => {
        var _L = ca(),
            wL = jn(),
            IL = Ft();

        function TL(e) {
            return IL(e) ? _L(e) : wL(e)
        }
        Ag.exports = TL
    });
    var Cg = c((V5, Sg) => {
        var xL = oa(),
            OL = sa(),
            AL = Wr();

        function SL(e) {
            return xL(e, AL, OL)
        }
        Sg.exports = SL
    });
    var Ng = c((U5, Lg) => {
        var Rg = Cg(),
            CL = 1,
            RL = Object.prototype,
            LL = RL.hasOwnProperty;

        function NL(e, t, r, n, i, o) {
            var s = r & CL,
                a = Rg(e),
                u = a.length,
                f = Rg(t),
                E = f.length;
            if (u != E && !s) return !1;
            for (var p = u; p--;) {
                var _ = a[p];
                if (!(s ? _ in t : LL.call(t, _))) return !1
            }
            var m = o.get(e),
                b = o.get(t);
            if (m && b) return m == t && b == e;
            var w = !0;
            o.set(e, t), o.set(t, e);
            for (var x = s; ++p < u;) {
                _ = a[p];
                var I = e[_],
                    L = t[_];
                if (n) var R = s ? n(L, I, _, t, e, o) : n(I, L, _, e, t, o);
                if (!(R === void 0 ? I === L || i(I, L, r, n, o) : R)) {
                    w = !1;
                    break
                }
                x || (x = _ == "constructor")
            }
            if (w && !x) {
                var P = e.constructor,
                    D = t.constructor;
                P != D && "constructor" in e && "constructor" in t && !(typeof P == "function" && P instanceof P && typeof D == "function" && D instanceof D) && (w = !1)
            }
            return o.delete(e), o.delete(t), w
        }
        Lg.exports = NL
    });
    var qg = c((W5, Pg) => {
        var PL = xt(),
            qL = Ze(),
            FL = PL(qL, "DataView");
        Pg.exports = FL
    });
    var Mg = c((H5, Fg) => {
        var ML = xt(),
            DL = Ze(),
            kL = ML(DL, "Promise");
        Fg.exports = kL
    });
    var kg = c((B5, Dg) => {
        var GL = xt(),
            VL = Ze(),
            UL = GL(VL, "Set");
        Dg.exports = UL
    });
    var la = c((X5, Gg) => {
        var WL = xt(),
            HL = Ze(),
            BL = WL(HL, "WeakMap");
        Gg.exports = BL
    });
    var zn = c((j5, jg) => {
        var fa = qg(),
            da = Dn(),
            pa = Mg(),
            ga = kg(),
            ha = la(),
            Xg = Tt(),
            ir = ta(),
            Vg = "[object Map]",
            XL = "[object Object]",
            Ug = "[object Promise]",
            Wg = "[object Set]",
            Hg = "[object WeakMap]",
            Bg = "[object DataView]",
            jL = ir(fa),
            zL = ir(da),
            KL = ir(pa),
            YL = ir(ga),
            QL = ir(ha),
            Mt = Xg;
        (fa && Mt(new fa(new ArrayBuffer(1))) != Bg || da && Mt(new da) != Vg || pa && Mt(pa.resolve()) != Ug || ga && Mt(new ga) != Wg || ha && Mt(new ha) != Hg) && (Mt = function(e) {
            var t = Xg(e),
                r = t == XL ? e.constructor : void 0,
                n = r ? ir(r) : "";
            if (n) switch (n) {
                case jL:
                    return Bg;
                case zL:
                    return Vg;
                case KL:
                    return Ug;
                case YL:
                    return Wg;
                case QL:
                    return Hg
            }
            return t
        });
        jg.exports = Mt
    });
    var eh = c((z5, Jg) => {
        var va = ra(),
            $L = na(),
            ZL = Hp(),
            JL = Ng(),
            zg = zn(),
            Kg = Oe(),
            Yg = Un(),
            eN = Bn(),
            tN = 1,
            Qg = "[object Arguments]",
            $g = "[object Array]",
            Kn = "[object Object]",
            rN = Object.prototype,
            Zg = rN.hasOwnProperty;

        function nN(e, t, r, n, i, o) {
            var s = Kg(e),
                a = Kg(t),
                u = s ? $g : zg(e),
                f = a ? $g : zg(t);
            u = u == Qg ? Kn : u, f = f == Qg ? Kn : f;
            var E = u == Kn,
                p = f == Kn,
                _ = u == f;
            if (_ && Yg(e)) {
                if (!Yg(t)) return !1;
                s = !0, E = !1
            }
            if (_ && !E) return o || (o = new va), s || eN(e) ? $L(e, t, r, n, i, o) : ZL(e, t, u, r, n, i, o);
            if (!(r & tN)) {
                var m = E && Zg.call(e, "__wrapped__"),
                    b = p && Zg.call(t, "__wrapped__");
                if (m || b) {
                    var w = m ? e.value() : e,
                        x = b ? t.value() : t;
                    return o || (o = new va), i(w, x, r, n, o)
                }
            }
            return _ ? (o || (o = new va), JL(e, t, r, n, i, o)) : !1
        }
        Jg.exports = nN
    });
    var ma = c((K5, nh) => {
        var iN = eh(),
            th = ht();

        function rh(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !th(e) && !th(t) ? e !== e && t !== t : iN(e, t, r, n, rh, i)
        }
        nh.exports = rh
    });
    var oh = c((Y5, ih) => {
        var oN = ra(),
            aN = ma(),
            sN = 1,
            uN = 2;

        function cN(e, t, r, n) {
            var i = r.length,
                o = i,
                s = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = r[i];
                var u = a[0],
                    f = e[u],
                    E = a[1];
                if (s && a[2]) {
                    if (f === void 0 && !(u in e)) return !1
                } else {
                    var p = new oN;
                    if (n) var _ = n(f, E, u, e, t, p);
                    if (!(_ === void 0 ? aN(E, f, sN | uN, n, p) : _)) return !1
                }
            }
            return !0
        }
        ih.exports = cN
    });
    var ya = c((Q5, ah) => {
        var lN = ct();

        function fN(e) {
            return e === e && !lN(e)
        }
        ah.exports = fN
    });
    var uh = c(($5, sh) => {
        var dN = ya(),
            pN = Wr();

        function gN(e) {
            for (var t = pN(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, dN(i)]
            }
            return t
        }
        sh.exports = gN
    });
    var Ea = c((Z5, ch) => {
        function hN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        ch.exports = hN
    });
    var fh = c((J5, lh) => {
        var vN = oh(),
            mN = uh(),
            yN = Ea();

        function EN(e) {
            var t = mN(e);
            return t.length == 1 && t[0][2] ? yN(t[0][0], t[0][1]) : function(r) {
                return r === e || vN(r, e, t)
            }
        }
        lh.exports = EN
    });
    var Hr = c((eX, dh) => {
        var bN = Tt(),
            _N = ht(),
            wN = "[object Symbol]";

        function IN(e) {
            return typeof e == "symbol" || _N(e) && bN(e) == wN
        }
        dh.exports = IN
    });
    var Yn = c((tX, ph) => {
        var TN = Oe(),
            xN = Hr(),
            ON = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            AN = /^\w*$/;

        function SN(e, t) {
            if (TN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || xN(e) ? !0 : AN.test(e) || !ON.test(e) || t != null && e in Object(t)
        }
        ph.exports = SN
    });
    var vh = c((rX, hh) => {
        var gh = kn(),
            CN = "Expected a function";

        function ba(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(CN);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, n);
                return r.cache = o.set(i, s) || o, s
            };
            return r.cache = new(ba.Cache || gh), r
        }
        ba.Cache = gh;
        hh.exports = ba
    });
    var yh = c((nX, mh) => {
        var RN = vh(),
            LN = 500;

        function NN(e) {
            var t = RN(e, function(n) {
                    return r.size === LN && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        mh.exports = NN
    });
    var bh = c((iX, Eh) => {
        var PN = yh(),
            qN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            FN = /\\(\\)?/g,
            MN = PN(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(qN, function(r, n, i, o) {
                    t.push(i ? o.replace(FN, "$1") : n || r)
                }), t
            });
        Eh.exports = MN
    });
    var _a = c((oX, _h) => {
        function DN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        _h.exports = DN
    });
    var Ah = c((aX, Oh) => {
        var wh = Kt(),
            kN = _a(),
            GN = Oe(),
            VN = Hr(),
            UN = 1 / 0,
            Ih = wh ? wh.prototype : void 0,
            Th = Ih ? Ih.toString : void 0;

        function xh(e) {
            if (typeof e == "string") return e;
            if (GN(e)) return kN(e, xh) + "";
            if (VN(e)) return Th ? Th.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -UN ? "-0" : t
        }
        Oh.exports = xh
    });
    var Ch = c((sX, Sh) => {
        var WN = Ah();

        function HN(e) {
            return e == null ? "" : WN(e)
        }
        Sh.exports = HN
    });
    var Br = c((uX, Rh) => {
        var BN = Oe(),
            XN = Yn(),
            jN = bh(),
            zN = Ch();

        function KN(e, t) {
            return BN(e) ? e : XN(e, t) ? [e] : jN(zN(e))
        }
        Rh.exports = KN
    });
    var or = c((cX, Lh) => {
        var YN = Hr(),
            QN = 1 / 0;

        function $N(e) {
            if (typeof e == "string" || YN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -QN ? "-0" : t
        }
        Lh.exports = $N
    });
    var Qn = c((lX, Nh) => {
        var ZN = Br(),
            JN = or();

        function eP(e, t) {
            t = ZN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[JN(t[r++])];
            return r && r == n ? e : void 0
        }
        Nh.exports = eP
    });
    var $n = c((fX, Ph) => {
        var tP = Qn();

        function rP(e, t, r) {
            var n = e == null ? void 0 : tP(e, t);
            return n === void 0 ? r : n
        }
        Ph.exports = rP
    });
    var Fh = c((dX, qh) => {
        function nP(e, t) {
            return e != null && t in Object(e)
        }
        qh.exports = nP
    });
    var Dh = c((pX, Mh) => {
        var iP = Br(),
            oP = kr(),
            aP = Oe(),
            sP = Wn(),
            uP = Hn(),
            cP = or();

        function lP(e, t, r) {
            t = iP(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var s = cP(t[n]);
                if (!(o = e != null && r(e, s))) break;
                e = e[s]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && uP(i) && sP(s, i) && (aP(e) || oP(e)))
        }
        Mh.exports = lP
    });
    var Gh = c((gX, kh) => {
        var fP = Fh(),
            dP = Dh();

        function pP(e, t) {
            return e != null && dP(e, t, fP)
        }
        kh.exports = pP
    });
    var Uh = c((hX, Vh) => {
        var gP = ma(),
            hP = $n(),
            vP = Gh(),
            mP = Yn(),
            yP = ya(),
            EP = Ea(),
            bP = or(),
            _P = 1,
            wP = 2;

        function IP(e, t) {
            return mP(e) && yP(t) ? EP(bP(e), t) : function(r) {
                var n = hP(r, e);
                return n === void 0 && n === t ? vP(r, e) : gP(t, n, _P | wP)
            }
        }
        Vh.exports = IP
    });
    var Zn = c((vX, Wh) => {
        function TP(e) {
            return e
        }
        Wh.exports = TP
    });
    var wa = c((mX, Hh) => {
        function xP(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Hh.exports = xP
    });
    var Xh = c((yX, Bh) => {
        var OP = Qn();

        function AP(e) {
            return function(t) {
                return OP(t, e)
            }
        }
        Bh.exports = AP
    });
    var zh = c((EX, jh) => {
        var SP = wa(),
            CP = Xh(),
            RP = Yn(),
            LP = or();

        function NP(e) {
            return RP(e) ? SP(LP(e)) : CP(e)
        }
        jh.exports = NP
    });
    var Ot = c((bX, Kh) => {
        var PP = fh(),
            qP = Uh(),
            FP = Zn(),
            MP = Oe(),
            DP = zh();

        function kP(e) {
            return typeof e == "function" ? e : e == null ? FP : typeof e == "object" ? MP(e) ? qP(e[0], e[1]) : PP(e) : DP(e)
        }
        Kh.exports = kP
    });
    var Ia = c((_X, Yh) => {
        var GP = Ot(),
            VP = Ft(),
            UP = Wr();

        function WP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!VP(t)) {
                    var o = GP(r, 3);
                    t = UP(t), r = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Yh.exports = WP
    });
    var Ta = c((wX, Qh) => {
        function HP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Qh.exports = HP
    });
    var Zh = c((IX, $h) => {
        var BP = /\s/;

        function XP(e) {
            for (var t = e.length; t-- && BP.test(e.charAt(t)););
            return t
        }
        $h.exports = XP
    });
    var ev = c((TX, Jh) => {
        var jP = Zh(),
            zP = /^\s+/;

        function KP(e) {
            return e && e.slice(0, jP(e) + 1).replace(zP, "")
        }
        Jh.exports = KP
    });
    var Jn = c((xX, nv) => {
        var YP = ev(),
            tv = ct(),
            QP = Hr(),
            rv = 0 / 0,
            $P = /^[-+]0x[0-9a-f]+$/i,
            ZP = /^0b[01]+$/i,
            JP = /^0o[0-7]+$/i,
            eq = parseInt;

        function tq(e) {
            if (typeof e == "number") return e;
            if (QP(e)) return rv;
            if (tv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = tv(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = YP(e);
            var r = ZP.test(e);
            return r || JP.test(e) ? eq(e.slice(2), r ? 2 : 8) : $P.test(e) ? rv : +e
        }
        nv.exports = tq
    });
    var av = c((OX, ov) => {
        var rq = Jn(),
            iv = 1 / 0,
            nq = 17976931348623157e292;

        function iq(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = rq(e), e === iv || e === -iv) {
                var t = e < 0 ? -1 : 1;
                return t * nq
            }
            return e === e ? e : 0
        }
        ov.exports = iq
    });
    var xa = c((AX, sv) => {
        var oq = av();

        function aq(e) {
            var t = oq(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        sv.exports = aq
    });
    var cv = c((SX, uv) => {
        var sq = Ta(),
            uq = Ot(),
            cq = xa(),
            lq = Math.max;

        function fq(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : cq(r);
            return i < 0 && (i = lq(n + i, 0)), sq(e, uq(t, 3), i)
        }
        uv.exports = fq
    });
    var Oa = c((CX, lv) => {
        var dq = Ia(),
            pq = cv(),
            gq = dq(pq);
        lv.exports = gq
    });
    var pv = {};
    Ve(pv, {
        ELEMENT_MATCHES: () => hq,
        FLEX_PREFIXED: () => Aa,
        IS_BROWSER_ENV: () => et,
        TRANSFORM_PREFIXED: () => At,
        TRANSFORM_STYLE_PREFIXED: () => ti,
        withBrowser: () => ei
    });
    var dv, et, ei, hq, Aa, At, fv, ti, ri = ye(() => {
        "use strict";
        dv = pe(Oa()), et = typeof window < "u", ei = (e, t) => et ? e() : t, hq = ei(() => (0, dv.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Aa = ei(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), At = ei(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), fv = At.split("transform")[0], ti = fv ? fv + "TransformStyle" : "transformStyle"
    });
    var Sa = c((RX, yv) => {
        var vq = 4,
            mq = .001,
            yq = 1e-7,
            Eq = 10,
            Xr = 11,
            ni = 1 / (Xr - 1),
            bq = typeof Float32Array == "function";

        function gv(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function hv(e, t) {
            return 3 * t - 6 * e
        }

        function vv(e) {
            return 3 * e
        }

        function ii(e, t, r) {
            return ((gv(t, r) * e + hv(t, r)) * e + vv(t)) * e
        }

        function mv(e, t, r) {
            return 3 * gv(t, r) * e * e + 2 * hv(t, r) * e + vv(t)
        }

        function _q(e, t, r, n, i) {
            var o, s, a = 0;
            do s = t + (r - t) / 2, o = ii(s, n, i) - e, o > 0 ? r = s : t = s; while (Math.abs(o) > yq && ++a < Eq);
            return s
        }

        function wq(e, t, r, n) {
            for (var i = 0; i < vq; ++i) {
                var o = mv(t, r, n);
                if (o === 0) return t;
                var s = ii(t, r, n) - e;
                t -= s / o
            }
            return t
        }
        yv.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = bq ? new Float32Array(Xr) : new Array(Xr);
            if (t !== r || n !== i)
                for (var s = 0; s < Xr; ++s) o[s] = ii(s * ni, t, n);

            function a(u) {
                for (var f = 0, E = 1, p = Xr - 1; E !== p && o[E] <= u; ++E) f += ni;
                --E;
                var _ = (u - o[E]) / (o[E + 1] - o[E]),
                    m = f + _ * ni,
                    b = mv(m, t, n);
                return b >= mq ? wq(u, m, t, n) : b === 0 ? m : _q(u, f, f + ni, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : ii(a(f), r, i)
            }
        }
    });
    var zr = {};
    Ve(zr, {
        bounce: () => iF,
        bouncePast: () => oF,
        ease: () => Iq,
        easeIn: () => Tq,
        easeInOut: () => Oq,
        easeOut: () => xq,
        inBack: () => Yq,
        inCirc: () => Xq,
        inCubic: () => Rq,
        inElastic: () => Zq,
        inExpo: () => Wq,
        inOutBack: () => $q,
        inOutCirc: () => zq,
        inOutCubic: () => Nq,
        inOutElastic: () => eF,
        inOutExpo: () => Bq,
        inOutQuad: () => Cq,
        inOutQuart: () => Fq,
        inOutQuint: () => kq,
        inOutSine: () => Uq,
        inQuad: () => Aq,
        inQuart: () => Pq,
        inQuint: () => Mq,
        inSine: () => Gq,
        outBack: () => Qq,
        outBounce: () => Kq,
        outCirc: () => jq,
        outCubic: () => Lq,
        outElastic: () => Jq,
        outExpo: () => Hq,
        outQuad: () => Sq,
        outQuart: () => qq,
        outQuint: () => Dq,
        outSine: () => Vq,
        swingFrom: () => rF,
        swingFromTo: () => tF,
        swingTo: () => nF
    });

    function Aq(e) {
        return Math.pow(e, 2)
    }

    function Sq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function Cq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function Rq(e) {
        return Math.pow(e, 3)
    }

    function Lq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function Nq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function Pq(e) {
        return Math.pow(e, 4)
    }

    function qq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function Fq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function Mq(e) {
        return Math.pow(e, 5)
    }

    function Dq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function kq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Gq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Vq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function Uq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Wq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Hq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function Bq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Xq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function jq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function zq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function Kq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Yq(e) {
        let t = vt;
        return e * e * ((t + 1) * e - t)
    }

    function Qq(e) {
        let t = vt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function $q(e) {
        let t = vt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Zq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Jq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function eF(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function tF(e) {
        let t = vt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function rF(e) {
        let t = vt;
        return e * e * ((t + 1) * e - t)
    }

    function nF(e) {
        let t = vt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function iF(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function oF(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var jr, vt, Iq, Tq, xq, Oq, Ca = ye(() => {
        "use strict";
        jr = pe(Sa()), vt = 1.70158, Iq = (0, jr.default)(.25, .1, .25, 1), Tq = (0, jr.default)(.42, 0, 1, 1), xq = (0, jr.default)(0, 0, .58, 1), Oq = (0, jr.default)(.42, 0, .58, 1)
    });
    var bv = {};
    Ve(bv, {
        applyEasing: () => sF,
        createBezierEasing: () => aF,
        optimizeFloat: () => Kr
    });

    function Kr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function aF(e) {
        return (0, Ev.default)(...e)
    }

    function sF(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Kr(r ? t > 0 ? r(t) : t : t > 0 && e && zr[e] ? zr[e](t) : t)
    }
    var Ev, Ra = ye(() => {
        "use strict";
        Ca();
        Ev = pe(Sa())
    });
    var Iv = {};
    Ve(Iv, {
        createElementState: () => wv,
        ixElements: () => _F,
        mergeActionState: () => La
    });

    function wv(e, t, r, n, i) {
        let o = r === uF ? (0, ar.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, ar.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function La(e, t, r, n, i) {
        let o = IF(i);
        return (0, ar.mergeIn)(e, [t, bF, r], n, o)
    }

    function IF(e) {
        let {
            config: t
        } = e;
        return wF.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                s = t[i],
                a = t[o];
            return s != null && a != null && (r[o] = a), r
        }, {})
    }
    var ar, NX, uF, PX, cF, lF, fF, dF, pF, gF, hF, vF, mF, yF, EF, _v, bF, _F, wF, Tv = ye(() => {
        "use strict";
        ar = pe($t());
        We();
        ({
            HTML_ELEMENT: NX,
            PLAIN_OBJECT: uF,
            ABSTRACT_NODE: PX,
            CONFIG_X_VALUE: cF,
            CONFIG_Y_VALUE: lF,
            CONFIG_Z_VALUE: fF,
            CONFIG_VALUE: dF,
            CONFIG_X_UNIT: pF,
            CONFIG_Y_UNIT: gF,
            CONFIG_Z_UNIT: hF,
            CONFIG_UNIT: vF
        } = Ne), {
            IX2_SESSION_STOPPED: mF,
            IX2_INSTANCE_ADDED: yF,
            IX2_ELEMENT_STATE_CHANGED: EF
        } = xe, _v = {}, bF = "refState", _F = (e = _v, t = {}) => {
            switch (t.type) {
                case mF:
                    return _v;
                case yF:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: s
                        } = t.payload,
                        {
                            actionTypeId: a
                        } = o,
                        u = e;
                        return (0, ar.getIn)(u, [r, n]) !== n && (u = wv(u, n, s, r, o)),
                        La(u, r, a, i, o)
                    }
                case EF:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return La(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        wF = [
            [cF, pF],
            [lF, gF],
            [fF, hF],
            [dF, vF]
        ]
    });
    var xv = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var TF = e => e.value;
        Ae.getPluginConfig = TF;
        var xF = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Ae.getPluginDuration = xF;
        var OF = e => e || {
            value: 0
        };
        Ae.getPluginOrigin = OF;
        var AF = e => ({
            value: e.value
        });
        Ae.getPluginDestination = AF;
        var SF = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Ae.createPluginInstance = SF;
        var CF = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Ae.renderPlugin = CF;
        var RF = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Ae.clearPlugin = RF
    });
    var Av = c(Se => {
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var LF = e => document.querySelector(`[data-w-id="${e}"]`),
            NF = () => window.Webflow.require("spline"),
            PF = (e, t) => e.filter(r => !t.includes(r)),
            qF = (e, t) => e.value[t];
        Se.getPluginConfig = qF;
        var FF = () => null;
        Se.getPluginDuration = FF;
        var Ov = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            MF = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        s = PF(n, o);
                    return s.length ? s.reduce((u, f) => (u[f] = Ov[f], u), e) : e
                }
                return n.reduce((o, s) => (o[s] = Ov[s], o), {})
            };
        Se.getPluginOrigin = MF;
        var DF = e => e.value;
        Se.getPluginDestination = DF;
        var kF = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? LF(n) : null
        };
        Se.createPluginInstance = kF;
        var GF = (e, t, r) => {
            let n = NF(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                s = a => {
                    if (!a) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && a.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: f
                    } = t;
                    f.positionX != null && (u.position.x = f.positionX), f.positionY != null && (u.position.y = f.positionY), f.positionZ != null && (u.position.z = f.positionZ), f.rotationX != null && (u.rotation.x = f.rotationX), f.rotationY != null && (u.rotation.y = f.rotationY), f.rotationZ != null && (u.rotation.z = f.rotationZ), f.scaleX != null && (u.scale.x = f.scaleX), f.scaleY != null && (u.scale.y = f.scaleY), f.scaleZ != null && (u.scale.z = f.scaleZ)
                };
            i ? s(i.spline) : n.setLoadHandler(e, s)
        };
        Se.renderPlugin = GF;
        var VF = () => null;
        Se.clearPlugin = VF
    });
    var Pa = c(Na => {
        "use strict";
        Object.defineProperty(Na, "__esModule", {
            value: !0
        });
        Na.normalizeColor = UF;
        var Sv = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function UF(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                a = (typeof Sv[o] == "string" ? Sv[o].toLowerCase() : null) || o;
            if (a.startsWith("#")) {
                let u = a.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16))
            } else if (a.startsWith("rgba")) {
                let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (a.startsWith("rgb")) {
                let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (a.startsWith("hsla")) {
                let u = a.match(/hsla\(([^)]+)\)/)[1].split(","),
                    f = parseFloat(u[0]),
                    E = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let _ = (1 - Math.abs(2 * p - 1)) * E,
                    m = _ * (1 - Math.abs(f / 60 % 2 - 1)),
                    b = p - _ / 2,
                    w, x, I;
                f >= 0 && f < 60 ? (w = _, x = m, I = 0) : f >= 60 && f < 120 ? (w = m, x = _, I = 0) : f >= 120 && f < 180 ? (w = 0, x = _, I = m) : f >= 180 && f < 240 ? (w = 0, x = m, I = _) : f >= 240 && f < 300 ? (w = m, x = 0, I = _) : (w = _, x = 0, I = m), t = Math.round((w + b) * 255), r = Math.round((x + b) * 255), n = Math.round((I + b) * 255)
            } else if (a.startsWith("hsl")) {
                let u = a.match(/hsl\(([^)]+)\)/)[1].split(","),
                    f = parseFloat(u[0]),
                    E = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100,
                    _ = (1 - Math.abs(2 * p - 1)) * E,
                    m = _ * (1 - Math.abs(f / 60 % 2 - 1)),
                    b = p - _ / 2,
                    w, x, I;
                f >= 0 && f < 60 ? (w = _, x = m, I = 0) : f >= 60 && f < 120 ? (w = m, x = _, I = 0) : f >= 120 && f < 180 ? (w = 0, x = _, I = m) : f >= 180 && f < 240 ? (w = 0, x = m, I = _) : f >= 240 && f < 300 ? (w = m, x = 0, I = _) : (w = _, x = 0, I = m), t = Math.round((w + b) * 255), r = Math.round((x + b) * 255), n = Math.round((I + b) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var Cv = c(Ce => {
        "use strict";
        Object.defineProperty(Ce, "__esModule", {
            value: !0
        });
        Ce.renderPlugin = Ce.getPluginOrigin = Ce.getPluginDuration = Ce.getPluginDestination = Ce.getPluginConfig = Ce.createPluginInstance = Ce.clearPlugin = void 0;
        var WF = Pa(),
            HF = (e, t) => e.value[t];
        Ce.getPluginConfig = HF;
        var BF = () => null;
        Ce.getPluginDuration = BF;
        var XF = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return (0, WF.normalizeColor)(i)
        };
        Ce.getPluginOrigin = XF;
        var jF = e => e.value;
        Ce.getPluginDestination = jF;
        var zF = () => null;
        Ce.createPluginInstance = zF;
        var KF = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: s,
                    red: a,
                    green: u,
                    blue: f,
                    alpha: E
                } = o,
                p;
            s != null && (p = s + i), a != null && f != null && u != null && E != null && (p = `rgba(${a}, ${u}, ${f}, ${E})`), p != null && document.documentElement.style.setProperty(n, p)
        };
        Ce.renderPlugin = KF;
        var YF = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Ce.clearPlugin = YF
    });
    var Rv = c(oi => {
        "use strict";
        var Fa = vn().default;
        Object.defineProperty(oi, "__esModule", {
            value: !0
        });
        oi.pluginMethodMap = void 0;
        var qa = (We(), it(Mf)),
            QF = Fa(xv()),
            $F = Fa(Av()),
            ZF = Fa(Cv()),
            kX = oi.pluginMethodMap = new Map([
                [qa.ActionTypeConsts.PLUGIN_LOTTIE, { ...QF
                }],
                [qa.ActionTypeConsts.PLUGIN_SPLINE, { ...$F
                }],
                [qa.ActionTypeConsts.PLUGIN_VARIABLE, { ...ZF
                }]
            ])
    });
    var Lv = {};
    Ve(Lv, {
        clearPlugin: () => Ua,
        createPluginInstance: () => eM,
        getPluginConfig: () => Da,
        getPluginDestination: () => Ga,
        getPluginDuration: () => JF,
        getPluginOrigin: () => ka,
        isPluginType: () => Dt,
        renderPlugin: () => Va
    });

    function Dt(e) {
        return Ma.pluginMethodMap.has(e)
    }
    var Ma, kt, Da, ka, JF, Ga, eM, Va, Ua, Wa = ye(() => {
        "use strict";
        ri();
        Ma = pe(Rv());
        kt = e => t => {
            if (!et) return () => null;
            let r = Ma.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Da = kt("getPluginConfig"), ka = kt("getPluginOrigin"), JF = kt("getPluginDuration"), Ga = kt("getPluginDestination"), eM = kt("createPluginInstance"), Va = kt("renderPlugin"), Ua = kt("clearPlugin")
    });
    var Pv = c((UX, Nv) => {
        function tM(e, t) {
            return e == null || e !== e ? t : e
        }
        Nv.exports = tM
    });
    var Fv = c((WX, qv) => {
        function rM(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        qv.exports = rM
    });
    var Dv = c((HX, Mv) => {
        function nM(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Mv.exports = nM
    });
    var Gv = c((BX, kv) => {
        var iM = Dv(),
            oM = iM();
        kv.exports = oM
    });
    var Ha = c((XX, Vv) => {
        var aM = Gv(),
            sM = Wr();

        function uM(e, t) {
            return e && aM(e, t, sM)
        }
        Vv.exports = uM
    });
    var Wv = c((jX, Uv) => {
        var cM = Ft();

        function lM(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!cM(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, s = Object(r);
                    (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;);
                return r
            }
        }
        Uv.exports = lM
    });
    var Ba = c((zX, Hv) => {
        var fM = Ha(),
            dM = Wv(),
            pM = dM(fM);
        Hv.exports = pM
    });
    var Xv = c((KX, Bv) => {
        function gM(e, t, r, n, i) {
            return i(e, function(o, s, a) {
                r = n ? (n = !1, o) : t(r, o, s, a)
            }), r
        }
        Bv.exports = gM
    });
    var zv = c((YX, jv) => {
        var hM = Fv(),
            vM = Ba(),
            mM = Ot(),
            yM = Xv(),
            EM = Oe();

        function bM(e, t, r) {
            var n = EM(e) ? hM : yM,
                i = arguments.length < 3;
            return n(e, mM(t, 4), r, i, vM)
        }
        jv.exports = bM
    });
    var Yv = c((QX, Kv) => {
        var _M = Ta(),
            wM = Ot(),
            IM = xa(),
            TM = Math.max,
            xM = Math.min;

        function OM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = IM(r), i = r < 0 ? TM(n + i, 0) : xM(i, n - 1)), _M(e, wM(t, 3), i, !0)
        }
        Kv.exports = OM
    });
    var $v = c(($X, Qv) => {
        var AM = Ia(),
            SM = Yv(),
            CM = AM(SM);
        Qv.exports = CM
    });

    function Zv(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function LM(e, t) {
        if (Zv(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!RM.call(t, r[i]) || !Zv(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var RM, Xa, Jv = ye(() => {
        "use strict";
        RM = Object.prototype.hasOwnProperty;
        Xa = LM
    });
    var mm = {};
    Ve(mm, {
        cleanupHTMLElement: () => S1,
        clearAllStyles: () => A1,
        clearObjectCache: () => KM,
        getActionListProgress: () => R1,
        getAffectedElements: () => Qa,
        getComputedStyle: () => r1,
        getDestinationValues: () => c1,
        getElementId: () => ZM,
        getInstanceId: () => QM,
        getInstanceOrigin: () => o1,
        getItemConfigByKey: () => u1,
        getMaxDurationItemIndex: () => vm,
        getNamespacedParameterId: () => P1,
        getRenderType: () => pm,
        getStyleProp: () => l1,
        mediaQueriesEqual: () => F1,
        observeStore: () => t1,
        reduceListToGroup: () => L1,
        reifyState: () => JM,
        renderHTMLElement: () => f1,
        shallowEqual: () => Xa,
        shouldAllowMediaQuery: () => q1,
        shouldNamespaceEventParameter: () => N1,
        stringifyTarget: () => M1
    });

    function KM() {
        ai.clear()
    }

    function QM() {
        return "i" + YM++
    }

    function ZM(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + $M++
    }

    function JM({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, li.default)(e, (s, a) => {
                let {
                    eventTypeId: u
                } = a;
                return s[u] || (s[u] = {}), s[u][a.id] = a, s
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function t1({
        store: e,
        select: t,
        onChange: r,
        comparator: n = e1
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, s = o(u), a = t(i());

        function u() {
            let f = t(i());
            if (f == null) {
                s();
                return
            }
            n(f, a) || (a = f, r(a, e))
        }
        return s
    }

    function rm(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }

    function Qa({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((G, S) => G.concat(Qa({
            config: {
                target: S
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: a,
            queryDocument: u,
            getChildElements: f,
            getSiblingElements: E,
            matchSelector: p,
            elementContains: _,
            isSiblingNode: m
        } = i, {
            target: b
        } = e;
        if (!b) return [];
        let {
            id: w,
            objectId: x,
            selector: I,
            selectorGuids: L,
            appliesTo: R,
            useEventTarget: P
        } = rm(b);
        if (x) return [ai.has(x) ? ai.get(x) : ai.set(x, {}).get(x)];
        if (R === Yo.PAGE) {
            let G = s(w);
            return G ? [G] : []
        }
        let q = (t ? .action ? .config ? .affectedElements ? ? {})[w || I] || {},
            K = !!(q.id || q.selector),
            j, Z, ee, ie = t && a(rm(t.target));
        if (K ? (j = q.limitAffectedElements, Z = ie, ee = a(q)) : Z = ee = a({
                id: w,
                selector: I,
                selectorGuids: L
            }), t && P) {
            let G = r && (ee || P === !0) ? [r] : u(ie);
            if (ee) {
                if (P === XM) return u(ee).filter(S => G.some(k => _(S, k)));
                if (P === em) return u(ee).filter(S => G.some(k => _(k, S)));
                if (P === tm) return u(ee).filter(S => G.some(k => m(k, S)))
            }
            return G
        }
        return Z == null || ee == null ? [] : et && n ? u(ee).filter(G => n.contains(G)) : j === em ? u(Z, ee) : j === BM ? f(u(Z)).filter(p(ee)) : j === tm ? E(u(Z)).filter(p(ee)) : u(ee)
    }

    function r1({
        element: e,
        actionItem: t
    }) {
        if (!et) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case fr:
            case dr:
            case pr:
            case gr:
            case di:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function o1(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: s
        } = n;
        if (Dt(s)) return ka(s)(t[s], n);
        switch (n.actionTypeId) {
            case ur:
            case cr:
            case lr:
            case Zr:
                return t[n.actionTypeId] || $a[n.actionTypeId];
            case Jr:
                return n1(t[n.actionTypeId], n.config.filters);
            case en:
                return i1(t[n.actionTypeId], n.config.fontVariations);
            case lm:
                return {
                    value: (0, mt.default)(parseFloat(o(e, ui)), 1)
                };
            case fr:
                {
                    let a = o(e, lt),
                        u = o(e, ft),
                        f, E;
                    return n.config.widthUnit === St ? f = nm.test(a) ? parseFloat(a) : parseFloat(r.width) : f = (0, mt.default)(parseFloat(a), parseFloat(r.width)),
                    n.config.heightUnit === St ? E = nm.test(u) ? parseFloat(u) : parseFloat(r.height) : E = (0, mt.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: f,
                        heightValue: E
                    }
                }
            case dr:
            case pr:
            case gr:
                return T1({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case di:
                return {
                    value: (0, mt.default)(o(e, ci), r.display)
                };
            case zM:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function c1({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Dt(t.actionTypeId)) return Ga(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case ur:
            case cr:
            case lr:
            case Zr:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case fr:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: s,
                        heightUnit: a
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: f
                    } = t.config;
                    if (!et) return {
                        widthValue: u,
                        heightValue: f
                    };
                    if (s === St) {
                        let E = n(e, lt);
                        i(e, lt, ""), u = o(e, "offsetWidth"), i(e, lt, E)
                    }
                    if (a === St) {
                        let E = n(e, ft);
                        i(e, ft, ""), f = o(e, "offsetHeight"), i(e, ft, E)
                    }
                    return {
                        widthValue: u,
                        heightValue: f
                    }
                }
            case dr:
            case pr:
            case gr:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s,
                        globalSwatchId: a
                    } = t.config;
                    if (a && a.startsWith("--")) {
                        let {
                            getStyle: u
                        } = r, f = u(e, a), E = (0, am.normalizeColor)(f);
                        return {
                            rValue: E.red,
                            gValue: E.green,
                            bValue: E.blue,
                            aValue: E.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    }
                }
            case Jr:
                return t.config.filters.reduce(a1, {});
            case en:
                return t.config.fontVariations.reduce(s1, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function pm(e) {
        if (/^TRANSFORM_/.test(e)) return um;
        if (/^STYLE_/.test(e)) return Ka;
        if (/^GENERAL_/.test(e)) return za;
        if (/^PLUGIN_/.test(e)) return cm
    }

    function l1(e, t) {
        return e === Ka ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function f1(e, t, r, n, i, o, s, a, u) {
        switch (a) {
            case um:
                return v1(e, t, r, i, s);
            case Ka:
                return x1(e, t, r, i, o, s);
            case za:
                return O1(e, i, s);
            case cm:
                {
                    let {
                        actionTypeId: f
                    } = i;
                    if (Dt(f)) return Va(f)(u, t, i)
                }
        }
    }

    function v1(e, t, r, n, i) {
        let o = h1.map(a => {
                let u = $a[a],
                    {
                        xValue: f = u.xValue,
                        yValue: E = u.yValue,
                        zValue: p = u.zValue,
                        xUnit: _ = "",
                        yUnit: m = "",
                        zUnit: b = ""
                    } = t[a] || {};
                switch (a) {
                    case ur:
                        return `${qM}(${f}${_}, ${E}${m}, ${p}${b})`;
                    case cr:
                        return `${FM}(${f}${_}, ${E}${m}, ${p}${b})`;
                    case lr:
                        return `${MM}(${f}${_}) ${DM}(${E}${m}) ${kM}(${p}${b})`;
                    case Zr:
                        return `${GM}(${f}${_}, ${E}${m})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        Gt(e, At, i), s(e, At, o), E1(n, r) && s(e, ti, VM)
    }

    function m1(e, t, r, n) {
        let i = (0, li.default)(t, (s, a, u) => `${s} ${u}(${a}${g1(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        Gt(e, Yr, n), o(e, Yr, i)
    }

    function y1(e, t, r, n) {
        let i = (0, li.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "),
            {
                setStyle: o
            } = n;
        Gt(e, Qr, n), o(e, Qr, i)
    }

    function E1({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === ur && n !== void 0 || e === cr && n !== void 0 || e === lr && (t !== void 0 || r !== void 0)
    }

    function I1(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function T1({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = Ya[t],
            o = n(e, i),
            s = _1.test(o) ? o : r[i],
            a = I1(w1, s).split($r);
        return {
            rValue: (0, mt.default)(parseInt(a[0], 10), 255),
            gValue: (0, mt.default)(parseInt(a[1], 10), 255),
            bValue: (0, mt.default)(parseInt(a[2], 10), 255),
            aValue: (0, mt.default)(parseFloat(a[3]), 1)
        }
    }

    function x1(e, t, r, n, i, o) {
        let {
            setStyle: s
        } = o;
        switch (n.actionTypeId) {
            case fr:
                {
                    let {
                        widthUnit: a = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: f,
                        heightValue: E
                    } = r;f !== void 0 && (a === St && (a = "px"), Gt(e, lt, o), s(e, lt, f + a)),
                    E !== void 0 && (u === St && (u = "px"), Gt(e, ft, o), s(e, ft, E + u));
                    break
                }
            case Jr:
                {
                    m1(e, r, n.config, o);
                    break
                }
            case en:
                {
                    y1(e, r, n.config, o);
                    break
                }
            case dr:
            case pr:
            case gr:
                {
                    let a = Ya[n.actionTypeId],
                        u = Math.round(r.rValue),
                        f = Math.round(r.gValue),
                        E = Math.round(r.bValue),
                        p = r.aValue;Gt(e, a, o),
                    s(e, a, p >= 1 ? `rgb(${u},${f},${E})` : `rgba(${u},${f},${E},${p})`);
                    break
                }
            default:
                {
                    let {
                        unit: a = ""
                    } = n.config;Gt(e, i, o),
                    s(e, i, r.value + a);
                    break
                }
        }
    }

    function O1(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case di:
                {
                    let {
                        value: i
                    } = t.config;i === UM && et ? n(e, ci, Aa) : n(e, ci, i);
                    return
                }
        }
    }

    function Gt(e, t, r) {
        if (!et) return;
        let n = dm[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, sr);
        if (!s) {
            o(e, sr, n);
            return
        }
        let a = s.split($r).map(fm);
        a.indexOf(n) === -1 && o(e, sr, a.concat(n).join($r))
    }

    function gm(e, t, r) {
        if (!et) return;
        let n = dm[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, sr);
        !s || s.indexOf(n) === -1 || o(e, sr, s.split($r).map(fm).filter(a => a !== n).join($r))
    }

    function A1({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let s = n[o],
                {
                    config: a
                } = s.action,
                {
                    actionListId: u
                } = a,
                f = i[u];
            f && im({
                actionList: f,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            im({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function im({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            om({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: s
            } = o;
            s.forEach(a => {
                om({
                    actionGroup: a,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function om({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: s
            } = i, a;
            Dt(o) ? a = u => Ua(o)(u, i) : a = hm({
                effect: C1,
                actionTypeId: o,
                elementApi: r
            }), Qa({
                config: s,
                event: t,
                elementApi: r
            }).forEach(a)
        })
    }

    function S1(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === fr) {
            let {
                config: s
            } = t;
            s.widthUnit === St && n(e, lt, ""), s.heightUnit === St && n(e, ft, "")
        }
        i(e, sr) && hm({
            effect: gm,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function C1(e, t, r) {
        let {
            setStyle: n
        } = r;
        gm(e, t, r), n(e, t, ""), t === At && n(e, ti, "")
    }

    function vm(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, s = o.delay + o.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function R1(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, s = 0, a = 0;
        return r.forEach((u, f) => {
            if (n && f === 0) return;
            let {
                actionItems: E
            } = u, p = E[vm(E)], {
                config: _,
                actionTypeId: m
            } = p;
            i.id === p.id && (a = s + o);
            let b = pm(m) === za ? 0 : _.duration;
            s += _.delay + b
        }), s > 0 ? Kr(a / s) : 0
    }

    function L1({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], s = a => (o.push((0, fi.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })), a.id === t);
        return n && n.some(({
            actionItems: a
        }) => a.some(s)), i && i.some(a => {
            let {
                continuousActionGroups: u
            } = a;
            return u.some(({
                actionItems: f
            }) => f.some(s))
        }), (0, fi.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function N1(e, {
        basedOn: t
    }) {
        return e === Je.SCROLLING_IN_VIEW && (t === ut.ELEMENT || t == null) || e === Je.MOUSE_MOVE && t === ut.ELEMENT
    }

    function P1(e, t) {
        return e + jM + t
    }

    function q1(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function F1(e, t) {
        return Xa(e && e.sort(), t && t.sort())
    }

    function M1(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + ja + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + ja + r + ja + n
    }
    var mt, li, si, fi, am, NM, PM, qM, FM, MM, DM, kM, GM, VM, UM, ui, Yr, Qr, lt, ft, sm, WM, HM, em, BM, tm, XM, ci, sr, St, $r, jM, ja, um, za, Ka, cm, ur, cr, lr, Zr, lm, Jr, en, fr, dr, pr, gr, di, zM, fm, Ya, dm, ai, YM, $M, e1, nm, n1, i1, a1, s1, u1, $a, d1, p1, g1, h1, b1, _1, w1, hm, ym = ye(() => {
        "use strict";
        mt = pe(Pv()), li = pe(zv()), si = pe($v()), fi = pe($t());
        We();
        Jv();
        Ra();
        am = pe(Pa());
        Wa();
        ri();
        ({
            BACKGROUND: NM,
            TRANSFORM: PM,
            TRANSLATE_3D: qM,
            SCALE_3D: FM,
            ROTATE_X: MM,
            ROTATE_Y: DM,
            ROTATE_Z: kM,
            SKEW: GM,
            PRESERVE_3D: VM,
            FLEX: UM,
            OPACITY: ui,
            FILTER: Yr,
            FONT_VARIATION_SETTINGS: Qr,
            WIDTH: lt,
            HEIGHT: ft,
            BACKGROUND_COLOR: sm,
            BORDER_COLOR: WM,
            COLOR: HM,
            CHILDREN: em,
            IMMEDIATE_CHILDREN: BM,
            SIBLINGS: tm,
            PARENT: XM,
            DISPLAY: ci,
            WILL_CHANGE: sr,
            AUTO: St,
            COMMA_DELIMITER: $r,
            COLON_DELIMITER: jM,
            BAR_DELIMITER: ja,
            RENDER_TRANSFORM: um,
            RENDER_GENERAL: za,
            RENDER_STYLE: Ka,
            RENDER_PLUGIN: cm
        } = Ne), {
            TRANSFORM_MOVE: ur,
            TRANSFORM_SCALE: cr,
            TRANSFORM_ROTATE: lr,
            TRANSFORM_SKEW: Zr,
            STYLE_OPACITY: lm,
            STYLE_FILTER: Jr,
            STYLE_FONT_VARIATION: en,
            STYLE_SIZE: fr,
            STYLE_BACKGROUND_COLOR: dr,
            STYLE_BORDER: pr,
            STYLE_TEXT_COLOR: gr,
            GENERAL_DISPLAY: di,
            OBJECT_VALUE: zM
        } = Ue, fm = e => e.trim(), Ya = Object.freeze({
            [dr]: sm,
            [pr]: WM,
            [gr]: HM
        }), dm = Object.freeze({
            [At]: PM,
            [sm]: NM,
            [ui]: ui,
            [Yr]: Yr,
            [lt]: lt,
            [ft]: ft,
            [Qr]: Qr
        }), ai = new Map;
        YM = 1;
        $M = 1;
        e1 = (e, t) => e === t;
        nm = /px/, n1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = d1[n.type]), r), e || {}), i1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = p1[n.type] || n.defaultValue || 0), r), e || {});
        a1 = (e, t) => (t && (e[t.type] = t.value || 0), e), s1 = (e, t) => (t && (e[t.type] = t.value || 0), e), u1 = (e, t, r) => {
            if (Dt(e)) return Da(e)(r, t);
            switch (e) {
                case Jr:
                    {
                        let n = (0, si.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case en:
                    {
                        let n = (0, si.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        $a = {
            [ur]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [cr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [lr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Zr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, d1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), p1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), g1 = (e, t) => {
            let r = (0, si.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, h1 = Object.keys($a);
        b1 = "\\(([^)]+)\\)", _1 = /^rgb/, w1 = RegExp(`rgba?${b1}`);
        hm = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case ur:
                case cr:
                case lr:
                case Zr:
                    e(n, At, r);
                    break;
                case Jr:
                    e(n, Yr, r);
                    break;
                case en:
                    e(n, Qr, r);
                    break;
                case lm:
                    e(n, ui, r);
                    break;
                case fr:
                    e(n, lt, r), e(n, ft, r);
                    break;
                case dr:
                case pr:
                case gr:
                    e(n, Ya[t], r);
                    break;
                case di:
                    e(n, ci, r);
                    break
            }
        }
    });
    var Vt = c(De => {
        "use strict";
        var hr = vn().default;
        Object.defineProperty(De, "__esModule", {
            value: !0
        });
        De.IX2VanillaUtils = De.IX2VanillaPlugins = De.IX2ElementsReducer = De.IX2Easings = De.IX2EasingUtils = De.IX2BrowserSupport = void 0;
        var D1 = hr((ri(), it(pv)));
        De.IX2BrowserSupport = D1;
        var k1 = hr((Ca(), it(zr)));
        De.IX2Easings = k1;
        var G1 = hr((Ra(), it(bv)));
        De.IX2EasingUtils = G1;
        var V1 = hr((Tv(), it(Iv)));
        De.IX2ElementsReducer = V1;
        var U1 = hr((Wa(), it(Lv)));
        De.IX2VanillaPlugins = U1;
        var W1 = hr((ym(), it(mm)));
        De.IX2VanillaUtils = W1
    });
    var gi, yt, H1, B1, X1, j1, z1, K1, pi, Em, Y1, Q1, Za, $1, Z1, J1, eD, bm, _m = ye(() => {
        "use strict";
        We();
        gi = pe(Vt()), yt = pe($t()), {
            IX2_RAW_DATA_IMPORTED: H1,
            IX2_SESSION_STOPPED: B1,
            IX2_INSTANCE_ADDED: X1,
            IX2_INSTANCE_STARTED: j1,
            IX2_INSTANCE_REMOVED: z1,
            IX2_ANIMATION_FRAME_CHANGED: K1
        } = xe, {
            optimizeFloat: pi,
            applyEasing: Em,
            createBezierEasing: Y1
        } = gi.IX2EasingUtils, {
            RENDER_GENERAL: Q1
        } = Ne, {
            getItemConfigByKey: Za,
            getRenderType: $1,
            getStyleProp: Z1
        } = gi.IX2VanillaUtils, J1 = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: s,
                restingValue: a,
                actionTypeId: u,
                customEasingFn: f,
                skipMotion: E,
                skipToValue: p
            } = e, {
                parameters: _
            } = t.payload, m = Math.max(1 - s, .01), b = _[n];
            b == null && (m = 1, b = a);
            let w = Math.max(b, 0) || 0,
                x = pi(w - r),
                I = E ? p : pi(r + x * m),
                L = I * 100;
            if (I === r && e.current) return e;
            let R, P, D, q;
            for (let j = 0, {
                    length: Z
                } = i; j < Z; j++) {
                let {
                    keyframe: ee,
                    actionItems: ie
                } = i[j];
                if (j === 0 && (R = ie[0]), L >= ee) {
                    R = ie[0];
                    let G = i[j + 1],
                        S = G && L !== ee;
                    P = S ? G.actionItems[0] : null, S && (D = ee / 100, q = (G.keyframe - ee) / 100)
                }
            }
            let K = {};
            if (R && !P)
                for (let j = 0, {
                        length: Z
                    } = o; j < Z; j++) {
                    let ee = o[j];
                    K[ee] = Za(u, ee, R.config)
                } else if (R && P && D !== void 0 && q !== void 0) {
                    let j = (I - D) / q,
                        Z = R.config.easing,
                        ee = Em(Z, j, f);
                    for (let ie = 0, {
                            length: G
                        } = o; ie < G; ie++) {
                        let S = o[ie],
                            k = Za(u, S, R.config),
                            te = (Za(u, S, P.config) - k) * ee + k;
                        K[S] = te
                    }
                }
            return (0, yt.merge)(e, {
                position: I,
                current: K
            })
        }, eD = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: s,
                verbose: a,
                actionItem: u,
                destination: f,
                destinationKeys: E,
                pluginDuration: p,
                instanceDelay: _,
                customEasingFn: m,
                skipMotion: b
            } = e, w = u.config.easing, {
                duration: x,
                delay: I
            } = u.config;
            p != null && (x = p), I = _ ? ? I, s === Q1 ? x = 0 : (o || b) && (x = I = 0);
            let {
                now: L
            } = t.payload;
            if (r && n) {
                let R = L - (i + I);
                if (a) {
                    let j = L - i,
                        Z = x + I,
                        ee = pi(Math.min(Math.max(0, j / Z), 1));
                    e = (0, yt.set)(e, "verboseTimeElapsed", Z * ee)
                }
                if (R < 0) return e;
                let P = pi(Math.min(Math.max(0, R / x), 1)),
                    D = Em(w, P, m),
                    q = {},
                    K = null;
                return E.length && (K = E.reduce((j, Z) => {
                    let ee = f[Z],
                        ie = parseFloat(n[Z]) || 0,
                        S = (parseFloat(ee) - ie) * D + ie;
                    return j[Z] = S, j
                }, {})), q.current = K, q.position = P, P === 1 && (q.active = !1, q.complete = !0), (0, yt.merge)(e, q)
            }
            return e
        }, bm = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case H1:
                    return t.payload.ixInstances || Object.freeze({});
                case B1:
                    return Object.freeze({});
                case X1:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: f,
                            isCarrier: E,
                            origin: p,
                            destination: _,
                            immediate: m,
                            verbose: b,
                            continuous: w,
                            parameterId: x,
                            actionGroups: I,
                            smoothing: L,
                            restingValue: R,
                            pluginInstance: P,
                            pluginDuration: D,
                            instanceDelay: q,
                            skipMotion: K,
                            skipToValue: j
                        } = t.payload,
                        {
                            actionTypeId: Z
                        } = i,
                        ee = $1(Z),
                        ie = Z1(ee, Z),
                        G = Object.keys(_).filter(k => _[k] != null && typeof _[k] != "string"),
                        {
                            easing: S
                        } = i.config;
                        return (0, yt.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: p,
                            destination: _,
                            destinationKeys: G,
                            immediate: m,
                            verbose: b,
                            current: null,
                            actionItem: i,
                            actionTypeId: Z,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: f,
                            renderType: ee,
                            isCarrier: E,
                            styleProp: ie,
                            continuous: w,
                            parameterId: x,
                            actionGroups: I,
                            smoothing: L,
                            restingValue: R,
                            pluginInstance: P,
                            pluginDuration: D,
                            instanceDelay: q,
                            skipMotion: K,
                            skipToValue: j,
                            customEasingFn: Array.isArray(S) && S.length === 4 ? Y1(S) : void 0
                        })
                    }
                case j1:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, yt.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case z1:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let s = 0; s < o; s++) {
                            let a = i[s];
                            a !== r && (n[a] = e[a])
                        }
                        return n
                    }
                case K1:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let s = n[o],
                                a = e[s],
                                u = a.continuous ? J1 : eD;
                            r = (0, yt.set)(r, s, u(a, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var tD, rD, nD, wm, Im = ye(() => {
        "use strict";
        We();
        ({
            IX2_RAW_DATA_IMPORTED: tD,
            IX2_SESSION_STOPPED: rD,
            IX2_PARAMETER_CHANGED: nD
        } = xe), wm = (e = {}, t) => {
            switch (t.type) {
                case tD:
                    return t.payload.ixParameters || {};
                case rD:
                    return {};
                case nD:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var Om = {};
    Ve(Om, {
        default: () => oD
    });
    var Tm, xm, iD, oD, Am = ye(() => {
        "use strict";
        Tm = pe(Ko());
        kf();
        od();
        ud();
        xm = pe(Vt());
        _m();
        Im();
        ({
            ixElements: iD
        } = xm.IX2ElementsReducer), oD = (0, Tm.combineReducers)({
            ixData: Df,
            ixRequest: id,
            ixSession: sd,
            ixElements: iD,
            ixInstances: bm,
            ixParameters: wm
        })
    });
    var Cm = c((gj, Sm) => {
        var aD = Tt(),
            sD = Oe(),
            uD = ht(),
            cD = "[object String]";

        function lD(e) {
            return typeof e == "string" || !sD(e) && uD(e) && aD(e) == cD
        }
        Sm.exports = lD
    });
    var Lm = c((hj, Rm) => {
        var fD = wa(),
            dD = fD("length");
        Rm.exports = dD
    });
    var Pm = c((vj, Nm) => {
        var pD = "\\ud800-\\udfff",
            gD = "\\u0300-\\u036f",
            hD = "\\ufe20-\\ufe2f",
            vD = "\\u20d0-\\u20ff",
            mD = gD + hD + vD,
            yD = "\\ufe0e\\ufe0f",
            ED = "\\u200d",
            bD = RegExp("[" + ED + pD + mD + yD + "]");

        function _D(e) {
            return bD.test(e)
        }
        Nm.exports = _D
    });
    var Wm = c((mj, Um) => {
        var Fm = "\\ud800-\\udfff",
            wD = "\\u0300-\\u036f",
            ID = "\\ufe20-\\ufe2f",
            TD = "\\u20d0-\\u20ff",
            xD = wD + ID + TD,
            OD = "\\ufe0e\\ufe0f",
            AD = "[" + Fm + "]",
            Ja = "[" + xD + "]",
            es = "\\ud83c[\\udffb-\\udfff]",
            SD = "(?:" + Ja + "|" + es + ")",
            Mm = "[^" + Fm + "]",
            Dm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            km = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            CD = "\\u200d",
            Gm = SD + "?",
            Vm = "[" + OD + "]?",
            RD = "(?:" + CD + "(?:" + [Mm, Dm, km].join("|") + ")" + Vm + Gm + ")*",
            LD = Vm + Gm + RD,
            ND = "(?:" + [Mm + Ja + "?", Ja, Dm, km, AD].join("|") + ")",
            qm = RegExp(es + "(?=" + es + ")|" + ND + LD, "g");

        function PD(e) {
            for (var t = qm.lastIndex = 0; qm.test(e);) ++t;
            return t
        }
        Um.exports = PD
    });
    var Bm = c((yj, Hm) => {
        var qD = Lm(),
            FD = Pm(),
            MD = Wm();

        function DD(e) {
            return FD(e) ? MD(e) : qD(e)
        }
        Hm.exports = DD
    });
    var jm = c((Ej, Xm) => {
        var kD = jn(),
            GD = zn(),
            VD = Ft(),
            UD = Cm(),
            WD = Bm(),
            HD = "[object Map]",
            BD = "[object Set]";

        function XD(e) {
            if (e == null) return 0;
            if (VD(e)) return UD(e) ? WD(e) : e.length;
            var t = GD(e);
            return t == HD || t == BD ? e.size : kD(e).length
        }
        Xm.exports = XD
    });
    var Km = c((bj, zm) => {
        var jD = "Expected a function";

        function zD(e) {
            if (typeof e != "function") throw new TypeError(jD);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        zm.exports = zD
    });
    var ts = c((_j, Ym) => {
        var KD = xt(),
            YD = function() {
                try {
                    var e = KD(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Ym.exports = YD
    });
    var rs = c((wj, $m) => {
        var Qm = ts();

        function QD(e, t, r) {
            t == "__proto__" && Qm ? Qm(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        $m.exports = QD
    });
    var Jm = c((Ij, Zm) => {
        var $D = rs(),
            ZD = Mn(),
            JD = Object.prototype,
            e2 = JD.hasOwnProperty;

        function t2(e, t, r) {
            var n = e[t];
            (!(e2.call(e, t) && ZD(n, r)) || r === void 0 && !(t in e)) && $D(e, t, r)
        }
        Zm.exports = t2
    });
    var ry = c((Tj, ty) => {
        var r2 = Jm(),
            n2 = Br(),
            i2 = Wn(),
            ey = ct(),
            o2 = or();

        function a2(e, t, r, n) {
            if (!ey(e)) return e;
            t = n2(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = o2(t[i]),
                    f = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var E = a[u];
                    f = n ? n(E, u, a) : void 0, f === void 0 && (f = ey(E) ? E : i2(t[i + 1]) ? [] : {})
                }
                r2(a, u, f), a = a[u]
            }
            return e
        }
        ty.exports = a2
    });
    var iy = c((xj, ny) => {
        var s2 = Qn(),
            u2 = ry(),
            c2 = Br();

        function l2(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var s = t[n],
                    a = s2(e, s);
                r(a, s) && u2(o, c2(s, e), a)
            }
            return o
        }
        ny.exports = l2
    });
    var ay = c((Oj, oy) => {
        var f2 = Vn(),
            d2 = Fo(),
            p2 = sa(),
            g2 = aa(),
            h2 = Object.getOwnPropertySymbols,
            v2 = h2 ? function(e) {
                for (var t = []; e;) f2(t, p2(e)), e = d2(e);
                return t
            } : g2;
        oy.exports = v2
    });
    var uy = c((Aj, sy) => {
        function m2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        sy.exports = m2
    });
    var ly = c((Sj, cy) => {
        var y2 = ct(),
            E2 = Xn(),
            b2 = uy(),
            _2 = Object.prototype,
            w2 = _2.hasOwnProperty;

        function I2(e) {
            if (!y2(e)) return b2(e);
            var t = E2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !w2.call(e, n)) || r.push(n);
            return r
        }
        cy.exports = I2
    });
    var dy = c((Cj, fy) => {
        var T2 = ca(),
            x2 = ly(),
            O2 = Ft();

        function A2(e) {
            return O2(e) ? T2(e, !0) : x2(e)
        }
        fy.exports = A2
    });
    var gy = c((Rj, py) => {
        var S2 = oa(),
            C2 = ay(),
            R2 = dy();

        function L2(e) {
            return S2(e, R2, C2)
        }
        py.exports = L2
    });
    var vy = c((Lj, hy) => {
        var N2 = _a(),
            P2 = Ot(),
            q2 = iy(),
            F2 = gy();

        function M2(e, t) {
            if (e == null) return {};
            var r = N2(F2(e), function(n) {
                return [n]
            });
            return t = P2(t), q2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        hy.exports = M2
    });
    var yy = c((Nj, my) => {
        var D2 = Ot(),
            k2 = Km(),
            G2 = vy();

        function V2(e, t) {
            return G2(e, k2(D2(t)))
        }
        my.exports = V2
    });
    var by = c((Pj, Ey) => {
        var U2 = jn(),
            W2 = zn(),
            H2 = kr(),
            B2 = Oe(),
            X2 = Ft(),
            j2 = Un(),
            z2 = Xn(),
            K2 = Bn(),
            Y2 = "[object Map]",
            Q2 = "[object Set]",
            $2 = Object.prototype,
            Z2 = $2.hasOwnProperty;

        function J2(e) {
            if (e == null) return !0;
            if (X2(e) && (B2(e) || typeof e == "string" || typeof e.splice == "function" || j2(e) || K2(e) || H2(e))) return !e.length;
            var t = W2(e);
            if (t == Y2 || t == Q2) return !e.size;
            if (z2(e)) return !U2(e).length;
            for (var r in e)
                if (Z2.call(e, r)) return !1;
            return !0
        }
        Ey.exports = J2
    });
    var wy = c((qj, _y) => {
        var ek = rs(),
            tk = Ha(),
            rk = Ot();

        function nk(e, t) {
            var r = {};
            return t = rk(t, 3), tk(e, function(n, i, o) {
                ek(r, i, t(n, i, o))
            }), r
        }
        _y.exports = nk
    });
    var Ty = c((Fj, Iy) => {
        function ik(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        Iy.exports = ik
    });
    var Oy = c((Mj, xy) => {
        var ok = Zn();

        function ak(e) {
            return typeof e == "function" ? e : ok
        }
        xy.exports = ak
    });
    var Sy = c((Dj, Ay) => {
        var sk = Ty(),
            uk = Ba(),
            ck = Oy(),
            lk = Oe();

        function fk(e, t) {
            var r = lk(e) ? sk : uk;
            return r(e, ck(t))
        }
        Ay.exports = fk
    });
    var Ry = c((kj, Cy) => {
        var dk = Ze(),
            pk = function() {
                return dk.Date.now()
            };
        Cy.exports = pk
    });
    var Py = c((Gj, Ny) => {
        var gk = ct(),
            ns = Ry(),
            Ly = Jn(),
            hk = "Expected a function",
            vk = Math.max,
            mk = Math.min;

        function yk(e, t, r) {
            var n, i, o, s, a, u, f = 0,
                E = !1,
                p = !1,
                _ = !0;
            if (typeof e != "function") throw new TypeError(hk);
            t = Ly(t) || 0, gk(r) && (E = !!r.leading, p = "maxWait" in r, o = p ? vk(Ly(r.maxWait) || 0, t) : o, _ = "trailing" in r ? !!r.trailing : _);

            function m(q) {
                var K = n,
                    j = i;
                return n = i = void 0, f = q, s = e.apply(j, K), s
            }

            function b(q) {
                return f = q, a = setTimeout(I, t), E ? m(q) : s
            }

            function w(q) {
                var K = q - u,
                    j = q - f,
                    Z = t - K;
                return p ? mk(Z, o - j) : Z
            }

            function x(q) {
                var K = q - u,
                    j = q - f;
                return u === void 0 || K >= t || K < 0 || p && j >= o
            }

            function I() {
                var q = ns();
                if (x(q)) return L(q);
                a = setTimeout(I, w(q))
            }

            function L(q) {
                return a = void 0, _ && n ? m(q) : (n = i = void 0, s)
            }

            function R() {
                a !== void 0 && clearTimeout(a), f = 0, n = u = i = a = void 0
            }

            function P() {
                return a === void 0 ? s : L(ns())
            }

            function D() {
                var q = ns(),
                    K = x(q);
                if (n = arguments, i = this, u = q, K) {
                    if (a === void 0) return b(u);
                    if (p) return clearTimeout(a), a = setTimeout(I, t), m(u)
                }
                return a === void 0 && (a = setTimeout(I, t)), s
            }
            return D.cancel = R, D.flush = P, D
        }
        Ny.exports = yk
    });
    var Fy = c((Vj, qy) => {
        var Ek = Py(),
            bk = ct(),
            _k = "Expected a function";

        function wk(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(_k);
            return bk(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Ek(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        qy.exports = wk
    });
    var Dy = {};
    Ve(Dy, {
        actionListPlaybackChanged: () => mr,
        animationFrameChanged: () => vi,
        clearRequested: () => zk,
        elementStateChanged: () => fs,
        eventListenerAdded: () => hi,
        eventStateChanged: () => us,
        instanceAdded: () => cs,
        instanceRemoved: () => ls,
        instanceStarted: () => mi,
        mediaQueriesDefined: () => ps,
        parameterChanged: () => vr,
        playbackRequested: () => Xk,
        previewRequested: () => Bk,
        rawDataImported: () => is,
        sessionInitialized: () => os,
        sessionStarted: () => as,
        sessionStopped: () => ss,
        stopRequested: () => jk,
        testFrameRendered: () => Kk,
        viewportWidthChanged: () => ds
    });
    var My, Ik, Tk, xk, Ok, Ak, Sk, Ck, Rk, Lk, Nk, Pk, qk, Fk, Mk, Dk, kk, Gk, Vk, Uk, Wk, Hk, is, os, as, ss, Bk, Xk, jk, zk, hi, Kk, us, vi, vr, cs, mi, ls, fs, mr, ds, ps, yi = ye(() => {
        "use strict";
        We();
        My = pe(Vt()), {
            IX2_RAW_DATA_IMPORTED: Ik,
            IX2_SESSION_INITIALIZED: Tk,
            IX2_SESSION_STARTED: xk,
            IX2_SESSION_STOPPED: Ok,
            IX2_PREVIEW_REQUESTED: Ak,
            IX2_PLAYBACK_REQUESTED: Sk,
            IX2_STOP_REQUESTED: Ck,
            IX2_CLEAR_REQUESTED: Rk,
            IX2_EVENT_LISTENER_ADDED: Lk,
            IX2_TEST_FRAME_RENDERED: Nk,
            IX2_EVENT_STATE_CHANGED: Pk,
            IX2_ANIMATION_FRAME_CHANGED: qk,
            IX2_PARAMETER_CHANGED: Fk,
            IX2_INSTANCE_ADDED: Mk,
            IX2_INSTANCE_STARTED: Dk,
            IX2_INSTANCE_REMOVED: kk,
            IX2_ELEMENT_STATE_CHANGED: Gk,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: Vk,
            IX2_VIEWPORT_WIDTH_CHANGED: Uk,
            IX2_MEDIA_QUERIES_DEFINED: Wk
        } = xe, {
            reifyState: Hk
        } = My.IX2VanillaUtils, is = e => ({
            type: Ik,
            payload: { ...Hk(e)
            }
        }), os = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: Tk,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), as = () => ({
            type: xk
        }), ss = () => ({
            type: Ok
        }), Bk = ({
            rawData: e,
            defer: t
        }) => ({
            type: Ak,
            payload: {
                defer: t,
                rawData: e
            }
        }), Xk = ({
            actionTypeId: e = Ue.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: s,
            verbose: a,
            rawData: u
        }) => ({
            type: Sk,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: s,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }), jk = e => ({
            type: Ck,
            payload: {
                actionListId: e
            }
        }), zk = () => ({
            type: Rk
        }), hi = (e, t) => ({
            type: Lk,
            payload: {
                target: e,
                listenerParams: t
            }
        }), Kk = (e = 1) => ({
            type: Nk,
            payload: {
                step: e
            }
        }), us = (e, t) => ({
            type: Pk,
            payload: {
                stateKey: e,
                newState: t
            }
        }), vi = (e, t) => ({
            type: qk,
            payload: {
                now: e,
                parameters: t
            }
        }), vr = (e, t) => ({
            type: Fk,
            payload: {
                key: e,
                value: t
            }
        }), cs = e => ({
            type: Mk,
            payload: { ...e
            }
        }), mi = (e, t) => ({
            type: Dk,
            payload: {
                instanceId: e,
                time: t
            }
        }), ls = e => ({
            type: kk,
            payload: {
                instanceId: e
            }
        }), fs = (e, t, r, n) => ({
            type: Gk,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), mr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: Vk,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), ds = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: Uk,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), ps = () => ({
            type: Wk
        })
    });
    var ke = {};
    Ve(ke, {
        elementContains: () => vs,
        getChildElements: () => iG,
        getClosestElement: () => tn,
        getProperty: () => Jk,
        getQuerySelector: () => hs,
        getRefType: () => ms,
        getSiblingElements: () => oG,
        getStyle: () => Zk,
        getValidDocument: () => tG,
        isSiblingNode: () => nG,
        matchSelector: () => eG,
        queryDocument: () => rG,
        setStyle: () => $k
    });

    function $k(e, t, r) {
        e.style[t] = r
    }

    function Zk(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function Jk(e, t) {
        return e[t]
    }

    function eG(e) {
        return t => t[gs](e)
    }

    function hs({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(ky) !== -1) {
                let n = e.split(ky),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(Vy)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function tG(e) {
        return e == null || e === document.documentElement.getAttribute(Vy) ? document : null
    }

    function rG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function vs(e, t) {
        return e.contains(t)
    }

    function nG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function iG(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function oG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function ms(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? Yk : Qk : null
    }
    var Gy, gs, ky, Yk, Qk, Vy, tn, Uy = ye(() => {
        "use strict";
        Gy = pe(Vt());
        We();
        ({
            ELEMENT_MATCHES: gs
        } = Gy.IX2BrowserSupport), {
            IX2_ID_DELIMITER: ky,
            HTML_ELEMENT: Yk,
            PLAIN_OBJECT: Qk,
            WF_PAGE: Vy
        } = Ne;
        tn = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[gs] && r[gs](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var ys = c((Hj, Hy) => {
        var aG = ct(),
            Wy = Object.create,
            sG = function() {
                function e() {}
                return function(t) {
                    if (!aG(t)) return {};
                    if (Wy) return Wy(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Hy.exports = sG
    });
    var Ei = c((Bj, By) => {
        function uG() {}
        By.exports = uG
    });
    var _i = c((Xj, Xy) => {
        var cG = ys(),
            lG = Ei();

        function bi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        bi.prototype = cG(lG.prototype);
        bi.prototype.constructor = bi;
        Xy.exports = bi
    });
    var Yy = c((jj, Ky) => {
        var jy = Kt(),
            fG = kr(),
            dG = Oe(),
            zy = jy ? jy.isConcatSpreadable : void 0;

        function pG(e) {
            return dG(e) || fG(e) || !!(zy && e && e[zy])
        }
        Ky.exports = pG
    });
    var Zy = c((zj, $y) => {
        var gG = Vn(),
            hG = Yy();

        function Qy(e, t, r, n, i) {
            var o = -1,
                s = e.length;
            for (r || (r = hG), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && r(a) ? t > 1 ? Qy(a, t - 1, r, n, i) : gG(i, a) : n || (i[i.length] = a)
            }
            return i
        }
        $y.exports = Qy
    });
    var eE = c((Kj, Jy) => {
        var vG = Zy();

        function mG(e) {
            var t = e == null ? 0 : e.length;
            return t ? vG(e, 1) : []
        }
        Jy.exports = mG
    });
    var rE = c((Yj, tE) => {
        function yG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        tE.exports = yG
    });
    var oE = c((Qj, iE) => {
        var EG = rE(),
            nE = Math.max;

        function bG(e, t, r) {
            return t = nE(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = nE(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                    i = -1;
                    for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                    return a[t] = r(s), EG(e, this, a)
                }
        }
        iE.exports = bG
    });
    var sE = c(($j, aE) => {
        function _G(e) {
            return function() {
                return e
            }
        }
        aE.exports = _G
    });
    var lE = c((Zj, cE) => {
        var wG = sE(),
            uE = ts(),
            IG = Zn(),
            TG = uE ? function(e, t) {
                return uE(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: wG(t),
                    writable: !0
                })
            } : IG;
        cE.exports = TG
    });
    var dE = c((Jj, fE) => {
        var xG = 800,
            OG = 16,
            AG = Date.now;

        function SG(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = AG(),
                    i = OG - (n - r);
                if (r = n, i > 0) {
                    if (++t >= xG) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        fE.exports = SG
    });
    var gE = c((ez, pE) => {
        var CG = lE(),
            RG = dE(),
            LG = RG(CG);
        pE.exports = LG
    });
    var vE = c((tz, hE) => {
        var NG = eE(),
            PG = oE(),
            qG = gE();

        function FG(e) {
            return qG(PG(e, void 0, NG), e + "")
        }
        hE.exports = FG
    });
    var EE = c((rz, yE) => {
        var mE = la(),
            MG = mE && new mE;
        yE.exports = MG
    });
    var _E = c((nz, bE) => {
        function DG() {}
        bE.exports = DG
    });
    var Es = c((iz, IE) => {
        var wE = EE(),
            kG = _E(),
            GG = wE ? function(e) {
                return wE.get(e)
            } : kG;
        IE.exports = GG
    });
    var xE = c((oz, TE) => {
        var VG = {};
        TE.exports = VG
    });
    var bs = c((az, AE) => {
        var OE = xE(),
            UG = Object.prototype,
            WG = UG.hasOwnProperty;

        function HG(e) {
            for (var t = e.name + "", r = OE[t], n = WG.call(OE, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        AE.exports = HG
    });
    var Ii = c((sz, SE) => {
        var BG = ys(),
            XG = Ei(),
            jG = 4294967295;

        function wi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = jG, this.__views__ = []
        }
        wi.prototype = BG(XG.prototype);
        wi.prototype.constructor = wi;
        SE.exports = wi
    });
    var RE = c((uz, CE) => {
        function zG(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        CE.exports = zG
    });
    var NE = c((cz, LE) => {
        var KG = Ii(),
            YG = _i(),
            QG = RE();

        function $G(e) {
            if (e instanceof KG) return e.clone();
            var t = new YG(e.__wrapped__, e.__chain__);
            return t.__actions__ = QG(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        LE.exports = $G
    });
    var FE = c((lz, qE) => {
        var ZG = Ii(),
            PE = _i(),
            JG = Ei(),
            eV = Oe(),
            tV = ht(),
            rV = NE(),
            nV = Object.prototype,
            iV = nV.hasOwnProperty;

        function Ti(e) {
            if (tV(e) && !eV(e) && !(e instanceof ZG)) {
                if (e instanceof PE) return e;
                if (iV.call(e, "__wrapped__")) return rV(e)
            }
            return new PE(e)
        }
        Ti.prototype = JG.prototype;
        Ti.prototype.constructor = Ti;
        qE.exports = Ti
    });
    var DE = c((fz, ME) => {
        var oV = Ii(),
            aV = Es(),
            sV = bs(),
            uV = FE();

        function cV(e) {
            var t = sV(e),
                r = uV[t];
            if (typeof r != "function" || !(t in oV.prototype)) return !1;
            if (e === r) return !0;
            var n = aV(r);
            return !!n && e === n[0]
        }
        ME.exports = cV
    });
    var UE = c((dz, VE) => {
        var kE = _i(),
            lV = vE(),
            fV = Es(),
            _s = bs(),
            dV = Oe(),
            GE = DE(),
            pV = "Expected a function",
            gV = 8,
            hV = 32,
            vV = 128,
            mV = 256;

        function yV(e) {
            return lV(function(t) {
                var r = t.length,
                    n = r,
                    i = kE.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(pV);
                    if (i && !s && _s(o) == "wrapper") var s = new kE([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    o = t[n];
                    var a = _s(o),
                        u = a == "wrapper" ? fV(o) : void 0;
                    u && GE(u[0]) && u[1] == (vV | gV | hV | mV) && !u[4].length && u[9] == 1 ? s = s[_s(u[0])].apply(s, u[3]) : s = o.length == 1 && GE(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var f = arguments,
                        E = f[0];
                    if (s && f.length == 1 && dV(E)) return s.plant(E).value();
                    for (var p = 0, _ = r ? t[p].apply(this, f) : E; ++p < r;) _ = t[p].call(this, _);
                    return _
                }
            })
        }
        VE.exports = yV
    });
    var HE = c((pz, WE) => {
        var EV = UE(),
            bV = EV();
        WE.exports = bV
    });
    var XE = c((gz, BE) => {
        function _V(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        BE.exports = _V
    });
    var zE = c((hz, jE) => {
        var wV = XE(),
            ws = Jn();

        function IV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ws(r), r = r === r ? r : 0), t !== void 0 && (t = ws(t), t = t === t ? t : 0), wV(ws(e), t, r)
        }
        jE.exports = IV
    });
    var rb, nb, ib, ob, TV, xV, OV, AV, SV, CV, RV, LV, NV, PV, qV, FV, MV, DV, kV, ab, sb, GV, VV, UV, ub, WV, HV, cb, BV, Is, lb, KE, YE, fb, nn, XV, dt, db, jV, Be, tt, on, pb, Ts, QE, xs, zV, rn, KV, YV, QV, gb, $E, $V, ZE, ZV, JV, eU, JE, xi, Oi, eb, tb, hb, vb = ye(() => {
        "use strict";
        rb = pe(HE()), nb = pe($n()), ib = pe(zE());
        We();
        Os();
        yi();
        ob = pe(Vt()), {
            MOUSE_CLICK: TV,
            MOUSE_SECOND_CLICK: xV,
            MOUSE_DOWN: OV,
            MOUSE_UP: AV,
            MOUSE_OVER: SV,
            MOUSE_OUT: CV,
            DROPDOWN_CLOSE: RV,
            DROPDOWN_OPEN: LV,
            SLIDER_ACTIVE: NV,
            SLIDER_INACTIVE: PV,
            TAB_ACTIVE: qV,
            TAB_INACTIVE: FV,
            NAVBAR_CLOSE: MV,
            NAVBAR_OPEN: DV,
            MOUSE_MOVE: kV,
            PAGE_SCROLL_DOWN: ab,
            SCROLL_INTO_VIEW: sb,
            SCROLL_OUT_OF_VIEW: GV,
            PAGE_SCROLL_UP: VV,
            SCROLLING_IN_VIEW: UV,
            PAGE_FINISH: ub,
            ECOMMERCE_CART_CLOSE: WV,
            ECOMMERCE_CART_OPEN: HV,
            PAGE_START: cb,
            PAGE_SCROLL: BV
        } = Je, Is = "COMPONENT_ACTIVE", lb = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: KE
        } = Ne, {
            getNamespacedParameterId: YE
        } = ob.IX2VanillaUtils, fb = e => t => typeof t == "object" && e(t) ? !0 : t, nn = fb(({
            element: e,
            nativeEvent: t
        }) => e === t.target), XV = fb(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), dt = (0, rb.default)([nn, XV]), db = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !zV[i.eventTypeId]) return i
            }
            return null
        }, jV = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!db(e, n)
        }, Be = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: s
            } = t, {
                actionListId: a,
                autoStopEventId: u
            } = o.config, f = db(e, u);
            return f && yr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + KE + n.split(KE)[1],
                actionListId: (0, nb.default)(f, "action.config.actionListId")
            }), yr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), an({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), i
        }, tt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, on = {
            handler: tt(dt, Be)
        }, pb = { ...on,
            types: [Is, lb].join(" ")
        }, Ts = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], QE = "mouseover mouseout", xs = {
            types: Ts
        }, zV = {
            PAGE_START: cb,
            PAGE_FINISH: ub
        }, rn = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, ib.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), KV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), YV = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && o && s)
        }, QV = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = rn(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return KV(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, gb = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [Is, lb].indexOf(n) !== -1 ? n === Is : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, $E = e => (t, r) => {
            let n = {
                elementHovered: YV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, $V = e => (t, r) => {
            let n = { ...r,
                elementVisible: QV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, ZE = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = rn(), {
                event: {
                    config: s,
                    eventTypeId: a
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: f
            } = s, E = f === "PX", p = i - o, _ = Number((n / p).toFixed(2));
            if (r && r.percentTop === _) return r;
            let m = (E ? u : o * (u || 0) / 100) / p,
                b, w, x = 0;
            r && (b = _ > r.percentTop, w = r.scrollingDown !== b, x = w ? _ : r.anchorTop);
            let I = a === ab ? _ >= x + m : _ <= x - m,
                L = { ...r,
                    percentTop: _,
                    inBounds: I,
                    anchorTop: x,
                    scrollingDown: b
                };
            return r && I && (w || L.inBounds !== r.inBounds) && e(t, L) || L
        }, ZV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, JV = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, eU = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, JE = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, xi = (e = !0) => ({ ...pb,
            handler: tt(e ? dt : nn, gb((t, r) => r.isActive ? on.handler(t, r) : r))
        }), Oi = (e = !0) => ({ ...pb,
            handler: tt(e ? dt : nn, gb((t, r) => r.isActive ? r : on.handler(t, r)))
        }), eb = { ...xs,
            handler: $V((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: s
                } = o;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === sb === r ? (Be(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, tb = .05, hb = {
            [NV]: xi(),
            [PV]: Oi(),
            [LV]: xi(),
            [RV]: Oi(),
            [DV]: xi(!1),
            [MV]: Oi(!1),
            [qV]: xi(),
            [FV]: Oi(),
            [HV]: {
                types: "ecommerce-cart-open",
                handler: tt(dt, Be)
            },
            [WV]: {
                types: "ecommerce-cart-close",
                handler: tt(dt, Be)
            },
            [TV]: {
                types: "click",
                handler: tt(dt, JE((e, {
                    clickCount: t
                }) => {
                    jV(e) ? t === 1 && Be(e) : Be(e)
                }))
            },
            [xV]: {
                types: "click",
                handler: tt(dt, JE((e, {
                    clickCount: t
                }) => {
                    t === 2 && Be(e)
                }))
            },
            [OV]: { ...on,
                types: "mousedown"
            },
            [AV]: { ...on,
                types: "mouseup"
            },
            [SV]: {
                types: QE,
                handler: tt(dt, $E((e, t) => {
                    t.elementHovered && Be(e)
                }))
            },
            [CV]: {
                types: QE,
                handler: tt(dt, $E((e, t) => {
                    t.elementHovered || Be(e)
                }))
            },
            [kV]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: a,
                        continuousParameterGroupId: u,
                        reverse: f,
                        restingState: E = 0
                    } = r, {
                        clientX: p = o.clientX,
                        clientY: _ = o.clientY,
                        pageX: m = o.pageX,
                        pageY: b = o.pageY
                    } = n, w = a === "X_AXIS", x = n.type === "mouseout", I = E / 100, L = u, R = !1;
                    switch (s) {
                        case ut.VIEWPORT:
                            {
                                I = w ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case ut.PAGE:
                            {
                                let {
                                    scrollLeft: P,
                                    scrollTop: D,
                                    scrollWidth: q,
                                    scrollHeight: K
                                } = rn();I = w ? Math.min(P + m, q) / q : Math.min(D + b, K) / K;
                                break
                            }
                        case ut.ELEMENT:
                        default:
                            {
                                L = YE(i, u);
                                let P = n.type.indexOf("mouse") === 0;
                                if (P && dt({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let D = t.getBoundingClientRect(),
                                    {
                                        left: q,
                                        top: K,
                                        width: j,
                                        height: Z
                                    } = D;
                                if (!P && !ZV({
                                        left: p,
                                        top: _
                                    }, D)) break;R = !0,
                                I = w ? (p - q) / j : (_ - K) / Z;
                                break
                            }
                    }
                    return x && (I > 1 - tb || I < tb) && (I = Math.round(I)), (s !== ut.ELEMENT || R || R !== o.elementHovered) && (I = f ? 1 - I : I, e.dispatch(vr(L, I))), {
                        elementHovered: R,
                        clientX: p,
                        clientY: _,
                        pageX: m,
                        pageY: b
                    }
                }
            },
            [BV]: {
                types: Ts,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: s
                    } = rn(), a = i / (o - s);
                    a = n ? 1 - a : a, e.dispatch(vr(r, a))
                }
            },
            [UV]: {
                types: Ts,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: s,
                        scrollWidth: a,
                        scrollHeight: u,
                        clientHeight: f
                    } = rn(), {
                        basedOn: E,
                        selectedAxis: p,
                        continuousParameterGroupId: _,
                        startsEntering: m,
                        startsExiting: b,
                        addEndOffset: w,
                        addStartOffset: x,
                        addOffsetValue: I = 0,
                        endOffsetValue: L = 0
                    } = r, R = p === "X_AXIS";
                    if (E === ut.VIEWPORT) {
                        let P = R ? o / a : s / u;
                        return P !== i.scrollPercent && t.dispatch(vr(_, P)), {
                            scrollPercent: P
                        }
                    } else {
                        let P = YE(n, _),
                            D = e.getBoundingClientRect(),
                            q = (x ? I : 0) / 100,
                            K = (w ? L : 0) / 100;
                        q = m ? q : 1 - q, K = b ? K : 1 - K;
                        let j = D.top + Math.min(D.height * q, f),
                            ee = D.top + D.height * K - j,
                            ie = Math.min(f + ee, u),
                            S = Math.min(Math.max(0, f - j), ie) / ie;
                        return S !== i.scrollPercent && t.dispatch(vr(P, S)), {
                            scrollPercent: S
                        }
                    }
                }
            },
            [sb]: eb,
            [GV]: eb,
            [ab]: { ...xs,
                handler: ZE((e, t) => {
                    t.scrollingDown && Be(e)
                })
            },
            [VV]: { ...xs,
                handler: ZE((e, t) => {
                    t.scrollingDown || Be(e)
                })
            },
            [ub]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: tt(nn, JV(Be))
            },
            [cb]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: tt(nn, eU(Be))
            }
        }
    });
    var Pb = {};
    Ve(Pb, {
        observeRequests: () => bU,
        startActionGroup: () => an,
        startEngine: () => Ni,
        stopActionGroup: () => yr,
        stopAllActionGroups: () => Rb,
        stopEngine: () => Pi
    });

    function bU(e) {
        Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: IU
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: TU
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: xU
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: OU
        })
    }

    function _U(e) {
        Ut({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Pi(e), Ob({
                    store: e,
                    elementApi: ke
                }), Ni({
                    store: e,
                    allowEvents: !0
                }), Ab()
            }
        })
    }

    function wU(e, t) {
        let r = Ut({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function IU({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Ni({
                store: r,
                rawData: e,
                allowEvents: !0
            }), Ab()
        };
        t ? setTimeout(n, 0) : n()
    }

    function Ab() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function TU(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: s,
            immediate: a,
            testManual: u,
            verbose: f = !0
        } = e, {
            rawData: E
        } = e;
        if (n && i && E && a) {
            let p = E.actionLists[n];
            p && (E = cU({
                actionList: p,
                actionItemId: i,
                rawData: E
            }))
        }
        if (Ni({
                store: t,
                rawData: E,
                allowEvents: s,
                testManual: u
            }), n && r === Ue.GENERAL_START_ACTION || As(r)) {
            yr({
                store: t,
                actionListId: n
            }), Cb({
                store: t,
                actionListId: n,
                eventId: o
            });
            let p = an({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: a,
                verbose: f
            });
            f && p && t.dispatch(mr({
                actionListId: n,
                isPlaying: !a
            }))
        }
    }

    function xU({
        actionListId: e
    }, t) {
        e ? yr({
            store: t,
            actionListId: e
        }) : Rb({
            store: t
        }), Pi(t)
    }

    function OU(e, t) {
        Pi(t), Ob({
            store: t,
            elementApi: ke
        })
    }

    function Ni({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(is(t)), i.active || (e.dispatch(os({
            hasBoundaryNodes: !!document.querySelector(Si),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (NU(e), AU(), e.getState().ixSession.hasDefinedMediaQueries && _U(e)), e.dispatch(as()), SU(e, n))
    }

    function AU() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(mb) === -1 && (e.className += ` ${mb}`)
    }

    function SU(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(vi(n, o)), t ? wU(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Pi(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(CU), pU(), e.dispatch(ss())
        }
    }

    function CU({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function RU({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: s,
        smoothing: a,
        restingValue: u
    }) {
        let {
            ixData: f,
            ixSession: E
        } = e.getState(), {
            events: p
        } = f, _ = p[n], {
            eventTypeId: m
        } = _, b = {}, w = {}, x = [], {
            continuousActionGroups: I
        } = s, {
            id: L
        } = s;
        lU(m, i) && (L = fU(t, L));
        let R = E.hasBoundaryNodes && r ? tn(r, Si) : null;
        I.forEach(P => {
            let {
                keyframe: D,
                actionItems: q
            } = P;
            q.forEach(K => {
                let {
                    actionTypeId: j
                } = K, {
                    target: Z
                } = K.config;
                if (!Z) return;
                let ee = Z.boundaryMode ? R : null,
                    ie = gU(Z) + Ss + j;
                if (w[ie] = LU(w[ie], D, K), !b[ie]) {
                    b[ie] = !0;
                    let {
                        config: G
                    } = K;
                    Ci({
                        config: G,
                        event: _,
                        eventTarget: r,
                        elementRoot: ee,
                        elementApi: ke
                    }).forEach(S => {
                        x.push({
                            element: S,
                            key: ie
                        })
                    })
                }
            })
        }), x.forEach(({
            element: P,
            key: D
        }) => {
            let q = w[D],
                K = (0, Et.default)(q, "[0].actionItems[0]", {}),
                {
                    actionTypeId: j
                } = K,
                Z = Li(j) ? Rs(j)(P, K) : null,
                ee = Cs({
                    element: P,
                    actionItem: K,
                    elementApi: ke
                }, Z);
            Ls({
                store: e,
                element: P,
                eventId: n,
                actionListId: o,
                actionItem: K,
                destination: ee,
                continuous: !0,
                parameterId: L,
                actionGroups: q,
                smoothing: a,
                restingValue: u,
                pluginInstance: Z
            })
        })
    }

    function LU(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function NU(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        Sb(e), (0, Er.default)(r, (i, o) => {
            let s = hb[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            kU({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && qU(e)
    }

    function qU(e) {
        let t = () => {
            Sb(e)
        };
        PU.forEach(r => {
            window.addEventListener(r, t), e.dispatch(hi(window, [r, t]))
        }), t()
    }

    function Sb(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(ds({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function kU({
        logic: e,
        store: t,
        events: r
    }) {
        GU(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: s
        } = o, a = FU(r, DU);
        if (!(0, bb.default)(a)) return;
        (0, Er.default)(a, (p, _) => {
            let m = r[_],
                {
                    action: b,
                    id: w,
                    mediaQueries: x = o.mediaQueryKeys
                } = m,
                {
                    actionListId: I
                } = b.config;
            hU(x, o.mediaQueryKeys) || t.dispatch(ps()), b.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION && (Array.isArray(m.config) ? m.config : [m.config]).forEach(R => {
                let {
                    continuousParameterGroupId: P
                } = R, D = (0, Et.default)(s, `${I}.continuousParameterGroups`, []), q = (0, Eb.default)(D, ({
                    id: Z
                }) => Z === P), K = (R.smoothing || 0) / 100, j = (R.restingState || 0) / 100;
                q && p.forEach((Z, ee) => {
                    let ie = w + Ss + ee;
                    RU({
                        store: t,
                        eventStateKey: ie,
                        eventTarget: Z,
                        eventId: w,
                        eventConfig: R,
                        actionListId: I,
                        parameterGroup: q,
                        smoothing: K,
                        restingValue: j
                    })
                })
            }), (b.actionTypeId === Ue.GENERAL_START_ACTION || As(b.actionTypeId)) && Cb({
                store: t,
                actionListId: I,
                eventId: w
            })
        });
        let u = p => {
                let {
                    ixSession: _
                } = t.getState();
                MU(a, (m, b, w) => {
                    let x = r[b],
                        I = _.eventState[w],
                        {
                            action: L,
                            mediaQueries: R = o.mediaQueryKeys
                        } = x;
                    if (!Ri(R, _.mediaQueryKey)) return;
                    let P = (D = {}) => {
                        let q = i({
                            store: t,
                            element: m,
                            event: x,
                            eventConfig: D,
                            nativeEvent: p,
                            eventStateKey: w
                        }, I);
                        vU(q, I) || t.dispatch(us(w, q))
                    };
                    L.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(x.config) ? x.config : [x.config]).forEach(P) : P()
                })
            },
            f = (0, Tb.default)(u, EU),
            E = ({
                target: p = document,
                types: _,
                throttle: m
            }) => {
                _.split(" ").filter(Boolean).forEach(b => {
                    let w = m ? f : u;
                    p.addEventListener(b, w), t.dispatch(hi(p, [b, w]))
                })
            };
        Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
    }

    function GU(e) {
        if (!yU) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], s = hs(o);
            t[s] || (i === Je.MOUSE_CLICK || i === Je.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function Cb({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: s
        } = n, a = s[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0, Et.default)(u, "actionItemGroups[0].actionItems", []),
                E = (0, Et.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!Ri(E, i.mediaQueryKey)) return;
            f.forEach(p => {
                let {
                    config: _,
                    actionTypeId: m
                } = p, b = _ ? .target ? .useEventTarget === !0 && _ ? .target ? .objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : _, w = Ci({
                    config: b,
                    event: a,
                    elementApi: ke
                }), x = Li(m);
                w.forEach(I => {
                    let L = x ? Rs(m)(I, p) : null;
                    Ls({
                        destination: Cs({
                            element: I,
                            actionItem: p,
                            elementApi: ke
                        }, L),
                        immediate: !0,
                        store: e,
                        element: I,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: L
                    })
                })
            })
        }
    }

    function Rb({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, Er.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                Ns(r, e), i && e.dispatch(mr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function yr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: s
        } = e.getState(), a = s.hasBoundaryNodes && r ? tn(r, Si) : null;
        (0, Er.default)(o, u => {
            let f = (0, Et.default)(u, "actionItem.config.target.boundaryMode"),
                E = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && E) {
                if (a && f && !vs(a, u.element)) return;
                Ns(u, e), u.verbose && e.dispatch(mr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function an({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: s,
        verbose: a
    }) {
        let {
            ixData: u,
            ixSession: f
        } = e.getState(), {
            events: E
        } = u, p = E[t] || {}, {
            mediaQueries: _ = u.mediaQueryKeys
        } = p, m = (0, Et.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: b,
            useFirstGroupAsInitialState: w
        } = m;
        if (!b || !b.length) return !1;
        o >= b.length && (0, Et.default)(p, "config.loop") && (o = 0), o === 0 && w && o++;
        let I = (o === 0 || o === 1 && w) && As(p.action ? .actionTypeId) ? p.config.delay : void 0,
            L = (0, Et.default)(b, [o, "actionItems"], []);
        if (!L.length || !Ri(_, f.mediaQueryKey)) return !1;
        let R = f.hasBoundaryNodes && r ? tn(r, Si) : null,
            P = aU(L),
            D = !1;
        return L.forEach((q, K) => {
            let {
                config: j,
                actionTypeId: Z
            } = q, ee = Li(Z), {
                target: ie
            } = j;
            if (!ie) return;
            let G = ie.boundaryMode ? R : null;
            Ci({
                config: j,
                event: p,
                eventTarget: r,
                elementRoot: G,
                elementApi: ke
            }).forEach((k, X) => {
                let H = ee ? Rs(Z)(k, q) : null,
                    te = ee ? mU(Z)(k, q) : null;
                D = !0;
                let oe = P === K && X === 0,
                    U = sU({
                        element: k,
                        actionItem: q
                    }),
                    B = Cs({
                        element: k,
                        actionItem: q,
                        elementApi: ke
                    }, H);
                Ls({
                    store: e,
                    element: k,
                    actionItem: q,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: oe,
                    computedStyle: U,
                    destination: B,
                    immediate: s,
                    verbose: a,
                    pluginInstance: H,
                    pluginDuration: te,
                    instanceDelay: I
                })
            })
        }), D
    }

    function Ls(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: s,
            pluginInstance: a,
            continuous: u,
            restingValue: f,
            eventId: E
        } = n, p = !u, _ = iU(), {
            ixElements: m,
            ixSession: b,
            ixData: w
        } = t.getState(), x = nU(m, i), {
            refState: I
        } = m[x] || {}, L = ms(i), R = b.reducedMotion && $o[o.actionTypeId], P;
        if (R && u) switch (w.events[E] ? .eventTypeId) {
            case Je.MOUSE_MOVE:
            case Je.MOUSE_MOVE_IN_VIEWPORT:
                P = f;
                break;
            default:
                P = .5;
                break
        }
        let D = uU(i, I, r, o, ke, a);
        if (t.dispatch(cs({
                instanceId: _,
                elementId: x,
                origin: D,
                refType: L,
                skipMotion: R,
                skipToValue: P,
                ...n
            })), Lb(document.body, "ix2-animation-started", _), s) {
            VU(t, _);
            return
        }
        Ut({
            store: t,
            select: ({
                ixInstances: q
            }) => q[_],
            onChange: Nb
        }), p && t.dispatch(mi(_, b.tick))
    }

    function Ns(e, t) {
        Lb(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: s
        } = i[r] || {};
        s === xb && dU(o, n, ke), t.dispatch(ls(e.id))
    }

    function Lb(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function VU(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(mi(t, 0)), e.dispatch(vi(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        Nb(n[t], e)
    }

    function Nb(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: s,
            actionTypeId: a,
            renderType: u,
            current: f,
            groupIndex: E,
            eventId: p,
            eventTarget: _,
            eventStateKey: m,
            actionListId: b,
            isCarrier: w,
            styleProp: x,
            verbose: I,
            pluginInstance: L
        } = e, {
            ixData: R,
            ixSession: P
        } = t.getState(), {
            events: D
        } = R, q = D[p] || {}, {
            mediaQueries: K = R.mediaQueryKeys
        } = q;
        if (Ri(K, P.mediaQueryKey) && (n || r || i)) {
            if (f || u === rU && i) {
                t.dispatch(fs(o, a, f, s));
                let {
                    ixElements: j
                } = t.getState(), {
                    ref: Z,
                    refType: ee,
                    refState: ie
                } = j[o] || {}, G = ie && ie[a];
                (ee === xb || Li(a)) && oU(Z, ie, G, p, s, x, ke, u, L)
            }
            if (i) {
                if (w) {
                    let j = an({
                        store: t,
                        eventId: p,
                        eventTarget: _,
                        eventStateKey: m,
                        actionListId: b,
                        groupIndex: E + 1,
                        verbose: I
                    });
                    I && !j && t.dispatch(mr({
                        actionListId: b,
                        isPlaying: !1
                    }))
                }
                Ns(e, t)
            }
        }
    }
    var Eb, Et, bb, _b, wb, Ib, Er, Tb, Ai, tU, As, Ss, Si, xb, rU, mb, Ci, nU, Cs, Ut, iU, oU, Ob, aU, sU, uU, cU, lU, fU, Ri, dU, pU, gU, hU, vU, Li, Rs, mU, yb, yU, EU, PU, FU, MU, DU, Os = ye(() => {
        "use strict";
        Eb = pe(Oa()), Et = pe($n()), bb = pe(jm()), _b = pe(yy()), wb = pe(by()), Ib = pe(wy()), Er = pe(Sy()), Tb = pe(Fy());
        We();
        Ai = pe(Vt());
        yi();
        Uy();
        vb();
        tU = Object.keys(Cn), As = e => tU.includes(e), {
            COLON_DELIMITER: Ss,
            BOUNDARY_SELECTOR: Si,
            HTML_ELEMENT: xb,
            RENDER_GENERAL: rU,
            W_MOD_IX: mb
        } = Ne, {
            getAffectedElements: Ci,
            getElementId: nU,
            getDestinationValues: Cs,
            observeStore: Ut,
            getInstanceId: iU,
            renderHTMLElement: oU,
            clearAllStyles: Ob,
            getMaxDurationItemIndex: aU,
            getComputedStyle: sU,
            getInstanceOrigin: uU,
            reduceListToGroup: cU,
            shouldNamespaceEventParameter: lU,
            getNamespacedParameterId: fU,
            shouldAllowMediaQuery: Ri,
            cleanupHTMLElement: dU,
            clearObjectCache: pU,
            stringifyTarget: gU,
            mediaQueriesEqual: hU,
            shallowEqual: vU
        } = Ai.IX2VanillaUtils, {
            isPluginType: Li,
            createPluginInstance: Rs,
            getPluginDuration: mU
        } = Ai.IX2VanillaPlugins, yb = navigator.userAgent, yU = yb.match(/iPad/i) || yb.match(/iPhone/), EU = 12;
        PU = ["resize", "orientationchange"];
        FU = (e, t) => (0, _b.default)((0, Ib.default)(e, t), wb.default), MU = (e, t) => {
            (0, Er.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let s = n + Ss + o;
                    t(i, n, s)
                })
            })
        }, DU = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ci({
                config: t,
                elementApi: ke
            })
        }
    });
    var Fb = c(bt => {
        "use strict";
        var UU = vn().default,
            WU = vu().default;
        Object.defineProperty(bt, "__esModule", {
            value: !0
        });
        bt.actions = void 0;
        bt.destroy = qb;
        bt.init = zU;
        bt.setEnv = jU;
        bt.store = void 0;
        tf();
        var HU = Ko(),
            BU = WU((Am(), it(Om))),
            Ps = (Os(), it(Pb)),
            XU = UU((yi(), it(Dy)));
        bt.actions = XU;
        var qs = bt.store = (0, HU.createStore)(BU.default);

        function jU(e) {
            e() && (0, Ps.observeRequests)(qs)
        }

        function zU(e) {
            qb(), (0, Ps.startEngine)({
                store: qs,
                rawData: e,
                allowEvents: !0
            })
        }

        function qb() {
            (0, Ps.stopEngine)(qs)
        }
    });
    var Gb = c((Tz, kb) => {
        "use strict";
        var Mb = Fe(),
            Db = Fb();
        Db.setEnv(Mb.env);
        Mb.define("ix2", kb.exports = function() {
            return Db
        })
    });
    var Ub = c((xz, Vb) => {
        "use strict";
        var br = Fe();
        br.define("links", Vb.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = br.env(),
                s = window.location,
                a = document.createElement("a"),
                u = "w--current",
                f = /index\.(html|php)$/,
                E = /\/$/,
                p, _;
            r.ready = r.design = r.preview = m;

            function m() {
                i = o && br.env("design"), _ = br.env("slug") || s.pathname || "", br.scroll.off(w), p = [];
                for (var I = document.links, L = 0; L < I.length; ++L) b(I[L]);
                p.length && (br.scroll.on(w), w())
            }

            function b(I) {
                if (!I.getAttribute("hreflang")) {
                    var L = i && I.getAttribute("href-disabled") || I.getAttribute("href");
                    if (a.href = L, !(L.indexOf(":") >= 0)) {
                        var R = e(I);
                        if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                            var P = e(a.hash);
                            P.length && p.push({
                                link: R,
                                sec: P,
                                active: !1
                            });
                            return
                        }
                        if (!(L === "#" || L === "")) {
                            var D = a.href === s.href || L === _ || f.test(L) && E.test(_);
                            x(R, u, D)
                        }
                    }
                }
            }

            function w() {
                var I = n.scrollTop(),
                    L = n.height();
                t.each(p, function(R) {
                    if (!R.link.attr("hreflang")) {
                        var P = R.link,
                            D = R.sec,
                            q = D.offset().top,
                            K = D.outerHeight(),
                            j = L * .5,
                            Z = D.is(":visible") && q + K - j >= I && q + j <= I + L;
                        R.active !== Z && (R.active = Z, x(P, u, Z))
                    }
                })
            }

            function x(I, L, R) {
                var P = I.hasClass(L);
                R && P || !R && !P || (R ? I.addClass(L) : I.removeClass(L))
            }
            return r
        })
    });
    var Hb = c((Oz, Wb) => {
        "use strict";
        var qi = Fe();
        qi.define("scroll", Wb.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = b() ? null : window.history,
                i = e(window),
                o = e(document),
                s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(G) {
                    window.setTimeout(G, 15)
                },
                u = qi.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                E = 'a[href="#"]',
                p = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
                _ = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                m = document.createElement("style");
            m.appendChild(document.createTextNode(_));

            function b() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var w = /^#[a-zA-Z0-9][\w:.-]*$/;

            function x(G) {
                return w.test(G.hash) && G.host + G.pathname === r.host + r.pathname
            }
            let I = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function L() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || I.matches
            }

            function R(G, S) {
                var k;
                switch (S) {
                    case "add":
                        k = G.attr("tabindex"), k ? G.attr("data-wf-tabindex-swap", k) : G.attr("tabindex", "-1");
                        break;
                    case "remove":
                        k = G.attr("data-wf-tabindex-swap"), k ? (G.attr("tabindex", k), G.removeAttr("data-wf-tabindex-swap")) : G.removeAttr("tabindex");
                        break
                }
                G.toggleClass("wf-force-outline-none", S === "add")
            }

            function P(G) {
                var S = G.currentTarget;
                if (!(qi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(S.className))) {
                    var k = x(S) ? S.hash : "";
                    if (k !== "") {
                        var X = e(k);
                        X.length && (G && (G.preventDefault(), G.stopPropagation()), D(k, G), window.setTimeout(function() {
                            q(X, function() {
                                R(X, "add"), X.get(0).focus({
                                    preventScroll: !0
                                }), R(X, "remove")
                            })
                        }, G ? 0 : 300))
                    }
                }
            }

            function D(G) {
                if (r.hash !== G && n && n.pushState && !(qi.env.chrome && r.protocol === "file:")) {
                    var S = n.state && n.state.hash;
                    S !== G && n.pushState({
                        hash: G
                    }, "", G)
                }
            }

            function q(G, S) {
                var k = i.scrollTop(),
                    X = K(G);
                if (k !== X) {
                    var H = j(G, k, X),
                        te = Date.now(),
                        oe = function() {
                            var U = Date.now() - te;
                            window.scroll(0, Z(k, X, U, H)), U <= H ? a(oe) : typeof S == "function" && S()
                        };
                    a(oe)
                }
            }

            function K(G) {
                var S = e(f),
                    k = S.css("position") === "fixed" ? S.outerHeight() : 0,
                    X = G.offset().top - k;
                if (G.data("scroll") === "mid") {
                    var H = i.height() - k,
                        te = G.outerHeight();
                    te < H && (X -= Math.round((H - te) / 2))
                }
                return X
            }

            function j(G, S, k) {
                if (L()) return 0;
                var X = 1;
                return s.add(G).each(function(H, te) {
                    var oe = parseFloat(te.getAttribute("data-scroll-time"));
                    !isNaN(oe) && oe >= 0 && (X = oe)
                }), (472.143 * Math.log(Math.abs(S - k) + 125) - 2e3) * X
            }

            function Z(G, S, k, X) {
                return k > X ? S : G + (S - G) * ee(k / X)
            }

            function ee(G) {
                return G < .5 ? 4 * G * G * G : (G - 1) * (2 * G - 2) * (2 * G - 2) + 1
            }

            function ie() {
                var {
                    WF_CLICK_EMPTY: G,
                    WF_CLICK_SCROLL: S
                } = t;
                o.on(S, p, P), o.on(G, E, function(k) {
                    k.preventDefault()
                }), document.head.insertBefore(m, document.head.firstChild)
            }
            return {
                ready: ie
            }
        })
    });
    var Xb = c((Az, Bb) => {
        "use strict";
        var KU = Fe();
        KU.define("touch", Bb.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var s = !1,
                    a = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    f, E;
                o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", _, !1), o.addEventListener("touchend", m, !1), o.addEventListener("touchcancel", b, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", _, !1), o.addEventListener("mouseup", m, !1), o.addEventListener("mouseout", b, !1);

                function p(x) {
                    var I = x.touches;
                    I && I.length > 1 || (s = !0, I ? (a = !0, f = I[0].clientX) : f = x.clientX, E = f)
                }

                function _(x) {
                    if (s) {
                        if (a && x.type === "mousemove") {
                            x.preventDefault(), x.stopPropagation();
                            return
                        }
                        var I = x.touches,
                            L = I ? I[0].clientX : x.clientX,
                            R = L - E;
                        E = L, Math.abs(R) > u && r && String(r()) === "" && (i("swipe", x, {
                            direction: R > 0 ? "right" : "left"
                        }), b())
                    }
                }

                function m(x) {
                    if (s && (s = !1, a && x.type === "mouseup")) {
                        x.preventDefault(), x.stopPropagation(), a = !1;
                        return
                    }
                }

                function b() {
                    s = !1
                }

                function w() {
                    o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", _, !1), o.removeEventListener("touchend", m, !1), o.removeEventListener("touchcancel", b, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", _, !1), o.removeEventListener("mouseup", m, !1), o.removeEventListener("mouseout", b, !1), o = null
                }
                this.destroy = w
            }

            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document), t
        })
    });
    var Kb = c((Sz, zb) => {
        "use strict";
        var Wt = Fe(),
            YU = wr(),
            rt = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            jb = !0,
            QU = /^#[a-zA-Z0-9\-_]+$/;
        Wt.define("dropdown", zb.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                i = Wt.env(),
                o = !1,
                s, a = Wt.env.touch,
                u = ".w-dropdown",
                f = "w--open",
                E = YU.triggers,
                p = 900,
                _ = "focusout" + u,
                m = "keydown" + u,
                b = "mouseenter" + u,
                w = "mousemove" + u,
                x = "mouseleave" + u,
                I = (a ? "click" : "mouseup") + u,
                L = "w-close" + u,
                R = "setting" + u,
                P = e(document),
                D;
            n.ready = q, n.design = function() {
                o && S(), o = !1, q()
            }, n.preview = function() {
                o = !0, q()
            };

            function q() {
                s = i && Wt.env("design"), D = P.find(u), D.each(K)
            }

            function K(l, F) {
                var V = e(F),
                    O = e.data(F, u);
                O || (O = e.data(F, u, {
                    open: !1,
                    el: V,
                    config: {},
                    selectedIdx: -1
                })), O.toggle = O.el.children(".w-dropdown-toggle"), O.list = O.el.children(".w-dropdown-list"), O.links = O.list.find("a:not(.w-dropdown .w-dropdown a)"), O.complete = H(O), O.mouseLeave = oe(O), O.mouseUpOutside = X(O), O.mouseMoveOutside = U(O), j(O);
                var Y = O.toggle.attr("id"),
                    ue = O.list.attr("id");
                Y || (Y = "w-dropdown-toggle-" + l), ue || (ue = "w-dropdown-list-" + l), O.toggle.attr("id", Y), O.toggle.attr("aria-controls", ue), O.toggle.attr("aria-haspopup", "menu"), O.toggle.attr("aria-expanded", "false"), O.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), O.toggle.prop("tagName") !== "BUTTON" && (O.toggle.attr("role", "button"), O.toggle.attr("tabindex") || O.toggle.attr("tabindex", "0")), O.list.attr("id", ue), O.list.attr("aria-labelledby", Y), O.links.each(function(y, W) {
                    W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"), QU.test(W.hash) && W.addEventListener("click", G.bind(null, O))
                }), O.el.off(u), O.toggle.off(u), O.nav && O.nav.off(u);
                var ne = ee(O, jb);
                s && O.el.on(R, Z(O)), s || (i && (O.hovering = !1, G(O)), O.config.hover && O.toggle.on(b, te(O)), O.el.on(L, ne), O.el.on(m, B(O)), O.el.on(_, v(O)), O.toggle.on(I, ne), O.toggle.on(m, g(O)), O.nav = O.el.closest(".w-nav"), O.nav.on(L, ne))
            }

            function j(l) {
                var F = Number(l.el.css("z-index"));
                l.manageZ = F === p || F === p + 1, l.config = {
                    hover: l.el.attr("data-hover") === "true" && !a,
                    delay: l.el.attr("data-delay")
                }
            }

            function Z(l) {
                return function(F, V) {
                    V = V || {}, j(l), V.open === !0 && ie(l, !0), V.open === !1 && G(l, {
                        immediate: !0
                    })
                }
            }

            function ee(l, F) {
                return r(function(V) {
                    if (l.open || V && V.type === "w-close") return G(l, {
                        forceClose: F
                    });
                    ie(l)
                })
            }

            function ie(l) {
                if (!l.open) {
                    k(l), l.open = !0, l.list.addClass(f), l.toggle.addClass(f), l.toggle.attr("aria-expanded", "true"), E.intro(0, l.el[0]), Wt.redraw.up(), l.manageZ && l.el.css("z-index", p + 1);
                    var F = Wt.env("editor");
                    s || P.on(I, l.mouseUpOutside), l.hovering && !F && l.el.on(x, l.mouseLeave), l.hovering && F && P.on(w, l.mouseMoveOutside), window.clearTimeout(l.delayId)
                }
            }

            function G(l, {
                immediate: F,
                forceClose: V
            } = {}) {
                if (l.open && !(l.config.hover && l.hovering && !V)) {
                    l.toggle.attr("aria-expanded", "false"), l.open = !1;
                    var O = l.config;
                    if (E.outro(0, l.el[0]), P.off(I, l.mouseUpOutside), P.off(w, l.mouseMoveOutside), l.el.off(x, l.mouseLeave), window.clearTimeout(l.delayId), !O.delay || F) return l.complete();
                    l.delayId = window.setTimeout(l.complete, O.delay)
                }
            }

            function S() {
                P.find(u).each(function(l, F) {
                    e(F).triggerHandler(L)
                })
            }

            function k(l) {
                var F = l.el[0];
                D.each(function(V, O) {
                    var Y = e(O);
                    Y.is(F) || Y.has(F).length || Y.triggerHandler(L)
                })
            }

            function X(l) {
                return l.mouseUpOutside && P.off(I, l.mouseUpOutside), r(function(F) {
                    if (l.open) {
                        var V = e(F.target);
                        if (!V.closest(".w-dropdown-toggle").length) {
                            var O = e.inArray(l.el[0], V.parents(u)) === -1,
                                Y = Wt.env("editor");
                            if (O) {
                                if (Y) {
                                    var ue = V.parents().length === 1 && V.parents("svg").length === 1,
                                        ne = V.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (ue || ne) return
                                }
                                G(l)
                            }
                        }
                    }
                })
            }

            function H(l) {
                return function() {
                    l.list.removeClass(f), l.toggle.removeClass(f), l.manageZ && l.el.css("z-index", "")
                }
            }

            function te(l) {
                return function() {
                    l.hovering = !0, ie(l)
                }
            }

            function oe(l) {
                return function() {
                    l.hovering = !1, l.links.is(":focus") || G(l)
                }
            }

            function U(l) {
                return r(function(F) {
                    if (l.open) {
                        var V = e(F.target),
                            O = e.inArray(l.el[0], V.parents(u)) === -1;
                        if (O) {
                            var Y = V.parents(".w-editor-bem-EditorHoverControls").length,
                                ue = V.parents(".w-editor-bem-RTToolbar").length,
                                ne = e(".w-editor-bem-EditorOverlay"),
                                y = ne.find(".w-editor-edit-outline").length || ne.find(".w-editor-bem-RTToolbar").length;
                            if (Y || ue || y) return;
                            l.hovering = !1, G(l)
                        }
                    }
                })
            }

            function B(l) {
                return function(F) {
                    if (!(s || !l.open)) switch (l.selectedIdx = l.links.index(document.activeElement), F.keyCode) {
                        case rt.HOME:
                            return l.open ? (l.selectedIdx = 0, h(l), F.preventDefault()) : void 0;
                        case rt.END:
                            return l.open ? (l.selectedIdx = l.links.length - 1, h(l), F.preventDefault()) : void 0;
                        case rt.ESCAPE:
                            return G(l), l.toggle.focus(), F.stopPropagation();
                        case rt.ARROW_RIGHT:
                        case rt.ARROW_DOWN:
                            return l.selectedIdx = Math.min(l.links.length - 1, l.selectedIdx + 1), h(l), F.preventDefault();
                        case rt.ARROW_LEFT:
                        case rt.ARROW_UP:
                            return l.selectedIdx = Math.max(-1, l.selectedIdx - 1), h(l), F.preventDefault()
                    }
                }
            }

            function h(l) {
                l.links[l.selectedIdx] && l.links[l.selectedIdx].focus()
            }

            function g(l) {
                var F = ee(l, jb);
                return function(V) {
                    if (!s) {
                        if (!l.open) switch (V.keyCode) {
                            case rt.ARROW_UP:
                            case rt.ARROW_DOWN:
                                return V.stopPropagation()
                        }
                        switch (V.keyCode) {
                            case rt.SPACE:
                            case rt.ENTER:
                                return F(), V.stopPropagation(), V.preventDefault()
                        }
                    }
                }
            }

            function v(l) {
                return r(function(F) {
                    var {
                        relatedTarget: V,
                        target: O
                    } = F, Y = l.el[0], ue = Y.contains(V) || Y.contains(O);
                    return ue || G(l), F.stopPropagation()
                })
            }
            return n
        })
    });
    var Yb = c(Fs => {
        "use strict";
        Object.defineProperty(Fs, "__esModule", {
            value: !0
        });
        Fs.default = $U;

        function $U(e, t, r, n, i, o, s, a, u, f, E, p, _) {
            return function(m) {
                e(m);
                var b = m.form,
                    w = {
                        name: b.attr("data-name") || b.attr("name") || "Untitled Form",
                        pageId: b.attr("data-wf-page-id") || "",
                        elementId: b.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(b.html()),
                        trackingCookies: n()
                    };
                let x = b.attr("data-wf-flow");
                x && (w.wfFlow = x), i(m);
                var I = o(b, w.fields);
                if (I) return s(I);
                if (w.fileUploads = a(b), u(m), !f) {
                    E(m);
                    return
                }
                p.ajax({
                    url: _,
                    type: "POST",
                    data: w,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(L) {
                    L && L.code === 200 && (m.success = !0), E(m)
                }).fail(function() {
                    E(m)
                })
            }
        }
    });
    var $b = c((Rz, Qb) => {
        "use strict";
        var Fi = Fe();
        Fi.define("forms", Qb.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                s = window.XDomainRequest && !window.atob,
                a = ".w-form",
                u, f = /e(-)?mail/i,
                E = /^\S+@\S+$/,
                p = window.alert,
                _ = Fi.env(),
                m, b, w, x = /list-manage[1-9]?.com/i,
                I = t.debounce(function() {
                    p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                L(), !_ && !m && P()
            };

            function L() {
                u = e("html").attr("data-wf-site"), b = "https://webflow.com/api/v1/form/" + u, s && b.indexOf("https://webflow.com") >= 0 && (b = b.replace("https://webflow.com", "https://formdata.webflow.com")), w = `${b}/signFile`, i = e(a + " form"), i.length && i.each(R)
            }

            function R(U, B) {
                var h = e(B),
                    g = e.data(B, a);
                g || (g = e.data(B, a, {
                    form: h
                })), D(g);
                var v = h.closest("div.w-form");
                g.done = v.find("> .w-form-done"), g.fail = v.find("> .w-form-fail"), g.fileUploads = v.find(".w-file-upload"), g.fileUploads.each(function(V) {
                    H(V, g)
                });
                var l = g.form.attr("aria-label") || g.form.attr("data-name") || "Form";
                g.done.attr("aria-label") || g.form.attr("aria-label", l), g.done.attr("tabindex", "-1"), g.done.attr("role", "region"), g.done.attr("aria-label") || g.done.attr("aria-label", l + " success"), g.fail.attr("tabindex", "-1"), g.fail.attr("role", "region"), g.fail.attr("aria-label") || g.fail.attr("aria-label", l + " failure");
                var F = g.action = h.attr("action");
                if (g.handler = null, g.redirect = h.attr("data-redirect"), x.test(F)) {
                    g.handler = S;
                    return
                }
                if (!F) {
                    if (u) {
                        g.handler = (() => {
                            let V = Yb().default;
                            return V(D, o, Fi, ee, X, K, p, j, q, u, k, e, b)
                        })();
                        return
                    }
                    I()
                }
            }

            function P() {
                m = !0, n.on("submit", a + " form", function(V) {
                    var O = e.data(this, a);
                    O.handler && (O.evt = V, O.handler(O))
                });
                let U = ".w-checkbox-input",
                    B = ".w-radio-input",
                    h = "w--redirected-checked",
                    g = "w--redirected-focus",
                    v = "w--redirected-focus-visible",
                    l = ":focus-visible, [data-wf-focus-visible]",
                    F = [
                        ["checkbox", U],
                        ["radio", B]
                    ];
                n.on("change", a + ' form input[type="checkbox"]:not(' + U + ")", V => {
                    e(V.target).siblings(U).toggleClass(h)
                }), n.on("change", a + ' form input[type="radio"]', V => {
                    e(`input[name="${V.target.name}"]:not(${U})`).map((Y, ue) => e(ue).siblings(B).removeClass(h));
                    let O = e(V.target);
                    O.hasClass("w-radio-input") || O.siblings(B).addClass(h)
                }), F.forEach(([V, O]) => {
                    n.on("focus", a + ` form input[type="${V}"]:not(` + O + ")", Y => {
                        e(Y.target).siblings(O).addClass(g), e(Y.target).filter(l).siblings(O).addClass(v)
                    }), n.on("blur", a + ` form input[type="${V}"]:not(` + O + ")", Y => {
                        e(Y.target).siblings(O).removeClass(`${g} ${v}`)
                    })
                })
            }

            function D(U) {
                var B = U.btn = U.form.find(':input[type="submit"]');
                U.wait = U.btn.attr("data-wait") || null, U.success = !1, B.prop("disabled", !1), U.label && B.val(U.label)
            }

            function q(U) {
                var B = U.btn,
                    h = U.wait;
                B.prop("disabled", !0), h && (U.label = B.val(), B.val(h))
            }

            function K(U, B) {
                var h = null;
                return B = B || {}, U.find(':input:not([type="submit"]):not([type="file"])').each(function(g, v) {
                    var l = e(v),
                        F = l.attr("type"),
                        V = l.attr("data-name") || l.attr("name") || "Field " + (g + 1);
                    V = encodeURIComponent(V);
                    var O = l.val();
                    if (F === "checkbox") O = l.is(":checked");
                    else if (F === "radio") {
                        if (B[V] === null || typeof B[V] == "string") return;
                        O = U.find('input[name="' + l.attr("name") + '"]:checked').val() || null
                    }
                    typeof O == "string" && (O = e.trim(O)), B[V] = O, h = h || ie(l, F, V, O)
                }), h
            }

            function j(U) {
                var B = {};
                return U.find(':input[type="file"]').each(function(h, g) {
                    var v = e(g),
                        l = v.attr("data-name") || v.attr("name") || "File " + (h + 1),
                        F = v.attr("data-value");
                    typeof F == "string" && (F = e.trim(F)), B[l] = F
                }), B
            }
            let Z = {
                _mkto_trk: "marketo"
            };

            function ee() {
                return document.cookie.split("; ").reduce(function(B, h) {
                    let g = h.split("="),
                        v = g[0];
                    if (v in Z) {
                        let l = Z[v],
                            F = g.slice(1).join("=");
                        B[l] = F
                    }
                    return B
                }, {})
            }

            function ie(U, B, h, g) {
                var v = null;
                return B === "password" ? v = "Passwords cannot be submitted." : U.attr("required") ? g ? f.test(U.attr("type")) && (E.test(g) || (v = "Please enter a valid email address for: " + h)) : v = "Please fill out the required field: " + h : h === "g-recaptcha-response" && !g && (v = "Please confirm you\u2019re not a robot."), v
            }

            function G(U) {
                X(U), k(U)
            }

            function S(U) {
                D(U);
                var B = U.form,
                    h = {};
                if (/^https/.test(o.href) && !/^https/.test(U.action)) {
                    B.attr("method", "post");
                    return
                }
                X(U);
                var g = K(B, h);
                if (g) return p(g);
                q(U);
                var v;
                t.each(h, function(O, Y) {
                    f.test(Y) && (h.EMAIL = O), /^((full[ _-]?)?name)$/i.test(Y) && (v = O), /^(first[ _-]?name)$/i.test(Y) && (h.FNAME = O), /^(last[ _-]?name)$/i.test(Y) && (h.LNAME = O)
                }), v && !h.FNAME && (v = v.split(" "), h.FNAME = v[0], h.LNAME = h.LNAME || v[1]);
                var l = U.action.replace("/post?", "/post-json?") + "&c=?",
                    F = l.indexOf("u=") + 2;
                F = l.substring(F, l.indexOf("&", F));
                var V = l.indexOf("id=") + 3;
                V = l.substring(V, l.indexOf("&", V)), h["b_" + F + "_" + V] = "", e.ajax({
                    url: l,
                    data: h,
                    dataType: "jsonp"
                }).done(function(O) {
                    U.success = O.result === "success" || /already/.test(O.msg), U.success || console.info("MailChimp error: " + O.msg), k(U)
                }).fail(function() {
                    k(U)
                })
            }

            function k(U) {
                var B = U.form,
                    h = U.redirect,
                    g = U.success;
                if (g && h) {
                    Fi.location(h);
                    return
                }
                U.done.toggle(g), U.fail.toggle(!g), g ? U.done.focus() : U.fail.focus(), B.toggle(!g), D(U)
            }

            function X(U) {
                U.evt && U.evt.preventDefault(), U.evt = null
            }

            function H(U, B) {
                if (!B.fileUploads || !B.fileUploads[U]) return;
                var h, g = e(B.fileUploads[U]),
                    v = g.find("> .w-file-upload-default"),
                    l = g.find("> .w-file-upload-uploading"),
                    F = g.find("> .w-file-upload-success"),
                    V = g.find("> .w-file-upload-error"),
                    O = v.find(".w-file-upload-input"),
                    Y = v.find(".w-file-upload-label"),
                    ue = Y.children(),
                    ne = V.find(".w-file-upload-error-msg"),
                    y = F.find(".w-file-upload-file"),
                    W = F.find(".w-file-remove-link"),
                    J = y.find(".w-file-upload-file-name"),
                    z = ne.attr("data-w-size-error"),
                    fe = ne.attr("data-w-type-error"),
                    Te = ne.attr("data-w-generic-error");
                if (_ || Y.on("click keydown", function(A) {
                        A.type === "keydown" && A.which !== 13 && A.which !== 32 || (A.preventDefault(), O.click())
                    }), Y.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), _) O.on("click", function(A) {
                    A.preventDefault()
                }), Y.on("click", function(A) {
                    A.preventDefault()
                }), ue.on("click", function(A) {
                    A.preventDefault()
                });
                else {
                    W.on("click keydown", function(A) {
                        if (A.type === "keydown") {
                            if (A.which !== 13 && A.which !== 32) return;
                            A.preventDefault()
                        }
                        O.removeAttr("data-value"), O.val(""), J.html(""), v.toggle(!0), F.toggle(!1), Y.focus()
                    }), O.on("change", function(A) {
                        h = A.target && A.target.files && A.target.files[0], h && (v.toggle(!1), V.toggle(!1), l.toggle(!0), l.focus(), J.text(h.name), N() || q(B), B.fileUploads[U].uploading = !0, te(h, T))
                    });
                    var Le = Y.outerHeight();
                    O.height(Le), O.width(1)
                }

                function d(A) {
                    var M = A.responseJSON && A.responseJSON.msg,
                        re = Te;
                    typeof M == "string" && M.indexOf("InvalidFileTypeError") === 0 ? re = fe : typeof M == "string" && M.indexOf("MaxFileSizeError") === 0 && (re = z), ne.text(re), O.removeAttr("data-value"), O.val(""), l.toggle(!1), v.toggle(!0), V.toggle(!0), V.focus(), B.fileUploads[U].uploading = !1, N() || D(B)
                }

                function T(A, M) {
                    if (A) return d(A);
                    var re = M.fileName,
                        se = M.postData,
                        ve = M.fileId,
                        Q = M.s3Url;
                    O.attr("data-value", ve), oe(Q, se, h, re, C)
                }

                function C(A) {
                    if (A) return d(A);
                    l.toggle(!1), F.css("display", "inline-block"), F.focus(), B.fileUploads[U].uploading = !1, N() || D(B)
                }

                function N() {
                    var A = B.fileUploads && B.fileUploads.toArray() || [];
                    return A.some(function(M) {
                        return M.uploading
                    })
                }
            }

            function te(U, B) {
                var h = new URLSearchParams({
                    name: U.name,
                    size: U.size
                });
                e.ajax({
                    type: "GET",
                    url: `${w}?${h}`,
                    crossDomain: !0
                }).done(function(g) {
                    B(null, g)
                }).fail(function(g) {
                    B(g)
                })
            }

            function oe(U, B, h, g, v) {
                var l = new FormData;
                for (var F in B) l.append(F, B[F]);
                l.append("file", h, g), e.ajax({
                    type: "POST",
                    url: U,
                    data: l,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    v(null)
                }).fail(function(V) {
                    v(V)
                })
            }
            return r
        })
    });
    var e_ = c((Lz, Jb) => {
        "use strict";
        var Ms = Fe(),
            Zb = "w-condition-invisible",
            ZU = "." + Zb;

        function JU(e) {
            return e.filter(function(t) {
                return !un(t)
            })
        }

        function un(e) {
            return !!(e.$el && e.$el.closest(ZU).length)
        }

        function Ds(e, t) {
            for (var r = e; r >= 0; r--)
                if (!un(t[r])) return r;
            return -1
        }

        function ks(e, t) {
            for (var r = e; r <= t.length - 1; r++)
                if (!un(t[r])) return r;
            return -1
        }

        function eW(e, t) {
            return Ds(e - 1, t) === -1
        }

        function tW(e, t) {
            return ks(e + 1, t) === -1
        }

        function sn(e, t) {
            e.attr("aria-label") || e.attr("aria-label", t)
        }

        function rW(e, t, r, n) {
            var i = r.tram,
                o = Array.isArray,
                s = "w-lightbox",
                a = s + "-",
                u = /(^|\s+)/g,
                f = [],
                E, p, _, m = [];

            function b(g, v) {
                return f = o(g) ? g : [g], p || b.build(), JU(f).length > 1 && (p.items = p.empty, f.forEach(function(l, F) {
                    var V = B("thumbnail"),
                        O = B("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(V);
                    sn(O, `show item ${F+1} of ${f.length}`), un(l) && O.addClass(Zb), p.items = p.items.add(O), ee(l.thumbnailUrl || l.url, function(Y) {
                        Y.prop("width") > Y.prop("height") ? H(Y, "wide") : H(Y, "tall"), V.append(H(Y, "thumbnail-image"))
                    })
                }), p.strip.empty().append(p.items), H(p.content, "group")), i(te(p.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), H(p.html, "noscroll"), b.show(v || 0)
            }
            b.build = function() {
                return b.destroy(), p = {
                    html: r(t.documentElement),
                    empty: r()
                }, p.arrowLeft = B("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), p.arrowRight = B("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), p.close = B("control close").attr("role", "button"), sn(p.arrowLeft, "previous image"), sn(p.arrowRight, "next image"), sn(p.close, "close lightbox"), p.spinner = B("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), p.strip = B("strip").attr("role", "tablist"), _ = new S(p.spinner, k("hide")), p.content = B("content").append(p.spinner, p.arrowLeft, p.arrowRight, p.close), p.container = B("container").append(p.content, p.strip), p.lightbox = B("backdrop hide").append(p.container), p.strip.on("click", X("item"), R), p.content.on("swipe", P).on("click", X("left"), x).on("click", X("right"), I).on("click", X("close"), L).on("click", X("image, caption"), I), p.container.on("click", X("view"), L).on("dragstart", X("img"), q), p.lightbox.on("keydown", K).on("focusin", D), r(n).append(p.lightbox), b
            }, b.destroy = function() {
                p && (te(p.html, "noscroll"), p.lightbox.remove(), p = void 0)
            }, b.show = function(g) {
                if (g !== E) {
                    var v = f[g];
                    if (!v) return b.hide();
                    if (un(v)) {
                        if (g < E) {
                            var l = Ds(g - 1, f);
                            g = l > -1 ? l : g
                        } else {
                            var F = ks(g + 1, f);
                            g = F > -1 ? F : g
                        }
                        v = f[g]
                    }
                    var V = E;
                    E = g, p.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), _.show();
                    var O = v.html && h(v.width, v.height) || v.url;
                    return ee(O, function(Y) {
                        if (g !== E) return;
                        var ue = B("figure", "figure").append(H(Y, "image")),
                            ne = B("frame").append(ue),
                            y = B("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(ne),
                            W, J;
                        v.html && (W = r(v.html), J = W.is("iframe"), J && W.on("load", z), ue.append(H(W, "embed"))), v.caption && ue.append(B("caption", "figcaption").text(v.caption)), p.spinner.before(y), J || z();

                        function z() {
                            if (p.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), _.hide(), g !== E) {
                                y.remove();
                                return
                            }
                            let fe = eW(g, f);
                            oe(p.arrowLeft, "inactive", fe), U(p.arrowLeft, fe), fe && p.arrowLeft.is(":focus") && p.arrowRight.focus();
                            let Te = tW(g, f);
                            if (oe(p.arrowRight, "inactive", Te), U(p.arrowRight, Te), Te && p.arrowRight.is(":focus") && p.arrowLeft.focus(), p.view ? (i(p.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then(ie(p.view)), i(y).add("opacity .3s").add("transform .3s").set({
                                    x: g > V ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : y.css("opacity", 1), p.view = y, p.view.prop("tabIndex", 0), p.items) {
                                te(p.items, "active"), p.items.removeAttr("aria-selected");
                                var Le = p.items.eq(g);
                                H(Le, "active"), Le.attr("aria-selected", !0), G(Le)
                            }
                        }
                    }), p.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), m.length === 0 && (r("body").children().each(function() {
                        r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (m.push({
                            node: r(this),
                            hidden: r(this).attr("aria-hidden"),
                            tabIndex: r(this).attr("tabIndex")
                        }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }), p.close.focus()), b
                }
            }, b.hide = function() {
                return i(p.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then(Z), b
            }, b.prev = function() {
                var g = Ds(E - 1, f);
                g > -1 && b.show(g)
            }, b.next = function() {
                var g = ks(E + 1, f);
                g > -1 && b.show(g)
            };

            function w(g) {
                return function(v) {
                    this === v.target && (v.stopPropagation(), v.preventDefault(), g())
                }
            }
            var x = w(b.prev),
                I = w(b.next),
                L = w(b.hide),
                R = function(g) {
                    var v = r(this).index();
                    g.preventDefault(), b.show(v)
                },
                P = function(g, v) {
                    g.preventDefault(), v.direction === "left" ? b.next() : v.direction === "right" && b.prev()
                },
                D = function() {
                    this.focus()
                };

            function q(g) {
                g.preventDefault()
            }

            function K(g) {
                var v = g.keyCode;
                v === 27 || j(v, "close") ? b.hide() : v === 37 || j(v, "left") ? b.prev() : v === 39 || j(v, "right") ? b.next() : j(v, "item") && r(":focus").click()
            }

            function j(g, v) {
                if (g !== 13 && g !== 32) return !1;
                var l = r(":focus").attr("class"),
                    F = k(v).trim();
                return l.includes(F)
            }

            function Z() {
                p && (p.strip.scrollLeft(0).empty(), te(p.html, "noscroll"), H(p.lightbox, "hide"), p.view && p.view.remove(), te(p.content, "group"), H(p.arrowLeft, "inactive"), H(p.arrowRight, "inactive"), E = p.view = void 0, m.forEach(function(g) {
                    var v = g.node;
                    v && (g.hidden ? v.attr("aria-hidden", g.hidden) : v.removeAttr("aria-hidden"), g.tabIndex ? v.attr("tabIndex", g.tabIndex) : v.removeAttr("tabIndex"))
                }), m = [], r(".active-lightbox").removeClass("active-lightbox").focus())
            }

            function ee(g, v) {
                var l = B("img", "img");
                return l.one("load", function() {
                    v(l)
                }), l.attr("src", g), l
            }

            function ie(g) {
                return function() {
                    g.remove()
                }
            }

            function G(g) {
                var v = g.get(0),
                    l = p.strip.get(0),
                    F = v.offsetLeft,
                    V = v.clientWidth,
                    O = l.scrollLeft,
                    Y = l.clientWidth,
                    ue = l.scrollWidth - Y,
                    ne;
                F < O ? ne = Math.max(0, F + V - Y) : F + V > Y + O && (ne = Math.min(F, ue)), ne != null && i(p.strip).add("scroll-left 500ms").start({
                    "scroll-left": ne
                })
            }

            function S(g, v, l) {
                this.$element = g, this.className = v, this.delay = l || 200, this.hide()
            }
            S.prototype.show = function() {
                var g = this;
                g.timeoutId || (g.timeoutId = setTimeout(function() {
                    g.$element.removeClass(g.className), delete g.timeoutId
                }, g.delay))
            }, S.prototype.hide = function() {
                var g = this;
                if (g.timeoutId) {
                    clearTimeout(g.timeoutId), delete g.timeoutId;
                    return
                }
                g.$element.addClass(g.className)
            };

            function k(g, v) {
                return g.replace(u, (v ? " ." : " ") + a)
            }

            function X(g) {
                return k(g, !0)
            }

            function H(g, v) {
                return g.addClass(k(v))
            }

            function te(g, v) {
                return g.removeClass(k(v))
            }

            function oe(g, v, l) {
                return g.toggleClass(k(v), l)
            }

            function U(g, v) {
                return g.attr("aria-hidden", v).attr("tabIndex", v ? -1 : 0)
            }

            function B(g, v) {
                return H(r(t.createElement(v || "div")), g)
            }

            function h(g, v) {
                var l = '<svg xmlns="http://www.w3.org/2000/svg" width="' + g + '" height="' + v + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(l)
            }
            return function() {
                var g = e.navigator.userAgent,
                    v = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
                    l = g.match(v),
                    F = g.indexOf("Android ") > -1 && g.indexOf("Chrome") === -1;
                if (!F && (!l || l[2] > 7)) return;
                var V = t.createElement("style");
                t.head.appendChild(V), e.addEventListener("resize", O, !0);

                function O() {
                    var Y = e.innerHeight,
                        ue = e.innerWidth,
                        ne = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + Y + "px}.w-lightbox-view {width:" + ue + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * Y + "px}.w-lightbox-image {max-width:" + ue + "px;max-height:" + Y + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * Y + "px}.w-lightbox-strip {padding: 0 " + .01 * Y + "px}.w-lightbox-item {width:" + .1 * Y + "px;padding:" + .02 * Y + "px " + .01 * Y + "px}.w-lightbox-thumbnail {height:" + .1 * Y + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * Y + "px}.w-lightbox-content {margin-top:" + .02 * Y + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * Y + "px}.w-lightbox-image {max-width:" + .96 * ue + "px;max-height:" + .96 * Y + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * ue + "px;max-height:" + .84 * Y + "px}}";
                    V.textContent = ne
                }
                O()
            }(), b
        }
        Ms.define("lightbox", Jb.exports = function(e) {
            var t = {},
                r = Ms.env(),
                n = rW(window, document, e, r ? "#lightbox-mountpoint" : "body"),
                i = e(document),
                o, s, a = ".w-lightbox",
                u;
            t.ready = t.design = t.preview = f;

            function f() {
                s = r && Ms.env("design"), n.destroy(), u = {}, o = i.find(a), o.webflowLightBox(), o.each(function() {
                    sn(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function() {
                    var m = this;
                    e.each(m, function(b, w) {
                        var x = e.data(w, a);
                        x || (x = e.data(w, a, {
                            el: e(w),
                            mode: "images",
                            images: [],
                            embed: ""
                        })), x.el.off(a), E(x), s ? x.el.on("setting" + a, E.bind(null, x)) : x.el.on("click" + a, p(x)).on("click" + a, function(I) {
                            I.preventDefault()
                        })
                    })
                }
            });

            function E(m) {
                var b = m.el.children(".w-json").html(),
                    w, x;
                if (!b) {
                    m.items = [];
                    return
                }
                try {
                    b = JSON.parse(b)
                } catch (I) {
                    console.error("Malformed lightbox JSON configuration.", I)
                }
                _(b), b.items.forEach(function(I) {
                    I.$el = m.el
                }), w = b.group, w ? (x = u[w], x || (x = u[w] = []), m.items = x, b.items.length && (m.index = x.length, x.push.apply(x, b.items))) : (m.items = b.items, m.index = 0)
            }

            function p(m) {
                return function() {
                    m.items.length && n(m.items, m.index || 0)
                }
            }

            function _(m) {
                m.images && (m.images.forEach(function(b) {
                    b.type = "image"
                }), m.items = m.images), m.embed && (m.embed.type = "video", m.items = [m.embed]), m.groupId && (m.group = m.groupId)
            }
            return t
        })
    });
    var r_ = c((Nz, t_) => {
        "use strict";
        var Ct = Fe(),
            nW = wr(),
            Re = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        Ct.define("navbar", t_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                s = t.debounce,
                a, u, f, E, p = Ct.env(),
                _ = '<div class="w-nav-overlay" data-wf-ignore />',
                m = ".w-nav",
                b = "w--open",
                w = "w--nav-dropdown-open",
                x = "w--nav-dropdown-toggle-open",
                I = "w--nav-dropdown-list-open",
                L = "w--nav-link-open",
                R = nW.triggers,
                P = e();
            r.ready = r.design = r.preview = D, r.destroy = function() {
                P = e(), q(), u && u.length && u.each(ee)
            };

            function D() {
                f = p && Ct.env("design"), E = Ct.env("editor"), a = e(document.body), u = o.find(m), u.length && (u.each(Z), q(), K())
            }

            function q() {
                Ct.resize.off(j)
            }

            function K() {
                Ct.resize.on(j)
            }

            function j() {
                u.each(v)
            }

            function Z(y, W) {
                var J = e(W),
                    z = e.data(W, m);
                z || (z = e.data(W, m, {
                    open: !1,
                    el: J,
                    config: {},
                    selectedIdx: -1
                })), z.menu = J.find(".w-nav-menu"), z.links = z.menu.find(".w-nav-link"), z.dropdowns = z.menu.find(".w-dropdown"), z.dropdownToggle = z.menu.find(".w-dropdown-toggle"), z.dropdownList = z.menu.find(".w-dropdown-list"), z.button = J.find(".w-nav-button"), z.container = J.find(".w-container"), z.overlayContainerId = "w-nav-overlay-" + y, z.outside = h(z);
                var fe = J.find(".w-nav-brand");
                fe && fe.attr("href") === "/" && fe.attr("aria-label") == null && fe.attr("aria-label", "home"), z.button.attr("style", "-webkit-user-select: text;"), z.button.attr("aria-label") == null && z.button.attr("aria-label", "menu"), z.button.attr("role", "button"), z.button.attr("tabindex", "0"), z.button.attr("aria-controls", z.overlayContainerId), z.button.attr("aria-haspopup", "menu"), z.button.attr("aria-expanded", "false"), z.el.off(m), z.button.off(m), z.menu.off(m), S(z), f ? (ie(z), z.el.on("setting" + m, k(z))) : (G(z), z.button.on("click" + m, U(z)), z.menu.on("click" + m, "a", B(z)), z.button.on("keydown" + m, X(z)), z.el.on("keydown" + m, H(z))), v(y, W)
            }

            function ee(y, W) {
                var J = e.data(W, m);
                J && (ie(J), e.removeData(W, m))
            }

            function ie(y) {
                y.overlay && (ne(y, !0), y.overlay.remove(), y.overlay = null)
            }

            function G(y) {
                y.overlay || (y.overlay = e(_).appendTo(y.el), y.overlay.attr("id", y.overlayContainerId), y.parent = y.menu.parent(), ne(y, !0))
            }

            function S(y) {
                var W = {},
                    J = y.config || {},
                    z = W.animation = y.el.attr("data-animation") || "default";
                W.animOver = /^over/.test(z), W.animDirect = /left$/.test(z) ? -1 : 1, J.animation !== z && y.open && t.defer(oe, y), W.easing = y.el.attr("data-easing") || "ease", W.easing2 = y.el.attr("data-easing2") || "ease";
                var fe = y.el.attr("data-duration");
                W.duration = fe != null ? Number(fe) : 400, W.docHeight = y.el.attr("data-doc-height"), y.config = W
            }

            function k(y) {
                return function(W, J) {
                    J = J || {};
                    var z = i.width();
                    S(y), J.open === !0 && Y(y, !0), J.open === !1 && ne(y, !0), y.open && t.defer(function() {
                        z !== i.width() && oe(y)
                    })
                }
            }

            function X(y) {
                return function(W) {
                    switch (W.keyCode) {
                        case Re.SPACE:
                        case Re.ENTER:
                            return U(y)(), W.preventDefault(), W.stopPropagation();
                        case Re.ESCAPE:
                            return ne(y), W.preventDefault(), W.stopPropagation();
                        case Re.ARROW_RIGHT:
                        case Re.ARROW_DOWN:
                        case Re.HOME:
                        case Re.END:
                            return y.open ? (W.keyCode === Re.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, te(y), W.preventDefault(), W.stopPropagation()) : (W.preventDefault(), W.stopPropagation())
                    }
                }
            }

            function H(y) {
                return function(W) {
                    if (y.open) switch (y.selectedIdx = y.links.index(document.activeElement), W.keyCode) {
                        case Re.HOME:
                        case Re.END:
                            return W.keyCode === Re.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, te(y), W.preventDefault(), W.stopPropagation();
                        case Re.ESCAPE:
                            return ne(y), y.button.focus(), W.preventDefault(), W.stopPropagation();
                        case Re.ARROW_LEFT:
                        case Re.ARROW_UP:
                            return y.selectedIdx = Math.max(-1, y.selectedIdx - 1), te(y), W.preventDefault(), W.stopPropagation();
                        case Re.ARROW_RIGHT:
                        case Re.ARROW_DOWN:
                            return y.selectedIdx = Math.min(y.links.length - 1, y.selectedIdx + 1), te(y), W.preventDefault(), W.stopPropagation()
                    }
                }
            }

            function te(y) {
                if (y.links[y.selectedIdx]) {
                    var W = y.links[y.selectedIdx];
                    W.focus(), B(W)
                }
            }

            function oe(y) {
                y.open && (ne(y, !0), Y(y, !0))
            }

            function U(y) {
                return s(function() {
                    y.open ? ne(y) : Y(y)
                })
            }

            function B(y) {
                return function(W) {
                    var J = e(this),
                        z = J.attr("href");
                    if (!Ct.validClick(W.currentTarget)) {
                        W.preventDefault();
                        return
                    }
                    z && z.indexOf("#") === 0 && y.open && ne(y)
                }
            }

            function h(y) {
                return y.outside && o.off("click" + m, y.outside),
                    function(W) {
                        var J = e(W.target);
                        E && J.closest(".w-editor-bem-EditorOverlay").length || g(y, J)
                    }
            }
            var g = s(function(y, W) {
                if (y.open) {
                    var J = W.closest(".w-nav-menu");
                    y.menu.is(J) || ne(y)
                }
            });

            function v(y, W) {
                var J = e.data(W, m),
                    z = J.collapsed = J.button.css("display") !== "none";
                if (J.open && !z && !f && ne(J, !0), J.container.length) {
                    var fe = F(J);
                    J.links.each(fe), J.dropdowns.each(fe)
                }
                J.open && ue(J)
            }
            var l = "max-width";

            function F(y) {
                var W = y.container.css(l);
                return W === "none" && (W = ""),
                    function(J, z) {
                        z = e(z), z.css(l, ""), z.css(l) === "none" && z.css(l, W)
                    }
            }

            function V(y, W) {
                W.setAttribute("data-nav-menu-open", "")
            }

            function O(y, W) {
                W.removeAttribute("data-nav-menu-open")
            }

            function Y(y, W) {
                if (y.open) return;
                y.open = !0, y.menu.each(V), y.links.addClass(L), y.dropdowns.addClass(w), y.dropdownToggle.addClass(x), y.dropdownList.addClass(I), y.button.addClass(b);
                var J = y.config,
                    z = J.animation;
                (z === "none" || !n.support.transform || J.duration <= 0) && (W = !0);
                var fe = ue(y),
                    Te = y.menu.outerHeight(!0),
                    Le = y.menu.outerWidth(!0),
                    d = y.el.height(),
                    T = y.el[0];
                if (v(0, T), R.intro(0, T), Ct.redraw.up(), f || o.on("click" + m, y.outside), W) {
                    A();
                    return
                }
                var C = "transform " + J.duration + "ms " + J.easing;
                if (y.overlay && (P = y.menu.prev(), y.overlay.show().append(y.menu)), J.animOver) {
                    n(y.menu).add(C).set({
                        x: J.animDirect * Le,
                        height: fe
                    }).start({
                        x: 0
                    }).then(A), y.overlay && y.overlay.width(Le);
                    return
                }
                var N = d + Te;
                n(y.menu).add(C).set({
                    y: -N
                }).start({
                    y: 0
                }).then(A);

                function A() {
                    y.button.attr("aria-expanded", "true")
                }
            }

            function ue(y) {
                var W = y.config,
                    J = W.docHeight ? o.height() : a.height();
                return W.animOver ? y.menu.height(J) : y.el.css("position") !== "fixed" && (J -= y.el.outerHeight(!0)), y.overlay && y.overlay.height(J), J
            }

            function ne(y, W) {
                if (!y.open) return;
                y.open = !1, y.button.removeClass(b);
                var J = y.config;
                if ((J.animation === "none" || !n.support.transform || J.duration <= 0) && (W = !0), R.outro(0, y.el[0]), o.off("click" + m, y.outside), W) {
                    n(y.menu).stop(), T();
                    return
                }
                var z = "transform " + J.duration + "ms " + J.easing2,
                    fe = y.menu.outerHeight(!0),
                    Te = y.menu.outerWidth(!0),
                    Le = y.el.height();
                if (J.animOver) {
                    n(y.menu).add(z).start({
                        x: Te * J.animDirect
                    }).then(T);
                    return
                }
                var d = Le + fe;
                n(y.menu).add(z).start({
                    y: -d
                }).then(T);

                function T() {
                    y.menu.height(""), n(y.menu).set({
                        x: 0,
                        y: 0
                    }), y.menu.each(O), y.links.removeClass(L), y.dropdowns.removeClass(w), y.dropdownToggle.removeClass(x), y.dropdownList.removeClass(I), y.overlay && y.overlay.children().length && (P.length ? y.menu.insertAfter(P) : y.menu.prependTo(y.parent), y.overlay.attr("style", "").hide()), y.el.triggerHandler("w-close"), y.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var o_ = c((Pz, i_) => {
        "use strict";
        var Rt = Fe(),
            iW = wr(),
            pt = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            n_ = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Rt.define("slider", i_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(document),
                o, s, a = Rt.env(),
                u = ".w-slider",
                f = '<div class="w-slider-dot" data-wf-ignore />',
                E = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                p = "w-slider-force-show",
                _ = iW.triggers,
                m, b = !1;
            r.ready = function() {
                s = Rt.env("design"), w()
            }, r.design = function() {
                s = !0, setTimeout(w, 1e3)
            }, r.preview = function() {
                s = !1, w()
            }, r.redraw = function() {
                b = !0, w(), b = !1
            }, r.destroy = x;

            function w() {
                o = i.find(u), o.length && (o.each(R), !m && (x(), I()))
            }

            function x() {
                Rt.resize.off(L), Rt.redraw.off(r.redraw)
            }

            function I() {
                Rt.resize.on(L), Rt.redraw.on(r.redraw)
            }

            function L() {
                o.filter(":visible").each(H)
            }

            function R(h, g) {
                var v = e(g),
                    l = e.data(g, u);
                l || (l = e.data(g, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: v,
                    config: {}
                })), l.mask = v.children(".w-slider-mask"), l.left = v.children(".w-slider-arrow-left"), l.right = v.children(".w-slider-arrow-right"), l.nav = v.children(".w-slider-nav"), l.slides = l.mask.children(".w-slide"), l.slides.each(_.reset), b && (l.maskWidth = 0), v.attr("role") === void 0 && v.attr("role", "region"), v.attr("aria-label") === void 0 && v.attr("aria-label", "carousel");
                var F = l.mask.attr("id");
                if (F || (F = "w-slider-mask-" + h, l.mask.attr("id", F)), !s && !l.ariaLiveLabel && (l.ariaLiveLabel = e(E).appendTo(l.mask)), l.left.attr("role", "button"), l.left.attr("tabindex", "0"), l.left.attr("aria-controls", F), l.left.attr("aria-label") === void 0 && l.left.attr("aria-label", "previous slide"), l.right.attr("role", "button"), l.right.attr("tabindex", "0"), l.right.attr("aria-controls", F), l.right.attr("aria-label") === void 0 && l.right.attr("aria-label", "next slide"), !n.support.transform) {
                    l.left.hide(), l.right.hide(), l.nav.hide(), m = !0;
                    return
                }
                l.el.off(u), l.left.off(u), l.right.off(u), l.nav.off(u), P(l), s ? (l.el.on("setting" + u, S(l)), G(l), l.hasTimer = !1) : (l.el.on("swipe" + u, S(l)), l.left.on("click" + u, j(l)), l.right.on("click" + u, Z(l)), l.left.on("keydown" + u, K(l, j)), l.right.on("keydown" + u, K(l, Z)), l.nav.on("keydown" + u, "> div", S(l)), l.config.autoplay && !l.hasTimer && (l.hasTimer = !0, l.timerCount = 1, ie(l)), l.el.on("mouseenter" + u, q(l, !0, "mouse")), l.el.on("focusin" + u, q(l, !0, "keyboard")), l.el.on("mouseleave" + u, q(l, !1, "mouse")), l.el.on("focusout" + u, q(l, !1, "keyboard"))), l.nav.on("click" + u, "> div", S(l)), a || l.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var V = v.filter(":hidden");
                V.addClass(p);
                var O = v.parents(":hidden");
                O.addClass(p), b || H(h, g), V.removeClass(p), O.removeClass(p)
            }

            function P(h) {
                var g = {};
                g.crossOver = 0, g.animation = h.el.attr("data-animation") || "slide", g.animation === "outin" && (g.animation = "cross", g.crossOver = .5), g.easing = h.el.attr("data-easing") || "ease";
                var v = h.el.attr("data-duration");
                if (g.duration = v != null ? parseInt(v, 10) : 500, D(h.el.attr("data-infinite")) && (g.infinite = !0), D(h.el.attr("data-disable-swipe")) && (g.disableSwipe = !0), D(h.el.attr("data-hide-arrows")) ? g.hideArrows = !0 : h.config.hideArrows && (h.left.show(), h.right.show()), D(h.el.attr("data-autoplay"))) {
                    g.autoplay = !0, g.delay = parseInt(h.el.attr("data-delay"), 10) || 2e3, g.timerMax = parseInt(h.el.attr("data-autoplay-limit"), 10);
                    var l = "mousedown" + u + " touchstart" + u;
                    s || h.el.off(l).one(l, function() {
                        G(h)
                    })
                }
                var F = h.right.width();
                g.edge = F ? F + 40 : 100, h.config = g
            }

            function D(h) {
                return h === "1" || h === "true"
            }

            function q(h, g, v) {
                return function(l) {
                    if (g) h.hasFocus[v] = g;
                    else if (e.contains(h.el.get(0), l.relatedTarget) || (h.hasFocus[v] = g, h.hasFocus.mouse && v === "keyboard" || h.hasFocus.keyboard && v === "mouse")) return;
                    g ? (h.ariaLiveLabel.attr("aria-live", "polite"), h.hasTimer && G(h)) : (h.ariaLiveLabel.attr("aria-live", "off"), h.hasTimer && ie(h))
                }
            }

            function K(h, g) {
                return function(v) {
                    switch (v.keyCode) {
                        case pt.SPACE:
                        case pt.ENTER:
                            return g(h)(), v.preventDefault(), v.stopPropagation()
                    }
                }
            }

            function j(h) {
                return function() {
                    X(h, {
                        index: h.index - 1,
                        vector: -1
                    })
                }
            }

            function Z(h) {
                return function() {
                    X(h, {
                        index: h.index + 1,
                        vector: 1
                    })
                }
            }

            function ee(h, g) {
                var v = null;
                g === h.slides.length && (w(), te(h)), t.each(h.anchors, function(l, F) {
                    e(l.els).each(function(V, O) {
                        e(O).index() === g && (v = F)
                    })
                }), v != null && X(h, {
                    index: v,
                    immediate: !0
                })
            }

            function ie(h) {
                G(h);
                var g = h.config,
                    v = g.timerMax;
                v && h.timerCount++ > v || (h.timerId = window.setTimeout(function() {
                    h.timerId == null || s || (Z(h)(), ie(h))
                }, g.delay))
            }

            function G(h) {
                window.clearTimeout(h.timerId), h.timerId = null
            }

            function S(h) {
                return function(g, v) {
                    v = v || {};
                    var l = h.config;
                    if (s && g.type === "setting") {
                        if (v.select === "prev") return j(h)();
                        if (v.select === "next") return Z(h)();
                        if (P(h), te(h), v.select == null) return;
                        ee(h, v.select);
                        return
                    }
                    if (g.type === "swipe") return l.disableSwipe || Rt.env("editor") ? void 0 : v.direction === "left" ? Z(h)() : v.direction === "right" ? j(h)() : void 0;
                    if (h.nav.has(g.target).length) {
                        var F = e(g.target).index();
                        if (g.type === "click" && X(h, {
                                index: F
                            }), g.type === "keydown") switch (g.keyCode) {
                            case pt.ENTER:
                            case pt.SPACE:
                                {
                                    X(h, {
                                        index: F
                                    }),
                                    g.preventDefault();
                                    break
                                }
                            case pt.ARROW_LEFT:
                            case pt.ARROW_UP:
                                {
                                    k(h.nav, Math.max(F - 1, 0)),
                                    g.preventDefault();
                                    break
                                }
                            case pt.ARROW_RIGHT:
                            case pt.ARROW_DOWN:
                                {
                                    k(h.nav, Math.min(F + 1, h.pages)),
                                    g.preventDefault();
                                    break
                                }
                            case pt.HOME:
                                {
                                    k(h.nav, 0),
                                    g.preventDefault();
                                    break
                                }
                            case pt.END:
                                {
                                    k(h.nav, h.pages),
                                    g.preventDefault();
                                    break
                                }
                            default:
                                return
                        }
                    }
                }
            }

            function k(h, g) {
                var v = h.children().eq(g).focus();
                h.children().not(v)
            }

            function X(h, g) {
                g = g || {};
                var v = h.config,
                    l = h.anchors;
                h.previous = h.index;
                var F = g.index,
                    V = {};
                F < 0 ? (F = l.length - 1, v.infinite && (V.x = -h.endX, V.from = 0, V.to = l[0].width)) : F >= l.length && (F = 0, v.infinite && (V.x = l[l.length - 1].width, V.from = -l[l.length - 1].x, V.to = V.from - V.x)), h.index = F;
                var O = h.nav.children().eq(F).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                h.nav.children().not(O).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), v.hideArrows && (h.index === l.length - 1 ? h.right.hide() : h.right.show(), h.index === 0 ? h.left.hide() : h.left.show());
                var Y = h.offsetX || 0,
                    ue = h.offsetX = -l[h.index].x,
                    ne = {
                        x: ue,
                        opacity: 1,
                        visibility: ""
                    },
                    y = e(l[h.index].els),
                    W = e(l[h.previous] && l[h.previous].els),
                    J = h.slides.not(y),
                    z = v.animation,
                    fe = v.easing,
                    Te = Math.round(v.duration),
                    Le = g.vector || (h.index > h.previous ? 1 : -1),
                    d = "opacity " + Te + "ms " + fe,
                    T = "transform " + Te + "ms " + fe;
                if (y.find(n_).removeAttr("tabindex"), y.removeAttr("aria-hidden"), y.find("*").removeAttr("aria-hidden"), J.find(n_).attr("tabindex", "-1"), J.attr("aria-hidden", "true"), J.find("*").attr("aria-hidden", "true"), s || (y.each(_.intro), J.each(_.outro)), g.immediate && !b) {
                    n(y).set(ne), A();
                    return
                }
                if (h.index === h.previous) return;
                if (s || h.ariaLiveLabel.text(`Slide ${F+1} of ${l.length}.`), z === "cross") {
                    var C = Math.round(Te - Te * v.crossOver),
                        N = Math.round(Te - C);
                    d = "opacity " + C + "ms " + fe, n(W).set({
                        visibility: ""
                    }).add(d).start({
                        opacity: 0
                    }), n(y).set({
                        visibility: "",
                        x: ue,
                        opacity: 0,
                        zIndex: h.depth++
                    }).add(d).wait(N).then({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (z === "fade") {
                    n(W).set({
                        visibility: ""
                    }).stop(), n(y).set({
                        visibility: "",
                        x: ue,
                        opacity: 0,
                        zIndex: h.depth++
                    }).add(d).start({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (z === "over") {
                    ne = {
                        x: h.endX
                    }, n(W).set({
                        visibility: ""
                    }).stop(), n(y).set({
                        visibility: "",
                        zIndex: h.depth++,
                        x: ue + l[h.index].width * Le
                    }).add(T).start({
                        x: ue
                    }).then(A);
                    return
                }
                v.infinite && V.x ? (n(h.slides.not(W)).set({
                    visibility: "",
                    x: V.x
                }).add(T).start({
                    x: ue
                }), n(W).set({
                    visibility: "",
                    x: V.from
                }).add(T).start({
                    x: V.to
                }), h.shifted = W) : (v.infinite && h.shifted && (n(h.shifted).set({
                    visibility: "",
                    x: Y
                }), h.shifted = null), n(h.slides).set({
                    visibility: ""
                }).add(T).start({
                    x: ue
                }));

                function A() {
                    y = e(l[h.index].els), J = h.slides.not(y), z !== "slide" && (ne.visibility = "hidden"), n(J).set(ne)
                }
            }

            function H(h, g) {
                var v = e.data(g, u);
                if (v) {
                    if (U(v)) return te(v);
                    s && B(v) && te(v)
                }
            }

            function te(h) {
                var g = 1,
                    v = 0,
                    l = 0,
                    F = 0,
                    V = h.maskWidth,
                    O = V - h.config.edge;
                O < 0 && (O = 0), h.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], h.slides.each(function(ue, ne) {
                    l - v > O && (g++, v += V, h.anchors[g - 1] = {
                        els: [],
                        x: l,
                        width: 0
                    }), F = e(ne).outerWidth(!0), l += F, h.anchors[g - 1].width += F, h.anchors[g - 1].els.push(ne);
                    var y = ue + 1 + " of " + h.slides.length;
                    e(ne).attr("aria-label", y), e(ne).attr("role", "group")
                }), h.endX = l, s && (h.pages = null), h.nav.length && h.pages !== g && (h.pages = g, oe(h));
                var Y = h.index;
                Y >= g && (Y = g - 1), X(h, {
                    immediate: !0,
                    index: Y
                })
            }

            function oe(h) {
                var g = [],
                    v, l = h.el.attr("data-nav-spacing");
                l && (l = parseFloat(l) + "px");
                for (var F = 0, V = h.pages; F < V; F++) v = e(f), v.attr("aria-label", "Show slide " + (F + 1) + " of " + V).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), h.nav.hasClass("w-num") && v.text(F + 1), l != null && v.css({
                    "margin-left": l,
                    "margin-right": l
                }), g.push(v);
                h.nav.empty().append(g)
            }

            function U(h) {
                var g = h.mask.width();
                return h.maskWidth !== g ? (h.maskWidth = g, !0) : !1
            }

            function B(h) {
                var g = 0;
                return h.slides.each(function(v, l) {
                    g += e(l).outerWidth(!0)
                }), h.slidesWidth !== g ? (h.slidesWidth = g, !0) : !1
            }
            return r
        })
    });
    Vs();
    Us();
    eu();
    ru();
    iu();
    su();
    wr();
    Gb();
    Ub();
    Hb();
    Xb();
    Kb();
    $b();
    e_();
    r_();
    o_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707743130383
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|dc5e7150-9ba0-ecb2-f21c-34ee3703cc4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|dc5e7150-9ba0-ecb2-f21c-34ee3703cc4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "smoothing": 92,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1707974758812
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|c4d12e3d-f5aa-b523-9833-fecdc960440a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|c4d12e3d-f5aa-b523-9833-fecdc960440a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 92,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1707976579696
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|919ed255-f6f9-3929-ece8-2ce7b0bbffb4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|919ed255-f6f9-3929-ece8-2ce7b0bbffb4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 92,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1708057719875
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|5bb44121-6f67-c95d-9c14-7c0e8d827cc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|5bb44121-6f67-c95d-9c14-7c0e8d827cc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1708061948004
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|22f36b86-c395-a2ba-767a-d75674f2b722",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|22f36b86-c395-a2ba-767a-d75674f2b722",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1708061976050
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|ad603838-09cd-87f4-436f-88b114686e99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|ad603838-09cd-87f4-436f-88b114686e99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 240,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708062019547
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".sidebar-nav-item",
                "originalId": "8190571f-7eed-77c8-8206-bb9945ac0046",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".sidebar-nav-item",
                "originalId": "8190571f-7eed-77c8-8206-bb9945ac0046",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708067530402
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".sidebar-nav-item",
                "originalId": "8190571f-7eed-77c8-8206-bb9945ac0046",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".sidebar-nav-item",
                "originalId": "8190571f-7eed-77c8-8206-bb9945ac0046",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708067530402
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d201",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d201",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708068391799
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8190571f-7eed-77c8-8206-bb9945ac0031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8190571f-7eed-77c8-8206-bb9945ac0031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708068613117
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button-wrapper",
                "originalId": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-wrapper",
                "originalId": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708080921480
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button-wrapper",
                "originalId": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-wrapper",
                "originalId": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708080921480
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".title-header",
                "originalId": "65c9db2ebeedf24f0e4dec15|15fea3e7-01e1-ba4c-b3f3-2e2509c76f89",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".title-header",
                "originalId": "65c9db2ebeedf24f0e4dec15|15fea3e7-01e1-ba4c-b3f3-2e2509c76f89",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708082749637
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|03501c20-c786-7957-8558-cd12a16b995c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|03501c20-c786-7957-8558-cd12a16b995c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708082852845
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|c7f7e4a0-8c5c-103e-f64e-d06716f30530",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|c7f7e4a0-8c5c-103e-f64e-d06716f30530",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708082920461
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|bddb4358-f712-a137-6733-78ba04ddb187",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|bddb4358-f712-a137-6733-78ba04ddb187",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 120,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708082933731
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|28e276c2-9d53-1022-8a7e-9dfbabb60d52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|28e276c2-9d53-1022-8a7e-9dfbabb60d52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 160,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708082952051
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|91be4894-cdd6-0476-8523-ca8a52455fae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|91be4894-cdd6-0476-8523-ca8a52455fae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708082967476
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-widget",
                "originalId": "cb366fe5-91a3-026b-80df-c19017b816a7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-widget",
                "originalId": "cb366fe5-91a3-026b-80df-c19017b816a7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708083175364
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".team-link-block",
                "originalId": "65c9db2ebeedf24f0e4dec15|98dae52a-11f2-73da-d0cc-5e8c49a76e92",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-link-block",
                "originalId": "65c9db2ebeedf24f0e4dec15|98dae52a-11f2-73da-d0cc-5e8c49a76e92",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708084228796
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".team-link-block",
                "originalId": "65c9db2ebeedf24f0e4dec15|98dae52a-11f2-73da-d0cc-5e8c49a76e92",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-link-block",
                "originalId": "65c9db2ebeedf24f0e4dec15|98dae52a-11f2-73da-d0cc-5e8c49a76e92",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708084228796
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|f73e90bf-8022-6383-02d2-52f8a2662b57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|f73e90bf-8022-6383-02d2-52f8a2662b57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708332756279
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|f73e90bf-8022-6383-02d2-52f8a2662b5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|f73e90bf-8022-6383-02d2-52f8a2662b5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 120,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708332756279
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|f73e90bf-8022-6383-02d2-52f8a2662b5f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|f73e90bf-8022-6383-02d2-52f8a2662b5f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 160,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708332756279
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|f73e90bf-8022-6383-02d2-52f8a2662b68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|f73e90bf-8022-6383-02d2-52f8a2662b68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708332756279
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".accordian-item",
                "originalId": "65d2fc621e42c9c07c8ca56a|cfbd27be-7633-7460-8a36-c72b68577e9f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".accordian-item",
                "originalId": "65d2fc621e42c9c07c8ca56a|cfbd27be-7633-7460-8a36-c72b68577e9f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708334430981
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".accordian-item",
                "originalId": "65d2fc621e42c9c07c8ca56a|cfbd27be-7633-7460-8a36-c72b68577e9f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".accordian-item",
                "originalId": "65d2fc621e42c9c07c8ca56a|cfbd27be-7633-7460-8a36-c72b68577e9f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708334430982
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d42d54dbdf57d1ed0307f6|5aef91ae-1287-d431-185e-927960ac616e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d42d54dbdf57d1ed0307f6|5aef91ae-1287-d431-185e-927960ac616e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708405957550
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d43c9b6b23e4548205d53e|238a4fa5-c54a-767c-5cdc-671792dc7890",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d43c9b6b23e4548205d53e|238a4fa5-c54a-767c-5cdc-671792dc7890",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708408060736
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d43c9b6b23e4548205d53e|238a4fa5-c54a-767c-5cdc-671792dc7895",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d43c9b6b23e4548205d53e|238a4fa5-c54a-767c-5cdc-671792dc7895",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 120,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708408060736
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d43c9b6b23e4548205d53e|238a4fa5-c54a-767c-5cdc-671792dc7898",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d43c9b6b23e4548205d53e|238a4fa5-c54a-767c-5cdc-671792dc7898",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 160,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708408060736
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d43c9b6b23e4548205d53e|238a4fa5-c54a-767c-5cdc-671792dc78a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d43c9b6b23e4548205d53e|238a4fa5-c54a-767c-5cdc-671792dc78a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708408060736
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d440d86e6b24754b1866ac|5fafaa28-1f3f-9c64-8d9c-1fe9a7d166ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d440d86e6b24754b1866ac|5fafaa28-1f3f-9c64-8d9c-1fe9a7d166ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708409093036
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d440d86e6b24754b1866ac|5fafaa28-1f3f-9c64-8d9c-1fe9a7d166f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d440d86e6b24754b1866ac|5fafaa28-1f3f-9c64-8d9c-1fe9a7d166f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 120,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708409093036
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d440d86e6b24754b1866ac|5fafaa28-1f3f-9c64-8d9c-1fe9a7d166f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d440d86e6b24754b1866ac|5fafaa28-1f3f-9c64-8d9c-1fe9a7d166f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 160,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708409093036
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d440d86e6b24754b1866ac|5fafaa28-1f3f-9c64-8d9c-1fe9a7d166ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d440d86e6b24754b1866ac|5fafaa28-1f3f-9c64-8d9c-1fe9a7d166ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708409093036
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d44bfd502b7e36805295f5|d1238806-ca5a-16c9-aed8-231f982fbb62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d44bfd502b7e36805295f5|d1238806-ca5a-16c9-aed8-231f982fbb62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708413268198
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d44bfd502b7e36805295f5|f8a24aa5-2bea-9ee2-5e61-8962d34d4ef9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d44bfd502b7e36805295f5|f8a24aa5-2bea-9ee2-5e61-8962d34d4ef9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708413897937
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d44bfd502b7e36805295f5|e17d7847-6348-991a-a44b-79be61e9cfee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d44bfd502b7e36805295f5|e17d7847-6348-991a-a44b-79be61e9cfee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708413898665
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d44bfd502b7e36805295f5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d44bfd502b7e36805295f5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708419015984
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d46d94a423144df2a49cca|e84fcb4d-5794-c809-50bc-09d91ca658ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d46d94a423144df2a49cca|e84fcb4d-5794-c809-50bc-09d91ca658ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708421637856
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5c5213e579428833e917b|c0074332-e2f8-3cbb-83c0-786d19677644",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5c5213e579428833e917b|c0074332-e2f8-3cbb-83c0-786d19677644",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708508850212
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cf508c986e263fa9bd1597|653f8e5f-6f24-0ff1-d36b-0c5b77212cc0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cf508c986e263fa9bd1597|653f8e5f-6f24-0ff1-d36b-0c5b77212cc0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708515848695
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cf508c986e263fa9bd1597|f4d3ecdd-cc8b-792a-1e29-16b2923df3e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cf508c986e263fa9bd1597|f4d3ecdd-cc8b-792a-1e29-16b2923df3e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708515882870
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cf508c986e263fa9bd1597|ef4ee2ff-785d-f395-8674-5a55110f417d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cf508c986e263fa9bd1597|ef4ee2ff-785d-f395-8674-5a55110f417d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708515900247
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cf508c986e263fa9bd1597|1828f521-393d-76d8-5bf0-85447016f813",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cf508c986e263fa9bd1597|1828f521-393d-76d8-5bf0-85447016f813",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708515913965
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-block-item",
                "originalId": "65cf508c986e263fa9bd1597|3bd3cb02-06b7-e364-3bea-ca42ce921617",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-block-item",
                "originalId": "65cf508c986e263fa9bd1597|3bd3cb02-06b7-e364-3bea-ca42ce921617",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708515951167
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".service-link-block",
                "originalId": "65d2fc621e42c9c07c8ca56a|e8e2806b-1bba-2b57-bcb0-47d80e902423",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".service-link-block",
                "originalId": "65d2fc621e42c9c07c8ca56a|e8e2806b-1bba-2b57-bcb0-47d80e902423",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516065870
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|31841327-2549-9be0-c496-5c5f45b2ee8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|31841327-2549-9be0-c496-5c5f45b2ee8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516093981
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|75dc1f0c-30cf-a90f-61c6-a81f18ecd81d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|75dc1f0c-30cf-a90f-61c6-a81f18ecd81d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516112743
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|3c779bcc-53c8-2425-3e38-3350ad9a8bf0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|3c779bcc-53c8-2425-3e38-3350ad9a8bf0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516126389
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|77a224c9-b1f2-18e9-c1f8-63c79946946f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|77a224c9-b1f2-18e9-c1f8-63c79946946f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516142863
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-section-link-block",
                "originalId": "65d2fc621e42c9c07c8ca56a|a0f309ca-eff1-c766-53bb-1f08afda8659",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-section-link-block",
                "originalId": "65d2fc621e42c9c07c8ca56a|a0f309ca-eff1-c766-53bb-1f08afda8659",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516195821
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".accordian-item",
                "originalId": "65d2fc621e42c9c07c8ca56a|cfbd27be-7633-7460-8a36-c72b68577e9f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".accordian-item",
                "originalId": "65d2fc621e42c9c07c8ca56a|cfbd27be-7633-7460-8a36-c72b68577e9f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516217343
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".single-image-wrapper",
                "originalId": "65d2fc621e42c9c07c8ca56a|fef0b5c0-9100-43e7-5e2d-b98efcd83b68",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".single-image-wrapper",
                "originalId": "65d2fc621e42c9c07c8ca56a|fef0b5c0-9100-43e7-5e2d-b98efcd83b68",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516240038
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d42d54dbdf57d1ed0307f6|30d880dc-a5c8-97b3-a72a-f2503a62672a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d42d54dbdf57d1ed0307f6|30d880dc-a5c8-97b3-a72a-f2503a62672a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516302312
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d42d54dbdf57d1ed0307f6|1425f90d-6b32-9eb2-670e-802bb2605d1a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d42d54dbdf57d1ed0307f6|1425f90d-6b32-9eb2-670e-802bb2605d1a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516314966
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d42d54dbdf57d1ed0307f6|3ea8e786-8aa2-a936-1855-7842be69e978",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d42d54dbdf57d1ed0307f6|3ea8e786-8aa2-a936-1855-7842be69e978",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516330472
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".contact-form-item",
                "originalId": "65d42d54dbdf57d1ed0307f6|41a4d200-8611-5ccc-e941-310cade35c47",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".contact-form-item",
                "originalId": "65d42d54dbdf57d1ed0307f6|41a4d200-8611-5ccc-e941-310cade35c47",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516346944
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d43c9b6b23e4548205d53e|0b342044-8a96-aa8e-3a2d-80b1b9bc4142",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d43c9b6b23e4548205d53e|0b342044-8a96-aa8e-3a2d-80b1b9bc4142",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516416224
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-blog-2-item",
                "originalId": "65d440d86e6b24754b1866ac|e76cacb1-acbf-a359-870f-732e7a3a12b4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-blog-2-item",
                "originalId": "65d440d86e6b24754b1866ac|e76cacb1-acbf-a359-870f-732e7a3a12b4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516478383
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".pricing-item",
                "originalId": "65d44bfd502b7e36805295f5|53a54272-e794-156d-ba5e-48f9fa02cb44",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".pricing-item",
                "originalId": "65d44bfd502b7e36805295f5|53a54272-e794-156d-ba5e-48f9fa02cb44",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516594126
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d44bfd502b7e36805295f5|08cfd17e-a04d-225f-36d0-8616396281e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d44bfd502b7e36805295f5|08cfd17e-a04d-225f-36d0-8616396281e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516616385
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d44bfd502b7e36805295f5|70a9c070-69bf-b62b-c127-230a06ee061b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d44bfd502b7e36805295f5|70a9c070-69bf-b62b-c127-230a06ee061b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516630439
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d44bfd502b7e36805295f5|cd047a3e-c6c6-fa1e-663b-3a88b037415a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d44bfd502b7e36805295f5|cd047a3e-c6c6-fa1e-663b-3a88b037415a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516654615
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d46d94a423144df2a49cca|7b0c5706-9361-00a1-35c2-d4bb3d395d9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d46d94a423144df2a49cca|7b0c5706-9361-00a1-35c2-d4bb3d395d9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516751864
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d591a77c6b638bc089db97|cbfd1cdb-254a-6581-f1c9-bca718d7b9e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d591a77c6b638bc089db97|cbfd1cdb-254a-6581-f1c9-bca718d7b9e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516816191
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d591a77c6b638bc089db97|68f66722-6ba0-fb38-ae5a-70480501c518",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d591a77c6b638bc089db97|68f66722-6ba0-fb38-ae5a-70480501c518",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516829791
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d591a77c6b638bc089db97|c95e6df6-8eac-d8c1-6632-084596cbf4e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d591a77c6b638bc089db97|c95e6df6-8eac-d8c1-6632-084596cbf4e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516844145
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5989a8369803dea7f9b0b|e41c56a1-fe1e-bd33-a7df-43c23bea5ce6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5989a8369803dea7f9b0b|e41c56a1-fe1e-bd33-a7df-43c23bea5ce6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516910259
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5989a8369803dea7f9b0b|aa5bee4d-60d9-02b1-ee1a-e4199df040a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5989a8369803dea7f9b0b|aa5bee4d-60d9-02b1-ee1a-e4199df040a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516922631
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5989a8369803dea7f9b0b|e4493cb6-1d6f-7cea-fafa-eacd1ef23e6a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5989a8369803dea7f9b0b|e4493cb6-1d6f-7cea-fafa-eacd1ef23e6a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516936170
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5989a8369803dea7f9b0b|13d33ce8-5db0-f25f-30d3-9763d7122ab6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5989a8369803dea7f9b0b|13d33ce8-5db0-f25f-30d3-9763d7122ab6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708516991151
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d59b54ba58bc38f4a7e5db|d3ec7c57-3451-84d6-1706-902d17e91643",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d59b54ba58bc38f4a7e5db|d3ec7c57-3451-84d6-1706-902d17e91643",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517154050
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d59b54ba58bc38f4a7e5db|169839ed-84f1-f3e0-39cb-c45b5a6f53b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d59b54ba58bc38f4a7e5db|169839ed-84f1-f3e0-39cb-c45b5a6f53b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517167241
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".licence-image-box",
                "originalId": "65d59b54ba58bc38f4a7e5db|85649861-10bb-a34f-33b4-3fa342b796fd",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".licence-image-box",
                "originalId": "65d59b54ba58bc38f4a7e5db|85649861-10bb-a34f-33b4-3fa342b796fd",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517208664
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2f1a448fded04723f94fd|c8dd5448-3c10-5454-97d7-c8c592b1a359",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2f1a448fded04723f94fd|c8dd5448-3c10-5454-97d7-c8c592b1a359",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517332721
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2f1a448fded04723f94fd|962a44ed-c0e3-7115-0d87-5ed89fcccd4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2f1a448fded04723f94fd|962a44ed-c0e3-7115-0d87-5ed89fcccd4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517346680
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2f1a448fded04723f94fd|00a45d14-169e-fdb7-4aad-1eefc6c10be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2f1a448fded04723f94fd|00a45d14-169e-fdb7-4aad-1eefc6c10be5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517363648
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2f1a448fded04723f94fd|18bf9ea1-769c-f1c4-a7d4-5061cb09b37c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2f1a448fded04723f94fd|18bf9ea1-769c-f1c4-a7d4-5061cb09b37c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517381335
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cc921457427e91f1634a64|1e41a34c-6742-71b3-8db8-b233ce6c5324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cc921457427e91f1634a64|1e41a34c-6742-71b3-8db8-b233ce6c5324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517440768
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-166"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cc921457427e91f1634a64|361bba79-725f-9623-a3a5-39d037604574",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cc921457427e91f1634a64|361bba79-725f-9623-a3a5-39d037604574",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517453768
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cc921457427e91f1634a64|8b0bec1c-16f1-5fe7-4a5e-7a14e12cc527",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cc921457427e91f1634a64|8b0bec1c-16f1-5fe7-4a5e-7a14e12cc527",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517466686
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-170"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cc921457427e91f1634a64|84563143-9e7a-9541-669a-bc1e925c615d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cc921457427e91f1634a64|84563143-9e7a-9541-669a-bc1e925c615d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517479150
        },
        "e-171": {
            "id": "e-171",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-172"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cc921457427e91f1634a64|fbfc5c61-11f0-4117-c060-67f9bbf9f2ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cc921457427e91f1634a64|fbfc5c61-11f0-4117-c060-67f9bbf9f2ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517493216
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cc921457427e91f1634a64|d0695e57-4ba3-9fce-b009-f5653bf00bb8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cc921457427e91f1634a64|d0695e57-4ba3-9fce-b009-f5653bf00bb8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517513793
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-176"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ca09bdc0458e2f78583c9a|2ec8c5e9-f7c2-3ad4-4073-0cbe69f0dc29",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ca09bdc0458e2f78583c9a|2ec8c5e9-f7c2-3ad4-4073-0cbe69f0dc29",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517577360
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ca09bdc0458e2f78583c9a|81d3f142-680b-2e21-c479-532aa82f1433",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ca09bdc0458e2f78583c9a|81d3f142-680b-2e21-c479-532aa82f1433",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517591927
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ca09bdc0458e2f78583c9a|32aeca2c-893e-0470-82da-2551911c4f20",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ca09bdc0458e2f78583c9a|32aeca2c-893e-0470-82da-2551911c4f20",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517610047
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-182"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5beff5fdd4614fc570745|65d5beff5fdd4614fc57074800000000000d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5beff5fdd4614fc570745|65d5beff5fdd4614fc57074800000000000d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517662527
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5beff5fdd4614fc570745|65d5beff5fdd4614fc57074800000000000f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5beff5fdd4614fc570745|65d5beff5fdd4614fc57074800000000000f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517675559
        },
        "e-185": {
            "id": "e-185",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5beff5fdd4614fc570745|5a9365a6-d7af-281c-64fd-b3ded94bedb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5beff5fdd4614fc570745|5a9365a6-d7af-281c-64fd-b3ded94bedb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1708517688625
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-192"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|e5b41cd1-33f8-dd69-e5b6-f6a63acd9084",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|e5b41cd1-33f8-dd69-e5b6-f6a63acd9084",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708595604329
        },
        "e-192": {
            "id": "e-192",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-191"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a|e5b41cd1-33f8-dd69-e5b6-f6a63acd9084",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a|e5b41cd1-33f8-dd69-e5b6-f6a63acd9084",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708595604330
        },
        "e-193": {
            "id": "e-193",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-194"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-blog-2-item",
                "originalId": "65d440d86e6b24754b1866ac|e76cacb1-acbf-a359-870f-732e7a3a12b4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-blog-2-item",
                "originalId": "65d440d86e6b24754b1866ac|e76cacb1-acbf-a359-870f-732e7a3a12b4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708596768978
        },
        "e-194": {
            "id": "e-194",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-193"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-blog-2-item",
                "originalId": "65d440d86e6b24754b1866ac|e76cacb1-acbf-a359-870f-732e7a3a12b4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-blog-2-item",
                "originalId": "65d440d86e6b24754b1866ac|e76cacb1-acbf-a359-870f-732e7a3a12b4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708596768982
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-196"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "9044e130-7f88-6421-3416-5023ff49cbf8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "9044e130-7f88-6421-3416-5023ff49cbf8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708605874778
        },
        "e-196": {
            "id": "e-196",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "9044e130-7f88-6421-3416-5023ff49cbf8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "9044e130-7f88-6421-3416-5023ff49cbf8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708605874780
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cf508c986e263fa9bd1597",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cf508c986e263fa9bd1597",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664353750
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2fc621e42c9c07c8ca56a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2fc621e42c9c07c8ca56a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664388084
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d42d54dbdf57d1ed0307f6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d42d54dbdf57d1ed0307f6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664402370
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d43c9b6b23e4548205d53e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d43c9b6b23e4548205d53e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664417596
        },
        "e-205": {
            "id": "e-205",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-206"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d440d86e6b24754b1866ac",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d440d86e6b24754b1866ac",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664481419
        },
        "e-207": {
            "id": "e-207",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-208"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d44bfd502b7e36805295f5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d44bfd502b7e36805295f5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664508556
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d46d94a423144df2a49cca",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d46d94a423144df2a49cca",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664523372
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d591a77c6b638bc089db97",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d591a77c6b638bc089db97",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664555667
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-214"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5989a8369803dea7f9b0b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5989a8369803dea7f9b0b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664571970
        },
        "e-215": {
            "id": "e-215",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-216"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d59b54ba58bc38f4a7e5db",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d59b54ba58bc38f4a7e5db",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664587338
        },
        "e-217": {
            "id": "e-217",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-218"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d2f1a448fded04723f94fd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d2f1a448fded04723f94fd",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664616076
        },
        "e-219": {
            "id": "e-219",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-220"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cc921457427e91f1634a64",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cc921457427e91f1634a64",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664628915
        },
        "e-221": {
            "id": "e-221",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-222"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ca09bdc0458e2f78583c9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ca09bdc0458e2f78583c9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664647530
        },
        "e-223": {
            "id": "e-223",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-224"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d5beff5fdd4614fc570745",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d5beff5fdd4614fc570745",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708664679243
        },
        "e-225": {
            "id": "e-225",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-226"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".contact-social-item",
                "originalId": "65d42d54dbdf57d1ed0307f6|e057bd40-6c37-3118-d1dc-398f6a62ff4d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".contact-social-item",
                "originalId": "65d42d54dbdf57d1ed0307f6|e057bd40-6c37-3118-d1dc-398f6a62ff4d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708666687179
        },
        "e-226": {
            "id": "e-226",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-225"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".contact-social-item",
                "originalId": "65d42d54dbdf57d1ed0307f6|e057bd40-6c37-3118-d1dc-398f6a62ff4d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".contact-social-item",
                "originalId": "65d42d54dbdf57d1ed0307f6|e057bd40-6c37-3118-d1dc-398f6a62ff4d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708666687182
        },
        "e-230": {
            "id": "e-230",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|f4128556-b3d6-1362-d88c-e2318a01a905",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|f4128556-b3d6-1362-d88c-e2318a01a905",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-33-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-33-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }],
            "createdOn": 1708692628961
        },
        "e-231": {
            "id": "e-231",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-232"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|f4128556-b3d6-1362-d88c-e2318a01a905",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|f4128556-b3d6-1362-d88c-e2318a01a905",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708692628961
        },
        "e-232": {
            "id": "e-232",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-231"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|f4128556-b3d6-1362-d88c-e2318a01a905",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|f4128556-b3d6-1362-d88c-e2318a01a905",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708692628961
        },
        "e-233": {
            "id": "e-233",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cf508c986e263fa9bd1597|5626ae9b-a726-2c0a-80d9-0b2cb301c755",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cf508c986e263fa9bd1597|5626ae9b-a726-2c0a-80d9-0b2cb301c755",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-34-p",
                "smoothing": 92,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1708942287641
        },
        "e-234": {
            "id": "e-234",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65cf508c986e263fa9bd1597|2de9844a-c419-9f55-4924-cc4fb2c6b455",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cf508c986e263fa9bd1597|2de9844a-c419-9f55-4924-cc4fb2c6b455",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-14-p",
                "smoothing": 92,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1708942301231
        },
        "e-235": {
            "id": "e-235",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|6d4b62e2-e920-94c8-08bd-9b7d5dbe0d6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|6d4b62e2-e920-94c8-08bd-9b7d5dbe0d6c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "smoothing": 92,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1708942601728
        },
        "e-236": {
            "id": "e-236",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|87a1d44d-5051-0947-d50c-debcd709eb1a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|87a1d44d-5051-0947-d50c-debcd709eb1a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "smoothing": 92,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1708942749641
        },
        "e-237": {
            "id": "e-237",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".desc-text-overlay",
                "originalId": "65c9db2ebeedf24f0e4dec15|3a811a61-ca5e-1a36-f7ec-bf2e5fbcb310",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".desc-text-overlay",
                "originalId": "65c9db2ebeedf24f0e4dec15|3a811a61-ca5e-1a36-f7ec-bf2e5fbcb310",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1708949465191
        },
        "e-238": {
            "id": "e-238",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-239"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|35ccfaac-f7c8-40ae-8de7-c9e16caaf7f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|35ccfaac-f7c8-40ae-8de7-c9e16caaf7f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709006661534
        },
        "e-239": {
            "id": "e-239",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-238"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|35ccfaac-f7c8-40ae-8de7-c9e16caaf7f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|35ccfaac-f7c8-40ae-8de7-c9e16caaf7f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709006661534
        },
        "e-240": {
            "id": "e-240",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|35ccfaac-f7c8-40ae-8de7-c9e16caaf7f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|35ccfaac-f7c8-40ae-8de7-c9e16caaf7f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-33-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-33-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }],
            "createdOn": 1709006661534
        },
        "e-241": {
            "id": "e-241",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button-wrapper",
                "originalId": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-wrapper",
                "originalId": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-37-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }],
            "createdOn": 1709015082500
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-243"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|0f7f222b-2d7a-2605-06cd-e52169892407",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|0f7f222b-2d7a-2605-06cd-e52169892407",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709023117894
        },
        "e-243": {
            "id": "e-243",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-242"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|0f7f222b-2d7a-2605-06cd-e52169892407",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|0f7f222b-2d7a-2605-06cd-e52169892407",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709023117894
        },
        "e-244": {
            "id": "e-244",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|0f7f222b-2d7a-2605-06cd-e52169892407",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|0f7f222b-2d7a-2605-06cd-e52169892407",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-33-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-33-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }],
            "createdOn": 1709023117894
        },
        "e-245": {
            "id": "e-245",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-button",
                "originalId": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-button",
                "originalId": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-33-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-33-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1709023884316
        },
        "e-246": {
            "id": "e-246",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-247"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-button",
                "originalId": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-button",
                "originalId": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709023903971
        },
        "e-247": {
            "id": "e-247",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-button",
                "originalId": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-button",
                "originalId": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709023904006
        },
        "e-248": {
            "id": "e-248",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".submenu-link-item",
                "originalId": "f885663c-c133-df2c-53b2-299008152a1d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".submenu-link-item",
                "originalId": "f885663c-c133-df2c-53b2-299008152a1d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709026741575
        },
        "e-249": {
            "id": "e-249",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-248"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".submenu-link-item",
                "originalId": "f885663c-c133-df2c-53b2-299008152a1d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".submenu-link-item",
                "originalId": "f885663c-c133-df2c-53b2-299008152a1d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709026741576
        },
        "e-250": {
            "id": "e-250",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-251"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".testimonial-icon-block",
                "originalId": "65c9db2ebeedf24f0e4dec15|95c1924d-68ca-1a5a-e64d-1b084074da47",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".testimonial-icon-block",
                "originalId": "65c9db2ebeedf24f0e4dec15|95c1924d-68ca-1a5a-e64d-1b084074da47",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1709029357099
        },
        "e-252": {
            "id": "e-252",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-253"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".testimonial-quote",
                "originalId": "65c9db2ebeedf24f0e4dec15|fbf37fdb-bca7-8909-b30e-9ca07efcaa22",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".testimonial-quote",
                "originalId": "65c9db2ebeedf24f0e4dec15|fbf37fdb-bca7-8909-b30e-9ca07efcaa22",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1709029439104
        },
        "e-254": {
            "id": "e-254",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-255"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".testimonial-caption",
                "originalId": "65c9db2ebeedf24f0e4dec15|d03c4c55-ffe7-b86d-cd72-35c20ae1fcc4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".testimonial-caption",
                "originalId": "65c9db2ebeedf24f0e4dec15|d03c4c55-ffe7-b86d-cd72-35c20ae1fcc4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1709029453151
        },
        "e-256": {
            "id": "e-256",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-257"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65c9db2ebeedf24f0e4dec15|1b6244e0-c6dd-9b44-03e2-30d519c2df1a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65c9db2ebeedf24f0e4dec15|1b6244e0-c6dd-9b44-03e2-30d519c2df1a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1709029539699
        },
        "e-260": {
            "id": "e-260",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65cf508c986e263fa9bd1597|89bf9526-541e-1b75-076d-6479fe54f019",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65cf508c986e263fa9bd1597|89bf9526-541e-1b75-076d-6479fe54f019",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-22-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-22-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }],
            "createdOn": 1710765955744
        },
        "e-261": {
            "id": "e-261",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-262"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-block-item",
                "originalId": "65cf508c986e263fa9bd1597|3bd3cb02-06b7-e364-3bea-ca42ce921617",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-block-item",
                "originalId": "65cf508c986e263fa9bd1597|3bd3cb02-06b7-e364-3bea-ca42ce921617",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710766111720
        },
        "e-262": {
            "id": "e-262",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-261"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-block-item",
                "originalId": "65cf508c986e263fa9bd1597|3bd3cb02-06b7-e364-3bea-ca42ce921617",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-block-item",
                "originalId": "65cf508c986e263fa9bd1597|3bd3cb02-06b7-e364-3bea-ca42ce921617",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710766111722
        },
        "e-263": {
            "id": "e-263",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".team-2-item",
                "originalId": "65cf508c986e263fa9bd1597|2b9b5311-9042-1d22-a711-3af43b97364f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-2-item",
                "originalId": "65cf508c986e263fa9bd1597|2b9b5311-9042-1d22-a711-3af43b97364f",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-17-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-17-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }],
            "createdOn": 1710847207274
        },
        "e-264": {
            "id": "e-264",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".team-2-link-block",
                "originalId": "65cf508c986e263fa9bd1597|2531d1e5-6f89-6c1c-e9c3-350d4554fdd1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-2-link-block",
                "originalId": "65cf508c986e263fa9bd1597|2531d1e5-6f89-6c1c-e9c3-350d4554fdd1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710847253362
        },
        "e-265": {
            "id": "e-265",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-264"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".team-2-link-block",
                "originalId": "65cf508c986e263fa9bd1597|2531d1e5-6f89-6c1c-e9c3-350d4554fdd1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-2-link-block",
                "originalId": "65cf508c986e263fa9bd1597|2531d1e5-6f89-6c1c-e9c3-350d4554fdd1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710847253364
        },
        "e-268": {
            "id": "e-268",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-269"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d1754513b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d1754513b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711598901086
        },
        "e-269": {
            "id": "e-269",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-268"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d1754513b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d1754513b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711598901086
        },
        "e-270": {
            "id": "e-270",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-button",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-button",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-45-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 92,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-45-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1711598901086
        },
        "e-271": {
            "id": "e-271",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-272"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-button",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-button",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711598901086
        },
        "e-272": {
            "id": "e-272",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-271"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-button",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-button",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711598901086
        },
        "e-273": {
            "id": "e-273",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-274"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".submenu-link-item",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545142",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".submenu-link-item",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545142",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711598901086
        },
        "e-274": {
            "id": "e-274",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-273"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".submenu-link-item",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545142",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".submenu-link-item",
                "originalId": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545142",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711598901086
        },
        "e-275": {
            "id": "e-275",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|317f896b-ec04-109f-45c0-aa9d36fa35f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|317f896b-ec04-109f-45c0-aa9d36fa35f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711620629392
        },
        "e-277": {
            "id": "e-277",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-278"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|317f896b-ec04-109f-45c0-aa9d36fa3608",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|317f896b-ec04-109f-45c0-aa9d36fa3608",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711620629392
        },
        "e-279": {
            "id": "e-279",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-280"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|317f896b-ec04-109f-45c0-aa9d36fa3617",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|317f896b-ec04-109f-45c0-aa9d36fa3617",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711620629392
        },
        "e-281": {
            "id": "e-281",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|0b8c08ce-87bd-3de3-1475-69fd1103df89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|0b8c08ce-87bd-3de3-1475-69fd1103df89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711621156729
        },
        "e-283": {
            "id": "e-283",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-284"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|0b8c08ce-87bd-3de3-1475-69fd1103df8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|0b8c08ce-87bd-3de3-1475-69fd1103df8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 120,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711621156729
        },
        "e-285": {
            "id": "e-285",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-286"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|0b8c08ce-87bd-3de3-1475-69fd1103df91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|0b8c08ce-87bd-3de3-1475-69fd1103df91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 160,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711621156729
        },
        "e-287": {
            "id": "e-287",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-288"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|0b8c08ce-87bd-3de3-1475-69fd1103df9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|0b8c08ce-87bd-3de3-1475-69fd1103df9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711621156729
        },
        "e-289": {
            "id": "e-289",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-290"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711627613300
        },
        "e-291": {
            "id": "e-291",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-292"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".gallery-item",
                "originalId": "6604ed1fc246f4f1537d4327|a6eb9c9a-9d8c-b613-3e9e-1370da9c8f26",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".gallery-item",
                "originalId": "6604ed1fc246f4f1537d4327|a6eb9c9a-9d8c-b613-3e9e-1370da9c8f26",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711691548628
        },
        "e-292": {
            "id": "e-292",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-291"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".gallery-item",
                "originalId": "6604ed1fc246f4f1537d4327|a6eb9c9a-9d8c-b613-3e9e-1370da9c8f26",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".gallery-item",
                "originalId": "6604ed1fc246f4f1537d4327|a6eb9c9a-9d8c-b613-3e9e-1370da9c8f26",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711691548641
        },
        "e-293": {
            "id": "e-293",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-294"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711692993292
        },
        "e-296": {
            "id": "e-296",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-297"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|d7ea3bba-6e82-5d87-f946-d4a20fb1cd07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|d7ea3bba-6e82-5d87-f946-d4a20fb1cd07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711794227972
        },
        "e-298": {
            "id": "e-298",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-299"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|9bda93fc-9268-f7f8-4f41-8db9b1b2e14b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|9bda93fc-9268-f7f8-4f41-8db9b1b2e14b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711794475265
        },
        "e-300": {
            "id": "e-300",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-301"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|6e2ed2ba-bd39-cf0b-1712-b14075692d65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|6e2ed2ba-bd39-cf0b-1712-b14075692d65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1711794511584
        },
        "e-302": {
            "id": "e-302",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-303"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|bf45f9ff-265b-7842-34ad-435dfcf52888",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|bf45f9ff-265b-7842-34ad-435dfcf52888",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 12,
                "scrollOffsetUnit": "%",
                "delay": 80,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1711794601943
        },
        "e-304": {
            "id": "e-304",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|3bc33e34-5562-377c-a95f-f2736f5ac307",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|3bc33e34-5562-377c-a95f-f2736f5ac307",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-54-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1711796602219
        },
        "e-307": {
            "id": "e-307",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|c952c913-c2cb-cf51-6dea-88479a1c4fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|c952c913-c2cb-cf51-6dea-88479a1c4fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-56-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-56-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1712664695836
        },
        "e-311": {
            "id": "e-311",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-312"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|83168242-f2e3-16e3-c0a1-34fd1888306a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|83168242-f2e3-16e3-c0a1-34fd1888306a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1712742171659
        },
        "e-313": {
            "id": "e-313",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-314"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|e38bd856-2167-68b0-6d58-9458639ca355",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|e38bd856-2167-68b0-6d58-9458639ca355",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 320,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1712742190578
        },
        "e-315": {
            "id": "e-315",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-316"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|352f9df7-9256-6163-5759-dcd59ec14528",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|352f9df7-9256-6163-5759-dcd59ec14528",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1712742212419
        },
        "e-317": {
            "id": "e-317",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-318"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|1bf1e0e7-5bc9-01d9-4e12-bc91b54cbf7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|1bf1e0e7-5bc9-01d9-4e12-bc91b54cbf7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 420,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1712742229569
        },
        "e-319": {
            "id": "e-319",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-320"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|4a4bf6dd-b3bf-49d8-c002-d25c8128f68b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|4a4bf6dd-b3bf-49d8-c002-d25c8128f68b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 120,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1712742247531
        },
        "e-323": {
            "id": "e-323",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|e565fbb6-a6a9-8afd-5e86-86112828a0ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|e565fbb6-a6a9-8afd-5e86-86112828a0ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-53-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1712745032691
        },
        "e-324": {
            "id": "e-324",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6604ed1fc246f4f1537d4327|b4191fae-4bdd-af34-3797-59df99d2b2f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6604ed1fc246f4f1537d4327|b4191fae-4bdd-af34-3797-59df99d2b2f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-55-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1712905919974
        },
        "e-325": {
            "id": "e-325",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-326"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "6604ed1fc246f4f1537d4327|ab55d4cb-c79c-596e-afdc-cbf8646b5770"
            },
            "targets": [],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712911560927
        },
        "e-326": {
            "id": "e-326",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-325"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "6604ed1fc246f4f1537d4327|ab55d4cb-c79c-596e-afdc-cbf8646b5770"
            },
            "targets": [],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712911560930
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Loop Text",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loop-text-block",
                            "selectorGuids": ["0a497175-455e-3e83-8527-057cb080d250"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 24000,
                        "target": {
                            "selector": ".loop-text-block",
                            "selectorGuids": ["0a497175-455e-3e83-8527-057cb080d250"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loop-text-block",
                            "selectorGuids": ["0a497175-455e-3e83-8527-057cb080d250"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1707743135710
        },
        "a-2": {
            "id": "a-2",
            "title": "About Image",
            "continuousParameterGroups": [{
                "id": "a-2-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 42,
                    "actionItems": [{
                        "id": "a-2-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".about-single-image",
                                "selectorGuids": ["0fa6596d-1190-49f9-4837-9ad5725a3d0a"]
                            },
                            "zValue": 10,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-2-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".icon-image",
                                "selectorGuids": ["4dffff99-c937-32e4-7833-e63d6a10b00e"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-2-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".icon-image",
                                "selectorGuids": ["4dffff99-c937-32e4-7833-e63d6a10b00e"]
                            },
                            "xValue": 180,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 78,
                    "actionItems": [{
                        "id": "a-2-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".about-single-image",
                                "selectorGuids": ["0fa6596d-1190-49f9-4837-9ad5725a3d0a"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-2-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".icon-image",
                                "selectorGuids": ["4dffff99-c937-32e4-7833-e63d6a10b00e"]
                            },
                            "zValue": -180,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-2-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".icon-image",
                                "selectorGuids": ["4dffff99-c937-32e4-7833-e63d6a10b00e"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1707974764931
        },
        "a-3": {
            "id": "a-3",
            "title": "Service Item Scroll",
            "continuousParameterGroups": [{
                "id": "a-3-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-3-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-1",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "a0da7a1b-f10f-2f24-3907-46db5d776925"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-3-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-1",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "a0da7a1b-f10f-2f24-3907-46db5d776925"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-3-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-1",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "a0da7a1b-f10f-2f24-3907-46db5d776925"]
                            },
                            "zValue": 6.5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-3-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-1",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "a0da7a1b-f10f-2f24-3907-46db5d776925"]
                            },
                            "value": 0.6,
                            "unit": ""
                        }
                    }, {
                        "id": "a-3-n-6",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-1",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "a0da7a1b-f10f-2f24-3907-46db5d776925"]
                            },
                            "zValue": -12,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-3-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-1",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "a0da7a1b-f10f-2f24-3907-46db5d776925"]
                            },
                            "yValue": -120,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-3-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-2",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "51e7d49c-21ca-9630-862a-58da8b19e5c4"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-3-n-9",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-2",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "51e7d49c-21ca-9630-862a-58da8b19e5c4"]
                            },
                            "zValue": -8.9,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-3-n-10",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-2",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "51e7d49c-21ca-9630-862a-58da8b19e5c4"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-3-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-2",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "51e7d49c-21ca-9630-862a-58da8b19e5c4"]
                            },
                            "yValue": -120,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-3-n-12",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-2",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "51e7d49c-21ca-9630-862a-58da8b19e5c4"]
                            },
                            "zValue": -7,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-3-n-13",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-2",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "51e7d49c-21ca-9630-862a-58da8b19e5c4"]
                            },
                            "value": 0.6,
                            "unit": ""
                        }
                    }, {
                        "id": "a-3-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-3",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "12431d53-fd5c-02b2-86d6-58778c76a625"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-3-n-15",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-3",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "12431d53-fd5c-02b2-86d6-58778c76a625"]
                            },
                            "zValue": 4.62,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-3-n-16",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-3",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "12431d53-fd5c-02b2-86d6-58778c76a625"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-3-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-3",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "12431d53-fd5c-02b2-86d6-58778c76a625"]
                            },
                            "yValue": -120,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-3-n-18",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-3",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "12431d53-fd5c-02b2-86d6-58778c76a625"]
                            },
                            "zValue": -4,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-3-n-19",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-3",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "12431d53-fd5c-02b2-86d6-58778c76a625"]
                            },
                            "value": 0.6,
                            "unit": ""
                        }
                    }, {
                        "id": "a-3-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-4",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "e8714632-4ba7-146f-c092-654a27cc0574"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-3-n-21",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-4",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "e8714632-4ba7-146f-c092-654a27cc0574"]
                            },
                            "zValue": -2.32,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-3-n-22",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-4",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "e8714632-4ba7-146f-c092-654a27cc0574"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-3-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-4",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "e8714632-4ba7-146f-c092-654a27cc0574"]
                            },
                            "yValue": -120,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-3-n-24",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-4",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "e8714632-4ba7-146f-c092-654a27cc0574"]
                            },
                            "zValue": -1,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-3-n-25",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-list-wrapper.item-4",
                                "selectorGuids": ["a402e069-ed30-cae7-71a8-f7120ee8119a", "e8714632-4ba7-146f-c092-654a27cc0574"]
                            },
                            "value": 0.6,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1707976585360
        },
        "a-5": {
            "id": "a-5",
            "title": "Testimonial Item Scroll",
            "continuousParameterGroups": [{
                "id": "a-5-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-1",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "94cf06cb-0737-a9e4-4254-c9bf763648f3"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-2",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "00ac53a1-7584-3b6e-ea08-67a4ce693d20"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-3",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "e9c3219d-f7d1-0c1c-b6db-29b37f5b6a64"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-15",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-1",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "e05e694b-291a-95cc-6804-46e9f45ecc28"]
                            },
                            "globalSwatchId": "",
                            "rValue": 217,
                            "bValue": 84,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-5-n-16",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-2",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "fc3fa4c0-7843-e9d1-18de-90b3cf0055c7"]
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-5-n-17",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-3",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "c159fff8-619d-5d21-e617-dec7e8cd9848"]
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-5-n-28",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-1",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "b1f14448-8211-99d0-fafa-78338fca628b"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "b040",
                                "value": 0,
                                "unit": "%"
                            }]
                        }
                    }, {
                        "id": "a-5-n-29",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-2",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "889d2114-5e46-9cb7-3c37-8e3c5a80d805"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "9282",
                                "value": 100,
                                "unit": "%"
                            }]
                        }
                    }, {
                        "id": "a-5-n-30",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-3",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "7f45f956-b013-d8f3-ca00-38dfa60e2756"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "9fbb",
                                "value": 100,
                                "unit": "%"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 52,
                    "actionItems": [{
                        "id": "a-5-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-1",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "94cf06cb-0737-a9e4-4254-c9bf763648f3"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-14",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-2",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "00ac53a1-7584-3b6e-ea08-67a4ce693d20"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-24",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-1",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "e05e694b-291a-95cc-6804-46e9f45ecc28"]
                            },
                            "globalSwatchId": "",
                            "rValue": 217,
                            "bValue": 84,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-5-n-25",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-2",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "fc3fa4c0-7843-e9d1-18de-90b3cf0055c7"]
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-5-n-31",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-1",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "b1f14448-8211-99d0-fafa-78338fca628b"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "b040",
                                "value": 0,
                                "unit": "%"
                            }]
                        }
                    }, {
                        "id": "a-5-n-33",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-2",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "889d2114-5e46-9cb7-3c37-8e3c5a80d805"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "9282",
                                "value": 100,
                                "unit": "%"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 58,
                    "actionItems": [{
                        "id": "a-5-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-1",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "94cf06cb-0737-a9e4-4254-c9bf763648f3"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-2",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "00ac53a1-7584-3b6e-ea08-67a4ce693d20"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-3",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "e9c3219d-f7d1-0c1c-b6db-29b37f5b6a64"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-18",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-1",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "e05e694b-291a-95cc-6804-46e9f45ecc28"]
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-5-n-19",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-2",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "fc3fa4c0-7843-e9d1-18de-90b3cf0055c7"]
                            },
                            "globalSwatchId": "",
                            "rValue": 217,
                            "bValue": 84,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-5-n-20",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-3",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "c159fff8-619d-5d21-e617-dec7e8cd9848"]
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-5-n-32",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-1",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "b1f14448-8211-99d0-fafa-78338fca628b"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "b040",
                                "value": 100,
                                "unit": "%"
                            }]
                        }
                    }, {
                        "id": "a-5-n-34",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-2",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "889d2114-5e46-9cb7-3c37-8e3c5a80d805"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "9282",
                                "value": 0,
                                "unit": "%"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 67,
                    "actionItems": [{
                        "id": "a-5-n-12",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-2",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "00ac53a1-7584-3b6e-ea08-67a4ce693d20"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-13",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-3",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "e9c3219d-f7d1-0c1c-b6db-29b37f5b6a64"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-26",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-2",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "fc3fa4c0-7843-e9d1-18de-90b3cf0055c7"]
                            },
                            "globalSwatchId": "",
                            "rValue": 217,
                            "bValue": 84,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-5-n-27",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-3",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "c159fff8-619d-5d21-e617-dec7e8cd9848"]
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-5-n-35",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-2",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "889d2114-5e46-9cb7-3c37-8e3c5a80d805"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "9282",
                                "value": 0,
                                "unit": "%"
                            }]
                        }
                    }, {
                        "id": "a-5-n-36",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-3",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "7f45f956-b013-d8f3-ca00-38dfa60e2756"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "9fbb",
                                "value": 100,
                                "unit": "%"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 73,
                    "actionItems": [{
                        "id": "a-5-n-8",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-1",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "94cf06cb-0737-a9e4-4254-c9bf763648f3"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-2",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "00ac53a1-7584-3b6e-ea08-67a4ce693d20"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-10",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image-icon.icon-3",
                                "selectorGuids": ["13f75046-71bf-47f3-5353-d45656965af4", "e9c3219d-f7d1-0c1c-b6db-29b37f5b6a64"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-21",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-1",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "e05e694b-291a-95cc-6804-46e9f45ecc28"]
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-5-n-22",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-2",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "fc3fa4c0-7843-e9d1-18de-90b3cf0055c7"]
                            },
                            "globalSwatchId": "",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-5-n-23",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-thumbnail.item-3",
                                "selectorGuids": ["73c3a622-3ea4-9cc3-de8e-11cf7a6e4bc0", "c159fff8-619d-5d21-e617-dec7e8cd9848"]
                            },
                            "globalSwatchId": "",
                            "rValue": 217,
                            "bValue": 84,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-5-n-37",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-2",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "889d2114-5e46-9cb7-3c37-8e3c5a80d805"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "9282",
                                "value": 100,
                                "unit": "%"
                            }]
                        }
                    }, {
                        "id": "a-5-n-38",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".testimonial-image.image-3",
                                "selectorGuids": ["90d90480-0bce-b973-58d6-55d477161fdc", "7f45f956-b013-d8f3-ca00-38dfa60e2756"]
                            },
                            "filters": [{
                                "type": "grayscale",
                                "filterId": "9fbb",
                                "value": 0,
                                "unit": "%"
                            }]
                        }
                    }]
                }]
            }],
            "createdOn": 1707983612779
        },
        "a-6": {
            "id": "a-6",
            "title": "Sidebar Nav Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sidebar-nav-link",
                            "selectorGuids": ["3d570727-9ccc-c03c-22f6-cffa908f94cc"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sidebar-video-item",
                            "selectorGuids": ["bee7d61e-fa5d-792f-133c-c592c4da54c3"]
                        },
                        "widthValue": 0,
                        "widthUnit": "vw",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sidebar-nav-link",
                            "selectorGuids": ["3d570727-9ccc-c03c-22f6-cffa908f94cc"]
                        },
                        "yValue": -12,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sidebar-video-item",
                            "selectorGuids": ["bee7d61e-fa5d-792f-133c-c592c4da54c3"]
                        },
                        "widthValue": 20,
                        "widthUnit": "vw",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708067132370
        },
        "a-7": {
            "id": "a-7",
            "title": "Sidebar Nav Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sidebar-nav-link",
                            "selectorGuids": ["3d570727-9ccc-c03c-22f6-cffa908f94cc"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sidebar-video-item",
                            "selectorGuids": ["bee7d61e-fa5d-792f-133c-c592c4da54c3"]
                        },
                        "widthValue": 0,
                        "widthUnit": "vw",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708067132370
        },
        "a-8": {
            "id": "a-8",
            "title": "Submenu Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-8-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "xValue": null,
                        "yValue": -150,
                        "xUnit": "vw",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-8-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "xValue": null,
                        "yValue": 0,
                        "xUnit": "vw",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708068074247
        },
        "a-9": {
            "id": "a-9",
            "title": "Submenu Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "xValue": null,
                        "yValue": -150,
                        "xUnit": "vw",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".sidebar-menu",
                            "selectorGuids": ["8bc76207-ac2c-e7ed-783e-26cfd2991a5b"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708068074247
        },
        "a-10": {
            "id": "a-10",
            "title": "Button Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button",
                            "selectorGuids": ["cd964ec5-0d2a-536a-64fb-e72d58f8fd2a"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-10-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button",
                            "selectorGuids": ["cd964ec5-0d2a-536a-64fb-e72d58f8fd2a"]
                        },
                        "zValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "px"
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-back",
                            "selectorGuids": ["a3aadac6-0e8e-e733-1a1e-47f394a9b07d"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-back",
                            "selectorGuids": ["a3aadac6-0e8e-e733-1a1e-47f394a9b07d"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-back",
                            "selectorGuids": ["a3aadac6-0e8e-e733-1a1e-47f394a9b07d"]
                        },
                        "zValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "px"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button",
                            "selectorGuids": ["cd964ec5-0d2a-536a-64fb-e72d58f8fd2a"]
                        },
                        "globalSwatchId": "",
                        "rValue": 9,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }, {
                    "id": "a-10-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button",
                            "selectorGuids": ["cd964ec5-0d2a-536a-64fb-e72d58f8fd2a"]
                        },
                        "zValue": 120,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "px"
                    }
                }, {
                    "id": "a-10-n-7",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-back",
                            "selectorGuids": ["a3aadac6-0e8e-e733-1a1e-47f394a9b07d"]
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-10-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-back",
                            "selectorGuids": ["a3aadac6-0e8e-e733-1a1e-47f394a9b07d"]
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-10-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-back",
                            "selectorGuids": ["a3aadac6-0e8e-e733-1a1e-47f394a9b07d"]
                        },
                        "zValue": -120,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "px"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708080925792
        },
        "a-11": {
            "id": "a-11",
            "title": "Button Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button",
                            "selectorGuids": ["cd964ec5-0d2a-536a-64fb-e72d58f8fd2a"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-11-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button",
                            "selectorGuids": ["cd964ec5-0d2a-536a-64fb-e72d58f8fd2a"]
                        },
                        "zValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "px"
                    }
                }, {
                    "id": "a-11-n-6",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-back",
                            "selectorGuids": ["a3aadac6-0e8e-e733-1a1e-47f394a9b07d"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-11-n-7",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-back",
                            "selectorGuids": ["a3aadac6-0e8e-e733-1a1e-47f394a9b07d"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-11-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-back",
                            "selectorGuids": ["a3aadac6-0e8e-e733-1a1e-47f394a9b07d"]
                        },
                        "zValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "px"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708080925792
        },
        "a-12": {
            "id": "a-12",
            "title": "Team Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-overlay-one",
                            "selectorGuids": ["ecb2eb12-fc30-03be-30b5-35e0758696e7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-overlay-two",
                            "selectorGuids": ["c4f374a0-1d97-5bfd-cecd-135c51cc4d82"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-9",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-title",
                            "selectorGuids": ["7a5dc638-76a5-e8ac-bc99-aa23cdc4c04e"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-10",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-position",
                            "selectorGuids": ["e4d00336-2603-248e-76a5-8453f91b37db"]
                        },
                        "globalSwatchId": "",
                        "rValue": 174,
                        "bValue": 209,
                        "gValue": 221,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-11",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-ratings",
                            "selectorGuids": ["cef3d5aa-9132-7bad-ada7-bf39531f352f"]
                        },
                        "globalSwatchId": "",
                        "rValue": 174,
                        "bValue": 209,
                        "gValue": 221,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-15",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-image",
                            "selectorGuids": ["45529c44-b82b-2eef-eb2b-e965c35abcd2"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "4d3b",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-overlay-one",
                            "selectorGuids": ["ecb2eb12-fc30-03be-30b5-35e0758696e7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-overlay-two",
                            "selectorGuids": ["c4f374a0-1d97-5bfd-cecd-135c51cc4d82"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-title",
                            "selectorGuids": ["7a5dc638-76a5-e8ac-bc99-aa23cdc4c04e"]
                        },
                        "globalSwatchId": "",
                        "rValue": 9,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-14",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-ratings",
                            "selectorGuids": ["cef3d5aa-9132-7bad-ada7-bf39531f352f"]
                        },
                        "globalSwatchId": "",
                        "rValue": 9,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-13",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-position",
                            "selectorGuids": ["e4d00336-2603-248e-76a5-8453f91b37db"]
                        },
                        "globalSwatchId": "",
                        "rValue": 9,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }, {
                    "id": "a-12-n-16",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-image",
                            "selectorGuids": ["45529c44-b82b-2eef-eb2b-e965c35abcd2"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "64a0",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708084235009
        },
        "a-13": {
            "id": "a-13",
            "title": "Team Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-overlay-one",
                            "selectorGuids": ["ecb2eb12-fc30-03be-30b5-35e0758696e7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-overlay-two",
                            "selectorGuids": ["c4f374a0-1d97-5bfd-cecd-135c51cc4d82"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-title",
                            "selectorGuids": ["7a5dc638-76a5-e8ac-bc99-aa23cdc4c04e"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-13-n-13",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-ratings",
                            "selectorGuids": ["cef3d5aa-9132-7bad-ada7-bf39531f352f"]
                        },
                        "globalSwatchId": "",
                        "rValue": 174,
                        "bValue": 209,
                        "gValue": 221,
                        "aValue": 1
                    }
                }, {
                    "id": "a-13-n-14",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-position",
                            "selectorGuids": ["e4d00336-2603-248e-76a5-8453f91b37db"]
                        },
                        "globalSwatchId": "",
                        "rValue": 174,
                        "bValue": 209,
                        "gValue": 221,
                        "aValue": 1
                    }
                }, {
                    "id": "a-13-n-15",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-image",
                            "selectorGuids": ["45529c44-b82b-2eef-eb2b-e965c35abcd2"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "d6cf",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708084235009
        },
        "a-18": {
            "id": "a-18",
            "title": "Accordian Item Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordian-content",
                            "selectorGuids": ["8441286d-be2c-cd8d-12ae-112919eeaef2"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-18-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordian-content",
                            "selectorGuids": ["8441286d-be2c-cd8d-12ae-112919eeaef2"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-13",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordian-icon",
                            "selectorGuids": ["d67b10db-4375-fa31-cb46-2a3f5009cb83"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordian-content",
                            "selectorGuids": ["8441286d-be2c-cd8d-12ae-112919eeaef2"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordian-content",
                            "selectorGuids": ["8441286d-be2c-cd8d-12ae-112919eeaef2"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-18-n-14",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordian-icon",
                            "selectorGuids": ["d67b10db-4375-fa31-cb46-2a3f5009cb83"]
                        },
                        "zValue": 135,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708334440212
        },
        "a-19": {
            "id": "a-19",
            "title": "Accordian Item Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordian-content",
                            "selectorGuids": ["8441286d-be2c-cd8d-12ae-112919eeaef2"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-19-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordian-icon",
                            "selectorGuids": ["d67b10db-4375-fa31-cb46-2a3f5009cb83"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordian-content",
                            "selectorGuids": ["8441286d-be2c-cd8d-12ae-112919eeaef2"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708334440212
        },
        "a-20": {
            "id": "a-20",
            "title": "Client Item Move",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".client-item-box",
                            "selectorGuids": ["46b653c6-89e9-f1bc-b70d-e134c9c95831"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 20000,
                        "target": {
                            "selector": ".client-item-box",
                            "selectorGuids": ["46b653c6-89e9-f1bc-b70d-e134c9c95831"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".client-item-box",
                            "selectorGuids": ["46b653c6-89e9-f1bc-b70d-e134c9c95831"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708419032031
        },
        "a-23": {
            "id": "a-23",
            "title": "Service 2 Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".service-link-block",
                            "selectorGuids": ["19063b3e-7c6c-5f1e-7a48-40bb971b3f80"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".service-link-block",
                            "selectorGuids": ["19063b3e-7c6c-5f1e-7a48-40bb971b3f80"]
                        },
                        "yValue": -20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708595613304
        },
        "a-24": {
            "id": "a-24",
            "title": "Service 2 Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".service-link-block",
                            "selectorGuids": ["19063b3e-7c6c-5f1e-7a48-40bb971b3f80"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708595613304
        },
        "a-25": {
            "id": "a-25",
            "title": "Blog 2 Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-2-image.filter-image",
                            "selectorGuids": ["4236cc7a-2d2c-8d89-b065-0ce354116d20", "5e37788b-ea15-2eb0-aba6-56291f655579"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-2-image.filter-image",
                            "selectorGuids": ["4236cc7a-2d2c-8d89-b065-0ce354116d20", "5e37788b-ea15-2eb0-aba6-56291f655579"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "4370",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-25-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-2-content",
                            "selectorGuids": ["018d2a36-cf81-6021-c131-369d85a634dd"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-2-image.filter-image",
                            "selectorGuids": ["4236cc7a-2d2c-8d89-b065-0ce354116d20", "5e37788b-ea15-2eb0-aba6-56291f655579"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-2-content",
                            "selectorGuids": ["018d2a36-cf81-6021-c131-369d85a634dd"]
                        },
                        "yValue": -12,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-2-image.filter-image",
                            "selectorGuids": ["4236cc7a-2d2c-8d89-b065-0ce354116d20", "5e37788b-ea15-2eb0-aba6-56291f655579"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "4370",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708596677161
        },
        "a-26": {
            "id": "a-26",
            "title": "Blog 2 Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-2-image.filter-image",
                            "selectorGuids": ["4236cc7a-2d2c-8d89-b065-0ce354116d20", "5e37788b-ea15-2eb0-aba6-56291f655579"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-2-content",
                            "selectorGuids": ["018d2a36-cf81-6021-c131-369d85a634dd"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-2-image.filter-image",
                            "selectorGuids": ["4236cc7a-2d2c-8d89-b065-0ce354116d20", "5e37788b-ea15-2eb0-aba6-56291f655579"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "b520",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708596677161
        },
        "a-27": {
            "id": "a-27",
            "title": "Nav Submenu Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708605879538
        },
        "a-28": {
            "id": "a-28",
            "title": "Nav Submenu Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708605879538
        },
        "a-29": {
            "id": "a-29",
            "title": "Contact Social Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-social-link",
                            "selectorGuids": ["253b47d0-59b9-2eb4-f3ff-485e5aea2a8c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-social-link",
                            "selectorGuids": ["253b47d0-59b9-2eb4-f3ff-485e5aea2a8c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.15
                    }
                }, {
                    "id": "a-29-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-social-link",
                            "selectorGuids": ["253b47d0-59b9-2eb4-f3ff-485e5aea2a8c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-social-link",
                            "selectorGuids": ["253b47d0-59b9-2eb4-f3ff-485e5aea2a8c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-social-link",
                            "selectorGuids": ["253b47d0-59b9-2eb4-f3ff-485e5aea2a8c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-29-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-social-link",
                            "selectorGuids": ["253b47d0-59b9-2eb4-f3ff-485e5aea2a8c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 9,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708666691804
        },
        "a-30": {
            "id": "a-30",
            "title": "Contact Social Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-social-link",
                            "selectorGuids": ["253b47d0-59b9-2eb4-f3ff-485e5aea2a8c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-30-n-5",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-social-link",
                            "selectorGuids": ["253b47d0-59b9-2eb4-f3ff-485e5aea2a8c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.15
                    }
                }, {
                    "id": "a-30-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-social-link",
                            "selectorGuids": ["253b47d0-59b9-2eb4-f3ff-485e5aea2a8c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708666691804
        },
        "a-33": {
            "id": "a-33",
            "title": "Header Button Move",
            "continuousParameterGroups": [{
                "id": "a-33-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-33-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                            },
                            "xValue": -20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-33-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                            },
                            "xValue": 20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-33-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-33-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                            },
                            "yValue": -20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-33-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                            },
                            "yValue": 20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1708691111731
        },
        "a-31": {
            "id": "a-31",
            "title": "Header Button Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-dot",
                            "selectorGuids": ["4b3ccb3e-1233-46c6-3bad-f840a2105392"]
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["3fafa590-587f-fec4-0f85-4274be4a0f13"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-31-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-31-n-7",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-dot",
                            "selectorGuids": ["4b3ccb3e-1233-46c6-3bad-f840a2105392"]
                        },
                        "globalSwatchId": "",
                        "rValue": 9,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }, {
                    "id": "a-31-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["3fafa590-587f-fec4-0f85-4274be4a0f13"]
                        },
                        "globalSwatchId": "",
                        "rValue": 9,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }, {
                    "id": "a-31-n-8",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-31-n-9",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708690261843
        },
        "a-32": {
            "id": "a-32",
            "title": "Header Button Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n-5",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-dot",
                            "selectorGuids": ["4b3ccb3e-1233-46c6-3bad-f840a2105392"]
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-32-n-7",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["3fafa590-587f-fec4-0f85-4274be4a0f13"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-32-n-8",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-32-n-6",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "7f52a564-57c5-d0d7-fe35-c12e2b72d1fc"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708690261843
        },
        "a-34": {
            "id": "a-34",
            "title": "Story Image Scroll",
            "continuousParameterGroups": [{
                "id": "a-34-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 24,
                    "actionItems": [{
                        "id": "a-34-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-shape-image",
                                "selectorGuids": ["8140cc12-5c0f-3aee-8262-b8ed2d333b42"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 72,
                    "actionItems": [{
                        "id": "a-34-n-10",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-shape-image",
                                "selectorGuids": ["8140cc12-5c0f-3aee-8262-b8ed2d333b42"]
                            },
                            "zValue": 360,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }],
            "createdOn": 1707981777614
        },
        "a-14": {
            "id": "a-14",
            "title": "Story Item Scroll",
            "continuousParameterGroups": [{
                "id": "a-14-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-14-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-item.item-1",
                                "selectorGuids": ["231aa67c-efec-f8f0-c27a-bef0bfe90472", "e51ca1ad-1f82-202f-8b22-36e4d1b7ee5c"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 24,
                    "actionItems": [{
                        "id": "a-14-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-bar-thumb",
                                "selectorGuids": ["c1e4e14f-80e1-4884-0c35-2c2965586cac"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 48,
                    "actionItems": [{
                        "id": "a-14-n-12",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-item.item-2",
                                "selectorGuids": ["231aa67c-efec-f8f0-c27a-bef0bfe90472", "71438893-99c8-450a-1f56-9fb5f4e6d9e6"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }, {
                        "id": "a-14-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-item.item-1",
                                "selectorGuids": ["231aa67c-efec-f8f0-c27a-bef0bfe90472", "e51ca1ad-1f82-202f-8b22-36e4d1b7ee5c"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 49,
                    "actionItems": [{
                        "id": "a-14-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-bar-thumb",
                                "selectorGuids": ["c1e4e14f-80e1-4884-0c35-2c2965586cac"]
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-14-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-item.item-2",
                                "selectorGuids": ["231aa67c-efec-f8f0-c27a-bef0bfe90472", "71438893-99c8-450a-1f56-9fb5f4e6d9e6"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-14-n-17",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-item.item-1",
                                "selectorGuids": ["231aa67c-efec-f8f0-c27a-bef0bfe90472", "e51ca1ad-1f82-202f-8b22-36e4d1b7ee5c"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 71,
                    "actionItems": [{
                        "id": "a-14-n-16",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-item.item-3",
                                "selectorGuids": ["231aa67c-efec-f8f0-c27a-bef0bfe90472", "c11ed46b-3f14-442f-6b10-4c15bc79dd07"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 72,
                    "actionItems": [{
                        "id": "a-14-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-bar-thumb",
                                "selectorGuids": ["c1e4e14f-80e1-4884-0c35-2c2965586cac"]
                            },
                            "yValue": 200,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-14-n-15",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-item.item-3",
                                "selectorGuids": ["231aa67c-efec-f8f0-c27a-bef0bfe90472", "c11ed46b-3f14-442f-6b10-4c15bc79dd07"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-14-n-18",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-item.item-2",
                                "selectorGuids": ["231aa67c-efec-f8f0-c27a-bef0bfe90472", "71438893-99c8-450a-1f56-9fb5f4e6d9e6"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-14-n-14",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".story-item.item-3",
                                "selectorGuids": ["231aa67c-efec-f8f0-c27a-bef0bfe90472", "c11ed46b-3f14-442f-6b10-4c15bc79dd07"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1707981777614
        },
        "a-4": {
            "id": "a-4",
            "title": "Process Item Scroll",
            "continuousParameterGroups": [{
                "id": "a-4-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-4-n-17",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-1",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "6e0f8ef3-b248-bd4a-8f52-bf0b270dbd80"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 12,
                    "actionItems": [{
                        "id": "a-4-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-bar-thumb",
                                "selectorGuids": ["5f46beb8-c0c8-f735-8231-9450bfacfdd8"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-4-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-1",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "6e0f8ef3-b248-bd4a-8f52-bf0b270dbd80"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 24,
                    "actionItems": [{
                        "id": "a-4-n-18",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-2",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "364edd7e-d00c-1534-04e6-0b94f7e21f8f"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }, {
                        "id": "a-4-n-22",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-1",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "6e0f8ef3-b248-bd4a-8f52-bf0b270dbd80"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-4-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-bar-thumb",
                                "selectorGuids": ["5f46beb8-c0c8-f735-8231-9450bfacfdd8"]
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-4-n-10",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-1",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "6e0f8ef3-b248-bd4a-8f52-bf0b270dbd80"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }, {
                        "id": "a-4-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-2",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "364edd7e-d00c-1534-04e6-0b94f7e21f8f"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 49,
                    "actionItems": [{
                        "id": "a-4-n-19",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-3",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "c6a2249c-8524-2135-e785-9b7a8dcb2b88"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }, {
                        "id": "a-4-n-23",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-2",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "364edd7e-d00c-1534-04e6-0b94f7e21f8f"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-4-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-bar-thumb",
                                "selectorGuids": ["5f46beb8-c0c8-f735-8231-9450bfacfdd8"]
                            },
                            "yValue": 200,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-4-n-12",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-2",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "364edd7e-d00c-1534-04e6-0b94f7e21f8f"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }, {
                        "id": "a-4-n-13",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-3",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "c6a2249c-8524-2135-e785-9b7a8dcb2b88"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 74,
                    "actionItems": [{
                        "id": "a-4-n-20",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-4",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "8767ac5d-66e3-b6bd-5d96-d63f96a89071"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }, {
                        "id": "a-4-n-24",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-3",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "c6a2249c-8524-2135-e785-9b7a8dcb2b88"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-4-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-bar-thumb",
                                "selectorGuids": ["5f46beb8-c0c8-f735-8231-9450bfacfdd8"]
                            },
                            "yValue": 300,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-4-n-14",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-3",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "c6a2249c-8524-2135-e785-9b7a8dcb2b88"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }, {
                        "id": "a-4-n-15",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-4",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "8767ac5d-66e3-b6bd-5d96-d63f96a89071"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-4-n-21",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".process-item.item-4",
                                "selectorGuids": ["07c909ac-350c-ef77-a4bc-ca58c95e0d5c", "8767ac5d-66e3-b6bd-5d96-d63f96a89071"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1707981777614
        },
        "a-35": {
            "id": "a-35",
            "title": "Process Image Scroll",
            "continuousParameterGroups": [{
                "id": "a-35-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 12,
                    "actionItems": [{
                        "id": "a-35-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-shape-image",
                                "selectorGuids": ["e9aa7b7c-96b9-26e4-c491-fce8ee0e7b78"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 84,
                    "actionItems": [{
                        "id": "a-35-n-20",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-shape-image",
                                "selectorGuids": ["e9aa7b7c-96b9-26e4-c491-fce8ee0e7b78"]
                            },
                            "zValue": 360,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }],
            "createdOn": 1707981777614
        },
        "a-36": {
            "id": "a-36",
            "title": "Text Colors",
            "continuousParameterGroups": [{
                "id": "a-36-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 16,
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "65c9db2ebeedf24f0e4dec15|3a811a61-ca5e-1a36-f7ec-bf2e5fbcb310"
                            },
                            "widthValue": 100,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-36-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "65c9db2ebeedf24f0e4dec15|3a811a61-ca5e-1a36-f7ec-bf2e5fbcb310"
                            },
                            "widthValue": 0,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1708949471239
        },
        "a-37": {
            "id": "a-37",
            "title": "Button Move",
            "continuousParameterGroups": [{
                "id": "a-37-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-37-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb"
                            },
                            "xValue": -20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-37-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb"
                            },
                            "xValue": 20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-37-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-37-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb"
                            },
                            "yValue": -20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-37-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "65c9db2ebeedf24f0e4dec15|a78f8350-024f-6d34-a1eb-2b4efcc535fb"
                            },
                            "yValue": 20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1709015087783
        },
        "a-38": {
            "id": "a-38",
            "title": "Submenu Link Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".submenu-link-line",
                            "selectorGuids": ["c2ba631a-5e1c-59f7-ea67-34cae7690cd0"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".submenu-link-line",
                            "selectorGuids": ["c2ba631a-5e1c-59f7-ea67-34cae7690cd0"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709026746507
        },
        "a-39": {
            "id": "a-39",
            "title": "Submenu Link Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".submenu-link-line",
                            "selectorGuids": ["c2ba631a-5e1c-59f7-ea67-34cae7690cd0"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709026746507
        },
        "a-22": {
            "id": "a-22",
            "title": "Blog Item",
            "continuousParameterGroups": [{
                "id": "a-22-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-22-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-thumbnail.filter-image-box",
                                "selectorGuids": ["6d8b16cd-d30f-19a5-14eb-b04599b2127d", "231a99d6-af30-570e-181a-76c55720de59"]
                            },
                            "xValue": 0,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-author-box",
                                "selectorGuids": ["6513de16-ba6e-29a1-2b8f-64199be6b08d"]
                            },
                            "xValue": -30,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-content",
                                "selectorGuids": ["4b10c70d-45ff-05ec-803e-47344ccbe81d"]
                            },
                            "xValue": -50,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-22-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-thumbnail.filter-image-box",
                                "selectorGuids": ["6d8b16cd-d30f-19a5-14eb-b04599b2127d", "231a99d6-af30-570e-181a-76c55720de59"]
                            },
                            "xValue": 50,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-author-box",
                                "selectorGuids": ["6513de16-ba6e-29a1-2b8f-64199be6b08d"]
                            },
                            "xValue": 30,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-content",
                                "selectorGuids": ["4b10c70d-45ff-05ec-803e-47344ccbe81d"]
                            },
                            "xValue": 0,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-22-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": []
            }],
            "createdOn": 1708593412335
        },
        "a-40": {
            "id": "a-40",
            "title": "Blog Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image.filter-image",
                            "selectorGuids": ["b244fdea-f51d-ecef-7032-cd466f4b6004", "02b0c8ee-7b80-609e-98da-4bce4af3bcb5"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "6456",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image.filter-image",
                            "selectorGuids": ["b244fdea-f51d-ecef-7032-cd466f4b6004", "02b0c8ee-7b80-609e-98da-4bce4af3bcb5"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "6456",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1710766151019
        },
        "a-41": {
            "id": "a-41",
            "title": "Blog Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image.filter-image",
                            "selectorGuids": ["b244fdea-f51d-ecef-7032-cd466f4b6004", "02b0c8ee-7b80-609e-98da-4bce4af3bcb5"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "6456",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710766151019
        },
        "a-17": {
            "id": "a-17",
            "title": "Team 2 Item",
            "continuousParameterGroups": [{
                "id": "a-17-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-2-thumbnail",
                                "selectorGuids": ["b5939dc0-a7b6-49b3-8e44-785eb3af7307"]
                            },
                            "xValue": -3,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-2-thumbnail",
                                "selectorGuids": ["b5939dc0-a7b6-49b3-8e44-785eb3af7307"]
                            },
                            "xValue": 3,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-17-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-2-thumbnail",
                                "selectorGuids": ["b5939dc0-a7b6-49b3-8e44-785eb3af7307"]
                            },
                            "yValue": -3,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-2-thumbnail",
                                "selectorGuids": ["b5939dc0-a7b6-49b3-8e44-785eb3af7307"]
                            },
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1708321655203
        },
        "a-15": {
            "id": "a-15",
            "title": "Team 2 Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n-14",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-2-image.filter-image",
                            "selectorGuids": ["ada201c6-61d4-001b-91dc-7cf73f245349", "4be65c48-cb6f-ab75-b971-9c6cb1af6d7a"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "dfea",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-2-title",
                            "selectorGuids": ["9e0eadd8-5279-6c21-b6f8-81d0c4d92e13"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-2-title",
                            "selectorGuids": ["9e0eadd8-5279-6c21-b6f8-81d0c4d92e13"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-2-title",
                            "selectorGuids": ["9e0eadd8-5279-6c21-b6f8-81d0c4d92e13"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-13",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-2-title",
                            "selectorGuids": ["9e0eadd8-5279-6c21-b6f8-81d0c4d92e13"]
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-15-n-15",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-2-image.filter-image",
                            "selectorGuids": ["ada201c6-61d4-001b-91dc-7cf73f245349", "4be65c48-cb6f-ab75-b971-9c6cb1af6d7a"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "dfea",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708319928690
        },
        "a-16": {
            "id": "a-16",
            "title": "Team 2 Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-2-title",
                            "selectorGuids": ["9e0eadd8-5279-6c21-b6f8-81d0c4d92e13"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-9",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-2-title",
                            "selectorGuids": ["9e0eadd8-5279-6c21-b6f8-81d0c4d92e13"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-16-n-10",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-2-image.filter-image",
                            "selectorGuids": ["ada201c6-61d4-001b-91dc-7cf73f245349", "4be65c48-cb6f-ab75-b971-9c6cb1af6d7a"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "d52c",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708319928690
        },
        "a-43": {
            "id": "a-43",
            "title": "Nav Submenu Open 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-43-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708605879538
        },
        "a-44": {
            "id": "a-44",
            "title": "Nav Submenu Close 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-44-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-submenu",
                            "selectorGuids": ["6164e924-40d3-c72d-a046-5625893f1813"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708605879538
        },
        "a-45": {
            "id": "a-45",
            "title": "Header Button Move 2",
            "continuousParameterGroups": [{
                "id": "a-45-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-45-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                            },
                            "xValue": -20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-45-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                            },
                            "xValue": 20,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-45-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-45-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                            },
                            "yValue": -20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-45-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                            },
                            "yValue": 20,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1708691111731
        },
        "a-46": {
            "id": "a-46",
            "title": "Header Button Hover In 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-dot",
                            "selectorGuids": ["4b3ccb3e-1233-46c6-3bad-f840a2105392"]
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-46-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["3fafa590-587f-fec4-0f85-4274be4a0f13"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-46-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-46-n-4",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-46-n-5",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-dot",
                            "selectorGuids": ["4b3ccb3e-1233-46c6-3bad-f840a2105392"]
                        },
                        "globalSwatchId": "",
                        "rValue": 9,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }, {
                    "id": "a-46-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["3fafa590-587f-fec4-0f85-4274be4a0f13"]
                        },
                        "globalSwatchId": "",
                        "rValue": 9,
                        "bValue": 38,
                        "gValue": 47,
                        "aValue": 1
                    }
                }, {
                    "id": "a-46-n-7",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-46-n-8",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1708690261843
        },
        "a-47": {
            "id": "a-47",
            "title": "Header Button Hover Out 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-dot",
                            "selectorGuids": ["4b3ccb3e-1233-46c6-3bad-f840a2105392"]
                        },
                        "globalSwatchId": "",
                        "rValue": 217,
                        "bValue": 84,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-47-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["3fafa590-587f-fec4-0f85-4274be4a0f13"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-47-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-47-n-4",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6604ed1fc246f4f1537d4327|400c7067-f6a5-8d9e-40d4-b36d17545180"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1708690261843
        },
        "a-48": {
            "id": "a-48",
            "title": "Submenu Link Hover 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".submenu-link-line",
                            "selectorGuids": ["c2ba631a-5e1c-59f7-ea67-34cae7690cd0"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".submenu-link-line",
                            "selectorGuids": ["c2ba631a-5e1c-59f7-ea67-34cae7690cd0"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709026746507
        },
        "a-49": {
            "id": "a-49",
            "title": "Submenu Link Hover Out 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".submenu-link-line",
                            "selectorGuids": ["c2ba631a-5e1c-59f7-ea67-34cae7690cd0"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709026746507
        },
        "a-51": {
            "id": "a-51",
            "title": "Gallery Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".gallery-image.filter-image",
                            "selectorGuids": ["d9fb0698-cb17-b488-a932-f110ab75df95", "6ece66b7-6a83-9114-a413-c91d16f45d37"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-51-n-3",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".gallery-image.filter-image",
                            "selectorGuids": ["d9fb0698-cb17-b488-a932-f110ab75df95", "6ece66b7-6a83-9114-a413-c91d16f45d37"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "ae7f",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".gallery-image.filter-image",
                            "selectorGuids": ["d9fb0698-cb17-b488-a932-f110ab75df95", "6ece66b7-6a83-9114-a413-c91d16f45d37"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-51-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".gallery-image.filter-image",
                            "selectorGuids": ["d9fb0698-cb17-b488-a932-f110ab75df95", "6ece66b7-6a83-9114-a413-c91d16f45d37"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "ae7f",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1711691557905
        },
        "a-52": {
            "id": "a-52",
            "title": "Gallery Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".gallery-image.filter-image",
                            "selectorGuids": ["d9fb0698-cb17-b488-a932-f110ab75df95", "6ece66b7-6a83-9114-a413-c91d16f45d37"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-52-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".gallery-image.filter-image",
                            "selectorGuids": ["d9fb0698-cb17-b488-a932-f110ab75df95", "6ece66b7-6a83-9114-a413-c91d16f45d37"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "ae7f",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1711691557905
        },
        "a-54": {
            "id": "a-54",
            "title": "About 3 Animation",
            "continuousParameterGroups": [{
                "id": "a-54-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 12,
                    "actionItems": [{
                        "id": "a-54-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".about-3-icon-image",
                                "selectorGuids": ["c92dbfb9-cab4-5563-abbd-78e68fe64887"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 84,
                    "actionItems": [{
                        "id": "a-54-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".about-3-icon-image",
                                "selectorGuids": ["c92dbfb9-cab4-5563-abbd-78e68fe64887"]
                            },
                            "zValue": 360,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }],
            "createdOn": 1711796646691
        },
        "a-56": {
            "id": "a-56",
            "title": "Hero Circle Move",
            "continuousParameterGroups": [{
                "id": "a-56-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-56-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-2-circle",
                                "selectorGuids": ["ed2e76c8-9802-0a47-6cc9-85a3aaaf9ec8"]
                            },
                            "xValue": -120,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-56-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-2-circle",
                                "selectorGuids": ["ed2e76c8-9802-0a47-6cc9-85a3aaaf9ec8"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-56-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-56-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-2-circle",
                                "selectorGuids": ["ed2e76c8-9802-0a47-6cc9-85a3aaaf9ec8"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-56-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-2-circle",
                                "selectorGuids": ["ed2e76c8-9802-0a47-6cc9-85a3aaaf9ec8"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1712660768251
        },
        "a-53": {
            "id": "a-53",
            "title": "Service 3 Item",
            "continuousParameterGroups": [{
                "id": "a-53-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 5,
                    "actionItems": [{
                        "id": "a-53-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-section-title",
                                "selectorGuids": ["a779b3ad-282f-7adc-1ef2-f9320949bcac"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 12,
                    "actionItems": [{
                        "id": "a-53-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-section-title",
                                "selectorGuids": ["a779b3ad-282f-7adc-1ef2-f9320949bcac"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-53-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-section-list",
                                "selectorGuids": ["09e13fbc-6536-0d51-a78a-b5020673321d"]
                            },
                            "xValue": 0,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-53-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-thumbnail._1",
                                "selectorGuids": ["0ecad851-8e06-cf6f-743c-7051f8e8bc23", "269e9efa-1b34-1d4f-590f-b2a324d57f42"]
                            },
                            "xValue": 0,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 39,
                    "actionItems": [{
                        "id": "a-53-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-thumbnail._1",
                                "selectorGuids": ["0ecad851-8e06-cf6f-743c-7051f8e8bc23", "269e9efa-1b34-1d4f-590f-b2a324d57f42"]
                            },
                            "xValue": 365,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-53-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-thumbnail._2",
                                "selectorGuids": ["0ecad851-8e06-cf6f-743c-7051f8e8bc23", "1c55e48d-60e4-7fb8-66d2-f29b1599661b"]
                            },
                            "xValue": 0,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 59,
                    "actionItems": [{
                        "id": "a-53-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-thumbnail._2",
                                "selectorGuids": ["0ecad851-8e06-cf6f-743c-7051f8e8bc23", "1c55e48d-60e4-7fb8-66d2-f29b1599661b"]
                            },
                            "xValue": 365,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-53-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-thumbnail._3",
                                "selectorGuids": ["0ecad851-8e06-cf6f-743c-7051f8e8bc23", "e690c1a2-e1f4-cb08-c150-d1eb77a3891f"]
                            },
                            "xValue": 0,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 79,
                    "actionItems": [{
                        "id": "a-53-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-section-list",
                                "selectorGuids": ["09e13fbc-6536-0d51-a78a-b5020673321d"]
                            },
                            "xValue": -3000,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-53-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".service-3-thumbnail._3",
                                "selectorGuids": ["0ecad851-8e06-cf6f-743c-7051f8e8bc23", "e690c1a2-e1f4-cb08-c150-d1eb77a3891f"]
                            },
                            "xValue": 365,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1711792397298
        },
        "a-55": {
            "id": "a-55",
            "title": "Gallery Items",
            "continuousParameterGroups": [{
                "id": "a-55-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-55-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-1",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "631e045a-7dd6-29ff-b453-b545fcb2b491"]
                            },
                            "yValue": -30,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-55-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-2",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "eee1f27a-faf1-09f7-9a03-460b9f5bc899"]
                            },
                            "yValue": -120,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-55-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-3",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "9ea47868-664a-f0d1-d0ba-3470e0193210"]
                            },
                            "yValue": -70,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-55-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-4",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "c147c9a2-6962-202c-dfd8-7749a4717790"]
                            },
                            "yValue": -30,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-55-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-5",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "ece06c93-4819-f173-5c49-0f7b28978e34"]
                            },
                            "yValue": -120,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-55-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-1",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "631e045a-7dd6-29ff-b453-b545fcb2b491"]
                            },
                            "yValue": 30,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-55-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-2",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "eee1f27a-faf1-09f7-9a03-460b9f5bc899"]
                            },
                            "yValue": 30,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-55-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-3",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "9ea47868-664a-f0d1-d0ba-3470e0193210"]
                            },
                            "yValue": 30,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-55-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-4",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "c147c9a2-6962-202c-dfd8-7749a4717790"]
                            },
                            "yValue": 30,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-55-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".gallery-item.item-5",
                                "selectorGuids": ["87430aaf-6547-9e9d-500d-605dcfe139c5", "ece06c93-4819-f173-5c49-0f7b28978e34"]
                            },
                            "yValue": 30,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1711797553917
        },
        "a-59": {
            "id": "a-59",
            "title": "Inline Button Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".inline-button-underline",
                            "selectorGuids": ["77081ccf-c4ae-8c68-da15-7c0f357a46d4"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".inline-button-underline",
                            "selectorGuids": ["77081ccf-c4ae-8c68-da15-7c0f357a46d4"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1712911572855,
            "useFirstGroupAsInitialState": false
        },
        "a-60": {
            "id": "a-60",
            "title": "Inline Button Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".inline-button-underline",
                            "selectorGuids": ["77081ccf-c4ae-8c68-da15-7c0f357a46d4"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1712911572855,
            "useFirstGroupAsInitialState": false
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "growIn": {
            "id": "growIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});