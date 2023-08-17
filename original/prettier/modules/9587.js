var r = require(111);
var i = require(7674);
exports.exports = function (t, e, n) {
  var a;
  var o;
  if (i && "function" == typeof (a = e.constructor) && a !== n && r(o = a.prototype) && o !== n.prototype) {
    i(t, o);
  }
  return t;
};