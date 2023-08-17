var r = require(9781);
var i = require(7293);
var a = require(6656);
var o = Object.defineProperty;
var s = {};
var l = function (t) {
  throw t;
};
exports.exports = function (t, e) {
  if (a(s, t)) return s[t];
  if (e) {
    e = {};
  }
  var n = [][t];
  var u = !!a(e, "ACCESSORS") && e.ACCESSORS;
  var c = a(e, 0) ? e[0] : l;
  var h = a(e, 1) ? e[1] : void 0;
  return s[t] = !!n && !i(function () {
    if (u && !r) return !0;
    var t = {
      length: -1
    };
    if (u) {
      o(t, 1, {
        enumerable: !0,
        get: l
      });
    } else {
      t[1] = 1;
    }
    n.call(t, c, h);
  });
};