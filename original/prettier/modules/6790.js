var r = require(3157);
var i = require(7466);
var a = require(9974);
var exports = function (t, e, n, s, l, u, c, h) {
  for (f = l, p = 0, m = !!c && a(c, h, 3), void 0; p < s;) {
    var d;
    var f;
    var p;
    var m;
    if (p in n) {
      d = m ? m(n[p], p, e) : n[p];
      if (u > 0 && r(d)) f = exports(t, e, d, i(d.length), f, u - 1) - 1;else {
        if (f >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
        t[f] = d;
      }
      f++;
    }
    p++;
  }
  return f;
};
exports.exports = exports;