var r = require(7908);
var i = require(1400);
var a = require(7466);
var o = Math.min;
exports.exports = [].copyWithin || function (t, e) {
  var n = r(this);
  var s = a(n.length);
  var l = i(t, s);
  var u = i(e, s);
  var c = arguments.length > 2 ? arguments[2] : void 0;
  var h = o((void 0 === c ? s : i(c, s)) - u, s - l);
  var d = 1;
  for (u < l && l < u + h && (d = -1, u += h - 1, l += h - 1); h-- > 0;) {
    if (u in n) {
      n[l] = n[u];
    } else {
      delete n[l];
    }
    l += d;
    u += d;
  }
  return n;
};