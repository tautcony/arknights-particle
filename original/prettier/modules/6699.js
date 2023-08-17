var r = require(2109);
var i = require(1318).includes;
var a = require(1223);
r({
  target: "Array",
  proto: !0,
  forced: !require(9207)("indexOf", {
    ACCESSORS: !0,
    1: 0
  })
}, {
  includes: function (t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
a("includes");