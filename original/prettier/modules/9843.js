var r = require(2109);
var i = require(7854);
var a = require(9781);
var o = require(3832);
var s = require(260);
var l = require(3331);
var u = require(5787);
var c = require(9114);
var h = require(8880);
var d = require(7466);
var f = require(7067);
var p = require(4590);
var m = require(7593);
var v = require(6656);
var g = require(648);
var y = require(111);
var b = require(30);
var x = require(7674);
var _ = require(8006).f;
var w = require(7321);
var S = require(2092).forEach;
var E = require(6340);
var T = require(3070);
var M = require(1236);
var A = require(9909);
var L = require(9587);
var C = A.get;
var P = A.set;
var R = T.f;
var O = M.f;
var I = Math.round;
var D = i.RangeError;
var k = l.ArrayBuffer;
var N = l.DataView;
var B = s.NATIVE_ARRAY_BUFFER_VIEWS;
var F = s.TYPED_ARRAY_TAG;
var U = s.TypedArray;
var z = s.TypedArrayPrototype;
var G = s.aTypedArrayConstructor;
var H = s.isTypedArray;
var j = "BYTES_PER_ELEMENT";
var V = "Wrong length";
var W = function (t, e) {
  for (n = 0, r = e.length, i = new (G(t))(r), void 0; r > n;) {
    var n;
    var r;
    var i;
    i[n] = e[n++];
  }
  return i;
};
var q = function (t, e) {
  R(t, e, {
    get: function () {
      return C(this)[e];
    }
  });
};
var Y = function (t) {
  var e;
  return t instanceof k || "ArrayBuffer" == (e = g(t)) || "SharedArrayBuffer" == e;
};
var X = function (t, e) {
  return H(t) && "symbol" != typeof e && e in t && String(+e) == String(e);
};
var Z = function (t, e) {
  return X(t, e = m(e, !0)) ? c(2, t[e]) : O(t, e);
};
var K = function (t, e, n) {
  return !(X(t, e = m(e, !0)) && y(n) && v(n, "value")) || v(n, "get") || v(n, "set") || n.configurable || v(n, "writable") && !n.writable || v(n, "enumerable") && !n.enumerable ? R(t, e, n) : (t[e] = n.value, t);
};
if (a) {
  if (B) {
    M.f = Z;
    T.f = K;
    q(z, "buffer");
    q(z, "byteOffset");
    q(z, "byteLength");
    q(z, "length");
  }
  r({
    target: "Object",
    stat: !0,
    forced: !B
  }, {
    getOwnPropertyDescriptor: Z,
    defineProperty: K
  });
  exports.exports = function (t, e, n) {
    var a = t.match(/\d+$/)[0] / 8;
    var s = t + (n ? "Clamped" : "") + "Array";
    var l = "get" + t;
    var c = "set" + t;
    var m = i[s];
    var v = m;
    var g = v && v.prototype;
    var T = {};
    var M = function (t, e) {
      R(t, e, {
        get: function () {
          return function (t, e) {
            var n = C(t);
            return n.view[l](e * a + n.byteOffset, !0);
          }(this, e);
        },
        set: function (t) {
          return function (t, e, r) {
            var i = C(t);
            if (n) {
              r = (r = I(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r;
            }
            i.view[c](e * a + i.byteOffset, r, !0);
          }(this, e, t);
        },
        enumerable: !0
      });
    };
    if (B) {
      if (o) {
        v = e(function (t, e, n, r) {
          u(t, v, s);
          return L(y(e) ? Y(e) ? void 0 !== r ? new m(e, p(n, a), r) : void 0 !== n ? new m(e, p(n, a)) : new m(e) : H(e) ? W(v, e) : w.call(v, e) : new m(f(e)), t, v);
        });
        if (x) {
          x(v, U);
        }
        S(_(m), function (t) {
          if (t in v) {
            h(v, t, m[t]);
          }
        });
        v.prototype = g;
      }
    } else {
      v = e(function (t, e, n, r) {
        u(t, v, s);
        var i;
        var o;
        var l;
        var c = 0;
        var h = 0;
        if (y(e)) {
          if (!Y(e)) return H(e) ? W(v, e) : w.call(v, e);
          i = e;
          h = p(n, a);
          var m = e.byteLength;
          if (void 0 === r) {
            if (m % a) throw D(V);
            if ((o = m - h) < 0) throw D(V);
          } else if ((o = d(r) * a) + h > m) throw D(V);
          l = o / a;
        } else {
          l = f(e);
          i = new k(o = l * a);
        }
        for (P(t, {
          buffer: i,
          byteOffset: h,
          byteLength: o,
          length: l,
          view: new N(i)
        }); c < l;) M(t, c++);
      });
      if (x) {
        x(v, U);
      }
      g = v.prototype = b(z);
    }
    if (g.constructor !== v) {
      h(g, "constructor", v);
    }
    if (F) {
      h(g, F, s);
    }
    T[s] = v;
    r({
      global: !0,
      forced: v != m,
      sham: !B
    }, T);
    if (j in v) {
      h(v, j, a);
    }
    if (j in g) {
      h(g, j, a);
    }
    E(s);
  };
} else {
  exports.exports = function () {};
}