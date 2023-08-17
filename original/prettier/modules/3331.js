var r = require(7854);
var i = require(9781);
var a = require(4019);
var o = require(8880);
var s = require(2248);
var l = require(7293);
var u = require(5787);
var c = require(9958);
var h = require(7466);
var d = require(7067);
var f = require(1179);
var p = require(9518);
var m = require(7674);
var v = require(8006).f;
var g = require(3070).f;
var y = require(1285);
var b = require(8003);
var x = require(9909);
var _ = x.get;
var w = x.set;
var S = "ArrayBuffer";
var E = "DataView";
var T = "Wrong index";
var M = r.ArrayBuffer;
var A = M;
var L = r.DataView;
var C = L && L.prototype;
var P = Object.prototype;
var R = r.RangeError;
var O = f.pack;
var I = f.unpack;
var D = function (t) {
  return [255 & t];
};
var k = function (t) {
  return [255 & t, t >> 8 & 255];
};
var N = function (t) {
  return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
};
var B = function (t) {
  return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
};
var F = function (t) {
  return O(t, 23, 4);
};
var U = function (t) {
  return O(t, 52, 8);
};
var z = function (t, e) {
  g(t.prototype, e, {
    get: function () {
      return _(this)[e];
    }
  });
};
var G = function (t, e, n, r) {
  var i = d(n);
  var a = _(t);
  if (i + e > a.byteLength) throw R(T);
  var o = _(a.buffer).bytes;
  var s = i + a.byteOffset;
  var l = o.slice(s, s + e);
  return r ? l : l.reverse();
};
var H = function (t, e, n, r, i, a) {
  var o = d(n);
  var s = _(t);
  if (o + e > s.byteLength) throw R(T);
  for (l = _(s.buffer).bytes, u = o + s.byteOffset, c = r(+i), h = 0, void 0; h < e; h++) {
    var l;
    var u;
    var c;
    var h;
    l[u + h] = c[a ? h : e - h - 1];
  }
};
if (a) {
  if (!l(function () {
    M(1);
  }) || !l(function () {
    new M(-1);
  }) || l(function () {
    new M();
    new M(1.5);
    new M(NaN);
    return M.name != S;
  })) {
    for (V = (A = function (t) {
      u(this, A);
      return new M(d(t));
    }).prototype = M.prototype, W = v(M), q = 0, void 0; W.length > q;) {
      var j;
      var V;
      var W;
      var q;
      if ((j = W[q++]) in A) {
        o(A, j, M[j]);
      }
    }
    V.constructor = A;
  }
  if (m && p(C) !== P) {
    m(C, P);
  }
  var Y = new L(new A(2));
  var X = C.setInt8;
  Y.setInt8(0, 2147483648);
  Y.setInt8(1, 2147483649);
  if (!Y.getInt8(0) && Y.getInt8(1)) {
    s(C, {
      setInt8: function (t, e) {
        X.call(this, t, e << 24 >> 24);
      },
      setUint8: function (t, e) {
        X.call(this, t, e << 24 >> 24);
      }
    }, {
      unsafe: !0
    });
  }
} else {
  A = function (t) {
    u(this, A, S);
    var e = d(t);
    w(this, {
      bytes: y.call(new Array(e), 0),
      byteLength: e
    });
    if (i) {
      this.byteLength = e;
    }
  };
  L = function (t, e, n) {
    u(this, L, E);
    u(t, A, E);
    var r = _(t).byteLength;
    var a = c(e);
    if (a < 0 || a > r) throw R("Wrong offset");
    if (a + (n = void 0 === n ? r - a : h(n)) > r) throw R("Wrong length");
    w(this, {
      buffer: t,
      byteLength: n,
      byteOffset: a
    });
    if (i) {
      this.buffer = t;
      this.byteLength = n;
      this.byteOffset = a;
    }
  };
  if (i) {
    z(A, "byteLength");
    z(L, "buffer");
    z(L, "byteLength");
    z(L, "byteOffset");
  }
  s(L.prototype, {
    getInt8: function (t) {
      return G(this, 1, t)[0] << 24 >> 24;
    },
    getUint8: function (t) {
      return G(this, 1, t)[0];
    },
    getInt16: function (t) {
      var e = G(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
      return (e[1] << 8 | e[0]) << 16 >> 16;
    },
    getUint16: function (t) {
      var e = G(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
      return e[1] << 8 | e[0];
    },
    getInt32: function (t) {
      return B(G(this, 4, t, arguments.length > 1 ? arguments[1] : void 0));
    },
    getUint32: function (t) {
      return B(G(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
    },
    getFloat32: function (t) {
      return I(G(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23);
    },
    getFloat64: function (t) {
      return I(G(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52);
    },
    setInt8: function (t, e) {
      H(this, 1, t, D, e);
    },
    setUint8: function (t, e) {
      H(this, 1, t, D, e);
    },
    setInt16: function (t, e) {
      H(this, 2, t, k, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint16: function (t, e) {
      H(this, 2, t, k, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setInt32: function (t, e) {
      H(this, 4, t, N, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint32: function (t, e) {
      H(this, 4, t, N, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat32: function (t, e) {
      H(this, 4, t, F, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat64: function (t, e) {
      H(this, 8, t, U, e, arguments.length > 2 ? arguments[2] : void 0);
    }
  });
}
b(A, S);
b(L, E);
exports.exports = {
  ArrayBuffer: A,
  DataView: L
};