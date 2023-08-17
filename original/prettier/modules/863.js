var r = require(4326);
exports.exports = function (t) {
  if ("number" != typeof t && "Number" != r(t)) throw TypeError("Incorrect invocation");
  return +t;
};