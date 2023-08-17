var r;
var i;
var a = require(7854);
var o = require(8113);
var s = a.process;
var l = s && s.versions;
var u = l && l.v8;
if (u) {
  i = (r = u.split("."))[0] + r[1];
} else {
  if (o && (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = o.match(/Chrome\/(\d+)/))) {
    i = r[1];
  }
}
exports.exports = i && +i;