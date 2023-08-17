var r = require(2109);
var i = require(2092).filter;
var a = require(1194);
var o = require(9207);
var s = a("filter");
var l = o("filter");
r({
  target: "Array",
  proto: !0,
  forced: !s || !l
}, {
  filter: function (t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});