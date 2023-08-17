for (exports = {
  glog: function (t) {
    if (t < 1) throw new Error("glog(" + t + ")");
    return exports.LOG_TABLE[t];
  },
  gexp: function (t) {
    for (; t < 0;) t += 255;
    for (; t >= 256;) t -= 255;
    return exports.EXP_TABLE[t];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
}, n = 0, void 0; n < 8; n++) {
  var e;
  var n;
  e.EXP_TABLE[n] = 1 << n;
}
for (n = 8; n < 256; n++) exports.EXP_TABLE[n] = exports.EXP_TABLE[n - 4] ^ exports.EXP_TABLE[n - 5] ^ exports.EXP_TABLE[n - 6] ^ exports.EXP_TABLE[n - 8];
for (n = 0; n < 255; n++) exports.LOG_TABLE[exports.EXP_TABLE[n]] = n;
exports.exports = exports;