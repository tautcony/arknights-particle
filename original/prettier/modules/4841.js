const e = {
  0: "Wallpaper",
  1: "PV"
};
function n(t) {
  const e = (t = t || 0) + 1;
  return e >= 10 ? e.toFixed(0) : "0" + e;
}
exports.exports = {
  EMediaType: {
    Wallpaper: 0,
    PV: 1
  },
  TYPE_MAP: e,
  formatIndex: n,
  formatType: function (t, r) {
    return e[t = t || ""] + "-" + n(r = r || 0);
  },
  formatDesc: function (t, e, n) {
    e = e || "";
    n = n || "";
    return "0" == (t = t || "0") ? n : "DATE: " + e.replace(/-/g, " / ");
  },
  formatDate: function (t) {
    return "DATE: " + (t = t || "").replace(/-/g, " / ");
  },
  formatBgImgUrl: function (t) {
    return "url(" + (t = t || "") + ")";
  }
};