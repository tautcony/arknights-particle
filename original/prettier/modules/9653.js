var r = require(9781);
var i = require(7854);
var a = require(4705);
var o = require(1320);
var s = require(6656);
var l = require(4326);
var u = require(9587);
var c = require(7593);
var h = require(7293);
var d = require(30);
var f = require(8006).f;
var p = require(1236).f;
var m = require(3070).f;
var v = require(3111).trim;
var g = "Number";
var y = i.Number;
var b = y.prototype;
var x = l(d(b)) == g;
var _ = function (t) {
  var e;
  var n;
  var r;
  var i;
  var a;
  var o;
  var s;
  var l;
  var u = c(t, !1);
  if ("string" == typeof u && u.length > 2) if (43 === (e = (u = v(u)).charCodeAt(0)) || 45 === e) {
    if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN;
  } else if (48 === e) {
    switch (u.charCodeAt(1)) {
      case 66:
      case 98:
        r = 2;
        i = 49;
        break;
      case 79:
      case 111:
        r = 8;
        i = 55;
        break;
      default:
        return +u;
    }
    for (o = (a = u.slice(2)).length, s = 0; s < o; s++) if ((l = a.charCodeAt(s)) < 48 || l > i) return NaN;
    return parseInt(a, r);
  }
  return +u;
};
if (a(g, !y(" 0o1") || !y("0b1") || y("+0x1"))) {
  for (S = function (t) {
    var e = arguments.length < 1 ? 0 : t;
    var n = this;
    return n instanceof S && (x ? h(function () {
      b.valueOf.call(n);
    }) : l(n) != g) ? u(new y(_(e)), n, S) : _(e);
  }, E = r ? f(y) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), T = 0, void 0; E.length > T; T++) {
    var w;
    var S;
    var E;
    var T;
    if (s(y, w = E[T]) && !s(S, w)) {
      m(S, w, p(y, w));
    }
  }
  S.prototype = b;
  b.constructor = S;
  o(i, g, S);
}