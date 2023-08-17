var r = require(1913);
var i = require(8554);
exports.exports = r ? i : function (t) {
  return Map.prototype.entries.call(t);
};