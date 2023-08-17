var r = require(2109);
var i = require(408);
var a = require(6135);
r({
  target: "Object",
  stat: !0
}, {
  fromEntries: function (t) {
    var e = {};
    i(t, function (t, n) {
      a(e, t, n);
    }, {
      AS_ENTRIES: !0
    });
    return e;
  }
});