var r = require(2109);
var i = require(7908);
var a = require(7466);
var o = require(9958);
var s = require(1223);
r({
  target: "Array",
  proto: !0
}, {
  at: function (t) {
    var e = i(this);
    var n = a(e.length);
    var r = o(t);
    var s = r >= 0 ? r : n + r;
    return s < 0 || s >= n ? void 0 : e[s];
  }
});
s("at");