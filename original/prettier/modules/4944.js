var r = require(2109);
var i = require(6790);
var a = require(7908);
var o = require(7466);
var s = require(9958);
var l = require(5417);
r({
  target: "Array",
  proto: !0
}, {
  flat: function () {
    var t = arguments.length ? arguments[0] : void 0;
    var e = a(this);
    var n = o(e.length);
    var r = l(e, 0);
    r.length = i(r, e, e, n, 0, void 0 === t ? 1 : s(t));
    return r;
  }
});