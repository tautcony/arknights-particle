var r = require(9958);
exports.exports = function (t) {
  var e = r(t);
  if (e < 0) throw RangeError("The argument can't be less than 0");
  return e;
};