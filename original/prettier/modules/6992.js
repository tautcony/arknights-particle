var r = require(5656);
var i = require(1223);
var a = require(7497);
var o = require(9909);
var s = require(654);
var l = "Array Iterator";
var u = o.set;
var c = o.getterFor(l);
exports.exports = s(Array, "Array", function (t, e) {
  u(this, {
    type: l,
    target: r(t),
    index: 0,
    kind: e
  });
}, function () {
  var t = c(this);
  var e = t.target;
  var n = t.kind;
  var r = t.index++;
  return !e || r >= e.length ? (t.target = void 0, {
    value: void 0,
    done: !0
  }) : "keys" == n ? {
    value: r,
    done: !1
  } : "values" == n ? {
    value: e[r],
    done: !1
  } : {
    value: [r, e[r]],
    done: !1
  };
}, "values");
a.Arguments = a.Array;
i("keys");
i("values");
i("entries");