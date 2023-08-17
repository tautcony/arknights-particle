var r = require(2109);
var i = require(2092).some;
var a = require(9341);
var o = require(9207);
var s = a("some");
var l = o("some");
r({
  target: "Array",
  proto: !0,
  forced: !s || !l
}, {
  some: function (t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});