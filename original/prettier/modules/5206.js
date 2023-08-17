var r = require(260);
var i = require(3832);
var a = r.aTypedArrayConstructor;
r.exportTypedArrayStaticMethod("of", function () {
  for (t = 0, e = arguments.length, n = new (a(this))(e), void 0; e > t;) {
    var t;
    var e;
    var n;
    n[t] = arguments[t++];
  }
  return n;
}, i);