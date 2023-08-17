var r = require(7854);
var i = require(8324);
var a = require(6992);
var o = require(8880);
var s = require(5112);
var l = s("iterator");
var u = s("toStringTag");
var c = a.values;
for (var h in i) {
  var d = r[h];
  var f = d && d.prototype;
  if (f) {
    if (f[l] !== c) try {
      o(f, l, c);
    } catch (t) {
      f[l] = c;
    }
    if (f[u]) {
      o(f, u, h);
    }
    if (i[h]) for (var p in a) if (f[p] !== a[p]) try {
      o(f, p, a[p]);
    } catch (t) {
      f[p] = a[p];
    }
  }
}