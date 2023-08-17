var r = require(6656);
var i = require(7908);
var a = require(6200);
var o = require(8544);
var s = a("IE_PROTO");
var l = Object.prototype;
exports.exports = o ? Object.getPrototypeOf : function (t) {
  t = i(t);
  return r(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null;
};