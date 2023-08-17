var r = require(2109);
var i = require(3671).left;
var a = require(9341);
var o = require(9207);
var s = require(7392);
var l = require(5268);
var u = a("reduce");
var c = o("reduce", {
  1: 0
});
r({
  target: "Array",
  proto: !0,
  forced: !u || !c || !l && s > 79 && s < 83
}, {
  reduce: function (t) {
    return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  }
});