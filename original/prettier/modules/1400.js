var r = require(9958);
var i = Math.max;
var a = Math.min;
exports.exports = function (t, e) {
  var n = r(t);
  return n < 0 ? i(n + e, 0) : a(n, e);
};