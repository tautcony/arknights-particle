var r = require(3070).f;
var i = require(6656);
var a = require(5112)("toStringTag");
exports.exports = function (t, e, n) {
  if (t && !i(t = n ? t : t.prototype, a)) {
    r(t, a, {
      configurable: !0,
      value: e
    });
  }
};