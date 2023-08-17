var r = require(2109);
var i = require(9958);
var a = require(3009);
var o = "Invalid number representation";
var s = /^[\da-z]+$/;
r({
  target: "Number",
  stat: !0
}, {
  fromString: function (t, e) {
    var n;
    var r;
    var l = 1;
    if ("string" != typeof t) throw TypeError(o);
    if (!t.length) throw SyntaxError(o);
    if ("-" == t.charAt(0) && (l = -1, !(t = t.slice(1)).length)) throw SyntaxError(o);
    if ((n = void 0 === e ? 10 : i(e)) < 2 || n > 36) throw RangeError("Invalid radix");
    if (!s.test(t) || (r = a(t, n)).toString(n) !== t) throw SyntaxError(o);
    return l * r;
  }
});