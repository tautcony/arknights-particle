var r = require(3099);
var i = require(7908);
var a = require(8361);
var o = require(7466);
var s = function (t) {
  return function (e, n, s, l) {
    r(n);
    var u = i(e);
    var c = a(u);
    var h = o(u.length);
    var d = t ? h - 1 : 0;
    var f = t ? -1 : 1;
    if (s < 2) for (;;) {
      if (d in c) {
        l = c[d];
        d += f;
        break;
      }
      d += f;
      if (t ? d < 0 : h <= d) throw TypeError("Reduce of empty array with no initial value");
    }
    for (; t ? d >= 0 : h > d; d += f) if (d in c) {
      l = n(l, c[d], d, u);
    }
    return l;
  };
};
exports.exports = {
  left: s(!1),
  right: s(!0)
};