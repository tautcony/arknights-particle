var r = require(7466);
var i = require(8415);
var a = require(4488);
var o = Math.ceil;
var s = function (t) {
  return function (e, n, s) {
    var l;
    var u;
    var c = String(a(e));
    var h = c.length;
    var d = void 0 === s ? " " : String(s);
    var f = r(n);
    return f <= h || "" == d ? c : (l = f - h, (u = i.call(d, o(l / d.length))).length > l && (u = u.slice(0, l)), t ? c + u : u + c);
  };
};
exports.exports = {
  start: s(!1),
  end: s(!0)
};