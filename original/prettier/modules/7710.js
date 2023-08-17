var r = require(2109);
var i = require(7854);
var a = require(4705);
var o = require(1320);
var s = require(2423);
var l = require(408);
var u = require(5787);
var c = require(111);
var h = require(7293);
var d = require(7072);
var f = require(8003);
var p = require(9587);
exports.exports = function (t, e, n) {
  var m = -1 !== t.indexOf("Map");
  var v = -1 !== t.indexOf("Weak");
  var g = m ? "set" : "add";
  var y = i[t];
  var b = y && y.prototype;
  var x = y;
  var _ = {};
  var w = function (t) {
    var e = b[t];
    o(b, t, "add" == t ? function (t) {
      e.call(this, 0 === t ? 0 : t);
      return this;
    } : "delete" == t ? function (t) {
      return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t);
    } : "get" == t ? function (t) {
      return v && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
    } : "has" == t ? function (t) {
      return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t);
    } : function (t, n) {
      e.call(this, 0 === t ? 0 : t, n);
      return this;
    });
  };
  if (a(t, "function" != typeof y || !(v || b.forEach && !h(function () {
    new y().entries().next();
  })))) {
    x = n.getConstructor(e, t, m, g);
    s.REQUIRED = !0;
  } else if (a(t, !0)) {
    var S = new x();
    var E = S[g](v ? {} : -0, 1) != S;
    var T = h(function () {
      S.has(1);
    });
    var M = d(function (t) {
      new y(t);
    });
    var A = !v && h(function () {
      for (t = new y(), e = 5, void 0; e--;) {
        var t;
        var e;
        t[g](e, e);
      }
      return !t.has(-0);
    });
    if (M) {
      (x = e(function (e, n) {
        u(e, x, t);
        var r = p(new y(), e, x);
        if (null != n) {
          l(n, r[g], {
            that: r,
            AS_ENTRIES: m
          });
        }
        return r;
      })).prototype = b;
      b.constructor = x;
    }
    if (T || A) {
      w("delete");
      w("has");
      if (m) {
        w("get");
      }
    }
    if (A || E) {
      w(g);
    }
    if (v && b.clear) {
      delete b.clear;
    }
  }
  _[t] = x;
  r({
    global: !0,
    forced: x != y
  }, _);
  f(x, t);
  if (v) {
    n.setStrong(x, t, m);
  }
  return x;
};