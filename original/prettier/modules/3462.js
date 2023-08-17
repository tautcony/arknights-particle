var r = require(260);
var i = require(7466);
var a = require(4590);
var o = require(7908);
var s = require(7293);
var l = r.aTypedArray;
r.exportTypedArrayMethod("set", function (t) {
  l(this);
  var e = a(arguments.length > 1 ? arguments[1] : void 0, 1);
  var n = this.length;
  var r = o(t);
  var s = i(r.length);
  var u = 0;
  if (s + e > n) throw RangeError("Wrong length");
  for (; u < s;) this[e + u] = r[u++];
}, s(function () {
  new Int8Array(1).set({});
}));