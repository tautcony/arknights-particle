var r = require(2109);
var i = require(7293);
var a = require(7908);
var o = require(9518);
var s = require(8544);
r({
  target: "Object",
  stat: !0,
  forced: i(function () {
    o(1);
  }),
  sham: !s
}, {
  getPrototypeOf: function (t) {
    return o(a(t));
  }
});