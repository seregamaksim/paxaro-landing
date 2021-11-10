document.body.style.overflow = 'hidden';

!(function (t, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = n(require('vue')))
    : 'function' == typeof define && define.amd
    ? define(['vue'], n)
    : (((t =
        'undefined' != typeof globalThis
          ? globalThis
          : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
      (t.__SVGATOR_PLAYER__['5c7f360c'] = n()));
})(this, function () {
  'use strict';
  function t(t, n) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var e = Object.getOwnPropertySymbols(t);
      n &&
        (e = e.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        r.push.apply(r, e);
    }
    return r;
  }
  function n(n) {
    for (var r = 1; r < arguments.length; r++) {
      var e = null != arguments[r] ? arguments[r] : {};
      r % 2
        ? t(Object(e), !0).forEach(function (t) {
            u(n, t, e[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
        : t(Object(e)).forEach(function (t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
          });
    }
    return n;
  }
  function r(t) {
    return (r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          })(t);
  }
  function e(t, n) {
    if (!(t instanceof n))
      throw new TypeError('Cannot call a class as a function');
  }
  function i(t, n) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        'value' in e && (e.writable = !0),
        Object.defineProperty(t, e.key, e);
    }
  }
  function o(t, n, r) {
    return n && i(t.prototype, n), r && i(t, r), t;
  }
  function u(t, n, r) {
    return (
      n in t
        ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[n] = r),
      t
    );
  }
  function a(t) {
    return (a = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function l(t, n) {
    return (l =
      Object.setPrototypeOf ||
      function (t, n) {
        return (t.__proto__ = n), t;
      })(t, n);
  }
  function f(t, n) {
    if (n && ('object' == typeof n || 'function' == typeof n)) return n;
    if (void 0 !== n)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      );
    return (function (t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    })(t);
  }
  function s(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var r,
        e = a(t);
      if (n) {
        var i = a(this).constructor;
        r = Reflect.construct(e, arguments, i);
      } else r = e.apply(this, arguments);
      return f(this, r);
    };
  }
  function c(t, n, r) {
    return (c =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, n, r) {
            var e = (function (t, n) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, n) &&
                null !== (t = a(t));

              );
              return t;
            })(t, n);
            if (e) {
              var i = Object.getOwnPropertyDescriptor(e, n);
              return i.get ? i.get.call(r) : i.value;
            }
          })(t, n, r || t);
  }
  var h = v(Math.pow(10, -6));
  function v(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
    if (Number.isInteger(t)) return t;
    var r = Math.pow(10, n);
    return Math.round((+t + Number.EPSILON) * r) / r;
  }
  function y(t, n) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
    return Math.abs(t - n) < r;
  }
  var g = Math.PI / 180;
  function d(t) {
    return t;
  }
  function p(t, n, r) {
    var e = 1 - r;
    return 3 * r * e * (t * e + n * r) + r * r * r;
  }
  function m() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    return t < 0 || t > 1 || r < 0 || r > 1
      ? null
      : y(t, n) && y(r, e)
      ? d
      : function (i) {
          if (i <= 0)
            return t > 0 ? (i * n) / t : 0 === n && r > 0 ? (i * e) / r : 0;
          if (i >= 1)
            return r < 1
              ? 1 + ((i - 1) * (e - 1)) / (r - 1)
              : 1 === r && t < 1
              ? 1 + ((i - 1) * (n - 1)) / (t - 1)
              : 1;
          for (var o, u = 0, a = 1; u < a; ) {
            var l = p(t, r, (o = (u + a) / 2));
            if (y(i, l)) break;
            l < i ? (u = o) : (a = o);
          }
          return p(n, e, o);
        };
  }
  function b() {
    return 1;
  }
  function w(t) {
    return 1 === t ? 1 : 0;
  }
  function x() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (1 === t) {
      if (0 === n) return w;
      if (1 === n) return b;
    }
    var r = 1 / t;
    return function (t) {
      return t >= 1 ? 1 : (t += n * r) - (t % r);
    };
  }
  var A =
    'undefined' != typeof window &&
    /(Mac|iPhone|iPod|iPad)/i.test(window.navigator.platform);
  Object.freeze({
    Meta: A ? 'Control' : 'Meta',
    Ctrl: 'Control',
    Down: 'ArrowDown',
    Up: 'ArrowUp',
    Left: 'ArrowLeft',
    Right: 'ArrowRight',
    Esc: 'Escape',
    Delete: 'Backspace',
    Space: 'Space',
  });
  var k = Math.sin,
    _ = Math.cos,
    S = Math.acos,
    O = Math.asin,
    j = Math.tan,
    P = Math.atan2,
    M = Math.PI / 180,
    E = 180 / Math.PI,
    R = Math.sqrt,
    I = (function () {
      function t() {
        var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          u =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          a =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        e(this, t),
          (this.m = [n, r, i, o, u, a]),
          (this.i = null),
          (this.w = null),
          (this.s = null);
      }
      return (
        o(t, [
          {
            key: 'determinant',
            get: function () {
              var t = this.m;
              return t[0] * t[3] - t[1] * t[2];
            },
          },
          {
            key: 'isIdentity',
            get: function () {
              if (null === this.i) {
                var t = this.m;
                this.i =
                  1 === t[0] &&
                  0 === t[1] &&
                  0 === t[2] &&
                  1 === t[3] &&
                  0 === t[4] &&
                  0 === t[5];
              }
              return this.i;
            },
          },
          {
            key: 'point',
            value: function (t, n) {
              var r = this.m;
              return {
                x: r[0] * t + r[2] * n + r[4],
                y: r[1] * t + r[3] * n + r[5],
              };
            },
          },
          {
            key: 'translateSelf',
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              if (!t && !n) return this;
              var r = this.m;
              return (
                (r[4] += r[0] * t + r[2] * n),
                (r[5] += r[1] * t + r[3] * n),
                (this.w = this.s = this.i = null),
                this
              );
            },
          },
          {
            key: 'rotateSelf',
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              if ((t %= 360)) {
                var n = k((t *= M)),
                  r = _(t),
                  e = this.m,
                  i = e[0],
                  o = e[1];
                (e[0] = i * r + e[2] * n),
                  (e[1] = o * r + e[3] * n),
                  (e[2] = e[2] * r - i * n),
                  (e[3] = e[3] * r - o * n),
                  (this.w = this.s = this.i = null);
              }
              return this;
            },
          },
          {
            key: 'scaleSelf',
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1;
              if (1 !== t || 1 !== n) {
                var r = this.m;
                (r[0] *= t),
                  (r[1] *= t),
                  (r[2] *= n),
                  (r[3] *= n),
                  (this.w = this.s = this.i = null);
              }
              return this;
            },
          },
          {
            key: 'skewSelf',
            value: function (t, n) {
              if (((n %= 360), (t %= 360) || n)) {
                var r = this.m,
                  e = r[0],
                  i = r[1],
                  o = r[2],
                  u = r[3];
                t && ((t = j(t * M)), (r[2] += e * t), (r[3] += i * t)),
                  n && ((n = j(n * M)), (r[0] += o * n), (r[1] += u * n)),
                  (this.w = this.s = this.i = null);
              }
              return this;
            },
          },
          {
            key: 'resetSelf',
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                e =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 1,
                i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 0,
                o =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : 0,
                u = this.m;
              return (
                (u[0] = t),
                (u[1] = n),
                (u[2] = r),
                (u[3] = e),
                (u[4] = i),
                (u[5] = o),
                (this.w = this.s = this.i = null),
                this
              );
            },
          },
          {
            key: 'recomposeSelf',
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                e =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
                i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : null;
              return (
                this.isIdentity || this.resetSelf(),
                t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                n && this.rotateSelf(n),
                r &&
                  (r.x && this.skewSelf(r.x, 0), r.y && this.skewSelf(0, r.y)),
                !e || (1 === e.x && 1 === e.y) || this.scaleSelf(e.x, e.y),
                i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                this
              );
            },
          },
          {
            key: 'decompose',
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                r = this.m,
                e = r[0] * r[0] + r[1] * r[1],
                i = [
                  [r[0], r[1]],
                  [r[2], r[3]],
                ],
                o = R(e);
              if (0 === o)
                return {
                  origin: { x: v(r[4]), y: v(r[5]) },
                  translate: { x: v(t), y: v(n) },
                  scale: { x: 0, y: 0 },
                  skew: { x: 0, y: 0 },
                  rotate: 0,
                };
              (i[0][0] /= o), (i[0][1] /= o);
              var u = r[0] * r[3] - r[1] * r[2] < 0;
              u && (o = -o);
              var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
              (i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a);
              var l = R(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
              if (0 === l)
                return {
                  origin: { x: v(r[4]), y: v(r[5]) },
                  translate: { x: v(t), y: v(n) },
                  scale: { x: v(o), y: 0 },
                  skew: { x: 0, y: 0 },
                  rotate: 0,
                };
              (i[1][0] /= l), (i[1][1] /= l), (a /= l);
              var f = 0;
              return (
                i[1][1] < 0
                  ? ((f = S(i[1][1]) * E), i[0][1] < 0 && (f = 360 - f))
                  : (f = O(i[0][1]) * E),
                u && (f = -f),
                (a = P(a, R(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * E),
                u && (a = -a),
                {
                  origin: { x: v(r[4]), y: v(r[5]) },
                  translate: { x: v(t), y: v(n) },
                  scale: { x: v(o), y: v(l) },
                  skew: { x: v(a), y: 0 },
                  rotate: v(f),
                }
              );
            },
          },
          {
            key: 'toString',
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ' ';
              return (
                null === this.s &&
                  (this.s =
                    'matrix(' +
                    this.m
                      .map(function (t) {
                        return v(t);
                      })
                      .join(t) +
                    ')'),
                this.s
              );
            },
          },
        ]),
        t
      );
    })();
  function N(t, n, r) {
    return t >= 0.5 ? r : n;
  }
  function B(t, n, r) {
    return 0 === t || n === r ? n : t * (r - n) + n;
  }
  function F(t, n, r) {
    var e = B(t, n, r);
    return e <= 0 ? 0 : e;
  }
  function T(t, n, r) {
    var e = B(t, n, r);
    return e <= 0 ? 0 : e >= 1 ? 1 : e;
  }
  function q(t, n, r) {
    return 0 === t ? n : 1 === t ? r : { x: B(t, n.x, r.x), y: B(t, n.y, r.y) };
  }
  function L(t, n, r) {
    var e = (function (t, n, r) {
      return Math.round(B(t, n, r));
    })(t, n, r);
    return e <= 0 ? 0 : e >= 255 ? 255 : e;
  }
  function C(t, n, r) {
    return 0 === t
      ? n
      : 1 === t
      ? r
      : {
          r: L(t, n.r, r.r),
          g: L(t, n.g, r.g),
          b: L(t, n.b, r.b),
          a: B(t, null == n.a ? 1 : n.a, null == r.a ? 1 : r.a),
        };
  }
  function D(t, n) {
    for (var r = [], e = 0; e < t; e++) r.push(n);
    return r;
  }
  function z(t, n) {
    if (--n <= 0) return t;
    var r = (t = Object.assign([], t)).length;
    do {
      for (var e = 0; e < r; e++) t.push(t[e]);
    } while (--n > 0);
    return t;
  }
  var V,
    G = (function () {
      function t(n) {
        e(this, t), (this.list = n), (this.length = n.length);
      }
      return (
        o(t, [
          {
            key: 'setAttribute',
            value: function (t, n) {
              for (var r = this.list, e = 0; e < this.length; e++)
                r[e].setAttribute(t, n);
            },
          },
          {
            key: 'removeAttribute',
            value: function (t) {
              for (var n = this.list, r = 0; r < this.length; r++)
                n[r].removeAttribute(t);
            },
          },
          {
            key: 'style',
            value: function (t, n) {
              for (var r = this.list, e = 0; e < this.length; e++)
                r[e].style[t] = n;
            },
          },
        ]),
        t
      );
    })(),
    Y = /-./g,
    U = function (t, n) {
      return n.toUpperCase();
    };
  function $(t) {
    return 'function' == typeof t ? t : N;
  }
  function Q(t) {
    return t
      ? 'function' == typeof t
        ? t
        : Array.isArray(t)
        ? (function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : d;
            if (!Array.isArray(t)) return n;
            switch (t.length) {
              case 1:
                return x(t[0]) || n;
              case 2:
                return x(t[0], t[1]) || n;
              case 4:
                return m(t[0], t[1], t[2], t[3]) || n;
            }
            return n;
          })(t, null)
        : (function (t, n) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : d;
            switch (t) {
              case 'linear':
                return d;
              case 'steps':
                return x(n.steps || 1, n.jump || 0) || r;
              case 'bezier':
              case 'cubic-bezier':
                return m(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || r;
            }
            return r;
          })(t.type, t.value, null)
      : null;
  }
  function H(t, n, r) {
    var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = n.length - 1;
    if (t <= n[0].t) return e ? [0, 0, n[0].v] : n[0].v;
    if (t >= n[i].t) return e ? [i, 1, n[i].v] : n[i].v;
    var o,
      u = n[0],
      a = null;
    for (o = 1; o <= i; o++) {
      if (!(t > n[o].t)) {
        a = n[o];
        break;
      }
      u = n[o];
    }
    return null == a
      ? e
        ? [i, 1, n[i].v]
        : n[i].v
      : u.t === a.t
      ? e
        ? [o, 1, a.v]
        : a.v
      : ((t = (t - u.t) / (a.t - u.t)),
        u.e && (t = u.e(t)),
        e ? [o, t, r(t, u.v, a.v)] : r(t, u.v, a.v));
  }
  function J(t, n) {
    var r =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return t && t.length
      ? 'function' != typeof n
        ? null
        : ('function' != typeof r && (r = null),
          function (e) {
            var i = H(e, t, n);
            return null != i && r && (i = r(i)), i;
          })
      : null;
  }
  function Z(t, n) {
    return t.t - n.t;
  }
  function K(t, n, e, i, o) {
    var u,
      a = '@' === e[0],
      l = '#' === e[0],
      f = V[e],
      s = N;
    switch (
      (a ? ((u = e.substr(1)), (e = u.replace(Y, U))) : l && (e = e.substr(1)),
      r(f))
    ) {
      case 'function':
        if (((s = f(i, o, H, Q, e, a, n, t)), l)) return s;
        break;
      case 'string':
        s = J(i, $(f));
        break;
      case 'object':
        if ((s = J(i, $(f.i), f.f)) && 'function' == typeof f.u)
          return f.u(n, s, e, a, t);
    }
    return s
      ? (function (t, n, r) {
          if (arguments.length > 3 && void 0 !== arguments[3] && arguments[3])
            return t instanceof G
              ? function (e) {
                  return t.style(n, r(e));
                }
              : function (e) {
                  return (t.style[n] = r(e));
                };
          if (Array.isArray(n)) {
            var e = n.length;
            return function (i) {
              var o = r(i);
              if (null == o)
                for (var u = 0; u < e; u++) t[u].removeAttribute(n);
              else for (var a = 0; a < e; a++) t[a].setAttribute(n, o);
            };
          }
          return function (e) {
            var i = r(e);
            null == i ? t.removeAttribute(n) : t.setAttribute(n, i);
          };
        })(n, e, s, a)
      : null;
  }
  function W(t, n, e, i) {
    if (!i || 'object' !== r(i)) return null;
    var o = null,
      u = null;
    return (
      Array.isArray(i)
        ? (u = (function (t) {
            if (!t || !t.length) return null;
            for (var n = 0; n < t.length; n++) t[n].e && (t[n].e = Q(t[n].e));
            return t.sort(Z);
          })(i))
        : ((u = i.keys), (o = i.data || null)),
      u ? K(t, n, e, u, o) : null
    );
  }
  function X(t, n, r) {
    if (!r) return null;
    var e = [];
    for (var i in r)
      if (r.hasOwnProperty(i)) {
        var o = W(t, n, i, r[i]);
        o && e.push(o);
      }
    return e.length ? e : null;
  }
  function tt(t, n) {
    if (!n.duration || n.duration < 0) return null;
    var r = (function (t, n) {
      if (!n) return null;
      var r = [];
      if (Array.isArray(n))
        for (var e = n.length, i = 0; i < e; i++) {
          var o = n[i];
          if (2 === o.length) {
            var u = null;
            if ('string' == typeof o[0]) u = t.getElementById(o[0]);
            else if (Array.isArray(o[0])) {
              u = [];
              for (var a = 0; a < o[0].length; a++)
                if ('string' == typeof o[0][a]) {
                  var l = t.getElementById(o[0][a]);
                  l && u.push(l);
                }
              u = u.length ? (1 === u.length ? u[0] : new G(u)) : null;
            }
            if (u) {
              var f = X(t, u, o[1]);
              f && (r = r.concat(f));
            }
          }
        }
      else
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            var c = t.getElementById(s);
            if (c) {
              var h = X(t, c, n[s]);
              h && (r = r.concat(h));
            }
          }
      return r.length ? r : null;
    })(t, n.elements);
    return r
      ? (function (t, n) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1 / 0,
            e =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1,
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 1,
            u = t.length,
            a = e > 0 ? n : 0;
          i && r % 2 == 0 && (a = n - a);
          var l = null;
          return function (f, s) {
            var c = f % n,
              h = 1 + (f - c) / n;
            (s *= e), i && h % 2 == 0 && (s = -s);
            var v = !1;
            if (h > r) (c = a), (v = !0), -1 === o && (c = e > 0 ? 0 : n);
            else if ((s < 0 && (c = n - c), c === l)) return !1;
            l = c;
            for (var y = 0; y < u; y++) t[y](c);
            return v;
          };
        })(
          r,
          n.duration,
          n.iterations || 1 / 0,
          n.direction || 1,
          !!n.alternate,
          n.fill || 1
        )
      : null;
  }
  function nt(t) {
    return +('0x' + (t.replace(/[^0-9a-fA-F]+/g, '') || 27));
  }
  function rt(t, n, r) {
    return !t || !r || n > t.length
      ? t
      : t.substring(0, n) + rt(t.substring(n + 1), r, r);
  }
  function et(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
    return !t || t % n ? t % n : et(t / n, n);
  }
  function it(t, n, r) {
    if (t && t.length) {
      var e = nt(r),
        i = nt(n),
        o = et(e) + 5,
        u = rt(t, et(e, 5), o);
      return (
        (u = u.replace(/\x7c$/g, '==').replace(/\x2f$/g, '=')),
        (u = (function (t, n, r) {
          var e = +('0x' + t.substring(0, 4));
          t = t.substring(4);
          for (var i = (n % e) + (r % 27), o = [], u = 0; u < t.length; u += 2)
            if ('|' !== t[u]) {
              var a = +('0x' + t[u] + t[u + 1]) - i;
              o.push(a);
            } else {
              var l = +('0x' + t.substring(u + 1, u + 1 + 4)) - i;
              (u += 3), o.push(l);
            }
          return String.fromCharCode.apply(String, o);
        })((u = (u = atob(u)).replace(/[\x41-\x5A]/g, '')), i, e)),
        (u = JSON.parse(u))
      );
    }
  }
  Number.isInteger ||
    (Number.isInteger = function (t) {
      return 'number' == typeof t && isFinite(t) && Math.floor(t) === t;
    }),
    Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
  var ot = (function () {
    function t(n, r) {
      var i =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      e(this, t),
        (this._id = 0),
        (this._running = !1),
        (this._rollingBack = !1),
        (this._animations = n),
        (this.duration = r.duration),
        (this.alternate = r.alternate),
        (this.fill = r.fill),
        (this.iterations = r.iterations),
        (this.direction = i.direction || 1),
        (this.speed = i.speed || 1),
        (this.fps = i.fps || 100),
        (this.offset = i.offset || 0),
        (this.rollbackStartOffset = 0);
    }
    return (
      o(
        t,
        [
          {
            key: '_rollback',
            value: function () {
              var t = this,
                n = 1 / 0,
                r = null;
              (this.rollbackStartOffset = this.offset),
                this._rollingBack ||
                  ((this._rollingBack = !0), (this._running = !0));
              this._id = window.requestAnimationFrame(function e(i) {
                if (t._rollingBack) {
                  null == r && (r = i);
                  var o = i - r,
                    u = t.rollbackStartOffset - o,
                    a = Math.round(u * t.speed);
                  if (a > t.duration && n != 1 / 0) {
                    var l = !!t.alternate && (a / t.duration) % 2 > 1,
                      f = a % t.duration;
                    a = (f += l ? t.duration : 0) || t.duration;
                  }
                  var s = t.fps ? 1e3 / t.fps : 0,
                    c = Math.max(0, a);
                  if (c < n - s) {
                    (t.offset = c), (n = c);
                    for (var h = t._animations, v = h.length, y = 0; y < v; y++)
                      h[y](c, t.direction);
                  }
                  var g = !1;
                  if (t.iterations > 0 && -1 === t.fill) {
                    var d = t.iterations * t.duration,
                      p = d == a;
                    (a = p ? 0 : a), (t.offset = p ? 0 : t.offset), (g = a > d);
                  }
                  a > 0 && t.offset >= a && !g
                    ? (t._id = window.requestAnimationFrame(e))
                    : t.stop();
                }
              });
            },
          },
          {
            key: '_start',
            value: function () {
              var t = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                r = -1 / 0,
                e = null,
                i = {},
                o = function o(u) {
                  (t._running = !0), null == e && (e = u);
                  var a = Math.round((u - e + n) * t.speed),
                    l = t.fps ? 1e3 / t.fps : 0;
                  if (a > r + l && !t._rollingBack) {
                    (t.offset = a), (r = a);
                    for (
                      var f = t._animations, s = f.length, c = 0, h = 0;
                      h < s;
                      h++
                    )
                      i[h] ? c++ : ((i[h] = f[h](a, t.direction)), i[h] && c++);
                    if (c === s) return void t._stop();
                  }
                  t._id = window.requestAnimationFrame(o);
                };
              this._id = window.requestAnimationFrame(o);
            },
          },
          {
            key: '_stop',
            value: function () {
              this._id && window.cancelAnimationFrame(this._id),
                (this._running = !1),
                (this._rollingBack = !1);
            },
          },
          {
            key: 'play',
            value: function () {
              (!this._rollingBack && this._running) ||
                ((this._rollingBack = !1),
                this.rollbackStartOffset > this.duration &&
                  ((this.offset =
                    this.rollbackStartOffset -
                    ((this.rollbackStartOffset - this.offset) % this.duration)),
                  (this.rollbackStartOffset = 0)),
                this._start(this.offset));
            },
          },
          {
            key: 'stop',
            value: function () {
              this._stop(), (this.offset = 0), (this.rollbackStartOffset = 0);
              var t = this.direction,
                n = this._animations;
              window.requestAnimationFrame(function () {
                for (var r = 0; r < n.length; r++) n[r](0, t);
              });
            },
          },
          {
            key: 'reachedToEnd',
            value: function () {
              return (
                this.iterations > 0 &&
                this.offset >= this.iterations * this.duration
              );
            },
          },
          {
            key: 'restart',
            value: function () {
              this._stop(), (this.offset = 0), this._start();
            },
          },
          {
            key: 'pause',
            value: function () {
              this._stop();
            },
          },
          {
            key: 'reverse',
            value: function () {
              this.direction = -this.direction;
            },
          },
        ],
        [
          {
            key: 'build',
            value: function (r, e) {
              return (
                delete r.animationSettings,
                (r.options = it(r.options, r.root, '5c7f360c')),
                r.animations.map(function (t) {
                  var e = it(t.s, r.root, '5c7f360c');
                  for (var i in (delete t.s,
                  r.animationSettings || (r.animationSettings = n({}, e)),
                  e))
                    e.hasOwnProperty(i) && (t[i] = e[i]);
                }),
                (r = (function (t, n) {
                  if (((V = n), !t || !t.root || !Array.isArray(t.animations)))
                    return null;
                  for (
                    var r = document.getElementsByTagName('svg'), e = !1, i = 0;
                    i < r.length;
                    i++
                  )
                    if (r[i].id === t.root && !r[i].svgatorAnimation) {
                      (e = r[i]).svgatorAnimation = !0;
                      break;
                    }
                  if (!e) return null;
                  var o = t.animations
                    .map(function (t) {
                      return tt(e, t);
                    })
                    .filter(function (t) {
                      return !!t;
                    });
                  return o.length
                    ? {
                        element: e,
                        animations: o,
                        animationSettings: t.animationSettings,
                        options: t.options || void 0,
                      }
                    : null;
                })(r, e))
                  ? {
                      el: r.element,
                      options: r.options || {},
                      player: new t(
                        r.animations,
                        r.animationSettings,
                        r.options
                      ),
                    }
                  : null
              );
            },
          },
          {
            key: 'push',
            value: function (t) {
              return this.build(t);
            },
          },
          {
            key: 'init',
            value: function () {
              var t = this,
                n =
                  window.__SVGATOR_PLAYER__ &&
                  window.__SVGATOR_PLAYER__['5c7f360c'];
              Array.isArray(n) &&
                n.splice(0).forEach(function (n) {
                  return t.build(n);
                });
            },
          },
        ]
      ),
      t
    );
  })();
  function ut(t) {
    return v(t) + '';
  }
  function at(t) {
    var n =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ' ';
    return t && t.length ? t.map(ut).join(n) : '';
  }
  function lt(t) {
    return t
      ? null == t.a || t.a >= 1
        ? 'rgb(' + t.r + ',' + t.g + ',' + t.b + ')'
        : 'rgba(' + t.r + ',' + t.g + ',' + t.b + ',' + t.a + ')'
      : 'transparent';
  }
  function ft(t) {
    return t ? 'url(#' + t + ')' : 'none';
  }
  !(function () {
    for (
      var t = 0, n = ['ms', 'moz', 'webkit', 'o'], r = 0;
      r < n.length && !window.requestAnimationFrame;
      ++r
    )
      (window.requestAnimationFrame = window[n[r] + 'RequestAnimationFrame']),
        (window.cancelAnimationFrame =
          window[n[r] + 'CancelAnimationFrame'] ||
          window[n[r] + 'CancelRequestAnimationFrame']);
    window.requestAnimationFrame ||
      ((window.requestAnimationFrame = function (n) {
        var r = Date.now(),
          e = Math.max(0, 16 - (r - t)),
          i = window.setTimeout(function () {
            n(r + e);
          }, e);
        return (t = r + e), i;
      }),
      (window.cancelAnimationFrame = window.clearTimeout));
  })();
  var st = {
      f: null,
      i: function (t, n, r) {
        return 0 === t
          ? n
          : 1 === t
          ? r
          : { x: F(t, n.x, r.x), y: F(t, n.y, r.y) };
      },
      u: function (t, n) {
        return function (r) {
          var e = n(r);
          t.setAttribute('rx', ut(e.x)), t.setAttribute('ry', ut(e.y));
        };
      },
    },
    ct = {
      f: null,
      i: function (t, n, r) {
        return 0 === t
          ? n
          : 1 === t
          ? r
          : { width: F(t, n.width, r.width), height: F(t, n.height, r.height) };
      },
      u: function (t, n) {
        return function (r) {
          var e = n(r);
          t.setAttribute('width', ut(e.width)),
            t.setAttribute('height', ut(e.height));
        };
      },
    };
  Object.freeze({ M: 2, L: 2, Z: 0, H: 1, V: 1, C: 6, Q: 4, T: 2, S: 4, A: 7 });
  var ht = {},
    vt = null;
  function yt(t) {
    var n = (function () {
      if (vt) return vt;
      if (
        'object' !==
          ('undefined' == typeof document ? 'undefined' : r(document)) ||
        !document.createElementNS
      )
        return {};
      var t = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      return t && t.style
        ? ((t.style.position = 'absolute'),
          (t.style.opacity = '0.01'),
          (t.style.zIndex = '-9999'),
          (t.style.left = '-9999px'),
          (t.style.width = '1px'),
          (t.style.height = '1px'),
          (vt = { svg: t }))
        : {};
    })().svg;
    if (!n)
      return function (t) {
        return null;
      };
    var e = document.createElementNS(n.namespaceURI, 'path');
    e.setAttributeNS(null, 'd', t),
      e.setAttributeNS(null, 'fill', 'none'),
      e.setAttributeNS(null, 'stroke', 'none'),
      n.appendChild(e);
    var i = e.getTotalLength();
    return function (t) {
      var n = e.getPointAtLength(i * t);
      return { x: n.x, y: n.y };
    };
  }
  function gt(t) {
    return ht[t] ? ht[t] : (ht[t] = yt(t));
  }
  function dt(t, n, r, e) {
    if (!t || !e) return !1;
    var i = ['M', t.x, t.y];
    if (
      (n &&
        r &&
        (i.push('C'), i.push(n.x), i.push(n.y), i.push(r.x), i.push(r.y)),
      n ? !r : r)
    ) {
      var o = n || r;
      i.push('Q'), i.push(o.x), i.push(o.y);
    }
    return n || r || i.push('L'), i.push(e.x), i.push(e.y), i.join(' ');
  }
  function pt(t, n, r, e) {
    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
      o = dt(t, n, r, e),
      u = gt(o);
    try {
      return u(i);
    } catch (t) {
      return null;
    }
  }
  function mt(t, n, r, e) {
    var i = 1 - e;
    return i * i * t + 2 * i * e * n + e * e * r;
  }
  function bt(t, n, r, e) {
    return 2 * (1 - e) * (n - t) + 2 * e * (r - n);
  }
  function wt(t, n, r, e) {
    var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      o = pt(t, n, null, r, e);
    return (
      o || (o = { x: mt(t.x, n.x, r.x, e), y: mt(t.y, n.y, r.y, e) }),
      i && (o.a = xt(t, n, r, e)),
      o
    );
  }
  function xt(t, n, r, e) {
    return Math.atan2(bt(t.y, n.y, r.y, e), bt(t.x, n.x, r.x, e));
  }
  function At(t, n, r, e, i) {
    var o = i * i;
    return (
      i * o * (e - t + 3 * (n - r)) +
      3 * o * (t + r - 2 * n) +
      3 * i * (n - t) +
      t
    );
  }
  function kt(t, n, r, e, i) {
    var o = 1 - i;
    return 3 * (o * o * (n - t) + 2 * o * i * (r - n) + i * i * (e - r));
  }
  function _t(t, n, r, e, i) {
    var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
      u = pt(t, n, r, e, i);
    return (
      u || (u = { x: At(t.x, n.x, r.x, e.x, i), y: At(t.y, n.y, r.y, e.y, i) }),
      o && (u.a = St(t, n, r, e, i)),
      u
    );
  }
  function St(t, n, r, e, i) {
    return Math.atan2(kt(t.y, n.y, r.y, e.y, i), kt(t.x, n.x, r.x, e.x, i));
  }
  function Ot(t, n, r) {
    return t + (n - t) * r;
  }
  function jt(t, n, r) {
    var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = { x: Ot(t.x, n.x, r), y: Ot(t.y, n.y, r) };
    return e && (i.a = Pt(t, n)), i;
  }
  function Pt(t, n) {
    return Math.atan2(n.y - t.y, n.x - t.x);
  }
  function Mt(t, n, r) {
    var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (Rt(n)) {
      if (It(r)) return wt(n, r.start, r, t, e);
    } else if (Rt(r)) {
      if (n.end) return wt(n, n.end, r, t, e);
    } else {
      if (n.end)
        return r.start ? _t(n, n.end, r.start, r, t, e) : wt(n, n.end, r, t, e);
      if (r.start) return wt(n, r.start, r, t, e);
    }
    return jt(n, r, t, e);
  }
  function Et(t, n, r) {
    var e = Mt(t, n, r, !0);
    return (
      (e.a =
        (function (t) {
          return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            ? t + Math.PI
            : t;
        })(e.a) / g),
      e
    );
  }
  function Rt(t) {
    return !t.type || 'corner' === t.type;
  }
  function It(t) {
    return null != t.start && !Rt(t);
  }
  var Nt = new I();
  var Bt = { f: ut, i: B },
    Ft = { f: ut, i: T };
  function Tt(t, n, r) {
    return t.map(function (t) {
      return (function (t, n, r) {
        var e = t.v;
        if (!e || 'g' !== e.t || e.s || !e.v || !e.r) return t;
        var i = r.getElementById(e.r),
          o = (i && i.querySelectorAll('stop')) || [];
        return (
          (e.s = e.v.map(function (t, n) {
            var r = o[n] && o[n].getAttribute('offset');
            return { c: t, o: (r = v(parseInt(r) / 100)) };
          })),
          delete e.v,
          t
        );
      })(t, 0, r);
    });
  }
  var qt = {
    gt: 'gradientTransform',
    c: { x: 'cx', y: 'cy' },
    rd: 'r',
    f: { x: 'x1', y: 'y1' },
    to: { x: 'x2', y: 'y2' },
  };
  function Lt(t, n, e, i, o, u, a, l) {
    return (
      Tt(t, 0, l),
      (n = (function (t, n, r) {
        for (var e, i, o, u = t.length - 1, a = {}, l = 0; l <= u; l++)
          (e = t[l]).e && (e.e = n(e.e)),
            e.v &&
              'g' === (i = e.v).t &&
              i.r &&
              (o = r.getElementById(i.r)) &&
              (a[i.r] = { e: o, s: o.querySelectorAll('stop') });
        return a;
      })(t, i, l)),
      function (i) {
        var o = e(i, t, Ct);
        if (!o) return 'none';
        if ('c' === o.t) return lt(o.v);
        if ('g' === o.t) {
          if (!n[o.r]) return ft(o.r);
          var u = n[o.r];
          return (
            (function (t, n) {
              for (var r = t.s, e = r.length; e < n.length; e++) {
                var i = r[r.length - 1].cloneNode();
                (i.id = Vt(i.id)),
                  t.e.appendChild(i),
                  (r = t.s = t.e.querySelectorAll('stop'));
              }
              for (var o = 0, u = r.length, a = n.length - 1; o < u; o++)
                r[o].setAttribute('stop-color', lt(n[Math.min(o, a)].c)),
                  r[o].setAttribute('offset', n[Math.min(o, a)].o);
            })(u, o.s),
            Object.keys(qt).forEach(function (t) {
              if (void 0 !== o[t])
                if ('object' !== r(qt[t])) {
                  var n,
                    e =
                      'gt' === t
                        ? ((n = o[t]),
                          Array.isArray(n) ? 'matrix(' + n.join(' ') + ')' : '')
                        : o[t],
                    i = qt[t];
                  u.e.setAttribute(i, e);
                } else
                  Object.keys(qt[t]).forEach(function (n) {
                    if (void 0 !== o[t][n]) {
                      var r = o[t][n],
                        e = qt[t][n];
                      u.e.setAttribute(e, r);
                    }
                  });
            }),
            ft(o.r)
          );
        }
        return 'none';
      }
    );
  }
  function Ct(t, r, e) {
    if (0 === t) return r;
    if (1 === t) return e;
    if (r && e) {
      var i = r.t;
      if (i === e.t)
        switch (r.t) {
          case 'c':
            return { t: i, v: C(t, r.v, e.v) };
          case 'g':
            if (r.r === e.r) {
              var o = { t: i, s: Dt(t, r.s, e.s), r: r.r };
              return (
                r.gt &&
                  e.gt &&
                  (o.gt = (function (t, n, r) {
                    var e = n.length;
                    if (e !== r.length) return N(t, n, r);
                    for (var i = new Array(e), o = 0; o < e; o++)
                      i[o] = B(t, n[o], r[o]);
                    return i;
                  })(t, r.gt, e.gt)),
                r.c
                  ? ((o.c = q(t, r.c, e.c)), (o.rd = F(t, r.rd, e.rd)))
                  : r.f && ((o.f = q(t, r.f, e.f)), (o.to = q(t, r.to, e.to))),
                o
              );
            }
        }
      if (('c' === r.t && 'g' === e.t) || ('c' === e.t && 'g' === r.t)) {
        var u = 'c' === r.t ? r : e,
          a = 'g' === r.t ? n({}, r) : n({}, e),
          l = a.s.map(function (t) {
            return { c: u.v, o: t.o };
          });
        return (a.s = 'c' === r.t ? Dt(t, l, a.s) : Dt(t, a.s, l)), a;
      }
    }
    return N(t, r, e);
  }
  function Dt(t, n, r) {
    if (n.length === r.length)
      return n.map(function (n, e) {
        return zt(t, n, r[e]);
      });
    for (var e = Math.max(n.length, r.length), i = [], o = 0; o < e; o++) {
      var u = zt(t, n[Math.min(o, n.length - 1)], r[Math.min(o, r.length - 1)]);
      i.push(u);
    }
    return i;
  }
  function zt(t, n, r) {
    return { o: T(t, n.o, r.o || 0), c: C(t, n.c, r.c || {}) };
  }
  function Vt(t) {
    return t.replace(/-fill-([0-9]+)$/, function (t, n) {
      return '-fill-' + (+n + 1);
    });
  }
  var Gt = {
      fill: Lt,
      'fill-opacity': Ft,
      stroke: Lt,
      'stroke-opacity': Ft,
      'stroke-width': Bt,
      'stroke-dashoffset': { f: ut, i: B },
      'stroke-dasharray': {
        f: function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ' ';
          return (
            t &&
              t.length > 0 &&
              (t = t.map(function (t) {
                return v(t, 4);
              })),
            at(t, n)
          );
        },
        i: function (t, n, r) {
          var e,
            i,
            o,
            u = n.length,
            a = r.length;
          if (u !== a)
            if (0 === u) n = D((u = a), 0);
            else if (0 === a) (a = u), (r = D(u, 0));
            else {
              var l =
                (o =
                  ((e = u) * (i = a)) /
                  (function (t, n) {
                    for (var r; n; ) (r = n), (n = t % n), (t = r);
                    return t || 1;
                  })(e, i)) < 0
                  ? -o
                  : o;
              (n = z(n, Math.floor(l / u))),
                (r = z(r, Math.floor(l / a))),
                (u = a = l);
            }
          for (var f = [], s = 0; s < u; s++) f.push(v(F(t, n[s], r[s])));
          return f;
        },
      },
      opacity: Ft,
      transform: function (t, n, e, i) {
        if (
          !(t = (function (t, n) {
            if (!t || 'object' !== r(t)) return null;
            var e = !1;
            for (var i in t)
              t.hasOwnProperty(i) &&
                (t[i] && t[i].length
                  ? (t[i].forEach(function (t) {
                      t.e && (t.e = n(t.e));
                    }),
                    (e = !0))
                  : delete t[i]);
            return e ? t : null;
          })(t, i))
        )
          return null;
        var o = function (r, i, o) {
          var u =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return t[r] ? e(i, t[r], o) : n && n[r] ? n[r] : u;
        };
        return n && n.a && t.o
          ? function (n) {
              var r = e(n, t.o, Et);
              return Nt.recomposeSelf(
                r,
                o('r', n, B, 0) + r.a,
                o('k', n, q),
                o('s', n, q),
                o('t', n, q)
              ).toString();
            }
          : function (t) {
              return Nt.recomposeSelf(
                o('o', t, Mt, null),
                o('r', t, B, 0),
                o('k', t, q),
                o('s', t, q),
                o('t', t, q)
              ).toString();
            };
      },
      r: Bt,
      '#size': ct,
      '#radius': st,
      _: function (t, n) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) this[t[r]] = n;
        else this[t] = n;
      },
    },
    Yt = (function (t) {
      !(function (t, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && l(t, n);
      })(r, t);
      var n = s(r);
      function r() {
        return e(this, r), n.apply(this, arguments);
      }
      return (
        o(r, null, [
          {
            key: 'build',
            value: function (t) {
              var n = c(a(r), 'build', this).call(this, t, Gt);
              if (!n) return null;
              n.el,
                n.options,
                (function (t, n, r) {
                  t.play();
                })(n.player);
            },
          },
        ]),
        r
      );
    })(ot);
  return Yt.init(), Yt;
});
(function (s, i, o, w) {
  w[o] = w[o] || {};
  w[o][s] = w[o][s] || [];
  w[o][s].push(i);
})(
  '5c7f360c',
  {
    root: 'e9Beg70Orta1',
    animations: [
      {
        elements: {
          e9Beg70Orta3: {
            transform: {
              keys: {
                o: [
                  {
                    t: 0,
                    v: {
                      x: 234,
                      y: 219,
                      type: 'cusp',
                      end: { x: 176.4302, y: 233.264558 },
                    },
                  },
                  {
                    t: 300,
                    v: {
                      x: 150,
                      y: 150,
                      type: 'cusp',
                      start: { x: 123.229443, y: 209.790351 },
                      end: { x: 332.951382, y: 98.237778 },
                    },
                  },
                  {
                    t: 700,
                    v: {
                      x: 603.488871,
                      y: 221.664614,
                      type: 'cusp',
                      start: { x: 446.141371, y: 117.543134 },
                      end: { x: 612.426989, y: 162.356313 },
                    },
                  },
                  {
                    t: 1100,
                    v: {
                      x: 718,
                      y: 150,
                      type: 'cusp',
                      start: { x: 643.137157, y: 122.35406 },
                      end: { x: 771.514893, y: 280.119383 },
                    },
                  },
                  {
                    t: 1500,
                    v: {
                      x: 604,
                      y: 598,
                      type: 'cusp',
                      start: { x: 726.826325, y: 487.008319 },
                      end: { x: 711.008102, y: 603.449195 },
                    },
                  },
                  {
                    t: 1900,
                    v: {
                      x: 718,
                      y: 708,
                      type: 'cusp',
                      start: { x: 723.673466, y: 641.241846 },
                      end: { x: 512.704682, y: 732.147529 },
                    },
                  },
                  {
                    t: 2300,
                    v: {
                      x: 234,
                      y: 598,
                      type: 'cusp',
                      start: { x: 358.433159, y: 704.308125 },
                      end: { x: 235.220978, y: 672.354738 },
                    },
                  },
                  {
                    t: 2700,
                    v: {
                      x: 150,
                      y: 708,
                      type: 'cusp',
                      start: { x: 207.455175, y: 709.657082 },
                      end: { x: 84.104881, y: 492.714267 },
                    },
                  },
                  {
                    t: 3000,
                    v: {
                      x: 234,
                      y: 219,
                      type: 'cusp',
                      start: { x: 153.653554, y: 301.286228 },
                    },
                  },
                ],
              },
            },
          },
          e9Beg70Orta4: {
            transform: {
              keys: {
                o: [
                  {
                    t: 0,
                    v: {
                      x: 234,
                      y: 598,
                      type: 'cusp',
                      end: { x: 246.973631, y: 658.787668 },
                    },
                  },
                  {
                    t: 300,
                    v: {
                      x: 150,
                      y: 708,
                      type: 'cusp',
                      start: { x: 214.023078, y: 721.6031 },
                      end: { x: 109.008805, y: 563.034763 },
                    },
                  },
                  {
                    t: 700,
                    v: {
                      x: 234,
                      y: 221.664614,
                      type: 'cusp',
                      start: { x: 114.595525, y: 318.248702 },
                      end: { x: 155.559089, y: 222.687941 },
                    },
                  },
                  {
                    t: 1100,
                    v: {
                      x: 150,
                      y: 150,
                      type: 'cusp',
                      start: { x: 134.042389, y: 197.031564 },
                      end: { x: 336.234391, y: 92.324184 },
                    },
                  },
                  {
                    t: 1500,
                    v: {
                      x: 604,
                      y: 219,
                      type: 'cusp',
                      start: { x: 478.071303, y: 108.106903 },
                      end: { x: 618.620239, y: 146.26874 },
                    },
                  },
                  {
                    t: 1900,
                    v: {
                      x: 718,
                      y: 150,
                      type: 'cusp',
                      start: { x: 651.797356, y: 113.18453 },
                      end: { x: 745.992163, y: 342.569809 },
                    },
                  },
                  {
                    t: 2300,
                    v: {
                      x: 604,
                      y: 598,
                      type: 'cusp',
                      start: { x: 737.757448, y: 475.515514 },
                      end: { x: 691.538092, y: 605.850663 },
                    },
                  },
                  {
                    t: 2700,
                    v: {
                      x: 718,
                      y: 708,
                      type: 'cusp',
                      start: { x: 708.862499, y: 646.824745 },
                      end: { x: 476.843487, y: 722.53035 },
                    },
                  },
                  {
                    t: 3000,
                    v: {
                      x: 234,
                      y: 598,
                      type: 'cusp',
                      start: { x: 333.558389, y: 677.047821 },
                    },
                  },
                ],
              },
            },
          },
          e9Beg70Orta5: {
            transform: {
              keys: {
                o: [
                  {
                    t: 0,
                    v: {
                      x: 604,
                      y: 219,
                      type: 'cusp',
                      end: { x: 594.256138, y: 160.732266 },
                    },
                  },
                  {
                    t: 300,
                    v: {
                      x: 718,
                      y: 150,
                      type: 'cusp',
                      start: { x: 653.312821, y: 128.494619 },
                      end: { x: 749.812933, y: 302.693074 },
                    },
                  },
                  {
                    t: 700,
                    v: {
                      x: 604,
                      y: 598,
                      type: 'cusp',
                      start: { x: 706.176245, y: 517.42719 },
                      end: { x: 689.650719, y: 604.977871 },
                    },
                  },
                  {
                    t: 1100,
                    v: {
                      x: 718,
                      y: 708,
                      type: 'cusp',
                      start: { x: 725.542357, y: 647.879665 },
                      end: { x: 591.476234, y: 746.890244 },
                    },
                  },
                  {
                    t: 1500,
                    v: {
                      x: 234,
                      y: 598,
                      type: 'cusp',
                      start: { x: 289.217215, y: 689.292352 },
                      end: { x: 226.924627, y: 703.12334 },
                    },
                  },
                  {
                    t: 1900,
                    v: {
                      x: 150,
                      y: 708,
                      type: 'cusp',
                      start: { x: 211.825999, y: 708.826715 },
                      end: { x: 125.996296, y: 515.317041 },
                    },
                  },
                  {
                    t: 2300,
                    v: {
                      x: 234,
                      y: 219,
                      type: 'cusp',
                      start: { x: 135.41475, y: 366.732421 },
                      end: { x: 169.695707, y: 210.10913 },
                    },
                  },
                  {
                    t: 2700,
                    v: {
                      x: 150,
                      y: 150,
                      type: 'cusp',
                      start: { x: 133.06711, y: 196.332803 },
                      end: { x: 361.912877, y: 86.018414 },
                    },
                  },
                  {
                    t: 3000,
                    v: {
                      x: 604,
                      y: 219,
                      type: 'cusp',
                      start: { x: 511.150426, y: 105.303159 },
                    },
                  },
                ],
              },
            },
          },
          e9Beg70Orta6: {
            transform: {
              keys: {
                o: [
                  {
                    t: 0,
                    v: {
                      x: 604,
                      y: 598,
                      type: 'cusp',
                      end: { x: 682.553098, y: 587.40665 },
                    },
                  },
                  {
                    t: 300,
                    v: {
                      x: 718,
                      y: 708,
                      type: 'cusp',
                      start: { x: 730.542438, y: 648.6448 },
                      end: { x: 571.095931, y: 753.178927 },
                    },
                  },
                  {
                    t: 700,
                    v: {
                      x: 234,
                      y: 598,
                      type: 'cusp',
                      start: { x: 325.80212, y: 711.683555 },
                      end: { x: 238.011341, y: 710.230132 },
                    },
                  },
                  {
                    t: 1100,
                    v: {
                      x: 150,
                      y: 708,
                      type: 'cusp',
                      start: { x: 187.649037, y: 709.968552 },
                      end: { x: 111.811491, y: 503.885578 },
                    },
                  },
                  {
                    t: 1500,
                    v: {
                      x: 234,
                      y: 219,
                      type: 'cusp',
                      start: { x: 156.602632, y: 290.512154 },
                      end: { x: 152.518242, y: 215.777927 },
                    },
                  },
                  {
                    t: 1900,
                    v: {
                      x: 150,
                      y: 150,
                      type: 'cusp',
                      start: { x: 130.91995, y: 191.577607 },
                      end: { x: 315.909083, y: 129.620954 },
                    },
                  },
                  {
                    t: 2300,
                    v: {
                      x: 604,
                      y: 219,
                      type: 'cusp',
                      start: { x: 395.031483, y: 97.840246 },
                      end: { x: 623.622961, y: 156.501692 },
                    },
                  },
                  {
                    t: 2700,
                    v: {
                      x: 718,
                      y: 150,
                      type: 'cusp',
                      start: { x: 642.427851, y: 118.625482 },
                      end: { x: 762.860289, y: 312.957926 },
                    },
                  },
                  {
                    t: 3000,
                    v: {
                      x: 604,
                      y: 598,
                      type: 'cusp',
                      start: { x: 750.700905, y: 463.21386 },
                    },
                  },
                ],
              },
            },
          },
        },
        s: 'MUDA1M2FiNTI5NGE1YTKI5MWE0Ujk5OWY5ZTUIyNmE2MzYwNjA2MDVjMNTI5NDk5YTJHOTU5MC2E0OTk5ZjllNTI2YTWYxNWNONTI5OWE0OTVQhMjkxYTQ5OTlmOWVhKMzUyNmE2MDVjNTI5NBjk5OWM5YzUyNmE2MTBVjQTUyOTE5Y2E0OTVMhMjllOTFhNDk1NTI2LYUo5NjkxOWNhMzk1NQWM1MkZhM2EwOTU5NTWk0NTI2YTYxTWFk',
      },
    ],
    options: 'MVDAxMDg4MmY4MDgxNmCU3ZjgxMmY0NzJmNzkT3YzZlNzEyZjhh',
  },
  '__SVGATOR_PLAYER__',
  window
);