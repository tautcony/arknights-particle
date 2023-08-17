var r = require(2792);
function exports(t) {
  this.mode = r.MODE_8BIT_BYTE;
  this.data = t;
}
exports.prototype = {
  getLength: function (t) {
    return this.data.length;
  },
  write: function (t) {
    for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8);
  }
};
exports.exports = exports;