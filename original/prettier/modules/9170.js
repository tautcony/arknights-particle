var r = require(2109);
var i = require(9518);
var a = require(7674);
var o = require(30);
var s = require(8880);
var l = require(9114);
var u = require(408);
var c = function (t, e) {
  var n = this;
  if (!(n instanceof c)) return new c(t, e);
  if (a) {
    n = a(new Error(void 0), i(n));
  }
  if (void 0 !== e) {
    s(n, "message", String(e));
  }
  var r = [];
  u(t, r.push, {
    that: r
  });
  s(n, "errors", r);
  return n;
};
c.prototype = o(Error.prototype, {
  constructor: l(5, c),
  message: l(5, ""),
  name: l(5, "AggregateError")
});
r({
  global: !0
}, {
  AggregateError: c
});