var r = require(9781);
var i = require(7293);
var a = require(1956);
var o = require(5181);
var s = require(5296);
var l = require(7908);
var u = require(8361);
var c = Object.assign;
var h = Object.defineProperty;
exports.exports = !c || i(function () {
  if (r && 1 !== c({
    b: 1
  }, c(h({}, "a", {
    enumerable: !0,
    get: function () {
      h(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), {
    b: 2
  })).b) return !0;
  var t = {};
  var e = {};
  var n = Symbol();
  var i = "abcdefghijklmnopqrst";
  t[n] = 7;
  i.split("").forEach(function (t) {
    e[t] = t;
  });
  return 7 != c({}, t)[n] || a(c({}, e)).join("") != i;
}) ? function (t, e) {
  for (n = l(t), i = arguments.length, c = 1, h = o.f, d = s.f, void 0; i > c;) {
    var n;
    var i;
    var c;
    var h;
    var d;
    for (p = u(arguments[c++]), m = h ? a(p).concat(h(p)) : a(p), v = m.length, g = 0, void 0; v > g;) {
      var f;
      var p;
      var m;
      var v;
      var g;
      f = m[g++];
      if (r && !d.call(p, f)) {
        n[f] = p[f];
      }
    }
  }
  return n;
} : c;