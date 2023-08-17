var r = require(260);
var i = r.aTypedArray;
var a = r.exportTypedArrayMethod;
var o = [].sort;
a("sort", function (t) {
  return o.call(i(this), t);
});