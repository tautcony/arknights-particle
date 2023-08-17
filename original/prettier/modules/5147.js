var r = require(2109);
var i = require(7293);
var a = require(863);
var o = 1 .toPrecision;
r({
  target: "Number",
  proto: !0,
  forced: i(function () {
    return "1" !== o.call(1, void 0);
  }) || !i(function () {
    o.call({});
  })
}, {
  toPrecision: function (t) {
    return void 0 === t ? o.call(a(this)) : o.call(a(this), t);
  }
});