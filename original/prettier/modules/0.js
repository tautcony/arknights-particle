var r = require(2109);
var i = require(3157);
var a = Object.isFrozen;
var o = function (t, e) {
  if (!a || !i(t) || !a(t)) return !1;
  for (r = 0, o = t.length, void 0; r < o;) {
    var n;
    var r;
    var o;
    if (!("string" == typeof (n = t[r++]) || e && void 0 === n)) return !1;
  }
  return 0 !== o;
};
r({
  target: "Array",
  stat: !0
}, {
  isTemplateObject: function (t) {
    if (!o(t, !0)) return !1;
    var e = t.raw;
    return !(e.length !== t.length || !o(e, !1));
  }
});