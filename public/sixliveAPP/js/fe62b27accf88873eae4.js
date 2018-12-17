_SIX_ROOMS_CB_(["519e2b"], {
  "+z1K": function(b, d, a) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    d.default = {
      randrange: function(a, b) {
        return a + Math.floor(Math.random() * (b - a))
      },
      shuffleArray: function(a) {
        for (var b = a.length, g, e; b;) e = Math.floor(Math.random() * b--), g = a[b], a[b] = a[e], a[e] = g;
        return a
      }
    }
  },
  "2KeS": function(b, d, a) {
    b.exports = a("5Op0")(24)
  },
  "6JQ0": function(b, d, a) {
    d.a = function(a) {
      var b = k.a.text("\u516d\u95f4\u623f");
      document.title = a ? a + " - " + b : b;
      if (h.a.wechat && h.a.iOS) {
        var c = document.createElement("iframe");
        c.src = "//vr0.6rooms.com/imges/favicon.ico";
        c.style.display = "none";
        c.onload = function() {
          setTimeout(function() {
            c.onload = null;
            c.parentNode.removeChild(c)
          }, 0)
        };
        document.body.appendChild(c)
      }
    };
    b = a("/ule");
    var h = a.n(b),
      k = a("cLh8")
  },
  "6uIR": function(b, d, a) {
    b = a("BYKG");
    var h = a.n(b);
    b = a("agns");
    a.n(b);
    var k = a("T5Bi"),
      k = a.n(k),
      g = a("V6zD"),
      e = a.n(g),
      c = a("O+kd"),
      g = a("sHCI"),
      f = a("9czD"),
      l = a("xXFV"),
      p = a("ZiWJ");
    a = h.a.fromJS({
      fetching: !1,
      info: Object(g.a)()
    });
    p.a.registerByMap("user", a, {
      "user.UPDATE_COIN6": function(a,
        b) {
        return a.updateIn(["info", "coin6"], function() {
          return b.payload
        })
      },
      "user.RECEIVE_INFO": function(a, b) {
        return a.update("info", function(a) {
          return a.mergeDeep(h.a.fromJS(b.payload))
        })
      }
    });
    a = function u() {
      u.superclass.constructor.call(this, p.a, "user");
      this._bindSelf("_refreshInfoBack", "_userStateUpdateHanlder", "_loginIMSuccess");
      this.refreshInfo();
      f.a.on("login.success", this._loginIMSuccess);
      e.a.subscribe("user-state-update", this._userStateUpdateHanlder)
    };
    Object(b.extend)(a, k.a, {
      actionCreator: {
        updateCoin6: function(a) {
          return {
            type: "user.UPDATE_COIN6",
            payload: a
          }
        },
        receiveInfo: function(a) {
          return {
            type: "user.RECEIVE_INFO",
            payload: a || {}
          }
        }
      },
      refreshInfo: function() {
        if (c.a.isLogin()) return this.update({
          fetching: !0
        }), c.a.refresh().then(this._refreshInfoBack, this._refreshInfoBack)
      },
      _refreshInfoBack: function(a) {
        a instanceof Error ? this.init() : (this.receiveInfo(a), this._loginIM());
        this.update({
          fetching: !1
        });
        return a
      },
      _userStateUpdateHanlder: function(a, b, e) {
        e ? this.receiveInfo(e) : b || this.init()
      },
      _loginIM: function() {
        !l.b.inApp() && c.a.isLogin() && f.a.login({
          uid: c.a.info.uid,
          encpass: c.a.ticket,
          roomid: "2"
        })
      },
      _loginIMSuccess: function() {
        f.a.sendMsg("login_login", {
          encpass: c.a.ticket
        })
      }
    });
    d.a = new a
  },
  "87u3": function(b, d, a) {
    b = a("GiK3");
    var h = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var k = a("DzMU");
    a = b()({
      displayName: "FullOverlay",
      render: function() {
        var a = this.props,
          b = a.onClose;
        return h.a.createElement("div", {
          className: "g-fulloverlay"
        }, h.a.createElement("div", {
          className: "g-fulloverlay-content"
        }, a.children), h.a.createElement(k.a, {
          className: "g-fulloverlay-close",
          onTap: b
        }, h.a.createElement("i", {
          className: "iconfont icon-guanbi"
        })))
      }
    });
    d.a = a
  },
  "8ZVd": function(b, d, a) {
    d.a = function(a) {
      return new Promise(function(b, g) {
        var e = function() {
            b(a);
            e = c = null
          },
          c = function() {
            g(Error("Can't load " + a));
            e = c = null
          },
          f = document.createElement("script");
        f.onload = e;
        f.onerror = c;
        f.src = a;
        document.head.appendChild(f)
      })
    }
  },
  "9czD": function(b, d, a) {
    b = a("agns");
    a.n(b);
    a = a("WQst");
    var h = function g() {
      g.superclass.constructor.call(this);
      this.on("newListener", this._newListenerHandler)
    };
    Object(b.extend)(h, a.a, {
      onMessage: function(a,
        b) {
        switch (a) {
          case "eventEmit":
            this.emit(b.event, b.data)
        }
      },
      login: function(a) {
        this.start("/js-worker/imsocketworker");
        this.postMessage("login", a)
      },
      sendMsg: function(a, b) {
        this.postMessage("sendMsg", [a, b])
      },
      _newListenerHandler: function(a, b) {
        this.postMessage("newListener", a)
      }
    });
    d.a = new h
  },
  BYKG: function(b, d, a) {
    b.exports = a("5Op0")(23)
  },
  DP0g: function(b, d, a) {
    d.a = function() {
      return new Promise(function(a, b) {
        "object" == g(window.SMSdk) ? a(l()) : (Object(k.a)(e).then(function() {
          clearTimeout(f);
          "object" == g(window.SMSdk) ?
            a(l()) : setTimeout(function() {
              a(l())
            }, 600)
        }), f = setTimeout(function() {
          p("timeout", c);
          a("")
        }, c))
      })
    };
    b = a("TkXE");
    var h = a.n(b),
      k = a("8ZVd"),
      g = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
        return typeof a
      } : function(a) {
        return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      },
      e = "//static.fengkongcloud.com/fpv2.js",
      c = 4E3;
    window._smConf = {
      organization: "TKWQ4vmgC3PJLGDTMIoJ",
      staticHost: "static.fengkongcloud.com",
      isOpenUserBehavior: !0
    };
    setTimeout(function() {
        return Object(k.a)(e)
      },
      600);
    var f = null,
      l = function() {
        var a = "";
        try {
          a = window.SMSdk.getDeviceId()
        } catch (b) {
          p("js-error", b.message)
        }
        return a
      },
      p = function(a, b) {
        (new Image).src = h.a.make("//sclick.6rooms.com/w.html?act=33", {
          reason: a,
          msg: b
        })
      }
  },
  DzMU: function(b, d, a) {
    var h = a("agns");
    a.n(h);
    b = a("V6zD");
    var k = a.n(b);
    b = a("/ule");
    var g = a.n(b),
      e = a("xXFV");
    b = a("GiK3");
    var c = a.n(b);
    b = a("DT0+");
    a = a.n(b)()({
      displayName: "Tap",
      getDefaultProps: function() {
        return {
          tagName: "div"
        }
      },
      render: function() {
        var a = this.props,
          b = a.tagName,
          e = a.children,
          g = a.tapRef,
          a = a.onTap,
          d = Object(h.omit)(this.props, "tagName", "children", "tapRef", "onTap");
        a && (d = Object(h.omit)(d, "onClick", "onTouchStart", "onTouchMove", "onTouchEnd"), Object(h.mix)(d, {
          onClick: this.onTap,
          onTouchStart: this.startTraceTouch,
          onTouchMove: this.traceTouchMove,
          onTouchEnd: this.onTap
        }));
        g && Object(h.mix)(d, {
          ref: g
        });
        return c.a.createElement(b, d, e)
      },
      componentDidMount: function() {
        this._touchTracing = {};
        this._touchTracingTimer = null
      },
      componentWillUnmount: function() {
        this._touchTracing = null
      },
      onTap: function(a) {
        if (this.checkHandlerAvailable(a)) this.props.onTap(a)
      },
      startTraceTouch: function(a) {
        for (var b = 0; b < a.touches.length; b++) {
          var e = a.touches[b];
          this._touchTracing[e.identifier] = {
            clientX: e.clientX,
            clientY: e.clientY,
            available: !0
          }
        }
      },
      traceTouchMove: function(a) {
        for (var b = 0; b < a.touches.length; b++) {
          var e = a.touches[b],
            c = this._touchTracing[e.identifier];
          c && (6 < Math.abs(e.clientX - c.clientX) || 6 < Math.abs(e.clientY - c.clientY)) && (c.available = !1)
        }
      },
      checkTouchAvailable: function(a) {
        for (var b = !0, e = 0; e < a.changedTouches.length; e++) {
          var c = a.changedTouches[e],
            g = this._touchTracing[c.identifier];
          g && !g.available ? b = !1 : g && k.a.publish("fastclick", c.clientX, c.clientY);
          delete this._touchTracing[c.identifier]
        }
        return b
      },
      checkHandlerAvailable: function(a) {
        var b = e.b.inApp() || g.a.preventDefaultInTouchendCanScroll();
        "touchend" == a.type && b && a.preventDefault();
        return "touchend" == a.type && this.checkTouchAvailable(a) || "click" == a.type
      }
    });
    d.a = a
  },
  ECR3: function(b, d, a) {
    function h(a) {
      try {
        var b = JSON.parse(a);
        f.localStorage.setItem("eventBadgeRaw", a);
        q = k(b)
      } catch (e) {
        var b = new c.a,
          l = f.localStorage.getItem("eventBadgeRaw");
        a = b.patch_apply(b.patch_fromText(a), l);
        f.localStorage.setItem("eventBadgeRaw", a[0]);
        q = k(JSON.parse(a[0]))
      }
    }

    function k(a) {
      return a.props ? a.props.reduce(function(a, b) {
        a[b.id] = b;
        return a
      }, {}) : {}
    }

    function g(a) {
      var b = a.width,
        e = a.height;
      return Object(l.merge)({
        width: b,
        height: e,
        backgroundImage: "url(" + a.url + ")",
        backgroundSize: b + "px " + e + "px"
      }, r)
    }

    function e(a) {
      var b = "";
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          b = a + "\u5bcc";
          break;
        case 11:
          b = "\u7537\u7235";
          break;
        case 12:
          b =
            "\u5b50\u7235";
          break;
        case 13:
          b = "\u4f2f\u7235";
          break;
        case 14:
          b = "\u4faf\u7235";
          break;
        case 15:
          b = "\u516c\u7235";
          break;
        case 16:
          b = "\u90e1\u516c";
          break;
        case 17:
          b = "\u56fd\u516c";
          break;
        case 18:
          b = "\u738b\u7235";
          break;
        case 19:
          b = "\u85e9\u738b";
          break;
        case 20:
          b = "\u90e1\u738b";
          break;
        case 21:
          b = "\u4eb2\u738b";
          break;
        case 22:
          b = "\u56fd\u738b";
          break;
        case 23:
          b = "\u7687\u5e1d";
          break;
        case 24:
          b = "\u5927\u5e1d";
          break;
        case 25:
          b = "\u795e";
          break;
        case 26:
          b = "\u4f17\u795e\u4e4b\u795e";
          break;
        case 27:
          b = "\u521b\u4e16\u5927\u795e";
          break;
        case 28:
          b = "\u521b\u4e16\u795e\u738b";
          break;
        case 29:
          b = "\u521b\u4e16\u795e\u7687";
          break;
        case 30:
          b = "\u521b\u4e16\u795e\u5e1d";
          break;
        case 31:
          b = "\u521b\u4e16\u5929\u5c0a"
      }
      return b
    }
    d.b = e;
    b = a("HYTz");
    var c = a.n(b),
      f = a("u4sq");
    a.n(f);
    var l = a("agns");
    a.n(l);
    b = a("RfPX");
    var p = a.n(b);
    b = a("fiJj");
    var m = a("+itZ"),
      u = a("sHCI"),
      t = a("GiK3"),
      n = a.n(t),
      t = a("DT0+");
    a = a.n(t);
    var v = {
        7116: {
          width: 33,
          height: 32
        },
        7117: {
          width: 33,
          height: 32
        },
        7118: {
          width: 33,
          height: 32
        },
        7119: {
          width: 33,
          height: 32
        },
        7120: {
          width: 33,
          height: 32
        },
        8600: {
          width: 33,
          height: 32
        },
        8601: {
          width: 33,
          height: 32
        },
        8602: {
          width: 33,
          height: 32
        }
      },
      r = {
        display: "inline-block",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      },
      t = JSON.parse(f.localStorage.getItem("eventBadgeRaw") || "{}"),
      q = k(t);
    Object(b.b)("coop-mobile-giftupdate.php", {
      pver: t.ver || 0
    }).then(function(a) {
      if ("001" == a.flag && (a = a.content && a.content.pdown)) return p()(a, {
        dataType: "text"
      }).then(h)
    });
    a = a()({
      displayName: "Badge",
      render: function() {
        var a = this.props,
          b = a.url,
          e = a.width,
          c = a.height,
          f = a.prop,
          l = a.rich,
          C = a.star,
          y =
          a.admin,
          d = a.role,
          h = a.grade,
          p = null;
        this.className = "badge " + (a.className || "");
        b && e && c ? p = n.a.createElement("i", {
          className: this.className,
          style: g({
            url: b,
            width: e,
            height: c
          })
        }) : "undefined" != typeof f ? p = this.getProp(f, h) : "undefined" != typeof l ? p = this.getRich(l) : "undefined" != typeof C ? p = this.getStar(C) : "undefined" != typeof y ? p = this.getAdmin(y, h) : "undefined" != typeof d && (p = this.getRole(d));
        return p
      },
      getProp: function(a, b) {
        var e, c = null;
        if (e = q[a]) e = e.spic, e = g({
          width: e.width / 2,
          height: e.height / 2,
          url: e.img
        }), c = n.a.createElement("i", {
          className: this.className,
          style: e
        });
        else if (e = v[a]) e = g({
          width: e.width / 2,
          height: e.height / 2,
          url: "//vr0.6rooms.com/img/icon/prop/" + a + ".png"
        }), c = n.a.createElement("i", {
          className: this.className,
          style: e
        });
        else if (Object(u.d)([a])) {
          e = Object(u.b)([a]);
          var c = Object(u.c)([a]),
            f = void 0,
            f = g({
              width: 22,
              height: 22,
              url: e ? "//vr0.6rooms.com/img/icon/diamond-guard/" + b + ".png" : c ? "//vr0.6rooms.com/img/icon/rooms_third_guard_gold/rooms_third_guard_gold_" + b + ".png" : "//vr0.6rooms.com/img/icon/rooms_third_guard_silver/rooms_third_guard_silver_" +
                b + ".png"
            }),
            c = n.a.createElement("i", {
              className: this.className,
              style: f
            })
        }
        return c
      },
      getRich: function(a) {
        var b, c;
        31 <= a ? (b = 62, c = 22.5) : 30 <= a ? (b = 50, c = 21) : 29 <= a ? (b = 44, c = 20) : 27 <= a ? (b = 44, c = 18) : 26 <= a ? (b = 44, c = 20) : 25 <= a ? (b = 40, c = 17) : (b = 18 <= a ? 38 : 11 <= a ? 33 : 30, c = 15);
        var f = c;
        c = this.props.width;
        var l = this.props.height;
        if (c || l) b /= f, l ? (b *= l, f = l) : (f = b / c, b = c);
        b = g({
          url: "//vr0.6rooms.com/img/icon/rich_v1/" + a + ".png",
          width: b,
          height: f
        });
        return n.a.createElement("i", {
          className: this.className,
          title: e(a),
          style: b
        })
      },
      getStar: function(a) {
        var b =
          30,
          e = 16;
        50 <= a ? (b = 60, e = 24) : 40 <= a ? (b = 50, e = 16) : 20 <= a && (b = 36, e = 16);
        a = g({
          url: "//vr0.6rooms.com/img/icon/star/" + a + ".png",
          width: b,
          height: e
        });
        return n.a.createElement("i", {
          className: this.className,
          style: a
        })
      },
      getAdmin: function(a, b) {
        var e = a == m.C,
          e = g({
            width: 22,
            height: 22,
            url: (e ? "//vr0.6rooms.com/img/icon/general_management_level/" : "//vr0.6rooms.com/img/icon/management_level/") + (e ? "general_management_level_" : "management_level_") + b + ".png"
          });
        return n.a.createElement("i", {
          className: this.className,
          style: e
        })
      },
      getRole: function(a) {
        a =
          g({
            width: 33,
            height: 15,
            url: a == m.A ? "//vr0.6rooms.com/v/n2/30bd509be7939abc10269cc3172b8836.png" : a == m.B ? "//vr0.6rooms.com/v/f0/2484a76df55c65da940d9075fcf23ef5.png" : "//vr0.6rooms.com/v/w5/5355d76dc6f51c20ed95388232a632bf.png"
          });
        return n.a.createElement("i", {
          className: this.className,
          style: a
        })
      }
    });
    d.a = a
  },
  FKaQ: function(b, d, a) {
    b = a("u4sq");
    var h = a.n(b),
      k = a("cLh8");
    b = a("GiK3");
    var g = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var e = a("tZ8z"),
      e = a.n(e),
      c = a("eMPr"),
      f = a("DzMU");
    a = b()({
      displayName: "CommonHeader",
      mixins: [e.a],
      render: function() {
        var a =
          this.props,
          b = a.user,
          e = a.onClickSearch,
          d = a.onClickCharge,
          t = "g-header" + (a.hidden ? " hidden" : ""),
          a = "search " + (a.baseFrame.get("showingSearchOverlay") ? "on" : ""),
          n, v, r, q;
        n = k.a.yes() && k.a.info.url ? g.a.createElement("a", {
          href: k.a.info.url,
          className: "collaborate-logo"
        }, k.a.info.name) : g.a.createElement(c.a, {
          href: "/",
          className: "logo"
        });
        v = b.getIn(["info", "avatar"]) ? g.a.createElement("img", {
          src: b.getIn(["info", "avatar"])
        }) : g.a.createElement("i", {
          className: "iconfont icon-gerenzhongxin"
        });
        0 > location.pathname.indexOf("/pay") &&
          (r = g.a.createElement(f.a, {
            tagName: "span",
            className: "charge",
            onTap: d
          }));
        0 < b.getIn(["info", "uid"]) && !h.a.getItem("tapped-avatar") && (q = g.a.createElement("div", {
          className: "tip"
        }, "\u70b9\u8fd9\u91cc\u53ef\u4ee5\u6539\u540d\u5b57\u54e6"));
        return g.a.createElement("div", {
          className: t,
          "data-tracing": "common_header"
        }, g.a.createElement("header", null, g.a.createElement("section", {
          className: "left"
        }, n), g.a.createElement("section", {
          className: "right"
        }, g.a.createElement(f.a, {
          tagName: "span",
          className: a,
          "data-tracing": "search",
          onTap: e
        }, g.a.createElement("i", {
          className: "iconfont icon-search"
        })), r, g.a.createElement(f.a, {
          tagName: "span",
          className: "avatar",
          onTap: this.onClickAvatar
        }, v, q))))
      },
      onClickAvatar: function(a) {
        var b = this.props.onClickAvatar;
        h.a.setItem("tapped-avatar", 1);
        b && b(a)
      }
    });
    d.a = a
  },
  FSZp: function(b, d, a) {
    var h = a("agns");
    a.n(h);
    b = a("GiK3");
    var k = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var g = a("tZ8z"),
      g = a.n(g),
      e = a("DzMU"),
      c = Object.assign || function(a) {
        for (var b = 1; b < arguments.length; b++) {
          var e = arguments[b],
            c;
          for (c in e) Object.prototype.hasOwnProperty.call(e,
            c) && (a[c] = e[c])
        }
        return a
      };
    a = b()({
      displayName: "ProgressButton",
      mixins: [g.a],
      getDefaultProps: function() {
        return {
          progress: !1,
          disabled: !1,
          duration: 1E4
        }
      },
      _timer: null,
      _container: null,
      _bar: null,
      _width: 0,
      _progress: 0,
      render: function() {
        var a = this.props,
          b = a.children,
          g = {
            width: this._progress * this._width
          },
          a = "g-btn g-btn-progress" + (a.disabled && 0 == this._progress ? " disabled" : ""),
          d = Object(h.omit)(this.props, "children", "progress", "disabled", "duration");
        return k.a.createElement(e.a, c({
            tagName: "button",
            className: a,
            tapRef: this.refSelf
          },
          d), k.a.createElement("b", {
          className: "bar",
          style: g,
          ref: this.refBar
        }), k.a.createElement("span", null, b))
      },
      componentDidMount: function() {
        var a = this.props.progress;
        this._progress = "number" == typeof a ? a : 0;
        this._width = this._container.getBoundingClientRect().width;
        this.forceUpdate()
      },
      componentDidUpdate: function(a) {
        var b = this.props.progress;
        a = a.progress;
        b != a && ("number" == typeof b ? this._progress = b : !0 === b && !1 === a ? this.start() : !1 === b && !0 === a ? this.stop() : !1 === b && (this._progress = 0), this.forceUpdate())
      },
      componentWillUnmount: function() {
        this.stop()
      },
      start: function() {
        clearTimeout(this._timer);
        this._progress = 0;
        this.wriggle()
      },
      stop: function() {
        clearTimeout(this._timer);
        this._progress = 0
      },
      wriggle: function() {
        var a = this._progress,
          a = a + 800 / this.props.duration;
        this._progress = a = Math.min(1, Math.max(0, a));
        this.forceUpdate();
        1 > a && (this._timer = setTimeout(this.wriggle, 800))
      },
      refSelf: function(a) {
        this._container = a
      },
      refBar: function(a) {
        this._bar = a
      }
    });
    d.a = a
  },
  "FZ+f": function(b, d) {
    function a(a, b) {
      var g = a[1] || "",
        e = a[3];
      if (!e) return g;
      if (b) {
        var c = "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
          (new Buffer(JSON.stringify(e))).toString("base64") + " */",
          f = e.sources.map(function(a) {
            return "/*# sourceURL=" + e.sourceRoot + a + " */"
          });
        return [g].concat(f).concat([c]).join("\n")
      }
      return "" + g
    }
    b.exports = function(b) {
      var d = [];
      d.toString = function() {
        return this.map(function(d) {
          var e = a(d, b);
          return d[2] ? "@media " + d[2] + "{" + e + "}" : e
        }).join("")
      };
      d.i = function(a, b) {
        "string" === typeof a && (a = [
          [null, a, ""]
        ]);
        for (var c = {}, f = 0; f < this.length; f++) {
          var l = this[f][0];
          "number" === typeof l && (c[l] = !0)
        }
        for (f = 0; f < a.length; f++) l = a[f],
          "number" === typeof l[0] && c[l[0]] || (b && !l[2] ? l[2] = b : b && (l[2] = "(" + l[2] + ") and (" + b + ")"), d.push(l))
      };
      return d
    }
  },
  Fcwr: function(b, d, a) {
    a.d(d, "c", function() {
      return F
    });
    a.d(d, "d", function() {
      return A
    });
    a.d(d, "e", function() {
      return D
    });
    a.d(d, "f", function() {
      return C
    });
    a.d(d, "a", function() {
      return y
    });
    a.d(d, "b", function() {
      return E
    });
    b = a("V6zD");
    var h = a.n(b);
    b = a("TkXE");
    var k = a.n(b),
      g = a("agns");
    a.n(g);
    var e = a("u4sq");
    a.n(e);
    var c = a("h40y"),
      f = a("xXFV"),
      l = a("O+kd"),
      p = a("VSEd"),
      m = function() {
        return function(a, b) {
          if (Array.isArray(a)) return a;
          if (Symbol.iterator in Object(a)) {
            var e = [],
              c = !0,
              f = !1,
              d = void 0;
            try {
              for (var y = a[Symbol.iterator](), w; !(c = (w = y.next()).done) && (e.push(w.value), !b || e.length !== b); c = !0);
            } catch (l) {
              f = !0, d = l
            } finally {
              try {
                if (!c && y["return"]) y["return"]()
              } finally {
                if (f) throw d;
              }
            }
            return e
          }
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      }(),
      u = function() {
        function a(b, e) {
          for (var c = 0; c < e.length; c++) {
            var f = e[c];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b,
              f.key, f)
          }
        }
        return function(b, e, c) {
          e && a(b.prototype, e);
          c && a(b, c);
          return b
        }
      }(),
      t = "",
      n = "",
      v = "",
      r = Date.now(),
      q = new(function() {
        function a() {
          if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
          this._key = "analytic_breadcrumb";
          this._list = [];
          this._empty = ["", "", "", "", 0];
          this.retrive()
        }
        u(a, [{
            key: "push",
            value: function(a) {
              var b = a.pageName,
                e = a.pageID,
                c = a.moduleID,
                f = a.recID,
                y = a.watchID;
              a = a.event;
              if (!/^\/(pay|login|reg)/.test(b)) {
                var d = this._list,
                  b = [b || "", e || "", c || "", f || "", y || 0],
                  e = this.getLast();
                "in" == a && b[0] == e[0] && b[1] == e[1] ? e[2] = b[2] : "load" != a || b[0] == e[0] && b[1] == e[1] && b[3] == e[3] || (d.push(b), 6 < d.length && d.splice(0, d.length - 6));
                this.save()
              }
            }
          }, {
            key: "save",
            value: function() {
              e.sessionStorage.setItem(this._key, JSON.stringify(this._list))
            }
          }, {
            key: "retrive",
            value: function() {
              var a = e.sessionStorage.getItem(this._key);
              if (a) try {
                this._list = a = JSON.parse(a)
              } catch (b) {
                console.error("Parse breadcrumb error")
              }
            }
          }, {
            key: "getLast",
            value: function() {
              return this._list[this._list.length - 1] || this._empty
            }
          }, {
            key: "getSecondLast",
            value: function() {
              return this._list[this._list.length - 2] || this._empty
            }
          }, {
            key: "getLastFromModule",
            value: function() {
              var a = this.getLast(),
                a = [a[0], a[2]].join("-");
              return "-" == a ? "" : a
            }
          }, {
            key: "getSecondLastFromModule",
            value: function() {
              var a = this.getSecondLast(),
                a = [a[0], a[2]].join("-");
              return "-" == a ? "" : a
            }
          }, {
            key: "getLastPageID",
            value: function() {
              return this.getLast()[1]
            }
          }, {
            key: "getSecondLastPageID",
            value: function() {
              return this.getSecondLast()[1]
            }
          }, {
            key: "getLastRecID",
            value: function() {
              return this.getLast()[3]
            }
          },
          {
            key: "getSecondLastRecID",
            value: function() {
              return this.getSecondLast()[3]
            }
          }
        ]);
        return a
      }()),
      w = function(a) {
        a = (a || location.pathname + location.search).split("?")[0];
        var b, e = a,
          c = "";
        if ("/" == a || /^\/live\/(?:[\w-]+)\/?$/.test(a)) e = "index";
        else if (b = /^\/(\d+)\/?$/.exec(a)) e = "room", c = b[1];
        else if (b = /^\/(\d+)\/synopsis\/?$/.exec(a)) e = "profile", c = b[1];
        else if (b = /^\/video\/(\d+)\/?$/.exec(a)) e = "video", c = b[1];
        else if (b = /^\/family\/(\d+)\/synopsis\/?$/.exec(a)) e = "family_profile", c = b[1];
        else if (b = /^\/videoplayer\/(\d+)\/?$/.exec(a)) e =
          "video_player", c = b[1];
        else if (b = /^\/song\/(\d+)\/?$/.exec(a)) e = "song", c = b[1];
        return [e, c]
      },
      x = function() {
        return !!Object(c.c)() && !f.b.inApp()
      },
      z = function(a, b) {
        if (x()) {
          var e = l.a.isLogin() && l.a.info ? JSON.stringify({
              uid: l.a.info.uid,
              coinrank: l.a.info.coin6Rank,
              wealthrank: l.a.info.wealthRank
            }) : "",
            e = Object(g.merge)({
              event: a,
              uuid: Object(c.c)(),
              data: e,
              reffer: document.referrer,
              page: t,
              pageid: n,
              reft: p.a.getInfo().reft,
              watchid: r,
              ver: "1.1",
              platform: "h5"
            }, b);
          (new Image).src = k.a.make("//sclick.6rooms.com/s.html",
            e)
        }
      },
      A = function(a, b) {
        var e = a instanceof HTMLElement,
          c;
        if (e) {
          c = a;
          for (var f; c && c.parentNode && "reactbody" != c.id;) c = (f = c.getAttribute("data-tracing") || void 0) ? null : c.parentNode;
          c = f
        } else c = a;
        f = {
          module: c,
          from_module: q.getSecondLastFromModule()
        };
        if ("room" == w(b)[0]) {
          var d = void 0;
          e && (d = a.getAttribute("data-index")) && (f.pos = d)
        }
        z("in", f);
        q.push({
          pageName: t,
          pageID: n,
          moduleID: c,
          event: "in"
        })
      },
      B = function() {
        var a = "";
        0 == t.indexOf("index") && (a = v);
        q.push({
          pageName: t,
          pageID: n,
          recID: a,
          watchID: r,
          event: "load"
        });
        z("load", {
          url: location.pathname + location.search,
          module: "",
          page_num: 0,
          recid: a,
          from_module: q.getSecondLastFromModule(),
          from_pageid: q.getSecondLastPageID(),
          from_recid: q.getSecondLastRecID()
        })
      };
    a = function() {
      this._timer = null;
      this._uid = 0;
      this._loopPeriod = 6E4;
      this._lastReportTime = this._accumulator = this._startTime = 0;
      this._report = this._report.bind(this);
      this._page = [];
      this._fromModule = ""
    };
    a.prototype = {
      start: function(a) {
        clearTimeout(this._timer);
        this._page = [t, n];
        this._fromModule = q.getSecondLastFromModule();
        this._startTime =
          Date.now();
        this._uid = a;
        this._timer = setTimeout(this._report, this._loopPeriod)
      },
      stop: function() {
        clearTimeout(this._timer);
        this._report(!0);
        this._lastReportTime = this._accumulator = this._startTime = 0
      },
      _report: function(a) {
        var b = this._startTime,
          e = this._accumulator,
          c = this._lastReportTime,
          f = this._loopPeriod;
        a ? a = Math.min(f, Date.now() - (c || b)) : (a = f, this._timer = setTimeout(this._report, f));
        this._accumulator = e += a;
        this._lastReportTime = Date.now();
        z("loop", {
          page: this._page[0] || "",
          pageid: this._uid,
          from_module: this._fromModule,
          tm: Math.round(a / 1E3),
          looktm: Math.round(e / 1E3)
        })
      }
    };
    var D = new a,
      C = function(a) {
        z("showlist", {
          module: "",
          from_module: q.getSecondLastFromModule(),
          recid: v,
          ridlist: a.join("|")
        })
      },
      y = function(a) {
        x() && Object(g.mix)(a, {
          uuid: Object(c.c)(),
          page: t,
          pageid: n,
          module: "",
          from_module: q.getSecondLastFromModule(),
          watchid: r,
          reft: p.a.getInfo().reft,
          platform: "h5"
        });
        return a
      },
      E = function(a) {
        if (x()) {
          var b = q.getLast();
          Object(g.mix)(a, {
            uuid: Object(c.c)(),
            from_module: q.getSecondLastFromModule(),
            page: b[0],
            pageid: b[1],
            module: b[2],
            watchid: b[4],
            reft: p.a.getInfo().reft,
            platform: "h5"
          })
        }
        return a
      },
      F = function(a, b, e) {
        a ? (t = a, n = b, v = e || v) : (a = w(), a = m(a, 2), b = a[1], t = a[0], n = b);
        r = Date.now();
        Object(c.c)() ? (h.a.unsubscribe("analyzeDone", B), B()) : h.a.subscribe("analyzeDone", B)
      }
  },
  HYTz: function(b, d, a) {
    b.exports = a("5Op0")(41)
  },
  Lqlk: function(b, d, a) {
    b = a("TkXE");
    var h = a.n(b),
      k = a("O+kd"),
      g = a("cLh8"),
      e = a("KV26"),
      c = a("6JQ0"),
      f = a("Fcwr");
    b = a("GiK3");
    var l = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var p = a("tZ8z"),
      p = a.n(p),
      m = a("FKaQ"),
      u = a("ZTsT"),
      t = a("w2rP"),
      n = a("ZiDx"),
      v = a("6uIR"),
      r = a("dh4o"),
      q = a("nVRx");
    a = b()({
      displayName: "BaseFrame",
      mixins: [p.a],
      getDefaultProps: function() {
        return {
          autoCollapse: !0
        }
      },
      _lastDoScrollTime: 0,
      _scrollTimer: null,
      _scrollTop: 0,
      _container: null,
      render: function() {
        var a = this.props,
          b = a.baseFrame,
          e = a.user,
          c = a.notice,
          f = b.get("collapsed"),
          a = l.a.createElement(m.a, {
            baseFrame: b,
            user: e,
            hidden: f,
            onClickSearch: r.a.toggleSearchOverlay,
            onClickAvatar: this.onClickAvatar,
            onClickCharge: this.onClickCharge
          }),
          e = l.a.createElement(u.a, {
            user: e,
            hidden: f,
            onNeedLogin: q.a.showLoginConfirm
          }),
          b = b.get("showingSearchOverlay") && l.a.createElement(t.a, {
            onClose: r.a.hideSearchOverlay
          }),
          c = c.get("loginConfirm") && l.a.createElement(n.a, {
            text: c.get("loginConfirmText"),
            onCancel: q.a.hideLoginConfirm
          });
        return l.a.createElement("div", {
          className: "baseframe",
          ref: this.refSelf
        }, a, b, e, c)
      },
      componentDidMount: function() {
        var a = this.props,
          b = a.title,
          a = a.autoCollapse;
        r.a.setup();
        Object(c.a)(b);
        a && (this._scrollHandler(), self.addEventListener("scroll", this._scrollHandler, !1))
      },
      componentDidUpdate: function(a) {
        var b =
          this.props;
        a.title != b.title && Object(c.a)(b.title);
        a.autoCollapse != b.autoCollapse && (b.autoCollapse ? (this._scrollHandler(), self.addEventListener("scroll", this._scrollHandler, !1)) : self.removeEventListener("scroll", this._scrollHandler, !1))
      },
      componentWillUnmount: function() {
        clearTimeout(this._scrollTimer);
        self.removeEventListener("scroll", this._scrollHandler, !1);
        r.a.teardown()
      },
      onClickCharge: function(a) {
        if (k.a.isLogin()) {
          var b = h.a.make(g.a.text("/pay"), {
            next: location.href
          });
          Object(f.d)(a && a.currentTarget,
            b);
          e.a.push(b)
        } else q.a.showLoginConfirm()
      },
      onClickAvatar: function(a) {
        var b = v.a.getState().getIn(["info", "rid"]);
        b ? (b = "/" + b + "/synopsis", Object(f.d)(a && a.currentTarget, b), e.a.push(b)) : q.a.showLoginConfirm()
      },
      refSelf: function(a) {
        this._container = a
      },
      _scrollHandler: function(a) {
        clearTimeout(this._scrollTimer);
        this._scrollTimer = setTimeout(this._requestDoScroll, 200);
        this._requestDoScroll()
      },
      _requestDoScroll: function() {
        requestAnimationFrame(this._doScroll)
      },
      _doScroll: function(a) {
        if (200 < a - this._lastDoScrollTime &&
          this._container) {
          var b = this._getScrollTop(),
            e = this.props.baseFrame.get("collapsed");
          66 < b && 0 < b - this._scrollTop && !e ? r.a.collapse() : (0 > b - this._scrollTop || 0 == b) && e && r.a.expand();
          this._scrollTop = b;
          this._lastDoScrollTime = a
        }
      },
      _getScrollTop: function() {
        return Math.max(document.body.scrollTop, document.documentElement.scrollTop)
      }
    });
    d.a = a
  },
  Ltwu: function(b, d, a) {
    d = a("viv0");
    "string" === typeof d && (d = [
      [b.i, d, ""]
    ]);
    a("fjbf")(d, {});
    d.locals && (b.exports = d.locals)
  },
  MP6e: function(b, d, a) {
    var h = a("agns");
    a.n(h);
    b = a("GiK3");
    var k = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var g = a("DzMU");
    a = b()({
      displayName: "Media",
      getDefaultProps: function() {
        return {
          tag: "video",
          playsInline: !0,
          duration: 0,
          autoPlay: !0,
          controls: !1,
          muted: !1,
          loop: !1
        }
      },
      domNode: null,
      loadStarted: !1,
      paused: !0,
      buffering: !1,
      playheadMovingTimer: null,
      doOnProgressTimer: null,
      doOnTimeUpdateTimer: null,
      _eventMap: {
        canplay: "onCanPlay",
        canplaythrough: "onCanPlayThrough",
        durationchange: "onDurationChange",
        ended: "onEnded",
        error: "onError",
        loadeddata: "onLoadedData",
        loadedmetadata: "onLoadedMetaData",
        pause: "onPause",
        playing: "onPlaying",
        progress: "onProgress",
        seeked: "onSeeked",
        seeking: "onSeeking",
        stalled: "onStalled",
        timeupdate: "onTimeUpdate",
        waiting: "onWaiting"
      },
      _timeupdateOccurTimes: 0,
      _hadPlayed: !1,
      render: function() {
        var a = this.props,
          b = a.tag,
          f = a.style,
          d = a.poster,
          p = a.onClick,
          m = {},
          u = "tag poster duration x5Player mediaRef onClick".split(" ");
        Object.keys(a).forEach(function(b) {
          0 != b.indexOf("on") && 0 > u.indexOf(b) && (m[b] = a[b])
        });
        m.tagName = b;
        m.poster = "//vr0.6rooms.com/v/r0/3c77d303e4906bf08feeab0df8038e69.png";
        m.style = Object(h.merge)(f, {
          backgroundImage: !this._hadPlayed && d ? "url(" + d + ")" : "none"
        });
        m.onTap = p;
        m.tapRef = this._ref;
        return k.a.createElement(g.a, m)
      },
      componentDidMount: function() {
        var a = this.domNode,
          b = this.props,
          f = b.playsInline,
          d = b.autoPlay,
          g = b.x5Player,
          h = b.onX5EnterFullscreen,
          b = b.onX5ExitFullscreen;
        this._bindEventHandler(this._eventMap);
        f && a.setAttribute("webkit-playsinline", "");
        g && (a.setAttribute("x5-video-player-type", "h5"), a.setAttribute("x5-video-player-fullscreen", "true"), h && a.addEventListener("x5videoenterfullscreen",
          this.onX5EnterFullscreen, !1), b && a.addEventListener("x5videoexitfullscreen", this.onX5ExitFullscreen, !1));
        d && (this.paused = !1)
      },
      componentWillUnmount: function() {
        var a = this.domNode;
        this._bindEventHandler(this._eventMap, !0);
        this.stopPlayheadMovingCheck();
        clearTimeout(this.doOnProgressTimer);
        clearTimeout(this.doOnTimeUpdateTimer);
        a.removeEventListener("x5videoenterfullscreen", this.onX5EnterFullscreen, !1);
        a.removeEventListener("x5videoexitfullscreen", this.onX5ExitFullscreen, !1);
        a.pause();
        a.src = "";
        a.load()
      },
      play: function() {
        var a = this.domNode;
        this.paused = !1;
        a.play();
        this.handleBufferingEvent()
      },
      pause: function() {
        var a = this.domNode;
        this.paused = !0;
        a.pause();
        this.handleBufferingEvent()
      },
      setCurrentTime: function(a) {
        this.domNode.currentTime = a
      },
      load: function() {
        var a = this.domNode;
        a && a.load()
      },
      isPlaying: function() {
        var a = this.domNode;
        return !a.paused && !a.ended
      },
      isBuffering: function() {
        return !!this.buffering
      },
      getCurrentTime: function() {
        return this.domNode.currentTime
      },
      getDuration: function() {
        return this.domNode.duration ||
          this.props.duration
      },
      getBuffered: function() {
        return this.domNode.buffered
      },
      getSrc: function() {
        return this.domNode.src
      },
      canTriggerTimeupdateEvent: function() {
        return 2 < this._timeupdateOccurTimes
      },
      onCanPlay: function() {
        this.handleBufferingEvent()
      },
      onCanPlayThrough: function() {
        this.handleBufferingEvent()
      },
      onDurationChange: function() {
        var a = this.props.onDurationChange;
        a && a(this.getDuration())
      },
      onEnded: function() {
        var a = this.props.onEnded;
        clearTimeout(this.doOnTimeUpdateTimer);
        this.doOnTimeUpdateTimer = null;
        this.handleBufferingEvent();
        a && a()
      },
      onError: function() {
        var a = this.props.onError;
        a && a()
      },
      onLoadedData: function() {
        this.loadStarted = !0;
        this.handleBufferingEvent()
      },
      onLoadedMetaData: function() {
        this.handleBufferingEvent()
      },
      onPause: function() {
        var a = this.props,
          b = a.onPause,
          a = a.onResourceBreak;
        this.stopPlayheadMovingCheck();
        this.handleBufferingEvent();
        b && b();
        !this.paused && a && a()
      },
      onPlaying: function() {
        var a = this.props.onPlaying;
        this.startPlayheadMovingCheck();
        this.handleBufferingEvent();
        this._hadPlayed || (this._hadPlayed = !0);
        a && a()
      },
      onProgress: function() {
        this.doOnProgressTimer ||
          (this.doOnProgressTimer = setTimeout(this.doOnProgress, 1E3))
      },
      onSeeked: function() {
        this.handleBufferingEvent()
      },
      onSeeking: function() {
        this.handleBufferingEvent()
      },
      onStalled: function() {
        this.handleBufferingEvent()
      },
      onTimeUpdate: function() {
        4 > this._timeupdateOccurTimes && this._timeupdateOccurTimes++;
        this.doOnTimeUpdateTimer || (this.doOnTimeUpdateTimer = setTimeout(this.doOnTimeUpdate, 1E3))
      },
      onWaiting: function() {
        this.loadStarted = !0;
        this.handleBufferingEvent()
      },
      onX5EnterFullscreen: function() {
        var a = this.props.onX5EnterFullscreen;
        a && a()
      },
      onX5ExitFullscreen: function() {
        var a = this.props.onX5ExitFullscreen;
        a && a()
      },
      startPlayheadMovingCheck: function() {
        this.playheadMovingTimer || (this.playheadMovingTimeOnCheck = null, this.doPlayheadMovingCheck())
      },
      stopPlayheadMovingCheck: function() {
        clearTimeout(this.playheadMovingTimer);
        this.playheadMovingTimer = null
      },
      doPlayheadMovingCheck: function() {
        var a = this.domNode.currentTime;
        this.playheadMoving = this.playheadMovingTimeOnCheck != a;
        this.playheadMovingTimeOnCheck = a;
        !this.playheadMoving && 3 > this._timeupdateOccurTimes &&
          (this.playheadMoving = !0);
        this.handleBufferingEvent();
        this.playheadMovingTimer = setTimeout(this.doPlayheadMovingCheck, 1E3)
      },
      handleBufferingEvent: function(a) {
        var b = this.props;
        a = b.onBuffering;
        var b = b.onBufferFull,
          f = this.domNode,
          d = !f.ended && !f.paused,
          f = this.loadStarted && d && (!this.playheadMoving || 3 > f.readyState);
        f != this.buffering && ((this.buffering = f) ? a && a() : b && b())
      },
      doOnProgress: function() {
        var a = this.props.onProgress;
        this.doOnProgressTimer = null;
        a && a(this.getBuffered())
      },
      doOnTimeUpdate: function() {
        var a =
          this.props.onTimeUpdate;
        this.doOnTimeUpdateTimer = null;
        this.handleBufferingEvent();
        a && a(this.getCurrentTime())
      },
      _ref: function(a) {
        var b = this.props.mediaRef;
        this.domNode = a;
        b && b(a)
      },
      _bindEventHandler: function(a, b) {
        var f = this,
          d = b ? "removeEventListener" : "addEventListener",
          g = this.domNode;
        Object.keys(a).forEach(function(b) {
          g[d](b, f[a[b]])
        })
      }
    });
    d.a = a
  },
  "N//m": function(b, d, a) {
    b = a("V6zD");
    var h = a.n(b);
    b = a("GiK3");
    var k = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var g = a("DzMU");
    a = b()({
      displayName: "CenterOverlay",
      getDefaultProps: function() {
        return {
          closeByCloseButton: !1
        }
      },
      render: function() {
        var a = this.props,
          b = a.className,
          f = a.children,
          d = a.refDom,
          a = a.onClose;
        return k.a.createElement("div", {
          className: "g-centeroverlay" + (b ? " " + b : ""),
          ref: d
        }, k.a.createElement(g.a, {
          tagName: "div",
          className: "g-clickable",
          onTap: this.onClickMask
        }), k.a.createElement("div", {
          className: "overlay"
        }, f, k.a.createElement(g.a, {
          tagName: "span",
          className: "closebtn",
          onTap: a
        }, k.a.createElement("i", {
          className: "iconfont icon-guanbi"
        }))))
      },
      componentDidMount: function() {
        h.a.publish("overlay-show")
      },
      componentWillUnmount: function() {
        h.a.publish("overlay-hide")
      },
      onClickMask: function(a) {
        var b = this.props,
          f = b.onClose;
        !b.closeByCloseButton && f && f(a)
      }
    });
    d.a = a
  },
  NVzI: function(b, d, a) {
    d.a = function(a, b) {
      return Object(h.b)("message-userinfo.php", {
        tuid: a,
        rid: b,
        uid: k.a.info && k.a.info.uid,
        _: Date.now()
      })
    };
    var h = a("fiJj"),
      k = a("O+kd")
  },
  OPq3: function(b, d, a) {
    d = b.exports = a("FZ+f")(void 0);
    d.push([b.i, '.login-form,.reg-form{padding:0}.login-form section:first-of-type,.reg-form section:first-of-type{width:36px}.login-form .iconfont,.reg-form .iconfont{font-size:30px;color:#646a74}.login-form .icon-avatar,.reg-form .icon-avatar{font-size:34px;position:relative;left:-2px}.login-form .onebtn,.reg-form .onebtn{padding-top:20px}.login-form .checkbox,.reg-form .checkbox{padding:20px 0;line-height:20px;font-size:14px;border:0}.login-form .checkbox a,.reg-form .checkbox a{padding:0 2px;color:#f03534}.login-form .checkbox i,.reg-form .checkbox i{width:20px;height:20px;display:inline-block;margin:0 6px 0 0;vertical-align:middle;background-image:url("//vr0.6rooms.com/v/t4/a501d8b9c7f489d19d51e7e898d0077c.png");background-size:20px 50px;background-position:0 0;background-repeat:no-repeat}.login-form .checkbox i.checked,.reg-form .checkbox i.checked{background-position:0 -30px}.switch-login-reg-tip{position:absolute;bottom:15px;right:20px;text-align:right;color:#999;font-size:16px}.switch-login-reg-tip .g-btn{display:inline-block;height:33px;border-color:#d8d8d8;border-radius:6px;font-size:16px;padding:0 0 0 16px;vertical-align:middle}.switch-login-reg-tip .g-btn span{display:inline-block;height:100%;line-height:31px;vertical-align:top}.switch-login-reg-tip .g-btn .iconfont{font-size:30px;line-height:33px;vertical-align:top;color:#acacac}.phoneverify-form{box-sizing:border-box;padding:0;color:#333}.phoneverify-form .row section.label{width:88px}.phoneverify-form .row section.btn{width:98px;padding:0 0 0 10px;text-align:center}.phoneverify-form .row section.btn .g-btn{width:100%;height:38px;padding:0;line-height:38px;font-size:14px}.phoneverify-form .tip{color:#999;padding:10px 0 0;font-size:12px}.phoneverify-form .notice{margin:0;padding:15px 0;border-bottom:1px solid #dadada;color:#333;font-size:16px}.phoneverify-form .g-btn-progress{border-color:#f03534}.setphoneform section.label{width:80px}.changealias-form{padding:10px}.changealias-form section.label{padding:0 20px 0 0}.changealias-form .msg{padding:10px 0 0 84px;font-size:14px;color:#f03534}.viewport-login,.viewport-reg,.viewport-setphone,.viewport-verifyphone{min-height:100%;background:#fff}.viewport-login .mainframe,.viewport-reg .mainframe,.viewport-setphone .mainframe,.viewport-verifyphone .mainframe{position:relative;padding:0 20px 80px}.viewport-account-property .property-list{list-style:none;margin:10px 0;padding:0 0 0 15px}.viewport-account-property .property-list li{height:80px;margin:0;padding:0;border-bottom:1px solid #bbb;display:-webkit-box;display:-webkit-flex;display:flex}.viewport-account-property .property-list li section{box-sizing:border-box;height:100%}.viewport-account-property .property-list li section:first-of-type{padding:20px 20px 0 10px}.viewport-account-property .property-list li section:first-of-type img{width:40px;height:40px}.viewport-account-property .property-list li section:last-of-type{padding:18px 0 0}.viewport-account-property .property-list li section:last-of-type h1{font-size:16px;font-weight:500;color:#000;margin:0;padding:0 0 6px}.viewport-account-property .property-list li section:last-of-type p{margin:0;padding:0;font-size:14px;color:#666}.viewport-account-property .property-list li:last-of-type{border:0}.viewport-account-property .empty{text-align:center;margin:0;padding:20px 10px;color:#666}.viewport-account-knapsack{min-height:100%;background:#f0f0f0}.viewport-account-knapsack .coupon-card-list{padding:16px 10px}.viewport-account-knapsack .coupon-card{margin:16px auto}.viewport-account-knapsack.empty{background-image:url("//vr0.6rooms.com/v/u2/5a677906297a1b5121dc01d3e113edd2.png");background-position:50%;background-size:90px 90px;background-repeat:no-repeat;background-color:#f5f5f5}.viewport-account-exchange-coin .accountinfo{padding:17px 0 17px 10px;margin:0 0 10px;background:#fff}.viewport-account-exchange-coin .accountinfo h1{font-size:16px;font-weight:500;margin:0;padding:0 0 16px}.viewport-account-exchange-coin .accountinfo .details{color:#666;display:-webkit-box;display:-webkit-flex;display:flex}.viewport-account-exchange-coin .accountinfo .details p{margin:0}.viewport-account-exchange-coin .accountinfo .details .avatar{width:65px;height:65px;box-sizing:border-box;padding:2px;border:1px solid #f03534;border-radius:50%;margin:0 10px 0 14px}.viewport-account-exchange-coin .accountinfo .details .avatar img{width:60px;height:60px;border-radius:50%}.viewport-account-exchange-coin .accountinfo .details .alias{color:#000;padding-right:6px;font-size:18px}.viewport-account-exchange-coin .accountinfo .details section:last-of-type p:first-of-type{padding:4px 0 8px}.viewport-account-exchange-coin .accountinfo .details section:last-of-type p:last-of-type span:first-of-type{margin-right:12px}.viewport-account-exchange-coin form{padding:15px}.viewport-account-exchange-coin form .row{border:0}.viewport-account-exchange-coin form .select{height:40px;padding:0;margin:0;border:1px solid #cecece;border-radius:3px;background:#fff;position:relative}.viewport-account-exchange-coin form .select .iconfont{height:100%;line-height:40px;padding:0 8px;border-left:1px solid #cecece;pointer-events:none;position:absolute;right:0;top:0;color:#cecece}.viewport-account-exchange-coin form .select select{width:100%;height:40px;border:0;padding:0 0 0 10px;-webkit-appearance:none;-ms-appearance:none;appearance:none;background:transparent}.viewport-account-exchange-coin form .tip{padding:6px 0 20px;font-size:14px;color:#666}.viewport-account-exchange-coin form .g-btn{width:100%;height:46px;font-size:18px}.viewport-account-exchange-coin form .g-btn.g-btn-primary{background:#f03534;color:#fff}',
      ""
    ])
  },
  PuYz: function(b, d, a) {
    d = a("OPq3");
    "string" === typeof d && (d = [
      [b.i, d, ""]
    ]);
    a("fjbf")(d, {});
    d.locals && (b.exports = d.locals)
  },
  R08c: function(b, d, a) {
    d = b.exports = a("FZ+f")(void 0);
    d.push([b.i, '/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}@font-face{font-family:iconfont;src:url("//vr0.6rooms.com/img/fonts/iconfont_v42.woff") format("woff"),url("//vr0.6rooms.com/img/fonts/iconfont_v42.ttf") format("truetype")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.icon-07:before{content:"\\E609"}.icon-10:before{content:"\\E60A"}.icon-sanjiao:before{content:"\\E60E"}.icon-arrowright:before{content:"\\E625"}.icon-avatar:before{content:"\\E62C"}.icon-quanping1:before{content:"\\E601"}.icon-search:before{content:"\\E631"}.icon-chongzhi1:before{content:"\\E603"}.icon-gouxuan:before{content:"\\E611"}.icon-jiaguanzhu:before{content:"\\E616"}.icon-logosvg:before{content:"\\E618"}.icon-siliaoxuanren:before{content:"\\E6EC"}.icon-biaoqing:before{content:"\\E6ED"}.icon-jianpan:before{content:"\\E6EE"}.icon-siliao:before{content:"\\E6EF"}.icon-exit-full-screen:before{content:"\\E657"}.icon-shiliu:before{content:"\\E6F1"}.icon-weibiaoti-:before{content:"\\E6F2"}.icon-gerenzhongxin-huantouxiang:before{content:"\\E6F5"}.icon-guanzhu:before{content:"\\E6F6"}.icon-wode:before{content:"\\E6F7"}.icon-remen:before{content:"\\E6F8"}.icon-bianji:before{content:"\\E6F9"}.icon-guanbi:before{content:"\\E6FA"}.icon-gerenzhongxin:before{content:"\\E6FB"}.icon-xiangxia:before{content:"\\E6FC"}body,html{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:-apple-system,Helvetica Neue,sans-serif;font-weight:300;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-tap-highlight-color:rgba(0,0,0,0);height:100%}h1,h2,h3,li,ol,p,section,ul{margin:0;padding:0}ol,ul{list-style:none}a{text-decoration:none}em{font-style:normal}button,input{outline:0}input::-webkit-input-placeholder{color:#666;font-size:14px}input:-moz-placeholder,input::-moz-placeholder{color:#666;font-size:14px}input:-ms-input-placeholder{color:#666;font-size:14px}::-webkit-scrollbar{display:none}.g-btn{display:inline-block;box-sizing:border-box;border:1px solid #000;color:#000;background:#fff;border-radius:3px;white-space:nowrap}.g-btn:active{color:#fff;background:#f03534}.g-btn-primary{border-color:#f03534;color:#f03534}.g-btn-primary:active{color:#fff;background:#f03534}.g-btn-transparent{border:0;background-color:hsla(0,0%,50%,.4);color:#fff;box-shadow:inset 0 0 1px rgba(0,0,0,.3);border-radius:2px}.g-btn-disabled{background:#f4f4f4;border:1px solid #999;color:#b4b4b4}.g-btn-progress{color:#f03534;border:1px solid #c8c8c8;border-radius:4px;background:#fff;position:relative;overflow:hidden}.g-btn-progress b{display:block;background:pink;width:0;height:100%;position:absolute;left:0;top:0;font-size:0;line-height:0;-webkit-transition:width,.2s;transition:width,.2s}.g-btn-progress span{position:relative;top:1px}.g-btn-progress.disabled{color:#ccc;background-color:#f3f3f3;border:1px solid #dbdbdb}.g-btngroup{display:-webkit-box;display:-webkit-flex;display:flex}.g-btngroup section{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0;margin:0}.g-btngroup button{display:block;width:100%;height:35px;border-style:solid;border-width:1px 1px 1px 0;border-color:#e5e5e5;background:#fff;color:#979797}.g-btngroup section:first-of-type button{border-width:1px;border-radius:5px 0 0 5px}.g-btngroup section:last-of-type button{border-radius:0 5px 5px 0}.g-btngroup button.on{background:#f03534;color:#fff}.g-scrolling{-webkit-overflow-scrolling:touch;overflow-scrolling:touch}.g-clickable{background-color:rgba(0,0,0,.4)}.g-flexgrid .flexgrid-row{display:-webkit-box;display:-webkit-flex;display:flex}.g-flexgrid .flexgrid-item{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.g-flexgrid .flexgrid-item:first-of-type{text-align:left}.g-flexgrid .flexgrid-item:last-of-type{text-align:right}.g-empty{padding:120px 0 0;background-image:url("//vr0.6rooms.com/v/u8/89c42e6818d47f9a2a3a0a271a2e8bba.png");background-size:125px 80px;background-position:center 40px;background-repeat:no-repeat;text-align:center;font-size:12px;color:#999}.g-header{width:100%;height:44px;box-sizing:border-box;position:fixed;top:0;left:0;right:0;z-index:3}.g-header header{display:-webkit-box;display:-webkit-flex;display:flex;height:100%;background:#fff;will-change:transform;border-bottom:1px solid #f1f1f1;box-sizing:border-box;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:transform;transition-property:transform}.g-header header section{height:100%}.g-header header section.left{-webkit-box-flex:1;-webkit-flex:1;flex:1}.g-header header section.right{text-align:right}.g-header header .logo{display:block;height:100%;background-image:url("//vr0.6rooms.com/v/a7/d79797e859b519c82c9348f0d6afb3aa.png");background-size:104px 24px;background-position:10px 10px;background-repeat:no-repeat}.g-header header .avatar,.g-header header .charge,.g-header header .search{width:50px;height:44px;padding:10px 0 0;display:inline-block;box-sizing:border-box;color:#b3b3b3;text-align:center;vertical-align:top}.g-header header .avatar .iconfont,.g-header header .charge .iconfont,.g-header header .search .iconfont{line-height:1;font-size:24px}.g-header header .avatar:active,.g-header header .search:active{color:#f03534}.g-header header .avatar{padding-top:8px;position:relative}.g-header header .avatar .iconfont{font-size:27px}.g-header header .avatar .tip{position:absolute;width:120px;padding:4px;top:42px;right:4px;background:#f66f68;color:#fff;border-radius:10px;font-size:12px}.g-header header .avatar .tip:before{content:"";display:block;width:4px;height:4px;position:absolute;right:15px;top:-3px;border-color:#f66f68 transparent transparent;border-style:solid;border-width:10px 10px 0 0;transform:rotate(45deg)}.g-header header .charge{background-image:url("//vr0.6rooms.com/v/k0/9f166777fe57f3dcc08f917a628307d4.png");background-size:34px 34px;background-repeat:no-repeat;background-position:center 1px}.g-header header .search.on{background:#f5f5f5;border-width:1px 1px 0;border-style:solid;border-color:#e7e7e7}.g-header header .avatar img{width:26px;height:26px;border-radius:50%}.g-header header .collaborate-logo{display:block;padding:0 0 0 10px;font-size:16px;font-weight:700;color:#000;line-height:44px}.g-header.hidden{pointer-events:none}.g-header.hidden header{-webkit-transform:translateY(-44px);transform:translateY(-44px)}.g-header.hidden header .avatar .tip{visibility:hidden}.g-footer{position:fixed;width:100%;height:50px;right:0;bottom:0;left:0;z-index:2}.g-footer ul{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;list-style:none;border-top:1px solid #e5e5e5;padding:0;margin:0;background:#fff;will-change:transform;box-sizing:border-box;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:transform;transition-property:transform}.g-footer ul li{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:6px 0 0;text-align:center;color:#333;font-size:12px}.g-footer ul li .iconfont{font-size:22px}.g-footer ul li.on{color:#f03534}.g-footer.hidden{pointer-events:none}.g-footer.hidden ul{-webkit-transform:translateY(50px);transform:translateY(50px)}.g-form{color:#333}.g-form input[type=number],.g-form input[type=password],.g-form input[type=tel],.g-form input[type=text],.g-form select{box-sizing:border-box;border:0;margin:0;background:transparent;outline-style:none;-webkit-appearance:none}.g-form .row{border-bottom:1px solid #dadada;padding:0;margin:0;overflow:hidden;zoom:1;display:-webkit-box;display:-webkit-flex;display:flex}.g-form .row section{height:55px;line-height:55px}.g-form .row section.main{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box}.g-form .row section.main input,.g-form .row section.main select{width:100%;height:55px;line-height:55px;padding:0;color:#636a70;vertical-align:top}.g-form .onebtn{text-align:center;padding:28px 0 0;box-sizing:border-box}.g-form .onebtn button{font-size:18px;width:100%;height:44px;margin:0;padding:0}.g-fulloverlay{position:fixed;left:0;right:0;top:0;bottom:0;background:#fff;z-index:3;color:#333}.g-fulloverlay .g-fulloverlay-close{position:absolute;right:0;top:0;color:#999;padding:15px}.g-fulloverlay .g-fulloverlay-close .iconfont{font-size:22px}.g-fulloverlay .g-fulloverlay-content{overflow:auto;width:100%;height:100%;-webkit-overflow-scrolling:touch}.g-draweroverlay{overflow:hidden;z-index:13}.g-draweroverlay,.g-draweroverlay .g-clickable{position:fixed;top:0;right:0;bottom:0;left:0}.g-draweroverlay .g-draweroverlay-wrap{width:100%;height:70%;box-sizing:border-box;position:fixed;bottom:0;z-index:12;background:#fff;overflow-x:hidden;overflow-y:auto}.g-carousel,.g-paginate{display:-webkit-box;display:-webkit-flex;display:flex}.g-paginate{background:#fff;color:#333}.g-paginate section{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:50px;position:relative;line-height:50px;text-align:center;border-top:1px solid #eee}.g-paginate section.disabled{color:#999}.g-paginate section:nth-child(2){border-width:1px 1px 0;border-color:#eee;border-style:solid}.g-paginate select{position:absolute;top:0;left:0;margin:0;padding:0;width:100%;height:100%;opacity:0;-webkit-appearance:none;appearance:none}.g-paginate option{text-align:center}.g-cropper{position:fixed;z-index:9;background:#666}.g-cropper,.g-cropper .canvas{width:100%;height:100%;top:0;right:0;bottom:0;left:0}.g-cropper .canvas{position:absolute;font-size:0;line-height:0;z-index:1}.g-cropper .canvas .bottom-region,.g-cropper .canvas .middle-left,.g-cropper .canvas .middle-right,.g-cropper .canvas .top-region{background:rgba(0,0,0,.5)}.g-cropper .canvas .middle-region{display:-webkit-box;display:-webkit-flex;display:flex}.g-cropper .canvas .middle-region .middle-left,.g-cropper .canvas .middle-region .middle-right{-webkit-box-flex:1;-webkit-flex:1;flex:1}.g-cropper .canvas .middle-region .select-viewport{background:none;position:relative}.g-cropper .canvas .middle-region .select-viewport .lb,.g-cropper .canvas .middle-region .select-viewport .lt,.g-cropper .canvas .middle-region .select-viewport .rb,.g-cropper .canvas .middle-region .select-viewport .rt{display:block;width:26px;height:26px;position:absolute;border-style:solid;border-color:#fff}.g-cropper .canvas .middle-region .select-viewport .lt{left:0;top:0;border-width:2px 0 0 2px}.g-cropper .canvas .middle-region .select-viewport .rt{right:0;top:0;border-width:2px 2px 0 0}.g-cropper .canvas .middle-region .select-viewport .lb{left:0;bottom:0;border-width:0 0 2px 2px}.g-cropper .canvas .middle-region .select-viewport .rb{right:0;bottom:0;border-width:0 2px 2px 0}.g-cropper .image{position:absolute;left:0;top:0;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}.g-cropper .btns{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;bottom:0;left:0;width:100%;z-index:2;padding:0 20px 15px;box-sizing:border-box}.g-cropper .btns section{-webkit-box-flex:1;-webkit-flex:1;flex:1}.g-cropper .btns section:last-of-type{text-align:right}.g-cropper .btns .g-btn{width:60px;height:60px;margin:0;padding:10px;background:none;border:0;font-size:38px;color:#fff}.viewport{box-sizing:border-box;padding:44px 0 50px}.viewport-inapp{padding:0}.viewport-inapp .g-footer,.viewport-inapp .g-header{display:none}.mainframe{max-width:480px;margin-left:auto;margin-right:auto;box-sizing:border-box}.search-overlay{position:fixed;top:44px;right:0;bottom:0;left:0;z-index:3}.search-overlay .form{width:100%;height:62px;padding:11px 10px;position:absolute;left:0;right:0;top:0;box-sizing:border-box;background:#f5f5f5;z-index:2}.search-overlay .form form{height:40px;position:relative;overflow:hidden;padding:0 67px 0 0;margin:0;box-sizing:border-box;border-radius:3px;background:#fff;z-index:1}.search-overlay .form form input{width:100%;height:100%;line-height:38px;box-sizing:border-box;padding:0 10px;background:#fff;border:0}.search-overlay .form form .g-btn{position:absolute;top:0;right:0;width:67px;height:100%;border-radius:0 3px 3px 0;border:0;background:#f03534;color:#fff}.search-overlay .g-clickable{position:absolute;top:0;right:0;bottom:0;left:0}.standalone-backbtn{position:fixed;bottom:20px;left:20px;z-index:5}.standalone-backbtn .iconfont{display:block;width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,.5);color:#fff;text-align:center;line-height:40px;font-size:22px}.player{margin:0;padding:0;position:relative;display:inline-block;background:#000;text-align:left}.player video{background-position:50%;background-size:cover}.player .playbtn,.player .spinner{position:absolute;left:50%;top:50%;width:66px;height:66px;margin-top:-33px;margin-left:-33px}.player .playbtn{background-image:url("//vr0.6rooms.com/v/t0/2ea539f855209b4ef04d14636e766a80.png");background-size:200px 100px;background-position:0 0}.player .playbtn.pause{background-position:-100px 0}.player .dashboard{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:28px;background-image:-webkit-linear-gradient(180deg,transparent,rgba(0,0,0,.8));background-image:-moz-linear-gradient(to bottom,transparent,rgba(0,0,0,.8));background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.8));background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0,transparent),color-stop(100%,rgba(0,0,0,.9)));position:absolute;left:0;bottom:0}.player .dashboard .time{width:80px;padding:2px 10px 0;font-size:12px;color:#fff}.player .dashboard .progress-bar{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:20px;padding:8px 0 0;position:relative}.player .dashboard .progress-bar .trigger{display:block;width:60px;height:60px;position:absolute;top:-20px;left:0;margin-left:-30px}.player .dashboard .progress-bar .trigger:before{content:" ";display:block;width:20px;height:20px;border-radius:10px;background-image:-webkit-linear-gradient(180deg,#fefefe,#dfdfdf);background-image:-moz-linear-gradient(to bottom,#fefefe,#dfdfdf);background-image:linear-gradient(180deg,#fefefe,#dfdfdf);background-color:#fefefe;position:absolute;top:20px;left:20px}.player .dashboard .progress-bar .played{background:#f03534}.player .dashboard .progress-bar .loaded,.player .dashboard .progress-bar .played{display:block;height:4px;width:0;position:absolute;left:0;top:8px;border-radius:2px}.player .dashboard .progress-bar .loaded{background:#989a9a}.player .dashboard .progress-bar:before{content:" ";display:block;height:4px;background:#5f6263;border-radius:2px}.player .dashboard .fullscreen{width:30px;padding:0 10px;text-align:center}.player .dashboard .fullscreen i{font-size:20px;color:#fff}.player .minprogress{width:100%;height:2px;background:#5f6263;position:absolute;bottom:0;left:0}.player .minprogress .loaded,.player .minprogress .played{position:absolute;height:2px;top:0}.player .minprogress .loaded{background:#989a9a}.player .minprogress .played{background:#f03534}.player .audio-substitute .disc{width:141px;height:141px;box-sizing:border-box;padding:45.5px 0 0;background-image:url("//vr0.6rooms.com/v/b8/8a8d5ffb96773878108cad2915fa3b2e.png");background-position:0 0;background-size:141px 141px;text-align:center;position:absolute;left:50%;top:50%;margin-left:-70.5px;margin-top:-70.5px}.player .audio-substitute .disc img{width:50px;height:50px;border-radius:50px}.player .audio-substitute .animation{-webkit-animation:spin 8s infinite linear;-ms-animation:spin 8s infinite linear;animation:spin 8s infinite linear}.player .audio-substitute .playing{-ms-animation-play-state:running;-moz-animation-play-state:running;-webkit-animation-play-state:running;animation-play-state:running}.player .audio-substitute .paused{-ms-animation-play-state:paused;-moz-animation-play-state:paused;-webkit-animation-play-state:paused;animation-play-state:paused}.spinner{display:inline-block;height:125px;width:125px;border-width:6px;border-style:solid;border-color:#f03534 #f03534 transparent transparent;border-radius:100%;-webkit-animation:spin .6s infinite linear;-ms-animation:spin .6s infinite linear;animation:spin .6s infinite linear}.spinner.s{width:30px;height:30px;border-width:4px}.spinner.xs{width:16px;height:16px;border-width:2px}@keyframes "spin"{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes "spin"{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-ms-keyframes "spin"{0%{-ms-transform:rotate(0deg);transform:rotate(0deg)}to{-ms-transform:rotate(359deg);transform:rotate(359deg)}}.livelist{background:#f1f1f1;padding:0 0 10px}.livelist .g-flexgrid{padding:0 3px}.livelist .g-flexgrid .flexgrid-item{box-sizing:border-box;padding:6px 3px 0}.livelist-item{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}.livelist-item,.livelist-item .pic{width:100%;box-sizing:border-box;position:relative}.livelist-item .pic{-webkit-box-flex:1;-webkit-flex:1;flex:1;background-repeat:no-repeat;background-size:cover;background-position:50%;border-radius:6px 6px 0 0}.livelist-item .pic .tag{width:100%;box-sizing:border-box;padding:0 10px 5px;position:absolute;bottom:0;text-align:left;vertical-align:top}.livelist-item .pic .tag .tag-icon{display:inline-block;width:50px;height:18px;background-size:contain;background-repeat:no-repeat;background-position:0 0}.livelist-item .pic .rec-tag{box-sizing:border-box;width:64.5px;height:19px;line-height:19px;padding:0 0 0 12px;position:absolute;top:6px;right:6px;background-image:url("//vr0.6rooms.com/v/k7/b790702891657e9174487f139e6427a1.png");background-repeat:no-repeat;background-size:100% 100%;background-position:50%;color:#ffe84c;text-align:center;font-size:11px}.livelist-item .text{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:36px;margin:0;padding:0;border-radius:0 0 6px 6px;background:#fff;box-sizing:border-box;line-height:36px}.livelist-item .text p{margin:0;padding:0 5px;font-size:14px}.livelist-item .text .alias{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;color:#000}.livelist-item .text .viewer{font-size:12px;text-align:right;color:#999}.livelist-item .text .viewer .iconfont{color:#bebebe;font-size:14px;font-weight:800}.performerlist .flexgrid-item{box-sizing:border-box;padding:0 6px 12px}.performerlist .flexgrid-item:first-of-type{padding-left:0}.performerlist .flexgrid-item:last-of-type{padding-right:0}.performerlist .performer{display:inline-block;width:100%;color:#333;position:relative;background:#fff}.performerlist .performer .pic{width:100%;height:103px;background-size:cover;background-position:50%;background-repeat:no-repeat}.performerlist .performer .info{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;height:25px;padding:0 5px;line-height:25px;text-align:left;font-size:13px}.performerlist .performer .info section{height:100%}.performerlist .performer .info section.alias{min-width:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.performerlist .performer .info section.popular{text-align:right;color:#999;font-size:11px}.performerlist .performer .tag{display:inline-block;width:33px;height:18px;text-align:center;box-sizing:border-box;border:1px solid #fff;border-radius:4px;line-height:16px;color:#fff;background:rgba(0,0,0,.2);position:absolute;right:5px;top:5px;font-size:11px;font-style:normal}.page-loading{position:fixed;top:0;right:0;bottom:0;left:0}.page-loading .spinner{position:absolute;left:50%;top:50%;margin:-15px 0 0 -15px}.loadmorespinner{padding:5px;text-align:center}.appcontainer{height:100%}.appcontainer .appcontainer-progress{width:100%;height:0;position:fixed;left:0;top:0;right:0;font-size:0;line-height:0;background:transparent;z-index:5}.appcontainer .appcontainer-progress b{display:block;width:0;height:2px;background:#f03534;-webkit-transition-property:width;transition-property:width;will-change:width}.loginbyothers{margin:0;padding:2em 0 0}.loginbyothers header{color:#bebebe;font-size:14px;border-bottom:1px solid #eee;padding:10px 0}.loginbyothers ul{display:-webkit-box;display:-webkit-flex;display:flex;margin:0;padding:2em 0 0}.loginbyothers li{-webkit-box-flex:1;-webkit-flex:1;flex:1;list-style:none;text-align:center}.loginbyothers a{display:inline-block;text-align:center;color:#666}.loginbyothers a:before{content:" ";width:56.5px;height:56.5px;background-image:url("//vr0.6rooms.com/v/l5/459512d533b687f940fce5be7ecfe83f.png");background-size:300px 50px;background-repeat:no-repeat;border-radius:28.25px;position:0 0;display:block;margin:0 auto 5px}.loginbyothers a.weibo:before{background-position:-186px 13px;background-color:#d93529}.loginbyothers a.weibo:active:before{background-color:#bc2318}.loginbyothers a.qq:before{background-position:16px 12px;background-color:#2991e0}.loginbyothers a.qq:active:before{background-color:#1a71b6}.loginbyothers a.wechat:before{background-position:-87px 15px;background-color:#5fc74d}.loginbyothers a.wechat:active:before{background-color:#3aa05d}.g-centeroverlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:13;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center}.g-centeroverlay .g-clickable{position:fixed;top:0;right:0;bottom:0;left:0;background:transparent}.g-centeroverlay .overlay{width:80%;max-width:360px;position:relative;z-index:12;background:#fff;border-radius:6px}.g-centeroverlay .closebtn{width:40px;height:40px;position:absolute;right:0;top:0;text-align:center;line-height:40px;font-weight:700;font-size:16px;color:#666}.g-confirm .overlay{width:80%;max-width:440px;border-radius:3px;background:#fff;box-shadow:0 0 3px rgba(0,0,0,.6)}.g-confirm .overlay .title{color:#f03534;border-bottom:2px solid #f03534;font-size:18px;padding:10px 16px;margin:0}.g-confirm .overlay .content{padding:16px;color:#333}.g-confirm .overlay .content a{color:#f03534}.g-confirm .overlay .btn{display:-webkit-box;display:-webkit-flex;display:flex}.g-confirm .overlay .btn div{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:44px;text-align:center;line-height:44px;border-top:1px solid #ccc;border-right:1px solid #ccc}.g-confirm .overlay .btn div:last-of-type{border-right:0}.g-confirm .overlay .btn div:focus,.g-confirm .overlay .btn div:hover{background:#efefef}.g-confirm .overlay .btn div.okay{color:#f03534}.g-confirm .g-clickable{background:rgba(0,0,0,.5)!important}.g-confirm .closebtn{display:none}.g-popover{position:fixed;top:0;right:0;bottom:0;left:0;z-index:19}.g-popover .clickable{position:absolute;width:100%;height:100%;background:transparent}.g-popover .g-popover-pop{border-radius:3px;background:#fff;position:absolute;z-index:1}.g-popover .g-popover-pop .g-popover-wrap{width:100%;height:100%}.g-popover .g-popover-pop .g-popover-arrow{display:block;width:11px;height:11px;position:absolute;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.loginconfirm{z-index:14}.loginconfirm .g-draweroverlay-wrap{height:300px;padding:0 10px}.loginconfirm .notice{color:#333;text-align:center;font-size:16px;margin:0;padding:28px 0 20px}.loginconfirm .btns{display:-webkit-box;display:-webkit-flex;display:flex}.loginconfirm .btns section{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0 5px 0 0;text-align:left}.loginconfirm .btns section:last-of-type{text-align:right;padding:0 0 0 5px}.loginconfirm .g-btn{width:100%;height:40px;color:#333;border-color:#333}.loginconfirm .g-btn-primary{border-color:#f03534;color:#fff;background-color:#f03534}.loginconfirm .loginbyothers{padding-top:15px}.loginconfirm .loginbyothers ul{padding-top:20px}.g-togglebutton{box-sizing:border-box;height:26px;border:1px solid #fff;padding:1px;margin:0;border-radius:13px;background-color:#c1c1c1}.g-togglebutton .label{display:inline-block;height:100%;padding:0 2px;font-size:12px;line-height:22px;vertical-align:top;color:#fff;float:right}.g-togglebutton .indicator{display:inline-block;width:22px;height:22px;background:#fff;border-radius:50%;float:left}.g-togglebutton .transition{-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease}.g-togglebutton.on{border-color:#f03534;background:#f03534}.g-togglebutton.on .label{float:left}.g-togglebutton.on .indicator{float:right}.app-capsule{width:43px;height:58px;box-sizing:border-box;padding:4px 0 0;border-radius:13px 13px 4px 4px;background:hsla(0,0%,100%,.8);text-align:center}.app-capsule .logo{display:block;width:35px;height:35px;margin:0 auto;position:relative;background-image:url("//vr0.6rooms.com/v/o3/ba21b4208d3db35a9923d1063c767d43.png");background-size:100% 100%}.app-capsule .logo,.app-capsule .logo:after{background-position:50%;background-repeat:no-repeat}.app-capsule .logo:after{content:" ";display:inline-block;width:12px;height:12px;background-image:url("//vr0.6rooms.com/v/e6/d5662f36d0befcfe436c8500dc4aae33.png");background-size:12px 12px;position:absolute;right:0;bottom:0}.app-capsule h1{padding:3px 0 0;white-space:nowrap;background:transparent;font-size:10px;font-weight:300;color:#000}.app-capsule .btns{display:none}.app-capsule.mini{width:38px;background:transparent}.app-capsule.mini .logo{width:30px;height:30px}.app-capsule.mini h1{color:#fff}.app-capsule.expanded{width:300px;height:180px;padding:10px;background:#fff;position:absolute;left:50%;right:auto;margin-left:-150px;-webkit-transform-origin:0 0;transform-origin:0 0}.app-capsule.expanded h1{width:auto;padding:20px 0;margin:0;font-size:16px;font-weight:400;color:#000}.app-capsule.expanded .logo{width:45px;height:45px}.app-capsule.expanded .btns{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;border-top:1px solid #eee;position:absolute;bottom:0;left:0}.app-capsule.expanded .btns button{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:50px;margin:0;border-width:0 1px 0 0;border-style:solid;border-color:#eee;border-radius:0;background:transparent;text-align:center}.app-capsule.expanded .btns button.primary{font-weight:700;color:#f03534;border-width:0}.coupon-card{display:-webkit-box;display:-webkit-flex;display:flex;height:73px}.coupon-card .main{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;padding:0 6px 0 16px;box-sizing:border-box;background-image:url("//vr0.6rooms.com/v/u0/b5585a62ceba5d366e6a7deb7e34c342.png");background-size:100% 100%;background-repeat:no-repeat;background-color:transparent}.coupon-card .main .title{margin:0;padding:20px 0 0;color:#333;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.coupon-card .main .expired{padding:4px 0 0;margin:0;color:#666;font-size:13px}.coupon-card .stub{width:110px;height:100%;background-image:url("//vr0.6rooms.com/v/j5/72b4522df52374b48fcbcff166947f94.png");background-size:100% 100%;background-repeat:no-repeat;background-color:transparent;text-align:center}.coupon-card .stub .g-btn{width:90%;height:36px;padding:3px 8px;margin:20px 0 0;background:transparent;border:1px solid #fff;color:#fff;border-radius:18px;font-size:14px}.coupon-card .stub .g-btn:active,.coupon-card .stub .type{background:#fff;color:#ff7271}.coupon-card .stub .type{display:inline-block;width:60%;margin:16px 0 0;height:40px;line-height:40px;border-radius:4px}.coupon-card.t1 .stub{background-image:url("//vr0.6rooms.com/v/y4/634fb7c84b20ed2f826c55d4c480dd5f.png")}.coupon-card.t1 .stub .g-btn:active{color:#f1a75e}.geetest-overlay,.smcaptcha-overlay{background:#fff;position:fixed;top:0;right:0;bottom:0;left:0;z-index:3}.geetest-overlay .wrap,.smcaptcha-overlay .wrap{width:280px;height:400px;position:absolute;left:50%;top:100px;margin:0 0 0 -140px;text-align:center}',
      ""
    ])
  },
  T5Bi: function(b, d, a) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    b = function(a, b) {
      var d = this;
      this.dispatch = a.dispatch;
      this.getRootState = a.getState;
      this.ns = b || void 0;
      var e = this.actionCreator;
      this.ns && (e.init = e.init || this._initActionCreator, e.update = e.update || this._updateActionCreator);
      Object.keys(e).forEach(function(a) {
        d[a] = d._bindActionCreator(a)
      })
    };
    b.prototype = {
      actionCreator: {},
      getState: function() {
        var a = this.getRootState(),
          b = this.ns;
        b && b.split(".").forEach(function(b) {
          a = a[b]
        });
        return a
      },
      _bindActionCreator: function(a) {
        return function() {
          this.dispatch(this.actionCreator[a].apply(this, [].slice.call(arguments, 0)))
        }.bind(this)
      },
      _initActionCreator: function() {
        return {
          type: (this.ns ? this.ns + "." : "") + "INIT"
        }
      },
      _updateActionCreator: function(a) {
        return {
          type: (this.ns ? this.ns + "." : "") + "UPDATE",
          payload: a
        }
      },
      _bindSelf: function() {
        for (var a = [].slice.call(arguments, 0), b = 0; b < a.length; b++) "function" == typeof this[a[b]] && (this[a[b]] = this[a[b]].bind(this))
      }
    };
    d.default = b
  },
  Ub9P: function(b, d, a) {
    d.a = function(a) {
      var b =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        d = b.className,
        r = void 0 === d ? "" : d,
        b = b.mapStateToProps,
        q = void 0 === b ? u : b;
      return l()({
        displayName: "Wrap" + a.displayName || "",
        render: function() {
          var b = this.getState();
          Object(h.mix)(b, {
            className: "viewport " + r + (k.b.inApp() ? " viewport-inapp " : " ") + (g.a.yes() ? " viewport-c" + g.a.info.cid : " ")
          });
          return f.a.createElement(a, b)
        },
        componentDidMount: function() {
          this._unsubcribe = m.a.subscribe(this.stateChange);
          this.setState(this.getState(), this.prepareReportBehavior)
        },
        shouldComponentUpdate: function(a, b) {
          return p.a.shouldComponentUpdate.call(this, a, b)
        },
        componentDidUpdate: function(a, b) {
          this._analyticWaitDataReady && this.prepareReportBehavior() && (this._analyticWaitDataReady = !1)
        },
        componentWillUnmount: function() {
          this._unsubcribe && this._unsubcribe()
        },
        stateChange: function() {
          this.setState(this.getState())
        },
        getState: function() {
          return q(m.a.getState())
        },
        prepareReportBehavior: function() {
          var a = this.state.page,
            b = c.a.Map.isMap(a) && a.get("analytic"),
            a = !1;
          if (c.a.Map.isMap(b)) {
            var f =
              b.get("pageName"),
              d = b.get("pageID"),
              b = b.get("recID");
            null !== f && null !== d && null !== b ? (Object(e.c)(f, d, b), a = !0) : this._analyticWaitDataReady = !0
          } else Object(e.c)(), a = !0;
          return a
        }
      })
    };
    var h = a("agns");
    a.n(h);
    var k = a("xXFV"),
      g = a("cLh8"),
      e = a("Fcwr");
    b = a("BYKG");
    var c = a.n(b);
    b = a("GiK3");
    var f = a.n(b);
    b = a("DT0+");
    var l = a.n(b);
    b = a("tZ8z");
    var p = a.n(b),
      m = a("ZiWJ");
    a("6uIR");
    a("nVRx");
    a("dh4o");
    var u = function(a) {
      return {
        user: a.user,
        notice: a.notice,
        baseFrame: a.baseFrame
      }
    }
  },
  WQst: function(b, d, a) {
    b = a("vzCy");
    b = a.n(b);
    var h = a("agns");
    a.n(h);
    var k = a("V6zD"),
      g = a.n(k),
      e = a("O+kd"),
      c = function() {
        return function(a, b) {
          if (Array.isArray(a)) return a;
          if (Symbol.iterator in Object(a)) {
            var c = [],
              e = !0,
              d = !1,
              g = void 0;
            try {
              for (var h = a[Symbol.iterator](), k; !(e = (k = h.next()).done) && (c.push(k.value), !b || c.length !== b); e = !0);
            } catch (r) {
              d = !0, g = r
            } finally {
              try {
                if (!e && h["return"]) h["return"]()
              } finally {
                if (d) throw g;
              }
            }
            return c
          }
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      }();
    a = function l() {
      l.superclass.constructor.call(this);
      this._core = null;
      this._queue = [];
      this._url = "";
      this._ready = !1;
      this._messageHandler = this._messageHandler.bind(this);
      this._userStateUpdateHandler = this._userStateUpdateHandler.bind(this);
      this.onMessage = this.onMessage.bind(this)
    };
    Object(h.extend)(a, b.a, {
      start: function(a) {
        !this._core && "Worker" in self && "WebSocket" in self && "Promise" in self && !Promise.polyfill ? (this._url = a, this._core = new Worker(a), this._core.addEventListener("message", this._messageHandler, !1), this.postMessage("init", self.__pda), this.postMessage("user-state-update", {
          uid: e.a.info ? e.a.info.uid : "",
          ticket: e.a.ticket || "",
          userInfo: e.a.info || null
        }), g.a.subscribe("user-state-update", this._userStateUpdateHandler)) : this._core || this.emit("nonsupport")
      },
      postMessage: function(a, b) {
        this._core && (this._ready || "init" == a) ? this._core.postMessage(JSON.stringify({
          cmd: a,
          content: b
        })) : this._queue.push([a, b])
      },
      close: function() {
        this.postMessage("close");
        this._ready = !1;
        this._queue = [];
        this._core = null;
        g.a.unsubscribe("user-state-update", this._userStateUpdateHandler)
      },
      closeSocket: function() {
        this.postMessage("closeSocket")
      },
      onMessage: function(a, b) {},
      _messageHandler: function(a) {
        var b = JSON.parse(a.data);
        a = b.cmd;
        b = b.content;
        switch (a) {
          case "user-state-receive-new-ticket":
            g.a.publish("user-state-receive-new-ticket", b);
            break;
          case "user-state-broken":
            g.a.publish("user-state-broken", b);
            break;
          case "ready":
            this._ready = !0;
            this._dumpQueue();
            break;
          case "log":
            console.log(b)
        }
        this.onMessage(a, b)
      },
      _dumpQueue: function() {
        for (var a; a = this._queue.shift();) a = c(a, 2), this.postMessage(a[0], a[1])
      },
      _userStateUpdateHandler: function(a, b, c) {
        this.postMessage("user-state-update", {
          uid: a,
          ticket: b,
          userInfo: c
        })
      }
    });
    d.a = a
  },
  XTFZ: function(b, d, a) {
    d.a = function(a) {
      return Object(h.b)("coop-mobile-getUidByRid.php", {
        rid: a
      })
    };
    var h = a("fiJj")
  },
  YO5M: function(b, d, a) {
    b.exports = a("5Op0")(40)
  },
  ZTsT: function(b, d, a) {
    var h = a("KV26"),
      k = a("O+kd"),
      g = a("Fcwr");
    b = a("GiK3");
    var e = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var c = a("tZ8z"),
      c = a.n(c),
      f = a("DzMU"),
      l = b()({
        displayName: "NavItem",
        mixins: [c.a],
        render: function() {
          var a = h.a.getPath().split("?")[0],
            b = this.props.href,
            c = "";
          if (a == b || "/" == b && /\/live\/\w+\/?/.test(a)) c =
            "on";
          return e.a.createElement("li", {
            "data-href": this.props.href,
            "data-needlogin": this.props.needLogin,
            className: c
          }, e.a.createElement("section", null, e.a.createElement("i", {
            className: "iconfont icon-" + this.props.icon
          })), e.a.createElement("section", null, this.props.text))
        }
      });
    a = b()({
      displayName: "CommonFooter",
      render: function() {
        var a = this.props.user.getIn(["info", "rid"], "0") || "0";
        return e.a.createElement(f.a, {
          tagName: "div",
          className: "g-footer" + (this.props.hidden ? " hidden" : ""),
          onTap: this.onTap,
          tapRef: this.refSelf,
          "data-tracing": "common_footer"
        }, e.a.createElement("ul", null, e.a.createElement(l, {
          text: "\u5173\u6ce8",
          icon: "guanzhu",
          href: "/my/following",
          needLogin: !0
        }), e.a.createElement(l, {
          text: "\u70ed\u95e8",
          icon: "remen",
          href: "/"
        }), e.a.createElement(l, {
          text: "\u6211\u7684",
          icon: "wode",
          href: "/" + a + "/synopsis",
          needLogin: !0
        })))
      },
      onTap: function(a) {
        for (var b = a.target; b && this._node && !b.getAttribute("data-href");) b = b.parentNode;
        if ("true" == b.getAttribute("data-needlogin") && !k.a.isLogin()) this.props.onNeedLogin && this.props.onNeedLogin();
        else if (b = b.getAttribute("data-href")) Object(g.d)(a.currentTarget, b), h.a.push(b)
      },
      refSelf: function(a) {
        this._node = a
      }
    });
    d.a = a
  },
  ZiDx: function(b, d, a) {
    var h = a("KV26"),
      k = a("O+kd"),
      g = a("cLh8"),
      e = a("Fcwr");
    b = a("GiK3");
    var c = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var f = a("tZ8z"),
      f = a.n(f),
      l = a("DzMU"),
      p = a("cRqs"),
      m = a("b7HJ");
    a = b()({
      displayName: "LoginConfirm",
      mixins: [f.a],
      render: function() {
        var a;
        g.a.conf("account") || (a = c.a.createElement(m.a, {
          title: "\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u767b\u5f55",
          nextUrl: h.a.getPath()
        }));
        return c.a.createElement(p.a, {
          className: "loginconfirm",
          onClose: this.props.onCancel
        }, c.a.createElement("div", {
          className: "notice"
        }, this.props.text || "\u6b64\u529f\u80fd\u9700\u8981\u60a8\u767b\u5f55\u540e\u518d\u4f7f\u7528\u3002"), c.a.createElement("div", {
          className: "btns"
        }, c.a.createElement("section", null, c.a.createElement(l.a, {
          tagName: "button",
          className: "g-btn g-btn-primary",
          onTap: this.toReg
        }, "\u6ce8\u518c")), c.a.createElement("section", null, c.a.createElement(l.a, {
          tagName: "button",
          className: "g-btn",
          onTap: this.toLogin
        }, "\u767b\u5f55"))), a)
      },
      toReg: function(a) {
        Object(e.d)("login_confirm", "/reg");
        k.a.toReg()
      },
      toLogin: function(a) {
        Object(e.d)("login_confirm", "/login");
        k.a.toLogin()
      }
    });
    d.a = a
  },
  ZiWJ: function(b, d, a) {
    b = a("2KeS");
    var h = a("YO5M");
    a = a.n(h);
    a = Object(b.compose)(a()())(b.createStore)();
    d.a = a
  },
  b7HJ: function(b, d, a) {
    b = a("/ule");
    var h = a.n(b);
    b = a("TkXE");
    var k = a.n(b),
      g = a("O+kd"),
      e = a("VSEd"),
      c = a("Fcwr");
    b = a("GiK3");
    var f = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var l = a("tZ8z");
    a = a.n(l);
    var p = function() {
        return function(a,
          b) {
          if (Array.isArray(a)) return a;
          if (Symbol.iterator in Object(a)) {
            var c = [],
              e = !0,
              f = !1,
              d = void 0;
            try {
              for (var g = a[Symbol.iterator](), h; !(e = (h = g.next()).done) && (c.push(h.value), !b || c.length !== b); e = !0);
            } catch (l) {
              f = !0, d = l
            } finally {
              try {
                if (!e && g["return"]) g["return"]()
              } finally {
                if (f) throw d;
              }
            }
            return c
          }
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      }(),
      m = [5151, 5759, 5187, 5843];
    a = b()({
      displayName: "LoginByOthers",
      mixins: [a.a],
      render: function() {
        var a = this.props,
          b = a.nextUrl,
          a = a.title,
          d = k.a.param(location.search),
          l = b || d.next || "/",
          r = Object(c.a)({}),
          q = {
            qq: {
              text: "QQ\u767b\u5f55"
            },
            wechat: {
              text: "\u5fae\u4fe1\u767b\u5f55"
            },
            weibo: {
              text: "\u5fae\u535a\u767b\u5f55"
            }
          },
          b = e.a.get();
        if (0 > l.indexOf("src=ummeda") && 0 < b) {
          var d = l.split("?"),
            w = p(d, 2),
            d = w[0],
            w = k.a.param(w[1] || "");
          w.src = "ummeda" + b;
          l = k.a.make(d, w)
        }
        Object.keys(q).forEach(function(a) {
          q[a].code = a;
          q[a].url = k.a.make(g.a.getThirdpartyLoginUrl(a, l), r)
        });
        h.a.wechat || delete q.wechat; - 1 < m.indexOf(b) && delete q.qq;
        if (5833 == b) return null;
        b = Object.keys(q).map(function(a) {
          a =
            q[a];
          return f.a.createElement("li", {
            key: a.code
          }, f.a.createElement("a", {
            className: a.code,
            href: a.url
          }, a.text))
        });
        return f.a.createElement("div", {
          className: "loginbyothers"
        }, f.a.createElement("header", null, a), f.a.createElement("ul", null, b))
      }
    });
    d.a = a
  },
  cRqs: function(b, d, a) {
    b = a("V6zD");
    var h = a.n(b);
    b = a("GiK3");
    var k = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var g = a("DzMU");
    a = b()({
      displayName: "DrawerOverlay",
      getDefaultProps: function() {
        return {
          height: "auto"
        }
      },
      render: function() {
        var a = this.props,
          b = a.height,
          d = a.children,
          b =
          "auto" != b ? {
            height: b
          } : void 0;
        return k.a.createElement("div", {
          className: "g-draweroverlay " + (a.className || ""),
          ref: a.refDom
        }, k.a.createElement(g.a, {
          tagName: "div",
          className: "g-clickable",
          onTap: a.onClose
        }), k.a.createElement("div", {
          className: "g-draweroverlay-wrap",
          style: b
        }, d))
      },
      componentDidMount: function() {
        h.a.publish("overlay-show")
      },
      componentWillUnmount: function() {
        h.a.publish("overlay-hide")
      }
    });
    d.a = a
  },
  "d+A+": function(b, d, a) {
    d = a("R08c");
    "string" === typeof d && (d = [
      [b.i, d, ""]
    ]);
    a("fjbf")(d, {});
    d.locals && (b.exports =
      d.locals)
  },
  dh4o: function(b, d, a) {
    b = a("BYKG");
    var h = a.n(b);
    b = a("agns");
    a.n(b);
    var k = a("T5Bi"),
      k = a.n(k),
      g = a("ZiWJ"),
      e = a("nVRx");
    a = h.a.fromJS({
      collapsed: !1,
      showingSearchOverlay: !1
    });
    g.a.registerByMap("baseFrame", a, {});
    a = function f() {
      f.superclass.constructor.call(this, g.a, "baseFrame");
      this._bindSelf("showSearchOverlay", "hideSearchOverlay", "toggleSearchOverlay")
    };
    Object(b.extend)(a, k.a, {
      setup: function() {},
      teardown: function() {
        e.a.init();
        this.hideSearchOverlay()
      },
      collapse: function() {
        this.update({
          collapsed: !0
        })
      },
      expand: function() {
        this.update({
          collapsed: !1
        })
      },
      showSearchOverlay: function() {
        this.update({
          showingSearchOverlay: !0
        })
      },
      hideSearchOverlay: function() {
        this.update({
          showingSearchOverlay: !1
        })
      },
      toggleSearchOverlay: function() {
        this.getState().get("showingSearchOverlay") ? this.hideSearchOverlay() : this.showSearchOverlay()
      }
    });
    d.a = new a
  },
  eMPr: function(b, d, a) {
    var h = a("agns");
    a.n(h);
    var k = a("KV26"),
      g = a("Fcwr");
    b = a("GiK3");
    var e = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var c = a("DzMU"),
      f = Object.assign || function(a) {
        for (var b = 1; b <
          arguments.length; b++) {
          var c = arguments[b],
            e;
          for (e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e])
        }
        return a
      };
    a = b()({
      displayName: "Ancher",
      render: function() {
        var a = this.props.tagName || "a",
          b = Object(h.omit)(this.props, "onClick", "tagName");
        return e.a.createElement(c.a, f({
          tagName: a,
          onTap: this.onClick
        }, b), this.props.children)
      },
      onClick: function(a) {
        var b = this.props,
          c = b.href;
        ((b = b.onClick) ? !1 !== b(a) : 1) && c && (Object(g.d)(a.currentTarget, c), k.a.push(c), a.preventDefault())
      }
    });
    d.a = a
  },
  eRKi: function(b, d,
    a) {
    var h = a("agns");
    a.n(h);
    b = a("V5lc");
    var k = a.n(b),
      g = a("KV26");
    b = a("BYKG");
    var e = a.n(b);
    b = a("GiK3");
    var c = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var f = a("tZ8z"),
      f = a.n(f),
      l = a("DzMU"),
      p = a("87u3"),
      m = a("v/0t"),
      u = a("FSZp"),
      t = a("nVRx"),
      n = a("mYkO"),
      v = b()({
        displayName: "PayChargeSelector",
        mixins: [f.a],
        render: function() {
          var a = Object(h.omit)(this.props, "list"),
            b = this.props.list.map(function(a, b) {
              return c.a.createElement("option", {
                key: b,
                value: a.get("value")
              }, a.get("text"))
            });
          return c.a.createElement("div", {
              className: "select"
            },
            c.a.createElement("select", a, b), c.a.createElement("i", {
              className: "iconfont icon-sanjiao"
            }))
        }
      }),
      r = b()({
        displayName: "ResellerItem",
        mixins: [f.a],
        render: function() {
          var a = this.props.info;
          return c.a.createElement(l.a, {
            tagName: "li",
            "data-uid": a.get("uid"),
            "data-rid": a.get("rid"),
            onTap: this.onClick
          }, a.get("alias"))
        },
        onClick: function(a) {
          a = a.currentTarget.getAttribute("data-uid");
          this.props.onClick(a)
        }
      }),
      q = b()({
        displayName: "ResellerList",
        mixins: [f.a],
        render: function() {
          var a = this.props,
            b = a.list,
            e = a.onClick,
            b = b.map(function(a, b) {
              return c.a.createElement(r, {
                info: a,
                key: b,
                onClick: e
              })
            });
          return c.a.createElement("ul", null, b)
        }
      }),
      w = b()({
        displayName: "ResellerSelector",
        mixins: [f.a],
        all: [],
        recent: [],
        render: function() {
          var a = e.a.Map({
              uid: "",
              rid: "",
              alias: "\u5b98\u65b9\u76f4\u63a5\u8d2d\u4e70"
            }),
            b = this.props,
            d = b.all,
            f = b.recent,
            g = b.fetching,
            b = b.onClose,
            d = d.unshift(a),
            f = f.unshift(a),
            a = g ? c.a.createElement("span", {
              className: "spinner xs"
            }) : c.a.createElement("div", {
              className: "reselleroverlay"
            }, c.a.createElement("h1", null,
              "\u6700\u8fd1\u4f7f\u7528\u7684"), c.a.createElement("div", null, c.a.createElement(q, {
              list: f,
              onClick: this.onClickItem
            })), c.a.createElement("h1", null, "\u5168\u90e8"), c.a.createElement("div", null, c.a.createElement(q, {
              list: d,
              onClick: this.onClickItem
            })));
          return c.a.createElement(p.a, {
            onClose: b
          }, a)
        },
        onClickItem: function(a) {
          this.props.onSelect(a)
        }
      }),
      x = b()({
        displayName: "ResellerField",
        mixins: [f.a],
        render: function() {
          var a = this.props,
            b = a.data,
            e = a.onSelectReseller,
            d = a.onShowResellerOverlay,
            f = a.onHideResellerOverlay,
            a = b.get("resellerSelected") && b.get("resellerListAll").filter(function(a) {
              return a.get("uid") == b.get("resellerSelected")
            }).get(0, null),
            e = b.get("showingResellerList") && c.a.createElement(w, {
              all: b.get("resellerListAll"),
              recent: b.get("resellerListRecent"),
              fetching: b.get("resellerFetching"),
              onClose: f,
              onSelect: e
            });
          return c.a.createElement("div", null, c.a.createElement("p", {
            className: "label"
          }, "\u8bf7\u9009\u62e9\u6e20\u9053\uff1a"), c.a.createElement(l.a, {
            tagName: "div",
            className: "resellerinfo",
            onTap: d
          }, c.a.createElement("section",
            null, a ? a.get("alias") : "\u5b98\u65b9\u76f4\u63a5\u8d2d\u4e70", a && "(" + a.get("rid") + ")"), c.a.createElement("section", null, c.a.createElement("button", {
            className: "g-btn g-btn-primary"
          }, "\u66f4\u6362"))), e)
        }
      }),
      z = b()({
        displayName: "TargetField",
        mixins: [f.a],
        _showInput: !1,
        _input: null,
        _rid: "",
        render: function() {
          var a = this.props.data,
            b = a.get("target"),
            e = a.get("targetFetching"),
            a = a.get("targetSettingEnabled"),
            b = b.get("uid") ? b.get("rid") + "(" + b.get("alias") + ")" : "";
          this._showInput || !b ? (b = void 0, b = e ? c.a.createElement("button", {
            className: "g-btn g-btn-disabled",
            disabled: !0
          }, "...") : this._rid ? c.a.createElement("button", {
            className: "g-btn g-btn-primary"
          }, "\u786e\u5b9a") : c.a.createElement("button", {
            className: "g-btn g-btn-disabled"
          }, "\u53d6\u6d88"), e = c.a.createElement("form", {
            className: "targetinfo",
            onSubmit: this.onSubmit
          }, c.a.createElement("section", null, c.a.createElement("input", {
            type: "tel",
            placeholder: "\u8bf7\u8f93\u5165\u623f\u95f4\u53f7",
            value: this._rid,
            onChange: this.onChange
          })), c.a.createElement("section", null, b))) : e = a ? c.a.createElement(l.a, {
            className: "targetinfo",
            onTap: this.showInput
          }, c.a.createElement("section", null, b), c.a.createElement("section", null, c.a.createElement("button", {
            className: "g-btn g-btn-primary"
          }, "\u4fee\u6539"))) : c.a.createElement("div", {
            className: "targetinfo uneditable"
          }, b);
          return c.a.createElement("div", null, c.a.createElement("p", {
            className: "label"
          }, "\u5bf9\u65b9\u7684\u623f\u95f4\u53f7\uff1a"), e)
        },
        componentDidUpdate: function(a) {
          var b = this.props.data,
            c = b.get("target"),
            b = b.get("targetSettingEnabled");
          a = a.data.get("target");
          b && c.get("uid") && a.get("uid") != c.get("uid") && (this._showInput = !1, this._rid = "", this.forceUpdate())
        },
        showInput: function() {
          this._showInput = !0;
          this.forceUpdate()
        },
        onChange: function(a) {
          this._rid = a.target.value.trim();
          this.forceUpdate()
        },
        onSubmit: function(a) {
          var b = this._rid;
          a.preventDefault();
          if (b)
            if (/^\d+$/.test(b)) this.props.onChangeTarget(b);
            else alert("\u8bf7\u8f93\u5165\u5bf9\u65b9\u7684\u623f\u95f4\u53f7\u3002");
          else this._showInput = !1, this.forceUpdate()
        }
      }),
      A = b()({
        displayName: "PropInfo",
        render: function() {
          var a =
            this.props.propInfo,
            b = [];
          b.push(c.a.createElement("div", {
            key: "name"
          }, c.a.createElement("p", {
            className: "label"
          }, "\u9053\u5177"), c.a.createElement("p", {
            className: "value"
          }, a.get("itemName"))));
          b.push(c.a.createElement("div", {
            key: "price"
          }, c.a.createElement("p", {
            className: "label"
          }, "\u4ef7\u683c"), c.a.createElement("p", {
            className: "value"
          }, a.get("price"), " \u5143")));
          return b
        }
      }),
      B = b()({
        displayName: "ChargeConfirm",
        mixins: [f.a],
        render: function() {
          var a = this.props,
            b = a.data,
            e = a.user,
            d = a.onOkay,
            a = a.onCancel,
            e =
            b.getIn(["target", "alias"]) || e.getIn(["info", "alias"]),
            f = 0,
            f = b.get("propInfo") ? b.getIn(["propInfo", "price"]) : b.get("amount") + ("11" == b.get("methodID") ? "\u7f8e" : "");
          return c.a.createElement(m.a, {
            text: '<div class="chargeconfirm">\n            <div>\u8bf7\u786e\u8ba4\u60a8\u7684\u652f\u4ed8\u4fe1\u606f\u662f\u5426\u6b63\u786e</div>\n            <p>\u5e10\u53f7\uff1a<em>' + e + "</em></p>\n            <p>\u91d1\u989d\uff1a<em>" + f + "\u5143</em></p>\n            </div>",
            okayText: "\u7acb\u5373\u652f\u4ed8",
            cancelText: "\u53d6\u6d88",
            onOkay: d,
            onCancel: a
          })
        }
      }),
      D = b()({
        displayName: "AgreementOverlay",
        mixins: [f.a],
        render: function() {
          return c.a.createElement(p.a, {
            onClose: this.props.onClose
          }, c.a.createElement("iframe", {
            src: "/event/charge-agreement",
            frameBorder: "0",
            width: "100%",
            height: "100%"
          }))
        }
      });
    a = b()({
      displayName: "PayForm",
      mixins: [f.a],
      getDefaultProps: function() {
        return {
          resellerAvailable: !0,
          confirmAvailable: !0
        }
      },
      _checkedAgreement: !0,
      _showingAgreement: !1,
      render: function() {
        var a = this.props,
          b = a.data,
          e = a.user,
          d = a.notice,
          a = a.resellerAvailable,
          f = [];
        b.get("propInfo") ? f.push(c.a.createElement(A, {
          key: "prop-info",
          propInfo: b.get("propInfo")
        })) : void 0 === b.get("propInfo") && f.push(c.a.createElement("div", {
          key: "amount-field"
        }, c.a.createElement("p", {
          className: "label"
        }, "\u8bf7\u9009\u62e9\u91d1\u989d\uff1a"), c.a.createElement(v, {
          list: b.get("amountList"),
          value: b.get("amount"),
          onChange: this.onSelectAmount
        })));
        a && (f.push(c.a.createElement(x, {
          key: "reseller-field",
          data: b,
          onShowResellerOverlay: n.a.showResellerList,
          onHideResellerOverlay: n.a.hideResellerList,
          onSelectReseller: this.onSelectReseller
        })), (b.get("targetSettingEnabled") || b.getIn(["target", "uid"])) && f.push(c.a.createElement(z, {
          key: "target-field",
          data: b,
          onChangeTarget: n.a.selectTarget
        })));
        d.get("chargeFailAlert") && f.push(c.a.createElement(m.a, {
          key: "fail-confirm",
          text: d.get("chargeFailAlert"),
          cancelText: "\u8fd4\u56de",
          onOkay: t.a.hideChargeFailAlert,
          onCancel: this.back
        }));
        b.get("bondPhoneConfirm") && f.push(c.a.createElement(m.a, {
          key: "bond-phone-confirm",
          text: "\u60a8\u5c1a\u672a\u7ed1\u5b9a\u624b\u673a\u53f7\uff0c\u8bf7\u5148\u7ed1\u5b9a\u624b\u673a\u53f7\u3002",
          okeyText: "\u7acb\u5373\u7ed1\u5b9a",
          cancelText: "\u6682\u4e0d\u7ed1\u5b9a",
          onOkay: this.bondPhone,
          onCancel: this.back
        }));
        b.get("confirm") && f.push(c.a.createElement(B, {
          key: "charge-confirm",
          data: b,
          user: e,
          onOkay: this.onConfirm,
          onCancel: n.a.hideConfirm
        }));
        b.get("resultConfirm") && f.push(c.a.createElement(m.a, {
          key: "result-confirm",
          text: b.get("resultConfirm"),
          okayText: "\u652f\u4ed8\u6210\u529f",
          cancelText: "\u53d6\u6d88",
          onOkay: this.next,
          onCancel: this.back
        }));
        this._showingAgreement && f.push(c.a.createElement(D, {
          key: "agreement-overlay",
          onClose: this.hideAgreement
        }));
        f.push(c.a.createElement("div", {
          key: "agreement",
          className: "agreement"
        }, c.a.createElement("input", {
          type: "checkbox",
          checked: this._checkedAgreement,
          id: "agreement",
          onChange: this.toggleCheckAgreement
        }), c.a.createElement("label", {
          htmlFor: "agreement"
        }, "\u540c\u610f", c.a.createElement(l.a, {
          tagName: "span",
          onTap: this.showAgreement
        }, "\u300a\u5145\u503c\u670d\u52a1\u534f\u8bae\u300b"))));
        f.push(c.a.createElement("div", {
          key: "btn",
          className: "btn"
        }, c.a.createElement(u.a, {
          type: "button",
          disabled: !b.get("enabled"),
          progress: b.get("submiting"),
          onTap: this.submitHandler
        }, b.get("submiting") ? "\u8df3\u8f6c\u4e2d.." : b.get("enabled") ? "\u4e0b\u4e00\u6b65" : "\u521d\u59cb\u5316..")));
        return c.a.createElement("div", {
          className: "payform"
        }, f)
      },
      showAgreement: function() {
        this._showingAgreement = !0;
        this.forceUpdate()
      },
      hideAgreement: function() {
        this._showingAgreement = !1;
        this.forceUpdate()
      },
      toggleCheckAgreement: function() {
        this._checkedAgreement = !this._checkedAgreement;
        this.forceUpdate()
      },
      submitHandler: function(a) {
        var b =
          this.props;
        a = b.data;
        b = b.confirmAvailable;
        a.get("enabled") && !a.get("submiting") && (this._checkedAgreement ? a.get("targetSettingEnabled") && !a.getIn(["target", "uid"]) ? alert("\u8bf7\u8f93\u5165\u5bf9\u65b9\u623f\u95f4\u53f7\u540e\u70b9\u51fb\u300c\u786e\u8ba4\u300d\u6309\u94ae\u3002") : b ? n.a.showConfirm() : n.a.submit() : alert("\u8bf7\u5148\u9605\u8bfb\u5e76\u540c\u610f\u300a\u5145\u503c\u670d\u52a1\u534f\u8bae\u300b"))
      },
      onSelectReseller: function(a) {
        n.a.selectReseller(a);
        n.a.hideResellerList()
      },
      onSelectAmount: function(a) {
        n.a.setAmount(a.target.value)
      },
      bondPhone: function() {
        location.replace("/account/setphone?next=" + encodeURIComponent(g.a.getPath()))
      },
      onConfirm: function() {
        n.a.hideConfirm();
        n.a.submit()
      },
      removeRedirectCookie: function() {
        k.a.remove("pay-result-confirm-presented")
      },
      next: function() {
        this.removeRedirectCookie();
        location.assign("/pay/callback?succ=Y")
      },
      back: function() {
        this.removeRedirectCookie();
        history.back()
      }
    });
    d.a = a
  },
  fjbf: function(b, d, a) {
    function h(a, b) {
      for (var c = 0; c < a.length; c++) {
        var e = a[c],
          f = n[e.id];
        if (f) {
          f.refs++;
          for (var d = 0; d < f.parts.length; d++) f.parts[d](e.parts[d]);
          for (; d < e.parts.length; d++) f.parts.push(p(e.parts[d], b))
        } else {
          f = [];
          for (d = 0; d < e.parts.length; d++) f.push(p(e.parts[d], b));
          n[e.id] = {
            id: e.id,
            refs: 1,
            parts: f
          }
        }
      }
    }

    function k(a) {
      for (var b = [], c = {}, e = 0; e < a.length; e++) {
        var f = a[e],
          d = f[0],
          f = {
            css: f[1],
            media: f[2],
            sourceMap: f[3]
          };
        c[d] ? c[d].parts.push(f) : b.push(c[d] = {
          id: d,
          parts: [f]
        })
      }
      return b
    }

    function g(a, b) {
      var c = r(),
        e = x[x.length - 1];
      if ("top" === a.insertAt) e ? e.nextSibling ? c.insertBefore(b, e.nextSibling) : c.appendChild(b) : c.insertBefore(b, c.firstChild), x.push(b);
      else if ("bottom" ===
        a.insertAt) c.appendChild(b);
      else throw Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
    }

    function e(a) {
      a.parentNode.removeChild(a);
      a = x.indexOf(a);
      0 <= a && x.splice(a, 1)
    }

    function c(a) {
      var b = document.createElement("style");
      a.attrs.type = "text/css";
      l(b, a.attrs);
      g(a, b);
      return b
    }

    function f(a) {
      var b = document.createElement("link");
      a.attrs.type = "text/css";
      a.attrs.rel = "stylesheet";
      l(b, a.attrs);
      g(a, b);
      return b
    }

    function l(a, b) {
      Object.keys(b).forEach(function(c) {
        a.setAttribute(c, b[c])
      })
    }

    function p(a, b) {
      var d, g, h;
      if (b.singleton) {
        var l = w++;
        d = q || (q = c(b));
        g = m.bind(null, d, l, !1);
        h = m.bind(null, d, l, !0)
      } else a.sourceMap && "function" === typeof URL && "function" === typeof URL.createObjectURL && "function" === typeof URL.revokeObjectURL && "function" === typeof Blob && "function" === typeof btoa ? (d = f(b), g = t.bind(null, d, b), h = function() {
        e(d);
        d.href && URL.revokeObjectURL(d.href)
      }) : (d = c(b), g = u.bind(null, d), h = function() {
        e(d)
      });
      g(a);
      return function(b) {
        b ? b.css === a.css && b.media === a.media && b.sourceMap === a.sourceMap ||
          g(a = b) : h()
      }
    }

    function m(a, b, c, e) {
      c = c ? "" : e.css;
      a.styleSheet ? a.styleSheet.cssText = A(b, c) : (c = document.createTextNode(c), e = a.childNodes, e[b] && a.removeChild(e[b]), e.length ? a.insertBefore(c, e[b]) : a.appendChild(c))
    }

    function u(a, b) {
      var c = b.css,
        e = b.media;
      e && a.setAttribute("media", e);
      if (a.styleSheet) a.styleSheet.cssText = c;
      else {
        for (; a.firstChild;) a.removeChild(a.firstChild);
        a.appendChild(document.createTextNode(c))
      }
    }

    function t(a, b, c) {
      var e = c.css;
      c = c.sourceMap;
      var d = void 0 === b.convertToAbsoluteUrls && c;
      if (b.convertToAbsoluteUrls ||
        d) e = z(e);
      c && (e += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(c)))) + " */");
      b = new Blob([e], {
        type: "text/css"
      });
      e = a.href;
      a.href = URL.createObjectURL(b);
      e && URL.revokeObjectURL(e)
    }
    var n = {};
    d = function(a) {
      var b;
      return function() {
        "undefined" === typeof b && (b = a.apply(this, arguments));
        return b
      }
    };
    var v = d(function() {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
      }),
      r = d(function() {
        return document.head || document.getElementsByTagName("head")[0]
      }),
      q = null,
      w = 0,
      x = [],
      z = a("quY5");
    b.exports = function(a, b) {
      if ("undefined" !== typeof DEBUG && DEBUG && "object" !== typeof document) throw Error("The style-loader cannot be used in a non-browser environment");
      b = b || {};
      b.attrs = "object" === typeof b.attrs ? b.attrs : {};
      "undefined" === typeof b.singleton && (b.singleton = v());
      "undefined" === typeof b.insertAt && (b.insertAt = "bottom");
      var c = k(a);
      h(c, b);
      return function(a) {
        for (var e = [], d = 0; d < c.length; d++) {
          var f = n[c[d].id];
          f.refs--;
          e.push(f)
        }
        a && (d = k(a), h(d, b));
        for (d = 0; d < e.length; d++)
          if (f =
            e[d], 0 === f.refs) {
            for (a = 0; a < f.parts.length; a++) f.parts[a]();
            delete n[f.id]
          }
      }
    };
    var A = function() {
      var a = [];
      return function(b, c) {
        a[b] = c;
        return a.filter(Boolean).join("\n")
      }
    }()
  },
  mYkO: function(b, d, a) {
    b = a("BYKG");
    var h = a.n(b),
      k = a("agns");
    a.n(k);
    b = a("V5lc");
    var g = a.n(b);
    b = a("T5Bi");
    b = a.n(b);
    var e = a("O+kd"),
      c = a("fiJj"),
      f = a("XTFZ"),
      l = a("cLh8"),
      p = a("NVzI"),
      m = a("sHCI"),
      u = a("VSEd"),
      t = a("Fcwr"),
      n = a("ZiWJ"),
      v = a("nVRx"),
      r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
        return typeof a
      } : function(a) {
        return a &&
          "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      };
    a = h.a.fromJS({
      methodID: "",
      wechatCode: "",
      target: {},
      targetFetching: !1,
      targetSettingEnabled: !1,
      amountList: [],
      amount: 0,
      resellerFetching: !1,
      resellerListAll: [],
      resellerListRecent: [],
      resellerSelected: "",
      propInfo: void 0,
      enabled: !1,
      submiting: !1,
      showingResellerList: !1,
      bondPhoneConfirm: !1,
      confirm: !1,
      resultConfirm: ""
    });
    n.a.registerByMap("pay.form", a, {});
    a = function w() {
      w.superclass.constructor.call(this, n.a, "pay.form");
      this._bindSelf("showResellerList", "hideResellerList", "hideConfirm", "selectTarget", "submit", "_fetchResellerListBack", "_selectTargetBack", "_getPropInfoBack", "_submitBack", "_wechatCallback")
    };
    Object(k.extend)(a, b.a, {
      selectMethod: function(a) {
        this.update({
          methodID: a
        })
      },
      getMethodName: function() {
        var a = "";
        switch (this.getState().get("methodID")) {
          case "15":
            a = "alipay";
            break;
          case "14":
            a = "mo9pay";
            break;
          case "11":
            a = "paypal";
            break;
          case "16":
            a = "wechat-jssdk";
            break;
          case "26":
            a = "vpay8";
            break;
          case "27":
            a = "wechat-h5";
            break;
          case "-1":
            a = "huaweiquick"
        }
        return a
      },
      setWechatCode: function(a) {
        this.update({
          wechatCode: a
        })
      },
      selectTarget: function(a) {
        this.update({
          targetFetching: !0
        });
        this.getTargetInfo(a).then(this._selectTargetBack, this._selectTargetBack)
      },
      getTargetInfo: function(a) {
        return Object(f.a)(a).then(function(a) {
          var b = a.content;
          if ("001" != a.flag) throw Error("get uid by rid error: " + b);
          return b
        }).then(function(a) {
          return Object(p.a)(a).then(function(a) {
            var b = a.content;
            if ("001" != a.flag || 0 == b.uid) throw Error("get user info error: " +
              b);
            return b
          })
        })
      },
      enableTargetSetting: function() {
        this.update({
          targetSettingEnabled: !0
        })
      },
      createAmountList: function(a, b, c) {
        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "\u516d\u5e01",
          d = b || ("rmb" == a ? [5, 10, 20, 30, 50, 100, 200, 300, 500, 1E3, 2E3, 3E3, 5E3] : [10, 50, 100, 200, 500, 1E3, 2E3, 5E3]),
          d = d.map(function(b) {
            var d = b * (c ? c : "dollar" == a ? 600 : 100);
            return {
              value: b,
              coin6: d,
              text: "dollar" == a ? "\u5145\u503c$" + b + "\u7f8e\u5143\u5151\u6362" + d + e : "\u5145\u503c" + b + "\u5143\u5151\u6362" + d + e
            }
          });
        this.update({
          amountList: h.a.fromJS(d),
          amount: d[0].value
        })
      },
      setAmount: function(a) {
        this.update({
          amount: a
        })
      },
      fetchResellerList: function() {
        this.update({
          resellerFetching: !0
        });
        Object(c.b)("user-prop-getProxyList.php").then(this._fetchResellerListBack)
      },
      selectReseller: function(a) {
        this.update({
          resellerSelected: a
        })
      },
      showResellerList: function() {
        this.update({
          showingResellerList: !0
        })
      },
      hideResellerList: function() {
        this.update({
          showingResellerList: !1
        })
      },
      getPropInfo: function(a) {
        var b = this.getState().get("methodID");
        return Object(c.b)("user-prop-buyRmbProp.php", {
          act: "priceConf",
          typeid: b,
          client: 15 == b ? 1 : 16 == b ? 4 : 5,
          itemid: a
        }).then(this._getPropInfoBack)
      },
      enable: function() {
        this.update({
          enabled: !0
        })
      },
      disable: function() {
        this.update({
          enabled: !1
        })
      },
      showConfirm: function() {
        this.update({
          confirm: !0
        })
      },
      hideConfirm: function() {
        this.update({
          confirm: !1
        })
      },
      showResultConfirm: function(a) {
        this.update({
          resultConfirm: a
        })
      },
      startSubmit: function() {
        this.update({
          submiting: !0
        })
      },
      endSubmit: function() {
        this.update({
          submiting: !1
        })
      },
      showBondPhoneConfirm: function() {
        this.update({
          bondPhoneConfirm: !0
        })
      },
      hideBondPhoneConfirm: function() {
        this.update({
          bondPhoneConfirm: !1
        })
      },
      getAmountDetail: function() {
        var a = this.getState(),
          b = a.get("amount"),
          c = a.get("amountList"),
          a = a.get("propInfo");
        1 == b ? c = h.a.fromJS({
          value: 1,
          coin6: 100,
          text: "\u4e00\u5143\u8d2d\u793c\u5305"
        }) : a ? (c = a.get("price"), c = h.a.Map({
          value: c,
          coin6: 100 * c,
          text: a.get("itemName")
        })) : c = b && c.filter(function(a) {
          return a.get("value") == b
        }).get(0);
        return c
      },
      submit: function() {
        var a = this.getState(),
          b = a.get("methodID"),
          d = this.getMethodName(),
          f = a.get("target"),
          h = a.get("propInfo"),
          p = g.a.get("yiqifa"),
          n = this.getSelectedReseller(),
          m = this.getAmountDetail();
        this.startSubmit();
        b ? "huaweiquick" == d ? (a = {
          uid: e.a.info.uid,
          gatetype: d,
          money: m && m.get("value"),
          ovalue: m && m.get("coin6")
        }, Object(c.b)("coop-mobile-payClientMakeOrder.php", a, !0).then(this._submitBack)) : (m = {
          typeid: b,
          ovalue: m && m.get("coin6"),
          payRMB: m && m.get("value"),
          pxuid: n && n.get("uid"),
          otheruid: f.get("rid", "0"),
          propid: h ? h.get("item") : void 0
        }, Object(t.b)(m), "wechat-jssdk" == d ? (d = e.a.info, Object(k.mix)(m, {
          uid: d.uid,
          alias: d.alias,
          rid: d.rid,
          code: a.get("wechatCode")
        }), Object(c.b)("user-wxpay-jspay.php", m).then(this._submitBack)) : "wechat-h5" == d ? Object(c.b)("user-wxpay-jspayh5.php", m).then(this._submitBack) : (Object(k.mix)(m, {
          pid: 8
        }), p && (a = u.a.get(), Object(k.mix)(m, {
          coopid: 1087,
          src: a,
          channel: g.a.get("channel"),
          cid: g.a.get("cid"),
          wi: g.a.get("wi")
        })), Object(c.b)("user-newPay.php", m).then(this._submitBack))) : (a = window.location, a = {
          coop: l.a.info && l.a.info.cid,
          orderurl: "http://m.v.6.cn/",
          ovalue: m && m.get("coin6"),
          mobile: 1,
          next_action: a.protocol + "//" + a.host + "/pay/callback?succ=Y"
        }, Object(c.b)("cooperate-pay.php", a).then(this._submitBack))
      },
      getSelectedReseller: function() {
        var a = this.getState().get("resellerSelected"),
          b = this.getState().get("resellerListAll");
        return a && b.filter(function(b) {
          return b.get("uid") == a
        }).get(0)
      },
      invokeWechatPayment: function(a) {
        WeixinJSBridge.invoke("getBrandWCPayRequest", a, this._wechatCallback)
      },
      _fetchResellerListBack: function(a) {
        this.update({
          resellerFetching: !1
        });
        "001" == a.flag && this.update({
          resellerListRecent: h.a.fromJS(a.content.lately),
          resellerListAll: h.a.fromJS(a.content.other.concat(a.content.recom))
        })
      },
      _selectTargetBack: function(a) {
        this.update({
          targetFetching: !1
        });
        a instanceof Error ? v.a.showChargeFailAlert("\u5bf9\u65b9\u623f\u95f4\u53f7\u4e0d\u5b58\u5728\u3002") : this.update({
          target: h.a.fromJS(Object(m.a)(a))
        })
      },
      _getPropInfoBack: function(a) {
        "001" == a.flag ? this.update({
          propInfo: h.a.fromJS(a.content)
        }) : this.update({
          propInfo: null
        })
      },
      _submitBack: function(a) {
        var b = this,
          c = this.getState(),
          e = this.getMethodName();
        if ("001" == a.flag || "1" ==
          a.flag)
          if (c = {
              id: a.content.orderid,
              affiliation: e,
              revenue: c.get("amount"),
              currency: "paypal" == e ? "USD" : "CNY"
            }, g.a.set("ga-order", JSON.stringify(c)), "wechat-jssdk" == e) this.invokeWechatPayment(a.content.param);
          else if ("alipay" == e) e = document.createElement("div"), e.innerHTML = a.content.link, document.body.appendChild(e), setTimeout(function() {
          var a = document.getElementById("alipaysubmit");
          a && a.submit()
        }, 100);
        else if ("wechat-h5" == e) g.a.set("pay-result-confirm-presented", 1), setTimeout(function() {
          b.showResultConfirm("\u8bf7\u5728\u5fae\u4fe1\u4e2d\u5b8c\u6210\u652f\u4ed8");
          b.endSubmit()
        }, 2E3), location.assign(a.content.link);
        else if ("huaweiquick" == e && "object" == ("undefined" === typeof system ? "undefined" : r(system)) && system.postMessage) g.a.set("pay-result-confirm-presented", 1), system.postMessage(JSON.stringify({
          cmd: "huaweiPay",
          content: a
        })), setTimeout(function() {
          b.showResultConfirm("\u8bf7\u5728\u534e\u4e3a\u652f\u4ed8\u4e2d\u5b8c\u6210\u652f\u4ed8");
          b.endSubmit()
        }, 1E3);
        else if (e) location.assign(a.content.link);
        else if (/^(?:\w+:)?\/\//.test(a.content)) location.assign(a.content);
        else try {
          eval(a.content)
        } catch (d) {
          console.error(d), console.error("Collaborator Pay Error: " + a.content)
        } else "402" == a.flag && -1 < a.content.indexOf("\u7ed1\u5b9a") ? (this.endSubmit(), this.showBondPhoneConfirm()) : (this.endSubmit(), v.a.showChargeFailAlert(a.content))
      },
      _wechatCallback: function(a) {
        this.endSubmit();
        "get_brand_wcpay_request:ok" == a.err_msg ? location.assign("/pay/callback?succ=Y") : v.a.showChargeFailAlert("\u652f\u4ed8\u5931\u8d25<br />" + a.err_msg)
      }
    });
    d.a = new a
  },
  nVRx: function(b, d, a) {
    b = a("BYKG");
    var h = a.n(b);
    b = a("agns");
    a.n(b);
    var k = a("T5Bi"),
      k = a.n(k),
      g = a("V6zD"),
      e = a.n(g),
      c = a("cLh8"),
      f = a("ZiWJ");
    a = h.a.fromJS({
      loginConfirm: !1,
      loginConfirmText: "",
      chargeConfirm: "",
      setPhoneConfirm: "",
      downloadAppConfirm: !1,
      chargeFailAlert: ""
    });
    f.a.registerByMap("notice", a, {});
    a = function p() {
      p.superclass.constructor.call(this, f.a, "notice");
      this._bindSelf("showLoginConfirm", "hideLoginConfirm", "hideChargeConfirm", "hideChargeFailAlert", "showDownloadAppConfirm", "hideSetPhoneConfirm")
    };
    Object(b.extend)(a, k.a, {
      showLoginConfirm: function(a) {
        c.a.conf("loginConfirm") ?
          c.a.showLoginConfirm(e.a) : this.update({
            loginConfirm: !0,
            loginConfirmText: a || ""
          })
      },
      hideLoginConfirm: function() {
        this.update({
          loginConfirm: !1
        })
      },
      showChargeConfirm: function(a) {
        this.update({
          chargeConfirm: a || "\u60a8\u7684\u4f59\u989d\u4e0d\u8db3\uff0c\u8bf7\u5145\u503c\u3002"
        })
      },
      hideChargeConfirm: function() {
        this.update({
          chargeConfirm: ""
        })
      },
      showDownloadAppConfirm: function() {
        this.update({
          downloadAppConfirm: !0
        })
      },
      showChargeFailAlert: function(a) {
        this.update({
          chargeFailAlert: a
        })
      },
      hideChargeFailAlert: function() {
        this.update({
          chargeFailAlert: ""
        })
      },
      showSetPhoneConfirm: function(a) {
        this.update({
          setPhoneConfirm: a
        })
      },
      hideSetPhoneConfirm: function() {
        this.update({
          setPhoneConfirm: ""
        })
      }
    });
    d.a = new a
  },
  "o/ex": function(b, d, a) {
    b = a("GiK3");
    var h = a.n(b);
    b = a("DT0+");
    var k = {
      wechat: "//vr0.6rooms.com/v/l0/a87bd929f791dd445f01b4976868635a.png",
      alipay: "//vr0.6rooms.com/v/g3/38c2df8d0100d091021f49c20a7dad43.png",
      paypal: "//vr0.6rooms.com/v/v2/7eabedcfde606c8dfe9136a9ba9e7e3d.png",
      mo9: "//vr0.6rooms.com/v/h1/8508fb010c70b68beadd8eea46878742.png"
    };
    a = a.n(b)()({
      displayName: "PayBrand",
      render: function() {
        var a = this.props.brand,
          a = "vpay8" == a ? h.a.createElement("p", {
            className: "text"
          }, "\u624b\u673a\u77ed\u4fe1\u5145\u503c") : "huawei" == a ? h.a.createElement("p", {
            className: "text"
          }, "\u534e\u4e3a\u652f\u4ed8") : h.a.createElement("img", {
            src: k[a]
          });
        return h.a.createElement("div", {
          className: "pay-brand"
        }, h.a.createElement("h1", null, "\u5f53\u524d\u5145\u503c\u65b9\u5f0f"), a)
      }
    });
    d.a = a
  },
  quY5: function(b, d) {
    b.exports = function(a) {
      var b = "undefined" !== typeof window && window.location;
      if (!b) throw Error("fixUrls requires window.location");
      if (!a || "string" !== typeof a) return a;
      var d = b.protocol + "//" + b.host,
        g = d + b.pathname.replace(/\/[^\/]*$/, "/");
      return a.replace(/url *\( *(.+?) *\)/g, function(a, b) {
        var f = b.replace(/^"(.*)"$/, function(a, b) {
          return b
        }).replace(/^'(.*)'$/, function(a, b) {
          return b
        });
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(f)) return a;
        f = 0 === f.indexOf("//") ? f : 0 === f.indexOf("/") ? d + f : g + f.replace(/^\.\//, "");
        return "url(" + JSON.stringify(f) + ")"
      })
    }
  },
  tZ8z: function(b, d, a) {
    b.exports = a("5Op0")(22)
  },
  "v/0t": function(b, d, a) {
    var h =
      a("cLh8");
    b = a("GiK3");
    var k = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var g = a("N//m"),
      e = a("DzMU");
    a = b()({
      displayName: "Confirm",
      getDefaultProps: function() {
        return {
          title: h.a.text("\u516d\u95f4\u623f") + "\u63d0\u793a\u60a8"
        }
      },
      render: function() {
        var a = this.props,
          b = a.text,
          d = a.okayText,
          h = a.cancelText;
        return k.a.createElement(g.a, {
          className: "g-confirm",
          closeByCloseButton: !0
        }, k.a.createElement("div", {
          className: "title"
        }, a.title), k.a.createElement("div", {
          className: "content",
          dangerouslySetInnerHTML: {
            __html: b
          }
        }), k.a.createElement("div", {
          className: "btn"
        }, k.a.createElement(e.a, {
          tagName: "div",
          className: "cancel",
          onTap: this.onClickButton
        }, h || "\u53d6\u6d88"), k.a.createElement(e.a, {
          tagName: "div",
          className: "okay",
          onTap: this.onClickButton
        }, d || "\u786e\u5b9a")))
      },
      onClickButton: function(a) {
        var b = this.props,
          e = b.onOkay,
          d = b.onCancel,
          b = b.onClickButton,
          g = a.target;
        "okay" == g.className ? e && e(a) : "cancel" == g.className && d && d(a);
        b && b(a)
      }
    });
    d.a = a
  },
  viv0: function(b, d, a) {
    d = b.exports = a("FZ+f")(void 0);
    d.push([b.i, '.viewport-pay{min-height:100%;background-color:#f5f5f5}.mainframe-pay{padding:0;box-sizing:border-box}.mainframe-pay .buyprop{padding:20px 0}.mainframe-pay .accountinfo{padding:17px 0 17px 10px;margin:0 0 10px;background:#fff}.mainframe-pay .accountinfo h1{font-size:16px;font-weight:500;margin:0;padding:0 0 16px}.mainframe-pay .accountinfo .details{color:#666;display:-webkit-box;display:-webkit-flex;display:flex}.mainframe-pay .accountinfo .details p{margin:0}.mainframe-pay .accountinfo .details .avatar{width:65px;height:65px;box-sizing:border-box;padding:2px;border:1px solid #f03534;border-radius:50%;margin:0 10px 0 14px}.mainframe-pay .accountinfo .details .avatar img{width:60px;height:60px;border-radius:50%}.mainframe-pay .accountinfo .details .alias{color:#000;padding-right:6px;font-size:18px}.mainframe-pay .accountinfo .details section:last-of-type p:first-of-type{padding:4px 0 8px}.mainframe-pay .accountinfo .details section:last-of-type p:last-of-type span:first-of-type{margin-right:12px}.mainframe-pay .coupon{display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;height:46px;line-height:46px;padding:0 12px;color:#333}.mainframe-pay .coupon .main{-webkit-box-flex:1;-webkit-flex:1;flex:1}.mainframe-pay .coupon .main:before{content:" ";display:inline-block;width:23px;height:18px;background-image:url("//vr0.6rooms.com/v/a3/49f3714009f696937bc1e531d7b582ff.png");background-size:23px 18px;background-repeat:no-repeat;background-position:50%}.mainframe-pay .coupon-overlay .overlay{width:90%;box-sizing:border-box;padding:40px 10px;background:#efefef}.mainframe-pay .coupon-overlay .g-clickable{background:rgba(0,0,0,.5)}.mainframe-pay .pay-brand{padding:0 0 16px;margin:0 0 16px;background:#fff;text-align:center}.mainframe-pay .pay-brand h1{margin:0 0 6px;padding:16px 0 10px;font-size:13px;text-align:center;color:#666}.mainframe-pay .pay-brand img{max-width:140px}.mainframe-pay .pay-brand .text{font-size:18px}.mainframe-pay .payform{padding:0 10px}.mainframe-pay .payform .select{height:40px;padding:0;margin:6px 0 25px;border:1px solid #cecece;border-radius:3px;background:#fff;position:relative}.mainframe-pay .payform .select .iconfont{height:100%;line-height:40px;padding:0 8px;border-left:1px solid #cecece;pointer-events:none;position:absolute;right:0;top:0;color:#cecece}.mainframe-pay .payform .select select{width:100%;height:100%;border:0;padding:0 0 0 10px;-webkit-appearance:none;-ms-appearance:none;appearance:none;background:transparent}.mainframe-pay .payform .label{padding:0;color:#666;margin:0}.mainframe-pay .payform .value{height:40px;padding:0 10px;border:1px solid #cecece;margin:6px 0 25px;border-radius:3px;background:#fff;line-height:40px}.mainframe-pay .payform .btn{padding-top:20px}.mainframe-pay .payform .agreement input[type=checkbox]{margin:0 6px 0 2px}.mainframe-pay .payform .agreement span{color:#f03534}.mainframe-pay .payform .g-btn-progress{height:45px;width:100%;background:#f03534;color:#fff;border:0}.mainframe-pay .payform .g-btn-progress.disabled{background:#efefef;color:#666;border:1px solid #bbb}.mainframe-pay .payform .resellerinfo,.mainframe-pay .payform .targetinfo{border-sizing:border-box;height:40px;padding:0;margin:6px 0 25px;background:#fff;line-height:40px;display:-webkit-box;display:-webkit-flex;display:flex}.mainframe-pay .payform .resellerinfo .g-btn,.mainframe-pay .payform .targetinfo .g-btn{width:100%;height:100%;border:0;background:#f03534;color:#fff;border-radius:0 3px 3px 0}.mainframe-pay .payform .resellerinfo .g-btn:active,.mainframe-pay .payform .targetinfo .g-btn:active{opacity:.5}.mainframe-pay .payform .resellerinfo .g-btn-disabled,.mainframe-pay .payform .targetinfo .g-btn-disabled{background:#999}.mainframe-pay .payform .resellerinfo section,.mainframe-pay .payform .targetinfo section{box-sizing:border-box;height:100%}.mainframe-pay .payform .resellerinfo section:first-of-type,.mainframe-pay .payform .targetinfo section:first-of-type{-webkit-box-flex:1;-webkit-flex:1;flex:1;border-style:solid;border-width:1px 0 1px 1px;border-color:#cecece;border-radius:3px 0 0 3px;padding:0 0 0 10px}.mainframe-pay .payform .resellerinfo section:first-of-type input,.mainframe-pay .payform .targetinfo section:first-of-type input{display:block;width:100%;height:100%;box-sizing:border-box;border:0;padding:0;line-height:40px}.mainframe-pay .payform .resellerinfo section:last-of-type,.mainframe-pay .payform .targetinfo section:last-of-type{width:60px}.mainframe-pay .payform .resellerinfo .iconfont,.mainframe-pay .payform .targetinfo .iconfont{font-size:9px;position:relative;left:3px;top:-2px}.mainframe-pay .payform .resellerinfo.uneditable,.mainframe-pay .payform .targetinfo.uneditable{border:1px solid #cecece;border-radius:3px;padding:0 10px}.mainframe-pay .payform .chargeconfirm p{margin:0;padding:0 0 6px}.mainframe-pay .payform .chargeconfirm div{margin:0;padding:0 0 18px}.mainframe-pay .payform .chargeconfirm em{color:#f03534}.mainframe-pay .tip{color:#666;font-size:14px;padding:30px 10px 10px}.mainframe-pay .tip a{color:#f03534}.mainframe-pay .tip p{margin:8px 0;line-height:1.2}.mainframe-pay .pay-list{padding:20px 10px 0}.mainframe-pay .pay-list a{display:block;border:1px solid #eee;height:60px;line-height:60px;border-radius:3px;margin-bottom:1em;text-align:center;font-size:16px;color:#333;background:#fff;position:relative}.mainframe-pay .pay-list a img{border:0;vertical-align:middle}.mainframe-pay .pay-list a:active{background-color:#efefef}.mainframe-pay .pay-list a.alipay{border-color:#ff6c08}.mainframe-pay .pay-list a.alipay i{display:block;width:20px;height:20px;position:absolute;right:0;top:0;background:#ff6c08;border-radius:0 0 0 3px;font-size:12px;font-style:normal;color:#fff;font-weight:700;line-height:20px}.mainframe-pay .payform.one-yuan{padding:0}.mainframe-pay .payform.one-yuan .amount{margin:15px 0;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.mainframe-pay .payform.one-yuan .amount section{height:40px;padding:0 20px;line-height:40px}.mainframe-pay .payform.one-yuan .amount section:first-of-type{width:80px}.mainframe-pay .payform.one-yuan .agreement,.mainframe-pay .payform.one-yuan .btn{padding:10px 15px}.reselleroverlay{padding:10px}.reselleroverlay h1{font-size:20px;margin:0;padding:20px 0 15px 5px}.reselleroverlay ul{list-style:none;margin:0;padding:0}.reselleroverlay li{display:inline-block;width:170px;padding:8px;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.reselleroverlay li:active{background:#efefef}',
      ""
    ])
  },
  w2rP: function(b, d, a) {
    b = a("V6zD");
    var h = a.n(b),
      k = a("KV26");
    b = a("GiK3");
    var g = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var e = a("DzMU");
    a = b()({
      displayName: "SearchOverlay",
      _input: null,
      render: function() {
        return g.a.createElement("div", {
          className: "search-overlay"
        }, g.a.createElement("div", {
          className: "form"
        }, g.a.createElement("form", {
            action: "/s/",
            onSubmit: this.onSubmit
          }, g.a.createElement("input", {
            type: "search",
            name: "search",
            ref: this.refInput,
            placeholder: "\u901a\u8fc7\u623f\u53f7\u6216\u6635\u79f0\u641c\u7d22"
          }),
          g.a.createElement("button", {
            type: "submit",
            className: "g-btn g-btn-primary"
          }, "\u641c\u7d22"))), g.a.createElement(e.a, {
          tagName: "div",
          className: "g-clickable",
          onTap: this.props.onClose
        }))
      },
      componentDidMount: function() {
        this._input.focus();
        h.a.publish("overlay-show")
      },
      componentWillUnmount: function() {
        h.a.publish("overlay-hide")
      },
      onSubmit: function(a) {
        var b = encodeURIComponent(this._input.value.trim());
        a.preventDefault();
        k.a.push("/s/?key=" + b);
        this.props.onClose && this.props.onClose(a)
      },
      refInput: function(a) {
        this._input =
          a
      }
    });
    d.a = a
  },
  wCdf: function(b, d, a) {
    var h = a("agns");
    a.n(h);
    b = a("GiK3");
    var k = a.n(b);
    b = a("DT0+");
    b = a.n(b);
    var g = a("tZ8z");
    a = a.n(g);
    a = b()({
      displayName: "FlexGrid",
      mixins: [a.a],
      getDefaultProps: function() {
        return {
          className: "",
          width: 0
        }
      },
      _width: 0,
      _container: null,
      render: function() {
        var a = this.props,
          b = a.className,
          a = (a.width || this._width) && this.make() || void 0;
        return k.a.createElement("div", {
          className: "g-flexgrid " + b,
          ref: this.refSelf
        }, a)
      },
      componentDidMount: function() {
        (this._width = this.props.width) || (this._width =
          this._container.clientWidth);
        this.forceUpdate()
      },
      getRowLength: function() {
        var a = this.props;
        return Math.floor((a.width || this._width) / a.itemWidth)
      },
      make: function() {
        for (var a = this.props, b = a.component, d = a.list, g = a.width, p = a.itemHeight, m = a.itemRatio, u = Object(h.omit)(this.props, "className", "component", "list", "itemWidth", "itemHeight"), t = g || this._width, n = this.getRowLength(), a = [
            []
          ], v = 0, d = d.toArray(); d[0];) g = a[a.length - 1], g.length < n ? g.push(d.shift()) : a.push([]);
        g = a[a.length - 1];
        d = g.length;
        0 != g.length && d < n && g.splice.apply(g,
          [d, 0].concat(Array(n - d)));
        return a.map(function(a, e) {
          var d = a.map(function(a, e) {
            var d = 100 / n + "%",
              f = t / n,
              g;
            p || m ? "number" == typeof p ? g = p : "function" == typeof p ? g = p(f) : m && (g = Math.round(f / m)) : g = "auto";
            d = {
              width: d,
              height: g
            };
            u.item = a;
            u.index = v++;
            return k.a.createElement("section", {
              className: "flexgrid-item",
              style: d,
              key: e
            }, a && k.a.createElement(b, u))
          });
          return k.a.createElement("div", {
            className: "flexgrid-row",
            key: e
          }, d)
        })
      },
      refSelf: function(a) {
        this._container = a
      }
    });
    d.a = a
  },
  "wxL/": function(b, d, a) {
    function h(a) {
      var b = 1 <
        arguments.length && void 0 !== arguments[1] ? arguments[1] : "y-m-d",
        d = new Date(a),
        e = d.getFullYear(),
        g = c(d.getMonth() + 1),
        h = c(d.getDate()),
        k = c(d.getHours()),
        v = c(d.getMinutes()),
        r = c(d.getSeconds());
      return b.replace(/y|m|d|h|i|s/g, function(a) {
        switch (a) {
          case "y":
            return e;
          case "m":
            return g;
          case "d":
            return h;
          case "h":
            return k;
          case "i":
            return v;
          case "s":
            return r
        }
      })
    }

    function k(a) {
      var b = new Date(1E3 * a);
      a = b.getUTCDate() - 1;
      var c = b.getUTCHours(),
        d = b.getUTCMinutes(),
        b = b.getUTCSeconds();
      return [a, c, d, b]
    }

    function g(a) {
      a =
        k(a).slice(1);
      var b = e(a, 3);
      a = b[0];
      var d = b[1],
        b = b[2];
      return (a ? c(a) + ":" : "") + c(d) + ":" + c(b)
    }
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    var e = function() {
      return function(a, b) {
        if (Array.isArray(a)) return a;
        if (Symbol.iterator in Object(a)) {
          var c = [],
            d = !0,
            e = !1,
            g = void 0;
          try {
            for (var h = a[Symbol.iterator](), k; !(d = (k = h.next()).done) && (c.push(k.value), !b || c.length !== b); d = !0);
          } catch (r) {
            e = !0, g = r
          } finally {
            try {
              if (!d && h["return"]) h["return"]()
            } finally {
              if (e) throw g;
            }
          }
          return c
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    }();
    d.format = h;
    d.parseSecond = k;
    d.formatSecond = g;
    var c = function(a) {
      return 10 > a ? "0" + a : a + ""
    };
    d.default = {
      format: h,
      parseSecond: k,
      formatSecond: g
    }
  }
});
