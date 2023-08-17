var r = require(2109);
var i = require(9781);
var a = require(9026);
var o = require(7908);
var s = require(3099);
var l = require(3070);
if (i) {
  r({
    target: "Object",
    proto: !0,
    forced: a
  }, {
    __defineGetter__: function (t, e) {
      l.f(o(this), t, {
        get: s(e),
        enumerable: !0,
        configurable: !0
      });
    }
  });
}