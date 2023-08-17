var r = require(9974);
var i = require(7908);
var a = require(3411);
var o = require(7659);
var s = require(7466);
var l = require(6135);
var u = require(1246);
exports.exports = function (t) {
  var e;
  var n;
  var c;
  var h;
  var d;
  var f;
  var p = i(t);
  var m = "function" == typeof this ? this : Array;
  var v = arguments.length;
  var g = v > 1 ? arguments[1] : void 0;
  var y = void 0 !== g;
  var b = u(p);
  var x = 0;
  if (y) {
    g = r(g, v > 2 ? arguments[2] : void 0, 2);
  }
  if (null == b || m == Array && o(b)) for (n = new m(e = s(p.length)); e > x; x++) f = y ? g(p[x], x) : p[x], l(n, x, f);else for (d = (h = b.call(p)).next, n = new m(); !(c = d.call(h)).done; x++) f = y ? a(h, g, [c.value, x], !0) : c.value, l(n, x, f);
  n.length = x;
  return n;
};