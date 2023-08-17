var r = require(9909);
var i = require(4994);
var a = require(6656);
var o = require(1956);
var s = require(7908);
var l = "Object Iterator";
var u = r.set;
var c = r.getterFor(l);
exports.exports = i(function (t, e) {
  var n = s(t);
  u(this, {
    type: l,
    mode: e,
    object: n,
    keys: o(n),
    index: 0
  });
}, "Object", function () {
  for (t = c(this), e = t.keys, void 0;;) {
    var t;
    var e;
    if (null === e || t.index >= e.length) {
      t.object = t.keys = null;
      return {
        value: void 0,
        done: !0
      };
    }
    var n = e[t.index++];
    var r = t.object;
    if (a(r, n)) {
      switch (t.mode) {
        case "keys":
          return {
            value: n,
            done: !1
          };
        case "values":
          return {
            value: r[n],
            done: !1
          };
      }
      return {
        value: [n, r[n]],
        done: !1
      };
    }
  }
});