var r = require(7854);
var i = require(8880);
exports.exports = function (t, e) {
  try {
    i(r, t, e);
  } catch (n) {
    r[t] = e;
  }
  return e;
};