var r = require(2109);
var i = require(7854);
var a = require(5005);
var o = require(1913);
var s = require(9781);
var l = require(133);
var u = require(3307);
var c = require(7293);
var h = require(6656);
var d = require(3157);
var f = require(111);
var p = require(9670);
var m = require(7908);
var v = require(5656);
var g = require(7593);
var y = require(9114);
var b = require(30);
var x = require(1956);
var _ = require(8006);
var w = require(1156);
var S = require(5181);
var E = require(1236);
var T = require(3070);
var M = require(5296);
var A = require(8880);
var L = require(1320);
var C = require(2309);
var P = require(6200);
var R = require(3501);
var O = require(9711);
var I = require(5112);
var D = require(6061);
var k = require(7235);
var N = require(8003);
var B = require(9909);
var F = require(2092).forEach;
var U = P("hidden");
var z = "Symbol";
var G = I("toPrimitive");
var H = B.set;
var j = B.getterFor(z);
var V = Object.prototype;
var W = i.Symbol;
var q = a("JSON", "stringify");
var Y = E.f;
var X = T.f;
var Z = w.f;
var K = M.f;
var J = C("symbols");
var $ = C("op-symbols");
var Q = C("string-to-symbol-registry");
var tt = C("symbol-to-string-registry");
var et = C("wks");
var nt = i.QObject;
var rt = !nt || !nt.prototype || !nt.prototype.findChild;
var it = s && c(function () {
  return 7 != b(X({}, "a", {
    get: function () {
      return X(this, "a", {
        value: 7
      }).a;
    }
  })).a;
}) ? function (t, e, n) {
  var r = Y(V, e);
  if (r) {
    delete V[e];
  }
  X(t, e, n);
  if (r && t !== V) {
    X(V, e, r);
  }
} : X;
var at = function (t, e) {
  var n = J[t] = b(W.prototype);
  H(n, {
    type: z,
    tag: t,
    description: e
  });
  if (s) {
    n.description = e;
  }
  return n;
};
var ot = u ? function (t) {
  return "symbol" == typeof t;
} : function (t) {
  return Object(t) instanceof W;
};
var st = function (t, e, n) {
  if (t === V) {
    st($, e, n);
  }
  p(t);
  var r = g(e, !0);
  p(n);
  return h(J, r) ? (n.enumerable ? (h(t, U) && t[U][r] && (t[U][r] = !1), n = b(n, {
    enumerable: y(0, !1)
  })) : (h(t, U) || X(t, U, y(1, {})), t[U][r] = !0), it(t, r, n)) : X(t, r, n);
};
var lt = function (t, e) {
  p(t);
  var n = v(e);
  var r = x(n).concat(dt(n));
  F(r, function (e) {
    if (s && !ut.call(n, e)) {
      st(t, e, n[e]);
    }
  });
  return t;
};
var ut = function (t) {
  var e = g(t, !0);
  var n = K.call(this, e);
  return !(this === V && h(J, e) && !h($, e)) && (!(n || !h(this, e) || !h(J, e) || h(this, U) && this[U][e]) || n);
};
var ct = function (t, e) {
  var n = v(t);
  var r = g(e, !0);
  if (n !== V || !h(J, r) || h($, r)) {
    var i = Y(n, r);
    if (!i || !h(J, r) || h(n, U) && n[U][r]) {
      i.enumerable = !0;
    }
    return i;
  }
};
var ht = function (t) {
  var e = Z(v(t));
  var n = [];
  F(e, function (t) {
    if (h(J, t) || h(R, t)) {
      n.push(t);
    }
  });
  return n;
};
var dt = function (t) {
  var e = t === V;
  var n = Z(e ? $ : v(t));
  var r = [];
  F(n, function (t) {
    if (!h(J, t) || e && !h(V, t)) {
      r.push(J[t]);
    }
  });
  return r;
};
if (l) {
  W = function () {
    if (this instanceof W) throw TypeError("Symbol is not a constructor");
    var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0;
    var e = O(t);
    var n = function (t) {
      if (this === V) {
        n.call($, t);
      }
      if (h(this, U) && h(this[U], e)) {
        this[U][e] = !1;
      }
      it(this, e, y(1, t));
    };
    if (s && rt) {
      it(V, e, {
        configurable: !0,
        set: n
      });
    }
    return at(e, t);
  };
  L(W.prototype, "toString", function () {
    return j(this).tag;
  });
  L(W, "withoutSetter", function (t) {
    return at(O(t), t);
  });
  M.f = ut;
  T.f = st;
  E.f = ct;
  _.f = w.f = ht;
  S.f = dt;
  D.f = function (t) {
    return at(I(t), t);
  };
  if (s) {
    X(W.prototype, "description", {
      configurable: !0,
      get: function () {
        return j(this).description;
      }
    });
    if (o) {
      L(V, "propertyIsEnumerable", ut, {
        unsafe: !0
      });
    }
  }
}
r({
  global: !0,
  wrap: !0,
  forced: !l,
  sham: !l
}, {
  Symbol: W
});
F(x(et), function (t) {
  k(t);
});
r({
  target: z,
  stat: !0,
  forced: !l
}, {
  for: function (t) {
    var e = String(t);
    if (h(Q, e)) return Q[e];
    var n = W(e);
    Q[e] = n;
    tt[n] = e;
    return n;
  },
  keyFor: function (t) {
    if (!ot(t)) throw TypeError(t + " is not a symbol");
    if (h(tt, t)) return tt[t];
  },
  useSetter: function () {
    rt = !0;
  },
  useSimple: function () {
    rt = !1;
  }
});
r({
  target: "Object",
  stat: !0,
  forced: !l,
  sham: !s
}, {
  create: function (t, e) {
    return void 0 === e ? b(t) : lt(b(t), e);
  },
  defineProperty: st,
  defineProperties: lt,
  getOwnPropertyDescriptor: ct
});
r({
  target: "Object",
  stat: !0,
  forced: !l
}, {
  getOwnPropertyNames: ht,
  getOwnPropertySymbols: dt
});
r({
  target: "Object",
  stat: !0,
  forced: c(function () {
    S.f(1);
  })
}, {
  getOwnPropertySymbols: function (t) {
    return S.f(m(t));
  }
});
if (q) {
  r({
    target: "JSON",
    stat: !0,
    forced: !l || c(function () {
      var t = W();
      return "[null]" != q([t]) || "{}" != q({
        a: t
      }) || "{}" != q(Object(t));
    })
  }, {
    stringify: function (t, e, n) {
      for (i = [t], a = 1, void 0; arguments.length > a;) {
        var r;
        var i;
        var a;
        i.push(arguments[a++]);
      }
      r = e;
      if ((f(e) || void 0 !== t) && !ot(t)) return d(e) || (e = function (t, e) {
        if ("function" == typeof r && (e = r.call(this, t, e)), !ot(e)) return e;
      }), i[1] = e, q.apply(null, i);
    }
  });
}
if (W.prototype[G]) {
  A(W.prototype, G, W.prototype.valueOf);
}
N(W, z);
R[U] = !0;