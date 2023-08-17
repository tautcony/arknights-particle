var r = require(7593);
var i = require(3070);
var a = require(9114);
exports.exports = function (t, e, n) {
  var o = r(e);
  if (o in t) {
    i.f(t, o, a(0, n));
  } else {
    t[o] = n;
  }
};