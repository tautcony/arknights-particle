var r = require(260);
var i = r.aTypedArray;
var a = r.exportTypedArrayMethod;
var o = [].join;
a("join", function (t) {
  return o.apply(i(this), arguments);
});