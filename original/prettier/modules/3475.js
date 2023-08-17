var r = require(9781);
var i = require(1223);
var a = require(7908);
var o = require(7466);
var s = require(3070).f;
if (r && !("lastIndex" in [])) {
  s(Array.prototype, "lastIndex", {
    configurable: !0,
    get: function () {
      var t = a(this);
      var e = o(t.length);
      return 0 == e ? 0 : e - 1;
    }
  });
  i("lastIndex");
}