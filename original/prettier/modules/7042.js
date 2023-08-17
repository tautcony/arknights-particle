var r = require(2109);
var i = require(111);
var a = require(3157);
var o = require(1400);
var s = require(7466);
var l = require(5656);
var u = require(6135);
var c = require(5112);
var h = require(1194);
var d = require(9207);
var f = h("slice");
var p = d("slice", {
  ACCESSORS: !0,
  0: 0,
  1: 2
});
var m = c("species");
var v = [].slice;
var g = Math.max;
r({
  target: "Array",
  proto: !0,
  forced: !f || !p
}, {
  slice: function (t, e) {
    var n;
    var r;
    var c;
    var h = l(this);
    var d = s(h.length);
    var f = o(t, d);
    var p = o(void 0 === e ? d : e, d);
    if (a(h) && ("function" != typeof (n = h.constructor) || n !== Array && !a(n.prototype) ? i(n) && null === (n = n[m]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return v.call(h, f, p);
    for (r = new (void 0 === n ? Array : n)(g(p - f, 0)), c = 0; f < p; f++, c++) if (f in h) {
      u(r, c, h[f]);
    }
    r.length = c;
    return r;
  }
});