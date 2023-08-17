var r = require(260);
var i = require(1318).includes;
var a = r.aTypedArray;
r.exportTypedArrayMethod("includes", function (t) {
  return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
});