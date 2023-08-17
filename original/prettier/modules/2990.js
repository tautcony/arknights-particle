var r = require(260);
var i = require(1048);
var a = r.aTypedArray;
r.exportTypedArrayMethod("copyWithin", function (t, e) {
  return i.call(a(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
});