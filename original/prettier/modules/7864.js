var r = {
  "./lungmen.data.json": 1309,
  "./penguin.data.json": 7153,
  "./rhine.data.json": 147,
  "./rhodes.data.json": 9721,
  "./story-1.data.json": 9012,
  "./story-2.data.json": 6671,
  "./story-3.data.json": 3224,
  "./story-4.data.json": 4973,
  "./story-5.data.json": 9828,
  "./story-6.data.json": 939,
  "./title-information.data.json": 5798,
  "./title-media.data.json": 724,
  "./title-staff.data.json": 5675,
  "./title-world.data.json": 543
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
exports.id = 7864;