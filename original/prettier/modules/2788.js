var r = require(5465);
var i = Function.toString;
if ("function" != typeof r.inspectSource) {
  r.inspectSource = function (t) {
    return i.call(t);
  };
}
exports.exports = r.inspectSource;