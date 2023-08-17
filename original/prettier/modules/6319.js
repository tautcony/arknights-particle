var r = require(7854);
var i = require(260);
var a = require(6992);
var o = require(5112)("iterator");
var s = r.Uint8Array;
var l = a.values;
var u = a.keys;
var c = a.entries;
var h = i.aTypedArray;
var d = i.exportTypedArrayMethod;
var f = s && s.prototype[o];
var p = !!f && ("values" == f.name || null == f.name);
var m = function () {
  return l.call(h(this));
};
d("entries", function () {
  return c.call(h(this));
});
d("keys", function () {
  return u.call(h(this));
});
d("values", m, !p);
d(o, m, !p);