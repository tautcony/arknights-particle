var r = require(3501);
var i = require(111);
var a = require(6656);
var o = require(3070).f;
var s = require(9711);
var l = require(6677);
var u = s("meta");
var c = 0;
var h = Object.isExtensible || function () {
  return !0;
};
var d = function (t) {
  o(t, u, {
    value: {
      objectID: "O" + ++c,
      weakData: {}
    }
  });
};
var f = exports.exports = {
  REQUIRED: !1,
  fastKey: function (t, e) {
    if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
    if (!a(t, u)) {
      if (!h(t)) return "F";
      if (!e) return "E";
      d(t);
    }
    return t[u].objectID;
  },
  getWeakData: function (t, e) {
    if (!a(t, u)) {
      if (!h(t)) return !0;
      if (!e) return !1;
      d(t);
    }
    return t[u].weakData;
  },
  onFreeze: function (t) {
    if (l && f.REQUIRED && h(t) && !a(t, u)) {
      d(t);
    }
    return t;
  }
};
r[u] = !0;