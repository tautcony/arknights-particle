var r = require(2109);
var i = require(6677);
var a = require(7293);
var o = require(111);
var s = require(2423).onFreeze;
var l = Object.freeze;
r({
  target: "Object",
  stat: !0,
  forced: a(function () {
    l(1);
  }),
  sham: !i
}, {
  freeze: function (t) {
    return l && o(t) ? l(s(t)) : t;
  }
});