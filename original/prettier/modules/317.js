var r = require(7854);
var i = require(111);
var a = r.document;
var o = i(a) && i(a.createElement);
exports.exports = function (t) {
  return o ? a.createElement(t) : {};
};