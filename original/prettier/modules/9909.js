var r;
var i;
var a;
var o = require(8536);
var s = require(7854);
var l = require(111);
var u = require(8880);
var c = require(6656);
var h = require(5465);
var d = require(6200);
var f = require(3501);
var p = s.WeakMap;
if (o) {
  var m = h.state || (h.state = new p());
  var v = m.get;
  var g = m.has;
  var y = m.set;
  r = function (t, e) {
    e.facade = t;
    y.call(m, t, e);
    return e;
  };
  i = function (t) {
    return v.call(m, t) || {};
  };
  a = function (t) {
    return g.call(m, t);
  };
} else {
  var b = d("state");
  f[b] = !0;
  r = function (t, e) {
    e.facade = t;
    u(t, b, e);
    return e;
  };
  i = function (t) {
    return c(t, b) ? t[b] : {};
  };
  a = function (t) {
    return c(t, b);
  };
}
exports.exports = {
  set: r,
  get: i,
  has: a,
  enforce: function (t) {
    return a(t) ? i(t) : r(t, {});
  },
  getterFor: function (t) {
    return function (e) {
      var n;
      if (!l(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
      return n;
    };
  }
};