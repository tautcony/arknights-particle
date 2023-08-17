var r = require(7854);
exports.exports = function (t, e) {
  var n = r.console;
  if (n && n.error) {
    if (1 === arguments.length) {
      n.error(t);
    } else {
      n.error(t, e);
    }
  }
};