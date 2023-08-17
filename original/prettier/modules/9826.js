var r = require(2109);
var i = require(2092).find;
var a = require(1223);
var o = require(9207);
var s = "find";
var l = !0;
var u = o(s);
if (s in []) {
  Array(1).find(function () {
    l = !1;
  });
}
r({
  target: "Array",
  proto: !0,
  forced: l || !u
}, {
  find: function (t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
a(s);