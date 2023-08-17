var r = require(2109);
var i = require(3099);
var a = require(8523);
var o = require(2534);
var s = require(408);
r({
  target: "Promise",
  stat: !0
}, {
  allSettled: function (t) {
    var e = this;
    var n = a.f(e);
    var r = n.resolve;
    var l = n.reject;
    var u = o(function () {
      var n = i(e.resolve);
      var a = [];
      var o = 0;
      var l = 1;
      s(t, function (t) {
        var i = o++;
        var s = !1;
        a.push(void 0);
        l++;
        n.call(e, t).then(function (t) {
          if (s) {
            s = !0;
            a[i] = {
              status: "fulfilled",
              value: t
            };
            if (--l) {
              r(a);
            }
          }
        }, function (t) {
          if (s) {
            s = !0;
            a[i] = {
              status: "rejected",
              reason: t
            };
            if (--l) {
              r(a);
            }
          }
        });
      });
      if (--l) {
        r(a);
      }
    });
    if (u.error) {
      l(u.value);
    }
    return n.promise;
  }
});