var r = require(260).exportTypedArrayMethod;
var i = require(7293);
var a = require(7854).Uint8Array;
var o = a && a.prototype || {};
var s = [].toString;
var l = [].join;
if (i(function () {
  s.call({});
})) {
  s = function () {
    return l.call(this);
  };
}
var u = o.toString != s;
r("toString", s, u);