var r;
var i = require(9670);
var a = require(6048);
var o = require(748);
var s = require(3501);
var l = require(490);
var u = require(317);
var c = require(6200)("IE_PROTO");
var h = function () {};
var d = function (t) {
  return "<script>" + t + "</script>";
};
var f = function () {
  try {
    r = document.domain && new ActiveXObject("htmlfile");
  } catch (t) {}
  var t;
  var e;
  f = r ? function (t) {
    t.write(d(""));
    t.close();
    var e = t.parentWindow.Object;
    t = null;
    return e;
  }(r) : ((e = u("iframe")).style.display = "none", l.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(d("document.F=Object")), t.close(), t.F);
  for (var n = o.length; n--;) delete f.prototype[o[n]];
  return f();
};
s[c] = !0;
exports.exports = Object.create || function (t, e) {
  var n;
  if (null !== t) {
    h.prototype = i(t);
    n = new h();
    h.prototype = null;
    n[c] = t;
  } else {
    n = f();
  }
  return void 0 === e ? n : a(n, e);
};