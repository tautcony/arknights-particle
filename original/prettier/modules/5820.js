var r = {
  "./infected.png": 973,
  "./nomadic_city.png": 5030,
  "./originium_arts.png": 188,
  "./originiums.png": 6428,
  "./reunion.png": 5429,
  "./rhodes_island.png": 1266
};
function exports(t) {
  var e = a(t);
  return require(e);
}
function a(t) {
  if (!require.o(r, t)) {
    var e = new Error("Cannot find module '" + t + "'");
    throw e.code = "MODULE_NOT_FOUND", e;
  }
  return r[t];
}
exports.keys = function () {
  return Object.keys(r);
};
exports.resolve = a;
exports.exports = exports;
exports.id = 5820;