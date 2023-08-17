var r = require(7854);
var i = require(3111).trim;
var a = require(1361);
var o = r.parseFloat;
var s = 1 / o(a + "-0") != -1 / 0;
exports.exports = s ? function (t) {
  var e = i(String(t));
  var n = o(e);
  return 0 === n && "-" == e.charAt(0) ? -0 : n;
} : o;