var r = require(260);
var i = require(2092).filter;
var a = require(6707);
var o = r.aTypedArray;
var s = r.aTypedArrayConstructor;
r.exportTypedArrayMethod("filter", function (t) {
  for (e = i(o(this), t, arguments.length > 1 ? arguments[1] : void 0), n = a(this, this.constructor), r = 0, l = e.length, u = new (s(n))(l), void 0; l > r;) {
    var e;
    var n;
    var r;
    var l;
    var u;
    u[r] = e[r++];
  }
  return u;
});