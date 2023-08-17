var r = require(3099);
exports.exports = function (t, e, n) {
  r(t);
  if (void 0 === e) return t;
  switch (n) {
    case 0:
      return function () {
        return t.call(e);
      };
    case 1:
      return function (n) {
        return t.call(e, n);
      };
    case 2:
      return function (n, r) {
        return t.call(e, n, r);
      };
    case 3:
      return function (n, r, i) {
        return t.call(e, n, r, i);
      };
  }
  return function () {
    return t.apply(e, arguments);
  };
};