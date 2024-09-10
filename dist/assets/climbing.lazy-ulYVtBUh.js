import { r as N, j as R, c as ne, a as ai, g as le, b as ae, R as _, i as Yt, d as dy } from './index-DZ4UuaLG.js'
import { S as oi, C as ns } from './section-CmVS9JQk.js'
const cr = N.forwardRef(({ className: e, ...t }, r) =>
  R.jsx('div', { ref: r, className: ne('rounded-xl border bg-card text-card-foreground shadow', e), ...t }),
)
cr.displayName = 'Card'
const sr = N.forwardRef(({ className: e, ...t }, r) =>
  R.jsx('div', { ref: r, className: ne('flex flex-col space-y-1.5 p-6', e), ...t }),
)
sr.displayName = 'CardHeader'
const lr = N.forwardRef(({ className: e, ...t }, r) =>
  R.jsx('h3', { ref: r, className: ne('font-semibold leading-none tracking-tight', e), ...t }),
)
lr.displayName = 'CardTitle'
const Xh = N.forwardRef(({ className: e, ...t }, r) =>
  R.jsx('p', { ref: r, className: ne('text-sm text-muted-foreground', e), ...t }),
)
Xh.displayName = 'CardDescription'
const fr = N.forwardRef(({ className: e, ...t }, r) => R.jsx('div', { ref: r, className: ne('p-6 pt-0', e), ...t }))
fr.displayName = 'CardContent'
const py = N.forwardRef(({ className: e, ...t }, r) =>
  R.jsx('div', { ref: r, className: ne('flex items-center p-6 pt-0', e), ...t }),
)
py.displayName = 'CardFooter'
var vy = Array.isArray,
  Le = vy,
  yy = typeof ai == 'object' && ai && ai.Object === Object && ai,
  Vh = yy,
  gy = Vh,
  my = typeof self == 'object' && self && self.Object === Object && self,
  by = gy || my || Function('return this')(),
  lt = by,
  xy = lt,
  wy = xy.Symbol,
  Xn = wy,
  is = Xn,
  Yh = Object.prototype,
  Oy = Yh.hasOwnProperty,
  Sy = Yh.toString,
  Gr = is ? is.toStringTag : void 0
function Ay(e) {
  var t = Oy.call(e, Gr),
    r = e[Gr]
  try {
    e[Gr] = void 0
    var n = !0
  } catch {}
  var i = Sy.call(e)
  return n && (t ? (e[Gr] = r) : delete e[Gr]), i
}
var _y = Ay,
  $y = Object.prototype,
  Py = $y.toString
function Ty(e) {
  return Py.call(e)
}
var Ey = Ty,
  as = Xn,
  jy = _y,
  My = Ey,
  Cy = '[object Null]',
  Iy = '[object Undefined]',
  os = as ? as.toStringTag : void 0
function ky(e) {
  return e == null ? (e === void 0 ? Iy : Cy) : os && os in Object(e) ? jy(e) : My(e)
}
var Ot = ky
function Ny(e) {
  return e != null && typeof e == 'object'
}
var St = Ny,
  Dy = Ot,
  Ly = St,
  By = '[object Symbol]'
function Ry(e) {
  return typeof e == 'symbol' || (Ly(e) && Dy(e) == By)
}
var Ir = Ry,
  Fy = Le,
  Wy = Ir,
  zy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Uy = /^\w*$/
function qy(e, t) {
  if (Fy(e)) return !1
  var r = typeof e
  return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || Wy(e)
    ? !0
    : Uy.test(e) || !zy.test(e) || (t != null && e in Object(t))
}
var Xu = qy
function Hy(e) {
  var t = typeof e
  return e != null && (t == 'object' || t == 'function')
}
var Mt = Hy
const kr = le(Mt)
var Gy = Ot,
  Ky = Mt,
  Xy = '[object AsyncFunction]',
  Vy = '[object Function]',
  Yy = '[object GeneratorFunction]',
  Zy = '[object Proxy]'
function Jy(e) {
  if (!Ky(e)) return !1
  var t = Gy(e)
  return t == Vy || t == Yy || t == Xy || t == Zy
}
var Vu = Jy
const Z = le(Vu)
var Qy = lt,
  eg = Qy['__core-js_shared__'],
  tg = eg,
  Qa = tg,
  us = (function () {
    var e = /[^.]+$/.exec((Qa && Qa.keys && Qa.keys.IE_PROTO) || '')
    return e ? 'Symbol(src)_1.' + e : ''
  })()
function rg(e) {
  return !!us && us in e
}
var ng = rg,
  ig = Function.prototype,
  ag = ig.toString
function og(e) {
  if (e != null) {
    try {
      return ag.call(e)
    } catch {}
    try {
      return e + ''
    } catch {}
  }
  return ''
}
var Zh = og,
  ug = Vu,
  cg = ng,
  sg = Mt,
  lg = Zh,
  fg = /[\\^$.*+?()[\]{}|]/g,
  hg = /^\[object .+?Constructor\]$/,
  dg = Function.prototype,
  pg = Object.prototype,
  vg = dg.toString,
  yg = pg.hasOwnProperty,
  gg = RegExp(
    '^' +
      vg
        .call(yg)
        .replace(fg, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$',
  )
function mg(e) {
  if (!sg(e) || cg(e)) return !1
  var t = ug(e) ? gg : hg
  return t.test(lg(e))
}
var bg = mg
function xg(e, t) {
  return e == null ? void 0 : e[t]
}
var wg = xg,
  Og = bg,
  Sg = wg
function Ag(e, t) {
  var r = Sg(e, t)
  return Og(r) ? r : void 0
}
var er = Ag,
  _g = er,
  $g = _g(Object, 'create'),
  ha = $g,
  cs = ha
function Pg() {
  ;(this.__data__ = cs ? cs(null) : {}), (this.size = 0)
}
var Tg = Pg
function Eg(e) {
  var t = this.has(e) && delete this.__data__[e]
  return (this.size -= t ? 1 : 0), t
}
var jg = Eg,
  Mg = ha,
  Cg = '__lodash_hash_undefined__',
  Ig = Object.prototype,
  kg = Ig.hasOwnProperty
function Ng(e) {
  var t = this.__data__
  if (Mg) {
    var r = t[e]
    return r === Cg ? void 0 : r
  }
  return kg.call(t, e) ? t[e] : void 0
}
var Dg = Ng,
  Lg = ha,
  Bg = Object.prototype,
  Rg = Bg.hasOwnProperty
function Fg(e) {
  var t = this.__data__
  return Lg ? t[e] !== void 0 : Rg.call(t, e)
}
var Wg = Fg,
  zg = ha,
  Ug = '__lodash_hash_undefined__'
function qg(e, t) {
  var r = this.__data__
  return (this.size += this.has(e) ? 0 : 1), (r[e] = zg && t === void 0 ? Ug : t), this
}
var Hg = qg,
  Gg = Tg,
  Kg = jg,
  Xg = Dg,
  Vg = Wg,
  Yg = Hg
function Nr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
Nr.prototype.clear = Gg
Nr.prototype.delete = Kg
Nr.prototype.get = Xg
Nr.prototype.has = Vg
Nr.prototype.set = Yg
var Zg = Nr
function Jg() {
  ;(this.__data__ = []), (this.size = 0)
}
var Qg = Jg
function em(e, t) {
  return e === t || (e !== e && t !== t)
}
var Yu = em,
  tm = Yu
function rm(e, t) {
  for (var r = e.length; r--; ) if (tm(e[r][0], t)) return r
  return -1
}
var da = rm,
  nm = da,
  im = Array.prototype,
  am = im.splice
function om(e) {
  var t = this.__data__,
    r = nm(t, e)
  if (r < 0) return !1
  var n = t.length - 1
  return r == n ? t.pop() : am.call(t, r, 1), --this.size, !0
}
var um = om,
  cm = da
function sm(e) {
  var t = this.__data__,
    r = cm(t, e)
  return r < 0 ? void 0 : t[r][1]
}
var lm = sm,
  fm = da
function hm(e) {
  return fm(this.__data__, e) > -1
}
var dm = hm,
  pm = da
function vm(e, t) {
  var r = this.__data__,
    n = pm(r, e)
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
}
var ym = vm,
  gm = Qg,
  mm = um,
  bm = lm,
  xm = dm,
  wm = ym
function Dr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
Dr.prototype.clear = gm
Dr.prototype.delete = mm
Dr.prototype.get = bm
Dr.prototype.has = xm
Dr.prototype.set = wm
var pa = Dr,
  Om = er,
  Sm = lt,
  Am = Om(Sm, 'Map'),
  Zu = Am,
  ss = Zg,
  _m = pa,
  $m = Zu
function Pm() {
  ;(this.size = 0), (this.__data__ = { hash: new ss(), map: new ($m || _m)(), string: new ss() })
}
var Tm = Pm
function Em(e) {
  var t = typeof e
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null
}
var jm = Em,
  Mm = jm
function Cm(e, t) {
  var r = e.__data__
  return Mm(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
}
var va = Cm,
  Im = va
function km(e) {
  var t = Im(this, e).delete(e)
  return (this.size -= t ? 1 : 0), t
}
var Nm = km,
  Dm = va
function Lm(e) {
  return Dm(this, e).get(e)
}
var Bm = Lm,
  Rm = va
function Fm(e) {
  return Rm(this, e).has(e)
}
var Wm = Fm,
  zm = va
function Um(e, t) {
  var r = zm(this, e),
    n = r.size
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
}
var qm = Um,
  Hm = Tm,
  Gm = Nm,
  Km = Bm,
  Xm = Wm,
  Vm = qm
function Lr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
Lr.prototype.clear = Hm
Lr.prototype.delete = Gm
Lr.prototype.get = Km
Lr.prototype.has = Xm
Lr.prototype.set = Vm
var Ju = Lr,
  Jh = Ju,
  Ym = 'Expected a function'
function Qu(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(Ym)
  var r = function () {
    var n = arguments,
      i = t ? t.apply(this, n) : n[0],
      a = r.cache
    if (a.has(i)) return a.get(i)
    var o = e.apply(this, n)
    return (r.cache = a.set(i, o) || a), o
  }
  return (r.cache = new (Qu.Cache || Jh)()), r
}
Qu.Cache = Jh
var Qh = Qu
const Zm = le(Qh)
var Jm = Qh,
  Qm = 500
function eb(e) {
  var t = Jm(e, function (n) {
      return r.size === Qm && r.clear(), n
    }),
    r = t.cache
  return t
}
var tb = eb,
  rb = tb,
  nb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  ib = /\\(\\)?/g,
  ab = rb(function (e) {
    var t = []
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(nb, function (r, n, i, a) {
        t.push(i ? a.replace(ib, '$1') : n || r)
      }),
      t
    )
  }),
  ob = ab
function ub(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; ) i[r] = t(e[r], r, e)
  return i
}
var ec = ub,
  ls = Xn,
  cb = ec,
  sb = Le,
  lb = Ir,
  fb = 1 / 0,
  fs = ls ? ls.prototype : void 0,
  hs = fs ? fs.toString : void 0
function ed(e) {
  if (typeof e == 'string') return e
  if (sb(e)) return cb(e, ed) + ''
  if (lb(e)) return hs ? hs.call(e) : ''
  var t = e + ''
  return t == '0' && 1 / e == -fb ? '-0' : t
}
var hb = ed,
  db = hb
function pb(e) {
  return e == null ? '' : db(e)
}
var td = pb,
  vb = Le,
  yb = Xu,
  gb = ob,
  mb = td
function bb(e, t) {
  return vb(e) ? e : yb(e, t) ? [e] : gb(mb(e))
}
var rd = bb,
  xb = Ir,
  wb = 1 / 0
function Ob(e) {
  if (typeof e == 'string' || xb(e)) return e
  var t = e + ''
  return t == '0' && 1 / e == -wb ? '-0' : t
}
var ya = Ob,
  Sb = rd,
  Ab = ya
function _b(e, t) {
  t = Sb(t, e)
  for (var r = 0, n = t.length; e != null && r < n; ) e = e[Ab(t[r++])]
  return r && r == n ? e : void 0
}
var tc = _b,
  $b = tc
function Pb(e, t, r) {
  var n = e == null ? void 0 : $b(e, t)
  return n === void 0 ? r : n
}
var nd = Pb
const Xe = le(nd)
function Tb(e) {
  return e == null
}
var Eb = Tb
const ie = le(Eb)
var jb = Ot,
  Mb = Le,
  Cb = St,
  Ib = '[object String]'
function kb(e) {
  return typeof e == 'string' || (!Mb(e) && Cb(e) && jb(e) == Ib)
}
var Nb = kb
const Vn = le(Nb)
var id = { exports: {} },
  oe = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ae = typeof Symbol == 'function' && Symbol.for,
  rc = Ae ? Symbol.for('react.element') : 60103,
  nc = Ae ? Symbol.for('react.portal') : 60106,
  ga = Ae ? Symbol.for('react.fragment') : 60107,
  ma = Ae ? Symbol.for('react.strict_mode') : 60108,
  ba = Ae ? Symbol.for('react.profiler') : 60114,
  xa = Ae ? Symbol.for('react.provider') : 60109,
  wa = Ae ? Symbol.for('react.context') : 60110,
  ic = Ae ? Symbol.for('react.async_mode') : 60111,
  Oa = Ae ? Symbol.for('react.concurrent_mode') : 60111,
  Sa = Ae ? Symbol.for('react.forward_ref') : 60112,
  Aa = Ae ? Symbol.for('react.suspense') : 60113,
  Db = Ae ? Symbol.for('react.suspense_list') : 60120,
  _a = Ae ? Symbol.for('react.memo') : 60115,
  $a = Ae ? Symbol.for('react.lazy') : 60116,
  Lb = Ae ? Symbol.for('react.block') : 60121,
  Bb = Ae ? Symbol.for('react.fundamental') : 60117,
  Rb = Ae ? Symbol.for('react.responder') : 60118,
  Fb = Ae ? Symbol.for('react.scope') : 60119
function ze(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case rc:
        switch (((e = e.type), e)) {
          case ic:
          case Oa:
          case ga:
          case ba:
          case ma:
          case Aa:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case wa:
              case Sa:
              case $a:
              case _a:
              case xa:
                return e
              default:
                return t
            }
        }
      case nc:
        return t
    }
  }
}
function ad(e) {
  return ze(e) === Oa
}
oe.AsyncMode = ic
oe.ConcurrentMode = Oa
oe.ContextConsumer = wa
oe.ContextProvider = xa
oe.Element = rc
oe.ForwardRef = Sa
oe.Fragment = ga
oe.Lazy = $a
oe.Memo = _a
oe.Portal = nc
oe.Profiler = ba
oe.StrictMode = ma
oe.Suspense = Aa
oe.isAsyncMode = function (e) {
  return ad(e) || ze(e) === ic
}
oe.isConcurrentMode = ad
oe.isContextConsumer = function (e) {
  return ze(e) === wa
}
oe.isContextProvider = function (e) {
  return ze(e) === xa
}
oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === rc
}
oe.isForwardRef = function (e) {
  return ze(e) === Sa
}
oe.isFragment = function (e) {
  return ze(e) === ga
}
oe.isLazy = function (e) {
  return ze(e) === $a
}
oe.isMemo = function (e) {
  return ze(e) === _a
}
oe.isPortal = function (e) {
  return ze(e) === nc
}
oe.isProfiler = function (e) {
  return ze(e) === ba
}
oe.isStrictMode = function (e) {
  return ze(e) === ma
}
oe.isSuspense = function (e) {
  return ze(e) === Aa
}
oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === ga ||
    e === Oa ||
    e === ba ||
    e === ma ||
    e === Aa ||
    e === Db ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === $a ||
        e.$$typeof === _a ||
        e.$$typeof === xa ||
        e.$$typeof === wa ||
        e.$$typeof === Sa ||
        e.$$typeof === Bb ||
        e.$$typeof === Rb ||
        e.$$typeof === Fb ||
        e.$$typeof === Lb))
  )
}
oe.typeOf = ze
id.exports = oe
var Eo = id.exports,
  Wb = Ot,
  zb = St,
  Ub = '[object Number]'
function qb(e) {
  return typeof e == 'number' || (zb(e) && Wb(e) == Ub)
}
var od = qb
const Hb = le(od)
var Gb = od
function Kb(e) {
  return Gb(e) && e != +e
}
var Xb = Kb
const Yn = le(Xb)
var et = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1
  },
  Ut = function (t) {
    return Vn(t) && t.indexOf('%') === t.length - 1
  },
  F = function (t) {
    return Hb(t) && !Yn(t)
  },
  be = function (t) {
    return F(t) || Vn(t)
  },
  Vb = 0,
  Pa = function (t) {
    var r = ++Vb
    return ''.concat(t || '').concat(r)
  },
  Zt = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
    if (!F(t) && !Vn(t)) return n
    var a
    if (Ut(t)) {
      var o = t.indexOf('%')
      a = (r * parseFloat(t.slice(0, o))) / 100
    } else a = +t
    return Yn(a) && (a = n), i && a > r && (a = r), a
  },
  $t = function (t) {
    if (!t) return null
    var r = Object.keys(t)
    return r && r.length ? t[r[0]] : null
  },
  Yb = function (t) {
    if (!Array.isArray(t)) return !1
    for (var r = t.length, n = {}, i = 0; i < r; i++)
      if (!n[t[i]]) n[t[i]] = !0
      else return !0
    return !1
  },
  ir = function (t, r) {
    return F(t) && F(r)
      ? function (n) {
          return t + n * (r - t)
        }
      : function () {
          return r
        }
  }
function jo(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == 'function' ? t(n) : Xe(n, t)) === r
      })
}
function pr(e, t) {
  for (var r in e) if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])) return !1
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n)) return !1
  return !0
}
function Mo(e) {
  '@babel/helpers - typeof'
  return (
    (Mo =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Mo(e)
  )
}
var Zb = ['viewBox', 'children'],
  Jb = [
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-busy',
    'aria-checked',
    'aria-colcount',
    'aria-colindex',
    'aria-colspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-modal',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
    'className',
    'color',
    'height',
    'id',
    'lang',
    'max',
    'media',
    'method',
    'min',
    'name',
    'style',
    'target',
    'width',
    'role',
    'tabIndex',
    'accentHeight',
    'accumulate',
    'additive',
    'alignmentBaseline',
    'allowReorder',
    'alphabetic',
    'amplitude',
    'arabicForm',
    'ascent',
    'attributeName',
    'attributeType',
    'autoReverse',
    'azimuth',
    'baseFrequency',
    'baselineShift',
    'baseProfile',
    'bbox',
    'begin',
    'bias',
    'by',
    'calcMode',
    'capHeight',
    'clip',
    'clipPath',
    'clipPathUnits',
    'clipRule',
    'colorInterpolation',
    'colorInterpolationFilters',
    'colorProfile',
    'colorRendering',
    'contentScriptType',
    'contentStyleType',
    'cursor',
    'cx',
    'cy',
    'd',
    'decelerate',
    'descent',
    'diffuseConstant',
    'direction',
    'display',
    'divisor',
    'dominantBaseline',
    'dur',
    'dx',
    'dy',
    'edgeMode',
    'elevation',
    'enableBackground',
    'end',
    'exponent',
    'externalResourcesRequired',
    'fill',
    'fillOpacity',
    'fillRule',
    'filter',
    'filterRes',
    'filterUnits',
    'floodColor',
    'floodOpacity',
    'focusable',
    'fontFamily',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'format',
    'from',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyphName',
    'glyphOrientationHorizontal',
    'glyphOrientationVertical',
    'glyphRef',
    'gradientTransform',
    'gradientUnits',
    'hanging',
    'horizAdvX',
    'horizOriginX',
    'href',
    'ideographic',
    'imageRendering',
    'in2',
    'in',
    'intercept',
    'k1',
    'k2',
    'k3',
    'k4',
    'k',
    'kernelMatrix',
    'kernelUnitLength',
    'kerning',
    'keyPoints',
    'keySplines',
    'keyTimes',
    'lengthAdjust',
    'letterSpacing',
    'lightingColor',
    'limitingConeAngle',
    'local',
    'markerEnd',
    'markerHeight',
    'markerMid',
    'markerStart',
    'markerUnits',
    'markerWidth',
    'mask',
    'maskContentUnits',
    'maskUnits',
    'mathematical',
    'mode',
    'numOctaves',
    'offset',
    'opacity',
    'operator',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'overlinePosition',
    'overlineThickness',
    'paintOrder',
    'panose1',
    'pathLength',
    'patternContentUnits',
    'patternTransform',
    'patternUnits',
    'pointerEvents',
    'pointsAtX',
    'pointsAtY',
    'pointsAtZ',
    'preserveAlpha',
    'preserveAspectRatio',
    'primitiveUnits',
    'r',
    'radius',
    'refX',
    'refY',
    'renderingIntent',
    'repeatCount',
    'repeatDur',
    'requiredExtensions',
    'requiredFeatures',
    'restart',
    'result',
    'rotate',
    'rx',
    'ry',
    'seed',
    'shapeRendering',
    'slope',
    'spacing',
    'specularConstant',
    'specularExponent',
    'speed',
    'spreadMethod',
    'startOffset',
    'stdDeviation',
    'stemh',
    'stemv',
    'stitchTiles',
    'stopColor',
    'stopOpacity',
    'strikethroughPosition',
    'strikethroughThickness',
    'string',
    'stroke',
    'strokeDasharray',
    'strokeDashoffset',
    'strokeLinecap',
    'strokeLinejoin',
    'strokeMiterlimit',
    'strokeOpacity',
    'strokeWidth',
    'surfaceScale',
    'systemLanguage',
    'tableValues',
    'targetX',
    'targetY',
    'textAnchor',
    'textDecoration',
    'textLength',
    'textRendering',
    'to',
    'transform',
    'u1',
    'u2',
    'underlinePosition',
    'underlineThickness',
    'unicode',
    'unicodeBidi',
    'unicodeRange',
    'unitsPerEm',
    'vAlphabetic',
    'values',
    'vectorEffect',
    'version',
    'vertAdvY',
    'vertOriginX',
    'vertOriginY',
    'vHanging',
    'vIdeographic',
    'viewTarget',
    'visibility',
    'vMathematical',
    'widths',
    'wordSpacing',
    'writingMode',
    'x1',
    'x2',
    'x',
    'xChannelSelector',
    'xHeight',
    'xlinkActuate',
    'xlinkArcrole',
    'xlinkHref',
    'xlinkRole',
    'xlinkShow',
    'xlinkTitle',
    'xlinkType',
    'xmlBase',
    'xmlLang',
    'xmlns',
    'xmlnsXlink',
    'xmlSpace',
    'y1',
    'y2',
    'y',
    'yChannelSelector',
    'z',
    'zoomAndPan',
    'ref',
    'key',
    'angle',
  ],
  ds = ['points', 'pathLength'],
  eo = { svg: Zb, polygon: ds, polyline: ds },
  ac = [
    'dangerouslySetInnerHTML',
    'onCopy',
    'onCopyCapture',
    'onCut',
    'onCutCapture',
    'onPaste',
    'onPasteCapture',
    'onCompositionEnd',
    'onCompositionEndCapture',
    'onCompositionStart',
    'onCompositionStartCapture',
    'onCompositionUpdate',
    'onCompositionUpdateCapture',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onChangeCapture',
    'onBeforeInput',
    'onBeforeInputCapture',
    'onInput',
    'onInputCapture',
    'onReset',
    'onResetCapture',
    'onSubmit',
    'onSubmitCapture',
    'onInvalid',
    'onInvalidCapture',
    'onLoad',
    'onLoadCapture',
    'onError',
    'onErrorCapture',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyPressCapture',
    'onKeyUp',
    'onKeyUpCapture',
    'onAbort',
    'onAbortCapture',
    'onCanPlay',
    'onCanPlayCapture',
    'onCanPlayThrough',
    'onCanPlayThroughCapture',
    'onDurationChange',
    'onDurationChangeCapture',
    'onEmptied',
    'onEmptiedCapture',
    'onEncrypted',
    'onEncryptedCapture',
    'onEnded',
    'onEndedCapture',
    'onLoadedData',
    'onLoadedDataCapture',
    'onLoadedMetadata',
    'onLoadedMetadataCapture',
    'onLoadStart',
    'onLoadStartCapture',
    'onPause',
    'onPauseCapture',
    'onPlay',
    'onPlayCapture',
    'onPlaying',
    'onPlayingCapture',
    'onProgress',
    'onProgressCapture',
    'onRateChange',
    'onRateChangeCapture',
    'onSeeked',
    'onSeekedCapture',
    'onSeeking',
    'onSeekingCapture',
    'onStalled',
    'onStalledCapture',
    'onSuspend',
    'onSuspendCapture',
    'onTimeUpdate',
    'onTimeUpdateCapture',
    'onVolumeChange',
    'onVolumeChangeCapture',
    'onWaiting',
    'onWaitingCapture',
    'onAuxClick',
    'onAuxClickCapture',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onContextMenuCapture',
    'onDoubleClick',
    'onDoubleClickCapture',
    'onDrag',
    'onDragCapture',
    'onDragEnd',
    'onDragEndCapture',
    'onDragEnter',
    'onDragEnterCapture',
    'onDragExit',
    'onDragExitCapture',
    'onDragLeave',
    'onDragLeaveCapture',
    'onDragOver',
    'onDragOverCapture',
    'onDragStart',
    'onDragStartCapture',
    'onDrop',
    'onDropCapture',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseMoveCapture',
    'onMouseOut',
    'onMouseOutCapture',
    'onMouseOver',
    'onMouseOverCapture',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onSelectCapture',
    'onTouchCancel',
    'onTouchCancelCapture',
    'onTouchEnd',
    'onTouchEndCapture',
    'onTouchMove',
    'onTouchMoveCapture',
    'onTouchStart',
    'onTouchStartCapture',
    'onPointerDown',
    'onPointerDownCapture',
    'onPointerMove',
    'onPointerMoveCapture',
    'onPointerUp',
    'onPointerUpCapture',
    'onPointerCancel',
    'onPointerCancelCapture',
    'onPointerEnter',
    'onPointerEnterCapture',
    'onPointerLeave',
    'onPointerLeaveCapture',
    'onPointerOver',
    'onPointerOverCapture',
    'onPointerOut',
    'onPointerOutCapture',
    'onGotPointerCapture',
    'onGotPointerCaptureCapture',
    'onLostPointerCapture',
    'onLostPointerCaptureCapture',
    'onScroll',
    'onScrollCapture',
    'onWheel',
    'onWheelCapture',
    'onAnimationStart',
    'onAnimationStartCapture',
    'onAnimationEnd',
    'onAnimationEndCapture',
    'onAnimationIteration',
    'onAnimationIterationCapture',
    'onTransitionEnd',
    'onTransitionEndCapture',
  ],
  wi = function (t, r) {
    if (!t || typeof t == 'function' || typeof t == 'boolean') return null
    var n = t
    if ((N.isValidElement(t) && (n = t.props), !kr(n))) return null
    var i = {}
    return (
      Object.keys(n).forEach(function (a) {
        ac.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o)
            })
      }),
      i
    )
  },
  Qb = function (t, r, n) {
    return function (i) {
      return t(r, n, i), null
    }
  },
  Oi = function (t, r, n) {
    if (!kr(t) || Mo(t) !== 'object') return null
    var i = null
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a]
        ac.includes(a) && typeof o == 'function' && (i || (i = {}), (i[a] = Qb(o, r, n)))
      }),
      i
    )
  },
  e0 = ['children'],
  t0 = ['children']
function ps(e, t) {
  if (e == null) return {}
  var r = r0(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function r0(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
var vs = {
    click: 'onClick',
    mousedown: 'onMouseDown',
    mouseup: 'onMouseUp',
    mouseover: 'onMouseOver',
    mousemove: 'onMouseMove',
    mouseout: 'onMouseOut',
    mouseenter: 'onMouseEnter',
    mouseleave: 'onMouseLeave',
    touchcancel: 'onTouchCancel',
    touchend: 'onTouchEnd',
    touchmove: 'onTouchMove',
    touchstart: 'onTouchStart',
  },
  yt = function (t) {
    return typeof t == 'string' ? t : t ? t.displayName || t.name || 'Component' : ''
  },
  ys = null,
  to = null,
  oc = function e(t) {
    if (t === ys && Array.isArray(to)) return to
    var r = []
    return (
      N.Children.forEach(t, function (n) {
        ie(n) || (Eo.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n))
      }),
      (to = r),
      (ys = t),
      r
    )
  }
function tt(e, t) {
  var r = [],
    n = []
  return (
    Array.isArray(t)
      ? (n = t.map(function (i) {
          return yt(i)
        }))
      : (n = [yt(t)]),
    oc(e).forEach(function (i) {
      var a = Xe(i, 'type.displayName') || Xe(i, 'type.name')
      n.indexOf(a) !== -1 && r.push(i)
    }),
    r
  )
}
function Fe(e, t) {
  var r = tt(e, t)
  return r && r[0]
}
var gs = function (t) {
    if (!t || !t.props) return !1
    var r = t.props,
      n = r.width,
      i = r.height
    return !(!F(n) || n <= 0 || !F(i) || i <= 0)
  },
  n0 = [
    'a',
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColormatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-url',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'lineGradient',
    'marker',
    'mask',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'script',
    'set',
    'stop',
    'style',
    'svg',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tref',
    'tspan',
    'use',
    'view',
    'vkern',
  ],
  i0 = function (t) {
    return t && t.type && Vn(t.type) && n0.indexOf(t.type) >= 0
  },
  a0 = function (t, r, n, i) {
    var a,
      o = (a = eo == null ? void 0 : eo[i]) !== null && a !== void 0 ? a : []
    return (!Z(t) && ((i && o.includes(r)) || Jb.includes(r))) || (n && ac.includes(r))
  },
  re = function (t, r, n) {
    if (!t || typeof t == 'function' || typeof t == 'boolean') return null
    var i = t
    if ((N.isValidElement(t) && (i = t.props), !kr(i))) return null
    var a = {}
    return (
      Object.keys(i).forEach(function (o) {
        var u
        a0((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o])
      }),
      a
    )
  },
  Co = function e(t, r) {
    if (t === r) return !0
    var n = N.Children.count(t)
    if (n !== N.Children.count(r)) return !1
    if (n === 0) return !0
    if (n === 1) return ms(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r)
    for (var i = 0; i < n; i++) {
      var a = t[i],
        o = r[i]
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1
      } else if (!ms(a, o)) return !1
    }
    return !0
  },
  ms = function (t, r) {
    if (ie(t) && ie(r)) return !0
    if (!ie(t) && !ie(r)) {
      var n = t.props || {},
        i = n.children,
        a = ps(n, e0),
        o = r.props || {},
        u = o.children,
        c = ps(o, t0)
      return i && u ? pr(a, c) && Co(i, u) : !i && !u ? pr(a, c) : !1
    }
    return !1
  },
  bs = function (t, r) {
    var n = [],
      i = {}
    return (
      oc(t).forEach(function (a, o) {
        if (i0(a)) n.push(a)
        else if (a) {
          var u = yt(a.type),
            c = r[u] || {},
            s = c.handler,
            f = c.once
          if (s && (!f || !i[u])) {
            var l = s(a, u, o)
            n.push(l), (i[u] = !0)
          }
        }
      }),
      n
    )
  },
  o0 = function (t) {
    var r = t && t.type
    return r && vs[r] ? vs[r] : null
  },
  u0 = function (t, r) {
    return oc(r).indexOf(t)
  },
  c0 = ['children', 'width', 'height', 'viewBox', 'className', 'style', 'title', 'desc']
function Io() {
  return (
    (Io = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Io.apply(this, arguments)
  )
}
function s0(e, t) {
  if (e == null) return {}
  var r = l0(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function l0(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function ko(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    u = e.title,
    c = e.desc,
    s = s0(e, c0),
    f = i || { width: r, height: n, x: 0, y: 0 },
    l = ae('recharts-surface', a)
  return _.createElement(
    'svg',
    Io({}, re(s, !0, 'svg'), {
      className: l,
      width: r,
      height: n,
      style: o,
      viewBox: ''.concat(f.x, ' ').concat(f.y, ' ').concat(f.width, ' ').concat(f.height),
    }),
    _.createElement('title', null, u),
    _.createElement('desc', null, c),
    t,
  )
}
var f0 = ['children', 'className']
function No() {
  return (
    (No = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    No.apply(this, arguments)
  )
}
function h0(e, t) {
  if (e == null) return {}
  var r = d0(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function d0(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
var Se = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      i = h0(e, f0),
      a = ae('recharts-layer', n)
    return _.createElement('g', No({ className: a }, re(i, !0), { ref: t }), r)
  }),
  gt = function (t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a]
  }
function p0(e, t, r) {
  var n = -1,
    i = e.length
  t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r), r < 0 && (r += i), (i = t > r ? 0 : (r - t) >>> 0), (t >>>= 0)
  for (var a = Array(i); ++n < i; ) a[n] = e[n + t]
  return a
}
var v0 = p0,
  y0 = v0
function g0(e, t, r) {
  var n = e.length
  return (r = r === void 0 ? n : r), !t && r >= n ? e : y0(e, t, r)
}
var m0 = g0,
  b0 = '\\ud800-\\udfff',
  x0 = '\\u0300-\\u036f',
  w0 = '\\ufe20-\\ufe2f',
  O0 = '\\u20d0-\\u20ff',
  S0 = x0 + w0 + O0,
  A0 = '\\ufe0e\\ufe0f',
  _0 = '\\u200d',
  $0 = RegExp('[' + _0 + b0 + S0 + A0 + ']')
function P0(e) {
  return $0.test(e)
}
var ud = P0
function T0(e) {
  return e.split('')
}
var E0 = T0,
  cd = '\\ud800-\\udfff',
  j0 = '\\u0300-\\u036f',
  M0 = '\\ufe20-\\ufe2f',
  C0 = '\\u20d0-\\u20ff',
  I0 = j0 + M0 + C0,
  k0 = '\\ufe0e\\ufe0f',
  N0 = '[' + cd + ']',
  Do = '[' + I0 + ']',
  Lo = '\\ud83c[\\udffb-\\udfff]',
  D0 = '(?:' + Do + '|' + Lo + ')',
  sd = '[^' + cd + ']',
  ld = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  fd = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  L0 = '\\u200d',
  hd = D0 + '?',
  dd = '[' + k0 + ']?',
  B0 = '(?:' + L0 + '(?:' + [sd, ld, fd].join('|') + ')' + dd + hd + ')*',
  R0 = dd + hd + B0,
  F0 = '(?:' + [sd + Do + '?', Do, ld, fd, N0].join('|') + ')',
  W0 = RegExp(Lo + '(?=' + Lo + ')|' + F0 + R0, 'g')
function z0(e) {
  return e.match(W0) || []
}
var U0 = z0,
  q0 = E0,
  H0 = ud,
  G0 = U0
function K0(e) {
  return H0(e) ? G0(e) : q0(e)
}
var X0 = K0,
  V0 = m0,
  Y0 = ud,
  Z0 = X0,
  J0 = td
function Q0(e) {
  return function (t) {
    t = J0(t)
    var r = Y0(t) ? Z0(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      i = r ? V0(r, 1).join('') : t.slice(1)
    return n[e]() + i
  }
}
var ex = Q0,
  tx = ex,
  rx = tx('toUpperCase'),
  nx = rx
const Ta = le(nx)
function se(e) {
  return function () {
    return e
  }
}
const pd = Math.cos,
  Si = Math.sin,
  rt = Math.sqrt,
  Ai = Math.PI,
  Ea = 2 * Ai,
  Bo = Math.PI,
  Ro = 2 * Bo,
  Ft = 1e-6,
  ix = Ro - Ft
function vd(e) {
  this._ += e[0]
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t]
}
function ax(e) {
  let t = Math.floor(e)
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`)
  if (t > 15) return vd
  const r = 10 ** t
  return function (n) {
    this._ += n[0]
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i]
  }
}
class ox {
  constructor(t) {
    ;(this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = ''), (this._append = t == null ? vd : ax(t))
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`
  }
  closePath() {
    this._x1 !== null && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`)
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`
  }
  arcTo(t, r, n, i, a) {
    if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0)) throw new Error(`negative radius: ${a}`)
    let o = this._x1,
      u = this._y1,
      c = n - t,
      s = i - r,
      f = o - t,
      l = u - r,
      h = f * f + l * l
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`
    else if (h > Ft)
      if (!(Math.abs(l * c - s * f) > Ft) || !a) this._append`L${(this._x1 = t)},${(this._y1 = r)}`
      else {
        let d = n - o,
          y = i - u,
          v = c * c + s * s,
          p = d * d + y * y,
          x = Math.sqrt(v),
          b = Math.sqrt(h),
          w = a * Math.tan((Bo - Math.acos((v + h - p) / (2 * x * b))) / 2),
          g = w / b,
          m = w / x
        Math.abs(g - 1) > Ft && this._append`L${t + g * f},${r + g * l}`,
          this._append`A${a},${a},0,0,${+(l * d > f * y)},${(this._x1 = t + m * c)},${(this._y1 = r + m * s)}`
      }
  }
  arc(t, r, n, i, a, o) {
    if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0)) throw new Error(`negative radius: ${n}`)
    let u = n * Math.cos(i),
      c = n * Math.sin(i),
      s = t + u,
      f = r + c,
      l = 1 ^ o,
      h = o ? i - a : a - i
    this._x1 === null
      ? this._append`M${s},${f}`
      : (Math.abs(this._x1 - s) > Ft || Math.abs(this._y1 - f) > Ft) && this._append`L${s},${f}`,
      n &&
        (h < 0 && (h = (h % Ro) + Ro),
        h > ix
          ? this._append`A${n},${n},0,1,${l},${t - u},${r - c}A${n},${n},0,1,${l},${(this._x1 = s)},${(this._y1 = f)}`
          : h > Ft &&
            this
              ._append`A${n},${n},0,${+(h >= Bo)},${l},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`)
  }
  rect(t, r, n, i) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`
  }
  toString() {
    return this._
  }
}
function uc(e) {
  let t = 3
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t
      if (r == null) t = null
      else {
        const n = Math.floor(r)
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`)
        t = n
      }
      return e
    }),
    () => new ox(t)
  )
}
function cc(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e)
}
function yd(e) {
  this._context = e
}
yd.prototype = {
  areaStart: function () {
    this._line = 0
  },
  areaEnd: function () {
    this._line = NaN
  },
  lineStart: function () {
    this._point = 0
  },
  lineEnd: function () {
    ;(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(), (this._line = 1 - this._line)
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ;(this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t)
        break
      case 1:
        this._point = 2
      default:
        this._context.lineTo(e, t)
        break
    }
  },
}
function ja(e) {
  return new yd(e)
}
function gd(e) {
  return e[0]
}
function md(e) {
  return e[1]
}
function bd(e, t) {
  var r = se(!0),
    n = null,
    i = ja,
    a = null,
    o = uc(u)
  ;(e = typeof e == 'function' ? e : e === void 0 ? gd : se(e)),
    (t = typeof t == 'function' ? t : t === void 0 ? md : se(t))
  function u(c) {
    var s,
      f = (c = cc(c)).length,
      l,
      h = !1,
      d
    for (n == null && (a = i((d = o()))), s = 0; s <= f; ++s)
      !(s < f && r((l = c[s]), s, c)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()),
        h && a.point(+e(l, s, c), +t(l, s, c))
    if (d) return (a = null), d + '' || null
  }
  return (
    (u.x = function (c) {
      return arguments.length ? ((e = typeof c == 'function' ? c : se(+c)), u) : e
    }),
    (u.y = function (c) {
      return arguments.length ? ((t = typeof c == 'function' ? c : se(+c)), u) : t
    }),
    (u.defined = function (c) {
      return arguments.length ? ((r = typeof c == 'function' ? c : se(!!c)), u) : r
    }),
    (u.curve = function (c) {
      return arguments.length ? ((i = c), n != null && (a = i(n)), u) : i
    }),
    (u.context = function (c) {
      return arguments.length ? (c == null ? (n = a = null) : (a = i((n = c))), u) : n
    }),
    u
  )
}
function ui(e, t, r) {
  var n = null,
    i = se(!0),
    a = null,
    o = ja,
    u = null,
    c = uc(s)
  ;(e = typeof e == 'function' ? e : e === void 0 ? gd : se(+e)),
    (t = typeof t == 'function' ? t : se(t === void 0 ? 0 : +t)),
    (r = typeof r == 'function' ? r : r === void 0 ? md : se(+r))
  function s(l) {
    var h,
      d,
      y,
      v = (l = cc(l)).length,
      p,
      x = !1,
      b,
      w = new Array(v),
      g = new Array(v)
    for (a == null && (u = o((b = c()))), h = 0; h <= v; ++h) {
      if (!(h < v && i((p = l[h]), h, l)) === x)
        if ((x = !x)) (d = h), u.areaStart(), u.lineStart()
        else {
          for (u.lineEnd(), u.lineStart(), y = h - 1; y >= d; --y) u.point(w[y], g[y])
          u.lineEnd(), u.areaEnd()
        }
      x && ((w[h] = +e(p, h, l)), (g[h] = +t(p, h, l)), u.point(n ? +n(p, h, l) : w[h], r ? +r(p, h, l) : g[h]))
    }
    if (b) return (u = null), b + '' || null
  }
  function f() {
    return bd().defined(i).curve(o).context(a)
  }
  return (
    (s.x = function (l) {
      return arguments.length ? ((e = typeof l == 'function' ? l : se(+l)), (n = null), s) : e
    }),
    (s.x0 = function (l) {
      return arguments.length ? ((e = typeof l == 'function' ? l : se(+l)), s) : e
    }),
    (s.x1 = function (l) {
      return arguments.length ? ((n = l == null ? null : typeof l == 'function' ? l : se(+l)), s) : n
    }),
    (s.y = function (l) {
      return arguments.length ? ((t = typeof l == 'function' ? l : se(+l)), (r = null), s) : t
    }),
    (s.y0 = function (l) {
      return arguments.length ? ((t = typeof l == 'function' ? l : se(+l)), s) : t
    }),
    (s.y1 = function (l) {
      return arguments.length ? ((r = l == null ? null : typeof l == 'function' ? l : se(+l)), s) : r
    }),
    (s.lineX0 = s.lineY0 =
      function () {
        return f().x(e).y(t)
      }),
    (s.lineY1 = function () {
      return f().x(e).y(r)
    }),
    (s.lineX1 = function () {
      return f().x(n).y(t)
    }),
    (s.defined = function (l) {
      return arguments.length ? ((i = typeof l == 'function' ? l : se(!!l)), s) : i
    }),
    (s.curve = function (l) {
      return arguments.length ? ((o = l), a != null && (u = o(a)), s) : o
    }),
    (s.context = function (l) {
      return arguments.length ? (l == null ? (a = u = null) : (u = o((a = l))), s) : a
    }),
    s
  )
}
class xd {
  constructor(t, r) {
    ;(this._context = t), (this._x = r)
  }
  areaStart() {
    this._line = 0
  }
  areaEnd() {
    this._line = NaN
  }
  lineStart() {
    this._point = 0
  }
  lineEnd() {
    ;(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(), (this._line = 1 - this._line)
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        ;(this._point = 1), this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r)
        break
      }
      case 1:
        this._point = 2
      default: {
        this._x
          ? this._context.bezierCurveTo((this._x0 = (this._x0 + t) / 2), this._y0, this._x0, r, t, r)
          : this._context.bezierCurveTo(this._x0, (this._y0 = (this._y0 + r) / 2), t, this._y0, t, r)
        break
      }
    }
    ;(this._x0 = t), (this._y0 = r)
  }
}
function ux(e) {
  return new xd(e, !0)
}
function cx(e) {
  return new xd(e, !1)
}
const sc = {
    draw(e, t) {
      const r = rt(t / Ai)
      e.moveTo(r, 0), e.arc(0, 0, r, 0, Ea)
    },
  },
  sx = {
    draw(e, t) {
      const r = rt(t / 5) / 2
      e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath()
    },
  },
  wd = rt(1 / 3),
  lx = wd * 2,
  fx = {
    draw(e, t) {
      const r = rt(t / lx),
        n = r * wd
      e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath()
    },
  },
  hx = {
    draw(e, t) {
      const r = rt(t),
        n = -r / 2
      e.rect(n, n, r, r)
    },
  },
  dx = 0.8908130915292852,
  Od = Si(Ai / 10) / Si((7 * Ai) / 10),
  px = Si(Ea / 10) * Od,
  vx = -pd(Ea / 10) * Od,
  yx = {
    draw(e, t) {
      const r = rt(t * dx),
        n = px * r,
        i = vx * r
      e.moveTo(0, -r), e.lineTo(n, i)
      for (let a = 1; a < 5; ++a) {
        const o = (Ea * a) / 5,
          u = pd(o),
          c = Si(o)
        e.lineTo(c * r, -u * r), e.lineTo(u * n - c * i, c * n + u * i)
      }
      e.closePath()
    },
  },
  ro = rt(3),
  gx = {
    draw(e, t) {
      const r = -rt(t / (ro * 3))
      e.moveTo(0, r * 2), e.lineTo(-ro * r, -r), e.lineTo(ro * r, -r), e.closePath()
    },
  },
  Ue = -0.5,
  qe = rt(3) / 2,
  Fo = 1 / rt(12),
  mx = (Fo / 2 + 1) * 3,
  bx = {
    draw(e, t) {
      const r = rt(t / mx),
        n = r / 2,
        i = r * Fo,
        a = n,
        o = r * Fo + r,
        u = -a,
        c = o
      e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(u, c),
        e.lineTo(Ue * n - qe * i, qe * n + Ue * i),
        e.lineTo(Ue * a - qe * o, qe * a + Ue * o),
        e.lineTo(Ue * u - qe * c, qe * u + Ue * c),
        e.lineTo(Ue * n + qe * i, Ue * i - qe * n),
        e.lineTo(Ue * a + qe * o, Ue * o - qe * a),
        e.lineTo(Ue * u + qe * c, Ue * c - qe * u),
        e.closePath()
    },
  }
function xx(e, t) {
  let r = null,
    n = uc(i)
  ;(e = typeof e == 'function' ? e : se(e || sc)), (t = typeof t == 'function' ? t : se(t === void 0 ? 64 : +t))
  function i() {
    let a
    if ((r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a))
      return (r = null), a + '' || null
  }
  return (
    (i.type = function (a) {
      return arguments.length ? ((e = typeof a == 'function' ? a : se(a)), i) : e
    }),
    (i.size = function (a) {
      return arguments.length ? ((t = typeof a == 'function' ? a : se(+a)), i) : t
    }),
    (i.context = function (a) {
      return arguments.length ? ((r = a ?? null), i) : r
    }),
    i
  )
}
function _i() {}
function $i(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  )
}
function Sd(e) {
  this._context = e
}
Sd.prototype = {
  areaStart: function () {
    this._line = 0
  },
  areaEnd: function () {
    this._line = NaN
  },
  lineStart: function () {
    ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0)
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        $i(this, this._x1, this._y1)
      case 2:
        this._context.lineTo(this._x1, this._y1)
        break
    }
    ;(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(), (this._line = 1 - this._line)
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ;(this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t)
        break
      case 1:
        this._point = 2
        break
      case 2:
        ;(this._point = 3), this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6)
      default:
        $i(this, e, t)
        break
    }
    ;(this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t)
  },
}
function wx(e) {
  return new Sd(e)
}
function Ad(e) {
  this._context = e
}
Ad.prototype = {
  areaStart: _i,
  areaEnd: _i,
  lineStart: function () {
    ;(this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0)
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath()
        break
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
          this._context.closePath()
        break
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
        break
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ;(this._point = 1), (this._x2 = e), (this._y2 = t)
        break
      case 1:
        ;(this._point = 2), (this._x3 = e), (this._y3 = t)
        break
      case 2:
        ;(this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6)
        break
      default:
        $i(this, e, t)
        break
    }
    ;(this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t)
  },
}
function Ox(e) {
  return new Ad(e)
}
function _d(e) {
  this._context = e
}
_d.prototype = {
  areaStart: function () {
    this._line = 0
  },
  areaEnd: function () {
    this._line = NaN
  },
  lineStart: function () {
    ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0)
  },
  lineEnd: function () {
    ;(this._line || (this._line !== 0 && this._point === 3)) && this._context.closePath(), (this._line = 1 - this._line)
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1
        break
      case 1:
        this._point = 2
        break
      case 2:
        this._point = 3
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n)
        break
      case 3:
        this._point = 4
      default:
        $i(this, e, t)
        break
    }
    ;(this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t)
  },
}
function Sx(e) {
  return new _d(e)
}
function $d(e) {
  this._context = e
}
$d.prototype = {
  areaStart: _i,
  areaEnd: _i,
  lineStart: function () {
    this._point = 0
  },
  lineEnd: function () {
    this._point && this._context.closePath()
  },
  point: function (e, t) {
    ;(e = +e), (t = +t), this._point ? this._context.lineTo(e, t) : ((this._point = 1), this._context.moveTo(e, t))
  },
}
function Ax(e) {
  return new $d(e)
}
function xs(e) {
  return e < 0 ? -1 : 1
}
function ws(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    u = (a * i + o * n) / (n + i)
  return (xs(a) + xs(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0
}
function Os(e, t) {
  var r = e._x1 - e._x0
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t
}
function no(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    u = (a - n) / 3
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o)
}
function Pi(e) {
  this._context = e
}
Pi.prototype = {
  areaStart: function () {
    this._line = 0
  },
  areaEnd: function () {
    this._line = NaN
  },
  lineStart: function () {
    ;(this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0)
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1)
        break
      case 3:
        no(this, this._t0, Os(this, this._t0))
        break
    }
    ;(this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(), (this._line = 1 - this._line)
  },
  point: function (e, t) {
    var r = NaN
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ;(this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t)
          break
        case 1:
          this._point = 2
          break
        case 2:
          ;(this._point = 3), no(this, Os(this, (r = ws(this, e, t))), r)
          break
        default:
          no(this, this._t0, (r = ws(this, e, t)))
          break
      }
      ;(this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t), (this._t0 = r)
    }
  },
}
function Pd(e) {
  this._context = new Td(e)
}
;(Pd.prototype = Object.create(Pi.prototype)).point = function (e, t) {
  Pi.prototype.point.call(this, t, e)
}
function Td(e) {
  this._context = e
}
Td.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e)
  },
  closePath: function () {
    this._context.closePath()
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e)
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i)
  },
}
function _x(e) {
  return new Pi(e)
}
function $x(e) {
  return new Pd(e)
}
function Ed(e) {
  this._context = e
}
Ed.prototype = {
  areaStart: function () {
    this._line = 0
  },
  areaEnd: function () {
    this._line = NaN
  },
  lineStart: function () {
    ;(this._x = []), (this._y = [])
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length
    if (r)
      if ((this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2))
        this._context.lineTo(e[1], t[1])
      else
        for (var n = Ss(e), i = Ss(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o])
    ;(this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null)
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t)
  },
}
function Ss(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r)
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1])
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    (n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1])
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t]
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1]
  return [i, a]
}
function Px(e) {
  return new Ed(e)
}
function Ma(e, t) {
  ;(this._context = e), (this._t = t)
}
Ma.prototype = {
  areaStart: function () {
    this._line = 0
  },
  areaEnd: function () {
    this._line = NaN
  },
  lineStart: function () {
    ;(this._x = this._y = NaN), (this._point = 0)
  },
  lineEnd: function () {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line))
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ;(this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t)
        break
      case 1:
        this._point = 2
      default: {
        if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t)
        else {
          var r = this._x * (1 - this._t) + e * this._t
          this._context.lineTo(r, this._y), this._context.lineTo(r, t)
        }
        break
      }
    }
    ;(this._x = e), (this._y = t)
  },
}
function Tx(e) {
  return new Ma(e, 0.5)
}
function Ex(e) {
  return new Ma(e, 0)
}
function jx(e) {
  return new Ma(e, 1)
}
function gr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1]
}
function Wo(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t
  return r
}
function Mx(e, t) {
  return e[t]
}
function Cx(e) {
  const t = []
  return (t.key = e), t
}
function Ix() {
  var e = se([]),
    t = Wo,
    r = gr,
    n = Mx
  function i(a) {
    var o = Array.from(e.apply(this, arguments), Cx),
      u,
      c = o.length,
      s = -1,
      f
    for (const l of a) for (u = 0, ++s; u < c; ++u) (o[u][s] = [0, +n(l, o[u].key, s, a)]).data = l
    for (u = 0, f = cc(t(o)); u < c; ++u) o[f[u]].index = u
    return r(o, f), o
  }
  return (
    (i.keys = function (a) {
      return arguments.length ? ((e = typeof a == 'function' ? a : se(Array.from(a))), i) : e
    }),
    (i.value = function (a) {
      return arguments.length ? ((n = typeof a == 'function' ? a : se(+a)), i) : n
    }),
    (i.order = function (a) {
      return arguments.length ? ((t = a == null ? Wo : typeof a == 'function' ? a : se(Array.from(a))), i) : t
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? gr), i) : r
    }),
    i
  )
}
function kx(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o
    }
    gr(e, t)
  }
}
function Nx(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0
      n[r][1] += n[r][0] = -u / 2
    }
    gr(e, t)
  }
}
function Dx(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, c = 0, s = 0; u < o; ++u) {
        for (var f = e[t[u]], l = f[n][1] || 0, h = f[n - 1][1] || 0, d = (l - h) / 2, y = 0; y < u; ++y) {
          var v = e[t[y]],
            p = v[n][1] || 0,
            x = v[n - 1][1] || 0
          d += p - x
        }
        ;(c += l), (s += d * l)
      }
      ;(i[n - 1][1] += i[n - 1][0] = r), c && (r -= s / c)
    }
    ;(i[n - 1][1] += i[n - 1][0] = r), gr(e, t)
  }
}
function ln(e) {
  '@babel/helpers - typeof'
  return (
    (ln =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    ln(e)
  )
}
var Lx = ['type', 'size', 'sizeType']
function zo() {
  return (
    (zo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    zo.apply(this, arguments)
  )
}
function As(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function _s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? As(Object(r), !0).forEach(function (n) {
          Bx(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : As(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function Bx(e, t, r) {
  return (
    (t = Rx(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function Rx(e) {
  var t = Fx(e, 'string')
  return ln(t) == 'symbol' ? t : String(t)
}
function Fx(e, t) {
  if (ln(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (ln(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Wx(e, t) {
  if (e == null) return {}
  var r = zx(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function zx(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
var jd = {
    symbolCircle: sc,
    symbolCross: sx,
    symbolDiamond: fx,
    symbolSquare: hx,
    symbolStar: yx,
    symbolTriangle: gx,
    symbolWye: bx,
  },
  Ux = Math.PI / 180,
  qx = function (t) {
    var r = 'symbol'.concat(Ta(t))
    return jd[r] || sc
  },
  Hx = function (t, r, n) {
    if (r === 'area') return t
    switch (n) {
      case 'cross':
        return (5 * t * t) / 9
      case 'diamond':
        return (0.5 * t * t) / Math.sqrt(3)
      case 'square':
        return t * t
      case 'star': {
        var i = 18 * Ux
        return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
      }
      case 'triangle':
        return (Math.sqrt(3) * t * t) / 4
      case 'wye':
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8
      default:
        return (Math.PI * t * t) / 4
    }
  },
  Gx = function (t, r) {
    jd['symbol'.concat(Ta(t))] = r
  },
  lc = function (t) {
    var r = t.type,
      n = r === void 0 ? 'circle' : r,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      u = o === void 0 ? 'area' : o,
      c = Wx(t, Lx),
      s = _s(_s({}, c), {}, { type: n, size: a, sizeType: u }),
      f = function () {
        var p = qx(n),
          x = xx()
            .type(p)
            .size(Hx(a, u, n))
        return x()
      },
      l = s.className,
      h = s.cx,
      d = s.cy,
      y = re(s, !0)
    return h === +h && d === +d && a === +a
      ? _.createElement(
          'path',
          zo({}, y, {
            className: ae('recharts-symbols', l),
            transform: 'translate('.concat(h, ', ').concat(d, ')'),
            d: f(),
          }),
        )
      : null
  }
lc.registerSymbol = Gx
function mr(e) {
  '@babel/helpers - typeof'
  return (
    (mr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    mr(e)
  )
}
function Uo() {
  return (
    (Uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Uo.apply(this, arguments)
  )
}
function $s(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Kx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? $s(Object(r), !0).forEach(function (n) {
          fn(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $s(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function Xx(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Vx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Cd(n.key), n)
  }
}
function Yx(e, t, r) {
  return t && Vx(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function Zx(e, t, r) {
  return (t = Ti(t)), Jx(e, Md() ? Reflect.construct(t, r || [], Ti(e).constructor) : t.apply(e, r))
}
function Jx(e, t) {
  if (t && (mr(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return Qx(e)
}
function Qx(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function Md() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
  } catch {}
  return (Md = function () {
    return !!e
  })()
}
function Ti(e) {
  return (
    (Ti = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    Ti(e)
  )
}
function e1(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && qo(e, t)
}
function qo(e, t) {
  return (
    (qo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    qo(e, t)
  )
}
function fn(e, t, r) {
  return (
    (t = Cd(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function Cd(e) {
  var t = t1(e, 'string')
  return mr(t) == 'symbol' ? t : String(t)
}
function t1(e, t) {
  if (mr(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (mr(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var He = 32,
  fc = (function (e) {
    e1(t, e)
    function t() {
      return Xx(this, t), Zx(this, t, arguments)
    }
    return (
      Yx(t, [
        {
          key: 'renderIcon',
          value: function (n) {
            var i = this.props.inactiveColor,
              a = He / 2,
              o = He / 6,
              u = He / 3,
              c = n.inactive ? i : n.color
            if (n.type === 'plainline')
              return _.createElement('line', {
                strokeWidth: 4,
                fill: 'none',
                stroke: c,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: He,
                y2: a,
                className: 'recharts-legend-icon',
              })
            if (n.type === 'line')
              return _.createElement('path', {
                strokeWidth: 4,
                fill: 'none',
                stroke: c,
                d: 'M0,'
                  .concat(a, 'h')
                  .concat(
                    u,
                    `
            A`,
                  )
                  .concat(o, ',')
                  .concat(o, ',0,1,1,')
                  .concat(2 * u, ',')
                  .concat(
                    a,
                    `
            H`,
                  )
                  .concat(He, 'M')
                  .concat(2 * u, ',')
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(o, ',')
                  .concat(o, ',0,1,1,')
                  .concat(u, ',')
                  .concat(a),
                className: 'recharts-legend-icon',
              })
            if (n.type === 'rect')
              return _.createElement('path', {
                stroke: 'none',
                fill: c,
                d: 'M0,'
                  .concat(He / 8, 'h')
                  .concat(He, 'v')
                  .concat((He * 3) / 4, 'h')
                  .concat(-He, 'z'),
                className: 'recharts-legend-icon',
              })
            if (_.isValidElement(n.legendIcon)) {
              var s = Kx({}, n)
              return delete s.legendIcon, _.cloneElement(n.legendIcon, s)
            }
            return _.createElement(lc, { fill: c, cx: a, cy: a, size: He, sizeType: 'diameter', type: n.type })
          },
        },
        {
          key: 'renderItems',
          value: function () {
            var n = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              u = i.layout,
              c = i.formatter,
              s = i.inactiveColor,
              f = { x: 0, y: 0, width: He, height: He },
              l = { display: u === 'horizontal' ? 'inline-block' : 'block', marginRight: 10 },
              h = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 }
            return a.map(function (d, y) {
              var v = d.formatter || c,
                p = ae(fn(fn({ 'recharts-legend-item': !0 }, 'legend-item-'.concat(y), !0), 'inactive', d.inactive))
              if (d.type === 'none') return null
              var x = Z(d.value) ? null : d.value
              gt(
                !Z(d.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              )
              var b = d.inactive ? s : d.color
              return _.createElement(
                'li',
                Uo({ className: p, style: l, key: 'legend-item-'.concat(y) }, Oi(n.props, d, y)),
                _.createElement(ko, { width: o, height: o, viewBox: f, style: h }, n.renderIcon(d)),
                _.createElement(
                  'span',
                  { className: 'recharts-legend-item-text', style: { color: b } },
                  v ? v(x, d, y) : x,
                ),
              )
            })
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this.props,
              i = n.payload,
              a = n.layout,
              o = n.align
            if (!i || !i.length) return null
            var u = { padding: 0, margin: 0, textAlign: a === 'horizontal' ? o : 'left' }
            return _.createElement('ul', { className: 'recharts-default-legend', style: u }, this.renderItems())
          },
        },
      ]),
      t
    )
  })(N.PureComponent)
fn(fc, 'displayName', 'Legend')
fn(fc, 'defaultProps', {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle',
  inactiveColor: '#ccc',
})
var r1 = pa
function n1() {
  ;(this.__data__ = new r1()), (this.size = 0)
}
var i1 = n1
function a1(e) {
  var t = this.__data__,
    r = t.delete(e)
  return (this.size = t.size), r
}
var o1 = a1
function u1(e) {
  return this.__data__.get(e)
}
var c1 = u1
function s1(e) {
  return this.__data__.has(e)
}
var l1 = s1,
  f1 = pa,
  h1 = Zu,
  d1 = Ju,
  p1 = 200
function v1(e, t) {
  var r = this.__data__
  if (r instanceof f1) {
    var n = r.__data__
    if (!h1 || n.length < p1 - 1) return n.push([e, t]), (this.size = ++r.size), this
    r = this.__data__ = new d1(n)
  }
  return r.set(e, t), (this.size = r.size), this
}
var y1 = v1,
  g1 = pa,
  m1 = i1,
  b1 = o1,
  x1 = c1,
  w1 = l1,
  O1 = y1
function Br(e) {
  var t = (this.__data__ = new g1(e))
  this.size = t.size
}
Br.prototype.clear = m1
Br.prototype.delete = b1
Br.prototype.get = x1
Br.prototype.has = w1
Br.prototype.set = O1
var Id = Br,
  S1 = '__lodash_hash_undefined__'
function A1(e) {
  return this.__data__.set(e, S1), this
}
var _1 = A1
function $1(e) {
  return this.__data__.has(e)
}
var P1 = $1,
  T1 = Ju,
  E1 = _1,
  j1 = P1
function Ei(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.__data__ = new T1(); ++t < r; ) this.add(e[t])
}
Ei.prototype.add = Ei.prototype.push = E1
Ei.prototype.has = j1
var kd = Ei
function M1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0
  return !1
}
var Nd = M1
function C1(e, t) {
  return e.has(t)
}
var Dd = C1,
  I1 = kd,
  k1 = Nd,
  N1 = Dd,
  D1 = 1,
  L1 = 2
function B1(e, t, r, n, i, a) {
  var o = r & D1,
    u = e.length,
    c = t.length
  if (u != c && !(o && c > u)) return !1
  var s = a.get(e),
    f = a.get(t)
  if (s && f) return s == t && f == e
  var l = -1,
    h = !0,
    d = r & L1 ? new I1() : void 0
  for (a.set(e, t), a.set(t, e); ++l < u; ) {
    var y = e[l],
      v = t[l]
    if (n) var p = o ? n(v, y, l, t, e, a) : n(y, v, l, e, t, a)
    if (p !== void 0) {
      if (p) continue
      h = !1
      break
    }
    if (d) {
      if (
        !k1(t, function (x, b) {
          if (!N1(d, b) && (y === x || i(y, x, r, n, a))) return d.push(b)
        })
      ) {
        h = !1
        break
      }
    } else if (!(y === v || i(y, v, r, n, a))) {
      h = !1
      break
    }
  }
  return a.delete(e), a.delete(t), h
}
var Ld = B1,
  R1 = lt,
  F1 = R1.Uint8Array,
  W1 = F1
function z1(e) {
  var t = -1,
    r = Array(e.size)
  return (
    e.forEach(function (n, i) {
      r[++t] = [i, n]
    }),
    r
  )
}
var U1 = z1
function q1(e) {
  var t = -1,
    r = Array(e.size)
  return (
    e.forEach(function (n) {
      r[++t] = n
    }),
    r
  )
}
var hc = q1,
  Ps = Xn,
  Ts = W1,
  H1 = Yu,
  G1 = Ld,
  K1 = U1,
  X1 = hc,
  V1 = 1,
  Y1 = 2,
  Z1 = '[object Boolean]',
  J1 = '[object Date]',
  Q1 = '[object Error]',
  ew = '[object Map]',
  tw = '[object Number]',
  rw = '[object RegExp]',
  nw = '[object Set]',
  iw = '[object String]',
  aw = '[object Symbol]',
  ow = '[object ArrayBuffer]',
  uw = '[object DataView]',
  Es = Ps ? Ps.prototype : void 0,
  io = Es ? Es.valueOf : void 0
function cw(e, t, r, n, i, a, o) {
  switch (r) {
    case uw:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1
      ;(e = e.buffer), (t = t.buffer)
    case ow:
      return !(e.byteLength != t.byteLength || !a(new Ts(e), new Ts(t)))
    case Z1:
    case J1:
    case tw:
      return H1(+e, +t)
    case Q1:
      return e.name == t.name && e.message == t.message
    case rw:
    case iw:
      return e == t + ''
    case ew:
      var u = K1
    case nw:
      var c = n & V1
      if ((u || (u = X1), e.size != t.size && !c)) return !1
      var s = o.get(e)
      if (s) return s == t
      ;(n |= Y1), o.set(e, t)
      var f = G1(u(e), u(t), n, i, a, o)
      return o.delete(e), f
    case aw:
      if (io) return io.call(e) == io.call(t)
  }
  return !1
}
var sw = cw
function lw(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r]
  return e
}
var Bd = lw,
  fw = Bd,
  hw = Le
function dw(e, t, r) {
  var n = t(e)
  return hw(e) ? n : fw(n, r(e))
}
var pw = dw
function vw(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r]
    t(o, r, e) && (a[i++] = o)
  }
  return a
}
var yw = vw
function gw() {
  return []
}
var mw = gw,
  bw = yw,
  xw = mw,
  ww = Object.prototype,
  Ow = ww.propertyIsEnumerable,
  js = Object.getOwnPropertySymbols,
  Sw = js
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            bw(js(e), function (t) {
              return Ow.call(e, t)
            }))
      }
    : xw,
  Aw = Sw
function _w(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
  return n
}
var $w = _w,
  Pw = Ot,
  Tw = St,
  Ew = '[object Arguments]'
function jw(e) {
  return Tw(e) && Pw(e) == Ew
}
var Mw = jw,
  Ms = Mw,
  Cw = St,
  Rd = Object.prototype,
  Iw = Rd.hasOwnProperty,
  kw = Rd.propertyIsEnumerable,
  Nw = Ms(
    (function () {
      return arguments
    })(),
  )
    ? Ms
    : function (e) {
        return Cw(e) && Iw.call(e, 'callee') && !kw.call(e, 'callee')
      },
  dc = Nw,
  ji = { exports: {} }
function Dw() {
  return !1
}
var Lw = Dw
ji.exports
;(function (e, t) {
  var r = lt,
    n = Lw,
    i = t && !t.nodeType && t,
    a = i && !0 && e && !e.nodeType && e,
    o = a && a.exports === i,
    u = o ? r.Buffer : void 0,
    c = u ? u.isBuffer : void 0,
    s = c || n
  e.exports = s
})(ji, ji.exports)
var Fd = ji.exports,
  Bw = 9007199254740991,
  Rw = /^(?:0|[1-9]\d*)$/
function Fw(e, t) {
  var r = typeof e
  return (t = t ?? Bw), !!t && (r == 'number' || (r != 'symbol' && Rw.test(e))) && e > -1 && e % 1 == 0 && e < t
}
var pc = Fw,
  Ww = 9007199254740991
function zw(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Ww
}
var vc = zw,
  Uw = Ot,
  qw = vc,
  Hw = St,
  Gw = '[object Arguments]',
  Kw = '[object Array]',
  Xw = '[object Boolean]',
  Vw = '[object Date]',
  Yw = '[object Error]',
  Zw = '[object Function]',
  Jw = '[object Map]',
  Qw = '[object Number]',
  eO = '[object Object]',
  tO = '[object RegExp]',
  rO = '[object Set]',
  nO = '[object String]',
  iO = '[object WeakMap]',
  aO = '[object ArrayBuffer]',
  oO = '[object DataView]',
  uO = '[object Float32Array]',
  cO = '[object Float64Array]',
  sO = '[object Int8Array]',
  lO = '[object Int16Array]',
  fO = '[object Int32Array]',
  hO = '[object Uint8Array]',
  dO = '[object Uint8ClampedArray]',
  pO = '[object Uint16Array]',
  vO = '[object Uint32Array]',
  fe = {}
fe[uO] = fe[cO] = fe[sO] = fe[lO] = fe[fO] = fe[hO] = fe[dO] = fe[pO] = fe[vO] = !0
fe[Gw] =
  fe[Kw] =
  fe[aO] =
  fe[Xw] =
  fe[oO] =
  fe[Vw] =
  fe[Yw] =
  fe[Zw] =
  fe[Jw] =
  fe[Qw] =
  fe[eO] =
  fe[tO] =
  fe[rO] =
  fe[nO] =
  fe[iO] =
    !1
function yO(e) {
  return Hw(e) && qw(e.length) && !!fe[Uw(e)]
}
var gO = yO
function mO(e) {
  return function (t) {
    return e(t)
  }
}
var Wd = mO,
  Mi = { exports: {} }
Mi.exports
;(function (e, t) {
  var r = Vh,
    n = t && !t.nodeType && t,
    i = n && !0 && e && !e.nodeType && e,
    a = i && i.exports === n,
    o = a && r.process,
    u = (function () {
      try {
        var c = i && i.require && i.require('util').types
        return c || (o && o.binding && o.binding('util'))
      } catch {}
    })()
  e.exports = u
})(Mi, Mi.exports)
var bO = Mi.exports,
  xO = gO,
  wO = Wd,
  Cs = bO,
  Is = Cs && Cs.isTypedArray,
  OO = Is ? wO(Is) : xO,
  zd = OO,
  SO = $w,
  AO = dc,
  _O = Le,
  $O = Fd,
  PO = pc,
  TO = zd,
  EO = Object.prototype,
  jO = EO.hasOwnProperty
function MO(e, t) {
  var r = _O(e),
    n = !r && AO(e),
    i = !r && !n && $O(e),
    a = !r && !n && !i && TO(e),
    o = r || n || i || a,
    u = o ? SO(e.length, String) : [],
    c = u.length
  for (var s in e)
    (t || jO.call(e, s)) &&
      !(
        o &&
        (s == 'length' ||
          (i && (s == 'offset' || s == 'parent')) ||
          (a && (s == 'buffer' || s == 'byteLength' || s == 'byteOffset')) ||
          PO(s, c))
      ) &&
      u.push(s)
  return u
}
var CO = MO,
  IO = Object.prototype
function kO(e) {
  var t = e && e.constructor,
    r = (typeof t == 'function' && t.prototype) || IO
  return e === r
}
var NO = kO
function DO(e, t) {
  return function (r) {
    return e(t(r))
  }
}
var Ud = DO,
  LO = Ud,
  BO = LO(Object.keys, Object),
  RO = BO,
  FO = NO,
  WO = RO,
  zO = Object.prototype,
  UO = zO.hasOwnProperty
function qO(e) {
  if (!FO(e)) return WO(e)
  var t = []
  for (var r in Object(e)) UO.call(e, r) && r != 'constructor' && t.push(r)
  return t
}
var HO = qO,
  GO = Vu,
  KO = vc
function XO(e) {
  return e != null && KO(e.length) && !GO(e)
}
var Zn = XO,
  VO = CO,
  YO = HO,
  ZO = Zn
function JO(e) {
  return ZO(e) ? VO(e) : YO(e)
}
var Ca = JO,
  QO = pw,
  eS = Aw,
  tS = Ca
function rS(e) {
  return QO(e, tS, eS)
}
var nS = rS,
  ks = nS,
  iS = 1,
  aS = Object.prototype,
  oS = aS.hasOwnProperty
function uS(e, t, r, n, i, a) {
  var o = r & iS,
    u = ks(e),
    c = u.length,
    s = ks(t),
    f = s.length
  if (c != f && !o) return !1
  for (var l = c; l--; ) {
    var h = u[l]
    if (!(o ? h in t : oS.call(t, h))) return !1
  }
  var d = a.get(e),
    y = a.get(t)
  if (d && y) return d == t && y == e
  var v = !0
  a.set(e, t), a.set(t, e)
  for (var p = o; ++l < c; ) {
    h = u[l]
    var x = e[h],
      b = t[h]
    if (n) var w = o ? n(b, x, h, t, e, a) : n(x, b, h, e, t, a)
    if (!(w === void 0 ? x === b || i(x, b, r, n, a) : w)) {
      v = !1
      break
    }
    p || (p = h == 'constructor')
  }
  if (v && !p) {
    var g = e.constructor,
      m = t.constructor
    g != m &&
      'constructor' in e &&
      'constructor' in t &&
      !(typeof g == 'function' && g instanceof g && typeof m == 'function' && m instanceof m) &&
      (v = !1)
  }
  return a.delete(e), a.delete(t), v
}
var cS = uS,
  sS = er,
  lS = lt,
  fS = sS(lS, 'DataView'),
  hS = fS,
  dS = er,
  pS = lt,
  vS = dS(pS, 'Promise'),
  yS = vS,
  gS = er,
  mS = lt,
  bS = gS(mS, 'Set'),
  qd = bS,
  xS = er,
  wS = lt,
  OS = xS(wS, 'WeakMap'),
  SS = OS,
  Ho = hS,
  Go = Zu,
  Ko = yS,
  Xo = qd,
  Vo = SS,
  Hd = Ot,
  Rr = Zh,
  Ns = '[object Map]',
  AS = '[object Object]',
  Ds = '[object Promise]',
  Ls = '[object Set]',
  Bs = '[object WeakMap]',
  Rs = '[object DataView]',
  _S = Rr(Ho),
  $S = Rr(Go),
  PS = Rr(Ko),
  TS = Rr(Xo),
  ES = Rr(Vo),
  Wt = Hd
;((Ho && Wt(new Ho(new ArrayBuffer(1))) != Rs) ||
  (Go && Wt(new Go()) != Ns) ||
  (Ko && Wt(Ko.resolve()) != Ds) ||
  (Xo && Wt(new Xo()) != Ls) ||
  (Vo && Wt(new Vo()) != Bs)) &&
  (Wt = function (e) {
    var t = Hd(e),
      r = t == AS ? e.constructor : void 0,
      n = r ? Rr(r) : ''
    if (n)
      switch (n) {
        case _S:
          return Rs
        case $S:
          return Ns
        case PS:
          return Ds
        case TS:
          return Ls
        case ES:
          return Bs
      }
    return t
  })
var jS = Wt,
  ao = Id,
  MS = Ld,
  CS = sw,
  IS = cS,
  Fs = jS,
  Ws = Le,
  zs = Fd,
  kS = zd,
  NS = 1,
  Us = '[object Arguments]',
  qs = '[object Array]',
  ci = '[object Object]',
  DS = Object.prototype,
  Hs = DS.hasOwnProperty
function LS(e, t, r, n, i, a) {
  var o = Ws(e),
    u = Ws(t),
    c = o ? qs : Fs(e),
    s = u ? qs : Fs(t)
  ;(c = c == Us ? ci : c), (s = s == Us ? ci : s)
  var f = c == ci,
    l = s == ci,
    h = c == s
  if (h && zs(e)) {
    if (!zs(t)) return !1
    ;(o = !0), (f = !1)
  }
  if (h && !f) return a || (a = new ao()), o || kS(e) ? MS(e, t, r, n, i, a) : CS(e, t, c, r, n, i, a)
  if (!(r & NS)) {
    var d = f && Hs.call(e, '__wrapped__'),
      y = l && Hs.call(t, '__wrapped__')
    if (d || y) {
      var v = d ? e.value() : e,
        p = y ? t.value() : t
      return a || (a = new ao()), i(v, p, r, n, a)
    }
  }
  return h ? (a || (a = new ao()), IS(e, t, r, n, i, a)) : !1
}
var BS = LS,
  RS = BS,
  Gs = St
function Gd(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || (!Gs(e) && !Gs(t)) ? e !== e && t !== t : RS(e, t, r, n, Gd, i)
}
var yc = Gd,
  FS = Id,
  WS = yc,
  zS = 1,
  US = 2
function qS(e, t, r, n) {
  var i = r.length,
    a = i,
    o = !n
  if (e == null) return !a
  for (e = Object(e); i--; ) {
    var u = r[i]
    if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
  }
  for (; ++i < a; ) {
    u = r[i]
    var c = u[0],
      s = e[c],
      f = u[1]
    if (o && u[2]) {
      if (s === void 0 && !(c in e)) return !1
    } else {
      var l = new FS()
      if (n) var h = n(s, f, c, e, t, l)
      if (!(h === void 0 ? WS(f, s, zS | US, n, l) : h)) return !1
    }
  }
  return !0
}
var HS = qS,
  GS = Mt
function KS(e) {
  return e === e && !GS(e)
}
var Kd = KS,
  XS = Kd,
  VS = Ca
function YS(e) {
  for (var t = VS(e), r = t.length; r--; ) {
    var n = t[r],
      i = e[n]
    t[r] = [n, i, XS(i)]
  }
  return t
}
var ZS = YS
function JS(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
  }
}
var Xd = JS,
  QS = HS,
  eA = ZS,
  tA = Xd
function rA(e) {
  var t = eA(e)
  return t.length == 1 && t[0][2]
    ? tA(t[0][0], t[0][1])
    : function (r) {
        return r === e || QS(r, e, t)
      }
}
var nA = rA
function iA(e, t) {
  return e != null && t in Object(e)
}
var aA = iA,
  oA = rd,
  uA = dc,
  cA = Le,
  sA = pc,
  lA = vc,
  fA = ya
function hA(e, t, r) {
  t = oA(t, e)
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = fA(t[n])
    if (!(a = e != null && r(e, o))) break
    e = e[o]
  }
  return a || ++n != i ? a : ((i = e == null ? 0 : e.length), !!i && lA(i) && sA(o, i) && (cA(e) || uA(e)))
}
var dA = hA,
  pA = aA,
  vA = dA
function yA(e, t) {
  return e != null && vA(e, t, pA)
}
var gA = yA,
  mA = yc,
  bA = nd,
  xA = gA,
  wA = Xu,
  OA = Kd,
  SA = Xd,
  AA = ya,
  _A = 1,
  $A = 2
function PA(e, t) {
  return wA(e) && OA(t)
    ? SA(AA(e), t)
    : function (r) {
        var n = bA(r, e)
        return n === void 0 && n === t ? xA(r, e) : mA(t, n, _A | $A)
      }
}
var TA = PA
function EA(e) {
  return e
}
var Fr = EA
function jA(e) {
  return function (t) {
    return t == null ? void 0 : t[e]
  }
}
var MA = jA,
  CA = tc
function IA(e) {
  return function (t) {
    return CA(t, e)
  }
}
var kA = IA,
  NA = MA,
  DA = kA,
  LA = Xu,
  BA = ya
function RA(e) {
  return LA(e) ? NA(BA(e)) : DA(e)
}
var FA = RA,
  WA = nA,
  zA = TA,
  UA = Fr,
  qA = Le,
  HA = FA
function GA(e) {
  return typeof e == 'function' ? e : e == null ? UA : typeof e == 'object' ? (qA(e) ? zA(e[0], e[1]) : WA(e)) : HA(e)
}
var Ct = GA
function KA(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e[a], a, e)) return a
  return -1
}
var Vd = KA
function XA(e) {
  return e !== e
}
var VA = XA
function YA(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n
  return -1
}
var ZA = YA,
  JA = Vd,
  QA = VA,
  e_ = ZA
function t_(e, t, r) {
  return t === t ? e_(e, t, r) : JA(e, QA, r)
}
var r_ = t_,
  n_ = r_
function i_(e, t) {
  var r = e == null ? 0 : e.length
  return !!r && n_(e, t, 0) > -1
}
var a_ = i_
function o_(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; ) if (r(t, e[n])) return !0
  return !1
}
var u_ = o_
function c_() {}
var s_ = c_,
  oo = qd,
  l_ = s_,
  f_ = hc,
  h_ = 1 / 0,
  d_ =
    oo && 1 / f_(new oo([, -0]))[1] == h_
      ? function (e) {
          return new oo(e)
        }
      : l_,
  p_ = d_,
  v_ = kd,
  y_ = a_,
  g_ = u_,
  m_ = Dd,
  b_ = p_,
  x_ = hc,
  w_ = 200
function O_(e, t, r) {
  var n = -1,
    i = y_,
    a = e.length,
    o = !0,
    u = [],
    c = u
  if (r) (o = !1), (i = g_)
  else if (a >= w_) {
    var s = t ? null : b_(e)
    if (s) return x_(s)
    ;(o = !1), (i = m_), (c = new v_())
  } else c = t ? [] : u
  e: for (; ++n < a; ) {
    var f = e[n],
      l = t ? t(f) : f
    if (((f = r || f !== 0 ? f : 0), o && l === l)) {
      for (var h = c.length; h--; ) if (c[h] === l) continue e
      t && c.push(l), u.push(f)
    } else i(c, l, r) || (c !== u && c.push(l), u.push(f))
  }
  return u
}
var S_ = O_,
  A_ = Ct,
  __ = S_
function $_(e, t) {
  return e && e.length ? __(e, A_(t)) : []
}
var P_ = $_
const Ks = le(P_)
function Yd(e, t, r) {
  return t === !0 ? Ks(e, r) : Z(t) ? Ks(e, t) : e
}
function br(e) {
  '@babel/helpers - typeof'
  return (
    (br =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    br(e)
  )
}
var T_ = ['ref']
function Xs(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Xs(Object(r), !0).forEach(function (n) {
          Ia(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xs(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function E_(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Vs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Qd(n.key), n)
  }
}
function j_(e, t, r) {
  return t && Vs(e.prototype, t), r && Vs(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function M_(e, t, r) {
  return (t = Ci(t)), C_(e, Zd() ? Reflect.construct(t, r || [], Ci(e).constructor) : t.apply(e, r))
}
function C_(e, t) {
  if (t && (br(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return Jd(e)
}
function Zd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
  } catch {}
  return (Zd = function () {
    return !!e
  })()
}
function Ci(e) {
  return (
    (Ci = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    Ci(e)
  )
}
function Jd(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function I_(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Yo(e, t)
}
function Yo(e, t) {
  return (
    (Yo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    Yo(e, t)
  )
}
function Ia(e, t, r) {
  return (
    (t = Qd(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function Qd(e) {
  var t = k_(e, 'string')
  return br(t) == 'symbol' ? t : String(t)
}
function k_(e, t) {
  if (br(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (br(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function N_(e, t) {
  if (e == null) return {}
  var r = D_(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function D_(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function L_(e) {
  return e.value
}
function B_(e, t) {
  if (_.isValidElement(e)) return _.cloneElement(e, t)
  if (typeof e == 'function') return _.createElement(e, t)
  t.ref
  var r = N_(t, T_)
  return _.createElement(fc, r)
}
var Ys = 1,
  xr = (function (e) {
    I_(t, e)
    function t() {
      var r
      E_(this, t)
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
      return (r = M_(this, t, [].concat(i))), Ia(Jd(r), 'lastBoundingBox', { width: -1, height: -1 }), r
    }
    return (
      j_(
        t,
        [
          {
            key: 'componentDidMount',
            value: function () {
              this.updateBBox()
            },
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              this.updateBBox()
            },
          },
          {
            key: 'getBBox',
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect()
                return (n.height = this.wrapperNode.offsetHeight), (n.width = this.wrapperNode.offsetWidth), n
              }
              return null
            },
          },
          {
            key: 'updateBBox',
            value: function () {
              var n = this.props.onBBoxUpdate,
                i = this.getBBox()
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > Ys ||
                    Math.abs(i.height - this.lastBoundingBox.height) > Ys) &&
                  ((this.lastBoundingBox.width = i.width), (this.lastBoundingBox.height = i.height), n && n(i))
                : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1), (this.lastBoundingBox.height = -1), n && n(null))
            },
          },
          {
            key: 'getBBoxSnapshot',
            value: function () {
              return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0
                ? Rt({}, this.lastBoundingBox)
                : { width: 0, height: 0 }
            },
          },
          {
            key: 'getDefaultPosition',
            value: function (n) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                u = i.verticalAlign,
                c = i.margin,
                s = i.chartWidth,
                f = i.chartHeight,
                l,
                h
              if (!n || ((n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null)))
                if (o === 'center' && a === 'vertical') {
                  var d = this.getBBoxSnapshot()
                  l = { left: ((s || 0) - d.width) / 2 }
                } else l = o === 'right' ? { right: (c && c.right) || 0 } : { left: (c && c.left) || 0 }
              if (!n || ((n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null)))
                if (u === 'middle') {
                  var y = this.getBBoxSnapshot()
                  h = { top: ((f || 0) - y.height) / 2 }
                } else h = u === 'bottom' ? { bottom: (c && c.bottom) || 0 } : { top: (c && c.top) || 0 }
              return Rt(Rt({}, l), h)
            },
          },
          {
            key: 'render',
            value: function () {
              var n = this,
                i = this.props,
                a = i.content,
                o = i.width,
                u = i.height,
                c = i.wrapperStyle,
                s = i.payloadUniqBy,
                f = i.payload,
                l = Rt(
                  Rt({ position: 'absolute', width: o || 'auto', height: u || 'auto' }, this.getDefaultPosition(c)),
                  c,
                )
              return _.createElement(
                'div',
                {
                  className: 'recharts-legend-wrapper',
                  style: l,
                  ref: function (d) {
                    n.wrapperNode = d
                  },
                },
                B_(a, Rt(Rt({}, this.props), {}, { payload: Yd(f, s, L_) })),
              )
            },
          },
        ],
        [
          {
            key: 'getWithHeight',
            value: function (n, i) {
              var a = n.props.layout
              return a === 'vertical' && F(n.props.height)
                ? { height: n.props.height }
                : a === 'horizontal'
                  ? { width: n.props.width || i }
                  : null
            },
          },
        ],
      ),
      t
    )
  })(N.PureComponent)
Ia(xr, 'displayName', 'Legend')
Ia(xr, 'defaultProps', { iconSize: 14, layout: 'horizontal', align: 'center', verticalAlign: 'bottom' })
var Zs = Xn,
  R_ = dc,
  F_ = Le,
  Js = Zs ? Zs.isConcatSpreadable : void 0
function W_(e) {
  return F_(e) || R_(e) || !!(Js && e && e[Js])
}
var z_ = W_,
  U_ = Bd,
  q_ = z_
function ep(e, t, r, n, i) {
  var a = -1,
    o = e.length
  for (r || (r = q_), i || (i = []); ++a < o; ) {
    var u = e[a]
    t > 0 && r(u) ? (t > 1 ? ep(u, t - 1, r, n, i) : U_(i, u)) : n || (i[i.length] = u)
  }
  return i
}
var tp = ep
function H_(e) {
  return function (t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var c = o[e ? u : ++i]
      if (r(a[c], c, a) === !1) break
    }
    return t
  }
}
var G_ = H_,
  K_ = G_,
  X_ = K_(),
  V_ = X_,
  Y_ = V_,
  Z_ = Ca
function J_(e, t) {
  return e && Y_(e, t, Z_)
}
var rp = J_,
  Q_ = Zn
function e$(e, t) {
  return function (r, n) {
    if (r == null) return r
    if (!Q_(r)) return e(r, n)
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; );
    return r
  }
}
var t$ = e$,
  r$ = rp,
  n$ = t$,
  i$ = n$(r$),
  gc = i$,
  a$ = gc,
  o$ = Zn
function u$(e, t) {
  var r = -1,
    n = o$(e) ? Array(e.length) : []
  return (
    a$(e, function (i, a, o) {
      n[++r] = t(i, a, o)
    }),
    n
  )
}
var np = u$
function c$(e, t) {
  var r = e.length
  for (e.sort(t); r--; ) e[r] = e[r].value
  return e
}
var s$ = c$,
  Qs = Ir
function l$(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      i = e === e,
      a = Qs(e),
      o = t !== void 0,
      u = t === null,
      c = t === t,
      s = Qs(t)
    if ((!u && !s && !a && e > t) || (a && o && c && !u && !s) || (n && o && c) || (!r && c) || !i) return 1
    if ((!n && !a && !s && e < t) || (s && r && i && !n && !a) || (u && r && i) || (!o && i) || !c) return -1
  }
  return 0
}
var f$ = l$,
  h$ = f$
function d$(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length; ++n < o; ) {
    var c = h$(i[n], a[n])
    if (c) {
      if (n >= u) return c
      var s = r[n]
      return c * (s == 'desc' ? -1 : 1)
    }
  }
  return e.index - t.index
}
var p$ = d$,
  uo = ec,
  v$ = tc,
  y$ = Ct,
  g$ = np,
  m$ = s$,
  b$ = Wd,
  x$ = p$,
  w$ = Fr,
  O$ = Le
function S$(e, t, r) {
  t.length
    ? (t = uo(t, function (a) {
        return O$(a)
          ? function (o) {
              return v$(o, a.length === 1 ? a[0] : a)
            }
          : a
      }))
    : (t = [w$])
  var n = -1
  t = uo(t, b$(y$))
  var i = g$(e, function (a, o, u) {
    var c = uo(t, function (s) {
      return s(a)
    })
    return { criteria: c, index: ++n, value: a }
  })
  return m$(i, function (a, o) {
    return x$(a, o, r)
  })
}
var A$ = S$
function _$(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t)
    case 1:
      return e.call(t, r[0])
    case 2:
      return e.call(t, r[0], r[1])
    case 3:
      return e.call(t, r[0], r[1], r[2])
  }
  return e.apply(t, r)
}
var $$ = _$,
  P$ = $$,
  el = Math.max
function T$(e, t, r) {
  return (
    (t = el(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (var n = arguments, i = -1, a = el(n.length - t, 0), o = Array(a); ++i < a; ) o[i] = n[t + i]
      i = -1
      for (var u = Array(t + 1); ++i < t; ) u[i] = n[i]
      return (u[t] = r(o)), P$(e, this, u)
    }
  )
}
var E$ = T$
function j$(e) {
  return function () {
    return e
  }
}
var M$ = j$,
  C$ = er,
  I$ = (function () {
    try {
      var e = C$(Object, 'defineProperty')
      return e({}, '', {}), e
    } catch {}
  })(),
  ip = I$,
  k$ = M$,
  tl = ip,
  N$ = Fr,
  D$ = tl
    ? function (e, t) {
        return tl(e, 'toString', { configurable: !0, enumerable: !1, value: k$(t), writable: !0 })
      }
    : N$,
  L$ = D$,
  B$ = 800,
  R$ = 16,
  F$ = Date.now
function W$(e) {
  var t = 0,
    r = 0
  return function () {
    var n = F$(),
      i = R$ - (n - r)
    if (((r = n), i > 0)) {
      if (++t >= B$) return arguments[0]
    } else t = 0
    return e.apply(void 0, arguments)
  }
}
var z$ = W$,
  U$ = L$,
  q$ = z$,
  H$ = q$(U$),
  G$ = H$,
  K$ = Fr,
  X$ = E$,
  V$ = G$
function Y$(e, t) {
  return V$(X$(e, t, K$), e + '')
}
var Z$ = Y$,
  J$ = Yu,
  Q$ = Zn,
  eP = pc,
  tP = Mt
function rP(e, t, r) {
  if (!tP(r)) return !1
  var n = typeof t
  return (n == 'number' ? Q$(r) && eP(t, r.length) : n == 'string' && t in r) ? J$(r[t], e) : !1
}
var ka = rP,
  nP = tp,
  iP = A$,
  aP = Z$,
  rl = ka,
  oP = aP(function (e, t) {
    if (e == null) return []
    var r = t.length
    return r > 1 && rl(e, t[0], t[1]) ? (t = []) : r > 2 && rl(t[0], t[1], t[2]) && (t = [t[0]]), iP(e, nP(t, 1), [])
  }),
  uP = oP
const mc = le(uP)
function hn(e) {
  '@babel/helpers - typeof'
  return (
    (hn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    hn(e)
  )
}
function Zo() {
  return (
    (Zo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Zo.apply(this, arguments)
  )
}
function cP(e, t) {
  return hP(e) || fP(e, t) || lP(e, t) || sP()
}
function sP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function lP(e, t) {
  if (e) {
    if (typeof e == 'string') return nl(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nl(e, t)
  }
}
function nl(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function fP(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function hP(e) {
  if (Array.isArray(e)) return e
}
function il(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function co(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? il(Object(r), !0).forEach(function (n) {
          dP(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : il(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function dP(e, t, r) {
  return (
    (t = pP(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function pP(e) {
  var t = vP(e, 'string')
  return hn(t) == 'symbol' ? t : String(t)
}
function vP(e, t) {
  if (hn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (hn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function yP(e) {
  return Array.isArray(e) && be(e[0]) && be(e[1]) ? e.join(' ~ ') : e
}
var gP = function (t) {
  var r = t.separator,
    n = r === void 0 ? ' : ' : r,
    i = t.contentStyle,
    a = i === void 0 ? {} : i,
    o = t.itemStyle,
    u = o === void 0 ? {} : o,
    c = t.labelStyle,
    s = c === void 0 ? {} : c,
    f = t.payload,
    l = t.formatter,
    h = t.itemSorter,
    d = t.wrapperClassName,
    y = t.labelClassName,
    v = t.label,
    p = t.labelFormatter,
    x = t.accessibilityLayer,
    b = x === void 0 ? !1 : x,
    w = function () {
      if (f && f.length) {
        var P = { padding: 0, margin: 0 },
          M = (h ? mc(f, h) : f).map(function (j, D) {
            if (j.type === 'none') return null
            var I = co({ display: 'block', paddingTop: 4, paddingBottom: 4, color: j.color || '#000' }, u),
              L = j.formatter || l || yP,
              B = j.value,
              U = j.name,
              G = B,
              V = U
            if (L && G != null && V != null) {
              var q = L(B, U, j, D, f)
              if (Array.isArray(q)) {
                var J = cP(q, 2)
                ;(G = J[0]), (V = J[1])
              } else G = q
            }
            return _.createElement(
              'li',
              { className: 'recharts-tooltip-item', key: 'tooltip-item-'.concat(D), style: I },
              be(V) ? _.createElement('span', { className: 'recharts-tooltip-item-name' }, V) : null,
              be(V) ? _.createElement('span', { className: 'recharts-tooltip-item-separator' }, n) : null,
              _.createElement('span', { className: 'recharts-tooltip-item-value' }, G),
              _.createElement('span', { className: 'recharts-tooltip-item-unit' }, j.unit || ''),
            )
          })
        return _.createElement('ul', { className: 'recharts-tooltip-item-list', style: P }, M)
      }
      return null
    },
    g = co({ margin: 0, padding: 10, backgroundColor: '#fff', border: '1px solid #ccc', whiteSpace: 'nowrap' }, a),
    m = co({ margin: 0 }, s),
    O = !ie(v),
    S = O ? v : '',
    A = ae('recharts-default-tooltip', d),
    E = ae('recharts-tooltip-label', y)
  O && p && f !== void 0 && f !== null && (S = p(v, f))
  var T = b ? { role: 'status', 'aria-live': 'assertive' } : {}
  return _.createElement(
    'div',
    Zo({ className: A, style: g }, T),
    _.createElement('p', { className: E, style: m }, _.isValidElement(S) ? S : ''.concat(S)),
    w(),
  )
}
function dn(e) {
  '@babel/helpers - typeof'
  return (
    (dn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    dn(e)
  )
}
function si(e, t, r) {
  return (
    (t = mP(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function mP(e) {
  var t = bP(e, 'string')
  return dn(t) == 'symbol' ? t : String(t)
}
function bP(e, t) {
  if (dn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (dn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var Kr = 'recharts-tooltip-wrapper',
  xP = { visibility: 'hidden' }
function wP(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY
  return ae(
    Kr,
    si(
      si(
        si(
          si({}, ''.concat(Kr, '-right'), F(r) && t && F(t.x) && r >= t.x),
          ''.concat(Kr, '-left'),
          F(r) && t && F(t.x) && r < t.x,
        ),
        ''.concat(Kr, '-bottom'),
        F(n) && t && F(t.y) && n >= t.y,
      ),
      ''.concat(Kr, '-top'),
      F(n) && t && F(t.y) && n < t.y,
    ),
  )
}
function al(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    u = e.tooltipDimension,
    c = e.viewBox,
    s = e.viewBoxDimension
  if (a && F(a[n])) return a[n]
  var f = r[n] - u - i,
    l = r[n] + i
  if (t[n]) return o[n] ? f : l
  if (o[n]) {
    var h = f,
      d = c[n]
    return h < d ? Math.max(l, c[n]) : Math.max(f, c[n])
  }
  var y = l + u,
    v = c[n] + s
  return y > v ? Math.max(f, c[n]) : Math.max(l, c[n])
}
function OP(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d
  return {
    transform: n
      ? 'translate3d('.concat(t, 'px, ').concat(r, 'px, 0)')
      : 'translate('.concat(t, 'px, ').concat(r, 'px)'),
  }
}
function SP(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    u = e.useTranslate3d,
    c = e.viewBox,
    s,
    f,
    l
  return (
    o.height > 0 && o.width > 0 && r
      ? ((f = al({
          allowEscapeViewBox: t,
          coordinate: r,
          key: 'x',
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: c,
          viewBoxDimension: c.width,
        })),
        (l = al({
          allowEscapeViewBox: t,
          coordinate: r,
          key: 'y',
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: c,
          viewBoxDimension: c.height,
        })),
        (s = OP({ translateX: f, translateY: l, useTranslate3d: u })))
      : (s = xP),
    { cssProperties: s, cssClasses: wP({ translateX: f, translateY: l, coordinate: r }) }
  )
}
function wr(e) {
  '@babel/helpers - typeof'
  return (
    (wr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    wr(e)
  )
}
function ol(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? ol(Object(r), !0).forEach(function (n) {
          eu(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ol(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function AP(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function _P(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, op(n.key), n)
  }
}
function $P(e, t, r) {
  return t && _P(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function PP(e, t, r) {
  return (t = Ii(t)), TP(e, ap() ? Reflect.construct(t, r || [], Ii(e).constructor) : t.apply(e, r))
}
function TP(e, t) {
  if (t && (wr(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return Jo(e)
}
function ap() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
  } catch {}
  return (ap = function () {
    return !!e
  })()
}
function Ii(e) {
  return (
    (Ii = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    Ii(e)
  )
}
function Jo(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function EP(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Qo(e, t)
}
function Qo(e, t) {
  return (
    (Qo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    Qo(e, t)
  )
}
function eu(e, t, r) {
  return (
    (t = op(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function op(e) {
  var t = jP(e, 'string')
  return wr(t) == 'symbol' ? t : String(t)
}
function jP(e, t) {
  if (wr(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (wr(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var cl = 1,
  MP = (function (e) {
    EP(t, e)
    function t() {
      var r
      AP(this, t)
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
      return (
        (r = PP(this, t, [].concat(i))),
        eu(Jo(r), 'state', {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        eu(Jo(r), 'handleKeyDown', function (o) {
          if (o.key === 'Escape') {
            var u, c, s, f
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (u = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && u !== void 0
                    ? u
                    : 0,
                y:
                  (s = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && s !== void 0
                    ? s
                    : 0,
              },
            })
          }
        }),
        r
      )
    }
    return (
      $P(t, [
        {
          key: 'updateBBox',
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect()
              ;(Math.abs(n.width - this.state.lastBoundingBox.width) > cl ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > cl) &&
                this.setState({ lastBoundingBox: { width: n.width, height: n.height } })
            } else
              (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } })
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            document.addEventListener('keydown', this.handleKeyDown), this.updateBBox()
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            document.removeEventListener('keydown', this.handleKeyDown)
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            var n, i
            this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !==
                  this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !==
                    this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1)
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              u = i.animationDuration,
              c = i.animationEasing,
              s = i.children,
              f = i.coordinate,
              l = i.hasPayload,
              h = i.isAnimationActive,
              d = i.offset,
              y = i.position,
              v = i.reverseDirection,
              p = i.useTranslate3d,
              x = i.viewBox,
              b = i.wrapperStyle,
              w = SP({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: d,
                position: y,
                reverseDirection: v,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: p,
                viewBox: x,
              }),
              g = w.cssClasses,
              m = w.cssProperties,
              O = ul(
                ul({ transition: h && a ? 'transform '.concat(u, 'ms ').concat(c) : void 0 }, m),
                {},
                {
                  pointerEvents: 'none',
                  visibility: !this.state.dismissed && a && l ? 'visible' : 'hidden',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
                b,
              )
            return _.createElement(
              'div',
              {
                tabIndex: -1,
                className: g,
                style: O,
                ref: function (A) {
                  n.wrapperNode = A
                },
              },
              s,
            )
          },
        },
      ]),
      t
    )
  })(N.PureComponent),
  CP = function () {
    return !(typeof window < 'u' && window.document && window.document.createElement && window.setTimeout)
  },
  Tt = {
    isSsr: CP(),
    get: function (t) {
      return Tt[t]
    },
    set: function (t, r) {
      if (typeof t == 'string') Tt[t] = r
      else {
        var n = Object.keys(t)
        n &&
          n.length &&
          n.forEach(function (i) {
            Tt[i] = t[i]
          })
      }
    },
  }
function Or(e) {
  '@babel/helpers - typeof'
  return (
    (Or =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Or(e)
  )
}
function sl(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function ll(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? sl(Object(r), !0).forEach(function (n) {
          bc(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function IP(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function kP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, cp(n.key), n)
  }
}
function NP(e, t, r) {
  return t && kP(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function DP(e, t, r) {
  return (t = ki(t)), LP(e, up() ? Reflect.construct(t, r || [], ki(e).constructor) : t.apply(e, r))
}
function LP(e, t) {
  if (t && (Or(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return BP(e)
}
function BP(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function up() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
  } catch {}
  return (up = function () {
    return !!e
  })()
}
function ki(e) {
  return (
    (ki = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    ki(e)
  )
}
function RP(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && tu(e, t)
}
function tu(e, t) {
  return (
    (tu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    tu(e, t)
  )
}
function bc(e, t, r) {
  return (
    (t = cp(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function cp(e) {
  var t = FP(e, 'string')
  return Or(t) == 'symbol' ? t : String(t)
}
function FP(e, t) {
  if (Or(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Or(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function WP(e) {
  return e.dataKey
}
function zP(e, t) {
  return _.isValidElement(e)
    ? _.cloneElement(e, t)
    : typeof e == 'function'
      ? _.createElement(e, t)
      : _.createElement(gP, t)
}
var it = (function (e) {
  RP(t, e)
  function t() {
    return IP(this, t), DP(this, t, arguments)
  }
  return (
    NP(t, [
      {
        key: 'render',
        value: function () {
          var n = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            u = i.animationDuration,
            c = i.animationEasing,
            s = i.content,
            f = i.coordinate,
            l = i.filterNull,
            h = i.isAnimationActive,
            d = i.offset,
            y = i.payload,
            v = i.payloadUniqBy,
            p = i.position,
            x = i.reverseDirection,
            b = i.useTranslate3d,
            w = i.viewBox,
            g = i.wrapperStyle,
            m = y ?? []
          l &&
            m.length &&
            (m = Yd(
              y.filter(function (S) {
                return S.value != null && (S.hide !== !0 || n.props.includeHidden)
              }),
              v,
              WP,
            ))
          var O = m.length > 0
          return _.createElement(
            MP,
            {
              allowEscapeViewBox: o,
              animationDuration: u,
              animationEasing: c,
              isAnimationActive: h,
              active: a,
              coordinate: f,
              hasPayload: O,
              offset: d,
              position: p,
              reverseDirection: x,
              useTranslate3d: b,
              viewBox: w,
              wrapperStyle: g,
            },
            zP(s, ll(ll({}, this.props), {}, { payload: m })),
          )
        },
      },
    ]),
    t
  )
})(N.PureComponent)
bc(it, 'displayName', 'Tooltip')
bc(it, 'defaultProps', {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: 'ease',
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Tt.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: ' : ',
  trigger: 'hover',
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
})
var UP = lt,
  qP = function () {
    return UP.Date.now()
  },
  HP = qP,
  GP = /\s/
function KP(e) {
  for (var t = e.length; t-- && GP.test(e.charAt(t)); );
  return t
}
var XP = KP,
  VP = XP,
  YP = /^\s+/
function ZP(e) {
  return e && e.slice(0, VP(e) + 1).replace(YP, '')
}
var JP = ZP,
  QP = JP,
  fl = Mt,
  eT = Ir,
  hl = NaN,
  tT = /^[-+]0x[0-9a-f]+$/i,
  rT = /^0b[01]+$/i,
  nT = /^0o[0-7]+$/i,
  iT = parseInt
function aT(e) {
  if (typeof e == 'number') return e
  if (eT(e)) return hl
  if (fl(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e
    e = fl(t) ? t + '' : t
  }
  if (typeof e != 'string') return e === 0 ? e : +e
  e = QP(e)
  var r = rT.test(e)
  return r || nT.test(e) ? iT(e.slice(2), r ? 2 : 8) : tT.test(e) ? hl : +e
}
var sp = aT,
  oT = Mt,
  so = HP,
  dl = sp,
  uT = 'Expected a function',
  cT = Math.max,
  sT = Math.min
function lT(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    c,
    s = 0,
    f = !1,
    l = !1,
    h = !0
  if (typeof e != 'function') throw new TypeError(uT)
  ;(t = dl(t) || 0),
    oT(r) &&
      ((f = !!r.leading),
      (l = 'maxWait' in r),
      (a = l ? cT(dl(r.maxWait) || 0, t) : a),
      (h = 'trailing' in r ? !!r.trailing : h))
  function d(O) {
    var S = n,
      A = i
    return (n = i = void 0), (s = O), (o = e.apply(A, S)), o
  }
  function y(O) {
    return (s = O), (u = setTimeout(x, t)), f ? d(O) : o
  }
  function v(O) {
    var S = O - c,
      A = O - s,
      E = t - S
    return l ? sT(E, a - A) : E
  }
  function p(O) {
    var S = O - c,
      A = O - s
    return c === void 0 || S >= t || S < 0 || (l && A >= a)
  }
  function x() {
    var O = so()
    if (p(O)) return b(O)
    u = setTimeout(x, v(O))
  }
  function b(O) {
    return (u = void 0), h && n ? d(O) : ((n = i = void 0), o)
  }
  function w() {
    u !== void 0 && clearTimeout(u), (s = 0), (n = c = i = u = void 0)
  }
  function g() {
    return u === void 0 ? o : b(so())
  }
  function m() {
    var O = so(),
      S = p(O)
    if (((n = arguments), (i = this), (c = O), S)) {
      if (u === void 0) return y(c)
      if (l) return clearTimeout(u), (u = setTimeout(x, t)), d(c)
    }
    return u === void 0 && (u = setTimeout(x, t)), o
  }
  return (m.cancel = w), (m.flush = g), m
}
var fT = lT,
  hT = fT,
  dT = Mt,
  pT = 'Expected a function'
function vT(e, t, r) {
  var n = !0,
    i = !0
  if (typeof e != 'function') throw new TypeError(pT)
  return (
    dT(r) && ((n = 'leading' in r ? !!r.leading : n), (i = 'trailing' in r ? !!r.trailing : i)),
    hT(e, t, { leading: n, maxWait: t, trailing: i })
  )
}
var yT = vT
const lp = le(yT)
function pn(e) {
  '@babel/helpers - typeof'
  return (
    (pn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    pn(e)
  )
}
function pl(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function li(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? pl(Object(r), !0).forEach(function (n) {
          gT(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function gT(e, t, r) {
  return (
    (t = mT(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function mT(e) {
  var t = bT(e, 'string')
  return pn(t) == 'symbol' ? t : String(t)
}
function bT(e, t) {
  if (pn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (pn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function xT(e, t) {
  return AT(e) || ST(e, t) || OT(e, t) || wT()
}
function wT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function OT(e, t) {
  if (e) {
    if (typeof e == 'string') return vl(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vl(e, t)
  }
}
function vl(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function ST(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function AT(e) {
  if (Array.isArray(e)) return e
}
var _T = N.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.initialDimension,
      i = n === void 0 ? { width: -1, height: -1 } : n,
      a = e.width,
      o = a === void 0 ? '100%' : a,
      u = e.height,
      c = u === void 0 ? '100%' : u,
      s = e.minWidth,
      f = s === void 0 ? 0 : s,
      l = e.minHeight,
      h = e.maxHeight,
      d = e.children,
      y = e.debounce,
      v = y === void 0 ? 0 : y,
      p = e.id,
      x = e.className,
      b = e.onResize,
      w = e.style,
      g = w === void 0 ? {} : w,
      m = N.useRef(null),
      O = N.useRef()
    ;(O.current = b),
      N.useImperativeHandle(t, function () {
        return Object.defineProperty(m.current, 'current', {
          get: function () {
            return (
              console.warn('The usage of ref.current.current is deprecated and will no longer be supported.'), m.current
            )
          },
          configurable: !0,
        })
      })
    var S = N.useState({ containerWidth: i.width, containerHeight: i.height }),
      A = xT(S, 2),
      E = A[0],
      T = A[1],
      $ = N.useCallback(function (M, j) {
        T(function (D) {
          var I = Math.round(M),
            L = Math.round(j)
          return D.containerWidth === I && D.containerHeight === L ? D : { containerWidth: I, containerHeight: L }
        })
      }, [])
    N.useEffect(
      function () {
        var M = function (U) {
          var G,
            V = U[0].contentRect,
            q = V.width,
            J = V.height
          $(q, J), (G = O.current) === null || G === void 0 || G.call(O, q, J)
        }
        v > 0 && (M = lp(M, v, { trailing: !0, leading: !1 }))
        var j = new ResizeObserver(M),
          D = m.current.getBoundingClientRect(),
          I = D.width,
          L = D.height
        return (
          $(I, L),
          j.observe(m.current),
          function () {
            j.disconnect()
          }
        )
      },
      [$, v],
    )
    var P = N.useMemo(
      function () {
        var M = E.containerWidth,
          j = E.containerHeight
        if (M < 0 || j < 0) return null
        gt(
          Ut(o) || Ut(c),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          c,
        ),
          gt(!r || r > 0, 'The aspect(%s) must be greater than zero.', r)
        var D = Ut(o) ? M : o,
          I = Ut(c) ? j : c
        r && r > 0 && (D ? (I = D / r) : I && (D = I * r), h && I > h && (I = h)),
          gt(
            D > 0 || I > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            D,
            I,
            o,
            c,
            f,
            l,
            r,
          )
        var L = !Array.isArray(d) && Eo.isElement(d) && yt(d.type).endsWith('Chart')
        return _.Children.map(d, function (B) {
          return Eo.isElement(B)
            ? N.cloneElement(
                B,
                li(
                  { width: D, height: I },
                  L ? { style: li({ height: '100%', width: '100%', maxHeight: I, maxWidth: D }, B.props.style) } : {},
                ),
              )
            : B
        })
      },
      [r, d, c, h, l, f, E, o],
    )
    return _.createElement(
      'div',
      {
        id: p ? ''.concat(p) : void 0,
        className: ae('recharts-responsive-container', x),
        style: li(li({}, g), {}, { width: o, height: c, minWidth: f, minHeight: l, maxHeight: h }),
        ref: m,
      },
      P,
    )
  }),
  fp = function (t) {
    return null
  }
fp.displayName = 'Cell'
function vn(e) {
  '@babel/helpers - typeof'
  return (
    (vn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    vn(e)
  )
}
function yl(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function ru(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? yl(Object(r), !0).forEach(function (n) {
          $T(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function $T(e, t, r) {
  return (
    (t = PT(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function PT(e) {
  var t = TT(e, 'string')
  return vn(t) == 'symbol' ? t : String(t)
}
function TT(e, t) {
  if (vn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (vn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var ar = { widthCache: {}, cacheCount: 0 },
  ET = 2e3,
  jT = { position: 'absolute', top: '-20000px', left: 0, padding: 0, margin: 0, border: 'none', whiteSpace: 'pre' },
  gl = 'recharts_measurement_span'
function MT(e) {
  var t = ru({}, e)
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r]
    }),
    t
  )
}
var an = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (t == null || Tt.isSsr) return { width: 0, height: 0 }
    var n = MT(r),
      i = JSON.stringify({ text: t, copyStyle: n })
    if (ar.widthCache[i]) return ar.widthCache[i]
    try {
      var a = document.getElementById(gl)
      a ||
        ((a = document.createElement('span')),
        a.setAttribute('id', gl),
        a.setAttribute('aria-hidden', 'true'),
        document.body.appendChild(a))
      var o = ru(ru({}, jT), n)
      Object.assign(a.style, o), (a.textContent = ''.concat(t))
      var u = a.getBoundingClientRect(),
        c = { width: u.width, height: u.height }
      return (ar.widthCache[i] = c), ++ar.cacheCount > ET && ((ar.cacheCount = 0), (ar.widthCache = {})), c
    } catch {
      return { width: 0, height: 0 }
    }
  },
  CT = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    }
  }
function yn(e) {
  '@babel/helpers - typeof'
  return (
    (yn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    yn(e)
  )
}
function Ni(e, t) {
  return DT(e) || NT(e, t) || kT(e, t) || IT()
}
function IT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function kT(e, t) {
  if (e) {
    if (typeof e == 'string') return ml(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ml(e, t)
  }
}
function ml(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function NT(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return
        c = !1
      } else for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function DT(e) {
  if (Array.isArray(e)) return e
}
function LT(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function bl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, RT(n.key), n)
  }
}
function BT(e, t, r) {
  return t && bl(e.prototype, t), r && bl(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function RT(e) {
  var t = FT(e, 'string')
  return yn(t) == 'symbol' ? t : String(t)
}
function FT(e, t) {
  if (yn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t)
    if (yn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return String(e)
}
var xl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  wl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  WT = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  zT = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  hp = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 },
  UT = Object.keys(hp),
  hr = 'NaN'
function qT(e, t) {
  return e * hp[t]
}
var fi = (function () {
  function e(t, r) {
    LT(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ''),
      r !== '' && !WT.test(r) && ((this.num = NaN), (this.unit = '')),
      UT.includes(r) && ((this.num = qT(t, r)), (this.unit = 'px'))
  }
  return (
    BT(
      e,
      [
        {
          key: 'add',
          value: function (r) {
            return this.unit !== r.unit ? new e(NaN, '') : new e(this.num + r.num, this.unit)
          },
        },
        {
          key: 'subtract',
          value: function (r) {
            return this.unit !== r.unit ? new e(NaN, '') : new e(this.num - r.num, this.unit)
          },
        },
        {
          key: 'multiply',
          value: function (r) {
            return this.unit !== '' && r.unit !== '' && this.unit !== r.unit
              ? new e(NaN, '')
              : new e(this.num * r.num, this.unit || r.unit)
          },
        },
        {
          key: 'divide',
          value: function (r) {
            return this.unit !== '' && r.unit !== '' && this.unit !== r.unit
              ? new e(NaN, '')
              : new e(this.num / r.num, this.unit || r.unit)
          },
        },
        {
          key: 'toString',
          value: function () {
            return ''.concat(this.num).concat(this.unit)
          },
        },
        {
          key: 'isNaN',
          value: function () {
            return Number.isNaN(this.num)
          },
        },
      ],
      [
        {
          key: 'parse',
          value: function (r) {
            var n,
              i = (n = zT.exec(r)) !== null && n !== void 0 ? n : [],
              a = Ni(i, 3),
              o = a[1],
              u = a[2]
            return new e(parseFloat(o), u ?? '')
          },
        },
      ],
    ),
    e
  )
})()
function dp(e) {
  if (e.includes(hr)) return hr
  for (var t = e; t.includes('*') || t.includes('/'); ) {
    var r,
      n = (r = xl.exec(t)) !== null && r !== void 0 ? r : [],
      i = Ni(n, 4),
      a = i[1],
      o = i[2],
      u = i[3],
      c = fi.parse(a ?? ''),
      s = fi.parse(u ?? ''),
      f = o === '*' ? c.multiply(s) : c.divide(s)
    if (f.isNaN()) return hr
    t = t.replace(xl, f.toString())
  }
  for (; t.includes('+') || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l,
      h = (l = wl.exec(t)) !== null && l !== void 0 ? l : [],
      d = Ni(h, 4),
      y = d[1],
      v = d[2],
      p = d[3],
      x = fi.parse(y ?? ''),
      b = fi.parse(p ?? ''),
      w = v === '+' ? x.add(b) : x.subtract(b)
    if (w.isNaN()) return hr
    t = t.replace(wl, w.toString())
  }
  return t
}
var Ol = /\(([^()]*)\)/
function HT(e) {
  for (var t = e; t.includes('('); ) {
    var r = Ol.exec(t),
      n = Ni(r, 2),
      i = n[1]
    t = t.replace(Ol, dp(i))
  }
  return t
}
function GT(e) {
  var t = e.replace(/\s+/g, '')
  return (t = HT(t)), (t = dp(t)), t
}
function KT(e) {
  try {
    return GT(e)
  } catch {
    return hr
  }
}
function lo(e) {
  var t = KT(e.slice(5, -1))
  return t === hr ? '' : t
}
var XT = ['x', 'y', 'lineHeight', 'capHeight', 'scaleToFit', 'textAnchor', 'verticalAnchor', 'fill'],
  VT = ['dx', 'dy', 'angle', 'className', 'breakAll']
function nu() {
  return (
    (nu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    nu.apply(this, arguments)
  )
}
function Sl(e, t) {
  if (e == null) return {}
  var r = YT(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function YT(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function Al(e, t) {
  return eE(e) || QT(e, t) || JT(e, t) || ZT()
}
function ZT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function JT(e, t) {
  if (e) {
    if (typeof e == 'string') return _l(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _l(e, t)
  }
}
function _l(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function QT(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return
        c = !1
      } else for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function eE(e) {
  if (Array.isArray(e)) return e
}
var pp = /[ \f\n\r\t\v\u2028\u2029]+/,
  vp = function (t) {
    var r = t.children,
      n = t.breakAll,
      i = t.style
    try {
      var a = []
      ie(r) || (n ? (a = r.toString().split('')) : (a = r.toString().split(pp)))
      var o = a.map(function (c) {
          return { word: c, width: an(c, i).width }
        }),
        u = n ? 0 : an(' ', i).width
      return { wordsWithComputedWidth: o, spaceWidth: u }
    } catch {
      return null
    }
  },
  tE = function (t, r, n, i, a) {
    var o = t.maxLines,
      u = t.children,
      c = t.style,
      s = t.breakAll,
      f = F(o),
      l = u,
      h = function () {
        var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        return D.reduce(function (I, L) {
          var B = L.word,
            U = L.width,
            G = I[I.length - 1]
          if (G && (i == null || a || G.width + U + n < Number(i))) G.words.push(B), (G.width += U + n)
          else {
            var V = { words: [B], width: U }
            I.push(V)
          }
          return I
        }, [])
      },
      d = h(r),
      y = function (D) {
        return D.reduce(function (I, L) {
          return I.width > L.width ? I : L
        })
      }
    if (!f) return d
    for (
      var v = '…',
        p = function (D) {
          var I = l.slice(0, D),
            L = vp({ breakAll: s, style: c, children: I + v }).wordsWithComputedWidth,
            B = h(L),
            U = B.length > o || y(B).width > Number(i)
          return [U, B]
        },
        x = 0,
        b = l.length - 1,
        w = 0,
        g;
      x <= b && w <= l.length - 1;

    ) {
      var m = Math.floor((x + b) / 2),
        O = m - 1,
        S = p(O),
        A = Al(S, 2),
        E = A[0],
        T = A[1],
        $ = p(m),
        P = Al($, 1),
        M = P[0]
      if ((!E && !M && (x = m + 1), E && M && (b = m - 1), !E && M)) {
        g = T
        break
      }
      w++
    }
    return g || d
  },
  $l = function (t) {
    var r = ie(t) ? [] : t.toString().split(pp)
    return [{ words: r }]
  },
  rE = function (t) {
    var r = t.width,
      n = t.scaleToFit,
      i = t.children,
      a = t.style,
      o = t.breakAll,
      u = t.maxLines
    if ((r || n) && !Tt.isSsr) {
      var c,
        s,
        f = vp({ breakAll: o, children: i, style: a })
      if (f) {
        var l = f.wordsWithComputedWidth,
          h = f.spaceWidth
        ;(c = l), (s = h)
      } else return $l(i)
      return tE({ breakAll: o, children: i, maxLines: u, style: a }, c, s, r, n)
    }
    return $l(i)
  },
  Pl = '#808080',
  Di = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.lineHeight,
      u = o === void 0 ? '1em' : o,
      c = t.capHeight,
      s = c === void 0 ? '0.71em' : c,
      f = t.scaleToFit,
      l = f === void 0 ? !1 : f,
      h = t.textAnchor,
      d = h === void 0 ? 'start' : h,
      y = t.verticalAnchor,
      v = y === void 0 ? 'end' : y,
      p = t.fill,
      x = p === void 0 ? Pl : p,
      b = Sl(t, XT),
      w = N.useMemo(
        function () {
          return rE({
            breakAll: b.breakAll,
            children: b.children,
            maxLines: b.maxLines,
            scaleToFit: l,
            style: b.style,
            width: b.width,
          })
        },
        [b.breakAll, b.children, b.maxLines, l, b.style, b.width],
      ),
      g = b.dx,
      m = b.dy,
      O = b.angle,
      S = b.className,
      A = b.breakAll,
      E = Sl(b, VT)
    if (!be(n) || !be(a)) return null
    var T = n + (F(g) ? g : 0),
      $ = a + (F(m) ? m : 0),
      P
    switch (v) {
      case 'start':
        P = lo('calc('.concat(s, ')'))
        break
      case 'middle':
        P = lo(
          'calc('
            .concat((w.length - 1) / 2, ' * -')
            .concat(u, ' + (')
            .concat(s, ' / 2))'),
        )
        break
      default:
        P = lo('calc('.concat(w.length - 1, ' * -').concat(u, ')'))
        break
    }
    var M = []
    if (l) {
      var j = w[0].width,
        D = b.width
      M.push('scale('.concat((F(D) ? D / j : 1) / j, ')'))
    }
    return (
      O && M.push('rotate('.concat(O, ', ').concat(T, ', ').concat($, ')')),
      M.length && (E.transform = M.join(' ')),
      _.createElement(
        'text',
        nu({}, re(E, !0), {
          x: T,
          y: $,
          className: ae('recharts-text', S),
          textAnchor: d,
          fill: x.includes('url') ? Pl : x,
        }),
        w.map(function (I, L) {
          var B = I.words.join(A ? '' : ' ')
          return _.createElement('tspan', { x: T, dy: L === 0 ? P : u, key: B }, B)
        }),
      )
    )
  }
function Et(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}
function nE(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
function xc(e) {
  let t, r, n
  e.length !== 2
    ? ((t = Et), (r = (u, c) => Et(e(u), c)), (n = (u, c) => e(u) - c))
    : ((t = e === Et || e === nE ? e : iE), (r = e), (n = e))
  function i(u, c, s = 0, f = u.length) {
    if (s < f) {
      if (t(c, c) !== 0) return f
      do {
        const l = (s + f) >>> 1
        r(u[l], c) < 0 ? (s = l + 1) : (f = l)
      } while (s < f)
    }
    return s
  }
  function a(u, c, s = 0, f = u.length) {
    if (s < f) {
      if (t(c, c) !== 0) return f
      do {
        const l = (s + f) >>> 1
        r(u[l], c) <= 0 ? (s = l + 1) : (f = l)
      } while (s < f)
    }
    return s
  }
  function o(u, c, s = 0, f = u.length) {
    const l = i(u, c, s, f - 1)
    return l > s && n(u[l - 1], c) > -n(u[l], c) ? l - 1 : l
  }
  return { left: i, center: o, right: a }
}
function iE() {
  return 0
}
function yp(e) {
  return e === null ? NaN : +e
}
function* aE(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r)
}
const oE = xc(Et),
  Jn = oE.right
xc(yp).center
class Tl extends Map {
  constructor(t, r = sE) {
    if ((super(), Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: r } }), t != null))
      for (const [n, i] of t) this.set(n, i)
  }
  get(t) {
    return super.get(El(this, t))
  }
  has(t) {
    return super.has(El(this, t))
  }
  set(t, r) {
    return super.set(uE(this, t), r)
  }
  delete(t) {
    return super.delete(cE(this, t))
  }
}
function El({ _intern: e, _key: t }, r) {
  const n = t(r)
  return e.has(n) ? e.get(n) : r
}
function uE({ _intern: e, _key: t }, r) {
  const n = t(r)
  return e.has(n) ? e.get(n) : (e.set(n, r), r)
}
function cE({ _intern: e, _key: t }, r) {
  const n = t(r)
  return e.has(n) && ((r = e.get(n)), e.delete(n)), r
}
function sE(e) {
  return e !== null && typeof e == 'object' ? e.valueOf() : e
}
function lE(e = Et) {
  if (e === Et) return gp
  if (typeof e != 'function') throw new TypeError('compare is not a function')
  return (t, r) => {
    const n = e(t, r)
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0)
  }
}
function gp(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0)
}
const fE = Math.sqrt(50),
  hE = Math.sqrt(10),
  dE = Math.sqrt(2)
function Li(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    a = n / Math.pow(10, i),
    o = a >= fE ? 10 : a >= hE ? 5 : a >= dE ? 2 : 1
  let u, c, s
  return (
    i < 0
      ? ((s = Math.pow(10, -i) / o),
        (u = Math.round(e * s)),
        (c = Math.round(t * s)),
        u / s < e && ++u,
        c / s > t && --c,
        (s = -s))
      : ((s = Math.pow(10, i) * o),
        (u = Math.round(e / s)),
        (c = Math.round(t / s)),
        u * s < e && ++u,
        c * s > t && --c),
    c < u && 0.5 <= r && r < 2 ? Li(e, t, r * 2) : [u, c, s]
  )
}
function iu(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return []
  if (e === t) return [e]
  const n = t < e,
    [i, a, o] = n ? Li(t, e, r) : Li(e, t, r)
  if (!(a >= i)) return []
  const u = a - i + 1,
    c = new Array(u)
  if (n)
    if (o < 0) for (let s = 0; s < u; ++s) c[s] = (a - s) / -o
    else for (let s = 0; s < u; ++s) c[s] = (a - s) * o
  else if (o < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -o
  else for (let s = 0; s < u; ++s) c[s] = (i + s) * o
  return c
}
function au(e, t, r) {
  return (t = +t), (e = +e), (r = +r), Li(e, t, r)[2]
}
function ou(e, t, r) {
  ;(t = +t), (e = +e), (r = +r)
  const n = t < e,
    i = n ? au(t, e, r) : au(e, t, r)
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i)
}
function jl(e, t) {
  let r
  for (const n of e) n != null && (r < n || (r === void 0 && n >= n)) && (r = n)
  return r
}
function Ml(e, t) {
  let r
  for (const n of e) n != null && (r > n || (r === void 0 && n >= n)) && (r = n)
  return r
}
function mp(e, t, r = 0, n = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e
  for (i = i === void 0 ? gp : lE(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1,
        s = t - r + 1,
        f = Math.log(c),
        l = 0.5 * Math.exp((2 * f) / 3),
        h = 0.5 * Math.sqrt((f * l * (c - l)) / c) * (s - c / 2 < 0 ? -1 : 1),
        d = Math.max(r, Math.floor(t - (s * l) / c + h)),
        y = Math.min(n, Math.floor(t + ((c - s) * l) / c + h))
      mp(e, t, d, y, i)
    }
    const a = e[t]
    let o = r,
      u = n
    for (Xr(e, r, t), i(e[n], a) > 0 && Xr(e, r, n); o < u; ) {
      for (Xr(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o
      for (; i(e[u], a) > 0; ) --u
    }
    i(e[r], a) === 0 ? Xr(e, r, u) : (++u, Xr(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1)
  }
  return e
}
function Xr(e, t, r) {
  const n = e[t]
  ;(e[t] = e[r]), (e[r] = n)
}
function pE(e, t, r) {
  if (((e = Float64Array.from(aE(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return Ml(e)
    if (t >= 1) return jl(e)
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = jl(mp(e, a).subarray(0, a + 1)),
      u = Ml(e.subarray(a + 1))
    return o + (u - o) * (i - a)
  }
}
function vE(e, t, r = yp) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e)
    if (t >= 1) return +r(e[n - 1], n - 1, e)
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      u = +r(e[a + 1], a + 1, e)
    return o + (u - o) * (i - a)
  }
}
function yE(e, t, r) {
  ;(e = +e), (t = +t), (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r)
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e + n * r
  return a
}
function Ye(e, t) {
  switch (arguments.length) {
    case 0:
      break
    case 1:
      this.range(e)
      break
    default:
      this.range(t).domain(e)
      break
  }
  return this
}
function At(e, t) {
  switch (arguments.length) {
    case 0:
      break
    case 1: {
      typeof e == 'function' ? this.interpolator(e) : this.range(e)
      break
    }
    default: {
      this.domain(e), typeof t == 'function' ? this.interpolator(t) : this.range(t)
      break
    }
  }
  return this
}
const uu = Symbol('implicit')
function wc() {
  var e = new Tl(),
    t = [],
    r = [],
    n = uu
  function i(a) {
    let o = e.get(a)
    if (o === void 0) {
      if (n !== uu) return n
      e.set(a, (o = t.push(a) - 1))
    }
    return r[o % r.length]
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice()
      ;(t = []), (e = new Tl())
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1)
      return i
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice()
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n
    }),
    (i.copy = function () {
      return wc(t, r).unknown(n)
    }),
    Ye.apply(i, arguments),
    i
  )
}
function gn() {
  var e = wc().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    u = !1,
    c = 0,
    s = 0,
    f = 0.5
  delete e.unknown
  function l() {
    var h = t().length,
      d = i < n,
      y = d ? i : n,
      v = d ? n : i
    ;(a = (v - y) / Math.max(1, h - c + s * 2)),
      u && (a = Math.floor(a)),
      (y += (v - y - a * (h - c)) * f),
      (o = a * (1 - c)),
      u && ((y = Math.round(y)), (o = Math.round(o)))
    var p = yE(h).map(function (x) {
      return y + a * x
    })
    return r(d ? p.reverse() : p)
  }
  return (
    (e.domain = function (h) {
      return arguments.length ? (t(h), l()) : t()
    }),
    (e.range = function (h) {
      return arguments.length ? (([n, i] = h), (n = +n), (i = +i), l()) : [n, i]
    }),
    (e.rangeRound = function (h) {
      return ([n, i] = h), (n = +n), (i = +i), (u = !0), l()
    }),
    (e.bandwidth = function () {
      return o
    }),
    (e.step = function () {
      return a
    }),
    (e.round = function (h) {
      return arguments.length ? ((u = !!h), l()) : u
    }),
    (e.padding = function (h) {
      return arguments.length ? ((c = Math.min(1, (s = +h))), l()) : c
    }),
    (e.paddingInner = function (h) {
      return arguments.length ? ((c = Math.min(1, h)), l()) : c
    }),
    (e.paddingOuter = function (h) {
      return arguments.length ? ((s = +h), l()) : s
    }),
    (e.align = function (h) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, h))), l()) : f
    }),
    (e.copy = function () {
      return gn(t(), [n, i]).round(u).paddingInner(c).paddingOuter(s).align(f)
    }),
    Ye.apply(l(), arguments)
  )
}
function bp(e) {
  var t = e.copy
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return bp(t())
    }),
    e
  )
}
function on() {
  return bp(gn.apply(null, arguments).paddingInner(1))
}
function Oc(e, t, r) {
  ;(e.prototype = t.prototype = r), (r.constructor = e)
}
function xp(e, t) {
  var r = Object.create(e.prototype)
  for (var n in t) r[n] = t[n]
  return r
}
function Qn() {}
var mn = 0.7,
  Bi = 1 / mn,
  vr = '\\s*([+-]?\\d+)\\s*',
  bn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  ot = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  gE = /^#([0-9a-f]{3,8})$/,
  mE = new RegExp(`^rgb\\(${vr},${vr},${vr}\\)$`),
  bE = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`),
  xE = new RegExp(`^rgba\\(${vr},${vr},${vr},${bn}\\)$`),
  wE = new RegExp(`^rgba\\(${ot},${ot},${ot},${bn}\\)$`),
  OE = new RegExp(`^hsl\\(${bn},${ot},${ot}\\)$`),
  SE = new RegExp(`^hsla\\(${bn},${ot},${ot},${bn}\\)$`),
  Cl = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  }
Oc(Qn, xn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e)
  },
  displayable() {
    return this.rgb().displayable()
  },
  hex: Il,
  formatHex: Il,
  formatHex8: AE,
  formatHsl: _E,
  formatRgb: kl,
  toString: kl,
})
function Il() {
  return this.rgb().formatHex()
}
function AE() {
  return this.rgb().formatHex8()
}
function _E() {
  return wp(this).formatHsl()
}
function kl() {
  return this.rgb().formatRgb()
}
function xn(e) {
  var t, r
  return (
    (e = (e + '').trim().toLowerCase()),
    (t = gE.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? Nl(t)
          : r === 3
            ? new De(((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (t & 240), ((t & 15) << 4) | (t & 15), 1)
            : r === 8
              ? hi((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : r === 4
                ? hi(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = mE.exec(e))
        ? new De(t[1], t[2], t[3], 1)
        : (t = bE.exec(e))
          ? new De((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = xE.exec(e))
            ? hi(t[1], t[2], t[3], t[4])
            : (t = wE.exec(e))
              ? hi((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = OE.exec(e))
                ? Bl(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = SE.exec(e))
                  ? Bl(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Cl.hasOwnProperty(e)
                    ? Nl(Cl[e])
                    : e === 'transparent'
                      ? new De(NaN, NaN, NaN, 0)
                      : null
  )
}
function Nl(e) {
  return new De((e >> 16) & 255, (e >> 8) & 255, e & 255, 1)
}
function hi(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new De(e, t, r, n)
}
function $E(e) {
  return e instanceof Qn || (e = xn(e)), e ? ((e = e.rgb()), new De(e.r, e.g, e.b, e.opacity)) : new De()
}
function cu(e, t, r, n) {
  return arguments.length === 1 ? $E(e) : new De(e, t, r, n ?? 1)
}
function De(e, t, r, n) {
  ;(this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n)
}
Oc(
  De,
  cu,
  xp(Qn, {
    brighter(e) {
      return (e = e == null ? Bi : Math.pow(Bi, e)), new De(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    darker(e) {
      return (e = e == null ? mn : Math.pow(mn, e)), new De(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    rgb() {
      return this
    },
    clamp() {
      return new De(Kt(this.r), Kt(this.g), Kt(this.b), Ri(this.opacity))
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      )
    },
    hex: Dl,
    formatHex: Dl,
    formatHex8: PE,
    formatRgb: Ll,
    toString: Ll,
  }),
)
function Dl() {
  return `#${qt(this.r)}${qt(this.g)}${qt(this.b)}`
}
function PE() {
  return `#${qt(this.r)}${qt(this.g)}${qt(this.b)}${qt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
}
function Ll() {
  const e = Ri(this.opacity)
  return `${e === 1 ? 'rgb(' : 'rgba('}${Kt(this.r)}, ${Kt(this.g)}, ${Kt(this.b)}${e === 1 ? ')' : `, ${e})`}`
}
function Ri(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}
function Kt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0))
}
function qt(e) {
  return (e = Kt(e)), (e < 16 ? '0' : '') + e.toString(16)
}
function Bl(e, t, r, n) {
  return n <= 0 ? (e = t = r = NaN) : r <= 0 || r >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN), new Qe(e, t, r, n)
}
function wp(e) {
  if (e instanceof Qe) return new Qe(e.h, e.s, e.l, e.opacity)
  if ((e instanceof Qn || (e = xn(e)), !e)) return new Qe()
  if (e instanceof Qe) return e
  e = e.rgb()
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    u = a - i,
    c = (a + i) / 2
  return (
    u
      ? (t === a ? (o = (r - n) / u + (r < n) * 6) : r === a ? (o = (n - t) / u + 2) : (o = (t - r) / u + 4),
        (u /= c < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (u = c > 0 && c < 1 ? 0 : o),
    new Qe(o, u, c, e.opacity)
  )
}
function TE(e, t, r, n) {
  return arguments.length === 1 ? wp(e) : new Qe(e, t, r, n ?? 1)
}
function Qe(e, t, r, n) {
  ;(this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n)
}
Oc(
  Qe,
  TE,
  xp(Qn, {
    brighter(e) {
      return (e = e == null ? Bi : Math.pow(Bi, e)), new Qe(this.h, this.s, this.l * e, this.opacity)
    },
    darker(e) {
      return (e = e == null ? mn : Math.pow(mn, e)), new Qe(this.h, this.s, this.l * e, this.opacity)
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n
      return new De(
        fo(e >= 240 ? e - 240 : e + 120, i, n),
        fo(e, i, n),
        fo(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      )
    },
    clamp() {
      return new Qe(Rl(this.h), di(this.s), di(this.l), Ri(this.opacity))
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      )
    },
    formatHsl() {
      const e = Ri(this.opacity)
      return `${e === 1 ? 'hsl(' : 'hsla('}${Rl(this.h)}, ${di(this.s) * 100}%, ${di(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`
    },
  }),
)
function Rl(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e
}
function di(e) {
  return Math.max(0, Math.min(1, e || 0))
}
function fo(e, t, r) {
  return (e < 60 ? t + ((r - t) * e) / 60 : e < 180 ? r : e < 240 ? t + ((r - t) * (240 - e)) / 60 : t) * 255
}
const Sc = (e) => () => e
function EE(e, t) {
  return function (r) {
    return e + r * t
  }
}
function jE(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r)
    }
  )
}
function ME(e) {
  return (e = +e) == 1
    ? Op
    : function (t, r) {
        return r - t ? jE(t, r, e) : Sc(isNaN(t) ? r : t)
      }
}
function Op(e, t) {
  var r = t - e
  return r ? EE(e, r) : Sc(isNaN(e) ? t : e)
}
const Fl = (function e(t) {
  var r = ME(t)
  function n(i, a) {
    var o = r((i = cu(i)).r, (a = cu(a)).r),
      u = r(i.g, a.g),
      c = r(i.b, a.b),
      s = Op(i.opacity, a.opacity)
    return function (f) {
      return (i.r = o(f)), (i.g = u(f)), (i.b = c(f)), (i.opacity = s(f)), i + ''
    }
  }
  return (n.gamma = e), n
})(1)
function CE(e, t) {
  t || (t = [])
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a
    return n
  }
}
function IE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView)
}
function kE(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o
  for (o = 0; o < n; ++o) i[o] = Wr(e[o], t[o])
  for (; o < r; ++o) a[o] = t[o]
  return function (u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u)
    return a
  }
}
function NE(e, t) {
  var r = new Date()
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return r.setTime(e * (1 - n) + t * n), r
    }
  )
}
function Fi(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r
    }
  )
}
function DE(e, t) {
  var r = {},
    n = {},
    i
  ;(e === null || typeof e != 'object') && (e = {}), (t === null || typeof t != 'object') && (t = {})
  for (i in t) i in e ? (r[i] = Wr(e[i], t[i])) : (n[i] = t[i])
  return function (a) {
    for (i in r) n[i] = r[i](a)
    return n
  }
}
var su = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  ho = new RegExp(su.source, 'g')
function LE(e) {
  return function () {
    return e
  }
}
function BE(e) {
  return function (t) {
    return e(t) + ''
  }
}
function RE(e, t) {
  var r = (su.lastIndex = ho.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    u = [],
    c = []
  for (e = e + '', t = t + ''; (n = su.exec(e)) && (i = ho.exec(t)); )
    (a = i.index) > r && ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? u[o]
          ? (u[o] += i)
          : (u[++o] = i)
        : ((u[++o] = null), c.push({ i: o, x: Fi(n, i) })),
      (r = ho.lastIndex)
  return (
    r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
    u.length < 2
      ? c[0]
        ? BE(c[0].x)
        : LE(t)
      : ((t = c.length),
        function (s) {
          for (var f = 0, l; f < t; ++f) u[(l = c[f]).i] = l.x(s)
          return u.join('')
        })
  )
}
function Wr(e, t) {
  var r = typeof t,
    n
  return t == null || r === 'boolean'
    ? Sc(t)
    : (r === 'number'
        ? Fi
        : r === 'string'
          ? (n = xn(t))
            ? ((t = n), Fl)
            : RE
          : t instanceof xn
            ? Fl
            : t instanceof Date
              ? NE
              : IE(t)
                ? CE
                : Array.isArray(t)
                  ? kE
                  : (typeof t.valueOf != 'function' && typeof t.toString != 'function') || isNaN(t)
                    ? DE
                    : Fi)(e, t)
}
function Ac(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r)
    }
  )
}
function FE(e, t) {
  t === void 0 && ((t = e), (e = Wr))
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, (i = t[++r]))
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))))
    return a[u](o - u)
  }
}
function WE(e) {
  return function () {
    return e
  }
}
function Wi(e) {
  return +e
}
var Wl = [0, 1]
function Ie(e) {
  return e
}
function lu(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t
      }
    : WE(isNaN(t) ? NaN : 0.5)
}
function zE(e, t) {
  var r
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n))
    }
  )
}
function UE(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1]
  return (
    i < n ? ((n = lu(i, n)), (a = r(o, a))) : ((n = lu(n, i)), (a = r(a, o))),
    function (u) {
      return a(n(u))
    }
  )
}
function qE(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1
  for (e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse())); ++o < n; )
    (i[o] = lu(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1]))
  return function (u) {
    var c = Jn(e, u, 1, n) - 1
    return a[c](i[c](u))
  }
}
function ei(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())
}
function Na() {
  var e = Wl,
    t = Wl,
    r = Wr,
    n,
    i,
    a,
    o = Ie,
    u,
    c,
    s
  function f() {
    var h = Math.min(e.length, t.length)
    return o !== Ie && (o = zE(e[0], e[h - 1])), (u = h > 2 ? qE : UE), (c = s = null), l
  }
  function l(h) {
    return h == null || isNaN((h = +h)) ? a : (c || (c = u(e.map(n), t, r)))(n(o(h)))
  }
  return (
    (l.invert = function (h) {
      return o(i((s || (s = u(t, e.map(n), Fi)))(h)))
    }),
    (l.domain = function (h) {
      return arguments.length ? ((e = Array.from(h, Wi)), f()) : e.slice()
    }),
    (l.range = function (h) {
      return arguments.length ? ((t = Array.from(h)), f()) : t.slice()
    }),
    (l.rangeRound = function (h) {
      return (t = Array.from(h)), (r = Ac), f()
    }),
    (l.clamp = function (h) {
      return arguments.length ? ((o = h ? !0 : Ie), f()) : o !== Ie
    }),
    (l.interpolate = function (h) {
      return arguments.length ? ((r = h), f()) : r
    }),
    (l.unknown = function (h) {
      return arguments.length ? ((a = h), l) : a
    }),
    function (h, d) {
      return (n = h), (i = d), f()
    }
  )
}
function _c() {
  return Na()(Ie, Ie)
}
function HE(e) {
  return Math.abs((e = Math.round(e))) >= 1e21 ? e.toLocaleString('en').replace(/,/g, '') : e.toString(10)
}
function zi(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf('e')) < 0) return null
  var r,
    n = e.slice(0, r)
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)]
}
function Sr(e) {
  return (e = zi(Math.abs(e))), e ? e[1] : NaN
}
function GE(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, u = e[0], c = 0;
      i > 0 &&
      u > 0 &&
      (c + u + 1 > n && (u = Math.max(1, n - c)), a.push(r.substring((i -= u), i + u)), !((c += u + 1) > n));

    )
      u = e[(o = (o + 1) % e.length)]
    return a.reverse().join(t)
  }
}
function KE(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r]
    })
  }
}
var XE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function wn(e) {
  if (!(t = XE.exec(e))) throw new Error('invalid format: ' + e)
  var t
  return new $c({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  })
}
wn.prototype = $c.prototype
function $c(e) {
  ;(this.fill = e.fill === void 0 ? ' ' : e.fill + ''),
    (this.align = e.align === void 0 ? '>' : e.align + ''),
    (this.sign = e.sign === void 0 ? '-' : e.sign + ''),
    (this.symbol = e.symbol === void 0 ? '' : e.symbol + ''),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? '' : e.type + '')
}
$c.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? '0' : '') +
    (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
    (this.comma ? ',' : '') +
    (this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
    (this.trim ? '~' : '') +
    this.type
  )
}
function VE(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case '.':
        n = i = r
        break
      case '0':
        n === 0 && (n = r), (i = r)
        break
      default:
        if (!+e[r]) break e
        n > 0 && (n = 0)
        break
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e
}
var Sp
function YE(e, t) {
  var r = zi(e, t)
  if (!r) return e + ''
  var n = r[0],
    i = r[1],
    a = i - (Sp = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length
  return a === o
    ? n
    : a > o
      ? n + new Array(a - o + 1).join('0')
      : a > 0
        ? n.slice(0, a) + '.' + n.slice(a)
        : '0.' + new Array(1 - a).join('0') + zi(e, Math.max(0, t + a - 1))[0]
}
function zl(e, t) {
  var r = zi(e, t)
  if (!r) return e + ''
  var n = r[0],
    i = r[1]
  return i < 0
    ? '0.' + new Array(-i).join('0') + n
    : n.length > i + 1
      ? n.slice(0, i + 1) + '.' + n.slice(i + 1)
      : n + new Array(i - n.length + 2).join('0')
}
const Ul = {
  '%': (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + '',
  d: HE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => zl(e * 100, t),
  r: zl,
  s: YE,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
}
function ql(e) {
  return e
}
var Hl = Array.prototype.map,
  Gl = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
function ZE(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ql : GE(Hl.call(e.grouping, Number), e.thousands + ''),
    r = e.currency === void 0 ? '' : e.currency[0] + '',
    n = e.currency === void 0 ? '' : e.currency[1] + '',
    i = e.decimal === void 0 ? '.' : e.decimal + '',
    a = e.numerals === void 0 ? ql : KE(Hl.call(e.numerals, String)),
    o = e.percent === void 0 ? '%' : e.percent + '',
    u = e.minus === void 0 ? '−' : e.minus + '',
    c = e.nan === void 0 ? 'NaN' : e.nan + ''
  function s(l) {
    l = wn(l)
    var h = l.fill,
      d = l.align,
      y = l.sign,
      v = l.symbol,
      p = l.zero,
      x = l.width,
      b = l.comma,
      w = l.precision,
      g = l.trim,
      m = l.type
    m === 'n' ? ((b = !0), (m = 'g')) : Ul[m] || (w === void 0 && (w = 12), (g = !0), (m = 'g')),
      (p || (h === '0' && d === '=')) && ((p = !0), (h = '0'), (d = '='))
    var O = v === '$' ? r : v === '#' && /[boxX]/.test(m) ? '0' + m.toLowerCase() : '',
      S = v === '$' ? n : /[%p]/.test(m) ? o : '',
      A = Ul[m],
      E = /[defgprs%]/.test(m)
    w = w === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w))
    function T($) {
      var P = O,
        M = S,
        j,
        D,
        I
      if (m === 'c') (M = A($) + M), ($ = '')
      else {
        $ = +$
        var L = $ < 0 || 1 / $ < 0
        if (
          (($ = isNaN($) ? c : A(Math.abs($), w)),
          g && ($ = VE($)),
          L && +$ == 0 && y !== '+' && (L = !1),
          (P = (L ? (y === '(' ? y : u) : y === '-' || y === '(' ? '' : y) + P),
          (M = (m === 's' ? Gl[8 + Sp / 3] : '') + M + (L && y === '(' ? ')' : '')),
          E)
        ) {
          for (j = -1, D = $.length; ++j < D; )
            if (((I = $.charCodeAt(j)), 48 > I || I > 57)) {
              ;(M = (I === 46 ? i + $.slice(j + 1) : $.slice(j)) + M), ($ = $.slice(0, j))
              break
            }
        }
      }
      b && !p && ($ = t($, 1 / 0))
      var B = P.length + $.length + M.length,
        U = B < x ? new Array(x - B + 1).join(h) : ''
      switch ((b && p && (($ = t(U + $, U.length ? x - M.length : 1 / 0)), (U = '')), d)) {
        case '<':
          $ = P + $ + M + U
          break
        case '=':
          $ = P + U + $ + M
          break
        case '^':
          $ = U.slice(0, (B = U.length >> 1)) + P + $ + M + U.slice(B)
          break
        default:
          $ = U + P + $ + M
          break
      }
      return a($)
    }
    return (
      (T.toString = function () {
        return l + ''
      }),
      T
    )
  }
  function f(l, h) {
    var d = s(((l = wn(l)), (l.type = 'f'), l)),
      y = Math.max(-8, Math.min(8, Math.floor(Sr(h) / 3))) * 3,
      v = Math.pow(10, -y),
      p = Gl[8 + y / 3]
    return function (x) {
      return d(v * x) + p
    }
  }
  return { format: s, formatPrefix: f }
}
var pi, Pc, Ap
JE({ thousands: ',', grouping: [3], currency: ['$', ''] })
function JE(e) {
  return (pi = ZE(e)), (Pc = pi.format), (Ap = pi.formatPrefix), pi
}
function QE(e) {
  return Math.max(0, -Sr(Math.abs(e)))
}
function ej(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Sr(t) / 3))) * 3 - Sr(Math.abs(e)))
}
function tj(e, t) {
  return (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Sr(t) - Sr(e)) + 1
}
function _p(e, t, r, n) {
  var i = ou(e, t, r),
    a
  switch (((n = wn(n ?? ',f')), n.type)) {
    case 's': {
      var o = Math.max(Math.abs(e), Math.abs(t))
      return n.precision == null && !isNaN((a = ej(i, o))) && (n.precision = a), Ap(n, o)
    }
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r': {
      n.precision == null &&
        !isNaN((a = tj(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === 'e'))
      break
    }
    case 'f':
    case '%': {
      n.precision == null && !isNaN((a = QE(i))) && (n.precision = a - (n.type === '%') * 2)
      break
    }
  }
  return Pc(n)
}
function It(e) {
  var t = e.domain
  return (
    (e.ticks = function (r) {
      var n = t()
      return iu(n[0], n[n.length - 1], r ?? 10)
    }),
    (e.tickFormat = function (r, n) {
      var i = t()
      return _p(i[0], i[i.length - 1], r ?? 10, n)
    }),
    (e.nice = function (r) {
      r == null && (r = 10)
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        u = n[a],
        c,
        s,
        f = 10
      for (u < o && ((s = o), (o = u), (u = s), (s = i), (i = a), (a = s)); f-- > 0; ) {
        if (((s = au(o, u, r)), s === c)) return (n[i] = o), (n[a] = u), t(n)
        if (s > 0) (o = Math.floor(o / s) * s), (u = Math.ceil(u / s) * s)
        else if (s < 0) (o = Math.ceil(o * s) / s), (u = Math.floor(u * s) / s)
        else break
        c = s
      }
      return e
    }),
    e
  )
}
function Ui() {
  var e = _c()
  return (
    (e.copy = function () {
      return ei(e, Ui())
    }),
    Ye.apply(e, arguments),
    It(e)
  )
}
function $p(e) {
  var t
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, Wi)), r) : e.slice()
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t
    }),
    (r.copy = function () {
      return $p(e).unknown(t)
    }),
    (e = arguments.length ? Array.from(e, Wi) : [0, 1]),
    It(r)
  )
}
function Pp(e, t) {
  e = e.slice()
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o
  return a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)), (e[r] = t.floor(i)), (e[n] = t.ceil(a)), e
}
function Kl(e) {
  return Math.log(e)
}
function Xl(e) {
  return Math.exp(e)
}
function rj(e) {
  return -Math.log(-e)
}
function nj(e) {
  return -Math.exp(-e)
}
function ij(e) {
  return isFinite(e) ? +('1e' + e) : e < 0 ? 0 : e
}
function aj(e) {
  return e === 10 ? ij : e === Math.E ? Math.exp : (t) => Math.pow(e, t)
}
function oj(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) || (e === 2 && Math.log2) || ((e = Math.log(e)), (t) => Math.log(t) / e)
}
function Vl(e) {
  return (t, r) => -e(-t, r)
}
function Tc(e) {
  const t = e(Kl, Xl),
    r = t.domain
  let n = 10,
    i,
    a
  function o() {
    return (i = oj(n)), (a = aj(n)), r()[0] < 0 ? ((i = Vl(i)), (a = Vl(a)), e(rj, nj)) : e(Kl, Xl), t
  }
  return (
    (t.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n
    }),
    (t.domain = function (u) {
      return arguments.length ? (r(u), o()) : r()
    }),
    (t.ticks = (u) => {
      const c = r()
      let s = c[0],
        f = c[c.length - 1]
      const l = f < s
      l && ([s, f] = [f, s])
      let h = i(s),
        d = i(f),
        y,
        v
      const p = u == null ? 10 : +u
      let x = []
      if (!(n % 1) && d - h < p) {
        if (((h = Math.floor(h)), (d = Math.ceil(d)), s > 0)) {
          for (; h <= d; ++h)
            for (y = 1; y < n; ++y)
              if (((v = h < 0 ? y / a(-h) : y * a(h)), !(v < s))) {
                if (v > f) break
                x.push(v)
              }
        } else
          for (; h <= d; ++h)
            for (y = n - 1; y >= 1; --y)
              if (((v = h > 0 ? y / a(-h) : y * a(h)), !(v < s))) {
                if (v > f) break
                x.push(v)
              }
        x.length * 2 < p && (x = iu(s, f, p))
      } else x = iu(h, d, Math.min(d - h, p)).map(a)
      return l ? x.reverse() : x
    }),
    (t.tickFormat = (u, c) => {
      if (
        (u == null && (u = 10),
        c == null && (c = n === 10 ? 's' : ','),
        typeof c != 'function' && (!(n % 1) && (c = wn(c)).precision == null && (c.trim = !0), (c = Pc(c))),
        u === 1 / 0)
      )
        return c
      const s = Math.max(1, (n * u) / t.ticks().length)
      return (f) => {
        let l = f / a(Math.round(i(f)))
        return l * n < n - 0.5 && (l *= n), l <= s ? c(f) : ''
      }
    }),
    (t.nice = () => r(Pp(r(), { floor: (u) => a(Math.floor(i(u))), ceil: (u) => a(Math.ceil(i(u))) }))),
    t
  )
}
function Tp() {
  const e = Tc(Na()).domain([1, 10])
  return (e.copy = () => ei(e, Tp()).base(e.base())), Ye.apply(e, arguments), e
}
function Yl(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e))
  }
}
function Zl(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e
  }
}
function Ec(e) {
  var t = 1,
    r = e(Yl(t), Zl(t))
  return (
    (r.constant = function (n) {
      return arguments.length ? e(Yl((t = +n)), Zl(t)) : t
    }),
    It(r)
  )
}
function Ep() {
  var e = Ec(Na())
  return (
    (e.copy = function () {
      return ei(e, Ep()).constant(e.constant())
    }),
    Ye.apply(e, arguments)
  )
}
function Jl(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
  }
}
function uj(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e)
}
function cj(e) {
  return e < 0 ? -e * e : e * e
}
function jc(e) {
  var t = e(Ie, Ie),
    r = 1
  function n() {
    return r === 1 ? e(Ie, Ie) : r === 0.5 ? e(uj, cj) : e(Jl(r), Jl(1 / r))
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r
    }),
    It(t)
  )
}
function Mc() {
  var e = jc(Na())
  return (
    (e.copy = function () {
      return ei(e, Mc()).exponent(e.exponent())
    }),
    Ye.apply(e, arguments),
    e
  )
}
function sj() {
  return Mc.apply(null, arguments).exponent(0.5)
}
function Ql(e) {
  return Math.sign(e) * e * e
}
function lj(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e))
}
function jp() {
  var e = _c(),
    t = [0, 1],
    r = !1,
    n
  function i(a) {
    var o = lj(e(a))
    return isNaN(o) ? n : r ? Math.round(o) : o
  }
  return (
    (i.invert = function (a) {
      return e.invert(Ql(a))
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain()
    }),
    (i.range = function (a) {
      return arguments.length ? (e.range((t = Array.from(a, Wi)).map(Ql)), i) : t.slice()
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0)
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp()
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n
    }),
    (i.copy = function () {
      return jp(e.domain(), t).round(r).clamp(e.clamp()).unknown(n)
    }),
    Ye.apply(i, arguments),
    It(i)
  )
}
function Mp() {
  var e = [],
    t = [],
    r = [],
    n
  function i() {
    var o = 0,
      u = Math.max(1, t.length)
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = vE(e, o / u)
    return a
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[Jn(r, o)]
  }
  return (
    (a.invertExtent = function (o) {
      var u = t.indexOf(o)
      return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]]
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice()
      e = []
      for (let u of o) u != null && !isNaN((u = +u)) && e.push(u)
      return e.sort(Et), i()
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice()
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n
    }),
    (a.quantiles = function () {
      return r.slice()
    }),
    (a.copy = function () {
      return Mp().domain(e).range(t).unknown(n)
    }),
    Ye.apply(a, arguments)
  )
}
function Cp() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a
  function o(c) {
    return c != null && c <= c ? i[Jn(n, c, 0, r)] : a
  }
  function u() {
    var c = -1
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1)
    return o
  }
  return (
    (o.domain = function (c) {
      return arguments.length ? (([e, t] = c), (e = +e), (t = +t), u()) : [e, t]
    }),
    (o.range = function (c) {
      return arguments.length ? ((r = (i = Array.from(c)).length - 1), u()) : i.slice()
    }),
    (o.invertExtent = function (c) {
      var s = i.indexOf(c)
      return s < 0 ? [NaN, NaN] : s < 1 ? [e, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]]
    }),
    (o.unknown = function (c) {
      return arguments.length && (a = c), o
    }),
    (o.thresholds = function () {
      return n.slice()
    }),
    (o.copy = function () {
      return Cp().domain([e, t]).range(i).unknown(a)
    }),
    Ye.apply(It(o), arguments)
  )
}
function Ip() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1
  function i(a) {
    return a != null && a <= a ? t[Jn(e, a, 0, n)] : r
  }
  return (
    (i.domain = function (a) {
      return arguments.length ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i) : e.slice()
    }),
    (i.range = function (a) {
      return arguments.length ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i) : t.slice()
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a)
      return [e[o - 1], e[o]]
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r
    }),
    (i.copy = function () {
      return Ip().domain(e).range(t).unknown(r)
    }),
    Ye.apply(i, arguments)
  )
}
const po = new Date(),
  vo = new Date()
function xe(e, t, r, n) {
  function i(a) {
    return e((a = arguments.length === 0 ? new Date() : new Date(+a))), a
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        u = i.ceil(a)
      return a - o < u - a ? o : u
    }),
    (i.offset = (a, o) => (t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a)),
    (i.range = (a, o, u) => {
      const c = []
      if (((a = i.ceil(a)), (u = u == null ? 1 : Math.floor(u)), !(a < o) || !(u > 0))) return c
      let s
      do c.push((s = new Date(+a))), t(a, u), e(a)
      while (s < a && a < o)
      return c
    }),
    (i.filter = (a) =>
      xe(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1)
        },
        (o, u) => {
          if (o >= o)
            if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
        },
      )),
    r &&
      ((i.count = (a, o) => (po.setTime(+a), vo.setTime(+o), e(po), e(vo), Math.floor(r(po, vo)))),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
            ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0)
            : i
      ))),
    i
  )
}
const qi = xe(
  () => {},
  (e, t) => {
    e.setTime(+e + t)
  },
  (e, t) => t - e,
)
qi.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? xe(
          (t) => {
            t.setTime(Math.floor(t / e) * e)
          },
          (t, r) => {
            t.setTime(+t + r * e)
          },
          (t, r) => (r - t) / e,
        )
      : qi
)
qi.range
const dt = 1e3,
  Ke = dt * 60,
  pt = Ke * 60,
  bt = pt * 24,
  Cc = bt * 7,
  ef = bt * 30,
  yo = bt * 365,
  Ht = xe(
    (e) => {
      e.setTime(e - e.getMilliseconds())
    },
    (e, t) => {
      e.setTime(+e + t * dt)
    },
    (e, t) => (t - e) / dt,
    (e) => e.getUTCSeconds(),
  )
Ht.range
const Ic = xe(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * dt)
  },
  (e, t) => {
    e.setTime(+e + t * Ke)
  },
  (e, t) => (t - e) / Ke,
  (e) => e.getMinutes(),
)
Ic.range
const kc = xe(
  (e) => {
    e.setUTCSeconds(0, 0)
  },
  (e, t) => {
    e.setTime(+e + t * Ke)
  },
  (e, t) => (t - e) / Ke,
  (e) => e.getUTCMinutes(),
)
kc.range
const Nc = xe(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * dt - e.getMinutes() * Ke)
  },
  (e, t) => {
    e.setTime(+e + t * pt)
  },
  (e, t) => (t - e) / pt,
  (e) => e.getHours(),
)
Nc.range
const Dc = xe(
  (e) => {
    e.setUTCMinutes(0, 0, 0)
  },
  (e, t) => {
    e.setTime(+e + t * pt)
  },
  (e, t) => (t - e) / pt,
  (e) => e.getUTCHours(),
)
Dc.range
const ti = xe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ke) / bt,
  (e) => e.getDate() - 1,
)
ti.range
const Da = xe(
  (e) => {
    e.setUTCHours(0, 0, 0, 0)
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
  },
  (e, t) => (t - e) / bt,
  (e) => e.getUTCDate() - 1,
)
Da.range
const kp = xe(
  (e) => {
    e.setUTCHours(0, 0, 0, 0)
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
  },
  (e, t) => (t - e) / bt,
  (e) => Math.floor(e / bt),
)
kp.range
function tr(e) {
  return xe(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0)
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7)
    },
    (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ke) / Cc,
  )
}
const La = tr(0),
  Hi = tr(1),
  fj = tr(2),
  hj = tr(3),
  Ar = tr(4),
  dj = tr(5),
  pj = tr(6)
La.range
Hi.range
fj.range
hj.range
Ar.range
dj.range
pj.range
function rr(e) {
  return xe(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)), t.setUTCHours(0, 0, 0, 0)
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7)
    },
    (t, r) => (r - t) / Cc,
  )
}
const Ba = rr(0),
  Gi = rr(1),
  vj = rr(2),
  yj = rr(3),
  _r = rr(4),
  gj = rr(5),
  mj = rr(6)
Ba.range
Gi.range
vj.range
yj.range
_r.range
gj.range
mj.range
const Lc = xe(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0)
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t)
  },
  (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
)
Lc.range
const Bc = xe(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0)
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t)
  },
  (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
)
Bc.range
const xt = xe(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t)
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
)
xt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : xe(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e)
        },
      )
xt.range
const wt = xe(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t)
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
)
wt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : xe(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e)
        },
      )
wt.range
function Np(e, t, r, n, i, a) {
  const o = [
    [Ht, 1, dt],
    [Ht, 5, 5 * dt],
    [Ht, 15, 15 * dt],
    [Ht, 30, 30 * dt],
    [a, 1, Ke],
    [a, 5, 5 * Ke],
    [a, 15, 15 * Ke],
    [a, 30, 30 * Ke],
    [i, 1, pt],
    [i, 3, 3 * pt],
    [i, 6, 6 * pt],
    [i, 12, 12 * pt],
    [n, 1, bt],
    [n, 2, 2 * bt],
    [r, 1, Cc],
    [t, 1, ef],
    [t, 3, 3 * ef],
    [e, 1, yo],
  ]
  function u(s, f, l) {
    const h = f < s
    h && ([s, f] = [f, s])
    const d = l && typeof l.range == 'function' ? l : c(s, f, l),
      y = d ? d.range(s, +f + 1) : []
    return h ? y.reverse() : y
  }
  function c(s, f, l) {
    const h = Math.abs(f - s) / l,
      d = xc(([, , p]) => p).right(o, h)
    if (d === o.length) return e.every(ou(s / yo, f / yo, l))
    if (d === 0) return qi.every(Math.max(ou(s, f, l), 1))
    const [y, v] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d]
    return y.every(v)
  }
  return [u, c]
}
const [bj, xj] = Np(wt, Bc, Ba, kp, Dc, kc),
  [wj, Oj] = Np(xt, Lc, La, ti, Nc, Ic)
function go(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L)
    return t.setFullYear(e.y), t
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L)
}
function mo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L))
    return t.setUTCFullYear(e.y), t
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
}
function Vr(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 }
}
function Sj(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    u = e.months,
    c = e.shortMonths,
    s = Yr(i),
    f = Zr(i),
    l = Yr(a),
    h = Zr(a),
    d = Yr(o),
    y = Zr(o),
    v = Yr(u),
    p = Zr(u),
    x = Yr(c),
    b = Zr(c),
    w = {
      a: L,
      A: B,
      b: U,
      B: G,
      c: null,
      d: uf,
      e: uf,
      f: Gj,
      g: rM,
      G: iM,
      H: Uj,
      I: qj,
      j: Hj,
      L: Dp,
      m: Kj,
      M: Xj,
      p: V,
      q,
      Q: lf,
      s: ff,
      S: Vj,
      u: Yj,
      U: Zj,
      V: Jj,
      w: Qj,
      W: eM,
      x: null,
      X: null,
      y: tM,
      Y: nM,
      Z: aM,
      '%': sf,
    },
    g = {
      a: J,
      A: $e,
      b: ke,
      B: Dt,
      c: null,
      d: cf,
      e: cf,
      f: sM,
      g: bM,
      G: wM,
      H: oM,
      I: uM,
      j: cM,
      L: Bp,
      m: lM,
      M: fM,
      p: Ne,
      q: ft,
      Q: lf,
      s: ff,
      S: hM,
      u: dM,
      U: pM,
      V: vM,
      w: yM,
      W: gM,
      x: null,
      X: null,
      y: mM,
      Y: xM,
      Z: OM,
      '%': sf,
    },
    m = {
      a: T,
      A: $,
      b: P,
      B: M,
      c: j,
      d: af,
      e: af,
      f: Rj,
      g: nf,
      G: rf,
      H: of,
      I: of,
      j: Nj,
      L: Bj,
      m: kj,
      M: Dj,
      p: E,
      q: Ij,
      Q: Wj,
      s: zj,
      S: Lj,
      u: Tj,
      U: Ej,
      V: jj,
      w: Pj,
      W: Mj,
      x: D,
      X: I,
      y: nf,
      Y: rf,
      Z: Cj,
      '%': Fj,
    }
  ;(w.x = O(r, w)), (w.X = O(n, w)), (w.c = O(t, w)), (g.x = O(r, g)), (g.X = O(n, g)), (g.c = O(t, g))
  function O(W, K) {
    return function (Y) {
      var k = [],
        pe = -1,
        ee = 0,
        ge = W.length,
        ve,
        Be,
        ht
      for (Y instanceof Date || (Y = new Date(+Y)); ++pe < ge; )
        W.charCodeAt(pe) === 37 &&
          (k.push(W.slice(ee, pe)),
          (Be = tf[(ve = W.charAt(++pe))]) != null ? (ve = W.charAt(++pe)) : (Be = ve === 'e' ? ' ' : '0'),
          (ht = K[ve]) && (ve = ht(Y, Be)),
          k.push(ve),
          (ee = pe + 1))
      return k.push(W.slice(ee, pe)), k.join('')
    }
  }
  function S(W, K) {
    return function (Y) {
      var k = Vr(1900, void 0, 1),
        pe = A(k, W, (Y += ''), 0),
        ee,
        ge
      if (pe != Y.length) return null
      if ('Q' in k) return new Date(k.Q)
      if ('s' in k) return new Date(k.s * 1e3 + ('L' in k ? k.L : 0))
      if (
        (K && !('Z' in k) && (k.Z = 0),
        'p' in k && (k.H = (k.H % 12) + k.p * 12),
        k.m === void 0 && (k.m = 'q' in k ? k.q : 0),
        'V' in k)
      ) {
        if (k.V < 1 || k.V > 53) return null
        'w' in k || (k.w = 1),
          'Z' in k
            ? ((ee = mo(Vr(k.y, 0, 1))),
              (ge = ee.getUTCDay()),
              (ee = ge > 4 || ge === 0 ? Gi.ceil(ee) : Gi(ee)),
              (ee = Da.offset(ee, (k.V - 1) * 7)),
              (k.y = ee.getUTCFullYear()),
              (k.m = ee.getUTCMonth()),
              (k.d = ee.getUTCDate() + ((k.w + 6) % 7)))
            : ((ee = go(Vr(k.y, 0, 1))),
              (ge = ee.getDay()),
              (ee = ge > 4 || ge === 0 ? Hi.ceil(ee) : Hi(ee)),
              (ee = ti.offset(ee, (k.V - 1) * 7)),
              (k.y = ee.getFullYear()),
              (k.m = ee.getMonth()),
              (k.d = ee.getDate() + ((k.w + 6) % 7)))
      } else
        ('W' in k || 'U' in k) &&
          ('w' in k || (k.w = 'u' in k ? k.u % 7 : 'W' in k ? 1 : 0),
          (ge = 'Z' in k ? mo(Vr(k.y, 0, 1)).getUTCDay() : go(Vr(k.y, 0, 1)).getDay()),
          (k.m = 0),
          (k.d = 'W' in k ? ((k.w + 6) % 7) + k.W * 7 - ((ge + 5) % 7) : k.w + k.U * 7 - ((ge + 6) % 7)))
      return 'Z' in k ? ((k.H += (k.Z / 100) | 0), (k.M += k.Z % 100), mo(k)) : go(k)
    }
  }
  function A(W, K, Y, k) {
    for (var pe = 0, ee = K.length, ge = Y.length, ve, Be; pe < ee; ) {
      if (k >= ge) return -1
      if (((ve = K.charCodeAt(pe++)), ve === 37)) {
        if (((ve = K.charAt(pe++)), (Be = m[ve in tf ? K.charAt(pe++) : ve]), !Be || (k = Be(W, Y, k)) < 0)) return -1
      } else if (ve != Y.charCodeAt(k++)) return -1
    }
    return k
  }
  function E(W, K, Y) {
    var k = s.exec(K.slice(Y))
    return k ? ((W.p = f.get(k[0].toLowerCase())), Y + k[0].length) : -1
  }
  function T(W, K, Y) {
    var k = d.exec(K.slice(Y))
    return k ? ((W.w = y.get(k[0].toLowerCase())), Y + k[0].length) : -1
  }
  function $(W, K, Y) {
    var k = l.exec(K.slice(Y))
    return k ? ((W.w = h.get(k[0].toLowerCase())), Y + k[0].length) : -1
  }
  function P(W, K, Y) {
    var k = x.exec(K.slice(Y))
    return k ? ((W.m = b.get(k[0].toLowerCase())), Y + k[0].length) : -1
  }
  function M(W, K, Y) {
    var k = v.exec(K.slice(Y))
    return k ? ((W.m = p.get(k[0].toLowerCase())), Y + k[0].length) : -1
  }
  function j(W, K, Y) {
    return A(W, t, K, Y)
  }
  function D(W, K, Y) {
    return A(W, r, K, Y)
  }
  function I(W, K, Y) {
    return A(W, n, K, Y)
  }
  function L(W) {
    return o[W.getDay()]
  }
  function B(W) {
    return a[W.getDay()]
  }
  function U(W) {
    return c[W.getMonth()]
  }
  function G(W) {
    return u[W.getMonth()]
  }
  function V(W) {
    return i[+(W.getHours() >= 12)]
  }
  function q(W) {
    return 1 + ~~(W.getMonth() / 3)
  }
  function J(W) {
    return o[W.getUTCDay()]
  }
  function $e(W) {
    return a[W.getUTCDay()]
  }
  function ke(W) {
    return c[W.getUTCMonth()]
  }
  function Dt(W) {
    return u[W.getUTCMonth()]
  }
  function Ne(W) {
    return i[+(W.getUTCHours() >= 12)]
  }
  function ft(W) {
    return 1 + ~~(W.getUTCMonth() / 3)
  }
  return {
    format: function (W) {
      var K = O((W += ''), w)
      return (
        (K.toString = function () {
          return W
        }),
        K
      )
    },
    parse: function (W) {
      var K = S((W += ''), !1)
      return (
        (K.toString = function () {
          return W
        }),
        K
      )
    },
    utcFormat: function (W) {
      var K = O((W += ''), g)
      return (
        (K.toString = function () {
          return W
        }),
        K
      )
    },
    utcParse: function (W) {
      var K = S((W += ''), !0)
      return (
        (K.toString = function () {
          return W
        }),
        K
      )
    },
  }
}
var tf = { '-': '', _: ' ', 0: '0' },
  _e = /^\s*\d+/,
  Aj = /^%/,
  _j = /[\\^$*+?|[\]().{}]/g
function te(e, t, r) {
  var n = e < 0 ? '-' : '',
    i = (n ? -e : e) + '',
    a = i.length
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i)
}
function $j(e) {
  return e.replace(_j, '\\$&')
}
function Yr(e) {
  return new RegExp('^(?:' + e.map($j).join('|') + ')', 'i')
}
function Zr(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]))
}
function Pj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 1))
  return n ? ((e.w = +n[0]), r + n[0].length) : -1
}
function Tj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 1))
  return n ? ((e.u = +n[0]), r + n[0].length) : -1
}
function Ej(e, t, r) {
  var n = _e.exec(t.slice(r, r + 2))
  return n ? ((e.U = +n[0]), r + n[0].length) : -1
}
function jj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 2))
  return n ? ((e.V = +n[0]), r + n[0].length) : -1
}
function Mj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 2))
  return n ? ((e.W = +n[0]), r + n[0].length) : -1
}
function rf(e, t, r) {
  var n = _e.exec(t.slice(r, r + 4))
  return n ? ((e.y = +n[0]), r + n[0].length) : -1
}
function nf(e, t, r) {
  var n = _e.exec(t.slice(r, r + 2))
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1
}
function Cj(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6))
  return n ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || '00'))), r + n[0].length) : -1
}
function Ij(e, t, r) {
  var n = _e.exec(t.slice(r, r + 1))
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1
}
function kj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 2))
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1
}
function af(e, t, r) {
  var n = _e.exec(t.slice(r, r + 2))
  return n ? ((e.d = +n[0]), r + n[0].length) : -1
}
function Nj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 3))
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1
}
function of(e, t, r) {
  var n = _e.exec(t.slice(r, r + 2))
  return n ? ((e.H = +n[0]), r + n[0].length) : -1
}
function Dj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 2))
  return n ? ((e.M = +n[0]), r + n[0].length) : -1
}
function Lj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 2))
  return n ? ((e.S = +n[0]), r + n[0].length) : -1
}
function Bj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 3))
  return n ? ((e.L = +n[0]), r + n[0].length) : -1
}
function Rj(e, t, r) {
  var n = _e.exec(t.slice(r, r + 6))
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1
}
function Fj(e, t, r) {
  var n = Aj.exec(t.slice(r, r + 1))
  return n ? r + n[0].length : -1
}
function Wj(e, t, r) {
  var n = _e.exec(t.slice(r))
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1
}
function zj(e, t, r) {
  var n = _e.exec(t.slice(r))
  return n ? ((e.s = +n[0]), r + n[0].length) : -1
}
function uf(e, t) {
  return te(e.getDate(), t, 2)
}
function Uj(e, t) {
  return te(e.getHours(), t, 2)
}
function qj(e, t) {
  return te(e.getHours() % 12 || 12, t, 2)
}
function Hj(e, t) {
  return te(1 + ti.count(xt(e), e), t, 3)
}
function Dp(e, t) {
  return te(e.getMilliseconds(), t, 3)
}
function Gj(e, t) {
  return Dp(e, t) + '000'
}
function Kj(e, t) {
  return te(e.getMonth() + 1, t, 2)
}
function Xj(e, t) {
  return te(e.getMinutes(), t, 2)
}
function Vj(e, t) {
  return te(e.getSeconds(), t, 2)
}
function Yj(e) {
  var t = e.getDay()
  return t === 0 ? 7 : t
}
function Zj(e, t) {
  return te(La.count(xt(e) - 1, e), t, 2)
}
function Lp(e) {
  var t = e.getDay()
  return t >= 4 || t === 0 ? Ar(e) : Ar.ceil(e)
}
function Jj(e, t) {
  return (e = Lp(e)), te(Ar.count(xt(e), e) + (xt(e).getDay() === 4), t, 2)
}
function Qj(e) {
  return e.getDay()
}
function eM(e, t) {
  return te(Hi.count(xt(e) - 1, e), t, 2)
}
function tM(e, t) {
  return te(e.getFullYear() % 100, t, 2)
}
function rM(e, t) {
  return (e = Lp(e)), te(e.getFullYear() % 100, t, 2)
}
function nM(e, t) {
  return te(e.getFullYear() % 1e4, t, 4)
}
function iM(e, t) {
  var r = e.getDay()
  return (e = r >= 4 || r === 0 ? Ar(e) : Ar.ceil(e)), te(e.getFullYear() % 1e4, t, 4)
}
function aM(e) {
  var t = e.getTimezoneOffset()
  return (t > 0 ? '-' : ((t *= -1), '+')) + te((t / 60) | 0, '0', 2) + te(t % 60, '0', 2)
}
function cf(e, t) {
  return te(e.getUTCDate(), t, 2)
}
function oM(e, t) {
  return te(e.getUTCHours(), t, 2)
}
function uM(e, t) {
  return te(e.getUTCHours() % 12 || 12, t, 2)
}
function cM(e, t) {
  return te(1 + Da.count(wt(e), e), t, 3)
}
function Bp(e, t) {
  return te(e.getUTCMilliseconds(), t, 3)
}
function sM(e, t) {
  return Bp(e, t) + '000'
}
function lM(e, t) {
  return te(e.getUTCMonth() + 1, t, 2)
}
function fM(e, t) {
  return te(e.getUTCMinutes(), t, 2)
}
function hM(e, t) {
  return te(e.getUTCSeconds(), t, 2)
}
function dM(e) {
  var t = e.getUTCDay()
  return t === 0 ? 7 : t
}
function pM(e, t) {
  return te(Ba.count(wt(e) - 1, e), t, 2)
}
function Rp(e) {
  var t = e.getUTCDay()
  return t >= 4 || t === 0 ? _r(e) : _r.ceil(e)
}
function vM(e, t) {
  return (e = Rp(e)), te(_r.count(wt(e), e) + (wt(e).getUTCDay() === 4), t, 2)
}
function yM(e) {
  return e.getUTCDay()
}
function gM(e, t) {
  return te(Gi.count(wt(e) - 1, e), t, 2)
}
function mM(e, t) {
  return te(e.getUTCFullYear() % 100, t, 2)
}
function bM(e, t) {
  return (e = Rp(e)), te(e.getUTCFullYear() % 100, t, 2)
}
function xM(e, t) {
  return te(e.getUTCFullYear() % 1e4, t, 4)
}
function wM(e, t) {
  var r = e.getUTCDay()
  return (e = r >= 4 || r === 0 ? _r(e) : _r.ceil(e)), te(e.getUTCFullYear() % 1e4, t, 4)
}
function OM() {
  return '+0000'
}
function sf() {
  return '%'
}
function lf(e) {
  return +e
}
function ff(e) {
  return Math.floor(+e / 1e3)
}
var or, Fp, Wp
SM({
  dateTime: '%x, %X',
  date: '%-m/%-d/%Y',
  time: '%-I:%M:%S %p',
  periods: ['AM', 'PM'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
})
function SM(e) {
  return (or = Sj(e)), (Fp = or.format), or.parse, (Wp = or.utcFormat), or.utcParse, or
}
function AM(e) {
  return new Date(e)
}
function _M(e) {
  return e instanceof Date ? +e : +new Date(+e)
}
function Rc(e, t, r, n, i, a, o, u, c, s) {
  var f = _c(),
    l = f.invert,
    h = f.domain,
    d = s('.%L'),
    y = s(':%S'),
    v = s('%I:%M'),
    p = s('%I %p'),
    x = s('%a %d'),
    b = s('%b %d'),
    w = s('%B'),
    g = s('%Y')
  function m(O) {
    return (
      c(O) < O ? d : u(O) < O ? y : o(O) < O ? v : a(O) < O ? p : n(O) < O ? (i(O) < O ? x : b) : r(O) < O ? w : g
    )(O)
  }
  return (
    (f.invert = function (O) {
      return new Date(l(O))
    }),
    (f.domain = function (O) {
      return arguments.length ? h(Array.from(O, _M)) : h().map(AM)
    }),
    (f.ticks = function (O) {
      var S = h()
      return e(S[0], S[S.length - 1], O ?? 10)
    }),
    (f.tickFormat = function (O, S) {
      return S == null ? m : s(S)
    }),
    (f.nice = function (O) {
      var S = h()
      return (!O || typeof O.range != 'function') && (O = t(S[0], S[S.length - 1], O ?? 10)), O ? h(Pp(S, O)) : f
    }),
    (f.copy = function () {
      return ei(f, Rc(e, t, r, n, i, a, o, u, c, s))
    }),
    f
  )
}
function $M() {
  return Ye.apply(
    Rc(wj, Oj, xt, Lc, La, ti, Nc, Ic, Ht, Fp).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
    arguments,
  )
}
function PM() {
  return Ye.apply(
    Rc(bj, xj, wt, Bc, Ba, Da, Dc, kc, Ht, Wp).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
    arguments,
  )
}
function Ra() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = Ie,
    u = !1,
    c
  function s(l) {
    return l == null || isNaN((l = +l))
      ? c
      : o(i === 0 ? 0.5 : ((l = (a(l) - r) * i), u ? Math.max(0, Math.min(1, l)) : l))
  }
  ;(s.domain = function (l) {
    return arguments.length
      ? (([e, t] = l), (r = a((e = +e))), (n = a((t = +t))), (i = r === n ? 0 : 1 / (n - r)), s)
      : [e, t]
  }),
    (s.clamp = function (l) {
      return arguments.length ? ((u = !!l), s) : u
    }),
    (s.interpolator = function (l) {
      return arguments.length ? ((o = l), s) : o
    })
  function f(l) {
    return function (h) {
      var d, y
      return arguments.length ? (([d, y] = h), (o = l(d, y)), s) : [o(0), o(1)]
    }
  }
  return (
    (s.range = f(Wr)),
    (s.rangeRound = f(Ac)),
    (s.unknown = function (l) {
      return arguments.length ? ((c = l), s) : c
    }),
    function (l) {
      return (a = l), (r = l(e)), (n = l(t)), (i = r === n ? 0 : 1 / (n - r)), s
    }
  )
}
function kt(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())
}
function zp() {
  var e = It(Ra()(Ie))
  return (
    (e.copy = function () {
      return kt(e, zp())
    }),
    At.apply(e, arguments)
  )
}
function Up() {
  var e = Tc(Ra()).domain([1, 10])
  return (
    (e.copy = function () {
      return kt(e, Up()).base(e.base())
    }),
    At.apply(e, arguments)
  )
}
function qp() {
  var e = Ec(Ra())
  return (
    (e.copy = function () {
      return kt(e, qp()).constant(e.constant())
    }),
    At.apply(e, arguments)
  )
}
function Fc() {
  var e = jc(Ra())
  return (
    (e.copy = function () {
      return kt(e, Fc()).exponent(e.exponent())
    }),
    At.apply(e, arguments)
  )
}
function TM() {
  return Fc.apply(null, arguments).exponent(0.5)
}
function Hp() {
  var e = [],
    t = Ie
  function r(n) {
    if (n != null && !isNaN((n = +n))) return t((Jn(e, n, 1) - 1) / (e.length - 1))
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice()
      e = []
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i)
      return e.sort(Et), r
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)))
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => pE(e, a / n))
    }),
    (r.copy = function () {
      return Hp(t).domain(e)
    }),
    At.apply(r, arguments)
  )
}
function Fa() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    c,
    s = Ie,
    f,
    l = !1,
    h
  function d(v) {
    return isNaN((v = +v))
      ? h
      : ((v = 0.5 + ((v = +f(v)) - a) * (n * v < n * a ? u : c)), s(l ? Math.max(0, Math.min(1, v)) : v))
  }
  ;(d.domain = function (v) {
    return arguments.length
      ? (([e, t, r] = v),
        (i = f((e = +e))),
        (a = f((t = +t))),
        (o = f((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        d)
      : [e, t, r]
  }),
    (d.clamp = function (v) {
      return arguments.length ? ((l = !!v), d) : l
    }),
    (d.interpolator = function (v) {
      return arguments.length ? ((s = v), d) : s
    })
  function y(v) {
    return function (p) {
      var x, b, w
      return arguments.length ? (([x, b, w] = p), (s = FE(v, [x, b, w])), d) : [s(0), s(0.5), s(1)]
    }
  }
  return (
    (d.range = y(Wr)),
    (d.rangeRound = y(Ac)),
    (d.unknown = function (v) {
      return arguments.length ? ((h = v), d) : h
    }),
    function (v) {
      return (
        (f = v),
        (i = v(e)),
        (a = v(t)),
        (o = v(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        d
      )
    }
  )
}
function Gp() {
  var e = It(Fa()(Ie))
  return (
    (e.copy = function () {
      return kt(e, Gp())
    }),
    At.apply(e, arguments)
  )
}
function Kp() {
  var e = Tc(Fa()).domain([0.1, 1, 10])
  return (
    (e.copy = function () {
      return kt(e, Kp()).base(e.base())
    }),
    At.apply(e, arguments)
  )
}
function Xp() {
  var e = Ec(Fa())
  return (
    (e.copy = function () {
      return kt(e, Xp()).constant(e.constant())
    }),
    At.apply(e, arguments)
  )
}
function Wc() {
  var e = jc(Fa())
  return (
    (e.copy = function () {
      return kt(e, Wc()).exponent(e.exponent())
    }),
    At.apply(e, arguments)
  )
}
function EM() {
  return Wc.apply(null, arguments).exponent(0.5)
}
const hf = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: gn,
      scaleDiverging: Gp,
      scaleDivergingLog: Kp,
      scaleDivergingPow: Wc,
      scaleDivergingSqrt: EM,
      scaleDivergingSymlog: Xp,
      scaleIdentity: $p,
      scaleImplicit: uu,
      scaleLinear: Ui,
      scaleLog: Tp,
      scaleOrdinal: wc,
      scalePoint: on,
      scalePow: Mc,
      scaleQuantile: Mp,
      scaleQuantize: Cp,
      scaleRadial: jp,
      scaleSequential: zp,
      scaleSequentialLog: Up,
      scaleSequentialPow: Fc,
      scaleSequentialQuantile: Hp,
      scaleSequentialSqrt: TM,
      scaleSequentialSymlog: qp,
      scaleSqrt: sj,
      scaleSymlog: Ep,
      scaleThreshold: Ip,
      scaleTime: $M,
      scaleUtc: PM,
      tickFormat: _p,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
)
var jM = Ir
function MM(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n],
      o = t(a)
    if (o != null && (u === void 0 ? o === o && !jM(o) : r(o, u)))
      var u = o,
        c = a
  }
  return c
}
var Vp = MM
function CM(e, t) {
  return e > t
}
var IM = CM,
  kM = Vp,
  NM = IM,
  DM = Fr
function LM(e) {
  return e && e.length ? kM(e, DM, NM) : void 0
}
var BM = LM
const Wa = le(BM)
function RM(e, t) {
  return e < t
}
var FM = RM,
  WM = Vp,
  zM = FM,
  UM = Fr
function qM(e) {
  return e && e.length ? WM(e, UM, zM) : void 0
}
var HM = qM
const za = le(HM)
var GM = ec,
  KM = Ct,
  XM = np,
  VM = Le
function YM(e, t) {
  var r = VM(e) ? GM : XM
  return r(e, KM(t))
}
var ZM = YM,
  JM = tp,
  QM = ZM
function eC(e, t) {
  return JM(QM(e, t), 1)
}
var tC = eC
const rC = le(tC)
var nC = yc
function iC(e, t) {
  return nC(e, t)
}
var aC = iC
const zc = le(aC)
var zr = 1e9,
  oC = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286',
  },
  qc,
  de = !0,
  Ve = '[DecimalError] ',
  Xt = Ve + 'Invalid argument: ',
  Uc = Ve + 'Exponent out of range: ',
  Ur = Math.floor,
  zt = Math.pow,
  uC = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  We,
  Oe = 1e7,
  he = 7,
  Yp = 9007199254740991,
  Ki = Ur(Yp / he),
  z = {}
z.absoluteValue = z.abs = function () {
  var e = new this.constructor(this)
  return e.s && (e.s = 1), e
}
z.comparedTo = z.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1
}
z.decimalPlaces = z.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * he
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--
  return r < 0 ? 0 : r
}
z.dividedBy = z.div = function (e) {
  return mt(this, new this.constructor(e))
}
z.dividedToIntegerBy = z.idiv = function (e) {
  var t = this,
    r = t.constructor
  return ce(mt(t, new r(e), 0, 1), r.precision)
}
z.equals = z.eq = function (e) {
  return !this.cmp(e)
}
z.exponent = function () {
  return ye(this)
}
z.greaterThan = z.gt = function (e) {
  return this.cmp(e) > 0
}
z.greaterThanOrEqualTo = z.gte = function (e) {
  return this.cmp(e) >= 0
}
z.isInteger = z.isint = function () {
  return this.e > this.d.length - 2
}
z.isNegative = z.isneg = function () {
  return this.s < 0
}
z.isPositive = z.ispos = function () {
  return this.s > 0
}
z.isZero = function () {
  return this.s === 0
}
z.lessThan = z.lt = function (e) {
  return this.cmp(e) < 0
}
z.lessThanOrEqualTo = z.lte = function (e) {
  return this.cmp(e) < 1
}
z.logarithm = z.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5
  if (e === void 0) e = new n(10)
  else if (((e = new n(e)), e.s < 1 || e.eq(We))) throw Error(Ve + 'NaN')
  if (r.s < 1) throw Error(Ve + (r.s ? 'NaN' : '-Infinity'))
  return r.eq(We) ? new n(0) : ((de = !1), (t = mt(On(r, a), On(e, a), a)), (de = !0), ce(t, i))
}
z.minus = z.sub = function (e) {
  var t = this
  return (e = new t.constructor(e)), t.s == e.s ? Qp(t, e) : Zp(t, ((e.s = -e.s), e))
}
z.modulo = z.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision
  if (((e = new n(e)), !e.s)) throw Error(Ve + 'NaN')
  return r.s ? ((de = !1), (t = mt(r, e, 0, 1).times(e)), (de = !0), r.minus(t)) : ce(new n(r), i)
}
z.naturalExponential = z.exp = function () {
  return Jp(this)
}
z.naturalLogarithm = z.ln = function () {
  return On(this)
}
z.negated = z.neg = function () {
  var e = new this.constructor(this)
  return (e.s = -e.s || 0), e
}
z.plus = z.add = function (e) {
  var t = this
  return (e = new t.constructor(e)), t.s == e.s ? Zp(t, e) : Qp(t, ((e.s = -e.s), e))
}
z.precision = z.sd = function (e) {
  var t,
    r,
    n,
    i = this
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Xt + e)
  if (((t = ye(i) + 1), (n = i.d.length - 1), (r = n * he + 1), (n = i.d[n]), n)) {
    for (; n % 10 == 0; n /= 10) r--
    for (n = i.d[0]; n >= 10; n /= 10) r++
  }
  return e && t > r ? t : r
}
z.squareRoot = z.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    c = u.constructor
  if (u.s < 1) {
    if (!u.s) return new c(0)
    throw Error(Ve + 'NaN')
  }
  for (
    e = ye(u),
      de = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((t = at(u.d)),
          (t.length + e) % 2 == 0 && (t += '0'),
          (i = Math.sqrt(t)),
          (e = Ur((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0 ? (t = '5e' + e) : ((t = i.toExponential()), (t = t.slice(0, t.indexOf('e') + 1) + e)),
          (n = new c(t)))
        : (n = new c(i.toString())),
      r = c.precision,
      i = o = r + 3;
    ;

  )
    if (((a = n), (n = a.plus(mt(u, a, o + 2)).times(0.5)), at(a.d).slice(0, o) === (t = at(n.d)).slice(0, o))) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == '4999')) {
        if ((ce(a, r + 1, 0), a.times(a).eq(u))) {
          n = a
          break
        }
      } else if (t != '9999') break
      o += 4
    }
  return (de = !0), ce(n, r)
}
z.times = z.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u,
    c,
    s,
    f = this,
    l = f.constructor,
    h = f.d,
    d = (e = new l(e)).d
  if (!f.s || !e.s) return new l(0)
  for (
    e.s *= f.s,
      r = f.e + e.e,
      c = h.length,
      s = d.length,
      c < s && ((a = h), (h = d), (d = a), (o = c), (c = s), (s = o)),
      a = [],
      o = c + s,
      n = o;
    n--;

  )
    a.push(0)
  for (n = s; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; ) (u = a[i] + d[n] * h[i - n - 1] + t), (a[i--] = u % Oe | 0), (t = (u / Oe) | 0)
    a[i] = (a[i] + t) % Oe | 0
  }
  for (; !a[--o]; ) a.pop()
  return t ? ++r : a.shift(), (e.d = a), (e.e = r), de ? ce(e, l.precision) : e
}
z.toDecimalPlaces = z.todp = function (e, t) {
  var r = this,
    n = r.constructor
  return (
    (r = new n(r)),
    e === void 0 ? r : (ct(e, 0, zr), t === void 0 ? (t = n.rounding) : ct(t, 0, 8), ce(r, e + ye(r) + 1, t))
  )
}
z.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor
  return (
    e === void 0
      ? (r = Jt(n, !0))
      : (ct(e, 0, zr),
        t === void 0 ? (t = i.rounding) : ct(t, 0, 8),
        (n = ce(new i(n), e + 1, t)),
        (r = Jt(n, !0, e + 1))),
    r
  )
}
z.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor
  return e === void 0
    ? Jt(i)
    : (ct(e, 0, zr),
      t === void 0 ? (t = a.rounding) : ct(t, 0, 8),
      (n = ce(new a(i), e + ye(i) + 1, t)),
      (r = Jt(n.abs(), !1, e + ye(n) + 1)),
      i.isneg() && !i.isZero() ? '-' + r : r)
}
z.toInteger = z.toint = function () {
  var e = this,
    t = e.constructor
  return ce(new t(e), ye(e) + 1, t.rounding)
}
z.toNumber = function () {
  return +this
}
z.toPower = z.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    c = u.constructor,
    s = 12,
    f = +(e = new c(e))
  if (!e.s) return new c(We)
  if (((u = new c(u)), !u.s)) {
    if (e.s < 1) throw Error(Ve + 'Infinity')
    return u
  }
  if (u.eq(We)) return u
  if (((n = c.precision), e.eq(We))) return ce(u, n)
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
    if ((r = f < 0 ? -f : f) <= Yp) {
      for (
        i = new c(We), t = Math.ceil(n / he + 4), de = !1;
        r % 2 && ((i = i.times(u)), pf(i.d, t)), (r = Ur(r / 2)), r !== 0;

      )
        (u = u.times(u)), pf(u.d, t)
      return (de = !0), e.s < 0 ? new c(We).div(i) : ce(i, n)
    }
  } else if (a < 0) throw Error(Ve + 'NaN')
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (de = !1),
    (i = e.times(On(u, n + s))),
    (de = !0),
    (i = Jp(i)),
    (i.s = a),
    i
  )
}
z.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor
  return (
    e === void 0
      ? ((r = ye(i)), (n = Jt(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (ct(e, 1, zr),
        t === void 0 ? (t = a.rounding) : ct(t, 0, 8),
        (i = ce(new a(i), e, t)),
        (r = ye(i)),
        (n = Jt(i, e <= r || r <= a.toExpNeg, e))),
    n
  )
}
z.toSignificantDigits = z.tosd = function (e, t) {
  var r = this,
    n = r.constructor
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (ct(e, 1, zr), t === void 0 ? (t = n.rounding) : ct(t, 0, 8)),
    ce(new n(r), e, t)
  )
}
z.toString =
  z.valueOf =
  z.val =
  z.toJSON =
  z[Symbol.for('nodejs.util.inspect.custom')] =
    function () {
      var e = this,
        t = ye(e),
        r = e.constructor
      return Jt(e, t <= r.toExpNeg || t >= r.toExpPos)
    }
function Zp(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c,
    s,
    f = e.constructor,
    l = f.precision
  if (!e.s || !t.s) return t.s || (t = new f(e)), de ? ce(t, l) : t
  if (((c = e.d), (s = t.d), (o = e.e), (i = t.e), (c = c.slice()), (a = o - i), a)) {
    for (
      a < 0 ? ((n = c), (a = -a), (u = s.length)) : ((n = s), (i = o), (u = c.length)),
        o = Math.ceil(l / he),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;

    )
      n.push(0)
    n.reverse()
  }
  for (u = c.length, a = s.length, u - a < 0 && ((a = u), (n = s), (s = c), (c = n)), r = 0; a; )
    (r = ((c[--a] = c[a] + s[a] + r) / Oe) | 0), (c[a] %= Oe)
  for (r && (c.unshift(r), ++i), u = c.length; c[--u] == 0; ) c.pop()
  return (t.d = c), (t.e = i), de ? ce(t, l) : t
}
function ct(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Xt + e)
}
function at(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = '',
    o = e[0]
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) (n = e[t] + ''), (r = he - n.length), r && (a += _t(r)), (a += n)
    ;(o = e[t]), (n = o + ''), (r = he - n.length), r && (a += _t(r))
  } else if (o === 0) return '0'
  for (; o % 10 === 0; ) o /= 10
  return a + o
}
var mt = (function () {
  function e(n, i) {
    var a,
      o = 0,
      u = n.length
    for (n = n.slice(); u--; ) (a = n[u] * i + o), (n[u] = a % Oe | 0), (o = (a / Oe) | 0)
    return o && n.unshift(o), n
  }
  function t(n, i, a, o) {
    var u, c
    if (a != o) c = a > o ? 1 : -1
    else
      for (u = c = 0; u < a; u++)
        if (n[u] != i[u]) {
          c = n[u] > i[u] ? 1 : -1
          break
        }
    return c
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) (n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * Oe + n[a] - i[a])
    for (; !n[0] && n.length > 1; ) n.shift()
  }
  return function (n, i, a, o) {
    var u,
      c,
      s,
      f,
      l,
      h,
      d,
      y,
      v,
      p,
      x,
      b,
      w,
      g,
      m,
      O,
      S,
      A,
      E = n.constructor,
      T = n.s == i.s ? 1 : -1,
      $ = n.d,
      P = i.d
    if (!n.s) return new E(n)
    if (!i.s) throw Error(Ve + 'Division by zero')
    for (c = n.e - i.e, S = P.length, m = $.length, d = new E(T), y = d.d = [], s = 0; P[s] == ($[s] || 0); ) ++s
    if (
      (P[s] > ($[s] || 0) && --c,
      a == null ? (b = a = E.precision) : o ? (b = a + (ye(n) - ye(i)) + 1) : (b = a),
      b < 0)
    )
      return new E(0)
    if (((b = (b / he + 2) | 0), (s = 0), S == 1))
      for (f = 0, P = P[0], b++; (s < m || f) && b--; s++)
        (w = f * Oe + ($[s] || 0)), (y[s] = (w / P) | 0), (f = w % P | 0)
    else {
      for (
        f = (Oe / (P[0] + 1)) | 0,
          f > 1 && ((P = e(P, f)), ($ = e($, f)), (S = P.length), (m = $.length)),
          g = S,
          v = $.slice(0, S),
          p = v.length;
        p < S;

      )
        v[p++] = 0
      ;(A = P.slice()), A.unshift(0), (O = P[0]), P[1] >= Oe / 2 && ++O
      do
        (f = 0),
          (u = t(P, v, S, p)),
          u < 0
            ? ((x = v[0]),
              S != p && (x = x * Oe + (v[1] || 0)),
              (f = (x / O) | 0),
              f > 1
                ? (f >= Oe && (f = Oe - 1),
                  (l = e(P, f)),
                  (h = l.length),
                  (p = v.length),
                  (u = t(l, v, h, p)),
                  u == 1 && (f--, r(l, S < h ? A : P, h)))
                : (f == 0 && (u = f = 1), (l = P.slice())),
              (h = l.length),
              h < p && l.unshift(0),
              r(v, l, p),
              u == -1 && ((p = v.length), (u = t(P, v, S, p)), u < 1 && (f++, r(v, S < p ? A : P, p))),
              (p = v.length))
            : u === 0 && (f++, (v = [0])),
          (y[s++] = f),
          u && v[0] ? (v[p++] = $[g] || 0) : ((v = [$[g]]), (p = 1))
      while ((g++ < m || v[0] !== void 0) && b--)
    }
    return y[0] || y.shift(), (d.e = c), ce(d, o ? a + ye(d) + 1 : a)
  }
})()
function Jp(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c = 0,
    s = 0,
    f = e.constructor,
    l = f.precision
  if (ye(e) > 16) throw Error(Uc + ye(e))
  if (!e.s) return new f(We)
  for (t == null ? ((de = !1), (u = l)) : (u = t), o = new f(0.03125); e.abs().gte(0.1); ) (e = e.times(o)), (s += 5)
  for (n = ((Math.log(zt(2, s)) / Math.LN10) * 2 + 5) | 0, u += n, r = i = a = new f(We), f.precision = u; ; ) {
    if (
      ((i = ce(i.times(e), u)),
      (r = r.times(++c)),
      (o = a.plus(mt(i, r, u))),
      at(o.d).slice(0, u) === at(a.d).slice(0, u))
    ) {
      for (; s--; ) a = ce(a.times(a), u)
      return (f.precision = l), t == null ? ((de = !0), ce(a, l)) : a
    }
    a = o
  }
}
function ye(e) {
  for (var t = e.e * he, r = e.d[0]; r >= 10; r /= 10) t++
  return t
}
function bo(e, t, r) {
  if (t > e.LN10.sd()) throw ((de = !0), r && (e.precision = r), Error(Ve + 'LN10 precision limit exceeded'))
  return ce(new e(e.LN10), t)
}
function _t(e) {
  for (var t = ''; e--; ) t += '0'
  return t
}
function On(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c,
    s,
    f,
    l = 1,
    h = 10,
    d = e,
    y = d.d,
    v = d.constructor,
    p = v.precision
  if (d.s < 1) throw Error(Ve + (d.s ? 'NaN' : '-Infinity'))
  if (d.eq(We)) return new v(0)
  if ((t == null ? ((de = !1), (s = p)) : (s = t), d.eq(10))) return t == null && (de = !0), bo(v, s)
  if (((s += h), (v.precision = s), (r = at(y)), (n = r.charAt(0)), (a = ye(d)), Math.abs(a) < 15e14)) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); ) (d = d.times(e)), (r = at(d.d)), (n = r.charAt(0)), l++
    ;(a = ye(d)), n > 1 ? ((d = new v('0.' + r)), a++) : (d = new v(n + '.' + r.slice(1)))
  } else
    return (
      (c = bo(v, s + 2, p).times(a + '')),
      (d = On(new v(n + '.' + r.slice(1)), s - h).plus(c)),
      (v.precision = p),
      t == null ? ((de = !0), ce(d, p)) : d
    )
  for (u = o = d = mt(d.minus(We), d.plus(We), s), f = ce(d.times(d), s), i = 3; ; ) {
    if (((o = ce(o.times(f), s)), (c = u.plus(mt(o, new v(i), s))), at(c.d).slice(0, s) === at(u.d).slice(0, s)))
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus(bo(v, s + 2, p).times(a + ''))),
        (u = mt(u, new v(l), s)),
        (v.precision = p),
        t == null ? ((de = !0), ce(u, p)) : u
      )
    ;(u = c), (i += 2)
  }
}
function df(e, t) {
  var r, n, i
  for (
    (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;

  )
    ++n
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i
  if (((t = t.slice(n, i)), t)) {
    if (((i -= n), (r = r - n - 1), (e.e = Ur(r / he)), (e.d = []), (n = (r + 1) % he), r < 0 && (n += he), n < i)) {
      for (n && e.d.push(+t.slice(0, n)), i -= he; n < i; ) e.d.push(+t.slice(n, (n += he)))
      ;(t = t.slice(n)), (n = he - t.length)
    } else n -= i
    for (; n--; ) t += '0'
    if ((e.d.push(+t), de && (e.e > Ki || e.e < -Ki))) throw Error(Uc + r)
  } else (e.s = 0), (e.e = 0), (e.d = [0])
  return e
}
function ce(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    c,
    s,
    f,
    l = e.d
  for (o = 1, a = l[0]; a >= 10; a /= 10) o++
  if (((n = t - o), n < 0)) (n += he), (i = t), (s = l[(f = 0)])
  else {
    if (((f = Math.ceil((n + 1) / he)), (a = l.length), f >= a)) return e
    for (s = a = l[f], o = 1; a >= 10; a /= 10) o++
    ;(n %= he), (i = n - he + o)
  }
  if (
    (r !== void 0 &&
      ((a = zt(10, o - i - 1)),
      (u = (s / a) % 10 | 0),
      (c = t < 0 || l[f + 1] !== void 0 || s % a),
      (c =
        r < 4
          ? (u || c) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                c ||
                (r == 6 && (n > 0 ? (i > 0 ? s / zt(10, o - i) : 0) : l[f - 1]) % 10 & 1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !l[0])
  )
    return (
      c
        ? ((a = ye(e)),
          (l.length = 1),
          (t = t - a - 1),
          (l[0] = zt(10, (he - (t % he)) % he)),
          (e.e = Ur(-t / he) || 0))
        : ((l.length = 1), (l[0] = e.e = e.s = 0)),
      e
    )
  if (
    (n == 0
      ? ((l.length = f), (a = 1), f--)
      : ((l.length = f + 1), (a = zt(10, he - n)), (l[f] = i > 0 ? ((s / zt(10, o - i)) % zt(10, i) | 0) * a : 0)),
    c)
  )
    for (;;)
      if (f == 0) {
        ;(l[0] += a) == Oe && ((l[0] = 1), ++e.e)
        break
      } else {
        if (((l[f] += a), l[f] != Oe)) break
        ;(l[f--] = 0), (a = 1)
      }
  for (n = l.length; l[--n] === 0; ) l.pop()
  if (de && (e.e > Ki || e.e < -Ki)) throw Error(Uc + ye(e))
  return e
}
function Qp(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c,
    s,
    f,
    l,
    h = e.constructor,
    d = h.precision
  if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new h(e)), de ? ce(t, d) : t
  if (((c = e.d), (l = t.d), (n = t.e), (s = e.e), (c = c.slice()), (o = s - n), o)) {
    for (
      f = o < 0,
        f ? ((r = c), (o = -o), (u = l.length)) : ((r = l), (n = s), (u = c.length)),
        i = Math.max(Math.ceil(d / he), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;

    )
      r.push(0)
    r.reverse()
  } else {
    for (i = c.length, u = l.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (c[i] != l[i]) {
        f = c[i] < l[i]
        break
      }
    o = 0
  }
  for (f && ((r = c), (c = l), (l = r), (t.s = -t.s)), u = c.length, i = l.length - u; i > 0; --i) c[u++] = 0
  for (i = l.length; i > o; ) {
    if (c[--i] < l[i]) {
      for (a = i; a && c[--a] === 0; ) c[a] = Oe - 1
      --c[a], (c[i] += Oe)
    }
    c[i] -= l[i]
  }
  for (; c[--u] === 0; ) c.pop()
  for (; c[0] === 0; c.shift()) --n
  return c[0] ? ((t.d = c), (t.e = n), de ? ce(t, d) : t) : new h(0)
}
function Jt(e, t, r) {
  var n,
    i = ye(e),
    a = at(e.d),
    o = a.length
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + '.' + a.slice(1) + _t(n))
          : o > 1 && (a = a.charAt(0) + '.' + a.slice(1)),
        (a = a + (i < 0 ? 'e' : 'e+') + i))
      : i < 0
        ? ((a = '0.' + _t(-i - 1) + a), r && (n = r - o) > 0 && (a += _t(n)))
        : i >= o
          ? ((a += _t(i + 1 - o)), r && (n = r - i - 1) > 0 && (a = a + '.' + _t(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + '.' + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += '.'), (a += _t(n)))),
    e.s < 0 ? '-' + a : a
  )
}
function pf(e, t) {
  if (e.length > t) return (e.length = t), !0
}
function ev(e) {
  var t, r, n
  function i(a) {
    var o = this
    if (!(o instanceof i)) return new i(a)
    if (((o.constructor = i), a instanceof i)) {
      ;(o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a)
      return
    }
    if (typeof a == 'number') {
      if (a * 0 !== 0) throw Error(Xt + a)
      if (a > 0) o.s = 1
      else if (a < 0) (a = -a), (o.s = -1)
      else {
        ;(o.s = 0), (o.e = 0), (o.d = [0])
        return
      }
      if (a === ~~a && a < 1e7) {
        ;(o.e = 0), (o.d = [a])
        return
      }
      return df(o, a.toString())
    } else if (typeof a != 'string') throw Error(Xt + a)
    if ((a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1), uC.test(a))) df(o, a)
    else throw Error(Xt + a)
  }
  if (
    ((i.prototype = z),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = ev),
    (i.config = i.set = cC),
    e === void 0 && (e = {}),
    e)
  )
    for (n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'], t = 0; t < n.length; )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r])
  return i.config(e), i
}
function cC(e) {
  if (!e || typeof e != 'object') throw Error(Ve + 'Object expected')
  var t,
    r,
    n,
    i = ['precision', 1, zr, 'rounding', 0, 8, 'toExpNeg', -1 / 0, 0, 'toExpPos', 0, 1 / 0]
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (Ur(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n
      else throw Error(Xt + r + ': ' + n)
  if ((n = e[(r = 'LN10')]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n)
    else throw Error(Xt + r + ': ' + n)
  return this
}
var qc = ev(oC)
We = new qc(1)
const ue = qc
function sC(e) {
  return dC(e) || hC(e) || fC(e) || lC()
}
function lC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function fC(e, t) {
  if (e) {
    if (typeof e == 'string') return fu(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fu(e, t)
  }
}
function hC(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e)
}
function dC(e) {
  if (Array.isArray(e)) return fu(e)
}
function fu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
var pC = function (t) {
    return t
  },
  tv = { '@@functional/placeholder': !0 },
  rv = function (t) {
    return t === tv
  },
  vf = function (t) {
    return function r() {
      return arguments.length === 0 || (arguments.length === 1 && rv(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments)
    }
  },
  vC = function e(t, r) {
    return t === 1
      ? r
      : vf(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
          var o = i.filter(function (u) {
            return u !== tv
          }).length
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                vf(function () {
                  for (var u = arguments.length, c = new Array(u), s = 0; s < u; s++) c[s] = arguments[s]
                  var f = i.map(function (l) {
                    return rv(l) ? c.shift() : l
                  })
                  return r.apply(void 0, sC(f).concat(c))
                }),
              )
        })
  },
  Ua = function (t) {
    return vC(t.length, t)
  },
  hu = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i
    return n
  },
  yC = Ua(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r]
          })
          .map(e)
  }),
  gC = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
    if (!r.length) return pC
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1)
    return function () {
      return o.reduce(
        function (u, c) {
          return c(u)
        },
        a.apply(void 0, arguments),
      )
    }
  },
  du = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split('').reverse.join('')
  },
  nv = function (t) {
    var r = null,
      n = null
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
      return (
        (r &&
          a.every(function (u, c) {
            return u === r[c]
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      )
    }
  }
function mC(e) {
  var t
  return e === 0 ? (t = 1) : (t = Math.floor(new ue(e).abs().log(10).toNumber()) + 1), t
}
function bC(e, t, r) {
  for (var n = new ue(e), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), (n = n.add(r)), i++
  return a
}
var xC = Ua(function (e, t, r) {
    var n = +e,
      i = +t
    return n + r * (i - n)
  }),
  wC = Ua(function (e, t, r) {
    var n = t - +e
    return (n = n || 1 / 0), (r - e) / n
  }),
  OC = Ua(function (e, t, r) {
    var n = t - +e
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n))
  })
const qa = {
  rangeStep: bC,
  getDigitCount: mC,
  interpolateNumber: xC,
  uninterpolateNumber: wC,
  uninterpolateTruncation: OC,
}
function pu(e) {
  return _C(e) || AC(e) || iv(e) || SC()
}
function SC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function AC(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e)
}
function _C(e) {
  if (Array.isArray(e)) return vu(e)
}
function Sn(e, t) {
  return TC(e) || PC(e, t) || iv(e, t) || $C()
}
function $C() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function iv(e, t) {
  if (e) {
    if (typeof e == 'string') return vu(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vu(e, t)
  }
}
function vu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function PC(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (c) {
      ;(i = !0), (a = c)
    } finally {
      try {
        !n && o.return != null && o.return()
      } finally {
        if (i) throw a
      }
    }
    return r
  }
}
function TC(e) {
  if (Array.isArray(e)) return e
}
function av(e) {
  var t = Sn(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n
  return r > n && ((i = n), (a = r)), [i, a]
}
function ov(e, t, r) {
  if (e.lte(0)) return new ue(0)
  var n = qa.getDigitCount(e.toNumber()),
    i = new ue(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new ue(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    c = u.mul(i)
  return t ? c : new ue(Math.ceil(c))
}
function EC(e, t, r) {
  var n = 1,
    i = new ue(e)
  if (!i.isint() && r) {
    var a = Math.abs(e)
    a < 1
      ? ((n = new ue(10).pow(qa.getDigitCount(e) - 1)), (i = new ue(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new ue(Math.floor(e)))
  } else e === 0 ? (i = new ue(Math.floor((t - 1) / 2))) : r || (i = new ue(Math.floor(e)))
  var o = Math.floor((t - 1) / 2),
    u = gC(
      yC(function (c) {
        return i.add(new ue(c - o).mul(n)).toNumber()
      }),
      hu,
    )
  return u(0, t)
}
function uv(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0
  if (!Number.isFinite((t - e) / (r - 1))) return { step: new ue(0), tickMin: new ue(0), tickMax: new ue(0) }
  var a = ov(new ue(t).sub(e).div(r - 1), n, i),
    o
  e <= 0 && t >= 0 ? (o = new ue(0)) : ((o = new ue(e).add(t).div(2)), (o = o.sub(new ue(o).mod(a))))
  var u = Math.ceil(o.sub(e).div(a).toNumber()),
    c = Math.ceil(new ue(t).sub(o).div(a).toNumber()),
    s = u + c + 1
  return s > r
    ? uv(e, t, r, n, i + 1)
    : (s < r && ((c = t > 0 ? c + (r - s) : c), (u = t > 0 ? u : u + (r - s))),
      { step: a, tickMin: o.sub(new ue(u).mul(a)), tickMax: o.add(new ue(c).mul(a)) })
}
function jC(e) {
  var t = Sn(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = av([r, n]),
    c = Sn(u, 2),
    s = c[0],
    f = c[1]
  if (s === -1 / 0 || f === 1 / 0) {
    var l =
      f === 1 / 0
        ? [s].concat(
            pu(
              hu(0, i - 1).map(function () {
                return 1 / 0
              }),
            ),
          )
        : [].concat(
            pu(
              hu(0, i - 1).map(function () {
                return -1 / 0
              }),
            ),
            [f],
          )
    return r > n ? du(l) : l
  }
  if (s === f) return EC(s, i, a)
  var h = uv(s, f, o, a),
    d = h.step,
    y = h.tickMin,
    v = h.tickMax,
    p = qa.rangeStep(y, v.add(new ue(0.1).mul(d)), d)
  return r > n ? du(p) : p
}
function MC(e, t) {
  var r = Sn(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = av([n, i]),
    u = Sn(o, 2),
    c = u[0],
    s = u[1]
  if (c === -1 / 0 || s === 1 / 0) return [n, i]
  if (c === s) return [c]
  var f = Math.max(t, 2),
    l = ov(new ue(s).sub(c).div(f - 1), a, 0),
    h = [].concat(pu(qa.rangeStep(new ue(c), new ue(s).sub(new ue(0.99).mul(l)), l)), [s])
  return n > i ? du(h) : h
}
var CC = nv(jC),
  IC = nv(MC),
  kC = ['offset', 'layout', 'width', 'dataKey', 'data', 'dataPointFormatter', 'xAxis', 'yAxis']
function Xi() {
  return (
    (Xi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Xi.apply(this, arguments)
  )
}
function NC(e, t) {
  return RC(e) || BC(e, t) || LC(e, t) || DC()
}
function DC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function LC(e, t) {
  if (e) {
    if (typeof e == 'string') return yf(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yf(e, t)
  }
}
function yf(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function BC(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function RC(e) {
  if (Array.isArray(e)) return e
}
function FC(e, t) {
  if (e == null) return {}
  var r = WC(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function WC(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function Ha(e) {
  var t = e.offset,
    r = e.layout,
    n = e.width,
    i = e.dataKey,
    a = e.data,
    o = e.dataPointFormatter,
    u = e.xAxis,
    c = e.yAxis,
    s = FC(e, kC),
    f = re(s, !1)
  e.direction === 'x' && u.type !== 'number' && Yt(!1)
  var l = a.map(function (h) {
    var d = o(h, i),
      y = d.x,
      v = d.y,
      p = d.value,
      x = d.errorVal
    if (!x) return null
    var b = [],
      w,
      g
    if (Array.isArray(x)) {
      var m = NC(x, 2)
      ;(w = m[0]), (g = m[1])
    } else w = g = x
    if (r === 'vertical') {
      var O = u.scale,
        S = v + t,
        A = S + n,
        E = S - n,
        T = O(p - w),
        $ = O(p + g)
      b.push({ x1: $, y1: A, x2: $, y2: E }),
        b.push({ x1: T, y1: S, x2: $, y2: S }),
        b.push({ x1: T, y1: A, x2: T, y2: E })
    } else if (r === 'horizontal') {
      var P = c.scale,
        M = y + t,
        j = M - n,
        D = M + n,
        I = P(p - w),
        L = P(p + g)
      b.push({ x1: j, y1: L, x2: D, y2: L }),
        b.push({ x1: M, y1: I, x2: M, y2: L }),
        b.push({ x1: j, y1: I, x2: D, y2: I })
    }
    return _.createElement(
      Se,
      Xi(
        {
          className: 'recharts-errorBar',
          key: 'bar-'.concat(
            b.map(function (B) {
              return ''.concat(B.x1, '-').concat(B.x2, '-').concat(B.y1, '-').concat(B.y2)
            }),
          ),
        },
        f,
      ),
      b.map(function (B) {
        return _.createElement(
          'line',
          Xi({}, B, { key: 'line-'.concat(B.x1, '-').concat(B.x2, '-').concat(B.y1, '-').concat(B.y2) }),
        )
      }),
    )
  })
  return _.createElement(Se, { className: 'recharts-errorBars' }, l)
}
Ha.defaultProps = { stroke: 'black', strokeWidth: 1.5, width: 5, offset: 0, layout: 'horizontal' }
Ha.displayName = 'ErrorBar'
function An(e) {
  '@babel/helpers - typeof'
  return (
    (An =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    An(e)
  )
}
function gf(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function xo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? gf(Object(r), !0).forEach(function (n) {
          zC(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function zC(e, t, r) {
  return (
    (t = UC(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function UC(e) {
  var t = qC(e, 'string')
  return An(t) == 'symbol' ? t : String(t)
}
function qC(e, t) {
  if (An(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (An(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var cv = function (t) {
  var r = t.children,
    n = t.formattedGraphicalItems,
    i = t.legendWidth,
    a = t.legendContent,
    o = Fe(r, xr)
  if (!o) return null
  var u
  return (
    o.props && o.props.payload
      ? (u = o.props && o.props.payload)
      : a === 'children'
        ? (u = (n || []).reduce(function (c, s) {
            var f = s.item,
              l = s.props,
              h = l.sectors || l.data || []
            return c.concat(
              h.map(function (d) {
                return { type: o.props.iconType || f.props.legendType, value: d.name, color: d.fill, payload: d }
              }),
            )
          }, []))
        : (u = (n || []).map(function (c) {
            var s = c.item,
              f = s.props,
              l = f.dataKey,
              h = f.name,
              d = f.legendType,
              y = f.hide
            return {
              inactive: y,
              dataKey: l,
              type: o.props.iconType || d || 'square',
              color: Hc(s),
              value: h || l,
              payload: s.props,
            }
          })),
    xo(xo(xo({}, o.props), xr.getWithHeight(o, i)), {}, { payload: u, item: o })
  )
}
function _n(e) {
  '@babel/helpers - typeof'
  return (
    (_n =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    _n(e)
  )
}
function mf(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? mf(Object(r), !0).forEach(function (n) {
          yr(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function yr(e, t, r) {
  return (
    (t = HC(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function HC(e) {
  var t = GC(e, 'string')
  return _n(t) == 'symbol' ? t : String(t)
}
function GC(e, t) {
  if (_n(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (_n(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function bf(e) {
  return YC(e) || VC(e) || XC(e) || KC()
}
function KC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function XC(e, t) {
  if (e) {
    if (typeof e == 'string') return yu(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yu(e, t)
  }
}
function VC(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function YC(e) {
  if (Array.isArray(e)) return yu(e)
}
function yu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function st(e, t, r) {
  return ie(e) || ie(t) ? r : be(t) ? Xe(e, t, r) : Z(t) ? t(e) : r
}
function un(e, t, r, n) {
  var i = rC(e, function (u) {
    return st(u, t)
  })
  if (r === 'number') {
    var a = i.filter(function (u) {
      return F(u) || parseFloat(u)
    })
    return a.length ? [za(a), Wa(a)] : [1 / 0, -1 / 0]
  }
  var o = n
    ? i.filter(function (u) {
        return !ie(u)
      })
    : i
  return o.map(function (u) {
    return be(u) || u instanceof Date ? u : ''
  })
}
var ZC = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0
    if (u <= 1) return 0
    if (a && a.axisType === 'angleAxis' && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
      for (var c = a.range, s = 0; s < u; s++) {
        var f = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate,
          l = i[s].coordinate,
          h = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate,
          d = void 0
        if (et(l - f) !== et(h - l)) {
          var y = []
          if (et(h - l) === et(c[1] - c[0])) {
            d = h
            var v = l + c[1] - c[0]
            ;(y[0] = Math.min(v, (v + f) / 2)), (y[1] = Math.max(v, (v + f) / 2))
          } else {
            d = f
            var p = h + c[1] - c[0]
            ;(y[0] = Math.min(l, (p + l) / 2)), (y[1] = Math.max(l, (p + l) / 2))
          }
          var x = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)]
          if ((t > x[0] && t <= x[1]) || (t >= y[0] && t <= y[1])) {
            o = i[s].index
            break
          }
        } else {
          var b = Math.min(f, h),
            w = Math.max(f, h)
          if (t > (b + l) / 2 && t <= (w + l) / 2) {
            o = i[s].index
            break
          }
        }
      }
    else
      for (var g = 0; g < u; g++)
        if (
          (g === 0 && t <= (n[g].coordinate + n[g + 1].coordinate) / 2) ||
          (g > 0 &&
            g < u - 1 &&
            t > (n[g].coordinate + n[g - 1].coordinate) / 2 &&
            t <= (n[g].coordinate + n[g + 1].coordinate) / 2) ||
          (g === u - 1 && t > (n[g].coordinate + n[g - 1].coordinate) / 2)
        ) {
          o = n[g].index
          break
        }
    return o
  },
  Hc = function (t) {
    var r = t,
      n = r.type.displayName,
      i = t.props,
      a = i.stroke,
      o = i.fill,
      u
    switch (n) {
      case 'Line':
        u = a
        break
      case 'Area':
      case 'Radar':
        u = a && a !== 'none' ? a : o
        break
      default:
        u = o
        break
    }
    return u
  },
  JC = function (t) {
    var r = t.barSize,
      n = t.totalSize,
      i = t.stackGroups,
      a = i === void 0 ? {} : i
    if (!a) return {}
    for (var o = {}, u = Object.keys(a), c = 0, s = u.length; c < s; c++)
      for (var f = a[u[c]].stackGroups, l = Object.keys(f), h = 0, d = l.length; h < d; h++) {
        var y = f[l[h]],
          v = y.items,
          p = y.cateAxisId,
          x = v.filter(function (m) {
            return yt(m.type).indexOf('Bar') >= 0
          })
        if (x && x.length) {
          var b = x[0].props.barSize,
            w = x[0].props[p]
          o[w] || (o[w] = [])
          var g = ie(b) ? r : b
          o[w].push({ item: x[0], stackList: x.slice(1), barSize: ie(g) ? void 0 : Zt(g, n, 0) })
        }
      }
    return o
  },
  QC = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      u = t.maxBarSize,
      c = o.length
    if (c < 1) return null
    var s = Zt(r, i, 0, !0),
      f,
      l = []
    if (o[0].barSize === +o[0].barSize) {
      var h = !1,
        d = i / c,
        y = o.reduce(function (g, m) {
          return g + m.barSize || 0
        }, 0)
      ;(y += (c - 1) * s),
        y >= i && ((y -= (c - 1) * s), (s = 0)),
        y >= i && d > 0 && ((h = !0), (d *= 0.9), (y = c * d))
      var v = ((i - y) / 2) >> 0,
        p = { offset: v - s, size: 0 }
      f = o.reduce(function (g, m) {
        var O = { item: m.item, position: { offset: p.offset + p.size + s, size: h ? d : m.barSize } },
          S = [].concat(bf(g), [O])
        return (
          (p = S[S.length - 1].position),
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (A) {
              S.push({ item: A, position: p })
            }),
          S
        )
      }, l)
    } else {
      var x = Zt(n, i, 0, !0)
      i - 2 * x - (c - 1) * s <= 0 && (s = 0)
      var b = (i - 2 * x - (c - 1) * s) / c
      b > 1 && (b >>= 0)
      var w = u === +u ? Math.min(b, u) : b
      f = o.reduce(function (g, m, O) {
        var S = [].concat(bf(g), [{ item: m.item, position: { offset: x + (b + s) * O + (b - w) / 2, size: w } }])
        return (
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (A) {
              S.push({ item: A, position: S[S.length - 1].position })
            }),
          S
        )
      }, l)
    }
    return f
  },
  eI = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      c = o - (u.left || 0) - (u.right || 0),
      s = cv({ children: a, legendWidth: c })
    if (s) {
      var f = i || {},
        l = f.width,
        h = f.height,
        d = s.align,
        y = s.verticalAlign,
        v = s.layout
      if ((v === 'vertical' || (v === 'horizontal' && y === 'middle')) && d !== 'center' && F(t[d]))
        return Ge(Ge({}, t), {}, yr({}, d, t[d] + (l || 0)))
      if ((v === 'horizontal' || (v === 'vertical' && d === 'center')) && y !== 'middle' && F(t[y]))
        return Ge(Ge({}, t), {}, yr({}, y, t[y] + (h || 0)))
    }
    return t
  },
  tI = function (t, r, n) {
    return ie(r)
      ? !0
      : t === 'horizontal'
        ? r === 'yAxis'
        : t === 'vertical' || n === 'x'
          ? r === 'xAxis'
          : n === 'y'
            ? r === 'yAxis'
            : !0
  },
  sv = function (t, r, n, i, a) {
    var o = r.props.children,
      u = tt(o, Ha).filter(function (s) {
        return tI(i, a, s.props.direction)
      })
    if (u && u.length) {
      var c = u.map(function (s) {
        return s.props.dataKey
      })
      return t.reduce(
        function (s, f) {
          var l = st(f, n)
          if (ie(l)) return s
          var h = Array.isArray(l) ? [za(l), Wa(l)] : [l, l],
            d = c.reduce(
              function (y, v) {
                var p = st(f, v, 0),
                  x = h[0] - Math.abs(Array.isArray(p) ? p[0] : p),
                  b = h[1] + Math.abs(Array.isArray(p) ? p[1] : p)
                return [Math.min(x, y[0]), Math.max(b, y[1])]
              },
              [1 / 0, -1 / 0],
            )
          return [Math.min(d[0], s[0]), Math.max(d[1], s[1])]
        },
        [1 / 0, -1 / 0],
      )
    }
    return null
  },
  rI = function (t, r, n, i, a) {
    var o = r
      .map(function (u) {
        return sv(t, u, n, a, i)
      })
      .filter(function (u) {
        return !ie(u)
      })
    return o && o.length
      ? o.reduce(
          function (u, c) {
            return [Math.min(u[0], c[0]), Math.max(u[1], c[1])]
          },
          [1 / 0, -1 / 0],
        )
      : null
  },
  lv = function (t, r, n, i, a) {
    var o = r.map(function (c) {
      var s = c.props.dataKey
      return (n === 'number' && s && sv(t, c, s, i)) || un(t, s, n, a)
    })
    if (n === 'number')
      return o.reduce(
        function (c, s) {
          return [Math.min(c[0], s[0]), Math.max(c[1], s[1])]
        },
        [1 / 0, -1 / 0],
      )
    var u = {}
    return o.reduce(function (c, s) {
      for (var f = 0, l = s.length; f < l; f++) u[s[f]] || ((u[s[f]] = !0), c.push(s[f]))
      return c
    }, [])
  },
  fv = function (t, r) {
    return (
      (t === 'horizontal' && r === 'xAxis') ||
      (t === 'vertical' && r === 'yAxis') ||
      (t === 'centric' && r === 'angleAxis') ||
      (t === 'radial' && r === 'radiusAxis')
    )
  },
  hv = function (t, r, n, i) {
    if (i)
      return t.map(function (c) {
        return c.coordinate
      })
    var a,
      o,
      u = t.map(function (c) {
        return c.coordinate === r && (a = !0), c.coordinate === n && (o = !0), c.coordinate
      })
    return a || u.push(r), o || u.push(n), u
  },
  vt = function (t, r, n) {
    if (!t) return null
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      u = t.range,
      c = t.realScaleType === 'scaleBand' ? i.bandwidth() / 2 : 2,
      s = (r || n) && o === 'category' && i.bandwidth ? i.bandwidth() / c : 0
    if (
      ((s = t.axisType === 'angleAxis' && (u == null ? void 0 : u.length) >= 2 ? et(u[0] - u[1]) * 2 * s : s),
      r && (t.ticks || t.niceTicks))
    ) {
      var f = (t.ticks || t.niceTicks).map(function (l) {
        var h = a ? a.indexOf(l) : l
        return { coordinate: i(h) + s, value: l, offset: s }
      })
      return f.filter(function (l) {
        return !Yn(l.coordinate)
      })
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (l, h) {
          return { coordinate: i(l) + s, value: l, index: h, offset: s }
        })
      : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (l) {
            return { coordinate: i(l) + s, value: l, offset: s }
          })
        : i.domain().map(function (l, h) {
            return { coordinate: i(l) + s, value: a ? a[l] : l, index: h, offset: s }
          })
  },
  wo = new WeakMap(),
  vi = function (t, r) {
    if (typeof r != 'function') return t
    wo.has(t) || wo.set(t, new WeakMap())
    var n = wo.get(t)
    if (n.has(r)) return n.get(r)
    var i = function () {
      t.apply(void 0, arguments), r.apply(void 0, arguments)
    }
    return n.set(r, i), i
  },
  nI = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      u = t.axisType
    if (i === 'auto')
      return o === 'radial' && u === 'radiusAxis'
        ? { scale: gn(), realScaleType: 'band' }
        : o === 'radial' && u === 'angleAxis'
          ? { scale: Ui(), realScaleType: 'linear' }
          : a === 'category' &&
              r &&
              (r.indexOf('LineChart') >= 0 || r.indexOf('AreaChart') >= 0 || (r.indexOf('ComposedChart') >= 0 && !n))
            ? { scale: on(), realScaleType: 'point' }
            : a === 'category'
              ? { scale: gn(), realScaleType: 'band' }
              : { scale: Ui(), realScaleType: 'linear' }
    if (Vn(i)) {
      var c = 'scale'.concat(Ta(i))
      return { scale: (hf[c] || on)(), realScaleType: hf[c] ? c : 'point' }
    }
    return Z(i) ? { scale: i } : { scale: on(), realScaleType: 'point' }
  },
  xf = 1e-4,
  iI = function (t) {
    var r = t.domain()
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - xf,
        o = Math.max(i[0], i[1]) + xf,
        u = t(r[0]),
        c = t(r[n - 1])
      ;(u < a || u > o || c < a || c > o) && t.domain([r[0], r[n - 1]])
    }
  },
  aI = function (t, r) {
    if (!t) return null
    for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position
    return null
  },
  oI = function (t, r) {
    if (!r || r.length !== 2 || !F(r[0]) || !F(r[1])) return t
    var n = Math.min(r[0], r[1]),
      i = Math.max(r[0], r[1]),
      a = [t[0], t[1]]
    return (
      (!F(t[0]) || t[0] < n) && (a[0] = n),
      (!F(t[1]) || t[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < n && (a[1] = n),
      a
    )
  },
  uI = function (t) {
    var r = t.length
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var c = Yn(t[u][n][1]) ? t[u][n][0] : t[u][n][1]
          c >= 0
            ? ((t[u][n][0] = a), (t[u][n][1] = a + c), (a = t[u][n][1]))
            : ((t[u][n][0] = o), (t[u][n][1] = o + c), (o = t[u][n][1]))
        }
  },
  cI = function (t) {
    var r = t.length
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = Yn(t[o][n][1]) ? t[o][n][0] : t[o][n][1]
          u >= 0 ? ((t[o][n][0] = a), (t[o][n][1] = a + u), (a = t[o][n][1])) : ((t[o][n][0] = 0), (t[o][n][1] = 0))
        }
  },
  sI = { sign: uI, expand: kx, none: gr, silhouette: Nx, wiggle: Dx, positive: cI },
  lI = function (t, r, n) {
    var i = r.map(function (u) {
        return u.props.dataKey
      }),
      a = sI[n],
      o = Ix()
        .keys(i)
        .value(function (u, c) {
          return +st(u, c, 0)
        })
        .order(Wo)
        .offset(a)
    return o(t)
  },
  fI = function (t, r, n, i, a, o) {
    if (!t) return null
    var u = o ? r.reverse() : r,
      c = {},
      s = u.reduce(function (l, h) {
        var d = h.props,
          y = d.stackId,
          v = d.hide
        if (v) return l
        var p = h.props[n],
          x = l[p] || { hasStack: !1, stackGroups: {} }
        if (be(y)) {
          var b = x.stackGroups[y] || { numericAxisId: n, cateAxisId: i, items: [] }
          b.items.push(h), (x.hasStack = !0), (x.stackGroups[y] = b)
        } else x.stackGroups[Pa('_stackId_')] = { numericAxisId: n, cateAxisId: i, items: [h] }
        return Ge(Ge({}, l), {}, yr({}, p, x))
      }, c),
      f = {}
    return Object.keys(s).reduce(function (l, h) {
      var d = s[h]
      if (d.hasStack) {
        var y = {}
        d.stackGroups = Object.keys(d.stackGroups).reduce(function (v, p) {
          var x = d.stackGroups[p]
          return Ge(
            Ge({}, v),
            {},
            yr({}, p, { numericAxisId: n, cateAxisId: i, items: x.items, stackedData: lI(t, x.items, a) }),
          )
        }, y)
      }
      return Ge(Ge({}, l), {}, yr({}, h, d))
    }, f)
  },
  hI = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      c = n || r.scale
    if (c !== 'auto' && c !== 'linear') return null
    if (a && i === 'number' && o && (o[0] === 'auto' || o[1] === 'auto')) {
      var s = t.domain()
      if (!s.length) return null
      var f = CC(s, a, u)
      return t.domain([za(f), Wa(f)]), { niceTicks: f }
    }
    if (a && i === 'number') {
      var l = t.domain(),
        h = IC(l, a, u)
      return { niceTicks: h }
    }
    return null
  },
  wf = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.offset,
      a = t.bandSize,
      o = t.entry,
      u = t.index
    if (r.type === 'category') return n[u] ? n[u].coordinate + i : null
    var c = st(o, r.dataKey, r.domain[u])
    return ie(c) ? null : r.scale(c) - a / 2 + i
  },
  dI = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain()
    if (r.type === 'number') {
      var i = Math.min(n[0], n[1]),
        a = Math.max(n[0], n[1])
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i
    }
    return n[0]
  },
  pI = function (t, r) {
    var n = t.props.stackId
    if (be(n)) {
      var i = r[n]
      if (i) {
        var a = i.items.indexOf(t)
        return a >= 0 ? i.stackedData[a] : null
      }
    }
    return null
  },
  vI = function (t) {
    return t.reduce(
      function (r, n) {
        return [za(n.concat([r[0]]).filter(F)), Wa(n.concat([r[1]]).filter(F))]
      },
      [1 / 0, -1 / 0],
    )
  },
  dv = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            u = o.stackedData,
            c = u.reduce(
              function (s, f) {
                var l = vI(f.slice(r, n + 1))
                return [Math.min(s[0], l[0]), Math.max(s[1], l[1])]
              },
              [1 / 0, -1 / 0],
            )
          return [Math.min(c[0], i[0]), Math.max(c[1], i[1])]
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i
      })
  },
  Of = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Sf = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  gu = function (t, r, n) {
    if (Z(t)) return t(r, n)
    if (!Array.isArray(t)) return r
    var i = []
    if (F(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0])
    else if (Of.test(t[0])) {
      var a = +Of.exec(t[0])[1]
      i[0] = r[0] - a
    } else Z(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0])
    if (F(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1])
    else if (Sf.test(t[1])) {
      var o = +Sf.exec(t[1])[1]
      i[1] = r[1] + o
    } else Z(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1])
    return i
  },
  Vi = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth()
      if (!n || i > 0) return i
    }
    if (t && r && r.length >= 2) {
      for (
        var a = mc(r, function (l) {
            return l.coordinate
          }),
          o = 1 / 0,
          u = 1,
          c = a.length;
        u < c;
        u++
      ) {
        var s = a[u],
          f = a[u - 1]
        o = Math.min((s.coordinate || 0) - (f.coordinate || 0), o)
      }
      return o === 1 / 0 ? 0 : o
    }
    return n ? void 0 : 0
  },
  Af = function (t, r, n) {
    return !t || !t.length || zc(t, Xe(n, 'type.defaultProps.domain')) ? r : t
  },
  pv = function (t, r) {
    var n = t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      c = n.tooltipType,
      s = n.chartType,
      f = n.hide
    return Ge(
      Ge({}, re(t, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: Hc(t),
        value: st(r, i),
        type: c,
        payload: r,
        chartType: s,
        hide: f,
      },
    )
  }
function $n(e) {
  '@babel/helpers - typeof'
  return (
    ($n =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    $n(e)
  )
}
function _f(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function $f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? _f(Object(r), !0).forEach(function (n) {
          yI(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _f(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function yI(e, t, r) {
  return (
    (t = gI(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function gI(e) {
  var t = mI(e, 'string')
  return $n(t) == 'symbol' ? t : String(t)
}
function mI(e, t) {
  if ($n(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if ($n(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var Yi = Math.PI / 180,
  bI = function (t) {
    return (t * 180) / Math.PI
  },
  Te = function (t, r, n, i) {
    return { x: t + Math.cos(-Yi * i) * n, y: r + Math.sin(-Yi * i) * n }
  },
  xI = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2))
  },
  wI = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      u = xI({ x: n, y: i }, { x: a, y: o })
    if (u <= 0) return { radius: u }
    var c = (n - a) / u,
      s = Math.acos(c)
    return i > o && (s = 2 * Math.PI - s), { radius: u, angle: bI(s), angleInRadian: s }
  },
  OI = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a)
    return { startAngle: r - o * 360, endAngle: n - o * 360 }
  },
  SI = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o)
    return t + u * 360
  },
  Pf = function (t, r) {
    var n = t.x,
      i = t.y,
      a = wI({ x: n, y: i }, r),
      o = a.radius,
      u = a.angle,
      c = r.innerRadius,
      s = r.outerRadius
    if (o < c || o > s) return !1
    if (o === 0) return !0
    var f = OI(r),
      l = f.startAngle,
      h = f.endAngle,
      d = u,
      y
    if (l <= h) {
      for (; d > h; ) d -= 360
      for (; d < l; ) d += 360
      y = d >= l && d <= h
    } else {
      for (; d > l; ) d -= 360
      for (; d < h; ) d += 360
      y = d >= h && d <= l
    }
    return y ? $f($f({}, r), {}, { radius: o, angle: SI(d, r) }) : null
  }
function Pn(e) {
  '@babel/helpers - typeof'
  return (
    (Pn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Pn(e)
  )
}
var AI = ['offset']
function _I(e) {
  return EI(e) || TI(e) || PI(e) || $I()
}
function $I() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function PI(e, t) {
  if (e) {
    if (typeof e == 'string') return mu(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mu(e, t)
  }
}
function TI(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function EI(e) {
  if (Array.isArray(e)) return mu(e)
}
function mu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function jI(e, t) {
  if (e == null) return {}
  var r = MI(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function MI(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function Tf(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Tf(Object(r), !0).forEach(function (n) {
          CI(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function CI(e, t, r) {
  return (
    (t = II(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function II(e) {
  var t = kI(e, 'string')
  return Pn(t) == 'symbol' ? t : String(t)
}
function kI(e, t) {
  if (Pn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Pn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Tn() {
  return (
    (Tn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Tn.apply(this, arguments)
  )
}
var NI = function (t) {
    var r = t.value,
      n = t.formatter,
      i = ie(t.children) ? r : t.children
    return Z(n) ? n(i) : i
  },
  DI = function (t, r) {
    var n = et(r - t),
      i = Math.min(Math.abs(r - t), 360)
    return n * i
  },
  LI = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      u = t.className,
      c = a,
      s = c.cx,
      f = c.cy,
      l = c.innerRadius,
      h = c.outerRadius,
      d = c.startAngle,
      y = c.endAngle,
      v = c.clockWise,
      p = (l + h) / 2,
      x = DI(d, y),
      b = x >= 0 ? 1 : -1,
      w,
      g
    i === 'insideStart'
      ? ((w = d + b * o), (g = v))
      : i === 'insideEnd'
        ? ((w = y - b * o), (g = !v))
        : i === 'end' && ((w = y + b * o), (g = v)),
      (g = x <= 0 ? g : !g)
    var m = Te(s, f, p, w),
      O = Te(s, f, p, w + (g ? 1 : -1) * 359),
      S = 'M'
        .concat(m.x, ',')
        .concat(
          m.y,
          `
    A`,
        )
        .concat(p, ',')
        .concat(p, ',0,1,')
        .concat(
          g ? 0 : 1,
          `,
    `,
        )
        .concat(O.x, ',')
        .concat(O.y),
      A = ie(t.id) ? Pa('recharts-radial-line-') : t.id
    return _.createElement(
      'text',
      Tn({}, n, { dominantBaseline: 'central', className: ae('recharts-radial-bar-label', u) }),
      _.createElement('defs', null, _.createElement('path', { id: A, d: S })),
      _.createElement('textPath', { xlinkHref: '#'.concat(A) }, r),
    )
  },
  BI = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      u = a.cy,
      c = a.innerRadius,
      s = a.outerRadius,
      f = a.startAngle,
      l = a.endAngle,
      h = (f + l) / 2
    if (i === 'outside') {
      var d = Te(o, u, s + n, h),
        y = d.x,
        v = d.y
      return { x: y, y: v, textAnchor: y >= o ? 'start' : 'end', verticalAnchor: 'middle' }
    }
    if (i === 'center') return { x: o, y: u, textAnchor: 'middle', verticalAnchor: 'middle' }
    if (i === 'centerTop') return { x: o, y: u, textAnchor: 'middle', verticalAnchor: 'start' }
    if (i === 'centerBottom') return { x: o, y: u, textAnchor: 'middle', verticalAnchor: 'end' }
    var p = (c + s) / 2,
      x = Te(o, u, p, h),
      b = x.x,
      w = x.y
    return { x: b, y: w, textAnchor: 'middle', verticalAnchor: 'middle' }
  },
  RI = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      u = o.x,
      c = o.y,
      s = o.width,
      f = o.height,
      l = f >= 0 ? 1 : -1,
      h = l * i,
      d = l > 0 ? 'end' : 'start',
      y = l > 0 ? 'start' : 'end',
      v = s >= 0 ? 1 : -1,
      p = v * i,
      x = v > 0 ? 'end' : 'start',
      b = v > 0 ? 'start' : 'end'
    if (a === 'top') {
      var w = { x: u + s / 2, y: c - l * i, textAnchor: 'middle', verticalAnchor: d }
      return me(me({}, w), n ? { height: Math.max(c - n.y, 0), width: s } : {})
    }
    if (a === 'bottom') {
      var g = { x: u + s / 2, y: c + f + h, textAnchor: 'middle', verticalAnchor: y }
      return me(me({}, g), n ? { height: Math.max(n.y + n.height - (c + f), 0), width: s } : {})
    }
    if (a === 'left') {
      var m = { x: u - p, y: c + f / 2, textAnchor: x, verticalAnchor: 'middle' }
      return me(me({}, m), n ? { width: Math.max(m.x - n.x, 0), height: f } : {})
    }
    if (a === 'right') {
      var O = { x: u + s + p, y: c + f / 2, textAnchor: b, verticalAnchor: 'middle' }
      return me(me({}, O), n ? { width: Math.max(n.x + n.width - O.x, 0), height: f } : {})
    }
    var S = n ? { width: s, height: f } : {}
    return a === 'insideLeft'
      ? me({ x: u + p, y: c + f / 2, textAnchor: b, verticalAnchor: 'middle' }, S)
      : a === 'insideRight'
        ? me({ x: u + s - p, y: c + f / 2, textAnchor: x, verticalAnchor: 'middle' }, S)
        : a === 'insideTop'
          ? me({ x: u + s / 2, y: c + h, textAnchor: 'middle', verticalAnchor: y }, S)
          : a === 'insideBottom'
            ? me({ x: u + s / 2, y: c + f - h, textAnchor: 'middle', verticalAnchor: d }, S)
            : a === 'insideTopLeft'
              ? me({ x: u + p, y: c + h, textAnchor: b, verticalAnchor: y }, S)
              : a === 'insideTopRight'
                ? me({ x: u + s - p, y: c + h, textAnchor: x, verticalAnchor: y }, S)
                : a === 'insideBottomLeft'
                  ? me({ x: u + p, y: c + f - h, textAnchor: b, verticalAnchor: d }, S)
                  : a === 'insideBottomRight'
                    ? me({ x: u + s - p, y: c + f - h, textAnchor: x, verticalAnchor: d }, S)
                    : kr(a) && (F(a.x) || Ut(a.x)) && (F(a.y) || Ut(a.y))
                      ? me({ x: u + Zt(a.x, s), y: c + Zt(a.y, f), textAnchor: 'end', verticalAnchor: 'end' }, S)
                      : me({ x: u + s / 2, y: c + f / 2, textAnchor: 'middle', verticalAnchor: 'middle' }, S)
  },
  FI = function (t) {
    return 'cx' in t && F(t.cx)
  }
function je(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = jI(e, AI),
    i = me({ offset: r }, n),
    a = i.viewBox,
    o = i.position,
    u = i.value,
    c = i.children,
    s = i.content,
    f = i.className,
    l = f === void 0 ? '' : f,
    h = i.textBreakAll
  if (!a || (ie(u) && ie(c) && !N.isValidElement(s) && !Z(s))) return null
  if (N.isValidElement(s)) return N.cloneElement(s, i)
  var d
  if (Z(s)) {
    if (((d = N.createElement(s, i)), N.isValidElement(d))) return d
  } else d = NI(i)
  var y = FI(a),
    v = re(i, !0)
  if (y && (o === 'insideStart' || o === 'insideEnd' || o === 'end')) return LI(i, d, v)
  var p = y ? BI(i) : RI(i)
  return _.createElement(Di, Tn({ className: ae('recharts-label', l) }, v, p, { breakAll: h }), d)
}
je.displayName = 'Label'
var vv = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      u = t.r,
      c = t.radius,
      s = t.innerRadius,
      f = t.outerRadius,
      l = t.x,
      h = t.y,
      d = t.top,
      y = t.left,
      v = t.width,
      p = t.height,
      x = t.clockWise,
      b = t.labelViewBox
    if (b) return b
    if (F(v) && F(p)) {
      if (F(l) && F(h)) return { x: l, y: h, width: v, height: p }
      if (F(d) && F(y)) return { x: d, y, width: v, height: p }
    }
    return F(l) && F(h)
      ? { x: l, y: h, width: 0, height: 0 }
      : F(r) && F(n)
        ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: s || 0,
            outerRadius: f || c || u || 0,
            clockWise: x,
          }
        : t.viewBox
          ? t.viewBox
          : {}
  },
  WI = function (t, r) {
    return t
      ? t === !0
        ? _.createElement(je, { key: 'label-implicit', viewBox: r })
        : be(t)
          ? _.createElement(je, { key: 'label-implicit', viewBox: r, value: t })
          : N.isValidElement(t)
            ? t.type === je
              ? N.cloneElement(t, { key: 'label-implicit', viewBox: r })
              : _.createElement(je, { key: 'label-implicit', content: t, viewBox: r })
            : Z(t)
              ? _.createElement(je, { key: 'label-implicit', content: t, viewBox: r })
              : kr(t)
                ? _.createElement(je, Tn({ viewBox: r }, t, { key: 'label-implicit' }))
                : null
      : null
  },
  zI = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
    if (!t || (!t.children && n && !t.label)) return null
    var i = t.children,
      a = vv(t),
      o = tt(i, je).map(function (c, s) {
        return N.cloneElement(c, { viewBox: r || a, key: 'label-'.concat(s) })
      })
    if (!n) return o
    var u = WI(t.label, r || a)
    return [u].concat(_I(o))
  }
je.parseViewBox = vv
je.renderCallByParent = zI
function UI(e) {
  var t = e == null ? 0 : e.length
  return t ? e[t - 1] : void 0
}
var qI = UI
const HI = le(qI)
function En(e) {
  '@babel/helpers - typeof'
  return (
    (En =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    En(e)
  )
}
var GI = ['valueAccessor'],
  KI = ['data', 'dataKey', 'clockWise', 'id', 'textBreakAll']
function XI(e) {
  return JI(e) || ZI(e) || YI(e) || VI()
}
function VI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function YI(e, t) {
  if (e) {
    if (typeof e == 'string') return bu(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bu(e, t)
  }
}
function ZI(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function JI(e) {
  if (Array.isArray(e)) return bu(e)
}
function bu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function Zi() {
  return (
    (Zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Zi.apply(this, arguments)
  )
}
function Ef(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function jf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Ef(Object(r), !0).forEach(function (n) {
          QI(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ef(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function QI(e, t, r) {
  return (
    (t = e2(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function e2(e) {
  var t = t2(e, 'string')
  return En(t) == 'symbol' ? t : String(t)
}
function t2(e, t) {
  if (En(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (En(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Mf(e, t) {
  if (e == null) return {}
  var r = r2(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function r2(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
var n2 = function (t) {
  return Array.isArray(t.value) ? HI(t.value) : t.value
}
function Vt(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? n2 : t,
    n = Mf(e, GI),
    i = n.data,
    a = n.dataKey,
    o = n.clockWise,
    u = n.id,
    c = n.textBreakAll,
    s = Mf(n, KI)
  return !i || !i.length
    ? null
    : _.createElement(
        Se,
        { className: 'recharts-label-list' },
        i.map(function (f, l) {
          var h = ie(a) ? r(f, l) : st(f && f.payload, a),
            d = ie(u) ? {} : { id: ''.concat(u, '-').concat(l) }
          return _.createElement(
            je,
            Zi({}, re(f, !0), s, d, {
              parentViewBox: f.parentViewBox,
              value: h,
              textBreakAll: c,
              viewBox: je.parseViewBox(ie(o) ? f : jf(jf({}, f), {}, { clockWise: o })),
              key: 'label-'.concat(l),
              index: l,
            }),
          )
        }),
      )
}
Vt.displayName = 'LabelList'
function i2(e, t) {
  return e
    ? e === !0
      ? _.createElement(Vt, { key: 'labelList-implicit', data: t })
      : _.isValidElement(e) || Z(e)
        ? _.createElement(Vt, { key: 'labelList-implicit', data: t, content: e })
        : kr(e)
          ? _.createElement(Vt, Zi({ data: t }, e, { key: 'labelList-implicit' }))
          : null
    : null
}
function a2(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
  if (!e || (!e.children && r && !e.label)) return null
  var n = e.children,
    i = tt(n, Vt).map(function (o, u) {
      return N.cloneElement(o, { data: t, key: 'labelList-'.concat(u) })
    })
  if (!r) return i
  var a = i2(e.label, t)
  return [a].concat(XI(i))
}
Vt.renderCallByParent = a2
function jn(e) {
  '@babel/helpers - typeof'
  return (
    (jn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    jn(e)
  )
}
function xu() {
  return (
    (xu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    xu.apply(this, arguments)
  )
}
function Cf(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function If(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Cf(Object(r), !0).forEach(function (n) {
          o2(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function o2(e, t, r) {
  return (
    (t = u2(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function u2(e) {
  var t = c2(e, 'string')
  return jn(t) == 'symbol' ? t : String(t)
}
function c2(e, t) {
  if (jn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (jn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var s2 = function (t, r) {
    var n = et(r - t),
      i = Math.min(Math.abs(r - t), 359.999)
    return n * i
  },
  yi = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      u = t.isExternal,
      c = t.cornerRadius,
      s = t.cornerIsExternal,
      f = c * (u ? 1 : -1) + i,
      l = Math.asin(c / f) / Yi,
      h = s ? a : a + o * l,
      d = Te(r, n, f, h),
      y = Te(r, n, i, h),
      v = s ? a - o * l : a,
      p = Te(r, n, f * Math.cos(l * Yi), v)
    return { center: d, circleTangency: y, lineTangency: p, theta: l }
  },
  yv = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      u = t.endAngle,
      c = s2(o, u),
      s = o + c,
      f = Te(r, n, a, o),
      l = Te(r, n, a, s),
      h = 'M '
        .concat(f.x, ',')
        .concat(
          f.y,
          `
    A `,
        )
        .concat(a, ',')
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(c) > 180), ',')
        .concat(
          +(o > s),
          `,
    `,
        )
        .concat(l.x, ',')
        .concat(
          l.y,
          `
  `,
        )
    if (i > 0) {
      var d = Te(r, n, i, o),
        y = Te(r, n, i, s)
      h += 'L '
        .concat(y.x, ',')
        .concat(
          y.y,
          `
            A `,
        )
        .concat(i, ',')
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(c) > 180), ',')
        .concat(
          +(o <= s),
          `,
            `,
        )
        .concat(d.x, ',')
        .concat(d.y, ' Z')
    } else h += 'L '.concat(r, ',').concat(n, ' Z')
    return h
  },
  l2 = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      u = t.forceCornerRadius,
      c = t.cornerIsExternal,
      s = t.startAngle,
      f = t.endAngle,
      l = et(f - s),
      h = yi({ cx: r, cy: n, radius: a, angle: s, sign: l, cornerRadius: o, cornerIsExternal: c }),
      d = h.circleTangency,
      y = h.lineTangency,
      v = h.theta,
      p = yi({ cx: r, cy: n, radius: a, angle: f, sign: -l, cornerRadius: o, cornerIsExternal: c }),
      x = p.circleTangency,
      b = p.lineTangency,
      w = p.theta,
      g = c ? Math.abs(s - f) : Math.abs(s - f) - v - w
    if (g < 0)
      return u
        ? 'M '
            .concat(y.x, ',')
            .concat(
              y.y,
              `
        a`,
            )
            .concat(o, ',')
            .concat(o, ',0,0,1,')
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ',')
            .concat(o, ',0,0,1,')
            .concat(
              -o * 2,
              `,0
      `,
            )
        : yv({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: s, endAngle: f })
    var m = 'M '
      .concat(y.x, ',')
      .concat(
        y.y,
        `
    A`,
      )
      .concat(o, ',')
      .concat(o, ',0,0,')
      .concat(+(l < 0), ',')
      .concat(d.x, ',')
      .concat(
        d.y,
        `
    A`,
      )
      .concat(a, ',')
      .concat(a, ',0,')
      .concat(+(g > 180), ',')
      .concat(+(l < 0), ',')
      .concat(x.x, ',')
      .concat(
        x.y,
        `
    A`,
      )
      .concat(o, ',')
      .concat(o, ',0,0,')
      .concat(+(l < 0), ',')
      .concat(b.x, ',')
      .concat(
        b.y,
        `
  `,
      )
    if (i > 0) {
      var O = yi({ cx: r, cy: n, radius: i, angle: s, sign: l, isExternal: !0, cornerRadius: o, cornerIsExternal: c }),
        S = O.circleTangency,
        A = O.lineTangency,
        E = O.theta,
        T = yi({ cx: r, cy: n, radius: i, angle: f, sign: -l, isExternal: !0, cornerRadius: o, cornerIsExternal: c }),
        $ = T.circleTangency,
        P = T.lineTangency,
        M = T.theta,
        j = c ? Math.abs(s - f) : Math.abs(s - f) - E - M
      if (j < 0 && o === 0) return ''.concat(m, 'L').concat(r, ',').concat(n, 'Z')
      m += 'L'
        .concat(P.x, ',')
        .concat(
          P.y,
          `
      A`,
        )
        .concat(o, ',')
        .concat(o, ',0,0,')
        .concat(+(l < 0), ',')
        .concat($.x, ',')
        .concat(
          $.y,
          `
      A`,
        )
        .concat(i, ',')
        .concat(i, ',0,')
        .concat(+(j > 180), ',')
        .concat(+(l > 0), ',')
        .concat(S.x, ',')
        .concat(
          S.y,
          `
      A`,
        )
        .concat(o, ',')
        .concat(o, ',0,0,')
        .concat(+(l < 0), ',')
        .concat(A.x, ',')
        .concat(A.y, 'Z')
    } else m += 'L'.concat(r, ',').concat(n, 'Z')
    return m
  },
  f2 = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  gv = function (t) {
    var r = If(If({}, f2), t),
      n = r.cx,
      i = r.cy,
      a = r.innerRadius,
      o = r.outerRadius,
      u = r.cornerRadius,
      c = r.forceCornerRadius,
      s = r.cornerIsExternal,
      f = r.startAngle,
      l = r.endAngle,
      h = r.className
    if (o < a || f === l) return null
    var d = ae('recharts-sector', h),
      y = o - a,
      v = Zt(u, y, 0, !0),
      p
    return (
      v > 0 && Math.abs(f - l) < 360
        ? (p = l2({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(v, y / 2),
            forceCornerRadius: c,
            cornerIsExternal: s,
            startAngle: f,
            endAngle: l,
          }))
        : (p = yv({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: f, endAngle: l })),
      _.createElement('path', xu({}, re(r, !0), { className: d, d: p, role: 'img' }))
    )
  }
function Mn(e) {
  '@babel/helpers - typeof'
  return (
    (Mn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Mn(e)
  )
}
function wu() {
  return (
    (wu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    wu.apply(this, arguments)
  )
}
function kf(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? kf(Object(r), !0).forEach(function (n) {
          h2(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function h2(e, t, r) {
  return (
    (t = d2(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function d2(e) {
  var t = p2(e, 'string')
  return Mn(t) == 'symbol' ? t : String(t)
}
function p2(e, t) {
  if (Mn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Mn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var Df = {
    curveBasisClosed: Ox,
    curveBasisOpen: Sx,
    curveBasis: wx,
    curveBumpX: ux,
    curveBumpY: cx,
    curveLinearClosed: Ax,
    curveLinear: ja,
    curveMonotoneX: _x,
    curveMonotoneY: $x,
    curveNatural: Px,
    curveStep: Tx,
    curveStepAfter: jx,
    curveStepBefore: Ex,
  },
  gi = function (t) {
    return t.x === +t.x && t.y === +t.y
  },
  Jr = function (t) {
    return t.x
  },
  Qr = function (t) {
    return t.y
  },
  v2 = function (t, r) {
    if (Z(t)) return t
    var n = 'curve'.concat(Ta(t))
    return (n === 'curveMonotone' || n === 'curveBump') && r
      ? Df[''.concat(n).concat(r === 'vertical' ? 'Y' : 'X')]
      : Df[n] || ja
  },
  y2 = function (t) {
    var r = t.type,
      n = r === void 0 ? 'linear' : r,
      i = t.points,
      a = i === void 0 ? [] : i,
      o = t.baseLine,
      u = t.layout,
      c = t.connectNulls,
      s = c === void 0 ? !1 : c,
      f = v2(n, u),
      l = s
        ? a.filter(function (v) {
            return gi(v)
          })
        : a,
      h
    if (Array.isArray(o)) {
      var d = s
          ? o.filter(function (v) {
              return gi(v)
            })
          : o,
        y = l.map(function (v, p) {
          return Nf(Nf({}, v), {}, { base: d[p] })
        })
      return (
        u === 'vertical'
          ? (h = ui()
              .y(Qr)
              .x1(Jr)
              .x0(function (v) {
                return v.base.x
              }))
          : (h = ui()
              .x(Jr)
              .y1(Qr)
              .y0(function (v) {
                return v.base.y
              })),
        h.defined(gi).curve(f),
        h(y)
      )
    }
    return (
      u === 'vertical' && F(o)
        ? (h = ui().y(Qr).x1(Jr).x0(o))
        : F(o)
          ? (h = ui().x(Jr).y1(Qr).y0(o))
          : (h = bd().x(Jr).y(Qr)),
      h.defined(gi).curve(f),
      h(l)
    )
  },
  Lf = function (t) {
    var r = t.className,
      n = t.points,
      i = t.path,
      a = t.pathRef
    if ((!n || !n.length) && !i) return null
    var o = n && n.length ? y2(t) : i
    return _.createElement('path', wu({}, re(t, !1), wi(t), { className: ae('recharts-curve', r), d: o, ref: a }))
  },
  mv = { exports: {} },
  g2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  m2 = g2,
  b2 = m2
function bv() {}
function xv() {}
xv.resetWarningCache = bv
var x2 = function () {
  function e(n, i, a, o, u, c) {
    if (c !== b2) {
      var s = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      )
      throw ((s.name = 'Invariant Violation'), s)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: xv,
    resetWarningCache: bv,
  }
  return (r.PropTypes = r), r
}
mv.exports = x2()
var w2 = mv.exports
const X = le(w2)
var O2 = Object.getOwnPropertyNames,
  S2 = Object.getOwnPropertySymbols,
  A2 = Object.prototype.hasOwnProperty
function Bf(e, t) {
  return function (n, i, a) {
    return e(n, i, a) && t(n, i, a)
  }
}
function mi(e) {
  return function (r, n, i) {
    if (!r || !n || typeof r != 'object' || typeof n != 'object') return e(r, n, i)
    var a = i.cache,
      o = a.get(r),
      u = a.get(n)
    if (o && u) return o === n && u === r
    a.set(r, n), a.set(n, r)
    var c = e(r, n, i)
    return a.delete(r), a.delete(n), c
  }
}
function Rf(e) {
  return O2(e).concat(S2(e))
}
var wv =
  Object.hasOwn ||
  function (e, t) {
    return A2.call(e, t)
  }
function qr(e, t) {
  return e || t ? e === t : e === t || (e !== e && t !== t)
}
var Ov = '_owner',
  Ff = Object.getOwnPropertyDescriptor,
  Wf = Object.keys
function _2(e, t, r) {
  var n = e.length
  if (t.length !== n) return !1
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1
  return !0
}
function $2(e, t) {
  return qr(e.getTime(), t.getTime())
}
function zf(e, t, r) {
  if (e.size !== t.size) return !1
  for (var n = {}, i = e.entries(), a = 0, o, u; (o = i.next()) && !o.done; ) {
    for (var c = t.entries(), s = !1, f = 0; (u = c.next()) && !u.done; ) {
      var l = o.value,
        h = l[0],
        d = l[1],
        y = u.value,
        v = y[0],
        p = y[1]
      !s && !n[f] && (s = r.equals(h, v, a, f, e, t, r) && r.equals(d, p, h, v, e, t, r)) && (n[f] = !0), f++
    }
    if (!s) return !1
    a++
  }
  return !0
}
function P2(e, t, r) {
  var n = Wf(e),
    i = n.length
  if (Wf(t).length !== i) return !1
  for (var a; i-- > 0; )
    if (
      ((a = n[i]),
      (a === Ov && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !wv(t, a) ||
        !r.equals(e[a], t[a], a, a, e, t, r))
    )
      return !1
  return !0
}
function en(e, t, r) {
  var n = Rf(e),
    i = n.length
  if (Rf(t).length !== i) return !1
  for (var a, o, u; i-- > 0; )
    if (
      ((a = n[i]),
      (a === Ov && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !wv(t, a) ||
        !r.equals(e[a], t[a], a, a, e, t, r) ||
        ((o = Ff(e, a)),
        (u = Ff(t, a)),
        (o || u) &&
          (!o ||
            !u ||
            o.configurable !== u.configurable ||
            o.enumerable !== u.enumerable ||
            o.writable !== u.writable)))
    )
      return !1
  return !0
}
function T2(e, t) {
  return qr(e.valueOf(), t.valueOf())
}
function E2(e, t) {
  return e.source === t.source && e.flags === t.flags
}
function Uf(e, t, r) {
  if (e.size !== t.size) return !1
  for (var n = {}, i = e.values(), a, o; (a = i.next()) && !a.done; ) {
    for (var u = t.values(), c = !1, s = 0; (o = u.next()) && !o.done; )
      !c && !n[s] && (c = r.equals(a.value, o.value, a.value, o.value, e, t, r)) && (n[s] = !0), s++
    if (!c) return !1
  }
  return !0
}
function j2(e, t) {
  var r = e.length
  if (t.length !== r) return !1
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1
  return !0
}
var M2 = '[object Arguments]',
  C2 = '[object Boolean]',
  I2 = '[object Date]',
  k2 = '[object Map]',
  N2 = '[object Number]',
  D2 = '[object Object]',
  L2 = '[object RegExp]',
  B2 = '[object Set]',
  R2 = '[object String]',
  F2 = Array.isArray,
  qf = typeof ArrayBuffer == 'function' && ArrayBuffer.isView ? ArrayBuffer.isView : null,
  Hf = Object.assign,
  W2 = Object.prototype.toString.call.bind(Object.prototype.toString)
function z2(e) {
  var t = e.areArraysEqual,
    r = e.areDatesEqual,
    n = e.areMapsEqual,
    i = e.areObjectsEqual,
    a = e.arePrimitiveWrappersEqual,
    o = e.areRegExpsEqual,
    u = e.areSetsEqual,
    c = e.areTypedArraysEqual
  return function (f, l, h) {
    if (f === l) return !0
    if (f == null || l == null || typeof f != 'object' || typeof l != 'object') return f !== f && l !== l
    var d = f.constructor
    if (d !== l.constructor) return !1
    if (d === Object) return i(f, l, h)
    if (F2(f)) return t(f, l, h)
    if (qf != null && qf(f)) return c(f, l, h)
    if (d === Date) return r(f, l, h)
    if (d === RegExp) return o(f, l, h)
    if (d === Map) return n(f, l, h)
    if (d === Set) return u(f, l, h)
    var y = W2(f)
    return y === I2
      ? r(f, l, h)
      : y === L2
        ? o(f, l, h)
        : y === k2
          ? n(f, l, h)
          : y === B2
            ? u(f, l, h)
            : y === D2
              ? typeof f.then != 'function' && typeof l.then != 'function' && i(f, l, h)
              : y === M2
                ? i(f, l, h)
                : y === C2 || y === N2 || y === R2
                  ? a(f, l, h)
                  : !1
  }
}
function U2(e) {
  var t = e.circular,
    r = e.createCustomConfig,
    n = e.strict,
    i = {
      areArraysEqual: n ? en : _2,
      areDatesEqual: $2,
      areMapsEqual: n ? Bf(zf, en) : zf,
      areObjectsEqual: n ? en : P2,
      arePrimitiveWrappersEqual: T2,
      areRegExpsEqual: E2,
      areSetsEqual: n ? Bf(Uf, en) : Uf,
      areTypedArraysEqual: n ? en : j2,
    }
  if ((r && (i = Hf({}, i, r(i))), t)) {
    var a = mi(i.areArraysEqual),
      o = mi(i.areMapsEqual),
      u = mi(i.areObjectsEqual),
      c = mi(i.areSetsEqual)
    i = Hf({}, i, { areArraysEqual: a, areMapsEqual: o, areObjectsEqual: u, areSetsEqual: c })
  }
  return i
}
function q2(e) {
  return function (t, r, n, i, a, o, u) {
    return e(t, r, u)
  }
}
function H2(e) {
  var t = e.circular,
    r = e.comparator,
    n = e.createState,
    i = e.equals,
    a = e.strict
  if (n)
    return function (c, s) {
      var f = n(),
        l = f.cache,
        h = l === void 0 ? (t ? new WeakMap() : void 0) : l,
        d = f.meta
      return r(c, s, { cache: h, equals: i, meta: d, strict: a })
    }
  if (t)
    return function (c, s) {
      return r(c, s, { cache: new WeakMap(), equals: i, meta: void 0, strict: a })
    }
  var o = { cache: void 0, equals: i, meta: void 0, strict: a }
  return function (c, s) {
    return r(c, s, o)
  }
}
var G2 = Nt()
Nt({ strict: !0 })
Nt({ circular: !0 })
Nt({ circular: !0, strict: !0 })
Nt({
  createInternalComparator: function () {
    return qr
  },
})
Nt({
  strict: !0,
  createInternalComparator: function () {
    return qr
  },
})
Nt({
  circular: !0,
  createInternalComparator: function () {
    return qr
  },
})
Nt({
  circular: !0,
  createInternalComparator: function () {
    return qr
  },
  strict: !0,
})
function Nt(e) {
  e === void 0 && (e = {})
  var t = e.circular,
    r = t === void 0 ? !1 : t,
    n = e.createInternalComparator,
    i = e.createState,
    a = e.strict,
    o = a === void 0 ? !1 : a,
    u = U2(e),
    c = z2(u),
    s = n ? n(c) : q2(c)
  return H2({ circular: r, comparator: c, createState: i, equals: s, strict: o })
}
function K2(e) {
  typeof requestAnimationFrame < 'u' && requestAnimationFrame(e)
}
function Gf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : K2(i)
    }
  requestAnimationFrame(n)
}
function Ou(e) {
  '@babel/helpers - typeof'
  return (
    (Ou =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Ou(e)
  )
}
function X2(e) {
  return J2(e) || Z2(e) || Y2(e) || V2()
}
function V2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Y2(e, t) {
  if (e) {
    if (typeof e == 'string') return Kf(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kf(e, t)
  }
}
function Kf(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function Z2(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function J2(e) {
  if (Array.isArray(e)) return e
}
function Q2() {
  var e = {},
    t = function () {
      return null
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return
          var o = a,
            u = X2(o),
            c = u[0],
            s = u.slice(1)
          if (typeof c == 'number') {
            Gf(i.bind(null, s), c)
            return
          }
          i(c), Gf(i.bind(null, s))
          return
        }
        Ou(a) === 'object' && ((e = a), t(e)), typeof a == 'function' && a()
      }
    }
  return {
    stop: function () {
      r = !0
    },
    start: function (a) {
      ;(r = !1), n(a)
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null
          }
        }
      )
    },
  }
}
function Cn(e) {
  '@babel/helpers - typeof'
  return (
    (Cn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Cn(e)
  )
}
function Xf(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Vf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Xf(Object(r), !0).forEach(function (n) {
          Sv(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function Sv(e, t, r) {
  return (
    (t = ek(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function ek(e) {
  var t = tk(e, 'string')
  return Cn(t) === 'symbol' ? t : String(t)
}
function tk(e, t) {
  if (Cn(e) !== 'object' || e === null) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Cn(n) !== 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var rk = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a)
      })
    })
  },
  nk = function (t) {
    return t
  },
  ik = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return '-'.concat(r.toLowerCase())
    })
  },
  cn = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return Vf(Vf({}, n), {}, Sv({}, i, t(i, r[i])))
    }, {})
  },
  Yf = function (t, r, n) {
    return t
      .map(function (i) {
        return ''.concat(ik(i), ' ').concat(r, 'ms ').concat(n)
      })
      .join(',')
  }
function ak(e, t) {
  return ck(e) || uk(e, t) || Av(e, t) || ok()
}
function ok() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function uk(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function ck(e) {
  if (Array.isArray(e)) return e
}
function sk(e) {
  return hk(e) || fk(e) || Av(e) || lk()
}
function lk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Av(e, t) {
  if (e) {
    if (typeof e == 'string') return Su(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Su(e, t)
  }
}
function fk(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function hk(e) {
  if (Array.isArray(e)) return Su(e)
}
function Su(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
var Ji = 1e-4,
  _v = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1]
  },
  $v = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i)
      })
      .reduce(function (n, i) {
        return n + i
      })
  },
  Zf = function (t, r) {
    return function (n) {
      var i = _v(t, r)
      return $v(i, n)
    }
  },
  dk = function (t, r) {
    return function (n) {
      var i = _v(t, r),
        a = [].concat(
          sk(
            i
              .map(function (o, u) {
                return o * u
              })
              .slice(1),
          ),
          [0],
        )
      return $v(a, n)
    }
  },
  Jf = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3]
    if (r.length === 1)
      switch (r[0]) {
        case 'linear':
          ;(i = 0), (a = 0), (o = 1), (u = 1)
          break
        case 'ease':
          ;(i = 0.25), (a = 0.1), (o = 0.25), (u = 1)
          break
        case 'ease-in':
          ;(i = 0.42), (a = 0), (o = 1), (u = 1)
          break
        case 'ease-out':
          ;(i = 0.42), (a = 0), (o = 0.58), (u = 1)
          break
        case 'ease-in-out':
          ;(i = 0), (a = 0), (o = 0.58), (u = 1)
          break
        default: {
          var c = r[0].split('(')
          if (c[0] === 'cubic-bezier' && c[1].split(')')[0].split(',').length === 4) {
            var s = c[1]
                .split(')')[0]
                .split(',')
                .map(function (p) {
                  return parseFloat(p)
                }),
              f = ak(s, 4)
            ;(i = f[0]), (a = f[1]), (o = f[2]), (u = f[3])
          }
        }
      }
    var l = Zf(i, o),
      h = Zf(a, u),
      d = dk(i, o),
      y = function (x) {
        return x > 1 ? 1 : x < 0 ? 0 : x
      },
      v = function (x) {
        for (var b = x > 1 ? 1 : x, w = b, g = 0; g < 8; ++g) {
          var m = l(w) - b,
            O = d(w)
          if (Math.abs(m - b) < Ji || O < Ji) return h(w)
          w = y(w - m / O)
        }
        return h(w)
      }
    return (v.isStepper = !1), v
  },
  pk = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      u = o === void 0 ? 17 : o,
      c = function (f, l, h) {
        var d = -(f - l) * n,
          y = h * a,
          v = h + ((d - y) * u) / 1e3,
          p = (h * u) / 1e3 + f
        return Math.abs(p - l) < Ji && Math.abs(v) < Ji ? [l, 0] : [p, v]
      }
    return (c.isStepper = !0), (c.dt = u), c
  },
  vk = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
    var i = r[0]
    if (typeof i == 'string')
      switch (i) {
        case 'ease':
        case 'ease-in-out':
        case 'ease-out':
        case 'ease-in':
        case 'linear':
          return Jf(i)
        case 'spring':
          return pk()
        default:
          if (i.split('(')[0] === 'cubic-bezier') return Jf(i)
      }
    return typeof i == 'function' ? i : null
  }
function In(e) {
  '@babel/helpers - typeof'
  return (
    (In =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    In(e)
  )
}
function Qf(e) {
  return mk(e) || gk(e) || Pv(e) || yk()
}
function yk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function gk(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function mk(e) {
  if (Array.isArray(e)) return _u(e)
}
function eh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? eh(Object(r), !0).forEach(function (n) {
          Au(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : eh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function Au(e, t, r) {
  return (
    (t = bk(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function bk(e) {
  var t = xk(e, 'string')
  return In(t) === 'symbol' ? t : String(t)
}
function xk(e, t) {
  if (In(e) !== 'object' || e === null) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (In(n) !== 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function wk(e, t) {
  return Ak(e) || Sk(e, t) || Pv(e, t) || Ok()
}
function Ok() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Pv(e, t) {
  if (e) {
    if (typeof e == 'string') return _u(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _u(e, t)
  }
}
function _u(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function Sk(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function Ak(e) {
  if (Array.isArray(e)) return e
}
var Qi = function (t, r, n) {
    return t + (r - t) * n
  },
  $u = function (t) {
    var r = t.from,
      n = t.to
    return r !== n
  },
  _k = function e(t, r, n) {
    var i = cn(function (a, o) {
      if ($u(o)) {
        var u = t(o.from, o.to, o.velocity),
          c = wk(u, 2),
          s = c[0],
          f = c[1]
        return Pe(Pe({}, o), {}, { from: s, velocity: f })
      }
      return o
    }, r)
    return n < 1
      ? cn(function (a, o) {
          return $u(o)
            ? Pe(Pe({}, o), {}, { velocity: Qi(o.velocity, i[a].velocity, n), from: Qi(o.from, i[a].from, n) })
            : o
        }, r)
      : e(t, i, n - 1)
  }
const $k = function (e, t, r, n, i) {
  var a = rk(e, t),
    o = a.reduce(function (p, x) {
      return Pe(Pe({}, p), {}, Au({}, x, [e[x], t[x]]))
    }, {}),
    u = a.reduce(function (p, x) {
      return Pe(Pe({}, p), {}, Au({}, x, { from: e[x], velocity: 0, to: t[x] }))
    }, {}),
    c = -1,
    s,
    f,
    l = function () {
      return null
    },
    h = function () {
      return cn(function (x, b) {
        return b.from
      }, u)
    },
    d = function () {
      return !Object.values(u).filter($u).length
    },
    y = function (x) {
      s || (s = x)
      var b = x - s,
        w = b / r.dt
      ;(u = _k(r, u, w)), i(Pe(Pe(Pe({}, e), t), h())), (s = x), d() || (c = requestAnimationFrame(l))
    },
    v = function (x) {
      f || (f = x)
      var b = (x - f) / n,
        w = cn(function (m, O) {
          return Qi.apply(void 0, Qf(O).concat([r(b)]))
        }, o)
      if ((i(Pe(Pe(Pe({}, e), t), w)), b < 1)) c = requestAnimationFrame(l)
      else {
        var g = cn(function (m, O) {
          return Qi.apply(void 0, Qf(O).concat([r(1)]))
        }, o)
        i(Pe(Pe(Pe({}, e), t), g))
      }
    }
  return (
    (l = r.isStepper ? y : v),
    function () {
      return (
        requestAnimationFrame(l),
        function () {
          cancelAnimationFrame(c)
        }
      )
    }
  )
}
function $r(e) {
  '@babel/helpers - typeof'
  return (
    ($r =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    $r(e)
  )
}
var Pk = [
  'children',
  'begin',
  'duration',
  'attributeName',
  'easing',
  'isActive',
  'steps',
  'from',
  'to',
  'canBegin',
  'onAnimationEnd',
  'shouldReAnimate',
  'onAnimationReStart',
]
function Tk(e, t) {
  if (e == null) return {}
  var r = Ek(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function Ek(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function Oo(e) {
  return Ik(e) || Ck(e) || Mk(e) || jk()
}
function jk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Mk(e, t) {
  if (e) {
    if (typeof e == 'string') return Pu(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pu(e, t)
  }
}
function Ck(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function Ik(e) {
  if (Array.isArray(e)) return Pu(e)
}
function Pu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function th(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? th(Object(r), !0).forEach(function (n) {
          rn(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : th(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function rn(e, t, r) {
  return (
    (t = Tv(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function kk(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Nk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Tv(n.key), n)
  }
}
function Dk(e, t, r) {
  return t && Nk(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function Tv(e) {
  var t = Lk(e, 'string')
  return $r(t) === 'symbol' ? t : String(t)
}
function Lk(e, t) {
  if ($r(e) !== 'object' || e === null) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if ($r(n) !== 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Bk(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Tu(e, t)
}
function Tu(e, t) {
  return (
    (Tu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    Tu(e, t)
  )
}
function Rk(e) {
  var t = Fk()
  return function () {
    var n = ea(e),
      i
    if (t) {
      var a = ea(this).constructor
      i = Reflect.construct(n, arguments, a)
    } else i = n.apply(this, arguments)
    return Eu(this, i)
  }
}
function Eu(e, t) {
  if (t && ($r(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return ju(e)
}
function ju(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function Fk() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1
  if (typeof Proxy == 'function') return !0
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
  } catch {
    return !1
  }
}
function ea(e) {
  return (
    (ea = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    ea(e)
  )
}
var jt = (function (e) {
  Bk(r, e)
  var t = Rk(r)
  function r(n, i) {
    var a
    kk(this, r), (a = t.call(this, n, i))
    var o = a.props,
      u = o.isActive,
      c = o.attributeName,
      s = o.from,
      f = o.to,
      l = o.steps,
      h = o.children,
      d = o.duration
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(ju(a))),
      (a.changeStyle = a.changeStyle.bind(ju(a))),
      !u || d <= 0)
    )
      return (a.state = { style: {} }), typeof h == 'function' && (a.state = { style: f }), Eu(a)
    if (l && l.length) a.state = { style: l[0].style }
    else if (s) {
      if (typeof h == 'function') return (a.state = { style: s }), Eu(a)
      a.state = { style: c ? rn({}, c, s) : s }
    } else a.state = { style: {} }
    return a
  }
  return (
    Dk(r, [
      {
        key: 'componentDidMount',
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin
          ;(this.mounted = !0), !(!a || !o) && this.runAnimation(this.props)
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            c = a.attributeName,
            s = a.shouldReAnimate,
            f = a.to,
            l = a.from,
            h = this.state.style
          if (u) {
            if (!o) {
              var d = { style: c ? rn({}, c, f) : f }
              this.state && h && ((c && h[c] !== f) || (!c && h !== f)) && this.setState(d)
              return
            }
            if (!(G2(i.to, f) && i.canBegin && i.isActive)) {
              var y = !i.canBegin || !i.isActive
              this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation()
              var v = y || s ? l : i.to
              if (this.state && h) {
                var p = { style: c ? rn({}, c, v) : v }
                ;((c && h[c] !== v) || (!c && h !== v)) && this.setState(p)
              }
              this.runAnimation(Ze(Ze({}, this.props), {}, { from: v, begin: 0 }))
            }
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.mounted = !1
          var i = this.props.onAnimationEnd
          this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i()
        },
      },
      {
        key: 'handleStyleChange',
        value: function (i) {
          this.changeStyle(i)
        },
      },
      {
        key: 'changeStyle',
        value: function (i) {
          this.mounted && this.setState({ style: i })
        },
      },
      {
        key: 'runJSAnimation',
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            c = i.duration,
            s = i.easing,
            f = i.begin,
            l = i.onAnimationEnd,
            h = i.onAnimationStart,
            d = $k(o, u, vk(s), c, this.changeStyle),
            y = function () {
              a.stopJSAnimation = d()
            }
          this.manager.start([h, f, y, c, l])
        },
      },
      {
        key: 'runStepAnimation',
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            c = i.onAnimationStart,
            s = o[0],
            f = s.style,
            l = s.duration,
            h = l === void 0 ? 0 : l,
            d = function (v, p, x) {
              if (x === 0) return v
              var b = p.duration,
                w = p.easing,
                g = w === void 0 ? 'ease' : w,
                m = p.style,
                O = p.properties,
                S = p.onAnimationEnd,
                A = x > 0 ? o[x - 1] : p,
                E = O || Object.keys(m)
              if (typeof g == 'function' || g === 'spring')
                return [].concat(Oo(v), [a.runJSAnimation.bind(a, { from: A.style, to: m, duration: b, easing: g }), b])
              var T = Yf(E, b, g),
                $ = Ze(Ze(Ze({}, A.style), m), {}, { transition: T })
              return [].concat(Oo(v), [$, b, S]).filter(nk)
            }
          return this.manager.start([c].concat(Oo(o.reduce(d, [f, Math.max(h, u)])), [i.onAnimationEnd]))
        },
      },
      {
        key: 'runAnimation',
        value: function (i) {
          this.manager || (this.manager = Q2())
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            c = i.to,
            s = i.easing,
            f = i.onAnimationStart,
            l = i.onAnimationEnd,
            h = i.steps,
            d = i.children,
            y = this.manager
          if (
            ((this.unSubscribe = y.subscribe(this.handleStyleChange)),
            typeof s == 'function' || typeof d == 'function' || s === 'spring')
          ) {
            this.runJSAnimation(i)
            return
          }
          if (h.length > 1) {
            this.runStepAnimation(i)
            return
          }
          var v = u ? rn({}, u, c) : c,
            p = Yf(Object.keys(v), o, s)
          y.start([f, a, Ze(Ze({}, v), {}, { transition: p }), o, l])
        },
      },
      {
        key: 'render',
        value: function () {
          var i = this.props,
            a = i.children
          i.begin
          var o = i.duration
          i.attributeName, i.easing
          var u = i.isActive
          i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart
          var c = Tk(i, Pk),
            s = N.Children.count(a),
            f = this.state.style
          if (typeof a == 'function') return a(f)
          if (!u || s === 0 || o <= 0) return a
          var l = function (d) {
            var y = d.props,
              v = y.style,
              p = v === void 0 ? {} : v,
              x = y.className,
              b = N.cloneElement(d, Ze(Ze({}, c), {}, { style: Ze(Ze({}, p), f), className: x }))
            return b
          }
          return s === 1
            ? l(N.Children.only(a))
            : _.createElement(
                'div',
                null,
                N.Children.map(a, function (h) {
                  return l(h)
                }),
              )
        },
      },
    ]),
    r
  )
})(N.PureComponent)
jt.displayName = 'Animate'
jt.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: '',
  to: '',
  attributeName: '',
  easing: 'ease',
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
}
jt.propTypes = {
  from: X.oneOfType([X.object, X.string]),
  to: X.oneOfType([X.object, X.string]),
  attributeName: X.string,
  duration: X.number,
  begin: X.number,
  easing: X.oneOfType([X.string, X.func]),
  steps: X.arrayOf(
    X.shape({
      duration: X.number.isRequired,
      style: X.object.isRequired,
      easing: X.oneOfType([X.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']), X.func]),
      properties: X.arrayOf('string'),
      onAnimationEnd: X.func,
    }),
  ),
  children: X.oneOfType([X.node, X.func]),
  isActive: X.bool,
  canBegin: X.bool,
  onAnimationEnd: X.func,
  shouldReAnimate: X.bool,
  onAnimationStart: X.func,
  onAnimationReStart: X.func,
}
X.object, X.object, X.object, X.element
X.object, X.object, X.object, X.oneOfType([X.array, X.element]), X.any
function kn(e) {
  '@babel/helpers - typeof'
  return (
    (kn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    kn(e)
  )
}
function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    ta.apply(this, arguments)
  )
}
function Wk(e, t) {
  return Hk(e) || qk(e, t) || Uk(e, t) || zk()
}
function zk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Uk(e, t) {
  if (e) {
    if (typeof e == 'string') return rh(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rh(e, t)
  }
}
function rh(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function qk(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function Hk(e) {
  if (Array.isArray(e)) return e
}
function nh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function ih(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? nh(Object(r), !0).forEach(function (n) {
          Gk(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function Gk(e, t, r) {
  return (
    (t = Kk(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function Kk(e) {
  var t = Xk(e, 'string')
  return kn(t) == 'symbol' ? t : String(t)
}
function Xk(e, t) {
  if (kn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (kn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var ah = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      c = n >= 0 ? 1 : -1,
      s = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      f
    if (o > 0 && a instanceof Array) {
      for (var l = [0, 0, 0, 0], h = 0, d = 4; h < d; h++) l[h] = a[h] > o ? o : a[h]
      ;(f = 'M'.concat(t, ',').concat(r + u * l[0])),
        l[0] > 0 &&
          (f += 'A '
            .concat(l[0], ',')
            .concat(l[0], ',0,0,')
            .concat(s, ',')
            .concat(t + c * l[0], ',')
            .concat(r)),
        (f += 'L '.concat(t + n - c * l[1], ',').concat(r)),
        l[1] > 0 &&
          (f += 'A '
            .concat(l[1], ',')
            .concat(l[1], ',0,0,')
            .concat(
              s,
              `,
        `,
            )
            .concat(t + n, ',')
            .concat(r + u * l[1])),
        (f += 'L '.concat(t + n, ',').concat(r + i - u * l[2])),
        l[2] > 0 &&
          (f += 'A '
            .concat(l[2], ',')
            .concat(l[2], ',0,0,')
            .concat(
              s,
              `,
        `,
            )
            .concat(t + n - c * l[2], ',')
            .concat(r + i)),
        (f += 'L '.concat(t + c * l[3], ',').concat(r + i)),
        l[3] > 0 &&
          (f += 'A '
            .concat(l[3], ',')
            .concat(l[3], ',0,0,')
            .concat(
              s,
              `,
        `,
            )
            .concat(t, ',')
            .concat(r + i - u * l[3])),
        (f += 'Z')
    } else if (o > 0 && a === +a && a > 0) {
      var y = Math.min(o, a)
      f = 'M '
        .concat(t, ',')
        .concat(
          r + u * y,
          `
            A `,
        )
        .concat(y, ',')
        .concat(y, ',0,0,')
        .concat(s, ',')
        .concat(t + c * y, ',')
        .concat(
          r,
          `
            L `,
        )
        .concat(t + n - c * y, ',')
        .concat(
          r,
          `
            A `,
        )
        .concat(y, ',')
        .concat(y, ',0,0,')
        .concat(s, ',')
        .concat(t + n, ',')
        .concat(
          r + u * y,
          `
            L `,
        )
        .concat(t + n, ',')
        .concat(
          r + i - u * y,
          `
            A `,
        )
        .concat(y, ',')
        .concat(y, ',0,0,')
        .concat(s, ',')
        .concat(t + n - c * y, ',')
        .concat(
          r + i,
          `
            L `,
        )
        .concat(t + c * y, ',')
        .concat(
          r + i,
          `
            A `,
        )
        .concat(y, ',')
        .concat(y, ',0,0,')
        .concat(s, ',')
        .concat(t, ',')
        .concat(r + i - u * y, ' Z')
    } else f = 'M '.concat(t, ',').concat(r, ' h ').concat(n, ' v ').concat(i, ' h ').concat(-n, ' Z')
    return f
  },
  Vk = function (t, r) {
    if (!t || !r) return !1
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      u = r.width,
      c = r.height
    if (Math.abs(u) > 0 && Math.abs(c) > 0) {
      var s = Math.min(a, a + u),
        f = Math.max(a, a + u),
        l = Math.min(o, o + c),
        h = Math.max(o, o + c)
      return n >= s && n <= f && i >= l && i <= h
    }
    return !1
  },
  Yk = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  },
  Gc = function (t) {
    var r = ih(ih({}, Yk), t),
      n = N.useRef(),
      i = N.useState(-1),
      a = Wk(i, 2),
      o = a[0],
      u = a[1]
    N.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var g = n.current.getTotalLength()
          g && u(g)
        } catch {}
    }, [])
    var c = r.x,
      s = r.y,
      f = r.width,
      l = r.height,
      h = r.radius,
      d = r.className,
      y = r.animationEasing,
      v = r.animationDuration,
      p = r.animationBegin,
      x = r.isAnimationActive,
      b = r.isUpdateAnimationActive
    if (c !== +c || s !== +s || f !== +f || l !== +l || f === 0 || l === 0) return null
    var w = ae('recharts-rectangle', d)
    return b
      ? _.createElement(
          jt,
          {
            canBegin: o > 0,
            from: { width: f, height: l, x: c, y: s },
            to: { width: f, height: l, x: c, y: s },
            duration: v,
            animationEasing: y,
            isActive: b,
          },
          function (g) {
            var m = g.width,
              O = g.height,
              S = g.x,
              A = g.y
            return _.createElement(
              jt,
              {
                canBegin: o > 0,
                from: '0px '.concat(o === -1 ? 1 : o, 'px'),
                to: ''.concat(o, 'px 0px'),
                attributeName: 'strokeDasharray',
                begin: p,
                duration: v,
                isActive: x,
                easing: y,
              },
              _.createElement('path', ta({}, re(r, !0), { className: w, d: ah(S, A, m, O, h), ref: n })),
            )
          },
        )
      : _.createElement('path', ta({}, re(r, !0), { className: w, d: ah(c, s, f, l, h) }))
  }
function Mu() {
  return (
    (Mu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Mu.apply(this, arguments)
  )
}
var Ev = function (t) {
  var r = t.cx,
    n = t.cy,
    i = t.r,
    a = t.className,
    o = ae('recharts-dot', a)
  return r === +r && n === +n && i === +i
    ? _.createElement('circle', Mu({}, re(t, !1), wi(t), { className: o, cx: r, cy: n, r: i }))
    : null
}
function Nn(e) {
  '@babel/helpers - typeof'
  return (
    (Nn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Nn(e)
  )
}
var Zk = ['x', 'y', 'top', 'left', 'width', 'height', 'className']
function Cu() {
  return (
    (Cu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Cu.apply(this, arguments)
  )
}
function oh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Jk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? oh(Object(r), !0).forEach(function (n) {
          Qk(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : oh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function Qk(e, t, r) {
  return (
    (t = eN(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function eN(e) {
  var t = tN(e, 'string')
  return Nn(t) == 'symbol' ? t : String(t)
}
function tN(e, t) {
  if (Nn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Nn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function rN(e, t) {
  if (e == null) return {}
  var r = nN(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function nN(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
var iN = function (t, r, n, i, a, o) {
    return 'M'.concat(t, ',').concat(a, 'v').concat(i, 'M').concat(o, ',').concat(r, 'h').concat(n)
  },
  aN = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      u = o === void 0 ? 0 : o,
      c = t.left,
      s = c === void 0 ? 0 : c,
      f = t.width,
      l = f === void 0 ? 0 : f,
      h = t.height,
      d = h === void 0 ? 0 : h,
      y = t.className,
      v = rN(t, Zk),
      p = Jk({ x: n, y: a, top: u, left: s, width: l, height: d }, v)
    return !F(n) || !F(a) || !F(l) || !F(d) || !F(u) || !F(s)
      ? null
      : _.createElement('path', Cu({}, re(p, !0), { className: ae('recharts-cross', y), d: iN(n, a, l, d, u, s) }))
  },
  oN = Ud,
  uN = oN(Object.getPrototypeOf, Object),
  cN = uN,
  sN = Ot,
  lN = cN,
  fN = St,
  hN = '[object Object]',
  dN = Function.prototype,
  pN = Object.prototype,
  jv = dN.toString,
  vN = pN.hasOwnProperty,
  yN = jv.call(Object)
function gN(e) {
  if (!fN(e) || sN(e) != hN) return !1
  var t = lN(e)
  if (t === null) return !0
  var r = vN.call(t, 'constructor') && t.constructor
  return typeof r == 'function' && r instanceof r && jv.call(r) == yN
}
var mN = gN
const bN = le(mN)
var xN = Ot,
  wN = St,
  ON = '[object Boolean]'
function SN(e) {
  return e === !0 || e === !1 || (wN(e) && xN(e) == ON)
}
var AN = SN
const _N = le(AN)
function Dn(e) {
  '@babel/helpers - typeof'
  return (
    (Dn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Dn(e)
  )
}
function ra() {
  return (
    (ra = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    ra.apply(this, arguments)
  )
}
function $N(e, t) {
  return jN(e) || EN(e, t) || TN(e, t) || PN()
}
function PN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function TN(e, t) {
  if (e) {
    if (typeof e == 'string') return uh(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uh(e, t)
  }
}
function uh(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function EN(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function jN(e) {
  if (Array.isArray(e)) return e
}
function ch(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function sh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? ch(Object(r), !0).forEach(function (n) {
          MN(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ch(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function MN(e, t, r) {
  return (
    (t = CN(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function CN(e) {
  var t = IN(e, 'string')
  return Dn(t) == 'symbol' ? t : String(t)
}
function IN(e, t) {
  if (Dn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Dn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var lh = function (t, r, n, i, a) {
    var o = n - i,
      u
    return (
      (u = 'M '.concat(t, ',').concat(r)),
      (u += 'L '.concat(t + n, ',').concat(r)),
      (u += 'L '.concat(t + n - o / 2, ',').concat(r + a)),
      (u += 'L '.concat(t + n - o / 2 - i, ',').concat(r + a)),
      (u += 'L '.concat(t, ',').concat(r, ' Z')),
      u
    )
  },
  kN = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  },
  NN = function (t) {
    var r = sh(sh({}, kN), t),
      n = N.useRef(),
      i = N.useState(-1),
      a = $N(i, 2),
      o = a[0],
      u = a[1]
    N.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var w = n.current.getTotalLength()
          w && u(w)
        } catch {}
    }, [])
    var c = r.x,
      s = r.y,
      f = r.upperWidth,
      l = r.lowerWidth,
      h = r.height,
      d = r.className,
      y = r.animationEasing,
      v = r.animationDuration,
      p = r.animationBegin,
      x = r.isUpdateAnimationActive
    if (c !== +c || s !== +s || f !== +f || l !== +l || h !== +h || (f === 0 && l === 0) || h === 0) return null
    var b = ae('recharts-trapezoid', d)
    return x
      ? _.createElement(
          jt,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: h, x: c, y: s },
            to: { upperWidth: f, lowerWidth: l, height: h, x: c, y: s },
            duration: v,
            animationEasing: y,
            isActive: x,
          },
          function (w) {
            var g = w.upperWidth,
              m = w.lowerWidth,
              O = w.height,
              S = w.x,
              A = w.y
            return _.createElement(
              jt,
              {
                canBegin: o > 0,
                from: '0px '.concat(o === -1 ? 1 : o, 'px'),
                to: ''.concat(o, 'px 0px'),
                attributeName: 'strokeDasharray',
                begin: p,
                duration: v,
                easing: y,
              },
              _.createElement('path', ra({}, re(r, !0), { className: b, d: lh(S, A, g, m, O), ref: n })),
            )
          },
        )
      : _.createElement('g', null, _.createElement('path', ra({}, re(r, !0), { className: b, d: lh(c, s, f, l, h) })))
  },
  DN = ['option', 'shapeType', 'propTransformer', 'activeClassName', 'isActive']
function Ln(e) {
  '@babel/helpers - typeof'
  return (
    (Ln =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Ln(e)
  )
}
function LN(e, t) {
  if (e == null) return {}
  var r = BN(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function BN(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function fh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? fh(Object(r), !0).forEach(function (n) {
          RN(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function RN(e, t, r) {
  return (
    (t = FN(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function FN(e) {
  var t = WN(e, 'string')
  return Ln(t) == 'symbol' ? t : String(t)
}
function WN(e, t) {
  if (Ln(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Ln(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function zN(e, t) {
  return na(na({}, t), e)
}
function UN(e, t) {
  return e === 'symbols'
}
function hh(e) {
  var t = e.shapeType,
    r = e.elementProps
  switch (t) {
    case 'rectangle':
      return _.createElement(Gc, r)
    case 'trapezoid':
      return _.createElement(NN, r)
    case 'sector':
      return _.createElement(gv, r)
    case 'symbols':
      if (UN(t)) return _.createElement(lc, r)
      break
    default:
      return null
  }
}
function qN(e) {
  return N.isValidElement(e) ? e.props : e
}
function HN(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    i = n === void 0 ? zN : n,
    a = e.activeClassName,
    o = a === void 0 ? 'recharts-active-shape' : a,
    u = e.isActive,
    c = LN(e, DN),
    s
  if (N.isValidElement(t)) s = N.cloneElement(t, na(na({}, c), qN(t)))
  else if (Z(t)) s = t(c)
  else if (bN(t) && !_N(t)) {
    var f = i(t, c)
    s = _.createElement(hh, { shapeType: r, elementProps: f })
  } else {
    var l = c
    s = _.createElement(hh, { shapeType: r, elementProps: l })
  }
  return u ? _.createElement(Se, { className: o }, s) : s
}
function Ga(e, t) {
  return t != null && 'trapezoids' in e.props
}
function Ka(e, t) {
  return t != null && 'sectors' in e.props
}
function Bn(e, t) {
  return t != null && 'points' in e.props
}
function GN(e, t) {
  var r,
    n,
    i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x,
    a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y
  return i && a
}
function KN(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle
  return r && n
}
function XN(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    i = e.z === t.z
  return r && n && i
}
function VN(e, t) {
  var r
  return Ga(e, t) ? (r = GN) : Ka(e, t) ? (r = KN) : Bn(e, t) && (r = XN), r
}
function YN(e, t) {
  var r
  return Ga(e, t) ? (r = 'trapezoids') : Ka(e, t) ? (r = 'sectors') : Bn(e, t) && (r = 'points'), r
}
function ZN(e, t) {
  if (Ga(e, t)) {
    var r
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload
  }
  if (Ka(e, t)) {
    var n
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload
  }
  return Bn(e, t) ? t.payload : {}
}
function JN(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    i = YN(r, t),
    a = ZN(r, t),
    o = n.filter(function (c, s) {
      var f = zc(a, c),
        l = r.props[i].filter(function (y) {
          var v = VN(r, t)
          return v(y, t)
        }),
        h = r.props[i].indexOf(l[l.length - 1]),
        d = s === h
      return f && d
    }),
    u = n.indexOf(o[o.length - 1])
  return u
}
var QN = Math.ceil,
  eD = Math.max
function tD(e, t, r, n) {
  for (var i = -1, a = eD(QN((t - e) / (r || 1)), 0), o = Array(a); a--; ) (o[n ? a : ++i] = e), (e += r)
  return o
}
var rD = tD,
  nD = sp,
  dh = 1 / 0,
  iD = 17976931348623157e292
function aD(e) {
  if (!e) return e === 0 ? e : 0
  if (((e = nD(e)), e === dh || e === -dh)) {
    var t = e < 0 ? -1 : 1
    return t * iD
  }
  return e === e ? e : 0
}
var Mv = aD,
  oD = rD,
  uD = ka,
  So = Mv
function cD(e) {
  return function (t, r, n) {
    return (
      n && typeof n != 'number' && uD(t, r, n) && (r = n = void 0),
      (t = So(t)),
      r === void 0 ? ((r = t), (t = 0)) : (r = So(r)),
      (n = n === void 0 ? (t < r ? 1 : -1) : So(n)),
      oD(t, r, n, e)
    )
  }
}
var sD = cD,
  lD = sD,
  fD = lD(),
  hD = fD
const ia = le(hD)
function Rn(e) {
  '@babel/helpers - typeof'
  return (
    (Rn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Rn(e)
  )
}
function ph(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function vh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? ph(Object(r), !0).forEach(function (n) {
          Cv(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ph(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function Cv(e, t, r) {
  return (
    (t = dD(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function dD(e) {
  var t = pD(e, 'string')
  return Rn(t) == 'symbol' ? t : String(t)
}
function pD(e, t) {
  if (Rn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Rn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var vD = ['Webkit', 'Moz', 'O', 'ms'],
  yD = function (t, r) {
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase()
      }),
      i = vD.reduce(function (a, o) {
        return vh(vh({}, a), {}, Cv({}, o + n, r))
      }, {})
    return (i[t] = r), i
  }
function Pr(e) {
  '@babel/helpers - typeof'
  return (
    (Pr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Pr(e)
  )
}
function aa() {
  return (
    (aa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    aa.apply(this, arguments)
  )
}
function yh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? yh(Object(r), !0).forEach(function (n) {
          Re(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function gD(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function gh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, kv(n.key), n)
  }
}
function mD(e, t, r) {
  return t && gh(e.prototype, t), r && gh(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function bD(e, t, r) {
  return (t = oa(t)), xD(e, Iv() ? Reflect.construct(t, r || [], oa(e).constructor) : t.apply(e, r))
}
function xD(e, t) {
  if (t && (Pr(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return nt(e)
}
function Iv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
  } catch {}
  return (Iv = function () {
    return !!e
  })()
}
function oa(e) {
  return (
    (oa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    oa(e)
  )
}
function nt(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function wD(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Iu(e, t)
}
function Iu(e, t) {
  return (
    (Iu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    Iu(e, t)
  )
}
function Re(e, t, r) {
  return (
    (t = kv(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function kv(e) {
  var t = OD(e, 'string')
  return Pr(t) == 'symbol' ? t : String(t)
}
function OD(e, t) {
  if (Pr(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Pr(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var SD = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      u = t.travellerWidth
    if (!r || !r.length) return {}
    var c = r.length,
      s = on()
        .domain(ia(0, c))
        .range([a, a + o - u]),
      f = s.domain().map(function (l) {
        return s(l)
      })
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: s(n),
      endX: s(i),
      scale: s,
      scaleValues: f,
    }
  },
  mh = function (t) {
    return t.changedTouches && !!t.changedTouches.length
  },
  Tr = (function (e) {
    wD(t, e)
    function t(r) {
      var n
      return (
        gD(this, t),
        (n = bD(this, t, [r])),
        Re(nt(n), 'handleDrag', function (i) {
          n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i)
        }),
        Re(nt(n), 'handleTouchMove', function (i) {
          i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0])
        }),
        Re(nt(n), 'handleDragEnd', function () {
          n.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var i = n.props,
              a = i.endIndex,
              o = i.onDragEnd,
              u = i.startIndex
            o == null || o({ endIndex: a, startIndex: u })
          }),
            n.detachDragEndListener()
        }),
        Re(nt(n), 'handleLeaveWrapper', function () {
          ;(n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut))
        }),
        Re(nt(n), 'handleEnterSlideOrTraveller', function () {
          n.setState({ isTextActive: !0 })
        }),
        Re(nt(n), 'handleLeaveSlideOrTraveller', function () {
          n.setState({ isTextActive: !1 })
        }),
        Re(nt(n), 'handleSlideDragStart', function (i) {
          var a = mh(i) ? i.changedTouches[0] : i
          n.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: a.pageX }), n.attachDragEndListener()
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(nt(n), 'startX'),
          endX: n.handleTravellerDragStart.bind(nt(n), 'endX'),
        }),
        (n.state = {}),
        n
      )
    }
    return (
      mD(
        t,
        [
          {
            key: 'componentWillUnmount',
            value: function () {
              this.leaveTimer && (clearTimeout(this.leaveTimer), (this.leaveTimer = null)), this.detachDragEndListener()
            },
          },
          {
            key: 'getIndex',
            value: function (n) {
              var i = n.startX,
                a = n.endX,
                o = this.state.scaleValues,
                u = this.props,
                c = u.gap,
                s = u.data,
                f = s.length - 1,
                l = Math.min(i, a),
                h = Math.max(i, a),
                d = t.getIndexInRange(o, l),
                y = t.getIndexInRange(o, h)
              return { startIndex: d - (d % c), endIndex: y === f ? f : y - (y % c) }
            },
          },
          {
            key: 'getTextOfTick',
            value: function (n) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                u = i.dataKey,
                c = st(a[n], u, n)
              return Z(o) ? o(c, n) : c
            },
          },
          {
            key: 'attachDragEndListener',
            value: function () {
              window.addEventListener('mouseup', this.handleDragEnd, !0),
                window.addEventListener('touchend', this.handleDragEnd, !0),
                window.addEventListener('mousemove', this.handleDrag, !0)
            },
          },
          {
            key: 'detachDragEndListener',
            value: function () {
              window.removeEventListener('mouseup', this.handleDragEnd, !0),
                window.removeEventListener('touchend', this.handleDragEnd, !0),
                window.removeEventListener('mousemove', this.handleDrag, !0)
            },
          },
          {
            key: 'handleSlideDrag',
            value: function (n) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                u = i.endX,
                c = this.props,
                s = c.x,
                f = c.width,
                l = c.travellerWidth,
                h = c.startIndex,
                d = c.endIndex,
                y = c.onChange,
                v = n.pageX - a
              v > 0 ? (v = Math.min(v, s + f - l - u, s + f - l - o)) : v < 0 && (v = Math.max(v, s - o, s - u))
              var p = this.getIndex({ startX: o + v, endX: u + v })
              ;(p.startIndex !== h || p.endIndex !== d) && y && y(p),
                this.setState({ startX: o + v, endX: u + v, slideMoveStartX: n.pageX })
            },
          },
          {
            key: 'handleTravellerDragStart',
            value: function (n, i) {
              var a = mh(i) ? i.changedTouches[0] : i
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener()
            },
          },
          {
            key: 'handleTravellerMove',
            value: function (n) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                u = i.endX,
                c = i.startX,
                s = this.state[o],
                f = this.props,
                l = f.x,
                h = f.width,
                d = f.travellerWidth,
                y = f.onChange,
                v = f.gap,
                p = f.data,
                x = { startX: this.state.startX, endX: this.state.endX },
                b = n.pageX - a
              b > 0 ? (b = Math.min(b, l + h - d - s)) : b < 0 && (b = Math.max(b, l - s)), (x[o] = s + b)
              var w = this.getIndex(x),
                g = w.startIndex,
                m = w.endIndex,
                O = function () {
                  var A = p.length - 1
                  return (
                    (o === 'startX' && (u > c ? g % v === 0 : m % v === 0)) ||
                    (u < c && m === A) ||
                    (o === 'endX' && (u > c ? m % v === 0 : g % v === 0)) ||
                    (u > c && m === A)
                  )
                }
              this.setState(Re(Re({}, o, s + b), 'brushMoveStartX', n.pageX), function () {
                y && O() && y(w)
              })
            },
          },
          {
            key: 'handleTravellerMoveKeyboard',
            value: function (n, i) {
              var a = this,
                o = this.state,
                u = o.scaleValues,
                c = o.startX,
                s = o.endX,
                f = this.state[i],
                l = u.indexOf(f)
              if (l !== -1) {
                var h = l + n
                if (!(h === -1 || h >= u.length)) {
                  var d = u[h]
                  ;(i === 'startX' && d >= s) ||
                    (i === 'endX' && d <= c) ||
                    this.setState(Re({}, i, d), function () {
                      a.props.onChange(a.getIndex({ startX: a.state.startX, endX: a.state.endX }))
                    })
                }
              }
            },
          },
          {
            key: 'renderBackground',
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.fill,
                s = n.stroke
              return _.createElement('rect', { stroke: s, fill: c, x: i, y: a, width: o, height: u })
            },
          },
          {
            key: 'renderPanorama',
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.data,
                s = n.children,
                f = n.padding,
                l = N.Children.only(s)
              return l ? _.cloneElement(l, { x: i, y: a, width: o, height: u, margin: f, compact: !0, data: c }) : null
            },
          },
          {
            key: 'renderTravellerLayer',
            value: function (n, i) {
              var a,
                o,
                u = this,
                c = this.props,
                s = c.y,
                f = c.travellerWidth,
                l = c.height,
                h = c.traveller,
                d = c.ariaLabel,
                y = c.data,
                v = c.startIndex,
                p = c.endIndex,
                x = Math.max(n, this.props.x),
                b = Ao(Ao({}, re(this.props, !1)), {}, { x, y: s, width: f, height: l }),
                w =
                  d ||
                  'Min value: '
                    .concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ', Max value: ')
                    .concat((o = y[p]) === null || o === void 0 ? void 0 : o.name)
              return _.createElement(
                Se,
                {
                  tabIndex: 0,
                  role: 'slider',
                  'aria-label': w,
                  'aria-valuenow': n,
                  className: 'recharts-brush-traveller',
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  onKeyDown: function (m) {
                    ;['ArrowLeft', 'ArrowRight'].includes(m.key) &&
                      (m.preventDefault(),
                      m.stopPropagation(),
                      u.handleTravellerMoveKeyboard(m.key === 'ArrowRight' ? 1 : -1, i))
                  },
                  onFocus: function () {
                    u.setState({ isTravellerFocused: !0 })
                  },
                  onBlur: function () {
                    u.setState({ isTravellerFocused: !1 })
                  },
                  style: { cursor: 'col-resize' },
                },
                t.renderTraveller(h, b),
              )
            },
          },
          {
            key: 'renderSlide',
            value: function (n, i) {
              var a = this.props,
                o = a.y,
                u = a.height,
                c = a.stroke,
                s = a.travellerWidth,
                f = Math.min(n, i) + s,
                l = Math.max(Math.abs(i - n) - s, 0)
              return _.createElement('rect', {
                className: 'recharts-brush-slide',
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: 'move' },
                stroke: 'none',
                fill: c,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: l,
                height: u,
              })
            },
          },
          {
            key: 'renderText',
            value: function () {
              var n = this.props,
                i = n.startIndex,
                a = n.endIndex,
                o = n.y,
                u = n.height,
                c = n.travellerWidth,
                s = n.stroke,
                f = this.state,
                l = f.startX,
                h = f.endX,
                d = 5,
                y = { pointerEvents: 'none', fill: s }
              return _.createElement(
                Se,
                { className: 'recharts-brush-texts' },
                _.createElement(
                  Di,
                  aa({ textAnchor: 'end', verticalAnchor: 'middle', x: Math.min(l, h) - d, y: o + u / 2 }, y),
                  this.getTextOfTick(i),
                ),
                _.createElement(
                  Di,
                  aa({ textAnchor: 'start', verticalAnchor: 'middle', x: Math.max(l, h) + c + d, y: o + u / 2 }, y),
                  this.getTextOfTick(a),
                ),
              )
            },
          },
          {
            key: 'render',
            value: function () {
              var n = this.props,
                i = n.data,
                a = n.className,
                o = n.children,
                u = n.x,
                c = n.y,
                s = n.width,
                f = n.height,
                l = n.alwaysShowText,
                h = this.state,
                d = h.startX,
                y = h.endX,
                v = h.isTextActive,
                p = h.isSlideMoving,
                x = h.isTravellerMoving,
                b = h.isTravellerFocused
              if (!i || !i.length || !F(u) || !F(c) || !F(s) || !F(f) || s <= 0 || f <= 0) return null
              var w = ae('recharts-brush', a),
                g = _.Children.count(o) === 1,
                m = yD('userSelect', 'none')
              return _.createElement(
                Se,
                { className: w, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: m },
                this.renderBackground(),
                g && this.renderPanorama(),
                this.renderSlide(d, y),
                this.renderTravellerLayer(d, 'startX'),
                this.renderTravellerLayer(y, 'endX'),
                (v || p || x || b || l) && this.renderText(),
              )
            },
          },
        ],
        [
          {
            key: 'renderDefaultTraveller',
            value: function (n) {
              var i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.stroke,
                s = Math.floor(a + u / 2) - 1
              return _.createElement(
                _.Fragment,
                null,
                _.createElement('rect', { x: i, y: a, width: o, height: u, fill: c, stroke: 'none' }),
                _.createElement('line', { x1: i + 1, y1: s, x2: i + o - 1, y2: s, fill: 'none', stroke: '#fff' }),
                _.createElement('line', {
                  x1: i + 1,
                  y1: s + 2,
                  x2: i + o - 1,
                  y2: s + 2,
                  fill: 'none',
                  stroke: '#fff',
                }),
              )
            },
          },
          {
            key: 'renderTraveller',
            value: function (n, i) {
              var a
              return (
                _.isValidElement(n)
                  ? (a = _.cloneElement(n, i))
                  : Z(n)
                    ? (a = n(i))
                    : (a = t.renderDefaultTraveller(i)),
                a
              )
            },
          },
          {
            key: 'getDerivedStateFromProps',
            value: function (n, i) {
              var a = n.data,
                o = n.width,
                u = n.x,
                c = n.travellerWidth,
                s = n.updateId,
                f = n.startIndex,
                l = n.endIndex
              if (a !== i.prevData || s !== i.prevUpdateId)
                return Ao(
                  { prevData: a, prevTravellerWidth: c, prevUpdateId: s, prevX: u, prevWidth: o },
                  a && a.length
                    ? SD({ data: a, width: o, x: u, travellerWidth: c, startIndex: f, endIndex: l })
                    : { scale: null, scaleValues: null },
                )
              if (i.scale && (o !== i.prevWidth || u !== i.prevX || c !== i.prevTravellerWidth)) {
                i.scale.range([u, u + o - c])
                var h = i.scale.domain().map(function (d) {
                  return i.scale(d)
                })
                return {
                  prevData: a,
                  prevTravellerWidth: c,
                  prevUpdateId: s,
                  prevX: u,
                  prevWidth: o,
                  startX: i.scale(n.startIndex),
                  endX: i.scale(n.endIndex),
                  scaleValues: h,
                }
              }
              return null
            },
          },
          {
            key: 'getIndexInRange',
            value: function (n, i) {
              for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
                var c = Math.floor((o + u) / 2)
                n[c] > i ? (u = c) : (o = c)
              }
              return i >= n[u] ? u : o
            },
          },
        ],
      ),
      t
    )
  })(N.PureComponent)
Re(Tr, 'displayName', 'Brush')
Re(Tr, 'defaultProps', {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: '#fff',
  stroke: '#666',
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
})
var AD = gc
function _D(e, t) {
  var r
  return (
    AD(e, function (n, i, a) {
      return (r = t(n, i, a)), !r
    }),
    !!r
  )
}
var $D = _D,
  PD = Nd,
  TD = Ct,
  ED = $D,
  jD = Le,
  MD = ka
function CD(e, t, r) {
  var n = jD(e) ? PD : ED
  return r && MD(e, t, r) && (t = void 0), n(e, TD(t))
}
var ID = CD
const kD = le(ID)
var ut = function (t, r) {
    var n = t.alwaysShow,
      i = t.ifOverflow
    return n && (i = 'extendDomain'), i === r
  },
  bh = ip
function ND(e, t, r) {
  t == '__proto__' && bh ? bh(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r)
}
var DD = ND,
  LD = DD,
  BD = rp,
  RD = Ct
function FD(e, t) {
  var r = {}
  return (
    (t = RD(t)),
    BD(e, function (n, i, a) {
      LD(r, i, t(n, i, a))
    }),
    r
  )
}
var WD = FD
const zD = le(WD)
function UD(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (!t(e[r], r, e)) return !1
  return !0
}
var qD = UD,
  HD = gc
function GD(e, t) {
  var r = !0
  return (
    HD(e, function (n, i, a) {
      return (r = !!t(n, i, a)), r
    }),
    r
  )
}
var KD = GD,
  XD = qD,
  VD = KD,
  YD = Ct,
  ZD = Le,
  JD = ka
function QD(e, t, r) {
  var n = ZD(e) ? XD : VD
  return r && JD(e, t, r) && (t = void 0), n(e, YD(t))
}
var eL = QD
const Nv = le(eL)
var tL = ['x', 'y']
function Fn(e) {
  '@babel/helpers - typeof'
  return (
    (Fn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Fn(e)
  )
}
function ku() {
  return (
    (ku = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    ku.apply(this, arguments)
  )
}
function xh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function tn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? xh(Object(r), !0).forEach(function (n) {
          rL(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function rL(e, t, r) {
  return (
    (t = nL(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function nL(e) {
  var t = iL(e, 'string')
  return Fn(t) == 'symbol' ? t : String(t)
}
function iL(e, t) {
  if (Fn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Fn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function aL(e, t) {
  if (e == null) return {}
  var r = oL(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function oL(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function uL(e, t) {
  var r = e.x,
    n = e.y,
    i = aL(e, tL),
    a = ''.concat(r),
    o = parseInt(a, 10),
    u = ''.concat(n),
    c = parseInt(u, 10),
    s = ''.concat(t.height || i.height),
    f = parseInt(s, 10),
    l = ''.concat(t.width || i.width),
    h = parseInt(l, 10)
  return tn(
    tn(tn(tn(tn({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: f, width: h, name: t.name, radius: t.radius },
  )
}
function wh(e) {
  return _.createElement(
    HN,
    ku({ shapeType: 'rectangle', propTransformer: uL, activeClassName: 'recharts-active-bar' }, e),
  )
}
var cL = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
    return function (n, i) {
      if (typeof t == 'number') return t
      var a = typeof n == 'number'
      return a ? t(n, i) : (a || Yt(!1), r)
    }
  },
  sL = ['value', 'background'],
  Dv
function Er(e) {
  '@babel/helpers - typeof'
  return (
    (Er =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Er(e)
  )
}
function lL(e, t) {
  if (e == null) return {}
  var r = fL(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function fL(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function ua() {
  return (
    (ua = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    ua.apply(this, arguments)
  )
}
function Oh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Oh(Object(r), !0).forEach(function (n) {
          Pt(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Oh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function hL(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Sh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Bv(n.key), n)
  }
}
function dL(e, t, r) {
  return t && Sh(e.prototype, t), r && Sh(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function pL(e, t, r) {
  return (t = ca(t)), vL(e, Lv() ? Reflect.construct(t, r || [], ca(e).constructor) : t.apply(e, r))
}
function vL(e, t) {
  if (t && (Er(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return nn(e)
}
function Lv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
  } catch {}
  return (Lv = function () {
    return !!e
  })()
}
function ca(e) {
  return (
    (ca = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    ca(e)
  )
}
function nn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function yL(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Nu(e, t)
}
function Nu(e, t) {
  return (
    (Nu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    Nu(e, t)
  )
}
function Pt(e, t, r) {
  return (
    (t = Bv(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function Bv(e) {
  var t = gL(e, 'string')
  return Er(t) == 'symbol' ? t : String(t)
}
function gL(e, t) {
  if (Er(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Er(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var nr = (function (e) {
  yL(t, e)
  function t() {
    var r
    hL(this, t)
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
    return (
      (r = pL(this, t, [].concat(i))),
      Pt(nn(r), 'state', { isAnimationFinished: !1 }),
      Pt(nn(r), 'id', Pa('recharts-bar-')),
      Pt(nn(r), 'handleAnimationEnd', function () {
        var o = r.props.onAnimationEnd
        r.setState({ isAnimationFinished: !0 }), o && o()
      }),
      Pt(nn(r), 'handleAnimationStart', function () {
        var o = r.props.onAnimationStart
        r.setState({ isAnimationFinished: !1 }), o && o()
      }),
      r
    )
  }
  return (
    dL(
      t,
      [
        {
          key: 'renderRectanglesStatically',
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.shape,
              u = a.dataKey,
              c = a.activeIndex,
              s = a.activeBar,
              f = re(this.props, !1)
            return (
              n &&
              n.map(function (l, h) {
                var d = h === c,
                  y = d ? s : o,
                  v = we(
                    we(we({}, f), l),
                    {},
                    {
                      isActive: d,
                      option: y,
                      index: h,
                      dataKey: u,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    },
                  )
                return _.createElement(
                  Se,
                  ua({ className: 'recharts-bar-rectangle' }, Oi(i.props, l, h), {
                    key: 'rectangle-'
                      .concat(l == null ? void 0 : l.x, '-')
                      .concat(l == null ? void 0 : l.y, '-')
                      .concat(l == null ? void 0 : l.value),
                  }),
                  _.createElement(wh, v),
                )
              })
            )
          },
        },
        {
          key: 'renderRectanglesWithAnimation',
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              u = i.isAnimationActive,
              c = i.animationBegin,
              s = i.animationDuration,
              f = i.animationEasing,
              l = i.animationId,
              h = this.state.prevData
            return _.createElement(
              jt,
              {
                begin: c,
                duration: s,
                isActive: u,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: 'bar-'.concat(l),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (d) {
                var y = d.t,
                  v = a.map(function (p, x) {
                    var b = h && h[x]
                    if (b) {
                      var w = ir(b.x, p.x),
                        g = ir(b.y, p.y),
                        m = ir(b.width, p.width),
                        O = ir(b.height, p.height)
                      return we(we({}, p), {}, { x: w(y), y: g(y), width: m(y), height: O(y) })
                    }
                    if (o === 'horizontal') {
                      var S = ir(0, p.height),
                        A = S(y)
                      return we(we({}, p), {}, { y: p.y + p.height - A, height: A })
                    }
                    var E = ir(0, p.width),
                      T = E(y)
                    return we(we({}, p), {}, { width: T })
                  })
                return _.createElement(Se, null, n.renderRectanglesStatically(v))
              },
            )
          },
        },
        {
          key: 'renderRectangles',
          value: function () {
            var n = this.props,
              i = n.data,
              a = n.isAnimationActive,
              o = this.state.prevData
            return a && i && i.length && (!o || !zc(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i)
          },
        },
        {
          key: 'renderBackground',
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              u = i.activeIndex,
              c = re(this.props.background, !1)
            return a.map(function (s, f) {
              s.value
              var l = s.background,
                h = lL(s, sL)
              if (!l) return null
              var d = we(
                we(we(we(we({}, h), {}, { fill: '#eee' }, l), c), Oi(n.props, s, f)),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  key: 'background-bar-'.concat(f),
                  className: 'recharts-bar-background-rectangle',
                },
              )
              return _.createElement(wh, ua({ option: n.props.background, isActive: f === u }, d))
            })
          },
        },
        {
          key: 'renderErrorBar',
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null
            var a = this.props,
              o = a.data,
              u = a.xAxis,
              c = a.yAxis,
              s = a.layout,
              f = a.children,
              l = tt(f, Ha)
            if (!l) return null
            var h = s === 'vertical' ? o[0].height / 2 : o[0].width / 2,
              d = function (p, x) {
                var b = Array.isArray(p.value) ? p.value[1] : p.value
                return { x: p.x, y: p.y, value: b, errorVal: st(p, x) }
              },
              y = { clipPath: n ? 'url(#clipPath-'.concat(i, ')') : null }
            return _.createElement(
              Se,
              y,
              l.map(function (v) {
                return _.cloneElement(v, {
                  key: 'error-bar-'.concat(i, '-').concat(v.props.dataKey),
                  data: o,
                  xAxis: u,
                  yAxis: c,
                  layout: s,
                  offset: h,
                  dataPointFormatter: d,
                })
              }),
            )
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this.props,
              i = n.hide,
              a = n.data,
              o = n.className,
              u = n.xAxis,
              c = n.yAxis,
              s = n.left,
              f = n.top,
              l = n.width,
              h = n.height,
              d = n.isAnimationActive,
              y = n.background,
              v = n.id
            if (i || !a || !a.length) return null
            var p = this.state.isAnimationFinished,
              x = ae('recharts-bar', o),
              b = u && u.allowDataOverflow,
              w = c && c.allowDataOverflow,
              g = b || w,
              m = ie(v) ? this.id : v
            return _.createElement(
              Se,
              { className: x },
              b || w
                ? _.createElement(
                    'defs',
                    null,
                    _.createElement(
                      'clipPath',
                      { id: 'clipPath-'.concat(m) },
                      _.createElement('rect', {
                        x: b ? s : s - l / 2,
                        y: w ? f : f - h / 2,
                        width: b ? l : l * 2,
                        height: w ? h : h * 2,
                      }),
                    ),
                  )
                : null,
              _.createElement(
                Se,
                { className: 'recharts-bar-rectangles', clipPath: g ? 'url(#clipPath-'.concat(m, ')') : null },
                y ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(g, m),
              (!d || p) && Vt.renderCallByParent(this.props, a),
            )
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData }
              : n.data !== i.curData
                ? { curData: n.data }
                : null
          },
        },
      ],
    ),
    t
  )
})(N.PureComponent)
Dv = nr
Pt(nr, 'displayName', 'Bar')
Pt(nr, 'defaultProps', {
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'rect',
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: 'vertical',
  activeBar: !1,
  isAnimationActive: !Tt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
})
Pt(nr, 'getComposedData', function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    i = e.bandSize,
    a = e.xAxis,
    o = e.yAxis,
    u = e.xAxisTicks,
    c = e.yAxisTicks,
    s = e.stackedData,
    f = e.dataStartIndex,
    l = e.displayedData,
    h = e.offset,
    d = aI(n, r)
  if (!d) return null
  var y = t.layout,
    v = r.props,
    p = v.dataKey,
    x = v.children,
    b = v.minPointSize,
    w = y === 'horizontal' ? o : a,
    g = s ? w.scale.domain() : null,
    m = dI({ numericAxis: w }),
    O = tt(x, fp),
    S = l.map(function (A, E) {
      var T, $, P, M, j, D
      s ? (T = oI(s[f + E], g)) : ((T = st(A, p)), Array.isArray(T) || (T = [m, T]))
      var I = cL(b, Dv.defaultProps.minPointSize)(T[1], E)
      if (y === 'horizontal') {
        var L,
          B = [o.scale(T[0]), o.scale(T[1])],
          U = B[0],
          G = B[1]
        ;($ = wf({ axis: a, ticks: u, bandSize: i, offset: d.offset, entry: A, index: E })),
          (P = (L = G ?? U) !== null && L !== void 0 ? L : void 0),
          (M = d.size)
        var V = U - G
        if (
          ((j = Number.isNaN(V) ? 0 : V),
          (D = { x: $, y: o.y, width: M, height: o.height }),
          Math.abs(I) > 0 && Math.abs(j) < Math.abs(I))
        ) {
          var q = et(j || I) * (Math.abs(I) - Math.abs(j))
          ;(P -= q), (j += q)
        }
      } else {
        var J = [a.scale(T[0]), a.scale(T[1])],
          $e = J[0],
          ke = J[1]
        if (
          (($ = $e),
          (P = wf({ axis: o, ticks: c, bandSize: i, offset: d.offset, entry: A, index: E })),
          (M = ke - $e),
          (j = d.size),
          (D = { x: a.x, y: P, width: a.width, height: j }),
          Math.abs(I) > 0 && Math.abs(M) < Math.abs(I))
        ) {
          var Dt = et(M || I) * (Math.abs(I) - Math.abs(M))
          M += Dt
        }
      }
      return we(
        we(
          we({}, A),
          {},
          { x: $, y: P, width: M, height: j, value: s ? T : T[1], payload: A, background: D },
          O && O[E] && O[E].props,
        ),
        {},
        { tooltipPayload: [pv(r, A)], tooltipPosition: { x: $ + M / 2, y: P + j / 2 } },
      )
    })
  return we({ data: S, layout: y }, h)
})
function Wn(e) {
  '@babel/helpers - typeof'
  return (
    (Wn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Wn(e)
  )
}
function mL(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Ah(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Rv(n.key), n)
  }
}
function bL(e, t, r) {
  return t && Ah(e.prototype, t), r && Ah(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function _h(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? _h(Object(r), !0).forEach(function (n) {
          Xa(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _h(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function Xa(e, t, r) {
  return (
    (t = Rv(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function Rv(e) {
  var t = xL(e, 'string')
  return Wn(t) == 'symbol' ? t : String(t)
}
function xL(e, t) {
  if (Wn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Wn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var wL = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      c = t.layout,
      s = t.children,
      f = Object.keys(r),
      l = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      h = !!Fe(s, nr)
    return f.reduce(function (d, y) {
      var v = r[y],
        p = v.orientation,
        x = v.domain,
        b = v.padding,
        w = b === void 0 ? {} : b,
        g = v.mirror,
        m = v.reversed,
        O = ''.concat(p).concat(g ? 'Mirror' : ''),
        S,
        A,
        E,
        T,
        $
      if (v.type === 'number' && (v.padding === 'gap' || v.padding === 'no-gap')) {
        var P = x[1] - x[0],
          M = 1 / 0,
          j = v.categoricalDomain.sort()
        if (
          (j.forEach(function ($e, ke) {
            ke > 0 && (M = Math.min(($e || 0) - (j[ke - 1] || 0), M))
          }),
          Number.isFinite(M))
        ) {
          var D = M / P,
            I = v.layout === 'vertical' ? n.height : n.width
          if ((v.padding === 'gap' && (S = (D * I) / 2), v.padding === 'no-gap')) {
            var L = Zt(t.barCategoryGap, D * I),
              B = (D * I) / 2
            S = B - L - ((B - L) / I) * L
          }
        }
      }
      i === 'xAxis'
        ? (A = [n.left + (w.left || 0) + (S || 0), n.left + n.width - (w.right || 0) - (S || 0)])
        : i === 'yAxis'
          ? (A =
              c === 'horizontal'
                ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)]
                : [n.top + (w.top || 0) + (S || 0), n.top + n.height - (w.bottom || 0) - (S || 0)])
          : (A = v.range),
        m && (A = [A[1], A[0]])
      var U = nI(v, a, h),
        G = U.scale,
        V = U.realScaleType
      G.domain(x).range(A), iI(G)
      var q = hI(G, Je(Je({}, v), {}, { realScaleType: V }))
      i === 'xAxis'
        ? (($ = (p === 'top' && !g) || (p === 'bottom' && g)), (E = n.left), (T = l[O] - $ * v.height))
        : i === 'yAxis' && (($ = (p === 'left' && !g) || (p === 'right' && g)), (E = l[O] - $ * v.width), (T = n.top))
      var J = Je(
        Je(Je({}, v), q),
        {},
        {
          realScaleType: V,
          x: E,
          y: T,
          scale: G,
          width: i === 'xAxis' ? n.width : v.width,
          height: i === 'yAxis' ? n.height : v.height,
        },
      )
      return (
        (J.bandSize = Vi(J, q)),
        !v.hide && i === 'xAxis' ? (l[O] += ($ ? -1 : 1) * J.height) : v.hide || (l[O] += ($ ? -1 : 1) * J.width),
        Je(Je({}, d), {}, Xa({}, y, J))
      )
    }, {})
  },
  Fv = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y
    return { x: Math.min(n, a), y: Math.min(i, o), width: Math.abs(a - n), height: Math.abs(o - i) }
  },
  OL = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2
    return Fv({ x: r, y: n }, { x: i, y: a })
  },
  Wv = (function () {
    function e(t) {
      mL(this, e), (this.scale = t)
    }
    return (
      bL(
        e,
        [
          {
            key: 'domain',
            get: function () {
              return this.scale.domain
            },
          },
          {
            key: 'range',
            get: function () {
              return this.scale.range
            },
          },
          {
            key: 'rangeMin',
            get: function () {
              return this.range()[0]
            },
          },
          {
            key: 'rangeMax',
            get: function () {
              return this.range()[1]
            },
          },
          {
            key: 'bandwidth',
            get: function () {
              return this.scale.bandwidth
            },
          },
          {
            key: 'apply',
            value: function (r) {
              var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                i = n.bandAware,
                a = n.position
              if (r !== void 0) {
                if (a)
                  switch (a) {
                    case 'start':
                      return this.scale(r)
                    case 'middle': {
                      var o = this.bandwidth ? this.bandwidth() / 2 : 0
                      return this.scale(r) + o
                    }
                    case 'end': {
                      var u = this.bandwidth ? this.bandwidth() : 0
                      return this.scale(r) + u
                    }
                    default:
                      return this.scale(r)
                  }
                if (i) {
                  var c = this.bandwidth ? this.bandwidth() / 2 : 0
                  return this.scale(r) + c
                }
                return this.scale(r)
              }
            },
          },
          {
            key: 'isInRange',
            value: function (r) {
              var n = this.range(),
                i = n[0],
                a = n[n.length - 1]
              return i <= a ? r >= i && r <= a : r >= a && r <= i
            },
          },
        ],
        [
          {
            key: 'create',
            value: function (r) {
              return new e(r)
            },
          },
        ],
      ),
      e
    )
  })()
Xa(Wv, 'EPS', 1e-4)
var Kc = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return Je(Je({}, n), {}, Xa({}, i, Wv.create(t[i])))
  }, {})
  return Je(
    Je({}, r),
    {},
    {
      apply: function (i) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position
        return zD(i, function (c, s) {
          return r[s].apply(c, { bandAware: o, position: u })
        })
      },
      isInRange: function (i) {
        return Nv(i, function (a, o) {
          return r[o].isInRange(a)
        })
      },
    },
  )
}
function SL(e) {
  return ((e % 180) + 180) % 180
}
var AL = function (t) {
    var r = t.width,
      n = t.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = SL(i),
      o = (a * Math.PI) / 180,
      u = Math.atan(n / r),
      c = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o)
    return Math.abs(c)
  },
  _L = Ct,
  $L = Zn,
  PL = Ca
function TL(e) {
  return function (t, r, n) {
    var i = Object(t)
    if (!$L(t)) {
      var a = _L(r)
      ;(t = PL(t)),
        (r = function (u) {
          return a(i[u], u, i)
        })
    }
    var o = e(t, r, n)
    return o > -1 ? i[a ? t[o] : o] : void 0
  }
}
var EL = TL,
  jL = Mv
function ML(e) {
  var t = jL(e),
    r = t % 1
  return t === t ? (r ? t - r : t) : 0
}
var CL = ML,
  IL = Vd,
  kL = Ct,
  NL = CL,
  DL = Math.max
function LL(e, t, r) {
  var n = e == null ? 0 : e.length
  if (!n) return -1
  var i = r == null ? 0 : NL(r)
  return i < 0 && (i = DL(n + i, 0)), IL(e, kL(t), i)
}
var BL = LL,
  RL = EL,
  FL = BL,
  WL = RL(FL),
  zL = WL
const UL = le(zL)
var qL = Zm(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height }
    },
    function (e) {
      return ['l', e.left, 't', e.top, 'w', e.width, 'h', e.height].join('')
    },
  ),
  Xc = N.createContext(void 0),
  Vc = N.createContext(void 0),
  zv = N.createContext(void 0),
  Uv = N.createContext({}),
  qv = N.createContext(void 0),
  Hv = N.createContext(0),
  Gv = N.createContext(0),
  $h = function (t) {
    var r = t.state,
      n = r.xAxisMap,
      i = r.yAxisMap,
      a = r.offset,
      o = t.clipPathId,
      u = t.children,
      c = t.width,
      s = t.height,
      f = qL(a)
    return _.createElement(
      Xc.Provider,
      { value: n },
      _.createElement(
        Vc.Provider,
        { value: i },
        _.createElement(
          Uv.Provider,
          { value: a },
          _.createElement(
            zv.Provider,
            { value: f },
            _.createElement(
              qv.Provider,
              { value: o },
              _.createElement(Hv.Provider, { value: s }, _.createElement(Gv.Provider, { value: c }, u)),
            ),
          ),
        ),
      ),
    )
  },
  HL = function () {
    return N.useContext(qv)
  },
  Kv = function (t) {
    var r = N.useContext(Xc)
    r == null && Yt(!1)
    var n = r[t]
    return n == null && Yt(!1), n
  },
  GL = function () {
    var t = N.useContext(Xc)
    return $t(t)
  },
  KL = function () {
    var t = N.useContext(Vc),
      r = UL(t, function (n) {
        return Nv(n.domain, Number.isFinite)
      })
    return r || $t(t)
  },
  Xv = function (t) {
    var r = N.useContext(Vc)
    r == null && Yt(!1)
    var n = r[t]
    return n == null && Yt(!1), n
  },
  XL = function () {
    var t = N.useContext(zv)
    return t
  },
  VL = function () {
    return N.useContext(Uv)
  },
  Yc = function () {
    return N.useContext(Gv)
  },
  Zc = function () {
    return N.useContext(Hv)
  }
function zn(e) {
  '@babel/helpers - typeof'
  return (
    (zn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    zn(e)
  )
}
function Ph(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Th(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Ph(Object(r), !0).forEach(function (n) {
          YL(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ph(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function YL(e, t, r) {
  return (
    (t = ZL(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function ZL(e) {
  var t = JL(e, 'string')
  return zn(t) == 'symbol' ? t : String(t)
}
function JL(e, t) {
  if (zn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (zn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function QL(e, t) {
  return nB(e) || rB(e, t) || tB(e, t) || eB()
}
function eB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function tB(e, t) {
  if (e) {
    if (typeof e == 'string') return Eh(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Eh(e, t)
  }
}
function Eh(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function rB(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function nB(e) {
  if (Array.isArray(e)) return e
}
function Du() {
  return (
    (Du = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Du.apply(this, arguments)
  )
}
var iB = function (t, r) {
    var n
    return (
      _.isValidElement(t)
        ? (n = _.cloneElement(t, r))
        : Z(t)
          ? (n = t(r))
          : (n = _.createElement('line', Du({}, r, { className: 'recharts-reference-line-line' }))),
      n
    )
  },
  aB = function (t, r, n, i, a, o, u, c, s) {
    var f = a.x,
      l = a.y,
      h = a.width,
      d = a.height
    if (n) {
      var y = s.y,
        v = t.y.apply(y, { position: o })
      if (ut(s, 'discard') && !t.y.isInRange(v)) return null
      var p = [
        { x: f + h, y: v },
        { x: f, y: v },
      ]
      return c === 'left' ? p.reverse() : p
    }
    if (r) {
      var x = s.x,
        b = t.x.apply(x, { position: o })
      if (ut(s, 'discard') && !t.x.isInRange(b)) return null
      var w = [
        { x: b, y: l + d },
        { x: b, y: l },
      ]
      return u === 'top' ? w.reverse() : w
    }
    if (i) {
      var g = s.segment,
        m = g.map(function (O) {
          return t.apply(O, { position: o })
        })
      return ut(s, 'discard') &&
        kD(m, function (O) {
          return !t.isInRange(O)
        })
        ? null
        : m
    }
    return null
  }
function Jc(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    u = e.className,
    c = e.alwaysShow,
    s = HL(),
    f = Kv(i),
    l = Xv(a),
    h = XL()
  if (!s || !h) return null
  gt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.')
  var d = Kc({ x: f.scale, y: l.scale }),
    y = be(t),
    v = be(r),
    p = n && n.length === 2,
    x = aB(d, y, v, p, h, e.position, f.orientation, l.orientation, e)
  if (!x) return null
  var b = QL(x, 2),
    w = b[0],
    g = w.x,
    m = w.y,
    O = b[1],
    S = O.x,
    A = O.y,
    E = ut(e, 'hidden') ? 'url(#'.concat(s, ')') : void 0,
    T = Th(Th({ clipPath: E }, re(e, !0)), {}, { x1: g, y1: m, x2: S, y2: A })
  return _.createElement(
    Se,
    { className: ae('recharts-reference-line', u) },
    iB(o, T),
    je.renderCallByParent(e, OL({ x1: g, y1: m, x2: S, y2: A })),
  )
}
Jc.displayName = 'ReferenceLine'
Jc.defaultProps = {
  isFront: !1,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  position: 'middle',
}
function Un(e) {
  '@babel/helpers - typeof'
  return (
    (Un =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Un(e)
  )
}
function Lu() {
  return (
    (Lu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Lu.apply(this, arguments)
  )
}
function jh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? jh(Object(r), !0).forEach(function (n) {
          oB(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function oB(e, t, r) {
  return (
    (t = uB(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function uB(e) {
  var t = cB(e, 'string')
  return Un(t) == 'symbol' ? t : String(t)
}
function cB(e, t) {
  if (Un(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Un(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var sB = function (t) {
  var r = t.x,
    n = t.y,
    i = t.xAxis,
    a = t.yAxis,
    o = Kc({ x: i.scale, y: a.scale }),
    u = o.apply({ x: r, y: n }, { bandAware: !0 })
  return ut(t, 'discard') && !o.isInRange(u) ? null : u
}
function ri(e) {
  var t = e.x,
    r = e.y,
    n = e.r,
    i = e.alwaysShow,
    a = e.clipPathId,
    o = be(t),
    u = be(r)
  if ((gt(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !o || !u))
    return null
  var c = sB(e)
  if (!c) return null
  var s = c.x,
    f = c.y,
    l = e.shape,
    h = e.className,
    d = ut(e, 'hidden') ? 'url(#'.concat(a, ')') : void 0,
    y = Mh(Mh({ clipPath: d }, re(e, !0)), {}, { cx: s, cy: f })
  return _.createElement(
    Se,
    { className: ae('recharts-reference-dot', h) },
    ri.renderDot(l, y),
    je.renderCallByParent(e, { x: s - n, y: f - n, width: 2 * n, height: 2 * n }),
  )
}
ri.displayName = 'ReferenceDot'
ri.defaultProps = {
  isFront: !1,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
}
ri.renderDot = function (e, t) {
  var r
  return (
    _.isValidElement(e)
      ? (r = _.cloneElement(e, t))
      : Z(e)
        ? (r = e(t))
        : (r = _.createElement(Ev, Lu({}, t, { cx: t.cx, cy: t.cy, className: 'recharts-reference-dot-dot' }))),
    r
  )
}
function qn(e) {
  '@babel/helpers - typeof'
  return (
    (qn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    qn(e)
  )
}
function Bu() {
  return (
    (Bu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Bu.apply(this, arguments)
  )
}
function Ch(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Ih(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Ch(Object(r), !0).forEach(function (n) {
          lB(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ch(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function lB(e, t, r) {
  return (
    (t = fB(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function fB(e) {
  var t = hB(e, 'string')
  return qn(t) == 'symbol' ? t : String(t)
}
function hB(e, t) {
  if (qn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (qn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var dB = function (t, r, n, i, a) {
  var o = a.x1,
    u = a.x2,
    c = a.y1,
    s = a.y2,
    f = a.xAxis,
    l = a.yAxis
  if (!f || !l) return null
  var h = Kc({ x: f.scale, y: l.scale }),
    d = {
      x: t ? h.x.apply(o, { position: 'start' }) : h.x.rangeMin,
      y: n ? h.y.apply(c, { position: 'start' }) : h.y.rangeMin,
    },
    y = {
      x: r ? h.x.apply(u, { position: 'end' }) : h.x.rangeMax,
      y: i ? h.y.apply(s, { position: 'end' }) : h.y.rangeMax,
    }
  return ut(a, 'discard') && (!h.isInRange(d) || !h.isInRange(y)) ? null : Fv(d, y)
}
function ni(e) {
  var t = e.x1,
    r = e.x2,
    n = e.y1,
    i = e.y2,
    a = e.className,
    o = e.alwaysShow,
    u = e.clipPathId
  gt(o === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.')
  var c = be(t),
    s = be(r),
    f = be(n),
    l = be(i),
    h = e.shape
  if (!c && !s && !f && !l && !h) return null
  var d = dB(c, s, f, l, e)
  if (!d && !h) return null
  var y = ut(e, 'hidden') ? 'url(#'.concat(u, ')') : void 0
  return _.createElement(
    Se,
    { className: ae('recharts-reference-area', a) },
    ni.renderRect(h, Ih(Ih({ clipPath: y }, re(e, !0)), d)),
    je.renderCallByParent(e, d),
  )
}
ni.displayName = 'ReferenceArea'
ni.defaultProps = {
  isFront: !1,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1,
}
ni.renderRect = function (e, t) {
  var r
  return (
    _.isValidElement(e)
      ? (r = _.cloneElement(e, t))
      : Z(e)
        ? (r = e(t))
        : (r = _.createElement(Gc, Bu({}, t, { className: 'recharts-reference-area-rect' }))),
    r
  )
}
function Vv(e, t, r) {
  if (t < 1) return []
  if (t === 1 && r === void 0) return e
  for (var n = [], i = 0; i < e.length; i += t) n.push(e[i])
  return n
}
function pB(e, t, r) {
  var n = { width: e.width + t.width, height: e.height + t.height }
  return AL(n, r)
}
function vB(e, t, r) {
  var n = r === 'width',
    i = e.x,
    a = e.y,
    o = e.width,
    u = e.height
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + u } : { start: n ? i + o : a + u, end: n ? i : a }
}
function sa(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i) return !1
  var a = r()
  return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0
}
function yB(e, t) {
  return Vv(e, t + 1)
}
function gB(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = t.start,
      u = t.end,
      c = 0,
      s = 1,
      f = o,
      l = function () {
        var y = n == null ? void 0 : n[c]
        if (y === void 0) return { v: Vv(n, s) }
        var v = c,
          p,
          x = function () {
            return p === void 0 && (p = r(y, v)), p
          },
          b = y.coordinate,
          w = c === 0 || sa(e, b, x, f, u)
        w || ((c = 0), (f = o), (s += 1)), w && ((f = b + e * (x() / 2 + i)), (c += s))
      },
      h;
    s <= a.length;

  )
    if (((h = l()), h)) return h.v
  return []
}
function Hn(e) {
  '@babel/helpers - typeof'
  return (
    (Hn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Hn(e)
  )
}
function kh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? kh(Object(r), !0).forEach(function (n) {
          mB(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function mB(e, t, r) {
  return (
    (t = bB(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function bB(e) {
  var t = xB(e, 'string')
  return Hn(t) == 'symbol' ? t : String(t)
}
function xB(e, t) {
  if (Hn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Hn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function wB(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = a.length,
      u = t.start,
      c = t.end,
      s = function (h) {
        var d = a[h],
          y,
          v = function () {
            return y === void 0 && (y = r(d, h)), y
          }
        if (h === o - 1) {
          var p = e * (d.coordinate + (e * v()) / 2 - c)
          a[h] = d = Ee(Ee({}, d), {}, { tickCoord: p > 0 ? d.coordinate - p * e : d.coordinate })
        } else a[h] = d = Ee(Ee({}, d), {}, { tickCoord: d.coordinate })
        var x = sa(e, d.tickCoord, v, u, c)
        x && ((c = d.tickCoord - e * (v() / 2 + i)), (a[h] = Ee(Ee({}, d), {}, { isShow: !0 })))
      },
      f = o - 1;
    f >= 0;
    f--
  )
    s(f)
  return a
}
function OB(e, t, r, n, i, a) {
  var o = (n || []).slice(),
    u = o.length,
    c = t.start,
    s = t.end
  if (a) {
    var f = n[u - 1],
      l = r(f, u - 1),
      h = e * (f.coordinate + (e * l) / 2 - s)
    o[u - 1] = f = Ee(Ee({}, f), {}, { tickCoord: h > 0 ? f.coordinate - h * e : f.coordinate })
    var d = sa(
      e,
      f.tickCoord,
      function () {
        return l
      },
      c,
      s,
    )
    d && ((s = f.tickCoord - e * (l / 2 + i)), (o[u - 1] = Ee(Ee({}, f), {}, { isShow: !0 })))
  }
  for (
    var y = a ? u - 1 : u,
      v = function (b) {
        var w = o[b],
          g,
          m = function () {
            return g === void 0 && (g = r(w, b)), g
          }
        if (b === 0) {
          var O = e * (w.coordinate - (e * m()) / 2 - c)
          o[b] = w = Ee(Ee({}, w), {}, { tickCoord: O < 0 ? w.coordinate - O * e : w.coordinate })
        } else o[b] = w = Ee(Ee({}, w), {}, { tickCoord: w.coordinate })
        var S = sa(e, w.tickCoord, m, c, s)
        S && ((c = w.tickCoord + e * (m() / 2 + i)), (o[b] = Ee(Ee({}, w), {}, { isShow: !0 })))
      },
      p = 0;
    p < y;
    p++
  )
    v(p)
  return o
}
function Qc(e, t, r) {
  var n = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    u = e.orientation,
    c = e.interval,
    s = e.tickFormatter,
    f = e.unit,
    l = e.angle
  if (!i || !i.length || !n) return []
  if (F(c) || Tt.isSsr) return yB(i, typeof c == 'number' && F(c) ? c : 0)
  var h = [],
    d = u === 'top' || u === 'bottom' ? 'width' : 'height',
    y = f && d === 'width' ? an(f, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 },
    v = function (w, g) {
      var m = Z(s) ? s(w.value, g) : w.value
      return d === 'width'
        ? pB(an(m, { fontSize: t, letterSpacing: r }), y, l)
        : an(m, { fontSize: t, letterSpacing: r })[d]
    },
    p = i.length >= 2 ? et(i[1].coordinate - i[0].coordinate) : 1,
    x = vB(a, p, d)
  return c === 'equidistantPreserveStart'
    ? gB(p, x, v, i, o)
    : (c === 'preserveStart' || c === 'preserveStartEnd'
        ? (h = OB(p, x, v, i, o, c === 'preserveStartEnd'))
        : (h = wB(p, x, v, i, o)),
      h.filter(function (b) {
        return b.isShow
      }))
}
var SB = ['viewBox'],
  AB = ['viewBox'],
  _B = ['ticks']
function jr(e) {
  '@babel/helpers - typeof'
  return (
    (jr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    jr(e)
  )
}
function dr() {
  return (
    (dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    dr.apply(this, arguments)
  )
}
function Nh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Nh(Object(r), !0).forEach(function (n) {
          es(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function _o(e, t) {
  if (e == null) return {}
  var r = $B(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function $B(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function PB(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Dh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Zv(n.key), n)
  }
}
function TB(e, t, r) {
  return t && Dh(e.prototype, t), r && Dh(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function EB(e, t, r) {
  return (t = la(t)), jB(e, Yv() ? Reflect.construct(t, r || [], la(e).constructor) : t.apply(e, r))
}
function jB(e, t) {
  if (t && (jr(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return MB(e)
}
function MB(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function Yv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
  } catch {}
  return (Yv = function () {
    return !!e
  })()
}
function la(e) {
  return (
    (la = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    la(e)
  )
}
function CB(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Ru(e, t)
}
function Ru(e, t) {
  return (
    (Ru = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    Ru(e, t)
  )
}
function es(e, t, r) {
  return (
    (t = Zv(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function Zv(e) {
  var t = IB(e, 'string')
  return jr(t) == 'symbol' ? t : String(t)
}
function IB(e, t) {
  if (jr(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (jr(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var Hr = (function (e) {
  CB(t, e)
  function t(r) {
    var n
    return PB(this, t), (n = EB(this, t, [r])), (n.state = { fontSize: '', letterSpacing: '' }), n
  }
  return (
    TB(
      t,
      [
        {
          key: 'shouldComponentUpdate',
          value: function (n, i) {
            var a = n.viewBox,
              o = _o(n, SB),
              u = this.props,
              c = u.viewBox,
              s = _o(u, AB)
            return !pr(a, c) || !pr(o, s) || !pr(i, this.state)
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            var n = this.layerReference
            if (n) {
              var i = n.getElementsByClassName('recharts-cartesian-axis-tick-value')[0]
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                })
            }
          },
        },
        {
          key: 'getTickLineCoord',
          value: function (n) {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              c = i.height,
              s = i.orientation,
              f = i.tickSize,
              l = i.mirror,
              h = i.tickMargin,
              d,
              y,
              v,
              p,
              x,
              b,
              w = l ? -1 : 1,
              g = n.tickSize || f,
              m = F(n.tickCoord) ? n.tickCoord : n.coordinate
            switch (s) {
              case 'top':
                ;(d = y = n.coordinate), (p = o + +!l * c), (v = p - w * g), (b = v - w * h), (x = m)
                break
              case 'left':
                ;(v = p = n.coordinate), (y = a + +!l * u), (d = y - w * g), (x = d - w * h), (b = m)
                break
              case 'right':
                ;(v = p = n.coordinate), (y = a + +l * u), (d = y + w * g), (x = d + w * h), (b = m)
                break
              default:
                ;(d = y = n.coordinate), (p = o + +l * c), (v = p + w * g), (b = v + w * h), (x = m)
                break
            }
            return { line: { x1: d, y1: v, x2: y, y2: p }, tick: { x, y: b } }
          },
        },
        {
          key: 'getTickTextAnchor',
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o
            switch (i) {
              case 'left':
                o = a ? 'start' : 'end'
                break
              case 'right':
                o = a ? 'end' : 'start'
                break
              default:
                o = 'middle'
                break
            }
            return o
          },
        },
        {
          key: 'getTickVerticalAnchor',
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o = 'end'
            switch (i) {
              case 'left':
              case 'right':
                o = 'middle'
                break
              case 'top':
                o = a ? 'start' : 'end'
                break
              default:
                o = a ? 'end' : 'start'
                break
            }
            return o
          },
        },
        {
          key: 'renderAxisLine',
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.width,
              u = n.height,
              c = n.orientation,
              s = n.mirror,
              f = n.axisLine,
              l = Ce(Ce(Ce({}, re(this.props, !1)), re(f, !1)), {}, { fill: 'none' })
            if (c === 'top' || c === 'bottom') {
              var h = +((c === 'top' && !s) || (c === 'bottom' && s))
              l = Ce(Ce({}, l), {}, { x1: i, y1: a + h * u, x2: i + o, y2: a + h * u })
            } else {
              var d = +((c === 'left' && !s) || (c === 'right' && s))
              l = Ce(Ce({}, l), {}, { x1: i + d * o, y1: a, x2: i + d * o, y2: a + u })
            }
            return _.createElement(
              'line',
              dr({}, l, { className: ae('recharts-cartesian-axis-line', Xe(f, 'className')) }),
            )
          },
        },
        {
          key: 'renderTicks',
          value: function (n, i, a) {
            var o = this,
              u = this.props,
              c = u.tickLine,
              s = u.stroke,
              f = u.tick,
              l = u.tickFormatter,
              h = u.unit,
              d = Qc(Ce(Ce({}, this.props), {}, { ticks: n }), i, a),
              y = this.getTickTextAnchor(),
              v = this.getTickVerticalAnchor(),
              p = re(this.props, !1),
              x = re(f, !1),
              b = Ce(Ce({}, p), {}, { fill: 'none' }, re(c, !1)),
              w = d.map(function (g, m) {
                var O = o.getTickLineCoord(g),
                  S = O.line,
                  A = O.tick,
                  E = Ce(
                    Ce(Ce(Ce({ textAnchor: y, verticalAnchor: v }, p), {}, { stroke: 'none', fill: s }, x), A),
                    {},
                    { index: m, payload: g, visibleTicksCount: d.length, tickFormatter: l },
                  )
                return _.createElement(
                  Se,
                  dr(
                    {
                      className: 'recharts-cartesian-axis-tick',
                      key: 'tick-'.concat(g.value, '-').concat(g.coordinate, '-').concat(g.tickCoord),
                    },
                    Oi(o.props, g, m),
                  ),
                  c &&
                    _.createElement(
                      'line',
                      dr({}, b, S, { className: ae('recharts-cartesian-axis-tick-line', Xe(c, 'className')) }),
                    ),
                  f && t.renderTickItem(f, E, ''.concat(Z(l) ? l(g.value, m) : g.value).concat(h || '')),
                )
              })
            return _.createElement('g', { className: 'recharts-cartesian-axis-ticks' }, w)
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this,
              i = this.props,
              a = i.axisLine,
              o = i.width,
              u = i.height,
              c = i.ticksGenerator,
              s = i.className,
              f = i.hide
            if (f) return null
            var l = this.props,
              h = l.ticks,
              d = _o(l, _B),
              y = h
            return (
              Z(c) && (y = h && h.length > 0 ? c(this.props) : c(d)),
              o <= 0 || u <= 0 || !y || !y.length
                ? null
                : _.createElement(
                    Se,
                    {
                      className: ae('recharts-cartesian-axis', s),
                      ref: function (p) {
                        n.layerReference = p
                      },
                    },
                    a && this.renderAxisLine(),
                    this.renderTicks(y, this.state.fontSize, this.state.letterSpacing),
                    je.renderCallByParent(this.props),
                  )
            )
          },
        },
      ],
      [
        {
          key: 'renderTickItem',
          value: function (n, i, a) {
            var o
            return (
              _.isValidElement(n)
                ? (o = _.cloneElement(n, i))
                : Z(n)
                  ? (o = n(i))
                  : (o = _.createElement(Di, dr({}, i, { className: 'recharts-cartesian-axis-tick-value' }), a)),
              o
            )
          },
        },
      ],
    ),
    t
  )
})(N.Component)
es(Hr, 'displayName', 'CartesianAxis')
es(Hr, 'defaultProps', {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: 'bottom',
  ticks: [],
  stroke: '#666',
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: 'preserveEnd',
})
var kB = ['x1', 'y1', 'x2', 'y2', 'key'],
  NB = ['offset']
function Qt(e) {
  '@babel/helpers - typeof'
  return (
    (Qt =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Qt(e)
  )
}
function Lh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Lh(Object(r), !0).forEach(function (n) {
          DB(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function DB(e, t, r) {
  return (
    (t = LB(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function LB(e) {
  var t = BB(e, 'string')
  return Qt(t) == 'symbol' ? t : String(t)
}
function BB(e, t) {
  if (Qt(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Qt(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Gt() {
  return (
    (Gt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Gt.apply(this, arguments)
  )
}
function Bh(e, t) {
  if (e == null) return {}
  var r = RB(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function RB(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
var FB = function (t) {
  var r = t.fill
  if (!r || r === 'none') return null
  var n = t.fillOpacity,
    i = t.x,
    a = t.y,
    o = t.width,
    u = t.height
  return _.createElement('rect', {
    x: i,
    y: a,
    width: o,
    height: u,
    stroke: 'none',
    fill: r,
    fillOpacity: n,
    className: 'recharts-cartesian-grid-bg',
  })
}
function Jv(e, t) {
  var r
  if (_.isValidElement(e)) r = _.cloneElement(e, t)
  else if (Z(e)) r = e(t)
  else {
    var n = t.x1,
      i = t.y1,
      a = t.x2,
      o = t.y2,
      u = t.key,
      c = Bh(t, kB),
      s = re(c, !1)
    s.offset
    var f = Bh(s, NB)
    r = _.createElement('line', Gt({}, f, { x1: n, y1: i, x2: a, y2: o, fill: 'none', key: u }))
  }
  return r
}
function WB(e) {
  var t = e.x,
    r = e.width,
    n = e.horizontal,
    i = n === void 0 ? !0 : n,
    a = e.horizontalPoints
  if (!i || !a || !a.length) return null
  var o = a.map(function (u, c) {
    var s = Me(Me({}, e), {}, { x1: t, y1: u, x2: t + r, y2: u, key: 'line-'.concat(c), index: c })
    return Jv(i, s)
  })
  return _.createElement('g', { className: 'recharts-cartesian-grid-horizontal' }, o)
}
function zB(e) {
  var t = e.y,
    r = e.height,
    n = e.vertical,
    i = n === void 0 ? !0 : n,
    a = e.verticalPoints
  if (!i || !a || !a.length) return null
  var o = a.map(function (u, c) {
    var s = Me(Me({}, e), {}, { x1: u, y1: t, x2: u, y2: t + r, key: 'line-'.concat(c), index: c })
    return Jv(i, s)
  })
  return _.createElement('g', { className: 'recharts-cartesian-grid-vertical' }, o)
}
function UB(e) {
  var t = e.horizontalFill,
    r = e.fillOpacity,
    n = e.x,
    i = e.y,
    a = e.width,
    o = e.height,
    u = e.horizontalPoints,
    c = e.horizontal,
    s = c === void 0 ? !0 : c
  if (!s || !t || !t.length) return null
  var f = u
    .map(function (h) {
      return Math.round(h + i - i)
    })
    .sort(function (h, d) {
      return h - d
    })
  i !== f[0] && f.unshift(0)
  var l = f.map(function (h, d) {
    var y = !f[d + 1],
      v = y ? i + o - h : f[d + 1] - h
    if (v <= 0) return null
    var p = d % t.length
    return _.createElement('rect', {
      key: 'react-'.concat(d),
      y: h,
      x: n,
      height: v,
      width: a,
      stroke: 'none',
      fill: t[p],
      fillOpacity: r,
      className: 'recharts-cartesian-grid-bg',
    })
  })
  return _.createElement('g', { className: 'recharts-cartesian-gridstripes-horizontal' }, l)
}
function qB(e) {
  var t = e.vertical,
    r = t === void 0 ? !0 : t,
    n = e.verticalFill,
    i = e.fillOpacity,
    a = e.x,
    o = e.y,
    u = e.width,
    c = e.height,
    s = e.verticalPoints
  if (!r || !n || !n.length) return null
  var f = s
    .map(function (h) {
      return Math.round(h + a - a)
    })
    .sort(function (h, d) {
      return h - d
    })
  a !== f[0] && f.unshift(0)
  var l = f.map(function (h, d) {
    var y = !f[d + 1],
      v = y ? a + u - h : f[d + 1] - h
    if (v <= 0) return null
    var p = d % n.length
    return _.createElement('rect', {
      key: 'react-'.concat(d),
      x: h,
      y: o,
      width: v,
      height: c,
      stroke: 'none',
      fill: n[p],
      fillOpacity: i,
      className: 'recharts-cartesian-grid-bg',
    })
  })
  return _.createElement('g', { className: 'recharts-cartesian-gridstripes-vertical' }, l)
}
var HB = function (t, r) {
    var n = t.xAxis,
      i = t.width,
      a = t.height,
      o = t.offset
    return hv(
      Qc(Me(Me(Me({}, Hr.defaultProps), n), {}, { ticks: vt(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } })),
      o.left,
      o.left + o.width,
      r,
    )
  },
  GB = function (t, r) {
    var n = t.yAxis,
      i = t.width,
      a = t.height,
      o = t.offset
    return hv(
      Qc(Me(Me(Me({}, Hr.defaultProps), n), {}, { ticks: vt(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } })),
      o.top,
      o.top + o.height,
      r,
    )
  },
  ur = {
    horizontal: !0,
    vertical: !0,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: '#ccc',
    fill: 'none',
    verticalFill: [],
    horizontalFill: [],
  }
function Qv(e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = Yc(),
    c = Zc(),
    s = VL(),
    f = Me(
      Me({}, e),
      {},
      {
        stroke: (t = e.stroke) !== null && t !== void 0 ? t : ur.stroke,
        fill: (r = e.fill) !== null && r !== void 0 ? r : ur.fill,
        horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : ur.horizontal,
        horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : ur.horizontalFill,
        vertical: (a = e.vertical) !== null && a !== void 0 ? a : ur.vertical,
        verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : ur.verticalFill,
        x: F(e.x) ? e.x : s.left,
        y: F(e.y) ? e.y : s.top,
        width: F(e.width) ? e.width : s.width,
        height: F(e.height) ? e.height : s.height,
      },
    ),
    l = f.x,
    h = f.y,
    d = f.width,
    y = f.height,
    v = f.syncWithTicks,
    p = f.horizontalValues,
    x = f.verticalValues,
    b = GL(),
    w = KL()
  if (!F(d) || d <= 0 || !F(y) || y <= 0 || !F(l) || l !== +l || !F(h) || h !== +h) return null
  var g = f.verticalCoordinatesGenerator || HB,
    m = f.horizontalCoordinatesGenerator || GB,
    O = f.horizontalPoints,
    S = f.verticalPoints
  if ((!O || !O.length) && Z(m)) {
    var A = p && p.length,
      E = m(
        { yAxis: w ? Me(Me({}, w), {}, { ticks: A ? p : w.ticks }) : void 0, width: u, height: c, offset: s },
        A ? !0 : v,
      )
    gt(
      Array.isArray(E),
      'horizontalCoordinatesGenerator should return Array but instead it returned ['.concat(Qt(E), ']'),
    ),
      Array.isArray(E) && (O = E)
  }
  if ((!S || !S.length) && Z(g)) {
    var T = x && x.length,
      $ = g(
        { xAxis: b ? Me(Me({}, b), {}, { ticks: T ? x : b.ticks }) : void 0, width: u, height: c, offset: s },
        T ? !0 : v,
      )
    gt(
      Array.isArray($),
      'verticalCoordinatesGenerator should return Array but instead it returned ['.concat(Qt($), ']'),
    ),
      Array.isArray($) && (S = $)
  }
  return _.createElement(
    'g',
    { className: 'recharts-cartesian-grid' },
    _.createElement(FB, { fill: f.fill, fillOpacity: f.fillOpacity, x: f.x, y: f.y, width: f.width, height: f.height }),
    _.createElement(WB, Gt({}, f, { offset: s, horizontalPoints: O, xAxis: b, yAxis: w })),
    _.createElement(zB, Gt({}, f, { offset: s, verticalPoints: S, xAxis: b, yAxis: w })),
    _.createElement(UB, Gt({}, f, { horizontalPoints: O })),
    _.createElement(qB, Gt({}, f, { verticalPoints: S })),
  )
}
Qv.displayName = 'CartesianGrid'
function Fu() {
  return (
    (Fu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Fu.apply(this, arguments)
  )
}
var Va = function (t) {
  var r = t.xAxisId,
    n = Yc(),
    i = Zc(),
    a = Kv(r)
  return a == null
    ? null
    : _.createElement(
        Hr,
        Fu({}, a, {
          className: ae('recharts-'.concat(a.axisType, ' ').concat(a.axisType), a.className),
          viewBox: { x: 0, y: 0, width: n, height: i },
          ticksGenerator: function (u) {
            return vt(u, !0)
          },
        }),
      )
}
Va.displayName = 'XAxis'
Va.defaultProps = {
  allowDecimals: !0,
  hide: !1,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: 'auto',
  reversed: !1,
  allowDuplicatedCategory: !0,
}
function Wu() {
  return (
    (Wu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Wu.apply(this, arguments)
  )
}
var Ya = function (t) {
  var r = t.yAxisId,
    n = Yc(),
    i = Zc(),
    a = Xv(r)
  return a == null
    ? null
    : _.createElement(
        Hr,
        Wu({}, a, {
          className: ae('recharts-'.concat(a.axisType, ' ').concat(a.axisType), a.className),
          viewBox: { x: 0, y: 0, width: n, height: i },
          ticksGenerator: function (u) {
            return vt(u, !0)
          },
        }),
      )
}
Ya.displayName = 'YAxis'
Ya.defaultProps = {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: 'auto',
  reversed: !1,
}
function Rh(e) {
  return YB(e) || VB(e) || XB(e) || KB()
}
function KB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function XB(e, t) {
  if (e) {
    if (typeof e == 'string') return zu(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zu(e, t)
  }
}
function VB(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function YB(e) {
  if (Array.isArray(e)) return zu(e)
}
function zu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
var Uu = function (t, r, n, i, a) {
    var o = tt(t, Jc),
      u = tt(t, ri),
      c = [].concat(Rh(o), Rh(u)),
      s = tt(t, ni),
      f = ''.concat(i, 'Id'),
      l = i[0],
      h = r
    if (
      (c.length &&
        (h = c.reduce(function (v, p) {
          if (p.props[f] === n && ut(p.props, 'extendDomain') && F(p.props[l])) {
            var x = p.props[l]
            return [Math.min(v[0], x), Math.max(v[1], x)]
          }
          return v
        }, h)),
      s.length)
    ) {
      var d = ''.concat(l, '1'),
        y = ''.concat(l, '2')
      h = s.reduce(function (v, p) {
        if (p.props[f] === n && ut(p.props, 'extendDomain') && F(p.props[d]) && F(p.props[y])) {
          var x = p.props[d],
            b = p.props[y]
          return [Math.min(v[0], x, b), Math.max(v[1], x, b)]
        }
        return v
      }, h)
    }
    return (
      a &&
        a.length &&
        (h = a.reduce(function (v, p) {
          return F(p) ? [Math.min(v[0], p), Math.max(v[1], p)] : v
        }, h)),
      h
    )
  },
  ey = { exports: {} }
;(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = '~'
  function n() {}
  Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1))
  function i(c, s, f) {
    ;(this.fn = c), (this.context = s), (this.once = f || !1)
  }
  function a(c, s, f, l, h) {
    if (typeof f != 'function') throw new TypeError('The listener must be a function')
    var d = new i(f, l || c, h),
      y = r ? r + s : s
    return (
      c._events[y]
        ? c._events[y].fn
          ? (c._events[y] = [c._events[y], d])
          : c._events[y].push(d)
        : ((c._events[y] = d), c._eventsCount++),
      c
    )
  }
  function o(c, s) {
    --c._eventsCount === 0 ? (c._events = new n()) : delete c._events[s]
  }
  function u() {
    ;(this._events = new n()), (this._eventsCount = 0)
  }
  ;(u.prototype.eventNames = function () {
    var s = [],
      f,
      l
    if (this._eventsCount === 0) return s
    for (l in (f = this._events)) t.call(f, l) && s.push(r ? l.slice(1) : l)
    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(f)) : s
  }),
    (u.prototype.listeners = function (s) {
      var f = r ? r + s : s,
        l = this._events[f]
      if (!l) return []
      if (l.fn) return [l.fn]
      for (var h = 0, d = l.length, y = new Array(d); h < d; h++) y[h] = l[h].fn
      return y
    }),
    (u.prototype.listenerCount = function (s) {
      var f = r ? r + s : s,
        l = this._events[f]
      return l ? (l.fn ? 1 : l.length) : 0
    }),
    (u.prototype.emit = function (s, f, l, h, d, y) {
      var v = r ? r + s : s
      if (!this._events[v]) return !1
      var p = this._events[v],
        x = arguments.length,
        b,
        w
      if (p.fn) {
        switch ((p.once && this.removeListener(s, p.fn, void 0, !0), x)) {
          case 1:
            return p.fn.call(p.context), !0
          case 2:
            return p.fn.call(p.context, f), !0
          case 3:
            return p.fn.call(p.context, f, l), !0
          case 4:
            return p.fn.call(p.context, f, l, h), !0
          case 5:
            return p.fn.call(p.context, f, l, h, d), !0
          case 6:
            return p.fn.call(p.context, f, l, h, d, y), !0
        }
        for (w = 1, b = new Array(x - 1); w < x; w++) b[w - 1] = arguments[w]
        p.fn.apply(p.context, b)
      } else {
        var g = p.length,
          m
        for (w = 0; w < g; w++)
          switch ((p[w].once && this.removeListener(s, p[w].fn, void 0, !0), x)) {
            case 1:
              p[w].fn.call(p[w].context)
              break
            case 2:
              p[w].fn.call(p[w].context, f)
              break
            case 3:
              p[w].fn.call(p[w].context, f, l)
              break
            case 4:
              p[w].fn.call(p[w].context, f, l, h)
              break
            default:
              if (!b) for (m = 1, b = new Array(x - 1); m < x; m++) b[m - 1] = arguments[m]
              p[w].fn.apply(p[w].context, b)
          }
      }
      return !0
    }),
    (u.prototype.on = function (s, f, l) {
      return a(this, s, f, l, !1)
    }),
    (u.prototype.once = function (s, f, l) {
      return a(this, s, f, l, !0)
    }),
    (u.prototype.removeListener = function (s, f, l, h) {
      var d = r ? r + s : s
      if (!this._events[d]) return this
      if (!f) return o(this, d), this
      var y = this._events[d]
      if (y.fn) y.fn === f && (!h || y.once) && (!l || y.context === l) && o(this, d)
      else {
        for (var v = 0, p = [], x = y.length; v < x; v++)
          (y[v].fn !== f || (h && !y[v].once) || (l && y[v].context !== l)) && p.push(y[v])
        p.length ? (this._events[d] = p.length === 1 ? p[0] : p) : o(this, d)
      }
      return this
    }),
    (u.prototype.removeAllListeners = function (s) {
      var f
      return (
        s ? ((f = r ? r + s : s), this._events[f] && o(this, f)) : ((this._events = new n()), (this._eventsCount = 0)),
        this
      )
    }),
    (u.prototype.off = u.prototype.removeListener),
    (u.prototype.addListener = u.prototype.on),
    (u.prefixed = r),
    (u.EventEmitter = u),
    (e.exports = u)
})(ey)
var ZB = ey.exports
const JB = le(ZB)
var $o = new JB(),
  Po = 'recharts.syncMouseEvents'
function Gn(e) {
  '@babel/helpers - typeof'
  return (
    (Gn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Gn(e)
  )
}
function QB(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function eR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, ty(n.key), n)
  }
}
function tR(e, t, r) {
  return t && eR(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function To(e, t, r) {
  return (
    (t = ty(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function ty(e) {
  var t = rR(e, 'string')
  return Gn(t) == 'symbol' ? t : String(t)
}
function rR(e, t) {
  if (Gn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Gn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var nR = (function () {
  function e() {
    QB(this, e), To(this, 'activeIndex', 0), To(this, 'coordinateList', []), To(this, 'layout', 'horizontal')
  }
  return (
    tR(e, [
      {
        key: 'setDetails',
        value: function (r) {
          var n,
            i = r.coordinateList,
            a = i === void 0 ? null : i,
            o = r.container,
            u = o === void 0 ? null : o,
            c = r.layout,
            s = c === void 0 ? null : c,
            f = r.offset,
            l = f === void 0 ? null : f,
            h = r.mouseHandlerCallback,
            d = h === void 0 ? null : h
          ;(this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : []),
            (this.container = u ?? this.container),
            (this.layout = s ?? this.layout),
            (this.offset = l ?? this.offset),
            (this.mouseHandlerCallback = d ?? this.mouseHandlerCallback),
            (this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1))
        },
      },
      {
        key: 'focus',
        value: function () {
          this.spoofMouse()
        },
      },
      {
        key: 'keyboardEvent',
        value: function (r) {
          if (this.coordinateList.length !== 0)
            switch (r.key) {
              case 'ArrowRight': {
                if (this.layout !== 'horizontal') return
                ;(this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1)), this.spoofMouse()
                break
              }
              case 'ArrowLeft': {
                if (this.layout !== 'horizontal') return
                ;(this.activeIndex = Math.max(this.activeIndex - 1, 0)), this.spoofMouse()
                break
              }
            }
        },
      },
      {
        key: 'setIndex',
        value: function (r) {
          this.activeIndex = r
        },
      },
      {
        key: 'spoofMouse',
        value: function () {
          var r, n
          if (this.layout === 'horizontal' && this.coordinateList.length !== 0) {
            var i = this.container.getBoundingClientRect(),
              a = i.x,
              o = i.y,
              u = i.height,
              c = this.coordinateList[this.activeIndex].coordinate,
              s = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
              f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
              l = a + c + s,
              h = o + this.offset.top + u / 2 + f
            this.mouseHandlerCallback({ pageX: l, pageY: h })
          }
        },
      },
    ]),
    e
  )
})()
function iR(e, t, r) {
  if (r === 'number' && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0],
      i = e == null ? void 0 : e[1]
    if (n && i && F(n) && F(i)) return !0
  }
  return !1
}
function aR(e, t, r, n) {
  var i = n / 2
  return {
    stroke: 'none',
    fill: '#ccc',
    x: e === 'horizontal' ? t.x - i : r.left + 0.5,
    y: e === 'horizontal' ? r.top + 0.5 : t.y - i,
    width: e === 'horizontal' ? n : r.width - 1,
    height: e === 'horizontal' ? r.height - 1 : n,
  }
}
function ry(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    i = e.startAngle,
    a = e.endAngle,
    o = Te(t, r, n, i),
    u = Te(t, r, n, a)
  return { points: [o, u], cx: t, cy: r, radius: n, startAngle: i, endAngle: a }
}
function oR(e, t, r) {
  var n, i, a, o
  if (e === 'horizontal') (n = t.x), (a = n), (i = r.top), (o = r.top + r.height)
  else if (e === 'vertical') (i = t.y), (o = i), (n = r.left), (a = r.left + r.width)
  else if (t.cx != null && t.cy != null)
    if (e === 'centric') {
      var u = t.cx,
        c = t.cy,
        s = t.innerRadius,
        f = t.outerRadius,
        l = t.angle,
        h = Te(u, c, s, l),
        d = Te(u, c, f, l)
      ;(n = h.x), (i = h.y), (a = d.x), (o = d.y)
    } else return ry(t)
  return [
    { x: n, y: i },
    { x: a, y: o },
  ]
}
function Kn(e) {
  '@babel/helpers - typeof'
  return (
    (Kn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Kn(e)
  )
}
function Fh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Fh(Object(r), !0).forEach(function (n) {
          uR(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function uR(e, t, r) {
  return (
    (t = cR(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function cR(e) {
  var t = sR(e, 'string')
  return Kn(t) == 'symbol' ? t : String(t)
}
function sR(e, t) {
  if (Kn(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Kn(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function lR(e) {
  var t = e.element,
    r = e.tooltipEventType,
    n = e.isActive,
    i = e.activeCoordinate,
    a = e.activePayload,
    o = e.offset,
    u = e.activeTooltipIndex,
    c = e.tooltipAxisBandSize,
    s = e.layout,
    f = e.chartName
  if (!t || !t.props.cursor || !n || !i || (f !== 'ScatterChart' && r !== 'axis')) return null
  var l,
    h = Lf
  if (f === 'ScatterChart') (l = i), (h = aN)
  else if (f === 'BarChart') (l = aR(s, i, o, c)), (h = Gc)
  else if (s === 'radial') {
    var d = ry(i),
      y = d.cx,
      v = d.cy,
      p = d.radius,
      x = d.startAngle,
      b = d.endAngle
    ;(l = { cx: y, cy: v, startAngle: x, endAngle: b, innerRadius: p, outerRadius: p }), (h = gv)
  } else (l = { points: oR(s, i, o) }), (h = Lf)
  var w = bi(
    bi(bi(bi({ stroke: '#ccc', pointerEvents: 'none' }, o), l), re(t.props.cursor, !1)),
    {},
    { payload: a, payloadIndex: u, className: ae('recharts-tooltip-cursor', t.props.cursor.className) },
  )
  return N.isValidElement(t.props.cursor) ? N.cloneElement(t.props.cursor, w) : N.createElement(h, w)
}
var fR = ['item'],
  hR = ['children', 'className', 'width', 'height', 'style', 'compact', 'title', 'desc']
function Mr(e) {
  '@babel/helpers - typeof'
  return (
    (Mr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Mr(e)
  )
}
function sn() {
  return (
    (sn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    sn.apply(this, arguments)
  )
}
function Wh(e, t) {
  return vR(e) || pR(e, t) || iy(e, t) || dR()
}
function dR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function pR(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
    } catch (f) {
      ;(s = !0), (i = f)
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o)) return
      } finally {
        if (s) throw i
      }
    }
    return u
  }
}
function vR(e) {
  if (Array.isArray(e)) return e
}
function zh(e, t) {
  if (e == null) return {}
  var r = yR(e, t),
    n,
    i
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (i = 0; i < a.length; i++)
      (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function yR(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    i,
    a
  for (a = 0; a < n.length; a++) (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
  return r
}
function gR(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function mR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, ay(n.key), n)
  }
}
function bR(e, t, r) {
  return t && mR(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function xR(e, t, r) {
  return (t = fa(t)), wR(e, ny() ? Reflect.construct(t, r || [], fa(e).constructor) : t.apply(e, r))
}
function wR(e, t) {
  if (t && (Mr(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return Q(e)
}
function ny() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
  } catch {}
  return (ny = function () {
    return !!e
  })()
}
function fa(e) {
  return (
    (fa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    fa(e)
  )
}
function Q(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function OR(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && qu(e, t)
}
function qu(e, t) {
  return (
    (qu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    qu(e, t)
  )
}
function Cr(e) {
  return _R(e) || AR(e) || iy(e) || SR()
}
function SR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function iy(e, t) {
  if (e) {
    if (typeof e == 'string') return Hu(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hu(e, t)
  }
}
function AR(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function _R(e) {
  if (Array.isArray(e)) return Hu(e)
}
function Hu(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function Uh(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Uh(Object(r), !0).forEach(function (n) {
          H(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Uh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
          })
  }
  return e
}
function H(e, t, r) {
  return (
    (t = ay(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function ay(e) {
  var t = $R(e, 'string')
  return Mr(t) == 'symbol' ? t : String(t)
}
function $R(e, t) {
  if (Mr(e) != 'object' || !e) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (Mr(n) != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
var PR = { xAxis: ['bottom', 'top'], yAxis: ['left', 'right'] },
  TR = { width: '100%', height: '100%' },
  oy = { x: 0, y: 0 }
function xi(e) {
  return e
}
var ER = function (t, r) {
    return r === 'horizontal' ? t.x : r === 'vertical' ? t.y : r === 'centric' ? t.angle : t.radius
  },
  jR = function (t, r, n, i) {
    var a = r.find(function (f) {
      return f && f.index === n
    })
    if (a) {
      if (t === 'horizontal') return { x: a.coordinate, y: i.y }
      if (t === 'vertical') return { x: i.x, y: a.coordinate }
      if (t === 'centric') {
        var o = a.coordinate,
          u = i.radius
        return C(C(C({}, i), Te(i.cx, i.cy, u, o)), {}, { angle: o, radius: u })
      }
      var c = a.coordinate,
        s = i.angle
      return C(C(C({}, i), Te(i.cx, i.cy, c, s)), {}, { angle: s, radius: c })
    }
    return oy
  },
  Za = function (t, r) {
    var n = r.graphicalItems,
      i = r.dataStartIndex,
      a = r.dataEndIndex,
      o = (n ?? []).reduce(function (u, c) {
        var s = c.props.data
        return s && s.length ? [].concat(Cr(u), Cr(s)) : u
      }, [])
    return o.length > 0 ? o : t && t.length && F(i) && F(a) ? t.slice(i, a + 1) : []
  }
function uy(e) {
  return e === 'number' ? [0, 'auto'] : void 0
}
var Gu = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      u = Za(r, t)
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (c, s) {
          var f,
            l = (f = s.props.data) !== null && f !== void 0 ? f : r
          l && t.dataStartIndex + t.dataEndIndex !== 0 && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1))
          var h
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var d = l === void 0 ? u : l
            h = jo(d, o.dataKey, i)
          } else h = (l && l[n]) || u[n]
          return h ? [].concat(Cr(c), [pv(s, h)]) : c
        }, [])
  },
  qh = function (t, r, n, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = ER(a, n),
      u = t.orderedTooltipTicks,
      c = t.tooltipAxis,
      s = t.tooltipTicks,
      f = ZC(o, u, s, c)
    if (f >= 0 && s) {
      var l = s[f] && s[f].value,
        h = Gu(t, r, f, l),
        d = jR(n, u, f, a)
      return { activeTooltipIndex: f, activeLabel: l, activePayload: h, activeCoordinate: d }
    }
    return null
  },
  MR = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      c = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.layout,
      l = t.children,
      h = t.stackOffset,
      d = fv(f, a)
    return n.reduce(function (y, v) {
      var p,
        x = v.props,
        b = x.type,
        w = x.dataKey,
        g = x.allowDataOverflow,
        m = x.allowDuplicatedCategory,
        O = x.scale,
        S = x.ticks,
        A = x.includeHidden,
        E = v.props[o]
      if (y[E]) return y
      var T = Za(t.data, {
          graphicalItems: i.filter(function (q) {
            return q.props[o] === E
          }),
          dataStartIndex: c,
          dataEndIndex: s,
        }),
        $ = T.length,
        P,
        M,
        j
      iR(v.props.domain, g, b) &&
        ((P = gu(v.props.domain, null, g)), d && (b === 'number' || O !== 'auto') && (j = un(T, w, 'category')))
      var D = uy(b)
      if (!P || P.length === 0) {
        var I,
          L = (I = v.props.domain) !== null && I !== void 0 ? I : D
        if (w) {
          if (((P = un(T, w, b)), b === 'category' && d)) {
            var B = Yb(P)
            m && B
              ? ((M = P), (P = ia(0, $)))
              : m ||
                (P = Af(L, P, v).reduce(function (q, J) {
                  return q.indexOf(J) >= 0 ? q : [].concat(Cr(q), [J])
                }, []))
          } else if (b === 'category')
            m
              ? (P = P.filter(function (q) {
                  return q !== '' && !ie(q)
                }))
              : (P = Af(L, P, v).reduce(function (q, J) {
                  return q.indexOf(J) >= 0 || J === '' || ie(J) ? q : [].concat(Cr(q), [J])
                }, []))
          else if (b === 'number') {
            var U = rI(
              T,
              i.filter(function (q) {
                return q.props[o] === E && (A || !q.props.hide)
              }),
              w,
              a,
              f,
            )
            U && (P = U)
          }
          d && (b === 'number' || O !== 'auto') && (j = un(T, w, 'category'))
        } else
          d
            ? (P = ia(0, $))
            : u && u[E] && u[E].hasStack && b === 'number'
              ? (P = h === 'expand' ? [0, 1] : dv(u[E].stackGroups, c, s))
              : (P = lv(
                  T,
                  i.filter(function (q) {
                    return q.props[o] === E && (A || !q.props.hide)
                  }),
                  b,
                  f,
                  !0,
                ))
        if (b === 'number') (P = Uu(l, P, E, a, S)), L && (P = gu(L, P, g))
        else if (b === 'category' && L) {
          var G = L,
            V = P.every(function (q) {
              return G.indexOf(q) >= 0
            })
          V && (P = G)
        }
      }
      return C(
        C({}, y),
        {},
        H(
          {},
          E,
          C(
            C({}, v.props),
            {},
            {
              axisType: a,
              domain: P,
              categoricalDomain: j,
              duplicateDomain: M,
              originalDomain: (p = v.props.domain) !== null && p !== void 0 ? p : D,
              isCategorical: d,
              layout: f,
            },
          ),
        ),
      )
    }, {})
  },
  CR = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      c = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.layout,
      l = t.children,
      h = Za(t.data, { graphicalItems: n, dataStartIndex: c, dataEndIndex: s }),
      d = h.length,
      y = fv(f, a),
      v = -1
    return n.reduce(function (p, x) {
      var b = x.props[o],
        w = uy('number')
      if (!p[b]) {
        v++
        var g
        return (
          y
            ? (g = ia(0, d))
            : u && u[b] && u[b].hasStack
              ? ((g = dv(u[b].stackGroups, c, s)), (g = Uu(l, g, b, a)))
              : ((g = gu(
                  w,
                  lv(
                    h,
                    n.filter(function (m) {
                      return m.props[o] === b && !m.props.hide
                    }),
                    'number',
                    f,
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (g = Uu(l, g, b, a))),
          C(
            C({}, p),
            {},
            H(
              {},
              b,
              C(
                C({ axisType: a }, i.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: Xe(PR, ''.concat(a, '.').concat(v % 2), null),
                  domain: g,
                  originalDomain: w,
                  isCategorical: y,
                  layout: f,
                },
              ),
            ),
          )
        )
      }
      return p
    }, {})
  },
  IR = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? 'xAxis' : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      c = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.children,
      l = ''.concat(i, 'Id'),
      h = tt(f, a),
      d = {}
    return (
      h && h.length
        ? (d = MR(t, {
            axes: h,
            graphicalItems: o,
            axisType: i,
            axisIdKey: l,
            stackGroups: u,
            dataStartIndex: c,
            dataEndIndex: s,
          }))
        : o &&
          o.length &&
          (d = CR(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: l,
            stackGroups: u,
            dataStartIndex: c,
            dataEndIndex: s,
          })),
      d
    )
  },
  kR = function (t) {
    var r = $t(t),
      n = vt(r, !1, !0)
    return {
      tooltipTicks: n,
      orderedTooltipTicks: mc(n, function (i) {
        return i.coordinate
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: Vi(r, n),
    }
  },
  Hh = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = Fe(r, Tr),
      a = 0,
      o = 0
    return (
      t.data && t.data.length !== 0 && (o = t.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)),
      { chartX: 0, chartY: 0, dataStartIndex: a, dataEndIndex: o, activeTooltipIndex: -1, isTooltipActive: !!n }
    )
  },
  NR = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = yt(r && r.type)
          return n && n.indexOf('Bar') >= 0
        })
  },
  Gh = function (t) {
    return t === 'horizontal'
      ? { numericAxisName: 'yAxis', cateAxisName: 'xAxis' }
      : t === 'vertical'
        ? { numericAxisName: 'xAxis', cateAxisName: 'yAxis' }
        : t === 'centric'
          ? { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' }
          : { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' }
  },
  DR = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      u = t.yAxisMap,
      c = u === void 0 ? {} : u,
      s = n.width,
      f = n.height,
      l = n.children,
      h = n.margin || {},
      d = Fe(l, Tr),
      y = Fe(l, xr),
      v = Object.keys(c).reduce(
        function (m, O) {
          var S = c[O],
            A = S.orientation
          return !S.mirror && !S.hide ? C(C({}, m), {}, H({}, A, m[A] + S.width)) : m
        },
        { left: h.left || 0, right: h.right || 0 },
      ),
      p = Object.keys(o).reduce(
        function (m, O) {
          var S = o[O],
            A = S.orientation
          return !S.mirror && !S.hide ? C(C({}, m), {}, H({}, A, Xe(m, ''.concat(A)) + S.height)) : m
        },
        { top: h.top || 0, bottom: h.bottom || 0 },
      ),
      x = C(C({}, p), v),
      b = x.bottom
    d && (x.bottom += d.props.height || Tr.defaultProps.height), y && r && (x = eI(x, i, n, r))
    var w = s - x.left - x.right,
      g = f - x.top - x.bottom
    return C(C({ brushBottom: b }, x), {}, { width: Math.max(w, 0), height: Math.max(g, 0) })
  },
  LR = function (t, r) {
    if (r === 'xAxis') return t[r].width
    if (r === 'yAxis') return t[r].height
  },
  BR = function (t) {
    var r,
      n = t.chartName,
      i = t.GraphicalChild,
      a = t.defaultTooltipEventType,
      o = a === void 0 ? 'axis' : a,
      u = t.validateTooltipEventTypes,
      c = u === void 0 ? ['axis'] : u,
      s = t.axisComponents,
      f = t.legendContent,
      l = t.formatAxisMap,
      h = t.defaultProps,
      d = function (p, x) {
        var b = x.graphicalItems,
          w = x.stackGroups,
          g = x.offset,
          m = x.updateId,
          O = x.dataStartIndex,
          S = x.dataEndIndex,
          A = p.barSize,
          E = p.layout,
          T = p.barGap,
          $ = p.barCategoryGap,
          P = p.maxBarSize,
          M = Gh(E),
          j = M.numericAxisName,
          D = M.cateAxisName,
          I = NR(b),
          L = []
        return (
          b.forEach(function (B, U) {
            var G = Za(p.data, { graphicalItems: [B], dataStartIndex: O, dataEndIndex: S }),
              V = B.props,
              q = V.dataKey,
              J = V.maxBarSize,
              $e = B.props[''.concat(j, 'Id')],
              ke = B.props[''.concat(D, 'Id')],
              Dt = {},
              Ne = s.reduce(function (Lt, Bt) {
                var Ja = x[''.concat(Bt.axisType, 'Map')],
                  ts = B.props[''.concat(Bt.axisType, 'Id')]
                ;(Ja && Ja[ts]) || Bt.axisType === 'zAxis' || Yt(!1)
                var rs = Ja[ts]
                return C(C({}, Lt), {}, H(H({}, Bt.axisType, rs), ''.concat(Bt.axisType, 'Ticks'), vt(rs)))
              }, Dt),
              ft = Ne[D],
              W = Ne[''.concat(D, 'Ticks')],
              K = w && w[$e] && w[$e].hasStack && pI(B, w[$e].stackGroups),
              Y = yt(B.type).indexOf('Bar') >= 0,
              k = Vi(ft, W),
              pe = [],
              ee = I && JC({ barSize: A, stackGroups: w, totalSize: LR(Ne, D) })
            if (Y) {
              var ge,
                ve,
                Be = ie(J) ? P : J,
                ht = (ge = (ve = Vi(ft, W, !0)) !== null && ve !== void 0 ? ve : Be) !== null && ge !== void 0 ? ge : 0
              ;(pe = QC({
                barGap: T,
                barCategoryGap: $,
                bandSize: ht !== k ? ht : k,
                sizeList: ee[ke],
                maxBarSize: Be,
              })),
                ht !== k &&
                  (pe = pe.map(function (Lt) {
                    return C(
                      C({}, Lt),
                      {},
                      { position: C(C({}, Lt.position), {}, { offset: Lt.position.offset - ht / 2 }) },
                    )
                  }))
            }
            var ii = B && B.type && B.type.getComposedData
            ii &&
              L.push({
                props: C(
                  C(
                    {},
                    ii(
                      C(
                        C({}, Ne),
                        {},
                        {
                          displayedData: G,
                          props: p,
                          dataKey: q,
                          item: B,
                          bandSize: k,
                          barPosition: pe,
                          offset: g,
                          stackedData: K,
                          layout: E,
                          dataStartIndex: O,
                          dataEndIndex: S,
                        },
                      ),
                    ),
                  ),
                  {},
                  H(H(H({ key: B.key || 'item-'.concat(U) }, j, Ne[j]), D, Ne[D]), 'animationId', m),
                ),
                childIndex: u0(B, p.children),
                item: B,
              })
          }),
          L
        )
      },
      y = function (p, x) {
        var b = p.props,
          w = p.dataStartIndex,
          g = p.dataEndIndex,
          m = p.updateId
        if (!gs({ props: b })) return null
        var O = b.children,
          S = b.layout,
          A = b.stackOffset,
          E = b.data,
          T = b.reverseStackOrder,
          $ = Gh(S),
          P = $.numericAxisName,
          M = $.cateAxisName,
          j = tt(O, i),
          D = fI(E, j, ''.concat(P, 'Id'), ''.concat(M, 'Id'), A, T),
          I = s.reduce(function (V, q) {
            var J = ''.concat(q.axisType, 'Map')
            return C(
              C({}, V),
              {},
              H(
                {},
                J,
                IR(
                  b,
                  C(
                    C({}, q),
                    {},
                    { graphicalItems: j, stackGroups: q.axisType === P && D, dataStartIndex: w, dataEndIndex: g },
                  ),
                ),
              ),
            )
          }, {}),
          L = DR(C(C({}, I), {}, { props: b, graphicalItems: j }), x == null ? void 0 : x.legendBBox)
        Object.keys(I).forEach(function (V) {
          I[V] = l(b, I[V], L, V.replace('Map', ''), n)
        })
        var B = I[''.concat(M, 'Map')],
          U = kR(B),
          G = d(
            b,
            C(
              C({}, I),
              {},
              { dataStartIndex: w, dataEndIndex: g, updateId: m, graphicalItems: j, stackGroups: D, offset: L },
            ),
          )
        return C(C({ formattedGraphicalItems: G, graphicalItems: j, offset: L, stackGroups: D }, U), I)
      }
    return (
      (r = (function (v) {
        OR(p, v)
        function p(x) {
          var b, w, g
          return (
            gR(this, p),
            (g = xR(this, p, [x])),
            H(Q(g), 'eventEmitterSymbol', Symbol('rechartsEventEmitter')),
            H(Q(g), 'accessibilityManager', new nR()),
            H(Q(g), 'handleLegendBBoxUpdate', function (m) {
              if (m) {
                var O = g.state,
                  S = O.dataStartIndex,
                  A = O.dataEndIndex,
                  E = O.updateId
                g.setState(
                  C(
                    { legendBBox: m },
                    y(
                      { props: g.props, dataStartIndex: S, dataEndIndex: A, updateId: E },
                      C(C({}, g.state), {}, { legendBBox: m }),
                    ),
                  ),
                )
              }
            }),
            H(Q(g), 'handleReceiveSyncEvent', function (m, O, S) {
              if (g.props.syncId === m) {
                if (S === g.eventEmitterSymbol && typeof g.props.syncMethod != 'function') return
                g.applySyncEvent(O)
              }
            }),
            H(Q(g), 'handleBrushChange', function (m) {
              var O = m.startIndex,
                S = m.endIndex
              if (O !== g.state.dataStartIndex || S !== g.state.dataEndIndex) {
                var A = g.state.updateId
                g.setState(function () {
                  return C(
                    { dataStartIndex: O, dataEndIndex: S },
                    y({ props: g.props, dataStartIndex: O, dataEndIndex: S, updateId: A }, g.state),
                  )
                }),
                  g.triggerSyncEvent({ dataStartIndex: O, dataEndIndex: S })
              }
            }),
            H(Q(g), 'handleMouseEnter', function (m) {
              var O = g.getMouseInfo(m)
              if (O) {
                var S = C(C({}, O), {}, { isTooltipActive: !0 })
                g.setState(S), g.triggerSyncEvent(S)
                var A = g.props.onMouseEnter
                Z(A) && A(S, m)
              }
            }),
            H(Q(g), 'triggeredAfterMouseMove', function (m) {
              var O = g.getMouseInfo(m),
                S = O ? C(C({}, O), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 }
              g.setState(S), g.triggerSyncEvent(S)
              var A = g.props.onMouseMove
              Z(A) && A(S, m)
            }),
            H(Q(g), 'handleItemMouseEnter', function (m) {
              g.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: m,
                  activePayload: m.tooltipPayload,
                  activeCoordinate: m.tooltipPosition || { x: m.cx, y: m.cy },
                }
              })
            }),
            H(Q(g), 'handleItemMouseLeave', function () {
              g.setState(function () {
                return { isTooltipActive: !1 }
              })
            }),
            H(Q(g), 'handleMouseMove', function (m) {
              m.persist(), g.throttleTriggeredAfterMouseMove(m)
            }),
            H(Q(g), 'handleMouseLeave', function (m) {
              g.throttleTriggeredAfterMouseMove.cancel()
              var O = { isTooltipActive: !1 }
              g.setState(O), g.triggerSyncEvent(O)
              var S = g.props.onMouseLeave
              Z(S) && S(O, m)
            }),
            H(Q(g), 'handleOuterEvent', function (m) {
              var O = o0(m),
                S = Xe(g.props, ''.concat(O))
              if (O && Z(S)) {
                var A, E
                ;/.*touch.*/i.test(O) ? (E = g.getMouseInfo(m.changedTouches[0])) : (E = g.getMouseInfo(m)),
                  S((A = E) !== null && A !== void 0 ? A : {}, m)
              }
            }),
            H(Q(g), 'handleClick', function (m) {
              var O = g.getMouseInfo(m)
              if (O) {
                var S = C(C({}, O), {}, { isTooltipActive: !0 })
                g.setState(S), g.triggerSyncEvent(S)
                var A = g.props.onClick
                Z(A) && A(S, m)
              }
            }),
            H(Q(g), 'handleMouseDown', function (m) {
              var O = g.props.onMouseDown
              if (Z(O)) {
                var S = g.getMouseInfo(m)
                O(S, m)
              }
            }),
            H(Q(g), 'handleMouseUp', function (m) {
              var O = g.props.onMouseUp
              if (Z(O)) {
                var S = g.getMouseInfo(m)
                O(S, m)
              }
            }),
            H(Q(g), 'handleTouchMove', function (m) {
              m.changedTouches != null &&
                m.changedTouches.length > 0 &&
                g.throttleTriggeredAfterMouseMove(m.changedTouches[0])
            }),
            H(Q(g), 'handleTouchStart', function (m) {
              m.changedTouches != null && m.changedTouches.length > 0 && g.handleMouseDown(m.changedTouches[0])
            }),
            H(Q(g), 'handleTouchEnd', function (m) {
              m.changedTouches != null && m.changedTouches.length > 0 && g.handleMouseUp(m.changedTouches[0])
            }),
            H(Q(g), 'triggerSyncEvent', function (m) {
              g.props.syncId !== void 0 && $o.emit(Po, g.props.syncId, m, g.eventEmitterSymbol)
            }),
            H(Q(g), 'applySyncEvent', function (m) {
              var O = g.props,
                S = O.layout,
                A = O.syncMethod,
                E = g.state.updateId,
                T = m.dataStartIndex,
                $ = m.dataEndIndex
              if (m.dataStartIndex !== void 0 || m.dataEndIndex !== void 0)
                g.setState(
                  C(
                    { dataStartIndex: T, dataEndIndex: $ },
                    y({ props: g.props, dataStartIndex: T, dataEndIndex: $, updateId: E }, g.state),
                  ),
                )
              else if (m.activeTooltipIndex !== void 0) {
                var P = m.chartX,
                  M = m.chartY,
                  j = m.activeTooltipIndex,
                  D = g.state,
                  I = D.offset,
                  L = D.tooltipTicks
                if (!I) return
                if (typeof A == 'function') j = A(L, m)
                else if (A === 'value') {
                  j = -1
                  for (var B = 0; B < L.length; B++)
                    if (L[B].value === m.activeLabel) {
                      j = B
                      break
                    }
                }
                var U = C(C({}, I), {}, { x: I.left, y: I.top }),
                  G = Math.min(P, U.x + U.width),
                  V = Math.min(M, U.y + U.height),
                  q = L[j] && L[j].value,
                  J = Gu(g.state, g.props.data, j),
                  $e = L[j]
                    ? { x: S === 'horizontal' ? L[j].coordinate : G, y: S === 'horizontal' ? V : L[j].coordinate }
                    : oy
                g.setState(
                  C(C({}, m), {}, { activeLabel: q, activeCoordinate: $e, activePayload: J, activeTooltipIndex: j }),
                )
              } else g.setState(m)
            }),
            H(Q(g), 'renderCursor', function (m) {
              var O,
                S = g.state,
                A = S.isTooltipActive,
                E = S.activeCoordinate,
                T = S.activePayload,
                $ = S.offset,
                P = S.activeTooltipIndex,
                M = S.tooltipAxisBandSize,
                j = g.getTooltipEventType(),
                D = (O = m.props.active) !== null && O !== void 0 ? O : A,
                I = g.props.layout,
                L = m.key || '_recharts-cursor'
              return _.createElement(lR, {
                key: L,
                activeCoordinate: E,
                activePayload: T,
                activeTooltipIndex: P,
                chartName: n,
                element: m,
                isActive: D,
                layout: I,
                offset: $,
                tooltipAxisBandSize: M,
                tooltipEventType: j,
              })
            }),
            H(Q(g), 'renderPolarAxis', function (m, O, S) {
              var A = Xe(m, 'type.axisType'),
                E = Xe(g.state, ''.concat(A, 'Map')),
                T = E && E[m.props[''.concat(A, 'Id')]]
              return N.cloneElement(
                m,
                C(
                  C({}, T),
                  {},
                  { className: ae(A, T.className), key: m.key || ''.concat(O, '-').concat(S), ticks: vt(T, !0) },
                ),
              )
            }),
            H(Q(g), 'renderPolarGrid', function (m) {
              var O = m.props,
                S = O.radialLines,
                A = O.polarAngles,
                E = O.polarRadius,
                T = g.state,
                $ = T.radiusAxisMap,
                P = T.angleAxisMap,
                M = $t($),
                j = $t(P),
                D = j.cx,
                I = j.cy,
                L = j.innerRadius,
                B = j.outerRadius
              return N.cloneElement(m, {
                polarAngles: Array.isArray(A)
                  ? A
                  : vt(j, !0).map(function (U) {
                      return U.coordinate
                    }),
                polarRadius: Array.isArray(E)
                  ? E
                  : vt(M, !0).map(function (U) {
                      return U.coordinate
                    }),
                cx: D,
                cy: I,
                innerRadius: L,
                outerRadius: B,
                key: m.key || 'polar-grid',
                radialLines: S,
              })
            }),
            H(Q(g), 'renderLegend', function () {
              var m = g.state.formattedGraphicalItems,
                O = g.props,
                S = O.children,
                A = O.width,
                E = O.height,
                T = g.props.margin || {},
                $ = A - (T.left || 0) - (T.right || 0),
                P = cv({ children: S, formattedGraphicalItems: m, legendWidth: $, legendContent: f })
              if (!P) return null
              var M = P.item,
                j = zh(P, fR)
              return N.cloneElement(
                M,
                C(C({}, j), {}, { chartWidth: A, chartHeight: E, margin: T, onBBoxUpdate: g.handleLegendBBoxUpdate }),
              )
            }),
            H(Q(g), 'renderTooltip', function () {
              var m,
                O = g.props,
                S = O.children,
                A = O.accessibilityLayer,
                E = Fe(S, it)
              if (!E) return null
              var T = g.state,
                $ = T.isTooltipActive,
                P = T.activeCoordinate,
                M = T.activePayload,
                j = T.activeLabel,
                D = T.offset,
                I = (m = E.props.active) !== null && m !== void 0 ? m : $
              return N.cloneElement(E, {
                viewBox: C(C({}, D), {}, { x: D.left, y: D.top }),
                active: I,
                label: j,
                payload: I ? M : [],
                coordinate: P,
                accessibilityLayer: A,
              })
            }),
            H(Q(g), 'renderBrush', function (m) {
              var O = g.props,
                S = O.margin,
                A = O.data,
                E = g.state,
                T = E.offset,
                $ = E.dataStartIndex,
                P = E.dataEndIndex,
                M = E.updateId
              return N.cloneElement(m, {
                key: m.key || '_recharts-brush',
                onChange: vi(g.handleBrushChange, m.props.onChange),
                data: A,
                x: F(m.props.x) ? m.props.x : T.left,
                y: F(m.props.y) ? m.props.y : T.top + T.height + T.brushBottom - (S.bottom || 0),
                width: F(m.props.width) ? m.props.width : T.width,
                startIndex: $,
                endIndex: P,
                updateId: 'brush-'.concat(M),
              })
            }),
            H(Q(g), 'renderReferenceElement', function (m, O, S) {
              if (!m) return null
              var A = Q(g),
                E = A.clipPathId,
                T = g.state,
                $ = T.xAxisMap,
                P = T.yAxisMap,
                M = T.offset,
                j = m.props,
                D = j.xAxisId,
                I = j.yAxisId
              return N.cloneElement(m, {
                key: m.key || ''.concat(O, '-').concat(S),
                xAxis: $[D],
                yAxis: P[I],
                viewBox: { x: M.left, y: M.top, width: M.width, height: M.height },
                clipPathId: E,
              })
            }),
            H(Q(g), 'renderActivePoints', function (m) {
              var O = m.item,
                S = m.activePoint,
                A = m.basePoint,
                E = m.childIndex,
                T = m.isRange,
                $ = [],
                P = O.props.key,
                M = O.item.props,
                j = M.activeDot,
                D = M.dataKey,
                I = C(
                  C(
                    {
                      index: E,
                      dataKey: D,
                      cx: S.x,
                      cy: S.y,
                      r: 4,
                      fill: Hc(O.item),
                      strokeWidth: 2,
                      stroke: '#fff',
                      payload: S.payload,
                      value: S.value,
                      key: ''.concat(P, '-activePoint-').concat(E),
                    },
                    re(j, !1),
                  ),
                  wi(j),
                )
              return (
                $.push(p.renderActiveDot(j, I)),
                A
                  ? $.push(
                      p.renderActiveDot(
                        j,
                        C(C({}, I), {}, { cx: A.x, cy: A.y, key: ''.concat(P, '-basePoint-').concat(E) }),
                      ),
                    )
                  : T && $.push(null),
                $
              )
            }),
            H(Q(g), 'renderGraphicChild', function (m, O, S) {
              var A = g.filterFormatItem(m, O, S)
              if (!A) return null
              var E = g.getTooltipEventType(),
                T = g.state,
                $ = T.isTooltipActive,
                P = T.tooltipAxis,
                M = T.activeTooltipIndex,
                j = T.activeLabel,
                D = g.props.children,
                I = Fe(D, it),
                L = A.props,
                B = L.points,
                U = L.isRange,
                G = L.baseLine,
                V = A.item.props,
                q = V.activeDot,
                J = V.hide,
                $e = V.activeBar,
                ke = V.activeShape,
                Dt = !!(!J && $ && I && (q || $e || ke)),
                Ne = {}
              E !== 'axis' && I && I.props.trigger === 'click'
                ? (Ne = { onClick: vi(g.handleItemMouseEnter, m.props.onClick) })
                : E !== 'axis' &&
                  (Ne = {
                    onMouseLeave: vi(g.handleItemMouseLeave, m.props.onMouseLeave),
                    onMouseEnter: vi(g.handleItemMouseEnter, m.props.onMouseEnter),
                  })
              var ft = N.cloneElement(m, C(C({}, A.props), Ne))
              function W(Bt) {
                return typeof P.dataKey == 'function' ? P.dataKey(Bt.payload) : null
              }
              if (Dt)
                if (M >= 0) {
                  var K, Y
                  if (P.dataKey && !P.allowDuplicatedCategory) {
                    var k = typeof P.dataKey == 'function' ? W : 'payload.'.concat(P.dataKey.toString())
                    ;(K = jo(B, k, j)), (Y = U && G && jo(G, k, j))
                  } else (K = B == null ? void 0 : B[M]), (Y = U && G && G[M])
                  if (ke || $e) {
                    var pe = m.props.activeIndex !== void 0 ? m.props.activeIndex : M
                    return [N.cloneElement(m, C(C(C({}, A.props), Ne), {}, { activeIndex: pe })), null, null]
                  }
                  if (!ie(K))
                    return [ft].concat(
                      Cr(g.renderActivePoints({ item: A, activePoint: K, basePoint: Y, childIndex: M, isRange: U })),
                    )
                } else {
                  var ee,
                    ge =
                      (ee = g.getItemByXY(g.state.activeCoordinate)) !== null && ee !== void 0
                        ? ee
                        : { graphicalItem: ft },
                    ve = ge.graphicalItem,
                    Be = ve.item,
                    ht = Be === void 0 ? m : Be,
                    ii = ve.childIndex,
                    Lt = C(C(C({}, A.props), Ne), {}, { activeIndex: ii })
                  return [N.cloneElement(ht, Lt), null, null]
                }
              return U ? [ft, null, null] : [ft, null]
            }),
            H(Q(g), 'renderCustomized', function (m, O, S) {
              return N.cloneElement(m, C(C({ key: 'recharts-customized-'.concat(S) }, g.props), g.state))
            }),
            H(Q(g), 'renderMap', {
              CartesianGrid: { handler: xi, once: !0 },
              ReferenceArea: { handler: g.renderReferenceElement },
              ReferenceLine: { handler: xi },
              ReferenceDot: { handler: g.renderReferenceElement },
              XAxis: { handler: xi },
              YAxis: { handler: xi },
              Brush: { handler: g.renderBrush, once: !0 },
              Bar: { handler: g.renderGraphicChild },
              Line: { handler: g.renderGraphicChild },
              Area: { handler: g.renderGraphicChild },
              Radar: { handler: g.renderGraphicChild },
              RadialBar: { handler: g.renderGraphicChild },
              Scatter: { handler: g.renderGraphicChild },
              Pie: { handler: g.renderGraphicChild },
              Funnel: { handler: g.renderGraphicChild },
              Tooltip: { handler: g.renderCursor, once: !0 },
              PolarGrid: { handler: g.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: g.renderPolarAxis },
              PolarRadiusAxis: { handler: g.renderPolarAxis },
              Customized: { handler: g.renderCustomized },
            }),
            (g.clipPathId = ''.concat((b = x.id) !== null && b !== void 0 ? b : Pa('recharts'), '-clip')),
            (g.throttleTriggeredAfterMouseMove = lp(
              g.triggeredAfterMouseMove,
              (w = x.throttleDelay) !== null && w !== void 0 ? w : 1e3 / 60,
            )),
            (g.state = {}),
            g
          )
        }
        return (
          bR(p, [
            {
              key: 'componentDidMount',
              value: function () {
                var b, w
                this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left: (b = this.props.margin.left) !== null && b !== void 0 ? b : 0,
                      top: (w = this.props.margin.top) !== null && w !== void 0 ? w : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip()
              },
            },
            {
              key: 'displayDefaultTooltip',
              value: function () {
                var b = this.props,
                  w = b.children,
                  g = b.data,
                  m = b.height,
                  O = b.layout,
                  S = Fe(w, it)
                if (S) {
                  var A = S.props.defaultIndex
                  if (!(typeof A != 'number' || A < 0 || A > this.state.tooltipTicks.length)) {
                    var E = this.state.tooltipTicks[A] && this.state.tooltipTicks[A].value,
                      T = Gu(this.state, g, A, E),
                      $ = this.state.tooltipTicks[A].coordinate,
                      P = (this.state.offset.top + m) / 2,
                      M = O === 'horizontal',
                      j = M ? { x: $, y: P } : { y: $, x: P },
                      D = this.state.formattedGraphicalItems.find(function (L) {
                        var B = L.item
                        return B.type.name === 'Scatter'
                      })
                    D && ((j = C(C({}, j), D.props.points[A].tooltipPosition)), (T = D.props.points[A].tooltipPayload))
                    var I = {
                      activeTooltipIndex: A,
                      isTooltipActive: !0,
                      activeLabel: E,
                      activePayload: T,
                      activeCoordinate: j,
                    }
                    this.setState(I), this.renderCursor(S), this.accessibilityManager.setIndex(A)
                  }
                }
              },
            },
            {
              key: 'getSnapshotBeforeUpdate',
              value: function (b, w) {
                if (!this.props.accessibilityLayer) return null
                if (
                  (this.state.tooltipTicks !== w.tooltipTicks &&
                    this.accessibilityManager.setDetails({ coordinateList: this.state.tooltipTicks }),
                  this.props.layout !== b.layout && this.accessibilityManager.setDetails({ layout: this.props.layout }),
                  this.props.margin !== b.margin)
                ) {
                  var g, m
                  this.accessibilityManager.setDetails({
                    offset: {
                      left: (g = this.props.margin.left) !== null && g !== void 0 ? g : 0,
                      top: (m = this.props.margin.top) !== null && m !== void 0 ? m : 0,
                    },
                  })
                }
                return null
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (b) {
                Co([Fe(b.children, it)], [Fe(this.props.children, it)]) || this.displayDefaultTooltip()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              },
            },
            {
              key: 'getTooltipEventType',
              value: function () {
                var b = Fe(this.props.children, it)
                if (b && typeof b.props.shared == 'boolean') {
                  var w = b.props.shared ? 'axis' : 'item'
                  return c.indexOf(w) >= 0 ? w : o
                }
                return o
              },
            },
            {
              key: 'getMouseInfo',
              value: function (b) {
                if (!this.container) return null
                var w = this.container,
                  g = w.getBoundingClientRect(),
                  m = CT(g),
                  O = { chartX: Math.round(b.pageX - m.left), chartY: Math.round(b.pageY - m.top) },
                  S = g.width / w.offsetWidth || 1,
                  A = this.inRange(O.chartX, O.chartY, S)
                if (!A) return null
                var E = this.state,
                  T = E.xAxisMap,
                  $ = E.yAxisMap,
                  P = this.getTooltipEventType()
                if (P !== 'axis' && T && $) {
                  var M = $t(T).scale,
                    j = $t($).scale,
                    D = M && M.invert ? M.invert(O.chartX) : null,
                    I = j && j.invert ? j.invert(O.chartY) : null
                  return C(C({}, O), {}, { xValue: D, yValue: I })
                }
                var L = qh(this.state, this.props.data, this.props.layout, A)
                return L ? C(C({}, O), L) : null
              },
            },
            {
              key: 'inRange',
              value: function (b, w) {
                var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                  m = this.props.layout,
                  O = b / g,
                  S = w / g
                if (m === 'horizontal' || m === 'vertical') {
                  var A = this.state.offset,
                    E = O >= A.left && O <= A.left + A.width && S >= A.top && S <= A.top + A.height
                  return E ? { x: O, y: S } : null
                }
                var T = this.state,
                  $ = T.angleAxisMap,
                  P = T.radiusAxisMap
                if ($ && P) {
                  var M = $t($)
                  return Pf({ x: O, y: S }, M)
                }
                return null
              },
            },
            {
              key: 'parseEventsOfWrapper',
              value: function () {
                var b = this.props.children,
                  w = this.getTooltipEventType(),
                  g = Fe(b, it),
                  m = {}
                g &&
                  w === 'axis' &&
                  (g.props.trigger === 'click'
                    ? (m = { onClick: this.handleClick })
                    : (m = {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                      }))
                var O = wi(this.props, this.handleOuterEvent)
                return C(C({}, O), m)
              },
            },
            {
              key: 'addListener',
              value: function () {
                $o.on(Po, this.handleReceiveSyncEvent)
              },
            },
            {
              key: 'removeListener',
              value: function () {
                $o.removeListener(Po, this.handleReceiveSyncEvent)
              },
            },
            {
              key: 'filterFormatItem',
              value: function (b, w, g) {
                for (var m = this.state.formattedGraphicalItems, O = 0, S = m.length; O < S; O++) {
                  var A = m[O]
                  if (A.item === b || A.props.key === b.key || (w === yt(A.item.type) && g === A.childIndex)) return A
                }
                return null
              },
            },
            {
              key: 'renderClipPath',
              value: function () {
                var b = this.clipPathId,
                  w = this.state.offset,
                  g = w.left,
                  m = w.top,
                  O = w.height,
                  S = w.width
                return _.createElement(
                  'defs',
                  null,
                  _.createElement('clipPath', { id: b }, _.createElement('rect', { x: g, y: m, height: O, width: S })),
                )
              },
            },
            {
              key: 'getXScales',
              value: function () {
                var b = this.state.xAxisMap
                return b
                  ? Object.entries(b).reduce(function (w, g) {
                      var m = Wh(g, 2),
                        O = m[0],
                        S = m[1]
                      return C(C({}, w), {}, H({}, O, S.scale))
                    }, {})
                  : null
              },
            },
            {
              key: 'getYScales',
              value: function () {
                var b = this.state.yAxisMap
                return b
                  ? Object.entries(b).reduce(function (w, g) {
                      var m = Wh(g, 2),
                        O = m[0],
                        S = m[1]
                      return C(C({}, w), {}, H({}, O, S.scale))
                    }, {})
                  : null
              },
            },
            {
              key: 'getXScaleByAxisId',
              value: function (b) {
                var w
                return (w = this.state.xAxisMap) === null || w === void 0 || (w = w[b]) === null || w === void 0
                  ? void 0
                  : w.scale
              },
            },
            {
              key: 'getYScaleByAxisId',
              value: function (b) {
                var w
                return (w = this.state.yAxisMap) === null || w === void 0 || (w = w[b]) === null || w === void 0
                  ? void 0
                  : w.scale
              },
            },
            {
              key: 'getItemByXY',
              value: function (b) {
                var w = this.state,
                  g = w.formattedGraphicalItems,
                  m = w.activeItem
                if (g && g.length)
                  for (var O = 0, S = g.length; O < S; O++) {
                    var A = g[O],
                      E = A.props,
                      T = A.item,
                      $ = yt(T.type)
                    if ($ === 'Bar') {
                      var P = (E.data || []).find(function (I) {
                        return Vk(b, I)
                      })
                      if (P) return { graphicalItem: A, payload: P }
                    } else if ($ === 'RadialBar') {
                      var M = (E.data || []).find(function (I) {
                        return Pf(b, I)
                      })
                      if (M) return { graphicalItem: A, payload: M }
                    } else if (Ga(A, m) || Ka(A, m) || Bn(A, m)) {
                      var j = JN({ graphicalItem: A, activeTooltipItem: m, itemData: T.props.data }),
                        D = T.props.activeIndex === void 0 ? j : T.props.activeIndex
                      return {
                        graphicalItem: C(C({}, A), {}, { childIndex: D }),
                        payload: Bn(A, m) ? T.props.data[j] : A.props.data[j],
                      }
                    }
                  }
                return null
              },
            },
            {
              key: 'render',
              value: function () {
                var b = this
                if (!gs(this)) return null
                var w = this.props,
                  g = w.children,
                  m = w.className,
                  O = w.width,
                  S = w.height,
                  A = w.style,
                  E = w.compact,
                  T = w.title,
                  $ = w.desc,
                  P = zh(w, hR),
                  M = re(P, !1)
                if (E)
                  return _.createElement(
                    $h,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    _.createElement(
                      ko,
                      sn({}, M, { width: O, height: S, title: T, desc: $ }),
                      this.renderClipPath(),
                      bs(g, this.renderMap),
                    ),
                  )
                if (this.props.accessibilityLayer) {
                  var j, D
                  ;(M.tabIndex = (j = this.props.tabIndex) !== null && j !== void 0 ? j : 0),
                    (M.role = (D = this.props.role) !== null && D !== void 0 ? D : 'application'),
                    (M.onKeyDown = function (L) {
                      b.accessibilityManager.keyboardEvent(L)
                    }),
                    (M.onFocus = function () {
                      b.accessibilityManager.focus()
                    })
                }
                var I = this.parseEventsOfWrapper()
                return _.createElement(
                  $h,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  _.createElement(
                    'div',
                    sn(
                      {
                        className: ae('recharts-wrapper', m),
                        style: C({ position: 'relative', cursor: 'default', width: O, height: S }, A),
                      },
                      I,
                      {
                        ref: function (B) {
                          b.container = B
                        },
                      },
                    ),
                    _.createElement(
                      ko,
                      sn({}, M, { width: O, height: S, title: T, desc: $, style: TR }),
                      this.renderClipPath(),
                      bs(g, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                )
              },
            },
          ]),
          p
        )
      })(N.Component)),
      H(r, 'displayName', n),
      H(
        r,
        'defaultProps',
        C(
          {
            layout: 'horizontal',
            stackOffset: 'none',
            barCategoryGap: '10%',
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: 'index',
          },
          h,
        ),
      ),
      H(r, 'getDerivedStateFromProps', function (v, p) {
        var x = v.dataKey,
          b = v.data,
          w = v.children,
          g = v.width,
          m = v.height,
          O = v.layout,
          S = v.stackOffset,
          A = v.margin,
          E = p.dataStartIndex,
          T = p.dataEndIndex
        if (p.updateId === void 0) {
          var $ = Hh(v)
          return C(
            C(C({}, $), {}, { updateId: 0 }, y(C(C({ props: v }, $), {}, { updateId: 0 }), p)),
            {},
            {
              prevDataKey: x,
              prevData: b,
              prevWidth: g,
              prevHeight: m,
              prevLayout: O,
              prevStackOffset: S,
              prevMargin: A,
              prevChildren: w,
            },
          )
        }
        if (
          x !== p.prevDataKey ||
          b !== p.prevData ||
          g !== p.prevWidth ||
          m !== p.prevHeight ||
          O !== p.prevLayout ||
          S !== p.prevStackOffset ||
          !pr(A, p.prevMargin)
        ) {
          var P = Hh(v),
            M = { chartX: p.chartX, chartY: p.chartY, isTooltipActive: p.isTooltipActive },
            j = C(C({}, qh(p, b, O)), {}, { updateId: p.updateId + 1 }),
            D = C(C(C({}, P), M), j)
          return C(
            C(C({}, D), y(C({ props: v }, D), p)),
            {},
            {
              prevDataKey: x,
              prevData: b,
              prevWidth: g,
              prevHeight: m,
              prevLayout: O,
              prevStackOffset: S,
              prevMargin: A,
              prevChildren: w,
            },
          )
        }
        if (!Co(w, p.prevChildren)) {
          var I,
            L,
            B,
            U,
            G = Fe(w, Tr),
            V =
              G && (I = (L = G.props) === null || L === void 0 ? void 0 : L.startIndex) !== null && I !== void 0
                ? I
                : E,
            q =
              G && (B = (U = G.props) === null || U === void 0 ? void 0 : U.endIndex) !== null && B !== void 0 ? B : T,
            J = V !== E || q !== T,
            $e = !ie(b),
            ke = $e && !J ? p.updateId : p.updateId + 1
          return C(
            C({ updateId: ke }, y(C(C({ props: v }, p), {}, { updateId: ke, dataStartIndex: V, dataEndIndex: q }), p)),
            {},
            { prevChildren: w, dataStartIndex: V, dataEndIndex: q },
          )
        }
        return null
      }),
      H(r, 'renderActiveDot', function (v, p) {
        var x
        return (
          N.isValidElement(v) ? (x = N.cloneElement(v, p)) : Z(v) ? (x = v(p)) : (x = _.createElement(Ev, p)),
          _.createElement(Se, { className: 'recharts-active-dot', key: p.key }, x)
        )
      }),
      r
    )
  },
  RR = BR({
    chartName: 'BarChart',
    GraphicalChild: nr,
    defaultTooltipEventType: 'axis',
    validateTooltipEventTypes: ['axis', 'item'],
    axisComponents: [
      { axisType: 'xAxis', AxisComp: Va },
      { axisType: 'yAxis', AxisComp: Ya },
    ],
    formatAxisMap: wL,
  })
const FR = { light: '', dark: '.dark' },
  cy = N.createContext(null)
function sy() {
  const e = N.useContext(cy)
  if (!e) throw new Error('useChart must be used within a <ChartContainer />')
  return e
}
const ly = N.forwardRef(({ id: e, className: t, children: r, config: n, ...i }, a) => {
  const o = N.useId(),
    u = `chart-${e || o.replace(/:/g, '')}`
  return R.jsx(cy.Provider, {
    value: { config: n },
    children: R.jsxs('div', {
      'data-chart': u,
      ref: a,
      className: ne(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t,
      ),
      ...i,
      children: [R.jsx(WR, { id: u, config: n }), R.jsx(_T, { children: r })],
    }),
  })
})
ly.displayName = 'Chart'
const WR = ({ id: e, config: t }) => {
    const r = Object.entries(t).filter(([n, i]) => i.theme || i.color)
    return r.length
      ? R.jsx('style', {
          dangerouslySetInnerHTML: {
            __html: Object.entries(FR).map(
              ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([a, o]) => {
  var c
  const u = ((c = o.theme) == null ? void 0 : c[n]) || o.color
  return u ? `  --color-${a}: ${u};` : null
}).join(`
`)}
}
`,
            ).join(`
`),
          },
        })
      : null
  },
  zR = it,
  fy = N.forwardRef(
    (
      {
        active: e,
        payload: t,
        className: r,
        indicator: n = 'dot',
        hideLabel: i = !1,
        hideIndicator: a = !1,
        label: o,
        labelFormatter: u,
        labelClassName: c,
        formatter: s,
        color: f,
        nameKey: l,
        labelKey: h,
      },
      d,
    ) => {
      const { config: y } = sy(),
        v = N.useMemo(() => {
          var m
          if (i || !(t != null && t.length)) return null
          const [x] = t,
            b = `${h || x.dataKey || x.name || 'value'}`,
            w = Ku(y, x, b),
            g = !h && typeof o == 'string' ? ((m = y[o]) == null ? void 0 : m.label) || o : w == null ? void 0 : w.label
          return u
            ? R.jsx('div', { className: ne('font-medium', c), children: u(g, t) })
            : g
              ? R.jsx('div', { className: ne('font-medium', c), children: g })
              : null
        }, [o, u, t, i, c, y, h])
      if (!e || !(t != null && t.length)) return null
      const p = t.length === 1 && n !== 'dot'
      return R.jsxs('div', {
        ref: d,
        className: ne(
          'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
          r,
        ),
        children: [
          p ? null : v,
          R.jsx('div', {
            className: 'grid gap-1.5',
            children: t.map((x, b) => {
              const w = `${l || x.name || x.dataKey || 'value'}`,
                g = Ku(y, x, w),
                m = f || x.payload.fill || x.color
              return R.jsx(
                'div',
                {
                  className: ne(
                    'flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
                    n === 'dot' && 'items-center',
                  ),
                  children:
                    s && (x == null ? void 0 : x.value) !== void 0 && x.name
                      ? s(x.value, x.name, x, b, x.payload)
                      : R.jsxs(R.Fragment, {
                          children: [
                            g != null && g.icon
                              ? R.jsx(g.icon, {})
                              : !a &&
                                R.jsx('div', {
                                  className: ne('shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]', {
                                    'h-2.5 w-2.5': n === 'dot',
                                    'w-1': n === 'line',
                                    'w-0 border-[1.5px] border-dashed bg-transparent': n === 'dashed',
                                    'my-0.5': p && n === 'dashed',
                                  }),
                                  style: { '--color-bg': m, '--color-border': m },
                                }),
                            R.jsxs('div', {
                              className: ne(
                                'flex flex-1 justify-between leading-none',
                                p ? 'items-end' : 'items-center',
                              ),
                              children: [
                                R.jsxs('div', {
                                  className: 'grid gap-1.5',
                                  children: [
                                    p ? v : null,
                                    R.jsx('span', {
                                      className: 'text-muted-foreground',
                                      children: (g == null ? void 0 : g.label) || x.name,
                                    }),
                                  ],
                                }),
                                x.value &&
                                  R.jsx('span', {
                                    className: 'font-mono font-medium tabular-nums text-foreground',
                                    children: x.value.toLocaleString(),
                                  }),
                              ],
                            }),
                          ],
                        }),
                },
                x.dataKey,
              )
            }),
          }),
        ],
      })
    },
  )
fy.displayName = 'ChartTooltip'
const UR = xr,
  hy = N.forwardRef(({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = 'bottom', nameKey: i }, a) => {
    const { config: o } = sy()
    return r != null && r.length
      ? R.jsx('div', {
          ref: a,
          className: ne('flex items-center justify-center gap-4', n === 'top' ? 'pb-3' : 'pt-3', e),
          children: r.map((u) => {
            const c = `${i || u.dataKey || 'value'}`,
              s = Ku(o, u, c)
            return R.jsxs(
              'div',
              {
                className: ne('flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground'),
                children: [
                  s != null && s.icon && !t
                    ? R.jsx(s.icon, {})
                    : R.jsx('div', {
                        className: 'h-2 w-2 shrink-0 rounded-[2px]',
                        style: { backgroundColor: u.color },
                      }),
                  s == null ? void 0 : s.label,
                ],
              },
              u.value,
            )
          }),
        })
      : null
  })
hy.displayName = 'ChartLegend'
function Ku(e, t, r) {
  if (typeof t != 'object' || t === null) return
  const n = 'payload' in t && typeof t.payload == 'object' && t.payload !== null ? t.payload : void 0
  let i = r
  return (
    r in t && typeof t[r] == 'string' ? (i = t[r]) : n && r in n && typeof n[r] == 'string' && (i = n[r]),
    i in e ? e[i] : e[r]
  )
}
function Kh({ config: e, data: t, xDataKey: r, ...n }) {
  return R.jsx(ly, {
    config: e,
    ...n,
    children: R.jsxs(RR, {
      accessibilityLayer: !0,
      data: t,
      children: [
        R.jsx(Qv, { vertical: !1 }),
        R.jsx(Va, { dataKey: r, tickLine: !1, tickMargin: 10, axisLine: !1 }),
        R.jsx(Ya, { axisLine: !1, tickLine: !1 }),
        R.jsx(zR, { content: R.jsx(fy, { hideLabel: !0 }) }),
        R.jsx(UR, { content: R.jsx(hy, {}) }),
        Object.keys(e).map((i, a) => {
          let o = [0, 0, 0, 0]
          return (
            a === 0 ? (o = [0, 0, 4, 4]) : a === Object.keys(e).length - 1 && (o = [4, 4, 0, 0]),
            R.jsx(nr, { dataKey: i, stackId: 'a', fill: e[i].color, radius: o }, i)
          )
        }),
      ],
    }),
  })
}
const GR = dy('/climbing')({
  component: () => {
    const e = {
        topRope: { color: 'hsl(var(--chart-1))', label: 'Top Rope' },
        soloTopRope: { color: 'hsl(var(--chart-2))', label: 'Solo Top Rope' },
        sportLead: { color: 'hsl(var(--chart-3))', label: 'Sport Lead' },
        follow: { color: 'hsl(var(--chart-4))', label: 'Follow' },
        tradLead: { color: 'hsl(var(--chart-5))', label: 'Trad Lead' },
      },
      t = [
        { year: 2022, topRope: 2, soloTopRope: 0, sportLead: 0, tradLead: 0, follow: 0 },
        { year: 2023, topRope: 7, soloTopRope: 0, sportLead: 7, tradLead: 2, follow: 2 },
        { year: 2024, topRope: 13, soloTopRope: 7, sportLead: 6, tradLead: 13, follow: 11 },
      ],
      r = [
        { grade: '5.3', topRope: 1, soloTopRope: 2, sportLead: 4, tradLead: 0, follow: 0 },
        { grade: '5.4', topRope: 1, soloTopRope: 2, sportLead: 1, tradLead: 5, follow: 2 },
        { grade: '5.5', topRope: 0, soloTopRope: 0, sportLead: 0, tradLead: 3, follow: 1 },
        { grade: '5.6', topRope: 3, soloTopRope: 2, sportLead: 2, tradLead: 5, follow: 3 },
        { grade: '5.7', topRope: 6, soloTopRope: 0, sportLead: 3, tradLead: 0, follow: 4 },
        { grade: '5.8', topRope: 3, soloTopRope: 0, sportLead: 2, tradLead: 1, follow: 1 },
        { grade: '5.9', topRope: 2, soloTopRope: 1, sportLead: 1, tradLead: 0, follow: 0 },
        { grade: '5.10', topRope: 3, soloTopRope: 0, sportLead: 0, tradLead: 0, follow: 0 },
      ]
    return R.jsxs(R.Fragment, {
      children: [
        R.jsx(oi, {
          title: 'About Me',
          children: R.jsx('p', {
            className: 'mt-4 text-muted-foreground md:text-lg',
            children:
              'I started climbing in March of 2022 after a good friend told me about it. I then moved up to Minnesota a few months later and, shortly after that, found out about OutClimb. Since joining OutClimb, I have expanded my climbing knowledge and experience from just climbing strictly indoors to climbing outdoors, setting up top rope anchors, sport and trad lead climbing, and much more.',
          }),
        }),
        R.jsxs(oi, {
          title: 'Experience',
          children: [
            R.jsxs('div', {
              className: ne('mt-4 flex w-full gap-4'),
              children: [
                R.jsxs(cr, {
                  className: ne('flex-auto'),
                  children: [
                    R.jsx(sr, {
                      children: R.jsx(lr, { className: ne('text-center'), children: 'Total Number of Routes' }),
                    }),
                    R.jsx(fr, {
                      children: R.jsx('p', {
                        className: ne('text-center text-4xl font-bold text-foreground'),
                        children: '67',
                      }),
                    }),
                  ],
                }),
                R.jsxs(cr, {
                  className: ne('flex-auto'),
                  children: [
                    R.jsx(sr, {
                      children: R.jsx(lr, { className: ne('text-center'), children: 'Total Number of Pitches' }),
                    }),
                    R.jsx(fr, {
                      children: R.jsx('p', {
                        className: ne('text-center text-4xl font-bold text-foreground'),
                        children: '71',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            R.jsxs(cr, {
              className: ne('mt-4'),
              children: [
                R.jsx(sr, { children: R.jsx(lr, { className: ne('text-center'), children: 'Pitches per Year' }) }),
                R.jsx(fr, {
                  children: R.jsx(Kh, { config: e, data: t, xDataKey: 'year', className: ne('max-h-80', 'w-full') }),
                }),
              ],
            }),
            R.jsxs(cr, {
              className: ne('mt-4'),
              children: [
                R.jsx(sr, { children: R.jsx(lr, { className: ne('text-center'), children: 'Rock Routes by Grade' }) }),
                R.jsx(fr, {
                  children: R.jsx(Kh, { config: e, data: r, xDataKey: 'grade', className: ne('max-h-80', 'w-full') }),
                }),
              ],
            }),
          ],
        }),
        R.jsx(oi, {
          title: 'Education',
          children: R.jsx('div', {
            className: ne('mt-4 grid gap-4 md:grid-cols-2'),
            children: R.jsxs(cr, {
              className: ne('mt-4'),
              children: [
                R.jsxs(sr, {
                  children: [
                    R.jsx(lr, { children: 'Single Pitch Instructor Course' }),
                    R.jsx(Xh, { children: 'AMGA | June 2024' }),
                  ],
                }),
                R.jsx(fr, { children: R.jsx('p', { className: 'text-muted-foreground' }) }),
              ],
            }),
          }),
        }),
        R.jsx(oi, {
          title: 'Certifications',
          children: R.jsxs('div', {
            className: 'mt-4 space-y-4',
            children: [
              R.jsx(ns, {
                issued: 'February 2024',
                expires: 'February 2026',
                title: 'NOLS Wilderness First Aid',
                children: R.jsx('p', {
                  children:
                    'This certifies that I learned how to use the Patient Assessment System, how to provide effective first aid treatments for injuries and illnesses common in the outdoors, and how to make appropriate evacuation decisions.',
                }),
              }),
              R.jsx(ns, {
                issued: 'February 2024',
                expires: 'February 2026',
                title: 'NOLS Epinephrine Auto-Injector',
                children: R.jsx('p', { children: 'This certifies that I learned how to ' }),
              }),
            ],
          }),
        }),
      ],
    })
  },
})
export { GR as Route }
