var r = require(2109);
var i = require(1318).indexOf;
var a = require(9341);
var o = require(9207);
var s = [].indexOf;
var l = !!s && 1 / [1].indexOf(1, -0) < 0;
var u = a("indexOf");
var c = o("indexOf", {
  ACCESSORS: !0,
  1: 0
});
r({
  target: "Array",
  proto: !0,
  forced: l || !u || !c
}, {
  indexOf: function (t) {
    return l ? s.apply(this, arguments) || 0 : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});