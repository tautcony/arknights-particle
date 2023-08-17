var r = require(5656);
var i = require(7466);
var a = require(1400);
var o = function (t) {
  return function (e, n, o) {
    var s;
    var l = r(e);
    var u = i(l.length);
    var c = a(o, u);
    if (t && n != n) {
      for (; u > c;) if ((s = l[c++]) != s) return !0;
    } else for (; u > c; c++) if ((t || c in l) && l[c] === n) return t || c || 0;
    return !t && -1;
  };
};
exports.exports = {
  includes: o(!0),
  indexOf: o(!1)
};