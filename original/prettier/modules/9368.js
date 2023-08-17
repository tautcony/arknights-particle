var r = require(260);
var i = require(3671).left;
var a = r.aTypedArray;
r.exportTypedArrayMethod("reduce", function (t) {
  return i(a(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
});