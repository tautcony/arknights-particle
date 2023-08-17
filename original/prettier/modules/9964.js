var r = require(2109);
var i = require(996);
r({
  target: "Object",
  stat: !0
}, {
  iterateEntries: function (t) {
    return new i(t, "entries");
  }
});