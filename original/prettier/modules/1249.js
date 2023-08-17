var r = require(2109);
var i = require(2092).map;
var a = require(1194);
var o = require(9207);
var s = a("map");
var l = o("map");
r({
  target: "Array",
  proto: !0,
  forced: !s || !l
}, {
  map: function (t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});