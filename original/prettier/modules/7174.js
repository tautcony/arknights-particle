var r = require(260);
var i = require(2092).findIndex;
var a = r.aTypedArray;
r.exportTypedArrayMethod("findIndex", function (t) {
  return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
});