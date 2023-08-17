var r = require(6656);
var i = require(5656);
var a = require(1318).indexOf;
var o = require(3501);
exports.exports = function (t, e) {
  var n;
  var s = i(t);
  var l = 0;
  var u = [];
  for (n in s) if (!r(o, n) && r(s, n)) {
    u.push(n);
  }
  for (; e.length > l;) if (r(s, n = e[l++])) {
    if (~a(u, n)) {
      u.push(n);
    }
  }
  return u;
};