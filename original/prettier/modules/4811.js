var r = require(2109);
var i = require(2092).filterOut;
var a = require(1223);
r({
  target: "Array",
  proto: !0
}, {
  filterOut: function (t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});
a("filterOut");