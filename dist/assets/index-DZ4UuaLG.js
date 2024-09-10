const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ['assets/climbing.lazy-ulYVtBUh.js', 'assets/section-CmVS9JQk.js', 'assets/index.lazy-DMEgnL0v.js']),
) => i.map((i) => d[i])
function Qp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o)
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
var By =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {}
function pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var hc = { exports: {} },
  xi = {},
  mc = { exports: {} },
  A = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qr = Symbol.for('react.element'),
  Yp = Symbol.for('react.portal'),
  Xp = Symbol.for('react.fragment'),
  Zp = Symbol.for('react.strict_mode'),
  Jp = Symbol.for('react.profiler'),
  qp = Symbol.for('react.provider'),
  eh = Symbol.for('react.context'),
  th = Symbol.for('react.forward_ref'),
  nh = Symbol.for('react.suspense'),
  rh = Symbol.for('react.memo'),
  oh = Symbol.for('react.lazy'),
  La = Symbol.iterator
function ih(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (La && e[La]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var vc = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gc = Object.assign,
  yc = {}
function or(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = yc), (this.updater = n || vc)
}
or.prototype.isReactComponent = {}
or.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
or.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function xc() {}
xc.prototype = or.prototype
function _l(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = yc), (this.updater = n || vc)
}
var jl = (_l.prototype = new xc())
jl.constructor = _l
gc(jl, or.prototype)
jl.isPureReactComponent = !0
var Ta = Array.isArray,
  wc = Object.prototype.hasOwnProperty,
  Rl = { current: null },
  Sc = { key: !0, ref: !0, __self: !0, __source: !0 }
function kc(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      wc.call(t, r) && !Sc.hasOwnProperty(r) && (o[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) o.children = n
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
    o.children = a
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r])
  return { $$typeof: qr, type: e, key: i, ref: s, props: o, _owner: Rl.current }
}
function sh(e, t) {
  return { $$typeof: qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function Pl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === qr
}
function lh(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var za = /\/+/g
function Bi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? lh('' + e.key) : t.toString(36)
}
function Mo(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case qr:
          case Yp:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + Bi(s, 0) : r),
      Ta(o)
        ? ((n = ''),
          e != null && (n = e.replace(za, '$&/') + '/'),
          Mo(o, t, n, '', function (u) {
            return u
          }))
        : o != null &&
          (Pl(o) &&
            (o = sh(o, n + (!o.key || (s && s.key === o.key) ? '' : ('' + o.key).replace(za, '$&/') + '/') + e)),
          t.push(o)),
      1
    )
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Ta(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l]
      var a = r + Bi(i, l)
      s += Mo(i, t, n, a, o)
    }
  else if (((a = ih(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(i = e.next()).done; ) (i = i.value), (a = r + Bi(i, l++)), (s += Mo(i, t, n, a, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return s
}
function ao(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    Mo(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function ah(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Pe = { current: null },
  Lo = { transition: null },
  uh = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: Lo, ReactCurrentOwner: Rl }
function Cc() {
  throw Error('act(...) is not supported in production builds of React.')
}
A.Children = {
  map: ao,
  forEach: function (e, t, n) {
    ao(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      ao(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      ao(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Pl(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  },
}
A.Component = or
A.Fragment = Xp
A.Profiler = Jp
A.PureComponent = _l
A.StrictMode = Zp
A.Suspense = nh
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uh
A.act = Cc
A.cloneElement = function (e, t, n) {
  if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
  var r = gc({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Rl.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (a in t) wc.call(t, a) && !Sc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    l = Array(a)
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: qr, type: e.type, key: o, ref: i, props: r, _owner: s }
}
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: eh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: qp, _context: e }),
    (e.Consumer = e)
  )
}
A.createElement = kc
A.createFactory = function (e) {
  var t = kc.bind(null, e)
  return (t.type = e), t
}
A.createRef = function () {
  return { current: null }
}
A.forwardRef = function (e) {
  return { $$typeof: th, render: e }
}
A.isValidElement = Pl
A.lazy = function (e) {
  return { $$typeof: oh, _payload: { _status: -1, _result: e }, _init: ah }
}
A.memo = function (e, t) {
  return { $$typeof: rh, type: e, compare: t === void 0 ? null : t }
}
A.startTransition = function (e) {
  var t = Lo.transition
  Lo.transition = {}
  try {
    e()
  } finally {
    Lo.transition = t
  }
}
A.unstable_act = Cc
A.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t)
}
A.useContext = function (e) {
  return Pe.current.useContext(e)
}
A.useDebugValue = function () {}
A.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e)
}
A.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t)
}
A.useId = function () {
  return Pe.current.useId()
}
A.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n)
}
A.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t)
}
A.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t)
}
A.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t)
}
A.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n)
}
A.useRef = function (e) {
  return Pe.current.useRef(e)
}
A.useState = function (e) {
  return Pe.current.useState(e)
}
A.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n)
}
A.useTransition = function () {
  return Pe.current.useTransition()
}
A.version = '18.3.1'
mc.exports = A
var S = mc.exports
const V = pc(S),
  ch = Qp({ __proto__: null, default: V }, [S])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dh = S,
  fh = Symbol.for('react.element'),
  ph = Symbol.for('react.fragment'),
  hh = Object.prototype.hasOwnProperty,
  mh = dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vh = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ec(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (s = t.ref)
  for (r in t) hh.call(t, r) && !vh.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: fh, type: e, key: i, ref: s, props: o, _owner: mh.current }
}
xi.Fragment = ph
xi.jsx = Ec
xi.jsxs = Ec
hc.exports = xi
var c = hc.exports,
  _c = { exports: {} },
  Be = {},
  jc = { exports: {} },
  Rc = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(R, T) {
    var z = R.length
    R.push(T)
    e: for (; 0 < z; ) {
      var I = (z - 1) >>> 1,
        F = R[I]
      if (0 < o(F, T)) (R[I] = T), (R[z] = F), (z = I)
      else break e
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0]
  }
  function r(R) {
    if (R.length === 0) return null
    var T = R[0],
      z = R.pop()
    if (z !== T) {
      R[0] = z
      e: for (var I = 0, F = R.length, te = F >>> 1; I < te; ) {
        var ae = 2 * (I + 1) - 1,
          qe = R[ae],
          We = ae + 1,
          vt = R[We]
        if (0 > o(qe, z))
          We < F && 0 > o(vt, qe) ? ((R[I] = vt), (R[We] = z), (I = We)) : ((R[I] = qe), (R[ae] = z), (I = ae))
        else if (We < F && 0 > o(vt, z)) (R[I] = vt), (R[We] = z), (I = We)
        else break e
      }
    }
    return T
  }
  function o(R, T) {
    var z = R.sortIndex - T.sortIndex
    return z !== 0 ? z : R.id - T.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var s = Date,
      l = s.now()
    e.unstable_now = function () {
      return s.now() - l
    }
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    f = 3,
    y = !1,
    g = !1,
    x = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function v(R) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u)
      else if (T.startTime <= R) r(u), (T.sortIndex = T.expirationTime), t(a, T)
      else break
      T = n(u)
    }
  }
  function w(R) {
    if (((x = !1), v(R), !g))
      if (n(a) !== null) (g = !0), U(E)
      else {
        var T = n(u)
        T !== null && q(w, T.startTime - R)
      }
  }
  function E(R, T) {
    ;(g = !1), x && ((x = !1), h(P), (P = -1)), (y = !0)
    var z = f
    try {
      for (v(T), p = n(a); p !== null && (!(p.expirationTime > T) || (R && !b())); ) {
        var I = p.callback
        if (typeof I == 'function') {
          ;(p.callback = null), (f = p.priorityLevel)
          var F = I(p.expirationTime <= T)
          ;(T = e.unstable_now()), typeof F == 'function' ? (p.callback = F) : p === n(a) && r(a), v(T)
        } else r(a)
        p = n(a)
      }
      if (p !== null) var te = !0
      else {
        var ae = n(u)
        ae !== null && q(w, ae.startTime - T), (te = !1)
      }
      return te
    } finally {
      ;(p = null), (f = z), (y = !1)
    }
  }
  var _ = !1,
    j = null,
    P = -1,
    C = 5,
    M = -1
  function b() {
    return !(e.unstable_now() - M < C)
  }
  function $() {
    if (j !== null) {
      var R = e.unstable_now()
      M = R
      var T = !0
      try {
        T = j(!0, R)
      } finally {
        T ? K() : ((_ = !1), (j = null))
      }
    } else _ = !1
  }
  var K
  if (typeof m == 'function')
    K = function () {
      m($)
    }
  else if (typeof MessageChannel < 'u') {
    var D = new MessageChannel(),
      H = D.port2
    ;(D.port1.onmessage = $),
      (K = function () {
        H.postMessage(null)
      })
  } else
    K = function () {
      k($, 0)
    }
  function U(R) {
    ;(j = R), _ || ((_ = !0), K())
  }
  function q(R, T) {
    P = k(function () {
      R(e.unstable_now())
    }, T)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), U(E))
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (C = 0 < R ? Math.floor(1e3 / R) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var T = 3
          break
        default:
          T = f
      }
      var z = f
      f = T
      try {
        return R()
      } finally {
        f = z
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, T) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          R = 3
      }
      var z = f
      f = R
      try {
        return T()
      } finally {
        f = z
      }
    }),
    (e.unstable_scheduleCallback = function (R, T, z) {
      var I = e.unstable_now()
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? I + z : I))
          : (z = I),
        R)
      ) {
        case 1:
          var F = -1
          break
        case 2:
          F = 250
          break
        case 5:
          F = 1073741823
          break
        case 4:
          F = 1e4
          break
        default:
          F = 5e3
      }
      return (
        (F = z + F),
        (R = { id: d++, callback: T, priorityLevel: R, startTime: z, expirationTime: F, sortIndex: -1 }),
        z > I
          ? ((R.sortIndex = z), t(u, R), n(a) === null && R === n(u) && (x ? (h(P), (P = -1)) : (x = !0), q(w, z - I)))
          : ((R.sortIndex = F), t(a, R), g || y || ((g = !0), U(E))),
        R
      )
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (R) {
      var T = f
      return function () {
        var z = f
        f = T
        try {
          return R.apply(this, arguments)
        } finally {
          f = z
        }
      }
    })
})(Rc)
jc.exports = Rc
var gh = jc.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yh = S,
  Ue = gh
function N(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Pc = new Set(),
  Ir = {}
function gn(e, t) {
  Hn(e, t), Hn(e + 'Capture', t)
}
function Hn(e, t) {
  for (Ir[e] = t, e = 0; e < t.length; e++) Pc.add(t[e])
}
var Et = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  ws = Object.prototype.hasOwnProperty,
  xh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $a = {},
  Ia = {}
function wh(e) {
  return ws.call(Ia, e) ? !0 : ws.call($a, e) ? !1 : xh.test(e) ? (Ia[e] = !0) : (($a[e] = !0), !1)
}
function Sh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function kh(e, t, n, r) {
  if (t === null || typeof t > 'u' || Sh(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Ne(e, t, n, r, o, i, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s)
}
var ge = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ge[e] = new Ne(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  ge[t] = new Ne(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ge[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  ge[e] = new Ne(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ge[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ge[e] = new Ne(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  ge[e] = new Ne(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ge[e] = new Ne(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  ge[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Nl = /[\-:]([a-z])/g
function Ml(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Nl, Ml)
    ge[t] = new Ne(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(Nl, Ml)
  ge[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Nl, Ml)
  ge[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ge.xlinkHref = new Ne('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Ll(e, t, n, r) {
  var o = ge.hasOwnProperty(t) ? ge[t] : null
  ;(o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (kh(t, n, o, r) && (n = null),
    r || o === null
      ? wh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Nt = yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  uo = Symbol.for('react.element'),
  Cn = Symbol.for('react.portal'),
  En = Symbol.for('react.fragment'),
  Tl = Symbol.for('react.strict_mode'),
  Ss = Symbol.for('react.profiler'),
  Nc = Symbol.for('react.provider'),
  Mc = Symbol.for('react.context'),
  zl = Symbol.for('react.forward_ref'),
  ks = Symbol.for('react.suspense'),
  Cs = Symbol.for('react.suspense_list'),
  $l = Symbol.for('react.memo'),
  $t = Symbol.for('react.lazy'),
  Lc = Symbol.for('react.offscreen'),
  Fa = Symbol.iterator
function ur(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Fa && e[Fa]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var oe = Object.assign,
  Vi
function xr(e) {
  if (Vi === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Vi = (t && t[1]) || ''
    }
  return (
    `
` +
    Vi +
    e
  )
}
var Wi = !1
function Hi(e, t) {
  if (!e || Wi) return ''
  Wi = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(' at new ', ' at ')
                return e.displayName && a.includes('<anonymous>') && (a = a.replace('<anonymous>', e.displayName)), a
              }
            while (1 <= s && 0 <= l)
          break
        }
    }
  } finally {
    ;(Wi = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? xr(e) : ''
}
function Ch(e) {
  switch (e.tag) {
    case 5:
      return xr(e.type)
    case 16:
      return xr('Lazy')
    case 13:
      return xr('Suspense')
    case 19:
      return xr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Hi(e.type, !1)), e
    case 11:
      return (e = Hi(e.type.render, !1)), e
    case 1:
      return (e = Hi(e.type, !0)), e
    default:
      return ''
  }
}
function Es(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case En:
      return 'Fragment'
    case Cn:
      return 'Portal'
    case Ss:
      return 'Profiler'
    case Tl:
      return 'StrictMode'
    case ks:
      return 'Suspense'
    case Cs:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Mc:
        return (e.displayName || 'Context') + '.Consumer'
      case Nc:
        return (e._context.displayName || 'Context') + '.Provider'
      case zl:
        var t = e.render
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case $l:
        return (t = e.displayName || null), t !== null ? t : Es(e.type) || 'Memo'
      case $t:
        ;(t = e._payload), (e = e._init)
        try {
          return Es(e(t))
        } catch {}
    }
  return null
}
function Eh(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Es(t)
    case 8:
      return t === Tl ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function Yt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Tc(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function _h(e) {
  var t = Tc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (s) {
          ;(r = '' + s), i.call(this, s)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (s) {
          r = '' + s
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function co(e) {
  e._valueTracker || (e._valueTracker = _h(e))
}
function zc(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return e && (r = Tc(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1
}
function Wo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function _s(e, t) {
  var n = t.checked
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function ba(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    })
}
function $c(e, t) {
  ;(t = t.checked), t != null && Ll(e, 'checked', t, !1)
}
function js(e, t) {
  $c(e, t)
  var n = Yt(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value') ? Rs(e, t.type, n) : t.hasOwnProperty('defaultValue') && Rs(e, t.type, Yt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Oa(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
    ;(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Rs(e, t, n) {
  ;(t !== 'number' || Wo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var wr = Array.isArray
function bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Yt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Ps(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91))
  return oe({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
}
function Da(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92))
      if (wr(n)) {
        if (1 < n.length) throw Error(N(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Yt(n) }
}
function Ic(e, t) {
  var n = Yt(t.value),
    r = Yt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Aa(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Fc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Ns(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Fc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var fo,
  bc = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        fo = fo || document.createElement('div'),
          fo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Fr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Cr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jh = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Cr).forEach(function (e) {
  jh.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cr[t] = Cr[e])
  })
})
function Oc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Cr.hasOwnProperty(e) && Cr[e])
      ? ('' + t).trim()
      : t + 'px'
}
function Dc(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Oc(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var Rh = oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function Ms(e, t) {
  if (t) {
    if (Rh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(N(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62))
  }
}
function Ls(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Ts = null
function Il(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var zs = null,
  On = null,
  Dn = null
function Ua(e) {
  if ((e = no(e))) {
    if (typeof zs != 'function') throw Error(N(280))
    var t = e.stateNode
    t && ((t = Ei(t)), zs(e.stateNode, e.type, t))
  }
}
function Ac(e) {
  On ? (Dn ? Dn.push(e) : (Dn = [e])) : (On = e)
}
function Uc() {
  if (On) {
    var e = On,
      t = Dn
    if (((Dn = On = null), Ua(e), t)) for (e = 0; e < t.length; e++) Ua(t[e])
  }
}
function Bc(e, t) {
  return e(t)
}
function Vc() {}
var Ki = !1
function Wc(e, t, n) {
  if (Ki) return e(t, n)
  Ki = !0
  try {
    return Bc(e, t, n)
  } finally {
    ;(Ki = !1), (On !== null || Dn !== null) && (Vc(), Uc())
  }
}
function br(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Ei(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n))
  return n
}
var $s = !1
if (Et)
  try {
    var cr = {}
    Object.defineProperty(cr, 'passive', {
      get: function () {
        $s = !0
      },
    }),
      window.addEventListener('test', cr, cr),
      window.removeEventListener('test', cr, cr)
  } catch {
    $s = !1
  }
function Ph(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var Er = !1,
  Ho = null,
  Ko = !1,
  Is = null,
  Nh = {
    onError: function (e) {
      ;(Er = !0), (Ho = e)
    },
  }
function Mh(e, t, n, r, o, i, s, l, a) {
  ;(Er = !1), (Ho = null), Ph.apply(Nh, arguments)
}
function Lh(e, t, n, r, o, i, s, l, a) {
  if ((Mh.apply(this, arguments), Er)) {
    if (Er) {
      var u = Ho
      ;(Er = !1), (Ho = null)
    } else throw Error(N(198))
    Ko || ((Ko = !0), (Is = u))
  }
}
function yn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Hc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
  }
  return null
}
function Ba(e) {
  if (yn(e) !== e) throw Error(N(188))
}
function Th(e) {
  var t = e.alternate
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(N(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ba(o), e
        if (i === r) return Ba(o), t
        i = i.sibling
      }
      throw Error(N(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          ;(s = !0), (n = o), (r = i)
          break
        }
        if (l === r) {
          ;(s = !0), (r = o), (n = i)
          break
        }
        l = l.sibling
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            ;(s = !0), (n = i), (r = o)
            break
          }
          if (l === r) {
            ;(s = !0), (r = i), (n = o)
            break
          }
          l = l.sibling
        }
        if (!s) throw Error(N(189))
      }
    }
    if (n.alternate !== r) throw Error(N(190))
  }
  if (n.tag !== 3) throw Error(N(188))
  return n.stateNode.current === n ? e : t
}
function Kc(e) {
  return (e = Th(e)), e !== null ? Gc(e) : null
}
function Gc(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Gc(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Qc = Ue.unstable_scheduleCallback,
  Va = Ue.unstable_cancelCallback,
  zh = Ue.unstable_shouldYield,
  $h = Ue.unstable_requestPaint,
  se = Ue.unstable_now,
  Ih = Ue.unstable_getCurrentPriorityLevel,
  Fl = Ue.unstable_ImmediatePriority,
  Yc = Ue.unstable_UserBlockingPriority,
  Go = Ue.unstable_NormalPriority,
  Fh = Ue.unstable_LowPriority,
  Xc = Ue.unstable_IdlePriority,
  wi = null,
  pt = null
function bh(e) {
  if (pt && typeof pt.onCommitFiberRoot == 'function')
    try {
      pt.onCommitFiberRoot(wi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : Ah,
  Oh = Math.log,
  Dh = Math.LN2
function Ah(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Oh(e) / Dh) | 0)) | 0
}
var po = 64,
  ho = 4194304
function Sr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Qo(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var l = s & ~o
    l !== 0 ? (r = Sr(l)) : ((i &= s), i !== 0 && (r = Sr(i)))
  } else (s = n & ~o), s !== 0 ? (r = Sr(s)) : i !== 0 && (r = Sr(i))
  if (r === 0) return 0
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - ot(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function Uh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Bh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - ot(i),
      l = 1 << s,
      a = o[s]
    a === -1 ? (!(l & n) || l & r) && (o[s] = Uh(l, t)) : a <= t && (e.expiredLanes |= l), (i &= ~l)
  }
}
function Fs(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Zc() {
  var e = po
  return (po <<= 1), !(po & 4194240) && (po = 64), e
}
function Gi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function eo(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n)
}
function Vh(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ot(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function bl(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var W = 0
function Jc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var qc,
  Ol,
  ed,
  td,
  nd,
  bs = !1,
  mo = [],
  At = null,
  Ut = null,
  Bt = null,
  Or = new Map(),
  Dr = new Map(),
  Ft = [],
  Wh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function Wa(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      At = null
      break
    case 'dragenter':
    case 'dragleave':
      Ut = null
      break
    case 'mouseover':
    case 'mouseout':
      Bt = null
      break
    case 'pointerover':
    case 'pointerout':
      Or.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Dr.delete(t.pointerId)
  }
}
function dr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = no(t)), t !== null && Ol(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e)
}
function Hh(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (At = dr(At, e, t, n, r, o)), !0
    case 'dragenter':
      return (Ut = dr(Ut, e, t, n, r, o)), !0
    case 'mouseover':
      return (Bt = dr(Bt, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Or.set(i, dr(Or.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), Dr.set(i, dr(Dr.get(i) || null, e, t, n, r, o)), !0
  }
  return !1
}
function rd(e) {
  var t = sn(e.target)
  if (t !== null) {
    var n = yn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hc(n)), t !== null)) {
          ;(e.blockedOn = t),
            nd(e.priority, function () {
              ed(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function To(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Os(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Ts = r), n.target.dispatchEvent(r), (Ts = null)
    } else return (t = no(n)), t !== null && Ol(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Ha(e, t, n) {
  To(e) && n.delete(t)
}
function Kh() {
  ;(bs = !1),
    At !== null && To(At) && (At = null),
    Ut !== null && To(Ut) && (Ut = null),
    Bt !== null && To(Bt) && (Bt = null),
    Or.forEach(Ha),
    Dr.forEach(Ha)
}
function fr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), bs || ((bs = !0), Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Kh)))
}
function Ar(e) {
  function t(o) {
    return fr(o, e)
  }
  if (0 < mo.length) {
    fr(mo[0], e)
    for (var n = 1; n < mo.length; n++) {
      var r = mo[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    At !== null && fr(At, e), Ut !== null && fr(Ut, e), Bt !== null && fr(Bt, e), Or.forEach(t), Dr.forEach(t), n = 0;
    n < Ft.length;
    n++
  )
    (r = Ft[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Ft.length && ((n = Ft[0]), n.blockedOn === null); ) rd(n), n.blockedOn === null && Ft.shift()
}
var An = Nt.ReactCurrentBatchConfig,
  Yo = !0
function Gh(e, t, n, r) {
  var o = W,
    i = An.transition
  An.transition = null
  try {
    ;(W = 1), Dl(e, t, n, r)
  } finally {
    ;(W = o), (An.transition = i)
  }
}
function Qh(e, t, n, r) {
  var o = W,
    i = An.transition
  An.transition = null
  try {
    ;(W = 4), Dl(e, t, n, r)
  } finally {
    ;(W = o), (An.transition = i)
  }
}
function Dl(e, t, n, r) {
  if (Yo) {
    var o = Os(e, t, n, r)
    if (o === null) rs(e, t, r, Xo, n), Wa(e, r)
    else if (Hh(o, e, t, n, r)) r.stopPropagation()
    else if ((Wa(e, r), t & 4 && -1 < Wh.indexOf(e))) {
      for (; o !== null; ) {
        var i = no(o)
        if ((i !== null && qc(i), (i = Os(e, t, n, r)), i === null && rs(e, t, r, Xo, n), i === o)) break
        o = i
      }
      o !== null && r.stopPropagation()
    } else rs(e, t, r, null, n)
  }
}
var Xo = null
function Os(e, t, n, r) {
  if (((Xo = null), (e = Il(r)), (e = sn(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Hc(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Xo = e), null
}
function od(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (Ih()) {
        case Fl:
          return 1
        case Yc:
          return 4
        case Go:
        case Fh:
          return 16
        case Xc:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Ot = null,
  Al = null,
  zo = null
function id() {
  if (zo) return zo
  var e,
    t = Al,
    n = t.length,
    r,
    o = 'value' in Ot ? Ot.value : Ot.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (zo = o.slice(e, 1 < r ? 1 - r : void 0))
}
function $o(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function vo() {
  return !0
}
function Ka() {
  return !1
}
function Ve(e) {
  function t(n, r, o, i, s) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null)
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]))
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vo : Ka),
      (this.isPropagationStopped = Ka),
      this
    )
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = vo))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = vo))
      },
      persist: function () {},
      isPersistent: vo,
    }),
    t
  )
}
var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ul = Ve(ir),
  to = oe({}, ir, { view: 0, detail: 0 }),
  Yh = Ve(to),
  Qi,
  Yi,
  pr,
  Si = oe({}, to, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Bl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== pr &&
            (pr && e.type === 'mousemove'
              ? ((Qi = e.screenX - pr.screenX), (Yi = e.screenY - pr.screenY))
              : (Yi = Qi = 0),
            (pr = e)),
          Qi)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Yi
    },
  }),
  Ga = Ve(Si),
  Xh = oe({}, Si, { dataTransfer: 0 }),
  Zh = Ve(Xh),
  Jh = oe({}, to, { relatedTarget: 0 }),
  Xi = Ve(Jh),
  qh = oe({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  em = Ve(qh),
  tm = oe({}, ir, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  nm = Ve(tm),
  rm = oe({}, ir, { data: 0 }),
  Qa = Ve(rm),
  om = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  im = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  sm = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function lm(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = sm[e]) ? !!t[e] : !1
}
function Bl() {
  return lm
}
var am = oe({}, to, {
    key: function (e) {
      if (e.key) {
        var t = om[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = $o(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? im[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Bl,
    charCode: function (e) {
      return e.type === 'keypress' ? $o(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress' ? $o(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
  }),
  um = Ve(am),
  cm = oe({}, Si, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ya = Ve(cm),
  dm = oe({}, to, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Bl,
  }),
  fm = Ve(dm),
  pm = oe({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hm = Ve(pm),
  mm = oe({}, Si, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vm = Ve(mm),
  gm = [9, 13, 27, 32],
  Vl = Et && 'CompositionEvent' in window,
  _r = null
Et && 'documentMode' in document && (_r = document.documentMode)
var ym = Et && 'TextEvent' in window && !_r,
  sd = Et && (!Vl || (_r && 8 < _r && 11 >= _r)),
  Xa = ' ',
  Za = !1
function ld(e, t) {
  switch (e) {
    case 'keyup':
      return gm.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function ad(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var _n = !1
function xm(e, t) {
  switch (e) {
    case 'compositionend':
      return ad(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Za = !0), Xa)
    case 'textInput':
      return (e = t.data), e === Xa && Za ? null : e
    default:
      return null
  }
}
function wm(e, t) {
  if (_n) return e === 'compositionend' || (!Vl && ld(e, t)) ? ((e = id()), (zo = Al = Ot = null), (_n = !1), e) : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return sd && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Sm = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Ja(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Sm[e.type] : t === 'textarea'
}
function ud(e, t, n, r) {
  Ac(r),
    (t = Zo(t, 'onChange')),
    0 < t.length && ((n = new Ul('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var jr = null,
  Ur = null
function km(e) {
  wd(e, 0)
}
function ki(e) {
  var t = Pn(e)
  if (zc(t)) return e
}
function Cm(e, t) {
  if (e === 'change') return t
}
var cd = !1
if (Et) {
  var Zi
  if (Et) {
    var Ji = 'oninput' in document
    if (!Ji) {
      var qa = document.createElement('div')
      qa.setAttribute('oninput', 'return;'), (Ji = typeof qa.oninput == 'function')
    }
    Zi = Ji
  } else Zi = !1
  cd = Zi && (!document.documentMode || 9 < document.documentMode)
}
function eu() {
  jr && (jr.detachEvent('onpropertychange', dd), (Ur = jr = null))
}
function dd(e) {
  if (e.propertyName === 'value' && ki(Ur)) {
    var t = []
    ud(t, Ur, e, Il(e)), Wc(km, t)
  }
}
function Em(e, t, n) {
  e === 'focusin' ? (eu(), (jr = t), (Ur = n), jr.attachEvent('onpropertychange', dd)) : e === 'focusout' && eu()
}
function _m(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ki(Ur)
}
function jm(e, t) {
  if (e === 'click') return ki(t)
}
function Rm(e, t) {
  if (e === 'input' || e === 'change') return ki(t)
}
function Pm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var st = typeof Object.is == 'function' ? Object.is : Pm
function Br(e, t) {
  if (st(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!ws.call(t, o) || !st(e[o], t[o])) return !1
  }
  return !0
}
function tu(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function nu(e, t) {
  var n = tu(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = tu(n)
  }
}
function fd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? fd(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function pd() {
  for (var e = window, t = Wo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Wo(e.document)
  }
  return t
}
function Wl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Nm(e) {
  var t = pd(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && fd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wl(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = nu(n, i))
        var s = nu(n, r)
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Mm = Et && 'documentMode' in document && 11 >= document.documentMode,
  jn = null,
  Ds = null,
  Rr = null,
  As = !1
function ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  As ||
    jn == null ||
    jn !== Wo(r) ||
    ((r = jn),
    'selectionStart' in r && Wl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Rr && Br(Rr, r)) ||
      ((Rr = r),
      (r = Zo(Ds, 'onSelect')),
      0 < r.length &&
        ((t = new Ul('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = jn))))
}
function go(e, t) {
  var n = {}
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n
}
var Rn = {
    animationend: go('Animation', 'AnimationEnd'),
    animationiteration: go('Animation', 'AnimationIteration'),
    animationstart: go('Animation', 'AnimationStart'),
    transitionend: go('Transition', 'TransitionEnd'),
  },
  qi = {},
  hd = {}
Et &&
  ((hd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation),
  'TransitionEvent' in window || delete Rn.transitionend.transition)
function Ci(e) {
  if (qi[e]) return qi[e]
  if (!Rn[e]) return e
  var t = Rn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in hd) return (qi[e] = t[n])
  return e
}
var md = Ci('animationend'),
  vd = Ci('animationiteration'),
  gd = Ci('animationstart'),
  yd = Ci('transitionend'),
  xd = new Map(),
  ou =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function Jt(e, t) {
  xd.set(e, t), gn(t, [e])
}
for (var es = 0; es < ou.length; es++) {
  var ts = ou[es],
    Lm = ts.toLowerCase(),
    Tm = ts[0].toUpperCase() + ts.slice(1)
  Jt(Lm, 'on' + Tm)
}
Jt(md, 'onAnimationEnd')
Jt(vd, 'onAnimationIteration')
Jt(gd, 'onAnimationStart')
Jt('dblclick', 'onDoubleClick')
Jt('focusin', 'onFocus')
Jt('focusout', 'onBlur')
Jt(yd, 'onTransitionEnd')
Hn('onMouseEnter', ['mouseout', 'mouseover'])
Hn('onMouseLeave', ['mouseout', 'mouseover'])
Hn('onPointerEnter', ['pointerout', 'pointerover'])
Hn('onPointerLeave', ['pointerout', 'pointerover'])
gn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
gn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
gn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
gn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
gn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
gn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var kr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  zm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(kr))
function iu(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Lh(r, t, void 0, e), (e.currentTarget = null)
}
function wd(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e
          iu(o, l, u), (i = a)
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]), (a = l.instance), (u = l.currentTarget), (l = l.listener), a !== i && o.isPropagationStopped())
          )
            break e
          iu(o, l, u), (i = a)
        }
    }
  }
  if (Ko) throw ((e = Is), (Ko = !1), (Is = null), e)
}
function Z(e, t) {
  var n = t[Hs]
  n === void 0 && (n = t[Hs] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Sd(t, e, 2, !1), n.add(r))
}
function ns(e, t, n) {
  var r = 0
  t && (r |= 4), Sd(n, e, r, t)
}
var yo = '_reactListening' + Math.random().toString(36).slice(2)
function Vr(e) {
  if (!e[yo]) {
    ;(e[yo] = !0),
      Pc.forEach(function (n) {
        n !== 'selectionchange' && (zm.has(n) || ns(n, !1, e), ns(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[yo] || ((t[yo] = !0), ns('selectionchange', !1, t))
  }
}
function Sd(e, t, n, r) {
  switch (od(t)) {
    case 1:
      var o = Gh
      break
    case 4:
      o = Qh
      break
    default:
      o = Dl
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !$s || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1)
}
function rs(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return
            s = s.return
          }
        for (; l !== null; ) {
          if (((s = sn(l)), s === null)) return
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  Wc(function () {
    var u = i,
      d = Il(n),
      p = []
    e: {
      var f = xd.get(e)
      if (f !== void 0) {
        var y = Ul,
          g = e
        switch (e) {
          case 'keypress':
            if ($o(n) === 0) break e
          case 'keydown':
          case 'keyup':
            y = um
            break
          case 'focusin':
            ;(g = 'focus'), (y = Xi)
            break
          case 'focusout':
            ;(g = 'blur'), (y = Xi)
            break
          case 'beforeblur':
          case 'afterblur':
            y = Xi
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = Ga
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Zh
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = fm
            break
          case md:
          case vd:
          case gd:
            y = em
            break
          case yd:
            y = hm
            break
          case 'scroll':
            y = Yh
            break
          case 'wheel':
            y = vm
            break
          case 'copy':
          case 'cut':
          case 'paste':
            y = nm
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = Ya
        }
        var x = (t & 4) !== 0,
          k = !x && e === 'scroll',
          h = x ? (f !== null ? f + 'Capture' : null) : f
        x = []
        for (var m = u, v; m !== null; ) {
          v = m
          var w = v.stateNode
          if (
            (v.tag === 5 && w !== null && ((v = w), h !== null && ((w = br(m, h)), w != null && x.push(Wr(m, w, v)))),
            k)
          )
            break
          m = m.return
        }
        0 < x.length && ((f = new y(f, g, null, n, d)), p.push({ event: f, listeners: x }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          f && n !== Ts && (g = n.relatedTarget || n.fromElement) && (sn(g) || g[_t]))
        )
          break e
        if (
          (y || f) &&
          ((f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = u),
              (g = g ? sn(g) : null),
              g !== null && ((k = yn(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((y = null), (g = u)),
          y !== g)
        ) {
          if (
            ((x = Ga),
            (w = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = Ya), (w = 'onPointerLeave'), (h = 'onPointerEnter'), (m = 'pointer')),
            (k = y == null ? f : Pn(y)),
            (v = g == null ? f : Pn(g)),
            (f = new x(w, m + 'leave', y, n, d)),
            (f.target = k),
            (f.relatedTarget = v),
            (w = null),
            sn(d) === u && ((x = new x(h, m + 'enter', g, n, d)), (x.target = v), (x.relatedTarget = k), (w = x)),
            (k = w),
            y && g)
          )
            t: {
              for (x = y, h = g, m = 0, v = x; v; v = wn(v)) m++
              for (v = 0, w = h; w; w = wn(w)) v++
              for (; 0 < m - v; ) (x = wn(x)), m--
              for (; 0 < v - m; ) (h = wn(h)), v--
              for (; m--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t
                ;(x = wn(x)), (h = wn(h))
              }
              x = null
            }
          else x = null
          y !== null && su(p, f, y, x, !1), g !== null && k !== null && su(p, k, g, x, !0)
        }
      }
      e: {
        if (
          ((f = u ? Pn(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && f.type === 'file'))
        )
          var E = Cm
        else if (Ja(f))
          if (cd) E = Rm
          else {
            E = _m
            var _ = Em
          }
        else
          (y = f.nodeName) && y.toLowerCase() === 'input' && (f.type === 'checkbox' || f.type === 'radio') && (E = jm)
        if (E && (E = E(e, u))) {
          ud(p, E, n, d)
          break e
        }
        _ && _(e, f, u),
          e === 'focusout' && (_ = f._wrapperState) && _.controlled && f.type === 'number' && Rs(f, 'number', f.value)
      }
      switch (((_ = u ? Pn(u) : window), e)) {
        case 'focusin':
          ;(Ja(_) || _.contentEditable === 'true') && ((jn = _), (Ds = u), (Rr = null))
          break
        case 'focusout':
          Rr = Ds = jn = null
          break
        case 'mousedown':
          As = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(As = !1), ru(p, n, d)
          break
        case 'selectionchange':
          if (Mm) break
        case 'keydown':
        case 'keyup':
          ru(p, n, d)
      }
      var j
      if (Vl)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart'
              break e
            case 'compositionend':
              P = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              P = 'onCompositionUpdate'
              break e
          }
          P = void 0
        }
      else
        _n ? ld(e, n) && (P = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart')
      P &&
        (sd &&
          n.locale !== 'ko' &&
          (_n || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && _n && (j = id())
            : ((Ot = d), (Al = 'value' in Ot ? Ot.value : Ot.textContent), (_n = !0))),
        (_ = Zo(u, P)),
        0 < _.length &&
          ((P = new Qa(P, e, null, n, d)),
          p.push({ event: P, listeners: _ }),
          j ? (P.data = j) : ((j = ad(n)), j !== null && (P.data = j)))),
        (j = ym ? xm(e, n) : wm(e, n)) &&
          ((u = Zo(u, 'onBeforeInput')),
          0 < u.length &&
            ((d = new Qa('onBeforeInput', 'beforeinput', null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = j)))
    }
    wd(p, t)
  })
}
function Wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Zo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = br(e, n)), i != null && r.unshift(Wr(e, i, o)), (i = br(e, t)), i != null && r.push(Wr(e, i, o))),
      (e = e.return)
  }
  return r
}
function wn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function su(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode
    if (a !== null && a === r) break
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = br(n, i)), a != null && s.unshift(Wr(n, a, l)))
        : o || ((a = br(n, i)), a != null && s.push(Wr(n, a, l)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var $m = /\r\n?/g,
  Im = /\u0000|\uFFFD/g
function lu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      $m,
      `
`,
    )
    .replace(Im, '')
}
function xo(e, t, n) {
  if (((t = lu(t)), lu(e) !== t && n)) throw Error(N(425))
}
function Jo() {}
var Us = null,
  Bs = null
function Vs(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ws = typeof setTimeout == 'function' ? setTimeout : void 0,
  Fm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  au = typeof Promise == 'function' ? Promise : void 0,
  bm =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof au < 'u'
        ? function (e) {
            return au.resolve(null).then(e).catch(Om)
          }
        : Ws
function Om(e) {
  setTimeout(function () {
    throw e
  })
}
function os(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Ar(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Ar(t)
}
function Vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function uu(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var sr = Math.random().toString(36).slice(2),
  ft = '__reactFiber$' + sr,
  Hr = '__reactProps$' + sr,
  _t = '__reactContainer$' + sr,
  Hs = '__reactEvents$' + sr,
  Dm = '__reactListeners$' + sr,
  Am = '__reactHandles$' + sr
function sn(e) {
  var t = e[ft]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[ft])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = uu(e); e !== null; ) {
          if ((n = e[ft])) return n
          e = uu(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function no(e) {
  return (e = e[ft] || e[_t]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(N(33))
}
function Ei(e) {
  return e[Hr] || null
}
var Ks = [],
  Nn = -1
function qt(e) {
  return { current: e }
}
function J(e) {
  0 > Nn || ((e.current = Ks[Nn]), (Ks[Nn] = null), Nn--)
}
function Q(e, t) {
  Nn++, (Ks[Nn] = e.current), (e.current = t)
}
var Xt = {},
  Ee = qt(Xt),
  ze = qt(!1),
  fn = Xt
function Kn(e, t) {
  var n = e.type.contextTypes
  if (!n) return Xt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function $e(e) {
  return (e = e.childContextTypes), e != null
}
function qo() {
  J(ze), J(Ee)
}
function cu(e, t, n) {
  if (Ee.current !== Xt) throw Error(N(168))
  Q(Ee, t), Q(ze, n)
}
function kd(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(N(108, Eh(e) || 'Unknown', o))
  return oe({}, n, r)
}
function ei(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (fn = Ee.current),
    Q(Ee, e),
    Q(ze, ze.current),
    !0
  )
}
function du(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(N(169))
  n ? ((e = kd(e, t, fn)), (r.__reactInternalMemoizedMergedChildContext = e), J(ze), J(Ee), Q(Ee, e)) : J(ze), Q(ze, n)
}
var wt = null,
  _i = !1,
  is = !1
function Cd(e) {
  wt === null ? (wt = [e]) : wt.push(e)
}
function Um(e) {
  ;(_i = !0), Cd(e)
}
function en() {
  if (!is && wt !== null) {
    is = !0
    var e = 0,
      t = W
    try {
      var n = wt
      for (W = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(wt = null), (_i = !1)
    } catch (o) {
      throw (wt !== null && (wt = wt.slice(e + 1)), Qc(Fl, en), o)
    } finally {
      ;(W = t), (is = !1)
    }
  }
  return null
}
var Mn = [],
  Ln = 0,
  ti = null,
  ni = 0,
  He = [],
  Ke = 0,
  pn = null,
  St = 1,
  kt = ''
function tn(e, t) {
  ;(Mn[Ln++] = ni), (Mn[Ln++] = ti), (ti = e), (ni = t)
}
function Ed(e, t, n) {
  ;(He[Ke++] = St), (He[Ke++] = kt), (He[Ke++] = pn), (pn = e)
  var r = St
  e = kt
  var o = 32 - ot(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - ot(t) + o
  if (30 < i) {
    var s = o - (o % 5)
    ;(i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (St = (1 << (32 - ot(t) + o)) | (n << o) | r),
      (kt = i + e)
  } else (St = (1 << i) | (n << o) | r), (kt = e)
}
function Hl(e) {
  e.return !== null && (tn(e, 1), Ed(e, 1, 0))
}
function Kl(e) {
  for (; e === ti; ) (ti = Mn[--Ln]), (Mn[Ln] = null), (ni = Mn[--Ln]), (Mn[Ln] = null)
  for (; e === pn; )
    (pn = He[--Ke]), (He[Ke] = null), (kt = He[--Ke]), (He[Ke] = null), (St = He[--Ke]), (He[Ke] = null)
}
var Ae = null,
  De = null,
  ee = !1,
  rt = null
function _d(e, t) {
  var n = Qe(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function fu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (De = Vt(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (De = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = pn !== null ? { id: St, overflow: kt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (De = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Gs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Qs(e) {
  if (ee) {
    var t = De
    if (t) {
      var n = t
      if (!fu(e, t)) {
        if (Gs(e)) throw Error(N(418))
        t = Vt(n.nextSibling)
        var r = Ae
        t && fu(e, t) ? _d(r, n) : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ae = e))
      }
    } else {
      if (Gs(e)) throw Error(N(418))
      ;(e.flags = (e.flags & -4097) | 2), (ee = !1), (Ae = e)
    }
  }
}
function pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  Ae = e
}
function wo(e) {
  if (e !== Ae) return !1
  if (!ee) return pu(e), (ee = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Vs(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (Gs(e)) throw (jd(), Error(N(418)))
    for (; t; ) _d(e, t), (t = Vt(t.nextSibling))
  }
  if ((pu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(N(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              De = Vt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      De = null
    }
  } else De = Ae ? Vt(e.stateNode.nextSibling) : null
  return !0
}
function jd() {
  for (var e = De; e; ) e = Vt(e.nextSibling)
}
function Gn() {
  ;(De = Ae = null), (ee = !1)
}
function Gl(e) {
  rt === null ? (rt = [e]) : rt.push(e)
}
var Bm = Nt.ReactCurrentBatchConfig
function hr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309))
        var r = n.stateNode
      }
      if (!r) throw Error(N(147, e))
      var o = r,
        i = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs
            s === null ? delete l[i] : (l[i] = s)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(N(284))
    if (!n._owner) throw Error(N(290, e))
  }
  return e
}
function So(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(N(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  )
}
function hu(e) {
  var t = e._init
  return t(e._payload)
}
function Rd(e) {
  function t(h, m) {
    if (e) {
      var v = h.deletions
      v === null ? ((h.deletions = [m]), (h.flags |= 16)) : v.push(m)
    }
  }
  function n(h, m) {
    if (!e) return null
    for (; m !== null; ) t(h, m), (m = m.sibling)
    return null
  }
  function r(h, m) {
    for (h = new Map(); m !== null; ) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling)
    return h
  }
  function o(h, m) {
    return (h = Gt(h, m)), (h.index = 0), (h.sibling = null), h
  }
  function i(h, m, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate), v !== null ? ((v = v.index), v < m ? ((h.flags |= 2), m) : v) : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    )
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h
  }
  function l(h, m, v, w) {
    return m === null || m.tag !== 6 ? ((m = fs(v, h.mode, w)), (m.return = h), m) : ((m = o(m, v)), (m.return = h), m)
  }
  function a(h, m, v, w) {
    var E = v.type
    return E === En
      ? d(h, m, v.props.children, w, v.key)
      : m !== null &&
          (m.elementType === E || (typeof E == 'object' && E !== null && E.$$typeof === $t && hu(E) === m.type))
        ? ((w = o(m, v.props)), (w.ref = hr(h, m, v)), (w.return = h), w)
        : ((w = Uo(v.type, v.key, v.props, null, h.mode, w)), (w.ref = hr(h, m, v)), (w.return = h), w)
  }
  function u(h, m, v, w) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = ps(v, h.mode, w)), (m.return = h), m)
      : ((m = o(m, v.children || [])), (m.return = h), m)
  }
  function d(h, m, v, w, E) {
    return m === null || m.tag !== 7
      ? ((m = dn(v, h.mode, w, E)), (m.return = h), m)
      : ((m = o(m, v)), (m.return = h), m)
  }
  function p(h, m, v) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = fs('' + m, h.mode, v)), (m.return = h), m
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case uo:
          return (v = Uo(m.type, m.key, m.props, null, h.mode, v)), (v.ref = hr(h, null, m)), (v.return = h), v
        case Cn:
          return (m = ps(m, h.mode, v)), (m.return = h), m
        case $t:
          var w = m._init
          return p(h, w(m._payload), v)
      }
      if (wr(m) || ur(m)) return (m = dn(m, h.mode, v, null)), (m.return = h), m
      So(h, m)
    }
    return null
  }
  function f(h, m, v, w) {
    var E = m !== null ? m.key : null
    if ((typeof v == 'string' && v !== '') || typeof v == 'number') return E !== null ? null : l(h, m, '' + v, w)
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case uo:
          return v.key === E ? a(h, m, v, w) : null
        case Cn:
          return v.key === E ? u(h, m, v, w) : null
        case $t:
          return (E = v._init), f(h, m, E(v._payload), w)
      }
      if (wr(v) || ur(v)) return E !== null ? null : d(h, m, v, w, null)
      So(h, v)
    }
    return null
  }
  function y(h, m, v, w, E) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number') return (h = h.get(v) || null), l(m, h, '' + w, E)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case uo:
          return (h = h.get(w.key === null ? v : w.key) || null), a(m, h, w, E)
        case Cn:
          return (h = h.get(w.key === null ? v : w.key) || null), u(m, h, w, E)
        case $t:
          var _ = w._init
          return y(h, m, v, _(w._payload), E)
      }
      if (wr(w) || ur(w)) return (h = h.get(v) || null), d(m, h, w, E, null)
      So(m, w)
    }
    return null
  }
  function g(h, m, v, w) {
    for (var E = null, _ = null, j = m, P = (m = 0), C = null; j !== null && P < v.length; P++) {
      j.index > P ? ((C = j), (j = null)) : (C = j.sibling)
      var M = f(h, j, v[P], w)
      if (M === null) {
        j === null && (j = C)
        break
      }
      e && j && M.alternate === null && t(h, j),
        (m = i(M, m, P)),
        _ === null ? (E = M) : (_.sibling = M),
        (_ = M),
        (j = C)
    }
    if (P === v.length) return n(h, j), ee && tn(h, P), E
    if (j === null) {
      for (; P < v.length; P++)
        (j = p(h, v[P], w)), j !== null && ((m = i(j, m, P)), _ === null ? (E = j) : (_.sibling = j), (_ = j))
      return ee && tn(h, P), E
    }
    for (j = r(h, j); P < v.length; P++)
      (C = y(j, h, P, v[P], w)),
        C !== null &&
          (e && C.alternate !== null && j.delete(C.key === null ? P : C.key),
          (m = i(C, m, P)),
          _ === null ? (E = C) : (_.sibling = C),
          (_ = C))
    return (
      e &&
        j.forEach(function (b) {
          return t(h, b)
        }),
      ee && tn(h, P),
      E
    )
  }
  function x(h, m, v, w) {
    var E = ur(v)
    if (typeof E != 'function') throw Error(N(150))
    if (((v = E.call(v)), v == null)) throw Error(N(151))
    for (var _ = (E = null), j = m, P = (m = 0), C = null, M = v.next(); j !== null && !M.done; P++, M = v.next()) {
      j.index > P ? ((C = j), (j = null)) : (C = j.sibling)
      var b = f(h, j, M.value, w)
      if (b === null) {
        j === null && (j = C)
        break
      }
      e && j && b.alternate === null && t(h, j),
        (m = i(b, m, P)),
        _ === null ? (E = b) : (_.sibling = b),
        (_ = b),
        (j = C)
    }
    if (M.done) return n(h, j), ee && tn(h, P), E
    if (j === null) {
      for (; !M.done; P++, M = v.next())
        (M = p(h, M.value, w)), M !== null && ((m = i(M, m, P)), _ === null ? (E = M) : (_.sibling = M), (_ = M))
      return ee && tn(h, P), E
    }
    for (j = r(h, j); !M.done; P++, M = v.next())
      (M = y(j, h, P, M.value, w)),
        M !== null &&
          (e && M.alternate !== null && j.delete(M.key === null ? P : M.key),
          (m = i(M, m, P)),
          _ === null ? (E = M) : (_.sibling = M),
          (_ = M))
    return (
      e &&
        j.forEach(function ($) {
          return t(h, $)
        }),
      ee && tn(h, P),
      E
    )
  }
  function k(h, m, v, w) {
    if (
      (typeof v == 'object' && v !== null && v.type === En && v.key === null && (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case uo:
          e: {
            for (var E = v.key, _ = m; _ !== null; ) {
              if (_.key === E) {
                if (((E = v.type), E === En)) {
                  if (_.tag === 7) {
                    n(h, _.sibling), (m = o(_, v.props.children)), (m.return = h), (h = m)
                    break e
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == 'object' && E !== null && E.$$typeof === $t && hu(E) === _.type)
                ) {
                  n(h, _.sibling), (m = o(_, v.props)), (m.ref = hr(h, _, v)), (m.return = h), (h = m)
                  break e
                }
                n(h, _)
                break
              } else t(h, _)
              _ = _.sibling
            }
            v.type === En
              ? ((m = dn(v.props.children, h.mode, w, v.key)), (m.return = h), (h = m))
              : ((w = Uo(v.type, v.key, v.props, null, h.mode, w)), (w.ref = hr(h, m, v)), (w.return = h), (h = w))
          }
          return s(h)
        case Cn:
          e: {
            for (_ = v.key; m !== null; ) {
              if (m.key === _)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(h, m.sibling), (m = o(m, v.children || [])), (m.return = h), (h = m)
                  break e
                } else {
                  n(h, m)
                  break
                }
              else t(h, m)
              m = m.sibling
            }
            ;(m = ps(v, h.mode, w)), (m.return = h), (h = m)
          }
          return s(h)
        case $t:
          return (_ = v._init), k(h, m, _(v._payload), w)
      }
      if (wr(v)) return g(h, m, v, w)
      if (ur(v)) return x(h, m, v, w)
      So(h, v)
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = o(m, v)), (m.return = h), (h = m))
          : (n(h, m), (m = fs(v, h.mode, w)), (m.return = h), (h = m)),
        s(h))
      : n(h, m)
  }
  return k
}
var Qn = Rd(!0),
  Pd = Rd(!1),
  ri = qt(null),
  oi = null,
  Tn = null,
  Ql = null
function Yl() {
  Ql = Tn = oi = null
}
function Xl(e) {
  var t = ri.current
  J(ri), (e._currentValue = t)
}
function Ys(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Un(e, t) {
  ;(oi = e),
    (Ql = Tn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), (e.firstContext = null))
}
function Xe(e) {
  var t = e._currentValue
  if (Ql !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (oi === null) throw Error(N(308))
      ;(Tn = e), (oi.dependencies = { lanes: 0, firstContext: e })
    } else Tn = Tn.next = e
  return t
}
var ln = null
function Zl(e) {
  ln === null ? (ln = [e]) : ln.push(e)
}
function Nd(e, t, n, r) {
  var o = t.interleaved
  return o === null ? ((n.next = n), Zl(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), jt(e, r)
}
function jt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var It = !1
function Jl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Md(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Ct(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function Wt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), B & 2)) {
    var o = r.pending
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), jt(e, n)
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Zl(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    jt(e, n)
  )
}
function Io(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n)
  }
}
function mu(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t)
}
function ii(e, t, n, r) {
  var o = e.updateQueue
  It = !1
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending
  if (l !== null) {
    o.shared.pending = null
    var a = l,
      u = a.next
    ;(a.next = null), s === null ? (i = u) : (s.next = u), (s = a)
    var d = e.alternate
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s && (l === null ? (d.firstBaseUpdate = u) : (l.next = u), (d.lastBaseUpdate = a)))
  }
  if (i !== null) {
    var p = o.baseState
    ;(s = 0), (d = u = a = null), (l = i)
    do {
      var f = l.lane,
        y = l.eventTime
      if ((r & f) === f) {
        d !== null &&
          (d = d.next = { eventTime: y, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null })
        e: {
          var g = e,
            x = l
          switch (((f = t), (y = n), x.tag)) {
            case 1:
              if (((g = x.payload), typeof g == 'function')) {
                p = g.call(y, p, f)
                break e
              }
              p = g
              break e
            case 3:
              g.flags = (g.flags & -65537) | 128
            case 0:
              if (((g = x.payload), (f = typeof g == 'function' ? g.call(y, p, f) : g), f == null)) break e
              p = oe({}, p, f)
              break e
            case 2:
              It = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (f = o.effects), f === null ? (o.effects = [l]) : f.push(l))
      } else
        (y = { eventTime: y, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          d === null ? ((u = d = y), (a = p)) : (d = d.next = y),
          (s |= f)
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break
        ;(f = l), (l = f.next), (f.next = null), (o.lastBaseUpdate = f), (o.shared.pending = null)
      }
    } while (!0)
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (s |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(mn |= s), (e.lanes = s), (e.memoizedState = p)
  }
}
function vu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(N(191, o))
        o.call(r)
      }
    }
}
var ro = {},
  ht = qt(ro),
  Kr = qt(ro),
  Gr = qt(ro)
function an(e) {
  if (e === ro) throw Error(N(174))
  return e
}
function ql(e, t) {
  switch ((Q(Gr, t), Q(Kr, e), Q(ht, ro), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ns(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ns(t, e))
  }
  J(ht), Q(ht, t)
}
function Yn() {
  J(ht), J(Kr), J(Gr)
}
function Ld(e) {
  an(Gr.current)
  var t = an(ht.current),
    n = Ns(t, e.type)
  t !== n && (Q(Kr, e), Q(ht, n))
}
function ea(e) {
  Kr.current === e && (J(ht), J(Kr))
}
var ne = qt(0)
function si(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var ss = []
function ta() {
  for (var e = 0; e < ss.length; e++) ss[e]._workInProgressVersionPrimary = null
  ss.length = 0
}
var Fo = Nt.ReactCurrentDispatcher,
  ls = Nt.ReactCurrentBatchConfig,
  hn = 0,
  re = null,
  ue = null,
  de = null,
  li = !1,
  Pr = !1,
  Qr = 0,
  Vm = 0
function xe() {
  throw Error(N(321))
}
function na(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!st(e[n], t[n])) return !1
  return !0
}
function ra(e, t, n, r, o, i) {
  if (
    ((hn = i),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fo.current = e === null || e.memoizedState === null ? Gm : Qm),
    (e = n(r, o)),
    Pr)
  ) {
    i = 0
    do {
      if (((Pr = !1), (Qr = 0), 25 <= i)) throw Error(N(301))
      ;(i += 1), (de = ue = null), (t.updateQueue = null), (Fo.current = Ym), (e = n(r, o))
    } while (Pr)
  }
  if (((Fo.current = ai), (t = ue !== null && ue.next !== null), (hn = 0), (de = ue = re = null), (li = !1), t))
    throw Error(N(300))
  return e
}
function oa() {
  var e = Qr !== 0
  return (Qr = 0), e
}
function ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return de === null ? (re.memoizedState = de = e) : (de = de.next = e), de
}
function Ze() {
  if (ue === null) {
    var e = re.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ue.next
  var t = de === null ? re.memoizedState : de.next
  if (t !== null) (de = t), (ue = e)
  else {
    if (e === null) throw Error(N(310))
    ;(ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      de === null ? (re.memoizedState = de = e) : (de = de.next = e)
  }
  return de
}
function Yr(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function as(e) {
  var t = Ze(),
    n = t.queue
  if (n === null) throw Error(N(311))
  n.lastRenderedReducer = e
  var r = ue,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var s = o.next
      ;(o.next = i.next), (i.next = s)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var l = (s = null),
      a = null,
      u = i
    do {
      var d = u.lane
      if ((hn & d) === d)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var p = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p), (re.lanes |= d), (mn |= d)
      }
      u = u.next
    } while (u !== null && u !== i)
    a === null ? (s = r) : (a.next = l),
      st(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (re.lanes |= i), (mn |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function us(e) {
  var t = Ze(),
    n = t.queue
  if (n === null) throw Error(N(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var s = (o = o.next)
    do (i = e(i, s.action)), (s = s.next)
    while (s !== o)
    st(i, t.memoizedState) || (Te = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function Td() {}
function zd(e, t) {
  var n = re,
    r = Ze(),
    o = t(),
    i = !st(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (Te = !0)),
    (r = r.queue),
    ia(Fd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Xr(9, Id.bind(null, n, r, o, t), void 0, null), he === null)) throw Error(N(349))
    hn & 30 || $d(n, t, o)
  }
  return o
}
function $d(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (re.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Id(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), bd(t) && Od(e)
}
function Fd(e, t, n) {
  return n(function () {
    bd(t) && Od(e)
  })
}
function bd(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !st(e, n)
  } catch {
    return !0
  }
}
function Od(e) {
  var t = jt(e, 1)
  t !== null && it(t, e, 1, -1)
}
function gu(e) {
  var t = ct()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yr, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = Km.bind(null, re, e)),
    [t.memoizedState, e]
  )
}
function Xr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (re.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Dd() {
  return Ze().memoizedState
}
function bo(e, t, n, r) {
  var o = ct()
  ;(re.flags |= e), (o.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r))
}
function ji(e, t, n, r) {
  var o = Ze()
  r = r === void 0 ? null : r
  var i = void 0
  if (ue !== null) {
    var s = ue.memoizedState
    if (((i = s.destroy), r !== null && na(r, s.deps))) {
      o.memoizedState = Xr(t, n, i, r)
      return
    }
  }
  ;(re.flags |= e), (o.memoizedState = Xr(1 | t, n, i, r))
}
function yu(e, t) {
  return bo(8390656, 8, e, t)
}
function ia(e, t) {
  return ji(2048, 8, e, t)
}
function Ad(e, t) {
  return ji(4, 2, e, t)
}
function Ud(e, t) {
  return ji(4, 4, e, t)
}
function Bd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Vd(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ji(4, 4, Bd.bind(null, t, e), n)
}
function sa() {}
function Wd(e, t) {
  var n = Ze()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && na(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function Hd(e, t) {
  var n = Ze()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && na(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Kd(e, t, n) {
  return hn & 21
    ? (st(n, t) || ((n = Zc()), (re.lanes |= n), (mn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n))
}
function Wm(e, t) {
  var n = W
  ;(W = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = ls.transition
  ls.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(W = n), (ls.transition = r)
  }
}
function Gd() {
  return Ze().memoizedState
}
function Hm(e, t, n) {
  var r = Kt(e)
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Qd(e))) Yd(t, n)
  else if (((n = Nd(e, t, n, r)), n !== null)) {
    var o = Re()
    it(n, e, r, o), Xd(n, t, r)
  }
}
function Km(e, t, n) {
  var r = Kt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Qd(e)) Yd(t, o)
  else {
    var i = e.alternate
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          l = i(s, n)
        if (((o.hasEagerState = !0), (o.eagerState = l), st(l, s))) {
          var a = t.interleaved
          a === null ? ((o.next = o), Zl(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Nd(e, t, o, r)), n !== null && ((o = Re()), it(n, e, r, o), Xd(n, t, r))
  }
}
function Qd(e) {
  var t = e.alternate
  return e === re || (t !== null && t === re)
}
function Yd(e, t) {
  Pr = li = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Xd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n)
  }
}
var ai = {
    readContext: Xe,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1,
  },
  Gm = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (ct().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Xe,
    useEffect: yu,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), bo(4194308, 4, Bd.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return bo(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return bo(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = ct()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = ct()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Hm.bind(null, re, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = ct()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: gu,
    useDebugValue: sa,
    useDeferredValue: function (e) {
      return (ct().memoizedState = e)
    },
    useTransition: function () {
      var e = gu(!1),
        t = e[0]
      return (e = Wm.bind(null, e[1])), (ct().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        o = ct()
      if (ee) {
        if (n === void 0) throw Error(N(407))
        n = n()
      } else {
        if (((n = t()), he === null)) throw Error(N(349))
        hn & 30 || $d(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        yu(Fd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xr(9, Id.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = ct(),
        t = he.identifierPrefix
      if (ee) {
        var n = kt,
          r = St
        ;(n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Qr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Vm++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Qm = {
    readContext: Xe,
    useCallback: Wd,
    useContext: Xe,
    useEffect: ia,
    useImperativeHandle: Vd,
    useInsertionEffect: Ad,
    useLayoutEffect: Ud,
    useMemo: Hd,
    useReducer: as,
    useRef: Dd,
    useState: function () {
      return as(Yr)
    },
    useDebugValue: sa,
    useDeferredValue: function (e) {
      var t = Ze()
      return Kd(t, ue.memoizedState, e)
    },
    useTransition: function () {
      var e = as(Yr)[0],
        t = Ze().memoizedState
      return [e, t]
    },
    useMutableSource: Td,
    useSyncExternalStore: zd,
    useId: Gd,
    unstable_isNewReconciler: !1,
  },
  Ym = {
    readContext: Xe,
    useCallback: Wd,
    useContext: Xe,
    useEffect: ia,
    useImperativeHandle: Vd,
    useInsertionEffect: Ad,
    useLayoutEffect: Ud,
    useMemo: Hd,
    useReducer: us,
    useRef: Dd,
    useState: function () {
      return us(Yr)
    },
    useDebugValue: sa,
    useDeferredValue: function (e) {
      var t = Ze()
      return ue === null ? (t.memoizedState = e) : Kd(t, ue.memoizedState, e)
    },
    useTransition: function () {
      var e = us(Yr)[0],
        t = Ze().memoizedState
      return [e, t]
    },
    useMutableSource: Td,
    useSyncExternalStore: zd,
    useId: Gd,
    unstable_isNewReconciler: !1,
  }
function tt(e, t) {
  if (e && e.defaultProps) {
    ;(t = oe({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Xs(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ri = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Re(),
      o = Kt(e),
      i = Ct(r, o)
    ;(i.payload = t), n != null && (i.callback = n), (t = Wt(e, i, o)), t !== null && (it(t, e, o, r), Io(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Re(),
      o = Kt(e),
      i = Ct(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Wt(e, i, o)),
      t !== null && (it(t, e, o, r), Io(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Re(),
      r = Kt(e),
      o = Ct(n, r)
    ;(o.tag = 2), t != null && (o.callback = t), (t = Wt(e, o, r)), t !== null && (it(t, e, r, n), Io(t, e, r))
  },
}
function xu(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Br(n, r) || !Br(o, i)
        : !0
  )
}
function Zd(e, t, n) {
  var r = !1,
    o = Xt,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Xe(i))
      : ((o = $e(t) ? fn : Ee.current), (r = t.contextTypes), (i = (r = r != null) ? Kn(e, o) : Xt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ri),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function wu(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ri.enqueueReplaceState(t, t.state, null)
}
function Zs(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = {}), Jl(e)
  var i = t.contextType
  typeof i == 'object' && i !== null ? (o.context = Xe(i)) : ((i = $e(t) ? fn : Ee.current), (o.context = Kn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Xs(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && Ri.enqueueReplaceState(o, o.state, null),
      ii(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Xn(e, t) {
  try {
    var n = '',
      r = t
    do (n += Ch(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function cs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Js(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Xm = typeof WeakMap == 'function' ? WeakMap : Map
function Jd(e, t, n) {
  ;(n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      ci || ((ci = !0), (al = r)), Js(e, t)
    }),
    n
  )
}
function qd(e, t, n) {
  ;(n = Ct(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Js(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Js(e, t), typeof r != 'function' && (Ht === null ? (Ht = new Set([this])) : Ht.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
      }),
    n
  )
}
function Su(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Xm()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = c0.bind(null, e, t, n)), t.then(e, e))
}
function ku(e) {
  do {
    var t
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e
    e = e.return
  } while (e !== null)
  return null
}
function Cu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Ct(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Zm = Nt.ReactCurrentOwner,
  Te = !1
function _e(e, t, n, r) {
  t.child = e === null ? Pd(t, null, n, r) : Qn(t, e.child, n, r)
}
function Eu(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    Un(t, o),
    (r = ra(e, t, n, r, i, o)),
    (n = oa()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Rt(e, t, o))
      : (ee && n && Hl(t), (t.flags |= 1), _e(e, t, r, o), t.child)
  )
}
function _u(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !ha(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ef(e, t, i, r, o))
      : ((e = Uo(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : Br), n(s, r) && e.ref === t.ref)) return Rt(e, t, o)
  }
  return (t.flags |= 1), (e = Gt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function ef(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Br(i, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Te = !0)
      else return (t.lanes = e.lanes), Rt(e, t, o)
  }
  return qs(e, t, n, r, o)
}
function tf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Q($n, Oe), (Oe |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          Q($n, Oe),
          (Oe |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Q($n, Oe),
        (Oe |= r)
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), Q($n, Oe), (Oe |= r)
  return _e(e, t, o, n), t.child
}
function nf(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152))
}
function qs(e, t, n, r, o) {
  var i = $e(n) ? fn : Ee.current
  return (
    (i = Kn(t, i)),
    Un(t, o),
    (n = ra(e, t, n, r, i, o)),
    (r = oa()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Rt(e, t, o))
      : (ee && r && Hl(t), (t.flags |= 1), _e(e, t, n, o), t.child)
  )
}
function ju(e, t, n, r, o) {
  if ($e(n)) {
    var i = !0
    ei(t)
  } else i = !1
  if ((Un(t, o), t.stateNode === null)) Oo(e, t), Zd(t, n, r), Zs(t, n, r, o), (r = !0)
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps
    s.props = l
    var a = s.context,
      u = n.contextType
    typeof u == 'object' && u !== null ? (u = Xe(u)) : ((u = $e(n) ? fn : Ee.current), (u = Kn(t, u)))
    var d = n.getDerivedStateFromProps,
      p = typeof d == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && wu(t, s, r, u)),
      (It = !1)
    var f = t.memoizedState
    ;(s.state = f),
      ii(t, r, s, o),
      (a = t.memoizedState),
      l !== r || f !== a || ze.current || It
        ? (typeof d == 'function' && (Xs(t, n, d, r), (a = t.memoizedState)),
          (l = It || xu(t, n, l, r, f, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
  } else {
    ;(s = t.stateNode),
      Md(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : tt(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null ? (a = Xe(a)) : ((a = $e(n) ? fn : Ee.current), (a = Kn(t, a)))
    var y = n.getDerivedStateFromProps
    ;(d = typeof y == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((l !== p || f !== a) && wu(t, s, r, a)),
      (It = !1),
      (f = t.memoizedState),
      (s.state = f),
      ii(t, r, s, o)
    var g = t.memoizedState
    l !== p || f !== g || ze.current || It
      ? (typeof y == 'function' && (Xs(t, n, y, r), (g = t.memoizedState)),
        (u = It || xu(t, n, u, r, f, g, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' && typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, g, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' && s.UNSAFE_componentWillUpdate(r, g, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return el(e, t, n, r, i, o)
}
function el(e, t, n, r, o, i) {
  nf(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return o && du(t, n, !1), Rt(e, t, i)
  ;(r = t.stateNode), (Zm.current = t)
  var l = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = Qn(t, e.child, null, i)), (t.child = Qn(t, null, l, i))) : _e(e, t, l, i),
    (t.memoizedState = r.state),
    o && du(t, n, !0),
    t.child
  )
}
function rf(e) {
  var t = e.stateNode
  t.pendingContext ? cu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cu(e, t.context, !1),
    ql(e, t.containerInfo)
}
function Ru(e, t, n, r, o) {
  return Gn(), Gl(o), (t.flags |= 256), _e(e, t, n, r), t.child
}
var tl = { dehydrated: null, treeContext: null, retryLane: 0 }
function nl(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function of(e, t, n) {
  var r = t.pendingProps,
    o = ne.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l
  if (
    ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    Q(ne, o & 1),
    e === null)
  )
    return (
      Qs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = Mi(s, r, 0, null)),
              (e = dn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = nl(n)),
              (t.memoizedState = tl),
              e)
            : la(t, s))
    )
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null))) return Jm(e, t, s, r, l, o, n)
  if (i) {
    ;(i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = Gt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Gt(l, i)) : ((i = dn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? nl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = tl),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Gt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function la(e, t) {
  return (t = Mi({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function ko(e, t, n, r) {
  return (
    r !== null && Gl(r),
    Qn(t, e.child, null, n),
    (e = la(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Jm(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cs(Error(N(422)))), ko(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Mi({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = dn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Qn(t, e.child, null, s),
          (t.child.memoizedState = nl(s)),
          (t.memoizedState = tl),
          i)
  if (!(t.mode & 1)) return ko(e, t, s, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (i = Error(N(419))), (r = cs(i, r, void 0)), ko(e, t, s, r)
  }
  if (((l = (s & e.childLanes) !== 0), Te || l)) {
    if (((r = he), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), jt(e, o), it(r, e, o, -1))
    }
    return pa(), (r = cs(Error(N(421)))), ko(e, t, s, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = d0.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (De = Vt(o.nextSibling)),
      (Ae = t),
      (ee = !0),
      (rt = null),
      e !== null && ((He[Ke++] = St), (He[Ke++] = kt), (He[Ke++] = pn), (St = e.id), (kt = e.overflow), (pn = t)),
      (t = la(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Pu(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Ys(e.return, t, n)
}
function ds(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function sf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((_e(e, t, r.children, n), (r = ne.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pu(e, n, t)
        else if (e.tag === 19) Pu(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((Q(ne, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && si(e) === null && (o = n), (n = n.sibling)
        ;(n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          ds(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && si(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        ds(t, !0, n, null, i)
        break
      case 'together':
        ds(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Oo(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Rt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (mn |= t.lanes), !(n & t.childLanes))) return null
  if (e !== null && t.child !== e.child) throw Error(N(153))
  if (t.child !== null) {
    for (e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function qm(e, t, n) {
  switch (t.tag) {
    case 3:
      rf(t), Gn()
      break
    case 5:
      Ld(t)
      break
    case 1:
      $e(t.type) && ei(t)
      break
    case 4:
      ql(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      Q(ri, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? of(e, t, n)
            : (Q(ne, ne.current & 1), (e = Rt(e, t, n)), e !== null ? e.sibling : null)
      Q(ne, ne.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sf(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Q(ne, ne.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), tf(e, t, n)
  }
  return Rt(e, t, n)
}
var lf, rl, af, uf
lf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
rl = function () {}
af = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), an(ht.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = _s(e, o)), (r = _s(e, r)), (i = [])
        break
      case 'select':
        ;(o = oe({}, o, { value: void 0 })), (r = oe({}, r, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = Ps(e, o)), (r = Ps(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Jo)
    }
    Ms(n, r)
    var s
    n = null
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u]
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Ir.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (((l = o != null ? o[u] : void 0), r.hasOwnProperty(u) && a !== l && (a != null || l != null)))
        if (u === 'style')
          if (l) {
            for (s in l) !l.hasOwnProperty(s) || (a && a.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''))
            for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), (n[s] = a[s]))
          } else n || (i || (i = []), i.push(u, n)), (n = a)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') || (i = i || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Ir.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && Z('scroll', e), i || l === a || (i = []))
                  : (i = i || []).push(u, a))
    }
    n && (i = i || []).push('style', n)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
uf = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function mr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null)
    }
}
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function e0(e, t, n) {
  var r = t.pendingProps
  switch ((Kl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return we(t), null
    case 1:
      return $e(t.type) && qo(), we(t), null
    case 3:
      return (
        (r = t.stateNode),
        Yn(),
        J(ze),
        J(Ee),
        ta(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (wo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (dl(rt), (rt = null)))),
        rl(e, t),
        we(t),
        null
      )
    case 5:
      ea(t)
      var o = an(Gr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        af(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166))
          return we(t), null
        }
        if (((e = an(ht.current)), wo(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[ft] = t), (r[Hr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Z('cancel', r), Z('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Z('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < kr.length; o++) Z(kr[o], r)
              break
            case 'source':
              Z('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              Z('error', r), Z('load', r)
              break
            case 'details':
              Z('toggle', r)
              break
            case 'input':
              ba(r, i), Z('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }), Z('invalid', r)
              break
            case 'textarea':
              Da(r, i), Z('invalid', r)
          }
          Ms(n, i), (o = null)
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s]
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 && xo(r.textContent, l, e), (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 && xo(r.textContent, l, e), (o = ['children', '' + l]))
                : Ir.hasOwnProperty(s) && l != null && s === 'onScroll' && Z('scroll', r)
            }
          switch (n) {
            case 'input':
              co(r), Oa(r, i, !0)
              break
            case 'textarea':
              co(r), Aa(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Jo)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Fc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ft] = t),
            (e[Hr] = r),
            lf(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = Ls(n, r)), n)) {
              case 'dialog':
                Z('cancel', e), Z('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Z('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < kr.length; o++) Z(kr[o], e)
                o = r
                break
              case 'source':
                Z('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                Z('error', e), Z('load', e), (o = r)
                break
              case 'details':
                Z('toggle', e), (o = r)
                break
              case 'input':
                ba(e, r), (o = _s(e, r)), Z('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }), (o = oe({}, r, { value: void 0 })), Z('invalid', e)
                break
              case 'textarea':
                Da(e, r), (o = Ps(e, r)), Z('invalid', e)
                break
              default:
                o = r
            }
            Ms(n, o), (l = o)
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i]
                i === 'style'
                  ? Dc(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && bc(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && Fr(e, a)
                        : typeof a == 'number' && Fr(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Ir.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && Z('scroll', e)
                          : a != null && Ll(e, i, a, s))
              }
            switch (n) {
              case 'input':
                co(e), Oa(e, r, !1)
                break
              case 'textarea':
                co(e), Aa(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Yt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? bn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && bn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Jo)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return we(t), null
    case 6:
      if (e && t.stateNode != null) uf(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166))
        if (((n = an(Gr.current)), an(ht.current), wo(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[ft] = t), (i = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                xo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && xo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[ft] = t), (t.stateNode = r)
      }
      return we(t), null
    case 13:
      if (
        (J(ne), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && De !== null && t.mode & 1 && !(t.flags & 128)) jd(), Gn(), (t.flags |= 98560), (i = !1)
        else if (((i = wo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(N(317))
            i[ft] = t
          } else Gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          we(t), (i = !1)
        } else rt !== null && (dl(rt), (rt = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ne.current & 1 ? ce === 0 && (ce = 3) : pa())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null)
    case 4:
      return Yn(), rl(e, t), e === null && Vr(t.stateNode.containerInfo), we(t), null
    case 10:
      return Xl(t.type._context), we(t), null
    case 17:
      return $e(t.type) && qo(), we(t), null
    case 19:
      if ((J(ne), (i = t.memoizedState), i === null)) return we(t), null
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) mr(i, !1)
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = si(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    mr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling)
                return Q(ne, (ne.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null && se() > Zn && ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = si(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !ee)
            )
              return we(t), null
          } else
            2 * se() - i.renderingStartTime > Zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = se()),
          (t.sibling = null),
          (n = ne.current),
          Q(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null)
    case 22:
    case 23:
      return (
        fa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Oe & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(N(156, t.tag))
}
function t0(e, t) {
  switch ((Kl(t), t.tag)) {
    case 1:
      return $e(t.type) && qo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 3:
      return (
        Yn(), J(ze), J(Ee), ta(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return ea(t), null
    case 13:
      if ((J(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340))
        Gn()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return J(ne), null
    case 4:
      return Yn(), null
    case 10:
      return Xl(t.type._context), null
    case 22:
    case 23:
      return fa(), null
    case 24:
      return null
    default:
      return null
  }
}
var Co = !1,
  ke = !1,
  n0 = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null
function zn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        ie(e, t, r)
      }
    else n.current = null
}
function ol(e, t, n) {
  try {
    n()
  } catch (r) {
    ie(e, t, r)
  }
}
var Nu = !1
function r0(e, t) {
  if (((Us = Yo), (e = pd()), Wl(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            f = null
          t: for (;;) {
            for (
              var y;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (f = p), (p = y)
            for (;;) {
              if (p === e) break t
              if ((f === n && ++u === o && (l = s), f === i && ++d === r && (a = s), (y = p.nextSibling) !== null))
                break
              ;(p = f), (f = p.parentNode)
            }
            p = y
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Bs = { focusedElem: e, selectionRange: n }, Yo = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (L = e)
    else
      for (; L !== null; ) {
        t = L
        try {
          var g = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (g !== null) {
                  var x = g.memoizedProps,
                    k = g.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : tt(t.type, x), k)
                  h.__reactInternalSnapshotBeforeUpdate = m
                }
                break
              case 3:
                var v = t.stateNode.containerInfo
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(N(163))
            }
        } catch (w) {
          ie(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (L = e)
          break
        }
        L = t.return
      }
  return (g = Nu), (Nu = !1), g
}
function Nr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && ol(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function Pi(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function il(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function cf(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), cf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[ft], delete t[Hr], delete t[Hs], delete t[Dm], delete t[Am])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function df(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || df(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function sl(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Jo))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sl(e, t, n), e = e.sibling; e !== null; ) sl(e, t, n), (e = e.sibling)
}
function ll(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ll(e, t, n), e = e.sibling; e !== null; ) ll(e, t, n), (e = e.sibling)
}
var me = null,
  nt = !1
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) ff(e, t, n), (n = n.sibling)
}
function ff(e, t, n) {
  if (pt && typeof pt.onCommitFiberUnmount == 'function')
    try {
      pt.onCommitFiberUnmount(wi, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ke || zn(n, t)
    case 6:
      var r = me,
        o = nt
      ;(me = null),
        Lt(e, t, n),
        (me = r),
        (nt = o),
        me !== null &&
          (nt
            ? ((e = me), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode))
      break
    case 18:
      me !== null &&
        (nt
          ? ((e = me), (n = n.stateNode), e.nodeType === 8 ? os(e.parentNode, n) : e.nodeType === 1 && os(e, n), Ar(e))
          : os(me, n.stateNode))
      break
    case 4:
      ;(r = me), (o = nt), (me = n.stateNode.containerInfo), (nt = !0), Lt(e, t, n), (me = r), (nt = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next
        do {
          var i = o,
            s = i.destroy
          ;(i = i.tag), s !== void 0 && (i & 2 || i & 4) && ol(n, t, s), (o = o.next)
        } while (o !== r)
      }
      Lt(e, t, n)
      break
    case 1:
      if (!ke && (zn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          ;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
        } catch (l) {
          ie(n, t, l)
        }
      Lt(e, t, n)
      break
    case 21:
      Lt(e, t, n)
      break
    case 22:
      n.mode & 1 ? ((ke = (r = ke) || n.memoizedState !== null), Lt(e, t, n), (ke = r)) : Lt(e, t, n)
      break
    default:
      Lt(e, t, n)
  }
}
function Lu(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new n0()),
      t.forEach(function (r) {
        var o = f0.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function et(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          s = t,
          l = s
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(me = l.stateNode), (nt = !1)
              break e
            case 3:
              ;(me = l.stateNode.containerInfo), (nt = !0)
              break e
            case 4:
              ;(me = l.stateNode.containerInfo), (nt = !0)
              break e
          }
          l = l.return
        }
        if (me === null) throw Error(N(160))
        ff(i, s, o), (me = null), (nt = !1)
        var a = o.alternate
        a !== null && (a.return = null), (o.return = null)
      } catch (u) {
        ie(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) pf(t, e), (t = t.sibling)
}
function pf(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), ut(e), r & 4)) {
        try {
          Nr(3, e, e.return), Pi(3, e)
        } catch (x) {
          ie(e, e.return, x)
        }
        try {
          Nr(5, e, e.return)
        } catch (x) {
          ie(e, e.return, x)
        }
      }
      break
    case 1:
      et(t, e), ut(e), r & 512 && n !== null && zn(n, n.return)
      break
    case 5:
      if ((et(t, e), ut(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          Fr(o, '')
        } catch (x) {
          ie(e, e.return, x)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && $c(o, i), Ls(l, s)
            var u = Ls(l, i)
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                p = a[s + 1]
              d === 'style'
                ? Dc(o, p)
                : d === 'dangerouslySetInnerHTML'
                  ? bc(o, p)
                  : d === 'children'
                    ? Fr(o, p)
                    : Ll(o, d, p, u)
            }
            switch (l) {
              case 'input':
                js(o, i)
                break
              case 'textarea':
                Ic(o, i)
                break
              case 'select':
                var f = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var y = i.value
                y != null
                  ? bn(o, !!i.multiple, y, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? bn(o, !!i.multiple, i.defaultValue, !0)
                      : bn(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Hr] = i
          } catch (x) {
            ie(e, e.return, x)
          }
      }
      break
    case 6:
      if ((et(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (x) {
          ie(e, e.return, x)
        }
      }
      break
    case 3:
      if ((et(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Ar(t.containerInfo)
        } catch (x) {
          ie(e, e.return, x)
        }
      break
    case 4:
      et(t, e), ut(e)
      break
    case 13:
      et(t, e),
        ut(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (ca = se())),
        r & 4 && Lu(e)
      break
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ke = (u = ke) || d), et(t, e), (ke = u)) : et(t, e),
        ut(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
          for (L = e, d = e.child; d !== null; ) {
            for (p = L = d; L !== null; ) {
              switch (((f = L), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nr(4, f, f.return)
                  break
                case 1:
                  zn(f, f.return)
                  var g = f.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(r = f), (n = f.return)
                    try {
                      ;(t = r), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount()
                    } catch (x) {
                      ie(r, n, x)
                    }
                  }
                  break
                case 5:
                  zn(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    zu(p)
                    continue
                  }
              }
              y !== null ? ((y.return = f), (L = y)) : zu(p)
            }
            d = d.sibling
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p
              try {
                ;(o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s = a != null && a.hasOwnProperty('display') ? a.display : null),
                      (l.style.display = Oc('display', s)))
              } catch (x) {
                ie(e, e.return, x)
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? '' : p.memoizedProps
              } catch (x) {
                ie(e, e.return, x)
              }
          } else if (((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) && p.child !== null) {
            ;(p.child.return = p), (p = p.child)
            continue
          }
          if (p === e) break e
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e
            d === p && (d = null), (p = p.return)
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling)
        }
      }
      break
    case 19:
      et(t, e), ut(e), r & 4 && Lu(e)
      break
    case 21:
      break
    default:
      et(t, e), ut(e)
  }
}
function ut(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (df(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(N(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (Fr(o, ''), (r.flags &= -33))
          var i = Mu(e)
          ll(e, i, o)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Mu(e)
          sl(e, l, s)
          break
        default:
          throw Error(N(161))
      }
    } catch (a) {
      ie(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function o0(e, t, n) {
  ;(L = e), hf(e)
}
function hf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Co
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || ke
        l = Co
        var u = ke
        if (((Co = s), (ke = a) && !u))
          for (L = o; L !== null; )
            (s = L),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null ? $u(o) : a !== null ? ((a.return = s), (L = a)) : $u(o)
        for (; i !== null; ) (L = i), hf(i), (i = i.sibling)
        ;(L = o), (Co = l), (ke = u)
      }
      Tu(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : Tu(e)
  }
}
function Tu(e) {
  for (; L !== null; ) {
    var t = L
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ke || Pi(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ke)
                if (n === null) r.componentDidMount()
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : tt(t.type, n.memoizedProps)
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                }
              var i = t.updateQueue
              i !== null && vu(t, i, r)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                vu(t, s, n)
              }
              break
            case 5:
              var l = t.stateNode
              if (n === null && t.flags & 4) {
                n = l
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var d = u.memoizedState
                  if (d !== null) {
                    var p = d.dehydrated
                    p !== null && Ar(p)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(N(163))
          }
        ke || (t.flags & 512 && il(t))
      } catch (f) {
        ie(t, t.return, f)
      }
    }
    if (t === e) {
      L = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (L = n)
      break
    }
    L = t.return
  }
}
function zu(e) {
  for (; L !== null; ) {
    var t = L
    if (t === e) {
      L = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (L = n)
      break
    }
    L = t.return
  }
}
function $u(e) {
  for (; L !== null; ) {
    var t = L
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Pi(4, t)
          } catch (a) {
            ie(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              ie(t, o, a)
            }
          }
          var i = t.return
          try {
            il(t)
          } catch (a) {
            ie(t, i, a)
          }
          break
        case 5:
          var s = t.return
          try {
            il(t)
          } catch (a) {
            ie(t, s, a)
          }
      }
    } catch (a) {
      ie(t, t.return, a)
    }
    if (t === e) {
      L = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (L = l)
      break
    }
    L = t.return
  }
}
var i0 = Math.ceil,
  ui = Nt.ReactCurrentDispatcher,
  aa = Nt.ReactCurrentOwner,
  Ye = Nt.ReactCurrentBatchConfig,
  B = 0,
  he = null,
  le = null,
  ve = 0,
  Oe = 0,
  $n = qt(0),
  ce = 0,
  Zr = null,
  mn = 0,
  Ni = 0,
  ua = 0,
  Mr = null,
  Le = null,
  ca = 0,
  Zn = 1 / 0,
  xt = null,
  ci = !1,
  al = null,
  Ht = null,
  Eo = !1,
  Dt = null,
  di = 0,
  Lr = 0,
  ul = null,
  Do = -1,
  Ao = 0
function Re() {
  return B & 6 ? se() : Do !== -1 ? Do : (Do = se())
}
function Kt(e) {
  return e.mode & 1
    ? B & 2 && ve !== 0
      ? ve & -ve
      : Bm.transition !== null
        ? (Ao === 0 && (Ao = Zc()), Ao)
        : ((e = W), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : od(e.type))), e)
    : 1
}
function it(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (ul = null), Error(N(185)))
  eo(e, n, r),
    (!(B & 2) || e !== he) &&
      (e === he && (!(B & 2) && (Ni |= n), ce === 4 && bt(e, ve)),
      Ie(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Zn = se() + 500), _i && en()))
}
function Ie(e, t) {
  var n = e.callbackNode
  Bh(e, t)
  var r = Qo(e, e === he ? ve : 0)
  if (r === 0) n !== null && Va(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Va(n), t === 1))
      e.tag === 0 ? Um(Iu.bind(null, e)) : Cd(Iu.bind(null, e)),
        bm(function () {
          !(B & 6) && en()
        }),
        (n = null)
    else {
      switch (Jc(r)) {
        case 1:
          n = Fl
          break
        case 4:
          n = Yc
          break
        case 16:
          n = Go
          break
        case 536870912:
          n = Xc
          break
        default:
          n = Go
      }
      n = kf(n, mf.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function mf(e, t) {
  if (((Do = -1), (Ao = 0), B & 6)) throw Error(N(327))
  var n = e.callbackNode
  if (Bn() && e.callbackNode !== n) return null
  var r = Qo(e, e === he ? ve : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = fi(e, r)
  else {
    t = r
    var o = B
    B |= 2
    var i = gf()
    ;(he !== e || ve !== t) && ((xt = null), (Zn = se() + 500), cn(e, t))
    do
      try {
        a0()
        break
      } catch (l) {
        vf(e, l)
      }
    while (!0)
    Yl(), (ui.current = i), (B = o), le !== null ? (t = 0) : ((he = null), (ve = 0), (t = ce))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Fs(e)), o !== 0 && ((r = o), (t = cl(e, o)))), t === 1))
      throw ((n = Zr), cn(e, 0), bt(e, r), Ie(e, se()), n)
    if (t === 6) bt(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !s0(o) &&
          ((t = fi(e, r)), t === 2 && ((i = Fs(e)), i !== 0 && ((r = i), (t = cl(e, i)))), t === 1))
      )
        throw ((n = Zr), cn(e, 0), bt(e, r), Ie(e, se()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345))
        case 2:
          nn(e, Le, xt)
          break
        case 3:
          if ((bt(e, r), (r & 130023424) === r && ((t = ca + 500 - se()), 10 < t))) {
            if (Qo(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Ws(nn.bind(null, e, Le, xt), t)
            break
          }
          nn(e, Le, xt)
          break
        case 4:
          if ((bt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - ot(r)
            ;(i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i)
          }
          if (
            ((r = o),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * i0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ws(nn.bind(null, e, Le, xt), r)
            break
          }
          nn(e, Le, xt)
          break
        case 5:
          nn(e, Le, xt)
          break
        default:
          throw Error(N(329))
      }
    }
  }
  return Ie(e, se()), e.callbackNode === n ? mf.bind(null, e) : null
}
function cl(e, t) {
  var n = Mr
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = fi(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && dl(t)),
    e
  )
}
function dl(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e)
}
function s0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!st(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function bt(e, t) {
  for (t &= ~ua, t &= ~Ni, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ot(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Iu(e) {
  if (B & 6) throw Error(N(327))
  Bn()
  var t = Qo(e, 0)
  if (!(t & 1)) return Ie(e, se()), null
  var n = fi(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Fs(e)
    r !== 0 && ((t = r), (n = cl(e, r)))
  }
  if (n === 1) throw ((n = Zr), cn(e, 0), bt(e, t), Ie(e, se()), n)
  if (n === 6) throw Error(N(345))
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), nn(e, Le, xt), Ie(e, se()), null
}
function da(e, t) {
  var n = B
  B |= 1
  try {
    return e(t)
  } finally {
    ;(B = n), B === 0 && ((Zn = se() + 500), _i && en())
  }
}
function vn(e) {
  Dt !== null && Dt.tag === 0 && !(B & 6) && Bn()
  var t = B
  B |= 1
  var n = Ye.transition,
    r = W
  try {
    if (((Ye.transition = null), (W = 1), e)) return e()
  } finally {
    ;(W = r), (Ye.transition = n), (B = t), !(B & 6) && en()
  }
}
function fa() {
  ;(Oe = $n.current), J($n)
}
function cn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Fm(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n
      switch ((Kl(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && qo()
          break
        case 3:
          Yn(), J(ze), J(Ee), ta()
          break
        case 5:
          ea(r)
          break
        case 4:
          Yn()
          break
        case 13:
          J(ne)
          break
        case 19:
          J(ne)
          break
        case 10:
          Xl(r.type._context)
          break
        case 22:
        case 23:
          fa()
      }
      n = n.return
    }
  if (
    ((he = e),
    (le = e = Gt(e.current, null)),
    (ve = Oe = t),
    (ce = 0),
    (Zr = null),
    (ua = Ni = mn = 0),
    (Le = Mr = null),
    ln !== null)
  ) {
    for (t = 0; t < ln.length; t++)
      if (((n = ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var s = i.next
          ;(i.next = o), (r.next = s)
        }
        n.pending = r
      }
    ln = null
  }
  return e
}
function vf(e, t) {
  do {
    var n = le
    try {
      if ((Yl(), (Fo.current = ai), li)) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        li = !1
      }
      if (
        ((hn = 0), (de = ue = re = null), (Pr = !1), (Qr = 0), (aa.current = null), n === null || n.return === null)
      ) {
        ;(ce = 1), (Zr = t), (le = null)
        break
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t
        if (((t = ve), (l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
          var u = a,
            d = l,
            p = d.tag
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate
            f
              ? ((d.updateQueue = f.updateQueue), (d.memoizedState = f.memoizedState), (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null))
          }
          var y = ku(s)
          if (y !== null) {
            ;(y.flags &= -257), Cu(y, s, l, i, t), y.mode & 1 && Su(i, u, t), (t = y), (a = u)
            var g = t.updateQueue
            if (g === null) {
              var x = new Set()
              x.add(a), (t.updateQueue = x)
            } else g.add(a)
            break e
          } else {
            if (!(t & 1)) {
              Su(i, u, t), pa()
              break e
            }
            a = Error(N(426))
          }
        } else if (ee && l.mode & 1) {
          var k = ku(s)
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), Cu(k, s, l, i, t), Gl(Xn(a, l))
            break e
          }
        }
        ;(i = a = Xn(a, l)), ce !== 4 && (ce = 2), Mr === null ? (Mr = [i]) : Mr.push(i), (i = s)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var h = Jd(i, a, t)
              mu(i, h)
              break e
            case 1:
              l = a
              var m = i.type,
                v = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (v !== null && typeof v.componentDidCatch == 'function' && (Ht === null || !Ht.has(v))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var w = qd(i, l, t)
                mu(i, w)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      xf(n)
    } catch (E) {
      ;(t = E), le === n && n !== null && (le = n = n.return)
      continue
    }
    break
  } while (!0)
}
function gf() {
  var e = ui.current
  return (ui.current = ai), e === null ? ai : e
}
function pa() {
  ;(ce === 0 || ce === 3 || ce === 2) && (ce = 4), he === null || (!(mn & 268435455) && !(Ni & 268435455)) || bt(he, ve)
}
function fi(e, t) {
  var n = B
  B |= 2
  var r = gf()
  ;(he !== e || ve !== t) && ((xt = null), cn(e, t))
  do
    try {
      l0()
      break
    } catch (o) {
      vf(e, o)
    }
  while (!0)
  if ((Yl(), (B = n), (ui.current = r), le !== null)) throw Error(N(261))
  return (he = null), (ve = 0), ce
}
function l0() {
  for (; le !== null; ) yf(le)
}
function a0() {
  for (; le !== null && !zh(); ) yf(le)
}
function yf(e) {
  var t = Sf(e.alternate, e, Oe)
  ;(e.memoizedProps = e.pendingProps), t === null ? xf(e) : (le = t), (aa.current = null)
}
function xf(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = t0(n, t)), n !== null)) {
        ;(n.flags &= 32767), (le = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ce = 6), (le = null)
        return
      }
    } else if (((n = e0(n, t, Oe)), n !== null)) {
      le = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      le = t
      return
    }
    le = t = e
  } while (t !== null)
  ce === 0 && (ce = 5)
}
function nn(e, t, n) {
  var r = W,
    o = Ye.transition
  try {
    ;(Ye.transition = null), (W = 1), u0(e, t, n, r)
  } finally {
    ;(Ye.transition = o), (W = r)
  }
  return null
}
function u0(e, t, n, r) {
  do Bn()
  while (Dt !== null)
  if (B & 6) throw Error(N(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(N(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (Vh(e, i),
    e === he && ((le = he = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Eo ||
      ((Eo = !0),
      kf(Go, function () {
        return Bn(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = Ye.transition), (Ye.transition = null)
    var s = W
    W = 1
    var l = B
    ;(B |= 4),
      (aa.current = null),
      r0(e, n),
      pf(n, e),
      Nm(Bs),
      (Yo = !!Us),
      (Bs = Us = null),
      (e.current = n),
      o0(n),
      $h(),
      (B = l),
      (W = s),
      (Ye.transition = i)
  } else e.current = n
  if (
    (Eo && ((Eo = !1), (Dt = e), (di = o)),
    (i = e.pendingLanes),
    i === 0 && (Ht = null),
    bh(n.stateNode),
    Ie(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (ci) throw ((ci = !1), (e = al), (al = null), e)
  return (
    di & 1 && e.tag !== 0 && Bn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ul ? Lr++ : ((Lr = 0), (ul = e))) : (Lr = 0),
    en(),
    null
  )
}
function Bn() {
  if (Dt !== null) {
    var e = Jc(di),
      t = Ye.transition,
      n = W
    try {
      if (((Ye.transition = null), (W = 16 > e ? 16 : e), Dt === null)) var r = !1
      else {
        if (((e = Dt), (Dt = null), (di = 0), B & 6)) throw Error(N(331))
        var o = B
        for (B |= 4, L = e.current; L !== null; ) {
          var i = L,
            s = i.child
          if (L.flags & 16) {
            var l = i.deletions
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a]
                for (L = u; L !== null; ) {
                  var d = L
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, d, i)
                  }
                  var p = d.child
                  if (p !== null) (p.return = d), (L = p)
                  else
                    for (; L !== null; ) {
                      d = L
                      var f = d.sibling,
                        y = d.return
                      if ((cf(d), d === u)) {
                        L = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = y), (L = f)
                        break
                      }
                      L = y
                    }
                }
              }
              var g = i.alternate
              if (g !== null) {
                var x = g.child
                if (x !== null) {
                  g.child = null
                  do {
                    var k = x.sibling
                    ;(x.sibling = null), (x = k)
                  } while (x !== null)
                }
              }
              L = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (L = s)
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nr(9, i, i.return)
                }
              var h = i.sibling
              if (h !== null) {
                ;(h.return = i.return), (L = h)
                break e
              }
              L = i.return
            }
        }
        var m = e.current
        for (L = m; L !== null; ) {
          s = L
          var v = s.child
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (L = v)
          else
            e: for (s = m; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pi(9, l)
                  }
                } catch (E) {
                  ie(l, l.return, E)
                }
              if (l === s) {
                L = null
                break e
              }
              var w = l.sibling
              if (w !== null) {
                ;(w.return = l.return), (L = w)
                break e
              }
              L = l.return
            }
        }
        if (((B = o), en(), pt && typeof pt.onPostCommitFiberRoot == 'function'))
          try {
            pt.onPostCommitFiberRoot(wi, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(W = n), (Ye.transition = t)
    }
  }
  return !1
}
function Fu(e, t, n) {
  ;(t = Xn(n, t)), (t = Jd(e, t, 1)), (e = Wt(e, t, 1)), (t = Re()), e !== null && (eo(e, 1, t), Ie(e, t))
}
function ie(e, t, n) {
  if (e.tag === 3) Fu(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fu(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Ht === null || !Ht.has(r)))
        ) {
          ;(e = Xn(n, e)), (e = qd(t, e, 1)), (t = Wt(t, e, 1)), (e = Re()), t !== null && (eo(t, 1, e), Ie(t, e))
          break
        }
      }
      t = t.return
    }
}
function c0(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ve & n) === n &&
      (ce === 4 || (ce === 3 && (ve & 130023424) === ve && 500 > se() - ca) ? cn(e, 0) : (ua |= n)),
    Ie(e, t)
}
function wf(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ho), (ho <<= 1), !(ho & 130023424) && (ho = 4194304)) : (t = 1))
  var n = Re()
  ;(e = jt(e, t)), e !== null && (eo(e, t, n), Ie(e, n))
}
function d0(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), wf(e, n)
}
function f0(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(N(314))
  }
  r !== null && r.delete(t), wf(e, n)
}
var Sf
Sf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Te = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), qm(e, t, n)
      Te = !!(e.flags & 131072)
    }
  else (Te = !1), ee && t.flags & 1048576 && Ed(t, ni, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Oo(e, t), (e = t.pendingProps)
      var o = Kn(t, Ee.current)
      Un(t, n), (o = ra(null, t, r, e, o, n))
      var i = oa()
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((i = !0), ei(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Jl(t),
            (o.updater = Ri),
            (t.stateNode = o),
            (o._reactInternals = t),
            Zs(t, r, e, n),
            (t = el(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && Hl(t), _e(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Oo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = h0(r)),
          (e = tt(r, e)),
          o)
        ) {
          case 0:
            t = qs(null, t, r, e, n)
            break e
          case 1:
            t = ju(null, t, r, e, n)
            break e
          case 11:
            t = Eu(null, t, r, e, n)
            break e
          case 14:
            t = _u(null, t, r, tt(r.type, e), n)
            break e
        }
        throw Error(N(306, r, ''))
      }
      return t
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : tt(r, o)), qs(e, t, r, o, n)
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : tt(r, o)), ju(e, t, r, o, n)
    case 3:
      e: {
        if ((rf(t), e === null)) throw Error(N(387))
        ;(r = t.pendingProps), (i = t.memoizedState), (o = i.element), Md(e, t), ii(t, r, null, n)
        var s = t.memoizedState
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = Xn(Error(N(423)), t)), (t = Ru(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Xn(Error(N(424)), t)), (t = Ru(e, t, r, n, o))
            break e
          } else
            for (
              De = Vt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                ee = !0,
                rt = null,
                n = Pd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Gn(), r === o)) {
            t = Rt(e, t, n)
            break e
          }
          _e(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Ld(t),
        e === null && Qs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Vs(r, o) ? (s = null) : i !== null && Vs(r, i) && (t.flags |= 32),
        nf(e, t),
        _e(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && Qs(t), null
    case 13:
      return of(e, t, n)
    case 4:
      return (
        ql(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qn(t, null, r, n)) : _e(e, t, r, n),
        t.child
      )
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : tt(r, o)), Eu(e, t, r, o, n)
    case 7:
      return _e(e, t, t.pendingProps, n), t.child
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Q(ri, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (st(i.value, s)) {
            if (i.children === o.children && !ze.current) {
              t = Rt(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies
              if (l !== null) {
                s = i.child
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ;(a = Ct(-1, n & -n)), (a.tag = 2)
                      var u = i.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var d = u.pending
                        d === null ? (a.next = a) : ((a.next = d.next), (d.next = a)), (u.pending = a)
                      }
                    }
                    ;(i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), Ys(i.return, n, t), (l.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(N(341))
                ;(s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), Ys(s, n, t), (s = i.sibling)
              } else s = i.child
              if (s !== null) s.return = i
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((i = s.sibling), i !== null)) {
                    ;(i.return = s.return), (s = i)
                    break
                  }
                  s = s.return
                }
              i = s
            }
        _e(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Un(t, n),
        (o = Xe(o)),
        (r = r(o)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      )
    case 14:
      return (r = t.type), (o = tt(r, t.pendingProps)), (o = tt(r.type, o)), _u(e, t, r, o, n)
    case 15:
      return ef(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tt(r, o)),
        Oo(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), ei(t)) : (e = !1),
        Un(t, n),
        Zd(t, r, o),
        Zs(t, r, o, n),
        el(null, t, r, !0, e, n)
      )
    case 19:
      return sf(e, t, n)
    case 22:
      return tf(e, t, n)
  }
  throw Error(N(156, t.tag))
}
function kf(e, t) {
  return Qc(e, t)
}
function p0(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Qe(e, t, n, r) {
  return new p0(e, t, n, r)
}
function ha(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function h0(e) {
  if (typeof e == 'function') return ha(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === zl)) return 11
    if (e === $l) return 14
  }
  return 2
}
function Gt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Uo(e, t, n, r, o, i) {
  var s = 2
  if (((r = e), typeof e == 'function')) ha(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case En:
        return dn(n.children, o, i, t)
      case Tl:
        ;(s = 8), (o |= 8)
        break
      case Ss:
        return (e = Qe(12, n, t, o | 2)), (e.elementType = Ss), (e.lanes = i), e
      case ks:
        return (e = Qe(13, n, t, o)), (e.elementType = ks), (e.lanes = i), e
      case Cs:
        return (e = Qe(19, n, t, o)), (e.elementType = Cs), (e.lanes = i), e
      case Lc:
        return Mi(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Nc:
              s = 10
              break e
            case Mc:
              s = 9
              break e
            case zl:
              s = 11
              break e
            case $l:
              s = 14
              break e
            case $t:
              ;(s = 16), (r = null)
              break e
          }
        throw Error(N(130, e == null ? e : typeof e, ''))
    }
  return (t = Qe(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
}
function dn(e, t, n, r) {
  return (e = Qe(7, e, r, t)), (e.lanes = n), e
}
function Mi(e, t, n, r) {
  return (e = Qe(22, e, r, t)), (e.elementType = Lc), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
}
function fs(e, t, n) {
  return (e = Qe(6, e, null, t)), (e.lanes = n), e
}
function ps(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  )
}
function m0(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gi(0)),
    (this.expirationTimes = Gi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function ma(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new m0(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Qe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Jl(i),
    e
  )
}
function v0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return { $$typeof: Cn, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n }
}
function Cf(e) {
  if (!e) return Xt
  e = e._reactInternals
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(N(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(N(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if ($e(n)) return kd(e, n, t)
  }
  return t
}
function Ef(e, t, n, r, o, i, s, l, a) {
  return (
    (e = ma(n, r, !0, e, o, i, s, l, a)),
    (e.context = Cf(null)),
    (n = e.current),
    (r = Re()),
    (o = Kt(n)),
    (i = Ct(r, o)),
    (i.callback = t ?? null),
    Wt(n, i, o),
    (e.current.lanes = o),
    eo(e, o, r),
    Ie(e, r),
    e
  )
}
function Li(e, t, n, r) {
  var o = t.current,
    i = Re(),
    s = Kt(o)
  return (
    (n = Cf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wt(o, t, s)),
    e !== null && (it(e, o, s, i), Io(e, o, s)),
    s
  )
}
function pi(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function bu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function va(e, t) {
  bu(e, t), (e = e.alternate) && bu(e, t)
}
function g0() {
  return null
}
var _f =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function ga(e) {
  this._internalRoot = e
}
Ti.prototype.render = ga.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(N(409))
  Li(e, t, null, null)
}
Ti.prototype.unmount = ga.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    vn(function () {
      Li(null, e, null, null)
    }),
      (t[_t] = null)
  }
}
function Ti(e) {
  this._internalRoot = e
}
Ti.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = td()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++);
    Ft.splice(n, 0, e), n === 0 && rd(e)
  }
}
function ya(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function zi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Ou() {}
function y0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var u = pi(s)
        i.call(u)
      }
    }
    var s = Ef(t, r, e, 0, null, !1, !1, '', Ou)
    return (e._reactRootContainer = s), (e[_t] = s.current), Vr(e.nodeType === 8 ? e.parentNode : e), vn(), s
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = pi(a)
      l.call(u)
    }
  }
  var a = ma(e, 0, !1, null, null, !1, !1, '', Ou)
  return (
    (e._reactRootContainer = a),
    (e[_t] = a.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    vn(function () {
      Li(t, a, n, r)
    }),
    a
  )
}
function $i(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var s = i
    if (typeof o == 'function') {
      var l = o
      o = function () {
        var a = pi(s)
        l.call(a)
      }
    }
    Li(t, s, e, o)
  } else s = y0(n, t, e, o, r)
  return pi(s)
}
qc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes)
        n !== 0 && (bl(t, n | 1), Ie(t, se()), !(B & 6) && ((Zn = se() + 500), en()))
      }
      break
    case 13:
      vn(function () {
        var r = jt(e, 1)
        if (r !== null) {
          var o = Re()
          it(r, e, 1, o)
        }
      }),
        va(e, 1)
  }
}
Ol = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728)
    if (t !== null) {
      var n = Re()
      it(t, e, 134217728, n)
    }
    va(e, 134217728)
  }
}
ed = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = jt(e, t)
    if (n !== null) {
      var r = Re()
      it(n, e, t, r)
    }
    va(e, t)
  }
}
td = function () {
  return W
}
nd = function (e, t) {
  var n = W
  try {
    return (W = e), t()
  } finally {
    W = n
  }
}
zs = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((js(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = Ei(r)
            if (!o) throw Error(N(90))
            zc(r), js(r, o)
          }
        }
      }
      break
    case 'textarea':
      Ic(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && bn(e, !!n.multiple, t, !1)
  }
}
Bc = da
Vc = vn
var x0 = { usingClientEntryPoint: !1, Events: [no, Pn, Ei, Ac, Uc, da] },
  vr = { findFiberByHostInstance: sn, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
  w0 = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Kc(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || g0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!_o.isDisabled && _o.supportsFiber)
    try {
      ;(wi = _o.inject(w0)), (pt = _o)
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x0
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!ya(t)) throw Error(N(200))
  return v0(e, t, null, n)
}
Be.createRoot = function (e, t) {
  if (!ya(e)) throw Error(N(299))
  var n = !1,
    r = '',
    o = _f
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ma(e, 1, !1, null, null, n, !1, r, o)),
    (e[_t] = t.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    new ga(t)
  )
}
Be.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(N(188)) : ((e = Object.keys(e).join(',')), Error(N(268, e)))
  return (e = Kc(t)), (e = e === null ? null : e.stateNode), e
}
Be.flushSync = function (e) {
  return vn(e)
}
Be.hydrate = function (e, t, n) {
  if (!zi(t)) throw Error(N(200))
  return $i(null, e, t, !0, n)
}
Be.hydrateRoot = function (e, t, n) {
  if (!ya(e)) throw Error(N(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = _f
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Ef(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[_t] = t.current),
    Vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Ti(t)
}
Be.render = function (e, t, n) {
  if (!zi(t)) throw Error(N(200))
  return $i(null, e, t, !1, n)
}
Be.unmountComponentAtNode = function (e) {
  if (!zi(e)) throw Error(N(40))
  return e._reactRootContainer
    ? (vn(function () {
        $i(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[_t] = null)
        })
      }),
      !0)
    : !1
}
Be.unstable_batchedUpdates = da
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zi(n)) throw Error(N(200))
  if (e == null || e._reactInternals === void 0) throw Error(N(38))
  return $i(e, t, n, !1, r)
}
Be.version = '18.3.1-next-f1338f8080-20240426'
function jf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf)
    } catch (e) {
      console.error(e)
    }
}
jf(), (_c.exports = Be)
var oo = _c.exports
const S0 = pc(oo)
var Rf,
  Du = oo
;(Rf = Du.createRoot), Du.hydrateRoot
const Au = 'pushstate',
  Uu = 'popstate',
  Pf = 'beforeunload',
  Nf = (e) => (e.preventDefault(), (e.returnValue = '')),
  k0 = () => {
    removeEventListener(Pf, Nf, { capture: !0 })
  }
function Mf(e) {
  let t = e.getLocation()
  const n = new Set()
  let r = []
  const o = () => {
      ;(t = e.getLocation()), n.forEach((s) => s())
    },
    i = async (s, l) => {
      var a
      if (!((l == null ? void 0 : l.ignoreBlocker) ?? !1) && typeof document < 'u' && r.length) {
        for (const d of r)
          if (!(await d())) {
            ;(a = e.onBlocked) == null || a.call(e, o)
            return
          }
      }
      s()
    }
  return {
    get location() {
      return t
    },
    subscribers: n,
    subscribe: (s) => (
      n.add(s),
      () => {
        n.delete(s)
      }
    ),
    push: (s, l, a) => {
      ;(l = Tr(l)),
        i(() => {
          e.pushState(s, l), o()
        }, a)
    },
    replace: (s, l, a) => {
      ;(l = Tr(l)),
        i(() => {
          e.replaceState(s, l), o()
        }, a)
    },
    go: (s, l) => {
      i(() => {
        e.go(s), o()
      }, l)
    },
    back: (s) => {
      i(() => {
        e.back(), o()
      }, s)
    },
    forward: (s) => {
      i(() => {
        e.forward(), o()
      }, s)
    },
    createHref: (s) => e.createHref(s),
    block: (s) => (
      r.push(s),
      r.length === 1 && addEventListener(Pf, Nf, { capture: !0 }),
      () => {
        ;(r = r.filter((l) => l !== s)), r.length || k0()
      }
    ),
    flush: () => {
      var s
      return (s = e.flush) == null ? void 0 : s.call(e)
    },
    destroy: () => {
      var s
      return (s = e.destroy) == null ? void 0 : s.call(e)
    },
    notify: o,
  }
}
function Tr(e) {
  return e || (e = {}), { ...e, key: Lf() }
}
function C0(e) {
  const t = typeof document < 'u' ? window : void 0,
    n = t.history.pushState,
    r = t.history.replaceState,
    o = (x) => x,
    i = () => hi(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state)
  let s = i(),
    l
  const a = () => s
  let u, d
  const p = () => {
      u &&
        ((g._ignoreSubscribers = !0),
        (u.isPush ? t.history.pushState : t.history.replaceState)(u.state, '', u.href),
        (g._ignoreSubscribers = !1),
        (u = void 0),
        (d = void 0),
        (l = void 0))
    },
    f = (x, k, h) => {
      const m = o(k)
      d || (l = s),
        (s = hi(k, h)),
        (u = { href: m, state: h, isPush: (u == null ? void 0 : u.isPush) || x === 'push' }),
        d || (d = Promise.resolve().then(() => p()))
    },
    y = () => {
      ;(s = i()), g.notify()
    },
    g = Mf({
      getLocation: a,
      pushState: (x, k) => f('push', x, k),
      replaceState: (x, k) => f('replace', x, k),
      back: () => t.history.back(),
      forward: () => t.history.forward(),
      go: (x) => t.history.go(x),
      createHref: (x) => o(x),
      flush: p,
      destroy: () => {
        ;(t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Au, y),
          t.removeEventListener(Uu, y)
      },
      onBlocked: (x) => {
        l && s !== l && ((s = l), x())
      },
    })
  return (
    t.addEventListener(Au, y),
    t.addEventListener(Uu, y),
    (t.history.pushState = function (...x) {
      const k = n.apply(t.history, x)
      return g._ignoreSubscribers || y(), k
    }),
    (t.history.replaceState = function (...x) {
      const k = r.apply(t.history, x)
      return g._ignoreSubscribers || y(), k
    }),
    g
  )
}
function E0(e = { initialEntries: ['/'] }) {
  const t = e.initialEntries
  let n = e.initialIndex ?? t.length - 1,
    r = { key: Lf() }
  return Mf({
    getLocation: () => hi(t[n], r),
    pushState: (i, s) => {
      ;(r = s), t.splice, n < t.length - 1 && t.splice(n + 1), t.push(i), (n = Math.max(t.length - 1, 0))
    },
    replaceState: (i, s) => {
      ;(r = s), (t[n] = i)
    },
    back: () => {
      ;(r = Tr(r)), (n = Math.max(n - 1, 0))
    },
    forward: () => {
      ;(r = Tr(r)), (n = Math.min(n + 1, t.length - 1))
    },
    go: (i) => {
      ;(r = Tr(r)), (n = Math.min(Math.max(n + i, 0), t.length - 1))
    },
    createHref: (i) => i,
  })
}
function hi(e, t) {
  const n = e.indexOf('#'),
    r = e.indexOf('?')
  return {
    href: e,
    pathname: e.substring(0, n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length),
    hash: n > -1 ? e.substring(n) : '',
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : '',
    state: t || {},
  }
}
function Lf() {
  return (Math.random() + 1).toString(36).substring(7)
}
var _0 = 'Invariant failed'
function je(e, t) {
  if (!e) throw new Error(_0)
}
const hs = S.createContext(null)
function Tf() {
  return typeof document > 'u'
    ? hs
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = hs), hs)
}
function Mt(e) {
  const t = S.useContext(Tf())
  return e == null || e.warn, t
}
var zf = { exports: {} },
  $f = {},
  If = { exports: {} },
  Ff = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jn = S
function j0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var R0 = typeof Object.is == 'function' ? Object.is : j0,
  P0 = Jn.useState,
  N0 = Jn.useEffect,
  M0 = Jn.useLayoutEffect,
  L0 = Jn.useDebugValue
function T0(e, t) {
  var n = t(),
    r = P0({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1]
  return (
    M0(
      function () {
        ;(o.value = n), (o.getSnapshot = t), ms(o) && i({ inst: o })
      },
      [e, n, t],
    ),
    N0(
      function () {
        return (
          ms(o) && i({ inst: o }),
          e(function () {
            ms(o) && i({ inst: o })
          })
        )
      },
      [e],
    ),
    L0(n),
    n
  )
}
function ms(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !R0(e, n)
  } catch {
    return !0
  }
}
function z0(e, t) {
  return t()
}
var $0 = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? z0 : T0
Ff.useSyncExternalStore = Jn.useSyncExternalStore !== void 0 ? Jn.useSyncExternalStore : $0
If.exports = Ff
var I0 = If.exports
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ii = S,
  F0 = I0
function b0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var O0 = typeof Object.is == 'function' ? Object.is : b0,
  D0 = F0.useSyncExternalStore,
  A0 = Ii.useRef,
  U0 = Ii.useEffect,
  B0 = Ii.useMemo,
  V0 = Ii.useDebugValue
$f.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = A0(null)
  if (i.current === null) {
    var s = { hasValue: !1, value: null }
    i.current = s
  } else s = i.current
  i = B0(
    function () {
      function a(y) {
        if (!u) {
          if (((u = !0), (d = y), (y = r(y)), o !== void 0 && s.hasValue)) {
            var g = s.value
            if (o(g, y)) return (p = g)
          }
          return (p = y)
        }
        if (((g = p), O0(d, y))) return g
        var x = r(y)
        return o !== void 0 && o(g, x) ? g : ((d = y), (p = x))
      }
      var u = !1,
        d,
        p,
        f = n === void 0 ? null : n
      return [
        function () {
          return a(t())
        },
        f === null
          ? void 0
          : function () {
              return a(f())
            },
      ]
    },
    [t, n, r, o],
  )
  var l = D0(e, i[0], i[1])
  return (
    U0(
      function () {
        ;(s.hasValue = !0), (s.value = l)
      },
      [l],
    ),
    V0(l),
    l
  )
}
zf.exports = $f
var W0 = zf.exports
class H0 {
  constructor(t, n) {
    ;(this.listeners = new Set()),
      (this._batching = !1),
      (this._flushing = 0),
      (this.subscribe = (r) => {
        var o, i
        this.listeners.add(r)
        const s = (i = (o = this.options) == null ? void 0 : o.onSubscribe) == null ? void 0 : i.call(o, r, this)
        return () => {
          this.listeners.delete(r), s == null || s()
        }
      }),
      (this.setState = (r) => {
        var o, i, s
        const l = this.state
        ;(this.state = (o = this.options) != null && o.updateFn ? this.options.updateFn(l)(r) : r(l)),
          (s = (i = this.options) == null ? void 0 : i.onUpdate) == null || s.call(i),
          this._flush()
      }),
      (this._flush = () => {
        if (this._batching) return
        const r = ++this._flushing
        this.listeners.forEach((o) => {
          this._flushing === r && o()
        })
      }),
      (this.batch = (r) => {
        if (this._batching) return r()
        ;(this._batching = !0), r(), (this._batching = !1), this._flush()
      }),
      (this.state = t),
      (this.options = n)
  }
}
function K0(e, t = (n) => n) {
  return W0.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    G0,
  )
}
function G0(e, t) {
  if (Object.is(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  const n = Object.keys(e)
  if (n.length !== Object.keys(t).length) return !1
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1
  return !0
}
const Se = '__root__'
function Q0(e, t) {
  let n,
    r,
    o,
    i = ''
  for (n in e)
    if ((o = e[n]) !== void 0)
      if (Array.isArray(o))
        for (r = 0; r < o.length; r++) i && (i += '&'), (i += encodeURIComponent(n) + '=' + encodeURIComponent(o[r]))
      else i && (i += '&'), (i += encodeURIComponent(n) + '=' + encodeURIComponent(o))
  return '' + i
}
function Bu(e) {
  if (!e) return ''
  const t = decodeURIComponent(e)
  return t === 'false' ? !1 : t === 'true' ? !0 : +t * 0 === 0 && +t + '' === t ? +t : t
}
function Y0(e, t) {
  let n, r
  const o = {},
    i = e.split('&')
  for (; (n = i.shift()); ) {
    const s = n.indexOf('=')
    if (s !== -1) {
      ;(r = n.slice(0, s)), (r = decodeURIComponent(r))
      const l = n.slice(s + 1)
      o[r] !== void 0 ? (o[r] = [].concat(o[r], Bu(l))) : (o[r] = Bu(l))
    } else (r = n), (r = decodeURIComponent(r)), (o[r] = '')
  }
  return o
}
const X0 = J0(JSON.parse),
  Z0 = q0(JSON.stringify, JSON.parse)
function J0(e) {
  return (t) => {
    t.substring(0, 1) === '?' && (t = t.substring(1))
    const n = Y0(t)
    for (const r in n) {
      const o = n[r]
      if (typeof o == 'string')
        try {
          n[r] = e(o)
        } catch {}
    }
    return n
  }
}
function q0(e, t) {
  function n(r) {
    if (typeof r == 'object' && r !== null)
      try {
        return e(r)
      } catch {}
    else if (typeof r == 'string' && typeof t == 'function')
      try {
        return t(r), e(r)
      } catch {}
    return r
  }
  return (r) => {
    ;(r = { ...r }),
      Object.keys(r).forEach((i) => {
        const s = r[i]
        typeof s > 'u' || s === void 0 ? delete r[i] : (r[i] = n(s))
      })
    const o = Q0(r).toString()
    return o ? `?${o}` : ''
  }
}
function zr(e) {
  return e[e.length - 1]
}
function ev(e) {
  return typeof e == 'function'
}
function In(e, t) {
  return ev(e) ? e(t) : e
}
function $r(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {})
}
function Sn(e, t) {
  if (e === t) return e
  const n = t,
    r = Wu(e) && Wu(n)
  if (r || (qn(e) && qn(n))) {
    const o = r ? e : Object.keys(e),
      i = o.length,
      s = r ? n : Object.keys(n),
      l = s.length,
      a = r ? [] : {}
    let u = 0
    for (let d = 0; d < l; d++) {
      const p = r ? d : s[d]
      ;((!r && o.includes(p)) || r) && e[p] === void 0 && n[p] === void 0
        ? ((a[p] = void 0), u++)
        : ((a[p] = Sn(e[p], n[p])), a[p] === e[p] && e[p] !== void 0 && u++)
    }
    return i === l && u === i ? e : a
  }
  return n
}
function qn(e) {
  if (!Vu(e)) return !1
  const t = e.constructor
  if (typeof t > 'u') return !0
  const n = t.prototype
  return !(!Vu(n) || !n.hasOwnProperty('isPrototypeOf'))
}
function Vu(e) {
  return Object.prototype.toString.call(e) === '[object Object]'
}
function Wu(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
function Vn(e, t, n = !1) {
  if (e === t) return !0
  if (typeof e != typeof t) return !1
  if (qn(e) && qn(t)) {
    const r = Object.keys(e).filter((i) => e[i] !== void 0),
      o = Object.keys(t).filter((i) => t[i] !== void 0)
    return !n && r.length !== o.length ? !1 : !o.some((i) => !(i in e) || !Vn(e[i], t[i], n))
  }
  return Array.isArray(e) && Array.isArray(t) ? (e.length !== t.length ? !1 : !e.some((r, o) => !Vn(r, t[o], n))) : !1
}
const vs = typeof window < 'u' ? S.useLayoutEffect : S.useEffect
function kn(e) {
  let t, n
  const r = new Promise((o, i) => {
    ;(t = o), (n = i)
  })
  return (
    (r.status = 'pending'),
    (r.resolve = (o) => {
      ;(r.status = 'resolved'), (r.value = o), t(o), e == null || e(o)
    }),
    (r.reject = (o) => {
      ;(r.status = 'rejected'), n(o)
    }),
    r
  )
}
function Hu(e) {
  const t = S.useRef({ value: e, prev: null }),
    n = t.current.value
  return e !== n && (t.current = { value: e, prev: n }), t.current.prev
}
function tv(e, t, n = {}, r = {}) {
  const o = S.useRef(typeof IntersectionObserver == 'function'),
    i = S.useRef(null)
  return (
    S.useEffect(() => {
      if (!(!e.current || !o.current || r.disabled))
        return (
          (i.current = new IntersectionObserver(([s]) => {
            t(s)
          }, n)),
          i.current.observe(e.current),
          () => {
            var s
            ;(s = i.current) == null || s.disconnect()
          }
        )
    }, [t, n, r.disabled, e]),
    i.current
  )
}
function nv(e) {
  const t = S.useRef(null)
  return (
    S.useEffect(() => {
      e && (typeof e == 'function' ? e(t.current) : (e.current = t.current))
    }),
    t
  )
}
function Qt(e) {
  return Fi(e.filter((t) => t !== void 0).join('/'))
}
function Fi(e) {
  return e.replace(/\/{2,}/g, '/')
}
function xa(e) {
  return e === '/' ? e : e.replace(/^\/{1,}/, '')
}
function un(e) {
  return e === '/' ? e : e.replace(/\/{1,}$/, '')
}
function fl(e) {
  return un(xa(e))
}
function mi(e, t) {
  return e.endsWith('/') && e !== '/' && e !== `${t}/` ? e.slice(0, -1) : e
}
function rv(e, t, n) {
  return mi(e, n) === mi(t, n)
}
function ov({ basepath: e, base: t, to: n, trailingSlash: r = 'never' }) {
  var o, i
  ;(t = vi(e, t)), (n = vi(e, n))
  let s = er(t)
  const l = er(n)
  s.length > 1 && ((o = zr(s)) == null ? void 0 : o.value) === '/' && s.pop(),
    l.forEach((u, d) => {
      u.value === '/'
        ? d
          ? d === l.length - 1 && s.push(u)
          : (s = [u])
        : u.value === '..'
          ? s.pop()
          : u.value === '.' || s.push(u)
    }),
    s.length > 1 &&
      (((i = zr(s)) == null ? void 0 : i.value) === '/'
        ? r === 'never' && s.pop()
        : r === 'always' && s.push({ type: 'pathname', value: '/' }))
  const a = Qt([e, ...s.map((u) => u.value)])
  return Fi(a)
}
function er(e) {
  if (!e) return []
  e = Fi(e)
  const t = []
  if ((e.slice(0, 1) === '/' && ((e = e.substring(1)), t.push({ type: 'pathname', value: '/' })), !e)) return t
  const n = e.split('/').filter(Boolean)
  return (
    t.push(
      ...n.map((r) =>
        r === '$' || r === '*'
          ? { type: 'wildcard', value: r }
          : r.charAt(0) === '$'
            ? { type: 'param', value: r }
            : { type: 'pathname', value: decodeURI(r) },
      ),
    ),
    e.slice(-1) === '/' && ((e = e.substring(1)), t.push({ type: 'pathname', value: '/' })),
    t
  )
}
function gs({ path: e, params: t, leaveWildcards: n, leaveParams: r }) {
  const o = er(e),
    i = {}
  for (const [s, l] of Object.entries(t)) {
    const a = typeof l == 'string'
    ;['*', '_splat'].includes(s) ? (i[s] = a ? encodeURI(l) : l) : (i[s] = a ? encodeURIComponent(l) : l)
  }
  return Qt(
    o.map((s) => {
      if (s.type === 'wildcard') {
        const l = i._splat
        return n ? `${s.value}${l ?? ''}` : l
      }
      if (s.type === 'param') {
        if (r) {
          const l = i[s.value]
          return `${s.value}${l ?? ''}`
        }
        return i[s.value.substring(1)] ?? 'undefined'
      }
      return s.value
    }),
  )
}
function jo(e, t, n) {
  const r = iv(e, t, n)
  if (!(n.to && !r)) return r ?? {}
}
function vi(e, t) {
  switch (!0) {
    case e === '/':
      return t
    case t === e:
      return ''
    case t.length < e.length:
      return t
    case t[e.length] !== '/':
      return t
    case t.startsWith(e):
      return t.slice(e.length)
    default:
      return t
  }
}
function iv(e, t, n) {
  t = vi(e, t)
  const r = vi(e, `${n.to ?? '$'}`),
    o = er(t),
    i = er(r)
  t.startsWith('/') || o.unshift({ type: 'pathname', value: '/' }),
    r.startsWith('/') || i.unshift({ type: 'pathname', value: '/' })
  const s = {}
  return (() => {
    for (let a = 0; a < Math.max(o.length, i.length); a++) {
      const u = o[a],
        d = i[a],
        p = a >= o.length - 1,
        f = a >= i.length - 1
      if (d) {
        if (d.type === 'wildcard') {
          const y = decodeURI(Qt(o.slice(a).map((g) => g.value)))
          return (s['*'] = y), (s._splat = y), !0
        }
        if (d.type === 'pathname') {
          if (d.value === '/' && !(u != null && u.value)) return !0
          if (u) {
            if (n.caseSensitive) {
              if (d.value !== u.value) return !1
            } else if (d.value.toLowerCase() !== u.value.toLowerCase()) return !1
          }
        }
        if (!u) return !1
        if (d.type === 'param') {
          if (u.value === '/') return !1
          u.value.charAt(0) !== '$' && (s[d.value.substring(1)] = decodeURIComponent(u.value))
        }
      }
      if (!p && f)
        return (s['**'] = Qt(o.slice(a + 1).map((y) => y.value))), !!n.fuzzy && (d == null ? void 0 : d.value) !== '/'
    }
    return !0
  })()
    ? s
    : void 0
}
function rn(e) {
  return !!(e != null && e.isRedirect)
}
function Ku(e) {
  return !!(e != null && e.isRedirect) && e.href
}
function wa(e) {
  const t = e.errorComponent ?? bi
  return c.jsx(sv, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) => (n ? S.createElement(t, { error: n, reset: r }) : e.children),
  })
}
class sv extends S.Component {
  constructor() {
    super(...arguments), (this.state = { error: null })
  }
  static getDerivedStateFromProps(t) {
    return { resetKey: t.getResetKey() }
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  reset() {
    this.setState({ error: null })
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset()
  }
  componentDidCatch(t, n) {
    this.props.onCatch && this.props.onCatch(t, n)
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset()
      },
    })
  }
}
function bi({ error: e }) {
  const [t, n] = S.useState(!1)
  return c.jsxs('div', {
    style: { padding: '.5rem', maxWidth: '100%' },
    children: [
      c.jsxs('div', {
        style: { display: 'flex', alignItems: 'center', gap: '.5rem' },
        children: [
          c.jsx('strong', { style: { fontSize: '1rem' }, children: 'Something went wrong!' }),
          c.jsx('button', {
            style: {
              appearance: 'none',
              fontSize: '.6em',
              border: '1px solid currentColor',
              padding: '.1rem .2rem',
              fontWeight: 'bold',
              borderRadius: '.25rem',
            },
            onClick: () => n((r) => !r),
            children: t ? 'Hide Error' : 'Show Error',
          }),
        ],
      }),
      c.jsx('div', { style: { height: '.25rem' } }),
      t
        ? c.jsx('div', {
            children: c.jsx('pre', {
              style: {
                fontSize: '.7em',
                border: '1px solid red',
                borderRadius: '.25rem',
                padding: '.3rem',
                color: 'red',
                overflow: 'auto',
              },
              children: e.message ? c.jsx('code', { children: e.message }) : null,
            }),
          })
        : null,
    ],
  })
}
function Ce(e) {
  const t = Mt({ warn: (e == null ? void 0 : e.router) === void 0 })
  return K0(((e == null ? void 0 : e.router) || t).__store, e == null ? void 0 : e.select)
}
function dt(e) {
  return !!(e != null && e.isNotFound)
}
function lv(e) {
  const t = Ce({ select: (n) => `not-found-${n.location.pathname}-${n.status}` })
  return c.jsx(wa, {
    getResetKey: () => t,
    onCatch: (n, r) => {
      var o
      if (dt(n)) (o = e.onCatch) == null || o.call(e, n, r)
      else throw n
    },
    errorComponent: ({ error: n }) => {
      var r
      return (r = e.fallback) == null ? void 0 : r.call(e, n)
    },
    children: e.children,
  })
}
function av() {
  return c.jsx('p', { children: 'Not Found' })
}
const uv = {
    stringify: (e) =>
      JSON.stringify(e, function (n, r) {
        const o = this[n],
          i = Gu.find((s) => s.stringifyCondition(o))
        return i ? i.stringify(o) : r
      }),
    parse: (e) =>
      JSON.parse(e, function (n, r) {
        const o = this[n],
          i = Gu.find((s) => s.parseCondition(o))
        return i ? i.parse(o) : r
      }),
  },
  Gu = [
    {
      stringifyCondition: (e) => e instanceof Date,
      stringify: (e) => ({ $date: e.toISOString() }),
      parseCondition: (e) => qn(e) && e.$date,
      parse: (e) => new Date(e.$date),
    },
    {
      stringifyCondition: (e) => e === void 0,
      stringify: () => ({ $undefined: '' }),
      parseCondition: (e) => qn(e) && e.$undefined === '',
      parse: () => {},
    },
  ],
  cv = ['component', 'errorComponent', 'pendingComponent', 'notFoundComponent']
function dv(e) {
  return new fv(e)
}
class fv {
  constructor(t) {
    ;(this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.subscribers = new Set()),
      (this.startReactTransition = (n) => n()),
      (this.update = (n) => {
        n.notFoundRoute &&
          console.warn(
            'The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info.',
          )
        const r = this.options
        ;(this.options = { ...this.options, ...n }),
          (this.isServer = this.options.isServer ?? typeof document > 'u'),
          (!this.basepath || (n.basepath && n.basepath !== r.basepath)) &&
            (n.basepath === void 0 || n.basepath === '' || n.basepath === '/'
              ? (this.basepath = '/')
              : (this.basepath = `/${fl(n.basepath)}`)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ?? (this.isServer ? E0({ initialEntries: [this.basepath || '/'] }) : C0())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            (this.__store = new H0(mv(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter((o) => !['redirected'].includes(o.status)),
                }
              },
            }))
      }),
      (this.buildRouteTree = () => {
        ;(this.routesById = {}), (this.routesByPath = {})
        const n = this.options.notFoundRoute
        n && (n.init({ originalIndex: 99999999999 }), (this.routesById[n.id] = n))
        const r = (s) => {
          s.forEach((l, a) => {
            l.init({ originalIndex: a })
            const u = this.routesById[l.id]
            if (
              (je(!u, `Duplicate routes found with id: ${String(l.id)}`),
              (this.routesById[l.id] = l),
              !l.isRoot && l.path)
            ) {
              const p = un(l.fullPath)
              ;(!this.routesByPath[p] || l.fullPath.endsWith('/')) && (this.routesByPath[p] = l)
            }
            const d = l.children
            d != null && d.length && r(d)
          })
        }
        r([this.routeTree])
        const o = []
        Object.values(this.routesById).forEach((s, l) => {
          var a
          if (s.isRoot || !s.path) return
          const u = xa(s.fullPath),
            d = er(u)
          for (; d.length > 1 && ((a = d[0]) == null ? void 0 : a.value) === '/'; ) d.shift()
          const p = d.map((f) => (f.value === '/' ? 0.75 : f.type === 'param' ? 0.5 : f.type === 'wildcard' ? 0.25 : 1))
          o.push({ child: s, trimmed: u, parsed: d, index: l, scores: p })
        }),
          (this.flatRoutes = o
            .sort((s, l) => {
              const a = Math.min(s.scores.length, l.scores.length)
              for (let u = 0; u < a; u++) if (s.scores[u] !== l.scores[u]) return l.scores[u] - s.scores[u]
              if (s.scores.length !== l.scores.length) return l.scores.length - s.scores.length
              for (let u = 0; u < a; u++)
                if (s.parsed[u].value !== l.parsed[u].value) return s.parsed[u].value > l.parsed[u].value ? 1 : -1
              return s.index - l.index
            })
            .map((s, l) => ((s.child.rank = l), s.child)))
      }),
      (this.subscribe = (n, r) => {
        const o = { eventType: n, fn: r }
        return (
          this.subscribers.add(o),
          () => {
            this.subscribers.delete(o)
          }
        )
      }),
      (this.emit = (n) => {
        this.subscribers.forEach((r) => {
          r.eventType === n.type && r.fn(n)
        })
      }),
      (this.parseLocation = (n) => {
        const r = ({ pathname: l, search: a, hash: u, state: d }) => {
            const p = this.options.parseSearch(a),
              f = this.options.stringifySearch(p)
            return {
              pathname: l,
              searchStr: f,
              search: Sn(n == null ? void 0 : n.search, p),
              hash: u.split('#').reverse()[0] ?? '',
              href: `${l}${f}${u}`,
              state: Sn(n == null ? void 0 : n.state, d),
            }
          },
          o = r(this.history.location),
          { __tempLocation: i, __tempKey: s } = o.state
        if (i && (!s || s === this.tempLocationKey)) {
          const l = r(i)
          return (l.state.key = o.state.key), delete l.state.__tempLocation, { ...l, maskedLocation: o }
        }
        return o
      }),
      (this.resolvePathWithBase = (n, r) =>
        ov({ basepath: this.basepath, base: n, to: Fi(r), trailingSlash: this.options.trailingSlash })),
      (this.cancelMatch = (n) => {
        const r = this.getMatch(n)
        r && (r.abortController.abort(), clearTimeout(r.pendingTimeout))
      }),
      (this.cancelMatches = () => {
        var n
        ;(n = this.state.pendingMatches) == null ||
          n.forEach((r) => {
            this.cancelMatch(r.id)
          })
      }),
      (this.buildLocation = (n) => {
        const r = (i = {}, s) => {
            var l, a, u, d
            const p = i._fromLocation ? this.matchRoutes(i._fromLocation) : this.state.matches,
              f =
                i.from != null
                  ? p.find((D) => jo(this.basepath, un(D.pathname), { to: i.from, caseSensitive: !1, fuzzy: !1 }))
                  : void 0,
              y = (f == null ? void 0 : f.pathname) || this.latestLocation.pathname
            je(i.from == null || f != null, 'Could not find match for from: ' + i.from)
            const g = this.state.pendingMatches
                ? (l = zr(this.state.pendingMatches)) == null
                  ? void 0
                  : l.search
                : ((a = zr(p)) == null ? void 0 : a.search) || this.latestLocation.search,
              x = s == null ? void 0 : s.filter((D) => p.find((H) => H.routeId === D.routeId)),
              k =
                this.routesById[(u = x == null ? void 0 : x.find((D) => D.pathname === y)) == null ? void 0 : u.routeId]
            let h = i.to
              ? this.resolvePathWithBase(y, `${i.to}`)
              : this.resolvePathWithBase(y, (k == null ? void 0 : k.to) ?? y)
            const m = { ...((d = zr(p)) == null ? void 0 : d.params) }
            let v = (i.params ?? !0) === !0 ? m : { ...m, ...In(i.params, m) }
            Object.keys(v).length > 0 &&
              (s == null ||
                s
                  .map((D) => {
                    var H
                    const U = this.looseRoutesById[D.routeId]
                    return (
                      ((H = U == null ? void 0 : U.options.params) == null ? void 0 : H.stringify) ??
                      U.options.stringifyParams
                    )
                  })
                  .filter(Boolean)
                  .forEach((D) => {
                    v = { ...v, ...D(v) }
                  })),
              (h = gs({ path: h, params: v ?? {}, leaveWildcards: !1, leaveParams: n.leaveParams }))
            const w =
                (x == null
                  ? void 0
                  : x
                      .map((D) => this.looseRoutesById[D.routeId].options.preSearchFilters ?? [])
                      .flat()
                      .filter(Boolean)) ?? [],
              E =
                (x == null
                  ? void 0
                  : x
                      .map((D) => this.looseRoutesById[D.routeId].options.postSearchFilters ?? [])
                      .flat()
                      .filter(Boolean)) ?? [],
              _ = w.length ? w.reduce((D, H) => H(D), g) : g,
              j = i.search === !0 ? _ : i.search ? In(i.search, _) : w.length ? _ : {},
              P = E.length ? E.reduce((D, H) => H(D), j) : j,
              C = Sn(g, P),
              M = this.options.stringifySearch(C),
              b = i.hash === !0 ? this.latestLocation.hash : i.hash ? In(i.hash, this.latestLocation.hash) : void 0,
              $ = b ? `#${b}` : ''
            let K = i.state === !0 ? this.latestLocation.state : i.state ? In(i.state, this.latestLocation.state) : {}
            return (
              (K = Sn(this.latestLocation.state, K)),
              {
                pathname: h,
                search: C,
                searchStr: M,
                state: K,
                hash: b ?? '',
                href: `${h}${M}${$}`,
                unmaskOnReload: i.unmaskOnReload,
              }
            )
          },
          o = (i = {}, s) => {
            var l
            const a = r(i)
            let u = s ? r(s) : void 0
            if (!u) {
              let g = {}
              const x =
                (l = this.options.routeMasks) == null
                  ? void 0
                  : l.find((k) => {
                      const h = jo(this.basepath, a.pathname, { to: k.from, caseSensitive: !1, fuzzy: !1 })
                      return h ? ((g = h), !0) : !1
                    })
              if (x) {
                const { from: k, ...h } = x
                ;(s = { ...$r(n, ['from']), ...h, params: g }), (u = r(s))
              }
            }
            const d = this.matchRoutes(a),
              p = u ? this.matchRoutes(u) : void 0,
              f = u ? r(s, p) : void 0,
              y = r(i, d)
            return f && (y.maskedLocation = f), y
          }
        return n.mask ? o(n, { ...$r(n, ['from']), ...n.mask }) : o(n)
      }),
      (this.commitLocation = ({ viewTransition: n, ignoreBlocker: r, ...o }) => {
        const i = () => {
            o.state.key = this.latestLocation.state.key
            const a = Vn(o.state, this.latestLocation.state)
            return delete o.state.key, a
          },
          s = this.latestLocation.href === o.href,
          l = this.commitLocationPromise
        if (
          ((this.commitLocationPromise = kn(() => {
            l == null || l.resolve()
          })),
          s && i())
        )
          this.load()
        else {
          let { maskedLocation: a, ...u } = o
          a &&
            ((u = {
              ...a,
              state: {
                ...a.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...u,
                  search: u.searchStr,
                  state: { ...u.state, __tempKey: void 0, __tempLocation: void 0, key: void 0 },
                },
              },
            }),
            (u.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (u.state.__tempKey = this.tempLocationKey)),
            (this.shouldViewTransition = n),
            this.history[o.replace ? 'replace' : 'push'](u.href, u.state, { ignoreBlocker: r })
        }
        return (
          (this.resetNextScroll = o.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        )
      }),
      (this.buildAndCommitLocation = ({
        replace: n,
        resetScroll: r,
        viewTransition: o,
        ignoreBlocker: i,
        ...s
      } = {}) => {
        const l = s.href
        if (l) {
          const u = hi(l, {})
          ;(s.to = u.pathname), (s.search = this.options.parseSearch(u.search)), (s.hash = u.hash)
        }
        const a = this.buildLocation(s)
        return this.commitLocation({ ...a, viewTransition: o, replace: n, resetScroll: r, ignoreBlocker: i })
      }),
      (this.navigate = ({ to: n, __isRedirect: r, ...o }) => {
        const i = String(n)
        let s
        try {
          new URL(`${i}`), (s = !0)
        } catch {}
        return je(!s), this.buildAndCommitLocation({ ...o, to: n })
      }),
      (this.load = async () => {
        this.latestLocation = this.parseLocation(this.latestLocation)
        let n, r, o
        for (
          o = new Promise((i) => {
            this.startReactTransition(async () => {
              var s
              try {
                const l = this.latestLocation,
                  a = this.state.resolvedLocation,
                  u = a.href !== l.href
                this.cancelMatches()
                let d
                this.__store.batch(() => {
                  ;(d = this.matchRoutes(l)),
                    this.__store.setState((p) => ({
                      ...p,
                      status: 'pending',
                      isLoading: !0,
                      location: l,
                      pendingMatches: d,
                      cachedMatches: p.cachedMatches.filter((f) => !d.find((y) => y.id === f.id)),
                    }))
                }),
                  this.state.redirect ||
                    this.emit({ type: 'onBeforeNavigate', fromLocation: a, toLocation: l, pathChanged: u }),
                  this.emit({ type: 'onBeforeLoad', fromLocation: a, toLocation: l, pathChanged: u }),
                  await this.loadMatches({
                    matches: d,
                    location: l,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let p, f, y
                        this.__store.batch(() => {
                          this.__store.setState((g) => {
                            const x = g.matches,
                              k = g.pendingMatches || g.matches
                            return (
                              (p = x.filter((h) => !k.find((m) => m.id === h.id))),
                              (f = k.filter((h) => !x.find((m) => m.id === h.id))),
                              (y = x.filter((h) => k.find((m) => m.id === h.id))),
                              {
                                ...g,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: k,
                                pendingMatches: void 0,
                                cachedMatches: [...g.cachedMatches, ...p.filter((h) => h.status !== 'error')],
                              }
                            )
                          }),
                            this.cleanCache()
                        }),
                          [
                            [p, 'onLeave'],
                            [f, 'onEnter'],
                            [y, 'onStay'],
                          ].forEach(([g, x]) => {
                            g.forEach((k) => {
                              var h, m
                              ;(m = (h = this.looseRoutesById[k.routeId].options)[x]) == null || m.call(h, k)
                            })
                          })
                      })
                    },
                  })
              } catch (l) {
                Ku(l)
                  ? ((n = l), this.isServer || this.navigate({ ...l, replace: !0, __isRedirect: !0 }))
                  : dt(l) && (r = l),
                  this.__store.setState((a) => ({
                    ...a,
                    statusCode: n ? n.statusCode : r ? 404 : a.matches.some((u) => u.status === 'error') ? 500 : 200,
                    redirect: n,
                  }))
              }
              this.latestLoadPromise === o &&
                ((s = this.commitLocationPromise) == null || s.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                i()
            })
          }),
            this.latestLoadPromise = o,
            await o;
          this.latestLoadPromise && o !== this.latestLoadPromise;

        )
          await this.latestLoadPromise
      }),
      (this.startViewTransition = (n) => {
        var r, o
        const i = this.shouldViewTransition ?? this.options.defaultViewTransition
        delete this.shouldViewTransition,
          ((o = (r = i && typeof document < 'u' ? document : void 0) == null ? void 0 : r.startViewTransition) !=
            null &&
            o.call(r, n)) ||
            n()
      }),
      (this.updateMatch = (n, r) => {
        var o
        let i
        const s = (o = this.state.pendingMatches) == null ? void 0 : o.find((u) => u.id === n),
          l = this.state.matches.find((u) => u.id === n),
          a = s ? 'pendingMatches' : l ? 'matches' : 'cachedMatches'
        return (
          this.__store.setState((u) => {
            var d
            return { ...u, [a]: (d = u[a]) == null ? void 0 : d.map((p) => (p.id === n ? (i = r(p)) : p)) }
          }),
          i
        )
      }),
      (this.getMatch = (n) =>
        [...this.state.cachedMatches, ...(this.state.pendingMatches ?? []), ...this.state.matches].find(
          (r) => r.id === n,
        )),
      (this.loadMatches = async ({
        location: n,
        matches: r,
        preload: o,
        onReady: i,
        updateMatch: s = this.updateMatch,
      }) => {
        let l,
          a = !1
        const u = async () => {
          a || ((a = !0), await (i == null ? void 0 : i()))
        }
        !this.isServer && !this.state.matches.length && u()
        const d = (p, f) => {
          var y, g, x
          if (Ku(f)) throw f
          if (rn(f) || dt(f)) {
            if (
              (s(p.id, (k) => ({
                ...k,
                status: rn(f) ? 'redirected' : dt(f) ? 'notFound' : 'error',
                isFetching: !1,
                error: f,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              f.routeId || (f.routeId = p.routeId),
              (y = p.beforeLoadPromise) == null || y.resolve(),
              (g = p.loaderPromise) == null || g.resolve(),
              (x = p.loadPromise) == null || x.resolve(),
              rn(f))
            )
              throw ((a = !0), (f = this.resolveRedirect({ ...f, _fromLocation: n })), f)
            if (dt(f)) throw (this._handleNotFound(r, f, { updateMatch: s }), f)
          }
        }
        try {
          await new Promise((p, f) => {
            ;(async () => {
              var y, g, x
              try {
                const k = (v, w, E) => {
                  var _, j
                  const { id: P, routeId: C } = r[v],
                    M = this.looseRoutesById[C]
                  if (w instanceof Promise) throw w
                  ;(w.routerCode = E), (l = l ?? v), d(this.getMatch(P), w)
                  try {
                    ;(j = (_ = M.options).onError) == null || j.call(_, w)
                  } catch (b) {
                    ;(w = b), d(this.getMatch(P), w)
                  }
                  s(P, (b) => {
                    var $
                    return (
                      ($ = b.beforeLoadPromise) == null || $.resolve(),
                      {
                        ...b,
                        error: w,
                        status: 'error',
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    )
                  })
                }
                for (const [v, { id: w, routeId: E }] of r.entries()) {
                  const _ = this.getMatch(w),
                    j = (y = r[v - 1]) == null ? void 0 : y.id,
                    P = this.looseRoutesById[E],
                    C = P.options.pendingMs ?? this.options.defaultPendingMs,
                    M = !!(
                      i &&
                      !this.isServer &&
                      !o &&
                      (P.options.loader || P.options.beforeLoad) &&
                      typeof C == 'number' &&
                      C !== 1 / 0 &&
                      (P.options.pendingComponent ?? this.options.defaultPendingComponent)
                    )
                  if (_.beforeLoadPromise || _.loaderPromise)
                    M &&
                      setTimeout(() => {
                        try {
                          u()
                        } catch {}
                      }, C),
                      await _.beforeLoadPromise
                  else {
                    try {
                      s(w, (F) => ({
                        ...F,
                        loadPromise: kn(() => {
                          var te
                          ;(te = F.loadPromise) == null || te.resolve()
                        }),
                        beforeLoadPromise: kn(),
                      }))
                      const b = new AbortController()
                      let $
                      M &&
                        ($ = setTimeout(() => {
                          try {
                            u()
                          } catch {}
                        }, C))
                      const { paramsError: K, searchError: D } = this.getMatch(w)
                      K && k(v, K, 'PARSE_PARAMS'), D && k(v, D, 'VALIDATE_SEARCH')
                      const H = () => (j ? this.getMatch(j).context : (this.options.context ?? {}))
                      s(w, (F) => ({
                        ...F,
                        isFetching: 'beforeLoad',
                        fetchCount: F.fetchCount + 1,
                        abortController: b,
                        pendingTimeout: $,
                        context: { ...H(), ...F.__routeContext, ...F.__beforeLoadContext },
                      }))
                      const { search: U, params: q, context: R, cause: T } = this.getMatch(w),
                        z = {
                          search: U,
                          abortController: b,
                          params: q,
                          preload: !!o,
                          context: R,
                          location: n,
                          navigate: (F) => this.navigate({ ...F, _fromLocation: n }),
                          buildLocation: this.buildLocation,
                          cause: o ? 'preload' : T,
                          matches: r,
                        }
                      let I = (await ((x = (g = P.options).beforeLoad) == null ? void 0 : x.call(g, z))) ?? {}
                      this.serializeLoaderData &&
                        (I = this.serializeLoaderData('__beforeLoadContext', I, {
                          router: this,
                          match: this.getMatch(w),
                        })),
                        (rn(I) || dt(I)) && k(v, I, 'BEFORE_LOAD'),
                        s(w, (F) => ({
                          ...F,
                          __beforeLoadContext: I,
                          context: { ...H(), ...F.__routeContext, ...I },
                          abortController: b,
                        }))
                    } catch (b) {
                      k(v, b, 'BEFORE_LOAD')
                    }
                    s(w, (b) => {
                      var $
                      return (
                        ($ = b.beforeLoadPromise) == null || $.resolve(),
                        { ...b, beforeLoadPromise: void 0, isFetching: !1 }
                      )
                    })
                  }
                }
                const h = r.slice(0, l),
                  m = []
                h.forEach(({ id: v, routeId: w }, E) => {
                  m.push(
                    (async () => {
                      const { loaderPromise: _ } = this.getMatch(v)
                      let j = !1
                      if (_) await _
                      else {
                        const P = m[E - 1],
                          C = this.looseRoutesById[w],
                          M = () => {
                            const {
                              params: z,
                              loaderDeps: I,
                              abortController: F,
                              context: te,
                              cause: ae,
                            } = this.getMatch(v)
                            return {
                              params: z,
                              deps: I,
                              preload: !!o,
                              parentMatchPromise: P,
                              abortController: F,
                              context: te,
                              location: n,
                              navigate: (qe) => this.navigate({ ...qe, _fromLocation: n }),
                              cause: o ? 'preload' : ae,
                              route: C,
                            }
                          },
                          b = Date.now() - this.getMatch(v).updatedAt,
                          $ = o
                            ? (C.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4)
                            : (C.options.staleTime ?? this.options.defaultStaleTime ?? 0),
                          K = C.options.shouldReload,
                          D = typeof K == 'function' ? K(M()) : K
                        s(v, (z) => ({
                          ...z,
                          loaderPromise: kn(),
                          preload: !!o && !this.state.matches.find((I) => I.id === v),
                        }))
                        const H = async () => {
                            var z, I, F, te, ae, qe, We, vt
                            try {
                              const xn = async () => {
                                const Me = this.getMatch(v)
                                Me.minPendingPromise && (await Me.minPendingPromise)
                              }
                              try {
                                C._lazyPromise =
                                  C._lazyPromise ||
                                  (C.lazyFn
                                    ? C.lazyFn().then((at) => {
                                        Object.assign(C.options, at.options)
                                      })
                                    : Promise.resolve())
                                const Me =
                                  this.getMatch(v).componentsPromise ||
                                  C._lazyPromise.then(() =>
                                    Promise.all(
                                      cv.map(async (at) => {
                                        const Y = C.options[at]
                                        Y != null && Y.preload && (await Y.preload())
                                      }),
                                    ),
                                  )
                                s(v, (at) => ({ ...at, isFetching: 'loader', componentsPromise: Me })),
                                  await C._lazyPromise
                                let be = await ((I = (z = C.options).loader) == null ? void 0 : I.call(z, M()))
                                this.serializeLoaderData &&
                                  (be = this.serializeLoaderData('loaderData', be, {
                                    router: this,
                                    match: this.getMatch(v),
                                  })),
                                  d(this.getMatch(v), be),
                                  await xn()
                                const lt =
                                    (te = (F = C.options).meta) == null
                                      ? void 0
                                      : te.call(F, {
                                          matches: r,
                                          match: this.getMatch(v),
                                          params: this.getMatch(v).params,
                                          loaderData: be,
                                        }),
                                  lo =
                                    (qe = (ae = C.options).headers) == null ? void 0 : qe.call(ae, { loaderData: be })
                                s(v, (at) => ({
                                  ...at,
                                  error: void 0,
                                  status: 'success',
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: be,
                                  meta: lt,
                                  headers: lo,
                                }))
                              } catch (Me) {
                                let be = Me
                                await xn(), d(this.getMatch(v), Me)
                                try {
                                  ;(vt = (We = C.options).onError) == null || vt.call(We, Me)
                                } catch (lt) {
                                  ;(be = lt), d(this.getMatch(v), lt)
                                }
                                s(v, (lt) => ({ ...lt, error: be, status: 'error', isFetching: !1 }))
                              }
                              await this.getMatch(v).componentsPromise
                            } catch (xn) {
                              d(this.getMatch(v), xn)
                            }
                          },
                          { status: U, invalid: q } = this.getMatch(v)
                        ;(j = U === 'success' && (q || (D ?? b > $))),
                          (o && C.options.preload === !1) ||
                            (j
                              ? (async () => {
                                  try {
                                    await H()
                                  } catch {}
                                })()
                              : U !== 'success' && (await H()))
                        const { loaderPromise: R, loadPromise: T } = this.getMatch(v)
                        R == null || R.resolve(), T == null || T.resolve()
                      }
                      s(v, (P) => ({ ...P, isFetching: j ? P.isFetching : !1, loaderPromise: void 0 }))
                    })(),
                  )
                }),
                  await Promise.all(m),
                  p()
              } catch (k) {
                f(k)
              }
            })()
          }),
            await u()
        } catch (p) {
          if (rn(p) || dt(p)) throw (dt(p) && !o && (await u()), p)
        }
        return r
      }),
      (this.invalidate = () => {
        const n = (r) => ({ ...r, invalid: !0, ...(r.status === 'error' ? { status: 'pending', error: void 0 } : {}) })
        return (
          this.__store.setState((r) => {
            var o
            return {
              ...r,
              matches: r.matches.map(n),
              cachedMatches: r.cachedMatches.map(n),
              pendingMatches: (o = r.pendingMatches) == null ? void 0 : o.map(n),
            }
          }),
          this.load()
        )
      }),
      (this.resolveRedirect = (n) => {
        const r = n
        return r.href || (r.href = this.buildLocation(r).href), r
      }),
      (this.cleanCache = () => {
        this.__store.setState((n) => ({
          ...n,
          cachedMatches: n.cachedMatches.filter((r) => {
            const o = this.looseRoutesById[r.routeId]
            if (!o.options.loader) return !1
            const i =
              (r.preload
                ? (o.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
                : (o.options.gcTime ?? this.options.defaultGcTime)) ?? 5 * 60 * 1e3
            return r.status !== 'error' && Date.now() - r.updatedAt < i
          }),
        }))
      }),
      (this.preloadRoute = async (n) => {
        const r = this.buildLocation(n)
        let o = this.matchRoutes(r, { throwOnError: !0, preload: !0 })
        const i = Object.fromEntries(
          [...this.state.matches, ...(this.state.pendingMatches ?? []), ...this.state.cachedMatches].map((l) => [
            l.id,
            !0,
          ]),
        )
        this.__store.batch(() => {
          o.forEach((l) => {
            i[l.id] || this.__store.setState((a) => ({ ...a, cachedMatches: [...a.cachedMatches, l] }))
          })
        })
        const s = new Set([...this.state.matches, ...(this.state.pendingMatches ?? [])].map((l) => l.id))
        try {
          return (
            (o = await this.loadMatches({
              matches: o,
              location: r,
              preload: !0,
              updateMatch: (l, a) => {
                s.has(l) ? (o = o.map((u) => (u.id === l ? a(u) : u))) : this.updateMatch(l, a)
              },
            })),
            o
          )
        } catch (l) {
          if (rn(l)) return await this.preloadRoute({ ...l, _fromLocation: r })
          console.error(l)
          return
        }
      }),
      (this.matchRoute = (n, r) => {
        const o = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || '', n.to) : void 0,
            params: n.params || {},
            leaveParams: !0,
          },
          i = this.buildLocation(o)
        if (r != null && r.pending && this.state.status !== 'pending') return !1
        const l = ((r == null ? void 0 : r.pending) === void 0 ? !this.state.isLoading : r.pending)
            ? this.latestLocation
            : this.state.resolvedLocation,
          a = jo(this.basepath, l.pathname, { ...r, to: i.pathname })
        return !a || (n.params && !Vn(a, n.params, !0))
          ? !1
          : a && ((r == null ? void 0 : r.includeSearch) ?? !0)
            ? Vn(l.search, i.search, !0)
              ? a
              : !1
            : a
      }),
      (this.dehydrate = () => {
        var n
        const r = ((n = this.options.errorSerializer) == null ? void 0 : n.serialize) ?? vv
        return {
          state: {
            dehydratedMatches: this.state.matches.map((o) => ({
              ...$r(o, ['id', 'status', 'updatedAt']),
              error: o.error ? { data: r(o.error), __isServerError: !0 } : void 0,
            })),
          },
          manifest: this.manifest,
        }
      }),
      (this.hydrate = () => {
        var n, r, o
        let i
        typeof document < 'u' &&
          (i = this.options.transformer.parse((n = window.__TSR__) == null ? void 0 : n.dehydrated)),
          je(i),
          (this.dehydratedData = i.payload),
          (o = (r = this.options).hydrate) == null || o.call(r, i.payload)
        const s = i.router.state,
          l = this.matchRoutes(this.state.location).map((a) => {
            const u = s.dehydratedMatches.find((d) => d.id === a.id)
            return je(u, `Could not find a client-side match for dehydrated match with id: ${a.id}!`), { ...a, ...u }
          })
        this.__store.setState((a) => ({ ...a, matches: l })), (this.manifest = i.router.manifest)
      }),
      (this.injectedHtml = []),
      (this.injectHtml = (n) => {
        const r = () => ((this.injectedHtml = this.injectedHtml.filter((o) => o !== r)), n)
        this.injectedHtml.push(r)
      }),
      (this.streamedKeys = new Set()),
      (this.getStreamedValue = (n) => {
        var r
        if (this.isServer) return
        const o = (r = window.__TSR__) == null ? void 0 : r.streamedValues[n]
        if (o) return o.parsed || (o.parsed = this.options.transformer.parse(o.value)), o.parsed
      }),
      (this.streamValue = (n, r) => {
        var o
        this.streamedKeys.has(n), this.streamedKeys.add(n)
        const i = `__TSR__.streamedValues['${n}'] = { value: ${(o = this.serializer) == null ? void 0 : o.call(this, this.options.transformer.stringify(r))}}`
        this.injectHtml(`<script class='tsr-once'>${i}; __TSR__.cleanScripts()<\/script>`)
      }),
      (this._handleNotFound = (n, r, { updateMatch: o = this.updateMatch } = {}) => {
        const i = Object.fromEntries(n.map((a) => [a.routeId, a]))
        let s = (r.global ? this.looseRoutesById[Se] : this.looseRoutesById[r.routeId]) || this.looseRoutesById[Se]
        for (; !s.options.notFoundComponent && !this.options.defaultNotFoundComponent && s.id !== Se; )
          (s = s.parentRoute), je(s)
        const l = i[s.id]
        je(l, 'Could not find match for route: ' + s.id),
          o(l.id, (a) => ({ ...a, status: 'notFound', error: r, isFetching: !1 })),
          r.routerCode === 'BEFORE_LOAD' &&
            s.parentRoute &&
            ((r.routeId = s.parentRoute.id), this._handleNotFound(n, r, { updateMatch: o }))
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some((n) => n.status === 'notFound' || n.globalNotFound)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        notFoundMode: t.notFoundMode ?? 'fuzzy',
        stringifySearch: t.stringifySearch ?? Z0,
        parseSearch: t.parseSearch ?? X0,
        transformer: t.transformer ?? uv,
      }),
      typeof document < 'u' && (window.__TSR__ROUTER__ = this)
  }
  get state() {
    return this.__store.state
  }
  get looseRoutesById() {
    return this.routesById
  }
  matchRoutes(t, n, r) {
    return typeof t == 'string'
      ? this.matchRoutesInternal({ pathname: t, search: n }, r)
      : this.matchRoutesInternal(t, n)
  }
  matchRoutesInternal(t, n) {
    let r = {}
    const o = this.flatRoutes.find((p) => {
      const f = jo(this.basepath, un(t.pathname), {
        to: p.fullPath,
        caseSensitive: p.options.caseSensitive ?? this.options.caseSensitive,
        fuzzy: !0,
      })
      return f ? ((r = f), !0) : !1
    })
    let i = o || this.routesById[Se]
    const s = [i]
    let l = !1
    for (
      (o ? o.path !== '/' && r['**'] : un(t.pathname)) &&
      (this.options.notFoundRoute ? s.push(this.options.notFoundRoute) : (l = !0));
      i.parentRoute;

    )
      (i = i.parentRoute), s.unshift(i)
    const a = (() => {
        if (l) {
          if (this.options.notFoundMode !== 'root')
            for (let p = s.length - 1; p >= 0; p--) {
              const f = s[p]
              if (f.children) return f.id
            }
          return Se
        }
      })(),
      u = s.map((p) => {
        var f
        let y
        const g = ((f = p.options.params) == null ? void 0 : f.parse) ?? p.options.parseParams
        if (g)
          try {
            const x = g(r)
            Object.assign(r, x)
          } catch (x) {
            if (((y = new hv(x.message, { cause: x })), n != null && n.throwOnError)) throw y
            return y
          }
      }),
      d = []
    return (
      s.forEach((p, f) => {
        var y, g, x, k, h, m, v, w, E, _, j, P
        const C = d[f - 1],
          [M, b] = (() => {
            const F = (C == null ? void 0 : C.search) ?? t.search
            try {
              const te =
                  typeof p.options.validateSearch == 'object'
                    ? p.options.validateSearch.parse
                    : p.options.validateSearch,
                ae = (te == null ? void 0 : te(F)) ?? {}
              return [{ ...F, ...ae }, void 0]
            } catch (te) {
              const ae = new pv(te.message, { cause: te })
              if (n != null && n.throwOnError) throw ae
              return [F, ae]
            }
          })(),
          $ = ((g = (y = p.options).loaderDeps) == null ? void 0 : g.call(y, { search: M })) ?? '',
          K = $ ? JSON.stringify($) : '',
          D = gs({ path: p.fullPath, params: r }),
          H = gs({ path: p.id, params: r, leaveWildcards: !0 }) + K,
          U = this.getMatch(H),
          q = this.state.matches.find((F) => F.id === H) ? 'stay' : 'enter'
        let R
        if (U) R = { ...U, cause: q, params: r }
        else {
          const F = p.options.loader || p.options.beforeLoad || p.lazyFn ? 'pending' : 'success'
          R = {
            id: H,
            index: f,
            routeId: p.id,
            params: r,
            pathname: Qt([this.basepath, D]),
            updatedAt: Date.now(),
            search: {},
            searchError: void 0,
            status: F,
            isFetching: !1,
            error: void 0,
            paramsError: u[f],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: q,
            loaderDeps: $,
            invalid: !1,
            preload: !1,
            links: (k = (x = p.options).links) == null ? void 0 : k.call(x),
            scripts: (m = (h = p.options).scripts) == null ? void 0 : m.call(h),
            staticData: p.options.staticData || {},
            loadPromise: kn(),
            fullPath: p.fullPath,
          }
        }
        R.status === 'success' &&
          ((R.meta =
            (w = (v = p.options).meta) == null
              ? void 0
              : w.call(v, { matches: d, match: R, params: R.params, loaderData: R.loaderData })),
          (R.headers = (_ = (E = p.options).headers) == null ? void 0 : _.call(E, { loaderData: R.loaderData }))),
          (n != null && n.preload) || (R.globalNotFound = a === p.id),
          (R.search = Sn(R.search, M)),
          (R.searchError = b)
        const z = (C == null ? void 0 : C.id) ? (C.context ?? this.options.context ?? {}) : (this.options.context ?? {})
        R.context = { ...z, ...R.__routeContext, ...R.__beforeLoadContext }
        const I = {
          search: R.search,
          params: R.params,
          context: R.context,
          location: t,
          navigate: (F) => this.navigate({ ...F, _fromLocation: t }),
          buildLocation: this.buildLocation,
          cause: R.cause,
          abortController: R.abortController,
          preload: !!R.preload,
          matches: d,
        }
        ;(R.__routeContext = ((P = (j = p.options).context) == null ? void 0 : P.call(j, I)) ?? {}),
          (R.context = { ...z, ...R.__routeContext, ...R.__beforeLoadContext }),
          d.push(R)
      }),
      d
    )
  }
}
class pv extends Error {}
class hv extends Error {}
function mv(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: 'idle',
    resolvedLocation: { ...e },
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  }
}
function vv(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e }
}
function Qu(e) {
  return !(typeof e == 'object' && e && 'data' in e) ||
    !('__isServerError' in e && e.__isServerError) ||
    !(typeof e.data == 'object' && e.data)
    ? !1
    : e.__isServerError === !0
}
function Yu(e) {
  if ('name' in e && 'message' in e) {
    const t = new Error(e.message)
    return (t.name = e.name), t
  }
  return e.data
}
const Oi = S.createContext(void 0)
function Zt(e) {
  const t = S.useContext(Oi)
  return Ce({
    select: (r) => {
      const o = r.matches.find((i) => (e.from ? e.from === i.routeId : i.id === t))
      if (
        (je(
          !((e.shouldThrow ?? !0) && !o),
          `Could not find ${e.from ? `an active match from "${e.from}"` : 'a nearest match!'}`,
        ),
        o !== void 0)
      )
        return e.select ? e.select(o) : o
    },
  })
}
function bf(e) {
  return Zt({ ...e, select: (t) => (typeof e.select == 'function' ? e.select(t.loaderDeps) : t.loaderDeps) })
}
function Of(e) {
  return Zt({ ...e, select: (t) => (typeof e.select == 'function' ? e.select(t.loaderData) : t.loaderData) })
}
function Df(e) {
  return Zt({ ...e, select: (t) => (e.select ? e.select(t.params) : t.params) })
}
function Af(e) {
  return Zt({ ...e, select: (t) => (e.select ? e.select(t.search) : t.search) })
}
function Uf(e) {
  const { navigate: t } = Mt()
  return S.useCallback((n) => t({ ...n }), [t])
}
let Bf = class {
  constructor(t) {
    ;(this.init = (n) => {
      var r, o
      this.originalIndex = n.originalIndex
      const i = this.options,
        s = !(i != null && i.path) && !(i != null && i.id)
      ;(this.parentRoute = (o = (r = this.options).getParentRoute) == null ? void 0 : o.call(r)),
        s ? (this._path = Se) : je(this.parentRoute)
      let l = s ? Se : i.path
      l && l !== '/' && (l = xa(l))
      const a = (i == null ? void 0 : i.id) || l
      let u = s ? Se : Qt([this.parentRoute.id === Se ? '' : this.parentRoute.id, a])
      l === Se && (l = '/'), u !== Se && (u = Qt(['/', u]))
      const d = u === Se ? '/' : Qt([this.parentRoute.fullPath, l])
      ;(this._path = l), (this._id = u), (this._fullPath = d), (this._to = d)
    }),
      (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
      (this.update = (n) => (Object.assign(this.options, n), this)),
      (this.lazy = (n) => ((this.lazyFn = n), this)),
      (this.useMatch = (n) => Zt({ ...n, from: this.id })),
      (this.useRouteContext = (n) =>
        Zt({ ...n, from: this.id, select: (r) => (n != null && n.select ? n.select(r.context) : r.context) })),
      (this.useSearch = (n) => Af({ ...n, from: this.id })),
      (this.useParams = (n) => Df({ ...n, from: this.id })),
      (this.useLoaderDeps = (n) => bf({ ...n, from: this.id })),
      (this.useLoaderData = (n) => Of({ ...n, from: this.id })),
      (this.useNavigate = () => Uf({ from: this.id })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      je(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for('react.memo'))
  }
  get to() {
    return this._to
  }
  get id() {
    return this._id
  }
  get path() {
    return this._path
  }
  get fullPath() {
    return this._fullPath
  }
  addChildren(t) {
    return this._addFileChildren(t)
  }
  _addFileChildren(t) {
    return (
      Array.isArray(t) && (this.children = t),
      typeof t == 'object' && t !== null && (this.children = Object.values(t)),
      this
    )
  }
}
function gv(e) {
  return new Bf(e)
}
class yv extends Bf {
  constructor(t) {
    super(t)
  }
  addChildren(t) {
    return super.addChildren(t), this
  }
  _addFileChildren(t) {
    return super._addFileChildren(t), this
  }
  _addFileTypes() {
    return this
  }
}
function xv(e) {
  return new yv(e)
}
function Vf(e) {
  return new wv(e, { silent: !0 }).createRoute
}
class wv {
  constructor(t, n) {
    ;(this.path = t),
      (this.createRoute = (r) => {
        this.silent
        const o = gv(r)
        return (o.isRoot = !1), o
      }),
      (this.silent = n == null ? void 0 : n.silent)
  }
}
class Sv {
  constructor(t) {
    ;(this.useMatch = (n) => Zt({ select: n == null ? void 0 : n.select, from: this.options.id })),
      (this.useRouteContext = (n) =>
        Zt({ from: this.options.id, select: (r) => (n != null && n.select ? n.select(r.context) : r.context) })),
      (this.useSearch = (n) => Af({ ...n, from: this.options.id })),
      (this.useParams = (n) => Df({ ...n, from: this.options.id })),
      (this.useLoaderDeps = (n) => bf({ ...n, from: this.options.id })),
      (this.useLoaderData = (n) => Of({ ...n, from: this.options.id })),
      (this.useNavigate = () => Uf({ from: this.options.id })),
      (this.options = t),
      (this.$$typeof = Symbol.for('react.memo'))
  }
}
const kv = /\(.+\)/g
function Cv(e) {
  return e.replaceAll(kv, '').replaceAll('//', '/')
}
function Wy(e) {
  return (t) => new Sv({ id: Cv(e), ...t })
}
const Ev = 'Error preloading route! ☝️'
function _v(e, t) {
  const n = Mt(),
    [r, o] = S.useState(!1),
    i = nv(t),
    {
      activeProps: s = () => ({ className: 'active' }),
      inactiveProps: l = () => ({}),
      activeOptions: a,
      hash: u,
      search: d,
      params: p,
      to: f,
      state: y,
      mask: g,
      preload: x,
      preloadDelay: k,
      replace: h,
      startTransition: m,
      resetScroll: v,
      viewTransition: w,
      children: E,
      target: _,
      disabled: j,
      style: P,
      className: C,
      onClick: M,
      onFocus: b,
      onMouseEnter: $,
      onMouseLeave: K,
      onTouchStart: D,
      ignoreBlocker: H,
      ...U
    } = e,
    q = S.useMemo(() => {
      try {
        return new URL(`${f}`), 'external'
      } catch {}
      return 'internal'
    }, [f]),
    R = S.useMemo(() => n.buildLocation(e), [n, e]),
    T = S.useMemo(() => x ?? n.options.defaultPreload, [n.options.defaultPreload, x]),
    z = k ?? n.options.defaultPreloadDelay ?? 0,
    I = Ce({
      select: (Y) => {
        const ye = mi(Y.location.pathname, n.basepath).split('/'),
          Ui = mi(R.pathname, n.basepath)
            .split('/')
            .every((Kp, Gp) => Kp === ye[Gp]),
          Vp = a != null && a.exact ? rv(Y.location.pathname, R.pathname, n.basepath) : Ui,
          Wp = a != null && a.includeHash ? Y.location.hash === R.hash : !0,
          Hp =
            ((a == null ? void 0 : a.includeSearch) ?? !0)
              ? Vn(Y.location.search, R.search, !(a != null && a.exact))
              : !0
        return Vp && Wp && Hp
      },
    }),
    F = S.useCallback(() => {
      n.preloadRoute(e).catch((Y) => {
        console.warn(Y), console.warn(Ev)
      })
    }, [e, n]),
    te = S.useCallback(
      (Y) => {
        Y != null && Y.isIntersecting && F()
      },
      [F],
    )
  if ((tv(i, te, { rootMargin: '100px' }, { disabled: !!j || T !== 'viewport' }), q === 'external'))
    return {
      ...U,
      ref: i,
      type: q,
      href: f,
      ...(E && { children: E }),
      ...(_ && { target: _ }),
      ...(j && { disabled: j }),
      ...(P && { style: P }),
      ...(C && { className: C }),
      ...(M && { onClick: M }),
      ...(b && { onFocus: b }),
      ...($ && { onMouseEnter: $ }),
      ...(K && { onMouseLeave: K }),
      ...(D && { onTouchStart: D }),
    }
  const ae = (Y) => {
      if (!j && !jv(Y) && !Y.defaultPrevented && (!_ || _ === '_self') && Y.button === 0) {
        Y.preventDefault(),
          oo.flushSync(() => {
            o(!0)
          })
        const ye = n.subscribe('onResolved', () => {
          ye(), o(!1)
        })
        n.commitLocation({ ...R, replace: h, resetScroll: v, startTransition: m, viewTransition: w, ignoreBlocker: H })
      }
    },
    qe = (Y) => {
      j || (T && F())
    },
    We = qe,
    vt = (Y) => {
      if (j) return
      const ye = Y.target || {}
      if (T) {
        if (ye.preloadTimeout) return
        ye.preloadTimeout = setTimeout(() => {
          ;(ye.preloadTimeout = null), F()
        }, z)
      }
    },
    xn = (Y) => {
      if (j) return
      const ye = Y.target || {}
      ye.preloadTimeout && (clearTimeout(ye.preloadTimeout), (ye.preloadTimeout = null))
    },
    Me = (Y) => (ye) => {
      var Ai
      ;(Ai = ye.persist) == null || Ai.call(ye),
        Y.filter(Boolean).forEach((Ui) => {
          ye.defaultPrevented || Ui(ye)
        })
    },
    be = I ? (In(s, {}) ?? {}) : {},
    lt = I ? {} : In(l, {}),
    lo = [C, be.className, lt.className].filter(Boolean).join(' '),
    at = { ...P, ...be.style, ...lt.style }
  return {
    ...be,
    ...lt,
    ...U,
    href: j ? void 0 : R.maskedLocation ? n.history.createHref(R.maskedLocation.href) : n.history.createHref(R.href),
    ref: i,
    onClick: Me([M, ae]),
    onFocus: Me([b, qe]),
    onMouseEnter: Me([$, vt]),
    onMouseLeave: Me([K, xn]),
    onTouchStart: Me([D, We]),
    disabled: !!j,
    target: _,
    ...(Object.keys(at).length && { style: at }),
    ...(lo && { className: lo }),
    ...(j && { role: 'link', 'aria-disabled': !0 }),
    ...(I && { 'data-status': 'active', 'aria-current': 'page' }),
    ...(r && { 'data-transitioning': 'transitioning' }),
  }
}
const Xu = S.forwardRef((e, t) => {
  const { _asChild: n, ...r } = e,
    { type: o, ref: i, ...s } = _v(r, t),
    l = typeof r.children == 'function' ? r.children({ isActive: s['data-status'] === 'active' }) : r.children
  return typeof n > 'u' && delete s.disabled, S.createElement(n || 'a', { ...s, ref: i }, l)
})
function jv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Rv() {
  const e = Mt(),
    t = S.useRef({ router: e, mounted: !1 }),
    n = Ce({ select: (u) => $r(u, ['isLoading', 'location', 'resolvedLocation', 'isTransitioning']) }),
    [r, o] = S.useTransition(),
    i = Ce({ select: (u) => u.matches.some((d) => d.status === 'pending') }),
    s = Hu(n.isLoading),
    l = n.isLoading || r || i,
    a = Hu(l)
  return (
    e.isServer || (e.startReactTransition = o),
    S.useEffect(() => {
      const u = e.history.subscribe(e.load),
        d = e.buildLocation({ to: e.latestLocation.pathname, search: !0, params: !0, hash: !0, state: !0 })
      return (
        un(e.latestLocation.href) !== un(d.href) && e.commitLocation({ ...d, replace: !0 }),
        () => {
          u()
        }
      )
    }, [e, e.history]),
    vs(() => {
      var u
      if (
        (typeof window < 'u' && (u = window.__TSR__) != null && u.dehydrated) ||
        (t.current.router === e && t.current.mounted)
      )
        return
      ;(t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load()
          } catch (p) {
            console.error(p)
          }
        })()
    }, [e]),
    vs(() => {
      if (s && !n.isLoading) {
        const u = e.state.location,
          d = e.state.resolvedLocation,
          p = d.href !== u.href
        e.emit({ type: 'onLoad', fromLocation: d, toLocation: u, pathChanged: p })
      }
    }, [s, e, n.isLoading]),
    vs(() => {
      if (a && !l) {
        const u = e.state.location,
          d = e.state.resolvedLocation,
          p = d.href !== u.href
        if (
          (e.emit({ type: 'onResolved', fromLocation: d, toLocation: u, pathChanged: p }),
          e.__store.setState((f) => ({ ...f, status: 'idle', resolvedLocation: f.location })),
          typeof document < 'u' && document.querySelector && e.state.location.hash !== '')
        ) {
          const f = document.getElementById(e.state.location.hash)
          f && f.scrollIntoView()
        }
      }
    }, [l, a, e]),
    null
  )
}
function Bo(e) {
  return c.jsx(c.Fragment, { children: e.children })
}
function Wf(e, t, n) {
  return t.options.notFoundComponent
    ? c.jsx(t.options.notFoundComponent, { data: n })
    : e.options.defaultNotFoundComponent
      ? c.jsx(e.options.defaultNotFoundComponent, { data: n })
      : c.jsx(av, {})
}
const Hf = S.memo(function ({ matchId: t }) {
    var n, r
    const o = Mt(),
      i = Ce({
        select: (k) => {
          var h
          return (h = k.matches.find((m) => m.id === t)) == null ? void 0 : h.routeId
        },
      })
    je(i)
    const s = o.routesById[i],
      l = s.options.pendingComponent ?? o.options.defaultPendingComponent,
      a = l ? c.jsx(l, {}) : null,
      u = s.options.errorComponent ?? o.options.defaultErrorComponent,
      d = s.options.onCatch ?? o.options.defaultOnCatch,
      p = s.isRoot
        ? (s.options.notFoundComponent ?? ((n = o.options.notFoundRoute) == null ? void 0 : n.options.component))
        : s.options.notFoundComponent,
      f =
        (!s.isRoot || s.options.wrapInSuspense) &&
        (s.options.wrapInSuspense ?? l ?? ((r = s.options.errorComponent) == null ? void 0 : r.preload))
          ? S.Suspense
          : Bo,
      y = u ? wa : Bo,
      g = p ? lv : Bo,
      x = Ce({ select: (k) => k.loadedAt })
    return c.jsx(Oi.Provider, {
      value: t,
      children: c.jsx(f, {
        fallback: a,
        children: c.jsx(y, {
          getResetKey: () => x,
          errorComponent: u || bi,
          onCatch: (k, h) => {
            if (dt(k)) throw k
            d == null || d(k, h)
          },
          children: c.jsx(g, {
            fallback: (k) => {
              if (!p || (k.routeId && k.routeId !== i) || (!k.routeId && !s.isRoot)) throw k
              return S.createElement(p, k)
            },
            children: c.jsx(Pv, { matchId: t }),
          }),
        }),
      }),
    })
  }),
  Pv = S.memo(function ({ matchId: t }) {
    var n, r, o
    const i = Mt(),
      {
        match: s,
        matchIndex: l,
        routeId: a,
      } = Ce({
        select: (f) => {
          const y = f.matches.findIndex((k) => k.id === t),
            g = f.matches[y]
          return { routeId: g.routeId, matchIndex: y, match: $r(g, ['id', 'status', 'error', 'loadPromise']) }
        },
      }),
      u = i.routesById[a],
      d = S.useMemo(() => {
        const f = u.options.component ?? i.options.defaultComponent
        return f ? c.jsx(f, {}) : c.jsx(Kf, {})
      }, [u.options.component, i.options.defaultComponent]),
      p = (u.options.errorComponent ?? i.options.defaultErrorComponent) || bi
    if (s.status === 'notFound') {
      let f
      return (
        Qu(s.error)
          ? (f = (((n = i.options.errorSerializer) == null ? void 0 : n.deserialize) ?? Yu)(s.error.data))
          : (f = s.error),
        je(dt(f)),
        Wf(i, u, f)
      )
    }
    if (s.status === 'redirected') throw (je(rn(s.error)), s.loadPromise)
    if (s.status === 'error') {
      if (i.isServer) return c.jsx(p, { error: s.error, info: { componentStack: '' } })
      throw Qu(s.error)
        ? (((r = i.options.errorSerializer) == null ? void 0 : r.deserialize) ?? Yu)(s.error.data)
        : s.error
    }
    if (s.status === 'pending') {
      const f = u.options.pendingMinMs ?? i.options.defaultPendingMinMs
      if (f && !((o = i.getMatch(s.id)) != null && o.minPendingPromise) && !i.isServer) {
        const y = kn()
        Promise.resolve().then(() => {
          i.updateMatch(s.id, (g) => ({ ...g, minPendingPromise: y }))
        }),
          setTimeout(() => {
            y.resolve(), i.updateMatch(s.id, (g) => ({ ...g, minPendingPromise: void 0 }))
          }, f)
      }
      throw s.loadPromise
    }
    return c.jsxs(c.Fragment, {
      children: [d, i.AfterEachMatch ? c.jsx(i.AfterEachMatch, { match: s, matchIndex: l }) : null],
    })
  }),
  Kf = S.memo(function () {
    const t = Mt(),
      n = S.useContext(Oi),
      r = Ce({
        select: (u) => {
          var d
          return (d = u.matches.find((p) => p.id === n)) == null ? void 0 : d.routeId
        },
      }),
      o = t.routesById[r],
      { parentGlobalNotFound: i } = Ce({
        select: (u) => {
          const p = u.matches.find((f) => f.id === n)
          return je(p), { parentGlobalNotFound: p.globalNotFound }
        },
      }),
      s = Ce({
        select: (u) => {
          var d
          const p = u.matches,
            f = p.findIndex((y) => y.id === n)
          return (d = p[f + 1]) == null ? void 0 : d.id
        },
      })
    if (i) return Wf(t, o, void 0)
    if (!s) return null
    const l = c.jsx(Hf, { matchId: s }),
      a = t.options.defaultPendingComponent ? c.jsx(t.options.defaultPendingComponent, {}) : null
    return n === Se ? c.jsx(S.Suspense, { fallback: a, children: l }) : l
  })
function Nv() {
  const e = Mt(),
    t = e.options.defaultPendingComponent ? c.jsx(e.options.defaultPendingComponent, {}) : null,
    n = e.isServer || (typeof document < 'u' && window.__TSR__) ? Bo : S.Suspense,
    r = c.jsxs(n, { fallback: t, children: [c.jsx(Rv, {}), c.jsx(Mv, {})] })
  return e.options.InnerWrap ? c.jsx(e.options.InnerWrap, { children: r }) : r
}
function Mv() {
  const e = Ce({
      select: (n) => {
        var r
        return (r = n.matches[0]) == null ? void 0 : r.id
      },
    }),
    t = Ce({ select: (n) => n.loadedAt })
  return c.jsx(Oi.Provider, {
    value: e,
    children: c.jsx(wa, {
      getResetKey: () => t,
      errorComponent: bi,
      onCatch: (n) => {
        n.message || n.toString()
      },
      children: e ? c.jsx(Hf, { matchId: e }) : null,
    }),
  })
}
function Lv({ router: e, children: t, ...n }) {
  e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } })
  const r = Tf(),
    o = c.jsx(r.Provider, { value: e, children: t })
  return e.options.Wrap ? c.jsx(e.options.Wrap, { children: o }) : o
}
function Tv({ router: e, ...t }) {
  return c.jsx(Lv, { router: e, ...t, children: c.jsx(Nv, {}) })
}
const zv = 'modulepreload',
  $v = function (e) {
    return '/' + e
  },
  Zu = {},
  Gf = function (t, n, r) {
    let o = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const i = document.querySelector('meta[property=csp-nonce]'),
        s = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      o = Promise.all(
        n.map((l) => {
          if (((l = $v(l)), l in Zu)) return
          Zu[l] = !0
          const a = l.endsWith('.css'),
            u = a ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${l}"]${u}`)) return
          const d = document.createElement('link')
          if (
            ((d.rel = a ? 'stylesheet' : zv),
            a || (d.as = 'script'),
            (d.crossOrigin = ''),
            (d.href = l),
            s && d.setAttribute('nonce', s),
            document.head.appendChild(d),
            a)
          )
            return new Promise((p, f) => {
              d.addEventListener('load', p),
                d.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${l}`)))
            })
        }),
      )
    }
    return o
      .then(() => t())
      .catch((i) => {
        const s = new Event('vite:preloadError', { cancelable: !0 })
        if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented)) throw i
      })
  }
function Iv({ children: e }) {
  return c.jsx('main', {
    className: 'w-full flex-1 px-4 pb-12 md:px-6 md:pb-20 lg:pb-28',
    children: c.jsx('div', { className: 'container grid gap-8', children: e }),
  })
}
function Fv(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t)
}
function Sa(...e) {
  return (t) => e.forEach((n) => Fv(n, t))
}
function mt(...e) {
  return S.useCallback(Sa(...e), e)
}
var Jr = S.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = S.Children.toArray(n),
    i = o.find(Ov)
  if (i) {
    const s = i.props.children,
      l = o.map((a) =>
        a === i ? (S.Children.count(s) > 1 ? S.Children.only(null) : S.isValidElement(s) ? s.props.children : null) : a,
      )
    return c.jsx(pl, { ...r, ref: t, children: S.isValidElement(s) ? S.cloneElement(s, void 0, l) : null })
  }
  return c.jsx(pl, { ...r, ref: t, children: n })
})
Jr.displayName = 'Slot'
var pl = S.forwardRef((e, t) => {
  const { children: n, ...r } = e
  if (S.isValidElement(n)) {
    const o = Av(n)
    return S.cloneElement(n, { ...Dv(r, n.props), ref: t ? Sa(t, o) : o })
  }
  return S.Children.count(n) > 1 ? S.Children.only(null) : null
})
pl.displayName = 'SlotClone'
var bv = ({ children: e }) => c.jsx(c.Fragment, { children: e })
function Ov(e) {
  return S.isValidElement(e) && e.type === bv
}
function Dv(e, t) {
  const n = { ...t }
  for (const r in t) {
    const o = e[r],
      i = t[r]
    ;/^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l)
          })
        : o && (n[r] = o)
      : r === 'style'
        ? (n[r] = { ...o, ...i })
        : r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '))
  }
  return { ...e, ...n }
}
function Av(e) {
  var r, o
  let t = (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null ? void 0 : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning
  return n
    ? e.ref
    : ((t = (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null ? void 0 : o.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref)
}
function Qf(e) {
  var t,
    n,
    r = ''
  if (typeof e == 'string' || typeof e == 'number') r += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Qf(e[t])) && (r && (r += ' '), (r += n))
    else for (t in e) e[t] && (r && (r += ' '), (r += t))
  return r
}
function Uv() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Qf(e)) && (r && (r += ' '), (r += t))
  return r
}
const Ju = (e) => (typeof e == 'boolean' ? ''.concat(e) : e === 0 ? '0' : e),
  qu = Uv,
  Yf = (e, t) => (n) => {
    var r
    if ((t == null ? void 0 : t.variants) == null)
      return qu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          p = i == null ? void 0 : i[u]
        if (d === null) return null
        const f = Ju(d) || Ju(p)
        return o[u][f]
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [p, f] = d
          return f === void 0 || (u[p] = f), u
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: p, className: f, ...y } = d
              return Object.entries(y).every((g) => {
                let [x, k] = g
                return Array.isArray(k) ? k.includes({ ...i, ...l }[x]) : { ...i, ...l }[x] === k
              })
                ? [...u, p, f]
                : u
            }, [])
    return qu(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
  }
function Xf(e) {
  var t,
    n,
    r = ''
  if (typeof e == 'string' || typeof e == 'number') r += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length
      for (t = 0; t < o; t++) e[t] && (n = Xf(e[t])) && (r && (r += ' '), (r += n))
    } else for (n in e) e[n] && (r && (r += ' '), (r += n))
  return r
}
function fe() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Xf(e)) && (r && (r += ' '), (r += t))
  return r
}
const ka = '-',
  Bv = (e) => {
    const t = Wv(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e
    return {
      getClassGroupId: (s) => {
        const l = s.split(ka)
        return l[0] === '' && l.length !== 1 && l.shift(), Zf(l, t) || Vv(s)
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || []
        return l && r[s] ? [...a, ...r[s]] : a
      },
    }
  },
  Zf = (e, t) => {
    var s
    if (e.length === 0) return t.classGroupId
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Zf(e.slice(1), r) : void 0
    if (o) return o
    if (t.validators.length === 0) return
    const i = e.join(ka)
    return (s = t.validators.find(({ validator: l }) => l(i))) == null ? void 0 : s.classGroupId
  },
  ec = /^\[(.+)\]$/,
  Vv = (e) => {
    if (ec.test(e)) {
      const t = ec.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(':'))
      if (n) return 'arbitrary..' + n
    }
  },
  Wv = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] }
    return (
      Kv(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        hl(s, r, i, t)
      }),
      r
    )
  },
  hl = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == 'string') {
        const i = o === '' ? t : tc(t, o)
        i.classGroupId = n
        return
      }
      if (typeof o == 'function') {
        if (Hv(o)) {
          hl(o(r), t, n, r)
          return
        }
        t.validators.push({ validator: o, classGroupId: n })
        return
      }
      Object.entries(o).forEach(([i, s]) => {
        hl(s, tc(t, i), n, r)
      })
    })
  },
  tc = (e, t) => {
    let n = e
    return (
      t.split(ka).forEach((r) => {
        n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }), (n = n.nextPart.get(r))
      }),
      n
    )
  },
  Hv = (e) => e.isThemeGetter,
  Kv = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == 'string'
              ? t + i
              : typeof i == 'object'
                ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l]))
                : i,
          )
          return [n, o]
        })
      : e,
  Gv = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} }
    let t = 0,
      n = new Map(),
      r = new Map()
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()))
    }
    return {
      get(i) {
        let s = n.get(i)
        if (s !== void 0) return s
        if ((s = r.get(i)) !== void 0) return o(i, s), s
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s)
      },
    }
  },
  Jf = '!',
  Qv = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = []
        let u = 0,
          d = 0,
          p
        for (let k = 0; k < l.length; k++) {
          let h = l[k]
          if (u === 0) {
            if (h === o && (r || l.slice(k, k + i) === t)) {
              a.push(l.slice(d, k)), (d = k + i)
              continue
            }
            if (h === '/') {
              p = k
              continue
            }
          }
          h === '[' ? u++ : h === ']' && u--
        }
        const f = a.length === 0 ? l : l.substring(d),
          y = f.startsWith(Jf),
          g = y ? f.substring(1) : f,
          x = p && p > d ? p - d : void 0
        return { modifiers: a, hasImportantModifier: y, baseClassName: g, maybePostfixModifierPosition: x }
      }
    return n ? (l) => n({ className: l, parseClassName: s }) : s
  },
  Yv = (e) => {
    if (e.length <= 1) return e
    const t = []
    let n = []
    return (
      e.forEach((r) => {
        r[0] === '[' ? (t.push(...n.sort(), r), (n = [])) : n.push(r)
      }),
      t.push(...n.sort()),
      t
    )
  },
  Xv = (e) => ({ cache: Gv(e.cacheSize), parseClassName: Qv(e), ...Bv(e) }),
  Zv = /\s+/,
  Jv = (e, t) => {
    const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
      i = [],
      s = e.trim().split(Zv)
    let l = ''
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        { modifiers: d, hasImportantModifier: p, baseClassName: f, maybePostfixModifierPosition: y } = n(u)
      let g = !!y,
        x = r(g ? f.substring(0, y) : f)
      if (!x) {
        if (!g) {
          l = u + (l.length > 0 ? ' ' + l : l)
          continue
        }
        if (((x = r(f)), !x)) {
          l = u + (l.length > 0 ? ' ' + l : l)
          continue
        }
        g = !1
      }
      const k = Yv(d).join(':'),
        h = p ? k + Jf : k,
        m = h + x
      if (i.includes(m)) continue
      i.push(m)
      const v = o(x, g)
      for (let w = 0; w < v.length; ++w) {
        const E = v[w]
        i.push(h + E)
      }
      l = u + (l.length > 0 ? ' ' + l : l)
    }
    return l
  }
function qv() {
  let e = 0,
    t,
    n,
    r = ''
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = qf(t)) && (r && (r += ' '), (r += n))
  return r
}
const qf = (e) => {
  if (typeof e == 'string') return e
  let t,
    n = ''
  for (let r = 0; r < e.length; r++) e[r] && (t = qf(e[r])) && (n && (n += ' '), (n += t))
  return n
}
function eg(e, ...t) {
  let n,
    r,
    o,
    i = s
  function s(a) {
    const u = t.reduce((d, p) => p(d), e())
    return (n = Xv(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a)
  }
  function l(a) {
    const u = r(a)
    if (u) return u
    const d = Jv(a, n)
    return o(a, d), d
  }
  return function () {
    return i(qv.apply(null, arguments))
  }
}
const X = (e) => {
    const t = (n) => n[e] || []
    return (t.isThemeGetter = !0), t
  },
  ep = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  tg = /^\d+\/\d+$/,
  ng = new Set(['px', 'full', 'screen']),
  rg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  og =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ig = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  sg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  lg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  gt = (e) => Wn(e) || ng.has(e) || tg.test(e),
  Tt = (e) => lr(e, 'length', mg),
  Wn = (e) => !!e && !Number.isNaN(Number(e)),
  ys = (e) => lr(e, 'number', Wn),
  gr = (e) => !!e && Number.isInteger(Number(e)),
  ag = (e) => e.endsWith('%') && Wn(e.slice(0, -1)),
  O = (e) => ep.test(e),
  zt = (e) => rg.test(e),
  ug = new Set(['length', 'size', 'percentage']),
  cg = (e) => lr(e, ug, tp),
  dg = (e) => lr(e, 'position', tp),
  fg = new Set(['image', 'url']),
  pg = (e) => lr(e, fg, gg),
  hg = (e) => lr(e, '', vg),
  yr = () => !0,
  lr = (e, t, n) => {
    const r = ep.exec(e)
    return r ? (r[1] ? (typeof t == 'string' ? r[1] === t : t.has(r[1])) : n(r[2])) : !1
  },
  mg = (e) => og.test(e) && !ig.test(e),
  tp = () => !1,
  vg = (e) => sg.test(e),
  gg = (e) => lg.test(e),
  yg = () => {
    const e = X('colors'),
      t = X('spacing'),
      n = X('blur'),
      r = X('brightness'),
      o = X('borderColor'),
      i = X('borderRadius'),
      s = X('borderSpacing'),
      l = X('borderWidth'),
      a = X('contrast'),
      u = X('grayscale'),
      d = X('hueRotate'),
      p = X('invert'),
      f = X('gap'),
      y = X('gradientColorStops'),
      g = X('gradientColorStopPositions'),
      x = X('inset'),
      k = X('margin'),
      h = X('opacity'),
      m = X('padding'),
      v = X('saturate'),
      w = X('scale'),
      E = X('sepia'),
      _ = X('skew'),
      j = X('space'),
      P = X('translate'),
      C = () => ['auto', 'contain', 'none'],
      M = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      b = () => ['auto', O, t],
      $ = () => [O, t],
      K = () => ['', gt, Tt],
      D = () => ['auto', Wn, O],
      H = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'],
      U = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      q = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      R = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
      T = () => ['', '0', O],
      z = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      I = () => [Wn, O]
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [yr],
        spacing: [gt, Tt],
        blur: ['none', '', zt, O],
        brightness: I(),
        borderColor: [e],
        borderRadius: ['none', '', 'full', zt, O],
        borderSpacing: $(),
        borderWidth: K(),
        contrast: I(),
        grayscale: T(),
        hueRotate: I(),
        invert: T(),
        gap: $(),
        gradientColorStops: [e],
        gradientColorStopPositions: [ag, Tt],
        inset: b(),
        margin: b(),
        opacity: I(),
        padding: $(),
        saturate: I(),
        scale: I(),
        sepia: T(),
        skew: I(),
        space: $(),
        translate: $(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', O] }],
        container: ['container'],
        columns: [{ columns: [zt] }],
        'break-after': [{ 'break-after': z() }],
        'break-before': [{ 'break-before': z() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: [...H(), O] }],
        overflow: [{ overflow: M() }],
        'overflow-x': [{ 'overflow-x': M() }],
        'overflow-y': [{ 'overflow-y': M() }],
        overscroll: [{ overscroll: C() }],
        'overscroll-x': [{ 'overscroll-x': C() }],
        'overscroll-y': [{ 'overscroll-y': C() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [x] }],
        'inset-x': [{ 'inset-x': [x] }],
        'inset-y': [{ 'inset-y': [x] }],
        start: [{ start: [x] }],
        end: [{ end: [x] }],
        top: [{ top: [x] }],
        right: [{ right: [x] }],
        bottom: [{ bottom: [x] }],
        left: [{ left: [x] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', gr, O] }],
        basis: [{ basis: b() }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', O] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ['first', 'last', 'none', gr, O] }],
        'grid-cols': [{ 'grid-cols': [yr] }],
        'col-start-end': [{ col: ['auto', { span: ['full', gr, O] }, O] }],
        'col-start': [{ 'col-start': D() }],
        'col-end': [{ 'col-end': D() }],
        'grid-rows': [{ 'grid-rows': [yr] }],
        'row-start-end': [{ row: ['auto', { span: [gr, O] }, O] }],
        'row-start': [{ 'row-start': D() }],
        'row-end': [{ 'row-end': D() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', O] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', O] }],
        gap: [{ gap: [f] }],
        'gap-x': [{ 'gap-x': [f] }],
        'gap-y': [{ 'gap-y': [f] }],
        'justify-content': [{ justify: ['normal', ...R()] }],
        'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
        'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        'align-content': [{ content: ['normal', ...R(), 'baseline'] }],
        'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
        'place-content': [{ 'place-content': [...R(), 'baseline'] }],
        'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        'space-x': [{ 'space-x': [j] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [j] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', O, t] }],
        'min-w': [{ 'min-w': [O, t, 'min', 'max', 'fit'] }],
        'max-w': [{ 'max-w': [O, t, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [zt] }, zt] }],
        h: [{ h: [O, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [{ 'min-h': [O, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'max-h': [{ 'max-h': [O, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        size: [{ size: [O, t, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', zt, Tt] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [
          { font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', ys] },
        ],
        'font-family': [{ font: [yr] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
        tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', O] }],
        'line-clamp': [{ 'line-clamp': ['none', Wn, ys] }],
        leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', gt, O] }],
        'list-image': [{ 'list-image': ['none', O] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', O] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [e] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [h] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'text-color': [{ text: [e] }],
        'text-opacity': [{ 'text-opacity': [h] }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...U(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: ['auto', 'from-font', gt, Tt] }],
        'underline-offset': [{ 'underline-offset': ['auto', gt, O] }],
        'text-decoration-color': [{ decoration: [e] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: $() }],
        'vertical-align': [
          { align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', O] },
        ],
        whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', O] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [h] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...H(), dg] }],
        'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', cg] }],
        'bg-image': [{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, pg] }],
        'bg-color': [{ bg: [e] }],
        'gradient-from-pos': [{ from: [g] }],
        'gradient-via-pos': [{ via: [g] }],
        'gradient-to-pos': [{ to: [g] }],
        'gradient-from': [{ from: [y] }],
        'gradient-via': [{ via: [y] }],
        'gradient-to': [{ to: [y] }],
        rounded: [{ rounded: [i] }],
        'rounded-s': [{ 'rounded-s': [i] }],
        'rounded-e': [{ 'rounded-e': [i] }],
        'rounded-t': [{ 'rounded-t': [i] }],
        'rounded-r': [{ 'rounded-r': [i] }],
        'rounded-b': [{ 'rounded-b': [i] }],
        'rounded-l': [{ 'rounded-l': [i] }],
        'rounded-ss': [{ 'rounded-ss': [i] }],
        'rounded-se': [{ 'rounded-se': [i] }],
        'rounded-ee': [{ 'rounded-ee': [i] }],
        'rounded-es': [{ 'rounded-es': [i] }],
        'rounded-tl': [{ 'rounded-tl': [i] }],
        'rounded-tr': [{ 'rounded-tr': [i] }],
        'rounded-br': [{ 'rounded-br': [i] }],
        'rounded-bl': [{ 'rounded-bl': [i] }],
        'border-w': [{ border: [l] }],
        'border-w-x': [{ 'border-x': [l] }],
        'border-w-y': [{ 'border-y': [l] }],
        'border-w-s': [{ 'border-s': [l] }],
        'border-w-e': [{ 'border-e': [l] }],
        'border-w-t': [{ 'border-t': [l] }],
        'border-w-r': [{ 'border-r': [l] }],
        'border-w-b': [{ 'border-b': [l] }],
        'border-w-l': [{ 'border-l': [l] }],
        'border-opacity': [{ 'border-opacity': [h] }],
        'border-style': [{ border: [...U(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [l] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [l] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [h] }],
        'divide-style': [{ divide: U() }],
        'border-color': [{ border: [o] }],
        'border-color-x': [{ 'border-x': [o] }],
        'border-color-y': [{ 'border-y': [o] }],
        'border-color-t': [{ 'border-t': [o] }],
        'border-color-r': [{ 'border-r': [o] }],
        'border-color-b': [{ 'border-b': [o] }],
        'border-color-l': [{ 'border-l': [o] }],
        'divide-color': [{ divide: [o] }],
        'outline-style': [{ outline: ['', ...U()] }],
        'outline-offset': [{ 'outline-offset': [gt, O] }],
        'outline-w': [{ outline: [gt, Tt] }],
        'outline-color': [{ outline: [e] }],
        'ring-w': [{ ring: K() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [e] }],
        'ring-opacity': [{ 'ring-opacity': [h] }],
        'ring-offset-w': [{ 'ring-offset': [gt, Tt] }],
        'ring-offset-color': [{ 'ring-offset': [e] }],
        shadow: [{ shadow: ['', 'inner', 'none', zt, hg] }],
        'shadow-color': [{ shadow: [yr] }],
        opacity: [{ opacity: [h] }],
        'mix-blend': [{ 'mix-blend': [...q(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': q() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', zt, O] }],
        grayscale: [{ grayscale: [u] }],
        'hue-rotate': [{ 'hue-rotate': [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [E] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [n] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [a] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [d] }],
        'backdrop-invert': [{ 'backdrop-invert': [p] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [h] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [v] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [E] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [s] }],
        'border-spacing-x': [{ 'border-spacing-x': [s] }],
        'border-spacing-y': [{ 'border-spacing-y': [s] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', O] }],
        duration: [{ duration: I() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', O] }],
        delay: [{ delay: I() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', O] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [w] }],
        'scale-x': [{ 'scale-x': [w] }],
        'scale-y': [{ 'scale-y': [w] }],
        rotate: [{ rotate: [gr, O] }],
        'translate-x': [{ 'translate-x': [P] }],
        'translate-y': [{ 'translate-y': [P] }],
        'skew-x': [{ 'skew-x': [_] }],
        'skew-y': [{ 'skew-y': [_] }],
        'transform-origin': [
          {
            origin: [
              'center',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
              O,
            ],
          },
        ],
        accent: [{ accent: ['auto', e] }],
        appearance: [{ appearance: ['none', 'auto'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              O,
            ],
          },
        ],
        'caret-color': [{ caret: [e] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': $() }],
        'scroll-mx': [{ 'scroll-mx': $() }],
        'scroll-my': [{ 'scroll-my': $() }],
        'scroll-ms': [{ 'scroll-ms': $() }],
        'scroll-me': [{ 'scroll-me': $() }],
        'scroll-mt': [{ 'scroll-mt': $() }],
        'scroll-mr': [{ 'scroll-mr': $() }],
        'scroll-mb': [{ 'scroll-mb': $() }],
        'scroll-ml': [{ 'scroll-ml': $() }],
        'scroll-p': [{ 'scroll-p': $() }],
        'scroll-px': [{ 'scroll-px': $() }],
        'scroll-py': [{ 'scroll-py': $() }],
        'scroll-ps': [{ 'scroll-ps': $() }],
        'scroll-pe': [{ 'scroll-pe': $() }],
        'scroll-pt': [{ 'scroll-pt': $() }],
        'scroll-pr': [{ 'scroll-pr': $() }],
        'scroll-pb': [{ 'scroll-pb': $() }],
        'scroll-pl': [{ 'scroll-pl': $() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', O] }],
        fill: [{ fill: [e, 'none'] }],
        'stroke-w': [{ stroke: [gt, Tt, ys] }],
        stroke: [{ stroke: [e, 'none'] }],
        sr: ['sr-only', 'not-sr-only'],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
    }
  },
  xg = eg(yg)
function Pt(...e) {
  return xg(fe(e))
}
const wg = Yf(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
          destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
          outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
          secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-9 px-4 py-2',
          sm: 'h-8 rounded-md px-3 text-xs',
          lg: 'h-10 rounded-md px-8',
          icon: 'h-9 w-9',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    },
  ),
  ml = S.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
    const s = r ? Jr : 'button'
    return c.jsx(s, { className: Pt(wg({ variant: t, size: n, className: e })), ref: i, ...o })
  })
ml.displayName = 'Button'
function Sg() {
  return c.jsxs('footer', {
    className: 'flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6',
    children: [
      c.jsx('p', {
        className: 'text-xs text-muted-foreground',
        children: '© 2024 Nickel Mattera. All rights reserved.',
      }),
      c.jsxs('nav', {
        className: 'flex gap-4 sm:ml-auto sm:gap-6',
        children: [
          c.jsx('a', {
            href: 'https://linkedin.com/in/nickelmattera',
            target: '_blank',
            className: 'text-xs underline-offset-4 hover:underline',
            children: 'LinkedIn',
          }),
          c.jsx('a', {
            href: 'https://github.com/NicholeMattera',
            target: '_blank',
            className: 'text-xs underline-offset-4 hover:underline',
            children: 'GitHub',
          }),
          c.jsx('a', {
            href: 'https://www.goodreads.com/nickelmattera',
            target: '_blank',
            className: 'text-xs underline-offset-4 hover:underline',
            children: 'Goodreads',
          }),
          c.jsx('a', {
            href: 'https://www.mountainproject.com/user/201597317/nickel-mattera',
            target: '_blank',
            className: 'text-xs underline-offset-4 hover:underline',
            children: 'Mountain Project',
          }),
        ],
      }),
    ],
  })
}
function kg({ children: e, title: t, description: n, image: r, imageSet: o }) {
  const i = S.useId()
  return c.jsx('header', {
    className: 'w-full bg-primary py-12 md:py-20 lg:py-28',
    children: c.jsx('div', {
      className: 'container px-4 md:px-6',
      children: c.jsxs('div', {
        className: 'grid gap-6 lg:grid-cols-2 lg:gap-12',
        children: [
          c.jsx('div', {
            className: 'flex flex-col justify-center space-y-4',
            children: c.jsxs('div', {
              className: 'space-y-2',
              children: [
                c.jsx('h1', {
                  id: i,
                  className:
                    'text-center text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl lg:text-left xl:text-6xl/none',
                  children: t,
                }),
                c.jsx('p', {
                  className: 'text-center text-primary-foreground/80 md:text-xl lg:max-w-[600px] lg:text-left',
                  children: n,
                }),
                e,
              ],
            }),
          }),
          c.jsx('div', {
            className: 'flex justify-center',
            children: c.jsx('img', {
              src: r,
              srcSet: o,
              width: '400',
              height: '400',
              'aria-labelledby': i,
              className: 'mx-auto aspect-square overflow-hidden rounded-full object-cover',
            }),
          }),
        ],
      }),
    }),
  })
}
let Cg = { data: '' },
  Eg = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign((e || document.head).appendChild(document.createElement('style')), {
            innerHTML: ' ',
            id: '_goober',
          })
        ).firstChild
      : e || Cg,
  _g = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  jg = /\/\*[^]*?\*\/|  +/g,
  nc = /\n+/g,
  on = (e, t) => {
    let n = '',
      r = '',
      o = ''
    for (let i in e) {
      let s = e[i]
      i[0] == '@'
        ? i[1] == 'i'
          ? (n = i + ' ' + s + ';')
          : (r += i[1] == 'f' ? on(s, i) : i + '{' + on(s, i[1] == 'k' ? '' : t) + '}')
        : typeof s == 'object'
          ? (r += on(
              s,
              t
                ? t.replace(/([^,])+/g, (l) =>
                    i.replace(/(^:.*)|([^,])+/g, (a) => (/&/.test(a) ? a.replace(/&/g, l) : l ? l + ' ' + a : a)),
                  )
                : i,
            ))
          : s != null &&
            ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, '-$&').toLowerCase()),
            (o += on.p ? on.p(i, s) : i + ':' + s + ';'))
    }
    return n + (t && o ? t + '{' + o + '}' : o) + r
  },
  yt = {},
  np = (e) => {
    if (typeof e == 'object') {
      let t = ''
      for (let n in e) t += n + np(e[n])
      return t
    }
    return e
  },
  Rg = (e, t, n, r, o) => {
    let i = np(e),
      s =
        yt[i] ||
        (yt[i] = ((a) => {
          let u = 0,
            d = 11
          for (; u < a.length; ) d = (101 * d + a.charCodeAt(u++)) >>> 0
          return 'go' + d
        })(i))
    if (!yt[s]) {
      let a =
        i !== e
          ? e
          : ((u) => {
              let d,
                p,
                f = [{}]
              for (; (d = _g.exec(u.replace(jg, ''))); )
                d[4]
                  ? f.shift()
                  : d[3]
                    ? ((p = d[3].replace(nc, ' ').trim()), f.unshift((f[0][p] = f[0][p] || {})))
                    : (f[0][d[1]] = d[2].replace(nc, ' ').trim())
              return f[0]
            })(e)
      yt[s] = on(o ? { ['@keyframes ' + s]: a } : a, n ? '' : '.' + s)
    }
    let l = n && yt.g ? yt.g : null
    return (
      n && (yt.g = yt[s]),
      ((a, u, d, p) => {
        p ? (u.data = u.data.replace(p, a)) : u.data.indexOf(a) === -1 && (u.data = d ? a + u.data : u.data + a)
      })(yt[s], t, r, l),
      s
    )
  },
  Pg = (e, t, n) =>
    e.reduce((r, o, i) => {
      let s = t[i]
      if (s && s.call) {
        let l = s(n),
          a = (l && l.props && l.props.className) || (/^go/.test(l) && l)
        s = a ? '.' + a : l && typeof l == 'object' ? (l.props ? '' : on(l, '')) : l === !1 ? '' : l
      }
      return r + o + (s ?? '')
    }, '')
function tr(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e
  return Rg(
    n.unshift
      ? n.raw
        ? Pg(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})
      : n,
    Eg(t.target),
    t.g,
    t.o,
    t.k,
  )
}
tr.bind({ g: 1 })
tr.bind({ k: 1 })
const Ng = (e) => {
  try {
    const t = localStorage.getItem(e)
    return typeof t == 'string' ? JSON.parse(t) : void 0
  } catch {
    return
  }
}
function gi(e, t) {
  const [n, r] = V.useState()
  V.useEffect(() => {
    const i = Ng(e)
    r(typeof i > 'u' || i === null ? (typeof t == 'function' ? t() : t) : i)
  }, [t, e])
  const o = V.useCallback(
    (i) => {
      r((s) => {
        let l = i
        typeof i == 'function' && (l = i(s))
        try {
          localStorage.setItem(e, JSON.stringify(l))
        } catch {}
        return l
      })
    },
    [e],
  )
  return [n, o]
}
const Mg = typeof window > 'u'
function vl(e) {
  const t = { pending: 'yellow', success: 'green', error: 'red', notFound: 'purple', redirected: 'gray' }
  return e.isFetching && e.status === 'success' ? (e.isFetching === 'beforeLoad' ? 'purple' : 'blue') : t[e.status]
}
function Lg(e, t) {
  const n = e.find((r) => r.routeId === t.id)
  return n ? vl(n) : 'gray'
}
function rp() {
  const e = V.useRef(!1),
    t = V.useCallback(() => e.current, [])
  return (
    V[Mg ? 'useEffect' : 'useLayoutEffect'](
      () => (
        (e.current = !0),
        () => {
          e.current = !1
        }
      ),
      [],
    ),
    t
  )
}
const Tg = (e) => {
  const t = Object.getOwnPropertyNames(Object(e)),
    n = typeof e == 'bigint' ? `${e.toString()}n` : e
  try {
    return JSON.stringify(n, t)
  } catch {
    return 'unable to stringify'
  }
}
function rc(e) {
  const t = rp(),
    [n, r] = V.useState(e),
    o = V.useCallback(
      (i) => {
        zg(() => {
          t() && r(i)
        })
      },
      [t],
    )
  return [n, o]
}
function zg(e) {
  Promise.resolve()
    .then(e)
    .catch((t) =>
      setTimeout(() => {
        throw t
      }),
    )
}
function $g(e, t = [(n) => n]) {
  return e
    .map((n, r) => [n, r])
    .sort(([n, r], [o, i]) => {
      for (const s of t) {
        const l = s(n),
          a = s(o)
        if (typeof l > 'u') {
          if (typeof a > 'u') continue
          return 1
        }
        if (l !== a) return l > a ? 1 : -1
      }
      return r - i
    })
    .map(([n]) => n)
}
const G = {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      neutral: {
        50: '#f9fafb',
        100: '#f2f4f7',
        200: '#eaecf0',
        300: '#d0d5dd',
        400: '#98a2b3',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#1d2939',
        900: '#101828',
      },
      darkGray: {
        50: '#525c7a',
        100: '#49536e',
        200: '#414962',
        300: '#394056',
        400: '#313749',
        500: '#292e3d',
        600: '#212530',
        700: '#191c24',
        800: '#111318',
        900: '#0b0d10',
      },
      gray: {
        50: '#f9fafb',
        100: '#f2f4f7',
        200: '#eaecf0',
        300: '#d0d5dd',
        400: '#98a2b3',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#1d2939',
        900: '#101828',
      },
      blue: {
        25: '#F5FAFF',
        50: '#EFF8FF',
        100: '#D1E9FF',
        200: '#B2DDFF',
        300: '#84CAFF',
        400: '#53B1FD',
        500: '#2E90FA',
        600: '#1570EF',
        700: '#175CD3',
        800: '#1849A9',
        900: '#194185',
      },
      green: {
        25: '#F6FEF9',
        50: '#ECFDF3',
        100: '#D1FADF',
        200: '#A6F4C5',
        300: '#6CE9A6',
        400: '#32D583',
        500: '#12B76A',
        600: '#039855',
        700: '#027A48',
        800: '#05603A',
        900: '#054F31',
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a',
      },
      yellow: {
        25: '#FFFCF5',
        50: '#FFFAEB',
        100: '#FEF0C7',
        200: '#FEDF89',
        300: '#FEC84B',
        400: '#FDB022',
        500: '#F79009',
        600: '#DC6803',
        700: '#B54708',
        800: '#93370D',
        900: '#7A2E0E',
      },
      purple: {
        25: '#FAFAFF',
        50: '#F4F3FF',
        100: '#EBE9FE',
        200: '#D9D6FE',
        300: '#BDB4FE',
        400: '#9B8AFB',
        500: '#7A5AF8',
        600: '#6938EF',
        700: '#5925DC',
        800: '#4A1FB8',
        900: '#3E1C96',
      },
      teal: {
        25: '#F6FEFC',
        50: '#F0FDF9',
        100: '#CCFBEF',
        200: '#99F6E0',
        300: '#5FE9D0',
        400: '#2ED3B7',
        500: '#15B79E',
        600: '#0E9384',
        700: '#107569',
        800: '#125D56',
        900: '#134E48',
      },
      pink: {
        25: '#fdf2f8',
        50: '#fce7f3',
        100: '#fbcfe8',
        200: '#f9a8d4',
        300: '#f472b6',
        400: '#ec4899',
        500: '#db2777',
        600: '#be185d',
        700: '#9d174d',
        800: '#831843',
        900: '#500724',
      },
      cyan: {
        25: '#ecfeff',
        50: '#cffafe',
        100: '#a5f3fc',
        200: '#67e8f9',
        300: '#22d3ee',
        400: '#06b6d4',
        500: '#0891b2',
        600: '#0e7490',
        700: '#155e75',
        800: '#164e63',
        900: '#083344',
      },
    },
    alpha: {
      100: 'ff',
      90: 'e5',
      80: 'cc',
      70: 'b3',
      60: '99',
      50: '80',
      40: '66',
      30: '4d',
      20: '33',
      10: '1a',
      0: '00',
    },
    font: {
      size: {
        '2xs': 'calc(var(--tsrd-font-size) * 0.625)',
        xs: 'calc(var(--tsrd-font-size) * 0.75)',
        sm: 'calc(var(--tsrd-font-size) * 0.875)',
        md: 'var(--tsrd-font-size)',
        lg: 'calc(var(--tsrd-font-size) * 1.125)',
        xl: 'calc(var(--tsrd-font-size) * 1.25)',
        '2xl': 'calc(var(--tsrd-font-size) * 1.5)',
        '3xl': 'calc(var(--tsrd-font-size) * 1.875)',
        '4xl': 'calc(var(--tsrd-font-size) * 2.25)',
        '5xl': 'calc(var(--tsrd-font-size) * 3)',
        '6xl': 'calc(var(--tsrd-font-size) * 3.75)',
        '7xl': 'calc(var(--tsrd-font-size) * 4.5)',
        '8xl': 'calc(var(--tsrd-font-size) * 6)',
        '9xl': 'calc(var(--tsrd-font-size) * 8)',
      },
      lineHeight: {
        '3xs': 'calc(var(--tsrd-font-size) * 0.75)',
        '2xs': 'calc(var(--tsrd-font-size) * 0.875)',
        xs: 'calc(var(--tsrd-font-size) * 1)',
        sm: 'calc(var(--tsrd-font-size) * 1.25)',
        md: 'calc(var(--tsrd-font-size) * 1.5)',
        lg: 'calc(var(--tsrd-font-size) * 1.75)',
        xl: 'calc(var(--tsrd-font-size) * 2)',
        '2xl': 'calc(var(--tsrd-font-size) * 2.25)',
        '3xl': 'calc(var(--tsrd-font-size) * 2.5)',
        '4xl': 'calc(var(--tsrd-font-size) * 2.75)',
        '5xl': 'calc(var(--tsrd-font-size) * 3)',
        '6xl': 'calc(var(--tsrd-font-size) * 3.25)',
        '7xl': 'calc(var(--tsrd-font-size) * 3.5)',
        '8xl': 'calc(var(--tsrd-font-size) * 3.75)',
        '9xl': 'calc(var(--tsrd-font-size) * 4)',
      },
      weight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontFamily: {
        sans: 'ui-sans-serif, Inter, system-ui, sans-serif, sans-serif',
        mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
    },
    breakpoints: { xs: '320px', sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
    border: {
      radius: {
        none: '0px',
        xs: 'calc(var(--tsrd-font-size) * 0.125)',
        sm: 'calc(var(--tsrd-font-size) * 0.25)',
        md: 'calc(var(--tsrd-font-size) * 0.375)',
        lg: 'calc(var(--tsrd-font-size) * 0.5)',
        xl: 'calc(var(--tsrd-font-size) * 0.75)',
        '2xl': 'calc(var(--tsrd-font-size) * 1)',
        '3xl': 'calc(var(--tsrd-font-size) * 1.5)',
        full: '9999px',
      },
    },
    size: {
      0: '0px',
      0.25: 'calc(var(--tsrd-font-size) * 0.0625)',
      0.5: 'calc(var(--tsrd-font-size) * 0.125)',
      1: 'calc(var(--tsrd-font-size) * 0.25)',
      1.5: 'calc(var(--tsrd-font-size) * 0.375)',
      2: 'calc(var(--tsrd-font-size) * 0.5)',
      2.5: 'calc(var(--tsrd-font-size) * 0.625)',
      3: 'calc(var(--tsrd-font-size) * 0.75)',
      3.5: 'calc(var(--tsrd-font-size) * 0.875)',
      4: 'calc(var(--tsrd-font-size) * 1)',
      4.5: 'calc(var(--tsrd-font-size) * 1.125)',
      5: 'calc(var(--tsrd-font-size) * 1.25)',
      5.5: 'calc(var(--tsrd-font-size) * 1.375)',
      6: 'calc(var(--tsrd-font-size) * 1.5)',
      6.5: 'calc(var(--tsrd-font-size) * 1.625)',
      7: 'calc(var(--tsrd-font-size) * 1.75)',
      8: 'calc(var(--tsrd-font-size) * 2)',
      9: 'calc(var(--tsrd-font-size) * 2.25)',
      10: 'calc(var(--tsrd-font-size) * 2.5)',
      11: 'calc(var(--tsrd-font-size) * 2.75)',
      12: 'calc(var(--tsrd-font-size) * 3)',
      14: 'calc(var(--tsrd-font-size) * 3.5)',
      16: 'calc(var(--tsrd-font-size) * 4)',
      20: 'calc(var(--tsrd-font-size) * 5)',
      24: 'calc(var(--tsrd-font-size) * 6)',
      28: 'calc(var(--tsrd-font-size) * 7)',
      32: 'calc(var(--tsrd-font-size) * 8)',
      36: 'calc(var(--tsrd-font-size) * 9)',
      40: 'calc(var(--tsrd-font-size) * 10)',
      44: 'calc(var(--tsrd-font-size) * 11)',
      48: 'calc(var(--tsrd-font-size) * 12)',
      52: 'calc(var(--tsrd-font-size) * 13)',
      56: 'calc(var(--tsrd-font-size) * 14)',
      60: 'calc(var(--tsrd-font-size) * 15)',
      64: 'calc(var(--tsrd-font-size) * 16)',
      72: 'calc(var(--tsrd-font-size) * 18)',
      80: 'calc(var(--tsrd-font-size) * 20)',
      96: 'calc(var(--tsrd-font-size) * 24)',
    },
    shadow: {
      xs: (e = 'rgb(0 0 0 / 0.1)') => '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      sm: (e = 'rgb(0 0 0 / 0.1)') => `0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,
      md: (e = 'rgb(0 0 0 / 0.1)') => `0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,
      lg: (e = 'rgb(0 0 0 / 0.1)') => `0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,
      xl: (e = 'rgb(0 0 0 / 0.1)') => `0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,
      '2xl': (e = 'rgb(0 0 0 / 0.25)') => `0 25px 50px -12px ${e}`,
      inner: (e = 'rgb(0 0 0 / 0.05)') => `inset 0 2px 4px 0 ${e}`,
      none: () => 'none',
    },
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1e3,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
  },
  Di = V.createContext(void 0),
  Ca = V.createContext(void 0),
  Ig = () => {
    const e = V.useContext(Ca)
    if (!e) throw new Error('useDevtoolsOnClose must be used within a TanStackRouterDevtools component')
    return e
  },
  oc = ({ expanded: e, style: t = {} }) => {
    const n = op()
    return c.jsx('span', {
      className: n.expander,
      children: c.jsx('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '12',
        height: '12',
        fill: 'none',
        viewBox: '0 0 24 24',
        className: fe(n.expanderIcon(e)),
        children: c.jsx('path', {
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2',
          d: 'M9 18l6-6-6-6',
        }),
      }),
    })
  }
function Fg(e, t) {
  if (t < 1) return []
  let n = 0
  const r = []
  for (; n < e.length; ) r.push(e.slice(n, n + t)), (n = n + t)
  return r
}
const bg = ({
  handleEntry: e,
  label: t,
  value: n,
  subEntries: r = [],
  subEntryPages: o = [],
  type: i,
  expanded: s = !1,
  toggleExpanded: l,
  pageSize: a,
  renderer: u,
}) => {
  const [d, p] = S.useState([]),
    [f, y] = S.useState(void 0),
    g = op(),
    x = () => {
      y(n())
    }
  return c.jsx('div', {
    className: g.entry,
    children: o.length
      ? c.jsxs(c.Fragment, {
          children: [
            c.jsxs('button', {
              className: g.expandButton,
              onClick: () => l(),
              children: [
                c.jsx(oc, { expanded: s }),
                t,
                c.jsxs('span', {
                  className: g.info,
                  children: [
                    String(i).toLowerCase() === 'iterable' ? '(Iterable) ' : '',
                    r.length,
                    ' ',
                    r.length > 1 ? 'items' : 'item',
                  ],
                }),
              ],
            }),
            s
              ? o.length === 1
                ? c.jsx('div', { className: g.subEntries, children: r.map((k, h) => e(k)) })
                : c.jsx('div', {
                    className: g.subEntries,
                    children: o.map((k, h) =>
                      c.jsx(
                        'div',
                        {
                          children: c.jsxs('div', {
                            className: g.entry,
                            children: [
                              c.jsxs('button', {
                                className: fe(g.labelButton, 'labelButton'),
                                onClick: () => p((m) => (m.includes(h) ? m.filter((v) => v !== h) : [...m, h])),
                                children: [
                                  c.jsx(oc, { expanded: d.includes(h) }),
                                  ' ',
                                  '[',
                                  h * a,
                                  ' ...',
                                  ' ',
                                  h * a + a - 1,
                                  ']',
                                ],
                              }),
                              d.includes(h)
                                ? c.jsx('div', { className: g.subEntries, children: k.map((m) => e(m)) })
                                : null,
                            ],
                          }),
                        },
                        h,
                      ),
                    ),
                  })
              : null,
          ],
        })
      : i === 'function'
        ? c.jsx(c.Fragment, {
            children: c.jsx(Fn, {
              renderer: u,
              label: c.jsxs('button', {
                onClick: x,
                className: g.refreshValueBtn,
                children: [c.jsx('span', { children: t }), ' 🔄', ' '],
              }),
              value: f,
              defaultExpanded: {},
            }),
          })
        : c.jsxs(c.Fragment, {
            children: [
              c.jsxs('span', { children: [t, ':'] }),
              ' ',
              c.jsx('span', { className: g.value, children: Tg(n) }),
            ],
          }),
  })
}
function Og(e) {
  return Symbol.iterator in e
}
function Fn({ value: e, defaultExpanded: t, renderer: n = bg, pageSize: r = 100, filterSubEntries: o, ...i }) {
  const [s, l] = S.useState(!!t),
    a = S.useCallback(() => l((y) => !y), [])
  let u = typeof e,
    d = []
  const p = (y) => {
    const g = t === !0 ? { [y.label]: !0 } : t == null ? void 0 : t[y.label]
    return { ...y, defaultExpanded: g }
  }
  Array.isArray(e)
    ? ((u = 'array'), (d = e.map((y, g) => p({ label: g.toString(), value: y }))))
    : e !== null && typeof e == 'object' && Og(e) && typeof e[Symbol.iterator] == 'function'
      ? ((u = 'Iterable'), (d = Array.from(e, (y, g) => p({ label: g.toString(), value: y }))))
      : typeof e == 'object' &&
        e !== null &&
        ((u = 'object'), (d = Object.entries(e).map(([y, g]) => p({ label: y, value: g })))),
    (d = o ? o(d) : d)
  const f = Fg(d, r)
  return n({
    handleEntry: (y) => c.jsx(Fn, { value: e, renderer: n, filterSubEntries: o, ...i, ...y }, y.label),
    type: u,
    subEntries: d,
    subEntryPages: f,
    value: e,
    expanded: s,
    toggleExpanded: a,
    pageSize: r,
    ...i,
  })
}
const Dg = (e) => {
  const { colors: t, font: n, size: r, alpha: o, shadow: i, border: s } = G,
    { fontFamily: l, lineHeight: a, size: u } = n,
    d = e ? tr.bind({ target: e }) : tr
  return {
    entry: d`
      font-family: ${l.mono};
      font-size: ${u.xs};
      line-height: ${a.sm};
      outline: none;
      word-break: break-word;
    `,
    labelButton: d`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,
    expander: d`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,
    expanderIcon: (p) =>
      p
        ? d`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `
        : d`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,
    expandButton: d`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,
    value: d`
      color: ${t.purple[400]};
    `,
    subEntries: d`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,
    info: d`
      color: ${t.gray[500]};
      font-size: ${u['2xs']};
      padding-left: ${r[1]};
    `,
    refreshValueBtn: d`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${l.mono};
      font-size: ${u.xs};
    `,
  }
}
let Ro = null
function op() {
  const e = S.useContext(Di)
  return Ro || ((Ro = Dg(e)), Ro)
}
function ic() {
  const e = V.useId()
  return c.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    enableBackground: 'new 0 0 634 633',
    viewBox: '0 0 634 633',
    children: c.jsxs('g', {
      transform: 'translate(1)',
      children: [
        c.jsxs('linearGradient', {
          id: `a-${e}`,
          x1: '-641.486',
          x2: '-641.486',
          y1: '856.648',
          y2: '855.931',
          gradientTransform: 'matrix(633 0 0 -633 406377 542258)',
          gradientUnits: 'userSpaceOnUse',
          children: [
            c.jsx('stop', { offset: '0', stopColor: '#6bdaff' }),
            c.jsx('stop', { offset: '0.319', stopColor: '#f9ffb5' }),
            c.jsx('stop', { offset: '0.706', stopColor: '#ffa770' }),
            c.jsx('stop', { offset: '1', stopColor: '#ff7373' }),
          ],
        }),
        c.jsx('circle', {
          cx: '316.5',
          cy: '316.5',
          r: '316.5',
          fill: `url(#a-${e})`,
          fillRule: 'evenodd',
          clipRule: 'evenodd',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `b-${e}`,
            width: '454',
            height: '396.9',
            x: '-137.5',
            y: '412',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `c-${e}`,
          width: '454',
          height: '396.9',
          x: '-137.5',
          y: '412',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#b-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '89.5',
          cy: '610.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#00CFE2',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#c-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `d-${e}`,
            width: '454',
            height: '396.9',
            x: '316.5',
            y: '412',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `e-${e}`,
          width: '454',
          height: '396.9',
          x: '316.5',
          y: '412',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#d-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '543.5',
          cy: '610.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#00CFE2',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#e-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `f-${e}`,
            width: '454',
            height: '396.9',
            x: '-137.5',
            y: '450',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `g-${e}`,
          width: '454',
          height: '396.9',
          x: '-137.5',
          y: '450',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#f-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '89.5',
          cy: '648.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#00A8B8',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#g-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `h-${e}`,
            width: '454',
            height: '396.9',
            x: '316.5',
            y: '450',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `i-${e}`,
          width: '454',
          height: '396.9',
          x: '316.5',
          y: '450',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#h-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '543.5',
          cy: '648.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#00A8B8',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#i-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `j-${e}`,
            width: '454',
            height: '396.9',
            x: '-137.5',
            y: '486',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `k-${e}`,
          width: '454',
          height: '396.9',
          x: '-137.5',
          y: '486',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#j-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '89.5',
          cy: '684.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#007782',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#k-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `l-${e}`,
            width: '454',
            height: '396.9',
            x: '316.5',
            y: '486',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `m-${e}`,
          width: '454',
          height: '396.9',
          x: '316.5',
          y: '486',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#l-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '543.5',
          cy: '684.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#007782',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#m-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `n-${e}`,
            width: '176.9',
            height: '129.3',
            x: '272.2',
            y: '308',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `o-${e}`,
          width: '176.9',
          height: '129.3',
          x: '272.2',
          y: '308',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#n-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsxs('g', {
          mask: `url(#o-${e})`,
          children: [
            c.jsx('path', {
              fill: 'none',
              stroke: '#000',
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeWidth: '11',
              d: 'M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1',
            }),
            c.jsxs('linearGradient', {
              id: `p-${e}`,
              x1: '-645.656',
              x2: '-646.499',
              y1: '854.878',
              y2: '854.788',
              gradientTransform: 'matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#ee2700' }),
                c.jsx('stop', { offset: '1', stopColor: '#ff008e' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#p-${e})`,
              fillRule: 'evenodd',
              d: 'M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z',
              clipRule: 'evenodd',
            }),
            c.jsx('path', {
              fill: '#D8D8D8',
              fillRule: 'evenodd',
              stroke: '#FFF',
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeWidth: '7',
              d: 'M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9',
              clipRule: 'evenodd',
            }),
          ],
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `q-${e}`,
            width: '280.6',
            height: '317.4',
            x: '73.2',
            y: '113.9',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `r-${e}`,
          width: '280.6',
          height: '317.4',
          x: '73.2',
          y: '113.9',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#q-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsxs('g', {
          mask: `url(#r-${e})`,
          children: [
            c.jsxs('linearGradient', {
              id: `s-${e}`,
              x1: '-646.8',
              x2: '-646.8',
              y1: '854.844',
              y2: '853.844',
              gradientTransform: 'matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#a17500' }),
                c.jsx('stop', { offset: '1', stopColor: '#5d2100' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#s-${e})`,
              fillRule: 'evenodd',
              d: 'M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `t-${e}`,
              x1: '-635.467',
              x2: '-635.467',
              y1: '852.115',
              y2: '851.115',
              gradientTransform: 'matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#t-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `u-${e}`,
              x1: '-636.573',
              x2: '-636.573',
              y1: '855.444',
              y2: '854.444',
              gradientTransform: 'matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#u-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `v-${e}`,
              x1: '-632.145',
              x2: '-632.145',
              y1: '854.174',
              y2: '853.174',
              gradientTransform: 'matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#v-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `w-${e}`,
              x1: '-638.224',
              x2: '-638.224',
              y1: '853.801',
              y2: '852.801',
              gradientTransform: 'matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#w-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `x-${e}`,
              x1: '-637.723',
              x2: '-637.723',
              y1: '855.103',
              y2: '854.103',
              gradientTransform: 'matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#x-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `y-${e}`,
              x1: '-631.79',
              x2: '-631.79',
              y1: '855.872',
              y2: '854.872',
              gradientTransform: 'matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#y-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z',
              clipRule: 'evenodd',
            }),
            c.jsx('path', {
              fill: 'none',
              stroke: '#2F8A00',
              strokeLinecap: 'round',
              strokeWidth: '8',
              d: 'M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1',
            }),
            c.jsx('path', {
              fill: 'none',
              stroke: '#2F8A00',
              strokeLinecap: 'round',
              strokeWidth: '8',
              d: 'M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32',
            }),
          ],
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `z-${e}`,
            width: '532',
            height: '633',
            x: '50.5',
            y: '399',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `A-${e}`,
          width: '532',
          height: '633',
          x: '50.5',
          y: '399',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#z-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsxs('linearGradient', {
          id: `B-${e}`,
          x1: '-641.104',
          x2: '-641.278',
          y1: '856.577',
          y2: '856.183',
          gradientTransform: 'matrix(532 0 0 -633 341484.5 542657)',
          gradientUnits: 'userSpaceOnUse',
          children: [
            c.jsx('stop', { offset: '0', stopColor: '#fff400' }),
            c.jsx('stop', { offset: '1', stopColor: '#3c8700' }),
          ],
        }),
        c.jsx('ellipse', {
          cx: '316.5',
          cy: '715.5',
          fill: `url(#B-${e})`,
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          mask: `url(#A-${e})`,
          rx: '266',
          ry: '316.5',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `C-${e}`,
            width: '288',
            height: '283',
            x: '391',
            y: '-24',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0' }),
          }),
        }),
        c.jsx('mask', {
          id: `D-${e}`,
          width: '288',
          height: '283',
          x: '391',
          y: '-24',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#C-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('g', {
          mask: `url(#D-${e})`,
          children: c.jsxs('g', {
            transform: 'translate(397 -24)',
            children: [
              c.jsxs('linearGradient', {
                id: `E-${e}`,
                x1: '-1036.672',
                x2: '-1036.672',
                y1: '880.018',
                y2: '879.018',
                gradientTransform: 'matrix(227 0 0 -227 235493 199764)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffdf00' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff9d00' }),
                ],
              }),
              c.jsx('circle', {
                cx: '168.5',
                cy: '113.5',
                r: '113.5',
                fill: `url(#E-${e})`,
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }),
              c.jsxs('linearGradient', {
                id: `F-${e}`,
                x1: '-1017.329',
                x2: '-1018.602',
                y1: '658.003',
                y2: '657.998',
                gradientTransform: 'matrix(30 0 0 -1 30558 771)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#F-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M30 113H0',
              }),
              c.jsxs('linearGradient', {
                id: `G-${e}`,
                x1: '-1014.501',
                x2: '-1015.774',
                y1: '839.985',
                y2: '839.935',
                gradientTransform: 'matrix(26.5 0 0 -5.5 26925 4696.5)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#G-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M33.5 79.5L7 74',
              }),
              c.jsxs('linearGradient', {
                id: `H-${e}`,
                x1: '-1016.59',
                x2: '-1017.862',
                y1: '852.671',
                y2: '852.595',
                gradientTransform: 'matrix(29 0 0 -8 29523 6971)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#H-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M34 146l-29 8',
              }),
              c.jsxs('linearGradient', {
                id: `I-${e}`,
                x1: '-1011.984',
                x2: '-1013.257',
                y1: '863.523',
                y2: '863.229',
                gradientTransform: 'matrix(24 0 0 -13 24339 11407)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#I-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M45 177l-24 13',
              }),
              c.jsxs('linearGradient', {
                id: `J-${e}`,
                x1: '-1006.673',
                x2: '-1007.946',
                y1: '869.279',
                y2: '868.376',
                gradientTransform: 'matrix(20 0 0 -19 20205 16720)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#J-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M67 204l-20 19',
              }),
              c.jsxs('linearGradient', {
                id: `K-${e}`,
                x1: '-992.85',
                x2: '-993.317',
                y1: '871.258',
                y2: '870.258',
                gradientTransform: 'matrix(13.8339 0 0 -22.8467 13825.796 20131.938)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#K-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M94.4 227l-13.8 22.8',
              }),
              c.jsxs('linearGradient', {
                id: `L-${e}`,
                x1: '-953.835',
                x2: '-953.965',
                y1: '871.9',
                y2: '870.9',
                gradientTransform: 'matrix(7.5 0 0 -24.5 7278 21605)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#L-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M127.5 243.5L120 268',
              }),
              c.jsxs('linearGradient', {
                id: `M-${e}`,
                x1: '244.504',
                x2: '244.496',
                y1: '871.898',
                y2: '870.898',
                gradientTransform: 'matrix(.5 0 0 -24.5 45.5 21614)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#M-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M167.5 252.5l.5 24.5',
              }),
            ],
          }),
        }),
      ],
    }),
  })
}
function Ag(e) {
  const { className: t, ...n } = e,
    r = io()
  return c.jsxs('button', {
    ...n,
    className: fe(r.logo, t),
    children: [
      c.jsx('div', { className: r.tanstackLogo, children: 'TANSTACK' }),
      c.jsx('div', { className: r.routerLogo, children: 'React Router v1' }),
    ],
  })
}
function Ug(e) {
  const { shadowDOMTarget: t } = e
  return c.jsx(Di.Provider, { value: t, children: c.jsx(Bg, { ...e }) })
}
function Bg({
  initialIsOpen: e,
  panelProps: t = {},
  closeButtonProps: n = {},
  toggleButtonProps: r = {},
  position: o = 'bottom-left',
  containerElement: i = 'footer',
  router: s,
  shadowDOMTarget: l,
}) {
  const [a, u] = V.useState(),
    d = V.useRef(null),
    [p, f] = gi('tanstackRouterDevtoolsOpen', e),
    [y, g] = gi('tanstackRouterDevtoolsHeight', null),
    [x, k] = rc(!1),
    [h, m] = rc(!1),
    v = rp(),
    w = io(),
    E = (U, q) => {
      if (q.button !== 0) return
      m(!0)
      const R = { originalHeight: (U == null ? void 0 : U.getBoundingClientRect().height) ?? 0, pageY: q.pageY },
        T = (I) => {
          const F = R.pageY - I.pageY,
            te = R.originalHeight + F
          g(te), te < 70 ? f(!1) : f(!0)
        },
        z = () => {
          m(!1), document.removeEventListener('mousemove', T), document.removeEventListener('mouseUp', z)
        }
      document.addEventListener('mousemove', T), document.addEventListener('mouseup', z)
    },
    _ = p ?? !1
  V.useEffect(() => {
    k(p ?? !1)
  }, [p, x, k]),
    V.useEffect(() => {
      var U
      if (x) {
        const q = (U = a == null ? void 0 : a.parentElement) == null ? void 0 : U.style.paddingBottom,
          R = () => {
            var T
            const z = (T = d.current) == null ? void 0 : T.getBoundingClientRect().height
            a != null && a.parentElement && (a.parentElement.style.paddingBottom = `${z}px`)
          }
        if ((R(), typeof window < 'u'))
          return (
            window.addEventListener('resize', R),
            () => {
              window.removeEventListener('resize', R),
                a != null && a.parentElement && typeof q == 'string' && (a.parentElement.style.paddingBottom = q)
            }
          )
      }
    }, [x, a == null ? void 0 : a.parentElement]),
    V.useEffect(() => {
      if (a) {
        const U = a,
          q = getComputedStyle(U).fontSize
        U.style.setProperty('--tsrd-font-size', q)
      }
    }, [a])
  const { style: j = {}, ...P } = t,
    { style: C = {}, onClick: M, ...b } = n,
    { onClick: $, className: K, ...D } = r
  if (!v()) return null
  const H = y ?? 500
  return c.jsxs(i, {
    ref: u,
    className: 'TanStackRouterDevtools',
    children: [
      c.jsx(Ca.Provider, {
        value: { onCloseClick: M ?? (() => {}) },
        children: c.jsx(sp, {
          ref: d,
          ...P,
          router: s,
          className: fe(
            w.devtoolsPanelContainer,
            w.devtoolsPanelContainerVisibility(!!p),
            w.devtoolsPanelContainerResizing(h),
            w.devtoolsPanelContainerAnimation(x, H + 16),
          ),
          style: { height: H, ...j },
          isOpen: x,
          setIsOpen: f,
          handleDragStart: (U) => E(d.current, U),
          shadowDOMTarget: l,
        }),
      }),
      c.jsxs('button', {
        type: 'button',
        ...D,
        'aria-label': 'Open TanStack Router Devtools',
        onClick: (U) => {
          f(!0), $ && $(U)
        },
        className: fe(w.mainCloseBtn, w.mainCloseBtnPosition(o), w.mainCloseBtnAnimation(!_), K),
        children: [
          c.jsxs('div', {
            className: w.mainCloseBtnIconContainer,
            children: [
              c.jsx('div', { className: w.mainCloseBtnIconOuter, children: c.jsx(ic, {}) }),
              c.jsx('div', { className: w.mainCloseBtnIconInner, children: c.jsx(ic, {}) }),
            ],
          }),
          c.jsx('div', { className: w.mainCloseBtnDivider, children: '-' }),
          c.jsx('div', { className: w.routerLogoCloseButton, children: 'TanStack Router' }),
        ],
      }),
    ],
  })
}
V.forwardRef(function (t, n) {
  const { shadowDOMTarget: r } = t
  return c.jsx(Di.Provider, {
    value: r,
    children: c.jsx(Ca.Provider, { value: { onCloseClick: () => {} }, children: c.jsx(sp, { ref: n, ...t }) }),
  })
})
function ip({ router: e, route: t, isRoot: n, activeId: r, setActiveId: o }) {
  var i
  const s = Ce({ router: e }),
    l = io(),
    a = s.pendingMatches || s.matches,
    u = s.matches.find((p) => p.routeId === t.id),
    d = V.useMemo(() => {
      try {
        if (u != null && u.params) {
          const p = u.params,
            f = t.path || fl(t.id)
          if (f.startsWith('$')) {
            const y = f.slice(1)
            if (p[y]) return `(${p[y]})`
          }
        }
        return ''
      } catch {
        return ''
      }
    }, [u, t])
  return c.jsxs('div', {
    children: [
      c.jsxs('div', {
        role: 'button',
        'aria-label': `Open match details for ${t.id}`,
        onClick: () => {
          u && o(r === t.id ? '' : t.id)
        },
        className: fe(l.routesRowContainer(t.id === r, !!u)),
        children: [
          c.jsx('div', { className: fe(l.matchIndicator(Lg(a, t))) }),
          c.jsxs('div', {
            className: fe(l.routesRow(!!u)),
            children: [
              c.jsxs('div', {
                children: [
                  c.jsxs('code', { className: l.code, children: [n ? Se : t.path || fl(t.id), ' '] }),
                  c.jsx('code', { className: l.routeParamInfo, children: d }),
                ],
              }),
              c.jsx(gl, { match: u, router: e }),
            ],
          }),
        ],
      }),
      (i = t.children) != null && i.length
        ? c.jsx('div', {
            className: l.nestedRouteRow(!!n),
            children: [...t.children]
              .sort((p, f) => p.rank - f.rank)
              .map((p) => c.jsx(ip, { router: e, route: p, activeId: r, setActiveId: o }, p.id)),
          })
        : null,
    ],
  })
}
const sp = V.forwardRef(function (t, n) {
  var r, o
  const { isOpen: i = !0, setIsOpen: s, handleDragStart: l, router: a, shadowDOMTarget: u, ...d } = t,
    { onCloseClick: p } = Ig(),
    f = io(),
    { className: y, ...g } = d,
    x = Mt({ warn: !1 }),
    k = a ?? x,
    h = Ce({ router: k })
  je(k)
  const [m, v] = gi('tanstackRouterDevtoolsShowMatches', !0),
    [w, E] = gi('tanstackRouterDevtoolsActiveRouteId', ''),
    _ = V.useMemo(
      () => [...(h.pendingMatches ?? []), ...h.matches, ...h.cachedMatches].find((M) => M.routeId === w || M.id === w),
      [w, h.cachedMatches, h.matches, h.pendingMatches],
    ),
    j = Object.keys(h.location.search).length,
    P = { ...k, state: k.state }
  return c.jsxs('div', {
    ref: n,
    className: fe(f.devtoolsPanel, 'TanStackRouterDevtoolsPanel', y),
    ...g,
    children: [
      l ? c.jsx('div', { className: f.dragHandle, onMouseDown: l }) : null,
      c.jsx('button', {
        className: f.panelCloseBtn,
        onClick: (C) => {
          s(!1), p(C)
        },
        children: c.jsx('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '10',
          height: '6',
          fill: 'none',
          viewBox: '0 0 10 6',
          className: f.panelCloseBtnIcon,
          children: c.jsx('path', {
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.667',
            d: 'M1 1l4 4 4-4',
          }),
        }),
      }),
      c.jsxs('div', {
        className: f.firstContainer,
        children: [
          c.jsx('div', {
            className: f.row,
            children: c.jsx(Ag, {
              'aria-hidden': !0,
              onClick: (C) => {
                s(!1), p(C)
              },
            }),
          }),
          c.jsx('div', {
            className: f.routerExplorerContainer,
            children: c.jsx('div', {
              className: f.routerExplorer,
              children: c.jsx(Fn, {
                label: 'Router',
                value: Object.fromEntries(
                  $g(
                    Object.keys(P),
                    ['state', 'routesById', 'routesByPath', 'flatRoutes', 'options', 'manifest'].map(
                      (C) => (M) => M !== C,
                    ),
                  )
                    .map((C) => [C, P[C]])
                    .filter(
                      (C) =>
                        typeof C[1] != 'function' &&
                        ![
                          '__store',
                          'basepath',
                          'injectedHtml',
                          'subscribers',
                          'latestLoadPromise',
                          'navigateTimeout',
                          'resetNextScroll',
                          'tempLocationKey',
                          'latestLocation',
                          'routeTree',
                          'history',
                        ].includes(C[0]),
                    ),
                ),
                defaultExpanded: { state: {}, context: {}, options: {} },
                filterSubEntries: (C) => C.filter((M) => typeof M.value != 'function'),
              }),
            }),
          }),
        ],
      }),
      c.jsxs('div', {
        className: f.secondContainer,
        children: [
          c.jsxs('div', {
            className: f.matchesContainer,
            children: [
              c.jsxs('div', {
                className: f.detailsHeader,
                children: [
                  c.jsx('span', { children: 'Pathname' }),
                  h.location.maskedLocation
                    ? c.jsx('div', {
                        className: f.maskedBadgeContainer,
                        children: c.jsx('span', { className: f.maskedBadge, children: 'masked' }),
                      })
                    : null,
                ],
              }),
              c.jsxs('div', {
                className: f.detailsContent,
                children: [
                  c.jsx('code', { children: h.location.pathname }),
                  h.location.maskedLocation
                    ? c.jsx('code', { className: f.maskedLocation, children: h.location.maskedLocation.pathname })
                    : null,
                ],
              }),
              c.jsxs('div', {
                className: f.detailsHeader,
                children: [
                  c.jsxs('div', {
                    className: f.routeMatchesToggle,
                    children: [
                      c.jsx('button', {
                        type: 'button',
                        onClick: () => {
                          v(!1)
                        },
                        disabled: !m,
                        className: fe(f.routeMatchesToggleBtn(!m, !0)),
                        children: 'Routes',
                      }),
                      c.jsx('button', {
                        type: 'button',
                        onClick: () => {
                          v(!0)
                        },
                        disabled: m,
                        className: fe(f.routeMatchesToggleBtn(!!m, !1)),
                        children: 'Matches',
                      }),
                    ],
                  }),
                  c.jsx('div', {
                    className: f.detailsHeaderInfo,
                    children: c.jsx('div', { children: 'age / staleTime / gcTime' }),
                  }),
                ],
              }),
              c.jsx('div', {
                className: fe(f.routesContainer),
                children: m
                  ? c.jsx('div', {
                      children: ((r = h.pendingMatches) != null && r.length ? h.pendingMatches : h.matches).map(
                        (C, M) =>
                          c.jsxs(
                            'div',
                            {
                              role: 'button',
                              'aria-label': `Open match details for ${C.id}`,
                              onClick: () => E(w === C.id ? '' : C.id),
                              className: fe(f.matchRow(C === _)),
                              children: [
                                c.jsx('div', { className: fe(f.matchIndicator(vl(C))) }),
                                c.jsx('code', {
                                  className: f.matchID,
                                  children: `${C.routeId === Se ? Se : C.pathname}`,
                                }),
                                c.jsx(gl, { match: C, router: k }),
                              ],
                            },
                            C.id || M,
                          ),
                      ),
                    })
                  : c.jsx(ip, { router: k, route: k.routeTree, isRoot: !0, activeId: w, setActiveId: E }),
              }),
            ],
          }),
          h.cachedMatches.length
            ? c.jsxs('div', {
                className: f.cachedMatchesContainer,
                children: [
                  c.jsxs('div', {
                    className: f.detailsHeader,
                    children: [
                      c.jsx('div', { children: 'Cached Matches' }),
                      c.jsx('div', { className: f.detailsHeaderInfo, children: 'age / staleTime / gcTime' }),
                    ],
                  }),
                  c.jsx('div', {
                    children: h.cachedMatches.map((C) =>
                      c.jsxs(
                        'div',
                        {
                          role: 'button',
                          'aria-label': `Open match details for ${C.id}`,
                          onClick: () => E(w === C.id ? '' : C.id),
                          className: fe(f.matchRow(C === _)),
                          children: [
                            c.jsx('div', { className: fe(f.matchIndicator(vl(C))) }),
                            c.jsx('code', { className: f.matchID, children: `${C.id}` }),
                            c.jsx(gl, { match: C, router: k }),
                          ],
                        },
                        C.id,
                      ),
                    ),
                  }),
                ],
              })
            : null,
        ],
      }),
      _
        ? c.jsxs('div', {
            className: f.thirdContainer,
            children: [
              c.jsx('div', { className: f.detailsHeader, children: 'Match Details' }),
              c.jsx('div', {
                children: c.jsxs('div', {
                  className: f.matchDetails,
                  children: [
                    c.jsx('div', {
                      className: f.matchStatus(_.status, _.isFetching),
                      children: c.jsx('div', {
                        children: _.status === 'success' && _.isFetching ? 'fetching' : _.status,
                      }),
                    }),
                    c.jsxs('div', {
                      className: f.matchDetailsInfoLabel,
                      children: [
                        c.jsx('div', { children: 'ID:' }),
                        c.jsx('div', { className: f.matchDetailsInfo, children: c.jsx('code', { children: _.id }) }),
                      ],
                    }),
                    c.jsxs('div', {
                      className: f.matchDetailsInfoLabel,
                      children: [
                        c.jsx('div', { children: 'State:' }),
                        c.jsx('div', {
                          className: f.matchDetailsInfo,
                          children:
                            (o = h.pendingMatches) != null && o.find((C) => C.id === _.id)
                              ? 'Pending'
                              : h.matches.find((C) => C.id === _.id)
                                ? 'Active'
                                : 'Cached',
                        }),
                      ],
                    }),
                    c.jsxs('div', {
                      className: f.matchDetailsInfoLabel,
                      children: [
                        c.jsx('div', { children: 'Last Updated:' }),
                        c.jsx('div', {
                          className: f.matchDetailsInfo,
                          children: _.updatedAt ? new Date(_.updatedAt).toLocaleTimeString() : 'N/A',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              _.loaderData
                ? c.jsxs(c.Fragment, {
                    children: [
                      c.jsx('div', { className: f.detailsHeader, children: 'Loader Data' }),
                      c.jsx('div', {
                        className: f.detailsContent,
                        children: c.jsx(Fn, { label: 'loaderData', value: _.loaderData, defaultExpanded: {} }),
                      }),
                    ],
                  })
                : null,
              c.jsx('div', { className: f.detailsHeader, children: 'Explorer' }),
              c.jsx('div', {
                className: f.detailsContent,
                children: c.jsx(Fn, { label: 'Match', value: _, defaultExpanded: {} }),
              }),
            ],
          })
        : null,
      j
        ? c.jsxs('div', {
            className: f.fourthContainer,
            children: [
              c.jsx('div', { className: f.detailsHeader, children: 'Search Params' }),
              c.jsx('div', {
                className: f.detailsContent,
                children: c.jsx(Fn, {
                  value: h.location.search,
                  defaultExpanded: Object.keys(h.location.search).reduce((C, M) => ((C[M] = {}), C), {}),
                }),
              }),
            ],
          })
        : null,
    ],
  })
})
function gl({ match: e, router: t }) {
  const n = io(),
    r = V.useReducer(
      () => ({}),
      () => ({}),
    )[1]
  if (
    (V.useEffect(() => {
      const a = setInterval(() => {
        r()
      }, 1e3)
      return () => {
        clearInterval(a)
      }
    }, [r]),
    !e)
  )
    return null
  const o = t.looseRoutesById[e.routeId]
  if (!o.options.loader) return null
  const i = Date.now() - e.updatedAt,
    s = o.options.staleTime ?? t.options.defaultStaleTime ?? 0,
    l = o.options.gcTime ?? t.options.defaultGcTime ?? 30 * 60 * 1e3
  return c.jsxs('div', {
    className: fe(n.ageTicker(i > s)),
    children: [
      c.jsx('div', { children: xs(i) }),
      c.jsx('div', { children: '/' }),
      c.jsx('div', { children: xs(s) }),
      c.jsx('div', { children: '/' }),
      c.jsx('div', { children: xs(l) }),
    ],
  })
}
function xs(e) {
  const t = ['s', 'min', 'h', 'd'],
    n = [e / 1e3, e / 6e4, e / 36e5, e / 864e5]
  let r = 0
  for (let i = 1; i < n.length && !(n[i] < 1); i++) r = i
  return (
    new Intl.NumberFormat(navigator.language, {
      compactDisplay: 'short',
      notation: 'compact',
      maximumFractionDigits: 0,
    }).format(n[r]) + t[r]
  )
}
const Vg = (e) => {
  const { colors: t, font: n, size: r, alpha: o, shadow: i, border: s } = G,
    { fontFamily: l, lineHeight: a, size: u } = n,
    d = e ? tr.bind({ target: e }) : tr
  return {
    devtoolsPanelContainer: d`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,
    devtoolsPanelContainerVisibility: (p) => d`
        visibility: ${p ? 'visible' : 'hidden'};
      `,
    devtoolsPanelContainerResizing: (p) =>
      p
        ? d`
          transition: none;
        `
        : d`
        transition: all 0.4s ease;
      `,
    devtoolsPanelContainerAnimation: (p, f) =>
      p
        ? d`
          pointer-events: auto;
          transform: translateY(0);
        `
        : d`
        pointer-events: none;
        transform: translateY(${f}px);
      `,
    logo: d`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${l.sans};
      gap: ${G.size[0.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,
    tanstackLogo: d`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,
    routerLogo: d`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    devtoolsPanel: d`
      display: flex;
      font-size: ${u.sm};
      font-family: ${l.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${u.xs};
      }
    `,
    dragHandle: d`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${o[90]};
      }
    `,
    firstContainer: d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,
    routerExplorerContainer: d`
      overflow-y: auto;
      flex: 1;
    `,
    routerExplorer: d`
      padding: ${G.size[2]};
    `,
    row: d`
      display: flex;
      align-items: center;
      padding: ${G.size[2]} ${G.size[2.5]};
      gap: ${G.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,
    detailsHeader: d`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${G.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${G.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,
    maskedBadge: d`
      background: ${t.yellow[900]}${o[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${G.size[0]} ${G.size[2.5]};
      border-radius: ${s.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,
    maskedLocation: d`
      color: ${t.yellow[300]};
    `,
    detailsContent: d`
      padding: ${G.size[1.5]} ${G.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,
    routeMatchesToggle: d`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${s.radius.sm};
      overflow: hidden;
    `,
    routeMatchesToggleBtn: (p, f) => {
      const g = [
        d`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${l.sans};
        font-weight: ${n.weight.medium};
      `,
      ]
      if (p) {
        const x = d`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `
        g.push(x)
      } else {
        const x = d`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${o[20]};
        `
        g.push(x)
      }
      return (
        f &&
          g.push(d`
          border-right: 1px solid ${G.colors.gray[500]};
        `),
        g
      )
    },
    detailsHeaderInfo: d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,
    matchRow: (p) => {
      const y = [
        d`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${u.xs};
        color: ${t.gray[300]};
      `,
      ]
      if (p) {
        const g = d`
          background: ${t.darkGray[500]};
        `
        y.push(g)
      }
      return y
    },
    matchIndicator: (p) => {
      const y = [
        d`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[p][900]};
        border: 1px solid ${t[p][500]};
        border-radius: ${s.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `,
      ]
      if (p === 'gray') {
        const g = d`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `
        y.push(g)
      }
      return y
    },
    matchID: d`
      flex: 1;
      line-height: ${a.xs};
    `,
    ageTicker: (p) => {
      const y = [
        d`
        display: flex;
        gap: ${r[1]};
        font-size: ${u.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${a.xs};
      `,
      ]
      if (p) {
        const g = d`
          color: ${t.yellow[400]};
        `
        y.push(g)
      }
      return y
    },
    secondContainer: d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,
    thirdContainer: d`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,
    fourthContainer: d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,
    routesContainer: d`
      overflow-x: auto;
      overflow-y: visible;
    `,
    routesRowContainer: (p, f) => {
      const g = [
        d`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${u.xs};
        color: ${t.gray[300]};
        cursor: ${f ? 'pointer' : 'default'};
        line-height: ${a.xs};
      `,
      ]
      if (p) {
        const x = d`
          background: ${t.darkGray[500]};
        `
        g.push(x)
      }
      return g
    },
    routesRow: (p) => {
      const y = [
        d`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${u.xs};
        line-height: ${a.xs};
      `,
      ]
      if (!p) {
        const g = d`
          color: ${t.gray[400]};
        `
        y.push(g)
      }
      return y
    },
    routeParamInfo: d`
      color: ${t.gray[400]};
      font-size: ${u.xs};
      line-height: ${a.xs};
    `,
    nestedRouteRow: (p) => d`
        margin-left: ${p ? 0 : r[3.5]};
        border-left: ${p ? '' : `solid 1px ${t.gray[700]}`};
      `,
    code: d`
      font-size: ${u.xs};
      line-height: ${a.xs};
    `,
    matchesContainer: d`
      flex: 1 1 auto;
      overflow-y: auto;
    `,
    cachedMatchesContainer: d`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,
    maskedBadgeContainer: d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,
    matchDetails: d`
      display: flex;
      flex-direction: column;
      padding: ${G.size[2]};
      font-size: ${G.font.size.xs};
      color: ${G.colors.gray[300]};
      line-height: ${G.font.lineHeight.sm};
    `,
    matchStatus: (p, f) => {
      const g =
        f && p === 'success'
          ? f === 'beforeLoad'
            ? 'purple'
            : 'blue'
          : { pending: 'yellow', success: 'green', error: 'red', notFound: 'purple', redirected: 'gray' }[p]
      return d`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${G.border.radius.sm};
        font-weight: ${G.font.weight.normal};
        background-color: ${G.colors[g][900]}${G.alpha[90]};
        color: ${G.colors[g][300]};
        border: 1px solid ${G.colors[g][600]};
        margin-bottom: ${G.size[2]};
        transition: all 0.25s ease-out;
      `
    },
    matchDetailsInfo: d`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,
    matchDetailsInfoLabel: d`
      display: flex;
    `,
    mainCloseBtn: d`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${s.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,
    mainCloseBtnPosition: (p) => d`
        ${p === 'top-left' ? `top: ${r[2]}; left: ${r[2]};` : ''}
        ${p === 'top-right' ? `top: ${r[2]}; right: ${r[2]};` : ''}
        ${p === 'bottom-left' ? `bottom: ${r[2]}; left: ${r[2]};` : ''}
        ${p === 'bottom-right' ? `bottom: ${r[2]}; right: ${r[2]};` : ''}
      `,
    mainCloseBtnAnimation: (p) =>
      p
        ? d`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `
        : d`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `,
    routerLogoCloseButton: d`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    mainCloseBtnDivider: d`
      width: 1px;
      background: ${G.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,
    mainCloseBtnIconContainer: d`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,
    mainCloseBtnIconOuter: d`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,
    mainCloseBtnIconInner: d`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    panelCloseBtn: d`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${s.radius.sm} ${s.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[0.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,
    panelCloseBtnIcon: d`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,
  }
}
let Po = null
function io() {
  const e = V.useContext(Di)
  return Po || ((Po = Vg(e)), Po)
}
function Wg(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    i
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
var Hg = ['color'],
  Kg = S.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? 'currentColor' : n,
      o = Wg(e, Hg)
    return S.createElement(
      'svg',
      Object.assign(
        { width: '15', height: '15', viewBox: '0 0 15 15', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        o,
        { ref: t },
      ),
      S.createElement('path', {
        d: 'M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z',
        fill: r,
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }),
    )
  })
function lp(e, t = []) {
  let n = []
  function r(i, s) {
    const l = S.createContext(s),
      a = n.length
    n = [...n, s]
    function u(p) {
      const { scope: f, children: y, ...g } = p,
        x = (f == null ? void 0 : f[e][a]) || l,
        k = S.useMemo(() => g, Object.values(g))
      return c.jsx(x.Provider, { value: k, children: y })
    }
    function d(p, f) {
      const y = (f == null ? void 0 : f[e][a]) || l,
        g = S.useContext(y)
      if (g) return g
      if (s !== void 0) return s
      throw new Error(`\`${p}\` must be used within \`${i}\``)
    }
    return (u.displayName = i + 'Provider'), [u, d]
  }
  const o = () => {
    const i = n.map((s) => S.createContext(s))
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i
      return S.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a])
    }
  }
  return (o.scopeName = e), [r, Gg(o, ...t)]
}
function Gg(...e) {
  const t = e[0]
  if (e.length === 1) return t
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }))
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(i)[`__scope${u}`]
        return { ...l, ...p }
      }, {})
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s])
    }
  }
  return (n.scopeName = t.scopeName), n
}
function pe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o)
  }
}
var Qg = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  Fe = Qg.reduce((e, t) => {
    const n = S.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        l = i ? Jr : t
      return typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), c.jsx(l, { ...s, ref: o })
    })
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n }
  }, {})
function yl(e, t) {
  e && oo.flushSync(() => e.dispatchEvent(t))
}
function Ge(e) {
  const t = S.useRef(e)
  return (
    S.useEffect(() => {
      t.current = e
    }),
    S.useMemo(
      () =>
        (...n) => {
          var r
          return (r = t.current) == null ? void 0 : r.call(t, ...n)
        },
      [],
    )
  )
}
function ap({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Yg({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    l = Ge(n),
    a = S.useCallback(
      (u) => {
        if (i) {
          const p = typeof u == 'function' ? u(e) : u
          p !== e && l(p)
        } else o(u)
      },
      [i, e, o, l],
    )
  return [s, a]
}
function Yg({ defaultProp: e, onChange: t }) {
  const n = S.useState(e),
    [r] = n,
    o = S.useRef(r),
    i = Ge(t)
  return (
    S.useEffect(() => {
      o.current !== r && (i(r), (o.current = r))
    }, [r, o, i]),
    n
  )
}
var Xg = S.createContext(void 0)
function Zg(e) {
  const t = S.useContext(Xg)
  return e || t || 'ltr'
}
var nr = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {}
function Jg(e, t) {
  return S.useReducer((n, r) => t[n][r] ?? n, e)
}
var so = (e) => {
  const { present: t, children: n } = e,
    r = qg(t),
    o = typeof n == 'function' ? n({ present: r.isPresent }) : S.Children.only(n),
    i = mt(r.ref, ey(o))
  return typeof n == 'function' || r.isPresent ? S.cloneElement(o, { ref: i }) : null
}
so.displayName = 'Presence'
function qg(e) {
  const [t, n] = S.useState(),
    r = S.useRef({}),
    o = S.useRef(e),
    i = S.useRef('none'),
    s = e ? 'mounted' : 'unmounted',
    [l, a] = Jg(s, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    })
  return (
    S.useEffect(() => {
      const u = No(r.current)
      i.current = l === 'mounted' ? u : 'none'
    }, [l]),
    nr(() => {
      const u = r.current,
        d = o.current
      if (d !== e) {
        const f = i.current,
          y = No(u)
        e
          ? a('MOUNT')
          : y === 'none' || (u == null ? void 0 : u.display) === 'none'
            ? a('UNMOUNT')
            : a(d && f !== y ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e)
      }
    }, [e, a]),
    nr(() => {
      if (t) {
        const u = (p) => {
            const y = No(r.current).includes(p.animationName)
            p.target === t && y && oo.flushSync(() => a('ANIMATION_END'))
          },
          d = (p) => {
            p.target === t && (i.current = No(r.current))
          }
        return (
          t.addEventListener('animationstart', d),
          t.addEventListener('animationcancel', u),
          t.addEventListener('animationend', u),
          () => {
            t.removeEventListener('animationstart', d),
              t.removeEventListener('animationcancel', u),
              t.removeEventListener('animationend', u)
          }
        )
      } else a('ANIMATION_END')
    }, [t, a]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(l),
      ref: S.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u)
      }, []),
    }
  )
}
function No(e) {
  return (e == null ? void 0 : e.animationName) || 'none'
}
function ey(e) {
  var r, o
  let t = (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null ? void 0 : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning
  return n
    ? e.ref
    : ((t = (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null ? void 0 : o.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref)
}
var ty = ch.useId || (() => {}),
  ny = 0
function up(e) {
  const [t, n] = S.useState(ty())
  return (
    nr(() => {
      e || n((r) => r ?? String(ny++))
    }, [e]),
    e || (t ? `radix-${t}` : '')
  )
}
function cp(e) {
  const t = e + 'CollectionProvider',
    [n, r] = lp(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (y) => {
      const { scope: g, children: x } = y,
        k = V.useRef(null),
        h = V.useRef(new Map()).current
      return c.jsx(o, { scope: g, itemMap: h, collectionRef: k, children: x })
    }
  s.displayName = t
  const l = e + 'CollectionSlot',
    a = V.forwardRef((y, g) => {
      const { scope: x, children: k } = y,
        h = i(l, x),
        m = mt(g, h.collectionRef)
      return c.jsx(Jr, { ref: m, children: k })
    })
  a.displayName = l
  const u = e + 'CollectionItemSlot',
    d = 'data-radix-collection-item',
    p = V.forwardRef((y, g) => {
      const { scope: x, children: k, ...h } = y,
        m = V.useRef(null),
        v = mt(g, m),
        w = i(u, x)
      return (
        V.useEffect(() => (w.itemMap.set(m, { ref: m, ...h }), () => void w.itemMap.delete(m))),
        c.jsx(Jr, { [d]: '', ref: v, children: k })
      )
    })
  p.displayName = u
  function f(y) {
    const g = i(e + 'CollectionConsumer', y)
    return V.useCallback(() => {
      const k = g.collectionRef.current
      if (!k) return []
      const h = Array.from(k.querySelectorAll(`[${d}]`))
      return Array.from(g.itemMap.values()).sort((w, E) => h.indexOf(w.ref.current) - h.indexOf(E.ref.current))
    }, [g.collectionRef, g.itemMap])
  }
  return [{ Provider: s, Slot: a, ItemSlot: p }, f, r]
}
function ry(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ge(e)
  S.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o)
    }
    return t.addEventListener('keydown', r, { capture: !0 }), () => t.removeEventListener('keydown', r, { capture: !0 })
  }, [n, t])
}
var oy = 'DismissableLayer',
  xl = 'dismissableLayer.update',
  iy = 'dismissableLayer.pointerDownOutside',
  sy = 'dismissableLayer.focusOutside',
  sc,
  dp = S.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
  fp = S.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = S.useContext(dp),
      [d, p] = S.useState(null),
      f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
      [, y] = S.useState({}),
      g = mt(t, (j) => p(j)),
      x = Array.from(u.layers),
      [k] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = x.indexOf(k),
      m = d ? x.indexOf(d) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      w = m >= h,
      E = uy((j) => {
        const P = j.target,
          C = [...u.branches].some((M) => M.contains(P))
        !w || C || (o == null || o(j), s == null || s(j), j.defaultPrevented || l == null || l())
      }, f),
      _ = cy((j) => {
        const P = j.target
        ;[...u.branches].some((M) => M.contains(P)) ||
          (i == null || i(j), s == null || s(j), j.defaultPrevented || l == null || l())
      }, f)
    return (
      ry((j) => {
        m === u.layers.size - 1 && (r == null || r(j), !j.defaultPrevented && l && (j.preventDefault(), l()))
      }, f),
      S.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((sc = f.body.style.pointerEvents), (f.body.style.pointerEvents = 'none')),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            lc(),
            () => {
              n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = sc)
            }
          )
      }, [d, f, n, u]),
      S.useEffect(
        () => () => {
          d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), lc())
        },
        [d, u],
      ),
      S.useEffect(() => {
        const j = () => y({})
        return document.addEventListener(xl, j), () => document.removeEventListener(xl, j)
      }, []),
      c.jsx(Fe.div, {
        ...a,
        ref: g,
        style: { pointerEvents: v ? (w ? 'auto' : 'none') : void 0, ...e.style },
        onFocusCapture: pe(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: pe(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: pe(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    )
  })
fp.displayName = oy
var ly = 'DismissableLayerBranch',
  ay = S.forwardRef((e, t) => {
    const n = S.useContext(dp),
      r = S.useRef(null),
      o = mt(t, r)
    return (
      S.useEffect(() => {
        const i = r.current
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i)
            }
          )
      }, [n.branches]),
      c.jsx(Fe.div, { ...e, ref: o })
    )
  })
ay.displayName = ly
function uy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ge(e),
    r = S.useRef(!1),
    o = S.useRef(() => {})
  return (
    S.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              pp(iy, n, u, { discrete: !0 })
            }
            const u = { originalEvent: l }
            l.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = a),
                t.addEventListener('click', o.current, { once: !0 }))
              : a()
          } else t.removeEventListener('click', o.current)
          r.current = !1
        },
        s = window.setTimeout(() => {
          t.addEventListener('pointerdown', i)
        }, 0)
      return () => {
        window.clearTimeout(s), t.removeEventListener('pointerdown', i), t.removeEventListener('click', o.current)
      }
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  )
}
function cy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ge(e),
    r = S.useRef(!1)
  return (
    S.useEffect(() => {
      const o = (i) => {
        i.target && !r.current && pp(sy, n, { originalEvent: i }, { discrete: !1 })
      }
      return t.addEventListener('focusin', o), () => t.removeEventListener('focusin', o)
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  )
}
function lc() {
  const e = new CustomEvent(xl)
  document.dispatchEvent(e)
}
function pp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
  t && o.addEventListener(e, t, { once: !0 }), r ? yl(o, i) : o.dispatchEvent(i)
}
function dy(e) {
  const t = S.useRef({ value: e, previous: e })
  return S.useMemo(
    () => (
      t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous
    ),
    [e],
  )
}
var fy = 'VisuallyHidden',
  hp = S.forwardRef((e, t) =>
    c.jsx(Fe.span, {
      ...e,
      ref: t,
      style: {
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        ...e.style,
      },
    }),
  )
hp.displayName = fy
var py = hp,
  ar = 'NavigationMenu',
  [Ea, mp, hy] = cp(ar),
  [wl, my, vy] = cp(ar),
  [_a, Hy] = lp(ar, [hy, vy]),
  [gy, Je] = _a(ar),
  [yy, xy] = _a(ar),
  vp = S.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        delayDuration: s = 200,
        skipDelayDuration: l = 300,
        orientation: a = 'horizontal',
        dir: u,
        ...d
      } = e,
      [p, f] = S.useState(null),
      y = mt(t, (C) => f(C)),
      g = Zg(u),
      x = S.useRef(0),
      k = S.useRef(0),
      h = S.useRef(0),
      [m, v] = S.useState(!0),
      [w = '', E] = ap({
        prop: r,
        onChange: (C) => {
          const M = C !== '',
            b = l > 0
          M
            ? (window.clearTimeout(h.current), b && v(!1))
            : (window.clearTimeout(h.current), (h.current = window.setTimeout(() => v(!0), l))),
            o == null || o(C)
        },
        defaultProp: i,
      }),
      _ = S.useCallback(() => {
        window.clearTimeout(k.current), (k.current = window.setTimeout(() => E(''), 150))
      }, [E]),
      j = S.useCallback(
        (C) => {
          window.clearTimeout(k.current), E(C)
        },
        [E],
      ),
      P = S.useCallback(
        (C) => {
          w === C
            ? window.clearTimeout(k.current)
            : (x.current = window.setTimeout(() => {
                window.clearTimeout(k.current), E(C)
              }, s))
        },
        [w, E, s],
      )
    return (
      S.useEffect(
        () => () => {
          window.clearTimeout(x.current), window.clearTimeout(k.current), window.clearTimeout(h.current)
        },
        [],
      ),
      c.jsx(yp, {
        scope: n,
        isRootMenu: !0,
        value: w,
        dir: g,
        orientation: a,
        rootNavigationMenu: p,
        onTriggerEnter: (C) => {
          window.clearTimeout(x.current), m ? P(C) : j(C)
        },
        onTriggerLeave: () => {
          window.clearTimeout(x.current), _()
        },
        onContentEnter: () => window.clearTimeout(k.current),
        onContentLeave: _,
        onItemSelect: (C) => {
          E((M) => (M === C ? '' : C))
        },
        onItemDismiss: () => E(''),
        children: c.jsx(Fe.nav, { 'aria-label': 'Main', 'data-orientation': a, dir: g, ...d, ref: y }),
      })
    )
  })
vp.displayName = ar
var gp = 'NavigationMenuSub',
  wy = S.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        orientation: s = 'horizontal',
        ...l
      } = e,
      a = Je(gp, n),
      [u = '', d] = ap({ prop: r, onChange: o, defaultProp: i })
    return c.jsx(yp, {
      scope: n,
      isRootMenu: !1,
      value: u,
      dir: a.dir,
      orientation: s,
      rootNavigationMenu: a.rootNavigationMenu,
      onTriggerEnter: (p) => d(p),
      onItemSelect: (p) => d(p),
      onItemDismiss: () => d(''),
      children: c.jsx(Fe.div, { 'data-orientation': s, ...l, ref: t }),
    })
  })
wy.displayName = gp
var yp = (e) => {
    const {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: r,
        dir: o,
        orientation: i,
        children: s,
        value: l,
        onItemSelect: a,
        onItemDismiss: u,
        onTriggerEnter: d,
        onTriggerLeave: p,
        onContentEnter: f,
        onContentLeave: y,
      } = e,
      [g, x] = S.useState(null),
      [k, h] = S.useState(new Map()),
      [m, v] = S.useState(null)
    return c.jsx(gy, {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: l,
      previousValue: dy(l),
      baseId: up(),
      dir: o,
      orientation: i,
      viewport: g,
      onViewportChange: x,
      indicatorTrack: m,
      onIndicatorTrackChange: v,
      onTriggerEnter: Ge(d),
      onTriggerLeave: Ge(p),
      onContentEnter: Ge(f),
      onContentLeave: Ge(y),
      onItemSelect: Ge(a),
      onItemDismiss: Ge(u),
      onViewportContentChange: S.useCallback((w, E) => {
        h((_) => (_.set(w, E), new Map(_)))
      }, []),
      onViewportContentRemove: S.useCallback((w) => {
        h((E) => (E.has(w) ? (E.delete(w), new Map(E)) : E))
      }, []),
      children: c.jsx(Ea.Provider, { scope: t, children: c.jsx(yy, { scope: t, items: k, children: s }) }),
    })
  },
  xp = 'NavigationMenuList',
  wp = S.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = Je(xp, n),
      i = c.jsx(Fe.ul, { 'data-orientation': o.orientation, ...r, ref: t })
    return c.jsx(Fe.div, {
      style: { position: 'relative' },
      ref: o.onIndicatorTrackChange,
      children: c.jsx(Ea.Slot, { scope: n, children: o.isRootMenu ? c.jsx(Mp, { asChild: !0, children: i }) : i }),
    })
  })
wp.displayName = xp
var Sp = 'NavigationMenuItem',
  [Sy, kp] = _a(Sp),
  Cp = S.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e,
      i = up(),
      s = r || i || 'LEGACY_REACT_AUTO_VALUE',
      l = S.useRef(null),
      a = S.useRef(null),
      u = S.useRef(null),
      d = S.useRef(() => {}),
      p = S.useRef(!1),
      f = S.useCallback((g = 'start') => {
        if (l.current) {
          d.current()
          const x = kl(l.current)
          x.length && Pa(g === 'start' ? x : x.reverse())
        }
      }, []),
      y = S.useCallback(() => {
        if (l.current) {
          const g = kl(l.current)
          g.length && (d.current = Py(g))
        }
      }, [])
    return c.jsx(Sy, {
      scope: n,
      value: s,
      triggerRef: a,
      contentRef: l,
      focusProxyRef: u,
      wasEscapeCloseRef: p,
      onEntryKeyDown: f,
      onFocusProxyEnter: f,
      onRootContentClose: y,
      onContentFocusOutside: y,
      children: c.jsx(Fe.li, { ...o, ref: t }),
    })
  })
Cp.displayName = Sp
var Sl = 'NavigationMenuTrigger',
  Ep = S.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, disabled: r, ...o } = e,
      i = Je(Sl, e.__scopeNavigationMenu),
      s = kp(Sl, e.__scopeNavigationMenu),
      l = S.useRef(null),
      a = mt(l, s.triggerRef, t),
      u = Tp(i.baseId, s.value),
      d = zp(i.baseId, s.value),
      p = S.useRef(!1),
      f = S.useRef(!1),
      y = s.value === i.value
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(Ea.ItemSlot, {
          scope: n,
          value: s.value,
          children: c.jsx(Lp, {
            asChild: !0,
            children: c.jsx(Fe.button, {
              id: u,
              disabled: r,
              'data-disabled': r ? '' : void 0,
              'data-state': Na(y),
              'aria-expanded': y,
              'aria-controls': d,
              ...o,
              ref: a,
              onPointerEnter: pe(e.onPointerEnter, () => {
                ;(f.current = !1), (s.wasEscapeCloseRef.current = !1)
              }),
              onPointerMove: pe(
                e.onPointerMove,
                yi(() => {
                  r ||
                    f.current ||
                    s.wasEscapeCloseRef.current ||
                    p.current ||
                    (i.onTriggerEnter(s.value), (p.current = !0))
                }),
              ),
              onPointerLeave: pe(
                e.onPointerLeave,
                yi(() => {
                  r || (i.onTriggerLeave(), (p.current = !1))
                }),
              ),
              onClick: pe(e.onClick, () => {
                i.onItemSelect(s.value), (f.current = y)
              }),
              onKeyDown: pe(e.onKeyDown, (g) => {
                const k = { horizontal: 'ArrowDown', vertical: i.dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight' }[
                  i.orientation
                ]
                y && g.key === k && (s.onEntryKeyDown(), g.preventDefault())
              }),
            }),
          }),
        }),
        y &&
          c.jsxs(c.Fragment, {
            children: [
              c.jsx(py, {
                'aria-hidden': !0,
                tabIndex: 0,
                ref: s.focusProxyRef,
                onFocus: (g) => {
                  const x = s.contentRef.current,
                    k = g.relatedTarget,
                    h = k === l.current,
                    m = x == null ? void 0 : x.contains(k)
                  ;(h || !m) && s.onFocusProxyEnter(h ? 'start' : 'end')
                },
              }),
              i.viewport && c.jsx('span', { 'aria-owns': d }),
            ],
          }),
      ],
    })
  })
Ep.displayName = Sl
var ky = 'NavigationMenuLink',
  ac = 'navigationMenu.linkSelect',
  _p = S.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e
    return c.jsx(Lp, {
      asChild: !0,
      children: c.jsx(Fe.a, {
        'data-active': r ? '' : void 0,
        'aria-current': r ? 'page' : void 0,
        ...i,
        ref: t,
        onClick: pe(
          e.onClick,
          (s) => {
            const l = s.target,
              a = new CustomEvent(ac, { bubbles: !0, cancelable: !0 })
            if (
              (l.addEventListener(ac, (u) => (o == null ? void 0 : o(u)), { once: !0 }),
              yl(l, a),
              !a.defaultPrevented && !s.metaKey)
            ) {
              const u = new CustomEvent(Vo, { bubbles: !0, cancelable: !0 })
              yl(l, u)
            }
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    })
  })
_p.displayName = ky
var ja = 'NavigationMenuIndicator',
  jp = S.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Je(ja, e.__scopeNavigationMenu),
      i = !!o.value
    return o.indicatorTrack
      ? S0.createPortal(c.jsx(so, { present: n || i, children: c.jsx(Cy, { ...r, ref: t }) }), o.indicatorTrack)
      : null
  })
jp.displayName = ja
var Cy = S.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = Je(ja, n),
      i = mp(n),
      [s, l] = S.useState(null),
      [a, u] = S.useState(null),
      d = o.orientation === 'horizontal',
      p = !!o.value
    S.useEffect(() => {
      var x
      const g = (x = i().find((k) => k.value === o.value)) == null ? void 0 : x.ref.current
      g && l(g)
    }, [i, o.value])
    const f = () => {
      s && u({ size: d ? s.offsetWidth : s.offsetHeight, offset: d ? s.offsetLeft : s.offsetTop })
    }
    return (
      Cl(s, f),
      Cl(o.indicatorTrack, f),
      a
        ? c.jsx(Fe.div, {
            'aria-hidden': !0,
            'data-state': p ? 'visible' : 'hidden',
            'data-orientation': o.orientation,
            ...r,
            ref: t,
            style: {
              position: 'absolute',
              ...(d
                ? { left: 0, width: a.size + 'px', transform: `translateX(${a.offset}px)` }
                : { top: 0, height: a.size + 'px', transform: `translateY(${a.offset}px)` }),
              ...r.style,
            },
          })
        : null
    )
  }),
  rr = 'NavigationMenuContent',
  Rp = S.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Je(rr, e.__scopeNavigationMenu),
      i = kp(rr, e.__scopeNavigationMenu),
      s = mt(i.contentRef, t),
      l = i.value === o.value,
      a = {
        value: i.value,
        triggerRef: i.triggerRef,
        focusProxyRef: i.focusProxyRef,
        wasEscapeCloseRef: i.wasEscapeCloseRef,
        onContentFocusOutside: i.onContentFocusOutside,
        onRootContentClose: i.onRootContentClose,
        ...r,
      }
    return o.viewport
      ? c.jsx(Ey, { forceMount: n, ...a, ref: s })
      : c.jsx(so, {
          present: n || l,
          children: c.jsx(Pp, {
            'data-state': Na(l),
            ...a,
            ref: s,
            onPointerEnter: pe(e.onPointerEnter, o.onContentEnter),
            onPointerLeave: pe(e.onPointerLeave, yi(o.onContentLeave)),
            style: { pointerEvents: !l && o.isRootMenu ? 'none' : void 0, ...a.style },
          }),
        })
  })
Rp.displayName = rr
var Ey = S.forwardRef((e, t) => {
    const n = Je(rr, e.__scopeNavigationMenu),
      { onViewportContentChange: r, onViewportContentRemove: o } = n
    return (
      nr(() => {
        r(e.value, { ref: t, ...e })
      }, [e, t, r]),
      nr(() => () => o(e.value), [e.value, o]),
      null
    )
  }),
  Vo = 'navigationMenu.rootContentDismiss',
  Pp = S.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        triggerRef: o,
        focusProxyRef: i,
        wasEscapeCloseRef: s,
        onRootContentClose: l,
        onContentFocusOutside: a,
        ...u
      } = e,
      d = Je(rr, n),
      p = S.useRef(null),
      f = mt(p, t),
      y = Tp(d.baseId, r),
      g = zp(d.baseId, r),
      x = mp(n),
      k = S.useRef(null),
      { onItemDismiss: h } = d
    S.useEffect(() => {
      const v = p.current
      if (d.isRootMenu && v) {
        const w = () => {
          var E
          h(), l(), v.contains(document.activeElement) && ((E = o.current) == null || E.focus())
        }
        return v.addEventListener(Vo, w), () => v.removeEventListener(Vo, w)
      }
    }, [d.isRootMenu, e.value, o, h, l])
    const m = S.useMemo(() => {
      const w = x().map((M) => M.value)
      d.dir === 'rtl' && w.reverse()
      const E = w.indexOf(d.value),
        _ = w.indexOf(d.previousValue),
        j = r === d.value,
        P = _ === w.indexOf(r)
      if (!j && !P) return k.current
      const C = (() => {
        if (E !== _) {
          if (j && _ !== -1) return E > _ ? 'from-end' : 'from-start'
          if (P && E !== -1) return E > _ ? 'to-start' : 'to-end'
        }
        return null
      })()
      return (k.current = C), C
    }, [d.previousValue, d.value, d.dir, x, r])
    return c.jsx(Mp, {
      asChild: !0,
      children: c.jsx(fp, {
        id: g,
        'aria-labelledby': y,
        'data-motion': m,
        'data-orientation': d.orientation,
        ...u,
        ref: f,
        disableOutsidePointerEvents: !1,
        onDismiss: () => {
          var w
          const v = new Event(Vo, { bubbles: !0, cancelable: !0 })
          ;(w = p.current) == null || w.dispatchEvent(v)
        },
        onFocusOutside: pe(e.onFocusOutside, (v) => {
          var E
          a()
          const w = v.target
          ;(E = d.rootNavigationMenu) != null && E.contains(w) && v.preventDefault()
        }),
        onPointerDownOutside: pe(e.onPointerDownOutside, (v) => {
          var j
          const w = v.target,
            E = x().some((P) => {
              var C
              return (C = P.ref.current) == null ? void 0 : C.contains(w)
            }),
            _ = d.isRootMenu && ((j = d.viewport) == null ? void 0 : j.contains(w))
          ;(E || _ || !d.isRootMenu) && v.preventDefault()
        }),
        onKeyDown: pe(e.onKeyDown, (v) => {
          var _
          const w = v.altKey || v.ctrlKey || v.metaKey
          if (v.key === 'Tab' && !w) {
            const j = kl(v.currentTarget),
              P = document.activeElement,
              C = j.findIndex(($) => $ === P),
              b = v.shiftKey ? j.slice(0, C).reverse() : j.slice(C + 1, j.length)
            Pa(b) ? v.preventDefault() : (_ = i.current) == null || _.focus()
          }
        }),
        onEscapeKeyDown: pe(e.onEscapeKeyDown, (v) => {
          s.current = !0
        }),
      }),
    })
  }),
  Ra = 'NavigationMenuViewport',
  Np = S.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = !!Je(Ra, e.__scopeNavigationMenu).value
    return c.jsx(so, { present: n || i, children: c.jsx(_y, { ...r, ref: t }) })
  })
Np.displayName = Ra
var _y = S.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, children: r, ...o } = e,
      i = Je(Ra, n),
      s = mt(t, i.onViewportChange),
      l = xy(rr, e.__scopeNavigationMenu),
      [a, u] = S.useState(null),
      [d, p] = S.useState(null),
      f = a ? (a == null ? void 0 : a.width) + 'px' : void 0,
      y = a ? (a == null ? void 0 : a.height) + 'px' : void 0,
      g = !!i.value,
      x = g ? i.value : i.previousValue
    return (
      Cl(d, () => {
        d && u({ width: d.offsetWidth, height: d.offsetHeight })
      }),
      c.jsx(Fe.div, {
        'data-state': Na(g),
        'data-orientation': i.orientation,
        ...o,
        ref: s,
        style: {
          pointerEvents: !g && i.isRootMenu ? 'none' : void 0,
          '--radix-navigation-menu-viewport-width': f,
          '--radix-navigation-menu-viewport-height': y,
          ...o.style,
        },
        onPointerEnter: pe(e.onPointerEnter, i.onContentEnter),
        onPointerLeave: pe(e.onPointerLeave, yi(i.onContentLeave)),
        children: Array.from(l.items).map(([h, { ref: m, forceMount: v, ...w }]) => {
          const E = x === h
          return c.jsx(
            so,
            {
              present: v || E,
              children: c.jsx(Pp, {
                ...w,
                ref: Sa(m, (_) => {
                  E && _ && p(_)
                }),
              }),
            },
            h,
          )
        }),
      })
    )
  }),
  jy = 'FocusGroup',
  Mp = S.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = Je(jy, n)
    return c.jsx(wl.Provider, {
      scope: n,
      children: c.jsx(wl.Slot, { scope: n, children: c.jsx(Fe.div, { dir: o.dir, ...r, ref: t }) }),
    })
  }),
  uc = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'],
  Ry = 'FocusGroupItem',
  Lp = S.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = my(n),
      i = Je(Ry, n)
    return c.jsx(wl.ItemSlot, {
      scope: n,
      children: c.jsx(Fe.button, {
        ...r,
        ref: t,
        onKeyDown: pe(e.onKeyDown, (s) => {
          if (['Home', 'End', ...uc].includes(s.key)) {
            let a = o().map((p) => p.ref.current)
            if (
              ([i.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft', 'ArrowUp', 'End'].includes(s.key) && a.reverse(),
              uc.includes(s.key))
            ) {
              const p = a.indexOf(s.currentTarget)
              a = a.slice(p + 1)
            }
            setTimeout(() => Pa(a)), s.preventDefault()
          }
        }),
      }),
    })
  })
function kl(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden'
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      },
    })
  for (; n.nextNode(); ) t.push(n.currentNode)
  return t
}
function Pa(e) {
  const t = document.activeElement
  return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)))
}
function Py(e) {
  return (
    e.forEach((t) => {
      ;(t.dataset.tabindex = t.getAttribute('tabindex') || ''), t.setAttribute('tabindex', '-1')
    }),
    () => {
      e.forEach((t) => {
        const n = t.dataset.tabindex
        t.setAttribute('tabindex', n)
      })
    }
  )
}
function Cl(e, t) {
  const n = Ge(t)
  nr(() => {
    let r = 0
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n))
      })
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e)
        }
      )
    }
  }, [e, n])
}
function Na(e) {
  return e ? 'open' : 'closed'
}
function Tp(e, t) {
  return `${e}-trigger-${t}`
}
function zp(e, t) {
  return `${e}-content-${t}`
}
function yi(e) {
  return (t) => (t.pointerType === 'mouse' ? e(t) : void 0)
}
var $p = vp,
  Ip = wp,
  Ny = Cp,
  Fp = Ep,
  My = _p,
  bp = jp,
  Op = Rp,
  Dp = Np
const Ap = S.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs($p, {
    ref: r,
    className: Pt('relative z-10 flex max-w-max flex-1 items-center justify-center', e),
    ...n,
    children: [t, c.jsx(Bp, {})],
  }),
)
Ap.displayName = $p.displayName
const Up = S.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Ip, { ref: n, className: Pt('group flex flex-1 list-none items-center justify-center space-x-1', e), ...t }),
)
Up.displayName = Ip.displayName
const cc = Ny,
  El = Yf(
    'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
  ),
  Ly = S.forwardRef(({ className: e, children: t, ...n }, r) =>
    c.jsxs(Fp, {
      ref: r,
      className: Pt(El(), 'group', e),
      ...n,
      children: [
        t,
        ' ',
        c.jsx(Kg, {
          className: 'relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180',
          'aria-hidden': 'true',
        }),
      ],
    }),
  )
Ly.displayName = Fp.displayName
const Ty = S.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Op, {
    ref: n,
    className: Pt(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      e,
    ),
    ...t,
  }),
)
Ty.displayName = Op.displayName
const dc = My,
  Bp = S.forwardRef(({ className: e, ...t }, n) =>
    c.jsx('div', {
      className: Pt('absolute left-0 top-full flex justify-center'),
      children: c.jsx(Dp, {
        className: Pt(
          'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
          e,
        ),
        ref: n,
        ...t,
      }),
    }),
  )
Bp.displayName = Dp.displayName
const zy = S.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(bp, {
    ref: n,
    className: Pt(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      e,
    ),
    ...t,
    children: c.jsx('div', { className: 'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' }),
  }),
)
zy.displayName = bp.displayName
const Ma = xv({ component: () => c.jsx($y, {}) })
function $y() {
  const e = Ce({ select: (t) => t.location })
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs('div', {
        className: 'flex min-h-[100dvh] flex-col',
        children: [
          c.jsx(kg, {
            title: 'Nickel Mattera',
            description: 'Experienced software engineer with a passion for building innovative solutions.',
            image: '/images/nickel.webp',
            imageSet: '/images/nickel@2x.webp 2x',
            children: c.jsxs('div', {
              className: 'space-x-4 text-center lg:text-left',
              children: [
                c.jsx(ml, {
                  variant: 'outline',
                  size: 'lg',
                  className: 'mt-4',
                  asChild: !0,
                  children: c.jsx('a', {
                    href: 'https://linkedin.com/in/nickelmattera',
                    target: '_blank',
                    children: 'LinkedIn',
                  }),
                }),
                c.jsx(ml, {
                  variant: 'outline',
                  size: 'lg',
                  className: 'mt-4',
                  asChild: !0,
                  children: c.jsx('a', {
                    href: 'https://github.com/NicholeMattera',
                    target: '_blank',
                    children: 'GitHub',
                  }),
                }),
              ],
            }),
          }),
          c.jsx('nav', {
            className: Pt('flex justify-center py-6 md:py-10 lg:py-14'),
            children: c.jsx(Ap, {
              children: c.jsxs(Up, {
                children: [
                  c.jsx(cc, {
                    children: c.jsx(Xu, {
                      to: '/',
                      children: c.jsx(dc, { active: e.pathname === '/', className: El(), children: 'Programming' }),
                    }),
                  }),
                  c.jsx(cc, {
                    children: c.jsx(Xu, {
                      to: '/climbing',
                      children: c.jsx(dc, {
                        active: e.pathname === '/climbing',
                        className: El(),
                        children: 'Climbing',
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
          c.jsx(Iv, { children: c.jsx(Kf, {}) }),
          c.jsx(Sg, {}),
        ],
      }),
      c.jsx(Ug, {}),
    ],
  })
}
const Iy = Vf('/climbing')(),
  Fy = Vf('/')(),
  by = Iy.update({ path: '/climbing', getParentRoute: () => Ma }).lazy(() =>
    Gf(() => import('./climbing.lazy-ulYVtBUh.js'), __vite__mapDeps([0, 1])).then((e) => e.Route),
  ),
  Oy = Fy.update({ path: '/', getParentRoute: () => Ma }).lazy(() =>
    Gf(() => import('./index.lazy-DMEgnL0v.js'), __vite__mapDeps([2, 1])).then((e) => e.Route),
  ),
  Dy = { IndexLazyRoute: Oy, ClimbingLazyRoute: by },
  Ay = Ma._addFileChildren(Dy)._addFileTypes(),
  Uy = dv({ routeTree: Ay }),
  fc = document.getElementById('root')
fc.innerHTML || Rf(fc).render(c.jsx(S.StrictMode, { children: c.jsx(Tv, { router: Uy }) }))
export { V as R, By as a, fe as b, Pt as c, Wy as d, pc as g, je as i, c as j, S as r }
