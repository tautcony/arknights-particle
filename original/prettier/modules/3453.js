function exports() {
  this.buffer = new Array();
  this.length = 0;
}
exports.prototype = {
  get: function (t) {
    var e = Math.floor(t / 8);
    return 1 == (this.buffer[e] >>> 7 - t % 8 & 1);
  },
  put: function (t, e) {
    for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1));
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (t) {
    var e = Math.floor(this.length / 8);
    if (this.buffer.length <= e) {
      this.buffer.push(0);
    }
    if (t) {
      this.buffer[e] |= 128 >>> this.length % 8;
    }
    this.length++;
  }
};
exports.exports = exports;