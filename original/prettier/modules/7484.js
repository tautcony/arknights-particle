exports.exports = function () {
  "use strict";

  var t = "millisecond";
  var e = "second";
  var n = "minute";
  var r = "hour";
  var i = "day";
  var a = "week";
  var o = "month";
  var s = "quarter";
  var l = "year";
  var u = "date";
  var c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/;
  var h = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  var d = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
  };
  var f = function (t, e, n) {
    var r = String(t);
    return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
  };
  var p = {
    s: f,
    z: function (t) {
      var e = -t.utcOffset();
      var n = Math.abs(e);
      var r = Math.floor(n / 60);
      var i = n % 60;
      return (e <= 0 ? "+" : "-") + f(r, 2, "0") + ":" + f(i, 2, "0");
    },
    m: function t(e, n) {
      if (e.date() < n.date()) return -t(n, e);
      var r = 12 * (n.year() - e.year()) + (n.month() - e.month());
      var i = e.clone().add(r, o);
      var a = n - i < 0;
      var s = e.clone().add(r + (a ? -1 : 1), o);
      return +(-(r + (n - i) / (a ? i - s : s - i)) || 0);
    },
    a: function (t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    },
    p: function (c) {
      return {
        M: o,
        y: l,
        w: a,
        d: i,
        D: u,
        h: r,
        m: n,
        s: e,
        ms: t,
        Q: s
      }[c] || String(c || "").toLowerCase().replace(/s$/, "");
    },
    u: function (t) {
      return void 0 === t;
    }
  };
  var m = "en";
  var v = {};
  v[m] = d;
  var g = function (t) {
    return t instanceof _;
  };
  var y = function (t, e, n) {
    var r;
    if (!t) return m;
    if ("string" == typeof t) {
      if (v[t]) {
        r = t;
      }
      if (e) {
        v[t] = e;
        r = t;
      }
    } else {
      var i = t.name;
      v[i] = t;
      r = i;
    }
    if (!n && r) {
      m = r;
    }
    return r || !n && m;
  };
  var b = function (t, e) {
    if (g(t)) return t.clone();
    var n = "object" == typeof e ? e : {};
    n.date = t;
    n.args = arguments;
    return new _(n);
  };
  var x = p;
  x.l = y;
  x.i = g;
  x.w = function (t, e) {
    return b(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };
  var _ = function () {
    function d(t) {
      this.$L = y(t.locale, null, !0);
      this.parse(t);
    }
    var f = d.prototype;
    f.parse = function (t) {
      this.$d = function (t) {
        var e = t.date;
        var n = t.utc;
        if (null === e) return new Date(NaN);
        if (x.u(e)) return new Date();
        if (e instanceof Date) return new Date(e);
        if ("string" == typeof e && !/Z$/i.test(e)) {
          var r = e.match(c);
          if (r) {
            var i = r[2] - 1 || 0;
            var a = (r[7] || "0").substring(0, 3);
            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a);
          }
        }
        return new Date(e);
      }(t);
      this.$x = t.x || {};
      this.init();
    };
    f.init = function () {
      var t = this.$d;
      this.$y = t.getFullYear();
      this.$M = t.getMonth();
      this.$D = t.getDate();
      this.$W = t.getDay();
      this.$H = t.getHours();
      this.$m = t.getMinutes();
      this.$s = t.getSeconds();
      this.$ms = t.getMilliseconds();
    };
    f.$utils = function () {
      return x;
    };
    f.isValid = function () {
      return !("Invalid Date" === this.$d.toString());
    };
    f.isSame = function (t, e) {
      var n = b(t);
      return this.startOf(e) <= n && n <= this.endOf(e);
    };
    f.isAfter = function (t, e) {
      return b(t) < this.startOf(e);
    };
    f.isBefore = function (t, e) {
      return this.endOf(e) < b(t);
    };
    f.$g = function (t, e, n) {
      return x.u(t) ? this[e] : this.set(n, t);
    };
    f.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    };
    f.valueOf = function () {
      return this.$d.getTime();
    };
    f.startOf = function (t, s) {
      var c = this;
      var h = !!x.u(s) || s;
      var d = x.p(t);
      var f = function (t, e) {
        var n = x.w(c.$u ? Date.UTC(c.$y, e, t) : new Date(c.$y, e, t), c);
        return h ? n : n.endOf(i);
      };
      var p = function (t, e) {
        return x.w(c.toDate()[t].apply(c.toDate("s"), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), c);
      };
      var m = this.$W;
      var v = this.$M;
      var g = this.$D;
      var y = "set" + (this.$u ? "UTC" : "");
      switch (d) {
        case l:
          return h ? f(1, 0) : f(31, 11);
        case o:
          return h ? f(1, v) : f(0, v + 1);
        case a:
          var b = this.$locale().weekStart || 0;
          var _ = (m < b ? m + 7 : m) - b;
          return f(h ? g - _ : g + (6 - _), v);
        case i:
        case u:
          return p(y + "Hours", 0);
        case r:
          return p(y + "Minutes", 1);
        case n:
          return p(y + "Seconds", 2);
        case e:
          return p(y + "Milliseconds", 3);
        default:
          return this.clone();
      }
    };
    f.endOf = function (t) {
      return this.startOf(t, !1);
    };
    f.$set = function (a, s) {
      var c;
      var h = x.p(a);
      var d = "set" + (this.$u ? "UTC" : "");
      var f = (c = {}, c[i] = d + "Date", c[u] = d + "Date", c[o] = d + "Month", c[l] = d + "FullYear", c[r] = d + "Hours", c[n] = d + "Minutes", c[e] = d + "Seconds", c[t] = d + "Milliseconds", c)[h];
      var p = h === i ? this.$D + (s - this.$W) : s;
      if (h === o || h === l) {
        var m = this.clone().set(u, 1);
        m.$d[f](p);
        m.init();
        this.$d = m.set(u, Math.min(this.$D, m.daysInMonth())).$d;
      } else if (f) {
        this.$d[f](p);
      }
      this.init();
      return this;
    };
    f.set = function (t, e) {
      return this.clone().$set(t, e);
    };
    f.get = function (t) {
      return this[x.p(t)]();
    };
    f.add = function (t, s) {
      var u;
      var c = this;
      t = Number(t);
      var h = x.p(s);
      var d = function (e) {
        var n = b(c);
        return x.w(n.date(n.date() + Math.round(e * t)), c);
      };
      if (h === o) return this.set(o, this.$M + t);
      if (h === l) return this.set(l, this.$y + t);
      if (h === i) return d(1);
      if (h === a) return d(7);
      var f = (u = {}, u[n] = 6e4, u[r] = 36e5, u[e] = 1e3, u)[h] || 1;
      var p = this.$d.getTime() + t * f;
      return x.w(p, this);
    };
    f.subtract = function (t, e) {
      return this.add(-1 * t, e);
    };
    f.format = function (t) {
      var e = this;
      if (!this.isValid()) return "Invalid Date";
      var n = t || "YYYY-MM-DDTHH:mm:ssZ";
      var r = x.z(this);
      var i = this.$locale();
      var a = this.$H;
      var o = this.$m;
      var s = this.$M;
      var l = i.weekdays;
      var u = i.months;
      var c = function (t, r, i, a) {
        return t && (t[r] || t(e, n)) || i[r].substr(0, a);
      };
      var d = function (t) {
        return x.s(a % 12 || 12, t, "0");
      };
      var f = i.meridiem || function (t, e, n) {
        var r = t < 12 ? "AM" : "PM";
        return n ? r.toLowerCase() : r;
      };
      var p = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: s + 1,
        MM: x.s(s + 1, 2, "0"),
        MMM: c(i.monthsShort, s, u, 3),
        MMMM: c(u, s),
        D: this.$D,
        DD: x.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: c(i.weekdaysMin, this.$W, l, 2),
        ddd: c(i.weekdaysShort, this.$W, l, 3),
        dddd: l[this.$W],
        H: String(a),
        HH: x.s(a, 2, "0"),
        h: d(1),
        hh: d(2),
        a: f(a, o, !0),
        A: f(a, o, !1),
        m: String(o),
        mm: x.s(o, 2, "0"),
        s: String(this.$s),
        ss: x.s(this.$s, 2, "0"),
        SSS: x.s(this.$ms, 3, "0"),
        Z: r
      };
      return n.replace(h, function (t, e) {
        return e || p[t] || r.replace(":", "");
      });
    };
    f.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    };
    f.diff = function (t, u, c) {
      var h;
      var d = x.p(u);
      var f = b(t);
      var p = 6e4 * (f.utcOffset() - this.utcOffset());
      var m = this - f;
      var v = x.m(this, f);
      v = (h = {}, h[l] = v / 12, h[o] = v, h[s] = v / 3, h[a] = (m - p) / 6048e5, h[i] = (m - p) / 864e5, h[r] = m / 36e5, h[n] = m / 6e4, h[e] = m / 1e3, h)[d] || m;
      return c ? v : x.a(v);
    };
    f.daysInMonth = function () {
      return this.endOf(o).$D;
    };
    f.$locale = function () {
      return v[this.$L];
    };
    f.locale = function (t, e) {
      if (!t) return this.$L;
      var n = this.clone();
      var r = y(t, e, !0);
      if (r) {
        n.$L = r;
      }
      return n;
    };
    f.clone = function () {
      return x.w(this.$d, this);
    };
    f.toDate = function () {
      return new Date(this.valueOf());
    };
    f.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    };
    f.toISOString = function () {
      return this.$d.toISOString();
    };
    f.toString = function () {
      return this.$d.toUTCString();
    };
    return d;
  }();
  var w = _.prototype;
  b.prototype = w;
  [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", o], ["$y", l], ["$D", u]].forEach(function (t) {
    w[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  });
  b.extend = function (t, e) {
    t(e, _, b);
    return b;
  };
  b.locale = y;
  b.isDayjs = g;
  b.unix = function (t) {
    return b(1e3 * t);
  };
  b.en = v[m];
  b.Ls = v;
  b.p = {};
  return b;
}();