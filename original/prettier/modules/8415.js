var r = require(9958);
var i = require(4488);
exports.exports = "".repeat || function (t) {
  var e = String(i(this));
  var n = "";
  var a = r(t);
  if (a < 0 || a == 1 / 0) throw RangeError("Wrong number of repetitions");
  for (; a > 0; (a >>>= 1) && (e += e)) if (1 & a) {
    n += e;
  }
  return n;
};