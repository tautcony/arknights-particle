var r = require(2109);
var i = require(111);
var a = require(2423).onFreeze;
var o = require(6677);
var s = require(7293);
var l = Object.preventExtensions;
r({
  target: "Object",
  stat: !0,
  forced: s(function () {
    l(1);
  }),
  sham: !o
}, {
  preventExtensions: function (t) {
    return l && i(t) ? l(a(t)) : t;
  }
});