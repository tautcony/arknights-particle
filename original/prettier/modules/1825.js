var r = require(2109);
var i = require(7293);
var a = require(111);
var o = Object.isExtensible;
r({
  target: "Object",
  stat: !0,
  forced: i(function () {
    o(1);
  })
}, {
  isExtensible: function (t) {
    return !!a(t) && (!o || o(t));
  }
});