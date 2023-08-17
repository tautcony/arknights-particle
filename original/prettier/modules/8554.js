var r = require(9670);
var i = require(1246);
exports.exports = function (t) {
  var e = i(t);
  if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
  return r(e.call(t));
};