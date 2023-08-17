var r = require(4326);
exports.exports = Array.isArray || function (t) {
  return "Array" == r(t);
};