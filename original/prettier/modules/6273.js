var r = require(9781);
var i = require(1223);
var a = require(7908);
var o = require(7466);
var s = require(3070).f;
if (r && !("lastItem" in [])) {
  s(Array.prototype, "lastItem", {
    configurable: !0,
    get: function () {
      var t = a(this);
      var e = o(t.length);
      return 0 == e ? void 0 : t[e - 1];
    },
    set: function (t) {
      var e = a(this);
      var n = o(e.length);
      return e[0 == n ? 0 : n - 1] = t;
    }
  });
  i("lastItem");
}