var r = require(7293);
var i = /#|\.prototype\./;
var exports = function (t, e) {
  var n = s[o(t)];
  return n == u || n != l && ("function" == typeof e ? r(e) : !!e);
};
var o = exports.normalize = function (t) {
  return String(t).replace(i, ".").toLowerCase();
};
var s = exports.data = {};
var l = exports.NATIVE = "N";
var u = exports.POLYFILL = "P";
exports.exports = exports;