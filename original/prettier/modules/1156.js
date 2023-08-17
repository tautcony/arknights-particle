var r = require(5656);
var i = require(8006).f;
var a = {}.toString;
var o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
exports.exports.f = function (t) {
  return o && "[object Window]" == a.call(t) ? function (t) {
    try {
      return i(t);
    } catch (t) {
      return o.slice();
    }
  }(t) : i(r(t));
};