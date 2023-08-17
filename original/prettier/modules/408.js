var r = require(9670);
var i = require(7659);
var a = require(7466);
var o = require(9974);
var s = require(1246);
var l = require(9212);
var u = function (t, e) {
  this.stopped = t;
  this.result = e;
};
exports.exports = function (t, e, n) {
  var c;
  var h;
  var d;
  var f;
  var p;
  var m;
  var v;
  var g = n && n.that;
  var y = !(!n || !n.AS_ENTRIES);
  var b = !(!n || !n.IS_ITERATOR);
  var x = !(!n || !n.INTERRUPTED);
  var _ = o(e, g, 1 + y + x);
  var w = function (t) {
    if (c) {
      l(c);
    }
    return new u(!0, t);
  };
  var S = function (t) {
    return y ? (r(t), x ? _(t[0], t[1], w) : _(t[0], t[1])) : x ? _(t, w) : _(t);
  };
  if (b) c = t;else {
    if ("function" != typeof (h = s(t))) throw TypeError("Target is not iterable");
    if (i(h)) {
      for (d = 0, f = a(t.length); f > d; d++) if ((p = S(t[d])) && p instanceof u) return p;
      return new u(!1);
    }
    c = h.call(t);
  }
  for (m = c.next; !(v = m.call(c)).done;) {
    try {
      p = S(v.value);
    } catch (t) {
      throw l(c), t;
    }
    if ("object" == typeof p && p && p instanceof u) return p;
  }
  return new u(!1);
};