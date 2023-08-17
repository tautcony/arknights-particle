var r = require(7854);
var i = require(7293);
var a = require(7072);
var o = require(260).NATIVE_ARRAY_BUFFER_VIEWS;
var s = r.ArrayBuffer;
var l = r.Int8Array;
exports.exports = !o || !i(function () {
  l(1);
}) || !i(function () {
  new l(-1);
}) || !a(function (t) {
  new l();
  new l(null);
  new l(1.5);
  new l(t);
}, !0) || i(function () {
  return 1 !== new l(new s(2), 1, void 0).length;
});