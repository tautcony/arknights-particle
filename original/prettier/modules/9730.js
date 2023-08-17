var r = require(8277);
exports = require.hmd(exports);
var i = "object" == typeof exports && exports && !exports.nodeType && exports;
var a = i && exports && !exports.nodeType && exports;
var o = a && a.exports === i && r.Z.process;
var s = function () {
  try {
    return a && a.require && a.require("util").types || o && o.binding && o.binding("util");
  } catch (t) {}
}();
module.Z = s;