var r = require(5112);
var i = require(30);
var a = require(3070);
var o = r("unscopables");
var s = Array.prototype;
if (null == s[o]) {
  a.f(s, o, {
    configurable: !0,
    value: i(null)
  });
}
exports.exports = function (t) {
  s[o][t] = !0;
};