var r = require(7854);
var i = require(260);
var a = require(7293);
var o = r.Int8Array;
var s = i.aTypedArray;
var l = i.exportTypedArrayMethod;
var u = [].toLocaleString;
var c = [].slice;
var h = !!o && a(function () {
  u.call(new o(1));
});
l("toLocaleString", function () {
  return u.apply(h ? c.call(s(this)) : s(this), arguments);
}, a(function () {
  return [1, 2].toLocaleString() != new o([1, 2]).toLocaleString();
}) || !a(function () {
  o.prototype.toLocaleString.call([1, 2]);
}));