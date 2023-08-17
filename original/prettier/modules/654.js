var r = require(2109);
var i = require(4994);
var a = require(9518);
var o = require(7674);
var s = require(8003);
var l = require(8880);
var u = require(1320);
var c = require(5112);
var h = require(1913);
var d = require(7497);
var f = require(3383);
var p = f.IteratorPrototype;
var m = f.BUGGY_SAFARI_ITERATORS;
var v = c("iterator");
var g = "keys";
var y = "values";
var b = "entries";
var x = function () {
  return this;
};
exports.exports = function (t, e, n, c, f, _, w) {
  i(n, e, c);
  var S;
  var E;
  var T;
  var M = function (t) {
    if (t === f && R) return R;
    if (!m && t in C) return C[t];
    switch (t) {
      case g:
      case y:
      case b:
        return function () {
          return new n(this, t);
        };
    }
    return function () {
      return new n(this);
    };
  };
  var A = e + " Iterator";
  var L = !1;
  var C = t.prototype;
  var P = C[v] || C["@@iterator"] || f && C[f];
  var R = !m && P || M(f);
  var O = "Array" == e && C.entries || P;
  if (O) {
    S = a(O.call(new t()));
    if (p !== Object.prototype && S.next) {
      if (h || a(S) === p) {
        if (o) {
          o(S, p);
        } else {
          if ("function" != typeof S[v]) {
            l(S, v, x);
          }
        }
      }
      s(S, A, !0, !0);
      if (h) {
        d[A] = x;
      }
    }
  }
  if (f == y && P && P.name !== y) {
    L = !0;
    R = function () {
      return P.call(this);
    };
  }
  if (h && !w || C[v] === R) {
    l(C, v, R);
  }
  d[e] = R;
  if (f) if (E = {
    values: M(y),
    keys: _ ? R : M(g),
    entries: M(b)
  }, w) for (T in E) (m || L || !(T in C)) && u(C, T, E[T]);else r({
    target: e,
    proto: !0,
    forced: m || L
  }, E);
  return E;
};