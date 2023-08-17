var r = require(9670);
var i = require(9212);
exports.exports = function (t, e, n, a) {
  try {
    return a ? e(r(n)[0], n[1]) : e(n);
  } catch (e) {
    throw i(t), e;
  }
};