var r = require(260);
var i = require(2092).forEach;
var a = r.aTypedArray;
r.exportTypedArrayMethod("forEach", function (t) {
  i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
});