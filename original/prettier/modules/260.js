var r;
var i = require(4019);
var a = require(9781);
var o = require(7854);
var s = require(111);
var l = require(6656);
var u = require(648);
var c = require(8880);
var h = require(1320);
var d = require(3070).f;
var f = require(9518);
var p = require(7674);
var m = require(5112);
var v = require(9711);
var g = o.Int8Array;
var y = g && g.prototype;
var b = o.Uint8ClampedArray;
var x = b && b.prototype;
var _ = g && f(g);
var w = y && f(y);
var S = Object.prototype;
var E = S.isPrototypeOf;
var T = m("toStringTag");
var M = v("TYPED_ARRAY_TAG");
var A = i && !!p && "Opera" !== u(o.opera);
var L = !1;
var C = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};
var P = {
  BigInt64Array: 8,
  BigUint64Array: 8
};
var R = function (t) {
  if (!s(t)) return !1;
  var e = u(t);
  return l(C, e) || l(P, e);
};
for (r in C) if (o[r]) {
  A = !1;
}
if ((!A || "function" != typeof _ || _ === Function.prototype) && (_ = function () {
  throw TypeError("Incorrect invocation");
}, A)) for (r in C) if (o[r]) {
  p(o[r], _);
}
if ((!A || !w || w === S) && (w = _.prototype, A)) for (r in C) if (o[r]) {
  p(o[r].prototype, w);
}
if (A && f(x) !== w) {
  p(x, w);
}
if (a && !l(w, T)) for (r in L = !0, d(w, T, {
  get: function () {
    return s(this) ? this[M] : void 0;
  }
}), C) o[r] && c(o[r], M, r);
exports.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: A,
  TYPED_ARRAY_TAG: L && M,
  aTypedArray: function (t) {
    if (R(t)) return t;
    throw TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (t) {
    if (p) {
      if (E.call(_, t)) return t;
    } else for (var e in C) if (l(C, r)) {
      var n = o[e];
      if (n && (t === n || E.call(n, t))) return t;
    }
    throw TypeError("Target is not a typed array constructor");
  },
  exportTypedArrayMethod: function (t, e, n) {
    if (a) {
      if (n) for (var r in C) {
        var i = o[r];
        if (i && l(i.prototype, t)) {
          delete i.prototype[t];
        }
      }
      if (w[t] && !n) {
        h(w, t, n ? e : A && y[t] || e);
      }
    }
  },
  exportTypedArrayStaticMethod: function (t, e, n) {
    var r;
    var i;
    if (a) {
      if (p) {
        if (n) for (r in C) if ((i = o[r]) && l(i, t)) {
          delete i[t];
        }
        if (_[t] && !n) return;
        try {
          return h(_, t, n ? e : A && g[t] || e);
        } catch (t) {}
      }
      for (r in C) if (!(i = o[r]) || i[t] && !n) {
        h(i, t, e);
      }
    }
  },
  isView: function (t) {
    if (!s(t)) return !1;
    var e = u(t);
    return "DataView" === e || l(C, e) || l(P, e);
  },
  isTypedArray: R,
  TypedArray: _,
  TypedArrayPrototype: w
};