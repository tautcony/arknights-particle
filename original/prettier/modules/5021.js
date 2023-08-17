var r = require(260);
var i = require(7466);
var a = require(1400);
var o = require(6707);
var s = r.aTypedArray;
r.exportTypedArrayMethod("subarray", function (t, e) {
  var n = s(this);
  var r = n.length;
  var l = a(t, r);
  return new (o(n, n.constructor))(n.buffer, n.byteOffset + l * n.BYTES_PER_ELEMENT, i((void 0 === e ? r : a(e, r)) - l));
});