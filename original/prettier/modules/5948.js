var r;
var i;
var a;
var o;
var s;
var l;
var u;
var c;
var h = require(7854);
var d = require(1236).f;
var f = require(261).set;
var p = require(8334);
var m = require(5268);
var v = h.MutationObserver || h.WebKitMutationObserver;
var g = h.document;
var y = h.process;
var b = h.Promise;
var x = d(h, "queueMicrotask");
var _ = x && x.value;
if (_) {
  r = function () {
    var t;
    var e;
    for (m && (t = y.domain) && t.exit(); i;) {
      e = i.fn;
      i = i.next;
      try {
        e();
      } catch (t) {
        throw i ? o() : a = void 0, t;
      }
    }
    a = void 0;
    if (t) {
      t.enter();
    }
  };
  if (!p && !m && v && g) {
    s = !0;
    l = g.createTextNode("");
    new v(r).observe(l, {
      characterData: !0
    });
    o = function () {
      l.data = s = !s;
    };
  } else {
    if (b && b.resolve) {
      u = b.resolve(void 0);
      c = u.then;
      o = function () {
        c.call(u, r);
      };
    } else {
      o = m ? function () {
        y.nextTick(r);
      } : function () {
        f.call(h, r);
      };
    }
  }
}
exports.exports = _ || function (t) {
  var e = {
    fn: t,
    next: void 0
  };
  if (a) {
    a.next = e;
  }
  if (i) {
    i = e;
    o();
  }
  a = e;
};