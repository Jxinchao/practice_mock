(function(b) {
  function c(a) {
    if (d[a]) return d[a].exports;
    var h = d[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    b[a].call(h.exports, h, h.exports, c);
    h.l = !0;
    return h.exports
  }
  var a = window._SIX_ROOMS_CB_;
  window._SIX_ROOMS_CB_ = function(d, h, k) {
    for (var c, g, m = 0, q = []; m < d.length; m++) g = d[m], f[g] && q.push(f[g][0]), f[g] = 0;
    for (c in h) Object.prototype.hasOwnProperty.call(h, c) && (b[c] = h[c]);
    for (a && a(d, h, k); q.length;) q.shift()()
  };
  var d = {},
    f = {
      main: 0
    };
  c.e = function(a) {
    function b() {
      m.onerror = m.onload = null;
      clearTimeout(q);
      var g = f[a];
      if (0 !== g) {
        if (g) g[1](Error("Loading chunk " +
          a + " failed."));
        f[a] = void 0
      }
    }
    var d = f[a];
    if (0 === d) return new Promise(function(a) {
      a()
    });
    if (d) return d[2];
    var l = new Promise(function(g, b) {
      d = f[a] = [g, b]
    });
    d[2] = l;
    var g = document.getElementsByTagName("head")[0],
      m = document.createElement("script");
    m.type = "text/javascript";
    m.charset = "utf-8";
    m.async = !0;
    m.timeout = 12E4;
    m.crossOrigin = "anonymous";
    c.nc && m.setAttribute("nonce", c.nc);
    m.src = c.p + window._SIX_ROOMS_CHUNKS_[a];
    var q = setTimeout(b, 12E4);
    m.onerror = m.onload = b;
    g.appendChild(m);
    return l
  };
  c.m = b;
  c.c = d;
  c.d = function(a,
    b, d) {
    c.o(a, b) || Object.defineProperty(a, b, {
      configurable: !1,
      enumerable: !0,
      get: d
    })
  };
  c.n = function(a) {
    var b = a && a.__esModule ? function() {
      return a["default"]
    } : function() {
      return a
    };
    c.d(b, "a", b);
    return b
  };
  c.o = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  c.p = "//vr0.6rooms.com/tao/v11/";
  c.oe = function(a) {
    console.error(a);
    throw a;
  };
  return c(c.s = "mufe")
})({
  "+6/g": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("6e6d47")]).then(function(c) {
        b(a("rT57"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "+itZ": function(b, c, a) {
    a.d(c, "g", function() {
      return d
    });
    a.d(c, "f", function() {
      return f
    });
    a.d(c, "e", function() {
      return e
    });
    a.d(c, "a", function() {
      return h
    });
    a.d(c, "c", function() {
      return k
    });
    a.d(c, "d", function() {
      return l
    });
    a.d(c, "E", function() {
      return g
    });
    a.d(c, "h", function() {
      return m
    });
    a.d(c, "D", function() {
      return q
    });
    a.d(c, "F", function() {
      return r
    });
    a.d(c, "i", function() {
      return n
    });
    a.d(c, "b", function() {
      return p
    });
    a.d(c, "y", function() {
      return t
    });
    a.d(c, "x", function() {
      return u
    });
    a.d(c, "B", function() {
      return v
    });
    a.d(c, "A", function() {
      return w
    });
    a.d(c, "C", function() {
      return x
    });
    a.d(c, "z", function() {
      return y
    });
    a.d(c, "j", function() {
      return z
    });
    a.d(c, "k", function() {
      return A
    });
    a.d(c, "m", function() {
      return B
    });
    a.d(c, "w", function() {
      return C
    });
    a.d(c, "l", function() {
      return D
    });
    a.d(c, "v", function() {
      return E
    });
    a.d(c, "n", function() {
      return F
    });
    a.d(c, "o", function() {
      return G
    });
    a.d(c, "p", function() {
      return H
    });
    a.d(c, "q", function() {
      return I
    });
    a.d(c, "r", function() {
      return J
    });
    a.d(c, "s", function() {
      return K
    });
    a.d(c, "t", function() {
      return L
    });
    a.d(c, "u", function() {
      return M
    });
    var d = "//vr0.6rooms.com/img/emotion",
      f = [32, 32],
      e = {
        0: "/\u72c2\u7b11",
        1: "/\u5927\u7b11",
        2: "/\u60ca\u8bb6",
        3: "/\u5bb3\u7f9e",
        4: "/\u7a83\u7b11",
        5: "/\u53d1\u6012",
        6: "/\u5927\u54ed",
        7: "/\u8272\u8272",
        8: "/\u574f\u7b11",
        9: "/\u706b\u5927",
        10: "/\u6c57",
        11: "/\u5978\u7b11",
        12: "/\u6b22\u8fce",
        13: "/\u518d\u89c1",
        14: "/\u767d\u773c",
        15: "/\u6316\u9f3b",
        16: "/\u9876",
        17: "/\u80dc\u5229",
        18: "/\u6b27\u8036",
        19: "/\u62b1\u62f3",
        20: "/\u56e7",
        21: "/\u6de1\u5b9a",
        22: "/\u7f8e\u5973",
        23: "/\u9753\u4ed4",
        24: "/\u795e\u9a6c",
        25: "/\u5f00\u5fc3",
        26: "/\u7ed9\u529b",
        27: "/\u98de\u543b",
        28: "/\u7728\u773c",
        29: "/V5",
        30: "/\u6765\u5427",
        31: "/\u56f4\u89c2",
        32: "/\u98d8\u8fc7",
        33: "/\u5730\u96f7",
        34: "/\u83dc\u5200",
        35: "/\u5e05",
        36: "/\u5ba1\u89c6",
        37: "/\u65e0\u8bed",
        38: "/\u65e0\u5948",
        39: "/\u4eb2\u4eb2",
        40: "/\u52fe\u5f15",
        41: "/\u540e\u540e",
        42: "/\u5410\u8840",
        44: "/\u5a9a\u773c",
        45: "/\u6101\u4eba",
        46: "/\u80bf\u4e48\u4e86",
        47: "/\u8c03\u620f",
        48: "/\u62bd",
        49: "/\u54fc\u54fc",
        50: "/bs",
        52: "/\u9e21\u51bb",
        53: "/\u773c\u998b",
        54: "/\u70ed\u6c57",
        55: "/\u8f93",
        56: "/\u77f3\u5316",
        57: "/\u8511\u89c6",
        58: "/\u54ed",
        59: "/\u9a82"
      },
      h = "allowEdit",
      k = "denyEdit",
      l = "denyEditIfExit",
      g = "_null_",
      m = [463],
      q = 44,
      r = 58,
      n = /^(?:1[3-9]\d)\d{5}(\d{3}|\*{3})$/,
      p = 1900000047,
      t = 2,
      u = 7,
      v = 8,
      w = 9,
      x = 10,
      y = 11,
      z = "8667",
      A = "7570",
      B = "7569",
      C = "7105",
      D = "7104",
      E = "7103",
      F = "7116",
      G = "7117",
      H = "7118",
      I = "7119",
      J = "7120",
      K = "8600",
      L = "8601",
      M = "8602"
  },
  "/2I4": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("d9e2c1")]).then(function(c) {
        b(a("npy1"))
      }.bind(null,
        a)).catch(a.oe)
    }
  },
  "/UD6": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("41b0e3")]).then(function(c) {
        b(a("PjAs"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "/ule": function(b, c, a) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    c.Browser = void 0;
    b = a("agns");
    a = function() {
      this._detect()
    };
    (0, b.mix)(a.prototype, {
      isdesktop: function() {
        return !/Android|webOS|iPhone|iPad|iPod|BB10|IEMobile/i.test(this._ua())
      },
      isiOS: function() {
        var a = this;
        return ["iPhone", "iPad", "iPod"].some(function(b) {
          return -1 < a._ua().indexOf(b)
        })
      },
      issiOS: function() {
        return this.isiOS() && 0 > this._ua().indexOf("iPad")
      },
      getiOSVersion: function() {
        var a = this.isiOS() && this._ua().match(/OS\s+([\d_]+)/);
        return a && parseFloat(a[1].replace("_", ".")) || 0
      },
      isandroid: function() {
        return /android/i.test(this._ua())
      },
      isnexus: function() {
        return -1 < this._ua().toLowerCase().indexOf("nexus")
      },
      ispixel: function() {
        return -1 < this._ua().indexOf("Pixel Build")
      },
      getandroidVersion: function() {
        var a = parseFloat(this._ua().slice(this._ua().indexOf("Android") + 8));
        return this.isandroid() ?
          isNaN(a) ? 5 : a : 0
      },
      iswindows: function() {
        return /windows phone/i.test(this._ua())
      },
      isuc: function() {
        return -1 < this._ua().indexOf("UCBrowser")
      },
      isqq: function() {
        return -1 < this._ua().indexOf("MQQBrowser") && !this.iswechat()
      },
      iswechat: function() {
        return /micromessenger/i.test(this._ua())
      },
      isbaidu: function() {
        return /baidubrowser/i.test(this._ua())
      },
      isbaiduApp: function() {
        return /baiduboxapp/i.test(this._ua())
      },
      isweibo: function() {
        return /weibo/i.test(this._ua())
      },
      getweiboVersion: function() {
        var a = this._ua(),
          a = /__weibo__([\d.]+)/i.exec(a),
          b = 0;
        a && (b = parseFloat(a[1]));
        return b
      },
      isxiaomi: function() {
        return /miuibrowser/i.test(this._ua())
      },
      isoppo: function() {
        return /oppobrowser/i.test(this._ua())
      },
      ischrome: function() {
        return /chrome|chromium/i.test(this._ua())
      },
      getchromeVersion: function() {
        var a = this._ua().match(/Chrom(e|ium)\/([0-9]+)\./);
        return a ? parseInt(a[2], 10) : 0
      },
      preventDefaultInTouchendCanScroll: function() {
        var a = /chrome\/(\d+)/i.exec(this._ua());
        return this.isiOS() || a && 32 < a[1]
      },
      getQuickAppInfo: function() {
        var a = this._ua(),
          a = (new RegExp([/\s+hap\//,
            /([^/]+?)\//, /([^/]+?)\s+([^/]+?)\//, /([^/]+?)\s+([^/]+?)\//, /([\d.]+)\s+\((.*)\)$/
          ].map(function(a) {
            return a.source
          }).join(""))).exec(a),
          b = null;
        if (a) {
          b = {
            platformVersion: a[1],
            brand: a[2],
            platformAppName: a[3],
            platformAppVersion: a[4],
            appName: a[5],
            appVersion: a[6]
          };
          try {
            b.origin = JSON.parse(a[7])
          } catch (c) {
            b.origin = null
          }
        }
        return b
      },
      _ua: function() {
        return window.navigator.userAgent
      },
      _detect: function() {
        for (var a in this) 0 == a.indexOf("is") && "function" == typeof this[a] ? this[a.slice(2)] = this[a]() : 0 == a.indexOf("get") &&
          "function" == typeof this[a] && (this[a.slice(3)] = this[a]())
      }
    });
    c.Browser = a;
    c.default = new a
  },
  "0535": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("6ea699")]).then(function(c) {
        b(a("dqGa"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "0Rtj": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("9cd23c")]).then(function(c) {
        b(a("7NWm"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "4jMX": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("864157")]).then(function(c) {
        b(a("3oFU"))
      }.bind(null,
        a)).catch(a.oe)
    }
  },
  "5Op0": function(b, c) {
    b.exports = _SIX_ROOMS_DLL_
  },
  "6pbv": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("f95aeb"), a.e("519e2b")]).then(function(c) {
        b(a("YG21"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "6u9L": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("3c5375")]).then(function(c) {
        b(a("hpjB"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "7J3M": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("83bf51")]).then(function(c) {
        b(a("kofm"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "8Rz6": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("017ad1")]).then(function(c) {
        b(a("SpjI"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "8dUd": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("50ad0d")]).then(function(c) {
        b(a("zSbD"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "91EP": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("e77ee6")]).then(function(c) {
        b(a("oQre"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  ASCD: function(b, c, a) {
    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    c.Histo = void 0;
    b = a("vzCy");
    b = d(b);
    var f = a("agns"),
      e = a("/ule"),
      h = d(e);
    a = a("TkXE");
    var k = d(a);
    a = function g(a) {
      g.superclass.constructor.call(this);
      this.spa = !a && this._supportPushState();
      this._current = this.getPath();
      this._popstateHandler = this._popstateHandler.bind(this);
      this._getGlobalScope().addEventListener("popstate", this._popstateHandler, !1)
    };
    (0, f.extend)(a, b.default, {
      getPath: function() {
        var a = this._getLocation();
        return a.pathname + a.search
      },
      push: function(a, b) {
        this._changeState(a, b)
      },
      replace: function(a, b) {
        this._changeState(a, b, !0)
      },
      destroy: function() {
        this._getGlobalScope().removeEventListener("popstate", this._popstateHandler, !1)
      },
      _getGlobalScope: function() {
        return window
      },
      _getLocation: function() {
        return window.location
      },
      _getHistory: function() {
        return window.history
      },
      _supportPushState: function() {
        var a = h.default.ios && (5 > h.default.getiOSVersion() || h.default.chrome) || h.default.android && !h.default.chrome && 4.2 > h.default.getandroidVersion();
        return "pushState" in
          this._getHistory() && !a
      },
      _getPathBaseOnCurrent: function(a, b) {
        var k = "";
        a.host || (k = (a.pathname || b.pathname) + a.search);
        return k
      },
      _popstateHandler: function(a) {
        a = k.default.parse(this._current);
        var b = this.getPath(),
          c = k.default.parse(b);
        this._current = b;
        this.emit("change", b);
        a.pathname == c.pathname && this.emit("change-query", b)
      },
      _changeState: function(a, b, c) {
        var d = this._getLocation(),
          h = this._current,
          e = k.default.parse(h),
          t = k.default.parse(a),
          t = this._getPathBaseOnCurrent(t, e),
          u = k.default.parse(t);
        if (t && h != t && this.spa) this.emit(c ?
          "replace" : "push", a), this._getHistory()[c ? "replaceState" : "pushState"](b || null, null, t), this._current = t, this.emit("change", t), e.pathname == u.pathname && this.emit("change-query", t);
        else d[c ? "replace" : "assign"](a)
      }
    });
    c.Histo = a;
    c.default = new a
  },
  Biso: function(b, c, a) {
    b = a("vzCy");
    b = a.n(b);
    var d = a("agns");
    a.n(d);
    var f = a("KV26"),
      e = "",
      h = "",
      k = function(a, b) {
        this.handler = [];
        this.webpackContext = a;
        this.baseurl = b || "";
        this._histoChangeHandler = this._histoChangeHandler.bind(this);
        this._webpackCallback = this._webpackCallback.bind(this);
        this._samePageComponent = !1;
        this._timeoutTimer = null;
        f.a.on("change", this._histoChangeHandler)
      };
    Object(d.extend)(k, b.a, {
      addHandler: function() {
        for (var a = [].slice.call(arguments, 0), a = Array.isArray(a[0]) ? a[0] : [
            [a[0], a[1]]
          ], b = 0; b < a.length; b++) {
          var c = a[b],
            d = c[0],
            c = c[1];
          c instanceof k && (c.__parentRouter = this, c._teardownHistoChangeHandler());
          this.handler.push({
            path: d,
            handler: c
          })
        }
      },
      navigate: function(a) {
        var b = a.split("?")[0];
        if (h != b) {
          var c = void 0,
            d = void 0;
          clearTimeout(this._timeoutTimer);
          for (d = 0; d < this.handler.length; d++) {
            var f =
              this.handler[d],
              n = f.path,
              p = f.handler,
              t = f.reg;
            t || (t = new RegExp("^" + this.baseurl.replace("/", "\\/") + n.replace("/", "\\/") + "$"), f.reg = t);
            if (t.test(b)) {
              if (p instanceof k) return p.navigate(a);
              c = "./" + p + ".js";
              d = this.webpackContext.resolve(c);
              this._samePageComponent = e == d;
              h = b;
              e = d;
              break
            }
          }
          h != b ? location.assign(a) : (this._triggerEvent("match"), this._timeoutTimer = setTimeout(this._doTimeout, 6E3), this.webpackContext(c)(this._webpackCallback))
        }
      },
      _triggerEvent: function() {
        var a = [].slice.call(arguments, 0),
          b = !0;
        this.emit.apply(this,
          a.concat([function() {
            b = !1
          }]));
        this.__parentRouter && b && this.__parentRouter._triggerEvent.apply(this.__parentRouter, a)
      },
      _webpackCallback: function(a) {
        clearTimeout(this._timeoutTimer);
        this._triggerEvent("ready", a, this._samePageComponent)
      },
      _teardownHistoChangeHandler: function() {
        f.a.removeListener("change", this._histoChangeHandler)
      },
      _doTimeout: function() {
        location.reload()
      },
      _histoChangeHandler: function(a) {
        this.__parentRouter || this.navigate(a)
      }
    });
    c.a = k
  },
  DQ6v: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"),
        a.e("190abb")
      ]).then(function(c) {
        b(a("Ihaa"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "DT0+": function(b, c, a) {
    b.exports = a("5Op0")(20)
  },
  F1ev: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("d7ee92")]).then(function(c) {
        b(a("Lxp/"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  GiK3: function(b, c, a) {
    b.exports = a("5Op0")(0)
  },
  HANh: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("29d359")]).then(function(c) {
        b(a("pmJ7"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  IVjL: function(b, c, a) {
    b = a("V6zD");
    var d = a.n(b);
    b = a("/ule");
    var f = a.n(b),
      e = a("xXFV"),
      h = a("P1Lv"),
      k = a("n8at");
    b = a("GiK3");
    var l = a.n(b);
    b = a("DT0+");
    a = a.n(b)()({
      displayName: "AppContainer",
      _container: null,
      _progressBar: null,
      _timer: null,
      _clickBusterCoordinate: [],
      render: function() {
        return l.a.createElement("div", {
          className: "appcontainer",
          ref: this.refSelf
        }, l.a.createElement("div", {
          className: "appcontainer-progress"
        }, l.a.createElement("b", {
          ref: this.refProgressBar
        })), this.props.children)
      },
      componentDidMount: function() {
        var a = this._container;
        if (e.b.inApp() ||
          !f.a.preventDefaultInTouchendCanScroll() || f.a.iOS) a.addEventListener("click", this.busterClickHandler, !0), d.a.subscribe("fastclick", this.pushClickBusterCoordinate);
        d.a.subscribe("router-start-navigate", this.wriggleProgress)
      },
      componentDidUpdate: function() {
        this.finishPrograss()
      },
      componentWillUnmount: function() {
        var a = this._container;
        a && a.removeEventListener("click", this.busterClickHandler, !0);
        d.a.unsubscribe("fastclick", this.pushClickBusterCoordinate);
        d.a.unsubscribe("router-start-navigate", this.wriggleProgress);
        clearTimeout(this._timer)
      },
      componentDidCatch: function(a, b) {
        var c = document.getElementById("error_container");
        Object(k.a)({
          msg: a.toString(),
          stack: b.componentStack || a.stack || ""
        });
        if (c) {
          var d = location.href,
            n = Object(h.a)();
          c.style.cssText = "\n                box-sizing: border-box;\n                display: block;\n                width: 100%;\n                padding: 10px;\n                position: absolute;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                line-height: 1.6";
          c.innerHTML = "\n                <h1>Orz \u7cdf\u7cd5\uff0c\u51fa\u9519\u4e86\u3002</h1>\n                <p>" + a + '</p>\n                <p>\n                    \u62b1\u6b49\uff0c\u7f51\u9875\u9047\u5230\u4e86\u4e00\u4e2a\u9519\u8bef\uff0c\u60a8\u53ef\u4ee5\n                    <a href="' + d + '">\u5237\u65b0\u9875\u9762\u91cd\u8bd5</a>\n                    \u6216\u8005\n                    <a href="' + n + '">\u4e0b\u8f7d\u5b89\u88c5APP</a>\n                    \u7ee7\u7eed\u4f7f\u7528\u6211\u4eec\u7684\u670d\u52a1\u3002\n                </p>\n                <details open><pre>' +
            b.componentStack + "</pre></details>\n            "
        }
      },
      wriggleProgress: function() {
        var a = this._progressBar;
        a && (a.style.visibility = "visible", a.style.transitionDuration = a.style.WebkitTransitionDuration = "8s", a.style.width = "88%")
      },
      finishPrograss: function() {
        var a = this._progressBar;
        a && (a.style.transitionDuration = a.style.WebkitTransitionDuration = ".5s", a.style.width = "100%", clearTimeout(this._timer), this._timer = setTimeout(this.hideProgress, 500))
      },
      hideProgress: function(a) {
        if (a = this._progressBar) a.style.visibility =
          "hidden", a.style.transitionDuration = a.style.WebkitTransitionDuration = "0s", a.style.width = "0%"
      },
      busterClickHandler: function(a) {
        for (var b = 0; b < this._clickBusterCoordinate.length; b += 2) {
          var c = this._clickBusterCoordinate[b + 1];
          36 > Math.abs(this._clickBusterCoordinate[b] - a.clientX) && 36 > Math.abs(c - a.clientY) && (a.preventDefault(), a.stopPropagation())
        }
      },
      pushClickBusterCoordinate: function(a, b) {
        this._clickBusterCoordinate.push(a, b);
        setTimeout(this.popClickBusterCoordinate, 500)
      },
      popClickBusterCoordinate: function() {
        this._clickBusterCoordinate.splice(0,
          2)
      },
      refSelf: function(a) {
        this._container = a
      },
      refProgressBar: function(a) {
        this._progressBar = a
      }
    });
    c.a = a
  },
  If9W: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("de973d")]).then(function(c) {
        b(a("soPI"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  JYnN: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("b5faa2")]).then(function(c) {
        b(a("yTLQ"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  KV26: function(b, c, a) {
    b = a("V5lc");
    var d = a.n(b);
    b = a("TkXE");
    var f = a.n(b);
    b = a("/ule");
    b = a.n(b);
    var e = a("ASCD"),
      h = a.n(e);
    a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
      return typeof a
    } : function(a) {
      return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    };
    var k = function() {
        return function(a, b) {
          if (Array.isArray(a)) return a;
          if (Symbol.iterator in Object(a)) {
            var c = [],
              k = !0,
              g = !1,
              d = void 0;
            try {
              for (var h = a[Symbol.iterator](), e; !(k = (e = h.next()).done) && (c.push(e.value), !b || c.length !== b); k = !0);
            } catch (l) {
              g = !0, d = l
            } finally {
              try {
                if (!k && h["return"]) h["return"]()
              } finally {
                if (g) throw d;
              }
            }
            return c
          }
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      }(),
      l = function() {
        function a(b, c) {
          for (var k = 0; k < c.length; k++) {
            var g = c[k];
            g.enumerable = g.enumerable || !1;
            g.configurable = !0;
            "value" in g && (g.writable = !0);
            Object.defineProperty(b, g.key, g)
          }
        }
        return function(b, c, k) {
          c && a(b.prototype, c);
          k && a(b, k);
          return b
        }
      }();
    h.a.destroy();
    var h = function() {
        function a(b) {
          if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
          this._max = b;
          this._trace = this.getInitial()
        }
        l(a, [{
          key: "getInitial",
          value: function() {
            var a = (d.a.get("histo_trace") || "").split("|"),
              b = k(a, 2),
              a = b[1],
              b = b[0].split(",");
            if (!b[0] || 6E4 < Date.now() - Number(a || 0)) a = location.pathname, b = [this.ignore(a) ? "/" : a];
            return b
          }
        }, {
          key: "push",
          value: function(a) {
            var b = this.last(),
              c = this._trace,
              k = this._max;
            this.ignore(a) || a == b || (this.isSerialRoomPage(a, b) && this.pop(), c.push(a));
            c.length > k && (c = c.slice(-k));
            this._trace = c;
            this.save()
          }
        }, {
          key: "last",
          value: function() {
            var a = this._trace;
            return a[a.length - 1]
          }
        }, {
          key: "lastButOne",
          value: function() {
            var a = this._trace;
            return a[a.length - 2]
          }
        }, {
          key: "enough",
          value: function() {
            return 2 <= this._trace.length
          }
        }, {
          key: "pop",
          value: function() {
            this._trace.pop();
            this.save()
          }
        }, {
          key: "save",
          value: function() {
            d.a.set("histo_trace", this._trace.join() + "|" + Date.now())
          }
        }, {
          key: "ignore",
          value: function(a) {
            return -1 < a.indexOf("/pay") || -1 < a.indexOf("/login") || -1 < a.indexOf("/reg") || -1 < a.indexOf("/operations") || -1 < a.indexOf("/account") || -1 < a.indexOf("/event")
          }
        }, {
          key: "isSerialRoomPage",
          value: function(a, b) {
            var c =
              /^\/\d+\/?$/;
            return c.test(a.split("?")[0]) && c.test(b.split("?")[0])
          }
        }]);
        return a
      }(),
      g = "object" == ("undefined" === typeof JSInterface ? "undefined" : a(JSInterface)),
      m = new e.Histo(b.a.uc || g),
      q = new h(3),
      r = function(a, b, c) {
        if (g && 0 < location.search.indexOf("ummeda5144")) a = f.a.parse(a), b = location, a.protocol = a.protocol || b.protocol, a.hostname = a.hostname || b.hostname, a.port = a.port || b.port, a = f.a.parse(a), JSInterface.loadUrlNewPage(a, "\u516d\u95f4\u623f", !1);
        else m["push" == c ? "_push" : "_replace"](a, b)
      };
    m._push = m.push;
    m._replace = m.replace;
    m.push = function(a, b) {
      r(a, b, "push")
    };
    m.replace = function(a, b) {
      r(a, b, "replace")
    };
    m.on("change", function(a) {
      q.push(a)
    });
    m.back = function() {
      if (q.enough()) {
        var a = q.lastButOne();
        q.pop();
        this.push(a)
      } else this.push("/")
    };
    c.a = m
  },
  KV30: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("2c9bbd")]).then(function(c) {
        b(a("QabO"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  Kh91: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("1464cb")]).then(function(c) {
        b(a("UitE"))
      }.bind(null,
        a)).catch(a.oe)
    }
  },
  KqiP: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("a828cd")]).then(function(c) {
        b(a("aQNA"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  MRHh: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("b9aaad")]).then(function(c) {
        b(a("XTc4"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "NCS/": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("c54f4c")]).then(function(c) {
        b(a("9gKx"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "O+kd": function(b, c, a) {
    var d = a("agns");
    a.n(d);
    b = a("V5lc");
    var f = a.n(b);
    b = a("u4sq");
    var e = a.n(b);
    b = a("TkXE");
    var h = a.n(b);
    b = a("/ule");
    var k = a.n(b);
    b = a("V6zD");
    var l = a.n(b),
      g = a("KV26"),
      m = a("fiJj"),
      q = a("sHCI"),
      r = a("cLh8"),
      n = a("xXFV");
    a = function() {
      var a = e.a.getItem("userinfo"),
        b = e.a.getItem("ticket") || "",
        c = e.a.getItem("guestid") || "",
        a = a ? JSON.parse(a) : null;
      this.ticket = b;
      this.uid = (this.info = a) ? a.uid : "";
      this.guestID = c;
      b && this.refresh(b);
      n.b.inAndroidApp() && this.synchronizeWithApp();
      l.a.subscribe("user-state-broken", this._userStateBrokenHandler.bind(this));
      l.a.subscribe("user-state-receive-new-ticket", this.refresh.bind(this))
    };
    Object(d.mix)(a.prototype, {
      isLogin: function() {
        return !!this.ticket
      },
      refresh: function(a) {
        var b = this;
        return new Promise(function(c, k) {
          var g = b.info,
            h = function(a) {
              k(a)
            },
            d = function() {
              var a = Error((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "") + ": \u767b\u5f55\u72b6\u6001\u4e22\u5931\u3002");
              a.name = "LoginStatusError";
              return a
            };
          if (a || b.isLogin()) {
            a = b.ticket = a || b.ticket;
            var f = function(b) {
              "001" == b.flag ? (g = this.info = Object(q.a)(b.content),
                this.uid = g.uid, e.a.setItem("userinfo", JSON.stringify(g)), l.a.publish("user-state-update", g.uid, a, g), c(g)) : k(d(b.flag));
              f = null
            }.bind(b);
            l.a.publish("user-state-update", g ? g.uid : "", a, g);
            e.a.setItem("ticket", a);
            Object(m.b)("coop-mobile-getUserInfo.php", {
              encpass: a
            }).then(f, h)
          } else if (b.guestID) k(d());
          else {
            var n = function(a) {
              "001" == a.flag ? (this.guestID = a.content, e.a.setItem("guestid", this.guestID)) : alert(a.content);
              k(d());
              n = null
            }.bind(b);
            Object(m.b)("coop-mobile-getGuestUid.php").then(n, h)
          }
        })
      },
      synchronizeWithApp: function() {
        if (n.b.inApp()) {
          var a =
            n.b.getTicket();
          a && "(null)" != a ? a != this.ticket && this.refresh(a) : this.logout()
        }
      },
      logout: function(a) {
        var b = this.ticket;
        e.a.removeItem("ticket");
        e.a.removeItem("userinfo");
        this.ticket = this.info = null;
        a && location.assign(h.a.make("//passport.6.cn/sso/logout.php", {
          domain: k.a.wechat ? "wechat" : "html5",
          tk: b
        }));
        l.a.publish("user-state-update", "", "", null)
      },
      toLogin: function(a, b, c) {
        this._toLoginOrRegister(!0, a, b, c)
      },
      toReg: function(a, b) {
        this._toLoginOrRegister(!1, a, b, null)
      },
      getThirdpartyLoginUrl: function(a, b) {
        b = this._createNextUrl(b,
          h.a.parse(g.a.getPath()));
        if (0 == b.indexOf("/")) {
          var c = window.location;
          b = c.protocol + "//" + c.host + b
        }
        var c = "//" + __pda.apidomain + "/coopapi/partner/accredit.php",
          e = {
            domain: k.a.wechat ? "wechat" : "html5",
            next_action: b
          };
        switch (a) {
          case "qq":
            Object(d.mix)(e, {
              taye: 1047
            });
            break;
          case "wechat":
            Object(d.mix)(e, {
              taye: 1073,
              apptype: 2E4
            });
            break;
          case "weibo":
            Object(d.mix)(e, {
              taye: 1003
            })
        }
        return h.a.make(c, e)
      },
      _createNextUrl: function(a, b) {
        return a || (this._isInLoginOrRegPage(b) ? "/" : b.href)
      },
      _isInLoginOrRegPage: function(a) {
        return "/login" ==
          a.pathname || "/reg" == a.pathname
      },
      _toLoginOrRegister: function(a, b, c, k) {
        var e = h.a.parse(g.a.getPath());
        b = this._createNextUrl(b, e);
        n.b.inApp() ? (c = n.b.getTicket()) && "(null)" != c ? location.assign(h.a.make("/app/login", {
          next: b,
          ticket: c
        })) : n.b.toLogin() : r.a.conf("account") ? (f.a.set("coop-next", b, {
          path: "/coop/login"
        }), a ? r.a.toLogin(l.a) : r.a.toReg(l.a)) : (k = Object(d.merge)(k || {}, {
          next: b
        }), a = h.a.make(a ? "/login" : "/reg", k), c ? location.replace(h.a.make(a, {
          forcereload: 1
        })) : g.a.replace(a))
      },
      _userStateBrokenHandler: function(a) {
        a ==
          this.ticket && this.logout()
      }
    });
    var p = new a;
    window.addEventListener("DOMContentLoaded", function() {
      n.b.inIOSApp() && p.synchronizeWithApp()
    }, !1);
    c.a = p
  },
  O27J: function(b, c, a) {
    b.exports = a("5Op0")(13)
  },
  P0gj: function(b, c, a) {
    b.exports = a.p + "huawei-quickapp-b1121ac6974b4848653a05d38e10c3ca.js"
  },
  P1Lv: function(b, c, a) {
    c.a = function(a, b) {
      var c = f.a.make("http://a.app.qq.com/o/simple.jsp?src=mv6cn", {
          pkgname: "cn.v6.xiuchang"
        }),
        g = f.a.make("http://a.app.qq.com/o/simple.jsp?src=mv6cn", {
          pkgname: "cn.v6.sixrooms"
        });
      return 5776 ==
        e.a.get() ? "//m.v.6.cn/event/download-360" : d.a.nexus || d.a.pixel ? "https://play.google.com/store/apps/details?id=cn.v6.live" : d.a.wechat ? f.a.make(d.a.iOS ? g : c, {
          android_schema: b ? "sixroomsslzb://roomactivity/" + b + "?name=hengwei" : void 0
        }) : d.a.iOS ? "https://itunes.apple.com/cn/app/%E7%A7%80%E5%9C%BAlive/id1212710256?mt=8" : f.a.make("//v.6.cn/coop/mobile/index.php?padapi=coop-mobile-dlApp.php", {
          channel: a || e.a.getInfo().androidApkReft
        })
    };
    b = a("/ule");
    var d = a.n(b);
    b = a("TkXE");
    var f = a.n(b),
      e = a("VSEd")
  },
  PtH6: function(b,
    c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("308f0b")]).then(function(c) {
        b(a("fBoG"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  Qngl: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("d5b567")]).then(function(c) {
        b(a("7zCZ"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  RfPX: function(b, c, a) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    c.default = function(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        c = b.method,
        c = void 0 === c ? "GET" : c,
        g = b.data,
        g = void 0 === g ? null : g,
        m = b.dataType,
        q = void 0 === m ? "json" : m,
        m = b.timeout,
        m = void 0 === m ? 0 : m,
        r = b.withCredentials,
        r = void 0 === r ? !1 : r,
        b = b.context,
        n = void 0 === b ? null : b,
        p = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : e)(),
        t, u, b = new Promise(function(a, b) {
          t = a;
          u = b
        }),
        v = function(b) {
          var c = this.status,
            g = this.responseText;
          if ("timeout" == b.type) u(f("TimeoutError", a, n));
          else if ("error" == b.type) u(f("NetworkError", a, n));
          else if (200 <= c && 300 > c || 304 == c) try {
            g = "xml" == q ? this.responseXML : "json" == q ? JSON.parse(g) : g, t(n ? {
              context: n,
              response: g
            } : g)
          } catch (k) {
            u(f("ParseJSONError",
              a, n))
          } else u(f("HTTPError" + c, a, n));
          p = v = null
        };
      "POST" != c && g && (a = d.default.make(a, g));
      p.open(c, a, !0);
      p.timeout = m;
      p.withCredentials = r;
      p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      p.onload = p.onerror = p.ontimeout = v;
      p.send("POST" == c && g ? d.default.param(g) : null);
      b.abort = function() {
        p && (p.abort(), u(f("AbortedManuallyError", a, n)))
      };
      return b
    };
    var d = (b = a("TkXE")) && b.__esModule ? b : {
        default: b
      },
      f = function(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
          c = 2 <
          arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
          g = Error(a + (b ? ": " + b : b));
        g.name = "AjaxError";
        g.type = a;
        g.url = b;
        g.context = c;
        return g
      },
      e = function() {
        return new XMLHttpRequest
      }
  },
  SEkT: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("8fce9c")]).then(function(c) {
        b(a("7X2N"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  SbDN: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("07641d")]).then(function(c) {
        b(a("35IQ"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  Sjrs: function(b, c, a) {
    b.exports =
      a.p + "baidupae-f1cd413535433022fdbd99b0430835f0.js"
  },
  TcRv: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("52bf76")]).then(function(c) {
        b(a("kD6Q"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  TekZ: function(b, c, a) {
    function d(b) {
      return a(f(b))
    }

    function f(a) {
      var b = e[a];
      if (!(b + 1)) throw Error("Cannot find module '" + a + "'.");
      return b
    }
    var e = {
      "./alipay.js": "YK/T",
      "./buyprop.js": "oeSr",
      "./callback.js": "F1ev",
      "./collaborate.js": "NCS/",
      "./huawei.js": "hWe0",
      "./list.js": "KqiP",
      "./mo9pay.js": "0Rtj",
      "./oneyuan.js": "SbDN",
      "./paypal.js": "7J3M",
      "./vpay8.js": "s5Gc",
      "./wechat.js": "MRHh",
      "./wechath5.js": "m/NM"
    };
    d.keys = function() {
      return Object.keys(e)
    };
    d.resolve = f;
    b.exports = d;
    d.id = "TekZ"
  },
  TkXE: function(b, c, a) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var d = function() {
        return function(a, b) {
          if (Array.isArray(a)) return a;
          if (Symbol.iterator in Object(a)) {
            var c = [],
              d = !0,
              h = !1,
              e = void 0;
            try {
              for (var f = a[Symbol.iterator](), p; !(d = (p = f.next()).done) && (c.push(p.value), !b || c.length !== b); d = !0);
            } catch (t) {
              h = !0, e = t
            } finally {
              try {
                if (!d &&
                  f["return"]) f["return"]()
              } finally {
                if (h) throw e;
              }
            }
            return c
          }
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      }(),
      f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
        return typeof a
      } : function(a) {
        return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      },
      e = a("agns"),
      h = new RegExp([/^(https?:)?(?:\/\/)?/, /((?:[\d\w.-]+\.[a-z]{2,6}|[\d.]+))?/, /(:\d+)?/, /([^?#]+)?/, /(\?[^#]*)?/, /(#.*)?$/].map(function(a) {
        return a.source
      }).join(""));
    c.default = {
      rurl: h,
      parse: function(a) {
        var b;
        if ("string" == typeof a) {
          var c = b = h.exec(a);
          if (c) {
            b = c[1] || "";
            var d = c[2] || "",
              e = c[3] ? c[3].slice(1) : "";
            b = {
              protocol: b,
              hostname: d,
              port: e,
              host: d + (e ? ":" + e : ""),
              pathname: c[4] || "",
              search: c[5] && "?" != c[5] ? c[5] : "",
              hash: c[6] && "#" != c[6] ? c[6] : "",
              href: a
            }
          }
        } else "object" == ("undefined" === typeof a ? "undefined" : f(a)) && (b = (a.protocol ? a.protocol + "//" : a.hostname ? "//" : "") + (a.hostname || "") + (a.port ? ":" + a.port : "") + (a.pathname || "") + (a.search || "") + (a.hash || ""));
        return b
      },
      make: function(a, b) {
        var c =
          this.parse(a),
          d = this.param(c.search),
          d = this.param((0, e.merge)(d, b));
        c.search = d ? "?" + d : "";
        return this.parse(c)
      },
      param: function(a) {
        var b = this,
          c;
        if ("object" == ("undefined" === typeof a ? "undefined" : f(a))) {
          var h = [];
          Object.keys(a).forEach(function(b) {
            var c = a[b];
            if ("undefined" !== typeof c)
              if (Array.isArray(c))
                for (var g = 0; g < c.length; g++) h.push(b + "[]=" + encodeURIComponent(c[g]));
              else h.push(b + "=" + encodeURIComponent(c))
          });
          c = h.join("&")
        } else "string" == typeof a && (a = 0 == a.indexOf("?") || 0 == a.indexOf("#") ? a.slice(1) : a, c = {}, a && a.split("&").forEach(function(a, h) {
          var k = a.split("="),
            k = d(k, 2);
          c[k[0]] = b.decode(k[1])
        }));
        return c
      },
      decode: function(a) {
        try {
          return decodeURIComponent(a)
        } catch (b) {
          if ("URIError" == b.name) return a;
          throw b;
        }
      }
    }
  },
  U9SZ: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("d4c6bb")]).then(function(c) {
        b(a("f0J4"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "US+S": function(b, c, a) {
    b.exports = a.p + "baidupae-15121209689d1201d49f1714f2b541ff.css"
  },
  "V/PV": function(b, c, a) {
    function d(b) {
      return a(f(b))
    }

    function f(a) {
      var b =
        e[a];
      if (!(b + 1)) throw Error("Cannot find module '" + a + "'.");
      return b
    }
    var e = {
      "./account/changealias.js": "WfAv",
      "./account/exchange-coin.js": "eI/3",
      "./account/knapsack.js": "X+pj",
      "./account/property.js": "ftHt",
      "./account/resetphone.js": "xdFo",
      "./account/setphone.js": "JYnN",
      "./account/verifyphone.js": "8dUd",
      "./appmate/audio-intercourse.js": "vNic",
      "./appmate/audio-wheel-game.js": "Qngl",
      "./appmate/call-of-battle.js": "U9SZ",
      "./appmate/gas-station.js": "DQ6v",
      "./appmate/privilege-of-mine.js": "ysXP",
      "./appmate/ranked-match-2018.js": "SEkT",
      "./appmate/ranked-match-playoff-2018.js": "If9W",
      "./downloadapp.js": "wLNx",
      "./family/synopsis.js": "v6qc",
      "./gameframe.js": "6u9L",
      "./index.js": "4jMX",
      "./liveplayer.js": "TcRv",
      "./login.js": "ZJGf",
      "./my-following.js": "/UD6",
      "./my-history.js": "rM5P",
      "./news.js": "0535",
      "./pay/alipay.js": "YK/T",
      "./pay/buyprop.js": "oeSr",
      "./pay/callback.js": "F1ev",
      "./pay/collaborate.js": "NCS/",
      "./pay/huawei.js": "hWe0",
      "./pay/list.js": "KqiP",
      "./pay/mo9pay.js": "0Rtj",
      "./pay/oneyuan.js": "SbDN",
      "./pay/paypal.js": "7J3M",
      "./pay/vpay8.js": "s5Gc",
      "./pay/wechat.js": "MRHh",
      "./pay/wechath5.js": "m/NM",
      "./profile-synopsis.js": "nogN",
      "./reg.js": "VtJj",
      "./room/common.js": "6pbv",
      "./search.js": "vtbi",
      "./song.js": "Kh91",
      "./test-hls-segmenting-server.js": "HANh",
      "./test-hls.js": "/2I4",
      "./test-socket.js": "mUzr",
      "./test.js": "8Rz6",
      "./v.js": "+6/g",
      "./video.js": "KV30",
      "./videoplayer.js": "PtH6",
      "./xianchang.js": "91EP"
    };
    d.keys = function() {
      return Object.keys(e)
    };
    d.resolve = f;
    b.exports = d;
    d.id = "V/PV"
  },
  V5lc: function(b, c, a) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var d = document;
    c.default = {
      _createCookieString: function(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
          l = a + "=" + (c ? encodeURIComponent(b) : b),
          g = d.expires,
          m = d.domain,
          q = d.path || "/";
        g instanceof Date && (l += ";expires=" + g.toUTCString());
        m && (l += ";domain=" + m);
        q && (l += ";path=" + q);
        !0 === d.secure && (l += ";secure");
        return l
      },
      _parseCookieString: function(a, b) {
        var c = null;
        if (a)
          for (var c = {}, d = a.split(/;\s/g), l, g = 0; g < d.length; g++) l = d[g].split("="), c[l[0]] = b ? decodeURIComponent(l[1]) : l[1];
        return c
      },
      get: function(a) {
        var b =
          this._parseCookieString(d.cookie, !0);
        return b && void 0 !== b[a] ? b[a] : null
      },
      set: function(a, b, c) {
        a = this._createCookieString(a, b, !0, c);
        d.cookie = a
      },
      remove: function(a) {
        a = this._createCookieString(a, "", !1, {
          expires: new Date(0)
        });
        d.cookie = a
      }
    }
  },
  V6zD: function(b, c, a) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    b = (b = a("vzCy")) && b.__esModule ? b : {
      default: b
    };
    a = a("agns");
    var d = function e() {
      e.superclass.constructor.call(this)
    };
    (0, a.extend)(d, b.default, {
      subscribe: function(a, b) {
        this.on(a, b)
      },
      unsubscribe: function(a,
        b) {
        b ? this.removeListener(a, b) : this.removeAllListeners(a)
      },
      publish: function(a) {
        this.emit.apply(this, [].slice.call(arguments, 0))
      }
    });
    c.default = new d
  },
  VSEd: function(b, c, a) {
    var d = a("agns");
    a.n(d);
    b = a("/ule");
    var f = a.n(b);
    b = a("TkXE");
    var e = a.n(b);
    b = a("u4sq");
    var h = a.n(b);
    b = a("V6zD");
    var k = a.n(b);
    a = function() {
      var a;
      try {
        a = JSON.parse(h.a.getItem("__referrer"))
      } catch (b) {
        a = 0;
        var c = window.location.search; - 1 < c.indexOf("src=ummeda") && (a = e.a.param(c), a = Number(a.src.slice(6)));
        a = {
          reft: a,
          androidApkReft: 0,
          showAppBanner: !1,
          ut: ""
        }
      }
      this._info = a;
      this._reject = this._resolve = null;
      this.promise = new Promise(function(a, b) {
        this._resolve = a;
        this._reject = b
      }.bind(this));
      k.a.subscribe("analyzeDone", this._analyzeDone.bind(this))
    };
    Object(d.mix)(a.prototype, {
      get: function() {
        return 5004 == this._info.reft ? 0 : this._info.reft
      },
      getInfo: function() {
        return this._info
      },
      isResolved: function() {
        return !!this._info.ut
      },
      isOfficial: function() {
        var a = this.get();
        return -1 < [0, 5005, 5904].indexOf(a)
      },
      _analyzeDone: function(a) {
        var b = this._info.ut;
        if (!b || b != a.t) {
          var b =
            a.r || 5004,
            c = a.a || 0,
            k = void 0;
          1131 == b && (c = 20091);
          0 == a.b ? k = !1 : 11 == a.b ? k = !0 : 10 == a.b && f.a.android ? k = !0 : 1 == a.b && f.a.ios && (k = !0);
          Object(d.mix)(this._info, {
            reft: b,
            androidApkReft: c,
            showAppBanner: k,
            ut: a.t || ""
          }, !0);
          h.a.setItem("__referrer", JSON.stringify(this._info))
        }
        this._resolve(this._info)
      }
    });
    c.a = new a
  },
  VtJj: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("dfcd6e")]).then(function(c) {
        b(a("A21b"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  WfAv: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"),
        a.e("134f19")
      ]).then(function(c) {
        b(a("ROkw"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "X+pj": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("3d59b7")]).then(function(c) {
        b(a("TIdP"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  "YK/T": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("c9ef71")]).then(function(c) {
        b(a("AFyd"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  YYRW: function(b, c, a) {
    function d(b) {
      return a(f(b))
    }

    function f(a) {
      var b = e[a];
      if (!(b + 1)) throw Error("Cannot find module '" + a + "'.");
      return b
    }
    var e = {
      "./changealias.js": "WfAv",
      "./exchange-coin.js": "eI/3",
      "./knapsack.js": "X+pj",
      "./property.js": "ftHt",
      "./resetphone.js": "xdFo",
      "./setphone.js": "JYnN",
      "./verifyphone.js": "8dUd"
    };
    d.keys = function() {
      return Object.keys(e)
    };
    d.resolve = f;
    b.exports = d;
    d.id = "YYRW"
  },
  ZJGf: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("c39b79")]).then(function(c) {
        b(a("s62I"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  agns: function(b, c, a) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var d = "function" === typeof Symbol &&
      "symbol" === typeof Symbol.iterator ? function(a) {
        return typeof a
      } : function(a) {
        return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      },
      f = c.isObject = function(a) {
        return "object" == ("undefined" === typeof a ? "undefined" : d(a)) && !!a
      },
      e = c.mix = function l(a, b, c, d, h) {
        var e, t, u;
        if (d && d.length)
          for (e = 0, t = d.length; e < t; ++e) u = d[e], b.hasOwnProperty(u) && (h && f(a[u]) ? l(a[u], b[u]) : !c && u in a || (a[u] = b[u]));
        else
          for (e in b) b.hasOwnProperty(e) && (h && f(a[e]) ? l(a[e], b[e], c, d, !0) : !c && e in
            a || (a[e] = b[e]));
        return a
      },
      h = c.merge = function() {
        for (var a = arguments, b = {}, c = 0, d = a.length; c < d; c++) e(b, a[c], !0);
        return b
      };
    c.extend = function(a, b, c, d) {
      if (!b || !a) return a;
      var h = Object.prototype,
        f = b.prototype,
        p = Object.create(f);
      a.prototype = p;
      p.constructor = a;
      a.superclass = f;
      b !== Object && f.constructor === h.constructor && (f.constructor = b);
      c && e(p, c, !0);
      d && e(a, d, !0);
      return a
    };
    c.omit = function() {
      var a = arguments[0],
        b = [].slice.call(arguments, 1),
        c = "function" == typeof b[0] ? b[0] : null,
        d = h({}, a);
      c ? Object.keys(d).forEach(function(a) {
        c(a) &&
          delete d[a]
      }) : b.forEach(function(a) {
        delete d[a]
      });
      return d
    }
  },
  cLh8: function(b, c, a) {
    var d = a("agns");
    a.n(d);
    b = function() {
      this.info = window.COLLABORATOR_INFO;
      this.conf("account") && Object(d.mix)(this, this.info, !1, ["toLogin", "toReg"]);
      this.conf("loginConfirm") && Object(d.mix)(this, this.info, !1, ["showLoginConfirm"])
    };
    b.prototype = {
      yes: function() {
        return !!this.info
      },
      text: function(a) {
        return this.yes() && this.info.text && this.info.text.get(a) || a
      },
      conf: function(a) {
        return this.yes() ? this.info.conf[a] : !1
      }
    };
    c.a = new b
  },
  eEGT: function(b, c, a) {
    b.exports = a.p + "ant-headline-2dbff8a8825660803e71c41b899bd696.js"
  },
  "eI/3": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("69c5f2")]).then(function(c) {
        b(a("0A8E"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  fDzX: function(b, c, a) {
    b.exports = a.p + "hong-xin-53d68504a75d499d28330abab830dab6.js"
  },
  fiJj: function(b, c, a) {
    c.a = function() {
      Object.keys(m).forEach(function(a) {
        return m[a].abort()
      });
      m = {}
    };
    c.b = function(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        c = arguments[2],
        g = arguments[3],
        e = "object" == ("undefined" === typeof __pda ? "undefined" : l(__pda)) ? __pda : {},
        k = f()(),
        n = e.apidomain,
        b = Object(d.mix)(b, {
          padapi: a,
          av: e.av,
          encpass: r,
          logiuid: q
        }),
        c = h()("//" + n + "/coop/mobile/index.php", {
          data: b,
          method: c ? "POST" : "GET",
          dataType: g,
          timeout: 5E3,
          context: {
            id: k,
            ticket: b.encpass
          }
        }),
        g = c.then(p, t);
      m[k] = c;
      g.abort = c.abort;
      return g
    };
    var d = a("agns");
    a.n(d);
    b = a("jFXU");
    var f = a.n(b);
    b = a("V6zD");
    var e = a.n(b);
    b = a("RfPX");
    var h = a.n(b),
      k = a("n8at"),
      l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ?
      function(a) {
        return typeof a
      } : function(a) {
        return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      },
      g = "undefined" != typeof WorkerGlobalScope,
      m = {},
      q = "",
      r = "";
    g ? self.addEventListener("message", function(a) {
      a = JSON.parse(a.data);
      "user-state-update" == a.cmd && (a = a.content || {}, q = a.uid, r = a.ticket)
    }, !1) : e.a.subscribe("user-state-update", function(a, b, c) {
      q = a;
      r = b
    });
    var n = function(a, b) {
        g ? self.postMessge(JSON.stringify({
          cmd: a,
          content: b
        })) : e.a.publish(a, b)
      },
      p = function(a) {
        var b =
          a.context;
        a = a.response;
        var c = b.ticket;
        delete m[b.id];
        a.key && c && a.key != c && n("user-state-receive-new-ticket", a.key);
        a.flag && "203" == a.flag && n("user-state-broken", c);
        return a
      },
      t = function(a) {
        var b = a.name,
          c = a.type,
          d = a.url;
        delete m[a.context.id];
        if ("AjaxError" == b && c && 0 > c.indexOf("Aborted")) throw d && "function" == typeof alert && Object(k.a)({
          msg: a.toString()
        }), a;
      }
  },
  ftHt: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("cb4543")]).then(function(c) {
        b(a("oZ2n"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  h40y: function(b, c, a) {
    a.d(c, "a", function() {
      return y
    });
    a.d(c, "c", function() {
      return u
    });
    a.d(c, "b", function() {
      return v
    });
    b = a("TkXE");
    var d = a.n(b);
    b = a("/ule");
    var f = a.n(b),
      e = a("u4sq");
    a.n(e);
    b = a("V5lc");
    var h = a.n(b);
    b = a("V6zD");
    var k = a.n(b);
    b = a("RfPX");
    var l = a.n(b),
      g = a("O+kd"),
      m = a("xXFV"),
      q = 0 > location.host.indexOf("6.cn") ? "/analyze" : "//shrek.6.cn/live.6.cn/e6u2/rm.php",
      r = function() {
        var a = d.a.param(location.search);
        return decodeURIComponent(a.referrer || "") || document.referrer
      }(),
      n, p = function() {
        var a = navigator.platform ||
          "other",
          b = 0;
        f.a.iOS ? (a = "iOS", b = f.a.iOSVersion) : f.a.android && (a = "Android", b = f.a.androidVersion);
        return a + " " + b
      }(),
      t = function() {
        return [screen.width, screen.height].sort(function(a, b) {
          return a - b
        }).join()
      }(),
      u = function() {
        var a = e.localStorage.getItem("__uu") || "";
        if (!a) {
          var b = h.a.get("shrek");
          b && (a = b.split("|")[0] || "")
        }
        return a
      },
      v = function() {
        var a = h.a.get("__ut") || "";
        if (a) {
          var a = a.split("|"),
            b = parseInt(a[1]);
          864E5 > Date.now() - b ? a = a[0] : (h.a.remove("__ut"), a = "")
        } else(b = h.a.get("shrek")) && (a = b.split("|")[1] ||
          "");
        return a
      },
      w = function(a) {
        return a.replace(/\d+\.\d+\.\d+\.\d+:\d+/, "m.v.6.cn").replace(/^(https?:)?\/\//, "")
      },
      x = function() {
        var a = location,
          b = a.search,
          a = a.host + a.pathname + b,
          b = d.a.param(b),
          c = d.a.param(document.referrer.split("?")[1] || "");
        void 0 !== b.referrer && (delete b.referrer, b.fv6pc = 1, a = d.a.make(a.split("?")[0], b));
        !b.src && c.src && (a = d.a.make(a, {
          src: c.src
        }));
        !b.mks && c.mks && (a = d.a.make(a, {
          mks: c.mks,
          mkc: c.mkc,
          mkk: c.mkk
        }));
        return a
      },
      y = function() {
        var a;
        m.b.inApp() ? (n || (n = Promise.reject(Error("Does not analyze in our apps")).catch(function(a) {
            return console.log(a.message)
          })),
          a = n) : (a = {
          location: w(x()),
          referer: w(r),
          browser: navigator.userAgent.toLowerCase(),
          flash: p,
          msr: t,
          uid: g.a.info ? g.a.info.uid : "0",
          pro: 4,
          __uu: u(),
          __ut: v(),
          stamp: Date.now()
        }, a = l()(q, {
          data: a
        }).then(z));
        return a
      },
      z = function(a) {
        var b = a.t || "";
        e.localStorage.setItem("__uu", a.u || "");
        h.a.get("__ut") || h.a.set("__ut", b + "|" + Date.now());
        k.a.publish("analyzeDone", a);
        return a
      }
  },
  hWe0: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("81f495")]).then(function(c) {
        b(a("IFI8"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  jFXU: function(b, c, a) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    c.default = function() {
      return (++d).toString(36)
    };
    var d = Date.now()
  },
  "m/NM": function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("737c48")]).then(function(c) {
        b(a("Ne2r"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  mUzr: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("fe7aa7")]).then(function(c) {
        b(a("q/8k"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  mufe: function(b, c, a) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    b = a("V6zD");
    var d = a.n(b);
    b = a("V5lc");
    var f = a.n(b);
    b = a("TkXE");
    var e = a.n(b);
    b = a("/ule");
    var h = a.n(b);
    b = a("Biso");
    var k = a("h40y"),
      l = a("O+kd"),
      g = a("oNSy");
    c = a("GiK3");
    var m = a.n(c);
    c = a("O27J");
    var q = a.n(c),
      r = a("IVjL");
    a("yIT7");
    a("n8at");
    c = new b.a(a("TekZ"), "/pay");
    c.addHandler([
      ["/?", "list"],
      ["/alipay/?", "alipay"],
      ["/mo9pay/?", "mo9pay"],
      ["/paypal/?", "paypal"],
      ["/wechat/?", "wechat"],
      ["/wechat-h5/?", "wechath5"],
      ["/vpay8/?", "vpay8"],
      ["/collaborate/?", "collaborate"],
      ["/buyprop/?", "buyprop"],
      ["/oneyuan/?", "oneyuan"],
      ["/huawei/?", "huawei"],
      ["/callback/?", "callback"]
    ]);
    var n = new b.a(a("YYRW"), "/account");
    n.addHandler([
      ["/setphone/?", "setphone"],
      ["/verifyphone/?", "verifyphone"],
      ["/resetphone/?", "resetphone"],
      ["/changealias/?", "changealias"],
      ["/property/?", "property"],
      ["/knapsack/?", "knapsack"],
      ["/exchange-coin/?", "exchange-coin"]
    ]);
    var p = new b.a(a("V/PV"));
    p.addHandler([
      ["(?:/?|/live/[^/]+/?)", "index"],
      ["/login/?", "login"],
      ["/reg/?", "reg"],
      ["/\\d+/?", "room/common"],
      ["/\\d+/synopsis/?", "profile-synopsis"],
      ["/liveplayer/\\d+/?",
        "liveplayer"
      ],
      ["/song/\\d+", "song"],
      ["/video/(/?|\\d+)/?", "video"],
      ["/v/(/?|\\d+)/?", "v"],
      ["/videoplayer/\\d+/?", "videoplayer"],
      ["/s/?", "search"],
      ["/my/history/?", "my-history"],
      ["/my/following/?", "my-following"],
      ["/downloadapp/?", "downloadapp"],
      ["/xianchang/?", "xianchang"],
      ["/family/\\d+/synopsis/?", "family/synopsis"],
      ["/gameframe/?", "gameframe"],
      ["/appmate/call-of-battle/?", "appmate/call-of-battle"],
      ["/appmate/ranked-match-2018/?", "appmate/ranked-match-2018"],
      ["/appmate/ranked-match-playoff-2018/?",
        "appmate/ranked-match-playoff-2018"
      ],
      ["/appmate/audio-wheel-game/?", "appmate/audio-wheel-game"],
      ["/appmate/gas-station/?", "appmate/gas-station"],
      ["/appmate/audio-intercourse/?", "appmate/audio-intercourse"],
      ["/appmate/privilege-of-mine/?", "appmate/privilege-of-mine"],
      ["/news/?", "news"],
      ["/test/?", "test"],
      ["/test-hls/?", "test-hls"],
      ["/test-hls-segmenting-server/?", "test-hls-segmenting-server"],
      ["/test-socket/?", "test-socket"],
      ["/pay(?:/?|.+)", c],
      ["/account(?:/?|.+)", n]
    ]);
    p.on("match", function() {
      d.a.publish("router-start-navigate")
    });
    p.on("ready", function(a, b) {
      var c = document.getElementById("reactbody");
      a = "default" in a ? a.default : a;
      b && q.a.unmountComponentAtNode(c);
      Object(k.a)();
      q.a.render(m.a.createElement(r.a, null, m.a.createElement(a, null)), c)
    });
    window.addEventListener("DOMContentLoaded", function(a) {
      a = Number(f.a.get("auto-login-time") || 0);
      var b = e.a.param(location.search);
      !h.a.wechat && !h.a.weibo || l.a.isLogin() || 0 != window.location.host.indexOf("m.v.6.cn") || window.top != window || !(9E5 < Date.now() - a) || /login|reg/.test(window.location.pathname) ||
        b.src && !b.autologin ? (p.navigate(location.pathname), g.a.config()) : Object(k.a)().then(function() {
          return Promise.reject(Error())
        }).catch(function() {
          window.location = l.a.getThirdpartyLoginUrl(h.a.wechat ? "wechat" : "weibo", b.next)
        })
    }, !1);
    a("Sjrs");
    a("US+S");
    a("eEGT");
    a("fDzX");
    a("P0gj")
  },
  n8at: function(b, c, a) {
    function d(a, b, c, d, e) {
      if ("[object Event]" == a.toString()) {
        var q = [],
          r;
        for (r in a) a.hasOwnProperty(r) && q.push(r + "-" + a[r]);
        a += q.join("_")
      }
      f({
        msg: a,
        fileUrl: b,
        lineNo: c,
        colNo: d || -1,
        stack: e && e.stack || ""
      })
    }

    function f(a) {
      var b =
        a.msg,
        c = a.fileUrl,
        c = void 0 === c ? "unknow" : c,
        d = a.lineNo,
        d = void 0 === d ? -1 : d,
        f = a.colNo,
        f = void 0 === f ? -1 : f;
      a = a.stack;
      a = void 0 === a ? "" : a;
      e()("/jserror", {
        dataType: "text",
        data: {
          msg: b,
          fileUrl: c,
          lineNo: d,
          colNo: f,
          stack: a,
          ua: navigator.userAgent,
          loc: location.href
        }
      })
    }
    c.a = f;
    b = a("RfPX");
    var e = a.n(b);
    self.onerror = self.onerror || d;
    self.addEventListener("unhandledrejection", function(a) {
      (a = a.reason) && "function" == typeof a.toString && "AjaxError" != a.name && f({
        msg: a.toString()
      })
    }, !1)
  },
  nogN: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"),
        a.e("080e39")
      ]).then(function(c) {
        b(a("IK5y"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  oNSy: function(b, c, a) {
    b = a("/ule");
    var d = a.n(b),
      f = a("fiJj"),
      e = window.location.protocol + "//vr0.6rooms.com/v/g3/cb3f21afd93fb71cc4368efd4e1d4bdc.png",
      h = {
        trigger: function() {
          this.title = document.title;
          this.desc = "\u516d\u95f4\u623f\u662f\u771f\u4eba\u4e92\u52a8\u89c6\u9891\u76f4\u64ad\u793e\u533a\u3002";
          this.link = location.href;
          this.imgUrl = e
        }
      };
    a = function() {
      var a = this;
      this._configParam = this._callback = null;
      this._url = "";
      this._autoPlayCount =
        0;
      ["_getConfig", "_getConfigBack", "_ready", "_error", "_autoPlay"].forEach(function(b) {
        a[b] = a[b].bind(a)
      })
    };
    a.prototype = {
      isAvailable: function() {
        return d.a.wechat && "wx" in window
      },
      config: function(a) {
        this.isAvailable() && (this._callback = a, this._configParam ? (wx.config(this._configParam), this._callback()) : this._getConfig())
      },
      shareConfig: function(a) {
        this.isAvailable() && (wx.onMenuShareTimeline(a), wx.onMenuShareAppMessage(a), wx.onMenuShareQQ(a), wx.onMenuShareQZone(a))
      },
      resetShareConfig: function() {
        this.shareConfig(h)
      },
      _getConfig: function() {
        this._url = location.href;
        Object(f.b)("api-getWechatTicket.php", {
          url: this._url
        }).then(this._getConfigBack)
      },
      _getConfigBack: function(a) {
        "001" == a.flag && (this._configParam = {
          appId: String(a.content.appId),
          timestamp: String(a.content.timestamp),
          nonceStr: String(a.content.nonceStr),
          signature: String(a.content.signature),
          jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"],
          debug: !1
        }, wx.config(this._configParam), wx.ready(this._ready), wx.error(this._error))
      },
      _ready: function() {
        d.a.iOS && this._autoPlay();
        this._callback && (this._callback(), this._callback = null)
      },
      _error: function(a) {
        this._url != location.href && setTimeout(this._getConfig, 1E3)
      },
      _autoPlay: function() {
        var a = document.querySelector("#wechat-autoplay");
        this._autoPlayCount++;
        a && a.src ? a.play() : 10 > this._autoPlayCount && setTimeout(this._autoPlay, 100)
      }
    };
    c.a = new a
  },
  oeSr: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("ea9b8a")]).then(function(c) {
        b(a("hiBA"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  rM5P: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("48d643")]).then(function(c) {
        b(a("tB6y"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  s5Gc: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("f676cb")]).then(function(c) {
        b(a("H4ii"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  sHCI: function(b, c, a) {
    function d(a) {
      return -1 < a.indexOf(l.j)
    }

    function f(a) {
      return -1 < a.indexOf(l.k)
    }

    function e(a) {
      return -1 < a.indexOf(l.m)
    }

    function h(a) {
      a = a.split("|");
      var b = a[6] ? a[6].split("-") : [];
      return {
        role: Number(a[0]),
        wealthRank: Number(a[1]),
        status: Number(a[2]),
        prop: b,
        coin6Rank: Number(a[7]),
        propGrade: 0 != b.length && a[14] ? a[14].split("-").reduce(function(a, c, d) {
          a[b[d]] = Number(c);
          return a
        }, {}) : {},
        adminGrade: Number(a[15])
      }
    }
    c.b = d;
    c.c = f;
    c.e = e;
    c.d = function(a) {
      return d(a) || f(a) || e(a)
    };
    c.f = h;
    c.a = function() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        b = Object(k.merge)({
          uid: 0,
          alias: "",
          avatar: "",
          rid: 0,
          coin6: 0,
          coin6Rank: 0,
          coin6Late: 0,
          coin6Step: 0,
          wealth: 0,
          wealthRank: 0,
          wealthLate: 0,
          wealthStep: 0,
          following: !1,
          prop: [],
          propGrade: {},
          role: l.y,
          adminGrade: 0,
          status: 6,
          online: !0
        }, a);
      if (a.uname && "string" == typeof a.priv) {
        var c = h(a.priv);
        Object(k.mix)(b, {
          uid: Number(a.uid),
          alias: a.uname,
          avatar: a.userpic,
          rid: Number(a.urid),
          coin6Rank: Number(c.coin6Rank),
          wealthRank: Number(c.wealthRank),
          prop: c.prop,
          propGrade: c.propGrade,
          role: c.role,
          adminGrade: c.adminGrade,
          status: c.status,
          online: "number" == typeof a.flag ? !!a.flag : !0
        }, !0)
      } else a.uid && a.userType && a.prop && a.vip ? Object(k.mix)(b, {
        uid: Number(a.uid),
        alias: a.alias,
        avatar: a.userpic,
        rid: Number(a.rid),
        coin6Rank: a.crank,
        coin6Late: a.coin6late,
        coin6Step: a.coinstep,
        wealthRank: a.wrank,
        wealthLate: a.wealtlate,
        wealthStep: a.wealthstep,
        following: !!a.isFav,
        prop: a.prop.concat(a.vip).map(function(a) {
          return String(a)
        }),
        role: a.userType,
        status: 1 == a.msgflag ? 6 : 1
      }, !0) : a.id && a.uoption && Object(k.mix)(b, {
        uid: Number(a.id),
        alias: a.alias,
        avatar: a.uoption.picuser,
        rid: Number(a.rid),
        coin6: Number(a.coin6 || 0),
        coin6Rank: a.coin6rank,
        coin6Late: a.coin6late,
        coin6Step: a.coinstep,
        wealth: Number(a.wealth || 0),
        wealthRank: a.wealthrank,
        wealthLate: a.wealtlate,
        wealthStep: a.wealthstep,
        following: "1" == a.isfollow,
        prop: a.badge.map(function(a) {
          return String(a)
        })
      }, !0);
      return b
    };
    var k = a("agns");
    a.n(k);
    var l = a("+itZ")
  },
  u4sq: function(b, c, a) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    c.Storage = c.sessionStorage = c.localStorage = void 0;
    var d = function() {
        function a(b, c) {
          for (var d = 0; d < c.length; d++) {
            var e = c[d];
            e.enumerable = e.enumerable || !1;
            e.configurable = !0;
            "value" in e && (e.writable = !0);
            Object.defineProperty(b, e.key, e)
          }
        }
        return function(b, c, d) {
          c &&
            a(b.prototype, c);
          d && a(b, d);
          return b
        }
      }(),
      f = (b = a("V5lc")) && b.__esModule ? b : {
        default: b
      };
    b = function() {
      function a(b) {
        if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
        this._session = !!b
      }
      d(a, [{
        key: "setItem",
        value: function(a, b) {
          try {
            this._getStorage().setItem(a, b)
          } catch (c) {
            var d = {};
            this._session || (d.expires = new Date(Date.now() + 31536E6));
            this._getCookie().set(a, b, d)
          }
        }
      }, {
        key: "getItem",
        value: function(a) {
          return this._getStorage().getItem(a) || this._getCookie().get(a) || ""
        }
      }, {
        key: "removeItem",
        value: function(a) {
          this._getStorage().removeItem(a);
          this._getCookie().remove(a)
        }
      }, {
        key: "_getStorage",
        value: function() {
          return this._session ? self.sessionStorage : self.localStorage
        }
      }, {
        key: "_getCookie",
        value: function() {
          return f.default
        }
      }]);
      return a
    }();
    a = new b;
    var e = new b(!0);
    c.localStorage = a;
    c.sessionStorage = e;
    c.Storage = b;
    c.default = a
  },
  v6qc: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("66677a")]).then(function(c) {
        b(a("MrKE"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  vNic: function(b, c, a) {
    b.exports =
      function(b) {
        Promise.all([a.e("519e2b"), a.e("28c16e")]).then(function(c) {
          b(a("iv9F"))
        }.bind(null, a)).catch(a.oe)
      }
  },
  vtbi: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("60b530")]).then(function(c) {
        b(a("fnyC"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  vzCy: function(b, c) {
    function a() {
      this._events = this._events || {};
      this._maxListeners = this._maxListeners || void 0
    }

    function d(a) {
      return "function" === typeof a
    }

    function f(a) {
      return "object" === typeof a && null !== a
    }
    b.exports = a;
    a.EventEmitter = a;
    a.prototype._events =
      void 0;
    a.prototype._maxListeners = void 0;
    a.defaultMaxListeners = 10;
    a.prototype.setMaxListeners = function(a) {
      if ("number" !== typeof a || 0 > a || isNaN(a)) throw TypeError("n must be a positive number");
      this._maxListeners = a;
      return this
    };
    a.prototype.emit = function(a) {
      var b, c, l, g;
      this._events || (this._events = {});
      if ("error" === a && (!this._events.error || f(this._events.error) && !this._events.error.length)) {
        b = arguments[1];
        if (b instanceof Error) throw b;
        c = Error('Uncaught, unspecified "error" event. (' + b + ")");
        c.context = b;
        throw c;
      }
      c = this._events[a];
      if (void 0 === c) return !1;
      if (d(c)) switch (arguments.length) {
        case 1:
          c.call(this);
          break;
        case 2:
          c.call(this, arguments[1]);
          break;
        case 3:
          c.call(this, arguments[1], arguments[2]);
          break;
        default:
          b = Array.prototype.slice.call(arguments, 1), c.apply(this, b)
      } else if (f(c))
        for (b = Array.prototype.slice.call(arguments, 1), g = c.slice(), c = g.length, l = 0; l < c; l++) g[l].apply(this, b);
      return !0
    };
    a.prototype.addListener = function(b, c) {
      var k;
      if (!d(c)) throw TypeError("listener must be a function");
      this._events || (this._events = {});
      this._events.newListener && this.emit("newListener", b, d(c.listener) ? c.listener : c);
      this._events[b] ? f(this._events[b]) ? this._events[b].push(c) : this._events[b] = [this._events[b], c] : this._events[b] = c;
      f(this._events[b]) && !this._events[b].warned && (k = void 0 !== this._maxListeners ? this._maxListeners : a.defaultMaxListeners) && 0 < k && this._events[b].length > k && (this._events[b].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
        this._events[b].length), "function" === typeof console.trace && console.trace());
      return this
    };
    a.prototype.on = a.prototype.addListener;
    a.prototype.once = function(a, b) {
      function c() {
        this.removeListener(a, c);
        f || (f = !0, b.apply(this, arguments))
      }
      if (!d(b)) throw TypeError("listener must be a function");
      var f = !1;
      c.listener = b;
      this.on(a, c);
      return this
    };
    a.prototype.removeListener = function(a, b) {
      var c, l, g;
      if (!d(b)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[a]) return this;
      c = this._events[a];
      g = c.length;
      l = -1;
      if (c === b || d(c.listener) && c.listener === b) delete this._events[a], this._events.removeListener && this.emit("removeListener", a, b);
      else if (f(c)) {
        for (; 0 < g--;)
          if (c[g] === b || c[g].listener && c[g].listener === b) {
            l = g;
            break
          } if (0 > l) return this;
        1 === c.length ? (c.length = 0, delete this._events[a]) : c.splice(l, 1);
        this._events.removeListener && this.emit("removeListener", a, b)
      }
      return this
    };
    a.prototype.removeAllListeners = function(a) {
      var b;
      if (!this._events) return this;
      if (!this._events.removeListener) return 0 === arguments.length ?
        this._events = {} : this._events[a] && delete this._events[a], this;
      if (0 === arguments.length) {
        for (b in this._events) "removeListener" !== b && this.removeAllListeners(b);
        this.removeAllListeners("removeListener");
        this._events = {};
        return this
      }
      b = this._events[a];
      if (d(b)) this.removeListener(a, b);
      else if (b)
        for (; b.length;) this.removeListener(a, b[b.length - 1]);
      delete this._events[a];
      return this
    };
    a.prototype.listeners = function(a) {
      return this._events && this._events[a] ? d(this._events[a]) ? [this._events[a]] : this._events[a].slice() : []
    };
    a.prototype.listenerCount = function(a) {
      if (this._events) {
        a = this._events[a];
        if (d(a)) return 1;
        if (a) return a.length
      }
      return 0
    };
    a.listenerCount = function(a, b) {
      return a.listenerCount(b)
    }
  },
  wLNx: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("aeef1d")]).then(function(c) {
        b(a("SqYm"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  xXFV: function(b, c, a) {
    a.d(c, "a", function() {
      return r
    });
    b = a("vzCy");
    b = a.n(b);
    var d = a("agns");
    a.n(d);
    var f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
        return typeof a
      } :
      function(a) {
        return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      },
      e = !/\s+/.test(window.navigator.userAgent),
      h = function() {
        return "object" == f(window.appAndroid)
      },
      k = function() {
        return e && "string" == typeof window.appEncpass
      },
      l = function(a) {
        for (var b = window[a], c = window.webkit && window.webkit.messageHandlers, d, e = arguments.length, g = Array(1 < e ? e - 1 : 0), f = 1; f < e; f++) g[f - 1] = arguments[f];
        c && c[a] && c[a].postMessage ? c[a].postMessage(g[0] || {}) : "function" == typeof b ? d = b.apply(null,
          g) : "string" == typeof b && (d = b);
        return d
      },
      g = function(a) {
        var b = window.appAndroid && window.appAndroid[a],
          c;
        if ("function" == typeof b) {
          c = arguments.length;
          for (var d = Array(1 < c ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
          c = b.apply(window.appAndroid, d)
        }
        return c
      },
      m = function(a, b) {
        for (var c = arguments.length, d = Array(2 < c ? c - 2 : 0), e = 2; e < c; e++) d[e - 2] = arguments[e];
        return g.apply(void 0, [b].concat(d)) || l.apply(void 0, [a].concat(d))
      },
      q = function() {
        return l("appClientVersion") || "0"
      };
    a = function() {
      window.socketMessageFromApp = this.onReceiveMessage.bind(this)
    };
    Object(d.extend)(a, b.a, {
      onReceiveMessage: function(a) {
        try {
          a = JSON.parse(a)
        } catch (b) {}
        if ("001" != a.flag) this.emit("receiveerr", a), this.emit("receiveerr:" + a.flag, a);
        else {
          var c = a.content;
          this._emitReceiveEvent(c);
          if (1413 == c.typeID)
            for (var c = c.content, d = 0; d < c.length; d++) this._emitReceiveEvent(c[d])
        }
        701 == a.content.typeID && (this.emit("receiveres", a.content.content), this.emit("receiveres:" + a.content.content.t, a.content.content))
      },
      sendMsg: function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
          d = c.analyticData,
          d = void 0 === d ? null : d,
          c = c.withIC,
          c = void 0 === c ? 1 : c;
        k() ? (d = '{"t":' + JSON.stringify(a) + ', "content":' + JSON.stringify(b) + "}", l("appSendSocket", d, c)) : h() && g("appSendSocket", a, JSON.stringify(b), JSON.stringify(d))
      },
      listen: function() {
        for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
        m("appRegisterSocketMessage", "appRegisterSocketMessage", b.join())
      },
      _emitReceiveEvent: function(a) {
        this.emit("receive:" + a.typeID, a)
      }
    });
    var r = new a;
    c.b = {
      inApp: function() {
        return e
      },
      inAndroidApp: h,
      inIOSApp: k,
      callFunction: m,
      callIOS: l,
      callAndroid: g,
      getVersion: q,
      versionGreaterThan: function(a, b) {
        for (var c = function(a) {
            a = parseInt(a);
            return isNaN(a) ? 0 : a
          }, d = (b || q()).split(".").map(c), c = a.split(".").map(c), e = !1, g = 0; g < d.length; g++) {
          var f = d[g],
            h = c[g] || 0;
          if (f != h) {
            e = f > h;
            break
          }
        }
        return e
      },
      appSocket: r,
      toLogin: function() {
        m("appLogin", "appLogin")
      },
      getTicket: function() {
        return m("appEncpass", "getEncpass")
      },
      getUid: function() {
        return m("appLoginUid", "getLoginUid")
      },
      toRoom: function(a, b) {
        l("appWKEnterRoom", {
          uid: a,
          rid: b
        });
        m("appEnterRoom", "appEnterRoom", a, b);
        return !1
      },
      toIndex: function() {
        g("gotoHall")
      },
      toPay: function() {
        m("appPay", "appPay")
      },
      confirmPay: function() {
        m("appPayMsg", "appPayMsg")
      },
      notifyRefreshBalance: function() {
        l("appRefreshWealth")
      },
      close: function() {
        m("appCloseWebPage", "finish");
        return !1
      },
      giftAnimationEnd: function(a, b, c) {
        m("appRoomGiftAnimationDidEnd", "animComplete", a, b, c)
      },
      toast: function(a) {
        m("appShowToastAlertWithText", "appShowToastAlertWithText", a)
      },
      showGiftStore: function(a) {
        m("appOpenChest", "appOpenChest",
          a)
      },
      sesameCertification: function(a, b) {
        l("appCertification", {
          id: a,
          no: b
        });
        g("appCertification", a, b)
      },
      openUrl: function(a) {
        this.inIOSApp() ? l("appOpenURL", encodeURIComponent(a)) : g("appOpenURL", a)
      },
      setWebViewDimension: function(a, b) {
        l("appSetWebViewDimension", {
          width: a,
          height: b
        });
        g("appSetWebViewDimension", a, b)
      },
      openEventOverlay: function(a) {
        m("appOpenEventOverlay", "appOpenEventOverlay", a)
      },
      share: function(a, b) {
        var c = b.url,
          d = b.title,
          e = b.subtitle,
          f = b.thumb,
          c = {
            to: a,
            url: void 0 === c ? "" : c,
            title: void 0 === d ? "" : d,
            subtitle: void 0 ===
              e ? "" : e,
            thumb: void 0 === f ? "" : f
          };
        l("appShare", c);
        g("appShare", JSON.stringify(c))
      },
      appendPublicChatMessage: function(a) {
        m("appAppendPublicChatMessage", "appAppendPublicChatMessage", a)
      }
    }
  },
  xdFo: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("13d47e")]).then(function(c) {
        b(a("sViN"))
      }.bind(null, a)).catch(a.oe)
    }
  },
  yIT7: function(b, c, a) {
    var d = a("O+kd");
    window.addEventListener("load", function(a) {
      -1 < location.href.indexOf("6.cn") && 0 != location.pathname.indexOf("/gift-") && setTimeout(function() {
        (function(a,
          b, c, d, e, f, r) {
          a.GoogleAnalyticsObject = e;
          a[e] = a[e] || function() {
            (a[e].q = a[e].q || []).push(arguments)
          };
          a[e].l = 1 * new Date;
          f = b.createElement(c);
          r = b.getElementsByTagName(c)[0];
          f.async = 1;
          f.src = d;
          r.parentNode.insertBefore(f, r)
        })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
        window.ga("create", "UA-74193241-1", {
          userId: d.a.info && d.a.info.uid || ""
        });
        var a = location.pathname;
        /^\/\d+\/?$/.test(a) ? a = "/room" : /^\/\d+\/synopsis\/?/.test(a) ? a = "/profile" : /^\/video\/\d+\/?/.test(a) ? a = "/video" : /^\/v\/\d+\/?/.test(a) &&
          (a = "/minivideo");
        a = "/" == a ? a : a.replace(/\/$/, "");
        window.ga("send", "pageview", a, {
          title: "6rooms"
        })
      }, 0)
    }, !1)
  },
  ysXP: function(b, c, a) {
    b.exports = function(b) {
      Promise.all([a.e("519e2b"), a.e("4c9f50")]).then(function(c) {
        b(a("ghOF"))
      }.bind(null, a)).catch(a.oe)
    }
  }
});
