var r = require(260);
var i = require(1285);
var a = r.aTypedArray;
r.exportTypedArrayMethod("fill", function (t) {
  return i.apply(a(this), arguments);
});