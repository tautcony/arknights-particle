var r = require(1694);
var i = require(4326);
var a = require(5112)("toStringTag");
var o = "Arguments" == i(function () {
  return arguments;
}());
exports.exports = r ? i : function (t) {
  var e;
  var n;
  var r;
  return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
    try {
      return t[e];
    } catch (t) {}
  }(e = Object(t), a)) ? n : o ? i(e) : "Object" == (r = i(e)) && "function" == typeof e.callee ? "Arguments" : r;
};