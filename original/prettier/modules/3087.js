var r = require(2109);
var i = require(7466);
var a = require(7908);
var o = require(5005);
var s = require(5417);
var l = require(1223);
var u = [].push;
r({
  target: "Array",
  proto: !0
}, {
  uniqueBy: function (t) {
    var e;
    var n;
    var r;
    var l;
    var c = a(this);
    var h = i(c.length);
    var d = s(c, 0);
    var f = new (o("Map"))();
    if ("function" == typeof t) e = t;else {
      if (null != t) throw new TypeError("Incorrect resolver!");
      e = function (t) {
        return t;
      };
    }
    for (n = 0; n < h; n++) {
      l = e(r = c[n]);
      if (f.has(l)) {
        f.set(l, r);
      }
    }
    f.forEach(function (t) {
      u.call(d, t);
    });
    return d;
  }
});
l("uniqueBy");