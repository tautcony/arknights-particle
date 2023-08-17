var r = require(2092).forEach;
var i = require(9341);
var a = require(9207);
var o = i("forEach");
var s = a("forEach");
exports.exports = o && s ? [].forEach : function (t) {
  return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
};