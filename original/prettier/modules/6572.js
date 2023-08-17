var r = require(2109);
var i = require(7293);
var a = require(6135);
r({
  target: "Array",
  stat: !0,
  forced: i(function () {
    function t() {}
    return !(Array.of.call(t) instanceof t);
  })
}, {
  of: function () {
    for (t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e), void 0; e > t;) {
      var t;
      var e;
      var n;
      a(n, t, arguments[t++]);
    }
    n.length = e;
    return n;
  }
});