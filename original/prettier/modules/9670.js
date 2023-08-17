var r = require(111);
exports.exports = function (t) {
  if (!r(t)) throw TypeError(String(t) + " is not an object");
  return t;
};