var r = require(2792);
var i = require(2832);
var a = require(1518);
var exports = {
  PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
  G15: 1335,
  G18: 7973,
  G15_MASK: 21522,
  getBCHTypeInfo: function (t) {
    for (var e = t << 10; exports.getBCHDigit(e) - exports.getBCHDigit(exports.G15) >= 0;) e ^= exports.G15 << exports.getBCHDigit(e) - exports.getBCHDigit(exports.G15);
    return (t << 10 | e) ^ exports.G15_MASK;
  },
  getBCHTypeNumber: function (t) {
    for (var e = t << 12; exports.getBCHDigit(e) - exports.getBCHDigit(exports.G18) >= 0;) e ^= exports.G18 << exports.getBCHDigit(e) - exports.getBCHDigit(exports.G18);
    return t << 12 | e;
  },
  getBCHDigit: function (t) {
    for (var e = 0; 0 != t;) {
      e++;
      t >>>= 1;
    }
    return e;
  },
  getPatternPosition: function (t) {
    return exports.PATTERN_POSITION_TABLE[t - 1];
  },
  getMask: function (t, e, n) {
    switch (t) {
      case 0:
        return (e + n) % 2 == 0;
      case 1:
        return e % 2 == 0;
      case 2:
        return n % 3 == 0;
      case 3:
        return (e + n) % 3 == 0;
      case 4:
        return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
      case 5:
        return e * n % 2 + e * n % 3 == 0;
      case 6:
        return (e * n % 2 + e * n % 3) % 2 == 0;
      case 7:
        return (e * n % 3 + (e + n) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + t);
    }
  },
  getErrorCorrectPolynomial: function (t) {
    for (e = new i([1], 0), n = 0, void 0; n < t; n++) {
      var e;
      var n;
      e = e.multiply(new i([1, a.gexp(n)], 0));
    }
    return e;
  },
  getLengthInBits: function (t, e) {
    if (1 <= e && e < 10) switch (t) {
      case r.MODE_NUMBER:
        return 10;
      case r.MODE_ALPHA_NUM:
        return 9;
      case r.MODE_8BIT_BYTE:
      case r.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + t);
    } else if (e < 27) switch (t) {
      case r.MODE_NUMBER:
        return 12;
      case r.MODE_ALPHA_NUM:
        return 11;
      case r.MODE_8BIT_BYTE:
        return 16;
      case r.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + t);
    } else {
      if (!(e < 41)) throw new Error("type:" + e);
      switch (t) {
        case r.MODE_NUMBER:
          return 14;
        case r.MODE_ALPHA_NUM:
          return 13;
        case r.MODE_8BIT_BYTE:
          return 16;
        case r.MODE_KANJI:
          return 12;
        default:
          throw new Error("mode:" + t);
      }
    }
  },
  getLostPoint: function (t) {
    for (e = t.getModuleCount(), n = 0, r = 0, void 0; r < e; r++) {
      var e;
      var n;
      var r;
      for (var i = 0; i < e; i++) {
        for (a = 0, o = t.isDark(r, i), s = -1, void 0; s <= 1; s++) {
          var a;
          var o;
          var s;
          if (!(r + s < 0 || e <= r + s)) for (var l = -1; l <= 1; l++) if (i + l < 0 || e <= i + l || 0 == s && 0 == l) {
            if (o == t.isDark(r + s, i + l)) {
              a++;
            }
          }
        }
        if (a > 5) {
          n += 3 + a - 5;
        }
      }
    }
    for (r = 0; r < e - 1; r++) for (i = 0; i < e - 1; i++) {
      var u = 0;
      if (t.isDark(r, i)) {
        u++;
      }
      if (t.isDark(r + 1, i)) {
        u++;
      }
      if (t.isDark(r, i + 1)) {
        u++;
      }
      if (t.isDark(r + 1, i + 1)) {
        u++;
      }
      if (0 != u && 4 != u) {
        n += 3;
      }
    }
    for (r = 0; r < e; r++) for (i = 0; i < e - 6; i++) if (t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6)) {
      n += 40;
    }
    for (i = 0; i < e; i++) for (r = 0; r < e - 6; r++) if (t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i)) {
      n += 40;
    }
    var c = 0;
    for (i = 0; i < e; i++) for (r = 0; r < e; r++) if (t.isDark(r, i)) {
      c++;
    }
    return n + Math.abs(100 * c / e / e - 50) / 5 * 10;
  }
};
exports.exports = exports;