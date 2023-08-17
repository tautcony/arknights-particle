var r = require(7854);
var i = require(1236).f;
var a = require(8880);
var o = require(1320);
var s = require(3505);
var l = require(9920);
var u = require(4705);
exports.exports = function (t, e) {
  var n;
  var c;
  var h;
  var d;
  var f;
  var p = t.target;
  var m = t.global;
  var v = t.stat;
  if (n = m ? r : v ? r[p] || s(p, {}) : (r[p] || {}).prototype) for (c in e) {
    d = e[c];
    h = t.noTargetGet ? (f = i(n, c)) && f.value : n[c];
    if (!u(m ? c : p + (v ? "." : "#") + c, t.forced) && void 0 !== h) {
      if (typeof d == typeof h) continue;
      l(d, h);
    }
    if (t.sham || h && h.sham) {
      a(d, "sham", !0);
    }
    o(n, c, d, t);
  }
};