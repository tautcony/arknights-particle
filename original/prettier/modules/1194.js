var r = require(7293);
var i = require(5112);
var a = require(7392);
var o = i("species");
exports.exports = function (t) {
  return a >= 51 || !r(function () {
    var e = [];
    (e.constructor = {})[o] = function () {
      return {
        foo: 1
      };
    };
    return 1 !== e[t](Boolean).foo;
  });
};