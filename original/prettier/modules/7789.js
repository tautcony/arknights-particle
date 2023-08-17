var r = require(260);
var i = require(6583);
var a = r.aTypedArray;
r.exportTypedArrayMethod("lastIndexOf", function (t) {
  return i.apply(a(this), arguments);
});