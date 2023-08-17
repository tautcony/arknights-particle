exports.exports = Object.is || function (t, e) {
  return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
};