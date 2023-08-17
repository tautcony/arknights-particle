var r = require(4450);
var i = require(9381);
var exports = function (t, e) {
  var n = new r((e = e || {}).typeNumber || -1, e.errorCorrectLevel || i.H);
  n.addData(t);
  n.make();
  return n;
};
exports.ErrorCorrectLevel = i;
exports.exports = exports;