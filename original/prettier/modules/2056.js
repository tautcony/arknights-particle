var r = require(260);
var i = r.aTypedArray;
var a = r.exportTypedArrayMethod;
var o = Math.floor;
a("reverse", function () {
  for (e = this, n = i(e).length, r = o(n / 2), a = 0, void 0; a < r;) {
    var t;
    var e;
    var n;
    var r;
    var a;
    t = e[a];
    e[a++] = e[--n];
    e[n] = t;
  }
  return e;
});