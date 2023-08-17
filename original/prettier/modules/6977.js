var r = require(2109);
var i = require(9958);
var a = require(863);
var o = require(8415);
var s = require(7293);
var l = 1 .toFixed;
var u = Math.floor;
var c = function (t, e, n) {
  return 0 === e ? n : e % 2 == 1 ? c(t, e - 1, n * t) : c(t * t, e / 2, n);
};
r({
  target: "Number",
  proto: !0,
  forced: l && ("0.000" !== 8e-5.toFixed(3) || "1" !== 0.9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !s(function () {
    l.call({});
  })
}, {
  toFixed: function (t) {
    var e;
    var n;
    var r;
    var s;
    var l = a(this);
    var h = i(t);
    var d = [0, 0, 0, 0, 0, 0];
    var f = "";
    var p = "0";
    var m = function (t, e) {
      for (n = -1, r = e, void 0; ++n < 6;) {
        var n;
        var r;
        r += t * d[n];
        d[n] = r % 1e7;
        r = u(r / 1e7);
      }
    };
    var v = function (t) {
      for (e = 6, n = 0, void 0; --e >= 0;) {
        var e;
        var n;
        n += d[e];
        d[e] = u(n / t);
        n = n % t * 1e7;
      }
    };
    var g = function () {
      for (t = 6, e = "", void 0; --t >= 0;) {
        var t;
        var e;
        if ("" !== e || 0 === t || 0 !== d[t]) {
          var n = String(d[t]);
          e = "" === e ? n : e + o.call("0", 7 - n.length) + n;
        }
      }
      return e;
    };
    if (h < 0 || h > 20) throw RangeError("Incorrect fraction digits");
    if (l != l) return "NaN";
    if (l <= -1e21 || l >= 1e21) return String(l);
    if (l < 0) {
      f = "-";
      l = -l;
    }
    if (l > 1e-21) if (n = (e = function (t) {
      for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
      for (; n >= 2;) e += 1, n /= 2;
      return e;
    }(l * c(2, 69, 1)) - 69) < 0 ? l * c(2, -e, 1) : l / c(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
      for (m(0, n), r = h; r >= 7;) m(1e7, 0), r -= 7;
      for (m(c(10, r, 1), 0), r = e - 1; r >= 23;) v(1 << 23), r -= 23;
      v(1 << r), m(1, 1), v(2), p = g();
    } else m(0, n), m(1 << -e, 0), p = g() + o.call("0", h);
    return h > 0 ? f + ((s = p.length) <= h ? "0." + o.call("0", h - s) + p : p.slice(0, s - h) + "." + p.slice(s - h)) : f + p;
  }
});