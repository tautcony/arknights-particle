var r = require(5005);
var i = require(3070);
var a = require(5112);
var o = require(9781);
var s = a("species");
exports.exports = function (t) {
  var e = r(t);
  var n = i.f;
  if (o && e && !e[s]) {
    n(e, s, {
      configurable: !0,
      get: function () {
        return this;
      }
    });
  }
};