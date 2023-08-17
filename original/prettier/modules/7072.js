var r = require(5112)("iterator");
var i = !1;
try {
  var a = 0;
  var o = {
    next: function () {
      return {
        done: !!a++
      };
    },
    return: function () {
      i = !0;
    }
  };
  o[r] = function () {
    return this;
  };
  Array.from(o, function () {
    throw 2;
  });
} catch (t) {}
exports.exports = function (t, e) {
  if (!e && !i) return !1;
  var n = !1;
  try {
    var a = {};
    a[r] = function () {
      return {
        next: function () {
          return {
            done: n = !0
          };
        }
      };
    };
    t(a);
  } catch (t) {}
  return n;
};