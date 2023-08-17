var r = require(260);
var i = require(1318).indexOf;
var a = r.aTypedArray;
r.exportTypedArrayMethod("indexOf", function (t) {
  return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
});