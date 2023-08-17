var e = 0;
var n = Math.random();
exports.exports = function (t) {
  return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++e + n).toString(36);
};