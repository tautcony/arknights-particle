var r = require(5656);
var i = require(9958);
var a = require(7466);
var o = require(9341);
var s = require(9207);
var l = Math.min;
var u = [].lastIndexOf;
var c = !!u && 1 / [1].lastIndexOf(1, -0) < 0;
var h = o("lastIndexOf");
var d = s("indexOf", {
  ACCESSORS: !0,
  1: 0
});
var f = c || !h || !d;
exports.exports = f ? function (t) {
  if (c) return u.apply(this, arguments) || 0;
  var e = r(this);
  var n = a(e.length);
  var o = n - 1;
  for (arguments.length > 1 && (o = l(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--) if (o in e && e[o] === t) return o || 0;
  return -1;
} : u;