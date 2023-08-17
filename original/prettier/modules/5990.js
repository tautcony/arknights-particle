var e;
if ("undefined" != typeof window) {
  e = function () {
    return function (t) {
      var e = {};
      function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        t[r].call(i.exports, i, i.exports, n);
        i.l = !0;
        return i.exports;
      }
      n.m = t;
      n.c = e;
      n.d = function (t, e, r) {
        if (n.o(t, e)) {
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
          });
        }
      };
      n.r = function (t) {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) {
          Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      };
      n.t = function (t, e) {
        if (1 & e) {
          t = n(t);
        }
        if (8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        n.r(r);
        Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        });
        if (2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
          return t[e];
        }.bind(null, i));
        return r;
      };
      n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        n.d(e, "a", e);
        return e;
      };
      n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
      n.p = "/dist/";
      return n(n.s = "./src/hls.ts");
    }({
      "./node_modules/eventemitter3/index.js": function (t, e, n) {
        "use strict";

        var r = Object.prototype.hasOwnProperty;
        var i = "~";
        function a() {}
        function o(t, e, n) {
          this.fn = t;
          this.context = e;
          this.once = n || !1;
        }
        function s(t, e, n, r, a) {
          if ("function" != typeof n) throw new TypeError("The listener must be a function");
          var s = new o(n, r || t, a);
          var l = i ? i + e : e;
          if (t._events[l]) {
            if (t._events[l].fn) {
              t._events[l] = [t._events[l], s];
            } else {
              t._events[l].push(s);
            }
          } else {
            t._events[l] = s;
            t._eventsCount++;
          }
          return t;
        }
        function l(t, e) {
          if (0 == --t._eventsCount) {
            t._events = new a();
          } else {
            delete t._events[e];
          }
        }
        function u() {
          this._events = new a();
          this._eventsCount = 0;
        }
        if (Object.create) {
          a.prototype = Object.create(null);
          if (new a().__proto__) {
            i = !1;
          }
        }
        u.prototype.eventNames = function () {
          var t;
          var e;
          var n = [];
          if (0 === this._eventsCount) return n;
          for (e in t = this._events) if (r.call(t, e)) {
            n.push(i ? e.slice(1) : e);
          }
          return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
        };
        u.prototype.listeners = function (t) {
          var e = i ? i + t : t;
          var n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (r = 0, a = n.length, o = new Array(a), void 0; r < a; r++) {
            var r;
            var a;
            var o;
            o[r] = n[r].fn;
          }
          return o;
        };
        u.prototype.listenerCount = function (t) {
          var e = i ? i + t : t;
          var n = this._events[e];
          return n ? n.fn ? 1 : n.length : 0;
        };
        u.prototype.emit = function (t, e, n, r, a, o) {
          var s = i ? i + t : t;
          if (!this._events[s]) return !1;
          var l;
          var u;
          var c = this._events[s];
          var h = arguments.length;
          if (c.fn) {
            switch (c.once && this.removeListener(t, c.fn, void 0, !0), h) {
              case 1:
                c.fn.call(c.context);
                return !0;
              case 2:
                c.fn.call(c.context, e);
                return !0;
              case 3:
                c.fn.call(c.context, e, n);
                return !0;
              case 4:
                c.fn.call(c.context, e, n, r);
                return !0;
              case 5:
                c.fn.call(c.context, e, n, r, a);
                return !0;
              case 6:
                c.fn.call(c.context, e, n, r, a, o);
                return !0;
            }
            for (u = 1, l = new Array(h - 1); u < h; u++) l[u - 1] = arguments[u];
            c.fn.apply(c.context, l);
          } else {
            var d;
            var f = c.length;
            for (u = 0; u < f; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), h) {
              case 1:
                c[u].fn.call(c[u].context);
                break;
              case 2:
                c[u].fn.call(c[u].context, e);
                break;
              case 3:
                c[u].fn.call(c[u].context, e, n);
                break;
              case 4:
                c[u].fn.call(c[u].context, e, n, r);
                break;
              default:
                if (!l) for (d = 1, l = new Array(h - 1); d < h; d++) l[d - 1] = arguments[d];
                c[u].fn.apply(c[u].context, l);
            }
          }
          return !0;
        };
        u.prototype.on = function (t, e, n) {
          return s(this, t, e, n, !1);
        };
        u.prototype.once = function (t, e, n) {
          return s(this, t, e, n, !0);
        };
        u.prototype.removeListener = function (t, e, n, r) {
          var a = i ? i + t : t;
          if (!this._events[a]) return this;
          if (!e) {
            l(this, a);
            return this;
          }
          var o = this._events[a];
          if (o.fn) {
            if (o.fn !== e || r && !o.once || n && o.context !== n) {
              l(this, a);
            }
          } else {
            for (s = 0, u = [], c = o.length, void 0; s < c; s++) {
              var s;
              var u;
              var c;
              if (o[s].fn !== e || r && !o[s].once || n && o[s].context !== n) {
                u.push(o[s]);
              }
            }
            if (u.length) {
              this._events[a] = 1 === u.length ? u[0] : u;
            } else {
              l(this, a);
            }
          }
          return this;
        };
        u.prototype.removeAllListeners = function (t) {
          var e;
          if (t) {
            e = i ? i + t : t;
            if (this._events[e]) {
              l(this, e);
            }
          } else {
            this._events = new a();
            this._eventsCount = 0;
          }
          return this;
        };
        u.prototype.off = u.prototype.removeListener;
        u.prototype.addListener = u.prototype.on;
        u.prefixed = i;
        u.EventEmitter = u;
        t.exports = u;
      },
      "./node_modules/url-toolkit/src/url-toolkit.js": function (t, e, n) {
        var r;
        var i;
        var a;
        var o;
        var s;
        r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/;
        i = /^([^\/?#]*)(.*)$/;
        a = /(?:\/|^)\.(?=\/)/g;
        o = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g;
        s = {
          buildAbsoluteURL: function (t, e, n) {
            n = n || {};
            t = t.trim();
            if (!(e = e.trim())) {
              if (!n.alwaysNormalize) return t;
              var r = s.parseURL(t);
              if (!r) throw new Error("Error trying to parse base URL.");
              return r.path = s.normalizePath(r.path), s.buildURLFromParts(r);
            }
            var a = s.parseURL(e);
            if (!a) throw new Error("Error trying to parse relative URL.");
            if (a.scheme) return n.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) : e;
            var o = s.parseURL(t);
            if (!o) throw new Error("Error trying to parse base URL.");
            if (!o.netLoc && o.path && "/" !== o.path[0]) {
              var l = i.exec(o.path);
              o.netLoc = l[1];
              o.path = l[2];
            }
            if (o.netLoc && !o.path) {
              o.path = "/";
            }
            var u = {
              scheme: o.scheme,
              netLoc: a.netLoc,
              path: null,
              params: a.params,
              query: a.query,
              fragment: a.fragment
            };
            if (!a.netLoc && (u.netLoc = o.netLoc, "/" !== a.path[0])) if (a.path) {
              var c = o.path;
              var h = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
              u.path = s.normalizePath(h);
            } else {
              u.path = o.path;
              if (a.params) {
                u.params = o.params;
                if (a.query) {
                  u.query = o.query;
                }
              }
            }
            if (null === u.path) {
              u.path = n.alwaysNormalize ? s.normalizePath(a.path) : a.path;
            }
            return s.buildURLFromParts(u);
          },
          parseURL: function (t) {
            var e = r.exec(t);
            return e ? {
              scheme: e[1] || "",
              netLoc: e[2] || "",
              path: e[3] || "",
              params: e[4] || "",
              query: e[5] || "",
              fragment: e[6] || ""
            } : null;
          },
          normalizePath: function (t) {
            for (t = t.split("").reverse().join("").replace(a, ""); t.length !== (t = t.replace(o, "")).length;);
            return t.split("").reverse().join("");
          },
          buildURLFromParts: function (t) {
            return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment;
          }
        };
        t.exports = s;
      },
      "./node_modules/webworkify-webpack/index.js": function (t, e, n) {
        function r(t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
              i: r,
              l: !1,
              exports: {}
            };
            t[r].call(i.exports, i, i.exports, n);
            i.l = !0;
            return i.exports;
          }
          n.m = t;
          n.c = e;
          n.i = function (t) {
            return t;
          };
          n.d = function (t, e, r) {
            if (n.o(t, e)) {
              Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: r
              });
            }
          };
          n.r = function (t) {
            Object.defineProperty(t, "__esModule", {
              value: !0
            });
          };
          n.n = function (t) {
            var e = t && t.__esModule ? function () {
              return t.default;
            } : function () {
              return t;
            };
            n.d(e, "a", e);
            return e;
          };
          n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          };
          n.p = "/";
          n.oe = function (t) {
            throw console.error(t), t;
          };
          var r = n(n.s = ENTRY_MODULE);
          return r.default || r;
        }
        var i = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";
        function a(t) {
          return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        function o(t, e, r) {
          var o = {};
          o[r] = [];
          var s = e.toString();
          var l = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
          if (!l) return o;
          for (c = l[1], h = new RegExp("(\\\\n|\\W)" + a(c) + i, "g"), void 0; u = h.exec(s);) {
            var u;
            var c;
            var h;
            if ("dll-reference" !== u[3]) {
              o[r].push(u[3]);
            }
          }
          for (h = new RegExp("\\(" + a(c) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)' + i, "g"); u = h.exec(s);) {
            if (t[u[2]]) {
              o[r].push(u[1]);
              t[u[2]] = n(u[1]).m;
            }
            o[u[2]] = o[u[2]] || [];
            o[u[2]].push(u[4]);
          }
          for (f = Object.keys(o), p = 0, void 0; p < f.length; p++) {
            var d;
            var f;
            var p;
            for (var m = 0; m < o[f[p]].length; m++) {
              d = o[f[p]][m];
              if (isNaN(1 * d)) {
                o[f[p]][m] = 1 * o[f[p]][m];
              }
            }
          }
          return o;
        }
        function s(t) {
          return Object.keys(t).reduce(function (e, n) {
            return e || t[n].length > 0;
          }, !1);
        }
        t.exports = function (t, e) {
          e = e || {};
          var i = {
            main: n.m
          };
          var a = e.all ? {
            main: Object.keys(i.main)
          } : function (t, e) {
            for (n = {
              main: [e]
            }, r = {
              main: []
            }, i = {
              main: {}
            }, void 0; s(n);) {
              var n;
              var r;
              var i;
              for (a = Object.keys(n), l = 0, void 0; l < a.length; l++) {
                var a;
                var l;
                var u = a[l];
                var c = n[u].pop();
                i[u] = i[u] || {};
                if (!i[u][c] && t[u][c]) {
                  i[u][c] = !0, r[u] = r[u] || [], r[u].push(c);
                  for (var h = o(t, t[u][c], u), d = Object.keys(h), f = 0; f < d.length; f++) n[d[f]] = n[d[f]] || [], n[d[f]] = n[d[f]].concat(h[d[f]]);
                }
              }
            }
            return r;
          }(i, t);
          var l = "";
          Object.keys(a).filter(function (t) {
            return "main" !== t;
          }).forEach(function (t) {
            for (var e = 0; a[t][e];) e++;
            a[t].push(e);
            i[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })";
            l = l + "var " + t + " = (" + r.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + a[t].map(function (e) {
              return JSON.stringify(e) + ": " + i[t][e].toString();
            }).join(",") + "});\n";
          });
          l = l + "new ((" + r.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a.main.map(function (t) {
            return JSON.stringify(t) + ": " + i.main[t].toString();
          }).join(",") + "}))(self);";
          var u = new window.Blob([l], {
            type: "text/javascript"
          });
          if (e.bare) return u;
          var c = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u);
          var h = new window.Worker(c);
          h.objectURL = c;
          return h;
        };
      },
      "./src/demux/demuxer-inline.js": function (t, e, n) {
        "use strict";

        n.r(e);
        var r = n("./src/events.js");
        var i = n("./src/errors.ts");
        var a = function () {
          function t(t, e) {
            this.subtle = t;
            this.aesIV = e;
          }
          t.prototype.decrypt = function (t, e) {
            return this.subtle.decrypt({
              name: "AES-CBC",
              iv: this.aesIV
            }, e, t);
          };
          return t;
        }();
        var o = function () {
          function t(t, e) {
            this.subtle = t;
            this.key = e;
          }
          t.prototype.expandKey = function () {
            return this.subtle.importKey("raw", this.key, {
              name: "AES-CBC"
            }, !1, ["encrypt", "decrypt"]);
          };
          return t;
        }();
        var s = function () {
          function t() {
            this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
            this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
            this.sBox = new Uint32Array(256);
            this.invSBox = new Uint32Array(256);
            this.key = new Uint32Array(0);
            this.initTable();
          }
          var e = t.prototype;
          e.uint8ArrayToUint32Array_ = function (t) {
            for (e = new DataView(t), n = new Uint32Array(4), r = 0, void 0; r < 4; r++) {
              var e;
              var n;
              var r;
              n[r] = e.getUint32(4 * r);
            }
            return n;
          };
          e.initTable = function () {
            var t = this.sBox;
            var e = this.invSBox;
            var n = this.subMix;
            var r = n[0];
            var i = n[1];
            var a = n[2];
            var o = n[3];
            var s = this.invSubMix;
            var l = s[0];
            var u = s[1];
            var c = s[2];
            var h = s[3];
            var d = new Uint32Array(256);
            var f = 0;
            var p = 0;
            var m = 0;
            for (m = 0; m < 256; m++) d[m] = m < 128 ? m << 1 : m << 1 ^ 283;
            for (m = 0; m < 256; m++) {
              var v = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
              v = v >>> 8 ^ 255 & v ^ 99;
              t[f] = v;
              e[v] = f;
              var g = d[f];
              var y = d[g];
              var b = d[y];
              var x = 257 * d[v] ^ 16843008 * v;
              r[f] = x << 24 | x >>> 8;
              i[f] = x << 16 | x >>> 16;
              a[f] = x << 8 | x >>> 24;
              o[f] = x;
              x = 16843009 * b ^ 65537 * y ^ 257 * g ^ 16843008 * f;
              l[v] = x << 24 | x >>> 8;
              u[v] = x << 16 | x >>> 16;
              c[v] = x << 8 | x >>> 24;
              h[v] = x;
              if (f) {
                f = g ^ d[d[d[b ^ g]]];
                p ^= d[d[p]];
              } else {
                f = p = 1;
              }
            }
          };
          e.expandKey = function (t) {
            for (e = this.uint8ArrayToUint32Array_(t), n = !0, r = 0, void 0; r < e.length && n;) {
              var e;
              var n;
              var r;
              n = e[r] === this.key[r];
              r++;
            }
            if (!n) {
              this.key = e;
              var i = this.keySize = e.length;
              if (4 !== i && 6 !== i && 8 !== i) throw new Error("Invalid aes key size=" + i);
              var a;
              var o;
              var s;
              var l;
              var u = this.ksRows = 4 * (i + 6 + 1);
              var c = this.keySchedule = new Uint32Array(u);
              var h = this.invKeySchedule = new Uint32Array(u);
              var d = this.sBox;
              var f = this.rcon;
              var p = this.invSubMix;
              var m = p[0];
              var v = p[1];
              var g = p[2];
              var y = p[3];
              for (a = 0; a < u; a++) if (a < i) {
                s = c[a] = e[a];
              } else {
                l = s;
                if (a % i == 0) {
                  l = d[(l = l << 8 | l >>> 24) >>> 24] << 24 | d[l >>> 16 & 255] << 16 | d[l >>> 8 & 255] << 8 | d[255 & l];
                  l ^= f[a / i | 0] << 24;
                } else {
                  if (i > 6 && a % i == 4) {
                    l = d[l >>> 24] << 24 | d[l >>> 16 & 255] << 16 | d[l >>> 8 & 255] << 8 | d[255 & l];
                  }
                }
                c[a] = s = (c[a - i] ^ l) >>> 0;
              }
              for (o = 0; o < u; o++) {
                a = u - o;
                l = 3 & o ? c[a] : c[a - 4];
                h[o] = o < 4 || a <= 4 ? l : m[d[l >>> 24]] ^ v[d[l >>> 16 & 255]] ^ g[d[l >>> 8 & 255]] ^ y[d[255 & l]];
                h[o] = h[o] >>> 0;
              }
            }
          };
          e.networkToHostOrderSwap = function (t) {
            return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24;
          };
          e.decrypt = function (t, e, n, r) {
            for (_ = this.keySize + 6, w = this.invKeySchedule, S = this.invSBox, E = this.invSubMix, T = E[0], M = E[1], A = E[2], L = E[3], C = this.uint8ArrayToUint32Array_(n), P = C[0], R = C[1], O = C[2], I = C[3], D = new Int32Array(t), k = new Int32Array(D.length), N = this.networkToHostOrderSwap, void 0; e < D.length;) {
              var i;
              var a;
              var o;
              var s;
              var l;
              var u;
              var c;
              var h;
              var d;
              var f;
              var p;
              var m;
              var v;
              var g;
              var y;
              var b;
              var x;
              var _;
              var w;
              var S;
              var E;
              var T;
              var M;
              var A;
              var L;
              var C;
              var P;
              var R;
              var O;
              var I;
              var D;
              var k;
              var N;
              for (d = N(D[e]), f = N(D[e + 1]), p = N(D[e + 2]), m = N(D[e + 3]), l = d ^ w[0], u = m ^ w[1], c = p ^ w[2], h = f ^ w[3], v = 4, g = 1; g < _; g++) {
                i = T[l >>> 24] ^ M[u >> 16 & 255] ^ A[c >> 8 & 255] ^ L[255 & h] ^ w[v];
                a = T[u >>> 24] ^ M[c >> 16 & 255] ^ A[h >> 8 & 255] ^ L[255 & l] ^ w[v + 1];
                o = T[c >>> 24] ^ M[h >> 16 & 255] ^ A[l >> 8 & 255] ^ L[255 & u] ^ w[v + 2];
                s = T[h >>> 24] ^ M[l >> 16 & 255] ^ A[u >> 8 & 255] ^ L[255 & c] ^ w[v + 3];
                l = i;
                u = a;
                c = o;
                h = s;
                v += 4;
              }
              i = S[l >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[c >> 8 & 255] << 8 ^ S[255 & h] ^ w[v];
              a = S[u >>> 24] << 24 ^ S[c >> 16 & 255] << 16 ^ S[h >> 8 & 255] << 8 ^ S[255 & l] ^ w[v + 1];
              o = S[c >>> 24] << 24 ^ S[h >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & u] ^ w[v + 2];
              s = S[h >>> 24] << 24 ^ S[l >> 16 & 255] << 16 ^ S[u >> 8 & 255] << 8 ^ S[255 & c] ^ w[v + 3];
              v += 3;
              k[e] = N(i ^ P);
              k[e + 1] = N(s ^ R);
              k[e + 2] = N(o ^ O);
              k[e + 3] = N(a ^ I);
              P = d;
              R = f;
              O = p;
              I = m;
              e += 4;
            }
            return r ? (x = (b = (y = k.buffer).byteLength) && new DataView(y).getUint8(b - 1)) ? y.slice(0, b - x) : y : k.buffer;
          };
          e.destroy = function () {
            this.key = void 0;
            this.keySize = void 0;
            this.ksRows = void 0;
            this.sBox = void 0;
            this.invSBox = void 0;
            this.subMix = void 0;
            this.invSubMix = void 0;
            this.keySchedule = void 0;
            this.invKeySchedule = void 0;
            this.rcon = void 0;
          };
          return t;
        }();
        var l = n("./src/utils/logger.js");
        var u = n("./src/utils/get-self-scope.js");
        var c = Object(u.getSelfScope)();
        var h = function () {
          function t(t, e, n) {
            var r = (void 0 === n ? {} : n).removePKCS7Padding;
            var i = void 0 === r || r;
            this.logEnabled = !0;
            this.observer = t;
            this.config = e;
            this.removePKCS7Padding = i;
            if (i) try {
              var a = c.crypto;
              a && (this.subtle = a.subtle || a.webkitSubtle);
            } catch (t) {}
            this.disableWebCrypto = !this.subtle;
          }
          var e = t.prototype;
          e.isSync = function () {
            return this.disableWebCrypto && this.config.enableSoftwareAES;
          };
          e.decrypt = function (t, e, n, r) {
            var i = this;
            if (this.disableWebCrypto && this.config.enableSoftwareAES) {
              if (this.logEnabled) {
                l.logger.log("JS AES decrypt");
                this.logEnabled = !1;
              }
              var u = this.decryptor;
              if (u) {
                this.decryptor = u = new s();
              }
              u.expandKey(e);
              r(u.decrypt(t, 0, n, this.removePKCS7Padding));
            } else {
              if (this.logEnabled) {
                l.logger.log("WebCrypto AES decrypt");
                this.logEnabled = !1;
              }
              var c = this.subtle;
              if (this.key !== e) {
                this.key = e;
                this.fastAesKey = new o(c, e);
              }
              this.fastAesKey.expandKey().then(function (o) {
                new a(c, n).decrypt(t, o).catch(function (a) {
                  i.onWebCryptoError(a, t, e, n, r);
                }).then(function (t) {
                  r(t);
                });
              }).catch(function (a) {
                i.onWebCryptoError(a, t, e, n, r);
              });
            }
          };
          e.onWebCryptoError = function (t, e, n, a, o) {
            if (this.config.enableSoftwareAES) {
              l.logger.log("WebCrypto Error, disable WebCrypto API");
              this.disableWebCrypto = !0;
              this.logEnabled = !0;
              this.decrypt(e, n, a, o);
            } else {
              l.logger.error("decrypting error : " + t.message);
              this.observer.trigger(r.default.ERROR, {
                type: i.ErrorTypes.MEDIA_ERROR,
                details: i.ErrorDetails.FRAG_DECRYPT_ERROR,
                fatal: !0,
                reason: t.message
              });
            }
          };
          e.destroy = function () {
            var t = this.decryptor;
            if (t) {
              t.destroy();
              this.decryptor = void 0;
            }
          };
          return t;
        }();
        var d = n("./src/polyfills/number.js");
        function f(t, e) {
          return 255 === t[e] && 240 == (246 & t[e + 1]);
        }
        function p(t, e) {
          return 1 & t[e + 1] ? 7 : 9;
        }
        function m(t, e) {
          return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5;
        }
        function v(t, e) {
          return !!(e + 1 < t.length && f(t, e));
        }
        function g(t, e) {
          if (v(t, e)) {
            var n = p(t, e);
            if (e + n >= t.length) return !1;
            var r = m(t, e);
            if (r <= n) return !1;
            var i = e + r;
            if (i === t.length || i + 1 < t.length && f(t, i)) return !0;
          }
          return !1;
        }
        function y(t, e, n, a, o) {
          if (!t.samplerate) {
            var s = function (t, e, n, a) {
              var o;
              var s;
              var u;
              var c;
              var h;
              var d = navigator.userAgent.toLowerCase();
              var f = a;
              var p = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
              o = 1 + ((192 & e[n + 2]) >>> 6);
              if (!((s = (60 & e[n + 2]) >>> 2) > p.length - 1)) return c = (1 & e[n + 2]) << 2, c |= (192 & e[n + 3]) >>> 6, l.logger.log("manifest codec:" + a + ",ADTS data:type:" + o + ",sampleingIndex:" + s + "[" + p[s] + "Hz],channelConfig:" + c), /firefox/i.test(d) ? s >= 6 ? (o = 5, h = new Array(4), u = s - 3) : (o = 2, h = new Array(2), u = s) : -1 !== d.indexOf("android") ? (o = 2, h = new Array(2), u = s) : (o = 5, h = new Array(4), a && (-1 !== a.indexOf("mp4a.40.29") || -1 !== a.indexOf("mp4a.40.5")) || !a && s >= 6 ? u = s - 3 : ((a && -1 !== a.indexOf("mp4a.40.2") && (s >= 6 && 1 === c || /vivaldi/i.test(d)) || !a && 1 === c) && (o = 2, h = new Array(2)), u = s)), h[0] = o << 3, h[0] |= (14 & s) >> 1, h[1] |= (1 & s) << 7, h[1] |= c << 3, 5 === o && (h[1] |= (14 & u) >> 1, h[2] = (1 & u) << 7, h[2] |= 8, h[3] = 0), {
                config: h,
                samplerate: p[s],
                channelCount: c,
                codec: "mp4a.40." + o,
                manifestCodec: f
              };
              t.trigger(r.default.ERROR, {
                type: i.ErrorTypes.MEDIA_ERROR,
                details: i.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: "invalid ADTS sampling index:" + s
              });
            }(e, n, a, o);
            t.config = s.config;
            t.samplerate = s.samplerate;
            t.channelCount = s.channelCount;
            t.codec = s.codec;
            t.manifestCodec = s.manifestCodec;
            l.logger.log("parsed codec:" + t.codec + ",rate:" + s.samplerate + ",nb channel:" + s.channelCount);
          }
        }
        function b(t) {
          return 9216e4 / t;
        }
        function x(t, e, n, r, i) {
          var a = function (t, e, n, r, i) {
            var a;
            var o;
            var s = t.length;
            a = p(t, e);
            o = m(t, e);
            if ((o -= a) > 0 && e + a + o <= s) return {
              headerLength: a,
              frameLength: o,
              stamp: n + r * i
            };
          }(e, n, r, i, b(t.samplerate));
          if (a) {
            var o = a.stamp;
            var s = a.headerLength;
            var l = a.frameLength;
            var u = {
              unit: e.subarray(n + s, n + s + l),
              pts: o,
              dts: o
            };
            t.samples.push(u);
            return {
              sample: u,
              length: l + s
            };
          }
        }
        var _ = n("./src/demux/id3.js");
        var w = function () {
          function t(t, e, n) {
            this.observer = t;
            this.config = n;
            this.remuxer = e;
          }
          var e = t.prototype;
          e.resetInitSegment = function (t, e, n, r) {
            this._audioTrack = {
              container: "audio/adts",
              type: "audio",
              id: 0,
              sequenceNumber: 0,
              isAAC: !0,
              samples: [],
              len: 0,
              manifestCodec: e,
              duration: r,
              inputTimeScale: 9e4
            };
          };
          e.resetTimeStamp = function () {};
          t.probe = function (t) {
            if (!t) return !1;
            for (e = (_.default.getID3Data(t, 0) || []).length, n = t.length, void 0; e < n; e++) {
              var e;
              var n;
              if (g(t, e)) {
                l.logger.log("ADTS sync word found !");
                return !0;
              }
            }
            return !1;
          };
          e.append = function (t, e, n, r) {
            for (i = this._audioTrack, a = _.default.getID3Data(t, 0) || [], o = _.default.getTimeStamp(a), s = Object(d.isFiniteNumber)(o) ? 90 * o : 9e4 * e, u = 0, c = s, h = t.length, f = a.length, p = [{
              pts: c,
              dts: c,
              data: a
            }], void 0; f < h - 1;) {
              var i;
              var a;
              var o;
              var s;
              var u;
              var c;
              var h;
              var f;
              var p;
              if (v(t, f) && f + 5 < h) {
                y(i, this.observer, t, f, i.manifestCodec);
                var m = x(i, t, f, s, u);
                if (!m) {
                  l.logger.log("Unable to parse AAC frame");
                  break;
                }
                f += m.length;
                c = m.sample.pts;
                u++;
              } else if (_.default.isHeader(t, f)) {
                a = _.default.getID3Data(t, f);
                p.push({
                  pts: c,
                  dts: c,
                  data: a
                });
                f += a.length;
              } else {
                f++;
              }
            }
            this.remuxer.remux(i, {
              samples: []
            }, {
              samples: p,
              inputTimeScale: 9e4
            }, {
              samples: []
            }, e, n, r);
          };
          e.destroy = function () {};
          return t;
        }();
        var S = n("./src/demux/mp4demuxer.js");
        var E = {
          BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
          SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
          SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
          BytesInSlot: [0, 1, 1, 4],
          appendFrame: function (t, e, n, r, i) {
            if (!(n + 24 > e.length)) {
              var a = this.parseHeader(e, n);
              if (a && n + a.frameLength <= e.length) {
                var o = r + i * (9e4 * a.samplesPerFrame / a.sampleRate);
                var s = {
                  unit: e.subarray(n, n + a.frameLength),
                  pts: o,
                  dts: o
                };
                t.config = [];
                t.channelCount = a.channelCount;
                t.samplerate = a.sampleRate;
                t.samples.push(s);
                return {
                  sample: s,
                  length: a.frameLength
                };
              }
            }
          },
          parseHeader: function (t, e) {
            var n = t[e + 1] >> 3 & 3;
            var r = t[e + 1] >> 1 & 3;
            var i = t[e + 2] >> 4 & 15;
            var a = t[e + 2] >> 2 & 3;
            var o = t[e + 2] >> 1 & 1;
            if (1 !== n && 0 !== i && 15 !== i && 3 !== a) {
              var s = 3 === n ? 3 - r : 3 === r ? 3 : 4;
              var l = 1e3 * E.BitratesMap[14 * s + i - 1];
              var u = 3 === n ? 0 : 2 === n ? 1 : 2;
              var c = E.SamplingRateMap[3 * u + a];
              var h = t[e + 3] >> 6 == 3 ? 1 : 2;
              var d = E.SamplesCoefficients[n][r];
              var f = E.BytesInSlot[r];
              var p = 8 * d * f;
              return {
                sampleRate: c,
                channelCount: h,
                frameLength: parseInt(d * l / c + o, 10) * f,
                samplesPerFrame: p
              };
            }
          },
          isHeaderPattern: function (t, e) {
            return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1]);
          },
          isHeader: function (t, e) {
            return !!(e + 1 < t.length && this.isHeaderPattern(t, e));
          },
          probe: function (t, e) {
            if (e + 1 < t.length && this.isHeaderPattern(t, e)) {
              var n = this.parseHeader(t, e);
              var r = 4;
              if (n && n.frameLength) {
                r = n.frameLength;
              }
              var i = e + r;
              if (i === t.length || i + 1 < t.length && this.isHeaderPattern(t, i)) return !0;
            }
            return !1;
          }
        };
        var T = E;
        var M = function () {
          function t(t) {
            this.data = t;
            this.bytesAvailable = t.byteLength;
            this.word = 0;
            this.bitsAvailable = 0;
          }
          var e = t.prototype;
          e.loadWord = function () {
            var t = this.data;
            var e = this.bytesAvailable;
            var n = t.byteLength - e;
            var r = new Uint8Array(4);
            var i = Math.min(4, e);
            if (0 === i) throw new Error("no bytes available");
            r.set(t.subarray(n, n + i));
            this.word = new DataView(r.buffer).getUint32(0);
            this.bitsAvailable = 8 * i;
            this.bytesAvailable -= i;
          };
          e.skipBits = function (t) {
            var e;
            if (this.bitsAvailable > t) {
              this.word <<= t;
              this.bitsAvailable -= t;
            } else {
              t -= this.bitsAvailable;
              t -= (e = t >> 3) >> 3;
              this.bytesAvailable -= e;
              this.loadWord();
              this.word <<= t;
              this.bitsAvailable -= t;
            }
          };
          e.readBits = function (t) {
            var e = Math.min(this.bitsAvailable, t);
            var n = this.word >>> 32 - e;
            if (t > 32) {
              l.logger.error("Cannot read more than 32 bits at a time");
            }
            this.bitsAvailable -= e;
            if (this.bitsAvailable > 0) {
              this.word <<= e;
            } else {
              if (this.bytesAvailable > 0) {
                this.loadWord();
              }
            }
            return (e = t - e) > 0 && this.bitsAvailable ? n << e | this.readBits(e) : n;
          };
          e.skipLZ = function () {
            var t;
            for (t = 0; t < this.bitsAvailable; ++t) if (0 != (this.word & 2147483648 >>> t)) {
              this.word <<= t;
              this.bitsAvailable -= t;
              return t;
            }
            this.loadWord();
            return t + this.skipLZ();
          };
          e.skipUEG = function () {
            this.skipBits(1 + this.skipLZ());
          };
          e.skipEG = function () {
            this.skipBits(1 + this.skipLZ());
          };
          e.readUEG = function () {
            var t = this.skipLZ();
            return this.readBits(t + 1) - 1;
          };
          e.readEG = function () {
            var t = this.readUEG();
            return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1);
          };
          e.readBoolean = function () {
            return 1 === this.readBits(1);
          };
          e.readUByte = function () {
            return this.readBits(8);
          };
          e.readUShort = function () {
            return this.readBits(16);
          };
          e.readUInt = function () {
            return this.readBits(32);
          };
          e.skipScalingList = function (t) {
            var e;
            var n = 8;
            var r = 8;
            for (e = 0; e < t; e++) {
              if (0 !== r) {
                r = (n + this.readEG() + 256) % 256;
              }
              n = 0 === r ? n : r;
            }
          };
          e.readSPS = function () {
            var t;
            var e;
            var n;
            var r;
            var i;
            var a;
            var o;
            var s = 0;
            var l = 0;
            var u = 0;
            var c = 0;
            var h = this.readUByte.bind(this);
            var d = this.readBits.bind(this);
            var f = this.readUEG.bind(this);
            var p = this.readBoolean.bind(this);
            var m = this.skipBits.bind(this);
            var v = this.skipEG.bind(this);
            var g = this.skipUEG.bind(this);
            var y = this.skipScalingList.bind(this);
            h();
            t = h();
            d(5);
            m(3);
            h();
            g();
            if (100 === t || 110 === t || 122 === t || 244 === t || 44 === t || 83 === t || 86 === t || 118 === t || 128 === t) {
              var b = f();
              if (3 === b && m(1), g(), g(), m(1), p()) for (a = 3 !== b ? 8 : 12, o = 0; o < a; o++) p() && y(o < 6 ? 16 : 64);
            }
            g();
            var x = f();
            if (0 === x) f();else if (1 === x) for (m(1), v(), v(), e = f(), o = 0; o < e; o++) v();
            g();
            m(1);
            n = f();
            r = f();
            if (0 === (i = d(1))) {
              m(1);
            }
            m(1);
            if (p()) {
              s = f();
              l = f();
              u = f();
              c = f();
            }
            var _ = [1, 1];
            if (p() && p()) switch (h()) {
              case 1:
                _ = [1, 1];
                break;
              case 2:
                _ = [12, 11];
                break;
              case 3:
                _ = [10, 11];
                break;
              case 4:
                _ = [16, 11];
                break;
              case 5:
                _ = [40, 33];
                break;
              case 6:
                _ = [24, 11];
                break;
              case 7:
                _ = [20, 11];
                break;
              case 8:
                _ = [32, 11];
                break;
              case 9:
                _ = [80, 33];
                break;
              case 10:
                _ = [18, 11];
                break;
              case 11:
                _ = [15, 11];
                break;
              case 12:
                _ = [64, 33];
                break;
              case 13:
                _ = [160, 99];
                break;
              case 14:
                _ = [4, 3];
                break;
              case 15:
                _ = [3, 2];
                break;
              case 16:
                _ = [2, 1];
                break;
              case 255:
                _ = [h() << 8 | h(), h() << 8 | h()];
            }
            return {
              width: Math.ceil(16 * (n + 1) - 2 * s - 2 * l),
              height: (2 - i) * (r + 1) * 16 - (i ? 2 : 4) * (u + c),
              pixelRatio: _
            };
          };
          e.readSliceType = function () {
            this.readUByte();
            this.readUEG();
            return this.readUEG();
          };
          return t;
        }();
        var A = function () {
          function t(t, e, n, r) {
            this.decryptdata = n;
            this.discardEPB = r;
            this.decrypter = new h(t, e, {
              removePKCS7Padding: !1
            });
          }
          var e = t.prototype;
          e.decryptBuffer = function (t, e) {
            this.decrypter.decrypt(t, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, e);
          };
          e.decryptAacSample = function (t, e, n, r) {
            var i = t[e].unit;
            var a = i.subarray(16, i.length - i.length % 16);
            var o = a.buffer.slice(a.byteOffset, a.byteOffset + a.length);
            var s = this;
            this.decryptBuffer(o, function (a) {
              a = new Uint8Array(a);
              i.set(a, 16);
              if (r) {
                s.decryptAacSamples(t, e + 1, n);
              }
            });
          };
          e.decryptAacSamples = function (t, e, n) {
            for (;; e++) {
              if (e >= t.length) return void n();
              if (!(t[e].unit.length < 32)) {
                var r = this.decrypter.isSync();
                this.decryptAacSample(t, e, n, r);
                if (!r) return;
              }
            }
          };
          e.getAvcEncryptedData = function (t) {
            for (e = 16 * Math.floor((t.length - 48) / 160) + 16, n = new Int8Array(e), r = 0, i = 32, void 0; i <= t.length - 16; i += 160, r += 16) {
              var e;
              var n;
              var r;
              var i;
              n.set(t.subarray(i, i + 16), r);
            }
            return n;
          };
          e.getAvcDecryptedUnit = function (t, e) {
            e = new Uint8Array(e);
            for (n = 0, r = 32, void 0; r <= t.length - 16; r += 160, n += 16) {
              var n;
              var r;
              t.set(e.subarray(n, n + 16), r);
            }
            return t;
          };
          e.decryptAvcSample = function (t, e, n, r, i, a) {
            var o = this.discardEPB(i.data);
            var s = this.getAvcEncryptedData(o);
            var l = this;
            this.decryptBuffer(s.buffer, function (s) {
              i.data = l.getAvcDecryptedUnit(o, s);
              if (a) {
                l.decryptAvcSamples(t, e, n + 1, r);
              }
            });
          };
          e.decryptAvcSamples = function (t, e, n, r) {
            for (;; e++, n = 0) {
              if (e >= t.length) return void r();
              for (var i = t[e].units; !(n >= i.length); n++) {
                var a = i[n];
                if (!(a.data.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                  var o = this.decrypter.isSync();
                  this.decryptAvcSample(t, e, n, r, a, o);
                  if (!o) return;
                }
              }
            }
          };
          return t;
        }();
        var L = {
          video: 1,
          audio: 2,
          id3: 3,
          text: 4
        };
        var C = function () {
          function t(t, e, n, r) {
            this.observer = t;
            this.config = n;
            this.typeSupported = r;
            this.remuxer = e;
            this.sampleAes = null;
            this.pmtUnknownTypes = {};
          }
          var e = t.prototype;
          e.setDecryptData = function (t) {
            if (null != t && null != t.key && "SAMPLE-AES" === t.method) {
              this.sampleAes = new A(this.observer, this.config, t, this.discardEPB);
            } else {
              this.sampleAes = null;
            }
          };
          t.probe = function (e) {
            var n = t._syncOffset(e);
            return !(n < 0 || (n && l.logger.warn("MPEG2-TS detected but first sync word found @ offset " + n + ", junk ahead ?"), 0));
          };
          t._syncOffset = function (t) {
            for (e = Math.min(1e3, t.length - 564), n = 0, void 0; n < e;) {
              var e;
              var n;
              if (71 === t[n] && 71 === t[n + 188] && 71 === t[n + 376]) return n;
              n++;
            }
            return -1;
          };
          t.createTrack = function (t, e) {
            return {
              container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
              type: t,
              id: L[t],
              pid: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              dropped: "video" === t ? 0 : void 0,
              isAAC: "audio" === t || void 0,
              duration: "audio" === t ? e : void 0
            };
          };
          e.resetInitSegment = function (e, n, r, i) {
            this.pmtParsed = !1;
            this._pmtId = -1;
            this.pmtUnknownTypes = {};
            this._avcTrack = t.createTrack("video", i);
            this._audioTrack = t.createTrack("audio", i);
            this._id3Track = t.createTrack("id3", i);
            this._txtTrack = t.createTrack("text", i);
            this.aacOverFlow = null;
            this.aacLastPTS = null;
            this.avcSample = null;
            this.audioCodec = n;
            this.videoCodec = r;
            this._duration = i;
          };
          e.resetTimeStamp = function () {};
          e.append = function (e, n, a, o) {
            var s;
            var u;
            var c;
            var h;
            var d;
            var f = e.length;
            var p = !1;
            this.pmtUnknownTypes = {};
            this.contiguous = a;
            var m = this.pmtParsed;
            var v = this._avcTrack;
            var g = this._audioTrack;
            var y = this._id3Track;
            var b = v.pid;
            var x = g.pid;
            var _ = y.pid;
            var w = this._pmtId;
            var S = v.pesData;
            var E = g.pesData;
            var T = y.pesData;
            var M = this._parsePAT;
            var A = this._parsePMT.bind(this);
            var L = this._parsePES;
            var C = this._parseAVCPES.bind(this);
            var P = this._parseAACPES.bind(this);
            var R = this._parseMPEGPES.bind(this);
            var O = this._parseID3PES.bind(this);
            var I = t._syncOffset(e);
            for (f -= (f + I) % 188, s = I; s < f; s += 188) if (71 === e[s]) {
              u = !!(64 & e[s + 1]);
              c = ((31 & e[s + 1]) << 8) + e[s + 2];
              if ((48 & e[s + 3]) >> 4 > 1) {
                if ((h = s + 5 + e[s + 4]) === s + 188) continue;
              } else h = s + 4;
              switch (c) {
                case b:
                  if (u) {
                    if (S && (d = L(S))) {
                      C(d, !1);
                    }
                    S = {
                      data: [],
                      size: 0
                    };
                  }
                  if (S) {
                    S.data.push(e.subarray(h, s + 188));
                    S.size += s + 188 - h;
                  }
                  break;
                case x:
                  if (u) {
                    if (E && (d = L(E))) {
                      if (g.isAAC) {
                        P(d);
                      } else {
                        R(d);
                      }
                    }
                    E = {
                      data: [],
                      size: 0
                    };
                  }
                  if (E) {
                    E.data.push(e.subarray(h, s + 188));
                    E.size += s + 188 - h;
                  }
                  break;
                case _:
                  if (u) {
                    if (T && (d = L(T))) {
                      O(d);
                    }
                    T = {
                      data: [],
                      size: 0
                    };
                  }
                  if (T) {
                    T.data.push(e.subarray(h, s + 188));
                    T.size += s + 188 - h;
                  }
                  break;
                case 0:
                  if (u) {
                    h += e[h] + 1;
                  }
                  w = this._pmtId = M(e, h);
                  break;
                case w:
                  if (u) {
                    h += e[h] + 1;
                  }
                  var D = A(e, h, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                  if ((b = D.avc) > 0) {
                    v.pid = b;
                  }
                  if ((x = D.audio) > 0) {
                    g.pid = x;
                    g.isAAC = D.isAAC;
                  }
                  if ((_ = D.id3) > 0) {
                    y.pid = _;
                  }
                  if (p && !m) {
                    l.logger.log("reparse from beginning");
                    p = !1;
                    s = I - 188;
                  }
                  m = this.pmtParsed = !0;
                  break;
                case 17:
                case 8191:
                  break;
                default:
                  p = !0;
              }
            } else this.observer.trigger(r.default.ERROR, {
              type: i.ErrorTypes.MEDIA_ERROR,
              details: i.ErrorDetails.FRAG_PARSING_ERROR,
              fatal: !1,
              reason: "TS packet did not start with 0x47"
            });
            if (S && (d = L(S))) {
              C(d, !0);
              v.pesData = null;
            } else {
              v.pesData = S;
            }
            if (E && (d = L(E))) {
              if (g.isAAC) {
                P(d);
              } else {
                R(d);
              }
              g.pesData = null;
            } else {
              if (E && E.size) {
                l.logger.log("last AAC PES packet truncated,might overlap between fragments");
              }
              g.pesData = E;
            }
            if (T && (d = L(T))) {
              O(d);
              y.pesData = null;
            } else {
              y.pesData = T;
            }
            if (null == this.sampleAes) {
              this.remuxer.remux(g, v, y, this._txtTrack, n, a, o);
            } else {
              this.decryptAndRemux(g, v, y, this._txtTrack, n, a, o);
            }
          };
          e.decryptAndRemux = function (t, e, n, r, i, a, o) {
            if (t.samples && t.isAAC) {
              var s = this;
              this.sampleAes.decryptAacSamples(t.samples, 0, function () {
                s.decryptAndRemuxAvc(t, e, n, r, i, a, o);
              });
            } else this.decryptAndRemuxAvc(t, e, n, r, i, a, o);
          };
          e.decryptAndRemuxAvc = function (t, e, n, r, i, a, o) {
            if (e.samples) {
              var s = this;
              this.sampleAes.decryptAvcSamples(e.samples, 0, 0, function () {
                s.remuxer.remux(t, e, n, r, i, a, o);
              });
            } else this.remuxer.remux(t, e, n, r, i, a, o);
          };
          e.destroy = function () {
            this._initPTS = this._initDTS = void 0;
            this._duration = 0;
          };
          e._parsePAT = function (t, e) {
            return (31 & t[e + 10]) << 8 | t[e + 11];
          };
          e._trackUnknownPmt = function (t, e, n) {
            var r = this.pmtUnknownTypes[t] || 0;
            if (0 === r) {
              this.pmtUnknownTypes[t] = 0;
              e.call(l.logger, n);
            }
            this.pmtUnknownTypes[t]++;
            return r;
          };
          e._parsePMT = function (t, e, n, r) {
            var i;
            var a;
            var o = {
              audio: -1,
              avc: -1,
              id3: -1,
              isAAC: !0
            };
            for (i = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4, e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < i;) {
              switch (a = (31 & t[e + 1]) << 8 | t[e + 2], t[e]) {
                case 207:
                  if (!r) {
                    this._trackUnknownPmt(t[e], l.logger.warn, "ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                    break;
                  }
                case 15:
                  if (-1 === o.audio) {
                    o.audio = a;
                  }
                  break;
                case 21:
                  if (-1 === o.id3) {
                    o.id3 = a;
                  }
                  break;
                case 219:
                  if (!r) {
                    this._trackUnknownPmt(t[e], l.logger.warn, "H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                    break;
                  }
                case 27:
                  if (-1 === o.avc) {
                    o.avc = a;
                  }
                  break;
                case 3:
                case 4:
                  if (n) {
                    if (-1 === o.audio) {
                      o.audio = a;
                      o.isAAC = !1;
                    }
                  } else {
                    this._trackUnknownPmt(t[e], l.logger.warn, "MPEG audio found, not supported in this browser");
                  }
                  break;
                case 36:
                  this._trackUnknownPmt(t[e], l.logger.warn, "Unsupported HEVC stream type found");
                  break;
                default:
                  this._trackUnknownPmt(t[e], l.logger.log, "Unknown stream type:" + t[e]);
              }
              e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4]);
            }
            return o;
          };
          e._parsePES = function (t) {
            var e;
            var n;
            var r;
            var i;
            var a;
            var o;
            var s;
            var u;
            var c = 0;
            var h = t.data;
            if (!t || 0 === t.size) return null;
            for (; h[0].length < 19 && h.length > 1;) {
              var d = new Uint8Array(h[0].length + h[1].length);
              d.set(h[0]);
              d.set(h[1], h[0].length);
              h[0] = d;
              h.splice(1, 1);
            }
            if (1 === ((e = h[0])[0] << 16) + (e[1] << 8) + e[2]) {
              if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null;
              if (192 & (n = e[7])) {
                o = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2;
                if (64 & n) {
                  if (o - (s = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5) {
                    l.logger.warn(Math.round((o - s) / 9e4) + "s delta between PTS and DTS, align them");
                    o = s;
                  }
                } else {
                  s = o;
                }
              }
              u = (i = e[8]) + 9;
              if (t.size <= u) return null;
              t.size -= u;
              a = new Uint8Array(t.size);
              for (f = 0, p = h.length, void 0; f < p; f++) {
                var f;
                var p;
                var m = (e = h[f]).byteLength;
                if (u) {
                  if (u > m) {
                    u -= m;
                    continue;
                  }
                  e = e.subarray(u);
                  m -= u;
                  u = 0;
                }
                a.set(e, c);
                c += m;
              }
              if (r) {
                r -= i + 3;
              }
              return {
                data: a,
                pts: o,
                dts: s,
                len: r
              };
            }
            return null;
          };
          e.pushAccesUnit = function (t, e) {
            if (t.units.length && t.frame) {
              var n = e.samples;
              var r = n.length;
              if (isNaN(t.pts)) {
                if (!r) return void e.dropped++;
                var i = n[r - 1];
                t.pts = i.pts;
                t.dts = i.dts;
              }
              if (!this.config.forceKeyFrameOnDiscontinuity || !0 === t.key || e.sps && (r || this.contiguous)) {
                t.id = r;
                n.push(t);
              } else {
                e.dropped++;
              }
            }
            if (t.debug.length) {
              l.logger.log(t.pts + "/" + t.dts + ":" + t.debug);
            }
          };
          e._parseAVCPES = function (t, e) {
            var n;
            var r;
            var i;
            var a = this;
            var o = this._avcTrack;
            var s = this._parseAVCNALu(t.data);
            var l = this.avcSample;
            var u = !1;
            var c = this.pushAccesUnit.bind(this);
            var h = function (t, e, n, r) {
              return {
                key: t,
                pts: e,
                dts: n,
                units: [],
                debug: r
              };
            };
            t.data = null;
            if (l && s.length && !o.audFound) {
              c(l, o);
              l = this.avcSample = h(!1, t.pts, t.dts, "");
            }
            s.forEach(function (e) {
              switch (e.type) {
                case 1:
                  r = !0;
                  if (l) {
                    l = a.avcSample = h(!0, t.pts, t.dts, "");
                  }
                  l.frame = !0;
                  var s = e.data;
                  if (u && s.length > 4) {
                    var d = new M(s).readSliceType();
                    if (2 !== d && 4 !== d && 7 !== d && 9 !== d) {
                      l.key = !0;
                    }
                  }
                  break;
                case 5:
                  r = !0;
                  if (l) {
                    l = a.avcSample = h(!0, t.pts, t.dts, "");
                  }
                  l.key = !0;
                  l.frame = !0;
                  break;
                case 6:
                  r = !0;
                  (n = new M(a.discardEPB(e.data))).readUByte();
                  for (f = 0, p = 0, m = !1, v = 0, void 0; !m && n.bytesAvailable > 1;) {
                    var f;
                    var p;
                    var m;
                    var v;
                    f = 0;
                    do {
                      f += v = n.readUByte();
                    } while (255 === v);
                    p = 0;
                    do {
                      p += v = n.readUByte();
                    } while (255 === v);
                    if (4 === f && 0 !== n.bytesAvailable) {
                      m = !0;
                      if (181 === n.readUByte() && 49 === n.readUShort() && 1195456820 === n.readUInt() && 3 === n.readUByte()) {
                        var g = n.readUByte(),
                          y = 31 & g,
                          b = [g, n.readUByte()];
                        for (i = 0; i < y; i++) b.push(n.readUByte()), b.push(n.readUByte()), b.push(n.readUByte());
                        a._insertSampleInOrder(a._txtTrack.samples, {
                          type: 3,
                          pts: t.pts,
                          bytes: b
                        });
                      }
                    } else if (5 === f && 0 !== n.bytesAvailable) {
                      m = !0;
                      if (p > 16) {
                        var x = [];
                        for (i = 0; i < 16; i++) x.push(n.readUByte().toString(16)), 3 !== i && 5 !== i && 7 !== i && 9 !== i || x.push("-");
                        var w = p - 16,
                          S = new Uint8Array(w);
                        for (i = 0; i < w; i++) S[i] = n.readUByte();
                        a._insertSampleInOrder(a._txtTrack.samples, {
                          pts: t.pts,
                          payloadType: f,
                          uuid: x.join(""),
                          userDataBytes: S,
                          userData: Object(_.utf8ArrayToStr)(S.buffer)
                        });
                      }
                    } else if (p < n.bytesAvailable) for (i = 0; i < p; i++) n.readUByte();
                  }
                  break;
                case 7:
                  r = !0;
                  u = !0;
                  if (!o.sps) {
                    var E = (n = new M(e.data)).readSPS();
                    o.width = E.width, o.height = E.height, o.pixelRatio = E.pixelRatio, o.sps = [e.data], o.duration = a._duration;
                    var T = e.data.subarray(1, 4),
                      A = "avc1.";
                    for (i = 0; i < 3; i++) {
                      var L = T[i].toString(16);
                      L.length < 2 && (L = "0" + L), A += L;
                    }
                    o.codec = A;
                  }
                  break;
                case 8:
                  r = !0;
                  if (o.pps) {
                    o.pps = [e.data];
                  }
                  break;
                case 9:
                  r = !1;
                  o.audFound = !0;
                  if (l) {
                    c(l, o);
                  }
                  l = a.avcSample = h(!1, t.pts, t.dts, "");
                  break;
                case 12:
                  r = !1;
                  break;
                default:
                  r = !1;
                  if (l) {
                    l.debug += "unknown NAL " + e.type + " ";
                  }
              }
              if (l && r) {
                l.units.push(e);
              }
            });
            if (e && l) {
              c(l, o);
              this.avcSample = null;
            }
          };
          e._insertSampleInOrder = function (t, e) {
            var n = t.length;
            if (n > 0) {
              if (e.pts >= t[n - 1].pts) t.push(e);else for (var r = n - 1; r >= 0; r--) if (e.pts < t[r].pts) {
                t.splice(r, 0, e);
                break;
              }
            } else t.push(e);
          };
          e._getLastNalUnit = function () {
            var t;
            var e = this.avcSample;
            if (!e || 0 === e.units.length) {
              var n = this._avcTrack.samples;
              e = n[n.length - 1];
            }
            if (e) {
              var r = e.units;
              t = r[r.length - 1];
            }
            return t;
          };
          e._parseAVCNALu = function (t) {
            var e;
            var n;
            var r;
            var i;
            var a = 0;
            var o = t.byteLength;
            var s = this._avcTrack;
            var l = s.naluState || 0;
            var u = l;
            var c = [];
            var h = -1;
            for (-1 === l && (h = 0, i = 31 & t[0], l = 0, a = 1); a < o;) {
              e = t[a++];
              if (l) {
                if (1 !== l) {
                  if (e) {
                    if (1 === e) {
                      if (h >= 0) {
                        r = {
                          data: t.subarray(h, a - l - 1),
                          type: i
                        };
                        c.push(r);
                      } else {
                        var d = this._getLastNalUnit();
                        if (d && (u && a <= 4 - u && d.state && (d.data = d.data.subarray(0, d.data.byteLength - u)), (n = a - l - 1) > 0)) {
                          var f = new Uint8Array(d.data.byteLength + n);
                          f.set(d.data, 0);
                          f.set(t.subarray(0, n), d.data.byteLength);
                          d.data = f;
                        }
                      }
                      if (a < o) {
                        h = a;
                        i = 31 & t[a];
                        l = 0;
                      } else {
                        l = -1;
                      }
                    } else l = 0;
                  } else l = 3;
                } else l = e ? 0 : 2;
              } else l = e ? 0 : 1;
            }
            if (h >= 0 && l >= 0) {
              r = {
                data: t.subarray(h, o),
                type: i,
                state: l
              };
              c.push(r);
            }
            if (0 === c.length) {
              var p = this._getLastNalUnit();
              if (p) {
                var m = new Uint8Array(p.data.byteLength + t.byteLength);
                m.set(p.data, 0), m.set(t, p.data.byteLength), p.data = m;
              }
            }
            s.naluState = l;
            return c;
          };
          e.discardEPB = function (t) {
            for (r = t.byteLength, i = [], a = 1, void 0; a < r - 2;) {
              var e;
              var n;
              var r;
              var i;
              var a;
              if (0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2]) {
                i.push(a + 2);
                a += 2;
              } else {
                a++;
              }
            }
            if (0 === i.length) return t;
            e = r - i.length;
            n = new Uint8Array(e);
            var o = 0;
            for (a = 0; a < e; o++, a++) {
              if (o === i[0]) {
                o++;
                i.shift();
              }
              n[a] = t[o];
            }
            return n;
          };
          e._parseAACPES = function (t) {
            var e;
            var n;
            var a;
            var o;
            var s;
            var u;
            var c;
            var h = this._audioTrack;
            var d = t.data;
            var f = t.pts;
            var p = this.aacOverFlow;
            var m = this.aacLastPTS;
            if (p) {
              var g = new Uint8Array(p.byteLength + d.byteLength);
              g.set(p, 0);
              g.set(d, p.byteLength);
              d = g;
            }
            for (a = 0, s = d.length; a < s - 1 && !v(d, a); a++);
            if (!a || (a < s - 1 ? (u = "AAC PES did not start with ADTS header,offset:" + a, c = !1) : (u = "no ADTS header found in AAC PES", c = !0), l.logger.warn("parsing error:" + u), this.observer.trigger(r.default.ERROR, {
              type: i.ErrorTypes.MEDIA_ERROR,
              details: i.ErrorDetails.FRAG_PARSING_ERROR,
              fatal: c,
              reason: u
            }), !c)) {
              y(h, this.observer, d, a, this.audioCodec);
              n = 0;
              e = b(h.samplerate);
              if (p && m) {
                var _ = m + e;
                Math.abs(_ - f) > 1 && (l.logger.log("AAC: align PTS for overlapping frames by " + Math.round((_ - f) / 90)), f = _);
              }
              for (; a < s;) {
                if (v(d, a)) {
                  if (a + 5 < s) {
                    var w = x(h, d, a, f, n);
                    if (w) {
                      a += w.length;
                      o = w.sample.pts;
                      n++;
                      continue;
                    }
                  }
                  break;
                }
                a++;
              }
              p = a < s ? d.subarray(a, s) : null;
              this.aacOverFlow = p;
              this.aacLastPTS = o;
            }
          };
          e._parseMPEGPES = function (t) {
            for (e = t.data, n = e.length, r = 0, i = 0, a = t.pts, void 0; i < n;) {
              var e;
              var n;
              var r;
              var i;
              var a;
              if (T.isHeader(e, i)) {
                var o = T.appendFrame(this._audioTrack, e, i, a, r);
                if (!o) break;
                i += o.length;
                r++;
              } else i++;
            }
          };
          e._parseID3PES = function (t) {
            this._id3Track.samples.push(t);
          };
          return t;
        }();
        var P = function () {
          function t(t, e, n) {
            this.observer = t;
            this.config = n;
            this.remuxer = e;
          }
          var e = t.prototype;
          e.resetInitSegment = function (t, e, n, r) {
            this._audioTrack = {
              container: "audio/mpeg",
              type: "audio",
              id: -1,
              sequenceNumber: 0,
              isAAC: !1,
              samples: [],
              len: 0,
              manifestCodec: e,
              duration: r,
              inputTimeScale: 9e4
            };
          };
          e.resetTimeStamp = function () {};
          t.probe = function (t) {
            var e;
            var n;
            var r = _.default.getID3Data(t, 0);
            if (r && void 0 !== _.default.getTimeStamp(r)) for (e = r.length, n = Math.min(t.length - 1, e + 100); e < n; e++) if (T.probe(t, e)) {
              l.logger.log("MPEG Audio sync word found !");
              return !0;
            }
            return !1;
          };
          e.append = function (t, e, n, r) {
            for (i = _.default.getID3Data(t, 0) || [], a = _.default.getTimeStamp(i), o = void 0 !== a ? 90 * a : 9e4 * e, s = i.length, l = t.length, u = 0, c = 0, h = this._audioTrack, d = [{
              pts: o,
              dts: o,
              data: i
            }], void 0; s < l;) {
              var i;
              var a;
              var o;
              var s;
              var l;
              var u;
              var c;
              var h;
              var d;
              if (T.isHeader(t, s)) {
                var f = T.appendFrame(h, t, s, o, u);
                if (!f) break;
                s += f.length;
                c = f.sample.pts;
                u++;
              } else if (_.default.isHeader(t, s)) {
                i = _.default.getID3Data(t, s);
                d.push({
                  pts: c,
                  dts: c,
                  data: i
                });
                s += i.length;
              } else {
                s++;
              }
            }
            this.remuxer.remux(h, {
              samples: []
            }, {
              samples: d,
              inputTimeScale: 9e4
            }, {
              samples: []
            }, e, n, r);
          };
          e.destroy = function () {};
          return t;
        }();
        var R = function () {
          function t() {}
          t.getSilentFrame = function (t, e) {
            if ("mp4a.40.2" === t) {
              if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
              if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
              if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
              if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
              if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
              if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
            } else {
              if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
              if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
              if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            }
            return null;
          };
          return t;
        }();
        var O = Math.pow(2, 32) - 1;
        var I = function () {
          function t() {}
          t.init = function () {
            var e;
            for (e in t.types = {
              avc1: [],
              avcC: [],
              btrt: [],
              dinf: [],
              dref: [],
              esds: [],
              ftyp: [],
              hdlr: [],
              mdat: [],
              mdhd: [],
              mdia: [],
              mfhd: [],
              minf: [],
              moof: [],
              moov: [],
              mp4a: [],
              ".mp3": [],
              mvex: [],
              mvhd: [],
              pasp: [],
              sdtp: [],
              stbl: [],
              stco: [],
              stsc: [],
              stsd: [],
              stsz: [],
              stts: [],
              tfdt: [],
              tfhd: [],
              traf: [],
              trak: [],
              trun: [],
              trex: [],
              tkhd: [],
              vmhd: [],
              smhd: []
            }, t.types) if (t.types.hasOwnProperty(e)) {
              t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)];
            }
            var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]);
            var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
            t.HDLR_TYPES = {
              video: n,
              audio: r
            };
            var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]);
            var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
            t.STTS = t.STSC = t.STCO = a;
            t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
            t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
            var o = new Uint8Array([105, 115, 111, 109]);
            var s = new Uint8Array([97, 118, 99, 49]);
            var l = new Uint8Array([0, 0, 0, 1]);
            t.FTYP = t.box(t.types.ftyp, o, l, o, s);
            t.DINF = t.box(t.types.dinf, t.box(t.types.dref, i));
          };
          t.box = function (t) {
            for (n = Array.prototype.slice.call(arguments, 1), r = 8, i = n.length, a = i, void 0; i--;) {
              var e;
              var n;
              var r;
              var i;
              var a;
              r += n[i].byteLength;
            }
            for ((e = new Uint8Array(r))[0] = r >> 24 & 255, e[1] = r >> 16 & 255, e[2] = r >> 8 & 255, e[3] = 255 & r, e.set(t, 4), i = 0, r = 8; i < a; i++) {
              e.set(n[i], r);
              r += n[i].byteLength;
            }
            return e;
          };
          t.hdlr = function (e) {
            return t.box(t.types.hdlr, t.HDLR_TYPES[e]);
          };
          t.mdat = function (e) {
            return t.box(t.types.mdat, e);
          };
          t.mdhd = function (e, n) {
            n *= e;
            var r = Math.floor(n / (O + 1));
            var i = Math.floor(n % (O + 1));
            return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 85, 196, 0, 0]));
          };
          t.mdia = function (e) {
            return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e));
          };
          t.mfhd = function (e) {
            return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]));
          };
          t.minf = function (e) {
            return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e));
          };
          t.moof = function (e, n, r) {
            return t.box(t.types.moof, t.mfhd(e), t.traf(r, n));
          };
          t.moov = function (e) {
            for (n = e.length, r = [], void 0; n--;) {
              var n;
              var r;
              r[n] = t.trak(e[n]);
            }
            return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(r).concat(t.mvex(e)));
          };
          t.mvex = function (e) {
            for (n = e.length, r = [], void 0; n--;) {
              var n;
              var r;
              r[n] = t.trex(e[n]);
            }
            return t.box.apply(null, [t.types.mvex].concat(r));
          };
          t.mvhd = function (e, n) {
            n *= e;
            var r = Math.floor(n / (O + 1));
            var i = Math.floor(n % (O + 1));
            var a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return t.box(t.types.mvhd, a);
          };
          t.sdtp = function (e) {
            var n;
            var r;
            var i = e.samples || [];
            var a = new Uint8Array(4 + i.length);
            for (r = 0; r < i.length; r++) {
              n = i[r].flags;
              a[r + 4] = n.dependsOn << 4 | n.isDependedOn << 2 | n.hasRedundancy;
            }
            return t.box(t.types.sdtp, a);
          };
          t.stbl = function (e) {
            return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO));
          };
          t.avc1 = function (e) {
            var n;
            var r;
            var i;
            var a = [];
            var o = [];
            for (n = 0; n < e.sps.length; n++) {
              i = (r = e.sps[n]).byteLength;
              a.push(i >>> 8 & 255);
              a.push(255 & i);
              a = a.concat(Array.prototype.slice.call(r));
            }
            for (n = 0; n < e.pps.length; n++) {
              i = (r = e.pps[n]).byteLength;
              o.push(i >>> 8 & 255);
              o.push(255 & i);
              o = o.concat(Array.prototype.slice.call(r));
            }
            var s = t.box(t.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | e.sps.length].concat(a).concat([e.pps.length]).concat(o)));
            var l = e.width;
            var u = e.height;
            var c = e.pixelRatio[0];
            var h = e.pixelRatio[1];
            return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h])));
          };
          t.esds = function (t) {
            var e = t.config.length;
            return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]));
          };
          t.mp4a = function (e) {
            var n = e.samplerate;
            return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0]), t.box(t.types.esds, t.esds(e)));
          };
          t.mp3 = function (e) {
            var n = e.samplerate;
            return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0]));
          };
          t.stsd = function (e) {
            return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e));
          };
          t.tkhd = function (e) {
            var n = e.id;
            var r = e.duration * e.timescale;
            var i = e.width;
            var a = e.height;
            var o = Math.floor(r / (O + 1));
            var s = Math.floor(r % (O + 1));
            return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, a >> 8 & 255, 255 & a, 0, 0]));
          };
          t.traf = function (e, n) {
            var r = t.sdtp(e);
            var i = e.id;
            var a = Math.floor(n / (O + 1));
            var o = Math.floor(n % (O + 1));
            return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), t.trun(e, r.length + 16 + 20 + 8 + 16 + 8 + 8), r);
          };
          t.trak = function (e) {
            e.duration = e.duration || 4294967295;
            return t.box(t.types.trak, t.tkhd(e), t.mdia(e));
          };
          t.trex = function (e) {
            var n = e.id;
            return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
          };
          t.trun = function (e, n) {
            var r;
            var i;
            var a;
            var o;
            var s;
            var l;
            var u = e.samples || [];
            var c = u.length;
            var h = 12 + 16 * c;
            var d = new Uint8Array(h);
            for (n += 8 + h, d.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n], 0), r = 0; r < c; r++) {
              a = (i = u[r]).duration;
              o = i.size;
              s = i.flags;
              l = i.cts;
              d.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 & s.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * r);
            }
            return t.box(t.types.trun, d);
          };
          t.initSegment = function (e) {
            if (t.types) {
              t.init();
            }
            var n;
            var r = t.moov(e);
            (n = new Uint8Array(t.FTYP.byteLength + r.byteLength)).set(t.FTYP);
            n.set(r, t.FTYP.byteLength);
            return n;
          };
          return t;
        }();
        var D = I;
        function k(t, e, n, r) {
          if (void 0 === n) {
            n = 1;
          }
          if (void 0 === r) {
            r = !1;
          }
          var i = t * e * n;
          return r ? Math.round(i) : i;
        }
        function N(t, e) {
          if (void 0 === e) {
            e = !1;
          }
          return k(t, 1e3, 1 / 9e4, e);
        }
        function B(t, e) {
          if (void 0 === e) {
            e = 1;
          }
          return k(t, 9e4, 1 / e);
        }
        var F = B(10);
        var U = B(0.2);
        var z = null;
        function G(t, e) {
          var n;
          if (void 0 === e) return t;
          for (n = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += n;
          return t;
        }
        var H;
        var j = function () {
          function t(t, e, n, r) {
            this.observer = t;
            this.config = e;
            this.typeSupported = n;
            this.ISGenerated = !1;
            if (null === z) {
              var i = navigator.userAgent.match(/Chrome\/(\d+)/i);
              z = i ? parseInt(i[1]) : 0;
            }
          }
          var e = t.prototype;
          e.destroy = function () {};
          e.resetTimeStamp = function (t) {
            this._initPTS = this._initDTS = t;
          };
          e.resetInitSegment = function () {
            this.ISGenerated = !1;
          };
          e.getVideoStartPts = function (t) {
            var e = !1;
            var n = t.reduce(function (t, n) {
              var r = n.pts - t;
              return r < -4294967296 ? (e = !0, G(t, n.pts)) : r > 0 ? t : n.pts;
            }, t[0].pts);
            if (e) {
              l.logger.debug("PTS rollover detected");
            }
            return n;
          };
          e.remux = function (t, e, n, i, a, o, s) {
            if (this.ISGenerated) {
              this.generateIS(t, e, a);
            }
            if (this.ISGenerated) {
              var u = t.samples.length,
                c = e.samples.length,
                h = a,
                d = a;
              if (u && c) {
                var f = this.getVideoStartPts(e.samples),
                  p = (G(t.samples[0].pts, f) - f) / e.inputTimeScale;
                h += Math.max(0, p), d += Math.max(0, -p);
              }
              if (u) {
                t.timescale || (l.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(t, e, a));
                var m,
                  v = this.remuxAudio(t, h, o, s);
                c && (v && (m = v.endPTS - v.startPTS), e.timescale || (l.logger.warn("regenerate InitSegment as video detected"), this.generateIS(t, e, a)), this.remuxVideo(e, d, o, m));
              } else if (c) {
                var g = this.remuxVideo(e, d, o, 0, s);
                g && t.codec && this.remuxEmptyAudio(t, h, o, g);
              }
            }
            if (n.samples.length) {
              this.remuxID3(n, a);
            }
            if (i.samples.length) {
              this.remuxText(i, a);
            }
            this.observer.trigger(r.default.FRAG_PARSED);
          };
          e.generateIS = function (t, e, n) {
            var a;
            var o;
            var s = this.observer;
            var u = t.samples;
            var c = e.samples;
            var h = this.typeSupported;
            var d = "audio/mp4";
            var f = {};
            var p = {
              tracks: f
            };
            var m = void 0 === this._initPTS;
            if (m) {
              a = o = 1 / 0;
            }
            if (t.config && u.length) {
              t.timescale = t.samplerate;
              l.logger.log("audio sampling rate : " + t.samplerate);
              if (t.isAAC) {
                if (h.mpeg) {
                  d = "audio/mpeg";
                  t.codec = "";
                } else {
                  if (h.mp3) {
                    t.codec = "mp3";
                  }
                }
              }
              f.audio = {
                container: d,
                codec: t.codec,
                initSegment: !t.isAAC && h.mpeg ? new Uint8Array() : D.initSegment([t]),
                metadata: {
                  channelCount: t.channelCount
                }
              };
              if (m) {
                a = o = u[0].pts - Math.round(t.inputTimeScale * n);
              }
            }
            if (e.sps && e.pps && c.length) {
              var v = e.inputTimeScale;
              if (e.timescale = v, f.video = {
                container: "video/mp4",
                codec: e.codec,
                initSegment: D.initSegment([e]),
                metadata: {
                  width: e.width,
                  height: e.height
                }
              }, m) {
                var g = this.getVideoStartPts(c),
                  y = Math.round(v * n);
                o = Math.min(o, G(c[0].dts, g) - y), a = Math.min(a, g - y), this.observer.trigger(r.default.INIT_PTS_FOUND, {
                  initPTS: a
                });
              }
            } else m && f.audio && this.observer.trigger(r.default.INIT_PTS_FOUND, {
              initPTS: a
            });
            if (Object.keys(f).length) {
              s.trigger(r.default.FRAG_PARSING_INIT_SEGMENT, p);
              this.ISGenerated = !0;
              if (m) {
                this._initPTS = a;
                this._initDTS = o;
              }
            } else {
              s.trigger(r.default.ERROR, {
                type: i.ErrorTypes.MEDIA_ERROR,
                details: i.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !1,
                reason: "no audio/video samples found"
              });
            }
          };
          e.remuxVideo = function (t, e, n, a) {
            var o;
            var s;
            var u;
            var c;
            var h;
            var d = t.timescale;
            var f = t.samples;
            var p = [];
            var m = f.length;
            var v = this._initPTS;
            var g = 8;
            var y = Number.POSITIVE_INFINITY;
            var b = Number.NEGATIVE_INFINITY;
            var x = 0;
            var _ = !1;
            var w = this.nextAvcDts;
            if (0 !== m) {
              if (n) {
                w = e * d - (f[0].pts - G(f[0].dts, f[0].pts));
              }
              for (var S = 0; S < m; S++) {
                var E = f[S];
                E.pts = G(E.pts - v, w);
                E.dts = G(E.dts - v, w);
                if (E.dts > E.pts) {
                  x = Math.max(Math.min(x, E.pts - E.dts), -1 * U);
                }
                if (E.dts < f[S > 0 ? S - 1 : S].dts) {
                  _ = !0;
                }
              }
              if (_) {
                f.sort(function (t, e) {
                  var n = t.dts - e.dts;
                  var r = t.pts - e.pts;
                  return n || r || t.id - e.id;
                });
              }
              c = f[0].dts;
              h = f[m - 1].dts;
              var T = Math.round((h - c) / (m - 1));
              if (x < 0) {
                if (x < -2 * T) {
                  l.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + N(-T, !0) + " ms");
                  for (M = x, A = 0, void 0; A < m; A++) {
                    var M;
                    var A;
                    f[A].dts = M = Math.max(M, f[A].pts - T);
                    f[A].pts = Math.max(M, f[A].pts);
                  }
                } else {
                  l.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + N(x, !0) + " ms to overcome this issue");
                  for (var L = 0; L < m; L++) f[L].dts = f[L].dts + x;
                }
                c = f[0].dts;
                h = f[m - 1].dts;
              }
              if (n) {
                var C = c - w;
                var P = C > T;
                if (P || C < -1) {
                  if (P) {
                    l.logger.warn("AVC: " + N(C, !0) + " ms (" + C + "dts) hole between fragments detected, filling it");
                  } else {
                    l.logger.warn("AVC: " + N(-C, !0) + " ms (" + C + "dts) overlapping between fragments detected");
                  }
                  c = w;
                  var R = f[0].pts - C;
                  f[0].dts = c;
                  f[0].pts = R;
                  l.logger.log("Video: First PTS/DTS adjusted: " + N(R, !0) + "/" + N(c, !0) + ", delta: " + N(C, !0) + " ms");
                }
              }
              if (z && z < 75) {
                c = Math.max(0, c);
              }
              for (O = 0, I = 0, k = 0, void 0; k < m; k++) {
                var O;
                var I;
                var k;
                for (B = f[k], F = B.units, H = F.length, j = 0, V = 0, void 0; V < H; V++) {
                  var B;
                  var F;
                  var H;
                  var j;
                  var V;
                  j += F[V].data.length;
                }
                I += j;
                O += H;
                B.length = j;
                B.dts = Math.max(B.dts, c);
                B.pts = Math.max(B.pts, B.dts, 0);
                y = Math.min(B.pts, y);
                b = Math.max(B.pts, b);
              }
              h = f[m - 1].dts;
              var W = I + 4 * O + 8;
              try {
                s = new Uint8Array(W);
              } catch (t) {
                return void this.observer.trigger(r.default.ERROR, {
                  type: i.ErrorTypes.MUX_ERROR,
                  details: i.ErrorDetails.REMUX_ALLOC_ERROR,
                  fatal: !1,
                  bytes: W,
                  reason: "fail allocating video mdat " + W
                });
              }
              var q = new DataView(s.buffer);
              q.setUint32(0, W);
              s.set(D.types.mdat, 4);
              for (var Y = 0; Y < m; Y++) {
                for (Z = f[Y], K = Z.units, J = 0, $ = 0, Q = K.length, void 0; $ < Q; $++) {
                  var X;
                  var Z;
                  var K;
                  var J;
                  var $;
                  var Q;
                  var tt = K[$];
                  var et = tt.data;
                  var nt = tt.data.byteLength;
                  q.setUint32(g, nt);
                  g += 4;
                  s.set(et, g);
                  g += nt;
                  J += 4 + nt;
                }
                if (Y < m - 1) o = f[Y + 1].dts - Z.dts;else {
                  var rt = this.config;
                  var it = Z.dts - f[Y > 0 ? Y - 1 : Y].dts;
                  if (rt.stretchShortVideoTrack) {
                    var at = rt.maxBufferHole;
                    var ot = Math.floor(at * d);
                    var st = (a ? y + a * d : this.nextAudioPts) - Z.pts;
                    if (st > ot) {
                      if ((o = st - it) < 0) {
                        o = it;
                      }
                      l.logger.log("It is approximately " + N(st, !1) + " ms to the next segment; using duration " + N(o, !1) + " ms for the last video frame.");
                    } else {
                      o = it;
                    }
                  } else o = it;
                }
                X = Math.round(Z.pts - Z.dts);
                p.push({
                  size: J,
                  duration: o,
                  cts: X,
                  flags: {
                    isLeading: 0,
                    isDependedOn: 0,
                    hasRedundancy: 0,
                    degradPrio: 0,
                    dependsOn: Z.key ? 2 : 1,
                    isNonSync: Z.key ? 0 : 1
                  }
                });
              }
              this.nextAvcDts = h + o;
              var lt = t.dropped;
              t.nbNalu = 0;
              t.dropped = 0;
              if (p.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                var ut = p[0].flags;
                ut.dependsOn = 2, ut.isNonSync = 0;
              }
              t.samples = p;
              u = D.moof(t.sequenceNumber++, c, t);
              t.samples = [];
              var ct = {
                data1: u,
                data2: s,
                startPTS: y / d,
                endPTS: (b + o) / d,
                startDTS: c / d,
                endDTS: this.nextAvcDts / d,
                type: "video",
                hasAudio: !1,
                hasVideo: !0,
                nb: p.length,
                dropped: lt
              };
              this.observer.trigger(r.default.FRAG_PARSING_DATA, ct);
              return ct;
            }
          };
          e.remuxAudio = function (t, e, n, a) {
            var o;
            var s;
            var u;
            var c;
            var h;
            var d;
            var f = t.inputTimeScale;
            var p = t.timescale;
            var m = f / p;
            var v = (t.isAAC ? 1024 : 1152) * m;
            var g = this._initPTS;
            var y = !t.isAAC && this.typeSupported.mpeg;
            var b = y ? 0 : 8;
            var x = t.samples;
            var _ = [];
            var w = this.nextAudioPts;
            n |= x.length && w && (a && Math.abs(e - w / f) < 0.1 || Math.abs(x[0].pts - w - g) < 20 * v);
            x.forEach(function (t) {
              t.pts = t.dts = G(t.pts - g, e * f);
            });
            x = x.filter(function (t) {
              return t.pts >= 0;
            });
            if (0 !== x.length) {
              if (n || (w = a ? Math.max(0, e * f) : x[0].pts), t.isAAC) for (var S = this.config.maxAudioFramesDrift, E = 0, T = w; E < x.length;) {
                var M = x[E],
                  A = M.pts,
                  L = A - T;
                if (L <= -S * v) n || E > 0 ? (l.logger.warn("Dropping 1 audio frame @ " + N(T, !0) / 1e3 + "s due to " + N(L, !0) + " ms overlap."), x.splice(E, 1)) : (l.logger.warn("Audio frame @ " + N(A, !0) / 1e3 + "s overlaps nextAudioPts by " + N(L, !0) + " ms."), T = A + v, E++);else if (L >= S * v && L < F && T) {
                  var C = Math.round(L / v);
                  l.logger.warn("Injecting " + C + " audio frames @ " + N(T, !0) / 1e3 + "s due to " + N(L, !0) + " ms gap.");
                  for (var P = 0; P < C; P++) {
                    var O = Math.max(T, 0);
                    (s = R.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (l.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), s = M.unit.subarray()), x.splice(E, 0, {
                      unit: s,
                      pts: O,
                      dts: O
                    }), T += v, E++;
                  }
                  M.pts = M.dts = T, T += v, E++;
                } else Math.abs(L), M.pts = M.dts = T, T += v, E++;
              }
              for (var I = x.length, k = 0; I--;) k += x[I].unit.byteLength;
              for (var B = 0, U = x.length; B < U; B++) {
                var z = x[B],
                  H = z.unit,
                  j = z.pts;
                if (void 0 !== d && o) o.duration = Math.round((j - d) / m);else {
                  var V = j - w,
                    W = 0;
                  if (n && t.isAAC && V) {
                    if (V > 0 && V < F) W = Math.round((j - w) / v), l.logger.log(N(V, !0) + " ms hole between AAC samples detected,filling it"), W > 0 && ((s = R.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (s = H.subarray()), k += W * s.length);else if (V < -12) {
                      l.logger.log("drop overlapping AAC sample, expected/parsed/delta: " + N(w, !0) + " ms / " + N(j, !0) + " ms / " + N(-V, !0) + " ms"), k -= H.byteLength;
                      continue;
                    }
                    j = w;
                  }
                  if (h = j, !(k > 0)) return;
                  k += b;
                  try {
                    u = new Uint8Array(k);
                  } catch (t) {
                    return void this.observer.trigger(r.default.ERROR, {
                      type: i.ErrorTypes.MUX_ERROR,
                      details: i.ErrorDetails.REMUX_ALLOC_ERROR,
                      fatal: !1,
                      bytes: k,
                      reason: "fail allocating audio mdat " + k
                    });
                  }
                  y || (new DataView(u.buffer).setUint32(0, k), u.set(D.types.mdat, 4));
                  for (var q = 0; q < W; q++) (s = R.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (l.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), s = H.subarray()), u.set(s, b), b += s.byteLength, o = {
                    size: s.byteLength,
                    cts: 0,
                    duration: 1024,
                    flags: {
                      isLeading: 0,
                      isDependedOn: 0,
                      hasRedundancy: 0,
                      degradPrio: 0,
                      dependsOn: 1
                    }
                  }, _.push(o);
                }
                u.set(H, b);
                var Y = H.byteLength;
                b += Y, o = {
                  size: Y,
                  cts: 0,
                  duration: 0,
                  flags: {
                    isLeading: 0,
                    isDependedOn: 0,
                    hasRedundancy: 0,
                    degradPrio: 0,
                    dependsOn: 1
                  }
                }, _.push(o), d = j;
              }
              var X = 0;
              if ((I = _.length) >= 2 && (X = _[I - 2].duration, o.duration = X), I) {
                this.nextAudioPts = w = d + m * X, t.samples = _, c = y ? new Uint8Array() : D.moof(t.sequenceNumber++, h / m, t), t.samples = [];
                var Z = h / f,
                  K = w / f,
                  J = {
                    data1: c,
                    data2: u,
                    startPTS: Z,
                    endPTS: K,
                    startDTS: Z,
                    endDTS: K,
                    type: "audio",
                    hasAudio: !0,
                    hasVideo: !1,
                    nb: I
                  };
                return this.observer.trigger(r.default.FRAG_PARSING_DATA, J), J;
              }
              return null;
            }
          };
          e.remuxEmptyAudio = function (t, e, n, r) {
            var i = t.inputTimeScale;
            var a = i / (t.samplerate ? t.samplerate : i);
            var o = this.nextAudioPts;
            var s = (void 0 !== o ? o : r.startDTS * i) + this._initDTS;
            var u = r.endDTS * i + this._initDTS;
            var c = 1024 * a;
            var h = Math.ceil((u - s) / c);
            var d = R.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
            l.logger.warn("remux empty Audio");
            if (d) {
              for (var f = [], p = 0; p < h; p++) {
                var m = s + p * c;
                f.push({
                  unit: d,
                  pts: m,
                  dts: m
                });
              }
              t.samples = f, this.remuxAudio(t, e, n);
            } else l.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
          };
          e.remuxID3 = function (t, e) {
            var n = t.samples.length;
            if (n) {
              for (i = t.inputTimeScale, a = this._initPTS, o = this._initDTS, s = 0, void 0; s < n; s++) {
                var i;
                var a;
                var o;
                var s;
                var l = t.samples[s];
                l.pts = G(l.pts - a, e * i) / i;
                l.dts = G(l.dts - o, e * i) / i;
              }
              this.observer.trigger(r.default.FRAG_PARSING_METADATA, {
                samples: t.samples
              });
              t.samples = [];
            }
          };
          e.remuxText = function (t, e) {
            var n = t.samples.length;
            var i = t.inputTimeScale;
            var a = this._initPTS;
            if (n) {
              for (var o = 0; o < n; o++) {
                var s = t.samples[o];
                s.pts = G(s.pts - a, e * i) / i;
              }
              t.samples.sort(function (t, e) {
                return t.pts - e.pts;
              });
              this.observer.trigger(r.default.FRAG_PARSING_USERDATA, {
                samples: t.samples
              });
            }
            t.samples = [];
          };
          return t;
        }();
        var V = function () {
          function t(t) {
            this.observer = t;
          }
          var e = t.prototype;
          e.destroy = function () {};
          e.resetTimeStamp = function () {};
          e.resetInitSegment = function () {};
          e.remux = function (t, e, n, i, a, o, s, l) {
            var u = this.observer;
            var c = "";
            if (t) {
              c += "audio";
            }
            if (e) {
              c += "video";
            }
            u.trigger(r.default.FRAG_PARSING_DATA, {
              data1: l,
              startPTS: a,
              startDTS: a,
              type: c,
              hasAudio: !!t,
              hasVideo: !!e,
              nb: 1,
              dropped: 0
            });
            u.trigger(r.default.FRAG_PARSED);
          };
          return t;
        }();
        var W = Object(u.getSelfScope)();
        try {
          H = W.performance.now.bind(W.performance);
        } catch (t) {
          l.logger.debug("Unable to use Performance API on this environment");
          H = W.Date.now;
        }
        var q = function () {
          function t(t, e, n, r) {
            this.observer = t;
            this.typeSupported = e;
            this.config = n;
            this.vendor = r;
          }
          var e = t.prototype;
          e.destroy = function () {
            var t = this.demuxer;
            if (t) {
              t.destroy();
            }
          };
          e.push = function (t, e, n, i, a, o, s, l, u, c, d, f) {
            var p = this;
            if (t.byteLength > 0 && null != e && null != e.key && "AES-128" === e.method) {
              var m = this.decrypter;
              if (null == m) {
                m = this.decrypter = new h(this.observer, this.config);
              }
              var v = H();
              m.decrypt(t, e.key.buffer, e.iv.buffer, function (t) {
                var h = H();
                p.observer.trigger(r.default.FRAG_DECRYPTED, {
                  stats: {
                    tstart: v,
                    tdecrypt: h
                  }
                });
                p.pushDecrypted(new Uint8Array(t), e, new Uint8Array(n), i, a, o, s, l, u, c, d, f);
              });
            } else this.pushDecrypted(new Uint8Array(t), e, new Uint8Array(n), i, a, o, s, l, u, c, d, f);
          };
          e.pushDecrypted = function (t, e, n, a, o, s, l, u, c, h, d, f) {
            var p = this.demuxer;
            var m = this.remuxer;
            if (!p || l || u) {
              for (g = this.observer, y = this.typeSupported, b = this.config, x = [{
                demux: C,
                remux: j
              }, {
                demux: S.default,
                remux: V
              }, {
                demux: w,
                remux: j
              }, {
                demux: P,
                remux: j
              }], _ = 0, E = x.length, void 0; _ < E && !(v = x[_]).demux.probe(t); _++) {
                var v;
                var g;
                var y;
                var b;
                var x;
                var _;
                var E;
                ;
              }
              if (!v) return void g.trigger(r.default.ERROR, {
                type: i.ErrorTypes.MEDIA_ERROR,
                details: i.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: "no demux matching with content found"
              });
              if (m && m instanceof v.remux) {
                m = new v.remux(g, b, y, this.vendor);
              }
              if (p && p instanceof v.demux) {
                p = new v.demux(g, m, b, y);
                this.probe = v.demux.probe;
              }
              this.demuxer = p;
              this.remuxer = m;
            }
            if (l || u) {
              p.resetInitSegment(n, a, o, h);
              m.resetInitSegment();
            }
            if (l) {
              p.resetTimeStamp(f);
              m.resetTimeStamp(f);
            }
            if ("function" == typeof p.setDecryptData) {
              p.setDecryptData(e);
            }
            p.append(t, s, c, d);
          };
          return t;
        }();
        e.default = q;
      },
      "./src/demux/demuxer-worker.js": function (t, e, n) {
        "use strict";

        n.r(e);
        var r = n("./src/demux/demuxer-inline.js");
        var i = n("./src/events.js");
        var a = n("./src/utils/logger.js");
        var o = n("./node_modules/eventemitter3/index.js");
        e.default = function (t) {
          var e = new o.EventEmitter();
          e.trigger = function (t) {
            for (n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1, void 0; i < n; i++) {
              var n;
              var r;
              var i;
              r[i - 1] = arguments[i];
            }
            e.emit.apply(e, [t, t].concat(r));
          };
          e.off = function (t) {
            for (n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1, void 0; i < n; i++) {
              var n;
              var r;
              var i;
              r[i - 1] = arguments[i];
            }
            e.removeListener.apply(e, [t].concat(r));
          };
          var n = function (e, n) {
            t.postMessage({
              event: e,
              data: n
            });
          };
          t.addEventListener("message", function (i) {
            var o = i.data;
            switch (o.cmd) {
              case "init":
                var s = JSON.parse(o.config);
                t.demuxer = new r.default(e, o.typeSupported, s, o.vendor);
                Object(a.enableLogs)(s.debug);
                n("init", null);
                break;
              case "demux":
                t.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS);
            }
          });
          e.on(i.default.FRAG_DECRYPTED, n);
          e.on(i.default.FRAG_PARSING_INIT_SEGMENT, n);
          e.on(i.default.FRAG_PARSED, n);
          e.on(i.default.ERROR, n);
          e.on(i.default.FRAG_PARSING_METADATA, n);
          e.on(i.default.FRAG_PARSING_USERDATA, n);
          e.on(i.default.INIT_PTS_FOUND, n);
          e.on(i.default.FRAG_PARSING_DATA, function (e, n) {
            var r = [];
            var i = {
              event: e,
              data: n
            };
            if (n.data1) {
              i.data1 = n.data1.buffer;
              r.push(n.data1.buffer);
              delete n.data1;
            }
            if (n.data2) {
              i.data2 = n.data2.buffer;
              r.push(n.data2.buffer);
              delete n.data2;
            }
            t.postMessage(i, r);
          });
        };
      },
      "./src/demux/id3.js": function (t, e, n) {
        "use strict";

        n.r(e);
        n.d(e, "utf8ArrayToStr", function () {
          return s;
        });
        var r;
        var i = n("./src/utils/get-self-scope.js");
        var a = function () {
          function t() {}
          t.isHeader = function (t, e) {
            return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128;
          };
          t.isFooter = function (t, e) {
            return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128;
          };
          t.getID3Data = function (e, n) {
            for (r = n, i = 0, void 0; t.isHeader(e, n);) {
              var r;
              var i;
              i += 10;
              i += t._readSize(e, n + 6);
              if (t.isFooter(e, n + 10)) {
                i += 10;
              }
              n += i;
            }
            if (i > 0) return e.subarray(r, r + i);
          };
          t._readSize = function (t, e) {
            var n = 0;
            n = (127 & t[e]) << 21;
            n |= (127 & t[e + 1]) << 14;
            return (n |= (127 & t[e + 2]) << 7) | 127 & t[e + 3];
          };
          t.getTimeStamp = function (e) {
            for (n = t.getID3Frames(e), r = 0, void 0; r < n.length; r++) {
              var n;
              var r;
              var i = n[r];
              if (t.isTimeStampFrame(i)) return t._readTimeStamp(i);
            }
          };
          t.isTimeStampFrame = function (t) {
            return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info;
          };
          t._getFrameData = function (e) {
            var n = String.fromCharCode(e[0], e[1], e[2], e[3]);
            var r = t._readSize(e, 4);
            return {
              type: n,
              size: r,
              data: e.subarray(10, 10 + r)
            };
          };
          t.getID3Frames = function (e) {
            for (n = 0, r = [], void 0; t.isHeader(e, n);) {
              var n;
              var r;
              for (i = t._readSize(e, n + 6), a = (n += 10) + i, void 0; n + 8 < a;) {
                var i;
                var a;
                var o = t._getFrameData(e.subarray(n));
                var s = t._decodeFrame(o);
                if (s) {
                  r.push(s);
                }
                n += o.size + 10;
              }
              if (t.isFooter(e, n)) {
                n += 10;
              }
            }
            return r;
          };
          t._decodeFrame = function (e) {
            return "PRIV" === e.type ? t._decodePrivFrame(e) : "W" === e.type[0] ? t._decodeURLFrame(e) : t._decodeTextFrame(e);
          };
          t._readTimeStamp = function (t) {
            if (8 === t.data.byteLength) {
              var e = new Uint8Array(t.data);
              var n = 1 & e[3];
              var r = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
              r /= 45;
              if (n) {
                r += 47721858.84;
              }
              return Math.round(r);
            }
          };
          t._decodePrivFrame = function (e) {
            if (!(e.size < 2)) {
              var n = t._utf8ArrayToStr(e.data, !0);
              var r = new Uint8Array(e.data.subarray(n.length + 1));
              return {
                key: e.type,
                info: n,
                data: r.buffer
              };
            }
          };
          t._decodeTextFrame = function (e) {
            if (!(e.size < 2)) {
              if ("TXXX" === e.type) {
                var n = 1;
                var r = t._utf8ArrayToStr(e.data.subarray(n), !0);
                n += r.length + 1;
                var i = t._utf8ArrayToStr(e.data.subarray(n));
                return {
                  key: e.type,
                  info: r,
                  data: i
                };
              }
              var a = t._utf8ArrayToStr(e.data.subarray(1));
              return {
                key: e.type,
                data: a
              };
            }
          };
          t._decodeURLFrame = function (e) {
            if ("WXXX" === e.type) {
              if (e.size < 2) return;
              var n = 1;
              var r = t._utf8ArrayToStr(e.data.subarray(n), !0);
              n += r.length + 1;
              var i = t._utf8ArrayToStr(e.data.subarray(n));
              return {
                key: e.type,
                info: r,
                data: i
              };
            }
            var a = t._utf8ArrayToStr(e.data);
            return {
              key: e.type,
              data: a
            };
          };
          t._utf8ArrayToStr = function (t, e) {
            if (void 0 === e) {
              e = !1;
            }
            var n = o();
            if (n) {
              var r = n.decode(t);
              if (e) {
                var i = r.indexOf("\0");
                return -1 !== i ? r.substring(0, i) : r;
              }
              return r.replace(/\0/g, "");
            }
            for (u = t.length, c = "", h = 0, void 0; h < u;) {
              var a;
              var s;
              var l;
              var u;
              var c;
              var h;
              if (0 === (a = t[h++]) && e) return c;
              if (0 !== a && 3 !== a) switch (a >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  c += String.fromCharCode(a);
                  break;
                case 12:
                case 13:
                  s = t[h++];
                  c += String.fromCharCode((31 & a) << 6 | 63 & s);
                  break;
                case 14:
                  s = t[h++];
                  l = t[h++];
                  c += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | (63 & l) << 0);
              }
            }
            return c;
          };
          return t;
        }();
        function o() {
          var t = Object(i.getSelfScope)();
          if (r || void 0 === t.TextDecoder) {
            r = new t.TextDecoder("utf-8");
          }
          return r;
        }
        var s = a._utf8ArrayToStr;
        e.default = a;
      },
      "./src/demux/mp4demuxer.js": function (t, e, n) {
        "use strict";

        n.r(e);
        var r = n("./src/utils/logger.js");
        var i = n("./src/events.js");
        var a = Math.pow(2, 32) - 1;
        var o = function () {
          function t(t, e) {
            this.observer = t;
            this.remuxer = e;
          }
          var e = t.prototype;
          e.resetTimeStamp = function (t) {
            this.initPTS = t;
          };
          e.resetInitSegment = function (e, n, r, a) {
            if (e && e.byteLength) {
              var o = this.initData = t.parseInitSegment(e);
              if (null == n) {
                n = "mp4a.40.5";
              }
              if (null == r) {
                r = "avc1.42e01e";
              }
              var s = {};
              if (o.audio && o.video) {
                s.audiovideo = {
                  container: "video/mp4",
                  codec: n + "," + r,
                  initSegment: a ? e : null
                };
              } else {
                if (o.audio) {
                  s.audio = {
                    container: "audio/mp4",
                    codec: n,
                    initSegment: a ? e : null
                  };
                }
                if (o.video) {
                  s.video = {
                    container: "video/mp4",
                    codec: r,
                    initSegment: a ? e : null
                  };
                }
              }
              this.observer.trigger(i.default.FRAG_PARSING_INIT_SEGMENT, {
                tracks: s
              });
            } else {
              if (n) {
                this.audioCodec = n;
              }
              if (r) {
                this.videoCodec = r;
              }
            }
          };
          t.probe = function (e) {
            return t.findBox({
              data: e,
              start: 0,
              end: Math.min(e.length, 16384)
            }, ["moof"]).length > 0;
          };
          t.bin2str = function (t) {
            return String.fromCharCode.apply(null, t);
          };
          t.readUint16 = function (t, e) {
            if (t.data) {
              e += t.start;
              t = t.data;
            }
            var n = t[e] << 8 | t[e + 1];
            return n < 0 ? 65536 + n : n;
          };
          t.readUint32 = function (t, e) {
            if (t.data) {
              e += t.start;
              t = t.data;
            }
            var n = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
            return n < 0 ? 4294967296 + n : n;
          };
          t.writeUint32 = function (t, e, n) {
            if (t.data) {
              e += t.start;
              t = t.data;
            }
            t[e] = n >> 24;
            t[e + 1] = n >> 16 & 255;
            t[e + 2] = n >> 8 & 255;
            t[e + 3] = 255 & n;
          };
          t.findBox = function (e, n) {
            var r;
            var i;
            var a;
            var o;
            var s;
            var l;
            var u = [];
            if (e.data) {
              s = e.start;
              a = e.end;
              e = e.data;
            } else {
              s = 0;
              a = e.byteLength;
            }
            if (!n.length) return null;
            for (r = s; r < a;) {
              l = (i = t.readUint32(e, r)) > 1 ? r + i : a;
              if (t.bin2str(e.subarray(r + 4, r + 8)) === n[0]) {
                if (1 === n.length) {
                  u.push({
                    data: e,
                    start: r + 8,
                    end: l
                  });
                } else {
                  if ((o = t.findBox({
                    data: e,
                    start: r + 8,
                    end: l
                  }, n.slice(1))).length) {
                    u = u.concat(o);
                  }
                }
              }
              r = l;
            }
            return u;
          };
          t.parseSegmentIndex = function (e) {
            var n;
            var r = t.findBox(e, ["moov"])[0];
            var i = r ? r.end : null;
            var a = 0;
            var o = t.findBox(e, ["sidx"]);
            if (!o || !o[0]) return null;
            n = [];
            var s = (o = o[0]).data[0];
            a = 0 === s ? 8 : 16;
            var l = t.readUint32(o, a);
            a += 4;
            a += 0 === s ? 8 : 16;
            a += 2;
            var u = o.end + 0;
            var c = t.readUint16(o, a);
            a += 2;
            for (var h = 0; h < c; h++) {
              var d = a;
              var f = t.readUint32(o, d);
              d += 4;
              var p = 2147483647 & f;
              if (1 == (2147483648 & f) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
              var m = t.readUint32(o, d);
              d += 4;
              n.push({
                referenceSize: p,
                subsegmentDuration: m,
                info: {
                  duration: m / l,
                  start: u,
                  end: u + p - 1
                }
              });
              u += p;
              a = d += 4;
            }
            return {
              earliestPresentationTime: 0,
              timescale: l,
              version: s,
              referencesCount: c,
              references: n,
              moovEndOffset: i
            };
          };
          t.parseInitSegment = function (e) {
            var n = [];
            t.findBox(e, ["moov", "trak"]).forEach(function (e) {
              var i = t.findBox(e, ["tkhd"])[0];
              if (i) {
                var a = i.data[i.start];
                var o = 0 === a ? 12 : 20;
                var s = t.readUint32(i, o);
                var l = t.findBox(e, ["mdia", "mdhd"])[0];
                if (l) {
                  o = 0 === (a = l.data[l.start]) ? 12 : 20;
                  var u = t.readUint32(l, o);
                  var c = t.findBox(e, ["mdia", "hdlr"])[0];
                  if (c) {
                    var h = {
                      soun: "audio",
                      vide: "video"
                    }[t.bin2str(c.data.subarray(c.start + 8, c.start + 12))];
                    if (h) {
                      var d = t.findBox(e, ["mdia", "minf", "stbl", "stsd"]);
                      if (d.length) {
                        d = d[0];
                        var f = t.bin2str(d.data.subarray(d.start + 12, d.start + 16));
                        r.logger.log("MP4Demuxer:" + h + ":" + f + " found");
                      }
                      n[s] = {
                        timescale: u,
                        type: h
                      };
                      n[h] = {
                        timescale: u,
                        id: s
                      };
                    }
                  }
                }
              }
            });
            return n;
          };
          t.getStartDTS = function (e, n) {
            var r;
            var i;
            var a;
            r = t.findBox(n, ["moof", "traf"]);
            i = [].concat.apply([], r.map(function (n) {
              return t.findBox(n, ["tfhd"]).map(function (r) {
                var i;
                var a;
                var o;
                i = t.readUint32(r, 4);
                a = e[i].timescale || 9e4;
                o = t.findBox(n, ["tfdt"]).map(function (e) {
                  var n;
                  var r;
                  n = e.data[e.start];
                  r = t.readUint32(e, 4);
                  if (1 === n) {
                    r *= Math.pow(2, 32);
                    r += t.readUint32(e, 8);
                  }
                  return r;
                })[0];
                return o / a;
              });
            }));
            a = Math.min.apply(null, i);
            return isFinite(a) ? a : 0;
          };
          t.offsetStartDTS = function (e, n, r) {
            t.findBox(n, ["moof", "traf"]).map(function (n) {
              return t.findBox(n, ["tfhd"]).map(function (i) {
                var o = t.readUint32(i, 4);
                var s = e[o].timescale || 9e4;
                t.findBox(n, ["tfdt"]).map(function (e) {
                  var n = e.data[e.start];
                  var i = t.readUint32(e, 4);
                  if (0 === n) t.writeUint32(e, 4, i - r * s);else {
                    i *= Math.pow(2, 32);
                    i += t.readUint32(e, 8);
                    i -= r * s;
                    i = Math.max(i, 0);
                    var o = Math.floor(i / (a + 1));
                    var l = Math.floor(i % (a + 1));
                    t.writeUint32(e, 4, o);
                    t.writeUint32(e, 8, l);
                  }
                });
              });
            });
          };
          e.append = function (e, n, r, a) {
            var o = this.initData;
            if (o) {
              this.resetInitSegment(e, this.audioCodec, this.videoCodec, !1);
              o = this.initData;
            }
            var s;
            var l = this.initPTS;
            if (void 0 === l) {
              var u = t.getStartDTS(o, e);
              this.initPTS = l = u - n;
              this.observer.trigger(i.default.INIT_PTS_FOUND, {
                initPTS: l
              });
            }
            t.offsetStartDTS(o, e, l);
            s = t.getStartDTS(o, e);
            this.remuxer.remux(o.audio, o.video, null, null, s, r, a, e);
          };
          e.destroy = function () {};
          return t;
        }();
        e.default = o;
      },
      "./src/empty.js": function (t, e) {
        t.exports = void 0;
      },
      "./src/errors.ts": function (t, e, n) {
        "use strict";

        var r;
        var i;
        n.r(e);
        n.d(e, "ErrorTypes", function () {
          return r;
        });
        n.d(e, "ErrorDetails", function () {
          return i;
        });
        (function (t) {
          t.NETWORK_ERROR = "networkError";
          t.MEDIA_ERROR = "mediaError";
          t.KEY_SYSTEM_ERROR = "keySystemError";
          t.MUX_ERROR = "muxError";
          t.OTHER_ERROR = "otherError";
        })(r || (r = {}));
        (function (t) {
          t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys";
          t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess";
          t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession";
          t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed";
          t.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData";
          t.MANIFEST_LOAD_ERROR = "manifestLoadError";
          t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut";
          t.MANIFEST_PARSING_ERROR = "manifestParsingError";
          t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError";
          t.LEVEL_EMPTY_ERROR = "levelEmptyError";
          t.LEVEL_LOAD_ERROR = "levelLoadError";
          t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut";
          t.LEVEL_SWITCH_ERROR = "levelSwitchError";
          t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError";
          t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut";
          t.FRAG_LOAD_ERROR = "fragLoadError";
          t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut";
          t.FRAG_DECRYPT_ERROR = "fragDecryptError";
          t.FRAG_PARSING_ERROR = "fragParsingError";
          t.REMUX_ALLOC_ERROR = "remuxAllocError";
          t.KEY_LOAD_ERROR = "keyLoadError";
          t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut";
          t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError";
          t.BUFFER_APPEND_ERROR = "bufferAppendError";
          t.BUFFER_APPENDING_ERROR = "bufferAppendingError";
          t.BUFFER_STALLED_ERROR = "bufferStalledError";
          t.BUFFER_FULL_ERROR = "bufferFullError";
          t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole";
          t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall";
          t.INTERNAL_EXCEPTION = "internalException";
        })(i || (i = {}));
      },
      "./src/events.js": function (t, e, n) {
        "use strict";

        n.r(e);
        e.default = {
          MEDIA_ATTACHING: "hlsMediaAttaching",
          MEDIA_ATTACHED: "hlsMediaAttached",
          MEDIA_DETACHING: "hlsMediaDetaching",
          MEDIA_DETACHED: "hlsMediaDetached",
          BUFFER_RESET: "hlsBufferReset",
          BUFFER_CODECS: "hlsBufferCodecs",
          BUFFER_CREATED: "hlsBufferCreated",
          BUFFER_APPENDING: "hlsBufferAppending",
          BUFFER_APPENDED: "hlsBufferAppended",
          BUFFER_EOS: "hlsBufferEos",
          BUFFER_FLUSHING: "hlsBufferFlushing",
          BUFFER_FLUSHED: "hlsBufferFlushed",
          MANIFEST_LOADING: "hlsManifestLoading",
          MANIFEST_LOADED: "hlsManifestLoaded",
          MANIFEST_PARSED: "hlsManifestParsed",
          LEVEL_SWITCHING: "hlsLevelSwitching",
          LEVEL_SWITCHED: "hlsLevelSwitched",
          LEVEL_LOADING: "hlsLevelLoading",
          LEVEL_LOADED: "hlsLevelLoaded",
          LEVEL_UPDATED: "hlsLevelUpdated",
          LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
          LEVELS_UPDATED: "hlsLevelsUpdated",
          AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
          AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
          AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
          AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
          AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
          SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
          SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
          SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
          SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
          SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
          CUES_PARSED: "hlsCuesParsed",
          NON_NATIVE_TEXT_TRACKS_FOUND: "hlsNonNativeTextTracksFound",
          INIT_PTS_FOUND: "hlsInitPtsFound",
          FRAG_LOADING: "hlsFragLoading",
          FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
          FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
          FRAG_LOADED: "hlsFragLoaded",
          FRAG_DECRYPTED: "hlsFragDecrypted",
          FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
          FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
          FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
          FRAG_PARSING_DATA: "hlsFragParsingData",
          FRAG_PARSED: "hlsFragParsed",
          FRAG_BUFFERED: "hlsFragBuffered",
          FRAG_CHANGED: "hlsFragChanged",
          FPS_DROP: "hlsFpsDrop",
          FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
          ERROR: "hlsError",
          DESTROYING: "hlsDestroying",
          KEY_LOADING: "hlsKeyLoading",
          KEY_LOADED: "hlsKeyLoaded",
          STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
          LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached"
        };
      },
      "./src/hls.ts": function (t, e, n) {
        "use strict";

        n.r(e);
        n.d(e, "default", function () {
          return te;
        });
        var r;
        var i;
        var a = n("./node_modules/url-toolkit/src/url-toolkit.js");
        var o = n("./src/errors.ts");
        var s = n("./src/polyfills/number.js");
        var l = n("./src/events.js");
        var u = n("./src/utils/logger.js");
        var c = {
          hlsEventGeneric: !0,
          hlsHandlerDestroying: !0,
          hlsHandlerDestroyed: !0
        };
        var h = function () {
          function t(t) {
            this.hls = void 0;
            this.handledEvents = void 0;
            this.useGenericHandler = void 0;
            this.hls = t;
            this.onEvent = this.onEvent.bind(this);
            for (e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1, void 0; r < e; r++) {
              var e;
              var n;
              var r;
              n[r - 1] = arguments[r];
            }
            this.handledEvents = n;
            this.useGenericHandler = !0;
            this.registerListeners();
          }
          var e = t.prototype;
          e.destroy = function () {
            this.onHandlerDestroying();
            this.unregisterListeners();
            this.onHandlerDestroyed();
          };
          e.onHandlerDestroying = function () {};
          e.onHandlerDestroyed = function () {};
          e.isEventHandler = function () {
            return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent;
          };
          e.registerListeners = function () {
            if (this.isEventHandler()) {
              this.handledEvents.forEach(function (t) {
                if (c[t]) throw new Error("Forbidden event-name: " + t);
                this.hls.on(t, this.onEvent);
              }, this);
            }
          };
          e.unregisterListeners = function () {
            if (this.isEventHandler()) {
              this.handledEvents.forEach(function (t) {
                this.hls.off(t, this.onEvent);
              }, this);
            }
          };
          e.onEvent = function (t, e) {
            this.onEventGeneric(t, e);
          };
          e.onEventGeneric = function (t, e) {
            try {
              (function (t, e) {
                var n = "on" + t.replace("hls", "");
                if ("function" != typeof this[n]) throw new Error("Event " + t + " has no generic handler in this " + this.constructor.name + " class (tried " + n + ")");
                return this[n].bind(this, e);
              }).call(this, t, e).call();
            } catch (e) {
              u.logger.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e);
              this.hls.trigger(l.default.ERROR, {
                type: o.ErrorTypes.OTHER_ERROR,
                details: o.ErrorDetails.INTERNAL_EXCEPTION,
                fatal: !1,
                event: t,
                err: e
              });
            }
          };
          return t;
        }();
        var d = h;
        !function (t) {
          t.MANIFEST = "manifest";
          t.LEVEL = "level";
          t.AUDIO_TRACK = "audioTrack";
          t.SUBTITLE_TRACK = "subtitleTrack";
        }(r || (r = {}));
        (function (t) {
          t.MAIN = "main";
          t.AUDIO = "audio";
          t.SUBTITLE = "subtitle";
        })(i || (i = {}));
        var f = n("./src/demux/mp4demuxer.js");
        function p(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(t, r.key, r);
          }
        }
        var m;
        var v = function () {
          function t(t, e) {
            this._uri = null;
            this.baseuri = void 0;
            this.reluri = void 0;
            this.method = null;
            this.key = null;
            this.iv = null;
            this.baseuri = t;
            this.reluri = e;
          }
          var e;
          var n;
          e = t;
          if (n = [{
            key: "uri",
            get: function () {
              if (!this._uri && this.reluri) {
                this._uri = Object(a.buildAbsoluteURL)(this.baseuri, this.reluri, {
                  alwaysNormalize: !0
                });
              }
              return this._uri;
            }
          }]) {
            p(e.prototype, n);
          }
          return t;
        }();
        function g(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(t, r.key, r);
          }
        }
        !function (t) {
          t.AUDIO = "audio";
          t.VIDEO = "video";
        }(m || (m = {}));
        var y = function () {
          function t() {
            var t;
            this._url = null;
            this._byteRange = null;
            this._decryptdata = null;
            (t = {})[m.AUDIO] = !1;
            t[m.VIDEO] = !1;
            this._elementaryStreams = t;
            this.deltaPTS = 0;
            this.rawProgramDateTime = null;
            this.programDateTime = null;
            this.title = null;
            this.tagList = [];
            this.cc = void 0;
            this.type = void 0;
            this.relurl = void 0;
            this.baseurl = void 0;
            this.duration = void 0;
            this.start = void 0;
            this.sn = 0;
            this.urlId = 0;
            this.level = 0;
            this.levelkey = void 0;
            this.loader = void 0;
          }
          var e;
          var n;
          var r = t.prototype;
          r.setByteRange = function (t, e) {
            var n = t.split("@", 2);
            var r = [];
            if (1 === n.length) {
              r[0] = e ? e.byteRangeEndOffset : 0;
            } else {
              r[0] = parseInt(n[1]);
            }
            r[1] = parseInt(n[0]) + r[0];
            this._byteRange = r;
          };
          r.addElementaryStream = function (t) {
            this._elementaryStreams[t] = !0;
          };
          r.hasElementaryStream = function (t) {
            return !0 === this._elementaryStreams[t];
          };
          r.createInitializationVector = function (t) {
            for (e = new Uint8Array(16), n = 12, void 0; n < 16; n++) {
              var e;
              var n;
              e[n] = t >> 8 * (15 - n) & 255;
            }
            return e;
          };
          r.setDecryptDataFromLevelKey = function (t, e) {
            var n = t;
            if ((null == t ? void 0 : t.method) && t.uri && !t.iv) {
              (n = new v(t.baseuri, t.reluri)).method = t.method;
              n.iv = this.createInitializationVector(e);
            }
            return n;
          };
          e = t;
          if (n = [{
            key: "url",
            get: function () {
              if (!this._url && this.relurl) {
                this._url = Object(a.buildAbsoluteURL)(this.baseurl, this.relurl, {
                  alwaysNormalize: !0
                });
              }
              return this._url;
            },
            set: function (t) {
              this._url = t;
            }
          }, {
            key: "byteRange",
            get: function () {
              return this._byteRange ? this._byteRange : [];
            }
          }, {
            key: "byteRangeStartOffset",
            get: function () {
              return this.byteRange[0];
            }
          }, {
            key: "byteRangeEndOffset",
            get: function () {
              return this.byteRange[1];
            }
          }, {
            key: "decryptdata",
            get: function () {
              if (!this.levelkey && !this._decryptdata) return null;
              if (!this._decryptdata && this.levelkey) {
                var t = this.sn;
                if ("number" != typeof t) {
                  if (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv) {
                    u.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue');
                  }
                  t = 0;
                }
                this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t);
              }
              return this._decryptdata;
            }
          }, {
            key: "endProgramDateTime",
            get: function () {
              if (null === this.programDateTime) return null;
              if (!Object(s.isFiniteNumber)(this.programDateTime)) return null;
              var t = Object(s.isFiniteNumber)(this.duration) ? this.duration : 0;
              return this.programDateTime + 1e3 * t;
            }
          }, {
            key: "encrypted",
            get: function () {
              return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key);
            }
          }]) {
            g(e.prototype, n);
          }
          return t;
        }();
        function b(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(t, r.key, r);
          }
        }
        var x = function () {
          function t(t) {
            this.endCC = 0;
            this.endSN = 0;
            this.fragments = [];
            this.initSegment = null;
            this.live = !0;
            this.needSidxRanges = !1;
            this.startCC = 0;
            this.startSN = 0;
            this.startTimeOffset = null;
            this.targetduration = 0;
            this.totalduration = 0;
            this.type = null;
            this.url = t;
            this.version = null;
          }
          var e;
          var n;
          e = t;
          if (n = [{
            key: "hasProgramDateTime",
            get: function () {
              return !(!this.fragments[0] || !Object(s.isFiniteNumber)(this.fragments[0].programDateTime));
            }
          }]) {
            b(e.prototype, n);
          }
          return t;
        }();
        var _ = /^(\d+)x(\d+)$/;
        var w = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g;
        var S = function () {
          function t(e) {
            for (var n in "string" == typeof e && (e = t.parseAttrList(e)), e) if (e.hasOwnProperty(n)) {
              this[n] = e[n];
            }
          }
          var e = t.prototype;
          e.decimalInteger = function (t) {
            var e = parseInt(this[t], 10);
            return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
          };
          e.hexadecimalInteger = function (t) {
            if (this[t]) {
              var e = (this[t] || "0x").slice(2);
              e = (1 & e.length ? "0" : "") + e;
              for (n = new Uint8Array(e.length / 2), r = 0, void 0; r < e.length / 2; r++) {
                var n;
                var r;
                n[r] = parseInt(e.slice(2 * r, 2 * r + 2), 16);
              }
              return n;
            }
            return null;
          };
          e.hexadecimalIntegerAsNumber = function (t) {
            var e = parseInt(this[t], 16);
            return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
          };
          e.decimalFloatingPoint = function (t) {
            return parseFloat(this[t]);
          };
          e.enumeratedString = function (t) {
            return this[t];
          };
          e.decimalResolution = function (t) {
            var e = _.exec(this[t]);
            if (null !== e) return {
              width: parseInt(e[1], 10),
              height: parseInt(e[2], 10)
            };
          };
          t.parseAttrList = function (t) {
            var e;
            var n = {};
            for (w.lastIndex = 0; null !== (e = w.exec(t));) {
              var r = e[2];
              if (0 === r.indexOf('"') && r.lastIndexOf('"') === r.length - 1) {
                r = r.slice(1, -1);
              }
              n[e[1]] = r;
            }
            return n;
          };
          return t;
        }();
        var E = {
          audio: {
            a3ds: !0,
            "ac-3": !0,
            "ac-4": !0,
            alac: !0,
            alaw: !0,
            dra1: !0,
            "dts+": !0,
            "dts-": !0,
            dtsc: !0,
            dtse: !0,
            dtsh: !0,
            "ec-3": !0,
            enca: !0,
            g719: !0,
            g726: !0,
            m4ae: !0,
            mha1: !0,
            mha2: !0,
            mhm1: !0,
            mhm2: !0,
            mlpa: !0,
            mp4a: !0,
            "raw ": !0,
            Opus: !0,
            samr: !0,
            sawb: !0,
            sawp: !0,
            sevc: !0,
            sqcp: !0,
            ssmv: !0,
            twos: !0,
            ulaw: !0
          },
          video: {
            avc1: !0,
            avc2: !0,
            avc3: !0,
            avc4: !0,
            avcp: !0,
            drac: !0,
            dvav: !0,
            dvhe: !0,
            encv: !0,
            hev1: !0,
            hvc1: !0,
            mjp2: !0,
            mp4v: !0,
            mvc1: !0,
            mvc2: !0,
            mvc3: !0,
            mvc4: !0,
            resv: !0,
            rv60: !0,
            s263: !0,
            svc1: !0,
            svc2: !0,
            "vc-1": !0,
            vp08: !0,
            vp09: !0
          }
        };
        function T(t, e) {
          return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"');
        }
        var M = /(?:#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+)/g;
        var A = /#EXT-X-MEDIA:(.*)/g;
        var L = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g");
        var C = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/;
        var P = /\.(mp4|m4s|m4v|m4a)$/i;
        var R = function () {
          function t() {}
          t.findGroup = function (t, e) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              if (r.id === e) return r;
            }
          };
          t.convertAVC1ToAVCOTI = function (t) {
            var e;
            var n = t.split(".");
            if (n.length > 2) {
              e = n.shift() + ".";
              e += parseInt(n.shift()).toString(16);
              e += ("000" + parseInt(n.shift()).toString(16)).substr(-4);
            } else {
              e = t;
            }
            return e;
          };
          t.resolve = function (t, e) {
            return a.buildAbsoluteURL(e, t, {
              alwaysNormalize: !0
            });
          };
          t.parseMasterPlaylist = function (e, n) {
            var r;
            var i = [];
            var a = {};
            var o = !1;
            function s(t, e) {
              ["video", "audio"].forEach(function (n) {
                var r = t.filter(function (t) {
                  return function (t, e) {
                    var n = E[e];
                    return !!n && !0 === n[t.slice(0, 4)];
                  }(t, n);
                });
                if (r.length) {
                  var i = r.filter(function (t) {
                    return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0);
                  });
                  e[n + "Codec"] = i.length > 0 ? i[0] : r[0];
                  t = t.filter(function (t) {
                    return -1 === r.indexOf(t);
                  });
                }
              });
              e.unknownCodecs = t;
            }
            for (M.lastIndex = 0; null != (r = M.exec(e));) if (r[1]) {
              var l = {};
              var u = l.attrs = new S(r[1]);
              l.url = t.resolve(r[2], n);
              var c = u.decimalResolution("RESOLUTION");
              if (c) {
                l.width = c.width;
                l.height = c.height;
              }
              l.bitrate = u.decimalInteger("AVERAGE-BANDWIDTH") || u.decimalInteger("BANDWIDTH");
              l.name = u.NAME;
              s([].concat((u.CODECS || "").split(/[ ,]+/)), l);
              if (l.videoCodec && -1 !== l.videoCodec.indexOf("avc1")) {
                l.videoCodec = t.convertAVC1ToAVCOTI(l.videoCodec);
              }
              i.push(l);
            } else if (r[3]) {
              var h = new S(r[3]);
              if (h["DATA-ID"]) {
                o = !0;
                a[h["DATA-ID"]] = h;
              }
            }
            return {
              levels: i,
              sessionData: o ? a : null
            };
          };
          t.parseMasterPlaylistMedia = function (e, n, r, i) {
            var a;
            if (void 0 === i) {
              i = [];
            }
            var o = [];
            var s = 0;
            for (A.lastIndex = 0; null !== (a = A.exec(e));) {
              var l = new S(a[1]);
              if (l.TYPE === r) {
                var u = {
                  attrs: l,
                  id: s++,
                  groupId: l["GROUP-ID"],
                  instreamId: l["INSTREAM-ID"],
                  name: l.NAME || l.LANGUAGE,
                  type: r,
                  default: "YES" === l.DEFAULT,
                  autoselect: "YES" === l.AUTOSELECT,
                  forced: "YES" === l.FORCED,
                  lang: l.LANGUAGE
                };
                if (l.URI) {
                  u.url = t.resolve(l.URI, n);
                }
                if (i.length) {
                  var c = t.findGroup(i, u.groupId);
                  u.audioCodec = c ? c.codec : i[0].codec;
                }
                o.push(u);
              }
            }
            return o;
          };
          t.parseLevelPlaylist = function (t, e, n, r, i) {
            var a;
            var o;
            var l;
            var c = 0;
            var h = 0;
            var d = new x(e);
            var f = 0;
            var p = null;
            var m = new y();
            var g = null;
            for (L.lastIndex = 0; null !== (a = L.exec(t));) {
              var b = a[1];
              if (b) {
                m.duration = parseFloat(b);
                var _ = (" " + a[2]).slice(1);
                m.title = _ || null;
                m.tagList.push(_ ? ["INF", b, _] : ["INF", b]);
              } else if (a[3]) {
                if (Object(s.isFiniteNumber)(m.duration)) {
                  var w = c++;
                  m.type = r;
                  m.start = h;
                  if (l) {
                    m.levelkey = l;
                  }
                  m.sn = w;
                  m.level = n;
                  m.cc = f;
                  m.urlId = i;
                  m.baseurl = e;
                  m.relurl = (" " + a[3]).slice(1);
                  O(m, p);
                  d.fragments.push(m);
                  p = m;
                  h += m.duration;
                  m = new y();
                }
              } else if (a[4]) {
                var E = (" " + a[4]).slice(1);
                if (p) {
                  m.setByteRange(E, p);
                } else {
                  m.setByteRange(E);
                }
              } else if (a[5]) {
                m.rawProgramDateTime = (" " + a[5]).slice(1);
                m.tagList.push(["PROGRAM-DATE-TIME", m.rawProgramDateTime]);
                if (null === g) {
                  g = d.fragments.length;
                }
              } else {
                if (!(a = a[0].match(C))) {
                  u.logger.warn("No matches on slow regex match for level playlist!");
                  continue;
                }
                for (o = 1; o < a.length && void 0 === a[o]; o++);
                var T = (" " + a[o + 1]).slice(1);
                var M = (" " + a[o + 2]).slice(1);
                switch (a[o]) {
                  case "#":
                    m.tagList.push(M ? [T, M] : [T]);
                    break;
                  case "PLAYLIST-TYPE":
                    d.type = T.toUpperCase();
                    break;
                  case "MEDIA-SEQUENCE":
                    c = d.startSN = parseInt(T);
                    break;
                  case "TARGETDURATION":
                    d.targetduration = parseFloat(T);
                    break;
                  case "VERSION":
                    d.version = parseInt(T);
                    break;
                  case "EXTM3U":
                    break;
                  case "ENDLIST":
                    d.live = !1;
                    break;
                  case "DIS":
                    f++;
                    m.tagList.push(["DIS"]);
                    break;
                  case "DISCONTINUITY-SEQ":
                    f = parseInt(T);
                    break;
                  case "KEY":
                    var A = new S(T);
                    var R = A.enumeratedString("METHOD");
                    var I = A.URI;
                    var D = A.hexadecimalInteger("IV");
                    if ("com.apple.streamingkeydelivery" === (A.KEYFORMAT || "identity")) {
                      u.logger.warn("Keyformat com.apple.streamingkeydelivery is not supported");
                      continue;
                    }
                    if (R) {
                      l = new v(e, I);
                      if (I && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(R) >= 0) {
                        l.method = R;
                        l.key = null;
                        l.iv = D;
                      }
                    }
                    break;
                  case "START":
                    var k = new S(T).decimalFloatingPoint("TIME-OFFSET");
                    if (Object(s.isFiniteNumber)(k)) {
                      d.startTimeOffset = k;
                    }
                    break;
                  case "MAP":
                    var N = new S(T);
                    m.relurl = N.URI;
                    if (N.BYTERANGE) {
                      m.setByteRange(N.BYTERANGE);
                    }
                    m.baseurl = e;
                    m.level = n;
                    m.type = r;
                    m.sn = "initSegment";
                    d.initSegment = m;
                    (m = new y()).rawProgramDateTime = d.initSegment.rawProgramDateTime;
                    break;
                  default:
                    u.logger.warn("line parsed but not handled: " + a);
                }
              }
            }
            if ((m = p) && !m.relurl) {
              d.fragments.pop();
              h -= m.duration;
            }
            d.totalduration = h;
            d.averagetargetduration = h / d.fragments.length;
            d.endSN = c - 1;
            d.startCC = d.fragments[0] ? d.fragments[0].cc : 0;
            d.endCC = f;
            if (!d.initSegment && d.fragments.length && d.fragments.every(function (t) {
              return P.test(t.relurl);
            })) {
              u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX");
              (m = new y()).relurl = d.fragments[0].relurl;
              m.baseurl = e;
              m.level = n;
              m.type = r;
              m.sn = "initSegment";
              d.initSegment = m;
              d.needSidxRanges = !0;
            }
            if (g) {
              (function (t, e) {
                for (n = t[e], r = e - 1, void 0; r >= 0; r--) {
                  var n;
                  var r;
                  var i = t[r];
                  i.programDateTime = n.programDateTime - 1e3 * i.duration;
                  n = i;
                }
              })(d.fragments, g);
            }
            return d;
          };
          return t;
        }();
        function O(t, e) {
          if (t.rawProgramDateTime) {
            t.programDateTime = Date.parse(t.rawProgramDateTime);
          } else {
            if (null == e ? void 0 : e.programDateTime) {
              t.programDateTime = e.endProgramDateTime;
            }
          }
          if (Object(s.isFiniteNumber)(t.programDateTime)) {
            t.programDateTime = null;
            t.rawProgramDateTime = null;
          }
        }
        var I = window.performance;
        var D = function (t) {
          var e;
          var n;
          function a(e) {
            var n;
            (n = t.call(this, e, l.default.MANIFEST_LOADING, l.default.LEVEL_LOADING, l.default.AUDIO_TRACK_LOADING, l.default.SUBTITLE_TRACK_LOADING) || this).loaders = {};
            return n;
          }
          n = t;
          (e = a).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          a.canHaveQualityLevels = function (t) {
            return t !== r.AUDIO_TRACK && t !== r.SUBTITLE_TRACK;
          };
          a.mapContextToLevelType = function (t) {
            switch (t.type) {
              case r.AUDIO_TRACK:
                return i.AUDIO;
              case r.SUBTITLE_TRACK:
                return i.SUBTITLE;
              default:
                return i.MAIN;
            }
          };
          a.getResponseUrl = function (t, e) {
            var n = t.url;
            if (void 0 !== n && 0 !== n.indexOf("data:")) {
              n = e.url;
            }
            return n;
          };
          var c = a.prototype;
          c.createInternalLoader = function (t) {
            var e = this.hls.config;
            var n = e.pLoader;
            var r = e.loader;
            var i = new (n || r)(e);
            t.loader = i;
            this.loaders[t.type] = i;
            return i;
          };
          c.getInternalLoader = function (t) {
            return this.loaders[t.type];
          };
          c.resetInternalLoader = function (t) {
            if (this.loaders[t]) {
              delete this.loaders[t];
            }
          };
          c.destroyInternalLoaders = function () {
            for (var t in this.loaders) {
              var e = this.loaders[t];
              if (e) {
                e.destroy();
              }
              this.resetInternalLoader(t);
            }
          };
          c.destroy = function () {
            this.destroyInternalLoaders();
            t.prototype.destroy.call(this);
          };
          c.onManifestLoading = function (t) {
            this.load({
              url: t.url,
              type: r.MANIFEST,
              level: 0,
              id: null,
              responseType: "text"
            });
          };
          c.onLevelLoading = function (t) {
            this.load({
              url: t.url,
              type: r.LEVEL,
              level: t.level,
              id: t.id,
              responseType: "text"
            });
          };
          c.onAudioTrackLoading = function (t) {
            this.load({
              url: t.url,
              type: r.AUDIO_TRACK,
              level: null,
              id: t.id,
              responseType: "text"
            });
          };
          c.onSubtitleTrackLoading = function (t) {
            this.load({
              url: t.url,
              type: r.SUBTITLE_TRACK,
              level: null,
              id: t.id,
              responseType: "text"
            });
          };
          c.load = function (t) {
            var e = this.hls.config;
            u.logger.debug("Loading playlist of type " + t.type + ", level: " + t.level + ", id: " + t.id);
            var n;
            var i;
            var a;
            var o;
            var s = this.getInternalLoader(t);
            if (s) {
              var l = s.context;
              if (l && l.url === t.url) {
                u.logger.trace("playlist request ongoing");
                return !1;
              }
              u.logger.warn("aborting previous loader for type: " + t.type);
              s.abort();
            }
            switch (t.type) {
              case r.MANIFEST:
                n = e.manifestLoadingMaxRetry;
                i = e.manifestLoadingTimeOut;
                a = e.manifestLoadingRetryDelay;
                o = e.manifestLoadingMaxRetryTimeout;
                break;
              case r.LEVEL:
                n = 0;
                o = 0;
                a = 0;
                i = e.levelLoadingTimeOut;
                break;
              default:
                n = e.levelLoadingMaxRetry;
                i = e.levelLoadingTimeOut;
                a = e.levelLoadingRetryDelay;
                o = e.levelLoadingMaxRetryTimeout;
            }
            s = this.createInternalLoader(t);
            var c = {
              timeout: i,
              maxRetry: n,
              retryDelay: a,
              maxRetryDelay: o
            };
            var h = {
              onSuccess: this.loadsuccess.bind(this),
              onError: this.loaderror.bind(this),
              onTimeout: this.loadtimeout.bind(this)
            };
            u.logger.debug("Calling internal loader delegate for URL: " + t.url);
            s.load(t, c, h);
            return !0;
          };
          c.loadsuccess = function (t, e, n, r) {
            if (void 0 === r) {
              r = null;
            }
            if (n.isSidxRequest) return this._handleSidxRequest(t, n), void this._handlePlaylistLoaded(t, e, n, r);
            this.resetInternalLoader(n.type);
            if ("string" != typeof t.data) throw new Error('expected responseType of "text" for PlaylistLoader');
            var i = t.data;
            e.tload = I.now();
            if (0 === i.indexOf("#EXTM3U")) {
              if (i.indexOf("#EXTINF:") > 0 || i.indexOf("#EXT-X-TARGETDURATION:") > 0) {
                this._handleTrackOrLevelPlaylist(t, e, n, r);
              } else {
                this._handleMasterPlaylist(t, e, n, r);
              }
            } else {
              this._handleManifestParsingError(t, n, "no EXTM3U delimiter", r);
            }
          };
          c.loaderror = function (t, e, n) {
            if (void 0 === n) {
              n = null;
            }
            this._handleNetworkError(e, n, !1, t);
          };
          c.loadtimeout = function (t, e, n) {
            if (void 0 === n) {
              n = null;
            }
            this._handleNetworkError(e, n, !0);
          };
          c._handleMasterPlaylist = function (t, e, n, r) {
            var i = this.hls;
            var o = t.data;
            var s = a.getResponseUrl(t, n);
            var c = R.parseMasterPlaylist(o, s);
            var h = c.levels;
            var d = c.sessionData;
            if (h.length) {
              var f = h.map(function (t) {
                return {
                  id: t.attrs.AUDIO,
                  codec: t.audioCodec
                };
              });
              var p = R.parseMasterPlaylistMedia(o, s, "AUDIO", f);
              var m = R.parseMasterPlaylistMedia(o, s, "SUBTITLES");
              var v = R.parseMasterPlaylistMedia(o, s, "CLOSED-CAPTIONS");
              if (p.length) {
                var g = !1;
                p.forEach(function (t) {
                  if (t.url) {
                    g = !0;
                  }
                });
                if (!1 === g && h[0].audioCodec && !h[0].attrs.AUDIO) {
                  u.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one");
                  p.unshift({
                    type: "main",
                    name: "main",
                    default: !1,
                    autoselect: !1,
                    forced: !1,
                    id: -1,
                    attrs: {},
                    url: ""
                  });
                }
              }
              i.trigger(l.default.MANIFEST_LOADED, {
                levels: h,
                audioTracks: p,
                subtitles: m,
                captions: v,
                url: s,
                stats: e,
                networkDetails: r,
                sessionData: d
              });
            } else this._handleManifestParsingError(t, n, "no level found in manifest", r);
          };
          c._handleTrackOrLevelPlaylist = function (t, e, n, i) {
            var u = this.hls;
            var c = n.id;
            var h = n.level;
            var d = n.type;
            var f = a.getResponseUrl(t, n);
            var p = Object(s.isFiniteNumber)(c) ? c : 0;
            var m = Object(s.isFiniteNumber)(h) ? h : p;
            var v = a.mapContextToLevelType(n);
            var g = R.parseLevelPlaylist(t.data, f, m, v, p);
            g.tload = e.tload;
            if (g.fragments.length) {
              if (d === r.MANIFEST) {
                var y = {
                  url: f,
                  details: g
                };
                u.trigger(l.default.MANIFEST_LOADED, {
                  levels: [y],
                  audioTracks: [],
                  url: f,
                  stats: e,
                  networkDetails: i,
                  sessionData: null
                });
              }
              if (e.tparsed = I.now(), g.needSidxRanges) {
                var b = g.initSegment.url;
                this.load({
                  url: b,
                  isSidxRequest: !0,
                  type: d,
                  level: h,
                  levelDetails: g,
                  id: c,
                  rangeStart: 0,
                  rangeEnd: 2048,
                  responseType: "arraybuffer"
                });
              } else n.levelDetails = g, this._handlePlaylistLoaded(t, e, n, i);
            } else u.trigger(l.default.ERROR, {
              type: o.ErrorTypes.NETWORK_ERROR,
              details: o.ErrorDetails.LEVEL_EMPTY_ERROR,
              fatal: !1,
              url: f,
              reason: "no fragments found in level",
              level: "number" == typeof n.level ? n.level : void 0
            });
          };
          c._handleSidxRequest = function (t, e) {
            if ("string" == typeof t.data) throw new Error("sidx request must be made with responseType of array buffer");
            var n = f.default.parseSegmentIndex(new Uint8Array(t.data));
            if (n) {
              var r = n.references;
              var i = e.levelDetails;
              r.forEach(function (t, e) {
                var n = t.info;
                if (i) {
                  var r = i.fragments[e];
                  if (0 === r.byteRange.length) {
                    r.setByteRange(String(1 + n.end - n.start) + "@" + String(n.start));
                  }
                }
              });
              if (i) {
                i.initSegment.setByteRange(String(n.moovEndOffset) + "@0");
              }
            }
          };
          c._handleManifestParsingError = function (t, e, n, r) {
            this.hls.trigger(l.default.ERROR, {
              type: o.ErrorTypes.NETWORK_ERROR,
              details: o.ErrorDetails.MANIFEST_PARSING_ERROR,
              fatal: !0,
              url: t.url,
              reason: n,
              networkDetails: r
            });
          };
          c._handleNetworkError = function (t, e, n, i) {
            var a;
            var s;
            if (void 0 === n) {
              n = !1;
            }
            if (void 0 === i) {
              i = null;
            }
            u.logger.info("A network error occured while loading a " + t.type + "-type playlist");
            var c = this.getInternalLoader(t);
            switch (t.type) {
              case r.MANIFEST:
                a = n ? o.ErrorDetails.MANIFEST_LOAD_TIMEOUT : o.ErrorDetails.MANIFEST_LOAD_ERROR;
                s = !0;
                break;
              case r.LEVEL:
                a = n ? o.ErrorDetails.LEVEL_LOAD_TIMEOUT : o.ErrorDetails.LEVEL_LOAD_ERROR;
                s = !1;
                break;
              case r.AUDIO_TRACK:
                a = n ? o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR;
                s = !1;
                break;
              default:
                s = !1;
            }
            if (c) {
              c.abort();
              this.resetInternalLoader(t.type);
            }
            var h = {
              type: o.ErrorTypes.NETWORK_ERROR,
              details: a,
              fatal: s,
              url: t.url,
              loader: c,
              context: t,
              networkDetails: e
            };
            if (i) {
              h.response = i;
            }
            this.hls.trigger(l.default.ERROR, h);
          };
          c._handlePlaylistLoaded = function (t, e, n, i) {
            var o = n.type;
            var s = n.level;
            var u = n.id;
            var c = n.levelDetails;
            if (c && c.targetduration) {
              if (a.canHaveQualityLevels(n.type)) this.hls.trigger(l.default.LEVEL_LOADED, {
                details: c,
                level: s || 0,
                id: u || 0,
                stats: e,
                networkDetails: i
              });else switch (o) {
                case r.AUDIO_TRACK:
                  this.hls.trigger(l.default.AUDIO_TRACK_LOADED, {
                    details: c,
                    id: u,
                    stats: e,
                    networkDetails: i
                  });
                  break;
                case r.SUBTITLE_TRACK:
                  this.hls.trigger(l.default.SUBTITLE_TRACK_LOADED, {
                    details: c,
                    id: u,
                    stats: e,
                    networkDetails: i
                  });
              }
            } else this._handleManifestParsingError(t, n, "invalid target duration", i);
          };
          return a;
        }(d);
        var k = function (t) {
          var e;
          var n;
          function r(e) {
            var n;
            (n = t.call(this, e, l.default.FRAG_LOADING) || this).loaders = {};
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i = r.prototype;
          i.destroy = function () {
            var e = this.loaders;
            for (var n in e) {
              var r = e[n];
              if (r) {
                r.destroy();
              }
            }
            this.loaders = {};
            t.prototype.destroy.call(this);
          };
          i.onFragLoading = function (t) {
            var e = t.frag;
            var n = e.type;
            var r = this.loaders;
            var i = this.hls.config;
            var a = i.fLoader;
            var o = i.loader;
            e.loaded = 0;
            var l;
            var c;
            var h;
            var d = r[n];
            if (d) {
              u.logger.warn("abort previous fragment loader for type: " + n);
              d.abort();
            }
            d = r[n] = e.loader = i.fLoader ? new a(i) : new o(i);
            l = {
              url: e.url,
              frag: e,
              responseType: "arraybuffer",
              progressData: !1
            };
            var f = e.byteRangeStartOffset;
            var p = e.byteRangeEndOffset;
            if (Object(s.isFiniteNumber)(f) && Object(s.isFiniteNumber)(p)) {
              l.rangeStart = f;
              l.rangeEnd = p;
            }
            c = {
              timeout: i.fragLoadingTimeOut,
              maxRetry: 0,
              retryDelay: 0,
              maxRetryDelay: i.fragLoadingMaxRetryTimeout
            };
            h = {
              onSuccess: this.loadsuccess.bind(this),
              onError: this.loaderror.bind(this),
              onTimeout: this.loadtimeout.bind(this),
              onProgress: this.loadprogress.bind(this)
            };
            d.load(l, c, h);
          };
          i.loadsuccess = function (t, e, n, r) {
            if (void 0 === r) {
              r = null;
            }
            var i = t.data;
            var a = n.frag;
            a.loader = void 0;
            this.loaders[a.type] = void 0;
            this.hls.trigger(l.default.FRAG_LOADED, {
              payload: i,
              frag: a,
              stats: e,
              networkDetails: r
            });
          };
          i.loaderror = function (t, e, n) {
            if (void 0 === n) {
              n = null;
            }
            var r = e.frag;
            var i = r.loader;
            if (i) {
              i.abort();
            }
            this.loaders[r.type] = void 0;
            this.hls.trigger(l.default.ERROR, {
              type: o.ErrorTypes.NETWORK_ERROR,
              details: o.ErrorDetails.FRAG_LOAD_ERROR,
              fatal: !1,
              frag: e.frag,
              response: t,
              networkDetails: n
            });
          };
          i.loadtimeout = function (t, e, n) {
            if (void 0 === n) {
              n = null;
            }
            var r = e.frag;
            var i = r.loader;
            if (i) {
              i.abort();
            }
            this.loaders[r.type] = void 0;
            this.hls.trigger(l.default.ERROR, {
              type: o.ErrorTypes.NETWORK_ERROR,
              details: o.ErrorDetails.FRAG_LOAD_TIMEOUT,
              fatal: !1,
              frag: e.frag,
              networkDetails: n
            });
          };
          i.loadprogress = function (t, e, n, r) {
            if (void 0 === r) {
              r = null;
            }
            var i = e.frag;
            i.loaded = t.loaded;
            this.hls.trigger(l.default.FRAG_LOAD_PROGRESS, {
              frag: i,
              stats: t,
              networkDetails: r
            });
          };
          return r;
        }(d);
        var N = function (t) {
          var e;
          var n;
          function r(e) {
            var n;
            (n = t.call(this, e, l.default.KEY_LOADING) || this).loaders = {};
            n.decryptkey = null;
            n.decrypturl = null;
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i = r.prototype;
          i.destroy = function () {
            for (var e in this.loaders) {
              var n = this.loaders[e];
              if (n) {
                n.destroy();
              }
            }
            this.loaders = {};
            t.prototype.destroy.call(this);
          };
          i.onKeyLoading = function (t) {
            var e = t.frag;
            var n = e.type;
            var r = this.loaders[n];
            if (e.decryptdata) {
              var i = e.decryptdata.uri;
              if (i !== this.decrypturl || null === this.decryptkey) {
                var a = this.hls.config;
                if (r) {
                  u.logger.warn("abort previous key loader for type:" + n);
                  r.abort();
                }
                if (!i) return void u.logger.warn("key uri is falsy");
                e.loader = this.loaders[n] = new a.loader(a);
                this.decrypturl = i;
                this.decryptkey = null;
                var o = {
                  url: i,
                  frag: e,
                  responseType: "arraybuffer"
                };
                var s = {
                  timeout: a.fragLoadingTimeOut,
                  maxRetry: 0,
                  retryDelay: a.fragLoadingRetryDelay,
                  maxRetryDelay: a.fragLoadingMaxRetryTimeout
                };
                var c = {
                  onSuccess: this.loadsuccess.bind(this),
                  onError: this.loaderror.bind(this),
                  onTimeout: this.loadtimeout.bind(this)
                };
                e.loader.load(o, s, c);
              } else if (this.decryptkey) {
                e.decryptdata.key = this.decryptkey;
                this.hls.trigger(l.default.KEY_LOADED, {
                  frag: e
                });
              }
            } else u.logger.warn("Missing decryption data on fragment in onKeyLoading");
          };
          i.loadsuccess = function (t, e, n) {
            var r = n.frag;
            if (r.decryptdata) {
              this.decryptkey = r.decryptdata.key = new Uint8Array(t.data);
              r.loader = void 0;
              delete this.loaders[r.type];
              this.hls.trigger(l.default.KEY_LOADED, {
                frag: r
              });
            } else {
              u.logger.error("after key load, decryptdata unset");
            }
          };
          i.loaderror = function (t, e) {
            var n = e.frag;
            var r = n.loader;
            if (r) {
              r.abort();
            }
            delete this.loaders[n.type];
            this.hls.trigger(l.default.ERROR, {
              type: o.ErrorTypes.NETWORK_ERROR,
              details: o.ErrorDetails.KEY_LOAD_ERROR,
              fatal: !1,
              frag: n,
              response: t
            });
          };
          i.loadtimeout = function (t, e) {
            var n = e.frag;
            var r = n.loader;
            if (r) {
              r.abort();
            }
            delete this.loaders[n.type];
            this.hls.trigger(l.default.ERROR, {
              type: o.ErrorTypes.NETWORK_ERROR,
              details: o.ErrorDetails.KEY_LOAD_TIMEOUT,
              fatal: !1,
              frag: n
            });
          };
          return r;
        }(d);
        var B = "NOT_LOADED";
        var F = "APPENDING";
        var U = "PARTIAL";
        var z = "OK";
        var G = function (t) {
          var e;
          var n;
          function r(e) {
            var n;
            (n = t.call(this, e, l.default.BUFFER_APPENDED, l.default.FRAG_BUFFERED, l.default.FRAG_LOADED) || this).bufferPadding = 0.2;
            n.fragments = Object.create(null);
            n.timeRanges = Object.create(null);
            n.config = e.config;
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i = r.prototype;
          i.destroy = function () {
            this.fragments = Object.create(null);
            this.timeRanges = Object.create(null);
            this.config = null;
            d.prototype.destroy.call(this);
            t.prototype.destroy.call(this);
          };
          i.getBufferedFrag = function (t, e) {
            var n = this.fragments;
            var r = Object.keys(n).filter(function (r) {
              var i = n[r];
              if (i.body.type !== e) return !1;
              if (!i.buffered) return !1;
              var a = i.body;
              return a.startPTS <= t && t <= a.endPTS;
            });
            if (0 === r.length) return null;
            var i = r.pop();
            return n[i].body;
          };
          i.detectEvictedFragments = function (t, e) {
            var n = this;
            Object.keys(this.fragments).forEach(function (r) {
              var i = n.fragments[r];
              if (i && i.buffered) {
                var a = i.range[t];
                if (a) for (o = a.time, s = 0, void 0; s < o.length; s++) {
                  var o;
                  var s;
                  var l = o[s];
                  if (!n.isTimeBuffered(l.startPTS, l.endPTS, e)) {
                    n.removeFragment(i.body);
                    break;
                  }
                }
              }
            });
          };
          i.detectPartialFragments = function (t) {
            var e = this;
            var n = this.getFragmentKey(t);
            var r = this.fragments[n];
            if (r) {
              r.buffered = !0;
              Object.keys(this.timeRanges).forEach(function (n) {
                if (t.hasElementaryStream(n)) {
                  var i = e.timeRanges[n];
                  r.range[n] = e.getBufferedTimes(t.startPTS, t.endPTS, i);
                }
              });
            }
          };
          i.getBufferedTimes = function (t, e, n) {
            for (a = [], o = !1, s = 0, void 0; s < n.length; s++) {
              var r;
              var i;
              var a;
              var o;
              var s;
              r = n.start(s) - this.bufferPadding;
              i = n.end(s) + this.bufferPadding;
              if (t >= r && e <= i) {
                a.push({
                  startPTS: Math.max(t, n.start(s)),
                  endPTS: Math.min(e, n.end(s))
                });
                break;
              }
              if (t < i && e > r) {
                a.push({
                  startPTS: Math.max(t, n.start(s)),
                  endPTS: Math.min(e, n.end(s))
                });
                o = !0;
              } else if (e <= r) break;
            }
            return {
              time: a,
              partial: o
            };
          };
          i.getFragmentKey = function (t) {
            return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn;
          };
          i.getPartialFragment = function (t) {
            var e;
            var n;
            var r;
            var i = this;
            var a = null;
            var o = 0;
            Object.keys(this.fragments).forEach(function (s) {
              var l = i.fragments[s];
              if (i.isPartial(l)) {
                n = l.body.startPTS - i.bufferPadding;
                r = l.body.endPTS + i.bufferPadding;
                if (t >= n && t <= r) {
                  e = Math.min(t - n, r - t);
                  if (o <= e) {
                    a = l.body;
                    o = e;
                  }
                }
              }
            });
            return a;
          };
          i.getState = function (t) {
            var e = this.getFragmentKey(t);
            var n = this.fragments[e];
            var r = B;
            if (void 0 !== n) {
              r = n.buffered ? !0 === this.isPartial(n) ? U : z : F;
            }
            return r;
          };
          i.isPartial = function (t) {
            return !0 === t.buffered && (void 0 !== t.range.video && !0 === t.range.video.partial || void 0 !== t.range.audio && !0 === t.range.audio.partial);
          };
          i.isTimeBuffered = function (t, e, n) {
            for (a = 0, void 0; a < n.length; a++) {
              var r;
              var i;
              var a;
              r = n.start(a) - this.bufferPadding;
              i = n.end(a) + this.bufferPadding;
              if (t >= r && e <= i) return !0;
              if (e <= r) return !1;
            }
            return !1;
          };
          i.onFragLoaded = function (t) {
            var e = t.frag;
            if (Object(s.isFiniteNumber)(e.sn) && !e.bitrateTest) {
              this.fragments[this.getFragmentKey(e)] = {
                body: e,
                range: Object.create(null),
                buffered: !1
              };
            }
          };
          i.onBufferAppended = function (t) {
            var e = this;
            this.timeRanges = t.timeRanges;
            Object.keys(this.timeRanges).forEach(function (t) {
              var n = e.timeRanges[t];
              e.detectEvictedFragments(t, n);
            });
          };
          i.onFragBuffered = function (t) {
            this.detectPartialFragments(t.frag);
          };
          i.hasFragment = function (t) {
            var e = this.getFragmentKey(t);
            return void 0 !== this.fragments[e];
          };
          i.removeFragment = function (t) {
            var e = this.getFragmentKey(t);
            delete this.fragments[e];
          };
          i.removeAllFragments = function () {
            this.fragments = Object.create(null);
          };
          return r;
        }(d);
        var H = function (t, e) {
          for (n = 0, r = t.length - 1, i = null, a = null, void 0; n <= r;) {
            var n;
            var r;
            var i;
            var a;
            var o = e(a = t[i = (n + r) / 2 | 0]);
            if (o > 0) n = i + 1;else {
              if (!(o < 0)) return a;
              r = i - 1;
            }
          }
          return null;
        };
        var j = function () {
          function t() {}
          t.isBuffered = function (t, e) {
            try {
              if (t) for (n = t.buffered, r = 0, void 0; r < n.length; r++) {
                var n;
                var r;
                if (e >= n.start(r) && e <= n.end(r)) return !0;
              }
            } catch (t) {}
            return !1;
          };
          t.bufferInfo = function (t, e, n) {
            try {
              if (t) {
                var r;
                var i = t.buffered;
                var a = [];
                for (r = 0; r < i.length; r++) a.push({
                  start: i.start(r),
                  end: i.end(r)
                });
                return this.bufferedInfo(a, e, n);
              }
            } catch (t) {}
            return {
              len: 0,
              start: e,
              end: e,
              nextStart: void 0
            };
          };
          t.bufferedInfo = function (t, e, n) {
            t.sort(function (t, e) {
              return t.start - e.start || e.end - t.end;
            });
            var r = [];
            if (n) for (var i = 0; i < t.length; i++) {
              var a = r.length;
              if (a) {
                var o = r[a - 1].end;
                if (t[i].start - o < n) {
                  if (t[i].end > o) {
                    r[a - 1].end = t[i].end;
                  }
                } else {
                  r.push(t[i]);
                }
              } else r.push(t[i]);
            } else r = t;
            for (l = 0, u = e, c = e, h = 0, void 0; h < r.length; h++) {
              var s;
              var l;
              var u;
              var c;
              var h;
              var d = r[h].start;
              var f = r[h].end;
              if (e + n >= d && e < f) {
                u = d;
                l = (c = f) - e;
              } else if (e + n < d) {
                s = d;
                break;
              }
            }
            return {
              len: l,
              start: u,
              end: c,
              nextStart: s
            };
          };
          return t;
        }();
        var V = n("./node_modules/eventemitter3/index.js");
        var W = n("./node_modules/webworkify-webpack/index.js");
        var q = n("./src/demux/demuxer-inline.js");
        function Y() {
          return window.MediaSource || window.WebKitMediaSource;
        }
        var X = n("./src/utils/get-self-scope.js");
        var Z = function (t) {
          var e;
          var n;
          function r() {
            return t.apply(this, arguments) || this;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          r.prototype.trigger = function (t) {
            for (e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1, void 0; r < e; r++) {
              var e;
              var n;
              var r;
              n[r - 1] = arguments[r];
            }
            this.emit.apply(this, [t, t].concat(n));
          };
          return r;
        }(V.EventEmitter);
        var K = Object(X.getSelfScope)();
        var J = Y() || {
          isTypeSupported: function () {
            return !1;
          }
        };
        var $ = function () {
          function t(t, e) {
            var n = this;
            this.hls = t;
            this.id = e;
            var r = this.observer = new Z();
            var i = t.config;
            var a = function (e, r) {
              (r = r || {}).frag = n.frag;
              r.id = n.id;
              t.trigger(e, r);
            };
            r.on(l.default.FRAG_DECRYPTED, a);
            r.on(l.default.FRAG_PARSING_INIT_SEGMENT, a);
            r.on(l.default.FRAG_PARSING_DATA, a);
            r.on(l.default.FRAG_PARSED, a);
            r.on(l.default.ERROR, a);
            r.on(l.default.FRAG_PARSING_METADATA, a);
            r.on(l.default.FRAG_PARSING_USERDATA, a);
            r.on(l.default.INIT_PTS_FOUND, a);
            var s = {
              mp4: J.isTypeSupported("video/mp4"),
              mpeg: J.isTypeSupported("audio/mpeg"),
              mp3: J.isTypeSupported('audio/mp4; codecs="mp3"')
            };
            var c = navigator.vendor;
            if (i.enableWorker && "undefined" != typeof Worker) {
              var h;
              u.logger.log("demuxing in webworker");
              try {
                h = this.w = W("./src/demux/demuxer-worker.js");
                this.onwmsg = this.onWorkerMessage.bind(this);
                h.addEventListener("message", this.onwmsg);
                h.onerror = function (e) {
                  t.trigger(l.default.ERROR, {
                    type: o.ErrorTypes.OTHER_ERROR,
                    details: o.ErrorDetails.INTERNAL_EXCEPTION,
                    fatal: !0,
                    event: "demuxerWorker",
                    err: {
                      message: e.message + " (" + e.filename + ":" + e.lineno + ")"
                    }
                  });
                };
                h.postMessage({
                  cmd: "init",
                  typeSupported: s,
                  vendor: c,
                  id: e,
                  config: JSON.stringify(i)
                });
              } catch (t) {
                u.logger.warn("Error in worker:", t);
                u.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline");
                if (h) {
                  K.URL.revokeObjectURL(h.objectURL);
                }
                this.demuxer = new q.default(r, s, i, c);
                this.w = void 0;
              }
            } else this.demuxer = new q.default(r, s, i, c);
          }
          var e = t.prototype;
          e.destroy = function () {
            var t = this.w;
            if (t) {
              t.removeEventListener("message", this.onwmsg);
              t.terminate();
              this.w = null;
            } else {
              var e = this.demuxer;
              if (e) {
                e.destroy();
                this.demuxer = null;
              }
            }
            var n = this.observer;
            if (n) {
              n.removeAllListeners();
              this.observer = null;
            }
          };
          e.push = function (t, e, n, r, i, a, o, l) {
            var c = this.w;
            var h = Object(s.isFiniteNumber)(i.startPTS) ? i.startPTS : i.start;
            var d = i.decryptdata;
            var f = this.frag;
            var p = !(f && i.cc === f.cc);
            var m = !(f && i.level === f.level);
            var v = f && i.sn === f.sn + 1;
            var g = !m && v;
            if (p) {
              u.logger.log(this.id + ":discontinuity detected");
            }
            if (m) {
              u.logger.log(this.id + ":switch detected");
            }
            this.frag = i;
            if (c) c.postMessage({
              cmd: "demux",
              data: t,
              decryptdata: d,
              initSegment: e,
              audioCodec: n,
              videoCodec: r,
              timeOffset: h,
              discontinuity: p,
              trackSwitch: m,
              contiguous: g,
              duration: a,
              accurateTimeOffset: o,
              defaultInitPTS: l
            }, t instanceof ArrayBuffer ? [t] : []);else {
              var y = this.demuxer;
              y && y.push(t, d, e, n, r, h, p, m, g, a, o, l);
            }
          };
          e.onWorkerMessage = function (t) {
            var e = t.data;
            var n = this.hls;
            switch (e.event) {
              case "init":
                K.URL.revokeObjectURL(this.w.objectURL);
                break;
              case l.default.FRAG_PARSING_DATA:
                e.data.data1 = new Uint8Array(e.data1);
                if (e.data2) {
                  e.data.data2 = new Uint8Array(e.data2);
                }
              default:
                e.data = e.data || {};
                e.data.frag = this.frag;
                e.data.id = this.id;
                n.trigger(e.event, e.data);
            }
          };
          return t;
        }();
        function Q(t, e, n) {
          switch (e) {
            case "audio":
              if (t.audioGroupIds) {
                t.audioGroupIds = [];
              }
              t.audioGroupIds.push(n);
              break;
            case "text":
              if (t.textGroupIds) {
                t.textGroupIds = [];
              }
              t.textGroupIds.push(n);
          }
        }
        function tt(t, e, n) {
          var r = t[e];
          var i = t[n];
          var a = i.startPTS;
          if (Object(s.isFiniteNumber)(a)) {
            if (n > e) {
              r.duration = a - r.start;
              if (r.duration < 0) {
                u.logger.warn("negative duration computed for frag " + r.sn + ",level " + r.level + ", there should be some duration drift between playlist and fragment!");
              }
            } else {
              i.duration = r.start - a;
              if (i.duration < 0) {
                u.logger.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!");
              }
            }
          } else if (n > e) {
            var o = r.cc === i.cc;
            i.start = r.start + (o && r.minEndPTS ? r.minEndPTS - r.start : r.duration);
          } else i.start = Math.max(r.start - i.duration, 0);
        }
        function et(t, e, n, r, i, a) {
          var o = n;
          var l = r;
          if (Object(s.isFiniteNumber)(e.startPTS)) {
            var u = Math.abs(e.startPTS - n);
            if (Object(s.isFiniteNumber)(e.deltaPTS)) {
              e.deltaPTS = Math.max(u, e.deltaPTS);
            } else {
              e.deltaPTS = u;
            }
            o = Math.max(n, e.startPTS);
            n = Math.min(n, e.startPTS);
            l = Math.min(r, e.endPTS);
            r = Math.max(r, e.endPTS);
            i = Math.min(i, e.startDTS);
            a = Math.max(a, e.endDTS);
          }
          var c = n - e.start;
          e.start = e.startPTS = n;
          e.maxStartPTS = o;
          e.endPTS = r;
          e.minEndPTS = l;
          e.startDTS = i;
          e.endDTS = a;
          e.duration = r - n;
          var h;
          var d;
          var f;
          var p = e.sn;
          if (!t || p < t.startSN || p > t.endSN) return 0;
          for (h = p - t.startSN, (d = t.fragments)[h] = e, f = h; f > 0; f--) tt(d, f, f - 1);
          for (f = h; f < d.length - 1; f++) tt(d, f, f + 1);
          t.PTSKnown = !0;
          return c;
        }
        var nt = function (t) {
          for (e = "", n = t.length, r = 0, void 0; r < n; r++) {
            var e;
            var n;
            var r;
            e += "[" + t.start(r).toFixed(3) + "," + t.end(r).toFixed(3) + "]";
          }
          return e;
        };
        function rt(t, e) {
          e.fragments.forEach(function (e) {
            if (e) {
              var n = e.start + t;
              e.start = e.startPTS = n;
              e.endPTS = n + e.duration;
            }
          });
          e.PTSKnown = !0;
        }
        function it(t, e, n) {
          !function (t, e, n) {
            if (function (t, e, n) {
              var r = !1;
              if (e && e.details && n && (n.endCC > n.startCC || t && t.cc < n.startCC)) {
                r = !0;
              }
              return r;
            }(t, n, e)) {
              var r = function (t, e) {
                var n = t.fragments;
                var r = e.fragments;
                if (r.length && n.length) {
                  var i = function (t, e) {
                    for (n = null, r = 0, void 0; r < t.length; r += 1) {
                      var n;
                      var r;
                      var i = t[r];
                      if (i && i.cc === e) {
                        n = i;
                        break;
                      }
                    }
                    return n;
                  }(n, r[0].cc);
                  if (i && (!i || i.startPTS)) return i;
                  u.logger.log("No frag in previous level to align on");
                } else u.logger.log("No fragments to align");
              }(n.details, e);
              if (r) {
                u.logger.log("Adjusting PTS using last level due to CC increase within current level");
                rt(r.start, e);
              }
            }
          }(t, n, e);
          if (!n.PTSKnown && e) {
            (function (t, e) {
              if (e && e.fragments.length) {
                if (!t.hasProgramDateTime || !e.hasProgramDateTime) return;
                var n = e.fragments[0].programDateTime;
                var r = (t.fragments[0].programDateTime - n) / 1e3 + e.fragments[0].start;
                if (Object(s.isFiniteNumber)(r)) {
                  u.logger.log("adjusting PTS using programDateTime delta, sliding:" + r.toFixed(3));
                  rt(r, t);
                }
              }
            })(n, e.details);
          }
        }
        function at(t, e, n) {
          if (void 0 === t) {
            t = 0;
          }
          if (void 0 === e) {
            e = 0;
          }
          var r = Math.min(e, n.duration + (n.deltaPTS ? n.deltaPTS : 0));
          return n.start + n.duration - r <= t ? 1 : n.start - r > t && n.start ? -1 : 0;
        }
        function ot(t, e, n) {
          var r = 1e3 * Math.min(e, n.duration + (n.deltaPTS ? n.deltaPTS : 0));
          return (n.endProgramDateTime || 0) - r > t;
        }
        var st = function () {
          function t(t, e, n, r) {
            this.config = t;
            this.media = e;
            this.fragmentTracker = n;
            this.hls = r;
            this.nudgeRetry = 0;
            this.stallReported = !1;
            this.stalled = null;
            this.moved = !1;
            this.seeking = !1;
          }
          var e = t.prototype;
          e.poll = function (t) {
            var e = this.config;
            var n = this.media;
            var r = this.stalled;
            var i = n.currentTime;
            var a = n.seeking;
            var o = this.seeking && !a;
            var s = !this.seeking && a;
            this.seeking = a;
            if (i === t) {
              if ((s || o) && (this.stalled = null), !n.paused && !n.ended && 0 !== n.playbackRate && n.buffered.length) {
                var l = j.bufferInfo(n, i, 0),
                  c = l.len > 0,
                  h = l.nextStart || 0;
                if (c || h) {
                  if (a) {
                    var d = l.len > 2,
                      f = !h || h - i > 2 && !this.fragmentTracker.getPartialFragment(i);
                    if (d || f) return;
                    this.moved = !1;
                  }
                  if (!this.moved && this.stalled) {
                    var p = Math.max(h, l.start || 0) - i;
                    if (p > 0 && p <= 2) return void this._trySkipBufferHole(null);
                  }
                  var m = self.performance.now();
                  if (null !== r) {
                    var v = m - r;
                    !a && v >= 250 && this._reportStall(l.len);
                    var g = j.bufferInfo(n, i, e.maxBufferHole);
                    this._tryFixBufferStall(g, v);
                  } else this.stalled = m;
                }
              }
            } else if (this.moved = !0, null !== r) {
              if (this.stallReported) {
                var y = self.performance.now() - r;
                u.logger.warn("playback not stuck anymore @" + i + ", after " + Math.round(y) + "ms"), this.stallReported = !1;
              }
              this.stalled = null, this.nudgeRetry = 0;
            }
          };
          e._tryFixBufferStall = function (t, e) {
            var n = this.config;
            var r = this.fragmentTracker;
            var i = this.media.currentTime;
            var a = r.getPartialFragment(i);
            if (a && this._trySkipBufferHole(a)) {
              if (t.len > n.maxBufferHole && e > 1e3 * n.highBufferWatchdogPeriod) {
                u.logger.warn("Trying to nudge playhead over buffer-hole");
                this.stalled = null;
                this._tryNudgeBuffer();
              }
            }
          };
          e._reportStall = function (t) {
            var e = this.hls;
            var n = this.media;
            if (this.stallReported) {
              this.stallReported = !0;
              u.logger.warn("Playback stalling at @" + n.currentTime + " due to low buffer (buffer=" + t + ")");
              e.trigger(l.default.ERROR, {
                type: o.ErrorTypes.MEDIA_ERROR,
                details: o.ErrorDetails.BUFFER_STALLED_ERROR,
                fatal: !1,
                buffer: t
              });
            }
          };
          e._trySkipBufferHole = function (t) {
            for (e = this.config, n = this.hls, r = this.media, i = r.currentTime, a = 0, s = 0, void 0; s < r.buffered.length; s++) {
              var e;
              var n;
              var r;
              var i;
              var a;
              var s;
              var c = r.buffered.start(s);
              if (i + e.maxBufferHole >= a && i < c) {
                var h = Math.max(c + 0.05, r.currentTime + 0.1);
                u.logger.warn("skipping hole, adjusting currentTime from " + i + " to " + h);
                this.moved = !0;
                this.stalled = null;
                r.currentTime = h;
                if (t) {
                  n.trigger(l.default.ERROR, {
                    type: o.ErrorTypes.MEDIA_ERROR,
                    details: o.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                    fatal: !1,
                    reason: "fragment loaded with buffer holes, seeking from " + i + " to " + h,
                    frag: t
                  });
                }
                return h;
              }
              a = r.buffered.end(s);
            }
            return 0;
          };
          e._tryNudgeBuffer = function () {
            var t = this.config;
            var e = this.hls;
            var n = this.media;
            var r = n.currentTime;
            var i = (this.nudgeRetry || 0) + 1;
            this.nudgeRetry = i;
            if (i < t.nudgeMaxRetry) {
              var a = r + i * t.nudgeOffset;
              u.logger.warn("Nudging 'currentTime' from " + r + " to " + a), n.currentTime = a, e.trigger(l.default.ERROR, {
                type: o.ErrorTypes.MEDIA_ERROR,
                details: o.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                fatal: !1
              });
            } else u.logger.error("Playhead still not moving while enough data buffered @" + r + " after " + t.nudgeMaxRetry + " nudges"), e.trigger(l.default.ERROR, {
              type: o.ErrorTypes.MEDIA_ERROR,
              details: o.ErrorDetails.BUFFER_STALLED_ERROR,
              fatal: !0
            });
          };
          return t;
        }();
        function lt(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        var ut = function (t) {
          var e;
          var n;
          function r(e) {
            for (r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1, void 0; a < r; a++) {
              var n;
              var r;
              var i;
              var a;
              i[a - 1] = arguments[a];
            }
            (n = t.call.apply(t, [this, e].concat(i)) || this)._boundTick = void 0;
            n._tickTimer = null;
            n._tickInterval = null;
            n._tickCallCount = 0;
            n._boundTick = n.tick.bind(lt(n));
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i = r.prototype;
          i.onHandlerDestroying = function () {
            this.clearNextTick();
            this.clearInterval();
          };
          i.hasInterval = function () {
            return !!this._tickInterval;
          };
          i.hasNextTick = function () {
            return !!this._tickTimer;
          };
          i.setInterval = function (t) {
            return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, t), !0);
          };
          i.clearInterval = function () {
            return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0);
          };
          i.clearNextTick = function () {
            return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0);
          };
          i.tick = function () {
            this._tickCallCount++;
            if (1 === this._tickCallCount) {
              this.doTick();
              if (this._tickCallCount > 1) {
                this.clearNextTick();
                this._tickTimer = self.setTimeout(this._boundTick, 0);
              }
              this._tickCallCount = 0;
            }
          };
          i.doTick = function () {};
          return r;
        }(d);
        var ct = "STOPPED";
        var ht = "IDLE";
        var dt = "KEY_LOADING";
        var ft = "FRAG_LOADING";
        var pt = "FRAG_LOADING_WAITING_RETRY";
        var mt = "PARSING";
        var vt = "PARSED";
        var gt = "BUFFER_FLUSHING";
        var yt = "ENDED";
        var bt = "ERROR";
        var xt = "WAITING_LEVEL";
        var _t = function (t) {
          var e;
          var n;
          function r() {
            return t.apply(this, arguments) || this;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i = r.prototype;
          i.doTick = function () {};
          i.startLoad = function () {};
          i.stopLoad = function () {
            var t = this.fragCurrent;
            if (t) {
              if (t.loader) {
                t.loader.abort();
              }
              this.fragmentTracker.removeFragment(t);
            }
            if (this.demuxer) {
              this.demuxer.destroy();
              this.demuxer = null;
            }
            this.fragCurrent = null;
            this.fragPrevious = null;
            this.clearInterval();
            this.clearNextTick();
            this.state = ct;
          };
          i._streamEnded = function (t, e) {
            var n = this.fragCurrent;
            var r = this.fragmentTracker;
            if (!e.live && n && !n.backtracked && n.sn === e.endSN && !t.nextStart) {
              var i = r.getState(n);
              return i === U || i === z;
            }
            return !1;
          };
          i.onMediaSeeking = function () {
            var t = this.config;
            var e = this.media;
            var n = this.mediaBuffer;
            var r = this.state;
            var i = e ? e.currentTime : null;
            var a = j.bufferInfo(n || e, i, this.config.maxBufferHole);
            u.logger.log("media seeking to " + (Object(s.isFiniteNumber)(i) ? i.toFixed(3) : i));
            if (r === ft) {
              var o = this.fragCurrent;
              if (0 === a.len && o) {
                var l = t.maxFragLookUpTolerance,
                  c = o.start - l,
                  h = o.start + o.duration + l;
                i < c || i > h ? (o.loader && (u.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), o.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = ht) : u.logger.log("seeking outside of buffer but within currently loaded fragment range");
              }
            } else r === yt && (0 === a.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = ht);
            if (e) {
              this.lastCurrentTime = i;
            }
            if (this.loadedmetadata) {
              this.nextLoadPosition = this.startPosition = i;
            }
            this.tick();
          };
          i.onMediaEnded = function () {
            this.startPosition = this.lastCurrentTime = 0;
          };
          i.onHandlerDestroying = function () {
            this.stopLoad();
            t.prototype.onHandlerDestroying.call(this);
          };
          i.onHandlerDestroyed = function () {
            this.state = ct;
            this.fragmentTracker = null;
          };
          i.computeLivePosition = function (t, e) {
            var n = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * e.targetduration;
            return t + Math.max(0, e.totalduration - n);
          };
          return r;
        }(ut);
        function wt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(t, r.key, r);
          }
        }
        var St;
        var Et = function (t) {
          var e;
          var n;
          function r(e, n) {
            var r;
            (r = t.call(this, e, l.default.MEDIA_ATTACHED, l.default.MEDIA_DETACHING, l.default.MANIFEST_LOADING, l.default.MANIFEST_PARSED, l.default.LEVEL_LOADED, l.default.LEVELS_UPDATED, l.default.KEY_LOADED, l.default.FRAG_LOADED, l.default.FRAG_LOAD_EMERGENCY_ABORTED, l.default.FRAG_PARSING_INIT_SEGMENT, l.default.FRAG_PARSING_DATA, l.default.FRAG_PARSED, l.default.ERROR, l.default.AUDIO_TRACK_SWITCHING, l.default.AUDIO_TRACK_SWITCHED, l.default.BUFFER_CREATED, l.default.BUFFER_APPENDED, l.default.BUFFER_FLUSHED) || this).fragmentTracker = n;
            r.config = e.config;
            r.audioCodecSwap = !1;
            r._state = ct;
            r.stallReported = !1;
            r.gapController = null;
            r.altAudio = !1;
            r.audioOnly = !1;
            r.bitrateTest = !1;
            return r;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var a;
          var c;
          var h = r.prototype;
          h.startLoad = function (t) {
            if (this.levels) {
              var e = this.lastCurrentTime;
              var n = this.hls;
              this.stopLoad();
              this.setInterval(100);
              this.level = -1;
              this.fragLoadError = 0;
              if (!this.startFragRequested) {
                var r = n.startLevel;
                -1 === r && (n.config.testBandwidth ? (r = 0, this.bitrateTest = !0) : r = n.nextAutoLevel), this.level = n.nextLoadLevel = r, this.loadedmetadata = !1;
              }
              if (e > 0 && -1 === t) {
                u.logger.log("override startPosition with lastCurrentTime @" + e.toFixed(3));
                t = e;
              }
              this.state = ht;
              this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t;
              this.tick();
            } else {
              this.forceStartLoad = !0;
              this.state = ct;
            }
          };
          h.stopLoad = function () {
            this.forceStartLoad = !1;
            t.prototype.stopLoad.call(this);
          };
          h.doTick = function () {
            switch (this.state) {
              case gt:
                this.fragLoadError = 0;
                break;
              case ht:
                this._doTickIdle();
                break;
              case xt:
                var t = this.levels[this.level];
                if (t && t.details) {
                  this.state = ht;
                }
                break;
              case pt:
                var e = window.performance.now();
                var n = this.retryDate;
                if (!n || e >= n || this.media && this.media.seeking) {
                  u.logger.log("mediaController: retryDate reached, switch back to IDLE state");
                  this.state = ht;
                }
            }
            this._checkBuffer();
            this._checkFragmentChanged();
          };
          h._doTickIdle = function () {
            var t = this.hls;
            var e = t.config;
            var n = this.media;
            if (void 0 !== this.levelLastLoaded && (n || !this.startFragRequested && e.startFragPrefetch)) if (this.altAudio && this.audioOnly) this.demuxer.frag = null;else {
              var r;
              r = this.loadedmetadata ? n.currentTime : this.nextLoadPosition;
              var i = t.nextLoadLevel;
              var a = this.levels[i];
              if (a) {
                var o;
                var s = a.bitrate;
                o = s ? Math.max(8 * e.maxBufferSize / s, e.maxBufferLength) : e.maxBufferLength;
                o = Math.min(o, e.maxMaxBufferLength);
                var c = r < e.maxBufferHole ? Math.max(2, e.maxBufferHole) : e.maxBufferHole;
                var h = j.bufferInfo(this.mediaBuffer ? this.mediaBuffer : n, r, c);
                var d = h.len;
                if (!(d >= o)) {
                  u.logger.trace("buffer length of " + d.toFixed(3) + " is below max of " + o.toFixed(3) + ". checking for more payload ...");
                  this.level = t.nextLoadLevel = i;
                  var f = a.details;
                  if (!f || f.live && this.levelLastLoaded !== i) this.state = xt;else {
                    if (this._streamEnded(h, f)) {
                      var p = {};
                      if (this.altAudio) {
                        p.type = "video";
                      }
                      this.hls.trigger(l.default.BUFFER_EOS, p);
                      return void (this.state = yt);
                    }
                    this._fetchPayloadOrEos(r, h, f);
                  }
                }
              }
            }
          };
          h._fetchPayloadOrEos = function (t, e, n) {
            var r = this.fragPrevious;
            var i = (this.level, n.fragments);
            var a = i.length;
            if (0 !== a) {
              var o;
              var s = i[0].start;
              var l = i[a - 1].start + i[a - 1].duration;
              var c = e.end;
              if (n.initSegment && !n.initSegment.data) o = n.initSegment;else if (n.live) {
                var h = this.config.initialLiveManifestSize;
                if (a < h) return void u.logger.warn("Can not start playback of a level, reason: not enough fragments " + a + " < " + h);
                if (null === (o = this._ensureFragmentAtLivePoint(n, c, s, l, r, i))) return;
              } else if (c < s) {
                o = i[0];
              }
              if (o) {
                o = this._findFragment(s, r, a, i, c, l, n);
              }
              if (o) {
                if (o.encrypted) {
                  this._loadKey(o, n);
                } else {
                  this._loadFragment(o, n, t, c);
                }
              }
            }
          };
          h._ensureFragmentAtLivePoint = function (t, e, n, r, i, a) {
            var o;
            var l = this.hls.config;
            var c = this.media;
            var h = 1 / 0;
            if (void 0 !== l.liveMaxLatencyDuration) {
              h = l.liveMaxLatencyDuration;
            } else {
              if (Object(s.isFiniteNumber)(l.liveMaxLatencyDurationCount)) {
                h = l.liveMaxLatencyDurationCount * t.targetduration;
              }
            }
            if (e < Math.max(n - l.maxFragLookUpTolerance, r - h)) {
              var d = this.liveSyncPosition = this.computeLivePosition(n, t);
              e = d, c && !c.paused && c.readyState && c.duration > d && d > c.currentTime && (u.logger.log("buffer end: " + e.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + d.toFixed(3)), c.currentTime = d), this.nextLoadPosition = d;
            }
            if (t.PTSKnown && e > r && c && c.readyState) return null;
            if (this.startFragRequested && !t.PTSKnown && i) if (t.hasProgramDateTime) {
              u.logger.log("live playlist, switching playlist, load frag with same PDT: " + i.programDateTime);
              o = function (t, e, n) {
                if (null === e || !Array.isArray(t) || !t.length || !Object(s.isFiniteNumber)(e)) return null;
                if (e < (t[0].programDateTime || 0)) return null;
                if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
                n = n || 0;
                for (var r = 0; r < t.length; ++r) {
                  var i = t[r];
                  if (ot(e, n, i)) return i;
                }
                return null;
              }(a, i.endProgramDateTime, l.maxFragLookUpTolerance);
            } else {
              var f = i.sn + 1;
              if (f >= t.startSN && f <= t.endSN) {
                var p = a[f - t.startSN];
                if (i.cc === p.cc) {
                  o = p;
                  u.logger.log("live playlist, switching playlist, load frag with next SN: " + o.sn);
                }
              }
              if (o) {
                if (o = H(a, function (t) {
                  return i.cc - t.cc;
                })) {
                  u.logger.log("live playlist, switching playlist, load frag with same CC: " + o.sn);
                }
              }
            }
            return o;
          };
          h._findFragment = function (t, e, n, r, i, a, o) {
            var s;
            var l = this.hls.config;
            s = i < a ? function (t, e, n, r) {
              if (void 0 === n) {
                n = 0;
              }
              if (void 0 === r) {
                r = 0;
              }
              var i = null;
              if (t) {
                i = e[t.sn - e[0].sn + 1];
              } else {
                if (0 === n && 0 === e[0].start) {
                  i = e[0];
                }
              }
              return i && 0 === at(n, r, i) ? i : H(e, at.bind(null, n, r)) || i;
            }(e, r, i, i > a - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) : r[n - 1];
            if (s) {
              var c = s.sn - o.startSN,
                h = e && s.level === e.level,
                d = r[c - 1],
                f = r[c + 1];
              if (e && s.sn === e.sn) if (h && !s.backtracked) {
                if (s.sn < o.endSN) {
                  var p = e.deltaPTS;
                  p && p > l.maxBufferHole && e.dropped && c ? (s = d, u.logger.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")) : (s = f, this.fragmentTracker.getState(s) !== z && u.logger.log("Re-loading fragment with SN: " + s.sn));
                } else s = null;
              } else s.backtracked && (f && f.backtracked ? (u.logger.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + s.sn + ". Loading fragment " + f.sn), s = f) : (u.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), s.dropped = 0, d ? (s = d).backtracked = !0 : c && (s = null)));
            }
            return s;
          };
          h._loadKey = function (t, e) {
            u.logger.log("Loading key for " + t.sn + " of [" + e.startSN + "-" + e.endSN + "], level " + this.level);
            this.state = dt;
            this.hls.trigger(l.default.KEY_LOADING, {
              frag: t
            });
          };
          h._loadFragment = function (t, e, n, r) {
            var i = this.fragmentTracker.getState(t);
            this.fragCurrent = t;
            if ("initSegment" !== t.sn) {
              this.startFragRequested = !0;
            }
            if (Object(s.isFiniteNumber)(t.sn) && !t.bitrateTest) {
              this.nextLoadPosition = t.start + t.duration;
            }
            if (t.backtracked || i === B || i === U) {
              t.autoLevel = this.hls.autoLevelEnabled;
              t.bitrateTest = this.bitrateTest;
              u.logger.log("Loading " + t.sn + " of [" + e.startSN + "-" + e.endSN + "], level " + this.level + ", " + (this.loadedmetadata ? "currentTime" : "nextLoadPosition") + ": " + parseFloat(n.toFixed(3)) + ", bufferEnd: " + parseFloat(r.toFixed(3)));
              this.hls.trigger(l.default.FRAG_LOADING, {
                frag: t
              });
              if (this.demuxer) {
                this.demuxer = new $(this.hls, "main");
              }
              this.state = ft;
            } else {
              if (i === F && this._reduceMaxBufferLength(t.duration)) {
                this.fragmentTracker.removeFragment(t);
              }
            }
          };
          h.getBufferedFrag = function (t) {
            return this.fragmentTracker.getBufferedFrag(t, i.MAIN);
          };
          h.followingBufferedFrag = function (t) {
            return t ? this.getBufferedFrag(t.endPTS + 0.5) : null;
          };
          h._checkFragmentChanged = function () {
            var t;
            var e;
            var n = this.media;
            if (n && n.readyState && !1 === n.seeking && ((e = n.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = e), j.isBuffered(n, e) ? t = this.getBufferedFrag(e) : j.isBuffered(n, e + 0.1) && (t = this.getBufferedFrag(e + 0.1)), t)) {
              var r = t;
              if (r !== this.fragPlaying) {
                this.hls.trigger(l.default.FRAG_CHANGED, {
                  frag: r
                });
                var i = r.level;
                if (this.fragPlaying && this.fragPlaying.level === i) {
                  this.hls.trigger(l.default.LEVEL_SWITCHED, {
                    level: i
                  });
                }
                this.fragPlaying = r;
              }
            }
          };
          h.immediateLevelSwitch = function () {
            u.logger.log("immediateLevelSwitch");
            if (!this.immediateSwitch) {
              this.immediateSwitch = !0;
              var t,
                e = this.media;
              e ? (t = e.paused) || e.pause() : t = !0, this.previouslyPaused = t;
            }
            var n = this.fragCurrent;
            if (n && n.loader) {
              n.loader.abort();
            }
            this.fragCurrent = null;
            this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
          };
          h.immediateLevelSwitchEnd = function () {
            var t = this.media;
            if (t && t.buffered.length) {
              this.immediateSwitch = !1;
              if (t.currentTime > 0 && j.isBuffered(t, t.currentTime)) {
                t.currentTime -= 1e-4;
              }
              if (this.previouslyPaused) {
                t.play();
              }
            }
          };
          h.nextLevelSwitch = function () {
            var t = this.media;
            if (t && t.readyState) {
              var e;
              var n = this.getBufferedFrag(t.currentTime);
              if (n && n.startPTS > 1) {
                this.flushMainBuffer(0, n.startPTS - 1);
              }
              if (t.paused) e = 0;else {
                var r = this.hls.nextLoadLevel,
                  i = this.levels[r],
                  a = this.fragLastKbps;
                e = a && this.fragCurrent ? this.fragCurrent.duration * i.bitrate / (1e3 * a) + 1 : 0;
              }
              var o = this.getBufferedFrag(t.currentTime + e);
              if (o) {
                var s = this.followingBufferedFrag(o);
                if (s) {
                  var l = this.fragCurrent;
                  if (l && l.loader) {
                    l.loader.abort();
                  }
                  this.fragCurrent = null;
                  var u = Math.max(o.endPTS, s.maxStartPTS + Math.min(this.config.maxFragLookUpTolerance, s.duration));
                  this.flushMainBuffer(u, Number.POSITIVE_INFINITY);
                }
              }
            }
          };
          h.flushMainBuffer = function (t, e) {
            this.state = gt;
            var n = {
              startOffset: t,
              endOffset: e
            };
            if (this.altAudio) {
              n.type = "video";
            }
            this.hls.trigger(l.default.BUFFER_FLUSHING, n);
          };
          h.onMediaAttached = function (t) {
            var e = this.media = this.mediaBuffer = t.media;
            this.onvseeking = this.onMediaSeeking.bind(this);
            this.onvseeked = this.onMediaSeeked.bind(this);
            this.onvended = this.onMediaEnded.bind(this);
            e.addEventListener("seeking", this.onvseeking);
            e.addEventListener("seeked", this.onvseeked);
            e.addEventListener("ended", this.onvended);
            var n = this.config;
            if (this.levels && n.autoStartLoad) {
              this.hls.startLoad(n.startPosition);
            }
            this.gapController = new st(n, e, this.fragmentTracker, this.hls);
          };
          h.onMediaDetaching = function () {
            var t = this.media;
            if (t && t.ended) {
              u.logger.log("MSE detaching and video ended, reset startPosition");
              this.startPosition = this.lastCurrentTime = 0;
            }
            var e = this.levels;
            if (e) {
              e.forEach(function (t) {
                if (t.details) {
                  t.details.fragments.forEach(function (t) {
                    t.backtracked = void 0;
                  });
                }
              });
            }
            if (t) {
              t.removeEventListener("seeking", this.onvseeking);
              t.removeEventListener("seeked", this.onvseeked);
              t.removeEventListener("ended", this.onvended);
              this.onvseeking = this.onvseeked = this.onvended = null;
            }
            this.fragmentTracker.removeAllFragments();
            this.media = this.mediaBuffer = null;
            this.loadedmetadata = !1;
            this.stopLoad();
          };
          h.onMediaSeeked = function () {
            var t = this.media;
            var e = t ? t.currentTime : void 0;
            if (Object(s.isFiniteNumber)(e)) {
              u.logger.log("media seeked to " + e.toFixed(3));
            }
            this.tick();
          };
          h.onManifestLoading = function () {
            u.logger.log("trigger BUFFER_RESET");
            this.hls.trigger(l.default.BUFFER_RESET);
            this.fragmentTracker.removeAllFragments();
            this.stalled = !1;
            this.startPosition = this.lastCurrentTime = 0;
          };
          h.onManifestParsed = function (t) {
            var e;
            var n = !1;
            var r = !1;
            t.levels.forEach(function (t) {
              if (e = t.audioCodec) {
                if (-1 !== e.indexOf("mp4a.40.2")) {
                  n = !0;
                }
                if (-1 !== e.indexOf("mp4a.40.5")) {
                  r = !0;
                }
              }
            });
            this.audioCodecSwitch = n && r;
            if (this.audioCodecSwitch) {
              u.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC");
            }
            this.altAudio = t.altAudio;
            this.levels = t.levels;
            this.startFragRequested = !1;
            var i = this.config;
            if (i.autoStartLoad || this.forceStartLoad) {
              this.hls.startLoad(i.startPosition);
            }
          };
          h.onLevelLoaded = function (t) {
            var e = t.details;
            var n = t.level;
            var r = this.levels[this.levelLastLoaded];
            var i = this.levels[n];
            var a = e.totalduration;
            var o = 0;
            u.logger.log("level " + n + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + a);
            if (e.live || i.details && i.details.live) {
              var c = i.details;
              c && e.fragments.length > 0 ? (function (t, e) {
                e.initSegment && t.initSegment && (e.initSegment = t.initSegment);
                var n,
                  r = 0;
                if (function (t, e, n) {
                  if (t && e) for (var r = Math.max(t.startSN, e.startSN) - e.startSN, i = Math.min(t.endSN, e.endSN) - e.startSN, a = e.startSN - t.startSN, o = r; o <= i; o++) {
                    var s = t.fragments[a + o],
                      l = e.fragments[o];
                    if (!s || !l) break;
                    n(s, l, o);
                  }
                }(t, e, function (t, i) {
                  r = t.cc - i.cc, Object(s.isFiniteNumber)(t.startPTS) && (i.start = i.startPTS = t.startPTS, i.endPTS = t.endPTS, i.duration = t.duration, i.backtracked = t.backtracked, i.dropped = t.dropped, n = i), e.PTSKnown = !0;
                }), e.PTSKnown) {
                  if (r) {
                    u.logger.log("discontinuity sliding from playlist, take drift into account");
                    for (var i = e.fragments, a = 0; a < i.length; a++) i[a].cc += r;
                  }
                  n ? et(e, n, n.startPTS, n.endPTS, n.startDTS, n.endDTS) : function (t, e) {
                    var n = e.startSN - t.startSN,
                      r = t.fragments,
                      i = e.fragments;
                    if (!(n < 0 || n > r.length)) for (var a = 0; a < i.length; a++) i[a].start += r[n].start;
                  }(t, e), e.PTSKnown = t.PTSKnown;
                }
              }(c, e), o = e.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, c), e.PTSKnown && Object(s.isFiniteNumber)(o) ? u.logger.log("live playlist sliding:" + o.toFixed(3)) : (u.logger.log("live playlist - outdated PTS, unknown sliding"), it(this.fragPrevious, r, e))) : (u.logger.log("live playlist - first load, unknown sliding"), e.PTSKnown = !1, it(this.fragPrevious, r, e));
            } else e.PTSKnown = !1;
            i.details = e;
            this.levelLastLoaded = n;
            this.hls.trigger(l.default.LEVEL_UPDATED, {
              details: e,
              level: n
            });
            if (!1 === this.startFragRequested) {
              if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                var h = e.startTimeOffset;
                Object(s.isFiniteNumber)(h) ? (h < 0 && (u.logger.log("negative start time offset " + h + ", count from end of last fragment"), h = o + a + h), u.logger.log("start time offset found in playlist, adjust startPosition to " + h), this.startPosition = h) : e.live ? (this.startPosition = this.computeLivePosition(o, e), u.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition;
              }
              this.nextLoadPosition = this.startPosition;
            }
            if (this.state === xt) {
              this.state = ht;
            }
            this.tick();
          };
          h.onKeyLoaded = function () {
            if (this.state === dt) {
              this.state = ht;
              this.tick();
            }
          };
          h.onFragLoaded = function (t) {
            var e = this.fragCurrent;
            var n = this.hls;
            var r = this.levels;
            var i = this.media;
            var a = t.frag;
            if (this.state === ft && e && "main" === a.type && a.level === e.level && a.sn === e.sn) {
              var o = t.stats;
              var s = r[e.level];
              var c = s.details;
              this.bitrateTest = !1;
              this.stats = o;
              u.logger.log("Loaded " + e.sn + " of [" + c.startSN + " ," + c.endSN + "],level " + e.level);
              if (a.bitrateTest && n.nextLoadLevel) this.state = ht, this.startFragRequested = !1, o.tparsed = o.tbuffered = window.performance.now(), n.trigger(l.default.FRAG_BUFFERED, {
                stats: o,
                frag: e,
                id: "main"
              }), this.tick();else if ("initSegment" === a.sn) this.state = ht, o.tparsed = o.tbuffered = window.performance.now(), c.initSegment.data = t.payload, n.trigger(l.default.FRAG_BUFFERED, {
                stats: o,
                frag: e,
                id: "main"
              }), this.tick();else {
                u.logger.log("Parsing " + e.sn + " of [" + c.startSN + " ," + c.endSN + "],level " + e.level + ", cc " + e.cc), this.state = mt, this.pendingBuffering = !0, this.appended = !1, a.bitrateTest && (a.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
                  frag: a
                }));
                var h = !(i && i.seeking) && (c.PTSKnown || !c.live),
                  d = c.initSegment ? c.initSegment.data : [],
                  f = this._getAudioCodec(s);
                (this.demuxer = this.demuxer || new $(this.hls, "main")).push(t.payload, d, f, s.videoCodec, e, c.totalduration, h);
              }
            }
            this.fragLoadError = 0;
          };
          h.onFragParsingInitSegment = function (t) {
            var e = this.fragCurrent;
            var n = t.frag;
            if (e && "main" === t.id && n.sn === e.sn && n.level === e.level && this.state === mt) {
              var r;
              var i;
              var a = t.tracks;
              this.audioOnly = a.audio && !a.video;
              if (this.altAudio && !this.audioOnly) {
                delete a.audio;
              }
              if (i = a.audio) {
                var o = this.levels[this.level].audioCodec,
                  s = navigator.userAgent.toLowerCase();
                o && this.audioCodecSwap && (u.logger.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== i.metadata.channelCount && -1 === s.indexOf("firefox") && (o = "mp4a.40.5"), -1 !== s.indexOf("android") && "audio/mpeg" !== i.container && (o = "mp4a.40.2", u.logger.log("Android: force audio codec to " + o)), i.levelCodec = o, i.id = t.id;
              }
              for (r in (i = a.video) && (i.levelCodec = this.levels[this.level].videoCodec, i.id = t.id), this.hls.trigger(l.default.BUFFER_CODECS, a), a) {
                i = a[r];
                u.logger.log("main track:" + r + ",container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                var c = i.initSegment;
                if (c) {
                  this.appended = !0;
                  this.pendingBuffering = !0;
                  this.hls.trigger(l.default.BUFFER_APPENDING, {
                    type: r,
                    data: c,
                    parent: "main",
                    content: "initSegment"
                  });
                }
              }
              this.tick();
            }
          };
          h.onFragParsingData = function (t) {
            var e = this;
            var n = this.fragCurrent;
            var r = t.frag;
            if (n && "main" === t.id && r.sn === n.sn && r.level === n.level && ("audio" !== t.type || !this.altAudio) && this.state === mt) {
              var i = this.levels[this.level];
              var a = n;
              if (Object(s.isFiniteNumber)(t.endPTS)) {
                t.endPTS = t.startPTS + n.duration;
                t.endDTS = t.startDTS + n.duration;
              }
              if (!0 === t.hasAudio) {
                a.addElementaryStream(m.AUDIO);
              }
              if (!0 === t.hasVideo) {
                a.addElementaryStream(m.VIDEO);
              }
              u.logger.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0));
              if ("video" === t.type) if (a.dropped = t.dropped, a.dropped) {
                if (a.backtracked) u.logger.warn("Already backtracked on this fragment, appending with the gap", a.sn);else {
                  var o = i.details;
                  if (!o || a.sn !== o.startSN) return u.logger.warn("missing video frame(s), backtracking fragment", a.sn), this.fragmentTracker.removeFragment(a), a.backtracked = !0, this.nextLoadPosition = t.startPTS, this.state = ht, this.fragPrevious = a, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), void this.tick();
                  u.logger.warn("missing video frame(s) on first frag, appending with gap", a.sn);
                }
              } else a.backtracked = !1;
              var c = et(i.details, a, t.startPTS, t.endPTS, t.startDTS, t.endDTS);
              var h = this.hls;
              h.trigger(l.default.LEVEL_PTS_UPDATED, {
                details: i.details,
                level: this.level,
                drift: c,
                type: t.type,
                start: t.startPTS,
                end: t.endPTS
              });
              [t.data1, t.data2].forEach(function (n) {
                if (n && n.length && e.state === mt) {
                  e.appended = !0;
                  e.pendingBuffering = !0;
                  h.trigger(l.default.BUFFER_APPENDING, {
                    type: t.type,
                    data: n,
                    parent: "main",
                    content: "data"
                  });
                }
              });
              this.tick();
            }
          };
          h.onFragParsed = function (t) {
            var e = this.fragCurrent;
            var n = t.frag;
            if (e && "main" === t.id && n.sn === e.sn && n.level === e.level && this.state === mt) {
              this.stats.tparsed = window.performance.now();
              this.state = vt;
              this._checkAppendedParsed();
            }
          };
          h.onAudioTrackSwitching = function (t) {
            var e = this.altAudio;
            var n = !!t.url;
            var r = t.id;
            if (!n) {
              if (this.mediaBuffer !== this.media) {
                u.logger.log("switching on main audio, use media.buffered to schedule main fragment loading");
                this.mediaBuffer = this.media;
                var i = this.fragCurrent;
                if (i.loader) {
                  u.logger.log("switching to main audio track, cancel main fragment load");
                  i.loader.abort();
                }
                this.fragCurrent = null;
                this.fragPrevious = null;
                if (this.demuxer) {
                  this.demuxer.destroy();
                  this.demuxer = null;
                }
                this.state = ht;
              }
              var a = this.hls;
              if (e) {
                a.trigger(l.default.BUFFER_FLUSHING, {
                  startOffset: 0,
                  endOffset: Number.POSITIVE_INFINITY,
                  type: "audio"
                });
              }
              a.trigger(l.default.AUDIO_TRACK_SWITCHED, {
                id: r
              });
            }
          };
          h.onAudioTrackSwitched = function (t) {
            var e = t.id;
            var n = !!this.hls.audioTracks[e].url;
            if (n) {
              var r = this.videoBuffer;
              if (r && this.mediaBuffer !== r) {
                u.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading");
                this.mediaBuffer = r;
              }
            }
            this.altAudio = n;
            this.tick();
          };
          h.onBufferCreated = function (t) {
            var e;
            var n;
            var r = t.tracks;
            var i = !1;
            for (var a in r) {
              var o = r[a];
              if ("main" === o.id) {
                n = a;
                e = o;
                if ("video" === a) {
                  this.videoBuffer = r[a].buffer;
                }
              } else {
                i = !0;
              }
            }
            if (i && e) {
              u.logger.log("alternate track found, use " + n + ".buffered to schedule main fragment loading");
              this.mediaBuffer = e.buffer;
            } else {
              this.mediaBuffer = this.media;
            }
          };
          h.onBufferAppended = function (t) {
            if ("main" === t.parent) {
              var e = this.state;
              if (e !== mt && e !== vt) {
                this.pendingBuffering = t.pending > 0;
                this._checkAppendedParsed();
              }
            }
          };
          h._checkAppendedParsed = function () {
            if (!(this.state !== vt || this.appended && this.pendingBuffering)) {
              var t = this.fragCurrent;
              if (t) {
                var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                u.logger.log("main buffered : " + nt(e.buffered));
                this.fragPrevious = t;
                var n = this.stats;
                n.tbuffered = window.performance.now();
                this.fragLastKbps = Math.round(8 * n.total / (n.tbuffered - n.tfirst));
                this.hls.trigger(l.default.FRAG_BUFFERED, {
                  stats: n,
                  frag: t,
                  id: "main"
                });
                this.state = ht;
              }
              if (this.loadedmetadata || this.startPosition <= 0) {
                this.tick();
              }
            }
          };
          h.onError = function (t) {
            var e = t.frag || this.fragCurrent;
            if (!e || "main" === e.type) {
              var n = !!this.media && j.isBuffered(this.media, this.media.currentTime) && j.isBuffered(this.media, this.media.currentTime + 0.5);
              switch (t.details) {
                case o.ErrorDetails.FRAG_LOAD_ERROR:
                case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                case o.ErrorDetails.KEY_LOAD_ERROR:
                case o.ErrorDetails.KEY_LOAD_TIMEOUT:
                  if (!t.fatal) if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                    var r = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                    u.logger.warn("mediaController: frag loading failed, retry in " + r + " ms");
                    this.retryDate = window.performance.now() + r;
                    if (this.loadedmetadata) {
                      this.startFragRequested = !1;
                      this.nextLoadPosition = this.startPosition;
                    }
                    this.fragLoadError++;
                    this.state = pt;
                  } else {
                    u.logger.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ...");
                    t.fatal = !0;
                    this.state = bt;
                  }
                  break;
                case o.ErrorDetails.LEVEL_LOAD_ERROR:
                case o.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                  if (this.state !== bt) {
                    if (t.fatal) {
                      this.state = bt;
                      u.logger.warn("streamController: " + t.details + ",switch to " + this.state + " state ...");
                    } else {
                      if (t.levelRetry || this.state !== xt) {
                        this.state = ht;
                      }
                    }
                  }
                  break;
                case o.ErrorDetails.BUFFER_FULL_ERROR:
                  if ("main" !== t.parent || this.state !== mt && this.state !== vt) {
                    if (n) {
                      this._reduceMaxBufferLength(this.config.maxBufferLength);
                      this.state = ht;
                    } else {
                      u.logger.warn("buffer full error also media.currentTime is not buffered, flush everything");
                      this.fragCurrent = null;
                      this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                    }
                  }
              }
            }
          };
          h._reduceMaxBufferLength = function (t) {
            var e = this.config;
            return e.maxMaxBufferLength >= t && (e.maxMaxBufferLength /= 2, u.logger.warn("main:reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0);
          };
          h._checkBuffer = function () {
            var t = this.media;
            if (t && 0 !== t.readyState) {
              var e = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
              if (!this.loadedmetadata && e.length) {
                this.loadedmetadata = !0;
                this._seekToStartPos();
              } else {
                if (this.immediateSwitch) {
                  this.immediateLevelSwitchEnd();
                } else {
                  this.gapController.poll(this.lastCurrentTime, e);
                }
              }
            }
          };
          h.onFragLoadEmergencyAborted = function () {
            this.state = ht;
            if (this.loadedmetadata) {
              this.startFragRequested = !1;
              this.nextLoadPosition = this.startPosition;
            }
            this.tick();
          };
          h.onBufferFlushed = function () {
            var t = this.mediaBuffer ? this.mediaBuffer : this.media;
            if (t) {
              var e = this.audioOnly ? m.AUDIO : m.VIDEO;
              this.fragmentTracker.detectEvictedFragments(e, t.buffered);
            }
            this.state = ht;
            this.fragPrevious = null;
          };
          h.onLevelsUpdated = function (t) {
            this.levels = t.levels;
          };
          h.swapAudioCodec = function () {
            this.audioCodecSwap = !this.audioCodecSwap;
          };
          h._seekToStartPos = function () {
            var t = this.media;
            var e = t.currentTime;
            var n = this.startPosition;
            if (e !== n && n >= 0) {
              if (t.seeking) return void u.logger.log("could not seek to " + n + ", already seeking at " + e);
              var r = (t.buffered.length ? t.buffered.start(0) : 0) - n;
              if (r > 0 && r < this.config.maxBufferHole) {
                u.logger.log("adjusting start position by " + r + " to match buffer start");
                n += r;
                this.startPosition = n;
              }
              u.logger.log("seek to target start position " + n + " from current time " + e + ". ready state " + t.readyState);
              t.currentTime = n;
            }
          };
          h._getAudioCodec = function (t) {
            var e = this.config.defaultAudioCodec || t.audioCodec;
            if (this.audioCodecSwap) {
              u.logger.log("swapping playlist audio codec");
              if (e) {
                e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5";
              }
            }
            return e;
          };
          a = r;
          if (c = [{
            key: "state",
            set: function (t) {
              if (this.state !== t) {
                var e = this.state;
                this._state = t;
                u.logger.log("main stream-controller: " + e + "->" + t);
                this.hls.trigger(l.default.STREAM_STATE_TRANSITION, {
                  previousState: e,
                  nextState: t
                });
              }
            },
            get: function () {
              return this._state;
            }
          }, {
            key: "currentLevel",
            get: function () {
              var t = this.media;
              if (t) {
                var e = this.getBufferedFrag(t.currentTime);
                if (e) return e.level;
              }
              return -1;
            }
          }, {
            key: "nextBufferedFrag",
            get: function () {
              var t = this.media;
              return t ? this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)) : null;
            }
          }, {
            key: "nextLevel",
            get: function () {
              var t = this.nextBufferedFrag;
              return t ? t.level : -1;
            }
          }, {
            key: "liveSyncPosition",
            get: function () {
              return this._liveSyncPosition;
            },
            set: function (t) {
              this._liveSyncPosition = t;
            }
          }]) {
            wt(a.prototype, c);
          }
          return r;
        }(_t);
        function Tt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(t, r.key, r);
          }
        }
        var Mt = function (t) {
          var e;
          var n;
          function r(e) {
            var n;
            (n = t.call(this, e, l.default.MANIFEST_LOADED, l.default.LEVEL_LOADED, l.default.AUDIO_TRACK_SWITCHED, l.default.FRAG_LOADED, l.default.ERROR) || this).canload = !1;
            n.currentLevelIndex = null;
            n.manualLevelIndex = -1;
            n.timer = null;
            St = /chrome|firefox/.test(navigator.userAgent.toLowerCase());
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i;
          var a;
          var s = r.prototype;
          s.onHandlerDestroying = function () {
            this.clearTimer();
            this.manualLevelIndex = -1;
          };
          s.clearTimer = function () {
            if (null !== this.timer) {
              clearTimeout(this.timer);
              this.timer = null;
            }
          };
          s.startLoad = function () {
            var t = this._levels;
            this.canload = !0;
            this.levelRetryCount = 0;
            if (t) {
              t.forEach(function (t) {
                t.loadError = 0;
                var e = t.details;
                if (e && e.live) {
                  t.details = void 0;
                }
              });
            }
            if (null !== this.timer) {
              this.loadLevel();
            }
          };
          s.stopLoad = function () {
            this.canload = !1;
          };
          s.onManifestLoaded = function (t) {
            var e;
            var n = [];
            var r = [];
            var i = {};
            var a = null;
            var s = !1;
            var c = !1;
            t.levels.forEach(function (t) {
              var e = t.attrs;
              t.loadError = 0;
              t.fragmentError = !1;
              s = s || !!t.videoCodec;
              c = c || !!t.audioCodec;
              if (St && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34")) {
                t.audioCodec = void 0;
              }
              if (a = i[t.bitrate]) {
                a.url.push(t.url);
              } else {
                t.url = [t.url];
                t.urlId = 0;
                i[t.bitrate] = t;
                n.push(t);
              }
              if (e) {
                if (e.AUDIO) {
                  Q(a || t, "audio", e.AUDIO);
                }
                if (e.SUBTITLES) {
                  Q(a || t, "text", e.SUBTITLES);
                }
              }
            });
            if (s && c) {
              n = n.filter(function (t) {
                return !!t.videoCodec;
              });
            }
            n = n.filter(function (t) {
              var e = t.audioCodec;
              var n = t.videoCodec;
              return (!e || T(e, "audio")) && (!n || T(n, "video"));
            });
            if (t.audioTracks) {
              (r = t.audioTracks.filter(function (t) {
                return !t.audioCodec || T(t.audioCodec, "audio");
              })).forEach(function (t, e) {
                t.id = e;
              });
            }
            if (n.length > 0) {
              e = n[0].bitrate, n.sort(function (t, e) {
                return t.bitrate - e.bitrate;
              }), this._levels = n;
              for (var h = 0; h < n.length; h++) if (n[h].bitrate === e) {
                this._firstLevel = h, u.logger.log("manifest loaded," + n.length + " level(s) found, first bitrate:" + e);
                break;
              }
              var d = c && !s;
              this.hls.trigger(l.default.MANIFEST_PARSED, {
                levels: n,
                audioTracks: r,
                firstLevel: this._firstLevel,
                stats: t.stats,
                audio: c,
                video: s,
                altAudio: !d && r.some(function (t) {
                  return !!t.url;
                })
              });
            } else this.hls.trigger(l.default.ERROR, {
              type: o.ErrorTypes.MEDIA_ERROR,
              details: o.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
              fatal: !0,
              url: this.hls.url,
              reason: "no level with compatible codecs found in manifest"
            });
          };
          s.setLevelInternal = function (t) {
            var e = this._levels;
            var n = this.hls;
            if (t >= 0 && t < e.length) {
              this.clearTimer();
              if (this.currentLevelIndex !== t) {
                u.logger.log("switching to level " + t), this.currentLevelIndex = t;
                var r = e[t];
                r.level = t, n.trigger(l.default.LEVEL_SWITCHING, r);
              }
              var i = e[t];
              var a = i.details;
              if (!a || a.live) {
                var s = i.urlId;
                n.trigger(l.default.LEVEL_LOADING, {
                  url: i.url[s],
                  level: t,
                  id: s
                });
              }
            } else n.trigger(l.default.ERROR, {
              type: o.ErrorTypes.OTHER_ERROR,
              details: o.ErrorDetails.LEVEL_SWITCH_ERROR,
              level: t,
              fatal: !1,
              reason: "invalid level idx"
            });
          };
          s.onError = function (t) {
            if (t.fatal) {
              if (t.type === o.ErrorTypes.NETWORK_ERROR) {
                this.clearTimer();
              }
            } else {
              var e;
              var n = !1;
              var r = !1;
              switch (t.details) {
                case o.ErrorDetails.FRAG_LOAD_ERROR:
                case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                case o.ErrorDetails.KEY_LOAD_ERROR:
                case o.ErrorDetails.KEY_LOAD_TIMEOUT:
                  e = t.frag.level;
                  r = !0;
                  break;
                case o.ErrorDetails.LEVEL_LOAD_ERROR:
                case o.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                  e = t.context.level;
                  n = !0;
                  break;
                case o.ErrorDetails.REMUX_ALLOC_ERROR:
                  e = t.level;
                  n = !0;
              }
              if (void 0 !== e) {
                this.recoverLevel(t, e, n, r);
              }
            }
          };
          s.recoverLevel = function (t, e, n, r) {
            var i;
            var a;
            var o;
            var s = this;
            var l = this.hls.config;
            var c = t.details;
            var h = this._levels[e];
            h.loadError++;
            h.fragmentError = r;
            if (n) {
              if (!(this.levelRetryCount + 1 <= l.levelLoadingMaxRetry)) return u.logger.error("level controller, cannot recover from " + c + " error"), this.currentLevelIndex = null, this.clearTimer(), void (t.fatal = !0);
              a = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout), this.timer = setTimeout(function () {
                return s.loadLevel();
              }, a), t.levelRetry = !0, this.levelRetryCount++, u.logger.warn("level controller, " + c + ", retry in " + a + " ms, current retry count is " + this.levelRetryCount);
            }
            if (n || r) {
              if ((i = h.url.length) > 1 && h.loadError < i) {
                h.urlId = (h.urlId + 1) % i;
                h.details = void 0;
                u.logger.warn("level controller, " + c + " for level " + e + ": switching to redundant URL-id " + h.urlId);
              } else {
                if (-1 === this.manualLevelIndex) {
                  o = 0 === e ? this._levels.length - 1 : e - 1;
                  u.logger.warn("level controller, " + c + ": switch to " + o);
                  this.hls.nextAutoLevel = this.currentLevelIndex = o;
                } else {
                  if (r) {
                    u.logger.warn("level controller, " + c + ": reload a fragment");
                    this.currentLevelIndex = null;
                  }
                }
              }
            }
          };
          s.onFragLoaded = function (t) {
            var e = t.frag;
            if (void 0 !== e && "main" === e.type) {
              var n = this._levels[e.level];
              if (void 0 !== n) {
                n.fragmentError = !1;
                n.loadError = 0;
                this.levelRetryCount = 0;
              }
            }
          };
          s.onLevelLoaded = function (t) {
            var e = this;
            var n = t.level;
            var r = t.details;
            if (n === this.currentLevelIndex) {
              var i = this._levels[n];
              if (i.fragmentError) {
                i.loadError = 0;
                this.levelRetryCount = 0;
              }
              if (r.live) {
                var a = function (t, e, n) {
                  var r = 1e3 * (e.averagetargetduration ? e.averagetargetduration : e.targetduration),
                    i = r / 2;
                  return t && e.endSN === t.endSN && (r = i), n && (r = Math.max(i, r - (window.performance.now() - n))), Math.round(r);
                }(i.details, r, t.stats.trequest);
                u.logger.log("live playlist, reload in " + Math.round(a) + " ms"), this.timer = setTimeout(function () {
                  return e.loadLevel();
                }, a);
              } else this.clearTimer();
            }
          };
          s.onAudioTrackSwitched = function (t) {
            var e = this.hls.audioTracks[t.id].groupId;
            var n = this.hls.levels[this.currentLevelIndex];
            if (n && n.audioGroupIds) {
              for (r = -1, i = 0, void 0; i < n.audioGroupIds.length; i++) {
                var r;
                var i;
                if (n.audioGroupIds[i] === e) {
                  r = i;
                  break;
                }
              }
              if (r !== n.urlId) {
                n.urlId = r;
                this.startLoad();
              }
            }
          };
          s.loadLevel = function () {
            u.logger.debug("call to loadLevel");
            if (null !== this.currentLevelIndex && this.canload) {
              var t = this._levels[this.currentLevelIndex];
              if ("object" == typeof t && t.url.length > 0) {
                var e = this.currentLevelIndex,
                  n = t.urlId,
                  r = t.url[n];
                u.logger.log("Attempt loading level index " + e + " with URL-id " + n), this.hls.trigger(l.default.LEVEL_LOADING, {
                  url: r,
                  level: e,
                  id: n
                });
              }
            }
          };
          s.removeLevel = function (t, e) {
            var n = this.levels.filter(function (n, r) {
              return r !== t || n.url.length > 1 && void 0 !== e && (n.url = n.url.filter(function (t, n) {
                return n !== e;
              }), n.urlId = 0, !0);
            }).map(function (t, e) {
              var n = t.details;
              if (n && n.fragments) {
                n.fragments.forEach(function (t) {
                  t.level = e;
                });
              }
              return t;
            });
            this._levels = n;
            this.hls.trigger(l.default.LEVELS_UPDATED, {
              levels: n
            });
          };
          i = r;
          if (a = [{
            key: "levels",
            get: function () {
              return this._levels;
            }
          }, {
            key: "level",
            get: function () {
              return this.currentLevelIndex;
            },
            set: function (t) {
              var e = this._levels;
              if (e) {
                t = Math.min(t, e.length - 1);
                if (this.currentLevelIndex === t && e[t].details) {
                  this.setLevelInternal(t);
                }
              }
            }
          }, {
            key: "manualLevel",
            get: function () {
              return this.manualLevelIndex;
            },
            set: function (t) {
              this.manualLevelIndex = t;
              if (void 0 === this._startLevel) {
                this._startLevel = t;
              }
              if (-1 !== t) {
                this.level = t;
              }
            }
          }, {
            key: "firstLevel",
            get: function () {
              return this._firstLevel;
            },
            set: function (t) {
              this._firstLevel = t;
            }
          }, {
            key: "startLevel",
            get: function () {
              if (void 0 === this._startLevel) {
                var t = this.hls.config.startLevel;
                return void 0 !== t ? t : this._firstLevel;
              }
              return this._startLevel;
            },
            set: function (t) {
              this._startLevel = t;
            }
          }, {
            key: "nextLoadLevel",
            get: function () {
              return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel;
            },
            set: function (t) {
              this.level = t;
              if (-1 === this.manualLevelIndex) {
                this.hls.nextAutoLevel = t;
              }
            }
          }]) {
            Tt(i.prototype, a);
          }
          return r;
        }(d);
        var At = n("./src/demux/id3.js");
        function Lt(t, e) {
          var n;
          try {
            n = new Event("addtrack");
          } catch (t) {
            (n = document.createEvent("Event")).initEvent("addtrack", !1, !1);
          }
          n.track = t;
          e.dispatchEvent(n);
        }
        var Ct = function (t) {
          var e;
          var n;
          function r(e) {
            var n;
            (n = t.call(this, e, l.default.MEDIA_ATTACHED, l.default.MEDIA_DETACHING, l.default.FRAG_PARSING_METADATA, l.default.LIVE_BACK_BUFFER_REACHED) || this).id3Track = void 0;
            n.media = void 0;
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i = r.prototype;
          i.destroy = function () {
            d.prototype.destroy.call(this);
          };
          i.onMediaAttached = function (t) {
            this.media = t.media;
            this.media;
          };
          i.onMediaDetaching = function () {
            !function (t) {
              if (null == t ? void 0 : t.cues) for (; t.cues.length > 0;) t.removeCue(t.cues[0]);
            }(this.id3Track);
            this.id3Track = void 0;
            this.media = void 0;
          };
          i.getID3Track = function (t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if ("metadata" === n.kind && "id3" === n.label) {
                Lt(n, this.media);
                return n;
              }
            }
            return this.media.addTextTrack("metadata", "id3");
          };
          i.onFragParsingMetadata = function (t) {
            var e = t.frag;
            var n = t.samples;
            if (this.id3Track) {
              this.id3Track = this.getID3Track(this.media.textTracks);
              this.id3Track.mode = "hidden";
            }
            for (r = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, i = 0, void 0; i < n.length; i++) {
              var r;
              var i;
              var a = At.default.getID3Frames(n[i].data);
              if (a) {
                var o = Math.max(n[i].pts, 0);
                var s = i < n.length - 1 ? n[i + 1].pts : e.endPTS;
                if (s) {
                  s = e.start + e.duration;
                }
                if (s - o <= 0) {
                  s = o + 0.25;
                }
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  if (!At.default.isTimeStampFrame(u)) {
                    var c = new r(o, s, "");
                    c.value = u;
                    this.id3Track.addCue(c);
                  }
                }
              }
            }
          };
          i.onLiveBackBufferReached = function (t) {
            var e = t.bufferEnd;
            var n = this.id3Track;
            if (n && n.cues && n.cues.length) {
              var r = function (t, e) {
                if (e < t[0].endTime) return t[0];
                if (e > t[t.length - 1].endTime) return t[t.length - 1];
                for (n = 0, r = t.length - 1, void 0; n <= r;) {
                  var n;
                  var r;
                  var i = Math.floor((r + n) / 2);
                  if (e < t[i].endTime) r = i - 1;else {
                    if (!(e > t[i].endTime)) return t[i];
                    n = i + 1;
                  }
                }
                return t[n].endTime - e < e - t[r].endTime ? t[n] : t[r];
              }(n.cues, e);
              if (r) for (; n.cues[0] !== r;) n.removeCue(n.cues[0]);
            }
          };
          return r;
        }(d);
        var Pt = function () {
          function t(t) {
            this.alpha_ = void 0;
            this.estimate_ = void 0;
            this.totalWeight_ = void 0;
            this.alpha_ = t ? Math.exp(Math.log(0.5) / t) : 0;
            this.estimate_ = 0;
            this.totalWeight_ = 0;
          }
          var e = t.prototype;
          e.sample = function (t, e) {
            var n = Math.pow(this.alpha_, t);
            this.estimate_ = e * (1 - n) + n * this.estimate_;
            this.totalWeight_ += t;
          };
          e.getTotalWeight = function () {
            return this.totalWeight_;
          };
          e.getEstimate = function () {
            if (this.alpha_) {
              var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
              return this.estimate_ / t;
            }
            return this.estimate_;
          };
          return t;
        }();
        var Rt = function () {
          function t(t, e, n, r) {
            this.hls = void 0;
            this.defaultEstimate_ = void 0;
            this.minWeight_ = void 0;
            this.minDelayMs_ = void 0;
            this.slow_ = void 0;
            this.fast_ = void 0;
            this.hls = t;
            this.defaultEstimate_ = r;
            this.minWeight_ = 0.001;
            this.minDelayMs_ = 50;
            this.slow_ = new Pt(e);
            this.fast_ = new Pt(n);
          }
          var e = t.prototype;
          e.sample = function (t, e) {
            var n = (t = Math.max(t, this.minDelayMs_)) / 1e3;
            var r = 8 * e / n;
            this.fast_.sample(n, r);
            this.slow_.sample(n, r);
          };
          e.canEstimate = function () {
            var t = this.fast_;
            return t && t.getTotalWeight() >= this.minWeight_;
          };
          e.getEstimate = function () {
            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
          };
          e.destroy = function () {};
          return t;
        }();
        function Ot(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(t, r.key, r);
          }
        }
        var It = window.performance;
        var Dt = function (t) {
          var e;
          var n;
          function r(e) {
            var n;
            (n = t.call(this, e, l.default.FRAG_LOADING, l.default.FRAG_LOADED, l.default.FRAG_BUFFERED, l.default.ERROR) || this).lastLoadedFragLevel = 0;
            n._nextAutoLevel = -1;
            n.hls = e;
            n.timer = null;
            n._bwEstimator = null;
            n.onCheck = n._abandonRulesCheck.bind(function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
            }(n));
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i;
          var a;
          var c = r.prototype;
          c.destroy = function () {
            this.clearTimer();
            d.prototype.destroy.call(this);
          };
          c.onFragLoading = function (t) {
            var e = t.frag;
            if ("main" === e.type && (this.timer || (this.fragCurrent = e, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
              var n;
              var r;
              var i = this.hls;
              var a = i.config;
              var o = e.level;
              if (i.levels[o].details.live) {
                n = a.abrEwmaFastLive;
                r = a.abrEwmaSlowLive;
              } else {
                n = a.abrEwmaFastVoD;
                r = a.abrEwmaSlowVoD;
              }
              this._bwEstimator = new Rt(i, r, n, a.abrEwmaDefaultEstimate);
            }
          };
          c._abandonRulesCheck = function () {
            var t = this.hls;
            var e = t.media;
            var n = this.fragCurrent;
            if (n) {
              var r = n.loader;
              if (!r || r.stats && r.stats.aborted) {
                u.logger.warn("frag loader destroy or aborted, disarm abandonRules");
                this.clearTimer();
                return void (this._nextAutoLevel = -1);
              }
              var i = r.stats;
              if (e && i && (!e.paused && 0 !== e.playbackRate || !e.readyState) && n.autoLevel && n.level) {
                var a = It.now() - i.trequest;
                var o = Math.abs(e.playbackRate);
                if (a > 500 * n.duration / o) {
                  var s = t.levels;
                  var c = Math.max(1, i.bw ? i.bw / 8 : 1e3 * i.loaded / a);
                  var h = s[n.level];
                  if (!h) return;
                  var d = h.realBitrate ? Math.max(h.realBitrate, h.bitrate) : h.bitrate;
                  var f = i.total ? i.total : Math.max(i.loaded, Math.round(n.duration * d / 8));
                  var p = e.currentTime;
                  var m = (f - i.loaded) / c;
                  var v = (j.bufferInfo(e, p, t.config.maxBufferHole).end - p) / o;
                  if (v < 2 * n.duration / o && m > v) {
                    var g;
                    var y;
                    var b = t.minAutoLevel;
                    for (y = n.level - 1; y > b; y--) {
                      var x = s[y].realBitrate ? Math.max(s[y].realBitrate, s[y].bitrate) : s[y].bitrate;
                      if (n.duration * x / (6.4 * c) < v) break;
                    }
                    if (g < m) {
                      u.logger.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (n.level - 1) + "];bufferStarvationDelay:" + g.toFixed(1) + "<" + m.toFixed(1) + ":" + v.toFixed(1));
                      t.nextLoadLevel = y;
                      this._bwEstimator.sample(a, i.loaded);
                      r.abort();
                      this.clearTimer();
                      t.trigger(l.default.FRAG_LOAD_EMERGENCY_ABORTED, {
                        frag: n,
                        stats: i
                      });
                    }
                  }
                }
              }
            }
          };
          c.onFragLoaded = function (t) {
            var e = t.frag;
            if ("main" === e.type && Object(s.isFiniteNumber)(e.sn)) {
              this.clearTimer();
              this.lastLoadedFragLevel = e.level;
              this._nextAutoLevel = -1;
              if (this.hls.config.abrMaxWithRealBitrate) {
                var n = this.hls.levels[e.level],
                  r = (n.loaded ? n.loaded.bytes : 0) + t.stats.loaded,
                  i = (n.loaded ? n.loaded.duration : 0) + t.frag.duration;
                n.loaded = {
                  bytes: r,
                  duration: i
                }, n.realBitrate = Math.round(8 * r / i);
              }
              if (t.frag.bitrateTest) {
                var a = t.stats;
                a.tparsed = a.tbuffered = a.tload;
                this.onFragBuffered(t);
              }
            }
          };
          c.onFragBuffered = function (t) {
            var e = t.stats;
            var n = t.frag;
            if (!0 !== e.aborted && "main" === n.type && Object(s.isFiniteNumber)(n.sn) && (!n.bitrateTest || e.tload === e.tbuffered)) {
              var r = e.tparsed - e.trequest;
              u.logger.log("latency/loading/parsing/append/kbps:" + Math.round(e.tfirst - e.trequest) + "/" + Math.round(e.tload - e.tfirst) + "/" + Math.round(e.tparsed - e.tload) + "/" + Math.round(e.tbuffered - e.tparsed) + "/" + Math.round(8 * e.loaded / (e.tbuffered - e.trequest)));
              this._bwEstimator.sample(r, e.loaded);
              e.bwEstimate = this._bwEstimator.getEstimate();
              if (n.bitrateTest) {
                this.bitrateTestDelay = r / 1e3;
              } else {
                this.bitrateTestDelay = 0;
              }
            }
          };
          c.onError = function (t) {
            switch (t.details) {
              case o.ErrorDetails.FRAG_LOAD_ERROR:
              case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                this.clearTimer();
            }
          };
          c.clearTimer = function () {
            clearInterval(this.timer);
            this.timer = null;
          };
          c._findBestLevel = function (t, e, n, r, i, a, o, s, l) {
            for (var c = i; c >= r; c--) {
              var h = l[c];
              if (h) {
                var d;
                var f = h.details;
                var p = f ? f.totalduration / f.fragments.length : e;
                var m = !!f && f.live;
                d = c <= t ? o * n : s * n;
                var v = l[c].realBitrate ? Math.max(l[c].realBitrate, l[c].bitrate) : l[c].bitrate;
                var g = v * p / d;
                u.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + c + "/" + Math.round(d) + "/" + v + "/" + p + "/" + a + "/" + g);
                if (d > v && (!g || m && !this.bitrateTestDelay || g < a)) return c;
              }
            }
            return -1;
          };
          i = r;
          if (a = [{
            key: "nextAutoLevel",
            get: function () {
              var t = this._nextAutoLevel;
              var e = this._bwEstimator;
              if (!(-1 === t || e && e.canEstimate())) return t;
              var n = this._nextABRAutoLevel;
              if (-1 !== t) {
                n = Math.min(t, n);
              }
              return n;
            },
            set: function (t) {
              this._nextAutoLevel = t;
            }
          }, {
            key: "_nextABRAutoLevel",
            get: function () {
              var t = this.hls;
              var e = t.maxAutoLevel;
              var n = t.levels;
              var r = t.config;
              var i = t.minAutoLevel;
              var a = t.media;
              var o = this.lastLoadedFragLevel;
              var s = this.fragCurrent ? this.fragCurrent.duration : 0;
              var l = a ? a.currentTime : 0;
              var c = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1;
              var h = this._bwEstimator ? this._bwEstimator.getEstimate() : r.abrEwmaDefaultEstimate;
              var d = (j.bufferInfo(a, l, r.maxBufferHole).end - l) / c;
              var f = this._findBestLevel(o, s, h, i, e, d, r.abrBandWidthFactor, r.abrBandWidthUpFactor, n);
              if (f >= 0) return f;
              u.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
              var p = s ? Math.min(s, r.maxStarvationDelay) : r.maxStarvationDelay;
              var m = r.abrBandWidthFactor;
              var v = r.abrBandWidthUpFactor;
              if (0 === d) {
                var g = this.bitrateTestDelay;
                if (g) {
                  p = (s ? Math.min(s, r.maxLoadingDelay) : r.maxLoadingDelay) - g;
                  u.logger.trace("bitrate test took " + Math.round(1e3 * g) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * p) + " ms");
                  m = v = 1;
                }
              }
              f = this._findBestLevel(o, s, h, i, e, d + p, m, v, n);
              return Math.max(f, 0);
            }
          }]) {
            Ot(i.prototype, a);
          }
          return r;
        }(d);
        var kt = Y();
        var Nt = function (t) {
          var e;
          var n;
          function r(e) {
            var n;
            (n = t.call(this, e, l.default.MEDIA_ATTACHING, l.default.MEDIA_DETACHING, l.default.MANIFEST_PARSED, l.default.BUFFER_RESET, l.default.BUFFER_APPENDING, l.default.BUFFER_CODECS, l.default.BUFFER_EOS, l.default.BUFFER_FLUSHING, l.default.LEVEL_PTS_UPDATED, l.default.LEVEL_UPDATED) || this)._msDuration = null;
            n._levelDuration = null;
            n._levelTargetDuration = 10;
            n._live = null;
            n._objectUrl = null;
            n._needsFlush = !1;
            n._needsEos = !1;
            n.config = void 0;
            n.audioTimestampOffset = void 0;
            n.bufferCodecEventsExpected = 0;
            n._bufferCodecEventsTotal = 0;
            n.media = null;
            n.mediaSource = null;
            n.segments = [];
            n.parent = void 0;
            n.appending = !1;
            n.appended = 0;
            n.appendError = 0;
            n.flushBufferCounter = 0;
            n.tracks = {};
            n.pendingTracks = {};
            n.sourceBuffer = {};
            n.flushRange = [];
            n._onMediaSourceOpen = function () {
              u.logger.log("media source opened");
              n.hls.trigger(l.default.MEDIA_ATTACHED, {
                media: n.media
              });
              var t = n.mediaSource;
              if (t) {
                t.removeEventListener("sourceopen", n._onMediaSourceOpen);
              }
              n.checkPendingTracks();
            };
            n._onMediaSourceClose = function () {
              u.logger.log("media source closed");
            };
            n._onMediaSourceEnded = function () {
              u.logger.log("media source ended");
            };
            n._onSBUpdateEnd = function () {
              if (n.audioTimestampOffset && n.sourceBuffer.audio) {
                var t = n.sourceBuffer.audio;
                u.logger.warn("change mpeg audio timestamp offset from " + t.timestampOffset + " to " + n.audioTimestampOffset);
                t.timestampOffset = n.audioTimestampOffset;
                delete n.audioTimestampOffset;
              }
              if (n._needsFlush) {
                n.doFlush();
              }
              if (n._needsEos) {
                n.checkEos();
              }
              n.appending = !1;
              var e = n.parent;
              var r = n.segments.reduce(function (t, n) {
                return n.parent === e ? t + 1 : t;
              }, 0);
              var i = {};
              var a = n.sourceBuffer;
              for (var o in a) {
                var s = a[o];
                if (!s) throw Error("handling source buffer update end error: source buffer for " + o + " uninitilized and unable to update buffered TimeRanges.");
                i[o] = s.buffered;
              }
              n.hls.trigger(l.default.BUFFER_APPENDED, {
                parent: e,
                pending: r,
                timeRanges: i
              });
              if (n._needsFlush) {
                n.doAppending();
              }
              n.updateMediaElementDuration();
              if (0 === r) {
                n.flushLiveBackBuffer();
              }
            };
            n._onSBUpdateError = function (t) {
              u.logger.error("sourceBuffer error:", t);
              n.hls.trigger(l.default.ERROR, {
                type: o.ErrorTypes.MEDIA_ERROR,
                details: o.ErrorDetails.BUFFER_APPENDING_ERROR,
                fatal: !1
              });
            };
            n.config = e.config;
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i = r.prototype;
          i.destroy = function () {
            d.prototype.destroy.call(this);
          };
          i.onLevelPtsUpdated = function (t) {
            var e = t.type;
            var n = this.tracks.audio;
            if ("audio" === e && n && "audio/mpeg" === n.container) {
              var r = this.sourceBuffer.audio;
              if (!r) throw Error("Level PTS Updated and source buffer for audio uninitalized");
              if (Math.abs(r.timestampOffset - t.start) > 0.1) {
                var i = r.updating;
                try {
                  r.abort();
                } catch (t) {
                  u.logger.warn("can not abort audio buffer: " + t);
                }
                if (i) {
                  this.audioTimestampOffset = t.start;
                } else {
                  u.logger.warn("change mpeg audio timestamp offset from " + r.timestampOffset + " to " + t.start);
                  r.timestampOffset = t.start;
                }
              }
            }
          };
          i.onManifestParsed = function (t) {
            var e = 2;
            if (t.audio && !t.video || !t.altAudio) {
              e = 1;
            }
            this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = e;
            u.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
          };
          i.onMediaAttaching = function (t) {
            var e = this.media = t.media;
            if (e && kt) {
              var n = this.mediaSource = new kt();
              n.addEventListener("sourceopen", this._onMediaSourceOpen);
              n.addEventListener("sourceended", this._onMediaSourceEnded);
              n.addEventListener("sourceclose", this._onMediaSourceClose);
              e.src = window.URL.createObjectURL(n);
              this._objectUrl = e.src;
            }
          };
          i.onMediaDetaching = function () {
            u.logger.log("media source detaching");
            var t = this.mediaSource;
            if (t) {
              if ("open" === t.readyState) try {
                t.endOfStream();
              } catch (t) {
                u.logger.warn("onMediaDetaching:" + t.message + " while calling endOfStream");
              }
              t.removeEventListener("sourceopen", this._onMediaSourceOpen);
              t.removeEventListener("sourceended", this._onMediaSourceEnded);
              t.removeEventListener("sourceclose", this._onMediaSourceClose);
              if (this.media) {
                if (this._objectUrl) {
                  window.URL.revokeObjectURL(this._objectUrl);
                }
                if (this.media.src === this._objectUrl) {
                  this.media.removeAttribute("src");
                  this.media.load();
                } else {
                  u.logger.warn("media.src was changed by a third party - skip cleanup");
                }
              }
              this.mediaSource = null;
              this.media = null;
              this._objectUrl = null;
              this.bufferCodecEventsExpected = this._bufferCodecEventsTotal;
              this.pendingTracks = {};
              this.tracks = {};
              this.sourceBuffer = {};
              this.flushRange = [];
              this.segments = [];
              this.appended = 0;
            }
            this.hls.trigger(l.default.MEDIA_DETACHED);
          };
          i.checkPendingTracks = function () {
            var t = this.bufferCodecEventsExpected;
            var e = this.pendingTracks;
            var n = Object.keys(e).length;
            if (n && !t || 2 === n) {
              this.createSourceBuffers(e);
              this.pendingTracks = {};
              this.doAppending();
            }
          };
          i.onBufferReset = function () {
            var t = this.sourceBuffer;
            for (var e in t) {
              var n = t[e];
              try {
                if (n) {
                  if (this.mediaSource) {
                    this.mediaSource.removeSourceBuffer(n);
                  }
                  n.removeEventListener("updateend", this._onSBUpdateEnd);
                  n.removeEventListener("error", this._onSBUpdateError);
                }
              } catch (t) {}
            }
            this.sourceBuffer = {};
            this.flushRange = [];
            this.segments = [];
            this.appended = 0;
          };
          i.onBufferCodecs = function (t) {
            var e = this;
            if (Object.keys(this.sourceBuffer).length) {
              Object.keys(t).forEach(function (n) {
                e.pendingTracks[n] = t[n];
              });
              this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0);
              if (this.mediaSource && "open" === this.mediaSource.readyState) {
                this.checkPendingTracks();
              }
            }
          };
          i.createSourceBuffers = function (t) {
            var e = this.sourceBuffer;
            var n = this.mediaSource;
            if (!n) throw Error("createSourceBuffers called when mediaSource was null");
            for (var r in t) if (!e[r]) {
              var i = t[r];
              if (!i) throw Error("source buffer exists for track " + r + ", however track does not");
              var a = i.levelCodec || i.codec;
              var s = i.container + ";codecs=" + a;
              u.logger.log("creating sourceBuffer(" + s + ")");
              try {
                var c = e[r] = n.addSourceBuffer(s);
                c.addEventListener("updateend", this._onSBUpdateEnd);
                c.addEventListener("error", this._onSBUpdateError);
                this.tracks[r] = {
                  buffer: c,
                  codec: a,
                  id: i.id,
                  container: i.container,
                  levelCodec: i.levelCodec
                };
              } catch (t) {
                u.logger.error("error while trying to add sourceBuffer:" + t.message);
                this.hls.trigger(l.default.ERROR, {
                  type: o.ErrorTypes.MEDIA_ERROR,
                  details: o.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                  fatal: !1,
                  err: t,
                  mimeType: s
                });
              }
            }
            this.hls.trigger(l.default.BUFFER_CREATED, {
              tracks: this.tracks
            });
          };
          i.onBufferAppending = function (t) {
            if (this._needsFlush) {
              if (this.segments) {
                this.segments.push(t);
              } else {
                this.segments = [t];
              }
              this.doAppending();
            }
          };
          i.onBufferEos = function (t) {
            for (var e in this.sourceBuffer) if (!t.type || t.type === e) {
              var n = this.sourceBuffer[e];
              if (n && !n.ended) {
                n.ended = !0;
                u.logger.log(e + " sourceBuffer now EOS");
              }
            }
            this.checkEos();
          };
          i.checkEos = function () {
            var t = this.sourceBuffer;
            var e = this.mediaSource;
            if (e && "open" === e.readyState) {
              for (var n in t) {
                var r = t[n];
                if (r) {
                  if (!r.ended) return;
                  if (r.updating) return void (this._needsEos = !0);
                }
              }
              u.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
              try {
                e.endOfStream();
              } catch (t) {
                u.logger.warn("exception while calling mediaSource.endOfStream()");
              }
              this._needsEos = !1;
            } else this._needsEos = !1;
          };
          i.onBufferFlushing = function (t) {
            if (t.type) {
              this.flushRange.push({
                start: t.startOffset,
                end: t.endOffset,
                type: t.type
              });
            } else {
              this.flushRange.push({
                start: t.startOffset,
                end: t.endOffset,
                type: "video"
              });
              this.flushRange.push({
                start: t.startOffset,
                end: t.endOffset,
                type: "audio"
              });
            }
            this.flushBufferCounter = 0;
            this.doFlush();
          };
          i.flushLiveBackBuffer = function () {
            if (this._live) {
              var t = this.config.liveBackBufferLength;
              if (isFinite(t) && !(t < 0)) if (this.media) for (e = this.media.currentTime, n = this.sourceBuffer, r = Object.keys(n), i = e - Math.max(t, this._levelTargetDuration), a = r.length - 1, void 0; a >= 0; a--) {
                var e;
                var n;
                var r;
                var i;
                var a;
                var o = r[a];
                var s = n[o];
                if (s) {
                  var c = s.buffered;
                  if (c.length > 0 && i > c.start(0) && this.removeBufferRange(o, s, 0, i)) {
                    this.hls.trigger(l.default.LIVE_BACK_BUFFER_REACHED, {
                      bufferEnd: i
                    });
                  }
                }
              } else u.logger.error("flushLiveBackBuffer called without attaching media");
            }
          };
          i.onLevelUpdated = function (t) {
            var e = t.details;
            if (e.fragments.length > 0) {
              this._levelDuration = e.totalduration + e.fragments[0].start;
              this._levelTargetDuration = e.averagetargetduration || e.targetduration || 10;
              this._live = e.live;
              this.updateMediaElementDuration();
            }
          };
          i.updateMediaElementDuration = function () {
            var t;
            var e = this.config;
            if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
              for (var n in this.sourceBuffer) {
                var r = this.sourceBuffer[n];
                if (r && !0 === r.updating) return;
              }
              t = this.media.duration;
              if (null === this._msDuration) {
                this._msDuration = this.mediaSource.duration;
              }
              if (!0 === this._live && !0 === e.liveDurationInfinity) {
                u.logger.log("Media Source duration is set to Infinity");
                this._msDuration = this.mediaSource.duration = 1 / 0;
              } else {
                if (this._levelDuration > this._msDuration && this._levelDuration > t || !Object(s.isFiniteNumber)(t)) {
                  u.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3));
                  this._msDuration = this.mediaSource.duration = this._levelDuration;
                }
              }
            }
          };
          i.doFlush = function () {
            for (; this.flushRange.length;) {
              var t = this.flushRange[0];
              if (!this.flushBuffer(t.start, t.end, t.type)) return void (this._needsFlush = !0);
              this.flushRange.shift();
              this.flushBufferCounter = 0;
            }
            if (0 === this.flushRange.length) {
              this._needsFlush = !1;
              var e = 0;
              var n = this.sourceBuffer;
              try {
                for (var r in n) {
                  var i = n[r];
                  if (i) {
                    e += i.buffered.length;
                  }
                }
              } catch (t) {
                u.logger.error("error while accessing sourceBuffer.buffered");
              }
              this.appended = e;
              this.hls.trigger(l.default.BUFFER_FLUSHED);
            }
          };
          i.doAppending = function () {
            var t = this.config;
            var e = this.hls;
            var n = this.segments;
            var r = this.sourceBuffer;
            if (Object.keys(r).length) {
              if (!this.media || this.media.error) {
                this.segments = [];
                return void u.logger.error("trying to append although a media error occured, flush segment and abort");
              }
              if (!this.appending) {
                var i = n.shift();
                if (i) try {
                  var a = r[i.type];
                  if (!a) return void this._onSBUpdateEnd();
                  if (a.updating) return void n.unshift(i);
                  a.ended = !1;
                  this.parent = i.parent;
                  a.appendBuffer(i.data);
                  this.appendError = 0;
                  this.appended++;
                  this.appending = !0;
                } catch (r) {
                  u.logger.error("error while trying to append buffer:" + r.message);
                  n.unshift(i);
                  var s = {
                    type: o.ErrorTypes.MEDIA_ERROR,
                    parent: i.parent,
                    details: "",
                    fatal: !1
                  };
                  if (22 === r.code) {
                    this.segments = [];
                    s.details = o.ErrorDetails.BUFFER_FULL_ERROR;
                  } else {
                    this.appendError++;
                    s.details = o.ErrorDetails.BUFFER_APPEND_ERROR;
                    if (this.appendError > t.appendErrorMaxRetry) {
                      u.logger.log("fail " + t.appendErrorMaxRetry + " times to append segment in sourceBuffer");
                      this.segments = [];
                      s.fatal = !0;
                    }
                  }
                  e.trigger(l.default.ERROR, s);
                }
              }
            }
          };
          i.flushBuffer = function (t, e, n) {
            var r = this.sourceBuffer;
            if (!Object.keys(r).length) return !0;
            var i = "null";
            if (this.media) {
              i = this.media.currentTime.toFixed(3);
            }
            u.logger.log("flushBuffer,pos/start/end: " + i + "/" + t + "/" + e);
            if (this.flushBufferCounter >= this.appended) return u.logger.warn("abort flushing too many retries"), !0;
            var a = r[n];
            if (a) {
              a.ended = !1;
              if (a.updating) return u.logger.warn("cannot flush, sb updating in progress"), !1;
              if (this.removeBufferRange(n, a, t, e)) {
                this.flushBufferCounter++;
                return !1;
              }
            }
            u.logger.log("buffer flushed");
            return !0;
          };
          i.removeBufferRange = function (t, e, n, r) {
            try {
              for (var i = 0; i < e.buffered.length; i++) {
                var a = e.buffered.start(i);
                var o = e.buffered.end(i);
                var s = Math.max(a, n);
                var l = Math.min(o, r);
                if (Math.min(l, o) - s > 0.5) {
                  var c = "null";
                  if (this.media) {
                    c = this.media.currentTime.toString();
                  }
                  u.logger.log("sb remove " + t + " [" + s + "," + l + "], of [" + a + "," + o + "], pos:" + c);
                  e.remove(s, l);
                  return !0;
                }
              }
            } catch (t) {
              u.logger.warn("removeBufferRange failed", t);
            }
            return !1;
          };
          return r;
        }(d);
        function Bt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(t, r.key, r);
          }
        }
        var Ft;
        var Ut = function (t) {
          var e;
          var n;
          function r(e) {
            var n;
            (n = t.call(this, e, l.default.FPS_DROP_LEVEL_CAPPING, l.default.MEDIA_ATTACHING, l.default.MANIFEST_PARSED, l.default.LEVELS_UPDATED, l.default.BUFFER_CODECS, l.default.MEDIA_DETACHING) || this).autoLevelCapping = Number.POSITIVE_INFINITY;
            n.firstLevel = null;
            n.levels = [];
            n.media = null;
            n.restrictedLevels = [];
            n.timer = null;
            n.clientRect = null;
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i;
          var a;
          var o;
          var s = r.prototype;
          s.destroy = function () {
            if (this.hls.config.capLevelToPlayerSize) {
              this.media = null;
              this.clientRect = null;
              this.stopCapping();
            }
          };
          s.onFpsDropLevelCapping = function (t) {
            if (r.isLevelAllowed(t.droppedLevel, this.restrictedLevels)) {
              this.restrictedLevels.push(t.droppedLevel);
            }
          };
          s.onMediaAttaching = function (t) {
            this.media = t.media instanceof window.HTMLVideoElement ? t.media : null;
          };
          s.onManifestParsed = function (t) {
            var e = this.hls;
            this.restrictedLevels = [];
            this.levels = t.levels;
            this.firstLevel = t.firstLevel;
            if (e.config.capLevelToPlayerSize && t.video) {
              this.startCapping();
            }
          };
          s.onBufferCodecs = function (t) {
            if (this.hls.config.capLevelToPlayerSize && t.video) {
              this.startCapping();
            }
          };
          s.onLevelsUpdated = function (t) {
            this.levels = t.levels;
          };
          s.onMediaDetaching = function () {
            this.stopCapping();
          };
          s.detectPlayerSize = function () {
            if (this.media) {
              var t = this.levels ? this.levels.length : 0;
              if (t) {
                var e = this.hls;
                e.autoLevelCapping = this.getMaxLevel(t - 1);
                if (e.autoLevelCapping > this.autoLevelCapping) {
                  e.streamController.nextLevelSwitch();
                }
                this.autoLevelCapping = e.autoLevelCapping;
              }
            }
          };
          s.getMaxLevel = function (t) {
            var e = this;
            if (!this.levels) return -1;
            var n = this.levels.filter(function (n, i) {
              return r.isLevelAllowed(i, e.restrictedLevels) && i <= t;
            });
            this.clientRect = null;
            return r.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight);
          };
          s.startCapping = function () {
            if (this.timer) {
              this.autoLevelCapping = Number.POSITIVE_INFINITY;
              this.hls.firstLevel = this.getMaxLevel(this.firstLevel);
              clearInterval(this.timer);
              this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3);
              this.detectPlayerSize();
            }
          };
          s.stopCapping = function () {
            this.restrictedLevels = [];
            this.firstLevel = null;
            this.autoLevelCapping = Number.POSITIVE_INFINITY;
            if (this.timer) {
              this.timer = clearInterval(this.timer);
              this.timer = null;
            }
          };
          s.getDimensions = function () {
            if (this.clientRect) return this.clientRect;
            var t = this.media;
            var e = {
              width: 0,
              height: 0
            };
            if (t) {
              var n = t.getBoundingClientRect();
              e.width = n.width;
              e.height = n.height;
              if (e.width || e.height) {
                e.width = n.right - n.left || t.width || 0;
                e.height = n.bottom - n.top || t.height || 0;
              }
            }
            this.clientRect = e;
            return e;
          };
          r.isLevelAllowed = function (t, e) {
            if (void 0 === e) {
              e = [];
            }
            return -1 === e.indexOf(t);
          };
          r.getMaxLevelByMediaSize = function (t, e, n) {
            if (!t || t && !t.length) return -1;
            for (a = t.length - 1, o = 0, void 0; o < t.length; o += 1) {
              var r;
              var i;
              var a;
              var o;
              var s = t[o];
              if ((s.width >= e || s.height >= n) && (r = s, !(i = t[o + 1]) || r.width !== i.width || r.height !== i.height)) {
                a = o;
                break;
              }
            }
            return a;
          };
          i = r;
          o = [{
            key: "contentScaleFactor",
            get: function () {
              var t = 1;
              try {
                t = window.devicePixelRatio;
              } catch (t) {}
              return t;
            }
          }];
          if (a = [{
            key: "mediaWidth",
            get: function () {
              return this.getDimensions().width * r.contentScaleFactor;
            }
          }, {
            key: "mediaHeight",
            get: function () {
              return this.getDimensions().height * r.contentScaleFactor;
            }
          }]) {
            Bt(i.prototype, a);
          }
          if (o) {
            Bt(i, o);
          }
          return r;
        }(d);
        var zt = window.performance;
        var Gt = function (t) {
          var e;
          var n;
          function r(e) {
            return t.call(this, e, l.default.MEDIA_ATTACHING) || this;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          var i = r.prototype;
          i.destroy = function () {
            if (this.timer) {
              clearInterval(this.timer);
            }
            this.isVideoPlaybackQualityAvailable = !1;
          };
          i.onMediaAttaching = function (t) {
            var e = this.hls.config;
            if (e.capLevelOnFPSDrop) {
              if ("function" == typeof (this.video = t.media instanceof window.HTMLVideoElement ? t.media : null).getVideoPlaybackQuality) {
                this.isVideoPlaybackQualityAvailable = !0;
              }
              clearInterval(this.timer);
              this.timer = setInterval(this.checkFPSInterval.bind(this), e.fpsDroppedMonitoringPeriod);
            }
          };
          i.checkFPS = function (t, e, n) {
            var r = zt.now();
            if (e) {
              if (this.lastTime) {
                var i = r - this.lastTime;
                var a = n - this.lastDroppedFrames;
                var o = e - this.lastDecodedFrames;
                var s = 1e3 * a / i;
                var c = this.hls;
                c.trigger(l.default.FPS_DROP, {
                  currentDropped: a,
                  currentDecoded: o,
                  totalDroppedFrames: n
                });
                if (s > 0 && a > c.config.fpsDroppedMonitoringThreshold * o) {
                  var h = c.currentLevel;
                  u.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + h), h > 0 && (-1 === c.autoLevelCapping || c.autoLevelCapping >= h) && (h -= 1, c.trigger(l.default.FPS_DROP_LEVEL_CAPPING, {
                    level: h,
                    droppedLevel: c.currentLevel
                  }), c.autoLevelCapping = h, c.streamController.nextLevelSwitch());
                }
              }
              this.lastTime = r;
              this.lastDroppedFrames = n;
              this.lastDecodedFrames = e;
            }
          };
          i.checkFPSInterval = function () {
            var t = this.video;
            if (t) if (this.isVideoPlaybackQualityAvailable) {
              var e = t.getVideoPlaybackQuality();
              this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames);
            } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount);
          };
          return r;
        }(d);
        var Ht = function () {
          function t(t) {
            if (t && t.xhrSetup) {
              this.xhrSetup = t.xhrSetup;
            }
          }
          var e = t.prototype;
          e.destroy = function () {
            this.abort();
            this.loader = null;
          };
          e.abort = function () {
            var t = this.loader;
            if (t && 4 !== t.readyState) {
              this.stats.aborted = !0;
              t.abort();
            }
            window.clearTimeout(this.requestTimeout);
            this.requestTimeout = null;
            window.clearTimeout(this.retryTimeout);
            this.retryTimeout = null;
          };
          e.load = function (t, e, n) {
            this.context = t;
            this.config = e;
            this.callbacks = n;
            this.stats = {
              trequest: window.performance.now(),
              retry: 0
            };
            this.retryDelay = e.retryDelay;
            this.loadInternal();
          };
          e.loadInternal = function () {
            var t;
            var e = this.context;
            t = this.loader = new window.XMLHttpRequest();
            var n = this.stats;
            n.tfirst = 0;
            n.loaded = 0;
            var r = this.xhrSetup;
            try {
              if (r) try {
                r(t, e.url);
              } catch (n) {
                t.open("GET", e.url, !0);
                r(t, e.url);
              }
              if (t.readyState) {
                t.open("GET", e.url, !0);
              }
            } catch (n) {
              return void this.callbacks.onError({
                code: t.status,
                text: n.message
              }, e, t);
            }
            if (e.rangeEnd) {
              t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1));
            }
            t.onreadystatechange = this.readystatechange.bind(this);
            t.onprogress = this.loadprogress.bind(this);
            t.responseType = e.responseType;
            this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout);
            t.send();
          };
          e.readystatechange = function (t) {
            var e = t.currentTarget;
            var n = e.readyState;
            var r = this.stats;
            var i = this.context;
            var a = this.config;
            if (!r.aborted && n >= 2) {
              window.clearTimeout(this.requestTimeout);
              if (0 === r.tfirst) {
                r.tfirst = Math.max(window.performance.now(), r.trequest);
              }
              if (4 === n) {
                var o = e.status;
                if (o >= 200 && o < 300) {
                  var s;
                  var l;
                  r.tload = Math.max(r.tfirst, window.performance.now());
                  l = "arraybuffer" === i.responseType ? (s = e.response).byteLength : (s = e.responseText).length;
                  r.loaded = r.total = l;
                  var c = {
                    url: e.responseURL,
                    data: s
                  };
                  this.callbacks.onSuccess(c, r, i, e);
                } else if (r.retry >= a.maxRetry || o >= 400 && o < 499) {
                  u.logger.error(o + " while loading " + i.url);
                  this.callbacks.onError({
                    code: o,
                    text: e.statusText
                  }, i, e);
                } else {
                  u.logger.warn(o + " while loading " + i.url + ", retrying in " + this.retryDelay + "...");
                  this.destroy();
                  this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay);
                  this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay);
                  r.retry++;
                }
              } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout);
            }
          };
          e.loadtimeout = function () {
            u.logger.warn("timeout while loading " + this.context.url);
            this.callbacks.onTimeout(this.stats, this.context, null);
          };
          e.loadprogress = function (t) {
            var e = t.currentTarget;
            var n = this.stats;
            n.loaded = t.loaded;
            if (t.lengthComputable) {
              n.total = t.total;
            }
            var r = this.callbacks.onProgress;
            if (r) {
              r(n, this.context, null, e);
            }
          };
          return t;
        }();
        var jt = n("./src/empty.js");
        function Vt(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            if (e) {
              r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              });
            }
            n.push.apply(n, r);
          }
          return n;
        }
        function Wt(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            if (e % 2) {
              Vt(Object(n), !0).forEach(function (e) {
                qt(t, e, n[e]);
              });
            } else {
              if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
              } else {
                Vt(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
              }
            }
          }
          return t;
        }
        function qt(t, e, n) {
          if (e in t) {
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            });
          } else {
            t[e] = n;
          }
          return t;
        }
        !function (t) {
          t.WIDEVINE = "com.widevine.alpha";
          t.PLAYREADY = "com.microsoft.playready";
        }(Ft || (Ft = {}));
        var Yt = Wt(Wt({
          autoStartLoad: !0,
          startPosition: -1,
          defaultAudioCodec: void 0,
          debug: !1,
          capLevelOnFPSDrop: !1,
          capLevelToPlayerSize: !1,
          initialLiveManifestSize: 1,
          maxBufferLength: 30,
          maxBufferSize: 6e7,
          maxBufferHole: 0.5,
          lowBufferWatchdogPeriod: 0.5,
          highBufferWatchdogPeriod: 3,
          nudgeOffset: 0.1,
          nudgeMaxRetry: 3,
          maxFragLookUpTolerance: 0.25,
          liveSyncDurationCount: 3,
          liveMaxLatencyDurationCount: 1 / 0,
          liveSyncDuration: void 0,
          liveMaxLatencyDuration: void 0,
          liveDurationInfinity: !1,
          liveBackBufferLength: 1 / 0,
          maxMaxBufferLength: 600,
          enableWorker: !0,
          enableSoftwareAES: !0,
          manifestLoadingTimeOut: 1e4,
          manifestLoadingMaxRetry: 1,
          manifestLoadingRetryDelay: 1e3,
          manifestLoadingMaxRetryTimeout: 64e3,
          startLevel: void 0,
          levelLoadingTimeOut: 1e4,
          levelLoadingMaxRetry: 4,
          levelLoadingRetryDelay: 1e3,
          levelLoadingMaxRetryTimeout: 64e3,
          fragLoadingTimeOut: 2e4,
          fragLoadingMaxRetry: 6,
          fragLoadingRetryDelay: 1e3,
          fragLoadingMaxRetryTimeout: 64e3,
          startFragPrefetch: !1,
          fpsDroppedMonitoringPeriod: 5e3,
          fpsDroppedMonitoringThreshold: 0.2,
          appendErrorMaxRetry: 3,
          loader: Ht,
          fLoader: void 0,
          pLoader: void 0,
          xhrSetup: void 0,
          licenseXhrSetup: void 0,
          abrController: Dt,
          bufferController: Nt,
          capLevelController: Ut,
          fpsController: Gt,
          stretchShortVideoTrack: !1,
          maxAudioFramesDrift: 1,
          forceKeyFrameOnDiscontinuity: !0,
          abrEwmaFastLive: 3,
          abrEwmaSlowLive: 9,
          abrEwmaFastVoD: 3,
          abrEwmaSlowVoD: 9,
          abrEwmaDefaultEstimate: 5e5,
          abrBandWidthFactor: 0.95,
          abrBandWidthUpFactor: 0.7,
          abrMaxWithRealBitrate: !1,
          maxStarvationDelay: 4,
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          emeEnabled: !1,
          widevineLicenseUrl: void 0,
          drmSystemOptions: {},
          requestMediaKeySystemAccessFunc: "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null,
          testBandwidth: !0
        }, {
          cueHandler: jt,
          enableCEA708Captions: !1,
          enableWebVTT: !1,
          captionsTextTrack1Label: "English",
          captionsTextTrack1LanguageCode: "en",
          captionsTextTrack2Label: "Spanish",
          captionsTextTrack2LanguageCode: "es",
          captionsTextTrack3Label: "Unknown CC",
          captionsTextTrack3LanguageCode: "",
          captionsTextTrack4Label: "Unknown CC",
          captionsTextTrack4LanguageCode: "",
          renderTextTracksNatively: !0
        }), {}, {
          subtitleStreamController: void 0,
          subtitleTrackController: void 0,
          timelineController: void 0,
          audioStreamController: void 0,
          audioTrackController: void 0,
          emeController: void 0
        });
        function Xt(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            if (e) {
              r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              });
            }
            n.push.apply(n, r);
          }
          return n;
        }
        function Zt(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            if (e % 2) {
              Xt(Object(n), !0).forEach(function (e) {
                Kt(t, e, n[e]);
              });
            } else {
              if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
              } else {
                Xt(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
              }
            }
          }
          return t;
        }
        function Kt(t, e, n) {
          if (e in t) {
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            });
          } else {
            t[e] = n;
          }
          return t;
        }
        function Jt(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function $t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1;
            r.configurable = !0;
            if ("value" in r) {
              r.writable = !0;
            }
            Object.defineProperty(t, r.key, r);
          }
        }
        function Qt(t, e, n) {
          if (e) {
            $t(t.prototype, e);
          }
          if (n) {
            $t(t, n);
          }
          return t;
        }
        var te = function (t) {
          var e;
          var n;
          function r(e) {
            var n;
            if (void 0 === e) {
              e = {};
            }
            (n = t.call(this) || this).config = void 0;
            n._autoLevelCapping = void 0;
            n.abrController = void 0;
            n.capLevelController = void 0;
            n.levelController = void 0;
            n.streamController = void 0;
            n.networkControllers = void 0;
            n.audioTrackController = void 0;
            n.subtitleTrackController = void 0;
            n.emeController = void 0;
            n.coreComponents = void 0;
            n.media = null;
            n.url = null;
            var i = r.DefaultConfig;
            if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
            n.config = Zt(Zt({}, i), e);
            var a = Jt(n).config;
            if (void 0 !== a.liveMaxLatencyDurationCount && a.liveMaxLatencyDurationCount <= a.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
            if (void 0 !== a.liveMaxLatencyDuration && (void 0 === a.liveSyncDuration || a.liveMaxLatencyDuration <= a.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
            Object(u.enableLogs)(a.debug);
            n._autoLevelCapping = -1;
            var o = n.abrController = new a.abrController(Jt(n));
            var s = new a.bufferController(Jt(n));
            var l = n.capLevelController = new a.capLevelController(Jt(n));
            var c = new a.fpsController(Jt(n));
            var h = new D(Jt(n));
            var d = new k(Jt(n));
            var f = new N(Jt(n));
            var p = new Ct(Jt(n));
            var m = n.levelController = new Mt(Jt(n));
            var v = new G(Jt(n));
            var g = [m, n.streamController = new Et(Jt(n), v)];
            var y = a.audioStreamController;
            if (y) {
              g.push(new y(Jt(n), v));
            }
            n.networkControllers = g;
            var b = [h, d, f, o, s, l, c, p, v];
            if (y = a.audioTrackController) {
              var x = new y(Jt(n));
              n.audioTrackController = x;
              b.push(x);
            }
            if (y = a.subtitleTrackController) {
              var _ = new y(Jt(n));
              n.subtitleTrackController = _;
              g.push(_);
            }
            if (y = a.emeController) {
              var w = new y(Jt(n));
              n.emeController = w;
              b.push(w);
            }
            if (y = a.subtitleStreamController) {
              g.push(new y(Jt(n), v));
            }
            if (y = a.timelineController) {
              b.push(new y(Jt(n)));
            }
            n.coreComponents = b;
            return n;
          }
          n = t;
          (e = r).prototype = Object.create(n.prototype);
          e.prototype.constructor = e;
          e.__proto__ = n;
          r.isSupported = function () {
            return function () {
              var t = Y();
              if (!t) return !1;
              var e = self.SourceBuffer || self.WebKitSourceBuffer;
              var n = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
              var r = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
              return !!n && !!r;
            }();
          };
          Qt(r, null, [{
            key: "version",
            get: function () {
              return "0.14.17";
            }
          }, {
            key: "Events",
            get: function () {
              return l.default;
            }
          }, {
            key: "ErrorTypes",
            get: function () {
              return o.ErrorTypes;
            }
          }, {
            key: "ErrorDetails",
            get: function () {
              return o.ErrorDetails;
            }
          }, {
            key: "DefaultConfig",
            get: function () {
              return r.defaultConfig ? r.defaultConfig : Yt;
            },
            set: function (t) {
              r.defaultConfig = t;
            }
          }]);
          var i = r.prototype;
          i.destroy = function () {
            u.logger.log("destroy");
            this.trigger(l.default.DESTROYING);
            this.detachMedia();
            this.coreComponents.concat(this.networkControllers).forEach(function (t) {
              t.destroy();
            });
            this.url = null;
            this.removeAllListeners();
            this._autoLevelCapping = -1;
          };
          i.attachMedia = function (t) {
            u.logger.log("attachMedia");
            this.media = t;
            this.trigger(l.default.MEDIA_ATTACHING, {
              media: t
            });
          };
          i.detachMedia = function () {
            u.logger.log("detachMedia");
            this.trigger(l.default.MEDIA_DETACHING);
            this.media = null;
          };
          i.loadSource = function (t) {
            t = a.buildAbsoluteURL(window.location.href, t, {
              alwaysNormalize: !0
            });
            u.logger.log("loadSource:" + t);
            this.url = t;
            this.trigger(l.default.MANIFEST_LOADING, {
              url: t
            });
          };
          i.startLoad = function (t) {
            if (void 0 === t) {
              t = -1;
            }
            u.logger.log("startLoad(" + t + ")");
            this.networkControllers.forEach(function (e) {
              e.startLoad(t);
            });
          };
          i.stopLoad = function () {
            u.logger.log("stopLoad");
            this.networkControllers.forEach(function (t) {
              t.stopLoad();
            });
          };
          i.swapAudioCodec = function () {
            u.logger.log("swapAudioCodec");
            this.streamController.swapAudioCodec();
          };
          i.recoverMediaError = function () {
            u.logger.log("recoverMediaError");
            var t = this.media;
            this.detachMedia();
            if (t) {
              this.attachMedia(t);
            }
          };
          i.removeLevel = function (t, e) {
            if (void 0 === e) {
              e = 0;
            }
            this.levelController.removeLevel(t, e);
          };
          Qt(r, [{
            key: "levels",
            get: function () {
              return this.levelController.levels;
            }
          }, {
            key: "currentLevel",
            get: function () {
              return this.streamController.currentLevel;
            },
            set: function (t) {
              u.logger.log("set currentLevel:" + t);
              this.loadLevel = t;
              this.streamController.immediateLevelSwitch();
            }
          }, {
            key: "nextLevel",
            get: function () {
              return this.streamController.nextLevel;
            },
            set: function (t) {
              u.logger.log("set nextLevel:" + t);
              this.levelController.manualLevel = t;
              this.streamController.nextLevelSwitch();
            }
          }, {
            key: "loadLevel",
            get: function () {
              return this.levelController.level;
            },
            set: function (t) {
              u.logger.log("set loadLevel:" + t);
              this.levelController.manualLevel = t;
            }
          }, {
            key: "nextLoadLevel",
            get: function () {
              return this.levelController.nextLoadLevel;
            },
            set: function (t) {
              this.levelController.nextLoadLevel = t;
            }
          }, {
            key: "firstLevel",
            get: function () {
              return Math.max(this.levelController.firstLevel, this.minAutoLevel);
            },
            set: function (t) {
              u.logger.log("set firstLevel:" + t);
              this.levelController.firstLevel = t;
            }
          }, {
            key: "startLevel",
            get: function () {
              return this.levelController.startLevel;
            },
            set: function (t) {
              u.logger.log("set startLevel:" + t);
              if (-1 !== t) {
                t = Math.max(t, this.minAutoLevel);
              }
              this.levelController.startLevel = t;
            }
          }, {
            key: "capLevelToPlayerSize",
            set: function (t) {
              var e = !!t;
              if (e !== this.config.capLevelToPlayerSize) {
                if (e) {
                  this.capLevelController.startCapping();
                } else {
                  this.capLevelController.stopCapping();
                  this.autoLevelCapping = -1;
                  this.streamController.nextLevelSwitch();
                }
                this.config.capLevelToPlayerSize = e;
              }
            }
          }, {
            key: "autoLevelCapping",
            get: function () {
              return this._autoLevelCapping;
            },
            set: function (t) {
              u.logger.log("set autoLevelCapping:" + t);
              this._autoLevelCapping = t;
            }
          }, {
            key: "bandwidthEstimate",
            get: function () {
              var t = this.abrController._bwEstimator;
              return t ? t.getEstimate() : NaN;
            }
          }, {
            key: "autoLevelEnabled",
            get: function () {
              return -1 === this.levelController.manualLevel;
            }
          }, {
            key: "manualLevel",
            get: function () {
              return this.levelController.manualLevel;
            }
          }, {
            key: "minAutoLevel",
            get: function () {
              for (t = this.levels, e = this.config.minAutoBitrate, n = t ? t.length : 0, r = 0, void 0; r < n; r++) {
                var t;
                var e;
                var n;
                var r;
                if ((t[r].realBitrate ? Math.max(t[r].realBitrate, t[r].bitrate) : t[r].bitrate) > e) return r;
              }
              return 0;
            }
          }, {
            key: "maxAutoLevel",
            get: function () {
              var t = this.levels;
              var e = this.autoLevelCapping;
              return -1 === e && t && t.length ? t.length - 1 : e;
            }
          }, {
            key: "nextAutoLevel",
            get: function () {
              return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
            },
            set: function (t) {
              this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t);
            }
          }, {
            key: "audioTracks",
            get: function () {
              var t = this.audioTrackController;
              return t ? t.audioTracks : [];
            }
          }, {
            key: "audioTrack",
            get: function () {
              var t = this.audioTrackController;
              return t ? t.audioTrack : -1;
            },
            set: function (t) {
              var e = this.audioTrackController;
              if (e) {
                e.audioTrack = t;
              }
            }
          }, {
            key: "liveSyncPosition",
            get: function () {
              return this.streamController.liveSyncPosition;
            }
          }, {
            key: "subtitleTracks",
            get: function () {
              var t = this.subtitleTrackController;
              return t ? t.subtitleTracks : [];
            }
          }, {
            key: "subtitleTrack",
            get: function () {
              var t = this.subtitleTrackController;
              return t ? t.subtitleTrack : -1;
            },
            set: function (t) {
              var e = this.subtitleTrackController;
              if (e) {
                e.subtitleTrack = t;
              }
            }
          }, {
            key: "subtitleDisplay",
            get: function () {
              var t = this.subtitleTrackController;
              return !!t && t.subtitleDisplay;
            },
            set: function (t) {
              var e = this.subtitleTrackController;
              if (e) {
                e.subtitleDisplay = t;
              }
            }
          }]);
          return r;
        }(Z);
        te.defaultConfig = void 0;
      },
      "./src/polyfills/number.js": function (t, e, n) {
        "use strict";

        n.r(e);
        n.d(e, "isFiniteNumber", function () {
          return r;
        });
        n.d(e, "MAX_SAFE_INTEGER", function () {
          return i;
        });
        var r = Number.isFinite || function (t) {
          return "number" == typeof t && isFinite(t);
        };
        var i = Number.MAX_SAFE_INTEGER || 9007199254740991;
      },
      "./src/utils/get-self-scope.js": function (t, e, n) {
        "use strict";

        function r() {
          return "undefined" == typeof window ? self : window;
        }
        n.r(e);
        n.d(e, "getSelfScope", function () {
          return r;
        });
      },
      "./src/utils/logger.js": function (t, e, n) {
        "use strict";

        n.r(e);
        n.d(e, "enableLogs", function () {
          return c;
        });
        n.d(e, "logger", function () {
          return h;
        });
        var r = n("./src/utils/get-self-scope.js");
        function i() {}
        var a = {
          trace: i,
          debug: i,
          log: i,
          warn: i,
          info: i,
          error: i
        };
        var o = a;
        function s(t, e) {
          return "[" + t + "] > " + e;
        }
        var l = Object(r.getSelfScope)();
        function u(t) {
          var e = l.console[t];
          return e ? function () {
            for (n = arguments.length, r = new Array(n), i = 0, void 0; i < n; i++) {
              var n;
              var r;
              var i;
              r[i] = arguments[i];
            }
            if (r[0]) {
              r[0] = s(t, r[0]);
            }
            e.apply(l.console, r);
          } : i;
        }
        var c = function (t) {
          if (l.console && !0 === t || "object" == typeof t) {
            !function (t) {
              for (e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1, void 0; r < e; r++) {
                var e;
                var n;
                var r;
                n[r - 1] = arguments[r];
              }
              n.forEach(function (e) {
                o[e] = t[e] ? t[e].bind(t) : u(e);
              });
            }(t, "debug", "log", "info", "warn", "error");
            try {
              o.log();
            } catch (t) {
              o = a;
            }
          } else o = a;
        };
        var h = o;
      }
    }).default;
  };
  exports.exports = e();
}