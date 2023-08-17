exports.exports = function (t) {
  try {
    return {
      error: !1,
      value: t()
    };
  } catch (t) {
    return {
      error: !0,
      value: t
    };
  }
};