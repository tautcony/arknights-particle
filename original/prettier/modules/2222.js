var r = require(2109);
var i = require(7293);
var a = require(3157);
var o = require(111);
var s = require(7908);
var l = require(7466);
var u = require(6135);
var c = require(5417);
var h = require(1194);
var d = require(5112);
var f = require(7392);
var p = d("isConcatSpreadable");
var m = 9007199254740991;
var v = "Maximum allowed index exceeded";
var g = f >= 51 || !i(function () {
  var t = [];
  t[p] = !1;
  return t.concat()[0] !== t;
});
var y = h("concat");
var b = function (t) {
  if (!o(t)) return !1;
  var e = t[p];
  return void 0 !== e ? !!e : a(t);
};
r({
  target: "Array",
  proto: !0,
  forced: !g || !y
}, {
  concat: function (t) {
    var e;
    var n;
    var r;
    var i;
    var a;
    var o = s(this);
    var h = c(o, 0);
    var d = 0;
    for (e = -1, r = arguments.length; e < r; e++) if (b(a = -1 === e ? o : arguments[e])) {
      if (d + (i = l(a.length)) > m) throw TypeError(v);
      for (n = 0; n < i; n++, d++) if (n in a) {
        u(h, d, a[n]);
      }
    } else {
      if (d >= m) throw TypeError(v);
      u(h, d++, a);
    }
    h.length = d;
    return h;
  }
});