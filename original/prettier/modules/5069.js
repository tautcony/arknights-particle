var r = require(2109);
var i = require(3157);
var a = [].reverse;
var o = [1, 2];
r({
  target: "Array",
  proto: !0,
  forced: String(o) === String(o.reverse())
}, {
  reverse: function () {
    if (i(this)) {
      this.length = this.length;
    }
    return a.call(this);
  }
});