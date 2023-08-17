var r = require(5005);
var i = require(8006);
var a = require(5181);
var o = require(9670);
exports.exports = r("Reflect", "ownKeys") || function (t) {
  var e = i.f(o(t));
  var n = a.f;
  return n ? e.concat(n(t)) : e;
};