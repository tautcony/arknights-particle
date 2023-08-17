var r = require(9670);
var i = require(111);
var a = require(8523);
exports.exports = function (t, e) {
  r(t);
  if (i(e) && e.constructor === t) return e;
  var n = a.f(t);
  n.resolve(e);
  return n.promise;
};