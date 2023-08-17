exports.exports = function (t) {
  if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
  return t;
};