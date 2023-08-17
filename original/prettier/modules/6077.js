var r = require(111);
exports.exports = function (t) {
  if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
  return t;
};