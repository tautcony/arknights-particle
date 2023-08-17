var r;
var i;
var a;
var o = require(9518);
var s = require(8880);
var l = require(6656);
var u = require(5112);
var c = require(1913);
var h = u("iterator");
var d = !1;
if ([].keys) {
  if ("next" in (a = [].keys())) {
    if ((i = o(o(a))) !== Object.prototype) {
      r = i;
    }
  } else {
    d = !0;
  }
}
if (null == r) {
  r = {};
}
if (c || l(r, h)) {
  s(r, h, function () {
    return this;
  });
}
exports.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: d
};