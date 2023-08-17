var r = require(260);
var i = require(3671).right;
var a = r.aTypedArray;
r.exportTypedArrayMethod("reduceRight", function (t) {
  return i(a(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
});