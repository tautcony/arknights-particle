var r = require(3383).IteratorPrototype;
var i = require(30);
var a = require(9114);
var o = require(8003);
var s = require(7497);
var l = function () {
  return this;
};
exports.exports = function (t, e, n) {
  var u = e + " Iterator";
  t.prototype = i(r, {
    next: a(1, n)
  });
  o(t, u, !1, !0);
  s[u] = l;
  return t;
};