var r;
require.g;
r = require(8661);
exports.exports = function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }
  return n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
      return t[e];
    }.bind(null, i));
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 4);
}([function (t, e, n) {
  t.exports = n(2)();
}, function (t, e) {
  t.exports = r;
}, function (t, e, n) {
  "use strict";

  var r = n(3);
  function i() {}
  function a() {}
  a.resetWarningCache = i, t.exports = function () {
    function t(t, e, n, i, a, o) {
      if (o !== r) {
        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw s.name = "Invariant Violation", s;
      }
    }
    function e() {
      return t;
    }
    t.isRequired = t;
    var n = {
      array: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: e,
      element: t,
      elementType: t,
      instanceOf: e,
      node: t,
      objectOf: e,
      oneOf: e,
      oneOfType: e,
      shape: e,
      exact: e,
      checkPropTypes: a,
      resetWarningCache: i
    };
    return n.PropTypes = n, n;
  };
}, function (t, e, n) {
  "use strict";

  t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, function (t, n, r) {
  "use strict";

  r.r(n);
  var i = r(1),
    a = r.n(i),
    o = r(0),
    s = r.n(o);
  function l() {
    return (l = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    }).apply(this, arguments);
  }
  var u = function (t) {
    var e = t.pageClassName,
      n = t.pageLinkClassName,
      r = t.page,
      i = t.selected,
      o = t.activeClassName,
      s = t.activeLinkClassName,
      u = t.getEventListener,
      c = t.pageSelectedHandler,
      h = t.href,
      d = t.extraAriaContext,
      f = t.ariaLabel || "Page " + r + (d ? " " + d : ""),
      p = null;
    return i && (p = "page", f = t.ariaLabel || "Page " + r + " is your current page", e = void 0 !== e ? e + " " + o : o, void 0 !== n ? void 0 !== s && (n = n + " " + s) : n = s), a.a.createElement("li", {
      className: e
    }, a.a.createElement("a", l({
      role: "button",
      className: n,
      href: h,
      tabIndex: "0",
      "aria-label": f,
      "aria-current": p,
      onKeyPress: c
    }, u(c)), r));
  };
  u.propTypes = {
    pageSelectedHandler: s.a.func.isRequired,
    selected: s.a.bool.isRequired,
    pageClassName: s.a.string,
    pageLinkClassName: s.a.string,
    activeClassName: s.a.string,
    activeLinkClassName: s.a.string,
    extraAriaContext: s.a.string,
    href: s.a.string,
    ariaLabel: s.a.string,
    page: s.a.number.isRequired,
    getEventListener: s.a.func.isRequired
  };
  var c = u;
  function h() {
    return (h = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    }).apply(this, arguments);
  }
  !function () {
    var t = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
    if (t) {
      var r = void 0 !== n ? n : module;
      if (r) if ("function" != typeof r) {
        for (var i in r) if (Object.prototype.hasOwnProperty.call(r, i)) {
          var a = void 0;
          try {
            a = r[i];
          } catch (t) {
            continue;
          }
          t.register(a, i, "/home/adele/workspace/react-paginate/react_components/PageView.js");
        }
      } else t.register(r, "module.exports", "/home/adele/workspace/react-paginate/react_components/PageView.js");
    }
  }();
  var d = function (t) {
    var e = t.breakLabel,
      n = t.breakClassName,
      r = t.breakLinkClassName,
      i = t.breakHandler,
      o = t.getEventListener,
      s = n || "break";
    return a.a.createElement("li", {
      className: s
    }, a.a.createElement("a", h({
      className: r,
      role: "button",
      tabIndex: "0",
      onKeyPress: i
    }, o(i)), e));
  };
  d.propTypes = {
    breakLabel: s.a.oneOfType([s.a.string, s.a.node]),
    breakClassName: s.a.string,
    breakLinkClassName: s.a.string,
    breakHandler: s.a.func.isRequired,
    getEventListener: s.a.func.isRequired
  };
  var f = d;
  function p(t) {
    return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
  }
  function m() {
    return (m = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    }).apply(this, arguments);
  }
  function v(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }
  function g(t, e) {
    return (g = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }
  function y(t, e) {
    return !e || "object" !== p(e) && "function" != typeof e ? b(t) : e;
  }
  function b(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function x(t) {
    return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }
  function _(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }
  !function () {
    var t = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
    if (t) {
      var r = void 0 !== n ? n : module;
      if (r) if ("function" != typeof r) {
        for (var i in r) if (Object.prototype.hasOwnProperty.call(r, i)) {
          var a = void 0;
          try {
            a = r[i];
          } catch (t) {
            continue;
          }
          t.register(a, i, "/home/adele/workspace/react-paginate/react_components/BreakView.js");
        }
      } else t.register(r, "module.exports", "/home/adele/workspace/react-paginate/react_components/BreakView.js");
    }
  }();
  var w = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && g(t, e);
    }(i, t);
    var e,
      n,
      r = function (t) {
        var e = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (t) {
            return !1;
          }
        }();
        return function () {
          var n,
            r = x(t);
          if (e) {
            var i = x(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return y(this, n);
        };
      }(i);
    function i(t) {
      var e, n;
      return function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, i), _(b(e = r.call(this, t)), "handlePreviousPage", function (t) {
        var n = e.state.selected;
        t.preventDefault ? t.preventDefault() : t.returnValue = !1, n > 0 && e.handlePageSelected(n - 1, t);
      }), _(b(e), "handleNextPage", function (t) {
        var n = e.state.selected,
          r = e.props.pageCount;
        t.preventDefault ? t.preventDefault() : t.returnValue = !1, n < r - 1 && e.handlePageSelected(n + 1, t);
      }), _(b(e), "handlePageSelected", function (t, n) {
        n.preventDefault ? n.preventDefault() : n.returnValue = !1, e.state.selected !== t && (e.setState({
          selected: t
        }), e.callCallback(t));
      }), _(b(e), "getEventListener", function (t) {
        return _({}, e.props.eventListener, t);
      }), _(b(e), "handleBreakClick", function (t, n) {
        n.preventDefault ? n.preventDefault() : n.returnValue = !1;
        var r = e.state.selected;
        e.handlePageSelected(r < t ? e.getForwardJump() : e.getBackwardJump(), n);
      }), _(b(e), "callCallback", function (t) {
        void 0 !== e.props.onPageChange && "function" == typeof e.props.onPageChange && e.props.onPageChange({
          selected: t
        });
      }), _(b(e), "pagination", function () {
        var t = [],
          n = e.props,
          r = n.pageRangeDisplayed,
          i = n.pageCount,
          o = n.marginPagesDisplayed,
          s = n.breakLabel,
          l = n.breakClassName,
          u = n.breakLinkClassName,
          c = e.state.selected;
        if (i <= r) for (var h = 0; h < i; h++) t.push(e.getPageElement(h));else {
          var d,
            p,
            m,
            v = r / 2,
            g = r - v;
          c > i - r / 2 ? v = r - (g = i - c) : c < r / 2 && (g = r - (v = c));
          var y = function (t) {
            return e.getPageElement(t);
          };
          for (d = 0; d < i; d++) (p = d + 1) <= o || p > i - o || d >= c - v && d <= c + g ? t.push(y(d)) : s && t[t.length - 1] !== m && (m = a.a.createElement(f, {
            key: d,
            breakLabel: s,
            breakClassName: l,
            breakLinkClassName: u,
            breakHandler: e.handleBreakClick.bind(null, d),
            getEventListener: e.getEventListener
          }), t.push(m));
        }
        return t;
      }), n = t.initialPage ? t.initialPage : t.forcePage ? t.forcePage : 0, e.state = {
        selected: n
      }, e;
    }
    return e = i, (n = [{
      key: "componentDidMount",
      value: function () {
        var t = this.props,
          e = t.initialPage,
          n = t.disableInitialCallback,
          r = t.extraAriaContext;
        void 0 === e || n || this.callCallback(e), r && console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.");
      }
    }, {
      key: "componentDidUpdate",
      value: function (t) {
        void 0 !== this.props.forcePage && this.props.forcePage !== t.forcePage && this.setState({
          selected: this.props.forcePage
        });
      }
    }, {
      key: "getForwardJump",
      value: function () {
        var t = this.state.selected,
          e = this.props,
          n = e.pageCount,
          r = t + e.pageRangeDisplayed;
        return r >= n ? n - 1 : r;
      }
    }, {
      key: "getBackwardJump",
      value: function () {
        var t = this.state.selected - this.props.pageRangeDisplayed;
        return t < 0 ? 0 : t;
      }
    }, {
      key: "hrefBuilder",
      value: function (t) {
        var e = this.props,
          n = e.hrefBuilder,
          r = e.pageCount;
        if (n && t !== this.state.selected && t >= 0 && t < r) return n(t + 1);
      }
    }, {
      key: "ariaLabelBuilder",
      value: function (t) {
        var e = t === this.state.selected;
        if (this.props.ariaLabelBuilder && t >= 0 && t < this.props.pageCount) {
          var n = this.props.ariaLabelBuilder(t + 1, e);
          return this.props.extraAriaContext && !e && (n = n + " " + this.props.extraAriaContext), n;
        }
      }
    }, {
      key: "getPageElement",
      value: function (t) {
        var e = this.state.selected,
          n = this.props,
          r = n.pageClassName,
          i = n.pageLinkClassName,
          o = n.activeClassName,
          s = n.activeLinkClassName,
          l = n.extraAriaContext;
        return a.a.createElement(c, {
          key: t,
          pageSelectedHandler: this.handlePageSelected.bind(null, t),
          selected: e === t,
          pageClassName: r,
          pageLinkClassName: i,
          activeClassName: o,
          activeLinkClassName: s,
          extraAriaContext: l,
          href: this.hrefBuilder(t),
          ariaLabel: this.ariaLabelBuilder(t),
          page: t + 1,
          getEventListener: this.getEventListener
        });
      }
    }, {
      key: "render",
      value: function () {
        var t = this.props,
          e = t.disabledClassName,
          n = t.pageCount,
          r = t.containerClassName,
          i = t.previousLabel,
          o = t.previousClassName,
          s = t.previousLinkClassName,
          l = t.previousAriaLabel,
          u = t.nextLabel,
          c = t.nextClassName,
          h = t.nextLinkClassName,
          d = t.nextAriaLabel,
          f = this.state.selected,
          p = o + (0 === f ? " ".concat(e) : ""),
          v = c + (f === n - 1 ? " ".concat(e) : ""),
          g = 0 === f ? "true" : "false",
          y = f === n - 1 ? "true" : "false";
        return a.a.createElement("ul", {
          className: r
        }, a.a.createElement("li", {
          className: p
        }, a.a.createElement("a", m({
          className: s,
          href: this.hrefBuilder(f - 1),
          tabIndex: "0",
          role: "button",
          onKeyPress: this.handlePreviousPage,
          "aria-disabled": g,
          "aria-label": l
        }, this.getEventListener(this.handlePreviousPage)), i)), this.pagination(), a.a.createElement("li", {
          className: v
        }, a.a.createElement("a", m({
          className: h,
          href: this.hrefBuilder(f + 1),
          tabIndex: "0",
          role: "button",
          onKeyPress: this.handleNextPage,
          "aria-disabled": y,
          "aria-label": d
        }, this.getEventListener(this.handleNextPage)), u)));
      }
    }]) && v(e.prototype, n), i;
  }(i.Component);
  _(w, "propTypes", {
    pageCount: s.a.number.isRequired,
    pageRangeDisplayed: s.a.number.isRequired,
    marginPagesDisplayed: s.a.number.isRequired,
    previousLabel: s.a.node,
    previousAriaLabel: s.a.string,
    nextLabel: s.a.node,
    nextAriaLabel: s.a.string,
    breakLabel: s.a.oneOfType([s.a.string, s.a.node]),
    hrefBuilder: s.a.func,
    onPageChange: s.a.func,
    initialPage: s.a.number,
    forcePage: s.a.number,
    disableInitialCallback: s.a.bool,
    containerClassName: s.a.string,
    pageClassName: s.a.string,
    pageLinkClassName: s.a.string,
    activeClassName: s.a.string,
    activeLinkClassName: s.a.string,
    previousClassName: s.a.string,
    nextClassName: s.a.string,
    previousLinkClassName: s.a.string,
    nextLinkClassName: s.a.string,
    disabledClassName: s.a.string,
    breakClassName: s.a.string,
    breakLinkClassName: s.a.string,
    extraAriaContext: s.a.string,
    ariaLabelBuilder: s.a.func,
    eventListener: s.a.string
  }), _(w, "defaultProps", {
    pageCount: 10,
    pageRangeDisplayed: 2,
    marginPagesDisplayed: 3,
    activeClassName: "selected",
    previousLabel: "Previous",
    previousClassName: "previous",
    previousAriaLabel: "Previous page",
    nextLabel: "Next",
    nextClassName: "next",
    nextAriaLabel: "Next page",
    breakLabel: "...",
    disabledClassName: "disabled",
    disableInitialCallback: !1,
    eventListener: "onClick"
  }), function () {
    var t = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
    if (t) {
      var r = void 0 !== n ? n : module;
      if (r) if ("function" != typeof r) {
        for (var i in r) if (Object.prototype.hasOwnProperty.call(r, i)) {
          var a = void 0;
          try {
            a = r[i];
          } catch (t) {
            continue;
          }
          t.register(a, i, "/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js");
        }
      } else t.register(r, "module.exports", "/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js");
    }
  }(), n.default = w, function () {
    var t = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
    if (t) {
      var r = void 0 !== n ? n : module;
      if (r) if ("function" != typeof r) {
        for (var i in r) if (Object.prototype.hasOwnProperty.call(r, i)) {
          var a = void 0;
          try {
            a = r[i];
          } catch (t) {
            continue;
          }
          t.register(a, i, "/home/adele/workspace/react-paginate/react_components/index.js");
        }
      } else t.register(r, "module.exports", "/home/adele/workspace/react-paginate/react_components/index.js");
    }
  }();
}]);