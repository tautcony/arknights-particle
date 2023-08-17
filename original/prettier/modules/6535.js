var r = require(2109);
var i = require(6790);
var a = require(7908);
var o = require(7466);
var s = require(3099);
var l = require(5417);
r({
  target: "Array",
  proto: !0
}, {
  flatMap: function (t) {
    var e;
    var n = a(this);
    var r = o(n.length);
    s(t);
    (e = l(n, 0)).length = i(e, n, n, r, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0);
    return e;
  }
});