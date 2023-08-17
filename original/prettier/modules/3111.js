var r = require(4488);
var i = "[" + require(1361) + "]";
var a = RegExp("^" + i + i + "*");
var o = RegExp(i + i + "*$");
var s = function (t) {
  return function (e) {
    var n = String(r(e));
    if (1 & t) {
      n = n.replace(a, "");
    }
    if (2 & t) {
      n = n.replace(o, "");
    }
    return n;
  };
};
exports.exports = {
  start: s(1),
  end: s(2),
  trim: s(3)
};