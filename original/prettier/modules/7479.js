var r = require(2109);
var i = require(8523);
var a = require(2534);
r({
  target: "Promise",
  stat: !0
}, {
  try: function (t) {
    var e = i.f(this);
    var n = a(t);
    (n.error ? e.reject : e.resolve)(n.value);
    return e.promise;
  }
});