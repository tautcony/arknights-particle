var r = require(111);
var i = Math.floor;
exports.exports = function (t) {
  return !r(t) && isFinite(t) && i(t) === t;
};