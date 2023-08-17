exports.exports = function (t) {
  return "object" == typeof t ? null !== t : "function" == typeof t;
};