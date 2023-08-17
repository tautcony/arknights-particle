var r = require(2109);
var i = require(1913);
var a = require(3366);
var o = require(7293);
var s = require(5005);
var l = require(6707);
var u = require(9478);
var c = require(1320);
r({
  target: "Promise",
  proto: !0,
  real: !0,
  forced: !!a && o(function () {
    a.prototype.finally.call({
      then: function () {}
    }, function () {});
  })
}, {
  finally: function (t) {
    var e = l(this, s("Promise"));
    var n = "function" == typeof t;
    return this.then(n ? function (n) {
      return u(e, t()).then(function () {
        return n;
      });
    } : t, n ? function (n) {
      return u(e, t()).then(function () {
        throw n;
      });
    } : t);
  }
});
if (i || "function" != typeof a || a.prototype.finally) {
  c(a.prototype, "finally", s("Promise").prototype.finally);
}