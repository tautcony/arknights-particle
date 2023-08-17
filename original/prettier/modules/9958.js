var e = Math.ceil;
var n = Math.floor;
exports.exports = function (t) {
  return isNaN(t = +t) ? 0 : (t > 0 ? n : e)(t);
};