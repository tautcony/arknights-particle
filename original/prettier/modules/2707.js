var r = require(2109);
var i = require(3099);
var a = require(7908);
var o = require(7293);
var s = require(9341);
var l = [];
var u = l.sort;
var c = o(function () {
  l.sort(void 0);
});
var h = o(function () {
  l.sort(null);
});
var d = s("sort");
r({
  target: "Array",
  proto: !0,
  forced: c || !h || !d
}, {
  sort: function (t) {
    return void 0 === t ? u.call(a(this)) : u.call(a(this), i(t));
  }
});