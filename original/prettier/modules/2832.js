var r = require(1518);
function exports(t, e) {
  if (null == t.length) throw new Error(t.length + "/" + e);
  for (var n = 0; n < t.length && 0 == t[n];) n++;
  this.num = new Array(t.length - n + e);
  for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n];
}
exports.prototype = {
  get: function (t) {
    return this.num[t];
  },
  getLength: function () {
    return this.num.length;
  },
  multiply: function (t) {
    for (e = new Array(this.getLength() + t.getLength() - 1), n = 0, void 0; n < this.getLength(); n++) {
      var e;
      var n;
      for (var a = 0; a < t.getLength(); a++) e[n + a] ^= r.gexp(r.glog(this.get(n)) + r.glog(t.get(a)));
    }
    return new exports(e, 0);
  },
  mod: function (t) {
    if (this.getLength() - t.getLength() < 0) return this;
    for (e = r.glog(this.get(0)) - r.glog(t.get(0)), n = new Array(this.getLength()), a = 0, void 0; a < this.getLength(); a++) {
      var e;
      var n;
      var a;
      n[a] = this.get(a);
    }
    for (a = 0; a < t.getLength(); a++) n[a] ^= r.gexp(r.glog(t.get(a)) + e);
    return new exports(n, 0).mod(t);
  }
};
exports.exports = exports;