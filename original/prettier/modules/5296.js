var n = {}.propertyIsEnumerable;
var r = Object.getOwnPropertyDescriptor;
var i = r && !n.call({
  1: 2
}, 1);
module.f = i ? function (t) {
  var e = r(this, t);
  return !!e && e.enumerable;
} : n;