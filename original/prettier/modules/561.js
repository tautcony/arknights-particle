var r = require(2109);
var i = require(1400);
var a = require(9958);
var o = require(7466);
var s = require(7908);
var l = require(5417);
var u = require(6135);
var c = require(1194);
var h = require(9207);
var d = c("splice");
var f = h("splice", {
  ACCESSORS: !0,
  0: 0,
  1: 2
});
var p = Math.max;
var m = Math.min;
var v = 9007199254740991;
var g = "Maximum allowed length exceeded";
r({
  target: "Array",
  proto: !0,
  forced: !d || !f
}, {
  splice: function (t, e) {
    var n;
    var r;
    var c;
    var h;
    var d;
    var f;
    var y = s(this);
    var b = o(y.length);
    var x = i(t, b);
    var _ = arguments.length;
    if (0 === _) {
      n = r = 0;
    } else {
      if (1 === _) {
        n = 0;
        r = b - x;
      } else {
        n = _ - 2;
        r = m(p(a(e), 0), b - x);
      }
    }
    if (b + n - r > v) throw TypeError(g);
    for (c = l(y, r), h = 0; h < r; h++) if ((d = x + h) in y) {
      u(c, h, y[d]);
    }
    c.length = r;
    if (n < r) {
      for (h = x; h < b - r; h++) f = h + n, (d = h + r) in y ? y[f] = y[d] : delete y[f];
      for (h = b; h > b - r + n; h--) delete y[h - 1];
    } else if (n > r) for (h = b - r; h > x; h--) f = h + n - 1, (d = h + r - 1) in y ? y[f] = y[d] : delete y[f];
    for (h = 0; h < n; h++) y[h + x] = arguments[h + 2];
    y.length = b - r + n;
    return c;
  }
});