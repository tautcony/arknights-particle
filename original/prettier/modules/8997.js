module.z = void 0;
var r = require(3995);
module.z = function (t, e) {
  if (void 0 === e) {
    e = "HG_WEB_SDK_SCRIPT_ELEMENT";
  }
  return function n(i) {
    return r.__awaiter(this, void 0, void 0, function () {
      var a = this;
      return r.__generator(this, function (o) {
        return [2, new Promise(function (o, s) {
          var l = window.HG_SDK;
          if (l) {
            if (null == i) {
              i(l);
            }
            return void o(l);
          }
          window._HG_SDK_CALLBACK_QUEUE = window._HG_SDK_CALLBACK_QUEUE || [];
          window._HG_SDK_CALLBACK_QUEUE.push(function () {
            return r.__awaiter(a, void 0, void 0, function () {
              var t;
              return r.__generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    t = o;
                    return [4, n(i)];
                  case 1:
                    t.apply(void 0, [e.sent()]);
                    return [2];
                }
              });
            });
          });
          var u = window.document.getElementById(e);
          if (u) {
            (u = window.document.createElement("script")).defer = !0;
            u.src = t + "?ts=" + Date.now();
            u.id = e;
            window.document.head.appendChild(u);
          }
          u.addEventListener("error", s);
        })];
      });
    });
  };
};