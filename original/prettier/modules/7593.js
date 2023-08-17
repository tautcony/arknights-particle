var r = require(111);
exports.exports = function (t, e) {
  if (!r(t)) return t;
  var n;
  var i;
  if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
  if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
  if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
  throw TypeError("Can't convert object to primitive value");
};