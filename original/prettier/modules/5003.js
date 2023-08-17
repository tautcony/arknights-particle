var r = require(2109);
var i = require(7293);
var a = require(5656);
var o = require(1236).f;
var s = require(9781);
var l = i(function () {
  o(1);
});
r({
  target: "Object",
  stat: !0,
  forced: !s || l,
  sham: !s
}, {
  getOwnPropertyDescriptor: function (t, e) {
    return o(a(t), e);
  }
});