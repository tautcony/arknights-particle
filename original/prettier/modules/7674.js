var r = require(9670);
var i = require(6077);
exports.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var t;
  var e = !1;
  var n = {};
  try {
    (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []);
    e = n instanceof Array;
  } catch (t) {}
  return function (n, a) {
    r(n);
    i(a);
    if (e) {
      t.call(n, a);
    } else {
      n.__proto__ = a;
    }
    return n;
  };
}() : void 0);