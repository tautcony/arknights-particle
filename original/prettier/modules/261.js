var r;
var i;
var a;
var o = require(7854);
var s = require(7293);
var l = require(9974);
var u = require(490);
var c = require(317);
var h = require(8334);
var d = require(5268);
var f = o.location;
var p = o.setImmediate;
var m = o.clearImmediate;
var v = o.process;
var g = o.MessageChannel;
var y = o.Dispatch;
var b = 0;
var x = {};
var _ = function (t) {
  if (x.hasOwnProperty(t)) {
    var e = x[t];
    delete x[t];
    e();
  }
};
var w = function (t) {
  return function () {
    _(t);
  };
};
var S = function (t) {
  _(t.data);
};
var E = function (t) {
  o.postMessage(t + "", f.protocol + "//" + f.host);
};
if (p && m) {
  p = function (t) {
    for (e = [], n = 1, void 0; arguments.length > n;) {
      var e;
      var n;
      e.push(arguments[n++]);
    }
    x[++b] = function () {
      ("function" == typeof t ? t : Function(t)).apply(void 0, e);
    };
    r(b);
    return b;
  };
  m = function (t) {
    delete x[t];
  };
  if (d) {
    r = function (t) {
      v.nextTick(w(t));
    };
  } else {
    if (y && y.now) {
      r = function (t) {
        y.now(w(t));
      };
    } else {
      if (g && !h) {
        a = (i = new g()).port2;
        i.port1.onmessage = S;
        r = l(a.postMessage, a, 1);
      } else {
        if (o.addEventListener && "function" == typeof postMessage && !o.importScripts && f && "file:" !== f.protocol && !s(E)) {
          r = E;
          o.addEventListener("message", S, !1);
        } else {
          r = "onreadystatechange" in c("script") ? function (t) {
            u.appendChild(c("script")).onreadystatechange = function () {
              u.removeChild(this);
              _(t);
            };
          } : function (t) {
            setTimeout(w(t), 0);
          };
        }
      }
    }
  }
}
exports.exports = {
  set: p,
  clear: m
};