var r = require(9958);
var i = require(4488);
var a = function (t) {
  return function (e, n) {
    var a;
    var o;
    var s = String(i(e));
    var l = r(n);
    var u = s.length;
    return l < 0 || l >= u ? t ? "" : void 0 : (a = s.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === u || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? t ? s.charAt(l) : a : t ? s.slice(l, l + 2) : o - 56320 + (a - 55296 << 10) + 65536;
  };
};
exports.exports = {
  codeAt: a(!1),
  charAt: a(!0)
};