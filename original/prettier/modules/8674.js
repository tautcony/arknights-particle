var r;
var i;
var a;
var o;
var s = require(2109);
var l = require(1913);
var u = require(7854);
var c = require(5005);
var h = require(3366);
var d = require(1320);
var f = require(2248);
var p = require(8003);
var m = require(6340);
var v = require(111);
var g = require(3099);
var y = require(5787);
var b = require(2788);
var x = require(408);
var _ = require(7072);
var w = require(6707);
var S = require(261).set;
var E = require(5948);
var T = require(9478);
var M = require(842);
var A = require(8523);
var L = require(2534);
var C = require(9909);
var P = require(4705);
var R = require(5112);
var O = require(5268);
var I = require(7392);
var D = R("species");
var k = "Promise";
var N = C.get;
var B = C.set;
var F = C.getterFor(k);
var U = h;
var z = u.TypeError;
var G = u.document;
var H = u.process;
var j = c("fetch");
var V = A.f;
var W = V;
var q = !!(G && G.createEvent && u.dispatchEvent);
var Y = "function" == typeof PromiseRejectionEvent;
var X = "unhandledrejection";
var Z = P(k, function () {
  if (b(U) === String(U)) {
    if (66 === I) return !0;
    if (!O && !Y) return !0;
  }
  if (l && !U.prototype.finally) return !0;
  if (I >= 51 && /native code/.test(U)) return !1;
  var t = U.resolve(1);
  var e = function (t) {
    t(function () {}, function () {});
  };
  (t.constructor = {})[D] = e;
  return !(t.then(function () {}) instanceof e);
});
var K = Z || !_(function (t) {
  U.all(t).catch(function () {});
});
var J = function (t) {
  var e;
  return !(!v(t) || "function" != typeof (e = t.then)) && e;
};
var $ = function (t, e) {
  if (!t.notified) {
    t.notified = !0;
    var n = t.reactions;
    E(function () {
      for (r = t.value, i = 1 == t.state, a = 0, void 0; n.length > a;) {
        var r;
        var i;
        var a;
        var o;
        var s;
        var l;
        var u = n[a++];
        var c = i ? u.ok : u.fail;
        var h = u.resolve;
        var d = u.reject;
        var f = u.domain;
        try {
          if (c) {
            if (i) {
              if (2 === t.rejection) {
                nt(t);
              }
              t.rejection = 1;
            }
            if (!0 === c) {
              o = r;
            } else {
              if (f) {
                f.enter();
              }
              o = c(r);
              if (f) {
                f.exit();
                l = !0;
              }
            }
            if (o === u.promise) {
              d(z("Promise-chain cycle"));
            } else {
              if (s = J(o)) {
                s.call(o, h, d);
              } else {
                h(o);
              }
            }
          } else {
            d(r);
          }
        } catch (t) {
          if (f && !l) {
            f.exit();
          }
          d(t);
        }
      }
      t.reactions = [];
      t.notified = !1;
      if (e && !t.rejection) {
        tt(t);
      }
    });
  }
};
var Q = function (t, e, n) {
  var r;
  var i;
  if (q) {
    (r = G.createEvent("Event")).promise = e;
    r.reason = n;
    r.initEvent(t, !1, !0);
    u.dispatchEvent(r);
  } else {
    r = {
      promise: e,
      reason: n
    };
  }
  if (!Y && (i = u["on" + t])) {
    i(r);
  } else {
    if (t === X) {
      M("Unhandled promise rejection", n);
    }
  }
};
var tt = function (t) {
  S.call(u, function () {
    var e;
    var n = t.facade;
    var r = t.value;
    if (et(t) && (e = L(function () {
      if (O) {
        H.emit("unhandledRejection", r, n);
      } else {
        Q(X, n, r);
      }
    }), t.rejection = O || et(t) ? 2 : 1, e.error)) throw e.value;
  });
};
var et = function (t) {
  return 1 !== t.rejection && !t.parent;
};
var nt = function (t) {
  S.call(u, function () {
    var e = t.facade;
    if (O) {
      H.emit("rejectionHandled", e);
    } else {
      Q("rejectionhandled", e, t.value);
    }
  });
};
var rt = function (t, e, n) {
  return function (r) {
    t(e, r, n);
  };
};
var it = function (t, e, n) {
  if (t.done) {
    t.done = !0;
    if (n) {
      t = n;
    }
    t.value = e;
    t.state = 2;
    $(t, !0);
  }
};
var at = function (t, e, n) {
  if (!t.done) {
    t.done = !0;
    if (n) {
      t = n;
    }
    try {
      if (t.facade === e) throw z("Promise can't be resolved itself");
      var r = J(e);
      if (r) {
        E(function () {
          var n = {
            done: !1
          };
          try {
            r.call(e, rt(at, n, t), rt(it, n, t));
          } catch (e) {
            it(n, e, t);
          }
        });
      } else {
        t.value = e;
        t.state = 1;
        $(t, !1);
      }
    } catch (e) {
      it({
        done: !1
      }, e, t);
    }
  }
};
if (Z) {
  U = function (t) {
    y(this, U, k);
    g(t);
    r.call(this);
    var e = N(this);
    try {
      t(rt(at, e), rt(it, e));
    } catch (t) {
      it(e, t);
    }
  };
  (r = function (t) {
    B(this, {
      type: k,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0
    });
  }).prototype = f(U.prototype, {
    then: function (t, e) {
      var n = F(this);
      var r = V(w(this, U));
      r.ok = "function" != typeof t || t;
      r.fail = "function" == typeof e && e;
      r.domain = O ? H.domain : void 0;
      n.parent = !0;
      n.reactions.push(r);
      if (0 != n.state) {
        $(n, !1);
      }
      return r.promise;
    },
    catch: function (t) {
      return this.then(void 0, t);
    }
  });
  i = function () {
    var t = new r();
    var e = N(t);
    this.promise = t;
    this.resolve = rt(at, e);
    this.reject = rt(it, e);
  };
  A.f = V = function (t) {
    return t === U || t === a ? new i(t) : W(t);
  };
  if (l || "function" != typeof h) {
    o = h.prototype.then;
    d(h.prototype, "then", function (t, e) {
      var n = this;
      return new U(function (t, e) {
        o.call(n, t, e);
      }).then(t, e);
    }, {
      unsafe: !0
    });
    if ("function" == typeof j) {
      s({
        global: !0,
        enumerable: !0,
        forced: !0
      }, {
        fetch: function (t) {
          return T(U, j.apply(u, arguments));
        }
      });
    }
  }
}
s({
  global: !0,
  wrap: !0,
  forced: Z
}, {
  Promise: U
});
p(U, k, !1, !0);
m(k);
a = c(k);
s({
  target: k,
  stat: !0,
  forced: Z
}, {
  reject: function (t) {
    var e = V(this);
    e.reject.call(void 0, t);
    return e.promise;
  }
});
s({
  target: k,
  stat: !0,
  forced: l || Z
}, {
  resolve: function (t) {
    return T(l && this === a ? U : this, t);
  }
});
s({
  target: k,
  stat: !0,
  forced: K
}, {
  all: function (t) {
    var e = this;
    var n = V(e);
    var r = n.resolve;
    var i = n.reject;
    var a = L(function () {
      var n = g(e.resolve);
      var a = [];
      var o = 0;
      var s = 1;
      x(t, function (t) {
        var l = o++;
        var u = !1;
        a.push(void 0);
        s++;
        n.call(e, t).then(function (t) {
          if (u) {
            u = !0;
            a[l] = t;
            if (--s) {
              r(a);
            }
          }
        }, i);
      });
      if (--s) {
        r(a);
      }
    });
    if (a.error) {
      i(a.value);
    }
    return n.promise;
  },
  race: function (t) {
    var e = this;
    var n = V(e);
    var r = n.reject;
    var i = L(function () {
      var i = g(e.resolve);
      x(t, function (t) {
        i.call(e, t).then(n.resolve, r);
      });
    });
    if (i.error) {
      r(i.value);
    }
    return n.promise;
  }
});