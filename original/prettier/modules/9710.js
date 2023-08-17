require.d(module, {
  Z: function () {
    return s;
  }
});
var r = require(6169);
exports = require.hmd(exports);
var i = "object" == typeof exports && exports && !exports.nodeType && exports;
var a = i && exports && !exports.nodeType && exports;
var o = a && a.exports === i ? r.Z.Buffer : void 0;
var s = (o ? o.isBuffer : void 0) || function () {
  return !1;
};