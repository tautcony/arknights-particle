var r = require(6169);
exports = require.hmd(exports);
var i = "object" == typeof exports && exports && !exports.nodeType && exports;
var a = i && exports && !exports.nodeType && exports;
var o = a && a.exports === i ? r.Z.Buffer : void 0;
var s = o ? o.allocUnsafe : void 0;
module.Z = function (t, e) {
  if (e) return t.slice();
  var n = t.length;
  var r = s ? s(n) : new t.constructor(n);
  t.copy(r);
  return r;
};