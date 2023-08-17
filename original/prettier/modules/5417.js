var r = require(111);
var i = require(3157);
var a = require(5112)("species");
exports.exports = function (t, e) {
  var n;
  if (i(t)) {
    if ("function" != typeof (n = t.constructor) || n !== Array && !i(n.prototype)) {
      if (r(n) && null === (n = n[a])) {
        n = void 0;
      }
    } else {
      n = void 0;
    }
  }
  return new (void 0 === n ? Array : n)(0 === e ? 0 : e);
};