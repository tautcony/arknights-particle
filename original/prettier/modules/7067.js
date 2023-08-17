var r = require(9958);
var i = require(7466);
exports.exports = function (t) {
  if (void 0 === t) return 0;
  var e = r(t);
  var n = i(e);
  if (e !== n) throw RangeError("Wrong length or index");
  return n;
};