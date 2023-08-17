var r = require(3002);
exports.exports = function (t, e) {
  var n = r(t);
  if (n % e) throw RangeError("Wrong offset");
  return n;
};