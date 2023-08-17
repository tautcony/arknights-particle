var r = require(2109);
var i = require(2092).every;
var a = require(9341);
var o = require(9207);
var s = a("every");
var l = o("every");
r({
  target: "Array",
  proto: !0,
  forced: !s || !l
}, {
  every: function (t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});