var r = require(3070).f;
var i = require(30);
var a = require(2248);
var o = require(9974);
var s = require(5787);
var l = require(408);
var u = require(654);
var c = require(6340);
var h = require(9781);
var d = require(2423).fastKey;
var f = require(9909);
var p = f.set;
var m = f.getterFor;
exports.exports = {
  getConstructor: function (t, e, n, u) {
    var c = t(function (t, r) {
      s(t, c, e);
      p(t, {
        type: e,
        index: i(null),
        first: void 0,
        last: void 0,
        size: 0
      });
      if (h) {
        t.size = 0;
      }
      if (null != r) {
        l(r, t[u], {
          that: t,
          AS_ENTRIES: n
        });
      }
    });
    var f = m(e);
    var v = function (t, e, n) {
      var r;
      var i;
      var a = f(t);
      var o = g(t, e);
      if (o) {
        o.value = n;
      } else {
        a.last = o = {
          index: i = d(e, !0),
          key: e,
          value: n,
          previous: r = a.last,
          next: void 0,
          removed: !1
        };
        if (a.first) {
          a.first = o;
        }
        if (r) {
          r.next = o;
        }
        if (h) {
          a.size++;
        } else {
          t.size++;
        }
        if ("F" !== i) {
          a.index[i] = o;
        }
      }
      return t;
    };
    var g = function (t, e) {
      var n;
      var r = f(t);
      var i = d(e);
      if ("F" !== i) return r.index[i];
      for (n = r.first; n; n = n.next) if (n.key == e) return n;
    };
    a(c.prototype, {
      clear: function () {
        for (t = f(this), e = t.index, n = t.first, void 0; n;) {
          var t;
          var e;
          var n;
          n.removed = !0;
          if (n.previous) {
            n.previous = n.previous.next = void 0;
          }
          delete e[n.index];
          n = n.next;
        }
        t.first = t.last = void 0;
        if (h) {
          t.size = 0;
        } else {
          this.size = 0;
        }
      },
      delete: function (t) {
        var e = this;
        var n = f(e);
        var r = g(e, t);
        if (r) {
          var i = r.next;
          var a = r.previous;
          delete n.index[r.index];
          r.removed = !0;
          if (a) {
            a.next = i;
          }
          if (i) {
            i.previous = a;
          }
          if (n.first == r) {
            n.first = i;
          }
          if (n.last == r) {
            n.last = a;
          }
          if (h) {
            n.size--;
          } else {
            e.size--;
          }
        }
        return !!r;
      },
      forEach: function (t) {
        for (n = f(this), r = o(t, arguments.length > 1 ? arguments[1] : void 0, 3), void 0; e = e ? e.next : n.first;) {
          var e;
          var n;
          var r;
          for (r(e.value, e.key, this); e && e.removed;) e = e.previous;
        }
      },
      has: function (t) {
        return !!g(this, t);
      }
    });
    a(c.prototype, n ? {
      get: function (t) {
        var e = g(this, t);
        return e && e.value;
      },
      set: function (t, e) {
        return v(this, 0 === t ? 0 : t, e);
      }
    } : {
      add: function (t) {
        return v(this, t = 0 === t ? 0 : t, t);
      }
    });
    if (h) {
      r(c.prototype, "size", {
        get: function () {
          return f(this).size;
        }
      });
    }
    return c;
  },
  setStrong: function (t, e, n) {
    var r = e + " Iterator";
    var i = m(e);
    var a = m(r);
    u(t, e, function (t, e) {
      p(this, {
        type: r,
        target: t,
        state: i(t),
        kind: e,
        last: void 0
      });
    }, function () {
      for (t = a(this), e = t.kind, n = t.last, void 0; n && n.removed;) {
        var t;
        var e;
        var n;
        n = n.previous;
      }
      return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
        value: n.key,
        done: !1
      } : "values" == e ? {
        value: n.value,
        done: !1
      } : {
        value: [n.key, n.value],
        done: !1
      } : (t.target = void 0, {
        value: void 0,
        done: !0
      });
    }, n ? "entries" : "values", !n, !0);
    c(e);
  }
};