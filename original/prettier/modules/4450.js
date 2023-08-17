var r = require(3655);
var i = require(7611);
var a = require(3453);
var o = require(3160);
var s = require(2832);
function exports(t, e) {
  this.typeNumber = t;
  this.errorCorrectLevel = e;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = [];
}
var u = exports.prototype;
u.addData = function (t) {
  var e = new r(t);
  this.dataList.push(e);
  this.dataCache = null;
};
u.isDark = function (t, e) {
  if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
  return this.modules[t][e];
};
u.getModuleCount = function () {
  return this.moduleCount;
};
u.make = function () {
  if (this.typeNumber < 1) {
    var t = 1;
    for (t = 1; t < 40; t++) {
      for (e = i.getRSBlocks(t, this.errorCorrectLevel), n = new a(), r = 0, s = 0, void 0; s < e.length; s++) {
        var e;
        var n;
        var r;
        var s;
        r += e[s].dataCount;
      }
      for (s = 0; s < this.dataList.length; s++) {
        var l = this.dataList[s];
        n.put(l.mode, 4);
        n.put(l.getLength(), o.getLengthInBits(l.mode, t));
        l.write(n);
      }
      if (n.getLengthInBits() <= 8 * r) break;
    }
    this.typeNumber = t;
  }
  this.makeImpl(!1, this.getBestMaskPattern());
};
u.makeImpl = function (t, e) {
  this.moduleCount = 4 * this.typeNumber + 17;
  this.modules = new Array(this.moduleCount);
  for (var n = 0; n < this.moduleCount; n++) {
    this.modules[n] = new Array(this.moduleCount);
    for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
  }
  this.setupPositionProbePattern(0, 0);
  this.setupPositionProbePattern(this.moduleCount - 7, 0);
  this.setupPositionProbePattern(0, this.moduleCount - 7);
  this.setupPositionAdjustPattern();
  this.setupTimingPattern();
  this.setupTypeInfo(t, e);
  if (this.typeNumber >= 7) {
    this.setupTypeNumber(t);
  }
  if (null == this.dataCache) {
    this.dataCache = exports.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
  }
  this.mapData(this.dataCache, e);
};
u.setupPositionProbePattern = function (t, e) {
  for (var n = -1; n <= 7; n++) if (!(t + n <= -1 || this.moduleCount <= t + n)) for (var r = -1; r <= 7; r++) if (e + r <= -1 || this.moduleCount <= e + r) {
    this.modules[t + n][e + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4;
  }
};
u.getBestMaskPattern = function () {
  for (t = 0, e = 0, n = 0, void 0; n < 8; n++) {
    var t;
    var e;
    var n;
    this.makeImpl(!0, n);
    var r = o.getLostPoint(this);
    if (0 == n || t > r) {
      t = r;
      e = n;
    }
  }
  return e;
};
u.createMovieClip = function (t, e, n) {
  var r = t.createEmptyMovieClip(e, n);
  this.make();
  for (var i = 0; i < this.modules.length; i++) for (a = 1 * i, o = 0, void 0; o < this.modules[i].length; o++) {
    var a;
    var o;
    var s = 1 * o;
    if (this.modules[i][o]) {
      r.beginFill(0, 100);
      r.moveTo(s, a);
      r.lineTo(s + 1, a);
      r.lineTo(s + 1, a + 1);
      r.lineTo(s, a + 1);
      r.endFill();
    }
  }
  return r;
};
u.setupTimingPattern = function () {
  for (var t = 8; t < this.moduleCount - 8; t++) if (null == this.modules[t][6]) {
    this.modules[t][6] = t % 2 == 0;
  }
  for (var e = 8; e < this.moduleCount - 8; e++) if (null == this.modules[6][e]) {
    this.modules[6][e] = e % 2 == 0;
  }
};
u.setupPositionAdjustPattern = function () {
  for (t = o.getPatternPosition(this.typeNumber), e = 0, void 0; e < t.length; e++) {
    var t;
    var e;
    for (var n = 0; n < t.length; n++) {
      var r = t[e];
      var i = t[n];
      if (null == this.modules[r][i]) for (var a = -2; a <= 2; a++) for (var s = -2; s <= 2; s++) this.modules[r + a][i + s] = -2 == a || 2 == a || -2 == s || 2 == s || 0 == a && 0 == s;
    }
  }
};
u.setupTypeNumber = function (t) {
  for (e = o.getBCHTypeNumber(this.typeNumber), n = 0, void 0; n < 18; n++) {
    var e;
    var n;
    var r = !t && 1 == (e >> n & 1);
    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r;
  }
  for (n = 0; n < 18; n++) {
    r = !t && 1 == (e >> n & 1);
    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r;
  }
};
u.setupTypeInfo = function (t, e) {
  for (n = this.errorCorrectLevel << 3 | e, r = o.getBCHTypeInfo(n), i = 0, void 0; i < 15; i++) {
    var n;
    var r;
    var i;
    var a = !t && 1 == (r >> i & 1);
    if (i < 6) {
      this.modules[i][8] = a;
    } else {
      if (i < 8) {
        this.modules[i + 1][8] = a;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = a;
      }
    }
  }
  for (i = 0; i < 15; i++) {
    a = !t && 1 == (r >> i & 1);
    if (i < 8) {
      this.modules[8][this.moduleCount - i - 1] = a;
    } else {
      if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = a;
      } else {
        this.modules[8][15 - i - 1] = a;
      }
    }
  }
  this.modules[this.moduleCount - 8][8] = !t;
};
u.mapData = function (t, e) {
  for (n = -1, r = this.moduleCount - 1, i = 7, a = 0, s = this.moduleCount - 1, void 0; s > 0; s -= 2) {
    var n;
    var r;
    var i;
    var a;
    var s;
    for (6 == s && s--;;) {
      for (var l = 0; l < 2; l++) if (null == this.modules[r][s - l]) {
        var u = !1;
        if (a < t.length) {
          u = 1 == (t[a] >>> i & 1);
        }
        if (o.getMask(e, r, s - l)) {
          u = !u;
        }
        this.modules[r][s - l] = u;
        if (-1 == --i) {
          a++;
          i = 7;
        }
      }
      if ((r += n) < 0 || this.moduleCount <= r) {
        r -= n;
        n = -n;
        break;
      }
    }
  }
};
exports.PAD0 = 236;
exports.PAD1 = 17;
exports.createData = function (t, e, n) {
  for (r = i.getRSBlocks(t, e), s = new a(), u = 0, void 0; u < n.length; u++) {
    var r;
    var s;
    var u;
    var c = n[u];
    s.put(c.mode, 4);
    s.put(c.getLength(), o.getLengthInBits(c.mode, t));
    c.write(s);
  }
  var h = 0;
  for (u = 0; u < r.length; u++) h += r[u].dataCount;
  if (s.getLengthInBits() > 8 * h) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * h + ")");
  for (s.getLengthInBits() + 4 <= 8 * h && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
  for (; !(s.getLengthInBits() >= 8 * h || (s.put(exports.PAD0, 8), s.getLengthInBits() >= 8 * h));) s.put(exports.PAD1, 8);
  return exports.createBytes(s, r);
};
exports.createBytes = function (t, e) {
  for (n = 0, r = 0, i = 0, a = new Array(e.length), l = new Array(e.length), u = 0, void 0; u < e.length; u++) {
    var n;
    var r;
    var i;
    var a;
    var l;
    var u;
    var c = e[u].dataCount;
    var h = e[u].totalCount - c;
    r = Math.max(r, c);
    i = Math.max(i, h);
    a[u] = new Array(c);
    for (var d = 0; d < a[u].length; d++) a[u][d] = 255 & t.buffer[d + n];
    n += c;
    var f = o.getErrorCorrectPolynomial(h);
    var p = new s(a[u], f.getLength() - 1).mod(f);
    for (l[u] = new Array(f.getLength() - 1), d = 0; d < l[u].length; d++) {
      var m = d + p.getLength() - l[u].length;
      l[u][d] = m >= 0 ? p.get(m) : 0;
    }
  }
  var v = 0;
  for (d = 0; d < e.length; d++) v += e[d].totalCount;
  var g = new Array(v);
  var y = 0;
  for (d = 0; d < r; d++) for (u = 0; u < e.length; u++) if (d < a[u].length) {
    g[y++] = a[u][d];
  }
  for (d = 0; d < i; d++) for (u = 0; u < e.length; u++) if (d < l[u].length) {
    g[y++] = l[u][d];
  }
  return g;
};
exports.exports = exports;