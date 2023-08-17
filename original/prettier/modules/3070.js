var r = require(9781);
var i = require(4664);
var a = require(9670);
var o = require(7593);
var s = Object.defineProperty;
module.f = r ? s : function (t, e, n) {
  a(t);
  e = o(e, !0);
  a(n);
  if (i) try {
    return s(t, e, n);
  } catch (t) {}
  if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
  if ("value" in n) {
    t[e] = n.value;
  }
  return t;
};