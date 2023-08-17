var r = require(2109);
var i = require(6650).start;
r({
  target: "String",
  proto: !0,
  forced: require(4986)
}, {
  padStart: function (t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
  }
});