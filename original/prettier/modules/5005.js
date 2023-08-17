var r = require(857);
var i = require(7854);
var a = function (t) {
  return "function" == typeof t ? t : void 0;
};
exports.exports = function (t, e) {
  return arguments.length < 2 ? a(r[t]) || a(i[t]) : r[t] && r[t][e] || i[t] && i[t][e];
};