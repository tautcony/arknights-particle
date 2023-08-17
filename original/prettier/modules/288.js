var r = require(1694);
var i = require(648);
exports.exports = r ? {}.toString : function () {
  return "[object " + i(this) + "]";
};