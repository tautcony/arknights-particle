var r = require(260);
var i = require(6707);
var a = require(7293);
var o = r.aTypedArray;
var s = r.aTypedArrayConstructor;
var l = r.exportTypedArrayMethod;
var u = [].slice;
l("slice", function (t, e) {
  for (n = u.call(o(this), t, e), r = i(this, this.constructor), a = 0, l = n.length, c = new (s(r))(l), void 0; l > a;) {
    var n;
    var r;
    var a;
    var l;
    var c;
    c[a] = n[a++];
  }
  return c;
}, a(function () {
  new Int8Array(1).slice();
}));