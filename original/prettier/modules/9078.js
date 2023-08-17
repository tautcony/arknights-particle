var r = require(9909);
var i = require(4994);
var a = require(111);
var o = require(6048);
var s = require(9781);
var l = "Incorrect Number.range arguments";
var u = "RangeIterator";
var c = r.set;
var h = r.getterFor(u);
var exports = i(function (t, e, n, r, i, o) {
  if (typeof t != r || e !== 1 / 0 && e !== -1 / 0 && typeof e != r) throw new TypeError(l);
  if (t === 1 / 0 || t === -1 / 0) throw new RangeError(l);
  var h;
  var d = e > t;
  var f = !1;
  if (void 0 === n) h = void 0;else if (a(n)) {
    h = n.step;
    f = !!n.inclusive;
  } else {
    if (typeof n != r) throw new TypeError(l);
    h = n;
  }
  if (null == h) {
    h = d ? o : -o;
  }
  if (typeof h != r) throw new TypeError(l);
  if (h === 1 / 0 || h === -1 / 0 || h === i && t !== e) throw new RangeError(l);
  c(this, {
    type: u,
    start: t,
    end: e,
    step: h,
    inclusiveEnd: f,
    hitsEnd: t != t || e != e || h != h || e > t != h > i,
    currentCount: i,
    zero: i
  });
  if (s) {
    this.start = t;
    this.end = e;
    this.step = h;
    this.inclusive = f;
  }
}, u, function () {
  var t = h(this);
  if (t.hitsEnd) return {
    value: void 0,
    done: !0
  };
  var e = t.start;
  var n = t.end;
  var r = e + t.step * t.currentCount++;
  if (r === n) {
    t.hitsEnd = !0;
  }
  var i = t.inclusiveEnd;
  return (n > e ? i ? r > n : r >= n : i ? n > r : n >= r) ? {
    value: void 0,
    done: t.hitsEnd = !0
  } : {
    value: r,
    done: !1
  };
});
var f = function (t) {
  return {
    get: t,
    set: function () {},
    configurable: !0,
    enumerable: !1
  };
};
if (s) {
  o(exports.prototype, {
    start: f(function () {
      return h(this).start;
    }),
    end: f(function () {
      return h(this).end;
    }),
    inclusive: f(function () {
      return h(this).inclusiveEnd;
    }),
    step: f(function () {
      return h(this).step;
    })
  });
}
exports.exports = exports;