var r = require(260);
var i = require(2092).map;
var a = require(6707);
var o = r.aTypedArray;
var s = r.aTypedArrayConstructor;
r.exportTypedArrayMethod("map", function (t) {
  return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0, function (t, e) {
    return new (s(a(t, t.constructor)))(e);
  });
});