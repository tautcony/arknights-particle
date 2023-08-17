var r = require(9781);
var i = require(3070);
var a = require(9670);
var o = require(1956);
exports.exports = r ? Object.defineProperties : function (t, e) {
  a(t);
  for (r = o(e), s = r.length, l = 0, void 0; s > l;) {
    var n;
    var r;
    var s;
    var l;
    i.f(t, n = r[l++], e[n]);
  }
  return t;
};