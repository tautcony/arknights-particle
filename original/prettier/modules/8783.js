var r = require(8710).charAt;
var i = require(9909);
var a = require(654);
var o = "String Iterator";
var s = i.set;
var l = i.getterFor(o);
a(String, "String", function (t) {
  s(this, {
    type: o,
    string: String(t),
    index: 0
  });
}, function () {
  var t;
  var e = l(this);
  var n = e.string;
  var i = e.index;
  return i >= n.length ? {
    value: void 0,
    done: !0
  } : (t = r(n, i), e.index += t.length, {
    value: t,
    done: !1
  });
});