var r = require(2109);
var i = require(9781);
var a = require(9026);
var o = require(7908);
var s = require(7593);
var l = require(9518);
var u = require(1236).f;
if (i) {
  r({
    target: "Object",
    proto: !0,
    forced: a
  }, {
    __lookupSetter__: function (t) {
      var e;
      var n = o(this);
      var r = s(t, !0);
      do {
        if (e = u(n, r)) return e.set;
      } while (n = l(n));
    }
  });
}