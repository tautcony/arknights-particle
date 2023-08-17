!function (t) {
  "use strict";

  if (void 0 === Number.EPSILON) {
    Number.EPSILON = Math.pow(2, -52);
  }
  if (void 0 === Number.isInteger) {
    Number.isInteger = function (t) {
      return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
    };
  }
  if (void 0 === Math.sign) {
    Math.sign = function (t) {
      return t < 0 ? -1 : t > 0 ? 1 : +t;
    };
  }
  if ("name" in Function.prototype == 0) {
    Object.defineProperty(Function.prototype, "name", {
      get: function () {
        return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
      }
    });
  }
  if (void 0 === Object.assign) {
    Object.assign = function (t) {
      if (null == t) throw new TypeError("Cannot convert undefined or null to object");
      for (e = Object(t), n = 1, void 0; n < arguments.length; n++) {
        var e;
        var n;
        var r = arguments[n];
        if (null != r) for (var i in r) if (Object.prototype.hasOwnProperty.call(r, i)) {
          e[i] = r[i];
        }
      }
      return e;
    };
  }
  var e = 100;
  var n = 300;
  var r = 301;
  var i = 302;
  var a = 303;
  var o = 304;
  var s = 306;
  var l = 307;
  var u = 1e3;
  var c = 1001;
  var h = 1002;
  var d = 1003;
  var f = 1004;
  var p = 1005;
  var m = 1006;
  var v = 1007;
  var g = 1008;
  var y = 1009;
  var b = 1012;
  var x = 1014;
  var _ = 1015;
  var w = 1016;
  var S = 1020;
  var E = 1022;
  var T = 1023;
  var M = 1026;
  var A = 1027;
  var L = 33776;
  var C = 33777;
  var P = 33778;
  var R = 33779;
  var O = 35840;
  var I = 35841;
  var D = 35842;
  var k = 35843;
  var N = 37492;
  var B = 37496;
  var F = 2300;
  var U = 2301;
  var z = 2302;
  var G = 2400;
  var H = 2401;
  var j = 2402;
  var V = 2500;
  var W = 2501;
  var q = 3e3;
  var Y = 3001;
  var X = 3007;
  var Z = 3002;
  var K = 3004;
  var J = 3005;
  var $ = 3006;
  var Q = 7680;
  var tt = 35044;
  var et = 35048;
  var nt = "300 es";
  function rt() {}
  Object.assign(rt.prototype, {
    addEventListener: function (t, e) {
      if (void 0 === this._listeners) {
        this._listeners = {};
      }
      var n = this._listeners;
      if (void 0 === n[t]) {
        n[t] = [];
      }
      if (-1 === n[t].indexOf(e)) {
        n[t].push(e);
      }
    },
    hasEventListener: function (t, e) {
      if (void 0 === this._listeners) return !1;
      var n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    },
    removeEventListener: function (t, e) {
      if (void 0 !== this._listeners) {
        var n = this._listeners[t];
        if (void 0 !== n) {
          var r = n.indexOf(e);
          if (-1 !== r) {
            n.splice(r, 1);
          }
        }
      }
    },
    dispatchEvent: function (t) {
      if (void 0 !== this._listeners) {
        var e = this._listeners[t.type];
        if (void 0 !== e) {
          t.target = this;
          for (n = e.slice(0), r = 0, i = n.length, void 0; r < i; r++) {
            var n;
            var r;
            var i;
            n[r].call(this, t);
          }
        }
      }
    }
  });
  for (it = [], at = 0, void 0; at < 256; at++) {
    var it;
    var at;
    it[at] = (at < 16 ? "0" : "") + at.toString(16);
  }
  var ot = 1234567;
  var st = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function () {
      var t = 4294967295 * Math.random() | 0;
      var e = 4294967295 * Math.random() | 0;
      var n = 4294967295 * Math.random() | 0;
      var r = 4294967295 * Math.random() | 0;
      return (it[255 & t] + it[t >> 8 & 255] + it[t >> 16 & 255] + it[t >> 24 & 255] + "-" + it[255 & e] + it[e >> 8 & 255] + "-" + it[e >> 16 & 15 | 64] + it[e >> 24 & 255] + "-" + it[63 & n | 128] + it[n >> 8 & 255] + "-" + it[n >> 16 & 255] + it[n >> 24 & 255] + it[255 & r] + it[r >> 8 & 255] + it[r >> 16 & 255] + it[r >> 24 & 255]).toUpperCase();
    },
    clamp: function (t, e, n) {
      return Math.max(e, Math.min(n, t));
    },
    euclideanModulo: function (t, e) {
      return (t % e + e) % e;
    },
    mapLinear: function (t, e, n, r, i) {
      return r + (t - e) * (i - r) / (n - e);
    },
    lerp: function (t, e, n) {
      return (1 - n) * t + n * e;
    },
    smoothstep: function (t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
    },
    smootherstep: function (t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
    },
    randInt: function (t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    },
    randFloat: function (t, e) {
      return t + Math.random() * (e - t);
    },
    randFloatSpread: function (t) {
      return t * (0.5 - Math.random());
    },
    seededRandom: function (t) {
      if (void 0 !== t) {
        ot = t % 2147483647;
      }
      return ((ot = 16807 * ot % 2147483647) - 1) / 2147483646;
    },
    degToRad: function (t) {
      return t * st.DEG2RAD;
    },
    radToDeg: function (t) {
      return t * st.RAD2DEG;
    },
    isPowerOfTwo: function (t) {
      return 0 == (t & t - 1) && 0 !== t;
    },
    ceilPowerOfTwo: function (t) {
      return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    },
    floorPowerOfTwo: function (t) {
      return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
    },
    setQuaternionFromProperEuler: function (t, e, n, r, i) {
      var a = Math.cos;
      var o = Math.sin;
      var s = a(n / 2);
      var l = o(n / 2);
      var u = a((e + r) / 2);
      var c = o((e + r) / 2);
      var h = a((e - r) / 2);
      var d = o((e - r) / 2);
      var f = a((r - e) / 2);
      var p = o((r - e) / 2);
      switch (i) {
        case "XYX":
          t.set(s * c, l * h, l * d, s * u);
          break;
        case "YZY":
          t.set(l * d, s * c, l * h, s * u);
          break;
        case "ZXZ":
          t.set(l * h, l * d, s * c, s * u);
          break;
        case "XZX":
          t.set(s * c, l * p, l * f, s * u);
          break;
        case "YXY":
          t.set(l * f, s * c, l * p, s * u);
          break;
        case "ZYZ":
          t.set(l * p, l * f, s * c, s * u);
          break;
        default:
          console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
      }
    }
  };
  function lt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1;
      r.configurable = !0;
      if ("value" in r) {
        r.writable = !0;
      }
      Object.defineProperty(t, r.key, r);
    }
  }
  function ut(t, e, n) {
    if (e) {
      lt(t.prototype, e);
    }
    if (n) {
      lt(t, n);
    }
    return t;
  }
  function ct(t, e) {
    t.prototype = Object.create(e.prototype);
    t.prototype.constructor = t;
    t.__proto__ = e;
  }
  function ht(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  var dt;
  var ft = function () {
    function t(t, e) {
      if (void 0 === t) {
        t = 0;
      }
      if (void 0 === e) {
        e = 0;
      }
      Object.defineProperty(this, "isVector2", {
        value: !0
      });
      this.x = t;
      this.y = e;
    }
    var e = t.prototype;
    e.set = function (t, e) {
      this.x = t;
      this.y = e;
      return this;
    };
    e.setScalar = function (t) {
      this.x = t;
      this.y = t;
      return this;
    };
    e.setX = function (t) {
      this.x = t;
      return this;
    };
    e.setY = function (t) {
      this.y = t;
      return this;
    };
    e.setComponent = function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    };
    e.getComponent = function (t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t);
      }
    };
    e.clone = function () {
      return new this.constructor(this.x, this.y);
    };
    e.copy = function (t) {
      this.x = t.x;
      this.y = t.y;
      return this;
    };
    e.add = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this);
    };
    e.addScalar = function (t) {
      this.x += t;
      this.y += t;
      return this;
    };
    e.addVectors = function (t, e) {
      this.x = t.x + e.x;
      this.y = t.y + e.y;
      return this;
    };
    e.addScaledVector = function (t, e) {
      this.x += t.x * e;
      this.y += t.y * e;
      return this;
    };
    e.sub = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this);
    };
    e.subScalar = function (t) {
      this.x -= t;
      this.y -= t;
      return this;
    };
    e.subVectors = function (t, e) {
      this.x = t.x - e.x;
      this.y = t.y - e.y;
      return this;
    };
    e.multiply = function (t) {
      this.x *= t.x;
      this.y *= t.y;
      return this;
    };
    e.multiplyScalar = function (t) {
      this.x *= t;
      this.y *= t;
      return this;
    };
    e.divide = function (t) {
      this.x /= t.x;
      this.y /= t.y;
      return this;
    };
    e.divideScalar = function (t) {
      return this.multiplyScalar(1 / t);
    };
    e.applyMatrix3 = function (t) {
      var e = this.x;
      var n = this.y;
      var r = t.elements;
      this.x = r[0] * e + r[3] * n + r[6];
      this.y = r[1] * e + r[4] * n + r[7];
      return this;
    };
    e.min = function (t) {
      this.x = Math.min(this.x, t.x);
      this.y = Math.min(this.y, t.y);
      return this;
    };
    e.max = function (t) {
      this.x = Math.max(this.x, t.x);
      this.y = Math.max(this.y, t.y);
      return this;
    };
    e.clamp = function (t, e) {
      this.x = Math.max(t.x, Math.min(e.x, this.x));
      this.y = Math.max(t.y, Math.min(e.y, this.y));
      return this;
    };
    e.clampScalar = function (t, e) {
      this.x = Math.max(t, Math.min(e, this.x));
      this.y = Math.max(t, Math.min(e, this.y));
      return this;
    };
    e.clampLength = function (t, e) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    };
    e.floor = function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    };
    e.ceil = function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    };
    e.round = function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    };
    e.roundToZero = function () {
      this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
      return this;
    };
    e.negate = function () {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    };
    e.dot = function (t) {
      return this.x * t.x + this.y * t.y;
    };
    e.cross = function (t) {
      return this.x * t.y - this.y * t.x;
    };
    e.lengthSq = function () {
      return this.x * this.x + this.y * this.y;
    };
    e.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    e.manhattanLength = function () {
      return Math.abs(this.x) + Math.abs(this.y);
    };
    e.normalize = function () {
      return this.divideScalar(this.length() || 1);
    };
    e.angle = function () {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    };
    e.distanceTo = function (t) {
      return Math.sqrt(this.distanceToSquared(t));
    };
    e.distanceToSquared = function (t) {
      var e = this.x - t.x;
      var n = this.y - t.y;
      return e * e + n * n;
    };
    e.manhattanDistanceTo = function (t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    };
    e.setLength = function (t) {
      return this.normalize().multiplyScalar(t);
    };
    e.lerp = function (t, e) {
      this.x += (t.x - this.x) * e;
      this.y += (t.y - this.y) * e;
      return this;
    };
    e.lerpVectors = function (t, e, n) {
      this.x = t.x + (e.x - t.x) * n;
      this.y = t.y + (e.y - t.y) * n;
      return this;
    };
    e.equals = function (t) {
      return t.x === this.x && t.y === this.y;
    };
    e.fromArray = function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      this.x = t[e];
      this.y = t[e + 1];
      return this;
    };
    e.toArray = function (t, e) {
      if (void 0 === t) {
        t = [];
      }
      if (void 0 === e) {
        e = 0;
      }
      t[e] = this.x;
      t[e + 1] = this.y;
      return t;
    };
    e.fromBufferAttribute = function (t, e, n) {
      if (void 0 !== n) {
        console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
      }
      this.x = t.getX(e);
      this.y = t.getY(e);
      return this;
    };
    e.rotateAround = function (t, e) {
      var n = Math.cos(e);
      var r = Math.sin(e);
      var i = this.x - t.x;
      var a = this.y - t.y;
      this.x = i * n - a * r + t.x;
      this.y = i * r + a * n + t.y;
      return this;
    };
    e.random = function () {
      this.x = Math.random();
      this.y = Math.random();
      return this;
    };
    ut(t, [{
      key: "width",
      get: function () {
        return this.x;
      },
      set: function (t) {
        this.x = t;
      }
    }, {
      key: "height",
      get: function () {
        return this.y;
      },
      set: function (t) {
        this.y = t;
      }
    }]);
    return t;
  }();
  var pt = function () {
    function t() {
      Object.defineProperty(this, "isMatrix3", {
        value: !0
      });
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (arguments.length > 0) {
        console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
      }
    }
    var e = t.prototype;
    e.set = function (t, e, n, r, i, a, o, s, l) {
      var u = this.elements;
      u[0] = t;
      u[1] = r;
      u[2] = o;
      u[3] = e;
      u[4] = i;
      u[5] = s;
      u[6] = n;
      u[7] = a;
      u[8] = l;
      return this;
    };
    e.identity = function () {
      this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
      return this;
    };
    e.clone = function () {
      return new this.constructor().fromArray(this.elements);
    };
    e.copy = function (t) {
      var e = this.elements;
      var n = t.elements;
      e[0] = n[0];
      e[1] = n[1];
      e[2] = n[2];
      e[3] = n[3];
      e[4] = n[4];
      e[5] = n[5];
      e[6] = n[6];
      e[7] = n[7];
      e[8] = n[8];
      return this;
    };
    e.extractBasis = function (t, e, n) {
      t.setFromMatrix3Column(this, 0);
      e.setFromMatrix3Column(this, 1);
      n.setFromMatrix3Column(this, 2);
      return this;
    };
    e.setFromMatrix4 = function (t) {
      var e = t.elements;
      this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]);
      return this;
    };
    e.multiply = function (t) {
      return this.multiplyMatrices(this, t);
    };
    e.premultiply = function (t) {
      return this.multiplyMatrices(t, this);
    };
    e.multiplyMatrices = function (t, e) {
      var n = t.elements;
      var r = e.elements;
      var i = this.elements;
      var a = n[0];
      var o = n[3];
      var s = n[6];
      var l = n[1];
      var u = n[4];
      var c = n[7];
      var h = n[2];
      var d = n[5];
      var f = n[8];
      var p = r[0];
      var m = r[3];
      var v = r[6];
      var g = r[1];
      var y = r[4];
      var b = r[7];
      var x = r[2];
      var _ = r[5];
      var w = r[8];
      i[0] = a * p + o * g + s * x;
      i[3] = a * m + o * y + s * _;
      i[6] = a * v + o * b + s * w;
      i[1] = l * p + u * g + c * x;
      i[4] = l * m + u * y + c * _;
      i[7] = l * v + u * b + c * w;
      i[2] = h * p + d * g + f * x;
      i[5] = h * m + d * y + f * _;
      i[8] = h * v + d * b + f * w;
      return this;
    };
    e.multiplyScalar = function (t) {
      var e = this.elements;
      e[0] *= t;
      e[3] *= t;
      e[6] *= t;
      e[1] *= t;
      e[4] *= t;
      e[7] *= t;
      e[2] *= t;
      e[5] *= t;
      e[8] *= t;
      return this;
    };
    e.determinant = function () {
      var t = this.elements;
      var e = t[0];
      var n = t[1];
      var r = t[2];
      var i = t[3];
      var a = t[4];
      var o = t[5];
      var s = t[6];
      var l = t[7];
      var u = t[8];
      return e * a * u - e * o * l - n * i * u + n * o * s + r * i * l - r * a * s;
    };
    e.getInverse = function (t, e) {
      if (void 0 !== e) {
        console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
      }
      var n = t.elements;
      var r = this.elements;
      var i = n[0];
      var a = n[1];
      var o = n[2];
      var s = n[3];
      var l = n[4];
      var u = n[5];
      var c = n[6];
      var h = n[7];
      var d = n[8];
      var f = d * l - u * h;
      var p = u * c - d * s;
      var m = h * s - l * c;
      var v = i * f + a * p + o * m;
      if (0 === v) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var g = 1 / v;
      r[0] = f * g;
      r[1] = (o * h - d * a) * g;
      r[2] = (u * a - o * l) * g;
      r[3] = p * g;
      r[4] = (d * i - o * c) * g;
      r[5] = (o * s - u * i) * g;
      r[6] = m * g;
      r[7] = (a * c - h * i) * g;
      r[8] = (l * i - a * s) * g;
      return this;
    };
    e.transpose = function () {
      var t;
      var e = this.elements;
      t = e[1];
      e[1] = e[3];
      e[3] = t;
      t = e[2];
      e[2] = e[6];
      e[6] = t;
      t = e[5];
      e[5] = e[7];
      e[7] = t;
      return this;
    };
    e.getNormalMatrix = function (t) {
      return this.setFromMatrix4(t).getInverse(this).transpose();
    };
    e.transposeIntoArray = function (t) {
      var e = this.elements;
      t[0] = e[0];
      t[1] = e[3];
      t[2] = e[6];
      t[3] = e[1];
      t[4] = e[4];
      t[5] = e[7];
      t[6] = e[2];
      t[7] = e[5];
      t[8] = e[8];
      return this;
    };
    e.setUvTransform = function (t, e, n, r, i, a, o) {
      var s = Math.cos(i);
      var l = Math.sin(i);
      this.set(n * s, n * l, -n * (s * a + l * o) + a + t, -r * l, r * s, -r * (-l * a + s * o) + o + e, 0, 0, 1);
    };
    e.scale = function (t, e) {
      var n = this.elements;
      n[0] *= t;
      n[3] *= t;
      n[6] *= t;
      n[1] *= e;
      n[4] *= e;
      n[7] *= e;
      return this;
    };
    e.rotate = function (t) {
      var e = Math.cos(t);
      var n = Math.sin(t);
      var r = this.elements;
      var i = r[0];
      var a = r[3];
      var o = r[6];
      var s = r[1];
      var l = r[4];
      var u = r[7];
      r[0] = e * i + n * s;
      r[3] = e * a + n * l;
      r[6] = e * o + n * u;
      r[1] = -n * i + e * s;
      r[4] = -n * a + e * l;
      r[7] = -n * o + e * u;
      return this;
    };
    e.translate = function (t, e) {
      var n = this.elements;
      n[0] += t * n[2];
      n[3] += t * n[5];
      n[6] += t * n[8];
      n[1] += e * n[2];
      n[4] += e * n[5];
      n[7] += e * n[8];
      return this;
    };
    e.equals = function (t) {
      for (e = this.elements, n = t.elements, r = 0, void 0; r < 9; r++) {
        var e;
        var n;
        var r;
        if (e[r] !== n[r]) return !1;
      }
      return !0;
    };
    e.fromArray = function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      for (var n = 0; n < 9; n++) this.elements[n] = t[n + e];
      return this;
    };
    e.toArray = function (t, e) {
      if (void 0 === t) {
        t = [];
      }
      if (void 0 === e) {
        e = 0;
      }
      var n = this.elements;
      t[e] = n[0];
      t[e + 1] = n[1];
      t[e + 2] = n[2];
      t[e + 3] = n[3];
      t[e + 4] = n[4];
      t[e + 5] = n[5];
      t[e + 6] = n[6];
      t[e + 7] = n[7];
      t[e + 8] = n[8];
      return t;
    };
    return t;
  }();
  var mt = {
    getDataURL: function (t) {
      if (/^data:/i.test(t.src)) return t.src;
      if ("undefined" == typeof HTMLCanvasElement) return t.src;
      var e;
      if (t instanceof HTMLCanvasElement) e = t;else {
        if (void 0 === dt) {
          dt = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        }
        dt.width = t.width;
        dt.height = t.height;
        var n = dt.getContext("2d");
        if (t instanceof ImageData) {
          n.putImageData(t, 0, 0);
        } else {
          n.drawImage(t, 0, 0, t.width, t.height);
        }
        e = dt;
      }
      return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", 0.6) : e.toDataURL("image/png");
    }
  };
  var vt = 0;
  function gt(t, e, n, r, i, a, o, s, l, u) {
    Object.defineProperty(this, "id", {
      value: vt++
    });
    this.uuid = st.generateUUID();
    this.name = "";
    this.image = void 0 !== t ? t : gt.DEFAULT_IMAGE;
    this.mipmaps = [];
    this.mapping = void 0 !== e ? e : gt.DEFAULT_MAPPING;
    this.wrapS = void 0 !== n ? n : c;
    this.wrapT = void 0 !== r ? r : c;
    this.magFilter = void 0 !== i ? i : m;
    this.minFilter = void 0 !== a ? a : g;
    this.anisotropy = void 0 !== l ? l : 1;
    this.format = void 0 !== o ? o : T;
    this.internalFormat = null;
    this.type = void 0 !== s ? s : y;
    this.offset = new ft(0, 0);
    this.repeat = new ft(1, 1);
    this.center = new ft(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = !0;
    this.matrix = new pt();
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.encoding = void 0 !== u ? u : q;
    this.version = 0;
    this.onUpdate = null;
  }
  gt.DEFAULT_IMAGE = void 0;
  gt.DEFAULT_MAPPING = n;
  gt.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: gt,
    isTexture: !0,
    updateMatrix: function () {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (t) {
      this.name = t.name;
      this.image = t.image;
      this.mipmaps = t.mipmaps.slice(0);
      this.mapping = t.mapping;
      this.wrapS = t.wrapS;
      this.wrapT = t.wrapT;
      this.magFilter = t.magFilter;
      this.minFilter = t.minFilter;
      this.anisotropy = t.anisotropy;
      this.format = t.format;
      this.internalFormat = t.internalFormat;
      this.type = t.type;
      this.offset.copy(t.offset);
      this.repeat.copy(t.repeat);
      this.center.copy(t.center);
      this.rotation = t.rotation;
      this.matrixAutoUpdate = t.matrixAutoUpdate;
      this.matrix.copy(t.matrix);
      this.generateMipmaps = t.generateMipmaps;
      this.premultiplyAlpha = t.premultiplyAlpha;
      this.flipY = t.flipY;
      this.unpackAlignment = t.unpackAlignment;
      this.encoding = t.encoding;
      return this;
    },
    toJSON: function (t) {
      var e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      var n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      if (void 0 !== this.image) {
        var r = this.image;
        if (void 0 === r.uuid) {
          r.uuid = st.generateUUID();
        }
        if (!e && void 0 === t.images[r.uuid]) {
          var i;
          if (Array.isArray(r)) {
            i = [];
            for (var a = 0, o = r.length; a < o; a++) i.push(mt.getDataURL(r[a]));
          } else i = mt.getDataURL(r);
          t.images[r.uuid] = {
            uuid: r.uuid,
            url: i
          };
        }
        n.image = r.uuid;
      }
      if (e) {
        t.textures[this.uuid] = n;
      }
      return n;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    },
    transformUv: function (t) {
      if (this.mapping !== n) return t;
      t.applyMatrix3(this.matrix);
      if (t.x < 0 || t.x > 1) switch (this.wrapS) {
        case u:
          t.x = t.x - Math.floor(t.x);
          break;
        case c:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case h:
          1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
      }
      if (t.y < 0 || t.y > 1) switch (this.wrapT) {
        case u:
          t.y = t.y - Math.floor(t.y);
          break;
        case c:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case h:
          if (1 === Math.abs(Math.floor(t.y) % 2)) {
            t.y = Math.ceil(t.y) - t.y;
          } else {
            t.y = t.y - Math.floor(t.y);
          }
      }
      if (this.flipY) {
        t.y = 1 - t.y;
      }
      return t;
    }
  });
  Object.defineProperty(gt.prototype, "needsUpdate", {
    set: function (t) {
      if (!0 === t) {
        this.version++;
      }
    }
  });
  var yt = function () {
    function t(t, e, n, r) {
      if (void 0 === t) {
        t = 0;
      }
      if (void 0 === e) {
        e = 0;
      }
      if (void 0 === n) {
        n = 0;
      }
      if (void 0 === r) {
        r = 1;
      }
      Object.defineProperty(this, "isVector4", {
        value: !0
      });
      this.x = t;
      this.y = e;
      this.z = n;
      this.w = r;
    }
    var e = t.prototype;
    e.set = function (t, e, n, r) {
      this.x = t;
      this.y = e;
      this.z = n;
      this.w = r;
      return this;
    };
    e.setScalar = function (t) {
      this.x = t;
      this.y = t;
      this.z = t;
      this.w = t;
      return this;
    };
    e.setX = function (t) {
      this.x = t;
      return this;
    };
    e.setY = function (t) {
      this.y = t;
      return this;
    };
    e.setZ = function (t) {
      this.z = t;
      return this;
    };
    e.setW = function (t) {
      this.w = t;
      return this;
    };
    e.setComponent = function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    };
    e.getComponent = function (t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t);
      }
    };
    e.clone = function () {
      return new this.constructor(this.x, this.y, this.z, this.w);
    };
    e.copy = function (t) {
      this.x = t.x;
      this.y = t.y;
      this.z = t.z;
      this.w = void 0 !== t.w ? t.w : 1;
      return this;
    };
    e.add = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
    };
    e.addScalar = function (t) {
      this.x += t;
      this.y += t;
      this.z += t;
      this.w += t;
      return this;
    };
    e.addVectors = function (t, e) {
      this.x = t.x + e.x;
      this.y = t.y + e.y;
      this.z = t.z + e.z;
      this.w = t.w + e.w;
      return this;
    };
    e.addScaledVector = function (t, e) {
      this.x += t.x * e;
      this.y += t.y * e;
      this.z += t.z * e;
      this.w += t.w * e;
      return this;
    };
    e.sub = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
    };
    e.subScalar = function (t) {
      this.x -= t;
      this.y -= t;
      this.z -= t;
      this.w -= t;
      return this;
    };
    e.subVectors = function (t, e) {
      this.x = t.x - e.x;
      this.y = t.y - e.y;
      this.z = t.z - e.z;
      this.w = t.w - e.w;
      return this;
    };
    e.multiplyScalar = function (t) {
      this.x *= t;
      this.y *= t;
      this.z *= t;
      this.w *= t;
      return this;
    };
    e.applyMatrix4 = function (t) {
      var e = this.x;
      var n = this.y;
      var r = this.z;
      var i = this.w;
      var a = t.elements;
      this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * i;
      this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * i;
      this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * i;
      this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * i;
      return this;
    };
    e.divideScalar = function (t) {
      return this.multiplyScalar(1 / t);
    };
    e.setAxisAngleFromQuaternion = function (t) {
      this.w = 2 * Math.acos(t.w);
      var e = Math.sqrt(1 - t.w * t.w);
      if (e < 1e-4) {
        this.x = 1;
        this.y = 0;
        this.z = 0;
      } else {
        this.x = t.x / e;
        this.y = t.y / e;
        this.z = t.z / e;
      }
      return this;
    };
    e.setAxisAngleFromRotationMatrix = function (t) {
      var e;
      var n;
      var r;
      var i;
      var a = 0.01;
      var o = 0.1;
      var s = t.elements;
      var l = s[0];
      var u = s[4];
      var c = s[8];
      var h = s[1];
      var d = s[5];
      var f = s[9];
      var p = s[2];
      var m = s[6];
      var v = s[10];
      if (Math.abs(u - h) < a && Math.abs(c - p) < a && Math.abs(f - m) < a) {
        if (Math.abs(u + h) < o && Math.abs(c + p) < o && Math.abs(f + m) < o && Math.abs(l + d + v - 3) < o) {
          this.set(1, 0, 0, 0);
          return this;
        }
        e = Math.PI;
        var g = (l + 1) / 2;
        var y = (d + 1) / 2;
        var b = (v + 1) / 2;
        var x = (u + h) / 4;
        var _ = (c + p) / 4;
        var w = (f + m) / 4;
        if (g > y && g > b) {
          if (g < a) {
            n = 0;
            r = 0.707106781;
            i = 0.707106781;
          } else {
            r = x / (n = Math.sqrt(g));
            i = _ / n;
          }
        } else {
          if (y > b) {
            if (y < a) {
              n = 0.707106781;
              r = 0;
              i = 0.707106781;
            } else {
              n = x / (r = Math.sqrt(y));
              i = w / r;
            }
          } else {
            if (b < a) {
              n = 0.707106781;
              r = 0.707106781;
              i = 0;
            } else {
              n = _ / (i = Math.sqrt(b));
              r = w / i;
            }
          }
        }
        this.set(n, r, i, e);
        return this;
      }
      var S = Math.sqrt((m - f) * (m - f) + (c - p) * (c - p) + (h - u) * (h - u));
      if (Math.abs(S) < 0.001) {
        S = 1;
      }
      this.x = (m - f) / S;
      this.y = (c - p) / S;
      this.z = (h - u) / S;
      this.w = Math.acos((l + d + v - 1) / 2);
      return this;
    };
    e.min = function (t) {
      this.x = Math.min(this.x, t.x);
      this.y = Math.min(this.y, t.y);
      this.z = Math.min(this.z, t.z);
      this.w = Math.min(this.w, t.w);
      return this;
    };
    e.max = function (t) {
      this.x = Math.max(this.x, t.x);
      this.y = Math.max(this.y, t.y);
      this.z = Math.max(this.z, t.z);
      this.w = Math.max(this.w, t.w);
      return this;
    };
    e.clamp = function (t, e) {
      this.x = Math.max(t.x, Math.min(e.x, this.x));
      this.y = Math.max(t.y, Math.min(e.y, this.y));
      this.z = Math.max(t.z, Math.min(e.z, this.z));
      this.w = Math.max(t.w, Math.min(e.w, this.w));
      return this;
    };
    e.clampScalar = function (t, e) {
      this.x = Math.max(t, Math.min(e, this.x));
      this.y = Math.max(t, Math.min(e, this.y));
      this.z = Math.max(t, Math.min(e, this.z));
      this.w = Math.max(t, Math.min(e, this.w));
      return this;
    };
    e.clampLength = function (t, e) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    };
    e.floor = function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      this.w = Math.floor(this.w);
      return this;
    };
    e.ceil = function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      this.w = Math.ceil(this.w);
      return this;
    };
    e.round = function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      this.w = Math.round(this.w);
      return this;
    };
    e.roundToZero = function () {
      this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
      this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
      this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
      return this;
    };
    e.negate = function () {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    };
    e.dot = function (t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    };
    e.lengthSq = function () {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    };
    e.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    };
    e.manhattanLength = function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    };
    e.normalize = function () {
      return this.divideScalar(this.length() || 1);
    };
    e.setLength = function (t) {
      return this.normalize().multiplyScalar(t);
    };
    e.lerp = function (t, e) {
      this.x += (t.x - this.x) * e;
      this.y += (t.y - this.y) * e;
      this.z += (t.z - this.z) * e;
      this.w += (t.w - this.w) * e;
      return this;
    };
    e.lerpVectors = function (t, e, n) {
      this.x = t.x + (e.x - t.x) * n;
      this.y = t.y + (e.y - t.y) * n;
      this.z = t.z + (e.z - t.z) * n;
      this.w = t.w + (e.w - t.w) * n;
      return this;
    };
    e.equals = function (t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
    };
    e.fromArray = function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      this.x = t[e];
      this.y = t[e + 1];
      this.z = t[e + 2];
      this.w = t[e + 3];
      return this;
    };
    e.toArray = function (t, e) {
      if (void 0 === t) {
        t = [];
      }
      if (void 0 === e) {
        e = 0;
      }
      t[e] = this.x;
      t[e + 1] = this.y;
      t[e + 2] = this.z;
      t[e + 3] = this.w;
      return t;
    };
    e.fromBufferAttribute = function (t, e, n) {
      if (void 0 !== n) {
        console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
      }
      this.x = t.getX(e);
      this.y = t.getY(e);
      this.z = t.getZ(e);
      this.w = t.getW(e);
      return this;
    };
    e.random = function () {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      this.w = Math.random();
      return this;
    };
    ut(t, [{
      key: "width",
      get: function () {
        return this.z;
      },
      set: function (t) {
        this.z = t;
      }
    }, {
      key: "height",
      get: function () {
        return this.w;
      },
      set: function (t) {
        this.w = t;
      }
    }]);
    return t;
  }();
  function bt(t, e, n) {
    this.width = t;
    this.height = e;
    this.scissor = new yt(0, 0, t, e);
    this.scissorTest = !1;
    this.viewport = new yt(0, 0, t, e);
    n = n || {};
    this.texture = new gt(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding);
    this.texture.image = {};
    this.texture.image.width = t;
    this.texture.image.height = e;
    this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps;
    this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : m;
    this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer;
    this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer;
    this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null;
  }
  function xt(t, e, n) {
    bt.call(this, t, e, n);
    this.samples = 4;
  }
  bt.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: bt,
    isWebGLRenderTarget: !0,
    setSize: function (t, e) {
      if (this.width === t && this.height === e) {
        this.width = t;
        this.height = e;
        this.texture.image.width = t;
        this.texture.image.height = e;
        this.dispose();
      }
      this.viewport.set(0, 0, t, e);
      this.scissor.set(0, 0, t, e);
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (t) {
      this.width = t.width;
      this.height = t.height;
      this.viewport.copy(t.viewport);
      this.texture = t.texture.clone();
      this.depthBuffer = t.depthBuffer;
      this.stencilBuffer = t.stencilBuffer;
      this.depthTexture = t.depthTexture;
      return this;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  xt.prototype = Object.assign(Object.create(bt.prototype), {
    constructor: xt,
    isWebGLMultisampleRenderTarget: !0,
    copy: function (t) {
      bt.prototype.copy.call(this, t);
      this.samples = t.samples;
      return this;
    }
  });
  var _t = function () {
    function t(t, e, n, r) {
      if (void 0 === t) {
        t = 0;
      }
      if (void 0 === e) {
        e = 0;
      }
      if (void 0 === n) {
        n = 0;
      }
      if (void 0 === r) {
        r = 1;
      }
      Object.defineProperty(this, "isQuaternion", {
        value: !0
      });
      this._x = t;
      this._y = e;
      this._z = n;
      this._w = r;
    }
    t.slerp = function (t, e, n, r) {
      return n.copy(t).slerp(e, r);
    };
    t.slerpFlat = function (t, e, n, r, i, a, o) {
      var s = n[r + 0];
      var l = n[r + 1];
      var u = n[r + 2];
      var c = n[r + 3];
      var h = i[a + 0];
      var d = i[a + 1];
      var f = i[a + 2];
      var p = i[a + 3];
      if (c !== p || s !== h || l !== d || u !== f) {
        var m = 1 - o;
        var v = s * h + l * d + u * f + c * p;
        var g = v >= 0 ? 1 : -1;
        var y = 1 - v * v;
        if (y > Number.EPSILON) {
          var b = Math.sqrt(y);
          var x = Math.atan2(b, v * g);
          m = Math.sin(m * x) / b;
          o = Math.sin(o * x) / b;
        }
        var _ = o * g;
        s = s * m + h * _;
        l = l * m + d * _;
        u = u * m + f * _;
        c = c * m + p * _;
        if (m === 1 - o) {
          var w = 1 / Math.sqrt(s * s + l * l + u * u + c * c);
          s *= w, l *= w, u *= w, c *= w;
        }
      }
      t[e] = s;
      t[e + 1] = l;
      t[e + 2] = u;
      t[e + 3] = c;
    };
    t.multiplyQuaternionsFlat = function (t, e, n, r, i, a) {
      var o = n[r];
      var s = n[r + 1];
      var l = n[r + 2];
      var u = n[r + 3];
      var c = i[a];
      var h = i[a + 1];
      var d = i[a + 2];
      var f = i[a + 3];
      t[e] = o * f + u * c + s * d - l * h;
      t[e + 1] = s * f + u * h + l * c - o * d;
      t[e + 2] = l * f + u * d + o * h - s * c;
      t[e + 3] = u * f - o * c - s * h - l * d;
      return t;
    };
    var e = t.prototype;
    e.set = function (t, e, n, r) {
      this._x = t;
      this._y = e;
      this._z = n;
      this._w = r;
      this._onChangeCallback();
      return this;
    };
    e.clone = function () {
      return new this.constructor(this._x, this._y, this._z, this._w);
    };
    e.copy = function (t) {
      this._x = t.x;
      this._y = t.y;
      this._z = t.z;
      this._w = t.w;
      this._onChangeCallback();
      return this;
    };
    e.setFromEuler = function (t, e) {
      if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      var n = t._x;
      var r = t._y;
      var i = t._z;
      var a = t._order;
      var o = Math.cos;
      var s = Math.sin;
      var l = o(n / 2);
      var u = o(r / 2);
      var c = o(i / 2);
      var h = s(n / 2);
      var d = s(r / 2);
      var f = s(i / 2);
      switch (a) {
        case "XYZ":
          this._x = h * u * c + l * d * f;
          this._y = l * d * c - h * u * f;
          this._z = l * u * f + h * d * c;
          this._w = l * u * c - h * d * f;
          break;
        case "YXZ":
          this._x = h * u * c + l * d * f;
          this._y = l * d * c - h * u * f;
          this._z = l * u * f - h * d * c;
          this._w = l * u * c + h * d * f;
          break;
        case "ZXY":
          this._x = h * u * c - l * d * f;
          this._y = l * d * c + h * u * f;
          this._z = l * u * f + h * d * c;
          this._w = l * u * c - h * d * f;
          break;
        case "ZYX":
          this._x = h * u * c - l * d * f;
          this._y = l * d * c + h * u * f;
          this._z = l * u * f - h * d * c;
          this._w = l * u * c + h * d * f;
          break;
        case "YZX":
          this._x = h * u * c + l * d * f;
          this._y = l * d * c + h * u * f;
          this._z = l * u * f - h * d * c;
          this._w = l * u * c - h * d * f;
          break;
        case "XZY":
          this._x = h * u * c - l * d * f;
          this._y = l * d * c - h * u * f;
          this._z = l * u * f + h * d * c;
          this._w = l * u * c + h * d * f;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
      }
      if (!1 !== e) {
        this._onChangeCallback();
      }
      return this;
    };
    e.setFromAxisAngle = function (t, e) {
      var n = e / 2;
      var r = Math.sin(n);
      this._x = t.x * r;
      this._y = t.y * r;
      this._z = t.z * r;
      this._w = Math.cos(n);
      this._onChangeCallback();
      return this;
    };
    e.setFromRotationMatrix = function (t) {
      var e = t.elements;
      var n = e[0];
      var r = e[4];
      var i = e[8];
      var a = e[1];
      var o = e[5];
      var s = e[9];
      var l = e[2];
      var u = e[6];
      var c = e[10];
      var h = n + o + c;
      if (h > 0) {
        var d = 0.5 / Math.sqrt(h + 1);
        this._w = 0.25 / d;
        this._x = (u - s) * d;
        this._y = (i - l) * d;
        this._z = (a - r) * d;
      } else if (n > o && n > c) {
        var f = 2 * Math.sqrt(1 + n - o - c);
        this._w = (u - s) / f;
        this._x = 0.25 * f;
        this._y = (r + a) / f;
        this._z = (i + l) / f;
      } else if (o > c) {
        var p = 2 * Math.sqrt(1 + o - n - c);
        this._w = (i - l) / p;
        this._x = (r + a) / p;
        this._y = 0.25 * p;
        this._z = (s + u) / p;
      } else {
        var m = 2 * Math.sqrt(1 + c - n - o);
        this._w = (a - r) / m;
        this._x = (i + l) / m;
        this._y = (s + u) / m;
        this._z = 0.25 * m;
      }
      this._onChangeCallback();
      return this;
    };
    e.setFromUnitVectors = function (t, e) {
      var n = t.dot(e) + 1;
      if (n < 1e-6) {
        n = 0;
        if (Math.abs(t.x) > Math.abs(t.z)) {
          this._x = -t.y;
          this._y = t.x;
          this._z = 0;
          this._w = n;
        } else {
          this._x = 0;
          this._y = -t.z;
          this._z = t.y;
          this._w = n;
        }
      } else {
        this._x = t.y * e.z - t.z * e.y;
        this._y = t.z * e.x - t.x * e.z;
        this._z = t.x * e.y - t.y * e.x;
        this._w = n;
      }
      return this.normalize();
    };
    e.angleTo = function (t) {
      return 2 * Math.acos(Math.abs(st.clamp(this.dot(t), -1, 1)));
    };
    e.rotateTowards = function (t, e) {
      var n = this.angleTo(t);
      if (0 === n) return this;
      var r = Math.min(1, e / n);
      this.slerp(t, r);
      return this;
    };
    e.identity = function () {
      return this.set(0, 0, 0, 1);
    };
    e.inverse = function () {
      return this.conjugate();
    };
    e.conjugate = function () {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this._onChangeCallback();
      return this;
    };
    e.dot = function (t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    };
    e.lengthSq = function () {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    };
    e.length = function () {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    };
    e.normalize = function () {
      var t = this.length();
      if (0 === t) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      } else {
        t = 1 / t;
        this._x = this._x * t;
        this._y = this._y * t;
        this._z = this._z * t;
        this._w = this._w * t;
      }
      this._onChangeCallback();
      return this;
    };
    e.multiply = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
    };
    e.premultiply = function (t) {
      return this.multiplyQuaternions(t, this);
    };
    e.multiplyQuaternions = function (t, e) {
      var n = t._x;
      var r = t._y;
      var i = t._z;
      var a = t._w;
      var o = e._x;
      var s = e._y;
      var l = e._z;
      var u = e._w;
      this._x = n * u + a * o + r * l - i * s;
      this._y = r * u + a * s + i * o - n * l;
      this._z = i * u + a * l + n * s - r * o;
      this._w = a * u - n * o - r * s - i * l;
      this._onChangeCallback();
      return this;
    };
    e.slerp = function (t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      var n = this._x;
      var r = this._y;
      var i = this._z;
      var a = this._w;
      var o = a * t._w + n * t._x + r * t._y + i * t._z;
      if (o < 0) {
        this._w = -t._w;
        this._x = -t._x;
        this._y = -t._y;
        this._z = -t._z;
        o = -o;
      } else {
        this.copy(t);
      }
      if (o >= 1) return this._w = a, this._x = n, this._y = r, this._z = i, this;
      var s = 1 - o * o;
      if (s <= Number.EPSILON) {
        var l = 1 - e;
        this._w = l * a + e * this._w;
        this._x = l * n + e * this._x;
        this._y = l * r + e * this._y;
        this._z = l * i + e * this._z;
        this.normalize();
        this._onChangeCallback();
        return this;
      }
      var u = Math.sqrt(s);
      var c = Math.atan2(u, o);
      var h = Math.sin((1 - e) * c) / u;
      var d = Math.sin(e * c) / u;
      this._w = a * h + this._w * d;
      this._x = n * h + this._x * d;
      this._y = r * h + this._y * d;
      this._z = i * h + this._z * d;
      this._onChangeCallback();
      return this;
    };
    e.equals = function (t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
    };
    e.fromArray = function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      this._x = t[e];
      this._y = t[e + 1];
      this._z = t[e + 2];
      this._w = t[e + 3];
      this._onChangeCallback();
      return this;
    };
    e.toArray = function (t, e) {
      if (void 0 === t) {
        t = [];
      }
      if (void 0 === e) {
        e = 0;
      }
      t[e] = this._x;
      t[e + 1] = this._y;
      t[e + 2] = this._z;
      t[e + 3] = this._w;
      return t;
    };
    e.fromBufferAttribute = function (t, e) {
      this._x = t.getX(e);
      this._y = t.getY(e);
      this._z = t.getZ(e);
      this._w = t.getW(e);
      return this;
    };
    e._onChange = function (t) {
      this._onChangeCallback = t;
      return this;
    };
    e._onChangeCallback = function () {};
    ut(t, [{
      key: "x",
      get: function () {
        return this._x;
      },
      set: function (t) {
        this._x = t;
        this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function () {
        return this._y;
      },
      set: function (t) {
        this._y = t;
        this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function () {
        return this._z;
      },
      set: function (t) {
        this._z = t;
        this._onChangeCallback();
      }
    }, {
      key: "w",
      get: function () {
        return this._w;
      },
      set: function (t) {
        this._w = t;
        this._onChangeCallback();
      }
    }]);
    return t;
  }();
  var wt = function () {
    function t(t, e, n) {
      if (void 0 === t) {
        t = 0;
      }
      if (void 0 === e) {
        e = 0;
      }
      if (void 0 === n) {
        n = 0;
      }
      Object.defineProperty(this, "isVector3", {
        value: !0
      });
      this.x = t;
      this.y = e;
      this.z = n;
    }
    var e = t.prototype;
    e.set = function (t, e, n) {
      if (void 0 === n) {
        n = this.z;
      }
      this.x = t;
      this.y = e;
      this.z = n;
      return this;
    };
    e.setScalar = function (t) {
      this.x = t;
      this.y = t;
      this.z = t;
      return this;
    };
    e.setX = function (t) {
      this.x = t;
      return this;
    };
    e.setY = function (t) {
      this.y = t;
      return this;
    };
    e.setZ = function (t) {
      this.z = t;
      return this;
    };
    e.setComponent = function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    };
    e.getComponent = function (t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t);
      }
    };
    e.clone = function () {
      return new this.constructor(this.x, this.y, this.z);
    };
    e.copy = function (t) {
      this.x = t.x;
      this.y = t.y;
      this.z = t.z;
      return this;
    };
    e.add = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
    };
    e.addScalar = function (t) {
      this.x += t;
      this.y += t;
      this.z += t;
      return this;
    };
    e.addVectors = function (t, e) {
      this.x = t.x + e.x;
      this.y = t.y + e.y;
      this.z = t.z + e.z;
      return this;
    };
    e.addScaledVector = function (t, e) {
      this.x += t.x * e;
      this.y += t.y * e;
      this.z += t.z * e;
      return this;
    };
    e.sub = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
    };
    e.subScalar = function (t) {
      this.x -= t;
      this.y -= t;
      this.z -= t;
      return this;
    };
    e.subVectors = function (t, e) {
      this.x = t.x - e.x;
      this.y = t.y - e.y;
      this.z = t.z - e.z;
      return this;
    };
    e.multiply = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
    };
    e.multiplyScalar = function (t) {
      this.x *= t;
      this.y *= t;
      this.z *= t;
      return this;
    };
    e.multiplyVectors = function (t, e) {
      this.x = t.x * e.x;
      this.y = t.y * e.y;
      this.z = t.z * e.z;
      return this;
    };
    e.applyEuler = function (t) {
      if (t && t.isEuler) {
        console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
      }
      return this.applyQuaternion(Et.setFromEuler(t));
    };
    e.applyAxisAngle = function (t, e) {
      return this.applyQuaternion(Et.setFromAxisAngle(t, e));
    };
    e.applyMatrix3 = function (t) {
      var e = this.x;
      var n = this.y;
      var r = this.z;
      var i = t.elements;
      this.x = i[0] * e + i[3] * n + i[6] * r;
      this.y = i[1] * e + i[4] * n + i[7] * r;
      this.z = i[2] * e + i[5] * n + i[8] * r;
      return this;
    };
    e.applyNormalMatrix = function (t) {
      return this.applyMatrix3(t).normalize();
    };
    e.applyMatrix4 = function (t) {
      var e = this.x;
      var n = this.y;
      var r = this.z;
      var i = t.elements;
      var a = 1 / (i[3] * e + i[7] * n + i[11] * r + i[15]);
      this.x = (i[0] * e + i[4] * n + i[8] * r + i[12]) * a;
      this.y = (i[1] * e + i[5] * n + i[9] * r + i[13]) * a;
      this.z = (i[2] * e + i[6] * n + i[10] * r + i[14]) * a;
      return this;
    };
    e.applyQuaternion = function (t) {
      var e = this.x;
      var n = this.y;
      var r = this.z;
      var i = t.x;
      var a = t.y;
      var o = t.z;
      var s = t.w;
      var l = s * e + a * r - o * n;
      var u = s * n + o * e - i * r;
      var c = s * r + i * n - a * e;
      var h = -i * e - a * n - o * r;
      this.x = l * s + h * -i + u * -o - c * -a;
      this.y = u * s + h * -a + c * -i - l * -o;
      this.z = c * s + h * -o + l * -a - u * -i;
      return this;
    };
    e.project = function (t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
    };
    e.unproject = function (t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
    };
    e.transformDirection = function (t) {
      var e = this.x;
      var n = this.y;
      var r = this.z;
      var i = t.elements;
      this.x = i[0] * e + i[4] * n + i[8] * r;
      this.y = i[1] * e + i[5] * n + i[9] * r;
      this.z = i[2] * e + i[6] * n + i[10] * r;
      return this.normalize();
    };
    e.divide = function (t) {
      this.x /= t.x;
      this.y /= t.y;
      this.z /= t.z;
      return this;
    };
    e.divideScalar = function (t) {
      return this.multiplyScalar(1 / t);
    };
    e.min = function (t) {
      this.x = Math.min(this.x, t.x);
      this.y = Math.min(this.y, t.y);
      this.z = Math.min(this.z, t.z);
      return this;
    };
    e.max = function (t) {
      this.x = Math.max(this.x, t.x);
      this.y = Math.max(this.y, t.y);
      this.z = Math.max(this.z, t.z);
      return this;
    };
    e.clamp = function (t, e) {
      this.x = Math.max(t.x, Math.min(e.x, this.x));
      this.y = Math.max(t.y, Math.min(e.y, this.y));
      this.z = Math.max(t.z, Math.min(e.z, this.z));
      return this;
    };
    e.clampScalar = function (t, e) {
      this.x = Math.max(t, Math.min(e, this.x));
      this.y = Math.max(t, Math.min(e, this.y));
      this.z = Math.max(t, Math.min(e, this.z));
      return this;
    };
    e.clampLength = function (t, e) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    };
    e.floor = function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    };
    e.ceil = function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    };
    e.round = function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    };
    e.roundToZero = function () {
      this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
      this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
      return this;
    };
    e.negate = function () {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    };
    e.dot = function (t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    };
    e.lengthSq = function () {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    };
    e.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    e.manhattanLength = function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    };
    e.normalize = function () {
      return this.divideScalar(this.length() || 1);
    };
    e.setLength = function (t) {
      return this.normalize().multiplyScalar(t);
    };
    e.lerp = function (t, e) {
      this.x += (t.x - this.x) * e;
      this.y += (t.y - this.y) * e;
      this.z += (t.z - this.z) * e;
      return this;
    };
    e.lerpVectors = function (t, e, n) {
      this.x = t.x + (e.x - t.x) * n;
      this.y = t.y + (e.y - t.y) * n;
      this.z = t.z + (e.z - t.z) * n;
      return this;
    };
    e.cross = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
    };
    e.crossVectors = function (t, e) {
      var n = t.x;
      var r = t.y;
      var i = t.z;
      var a = e.x;
      var o = e.y;
      var s = e.z;
      this.x = r * s - i * o;
      this.y = i * a - n * s;
      this.z = n * o - r * a;
      return this;
    };
    e.projectOnVector = function (t) {
      var e = t.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      var n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n);
    };
    e.projectOnPlane = function (t) {
      St.copy(this).projectOnVector(t);
      return this.sub(St);
    };
    e.reflect = function (t) {
      return this.sub(St.copy(t).multiplyScalar(2 * this.dot(t)));
    };
    e.angleTo = function (t) {
      var e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      var n = this.dot(t) / e;
      return Math.acos(st.clamp(n, -1, 1));
    };
    e.distanceTo = function (t) {
      return Math.sqrt(this.distanceToSquared(t));
    };
    e.distanceToSquared = function (t) {
      var e = this.x - t.x;
      var n = this.y - t.y;
      var r = this.z - t.z;
      return e * e + n * n + r * r;
    };
    e.manhattanDistanceTo = function (t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
    };
    e.setFromSpherical = function (t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    };
    e.setFromSphericalCoords = function (t, e, n) {
      var r = Math.sin(e) * t;
      this.x = r * Math.sin(n);
      this.y = Math.cos(e) * t;
      this.z = r * Math.cos(n);
      return this;
    };
    e.setFromCylindrical = function (t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    };
    e.setFromCylindricalCoords = function (t, e, n) {
      this.x = t * Math.sin(e);
      this.y = n;
      this.z = t * Math.cos(e);
      return this;
    };
    e.setFromMatrixPosition = function (t) {
      var e = t.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      return this;
    };
    e.setFromMatrixScale = function (t) {
      var e = this.setFromMatrixColumn(t, 0).length();
      var n = this.setFromMatrixColumn(t, 1).length();
      var r = this.setFromMatrixColumn(t, 2).length();
      this.x = e;
      this.y = n;
      this.z = r;
      return this;
    };
    e.setFromMatrixColumn = function (t, e) {
      return this.fromArray(t.elements, 4 * e);
    };
    e.setFromMatrix3Column = function (t, e) {
      return this.fromArray(t.elements, 3 * e);
    };
    e.equals = function (t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    };
    e.fromArray = function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      this.x = t[e];
      this.y = t[e + 1];
      this.z = t[e + 2];
      return this;
    };
    e.toArray = function (t, e) {
      if (void 0 === t) {
        t = [];
      }
      if (void 0 === e) {
        e = 0;
      }
      t[e] = this.x;
      t[e + 1] = this.y;
      t[e + 2] = this.z;
      return t;
    };
    e.fromBufferAttribute = function (t, e, n) {
      if (void 0 !== n) {
        console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
      }
      this.x = t.getX(e);
      this.y = t.getY(e);
      this.z = t.getZ(e);
      return this;
    };
    e.random = function () {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      return this;
    };
    return t;
  }();
  var St = new wt();
  var Et = new _t();
  var Tt = function () {
    function t(t, e) {
      Object.defineProperty(this, "isBox3", {
        value: !0
      });
      this.min = void 0 !== t ? t : new wt(1 / 0, 1 / 0, 1 / 0);
      this.max = void 0 !== e ? e : new wt(-1 / 0, -1 / 0, -1 / 0);
    }
    var e = t.prototype;
    e.set = function (t, e) {
      this.min.copy(t);
      this.max.copy(e);
      return this;
    };
    e.setFromArray = function (t) {
      for (e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = t.length, void 0; s < l; s += 3) {
        var e;
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var l;
        var u = t[s];
        var c = t[s + 1];
        var h = t[s + 2];
        if (u < e) {
          e = u;
        }
        if (c < n) {
          n = c;
        }
        if (h < r) {
          r = h;
        }
        if (u > i) {
          i = u;
        }
        if (c > a) {
          a = c;
        }
        if (h > o) {
          o = h;
        }
      }
      this.min.set(e, n, r);
      this.max.set(i, a, o);
      return this;
    };
    e.setFromBufferAttribute = function (t) {
      for (e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = t.count, void 0; s < l; s++) {
        var e;
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var l;
        var u = t.getX(s);
        var c = t.getY(s);
        var h = t.getZ(s);
        if (u < e) {
          e = u;
        }
        if (c < n) {
          n = c;
        }
        if (h < r) {
          r = h;
        }
        if (u > i) {
          i = u;
        }
        if (c > a) {
          a = c;
        }
        if (h > o) {
          o = h;
        }
      }
      this.min.set(e, n, r);
      this.max.set(i, a, o);
      return this;
    };
    e.setFromPoints = function (t) {
      this.makeEmpty();
      for (e = 0, n = t.length, void 0; e < n; e++) {
        var e;
        var n;
        this.expandByPoint(t[e]);
      }
      return this;
    };
    e.setFromCenterAndSize = function (t, e) {
      var n = Lt.copy(e).multiplyScalar(0.5);
      this.min.copy(t).sub(n);
      this.max.copy(t).add(n);
      return this;
    };
    e.setFromObject = function (t) {
      this.makeEmpty();
      return this.expandByObject(t);
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.min.copy(t.min);
      this.max.copy(t.max);
      return this;
    };
    e.makeEmpty = function () {
      this.min.x = this.min.y = this.min.z = 1 / 0;
      this.max.x = this.max.y = this.max.z = -1 / 0;
      return this;
    };
    e.isEmpty = function () {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    };
    e.getCenter = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Box3: .getCenter() target is now required");
        t = new wt();
      }
      return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    };
    e.getSize = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Box3: .getSize() target is now required");
        t = new wt();
      }
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    };
    e.expandByPoint = function (t) {
      this.min.min(t);
      this.max.max(t);
      return this;
    };
    e.expandByVector = function (t) {
      this.min.sub(t);
      this.max.add(t);
      return this;
    };
    e.expandByScalar = function (t) {
      this.min.addScalar(-t);
      this.max.addScalar(t);
      return this;
    };
    e.expandByObject = function (t) {
      t.updateWorldMatrix(!1, !1);
      var e = t.geometry;
      if (void 0 !== e) {
        if (null === e.boundingBox) {
          e.computeBoundingBox();
        }
        Ct.copy(e.boundingBox);
        Ct.applyMatrix4(t.matrixWorld);
        this.union(Ct);
      }
      for (n = t.children, r = 0, i = n.length, void 0; r < i; r++) {
        var n;
        var r;
        var i;
        this.expandByObject(n[r]);
      }
      return this;
    };
    e.containsPoint = function (t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
    };
    e.containsBox = function (t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
    };
    e.getParameter = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Box3: .getParameter() target is now required");
        e = new wt();
      }
      return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
    };
    e.intersectsBox = function (t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
    };
    e.intersectsSphere = function (t) {
      this.clampPoint(t.center, Lt);
      return Lt.distanceToSquared(t.center) <= t.radius * t.radius;
    };
    e.intersectsPlane = function (t) {
      var e;
      var n;
      if (t.normal.x > 0) {
        e = t.normal.x * this.min.x;
        n = t.normal.x * this.max.x;
      } else {
        e = t.normal.x * this.max.x;
        n = t.normal.x * this.min.x;
      }
      if (t.normal.y > 0) {
        e += t.normal.y * this.min.y;
        n += t.normal.y * this.max.y;
      } else {
        e += t.normal.y * this.max.y;
        n += t.normal.y * this.min.y;
      }
      if (t.normal.z > 0) {
        e += t.normal.z * this.min.z;
        n += t.normal.z * this.max.z;
      } else {
        e += t.normal.z * this.max.z;
        n += t.normal.z * this.min.z;
      }
      return e <= -t.constant && n >= -t.constant;
    };
    e.intersectsTriangle = function (t) {
      if (this.isEmpty()) return !1;
      this.getCenter(Nt);
      Bt.subVectors(this.max, Nt);
      Pt.subVectors(t.a, Nt);
      Rt.subVectors(t.b, Nt);
      Ot.subVectors(t.c, Nt);
      It.subVectors(Rt, Pt);
      Dt.subVectors(Ot, Rt);
      kt.subVectors(Pt, Ot);
      var e = [0, -It.z, It.y, 0, -Dt.z, Dt.y, 0, -kt.z, kt.y, It.z, 0, -It.x, Dt.z, 0, -Dt.x, kt.z, 0, -kt.x, -It.y, It.x, 0, -Dt.y, Dt.x, 0, -kt.y, kt.x, 0];
      return !!Mt(e, Pt, Rt, Ot, Bt) && !!Mt(e = [1, 0, 0, 0, 1, 0, 0, 0, 1], Pt, Rt, Ot, Bt) && (Ft.crossVectors(It, Dt), Mt(e = [Ft.x, Ft.y, Ft.z], Pt, Rt, Ot, Bt));
    };
    e.clampPoint = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Box3: .clampPoint() target is now required");
        e = new wt();
      }
      return e.copy(t).clamp(this.min, this.max);
    };
    e.distanceToPoint = function (t) {
      return Lt.copy(t).clamp(this.min, this.max).sub(t).length();
    };
    e.getBoundingSphere = function (t) {
      if (void 0 === t) {
        console.error("THREE.Box3: .getBoundingSphere() target is now required");
      }
      this.getCenter(t.center);
      t.radius = 0.5 * this.getSize(Lt).length();
      return t;
    };
    e.intersect = function (t) {
      this.min.max(t.min);
      this.max.min(t.max);
      if (this.isEmpty()) {
        this.makeEmpty();
      }
      return this;
    };
    e.union = function (t) {
      this.min.min(t.min);
      this.max.max(t.max);
      return this;
    };
    e.applyMatrix4 = function (t) {
      if (this.isEmpty()) {
        At[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t);
        At[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t);
        At[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t);
        At[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t);
        At[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t);
        At[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t);
        At[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t);
        At[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t);
        this.setFromPoints(At);
      }
      return this;
    };
    e.translate = function (t) {
      this.min.add(t);
      this.max.add(t);
      return this;
    };
    e.equals = function (t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    };
    return t;
  }();
  function Mt(t, e, n, r, i) {
    for (a = 0, o = t.length - 3, void 0; a <= o; a += 3) {
      var a;
      var o;
      Ut.fromArray(t, a);
      var s = i.x * Math.abs(Ut.x) + i.y * Math.abs(Ut.y) + i.z * Math.abs(Ut.z);
      var l = e.dot(Ut);
      var u = n.dot(Ut);
      var c = r.dot(Ut);
      if (Math.max(-Math.max(l, u, c), Math.min(l, u, c)) > s) return !1;
    }
    return !0;
  }
  var At = [new wt(), new wt(), new wt(), new wt(), new wt(), new wt(), new wt(), new wt()];
  var Lt = new wt();
  var Ct = new Tt();
  var Pt = new wt();
  var Rt = new wt();
  var Ot = new wt();
  var It = new wt();
  var Dt = new wt();
  var kt = new wt();
  var Nt = new wt();
  var Bt = new wt();
  var Ft = new wt();
  var Ut = new wt();
  var zt = new Tt();
  var Gt = function () {
    function t(t, e) {
      this.center = void 0 !== t ? t : new wt();
      this.radius = void 0 !== e ? e : -1;
    }
    var e = t.prototype;
    e.set = function (t, e) {
      this.center.copy(t);
      this.radius = e;
      return this;
    };
    e.setFromPoints = function (t, e) {
      var n = this.center;
      if (void 0 !== e) {
        n.copy(e);
      } else {
        zt.setFromPoints(t).getCenter(n);
      }
      for (r = 0, i = 0, a = t.length, void 0; i < a; i++) {
        var r;
        var i;
        var a;
        r = Math.max(r, n.distanceToSquared(t[i]));
      }
      this.radius = Math.sqrt(r);
      return this;
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.center.copy(t.center);
      this.radius = t.radius;
      return this;
    };
    e.isEmpty = function () {
      return this.radius < 0;
    };
    e.makeEmpty = function () {
      this.center.set(0, 0, 0);
      this.radius = -1;
      return this;
    };
    e.containsPoint = function (t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    };
    e.distanceToPoint = function (t) {
      return t.distanceTo(this.center) - this.radius;
    };
    e.intersectsSphere = function (t) {
      var e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    };
    e.intersectsBox = function (t) {
      return t.intersectsSphere(this);
    };
    e.intersectsPlane = function (t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    };
    e.clampPoint = function (t, e) {
      var n = this.center.distanceToSquared(t);
      if (void 0 === e) {
        console.warn("THREE.Sphere: .clampPoint() target is now required");
        e = new wt();
      }
      e.copy(t);
      if (n > this.radius * this.radius) {
        e.sub(this.center).normalize();
        e.multiplyScalar(this.radius).add(this.center);
      }
      return e;
    };
    e.getBoundingBox = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Sphere: .getBoundingBox() target is now required");
        t = new Tt();
      }
      return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    };
    e.applyMatrix4 = function (t) {
      this.center.applyMatrix4(t);
      this.radius = this.radius * t.getMaxScaleOnAxis();
      return this;
    };
    e.translate = function (t) {
      this.center.add(t);
      return this;
    };
    e.equals = function (t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    };
    return t;
  }();
  var Ht = new wt();
  var jt = new wt();
  var Vt = new wt();
  var Wt = new wt();
  var qt = new wt();
  var Yt = new wt();
  var Xt = new wt();
  var Zt = function () {
    function t(t, e) {
      this.origin = void 0 !== t ? t : new wt();
      this.direction = void 0 !== e ? e : new wt(0, 0, -1);
    }
    var e = t.prototype;
    e.set = function (t, e) {
      this.origin.copy(t);
      this.direction.copy(e);
      return this;
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.origin.copy(t.origin);
      this.direction.copy(t.direction);
      return this;
    };
    e.at = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Ray: .at() target is now required");
        e = new wt();
      }
      return e.copy(this.direction).multiplyScalar(t).add(this.origin);
    };
    e.lookAt = function (t) {
      this.direction.copy(t).sub(this.origin).normalize();
      return this;
    };
    e.recast = function (t) {
      this.origin.copy(this.at(t, Ht));
      return this;
    };
    e.closestPointToPoint = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Ray: .closestPointToPoint() target is now required");
        e = new wt();
      }
      e.subVectors(t, this.origin);
      var n = e.dot(this.direction);
      return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
    };
    e.distanceToPoint = function (t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    };
    e.distanceSqToPoint = function (t) {
      var e = Ht.subVectors(t, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t) : (Ht.copy(this.direction).multiplyScalar(e).add(this.origin), Ht.distanceToSquared(t));
    };
    e.distanceSqToSegment = function (t, e, n, r) {
      jt.copy(t).add(e).multiplyScalar(0.5);
      Vt.copy(e).sub(t).normalize();
      Wt.copy(this.origin).sub(jt);
      var i;
      var a;
      var o;
      var s;
      var l = 0.5 * t.distanceTo(e);
      var u = -this.direction.dot(Vt);
      var c = Wt.dot(this.direction);
      var h = -Wt.dot(Vt);
      var d = Wt.lengthSq();
      var f = Math.abs(1 - u * u);
      if (f > 0) {
        a = u * c - h;
        s = l * f;
        if ((i = u * h - c) >= 0) {
          if (a >= -s) {
            if (a <= s) {
              var p = 1 / f;
              o = (i *= p) * (i + u * (a *= p) + 2 * c) + a * (u * i + a + 2 * h) + d;
            } else a = l, o = -(i = Math.max(0, -(u * a + c))) * i + a * (a + 2 * h) + d;
          } else a = -l, o = -(i = Math.max(0, -(u * a + c))) * i + a * (a + 2 * h) + d;
        } else a <= -s ? o = -(i = Math.max(0, -(-u * l + c))) * i + (a = i > 0 ? -l : Math.min(Math.max(-l, -h), l)) * (a + 2 * h) + d : a <= s ? (i = 0, o = (a = Math.min(Math.max(-l, -h), l)) * (a + 2 * h) + d) : o = -(i = Math.max(0, -(u * l + c))) * i + (a = i > 0 ? l : Math.min(Math.max(-l, -h), l)) * (a + 2 * h) + d;
      } else {
        a = u > 0 ? -l : l;
        o = -(i = Math.max(0, -(u * a + c))) * i + a * (a + 2 * h) + d;
      }
      if (n) {
        n.copy(this.direction).multiplyScalar(i).add(this.origin);
      }
      if (r) {
        r.copy(Vt).multiplyScalar(a).add(jt);
      }
      return o;
    };
    e.intersectSphere = function (t, e) {
      Ht.subVectors(t.center, this.origin);
      var n = Ht.dot(this.direction);
      var r = Ht.dot(Ht) - n * n;
      var i = t.radius * t.radius;
      if (r > i) return null;
      var a = Math.sqrt(i - r);
      var o = n - a;
      var s = n + a;
      return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e);
    };
    e.intersectsSphere = function (t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    };
    e.distanceToPlane = function (t) {
      var e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      var n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    };
    e.intersectPlane = function (t, e) {
      var n = this.distanceToPlane(t);
      return null === n ? null : this.at(n, e);
    };
    e.intersectsPlane = function (t) {
      var e = t.distanceToPoint(this.origin);
      return 0 === e || t.normal.dot(this.direction) * e < 0;
    };
    e.intersectBox = function (t, e) {
      var n;
      var r;
      var i;
      var a;
      var o;
      var s;
      var l = 1 / this.direction.x;
      var u = 1 / this.direction.y;
      var c = 1 / this.direction.z;
      var h = this.origin;
      if (l >= 0) {
        n = (t.min.x - h.x) * l;
        r = (t.max.x - h.x) * l;
      } else {
        n = (t.max.x - h.x) * l;
        r = (t.min.x - h.x) * l;
      }
      if (u >= 0) {
        i = (t.min.y - h.y) * u;
        a = (t.max.y - h.y) * u;
      } else {
        i = (t.max.y - h.y) * u;
        a = (t.min.y - h.y) * u;
      }
      return n > a || i > r ? null : ((i > n || n != n) && (n = i), (a < r || r != r) && (r = a), c >= 0 ? (o = (t.min.z - h.z) * c, s = (t.max.z - h.z) * c) : (o = (t.max.z - h.z) * c, s = (t.min.z - h.z) * c), n > s || o > r ? null : ((o > n || n != n) && (n = o), (s < r || r != r) && (r = s), r < 0 ? null : this.at(n >= 0 ? n : r, e)));
    };
    e.intersectsBox = function (t) {
      return null !== this.intersectBox(t, Ht);
    };
    e.intersectTriangle = function (t, e, n, r, i) {
      qt.subVectors(e, t);
      Yt.subVectors(n, t);
      Xt.crossVectors(qt, Yt);
      var a;
      var o = this.direction.dot(Xt);
      if (o > 0) {
        if (r) return null;
        a = 1;
      } else {
        if (!(o < 0)) return null;
        a = -1;
        o = -o;
      }
      Wt.subVectors(this.origin, t);
      var s = a * this.direction.dot(Yt.crossVectors(Wt, Yt));
      if (s < 0) return null;
      var l = a * this.direction.dot(qt.cross(Wt));
      if (l < 0) return null;
      if (s + l > o) return null;
      var u = -a * Wt.dot(Xt);
      return u < 0 ? null : this.at(u / o, i);
    };
    e.applyMatrix4 = function (t) {
      this.origin.applyMatrix4(t);
      this.direction.transformDirection(t);
      return this;
    };
    e.equals = function (t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    };
    return t;
  }();
  var Kt = function () {
    function t() {
      Object.defineProperty(this, "isMatrix4", {
        value: !0
      });
      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      if (arguments.length > 0) {
        console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
      }
    }
    var e = t.prototype;
    e.set = function (t, e, n, r, i, a, o, s, l, u, c, h, d, f, p, m) {
      var v = this.elements;
      v[0] = t;
      v[4] = e;
      v[8] = n;
      v[12] = r;
      v[1] = i;
      v[5] = a;
      v[9] = o;
      v[13] = s;
      v[2] = l;
      v[6] = u;
      v[10] = c;
      v[14] = h;
      v[3] = d;
      v[7] = f;
      v[11] = p;
      v[15] = m;
      return this;
    };
    e.identity = function () {
      this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      return this;
    };
    e.clone = function () {
      return new t().fromArray(this.elements);
    };
    e.copy = function (t) {
      var e = this.elements;
      var n = t.elements;
      e[0] = n[0];
      e[1] = n[1];
      e[2] = n[2];
      e[3] = n[3];
      e[4] = n[4];
      e[5] = n[5];
      e[6] = n[6];
      e[7] = n[7];
      e[8] = n[8];
      e[9] = n[9];
      e[10] = n[10];
      e[11] = n[11];
      e[12] = n[12];
      e[13] = n[13];
      e[14] = n[14];
      e[15] = n[15];
      return this;
    };
    e.copyPosition = function (t) {
      var e = this.elements;
      var n = t.elements;
      e[12] = n[12];
      e[13] = n[13];
      e[14] = n[14];
      return this;
    };
    e.extractBasis = function (t, e, n) {
      t.setFromMatrixColumn(this, 0);
      e.setFromMatrixColumn(this, 1);
      n.setFromMatrixColumn(this, 2);
      return this;
    };
    e.makeBasis = function (t, e, n) {
      this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1);
      return this;
    };
    e.extractRotation = function (t) {
      var e = this.elements;
      var n = t.elements;
      var r = 1 / Jt.setFromMatrixColumn(t, 0).length();
      var i = 1 / Jt.setFromMatrixColumn(t, 1).length();
      var a = 1 / Jt.setFromMatrixColumn(t, 2).length();
      e[0] = n[0] * r;
      e[1] = n[1] * r;
      e[2] = n[2] * r;
      e[3] = 0;
      e[4] = n[4] * i;
      e[5] = n[5] * i;
      e[6] = n[6] * i;
      e[7] = 0;
      e[8] = n[8] * a;
      e[9] = n[9] * a;
      e[10] = n[10] * a;
      e[11] = 0;
      e[12] = 0;
      e[13] = 0;
      e[14] = 0;
      e[15] = 1;
      return this;
    };
    e.makeRotationFromEuler = function (t) {
      if (t && t.isEuler) {
        console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
      }
      var e = this.elements;
      var n = t.x;
      var r = t.y;
      var i = t.z;
      var a = Math.cos(n);
      var o = Math.sin(n);
      var s = Math.cos(r);
      var l = Math.sin(r);
      var u = Math.cos(i);
      var c = Math.sin(i);
      if ("XYZ" === t.order) {
        var h = a * u;
        var d = a * c;
        var f = o * u;
        var p = o * c;
        e[0] = s * u;
        e[4] = -s * c;
        e[8] = l;
        e[1] = d + f * l;
        e[5] = h - p * l;
        e[9] = -o * s;
        e[2] = p - h * l;
        e[6] = f + d * l;
        e[10] = a * s;
      } else if ("YXZ" === t.order) {
        var m = s * u;
        var v = s * c;
        var g = l * u;
        var y = l * c;
        e[0] = m + y * o;
        e[4] = g * o - v;
        e[8] = a * l;
        e[1] = a * c;
        e[5] = a * u;
        e[9] = -o;
        e[2] = v * o - g;
        e[6] = y + m * o;
        e[10] = a * s;
      } else if ("ZXY" === t.order) {
        var b = s * u;
        var x = s * c;
        var _ = l * u;
        var w = l * c;
        e[0] = b - w * o;
        e[4] = -a * c;
        e[8] = _ + x * o;
        e[1] = x + _ * o;
        e[5] = a * u;
        e[9] = w - b * o;
        e[2] = -a * l;
        e[6] = o;
        e[10] = a * s;
      } else if ("ZYX" === t.order) {
        var S = a * u;
        var E = a * c;
        var T = o * u;
        var M = o * c;
        e[0] = s * u;
        e[4] = T * l - E;
        e[8] = S * l + M;
        e[1] = s * c;
        e[5] = M * l + S;
        e[9] = E * l - T;
        e[2] = -l;
        e[6] = o * s;
        e[10] = a * s;
      } else if ("YZX" === t.order) {
        var A = a * s;
        var L = a * l;
        var C = o * s;
        var P = o * l;
        e[0] = s * u;
        e[4] = P - A * c;
        e[8] = C * c + L;
        e[1] = c;
        e[5] = a * u;
        e[9] = -o * u;
        e[2] = -l * u;
        e[6] = L * c + C;
        e[10] = A - P * c;
      } else if ("XZY" === t.order) {
        var R = a * s;
        var O = a * l;
        var I = o * s;
        var D = o * l;
        e[0] = s * u;
        e[4] = -c;
        e[8] = l * u;
        e[1] = R * c + D;
        e[5] = a * u;
        e[9] = O * c - I;
        e[2] = I * c - O;
        e[6] = o * u;
        e[10] = D * c + R;
      }
      e[3] = 0;
      e[7] = 0;
      e[11] = 0;
      e[12] = 0;
      e[13] = 0;
      e[14] = 0;
      e[15] = 1;
      return this;
    };
    e.makeRotationFromQuaternion = function (t) {
      return this.compose(Qt, t, te);
    };
    e.lookAt = function (t, e, n) {
      var r = this.elements;
      re.subVectors(t, e);
      if (0 === re.lengthSq()) {
        re.z = 1;
      }
      re.normalize();
      ee.crossVectors(n, re);
      if (0 === ee.lengthSq()) {
        if (1 === Math.abs(n.z)) {
          re.x += 1e-4;
        } else {
          re.z += 1e-4;
        }
        re.normalize();
        ee.crossVectors(n, re);
      }
      ee.normalize();
      ne.crossVectors(re, ee);
      r[0] = ee.x;
      r[4] = ne.x;
      r[8] = re.x;
      r[1] = ee.y;
      r[5] = ne.y;
      r[9] = re.y;
      r[2] = ee.z;
      r[6] = ne.z;
      r[10] = re.z;
      return this;
    };
    e.multiply = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
    };
    e.premultiply = function (t) {
      return this.multiplyMatrices(t, this);
    };
    e.multiplyMatrices = function (t, e) {
      var n = t.elements;
      var r = e.elements;
      var i = this.elements;
      var a = n[0];
      var o = n[4];
      var s = n[8];
      var l = n[12];
      var u = n[1];
      var c = n[5];
      var h = n[9];
      var d = n[13];
      var f = n[2];
      var p = n[6];
      var m = n[10];
      var v = n[14];
      var g = n[3];
      var y = n[7];
      var b = n[11];
      var x = n[15];
      var _ = r[0];
      var w = r[4];
      var S = r[8];
      var E = r[12];
      var T = r[1];
      var M = r[5];
      var A = r[9];
      var L = r[13];
      var C = r[2];
      var P = r[6];
      var R = r[10];
      var O = r[14];
      var I = r[3];
      var D = r[7];
      var k = r[11];
      var N = r[15];
      i[0] = a * _ + o * T + s * C + l * I;
      i[4] = a * w + o * M + s * P + l * D;
      i[8] = a * S + o * A + s * R + l * k;
      i[12] = a * E + o * L + s * O + l * N;
      i[1] = u * _ + c * T + h * C + d * I;
      i[5] = u * w + c * M + h * P + d * D;
      i[9] = u * S + c * A + h * R + d * k;
      i[13] = u * E + c * L + h * O + d * N;
      i[2] = f * _ + p * T + m * C + v * I;
      i[6] = f * w + p * M + m * P + v * D;
      i[10] = f * S + p * A + m * R + v * k;
      i[14] = f * E + p * L + m * O + v * N;
      i[3] = g * _ + y * T + b * C + x * I;
      i[7] = g * w + y * M + b * P + x * D;
      i[11] = g * S + y * A + b * R + x * k;
      i[15] = g * E + y * L + b * O + x * N;
      return this;
    };
    e.multiplyScalar = function (t) {
      var e = this.elements;
      e[0] *= t;
      e[4] *= t;
      e[8] *= t;
      e[12] *= t;
      e[1] *= t;
      e[5] *= t;
      e[9] *= t;
      e[13] *= t;
      e[2] *= t;
      e[6] *= t;
      e[10] *= t;
      e[14] *= t;
      e[3] *= t;
      e[7] *= t;
      e[11] *= t;
      e[15] *= t;
      return this;
    };
    e.determinant = function () {
      var t = this.elements;
      var e = t[0];
      var n = t[4];
      var r = t[8];
      var i = t[12];
      var a = t[1];
      var o = t[5];
      var s = t[9];
      var l = t[13];
      var u = t[2];
      var c = t[6];
      var h = t[10];
      var d = t[14];
      return t[3] * (+i * s * c - r * l * c - i * o * h + n * l * h + r * o * d - n * s * d) + t[7] * (+e * s * d - e * l * h + i * a * h - r * a * d + r * l * u - i * s * u) + t[11] * (+e * l * c - e * o * d - i * a * c + n * a * d + i * o * u - n * l * u) + t[15] * (-r * o * u - e * s * c + e * o * h + r * a * c - n * a * h + n * s * u);
    };
    e.transpose = function () {
      var t;
      var e = this.elements;
      t = e[1];
      e[1] = e[4];
      e[4] = t;
      t = e[2];
      e[2] = e[8];
      e[8] = t;
      t = e[6];
      e[6] = e[9];
      e[9] = t;
      t = e[3];
      e[3] = e[12];
      e[12] = t;
      t = e[7];
      e[7] = e[13];
      e[13] = t;
      t = e[11];
      e[11] = e[14];
      e[14] = t;
      return this;
    };
    e.setPosition = function (t, e, n) {
      var r = this.elements;
      if (t.isVector3) {
        r[12] = t.x;
        r[13] = t.y;
        r[14] = t.z;
      } else {
        r[12] = t;
        r[13] = e;
        r[14] = n;
      }
      return this;
    };
    e.getInverse = function (t, e) {
      if (void 0 !== e) {
        console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
      }
      var n = this.elements;
      var r = t.elements;
      var i = r[0];
      var a = r[1];
      var o = r[2];
      var s = r[3];
      var l = r[4];
      var u = r[5];
      var c = r[6];
      var h = r[7];
      var d = r[8];
      var f = r[9];
      var p = r[10];
      var m = r[11];
      var v = r[12];
      var g = r[13];
      var y = r[14];
      var b = r[15];
      var x = f * y * h - g * p * h + g * c * m - u * y * m - f * c * b + u * p * b;
      var _ = v * p * h - d * y * h - v * c * m + l * y * m + d * c * b - l * p * b;
      var w = d * g * h - v * f * h + v * u * m - l * g * m - d * u * b + l * f * b;
      var S = v * f * c - d * g * c - v * u * p + l * g * p + d * u * y - l * f * y;
      var E = i * x + a * _ + o * w + s * S;
      if (0 === E) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      var T = 1 / E;
      n[0] = x * T;
      n[1] = (g * p * s - f * y * s - g * o * m + a * y * m + f * o * b - a * p * b) * T;
      n[2] = (u * y * s - g * c * s + g * o * h - a * y * h - u * o * b + a * c * b) * T;
      n[3] = (f * c * s - u * p * s - f * o * h + a * p * h + u * o * m - a * c * m) * T;
      n[4] = _ * T;
      n[5] = (d * y * s - v * p * s + v * o * m - i * y * m - d * o * b + i * p * b) * T;
      n[6] = (v * c * s - l * y * s - v * o * h + i * y * h + l * o * b - i * c * b) * T;
      n[7] = (l * p * s - d * c * s + d * o * h - i * p * h - l * o * m + i * c * m) * T;
      n[8] = w * T;
      n[9] = (v * f * s - d * g * s - v * a * m + i * g * m + d * a * b - i * f * b) * T;
      n[10] = (l * g * s - v * u * s + v * a * h - i * g * h - l * a * b + i * u * b) * T;
      n[11] = (d * u * s - l * f * s - d * a * h + i * f * h + l * a * m - i * u * m) * T;
      n[12] = S * T;
      n[13] = (d * g * o - v * f * o + v * a * p - i * g * p - d * a * y + i * f * y) * T;
      n[14] = (v * u * o - l * g * o - v * a * c + i * g * c + l * a * y - i * u * y) * T;
      n[15] = (l * f * o - d * u * o + d * a * c - i * f * c - l * a * p + i * u * p) * T;
      return this;
    };
    e.scale = function (t) {
      var e = this.elements;
      var n = t.x;
      var r = t.y;
      var i = t.z;
      e[0] *= n;
      e[4] *= r;
      e[8] *= i;
      e[1] *= n;
      e[5] *= r;
      e[9] *= i;
      e[2] *= n;
      e[6] *= r;
      e[10] *= i;
      e[3] *= n;
      e[7] *= r;
      e[11] *= i;
      return this;
    };
    e.getMaxScaleOnAxis = function () {
      var t = this.elements;
      var e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
      var n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6];
      var r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, r));
    };
    e.makeTranslation = function (t, e, n) {
      this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1);
      return this;
    };
    e.makeRotationX = function (t) {
      var e = Math.cos(t);
      var n = Math.sin(t);
      this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1);
      return this;
    };
    e.makeRotationY = function (t) {
      var e = Math.cos(t);
      var n = Math.sin(t);
      this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1);
      return this;
    };
    e.makeRotationZ = function (t) {
      var e = Math.cos(t);
      var n = Math.sin(t);
      this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      return this;
    };
    e.makeRotationAxis = function (t, e) {
      var n = Math.cos(e);
      var r = Math.sin(e);
      var i = 1 - n;
      var a = t.x;
      var o = t.y;
      var s = t.z;
      var l = i * a;
      var u = i * o;
      this.set(l * a + n, l * o - r * s, l * s + r * o, 0, l * o + r * s, u * o + n, u * s - r * a, 0, l * s - r * o, u * s + r * a, i * s * s + n, 0, 0, 0, 0, 1);
      return this;
    };
    e.makeScale = function (t, e, n) {
      this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
      return this;
    };
    e.makeShear = function (t, e, n) {
      this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1);
      return this;
    };
    e.compose = function (t, e, n) {
      var r = this.elements;
      var i = e._x;
      var a = e._y;
      var o = e._z;
      var s = e._w;
      var l = i + i;
      var u = a + a;
      var c = o + o;
      var h = i * l;
      var d = i * u;
      var f = i * c;
      var p = a * u;
      var m = a * c;
      var v = o * c;
      var g = s * l;
      var y = s * u;
      var b = s * c;
      var x = n.x;
      var _ = n.y;
      var w = n.z;
      r[0] = (1 - (p + v)) * x;
      r[1] = (d + b) * x;
      r[2] = (f - y) * x;
      r[3] = 0;
      r[4] = (d - b) * _;
      r[5] = (1 - (h + v)) * _;
      r[6] = (m + g) * _;
      r[7] = 0;
      r[8] = (f + y) * w;
      r[9] = (m - g) * w;
      r[10] = (1 - (h + p)) * w;
      r[11] = 0;
      r[12] = t.x;
      r[13] = t.y;
      r[14] = t.z;
      r[15] = 1;
      return this;
    };
    e.decompose = function (t, e, n) {
      var r = this.elements;
      var i = Jt.set(r[0], r[1], r[2]).length();
      var a = Jt.set(r[4], r[5], r[6]).length();
      var o = Jt.set(r[8], r[9], r[10]).length();
      if (this.determinant() < 0) {
        i = -i;
      }
      t.x = r[12];
      t.y = r[13];
      t.z = r[14];
      $t.copy(this);
      var s = 1 / i;
      var l = 1 / a;
      var u = 1 / o;
      $t.elements[0] *= s;
      $t.elements[1] *= s;
      $t.elements[2] *= s;
      $t.elements[4] *= l;
      $t.elements[5] *= l;
      $t.elements[6] *= l;
      $t.elements[8] *= u;
      $t.elements[9] *= u;
      $t.elements[10] *= u;
      e.setFromRotationMatrix($t);
      n.x = i;
      n.y = a;
      n.z = o;
      return this;
    };
    e.makePerspective = function (t, e, n, r, i, a) {
      if (void 0 === a) {
        console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
      }
      var o = this.elements;
      var s = 2 * i / (e - t);
      var l = 2 * i / (n - r);
      var u = (e + t) / (e - t);
      var c = (n + r) / (n - r);
      var h = -(a + i) / (a - i);
      var d = -2 * a * i / (a - i);
      o[0] = s;
      o[4] = 0;
      o[8] = u;
      o[12] = 0;
      o[1] = 0;
      o[5] = l;
      o[9] = c;
      o[13] = 0;
      o[2] = 0;
      o[6] = 0;
      o[10] = h;
      o[14] = d;
      o[3] = 0;
      o[7] = 0;
      o[11] = -1;
      o[15] = 0;
      return this;
    };
    e.makeOrthographic = function (t, e, n, r, i, a) {
      var o = this.elements;
      var s = 1 / (e - t);
      var l = 1 / (n - r);
      var u = 1 / (a - i);
      var c = (e + t) * s;
      var h = (n + r) * l;
      var d = (a + i) * u;
      o[0] = 2 * s;
      o[4] = 0;
      o[8] = 0;
      o[12] = -c;
      o[1] = 0;
      o[5] = 2 * l;
      o[9] = 0;
      o[13] = -h;
      o[2] = 0;
      o[6] = 0;
      o[10] = -2 * u;
      o[14] = -d;
      o[3] = 0;
      o[7] = 0;
      o[11] = 0;
      o[15] = 1;
      return this;
    };
    e.equals = function (t) {
      for (e = this.elements, n = t.elements, r = 0, void 0; r < 16; r++) {
        var e;
        var n;
        var r;
        if (e[r] !== n[r]) return !1;
      }
      return !0;
    };
    e.fromArray = function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      for (var n = 0; n < 16; n++) this.elements[n] = t[n + e];
      return this;
    };
    e.toArray = function (t, e) {
      if (void 0 === t) {
        t = [];
      }
      if (void 0 === e) {
        e = 0;
      }
      var n = this.elements;
      t[e] = n[0];
      t[e + 1] = n[1];
      t[e + 2] = n[2];
      t[e + 3] = n[3];
      t[e + 4] = n[4];
      t[e + 5] = n[5];
      t[e + 6] = n[6];
      t[e + 7] = n[7];
      t[e + 8] = n[8];
      t[e + 9] = n[9];
      t[e + 10] = n[10];
      t[e + 11] = n[11];
      t[e + 12] = n[12];
      t[e + 13] = n[13];
      t[e + 14] = n[14];
      t[e + 15] = n[15];
      return t;
    };
    return t;
  }();
  var Jt = new wt();
  var $t = new Kt();
  var Qt = new wt(0, 0, 0);
  var te = new wt(1, 1, 1);
  var ee = new wt();
  var ne = new wt();
  var re = new wt();
  var ie = function () {
    function t(e, n, r, i) {
      if (void 0 === e) {
        e = 0;
      }
      if (void 0 === n) {
        n = 0;
      }
      if (void 0 === r) {
        r = 0;
      }
      if (void 0 === i) {
        i = t.DefaultOrder;
      }
      Object.defineProperty(this, "isEuler", {
        value: !0
      });
      this._x = e;
      this._y = n;
      this._z = r;
      this._order = i;
    }
    var e = t.prototype;
    e.set = function (t, e, n, r) {
      this._x = t;
      this._y = e;
      this._z = n;
      this._order = r || this._order;
      this._onChangeCallback();
      return this;
    };
    e.clone = function () {
      return new this.constructor(this._x, this._y, this._z, this._order);
    };
    e.copy = function (t) {
      this._x = t._x;
      this._y = t._y;
      this._z = t._z;
      this._order = t._order;
      this._onChangeCallback();
      return this;
    };
    e.setFromRotationMatrix = function (t, e, n) {
      var r = st.clamp;
      var i = t.elements;
      var a = i[0];
      var o = i[4];
      var s = i[8];
      var l = i[1];
      var u = i[5];
      var c = i[9];
      var h = i[2];
      var d = i[6];
      var f = i[10];
      switch (e = e || this._order) {
        case "XYZ":
          this._y = Math.asin(r(s, -1, 1));
          if (Math.abs(s) < 0.9999999) {
            this._x = Math.atan2(-c, f);
            this._z = Math.atan2(-o, a);
          } else {
            this._x = Math.atan2(d, u);
            this._z = 0;
          }
          break;
        case "YXZ":
          this._x = Math.asin(-r(c, -1, 1));
          if (Math.abs(c) < 0.9999999) {
            this._y = Math.atan2(s, f);
            this._z = Math.atan2(l, u);
          } else {
            this._y = Math.atan2(-h, a);
            this._z = 0;
          }
          break;
        case "ZXY":
          this._x = Math.asin(r(d, -1, 1));
          if (Math.abs(d) < 0.9999999) {
            this._y = Math.atan2(-h, f);
            this._z = Math.atan2(-o, u);
          } else {
            this._y = 0;
            this._z = Math.atan2(l, a);
          }
          break;
        case "ZYX":
          this._y = Math.asin(-r(h, -1, 1));
          if (Math.abs(h) < 0.9999999) {
            this._x = Math.atan2(d, f);
            this._z = Math.atan2(l, a);
          } else {
            this._x = 0;
            this._z = Math.atan2(-o, u);
          }
          break;
        case "YZX":
          this._z = Math.asin(r(l, -1, 1));
          if (Math.abs(l) < 0.9999999) {
            this._x = Math.atan2(-c, u);
            this._y = Math.atan2(-h, a);
          } else {
            this._x = 0;
            this._y = Math.atan2(s, f);
          }
          break;
        case "XZY":
          this._z = Math.asin(-r(o, -1, 1));
          if (Math.abs(o) < 0.9999999) {
            this._x = Math.atan2(d, u);
            this._y = Math.atan2(s, a);
          } else {
            this._x = Math.atan2(-c, f);
            this._y = 0;
          }
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
      }
      this._order = e;
      if (!1 !== n) {
        this._onChangeCallback();
      }
      return this;
    };
    e.setFromQuaternion = function (t, e, n) {
      ae.makeRotationFromQuaternion(t);
      return this.setFromRotationMatrix(ae, e, n);
    };
    e.setFromVector3 = function (t, e) {
      return this.set(t.x, t.y, t.z, e || this._order);
    };
    e.reorder = function (t) {
      oe.setFromEuler(this);
      return this.setFromQuaternion(oe, t);
    };
    e.equals = function (t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
    };
    e.fromArray = function (t) {
      this._x = t[0];
      this._y = t[1];
      this._z = t[2];
      if (void 0 !== t[3]) {
        this._order = t[3];
      }
      this._onChangeCallback();
      return this;
    };
    e.toArray = function (t, e) {
      if (void 0 === t) {
        t = [];
      }
      if (void 0 === e) {
        e = 0;
      }
      t[e] = this._x;
      t[e + 1] = this._y;
      t[e + 2] = this._z;
      t[e + 3] = this._order;
      return t;
    };
    e.toVector3 = function (t) {
      return t ? t.set(this._x, this._y, this._z) : new wt(this._x, this._y, this._z);
    };
    e._onChange = function (t) {
      this._onChangeCallback = t;
      return this;
    };
    e._onChangeCallback = function () {};
    ut(t, [{
      key: "x",
      get: function () {
        return this._x;
      },
      set: function (t) {
        this._x = t;
        this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function () {
        return this._y;
      },
      set: function (t) {
        this._y = t;
        this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function () {
        return this._z;
      },
      set: function (t) {
        this._z = t;
        this._onChangeCallback();
      }
    }, {
      key: "order",
      get: function () {
        return this._order;
      },
      set: function (t) {
        this._order = t;
        this._onChangeCallback();
      }
    }]);
    return t;
  }();
  ie.DefaultOrder = "XYZ";
  ie.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
  var ae = new Kt();
  var oe = new _t();
  var se = function () {
    function t() {
      this.mask = 1;
    }
    var e = t.prototype;
    e.set = function (t) {
      this.mask = 1 << t | 0;
    };
    e.enable = function (t) {
      this.mask |= 1 << t | 0;
    };
    e.enableAll = function () {
      this.mask = -1;
    };
    e.toggle = function (t) {
      this.mask ^= 1 << t | 0;
    };
    e.disable = function (t) {
      this.mask &= ~(1 << t | 0);
    };
    e.disableAll = function () {
      this.mask = 0;
    };
    e.test = function (t) {
      return 0 != (this.mask & t.mask);
    };
    return t;
  }();
  var le = 0;
  var ue = new wt();
  var ce = new _t();
  var he = new Kt();
  var de = new wt();
  var fe = new wt();
  var pe = new wt();
  var me = new _t();
  var ve = new wt(1, 0, 0);
  var ge = new wt(0, 1, 0);
  var ye = new wt(0, 0, 1);
  var be = {
    type: "added"
  };
  var xe = {
    type: "removed"
  };
  function _e() {
    Object.defineProperty(this, "id", {
      value: le++
    });
    this.uuid = st.generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = _e.DefaultUp.clone();
    var t = new wt();
    var e = new ie();
    var n = new _t();
    var r = new wt(1, 1, 1);
    e._onChange(function () {
      n.setFromEuler(e, !1);
    });
    n._onChange(function () {
      e.setFromQuaternion(n, void 0, !1);
    });
    Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new Kt()
      },
      normalMatrix: {
        value: new pt()
      }
    });
    this.matrix = new Kt();
    this.matrixWorld = new Kt();
    this.matrixAutoUpdate = _e.DefaultMatrixAutoUpdate;
    this.matrixWorldNeedsUpdate = !1;
    this.layers = new se();
    this.visible = !0;
    this.castShadow = !1;
    this.receiveShadow = !1;
    this.frustumCulled = !0;
    this.renderOrder = 0;
    this.userData = {};
  }
  _e.DefaultUp = new wt(0, 1, 0);
  _e.DefaultMatrixAutoUpdate = !0;
  _e.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: _e,
    isObject3D: !0,
    onBeforeRender: function () {},
    onAfterRender: function () {},
    applyMatrix4: function (t) {
      if (this.matrixAutoUpdate) {
        this.updateMatrix();
      }
      this.matrix.premultiply(t);
      this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    applyQuaternion: function (t) {
      this.quaternion.premultiply(t);
      return this;
    },
    setRotationFromAxisAngle: function (t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    },
    setRotationFromEuler: function (t) {
      this.quaternion.setFromEuler(t, !0);
    },
    setRotationFromMatrix: function (t) {
      this.quaternion.setFromRotationMatrix(t);
    },
    setRotationFromQuaternion: function (t) {
      this.quaternion.copy(t);
    },
    rotateOnAxis: function (t, e) {
      ce.setFromAxisAngle(t, e);
      this.quaternion.multiply(ce);
      return this;
    },
    rotateOnWorldAxis: function (t, e) {
      ce.setFromAxisAngle(t, e);
      this.quaternion.premultiply(ce);
      return this;
    },
    rotateX: function (t) {
      return this.rotateOnAxis(ve, t);
    },
    rotateY: function (t) {
      return this.rotateOnAxis(ge, t);
    },
    rotateZ: function (t) {
      return this.rotateOnAxis(ye, t);
    },
    translateOnAxis: function (t, e) {
      ue.copy(t).applyQuaternion(this.quaternion);
      this.position.add(ue.multiplyScalar(e));
      return this;
    },
    translateX: function (t) {
      return this.translateOnAxis(ve, t);
    },
    translateY: function (t) {
      return this.translateOnAxis(ge, t);
    },
    translateZ: function (t) {
      return this.translateOnAxis(ye, t);
    },
    localToWorld: function (t) {
      return t.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: function (t) {
      return t.applyMatrix4(he.getInverse(this.matrixWorld));
    },
    lookAt: function (t, e, n) {
      if (t.isVector3) {
        de.copy(t);
      } else {
        de.set(t, e, n);
      }
      var r = this.parent;
      this.updateWorldMatrix(!0, !1);
      fe.setFromMatrixPosition(this.matrixWorld);
      if (this.isCamera || this.isLight) {
        he.lookAt(fe, de, this.up);
      } else {
        he.lookAt(de, fe, this.up);
      }
      this.quaternion.setFromRotationMatrix(he);
      if (r) {
        he.extractRotation(r.matrixWorld);
        ce.setFromRotationMatrix(he);
        this.quaternion.premultiply(ce.inverse());
      }
    },
    add: function (t) {
      if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(be)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
    },
    remove: function (t) {
      if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this;
      }
      var n = this.children.indexOf(t);
      if (-1 !== n) {
        t.parent = null;
        this.children.splice(n, 1);
        t.dispatchEvent(xe);
      }
      return this;
    },
    clear: function () {
      for (var t = 0; t < this.children.length; t++) {
        var e = this.children[t];
        e.parent = null;
        e.dispatchEvent(xe);
      }
      this.children.length = 0;
      return this;
    },
    attach: function (t) {
      this.updateWorldMatrix(!0, !1);
      he.getInverse(this.matrixWorld);
      if (null !== t.parent) {
        t.parent.updateWorldMatrix(!0, !1);
        he.multiply(t.parent.matrixWorld);
      }
      t.applyMatrix4(he);
      t.updateWorldMatrix(!1, !1);
      this.add(t);
      return this;
    },
    getObjectById: function (t) {
      return this.getObjectByProperty("id", t);
    },
    getObjectByName: function (t) {
      return this.getObjectByProperty("name", t);
    },
    getObjectByProperty: function (t, e) {
      if (this[t] === e) return this;
      for (n = 0, r = this.children.length, void 0; n < r; n++) {
        var n;
        var r;
        var i = this.children[n].getObjectByProperty(t, e);
        if (void 0 !== i) return i;
      }
    },
    getWorldPosition: function (t) {
      if (void 0 === t) {
        console.warn("THREE.Object3D: .getWorldPosition() target is now required");
        t = new wt();
      }
      this.updateWorldMatrix(!0, !1);
      return t.setFromMatrixPosition(this.matrixWorld);
    },
    getWorldQuaternion: function (t) {
      if (void 0 === t) {
        console.warn("THREE.Object3D: .getWorldQuaternion() target is now required");
        t = new _t();
      }
      this.updateWorldMatrix(!0, !1);
      this.matrixWorld.decompose(fe, t, pe);
      return t;
    },
    getWorldScale: function (t) {
      if (void 0 === t) {
        console.warn("THREE.Object3D: .getWorldScale() target is now required");
        t = new wt();
      }
      this.updateWorldMatrix(!0, !1);
      this.matrixWorld.decompose(fe, me, t);
      return t;
    },
    getWorldDirection: function (t) {
      if (void 0 === t) {
        console.warn("THREE.Object3D: .getWorldDirection() target is now required");
        t = new wt();
      }
      this.updateWorldMatrix(!0, !1);
      var e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    },
    raycast: function () {},
    traverse: function (t) {
      t(this);
      for (e = this.children, n = 0, r = e.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        e[n].traverse(t);
      }
    },
    traverseVisible: function (t) {
      if (!1 !== this.visible) {
        t(this);
        for (e = this.children, n = 0, r = e.length, void 0; n < r; n++) {
          var e;
          var n;
          var r;
          e[n].traverseVisible(t);
        }
      }
    },
    traverseAncestors: function (t) {
      var e = this.parent;
      if (null !== e) {
        t(e);
        e.traverseAncestors(t);
      }
    },
    updateMatrix: function () {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function (t) {
      if (this.matrixAutoUpdate) {
        this.updateMatrix();
      }
      if (this.matrixWorldNeedsUpdate || t) {
        if (null === this.parent) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
        this.matrixWorldNeedsUpdate = !1;
        t = !0;
      }
      for (e = this.children, n = 0, r = e.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        e[n].updateMatrixWorld(t);
      }
    },
    updateWorldMatrix: function (t, e) {
      var n = this.parent;
      if (!0 === t && null !== n) {
        n.updateWorldMatrix(!0, !1);
      }
      if (this.matrixAutoUpdate) {
        this.updateMatrix();
      }
      if (null === this.parent) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
      if (!0 === e) for (var r = this.children, i = 0, a = r.length; i < a; i++) r[i].updateWorldMatrix(!1, !0);
    },
    toJSON: function (t) {
      var e = void 0 === t || "string" == typeof t;
      var n = {};
      if (e) {
        t = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {}
        };
        n.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON"
        };
      }
      var r = {};
      function i(e, n) {
        if (void 0 === e[n.uuid]) {
          e[n.uuid] = n.toJSON(t);
        }
        return n.uuid;
      }
      r.uuid = this.uuid;
      r.type = this.type;
      if ("" !== this.name) {
        r.name = this.name;
      }
      if (!0 === this.castShadow) {
        r.castShadow = !0;
      }
      if (!0 === this.receiveShadow) {
        r.receiveShadow = !0;
      }
      if (!1 === this.visible) {
        r.visible = !1;
      }
      if (!1 === this.frustumCulled) {
        r.frustumCulled = !1;
      }
      if (0 !== this.renderOrder) {
        r.renderOrder = this.renderOrder;
      }
      if ("{}" !== JSON.stringify(this.userData)) {
        r.userData = this.userData;
      }
      r.layers = this.layers.mask;
      r.matrix = this.matrix.toArray();
      if (!1 === this.matrixAutoUpdate) {
        r.matrixAutoUpdate = !1;
      }
      if (this.isInstancedMesh) {
        r.type = "InstancedMesh";
        r.count = this.count;
        r.instanceMatrix = this.instanceMatrix.toJSON();
      }
      if (this.isMesh || this.isLine || this.isPoints) {
        r.geometry = i(t.geometries, this.geometry);
        var a = this.geometry.parameters;
        if (void 0 !== a && void 0 !== a.shapes) {
          var o = a.shapes;
          if (Array.isArray(o)) for (var s = 0, l = o.length; s < l; s++) {
            var u = o[s];
            i(t.shapes, u);
          } else i(t.shapes, o);
        }
      }
      if (void 0 !== this.material) if (Array.isArray(this.material)) {
        for (c = [], h = 0, d = this.material.length, void 0; h < d; h++) {
          var c;
          var h;
          var d;
          c.push(i(t.materials, this.material[h]));
        }
        r.material = c;
      } else r.material = i(t.materials, this.material);
      if (this.children.length > 0) {
        r.children = [];
        for (var f = 0; f < this.children.length; f++) r.children.push(this.children[f].toJSON(t).object);
      }
      if (e) {
        var p = b(t.geometries);
        var m = b(t.materials);
        var v = b(t.textures);
        var g = b(t.images);
        var y = b(t.shapes);
        if (p.length > 0) {
          n.geometries = p;
        }
        if (m.length > 0) {
          n.materials = m;
        }
        if (v.length > 0) {
          n.textures = v;
        }
        if (g.length > 0) {
          n.images = g;
        }
        if (y.length > 0) {
          n.shapes = y;
        }
      }
      n.object = r;
      return n;
      function b(t) {
        var e = [];
        for (var n in t) {
          var r = t[n];
          delete r.metadata;
          e.push(r);
        }
        return e;
      }
    },
    clone: function (t) {
      return new this.constructor().copy(this, t);
    },
    copy: function (t, e) {
      if (void 0 === e) {
        e = !0;
      }
      this.name = t.name;
      this.up.copy(t.up);
      this.position.copy(t.position);
      this.rotation.order = t.rotation.order;
      this.quaternion.copy(t.quaternion);
      this.scale.copy(t.scale);
      this.matrix.copy(t.matrix);
      this.matrixWorld.copy(t.matrixWorld);
      this.matrixAutoUpdate = t.matrixAutoUpdate;
      this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate;
      this.layers.mask = t.layers.mask;
      this.visible = t.visible;
      this.castShadow = t.castShadow;
      this.receiveShadow = t.receiveShadow;
      this.frustumCulled = t.frustumCulled;
      this.renderOrder = t.renderOrder;
      this.userData = JSON.parse(JSON.stringify(t.userData));
      if (!0 === e) for (var n = 0; n < t.children.length; n++) {
        var r = t.children[n];
        this.add(r.clone());
      }
      return this;
    }
  });
  var we = new wt();
  var Se = new wt();
  var Ee = new pt();
  var Te = function () {
    function t(t, e) {
      Object.defineProperty(this, "isPlane", {
        value: !0
      });
      this.normal = void 0 !== t ? t : new wt(1, 0, 0);
      this.constant = void 0 !== e ? e : 0;
    }
    var e = t.prototype;
    e.set = function (t, e) {
      this.normal.copy(t);
      this.constant = e;
      return this;
    };
    e.setComponents = function (t, e, n, r) {
      this.normal.set(t, e, n);
      this.constant = r;
      return this;
    };
    e.setFromNormalAndCoplanarPoint = function (t, e) {
      this.normal.copy(t);
      this.constant = -e.dot(this.normal);
      return this;
    };
    e.setFromCoplanarPoints = function (t, e, n) {
      var r = we.subVectors(n, e).cross(Se.subVectors(t, e)).normalize();
      this.setFromNormalAndCoplanarPoint(r, t);
      return this;
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.normal.copy(t.normal);
      this.constant = t.constant;
      return this;
    };
    e.normalize = function () {
      var t = 1 / this.normal.length();
      this.normal.multiplyScalar(t);
      this.constant *= t;
      return this;
    };
    e.negate = function () {
      this.constant *= -1;
      this.normal.negate();
      return this;
    };
    e.distanceToPoint = function (t) {
      return this.normal.dot(t) + this.constant;
    };
    e.distanceToSphere = function (t) {
      return this.distanceToPoint(t.center) - t.radius;
    };
    e.projectPoint = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Plane: .projectPoint() target is now required");
        e = new wt();
      }
      return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
    };
    e.intersectLine = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Plane: .intersectLine() target is now required");
        e = new wt();
      }
      var n = t.delta(we);
      var r = this.normal.dot(n);
      if (0 === r) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
      var i = -(t.start.dot(this.normal) + this.constant) / r;
      return i < 0 || i > 1 ? void 0 : e.copy(n).multiplyScalar(i).add(t.start);
    };
    e.intersectsLine = function (t) {
      var e = this.distanceToPoint(t.start);
      var n = this.distanceToPoint(t.end);
      return e < 0 && n > 0 || n < 0 && e > 0;
    };
    e.intersectsBox = function (t) {
      return t.intersectsPlane(this);
    };
    e.intersectsSphere = function (t) {
      return t.intersectsPlane(this);
    };
    e.coplanarPoint = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Plane: .coplanarPoint() target is now required");
        t = new wt();
      }
      return t.copy(this.normal).multiplyScalar(-this.constant);
    };
    e.applyMatrix4 = function (t, e) {
      var n = e || Ee.getNormalMatrix(t);
      var r = this.coplanarPoint(we).applyMatrix4(t);
      var i = this.normal.applyMatrix3(n).normalize();
      this.constant = -r.dot(i);
      return this;
    };
    e.translate = function (t) {
      this.constant -= t.dot(this.normal);
      return this;
    };
    e.equals = function (t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    };
    return t;
  }();
  var Me = new wt();
  var Ae = new wt();
  var Le = new wt();
  var Ce = new wt();
  var Pe = new wt();
  var Re = new wt();
  var Oe = new wt();
  var Ie = new wt();
  var De = new wt();
  var ke = new wt();
  var Ne = function () {
    function t(t, e, n) {
      this.a = void 0 !== t ? t : new wt();
      this.b = void 0 !== e ? e : new wt();
      this.c = void 0 !== n ? n : new wt();
    }
    t.getNormal = function (t, e, n, r) {
      if (void 0 === r) {
        console.warn("THREE.Triangle: .getNormal() target is now required");
        r = new wt();
      }
      r.subVectors(n, e);
      Me.subVectors(t, e);
      r.cross(Me);
      var i = r.lengthSq();
      return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
    };
    t.getBarycoord = function (t, e, n, r, i) {
      Me.subVectors(r, e);
      Ae.subVectors(n, e);
      Le.subVectors(t, e);
      var a = Me.dot(Me);
      var o = Me.dot(Ae);
      var s = Me.dot(Le);
      var l = Ae.dot(Ae);
      var u = Ae.dot(Le);
      var c = a * l - o * o;
      if (void 0 === i) {
        console.warn("THREE.Triangle: .getBarycoord() target is now required");
        i = new wt();
      }
      if (0 === c) return i.set(-2, -1, -1);
      var h = 1 / c;
      var d = (l * s - o * u) * h;
      var f = (a * u - o * s) * h;
      return i.set(1 - d - f, f, d);
    };
    t.containsPoint = function (t, e, n, r) {
      this.getBarycoord(t, e, n, r, Ce);
      return Ce.x >= 0 && Ce.y >= 0 && Ce.x + Ce.y <= 1;
    };
    t.getUV = function (t, e, n, r, i, a, o, s) {
      this.getBarycoord(t, e, n, r, Ce);
      s.set(0, 0);
      s.addScaledVector(i, Ce.x);
      s.addScaledVector(a, Ce.y);
      s.addScaledVector(o, Ce.z);
      return s;
    };
    t.isFrontFacing = function (t, e, n, r) {
      Me.subVectors(n, e);
      Ae.subVectors(t, e);
      return Me.cross(Ae).dot(r) < 0;
    };
    var e = t.prototype;
    e.set = function (t, e, n) {
      this.a.copy(t);
      this.b.copy(e);
      this.c.copy(n);
      return this;
    };
    e.setFromPointsAndIndices = function (t, e, n, r) {
      this.a.copy(t[e]);
      this.b.copy(t[n]);
      this.c.copy(t[r]);
      return this;
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.a.copy(t.a);
      this.b.copy(t.b);
      this.c.copy(t.c);
      return this;
    };
    e.getArea = function () {
      Me.subVectors(this.c, this.b);
      Ae.subVectors(this.a, this.b);
      return 0.5 * Me.cross(Ae).length();
    };
    e.getMidpoint = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Triangle: .getMidpoint() target is now required");
        t = new wt();
      }
      return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    };
    e.getNormal = function (e) {
      return t.getNormal(this.a, this.b, this.c, e);
    };
    e.getPlane = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Triangle: .getPlane() target is now required");
        t = new Te();
      }
      return t.setFromCoplanarPoints(this.a, this.b, this.c);
    };
    e.getBarycoord = function (e, n) {
      return t.getBarycoord(e, this.a, this.b, this.c, n);
    };
    e.getUV = function (e, n, r, i, a) {
      return t.getUV(e, this.a, this.b, this.c, n, r, i, a);
    };
    e.containsPoint = function (e) {
      return t.containsPoint(e, this.a, this.b, this.c);
    };
    e.isFrontFacing = function (e) {
      return t.isFrontFacing(this.a, this.b, this.c, e);
    };
    e.intersectsBox = function (t) {
      return t.intersectsTriangle(this);
    };
    e.closestPointToPoint = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Triangle: .closestPointToPoint() target is now required");
        e = new wt();
      }
      var n;
      var r;
      var i = this.a;
      var a = this.b;
      var o = this.c;
      Pe.subVectors(a, i);
      Re.subVectors(o, i);
      Ie.subVectors(t, i);
      var s = Pe.dot(Ie);
      var l = Re.dot(Ie);
      if (s <= 0 && l <= 0) return e.copy(i);
      De.subVectors(t, a);
      var u = Pe.dot(De);
      var c = Re.dot(De);
      if (u >= 0 && c <= u) return e.copy(a);
      var h = s * c - u * l;
      if (h <= 0 && s >= 0 && u <= 0) {
        n = s / (s - u);
        return e.copy(i).addScaledVector(Pe, n);
      }
      ke.subVectors(t, o);
      var d = Pe.dot(ke);
      var f = Re.dot(ke);
      if (f >= 0 && d <= f) return e.copy(o);
      var p = d * l - s * f;
      if (p <= 0 && l >= 0 && f <= 0) {
        r = l / (l - f);
        return e.copy(i).addScaledVector(Re, r);
      }
      var m = u * f - d * c;
      if (m <= 0 && c - u >= 0 && d - f >= 0) {
        Oe.subVectors(o, a);
        r = (c - u) / (c - u + (d - f));
        return e.copy(a).addScaledVector(Oe, r);
      }
      var v = 1 / (m + p + h);
      n = p * v;
      r = h * v;
      return e.copy(i).addScaledVector(Pe, n).addScaledVector(Re, r);
    };
    e.equals = function (t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    };
    return t;
  }();
  var Be = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  var Fe = {
    h: 0,
    s: 0,
    l: 0
  };
  var Ue = {
    h: 0,
    s: 0,
    l: 0
  };
  function ze(t, e, n) {
    if (n < 0) {
      n += 1;
    }
    if (n > 1) {
      n -= 1;
    }
    return n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
  }
  function Ge(t) {
    return t < 0.04045 ? 0.0773993808 * t : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
  }
  function He(t) {
    return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
  }
  var je = function () {
    function t(t, e, n) {
      Object.defineProperty(this, "isColor", {
        value: !0
      });
      return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
    }
    var e = t.prototype;
    e.set = function (t) {
      if (t && t.isColor) {
        this.copy(t);
      } else {
        if ("number" == typeof t) {
          this.setHex(t);
        } else {
          if ("string" == typeof t) {
            this.setStyle(t);
          }
        }
      }
      return this;
    };
    e.setScalar = function (t) {
      this.r = t;
      this.g = t;
      this.b = t;
      return this;
    };
    e.setHex = function (t) {
      t = Math.floor(t);
      this.r = (t >> 16 & 255) / 255;
      this.g = (t >> 8 & 255) / 255;
      this.b = (255 & t) / 255;
      return this;
    };
    e.setRGB = function (t, e, n) {
      this.r = t;
      this.g = e;
      this.b = n;
      return this;
    };
    e.setHSL = function (t, e, n) {
      t = st.euclideanModulo(t, 1);
      e = st.clamp(e, 0, 1);
      n = st.clamp(n, 0, 1);
      if (0 === e) this.r = this.g = this.b = n;else {
        var r = n <= 0.5 ? n * (1 + e) : n + e - n * e,
          i = 2 * n - r;
        this.r = ze(i, r, t + 1 / 3), this.g = ze(i, r, t), this.b = ze(i, r, t - 1 / 3);
      }
      return this;
    };
    e.setStyle = function (t) {
      function e(e) {
        if (void 0 !== e && parseFloat(e) < 1) {
          console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
        }
      }
      var n;
      if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
        var r;
        var i = n[1];
        var a = n[2];
        switch (i) {
          case "rgb":
          case "rgba":
            if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              this.r = Math.min(255, parseInt(r[1], 10)) / 255;
              this.g = Math.min(255, parseInt(r[2], 10)) / 255;
              this.b = Math.min(255, parseInt(r[3], 10)) / 255;
              e(r[5]);
              return this;
            }
            if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              this.r = Math.min(100, parseInt(r[1], 10)) / 100;
              this.g = Math.min(100, parseInt(r[2], 10)) / 100;
              this.b = Math.min(100, parseInt(r[3], 10)) / 100;
              e(r[5]);
              return this;
            }
            break;
          case "hsl":
          case "hsla":
            if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              var o = parseFloat(r[1]) / 360;
              var s = parseInt(r[2], 10) / 100;
              var l = parseInt(r[3], 10) / 100;
              e(r[5]);
              return this.setHSL(o, s, l);
            }
        }
      } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
        var u = n[1];
        var c = u.length;
        if (3 === c) {
          this.r = parseInt(u.charAt(0) + u.charAt(0), 16) / 255;
          this.g = parseInt(u.charAt(1) + u.charAt(1), 16) / 255;
          this.b = parseInt(u.charAt(2) + u.charAt(2), 16) / 255;
          return this;
        }
        if (6 === c) {
          this.r = parseInt(u.charAt(0) + u.charAt(1), 16) / 255;
          this.g = parseInt(u.charAt(2) + u.charAt(3), 16) / 255;
          this.b = parseInt(u.charAt(4) + u.charAt(5), 16) / 255;
          return this;
        }
      }
      return t && t.length > 0 ? this.setColorName(t) : this;
    };
    e.setColorName = function (t) {
      var e = Be[t];
      if (void 0 !== e) {
        this.setHex(e);
      } else {
        console.warn("THREE.Color: Unknown color " + t);
      }
      return this;
    };
    e.clone = function () {
      return new this.constructor(this.r, this.g, this.b);
    };
    e.copy = function (t) {
      this.r = t.r;
      this.g = t.g;
      this.b = t.b;
      return this;
    };
    e.copyGammaToLinear = function (t, e) {
      if (void 0 === e) {
        e = 2;
      }
      this.r = Math.pow(t.r, e);
      this.g = Math.pow(t.g, e);
      this.b = Math.pow(t.b, e);
      return this;
    };
    e.copyLinearToGamma = function (t, e) {
      if (void 0 === e) {
        e = 2;
      }
      var n = e > 0 ? 1 / e : 1;
      this.r = Math.pow(t.r, n);
      this.g = Math.pow(t.g, n);
      this.b = Math.pow(t.b, n);
      return this;
    };
    e.convertGammaToLinear = function (t) {
      this.copyGammaToLinear(this, t);
      return this;
    };
    e.convertLinearToGamma = function (t) {
      this.copyLinearToGamma(this, t);
      return this;
    };
    e.copySRGBToLinear = function (t) {
      this.r = Ge(t.r);
      this.g = Ge(t.g);
      this.b = Ge(t.b);
      return this;
    };
    e.copyLinearToSRGB = function (t) {
      this.r = He(t.r);
      this.g = He(t.g);
      this.b = He(t.b);
      return this;
    };
    e.convertSRGBToLinear = function () {
      this.copySRGBToLinear(this);
      return this;
    };
    e.convertLinearToSRGB = function () {
      this.copyLinearToSRGB(this);
      return this;
    };
    e.getHex = function () {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    };
    e.getHexString = function () {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    };
    e.getHSL = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Color: .getHSL() target is now required");
        t = {
          h: 0,
          s: 0,
          l: 0
        };
      }
      var e;
      var n;
      var r = this.r;
      var i = this.g;
      var a = this.b;
      var o = Math.max(r, i, a);
      var s = Math.min(r, i, a);
      var l = (s + o) / 2;
      if (s === o) {
        e = 0;
        n = 0;
      } else {
        var u = o - s;
        switch (n = l <= 0.5 ? u / (o + s) : u / (2 - o - s), o) {
          case r:
            e = (i - a) / u + (i < a ? 6 : 0);
            break;
          case i:
            e = (a - r) / u + 2;
            break;
          case a:
            e = (r - i) / u + 4;
        }
        e /= 6;
      }
      t.h = e;
      t.s = n;
      t.l = l;
      return t;
    };
    e.getStyle = function () {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
    };
    e.offsetHSL = function (t, e, n) {
      this.getHSL(Fe);
      Fe.h += t;
      Fe.s += e;
      Fe.l += n;
      this.setHSL(Fe.h, Fe.s, Fe.l);
      return this;
    };
    e.add = function (t) {
      this.r += t.r;
      this.g += t.g;
      this.b += t.b;
      return this;
    };
    e.addColors = function (t, e) {
      this.r = t.r + e.r;
      this.g = t.g + e.g;
      this.b = t.b + e.b;
      return this;
    };
    e.addScalar = function (t) {
      this.r += t;
      this.g += t;
      this.b += t;
      return this;
    };
    e.sub = function (t) {
      this.r = Math.max(0, this.r - t.r);
      this.g = Math.max(0, this.g - t.g);
      this.b = Math.max(0, this.b - t.b);
      return this;
    };
    e.multiply = function (t) {
      this.r *= t.r;
      this.g *= t.g;
      this.b *= t.b;
      return this;
    };
    e.multiplyScalar = function (t) {
      this.r *= t;
      this.g *= t;
      this.b *= t;
      return this;
    };
    e.lerp = function (t, e) {
      this.r += (t.r - this.r) * e;
      this.g += (t.g - this.g) * e;
      this.b += (t.b - this.b) * e;
      return this;
    };
    e.lerpHSL = function (t, e) {
      this.getHSL(Fe);
      t.getHSL(Ue);
      var n = st.lerp(Fe.h, Ue.h, e);
      var r = st.lerp(Fe.s, Ue.s, e);
      var i = st.lerp(Fe.l, Ue.l, e);
      this.setHSL(n, r, i);
      return this;
    };
    e.equals = function (t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    };
    e.fromArray = function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      this.r = t[e];
      this.g = t[e + 1];
      this.b = t[e + 2];
      return this;
    };
    e.toArray = function (t, e) {
      if (void 0 === t) {
        t = [];
      }
      if (void 0 === e) {
        e = 0;
      }
      t[e] = this.r;
      t[e + 1] = this.g;
      t[e + 2] = this.b;
      return t;
    };
    e.fromBufferAttribute = function (t, e) {
      this.r = t.getX(e);
      this.g = t.getY(e);
      this.b = t.getZ(e);
      if (!0 === t.normalized) {
        this.r /= 255;
        this.g /= 255;
        this.b /= 255;
      }
      return this;
    };
    e.toJSON = function () {
      return this.getHex();
    };
    return t;
  }();
  je.NAMES = Be;
  je.prototype.r = 1;
  je.prototype.g = 1;
  je.prototype.b = 1;
  var Ve = function () {
    function t(t, e, n, r, i, a) {
      this.a = t;
      this.b = e;
      this.c = n;
      this.normal = r && r.isVector3 ? r : new wt();
      this.vertexNormals = Array.isArray(r) ? r : [];
      this.color = i && i.isColor ? i : new je();
      this.vertexColors = Array.isArray(i) ? i : [];
      this.materialIndex = void 0 !== a ? a : 0;
    }
    var e = t.prototype;
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.a = t.a;
      this.b = t.b;
      this.c = t.c;
      this.normal.copy(t.normal);
      this.color.copy(t.color);
      this.materialIndex = t.materialIndex;
      for (e = 0, n = t.vertexNormals.length, void 0; e < n; e++) {
        var e;
        var n;
        this.vertexNormals[e] = t.vertexNormals[e].clone();
      }
      for (r = 0, i = t.vertexColors.length, void 0; r < i; r++) {
        var r;
        var i;
        this.vertexColors[r] = t.vertexColors[r].clone();
      }
      return this;
    };
    return t;
  }();
  var We = 0;
  function qe() {
    Object.defineProperty(this, "id", {
      value: We++
    });
    this.uuid = st.generateUUID();
    this.name = "";
    this.type = "Material";
    this.fog = !0;
    this.blending = 1;
    this.side = 0;
    this.flatShading = !1;
    this.vertexColors = !1;
    this.opacity = 1;
    this.transparent = !1;
    this.blendSrc = 204;
    this.blendDst = 205;
    this.blendEquation = e;
    this.blendSrcAlpha = null;
    this.blendDstAlpha = null;
    this.blendEquationAlpha = null;
    this.depthFunc = 3;
    this.depthTest = !0;
    this.depthWrite = !0;
    this.stencilWriteMask = 255;
    this.stencilFunc = 519;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilFail = Q;
    this.stencilZFail = Q;
    this.stencilZPass = Q;
    this.stencilWrite = !1;
    this.clippingPlanes = null;
    this.clipIntersection = !1;
    this.clipShadows = !1;
    this.shadowSide = null;
    this.colorWrite = !0;
    this.precision = null;
    this.polygonOffset = !1;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;
    this.dithering = !1;
    this.alphaTest = 0;
    this.premultipliedAlpha = !1;
    this.visible = !0;
    this.toneMapped = !0;
    this.userData = {};
    this.version = 0;
  }
  function Ye(t) {
    qe.call(this);
    this.type = "MeshBasicMaterial";
    this.color = new je(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.skinning = !1;
    this.morphTargets = !1;
    this.setValues(t);
  }
  qe.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: qe,
    isMaterial: !0,
    onBeforeCompile: function () {},
    customProgramCacheKey: function () {
      return this.onBeforeCompile.toString();
    },
    setValues: function (t) {
      if (void 0 !== t) for (var e in t) {
        var n = t[e];
        if (void 0 !== n) {
          if ("shading" !== e) {
            var r = this[e];
            if (void 0 !== r) {
              if (r && r.isColor) {
                r.set(n);
              } else {
                if (r && r.isVector3 && n && n.isVector3) {
                  r.copy(n);
                } else {
                  this[e] = n;
                }
              }
            } else {
              console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
            }
          } else {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
            this.flatShading = 1 === n;
          }
        } else console.warn("THREE.Material: '" + e + "' parameter is undefined.");
      }
    },
    toJSON: function (t) {
      var e = void 0 === t || "string" == typeof t;
      if (e) {
        t = {
          textures: {},
          images: {}
        };
      }
      var n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      function r(t) {
        var e = [];
        for (var n in t) {
          var r = t[n];
          delete r.metadata;
          e.push(r);
        }
        return e;
      }
      n.uuid = this.uuid;
      n.type = this.type;
      if ("" !== this.name) {
        n.name = this.name;
      }
      if (this.color && this.color.isColor) {
        n.color = this.color.getHex();
      }
      if (void 0 !== this.roughness) {
        n.roughness = this.roughness;
      }
      if (void 0 !== this.metalness) {
        n.metalness = this.metalness;
      }
      if (this.sheen && this.sheen.isColor) {
        n.sheen = this.sheen.getHex();
      }
      if (this.emissive && this.emissive.isColor) {
        n.emissive = this.emissive.getHex();
      }
      if (this.emissiveIntensity && 1 !== this.emissiveIntensity) {
        n.emissiveIntensity = this.emissiveIntensity;
      }
      if (this.specular && this.specular.isColor) {
        n.specular = this.specular.getHex();
      }
      if (void 0 !== this.shininess) {
        n.shininess = this.shininess;
      }
      if (void 0 !== this.clearcoat) {
        n.clearcoat = this.clearcoat;
      }
      if (void 0 !== this.clearcoatRoughness) {
        n.clearcoatRoughness = this.clearcoatRoughness;
      }
      if (this.clearcoatMap && this.clearcoatMap.isTexture) {
        n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid;
      }
      if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
        n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid;
      }
      if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
        n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid;
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
      }
      if (this.map && this.map.isTexture) {
        n.map = this.map.toJSON(t).uuid;
      }
      if (this.matcap && this.matcap.isTexture) {
        n.matcap = this.matcap.toJSON(t).uuid;
      }
      if (this.alphaMap && this.alphaMap.isTexture) {
        n.alphaMap = this.alphaMap.toJSON(t).uuid;
      }
      if (this.lightMap && this.lightMap.isTexture) {
        n.lightMap = this.lightMap.toJSON(t).uuid;
      }
      if (this.aoMap && this.aoMap.isTexture) {
        n.aoMap = this.aoMap.toJSON(t).uuid;
        n.aoMapIntensity = this.aoMapIntensity;
      }
      if (this.bumpMap && this.bumpMap.isTexture) {
        n.bumpMap = this.bumpMap.toJSON(t).uuid;
        n.bumpScale = this.bumpScale;
      }
      if (this.normalMap && this.normalMap.isTexture) {
        n.normalMap = this.normalMap.toJSON(t).uuid;
        n.normalMapType = this.normalMapType;
        n.normalScale = this.normalScale.toArray();
      }
      if (this.displacementMap && this.displacementMap.isTexture) {
        n.displacementMap = this.displacementMap.toJSON(t).uuid;
        n.displacementScale = this.displacementScale;
        n.displacementBias = this.displacementBias;
      }
      if (this.roughnessMap && this.roughnessMap.isTexture) {
        n.roughnessMap = this.roughnessMap.toJSON(t).uuid;
      }
      if (this.metalnessMap && this.metalnessMap.isTexture) {
        n.metalnessMap = this.metalnessMap.toJSON(t).uuid;
      }
      if (this.emissiveMap && this.emissiveMap.isTexture) {
        n.emissiveMap = this.emissiveMap.toJSON(t).uuid;
      }
      if (this.specularMap && this.specularMap.isTexture) {
        n.specularMap = this.specularMap.toJSON(t).uuid;
      }
      if (this.envMap && this.envMap.isTexture) {
        n.envMap = this.envMap.toJSON(t).uuid;
        n.reflectivity = this.reflectivity;
        n.refractionRatio = this.refractionRatio;
        if (void 0 !== this.combine) {
          n.combine = this.combine;
        }
        if (void 0 !== this.envMapIntensity) {
          n.envMapIntensity = this.envMapIntensity;
        }
      }
      if (this.gradientMap && this.gradientMap.isTexture) {
        n.gradientMap = this.gradientMap.toJSON(t).uuid;
      }
      if (void 0 !== this.size) {
        n.size = this.size;
      }
      if (void 0 !== this.sizeAttenuation) {
        n.sizeAttenuation = this.sizeAttenuation;
      }
      if (1 !== this.blending) {
        n.blending = this.blending;
      }
      if (!0 === this.flatShading) {
        n.flatShading = this.flatShading;
      }
      if (0 !== this.side) {
        n.side = this.side;
      }
      if (this.vertexColors) {
        n.vertexColors = !0;
      }
      if (this.opacity < 1) {
        n.opacity = this.opacity;
      }
      if (!0 === this.transparent) {
        n.transparent = this.transparent;
      }
      n.depthFunc = this.depthFunc;
      n.depthTest = this.depthTest;
      n.depthWrite = this.depthWrite;
      n.stencilWrite = this.stencilWrite;
      n.stencilWriteMask = this.stencilWriteMask;
      n.stencilFunc = this.stencilFunc;
      n.stencilRef = this.stencilRef;
      n.stencilFuncMask = this.stencilFuncMask;
      n.stencilFail = this.stencilFail;
      n.stencilZFail = this.stencilZFail;
      n.stencilZPass = this.stencilZPass;
      if (this.rotation && 0 !== this.rotation) {
        n.rotation = this.rotation;
      }
      if (!0 === this.polygonOffset) {
        n.polygonOffset = !0;
      }
      if (0 !== this.polygonOffsetFactor) {
        n.polygonOffsetFactor = this.polygonOffsetFactor;
      }
      if (0 !== this.polygonOffsetUnits) {
        n.polygonOffsetUnits = this.polygonOffsetUnits;
      }
      if (this.linewidth && 1 !== this.linewidth) {
        n.linewidth = this.linewidth;
      }
      if (void 0 !== this.dashSize) {
        n.dashSize = this.dashSize;
      }
      if (void 0 !== this.gapSize) {
        n.gapSize = this.gapSize;
      }
      if (void 0 !== this.scale) {
        n.scale = this.scale;
      }
      if (!0 === this.dithering) {
        n.dithering = !0;
      }
      if (this.alphaTest > 0) {
        n.alphaTest = this.alphaTest;
      }
      if (!0 === this.premultipliedAlpha) {
        n.premultipliedAlpha = this.premultipliedAlpha;
      }
      if (!0 === this.wireframe) {
        n.wireframe = this.wireframe;
      }
      if (this.wireframeLinewidth > 1) {
        n.wireframeLinewidth = this.wireframeLinewidth;
      }
      if ("round" !== this.wireframeLinecap) {
        n.wireframeLinecap = this.wireframeLinecap;
      }
      if ("round" !== this.wireframeLinejoin) {
        n.wireframeLinejoin = this.wireframeLinejoin;
      }
      if (!0 === this.morphTargets) {
        n.morphTargets = !0;
      }
      if (!0 === this.morphNormals) {
        n.morphNormals = !0;
      }
      if (!0 === this.skinning) {
        n.skinning = !0;
      }
      if (!1 === this.visible) {
        n.visible = !1;
      }
      if (!1 === this.toneMapped) {
        n.toneMapped = !1;
      }
      if ("{}" !== JSON.stringify(this.userData)) {
        n.userData = this.userData;
      }
      if (e) {
        var i = r(t.textures),
          a = r(t.images);
        i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a);
      }
      return n;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (t) {
      this.name = t.name;
      this.fog = t.fog;
      this.blending = t.blending;
      this.side = t.side;
      this.flatShading = t.flatShading;
      this.vertexColors = t.vertexColors;
      this.opacity = t.opacity;
      this.transparent = t.transparent;
      this.blendSrc = t.blendSrc;
      this.blendDst = t.blendDst;
      this.blendEquation = t.blendEquation;
      this.blendSrcAlpha = t.blendSrcAlpha;
      this.blendDstAlpha = t.blendDstAlpha;
      this.blendEquationAlpha = t.blendEquationAlpha;
      this.depthFunc = t.depthFunc;
      this.depthTest = t.depthTest;
      this.depthWrite = t.depthWrite;
      this.stencilWriteMask = t.stencilWriteMask;
      this.stencilFunc = t.stencilFunc;
      this.stencilRef = t.stencilRef;
      this.stencilFuncMask = t.stencilFuncMask;
      this.stencilFail = t.stencilFail;
      this.stencilZFail = t.stencilZFail;
      this.stencilZPass = t.stencilZPass;
      this.stencilWrite = t.stencilWrite;
      var e = t.clippingPlanes;
      var n = null;
      if (null !== e) {
        var r = e.length;
        n = new Array(r);
        for (var i = 0; i !== r; ++i) n[i] = e[i].clone();
      }
      this.clippingPlanes = n;
      this.clipIntersection = t.clipIntersection;
      this.clipShadows = t.clipShadows;
      this.shadowSide = t.shadowSide;
      this.colorWrite = t.colorWrite;
      this.precision = t.precision;
      this.polygonOffset = t.polygonOffset;
      this.polygonOffsetFactor = t.polygonOffsetFactor;
      this.polygonOffsetUnits = t.polygonOffsetUnits;
      this.dithering = t.dithering;
      this.alphaTest = t.alphaTest;
      this.premultipliedAlpha = t.premultipliedAlpha;
      this.visible = t.visible;
      this.toneMapped = t.toneMapped;
      this.userData = JSON.parse(JSON.stringify(t.userData));
      return this;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  Object.defineProperty(qe.prototype, "needsUpdate", {
    set: function (t) {
      if (!0 === t) {
        this.version++;
      }
    }
  });
  Ye.prototype = Object.create(qe.prototype);
  Ye.prototype.constructor = Ye;
  Ye.prototype.isMeshBasicMaterial = !0;
  Ye.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.color.copy(t.color);
    this.map = t.map;
    this.lightMap = t.lightMap;
    this.lightMapIntensity = t.lightMapIntensity;
    this.aoMap = t.aoMap;
    this.aoMapIntensity = t.aoMapIntensity;
    this.specularMap = t.specularMap;
    this.alphaMap = t.alphaMap;
    this.envMap = t.envMap;
    this.combine = t.combine;
    this.reflectivity = t.reflectivity;
    this.refractionRatio = t.refractionRatio;
    this.wireframe = t.wireframe;
    this.wireframeLinewidth = t.wireframeLinewidth;
    this.wireframeLinecap = t.wireframeLinecap;
    this.wireframeLinejoin = t.wireframeLinejoin;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    return this;
  };
  var Xe = new wt();
  var Ze = new ft();
  function Ke(t, e, n) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "";
    this.array = t;
    this.itemSize = e;
    this.count = void 0 !== t ? t.length / e : 0;
    this.normalized = !0 === n;
    this.usage = tt;
    this.updateRange = {
      offset: 0,
      count: -1
    };
    this.version = 0;
  }
  function Je(t, e, n) {
    Ke.call(this, new Int8Array(t), e, n);
  }
  function $e(t, e, n) {
    Ke.call(this, new Uint8Array(t), e, n);
  }
  function Qe(t, e, n) {
    Ke.call(this, new Uint8ClampedArray(t), e, n);
  }
  function tn(t, e, n) {
    Ke.call(this, new Int16Array(t), e, n);
  }
  function en(t, e, n) {
    Ke.call(this, new Uint16Array(t), e, n);
  }
  function nn(t, e, n) {
    Ke.call(this, new Int32Array(t), e, n);
  }
  function rn(t, e, n) {
    Ke.call(this, new Uint32Array(t), e, n);
  }
  function an(t, e, n) {
    Ke.call(this, new Float32Array(t), e, n);
  }
  function on(t, e, n) {
    Ke.call(this, new Float64Array(t), e, n);
  }
  Object.defineProperty(Ke.prototype, "needsUpdate", {
    set: function (t) {
      if (!0 === t) {
        this.version++;
      }
    }
  });
  Object.assign(Ke.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function () {},
    setUsage: function (t) {
      this.usage = t;
      return this;
    },
    copy: function (t) {
      this.name = t.name;
      this.array = new t.array.constructor(t.array);
      this.itemSize = t.itemSize;
      this.count = t.count;
      this.normalized = t.normalized;
      this.usage = t.usage;
      return this;
    },
    copyAt: function (t, e, n) {
      t *= this.itemSize;
      n *= e.itemSize;
      for (r = 0, i = this.itemSize, void 0; r < i; r++) {
        var r;
        var i;
        this.array[t + r] = e.array[n + r];
      }
      return this;
    },
    copyArray: function (t) {
      this.array.set(t);
      return this;
    },
    copyColorsArray: function (t) {
      for (e = this.array, n = 0, r = 0, i = t.length, void 0; r < i; r++) {
        var e;
        var n;
        var r;
        var i;
        var a = t[r];
        if (void 0 === a) {
          console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r);
          a = new je();
        }
        e[n++] = a.r;
        e[n++] = a.g;
        e[n++] = a.b;
      }
      return this;
    },
    copyVector2sArray: function (t) {
      for (e = this.array, n = 0, r = 0, i = t.length, void 0; r < i; r++) {
        var e;
        var n;
        var r;
        var i;
        var a = t[r];
        if (void 0 === a) {
          console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r);
          a = new ft();
        }
        e[n++] = a.x;
        e[n++] = a.y;
      }
      return this;
    },
    copyVector3sArray: function (t) {
      for (e = this.array, n = 0, r = 0, i = t.length, void 0; r < i; r++) {
        var e;
        var n;
        var r;
        var i;
        var a = t[r];
        if (void 0 === a) {
          console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r);
          a = new wt();
        }
        e[n++] = a.x;
        e[n++] = a.y;
        e[n++] = a.z;
      }
      return this;
    },
    copyVector4sArray: function (t) {
      for (e = this.array, n = 0, r = 0, i = t.length, void 0; r < i; r++) {
        var e;
        var n;
        var r;
        var i;
        var a = t[r];
        if (void 0 === a) {
          console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r);
          a = new yt();
        }
        e[n++] = a.x;
        e[n++] = a.y;
        e[n++] = a.z;
        e[n++] = a.w;
      }
      return this;
    },
    applyMatrix3: function (t) {
      if (2 === this.itemSize) for (e = 0, n = this.count, void 0; e < n; e++) {
        var e;
        var n;
        Ze.fromBufferAttribute(this, e);
        Ze.applyMatrix3(t);
        this.setXY(e, Ze.x, Ze.y);
      } else if (3 === this.itemSize) for (r = 0, i = this.count, void 0; r < i; r++) {
        var r;
        var i;
        Xe.fromBufferAttribute(this, r);
        Xe.applyMatrix3(t);
        this.setXYZ(r, Xe.x, Xe.y, Xe.z);
      }
      return this;
    },
    applyMatrix4: function (t) {
      for (e = 0, n = this.count, void 0; e < n; e++) {
        var e;
        var n;
        Xe.x = this.getX(e);
        Xe.y = this.getY(e);
        Xe.z = this.getZ(e);
        Xe.applyMatrix4(t);
        this.setXYZ(e, Xe.x, Xe.y, Xe.z);
      }
      return this;
    },
    applyNormalMatrix: function (t) {
      for (e = 0, n = this.count, void 0; e < n; e++) {
        var e;
        var n;
        Xe.x = this.getX(e);
        Xe.y = this.getY(e);
        Xe.z = this.getZ(e);
        Xe.applyNormalMatrix(t);
        this.setXYZ(e, Xe.x, Xe.y, Xe.z);
      }
      return this;
    },
    transformDirection: function (t) {
      for (e = 0, n = this.count, void 0; e < n; e++) {
        var e;
        var n;
        Xe.x = this.getX(e);
        Xe.y = this.getY(e);
        Xe.z = this.getZ(e);
        Xe.transformDirection(t);
        this.setXYZ(e, Xe.x, Xe.y, Xe.z);
      }
      return this;
    },
    set: function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      this.array.set(t, e);
      return this;
    },
    getX: function (t) {
      return this.array[t * this.itemSize];
    },
    setX: function (t, e) {
      this.array[t * this.itemSize] = e;
      return this;
    },
    getY: function (t) {
      return this.array[t * this.itemSize + 1];
    },
    setY: function (t, e) {
      this.array[t * this.itemSize + 1] = e;
      return this;
    },
    getZ: function (t) {
      return this.array[t * this.itemSize + 2];
    },
    setZ: function (t, e) {
      this.array[t * this.itemSize + 2] = e;
      return this;
    },
    getW: function (t) {
      return this.array[t * this.itemSize + 3];
    },
    setW: function (t, e) {
      this.array[t * this.itemSize + 3] = e;
      return this;
    },
    setXY: function (t, e, n) {
      t *= this.itemSize;
      this.array[t + 0] = e;
      this.array[t + 1] = n;
      return this;
    },
    setXYZ: function (t, e, n, r) {
      t *= this.itemSize;
      this.array[t + 0] = e;
      this.array[t + 1] = n;
      this.array[t + 2] = r;
      return this;
    },
    setXYZW: function (t, e, n, r, i) {
      t *= this.itemSize;
      this.array[t + 0] = e;
      this.array[t + 1] = n;
      this.array[t + 2] = r;
      this.array[t + 3] = i;
      return this;
    },
    onUpload: function (t) {
      this.onUploadCallback = t;
      return this;
    },
    clone: function () {
      return new this.constructor(this.array, this.itemSize).copy(this);
    },
    toJSON: function () {
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized
      };
    }
  });
  Je.prototype = Object.create(Ke.prototype);
  Je.prototype.constructor = Je;
  $e.prototype = Object.create(Ke.prototype);
  $e.prototype.constructor = $e;
  Qe.prototype = Object.create(Ke.prototype);
  Qe.prototype.constructor = Qe;
  tn.prototype = Object.create(Ke.prototype);
  tn.prototype.constructor = tn;
  en.prototype = Object.create(Ke.prototype);
  en.prototype.constructor = en;
  nn.prototype = Object.create(Ke.prototype);
  nn.prototype.constructor = nn;
  rn.prototype = Object.create(Ke.prototype);
  rn.prototype.constructor = rn;
  an.prototype = Object.create(Ke.prototype);
  an.prototype.constructor = an;
  on.prototype = Object.create(Ke.prototype);
  on.prototype.constructor = on;
  var sn = function () {
    function t() {
      this.vertices = [];
      this.normals = [];
      this.colors = [];
      this.uvs = [];
      this.uvs2 = [];
      this.groups = [];
      this.morphTargets = {};
      this.skinWeights = [];
      this.skinIndices = [];
      this.boundingBox = null;
      this.boundingSphere = null;
      this.verticesNeedUpdate = !1;
      this.normalsNeedUpdate = !1;
      this.colorsNeedUpdate = !1;
      this.uvsNeedUpdate = !1;
      this.groupsNeedUpdate = !1;
    }
    var e = t.prototype;
    e.computeGroups = function (t) {
      var e;
      var n;
      var r = [];
      var i = void 0;
      var a = t.faces;
      for (n = 0; n < a.length; n++) {
        var o = a[n];
        if (o.materialIndex !== i) {
          i = o.materialIndex;
          if (void 0 !== e) {
            e.count = 3 * n - e.start;
            r.push(e);
          }
          e = {
            start: 3 * n,
            materialIndex: i
          };
        }
      }
      if (void 0 !== e) {
        e.count = 3 * n - e.start;
        r.push(e);
      }
      this.groups = r;
    };
    e.fromGeometry = function (t) {
      var e;
      var n = t.faces;
      var r = t.vertices;
      var i = t.faceVertexUvs;
      var a = i[0] && i[0].length > 0;
      var o = i[1] && i[1].length > 0;
      var s = t.morphTargets;
      var l = s.length;
      if (l > 0) {
        e = [];
        for (var u = 0; u < l; u++) e[u] = {
          name: s[u].name,
          data: []
        };
        this.morphTargets.position = e;
      }
      var c;
      var h = t.morphNormals;
      var d = h.length;
      if (d > 0) {
        c = [];
        for (var f = 0; f < d; f++) c[f] = {
          name: h[f].name,
          data: []
        };
        this.morphTargets.normal = c;
      }
      var p = t.skinIndices;
      var m = t.skinWeights;
      var v = p.length === r.length;
      var g = m.length === r.length;
      if (r.length > 0 && 0 === n.length) {
        console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
      }
      for (var y = 0; y < n.length; y++) {
        var b = n[y];
        this.vertices.push(r[b.a], r[b.b], r[b.c]);
        var x = b.vertexNormals;
        if (3 === x.length) this.normals.push(x[0], x[1], x[2]);else {
          var _ = b.normal;
          this.normals.push(_, _, _);
        }
        var w = b.vertexColors;
        if (3 === w.length) this.colors.push(w[0], w[1], w[2]);else {
          var S = b.color;
          this.colors.push(S, S, S);
        }
        if (!0 === a) {
          var E = i[0][y];
          if (void 0 !== E) {
            this.uvs.push(E[0], E[1], E[2]);
          } else {
            console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", y);
            this.uvs.push(new ft(), new ft(), new ft());
          }
        }
        if (!0 === o) {
          var T = i[1][y];
          if (void 0 !== T) {
            this.uvs2.push(T[0], T[1], T[2]);
          } else {
            console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", y);
            this.uvs2.push(new ft(), new ft(), new ft());
          }
        }
        for (var M = 0; M < l; M++) {
          var A = s[M].vertices;
          e[M].data.push(A[b.a], A[b.b], A[b.c]);
        }
        for (var L = 0; L < d; L++) {
          var C = h[L].vertexNormals[y];
          c[L].data.push(C.a, C.b, C.c);
        }
        if (v) {
          this.skinIndices.push(p[b.a], p[b.b], p[b.c]);
        }
        if (g) {
          this.skinWeights.push(m[b.a], m[b.b], m[b.c]);
        }
      }
      this.computeGroups(t);
      this.verticesNeedUpdate = t.verticesNeedUpdate;
      this.normalsNeedUpdate = t.normalsNeedUpdate;
      this.colorsNeedUpdate = t.colorsNeedUpdate;
      this.uvsNeedUpdate = t.uvsNeedUpdate;
      this.groupsNeedUpdate = t.groupsNeedUpdate;
      if (null !== t.boundingSphere) {
        this.boundingSphere = t.boundingSphere.clone();
      }
      if (null !== t.boundingBox) {
        this.boundingBox = t.boundingBox.clone();
      }
      return this;
    };
    return t;
  }();
  function ln(t) {
    if (0 === t.length) return -1 / 0;
    for (e = t[0], n = 1, r = t.length, void 0; n < r; ++n) {
      var e;
      var n;
      var r;
      if (t[n] > e) {
        e = t[n];
      }
    }
    return e;
  }
  var un = 1;
  var cn = new Kt();
  var hn = new _e();
  var dn = new wt();
  var fn = new Tt();
  var pn = new Tt();
  var mn = new wt();
  function vn() {
    Object.defineProperty(this, "id", {
      value: un += 2
    });
    this.uuid = st.generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = !1;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = {
      start: 0,
      count: 1 / 0
    };
    this.userData = {};
  }
  vn.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: vn,
    isBufferGeometry: !0,
    getIndex: function () {
      return this.index;
    },
    setIndex: function (t) {
      if (Array.isArray(t)) {
        this.index = new (ln(t) > 65535 ? rn : en)(t, 1);
      } else {
        this.index = t;
      }
      return this;
    },
    getAttribute: function (t) {
      return this.attributes[t];
    },
    setAttribute: function (t, e) {
      this.attributes[t] = e;
      return this;
    },
    deleteAttribute: function (t) {
      delete this.attributes[t];
      return this;
    },
    addGroup: function (t, e, n) {
      this.groups.push({
        start: t,
        count: e,
        materialIndex: void 0 !== n ? n : 0
      });
    },
    clearGroups: function () {
      this.groups = [];
    },
    setDrawRange: function (t, e) {
      this.drawRange.start = t;
      this.drawRange.count = e;
    },
    applyMatrix4: function (t) {
      var e = this.attributes.position;
      if (void 0 !== e) {
        e.applyMatrix4(t);
        e.needsUpdate = !0;
      }
      var n = this.attributes.normal;
      if (void 0 !== n) {
        var r = new pt().getNormalMatrix(t);
        n.applyNormalMatrix(r);
        n.needsUpdate = !0;
      }
      var i = this.attributes.tangent;
      if (void 0 !== i) {
        i.transformDirection(t);
        i.needsUpdate = !0;
      }
      if (null !== this.boundingBox) {
        this.computeBoundingBox();
      }
      if (null !== this.boundingSphere) {
        this.computeBoundingSphere();
      }
      return this;
    },
    rotateX: function (t) {
      cn.makeRotationX(t);
      this.applyMatrix4(cn);
      return this;
    },
    rotateY: function (t) {
      cn.makeRotationY(t);
      this.applyMatrix4(cn);
      return this;
    },
    rotateZ: function (t) {
      cn.makeRotationZ(t);
      this.applyMatrix4(cn);
      return this;
    },
    translate: function (t, e, n) {
      cn.makeTranslation(t, e, n);
      this.applyMatrix4(cn);
      return this;
    },
    scale: function (t, e, n) {
      cn.makeScale(t, e, n);
      this.applyMatrix4(cn);
      return this;
    },
    lookAt: function (t) {
      hn.lookAt(t);
      hn.updateMatrix();
      this.applyMatrix4(hn.matrix);
      return this;
    },
    center: function () {
      this.computeBoundingBox();
      this.boundingBox.getCenter(dn).negate();
      this.translate(dn.x, dn.y, dn.z);
      return this;
    },
    setFromObject: function (t) {
      var e = t.geometry;
      if (t.isPoints || t.isLine) {
        var n = new an(3 * e.vertices.length, 3);
        var r = new an(3 * e.colors.length, 3);
        this.setAttribute("position", n.copyVector3sArray(e.vertices));
        this.setAttribute("color", r.copyColorsArray(e.colors));
        if (e.lineDistances && e.lineDistances.length === e.vertices.length) {
          var i = new an(e.lineDistances.length, 1);
          this.setAttribute("lineDistance", i.copyArray(e.lineDistances));
        }
        if (null !== e.boundingSphere) {
          this.boundingSphere = e.boundingSphere.clone();
        }
        if (null !== e.boundingBox) {
          this.boundingBox = e.boundingBox.clone();
        }
      } else if (t.isMesh && e && e.isGeometry) {
        this.fromGeometry(e);
      }
      return this;
    },
    setFromPoints: function (t) {
      for (e = [], n = 0, r = t.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        var i = t[n];
        e.push(i.x, i.y, i.z || 0);
      }
      this.setAttribute("position", new an(e, 3));
      return this;
    },
    updateFromObject: function (t) {
      var e = t.geometry;
      if (t.isMesh) {
        var n = e.__directGeometry;
        if (!0 === e.elementsNeedUpdate) {
          n = void 0;
          e.elementsNeedUpdate = !1;
        }
        if (void 0 === n) return this.fromGeometry(e);
        n.verticesNeedUpdate = e.verticesNeedUpdate;
        n.normalsNeedUpdate = e.normalsNeedUpdate;
        n.colorsNeedUpdate = e.colorsNeedUpdate;
        n.uvsNeedUpdate = e.uvsNeedUpdate;
        n.groupsNeedUpdate = e.groupsNeedUpdate;
        e.verticesNeedUpdate = !1;
        e.normalsNeedUpdate = !1;
        e.colorsNeedUpdate = !1;
        e.uvsNeedUpdate = !1;
        e.groupsNeedUpdate = !1;
        e = n;
      }
      if (!0 === e.verticesNeedUpdate) {
        var r = this.attributes.position;
        if (void 0 !== r) {
          r.copyVector3sArray(e.vertices);
          r.needsUpdate = !0;
        }
        e.verticesNeedUpdate = !1;
      }
      if (!0 === e.normalsNeedUpdate) {
        var i = this.attributes.normal;
        if (void 0 !== i) {
          i.copyVector3sArray(e.normals);
          i.needsUpdate = !0;
        }
        e.normalsNeedUpdate = !1;
      }
      if (!0 === e.colorsNeedUpdate) {
        var a = this.attributes.color;
        if (void 0 !== a) {
          a.copyColorsArray(e.colors);
          a.needsUpdate = !0;
        }
        e.colorsNeedUpdate = !1;
      }
      if (e.uvsNeedUpdate) {
        var o = this.attributes.uv;
        if (void 0 !== o) {
          o.copyVector2sArray(e.uvs);
          o.needsUpdate = !0;
        }
        e.uvsNeedUpdate = !1;
      }
      if (e.lineDistancesNeedUpdate) {
        var s = this.attributes.lineDistance;
        if (void 0 !== s) {
          s.copyArray(e.lineDistances);
          s.needsUpdate = !0;
        }
        e.lineDistancesNeedUpdate = !1;
      }
      if (e.groupsNeedUpdate) {
        e.computeGroups(t.geometry);
        this.groups = e.groups;
        e.groupsNeedUpdate = !1;
      }
      return this;
    },
    fromGeometry: function (t) {
      t.__directGeometry = new sn().fromGeometry(t);
      return this.fromDirectGeometry(t.__directGeometry);
    },
    fromDirectGeometry: function (t) {
      var e = new Float32Array(3 * t.vertices.length);
      this.setAttribute("position", new Ke(e, 3).copyVector3sArray(t.vertices));
      if (t.normals.length > 0) {
        var n = new Float32Array(3 * t.normals.length);
        this.setAttribute("normal", new Ke(n, 3).copyVector3sArray(t.normals));
      }
      if (t.colors.length > 0) {
        var r = new Float32Array(3 * t.colors.length);
        this.setAttribute("color", new Ke(r, 3).copyColorsArray(t.colors));
      }
      if (t.uvs.length > 0) {
        var i = new Float32Array(2 * t.uvs.length);
        this.setAttribute("uv", new Ke(i, 2).copyVector2sArray(t.uvs));
      }
      if (t.uvs2.length > 0) {
        var a = new Float32Array(2 * t.uvs2.length);
        this.setAttribute("uv2", new Ke(a, 2).copyVector2sArray(t.uvs2));
      }
      for (var o in this.groups = t.groups, t.morphTargets) {
        for (s = [], l = t.morphTargets[o], u = 0, c = l.length, void 0; u < c; u++) {
          var s;
          var l;
          var u;
          var c;
          var h = l[u];
          var d = new an(3 * h.data.length, 3);
          d.name = h.name;
          s.push(d.copyVector3sArray(h.data));
        }
        this.morphAttributes[o] = s;
      }
      if (t.skinIndices.length > 0) {
        var f = new an(4 * t.skinIndices.length, 4);
        this.setAttribute("skinIndex", f.copyVector4sArray(t.skinIndices));
      }
      if (t.skinWeights.length > 0) {
        var p = new an(4 * t.skinWeights.length, 4);
        this.setAttribute("skinWeight", p.copyVector4sArray(t.skinWeights));
      }
      if (null !== t.boundingSphere) {
        this.boundingSphere = t.boundingSphere.clone();
      }
      if (null !== t.boundingBox) {
        this.boundingBox = t.boundingBox.clone();
      }
      return this;
    },
    computeBoundingBox: function () {
      if (null === this.boundingBox) {
        this.boundingBox = new Tt();
      }
      var t = this.attributes.position;
      var e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) {
        console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this);
        return void this.boundingBox.set(new wt(-1 / 0, -1 / 0, -1 / 0), new wt(1 / 0, 1 / 0, 1 / 0));
      }
      if (void 0 !== t) {
        this.boundingBox.setFromBufferAttribute(t);
        if (e) for (var n = 0, r = e.length; n < r; n++) {
          var i = e[n];
          fn.setFromBufferAttribute(i), this.morphTargetsRelative ? (mn.addVectors(this.boundingBox.min, fn.min), this.boundingBox.expandByPoint(mn), mn.addVectors(this.boundingBox.max, fn.max), this.boundingBox.expandByPoint(mn)) : (this.boundingBox.expandByPoint(fn.min), this.boundingBox.expandByPoint(fn.max));
        }
      } else this.boundingBox.makeEmpty();
      if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
        console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
      }
    },
    computeBoundingSphere: function () {
      if (null === this.boundingSphere) {
        this.boundingSphere = new Gt();
      }
      var t = this.attributes.position;
      var e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) {
        console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this);
        return void this.boundingSphere.set(new wt(), 1 / 0);
      }
      if (t) {
        var n = this.boundingSphere.center;
        fn.setFromBufferAttribute(t);
        if (e) for (var r = 0, i = e.length; r < i; r++) {
          var a = e[r];
          pn.setFromBufferAttribute(a), this.morphTargetsRelative ? (mn.addVectors(fn.min, pn.min), fn.expandByPoint(mn), mn.addVectors(fn.max, pn.max), fn.expandByPoint(mn)) : (fn.expandByPoint(pn.min), fn.expandByPoint(pn.max));
        }
        fn.getCenter(n);
        for (o = 0, s = 0, l = t.count, void 0; s < l; s++) {
          var o;
          var s;
          var l;
          mn.fromBufferAttribute(t, s);
          o = Math.max(o, n.distanceToSquared(mn));
        }
        if (e) for (u = 0, c = e.length, void 0; u < c; u++) {
          var u;
          var c;
          for (h = e[u], d = this.morphTargetsRelative, f = 0, p = h.count, void 0; f < p; f++) {
            var h;
            var d;
            var f;
            var p;
            mn.fromBufferAttribute(h, f);
            if (d) {
              dn.fromBufferAttribute(t, f);
              mn.add(dn);
            }
            o = Math.max(o, n.distanceToSquared(mn));
          }
        }
        this.boundingSphere.radius = Math.sqrt(o);
        if (isNaN(this.boundingSphere.radius)) {
          console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
      }
    },
    computeFaceNormals: function () {},
    computeVertexNormals: function () {
      var t = this.index;
      var e = this.getAttribute("position");
      if (void 0 !== e) {
        var n = this.getAttribute("normal");
        if (void 0 === n) {
          n = new Ke(new Float32Array(3 * e.count), 3);
          this.setAttribute("normal", n);
        } else for (r = 0, i = n.count, void 0; r < i; r++) {
          var r;
          var i;
          n.setXYZ(r, 0, 0, 0);
        }
        var a = new wt();
        var o = new wt();
        var s = new wt();
        var l = new wt();
        var u = new wt();
        var c = new wt();
        var h = new wt();
        var d = new wt();
        if (t) for (f = 0, p = t.count, void 0; f < p; f += 3) {
          var f;
          var p;
          var m = t.getX(f + 0);
          var v = t.getX(f + 1);
          var g = t.getX(f + 2);
          a.fromBufferAttribute(e, m);
          o.fromBufferAttribute(e, v);
          s.fromBufferAttribute(e, g);
          h.subVectors(s, o);
          d.subVectors(a, o);
          h.cross(d);
          l.fromBufferAttribute(n, m);
          u.fromBufferAttribute(n, v);
          c.fromBufferAttribute(n, g);
          l.add(h);
          u.add(h);
          c.add(h);
          n.setXYZ(m, l.x, l.y, l.z);
          n.setXYZ(v, u.x, u.y, u.z);
          n.setXYZ(g, c.x, c.y, c.z);
        } else for (y = 0, b = e.count, void 0; y < b; y += 3) {
          var y;
          var b;
          a.fromBufferAttribute(e, y + 0);
          o.fromBufferAttribute(e, y + 1);
          s.fromBufferAttribute(e, y + 2);
          h.subVectors(s, o);
          d.subVectors(a, o);
          h.cross(d);
          n.setXYZ(y + 0, h.x, h.y, h.z);
          n.setXYZ(y + 1, h.x, h.y, h.z);
          n.setXYZ(y + 2, h.x, h.y, h.z);
        }
        this.normalizeNormals();
        n.needsUpdate = !0;
      }
    },
    merge: function (t, e) {
      if (t && t.isBufferGeometry) {
        if (void 0 === e) {
          e = 0;
          console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.");
        }
        var n = this.attributes;
        for (var r in n) if (void 0 !== t.attributes[r]) for (i = n[r].array, a = t.attributes[r], o = a.array, s = a.itemSize * e, l = Math.min(o.length, i.length - s), u = 0, c = s, void 0; u < l; u++, c++) {
          var i;
          var a;
          var o;
          var s;
          var l;
          var u;
          var c;
          i[c] = o[u];
        }
        return this;
      }
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
    },
    normalizeNormals: function () {
      for (t = this.attributes.normal, e = 0, n = t.count, void 0; e < n; e++) {
        var t;
        var e;
        var n;
        mn.fromBufferAttribute(t, e);
        mn.normalize();
        t.setXYZ(e, mn.x, mn.y, mn.z);
      }
    },
    toNonIndexed: function () {
      function t(t, e) {
        for (n = t.array, r = t.itemSize, i = t.normalized, a = new n.constructor(e.length * r), o = 0, s = 0, l = 0, u = e.length, void 0; l < u; l++) {
          var n;
          var r;
          var i;
          var a;
          var o;
          var s;
          var l;
          var u;
          o = e[l] * r;
          for (var c = 0; c < r; c++) a[s++] = n[o++];
        }
        return new Ke(a, r, i);
      }
      if (null === this.index) {
        console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.");
        return this;
      }
      var e = new vn();
      var n = this.index.array;
      var r = this.attributes;
      for (var i in r) {
        var a = t(r[i], n);
        e.setAttribute(i, a);
      }
      var o = this.morphAttributes;
      for (var s in o) {
        for (l = [], u = o[s], c = 0, h = u.length, void 0; c < h; c++) {
          var l;
          var u;
          var c;
          var h;
          var d = t(u[c], n);
          l.push(d);
        }
        e.morphAttributes[s] = l;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      for (f = this.groups, p = 0, m = f.length, void 0; p < m; p++) {
        var f;
        var p;
        var m;
        var v = f[p];
        e.addGroup(v.start, v.count, v.materialIndex);
      }
      return e;
    },
    toJSON: function () {
      var t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      t.uuid = this.uuid;
      t.type = this.type;
      if ("" !== this.name) {
        t.name = this.name;
      }
      if (Object.keys(this.userData).length > 0) {
        t.userData = this.userData;
      }
      if (void 0 !== this.parameters) {
        var e = this.parameters;
        for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
        return t;
      }
      t.data = {
        attributes: {}
      };
      var r = this.index;
      if (null !== r) {
        t.data.index = {
          type: r.array.constructor.name,
          array: Array.prototype.slice.call(r.array)
        };
      }
      var i = this.attributes;
      for (var a in i) {
        var o = i[a];
        var s = o.toJSON(t.data);
        if ("" !== o.name) {
          s.name = o.name;
        }
        t.data.attributes[a] = s;
      }
      var l = {};
      var u = !1;
      for (var c in this.morphAttributes) {
        for (h = this.morphAttributes[c], d = [], f = 0, p = h.length, void 0; f < p; f++) {
          var h;
          var d;
          var f;
          var p;
          var m = h[f];
          var v = m.toJSON(t.data);
          if ("" !== m.name) {
            v.name = m.name;
          }
          d.push(v);
        }
        if (d.length > 0) {
          l[c] = d;
          u = !0;
        }
      }
      if (u) {
        t.data.morphAttributes = l;
        t.data.morphTargetsRelative = this.morphTargetsRelative;
      }
      var g = this.groups;
      if (g.length > 0) {
        t.data.groups = JSON.parse(JSON.stringify(g));
      }
      var y = this.boundingSphere;
      if (null !== y) {
        t.data.boundingSphere = {
          center: y.center.toArray(),
          radius: y.radius
        };
      }
      return t;
    },
    clone: function () {
      return new vn().copy(this);
    },
    copy: function (t) {
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.groups = [];
      this.boundingBox = null;
      this.boundingSphere = null;
      var e = {};
      this.name = t.name;
      var n = t.index;
      if (null !== n) {
        this.setIndex(n.clone(e));
      }
      var r = t.attributes;
      for (var i in r) {
        var a = r[i];
        this.setAttribute(i, a.clone(e));
      }
      var o = t.morphAttributes;
      for (var s in o) {
        for (l = [], u = o[s], c = 0, h = u.length, void 0; c < h; c++) {
          var l;
          var u;
          var c;
          var h;
          l.push(u[c].clone(e));
        }
        this.morphAttributes[s] = l;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      for (d = t.groups, f = 0, p = d.length, void 0; f < p; f++) {
        var d;
        var f;
        var p;
        var m = d[f];
        this.addGroup(m.start, m.count, m.materialIndex);
      }
      var v = t.boundingBox;
      if (null !== v) {
        this.boundingBox = v.clone();
      }
      var g = t.boundingSphere;
      if (null !== g) {
        this.boundingSphere = g.clone();
      }
      this.drawRange.start = t.drawRange.start;
      this.drawRange.count = t.drawRange.count;
      this.userData = t.userData;
      return this;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  var gn = new Kt();
  var yn = new Zt();
  var bn = new Gt();
  var xn = new wt();
  var _n = new wt();
  var wn = new wt();
  var Sn = new wt();
  var En = new wt();
  var Tn = new wt();
  var Mn = new wt();
  var An = new wt();
  var Ln = new wt();
  var Cn = new ft();
  var Pn = new ft();
  var Rn = new ft();
  var On = new wt();
  var In = new wt();
  function Dn(t, e) {
    _e.call(this);
    this.type = "Mesh";
    this.geometry = void 0 !== t ? t : new vn();
    this.material = void 0 !== e ? e : new Ye();
    this.updateMorphTargets();
  }
  function kn(t, e, n, r, i, a, o, s) {
    if (null === (1 === e.side ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, 2 !== e.side, s))) return null;
    In.copy(s);
    In.applyMatrix4(t.matrixWorld);
    var l = n.ray.origin.distanceTo(In);
    return l < n.near || l > n.far ? null : {
      distance: l,
      point: In.clone(),
      object: t
    };
  }
  function Nn(t, e, n, r, i, a, o, s, l, u, c, h) {
    xn.fromBufferAttribute(i, u);
    _n.fromBufferAttribute(i, c);
    wn.fromBufferAttribute(i, h);
    var d = t.morphTargetInfluences;
    if (e.morphTargets && a && d) {
      Mn.set(0, 0, 0);
      An.set(0, 0, 0);
      Ln.set(0, 0, 0);
      for (f = 0, p = a.length, void 0; f < p; f++) {
        var f;
        var p;
        var m = d[f];
        var v = a[f];
        if (0 !== m) {
          Sn.fromBufferAttribute(v, u);
          En.fromBufferAttribute(v, c);
          Tn.fromBufferAttribute(v, h);
          if (o) {
            Mn.addScaledVector(Sn, m);
            An.addScaledVector(En, m);
            Ln.addScaledVector(Tn, m);
          } else {
            Mn.addScaledVector(Sn.sub(xn), m);
            An.addScaledVector(En.sub(_n), m);
            Ln.addScaledVector(Tn.sub(wn), m);
          }
        }
      }
      xn.add(Mn);
      _n.add(An);
      wn.add(Ln);
    }
    if (t.isSkinnedMesh) {
      t.boneTransform(u, xn);
      t.boneTransform(c, _n);
      t.boneTransform(h, wn);
    }
    var g = kn(t, e, n, r, xn, _n, wn, On);
    if (g) {
      if (s) {
        Cn.fromBufferAttribute(s, u);
        Pn.fromBufferAttribute(s, c);
        Rn.fromBufferAttribute(s, h);
        g.uv = Ne.getUV(On, xn, _n, wn, Cn, Pn, Rn, new ft());
      }
      if (l) {
        Cn.fromBufferAttribute(l, u);
        Pn.fromBufferAttribute(l, c);
        Rn.fromBufferAttribute(l, h);
        g.uv2 = Ne.getUV(On, xn, _n, wn, Cn, Pn, Rn, new ft());
      }
      var y = new Ve(u, c, h);
      Ne.getNormal(xn, _n, wn, y.normal);
      g.face = y;
    }
    return g;
  }
  Dn.prototype = Object.assign(Object.create(_e.prototype), {
    constructor: Dn,
    isMesh: !0,
    copy: function (t) {
      _e.prototype.copy.call(this, t);
      if (void 0 !== t.morphTargetInfluences) {
        this.morphTargetInfluences = t.morphTargetInfluences.slice();
      }
      if (void 0 !== t.morphTargetDictionary) {
        this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary);
      }
      this.material = t.material;
      this.geometry = t.geometry;
      return this;
    },
    updateMorphTargets: function () {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        var e = t.morphAttributes;
        var n = Object.keys(e);
        if (n.length > 0) {
          var r = e[n[0]];
          if (void 0 !== r) {
            this.morphTargetInfluences = [];
            this.morphTargetDictionary = {};
            for (i = 0, a = r.length, void 0; i < a; i++) {
              var i;
              var a;
              var o = r[i].name || String(i);
              this.morphTargetInfluences.push(0);
              this.morphTargetDictionary[o] = i;
            }
          }
        }
      } else {
        var s = t.morphTargets;
        if (void 0 !== s && s.length > 0) {
          console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
      }
    },
    raycast: function (t, e) {
      var n;
      var r = this.geometry;
      var i = this.material;
      var a = this.matrixWorld;
      if (void 0 !== i && (null === r.boundingSphere && r.computeBoundingSphere(), bn.copy(r.boundingSphere), bn.applyMatrix4(a), !1 !== t.ray.intersectsSphere(bn) && (gn.getInverse(a), yn.copy(t.ray).applyMatrix4(gn), null === r.boundingBox || !1 !== yn.intersectsBox(r.boundingBox)))) if (r.isBufferGeometry) {
        var o = r.index;
        var s = r.attributes.position;
        var l = r.morphAttributes.position;
        var u = r.morphTargetsRelative;
        var c = r.attributes.uv;
        var h = r.attributes.uv2;
        var d = r.groups;
        var f = r.drawRange;
        if (null !== o) {
          if (Array.isArray(i)) for (p = 0, m = d.length, void 0; p < m; p++) {
            var p;
            var m;
            for (v = d[p], g = i[v.materialIndex], y = Math.max(v.start, f.start), b = Math.min(v.start + v.count, f.start + f.count), void 0; y < b; y += 3) {
              var v;
              var g;
              var y;
              var b;
              var x = o.getX(y);
              var _ = o.getX(y + 1);
              var w = o.getX(y + 2);
              if (n = Nn(this, g, t, yn, s, l, u, c, h, x, _, w)) {
                n.faceIndex = Math.floor(y / 3);
                n.face.materialIndex = v.materialIndex;
                e.push(n);
              }
            }
          } else for (S = Math.max(0, f.start), E = Math.min(o.count, f.start + f.count), void 0; S < E; S += 3) {
            var S;
            var E;
            var T = o.getX(S);
            var M = o.getX(S + 1);
            var A = o.getX(S + 2);
            if (n = Nn(this, i, t, yn, s, l, u, c, h, T, M, A)) {
              n.faceIndex = Math.floor(S / 3);
              e.push(n);
            }
          }
        } else if (void 0 !== s) if (Array.isArray(i)) for (L = 0, C = d.length, void 0; L < C; L++) {
          var L;
          var C;
          for (P = d[L], R = i[P.materialIndex], O = Math.max(P.start, f.start), I = Math.min(P.start + P.count, f.start + f.count), void 0; O < I; O += 3) {
            var P;
            var R;
            var O;
            var I;
            if (n = Nn(this, R, t, yn, s, l, u, c, h, O, O + 1, O + 2)) {
              n.faceIndex = Math.floor(O / 3);
              n.face.materialIndex = P.materialIndex;
              e.push(n);
            }
          }
        } else for (D = Math.max(0, f.start), k = Math.min(s.count, f.start + f.count), void 0; D < k; D += 3) {
          var D;
          var k;
          if (n = Nn(this, i, t, yn, s, l, u, c, h, D, D + 1, D + 2)) {
            n.faceIndex = Math.floor(D / 3);
            e.push(n);
          }
        }
      } else if (r.isGeometry) {
        var N;
        var B = Array.isArray(i);
        var F = r.vertices;
        var U = r.faces;
        var z = r.faceVertexUvs[0];
        if (z.length > 0) {
          N = z;
        }
        for (G = 0, H = U.length, void 0; G < H; G++) {
          var G;
          var H;
          var j = U[G];
          var V = B ? i[j.materialIndex] : i;
          if (void 0 !== V) {
            var W = F[j.a];
            var q = F[j.b];
            var Y = F[j.c];
            if (n = kn(this, V, t, yn, W, q, Y, On)) {
              if (N && N[G]) {
                var X = N[G];
                Cn.copy(X[0]);
                Pn.copy(X[1]);
                Rn.copy(X[2]);
                n.uv = Ne.getUV(On, W, q, Y, Cn, Pn, Rn, new ft());
              }
              n.face = j;
              n.faceIndex = G;
              e.push(n);
            }
          }
        }
      }
    }
  });
  var Bn = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      if (void 0 === e) {
        e = 1;
      }
      if (void 0 === n) {
        n = 1;
      }
      if (void 0 === r) {
        r = 1;
      }
      if (void 0 === i) {
        i = 1;
      }
      if (void 0 === a) {
        a = 1;
      }
      if (void 0 === o) {
        o = 1;
      }
      (s = t.call(this) || this).type = "BoxBufferGeometry";
      s.parameters = {
        width: e,
        height: n,
        depth: r,
        widthSegments: i,
        heightSegments: a,
        depthSegments: o
      };
      var l = ht(s);
      i = Math.floor(i);
      a = Math.floor(a);
      o = Math.floor(o);
      var u = [];
      var c = [];
      var h = [];
      var d = [];
      var f = 0;
      var p = 0;
      function m(t, e, n, r, i, a, o, s, m, v, g) {
        for (y = a / m, b = o / v, x = a / 2, _ = o / 2, w = s / 2, S = m + 1, E = v + 1, T = 0, M = 0, A = new wt(), L = 0, void 0; L < E; L++) {
          var y;
          var b;
          var x;
          var _;
          var w;
          var S;
          var E;
          var T;
          var M;
          var A;
          var L;
          for (C = L * b - _, P = 0, void 0; P < S; P++) {
            var C;
            var P;
            var R = P * y - x;
            A[t] = R * r;
            A[e] = C * i;
            A[n] = w;
            c.push(A.x, A.y, A.z);
            A[t] = 0;
            A[e] = 0;
            A[n] = s > 0 ? 1 : -1;
            h.push(A.x, A.y, A.z);
            d.push(P / m);
            d.push(1 - L / v);
            T += 1;
          }
        }
        for (var O = 0; O < v; O++) for (var I = 0; I < m; I++) {
          var D = f + I + S * O;
          var k = f + I + S * (O + 1);
          var N = f + (I + 1) + S * (O + 1);
          var B = f + (I + 1) + S * O;
          u.push(D, k, B);
          u.push(k, N, B);
          M += 6;
        }
        l.addGroup(p, M, g);
        p += M;
        f += T;
      }
      m("z", "y", "x", -1, -1, r, n, e, o, a, 0);
      m("z", "y", "x", 1, -1, r, n, -e, o, a, 1);
      m("x", "z", "y", 1, 1, e, r, n, i, o, 2);
      m("x", "z", "y", 1, -1, e, r, -n, i, o, 3);
      m("x", "y", "z", 1, -1, e, n, r, i, a, 4);
      m("x", "y", "z", -1, -1, e, n, -r, i, a, 5);
      s.setIndex(u);
      s.setAttribute("position", new an(c, 3));
      s.setAttribute("normal", new an(h, 3));
      s.setAttribute("uv", new an(d, 2));
      return s;
    }
    ct(e, t);
    return e;
  }(vn);
  function Fn(t) {
    var e = {};
    for (var n in t) for (var r in e[n] = {}, t[n]) {
      var i = t[n][r];
      if (i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture)) {
        e[n][r] = i.clone();
      } else {
        if (Array.isArray(i)) {
          e[n][r] = i.slice();
        } else {
          e[n][r] = i;
        }
      }
    }
    return e;
  }
  function Un(t) {
    for (e = {}, n = 0, void 0; n < t.length; n++) {
      var e;
      var n;
      var r = Fn(t[n]);
      for (var i in r) e[i] = r[i];
    }
    return e;
  }
  var zn = {
    clone: Fn,
    merge: Un
  };
  function Gn(t) {
    qe.call(this);
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
    this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    this.linewidth = 1;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.fog = !1;
    this.lights = !1;
    this.clipping = !1;
    this.skinning = !1;
    this.morphTargets = !1;
    this.morphNormals = !1;
    this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    };
    this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = !1;
    this.glslVersion = null;
    if (void 0 !== t) {
      if (void 0 !== t.attributes) {
        console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.");
      }
      this.setValues(t);
    }
  }
  function Hn() {
    _e.call(this);
    this.type = "Camera";
    this.matrixWorldInverse = new Kt();
    this.projectionMatrix = new Kt();
    this.projectionMatrixInverse = new Kt();
  }
  function jn(t, e, n, r) {
    Hn.call(this);
    this.type = "PerspectiveCamera";
    this.fov = void 0 !== t ? t : 50;
    this.zoom = 1;
    this.near = void 0 !== n ? n : 0.1;
    this.far = void 0 !== r ? r : 2e3;
    this.focus = 10;
    this.aspect = void 0 !== e ? e : 1;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  Gn.prototype = Object.create(qe.prototype);
  Gn.prototype.constructor = Gn;
  Gn.prototype.isShaderMaterial = !0;
  Gn.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.fragmentShader = t.fragmentShader;
    this.vertexShader = t.vertexShader;
    this.uniforms = Fn(t.uniforms);
    this.defines = Object.assign({}, t.defines);
    this.wireframe = t.wireframe;
    this.wireframeLinewidth = t.wireframeLinewidth;
    this.lights = t.lights;
    this.clipping = t.clipping;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    this.morphNormals = t.morphNormals;
    this.extensions = Object.assign({}, t.extensions);
    this.glslVersion = t.glslVersion;
    return this;
  };
  Gn.prototype.toJSON = function (t) {
    var e = qe.prototype.toJSON.call(this, t);
    for (var n in e.glslVersion = this.glslVersion, e.uniforms = {}, this.uniforms) {
      var r = this.uniforms[n].value;
      if (r && r.isTexture) {
        e.uniforms[n] = {
          type: "t",
          value: r.toJSON(t).uuid
        };
      } else {
        if (r && r.isColor) {
          e.uniforms[n] = {
            type: "c",
            value: r.getHex()
          };
        } else {
          if (r && r.isVector2) {
            e.uniforms[n] = {
              type: "v2",
              value: r.toArray()
            };
          } else {
            if (r && r.isVector3) {
              e.uniforms[n] = {
                type: "v3",
                value: r.toArray()
              };
            } else {
              if (r && r.isVector4) {
                e.uniforms[n] = {
                  type: "v4",
                  value: r.toArray()
                };
              } else {
                if (r && r.isMatrix3) {
                  e.uniforms[n] = {
                    type: "m3",
                    value: r.toArray()
                  };
                } else {
                  if (r && r.isMatrix4) {
                    e.uniforms[n] = {
                      type: "m4",
                      value: r.toArray()
                    };
                  } else {
                    e.uniforms[n] = {
                      value: r
                    };
                  }
                }
              }
            }
          }
        }
      }
    }
    if (Object.keys(this.defines).length > 0) {
      e.defines = this.defines;
    }
    e.vertexShader = this.vertexShader;
    e.fragmentShader = this.fragmentShader;
    var i = {};
    for (var a in this.extensions) if (!0 === this.extensions[a]) {
      i[a] = !0;
    }
    if (Object.keys(i).length > 0) {
      e.extensions = i;
    }
    return e;
  };
  Hn.prototype = Object.assign(Object.create(_e.prototype), {
    constructor: Hn,
    isCamera: !0,
    copy: function (t, e) {
      _e.prototype.copy.call(this, t, e);
      this.matrixWorldInverse.copy(t.matrixWorldInverse);
      this.projectionMatrix.copy(t.projectionMatrix);
      this.projectionMatrixInverse.copy(t.projectionMatrixInverse);
      return this;
    },
    getWorldDirection: function (t) {
      if (void 0 === t) {
        console.warn("THREE.Camera: .getWorldDirection() target is now required");
        t = new wt();
      }
      this.updateWorldMatrix(!0, !1);
      var e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize();
    },
    updateMatrixWorld: function (t) {
      _e.prototype.updateMatrixWorld.call(this, t);
      this.matrixWorldInverse.getInverse(this.matrixWorld);
    },
    updateWorldMatrix: function (t, e) {
      _e.prototype.updateWorldMatrix.call(this, t, e);
      this.matrixWorldInverse.getInverse(this.matrixWorld);
    },
    clone: function () {
      return new this.constructor().copy(this);
    }
  });
  jn.prototype = Object.assign(Object.create(Hn.prototype), {
    constructor: jn,
    isPerspectiveCamera: !0,
    copy: function (t, e) {
      Hn.prototype.copy.call(this, t, e);
      this.fov = t.fov;
      this.zoom = t.zoom;
      this.near = t.near;
      this.far = t.far;
      this.focus = t.focus;
      this.aspect = t.aspect;
      this.view = null === t.view ? null : Object.assign({}, t.view);
      this.filmGauge = t.filmGauge;
      this.filmOffset = t.filmOffset;
      return this;
    },
    setFocalLength: function (t) {
      var e = 0.5 * this.getFilmHeight() / t;
      this.fov = 2 * st.RAD2DEG * Math.atan(e);
      this.updateProjectionMatrix();
    },
    getFocalLength: function () {
      var t = Math.tan(0.5 * st.DEG2RAD * this.fov);
      return 0.5 * this.getFilmHeight() / t;
    },
    getEffectiveFOV: function () {
      return 2 * st.RAD2DEG * Math.atan(Math.tan(0.5 * st.DEG2RAD * this.fov) / this.zoom);
    },
    getFilmWidth: function () {
      return this.filmGauge * Math.min(this.aspect, 1);
    },
    getFilmHeight: function () {
      return this.filmGauge / Math.max(this.aspect, 1);
    },
    setViewOffset: function (t, e, n, r, i, a) {
      this.aspect = t / e;
      if (null === this.view) {
        this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        };
      }
      this.view.enabled = !0;
      this.view.fullWidth = t;
      this.view.fullHeight = e;
      this.view.offsetX = n;
      this.view.offsetY = r;
      this.view.width = i;
      this.view.height = a;
      this.updateProjectionMatrix();
    },
    clearViewOffset: function () {
      if (null !== this.view) {
        this.view.enabled = !1;
      }
      this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function () {
      var t = this.near;
      var e = t * Math.tan(0.5 * st.DEG2RAD * this.fov) / this.zoom;
      var n = 2 * e;
      var r = this.aspect * n;
      var i = -0.5 * r;
      var a = this.view;
      if (null !== this.view && this.view.enabled) {
        var o = a.fullWidth;
        var s = a.fullHeight;
        i += a.offsetX * r / o;
        e -= a.offsetY * n / s;
        r *= a.width / o;
        n *= a.height / s;
      }
      var l = this.filmOffset;
      if (0 !== l) {
        i += t * l / this.getFilmWidth();
      }
      this.projectionMatrix.makePerspective(i, i + r, e, e - n, t, this.far);
      this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON: function (t) {
      var e = _e.prototype.toJSON.call(this, t);
      e.object.fov = this.fov;
      e.object.zoom = this.zoom;
      e.object.near = this.near;
      e.object.far = this.far;
      e.object.focus = this.focus;
      e.object.aspect = this.aspect;
      if (null !== this.view) {
        e.object.view = Object.assign({}, this.view);
      }
      e.object.filmGauge = this.filmGauge;
      e.object.filmOffset = this.filmOffset;
      return e;
    }
  });
  var Vn = 90;
  function Wn(t, e, n) {
    _e.call(this);
    this.type = "CubeCamera";
    if (!0 === n.isWebGLCubeRenderTarget) {
      this.renderTarget = n;
      var r = new jn(Vn, 1, t, e);
      r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new wt(1, 0, 0)), this.add(r);
      var i = new jn(Vn, 1, t, e);
      i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new wt(-1, 0, 0)), this.add(i);
      var a = new jn(Vn, 1, t, e);
      a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new wt(0, 1, 0)), this.add(a);
      var o = new jn(Vn, 1, t, e);
      o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new wt(0, -1, 0)), this.add(o);
      var s = new jn(Vn, 1, t, e);
      s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new wt(0, 0, 1)), this.add(s);
      var l = new jn(Vn, 1, t, e);
      l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new wt(0, 0, -1)), this.add(l), this.update = function (t, e) {
        null === this.parent && this.updateMatrixWorld();
        var u = t.xr.enabled,
          c = t.getRenderTarget();
        t.xr.enabled = !1;
        var h = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, r), t.setRenderTarget(n, 1), t.render(e, i), t.setRenderTarget(n, 2), t.render(e, a), t.setRenderTarget(n, 3), t.render(e, o), t.setRenderTarget(n, 4), t.render(e, s), n.texture.generateMipmaps = h, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(c), t.xr.enabled = u;
      };
    } else console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
  }
  function qn(t, e, n, i, a, o, s, l, u, c) {
    t = void 0 !== t ? t : [];
    e = void 0 !== e ? e : r;
    s = void 0 !== s ? s : E;
    gt.call(this, t, e, n, i, a, o, s, l, u, c);
    this.flipY = !1;
    this._needsFlipEnvMap = !0;
  }
  function Yn(t, e, n) {
    if (Number.isInteger(e)) {
      console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )");
      e = n;
    }
    bt.call(this, t, t, e);
    e = e || {};
    this.texture = new qn(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding);
    this.texture._needsFlipEnvMap = !1;
  }
  function Xn(t, e, n, r, i, a, o, s, l, u, c, h) {
    gt.call(this, null, a, o, s, l, u, r, i, c, h);
    this.image = {
      data: t || null,
      width: e || 1,
      height: n || 1
    };
    this.magFilter = void 0 !== l ? l : d;
    this.minFilter = void 0 !== u ? u : d;
    this.generateMipmaps = !1;
    this.flipY = !1;
    this.unpackAlignment = 1;
    this.needsUpdate = !0;
  }
  Wn.prototype = Object.create(_e.prototype);
  Wn.prototype.constructor = Wn;
  qn.prototype = Object.create(gt.prototype);
  qn.prototype.constructor = qn;
  qn.prototype.isCubeTexture = !0;
  Object.defineProperty(qn.prototype, "images", {
    get: function () {
      return this.image;
    },
    set: function (t) {
      this.image = t;
    }
  });
  Yn.prototype = Object.create(bt.prototype);
  Yn.prototype.constructor = Yn;
  Yn.prototype.isWebGLCubeRenderTarget = !0;
  Yn.prototype.fromEquirectangularTexture = function (t, e) {
    this.texture.type = e.type;
    this.texture.format = T;
    this.texture.encoding = e.encoding;
    this.texture.generateMipmaps = e.generateMipmaps;
    this.texture.minFilter = e.minFilter;
    this.texture.magFilter = e.magFilter;
    var n = {
      tEquirect: {
        value: null
      }
    };
    var r = "\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t#include <project_vertex>\n\n\t\t\t}\n\t\t";
    var i = "\n\n\t\t\tuniform sampler2D tEquirect;\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t}\n\t\t";
    var a = new Bn(5, 5, 5);
    var o = new Gn({
      name: "CubemapFromEquirect",
      uniforms: Fn(n),
      vertexShader: r,
      fragmentShader: i,
      side: 1,
      blending: 0
    });
    o.uniforms.tEquirect.value = e;
    var s = new Dn(a, o);
    var l = e.minFilter;
    if (e.minFilter === g) {
      e.minFilter = m;
    }
    new Wn(1, 10, this).update(t, s);
    e.minFilter = l;
    s.geometry.dispose();
    s.material.dispose();
    return this;
  };
  Yn.prototype.clear = function (t, e, n, r) {
    for (i = t.getRenderTarget(), a = 0, void 0; a < 6; a++) {
      var i;
      var a;
      t.setRenderTarget(this, a);
      t.clear(e, n, r);
    }
    t.setRenderTarget(i);
  };
  Xn.prototype = Object.create(gt.prototype);
  Xn.prototype.constructor = Xn;
  Xn.prototype.isDataTexture = !0;
  var Zn = new Gt();
  var Kn = new wt();
  var Jn = function () {
    function t(t, e, n, r, i, a) {
      this.planes = [void 0 !== t ? t : new Te(), void 0 !== e ? e : new Te(), void 0 !== n ? n : new Te(), void 0 !== r ? r : new Te(), void 0 !== i ? i : new Te(), void 0 !== a ? a : new Te()];
    }
    var e = t.prototype;
    e.set = function (t, e, n, r, i, a) {
      var o = this.planes;
      o[0].copy(t);
      o[1].copy(e);
      o[2].copy(n);
      o[3].copy(r);
      o[4].copy(i);
      o[5].copy(a);
      return this;
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      for (e = this.planes, n = 0, void 0; n < 6; n++) {
        var e;
        var n;
        e[n].copy(t.planes[n]);
      }
      return this;
    };
    e.setFromProjectionMatrix = function (t) {
      var e = this.planes;
      var n = t.elements;
      var r = n[0];
      var i = n[1];
      var a = n[2];
      var o = n[3];
      var s = n[4];
      var l = n[5];
      var u = n[6];
      var c = n[7];
      var h = n[8];
      var d = n[9];
      var f = n[10];
      var p = n[11];
      var m = n[12];
      var v = n[13];
      var g = n[14];
      var y = n[15];
      e[0].setComponents(o - r, c - s, p - h, y - m).normalize();
      e[1].setComponents(o + r, c + s, p + h, y + m).normalize();
      e[2].setComponents(o + i, c + l, p + d, y + v).normalize();
      e[3].setComponents(o - i, c - l, p - d, y - v).normalize();
      e[4].setComponents(o - a, c - u, p - f, y - g).normalize();
      e[5].setComponents(o + a, c + u, p + f, y + g).normalize();
      return this;
    };
    e.intersectsObject = function (t) {
      var e = t.geometry;
      if (null === e.boundingSphere) {
        e.computeBoundingSphere();
      }
      Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
      return this.intersectsSphere(Zn);
    };
    e.intersectsSprite = function (t) {
      Zn.center.set(0, 0, 0);
      Zn.radius = 0.7071067811865476;
      Zn.applyMatrix4(t.matrixWorld);
      return this.intersectsSphere(Zn);
    };
    e.intersectsSphere = function (t) {
      for (e = this.planes, n = t.center, r = -t.radius, i = 0, void 0; i < 6; i++) {
        var e;
        var n;
        var r;
        var i;
        if (e[i].distanceToPoint(n) < r) return !1;
      }
      return !0;
    };
    e.intersectsBox = function (t) {
      for (e = this.planes, n = 0, void 0; n < 6; n++) {
        var e;
        var n;
        var r = e[n];
        Kn.x = r.normal.x > 0 ? t.max.x : t.min.x;
        Kn.y = r.normal.y > 0 ? t.max.y : t.min.y;
        Kn.z = r.normal.z > 0 ? t.max.z : t.min.z;
        if (r.distanceToPoint(Kn) < 0) return !1;
      }
      return !0;
    };
    e.containsPoint = function (t) {
      for (e = this.planes, n = 0, void 0; n < 6; n++) {
        var e;
        var n;
        if (e[n].distanceToPoint(t) < 0) return !1;
      }
      return !0;
    };
    return t;
  }();
  function $n() {
    var t = null;
    var e = !1;
    var n = null;
    var r = null;
    function i(e, a) {
      n(e, a);
      r = t.requestAnimationFrame(i);
    }
    return {
      start: function () {
        if (!0 !== e && null !== n) {
          r = t.requestAnimationFrame(i);
          e = !0;
        }
      },
      stop: function () {
        t.cancelAnimationFrame(r);
        e = !1;
      },
      setAnimationLoop: function (t) {
        n = t;
      },
      setContext: function (e) {
        t = e;
      }
    };
  }
  function Qn(t, e) {
    var n = e.isWebGL2;
    var r = new WeakMap();
    return {
      get: function (t) {
        if (t.isInterleavedBufferAttribute) {
          t = t.data;
        }
        return r.get(t);
      },
      remove: function (e) {
        if (e.isInterleavedBufferAttribute) {
          e = e.data;
        }
        var n = r.get(e);
        if (n) {
          t.deleteBuffer(n.buffer);
          r.delete(e);
        }
      },
      update: function (e, i) {
        if (e.isGLBufferAttribute) {
          var a = r.get(e);
          if (!a || a.version < e.version) {
            r.set(e, {
              buffer: e.buffer,
              type: e.type,
              bytesPerElement: e.elementSize,
              version: e.version
            });
          }
        } else {
          if (e.isInterleavedBufferAttribute) {
            e = e.data;
          }
          var o = r.get(e);
          if (void 0 === o) {
            r.set(e, function (e, n) {
              var r = e.array;
              var i = e.usage;
              var a = t.createBuffer();
              t.bindBuffer(n, a);
              t.bufferData(n, r, i);
              e.onUploadCallback();
              var o = 5126;
              if (r instanceof Float32Array) {
                o = 5126;
              } else {
                if (r instanceof Float64Array) {
                  console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.");
                } else {
                  if (r instanceof Uint16Array) {
                    o = 5123;
                  } else {
                    if (r instanceof Int16Array) {
                      o = 5122;
                    } else {
                      if (r instanceof Uint32Array) {
                        o = 5125;
                      } else {
                        if (r instanceof Int32Array) {
                          o = 5124;
                        } else {
                          if (r instanceof Int8Array) {
                            o = 5120;
                          } else {
                            if (r instanceof Uint8Array) {
                              o = 5121;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              return {
                buffer: a,
                type: o,
                bytesPerElement: r.BYTES_PER_ELEMENT,
                version: e.version
              };
            }(e, i));
          } else {
            if (o.version < e.version) {
              (function (e, r, i) {
                var a = r.array;
                var o = r.updateRange;
                t.bindBuffer(i, e);
                if (-1 === o.count) {
                  t.bufferSubData(i, 0, a);
                } else {
                  if (n) {
                    t.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count);
                  } else {
                    t.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count));
                  }
                  o.count = -1;
                }
              })(o.buffer, e, i);
              o.version = e.version;
            }
          }
        }
      }
    };
  }
  var tr = function (t) {
    function e(e, n, r, i) {
      var a;
      (a = t.call(this) || this).type = "PlaneBufferGeometry";
      a.parameters = {
        width: e,
        height: n,
        widthSegments: r,
        heightSegments: i
      };
      for (o = (e = e || 1) / 2, s = (n = n || 1) / 2, l = Math.floor(r) || 1, u = Math.floor(i) || 1, c = l + 1, h = u + 1, d = e / l, f = n / u, p = [], m = [], v = [], g = [], y = 0, void 0; y < h; y++) {
        var o;
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var p;
        var m;
        var v;
        var g;
        var y;
        for (b = y * f - s, x = 0, void 0; x < c; x++) {
          var b;
          var x;
          var _ = x * d - o;
          m.push(_, -b, 0);
          v.push(0, 0, 1);
          g.push(x / l);
          g.push(1 - y / u);
        }
      }
      for (var w = 0; w < u; w++) for (var S = 0; S < l; S++) {
        var E = S + c * w;
        var T = S + c * (w + 1);
        var M = S + 1 + c * (w + 1);
        var A = S + 1 + c * w;
        p.push(E, T, A);
        p.push(T, M, A);
      }
      a.setIndex(p);
      a.setAttribute("position", new an(m, 3));
      a.setAttribute("normal", new an(v, 3));
      a.setAttribute("uv", new an(g, 2));
      return a;
    }
    ct(e, t);
    return e;
  }(vn);
  var er = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
    normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
    transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
  };
  var nr = {
    common: {
      diffuse: {
        value: new je(15658734)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      uvTransform: {
        value: new pt()
      },
      uv2Transform: {
        value: new pt()
      },
      alphaMap: {
        value: null
      }
    },
    specularmap: {
      specularMap: {
        value: null
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      refractionRatio: {
        value: 0.98
      },
      maxMipLevel: {
        value: 0
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalScale: {
        value: new ft(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 25e-5
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2e3
      },
      fogColor: {
        value: new je(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {}
        }
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {}
        }
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotShadowMap: {
        value: []
      },
      spotShadowMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {}
        }
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      },
      ltc_1: {
        value: null
      },
      ltc_2: {
        value: null
      }
    },
    points: {
      diffuse: {
        value: new je(15658734)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new pt()
      }
    },
    sprite: {
      diffuse: {
        value: new je(15658734)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new ft(0.5, 0.5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new pt()
      }
    }
  };
  var rr = {
    basic: {
      uniforms: Un([nr.common, nr.specularmap, nr.envmap, nr.aomap, nr.lightmap, nr.fog]),
      vertexShader: er.meshbasic_vert,
      fragmentShader: er.meshbasic_frag
    },
    lambert: {
      uniforms: Un([nr.common, nr.specularmap, nr.envmap, nr.aomap, nr.lightmap, nr.emissivemap, nr.fog, nr.lights, {
        emissive: {
          value: new je(0)
        }
      }]),
      vertexShader: er.meshlambert_vert,
      fragmentShader: er.meshlambert_frag
    },
    phong: {
      uniforms: Un([nr.common, nr.specularmap, nr.envmap, nr.aomap, nr.lightmap, nr.emissivemap, nr.bumpmap, nr.normalmap, nr.displacementmap, nr.fog, nr.lights, {
        emissive: {
          value: new je(0)
        },
        specular: {
          value: new je(1118481)
        },
        shininess: {
          value: 30
        }
      }]),
      vertexShader: er.meshphong_vert,
      fragmentShader: er.meshphong_frag
    },
    standard: {
      uniforms: Un([nr.common, nr.envmap, nr.aomap, nr.lightmap, nr.emissivemap, nr.bumpmap, nr.normalmap, nr.displacementmap, nr.roughnessmap, nr.metalnessmap, nr.fog, nr.lights, {
        emissive: {
          value: new je(0)
        },
        roughness: {
          value: 1
        },
        metalness: {
          value: 0
        },
        envMapIntensity: {
          value: 1
        }
      }]),
      vertexShader: er.meshphysical_vert,
      fragmentShader: er.meshphysical_frag
    },
    toon: {
      uniforms: Un([nr.common, nr.aomap, nr.lightmap, nr.emissivemap, nr.bumpmap, nr.normalmap, nr.displacementmap, nr.gradientmap, nr.fog, nr.lights, {
        emissive: {
          value: new je(0)
        }
      }]),
      vertexShader: er.meshtoon_vert,
      fragmentShader: er.meshtoon_frag
    },
    matcap: {
      uniforms: Un([nr.common, nr.bumpmap, nr.normalmap, nr.displacementmap, nr.fog, {
        matcap: {
          value: null
        }
      }]),
      vertexShader: er.meshmatcap_vert,
      fragmentShader: er.meshmatcap_frag
    },
    points: {
      uniforms: Un([nr.points, nr.fog]),
      vertexShader: er.points_vert,
      fragmentShader: er.points_frag
    },
    dashed: {
      uniforms: Un([nr.common, nr.fog, {
        scale: {
          value: 1
        },
        dashSize: {
          value: 1
        },
        totalSize: {
          value: 2
        }
      }]),
      vertexShader: er.linedashed_vert,
      fragmentShader: er.linedashed_frag
    },
    depth: {
      uniforms: Un([nr.common, nr.displacementmap]),
      vertexShader: er.depth_vert,
      fragmentShader: er.depth_frag
    },
    normal: {
      uniforms: Un([nr.common, nr.bumpmap, nr.normalmap, nr.displacementmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: er.normal_vert,
      fragmentShader: er.normal_frag
    },
    sprite: {
      uniforms: Un([nr.sprite, nr.fog]),
      vertexShader: er.sprite_vert,
      fragmentShader: er.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new pt()
        },
        t2D: {
          value: null
        }
      },
      vertexShader: er.background_vert,
      fragmentShader: er.background_frag
    },
    cube: {
      uniforms: Un([nr.envmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: er.cube_vert,
      fragmentShader: er.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: er.equirect_vert,
      fragmentShader: er.equirect_frag
    },
    distanceRGBA: {
      uniforms: Un([nr.common, nr.displacementmap, {
        referencePosition: {
          value: new wt()
        },
        nearDistance: {
          value: 1
        },
        farDistance: {
          value: 1e3
        }
      }]),
      vertexShader: er.distanceRGBA_vert,
      fragmentShader: er.distanceRGBA_frag
    },
    shadow: {
      uniforms: Un([nr.lights, nr.fog, {
        color: {
          value: new je(0)
        },
        opacity: {
          value: 1
        }
      }]),
      vertexShader: er.shadow_vert,
      fragmentShader: er.shadow_frag
    }
  };
  function ir(t, e, n, r, i) {
    var a;
    var o;
    var l = new je(0);
    var u = 0;
    var c = null;
    var h = 0;
    var d = null;
    function f(t, e) {
      n.buffers.color.setClear(t.r, t.g, t.b, e, i);
    }
    return {
      getClearColor: function () {
        return l;
      },
      setClearColor: function (t, e) {
        l.set(t);
        f(l, u = void 0 !== e ? e : 1);
      },
      getClearAlpha: function () {
        return u;
      },
      setClearAlpha: function (t) {
        f(l, u = t);
      },
      render: function (n, i, p, m) {
        var v = !0 === i.isScene ? i.background : null;
        if (v && v.isTexture) {
          v = e.get(v);
        }
        var g = t.xr;
        var y = g.getSession && g.getSession();
        if (y && "additive" === y.environmentBlendMode) {
          v = null;
        }
        if (null === v) {
          f(l, u);
        } else {
          if (v && v.isColor) {
            f(v, 1);
            m = !0;
          }
        }
        if (t.autoClear || m) {
          t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil);
        }
        if (v && (v.isCubeTexture || v.isWebGLCubeRenderTarget || v.mapping === s)) {
          if (void 0 === o) {
            (o = new Dn(new Bn(1, 1, 1), new Gn({
              name: "BackgroundCubeMaterial",
              uniforms: Fn(rr.cube.uniforms),
              vertexShader: rr.cube.vertexShader,
              fragmentShader: rr.cube.fragmentShader,
              side: 1,
              depthTest: !1,
              depthWrite: !1,
              fog: !1
            }))).geometry.deleteAttribute("normal");
            o.geometry.deleteAttribute("uv");
            o.onBeforeRender = function (t, e, n) {
              this.matrixWorld.copyPosition(n.matrixWorld);
            };
            Object.defineProperty(o.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              }
            });
            r.update(o);
          }
          if (v.isWebGLCubeRenderTarget) {
            v = v.texture;
          }
          o.material.uniforms.envMap.value = v;
          o.material.uniforms.flipEnvMap.value = v.isCubeTexture && v._needsFlipEnvMap ? -1 : 1;
          if (c === v && h === v.version && d === t.toneMapping) {
            o.material.needsUpdate = !0;
            c = v;
            h = v.version;
            d = t.toneMapping;
          }
          n.unshift(o, o.geometry, o.material, 0, 0, null);
        } else {
          if (v && v.isTexture) {
            if (void 0 === a) {
              (a = new Dn(new tr(2, 2), new Gn({
                name: "BackgroundMaterial",
                uniforms: Fn(rr.background.uniforms),
                vertexShader: rr.background.vertexShader,
                fragmentShader: rr.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
              }))).geometry.deleteAttribute("normal");
              Object.defineProperty(a.material, "map", {
                get: function () {
                  return this.uniforms.t2D.value;
                }
              });
              r.update(a);
            }
            a.material.uniforms.t2D.value = v;
            if (!0 === v.matrixAutoUpdate) {
              v.updateMatrix();
            }
            a.material.uniforms.uvTransform.value.copy(v.matrix);
            if (c === v && h === v.version && d === t.toneMapping) {
              a.material.needsUpdate = !0;
              c = v;
              h = v.version;
              d = t.toneMapping;
            }
            n.unshift(a, a.geometry, a.material, 0, 0, null);
          }
        }
      }
    };
  }
  function ar(t, e, n, r) {
    var i = t.getParameter(34921);
    var a = r.isWebGL2 ? null : e.get("OES_vertex_array_object");
    var o = r.isWebGL2 || null !== a;
    var s = {};
    var l = d(null);
    var u = l;
    function c(e) {
      return r.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
    }
    function h(e) {
      return r.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e);
    }
    function d(t) {
      for (e = [], n = [], r = [], a = 0, void 0; a < i; a++) {
        var e;
        var n;
        var r;
        var a;
        e[a] = 0;
        n[a] = 0;
        r[a] = 0;
      }
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: r,
        object: t,
        attributes: {},
        index: null
      };
    }
    function f() {
      for (t = u.newAttributes, e = 0, n = t.length, void 0; e < n; e++) {
        var t;
        var e;
        var n;
        t[e] = 0;
      }
    }
    function p(t) {
      m(t, 0);
    }
    function m(n, i) {
      var a = u.newAttributes;
      var o = u.enabledAttributes;
      var s = u.attributeDivisors;
      a[n] = 1;
      if (0 === o[n]) {
        t.enableVertexAttribArray(n);
        o[n] = 1;
      }
      if (s[n] !== i) {
        (r.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[r.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, i);
        s[n] = i;
      }
    }
    function v() {
      for (e = u.newAttributes, n = u.enabledAttributes, r = 0, i = n.length, void 0; r < i; r++) {
        var e;
        var n;
        var r;
        var i;
        if (n[r] !== e[r]) {
          t.disableVertexAttribArray(r);
          n[r] = 0;
        }
      }
    }
    function g(e, n, i, a, o, s) {
      if (!0 !== r.isWebGL2 || 5124 !== i && 5125 !== i) {
        t.vertexAttribPointer(e, n, i, a, o, s);
      } else {
        t.vertexAttribIPointer(e, n, i, o, s);
      }
    }
    function y() {
      b();
      if (u !== l) {
        c((u = l).object);
      }
    }
    function b() {
      l.geometry = null;
      l.program = null;
      l.wireframe = !1;
    }
    return {
      setup: function (i, l, h, y, b) {
        var x = !1;
        if (o) {
          var _ = function (e, n, i) {
            var o = !0 === i.wireframe;
            var l = s[e.id];
            if (void 0 === l) {
              l = {};
              s[e.id] = l;
            }
            var u = l[n.id];
            if (void 0 === u) {
              u = {};
              l[n.id] = u;
            }
            var c = u[o];
            if (void 0 === c) {
              c = d(r.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES());
              u[o] = c;
            }
            return c;
          }(y, h, l);
          if (u !== _) {
            c((u = _).object);
          }
          if (x = function (t, e) {
            var n = u.attributes;
            var r = t.attributes;
            if (Object.keys(n).length !== Object.keys(r).length) return !0;
            for (var i in r) {
              var a = n[i];
              var o = r[i];
              if (void 0 === a) return !0;
              if (a.attribute !== o) return !0;
              if (a.data !== o.data) return !0;
            }
            return u.index !== e;
          }(y, b)) {
            (function (t, e) {
              var n = {};
              var r = t.attributes;
              for (var i in r) {
                var a = r[i];
                var o = {};
                o.attribute = a;
                if (a.data) {
                  o.data = a.data;
                }
                n[i] = o;
              }
              u.attributes = n;
              u.index = e;
            })(y, b);
          }
        } else {
          var w = !0 === l.wireframe;
          if (u.geometry === y.id && u.program === h.id && u.wireframe === w) {
            u.geometry = y.id;
            u.program = h.id;
            u.wireframe = w;
            x = !0;
          }
        }
        if (!0 === i.isInstancedMesh) {
          x = !0;
        }
        if (null !== b) {
          n.update(b, 34963);
        }
        if (x) {
          (function (i, a, o, s) {
            if (!1 !== r.isWebGL2 || !i.isInstancedMesh && !s.isInstancedBufferGeometry || null !== e.get("ANGLE_instanced_arrays")) {
              f();
              var l = s.attributes;
              var u = o.getAttributes();
              var c = a.defaultAttributeValues;
              for (var h in u) {
                var d = u[h];
                if (d >= 0) {
                  var y = l[h];
                  if (void 0 !== y) {
                    var b = y.normalized;
                    var x = y.itemSize;
                    var _ = n.get(y);
                    if (void 0 === _) continue;
                    var w = _.buffer;
                    var S = _.type;
                    var E = _.bytesPerElement;
                    if (y.isInterleavedBufferAttribute) {
                      var T = y.data;
                      var M = T.stride;
                      var A = y.offset;
                      if (T && T.isInstancedInterleavedBuffer) {
                        m(d, T.meshPerAttribute);
                        if (void 0 === s._maxInstanceCount) {
                          s._maxInstanceCount = T.meshPerAttribute * T.count;
                        }
                      } else {
                        p(d);
                      }
                      t.bindBuffer(34962, w);
                      g(d, x, S, b, M * E, A * E);
                    } else {
                      if (y.isInstancedBufferAttribute) {
                        m(d, y.meshPerAttribute);
                        if (void 0 === s._maxInstanceCount) {
                          s._maxInstanceCount = y.meshPerAttribute * y.count;
                        }
                      } else {
                        p(d);
                      }
                      t.bindBuffer(34962, w);
                      g(d, x, S, b, 0, 0);
                    }
                  } else if ("instanceMatrix" === h) {
                    var L = n.get(i.instanceMatrix);
                    if (void 0 === L) continue;
                    var C = L.buffer;
                    var P = L.type;
                    m(d + 0, 1);
                    m(d + 1, 1);
                    m(d + 2, 1);
                    m(d + 3, 1);
                    t.bindBuffer(34962, C);
                    t.vertexAttribPointer(d + 0, 4, P, !1, 64, 0);
                    t.vertexAttribPointer(d + 1, 4, P, !1, 64, 16);
                    t.vertexAttribPointer(d + 2, 4, P, !1, 64, 32);
                    t.vertexAttribPointer(d + 3, 4, P, !1, 64, 48);
                  } else if ("instanceColor" === h) {
                    var R = n.get(i.instanceColor);
                    if (void 0 === R) continue;
                    var O = R.buffer;
                    var I = R.type;
                    m(d, 1);
                    t.bindBuffer(34962, O);
                    t.vertexAttribPointer(d, 3, I, !1, 12, 0);
                  } else if (void 0 !== c) {
                    var D = c[h];
                    if (void 0 !== D) switch (D.length) {
                      case 2:
                        t.vertexAttrib2fv(d, D);
                        break;
                      case 3:
                        t.vertexAttrib3fv(d, D);
                        break;
                      case 4:
                        t.vertexAttrib4fv(d, D);
                        break;
                      default:
                        t.vertexAttrib1fv(d, D);
                    }
                  }
                }
              }
              v();
            }
          })(i, l, h, y);
          if (null !== b) {
            t.bindBuffer(34963, n.get(b).buffer);
          }
        }
      },
      reset: y,
      resetDefaultState: b,
      dispose: function () {
        for (var t in y(), s) {
          var e = s[t];
          for (var n in e) {
            var r = e[n];
            for (var i in r) {
              h(r[i].object);
              delete r[i];
            }
            delete e[n];
          }
          delete s[t];
        }
      },
      releaseStatesOfGeometry: function (t) {
        if (void 0 !== s[t.id]) {
          var e = s[t.id];
          for (var n in e) {
            var r = e[n];
            for (var i in r) {
              h(r[i].object);
              delete r[i];
            }
            delete e[n];
          }
          delete s[t.id];
        }
      },
      releaseStatesOfProgram: function (t) {
        for (var e in s) {
          var n = s[e];
          if (void 0 !== n[t.id]) {
            var r = n[t.id];
            for (var i in r) {
              h(r[i].object);
              delete r[i];
            }
            delete n[t.id];
          }
        }
      },
      initAttributes: f,
      enableAttribute: p,
      disableUnusedAttributes: v
    };
  }
  function or(t, e, n, r) {
    var i;
    var a = r.isWebGL2;
    this.setMode = function (t) {
      i = t;
    };
    this.render = function (e, r) {
      t.drawArrays(i, e, r);
      n.update(r, i, 1);
    };
    this.renderInstances = function (r, o, s) {
      if (0 !== s) {
        var l;
        var u;
        if (a) {
          l = t;
          u = "drawArraysInstanced";
        } else {
          u = "drawArraysInstancedANGLE";
          if (null === (l = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        }
        l[u](i, r, o, s);
        n.update(o, i, s);
      }
    };
  }
  function sr(t, e, n) {
    var r;
    function i(e) {
      if ("highp" === e) {
        if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        e = "mediump";
      }
      return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }
    var a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
    var o = void 0 !== n.precision ? n.precision : "highp";
    var s = i(o);
    if (s !== o) {
      console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead.");
      o = s;
    }
    var l = !0 === n.logarithmicDepthBuffer;
    var u = t.getParameter(34930);
    var c = t.getParameter(35660);
    var h = t.getParameter(3379);
    var d = t.getParameter(34076);
    var f = t.getParameter(34921);
    var p = t.getParameter(36347);
    var m = t.getParameter(36348);
    var v = t.getParameter(36349);
    var g = c > 0;
    var y = a || !!e.get("OES_texture_float");
    return {
      isWebGL2: a,
      getMaxAnisotropy: function () {
        if (void 0 !== r) return r;
        var n = e.get("EXT_texture_filter_anisotropic");
        return r = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
      },
      getMaxPrecision: i,
      precision: o,
      logarithmicDepthBuffer: l,
      maxTextures: u,
      maxVertexTextures: c,
      maxTextureSize: h,
      maxCubemapSize: d,
      maxAttributes: f,
      maxVertexUniforms: p,
      maxVaryings: m,
      maxFragmentUniforms: v,
      vertexTextures: g,
      floatFragmentTextures: y,
      floatVertexTextures: g && y,
      maxSamples: a ? t.getParameter(36183) : 0
    };
  }
  function lr(t) {
    var e = this;
    var n = null;
    var r = 0;
    var i = !1;
    var a = !1;
    var o = new Te();
    var s = new pt();
    var l = {
      value: null,
      needsUpdate: !1
    };
    function u() {
      if (l.value !== n) {
        l.value = n;
        l.needsUpdate = r > 0;
      }
      e.numPlanes = r;
      e.numIntersection = 0;
    }
    function c(t, n, r, i) {
      var a = null !== t ? t.length : 0;
      var u = null;
      if (0 !== a) {
        u = l.value;
        if (!0 !== i || null === u) {
          var c = r + 4 * a,
            h = n.matrixWorldInverse;
          s.getNormalMatrix(h), (null === u || u.length < c) && (u = new Float32Array(c));
          for (var d = 0, f = r; d !== a; ++d, f += 4) o.copy(t[d]).applyMatrix4(h, s), o.normal.toArray(u, f), u[f + 3] = o.constant;
        }
        l.value = u;
        l.needsUpdate = !0;
      }
      e.numPlanes = a;
      e.numIntersection = 0;
      return u;
    }
    this.uniform = l;
    this.numPlanes = 0;
    this.numIntersection = 0;
    this.init = function (t, e, a) {
      var o = 0 !== t.length || e || 0 !== r || i;
      i = e;
      n = c(t, a, 0);
      r = t.length;
      return o;
    };
    this.beginShadows = function () {
      a = !0;
      c(null);
    };
    this.endShadows = function () {
      a = !1;
      u();
    };
    this.setState = function (e, o, s) {
      var h = e.clippingPlanes;
      var d = e.clipIntersection;
      var f = e.clipShadows;
      var p = t.get(e);
      if (!i || null === h || 0 === h.length || a && !f) {
        if (a) {
          c(null);
        } else {
          u();
        }
      } else {
        var m = a ? 0 : r;
        var v = 4 * m;
        var g = p.clippingState || null;
        l.value = g;
        g = c(h, o, v, s);
        for (var y = 0; y !== v; ++y) g[y] = n[y];
        p.clippingState = g;
        this.numIntersection = d ? this.numPlanes : 0;
        this.numPlanes += m;
      }
    };
  }
  function ur(t) {
    var e = new WeakMap();
    function n(t, e) {
      if (e === a) {
        t.mapping = r;
      } else {
        if (e === o) {
          t.mapping = i;
        }
      }
      return t;
    }
    function s(t) {
      var n = t.target;
      n.removeEventListener("dispose", s);
      var r = e.get(n);
      if (void 0 !== r) {
        e.delete(n);
        r.dispose();
      }
    }
    return {
      get: function (r) {
        if (r && r.isTexture) {
          var i = r.mapping;
          if (i === a || i === o) {
            if (e.has(r)) return n(e.get(r).texture, r.mapping);
            var l = r.image;
            if (l && l.height > 0) {
              var u = t.getRenderList();
              var c = t.getRenderTarget();
              var h = t.getRenderState();
              var d = new Yn(l.height / 2);
              d.fromEquirectangularTexture(t, r);
              e.set(r, d);
              t.setRenderTarget(c);
              t.setRenderList(u);
              t.setRenderState(h);
              r.addEventListener("dispose", s);
              return n(d.texture, r.mapping);
            }
            return null;
          }
        }
        return r;
      },
      dispose: function () {
        e = new WeakMap();
      }
    };
  }
  function cr(t) {
    var e = {};
    return {
      has: function (n) {
        if (void 0 !== e[n]) return null !== e[n];
        var r;
        switch (n) {
          case "WEBGL_depth_texture":
            r = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
          case "EXT_texture_filter_anisotropic":
            r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            r = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            r = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          default:
            r = t.getExtension(n);
        }
        e[n] = r;
        return null !== r;
      },
      get: function (t) {
        if (this.has(t)) {
          console.warn("THREE.WebGLRenderer: " + t + " extension not supported.");
        }
        return e[t];
      }
    };
  }
  function hr(t, e, n, r) {
    var i = new WeakMap();
    var a = new WeakMap();
    function o(t) {
      var s = t.target;
      var l = i.get(s);
      for (var u in null !== l.index && e.remove(l.index), l.attributes) e.remove(l.attributes[u]);
      s.removeEventListener("dispose", o);
      i.delete(s);
      var c = a.get(l);
      if (c) {
        e.remove(c);
        a.delete(l);
      }
      r.releaseStatesOfGeometry(l);
      if (!0 === s.isInstancedBufferGeometry) {
        delete s._maxInstanceCount;
      }
      n.memory.geometries--;
    }
    function s(t) {
      var n = [];
      var r = t.index;
      var i = t.attributes.position;
      var o = 0;
      if (null !== r) {
        var s = r.array;
        o = r.version;
        for (l = 0, u = s.length, void 0; l < u; l += 3) {
          var l;
          var u;
          var c = s[l + 0];
          var h = s[l + 1];
          var d = s[l + 2];
          n.push(c, h, h, d, d, c);
        }
      } else {
        var f = i.array;
        o = i.version;
        for (p = 0, m = f.length / 3 - 1, void 0; p < m; p += 3) {
          var p;
          var m;
          var v = p + 0;
          var g = p + 1;
          var y = p + 2;
          n.push(v, g, g, y, y, v);
        }
      }
      var b = new (ln(n) > 65535 ? rn : en)(n, 1);
      b.version = o;
      var x = a.get(t);
      if (x) {
        e.remove(x);
      }
      a.set(t, b);
    }
    return {
      get: function (t, e) {
        var r = i.get(e);
        return r || (e.addEventListener("dispose", o), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = new vn().setFromObject(t)), r = e._bufferGeometry), i.set(e, r), n.memory.geometries++, r);
      },
      update: function (t) {
        var n = t.attributes;
        for (var r in n) e.update(n[r], 34962);
        var i = t.morphAttributes;
        for (var a in i) for (o = i[a], s = 0, l = o.length, void 0; s < l; s++) {
          var o;
          var s;
          var l;
          e.update(o[s], 34962);
        }
      },
      getWireframeAttribute: function (t) {
        var e = a.get(t);
        if (e) {
          var n = t.index;
          if (null !== n && e.version < n.version) {
            s(t);
          }
        } else s(t);
        return a.get(t);
      }
    };
  }
  function dr(t, e, n, r) {
    var i;
    var a;
    var o;
    var s = r.isWebGL2;
    this.setMode = function (t) {
      i = t;
    };
    this.setIndex = function (t) {
      a = t.type;
      o = t.bytesPerElement;
    };
    this.render = function (e, r) {
      t.drawElements(i, r, a, e * o);
      n.update(r, i, 1);
    };
    this.renderInstances = function (r, l, u) {
      if (0 !== u) {
        var c;
        var h;
        if (s) {
          c = t;
          h = "drawElementsInstanced";
        } else {
          h = "drawElementsInstancedANGLE";
          if (null === (c = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        }
        c[h](i, l, a, r * o, u);
        n.update(l, i, u);
      }
    };
  }
  function fr(t) {
    var e = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function () {
        e.frame++;
        e.calls = 0;
        e.triangles = 0;
        e.points = 0;
        e.lines = 0;
      },
      update: function (t, n, r) {
        switch (e.calls++, n) {
          case 4:
            e.triangles += r * (t / 3);
            break;
          case 1:
            e.lines += r * (t / 2);
            break;
          case 3:
            e.lines += r * (t - 1);
            break;
          case 2:
            e.lines += r * t;
            break;
          case 0:
            e.points += r * t;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      }
    };
  }
  function pr(t, e) {
    return t[0] - e[0];
  }
  function mr(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
  }
  function vr(t) {
    for (e = {}, n = new Float32Array(8), r = [], i = 0, void 0; i < 8; i++) {
      var e;
      var n;
      var r;
      var i;
      r[i] = [i, 0];
    }
    return {
      update: function (i, a, o, s) {
        var l = i.morphTargetInfluences;
        var u = void 0 === l ? 0 : l.length;
        var c = e[a.id];
        if (void 0 === c) {
          c = [];
          for (var h = 0; h < u; h++) c[h] = [h, 0];
          e[a.id] = c;
        }
        for (var d = 0; d < u; d++) {
          var f = c[d];
          f[0] = d;
          f[1] = l[d];
        }
        c.sort(mr);
        for (var p = 0; p < 8; p++) if (p < u && c[p][1]) {
          r[p][0] = c[p][0];
          r[p][1] = c[p][1];
        } else {
          r[p][0] = Number.MAX_SAFE_INTEGER;
          r[p][1] = 0;
        }
        r.sort(pr);
        for (m = o.morphTargets && a.morphAttributes.position, v = o.morphNormals && a.morphAttributes.normal, g = 0, y = 0, void 0; y < 8; y++) {
          var m;
          var v;
          var g;
          var y;
          var b = r[y];
          var x = b[0];
          var _ = b[1];
          if (x !== Number.MAX_SAFE_INTEGER && _) {
            if (m && a.getAttribute("morphTarget" + y) !== m[x]) {
              a.setAttribute("morphTarget" + y, m[x]);
            }
            if (v && a.getAttribute("morphNormal" + y) !== v[x]) {
              a.setAttribute("morphNormal" + y, v[x]);
            }
            n[y] = _;
            g += _;
          } else {
            if (m && void 0 !== a.getAttribute("morphTarget" + y)) {
              a.deleteAttribute("morphTarget" + y);
            }
            if (v && void 0 !== a.getAttribute("morphNormal" + y)) {
              a.deleteAttribute("morphNormal" + y);
            }
            n[y] = 0;
          }
        }
        var w = a.morphTargetsRelative ? 1 : 1 - g;
        s.getUniforms().setValue(t, "morphTargetBaseInfluence", w);
        s.getUniforms().setValue(t, "morphTargetInfluences", n);
      }
    };
  }
  function gr(t, e, n, r) {
    var i = new WeakMap();
    return {
      update: function (t) {
        var a = r.render.frame;
        var o = t.geometry;
        var s = e.get(t, o);
        if (i.get(s) !== a) {
          if (o.isGeometry) {
            s.updateFromObject(t);
          }
          e.update(s);
          i.set(s, a);
        }
        if (t.isInstancedMesh) {
          n.update(t.instanceMatrix, 34962);
          if (null !== t.instanceColor) {
            n.update(t.instanceColor, 34962);
          }
        }
        return s;
      },
      dispose: function () {
        i = new WeakMap();
      }
    };
  }
  function yr(t, e, n, r) {
    gt.call(this, null);
    this.image = {
      data: t || null,
      width: e || 1,
      height: n || 1,
      depth: r || 1
    };
    this.magFilter = d;
    this.minFilter = d;
    this.wrapR = c;
    this.generateMipmaps = !1;
    this.flipY = !1;
    this.needsUpdate = !0;
  }
  function br(t, e, n, r) {
    gt.call(this, null);
    this.image = {
      data: t || null,
      width: e || 1,
      height: n || 1,
      depth: r || 1
    };
    this.magFilter = d;
    this.minFilter = d;
    this.wrapR = c;
    this.generateMipmaps = !1;
    this.flipY = !1;
    this.needsUpdate = !0;
  }
  rr.physical = {
    uniforms: Un([rr.standard.uniforms, {
      clearcoat: {
        value: 0
      },
      clearcoatMap: {
        value: null
      },
      clearcoatRoughness: {
        value: 0
      },
      clearcoatRoughnessMap: {
        value: null
      },
      clearcoatNormalScale: {
        value: new ft(1, 1)
      },
      clearcoatNormalMap: {
        value: null
      },
      sheen: {
        value: new je(0)
      },
      transmission: {
        value: 0
      },
      transmissionMap: {
        value: null
      }
    }]),
    vertexShader: er.meshphysical_vert,
    fragmentShader: er.meshphysical_frag
  };
  yr.prototype = Object.create(gt.prototype);
  yr.prototype.constructor = yr;
  yr.prototype.isDataTexture2DArray = !0;
  br.prototype = Object.create(gt.prototype);
  br.prototype.constructor = br;
  br.prototype.isDataTexture3D = !0;
  var xr = new gt();
  var _r = new yr();
  var wr = new br();
  var Sr = new qn();
  var Er = [];
  var Tr = [];
  var Mr = new Float32Array(16);
  var Ar = new Float32Array(9);
  var Lr = new Float32Array(4);
  function Cr(t, e, n) {
    var r = t[0];
    if (r <= 0 || r > 0) return t;
    var i = e * n;
    var a = Er[i];
    if (void 0 === a) {
      a = new Float32Array(i);
      Er[i] = a;
    }
    if (0 !== e) {
      r.toArray(a, 0);
      for (var o = 1, s = 0; o !== e; ++o) s += n, t[o].toArray(a, s);
    }
    return a;
  }
  function Pr(t, e) {
    if (t.length !== e.length) return !1;
    for (n = 0, r = t.length, void 0; n < r; n++) {
      var n;
      var r;
      if (t[n] !== e[n]) return !1;
    }
    return !0;
  }
  function Rr(t, e) {
    for (n = 0, r = e.length, void 0; n < r; n++) {
      var n;
      var r;
      t[n] = e[n];
    }
  }
  function Or(t, e) {
    var n = Tr[e];
    if (void 0 === n) {
      n = new Int32Array(e);
      Tr[e] = n;
    }
    for (var r = 0; r !== e; ++r) n[r] = t.allocateTextureUnit();
    return n;
  }
  function Ir(t, e) {
    var n = this.cache;
    if (n[0] !== e) {
      t.uniform1f(this.addr, e);
      n[0] = e;
    }
  }
  function Dr(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) {
      if (n[0] === e.x && n[1] === e.y) {
        t.uniform2f(this.addr, e.x, e.y);
        n[0] = e.x;
        n[1] = e.y;
      }
    } else {
      if (Pr(n, e)) return;
      t.uniform2fv(this.addr, e);
      Rr(n, e);
    }
  }
  function kr(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) {
      if (n[0] === e.x && n[1] === e.y && n[2] === e.z) {
        t.uniform3f(this.addr, e.x, e.y, e.z);
        n[0] = e.x;
        n[1] = e.y;
        n[2] = e.z;
      }
    } else if (void 0 !== e.r) {
      if (n[0] === e.r && n[1] === e.g && n[2] === e.b) {
        t.uniform3f(this.addr, e.r, e.g, e.b);
        n[0] = e.r;
        n[1] = e.g;
        n[2] = e.b;
      }
    } else {
      if (Pr(n, e)) return;
      t.uniform3fv(this.addr, e);
      Rr(n, e);
    }
  }
  function Nr(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) {
      if (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) {
        t.uniform4f(this.addr, e.x, e.y, e.z, e.w);
        n[0] = e.x;
        n[1] = e.y;
        n[2] = e.z;
        n[3] = e.w;
      }
    } else {
      if (Pr(n, e)) return;
      t.uniform4fv(this.addr, e);
      Rr(n, e);
    }
  }
  function Br(t, e) {
    var n = this.cache;
    var r = e.elements;
    if (void 0 === r) {
      if (Pr(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e);
      Rr(n, e);
    } else {
      if (Pr(n, r)) return;
      Lr.set(r);
      t.uniformMatrix2fv(this.addr, !1, Lr);
      Rr(n, r);
    }
  }
  function Fr(t, e) {
    var n = this.cache;
    var r = e.elements;
    if (void 0 === r) {
      if (Pr(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e);
      Rr(n, e);
    } else {
      if (Pr(n, r)) return;
      Ar.set(r);
      t.uniformMatrix3fv(this.addr, !1, Ar);
      Rr(n, r);
    }
  }
  function Ur(t, e) {
    var n = this.cache;
    var r = e.elements;
    if (void 0 === r) {
      if (Pr(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e);
      Rr(n, e);
    } else {
      if (Pr(n, r)) return;
      Mr.set(r);
      t.uniformMatrix4fv(this.addr, !1, Mr);
      Rr(n, r);
    }
  }
  function zr(t, e, n) {
    var r = this.cache;
    var i = n.allocateTextureUnit();
    if (r[0] !== i) {
      t.uniform1i(this.addr, i);
      r[0] = i;
    }
    n.safeSetTexture2D(e || xr, i);
  }
  function Gr(t, e, n) {
    var r = this.cache;
    var i = n.allocateTextureUnit();
    if (r[0] !== i) {
      t.uniform1i(this.addr, i);
      r[0] = i;
    }
    n.setTexture2DArray(e || _r, i);
  }
  function Hr(t, e, n) {
    var r = this.cache;
    var i = n.allocateTextureUnit();
    if (r[0] !== i) {
      t.uniform1i(this.addr, i);
      r[0] = i;
    }
    n.setTexture3D(e || wr, i);
  }
  function jr(t, e, n) {
    var r = this.cache;
    var i = n.allocateTextureUnit();
    if (r[0] !== i) {
      t.uniform1i(this.addr, i);
      r[0] = i;
    }
    n.safeSetTextureCube(e || Sr, i);
  }
  function Vr(t, e) {
    var n = this.cache;
    if (n[0] !== e) {
      t.uniform1i(this.addr, e);
      n[0] = e;
    }
  }
  function Wr(t, e) {
    var n = this.cache;
    if (Pr(n, e)) {
      t.uniform2iv(this.addr, e);
      Rr(n, e);
    }
  }
  function qr(t, e) {
    var n = this.cache;
    if (Pr(n, e)) {
      t.uniform3iv(this.addr, e);
      Rr(n, e);
    }
  }
  function Yr(t, e) {
    var n = this.cache;
    if (Pr(n, e)) {
      t.uniform4iv(this.addr, e);
      Rr(n, e);
    }
  }
  function Xr(t, e) {
    var n = this.cache;
    if (n[0] !== e) {
      t.uniform1ui(this.addr, e);
      n[0] = e;
    }
  }
  function Zr(t, e) {
    t.uniform1fv(this.addr, e);
  }
  function Kr(t, e) {
    t.uniform1iv(this.addr, e);
  }
  function Jr(t, e) {
    t.uniform2iv(this.addr, e);
  }
  function $r(t, e) {
    t.uniform3iv(this.addr, e);
  }
  function Qr(t, e) {
    t.uniform4iv(this.addr, e);
  }
  function ti(t, e) {
    var n = Cr(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }
  function ei(t, e) {
    var n = Cr(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }
  function ni(t, e) {
    var n = Cr(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }
  function ri(t, e) {
    var n = Cr(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }
  function ii(t, e) {
    var n = Cr(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }
  function ai(t, e) {
    var n = Cr(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }
  function oi(t, e, n) {
    var r = e.length;
    var i = Or(n, r);
    t.uniform1iv(this.addr, i);
    for (var a = 0; a !== r; ++a) n.safeSetTexture2D(e[a] || xr, i[a]);
  }
  function si(t, e, n) {
    var r = e.length;
    var i = Or(n, r);
    t.uniform1iv(this.addr, i);
    for (var a = 0; a !== r; ++a) n.safeSetTextureCube(e[a] || Sr, i[a]);
  }
  function li(t, e, n) {
    this.id = t;
    this.addr = n;
    this.cache = [];
    this.setValue = function (t) {
      switch (t) {
        case 5126:
          return Ir;
        case 35664:
          return Dr;
        case 35665:
          return kr;
        case 35666:
          return Nr;
        case 35674:
          return Br;
        case 35675:
          return Fr;
        case 35676:
          return Ur;
        case 5124:
        case 35670:
          return Vr;
        case 35667:
        case 35671:
          return Wr;
        case 35668:
        case 35672:
          return qr;
        case 35669:
        case 35673:
          return Yr;
        case 5125:
          return Xr;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return zr;
        case 35679:
        case 36299:
        case 36307:
          return Hr;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return jr;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return Gr;
      }
    }(e.type);
  }
  function ui(t, e, n) {
    this.id = t;
    this.addr = n;
    this.cache = [];
    this.size = e.size;
    this.setValue = function (t) {
      switch (t) {
        case 5126:
          return Zr;
        case 35664:
          return ti;
        case 35665:
          return ei;
        case 35666:
          return ni;
        case 35674:
          return ri;
        case 35675:
          return ii;
        case 35676:
          return ai;
        case 5124:
        case 35670:
          return Kr;
        case 35667:
        case 35671:
          return Jr;
        case 35668:
        case 35672:
          return $r;
        case 35669:
        case 35673:
          return Qr;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return oi;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return si;
      }
    }(e.type);
  }
  function ci(t) {
    this.id = t;
    this.seq = [];
    this.map = {};
  }
  ui.prototype.updateCache = function (t) {
    var e = this.cache;
    if (t instanceof Float32Array && e.length !== t.length) {
      this.cache = new Float32Array(t.length);
    }
    Rr(e, t);
  };
  ci.prototype.setValue = function (t, e, n) {
    for (r = this.seq, i = 0, a = r.length, void 0; i !== a; ++i) {
      var r;
      var i;
      var a;
      var o = r[i];
      o.setValue(t, e[o.id], n);
    }
  };
  var hi = /([\w\d_]+)(\])?(\[|\.)?/g;
  function di(t, e) {
    t.seq.push(e);
    t.map[e.id] = e;
  }
  function fi(t, e, n) {
    var r = t.name;
    var i = r.length;
    for (hi.lastIndex = 0;;) {
      var a = hi.exec(r);
      var o = hi.lastIndex;
      var s = a[1];
      var l = "]" === a[2];
      var u = a[3];
      if (l) {
        s |= 0;
      }
      if (void 0 === u || "[" === u && o + 2 === i) {
        di(n, void 0 === u ? new li(s, t, e) : new ui(s, t, e));
        break;
      }
      var c = n.map[s];
      if (void 0 === c) {
        di(n, c = new ci(s));
      }
      n = c;
    }
  }
  function pi(t, e) {
    this.seq = [];
    this.map = {};
    for (n = t.getProgramParameter(e, 35718), r = 0, void 0; r < n; ++r) {
      var n;
      var r;
      var i = t.getActiveUniform(e, r);
      fi(i, t.getUniformLocation(e, i.name), this);
    }
  }
  function mi(t, e, n) {
    var r = t.createShader(e);
    t.shaderSource(r, n);
    t.compileShader(r);
    return r;
  }
  pi.prototype.setValue = function (t, e, n, r) {
    var i = this.map[e];
    if (void 0 !== i) {
      i.setValue(t, n, r);
    }
  };
  pi.prototype.setOptional = function (t, e, n) {
    var r = e[n];
    if (void 0 !== r) {
      this.setValue(t, n, r);
    }
  };
  pi.upload = function (t, e, n, r) {
    for (i = 0, a = e.length, void 0; i !== a; ++i) {
      var i;
      var a;
      var o = e[i];
      var s = n[o.id];
      if (!1 !== s.needsUpdate) {
        o.setValue(t, s.value, r);
      }
    }
  };
  pi.seqWithValue = function (t, e) {
    for (n = [], r = 0, i = t.length, void 0; r !== i; ++r) {
      var n;
      var r;
      var i;
      var a = t[r];
      if (a.id in e) {
        n.push(a);
      }
    }
    return n;
  };
  var vi = 0;
  function gi(t) {
    switch (t) {
      case q:
        return ["Linear", "( value )"];
      case Y:
        return ["sRGB", "( value )"];
      case Z:
        return ["RGBE", "( value )"];
      case K:
        return ["RGBM", "( value, 7.0 )"];
      case J:
        return ["RGBM", "( value, 16.0 )"];
      case $:
        return ["RGBD", "( value, 256.0 )"];
      case X:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      case 3003:
        return ["LogLuv", "( value )"];
      default:
        console.warn("THREE.WebGLProgram: Unsupported encoding:", t);
        return ["Linear", "( value )"];
    }
  }
  function yi(t, e, n) {
    var r = t.getShaderParameter(e, 35713);
    var i = t.getShaderInfoLog(e).trim();
    return r && "" === i ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + i + function (t) {
      for (e = t.split("\n"), n = 0, void 0; n < e.length; n++) {
        var e;
        var n;
        e[n] = n + 1 + ": " + e[n];
      }
      return e.join("\n");
    }(t.getShaderSource(e));
  }
  function bi(t, e) {
    var n = gi(e);
    return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
  }
  function xi(t, e) {
    var n;
    switch (e) {
      case 1:
        n = "Linear";
        break;
      case 2:
        n = "Reinhard";
        break;
      case 3:
        n = "OptimizedCineon";
        break;
      case 4:
        n = "ACESFilmic";
        break;
      case 5:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e);
        n = "Linear";
    }
    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
  }
  function _i(t) {
    return "" !== t;
  }
  function wi(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function Si(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }
  var Ei = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Ti(t) {
    return t.replace(Ei, Mi);
  }
  function Mi(t, e) {
    var n = er[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return Ti(n);
  }
  var Ai = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
  var Li = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Ci(t) {
    return t.replace(Li, Ri).replace(Ai, Pi);
  }
  function Pi(t, e, n, r) {
    console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.");
    return Ri(0, e, n, r);
  }
  function Ri(t, e, n, r) {
    for (i = "", a = parseInt(e), void 0; a < parseInt(n); a++) {
      var i;
      var a;
      i += r.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
    }
    return i;
  }
  function Oi(t) {
    var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    if ("highp" === t.precision) {
      e += "\n#define HIGH_PRECISION";
    } else {
      if ("mediump" === t.precision) {
        e += "\n#define MEDIUM_PRECISION";
      } else {
        if ("lowp" === t.precision) {
          e += "\n#define LOW_PRECISION";
        }
      }
    }
    return e;
  }
  function Ii(t, e, n, a) {
    var o;
    var u;
    var c;
    var h;
    var d;
    var f = t.getContext();
    var p = n.defines;
    var m = n.vertexShader;
    var v = n.fragmentShader;
    var g = function (t) {
      var e = "SHADOWMAP_TYPE_BASIC";
      if (1 === t.shadowMapType) {
        e = "SHADOWMAP_TYPE_PCF";
      } else {
        if (2 === t.shadowMapType) {
          e = "SHADOWMAP_TYPE_PCF_SOFT";
        } else {
          if (3 === t.shadowMapType) {
            e = "SHADOWMAP_TYPE_VSM";
          }
        }
      }
      return e;
    }(n);
    var y = function (t) {
      var e = "ENVMAP_TYPE_CUBE";
      if (t.envMap) switch (t.envMapMode) {
        case r:
        case i:
          e = "ENVMAP_TYPE_CUBE";
          break;
        case s:
        case l:
          e = "ENVMAP_TYPE_CUBE_UV";
      }
      return e;
    }(n);
    var b = function (t) {
      var e = "ENVMAP_MODE_REFLECTION";
      if (t.envMap) switch (t.envMapMode) {
        case i:
        case l:
          e = "ENVMAP_MODE_REFRACTION";
      }
      return e;
    }(n);
    var x = function (t) {
      var e = "ENVMAP_BLENDING_NONE";
      if (t.envMap) switch (t.combine) {
        case 0:
          e = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case 1:
          e = "ENVMAP_BLENDING_MIX";
          break;
        case 2:
          e = "ENVMAP_BLENDING_ADD";
      }
      return e;
    }(n);
    var _ = t.gammaFactor > 0 ? t.gammaFactor : 1;
    var w = n.isWebGL2 ? "" : function (t) {
      return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(_i).join("\n");
    }(n);
    var S = function (t) {
      var e = [];
      for (var n in t) {
        var r = t[n];
        if (!1 !== r) {
          e.push("#define " + n + " " + r);
        }
      }
      return e.join("\n");
    }(p);
    var E = f.createProgram();
    var T = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    if (n.isRawShaderMaterial) {
      if ((o = [S].filter(_i).join("\n")).length > 0) {
        o += "\n";
      }
      if ((u = [w, S].filter(_i).join("\n")).length > 0) {
        u += "\n";
      }
    } else {
      o = [Oi(n), "#define SHADER_NAME " + n.shaderName, S, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + _, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + b : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + g : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(_i).join("\n");
      u = [w, Oi(n), "#define SHADER_NAME " + n.shaderName, S, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + _, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + y : "", n.envMap ? "#define " + b : "", n.envMap ? "#define " + x : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + g : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? er.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? xi("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", er.encodings_pars_fragment, n.map ? bi("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? bi("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? bi("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? bi("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? bi("lightMapTexelToLinear", n.lightMapEncoding) : "", (c = "linearToOutputTexel", h = n.outputEncoding, d = gi(h), "vec4 " + c + "( vec4 value ) { return LinearTo" + d[0] + d[1] + "; }"), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(_i).join("\n");
    }
    m = Si(m = wi(m = Ti(m), n), n);
    v = Si(v = wi(v = Ti(v), n), n);
    m = Ci(m);
    v = Ci(v);
    if (n.isWebGL2 && !0 !== n.isRawShaderMaterial) {
      T = "#version 300 es\n";
      o = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + o;
      u = ["#define varying in", n.glslVersion === nt ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === nt ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + u;
    }
    var M;
    var A;
    var L = T + u + v;
    var C = mi(f, 35633, T + o + m);
    var P = mi(f, 35632, L);
    f.attachShader(E, C);
    f.attachShader(E, P);
    if (void 0 !== n.index0AttributeName) {
      f.bindAttribLocation(E, 0, n.index0AttributeName);
    } else {
      if (!0 === n.morphTargets) {
        f.bindAttribLocation(E, 0, "position");
      }
    }
    f.linkProgram(E);
    if (t.debug.checkShaderErrors) {
      var R = f.getProgramInfoLog(E).trim(),
        O = f.getShaderInfoLog(C).trim(),
        I = f.getShaderInfoLog(P).trim(),
        D = !0,
        k = !0;
      if (!1 === f.getProgramParameter(E, 35714)) {
        D = !1;
        var N = yi(f, C, "vertex"),
          B = yi(f, P, "fragment");
        console.error("THREE.WebGLProgram: shader error: ", f.getError(), "35715", f.getProgramParameter(E, 35715), "gl.getProgramInfoLog", R, N, B);
      } else "" !== R ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", R) : "" !== O && "" !== I || (k = !1);
      k && (this.diagnostics = {
        runnable: D,
        programLog: R,
        vertexShader: {
          log: O,
          prefix: o
        },
        fragmentShader: {
          log: I,
          prefix: u
        }
      });
    }
    f.deleteShader(C);
    f.deleteShader(P);
    this.getUniforms = function () {
      if (void 0 === M) {
        M = new pi(f, E);
      }
      return M;
    };
    this.getAttributes = function () {
      if (void 0 === A) {
        A = function (t, e) {
          for (n = {}, r = t.getProgramParameter(e, 35721), i = 0, void 0; i < r; i++) {
            var n;
            var r;
            var i;
            var a = t.getActiveAttrib(e, i).name;
            n[a] = t.getAttribLocation(e, a);
          }
          return n;
        }(f, E);
      }
      return A;
    };
    this.destroy = function () {
      a.releaseStatesOfProgram(this);
      f.deleteProgram(E);
      this.program = void 0;
    };
    this.name = n.shaderName;
    this.id = vi++;
    this.cacheKey = e;
    this.usedTimes = 1;
    this.program = E;
    this.vertexShader = C;
    this.fragmentShader = P;
    return this;
  }
  function Di(t, e, n, r, i, a) {
    var o = [];
    var u = r.isWebGL2;
    var c = r.logarithmicDepthBuffer;
    var h = r.floatVertexTextures;
    var d = r.maxVertexUniforms;
    var f = r.vertexTextures;
    var p = r.precision;
    var m = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    };
    var v = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];
    function g(t) {
      var e;
      if (t) {
        if (t.isTexture) {
          e = t.encoding;
        } else {
          if (t.isWebGLRenderTarget) {
            console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead.");
            e = t.texture.encoding;
          }
        }
      } else {
        e = q;
      }
      return e;
    }
    return {
      getParameters: function (i, o, v, y, b) {
        var x;
        var _;
        var w = y.fog;
        var S = i.isMeshStandardMaterial ? y.environment : null;
        var E = e.get(i.envMap || S);
        var T = m[i.type];
        var M = b.isSkinnedMesh ? function (t) {
          var e = t.skeleton.bones;
          if (h) return 1024;
          var n = d;
          var r = Math.floor((n - 20) / 4);
          var i = Math.min(r, e.length);
          return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."), 0) : i;
        }(b) : 0;
        if (null !== i.precision && (p = r.getMaxPrecision(i.precision)) !== i.precision) {
          console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", p, "instead.");
        }
        if (T) {
          var A = rr[T];
          x = A.vertexShader, _ = A.fragmentShader;
        } else x = i.vertexShader, _ = i.fragmentShader;
        var L = t.getRenderTarget();
        return {
          isWebGL2: u,
          shaderID: T,
          shaderName: i.type,
          vertexShader: x,
          fragmentShader: _,
          defines: i.defines,
          isRawShaderMaterial: !0 === i.isRawShaderMaterial,
          glslVersion: i.glslVersion,
          precision: p,
          instancing: !0 === b.isInstancedMesh,
          instancingColor: !0 === b.isInstancedMesh && null !== b.instanceColor,
          supportsVertexTextures: f,
          outputEncoding: null !== L ? g(L.texture) : t.outputEncoding,
          map: !!i.map,
          mapEncoding: g(i.map),
          matcap: !!i.matcap,
          matcapEncoding: g(i.matcap),
          envMap: !!E,
          envMapMode: E && E.mapping,
          envMapEncoding: g(E),
          envMapCubeUV: !!E && (E.mapping === s || E.mapping === l),
          lightMap: !!i.lightMap,
          lightMapEncoding: g(i.lightMap),
          aoMap: !!i.aoMap,
          emissiveMap: !!i.emissiveMap,
          emissiveMapEncoding: g(i.emissiveMap),
          bumpMap: !!i.bumpMap,
          normalMap: !!i.normalMap,
          objectSpaceNormalMap: 1 === i.normalMapType,
          tangentSpaceNormalMap: 0 === i.normalMapType,
          clearcoatMap: !!i.clearcoatMap,
          clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
          clearcoatNormalMap: !!i.clearcoatNormalMap,
          displacementMap: !!i.displacementMap,
          roughnessMap: !!i.roughnessMap,
          metalnessMap: !!i.metalnessMap,
          specularMap: !!i.specularMap,
          alphaMap: !!i.alphaMap,
          gradientMap: !!i.gradientMap,
          sheen: !!i.sheen,
          transmissionMap: !!i.transmissionMap,
          combine: i.combine,
          vertexTangents: i.normalMap && i.vertexTangents,
          vertexColors: i.vertexColors,
          vertexUvs: !!(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatMap || i.clearcoatRoughnessMap || i.clearcoatNormalMap || i.displacementMap || i.transmissionMap),
          uvsVertexOnly: !(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatNormalMap || i.transmissionMap || !i.displacementMap),
          fog: !!w,
          useFog: i.fog,
          fogExp2: w && w.isFogExp2,
          flatShading: i.flatShading,
          sizeAttenuation: i.sizeAttenuation,
          logarithmicDepthBuffer: c,
          skinning: i.skinning && M > 0,
          maxBones: M,
          useVertexTexture: h,
          morphTargets: i.morphTargets,
          morphNormals: i.morphNormals,
          maxMorphTargets: t.maxMorphTargets,
          maxMorphNormals: t.maxMorphNormals,
          numDirLights: o.directional.length,
          numPointLights: o.point.length,
          numSpotLights: o.spot.length,
          numRectAreaLights: o.rectArea.length,
          numHemiLights: o.hemi.length,
          numDirLightShadows: o.directionalShadowMap.length,
          numPointLightShadows: o.pointShadowMap.length,
          numSpotLightShadows: o.spotShadowMap.length,
          numClippingPlanes: a.numPlanes,
          numClipIntersection: a.numIntersection,
          dithering: i.dithering,
          shadowMapEnabled: t.shadowMap.enabled && v.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: i.toneMapped ? t.toneMapping : 0,
          physicallyCorrectLights: t.physicallyCorrectLights,
          premultipliedAlpha: i.premultipliedAlpha,
          alphaTest: i.alphaTest,
          doubleSided: 2 === i.side,
          flipSided: 1 === i.side,
          depthPacking: void 0 !== i.depthPacking && i.depthPacking,
          index0AttributeName: i.index0AttributeName,
          extensionDerivatives: i.extensions && i.extensions.derivatives,
          extensionFragDepth: i.extensions && i.extensions.fragDepth,
          extensionDrawBuffers: i.extensions && i.extensions.drawBuffers,
          extensionShaderTextureLOD: i.extensions && i.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
          customProgramCacheKey: i.customProgramCacheKey()
        };
      },
      getProgramCacheKey: function (e) {
        var n = [];
        if (e.shaderID) {
          n.push(e.shaderID);
        } else {
          n.push(e.fragmentShader);
          n.push(e.vertexShader);
        }
        if (void 0 !== e.defines) for (var r in e.defines) n.push(r), n.push(e.defines[r]);
        if (!1 === e.isRawShaderMaterial) {
          for (var i = 0; i < v.length; i++) n.push(e[v[i]]);
          n.push(t.outputEncoding);
          n.push(t.gammaFactor);
        }
        n.push(e.customProgramCacheKey);
        return n.join();
      },
      getUniforms: function (t) {
        var e;
        var n = m[t.type];
        if (n) {
          var r = rr[n];
          e = zn.clone(r.uniforms);
        } else e = t.uniforms;
        return e;
      },
      acquireProgram: function (e, n) {
        for (a = 0, s = o.length, void 0; a < s; a++) {
          var r;
          var a;
          var s;
          var l = o[a];
          if (l.cacheKey === n) {
            ++(r = l).usedTimes;
            break;
          }
        }
        if (void 0 === r) {
          r = new Ii(t, n, e, i);
          o.push(r);
        }
        return r;
      },
      releaseProgram: function (t) {
        if (0 == --t.usedTimes) {
          var e = o.indexOf(t);
          o[e] = o[o.length - 1];
          o.pop();
          t.destroy();
        }
      },
      programs: o
    };
  }
  function ki() {
    var t = new WeakMap();
    return {
      get: function (e) {
        var n = t.get(e);
        if (void 0 === n) {
          n = {};
          t.set(e, n);
        }
        return n;
      },
      remove: function (e) {
        t.delete(e);
      },
      update: function (e, n, r) {
        t.get(e)[n] = r;
      },
      dispose: function () {
        t = new WeakMap();
      }
    };
  }
  function Ni(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
  }
  function Bi(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
  }
  function Fi(t) {
    var e = [];
    var n = 0;
    var r = [];
    var i = [];
    var a = {
      id: -1
    };
    function o(r, i, o, s, l, u) {
      var c = e[n];
      var h = t.get(o);
      if (void 0 === c) {
        c = {
          id: r.id,
          object: r,
          geometry: i,
          material: o,
          program: h.program || a,
          groupOrder: s,
          renderOrder: r.renderOrder,
          z: l,
          group: u
        };
        e[n] = c;
      } else {
        c.id = r.id;
        c.object = r;
        c.geometry = i;
        c.material = o;
        c.program = h.program || a;
        c.groupOrder = s;
        c.renderOrder = r.renderOrder;
        c.z = l;
        c.group = u;
      }
      n++;
      return c;
    }
    return {
      opaque: r,
      transparent: i,
      init: function () {
        n = 0;
        r.length = 0;
        i.length = 0;
      },
      push: function (t, e, n, a, s, l) {
        var u = o(t, e, n, a, s, l);
        (!0 === n.transparent ? i : r).push(u);
      },
      unshift: function (t, e, n, a, s, l) {
        var u = o(t, e, n, a, s, l);
        (!0 === n.transparent ? i : r).unshift(u);
      },
      finish: function () {
        for (t = n, r = e.length, void 0; t < r; t++) {
          var t;
          var r;
          var i = e[t];
          if (null === i.id) break;
          i.id = null;
          i.object = null;
          i.geometry = null;
          i.material = null;
          i.program = null;
          i.group = null;
        }
      },
      sort: function (t, e) {
        if (r.length > 1) {
          r.sort(t || Ni);
        }
        if (i.length > 1) {
          i.sort(e || Bi);
        }
      }
    };
  }
  function Ui(t) {
    var e = new WeakMap();
    return {
      get: function (n, r) {
        var i;
        var a = e.get(n);
        if (void 0 === a) {
          i = new Fi(t);
          e.set(n, new WeakMap());
          e.get(n).set(r, i);
        } else {
          if (void 0 === (i = a.get(r))) {
            i = new Fi(t);
            a.set(r, i);
          }
        }
        return i;
      },
      dispose: function () {
        e = new WeakMap();
      }
    };
  }
  function zi() {
    var t = {};
    return {
      get: function (e) {
        if (void 0 !== t[e.id]) return t[e.id];
        var n;
        switch (e.type) {
          case "DirectionalLight":
            n = {
              direction: new wt(),
              color: new je()
            };
            break;
          case "SpotLight":
            n = {
              position: new wt(),
              direction: new wt(),
              color: new je(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;
          case "PointLight":
            n = {
              position: new wt(),
              color: new je(),
              distance: 0,
              decay: 0
            };
            break;
          case "HemisphereLight":
            n = {
              direction: new wt(),
              skyColor: new je(),
              groundColor: new je()
            };
            break;
          case "RectAreaLight":
            n = {
              color: new je(),
              position: new wt(),
              halfWidth: new wt(),
              halfHeight: new wt()
            };
        }
        t[e.id] = n;
        return n;
      }
    };
  }
  var Gi = 0;
  function Hi(t, e) {
    return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
  }
  function ji(t, e) {
    for (n = new zi(), r = function () {
      var t = {};
      return {
        get: function (e) {
          if (void 0 !== t[e.id]) return t[e.id];
          var n;
          switch (e.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new ft()
              };
              break;
            case "PointLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new ft(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3
              };
          }
          t[e.id] = n;
          return n;
        }
      };
    }(), i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    }, a = 0, void 0; a < 9; a++) {
      var n;
      var r;
      var i;
      var a;
      i.probe.push(new wt());
    }
    var o = new wt();
    var s = new Kt();
    var l = new Kt();
    return {
      setup: function (a, u, c) {
        for (h = 0, d = 0, f = 0, p = 0, void 0; p < 9; p++) {
          var h;
          var d;
          var f;
          var p;
          i.probe[p].set(0, 0, 0);
        }
        var m = 0;
        var v = 0;
        var g = 0;
        var y = 0;
        var b = 0;
        var x = 0;
        var _ = 0;
        var w = 0;
        var S = c.matrixWorldInverse;
        a.sort(Hi);
        for (E = 0, T = a.length, void 0; E < T; E++) {
          var E;
          var T;
          var M = a[E];
          var A = M.color;
          var L = M.intensity;
          var C = M.distance;
          var P = M.shadow && M.shadow.map ? M.shadow.map.texture : null;
          if (M.isAmbientLight) {
            h += A.r * L;
            d += A.g * L;
            f += A.b * L;
          } else if (M.isLightProbe) for (var R = 0; R < 9; R++) i.probe[R].addScaledVector(M.sh.coefficients[R], L);else if (M.isDirectionalLight) {
            var O = n.get(M);
            O.color.copy(M.color).multiplyScalar(M.intensity);
            O.direction.setFromMatrixPosition(M.matrixWorld);
            o.setFromMatrixPosition(M.target.matrixWorld);
            O.direction.sub(o);
            O.direction.transformDirection(S);
            if (M.castShadow) {
              var I = M.shadow,
                D = r.get(M);
              D.shadowBias = I.bias, D.shadowNormalBias = I.normalBias, D.shadowRadius = I.radius, D.shadowMapSize = I.mapSize, i.directionalShadow[m] = D, i.directionalShadowMap[m] = P, i.directionalShadowMatrix[m] = M.shadow.matrix, x++;
            }
            i.directional[m] = O;
            m++;
          } else if (M.isSpotLight) {
            var k = n.get(M);
            k.position.setFromMatrixPosition(M.matrixWorld);
            k.position.applyMatrix4(S);
            k.color.copy(A).multiplyScalar(L);
            k.distance = C;
            k.direction.setFromMatrixPosition(M.matrixWorld);
            o.setFromMatrixPosition(M.target.matrixWorld);
            k.direction.sub(o);
            k.direction.transformDirection(S);
            k.coneCos = Math.cos(M.angle);
            k.penumbraCos = Math.cos(M.angle * (1 - M.penumbra));
            k.decay = M.decay;
            if (M.castShadow) {
              var N = M.shadow,
                B = r.get(M);
              B.shadowBias = N.bias, B.shadowNormalBias = N.normalBias, B.shadowRadius = N.radius, B.shadowMapSize = N.mapSize, i.spotShadow[g] = B, i.spotShadowMap[g] = P, i.spotShadowMatrix[g] = M.shadow.matrix, w++;
            }
            i.spot[g] = k;
            g++;
          } else if (M.isRectAreaLight) {
            var F = n.get(M);
            F.color.copy(A).multiplyScalar(L);
            F.position.setFromMatrixPosition(M.matrixWorld);
            F.position.applyMatrix4(S);
            l.identity();
            s.copy(M.matrixWorld);
            s.premultiply(S);
            l.extractRotation(s);
            F.halfWidth.set(0.5 * M.width, 0, 0);
            F.halfHeight.set(0, 0.5 * M.height, 0);
            F.halfWidth.applyMatrix4(l);
            F.halfHeight.applyMatrix4(l);
            i.rectArea[y] = F;
            y++;
          } else if (M.isPointLight) {
            var U = n.get(M);
            U.position.setFromMatrixPosition(M.matrixWorld);
            U.position.applyMatrix4(S);
            U.color.copy(M.color).multiplyScalar(M.intensity);
            U.distance = M.distance;
            U.decay = M.decay;
            if (M.castShadow) {
              var z = M.shadow,
                G = r.get(M);
              G.shadowBias = z.bias, G.shadowNormalBias = z.normalBias, G.shadowRadius = z.radius, G.shadowMapSize = z.mapSize, G.shadowCameraNear = z.camera.near, G.shadowCameraFar = z.camera.far, i.pointShadow[v] = G, i.pointShadowMap[v] = P, i.pointShadowMatrix[v] = M.shadow.matrix, _++;
            }
            i.point[v] = U;
            v++;
          } else if (M.isHemisphereLight) {
            var H = n.get(M);
            H.direction.setFromMatrixPosition(M.matrixWorld);
            H.direction.transformDirection(S);
            H.direction.normalize();
            H.skyColor.copy(M.color).multiplyScalar(L);
            H.groundColor.copy(M.groundColor).multiplyScalar(L);
            i.hemi[b] = H;
            b++;
          }
        }
        if (y > 0) {
          if (e.isWebGL2 || !0 === t.has("OES_texture_float_linear")) {
            i.rectAreaLTC1 = nr.LTC_FLOAT_1;
            i.rectAreaLTC2 = nr.LTC_FLOAT_2;
          } else {
            if (!0 === t.has("OES_texture_half_float_linear")) {
              i.rectAreaLTC1 = nr.LTC_HALF_1;
              i.rectAreaLTC2 = nr.LTC_HALF_2;
            } else {
              console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");
            }
          }
        }
        i.ambient[0] = h;
        i.ambient[1] = d;
        i.ambient[2] = f;
        var j = i.hash;
        if (j.directionalLength === m && j.pointLength === v && j.spotLength === g && j.rectAreaLength === y && j.hemiLength === b && j.numDirectionalShadows === x && j.numPointShadows === _ && j.numSpotShadows === w) {
          i.directional.length = m;
          i.spot.length = g;
          i.rectArea.length = y;
          i.point.length = v;
          i.hemi.length = b;
          i.directionalShadow.length = x;
          i.directionalShadowMap.length = x;
          i.pointShadow.length = _;
          i.pointShadowMap.length = _;
          i.spotShadow.length = w;
          i.spotShadowMap.length = w;
          i.directionalShadowMatrix.length = x;
          i.pointShadowMatrix.length = _;
          i.spotShadowMatrix.length = w;
          j.directionalLength = m;
          j.pointLength = v;
          j.spotLength = g;
          j.rectAreaLength = y;
          j.hemiLength = b;
          j.numDirectionalShadows = x;
          j.numPointShadows = _;
          j.numSpotShadows = w;
          i.version = Gi++;
        }
      },
      state: i
    };
  }
  function Vi(t, e) {
    var n = new ji(t, e);
    var r = [];
    var i = [];
    return {
      init: function () {
        r.length = 0;
        i.length = 0;
      },
      state: {
        lightsArray: r,
        shadowsArray: i,
        lights: n
      },
      setupLights: function (t) {
        n.setup(r, i, t);
      },
      pushLight: function (t) {
        r.push(t);
      },
      pushShadow: function (t) {
        i.push(t);
      }
    };
  }
  function Wi(t, e) {
    var n = new WeakMap();
    return {
      get: function (r, i) {
        var a;
        if (!1 === n.has(r)) {
          a = new Vi(t, e);
          n.set(r, new WeakMap());
          n.get(r).set(i, a);
        } else {
          if (!1 === n.get(r).has(i)) {
            a = new Vi(t, e);
            n.get(r).set(i, a);
          } else {
            a = n.get(r).get(i);
          }
        }
        return a;
      },
      dispose: function () {
        n = new WeakMap();
      }
    };
  }
  function qi(t) {
    qe.call(this);
    this.type = "MeshDepthMaterial";
    this.depthPacking = 3200;
    this.skinning = !1;
    this.morphTargets = !1;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.fog = !1;
    this.setValues(t);
  }
  function Yi(t) {
    qe.call(this);
    this.type = "MeshDistanceMaterial";
    this.referencePosition = new wt();
    this.nearDistance = 1;
    this.farDistance = 1e3;
    this.skinning = !1;
    this.morphTargets = !1;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.fog = !1;
    this.setValues(t);
  }
  qi.prototype = Object.create(qe.prototype);
  qi.prototype.constructor = qi;
  qi.prototype.isMeshDepthMaterial = !0;
  qi.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.depthPacking = t.depthPacking;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    this.map = t.map;
    this.alphaMap = t.alphaMap;
    this.displacementMap = t.displacementMap;
    this.displacementScale = t.displacementScale;
    this.displacementBias = t.displacementBias;
    this.wireframe = t.wireframe;
    this.wireframeLinewidth = t.wireframeLinewidth;
    return this;
  };
  Yi.prototype = Object.create(qe.prototype);
  Yi.prototype.constructor = Yi;
  Yi.prototype.isMeshDistanceMaterial = !0;
  Yi.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.referencePosition.copy(t.referencePosition);
    this.nearDistance = t.nearDistance;
    this.farDistance = t.farDistance;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    this.map = t.map;
    this.alphaMap = t.alphaMap;
    this.displacementMap = t.displacementMap;
    this.displacementScale = t.displacementScale;
    this.displacementBias = t.displacementBias;
    return this;
  };
  function Xi(t, e, n) {
    var r = new Jn();
    var i = new ft();
    var a = new ft();
    var o = new yt();
    var s = [];
    var l = [];
    var u = {};
    var c = {
      0: 1,
      1: 0,
      2: 2
    };
    var h = new Gn({
      defines: {
        SAMPLE_RATE: 2 / 8,
        HALF_SAMPLE_RATE: 1 / 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new ft()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
    });
    var f = h.clone();
    f.defines.HORIZONAL_PASS = 1;
    var p = new vn();
    p.setAttribute("position", new Ke(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    var v = new Dn(p, h);
    var g = this;
    function y(n, r) {
      var i = e.update(v);
      h.uniforms.shadow_pass.value = n.map.texture;
      h.uniforms.resolution.value = n.mapSize;
      h.uniforms.radius.value = n.radius;
      t.setRenderTarget(n.mapPass);
      t.clear();
      t.renderBufferDirect(r, null, i, h, v, null);
      f.uniforms.shadow_pass.value = n.mapPass.texture;
      f.uniforms.resolution.value = n.mapSize;
      f.uniforms.radius.value = n.radius;
      t.setRenderTarget(n.map);
      t.clear();
      t.renderBufferDirect(r, null, i, f, v, null);
    }
    function b(t, e, n) {
      var r = t << 0 | e << 1 | n << 2;
      var i = s[r];
      if (void 0 === i) {
        i = new qi({
          depthPacking: 3201,
          morphTargets: t,
          skinning: e
        });
        s[r] = i;
      }
      return i;
    }
    function x(t, e, n) {
      var r = t << 0 | e << 1 | n << 2;
      var i = l[r];
      if (void 0 === i) {
        i = new Yi({
          morphTargets: t,
          skinning: e
        });
        l[r] = i;
      }
      return i;
    }
    function _(e, n, r, i, a, o, s) {
      var l = null;
      var h = b;
      var d = e.customDepthMaterial;
      if (!0 === i.isPointLight) {
        h = x;
        d = e.customDistanceMaterial;
      }
      if (void 0 === d) {
        var f = !1;
        !0 === r.morphTargets && (f = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
        var p = !1;
        !0 === e.isSkinnedMesh && (!0 === r.skinning ? p = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e)), l = h(f, p, !0 === e.isInstancedMesh);
      } else l = d;
      if (t.localClippingEnabled && !0 === r.clipShadows && 0 !== r.clippingPlanes.length) {
        var m = l.uuid;
        var v = r.uuid;
        var g = u[m];
        if (void 0 === g) {
          g = {};
          u[m] = g;
        }
        var y = g[v];
        if (void 0 === y) {
          y = l.clone();
          g[v] = y;
        }
        l = y;
      }
      l.visible = r.visible;
      l.wireframe = r.wireframe;
      l.side = 3 === s ? null !== r.shadowSide ? r.shadowSide : r.side : null !== r.shadowSide ? r.shadowSide : c[r.side];
      l.clipShadows = r.clipShadows;
      l.clippingPlanes = r.clippingPlanes;
      l.clipIntersection = r.clipIntersection;
      l.wireframeLinewidth = r.wireframeLinewidth;
      l.linewidth = r.linewidth;
      if (!0 === i.isPointLight && !0 === l.isMeshDistanceMaterial) {
        l.referencePosition.setFromMatrixPosition(i.matrixWorld);
        l.nearDistance = a;
        l.farDistance = o;
      }
      return l;
    }
    function w(n, i, a, o, s) {
      if (!1 !== n.visible) {
        if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === s) && (!n.frustumCulled || r.intersectsObject(n))) {
          n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
          var l = e.update(n);
          var u = n.material;
          if (Array.isArray(u)) for (c = l.groups, h = 0, d = c.length, void 0; h < d; h++) {
            var c;
            var h;
            var d;
            var f = c[h];
            var p = u[f.materialIndex];
            if (p && p.visible) {
              var m = _(n, l, p, o, a.near, a.far, s);
              t.renderBufferDirect(a, null, l, m, n, f);
            }
          } else if (u.visible) {
            var v = _(n, l, u, o, a.near, a.far, s);
            t.renderBufferDirect(a, null, l, v, n, null);
          }
        }
        for (g = n.children, y = 0, b = g.length, void 0; y < b; y++) {
          var g;
          var y;
          var b;
          w(g[y], i, a, o, s);
        }
      }
    }
    this.enabled = !1;
    this.autoUpdate = !0;
    this.needsUpdate = !1;
    this.type = 1;
    this.render = function (e, s, l) {
      if (!1 !== g.enabled && (!1 !== g.autoUpdate || !1 !== g.needsUpdate) && 0 !== e.length) {
        var u = t.getRenderTarget();
        var c = t.getActiveCubeFace();
        var h = t.getActiveMipmapLevel();
        var f = t.state;
        f.setBlending(0);
        f.buffers.color.setClear(1, 1, 1, 1);
        f.buffers.depth.setTest(!0);
        f.setScissorTest(!1);
        for (p = 0, v = e.length, void 0; p < v; p++) {
          var p;
          var v;
          var b = e[p];
          var x = b.shadow;
          if (void 0 !== x) {
            if (!1 !== x.autoUpdate || !1 !== x.needsUpdate) {
              i.copy(x.mapSize);
              var _ = x.getFrameExtents();
              i.multiply(_);
              a.copy(x.mapSize);
              if (i.x > n || i.y > n) {
                if (i.x > n) {
                  a.x = Math.floor(n / _.x);
                  i.x = a.x * _.x;
                  x.mapSize.x = a.x;
                }
                if (i.y > n) {
                  a.y = Math.floor(n / _.y);
                  i.y = a.y * _.y;
                  x.mapSize.y = a.y;
                }
              }
              if (null === x.map && !x.isPointLightShadow && 3 === this.type) {
                var S = {
                  minFilter: m,
                  magFilter: m,
                  format: T
                };
                x.map = new bt(i.x, i.y, S), x.map.texture.name = b.name + ".shadowMap", x.mapPass = new bt(i.x, i.y, S), x.camera.updateProjectionMatrix();
              }
              if (null === x.map) {
                var E = {
                  minFilter: d,
                  magFilter: d,
                  format: T
                };
                x.map = new bt(i.x, i.y, E);
                x.map.texture.name = b.name + ".shadowMap";
                x.camera.updateProjectionMatrix();
              }
              t.setRenderTarget(x.map);
              t.clear();
              for (M = x.getViewportCount(), A = 0, void 0; A < M; A++) {
                var M;
                var A;
                var L = x.getViewport(A);
                o.set(a.x * L.x, a.y * L.y, a.x * L.z, a.y * L.w);
                f.viewport(o);
                x.updateMatrices(b, A);
                r = x.getFrustum();
                w(s, l, x.camera, b, this.type);
              }
              if (x.isPointLightShadow || 3 !== this.type) {
                y(x, l);
              }
              x.needsUpdate = !1;
            }
          } else console.warn("THREE.WebGLShadowMap:", b, "has no shadow.");
        }
        g.needsUpdate = !1;
        t.setRenderTarget(u, c, h);
      }
    };
  }
  function Zi(t, n, r) {
    var i;
    var a;
    var o = r.isWebGL2;
    var s = new function () {
      var e = !1;
      var n = new yt();
      var r = null;
      var i = new yt(0, 0, 0, 0);
      return {
        setMask: function (n) {
          if (r === n || e) {
            t.colorMask(n, n, n, n);
            r = n;
          }
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e, r, a, o, s) {
          if (!0 === s) {
            e *= o;
            r *= o;
            a *= o;
          }
          n.set(e, r, a, o);
          if (!1 === i.equals(n)) {
            t.clearColor(e, r, a, o);
            i.copy(n);
          }
        },
        reset: function () {
          e = !1;
          r = null;
          i.set(-1, 0, 0, 0);
        }
      };
    }();
    var l = new function () {
      var e = !1;
      var n = null;
      var r = null;
      var i = null;
      return {
        setTest: function (t) {
          if (t) {
            N(2929);
          } else {
            B(2929);
          }
        },
        setMask: function (r) {
          if (n === r || e) {
            t.depthMask(r);
            n = r;
          }
        },
        setFunc: function (e) {
          if (r !== e) {
            if (e) switch (e) {
              case 0:
                t.depthFunc(512);
                break;
              case 1:
                t.depthFunc(519);
                break;
              case 2:
                t.depthFunc(513);
                break;
              case 3:
              default:
                t.depthFunc(515);
                break;
              case 4:
                t.depthFunc(514);
                break;
              case 5:
                t.depthFunc(518);
                break;
              case 6:
                t.depthFunc(516);
                break;
              case 7:
                t.depthFunc(517);
            } else t.depthFunc(515);
            r = e;
          }
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e) {
          if (i !== e) {
            t.clearDepth(e);
            i = e;
          }
        },
        reset: function () {
          e = !1;
          n = null;
          r = null;
          i = null;
        }
      };
    }();
    var u = new function () {
      var e = !1;
      var n = null;
      var r = null;
      var i = null;
      var a = null;
      var o = null;
      var s = null;
      var l = null;
      var u = null;
      return {
        setTest: function (t) {
          if (e) {
            if (t) {
              N(2960);
            } else {
              B(2960);
            }
          }
        },
        setMask: function (r) {
          if (n === r || e) {
            t.stencilMask(r);
            n = r;
          }
        },
        setFunc: function (e, n, o) {
          if (r === e && i === n && a === o) {
            t.stencilFunc(e, n, o);
            r = e;
            i = n;
            a = o;
          }
        },
        setOp: function (e, n, r) {
          if (o === e && s === n && l === r) {
            t.stencilOp(e, n, r);
            o = e;
            s = n;
            l = r;
          }
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e) {
          if (u !== e) {
            t.clearStencil(e);
            u = e;
          }
        },
        reset: function () {
          e = !1;
          n = null;
          r = null;
          i = null;
          a = null;
          o = null;
          s = null;
          l = null;
          u = null;
        }
      };
    }();
    var c = {};
    var h = null;
    var d = null;
    var f = null;
    var p = null;
    var m = null;
    var v = null;
    var g = null;
    var y = null;
    var b = null;
    var x = !1;
    var _ = null;
    var w = null;
    var S = null;
    var E = null;
    var T = null;
    var M = t.getParameter(35661);
    var A = !1;
    var L = 0;
    var C = t.getParameter(7938);
    if (-1 !== C.indexOf("WebGL")) {
      L = parseFloat(/^WebGL\ ([0-9])/.exec(C)[1]);
      A = L >= 1;
    } else {
      if (-1 !== C.indexOf("OpenGL ES")) {
        L = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(C)[1]);
        A = L >= 2;
      }
    }
    var P = null;
    var R = {};
    var O = new yt();
    var I = new yt();
    function D(e, n, r) {
      var i = new Uint8Array(4);
      var a = t.createTexture();
      t.bindTexture(e, a);
      t.texParameteri(e, 10241, 9728);
      t.texParameteri(e, 10240, 9728);
      for (var o = 0; o < r; o++) t.texImage2D(n + o, 0, 6408, 1, 1, 0, 6408, 5121, i);
      return a;
    }
    var k = {};
    function N(e) {
      if (!0 !== c[e]) {
        t.enable(e);
        c[e] = !0;
      }
    }
    function B(e) {
      if (!1 !== c[e]) {
        t.disable(e);
        c[e] = !1;
      }
    }
    k[3553] = D(3553, 3553, 1);
    k[34067] = D(34067, 34069, 6);
    s.setClear(0, 0, 0, 1);
    l.setClear(1);
    u.setClear(0);
    N(2929);
    l.setFunc(3);
    H(!1);
    j(1);
    N(2884);
    G(0);
    var F = ((i = {})[100] = 32774, i[101] = 32778, i[102] = 32779, i);
    if (o) {
      F[103] = 32775;
      F[104] = 32776;
    } else {
      var U = n.get("EXT_blend_minmax");
      if (null !== U) {
        F[103] = U.MIN_EXT;
        F[104] = U.MAX_EXT;
      }
    }
    var z = ((a = {})[200] = 0, a[201] = 1, a[202] = 768, a[204] = 770, a[210] = 776, a[208] = 774, a[206] = 772, a[203] = 769, a[205] = 771, a[209] = 775, a[207] = 773, a);
    function G(n, r, i, a, o, s, l, u) {
      if (0 !== n) {
        if (d) {
          N(3042);
          d = !0;
        }
        if (5 === n) o = o || r, s = s || i, l = l || a, r === p && o === g || (t.blendEquationSeparate(F[r], F[o]), p = r, g = o), i === m && a === v && s === y && l === b || (t.blendFuncSeparate(z[i], z[a], z[s], z[l]), m = i, v = a, y = s, b = l), f = n, x = null;else if (n !== f || u !== x) {
          if (p === e && g === e || (t.blendEquation(32774), p = e, g = e), u) switch (n) {
            case 1:
              t.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              t.blendFunc(1, 1);
              break;
            case 3:
              t.blendFuncSeparate(0, 0, 769, 771);
              break;
            case 4:
              t.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", n);
          } else switch (n) {
            case 1:
              t.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              t.blendFunc(770, 1);
              break;
            case 3:
              t.blendFunc(0, 769);
              break;
            case 4:
              t.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", n);
          }
          m = null, v = null, y = null, b = null, f = n, x = u;
        }
      } else if (d) {
        B(3042);
        d = !1;
      }
    }
    function H(e) {
      if (_ !== e) {
        if (e) {
          t.frontFace(2304);
        } else {
          t.frontFace(2305);
        }
        _ = e;
      }
    }
    function j(e) {
      if (0 !== e) {
        N(2884);
        if (e !== w) {
          if (1 === e) {
            t.cullFace(1029);
          } else {
            if (2 === e) {
              t.cullFace(1028);
            } else {
              t.cullFace(1032);
            }
          }
        }
      } else {
        B(2884);
      }
      w = e;
    }
    function V(e, n, r) {
      if (e) {
        N(32823);
        if (E === n && T === r) {
          t.polygonOffset(n, r);
          E = n;
          T = r;
        }
      } else {
        B(32823);
      }
    }
    function W(e) {
      if (void 0 === e) {
        e = 33984 + M - 1;
      }
      if (P !== e) {
        t.activeTexture(e);
        P = e;
      }
    }
    return {
      buffers: {
        color: s,
        depth: l,
        stencil: u
      },
      enable: N,
      disable: B,
      useProgram: function (e) {
        return h !== e && (t.useProgram(e), h = e, !0);
      },
      setBlending: G,
      setMaterial: function (t, e) {
        if (2 === t.side) {
          B(2884);
        } else {
          N(2884);
        }
        var n = 1 === t.side;
        if (e) {
          n = !n;
        }
        H(n);
        if (1 === t.blending && !1 === t.transparent) {
          G(0);
        } else {
          G(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha);
        }
        l.setFunc(t.depthFunc);
        l.setTest(t.depthTest);
        l.setMask(t.depthWrite);
        s.setMask(t.colorWrite);
        var r = t.stencilWrite;
        u.setTest(r);
        if (r) {
          u.setMask(t.stencilWriteMask);
          u.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask);
          u.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass);
        }
        V(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
      },
      setFlipSided: H,
      setCullFace: j,
      setLineWidth: function (e) {
        if (e !== S) {
          if (A) {
            t.lineWidth(e);
          }
          S = e;
        }
      },
      setPolygonOffset: V,
      setScissorTest: function (t) {
        if (t) {
          N(3089);
        } else {
          B(3089);
        }
      },
      activeTexture: W,
      bindTexture: function (e, n) {
        if (null === P) {
          W();
        }
        var r = R[P];
        if (void 0 === r) {
          r = {
            type: void 0,
            texture: void 0
          };
          R[P] = r;
        }
        if (r.type === e && r.texture === n) {
          t.bindTexture(e, n || k[e]);
          r.type = e;
          r.texture = n;
        }
      },
      unbindTexture: function () {
        var e = R[P];
        if (void 0 !== e && void 0 !== e.type) {
          t.bindTexture(e.type, null);
          e.type = void 0;
          e.texture = void 0;
        }
      },
      compressedTexImage2D: function () {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function () {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function () {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function (e) {
        if (!1 === O.equals(e)) {
          t.scissor(e.x, e.y, e.z, e.w);
          O.copy(e);
        }
      },
      viewport: function (e) {
        if (!1 === I.equals(e)) {
          t.viewport(e.x, e.y, e.z, e.w);
          I.copy(e);
        }
      },
      reset: function () {
        c = {};
        P = null;
        R = {};
        h = null;
        f = null;
        _ = null;
        w = null;
        s.reset();
        l.reset();
        u.reset();
      }
    };
  }
  function Ki(t, e, n, r, i, a, o) {
    var s;
    var l;
    var u;
    var h = i.isWebGL2;
    var v = i.maxTextures;
    var g = i.maxCubemapSize;
    var y = i.maxTextureSize;
    var L = i.maxSamples;
    var C = new WeakMap();
    var P = !1;
    try {
      P = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}
    function R(t, e) {
      return P ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }
    function O(t, e, n, r) {
      var i = 1;
      if (t.width > r || t.height > r) {
        i = r / Math.max(t.width, t.height);
      }
      if (i < 1 || !0 === e) {
        if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
          var a = e ? st.floorPowerOfTwo : Math.floor,
            o = a(i * t.width),
            s = a(i * t.height);
          void 0 === u && (u = R(o, s));
          var l = n ? R(o, s) : u;
          return l.width = o, l.height = s, l.getContext("2d").drawImage(t, 0, 0, o, s), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + o + "x" + s + ")."), l;
        }
        return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
      }
      return t;
    }
    function I(t) {
      return st.isPowerOfTwo(t.width) && st.isPowerOfTwo(t.height);
    }
    function D(t, e) {
      return t.generateMipmaps && e && t.minFilter !== d && t.minFilter !== m;
    }
    function k(e, n, i, a) {
      t.generateMipmap(e);
      r.get(n).__maxMipLevel = Math.log(Math.max(i, a)) * Math.LOG2E;
    }
    function N(n, r, i) {
      if (!1 === h) return r;
      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
      }
      var a = r;
      if (6403 === r) {
        if (5126 === i) {
          a = 33326;
        }
        if (5131 === i) {
          a = 33325;
        }
        if (5121 === i) {
          a = 33321;
        }
      }
      if (6407 === r) {
        if (5126 === i) {
          a = 34837;
        }
        if (5131 === i) {
          a = 34843;
        }
        if (5121 === i) {
          a = 32849;
        }
      }
      if (6408 === r) {
        if (5126 === i) {
          a = 34836;
        }
        if (5131 === i) {
          a = 34842;
        }
        if (5121 === i) {
          a = 32856;
        }
      }
      if (33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a) {
        e.get("EXT_color_buffer_float");
      }
      return a;
    }
    function B(t) {
      return t === d || t === f || t === p ? 9728 : 9729;
    }
    function F(e) {
      var n = e.target;
      n.removeEventListener("dispose", F);
      (function (e) {
        var n = r.get(e);
        if (void 0 !== n.__webglInit) {
          t.deleteTexture(n.__webglTexture);
          r.remove(e);
        }
      })(n);
      if (n.isVideoTexture) {
        C.delete(n);
      }
      o.memory.textures--;
    }
    function U(e) {
      var n = e.target;
      n.removeEventListener("dispose", U);
      (function (e) {
        var n = r.get(e);
        var i = r.get(e.texture);
        if (e) {
          if (void 0 !== i.__webglTexture) {
            t.deleteTexture(i.__webglTexture);
          }
          if (e.depthTexture) {
            e.depthTexture.dispose();
          }
          if (e.isWebGLCubeRenderTarget) for (var a = 0; a < 6; a++) t.deleteFramebuffer(n.__webglFramebuffer[a]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[a]);else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && t.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer && t.deleteRenderbuffer(n.__webglColorRenderbuffer), n.__webglDepthRenderbuffer && t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
          r.remove(e.texture);
          r.remove(e);
        }
      })(n);
      o.memory.textures--;
    }
    var z = 0;
    function G(t, e) {
      var i = r.get(t);
      if (t.isVideoTexture) {
        (function (t) {
          var e = o.render.frame;
          if (C.get(t) !== e) {
            C.set(t, e);
            t.update();
          }
        })(t);
      }
      if (t.version > 0 && i.__version !== t.version) {
        var a = t.image;
        if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else {
          if (!1 !== a.complete) return void Y(i, t, e);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }
      n.activeTexture(33984 + e);
      n.bindTexture(3553, i.__webglTexture);
    }
    function H(e, i) {
      var o = r.get(e);
      if (e.version > 0 && o.__version !== e.version) {
        (function (e, r, i) {
          if (6 === r.image.length) {
            q(e, r);
            n.activeTexture(33984 + i);
            n.bindTexture(34067, e.__webglTexture);
            t.pixelStorei(37440, r.flipY);
            for (o = r && (r.isCompressedTexture || r.image[0].isCompressedTexture), s = r.image[0] && r.image[0].isDataTexture, l = [], u = 0, void 0; u < 6; u++) {
              var o;
              var s;
              var l;
              var u;
              l[u] = o || s ? s ? r.image[u].image : r.image[u] : O(r.image[u], !1, !0, g);
            }
            var c;
            var d = l[0];
            var f = I(d) || h;
            var p = a.convert(r.format);
            var m = a.convert(r.type);
            var v = N(r.internalFormat, p, m);
            W(34067, r, f);
            if (o) {
              for (var y = 0; y < 6; y++) {
                c = l[y].mipmaps;
                for (var b = 0; b < c.length; b++) {
                  var x = c[b];
                  r.format !== T && r.format !== E ? null !== p ? n.compressedTexImage2D(34069 + y, b, v, x.width, x.height, 0, x.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + y, b, v, x.width, x.height, 0, p, m, x.data);
                }
              }
              e.__maxMipLevel = c.length - 1;
            } else {
              c = r.mipmaps;
              for (var _ = 0; _ < 6; _++) if (s) {
                n.texImage2D(34069 + _, 0, v, l[_].width, l[_].height, 0, p, m, l[_].data);
                for (var w = 0; w < c.length; w++) {
                  var S = c[w].image[_].image;
                  n.texImage2D(34069 + _, w + 1, v, S.width, S.height, 0, p, m, S.data);
                }
              } else {
                n.texImage2D(34069 + _, 0, v, p, m, l[_]);
                for (var M = 0; M < c.length; M++) {
                  var A = c[M];
                  n.texImage2D(34069 + _, M + 1, v, p, m, A.image[_]);
                }
              }
              e.__maxMipLevel = c.length;
            }
            if (D(r, f)) {
              k(34067, r, d.width, d.height);
            }
            e.__version = r.version;
            if (r.onUpdate) {
              r.onUpdate(r);
            }
          }
        })(o, e, i);
      } else {
        n.activeTexture(33984 + i);
        n.bindTexture(34067, o.__webglTexture);
      }
    }
    var j = ((s = {})[1e3] = 10497, s[1001] = 33071, s[1002] = 33648, s);
    var V = ((l = {})[1003] = 9728, l[1004] = 9984, l[1005] = 9986, l[1006] = 9729, l[1007] = 9985, l[1008] = 9987, l);
    function W(n, a, o) {
      if (o) {
        t.texParameteri(n, 10242, j[a.wrapS]);
        t.texParameteri(n, 10243, j[a.wrapT]);
        if (32879 !== n && 35866 !== n) {
          t.texParameteri(n, 32882, j[a.wrapR]);
        }
        t.texParameteri(n, 10240, V[a.magFilter]);
        t.texParameteri(n, 10241, V[a.minFilter]);
      } else {
        t.texParameteri(n, 10242, 33071);
        t.texParameteri(n, 10243, 33071);
        if (32879 !== n && 35866 !== n) {
          t.texParameteri(n, 32882, 33071);
        }
        if (a.wrapS === c && a.wrapT === c) {
          console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");
        }
        t.texParameteri(n, 10240, B(a.magFilter));
        t.texParameteri(n, 10241, B(a.minFilter));
        if (a.minFilter !== d && a.minFilter !== m) {
          console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.");
        }
      }
      var s = e.get("EXT_texture_filter_anisotropic");
      if (s) {
        if (a.type === _ && null === e.get("OES_texture_float_linear")) return;
        if (a.type === w && null === (h || e.get("OES_texture_half_float_linear"))) return;
        if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
          t.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy()));
          r.get(a).__currentAnisotropy = a.anisotropy;
        }
      }
    }
    function q(e, n) {
      if (void 0 === e.__webglInit) {
        e.__webglInit = !0;
        n.addEventListener("dispose", F);
        e.__webglTexture = t.createTexture();
        o.memory.textures++;
      }
    }
    function Y(e, r, i) {
      var o = 3553;
      if (r.isDataTexture2DArray) {
        o = 35866;
      }
      if (r.isDataTexture3D) {
        o = 32879;
      }
      q(e, r);
      n.activeTexture(33984 + i);
      n.bindTexture(o, e.__webglTexture);
      t.pixelStorei(37440, r.flipY);
      t.pixelStorei(37441, r.premultiplyAlpha);
      t.pixelStorei(3317, r.unpackAlignment);
      var s;
      var l = function (t) {
        return !h && (t.wrapS !== c || t.wrapT !== c || t.minFilter !== d && t.minFilter !== m);
      }(r) && !1 === I(r.image);
      var u = O(r.image, l, !1, y);
      var f = I(u) || h;
      var p = a.convert(r.format);
      var v = a.convert(r.type);
      var g = N(r.internalFormat, p, v);
      W(o, r, f);
      var w = r.mipmaps;
      if (r.isDepthTexture) {
        g = 6402;
        if (h) {
          g = r.type === _ ? 36012 : r.type === x ? 33190 : r.type === S ? 35056 : 33189;
        } else {
          if (r.type === _) {
            console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");
          }
        }
        if (r.format === M && 6402 === g && r.type !== b && r.type !== x) {
          console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.");
          r.type = b;
          v = a.convert(r.type);
        }
        if (r.format === A && 6402 === g) {
          g = 34041;
          if (r.type !== S) {
            console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.");
            r.type = S;
            v = a.convert(r.type);
          }
        }
        n.texImage2D(3553, 0, g, u.width, u.height, 0, p, v, null);
      } else if (r.isDataTexture) {
        if (w.length > 0 && f) {
          for (L = 0, C = w.length, void 0; L < C; L++) {
            var L;
            var C;
            s = w[L];
            n.texImage2D(3553, L, g, s.width, s.height, 0, p, v, s.data);
          }
          r.generateMipmaps = !1;
          e.__maxMipLevel = w.length - 1;
        } else {
          n.texImage2D(3553, 0, g, u.width, u.height, 0, p, v, u.data);
          e.__maxMipLevel = 0;
        }
      } else if (r.isCompressedTexture) {
        for (P = 0, R = w.length, void 0; P < R; P++) {
          var P;
          var R;
          s = w[P];
          if (r.format !== T && r.format !== E) {
            if (null !== p) {
              n.compressedTexImage2D(3553, P, g, s.width, s.height, 0, s.data);
            } else {
              console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            }
          } else {
            n.texImage2D(3553, P, g, s.width, s.height, 0, p, v, s.data);
          }
        }
        e.__maxMipLevel = w.length - 1;
      } else if (r.isDataTexture2DArray) {
        n.texImage3D(35866, 0, g, u.width, u.height, u.depth, 0, p, v, u.data);
        e.__maxMipLevel = 0;
      } else if (r.isDataTexture3D) {
        n.texImage3D(32879, 0, g, u.width, u.height, u.depth, 0, p, v, u.data);
        e.__maxMipLevel = 0;
      } else if (w.length > 0 && f) {
        for (B = 0, F = w.length, void 0; B < F; B++) {
          var B;
          var F;
          s = w[B];
          n.texImage2D(3553, B, g, p, v, s);
        }
        r.generateMipmaps = !1;
        e.__maxMipLevel = w.length - 1;
      } else {
        n.texImage2D(3553, 0, g, p, v, u);
        e.__maxMipLevel = 0;
      }
      if (D(r, f)) {
        k(o, r, u.width, u.height);
      }
      e.__version = r.version;
      if (r.onUpdate) {
        r.onUpdate(r);
      }
    }
    function X(e, i, o, s) {
      var l = a.convert(i.texture.format);
      var u = a.convert(i.texture.type);
      var c = N(i.texture.internalFormat, l, u);
      n.texImage2D(s, 0, c, i.width, i.height, 0, l, u, null);
      t.bindFramebuffer(36160, e);
      t.framebufferTexture2D(36160, o, s, r.get(i.texture).__webglTexture, 0);
      t.bindFramebuffer(36160, null);
    }
    function Z(e, n, r) {
      t.bindRenderbuffer(36161, e);
      if (n.depthBuffer && !n.stencilBuffer) {
        var i = 33189;
        if (r) {
          var o = n.depthTexture;
          o && o.isDepthTexture && (o.type === _ ? i = 36012 : o.type === x && (i = 33190));
          var s = J(n);
          t.renderbufferStorageMultisample(36161, s, i, n.width, n.height);
        } else t.renderbufferStorage(36161, i, n.width, n.height);
        t.framebufferRenderbuffer(36160, 36096, 36161, e);
      } else if (n.depthBuffer && n.stencilBuffer) {
        if (r) {
          var l = J(n);
          t.renderbufferStorageMultisample(36161, l, 35056, n.width, n.height);
        } else t.renderbufferStorage(36161, 34041, n.width, n.height);
        t.framebufferRenderbuffer(36160, 33306, 36161, e);
      } else {
        var u = a.convert(n.texture.format),
          c = a.convert(n.texture.type),
          h = N(n.texture.internalFormat, u, c);
        if (r) {
          var d = J(n);
          t.renderbufferStorageMultisample(36161, d, h, n.width, n.height);
        } else t.renderbufferStorage(36161, h, n.width, n.height);
      }
      t.bindRenderbuffer(36161, null);
    }
    function K(e) {
      var n = r.get(e);
      var i = !0 === e.isWebGLCubeRenderTarget;
      if (e.depthTexture) {
        if (i) throw new Error("target.depthTexture not supported in Cube render targets");
        !function (e, n) {
          if (n && n.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          t.bindFramebuffer(36160, e);
          if (!n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          if (r.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height) {
            n.depthTexture.image.width = n.width;
            n.depthTexture.image.height = n.height;
            n.depthTexture.needsUpdate = !0;
          }
          G(n.depthTexture, 0);
          var i = r.get(n.depthTexture).__webglTexture;
          if (n.depthTexture.format === M) t.framebufferTexture2D(36160, 36096, 3553, i, 0);else {
            if (n.depthTexture.format !== A) throw new Error("Unknown depthTexture format");
            t.framebufferTexture2D(36160, 33306, 3553, i, 0);
          }
        }(n.__webglFramebuffer, e);
      } else if (i) {
        n.__webglDepthbuffer = [];
        for (var a = 0; a < 6; a++) {
          t.bindFramebuffer(36160, n.__webglFramebuffer[a]);
          n.__webglDepthbuffer[a] = t.createRenderbuffer();
          Z(n.__webglDepthbuffer[a], e, !1);
        }
      } else {
        t.bindFramebuffer(36160, n.__webglFramebuffer);
        n.__webglDepthbuffer = t.createRenderbuffer();
        Z(n.__webglDepthbuffer, e, !1);
      }
      t.bindFramebuffer(36160, null);
    }
    function J(t) {
      return h && t.isWebGLMultisampleRenderTarget ? Math.min(L, t.samples) : 0;
    }
    var $ = !1;
    var Q = !1;
    this.allocateTextureUnit = function () {
      var t = z;
      if (t >= v) {
        console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + v);
      }
      z += 1;
      return t;
    };
    this.resetTextureUnits = function () {
      z = 0;
    };
    this.setTexture2D = G;
    this.setTexture2DArray = function (t, e) {
      var i = r.get(t);
      if (t.version > 0 && i.__version !== t.version) {
        Y(i, t, e);
      } else {
        n.activeTexture(33984 + e);
        n.bindTexture(35866, i.__webglTexture);
      }
    };
    this.setTexture3D = function (t, e) {
      var i = r.get(t);
      if (t.version > 0 && i.__version !== t.version) {
        Y(i, t, e);
      } else {
        n.activeTexture(33984 + e);
        n.bindTexture(32879, i.__webglTexture);
      }
    };
    this.setTextureCube = H;
    this.setupRenderTarget = function (e) {
      var i = r.get(e);
      var s = r.get(e.texture);
      e.addEventListener("dispose", U);
      s.__webglTexture = t.createTexture();
      o.memory.textures++;
      var l = !0 === e.isWebGLCubeRenderTarget;
      var u = !0 === e.isWebGLMultisampleRenderTarget;
      var c = I(e) || h;
      if (!h || e.texture.format !== E || e.texture.type !== _ && e.texture.type !== w) {
        e.texture.format = T;
        console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.");
      }
      if (l) {
        i.__webglFramebuffer = [];
        for (var d = 0; d < 6; d++) i.__webglFramebuffer[d] = t.createFramebuffer();
      } else if (i.__webglFramebuffer = t.createFramebuffer(), u) if (h) {
        i.__webglMultisampledFramebuffer = t.createFramebuffer(), i.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, i.__webglColorRenderbuffer);
        var f = a.convert(e.texture.format),
          p = a.convert(e.texture.type),
          m = N(e.texture.internalFormat, f, p),
          v = J(e);
        t.renderbufferStorageMultisample(36161, v, m, e.width, e.height), t.bindFramebuffer(36160, i.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, i.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (i.__webglDepthRenderbuffer = t.createRenderbuffer(), Z(i.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
      if (l) {
        n.bindTexture(34067, s.__webglTexture);
        W(34067, e.texture, c);
        for (var g = 0; g < 6; g++) X(i.__webglFramebuffer[g], e, 36064, 34069 + g);
        if (D(e.texture, c)) {
          k(34067, e.texture, e.width, e.height);
        }
        n.bindTexture(34067, null);
      } else {
        n.bindTexture(3553, s.__webglTexture);
        W(3553, e.texture, c);
        X(i.__webglFramebuffer, e, 36064, 3553);
        if (D(e.texture, c)) {
          k(3553, e.texture, e.width, e.height);
        }
        n.bindTexture(3553, null);
      }
      if (e.depthBuffer) {
        K(e);
      }
    };
    this.updateRenderTargetMipmap = function (t) {
      var e = t.texture;
      if (D(e, I(t) || h)) {
        var i = t.isWebGLCubeRenderTarget ? 34067 : 3553;
        var a = r.get(e).__webglTexture;
        n.bindTexture(i, a);
        k(i, e, t.width, t.height);
        n.bindTexture(i, null);
      }
    };
    this.updateMultisampleRenderTarget = function (e) {
      if (e.isWebGLMultisampleRenderTarget) if (h) {
        var n = r.get(e);
        t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer);
        t.bindFramebuffer(36009, n.__webglFramebuffer);
        var i = e.width;
        var a = e.height;
        var o = 16384;
        if (e.depthBuffer) {
          o |= 256;
        }
        if (e.stencilBuffer) {
          o |= 1024;
        }
        t.blitFramebuffer(0, 0, i, a, 0, 0, i, a, o, 9728);
        t.bindFramebuffer(36160, n.__webglMultisampledFramebuffer);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    };
    this.safeSetTexture2D = function (t, e) {
      if (t && t.isWebGLRenderTarget) {
        if (!1 === $) {
          console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead.");
          $ = !0;
        }
        t = t.texture;
      }
      G(t, e);
    };
    this.safeSetTextureCube = function (t, e) {
      if (t && t.isWebGLCubeRenderTarget) {
        if (!1 === Q) {
          console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead.");
          Q = !0;
        }
        t = t.texture;
      }
      H(t, e);
    };
  }
  function Ji(t, e, n) {
    var r = n.isWebGL2;
    return {
      convert: function (t) {
        var n;
        if (t === y) return 5121;
        if (1017 === t) return 32819;
        if (1018 === t) return 32820;
        if (1019 === t) return 33635;
        if (1010 === t) return 5120;
        if (1011 === t) return 5122;
        if (t === b) return 5123;
        if (1013 === t) return 5124;
        if (t === x) return 5125;
        if (t === _) return 5126;
        if (t === w) return r ? 5131 : null !== (n = e.get("OES_texture_half_float")) ? n.HALF_FLOAT_OES : null;
        if (1021 === t) return 6406;
        if (t === E) return 6407;
        if (t === T) return 6408;
        if (1024 === t) return 6409;
        if (1025 === t) return 6410;
        if (t === M) return 6402;
        if (t === A) return 34041;
        if (1028 === t) return 6403;
        if (1029 === t) return 36244;
        if (1030 === t) return 33319;
        if (1031 === t) return 33320;
        if (1032 === t) return 36248;
        if (1033 === t) return 36249;
        if (t === L || t === C || t === P || t === R) {
          if (null === (n = e.get("WEBGL_compressed_texture_s3tc"))) return null;
          if (t === L) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (t === C) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (t === P) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (t === R) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
        if (t === O || t === I || t === D || t === k) {
          if (null === (n = e.get("WEBGL_compressed_texture_pvrtc"))) return null;
          if (t === O) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (t === I) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (t === D) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (t === k) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (36196 === t) return null !== (n = e.get("WEBGL_compressed_texture_etc1")) ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
        if ((t === N || t === B) && null !== (n = e.get("WEBGL_compressed_texture_etc"))) {
          if (t === N) return n.COMPRESSED_RGB8_ETC2;
          if (t === B) return n.COMPRESSED_RGBA8_ETC2_EAC;
        }
        return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? null !== (n = e.get("WEBGL_compressed_texture_astc")) ? t : null : 36492 === t ? null !== (n = e.get("EXT_texture_compression_bptc")) ? t : null : t === S ? r ? 34042 : null !== (n = e.get("WEBGL_depth_texture")) ? n.UNSIGNED_INT_24_8_WEBGL : null : void 0;
      }
    };
  }
  function $i(t) {
    jn.call(this);
    this.cameras = t || [];
  }
  function Qi() {
    _e.call(this);
    this.type = "Group";
  }
  function ta() {
    this._targetRay = null;
    this._grip = null;
    this._hand = null;
  }
  function ea(t, e) {
    var n = this;
    var r = null;
    var i = 1;
    var a = null;
    var o = "local-floor";
    var s = null;
    var l = [];
    var u = new Map();
    var c = new jn();
    c.layers.enable(1);
    c.viewport = new yt();
    var h = new jn();
    h.layers.enable(2);
    h.viewport = new yt();
    var d = [c, h];
    var f = new $i();
    f.layers.enable(1);
    f.layers.enable(2);
    var p = null;
    var m = null;
    function v(t) {
      var e = u.get(t.inputSource);
      if (e) {
        e.dispatchEvent({
          type: t.type,
          data: t.inputSource
        });
      }
    }
    function g() {
      u.forEach(function (t, e) {
        t.disconnect(e);
      });
      u.clear();
      t.setFramebuffer(null);
      t.setRenderTarget(t.getRenderTarget());
      E.stop();
      n.isPresenting = !1;
      n.dispatchEvent({
        type: "sessionend"
      });
    }
    function y(t) {
      a = t;
      E.setContext(r);
      E.start();
      n.isPresenting = !0;
      n.dispatchEvent({
        type: "sessionstart"
      });
    }
    function b(t) {
      for (e = r.inputSources, n = 0, void 0; n < l.length; n++) {
        var e;
        var n;
        u.set(e[n], l[n]);
      }
      for (var i = 0; i < t.removed.length; i++) {
        var a = t.removed[i];
        var o = u.get(a);
        if (o) {
          o.dispatchEvent({
            type: "disconnected",
            data: a
          });
          u.delete(a);
        }
      }
      for (var s = 0; s < t.added.length; s++) {
        var c = t.added[s];
        var h = u.get(c);
        if (h) {
          h.dispatchEvent({
            type: "connected",
            data: c
          });
        }
      }
    }
    this.enabled = !1;
    this.isPresenting = !1;
    this.getController = function (t) {
      var e = l[t];
      if (void 0 === e) {
        e = new ta();
        l[t] = e;
      }
      return e.getTargetRaySpace();
    };
    this.getControllerGrip = function (t) {
      var e = l[t];
      if (void 0 === e) {
        e = new ta();
        l[t] = e;
      }
      return e.getGripSpace();
    };
    this.getHand = function (t) {
      var e = l[t];
      if (void 0 === e) {
        e = new ta();
        l[t] = e;
      }
      return e.getHandSpace();
    };
    this.setFramebufferScaleFactor = function (t) {
      i = t;
      if (!0 === n.isPresenting) {
        console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }
    };
    this.setReferenceSpaceType = function (t) {
      o = t;
      if (!0 === n.isPresenting) {
        console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }
    };
    this.getReferenceSpace = function () {
      return a;
    };
    this.getSession = function () {
      return r;
    };
    this.setSession = function (t) {
      if (null !== (r = t)) {
        r.addEventListener("select", v);
        r.addEventListener("selectstart", v);
        r.addEventListener("selectend", v);
        r.addEventListener("squeeze", v);
        r.addEventListener("squeezestart", v);
        r.addEventListener("squeezeend", v);
        r.addEventListener("end", g);
        var n = e.getContextAttributes();
        if (!0 !== n.xrCompatible) {
          e.makeXRCompatible();
        }
        var a = {
          antialias: n.antialias,
          alpha: n.alpha,
          depth: n.depth,
          stencil: n.stencil,
          framebufferScaleFactor: i
        };
        var s = new XRWebGLLayer(r, e, a);
        r.updateRenderState({
          baseLayer: s
        });
        r.requestReferenceSpace(o).then(y);
        r.addEventListener("inputsourceschange", b);
      }
    };
    var x = new wt();
    var _ = new wt();
    function w(t, e) {
      if (null === e) {
        t.matrixWorld.copy(t.matrix);
      } else {
        t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix);
      }
      t.matrixWorldInverse.getInverse(t.matrixWorld);
    }
    this.getCamera = function (t) {
      f.near = h.near = c.near = t.near;
      f.far = h.far = c.far = t.far;
      if (p === f.near && m === f.far) {
        r.updateRenderState({
          depthNear: f.near,
          depthFar: f.far
        });
        p = f.near;
        m = f.far;
      }
      var e = t.parent;
      var n = f.cameras;
      w(f, e);
      for (var i = 0; i < n.length; i++) w(n[i], e);
      t.matrixWorld.copy(f.matrixWorld);
      for (a = t.children, o = 0, s = a.length, void 0; o < s; o++) {
        var a;
        var o;
        var s;
        a[o].updateMatrixWorld(!0);
      }
      if (2 === n.length) {
        (function (t, e, n) {
          x.setFromMatrixPosition(e.matrixWorld);
          _.setFromMatrixPosition(n.matrixWorld);
          var r = x.distanceTo(_);
          var i = e.projectionMatrix.elements;
          var a = n.projectionMatrix.elements;
          var o = i[14] / (i[10] - 1);
          var s = i[14] / (i[10] + 1);
          var l = (i[9] + 1) / i[5];
          var u = (i[9] - 1) / i[5];
          var c = (i[8] - 1) / i[0];
          var h = (a[8] + 1) / a[0];
          var d = o * c;
          var f = o * h;
          var p = r / (-c + h);
          var m = p * -c;
          e.matrixWorld.decompose(t.position, t.quaternion, t.scale);
          t.translateX(m);
          t.translateZ(p);
          t.matrixWorld.compose(t.position, t.quaternion, t.scale);
          t.matrixWorldInverse.getInverse(t.matrixWorld);
          var v = o + p;
          var g = s + p;
          var y = d - m;
          var b = f + (r - m);
          var w = l * s / g * v;
          var S = u * s / g * v;
          t.projectionMatrix.makePerspective(y, b, w, S, v, g);
        })(f, c, h);
      } else {
        f.projectionMatrix.copy(c.projectionMatrix);
      }
      return f;
    };
    var S = null;
    var E = new $n();
    E.setAnimationLoop(function (e, n) {
      if (null !== (s = n.getViewerPose(a))) {
        var i = s.views;
        var o = r.renderState.baseLayer;
        t.setFramebuffer(o.framebuffer);
        var u = !1;
        if (i.length !== f.cameras.length) {
          f.cameras.length = 0;
          u = !0;
        }
        for (var c = 0; c < i.length; c++) {
          var h = i[c];
          var p = o.getViewport(h);
          var m = d[c];
          m.matrix.fromArray(h.transform.matrix);
          m.projectionMatrix.fromArray(h.projectionMatrix);
          m.viewport.set(p.x, p.y, p.width, p.height);
          if (0 === c) {
            f.matrix.copy(m.matrix);
          }
          if (!0 === u) {
            f.cameras.push(m);
          }
        }
      }
      for (v = r.inputSources, g = 0, void 0; g < l.length; g++) {
        var v;
        var g;
        var y = l[g];
        var b = v[g];
        y.update(b, n, a);
      }
      if (S) {
        S(e, n);
      }
    });
    this.setAnimationLoop = function (t) {
      S = t;
    };
    this.dispose = function () {};
  }
  function na(t) {
    function e(e, n) {
      e.opacity.value = n.opacity;
      if (n.color) {
        e.diffuse.value.copy(n.color);
      }
      if (n.emissive) {
        e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity);
      }
      if (n.map) {
        e.map.value = n.map;
      }
      if (n.alphaMap) {
        e.alphaMap.value = n.alphaMap;
      }
      if (n.specularMap) {
        e.specularMap.value = n.specularMap;
      }
      var r;
      var i;
      var a = t.get(n).envMap;
      if (a) {
        e.envMap.value = a;
        e.flipEnvMap.value = a.isCubeTexture && a._needsFlipEnvMap ? -1 : 1;
        e.reflectivity.value = n.reflectivity;
        e.refractionRatio.value = n.refractionRatio;
        var o = t.get(a).__maxMipLevel;
        if (void 0 !== o) {
          e.maxMipLevel.value = o;
        }
      }
      if (n.lightMap) {
        e.lightMap.value = n.lightMap;
        e.lightMapIntensity.value = n.lightMapIntensity;
      }
      if (n.aoMap) {
        e.aoMap.value = n.aoMap;
        e.aoMapIntensity.value = n.aoMapIntensity;
      }
      if (n.map) {
        r = n.map;
      } else {
        if (n.specularMap) {
          r = n.specularMap;
        } else {
          if (n.displacementMap) {
            r = n.displacementMap;
          } else {
            if (n.normalMap) {
              r = n.normalMap;
            } else {
              if (n.bumpMap) {
                r = n.bumpMap;
              } else {
                if (n.roughnessMap) {
                  r = n.roughnessMap;
                } else {
                  if (n.metalnessMap) {
                    r = n.metalnessMap;
                  } else {
                    if (n.alphaMap) {
                      r = n.alphaMap;
                    } else {
                      if (n.emissiveMap) {
                        r = n.emissiveMap;
                      } else {
                        if (n.clearcoatMap) {
                          r = n.clearcoatMap;
                        } else {
                          if (n.clearcoatNormalMap) {
                            r = n.clearcoatNormalMap;
                          } else {
                            if (n.clearcoatRoughnessMap) {
                              r = n.clearcoatRoughnessMap;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (void 0 !== r) {
        if (r.isWebGLRenderTarget) {
          r = r.texture;
        }
        if (!0 === r.matrixAutoUpdate) {
          r.updateMatrix();
        }
        e.uvTransform.value.copy(r.matrix);
      }
      if (n.aoMap) {
        i = n.aoMap;
      } else {
        if (n.lightMap) {
          i = n.lightMap;
        }
      }
      if (void 0 !== i) {
        if (i.isWebGLRenderTarget) {
          i = i.texture;
        }
        if (!0 === i.matrixAutoUpdate) {
          i.updateMatrix();
        }
        e.uv2Transform.value.copy(i.matrix);
      }
    }
    function n(e, n) {
      e.roughness.value = n.roughness;
      e.metalness.value = n.metalness;
      if (n.roughnessMap) {
        e.roughnessMap.value = n.roughnessMap;
      }
      if (n.metalnessMap) {
        e.metalnessMap.value = n.metalnessMap;
      }
      if (n.emissiveMap) {
        e.emissiveMap.value = n.emissiveMap;
      }
      if (n.bumpMap) {
        e.bumpMap.value = n.bumpMap;
        e.bumpScale.value = n.bumpScale;
        if (1 === n.side) {
          e.bumpScale.value *= -1;
        }
      }
      if (n.normalMap) {
        e.normalMap.value = n.normalMap;
        e.normalScale.value.copy(n.normalScale);
        if (1 === n.side) {
          e.normalScale.value.negate();
        }
      }
      if (n.displacementMap) {
        e.displacementMap.value = n.displacementMap;
        e.displacementScale.value = n.displacementScale;
        e.displacementBias.value = n.displacementBias;
      }
      if (t.get(n).envMap) {
        e.envMapIntensity.value = n.envMapIntensity;
      }
    }
    return {
      refreshFogUniforms: function (t, e) {
        t.fogColor.value.copy(e.color);
        if (e.isFog) {
          t.fogNear.value = e.near;
          t.fogFar.value = e.far;
        } else {
          if (e.isFogExp2) {
            t.fogDensity.value = e.density;
          }
        }
      },
      refreshMaterialUniforms: function (t, r, i, a) {
        if (r.isMeshBasicMaterial) {
          e(t, r);
        } else {
          if (r.isMeshLambertMaterial) {
            e(t, r);
            (function (t, e) {
              if (e.emissiveMap) {
                t.emissiveMap.value = e.emissiveMap;
              }
            })(t, r);
          } else {
            if (r.isMeshToonMaterial) {
              e(t, r);
              (function (t, e) {
                if (e.gradientMap) {
                  t.gradientMap.value = e.gradientMap;
                }
                if (e.emissiveMap) {
                  t.emissiveMap.value = e.emissiveMap;
                }
                if (e.bumpMap) {
                  t.bumpMap.value = e.bumpMap;
                  t.bumpScale.value = e.bumpScale;
                  if (1 === e.side) {
                    t.bumpScale.value *= -1;
                  }
                }
                if (e.normalMap) {
                  t.normalMap.value = e.normalMap;
                  t.normalScale.value.copy(e.normalScale);
                  if (1 === e.side) {
                    t.normalScale.value.negate();
                  }
                }
                if (e.displacementMap) {
                  t.displacementMap.value = e.displacementMap;
                  t.displacementScale.value = e.displacementScale;
                  t.displacementBias.value = e.displacementBias;
                }
              })(t, r);
            } else {
              if (r.isMeshPhongMaterial) {
                e(t, r);
                (function (t, e) {
                  t.specular.value.copy(e.specular);
                  t.shininess.value = Math.max(e.shininess, 1e-4);
                  if (e.emissiveMap) {
                    t.emissiveMap.value = e.emissiveMap;
                  }
                  if (e.bumpMap) {
                    t.bumpMap.value = e.bumpMap;
                    t.bumpScale.value = e.bumpScale;
                    if (1 === e.side) {
                      t.bumpScale.value *= -1;
                    }
                  }
                  if (e.normalMap) {
                    t.normalMap.value = e.normalMap;
                    t.normalScale.value.copy(e.normalScale);
                    if (1 === e.side) {
                      t.normalScale.value.negate();
                    }
                  }
                  if (e.displacementMap) {
                    t.displacementMap.value = e.displacementMap;
                    t.displacementScale.value = e.displacementScale;
                    t.displacementBias.value = e.displacementBias;
                  }
                })(t, r);
              } else {
                if (r.isMeshStandardMaterial) {
                  e(t, r);
                  if (r.isMeshPhysicalMaterial) {
                    (function (t, e) {
                      n(t, e);
                      t.reflectivity.value = e.reflectivity;
                      t.clearcoat.value = e.clearcoat;
                      t.clearcoatRoughness.value = e.clearcoatRoughness;
                      if (e.sheen) {
                        t.sheen.value.copy(e.sheen);
                      }
                      if (e.clearcoatMap) {
                        t.clearcoatMap.value = e.clearcoatMap;
                      }
                      if (e.clearcoatRoughnessMap) {
                        t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap;
                      }
                      if (e.clearcoatNormalMap) {
                        t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale);
                        t.clearcoatNormalMap.value = e.clearcoatNormalMap;
                        if (1 === e.side) {
                          t.clearcoatNormalScale.value.negate();
                        }
                      }
                      t.transmission.value = e.transmission;
                      if (e.transmissionMap) {
                        t.transmissionMap.value = e.transmissionMap;
                      }
                    })(t, r);
                  } else {
                    n(t, r);
                  }
                } else {
                  if (r.isMeshMatcapMaterial) {
                    e(t, r);
                    (function (t, e) {
                      if (e.matcap) {
                        t.matcap.value = e.matcap;
                      }
                      if (e.bumpMap) {
                        t.bumpMap.value = e.bumpMap;
                        t.bumpScale.value = e.bumpScale;
                        if (1 === e.side) {
                          t.bumpScale.value *= -1;
                        }
                      }
                      if (e.normalMap) {
                        t.normalMap.value = e.normalMap;
                        t.normalScale.value.copy(e.normalScale);
                        if (1 === e.side) {
                          t.normalScale.value.negate();
                        }
                      }
                      if (e.displacementMap) {
                        t.displacementMap.value = e.displacementMap;
                        t.displacementScale.value = e.displacementScale;
                        t.displacementBias.value = e.displacementBias;
                      }
                    })(t, r);
                  } else {
                    if (r.isMeshDepthMaterial) {
                      e(t, r);
                      (function (t, e) {
                        if (e.displacementMap) {
                          t.displacementMap.value = e.displacementMap;
                          t.displacementScale.value = e.displacementScale;
                          t.displacementBias.value = e.displacementBias;
                        }
                      })(t, r);
                    } else {
                      if (r.isMeshDistanceMaterial) {
                        e(t, r);
                        (function (t, e) {
                          if (e.displacementMap) {
                            t.displacementMap.value = e.displacementMap;
                            t.displacementScale.value = e.displacementScale;
                            t.displacementBias.value = e.displacementBias;
                          }
                          t.referencePosition.value.copy(e.referencePosition);
                          t.nearDistance.value = e.nearDistance;
                          t.farDistance.value = e.farDistance;
                        })(t, r);
                      } else {
                        if (r.isMeshNormalMaterial) {
                          e(t, r);
                          (function (t, e) {
                            if (e.bumpMap) {
                              t.bumpMap.value = e.bumpMap;
                              t.bumpScale.value = e.bumpScale;
                              if (1 === e.side) {
                                t.bumpScale.value *= -1;
                              }
                            }
                            if (e.normalMap) {
                              t.normalMap.value = e.normalMap;
                              t.normalScale.value.copy(e.normalScale);
                              if (1 === e.side) {
                                t.normalScale.value.negate();
                              }
                            }
                            if (e.displacementMap) {
                              t.displacementMap.value = e.displacementMap;
                              t.displacementScale.value = e.displacementScale;
                              t.displacementBias.value = e.displacementBias;
                            }
                          })(t, r);
                        } else {
                          if (r.isLineBasicMaterial) {
                            (function (t, e) {
                              t.diffuse.value.copy(e.color);
                              t.opacity.value = e.opacity;
                            })(t, r);
                            if (r.isLineDashedMaterial) {
                              (function (t, e) {
                                t.dashSize.value = e.dashSize;
                                t.totalSize.value = e.dashSize + e.gapSize;
                                t.scale.value = e.scale;
                              })(t, r);
                            }
                          } else {
                            if (r.isPointsMaterial) {
                              (function (t, e, n, r) {
                                var i;
                                t.diffuse.value.copy(e.color);
                                t.opacity.value = e.opacity;
                                t.size.value = e.size * n;
                                t.scale.value = 0.5 * r;
                                if (e.map) {
                                  t.map.value = e.map;
                                }
                                if (e.alphaMap) {
                                  t.alphaMap.value = e.alphaMap;
                                }
                                if (e.map) {
                                  i = e.map;
                                } else {
                                  if (e.alphaMap) {
                                    i = e.alphaMap;
                                  }
                                }
                                if (void 0 !== i) {
                                  if (!0 === i.matrixAutoUpdate) {
                                    i.updateMatrix();
                                  }
                                  t.uvTransform.value.copy(i.matrix);
                                }
                              })(t, r, i, a);
                            } else {
                              if (r.isSpriteMaterial) {
                                (function (t, e) {
                                  var n;
                                  t.diffuse.value.copy(e.color);
                                  t.opacity.value = e.opacity;
                                  t.rotation.value = e.rotation;
                                  if (e.map) {
                                    t.map.value = e.map;
                                  }
                                  if (e.alphaMap) {
                                    t.alphaMap.value = e.alphaMap;
                                  }
                                  if (e.map) {
                                    n = e.map;
                                  } else {
                                    if (e.alphaMap) {
                                      n = e.alphaMap;
                                    }
                                  }
                                  if (void 0 !== n) {
                                    if (!0 === n.matrixAutoUpdate) {
                                      n.updateMatrix();
                                    }
                                    t.uvTransform.value.copy(n.matrix);
                                  }
                                })(t, r);
                              } else {
                                if (r.isShadowMaterial) {
                                  t.color.value.copy(r.color);
                                  t.opacity.value = r.opacity;
                                } else {
                                  if (r.isShaderMaterial) {
                                    r.uniformsNeedUpdate = !1;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }
  function ra(t) {
    var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    var n = void 0 !== t.context ? t.context : null;
    var r = void 0 !== t.alpha && t.alpha;
    var i = void 0 === t.depth || t.depth;
    var a = void 0 === t.stencil || t.stencil;
    var o = void 0 !== t.antialias && t.antialias;
    var s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha;
    var l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer;
    var u = void 0 !== t.powerPreference ? t.powerPreference : "default";
    var c = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
    var h = null;
    var d = null;
    this.domElement = e;
    this.debug = {
      checkShaderErrors: !0
    };
    this.autoClear = !0;
    this.autoClearColor = !0;
    this.autoClearDepth = !0;
    this.autoClearStencil = !0;
    this.sortObjects = !0;
    this.clippingPlanes = [];
    this.localClippingEnabled = !1;
    this.gammaFactor = 2;
    this.outputEncoding = q;
    this.physicallyCorrectLights = !1;
    this.toneMapping = 0;
    this.toneMappingExposure = 1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    var f = this;
    var p = !1;
    var m = null;
    var v = 0;
    var g = 0;
    var b = null;
    var x = null;
    var S = -1;
    var E = null;
    var M = null;
    var A = new yt();
    var L = new yt();
    var C = null;
    var P = e.width;
    var R = e.height;
    var O = 1;
    var I = null;
    var D = null;
    var k = new yt(0, 0, P, R);
    var N = new yt(0, 0, P, R);
    var B = !1;
    var F = new Jn();
    var U = !1;
    var z = !1;
    var G = new Kt();
    var H = new wt();
    var j = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };
    function V() {
      return null === b ? O : 1;
    }
    var W;
    var Y;
    var X;
    var Z;
    var K;
    var J;
    var $;
    var Q;
    var tt;
    var et;
    var nt;
    var rt;
    var it;
    var at;
    var ot;
    var lt;
    var ut;
    var ct;
    var ht;
    var dt;
    var pt;
    var mt = n;
    function vt(t, n) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        var a = e.getContext(i, n);
        if (null !== a) return a;
      }
      return null;
    }
    try {
      var gt = {
        alpha: r,
        depth: i,
        stencil: a,
        antialias: o,
        premultipliedAlpha: s,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: c
      };
      e.addEventListener("webglcontextlost", Et, !1);
      e.addEventListener("webglcontextrestored", Tt, !1);
      if (null === mt) {
        var bt = ["webgl2", "webgl", "experimental-webgl"];
        if (!0 === f.isWebGL1Renderer && bt.shift(), null === (mt = vt(bt, gt))) throw vt(bt) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      if (void 0 === mt.getShaderPrecisionFormat) {
        mt.getShaderPrecisionFormat = function () {
          return {
            rangeMin: 1,
            rangeMax: 1,
            precision: 1
          };
        };
      }
    } catch (t) {
      throw console.error("THREE.WebGLRenderer: " + t.message), t;
    }
    function xt() {
      W = new cr(mt);
      if (!1 === (Y = new sr(mt, W, t)).isWebGL2) {
        W.get("WEBGL_depth_texture");
        W.get("OES_texture_float");
        W.get("OES_texture_half_float");
        W.get("OES_texture_half_float_linear");
        W.get("OES_standard_derivatives");
        W.get("OES_element_index_uint");
        W.get("OES_vertex_array_object");
        W.get("ANGLE_instanced_arrays");
      }
      W.get("OES_texture_float_linear");
      dt = new Ji(mt, W, Y);
      (X = new Zi(mt, W, Y)).scissor(L.copy(N).multiplyScalar(O).floor());
      X.viewport(A.copy(k).multiplyScalar(O).floor());
      Z = new fr(mt);
      K = new ki();
      J = new Ki(mt, W, X, K, Y, dt, Z);
      $ = new ur(f);
      Q = new Qn(mt, Y);
      pt = new ar(mt, W, Q, Y);
      tt = new hr(mt, Q, Z, pt);
      et = new gr(mt, tt, Q, Z);
      ut = new vr(mt);
      ot = new lr(K);
      nt = new Di(f, $, W, Y, pt, ot);
      rt = new na(K);
      it = new Ui(K);
      at = new Wi(W, Y);
      lt = new ir(f, $, X, et, s);
      ct = new or(mt, W, Z, Y);
      ht = new dr(mt, W, Z, Y);
      Z.programs = nt.programs;
      f.capabilities = Y;
      f.extensions = W;
      f.properties = K;
      f.renderLists = it;
      f.state = X;
      f.info = Z;
    }
    xt();
    var _t = new ea(f, mt);
    this.xr = _t;
    var St = new Xi(f, et, Y.maxTextureSize);
    function Et(t) {
      t.preventDefault();
      console.log("THREE.WebGLRenderer: Context Lost.");
      p = !0;
    }
    function Tt() {
      console.log("THREE.WebGLRenderer: Context Restored.");
      p = !1;
      xt();
    }
    function Mt(t) {
      var e = t.target;
      e.removeEventListener("dispose", Mt);
      (function (t) {
        At(t);
        K.remove(t);
      })(e);
    }
    function At(t) {
      var e = K.get(t).program;
      if (void 0 !== e) {
        nt.releaseProgram(e);
      }
    }
    this.shadowMap = St;
    this.getContext = function () {
      return mt;
    };
    this.getContextAttributes = function () {
      return mt.getContextAttributes();
    };
    this.forceContextLoss = function () {
      var t = W.get("WEBGL_lose_context");
      if (t) {
        t.loseContext();
      }
    };
    this.forceContextRestore = function () {
      var t = W.get("WEBGL_lose_context");
      if (t) {
        t.restoreContext();
      }
    };
    this.getPixelRatio = function () {
      return O;
    };
    this.setPixelRatio = function (t) {
      if (void 0 !== t) {
        O = t;
        this.setSize(P, R, !1);
      }
    };
    this.getSize = function (t) {
      if (void 0 === t) {
        console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument");
        t = new ft();
      }
      return t.set(P, R);
    };
    this.setSize = function (t, n, r) {
      if (_t.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      } else {
        P = t;
        R = n;
        e.width = Math.floor(t * O);
        e.height = Math.floor(n * O);
        if (!1 !== r) {
          e.style.width = t + "px";
          e.style.height = n + "px";
        }
        this.setViewport(0, 0, t, n);
      }
    };
    this.getDrawingBufferSize = function (t) {
      if (void 0 === t) {
        console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument");
        t = new ft();
      }
      return t.set(P * O, R * O).floor();
    };
    this.setDrawingBufferSize = function (t, n, r) {
      P = t;
      R = n;
      O = r;
      e.width = Math.floor(t * r);
      e.height = Math.floor(n * r);
      this.setViewport(0, 0, t, n);
    };
    this.getCurrentViewport = function (t) {
      if (void 0 === t) {
        console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument");
        t = new yt();
      }
      return t.copy(A);
    };
    this.getViewport = function (t) {
      return t.copy(k);
    };
    this.setViewport = function (t, e, n, r) {
      if (t.isVector4) {
        k.set(t.x, t.y, t.z, t.w);
      } else {
        k.set(t, e, n, r);
      }
      X.viewport(A.copy(k).multiplyScalar(O).floor());
    };
    this.getScissor = function (t) {
      return t.copy(N);
    };
    this.setScissor = function (t, e, n, r) {
      if (t.isVector4) {
        N.set(t.x, t.y, t.z, t.w);
      } else {
        N.set(t, e, n, r);
      }
      X.scissor(L.copy(N).multiplyScalar(O).floor());
    };
    this.getScissorTest = function () {
      return B;
    };
    this.setScissorTest = function (t) {
      X.setScissorTest(B = t);
    };
    this.setOpaqueSort = function (t) {
      I = t;
    };
    this.setTransparentSort = function (t) {
      D = t;
    };
    this.getClearColor = function () {
      return lt.getClearColor();
    };
    this.setClearColor = function () {
      lt.setClearColor.apply(lt, arguments);
    };
    this.getClearAlpha = function () {
      return lt.getClearAlpha();
    };
    this.setClearAlpha = function () {
      lt.setClearAlpha.apply(lt, arguments);
    };
    this.clear = function (t, e, n) {
      var r = 0;
      if (void 0 === t || t) {
        r |= 16384;
      }
      if (void 0 === e || e) {
        r |= 256;
      }
      if (void 0 === n || n) {
        r |= 1024;
      }
      mt.clear(r);
    };
    this.clearColor = function () {
      this.clear(!0, !1, !1);
    };
    this.clearDepth = function () {
      this.clear(!1, !0, !1);
    };
    this.clearStencil = function () {
      this.clear(!1, !1, !0);
    };
    this.dispose = function () {
      e.removeEventListener("webglcontextlost", Et, !1);
      e.removeEventListener("webglcontextrestored", Tt, !1);
      it.dispose();
      at.dispose();
      K.dispose();
      $.dispose();
      et.dispose();
      pt.dispose();
      _t.dispose();
      Ct.stop();
    };
    this.renderBufferImmediate = function (t, e) {
      pt.initAttributes();
      var n = K.get(t);
      if (t.hasPositions && !n.position) {
        n.position = mt.createBuffer();
      }
      if (t.hasNormals && !n.normal) {
        n.normal = mt.createBuffer();
      }
      if (t.hasUvs && !n.uv) {
        n.uv = mt.createBuffer();
      }
      if (t.hasColors && !n.color) {
        n.color = mt.createBuffer();
      }
      var r = e.getAttributes();
      if (t.hasPositions) {
        mt.bindBuffer(34962, n.position);
        mt.bufferData(34962, t.positionArray, 35048);
        pt.enableAttribute(r.position);
        mt.vertexAttribPointer(r.position, 3, 5126, !1, 0, 0);
      }
      if (t.hasNormals) {
        mt.bindBuffer(34962, n.normal);
        mt.bufferData(34962, t.normalArray, 35048);
        pt.enableAttribute(r.normal);
        mt.vertexAttribPointer(r.normal, 3, 5126, !1, 0, 0);
      }
      if (t.hasUvs) {
        mt.bindBuffer(34962, n.uv);
        mt.bufferData(34962, t.uvArray, 35048);
        pt.enableAttribute(r.uv);
        mt.vertexAttribPointer(r.uv, 2, 5126, !1, 0, 0);
      }
      if (t.hasColors) {
        mt.bindBuffer(34962, n.color);
        mt.bufferData(34962, t.colorArray, 35048);
        pt.enableAttribute(r.color);
        mt.vertexAttribPointer(r.color, 3, 5126, !1, 0, 0);
      }
      pt.disableUnusedAttributes();
      mt.drawArrays(4, 0, t.count);
      t.count = 0;
    };
    this.renderBufferDirect = function (t, e, n, r, i, a) {
      if (null === e) {
        e = j;
      }
      var o = i.isMesh && i.matrixWorld.determinant() < 0;
      var s = Dt(t, e, r, i);
      X.setMaterial(r, o);
      var l = n.index;
      var u = n.attributes.position;
      if (null === l) {
        if (void 0 === u || 0 === u.count) return;
      } else if (0 === l.count) return;
      var c;
      var h = 1;
      if (!0 === r.wireframe) {
        l = tt.getWireframeAttribute(n);
        h = 2;
      }
      if (r.morphTargets || r.morphNormals) {
        ut.update(i, n, r, s);
      }
      pt.setup(i, r, s, n, l);
      var d = ct;
      if (null !== l) {
        c = Q.get(l);
        (d = ht).setIndex(c);
      }
      var f = null !== l ? l.count : u.count;
      var p = n.drawRange.start * h;
      var m = n.drawRange.count * h;
      var v = null !== a ? a.start * h : 0;
      var g = null !== a ? a.count * h : 1 / 0;
      var y = Math.max(p, v);
      var b = Math.min(f, p + m, v + g) - 1;
      var x = Math.max(0, b - y + 1);
      if (0 !== x) {
        if (i.isMesh) {
          if (!0 === r.wireframe) {
            X.setLineWidth(r.wireframeLinewidth * V());
            d.setMode(1);
          } else {
            d.setMode(4);
          }
        } else if (i.isLine) {
          var _ = r.linewidth;
          if (void 0 === _) {
            _ = 1;
          }
          X.setLineWidth(_ * V());
          if (i.isLineSegments) {
            d.setMode(1);
          } else {
            if (i.isLineLoop) {
              d.setMode(2);
            } else {
              d.setMode(3);
            }
          }
        } else if (i.isPoints) {
          d.setMode(0);
        } else {
          if (i.isSprite) {
            d.setMode(4);
          }
        }
        if (i.isInstancedMesh) d.renderInstances(y, x, i.count);else if (n.isInstancedBufferGeometry) {
          var w = Math.min(n.instanceCount, n._maxInstanceCount);
          d.renderInstances(y, x, w);
        } else d.render(y, x);
      }
    };
    this.compile = function (t, e) {
      (d = at.get(t, e)).init();
      t.traverseVisible(function (t) {
        if (t.isLight && t.layers.test(e.layers)) {
          d.pushLight(t);
          if (t.castShadow) {
            d.pushShadow(t);
          }
        }
      });
      d.setupLights(e);
      var n = new WeakMap();
      t.traverse(function (e) {
        var r = e.material;
        if (r) if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
          var a = r[i];
          if (!1 === n.has(a)) {
            It(a, t, e);
            n.set(a);
          }
        } else if (!1 === n.has(r)) {
          It(r, t, e);
          n.set(r);
        }
      });
    };
    var Lt = null;
    var Ct = new $n();
    function Pt(t, e, n, r) {
      if (!1 !== t.visible) {
        if (t.layers.test(e.layers)) if (t.isGroup) n = t.renderOrder;else if (t.isLOD) {
          if (!0 === t.autoUpdate) {
            t.update(e);
          }
        } else if (t.isLight) {
          d.pushLight(t);
          if (t.castShadow) {
            d.pushShadow(t);
          }
        } else if (t.isSprite) {
          if (!t.frustumCulled || F.intersectsSprite(t)) {
            if (r) {
              H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
            }
            var i = et.update(t);
            var a = t.material;
            if (a.visible) {
              h.push(t, i, a, n, H.z, null);
            }
          }
        } else if (t.isImmediateRenderObject) {
          if (r) {
            H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
          }
          h.push(t, null, t.material, n, H.z, null);
        } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Z.render.frame && (t.skeleton.update(), t.skeleton.frame = Z.render.frame), !t.frustumCulled || F.intersectsObject(t))) {
          if (r) {
            H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
          }
          var o = et.update(t);
          var s = t.material;
          if (Array.isArray(s)) for (l = o.groups, u = 0, c = l.length, void 0; u < c; u++) {
            var l;
            var u;
            var c;
            var f = l[u];
            var p = s[f.materialIndex];
            if (p && p.visible) {
              h.push(t, o, p, n, H.z, f);
            }
          } else if (s.visible) {
            h.push(t, o, s, n, H.z, null);
          }
        }
        for (m = t.children, v = 0, g = m.length, void 0; v < g; v++) {
          var m;
          var v;
          var g;
          Pt(m[v], e, n, r);
        }
      }
    }
    function Rt(t, e, n) {
      for (r = !0 === e.isScene ? e.overrideMaterial : null, i = 0, a = t.length, void 0; i < a; i++) {
        var r;
        var i;
        var a;
        var o = t[i];
        var s = o.object;
        var l = o.geometry;
        var u = null === r ? o.material : r;
        var c = o.group;
        if (n.isArrayCamera) {
          M = n;
          for (h = n.cameras, f = 0, p = h.length, void 0; f < p; f++) {
            var h;
            var f;
            var p;
            var m = h[f];
            if (s.layers.test(m.layers)) {
              X.viewport(A.copy(m.viewport));
              d.setupLights(m);
              Ot(s, e, m, l, u, c);
            }
          }
        } else {
          M = null;
          Ot(s, e, n, l, u, c);
        }
      }
    }
    function Ot(t, e, n, r, i, a) {
      t.onBeforeRender(f, e, n, r, i, a);
      d = at.get(e, M || n);
      t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld);
      t.normalMatrix.getNormalMatrix(t.modelViewMatrix);
      if (t.isImmediateRenderObject) {
        var o = Dt(n, e, i, t);
        X.setMaterial(i), pt.reset(), function (t, e) {
          t.render(function (t) {
            f.renderBufferImmediate(t, e);
          });
        }(t, o);
      } else f.renderBufferDirect(n, e, r, i, t, a);
      t.onAfterRender(f, e, n, r, i, a);
      d = at.get(e, M || n);
    }
    function It(t, e, n) {
      if (!0 !== e.isScene) {
        e = j;
      }
      var r = K.get(t);
      var i = d.state.lights;
      var a = d.state.shadowsArray;
      var o = i.state.version;
      var s = nt.getParameters(t, i.state, a, e, n);
      var l = nt.getProgramCacheKey(s);
      var u = r.program;
      var c = !0;
      if (void 0 === u) t.addEventListener("dispose", Mt);else if (u.cacheKey !== l) At(t);else if (r.lightsStateVersion !== o) c = !1;else {
        if (void 0 !== s.shaderID) {
          var h = t.isMeshStandardMaterial ? e.environment : null;
          return void (r.envMap = $.get(t.envMap || h));
        }
        c = !1;
      }
      if (c) {
        s.uniforms = nt.getUniforms(t);
        t.onBeforeCompile(s, f);
        u = nt.acquireProgram(s, l);
        r.program = u;
        r.uniforms = s.uniforms;
        r.outputEncoding = s.outputEncoding;
      }
      var p = r.uniforms;
      if ((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) {
        r.numClippingPlanes = ot.numPlanes;
        r.numIntersection = ot.numIntersection;
        p.clippingPlanes = ot.uniform;
      }
      r.environment = t.isMeshStandardMaterial ? e.environment : null;
      r.fog = e.fog;
      r.envMap = $.get(t.envMap || r.environment);
      r.needsLights = function (t) {
        return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights;
      }(t);
      r.lightsStateVersion = o;
      if (r.needsLights) {
        p.ambientLightColor.value = i.state.ambient;
        p.lightProbe.value = i.state.probe;
        p.directionalLights.value = i.state.directional;
        p.directionalLightShadows.value = i.state.directionalShadow;
        p.spotLights.value = i.state.spot;
        p.spotLightShadows.value = i.state.spotShadow;
        p.rectAreaLights.value = i.state.rectArea;
        p.ltc_1.value = i.state.rectAreaLTC1;
        p.ltc_2.value = i.state.rectAreaLTC2;
        p.pointLights.value = i.state.point;
        p.pointLightShadows.value = i.state.pointShadow;
        p.hemisphereLights.value = i.state.hemi;
        p.directionalShadowMap.value = i.state.directionalShadowMap;
        p.directionalShadowMatrix.value = i.state.directionalShadowMatrix;
        p.spotShadowMap.value = i.state.spotShadowMap;
        p.spotShadowMatrix.value = i.state.spotShadowMatrix;
        p.pointShadowMap.value = i.state.pointShadowMap;
        p.pointShadowMatrix.value = i.state.pointShadowMatrix;
      }
      var m = r.program.getUniforms();
      var v = pi.seqWithValue(m.seq, p);
      r.uniformsList = v;
    }
    function Dt(t, e, n, r) {
      if (!0 !== e.isScene) {
        e = j;
      }
      J.resetTextureUnits();
      var i = e.fog;
      var a = n.isMeshStandardMaterial ? e.environment : null;
      var o = null === b ? f.outputEncoding : b.texture.encoding;
      var s = $.get(n.envMap || a);
      var l = K.get(n);
      var u = d.state.lights;
      if (!0 === U && (!0 === z || t !== E)) {
        var c = t === E && n.id === S;
        ot.setState(n, t, c);
      }
      if (n.version === l.__version) {
        if (n.fog && l.fog !== i || l.environment !== a || l.needsLights && l.lightsStateVersion !== u.state.version) {
          It(n, e, r);
        } else {
          if (void 0 === l.numClippingPlanes || l.numClippingPlanes === ot.numPlanes && l.numIntersection === ot.numIntersection) {
            if (l.outputEncoding !== o || l.envMap !== s) {
              It(n, e, r);
            }
          } else {
            It(n, e, r);
          }
        }
      } else {
        It(n, e, r);
        l.__version = n.version;
      }
      var h;
      var p;
      var m = !1;
      var v = !1;
      var g = !1;
      var y = l.program;
      var x = y.getUniforms();
      var w = l.uniforms;
      if (X.useProgram(y.program)) {
        m = !0;
        v = !0;
        g = !0;
      }
      if (n.id !== S) {
        S = n.id;
        v = !0;
      }
      if (m || E !== t) {
        if (x.setValue(mt, "projectionMatrix", t.projectionMatrix), Y.logarithmicDepthBuffer && x.setValue(mt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), E !== t && (E = t, v = !0, g = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
          var M = x.map.cameraPosition;
          void 0 !== M && M.setValue(mt, H.setFromMatrixPosition(t.matrixWorld));
        }
        (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && x.setValue(mt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && x.setValue(mt, "viewMatrix", t.matrixWorldInverse);
      }
      if (n.skinning) {
        x.setOptional(mt, r, "bindMatrix");
        x.setOptional(mt, r, "bindMatrixInverse");
        var A = r.skeleton;
        if (A) {
          var L = A.bones;
          if (Y.floatVertexTextures) {
            if (void 0 === A.boneTexture) {
              var C = Math.sqrt(4 * L.length);
              C = st.ceilPowerOfTwo(C);
              C = Math.max(C, 4);
              var P = new Float32Array(C * C * 4);
              P.set(A.boneMatrices);
              var I = new Xn(P, C, C, T, _);
              A.boneMatrices = P;
              A.boneTexture = I;
              A.boneTextureSize = C;
            }
            x.setValue(mt, "boneTexture", A.boneTexture, J);
            x.setValue(mt, "boneTextureSize", A.boneTextureSize);
          } else x.setOptional(mt, A, "boneMatrices");
        }
      }
      if (v || l.receiveShadow !== r.receiveShadow) {
        l.receiveShadow = r.receiveShadow;
        x.setValue(mt, "receiveShadow", r.receiveShadow);
      }
      if (v) {
        x.setValue(mt, "toneMappingExposure", f.toneMappingExposure);
        if (l.needsLights) {
          p = g;
          (h = w).ambientLightColor.needsUpdate = p;
          h.lightProbe.needsUpdate = p;
          h.directionalLights.needsUpdate = p;
          h.directionalLightShadows.needsUpdate = p;
          h.pointLights.needsUpdate = p;
          h.pointLightShadows.needsUpdate = p;
          h.spotLights.needsUpdate = p;
          h.spotLightShadows.needsUpdate = p;
          h.rectAreaLights.needsUpdate = p;
          h.hemisphereLights.needsUpdate = p;
        }
        if (i && n.fog) {
          rt.refreshFogUniforms(w, i);
        }
        rt.refreshMaterialUniforms(w, n, O, R);
        pi.upload(mt, l.uniformsList, w, J);
      }
      if (n.isShaderMaterial && !0 === n.uniformsNeedUpdate) {
        pi.upload(mt, l.uniformsList, w, J);
        n.uniformsNeedUpdate = !1;
      }
      if (n.isSpriteMaterial) {
        x.setValue(mt, "center", r.center);
      }
      x.setValue(mt, "modelViewMatrix", r.modelViewMatrix);
      x.setValue(mt, "normalMatrix", r.normalMatrix);
      x.setValue(mt, "modelMatrix", r.matrixWorld);
      return y;
    }
    Ct.setAnimationLoop(function (t) {
      if (_t.isPresenting) {
        if (Lt) {
          Lt(t);
        }
      }
    });
    if ("undefined" != typeof window) {
      Ct.setContext(window);
    }
    this.setAnimationLoop = function (t) {
      Lt = t;
      _t.setAnimationLoop(t);
      if (null === t) {
        Ct.stop();
      } else {
        Ct.start();
      }
    };
    this.render = function (t, e) {
      var n;
      var r;
      if (void 0 !== arguments[2]) {
        console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");
        n = arguments[2];
      }
      if (void 0 !== arguments[3]) {
        console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");
        r = arguments[3];
      }
      if (void 0 === e || !0 === e.isCamera) {
        if (!0 !== p) {
          pt.resetDefaultState(), S = -1, E = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === _t.enabled && !0 === _t.isPresenting && (e = _t.getCamera(e)), !0 === t.isScene && t.onBeforeRender(f, t, e, n || b), (d = at.get(t, e)).init(), G.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), F.setFromProjectionMatrix(G), z = this.localClippingEnabled, U = ot.init(this.clippingPlanes, z, e), (h = it.get(t, e)).init(), Pt(t, e, 0, f.sortObjects), h.finish(), !0 === f.sortObjects && h.sort(I, D), !0 === U && ot.beginShadows();
          var i = d.state.shadowsArray;
          St.render(i, t, e), d.setupLights(e), !0 === U && ot.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), lt.render(h, t, e, r);
          var a = h.opaque,
            o = h.transparent;
          a.length > 0 && Rt(a, t, e), o.length > 0 && Rt(o, t, e), !0 === t.isScene && t.onAfterRender(f, t, e), null !== b && (J.updateRenderTargetMipmap(b), J.updateMultisampleRenderTarget(b)), X.buffers.depth.setTest(!0), X.buffers.depth.setMask(!0), X.buffers.color.setMask(!0), X.setPolygonOffset(!1), h = null, d = null;
        }
      } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
    };
    this.setFramebuffer = function (t) {
      if (m !== t && null === b) {
        mt.bindFramebuffer(36160, t);
      }
      m = t;
    };
    this.getActiveCubeFace = function () {
      return v;
    };
    this.getActiveMipmapLevel = function () {
      return g;
    };
    this.getRenderList = function () {
      return h;
    };
    this.setRenderList = function (t) {
      h = t;
    };
    this.getRenderState = function () {
      return d;
    };
    this.setRenderState = function (t) {
      d = t;
    };
    this.getRenderTarget = function () {
      return b;
    };
    this.setRenderTarget = function (t, e, n) {
      if (void 0 === e) {
        e = 0;
      }
      if (void 0 === n) {
        n = 0;
      }
      b = t;
      v = e;
      g = n;
      if (t && void 0 === K.get(t).__webglFramebuffer) {
        J.setupRenderTarget(t);
      }
      var r = m;
      var i = !1;
      if (t) {
        var a = K.get(t).__webglFramebuffer;
        if (t.isWebGLCubeRenderTarget) {
          r = a[e];
          i = !0;
        } else {
          r = t.isWebGLMultisampleRenderTarget ? K.get(t).__webglMultisampledFramebuffer : a;
        }
        A.copy(t.viewport);
        L.copy(t.scissor);
        C = t.scissorTest;
      } else {
        A.copy(k).multiplyScalar(O).floor();
        L.copy(N).multiplyScalar(O).floor();
        C = B;
      }
      if (x !== r) {
        mt.bindFramebuffer(36160, r);
        x = r;
      }
      X.viewport(A);
      X.scissor(L);
      X.setScissorTest(C);
      if (i) {
        var o = K.get(t.texture);
        mt.framebufferTexture2D(36160, 36064, 34069 + e, o.__webglTexture, n);
      }
    };
    this.readRenderTargetPixels = function (t, e, n, r, i, a, o) {
      if (t && t.isWebGLRenderTarget) {
        var s = K.get(t).__webglFramebuffer;
        if (t.isWebGLCubeRenderTarget && void 0 !== o) {
          s = s[o];
        }
        if (s) {
          var l = !1;
          s !== x && (mt.bindFramebuffer(36160, s), l = !0);
          try {
            var u = t.texture,
              c = u.format,
              h = u.type;
            if (c !== T && dt.convert(c) !== mt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!(h === y || dt.convert(h) === mt.getParameter(35738) || h === _ && (Y.isWebGL2 || W.get("OES_texture_float") || W.get("WEBGL_color_buffer_float")) || h === w && (Y.isWebGL2 ? W.get("EXT_color_buffer_float") : W.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            36053 === mt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - r && n >= 0 && n <= t.height - i && mt.readPixels(e, n, r, i, dt.convert(c), dt.convert(h), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
          } finally {
            l && mt.bindFramebuffer(36160, x);
          }
        }
      } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
    };
    this.copyFramebufferToTexture = function (t, e, n) {
      if (void 0 === n) {
        n = 0;
      }
      var r = Math.pow(2, -n);
      var i = Math.floor(e.image.width * r);
      var a = Math.floor(e.image.height * r);
      var o = dt.convert(e.format);
      J.setTexture2D(e, 0);
      mt.copyTexImage2D(3553, n, o, t.x, t.y, i, a, 0);
      X.unbindTexture();
    };
    this.copyTextureToTexture = function (t, e, n, r) {
      if (void 0 === r) {
        r = 0;
      }
      var i = e.image.width;
      var a = e.image.height;
      var o = dt.convert(n.format);
      var s = dt.convert(n.type);
      J.setTexture2D(n, 0);
      mt.pixelStorei(37440, n.flipY);
      mt.pixelStorei(37441, n.premultiplyAlpha);
      mt.pixelStorei(3317, n.unpackAlignment);
      if (e.isDataTexture) {
        mt.texSubImage2D(3553, r, t.x, t.y, i, a, o, s, e.image.data);
      } else {
        if (e.isCompressedTexture) {
          mt.compressedTexSubImage2D(3553, r, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, o, e.mipmaps[0].data);
        } else {
          mt.texSubImage2D(3553, r, t.x, t.y, o, s, e.image);
        }
      }
      if (0 === r && n.generateMipmaps) {
        mt.generateMipmap(3553);
      }
      X.unbindTexture();
    };
    this.initTexture = function (t) {
      J.setTexture2D(t, 0);
      X.unbindTexture();
    };
    if ("undefined" != typeof __THREE_DEVTOOLS__) {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
  }
  function ia(t) {
    ra.call(this, t);
  }
  $i.prototype = Object.assign(Object.create(jn.prototype), {
    constructor: $i,
    isArrayCamera: !0
  });
  Qi.prototype = Object.assign(Object.create(_e.prototype), {
    constructor: Qi,
    isGroup: !0
  });
  Object.assign(ta.prototype, {
    constructor: ta,
    getHandSpace: function () {
      if (null === this._hand && (this._hand = new Qi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = [], this._hand.inputState = {
        pinching: !1
      }, window.XRHand)) for (var t = 0; t <= window.XRHand.LITTLE_PHALANX_TIP; t++) {
        var e = new Qi();
        e.matrixAutoUpdate = !1;
        e.visible = !1;
        this._hand.joints.push(e);
        this._hand.add(e);
      }
      return this._hand;
    },
    getTargetRaySpace: function () {
      if (null === this._targetRay) {
        this._targetRay = new Qi();
        this._targetRay.matrixAutoUpdate = !1;
        this._targetRay.visible = !1;
      }
      return this._targetRay;
    },
    getGripSpace: function () {
      if (null === this._grip) {
        this._grip = new Qi();
        this._grip.matrixAutoUpdate = !1;
        this._grip.visible = !1;
      }
      return this._grip;
    },
    dispatchEvent: function (t) {
      if (null !== this._targetRay) {
        this._targetRay.dispatchEvent(t);
      }
      if (null !== this._grip) {
        this._grip.dispatchEvent(t);
      }
      if (null !== this._hand) {
        this._hand.dispatchEvent(t);
      }
      return this;
    },
    disconnect: function (t) {
      this.dispatchEvent({
        type: "disconnected",
        data: t
      });
      if (null !== this._targetRay) {
        this._targetRay.visible = !1;
      }
      if (null !== this._grip) {
        this._grip.visible = !1;
      }
      if (null !== this._hand) {
        this._hand.visible = !1;
      }
      return this;
    },
    update: function (t, e, n) {
      var r = null;
      var i = null;
      var a = null;
      var o = this._targetRay;
      var s = this._grip;
      var l = this._hand;
      if (t) if (l && t.hand) {
        a = !0;
        for (var u = 0; u <= window.XRHand.LITTLE_PHALANX_TIP; u++) if (t.hand[u]) {
          var c = e.getJointPose(t.hand[u], n);
          var h = l.joints[u];
          if (null !== c) {
            h.matrix.fromArray(c.transform.matrix);
            h.matrix.decompose(h.position, h.rotation, h.scale);
            h.jointRadius = c.radius;
          }
          h.visible = null !== c;
          var d = l.joints[window.XRHand.INDEX_PHALANX_TIP];
          var f = l.joints[window.XRHand.THUMB_PHALANX_TIP];
          var p = d.position.distanceTo(f.position);
          if (l.inputState.pinching && p > 0.025) {
            l.inputState.pinching = !1;
            this.dispatchEvent({
              type: "pinchend",
              handedness: t.handedness,
              target: this
            });
          } else {
            if (!l.inputState.pinching && p <= 0.015) {
              l.inputState.pinching = !0;
              this.dispatchEvent({
                type: "pinchstart",
                handedness: t.handedness,
                target: this
              });
            }
          }
        }
      } else {
        if (null !== o && null !== (r = e.getPose(t.targetRaySpace, n))) {
          o.matrix.fromArray(r.transform.matrix);
          o.matrix.decompose(o.position, o.rotation, o.scale);
        }
        if (null !== s && t.gripSpace && null !== (i = e.getPose(t.gripSpace, n))) {
          s.matrix.fromArray(i.transform.matrix);
          s.matrix.decompose(s.position, s.rotation, s.scale);
        }
      }
      if (null !== o) {
        o.visible = null !== r;
      }
      if (null !== s) {
        s.visible = null !== i;
      }
      if (null !== l) {
        l.visible = null !== a;
      }
      return this;
    }
  });
  Object.assign(ea.prototype, rt.prototype);
  ia.prototype = Object.assign(Object.create(ra.prototype), {
    constructor: ia,
    isWebGL1Renderer: !0
  });
  var aa = function () {
    function t(t, e) {
      Object.defineProperty(this, "isFogExp2", {
        value: !0
      });
      this.name = "";
      this.color = new je(t);
      this.density = void 0 !== e ? e : 25e-5;
    }
    var e = t.prototype;
    e.clone = function () {
      return new t(this.color, this.density);
    };
    e.toJSON = function () {
      return {
        type: "FogExp2",
        color: this.color.getHex(),
        density: this.density
      };
    };
    return t;
  }();
  var oa = function () {
    function t(t, e, n) {
      Object.defineProperty(this, "isFog", {
        value: !0
      });
      this.name = "";
      this.color = new je(t);
      this.near = void 0 !== e ? e : 1;
      this.far = void 0 !== n ? n : 1e3;
    }
    var e = t.prototype;
    e.clone = function () {
      return new t(this.color, this.near, this.far);
    };
    e.toJSON = function () {
      return {
        type: "Fog",
        color: this.color.getHex(),
        near: this.near,
        far: this.far
      };
    };
    return t;
  }();
  var sa = function (t) {
    function e() {
      var e;
      e = t.call(this) || this;
      Object.defineProperty(ht(e), "isScene", {
        value: !0
      });
      e.type = "Scene";
      e.background = null;
      e.environment = null;
      e.fog = null;
      e.overrideMaterial = null;
      e.autoUpdate = !0;
      if ("undefined" != typeof __THREE_DEVTOOLS__) {
        __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
          detail: ht(e)
        }));
      }
      return e;
    }
    ct(e, t);
    var n = e.prototype;
    n.copy = function (e, n) {
      t.prototype.copy.call(this, e, n);
      if (null !== e.background) {
        this.background = e.background.clone();
      }
      if (null !== e.environment) {
        this.environment = e.environment.clone();
      }
      if (null !== e.fog) {
        this.fog = e.fog.clone();
      }
      if (null !== e.overrideMaterial) {
        this.overrideMaterial = e.overrideMaterial.clone();
      }
      this.autoUpdate = e.autoUpdate;
      this.matrixAutoUpdate = e.matrixAutoUpdate;
      return this;
    };
    n.toJSON = function (e) {
      var n = t.prototype.toJSON.call(this, e);
      if (null !== this.background) {
        n.object.background = this.background.toJSON(e);
      }
      if (null !== this.environment) {
        n.object.environment = this.environment.toJSON(e);
      }
      if (null !== this.fog) {
        n.object.fog = this.fog.toJSON();
      }
      return n;
    };
    return e;
  }(_e);
  function la(t, e) {
    this.array = t;
    this.stride = e;
    this.count = void 0 !== t ? t.length / e : 0;
    this.usage = tt;
    this.updateRange = {
      offset: 0,
      count: -1
    };
    this.version = 0;
    this.uuid = st.generateUUID();
  }
  Object.defineProperty(la.prototype, "needsUpdate", {
    set: function (t) {
      if (!0 === t) {
        this.version++;
      }
    }
  });
  Object.assign(la.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function () {},
    setUsage: function (t) {
      this.usage = t;
      return this;
    },
    copy: function (t) {
      this.array = new t.array.constructor(t.array);
      this.count = t.count;
      this.stride = t.stride;
      this.usage = t.usage;
      return this;
    },
    copyAt: function (t, e, n) {
      t *= this.stride;
      n *= e.stride;
      for (r = 0, i = this.stride, void 0; r < i; r++) {
        var r;
        var i;
        this.array[t + r] = e.array[n + r];
      }
      return this;
    },
    set: function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      this.array.set(t, e);
      return this;
    },
    clone: function (t) {
      if (void 0 === t.arrayBuffers) {
        t.arrayBuffers = {};
      }
      if (void 0 === this.array.buffer._uuid) {
        this.array.buffer._uuid = st.generateUUID();
      }
      if (void 0 === t.arrayBuffers[this.array.buffer._uuid]) {
        t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
      }
      var e = new la(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), this.stride);
      e.setUsage(this.usage);
      return e;
    },
    onUpload: function (t) {
      this.onUploadCallback = t;
      return this;
    },
    toJSON: function (t) {
      if (void 0 === t.arrayBuffers) {
        t.arrayBuffers = {};
      }
      if (void 0 === this.array.buffer._uuid) {
        this.array.buffer._uuid = st.generateUUID();
      }
      if (void 0 === t.arrayBuffers[this.array.buffer._uuid]) {
        t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer));
      }
      return {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      };
    }
  });
  var ua;
  var ca = new wt();
  function ha(t, e, n, r) {
    this.name = "";
    this.data = t;
    this.itemSize = e;
    this.offset = n;
    this.normalized = !0 === r;
  }
  function da(t) {
    qe.call(this);
    this.type = "SpriteMaterial";
    this.color = new je(16777215);
    this.map = null;
    this.alphaMap = null;
    this.rotation = 0;
    this.sizeAttenuation = !0;
    this.transparent = !0;
    this.setValues(t);
  }
  Object.defineProperties(ha.prototype, {
    count: {
      get: function () {
        return this.data.count;
      }
    },
    array: {
      get: function () {
        return this.data.array;
      }
    },
    needsUpdate: {
      set: function (t) {
        this.data.needsUpdate = t;
      }
    }
  });
  Object.assign(ha.prototype, {
    isInterleavedBufferAttribute: !0,
    applyMatrix4: function (t) {
      for (e = 0, n = this.data.count, void 0; e < n; e++) {
        var e;
        var n;
        ca.x = this.getX(e);
        ca.y = this.getY(e);
        ca.z = this.getZ(e);
        ca.applyMatrix4(t);
        this.setXYZ(e, ca.x, ca.y, ca.z);
      }
      return this;
    },
    setX: function (t, e) {
      this.data.array[t * this.data.stride + this.offset] = e;
      return this;
    },
    setY: function (t, e) {
      this.data.array[t * this.data.stride + this.offset + 1] = e;
      return this;
    },
    setZ: function (t, e) {
      this.data.array[t * this.data.stride + this.offset + 2] = e;
      return this;
    },
    setW: function (t, e) {
      this.data.array[t * this.data.stride + this.offset + 3] = e;
      return this;
    },
    getX: function (t) {
      return this.data.array[t * this.data.stride + this.offset];
    },
    getY: function (t) {
      return this.data.array[t * this.data.stride + this.offset + 1];
    },
    getZ: function (t) {
      return this.data.array[t * this.data.stride + this.offset + 2];
    },
    getW: function (t) {
      return this.data.array[t * this.data.stride + this.offset + 3];
    },
    setXY: function (t, e, n) {
      t = t * this.data.stride + this.offset;
      this.data.array[t + 0] = e;
      this.data.array[t + 1] = n;
      return this;
    },
    setXYZ: function (t, e, n, r) {
      t = t * this.data.stride + this.offset;
      this.data.array[t + 0] = e;
      this.data.array[t + 1] = n;
      this.data.array[t + 2] = r;
      return this;
    },
    setXYZW: function (t, e, n, r, i) {
      t = t * this.data.stride + this.offset;
      this.data.array[t + 0] = e;
      this.data.array[t + 1] = n;
      this.data.array[t + 2] = r;
      this.data.array[t + 3] = i;
      return this;
    },
    clone: function (t) {
      if (void 0 === t) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
        for (e = [], n = 0, void 0; n < this.count; n++) {
          var e;
          var n;
          for (r = n * this.data.stride + this.offset, i = 0, void 0; i < this.itemSize; i++) {
            var r;
            var i;
            e.push(this.data.array[r + i]);
          }
        }
        return new Ke(new this.array.constructor(e), this.itemSize, this.normalized);
      }
      if (void 0 === t.interleavedBuffers) {
        t.interleavedBuffers = {};
      }
      if (void 0 === t.interleavedBuffers[this.data.uuid]) {
        t.interleavedBuffers[this.data.uuid] = this.data.clone(t);
      }
      return new ha(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    },
    toJSON: function (t) {
      if (void 0 === t) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
        for (e = [], n = 0, void 0; n < this.count; n++) {
          var e;
          var n;
          for (r = n * this.data.stride + this.offset, i = 0, void 0; i < this.itemSize; i++) {
            var r;
            var i;
            e.push(this.data.array[r + i]);
          }
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: e,
          normalized: this.normalized
        };
      }
      if (void 0 === t.interleavedBuffers) {
        t.interleavedBuffers = {};
      }
      if (void 0 === t.interleavedBuffers[this.data.uuid]) {
        t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t);
      }
      return {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
    }
  });
  da.prototype = Object.create(qe.prototype);
  da.prototype.constructor = da;
  da.prototype.isSpriteMaterial = !0;
  da.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.color.copy(t.color);
    this.map = t.map;
    this.alphaMap = t.alphaMap;
    this.rotation = t.rotation;
    this.sizeAttenuation = t.sizeAttenuation;
    return this;
  };
  var fa = new wt();
  var pa = new wt();
  var ma = new wt();
  var va = new ft();
  var ga = new ft();
  var ya = new Kt();
  var ba = new wt();
  var xa = new wt();
  var _a = new wt();
  var wa = new ft();
  var Sa = new ft();
  var Ea = new ft();
  function Ta(t) {
    _e.call(this);
    this.type = "Sprite";
    if (void 0 === ua) {
      ua = new vn();
      var e = new la(new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), 5);
      ua.setIndex([0, 1, 2, 0, 2, 3]), ua.setAttribute("position", new ha(e, 3, 0, !1)), ua.setAttribute("uv", new ha(e, 2, 3, !1));
    }
    this.geometry = ua;
    this.material = void 0 !== t ? t : new da();
    this.center = new ft(0.5, 0.5);
  }
  function Ma(t, e, n, r, i, a) {
    va.subVectors(t, n).addScalar(0.5).multiply(r);
    if (void 0 !== i) {
      ga.x = a * va.x - i * va.y;
      ga.y = i * va.x + a * va.y;
    } else {
      ga.copy(va);
    }
    t.copy(e);
    t.x += ga.x;
    t.y += ga.y;
    t.applyMatrix4(ya);
  }
  Ta.prototype = Object.assign(Object.create(_e.prototype), {
    constructor: Ta,
    isSprite: !0,
    raycast: function (t, e) {
      if (null === t.camera) {
        console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');
      }
      pa.setFromMatrixScale(this.matrixWorld);
      ya.copy(t.camera.matrixWorld);
      this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld);
      ma.setFromMatrixPosition(this.modelViewMatrix);
      if (t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation) {
        pa.multiplyScalar(-ma.z);
      }
      var n;
      var r;
      var i = this.material.rotation;
      if (0 !== i) {
        r = Math.cos(i);
        n = Math.sin(i);
      }
      var a = this.center;
      Ma(ba.set(-0.5, -0.5, 0), ma, a, pa, n, r);
      Ma(xa.set(0.5, -0.5, 0), ma, a, pa, n, r);
      Ma(_a.set(0.5, 0.5, 0), ma, a, pa, n, r);
      wa.set(0, 0);
      Sa.set(1, 0);
      Ea.set(1, 1);
      var o = t.ray.intersectTriangle(ba, xa, _a, !1, fa);
      if (null !== o || (Ma(xa.set(-0.5, 0.5, 0), ma, a, pa, n, r), Sa.set(0, 1), null !== (o = t.ray.intersectTriangle(ba, _a, xa, !1, fa)))) {
        var s = t.ray.origin.distanceTo(fa);
        if (s < t.near || s > t.far) {
          e.push({
            distance: s,
            point: fa.clone(),
            uv: Ne.getUV(fa, ba, xa, _a, wa, Sa, Ea, new ft()),
            face: null,
            object: this
          });
        }
      }
    },
    copy: function (t) {
      _e.prototype.copy.call(this, t);
      if (void 0 !== t.center) {
        this.center.copy(t.center);
      }
      this.material = t.material;
      return this;
    }
  });
  var Aa;
  var La;
  var Ca;
  var Pa;
  var Ra;
  var Oa = new wt();
  var Ia = new wt();
  function Da() {
    _e.call(this);
    this._currentLevel = 0;
    this.type = "LOD";
    Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      }
    });
    this.autoUpdate = !0;
  }
  function ka(t, e) {
    if (t && t.isGeometry) {
      console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
    Dn.call(this, t, e);
    this.type = "SkinnedMesh";
    this.bindMode = "attached";
    this.bindMatrix = new Kt();
    this.bindMatrixInverse = new Kt();
  }
  Da.prototype = Object.assign(Object.create(_e.prototype), {
    constructor: Da,
    isLOD: !0,
    copy: function (t) {
      _e.prototype.copy.call(this, t, !1);
      for (e = t.levels, n = 0, r = e.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        var i = e[n];
        this.addLevel(i.object.clone(), i.distance);
      }
      this.autoUpdate = t.autoUpdate;
      return this;
    },
    addLevel: function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      e = Math.abs(e);
      var n;
      var r = this.levels;
      for (n = 0; n < r.length && !(e < r[n].distance); n++);
      r.splice(n, 0, {
        distance: e,
        object: t
      });
      this.add(t);
      return this;
    },
    getCurrentLevel: function () {
      return this._currentLevel;
    },
    getObjectForDistance: function (t) {
      var e = this.levels;
      if (e.length > 0) {
        var n;
        var r;
        for (n = 1, r = e.length; n < r && !(t < e[n].distance); n++);
        return e[n - 1].object;
      }
      return null;
    },
    raycast: function (t, e) {
      if (this.levels.length > 0) {
        Oa.setFromMatrixPosition(this.matrixWorld);
        var n = t.ray.origin.distanceTo(Oa);
        this.getObjectForDistance(n).raycast(t, e);
      }
    },
    update: function (t) {
      var e = this.levels;
      if (e.length > 1) {
        Oa.setFromMatrixPosition(t.matrixWorld);
        Ia.setFromMatrixPosition(this.matrixWorld);
        var n;
        var r;
        var i = Oa.distanceTo(Ia) / t.zoom;
        for (e[0].object.visible = !0, n = 1, r = e.length; n < r && i >= e[n].distance; n++) {
          e[n - 1].object.visible = !1;
          e[n].object.visible = !0;
        }
        for (this._currentLevel = n - 1; n < r; n++) e[n].object.visible = !1;
      }
    },
    toJSON: function (t) {
      var e = _e.prototype.toJSON.call(this, t);
      if (!1 === this.autoUpdate) {
        e.object.autoUpdate = !1;
      }
      e.object.levels = [];
      for (n = this.levels, r = 0, i = n.length, void 0; r < i; r++) {
        var n;
        var r;
        var i;
        var a = n[r];
        e.object.levels.push({
          object: a.object.uuid,
          distance: a.distance
        });
      }
      return e;
    }
  });
  ka.prototype = Object.assign(Object.create(Dn.prototype), {
    constructor: ka,
    isSkinnedMesh: !0,
    copy: function (t) {
      Dn.prototype.copy.call(this, t);
      this.bindMode = t.bindMode;
      this.bindMatrix.copy(t.bindMatrix);
      this.bindMatrixInverse.copy(t.bindMatrixInverse);
      this.skeleton = t.skeleton;
      return this;
    },
    bind: function (t, e) {
      this.skeleton = t;
      if (void 0 === e) {
        this.updateMatrixWorld(!0);
        this.skeleton.calculateInverses();
        e = this.matrixWorld;
      }
      this.bindMatrix.copy(e);
      this.bindMatrixInverse.getInverse(e);
    },
    pose: function () {
      this.skeleton.pose();
    },
    normalizeSkinWeights: function () {
      for (t = new yt(), e = this.geometry.attributes.skinWeight, n = 0, r = e.count, void 0; n < r; n++) {
        var t;
        var e;
        var n;
        var r;
        t.x = e.getX(n);
        t.y = e.getY(n);
        t.z = e.getZ(n);
        t.w = e.getW(n);
        var i = 1 / t.manhattanLength();
        if (i !== 1 / 0) {
          t.multiplyScalar(i);
        } else {
          t.set(1, 0, 0, 0);
        }
        e.setXYZW(n, t.x, t.y, t.z, t.w);
      }
    },
    updateMatrixWorld: function (t) {
      Dn.prototype.updateMatrixWorld.call(this, t);
      if ("attached" === this.bindMode) {
        this.bindMatrixInverse.getInverse(this.matrixWorld);
      } else {
        if ("detached" === this.bindMode) {
          this.bindMatrixInverse.getInverse(this.bindMatrix);
        } else {
          console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
      }
    },
    boneTransform: (Aa = new wt(), La = new yt(), Ca = new yt(), Pa = new wt(), Ra = new Kt(), function (t, e) {
      var n = this.skeleton;
      var r = this.geometry;
      La.fromBufferAttribute(r.attributes.skinIndex, t);
      Ca.fromBufferAttribute(r.attributes.skinWeight, t);
      Aa.fromBufferAttribute(r.attributes.position, t).applyMatrix4(this.bindMatrix);
      e.set(0, 0, 0);
      for (var i = 0; i < 4; i++) {
        var a = Ca.getComponent(i);
        if (0 !== a) {
          var o = La.getComponent(i);
          Ra.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]);
          e.addScaledVector(Pa.copy(Aa).applyMatrix4(Ra), a);
        }
      }
      return e.applyMatrix4(this.bindMatrixInverse);
    })
  });
  var Na = new Kt();
  var Ba = new Kt();
  function Fa(t, e) {
    t = t || [];
    this.bones = t.slice(0);
    this.boneMatrices = new Float32Array(16 * this.bones.length);
    this.frame = -1;
    if (void 0 === e) this.calculateInverses();else if (this.bones.length === e.length) this.boneInverses = e.slice(0);else {
      console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
      for (var n = 0, r = this.bones.length; n < r; n++) this.boneInverses.push(new Kt());
    }
  }
  function Ua() {
    _e.call(this);
    this.type = "Bone";
  }
  Object.assign(Fa.prototype, {
    calculateInverses: function () {
      this.boneInverses = [];
      for (t = 0, e = this.bones.length, void 0; t < e; t++) {
        var t;
        var e;
        var n = new Kt();
        if (this.bones[t]) {
          n.getInverse(this.bones[t].matrixWorld);
        }
        this.boneInverses.push(n);
      }
    },
    pose: function () {
      for (t = 0, e = this.bones.length, void 0; t < e; t++) {
        var t;
        var e;
        var n = this.bones[t];
        if (n) {
          n.matrixWorld.getInverse(this.boneInverses[t]);
        }
      }
      for (r = 0, i = this.bones.length, void 0; r < i; r++) {
        var r;
        var i;
        var a = this.bones[r];
        if (a) {
          if (a.parent && a.parent.isBone) {
            a.matrix.getInverse(a.parent.matrixWorld);
            a.matrix.multiply(a.matrixWorld);
          } else {
            a.matrix.copy(a.matrixWorld);
          }
          a.matrix.decompose(a.position, a.quaternion, a.scale);
        }
      }
    },
    update: function () {
      for (t = this.bones, e = this.boneInverses, n = this.boneMatrices, r = this.boneTexture, i = 0, a = t.length, void 0; i < a; i++) {
        var t;
        var e;
        var n;
        var r;
        var i;
        var a;
        var o = t[i] ? t[i].matrixWorld : Ba;
        Na.multiplyMatrices(o, e[i]);
        Na.toArray(n, 16 * i);
      }
      if (void 0 !== r) {
        r.needsUpdate = !0;
      }
    },
    clone: function () {
      return new Fa(this.bones, this.boneInverses);
    },
    getBoneByName: function (t) {
      for (e = 0, n = this.bones.length, void 0; e < n; e++) {
        var e;
        var n;
        var r = this.bones[e];
        if (r.name === t) return r;
      }
    },
    dispose: function () {
      if (this.boneTexture) {
        this.boneTexture.dispose();
        this.boneTexture = void 0;
      }
    }
  });
  Ua.prototype = Object.assign(Object.create(_e.prototype), {
    constructor: Ua,
    isBone: !0
  });
  var za = new Kt();
  var Ga = new Kt();
  var Ha = [];
  var ja = new Dn();
  function Va(t, e, n) {
    Dn.call(this, t, e);
    this.instanceMatrix = new Ke(new Float32Array(16 * n), 16);
    this.instanceColor = null;
    this.count = n;
    this.frustumCulled = !1;
  }
  function Wa(t) {
    qe.call(this);
    this.type = "LineBasicMaterial";
    this.color = new je(16777215);
    this.linewidth = 1;
    this.linecap = "round";
    this.linejoin = "round";
    this.morphTargets = !1;
    this.setValues(t);
  }
  Va.prototype = Object.assign(Object.create(Dn.prototype), {
    constructor: Va,
    isInstancedMesh: !0,
    copy: function (t) {
      Dn.prototype.copy.call(this, t);
      this.instanceMatrix.copy(t.instanceMatrix);
      this.count = t.count;
      return this;
    },
    setColorAt: function (t, e) {
      if (null === this.instanceColor) {
        this.instanceColor = new Ke(new Float32Array(3 * this.count), 3);
      }
      e.toArray(this.instanceColor.array, 3 * t);
    },
    getMatrixAt: function (t, e) {
      e.fromArray(this.instanceMatrix.array, 16 * t);
    },
    raycast: function (t, e) {
      var n = this.matrixWorld;
      var r = this.count;
      ja.geometry = this.geometry;
      ja.material = this.material;
      if (void 0 !== ja.material) for (var i = 0; i < r; i++) {
        this.getMatrixAt(i, za), Ga.multiplyMatrices(n, za), ja.matrixWorld = Ga, ja.raycast(t, Ha);
        for (var a = 0, o = Ha.length; a < o; a++) {
          var s = Ha[a];
          s.instanceId = i, s.object = this, e.push(s);
        }
        Ha.length = 0;
      }
    },
    setMatrixAt: function (t, e) {
      e.toArray(this.instanceMatrix.array, 16 * t);
    },
    updateMorphTargets: function () {}
  });
  Wa.prototype = Object.create(qe.prototype);
  Wa.prototype.constructor = Wa;
  Wa.prototype.isLineBasicMaterial = !0;
  Wa.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.color.copy(t.color);
    this.linewidth = t.linewidth;
    this.linecap = t.linecap;
    this.linejoin = t.linejoin;
    this.morphTargets = t.morphTargets;
    return this;
  };
  var qa = new wt();
  var Ya = new wt();
  var Xa = new Kt();
  var Za = new Zt();
  var Ka = new Gt();
  function Ja(t, e, n) {
    if (1 === n) {
      console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");
    }
    _e.call(this);
    this.type = "Line";
    this.geometry = void 0 !== t ? t : new vn();
    this.material = void 0 !== e ? e : new Wa();
    this.updateMorphTargets();
  }
  Ja.prototype = Object.assign(Object.create(_e.prototype), {
    constructor: Ja,
    isLine: !0,
    copy: function (t) {
      _e.prototype.copy.call(this, t);
      this.material = t.material;
      this.geometry = t.geometry;
      return this;
    },
    computeLineDistances: function () {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        if (null === t.index) {
          for (e = t.attributes.position, n = [0], r = 1, i = e.count, void 0; r < i; r++) {
            var e;
            var n;
            var r;
            var i;
            qa.fromBufferAttribute(e, r - 1);
            Ya.fromBufferAttribute(e, r);
            n[r] = n[r - 1];
            n[r] += qa.distanceTo(Ya);
          }
          t.setAttribute("lineDistance", new an(n, 1));
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      } else if (t.isGeometry) {
        var a = t.vertices;
        var o = t.lineDistances;
        o[0] = 0;
        for (s = 1, l = a.length, void 0; s < l; s++) {
          var s;
          var l;
          o[s] = o[s - 1];
          o[s] += a[s - 1].distanceTo(a[s]);
        }
      }
      return this;
    },
    raycast: function (t, e) {
      var n = this.geometry;
      var r = this.matrixWorld;
      var i = t.params.Line.threshold;
      if (null === n.boundingSphere) {
        n.computeBoundingSphere();
      }
      Ka.copy(n.boundingSphere);
      Ka.applyMatrix4(r);
      Ka.radius += i;
      if (!1 !== t.ray.intersectsSphere(Ka)) {
        Xa.getInverse(r), Za.copy(t.ray).applyMatrix4(Xa);
        var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          o = a * a,
          s = new wt(),
          l = new wt(),
          u = new wt(),
          c = new wt(),
          h = this.isLineSegments ? 2 : 1;
        if (n.isBufferGeometry) {
          var d = n.index,
            f = n.attributes.position;
          if (null !== d) for (var p = d.array, m = 0, v = p.length - 1; m < v; m += h) {
            var g = p[m],
              y = p[m + 1];
            if (s.fromBufferAttribute(f, g), l.fromBufferAttribute(f, y), !(Za.distanceSqToSegment(s, l, c, u) > o)) {
              c.applyMatrix4(this.matrixWorld);
              var b = t.ray.origin.distanceTo(c);
              b < t.near || b > t.far || e.push({
                distance: b,
                point: u.clone().applyMatrix4(this.matrixWorld),
                index: m,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          } else for (var x = 0, _ = f.count - 1; x < _; x += h) if (s.fromBufferAttribute(f, x), l.fromBufferAttribute(f, x + 1), !(Za.distanceSqToSegment(s, l, c, u) > o)) {
            c.applyMatrix4(this.matrixWorld);
            var w = t.ray.origin.distanceTo(c);
            w < t.near || w > t.far || e.push({
              distance: w,
              point: u.clone().applyMatrix4(this.matrixWorld),
              index: x,
              face: null,
              faceIndex: null,
              object: this
            });
          }
        } else if (n.isGeometry) for (var S = n.vertices, E = S.length, T = 0; T < E - 1; T += h) if (!(Za.distanceSqToSegment(S[T], S[T + 1], c, u) > o)) {
          c.applyMatrix4(this.matrixWorld);
          var M = t.ray.origin.distanceTo(c);
          M < t.near || M > t.far || e.push({
            distance: M,
            point: u.clone().applyMatrix4(this.matrixWorld),
            index: T,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      }
    },
    updateMorphTargets: function () {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        var e = t.morphAttributes;
        var n = Object.keys(e);
        if (n.length > 0) {
          var r = e[n[0]];
          if (void 0 !== r) {
            this.morphTargetInfluences = [];
            this.morphTargetDictionary = {};
            for (i = 0, a = r.length, void 0; i < a; i++) {
              var i;
              var a;
              var o = r[i].name || String(i);
              this.morphTargetInfluences.push(0);
              this.morphTargetDictionary[o] = i;
            }
          }
        }
      } else {
        var s = t.morphTargets;
        if (void 0 !== s && s.length > 0) {
          console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
      }
    }
  });
  var $a = new wt();
  var Qa = new wt();
  function to(t, e) {
    Ja.call(this, t, e);
    this.type = "LineSegments";
  }
  function eo(t, e) {
    Ja.call(this, t, e);
    this.type = "LineLoop";
  }
  function no(t) {
    qe.call(this);
    this.type = "PointsMaterial";
    this.color = new je(16777215);
    this.map = null;
    this.alphaMap = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.morphTargets = !1;
    this.setValues(t);
  }
  to.prototype = Object.assign(Object.create(Ja.prototype), {
    constructor: to,
    isLineSegments: !0,
    computeLineDistances: function () {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        if (null === t.index) {
          for (e = t.attributes.position, n = [], r = 0, i = e.count, void 0; r < i; r += 2) {
            var e;
            var n;
            var r;
            var i;
            $a.fromBufferAttribute(e, r);
            Qa.fromBufferAttribute(e, r + 1);
            n[r] = 0 === r ? 0 : n[r - 1];
            n[r + 1] = n[r] + $a.distanceTo(Qa);
          }
          t.setAttribute("lineDistance", new an(n, 1));
        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      } else if (t.isGeometry) for (a = t.vertices, o = t.lineDistances, s = 0, l = a.length, void 0; s < l; s += 2) {
        var a;
        var o;
        var s;
        var l;
        $a.copy(a[s]);
        Qa.copy(a[s + 1]);
        o[s] = 0 === s ? 0 : o[s - 1];
        o[s + 1] = o[s] + $a.distanceTo(Qa);
      }
      return this;
    }
  });
  eo.prototype = Object.assign(Object.create(Ja.prototype), {
    constructor: eo,
    isLineLoop: !0
  });
  no.prototype = Object.create(qe.prototype);
  no.prototype.constructor = no;
  no.prototype.isPointsMaterial = !0;
  no.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.color.copy(t.color);
    this.map = t.map;
    this.alphaMap = t.alphaMap;
    this.size = t.size;
    this.sizeAttenuation = t.sizeAttenuation;
    this.morphTargets = t.morphTargets;
    return this;
  };
  var ro = new Kt();
  var io = new Zt();
  var ao = new Gt();
  var oo = new wt();
  function so(t, e) {
    _e.call(this);
    this.type = "Points";
    this.geometry = void 0 !== t ? t : new vn();
    this.material = void 0 !== e ? e : new no();
    this.updateMorphTargets();
  }
  function lo(t, e, n, r, i, a, o) {
    var s = io.distanceSqToPoint(t);
    if (s < n) {
      var l = new wt();
      io.closestPointToPoint(t, l);
      l.applyMatrix4(r);
      var u = i.ray.origin.distanceTo(l);
      if (u < i.near || u > i.far) return;
      a.push({
        distance: u,
        distanceToRay: Math.sqrt(s),
        point: l,
        index: e,
        face: null,
        object: o
      });
    }
  }
  function uo(t, e, n, r, i, a, o, s, l) {
    gt.call(this, t, e, n, r, i, a, o, s, l);
    this.format = void 0 !== o ? o : E;
    this.minFilter = void 0 !== a ? a : m;
    this.magFilter = void 0 !== i ? i : m;
    this.generateMipmaps = !1;
    var u = this;
    if ("requestVideoFrameCallback" in t) {
      t.requestVideoFrameCallback(function e() {
        u.needsUpdate = !0;
        t.requestVideoFrameCallback(e);
      });
    }
  }
  function co(t, e, n, r, i, a, o, s, l, u, c, h) {
    gt.call(this, null, a, o, s, l, u, r, i, c, h);
    this.image = {
      width: e,
      height: n
    };
    this.mipmaps = t;
    this.flipY = !1;
    this.generateMipmaps = !1;
  }
  function ho(t, e, n, r, i, a, o, s, l) {
    gt.call(this, t, e, n, r, i, a, o, s, l);
    this.needsUpdate = !0;
  }
  function fo(t, e, n, r, i, a, o, s, l, u) {
    if ((u = void 0 !== u ? u : M) !== M && u !== A) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    if (void 0 === n && u === M) {
      n = b;
    }
    if (void 0 === n && u === A) {
      n = S;
    }
    gt.call(this, null, r, i, a, o, s, u, n, l);
    this.image = {
      width: t,
      height: e
    };
    this.magFilter = void 0 !== o ? o : d;
    this.minFilter = void 0 !== s ? s : d;
    this.flipY = !1;
    this.generateMipmaps = !1;
  }
  so.prototype = Object.assign(Object.create(_e.prototype), {
    constructor: so,
    isPoints: !0,
    copy: function (t) {
      _e.prototype.copy.call(this, t);
      this.material = t.material;
      this.geometry = t.geometry;
      return this;
    },
    raycast: function (t, e) {
      var n = this.geometry;
      var r = this.matrixWorld;
      var i = t.params.Points.threshold;
      if (null === n.boundingSphere) {
        n.computeBoundingSphere();
      }
      ao.copy(n.boundingSphere);
      ao.applyMatrix4(r);
      ao.radius += i;
      if (!1 !== t.ray.intersectsSphere(ao)) {
        ro.getInverse(r), io.copy(t.ray).applyMatrix4(ro);
        var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          o = a * a;
        if (n.isBufferGeometry) {
          var s = n.index,
            l = n.attributes.position;
          if (null !== s) for (var u = s.array, c = 0, h = u.length; c < h; c++) {
            var d = u[c];
            oo.fromBufferAttribute(l, d), lo(oo, d, o, r, t, e, this);
          } else for (var f = 0, p = l.count; f < p; f++) oo.fromBufferAttribute(l, f), lo(oo, f, o, r, t, e, this);
        } else for (var m = n.vertices, v = 0, g = m.length; v < g; v++) lo(m[v], v, o, r, t, e, this);
      }
    },
    updateMorphTargets: function () {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        var e = t.morphAttributes;
        var n = Object.keys(e);
        if (n.length > 0) {
          var r = e[n[0]];
          if (void 0 !== r) {
            this.morphTargetInfluences = [];
            this.morphTargetDictionary = {};
            for (i = 0, a = r.length, void 0; i < a; i++) {
              var i;
              var a;
              var o = r[i].name || String(i);
              this.morphTargetInfluences.push(0);
              this.morphTargetDictionary[o] = i;
            }
          }
        }
      } else {
        var s = t.morphTargets;
        if (void 0 !== s && s.length > 0) {
          console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
      }
    }
  });
  uo.prototype = Object.assign(Object.create(gt.prototype), {
    constructor: uo,
    clone: function () {
      return new this.constructor(this.image).copy(this);
    },
    isVideoTexture: !0,
    update: function () {
      var t = this.image;
      if (0 == "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA) {
        this.needsUpdate = !0;
      }
    }
  });
  co.prototype = Object.create(gt.prototype);
  co.prototype.constructor = co;
  co.prototype.isCompressedTexture = !0;
  ho.prototype = Object.create(gt.prototype);
  ho.prototype.constructor = ho;
  ho.prototype.isCanvasTexture = !0;
  fo.prototype = Object.create(gt.prototype);
  fo.prototype.constructor = fo;
  fo.prototype.isDepthTexture = !0;
  var po = 0;
  var mo = new Kt();
  var vo = new _e();
  var go = new wt();
  function yo() {
    Object.defineProperty(this, "id", {
      value: po += 2
    });
    this.uuid = st.generateUUID();
    this.name = "";
    this.type = "Geometry";
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [[]];
    this.morphTargets = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.elementsNeedUpdate = !1;
    this.verticesNeedUpdate = !1;
    this.uvsNeedUpdate = !1;
    this.normalsNeedUpdate = !1;
    this.colorsNeedUpdate = !1;
    this.lineDistancesNeedUpdate = !1;
    this.groupsNeedUpdate = !1;
  }
  yo.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: yo,
    isGeometry: !0,
    applyMatrix4: function (t) {
      for (e = new pt().getNormalMatrix(t), n = 0, r = this.vertices.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        this.vertices[n].applyMatrix4(t);
      }
      for (i = 0, a = this.faces.length, void 0; i < a; i++) {
        var i;
        var a;
        var o = this.faces[i];
        o.normal.applyMatrix3(e).normalize();
        for (s = 0, l = o.vertexNormals.length, void 0; s < l; s++) {
          var s;
          var l;
          o.vertexNormals[s].applyMatrix3(e).normalize();
        }
      }
      if (null !== this.boundingBox) {
        this.computeBoundingBox();
      }
      if (null !== this.boundingSphere) {
        this.computeBoundingSphere();
      }
      this.verticesNeedUpdate = !0;
      this.normalsNeedUpdate = !0;
      return this;
    },
    rotateX: function (t) {
      mo.makeRotationX(t);
      this.applyMatrix4(mo);
      return this;
    },
    rotateY: function (t) {
      mo.makeRotationY(t);
      this.applyMatrix4(mo);
      return this;
    },
    rotateZ: function (t) {
      mo.makeRotationZ(t);
      this.applyMatrix4(mo);
      return this;
    },
    translate: function (t, e, n) {
      mo.makeTranslation(t, e, n);
      this.applyMatrix4(mo);
      return this;
    },
    scale: function (t, e, n) {
      mo.makeScale(t, e, n);
      this.applyMatrix4(mo);
      return this;
    },
    lookAt: function (t) {
      vo.lookAt(t);
      vo.updateMatrix();
      this.applyMatrix4(vo.matrix);
      return this;
    },
    fromBufferGeometry: function (t) {
      var e = this;
      var n = null !== t.index ? t.index : void 0;
      var r = t.attributes;
      if (void 0 === r.position) {
        console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.");
        return this;
      }
      var i = r.position;
      var a = r.normal;
      var o = r.color;
      var s = r.uv;
      var l = r.uv2;
      if (void 0 !== l) {
        this.faceVertexUvs[1] = [];
      }
      for (var u = 0; u < i.count; u++) {
        e.vertices.push(new wt().fromBufferAttribute(i, u));
        if (void 0 !== o) {
          e.colors.push(new je().fromBufferAttribute(o, u));
        }
      }
      function c(t, n, r, i) {
        var u = void 0 === o ? [] : [e.colors[t].clone(), e.colors[n].clone(), e.colors[r].clone()];
        var c = void 0 === a ? [] : [new wt().fromBufferAttribute(a, t), new wt().fromBufferAttribute(a, n), new wt().fromBufferAttribute(a, r)];
        var h = new Ve(t, n, r, c, u, i);
        e.faces.push(h);
        if (void 0 !== s) {
          e.faceVertexUvs[0].push([new ft().fromBufferAttribute(s, t), new ft().fromBufferAttribute(s, n), new ft().fromBufferAttribute(s, r)]);
        }
        if (void 0 !== l) {
          e.faceVertexUvs[1].push([new ft().fromBufferAttribute(l, t), new ft().fromBufferAttribute(l, n), new ft().fromBufferAttribute(l, r)]);
        }
      }
      var h = t.groups;
      if (h.length > 0) for (var d = 0; d < h.length; d++) for (f = h[d], p = f.start, m = p, v = p + f.count, void 0; m < v; m += 3) {
        var f;
        var p;
        var m;
        var v;
        if (void 0 !== n) {
          c(n.getX(m), n.getX(m + 1), n.getX(m + 2), f.materialIndex);
        } else {
          c(m, m + 1, m + 2, f.materialIndex);
        }
      } else if (void 0 !== n) for (var g = 0; g < n.count; g += 3) c(n.getX(g), n.getX(g + 1), n.getX(g + 2));else for (var y = 0; y < i.count; y += 3) c(y, y + 1, y + 2);
      this.computeFaceNormals();
      if (null !== t.boundingBox) {
        this.boundingBox = t.boundingBox.clone();
      }
      if (null !== t.boundingSphere) {
        this.boundingSphere = t.boundingSphere.clone();
      }
      return this;
    },
    center: function () {
      this.computeBoundingBox();
      this.boundingBox.getCenter(go).negate();
      this.translate(go.x, go.y, go.z);
      return this;
    },
    normalize: function () {
      this.computeBoundingSphere();
      var t = this.boundingSphere.center;
      var e = this.boundingSphere.radius;
      var n = 0 === e ? 1 : 1 / e;
      var r = new Kt();
      r.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1);
      this.applyMatrix4(r);
      return this;
    },
    computeFaceNormals: function () {
      for (t = new wt(), e = new wt(), n = 0, r = this.faces.length, void 0; n < r; n++) {
        var t;
        var e;
        var n;
        var r;
        var i = this.faces[n];
        var a = this.vertices[i.a];
        var o = this.vertices[i.b];
        var s = this.vertices[i.c];
        t.subVectors(s, o);
        e.subVectors(a, o);
        t.cross(e);
        t.normalize();
        i.normal.copy(t);
      }
    },
    computeVertexNormals: function (t) {
      if (void 0 === t) {
        t = !0;
      }
      for (e = new Array(this.vertices.length), n = 0, r = this.vertices.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        e[n] = new wt();
      }
      if (t) for (i = new wt(), a = new wt(), o = 0, s = this.faces.length, void 0; o < s; o++) {
        var i;
        var a;
        var o;
        var s;
        var l = this.faces[o];
        var u = this.vertices[l.a];
        var c = this.vertices[l.b];
        var h = this.vertices[l.c];
        i.subVectors(h, c);
        a.subVectors(u, c);
        i.cross(a);
        e[l.a].add(i);
        e[l.b].add(i);
        e[l.c].add(i);
      } else {
        this.computeFaceNormals();
        for (d = 0, f = this.faces.length, void 0; d < f; d++) {
          var d;
          var f;
          var p = this.faces[d];
          e[p.a].add(p.normal);
          e[p.b].add(p.normal);
          e[p.c].add(p.normal);
        }
      }
      for (m = 0, v = this.vertices.length, void 0; m < v; m++) {
        var m;
        var v;
        e[m].normalize();
      }
      for (g = 0, y = this.faces.length, void 0; g < y; g++) {
        var g;
        var y;
        var b = this.faces[g];
        var x = b.vertexNormals;
        if (3 === x.length) {
          x[0].copy(e[b.a]);
          x[1].copy(e[b.b]);
          x[2].copy(e[b.c]);
        } else {
          x[0] = e[b.a].clone();
          x[1] = e[b.b].clone();
          x[2] = e[b.c].clone();
        }
      }
      if (this.faces.length > 0) {
        this.normalsNeedUpdate = !0;
      }
    },
    computeFlatVertexNormals: function () {
      this.computeFaceNormals();
      for (t = 0, e = this.faces.length, void 0; t < e; t++) {
        var t;
        var e;
        var n = this.faces[t];
        var r = n.vertexNormals;
        if (3 === r.length) {
          r[0].copy(n.normal);
          r[1].copy(n.normal);
          r[2].copy(n.normal);
        } else {
          r[0] = n.normal.clone();
          r[1] = n.normal.clone();
          r[2] = n.normal.clone();
        }
      }
      if (this.faces.length > 0) {
        this.normalsNeedUpdate = !0;
      }
    },
    computeMorphNormals: function () {
      for (t = 0, e = this.faces.length, void 0; t < e; t++) {
        var t;
        var e;
        var n = this.faces[t];
        if (n.__originalFaceNormal) {
          n.__originalFaceNormal.copy(n.normal);
        } else {
          n.__originalFaceNormal = n.normal.clone();
        }
        if (n.__originalVertexNormals) {
          n.__originalVertexNormals = [];
        }
        for (r = 0, i = n.vertexNormals.length, void 0; r < i; r++) {
          var r;
          var i;
          if (n.__originalVertexNormals[r]) {
            n.__originalVertexNormals[r].copy(n.vertexNormals[r]);
          } else {
            n.__originalVertexNormals[r] = n.vertexNormals[r].clone();
          }
        }
      }
      var a = new yo();
      a.faces = this.faces;
      for (o = 0, s = this.morphTargets.length, void 0; o < s; o++) {
        var o;
        var s;
        if (!this.morphNormals[o]) {
          this.morphNormals[o] = {};
          this.morphNormals[o].faceNormals = [];
          this.morphNormals[o].vertexNormals = [];
          for (l = this.morphNormals[o].faceNormals, u = this.morphNormals[o].vertexNormals, c = 0, h = this.faces.length, void 0; c < h; c++) {
            var l;
            var u;
            var c;
            var h;
            var d = new wt();
            var f = {
              a: new wt(),
              b: new wt(),
              c: new wt()
            };
            l.push(d);
            u.push(f);
          }
        }
        var p = this.morphNormals[o];
        a.vertices = this.morphTargets[o].vertices;
        a.computeFaceNormals();
        a.computeVertexNormals();
        for (m = 0, v = this.faces.length, void 0; m < v; m++) {
          var m;
          var v;
          var g = this.faces[m];
          var y = p.faceNormals[m];
          var b = p.vertexNormals[m];
          y.copy(g.normal);
          b.a.copy(g.vertexNormals[0]);
          b.b.copy(g.vertexNormals[1]);
          b.c.copy(g.vertexNormals[2]);
        }
      }
      for (x = 0, _ = this.faces.length, void 0; x < _; x++) {
        var x;
        var _;
        var w = this.faces[x];
        w.normal = w.__originalFaceNormal;
        w.vertexNormals = w.__originalVertexNormals;
      }
    },
    computeBoundingBox: function () {
      if (null === this.boundingBox) {
        this.boundingBox = new Tt();
      }
      this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function () {
      if (null === this.boundingSphere) {
        this.boundingSphere = new Gt();
      }
      this.boundingSphere.setFromPoints(this.vertices);
    },
    merge: function (t, e, n) {
      if (t && t.isGeometry) {
        var r;
        var i = this.vertices.length;
        var a = this.vertices;
        var o = t.vertices;
        var s = this.faces;
        var l = t.faces;
        var u = this.colors;
        var c = t.colors;
        if (void 0 === n) {
          n = 0;
        }
        if (void 0 !== e) {
          r = new pt().getNormalMatrix(e);
        }
        for (h = 0, d = o.length, void 0; h < d; h++) {
          var h;
          var d;
          var f = o[h].clone();
          if (void 0 !== e) {
            f.applyMatrix4(e);
          }
          a.push(f);
        }
        for (p = 0, m = c.length, void 0; p < m; p++) {
          var p;
          var m;
          u.push(c[p].clone());
        }
        for (v = 0, g = l.length, void 0; v < g; v++) {
          var v;
          var g;
          var y = l[v];
          var b = void 0;
          var x = void 0;
          var _ = y.vertexNormals;
          var w = y.vertexColors;
          var S = new Ve(y.a + i, y.b + i, y.c + i);
          S.normal.copy(y.normal);
          if (void 0 !== r) {
            S.normal.applyMatrix3(r).normalize();
          }
          for (E = 0, T = _.length, void 0; E < T; E++) {
            var E;
            var T;
            b = _[E].clone();
            if (void 0 !== r) {
              b.applyMatrix3(r).normalize();
            }
            S.vertexNormals.push(b);
          }
          S.color.copy(y.color);
          for (M = 0, A = w.length, void 0; M < A; M++) {
            var M;
            var A;
            x = w[M];
            S.vertexColors.push(x.clone());
          }
          S.materialIndex = y.materialIndex + n;
          s.push(S);
        }
        for (L = 0, C = t.faceVertexUvs.length, void 0; L < C; L++) {
          var L;
          var C;
          var P = t.faceVertexUvs[L];
          if (void 0 === this.faceVertexUvs[L]) {
            this.faceVertexUvs[L] = [];
          }
          for (R = 0, O = P.length, void 0; R < O; R++) {
            var R;
            var O;
            for (I = P[R], D = [], k = 0, N = I.length, void 0; k < N; k++) {
              var I;
              var D;
              var k;
              var N;
              D.push(I[k].clone());
            }
            this.faceVertexUvs[L].push(D);
          }
        }
      } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
    },
    mergeMesh: function (t) {
      if (t && t.isMesh) {
        if (t.matrixAutoUpdate) {
          t.updateMatrix();
        }
        this.merge(t.geometry, t.matrix);
      } else {
        console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t);
      }
    },
    mergeVertices: function () {
      for (t = {}, e = [], n = [], r = Math.pow(10, 4), i = 0, a = this.vertices.length, void 0; i < a; i++) {
        var t;
        var e;
        var n;
        var r;
        var i;
        var a;
        var o = this.vertices[i];
        var s = Math.round(o.x * r) + "_" + Math.round(o.y * r) + "_" + Math.round(o.z * r);
        if (void 0 === t[s]) {
          t[s] = i;
          e.push(this.vertices[i]);
          n[i] = e.length - 1;
        } else {
          n[i] = n[t[s]];
        }
      }
      for (l = [], u = 0, c = this.faces.length, void 0; u < c; u++) {
        var l;
        var u;
        var c;
        var h = this.faces[u];
        h.a = n[h.a];
        h.b = n[h.b];
        h.c = n[h.c];
        for (d = [h.a, h.b, h.c], f = 0, void 0; f < 3; f++) {
          var d;
          var f;
          if (d[f] === d[(f + 1) % 3]) {
            l.push(u);
            break;
          }
        }
      }
      for (var p = l.length - 1; p >= 0; p--) {
        var m = l[p];
        this.faces.splice(m, 1);
        for (v = 0, g = this.faceVertexUvs.length, void 0; v < g; v++) {
          var v;
          var g;
          this.faceVertexUvs[v].splice(m, 1);
        }
      }
      var y = this.vertices.length - e.length;
      this.vertices = e;
      return y;
    },
    setFromPoints: function (t) {
      this.vertices = [];
      for (e = 0, n = t.length, void 0; e < n; e++) {
        var e;
        var n;
        var r = t[e];
        this.vertices.push(new wt(r.x, r.y, r.z || 0));
      }
      return this;
    },
    sortFacesByMaterialIndex: function () {
      for (t = this.faces, e = t.length, n = 0, void 0; n < e; n++) {
        var t;
        var e;
        var n;
        t[n]._id = n;
      }
      t.sort(function (t, e) {
        return t.materialIndex - e.materialIndex;
      });
      var r;
      var i;
      var a = this.faceVertexUvs[0];
      var o = this.faceVertexUvs[1];
      if (a && a.length === e) {
        r = [];
      }
      if (o && o.length === e) {
        i = [];
      }
      for (var s = 0; s < e; s++) {
        var l = t[s]._id;
        if (r) {
          r.push(a[l]);
        }
        if (i) {
          i.push(o[l]);
        }
      }
      if (r) {
        this.faceVertexUvs[0] = r;
      }
      if (i) {
        this.faceVertexUvs[1] = i;
      }
    },
    toJSON: function () {
      var t = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON"
        }
      };
      t.uuid = this.uuid;
      t.type = this.type;
      if ("" !== this.name) {
        t.name = this.name;
      }
      if (void 0 !== this.parameters) {
        var e = this.parameters;
        for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
        return t;
      }
      for (r = [], i = 0, void 0; i < this.vertices.length; i++) {
        var r;
        var i;
        var a = this.vertices[i];
        r.push(a.x, a.y, a.z);
      }
      for (o = [], s = [], l = {}, u = [], c = {}, h = [], d = {}, f = 0, void 0; f < this.faces.length; f++) {
        var o;
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var p = this.faces[f];
        var m = void 0 !== this.faceVertexUvs[0][f];
        var v = p.normal.length() > 0;
        var g = p.vertexNormals.length > 0;
        var y = 1 !== p.color.r || 1 !== p.color.g || 1 !== p.color.b;
        var b = p.vertexColors.length > 0;
        var x = 0;
        x = E(x, 0, 0);
        x = E(x, 1, !0);
        x = E(x, 2, !1);
        x = E(x, 3, m);
        x = E(x, 4, v);
        x = E(x, 5, g);
        x = E(x, 6, y);
        x = E(x, 7, b);
        o.push(x);
        o.push(p.a, p.b, p.c);
        o.push(p.materialIndex);
        if (m) {
          var _ = this.faceVertexUvs[0][f];
          o.push(A(_[0]), A(_[1]), A(_[2]));
        }
        if (v) {
          o.push(T(p.normal));
        }
        if (g) {
          var w = p.vertexNormals;
          o.push(T(w[0]), T(w[1]), T(w[2]));
        }
        if (y) {
          o.push(M(p.color));
        }
        if (b) {
          var S = p.vertexColors;
          o.push(M(S[0]), M(S[1]), M(S[2]));
        }
      }
      function E(t, e, n) {
        return n ? t | 1 << e : t & ~(1 << e);
      }
      function T(t) {
        var e = t.x.toString() + t.y.toString() + t.z.toString();
        if (void 0 !== l[e]) {
          l[e] = s.length / 3;
          s.push(t.x, t.y, t.z);
        }
        return l[e];
      }
      function M(t) {
        var e = t.r.toString() + t.g.toString() + t.b.toString();
        if (void 0 !== c[e]) {
          c[e] = u.length;
          u.push(t.getHex());
        }
        return c[e];
      }
      function A(t) {
        var e = t.x.toString() + t.y.toString();
        if (void 0 !== d[e]) {
          d[e] = h.length / 2;
          h.push(t.x, t.y);
        }
        return d[e];
      }
      t.data = {};
      t.data.vertices = r;
      t.data.normals = s;
      if (u.length > 0) {
        t.data.colors = u;
      }
      if (h.length > 0) {
        t.data.uvs = [h];
      }
      t.data.faces = o;
      return t;
    },
    clone: function () {
      return new yo().copy(this);
    },
    copy: function (t) {
      this.vertices = [];
      this.colors = [];
      this.faces = [];
      this.faceVertexUvs = [[]];
      this.morphTargets = [];
      this.morphNormals = [];
      this.skinWeights = [];
      this.skinIndices = [];
      this.lineDistances = [];
      this.boundingBox = null;
      this.boundingSphere = null;
      this.name = t.name;
      for (e = t.vertices, n = 0, r = e.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        this.vertices.push(e[n].clone());
      }
      for (i = t.colors, a = 0, o = i.length, void 0; a < o; a++) {
        var i;
        var a;
        var o;
        this.colors.push(i[a].clone());
      }
      for (s = t.faces, l = 0, u = s.length, void 0; l < u; l++) {
        var s;
        var l;
        var u;
        this.faces.push(s[l].clone());
      }
      for (c = 0, h = t.faceVertexUvs.length, void 0; c < h; c++) {
        var c;
        var h;
        var d = t.faceVertexUvs[c];
        if (void 0 === this.faceVertexUvs[c]) {
          this.faceVertexUvs[c] = [];
        }
        for (f = 0, p = d.length, void 0; f < p; f++) {
          var f;
          var p;
          for (m = d[f], v = [], g = 0, y = m.length, void 0; g < y; g++) {
            var m;
            var v;
            var g;
            var y;
            var b = m[g];
            v.push(b.clone());
          }
          this.faceVertexUvs[c].push(v);
        }
      }
      for (x = t.morphTargets, _ = 0, w = x.length, void 0; _ < w; _++) {
        var x;
        var _;
        var w;
        var S = {};
        S.name = x[_].name;
        if (void 0 !== x[_].vertices) {
          S.vertices = [];
          for (var E = 0, T = x[_].vertices.length; E < T; E++) S.vertices.push(x[_].vertices[E].clone());
        }
        if (void 0 !== x[_].normals) {
          S.normals = [];
          for (M = 0, A = x[_].normals.length, void 0; M < A; M++) {
            var M;
            var A;
            S.normals.push(x[_].normals[M].clone());
          }
        }
        this.morphTargets.push(S);
      }
      for (L = t.morphNormals, C = 0, P = L.length, void 0; C < P; C++) {
        var L;
        var C;
        var P;
        var R = {};
        if (void 0 !== L[C].vertexNormals) {
          R.vertexNormals = [];
          for (O = 0, I = L[C].vertexNormals.length, void 0; O < I; O++) {
            var O;
            var I;
            var D = L[C].vertexNormals[O];
            var k = {};
            k.a = D.a.clone();
            k.b = D.b.clone();
            k.c = D.c.clone();
            R.vertexNormals.push(k);
          }
        }
        if (void 0 !== L[C].faceNormals) {
          R.faceNormals = [];
          for (N = 0, B = L[C].faceNormals.length, void 0; N < B; N++) {
            var N;
            var B;
            R.faceNormals.push(L[C].faceNormals[N].clone());
          }
        }
        this.morphNormals.push(R);
      }
      for (F = t.skinWeights, U = 0, z = F.length, void 0; U < z; U++) {
        var F;
        var U;
        var z;
        this.skinWeights.push(F[U].clone());
      }
      for (G = t.skinIndices, H = 0, j = G.length, void 0; H < j; H++) {
        var G;
        var H;
        var j;
        this.skinIndices.push(G[H].clone());
      }
      for (V = t.lineDistances, W = 0, q = V.length, void 0; W < q; W++) {
        var V;
        var W;
        var q;
        this.lineDistances.push(V[W]);
      }
      var Y = t.boundingBox;
      if (null !== Y) {
        this.boundingBox = Y.clone();
      }
      var X = t.boundingSphere;
      if (null !== X) {
        this.boundingSphere = X.clone();
      }
      this.elementsNeedUpdate = t.elementsNeedUpdate;
      this.verticesNeedUpdate = t.verticesNeedUpdate;
      this.uvsNeedUpdate = t.uvsNeedUpdate;
      this.normalsNeedUpdate = t.normalsNeedUpdate;
      this.colorsNeedUpdate = t.colorsNeedUpdate;
      this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate;
      this.groupsNeedUpdate = t.groupsNeedUpdate;
      return this;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  var bo = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      (s = t.call(this) || this).type = "BoxGeometry";
      s.parameters = {
        width: e,
        height: n,
        depth: r,
        widthSegments: i,
        heightSegments: a,
        depthSegments: o
      };
      s.fromBufferGeometry(new Bn(e, n, r, i, a, o));
      s.mergeVertices();
      return s;
    }
    ct(e, t);
    return e;
  }(yo);
  var xo = function (t) {
    function e(e, n, r, i) {
      var a;
      (a = t.call(this) || this).type = "CircleBufferGeometry";
      a.parameters = {
        radius: e,
        segments: n,
        thetaStart: r,
        thetaLength: i
      };
      e = e || 1;
      n = void 0 !== n ? Math.max(3, n) : 8;
      r = void 0 !== r ? r : 0;
      i = void 0 !== i ? i : 2 * Math.PI;
      var o = [];
      var s = [];
      var l = [];
      var u = [];
      var c = new wt();
      var h = new ft();
      s.push(0, 0, 0);
      l.push(0, 0, 1);
      u.push(0.5, 0.5);
      for (d = 0, f = 3, void 0; d <= n; d++, f += 3) {
        var d;
        var f;
        var p = r + d / n * i;
        c.x = e * Math.cos(p);
        c.y = e * Math.sin(p);
        s.push(c.x, c.y, c.z);
        l.push(0, 0, 1);
        h.x = (s[f] / e + 1) / 2;
        h.y = (s[f + 1] / e + 1) / 2;
        u.push(h.x, h.y);
      }
      for (var m = 1; m <= n; m++) o.push(m, m + 1, 0);
      a.setIndex(o);
      a.setAttribute("position", new an(s, 3));
      a.setAttribute("normal", new an(l, 3));
      a.setAttribute("uv", new an(u, 2));
      return a;
    }
    ct(e, t);
    return e;
  }(vn);
  var _o = function (t) {
    function e(e, n, r, i) {
      var a;
      (a = t.call(this) || this).type = "CircleGeometry";
      a.parameters = {
        radius: e,
        segments: n,
        thetaStart: r,
        thetaLength: i
      };
      a.fromBufferGeometry(new xo(e, n, r, i));
      a.mergeVertices();
      return a;
    }
    ct(e, t);
    return e;
  }(yo);
  var wo = function (t) {
    function e(e, n, r, i, a, o, s, l) {
      var u;
      (u = t.call(this) || this).type = "CylinderBufferGeometry";
      u.parameters = {
        radiusTop: e,
        radiusBottom: n,
        height: r,
        radialSegments: i,
        heightSegments: a,
        openEnded: o,
        thetaStart: s,
        thetaLength: l
      };
      var c = ht(u);
      e = void 0 !== e ? e : 1;
      n = void 0 !== n ? n : 1;
      r = r || 1;
      i = Math.floor(i) || 8;
      a = Math.floor(a) || 1;
      o = void 0 !== o && o;
      s = void 0 !== s ? s : 0;
      l = void 0 !== l ? l : 2 * Math.PI;
      var h = [];
      var d = [];
      var f = [];
      var p = [];
      var m = 0;
      var v = [];
      var g = r / 2;
      var y = 0;
      function b(t) {
        for (r = m, a = new ft(), o = new wt(), u = 0, v = !0 === t ? e : n, b = !0 === t ? 1 : -1, x = 1, void 0; x <= i; x++) {
          var r;
          var a;
          var o;
          var u;
          var v;
          var b;
          var x;
          d.push(0, g * b, 0);
          f.push(0, b, 0);
          p.push(0.5, 0.5);
          m++;
        }
        for (_ = m, w = 0, void 0; w <= i; w++) {
          var _;
          var w;
          var S = w / i * l + s;
          var E = Math.cos(S);
          var T = Math.sin(S);
          o.x = v * T;
          o.y = g * b;
          o.z = v * E;
          d.push(o.x, o.y, o.z);
          f.push(0, b, 0);
          a.x = 0.5 * E + 0.5;
          a.y = 0.5 * T * b + 0.5;
          p.push(a.x, a.y);
          m++;
        }
        for (var M = 0; M < i; M++) {
          var A = r + M;
          var L = _ + M;
          if (!0 === t) {
            h.push(L, L + 1, A);
          } else {
            h.push(L + 1, L, A);
          }
          u += 3;
        }
        c.addGroup(y, u, !0 === t ? 1 : 2);
        y += u;
      }
      (function () {
        for (t = new wt(), o = new wt(), u = 0, b = (n - e) / r, x = 0, void 0; x <= a; x++) {
          var t;
          var o;
          var u;
          var b;
          var x;
          for (_ = [], w = x / a, S = w * (n - e) + e, E = 0, void 0; E <= i; E++) {
            var _;
            var w;
            var S;
            var E;
            var T = E / i;
            var M = T * l + s;
            var A = Math.sin(M);
            var L = Math.cos(M);
            o.x = S * A;
            o.y = -w * r + g;
            o.z = S * L;
            d.push(o.x, o.y, o.z);
            t.set(A, b, L).normalize();
            f.push(t.x, t.y, t.z);
            p.push(T, 1 - w);
            _.push(m++);
          }
          v.push(_);
        }
        for (var C = 0; C < i; C++) for (var P = 0; P < a; P++) {
          var R = v[P][C];
          var O = v[P + 1][C];
          var I = v[P + 1][C + 1];
          var D = v[P][C + 1];
          h.push(R, O, D);
          h.push(O, I, D);
          u += 6;
        }
        c.addGroup(y, u, 0);
        y += u;
      })();
      if (!1 === o) {
        if (e > 0) {
          b(!0);
        }
        if (n > 0) {
          b(!1);
        }
      }
      u.setIndex(h);
      u.setAttribute("position", new an(d, 3));
      u.setAttribute("normal", new an(f, 3));
      u.setAttribute("uv", new an(p, 2));
      return u;
    }
    ct(e, t);
    return e;
  }(vn);
  var So = function (t) {
    function e(e, n, r, i, a, o, s, l) {
      var u;
      (u = t.call(this) || this).type = "CylinderGeometry";
      u.parameters = {
        radiusTop: e,
        radiusBottom: n,
        height: r,
        radialSegments: i,
        heightSegments: a,
        openEnded: o,
        thetaStart: s,
        thetaLength: l
      };
      u.fromBufferGeometry(new wo(e, n, r, i, a, o, s, l));
      u.mergeVertices();
      return u;
    }
    ct(e, t);
    return e;
  }(yo);
  var Eo = function (t) {
    function e(e, n, r, i, a, o, s) {
      var l;
      (l = t.call(this, 0, e, n, r, i, a, o, s) || this).type = "ConeGeometry";
      l.parameters = {
        radius: e,
        height: n,
        radialSegments: r,
        heightSegments: i,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
      };
      return l;
    }
    ct(e, t);
    return e;
  }(So);
  var To = function (t) {
    function e(e, n, r, i, a, o, s) {
      var l;
      (l = t.call(this, 0, e, n, r, i, a, o, s) || this).type = "ConeBufferGeometry";
      l.parameters = {
        radius: e,
        height: n,
        radialSegments: r,
        heightSegments: i,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
      };
      return l;
    }
    ct(e, t);
    return e;
  }(wo);
  var Mo = function (t) {
    function e(e, n, r, i) {
      var a;
      (a = t.call(this) || this).type = "PolyhedronBufferGeometry";
      a.parameters = {
        vertices: e,
        indices: n,
        radius: r,
        detail: i
      };
      r = r || 1;
      var o = [];
      var s = [];
      function l(t, e, n, r) {
        for (i = r + 1, a = [], o = 0, void 0; o <= i; o++) {
          var i;
          var a;
          var o;
          a[o] = [];
          for (s = t.clone().lerp(n, o / i), l = e.clone().lerp(n, o / i), c = i - o, h = 0, void 0; h <= c; h++) {
            var s;
            var l;
            var c;
            var h;
            a[o][h] = 0 === h && o === i ? s : s.clone().lerp(l, h / c);
          }
        }
        for (var d = 0; d < i; d++) for (var f = 0; f < 2 * (i - d) - 1; f++) {
          var p = Math.floor(f / 2);
          if (f % 2 == 0) {
            u(a[d][p + 1]);
            u(a[d + 1][p]);
            u(a[d][p]);
          } else {
            u(a[d][p + 1]);
            u(a[d + 1][p + 1]);
            u(a[d + 1][p]);
          }
        }
      }
      function u(t) {
        o.push(t.x, t.y, t.z);
      }
      function c(t, n) {
        var r = 3 * t;
        n.x = e[r + 0];
        n.y = e[r + 1];
        n.z = e[r + 2];
      }
      function h(t, e, n, r) {
        if (r < 0 && 1 === t.x) {
          s[e] = t.x - 1;
        }
        if (0 === n.x && 0 === n.z) {
          s[e] = r / 2 / Math.PI + 0.5;
        }
      }
      function d(t) {
        return Math.atan2(t.z, -t.x);
      }
      function f(t) {
        return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z));
      }
      (function (t) {
        for (e = new wt(), r = new wt(), i = new wt(), a = 0, void 0; a < n.length; a += 3) {
          var e;
          var r;
          var i;
          var a;
          c(n[a + 0], e);
          c(n[a + 1], r);
          c(n[a + 2], i);
          l(e, r, i, t);
        }
      })(i = i || 0);
      (function (t) {
        for (e = new wt(), n = 0, void 0; n < o.length; n += 3) {
          var e;
          var n;
          e.x = o[n + 0];
          e.y = o[n + 1];
          e.z = o[n + 2];
          e.normalize().multiplyScalar(t);
          o[n + 0] = e.x;
          o[n + 1] = e.y;
          o[n + 2] = e.z;
        }
      })(r);
      (function () {
        for (t = new wt(), e = 0, void 0; e < o.length; e += 3) {
          var t;
          var e;
          t.x = o[e + 0];
          t.y = o[e + 1];
          t.z = o[e + 2];
          var n = d(t) / 2 / Math.PI + 0.5;
          var r = f(t) / Math.PI + 0.5;
          s.push(n, 1 - r);
        }
        (function () {
          for (t = new wt(), e = new wt(), n = new wt(), r = new wt(), i = new ft(), a = new ft(), l = new ft(), u = 0, c = 0, void 0; u < o.length; u += 9, c += 6) {
            var t;
            var e;
            var n;
            var r;
            var i;
            var a;
            var l;
            var u;
            var c;
            t.set(o[u + 0], o[u + 1], o[u + 2]);
            e.set(o[u + 3], o[u + 4], o[u + 5]);
            n.set(o[u + 6], o[u + 7], o[u + 8]);
            i.set(s[c + 0], s[c + 1]);
            a.set(s[c + 2], s[c + 3]);
            l.set(s[c + 4], s[c + 5]);
            r.copy(t).add(e).add(n).divideScalar(3);
            var f = d(r);
            h(i, c + 0, t, f);
            h(a, c + 2, e, f);
            h(l, c + 4, n, f);
          }
        })();
        (function () {
          for (var t = 0; t < s.length; t += 6) {
            var e = s[t + 0];
            var n = s[t + 2];
            var r = s[t + 4];
            var i = Math.max(e, n, r);
            var a = Math.min(e, n, r);
            if (i > 0.9 && a < 0.1) {
              if (e < 0.2) {
                s[t + 0] += 1;
              }
              if (n < 0.2) {
                s[t + 2] += 1;
              }
              if (r < 0.2) {
                s[t + 4] += 1;
              }
            }
          }
        })();
      })();
      a.setAttribute("position", new an(o, 3));
      a.setAttribute("normal", new an(o.slice(), 3));
      a.setAttribute("uv", new an(s, 2));
      if (0 === i) {
        a.computeVertexNormals();
      } else {
        a.normalizeNormals();
      }
      return a;
    }
    ct(e, t);
    return e;
  }(vn);
  var Ao = function (t) {
    function e(e, n) {
      var r;
      var i = (1 + Math.sqrt(5)) / 2;
      var a = 1 / i;
      var o = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -a, -i, 0, -a, i, 0, a, -i, 0, a, i, -a, -i, 0, -a, i, 0, a, -i, 0, a, i, 0, -i, 0, -a, i, 0, -a, -i, 0, a, i, 0, a];
      (r = t.call(this, o, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, n) || this).type = "DodecahedronBufferGeometry";
      r.parameters = {
        radius: e,
        detail: n
      };
      return r;
    }
    ct(e, t);
    return e;
  }(Mo);
  var Lo = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "DodecahedronGeometry";
      r.parameters = {
        radius: e,
        detail: n
      };
      r.fromBufferGeometry(new Ao(e, n));
      r.mergeVertices();
      return r;
    }
    ct(e, t);
    return e;
  }(yo);
  var Co = new wt();
  var Po = new wt();
  var Ro = new wt();
  var Oo = new Ne();
  var Io = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "EdgesGeometry";
      r.parameters = {
        thresholdAngle: n
      };
      n = void 0 !== n ? n : 1;
      if (e.isGeometry) {
        e = new vn().fromGeometry(e);
      }
      for (i = Math.pow(10, 4), a = Math.cos(st.DEG2RAD * n), o = e.getIndex(), s = e.getAttribute("position"), l = o ? o.count : s.count, u = [0, 0, 0], c = ["a", "b", "c"], h = new Array(3), d = {}, f = [], p = 0, void 0; p < l; p += 3) {
        var i;
        var a;
        var o;
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var p;
        if (o) {
          u[0] = o.getX(p);
          u[1] = o.getX(p + 1);
          u[2] = o.getX(p + 2);
        } else {
          u[0] = p;
          u[1] = p + 1;
          u[2] = p + 2;
        }
        var m = Oo.a;
        var v = Oo.b;
        var g = Oo.c;
        m.fromBufferAttribute(s, u[0]);
        v.fromBufferAttribute(s, u[1]);
        g.fromBufferAttribute(s, u[2]);
        Oo.getNormal(Ro);
        h[0] = Math.round(m.x * i) + "," + Math.round(m.y * i) + "," + Math.round(m.z * i);
        h[1] = Math.round(v.x * i) + "," + Math.round(v.y * i) + "," + Math.round(v.z * i);
        h[2] = Math.round(g.x * i) + "," + Math.round(g.y * i) + "," + Math.round(g.z * i);
        if (h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0]) for (var y = 0; y < 3; y++) {
          var b = (y + 1) % 3,
            x = h[y],
            _ = h[b],
            w = Oo[c[y]],
            S = Oo[c[b]],
            E = x + "_" + _,
            T = _ + "_" + x;
          T in d && d[T] ? (Ro.dot(d[T].normal) <= a && (f.push(w.x, w.y, w.z), f.push(S.x, S.y, S.z)), d[T] = null) : E in d || (d[E] = {
            index0: u[y],
            index1: u[b],
            normal: Ro.clone()
          });
        }
      }
      for (var M in d) if (d[M]) {
        var A = d[M];
        var L = A.index0;
        var C = A.index1;
        Co.fromBufferAttribute(s, L);
        Po.fromBufferAttribute(s, C);
        f.push(Co.x, Co.y, Co.z);
        f.push(Po.x, Po.y, Po.z);
      }
      r.setAttribute("position", new an(f, 3));
      return r;
    }
    ct(e, t);
    return e;
  }(vn);
  var Do = function (t, e, n) {
    n = n || 2;
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    var u;
    var c = e && e.length;
    var h = c ? e[0] * n : t.length;
    var d = ko(t, 0, h, n, !0);
    var f = [];
    if (!d || d.next === d.prev) return f;
    if (c) {
      d = function (t, e, n, r) {
        var i;
        var a;
        var o;
        var s = [];
        for (i = 0, a = e.length; i < a; i++) {
          if ((o = ko(t, e[i] * r, i < a - 1 ? e[i + 1] * r : t.length, r, !1)) === o.next) {
            o.steiner = !0;
          }
          s.push(qo(o));
        }
        for (s.sort(Ho), i = 0; i < s.length; i++) {
          jo(s[i], n);
          n = No(n, n.next);
        }
        return n;
      }(t, e, d, n);
    }
    if (t.length > 80 * n) {
      r = a = t[0], i = o = t[1];
      for (var p = n; p < h; p += n) (s = t[p]) < r && (r = s), (l = t[p + 1]) < i && (i = l), s > a && (a = s), l > o && (o = l);
      u = 0 !== (u = Math.max(a - r, o - i)) ? 1 / u : 0;
    }
    Bo(d, f, n, r, i, u);
    return f;
  };
  function ko(t, e, n, r, i) {
    var a;
    var o;
    if (i === function (t, e, n, r) {
      for (i = 0, a = e, o = n - r, void 0; a < n; a += r) {
        var i;
        var a;
        var o;
        i += (t[o] - t[a]) * (t[a + 1] + t[o + 1]);
        o = a;
      }
      return i;
    }(t, e, n, r) > 0) for (a = e; a < n; a += r) o = ns(a, t[a], t[a + 1], o);else for (a = n - r; a >= e; a -= r) o = ns(a, t[a], t[a + 1], o);
    if (o && Ko(o, o.next)) {
      rs(o);
      o = o.next;
    }
    return o;
  }
  function No(t, e) {
    if (!t) return t;
    if (e) {
      e = t;
    }
    var n;
    var r = t;
    do {
      n = !1;
      if (r.steiner || !Ko(r, r.next) && 0 !== Zo(r.prev, r, r.next)) r = r.next;else {
        if (rs(r), (r = e = r.prev) === r.next) break;
        n = !0;
      }
    } while (n || r !== e);
    return e;
  }
  function Bo(t, e, n, r, i, a, o) {
    if (t) {
      if (!o && a) {
        (function (t, e, n, r) {
          var i = t;
          do {
            if (null === i.z) {
              i.z = Wo(i.x, i.y, e, n, r);
            }
            i.prevZ = i.prev;
            i.nextZ = i.next;
            i = i.next;
          } while (i !== t);
          i.prevZ.nextZ = null;
          i.prevZ = null;
          (function (t) {
            var e;
            var n;
            var r;
            var i;
            var a;
            var o;
            var s;
            var l;
            var u = 1;
            do {
              for (n = t, t = null, a = null, o = 0; n;) {
                for (o++, r = n, s = 0, e = 0; e < u && (s++, r = r.nextZ); e++);
                for (l = u; s > 0 || l > 0 && r;) {
                  if (0 !== s && (0 === l || !r || n.z <= r.z)) {
                    i = n;
                    n = n.nextZ;
                    s--;
                  } else {
                    i = r;
                    r = r.nextZ;
                    l--;
                  }
                  if (a) {
                    a.nextZ = i;
                  } else {
                    t = i;
                  }
                  i.prevZ = a;
                  a = i;
                }
                n = r;
              }
              a.nextZ = null;
              u *= 2;
            } while (o > 1);
          })(i);
        })(t, r, i, a);
      }
      for (u = t, void 0; t.prev !== t.next;) {
        var s;
        var l;
        var u;
        s = t.prev;
        l = t.next;
        if (a ? Uo(t, r, i, a) : Fo(t)) e.push(s.i / n), e.push(t.i / n), e.push(l.i / n), rs(t), t = l.next, u = l.next;else if ((t = l) === u) {
          o ? 1 === o ? Bo(t = zo(No(t), e, n), e, n, r, i, a, 2) : 2 === o && Go(t, e, n, r, i, a) : Bo(No(t), e, n, r, i, a, 1);
          break;
        }
      }
    }
  }
  function Fo(t) {
    var e = t.prev;
    var n = t;
    var r = t.next;
    if (Zo(e, n, r) >= 0) return !1;
    for (var i = t.next.next; i !== t.prev;) {
      if (Yo(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) && Zo(i.prev, i, i.next) >= 0) return !1;
      i = i.next;
    }
    return !0;
  }
  function Uo(t, e, n, r) {
    var i = t.prev;
    var a = t;
    var o = t.next;
    if (Zo(i, a, o) >= 0) return !1;
    for (s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, l = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, u = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, c = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, h = Wo(s, l, e, n, r), d = Wo(u, c, e, n, r), f = t.prevZ, p = t.nextZ, void 0; f && f.z >= h && p && p.z <= d;) {
      var s;
      var l;
      var u;
      var c;
      var h;
      var d;
      var f;
      var p;
      if (f !== t.prev && f !== t.next && Yo(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && Zo(f.prev, f, f.next) >= 0) return !1;
      f = f.prevZ;
      if (p !== t.prev && p !== t.next && Yo(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && Zo(p.prev, p, p.next) >= 0) return !1;
      p = p.nextZ;
    }
    for (; f && f.z >= h;) {
      if (f !== t.prev && f !== t.next && Yo(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && Zo(f.prev, f, f.next) >= 0) return !1;
      f = f.prevZ;
    }
    for (; p && p.z <= d;) {
      if (p !== t.prev && p !== t.next && Yo(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && Zo(p.prev, p, p.next) >= 0) return !1;
      p = p.nextZ;
    }
    return !0;
  }
  function zo(t, e, n) {
    var r = t;
    do {
      var i = r.prev;
      var a = r.next.next;
      if (!Ko(i, a) && Jo(i, r, r.next, a) && ts(i, a) && ts(a, i)) {
        e.push(i.i / n);
        e.push(r.i / n);
        e.push(a.i / n);
        rs(r);
        rs(r.next);
        r = t = a;
      }
      r = r.next;
    } while (r !== t);
    return No(r);
  }
  function Go(t, e, n, r, i, a) {
    var o = t;
    do {
      for (var s = o.next.next; s !== o.prev;) {
        if (o.i !== s.i && Xo(o, s)) {
          var l = es(o, s);
          o = No(o, o.next);
          l = No(l, l.next);
          Bo(o, e, n, r, i, a);
          return void Bo(l, e, n, r, i, a);
        }
        s = s.next;
      }
      o = o.next;
    } while (o !== t);
  }
  function Ho(t, e) {
    return t.x - e.x;
  }
  function jo(t, e) {
    if (e = function (t, e) {
      var n;
      var r = e;
      var i = t.x;
      var a = t.y;
      var o = -1 / 0;
      do {
        if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
          var s = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
          if (s <= i && s > o) {
            o = s;
            if (s === i) {
              if (a === r.y) return r;
              if (a === r.next.y) return r.next;
            }
            n = r.x < r.next.x ? r : r.next;
          }
        }
        r = r.next;
      } while (r !== e);
      if (!n) return null;
      if (i === o) return n;
      var l;
      var u = n;
      var c = n.x;
      var h = n.y;
      var d = 1 / 0;
      r = n;
      do {
        if (i >= r.x && r.x >= c && i !== r.x && Yo(a < h ? i : o, a, c, h, a < h ? o : i, a, r.x, r.y)) {
          l = Math.abs(a - r.y) / (i - r.x);
          if (ts(r, t) && (l < d || l === d && (r.x > n.x || r.x === n.x && Vo(n, r)))) {
            n = r;
            d = l;
          }
        }
        r = r.next;
      } while (r !== u);
      return n;
    }(t, e)) {
      var n = es(e, t);
      No(e, e.next);
      No(n, n.next);
    }
  }
  function Vo(t, e) {
    return Zo(t.prev, t, e.prev) < 0 && Zo(e.next, t, t.next) < 0;
  }
  function Wo(t, e, n, r, i) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
  }
  function qo(t) {
    var e = t;
    var n = t;
    do {
      if (e.x < n.x || e.x === n.x && e.y < n.y) {
        n = e;
      }
      e = e.next;
    } while (e !== t);
    return n;
  }
  function Yo(t, e, n, r, i, a, o, s) {
    return (i - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (r - s) - (n - o) * (e - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0;
  }
  function Xo(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && !function (t, e) {
      var n = t;
      do {
        if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Jo(n, n.next, t, e)) return !0;
        n = n.next;
      } while (n !== t);
      return !1;
    }(t, e) && (ts(t, e) && ts(e, t) && function (t, e) {
      var n = t;
      var r = !1;
      var i = (t.x + e.x) / 2;
      var a = (t.y + e.y) / 2;
      do {
        if (n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x) {
          r = !r;
        }
        n = n.next;
      } while (n !== t);
      return r;
    }(t, e) && (Zo(t.prev, t, e.prev) || Zo(t, e.prev, e)) || Ko(t, e) && Zo(t.prev, t, t.next) > 0 && Zo(e.prev, e, e.next) > 0);
  }
  function Zo(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
  }
  function Ko(t, e) {
    return t.x === e.x && t.y === e.y;
  }
  function Jo(t, e, n, r) {
    var i = Qo(Zo(t, e, n));
    var a = Qo(Zo(t, e, r));
    var o = Qo(Zo(n, r, t));
    var s = Qo(Zo(n, r, e));
    return i !== a && o !== s || !(0 !== i || !$o(t, n, e)) || !(0 !== a || !$o(t, r, e)) || !(0 !== o || !$o(n, t, r)) || !(0 !== s || !$o(n, e, r));
  }
  function $o(t, e, n) {
    return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
  }
  function Qo(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  }
  function ts(t, e) {
    return Zo(t.prev, t, t.next) < 0 ? Zo(t, e, t.next) >= 0 && Zo(t, t.prev, e) >= 0 : Zo(t, e, t.prev) < 0 || Zo(t, t.next, e) < 0;
  }
  function es(t, e) {
    var n = new is(t.i, t.x, t.y);
    var r = new is(e.i, e.x, e.y);
    var i = t.next;
    var a = e.prev;
    t.next = e;
    e.prev = t;
    n.next = i;
    i.prev = n;
    r.next = n;
    n.prev = r;
    a.next = r;
    r.prev = a;
    return r;
  }
  function ns(t, e, n, r) {
    var i = new is(t, e, n);
    if (r) {
      i.next = r.next;
      i.prev = r;
      r.next.prev = i;
      r.next = i;
    } else {
      i.prev = i;
      i.next = i;
    }
    return i;
  }
  function rs(t) {
    t.next.prev = t.prev;
    t.prev.next = t.next;
    if (t.prevZ) {
      t.prevZ.nextZ = t.nextZ;
    }
    if (t.nextZ) {
      t.nextZ.prevZ = t.prevZ;
    }
  }
  function is(t, e, n) {
    this.i = t;
    this.x = e;
    this.y = n;
    this.prev = null;
    this.next = null;
    this.z = null;
    this.prevZ = null;
    this.nextZ = null;
    this.steiner = !1;
  }
  var as = {
    area: function (t) {
      for (e = t.length, n = 0, r = e - 1, i = 0, void 0; i < e; r = i++) {
        var e;
        var n;
        var r;
        var i;
        n += t[r].x * t[i].y - t[i].x * t[r].y;
      }
      return 0.5 * n;
    },
    isClockWise: function (t) {
      return as.area(t) < 0;
    },
    triangulateShape: function (t, e) {
      var n = [];
      var r = [];
      var i = [];
      os(t);
      ss(n, t);
      var a = t.length;
      e.forEach(os);
      for (var o = 0; o < e.length; o++) {
        r.push(a);
        a += e[o].length;
        ss(n, e[o]);
      }
      for (s = Do(n, r), l = 0, void 0; l < s.length; l += 3) {
        var s;
        var l;
        i.push(s.slice(l, l + 3));
      }
      return i;
    }
  };
  function os(t) {
    var e = t.length;
    if (e > 2 && t[e - 1].equals(t[0])) {
      t.pop();
    }
  }
  function ss(t, e) {
    for (var n = 0; n < e.length; n++) {
      t.push(e[n].x);
      t.push(e[n].y);
    }
  }
  var ls = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "ExtrudeBufferGeometry";
      r.parameters = {
        shapes: e,
        options: n
      };
      e = Array.isArray(e) ? e : [e];
      for (i = ht(r), a = [], o = [], s = 0, l = e.length, void 0; s < l; s++) {
        var i;
        var a;
        var o;
        var s;
        var l;
        u(e[s]);
      }
      function u(t) {
        var e = [];
        var r = void 0 !== n.curveSegments ? n.curveSegments : 12;
        var s = void 0 !== n.steps ? n.steps : 1;
        var l = void 0 !== n.depth ? n.depth : 100;
        var u = void 0 === n.bevelEnabled || n.bevelEnabled;
        var c = void 0 !== n.bevelThickness ? n.bevelThickness : 6;
        var h = void 0 !== n.bevelSize ? n.bevelSize : c - 2;
        var d = void 0 !== n.bevelOffset ? n.bevelOffset : 0;
        var f = void 0 !== n.bevelSegments ? n.bevelSegments : 3;
        var p = n.extrudePath;
        var m = void 0 !== n.UVGenerator ? n.UVGenerator : us;
        if (void 0 !== n.amount) {
          console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth.");
          l = n.amount;
        }
        var v;
        var g;
        var y;
        var b;
        var x;
        var _ = !1;
        if (p) {
          v = p.getSpacedPoints(s);
          _ = !0;
          u = !1;
          g = p.computeFrenetFrames(s, !1);
          y = new wt();
          b = new wt();
          x = new wt();
        }
        if (u) {
          f = 0;
          c = 0;
          h = 0;
          d = 0;
        }
        var w = t.extractPoints(r);
        var S = w.shape;
        var E = w.holes;
        if (!as.isClockWise(S)) {
          S = S.reverse();
          for (T = 0, M = E.length, void 0; T < M; T++) {
            var T;
            var M;
            var A = E[T];
            if (as.isClockWise(A)) {
              E[T] = A.reverse();
            }
          }
        }
        for (L = as.triangulateShape(S, E), C = S, P = 0, R = E.length, void 0; P < R; P++) {
          var L;
          var C;
          var P;
          var R;
          var O = E[P];
          S = S.concat(O);
        }
        function I(t, e, n) {
          if (e) {
            console.error("THREE.ExtrudeGeometry: vec does not exist");
          }
          return e.clone().multiplyScalar(n).add(t);
        }
        var D = S.length;
        var k = L.length;
        function N(t, e, n) {
          var r;
          var i;
          var a;
          var o = t.x - e.x;
          var s = t.y - e.y;
          var l = n.x - t.x;
          var u = n.y - t.y;
          var c = o * o + s * s;
          var h = o * u - s * l;
          if (Math.abs(h) > Number.EPSILON) {
            var d = Math.sqrt(c);
            var f = Math.sqrt(l * l + u * u);
            var p = e.x - s / d;
            var m = e.y + o / d;
            var v = ((n.x - u / f - p) * u - (n.y + l / f - m) * l) / (o * u - s * l);
            var g = (r = p + o * v - t.x) * r + (i = m + s * v - t.y) * i;
            if (g <= 2) return new ft(r, i);
            a = Math.sqrt(g / 2);
          } else {
            var y = !1;
            if (o > Number.EPSILON) {
              if (l > Number.EPSILON) {
                y = !0;
              }
            } else {
              if (o < -Number.EPSILON) {
                if (l < -Number.EPSILON) {
                  y = !0;
                }
              } else {
                if (Math.sign(s) === Math.sign(u)) {
                  y = !0;
                }
              }
            }
            if (y) {
              r = -s;
              i = o;
              a = Math.sqrt(c);
            } else {
              r = o;
              i = s;
              a = Math.sqrt(c / 2);
            }
          }
          return new ft(r / a, i / a);
        }
        for (B = [], F = 0, U = C.length, z = U - 1, G = F + 1, void 0; F < U; F++, z++, G++) {
          var B;
          var F;
          var U;
          var z;
          var G;
          if (z === U) {
            z = 0;
          }
          if (G === U) {
            G = 0;
          }
          B[F] = N(C[F], C[z], C[G]);
        }
        for (j = [], V = B.concat(), W = 0, q = E.length, void 0; W < q; W++) {
          var H;
          var j;
          var V;
          var W;
          var q;
          var Y = E[W];
          H = [];
          for (X = 0, Z = Y.length, K = Z - 1, J = X + 1, void 0; X < Z; X++, K++, J++) {
            var X;
            var Z;
            var K;
            var J;
            if (K === Z) {
              K = 0;
            }
            if (J === Z) {
              J = 0;
            }
            H[X] = N(Y[X], Y[K], Y[J]);
          }
          j.push(H);
          V = V.concat(H);
        }
        for (var $ = 0; $ < f; $++) {
          for (Q = $ / f, tt = c * Math.cos(Q * Math.PI / 2), et = h * Math.sin(Q * Math.PI / 2) + d, nt = 0, rt = C.length, void 0; nt < rt; nt++) {
            var Q;
            var tt;
            var et;
            var nt;
            var rt;
            var it = I(C[nt], B[nt], et);
            It(it.x, it.y, -tt);
          }
          for (at = 0, ot = E.length, void 0; at < ot; at++) {
            var at;
            var ot;
            var st = E[at];
            H = j[at];
            for (lt = 0, ut = st.length, void 0; lt < ut; lt++) {
              var lt;
              var ut;
              var ct = I(st[lt], H[lt], et);
              It(ct.x, ct.y, -tt);
            }
          }
        }
        for (ht = h + d, dt = 0, void 0; dt < D; dt++) {
          var ht;
          var dt;
          var pt = u ? I(S[dt], V[dt], ht) : S[dt];
          if (_) {
            b.copy(g.normals[0]).multiplyScalar(pt.x);
            y.copy(g.binormals[0]).multiplyScalar(pt.y);
            x.copy(v[0]).add(b).add(y);
            It(x.x, x.y, x.z);
          } else {
            It(pt.x, pt.y, 0);
          }
        }
        for (var mt = 1; mt <= s; mt++) for (var vt = 0; vt < D; vt++) {
          var gt = u ? I(S[vt], V[vt], ht) : S[vt];
          if (_) {
            b.copy(g.normals[mt]).multiplyScalar(gt.x);
            y.copy(g.binormals[mt]).multiplyScalar(gt.y);
            x.copy(v[mt]).add(b).add(y);
            It(x.x, x.y, x.z);
          } else {
            It(gt.x, gt.y, l / s * mt);
          }
        }
        for (var yt = f - 1; yt >= 0; yt--) {
          for (bt = yt / f, xt = c * Math.cos(bt * Math.PI / 2), _t = h * Math.sin(bt * Math.PI / 2) + d, St = 0, Et = C.length, void 0; St < Et; St++) {
            var bt;
            var xt;
            var _t;
            var St;
            var Et;
            var Tt = I(C[St], B[St], _t);
            It(Tt.x, Tt.y, l + xt);
          }
          for (Mt = 0, At = E.length, void 0; Mt < At; Mt++) {
            var Mt;
            var At;
            var Lt = E[Mt];
            H = j[Mt];
            for (Ct = 0, Pt = Lt.length, void 0; Ct < Pt; Ct++) {
              var Ct;
              var Pt;
              var Rt = I(Lt[Ct], H[Ct], _t);
              if (_) {
                It(Rt.x, Rt.y + v[s - 1].y, v[s - 1].x + xt);
              } else {
                It(Rt.x, Rt.y, l + xt);
              }
            }
          }
        }
        function Ot(t, e) {
          for (var n = t.length; --n >= 0;) {
            var r = n;
            var i = n - 1;
            if (i < 0) {
              i = t.length - 1;
            }
            for (a = 0, o = s + 2 * f, void 0; a < o; a++) {
              var a;
              var o;
              var l = D * a;
              var u = D * (a + 1);
              kt(e + r + l, e + i + l, e + i + u, e + r + u);
            }
          }
        }
        function It(t, n, r) {
          e.push(t);
          e.push(n);
          e.push(r);
        }
        function Dt(t, e, n) {
          Nt(t);
          Nt(e);
          Nt(n);
          var r = a.length / 3;
          var o = m.generateTopUV(i, a, r - 3, r - 2, r - 1);
          Bt(o[0]);
          Bt(o[1]);
          Bt(o[2]);
        }
        function kt(t, e, n, r) {
          Nt(t);
          Nt(e);
          Nt(r);
          Nt(e);
          Nt(n);
          Nt(r);
          var o = a.length / 3;
          var s = m.generateSideWallUV(i, a, o - 6, o - 3, o - 2, o - 1);
          Bt(s[0]);
          Bt(s[1]);
          Bt(s[3]);
          Bt(s[1]);
          Bt(s[2]);
          Bt(s[3]);
        }
        function Nt(t) {
          a.push(e[3 * t + 0]);
          a.push(e[3 * t + 1]);
          a.push(e[3 * t + 2]);
        }
        function Bt(t) {
          o.push(t.x);
          o.push(t.y);
        }
        (function () {
          var t = a.length / 3;
          if (u) {
            for (e = 0, n = D * e, r = 0, void 0; r < k; r++) {
              var e;
              var n;
              var r;
              var o = L[r];
              Dt(o[2] + n, o[1] + n, o[0] + n);
            }
            n = D * (e = s + 2 * f);
            for (var l = 0; l < k; l++) {
              var c = L[l];
              Dt(c[0] + n, c[1] + n, c[2] + n);
            }
          } else {
            for (var h = 0; h < k; h++) {
              var d = L[h];
              Dt(d[2], d[1], d[0]);
            }
            for (var p = 0; p < k; p++) {
              var m = L[p];
              Dt(m[0] + D * s, m[1] + D * s, m[2] + D * s);
            }
          }
          i.addGroup(t, a.length / 3 - t, 0);
        })();
        (function () {
          var t = a.length / 3;
          var e = 0;
          Ot(C, e);
          e += C.length;
          for (n = 0, r = E.length, void 0; n < r; n++) {
            var n;
            var r;
            var o = E[n];
            Ot(o, e);
            e += o.length;
          }
          i.addGroup(t, a.length / 3 - t, 1);
        })();
      }
      r.setAttribute("position", new an(a, 3));
      r.setAttribute("uv", new an(o, 2));
      r.computeVertexNormals();
      return r;
    }
    ct(e, t);
    e.prototype.toJSON = function () {
      var t = vn.prototype.toJSON.call(this);
      return function (t, e, n) {
        n.shapes = [];
        if (Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) {
          var a = t[r];
          n.shapes.push(a.uuid);
        } else n.shapes.push(t.uuid);
        if (void 0 !== e.extrudePath) {
          n.options.extrudePath = e.extrudePath.toJSON();
        }
        return n;
      }(this.parameters.shapes, this.parameters.options, t);
    };
    return e;
  }(vn);
  var us = {
    generateTopUV: function (t, e, n, r, i) {
      var a = e[3 * n];
      var o = e[3 * n + 1];
      var s = e[3 * r];
      var l = e[3 * r + 1];
      var u = e[3 * i];
      var c = e[3 * i + 1];
      return [new ft(a, o), new ft(s, l), new ft(u, c)];
    },
    generateSideWallUV: function (t, e, n, r, i, a) {
      var o = e[3 * n];
      var s = e[3 * n + 1];
      var l = e[3 * n + 2];
      var u = e[3 * r];
      var c = e[3 * r + 1];
      var h = e[3 * r + 2];
      var d = e[3 * i];
      var f = e[3 * i + 1];
      var p = e[3 * i + 2];
      var m = e[3 * a];
      var v = e[3 * a + 1];
      var g = e[3 * a + 2];
      return Math.abs(s - c) < 0.01 ? [new ft(o, 1 - l), new ft(u, 1 - h), new ft(d, 1 - p), new ft(m, 1 - g)] : [new ft(s, 1 - l), new ft(c, 1 - h), new ft(f, 1 - p), new ft(v, 1 - g)];
    }
  };
  var cs = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "ExtrudeGeometry";
      r.parameters = {
        shapes: e,
        options: n
      };
      r.fromBufferGeometry(new ls(e, n));
      r.mergeVertices();
      return r;
    }
    ct(e, t);
    e.prototype.toJSON = function () {
      var e = t.prototype.toJSON.call(this);
      return function (t, e, n) {
        n.shapes = [];
        if (Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) {
          var a = t[r];
          n.shapes.push(a.uuid);
        } else n.shapes.push(t.uuid);
        if (void 0 !== e.extrudePath) {
          n.options.extrudePath = e.extrudePath.toJSON();
        }
        return n;
      }(this.parameters.shapes, this.parameters.options, e);
    };
    return e;
  }(yo);
  var hs = function (t) {
    function e(e, n) {
      var r;
      var i = (1 + Math.sqrt(5)) / 2;
      var a = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
      (r = t.call(this, a, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, n) || this).type = "IcosahedronBufferGeometry";
      r.parameters = {
        radius: e,
        detail: n
      };
      return r;
    }
    ct(e, t);
    return e;
  }(Mo);
  var ds = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "IcosahedronGeometry";
      r.parameters = {
        radius: e,
        detail: n
      };
      r.fromBufferGeometry(new hs(e, n));
      r.mergeVertices();
      return r;
    }
    ct(e, t);
    return e;
  }(yo);
  var fs = function (t) {
    function e(e, n, r, i) {
      var a;
      (a = t.call(this) || this).type = "LatheBufferGeometry";
      a.parameters = {
        points: e,
        segments: n,
        phiStart: r,
        phiLength: i
      };
      n = Math.floor(n) || 12;
      r = r || 0;
      i = i || 2 * Math.PI;
      i = st.clamp(i, 0, 2 * Math.PI);
      for (o = [], s = [], l = [], u = 1 / n, c = new wt(), h = new ft(), d = 0, void 0; d <= n; d++) {
        var o;
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        for (f = r + d * u * i, p = Math.sin(f), m = Math.cos(f), v = 0, void 0; v <= e.length - 1; v++) {
          var f;
          var p;
          var m;
          var v;
          c.x = e[v].x * p;
          c.y = e[v].y;
          c.z = e[v].x * m;
          s.push(c.x, c.y, c.z);
          h.x = d / n;
          h.y = v / (e.length - 1);
          l.push(h.x, h.y);
        }
      }
      for (var g = 0; g < n; g++) for (var y = 0; y < e.length - 1; y++) {
        var b = y + g * e.length;
        var x = b;
        var _ = b + e.length;
        var w = b + e.length + 1;
        var S = b + 1;
        o.push(x, _, S);
        o.push(_, w, S);
      }
      a.setIndex(o);
      a.setAttribute("position", new an(s, 3));
      a.setAttribute("uv", new an(l, 2));
      a.computeVertexNormals();
      if (i === 2 * Math.PI) for (var E = a.attributes.normal.array, T = new wt(), M = new wt(), A = new wt(), L = n * e.length * 3, C = 0, P = 0; C < e.length; C++, P += 3) T.x = E[P + 0], T.y = E[P + 1], T.z = E[P + 2], M.x = E[L + P + 0], M.y = E[L + P + 1], M.z = E[L + P + 2], A.addVectors(T, M).normalize(), E[P + 0] = E[L + P + 0] = A.x, E[P + 1] = E[L + P + 1] = A.y, E[P + 2] = E[L + P + 2] = A.z;
      return a;
    }
    ct(e, t);
    return e;
  }(vn);
  var ps = function (t) {
    function e(e, n, r, i) {
      var a;
      (a = t.call(this) || this).type = "LatheGeometry";
      a.parameters = {
        points: e,
        segments: n,
        phiStart: r,
        phiLength: i
      };
      a.fromBufferGeometry(new fs(e, n, r, i));
      a.mergeVertices();
      return a;
    }
    ct(e, t);
    return e;
  }(yo);
  var ms = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, n) || this).type = "OctahedronBufferGeometry";
      r.parameters = {
        radius: e,
        detail: n
      };
      return r;
    }
    ct(e, t);
    return e;
  }(Mo);
  var vs = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "OctahedronGeometry";
      r.parameters = {
        radius: e,
        detail: n
      };
      r.fromBufferGeometry(new ms(e, n));
      r.mergeVertices();
      return r;
    }
    ct(e, t);
    return e;
  }(yo);
  function gs(t, e, n) {
    vn.call(this);
    this.type = "ParametricBufferGeometry";
    this.parameters = {
      func: t,
      slices: e,
      stacks: n
    };
    var r = [];
    var i = [];
    var a = [];
    var o = [];
    var s = 1e-5;
    var l = new wt();
    var u = new wt();
    var c = new wt();
    var h = new wt();
    var d = new wt();
    if (t.length < 3) {
      console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    }
    for (f = e + 1, p = 0, void 0; p <= n; p++) {
      var f;
      var p;
      for (m = p / n, v = 0, void 0; v <= e; v++) {
        var m;
        var v;
        var g = v / e;
        t(g, m, u);
        i.push(u.x, u.y, u.z);
        if (g - s >= 0) {
          t(g - s, m, c);
          h.subVectors(u, c);
        } else {
          t(g + s, m, c);
          h.subVectors(c, u);
        }
        if (m - s >= 0) {
          t(g, m - s, c);
          d.subVectors(u, c);
        } else {
          t(g, m + s, c);
          d.subVectors(c, u);
        }
        l.crossVectors(h, d).normalize();
        a.push(l.x, l.y, l.z);
        o.push(g, m);
      }
    }
    for (var y = 0; y < n; y++) for (var b = 0; b < e; b++) {
      var x = y * f + b;
      var _ = y * f + b + 1;
      var w = (y + 1) * f + b + 1;
      var S = (y + 1) * f + b;
      r.push(x, _, S);
      r.push(_, w, S);
    }
    this.setIndex(r);
    this.setAttribute("position", new an(i, 3));
    this.setAttribute("normal", new an(a, 3));
    this.setAttribute("uv", new an(o, 2));
  }
  function ys(t, e, n) {
    yo.call(this);
    this.type = "ParametricGeometry";
    this.parameters = {
      func: t,
      slices: e,
      stacks: n
    };
    this.fromBufferGeometry(new gs(t, e, n));
    this.mergeVertices();
  }
  gs.prototype = Object.create(vn.prototype);
  gs.prototype.constructor = gs;
  ys.prototype = Object.create(yo.prototype);
  ys.prototype.constructor = ys;
  var bs = function (t) {
    function e(e, n, r, i) {
      var a;
      (a = t.call(this) || this).type = "PlaneGeometry";
      a.parameters = {
        width: e,
        height: n,
        widthSegments: r,
        heightSegments: i
      };
      a.fromBufferGeometry(new tr(e, n, r, i));
      a.mergeVertices();
      return a;
    }
    ct(e, t);
    return e;
  }(yo);
  var xs = function (t) {
    function e(e, n, r, i) {
      var a;
      (a = t.call(this) || this).type = "PolyhedronGeometry";
      a.parameters = {
        vertices: e,
        indices: n,
        radius: r,
        detail: i
      };
      a.fromBufferGeometry(new Mo(e, n, r, i));
      a.mergeVertices();
      return a;
    }
    ct(e, t);
    return e;
  }(yo);
  var _s = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      (s = t.call(this) || this).type = "RingBufferGeometry";
      s.parameters = {
        innerRadius: e,
        outerRadius: n,
        thetaSegments: r,
        phiSegments: i,
        thetaStart: a,
        thetaLength: o
      };
      e = e || 0.5;
      n = n || 1;
      a = void 0 !== a ? a : 0;
      o = void 0 !== o ? o : 2 * Math.PI;
      r = void 0 !== r ? Math.max(3, r) : 8;
      for (l = [], u = [], c = [], h = [], d = e, f = (n - e) / (i = void 0 !== i ? Math.max(1, i) : 1), p = new wt(), m = new ft(), v = 0, void 0; v <= i; v++) {
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var p;
        var m;
        var v;
        for (var g = 0; g <= r; g++) {
          var y = a + g / r * o;
          p.x = d * Math.cos(y);
          p.y = d * Math.sin(y);
          u.push(p.x, p.y, p.z);
          c.push(0, 0, 1);
          m.x = (p.x / n + 1) / 2;
          m.y = (p.y / n + 1) / 2;
          h.push(m.x, m.y);
        }
        d += f;
      }
      for (var b = 0; b < i; b++) for (x = b * (r + 1), _ = 0, void 0; _ < r; _++) {
        var x;
        var _;
        var w = _ + x;
        var S = w;
        var E = w + r + 1;
        var T = w + r + 2;
        var M = w + 1;
        l.push(S, E, M);
        l.push(E, T, M);
      }
      s.setIndex(l);
      s.setAttribute("position", new an(u, 3));
      s.setAttribute("normal", new an(c, 3));
      s.setAttribute("uv", new an(h, 2));
      return s;
    }
    ct(e, t);
    return e;
  }(vn);
  var ws = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      (s = t.call(this) || this).type = "RingGeometry";
      s.parameters = {
        innerRadius: e,
        outerRadius: n,
        thetaSegments: r,
        phiSegments: i,
        thetaStart: a,
        thetaLength: o
      };
      s.fromBufferGeometry(new _s(e, n, r, i, a, o));
      s.mergeVertices();
      return s;
    }
    ct(e, t);
    return e;
  }(yo);
  var Ss = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "ShapeBufferGeometry";
      r.parameters = {
        shapes: e,
        curveSegments: n
      };
      n = n || 12;
      var i = [];
      var a = [];
      var o = [];
      var s = [];
      var l = 0;
      var u = 0;
      if (!1 === Array.isArray(e)) h(e);else for (var c = 0; c < e.length; c++) {
        h(e[c]);
        r.addGroup(l, u, c);
        l += u;
        u = 0;
      }
      function h(t) {
        var e = a.length / 3;
        var r = t.extractPoints(n);
        var l = r.shape;
        var c = r.holes;
        if (!1 === as.isClockWise(l)) {
          l = l.reverse();
        }
        for (h = 0, d = c.length, void 0; h < d; h++) {
          var h;
          var d;
          var f = c[h];
          if (!0 === as.isClockWise(f)) {
            c[h] = f.reverse();
          }
        }
        for (p = as.triangulateShape(l, c), m = 0, v = c.length, void 0; m < v; m++) {
          var p;
          var m;
          var v;
          var g = c[m];
          l = l.concat(g);
        }
        for (y = 0, b = l.length, void 0; y < b; y++) {
          var y;
          var b;
          var x = l[y];
          a.push(x.x, x.y, 0);
          o.push(0, 0, 1);
          s.push(x.x, x.y);
        }
        for (_ = 0, w = p.length, void 0; _ < w; _++) {
          var _;
          var w;
          var S = p[_];
          var E = S[0] + e;
          var T = S[1] + e;
          var M = S[2] + e;
          i.push(E, T, M);
          u += 3;
        }
      }
      r.setIndex(i);
      r.setAttribute("position", new an(a, 3));
      r.setAttribute("normal", new an(o, 3));
      r.setAttribute("uv", new an(s, 2));
      return r;
    }
    ct(e, t);
    e.prototype.toJSON = function () {
      var t = vn.prototype.toJSON.call(this);
      return function (t, e) {
        e.shapes = [];
        if (Array.isArray(t)) for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          e.shapes.push(i.uuid);
        } else e.shapes.push(t.uuid);
        return e;
      }(this.parameters.shapes, t);
    };
    return e;
  }(vn);
  var Es = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "ShapeGeometry";
      if ("object" == typeof n) {
        console.warn("THREE.ShapeGeometry: Options parameter has been removed.");
        n = n.curveSegments;
      }
      r.parameters = {
        shapes: e,
        curveSegments: n
      };
      r.fromBufferGeometry(new Ss(e, n));
      r.mergeVertices();
      return r;
    }
    ct(e, t);
    e.prototype.toJSON = function () {
      var t = yo.prototype.toJSON.call(this);
      return function (t, e) {
        e.shapes = [];
        if (Array.isArray(t)) for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          e.shapes.push(i.uuid);
        } else e.shapes.push(t.uuid);
        return e;
      }(this.parameters.shapes, t);
    };
    return e;
  }(yo);
  var Ts = function (t) {
    function e(e, n, r, i, a, o, s) {
      var l;
      (l = t.call(this) || this).type = "SphereBufferGeometry";
      l.parameters = {
        radius: e,
        widthSegments: n,
        heightSegments: r,
        phiStart: i,
        phiLength: a,
        thetaStart: o,
        thetaLength: s
      };
      e = e || 1;
      n = Math.max(3, Math.floor(n) || 8);
      r = Math.max(2, Math.floor(r) || 6);
      i = void 0 !== i ? i : 0;
      a = void 0 !== a ? a : 2 * Math.PI;
      o = void 0 !== o ? o : 0;
      s = void 0 !== s ? s : Math.PI;
      for (u = Math.min(o + s, Math.PI), c = 0, h = [], d = new wt(), f = new wt(), p = [], m = [], v = [], g = [], y = 0, void 0; y <= r; y++) {
        var u;
        var c;
        var h;
        var d;
        var f;
        var p;
        var m;
        var v;
        var g;
        var y;
        var b = [];
        var x = y / r;
        var _ = 0;
        if (0 == y && 0 == o) {
          _ = 0.5 / n;
        } else {
          if (y == r && u == Math.PI) {
            _ = -0.5 / n;
          }
        }
        for (var w = 0; w <= n; w++) {
          var S = w / n;
          d.x = -e * Math.cos(i + S * a) * Math.sin(o + x * s);
          d.y = e * Math.cos(o + x * s);
          d.z = e * Math.sin(i + S * a) * Math.sin(o + x * s);
          m.push(d.x, d.y, d.z);
          f.copy(d).normalize();
          v.push(f.x, f.y, f.z);
          g.push(S + _, 1 - x);
          b.push(c++);
        }
        h.push(b);
      }
      for (var E = 0; E < r; E++) for (var T = 0; T < n; T++) {
        var M = h[E][T + 1];
        var A = h[E][T];
        var L = h[E + 1][T];
        var C = h[E + 1][T + 1];
        if (0 !== E || o > 0) {
          p.push(M, A, C);
        }
        if (E !== r - 1 || u < Math.PI) {
          p.push(A, L, C);
        }
      }
      l.setIndex(p);
      l.setAttribute("position", new an(m, 3));
      l.setAttribute("normal", new an(v, 3));
      l.setAttribute("uv", new an(g, 2));
      return l;
    }
    ct(e, t);
    return e;
  }(vn);
  var Ms = function (t) {
    function e(e, n, r, i, a, o, s) {
      var l;
      (l = t.call(this) || this).type = "SphereGeometry";
      l.parameters = {
        radius: e,
        widthSegments: n,
        heightSegments: r,
        phiStart: i,
        phiLength: a,
        thetaStart: o,
        thetaLength: s
      };
      l.fromBufferGeometry(new Ts(e, n, r, i, a, o, s));
      l.mergeVertices();
      return l;
    }
    ct(e, t);
    return e;
  }(yo);
  var As = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, n) || this).type = "TetrahedronBufferGeometry";
      r.parameters = {
        radius: e,
        detail: n
      };
      return r;
    }
    ct(e, t);
    return e;
  }(Mo);
  var Ls = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "TetrahedronGeometry";
      r.parameters = {
        radius: e,
        detail: n
      };
      r.fromBufferGeometry(new As(e, n));
      r.mergeVertices();
      return r;
    }
    ct(e, t);
    return e;
  }(yo);
  var Cs = function (t) {
    function e(e, n) {
      var r;
      var i = (n = n || {}).font;
      if (!i || !i.isFont) {
        console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font.");
        return new vn() || ht(r);
      }
      var a = i.generateShapes(e, n.size);
      n.depth = void 0 !== n.height ? n.height : 50;
      if (void 0 === n.bevelThickness) {
        n.bevelThickness = 10;
      }
      if (void 0 === n.bevelSize) {
        n.bevelSize = 8;
      }
      if (void 0 === n.bevelEnabled) {
        n.bevelEnabled = !1;
      }
      (r = t.call(this, a, n) || this).type = "TextBufferGeometry";
      return r;
    }
    ct(e, t);
    return e;
  }(ls);
  var Ps = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "TextGeometry";
      r.parameters = {
        text: e,
        parameters: n
      };
      r.fromBufferGeometry(new Cs(e, n));
      r.mergeVertices();
      return r;
    }
    ct(e, t);
    return e;
  }(yo);
  var Rs = function (t) {
    function e(e, n, r, i, a) {
      var o;
      (o = t.call(this) || this).type = "TorusBufferGeometry";
      o.parameters = {
        radius: e,
        tube: n,
        radialSegments: r,
        tubularSegments: i,
        arc: a
      };
      e = e || 1;
      n = n || 0.4;
      r = Math.floor(r) || 8;
      i = Math.floor(i) || 6;
      a = a || 2 * Math.PI;
      for (s = [], l = [], u = [], c = [], h = new wt(), d = new wt(), f = new wt(), p = 0, void 0; p <= r; p++) {
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var p;
        for (var m = 0; m <= i; m++) {
          var v = m / i * a;
          var g = p / r * Math.PI * 2;
          d.x = (e + n * Math.cos(g)) * Math.cos(v);
          d.y = (e + n * Math.cos(g)) * Math.sin(v);
          d.z = n * Math.sin(g);
          l.push(d.x, d.y, d.z);
          h.x = e * Math.cos(v);
          h.y = e * Math.sin(v);
          f.subVectors(d, h).normalize();
          u.push(f.x, f.y, f.z);
          c.push(m / i);
          c.push(p / r);
        }
      }
      for (var y = 1; y <= r; y++) for (var b = 1; b <= i; b++) {
        var x = (i + 1) * y + b - 1;
        var _ = (i + 1) * (y - 1) + b - 1;
        var w = (i + 1) * (y - 1) + b;
        var S = (i + 1) * y + b;
        s.push(x, _, S);
        s.push(_, w, S);
      }
      o.setIndex(s);
      o.setAttribute("position", new an(l, 3));
      o.setAttribute("normal", new an(u, 3));
      o.setAttribute("uv", new an(c, 2));
      return o;
    }
    ct(e, t);
    return e;
  }(vn);
  var Os = function (t) {
    function e(e, n, r, i, a) {
      var o;
      (o = t.call(this) || this).type = "TorusGeometry";
      o.parameters = {
        radius: e,
        tube: n,
        radialSegments: r,
        tubularSegments: i,
        arc: a
      };
      o.fromBufferGeometry(new Rs(e, n, r, i, a));
      o.mergeVertices();
      return o;
    }
    ct(e, t);
    return e;
  }(yo);
  var Is = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      (s = t.call(this) || this).type = "TorusKnotBufferGeometry";
      s.parameters = {
        radius: e,
        tube: n,
        tubularSegments: r,
        radialSegments: i,
        p: a,
        q: o
      };
      e = e || 1;
      n = n || 0.4;
      r = Math.floor(r) || 64;
      i = Math.floor(i) || 8;
      a = a || 2;
      o = o || 3;
      for (l = [], u = [], c = [], h = [], d = new wt(), f = new wt(), p = new wt(), m = new wt(), v = new wt(), g = new wt(), y = new wt(), b = 0, void 0; b <= r; ++b) {
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var p;
        var m;
        var v;
        var g;
        var y;
        var b;
        var x = b / r * a * Math.PI * 2;
        R(x, a, o, e, p);
        R(x + 0.01, a, o, e, m);
        g.subVectors(m, p);
        y.addVectors(m, p);
        v.crossVectors(g, y);
        y.crossVectors(v, g);
        v.normalize();
        y.normalize();
        for (var _ = 0; _ <= i; ++_) {
          var w = _ / i * Math.PI * 2;
          var S = -n * Math.cos(w);
          var E = n * Math.sin(w);
          d.x = p.x + (S * y.x + E * v.x);
          d.y = p.y + (S * y.y + E * v.y);
          d.z = p.z + (S * y.z + E * v.z);
          u.push(d.x, d.y, d.z);
          f.subVectors(d, p).normalize();
          c.push(f.x, f.y, f.z);
          h.push(b / r);
          h.push(_ / i);
        }
      }
      for (var T = 1; T <= r; T++) for (var M = 1; M <= i; M++) {
        var A = (i + 1) * (T - 1) + (M - 1);
        var L = (i + 1) * T + (M - 1);
        var C = (i + 1) * T + M;
        var P = (i + 1) * (T - 1) + M;
        l.push(A, L, P);
        l.push(L, C, P);
      }
      function R(t, e, n, r, i) {
        var a = Math.cos(t);
        var o = Math.sin(t);
        var s = n / e * t;
        var l = Math.cos(s);
        i.x = r * (2 + l) * 0.5 * a;
        i.y = r * (2 + l) * o * 0.5;
        i.z = r * Math.sin(s) * 0.5;
      }
      s.setIndex(l);
      s.setAttribute("position", new an(u, 3));
      s.setAttribute("normal", new an(c, 3));
      s.setAttribute("uv", new an(h, 2));
      return s;
    }
    ct(e, t);
    return e;
  }(vn);
  var Ds = function (t) {
    function e(e, n, r, i, a, o, s) {
      var l;
      (l = t.call(this) || this).type = "TorusKnotGeometry";
      l.parameters = {
        radius: e,
        tube: n,
        tubularSegments: r,
        radialSegments: i,
        p: a,
        q: o
      };
      if (void 0 !== s) {
        console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
      }
      l.fromBufferGeometry(new Is(e, n, r, i, a, o));
      l.mergeVertices();
      return l;
    }
    ct(e, t);
    return e;
  }(yo);
  var ks = function (t) {
    function e(e, n, r, i, a) {
      var o;
      (o = t.call(this) || this).type = "TubeBufferGeometry";
      o.parameters = {
        path: e,
        tubularSegments: n,
        radius: r,
        radialSegments: i,
        closed: a
      };
      n = n || 64;
      r = r || 1;
      i = i || 8;
      a = a || !1;
      var s = e.computeFrenetFrames(n, a);
      o.tangents = s.tangents;
      o.normals = s.normals;
      o.binormals = s.binormals;
      var l = new wt();
      var u = new wt();
      var c = new ft();
      var h = new wt();
      var d = [];
      var f = [];
      var p = [];
      var m = [];
      function v(t) {
        h = e.getPointAt(t / n, h);
        for (a = s.normals[t], o = s.binormals[t], c = 0, void 0; c <= i; c++) {
          var a;
          var o;
          var c;
          var p = c / i * Math.PI * 2;
          var m = Math.sin(p);
          var v = -Math.cos(p);
          u.x = v * a.x + m * o.x;
          u.y = v * a.y + m * o.y;
          u.z = v * a.z + m * o.z;
          u.normalize();
          f.push(u.x, u.y, u.z);
          l.x = h.x + r * u.x;
          l.y = h.y + r * u.y;
          l.z = h.z + r * u.z;
          d.push(l.x, l.y, l.z);
        }
      }
      (function () {
        for (var t = 0; t < n; t++) v(t);
        v(!1 === a ? n : 0);
        (function () {
          for (var t = 0; t <= n; t++) for (var e = 0; e <= i; e++) {
            c.x = t / n;
            c.y = e / i;
            p.push(c.x, c.y);
          }
        })();
        (function () {
          for (var t = 1; t <= n; t++) for (var e = 1; e <= i; e++) {
            var r = (i + 1) * (t - 1) + (e - 1);
            var a = (i + 1) * t + (e - 1);
            var o = (i + 1) * t + e;
            var s = (i + 1) * (t - 1) + e;
            m.push(r, a, s);
            m.push(a, o, s);
          }
        })();
      })();
      o.setIndex(m);
      o.setAttribute("position", new an(d, 3));
      o.setAttribute("normal", new an(f, 3));
      o.setAttribute("uv", new an(p, 2));
      return o;
    }
    ct(e, t);
    e.prototype.toJSON = function () {
      var t = vn.prototype.toJSON.call(this);
      t.path = this.parameters.path.toJSON();
      return t;
    };
    return e;
  }(vn);
  var Ns = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      (s = t.call(this) || this).type = "TubeGeometry";
      s.parameters = {
        path: e,
        tubularSegments: n,
        radius: r,
        radialSegments: i,
        closed: a
      };
      if (void 0 !== o) {
        console.warn("THREE.TubeGeometry: taper has been removed.");
      }
      var l = new ks(e, n, r, i, a);
      s.tangents = l.tangents;
      s.normals = l.normals;
      s.binormals = l.binormals;
      s.fromBufferGeometry(l);
      s.mergeVertices();
      return s;
    }
    ct(e, t);
    return e;
  }(yo);
  var Bs = function (t) {
    function e(e) {
      var n;
      (n = t.call(this) || this).type = "WireframeGeometry";
      var r = [];
      var i = [0, 0];
      var a = {};
      var o = ["a", "b", "c"];
      if (e && e.isGeometry) {
        for (s = e.faces, l = 0, u = s.length, void 0; l < u; l++) {
          var s;
          var l;
          var u;
          for (c = s[l], h = 0, void 0; h < 3; h++) {
            var c;
            var h;
            var d = c[o[h]];
            var f = c[o[(h + 1) % 3]];
            i[0] = Math.min(d, f);
            i[1] = Math.max(d, f);
            var p = i[0] + "," + i[1];
            if (void 0 === a[p]) {
              a[p] = {
                index1: i[0],
                index2: i[1]
              };
            }
          }
        }
        for (var m in a) {
          var v = a[m];
          var g = e.vertices[v.index1];
          r.push(g.x, g.y, g.z);
          g = e.vertices[v.index2];
          r.push(g.x, g.y, g.z);
        }
      } else if (e && e.isBufferGeometry) {
        var y = new wt();
        if (null !== e.index) {
          var b = e.attributes.position;
          var x = e.index;
          var _ = e.groups;
          if (0 === _.length) {
            _ = [{
              start: 0,
              count: x.count,
              materialIndex: 0
            }];
          }
          for (w = 0, S = _.length, void 0; w < S; ++w) {
            var w;
            var S;
            for (E = _[w], T = E.start, M = T, A = T + E.count, void 0; M < A; M += 3) {
              var E;
              var T;
              var M;
              var A;
              for (var L = 0; L < 3; L++) {
                var C = x.getX(M + L);
                var P = x.getX(M + (L + 1) % 3);
                i[0] = Math.min(C, P);
                i[1] = Math.max(C, P);
                var R = i[0] + "," + i[1];
                if (void 0 === a[R]) {
                  a[R] = {
                    index1: i[0],
                    index2: i[1]
                  };
                }
              }
            }
          }
          for (var O in a) {
            var I = a[O];
            y.fromBufferAttribute(b, I.index1);
            r.push(y.x, y.y, y.z);
            y.fromBufferAttribute(b, I.index2);
            r.push(y.x, y.y, y.z);
          }
        } else for (D = e.attributes.position, k = 0, N = D.count / 3, void 0; k < N; k++) {
          var D;
          var k;
          var N;
          for (var B = 0; B < 3; B++) {
            var F = 3 * k + B;
            y.fromBufferAttribute(D, F);
            r.push(y.x, y.y, y.z);
            var U = 3 * k + (B + 1) % 3;
            y.fromBufferAttribute(D, U);
            r.push(y.x, y.y, y.z);
          }
        }
      }
      n.setAttribute("position", new an(r, 3));
      return n;
    }
    ct(e, t);
    return e;
  }(vn);
  var Fs = Object.freeze({
    __proto__: null,
    BoxGeometry: bo,
    BoxBufferGeometry: Bn,
    CircleGeometry: _o,
    CircleBufferGeometry: xo,
    ConeGeometry: Eo,
    ConeBufferGeometry: To,
    CylinderGeometry: So,
    CylinderBufferGeometry: wo,
    DodecahedronGeometry: Lo,
    DodecahedronBufferGeometry: Ao,
    EdgesGeometry: Io,
    ExtrudeGeometry: cs,
    ExtrudeBufferGeometry: ls,
    IcosahedronGeometry: ds,
    IcosahedronBufferGeometry: hs,
    LatheGeometry: ps,
    LatheBufferGeometry: fs,
    OctahedronGeometry: vs,
    OctahedronBufferGeometry: ms,
    ParametricGeometry: ys,
    ParametricBufferGeometry: gs,
    PlaneGeometry: bs,
    PlaneBufferGeometry: tr,
    PolyhedronGeometry: xs,
    PolyhedronBufferGeometry: Mo,
    RingGeometry: ws,
    RingBufferGeometry: _s,
    ShapeGeometry: Es,
    ShapeBufferGeometry: Ss,
    SphereGeometry: Ms,
    SphereBufferGeometry: Ts,
    TetrahedronGeometry: Ls,
    TetrahedronBufferGeometry: As,
    TextGeometry: Ps,
    TextBufferGeometry: Cs,
    TorusGeometry: Os,
    TorusBufferGeometry: Rs,
    TorusKnotGeometry: Ds,
    TorusKnotBufferGeometry: Is,
    TubeGeometry: Ns,
    TubeBufferGeometry: ks,
    WireframeGeometry: Bs
  });
  function Us(t) {
    qe.call(this);
    this.type = "ShadowMaterial";
    this.color = new je(0);
    this.transparent = !0;
    this.setValues(t);
  }
  function zs(t) {
    Gn.call(this, t);
    this.type = "RawShaderMaterial";
  }
  function Gs(t) {
    qe.call(this);
    this.defines = {
      STANDARD: ""
    };
    this.type = "MeshStandardMaterial";
    this.color = new je(16777215);
    this.roughness = 1;
    this.metalness = 0;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new je(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new ft(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.roughnessMap = null;
    this.metalnessMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapIntensity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.skinning = !1;
    this.morphTargets = !1;
    this.morphNormals = !1;
    this.vertexTangents = !1;
    this.setValues(t);
  }
  function Hs(t) {
    Gs.call(this);
    this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    };
    this.type = "MeshPhysicalMaterial";
    this.clearcoat = 0;
    this.clearcoatMap = null;
    this.clearcoatRoughness = 0;
    this.clearcoatRoughnessMap = null;
    this.clearcoatNormalScale = new ft(1, 1);
    this.clearcoatNormalMap = null;
    this.reflectivity = 0.5;
    Object.defineProperty(this, "ior", {
      get: function () {
        return (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity);
      },
      set: function (t) {
        this.reflectivity = st.clamp(2.5 * (t - 1) / (t + 1), 0, 1);
      }
    });
    this.sheen = null;
    this.transmission = 0;
    this.transmissionMap = null;
    this.setValues(t);
  }
  function js(t) {
    qe.call(this);
    this.type = "MeshPhongMaterial";
    this.color = new je(16777215);
    this.specular = new je(1118481);
    this.shininess = 30;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new je(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new ft(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.skinning = !1;
    this.morphTargets = !1;
    this.morphNormals = !1;
    this.setValues(t);
  }
  function Vs(t) {
    qe.call(this);
    this.defines = {
      TOON: ""
    };
    this.type = "MeshToonMaterial";
    this.color = new je(16777215);
    this.map = null;
    this.gradientMap = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new je(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new ft(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.skinning = !1;
    this.morphTargets = !1;
    this.morphNormals = !1;
    this.setValues(t);
  }
  function Ws(t) {
    qe.call(this);
    this.type = "MeshNormalMaterial";
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new ft(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.fog = !1;
    this.skinning = !1;
    this.morphTargets = !1;
    this.morphNormals = !1;
    this.setValues(t);
  }
  function qs(t) {
    qe.call(this);
    this.type = "MeshLambertMaterial";
    this.color = new je(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new je(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.skinning = !1;
    this.morphTargets = !1;
    this.morphNormals = !1;
    this.setValues(t);
  }
  function Ys(t) {
    qe.call(this);
    this.defines = {
      MATCAP: ""
    };
    this.type = "MeshMatcapMaterial";
    this.color = new je(16777215);
    this.matcap = null;
    this.map = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new ft(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.skinning = !1;
    this.morphTargets = !1;
    this.morphNormals = !1;
    this.setValues(t);
  }
  function Xs(t) {
    Wa.call(this);
    this.type = "LineDashedMaterial";
    this.scale = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.setValues(t);
  }
  Us.prototype = Object.create(qe.prototype);
  Us.prototype.constructor = Us;
  Us.prototype.isShadowMaterial = !0;
  Us.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.color.copy(t.color);
    return this;
  };
  zs.prototype = Object.create(Gn.prototype);
  zs.prototype.constructor = zs;
  zs.prototype.isRawShaderMaterial = !0;
  Gs.prototype = Object.create(qe.prototype);
  Gs.prototype.constructor = Gs;
  Gs.prototype.isMeshStandardMaterial = !0;
  Gs.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.defines = {
      STANDARD: ""
    };
    this.color.copy(t.color);
    this.roughness = t.roughness;
    this.metalness = t.metalness;
    this.map = t.map;
    this.lightMap = t.lightMap;
    this.lightMapIntensity = t.lightMapIntensity;
    this.aoMap = t.aoMap;
    this.aoMapIntensity = t.aoMapIntensity;
    this.emissive.copy(t.emissive);
    this.emissiveMap = t.emissiveMap;
    this.emissiveIntensity = t.emissiveIntensity;
    this.bumpMap = t.bumpMap;
    this.bumpScale = t.bumpScale;
    this.normalMap = t.normalMap;
    this.normalMapType = t.normalMapType;
    this.normalScale.copy(t.normalScale);
    this.displacementMap = t.displacementMap;
    this.displacementScale = t.displacementScale;
    this.displacementBias = t.displacementBias;
    this.roughnessMap = t.roughnessMap;
    this.metalnessMap = t.metalnessMap;
    this.alphaMap = t.alphaMap;
    this.envMap = t.envMap;
    this.envMapIntensity = t.envMapIntensity;
    this.refractionRatio = t.refractionRatio;
    this.wireframe = t.wireframe;
    this.wireframeLinewidth = t.wireframeLinewidth;
    this.wireframeLinecap = t.wireframeLinecap;
    this.wireframeLinejoin = t.wireframeLinejoin;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    this.morphNormals = t.morphNormals;
    this.vertexTangents = t.vertexTangents;
    return this;
  };
  Hs.prototype = Object.create(Gs.prototype);
  Hs.prototype.constructor = Hs;
  Hs.prototype.isMeshPhysicalMaterial = !0;
  Hs.prototype.copy = function (t) {
    Gs.prototype.copy.call(this, t);
    this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    };
    this.clearcoat = t.clearcoat;
    this.clearcoatMap = t.clearcoatMap;
    this.clearcoatRoughness = t.clearcoatRoughness;
    this.clearcoatRoughnessMap = t.clearcoatRoughnessMap;
    this.clearcoatNormalMap = t.clearcoatNormalMap;
    this.clearcoatNormalScale.copy(t.clearcoatNormalScale);
    this.reflectivity = t.reflectivity;
    if (t.sheen) {
      this.sheen = (this.sheen || new je()).copy(t.sheen);
    } else {
      this.sheen = null;
    }
    this.transmission = t.transmission;
    this.transmissionMap = t.transmissionMap;
    return this;
  };
  js.prototype = Object.create(qe.prototype);
  js.prototype.constructor = js;
  js.prototype.isMeshPhongMaterial = !0;
  js.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.color.copy(t.color);
    this.specular.copy(t.specular);
    this.shininess = t.shininess;
    this.map = t.map;
    this.lightMap = t.lightMap;
    this.lightMapIntensity = t.lightMapIntensity;
    this.aoMap = t.aoMap;
    this.aoMapIntensity = t.aoMapIntensity;
    this.emissive.copy(t.emissive);
    this.emissiveMap = t.emissiveMap;
    this.emissiveIntensity = t.emissiveIntensity;
    this.bumpMap = t.bumpMap;
    this.bumpScale = t.bumpScale;
    this.normalMap = t.normalMap;
    this.normalMapType = t.normalMapType;
    this.normalScale.copy(t.normalScale);
    this.displacementMap = t.displacementMap;
    this.displacementScale = t.displacementScale;
    this.displacementBias = t.displacementBias;
    this.specularMap = t.specularMap;
    this.alphaMap = t.alphaMap;
    this.envMap = t.envMap;
    this.combine = t.combine;
    this.reflectivity = t.reflectivity;
    this.refractionRatio = t.refractionRatio;
    this.wireframe = t.wireframe;
    this.wireframeLinewidth = t.wireframeLinewidth;
    this.wireframeLinecap = t.wireframeLinecap;
    this.wireframeLinejoin = t.wireframeLinejoin;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    this.morphNormals = t.morphNormals;
    return this;
  };
  Vs.prototype = Object.create(qe.prototype);
  Vs.prototype.constructor = Vs;
  Vs.prototype.isMeshToonMaterial = !0;
  Vs.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.color.copy(t.color);
    this.map = t.map;
    this.gradientMap = t.gradientMap;
    this.lightMap = t.lightMap;
    this.lightMapIntensity = t.lightMapIntensity;
    this.aoMap = t.aoMap;
    this.aoMapIntensity = t.aoMapIntensity;
    this.emissive.copy(t.emissive);
    this.emissiveMap = t.emissiveMap;
    this.emissiveIntensity = t.emissiveIntensity;
    this.bumpMap = t.bumpMap;
    this.bumpScale = t.bumpScale;
    this.normalMap = t.normalMap;
    this.normalMapType = t.normalMapType;
    this.normalScale.copy(t.normalScale);
    this.displacementMap = t.displacementMap;
    this.displacementScale = t.displacementScale;
    this.displacementBias = t.displacementBias;
    this.alphaMap = t.alphaMap;
    this.wireframe = t.wireframe;
    this.wireframeLinewidth = t.wireframeLinewidth;
    this.wireframeLinecap = t.wireframeLinecap;
    this.wireframeLinejoin = t.wireframeLinejoin;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    this.morphNormals = t.morphNormals;
    return this;
  };
  Ws.prototype = Object.create(qe.prototype);
  Ws.prototype.constructor = Ws;
  Ws.prototype.isMeshNormalMaterial = !0;
  Ws.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.bumpMap = t.bumpMap;
    this.bumpScale = t.bumpScale;
    this.normalMap = t.normalMap;
    this.normalMapType = t.normalMapType;
    this.normalScale.copy(t.normalScale);
    this.displacementMap = t.displacementMap;
    this.displacementScale = t.displacementScale;
    this.displacementBias = t.displacementBias;
    this.wireframe = t.wireframe;
    this.wireframeLinewidth = t.wireframeLinewidth;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    this.morphNormals = t.morphNormals;
    return this;
  };
  qs.prototype = Object.create(qe.prototype);
  qs.prototype.constructor = qs;
  qs.prototype.isMeshLambertMaterial = !0;
  qs.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.color.copy(t.color);
    this.map = t.map;
    this.lightMap = t.lightMap;
    this.lightMapIntensity = t.lightMapIntensity;
    this.aoMap = t.aoMap;
    this.aoMapIntensity = t.aoMapIntensity;
    this.emissive.copy(t.emissive);
    this.emissiveMap = t.emissiveMap;
    this.emissiveIntensity = t.emissiveIntensity;
    this.specularMap = t.specularMap;
    this.alphaMap = t.alphaMap;
    this.envMap = t.envMap;
    this.combine = t.combine;
    this.reflectivity = t.reflectivity;
    this.refractionRatio = t.refractionRatio;
    this.wireframe = t.wireframe;
    this.wireframeLinewidth = t.wireframeLinewidth;
    this.wireframeLinecap = t.wireframeLinecap;
    this.wireframeLinejoin = t.wireframeLinejoin;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    this.morphNormals = t.morphNormals;
    return this;
  };
  Ys.prototype = Object.create(qe.prototype);
  Ys.prototype.constructor = Ys;
  Ys.prototype.isMeshMatcapMaterial = !0;
  Ys.prototype.copy = function (t) {
    qe.prototype.copy.call(this, t);
    this.defines = {
      MATCAP: ""
    };
    this.color.copy(t.color);
    this.matcap = t.matcap;
    this.map = t.map;
    this.bumpMap = t.bumpMap;
    this.bumpScale = t.bumpScale;
    this.normalMap = t.normalMap;
    this.normalMapType = t.normalMapType;
    this.normalScale.copy(t.normalScale);
    this.displacementMap = t.displacementMap;
    this.displacementScale = t.displacementScale;
    this.displacementBias = t.displacementBias;
    this.alphaMap = t.alphaMap;
    this.skinning = t.skinning;
    this.morphTargets = t.morphTargets;
    this.morphNormals = t.morphNormals;
    return this;
  };
  Xs.prototype = Object.create(Wa.prototype);
  Xs.prototype.constructor = Xs;
  Xs.prototype.isLineDashedMaterial = !0;
  Xs.prototype.copy = function (t) {
    Wa.prototype.copy.call(this, t);
    this.scale = t.scale;
    this.dashSize = t.dashSize;
    this.gapSize = t.gapSize;
    return this;
  };
  var Zs = Object.freeze({
    __proto__: null,
    ShadowMaterial: Us,
    SpriteMaterial: da,
    RawShaderMaterial: zs,
    ShaderMaterial: Gn,
    PointsMaterial: no,
    MeshPhysicalMaterial: Hs,
    MeshStandardMaterial: Gs,
    MeshPhongMaterial: js,
    MeshToonMaterial: Vs,
    MeshNormalMaterial: Ws,
    MeshLambertMaterial: qs,
    MeshDepthMaterial: qi,
    MeshDistanceMaterial: Yi,
    MeshBasicMaterial: Ye,
    MeshMatcapMaterial: Ys,
    LineDashedMaterial: Xs,
    LineBasicMaterial: Wa,
    Material: qe
  });
  var Ks = {
    arraySlice: function (t, e, n) {
      return Ks.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
    },
    convertArray: function (t, e, n) {
      return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
    },
    isTypedArray: function (t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView);
    },
    getKeyframeOrder: function (t) {
      for (e = t.length, n = new Array(e), r = 0, void 0; r !== e; ++r) {
        var e;
        var n;
        var r;
        n[r] = r;
      }
      n.sort(function (e, n) {
        return t[e] - t[n];
      });
      return n;
    },
    sortedArray: function (t, e, n) {
      for (r = t.length, i = new t.constructor(r), a = 0, o = 0, void 0; o !== r; ++a) {
        var r;
        var i;
        var a;
        var o;
        for (s = n[a] * e, l = 0, void 0; l !== e; ++l) {
          var s;
          var l;
          i[o++] = t[s + l];
        }
      }
      return i;
    },
    flattenJSON: function (t, e, n, r) {
      for (i = 1, a = t[0], void 0; void 0 !== a && void 0 === a[r];) {
        var i;
        var a;
        a = t[i++];
      }
      if (void 0 !== a) {
        var o = a[r];
        if (void 0 !== o) if (Array.isArray(o)) do {
          if (void 0 !== (o = a[r])) {
            e.push(a.time);
            n.push.apply(n, o);
          }
          a = t[i++];
        } while (void 0 !== a);else if (void 0 !== o.toArray) do {
          if (void 0 !== (o = a[r])) {
            e.push(a.time);
            o.toArray(n, n.length);
          }
          a = t[i++];
        } while (void 0 !== a);else do {
          if (void 0 !== (o = a[r])) {
            e.push(a.time);
            n.push(o);
          }
          a = t[i++];
        } while (void 0 !== a);
      }
    },
    subclip: function (t, e, n, r, i) {
      i = i || 30;
      var a = t.clone();
      a.name = e;
      for (o = [], s = 0, void 0; s < a.tracks.length; ++s) {
        var o;
        var s;
        for (l = a.tracks[s], u = l.getValueSize(), c = [], h = [], d = 0, void 0; d < l.times.length; ++d) {
          var l;
          var u;
          var c;
          var h;
          var d;
          var f = l.times[d] * i;
          if (!(f < n || f >= r)) {
            c.push(l.times[d]);
            for (var p = 0; p < u; ++p) h.push(l.values[d * u + p]);
          }
        }
        if (0 !== c.length) {
          l.times = Ks.convertArray(c, l.times.constructor);
          l.values = Ks.convertArray(h, l.values.constructor);
          o.push(l);
        }
      }
      a.tracks = o;
      for (m = 1 / 0, v = 0, void 0; v < a.tracks.length; ++v) {
        var m;
        var v;
        if (m > a.tracks[v].times[0]) {
          m = a.tracks[v].times[0];
        }
      }
      for (var g = 0; g < a.tracks.length; ++g) a.tracks[g].shift(-1 * m);
      a.resetDuration();
      return a;
    },
    makeClipAdditive: function (t, e, n, r) {
      if (void 0 === e) {
        e = 0;
      }
      if (void 0 === n) {
        n = t;
      }
      if (void 0 === r || r <= 0) {
        r = 30;
      }
      for (i = n.tracks.length, a = e / r, o = function (e) {
        var r = n.tracks[e];
        var i = r.ValueTypeName;
        if ("bool" === i || "string" === i) return "continue";
        var o = t.tracks.find(function (t) {
          return t.name === r.name && t.ValueTypeName === i;
        });
        if (void 0 === o) return "continue";
        var s = 0;
        var l = r.getValueSize();
        if (r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) {
          s = l / 3;
        }
        var u = 0;
        var c = o.getValueSize();
        if (o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) {
          u = c / 3;
        }
        var h = r.times.length - 1;
        var d = void 0;
        if (a <= r.times[0]) {
          var f = s;
          var p = l - s;
          d = Ks.arraySlice(r.values, f, p);
        } else if (a >= r.times[h]) {
          var m = h * l + s;
          var v = m + l - s;
          d = Ks.arraySlice(r.values, m, v);
        } else {
          var g = r.createInterpolant();
          var y = s;
          var b = l - s;
          g.evaluate(a);
          d = Ks.arraySlice(g.resultBuffer, y, b);
        }
        if ("quaternion" === i) {
          new _t().fromArray(d).normalize().conjugate().toArray(d);
        }
        for (x = o.times.length, _ = 0, void 0; _ < x; ++_) {
          var x;
          var _;
          var w = _ * c + u;
          if ("quaternion" === i) _t.multiplyQuaternionsFlat(o.values, w, d, 0, o.values, w);else for (S = c - 2 * u, E = 0, void 0; E < S; ++E) {
            var S;
            var E;
            o.values[w + E] -= d[E];
          }
        }
      }, s = 0, void 0; s < i; ++s) {
        var i;
        var a;
        var o;
        var s;
        o(s);
      }
      t.blendMode = W;
      return t;
    }
  };
  function Js(t, e, n, r) {
    this.parameterPositions = t;
    this._cachedIndex = 0;
    this.resultBuffer = void 0 !== r ? r : new e.constructor(n);
    this.sampleValues = e;
    this.valueSize = n;
  }
  function $s(t, e, n, r) {
    Js.call(this, t, e, n, r);
    this._weightPrev = -0;
    this._offsetPrev = -0;
    this._weightNext = -0;
    this._offsetNext = -0;
  }
  function Qs(t, e, n, r) {
    Js.call(this, t, e, n, r);
  }
  function tl(t, e, n, r) {
    Js.call(this, t, e, n, r);
  }
  function el(t, e, n, r) {
    if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t;
    this.times = Ks.convertArray(e, this.TimeBufferType);
    this.values = Ks.convertArray(n, this.ValueBufferType);
    this.setInterpolation(r || this.DefaultInterpolation);
  }
  function nl(t, e, n) {
    el.call(this, t, e, n);
  }
  function rl(t, e, n, r) {
    el.call(this, t, e, n, r);
  }
  function il(t, e, n, r) {
    el.call(this, t, e, n, r);
  }
  function al(t, e, n, r) {
    Js.call(this, t, e, n, r);
  }
  function ol(t, e, n, r) {
    el.call(this, t, e, n, r);
  }
  function sl(t, e, n, r) {
    el.call(this, t, e, n, r);
  }
  function ll(t, e, n, r) {
    el.call(this, t, e, n, r);
  }
  function ul(t, e, n, r) {
    this.name = t;
    this.tracks = n;
    this.duration = void 0 !== e ? e : -1;
    this.blendMode = void 0 !== r ? r : V;
    this.uuid = st.generateUUID();
    if (this.duration < 0) {
      this.resetDuration();
    }
  }
  function cl(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    var e = function (t) {
      switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return il;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return ll;
        case "color":
          return rl;
        case "quaternion":
          return ol;
        case "bool":
        case "boolean":
          return nl;
        case "string":
          return sl;
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
    }(t.type);
    if (void 0 === t.times) {
      var n = [];
      var r = [];
      Ks.flattenJSON(t.keys, n, r, "value");
      t.times = n;
      t.values = r;
    }
    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation);
  }
  Object.assign(Js.prototype, {
    evaluate: function (t) {
      var e = this.parameterPositions;
      var n = this._cachedIndex;
      var r = e[n];
      var i = e[n - 1];
      t: {
        e: {
          var a;
          n: {
            r: if (!(t < r)) {
              for (var o = n + 2;;) {
                if (void 0 === r) {
                  if (t < i) break r;
                  n = e.length;
                  this._cachedIndex = n;
                  return this.afterEnd_(n - 1, t, i);
                }
                if (n === o) break;
                i = r;
                if (t < (r = e[++n])) break e;
              }
              a = e.length;
              break n;
            }
            if (t >= i) break t;
            var s = e[1];
            if (t < s) {
              n = 2;
              i = s;
            }
            for (var l = n - 2;;) {
              if (void 0 === i) {
                this._cachedIndex = 0;
                return this.beforeStart_(0, t, r);
              }
              if (n === l) break;
              r = i;
              if (t >= (i = e[--n - 1])) break e;
            }
            a = n;
            n = 0;
          }
          for (; n < a;) {
            var u = n + a >>> 1;
            if (t < e[u]) {
              a = u;
            } else {
              n = u + 1;
            }
          }
          r = e[n];
          if (void 0 === (i = e[n - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, r);
          if (void 0 === r) {
            n = e.length;
            this._cachedIndex = n;
            return this.afterEnd_(n - 1, i, t);
          }
        }
        this._cachedIndex = n;
        this.intervalChanged_(n, i, r);
      }
      return this.interpolate_(n, i, t, r);
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function () {
      return this.settings || this.DefaultSettings_;
    },
    copySampleValue_: function (t) {
      for (e = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = t * r, a = 0, void 0; a !== r; ++a) {
        var e;
        var n;
        var r;
        var i;
        var a;
        e[a] = n[i + a];
      }
      return e;
    },
    interpolate_: function () {
      throw new Error("call to abstract method");
    },
    intervalChanged_: function () {}
  });
  Object.assign(Js.prototype, {
    beforeStart_: Js.prototype.copySampleValue_,
    afterEnd_: Js.prototype.copySampleValue_
  });
  $s.prototype = Object.assign(Object.create(Js.prototype), {
    constructor: $s,
    DefaultSettings_: {
      endingStart: G,
      endingEnd: G
    },
    intervalChanged_: function (t, e, n) {
      var r = this.parameterPositions;
      var i = t - 2;
      var a = t + 1;
      var o = r[i];
      var s = r[a];
      if (void 0 === o) switch (this.getSettings_().endingStart) {
        case H:
          i = t;
          o = 2 * e - n;
          break;
        case j:
          o = e + r[i = r.length - 2] - r[i + 1];
          break;
        default:
          i = t;
          o = n;
      }
      if (void 0 === s) switch (this.getSettings_().endingEnd) {
        case H:
          a = t;
          s = 2 * n - e;
          break;
        case j:
          a = 1;
          s = n + r[1] - r[0];
          break;
        default:
          a = t - 1;
          s = e;
      }
      var l = 0.5 * (n - e);
      var u = this.valueSize;
      this._weightPrev = l / (e - o);
      this._weightNext = l / (s - n);
      this._offsetPrev = i * u;
      this._offsetNext = a * u;
    },
    interpolate_: function (t, e, n, r) {
      for (i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, l = s - o, u = this._offsetPrev, c = this._offsetNext, h = this._weightPrev, d = this._weightNext, f = (n - e) / (r - e), p = f * f, m = p * f, v = -h * m + 2 * h * p - h * f, g = (1 + h) * m + (-1.5 - 2 * h) * p + (-0.5 + h) * f + 1, y = (-1 - d) * m + (1.5 + d) * p + 0.5 * f, b = d * m - d * p, x = 0, void 0; x !== o; ++x) {
        var i;
        var a;
        var o;
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var p;
        var m;
        var v;
        var g;
        var y;
        var b;
        var x;
        i[x] = v * a[u + x] + g * a[l + x] + y * a[s + x] + b * a[c + x];
      }
      return i;
    }
  });
  Qs.prototype = Object.assign(Object.create(Js.prototype), {
    constructor: Qs,
    interpolate_: function (t, e, n, r) {
      for (i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, l = s - o, u = (n - e) / (r - e), c = 1 - u, h = 0, void 0; h !== o; ++h) {
        var i;
        var a;
        var o;
        var s;
        var l;
        var u;
        var c;
        var h;
        i[h] = a[l + h] * c + a[s + h] * u;
      }
      return i;
    }
  });
  tl.prototype = Object.assign(Object.create(Js.prototype), {
    constructor: tl,
    interpolate_: function (t) {
      return this.copySampleValue_(t - 1);
    }
  });
  Object.assign(el, {
    toJSON: function (t) {
      var e;
      var n = t.constructor;
      if (void 0 !== n.toJSON) e = n.toJSON(t);else {
        e = {
          name: t.name,
          times: Ks.convertArray(t.times, Array),
          values: Ks.convertArray(t.values, Array)
        };
        var r = t.getInterpolation();
        if (r !== t.DefaultInterpolation) {
          e.interpolation = r;
        }
      }
      e.type = t.ValueTypeName;
      return e;
    }
  });
  Object.assign(el.prototype, {
    constructor: el,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: U,
    InterpolantFactoryMethodDiscrete: function (t) {
      return new tl(this.times, this.values, this.getValueSize(), t);
    },
    InterpolantFactoryMethodLinear: function (t) {
      return new Qs(this.times, this.values, this.getValueSize(), t);
    },
    InterpolantFactoryMethodSmooth: function (t) {
      return new $s(this.times, this.values, this.getValueSize(), t);
    },
    setInterpolation: function (t) {
      var e;
      switch (t) {
        case F:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case U:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case z:
          e = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e) {
        var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t === this.DefaultInterpolation) throw new Error(n);
          this.setInterpolation(this.DefaultInterpolation);
        }
        console.warn("THREE.KeyframeTrack:", n);
        return this;
      }
      this.createInterpolant = e;
      return this;
    },
    getInterpolation: function () {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return F;
        case this.InterpolantFactoryMethodLinear:
          return U;
        case this.InterpolantFactoryMethodSmooth:
          return z;
      }
    },
    getValueSize: function () {
      return this.values.length / this.times.length;
    },
    shift: function (t) {
      if (0 !== t) for (e = this.times, n = 0, r = e.length, void 0; n !== r; ++n) {
        var e;
        var n;
        var r;
        e[n] += t;
      }
      return this;
    },
    scale: function (t) {
      if (1 !== t) for (e = this.times, n = 0, r = e.length, void 0; n !== r; ++n) {
        var e;
        var n;
        var r;
        e[n] *= t;
      }
      return this;
    },
    trim: function (t, e) {
      for (n = this.times, r = n.length, i = 0, a = r - 1, void 0; i !== r && n[i] < t;) {
        var n;
        var r;
        var i;
        var a;
        ++i;
      }
      for (; -1 !== a && n[a] > e;) --a;
      ++a;
      if (0 !== i || a !== r) {
        i >= a && (i = (a = Math.max(a, 1)) - 1);
        var o = this.getValueSize();
        this.times = Ks.arraySlice(n, i, a), this.values = Ks.arraySlice(this.values, i * o, a * o);
      }
      return this;
    },
    validate: function () {
      var t = !0;
      var e = this.getValueSize();
      if (e - Math.floor(e) != 0) {
        console.error("THREE.KeyframeTrack: Invalid value size in track.", this);
        t = !1;
      }
      var n = this.times;
      var r = this.values;
      var i = n.length;
      if (0 === i) {
        console.error("THREE.KeyframeTrack: Track is empty.", this);
        t = !1;
      }
      for (a = null, o = 0, void 0; o !== i; o++) {
        var a;
        var o;
        var s = n[o];
        if ("number" == typeof s && isNaN(s)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s);
          t = !1;
          break;
        }
        if (null !== a && a > s) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a);
          t = !1;
          break;
        }
        a = s;
      }
      if (void 0 !== r && Ks.isTypedArray(r)) for (l = 0, u = r.length, void 0; l !== u; ++l) {
        var l;
        var u;
        var c = r[l];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, l, c);
          t = !1;
          break;
        }
      }
      return t;
    },
    optimize: function () {
      for (t = Ks.arraySlice(this.times), e = Ks.arraySlice(this.values), n = this.getValueSize(), r = this.getInterpolation() === z, i = t.length - 1, a = 1, o = 1, void 0; o < i; ++o) {
        var t;
        var e;
        var n;
        var r;
        var i;
        var a;
        var o;
        var s = !1;
        var l = t[o];
        if (l !== t[o + 1] && (1 !== o || l !== l[0])) if (r) s = !0;else for (u = o * n, c = u - n, h = u + n, d = 0, void 0; d !== n; ++d) {
          var u;
          var c;
          var h;
          var d;
          var f = e[u + d];
          if (f !== e[c + d] || f !== e[h + d]) {
            s = !0;
            break;
          }
        }
        if (s) {
          if (o !== a) {
            t[a] = t[o];
            for (p = o * n, m = a * n, v = 0, void 0; v !== n; ++v) {
              var p;
              var m;
              var v;
              e[m + v] = e[p + v];
            }
          }
          ++a;
        }
      }
      if (i > 0) {
        t[a] = t[i];
        for (g = i * n, y = a * n, b = 0, void 0; b !== n; ++b) {
          var g;
          var y;
          var b;
          e[y + b] = e[g + b];
        }
        ++a;
      }
      if (a !== t.length) {
        this.times = Ks.arraySlice(t, 0, a);
        this.values = Ks.arraySlice(e, 0, a * n);
      } else {
        this.times = t;
        this.values = e;
      }
      return this;
    },
    clone: function () {
      var t = Ks.arraySlice(this.times, 0);
      var e = Ks.arraySlice(this.values, 0);
      var n = new (0, this.constructor)(this.name, t, e);
      n.createInterpolant = this.createInterpolant;
      return n;
    }
  });
  nl.prototype = Object.assign(Object.create(el.prototype), {
    constructor: nl,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: F,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  });
  rl.prototype = Object.assign(Object.create(el.prototype), {
    constructor: rl,
    ValueTypeName: "color"
  });
  il.prototype = Object.assign(Object.create(el.prototype), {
    constructor: il,
    ValueTypeName: "number"
  });
  al.prototype = Object.assign(Object.create(Js.prototype), {
    constructor: al,
    interpolate_: function (t, e, n, r) {
      for (i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - e) / (r - e), l = t * o, u = l + o, void 0; l !== u; l += 4) {
        var i;
        var a;
        var o;
        var s;
        var l;
        var u;
        _t.slerpFlat(i, 0, a, l - o, a, l, s);
      }
      return i;
    }
  });
  ol.prototype = Object.assign(Object.create(el.prototype), {
    constructor: ol,
    ValueTypeName: "quaternion",
    DefaultInterpolation: U,
    InterpolantFactoryMethodLinear: function (t) {
      return new al(this.times, this.values, this.getValueSize(), t);
    },
    InterpolantFactoryMethodSmooth: void 0
  });
  sl.prototype = Object.assign(Object.create(el.prototype), {
    constructor: sl,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: F,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  });
  ll.prototype = Object.assign(Object.create(el.prototype), {
    constructor: ll,
    ValueTypeName: "vector"
  });
  Object.assign(ul, {
    parse: function (t) {
      for (e = [], n = t.tracks, r = 1 / (t.fps || 1), i = 0, a = n.length, void 0; i !== a; ++i) {
        var e;
        var n;
        var r;
        var i;
        var a;
        e.push(cl(n[i]).scale(r));
      }
      return new ul(t.name, t.duration, e, t.blendMode);
    },
    toJSON: function (t) {
      for (e = [], n = t.tracks, r = {
        name: t.name,
        duration: t.duration,
        tracks: e,
        uuid: t.uuid,
        blendMode: t.blendMode
      }, i = 0, a = n.length, void 0; i !== a; ++i) {
        var e;
        var n;
        var r;
        var i;
        var a;
        e.push(el.toJSON(n[i]));
      }
      return r;
    },
    CreateFromMorphTargetSequence: function (t, e, n, r) {
      for (i = e.length, a = [], o = 0, void 0; o < i; o++) {
        var i;
        var a;
        var o;
        var s = [];
        var l = [];
        s.push((o + i - 1) % i, o, (o + 1) % i);
        l.push(0, 1, 0);
        var u = Ks.getKeyframeOrder(s);
        s = Ks.sortedArray(s, 1, u);
        l = Ks.sortedArray(l, 1, u);
        if (r || 0 !== s[0]) {
          s.push(i);
          l.push(l[0]);
        }
        a.push(new il(".morphTargetInfluences[" + e[o].name + "]", s, l).scale(1 / n));
      }
      return new ul(t, -1, a);
    },
    findByName: function (t, e) {
      var n = t;
      if (!Array.isArray(t)) {
        var r = t;
        n = r.geometry && r.geometry.animations || r.animations;
      }
      for (var i = 0; i < n.length; i++) if (n[i].name === e) return n[i];
      return null;
    },
    CreateClipsFromMorphTargetSequences: function (t, e, n) {
      for (r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length, void 0; a < o; a++) {
        var r;
        var i;
        var a;
        var o;
        var s = t[a];
        var l = s.name.match(i);
        if (l && l.length > 1) {
          var u = l[1];
          var c = r[u];
          if (c) {
            r[u] = c = [];
          }
          c.push(s);
        }
      }
      var h = [];
      for (var d in r) h.push(ul.CreateFromMorphTargetSequence(d, r[d], e, n));
      return h;
    },
    parseAnimation: function (t, e) {
      if (!t) {
        console.error("THREE.AnimationClip: No animation in JSONLoader data.");
        return null;
      }
      for (n = function (t, e, n, r, i) {
        if (0 !== n.length) {
          var a = [];
          var o = [];
          Ks.flattenJSON(n, a, o, r);
          if (0 !== a.length) {
            i.push(new t(e, a, o));
          }
        }
      }, r = [], i = t.name || "default", a = t.fps || 30, o = t.blendMode, s = t.length || -1, l = t.hierarchy || [], u = 0, void 0; u < l.length; u++) {
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var l;
        var u;
        var c = l[u].keys;
        if (c && 0 !== c.length) if (c[0].morphTargets) {
          var h = {};
          var d = void 0;
          for (d = 0; d < c.length; d++) if (c[d].morphTargets) for (var f = 0; f < c[d].morphTargets.length; f++) h[c[d].morphTargets[f]] = -1;
          for (var p in h) {
            for (m = [], v = [], g = 0, void 0; g !== c[d].morphTargets.length; ++g) {
              var m;
              var v;
              var g;
              var y = c[d];
              m.push(y.time);
              v.push(y.morphTarget === p ? 1 : 0);
            }
            r.push(new il(".morphTargetInfluence[" + p + "]", m, v));
          }
          s = h.length * (a || 1);
        } else {
          var b = ".bones[" + e[u].name + "]";
          n(ll, b + ".position", c, "pos", r);
          n(ol, b + ".quaternion", c, "rot", r);
          n(ll, b + ".scale", c, "scl", r);
        }
      }
      return 0 === r.length ? null : new ul(i, s, r, o);
    }
  });
  Object.assign(ul.prototype, {
    resetDuration: function () {
      for (t = 0, e = 0, n = this.tracks.length, void 0; e !== n; ++e) {
        var t;
        var e;
        var n;
        var r = this.tracks[e];
        t = Math.max(t, r.times[r.times.length - 1]);
      }
      this.duration = t;
      return this;
    },
    trim: function () {
      for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
      return this;
    },
    validate: function () {
      for (t = !0, e = 0, void 0; e < this.tracks.length; e++) {
        var t;
        var e;
        t = t && this.tracks[e].validate();
      }
      return t;
    },
    optimize: function () {
      for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
      return this;
    },
    clone: function () {
      for (t = [], e = 0, void 0; e < this.tracks.length; e++) {
        var t;
        var e;
        t.push(this.tracks[e].clone());
      }
      return new ul(this.name, this.duration, t, this.blendMode);
    }
  });
  var hl = {
    enabled: !1,
    files: {},
    add: function (t, e) {
      if (!1 !== this.enabled) {
        this.files[t] = e;
      }
    },
    get: function (t) {
      if (!1 !== this.enabled) return this.files[t];
    },
    remove: function (t) {
      delete this.files[t];
    },
    clear: function () {
      this.files = {};
    }
  };
  function dl(t, e, n) {
    var r = this;
    var i = !1;
    var a = 0;
    var o = 0;
    var s = void 0;
    var l = [];
    this.onStart = void 0;
    this.onLoad = t;
    this.onProgress = e;
    this.onError = n;
    this.itemStart = function (t) {
      o++;
      if (!1 === i && void 0 !== r.onStart) {
        r.onStart(t, a, o);
      }
      i = !0;
    };
    this.itemEnd = function (t) {
      a++;
      if (void 0 !== r.onProgress) {
        r.onProgress(t, a, o);
      }
      if (a === o) {
        i = !1;
        if (void 0 !== r.onLoad) {
          r.onLoad();
        }
      }
    };
    this.itemError = function (t) {
      if (void 0 !== r.onError) {
        r.onError(t);
      }
    };
    this.resolveURL = function (t) {
      return s ? s(t) : t;
    };
    this.setURLModifier = function (t) {
      s = t;
      return this;
    };
    this.addHandler = function (t, e) {
      l.push(t, e);
      return this;
    };
    this.removeHandler = function (t) {
      var e = l.indexOf(t);
      if (-1 !== e) {
        l.splice(e, 2);
      }
      return this;
    };
    this.getHandler = function (t) {
      for (e = 0, n = l.length, void 0; e < n; e += 2) {
        var e;
        var n;
        var r = l[e];
        var i = l[e + 1];
        if (r.global) {
          r.lastIndex = 0;
        }
        if (r.test(t)) return i;
      }
      return null;
    };
  }
  var fl = new dl();
  function pl(t) {
    this.manager = void 0 !== t ? t : fl;
    this.crossOrigin = "anonymous";
    this.withCredentials = !1;
    this.path = "";
    this.resourcePath = "";
    this.requestHeader = {};
  }
  Object.assign(pl.prototype, {
    load: function () {},
    loadAsync: function (t, e) {
      var n = this;
      return new Promise(function (r, i) {
        n.load(t, r, e, i);
      });
    },
    parse: function () {},
    setCrossOrigin: function (t) {
      this.crossOrigin = t;
      return this;
    },
    setWithCredentials: function (t) {
      this.withCredentials = t;
      return this;
    },
    setPath: function (t) {
      this.path = t;
      return this;
    },
    setResourcePath: function (t) {
      this.resourcePath = t;
      return this;
    },
    setRequestHeader: function (t) {
      this.requestHeader = t;
      return this;
    }
  });
  var ml = {};
  function vl(t) {
    pl.call(this, t);
  }
  function gl(t) {
    pl.call(this, t);
  }
  function yl(t) {
    pl.call(this, t);
  }
  function bl(t) {
    pl.call(this, t);
  }
  function xl(t) {
    pl.call(this, t);
  }
  function _l(t) {
    pl.call(this, t);
  }
  function wl(t) {
    pl.call(this, t);
  }
  function Sl() {
    this.type = "Curve";
    this.arcLengthDivisions = 200;
  }
  function El(t, e, n, r, i, a, o, s) {
    Sl.call(this);
    this.type = "EllipseCurve";
    this.aX = t || 0;
    this.aY = e || 0;
    this.xRadius = n || 1;
    this.yRadius = r || 1;
    this.aStartAngle = i || 0;
    this.aEndAngle = a || 2 * Math.PI;
    this.aClockwise = o || !1;
    this.aRotation = s || 0;
  }
  function Tl(t, e, n, r, i, a) {
    El.call(this, t, e, n, n, r, i, a);
    this.type = "ArcCurve";
  }
  function Ml() {
    var t = 0;
    var e = 0;
    var n = 0;
    var r = 0;
    function i(i, a, o, s) {
      t = i;
      e = o;
      n = -3 * i + 3 * a - 2 * o - s;
      r = 2 * i - 2 * a + o + s;
    }
    return {
      initCatmullRom: function (t, e, n, r, a) {
        i(e, n, a * (n - t), a * (r - e));
      },
      initNonuniformCatmullRom: function (t, e, n, r, a, o, s) {
        var l = (e - t) / a - (n - t) / (a + o) + (n - e) / o;
        var u = (n - e) / o - (r - e) / (o + s) + (r - n) / s;
        i(e, n, l *= o, u *= o);
      },
      calc: function (i) {
        var a = i * i;
        return t + e * i + n * a + r * (a * i);
      }
    };
  }
  vl.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: vl,
    load: function (t, e, n, r) {
      if (void 0 === t) {
        t = "";
      }
      if (void 0 !== this.path) {
        t = this.path + t;
      }
      t = this.manager.resolveURL(t);
      var i = this;
      var a = hl.get(t);
      if (void 0 !== a) {
        i.manager.itemStart(t);
        setTimeout(function () {
          if (e) {
            e(a);
          }
          i.manager.itemEnd(t);
        }, 0);
        return a;
      }
      if (void 0 === ml[t]) {
        var o;
        var s = t.match(/^data:(.*?)(;base64)?,(.*)$/);
        if (s) {
          var l = s[1];
          var u = !!s[2];
          var c = s[3];
          c = decodeURIComponent(c);
          if (u) {
            c = atob(c);
          }
          try {
            var h;
            var d = (this.responseType || "").toLowerCase();
            switch (d) {
              case "arraybuffer":
              case "blob":
                for (f = new Uint8Array(c.length), p = 0, void 0; p < c.length; p++) {
                  var f;
                  var p;
                  f[p] = c.charCodeAt(p);
                }
                h = "blob" === d ? new Blob([f.buffer], {
                  type: l
                }) : f.buffer;
                break;
              case "document":
                var m = new DOMParser();
                h = m.parseFromString(c, l);
                break;
              case "json":
                h = JSON.parse(c);
                break;
              default:
                h = c;
            }
            setTimeout(function () {
              if (e) {
                e(h);
              }
              i.manager.itemEnd(t);
            }, 0);
          } catch (e) {
            setTimeout(function () {
              if (r) {
                r(e);
              }
              i.manager.itemError(t);
              i.manager.itemEnd(t);
            }, 0);
          }
        } else {
          for (var v in ml[t] = [], ml[t].push({
            onLoad: e,
            onProgress: n,
            onError: r
          }), (o = new XMLHttpRequest()).open("GET", t, !0), o.addEventListener("load", function (e) {
            var n = this.response;
            var r = ml[t];
            delete ml[t];
            if (200 === this.status || 0 === this.status) {
              0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), hl.add(t, n);
              for (var a = 0, o = r.length; a < o; a++) {
                var s = r[a];
                s.onLoad && s.onLoad(n);
              }
              i.manager.itemEnd(t);
            } else {
              for (var l = 0, u = r.length; l < u; l++) {
                var c = r[l];
                c.onError && c.onError(e);
              }
              i.manager.itemError(t), i.manager.itemEnd(t);
            }
          }, !1), o.addEventListener("progress", function (e) {
            for (n = ml[t], r = 0, i = n.length, void 0; r < i; r++) {
              var n;
              var r;
              var i;
              var a = n[r];
              if (a.onProgress) {
                a.onProgress(e);
              }
            }
          }, !1), o.addEventListener("error", function (e) {
            var n = ml[t];
            delete ml[t];
            for (r = 0, a = n.length, void 0; r < a; r++) {
              var r;
              var a;
              var o = n[r];
              if (o.onError) {
                o.onError(e);
              }
            }
            i.manager.itemError(t);
            i.manager.itemEnd(t);
          }, !1), o.addEventListener("abort", function (e) {
            var n = ml[t];
            delete ml[t];
            for (r = 0, a = n.length, void 0; r < a; r++) {
              var r;
              var a;
              var o = n[r];
              if (o.onError) {
                o.onError(e);
              }
            }
            i.manager.itemError(t);
            i.manager.itemEnd(t);
          }, !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) o.setRequestHeader(v, this.requestHeader[v]);
          o.send(null);
        }
        i.manager.itemStart(t);
        return o;
      }
      ml[t].push({
        onLoad: e,
        onProgress: n,
        onError: r
      });
    },
    setResponseType: function (t) {
      this.responseType = t;
      return this;
    },
    setMimeType: function (t) {
      this.mimeType = t;
      return this;
    }
  });
  gl.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: gl,
    load: function (t, e, n, r) {
      var i = this;
      var a = new vl(i.manager);
      a.setPath(i.path);
      a.setRequestHeader(i.requestHeader);
      a.setWithCredentials(i.withCredentials);
      a.load(t, function (n) {
        try {
          e(i.parse(JSON.parse(n)));
        } catch (e) {
          if (r) {
            r(e);
          } else {
            console.error(e);
          }
          i.manager.itemError(t);
        }
      }, n, r);
    },
    parse: function (t) {
      for (e = [], n = 0, void 0; n < t.length; n++) {
        var e;
        var n;
        var r = ul.parse(t[n]);
        e.push(r);
      }
      return e;
    }
  });
  yl.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: yl,
    load: function (t, e, n, r) {
      var i = this;
      var a = [];
      var o = new co();
      o.image = a;
      var s = new vl(this.manager);
      s.setPath(this.path);
      s.setResponseType("arraybuffer");
      s.setRequestHeader(this.requestHeader);
      s.setWithCredentials(i.withCredentials);
      var l = 0;
      function u(u) {
        s.load(t[u], function (t) {
          var n = i.parse(t, !0);
          a[u] = {
            width: n.width,
            height: n.height,
            format: n.format,
            mipmaps: n.mipmaps
          };
          if (6 === (l += 1)) {
            if (1 === n.mipmapCount) {
              o.minFilter = m;
            }
            o.format = n.format;
            o.needsUpdate = !0;
            if (e) {
              e(o);
            }
          }
        }, n, r);
      }
      if (Array.isArray(t)) for (c = 0, h = t.length, void 0; c < h; ++c) {
        var c;
        var h;
        u(c);
      } else s.load(t, function (t) {
        var n = i.parse(t, !0);
        if (n.isCubemap) for (r = n.mipmaps.length / n.mipmapCount, s = 0, void 0; s < r; s++) {
          var r;
          var s;
          a[s] = {
            mipmaps: []
          };
          for (var l = 0; l < n.mipmapCount; l++) {
            a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + l]);
            a[s].format = n.format;
            a[s].width = n.width;
            a[s].height = n.height;
          }
        } else {
          o.image.width = n.width;
          o.image.height = n.height;
          o.mipmaps = n.mipmaps;
        }
        if (1 === n.mipmapCount) {
          o.minFilter = m;
        }
        o.format = n.format;
        o.needsUpdate = !0;
        if (e) {
          e(o);
        }
      }, n, r);
      return o;
    }
  });
  bl.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: bl,
    load: function (t, e, n, r) {
      if (void 0 !== this.path) {
        t = this.path + t;
      }
      t = this.manager.resolveURL(t);
      var i = this;
      var a = hl.get(t);
      if (void 0 !== a) {
        i.manager.itemStart(t);
        setTimeout(function () {
          if (e) {
            e(a);
          }
          i.manager.itemEnd(t);
        }, 0);
        return a;
      }
      var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
      function s() {
        o.removeEventListener("load", s, !1);
        o.removeEventListener("error", l, !1);
        hl.add(t, this);
        if (e) {
          e(this);
        }
        i.manager.itemEnd(t);
      }
      function l(e) {
        o.removeEventListener("load", s, !1);
        o.removeEventListener("error", l, !1);
        if (r) {
          r(e);
        }
        i.manager.itemError(t);
        i.manager.itemEnd(t);
      }
      o.addEventListener("load", s, !1);
      o.addEventListener("error", l, !1);
      if ("data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin) {
        o.crossOrigin = this.crossOrigin;
      }
      i.manager.itemStart(t);
      o.src = t;
      return o;
    }
  });
  xl.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: xl,
    load: function (t, e, n, r) {
      var i = new qn();
      var a = new bl(this.manager);
      a.setCrossOrigin(this.crossOrigin);
      a.setPath(this.path);
      var o = 0;
      function s(n) {
        a.load(t[n], function (t) {
          i.images[n] = t;
          if (6 == ++o) {
            i.needsUpdate = !0;
            if (e) {
              e(i);
            }
          }
        }, void 0, r);
      }
      for (var l = 0; l < t.length; ++l) s(l);
      return i;
    }
  });
  _l.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: _l,
    load: function (t, e, n, r) {
      var i = this;
      var a = new Xn();
      var o = new vl(this.manager);
      o.setResponseType("arraybuffer");
      o.setRequestHeader(this.requestHeader);
      o.setPath(this.path);
      o.setWithCredentials(i.withCredentials);
      o.load(t, function (t) {
        var n = i.parse(t);
        if (n) {
          if (void 0 !== n.image) {
            a.image = n.image;
          } else {
            if (void 0 !== n.data) {
              a.image.width = n.width;
              a.image.height = n.height;
              a.image.data = n.data;
            }
          }
          a.wrapS = void 0 !== n.wrapS ? n.wrapS : c;
          a.wrapT = void 0 !== n.wrapT ? n.wrapT : c;
          a.magFilter = void 0 !== n.magFilter ? n.magFilter : m;
          a.minFilter = void 0 !== n.minFilter ? n.minFilter : m;
          a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1;
          if (void 0 !== n.format) {
            a.format = n.format;
          }
          if (void 0 !== n.type) {
            a.type = n.type;
          }
          if (void 0 !== n.mipmaps) {
            a.mipmaps = n.mipmaps;
            a.minFilter = g;
          }
          if (1 === n.mipmapCount) {
            a.minFilter = m;
          }
          a.needsUpdate = !0;
          if (e) {
            e(a, n);
          }
        }
      }, n, r);
      return a;
    }
  });
  wl.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: wl,
    load: function (t, e, n, r) {
      var i = new gt();
      var a = new bl(this.manager);
      a.setCrossOrigin(this.crossOrigin);
      a.setPath(this.path);
      a.load(t, function (n) {
        i.image = n;
        var r = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
        i.format = r ? E : T;
        i.needsUpdate = !0;
        if (void 0 !== e) {
          e(i);
        }
      }, n, r);
      return i;
    }
  });
  Object.assign(Sl.prototype, {
    getPoint: function () {
      console.warn("THREE.Curve: .getPoint() not implemented.");
      return null;
    },
    getPointAt: function (t, e) {
      var n = this.getUtoTmapping(t);
      return this.getPoint(n, e);
    },
    getPoints: function (t) {
      if (void 0 === t) {
        t = 5;
      }
      for (e = [], n = 0, void 0; n <= t; n++) {
        var e;
        var n;
        e.push(this.getPoint(n / t));
      }
      return e;
    },
    getSpacedPoints: function (t) {
      if (void 0 === t) {
        t = 5;
      }
      for (e = [], n = 0, void 0; n <= t; n++) {
        var e;
        var n;
        e.push(this.getPointAt(n / t));
      }
      return e;
    },
    getLength: function () {
      var t = this.getLengths();
      return t[t.length - 1];
    },
    getLengths: function (t) {
      if (void 0 === t) {
        t = this.arcLengthDivisions;
      }
      if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var e;
      var n = [];
      var r = this.getPoint(0);
      var i = 0;
      n.push(0);
      for (var a = 1; a <= t; a++) {
        i += (e = this.getPoint(a / t)).distanceTo(r);
        n.push(i);
        r = e;
      }
      this.cacheArcLengths = n;
      return n;
    },
    updateArcLengths: function () {
      this.needsUpdate = !0;
      this.getLengths();
    },
    getUtoTmapping: function (t, e) {
      var n;
      var r = this.getLengths();
      var i = 0;
      var a = r.length;
      n = e || t * r[a - 1];
      for (s = 0, l = a - 1, void 0; s <= l;) {
        var o;
        var s;
        var l;
        if ((o = r[i = Math.floor(s + (l - s) / 2)] - n) < 0) s = i + 1;else {
          if (!(o > 0)) {
            l = i;
            break;
          }
          l = i - 1;
        }
      }
      if (r[i = l] === n) return i / (a - 1);
      var u = r[i];
      return (i + (n - u) / (r[i + 1] - u)) / (a - 1);
    },
    getTangent: function (t, e) {
      var n = 1e-4;
      var r = t - n;
      var i = t + n;
      if (r < 0) {
        r = 0;
      }
      if (i > 1) {
        i = 1;
      }
      var a = this.getPoint(r);
      var o = this.getPoint(i);
      var s = e || (a.isVector2 ? new ft() : new wt());
      s.copy(o).sub(a).normalize();
      return s;
    },
    getTangentAt: function (t, e) {
      var n = this.getUtoTmapping(t);
      return this.getTangent(n, e);
    },
    computeFrenetFrames: function (t, e) {
      for (n = new wt(), r = [], i = [], a = [], o = new wt(), s = new Kt(), l = 0, void 0; l <= t; l++) {
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var l;
        var u = l / t;
        r[l] = this.getTangentAt(u, new wt());
        r[l].normalize();
      }
      i[0] = new wt();
      a[0] = new wt();
      var c = Number.MAX_VALUE;
      var h = Math.abs(r[0].x);
      var d = Math.abs(r[0].y);
      var f = Math.abs(r[0].z);
      if (h <= c) {
        c = h;
        n.set(1, 0, 0);
      }
      if (d <= c) {
        c = d;
        n.set(0, 1, 0);
      }
      if (f <= c) {
        n.set(0, 0, 1);
      }
      o.crossVectors(r[0], n).normalize();
      i[0].crossVectors(r[0], o);
      a[0].crossVectors(r[0], i[0]);
      for (var p = 1; p <= t; p++) {
        i[p] = i[p - 1].clone();
        a[p] = a[p - 1].clone();
        o.crossVectors(r[p - 1], r[p]);
        if (o.length() > Number.EPSILON) {
          o.normalize();
          var m = Math.acos(st.clamp(r[p - 1].dot(r[p]), -1, 1));
          i[p].applyMatrix4(s.makeRotationAxis(o, m));
        }
        a[p].crossVectors(r[p], i[p]);
      }
      if (!0 === e) {
        var v = Math.acos(st.clamp(i[0].dot(i[t]), -1, 1));
        v /= t;
        if (r[0].dot(o.crossVectors(i[0], i[t])) > 0) {
          v = -v;
        }
        for (var g = 1; g <= t; g++) {
          i[g].applyMatrix4(s.makeRotationAxis(r[g], v * g));
          a[g].crossVectors(r[g], i[g]);
        }
      }
      return {
        tangents: r,
        normals: i,
        binormals: a
      };
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (t) {
      this.arcLengthDivisions = t.arcLengthDivisions;
      return this;
    },
    toJSON: function () {
      var t = {
        metadata: {
          version: 4.5,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      t.arcLengthDivisions = this.arcLengthDivisions;
      t.type = this.type;
      return t;
    },
    fromJSON: function (t) {
      this.arcLengthDivisions = t.arcLengthDivisions;
      return this;
    }
  });
  El.prototype = Object.create(Sl.prototype);
  El.prototype.constructor = El;
  El.prototype.isEllipseCurve = !0;
  El.prototype.getPoint = function (t, e) {
    for (n = e || new ft(), r = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON, void 0; i < 0;) {
      var n;
      var r;
      var i;
      var a;
      i += r;
    }
    for (; i > r;) i -= r;
    if (i < Number.EPSILON) {
      i = a ? 0 : r;
    }
    if (!0 !== this.aClockwise || a) {
      if (i === r) {
        i = -r;
      } else {
        i -= r;
      }
    }
    var o = this.aStartAngle + t * i;
    var s = this.aX + this.xRadius * Math.cos(o);
    var l = this.aY + this.yRadius * Math.sin(o);
    if (0 !== this.aRotation) {
      var u = Math.cos(this.aRotation);
      var c = Math.sin(this.aRotation);
      var h = s - this.aX;
      var d = l - this.aY;
      s = h * u - d * c + this.aX;
      l = h * c + d * u + this.aY;
    }
    return n.set(s, l);
  };
  El.prototype.copy = function (t) {
    Sl.prototype.copy.call(this, t);
    this.aX = t.aX;
    this.aY = t.aY;
    this.xRadius = t.xRadius;
    this.yRadius = t.yRadius;
    this.aStartAngle = t.aStartAngle;
    this.aEndAngle = t.aEndAngle;
    this.aClockwise = t.aClockwise;
    this.aRotation = t.aRotation;
    return this;
  };
  El.prototype.toJSON = function () {
    var t = Sl.prototype.toJSON.call(this);
    t.aX = this.aX;
    t.aY = this.aY;
    t.xRadius = this.xRadius;
    t.yRadius = this.yRadius;
    t.aStartAngle = this.aStartAngle;
    t.aEndAngle = this.aEndAngle;
    t.aClockwise = this.aClockwise;
    t.aRotation = this.aRotation;
    return t;
  };
  El.prototype.fromJSON = function (t) {
    Sl.prototype.fromJSON.call(this, t);
    this.aX = t.aX;
    this.aY = t.aY;
    this.xRadius = t.xRadius;
    this.yRadius = t.yRadius;
    this.aStartAngle = t.aStartAngle;
    this.aEndAngle = t.aEndAngle;
    this.aClockwise = t.aClockwise;
    this.aRotation = t.aRotation;
    return this;
  };
  Tl.prototype = Object.create(El.prototype);
  Tl.prototype.constructor = Tl;
  Tl.prototype.isArcCurve = !0;
  var Al = new wt();
  var Ll = new Ml();
  var Cl = new Ml();
  var Pl = new Ml();
  function Rl(t, e, n, r) {
    Sl.call(this);
    this.type = "CatmullRomCurve3";
    this.points = t || [];
    this.closed = e || !1;
    this.curveType = n || "centripetal";
    this.tension = void 0 !== r ? r : 0.5;
  }
  function Ol(t, e, n, r, i) {
    var a = 0.5 * (r - e);
    var o = 0.5 * (i - n);
    var s = t * t;
    return (2 * n - 2 * r + a + o) * (t * s) + (-3 * n + 3 * r - 2 * a - o) * s + a * t + n;
  }
  function Il(t, e, n, r) {
    return function (t, e) {
      var n = 1 - t;
      return n * n * e;
    }(t, e) + function (t, e) {
      return 2 * (1 - t) * t * e;
    }(t, n) + function (t, e) {
      return t * t * e;
    }(t, r);
  }
  function Dl(t, e, n, r, i) {
    return function (t, e) {
      var n = 1 - t;
      return n * n * n * e;
    }(t, e) + function (t, e) {
      var n = 1 - t;
      return 3 * n * n * t * e;
    }(t, n) + function (t, e) {
      return 3 * (1 - t) * t * t * e;
    }(t, r) + function (t, e) {
      return t * t * t * e;
    }(t, i);
  }
  function kl(t, e, n, r) {
    Sl.call(this);
    this.type = "CubicBezierCurve";
    this.v0 = t || new ft();
    this.v1 = e || new ft();
    this.v2 = n || new ft();
    this.v3 = r || new ft();
  }
  function Nl(t, e, n, r) {
    Sl.call(this);
    this.type = "CubicBezierCurve3";
    this.v0 = t || new wt();
    this.v1 = e || new wt();
    this.v2 = n || new wt();
    this.v3 = r || new wt();
  }
  function Bl(t, e) {
    Sl.call(this);
    this.type = "LineCurve";
    this.v1 = t || new ft();
    this.v2 = e || new ft();
  }
  function Fl(t, e) {
    Sl.call(this);
    this.type = "LineCurve3";
    this.v1 = t || new wt();
    this.v2 = e || new wt();
  }
  function Ul(t, e, n) {
    Sl.call(this);
    this.type = "QuadraticBezierCurve";
    this.v0 = t || new ft();
    this.v1 = e || new ft();
    this.v2 = n || new ft();
  }
  function zl(t, e, n) {
    Sl.call(this);
    this.type = "QuadraticBezierCurve3";
    this.v0 = t || new wt();
    this.v1 = e || new wt();
    this.v2 = n || new wt();
  }
  function Gl(t) {
    Sl.call(this);
    this.type = "SplineCurve";
    this.points = t || [];
  }
  Rl.prototype = Object.create(Sl.prototype);
  Rl.prototype.constructor = Rl;
  Rl.prototype.isCatmullRomCurve3 = !0;
  Rl.prototype.getPoint = function (t, e) {
    var n;
    var r;
    var i = e || new wt();
    var a = this.points;
    var o = a.length;
    var s = (o - (this.closed ? 0 : 1)) * t;
    var l = Math.floor(s);
    var u = s - l;
    if (this.closed) {
      l += l > 0 ? 0 : (Math.floor(Math.abs(l) / o) + 1) * o;
    } else {
      if (0 === u && l === o - 1) {
        l = o - 2;
        u = 1;
      }
    }
    if (this.closed || l > 0) {
      n = a[(l - 1) % o];
    } else {
      Al.subVectors(a[0], a[1]).add(a[0]);
      n = Al;
    }
    var c = a[l % o];
    var h = a[(l + 1) % o];
    if (this.closed || l + 2 < o) {
      r = a[(l + 2) % o];
    } else {
      Al.subVectors(a[o - 1], a[o - 2]).add(a[o - 1]);
      r = Al;
    }
    if ("centripetal" === this.curveType || "chordal" === this.curveType) {
      var d = "chordal" === this.curveType ? 0.5 : 0.25,
        f = Math.pow(n.distanceToSquared(c), d),
        p = Math.pow(c.distanceToSquared(h), d),
        m = Math.pow(h.distanceToSquared(r), d);
      p < 1e-4 && (p = 1), f < 1e-4 && (f = p), m < 1e-4 && (m = p), Ll.initNonuniformCatmullRom(n.x, c.x, h.x, r.x, f, p, m), Cl.initNonuniformCatmullRom(n.y, c.y, h.y, r.y, f, p, m), Pl.initNonuniformCatmullRom(n.z, c.z, h.z, r.z, f, p, m);
    } else "catmullrom" === this.curveType && (Ll.initCatmullRom(n.x, c.x, h.x, r.x, this.tension), Cl.initCatmullRom(n.y, c.y, h.y, r.y, this.tension), Pl.initCatmullRom(n.z, c.z, h.z, r.z, this.tension));
    i.set(Ll.calc(u), Cl.calc(u), Pl.calc(u));
    return i;
  };
  Rl.prototype.copy = function (t) {
    Sl.prototype.copy.call(this, t);
    this.points = [];
    for (e = 0, n = t.points.length, void 0; e < n; e++) {
      var e;
      var n;
      var r = t.points[e];
      this.points.push(r.clone());
    }
    this.closed = t.closed;
    this.curveType = t.curveType;
    this.tension = t.tension;
    return this;
  };
  Rl.prototype.toJSON = function () {
    var t = Sl.prototype.toJSON.call(this);
    t.points = [];
    for (e = 0, n = this.points.length, void 0; e < n; e++) {
      var e;
      var n;
      var r = this.points[e];
      t.points.push(r.toArray());
    }
    t.closed = this.closed;
    t.curveType = this.curveType;
    t.tension = this.tension;
    return t;
  };
  Rl.prototype.fromJSON = function (t) {
    Sl.prototype.fromJSON.call(this, t);
    this.points = [];
    for (e = 0, n = t.points.length, void 0; e < n; e++) {
      var e;
      var n;
      var r = t.points[e];
      this.points.push(new wt().fromArray(r));
    }
    this.closed = t.closed;
    this.curveType = t.curveType;
    this.tension = t.tension;
    return this;
  };
  kl.prototype = Object.create(Sl.prototype);
  kl.prototype.constructor = kl;
  kl.prototype.isCubicBezierCurve = !0;
  kl.prototype.getPoint = function (t, e) {
    var n = e || new ft();
    var r = this.v0;
    var i = this.v1;
    var a = this.v2;
    var o = this.v3;
    n.set(Dl(t, r.x, i.x, a.x, o.x), Dl(t, r.y, i.y, a.y, o.y));
    return n;
  };
  kl.prototype.copy = function (t) {
    Sl.prototype.copy.call(this, t);
    this.v0.copy(t.v0);
    this.v1.copy(t.v1);
    this.v2.copy(t.v2);
    this.v3.copy(t.v3);
    return this;
  };
  kl.prototype.toJSON = function () {
    var t = Sl.prototype.toJSON.call(this);
    t.v0 = this.v0.toArray();
    t.v1 = this.v1.toArray();
    t.v2 = this.v2.toArray();
    t.v3 = this.v3.toArray();
    return t;
  };
  kl.prototype.fromJSON = function (t) {
    Sl.prototype.fromJSON.call(this, t);
    this.v0.fromArray(t.v0);
    this.v1.fromArray(t.v1);
    this.v2.fromArray(t.v2);
    this.v3.fromArray(t.v3);
    return this;
  };
  Nl.prototype = Object.create(Sl.prototype);
  Nl.prototype.constructor = Nl;
  Nl.prototype.isCubicBezierCurve3 = !0;
  Nl.prototype.getPoint = function (t, e) {
    var n = e || new wt();
    var r = this.v0;
    var i = this.v1;
    var a = this.v2;
    var o = this.v3;
    n.set(Dl(t, r.x, i.x, a.x, o.x), Dl(t, r.y, i.y, a.y, o.y), Dl(t, r.z, i.z, a.z, o.z));
    return n;
  };
  Nl.prototype.copy = function (t) {
    Sl.prototype.copy.call(this, t);
    this.v0.copy(t.v0);
    this.v1.copy(t.v1);
    this.v2.copy(t.v2);
    this.v3.copy(t.v3);
    return this;
  };
  Nl.prototype.toJSON = function () {
    var t = Sl.prototype.toJSON.call(this);
    t.v0 = this.v0.toArray();
    t.v1 = this.v1.toArray();
    t.v2 = this.v2.toArray();
    t.v3 = this.v3.toArray();
    return t;
  };
  Nl.prototype.fromJSON = function (t) {
    Sl.prototype.fromJSON.call(this, t);
    this.v0.fromArray(t.v0);
    this.v1.fromArray(t.v1);
    this.v2.fromArray(t.v2);
    this.v3.fromArray(t.v3);
    return this;
  };
  Bl.prototype = Object.create(Sl.prototype);
  Bl.prototype.constructor = Bl;
  Bl.prototype.isLineCurve = !0;
  Bl.prototype.getPoint = function (t, e) {
    var n = e || new ft();
    if (1 === t) {
      n.copy(this.v2);
    } else {
      n.copy(this.v2).sub(this.v1);
      n.multiplyScalar(t).add(this.v1);
    }
    return n;
  };
  Bl.prototype.getPointAt = function (t, e) {
    return this.getPoint(t, e);
  };
  Bl.prototype.getTangent = function (t, e) {
    var n = e || new ft();
    n.copy(this.v2).sub(this.v1).normalize();
    return n;
  };
  Bl.prototype.copy = function (t) {
    Sl.prototype.copy.call(this, t);
    this.v1.copy(t.v1);
    this.v2.copy(t.v2);
    return this;
  };
  Bl.prototype.toJSON = function () {
    var t = Sl.prototype.toJSON.call(this);
    t.v1 = this.v1.toArray();
    t.v2 = this.v2.toArray();
    return t;
  };
  Bl.prototype.fromJSON = function (t) {
    Sl.prototype.fromJSON.call(this, t);
    this.v1.fromArray(t.v1);
    this.v2.fromArray(t.v2);
    return this;
  };
  Fl.prototype = Object.create(Sl.prototype);
  Fl.prototype.constructor = Fl;
  Fl.prototype.isLineCurve3 = !0;
  Fl.prototype.getPoint = function (t, e) {
    var n = e || new wt();
    if (1 === t) {
      n.copy(this.v2);
    } else {
      n.copy(this.v2).sub(this.v1);
      n.multiplyScalar(t).add(this.v1);
    }
    return n;
  };
  Fl.prototype.getPointAt = function (t, e) {
    return this.getPoint(t, e);
  };
  Fl.prototype.copy = function (t) {
    Sl.prototype.copy.call(this, t);
    this.v1.copy(t.v1);
    this.v2.copy(t.v2);
    return this;
  };
  Fl.prototype.toJSON = function () {
    var t = Sl.prototype.toJSON.call(this);
    t.v1 = this.v1.toArray();
    t.v2 = this.v2.toArray();
    return t;
  };
  Fl.prototype.fromJSON = function (t) {
    Sl.prototype.fromJSON.call(this, t);
    this.v1.fromArray(t.v1);
    this.v2.fromArray(t.v2);
    return this;
  };
  Ul.prototype = Object.create(Sl.prototype);
  Ul.prototype.constructor = Ul;
  Ul.prototype.isQuadraticBezierCurve = !0;
  Ul.prototype.getPoint = function (t, e) {
    var n = e || new ft();
    var r = this.v0;
    var i = this.v1;
    var a = this.v2;
    n.set(Il(t, r.x, i.x, a.x), Il(t, r.y, i.y, a.y));
    return n;
  };
  Ul.prototype.copy = function (t) {
    Sl.prototype.copy.call(this, t);
    this.v0.copy(t.v0);
    this.v1.copy(t.v1);
    this.v2.copy(t.v2);
    return this;
  };
  Ul.prototype.toJSON = function () {
    var t = Sl.prototype.toJSON.call(this);
    t.v0 = this.v0.toArray();
    t.v1 = this.v1.toArray();
    t.v2 = this.v2.toArray();
    return t;
  };
  Ul.prototype.fromJSON = function (t) {
    Sl.prototype.fromJSON.call(this, t);
    this.v0.fromArray(t.v0);
    this.v1.fromArray(t.v1);
    this.v2.fromArray(t.v2);
    return this;
  };
  zl.prototype = Object.create(Sl.prototype);
  zl.prototype.constructor = zl;
  zl.prototype.isQuadraticBezierCurve3 = !0;
  zl.prototype.getPoint = function (t, e) {
    var n = e || new wt();
    var r = this.v0;
    var i = this.v1;
    var a = this.v2;
    n.set(Il(t, r.x, i.x, a.x), Il(t, r.y, i.y, a.y), Il(t, r.z, i.z, a.z));
    return n;
  };
  zl.prototype.copy = function (t) {
    Sl.prototype.copy.call(this, t);
    this.v0.copy(t.v0);
    this.v1.copy(t.v1);
    this.v2.copy(t.v2);
    return this;
  };
  zl.prototype.toJSON = function () {
    var t = Sl.prototype.toJSON.call(this);
    t.v0 = this.v0.toArray();
    t.v1 = this.v1.toArray();
    t.v2 = this.v2.toArray();
    return t;
  };
  zl.prototype.fromJSON = function (t) {
    Sl.prototype.fromJSON.call(this, t);
    this.v0.fromArray(t.v0);
    this.v1.fromArray(t.v1);
    this.v2.fromArray(t.v2);
    return this;
  };
  Gl.prototype = Object.create(Sl.prototype);
  Gl.prototype.constructor = Gl;
  Gl.prototype.isSplineCurve = !0;
  Gl.prototype.getPoint = function (t, e) {
    var n = e || new ft();
    var r = this.points;
    var i = (r.length - 1) * t;
    var a = Math.floor(i);
    var o = i - a;
    var s = r[0 === a ? a : a - 1];
    var l = r[a];
    var u = r[a > r.length - 2 ? r.length - 1 : a + 1];
    var c = r[a > r.length - 3 ? r.length - 1 : a + 2];
    n.set(Ol(o, s.x, l.x, u.x, c.x), Ol(o, s.y, l.y, u.y, c.y));
    return n;
  };
  Gl.prototype.copy = function (t) {
    Sl.prototype.copy.call(this, t);
    this.points = [];
    for (e = 0, n = t.points.length, void 0; e < n; e++) {
      var e;
      var n;
      var r = t.points[e];
      this.points.push(r.clone());
    }
    return this;
  };
  Gl.prototype.toJSON = function () {
    var t = Sl.prototype.toJSON.call(this);
    t.points = [];
    for (e = 0, n = this.points.length, void 0; e < n; e++) {
      var e;
      var n;
      var r = this.points[e];
      t.points.push(r.toArray());
    }
    return t;
  };
  Gl.prototype.fromJSON = function (t) {
    Sl.prototype.fromJSON.call(this, t);
    this.points = [];
    for (e = 0, n = t.points.length, void 0; e < n; e++) {
      var e;
      var n;
      var r = t.points[e];
      this.points.push(new ft().fromArray(r));
    }
    return this;
  };
  var Hl = Object.freeze({
    __proto__: null,
    ArcCurve: Tl,
    CatmullRomCurve3: Rl,
    CubicBezierCurve: kl,
    CubicBezierCurve3: Nl,
    EllipseCurve: El,
    LineCurve: Bl,
    LineCurve3: Fl,
    QuadraticBezierCurve: Ul,
    QuadraticBezierCurve3: zl,
    SplineCurve: Gl
  });
  function jl() {
    Sl.call(this);
    this.type = "CurvePath";
    this.curves = [];
    this.autoClose = !1;
  }
  function Vl(t) {
    jl.call(this);
    this.type = "Path";
    this.currentPoint = new ft();
    if (t) {
      this.setFromPoints(t);
    }
  }
  function Wl(t) {
    Vl.call(this, t);
    this.uuid = st.generateUUID();
    this.type = "Shape";
    this.holes = [];
  }
  function ql(t, e) {
    _e.call(this);
    this.type = "Light";
    this.color = new je(t);
    this.intensity = void 0 !== e ? e : 1;
  }
  function Yl(t, e, n) {
    ql.call(this, t, n);
    this.type = "HemisphereLight";
    this.position.copy(_e.DefaultUp);
    this.updateMatrix();
    this.groundColor = new je(e);
  }
  function Xl(t) {
    this.camera = t;
    this.bias = 0;
    this.normalBias = 0;
    this.radius = 1;
    this.mapSize = new ft(512, 512);
    this.map = null;
    this.mapPass = null;
    this.matrix = new Kt();
    this.autoUpdate = !0;
    this.needsUpdate = !1;
    this._frustum = new Jn();
    this._frameExtents = new ft(1, 1);
    this._viewportCount = 1;
    this._viewports = [new yt(0, 0, 1, 1)];
  }
  function Zl() {
    Xl.call(this, new jn(50, 1, 0.5, 500));
    this.focus = 1;
  }
  function Kl(t, e, n, r, i, a) {
    ql.call(this, t, e);
    this.type = "SpotLight";
    this.position.copy(_e.DefaultUp);
    this.updateMatrix();
    this.target = new _e();
    Object.defineProperty(this, "power", {
      get: function () {
        return this.intensity * Math.PI;
      },
      set: function (t) {
        this.intensity = t / Math.PI;
      }
    });
    this.distance = void 0 !== n ? n : 0;
    this.angle = void 0 !== r ? r : Math.PI / 3;
    this.penumbra = void 0 !== i ? i : 0;
    this.decay = void 0 !== a ? a : 1;
    this.shadow = new Zl();
  }
  function Jl() {
    Xl.call(this, new jn(90, 1, 0.5, 500));
    this._frameExtents = new ft(4, 2);
    this._viewportCount = 6;
    this._viewports = [new yt(2, 1, 1, 1), new yt(0, 1, 1, 1), new yt(3, 1, 1, 1), new yt(1, 1, 1, 1), new yt(3, 0, 1, 1), new yt(1, 0, 1, 1)];
    this._cubeDirections = [new wt(1, 0, 0), new wt(-1, 0, 0), new wt(0, 0, 1), new wt(0, 0, -1), new wt(0, 1, 0), new wt(0, -1, 0)];
    this._cubeUps = [new wt(0, 1, 0), new wt(0, 1, 0), new wt(0, 1, 0), new wt(0, 1, 0), new wt(0, 0, 1), new wt(0, 0, -1)];
  }
  function $l(t, e, n, r) {
    ql.call(this, t, e);
    this.type = "PointLight";
    Object.defineProperty(this, "power", {
      get: function () {
        return 4 * this.intensity * Math.PI;
      },
      set: function (t) {
        this.intensity = t / (4 * Math.PI);
      }
    });
    this.distance = void 0 !== n ? n : 0;
    this.decay = void 0 !== r ? r : 1;
    this.shadow = new Jl();
  }
  function Ql(t, e, n, r, i, a) {
    Hn.call(this);
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = void 0 !== t ? t : -1;
    this.right = void 0 !== e ? e : 1;
    this.top = void 0 !== n ? n : 1;
    this.bottom = void 0 !== r ? r : -1;
    this.near = void 0 !== i ? i : 0.1;
    this.far = void 0 !== a ? a : 2e3;
    this.updateProjectionMatrix();
  }
  function tu() {
    Xl.call(this, new Ql(-5, 5, 5, -5, 0.5, 500));
  }
  function eu(t, e) {
    ql.call(this, t, e);
    this.type = "DirectionalLight";
    this.position.copy(_e.DefaultUp);
    this.updateMatrix();
    this.target = new _e();
    this.shadow = new tu();
  }
  function nu(t, e) {
    ql.call(this, t, e);
    this.type = "AmbientLight";
  }
  function ru(t, e, n, r) {
    ql.call(this, t, e);
    this.type = "RectAreaLight";
    this.width = void 0 !== n ? n : 10;
    this.height = void 0 !== r ? r : 10;
  }
  jl.prototype = Object.assign(Object.create(Sl.prototype), {
    constructor: jl,
    add: function (t) {
      this.curves.push(t);
    },
    closePath: function () {
      var t = this.curves[0].getPoint(0);
      var e = this.curves[this.curves.length - 1].getPoint(1);
      if (t.equals(e)) {
        this.curves.push(new Bl(e, t));
      }
    },
    getPoint: function (t) {
      for (e = t * this.getLength(), n = this.getCurveLengths(), r = 0, void 0; r < n.length;) {
        var e;
        var n;
        var r;
        if (n[r] >= e) {
          var i = n[r] - e;
          var a = this.curves[r];
          var o = a.getLength();
          var s = 0 === o ? 0 : 1 - i / o;
          return a.getPointAt(s);
        }
        r++;
      }
      return null;
    },
    getLength: function () {
      var t = this.getCurveLengths();
      return t[t.length - 1];
    },
    updateArcLengths: function () {
      this.needsUpdate = !0;
      this.cacheLengths = null;
      this.getCurveLengths();
    },
    getCurveLengths: function () {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      for (t = [], e = 0, n = 0, r = this.curves.length, void 0; n < r; n++) {
        var t;
        var e;
        var n;
        var r;
        e += this.curves[n].getLength();
        t.push(e);
      }
      this.cacheLengths = t;
      return t;
    },
    getSpacedPoints: function (t) {
      if (void 0 === t) {
        t = 40;
      }
      for (e = [], n = 0, void 0; n <= t; n++) {
        var e;
        var n;
        e.push(this.getPoint(n / t));
      }
      if (this.autoClose) {
        e.push(e[0]);
      }
      return e;
    },
    getPoints: function (t) {
      t = t || 12;
      for (n = [], r = 0, i = this.curves, void 0; r < i.length; r++) {
        var e;
        var n;
        var r;
        var i;
        for (a = i[r], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), l = 0, void 0; l < s.length; l++) {
          var a;
          var o;
          var s;
          var l;
          var u = s[l];
          if (e && e.equals(u)) {
            n.push(u);
            e = u;
          }
        }
      }
      if (this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0])) {
        n.push(n[0]);
      }
      return n;
    },
    copy: function (t) {
      Sl.prototype.copy.call(this, t);
      this.curves = [];
      for (e = 0, n = t.curves.length, void 0; e < n; e++) {
        var e;
        var n;
        var r = t.curves[e];
        this.curves.push(r.clone());
      }
      this.autoClose = t.autoClose;
      return this;
    },
    toJSON: function () {
      var t = Sl.prototype.toJSON.call(this);
      t.autoClose = this.autoClose;
      t.curves = [];
      for (e = 0, n = this.curves.length, void 0; e < n; e++) {
        var e;
        var n;
        var r = this.curves[e];
        t.curves.push(r.toJSON());
      }
      return t;
    },
    fromJSON: function (t) {
      Sl.prototype.fromJSON.call(this, t);
      this.autoClose = t.autoClose;
      this.curves = [];
      for (e = 0, n = t.curves.length, void 0; e < n; e++) {
        var e;
        var n;
        var r = t.curves[e];
        this.curves.push(new Hl[r.type]().fromJSON(r));
      }
      return this;
    }
  });
  Vl.prototype = Object.assign(Object.create(jl.prototype), {
    constructor: Vl,
    setFromPoints: function (t) {
      this.moveTo(t[0].x, t[0].y);
      for (e = 1, n = t.length, void 0; e < n; e++) {
        var e;
        var n;
        this.lineTo(t[e].x, t[e].y);
      }
      return this;
    },
    moveTo: function (t, e) {
      this.currentPoint.set(t, e);
      return this;
    },
    lineTo: function (t, e) {
      var n = new Bl(this.currentPoint.clone(), new ft(t, e));
      this.curves.push(n);
      this.currentPoint.set(t, e);
      return this;
    },
    quadraticCurveTo: function (t, e, n, r) {
      var i = new Ul(this.currentPoint.clone(), new ft(t, e), new ft(n, r));
      this.curves.push(i);
      this.currentPoint.set(n, r);
      return this;
    },
    bezierCurveTo: function (t, e, n, r, i, a) {
      var o = new kl(this.currentPoint.clone(), new ft(t, e), new ft(n, r), new ft(i, a));
      this.curves.push(o);
      this.currentPoint.set(i, a);
      return this;
    },
    splineThru: function (t) {
      var e = new Gl([this.currentPoint.clone()].concat(t));
      this.curves.push(e);
      this.currentPoint.copy(t[t.length - 1]);
      return this;
    },
    arc: function (t, e, n, r, i, a) {
      var o = this.currentPoint.x;
      var s = this.currentPoint.y;
      this.absarc(t + o, e + s, n, r, i, a);
      return this;
    },
    absarc: function (t, e, n, r, i, a) {
      this.absellipse(t, e, n, n, r, i, a);
      return this;
    },
    ellipse: function (t, e, n, r, i, a, o, s) {
      var l = this.currentPoint.x;
      var u = this.currentPoint.y;
      this.absellipse(t + l, e + u, n, r, i, a, o, s);
      return this;
    },
    absellipse: function (t, e, n, r, i, a, o, s) {
      var l = new El(t, e, n, r, i, a, o, s);
      if (this.curves.length > 0) {
        var u = l.getPoint(0);
        if (u.equals(this.currentPoint)) {
          this.lineTo(u.x, u.y);
        }
      }
      this.curves.push(l);
      var c = l.getPoint(1);
      this.currentPoint.copy(c);
      return this;
    },
    copy: function (t) {
      jl.prototype.copy.call(this, t);
      this.currentPoint.copy(t.currentPoint);
      return this;
    },
    toJSON: function () {
      var t = jl.prototype.toJSON.call(this);
      t.currentPoint = this.currentPoint.toArray();
      return t;
    },
    fromJSON: function (t) {
      jl.prototype.fromJSON.call(this, t);
      this.currentPoint.fromArray(t.currentPoint);
      return this;
    }
  });
  Wl.prototype = Object.assign(Object.create(Vl.prototype), {
    constructor: Wl,
    getPointsHoles: function (t) {
      for (e = [], n = 0, r = this.holes.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        e[n] = this.holes[n].getPoints(t);
      }
      return e;
    },
    extractPoints: function (t) {
      return {
        shape: this.getPoints(t),
        holes: this.getPointsHoles(t)
      };
    },
    copy: function (t) {
      Vl.prototype.copy.call(this, t);
      this.holes = [];
      for (e = 0, n = t.holes.length, void 0; e < n; e++) {
        var e;
        var n;
        var r = t.holes[e];
        this.holes.push(r.clone());
      }
      return this;
    },
    toJSON: function () {
      var t = Vl.prototype.toJSON.call(this);
      t.uuid = this.uuid;
      t.holes = [];
      for (e = 0, n = this.holes.length, void 0; e < n; e++) {
        var e;
        var n;
        var r = this.holes[e];
        t.holes.push(r.toJSON());
      }
      return t;
    },
    fromJSON: function (t) {
      Vl.prototype.fromJSON.call(this, t);
      this.uuid = t.uuid;
      this.holes = [];
      for (e = 0, n = t.holes.length, void 0; e < n; e++) {
        var e;
        var n;
        var r = t.holes[e];
        this.holes.push(new Vl().fromJSON(r));
      }
      return this;
    }
  });
  ql.prototype = Object.assign(Object.create(_e.prototype), {
    constructor: ql,
    isLight: !0,
    copy: function (t) {
      _e.prototype.copy.call(this, t);
      this.color.copy(t.color);
      this.intensity = t.intensity;
      return this;
    },
    toJSON: function (t) {
      var e = _e.prototype.toJSON.call(this, t);
      e.object.color = this.color.getHex();
      e.object.intensity = this.intensity;
      if (void 0 !== this.groundColor) {
        e.object.groundColor = this.groundColor.getHex();
      }
      if (void 0 !== this.distance) {
        e.object.distance = this.distance;
      }
      if (void 0 !== this.angle) {
        e.object.angle = this.angle;
      }
      if (void 0 !== this.decay) {
        e.object.decay = this.decay;
      }
      if (void 0 !== this.penumbra) {
        e.object.penumbra = this.penumbra;
      }
      if (void 0 !== this.shadow) {
        e.object.shadow = this.shadow.toJSON();
      }
      return e;
    }
  });
  Yl.prototype = Object.assign(Object.create(ql.prototype), {
    constructor: Yl,
    isHemisphereLight: !0,
    copy: function (t) {
      ql.prototype.copy.call(this, t);
      this.groundColor.copy(t.groundColor);
      return this;
    }
  });
  Object.assign(Xl.prototype, {
    _projScreenMatrix: new Kt(),
    _lightPositionWorld: new wt(),
    _lookTarget: new wt(),
    getViewportCount: function () {
      return this._viewportCount;
    },
    getFrustum: function () {
      return this._frustum;
    },
    updateMatrices: function (t) {
      var e = this.camera;
      var n = this.matrix;
      var r = this._projScreenMatrix;
      var i = this._lookTarget;
      var a = this._lightPositionWorld;
      a.setFromMatrixPosition(t.matrixWorld);
      e.position.copy(a);
      i.setFromMatrixPosition(t.target.matrixWorld);
      e.lookAt(i);
      e.updateMatrixWorld();
      r.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse);
      this._frustum.setFromProjectionMatrix(r);
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
      n.multiply(e.projectionMatrix);
      n.multiply(e.matrixWorldInverse);
    },
    getViewport: function (t) {
      return this._viewports[t];
    },
    getFrameExtents: function () {
      return this._frameExtents;
    },
    copy: function (t) {
      this.camera = t.camera.clone();
      this.bias = t.bias;
      this.radius = t.radius;
      this.mapSize.copy(t.mapSize);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    toJSON: function () {
      var t = {};
      if (0 !== this.bias) {
        t.bias = this.bias;
      }
      if (0 !== this.normalBias) {
        t.normalBias = this.normalBias;
      }
      if (1 !== this.radius) {
        t.radius = this.radius;
      }
      if (512 === this.mapSize.x && 512 === this.mapSize.y) {
        t.mapSize = this.mapSize.toArray();
      }
      t.camera = this.camera.toJSON(!1).object;
      delete t.camera.matrix;
      return t;
    }
  });
  Zl.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: Zl,
    isSpotLightShadow: !0,
    updateMatrices: function (t) {
      var e = this.camera;
      var n = 2 * st.RAD2DEG * t.angle * this.focus;
      var r = this.mapSize.width / this.mapSize.height;
      var i = t.distance || e.far;
      if (n === e.fov && r === e.aspect && i === e.far) {
        e.fov = n;
        e.aspect = r;
        e.far = i;
        e.updateProjectionMatrix();
      }
      Xl.prototype.updateMatrices.call(this, t);
    }
  });
  Kl.prototype = Object.assign(Object.create(ql.prototype), {
    constructor: Kl,
    isSpotLight: !0,
    copy: function (t) {
      ql.prototype.copy.call(this, t);
      this.distance = t.distance;
      this.angle = t.angle;
      this.penumbra = t.penumbra;
      this.decay = t.decay;
      this.target = t.target.clone();
      this.shadow = t.shadow.clone();
      return this;
    }
  });
  Jl.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: Jl,
    isPointLightShadow: !0,
    updateMatrices: function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      var n = this.camera;
      var r = this.matrix;
      var i = this._lightPositionWorld;
      var a = this._lookTarget;
      var o = this._projScreenMatrix;
      i.setFromMatrixPosition(t.matrixWorld);
      n.position.copy(i);
      a.copy(n.position);
      a.add(this._cubeDirections[e]);
      n.up.copy(this._cubeUps[e]);
      n.lookAt(a);
      n.updateMatrixWorld();
      r.makeTranslation(-i.x, -i.y, -i.z);
      o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse);
      this._frustum.setFromProjectionMatrix(o);
    }
  });
  $l.prototype = Object.assign(Object.create(ql.prototype), {
    constructor: $l,
    isPointLight: !0,
    copy: function (t) {
      ql.prototype.copy.call(this, t);
      this.distance = t.distance;
      this.decay = t.decay;
      this.shadow = t.shadow.clone();
      return this;
    }
  });
  Ql.prototype = Object.assign(Object.create(Hn.prototype), {
    constructor: Ql,
    isOrthographicCamera: !0,
    copy: function (t, e) {
      Hn.prototype.copy.call(this, t, e);
      this.left = t.left;
      this.right = t.right;
      this.top = t.top;
      this.bottom = t.bottom;
      this.near = t.near;
      this.far = t.far;
      this.zoom = t.zoom;
      this.view = null === t.view ? null : Object.assign({}, t.view);
      return this;
    },
    setViewOffset: function (t, e, n, r, i, a) {
      if (null === this.view) {
        this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        };
      }
      this.view.enabled = !0;
      this.view.fullWidth = t;
      this.view.fullHeight = e;
      this.view.offsetX = n;
      this.view.offsetY = r;
      this.view.width = i;
      this.view.height = a;
      this.updateProjectionMatrix();
    },
    clearViewOffset: function () {
      if (null !== this.view) {
        this.view.enabled = !1;
      }
      this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function () {
      var t = (this.right - this.left) / (2 * this.zoom);
      var e = (this.top - this.bottom) / (2 * this.zoom);
      var n = (this.right + this.left) / 2;
      var r = (this.top + this.bottom) / 2;
      var i = n - t;
      var a = n + t;
      var o = r + e;
      var s = r - e;
      if (null !== this.view && this.view.enabled) {
        var l = (this.right - this.left) / this.view.fullWidth / this.zoom;
        var u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        a = (i += l * this.view.offsetX) + l * this.view.width;
        s = (o -= u * this.view.offsetY) - u * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far);
      this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON: function (t) {
      var e = _e.prototype.toJSON.call(this, t);
      e.object.zoom = this.zoom;
      e.object.left = this.left;
      e.object.right = this.right;
      e.object.top = this.top;
      e.object.bottom = this.bottom;
      e.object.near = this.near;
      e.object.far = this.far;
      if (null !== this.view) {
        e.object.view = Object.assign({}, this.view);
      }
      return e;
    }
  });
  tu.prototype = Object.assign(Object.create(Xl.prototype), {
    constructor: tu,
    isDirectionalLightShadow: !0,
    updateMatrices: function (t) {
      Xl.prototype.updateMatrices.call(this, t);
    }
  });
  eu.prototype = Object.assign(Object.create(ql.prototype), {
    constructor: eu,
    isDirectionalLight: !0,
    copy: function (t) {
      ql.prototype.copy.call(this, t);
      this.target = t.target.clone();
      this.shadow = t.shadow.clone();
      return this;
    }
  });
  nu.prototype = Object.assign(Object.create(ql.prototype), {
    constructor: nu,
    isAmbientLight: !0
  });
  ru.prototype = Object.assign(Object.create(ql.prototype), {
    constructor: ru,
    isRectAreaLight: !0,
    copy: function (t) {
      ql.prototype.copy.call(this, t);
      this.width = t.width;
      this.height = t.height;
      return this;
    },
    toJSON: function (t) {
      var e = ql.prototype.toJSON.call(this, t);
      e.object.width = this.width;
      e.object.height = this.height;
      return e;
    }
  });
  var iu = function () {
    function t() {
      Object.defineProperty(this, "isSphericalHarmonics3", {
        value: !0
      });
      this.coefficients = [];
      for (var t = 0; t < 9; t++) this.coefficients.push(new wt());
    }
    var e = t.prototype;
    e.set = function (t) {
      for (var e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
      return this;
    };
    e.zero = function () {
      for (var t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
      return this;
    };
    e.getAt = function (t, e) {
      var n = t.x;
      var r = t.y;
      var i = t.z;
      var a = this.coefficients;
      e.copy(a[0]).multiplyScalar(0.282095);
      e.addScaledVector(a[1], 0.488603 * r);
      e.addScaledVector(a[2], 0.488603 * i);
      e.addScaledVector(a[3], 0.488603 * n);
      e.addScaledVector(a[4], n * r * 1.092548);
      e.addScaledVector(a[5], r * i * 1.092548);
      e.addScaledVector(a[6], 0.315392 * (3 * i * i - 1));
      e.addScaledVector(a[7], n * i * 1.092548);
      e.addScaledVector(a[8], 0.546274 * (n * n - r * r));
      return e;
    };
    e.getIrradianceAt = function (t, e) {
      var n = t.x;
      var r = t.y;
      var i = t.z;
      var a = this.coefficients;
      e.copy(a[0]).multiplyScalar(0.886227);
      e.addScaledVector(a[1], 1.023328 * r);
      e.addScaledVector(a[2], 1.023328 * i);
      e.addScaledVector(a[3], 1.023328 * n);
      e.addScaledVector(a[4], 0.858086 * n * r);
      e.addScaledVector(a[5], 0.858086 * r * i);
      e.addScaledVector(a[6], 0.743125 * i * i - 0.247708);
      e.addScaledVector(a[7], 0.858086 * n * i);
      e.addScaledVector(a[8], 0.429043 * (n * n - r * r));
      return e;
    };
    e.add = function (t) {
      for (var e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
      return this;
    };
    e.addScaledSH = function (t, e) {
      for (var n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e);
      return this;
    };
    e.scale = function (t) {
      for (var e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
      return this;
    };
    e.lerp = function (t, e) {
      for (var n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
      return this;
    };
    e.equals = function (t) {
      for (var e = 0; e < 9; e++) if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
      return !0;
    };
    e.copy = function (t) {
      return this.set(t.coefficients);
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.fromArray = function (t, e) {
      if (void 0 === e) {
        e = 0;
      }
      for (n = this.coefficients, r = 0, void 0; r < 9; r++) {
        var n;
        var r;
        n[r].fromArray(t, e + 3 * r);
      }
      return this;
    };
    e.toArray = function (t, e) {
      if (void 0 === t) {
        t = [];
      }
      if (void 0 === e) {
        e = 0;
      }
      for (n = this.coefficients, r = 0, void 0; r < 9; r++) {
        var n;
        var r;
        n[r].toArray(t, e + 3 * r);
      }
      return t;
    };
    t.getBasisAt = function (t, e) {
      var n = t.x;
      var r = t.y;
      var i = t.z;
      e[0] = 0.282095;
      e[1] = 0.488603 * r;
      e[2] = 0.488603 * i;
      e[3] = 0.488603 * n;
      e[4] = 1.092548 * n * r;
      e[5] = 1.092548 * r * i;
      e[6] = 0.315392 * (3 * i * i - 1);
      e[7] = 1.092548 * n * i;
      e[8] = 0.546274 * (n * n - r * r);
    };
    return t;
  }();
  function au(t, e) {
    ql.call(this, void 0, e);
    this.type = "LightProbe";
    this.sh = void 0 !== t ? t : new iu();
  }
  function ou(t) {
    pl.call(this, t);
    this.textures = {};
  }
  au.prototype = Object.assign(Object.create(ql.prototype), {
    constructor: au,
    isLightProbe: !0,
    copy: function (t) {
      ql.prototype.copy.call(this, t);
      this.sh.copy(t.sh);
      return this;
    },
    fromJSON: function (t) {
      this.intensity = t.intensity;
      this.sh.fromArray(t.sh);
      return this;
    },
    toJSON: function (t) {
      var e = ql.prototype.toJSON.call(this, t);
      e.object.sh = this.sh.toArray();
      return e;
    }
  });
  ou.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: ou,
    load: function (t, e, n, r) {
      var i = this;
      var a = new vl(i.manager);
      a.setPath(i.path);
      a.setRequestHeader(i.requestHeader);
      a.setWithCredentials(i.withCredentials);
      a.load(t, function (n) {
        try {
          e(i.parse(JSON.parse(n)));
        } catch (e) {
          if (r) {
            r(e);
          } else {
            console.error(e);
          }
          i.manager.itemError(t);
        }
      }, n, r);
    },
    parse: function (t) {
      var e = this.textures;
      function n(t) {
        if (void 0 === e[t]) {
          console.warn("THREE.MaterialLoader: Undefined texture", t);
        }
        return e[t];
      }
      var r = new Zs[t.type]();
      if (void 0 !== t.uuid) {
        r.uuid = t.uuid;
      }
      if (void 0 !== t.name) {
        r.name = t.name;
      }
      if (void 0 !== t.color && void 0 !== r.color) {
        r.color.setHex(t.color);
      }
      if (void 0 !== t.roughness) {
        r.roughness = t.roughness;
      }
      if (void 0 !== t.metalness) {
        r.metalness = t.metalness;
      }
      if (void 0 !== t.sheen) {
        r.sheen = new je().setHex(t.sheen);
      }
      if (void 0 !== t.emissive && void 0 !== r.emissive) {
        r.emissive.setHex(t.emissive);
      }
      if (void 0 !== t.specular && void 0 !== r.specular) {
        r.specular.setHex(t.specular);
      }
      if (void 0 !== t.shininess) {
        r.shininess = t.shininess;
      }
      if (void 0 !== t.clearcoat) {
        r.clearcoat = t.clearcoat;
      }
      if (void 0 !== t.clearcoatRoughness) {
        r.clearcoatRoughness = t.clearcoatRoughness;
      }
      if (void 0 !== t.fog) {
        r.fog = t.fog;
      }
      if (void 0 !== t.flatShading) {
        r.flatShading = t.flatShading;
      }
      if (void 0 !== t.blending) {
        r.blending = t.blending;
      }
      if (void 0 !== t.combine) {
        r.combine = t.combine;
      }
      if (void 0 !== t.side) {
        r.side = t.side;
      }
      if (void 0 !== t.opacity) {
        r.opacity = t.opacity;
      }
      if (void 0 !== t.transparent) {
        r.transparent = t.transparent;
      }
      if (void 0 !== t.alphaTest) {
        r.alphaTest = t.alphaTest;
      }
      if (void 0 !== t.depthTest) {
        r.depthTest = t.depthTest;
      }
      if (void 0 !== t.depthWrite) {
        r.depthWrite = t.depthWrite;
      }
      if (void 0 !== t.colorWrite) {
        r.colorWrite = t.colorWrite;
      }
      if (void 0 !== t.stencilWrite) {
        r.stencilWrite = t.stencilWrite;
      }
      if (void 0 !== t.stencilWriteMask) {
        r.stencilWriteMask = t.stencilWriteMask;
      }
      if (void 0 !== t.stencilFunc) {
        r.stencilFunc = t.stencilFunc;
      }
      if (void 0 !== t.stencilRef) {
        r.stencilRef = t.stencilRef;
      }
      if (void 0 !== t.stencilFuncMask) {
        r.stencilFuncMask = t.stencilFuncMask;
      }
      if (void 0 !== t.stencilFail) {
        r.stencilFail = t.stencilFail;
      }
      if (void 0 !== t.stencilZFail) {
        r.stencilZFail = t.stencilZFail;
      }
      if (void 0 !== t.stencilZPass) {
        r.stencilZPass = t.stencilZPass;
      }
      if (void 0 !== t.wireframe) {
        r.wireframe = t.wireframe;
      }
      if (void 0 !== t.wireframeLinewidth) {
        r.wireframeLinewidth = t.wireframeLinewidth;
      }
      if (void 0 !== t.wireframeLinecap) {
        r.wireframeLinecap = t.wireframeLinecap;
      }
      if (void 0 !== t.wireframeLinejoin) {
        r.wireframeLinejoin = t.wireframeLinejoin;
      }
      if (void 0 !== t.rotation) {
        r.rotation = t.rotation;
      }
      if (1 !== t.linewidth) {
        r.linewidth = t.linewidth;
      }
      if (void 0 !== t.dashSize) {
        r.dashSize = t.dashSize;
      }
      if (void 0 !== t.gapSize) {
        r.gapSize = t.gapSize;
      }
      if (void 0 !== t.scale) {
        r.scale = t.scale;
      }
      if (void 0 !== t.polygonOffset) {
        r.polygonOffset = t.polygonOffset;
      }
      if (void 0 !== t.polygonOffsetFactor) {
        r.polygonOffsetFactor = t.polygonOffsetFactor;
      }
      if (void 0 !== t.polygonOffsetUnits) {
        r.polygonOffsetUnits = t.polygonOffsetUnits;
      }
      if (void 0 !== t.skinning) {
        r.skinning = t.skinning;
      }
      if (void 0 !== t.morphTargets) {
        r.morphTargets = t.morphTargets;
      }
      if (void 0 !== t.morphNormals) {
        r.morphNormals = t.morphNormals;
      }
      if (void 0 !== t.dithering) {
        r.dithering = t.dithering;
      }
      if (void 0 !== t.vertexTangents) {
        r.vertexTangents = t.vertexTangents;
      }
      if (void 0 !== t.visible) {
        r.visible = t.visible;
      }
      if (void 0 !== t.toneMapped) {
        r.toneMapped = t.toneMapped;
      }
      if (void 0 !== t.userData) {
        r.userData = t.userData;
      }
      if (void 0 !== t.vertexColors) {
        if ("number" == typeof t.vertexColors) {
          r.vertexColors = t.vertexColors > 0;
        } else {
          r.vertexColors = t.vertexColors;
        }
      }
      if (void 0 !== t.uniforms) for (var i in t.uniforms) {
        var a = t.uniforms[i];
        switch (r.uniforms[i] = {}, a.type) {
          case "t":
            r.uniforms[i].value = n(a.value);
            break;
          case "c":
            r.uniforms[i].value = new je().setHex(a.value);
            break;
          case "v2":
            r.uniforms[i].value = new ft().fromArray(a.value);
            break;
          case "v3":
            r.uniforms[i].value = new wt().fromArray(a.value);
            break;
          case "v4":
            r.uniforms[i].value = new yt().fromArray(a.value);
            break;
          case "m3":
            r.uniforms[i].value = new pt().fromArray(a.value);
            break;
          case "m4":
            r.uniforms[i].value = new Kt().fromArray(a.value);
            break;
          default:
            r.uniforms[i].value = a.value;
        }
      }
      if (void 0 !== t.defines) {
        r.defines = t.defines;
      }
      if (void 0 !== t.vertexShader) {
        r.vertexShader = t.vertexShader;
      }
      if (void 0 !== t.fragmentShader) {
        r.fragmentShader = t.fragmentShader;
      }
      if (void 0 !== t.extensions) for (var o in t.extensions) r.extensions[o] = t.extensions[o];
      if (void 0 !== t.shading) {
        r.flatShading = 1 === t.shading;
      }
      if (void 0 !== t.size) {
        r.size = t.size;
      }
      if (void 0 !== t.sizeAttenuation) {
        r.sizeAttenuation = t.sizeAttenuation;
      }
      if (void 0 !== t.map) {
        r.map = n(t.map);
      }
      if (void 0 !== t.matcap) {
        r.matcap = n(t.matcap);
      }
      if (void 0 !== t.alphaMap) {
        r.alphaMap = n(t.alphaMap);
      }
      if (void 0 !== t.bumpMap) {
        r.bumpMap = n(t.bumpMap);
      }
      if (void 0 !== t.bumpScale) {
        r.bumpScale = t.bumpScale;
      }
      if (void 0 !== t.normalMap) {
        r.normalMap = n(t.normalMap);
      }
      if (void 0 !== t.normalMapType) {
        r.normalMapType = t.normalMapType;
      }
      if (void 0 !== t.normalScale) {
        var s = t.normalScale;
        !1 === Array.isArray(s) && (s = [s, s]), r.normalScale = new ft().fromArray(s);
      }
      if (void 0 !== t.displacementMap) {
        r.displacementMap = n(t.displacementMap);
      }
      if (void 0 !== t.displacementScale) {
        r.displacementScale = t.displacementScale;
      }
      if (void 0 !== t.displacementBias) {
        r.displacementBias = t.displacementBias;
      }
      if (void 0 !== t.roughnessMap) {
        r.roughnessMap = n(t.roughnessMap);
      }
      if (void 0 !== t.metalnessMap) {
        r.metalnessMap = n(t.metalnessMap);
      }
      if (void 0 !== t.emissiveMap) {
        r.emissiveMap = n(t.emissiveMap);
      }
      if (void 0 !== t.emissiveIntensity) {
        r.emissiveIntensity = t.emissiveIntensity;
      }
      if (void 0 !== t.specularMap) {
        r.specularMap = n(t.specularMap);
      }
      if (void 0 !== t.envMap) {
        r.envMap = n(t.envMap);
      }
      if (void 0 !== t.envMapIntensity) {
        r.envMapIntensity = t.envMapIntensity;
      }
      if (void 0 !== t.reflectivity) {
        r.reflectivity = t.reflectivity;
      }
      if (void 0 !== t.refractionRatio) {
        r.refractionRatio = t.refractionRatio;
      }
      if (void 0 !== t.lightMap) {
        r.lightMap = n(t.lightMap);
      }
      if (void 0 !== t.lightMapIntensity) {
        r.lightMapIntensity = t.lightMapIntensity;
      }
      if (void 0 !== t.aoMap) {
        r.aoMap = n(t.aoMap);
      }
      if (void 0 !== t.aoMapIntensity) {
        r.aoMapIntensity = t.aoMapIntensity;
      }
      if (void 0 !== t.gradientMap) {
        r.gradientMap = n(t.gradientMap);
      }
      if (void 0 !== t.clearcoatMap) {
        r.clearcoatMap = n(t.clearcoatMap);
      }
      if (void 0 !== t.clearcoatRoughnessMap) {
        r.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap);
      }
      if (void 0 !== t.clearcoatNormalMap) {
        r.clearcoatNormalMap = n(t.clearcoatNormalMap);
      }
      if (void 0 !== t.clearcoatNormalScale) {
        r.clearcoatNormalScale = new ft().fromArray(t.clearcoatNormalScale);
      }
      if (void 0 !== t.transmission) {
        r.transmission = t.transmission;
      }
      if (void 0 !== t.transmissionMap) {
        r.transmissionMap = n(t.transmissionMap);
      }
      return r;
    },
    setTextures: function (t) {
      this.textures = t;
      return this;
    }
  });
  var su = {
    decodeText: function (t) {
      if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(t);
      for (e = "", n = 0, r = t.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        e += String.fromCharCode(t[n]);
      }
      try {
        return decodeURIComponent(escape(e));
      } catch (t) {
        return e;
      }
    },
    extractUrlBase: function (t) {
      var e = t.lastIndexOf("/");
      return -1 === e ? "./" : t.substr(0, e + 1);
    }
  };
  function lu() {
    vn.call(this);
    this.type = "InstancedBufferGeometry";
    this.instanceCount = 1 / 0;
  }
  function uu(t, e, n, r) {
    if ("number" == typeof n) {
      r = n;
      n = !1;
      console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.");
    }
    Ke.call(this, t, e, n);
    this.meshPerAttribute = r || 1;
  }
  function cu(t) {
    pl.call(this, t);
  }
  lu.prototype = Object.assign(Object.create(vn.prototype), {
    constructor: lu,
    isInstancedBufferGeometry: !0,
    copy: function (t) {
      vn.prototype.copy.call(this, t);
      this.instanceCount = t.instanceCount;
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    toJSON: function () {
      var t = vn.prototype.toJSON.call(this);
      t.instanceCount = this.instanceCount;
      t.isInstancedBufferGeometry = !0;
      return t;
    }
  });
  uu.prototype = Object.assign(Object.create(Ke.prototype), {
    constructor: uu,
    isInstancedBufferAttribute: !0,
    copy: function (t) {
      Ke.prototype.copy.call(this, t);
      this.meshPerAttribute = t.meshPerAttribute;
      return this;
    },
    toJSON: function () {
      var t = Ke.prototype.toJSON.call(this);
      t.meshPerAttribute = this.meshPerAttribute;
      t.isInstancedBufferAttribute = !0;
      return t;
    }
  });
  cu.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: cu,
    load: function (t, e, n, r) {
      var i = this;
      var a = new vl(i.manager);
      a.setPath(i.path);
      a.setRequestHeader(i.requestHeader);
      a.setWithCredentials(i.withCredentials);
      a.load(t, function (n) {
        try {
          e(i.parse(JSON.parse(n)));
        } catch (e) {
          if (r) {
            r(e);
          } else {
            console.error(e);
          }
          i.manager.itemError(t);
        }
      }, n, r);
    },
    parse: function (t) {
      var e = {};
      var n = {};
      function r(t, r) {
        if (void 0 !== e[r]) return e[r];
        var i = t.interleavedBuffers[r];
        var a = function (t, e) {
          if (void 0 !== n[e]) return n[e];
          var r = t.arrayBuffers[e];
          var i = new Uint32Array(r).buffer;
          n[e] = i;
          return i;
        }(t, i.buffer);
        var o = new la(new du[i.type](a), i.stride);
        o.uuid = i.uuid;
        e[r] = o;
        return o;
      }
      var i = t.isInstancedBufferGeometry ? new lu() : new vn();
      var a = t.data.index;
      if (void 0 !== a) {
        var o = new du[a.type](a.array);
        i.setIndex(new Ke(o, 1));
      }
      var s = t.data.attributes;
      for (var l in s) {
        var u = s[l];
        var c = void 0;
        if (u.isInterleavedBufferAttribute) c = new ha(r(t.data, u.data), u.itemSize, u.offset, u.normalized);else {
          var h = new du[u.type](u.array);
          c = new (u.isInstancedBufferAttribute ? uu : Ke)(h, u.itemSize, u.normalized);
        }
        if (void 0 !== u.name) {
          c.name = u.name;
        }
        i.setAttribute(l, c);
      }
      var d = t.data.morphAttributes;
      if (d) for (var f in d) {
        for (p = d[f], m = [], v = 0, g = p.length, void 0; v < g; v++) {
          var p;
          var m;
          var v;
          var g;
          var y = p[v];
          var b = void 0;
          b = y.isInterleavedBufferAttribute ? new ha(r(t.data, y.data), y.itemSize, y.offset, y.normalized) : new Ke(new du[y.type](y.array), y.itemSize, y.normalized);
          if (void 0 !== y.name) {
            b.name = y.name;
          }
          m.push(b);
        }
        i.morphAttributes[f] = m;
      }
      if (t.data.morphTargetsRelative) {
        i.morphTargetsRelative = !0;
      }
      var x = t.data.groups || t.data.drawcalls || t.data.offsets;
      if (void 0 !== x) for (_ = 0, w = x.length, void 0; _ !== w; ++_) {
        var _;
        var w;
        var S = x[_];
        i.addGroup(S.start, S.count, S.materialIndex);
      }
      var E = t.data.boundingSphere;
      if (void 0 !== E) {
        var T = new wt();
        if (void 0 !== E.center) {
          T.fromArray(E.center);
        }
        i.boundingSphere = new Gt(T, E.radius);
      }
      if (t.name) {
        i.name = t.name;
      }
      if (t.userData) {
        i.userData = t.userData;
      }
      return i;
    }
  });
  var hu;
  var du = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
  };
  var fu = function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    ct(e, t);
    var n = e.prototype;
    n.load = function (t, e, n, r) {
      var i = this;
      var a = "" === this.path ? su.extractUrlBase(t) : this.path;
      this.resourcePath = this.resourcePath || a;
      var o = new vl(this.manager);
      o.setPath(this.path);
      o.setRequestHeader(this.requestHeader);
      o.setWithCredentials(this.withCredentials);
      o.load(t, function (n) {
        var a = null;
        try {
          a = JSON.parse(n);
        } catch (e) {
          if (void 0 !== r) {
            r(e);
          }
          return void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message);
        }
        var o = a.metadata;
        if (void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase()) {
          i.parse(a, e);
        } else {
          console.error("THREE.ObjectLoader: Can't load " + t);
        }
      }, n, r);
    };
    n.parse = function (t, e) {
      var n = this.parseShape(t.shapes);
      var r = this.parseGeometries(t.geometries, n);
      var i = this.parseImages(t.images, function () {
        if (void 0 !== e) {
          e(s);
        }
      });
      var a = this.parseTextures(t.textures, i);
      var o = this.parseMaterials(t.materials, a);
      var s = this.parseObject(t.object, r, o);
      if (t.animations) {
        s.animations = this.parseAnimations(t.animations);
      }
      if (void 0 !== t.images && 0 !== t.images.length) {
        if (void 0 !== e) {
          e(s);
        }
      }
      return s;
    };
    n.parseShape = function (t) {
      var e = {};
      if (void 0 !== t) for (n = 0, r = t.length, void 0; n < r; n++) {
        var n;
        var r;
        var i = new Wl().fromJSON(t[n]);
        e[i.uuid] = i;
      }
      return e;
    };
    n.parseGeometries = function (t, e) {
      var n;
      var r = {};
      if (void 0 !== t) for (i = new cu(), a = 0, o = t.length, void 0; a < o; a++) {
        var i;
        var a;
        var o;
        var s = void 0;
        var l = t[a];
        switch (l.type) {
          case "PlaneGeometry":
          case "PlaneBufferGeometry":
            s = new Fs[l.type](l.width, l.height, l.widthSegments, l.heightSegments);
            break;
          case "BoxGeometry":
          case "BoxBufferGeometry":
          case "CubeGeometry":
            s = new Fs[l.type](l.width, l.height, l.depth, l.widthSegments, l.heightSegments, l.depthSegments);
            break;
          case "CircleGeometry":
          case "CircleBufferGeometry":
            s = new Fs[l.type](l.radius, l.segments, l.thetaStart, l.thetaLength);
            break;
          case "CylinderGeometry":
          case "CylinderBufferGeometry":
            s = new Fs[l.type](l.radiusTop, l.radiusBottom, l.height, l.radialSegments, l.heightSegments, l.openEnded, l.thetaStart, l.thetaLength);
            break;
          case "ConeGeometry":
          case "ConeBufferGeometry":
            s = new Fs[l.type](l.radius, l.height, l.radialSegments, l.heightSegments, l.openEnded, l.thetaStart, l.thetaLength);
            break;
          case "SphereGeometry":
          case "SphereBufferGeometry":
            s = new Fs[l.type](l.radius, l.widthSegments, l.heightSegments, l.phiStart, l.phiLength, l.thetaStart, l.thetaLength);
            break;
          case "DodecahedronGeometry":
          case "DodecahedronBufferGeometry":
          case "IcosahedronGeometry":
          case "IcosahedronBufferGeometry":
          case "OctahedronGeometry":
          case "OctahedronBufferGeometry":
          case "TetrahedronGeometry":
          case "TetrahedronBufferGeometry":
            s = new Fs[l.type](l.radius, l.detail);
            break;
          case "RingGeometry":
          case "RingBufferGeometry":
            s = new Fs[l.type](l.innerRadius, l.outerRadius, l.thetaSegments, l.phiSegments, l.thetaStart, l.thetaLength);
            break;
          case "TorusGeometry":
          case "TorusBufferGeometry":
            s = new Fs[l.type](l.radius, l.tube, l.radialSegments, l.tubularSegments, l.arc);
            break;
          case "TorusKnotGeometry":
          case "TorusKnotBufferGeometry":
            s = new Fs[l.type](l.radius, l.tube, l.tubularSegments, l.radialSegments, l.p, l.q);
            break;
          case "TubeGeometry":
          case "TubeBufferGeometry":
            s = new Fs[l.type](new Hl[l.path.type]().fromJSON(l.path), l.tubularSegments, l.radius, l.radialSegments, l.closed);
            break;
          case "LatheGeometry":
          case "LatheBufferGeometry":
            s = new Fs[l.type](l.points, l.segments, l.phiStart, l.phiLength);
            break;
          case "PolyhedronGeometry":
          case "PolyhedronBufferGeometry":
            s = new Fs[l.type](l.vertices, l.indices, l.radius, l.details);
            break;
          case "ShapeGeometry":
          case "ShapeBufferGeometry":
            n = [];
            for (u = 0, c = l.shapes.length, void 0; u < c; u++) {
              var u;
              var c;
              var h = e[l.shapes[u]];
              n.push(h);
            }
            s = new Fs[l.type](n, l.curveSegments);
            break;
          case "ExtrudeGeometry":
          case "ExtrudeBufferGeometry":
            n = [];
            for (d = 0, f = l.shapes.length, void 0; d < f; d++) {
              var d;
              var f;
              var p = e[l.shapes[d]];
              n.push(p);
            }
            var m = l.options.extrudePath;
            if (void 0 !== m) {
              l.options.extrudePath = new Hl[m.type]().fromJSON(m);
            }
            s = new Fs[l.type](n, l.options);
            break;
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            s = i.parse(l);
            break;
          case "Geometry":
            console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
            break;
          default:
            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + l.type + '"');
            continue;
        }
        s.uuid = l.uuid;
        if (void 0 !== l.name) {
          s.name = l.name;
        }
        if (!0 === s.isBufferGeometry && void 0 !== l.userData) {
          s.userData = l.userData;
        }
        r[l.uuid] = s;
      }
      return r;
    };
    n.parseMaterials = function (t, e) {
      var n = {};
      var r = {};
      if (void 0 !== t) {
        var i = new ou();
        i.setTextures(e);
        for (a = 0, o = t.length, void 0; a < o; a++) {
          var a;
          var o;
          var s = t[a];
          if ("MultiMaterial" === s.type) {
            for (l = [], u = 0, void 0; u < s.materials.length; u++) {
              var l;
              var u;
              var c = s.materials[u];
              if (void 0 === n[c.uuid]) {
                n[c.uuid] = i.parse(c);
              }
              l.push(n[c.uuid]);
            }
            r[s.uuid] = l;
          } else {
            if (void 0 === n[s.uuid]) {
              n[s.uuid] = i.parse(s);
            }
            r[s.uuid] = n[s.uuid];
          }
        }
      }
      return r;
    };
    n.parseAnimations = function (t) {
      for (e = [], n = 0, void 0; n < t.length; n++) {
        var e;
        var n;
        var r = t[n];
        var i = ul.parse(r);
        if (void 0 !== r.uuid) {
          i.uuid = r.uuid;
        }
        e.push(i);
      }
      return e;
    };
    n.parseImages = function (t, e) {
      var n;
      var r = this;
      var i = {};
      function a(t) {
        r.manager.itemStart(t);
        return n.load(t, function () {
          r.manager.itemEnd(t);
        }, void 0, function () {
          r.manager.itemError(t);
          r.manager.itemEnd(t);
        });
      }
      if (void 0 !== t && t.length > 0) {
        var o = new dl(e);
        (n = new bl(o)).setCrossOrigin(this.crossOrigin);
        for (s = 0, l = t.length, void 0; s < l; s++) {
          var s;
          var l;
          var u = t[s];
          var c = u.url;
          if (Array.isArray(c)) {
            i[u.uuid] = [];
            for (h = 0, d = c.length, void 0; h < d; h++) {
              var h;
              var d;
              var f = c[h];
              var p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(f) ? f : r.resourcePath + f;
              i[u.uuid].push(a(p));
            }
          } else {
            var m = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(u.url) ? u.url : r.resourcePath + u.url;
            i[u.uuid] = a(m);
          }
        }
      }
      return i;
    };
    n.parseTextures = function (t, e) {
      function n(t, e) {
        return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]);
      }
      var r = {};
      if (void 0 !== t) for (i = 0, a = t.length, void 0; i < a; i++) {
        var i;
        var a;
        var o = t[i];
        if (void 0 === o.image) {
          console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid);
        }
        if (void 0 === e[o.image]) {
          console.warn("THREE.ObjectLoader: Undefined image", o.image);
        }
        var s = void 0;
        (s = Array.isArray(e[o.image]) ? new qn(e[o.image]) : new gt(e[o.image])).needsUpdate = !0;
        s.uuid = o.uuid;
        if (void 0 !== o.name) {
          s.name = o.name;
        }
        if (void 0 !== o.mapping) {
          s.mapping = n(o.mapping, pu);
        }
        if (void 0 !== o.offset) {
          s.offset.fromArray(o.offset);
        }
        if (void 0 !== o.repeat) {
          s.repeat.fromArray(o.repeat);
        }
        if (void 0 !== o.center) {
          s.center.fromArray(o.center);
        }
        if (void 0 !== o.rotation) {
          s.rotation = o.rotation;
        }
        if (void 0 !== o.wrap) {
          s.wrapS = n(o.wrap[0], mu);
          s.wrapT = n(o.wrap[1], mu);
        }
        if (void 0 !== o.format) {
          s.format = o.format;
        }
        if (void 0 !== o.type) {
          s.type = o.type;
        }
        if (void 0 !== o.encoding) {
          s.encoding = o.encoding;
        }
        if (void 0 !== o.minFilter) {
          s.minFilter = n(o.minFilter, vu);
        }
        if (void 0 !== o.magFilter) {
          s.magFilter = n(o.magFilter, vu);
        }
        if (void 0 !== o.anisotropy) {
          s.anisotropy = o.anisotropy;
        }
        if (void 0 !== o.flipY) {
          s.flipY = o.flipY;
        }
        if (void 0 !== o.premultiplyAlpha) {
          s.premultiplyAlpha = o.premultiplyAlpha;
        }
        if (void 0 !== o.unpackAlignment) {
          s.unpackAlignment = o.unpackAlignment;
        }
        r[o.uuid] = s;
      }
      return r;
    };
    n.parseObject = function (t, e, n) {
      var r;
      var i;
      var a;
      function o(t) {
        if (void 0 === e[t]) {
          console.warn("THREE.ObjectLoader: Undefined geometry", t);
        }
        return e[t];
      }
      function s(t) {
        if (void 0 !== t) {
          if (Array.isArray(t)) {
            for (e = [], r = 0, i = t.length, void 0; r < i; r++) {
              var e;
              var r;
              var i;
              var a = t[r];
              if (void 0 === n[a]) {
                console.warn("THREE.ObjectLoader: Undefined material", a);
              }
              e.push(n[a]);
            }
            return e;
          }
          if (void 0 === n[t]) {
            console.warn("THREE.ObjectLoader: Undefined material", t);
          }
          return n[t];
        }
      }
      switch (t.type) {
        case "Scene":
          r = new sa();
          if (void 0 !== t.background && Number.isInteger(t.background)) {
            r.background = new je(t.background);
          }
          if (void 0 !== t.fog) {
            if ("Fog" === t.fog.type) {
              r.fog = new oa(t.fog.color, t.fog.near, t.fog.far);
            } else {
              if ("FogExp2" === t.fog.type) {
                r.fog = new aa(t.fog.color, t.fog.density);
              }
            }
          }
          break;
        case "PerspectiveCamera":
          r = new jn(t.fov, t.aspect, t.near, t.far);
          if (void 0 !== t.focus) {
            r.focus = t.focus;
          }
          if (void 0 !== t.zoom) {
            r.zoom = t.zoom;
          }
          if (void 0 !== t.filmGauge) {
            r.filmGauge = t.filmGauge;
          }
          if (void 0 !== t.filmOffset) {
            r.filmOffset = t.filmOffset;
          }
          if (void 0 !== t.view) {
            r.view = Object.assign({}, t.view);
          }
          break;
        case "OrthographicCamera":
          r = new Ql(t.left, t.right, t.top, t.bottom, t.near, t.far);
          if (void 0 !== t.zoom) {
            r.zoom = t.zoom;
          }
          if (void 0 !== t.view) {
            r.view = Object.assign({}, t.view);
          }
          break;
        case "AmbientLight":
          r = new nu(t.color, t.intensity);
          break;
        case "DirectionalLight":
          r = new eu(t.color, t.intensity);
          break;
        case "PointLight":
          r = new $l(t.color, t.intensity, t.distance, t.decay);
          break;
        case "RectAreaLight":
          r = new ru(t.color, t.intensity, t.width, t.height);
          break;
        case "SpotLight":
          r = new Kl(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
          break;
        case "HemisphereLight":
          r = new Yl(t.color, t.groundColor, t.intensity);
          break;
        case "LightProbe":
          r = new au().fromJSON(t);
          break;
        case "SkinnedMesh":
          console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
        case "Mesh":
          r = new Dn(i = o(t.geometry), a = s(t.material));
          break;
        case "InstancedMesh":
          i = o(t.geometry);
          a = s(t.material);
          var l = t.count;
          var u = t.instanceMatrix;
          (r = new Va(i, a, l)).instanceMatrix = new Ke(new Float32Array(u.array), 16);
          break;
        case "LOD":
          r = new Da();
          break;
        case "Line":
          r = new Ja(o(t.geometry), s(t.material), t.mode);
          break;
        case "LineLoop":
          r = new eo(o(t.geometry), s(t.material));
          break;
        case "LineSegments":
          r = new to(o(t.geometry), s(t.material));
          break;
        case "PointCloud":
        case "Points":
          r = new so(o(t.geometry), s(t.material));
          break;
        case "Sprite":
          r = new Ta(s(t.material));
          break;
        case "Group":
          r = new Qi();
          break;
        default:
          r = new _e();
      }
      r.uuid = t.uuid;
      if (void 0 !== t.name) {
        r.name = t.name;
      }
      if (void 0 !== t.matrix) {
        r.matrix.fromArray(t.matrix);
        if (void 0 !== t.matrixAutoUpdate) {
          r.matrixAutoUpdate = t.matrixAutoUpdate;
        }
        if (r.matrixAutoUpdate) {
          r.matrix.decompose(r.position, r.quaternion, r.scale);
        }
      } else {
        if (void 0 !== t.position) {
          r.position.fromArray(t.position);
        }
        if (void 0 !== t.rotation) {
          r.rotation.fromArray(t.rotation);
        }
        if (void 0 !== t.quaternion) {
          r.quaternion.fromArray(t.quaternion);
        }
        if (void 0 !== t.scale) {
          r.scale.fromArray(t.scale);
        }
      }
      if (void 0 !== t.castShadow) {
        r.castShadow = t.castShadow;
      }
      if (void 0 !== t.receiveShadow) {
        r.receiveShadow = t.receiveShadow;
      }
      if (t.shadow) {
        if (void 0 !== t.shadow.bias) {
          r.shadow.bias = t.shadow.bias;
        }
        if (void 0 !== t.shadow.normalBias) {
          r.shadow.normalBias = t.shadow.normalBias;
        }
        if (void 0 !== t.shadow.radius) {
          r.shadow.radius = t.shadow.radius;
        }
        if (void 0 !== t.shadow.mapSize) {
          r.shadow.mapSize.fromArray(t.shadow.mapSize);
        }
        if (void 0 !== t.shadow.camera) {
          r.shadow.camera = this.parseObject(t.shadow.camera);
        }
      }
      if (void 0 !== t.visible) {
        r.visible = t.visible;
      }
      if (void 0 !== t.frustumCulled) {
        r.frustumCulled = t.frustumCulled;
      }
      if (void 0 !== t.renderOrder) {
        r.renderOrder = t.renderOrder;
      }
      if (void 0 !== t.userData) {
        r.userData = t.userData;
      }
      if (void 0 !== t.layers) {
        r.layers.mask = t.layers;
      }
      if (void 0 !== t.children) for (var c = t.children, h = 0; h < c.length; h++) r.add(this.parseObject(c[h], e, n));
      if ("LOD" === t.type) {
        if (void 0 !== t.autoUpdate) {
          r.autoUpdate = t.autoUpdate;
        }
        for (d = t.levels, f = 0, void 0; f < d.length; f++) {
          var d;
          var f;
          var p = d[f];
          var m = r.getObjectByProperty("uuid", p.object);
          if (void 0 !== m) {
            r.addLevel(m, p.distance);
          }
        }
      }
      return r;
    };
    n.setTexturePath = function (t) {
      console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");
      return this.setResourcePath(t);
    };
    return e;
  }(pl);
  var pu = {
    UVMapping: n,
    CubeReflectionMapping: r,
    CubeRefractionMapping: i,
    EquirectangularReflectionMapping: a,
    EquirectangularRefractionMapping: o,
    CubeUVReflectionMapping: s,
    CubeUVRefractionMapping: l
  };
  var mu = {
    RepeatWrapping: u,
    ClampToEdgeWrapping: c,
    MirroredRepeatWrapping: h
  };
  var vu = {
    NearestFilter: d,
    NearestMipmapNearestFilter: f,
    NearestMipmapLinearFilter: p,
    LinearFilter: m,
    LinearMipmapNearestFilter: v,
    LinearMipmapLinearFilter: g
  };
  function gu(t) {
    if ("undefined" == typeof createImageBitmap) {
      console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
    }
    if ("undefined" == typeof fetch) {
      console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
    }
    pl.call(this, t);
    this.options = {
      premultiplyAlpha: "none"
    };
  }
  function yu() {
    this.type = "ShapePath";
    this.color = new je();
    this.subPaths = [];
    this.currentPath = null;
  }
  function bu(t) {
    this.type = "Font";
    this.data = t;
  }
  function xu(t, e, n, r, i) {
    var a = i.glyphs[t] || i.glyphs["?"];
    if (a) {
      var o;
      var s;
      var l;
      var u;
      var c;
      var h;
      var d;
      var f;
      var p = new yu();
      if (a.o) for (m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, g = m.length, void 0; v < g;) {
        var m;
        var v;
        var g;
        switch (m[v++]) {
          case "m":
            o = m[v++] * e + n;
            s = m[v++] * e + r;
            p.moveTo(o, s);
            break;
          case "l":
            o = m[v++] * e + n;
            s = m[v++] * e + r;
            p.lineTo(o, s);
            break;
          case "q":
            l = m[v++] * e + n;
            u = m[v++] * e + r;
            c = m[v++] * e + n;
            h = m[v++] * e + r;
            p.quadraticCurveTo(c, h, l, u);
            break;
          case "b":
            l = m[v++] * e + n;
            u = m[v++] * e + r;
            c = m[v++] * e + n;
            h = m[v++] * e + r;
            d = m[v++] * e + n;
            f = m[v++] * e + r;
            p.bezierCurveTo(c, h, d, f, l, u);
        }
      }
      return {
        offsetX: a.ha * e,
        path: p
      };
    }
    console.error('THREE.Font: character "' + t + '" does not exists in font family ' + i.familyName + ".");
  }
  function _u(t) {
    pl.call(this, t);
  }
  gu.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: gu,
    isImageBitmapLoader: !0,
    setOptions: function (t) {
      this.options = t;
      return this;
    },
    load: function (t, e, n, r) {
      if (void 0 === t) {
        t = "";
      }
      if (void 0 !== this.path) {
        t = this.path + t;
      }
      t = this.manager.resolveURL(t);
      var i = this;
      var a = hl.get(t);
      if (void 0 !== a) {
        i.manager.itemStart(t);
        setTimeout(function () {
          if (e) {
            e(a);
          }
          i.manager.itemEnd(t);
        }, 0);
        return a;
      }
      var o = {};
      o.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include";
      fetch(t, o).then(function (t) {
        return t.blob();
      }).then(function (t) {
        return createImageBitmap(t, i.options);
      }).then(function (n) {
        hl.add(t, n);
        if (e) {
          e(n);
        }
        i.manager.itemEnd(t);
      }).catch(function (e) {
        if (r) {
          r(e);
        }
        i.manager.itemError(t);
        i.manager.itemEnd(t);
      });
      i.manager.itemStart(t);
    }
  });
  Object.assign(yu.prototype, {
    moveTo: function (t, e) {
      this.currentPath = new Vl();
      this.subPaths.push(this.currentPath);
      this.currentPath.moveTo(t, e);
      return this;
    },
    lineTo: function (t, e) {
      this.currentPath.lineTo(t, e);
      return this;
    },
    quadraticCurveTo: function (t, e, n, r) {
      this.currentPath.quadraticCurveTo(t, e, n, r);
      return this;
    },
    bezierCurveTo: function (t, e, n, r, i, a) {
      this.currentPath.bezierCurveTo(t, e, n, r, i, a);
      return this;
    },
    splineThru: function (t) {
      this.currentPath.splineThru(t);
      return this;
    },
    toShapes: function (t, e) {
      function n(t) {
        for (e = [], n = 0, r = t.length, void 0; n < r; n++) {
          var e;
          var n;
          var r;
          var i = t[n];
          var a = new Wl();
          a.curves = i.curves;
          e.push(a);
        }
        return e;
      }
      function r(t, e) {
        for (n = e.length, r = !1, i = n - 1, a = 0, void 0; a < n; i = a++) {
          var n;
          var r;
          var i;
          var a;
          var o = e[i];
          var s = e[a];
          var l = s.x - o.x;
          var u = s.y - o.y;
          if (Math.abs(u) > Number.EPSILON) {
            if (u < 0) {
              o = e[a];
              l = -l;
              s = e[i];
              u = -u;
            }
            if (t.y < o.y || t.y > s.y) continue;
            if (t.y === o.y) {
              if (t.x === o.x) return !0;
            } else {
              var c = u * (t.x - o.x) - l * (t.y - o.y);
              if (0 === c) return !0;
              if (c < 0) continue;
              r = !r;
            }
          } else {
            if (t.y !== o.y) continue;
            if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0;
          }
        }
        return r;
      }
      var i;
      var a;
      var o;
      var s = as.isClockWise;
      var l = this.subPaths;
      if (0 === l.length) return [];
      if (!0 === e) return n(l);
      var u = [];
      if (1 === l.length) {
        a = l[0];
        (o = new Wl()).curves = a.curves;
        u.push(o);
        return u;
      }
      var c = !s(l[0].getPoints());
      c = t ? !c : c;
      var h;
      var d;
      var f = [];
      var p = [];
      var m = [];
      var v = 0;
      p[v] = void 0;
      m[v] = [];
      for (g = 0, y = l.length, void 0; g < y; g++) {
        var g;
        var y;
        i = s(h = (a = l[g]).getPoints());
        if (i = t ? !i : i) {
          if (!c && p[v]) {
            v++;
          }
          p[v] = {
            s: new Wl(),
            p: h
          };
          p[v].s.curves = a.curves;
          if (c) {
            v++;
          }
          m[v] = [];
        } else {
          m[v].push({
            h: a,
            p: h[0]
          });
        }
      }
      if (!p[0]) return n(l);
      if (p.length > 1) {
        for (b = !1, x = [], _ = 0, w = p.length, void 0; _ < w; _++) {
          var b;
          var x;
          var _;
          var w;
          f[_] = [];
        }
        for (S = 0, E = p.length, void 0; S < E; S++) {
          var S;
          var E;
          for (T = m[S], M = 0, void 0; M < T.length; M++) {
            var T;
            var M;
            for (A = T[M], L = !0, C = 0, void 0; C < p.length; C++) {
              var A;
              var L;
              var C;
              if (r(A.p, p[C].p)) {
                if (S !== C) {
                  x.push({
                    froms: S,
                    tos: C,
                    hole: M
                  });
                }
                if (L) {
                  L = !1;
                  f[C].push(A);
                } else {
                  b = !0;
                }
              }
            }
            if (L) {
              f[S].push(A);
            }
          }
        }
        if (x.length > 0) {
          if (b) {
            m = f;
          }
        }
      }
      for (P = 0, R = p.length, void 0; P < R; P++) {
        var P;
        var R;
        o = p[P].s;
        u.push(o);
        for (O = 0, I = (d = m[P]).length, void 0; O < I; O++) {
          var O;
          var I;
          o.holes.push(d[O].h);
        }
      }
      return u;
    }
  });
  Object.assign(bu.prototype, {
    isFont: !0,
    generateShapes: function (t, e) {
      if (void 0 === e) {
        e = 100;
      }
      for (n = [], r = function (t, e, n) {
        for (r = Array.from ? Array.from(t) : String(t).split(""), i = e / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i, o = [], s = 0, l = 0, u = 0, void 0; u < r.length; u++) {
          var r;
          var i;
          var a;
          var o;
          var s;
          var l;
          var u;
          var c = r[u];
          if ("\n" === c) {
            s = 0;
            l -= a;
          } else {
            var h = xu(c, i, s, l, n);
            s += h.offsetX;
            o.push(h.path);
          }
        }
        return o;
      }(t, e, this.data), i = 0, a = r.length, void 0; i < a; i++) {
        var n;
        var r;
        var i;
        var a;
        Array.prototype.push.apply(n, r[i].toShapes());
      }
      return n;
    }
  });
  _u.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: _u,
    load: function (t, e, n, r) {
      var i = this;
      var a = new vl(this.manager);
      a.setPath(this.path);
      a.setRequestHeader(this.requestHeader);
      a.setWithCredentials(i.withCredentials);
      a.load(t, function (t) {
        var n;
        try {
          n = JSON.parse(t);
        } catch (e) {
          console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.");
          n = JSON.parse(t.substring(65, t.length - 2));
        }
        var r = i.parse(n);
        if (e) {
          e(r);
        }
      }, n, r);
    },
    parse: function (t) {
      return new bu(t);
    }
  });
  var wu = {
    getContext: function () {
      if (void 0 === hu) {
        hu = new (window.AudioContext || window.webkitAudioContext)();
      }
      return hu;
    },
    setContext: function (t) {
      hu = t;
    }
  };
  function Su(t) {
    pl.call(this, t);
  }
  function Eu(t, e, n) {
    au.call(this, void 0, n);
    var r = new je().set(t);
    var i = new je().set(e);
    var a = new wt(r.r, r.g, r.b);
    var o = new wt(i.r, i.g, i.b);
    var s = Math.sqrt(Math.PI);
    var l = s * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s);
    this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l);
  }
  function Tu(t, e) {
    au.call(this, void 0, e);
    var n = new je().set(t);
    this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }
  Su.prototype = Object.assign(Object.create(pl.prototype), {
    constructor: Su,
    load: function (t, e, n, r) {
      var i = this;
      var a = new vl(i.manager);
      a.setResponseType("arraybuffer");
      a.setPath(i.path);
      a.setRequestHeader(i.requestHeader);
      a.setWithCredentials(i.withCredentials);
      a.load(t, function (n) {
        try {
          var a = n.slice(0);
          wu.getContext().decodeAudioData(a, function (t) {
            e(t);
          });
        } catch (e) {
          if (r) {
            r(e);
          } else {
            console.error(e);
          }
          i.manager.itemError(t);
        }
      }, n, r);
    }
  });
  Eu.prototype = Object.assign(Object.create(au.prototype), {
    constructor: Eu,
    isHemisphereLightProbe: !0,
    copy: function (t) {
      au.prototype.copy.call(this, t);
      return this;
    },
    toJSON: function (t) {
      return au.prototype.toJSON.call(this, t);
    }
  });
  Tu.prototype = Object.assign(Object.create(au.prototype), {
    constructor: Tu,
    isAmbientLightProbe: !0,
    copy: function (t) {
      au.prototype.copy.call(this, t);
      return this;
    },
    toJSON: function (t) {
      return au.prototype.toJSON.call(this, t);
    }
  });
  var Mu = new Kt();
  var Au = new Kt();
  function Lu() {
    this.type = "StereoCamera";
    this.aspect = 1;
    this.eyeSep = 0.064;
    this.cameraL = new jn();
    this.cameraL.layers.enable(1);
    this.cameraL.matrixAutoUpdate = !1;
    this.cameraR = new jn();
    this.cameraR.layers.enable(2);
    this.cameraR.matrixAutoUpdate = !1;
    this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    };
  }
  Object.assign(Lu.prototype, {
    update: function (t) {
      var e = this._cache;
      if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
        e.focus = t.focus;
        e.fov = t.fov;
        e.aspect = t.aspect * this.aspect;
        e.near = t.near;
        e.far = t.far;
        e.zoom = t.zoom;
        e.eyeSep = this.eyeSep;
        var n;
        var r;
        var i = t.projectionMatrix.clone();
        var a = e.eyeSep / 2;
        var o = a * e.near / e.focus;
        var s = e.near * Math.tan(st.DEG2RAD * e.fov * 0.5) / e.zoom;
        Au.elements[12] = -a;
        Mu.elements[12] = a;
        n = -s * e.aspect + o;
        r = s * e.aspect + o;
        i.elements[0] = 2 * e.near / (r - n);
        i.elements[8] = (r + n) / (r - n);
        this.cameraL.projectionMatrix.copy(i);
        n = -s * e.aspect - o;
        r = s * e.aspect - o;
        i.elements[0] = 2 * e.near / (r - n);
        i.elements[8] = (r + n) / (r - n);
        this.cameraR.projectionMatrix.copy(i);
      }
      this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Au);
      this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Mu);
    }
  });
  var Cu = function () {
    function t(t) {
      this.autoStart = void 0 === t || t;
      this.startTime = 0;
      this.oldTime = 0;
      this.elapsedTime = 0;
      this.running = !1;
    }
    var e = t.prototype;
    e.start = function () {
      this.startTime = ("undefined" == typeof performance ? Date : performance).now();
      this.oldTime = this.startTime;
      this.elapsedTime = 0;
      this.running = !0;
    };
    e.stop = function () {
      this.getElapsedTime();
      this.running = !1;
      this.autoStart = !1;
    };
    e.getElapsedTime = function () {
      this.getDelta();
      return this.elapsedTime;
    };
    e.getDelta = function () {
      var t = 0;
      if (this.autoStart && !this.running) {
        this.start();
        return 0;
      }
      if (this.running) {
        var e = ("undefined" == typeof performance ? Date : performance).now();
        t = (e - this.oldTime) / 1e3;
        this.oldTime = e;
        this.elapsedTime += t;
      }
      return t;
    };
    return t;
  }();
  var Pu = new wt();
  var Ru = new _t();
  var Ou = new wt();
  var Iu = new wt();
  var Du = function (t) {
    function e() {
      var e;
      (e = t.call(this) || this).type = "AudioListener";
      e.context = wu.getContext();
      e.gain = e.context.createGain();
      e.gain.connect(e.context.destination);
      e.filter = null;
      e.timeDelta = 0;
      e._clock = new Cu();
      return e;
    }
    ct(e, t);
    var n = e.prototype;
    n.getInput = function () {
      return this.gain;
    };
    n.removeFilter = function () {
      if (null !== this.filter) {
        this.gain.disconnect(this.filter);
        this.filter.disconnect(this.context.destination);
        this.gain.connect(this.context.destination);
        this.filter = null;
      }
      return this;
    };
    n.getFilter = function () {
      return this.filter;
    };
    n.setFilter = function (t) {
      if (null !== this.filter) {
        this.gain.disconnect(this.filter);
        this.filter.disconnect(this.context.destination);
      } else {
        this.gain.disconnect(this.context.destination);
      }
      this.filter = t;
      this.gain.connect(this.filter);
      this.filter.connect(this.context.destination);
      return this;
    };
    n.getMasterVolume = function () {
      return this.gain.gain.value;
    };
    n.setMasterVolume = function (t) {
      this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01);
      return this;
    };
    n.updateMatrixWorld = function (e) {
      t.prototype.updateMatrixWorld.call(this, e);
      var n = this.context.listener;
      var r = this.up;
      this.timeDelta = this._clock.getDelta();
      this.matrixWorld.decompose(Pu, Ru, Ou);
      Iu.set(0, 0, -1).applyQuaternion(Ru);
      if (n.positionX) {
        var i = this.context.currentTime + this.timeDelta;
        n.positionX.linearRampToValueAtTime(Pu.x, i), n.positionY.linearRampToValueAtTime(Pu.y, i), n.positionZ.linearRampToValueAtTime(Pu.z, i), n.forwardX.linearRampToValueAtTime(Iu.x, i), n.forwardY.linearRampToValueAtTime(Iu.y, i), n.forwardZ.linearRampToValueAtTime(Iu.z, i), n.upX.linearRampToValueAtTime(r.x, i), n.upY.linearRampToValueAtTime(r.y, i), n.upZ.linearRampToValueAtTime(r.z, i);
      } else n.setPosition(Pu.x, Pu.y, Pu.z), n.setOrientation(Iu.x, Iu.y, Iu.z, r.x, r.y, r.z);
    };
    return e;
  }(_e);
  var ku = function (t) {
    function e(e) {
      var n;
      (n = t.call(this) || this).type = "Audio";
      n.listener = e;
      n.context = e.context;
      n.gain = n.context.createGain();
      n.gain.connect(e.getInput());
      n.autoplay = !1;
      n.buffer = null;
      n.detune = 0;
      n.loop = !1;
      n.loopStart = 0;
      n.loopEnd = 0;
      n.offset = 0;
      n.duration = void 0;
      n.playbackRate = 1;
      n.isPlaying = !1;
      n.hasPlaybackControl = !0;
      n.source = null;
      n.sourceType = "empty";
      n._startedAt = 0;
      n._progress = 0;
      n._connected = !1;
      n.filters = [];
      return n;
    }
    ct(e, t);
    var n = e.prototype;
    n.getOutput = function () {
      return this.gain;
    };
    n.setNodeSource = function (t) {
      this.hasPlaybackControl = !1;
      this.sourceType = "audioNode";
      this.source = t;
      this.connect();
      return this;
    };
    n.setMediaElementSource = function (t) {
      this.hasPlaybackControl = !1;
      this.sourceType = "mediaNode";
      this.source = this.context.createMediaElementSource(t);
      this.connect();
      return this;
    };
    n.setMediaStreamSource = function (t) {
      this.hasPlaybackControl = !1;
      this.sourceType = "mediaStreamNode";
      this.source = this.context.createMediaStreamSource(t);
      this.connect();
      return this;
    };
    n.setBuffer = function (t) {
      this.buffer = t;
      this.sourceType = "buffer";
      if (this.autoplay) {
        this.play();
      }
      return this;
    };
    n.play = function (t) {
      if (void 0 === t) {
        t = 0;
      }
      if (!0 !== this.isPlaying) {
        if (!1 !== this.hasPlaybackControl) {
          this._startedAt = this.context.currentTime + t;
          var e = this.context.createBufferSource();
          return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
        }
        console.warn("THREE.Audio: this Audio has no playback control.");
      } else console.warn("THREE.Audio: Audio is already playing.");
    };
    n.pause = function () {
      if (!1 !== this.hasPlaybackControl) {
        if (!0 === this.isPlaying) {
          this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate;
          if (!0 === this.loop) {
            this._progress = this._progress % (this.duration || this.buffer.duration);
          }
          this.source.stop();
          this.source.onended = null;
          this.isPlaying = !1;
        }
        return this;
      }
      console.warn("THREE.Audio: this Audio has no playback control.");
    };
    n.stop = function () {
      if (!1 !== this.hasPlaybackControl) {
        this._progress = 0;
        this.source.stop();
        this.source.onended = null;
        this.isPlaying = !1;
        return this;
      }
      console.warn("THREE.Audio: this Audio has no playback control.");
    };
    n.connect = function () {
      if (this.filters.length > 0) {
        this.source.connect(this.filters[0]);
        for (t = 1, e = this.filters.length, void 0; t < e; t++) {
          var t;
          var e;
          this.filters[t - 1].connect(this.filters[t]);
        }
        this.filters[this.filters.length - 1].connect(this.getOutput());
      } else this.source.connect(this.getOutput());
      this._connected = !0;
      return this;
    };
    n.disconnect = function () {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (t = 1, e = this.filters.length, void 0; t < e; t++) {
          var t;
          var e;
          this.filters[t - 1].disconnect(this.filters[t]);
        }
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      this._connected = !1;
      return this;
    };
    n.getFilters = function () {
      return this.filters;
    };
    n.setFilters = function (t) {
      if (t) {
        t = [];
      }
      if (!0 === this._connected) {
        this.disconnect();
        this.filters = t.slice();
        this.connect();
      } else {
        this.filters = t.slice();
      }
      return this;
    };
    n.setDetune = function (t) {
      this.detune = t;
      if (void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
    };
    n.getDetune = function () {
      return this.detune;
    };
    n.getFilter = function () {
      return this.getFilters()[0];
    };
    n.setFilter = function (t) {
      return this.setFilters(t ? [t] : []);
    };
    n.setPlaybackRate = function (t) {
      if (!1 !== this.hasPlaybackControl) {
        this.playbackRate = t;
        if (!0 === this.isPlaying) {
          this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01);
        }
        return this;
      }
      console.warn("THREE.Audio: this Audio has no playback control.");
    };
    n.getPlaybackRate = function () {
      return this.playbackRate;
    };
    n.onEnded = function () {
      this.isPlaying = !1;
    };
    n.getLoop = function () {
      return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
    };
    n.setLoop = function (t) {
      if (!1 !== this.hasPlaybackControl) {
        this.loop = t;
        if (!0 === this.isPlaying) {
          this.source.loop = this.loop;
        }
        return this;
      }
      console.warn("THREE.Audio: this Audio has no playback control.");
    };
    n.setLoopStart = function (t) {
      this.loopStart = t;
      return this;
    };
    n.setLoopEnd = function (t) {
      this.loopEnd = t;
      return this;
    };
    n.getVolume = function () {
      return this.gain.gain.value;
    };
    n.setVolume = function (t) {
      this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01);
      return this;
    };
    return e;
  }(_e);
  var Nu = new wt();
  var Bu = new _t();
  var Fu = new wt();
  var Uu = new wt();
  var zu = function (t) {
    function e(e) {
      var n;
      (n = t.call(this, e) || this).panner = n.context.createPanner();
      n.panner.panningModel = "HRTF";
      n.panner.connect(n.gain);
      return n;
    }
    ct(e, t);
    var n = e.prototype;
    n.getOutput = function () {
      return this.panner;
    };
    n.getRefDistance = function () {
      return this.panner.refDistance;
    };
    n.setRefDistance = function (t) {
      this.panner.refDistance = t;
      return this;
    };
    n.getRolloffFactor = function () {
      return this.panner.rolloffFactor;
    };
    n.setRolloffFactor = function (t) {
      this.panner.rolloffFactor = t;
      return this;
    };
    n.getDistanceModel = function () {
      return this.panner.distanceModel;
    };
    n.setDistanceModel = function (t) {
      this.panner.distanceModel = t;
      return this;
    };
    n.getMaxDistance = function () {
      return this.panner.maxDistance;
    };
    n.setMaxDistance = function (t) {
      this.panner.maxDistance = t;
      return this;
    };
    n.setDirectionalCone = function (t, e, n) {
      this.panner.coneInnerAngle = t;
      this.panner.coneOuterAngle = e;
      this.panner.coneOuterGain = n;
      return this;
    };
    n.updateMatrixWorld = function (e) {
      t.prototype.updateMatrixWorld.call(this, e);
      if (!0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
        this.matrixWorld.decompose(Nu, Bu, Fu), Uu.set(0, 0, 1).applyQuaternion(Bu);
        var n = this.panner;
        if (n.positionX) {
          var r = this.context.currentTime + this.listener.timeDelta;
          n.positionX.linearRampToValueAtTime(Nu.x, r), n.positionY.linearRampToValueAtTime(Nu.y, r), n.positionZ.linearRampToValueAtTime(Nu.z, r), n.orientationX.linearRampToValueAtTime(Uu.x, r), n.orientationY.linearRampToValueAtTime(Uu.y, r), n.orientationZ.linearRampToValueAtTime(Uu.z, r);
        } else n.setPosition(Nu.x, Nu.y, Nu.z), n.setOrientation(Uu.x, Uu.y, Uu.z);
      }
    };
    return e;
  }(ku);
  var Gu = function () {
    function t(t, e) {
      this.analyser = t.context.createAnalyser();
      this.analyser.fftSize = void 0 !== e ? e : 2048;
      this.data = new Uint8Array(this.analyser.frequencyBinCount);
      t.getOutput().connect(this.analyser);
    }
    var e = t.prototype;
    e.getFrequencyData = function () {
      this.analyser.getByteFrequencyData(this.data);
      return this.data;
    };
    e.getAverageFrequency = function () {
      for (t = 0, e = this.getFrequencyData(), n = 0, void 0; n < e.length; n++) {
        var t;
        var e;
        var n;
        t += e[n];
      }
      return t / e.length;
    };
    return t;
  }();
  function Hu(t, e, n) {
    var r;
    var i;
    var a;
    switch (this.binding = t, this.valueSize = n, e) {
      case "quaternion":
        r = this._slerp;
        i = this._slerpAdditive;
        a = this._setAdditiveIdentityQuaternion;
        this.buffer = new Float64Array(6 * n);
        this._workIndex = 5;
        break;
      case "string":
      case "bool":
        r = this._select;
        i = this._select;
        a = this._setAdditiveIdentityOther;
        this.buffer = new Array(5 * n);
        break;
      default:
        r = this._lerp;
        i = this._lerpAdditive;
        a = this._setAdditiveIdentityNumeric;
        this.buffer = new Float64Array(5 * n);
    }
    this._mixBufferRegion = r;
    this._mixBufferRegionAdditive = i;
    this._setIdentity = a;
    this._origIndex = 3;
    this._addIndex = 4;
    this.cumulativeWeight = 0;
    this.cumulativeWeightAdditive = 0;
    this.useCount = 0;
    this.referenceCount = 0;
  }
  Object.assign(Hu.prototype, {
    accumulate: function (t, e) {
      var n = this.buffer;
      var r = this.valueSize;
      var i = t * r + r;
      var a = this.cumulativeWeight;
      if (0 === a) {
        for (var o = 0; o !== r; ++o) n[i + o] = n[o];
        a = e;
      } else {
        var s = e / (a += e);
        this._mixBufferRegion(n, i, 0, s, r);
      }
      this.cumulativeWeight = a;
    },
    accumulateAdditive: function (t) {
      var e = this.buffer;
      var n = this.valueSize;
      var r = n * this._addIndex;
      if (0 === this.cumulativeWeightAdditive) {
        this._setIdentity();
      }
      this._mixBufferRegionAdditive(e, r, 0, t, n);
      this.cumulativeWeightAdditive += t;
    },
    apply: function (t) {
      var e = this.valueSize;
      var n = this.buffer;
      var r = t * e + e;
      var i = this.cumulativeWeight;
      var a = this.cumulativeWeightAdditive;
      var o = this.binding;
      this.cumulativeWeight = 0;
      this.cumulativeWeightAdditive = 0;
      if (i < 1) {
        var s = e * this._origIndex;
        this._mixBufferRegion(n, r, s, 1 - i, e);
      }
      if (a > 0) {
        this._mixBufferRegionAdditive(n, r, this._addIndex * e, 1, e);
      }
      for (l = e, u = e + e, void 0; l !== u; ++l) {
        var l;
        var u;
        if (n[l] !== n[l + e]) {
          o.setValue(n, r);
          break;
        }
      }
    },
    saveOriginalState: function () {
      var t = this.binding;
      var e = this.buffer;
      var n = this.valueSize;
      var r = n * this._origIndex;
      t.getValue(e, r);
      for (i = n, a = r, void 0; i !== a; ++i) {
        var i;
        var a;
        e[i] = e[r + i % n];
      }
      this._setIdentity();
      this.cumulativeWeight = 0;
      this.cumulativeWeightAdditive = 0;
    },
    restoreOriginalState: function () {
      var t = 3 * this.valueSize;
      this.binding.setValue(this.buffer, t);
    },
    _setAdditiveIdentityNumeric: function () {
      for (t = this._addIndex * this.valueSize, e = t + this.valueSize, n = t, void 0; n < e; n++) {
        var t;
        var e;
        var n;
        this.buffer[n] = 0;
      }
    },
    _setAdditiveIdentityQuaternion: function () {
      this._setAdditiveIdentityNumeric();
      this.buffer[this._addIndex * this.valueSize + 3] = 1;
    },
    _setAdditiveIdentityOther: function () {
      for (t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize, n = 0, void 0; n < this.valueSize; n++) {
        var t;
        var e;
        var n;
        this.buffer[e + n] = this.buffer[t + n];
      }
    },
    _select: function (t, e, n, r, i) {
      if (r >= 0.5) for (var a = 0; a !== i; ++a) t[e + a] = t[n + a];
    },
    _slerp: function (t, e, n, r) {
      _t.slerpFlat(t, e, t, e, t, n, r);
    },
    _slerpAdditive: function (t, e, n, r, i) {
      var a = this._workIndex * i;
      _t.multiplyQuaternionsFlat(t, a, t, e, t, n);
      _t.slerpFlat(t, e, t, e, t, a, r);
    },
    _lerp: function (t, e, n, r, i) {
      for (a = 1 - r, o = 0, void 0; o !== i; ++o) {
        var a;
        var o;
        var s = e + o;
        t[s] = t[s] * a + t[n + o] * r;
      }
    },
    _lerpAdditive: function (t, e, n, r, i) {
      for (var a = 0; a !== i; ++a) {
        var o = e + a;
        t[o] = t[o] + t[n + a] * r;
      }
    }
  });
  var ju = "\\[\\]\\.:\\/";
  var Vu = new RegExp("[\\[\\]\\.:\\/]", "g");
  var Wu = "[^\\[\\]\\.:\\/]";
  var qu = "[^" + ju.replace("\\.", "") + "]";
  var Yu = /((?:WC+[\/:])*)/.source.replace("WC", Wu);
  var Xu = /(WCOD+)?/.source.replace("WCOD", qu);
  var Zu = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Wu);
  var Ku = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Wu);
  var Ju = new RegExp("^" + Yu + Xu + Zu + Ku + "$");
  var $u = ["material", "materials", "bones"];
  function Qu(t, e, n) {
    var r = n || tc.parseTrackName(e);
    this._targetGroup = t;
    this._bindings = t.subscribe_(e, r);
  }
  function tc(t, e, n) {
    this.path = e;
    this.parsedPath = n || tc.parseTrackName(e);
    this.node = tc.findNode(t, this.parsedPath.nodeName) || t;
    this.rootNode = t;
  }
  function ec() {
    this.uuid = st.generateUUID();
    this._objects = Array.prototype.slice.call(arguments);
    this.nCachedObjects_ = 0;
    var t = {};
    this._indicesByUUID = t;
    for (e = 0, n = arguments.length, void 0; e !== n; ++e) {
      var e;
      var n;
      t[arguments[e].uuid] = e;
    }
    this._paths = [];
    this._parsedPaths = [];
    this._bindings = [];
    this._bindingsIndicesByPath = {};
    var r = this;
    this.stats = {
      objects: {
        get total() {
          return r._objects.length;
        },
        get inUse() {
          return this.total - r.nCachedObjects_;
        }
      },
      get bindingsPerObject() {
        return r._bindings.length;
      }
    };
  }
  Object.assign(Qu.prototype, {
    getValue: function (t, e) {
      this.bind();
      var n = this._targetGroup.nCachedObjects_;
      var r = this._bindings[n];
      if (void 0 !== r) {
        r.getValue(t, e);
      }
    },
    setValue: function (t, e) {
      for (n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length, void 0; r !== i; ++r) {
        var n;
        var r;
        var i;
        n[r].setValue(t, e);
      }
    },
    bind: function () {
      for (t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length, void 0; e !== n; ++e) {
        var t;
        var e;
        var n;
        t[e].bind();
      }
    },
    unbind: function () {
      for (t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length, void 0; e !== n; ++e) {
        var t;
        var e;
        var n;
        t[e].unbind();
      }
    }
  });
  Object.assign(tc, {
    Composite: Qu,
    create: function (t, e, n) {
      return t && t.isAnimationObjectGroup ? new tc.Composite(t, e, n) : new tc(t, e, n);
    },
    sanitizeNodeName: function (t) {
      return t.replace(/\s/g, "_").replace(Vu, "");
    },
    parseTrackName: function (t) {
      var e = Ju.exec(t);
      if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      var n = {
        nodeName: e[2],
        objectName: e[3],
        objectIndex: e[4],
        propertyName: e[5],
        propertyIndex: e[6]
      };
      var r = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== r && -1 !== r) {
        var i = n.nodeName.substring(r + 1);
        if (-1 !== $u.indexOf(i)) {
          n.nodeName = n.nodeName.substring(0, r);
          n.objectName = i;
        }
      }
      if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
      return n;
    },
    findNode: function (t, e) {
      if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
      if (t.skeleton) {
        var n = t.skeleton.getBoneByName(e);
        if (void 0 !== n) return n;
      }
      if (t.children) {
        var r = function t(n) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            if (i.name === e || i.uuid === e) return i;
            var a = t(i.children);
            if (a) return a;
          }
          return null;
        }(t.children);
        if (r) return r;
      }
      return null;
    }
  });
  Object.assign(tc.prototype, {
    _getValue_unavailable: function () {},
    _setValue_unavailable: function () {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
    },
    Versioning: {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function (t, e) {
      t[e] = this.node[this.propertyName];
    }, function (t, e) {
      for (n = this.resolvedProperty, r = 0, i = n.length, void 0; r !== i; ++r) {
        var n;
        var r;
        var i;
        t[e++] = n[r];
      }
    }, function (t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex];
    }, function (t, e) {
      this.resolvedProperty.toArray(t, e);
    }],
    SetterByBindingTypeAndVersioning: [[function (t, e) {
      this.targetObject[this.propertyName] = t[e];
    }, function (t, e) {
      this.targetObject[this.propertyName] = t[e];
      this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      this.targetObject[this.propertyName] = t[e];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (t, e) {
      for (n = this.resolvedProperty, r = 0, i = n.length, void 0; r !== i; ++r) {
        var n;
        var r;
        var i;
        n[r] = t[e++];
      }
    }, function (t, e) {
      for (n = this.resolvedProperty, r = 0, i = n.length, void 0; r !== i; ++r) {
        var n;
        var r;
        var i;
        n[r] = t[e++];
      }
      this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      for (n = this.resolvedProperty, r = 0, i = n.length, void 0; r !== i; ++r) {
        var n;
        var r;
        var i;
        n[r] = t[e++];
      }
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
    }, function (t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
      this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (t, e) {
      this.resolvedProperty.fromArray(t, e);
    }, function (t, e) {
      this.resolvedProperty.fromArray(t, e);
      this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      this.resolvedProperty.fromArray(t, e);
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }]],
    getValue: function (t, e) {
      this.bind();
      this.getValue(t, e);
    },
    setValue: function (t, e) {
      this.bind();
      this.setValue(t, e);
    },
    bind: function () {
      var t = this.node;
      var e = this.parsedPath;
      var n = e.objectName;
      var r = e.propertyName;
      var i = e.propertyIndex;
      if (t) {
        t = tc.findNode(this.rootNode, e.nodeName) || this.rootNode;
        this.node = t;
      }
      this.getValue = this._getValue_unavailable;
      this.setValue = this._setValue_unavailable;
      if (t) {
        if (n) {
          var a = e.objectIndex;
          switch (n) {
            case "materials":
              if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              t = t.material.materials;
              break;
            case "bones":
              if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              t = t.skeleton.bones;
              for (var o = 0; o < t.length; o++) if (t[o].name === a) {
                a = o;
                break;
              }
              break;
            default:
              if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              t = t[n];
          }
          if (void 0 !== a) {
            if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
            t = t[a];
          }
        }
        var s = t[r];
        if (void 0 !== s) {
          var l = this.Versioning.None;
          this.targetObject = t, void 0 !== t.needsUpdate ? l = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (l = this.Versioning.MatrixWorldNeedsUpdate);
          var u = this.BindingType.Direct;
          if (void 0 !== i) {
            if ("morphTargetInfluences" === r) {
              if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
              if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
              if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
              void 0 !== t.morphTargetDictionary[i] && (i = t.morphTargetDictionary[i]);
            }
            u = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i;
          } else void 0 !== s.fromArray && void 0 !== s.toArray ? (u = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (u = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;
          this.getValue = this.GetterByBindingType[u], this.setValue = this.SetterByBindingTypeAndVersioning[u][l];
        } else {
          var c = e.nodeName;
          console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + r + " but it wasn't found.", t);
        }
      } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
    },
    unbind: function () {
      this.node = null;
      this.getValue = this._getValue_unbound;
      this.setValue = this._setValue_unbound;
    }
  });
  Object.assign(tc.prototype, {
    _getValue_unbound: tc.prototype.getValue,
    _setValue_unbound: tc.prototype.setValue
  });
  Object.assign(ec.prototype, {
    isAnimationObjectGroup: !0,
    add: function () {
      for (t = this._objects, e = this._indicesByUUID, n = this._paths, r = this._parsedPaths, i = this._bindings, a = i.length, o = void 0, s = t.length, l = this.nCachedObjects_, u = 0, c = arguments.length, void 0; u !== c; ++u) {
        var t;
        var e;
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var l;
        var u;
        var c;
        var h = arguments[u];
        var d = h.uuid;
        var f = e[d];
        if (void 0 === f) {
          f = s++;
          e[d] = f;
          t.push(h);
          for (p = 0, m = a, void 0; p !== m; ++p) {
            var p;
            var m;
            i[p].push(new tc(h, n[p], r[p]));
          }
        } else if (f < l) {
          o = t[f];
          var v = --l;
          var g = t[v];
          e[g.uuid] = f;
          t[f] = g;
          e[d] = v;
          t[v] = h;
          for (y = 0, b = a, void 0; y !== b; ++y) {
            var y;
            var b;
            var x = i[y];
            var _ = x[v];
            var w = x[f];
            x[f] = _;
            if (void 0 === w) {
              w = new tc(h, n[y], r[y]);
            }
            x[v] = w;
          }
        } else if (t[f] !== o) {
          console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
        }
      }
      this.nCachedObjects_ = l;
    },
    remove: function () {
      for (t = this._objects, e = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_, a = 0, o = arguments.length, void 0; a !== o; ++a) {
        var t;
        var e;
        var n;
        var r;
        var i;
        var a;
        var o;
        var s = arguments[a];
        var l = s.uuid;
        var u = e[l];
        if (void 0 !== u && u >= i) {
          var c = i++;
          var h = t[c];
          e[h.uuid] = u;
          t[u] = h;
          e[l] = c;
          t[c] = s;
          for (d = 0, f = r, void 0; d !== f; ++d) {
            var d;
            var f;
            var p = n[d];
            var m = p[c];
            var v = p[u];
            p[u] = m;
            p[c] = v;
          }
        }
      }
      this.nCachedObjects_ = i;
    },
    uncache: function () {
      for (t = this._objects, e = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_, a = t.length, o = 0, s = arguments.length, void 0; o !== s; ++o) {
        var t;
        var e;
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var l = arguments[o].uuid;
        var u = e[l];
        if (void 0 !== u) {
          delete e[l];
          if (u < i) {
            var c = --i;
            var h = t[c];
            var d = --a;
            var f = t[d];
            e[h.uuid] = u;
            t[u] = h;
            e[f.uuid] = c;
            t[c] = f;
            t.pop();
            for (p = 0, m = r, void 0; p !== m; ++p) {
              var p;
              var m;
              var v = n[p];
              var g = v[c];
              var y = v[d];
              v[u] = g;
              v[c] = y;
              v.pop();
            }
          } else {
            var b = --a;
            var x = t[b];
            if (b > 0) {
              e[x.uuid] = u;
            }
            t[u] = x;
            t.pop();
            for (_ = 0, w = r, void 0; _ !== w; ++_) {
              var _;
              var w;
              var S = n[_];
              S[u] = S[b];
              S.pop();
            }
          }
        }
      }
      this.nCachedObjects_ = i;
    },
    subscribe_: function (t, e) {
      var n = this._bindingsIndicesByPath;
      var r = n[t];
      var i = this._bindings;
      if (void 0 !== r) return i[r];
      var a = this._paths;
      var o = this._parsedPaths;
      var s = this._objects;
      var l = s.length;
      var u = this.nCachedObjects_;
      var c = new Array(l);
      r = i.length;
      n[t] = r;
      a.push(t);
      o.push(e);
      i.push(c);
      for (h = u, d = s.length, void 0; h !== d; ++h) {
        var h;
        var d;
        var f = s[h];
        c[h] = new tc(f, t, e);
      }
      return c;
    },
    unsubscribe_: function (t) {
      var e = this._bindingsIndicesByPath;
      var n = e[t];
      if (void 0 !== n) {
        var r = this._paths;
        var i = this._parsedPaths;
        var a = this._bindings;
        var o = a.length - 1;
        var s = a[o];
        e[t[o]] = n;
        a[n] = s;
        a.pop();
        i[n] = i[o];
        i.pop();
        r[n] = r[o];
        r.pop();
      }
    }
  });
  var nc = function () {
    function t(t, e, n, r) {
      this._mixer = t;
      this._clip = e;
      this._localRoot = n || null;
      this.blendMode = r || e.blendMode;
      for (i = e.tracks, a = i.length, o = new Array(a), s = {
        endingStart: G,
        endingEnd: G
      }, l = 0, void 0; l !== a; ++l) {
        var i;
        var a;
        var o;
        var s;
        var l;
        var u = i[l].createInterpolant(null);
        o[l] = u;
        u.settings = s;
      }
      this._interpolantSettings = s;
      this._interpolants = o;
      this._propertyBindings = new Array(a);
      this._cacheIndex = null;
      this._byClipCacheIndex = null;
      this._timeScaleInterpolant = null;
      this._weightInterpolant = null;
      this.loop = 2201;
      this._loopCount = -1;
      this._startTime = null;
      this.time = 0;
      this.timeScale = 1;
      this._effectiveTimeScale = 1;
      this.weight = 1;
      this._effectiveWeight = 1;
      this.repetitions = 1 / 0;
      this.paused = !1;
      this.enabled = !0;
      this.clampWhenFinished = !1;
      this.zeroSlopeAtStart = !0;
      this.zeroSlopeAtEnd = !0;
    }
    var e = t.prototype;
    e.play = function () {
      this._mixer._activateAction(this);
      return this;
    };
    e.stop = function () {
      this._mixer._deactivateAction(this);
      return this.reset();
    };
    e.reset = function () {
      this.paused = !1;
      this.enabled = !0;
      this.time = 0;
      this._loopCount = -1;
      this._startTime = null;
      return this.stopFading().stopWarping();
    };
    e.isRunning = function () {
      return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
    };
    e.isScheduled = function () {
      return this._mixer._isActiveAction(this);
    };
    e.startAt = function (t) {
      this._startTime = t;
      return this;
    };
    e.setLoop = function (t, e) {
      this.loop = t;
      this.repetitions = e;
      return this;
    };
    e.setEffectiveWeight = function (t) {
      this.weight = t;
      this._effectiveWeight = this.enabled ? t : 0;
      return this.stopFading();
    };
    e.getEffectiveWeight = function () {
      return this._effectiveWeight;
    };
    e.fadeIn = function (t) {
      return this._scheduleFading(t, 0, 1);
    };
    e.fadeOut = function (t) {
      return this._scheduleFading(t, 1, 0);
    };
    e.crossFadeFrom = function (t, e, n) {
      t.fadeOut(e);
      this.fadeIn(e);
      if (n) {
        var r = this._clip.duration,
          i = t._clip.duration,
          a = i / r,
          o = r / i;
        t.warp(1, a, e), this.warp(o, 1, e);
      }
      return this;
    };
    e.crossFadeTo = function (t, e, n) {
      return t.crossFadeFrom(this, e, n);
    };
    e.stopFading = function () {
      var t = this._weightInterpolant;
      if (null !== t) {
        this._weightInterpolant = null;
        this._mixer._takeBackControlInterpolant(t);
      }
      return this;
    };
    e.setEffectiveTimeScale = function (t) {
      this.timeScale = t;
      this._effectiveTimeScale = this.paused ? 0 : t;
      return this.stopWarping();
    };
    e.getEffectiveTimeScale = function () {
      return this._effectiveTimeScale;
    };
    e.setDuration = function (t) {
      this.timeScale = this._clip.duration / t;
      return this.stopWarping();
    };
    e.syncWith = function (t) {
      this.time = t.time;
      this.timeScale = t.timeScale;
      return this.stopWarping();
    };
    e.halt = function (t) {
      return this.warp(this._effectiveTimeScale, 0, t);
    };
    e.warp = function (t, e, n) {
      var r = this._mixer;
      var i = r.time;
      var a = this.timeScale;
      var o = this._timeScaleInterpolant;
      if (null === o) {
        o = r._lendControlInterpolant();
        this._timeScaleInterpolant = o;
      }
      var s = o.parameterPositions;
      var l = o.sampleValues;
      s[0] = i;
      s[1] = i + n;
      l[0] = t / a;
      l[1] = e / a;
      return this;
    };
    e.stopWarping = function () {
      var t = this._timeScaleInterpolant;
      if (null !== t) {
        this._timeScaleInterpolant = null;
        this._mixer._takeBackControlInterpolant(t);
      }
      return this;
    };
    e.getMixer = function () {
      return this._mixer;
    };
    e.getClip = function () {
      return this._clip;
    };
    e.getRoot = function () {
      return this._localRoot || this._mixer._root;
    };
    e._update = function (t, e, n, r) {
      if (this.enabled) {
        var i = this._startTime;
        if (null !== i) {
          var a = (t - i) * n;
          if (a < 0 || 0 === n) return;
          this._startTime = null;
          e = n * a;
        }
        e *= this._updateTimeScale(t);
        var o = this._updateTime(e);
        var s = this._updateWeight(t);
        if (s > 0) {
          var l = this._interpolants;
          var u = this._propertyBindings;
          if (this.blendMode === W) for (c = 0, h = l.length, void 0; c !== h; ++c) {
            var c;
            var h;
            l[c].evaluate(o);
            u[c].accumulateAdditive(s);
          } else for (d = 0, f = l.length, void 0; d !== f; ++d) {
            var d;
            var f;
            l[d].evaluate(o);
            u[d].accumulate(r, s);
          }
        }
      } else this._updateWeight(t);
    };
    e._updateWeight = function (t) {
      var e = 0;
      if (this.enabled) {
        e = this.weight;
        var n = this._weightInterpolant;
        if (null !== n) {
          var r = n.evaluate(t)[0];
          e *= r;
          if (t > n.parameterPositions[1]) {
            this.stopFading();
            if (0 === r) {
              this.enabled = !1;
            }
          }
        }
      }
      this._effectiveWeight = e;
      return e;
    };
    e._updateTimeScale = function (t) {
      var e = 0;
      if (!this.paused) {
        e = this.timeScale;
        var n = this._timeScaleInterpolant;
        if (null !== n) {
          e *= n.evaluate(t)[0];
          if (t > n.parameterPositions[1]) {
            this.stopWarping();
            if (0 === e) {
              this.paused = !0;
            } else {
              this.timeScale = e;
            }
          }
        }
      }
      this._effectiveTimeScale = e;
      return e;
    };
    e._updateTime = function (t) {
      var e = this._clip.duration;
      var n = this.loop;
      var r = this.time + t;
      var i = this._loopCount;
      var a = 2202 === n;
      if (0 === t) return -1 === i ? r : a && 1 == (1 & i) ? e - r : r;
      if (2200 === n) {
        if (-1 === i) {
          this._loopCount = 0;
          this._setEndings(!0, !0, !1);
        }
        t: {
          if (r >= e) r = e;else {
            if (!(r < 0)) {
              this.time = r;
              break t;
            }
            r = 0;
          }
          if (this.clampWhenFinished) {
            this.paused = !0;
          } else {
            this.enabled = !1;
          }
          this.time = r;
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t < 0 ? -1 : 1
          });
        }
      } else {
        if (-1 === i) {
          if (t >= 0) {
            i = 0;
            this._setEndings(!0, 0 === this.repetitions, a);
          } else {
            this._setEndings(0 === this.repetitions, !0, a);
          }
        }
        if (r >= e || r < 0) {
          var o = Math.floor(r / e);
          r -= e * o, i += Math.abs(o);
          var s = this.repetitions - i;
          if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, r = t > 0 ? e : 0, this.time = r, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t > 0 ? 1 : -1
          });else {
            if (1 === s) {
              var l = t < 0;
              this._setEndings(l, !l, a);
            } else this._setEndings(!1, !1, a);
            this._loopCount = i, this.time = r, this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: o
            });
          }
        } else this.time = r;
        if (a && 1 == (1 & i)) return e - r;
      }
      return r;
    };
    e._setEndings = function (t, e, n) {
      var r = this._interpolantSettings;
      if (n) {
        r.endingStart = H;
        r.endingEnd = H;
      } else {
        r.endingStart = t ? this.zeroSlopeAtStart ? H : G : j;
        r.endingEnd = e ? this.zeroSlopeAtEnd ? H : G : j;
      }
    };
    e._scheduleFading = function (t, e, n) {
      var r = this._mixer;
      var i = r.time;
      var a = this._weightInterpolant;
      if (null === a) {
        a = r._lendControlInterpolant();
        this._weightInterpolant = a;
      }
      var o = a.parameterPositions;
      var s = a.sampleValues;
      o[0] = i;
      s[0] = e;
      o[1] = i + t;
      s[1] = n;
      return this;
    };
    return t;
  }();
  function rc(t) {
    this._root = t;
    this._initMemoryManager();
    this._accuIndex = 0;
    this.time = 0;
    this.timeScale = 1;
  }
  rc.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: rc,
    _bindAction: function (t, e) {
      var n = t._localRoot || this._root;
      var r = t._clip.tracks;
      var i = r.length;
      var a = t._propertyBindings;
      var o = t._interpolants;
      var s = n.uuid;
      var l = this._bindingsByRootAndName;
      var u = l[s];
      if (void 0 === u) {
        u = {};
        l[s] = u;
      }
      for (var c = 0; c !== i; ++c) {
        var h = r[c];
        var d = h.name;
        var f = u[d];
        if (void 0 !== f) a[c] = f;else {
          if (void 0 !== (f = a[c])) {
            if (null === f._cacheIndex) {
              ++f.referenceCount;
              this._addInactiveBinding(f, s, d);
            }
            continue;
          }
          var p = e && e._propertyBindings[c].binding.parsedPath;
          ++(f = new Hu(tc.create(n, d, p), h.ValueTypeName, h.getValueSize())).referenceCount;
          this._addInactiveBinding(f, s, d);
          a[c] = f;
        }
        o[c].resultBuffer = f.buffer;
      }
    },
    _activateAction: function (t) {
      if (!this._isActiveAction(t)) {
        if (null === t._cacheIndex) {
          var e = (t._localRoot || this._root).uuid;
          var n = t._clip.uuid;
          var r = this._actionsByClip[n];
          this._bindAction(t, r && r.knownActions[0]);
          this._addInactiveAction(t, n, e);
        }
        for (i = t._propertyBindings, a = 0, o = i.length, void 0; a !== o; ++a) {
          var i;
          var a;
          var o;
          var s = i[a];
          if (0 == s.useCount++) {
            this._lendBinding(s);
            s.saveOriginalState();
          }
        }
        this._lendAction(t);
      }
    },
    _deactivateAction: function (t) {
      if (this._isActiveAction(t)) {
        for (e = t._propertyBindings, n = 0, r = e.length, void 0; n !== r; ++n) {
          var e;
          var n;
          var r;
          var i = e[n];
          if (0 == --i.useCount) {
            i.restoreOriginalState();
            this._takeBackBinding(i);
          }
        }
        this._takeBackAction(t);
      }
    },
    _initMemoryManager: function () {
      this._actions = [];
      this._nActiveActions = 0;
      this._actionsByClip = {};
      this._bindings = [];
      this._nActiveBindings = 0;
      this._bindingsByRootAndName = {};
      this._controlInterpolants = [];
      this._nActiveControlInterpolants = 0;
      var t = this;
      this.stats = {
        actions: {
          get total() {
            return t._actions.length;
          },
          get inUse() {
            return t._nActiveActions;
          }
        },
        bindings: {
          get total() {
            return t._bindings.length;
          },
          get inUse() {
            return t._nActiveBindings;
          }
        },
        controlInterpolants: {
          get total() {
            return t._controlInterpolants.length;
          },
          get inUse() {
            return t._nActiveControlInterpolants;
          }
        }
      };
    },
    _isActiveAction: function (t) {
      var e = t._cacheIndex;
      return null !== e && e < this._nActiveActions;
    },
    _addInactiveAction: function (t, e, n) {
      var r = this._actions;
      var i = this._actionsByClip;
      var a = i[e];
      if (void 0 === a) {
        a = {
          knownActions: [t],
          actionByRoot: {}
        };
        t._byClipCacheIndex = 0;
        i[e] = a;
      } else {
        var o = a.knownActions;
        t._byClipCacheIndex = o.length;
        o.push(t);
      }
      t._cacheIndex = r.length;
      r.push(t);
      a.actionByRoot[n] = t;
    },
    _removeInactiveAction: function (t) {
      var e = this._actions;
      var n = e[e.length - 1];
      var r = t._cacheIndex;
      n._cacheIndex = r;
      e[r] = n;
      e.pop();
      t._cacheIndex = null;
      var i = t._clip.uuid;
      var a = this._actionsByClip;
      var o = a[i];
      var s = o.knownActions;
      var l = s[s.length - 1];
      var u = t._byClipCacheIndex;
      l._byClipCacheIndex = u;
      s[u] = l;
      s.pop();
      t._byClipCacheIndex = null;
      delete o.actionByRoot[(t._localRoot || this._root).uuid];
      if (0 === s.length) {
        delete a[i];
      }
      this._removeInactiveBindingsForAction(t);
    },
    _removeInactiveBindingsForAction: function (t) {
      for (e = t._propertyBindings, n = 0, r = e.length, void 0; n !== r; ++n) {
        var e;
        var n;
        var r;
        var i = e[n];
        if (0 == --i.referenceCount) {
          this._removeInactiveBinding(i);
        }
      }
    },
    _lendAction: function (t) {
      var e = this._actions;
      var n = t._cacheIndex;
      var r = this._nActiveActions++;
      var i = e[r];
      t._cacheIndex = r;
      e[r] = t;
      i._cacheIndex = n;
      e[n] = i;
    },
    _takeBackAction: function (t) {
      var e = this._actions;
      var n = t._cacheIndex;
      var r = --this._nActiveActions;
      var i = e[r];
      t._cacheIndex = r;
      e[r] = t;
      i._cacheIndex = n;
      e[n] = i;
    },
    _addInactiveBinding: function (t, e, n) {
      var r = this._bindingsByRootAndName;
      var i = this._bindings;
      var a = r[e];
      if (void 0 === a) {
        a = {};
        r[e] = a;
      }
      a[n] = t;
      t._cacheIndex = i.length;
      i.push(t);
    },
    _removeInactiveBinding: function (t) {
      var e = this._bindings;
      var n = t.binding;
      var r = n.rootNode.uuid;
      var i = n.path;
      var a = this._bindingsByRootAndName;
      var o = a[r];
      var s = e[e.length - 1];
      var l = t._cacheIndex;
      s._cacheIndex = l;
      e[l] = s;
      e.pop();
      delete o[i];
      if (0 === Object.keys(o).length) {
        delete a[r];
      }
    },
    _lendBinding: function (t) {
      var e = this._bindings;
      var n = t._cacheIndex;
      var r = this._nActiveBindings++;
      var i = e[r];
      t._cacheIndex = r;
      e[r] = t;
      i._cacheIndex = n;
      e[n] = i;
    },
    _takeBackBinding: function (t) {
      var e = this._bindings;
      var n = t._cacheIndex;
      var r = --this._nActiveBindings;
      var i = e[r];
      t._cacheIndex = r;
      e[r] = t;
      i._cacheIndex = n;
      e[n] = i;
    },
    _lendControlInterpolant: function () {
      var t = this._controlInterpolants;
      var e = this._nActiveControlInterpolants++;
      var n = t[e];
      if (void 0 === n) {
        (n = new Qs(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e;
        t[e] = n;
      }
      return n;
    },
    _takeBackControlInterpolant: function (t) {
      var e = this._controlInterpolants;
      var n = t.__cacheIndex;
      var r = --this._nActiveControlInterpolants;
      var i = e[r];
      t.__cacheIndex = r;
      e[r] = t;
      i.__cacheIndex = n;
      e[n] = i;
    },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction: function (t, e, n) {
      var r = e || this._root;
      var i = r.uuid;
      var a = "string" == typeof t ? ul.findByName(r, t) : t;
      var o = null !== a ? a.uuid : t;
      var s = this._actionsByClip[o];
      var l = null;
      if (void 0 === n) {
        n = null !== a ? a.blendMode : V;
      }
      if (void 0 !== s) {
        var u = s.actionByRoot[i];
        if (void 0 !== u && u.blendMode === n) return u;
        l = s.knownActions[0], null === a && (a = l._clip);
      }
      if (null === a) return null;
      var c = new nc(this, a, e, n);
      this._bindAction(c, l);
      this._addInactiveAction(c, o, i);
      return c;
    },
    existingAction: function (t, e) {
      var n = e || this._root;
      var r = n.uuid;
      var i = "string" == typeof t ? ul.findByName(n, t) : t;
      var a = i ? i.uuid : t;
      var o = this._actionsByClip[a];
      return void 0 !== o && o.actionByRoot[r] || null;
    },
    stopAllAction: function () {
      for (t = this._actions, e = this._nActiveActions - 1, void 0; e >= 0; --e) {
        var t;
        var e;
        t[e].stop();
      }
      return this;
    },
    update: function (t) {
      t *= this.timeScale;
      for (e = this._actions, n = this._nActiveActions, r = this.time += t, i = Math.sign(t), a = this._accuIndex ^= 1, o = 0, void 0; o !== n; ++o) {
        var e;
        var n;
        var r;
        var i;
        var a;
        var o;
        e[o]._update(r, t, i, a);
      }
      for (s = this._bindings, l = this._nActiveBindings, u = 0, void 0; u !== l; ++u) {
        var s;
        var l;
        var u;
        s[u].apply(a);
      }
      return this;
    },
    setTime: function (t) {
      this.time = 0;
      for (var e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
      return this.update(t);
    },
    getRoot: function () {
      return this._root;
    },
    uncacheClip: function (t) {
      var e = this._actions;
      var n = t.uuid;
      var r = this._actionsByClip;
      var i = r[n];
      if (void 0 !== i) {
        for (a = i.knownActions, o = 0, s = a.length, void 0; o !== s; ++o) {
          var a;
          var o;
          var s;
          var l = a[o];
          this._deactivateAction(l);
          var u = l._cacheIndex;
          var c = e[e.length - 1];
          l._cacheIndex = null;
          l._byClipCacheIndex = null;
          c._cacheIndex = u;
          e[u] = c;
          e.pop();
          this._removeInactiveBindingsForAction(l);
        }
        delete r[n];
      }
    },
    uncacheRoot: function (t) {
      var e = t.uuid;
      var n = this._actionsByClip;
      for (var r in n) {
        var i = n[r].actionByRoot[e];
        if (void 0 !== i) {
          this._deactivateAction(i);
          this._removeInactiveAction(i);
        }
      }
      var a = this._bindingsByRootAndName[e];
      if (void 0 !== a) for (var o in a) {
        var s = a[o];
        s.restoreOriginalState();
        this._removeInactiveBinding(s);
      }
    },
    uncacheAction: function (t, e) {
      var n = this.existingAction(t, e);
      if (null !== n) {
        this._deactivateAction(n);
        this._removeInactiveAction(n);
      }
    }
  });
  var ic = function () {
    function t(t) {
      if ("string" == typeof t) {
        console.warn("THREE.Uniform: Type parameter is no longer needed.");
        t = arguments[1];
      }
      this.value = t;
    }
    t.prototype.clone = function () {
      return new t(void 0 === this.value.clone ? this.value : this.value.clone());
    };
    return t;
  }();
  function ac(t, e, n) {
    la.call(this, t, e);
    this.meshPerAttribute = n || 1;
  }
  function oc(t, e, n, r, i) {
    this.buffer = t;
    this.type = e;
    this.itemSize = n;
    this.elementSize = r;
    this.count = i;
    this.version = 0;
  }
  function sc(t, e, n, r) {
    this.ray = new Zt(t, e);
    this.near = n || 0;
    this.far = r || 1 / 0;
    this.camera = null;
    this.layers = new se();
    this.params = {
      Mesh: {},
      Line: {
        threshold: 1
      },
      LOD: {},
      Points: {
        threshold: 1
      },
      Sprite: {}
    };
    Object.defineProperties(this.params, {
      PointCloud: {
        get: function () {
          console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
          return this.Points;
        }
      }
    });
  }
  function lc(t, e) {
    return t.distance - e.distance;
  }
  function uc(t, e, n, r) {
    if (t.layers.test(e.layers)) {
      t.raycast(e, n);
    }
    if (!0 === r) for (var i = t.children, a = 0, o = i.length; a < o; a++) uc(i[a], e, n, !0);
  }
  ac.prototype = Object.assign(Object.create(la.prototype), {
    constructor: ac,
    isInstancedInterleavedBuffer: !0,
    copy: function (t) {
      la.prototype.copy.call(this, t);
      this.meshPerAttribute = t.meshPerAttribute;
      return this;
    },
    clone: function (t) {
      var e = la.prototype.clone.call(this, t);
      e.meshPerAttribute = this.meshPerAttribute;
      return e;
    },
    toJSON: function (t) {
      var e = la.prototype.toJSON.call(this, t);
      e.isInstancedInterleavedBuffer = !0;
      e.meshPerAttribute = this.meshPerAttribute;
      return e;
    }
  });
  Object.defineProperty(oc.prototype, "needsUpdate", {
    set: function (t) {
      if (!0 === t) {
        this.version++;
      }
    }
  });
  Object.assign(oc.prototype, {
    isGLBufferAttribute: !0,
    setBuffer: function (t) {
      this.buffer = t;
      return this;
    },
    setType: function (t, e) {
      this.type = t;
      this.elementSize = e;
      return this;
    },
    setItemSize: function (t) {
      this.itemSize = t;
      return this;
    },
    setCount: function (t) {
      this.count = t;
      return this;
    }
  });
  Object.assign(sc.prototype, {
    set: function (t, e) {
      this.ray.set(t, e);
    },
    setFromCamera: function (t, e) {
      if (e && e.isPerspectiveCamera) {
        this.ray.origin.setFromMatrixPosition(e.matrixWorld);
        this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize();
        this.camera = e;
      } else {
        if (e && e.isOrthographicCamera) {
          this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e);
          this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld);
          this.camera = e;
        } else {
          console.error("THREE.Raycaster: Unsupported camera type.");
        }
      }
    },
    intersectObject: function (t, e, n) {
      var r = n || [];
      uc(t, this, r, e);
      r.sort(lc);
      return r;
    },
    intersectObjects: function (t, e, n) {
      var r = n || [];
      if (!1 === Array.isArray(t)) {
        console.warn("THREE.Raycaster.intersectObjects: objects is not an Array.");
        return r;
      }
      for (i = 0, a = t.length, void 0; i < a; i++) {
        var i;
        var a;
        uc(t[i], this, r, e);
      }
      r.sort(lc);
      return r;
    }
  });
  var cc = function () {
    function t(t, e, n) {
      if (void 0 === t) {
        t = 1;
      }
      if (void 0 === e) {
        e = 0;
      }
      if (void 0 === n) {
        n = 0;
      }
      this.radius = t;
      this.phi = e;
      this.theta = n;
      return this;
    }
    var e = t.prototype;
    e.set = function (t, e, n) {
      this.radius = t;
      this.phi = e;
      this.theta = n;
      return this;
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.radius = t.radius;
      this.phi = t.phi;
      this.theta = t.theta;
      return this;
    };
    e.makeSafe = function () {
      var t = 1e-6;
      this.phi = Math.max(t, Math.min(Math.PI - t, this.phi));
      return this;
    };
    e.setFromVector3 = function (t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z);
    };
    e.setFromCartesianCoords = function (t, e, n) {
      this.radius = Math.sqrt(t * t + e * e + n * n);
      if (0 === this.radius) {
        this.theta = 0;
        this.phi = 0;
      } else {
        this.theta = Math.atan2(t, n);
        this.phi = Math.acos(st.clamp(e / this.radius, -1, 1));
      }
      return this;
    };
    return t;
  }();
  var hc = function () {
    function t(t, e, n) {
      this.radius = void 0 !== t ? t : 1;
      this.theta = void 0 !== e ? e : 0;
      this.y = void 0 !== n ? n : 0;
      return this;
    }
    var e = t.prototype;
    e.set = function (t, e, n) {
      this.radius = t;
      this.theta = e;
      this.y = n;
      return this;
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.radius = t.radius;
      this.theta = t.theta;
      this.y = t.y;
      return this;
    };
    e.setFromVector3 = function (t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z);
    };
    e.setFromCartesianCoords = function (t, e, n) {
      this.radius = Math.sqrt(t * t + n * n);
      this.theta = Math.atan2(t, n);
      this.y = e;
      return this;
    };
    return t;
  }();
  var dc = new ft();
  var fc = function () {
    function t(t, e) {
      Object.defineProperty(this, "isBox2", {
        value: !0
      });
      this.min = void 0 !== t ? t : new ft(1 / 0, 1 / 0);
      this.max = void 0 !== e ? e : new ft(-1 / 0, -1 / 0);
    }
    var e = t.prototype;
    e.set = function (t, e) {
      this.min.copy(t);
      this.max.copy(e);
      return this;
    };
    e.setFromPoints = function (t) {
      this.makeEmpty();
      for (e = 0, n = t.length, void 0; e < n; e++) {
        var e;
        var n;
        this.expandByPoint(t[e]);
      }
      return this;
    };
    e.setFromCenterAndSize = function (t, e) {
      var n = dc.copy(e).multiplyScalar(0.5);
      this.min.copy(t).sub(n);
      this.max.copy(t).add(n);
      return this;
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.min.copy(t.min);
      this.max.copy(t.max);
      return this;
    };
    e.makeEmpty = function () {
      this.min.x = this.min.y = 1 / 0;
      this.max.x = this.max.y = -1 / 0;
      return this;
    };
    e.isEmpty = function () {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    };
    e.getCenter = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Box2: .getCenter() target is now required");
        t = new ft();
      }
      return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    };
    e.getSize = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Box2: .getSize() target is now required");
        t = new ft();
      }
      return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
    };
    e.expandByPoint = function (t) {
      this.min.min(t);
      this.max.max(t);
      return this;
    };
    e.expandByVector = function (t) {
      this.min.sub(t);
      this.max.add(t);
      return this;
    };
    e.expandByScalar = function (t) {
      this.min.addScalar(-t);
      this.max.addScalar(t);
      return this;
    };
    e.containsPoint = function (t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
    };
    e.containsBox = function (t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
    };
    e.getParameter = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Box2: .getParameter() target is now required");
        e = new ft();
      }
      return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
    };
    e.intersectsBox = function (t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
    };
    e.clampPoint = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Box2: .clampPoint() target is now required");
        e = new ft();
      }
      return e.copy(t).clamp(this.min, this.max);
    };
    e.distanceToPoint = function (t) {
      return dc.copy(t).clamp(this.min, this.max).sub(t).length();
    };
    e.intersect = function (t) {
      this.min.max(t.min);
      this.max.min(t.max);
      return this;
    };
    e.union = function (t) {
      this.min.min(t.min);
      this.max.max(t.max);
      return this;
    };
    e.translate = function (t) {
      this.min.add(t);
      this.max.add(t);
      return this;
    };
    e.equals = function (t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    };
    return t;
  }();
  var pc = new wt();
  var mc = new wt();
  var vc = function () {
    function t(t, e) {
      this.start = void 0 !== t ? t : new wt();
      this.end = void 0 !== e ? e : new wt();
    }
    var e = t.prototype;
    e.set = function (t, e) {
      this.start.copy(t);
      this.end.copy(e);
      return this;
    };
    e.clone = function () {
      return new this.constructor().copy(this);
    };
    e.copy = function (t) {
      this.start.copy(t.start);
      this.end.copy(t.end);
      return this;
    };
    e.getCenter = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Line3: .getCenter() target is now required");
        t = new wt();
      }
      return t.addVectors(this.start, this.end).multiplyScalar(0.5);
    };
    e.delta = function (t) {
      if (void 0 === t) {
        console.warn("THREE.Line3: .delta() target is now required");
        t = new wt();
      }
      return t.subVectors(this.end, this.start);
    };
    e.distanceSq = function () {
      return this.start.distanceToSquared(this.end);
    };
    e.distance = function () {
      return this.start.distanceTo(this.end);
    };
    e.at = function (t, e) {
      if (void 0 === e) {
        console.warn("THREE.Line3: .at() target is now required");
        e = new wt();
      }
      return this.delta(e).multiplyScalar(t).add(this.start);
    };
    e.closestPointToPointParameter = function (t, e) {
      pc.subVectors(t, this.start);
      mc.subVectors(this.end, this.start);
      var n = mc.dot(mc);
      var r = mc.dot(pc) / n;
      if (e) {
        r = st.clamp(r, 0, 1);
      }
      return r;
    };
    e.closestPointToPoint = function (t, e, n) {
      var r = this.closestPointToPointParameter(t, e);
      if (void 0 === n) {
        console.warn("THREE.Line3: .closestPointToPoint() target is now required");
        n = new wt();
      }
      return this.delta(n).multiplyScalar(r).add(this.start);
    };
    e.applyMatrix4 = function (t) {
      this.start.applyMatrix4(t);
      this.end.applyMatrix4(t);
      return this;
    };
    e.equals = function (t) {
      return t.start.equals(this.start) && t.end.equals(this.end);
    };
    return t;
  }();
  function gc(t) {
    _e.call(this);
    this.material = t;
    this.render = function () {};
    this.hasPositions = !1;
    this.hasNormals = !1;
    this.hasColors = !1;
    this.hasUvs = !1;
    this.positionArray = null;
    this.normalArray = null;
    this.colorArray = null;
    this.uvArray = null;
    this.count = 0;
  }
  gc.prototype = Object.create(_e.prototype);
  gc.prototype.constructor = gc;
  gc.prototype.isImmediateRenderObject = !0;
  var yc = new wt();
  var bc = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).light = e;
      r.light.updateMatrixWorld();
      r.matrix = e.matrixWorld;
      r.matrixAutoUpdate = !1;
      r.color = n;
      for (i = new vn(), a = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], o = 0, s = 1, void 0; o < 32; o++, s++) {
        var i;
        var a;
        var o;
        var s;
        var l = o / 32 * Math.PI * 2;
        var u = s / 32 * Math.PI * 2;
        a.push(Math.cos(l), Math.sin(l), 1, Math.cos(u), Math.sin(u), 1);
      }
      i.setAttribute("position", new an(a, 3));
      var c = new Wa({
        fog: !1,
        toneMapped: !1
      });
      r.cone = new to(i, c);
      r.add(r.cone);
      r.update();
      return r;
    }
    ct(e, t);
    var n = e.prototype;
    n.dispose = function () {
      this.cone.geometry.dispose();
      this.cone.material.dispose();
    };
    n.update = function () {
      this.light.updateMatrixWorld();
      var t = this.light.distance ? this.light.distance : 1e3;
      var e = t * Math.tan(this.light.angle);
      this.cone.scale.set(e, e, t);
      yc.setFromMatrixPosition(this.light.target.matrixWorld);
      this.cone.lookAt(yc);
      if (void 0 !== this.color) {
        this.cone.material.color.set(this.color);
      } else {
        this.cone.material.color.copy(this.light.color);
      }
    };
    return e;
  }(_e);
  var xc = new wt();
  var _c = new Kt();
  var wc = new Kt();
  var Sc = function (t) {
    function e(e) {
      for (r = Ec(e), i = new vn(), a = [], o = [], s = new je(0, 0, 1), l = new je(0, 1, 0), u = 0, void 0; u < r.length; u++) {
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var l;
        var u;
        var c = r[u];
        if (c.parent && c.parent.isBone) {
          a.push(0, 0, 0);
          a.push(0, 0, 0);
          o.push(s.r, s.g, s.b);
          o.push(l.r, l.g, l.b);
        }
      }
      i.setAttribute("position", new an(a, 3));
      i.setAttribute("color", new an(o, 3));
      var h = new Wa({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0
      });
      (n = t.call(this, i, h) || this).type = "SkeletonHelper";
      n.isSkeletonHelper = !0;
      n.root = e;
      n.bones = r;
      n.matrix = e.matrixWorld;
      n.matrixAutoUpdate = !1;
      return n;
    }
    ct(e, t);
    e.prototype.updateMatrixWorld = function (e) {
      var n = this.bones;
      var r = this.geometry;
      var i = r.getAttribute("position");
      wc.getInverse(this.root.matrixWorld);
      for (a = 0, o = 0, void 0; a < n.length; a++) {
        var a;
        var o;
        var s = n[a];
        if (s.parent && s.parent.isBone) {
          _c.multiplyMatrices(wc, s.matrixWorld);
          xc.setFromMatrixPosition(_c);
          i.setXYZ(o, xc.x, xc.y, xc.z);
          _c.multiplyMatrices(wc, s.parent.matrixWorld);
          xc.setFromMatrixPosition(_c);
          i.setXYZ(o + 1, xc.x, xc.y, xc.z);
          o += 2;
        }
      }
      r.getAttribute("position").needsUpdate = !0;
      t.prototype.updateMatrixWorld.call(this, e);
    };
    return e;
  }(to);
  function Ec(t) {
    var e = [];
    if (t && t.isBone) {
      e.push(t);
    }
    for (var n = 0; n < t.children.length; n++) e.push.apply(e, Ec(t.children[n]));
    return e;
  }
  var Tc = function (t) {
    function e(e, n, r) {
      var i;
      var a = new Ts(n, 4, 2);
      var o = new Ye({
        wireframe: !0,
        fog: !1,
        toneMapped: !1
      });
      (i = t.call(this, a, o) || this).light = e;
      i.light.updateMatrixWorld();
      i.color = r;
      i.type = "PointLightHelper";
      i.matrix = i.light.matrixWorld;
      i.matrixAutoUpdate = !1;
      i.update();
      return i;
    }
    ct(e, t);
    var n = e.prototype;
    n.dispose = function () {
      this.geometry.dispose();
      this.material.dispose();
    };
    n.update = function () {
      if (void 0 !== this.color) {
        this.material.color.set(this.color);
      } else {
        this.material.color.copy(this.light.color);
      }
    };
    return e;
  }(Dn);
  var Mc = new wt();
  var Ac = new je();
  var Lc = new je();
  var Cc = function (t) {
    function e(e, n, r) {
      var i;
      (i = t.call(this) || this).light = e;
      i.light.updateMatrixWorld();
      i.matrix = e.matrixWorld;
      i.matrixAutoUpdate = !1;
      i.color = r;
      var a = new ms(n);
      a.rotateY(0.5 * Math.PI);
      i.material = new Ye({
        wireframe: !0,
        fog: !1,
        toneMapped: !1
      });
      if (void 0 === i.color) {
        i.material.vertexColors = !0;
      }
      var o = a.getAttribute("position");
      var s = new Float32Array(3 * o.count);
      a.setAttribute("color", new Ke(s, 3));
      i.add(new Dn(a, i.material));
      i.update();
      return i;
    }
    ct(e, t);
    var n = e.prototype;
    n.dispose = function () {
      this.children[0].geometry.dispose();
      this.children[0].material.dispose();
    };
    n.update = function () {
      var t = this.children[0];
      if (void 0 !== this.color) this.material.color.set(this.color);else {
        var e = t.geometry.getAttribute("color");
        Ac.copy(this.light.color);
        Lc.copy(this.light.groundColor);
        for (n = 0, r = e.count, void 0; n < r; n++) {
          var n;
          var r;
          var i = n < r / 2 ? Ac : Lc;
          e.setXYZ(n, i.r, i.g, i.b);
        }
        e.needsUpdate = !0;
      }
      t.lookAt(Mc.setFromMatrixPosition(this.light.matrixWorld).negate());
    };
    return e;
  }(_e);
  var Pc = function (t) {
    function e(e, n, r, i) {
      var a;
      e = e || 10;
      n = n || 10;
      r = new je(void 0 !== r ? r : 4473924);
      i = new je(void 0 !== i ? i : 8947848);
      for (o = n / 2, s = e / n, l = e / 2, u = [], c = [], h = 0, d = 0, f = -l, void 0; h <= n; h++, f += s) {
        var o;
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        u.push(-l, 0, f, l, 0, f);
        u.push(f, 0, -l, f, 0, l);
        var p = h === o ? r : i;
        p.toArray(c, d);
        d += 3;
        p.toArray(c, d);
        d += 3;
        p.toArray(c, d);
        d += 3;
        p.toArray(c, d);
        d += 3;
      }
      var m = new vn();
      m.setAttribute("position", new an(u, 3));
      m.setAttribute("color", new an(c, 3));
      var v = new Wa({
        vertexColors: !0,
        toneMapped: !1
      });
      (a = t.call(this, m, v) || this).type = "GridHelper";
      return a;
    }
    ct(e, t);
    return e;
  }(to);
  var Rc = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      e = e || 10;
      n = n || 16;
      r = r || 8;
      i = i || 64;
      a = new je(void 0 !== a ? a : 4473924);
      o = new je(void 0 !== o ? o : 8947848);
      for (l = [], u = [], c = 0, void 0; c <= n; c++) {
        var l;
        var u;
        var c;
        var h = c / n * (2 * Math.PI);
        var d = Math.sin(h) * e;
        var f = Math.cos(h) * e;
        l.push(0, 0, 0);
        l.push(d, 0, f);
        var p = 1 & c ? a : o;
        u.push(p.r, p.g, p.b);
        u.push(p.r, p.g, p.b);
      }
      for (var m = 0; m <= r; m++) for (v = 1 & m ? a : o, g = e - e / r * m, y = 0, void 0; y < i; y++) {
        var v;
        var g;
        var y;
        var b = y / i * (2 * Math.PI);
        var x = Math.sin(b) * g;
        var _ = Math.cos(b) * g;
        l.push(x, 0, _);
        u.push(v.r, v.g, v.b);
        b = (y + 1) / i * (2 * Math.PI);
        x = Math.sin(b) * g;
        _ = Math.cos(b) * g;
        l.push(x, 0, _);
        u.push(v.r, v.g, v.b);
      }
      var w = new vn();
      w.setAttribute("position", new an(l, 3));
      w.setAttribute("color", new an(u, 3));
      var S = new Wa({
        vertexColors: !0,
        toneMapped: !1
      });
      (s = t.call(this, w, S) || this).type = "PolarGridHelper";
      return s;
    }
    ct(e, t);
    return e;
  }(to);
  var Oc = new wt();
  var Ic = new wt();
  var Dc = new wt();
  var kc = function (t) {
    function e(e, n, r) {
      var i;
      (i = t.call(this) || this).light = e;
      i.light.updateMatrixWorld();
      i.matrix = e.matrixWorld;
      i.matrixAutoUpdate = !1;
      i.color = r;
      if (void 0 === n) {
        n = 1;
      }
      var a = new vn();
      a.setAttribute("position", new an([-n, n, 0, n, n, 0, n, -n, 0, -n, -n, 0, -n, n, 0], 3));
      var o = new Wa({
        fog: !1,
        toneMapped: !1
      });
      i.lightPlane = new Ja(a, o);
      i.add(i.lightPlane);
      (a = new vn()).setAttribute("position", new an([0, 0, 0, 0, 0, 1], 3));
      i.targetLine = new Ja(a, o);
      i.add(i.targetLine);
      i.update();
      return i;
    }
    ct(e, t);
    var n = e.prototype;
    n.dispose = function () {
      this.lightPlane.geometry.dispose();
      this.lightPlane.material.dispose();
      this.targetLine.geometry.dispose();
      this.targetLine.material.dispose();
    };
    n.update = function () {
      Oc.setFromMatrixPosition(this.light.matrixWorld);
      Ic.setFromMatrixPosition(this.light.target.matrixWorld);
      Dc.subVectors(Ic, Oc);
      this.lightPlane.lookAt(Ic);
      if (void 0 !== this.color) {
        this.lightPlane.material.color.set(this.color);
        this.targetLine.material.color.set(this.color);
      } else {
        this.lightPlane.material.color.copy(this.light.color);
        this.targetLine.material.color.copy(this.light.color);
      }
      this.targetLine.lookAt(Ic);
      this.targetLine.scale.z = Dc.length();
    };
    return e;
  }(_e);
  var Nc = new wt();
  var Bc = new Hn();
  var Fc = function (t) {
    function e(e) {
      var n;
      var r = new vn();
      var i = new Wa({
        color: 16777215,
        vertexColors: !0,
        toneMapped: !1
      });
      var a = [];
      var o = [];
      var s = {};
      var l = new je(16755200);
      var u = new je(16711680);
      var c = new je(43775);
      var h = new je(16777215);
      var d = new je(3355443);
      function f(t, e, n) {
        p(t, n);
        p(e, n);
      }
      function p(t, e) {
        a.push(0, 0, 0);
        o.push(e.r, e.g, e.b);
        if (void 0 === s[t]) {
          s[t] = [];
        }
        s[t].push(a.length / 3 - 1);
      }
      f("n1", "n2", l);
      f("n2", "n4", l);
      f("n4", "n3", l);
      f("n3", "n1", l);
      f("f1", "f2", l);
      f("f2", "f4", l);
      f("f4", "f3", l);
      f("f3", "f1", l);
      f("n1", "f1", l);
      f("n2", "f2", l);
      f("n3", "f3", l);
      f("n4", "f4", l);
      f("p", "n1", u);
      f("p", "n2", u);
      f("p", "n3", u);
      f("p", "n4", u);
      f("u1", "u2", c);
      f("u2", "u3", c);
      f("u3", "u1", c);
      f("c", "t", h);
      f("p", "c", d);
      f("cn1", "cn2", d);
      f("cn3", "cn4", d);
      f("cf1", "cf2", d);
      f("cf3", "cf4", d);
      r.setAttribute("position", new an(a, 3));
      r.setAttribute("color", new an(o, 3));
      (n = t.call(this, r, i) || this).type = "CameraHelper";
      n.camera = e;
      if (n.camera.updateProjectionMatrix) {
        n.camera.updateProjectionMatrix();
      }
      n.matrix = e.matrixWorld;
      n.matrixAutoUpdate = !1;
      n.pointMap = s;
      n.update();
      return n;
    }
    ct(e, t);
    e.prototype.update = function () {
      var t = this.geometry;
      var e = this.pointMap;
      Bc.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
      Uc("c", e, t, Bc, 0, 0, -1);
      Uc("t", e, t, Bc, 0, 0, 1);
      Uc("n1", e, t, Bc, -1, -1, -1);
      Uc("n2", e, t, Bc, 1, -1, -1);
      Uc("n3", e, t, Bc, -1, 1, -1);
      Uc("n4", e, t, Bc, 1, 1, -1);
      Uc("f1", e, t, Bc, -1, -1, 1);
      Uc("f2", e, t, Bc, 1, -1, 1);
      Uc("f3", e, t, Bc, -1, 1, 1);
      Uc("f4", e, t, Bc, 1, 1, 1);
      Uc("u1", e, t, Bc, 0.7, 1.1, -1);
      Uc("u2", e, t, Bc, -0.7, 1.1, -1);
      Uc("u3", e, t, Bc, 0, 2, -1);
      Uc("cf1", e, t, Bc, -1, 0, 1);
      Uc("cf2", e, t, Bc, 1, 0, 1);
      Uc("cf3", e, t, Bc, 0, -1, 1);
      Uc("cf4", e, t, Bc, 0, 1, 1);
      Uc("cn1", e, t, Bc, -1, 0, -1);
      Uc("cn2", e, t, Bc, 1, 0, -1);
      Uc("cn3", e, t, Bc, 0, -1, -1);
      Uc("cn4", e, t, Bc, 0, 1, -1);
      t.getAttribute("position").needsUpdate = !0;
    };
    return e;
  }(to);
  function Uc(t, e, n, r, i, a, o) {
    Nc.set(i, a, o).unproject(r);
    var s = e[t];
    if (void 0 !== s) for (l = n.getAttribute("position"), u = 0, c = s.length, void 0; u < c; u++) {
      var l;
      var u;
      var c;
      l.setXYZ(s[u], Nc.x, Nc.y, Nc.z);
    }
  }
  var zc;
  var Gc;
  var Hc;
  var jc = new Tt();
  var Vc = function (t) {
    function e(e, n) {
      var r;
      if (void 0 === n) {
        n = 16776960;
      }
      var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
      var a = new Float32Array(24);
      var o = new vn();
      o.setIndex(new Ke(i, 1));
      o.setAttribute("position", new Ke(a, 3));
      (r = t.call(this, o, new Wa({
        color: n,
        toneMapped: !1
      })) || this).object = e;
      r.type = "BoxHelper";
      r.matrixAutoUpdate = !1;
      r.update();
      return r;
    }
    ct(e, t);
    var n = e.prototype;
    n.update = function (t) {
      if (void 0 !== t) {
        console.warn("THREE.BoxHelper: .update() has no longer arguments.");
      }
      if (void 0 !== this.object) {
        jc.setFromObject(this.object);
      }
      if (!jc.isEmpty()) {
        var e = jc.min,
          n = jc.max,
          r = this.geometry.attributes.position,
          i = r.array;
        i[0] = n.x, i[1] = n.y, i[2] = n.z, i[3] = e.x, i[4] = n.y, i[5] = n.z, i[6] = e.x, i[7] = e.y, i[8] = n.z, i[9] = n.x, i[10] = e.y, i[11] = n.z, i[12] = n.x, i[13] = n.y, i[14] = e.z, i[15] = e.x, i[16] = n.y, i[17] = e.z, i[18] = e.x, i[19] = e.y, i[20] = e.z, i[21] = n.x, i[22] = e.y, i[23] = e.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere();
      }
    };
    n.setFromObject = function (t) {
      this.object = t;
      this.update();
      return this;
    };
    n.copy = function (t) {
      to.prototype.copy.call(this, t);
      this.object = t.object;
      return this;
    };
    return e;
  }(to);
  var Wc = function (t) {
    function e(e, n) {
      var r;
      if (void 0 === n) {
        n = 16776960;
      }
      var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
      var a = new vn();
      a.setIndex(new Ke(i, 1));
      a.setAttribute("position", new an([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3));
      (r = t.call(this, a, new Wa({
        color: n,
        toneMapped: !1
      })) || this).box = e;
      r.type = "Box3Helper";
      r.geometry.computeBoundingSphere();
      return r;
    }
    ct(e, t);
    e.prototype.updateMatrixWorld = function (e) {
      var n = this.box;
      if (n.isEmpty()) {
        n.getCenter(this.position);
        n.getSize(this.scale);
        this.scale.multiplyScalar(0.5);
        t.prototype.updateMatrixWorld.call(this, e);
      }
    };
    return e;
  }(to);
  var qc = function (t) {
    function e(e, n, r) {
      var i;
      var a = void 0 !== r ? r : 16776960;
      var o = new vn();
      o.setAttribute("position", new an([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3));
      o.computeBoundingSphere();
      (i = t.call(this, o, new Wa({
        color: a,
        toneMapped: !1
      })) || this).type = "PlaneHelper";
      i.plane = e;
      i.size = void 0 === n ? 1 : n;
      var s = new vn();
      s.setAttribute("position", new an([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3));
      s.computeBoundingSphere();
      i.add(new Dn(s, new Ye({
        color: a,
        opacity: 0.2,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !1
      })));
      return i;
    }
    ct(e, t);
    e.prototype.updateMatrixWorld = function (e) {
      var n = -this.plane.constant;
      if (Math.abs(n) < 1e-8) {
        n = 1e-8;
      }
      this.scale.set(0.5 * this.size, 0.5 * this.size, n);
      this.children[0].material.side = n < 0 ? 1 : 0;
      this.lookAt(this.plane.normal);
      t.prototype.updateMatrixWorld.call(this, e);
    };
    return e;
  }(Ja);
  var Yc = new wt();
  var Xc = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      (s = t.call(this) || this).type = "ArrowHelper";
      if (void 0 === e) {
        e = new wt(0, 0, 1);
      }
      if (void 0 === n) {
        n = new wt(0, 0, 0);
      }
      if (void 0 === r) {
        r = 1;
      }
      if (void 0 === i) {
        i = 16776960;
      }
      if (void 0 === a) {
        a = 0.2 * r;
      }
      if (void 0 === o) {
        o = 0.2 * a;
      }
      if (void 0 === zc) {
        (zc = new vn()).setAttribute("position", new an([0, 0, 0, 0, 1, 0], 3));
        (Gc = new wo(0, 0.5, 1, 5, 1)).translate(0, -0.5, 0);
      }
      s.position.copy(n);
      s.line = new Ja(zc, new Wa({
        color: i,
        toneMapped: !1
      }));
      s.line.matrixAutoUpdate = !1;
      s.add(s.line);
      s.cone = new Dn(Gc, new Ye({
        color: i,
        toneMapped: !1
      }));
      s.cone.matrixAutoUpdate = !1;
      s.add(s.cone);
      s.setDirection(e);
      s.setLength(r, a, o);
      return s;
    }
    ct(e, t);
    var n = e.prototype;
    n.setDirection = function (t) {
      if (t.y > 0.99999) this.quaternion.set(0, 0, 0, 1);else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);else {
        Yc.set(t.z, 0, -t.x).normalize();
        var e = Math.acos(t.y);
        this.quaternion.setFromAxisAngle(Yc, e);
      }
    };
    n.setLength = function (t, e, n) {
      if (void 0 === e) {
        e = 0.2 * t;
      }
      if (void 0 === n) {
        n = 0.2 * e;
      }
      this.line.scale.set(1, Math.max(1e-4, t - e), 1);
      this.line.updateMatrix();
      this.cone.scale.set(n, e, n);
      this.cone.position.y = t;
      this.cone.updateMatrix();
    };
    n.setColor = function (t) {
      this.line.material.color.set(t);
      this.cone.material.color.set(t);
    };
    n.copy = function (e) {
      t.prototype.copy.call(this, e, !1);
      this.line.copy(e.line);
      this.cone.copy(e.cone);
      return this;
    };
    return e;
  }(_e);
  var Zc = function (t) {
    function e(e) {
      var n;
      if (void 0 === e) {
        e = 1;
      }
      var r = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e];
      var i = new vn();
      i.setAttribute("position", new an(r, 3));
      i.setAttribute("color", new an([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], 3));
      var a = new Wa({
        vertexColors: !0,
        toneMapped: !1
      });
      (n = t.call(this, i, a) || this).type = "AxesHelper";
      return n;
    }
    ct(e, t);
    return e;
  }(to);
  var Kc = Math.pow(2, 8);
  var Jc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var $c = 5 + Jc.length;
  var Qc = 20;
  var th = ((Hc = {})[3e3] = 0, Hc[3001] = 1, Hc[3002] = 2, Hc[3004] = 3, Hc[3005] = 4, Hc[3006] = 5, Hc[3007] = 6, Hc);
  var eh = new Ql();
  var nh = dh();
  var rh = nh._lodPlanes;
  var ih = nh._sizeLods;
  var ah = nh._sigmas;
  var oh = null;
  var sh = (1 + Math.sqrt(5)) / 2;
  var lh = 1 / sh;
  var uh = [new wt(1, 1, 1), new wt(-1, 1, 1), new wt(1, 1, -1), new wt(-1, 1, -1), new wt(0, sh, lh), new wt(0, sh, -lh), new wt(lh, 0, sh), new wt(-lh, 0, sh), new wt(sh, lh, 0), new wt(-sh, lh, 0)];
  var ch = function () {
    function t(t) {
      var e;
      this._renderer = t;
      this._pingPongRenderTarget = null;
      this._blurMaterial = new zs({
        name: "SphericalGaussianBlur",
        defines: {
          n: e = Qc
        },
        uniforms: {
          envMap: {
            value: null
          },
          samples: {
            value: 1
          },
          weights: {
            value: new Float32Array(e)
          },
          latitudinal: {
            value: !1
          },
          dTheta: {
            value: 0
          },
          mipInt: {
            value: 0
          },
          poleAxis: {
            value: new wt(0, 1, 0)
          },
          inputEncoding: {
            value: th[3e3]
          },
          outputEncoding: {
            value: th[3e3]
          }
        },
        vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
        blending: 0,
        depthTest: !1,
        depthWrite: !1
      });
      this._equirectShader = null;
      this._cubemapShader = null;
      this._compileMaterial(this._blurMaterial);
    }
    var e = t.prototype;
    e.fromScene = function (t, e, n, r) {
      if (void 0 === e) {
        e = 0;
      }
      if (void 0 === n) {
        n = 0.1;
      }
      if (void 0 === r) {
        r = 100;
      }
      oh = this._renderer.getRenderTarget();
      var i = this._allocateTargets();
      this._sceneToCubeUV(t, n, r, i);
      if (e > 0) {
        this._blur(i, 0, 0, e);
      }
      this._applyPMREM(i);
      this._cleanup(i);
      return i;
    };
    e.fromEquirectangular = function (t) {
      return this._fromTexture(t);
    };
    e.fromCubemap = function (t) {
      return this._fromTexture(t);
    };
    e.compileCubemapShader = function () {
      if (null === this._cubemapShader) {
        this._cubemapShader = vh();
        this._compileMaterial(this._cubemapShader);
      }
    };
    e.compileEquirectangularShader = function () {
      if (null === this._equirectShader) {
        this._equirectShader = mh();
        this._compileMaterial(this._equirectShader);
      }
    };
    e.dispose = function () {
      this._blurMaterial.dispose();
      if (null !== this._cubemapShader) {
        this._cubemapShader.dispose();
      }
      if (null !== this._equirectShader) {
        this._equirectShader.dispose();
      }
      for (var t = 0; t < rh.length; t++) rh[t].dispose();
    };
    e._cleanup = function (t) {
      this._pingPongRenderTarget.dispose();
      this._renderer.setRenderTarget(oh);
      t.scissorTest = !1;
      ph(t, 0, 0, t.width, t.height);
    };
    e._fromTexture = function (t) {
      oh = this._renderer.getRenderTarget();
      var e = this._allocateTargets(t);
      this._textureToCubeUV(t, e);
      this._applyPMREM(e);
      this._cleanup(e);
      return e;
    };
    e._allocateTargets = function (t) {
      var e = {
        magFilter: d,
        minFilter: d,
        generateMipmaps: !1,
        type: y,
        format: 1023,
        encoding: hh(t) ? t.encoding : Z,
        depthBuffer: !1
      };
      var n = fh(e);
      n.depthBuffer = !t;
      this._pingPongRenderTarget = fh(e);
      return n;
    };
    e._compileMaterial = function (t) {
      var e = new Dn(rh[0], t);
      this._renderer.compile(e, eh);
    };
    e._sceneToCubeUV = function (t, e, n, r) {
      var i = new jn(90, 1, e, n);
      var a = [1, -1, 1, 1, 1, 1];
      var o = [1, 1, 1, -1, -1, -1];
      var s = this._renderer;
      var l = s.outputEncoding;
      var u = s.toneMapping;
      var c = s.getClearColor();
      var h = s.getClearAlpha();
      s.toneMapping = 0;
      s.outputEncoding = q;
      var d = t.background;
      if (d && d.isColor) {
        d.convertSRGBToLinear();
        var f = Math.max(d.r, d.g, d.b);
        var p = Math.min(Math.max(Math.ceil(Math.log2(f)), -128), 127);
        d = d.multiplyScalar(Math.pow(2, -p));
        var m = (p + 128) / 255;
        s.setClearColor(d, m);
        t.background = null;
      }
      for (var v = 0; v < 6; v++) {
        var g = v % 3;
        if (0 == g) {
          i.up.set(0, a[v], 0);
          i.lookAt(o[v], 0, 0);
        } else {
          if (1 == g) {
            i.up.set(0, 0, a[v]);
            i.lookAt(0, o[v], 0);
          } else {
            i.up.set(0, a[v], 0);
            i.lookAt(0, 0, o[v]);
          }
        }
        ph(r, g * Kc, v > 2 ? Kc : 0, Kc, Kc);
        s.setRenderTarget(r);
        s.render(t, i);
      }
      s.toneMapping = u;
      s.outputEncoding = l;
      s.setClearColor(c, h);
    };
    e._textureToCubeUV = function (t, e) {
      var n = this._renderer;
      if (t.isCubeTexture) {
        if (null == this._cubemapShader) {
          this._cubemapShader = vh();
        }
      } else {
        if (null == this._equirectShader) {
          this._equirectShader = mh();
        }
      }
      var r = t.isCubeTexture ? this._cubemapShader : this._equirectShader;
      var i = new Dn(rh[0], r);
      var a = r.uniforms;
      a.envMap.value = t;
      if (t.isCubeTexture) {
        a.texelSize.value.set(1 / t.image.width, 1 / t.image.height);
      }
      a.inputEncoding.value = th[t.encoding];
      a.outputEncoding.value = th[e.texture.encoding];
      ph(e, 0, 0, 3 * Kc, 2 * Kc);
      n.setRenderTarget(e);
      n.render(i, eh);
    };
    e._applyPMREM = function (t) {
      var e = this._renderer;
      var n = e.autoClear;
      e.autoClear = !1;
      for (var r = 1; r < $c; r++) {
        var i = Math.sqrt(ah[r] * ah[r] - ah[r - 1] * ah[r - 1]);
        var a = uh[(r - 1) % uh.length];
        this._blur(t, r - 1, r, i, a);
      }
      e.autoClear = n;
    };
    e._blur = function (t, e, n, r, i) {
      var a = this._pingPongRenderTarget;
      this._halfBlur(t, a, e, n, r, "latitudinal", i);
      this._halfBlur(a, t, n, n, r, "longitudinal", i);
    };
    e._halfBlur = function (t, e, n, r, i, a, o) {
      var s = this._renderer;
      var l = this._blurMaterial;
      if ("latitudinal" !== a && "longitudinal" !== a) {
        console.error("blur direction must be either latitudinal or longitudinal!");
      }
      var u = new Dn(rh[r], l);
      var c = l.uniforms;
      var h = ih[n] - 1;
      var d = isFinite(i) ? Math.PI / (2 * h) : 2 * Math.PI / 39;
      var f = i / d;
      var p = isFinite(i) ? 1 + Math.floor(3 * f) : Qc;
      if (p > Qc) {
        console.warn("sigmaRadians, " + i + ", is too large and will clip, as it requested " + p + " samples when the maximum is set to " + Qc);
      }
      for (m = [], v = 0, g = 0, void 0; g < Qc; ++g) {
        var m;
        var v;
        var g;
        var y = g / f;
        var b = Math.exp(-y * y / 2);
        m.push(b);
        if (0 == g) {
          v += b;
        } else {
          if (g < p) {
            v += 2 * b;
          }
        }
      }
      for (var x = 0; x < m.length; x++) m[x] = m[x] / v;
      c.envMap.value = t.texture;
      c.samples.value = p;
      c.weights.value = m;
      c.latitudinal.value = "latitudinal" === a;
      if (o) {
        c.poleAxis.value = o;
      }
      c.dTheta.value = d;
      c.mipInt.value = 8 - n;
      c.inputEncoding.value = th[t.texture.encoding];
      c.outputEncoding.value = th[t.texture.encoding];
      var _ = ih[r];
      ph(e, 3 * Math.max(0, Kc - 2 * _), (0 === r ? 0 : 2 * Kc) + 2 * _ * (r > 4 ? r - 8 + 4 : 0), 3 * _, 2 * _);
      s.setRenderTarget(e);
      s.render(u, eh);
    };
    return t;
  }();
  function hh(t) {
    return void 0 !== t && t.type === y && (t.encoding === q || t.encoding === Y || t.encoding === X);
  }
  function dh() {
    for (t = [], e = [], n = [], r = 8, i = 0, void 0; i < $c; i++) {
      var t;
      var e;
      var n;
      var r;
      var i;
      var a = Math.pow(2, r);
      e.push(a);
      var o = 1 / a;
      if (i > 4) {
        o = Jc[i - 8 + 4 - 1];
      } else {
        if (0 == i) {
          o = 0;
        }
      }
      n.push(o);
      for (s = 1 / (a - 1), l = -s / 2, u = 1 + s / 2, c = [l, l, u, l, u, u, l, l, u, u, l, u], h = new Float32Array(108), d = new Float32Array(72), f = new Float32Array(36), p = 0, void 0; p < 6; p++) {
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var p;
        var m = p % 3 * 2 / 3 - 1;
        var v = p > 2 ? 0 : -1;
        var g = [m, v, 0, m + 2 / 3, v, 0, m + 2 / 3, v + 1, 0, m, v, 0, m + 2 / 3, v + 1, 0, m, v + 1, 0];
        h.set(g, 18 * p);
        d.set(c, 12 * p);
        var y = [p, p, p, p, p, p];
        f.set(y, 6 * p);
      }
      var b = new vn();
      b.setAttribute("position", new Ke(h, 3));
      b.setAttribute("uv", new Ke(d, 2));
      b.setAttribute("faceIndex", new Ke(f, 1));
      t.push(b);
      if (r > 4) {
        r--;
      }
    }
    return {
      _lodPlanes: t,
      _sizeLods: e,
      _sigmas: n
    };
  }
  function fh(t) {
    var e = new bt(3 * Kc, 3 * Kc, t);
    e.texture.mapping = s;
    e.texture.name = "PMREM.cubeUv";
    e.scissorTest = !0;
    return e;
  }
  function ph(t, e, n, r, i) {
    t.viewport.set(e, n, r, i);
    t.scissor.set(e, n, r, i);
  }
  function mh() {
    return new zs({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        texelSize: {
          value: new ft(1, 1)
        },
        inputEncoding: {
          value: th[3e3]
        },
        outputEncoding: {
          value: th[3e3]
        }
      },
      vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }
  function vh() {
    return new zs({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        inputEncoding: {
          value: th[3e3]
        },
        outputEncoding: {
          value: th[3e3]
        }
      },
      vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }
  function gh(t) {
    console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
    Rl.call(this, t);
    this.type = "catmullrom";
    this.closed = !0;
  }
  function yh(t) {
    console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
    Rl.call(this, t);
    this.type = "catmullrom";
  }
  function bh(t) {
    console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
    Rl.call(this, t);
    this.type = "catmullrom";
  }
  Sl.create = function (t, e) {
    console.log("THREE.Curve.create() has been deprecated");
    t.prototype = Object.create(Sl.prototype);
    t.prototype.constructor = t;
    t.prototype.getPoint = e;
    return t;
  };
  Object.assign(jl.prototype, {
    createPointsGeometry: function (t) {
      console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      var e = this.getPoints(t);
      return this.createGeometry(e);
    },
    createSpacedPointsGeometry: function (t) {
      console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      var e = this.getSpacedPoints(t);
      return this.createGeometry(e);
    },
    createGeometry: function (t) {
      console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      for (e = new yo(), n = 0, r = t.length, void 0; n < r; n++) {
        var e;
        var n;
        var r;
        var i = t[n];
        e.vertices.push(new wt(i.x, i.y, i.z || 0));
      }
      return e;
    }
  });
  Object.assign(Vl.prototype, {
    fromPoints: function (t) {
      console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");
      return this.setFromPoints(t);
    }
  });
  gh.prototype = Object.create(Rl.prototype);
  yh.prototype = Object.create(Rl.prototype);
  bh.prototype = Object.create(Rl.prototype);
  Object.assign(bh.prototype, {
    initFromArray: function () {
      console.error("THREE.Spline: .initFromArray() has been removed.");
    },
    getControlPointsArray: function () {
      console.error("THREE.Spline: .getControlPointsArray() has been removed.");
    },
    reparametrizeByArcLength: function () {
      console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");
    }
  });
  Pc.prototype.setColors = function () {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
  };
  Sc.prototype.update = function () {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
  };
  Object.assign(pl.prototype, {
    extractUrlBase: function (t) {
      console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
      return su.extractUrlBase(t);
    }
  });
  pl.Handlers = {
    add: function () {
      console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
    },
    get: function () {
      console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
    }
  };
  Object.assign(fc.prototype, {
    center: function (t) {
      console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
      return this.getCenter(t);
    },
    empty: function () {
      console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    },
    isIntersectionBox: function (t) {
      console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
      return this.intersectsBox(t);
    },
    size: function (t) {
      console.warn("THREE.Box2: .size() has been renamed to .getSize().");
      return this.getSize(t);
    }
  });
  Object.assign(Tt.prototype, {
    center: function (t) {
      console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
      return this.getCenter(t);
    },
    empty: function () {
      console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    },
    isIntersectionBox: function (t) {
      console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
      return this.intersectsBox(t);
    },
    isIntersectionSphere: function (t) {
      console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
      return this.intersectsSphere(t);
    },
    size: function (t) {
      console.warn("THREE.Box3: .size() has been renamed to .getSize().");
      return this.getSize(t);
    }
  });
  Object.assign(Gt.prototype, {
    empty: function () {
      console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    }
  });
  Jn.prototype.setFromMatrix = function (t) {
    console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().");
    return this.setFromProjectionMatrix(t);
  };
  vc.prototype.center = function (t) {
    console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
    return this.getCenter(t);
  };
  Object.assign(st, {
    random16: function () {
      console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");
      return Math.random();
    },
    nearestPowerOfTwo: function (t) {
      console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");
      return st.floorPowerOfTwo(t);
    },
    nextPowerOfTwo: function (t) {
      console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");
      return st.ceilPowerOfTwo(t);
    }
  });
  Object.assign(pt.prototype, {
    flattenToArrayOffset: function (t, e) {
      console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
      return this.toArray(t, e);
    },
    multiplyVector3: function (t) {
      console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
      return t.applyMatrix3(this);
    },
    multiplyVector3Array: function () {
      console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    },
    applyToBufferAttribute: function (t) {
      console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.");
      return t.applyMatrix3(this);
    },
    applyToVector3Array: function () {
      console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    }
  });
  Object.assign(Kt.prototype, {
    extractPosition: function (t) {
      console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
      return this.copyPosition(t);
    },
    flattenToArrayOffset: function (t, e) {
      console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
      return this.toArray(t, e);
    },
    getPosition: function () {
      console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
      return new wt().setFromMatrixColumn(this, 3);
    },
    setRotationFromQuaternion: function (t) {
      console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
      return this.makeRotationFromQuaternion(t);
    },
    multiplyToArray: function () {
      console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    },
    multiplyVector3: function (t) {
      console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
      return t.applyMatrix4(this);
    },
    multiplyVector4: function (t) {
      console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
      return t.applyMatrix4(this);
    },
    multiplyVector3Array: function () {
      console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    },
    rotateAxis: function (t) {
      console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
      t.transformDirection(this);
    },
    crossVector: function (t) {
      console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
      return t.applyMatrix4(this);
    },
    translate: function () {
      console.error("THREE.Matrix4: .translate() has been removed.");
    },
    rotateX: function () {
      console.error("THREE.Matrix4: .rotateX() has been removed.");
    },
    rotateY: function () {
      console.error("THREE.Matrix4: .rotateY() has been removed.");
    },
    rotateZ: function () {
      console.error("THREE.Matrix4: .rotateZ() has been removed.");
    },
    rotateByAxis: function () {
      console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    },
    applyToBufferAttribute: function (t) {
      console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.");
      return t.applyMatrix4(this);
    },
    applyToVector3Array: function () {
      console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    },
    makeFrustum: function (t, e, n, r, i, a) {
      console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
      return this.makePerspective(t, e, r, n, i, a);
    }
  });
  Te.prototype.isIntersectionLine = function (t) {
    console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
    return this.intersectsLine(t);
  };
  _t.prototype.multiplyVector3 = function (t) {
    console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
    return t.applyQuaternion(this);
  };
  Object.assign(Zt.prototype, {
    isIntersectionBox: function (t) {
      console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
      return this.intersectsBox(t);
    },
    isIntersectionPlane: function (t) {
      console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
      return this.intersectsPlane(t);
    },
    isIntersectionSphere: function (t) {
      console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
      return this.intersectsSphere(t);
    }
  });
  Object.assign(Ne.prototype, {
    area: function () {
      console.warn("THREE.Triangle: .area() has been renamed to .getArea().");
      return this.getArea();
    },
    barycoordFromPoint: function (t, e) {
      console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
      return this.getBarycoord(t, e);
    },
    midpoint: function (t) {
      console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");
      return this.getMidpoint(t);
    },
    normal: function (t) {
      console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
      return this.getNormal(t);
    },
    plane: function (t) {
      console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");
      return this.getPlane(t);
    }
  });
  Object.assign(Ne, {
    barycoordFromPoint: function (t, e, n, r, i) {
      console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
      return Ne.getBarycoord(t, e, n, r, i);
    },
    normal: function (t, e, n, r) {
      console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
      return Ne.getNormal(t, e, n, r);
    }
  });
  Object.assign(Wl.prototype, {
    extractAllPoints: function (t) {
      console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
      return this.extractPoints(t);
    },
    extrude: function (t) {
      console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
      return new cs(this, t);
    },
    makeGeometry: function (t) {
      console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
      return new Es(this, t);
    }
  });
  Object.assign(ft.prototype, {
    fromAttribute: function (t, e, n) {
      console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
      return this.fromBufferAttribute(t, e, n);
    },
    distanceToManhattan: function (t) {
      console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
      return this.manhattanDistanceTo(t);
    },
    lengthManhattan: function () {
      console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");
      return this.manhattanLength();
    }
  });
  Object.assign(wt.prototype, {
    setEulerFromRotationMatrix: function () {
      console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
    },
    setEulerFromQuaternion: function () {
      console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
    },
    getPositionFromMatrix: function (t) {
      console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
      return this.setFromMatrixPosition(t);
    },
    getScaleFromMatrix: function (t) {
      console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
      return this.setFromMatrixScale(t);
    },
    getColumnFromMatrix: function (t, e) {
      console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
      return this.setFromMatrixColumn(e, t);
    },
    applyProjection: function (t) {
      console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
      return this.applyMatrix4(t);
    },
    fromAttribute: function (t, e, n) {
      console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
      return this.fromBufferAttribute(t, e, n);
    },
    distanceToManhattan: function (t) {
      console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
      return this.manhattanDistanceTo(t);
    },
    lengthManhattan: function () {
      console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
      return this.manhattanLength();
    }
  });
  Object.assign(yt.prototype, {
    fromAttribute: function (t, e, n) {
      console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
      return this.fromBufferAttribute(t, e, n);
    },
    lengthManhattan: function () {
      console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");
      return this.manhattanLength();
    }
  });
  Object.assign(yo.prototype, {
    computeTangents: function () {
      console.error("THREE.Geometry: .computeTangents() has been removed.");
    },
    computeLineDistances: function () {
      console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");
    },
    applyMatrix: function (t) {
      console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4().");
      return this.applyMatrix4(t);
    }
  });
  Object.assign(_e.prototype, {
    getChildByName: function (t) {
      console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
      return this.getObjectByName(t);
    },
    renderDepth: function () {
      console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
    },
    translate: function (t, e) {
      console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
      return this.translateOnAxis(e, t);
    },
    getWorldRotation: function () {
      console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
    },
    applyMatrix: function (t) {
      console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().");
      return this.applyMatrix4(t);
    }
  });
  Object.defineProperties(_e.prototype, {
    eulerOrder: {
      get: function () {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
        return this.rotation.order;
      },
      set: function (t) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
        this.rotation.order = t;
      }
    },
    useQuaternion: {
      get: function () {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      },
      set: function () {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      }
    }
  });
  Object.assign(Dn.prototype, {
    setDrawMode: function () {
      console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  });
  Object.defineProperties(Dn.prototype, {
    drawMode: {
      get: function () {
        console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.");
        return 0;
      },
      set: function () {
        console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
      }
    }
  });
  Object.defineProperties(Da.prototype, {
    objects: {
      get: function () {
        console.warn("THREE.LOD: .objects has been renamed to .levels.");
        return this.levels;
      }
    }
  });
  Object.defineProperty(Fa.prototype, "useVertexTexture", {
    get: function () {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    },
    set: function () {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    }
  });
  ka.prototype.initBones = function () {
    console.error("THREE.SkinnedMesh: initBones() has been removed.");
  };
  Object.defineProperty(Sl.prototype, "__arcLengthDivisions", {
    get: function () {
      console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
      return this.arcLengthDivisions;
    },
    set: function (t) {
      console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
      this.arcLengthDivisions = t;
    }
  });
  jn.prototype.setLens = function (t, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
    if (void 0 !== e) {
      this.filmGauge = e;
    }
    this.setFocalLength(t);
  };
  Object.defineProperties(ql.prototype, {
    onlyShadow: {
      set: function () {
        console.warn("THREE.Light: .onlyShadow has been removed.");
      }
    },
    shadowCameraFov: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
        this.shadow.camera.fov = t;
      }
    },
    shadowCameraLeft: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
        this.shadow.camera.left = t;
      }
    },
    shadowCameraRight: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
        this.shadow.camera.right = t;
      }
    },
    shadowCameraTop: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
        this.shadow.camera.top = t;
      }
    },
    shadowCameraBottom: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
        this.shadow.camera.bottom = t;
      }
    },
    shadowCameraNear: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
        this.shadow.camera.near = t;
      }
    },
    shadowCameraFar: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
        this.shadow.camera.far = t;
      }
    },
    shadowCameraVisible: {
      set: function () {
        console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
      }
    },
    shadowBias: {
      set: function (t) {
        console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
        this.shadow.bias = t;
      }
    },
    shadowDarkness: {
      set: function () {
        console.warn("THREE.Light: .shadowDarkness has been removed.");
      }
    },
    shadowMapWidth: {
      set: function (t) {
        console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
        this.shadow.mapSize.width = t;
      }
    },
    shadowMapHeight: {
      set: function (t) {
        console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
        this.shadow.mapSize.height = t;
      }
    }
  });
  Object.defineProperties(Ke.prototype, {
    length: {
      get: function () {
        console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
        return this.array.length;
      }
    },
    dynamic: {
      get: function () {
        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
        return this.usage === et;
      },
      set: function () {
        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
        this.setUsage(et);
      }
    }
  });
  Object.assign(Ke.prototype, {
    setDynamic: function (t) {
      console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.");
      this.setUsage(!0 === t ? et : tt);
      return this;
    },
    copyIndicesArray: function () {
      console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
    },
    setArray: function () {
      console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }
  });
  Object.assign(vn.prototype, {
    addIndex: function (t) {
      console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
      this.setIndex(t);
    },
    addAttribute: function (t, e) {
      console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().");
      return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new Ke(arguments[1], arguments[2])));
    },
    addDrawCall: function (t, e, n) {
      if (void 0 !== n) {
        console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
      }
      console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
      this.addGroup(t, e);
    },
    clearDrawCalls: function () {
      console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
      this.clearGroups();
    },
    computeTangents: function () {
      console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
    },
    computeOffsets: function () {
      console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    },
    removeAttribute: function (t) {
      console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().");
      return this.deleteAttribute(t);
    },
    applyMatrix: function (t) {
      console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().");
      return this.applyMatrix4(t);
    }
  });
  Object.defineProperties(vn.prototype, {
    drawcalls: {
      get: function () {
        console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
        return this.groups;
      }
    },
    offsets: {
      get: function () {
        console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
        return this.groups;
      }
    }
  });
  Object.defineProperties(lu.prototype, {
    maxInstancedCount: {
      get: function () {
        console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.");
        return this.instanceCount;
      },
      set: function (t) {
        console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.");
        this.instanceCount = t;
      }
    }
  });
  Object.defineProperties(sc.prototype, {
    linePrecision: {
      get: function () {
        console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");
        return this.params.Line.threshold;
      },
      set: function (t) {
        console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");
        this.params.Line.threshold = t;
      }
    }
  });
  Object.defineProperties(la.prototype, {
    dynamic: {
      get: function () {
        console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
        return this.usage === et;
      },
      set: function (t) {
        console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
        this.setUsage(t);
      }
    }
  });
  Object.assign(la.prototype, {
    setDynamic: function (t) {
      console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.");
      this.setUsage(!0 === t ? et : tt);
      return this;
    },
    setArray: function () {
      console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }
  });
  Object.assign(ls.prototype, {
    getArrays: function () {
      console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");
    },
    addShapeList: function () {
      console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");
    },
    addShape: function () {
      console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");
    }
  });
  Object.assign(sa.prototype, {
    dispose: function () {
      console.error("THREE.Scene: .dispose() has been removed.");
    }
  });
  Object.defineProperties(ic.prototype, {
    dynamic: {
      set: function () {
        console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");
      }
    },
    onUpdate: {
      value: function () {
        console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
        return this;
      }
    }
  });
  Object.defineProperties(qe.prototype, {
    wrapAround: {
      get: function () {
        console.warn("THREE.Material: .wrapAround has been removed.");
      },
      set: function () {
        console.warn("THREE.Material: .wrapAround has been removed.");
      }
    },
    overdraw: {
      get: function () {
        console.warn("THREE.Material: .overdraw has been removed.");
      },
      set: function () {
        console.warn("THREE.Material: .overdraw has been removed.");
      }
    },
    wrapRGB: {
      get: function () {
        console.warn("THREE.Material: .wrapRGB has been removed.");
        return new je();
      }
    },
    shading: {
      get: function () {
        console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
      },
      set: function (t) {
        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
        this.flatShading = 1 === t;
      }
    },
    stencilMask: {
      get: function () {
        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
        return this.stencilFuncMask;
      },
      set: function (t) {
        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
        this.stencilFuncMask = t;
      }
    }
  });
  Object.defineProperties(js.prototype, {
    metal: {
      get: function () {
        console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
        return !1;
      },
      set: function () {
        console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
      }
    }
  });
  Object.defineProperties(Hs.prototype, {
    transparency: {
      get: function () {
        console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission.");
        return this.transmission;
      },
      set: function (t) {
        console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission.");
        this.transmission = t;
      }
    }
  });
  Object.defineProperties(Gn.prototype, {
    derivatives: {
      get: function () {
        console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
        return this.extensions.derivatives;
      },
      set: function (t) {
        console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
        this.extensions.derivatives = t;
      }
    }
  });
  Object.assign(ra.prototype, {
    clearTarget: function (t, e, n, r) {
      console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");
      this.setRenderTarget(t);
      this.clear(e, n, r);
    },
    animate: function (t) {
      console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");
      this.setAnimationLoop(t);
    },
    getCurrentRenderTarget: function () {
      console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
      return this.getRenderTarget();
    },
    getMaxAnisotropy: function () {
      console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");
      return this.capabilities.getMaxAnisotropy();
    },
    getPrecision: function () {
      console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");
      return this.capabilities.precision;
    },
    resetGLState: function () {
      console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");
      return this.state.reset();
    },
    supportsFloatTextures: function () {
      console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
      return this.extensions.get("OES_texture_float");
    },
    supportsHalfFloatTextures: function () {
      console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
      return this.extensions.get("OES_texture_half_float");
    },
    supportsStandardDerivatives: function () {
      console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
      return this.extensions.get("OES_standard_derivatives");
    },
    supportsCompressedTextureS3TC: function () {
      console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
      return this.extensions.get("WEBGL_compressed_texture_s3tc");
    },
    supportsCompressedTexturePVRTC: function () {
      console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
      return this.extensions.get("WEBGL_compressed_texture_pvrtc");
    },
    supportsBlendMinMax: function () {
      console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
      return this.extensions.get("EXT_blend_minmax");
    },
    supportsVertexTextures: function () {
      console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
      return this.capabilities.vertexTextures;
    },
    supportsInstancedArrays: function () {
      console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
      return this.extensions.get("ANGLE_instanced_arrays");
    },
    enableScissorTest: function (t) {
      console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
      this.setScissorTest(t);
    },
    initMaterial: function () {
      console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    },
    addPrePlugin: function () {
      console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    },
    addPostPlugin: function () {
      console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    },
    updateShadowMap: function () {
      console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    },
    setFaceCulling: function () {
      console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    },
    allocTextureUnit: function () {
      console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
    },
    setTexture: function () {
      console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
    },
    setTexture2D: function () {
      console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
    },
    setTextureCube: function () {
      console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
    },
    getActiveMipMapLevel: function () {
      console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");
      return this.getActiveMipmapLevel();
    }
  });
  Object.defineProperties(ra.prototype, {
    shadowMapEnabled: {
      get: function () {
        return this.shadowMap.enabled;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
        this.shadowMap.enabled = t;
      }
    },
    shadowMapType: {
      get: function () {
        return this.shadowMap.type;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
        this.shadowMap.type = t;
      }
    },
    shadowMapCullFace: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    context: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");
        return this.getContext();
      }
    },
    vr: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr");
        return this.xr;
      }
    },
    gammaInput: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
        return !1;
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
      }
    },
    gammaOutput: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
        return !1;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
        this.outputEncoding = !0 === t ? Y : q;
      }
    },
    toneMappingWhitePoint: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
        return 1;
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
      }
    }
  });
  Object.defineProperties(Xi.prototype, {
    cullFace: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    renderReverseSided: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      }
    },
    renderSingleSided: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      }
    }
  });
  Object.defineProperties(bt.prototype, {
    wrapS: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
        return this.texture.wrapS;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
        this.texture.wrapS = t;
      }
    },
    wrapT: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
        return this.texture.wrapT;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
        this.texture.wrapT = t;
      }
    },
    magFilter: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
        return this.texture.magFilter;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
        this.texture.magFilter = t;
      }
    },
    minFilter: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
        return this.texture.minFilter;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
        this.texture.minFilter = t;
      }
    },
    anisotropy: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
        return this.texture.anisotropy;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
        this.texture.anisotropy = t;
      }
    },
    offset: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
        return this.texture.offset;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
        this.texture.offset = t;
      }
    },
    repeat: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
        return this.texture.repeat;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
        this.texture.repeat = t;
      }
    },
    format: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
        return this.texture.format;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
        this.texture.format = t;
      }
    },
    type: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
        return this.texture.type;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
        this.texture.type = t;
      }
    },
    generateMipmaps: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
        return this.texture.generateMipmaps;
      },
      set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
        this.texture.generateMipmaps = t;
      }
    }
  });
  Object.defineProperties(ku.prototype, {
    load: {
      value: function (t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var e = this;
        new Su().load(t, function (t) {
          e.setBuffer(t);
        });
        return this;
      }
    },
    startTime: {
      set: function () {
        console.warn("THREE.Audio: .startTime is now .play( delay ).");
      }
    }
  });
  Gu.prototype.getData = function () {
    console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
    return this.getFrequencyData();
  };
  Wn.prototype.updateCubeMap = function (t, e) {
    console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
    return this.update(t, e);
  };
  Wn.prototype.clear = function (t, e, n, r) {
    console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear().");
    return this.renderTarget.clear(t, e, n, r);
  };
  var xh = {
    merge: function (t, e, n) {
      var r;
      console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
      if (e.isMesh) {
        if (e.matrixAutoUpdate) {
          e.updateMatrix();
        }
        r = e.matrix;
        e = e.geometry;
      }
      t.merge(e, r, n);
    },
    center: function (t) {
      console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
      return t.center();
    }
  };
  mt.crossOrigin = void 0;
  mt.loadTexture = function (t, e, n, r) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    var i = new wl();
    i.setCrossOrigin(this.crossOrigin);
    var a = i.load(t, n, void 0, r);
    if (e) {
      a.mapping = e;
    }
    return a;
  };
  mt.loadTextureCube = function (t, e, n, r) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    var i = new xl();
    i.setCrossOrigin(this.crossOrigin);
    var a = i.load(t, n, void 0, r);
    if (e) {
      a.mapping = e;
    }
    return a;
  };
  mt.loadCompressedTexture = function () {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
  };
  mt.loadCompressedTextureCube = function () {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
  };
  var _h = {
    createMultiMaterialObject: function () {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    detach: function () {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    attach: function () {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    }
  };
  if ("undefined" != typeof __THREE_DEVTOOLS__) {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
      detail: {
        revision: "122"
      }
    }));
  }
  t.ACESFilmicToneMapping = 4;
  t.AddEquation = e;
  t.AddOperation = 2;
  t.AdditiveAnimationBlendMode = W;
  t.AdditiveBlending = 2;
  t.AlphaFormat = 1021;
  t.AlwaysDepth = 1;
  t.AlwaysStencilFunc = 519;
  t.AmbientLight = nu;
  t.AmbientLightProbe = Tu;
  t.AnimationClip = ul;
  t.AnimationLoader = gl;
  t.AnimationMixer = rc;
  t.AnimationObjectGroup = ec;
  t.AnimationUtils = Ks;
  t.ArcCurve = Tl;
  t.ArrayCamera = $i;
  t.ArrowHelper = Xc;
  t.Audio = ku;
  t.AudioAnalyser = Gu;
  t.AudioContext = wu;
  t.AudioListener = Du;
  t.AudioLoader = Su;
  t.AxesHelper = Zc;
  t.AxisHelper = function (t) {
    console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");
    return new Zc(t);
  };
  t.BackSide = 1;
  t.BasicDepthPacking = 3200;
  t.BasicShadowMap = 0;
  t.BinaryTextureLoader = function (t) {
    console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
    return new _l(t);
  };
  t.Bone = Ua;
  t.BooleanKeyframeTrack = nl;
  t.BoundingBoxHelper = function (t, e) {
    console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
    return new Vc(t, e);
  };
  t.Box2 = fc;
  t.Box3 = Tt;
  t.Box3Helper = Wc;
  t.BoxBufferGeometry = Bn;
  t.BoxGeometry = bo;
  t.BoxHelper = Vc;
  t.BufferAttribute = Ke;
  t.BufferGeometry = vn;
  t.BufferGeometryLoader = cu;
  t.ByteType = 1010;
  t.Cache = hl;
  t.Camera = Hn;
  t.CameraHelper = Fc;
  t.CanvasRenderer = function () {
    console.error("THREE.CanvasRenderer has been removed");
  };
  t.CanvasTexture = ho;
  t.CatmullRomCurve3 = Rl;
  t.CineonToneMapping = 3;
  t.CircleBufferGeometry = xo;
  t.CircleGeometry = _o;
  t.ClampToEdgeWrapping = c;
  t.Clock = Cu;
  t.ClosedSplineCurve3 = gh;
  t.Color = je;
  t.ColorKeyframeTrack = rl;
  t.CompressedTexture = co;
  t.CompressedTextureLoader = yl;
  t.ConeBufferGeometry = To;
  t.ConeGeometry = Eo;
  t.CubeCamera = Wn;
  t.CubeGeometry = bo;
  t.CubeReflectionMapping = r;
  t.CubeRefractionMapping = i;
  t.CubeTexture = qn;
  t.CubeTextureLoader = xl;
  t.CubeUVReflectionMapping = s;
  t.CubeUVRefractionMapping = l;
  t.CubicBezierCurve = kl;
  t.CubicBezierCurve3 = Nl;
  t.CubicInterpolant = $s;
  t.CullFaceBack = 1;
  t.CullFaceFront = 2;
  t.CullFaceFrontBack = 3;
  t.CullFaceNone = 0;
  t.Curve = Sl;
  t.CurvePath = jl;
  t.CustomBlending = 5;
  t.CustomToneMapping = 5;
  t.CylinderBufferGeometry = wo;
  t.CylinderGeometry = So;
  t.Cylindrical = hc;
  t.DataTexture = Xn;
  t.DataTexture2DArray = yr;
  t.DataTexture3D = br;
  t.DataTextureLoader = _l;
  t.DecrementStencilOp = 7683;
  t.DecrementWrapStencilOp = 34056;
  t.DefaultLoadingManager = fl;
  t.DepthFormat = M;
  t.DepthStencilFormat = A;
  t.DepthTexture = fo;
  t.DirectionalLight = eu;
  t.DirectionalLightHelper = kc;
  t.DiscreteInterpolant = tl;
  t.DodecahedronBufferGeometry = Ao;
  t.DodecahedronGeometry = Lo;
  t.DoubleSide = 2;
  t.DstAlphaFactor = 206;
  t.DstColorFactor = 208;
  t.DynamicBufferAttribute = function (t, e) {
    console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead.");
    return new Ke(t, e).setUsage(et);
  };
  t.DynamicCopyUsage = 35050;
  t.DynamicDrawUsage = et;
  t.DynamicReadUsage = 35049;
  t.EdgesGeometry = Io;
  t.EdgesHelper = function (t, e) {
    console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");
    return new to(new Io(t.geometry), new Wa({
      color: void 0 !== e ? e : 16777215
    }));
  };
  t.EllipseCurve = El;
  t.EqualDepth = 4;
  t.EqualStencilFunc = 514;
  t.EquirectangularReflectionMapping = a;
  t.EquirectangularRefractionMapping = o;
  t.Euler = ie;
  t.EventDispatcher = rt;
  t.ExtrudeBufferGeometry = ls;
  t.ExtrudeGeometry = cs;
  t.Face3 = Ve;
  t.Face4 = function (t, e, n, r, i, a, o) {
    console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
    return new Ve(t, e, n, i, a, o);
  };
  t.FaceColors = 1;
  t.FileLoader = vl;
  t.FlatShading = 1;
  t.Float32Attribute = function (t, e) {
    console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
    return new an(t, e);
  };
  t.Float32BufferAttribute = an;
  t.Float64Attribute = function (t, e) {
    console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
    return new on(t, e);
  };
  t.Float64BufferAttribute = on;
  t.FloatType = _;
  t.Fog = oa;
  t.FogExp2 = aa;
  t.Font = bu;
  t.FontLoader = _u;
  t.FrontSide = 0;
  t.Frustum = Jn;
  t.GLBufferAttribute = oc;
  t.GLSL1 = "100";
  t.GLSL3 = nt;
  t.GammaEncoding = X;
  t.Geometry = yo;
  t.GeometryUtils = xh;
  t.GreaterDepth = 6;
  t.GreaterEqualDepth = 5;
  t.GreaterEqualStencilFunc = 518;
  t.GreaterStencilFunc = 516;
  t.GridHelper = Pc;
  t.Group = Qi;
  t.HalfFloatType = w;
  t.HemisphereLight = Yl;
  t.HemisphereLightHelper = Cc;
  t.HemisphereLightProbe = Eu;
  t.IcosahedronBufferGeometry = hs;
  t.IcosahedronGeometry = ds;
  t.ImageBitmapLoader = gu;
  t.ImageLoader = bl;
  t.ImageUtils = mt;
  t.ImmediateRenderObject = gc;
  t.IncrementStencilOp = 7682;
  t.IncrementWrapStencilOp = 34055;
  t.InstancedBufferAttribute = uu;
  t.InstancedBufferGeometry = lu;
  t.InstancedInterleavedBuffer = ac;
  t.InstancedMesh = Va;
  t.Int16Attribute = function (t, e) {
    console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");
    return new tn(t, e);
  };
  t.Int16BufferAttribute = tn;
  t.Int32Attribute = function (t, e) {
    console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
    return new nn(t, e);
  };
  t.Int32BufferAttribute = nn;
  t.Int8Attribute = function (t, e) {
    console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
    return new Je(t, e);
  };
  t.Int8BufferAttribute = Je;
  t.IntType = 1013;
  t.InterleavedBuffer = la;
  t.InterleavedBufferAttribute = ha;
  t.Interpolant = Js;
  t.InterpolateDiscrete = F;
  t.InterpolateLinear = U;
  t.InterpolateSmooth = z;
  t.InvertStencilOp = 5386;
  t.JSONLoader = function () {
    console.error("THREE.JSONLoader has been removed.");
  };
  t.KeepStencilOp = Q;
  t.KeyframeTrack = el;
  t.LOD = Da;
  t.LatheBufferGeometry = fs;
  t.LatheGeometry = ps;
  t.Layers = se;
  t.LensFlare = function () {
    console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");
  };
  t.LessDepth = 2;
  t.LessEqualDepth = 3;
  t.LessEqualStencilFunc = 515;
  t.LessStencilFunc = 513;
  t.Light = ql;
  t.LightProbe = au;
  t.Line = Ja;
  t.Line3 = vc;
  t.LineBasicMaterial = Wa;
  t.LineCurve = Bl;
  t.LineCurve3 = Fl;
  t.LineDashedMaterial = Xs;
  t.LineLoop = eo;
  t.LinePieces = 1;
  t.LineSegments = to;
  t.LineStrip = 0;
  t.LinearEncoding = q;
  t.LinearFilter = m;
  t.LinearInterpolant = Qs;
  t.LinearMipMapLinearFilter = 1008;
  t.LinearMipMapNearestFilter = 1007;
  t.LinearMipmapLinearFilter = g;
  t.LinearMipmapNearestFilter = v;
  t.LinearToneMapping = 1;
  t.Loader = pl;
  t.LoaderUtils = su;
  t.LoadingManager = dl;
  t.LogLuvEncoding = 3003;
  t.LoopOnce = 2200;
  t.LoopPingPong = 2202;
  t.LoopRepeat = 2201;
  t.LuminanceAlphaFormat = 1025;
  t.LuminanceFormat = 1024;
  t.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
  };
  t.Material = qe;
  t.MaterialLoader = ou;
  t.Math = st;
  t.MathUtils = st;
  t.Matrix3 = pt;
  t.Matrix4 = Kt;
  t.MaxEquation = 104;
  t.Mesh = Dn;
  t.MeshBasicMaterial = Ye;
  t.MeshDepthMaterial = qi;
  t.MeshDistanceMaterial = Yi;
  t.MeshFaceMaterial = function (t) {
    console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");
    return t;
  };
  t.MeshLambertMaterial = qs;
  t.MeshMatcapMaterial = Ys;
  t.MeshNormalMaterial = Ws;
  t.MeshPhongMaterial = js;
  t.MeshPhysicalMaterial = Hs;
  t.MeshStandardMaterial = Gs;
  t.MeshToonMaterial = Vs;
  t.MinEquation = 103;
  t.MirroredRepeatWrapping = h;
  t.MixOperation = 1;
  t.MultiMaterial = function (t) {
    if (void 0 === t) {
      t = [];
    }
    console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
    t.isMultiMaterial = !0;
    t.materials = t;
    t.clone = function () {
      return t.slice();
    };
    return t;
  };
  t.MultiplyBlending = 4;
  t.MultiplyOperation = 0;
  t.NearestFilter = d;
  t.NearestMipMapLinearFilter = 1005;
  t.NearestMipMapNearestFilter = 1004;
  t.NearestMipmapLinearFilter = p;
  t.NearestMipmapNearestFilter = f;
  t.NeverDepth = 0;
  t.NeverStencilFunc = 512;
  t.NoBlending = 0;
  t.NoColors = 0;
  t.NoToneMapping = 0;
  t.NormalAnimationBlendMode = V;
  t.NormalBlending = 1;
  t.NotEqualDepth = 7;
  t.NotEqualStencilFunc = 517;
  t.NumberKeyframeTrack = il;
  t.Object3D = _e;
  t.ObjectLoader = fu;
  t.ObjectSpaceNormalMap = 1;
  t.OctahedronBufferGeometry = ms;
  t.OctahedronGeometry = vs;
  t.OneFactor = 201;
  t.OneMinusDstAlphaFactor = 207;
  t.OneMinusDstColorFactor = 209;
  t.OneMinusSrcAlphaFactor = 205;
  t.OneMinusSrcColorFactor = 203;
  t.OrthographicCamera = Ql;
  t.PCFShadowMap = 1;
  t.PCFSoftShadowMap = 2;
  t.PMREMGenerator = ch;
  t.ParametricBufferGeometry = gs;
  t.ParametricGeometry = ys;
  t.Particle = function (t) {
    console.warn("THREE.Particle has been renamed to THREE.Sprite.");
    return new Ta(t);
  };
  t.ParticleBasicMaterial = function (t) {
    console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
    return new no(t);
  };
  t.ParticleSystem = function (t, e) {
    console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
    return new so(t, e);
  };
  t.ParticleSystemMaterial = function (t) {
    console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
    return new no(t);
  };
  t.Path = Vl;
  t.PerspectiveCamera = jn;
  t.Plane = Te;
  t.PlaneBufferGeometry = tr;
  t.PlaneGeometry = bs;
  t.PlaneHelper = qc;
  t.PointCloud = function (t, e) {
    console.warn("THREE.PointCloud has been renamed to THREE.Points.");
    return new so(t, e);
  };
  t.PointCloudMaterial = function (t) {
    console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
    return new no(t);
  };
  t.PointLight = $l;
  t.PointLightHelper = Tc;
  t.Points = so;
  t.PointsMaterial = no;
  t.PolarGridHelper = Rc;
  t.PolyhedronBufferGeometry = Mo;
  t.PolyhedronGeometry = xs;
  t.PositionalAudio = zu;
  t.PropertyBinding = tc;
  t.PropertyMixer = Hu;
  t.QuadraticBezierCurve = Ul;
  t.QuadraticBezierCurve3 = zl;
  t.Quaternion = _t;
  t.QuaternionKeyframeTrack = ol;
  t.QuaternionLinearInterpolant = al;
  t.REVISION = "122";
  t.RGBADepthPacking = 3201;
  t.RGBAFormat = T;
  t.RGBAIntegerFormat = 1033;
  t.RGBA_ASTC_10x10_Format = 37819;
  t.RGBA_ASTC_10x5_Format = 37816;
  t.RGBA_ASTC_10x6_Format = 37817;
  t.RGBA_ASTC_10x8_Format = 37818;
  t.RGBA_ASTC_12x10_Format = 37820;
  t.RGBA_ASTC_12x12_Format = 37821;
  t.RGBA_ASTC_4x4_Format = 37808;
  t.RGBA_ASTC_5x4_Format = 37809;
  t.RGBA_ASTC_5x5_Format = 37810;
  t.RGBA_ASTC_6x5_Format = 37811;
  t.RGBA_ASTC_6x6_Format = 37812;
  t.RGBA_ASTC_8x5_Format = 37813;
  t.RGBA_ASTC_8x6_Format = 37814;
  t.RGBA_ASTC_8x8_Format = 37815;
  t.RGBA_BPTC_Format = 36492;
  t.RGBA_ETC2_EAC_Format = B;
  t.RGBA_PVRTC_2BPPV1_Format = k;
  t.RGBA_PVRTC_4BPPV1_Format = D;
  t.RGBA_S3TC_DXT1_Format = C;
  t.RGBA_S3TC_DXT3_Format = P;
  t.RGBA_S3TC_DXT5_Format = R;
  t.RGBDEncoding = $;
  t.RGBEEncoding = Z;
  t.RGBEFormat = 1023;
  t.RGBFormat = E;
  t.RGBIntegerFormat = 1032;
  t.RGBM16Encoding = J;
  t.RGBM7Encoding = K;
  t.RGB_ETC1_Format = 36196;
  t.RGB_ETC2_Format = N;
  t.RGB_PVRTC_2BPPV1_Format = I;
  t.RGB_PVRTC_4BPPV1_Format = O;
  t.RGB_S3TC_DXT1_Format = L;
  t.RGFormat = 1030;
  t.RGIntegerFormat = 1031;
  t.RawShaderMaterial = zs;
  t.Ray = Zt;
  t.Raycaster = sc;
  t.RectAreaLight = ru;
  t.RedFormat = 1028;
  t.RedIntegerFormat = 1029;
  t.ReinhardToneMapping = 2;
  t.RepeatWrapping = u;
  t.ReplaceStencilOp = 7681;
  t.ReverseSubtractEquation = 102;
  t.RingBufferGeometry = _s;
  t.RingGeometry = ws;
  t.SRGB8_ALPHA8_ASTC_10x10_Format = 37851;
  t.SRGB8_ALPHA8_ASTC_10x5_Format = 37848;
  t.SRGB8_ALPHA8_ASTC_10x6_Format = 37849;
  t.SRGB8_ALPHA8_ASTC_10x8_Format = 37850;
  t.SRGB8_ALPHA8_ASTC_12x10_Format = 37852;
  t.SRGB8_ALPHA8_ASTC_12x12_Format = 37853;
  t.SRGB8_ALPHA8_ASTC_4x4_Format = 37840;
  t.SRGB8_ALPHA8_ASTC_5x4_Format = 37841;
  t.SRGB8_ALPHA8_ASTC_5x5_Format = 37842;
  t.SRGB8_ALPHA8_ASTC_6x5_Format = 37843;
  t.SRGB8_ALPHA8_ASTC_6x6_Format = 37844;
  t.SRGB8_ALPHA8_ASTC_8x5_Format = 37845;
  t.SRGB8_ALPHA8_ASTC_8x6_Format = 37846;
  t.SRGB8_ALPHA8_ASTC_8x8_Format = 37847;
  t.Scene = sa;
  t.SceneUtils = _h;
  t.ShaderChunk = er;
  t.ShaderLib = rr;
  t.ShaderMaterial = Gn;
  t.ShadowMaterial = Us;
  t.Shape = Wl;
  t.ShapeBufferGeometry = Ss;
  t.ShapeGeometry = Es;
  t.ShapePath = yu;
  t.ShapeUtils = as;
  t.ShortType = 1011;
  t.Skeleton = Fa;
  t.SkeletonHelper = Sc;
  t.SkinnedMesh = ka;
  t.SmoothShading = 2;
  t.Sphere = Gt;
  t.SphereBufferGeometry = Ts;
  t.SphereGeometry = Ms;
  t.Spherical = cc;
  t.SphericalHarmonics3 = iu;
  t.Spline = bh;
  t.SplineCurve = Gl;
  t.SplineCurve3 = yh;
  t.SpotLight = Kl;
  t.SpotLightHelper = bc;
  t.Sprite = Ta;
  t.SpriteMaterial = da;
  t.SrcAlphaFactor = 204;
  t.SrcAlphaSaturateFactor = 210;
  t.SrcColorFactor = 202;
  t.StaticCopyUsage = 35046;
  t.StaticDrawUsage = tt;
  t.StaticReadUsage = 35045;
  t.StereoCamera = Lu;
  t.StreamCopyUsage = 35042;
  t.StreamDrawUsage = 35040;
  t.StreamReadUsage = 35041;
  t.StringKeyframeTrack = sl;
  t.SubtractEquation = 101;
  t.SubtractiveBlending = 3;
  t.TOUCH = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
  };
  t.TangentSpaceNormalMap = 0;
  t.TetrahedronBufferGeometry = As;
  t.TetrahedronGeometry = Ls;
  t.TextBufferGeometry = Cs;
  t.TextGeometry = Ps;
  t.Texture = gt;
  t.TextureLoader = wl;
  t.TorusBufferGeometry = Rs;
  t.TorusGeometry = Os;
  t.TorusKnotBufferGeometry = Is;
  t.TorusKnotGeometry = Ds;
  t.Triangle = Ne;
  t.TriangleFanDrawMode = 2;
  t.TriangleStripDrawMode = 1;
  t.TrianglesDrawMode = 0;
  t.TubeBufferGeometry = ks;
  t.TubeGeometry = Ns;
  t.UVMapping = n;
  t.Uint16Attribute = function (t, e) {
    console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
    return new en(t, e);
  };
  t.Uint16BufferAttribute = en;
  t.Uint32Attribute = function (t, e) {
    console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
    return new rn(t, e);
  };
  t.Uint32BufferAttribute = rn;
  t.Uint8Attribute = function (t, e) {
    console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");
    return new $e(t, e);
  };
  t.Uint8BufferAttribute = $e;
  t.Uint8ClampedAttribute = function (t, e) {
    console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");
    return new Qe(t, e);
  };
  t.Uint8ClampedBufferAttribute = Qe;
  t.Uniform = ic;
  t.UniformsLib = nr;
  t.UniformsUtils = zn;
  t.UnsignedByteType = y;
  t.UnsignedInt248Type = S;
  t.UnsignedIntType = x;
  t.UnsignedShort4444Type = 1017;
  t.UnsignedShort5551Type = 1018;
  t.UnsignedShort565Type = 1019;
  t.UnsignedShortType = b;
  t.VSMShadowMap = 3;
  t.Vector2 = ft;
  t.Vector3 = wt;
  t.Vector4 = yt;
  t.VectorKeyframeTrack = ll;
  t.Vertex = function (t, e, n) {
    console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
    return new wt(t, e, n);
  };
  t.VertexColors = 2;
  t.VideoTexture = uo;
  t.WebGL1Renderer = ia;
  t.WebGLCubeRenderTarget = Yn;
  t.WebGLMultisampleRenderTarget = xt;
  t.WebGLRenderTarget = bt;
  t.WebGLRenderTargetCube = function (t, e, n) {
    console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options ).");
    return new Yn(t, n);
  };
  t.WebGLRenderer = ra;
  t.WebGLUtils = Ji;
  t.WireframeGeometry = Bs;
  t.WireframeHelper = function (t, e) {
    console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
    return new to(new Bs(t.geometry), new Wa({
      color: void 0 !== e ? e : 16777215
    }));
  };
  t.WrapAroundEnding = j;
  t.XHRLoader = function (t) {
    console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
    return new vl(t);
  };
  t.ZeroCurvatureEnding = G;
  t.ZeroFactor = 200;
  t.ZeroSlopeEnding = H;
  t.ZeroStencilOp = 0;
  t.sRGBEncoding = Y;
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
}(module);