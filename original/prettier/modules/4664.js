var r = require(9781);
var i = require(7293);
var a = require(317);
exports.exports = !r && !i(function () {
  return 7 != Object.defineProperty(a("div"), "a", {
    get: function () {
      return 7;
    }
  }).a;
});