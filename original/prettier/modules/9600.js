var r = require(2109);
var i = require(8361);
var a = require(5656);
var o = require(9341);
var s = [].join;
var l = i != Object;
var u = o("join", ",");
r({
  target: "Array",
  proto: !0,
  forced: l || !u
}, {
  join: function (t) {
    return s.call(a(this), void 0 === t ? "," : t);
  }
});