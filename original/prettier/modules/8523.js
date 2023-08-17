var r = require(3099);
var i = function (t) {
  var e;
  var n;
  this.promise = new t(function (t, r) {
    if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
    e = t;
    n = r;
  });
  this.resolve = r(e);
  this.reject = r(n);
};
exports.exports.f = function (t) {
  return new i(t);
};