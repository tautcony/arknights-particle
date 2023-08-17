var r = require(7854);
var i = require(3111).trim;
var a = require(1361);
var o = r.parseInt;
var s = /^[+-]?0[Xx]/;
var l = 8 !== o(a + "08") || 22 !== o(a + "0x16");
exports.exports = l ? function (t, e) {
  var n = i(String(t));
  return o(n, e >>> 0 || (s.test(n) ? 16 : 10));
} : o;