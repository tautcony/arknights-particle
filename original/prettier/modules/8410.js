var r = require(2109);
var i = require(7293);
var a = require(111);
var o = Object.isFrozen;
r({
  target: "Object",
  stat: !0,
  forced: i(function () {
    o(1);
  })
}, {
  isFrozen: function (t) {
    return !a(t) || !!o && o(t);
  }
});