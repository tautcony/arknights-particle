var r = require(260);
var i = require(2092).some;
var a = r.aTypedArray;
r.exportTypedArrayMethod("some", function (t) {
  return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
});