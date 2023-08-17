var r = require(2109);
var i = require(1913);
var a = require(5005);
var o = require(9670);
var s = require(3099);
var l = require(9974);
var u = require(6707);
var c = require(4647);
var h = require(408);
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: i
}, {
  mapKeys: function (t) {
    var e = o(this);
    var n = c(e);
    var r = l(t, arguments.length > 1 ? arguments[1] : void 0, 3);
    var i = new (u(e, a("Map")))();
    var d = s(i.set);
    h(n, function (t, n) {
      d.call(i, r(n, t, e), n);
    }, {
      AS_ENTRIES: !0,
      IS_ITERATOR: !0
    });
    return i;
  }
});