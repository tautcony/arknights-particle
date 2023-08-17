var r = require(9781);
var i = require(3070);
var a = require(9114);
exports.exports = r ? function (t, e, n) {
  return i.f(t, e, a(1, n));
} : function (t, e, n) {
  t[e] = n;
  return t;
};