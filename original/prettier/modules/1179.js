var e = 1 / 0;
var n = Math.abs;
var r = Math.pow;
var i = Math.floor;
var a = Math.log;
var o = Math.LN2;
exports.exports = {
  pack: function (t, s, l) {
    var u;
    var c;
    var h;
    var d = new Array(l);
    var f = 8 * l - s - 1;
    var p = (1 << f) - 1;
    var m = p >> 1;
    var v = 23 === s ? r(2, -24) - r(2, -77) : 0;
    var g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    var y = 0;
    for ((t = n(t)) != t || t === e ? (c = t != t ? 1 : 0, u = p) : (u = i(a(t) / o), t * (h = r(2, -u)) < 1 && (u--, h *= 2), (t += u + m >= 1 ? v / h : v * r(2, 1 - m)) * h >= 2 && (u++, h /= 2), u + m >= p ? (c = 0, u = p) : u + m >= 1 ? (c = (t * h - 1) * r(2, s), u += m) : (c = t * r(2, m - 1) * r(2, s), u = 0)); s >= 8; d[y++] = 255 & c, c /= 256, s -= 8);
    for (u = u << s | c, f += s; f > 0; d[y++] = 255 & u, u /= 256, f -= 8);
    d[--y] |= 128 * g;
    return d;
  },
  unpack: function (t, n) {
    var i;
    var a = t.length;
    var o = 8 * a - n - 1;
    var s = (1 << o) - 1;
    var l = s >> 1;
    var u = o - 7;
    var c = a - 1;
    var h = t[c--];
    var d = 127 & h;
    for (h >>= 7; u > 0; d = 256 * d + t[c], c--, u -= 8);
    for (i = d & (1 << -u) - 1, d >>= -u, u += n; u > 0; i = 256 * i + t[c], c--, u -= 8);
    if (0 === d) d = 1 - l;else {
      if (d === s) return i ? NaN : h ? -1 / 0 : e;
      i += r(2, n);
      d -= l;
    }
    return (h ? -1 : 1) * i * r(2, d - n);
  }
};