var r = require(7854).isFinite;
exports.exports = Number.isFinite || function (t) {
  return "number" == typeof t && r(t);
};