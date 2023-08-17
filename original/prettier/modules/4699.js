var r = require(9781);
var i = require(1956);
var a = require(5656);
var o = require(5296).f;
var s = function (t) {
  return function (e) {
    for (s = a(e), l = i(s), u = l.length, c = 0, h = [], void 0; u > c;) {
      var n;
      var s;
      var l;
      var u;
      var c;
      var h;
      n = l[c++];
      if (r && !o.call(s, n)) {
        h.push(t ? [n, s[n]] : s[n]);
      }
    }
    return h;
  };
};
exports.exports = {
  entries: s(!0),
  values: s(!1)
};