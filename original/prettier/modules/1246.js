var r = require(648);
var i = require(7497);
var a = require(5112)("iterator");
exports.exports = function (t) {
  if (null != t) return t[a] || t["@@iterator"] || i[r(t)];
};