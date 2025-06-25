import h, { createContext as tn, useContext as ye, isValidElement as Ur, Component as la, useMemo as or, memo as ua, forwardRef as Qe, cloneElement as ca, useEffect as Ye, useLayoutEffect as fa, useState as je, useRef as Se, useImperativeHandle as Gr, useCallback as Ke } from "react";
import Ne from "react-dom";
var Ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mr = { exports: {} }, He = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function da() {
  if (bt)
    return He;
  bt = 1;
  var e = h, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, f, u) {
    var c, y = {}, S = null, m = null;
    u !== void 0 && (S = "" + u), f.key !== void 0 && (S = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (c in f)
      t.call(f, c) && !o.hasOwnProperty(c) && (y[c] = f[c]);
    if (s && s.defaultProps)
      for (c in f = s.defaultProps, f)
        y[c] === void 0 && (y[c] = f[c]);
    return { $$typeof: n, type: s, key: S, ref: m, props: y, _owner: a.current };
  }
  return He.Fragment = r, He.jsx = i, He.jsxs = i, He;
}
var Ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function va() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var e = h, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), D = Symbol.iterator, $ = "@@iterator";
    function p(l) {
      if (l === null || typeof l != "object")
        return null;
      var O = D && l[D] || l[$];
      return typeof O == "function" ? O : null;
    }
    var V = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function U(l) {
      {
        for (var O = arguments.length, M = new Array(O > 1 ? O - 1 : 0), K = 1; K < O; K++)
          M[K - 1] = arguments[K];
        q("error", l, M);
      }
    }
    function q(l, O, M) {
      {
        var K = V.ReactDebugCurrentFrame, ae = K.getStackAddendum();
        ae !== "" && (O += "%s", M = M.concat([ae]));
        var ue = M.map(function(re) {
          return String(re);
        });
        ue.unshift("Warning: " + O), Function.prototype.apply.call(console[l], console, ue);
      }
    }
    var B = !1, v = !1, k = !1, A = !1, Q = !1, H;
    H = Symbol.for("react.module.reference");
    function J(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === t || l === o || Q || l === a || l === u || l === c || A || l === m || B || v || k || typeof l == "object" && l !== null && (l.$$typeof === S || l.$$typeof === y || l.$$typeof === i || l.$$typeof === s || l.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === H || l.getModuleId !== void 0));
    }
    function N(l, O, M) {
      var K = l.displayName;
      if (K)
        return K;
      var ae = O.displayName || O.name || "";
      return ae !== "" ? M + "(" + ae + ")" : M;
    }
    function Z(l) {
      return l.displayName || "Context";
    }
    function te(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && U("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case t:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case s:
            var O = l;
            return Z(O) + ".Consumer";
          case i:
            var M = l;
            return Z(M._context) + ".Provider";
          case f:
            return N(l, l.render, "ForwardRef");
          case y:
            var K = l.displayName || null;
            return K !== null ? K : te(l.type) || "Memo";
          case S: {
            var ae = l, ue = ae._payload, re = ae._init;
            try {
              return te(re(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, T = 0, g, P, _, L, d, b, I;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function w() {
      {
        if (T === 0) {
          g = console.log, P = console.info, _ = console.warn, L = console.error, d = console.group, b = console.groupCollapsed, I = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: E,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        T++;
      }
    }
    function W() {
      {
        if (T--, T === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, l, {
              value: g
            }),
            info: R({}, l, {
              value: P
            }),
            warn: R({}, l, {
              value: _
            }),
            error: R({}, l, {
              value: L
            }),
            group: R({}, l, {
              value: d
            }),
            groupCollapsed: R({}, l, {
              value: b
            }),
            groupEnd: R({}, l, {
              value: I
            })
          });
        }
        T < 0 && U("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = V.ReactCurrentDispatcher, C;
    function j(l, O, M) {
      {
        if (C === void 0)
          try {
            throw Error();
          } catch (ae) {
            var K = ae.stack.trim().match(/\n( *(at )?)/);
            C = K && K[1] || "";
          }
        return `
` + C + l;
      }
    }
    var G = !1, F;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      F = new ne();
    }
    function x(l, O) {
      if (!l || G)
        return "";
      {
        var M = F.get(l);
        if (M !== void 0)
          return M;
      }
      var K;
      G = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = z.current, z.current = null, w();
      try {
        if (O) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (Oe) {
              K = Oe;
            }
            Reflect.construct(l, [], re);
          } else {
            try {
              re.call();
            } catch (Oe) {
              K = Oe;
            }
            l.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            K = Oe;
          }
          l();
        }
      } catch (Oe) {
        if (Oe && K && typeof Oe.stack == "string") {
          for (var ee = Oe.stack.split(`
`), be = K.stack.split(`
`), pe = ee.length - 1, he = be.length - 1; pe >= 1 && he >= 0 && ee[pe] !== be[he]; )
            he--;
          for (; pe >= 1 && he >= 0; pe--, he--)
            if (ee[pe] !== be[he]) {
              if (pe !== 1 || he !== 1)
                do
                  if (pe--, he--, he < 0 || ee[pe] !== be[he]) {
                    var Ce = `
` + ee[pe].replace(" at new ", " at ");
                    return l.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", l.displayName)), typeof l == "function" && F.set(l, Ce), Ce;
                  }
                while (pe >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = ue, W(), Error.prepareStackTrace = ae;
      }
      var Ie = l ? l.displayName || l.name : "", Me = Ie ? j(Ie) : "";
      return typeof l == "function" && F.set(l, Me), Me;
    }
    function ce(l, O, M) {
      return x(l, !1);
    }
    function Y(l) {
      var O = l.prototype;
      return !!(O && O.isReactComponent);
    }
    function me(l, O, M) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return x(l, Y(l));
      if (typeof l == "string")
        return j(l);
      switch (l) {
        case u:
          return j("Suspense");
        case c:
          return j("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case f:
            return ce(l.render);
          case y:
            return me(l.type, O, M);
          case S: {
            var K = l, ae = K._payload, ue = K._init;
            try {
              return me(ue(ae), O, M);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, fe = {}, de = V.ReactDebugCurrentFrame;
    function xe(l) {
      if (l) {
        var O = l._owner, M = me(l.type, l._source, O ? O.type : null);
        de.setExtraStackFrame(M);
      } else
        de.setExtraStackFrame(null);
    }
    function Be(l, O, M, K, ae) {
      {
        var ue = Function.call.bind(ge);
        for (var re in l)
          if (ue(l, re)) {
            var ee = void 0;
            try {
              if (typeof l[re] != "function") {
                var be = Error((K || "React class") + ": " + M + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              ee = l[re](O, re, K, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pe) {
              ee = pe;
            }
            ee && !(ee instanceof Error) && (xe(ae), U("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", M, re, typeof ee), xe(null)), ee instanceof Error && !(ee.message in fe) && (fe[ee.message] = !0, xe(ae), U("Failed %s type: %s", M, ee.message), xe(null));
          }
      }
    }
    var Fn = Array.isArray;
    function hr(l) {
      return Fn(l);
    }
    function Wn(l) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, M = O && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return M;
      }
    }
    function Vn(l) {
      try {
        return lt(l), !1;
      } catch {
        return !0;
      }
    }
    function lt(l) {
      return "" + l;
    }
    function ut(l) {
      if (Vn(l))
        return U("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wn(l)), lt(l);
    }
    var qe = V.ReactCurrentOwner, Bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ct, ft, yr;
    yr = {};
    function qn(l) {
      if (ge.call(l, "ref")) {
        var O = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Hn(l) {
      if (ge.call(l, "key")) {
        var O = Object.getOwnPropertyDescriptor(l, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Un(l, O) {
      if (typeof l.ref == "string" && qe.current && O && qe.current.stateNode !== O) {
        var M = te(qe.current.type);
        yr[M] || (U('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(qe.current.type), l.ref), yr[M] = !0);
      }
    }
    function Gn(l, O) {
      {
        var M = function() {
          ct || (ct = !0, U("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        M.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Kn(l, O) {
      {
        var M = function() {
          ft || (ft = !0, U("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        M.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Jn = function(l, O, M, K, ae, ue, re) {
      var ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: l,
        key: O,
        ref: M,
        props: re,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return ee._store = {}, Object.defineProperty(ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.defineProperty(ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(ee.props), Object.freeze(ee)), ee;
    };
    function Zn(l, O, M, K, ae) {
      {
        var ue, re = {}, ee = null, be = null;
        M !== void 0 && (ut(M), ee = "" + M), Hn(O) && (ut(O.key), ee = "" + O.key), qn(O) && (be = O.ref, Un(O, ae));
        for (ue in O)
          ge.call(O, ue) && !Bn.hasOwnProperty(ue) && (re[ue] = O[ue]);
        if (l && l.defaultProps) {
          var pe = l.defaultProps;
          for (ue in pe)
            re[ue] === void 0 && (re[ue] = pe[ue]);
        }
        if (ee || be) {
          var he = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          ee && Gn(re, he), be && Kn(re, he);
        }
        return Jn(l, ee, be, ae, K, qe.current, re);
      }
    }
    var mr = V.ReactCurrentOwner, dt = V.ReactDebugCurrentFrame;
    function De(l) {
      if (l) {
        var O = l._owner, M = me(l.type, l._source, O ? O.type : null);
        dt.setExtraStackFrame(M);
      } else
        dt.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function br(l) {
      return typeof l == "object" && l !== null && l.$$typeof === n;
    }
    function vt() {
      {
        if (mr.current) {
          var l = te(mr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Xn(l) {
      {
        if (l !== void 0) {
          var O = l.fileName.replace(/^.*[\\\/]/, ""), M = l.lineNumber;
          return `

Check your code at ` + O + ":" + M + ".";
        }
        return "";
      }
    }
    var pt = {};
    function Qn(l) {
      {
        var O = vt();
        if (!O) {
          var M = typeof l == "string" ? l : l.displayName || l.name;
          M && (O = `

Check the top-level render call using <` + M + ">.");
        }
        return O;
      }
    }
    function ht(l, O) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var M = Qn(O);
        if (pt[M])
          return;
        pt[M] = !0;
        var K = "";
        l && l._owner && l._owner !== mr.current && (K = " It was passed a child from " + te(l._owner.type) + "."), De(l), U('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, K), De(null);
      }
    }
    function yt(l, O) {
      {
        if (typeof l != "object")
          return;
        if (hr(l))
          for (var M = 0; M < l.length; M++) {
            var K = l[M];
            br(K) && ht(K, O);
          }
        else if (br(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var ae = p(l);
          if (typeof ae == "function" && ae !== l.entries)
            for (var ue = ae.call(l), re; !(re = ue.next()).done; )
              br(re.value) && ht(re.value, O);
        }
      }
    }
    function ea(l) {
      {
        var O = l.type;
        if (O == null || typeof O == "string")
          return;
        var M;
        if (typeof O == "function")
          M = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === y))
          M = O.propTypes;
        else
          return;
        if (M) {
          var K = te(O);
          Be(M, l.props, "prop", K, l);
        } else if (O.PropTypes !== void 0 && !gr) {
          gr = !0;
          var ae = te(O);
          U("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && U("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ra(l) {
      {
        for (var O = Object.keys(l.props), M = 0; M < O.length; M++) {
          var K = O[M];
          if (K !== "children" && K !== "key") {
            De(l), U("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), De(null);
            break;
          }
        }
        l.ref !== null && (De(l), U("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    var mt = {};
    function gt(l, O, M, K, ae, ue) {
      {
        var re = J(l);
        if (!re) {
          var ee = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = Xn(ae);
          be ? ee += be : ee += vt();
          var pe;
          l === null ? pe = "null" : hr(l) ? pe = "array" : l !== void 0 && l.$$typeof === n ? (pe = "<" + (te(l.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof l, U("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, ee);
        }
        var he = Zn(l, O, M, ae, ue);
        if (he == null)
          return he;
        if (re) {
          var Ce = O.children;
          if (Ce !== void 0)
            if (K)
              if (hr(Ce)) {
                for (var Ie = 0; Ie < Ce.length; Ie++)
                  yt(Ce[Ie], l);
                Object.freeze && Object.freeze(Ce);
              } else
                U("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yt(Ce, l);
        }
        if (ge.call(O, "key")) {
          var Me = te(l), Oe = Object.keys(O).filter(function(sa) {
            return sa !== "key";
          }), _r = Oe.length > 0 ? "{key: someKey, " + Oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mt[Me + _r]) {
            var ia = Oe.length > 0 ? "{" + Oe.join(": ..., ") + ": ...}" : "{}";
            U(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _r, Me, ia, Me), mt[Me + _r] = !0;
          }
        }
        return l === t ? ra(he) : ea(he), he;
      }
    }
    function ta(l, O, M) {
      return gt(l, O, M, !0);
    }
    function na(l, O, M) {
      return gt(l, O, M, !1);
    }
    var aa = na, oa = ta;
    Ue.Fragment = t, Ue.jsx = aa, Ue.jsxs = oa;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? Mr.exports = da() : Mr.exports = va();
var Kr = Mr.exports;
function $e() {
  return $e = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var t in r)
        ({}).hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }, $e.apply(null, arguments);
}
function Xe(e) {
  "@babel/helpers - typeof";
  return Xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xe(e);
}
function pa(e, n) {
  if (Xe(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, n || "default");
    if (Xe(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ha(e) {
  var n = pa(e, "string");
  return Xe(n) == "symbol" ? n : n + "";
}
function Fe(e, n, r) {
  return (n = ha(n)) in e ? Object.defineProperty(e, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = r, e;
}
var We = tn({
  prefixCls: "arco"
});
function Ot(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Et(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ot(Object(r), !0).forEach(function(t) {
      Fe(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ot(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function ya(e, n) {
  var r = ye(We), t = r.prefixCls, a = t === void 0 ? "arco" : t, o = e.spin, i = e.className, s = Et(Et({
    "aria-hidden": !0,
    focusable: !1,
    ref: n
  }, e), {}, {
    className: "".concat(i ? i + " " : "").concat(a, "-icon ").concat(a, "-icon-close")
  });
  return o && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, /* @__PURE__ */ h.createElement("svg", $e({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    viewBox: "0 0 48 48"
  }, s), /* @__PURE__ */ h.createElement("path", {
    d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
  }));
}
var Jr = /* @__PURE__ */ h.forwardRef(ya);
Jr.defaultProps = {
  isIcon: !0
};
Jr.displayName = "IconClose";
const nn = Jr;
var Nr = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function ma() {
  if (wt)
    return oe;
  wt = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), t = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), D;
  D = Symbol.for("react.module.reference");
  function $(p) {
    if (typeof p == "object" && p !== null) {
      var V = p.$$typeof;
      switch (V) {
        case e:
          switch (p = p.type, p) {
            case r:
            case a:
            case t:
            case u:
            case c:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case i:
                case f:
                case S:
                case y:
                case o:
                  return p;
                default:
                  return V;
              }
          }
        case n:
          return V;
      }
    }
  }
  return oe.ContextConsumer = i, oe.ContextProvider = o, oe.Element = e, oe.ForwardRef = f, oe.Fragment = r, oe.Lazy = S, oe.Memo = y, oe.Portal = n, oe.Profiler = a, oe.StrictMode = t, oe.Suspense = u, oe.SuspenseList = c, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(p) {
    return $(p) === i;
  }, oe.isContextProvider = function(p) {
    return $(p) === o;
  }, oe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, oe.isForwardRef = function(p) {
    return $(p) === f;
  }, oe.isFragment = function(p) {
    return $(p) === r;
  }, oe.isLazy = function(p) {
    return $(p) === S;
  }, oe.isMemo = function(p) {
    return $(p) === y;
  }, oe.isPortal = function(p) {
    return $(p) === n;
  }, oe.isProfiler = function(p) {
    return $(p) === a;
  }, oe.isStrictMode = function(p) {
    return $(p) === t;
  }, oe.isSuspense = function(p) {
    return $(p) === u;
  }, oe.isSuspenseList = function(p) {
    return $(p) === c;
  }, oe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === a || p === t || p === u || p === c || p === m || typeof p == "object" && p !== null && (p.$$typeof === S || p.$$typeof === y || p.$$typeof === o || p.$$typeof === i || p.$$typeof === f || p.$$typeof === D || p.getModuleId !== void 0);
  }, oe.typeOf = $, oe;
}
var ie = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function ga() {
  return Ct || (Ct = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), t = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), D = !1, $ = !1, p = !1, V = !1, U = !1, q;
    q = Symbol.for("react.module.reference");
    function B(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === r || Y === a || U || Y === t || Y === u || Y === c || V || Y === m || D || $ || p || typeof Y == "object" && Y !== null && (Y.$$typeof === S || Y.$$typeof === y || Y.$$typeof === o || Y.$$typeof === i || Y.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Y.$$typeof === q || Y.getModuleId !== void 0));
    }
    function v(Y) {
      if (typeof Y == "object" && Y !== null) {
        var me = Y.$$typeof;
        switch (me) {
          case e:
            var ge = Y.type;
            switch (ge) {
              case r:
              case a:
              case t:
              case u:
              case c:
                return ge;
              default:
                var fe = ge && ge.$$typeof;
                switch (fe) {
                  case s:
                  case i:
                  case f:
                  case S:
                  case y:
                  case o:
                    return fe;
                  default:
                    return me;
                }
            }
          case n:
            return me;
        }
      }
    }
    var k = i, A = o, Q = e, H = f, J = r, N = S, Z = y, te = n, R = a, T = t, g = u, P = c, _ = !1, L = !1;
    function d(Y) {
      return _ || (_ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function b(Y) {
      return L || (L = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(Y) {
      return v(Y) === i;
    }
    function E(Y) {
      return v(Y) === o;
    }
    function w(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === e;
    }
    function W(Y) {
      return v(Y) === f;
    }
    function z(Y) {
      return v(Y) === r;
    }
    function C(Y) {
      return v(Y) === S;
    }
    function j(Y) {
      return v(Y) === y;
    }
    function G(Y) {
      return v(Y) === n;
    }
    function F(Y) {
      return v(Y) === a;
    }
    function ne(Y) {
      return v(Y) === t;
    }
    function x(Y) {
      return v(Y) === u;
    }
    function ce(Y) {
      return v(Y) === c;
    }
    ie.ContextConsumer = k, ie.ContextProvider = A, ie.Element = Q, ie.ForwardRef = H, ie.Fragment = J, ie.Lazy = N, ie.Memo = Z, ie.Portal = te, ie.Profiler = R, ie.StrictMode = T, ie.Suspense = g, ie.SuspenseList = P, ie.isAsyncMode = d, ie.isConcurrentMode = b, ie.isContextConsumer = I, ie.isContextProvider = E, ie.isElement = w, ie.isForwardRef = W, ie.isFragment = z, ie.isLazy = C, ie.isMemo = j, ie.isPortal = G, ie.isProfiler = F, ie.isStrictMode = ne, ie.isSuspense = x, ie.isSuspenseList = ce, ie.isValidElementType = B, ie.typeOf = v;
  }()), ie;
}
process.env.NODE_ENV === "production" ? Nr.exports = ma() : Nr.exports = ga();
var ba = Nr.exports, Or, Er, cr = Object.prototype.toString;
function _a(e) {
  return cr.call(e) === "[object Array]";
}
function we(e) {
  return cr.call(e) === "[object Object]";
}
function an(e) {
  return cr.call(e) === "[object String]";
}
function Dr(e) {
  return cr.call(e) === "[object Number]" && e === e;
}
function ar(e) {
  return e === void 0;
}
function Zr(e) {
  return typeof e == "function";
}
function Oa(e, n) {
  return e == null || e === !1 || typeof e == "string" && (n ? e.trim() === "" : e === "");
}
var on = function(e) {
  return e && Ur(e) && typeof e.type == "function";
}, Ea = function(e) {
  var n;
  return on(e) && !!(!((n = e.type.prototype) === null || n === void 0) && n.isReactComponent);
}, wa = function(e) {
  return Ur(e) && typeof e.type == "string";
}, Ca = Number((Or = Ne.version) === null || Or === void 0 ? void 0 : Or.split(".")[0]) > 17, Sa = Number((Er = Ne.version) === null || Er === void 0 ? void 0 : Er.split(".")[0]) > 18, Ta = function(e) {
  if (!Sa)
    return ba.isForwardRef(e);
  var n = Symbol.for("react.element"), r = Symbol.for("react.transitional.element"), t = Symbol.for("react.forward_ref");
  if (typeof e == "object" && e !== null) {
    var a = e.$$typeof;
    if (a === n || a === r) {
      var o = e.type, i = o && o.$$typeof;
      return i === t;
    }
  }
  return !1;
}, xa = function(e) {
  return wa(e) || Ta(e) ? !0 : on(e) ? Ea(e) : !1;
};
function sn(e, n) {
  for (var r = [], t = 2; t < arguments.length; t++)
    r[t - 2] = arguments[t];
  if (process.env.NODE_ENV !== "production" && console && e)
    return console.error("[@arco-design/web-react]: " + n, r ? { detail: r } : void 0);
}
var Pa = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}, Ra = globalThis && globalThis.__spreadArray || function(e, n, r) {
  if (r || arguments.length === 2)
    for (var t = 0, a = n.length, o; t < a; t++)
      (o || !(t in n)) && (o || (o = Array.prototype.slice.call(n, 0, t)), o[t] = n[t]);
  return e.concat(o || Array.prototype.slice.call(n));
};
function ve() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  for (var r = e.length, t = [], a = function(i) {
    var s = e[i];
    if (!s)
      return "continue";
    an(s) ? t.push(s) : _a(s) ? t = t.concat(s) : we(s) ? Object.keys(s).forEach(function(f) {
      s[f] && t.push(f);
    }) : sn(!0, "arguments must be one of string/array/object.");
  }, o = 0; o < r; o++)
    a(o);
  return Ra([], Pa(new Set(t)), !1).join(" ");
}
var Ir = { exports: {} }, tr = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function $a() {
  if (St)
    return se;
  St = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function q(v) {
    if (typeof v == "object" && v !== null) {
      var k = v.$$typeof;
      switch (k) {
        case n:
          switch (v = v.type, v) {
            case f:
            case u:
            case t:
            case o:
            case a:
            case y:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case c:
                case D:
                case m:
                case i:
                  return v;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function B(v) {
    return q(v) === u;
  }
  return se.AsyncMode = f, se.ConcurrentMode = u, se.ContextConsumer = s, se.ContextProvider = i, se.Element = n, se.ForwardRef = c, se.Fragment = t, se.Lazy = D, se.Memo = m, se.Portal = r, se.Profiler = o, se.StrictMode = a, se.Suspense = y, se.isAsyncMode = function(v) {
    return B(v) || q(v) === f;
  }, se.isConcurrentMode = B, se.isContextConsumer = function(v) {
    return q(v) === s;
  }, se.isContextProvider = function(v) {
    return q(v) === i;
  }, se.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === n;
  }, se.isForwardRef = function(v) {
    return q(v) === c;
  }, se.isFragment = function(v) {
    return q(v) === t;
  }, se.isLazy = function(v) {
    return q(v) === D;
  }, se.isMemo = function(v) {
    return q(v) === m;
  }, se.isPortal = function(v) {
    return q(v) === r;
  }, se.isProfiler = function(v) {
    return q(v) === o;
  }, se.isStrictMode = function(v) {
    return q(v) === a;
  }, se.isSuspense = function(v) {
    return q(v) === y;
  }, se.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === t || v === u || v === o || v === a || v === y || v === S || typeof v == "object" && v !== null && (v.$$typeof === D || v.$$typeof === m || v.$$typeof === i || v.$$typeof === s || v.$$typeof === c || v.$$typeof === p || v.$$typeof === V || v.$$typeof === U || v.$$typeof === $);
  }, se.typeOf = q, se;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function ja() {
  return Tt || (Tt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, $ = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
    function q(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === t || x === u || x === o || x === a || x === y || x === S || typeof x == "object" && x !== null && (x.$$typeof === D || x.$$typeof === m || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || x.$$typeof === p || x.$$typeof === V || x.$$typeof === U || x.$$typeof === $);
    }
    function B(x) {
      if (typeof x == "object" && x !== null) {
        var ce = x.$$typeof;
        switch (ce) {
          case n:
            var Y = x.type;
            switch (Y) {
              case f:
              case u:
              case t:
              case o:
              case a:
              case y:
                return Y;
              default:
                var me = Y && Y.$$typeof;
                switch (me) {
                  case s:
                  case c:
                  case D:
                  case m:
                  case i:
                    return me;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var v = f, k = u, A = s, Q = i, H = n, J = c, N = t, Z = D, te = m, R = r, T = o, g = a, P = y, _ = !1;
    function L(x) {
      return _ || (_ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(x) || B(x) === f;
    }
    function d(x) {
      return B(x) === u;
    }
    function b(x) {
      return B(x) === s;
    }
    function I(x) {
      return B(x) === i;
    }
    function E(x) {
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }
    function w(x) {
      return B(x) === c;
    }
    function W(x) {
      return B(x) === t;
    }
    function z(x) {
      return B(x) === D;
    }
    function C(x) {
      return B(x) === m;
    }
    function j(x) {
      return B(x) === r;
    }
    function G(x) {
      return B(x) === o;
    }
    function F(x) {
      return B(x) === a;
    }
    function ne(x) {
      return B(x) === y;
    }
    le.AsyncMode = v, le.ConcurrentMode = k, le.ContextConsumer = A, le.ContextProvider = Q, le.Element = H, le.ForwardRef = J, le.Fragment = N, le.Lazy = Z, le.Memo = te, le.Portal = R, le.Profiler = T, le.StrictMode = g, le.Suspense = P, le.isAsyncMode = L, le.isConcurrentMode = d, le.isContextConsumer = b, le.isContextProvider = I, le.isElement = E, le.isForwardRef = w, le.isFragment = W, le.isLazy = z, le.isMemo = C, le.isPortal = j, le.isProfiler = G, le.isStrictMode = F, le.isSuspense = ne, le.isValidElementType = q, le.typeOf = B;
  }()), le;
}
var xt;
function ln() {
  return xt || (xt = 1, process.env.NODE_ENV === "production" ? tr.exports = $a() : tr.exports = ja()), tr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var wr, Pt;
function Ma() {
  if (Pt)
    return wr;
  Pt = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function t(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(i).map(function(c) {
        return i[c];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return wr = a() ? Object.assign : function(o, i) {
    for (var s, f = t(o), u, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var y in s)
        n.call(s, y) && (f[y] = s[y]);
      if (e) {
        u = e(s);
        for (var S = 0; S < u.length; S++)
          r.call(s, u[S]) && (f[u[S]] = s[u[S]]);
      }
    }
    return f;
  }, wr;
}
var Cr, Rt;
function Xr() {
  if (Rt)
    return Cr;
  Rt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Cr = e, Cr;
}
var Sr, $t;
function un() {
  return $t || ($t = 1, Sr = Function.call.bind(Object.prototype.hasOwnProperty)), Sr;
}
var Tr, jt;
function Na() {
  if (jt)
    return Tr;
  jt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = Xr(), r = {}, t = un();
    e = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function a(o, i, s, f, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (t(o, c)) {
          var y;
          try {
            if (typeof o[c] != "function") {
              var S = Error(
                (f || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            y = o[c](i, c, f, s, null, n);
          } catch (D) {
            y = D;
          }
          if (y && !(y instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var m = u ? u() : "";
            e(
              "Failed " + s + " type: " + y.message + (m ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Tr = a, Tr;
}
var xr, Mt;
function Da() {
  if (Mt)
    return xr;
  Mt = 1;
  var e = ln(), n = Ma(), r = Xr(), t = un(), a = Na(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return xr = function(s, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function y(d) {
      var b = d && (u && d[u] || d[c]);
      if (typeof b == "function")
        return b;
    }
    var S = "<<anonymous>>", m = {
      array: V("array"),
      bigint: V("bigint"),
      bool: V("boolean"),
      func: V("function"),
      number: V("number"),
      object: V("object"),
      string: V("string"),
      symbol: V("symbol"),
      any: U(),
      arrayOf: q,
      element: B(),
      elementType: v(),
      instanceOf: k,
      node: J(),
      objectOf: Q,
      oneOf: A,
      oneOfType: H,
      shape: Z,
      exact: te
    };
    function D(d, b) {
      return d === b ? d !== 0 || 1 / d === 1 / b : d !== d && b !== b;
    }
    function $(d, b) {
      this.message = d, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    $.prototype = Error.prototype;
    function p(d) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, I = 0;
      function E(W, z, C, j, G, F, ne) {
        if (j = j || S, F = F || C, ne !== r) {
          if (f) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = j + ":" + C;
            !b[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ce] = !0, I++);
          }
        }
        return z[C] == null ? W ? z[C] === null ? new $("The " + G + " `" + F + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new $("The " + G + " `" + F + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : d(z, C, j, G, F);
      }
      var w = E.bind(null, !1);
      return w.isRequired = E.bind(null, !0), w;
    }
    function V(d) {
      function b(I, E, w, W, z, C) {
        var j = I[E], G = g(j);
        if (G !== d) {
          var F = P(j);
          return new $(
            "Invalid " + W + " `" + z + "` of type " + ("`" + F + "` supplied to `" + w + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return p(b);
    }
    function U() {
      return p(i);
    }
    function q(d) {
      function b(I, E, w, W, z) {
        if (typeof d != "function")
          return new $("Property `" + z + "` of component `" + w + "` has invalid PropType notation inside arrayOf.");
        var C = I[E];
        if (!Array.isArray(C)) {
          var j = g(C);
          return new $("Invalid " + W + " `" + z + "` of type " + ("`" + j + "` supplied to `" + w + "`, expected an array."));
        }
        for (var G = 0; G < C.length; G++) {
          var F = d(C, G, w, W, z + "[" + G + "]", r);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return p(b);
    }
    function B() {
      function d(b, I, E, w, W) {
        var z = b[I];
        if (!s(z)) {
          var C = g(z);
          return new $("Invalid " + w + " `" + W + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(d);
    }
    function v() {
      function d(b, I, E, w, W) {
        var z = b[I];
        if (!e.isValidElementType(z)) {
          var C = g(z);
          return new $("Invalid " + w + " `" + W + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(d);
    }
    function k(d) {
      function b(I, E, w, W, z) {
        if (!(I[E] instanceof d)) {
          var C = d.name || S, j = L(I[E]);
          return new $("Invalid " + W + " `" + z + "` of type " + ("`" + j + "` supplied to `" + w + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return p(b);
    }
    function A(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function b(I, E, w, W, z) {
        for (var C = I[E], j = 0; j < d.length; j++)
          if (D(C, d[j]))
            return null;
        var G = JSON.stringify(d, function(ne, x) {
          var ce = P(x);
          return ce === "symbol" ? String(x) : x;
        });
        return new $("Invalid " + W + " `" + z + "` of value `" + String(C) + "` " + ("supplied to `" + w + "`, expected one of " + G + "."));
      }
      return p(b);
    }
    function Q(d) {
      function b(I, E, w, W, z) {
        if (typeof d != "function")
          return new $("Property `" + z + "` of component `" + w + "` has invalid PropType notation inside objectOf.");
        var C = I[E], j = g(C);
        if (j !== "object")
          return new $("Invalid " + W + " `" + z + "` of type " + ("`" + j + "` supplied to `" + w + "`, expected an object."));
        for (var G in C)
          if (t(C, G)) {
            var F = d(C, G, w, W, z + "." + G, r);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return p(b);
    }
    function H(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var b = 0; b < d.length; b++) {
        var I = d[b];
        if (typeof I != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _(I) + " at index " + b + "."
          ), i;
      }
      function E(w, W, z, C, j) {
        for (var G = [], F = 0; F < d.length; F++) {
          var ne = d[F], x = ne(w, W, z, C, j, r);
          if (x == null)
            return null;
          x.data && t(x.data, "expectedType") && G.push(x.data.expectedType);
        }
        var ce = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new $("Invalid " + C + " `" + j + "` supplied to " + ("`" + z + "`" + ce + "."));
      }
      return p(E);
    }
    function J() {
      function d(b, I, E, w, W) {
        return R(b[I]) ? null : new $("Invalid " + w + " `" + W + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return p(d);
    }
    function N(d, b, I, E, w) {
      return new $(
        (d || "React class") + ": " + b + " type `" + I + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + w + "`."
      );
    }
    function Z(d) {
      function b(I, E, w, W, z) {
        var C = I[E], j = g(C);
        if (j !== "object")
          return new $("Invalid " + W + " `" + z + "` of type `" + j + "` " + ("supplied to `" + w + "`, expected `object`."));
        for (var G in d) {
          var F = d[G];
          if (typeof F != "function")
            return N(w, W, z, G, P(F));
          var ne = F(C, G, w, W, z + "." + G, r);
          if (ne)
            return ne;
        }
        return null;
      }
      return p(b);
    }
    function te(d) {
      function b(I, E, w, W, z) {
        var C = I[E], j = g(C);
        if (j !== "object")
          return new $("Invalid " + W + " `" + z + "` of type `" + j + "` " + ("supplied to `" + w + "`, expected `object`."));
        var G = n({}, I[E], d);
        for (var F in G) {
          var ne = d[F];
          if (t(d, F) && typeof ne != "function")
            return N(w, W, z, F, P(ne));
          if (!ne)
            return new $(
              "Invalid " + W + " `" + z + "` key `" + F + "` supplied to `" + w + "`.\nBad object: " + JSON.stringify(I[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var x = ne(C, F, w, W, z + "." + F, r);
          if (x)
            return x;
        }
        return null;
      }
      return p(b);
    }
    function R(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(R);
          if (d === null || s(d))
            return !0;
          var b = y(d);
          if (b) {
            var I = b.call(d), E;
            if (b !== d.entries) {
              for (; !(E = I.next()).done; )
                if (!R(E.value))
                  return !1;
            } else
              for (; !(E = I.next()).done; ) {
                var w = E.value;
                if (w && !R(w[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function T(d, b) {
      return d === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function g(d) {
      var b = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : T(b, d) ? "symbol" : b;
    }
    function P(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var b = g(d);
      if (b === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function _(d) {
      var b = P(d);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function L(d) {
      return !d.constructor || !d.constructor.name ? S : d.constructor.name;
    }
    return m.checkPropTypes = a, m.resetWarningCache = a.resetWarningCache, m.PropTypes = m, m;
  }, xr;
}
var Pr, Nt;
function Ia() {
  if (Nt)
    return Pr;
  Nt = 1;
  var e = Xr();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, Pr = function() {
    function t(i, s, f, u, c, y) {
      if (y !== e) {
        var S = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw S.name = "Invariant Violation", S;
      }
    }
    t.isRequired = t;
    function a() {
      return t;
    }
    var o = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: a,
      element: t,
      elementType: t,
      instanceOf: a,
      node: t,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return o.PropTypes = o, o;
  }, Pr;
}
if (process.env.NODE_ENV !== "production") {
  var Aa = ln(), ka = !0;
  Ir.exports = Da()(Aa.isElement, ka);
} else
  Ir.exports = Ia()();
var La = Ir.exports;
const X = /* @__PURE__ */ ur(La);
var za = Ne, Ya;
try {
  Ya = za.createRoot;
} catch {
}
var Pe;
function Fa(e) {
  var n = e.constructor;
  if (typeof n != "function")
    return !1;
  !Pe && typeof WeakSet == "function" && (Pe = /* @__PURE__ */ new WeakSet());
  var r = !!(Pe != null && Pe.has(n));
  return Pe == null || Pe.add(n), r;
}
var Wa = function(e, n) {
  return e && e instanceof Element ? e : e && e.current && e.current instanceof Element ? e.current : e && Zr(e.getRootDOMNode) ? e.getRootDOMNode() : e instanceof la && Ne.findDOMNode ? Ne.findDOMNode(e) : n && (sn(Ca && !Fa(n), "Element does not define the `getRootDOMNode` method causing a call to React.findDOMNode. but findDOMNode is deprecated in StrictMode. Please check the code logic", { element: e, instance: n }), Ne.findDOMNode) ? Ne.findDOMNode(n) : null;
}, Va = function(e, n) {
  e && e.ref && (Zr(e.ref) && (e == null || e.ref(n)), "current" in e.ref && (e.ref.current = n));
};
function Dt(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function It(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Dt(Object(r), !0).forEach(function(t) {
      Fe(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Ba(e, n) {
  var r = ye(We), t = r.prefixCls, a = t === void 0 ? "arco" : t, o = e.spin, i = e.className, s = It(It({
    "aria-hidden": !0,
    focusable: !1,
    ref: n
  }, e), {}, {
    className: "".concat(i ? i + " " : "").concat(a, "-icon ").concat(a, "-icon-loading")
  });
  return o && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, /* @__PURE__ */ h.createElement("svg", $e({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    viewBox: "0 0 48 48"
  }, s), /* @__PURE__ */ h.createElement("path", {
    d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
  }));
}
var Qr = /* @__PURE__ */ h.forwardRef(Ba);
Qr.defaultProps = {
  isIcon: !0
};
Qr.displayName = "IconLoading";
const et = Qr;
var Ar = globalThis && globalThis.__assign || function() {
  return Ar = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ar.apply(this, arguments);
}, qa = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
};
function cn(e) {
  var n, r = e.children, t = e.className, a = e.disabled, o = e.prefix, i = e.size, s = i === void 0 ? "default" : i, f = qa(e, ["children", "className", "disabled", "prefix", "size"]), u = ye(_e).getPrefixCls, c = u("icon-hover");
  return h.createElement("span", Ar({ className: ve(c, (n = {}, n[o + "-icon-hover"] = o, n[c + "-size-" + s] = s && s !== "default", n[c + "-disabled"] = a, n), t), onClick: e.onClick }, f), r);
}
var Ha = { exports: {} }, fn = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Ae, function() {
    var r = 1e3, t = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", f = "hour", u = "day", c = "week", y = "month", S = "quarter", m = "year", D = "date", $ = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, V = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, U = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var T = ["th", "st", "nd", "rd"], g = R % 100;
      return "[" + R + (T[(g - 20) % 10] || T[g] || T[0]) + "]";
    } }, q = function(R, T, g) {
      var P = String(R);
      return !P || P.length >= T ? R : "" + Array(T + 1 - P.length).join(g) + R;
    }, B = { s: q, z: function(R) {
      var T = -R.utcOffset(), g = Math.abs(T), P = Math.floor(g / 60), _ = g % 60;
      return (T <= 0 ? "+" : "-") + q(P, 2, "0") + ":" + q(_, 2, "0");
    }, m: function R(T, g) {
      if (T.date() < g.date())
        return -R(g, T);
      var P = 12 * (g.year() - T.year()) + (g.month() - T.month()), _ = T.clone().add(P, y), L = g - _ < 0, d = T.clone().add(P + (L ? -1 : 1), y);
      return +(-(P + (g - _) / (L ? _ - d : d - _)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: y, y: m, w: c, d: u, D, h: f, m: s, s: i, ms: o, Q: S }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, v = "en", k = {};
    k[v] = U;
    var A = "$isDayjsObject", Q = function(R) {
      return R instanceof Z || !(!R || !R[A]);
    }, H = function R(T, g, P) {
      var _;
      if (!T)
        return v;
      if (typeof T == "string") {
        var L = T.toLowerCase();
        k[L] && (_ = L), g && (k[L] = g, _ = L);
        var d = T.split("-");
        if (!_ && d.length > 1)
          return R(d[0]);
      } else {
        var b = T.name;
        k[b] = T, _ = b;
      }
      return !P && _ && (v = _), _ || !P && v;
    }, J = function(R, T) {
      if (Q(R))
        return R.clone();
      var g = typeof T == "object" ? T : {};
      return g.date = R, g.args = arguments, new Z(g);
    }, N = B;
    N.l = H, N.i = Q, N.w = function(R, T) {
      return J(R, { locale: T.$L, utc: T.$u, x: T.$x, $offset: T.$offset });
    };
    var Z = function() {
      function R(g) {
        this.$L = H(g.locale, null, !0), this.parse(g), this.$x = this.$x || g.x || {}, this[A] = !0;
      }
      var T = R.prototype;
      return T.parse = function(g) {
        this.$d = function(P) {
          var _ = P.date, L = P.utc;
          if (_ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (N.u(_))
            return /* @__PURE__ */ new Date();
          if (_ instanceof Date)
            return new Date(_);
          if (typeof _ == "string" && !/Z$/i.test(_)) {
            var d = _.match(p);
            if (d) {
              var b = d[2] - 1 || 0, I = (d[7] || "0").substring(0, 3);
              return L ? new Date(Date.UTC(d[1], b, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, I)) : new Date(d[1], b, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, I);
            }
          }
          return new Date(_);
        }(g), this.init();
      }, T.init = function() {
        var g = this.$d;
        this.$y = g.getFullYear(), this.$M = g.getMonth(), this.$D = g.getDate(), this.$W = g.getDay(), this.$H = g.getHours(), this.$m = g.getMinutes(), this.$s = g.getSeconds(), this.$ms = g.getMilliseconds();
      }, T.$utils = function() {
        return N;
      }, T.isValid = function() {
        return this.$d.toString() !== $;
      }, T.isSame = function(g, P) {
        var _ = J(g);
        return this.startOf(P) <= _ && _ <= this.endOf(P);
      }, T.isAfter = function(g, P) {
        return J(g) < this.startOf(P);
      }, T.isBefore = function(g, P) {
        return this.endOf(P) < J(g);
      }, T.$g = function(g, P, _) {
        return N.u(g) ? this[P] : this.set(_, g);
      }, T.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, T.valueOf = function() {
        return this.$d.getTime();
      }, T.startOf = function(g, P) {
        var _ = this, L = !!N.u(P) || P, d = N.p(g), b = function(G, F) {
          var ne = N.w(_.$u ? Date.UTC(_.$y, F, G) : new Date(_.$y, F, G), _);
          return L ? ne : ne.endOf(u);
        }, I = function(G, F) {
          return N.w(_.toDate()[G].apply(_.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(F)), _);
        }, E = this.$W, w = this.$M, W = this.$D, z = "set" + (this.$u ? "UTC" : "");
        switch (d) {
          case m:
            return L ? b(1, 0) : b(31, 11);
          case y:
            return L ? b(1, w) : b(0, w + 1);
          case c:
            var C = this.$locale().weekStart || 0, j = (E < C ? E + 7 : E) - C;
            return b(L ? W - j : W + (6 - j), w);
          case u:
          case D:
            return I(z + "Hours", 0);
          case f:
            return I(z + "Minutes", 1);
          case s:
            return I(z + "Seconds", 2);
          case i:
            return I(z + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, T.endOf = function(g) {
        return this.startOf(g, !1);
      }, T.$set = function(g, P) {
        var _, L = N.p(g), d = "set" + (this.$u ? "UTC" : ""), b = (_ = {}, _[u] = d + "Date", _[D] = d + "Date", _[y] = d + "Month", _[m] = d + "FullYear", _[f] = d + "Hours", _[s] = d + "Minutes", _[i] = d + "Seconds", _[o] = d + "Milliseconds", _)[L], I = L === u ? this.$D + (P - this.$W) : P;
        if (L === y || L === m) {
          var E = this.clone().set(D, 1);
          E.$d[b](I), E.init(), this.$d = E.set(D, Math.min(this.$D, E.daysInMonth())).$d;
        } else
          b && this.$d[b](I);
        return this.init(), this;
      }, T.set = function(g, P) {
        return this.clone().$set(g, P);
      }, T.get = function(g) {
        return this[N.p(g)]();
      }, T.add = function(g, P) {
        var _, L = this;
        g = Number(g);
        var d = N.p(P), b = function(w) {
          var W = J(L);
          return N.w(W.date(W.date() + Math.round(w * g)), L);
        };
        if (d === y)
          return this.set(y, this.$M + g);
        if (d === m)
          return this.set(m, this.$y + g);
        if (d === u)
          return b(1);
        if (d === c)
          return b(7);
        var I = (_ = {}, _[s] = t, _[f] = a, _[i] = r, _)[d] || 1, E = this.$d.getTime() + g * I;
        return N.w(E, this);
      }, T.subtract = function(g, P) {
        return this.add(-1 * g, P);
      }, T.format = function(g) {
        var P = this, _ = this.$locale();
        if (!this.isValid())
          return _.invalidDate || $;
        var L = g || "YYYY-MM-DDTHH:mm:ssZ", d = N.z(this), b = this.$H, I = this.$m, E = this.$M, w = _.weekdays, W = _.months, z = _.meridiem, C = function(F, ne, x, ce) {
          return F && (F[ne] || F(P, L)) || x[ne].slice(0, ce);
        }, j = function(F) {
          return N.s(b % 12 || 12, F, "0");
        }, G = z || function(F, ne, x) {
          var ce = F < 12 ? "AM" : "PM";
          return x ? ce.toLowerCase() : ce;
        };
        return L.replace(V, function(F, ne) {
          return ne || function(x) {
            switch (x) {
              case "YY":
                return String(P.$y).slice(-2);
              case "YYYY":
                return N.s(P.$y, 4, "0");
              case "M":
                return E + 1;
              case "MM":
                return N.s(E + 1, 2, "0");
              case "MMM":
                return C(_.monthsShort, E, W, 3);
              case "MMMM":
                return C(W, E);
              case "D":
                return P.$D;
              case "DD":
                return N.s(P.$D, 2, "0");
              case "d":
                return String(P.$W);
              case "dd":
                return C(_.weekdaysMin, P.$W, w, 2);
              case "ddd":
                return C(_.weekdaysShort, P.$W, w, 3);
              case "dddd":
                return w[P.$W];
              case "H":
                return String(b);
              case "HH":
                return N.s(b, 2, "0");
              case "h":
                return j(1);
              case "hh":
                return j(2);
              case "a":
                return G(b, I, !0);
              case "A":
                return G(b, I, !1);
              case "m":
                return String(I);
              case "mm":
                return N.s(I, 2, "0");
              case "s":
                return String(P.$s);
              case "ss":
                return N.s(P.$s, 2, "0");
              case "SSS":
                return N.s(P.$ms, 3, "0");
              case "Z":
                return d;
            }
            return null;
          }(F) || d.replace(":", "");
        });
      }, T.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, T.diff = function(g, P, _) {
        var L, d = this, b = N.p(P), I = J(g), E = (I.utcOffset() - this.utcOffset()) * t, w = this - I, W = function() {
          return N.m(d, I);
        };
        switch (b) {
          case m:
            L = W() / 12;
            break;
          case y:
            L = W();
            break;
          case S:
            L = W() / 3;
            break;
          case c:
            L = (w - E) / 6048e5;
            break;
          case u:
            L = (w - E) / 864e5;
            break;
          case f:
            L = w / a;
            break;
          case s:
            L = w / t;
            break;
          case i:
            L = w / r;
            break;
          default:
            L = w;
        }
        return _ ? L : N.a(L);
      }, T.daysInMonth = function() {
        return this.endOf(y).$D;
      }, T.$locale = function() {
        return k[this.$L];
      }, T.locale = function(g, P) {
        if (!g)
          return this.$L;
        var _ = this.clone(), L = H(g, P, !0);
        return L && (_.$L = L), _;
      }, T.clone = function() {
        return N.w(this.$d, this);
      }, T.toDate = function() {
        return new Date(this.valueOf());
      }, T.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, T.toISOString = function() {
        return this.$d.toISOString();
      }, T.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), te = Z.prototype;
    return J.prototype = te, [["$ms", o], ["$s", i], ["$m", s], ["$H", f], ["$W", u], ["$M", y], ["$y", m], ["$D", D]].forEach(function(R) {
      te[R[1]] = function(T) {
        return this.$g(T, R[0], R[1]);
      };
    }), J.extend = function(R, T) {
      return R.$i || (R(T, Z, J), R.$i = !0), J;
    }, J.locale = H, J.isDayjs = Q, J.unix = function(R) {
      return J(1e3 * R);
    }, J.en = k[v], J.Ls = k, J.p = {}, J;
  });
})(fn);
var Ua = fn.exports;
(function(e, n) {
  (function(r, t) {
    e.exports = t(Ua);
  })(Ae, function(r) {
    function t(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var a = t(r), o = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(i, s) {
      return s === "W" ? i + "周" : i + "日";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(i, s) {
      var f = 100 * i + s;
      return f < 600 ? "凌晨" : f < 900 ? "早上" : f < 1100 ? "上午" : f < 1300 ? "中午" : f < 1800 ? "下午" : "晚上";
    } };
    return a.default.locale(o, null, !0), o;
  });
})(Ha);
var At = {
  // 仅用于日历组件
  formatYear: "YYYY 年",
  // 仅用于日历组件
  formatMonth: "YYYY 年 MM 月",
  // 月份在前
  monthBeforeYear: !1,
  // DatePicker 相关组件面板头部的格式
  monthFormat: "M月",
  // DatePicker 相关组件面板头部的格式
  yearFormat: "YYYY年",
  today: "今天",
  view: {
    month: "月",
    year: "年",
    week: "周",
    day: "日"
  },
  month: {
    long: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    },
    short: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    }
  },
  week: {
    long: {
      self: "周",
      monday: "周一",
      tuesday: "周二",
      wednesday: "周三",
      thursday: "周四",
      friday: "周五",
      saturday: "周六",
      sunday: "周日"
    },
    short: {
      self: "周",
      monday: "一",
      tuesday: "二",
      wednesday: "三",
      thursday: "四",
      friday: "五",
      saturday: "六",
      sunday: "日"
    }
  }
};
const Ga = {
  locale: "zh-CN",
  dayjsLocale: "zh-cn",
  Calendar: At,
  DatePicker: {
    Calendar: At,
    placeholder: {
      date: "请选择日期",
      week: "请选择周",
      month: "请选择月份",
      year: "请选择年份",
      quarter: "请选择季度"
    },
    placeholders: {
      date: ["开始日期", "结束日期"],
      week: ["开始周", "结束周"],
      month: ["开始月份", "结束月份"],
      year: ["开始年份", "结束年份"],
      quarter: ["开始季度", "结束季度"]
    },
    selectTime: "选择时间",
    selectDate: "选择日期",
    today: "今天",
    now: "此刻",
    ok: "确定"
  },
  Drawer: {
    okText: "确定",
    cancelText: "取消"
  },
  Empty: {
    noData: "暂无数据"
  },
  Modal: {
    okText: "确定",
    cancelText: "取消"
  },
  Pagination: {
    goto: "前往",
    page: "页",
    countPerPage: "条/页",
    total: "共 {0} 条",
    prev: "上一页",
    next: "下一页",
    currentPage: "第 {0} 页",
    prevSomePages: "向前 {0} 页",
    nextSomePages: "向后 {0} 页",
    pageSize: "页码"
  },
  Popconfirm: {
    okText: "确定",
    cancelText: "取消"
  },
  Table: {
    okText: "确定",
    resetText: "重置",
    sortAscend: "点击升序",
    sortDescend: "点击降序",
    cancelSort: "取消排序"
  },
  TimePicker: {
    ok: "确定",
    placeholder: "请选择时间",
    placeholders: ["开始时间", "结束时间"],
    now: "此刻"
  },
  Progress: {
    success: "完成",
    error: "失败"
  },
  Upload: {
    start: "开始",
    cancel: "取消",
    delete: "删除",
    reupload: "点击重试",
    upload: "点击上传",
    preview: "预览",
    drag: "点击或拖拽文件到此处上传",
    dragHover: "释放文件并开始上传",
    error: "上传失败"
  },
  Typography: {
    copy: "复制",
    copied: "已复制",
    edit: "编辑",
    fold: "折叠",
    unfold: "展开"
  },
  Transfer: {
    resetText: "重置"
  },
  ImagePreview: {
    fullScreen: "全屏",
    rotateRight: "向右旋转",
    rotateLeft: "向左旋转",
    zoomIn: "放大",
    zoomOut: "缩小",
    originalSize: "原始尺寸"
  },
  Form: {
    validateMessages: {
      required: "#{field} 是必填项",
      type: {
        string: "#{field} 不是合法的文本类型",
        number: "#{field} 不是合法的数字类型",
        boolean: "#{field} 不是合法的布尔类型",
        array: "#{field} 不是合法的数组类型",
        object: "#{field} 不是合法的对象类型",
        url: "#{field} 不是合法的 url 地址",
        email: "#{field} 不是合法的邮箱地址",
        ip: "#{field} 不是合法的 IP 地址"
      },
      number: {
        min: "`#{value}` 小于最小值 `#{min}`",
        max: "`#{value}` 大于最大值 `#{max}`",
        equal: "`#{value}` 不等于 `#{equal}`",
        range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
        positive: "`#{value}` 不是正数",
        negative: "`#{value}` 不是负数"
      },
      array: {
        length: "`#{field}` 个数不等于 #{length}",
        minLength: "`#{field}` 个数最少为 #{minLength}",
        maxLength: "`#{field}` 个数最多为 #{maxLength}",
        includes: "#{field} 不包含 #{includes}",
        deepEqual: "#{field} 不等于 #{deepEqual}",
        empty: "`#{field}` 不是空数组"
      },
      string: {
        minLength: "字符数最少为 #{minLength}",
        maxLength: "字符数最多为 #{maxLength}",
        length: "字符数必须是 #{length}",
        match: "`#{value}` 不符合模式 #{pattern}",
        uppercase: "`#{value}` 必须全大写",
        lowercase: "`#{value}` 必须全小写"
      },
      object: {
        deepEqual: "`#{field}` 不等于期望值",
        hasKeys: "`#{field}` 不包含必须字段",
        empty: "`#{field}` 不是对象"
      },
      boolean: {
        true: "期望是 `true`",
        false: "期望是 `false`"
      }
    }
  },
  ColorPicker: {
    history: "最近使用颜色",
    preset: "系统预设颜色",
    empty: "暂无",
    singleColor: "单色",
    gradientColor: "渐变色"
  }
};
function kt(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Lt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? kt(Object(r), !0).forEach(function(t) {
      Fe(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Ka(e, n) {
  var r = ye(We), t = r.prefixCls, a = t === void 0 ? "arco" : t, o = e.spin, i = e.className, s = Lt(Lt({
    "aria-hidden": !0,
    focusable: !1,
    ref: n
  }, e), {}, {
    className: "".concat(i ? i + " " : "").concat(a, "-icon ").concat(a, "-icon-empty")
  });
  return o && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, /* @__PURE__ */ h.createElement("svg", $e({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    viewBox: "0 0 48 48"
  }, s), /* @__PURE__ */ h.createElement("path", {
    d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
  }));
}
var rt = /* @__PURE__ */ h.forwardRef(Ka);
rt.defaultProps = {
  isIcon: !0
};
rt.displayName = "IconEmpty";
const Ja = rt;
var kr = globalThis && globalThis.__assign || function() {
  return kr = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, kr.apply(this, arguments);
};
function er(e, n) {
  var r = kr({}, e);
  return n.forEach(function(t) {
    t in r && delete r[t];
  }), r;
}
var ir = globalThis && globalThis.__assign || function() {
  return ir = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ir.apply(this, arguments);
};
function rr(e, n, r) {
  var t = e._ignorePropsFromGlobal, a = or(function() {
    return ir(ir({}, n), t ? {} : r);
  }, [n, r, t]), o = or(function() {
    var i = er(e, ["_ignorePropsFromGlobal"]);
    for (var s in a)
      i[s] === void 0 && (i[s] = a[s]);
    return i;
  }, [e, a]);
  return o;
}
var Lr = globalThis && globalThis.__assign || function() {
  return Lr = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Lr.apply(this, arguments);
}, Za = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
};
function Xa(e, n) {
  var r = ye(_e), t = r.getPrefixCls, a = r.locale, o = r.componentConfig, i = rr(e, {}, o == null ? void 0 : o.Empty), s = i.style, f = i.className, u = i.description, c = i.icon, y = i.imgSrc, S = Za(i, ["style", "className", "description", "icon", "imgSrc"]), m = t("empty"), D = ve(m, f), $ = a.Empty.noData, p = typeof u == "string" ? u : "empty";
  return h.createElement(
    "div",
    Lr({ ref: n, className: D, style: s }, S),
    h.createElement(
      "div",
      { className: m + "-wrapper" },
      h.createElement("div", { className: m + "-image" }, y ? h.createElement("img", { alt: p, src: y }) : c || h.createElement(Ja, null)),
      h.createElement("div", { className: m + "-description" }, u || $)
    )
  );
}
var dn = Qe(Xa);
dn.displayName = "Empty";
const Qa = ua(dn);
var zr = globalThis && globalThis.__assign || function() {
  return zr = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, zr.apply(this, arguments);
};
function eo(e) {
  switch (e) {
    default:
      return h.createElement(Qa, null);
  }
}
var ro = {
  locale: Ga,
  prefixCls: "arco",
  getPopupContainer: function() {
    return document.body;
  },
  size: "default",
  renderEmpty: eo,
  focusLock: {
    modal: { autoFocus: !0 },
    drawer: { autoFocus: !0 }
  }
}, _e = tn(zr({ getPrefixCls: function(e, n) {
  return (n || "arco") + "-" + e;
} }, ro)), zt = globalThis && globalThis.__assign || function() {
  return zt = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, zt.apply(this, arguments);
};
_e.Consumer;
function to(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var tt = to, no = typeof Ae == "object" && Ae && Ae.Object === Object && Ae, ao = no, oo = ao, io = typeof self == "object" && self && self.Object === Object && self, so = oo || io || Function("return this")(), vn = so, lo = vn, uo = function() {
  return lo.Date.now();
}, co = uo, fo = /\s/;
function vo(e) {
  for (var n = e.length; n-- && fo.test(e.charAt(n)); )
    ;
  return n;
}
var po = vo, ho = po, yo = /^\s+/;
function mo(e) {
  return e && e.slice(0, ho(e) + 1).replace(yo, "");
}
var go = mo, bo = vn, _o = bo.Symbol, pn = _o, Yt = pn, hn = Object.prototype, Oo = hn.hasOwnProperty, Eo = hn.toString, Ge = Yt ? Yt.toStringTag : void 0;
function wo(e) {
  var n = Oo.call(e, Ge), r = e[Ge];
  try {
    e[Ge] = void 0;
    var t = !0;
  } catch {
  }
  var a = Eo.call(e);
  return t && (n ? e[Ge] = r : delete e[Ge]), a;
}
var Co = wo, So = Object.prototype, To = So.toString;
function xo(e) {
  return To.call(e);
}
var Po = xo, Ft = pn, Ro = Co, $o = Po, jo = "[object Null]", Mo = "[object Undefined]", Wt = Ft ? Ft.toStringTag : void 0;
function No(e) {
  return e == null ? e === void 0 ? Mo : jo : Wt && Wt in Object(e) ? Ro(e) : $o(e);
}
var Do = No;
function Io(e) {
  return e != null && typeof e == "object";
}
var Ao = Io, ko = Do, Lo = Ao, zo = "[object Symbol]";
function Yo(e) {
  return typeof e == "symbol" || Lo(e) && ko(e) == zo;
}
var Fo = Yo, Wo = go, Vt = tt, Vo = Fo, Bt = 0 / 0, Bo = /^[-+]0x[0-9a-f]+$/i, qo = /^0b[01]+$/i, Ho = /^0o[0-7]+$/i, Uo = parseInt;
function Go(e) {
  if (typeof e == "number")
    return e;
  if (Vo(e))
    return Bt;
  if (Vt(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Vt(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Wo(e);
  var r = qo.test(e);
  return r || Ho.test(e) ? Uo(e.slice(2), r ? 2 : 8) : Bo.test(e) ? Bt : +e;
}
var Ko = Go, Jo = tt, Rr = co, qt = Ko, Zo = "Expected a function", Xo = Math.max, Qo = Math.min;
function ei(e, n, r) {
  var t, a, o, i, s, f, u = 0, c = !1, y = !1, S = !0;
  if (typeof e != "function")
    throw new TypeError(Zo);
  n = qt(n) || 0, Jo(r) && (c = !!r.leading, y = "maxWait" in r, o = y ? Xo(qt(r.maxWait) || 0, n) : o, S = "trailing" in r ? !!r.trailing : S);
  function m(k) {
    var A = t, Q = a;
    return t = a = void 0, u = k, i = e.apply(Q, A), i;
  }
  function D(k) {
    return u = k, s = setTimeout(V, n), c ? m(k) : i;
  }
  function $(k) {
    var A = k - f, Q = k - u, H = n - A;
    return y ? Qo(H, o - Q) : H;
  }
  function p(k) {
    var A = k - f, Q = k - u;
    return f === void 0 || A >= n || A < 0 || y && Q >= o;
  }
  function V() {
    var k = Rr();
    if (p(k))
      return U(k);
    s = setTimeout(V, $(k));
  }
  function U(k) {
    return s = void 0, S && t ? m(k) : (t = a = void 0, i);
  }
  function q() {
    s !== void 0 && clearTimeout(s), u = 0, t = f = a = s = void 0;
  }
  function B() {
    return s === void 0 ? i : U(Rr());
  }
  function v() {
    var k = Rr(), A = p(k);
    if (t = arguments, a = this, f = k, A) {
      if (s === void 0)
        return D(f);
      if (y)
        return clearTimeout(s), s = setTimeout(V, n), m(f);
    }
    return s === void 0 && (s = setTimeout(V, n)), i;
  }
  return v.cancel = q, v.flush = B, v;
}
var yn = ei;
const ri = /* @__PURE__ */ ur(yn);
var ti = yn, ni = tt, ai = "Expected a function";
function oi(e, n, r) {
  var t = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(ai);
  return ni(r) && (t = "leading" in r ? !!r.leading : t, a = "trailing" in r ? !!r.trailing : a), ti(e, n, {
    leading: t,
    maxWait: n,
    trailing: a
  });
}
var ii = oi;
const si = /* @__PURE__ */ ur(ii);
var li = function() {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
}(), Ht = function(e, n) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(n);
  for (var r = n; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}, mn = function() {
  if (typeof Map < "u")
    return Map;
  function e(n, r) {
    var t = -1;
    return n.some(function(a, o) {
      return a[0] === r ? (t = o, !0) : !1;
    }), t;
  }
  return (
    /** @class */
    function() {
      function n() {
        this.__entries__ = [];
      }
      return Object.defineProperty(n.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), n.prototype.get = function(r) {
        var t = e(this.__entries__, r), a = this.__entries__[t];
        return a && a[1];
      }, n.prototype.set = function(r, t) {
        var a = e(this.__entries__, r);
        ~a ? this.__entries__[a][1] = t : this.__entries__.push([r, t]);
      }, n.prototype.delete = function(r) {
        var t = this.__entries__, a = e(t, r);
        ~a && t.splice(a, 1);
      }, n.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, n.prototype.clear = function() {
        this.__entries__.splice(0);
      }, n.prototype.forEach = function(r, t) {
        t === void 0 && (t = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var i = o[a];
          r.call(t, i[1], i[0]);
        }
      }, n;
    }()
  );
}(), Yr = typeof window < "u" && typeof document < "u" && window.document === document, sr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ui = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(sr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), ci = 2;
function fi(e, n) {
  var r = !1, t = !1, a = 0;
  function o() {
    r && (r = !1, e()), t && s();
  }
  function i() {
    ui(o);
  }
  function s() {
    var f = Date.now();
    if (r) {
      if (f - a < ci)
        return;
      t = !0;
    } else
      r = !0, t = !1, setTimeout(i, n);
    a = f;
  }
  return s;
}
var di = 20, vi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], pi = typeof MutationObserver < "u", hi = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = fi(this.refresh.bind(this), di);
    }
    return e.prototype.addObserver = function(n) {
      ~this.observers_.indexOf(n) || this.observers_.push(n), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(n) {
      var r = this.observers_, t = r.indexOf(n);
      ~t && r.splice(t, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var n = this.updateObservers_();
      n && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var n = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return n.forEach(function(r) {
        return r.broadcastActive();
      }), n.length > 0;
    }, e.prototype.connect_ = function() {
      !Yr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), pi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Yr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(n) {
      var r = n.propertyName, t = r === void 0 ? "" : r, a = vi.some(function(o) {
        return !!~t.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), gn = function(e, n) {
  for (var r = 0, t = Object.keys(n); r < t.length; r++) {
    var a = t[r];
    Object.defineProperty(e, a, {
      value: n[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Le = function(e) {
  var n = e && e.ownerDocument && e.ownerDocument.defaultView;
  return n || sr;
}, bn = fr(0, 0, 0, 0);
function lr(e) {
  return parseFloat(e) || 0;
}
function Ut(e) {
  for (var n = [], r = 1; r < arguments.length; r++)
    n[r - 1] = arguments[r];
  return n.reduce(function(t, a) {
    var o = e["border-" + a + "-width"];
    return t + lr(o);
  }, 0);
}
function yi(e) {
  for (var n = ["top", "right", "bottom", "left"], r = {}, t = 0, a = n; t < a.length; t++) {
    var o = a[t], i = e["padding-" + o];
    r[o] = lr(i);
  }
  return r;
}
function mi(e) {
  var n = e.getBBox();
  return fr(0, 0, n.width, n.height);
}
function gi(e) {
  var n = e.clientWidth, r = e.clientHeight;
  if (!n && !r)
    return bn;
  var t = Le(e).getComputedStyle(e), a = yi(t), o = a.left + a.right, i = a.top + a.bottom, s = lr(t.width), f = lr(t.height);
  if (t.boxSizing === "border-box" && (Math.round(s + o) !== n && (s -= Ut(t, "left", "right") + o), Math.round(f + i) !== r && (f -= Ut(t, "top", "bottom") + i)), !_i(e)) {
    var u = Math.round(s + o) - n, c = Math.round(f + i) - r;
    Math.abs(u) !== 1 && (s -= u), Math.abs(c) !== 1 && (f -= c);
  }
  return fr(a.left, a.top, s, f);
}
var bi = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Le(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Le(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function _i(e) {
  return e === Le(e).document.documentElement;
}
function Oi(e) {
  return Yr ? bi(e) ? mi(e) : gi(e) : bn;
}
function Ei(e) {
  var n = e.x, r = e.y, t = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return gn(i, {
    x: n,
    y: r,
    width: t,
    height: a,
    top: r,
    right: n + t,
    bottom: a + r,
    left: n
  }), i;
}
function fr(e, n, r, t) {
  return { x: e, y: n, width: r, height: t };
}
var wi = (
  /** @class */
  function() {
    function e(n) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = fr(0, 0, 0, 0), this.target = n;
    }
    return e.prototype.isActive = function() {
      var n = Oi(this.target);
      return this.contentRect_ = n, n.width !== this.broadcastWidth || n.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var n = this.contentRect_;
      return this.broadcastWidth = n.width, this.broadcastHeight = n.height, n;
    }, e;
  }()
), Ci = (
  /** @class */
  function() {
    function e(n, r) {
      var t = Ei(r);
      gn(this, { target: n, contentRect: t });
    }
    return e;
  }()
), Si = (
  /** @class */
  function() {
    function e(n, r, t) {
      if (this.activeObservations_ = [], this.observations_ = new mn(), typeof n != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = n, this.controller_ = r, this.callbackCtx_ = t;
    }
    return e.prototype.observe = function(n) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(n instanceof Le(n).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(n) || (r.set(n, new wi(n)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(n) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(n instanceof Le(n).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(n) && (r.delete(n), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var n = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && n.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var n = this.callbackCtx_, r = this.activeObservations_.map(function(t) {
          return new Ci(t.target, t.broadcastRect());
        });
        this.callback_.call(n, r, n), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), _n = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new mn(), On = (
  /** @class */
  function() {
    function e(n) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = hi.getInstance(), t = new Si(n, r, this);
      _n.set(this, t);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  On.prototype[e] = function() {
    var n;
    return (n = _n.get(this))[e].apply(n, arguments);
  };
});
var Ti = function() {
  return typeof sr.ResizeObserver < "u" ? sr.ResizeObserver : On;
}(), xi = globalThis && globalThis.__extends || function() {
  var e = function(n, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, a) {
      t.__proto__ = a;
    } || function(t, a) {
      for (var o in a)
        Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
    }, e(n, r);
  };
  return function(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(n, r);
    function t() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), Pi = (
  /** @class */
  function(e) {
    xi(n, e);
    function n() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.getRootElement = function() {
        var t = r.props.getTargetDOMNode;
        return Wa((t == null ? void 0 : t()) || r.rootDOMRef, r);
      }, r.getRootDOMNode = function() {
        return r.getRootElement();
      }, r.componentWillUnmount = function() {
        r.resizeObserver && r.destroyResizeObserver();
      }, r.createResizeObserver = function() {
        var t = r.props.throttle, a = t === void 0 ? !0 : t, o = function(u) {
          var c, y;
          (y = (c = r.props).onResize) === null || y === void 0 || y.call(c, u);
        }, i = a ? si(o) : o, s = !0;
        r.resizeObserver = new Ti(function(u) {
          s && (s = !1, o(u)), i(u);
        });
        var f = r.getRootElement();
        f && r.resizeObserver.observe(f);
      }, r.destroyResizeObserver = function() {
        r.resizeObserver && r.resizeObserver.disconnect(), r.resizeObserver = null;
      }, r;
    }
    return n.prototype.componentDidMount = function() {
      h.isValidElement(this.props.children) ? this.createResizeObserver() : console.warn("The children of ResizeObserver is invalid.");
    }, n.prototype.componentDidUpdate = function() {
      !this.resizeObserver && this.getRootElement() && this.createResizeObserver();
    }, n.prototype.render = function() {
      var r = this, t = this.props.children;
      return xa(t) && Ur(t) && !this.props.getTargetDOMNode ? ca(t, {
        ref: function(a) {
          r.rootDOMRef = a, Va(t, a);
        }
      }) : (this.rootDOMRef = null, this.props.children);
    }, n;
  }(h.Component)
);
const Ri = Pi;
var $i = li ? Ye : fa;
const ji = $i;
var Fr = globalThis && globalThis.__assign || function() {
  return Fr = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Fr.apply(this, arguments);
}, Mi = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
};
function Ni(e, n) {
  var r = e.className, t = e.style, a = e.children, o = Mi(e, ["className", "style", "children"]), i = ye(_e).getPrefixCls, s = i("btn-group"), f = ve(s, r);
  return h.createElement("div", Fr({ ref: n, className: f, style: t }, o), a);
}
var En = h.forwardRef(Ni);
En.displayName = "ButtonGroup";
const Di = En;
var Je = globalThis && globalThis.__assign || function() {
  return Je = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Je.apply(this, arguments);
}, Ii = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
}, Ai = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}, ki = /^[\u4e00-\u9fa5]{2}$/;
function Li(e) {
  var n = [], r = !1;
  return h.Children.forEach(e, function(t) {
    var a = typeof t == "string" || typeof t == "number";
    if (a && r) {
      var o = n.length - 1, i = n[o];
      n[o] = "" + i + t;
    } else
      n.push(t);
    r = a;
  }), h.Children.map(n, function(t) {
    return typeof t == "string" ? h.createElement("span", null, t) : t;
  });
}
var zi = {
  htmlType: "button",
  type: "default",
  shape: "square"
};
function Yi(e, n) {
  var r, t = ye(_e), a = t.getPrefixCls, o = t.size, i = t.autoInsertSpaceInButton, s = t.componentConfig, f = t.rtl, u = rr(e, zi, s == null ? void 0 : s.Button), c = u.style, y = u.className, S = u.children, m = u.htmlType, D = u.type, $ = u.status, p = u.size, V = u.shape, U = u.href, q = u.anchorProps, B = u.disabled, v = u.loading, k = u.loadingFixedWidth, A = u.icon, Q = u.iconOnly, H = u.onClick, J = u.long, N = Ii(u, ["style", "className", "children", "htmlType", "type", "status", "size", "shape", "href", "anchorProps", "disabled", "loading", "loadingFixedWidth", "icon", "iconOnly", "onClick", "long"]), Z = v ? h.createElement(et, null) : A, te = Ai(je(!1), 2), R = te[0], T = te[1], g = Se(), P = n || g;
  Ye(function() {
    if (i && P && P.current) {
      var w = P.current.textContent;
      ki.test(w) ? R || T(!0) : R && T(!1);
    }
  }, [P.current, i]);
  var _ = a("btn"), L = D === "default" ? "secondary" : D, d = ve(_, _ + "-" + L, _ + "-size-" + (p || o), _ + "-shape-" + V, (r = {}, r[_ + "-long"] = J, r[_ + "-status-" + $] = $, r[_ + "-loading-fixed-width"] = k, r[_ + "-loading"] = v, r[_ + "-link"] = U, r[_ + "-icon-only"] = Q || !S && S !== 0 && Z, r[_ + "-disabled"] = B, r[_ + "-two-chinese-chars"] = R, r[_ + "-rtl"] = f, r), y), b = function(w) {
    if (v || B) {
      typeof (w == null ? void 0 : w.preventDefault) == "function" && w.preventDefault();
      return;
    }
    H && H(w);
  }, I = h.createElement(
    h.Fragment,
    null,
    Z,
    Li(S)
  );
  if (U) {
    var E = Je({}, q);
    return B ? delete E.href : E.href = U, h.createElement("a", Je({ ref: P }, N, E, { style: c, className: d, onClick: b }), I);
  }
  return h.createElement("button", Je({ ref: P }, N, { style: c, className: d, type: m, disabled: B, onClick: b }), I);
}
var Fi = Qe(Yi), dr = Fi;
dr.__BYTE_BUTTON = !0;
dr.Group = Di;
dr.displayName = "Button";
const wn = dr;
function Gt(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Kt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Gt(Object(r), !0).forEach(function(t) {
      Fe(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Wi(e, n) {
  var r = ye(We), t = r.prefixCls, a = t === void 0 ? "arco" : t, o = e.spin, i = e.className, s = Kt(Kt({
    "aria-hidden": !0,
    focusable: !1,
    ref: n
  }, e), {}, {
    className: "".concat(i ? i + " " : "").concat(a, "-icon ").concat(a, "-icon-search")
  });
  return o && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, /* @__PURE__ */ h.createElement("svg", $e({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    viewBox: "0 0 48 48"
  }, s), /* @__PURE__ */ h.createElement("path", {
    d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
  }));
}
var nt = /* @__PURE__ */ h.forwardRef(Wi);
nt.defaultProps = {
  isIcon: !0
};
nt.displayName = "IconSearch";
const Jt = nt;
function Vi(e) {
  var n = Se();
  return Ye(function() {
    n.current = e;
  }), n.current;
}
var Bi = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
};
function vr(e, n) {
  var r = n || {}, t = r.defaultValue, a = r.value, o = Se(!0), i = Vi(a), s = Bi(je(ar(a) ? ar(t) ? e : t : a), 2), f = s[0], u = s[1];
  Ye(function() {
    if (o.current) {
      o.current = !1;
      return;
    }
    a === void 0 && i !== a && u(a);
  }, [a]);
  var c = ar(a) ? f : a;
  return [c, u, f];
}
var Wr = globalThis && globalThis.__assign || function() {
  return Wr = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Wr.apply(this, arguments);
}, qi = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
}, Hi = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}, Cn = h.forwardRef(function(e, n) {
  var r, t = ye(_e).getPrefixCls, a = e.className, o = e.style, i = e.placeholder, s = e.disabled, f = e.searchButton, u = e.loading, c = e.defaultValue, y = e.addAfter, S = e.suffix, m = qi(e, ["className", "style", "placeholder", "disabled", "searchButton", "loading", "defaultValue", "addAfter", "suffix"]), D = we(e.maxLength) ? e.maxLength.length : e.maxLength, $ = we(e.maxLength) && e.maxLength.errorOnly ? void 0 : D, p = Hi(vr("", {
    defaultValue: "defaultValue" in e ? ze(e.defaultValue, $) : void 0,
    value: "value" in e ? ze(e.value, $) : void 0
  }), 2), V = p[0], U = p[1], q = t("input-search"), B = ve(q, (r = {}, r[q + "-button"] = f, r), a), v = function() {
    !s && e.onSearch && e.onSearch(V);
  };
  return h.createElement(it, Wr({}, er(m, ["onSearch"]), { disabled: s, className: B, style: o, ref: n, placeholder: i, addAfter: y !== void 0 ? y : f ? h.createElement(wn, { disabled: s, size: m.size, className: q + "-btn", type: "primary", onClick: v, loading: u, loadingFixedWidth: !0, icon: f === !0 && !u && h.createElement(Jt, null) }, f !== !0 && f) : null, suffix: S !== void 0 ? S : !f && (u ? h.createElement(et, null) : h.createElement(Jt, { onClick: v })), onChange: function(k, A) {
    U(k), e.onChange && e.onChange(k, A);
  }, defaultValue: c, onPressEnter: function(k) {
    v(), e.onPressEnter && e.onPressEnter(k);
  } }));
});
Cn.displayName = "Search";
const Ui = Cn;
var Gi = `
  position: absolute;
  min-height: 0 !important;
  max-height: none;
  height:0;
  visibility: hidden;
  z-index: -100;
  top: 0;
  right: 0;
`, Ki = [
  "border-width",
  "box-sizing",
  "font-family",
  "font-weight",
  "font-size",
  "font-variant",
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "text-indent",
  "text-rendering",
  "text-transform",
  "width"
], Re;
function Ji(e) {
  Re || (Re = document.createElement("textarea"), document.body.appendChild(Re));
  var n = window.getComputedStyle(e), r = `
    ` + Ki.map(function(i) {
    return i + ":" + n.getPropertyValue(i);
  }).join(";") + `
  `;
  Re.setAttribute("style", "" + Gi + r);
  var t = parseFloat(n.getPropertyValue("padding-top")) + parseFloat(n.getPropertyValue("padding-bottom")), a = n.getPropertyValue("box-sizing"), o = parseFloat(n.getPropertyValue("border-top-width")) + parseFloat(n.getPropertyValue("border-bottom-width"));
  return {
    paddingSize: t,
    boxSizing: a,
    borderSize: o
  };
}
function Zi(e, n) {
  var r = function() {
    var V, U;
    return we(e) && (V = e.minRows, U = e.maxRows), {
      minRows: V,
      maxRows: U
    };
  };
  if (e) {
    var t = r(), a = t.minRows, o = t.maxRows, i = n, s = Ji(i), f = s.paddingSize, u = s.boxSizing, c = s.borderSize;
    Re.value = i.value || i.placeholder || "";
    var y = Re.scrollHeight + c, S = void 0, m = void 0, D = void 0;
    if (a || o) {
      Re.value = "";
      var $ = Re.scrollHeight - f;
      Dr(a) && (S = $ * a, u === "border-box" && (S += f, S += c), y = Math.max(y, S)), Dr(o) && (m = $ * o, u === "border-box" && (m += f, m += c), D = y > m ? "auto" : "", m = Math.min(y, m));
    }
    var p = {};
    return p.height = y, S && (p.minHeight = S), m && (p.maxHeight = m), D && (p.overflowY = D), p;
  }
}
var Sn = {
  key: "Enter",
  code: 13
}, Xi = {
  key: "ArrowUp",
  code: 38
}, Qi = {
  key: "ArrowDown",
  code: 40
}, es = {
  key: "ArrowLeft",
  code: 37
}, rs = {
  key: "ArrowRight",
  code: 39
}, ts = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
};
function Tn(e) {
  var n = e.value, r = e.maxLength, t = e.onChange, a = e.onKeyDown, o = e.onPressEnter, i = e.beforeTriggerValueChangeCallback, s = e.normalizeHandler, f = Se(!1), u = ts(je(""), 2), c = u[0], y = u[1], S = function(m, D) {
    i && i(m), t && // https://github.com/arco-design/arco-design/issues/520
    // Avoid triggering onChange repeatedly for the same value
    // Compositionend is earlier than onchange in Firefox, different with chrome
    m !== n && (r === void 0 || m.length <= r) && t(m, D);
  };
  return {
    compositionValue: c,
    triggerValueChangeCallback: S,
    compositionHandler: function(m) {
      f.current = m.type !== "compositionend", f.current || (y(void 0), S(m.target.value, m));
    },
    valueChangeHandler: function(m) {
      var D = m.target.value;
      f.current ? (f.current = !1, y(D)) : (c && y(void 0), S(D, m));
    },
    keyDownHandler: function(m) {
      var D = m.keyCode || m.which;
      if (!f.current && (a && a(m), D === Sn.code)) {
        o && o(m);
        var $ = s == null ? void 0 : s("onPressEnter");
        $ && S($(m.target.value), m);
      }
    }
  };
}
var Ze = globalThis && globalThis.__assign || function() {
  return Ze = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ze.apply(this, arguments);
}, ns = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
}, $r = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}, as = function(e, n) {
  var r, t, a, o = e.className, i = e.style, s = e.wrapperStyle, f = e.placeholder, u = e.disabled, c = e.error, y = e.maxLength, S = e.showWordLimit, m = e.allowClear, D = e.onChange, $ = e.onClear, p = e.onKeyDown, V = e.onPressEnter, U = e.status, q = e.clearIcon, B = ns(e, ["className", "style", "wrapperStyle", "placeholder", "disabled", "error", "maxLength", "showWordLimit", "allowClear", "onChange", "onClear", "onKeyDown", "onPressEnter", "status", "clearIcon"]), v = we(y) ? y.length : y, k = we(y) ? y.errorOnly ? void 0 : y.length : y, A = Se(), Q = $r(je({}), 2), H = Q[0], J = Q[1], N = $r(vr("", {
    defaultValue: "defaultValue" in e ? ze(e.defaultValue, k) : void 0,
    value: "value" in e ? ze(e.value, k) : void 0
  }), 2), Z = N[0], te = N[1], R = Tn({
    value: Z,
    maxLength: k,
    onChange: D,
    onKeyDown: p,
    onPressEnter: V,
    beforeTriggerValueChangeCallback: function(de) {
      !("value" in e) && (k === void 0 || de.length <= k) && te(de);
    }
  }), T = R.compositionValue, g = R.compositionHandler, P = R.valueChangeHandler, _ = R.keyDownHandler, L = R.triggerValueChangeCallback, d = T || Z || "", b = ye(_e), I = b.getPrefixCls, E = b.rtl, w = I("textarea");
  u && (H.resize = "none");
  var W = function() {
    if (A.current && A.current.focus) {
      if (A.current.setSelectionRange) {
        var de = A.current.textContent.length;
        A.current.setSelectionRange(de, de);
      }
      A.current.focus();
    }
  }, z = function() {
    var de = Zi(e.autoSize, A.current);
    de && J(de);
  }, C = function(de) {
    de.stopPropagation(), W(), L("", de), $ == null || $();
  };
  ji(function() {
    z();
  }, [d]), Gr(n, function() {
    return {
      dom: A.current,
      focus: function() {
        W();
      },
      blur: function() {
        A.current && A.current.blur && A.current.blur();
      },
      getRootDOMNode: function() {
        return A.current;
      }
    };
  }, []);
  var j = Z ? Z.length : 0, G = v && S || m, F = or(function() {
    return !k && v ? j > v : !1;
  }, [j, v, k]), ne = U || (c || F ? "error" : void 0), x = ve(w, (r = {}, r[w + "-" + ne] = ne, // [`${prefixCls}-error`]: error || lengthError || status === 'error',
  r[w + "-disabled"] = u, r[w + "-rtl"] = E, r), o), ce = h.createElement("textarea", Ze({}, er(B, ["autoSize", "defaultValue"]), { maxLength: k, ref: A, style: Ze(Ze({}, i), H), className: x, placeholder: f, disabled: u, value: d, onChange: P, onKeyDown: _, onCompositionStart: g, onCompositionUpdate: g, onCompositionEnd: g }));
  if (G) {
    var Y = !u && m && Z, me = $r(E ? [v, j] : [j, v], 2), ge = me[0], fe = me[1];
    return h.createElement(
      "div",
      { className: ve(w + "-wrapper", (t = {}, t[w + "-clear-wrapper"] = m, t[w + "-wrapper-rtl"] = E, t)), style: s },
      ce,
      Y ? q !== void 0 ? h.createElement("span", { className: w + "-clear-icon", onClick: C, onMouseDown: function(de) {
        de.preventDefault();
      } }, q) : h.createElement(
        cn,
        { className: w + "-clear-icon" },
        h.createElement(nn, {
          onClick: C,
          // keep focus status
          onMouseDown: function(de) {
            de.preventDefault();
          }
        })
      ) : null,
      v && S && h.createElement(
        "span",
        { className: ve(w + "-word-limit", (a = {}, a[w + "-word-limit-error"] = F, a)) },
        ge,
        "/",
        fe
      )
    );
  }
  return ce;
}, xn = h.forwardRef(as);
xn.displayName = "TextArea";
const os = xn;
function Zt(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Xt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Zt(Object(r), !0).forEach(function(t) {
      Fe(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function is(e, n) {
  var r = ye(We), t = r.prefixCls, a = t === void 0 ? "arco" : t, o = e.spin, i = e.className, s = Xt(Xt({
    "aria-hidden": !0,
    focusable: !1,
    ref: n
  }, e), {}, {
    className: "".concat(i ? i + " " : "").concat(a, "-icon ").concat(a, "-icon-eye")
  });
  return o && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, /* @__PURE__ */ h.createElement("svg", $e({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    viewBox: "0 0 48 48"
  }, s), /* @__PURE__ */ h.createElement("path", {
    d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ h.createElement("path", {
    d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
  }));
}
var at = /* @__PURE__ */ h.forwardRef(is);
at.defaultProps = {
  isIcon: !0
};
at.displayName = "IconEye";
const ss = at;
function Qt(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function en(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Qt(Object(r), !0).forEach(function(t) {
      Fe(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function ls(e, n) {
  var r = ye(We), t = r.prefixCls, a = t === void 0 ? "arco" : t, o = e.spin, i = e.className, s = en(en({
    "aria-hidden": !0,
    focusable: !1,
    ref: n
  }, e), {}, {
    className: "".concat(i ? i + " " : "").concat(a, "-icon ").concat(a, "-icon-eye-invisible")
  });
  return o && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, /* @__PURE__ */ h.createElement("svg", $e({
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    viewBox: "0 0 48 48"
  }, s), /* @__PURE__ */ h.createElement("path", {
    d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
  }), /* @__PURE__ */ h.createElement("path", {
    d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
  }));
}
var ot = /* @__PURE__ */ h.forwardRef(ls);
ot.defaultProps = {
  isIcon: !0
};
ot.displayName = "IconEyeInvisible";
const us = ot;
function Pn(e) {
  var n = Ke(function(r) {
    return {
      onKeyDown: function(t) {
        var a, o, i, s, f, u, c = t.keyCode || t.which;
        c === Sn.code && ((a = r.onPressEnter) === null || a === void 0 || a.call(r, t)), c === Qi.code && ((o = r.onArrowDown) === null || o === void 0 || o.call(r, t)), c === es.code && ((i = r.onArrowLeft) === null || i === void 0 || i.call(r, t)), c === rs.code && ((s = r.onArrowRight) === null || s === void 0 || s.call(r, t)), c === Xi.code && ((f = r.onArrowUp) === null || f === void 0 || f.call(r, t)), (u = e == null ? void 0 : e.onKeyDown) === null || u === void 0 || u.call(e, t);
      }
    };
  }, []);
  return n;
}
var ke = globalThis && globalThis.__assign || function() {
  return ke = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ke.apply(this, arguments);
}, cs = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
}, fs = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}, Rn = h.forwardRef(function(e, n) {
  var r, t = fs(vr(!1, {
    defaultValue: e.defaultVisibility,
    value: e.visibility
  }), 2), a = t[0], o = t[1], i = ye(_e).getPrefixCls, s = Pn(), f = e.className, u = e.visibilityToggle, c = u === void 0 ? !0 : u, y = e.onVisibilityChange, S = cs(e, ["className", "visibilityToggle", "onVisibilityChange"]), m = i("input-password"), D = ve(m, (r = {}, r[m + "-visibility"] = c, r), f), $ = function(B) {
    "visibility" in e || o(B), y && y(B);
  }, p = e.suffix, V = function() {
    $(!a);
  };
  if (c) {
    var U = ke({
      onClick: V,
      // 预防focus丢失
      onMouseDown: function(B) {
        return B.preventDefault();
      },
      onMouseUp: function(B) {
        return B.preventDefault();
      }
    }, s({
      onPressEnter: V
    }));
    if (e.suffix)
      p = h.createElement("span", ke({}, U), e.suffix);
    else {
      var q = a ? ss : us;
      p = h.createElement(q, ke({}, U, {
        focusable: void 0,
        "aria-hidden": void 0,
        tabIndex: 0,
        className: m + "-visibility-icon"
      }));
    }
  }
  return h.createElement(it, ke({}, er(S, ["visibility", "defaultVisibility"]), { type: a ? "text" : "password", className: D, ref: n, suffix: p }));
});
Rn.displayName = "Password";
const ds = Rn;
function vs(e) {
  return typeof e == "string" ? e.replace(/(\s{2,})|(\s{1,}$)/g, function(n) {
    return " ".repeat(n.length);
  }) : e;
}
var Ee = globalThis && globalThis.__assign || function() {
  return Ee = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ee.apply(this, arguments);
}, ps = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
}, hs = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}, ys = 2, ms = function(e) {
  if (!e)
    return {};
  var n = window.getComputedStyle(e), r = [
    "font",
    "letterSpacing",
    "overflow",
    "tabSize",
    "textIndent",
    "textTransform",
    "whiteSpace",
    "wordBreak",
    "wordSpacing",
    "paddingLeft",
    "paddingRight",
    "borderLeft",
    "borderRight",
    "boxSizing"
  ];
  return r.reduce(function(t, a) {
    return t[a] = n[a], t;
  }, {});
}, $n = h.forwardRef(function(e, n) {
  var r, t = e.allowClear, a = e.disabled, o = e.placeholder, i = e.className, s = e.style, f = e.height, u = e.prefixCls, c = e.hasParent, y = e.size, S = e.value, m = e.autoFitWidth, D = e.onClear, $ = e.readOnly, p = e.onChange, V = e.onKeyDown, U = e.onPressEnter, q = e.maxLength, B = e.clearIcon, v = ps(e, ["allowClear", "disabled", "placeholder", "className", "style", "height", "prefixCls", "hasParent", "size", "value", "autoFitWidth", "onClear", "readOnly", "onChange", "onKeyDown", "onPressEnter", "maxLength", "clearIcon"]), k = er(v, [
    "error",
    "status",
    "showWordLimit",
    "className",
    "defaultValue",
    "addBefore",
    "addAfter",
    "afterStyle",
    "beforeStyle",
    "prefix",
    "suffix",
    "normalize",
    "normalizeTrigger",
    "autoWidth"
  ]), A = hs(je(), 2), Q = A[0], H = A[1], J = Pn(), N = Se(), Z = Se(), te = Se(null), R = we(q) ? q.errorOnly ? void 0 : q.length : q, T = function(C) {
    var j, G = e.normalizeTrigger || ["onBlur"];
    return Array.isArray(G) && G.indexOf(C) > -1 && Zr(e.normalize) && (j = e.normalize), j;
  }, g = Tn({
    value: S,
    maxLength: R,
    onChange: p,
    onKeyDown: V,
    onPressEnter: U,
    normalizeHandler: T
  }), P = g.compositionValue, _ = g.valueChangeHandler, L = g.compositionHandler, d = g.keyDownHandler, b = g.triggerValueChangeCallback, I = ve(u, u && (r = {}, r[u + "-size-" + y] = y, r[u + "-" + e.status] = e.status, r[u + "-disabled"] = a, r[u + "-autowidth"] = m, r), c ? void 0 : i), E = Ee(Ee({ "aria-invalid": e.status === "error" || void 0 }, k), { readOnly: $, maxLength: R, disabled: a, placeholder: o, value: P || S || "", className: I, onKeyDown: d, onChange: _, onCompositionStart: function(C) {
    var j;
    (j = v.onCompositionStart) === null || j === void 0 || j.call(v, C), L(C);
  }, onCompositionUpdate: function(C) {
    var j;
    (j = v.onCompositionUpdate) === null || j === void 0 || j.call(v, C), L(C);
  }, onCompositionEnd: function(C) {
    var j;
    (j = v.onCompositionEnd) === null || j === void 0 || j.call(v, C), L(C);
  }, onBlur: function(C) {
    var j;
    (j = e.onBlur) === null || j === void 0 || j.call(e, C);
    var G = T("onBlur");
    G && b(G(C.target.value), C);
  } });
  Gr(n, function() {
    return {
      dom: N.current,
      getRootDOMNode: function() {
        return N.current;
      },
      focus: function() {
        N.current && N.current.focus && N.current.focus();
      },
      blur: function() {
        N.current && N.current.blur && N.current.blur();
      }
    };
  }, []);
  var w = function() {
    if (Z.current && N.current) {
      var C = Z.current.offsetWidth;
      N.current.style.width = C + ys + "px";
    }
  };
  Ye(function() {
    m && ((!we(m) || !m.pure) && H(ms(N == null ? void 0 : N.current)), w());
  }, [m]);
  var W = E.value || o, z = function(C) {
    N.current && N.current.focus && N.current.focus(), b("", C), D == null || D();
  };
  return h.createElement(
    h.Fragment,
    null,
    t ? h.createElement(
      h.Fragment,
      null,
      h.createElement("input", Ee({ ref: N }, E)),
      !$ && !a && t && S ? B !== void 0 ? h.createElement("span", Ee({ tabIndex: 0, className: u + "-clear-icon" }, J({ onPressEnter: z }), { onClick: function(C) {
        C.stopPropagation(), z(C);
      }, onMouseDown: function(C) {
        C.preventDefault();
      } }), B) : h.createElement(
        cn,
        Ee({ tabIndex: 0, className: u + "-clear-icon" }, J({ onPressEnter: z }), { onClick: function(C) {
          C.stopPropagation(), z(C);
        } }),
        h.createElement(
          nn,
          {
            // keep focus status
            onMouseDown: function(C) {
              C.preventDefault();
            }
          }
        )
      ) : null
    ) : h.createElement("input", Ee({ ref: N }, E, { style: c ? {} : Ee(Ee({ minWidth: we(m) ? m.minWidth : void 0, maxWidth: we(m) ? m.maxWidth : void 0 }, s), "height" in e ? { height: f } : {}) })),
    m && h.createElement(
      Ri,
      { getTargetDOMNode: function() {
        return Z.current;
      }, onResize: function() {
        var C = Z.current.offsetWidth;
        if (typeof m == "object") {
          var j = typeof m.delay == "function" ? m.delay(C, te.current) : m.delay;
          j ? setTimeout(w, j) : w();
        } else
          w();
        te.current = C;
      } },
      h.createElement("span", { className: ve(u + "-mirror"), style: c ? Q : Ee(Ee(Ee({}, Q), s), "height" in e ? { height: f } : {}), ref: Z }, vs(W))
    )
  );
});
$n.displayName = "InputComponent";
const gs = $n;
var Vr = globalThis && globalThis.__assign || function() {
  return Vr = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vr.apply(this, arguments);
}, bs = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
}, jn = h.forwardRef(function(e, n) {
  var r, t = ye(_e).getPrefixCls, a = e.className, o = e.style, i = e.children, s = e.compact, f = bs(e, ["className", "style", "children", "compact"]), u = t("input-group"), c = ve(u, (r = {}, r[u + "-compact"] = s, r), a);
  return h.createElement("div", Vr({ ref: n, className: c, style: o }, f), i);
});
jn.displayName = "InputGroup";
const _s = jn;
var Te = globalThis && globalThis.__assign || function() {
  return Te = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Te.apply(this, arguments);
}, jr = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}, Os = function(e) {
  e.target.tagName !== "INPUT" && e.preventDefault();
}, nr = function(e, n, r, t) {
  return r === void 0 && (r = {}), n ? h.createElement("span", { style: r, className: e, onClick: t }, n) : null;
};
function ze(e, n) {
  var r = e !== null && !ar(e) && !an(e) ? String(e) : e || "";
  return n ? r.slice(0, n) : r;
}
function Es(e, n) {
  var r, t, a, o = ye(_e), i = o.getPrefixCls, s = o.size, f = o.componentConfig, u = o.rtl, c = rr(e, {}, f == null ? void 0 : f.Input), y = c.className, S = c.style, m = c.addBefore, D = c.addAfter, $ = c.suffix, p = c.prefix, V = c.beforeStyle, U = c.afterStyle, q = c.height, B = c.disabled, v = c.maxLength, k = c.showWordLimit, A = c.allowClear, Q = c.autoWidth, H = Q ? Te({ minWidth: 0, maxWidth: "100%" }, we(Q) ? Q : {}) : null, J = Te({ minWidth: H == null ? void 0 : H.minWidth, maxWidth: H == null ? void 0 : H.maxWidth, width: H && "auto" }, S), N = we(v) ? v.length : v, Z = we(v) && v.errorOnly ? void 0 : N, te = jr(je(!1), 2), R = te[0], T = te[1], g = Se(), P = Se(), _ = Se(), L = jr(vr("", {
    defaultValue: "defaultValue" in c ? ze(c.defaultValue, Z) : void 0,
    value: "value" in c ? ze(c.value, Z) : void 0
  }), 2), d = L[0], b = L[1];
  Gr(n, function() {
    var fe, de, xe;
    return {
      focus: (fe = g.current) === null || fe === void 0 ? void 0 : fe.focus,
      blur: (de = g.current) === null || de === void 0 ? void 0 : de.blur,
      dom: (xe = g.current) === null || xe === void 0 ? void 0 : xe.dom,
      getRootDOMNode: function() {
        var Be;
        return P.current || ((Be = g.current) === null || Be === void 0 ? void 0 : Be.dom);
      }
    };
  }, []);
  var I = function(fe, de) {
    "value" in c || b(fe), c.onChange && c.onChange(fe, de);
  }, E = i("input"), w = c.size || s, W = "height" in c, z = $, C = d ? d.length : 0, j = or(function() {
    return !Z && N ? C > N : !1;
  }, [C, N, Z]);
  if (N && k) {
    var G = jr(u ? [N, C] : [C, N], 2), F = G[0], ne = G[1];
    z = h.createElement(
      "span",
      { className: ve(E + "-word-limit", (r = {}, r[E + "-word-limit-error"] = j, r)) },
      F,
      "/",
      ne
    );
  }
  var x = ve(E + "-group-wrapper", E + "-group-wrapper-" + w, (t = {}, t[E + "-custom-height"] = W, t[E + "-has-suffix"] = z, t[E + "-group-wrapper-disabled"] = B, t[E + "-group-wrapper-rtl"] = u, t[E + "-group-wrapper-autowidth"] = H, t), y), ce = c.status || (c.error || j ? "error" : void 0), Y = m || D || z || p, me = h.createElement(gs, Te({ ref: g }, c, { autoFitWidth: !!H, style: J, status: ce, onFocus: function(fe) {
    T(!0), c.onFocus && c.onFocus(fe);
  }, onBlur: function(fe) {
    T(!1), c.onBlur && c.onBlur(fe);
  }, onChange: I, prefixCls: E, value: d, hasParent: !!Y || A, size: w })), ge = ve(E + "-inner-wrapper", (a = {}, a[E + "-inner-wrapper-" + ce] = ce, a[E + "-inner-wrapper-disabled"] = B, a[E + "-inner-wrapper-focus"] = R, a[E + "-inner-wrapper-has-prefix"] = p, a[E + "-inner-wrapper-" + w] = w, a[E + "-clear-wrapper"] = A, a[E + "-inner-wrapper-rtl"] = u, a));
  return Y ? h.createElement(
    "div",
    { ref: P, className: x, style: Te(Te({}, J), W ? { height: q } : {}) },
    h.createElement(
      "span",
      { className: E + "-group" },
      nr(E + "-group-addbefore", m, V),
      h.createElement(
        "span",
        { className: ge, ref: _, onMouseDown: function(fe) {
          fe.target.tagName !== "INPUT" && _.current && Ht(_.current, fe.target) && fe.preventDefault();
        }, onClick: function(fe) {
          _.current && Ht(_.current, fe.target) && g.current && g.current.focus();
        } },
        nr(E + "-group-prefix", p),
        me,
        nr(E + "-group-suffix", z)
      ),
      nr(E + "-group-addafter", D, U)
    )
  ) : A ? h.createElement("span", { ref: P, className: ve(y, ge), style: Te(Te({}, J), W ? { height: q } : {}), onMouseDown: Os, onClick: function() {
    g.current && g.current.focus();
  } }, me) : me;
}
var Ve = h.forwardRef(Es);
Ve.displayName = "Input";
Ve.Search = Ui;
Ve.TextArea = os;
Ve.Password = ds;
Ve.Group = _s;
const it = Ve;
var Br = globalThis && globalThis.__assign || function() {
  return Br = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Br.apply(this, arguments);
}, ws = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
};
function Cs(e, n) {
  var r, t = e.className, a = e.title, o = e.avatar, i = e.description, s = e.actionList, f = ws(e, ["className", "title", "avatar", "description", "actionList"]), u = ye(_e).getPrefixCls, c = u("card-meta"), y = ve(c, t);
  return h.createElement(
    "div",
    Br({}, f, { ref: n, className: y }),
    a || i ? h.createElement(
      "div",
      { className: c + "-content" },
      a && h.createElement("div", { className: c + "-title" }, a),
      i && h.createElement("div", { className: c + "-description" }, i)
    ) : null,
    o || s ? h.createElement(
      "div",
      { className: ve(c + "-footer ", (r = {}, r[c + "-footer-only-actions"] = !o, r)) },
      o ? h.createElement("div", { className: c + "-avatar" }, o) : null,
      s
    ) : null
  );
}
var Mn = h.forwardRef(Cs);
Mn.displayName = "CardMeta";
const Nn = Mn;
function Ss(e, n) {
  var r, t = e.children, a = e.style, o = e.className, i = e.hoverable, s = ye(_e).getPrefixCls, f = s("card-grid");
  return h.createElement("div", { ref: n, style: a, className: ve(f, (r = {}, r[f + "-hoverable"] = i, r), o) }, t);
}
var Dn = h.forwardRef(Ss);
Dn.displayName = "CardGrid";
const In = Dn;
var Ts = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}, xs = globalThis && globalThis.__spreadArray || function(e, n, r) {
  if (r || arguments.length === 2)
    for (var t = 0, a = n.length, o; t < a; t++)
      (o || !(t in n)) && (o || (o = Array.prototype.slice.call(n, 0, t)), o[t] = n[t]);
  return e.concat(o || Array.prototype.slice.call(n));
};
function Ps(e) {
  var n = ye(_e).getPrefixCls, r = n("spin") + "-dot", t = {
    width: e.size,
    height: e.size
  }, a = e.size ? parseInt(String(e.size)) : 0;
  return h.createElement("div", { className: r + "-list", style: {
    height: e.size,
    width: Dr(a) && a > 0 ? a * 7 : ""
  } }, xs([], Ts(new Array(5)), !1).map(function(o, i) {
    return h.createElement("div", { key: i, className: r, style: t });
  }));
}
var qr = globalThis && globalThis.__assign || function() {
  return qr = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, qr.apply(this, arguments);
}, Rs = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
}, $s = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), a, o = [], i;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = t.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = t.return) && r.call(t);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
};
function js(e, n) {
  var r, t = ye(_e), a = t.getPrefixCls, o = t.componentConfig, i = rr(e, {}, o == null ? void 0 : o.Spin), s = i.style, f = i.className, u = i.children, c = i.loading, y = i.size, S = i.icon, m = i.element, D = i.tip, $ = i.dot, p = i.delay, V = i.block, U = V === void 0 ? !1 : V, q = Rs(i, ["style", "className", "children", "loading", "size", "icon", "element", "tip", "dot", "delay", "block"]), B = $s(je(p ? !1 : c), 2), v = B[0], k = B[1], A = Ke(ri(k, p), [p]), Q = p ? v : c, H = a("spin");
  Ye(function() {
    return p && A(c), function() {
      A && A.cancel();
    };
  }, [c]);
  var J = h.createElement("span", { className: H + "-icon" }, S ? h.cloneElement(S, {
    className: ve(H.replace("-spin", "-icon") + "-loading"),
    style: {
      fontSize: y
    }
  }) : m || ($ ? h.createElement(Ps, { size: y }) : h.createElement(et, { style: { fontSize: y } })));
  return h.createElement("div", qr({ ref: n, className: ve(H, (r = {}, r[H + "-block"] = U, r[H + "-loading"] = Q, r[H + "-with-tip"] = D && !u, r), f), style: s }, q), Oa(u) ? h.createElement(
    h.Fragment,
    null,
    J,
    D ? h.createElement("div", { className: H + "-tip" }, D) : null
  ) : h.createElement(
    h.Fragment,
    null,
    h.createElement("div", { className: H + "-children" }, u),
    Q && h.createElement(
      "div",
      { className: H + "-loading-layer", style: { fontSize: y } },
      h.createElement(
        "span",
        { className: H + "-loading-layer-inner" },
        J,
        D ? h.createElement("div", { className: H + "-tip" }, D) : null
      )
    )
  ));
}
var An = h.forwardRef(js);
An.displayName = "Spin";
const Ms = An;
var Hr = globalThis && globalThis.__assign || function() {
  return Hr = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Hr.apply(this, arguments);
}, Ns = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
      n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
  return r;
}, Ds = {
  size: "default",
  bordered: !0
};
function Is(e, n) {
  var r, t, a = ye(_e), o = a.getPrefixCls, i = a.loadingElement, s = a.componentConfig, f = a.rtl, u = rr(e, Ds, s == null ? void 0 : s.Card), c = u.className, y = u.children, S = u.bordered, m = u.loading, D = u.hoverable, $ = u.size, p = u.title, V = u.extra, U = u.cover, q = u.actions, B = u.headerStyle, v = u.bodyStyle, k = Ns(u, ["className", "children", "bordered", "loading", "hoverable", "size", "title", "extra", "cover", "actions", "headerStyle", "bodyStyle"]), A = o("card"), Q = q && q.length ? h.createElement(
    "div",
    { className: A + "-actions" },
    h.createElement("div", { className: A + "-actions-right" }, q.map(function(Z, te) {
      return h.createElement("span", { key: "action-" + te, className: A + "-actions-item" }, Z);
    }))
  ) : null, H = !1, J = !1, N = h.Children.map(y, function(Z) {
    if (Z && Z.type) {
      if (Z.type === In)
        H = !0;
      else if (Z.type === Nn)
        return J = !0, h.cloneElement(Z, { actionList: Q });
    }
    return Z;
  });
  return h.createElement(
    "div",
    Hr({}, k, { ref: n, className: ve(A, A + "-size-" + $, (r = {}, r[A + "-loading"] = m, r[A + "-bordered"] = S, r[A + "-hoverable"] = D, r[A + "-contain-grid"] = H, r[A + "-rtl"] = f, r), c) }),
    p || V ? h.createElement(
      "div",
      { className: ve(A + "-header", (t = {}, t[A + "-header-no-title"] = !p, t)), style: B },
      p && h.createElement("div", { className: A + "-header-title" }, p),
      V && h.createElement("div", { className: A + "-header-extra" }, V)
    ) : null,
    U ? h.createElement("div", { className: A + "-cover" }, U) : null,
    h.createElement(
      "div",
      { className: A + "-body", style: v },
      m ? i || h.createElement(Ms, null) : N,
      J ? null : Q
    )
  );
}
var As = h.forwardRef(Is), pr = As;
pr.Meta = Nn;
pr.Grid = In;
pr.displayName = "Card";
const ks = pr;
var kn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var n = {}.hasOwnProperty;
    function r() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (o = a(o, t(s)));
      }
      return o;
    }
    function t(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return r.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var i = "";
      for (var s in o)
        n.call(o, s) && o[s] && (i = a(i, s));
      return i;
    }
    function a(o, i) {
      return i ? o ? o + " " + i : o + i : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(kn);
var Ls = kn.exports;
const st = /* @__PURE__ */ ur(Ls);
const Ln = Qe(({
  placeholder: e = "请输入内容",
  value: n,
  defaultValue: r,
  onChange: t,
  onFocus: a,
  onBlur: o,
  onPressEnter: i,
  size: s = "default",
  status: f,
  disabled: u = !1,
  allowClear: c = !1,
  prefix: y,
  suffix: S,
  maxLength: m,
  showWordLimit: D = !1,
  className: $,
  style: p,
  ...V
}, U) => {
  const [q, B] = je(!1), v = Ke((H) => {
    B(!0), a == null || a(H);
  }, [a]), k = Ke((H) => {
    B(!1), o == null || o(H);
  }, [o]), A = Ke((H, J) => {
    t == null || t(H, J);
  }, [t]), Q = st(
    "feishu-input",
    {
      "feishu-input--focused": q,
      "feishu-input--disabled": u,
      [`feishu-input--${s}`]: s,
      [`feishu-input--${f}`]: f
    },
    $
  );
  return /* @__PURE__ */ Kr.jsx(
    it,
    {
      ref: U,
      className: Q,
      style: p,
      placeholder: e,
      value: n,
      defaultValue: r,
      onChange: A,
      onFocus: v,
      onBlur: k,
      onPressEnter: i,
      size: s,
      status: f,
      disabled: u,
      allowClear: c,
      prefix: y,
      suffix: S,
      maxLength: m,
      showWordLimit: D,
      ...V
    }
  );
});
Ln.displayName = "FeishuInput";
Ln.propTypes = {
  placeholder: X.string,
  value: X.string,
  defaultValue: X.string,
  onChange: X.func,
  onFocus: X.func,
  onBlur: X.func,
  onPressEnter: X.func,
  size: X.oneOf(["small", "default", "large"]),
  status: X.oneOf(["error", "warning"]),
  disabled: X.bool,
  allowClear: X.bool,
  prefix: X.node,
  suffix: X.node,
  maxLength: X.number,
  showWordLimit: X.bool,
  className: X.string,
  style: X.object
};
const zn = Qe(({
  type: e = "secondary",
  size: n = "default",
  status: r,
  disabled: t = !1,
  loading: a = !1,
  shape: o,
  long: i = !1,
  icon: s,
  children: f,
  onClick: u,
  className: c,
  style: y,
  ...S
}, m) => {
  const D = st(
    "feishu-button",
    {
      [`feishu-button--${e}`]: e,
      [`feishu-button--${n}`]: n,
      [`feishu-button--${r}`]: r,
      [`feishu-button--${o}`]: o,
      "feishu-button--long": i,
      "feishu-button--loading": a,
      "feishu-button--disabled": t,
      "feishu-button--icon-only": s && !f
    },
    c
  );
  return /* @__PURE__ */ Kr.jsx(
    wn,
    {
      ref: m,
      className: D,
      style: y,
      type: e,
      size: n,
      status: r,
      disabled: t,
      loading: a,
      shape: o,
      long: i,
      icon: s,
      onClick: u,
      ...S,
      children: f
    }
  );
});
zn.displayName = "FeishuButton";
zn.propTypes = {
  type: X.oneOf(["primary", "secondary", "outline", "dashed", "text"]),
  size: X.oneOf(["mini", "small", "default", "large"]),
  status: X.oneOf(["warning", "danger", "success"]),
  disabled: X.bool,
  loading: X.bool,
  shape: X.oneOf(["square", "round", "circle"]),
  long: X.bool,
  icon: X.node,
  children: X.node,
  onClick: X.func,
  className: X.string,
  style: X.object
};
const Yn = Qe(({
  title: e,
  extra: n,
  bordered: r = !0,
  hoverable: t = !1,
  loading: a = !1,
  size: o = "default",
  cover: i,
  actions: s,
  children: f,
  className: u,
  style: c,
  ...y
}, S) => {
  const m = st(
    "feishu-card",
    {
      "feishu-card--bordered": r,
      "feishu-card--hoverable": t,
      "feishu-card--loading": a,
      [`feishu-card--${o}`]: o,
      "feishu-card--has-cover": i,
      "feishu-card--has-actions": s && s.length > 0
    },
    u
  );
  return /* @__PURE__ */ Kr.jsx(
    ks,
    {
      ref: S,
      className: m,
      style: c,
      title: e,
      extra: n,
      bordered: r,
      hoverable: t,
      loading: a,
      size: o,
      cover: i,
      actions: s,
      ...y,
      children: f
    }
  );
});
Yn.displayName = "FeishuCard";
Yn.propTypes = {
  title: X.node,
  extra: X.node,
  bordered: X.bool,
  hoverable: X.bool,
  loading: X.bool,
  size: X.oneOf(["default", "small"]),
  cover: X.node,
  actions: X.array,
  children: X.node,
  className: X.string,
  style: X.object
};
const Fs = (...e) => e.filter(Boolean).map((n) => typeof n == "string" ? n : typeof n == "object" && n !== null ? Object.keys(n).filter((r) => n[r]).join(" ") : "").join(" ").trim(), Ws = (e, n, r = !1) => {
  let t;
  return function(...o) {
    const i = () => {
      t = null, r || e.apply(this, o);
    }, s = r && !t;
    clearTimeout(t), t = setTimeout(i, n), s && e.apply(this, o);
  };
}, Vs = (e, n) => {
  let r;
  return function(...a) {
    r || (e.apply(this, a), r = !0, setTimeout(() => r = !1, n));
  };
}, rn = (e) => {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof Array)
    return e.map((n) => rn(n));
  if (typeof e == "object") {
    const n = {};
    for (const r in e)
      e.hasOwnProperty(r) && (n[r] = rn(e[r]));
    return n;
  }
}, Bs = (e = "feishu") => `${e}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, qs = (e, n = 2) => {
  if (e === 0)
    return "0 Bytes";
  const r = 1024, t = n < 0 ? 0 : n, a = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], o = Math.floor(Math.log(e) / Math.log(r));
  return parseFloat((e / Math.pow(r, o)).toFixed(t)) + " " + a[o];
}, Hs = (e, n = "YYYY-MM-DD HH:mm:ss") => {
  const r = new Date(e);
  if (isNaN(r.getTime()))
    return "";
  const t = r.getFullYear(), a = String(r.getMonth() + 1).padStart(2, "0"), o = String(r.getDate()).padStart(2, "0"), i = String(r.getHours()).padStart(2, "0"), s = String(r.getMinutes()).padStart(2, "0"), f = String(r.getSeconds()).padStart(2, "0");
  return n.replace("YYYY", t).replace("MM", a).replace("DD", o).replace("HH", i).replace("mm", s).replace("ss", f);
}, Us = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), Gs = (e) => /^1[3-9]\d{9}$/.test(e), Ks = (e, n = window.location.href) => new URL(n).searchParams.get(e), Js = (e, n, r = window.location.href) => {
  const t = new URL(r);
  return t.searchParams.set(e, n), t.toString();
}, Zs = {
  /**
   * 设置本地存储
   * @param {string} key - 键名
   * @param {any} value - 值
   * @param {number} expire - 过期时间（毫秒）
   */
  set(e, n, r) {
    const t = {
      value: n,
      expire: r ? Date.now() + r : null
    };
    localStorage.setItem(e, JSON.stringify(t));
  },
  /**
   * 获取本地存储
   * @param {string} key - 键名
   * @returns {any} 值
   */
  get(e) {
    try {
      const n = localStorage.getItem(e);
      if (!n)
        return null;
      const r = JSON.parse(n);
      return r.expire && Date.now() > r.expire ? (localStorage.removeItem(e), null) : r.value;
    } catch (n) {
      return console.error("获取本地存储失败:", n), null;
    }
  },
  /**
   * 删除本地存储
   * @param {string} key - 键名
   */
  remove(e) {
    localStorage.removeItem(e);
  },
  /**
   * 清空本地存储
   */
  clear() {
    localStorage.clear();
  }
}, Xs = {
  primary: "#1664ff",
  primaryHover: "#4080ff",
  primaryActive: "#0e4ba8",
  success: "#00b42a",
  warning: "#ff7d00",
  error: "#f53f3f",
  text: {
    primary: "#1d2129",
    secondary: "#4e5969",
    tertiary: "#86909c",
    quaternary: "#c9cdd4"
  },
  background: {
    primary: "#ffffff",
    secondary: "#f7f8fa",
    tertiary: "#f2f3f5",
    quaternary: "#e5e6eb"
  },
  border: {
    primary: "#f2f3f5",
    secondary: "#e5e6eb",
    tertiary: "#c9cdd4",
    quaternary: "#86909c"
  }
}, Qs = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1600px"
};
const el = "1.0.0", rl = "FeishuReactComponents";
export {
  zn as FeishuButton,
  Yn as FeishuCard,
  Ln as FeishuInput,
  Fs as classNames,
  Ws as debounce,
  rn as deepClone,
  Qs as feishuBreakpoints,
  Xs as feishuColors,
  Hs as formatDateTime,
  qs as formatFileSize,
  Bs as generateId,
  Ks as getUrlParam,
  Us as isValidEmail,
  Gs as isValidPhone,
  rl as name,
  Js as setUrlParam,
  Zs as storage,
  Vs as throttle,
  el as version
};
