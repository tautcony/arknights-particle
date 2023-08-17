var r = require(2109);
var i = require(9781);
var a = require(3887);
var o = require(5656);
var s = require(1236);
var l = require(6135);
r({
  target: "Object",
  stat: !0,
  sham: !i
}, {
  getOwnPropertyDescriptors: function (t) {
    for (r = o(t), i = s.f, u = a(r), c = {}, h = 0, void 0; u.length > h;) {
      var e;
      var n;
      var r;
      var i;
      var u;
      var c;
      var h;
      if (void 0 !== (n = i(r, e = u[h++]))) {
        l(c, e, n);
      }
    }
    return c;
  }
});