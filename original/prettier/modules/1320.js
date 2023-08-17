var r = require(7854);
var i = require(8880);
var a = require(6656);
var o = require(3505);
var s = require(2788);
var l = require(9909);
var u = l.get;
var c = l.enforce;
var h = String(String).split("String");
(exports.exports = function (t, e, n, s) {
  var l;
  var u = !!s && !!s.unsafe;
  var d = !!s && !!s.enumerable;
  var f = !!s && !!s.noTargetGet;
  if ("function" == typeof n) {
    if ("string" != typeof e || a(n, "name")) {
      i(n, "name", e);
    }
    if ((l = c(n)).source) {
      l.source = h.join("string" == typeof e ? e : "");
    }
  }
  if (t !== r) {
    if (u) {
      if (!f && t[e]) {
        d = !0;
      }
    } else {
      delete t[e];
    }
    if (d) {
      t[e] = n;
    } else {
      i(t, e, n);
    }
  } else {
    if (d) {
      t[e] = n;
    } else {
      o(e, n);
    }
  }
})(Function.prototype, "toString", function () {
  return "function" == typeof this && u(this).source || s(this);
});