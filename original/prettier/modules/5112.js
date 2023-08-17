var r = require(7854);
var i = require(2309);
var a = require(6656);
var o = require(9711);
var s = require(133);
var l = require(3307);
var u = i("wks");
var c = r.Symbol;
var h = l ? c : c && c.withoutSetter || o;
exports.exports = function (t) {
  if (a(u, t)) {
    if (s && a(c, t)) {
      u[t] = c[t];
    } else {
      u[t] = h("Symbol." + t);
    }
  }
  return u[t];
};