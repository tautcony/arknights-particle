var r = require(9974);
var i = require(8361);
var a = require(7908);
var o = require(7466);
var s = require(5417);
var l = [].push;
var u = function (t) {
  var e = 1 == t;
  var n = 2 == t;
  var u = 3 == t;
  var c = 4 == t;
  var h = 6 == t;
  var d = 7 == t;
  var f = 5 == t || h;
  return function (p, m, v, g) {
    for (x = a(p), _ = i(x), w = r(m, v, 3), S = o(_.length), E = 0, T = g || s, M = e ? T(p, S) : n || d ? T(p, 0) : void 0, void 0; S > E; E++) {
      var y;
      var b;
      var x;
      var _;
      var w;
      var S;
      var E;
      var T;
      var M;
      if ((f || E in _) && (b = w(y = _[E], E, x), t)) if (e) M[E] = b;else if (b) switch (t) {
        case 3:
          return !0;
        case 5:
          return y;
        case 6:
          return E;
        case 2:
          l.call(M, y);
      } else switch (t) {
        case 4:
          return !1;
        case 7:
          l.call(M, y);
      }
    }
    return h ? -1 : u || c ? c : M;
  };
};
exports.exports = {
  forEach: u(0),
  map: u(1),
  filter: u(2),
  some: u(3),
  every: u(4),
  find: u(5),
  findIndex: u(6),
  filterOut: u(7)
};