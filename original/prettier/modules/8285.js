var r = require(2109);
var i = require(8730);
var a = Math.abs;
r({
  target: "Number",
  stat: !0
}, {
  isSafeInteger: function (t) {
    return i(t) && a(t) <= 9007199254740991;
  }
});