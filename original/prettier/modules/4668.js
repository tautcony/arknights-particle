var r = require(2109);
var i = require(3099);
var a = require(5005);
var o = require(8523);
var s = require(2534);
var l = require(408);
var u = "No one promise resolved";
r({
  target: "Promise",
  stat: !0
}, {
  any: function (t) {
    var e = this;
    var n = o.f(e);
    var r = n.resolve;
    var c = n.reject;
    var h = s(function () {
      var n = i(e.resolve);
      var o = [];
      var s = 0;
      var h = 1;
      var d = !1;
      l(t, function (t) {
        var i = s++;
        var l = !1;
        o.push(void 0);
        h++;
        n.call(e, t).then(function (t) {
          if (l || d) {
            d = !0;
            r(t);
          }
        }, function (t) {
          if (l || d) {
            l = !0;
            o[i] = t;
            if (--h) {
              c(new (a("AggregateError"))(o, u));
            }
          }
        });
      });
      if (--h) {
        c(new (a("AggregateError"))(o, u));
      }
    });
    if (h.error) {
      c(h.value);
    }
    return n.promise;
  }
});