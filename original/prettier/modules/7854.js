var r = function (t) {
  return t && t.Math == Math && t;
};
exports.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof require.g && require.g) || function () {
  return this;
}() || Function("return this")();