var r = require(7293);
exports.exports = function (t, e) {
  var n = [][t];
  return !!n && r(function () {
    n.call(null, e || function () {
      throw 1;
    }, 1);
  });
};