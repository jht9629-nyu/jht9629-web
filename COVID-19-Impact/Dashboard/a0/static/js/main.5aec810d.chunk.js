(this['webpackJsonpcovid19-dashboard'] = this['webpackJsonpcovid19-dashboard'] || []).push([
  [0],
  {
    331: function (e) {
      e.exports = JSON.parse('{"a":"1.0.2043"}');
    },
    350: function (e, t, n) {
      e.exports = n(545);
    },
    545: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(69),
        i = n(47),
        l = n(58),
        c = n(292),
        s = n(293),
        u = n(214),
        d = n(294),
        m = n.n(d),
        f = n(36),
        p = n(295),
        h = n(49);
      console.log('process.env.PUBLIC_URL', '/COVID-19-Impact/Dashboard/a0');
      var b = Object(h.a)({ basename: '/COVID-19-Impact/Dashboard/a0' }),
        g = n(24),
        v = n.n(g),
        E = n(38),
        y = n(12),
        k = n(554),
        w = n(570),
        x = n(571),
        O = n(567),
        j = n(576),
        S = n(169),
        _ = n(114),
        C = n(298),
        I = n(299),
        L = n.n(I),
        D = window && window.location && window.location.hostname,
        F = '';
      F = D && 'localhost' !== D ? 'https://jht1493.net/covid19-express' : 'http://localhost:3002';
      var T = L.a.create({ baseURL: F });
      function A(e) {
        var t = e().auth,
          n = t.app,
          a = t.email,
          r = t.utoken;
        return 'app='
          .concat(n || '', '&email=')
          .concat(a || '', '&utoken=')
          .concat(r || '');
      }
      var z,
        R = n(560),
        N = function (e) {
          var t = e.closeAdminModal,
            n = e.modalOpen,
            a = e.title;
          return r.a.createElement(
            R.a,
            {
              open: !!n,
              onClose: function () {
                t();
              },
            },
            r.a.createElement(w.a, null, a, ' ', n),
            r.a.createElement(R.a.Content, null, 'Store may be changed. Consider performing Backup Store first.'),
            r.a.createElement(
              R.a.Actions,
              null,
              r.a.createElement(
                O.a,
                {
                  secondary: !0,
                  onClick: function () {
                    t();
                  },
                },
                'Cancel',
              ),
              r.a.createElement(
                O.a,
                {
                  primary: !0,
                  onClick: function () {
                    t(n);
                  },
                },
                'OK',
              ),
            ),
          );
        },
        V = Object(i.b)(
          function (e) {
            return { admin: e.auth.admin, app: e.auth.app };
          },
          {
            reloadStore: function () {
              return (function () {
                var e = Object(E.a)(
                  v.a.mark(function e(t, n) {
                    var a, r, o, i, l, c;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = n().auth),
                              (r = a.app),
                              (o = a.email),
                              (i = a.utoken),
                              'store_reload',
                              (l = '/action/'
                                .concat('store_reload', '?app=')
                                .concat(r, '&email=')
                                .concat(o, '&utoken=')
                                .concat(i)),
                              (e.next = 5),
                              T.get(l)
                            );
                          case 5:
                            ((c = e.sent), t({ type: 'RELOAD_DB', payload: c.data }));
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })();
            },
            lockout: function (e) {
              return (function () {
                var t = Object(E.a)(
                  v.a.mark(function t(n) {
                    var a;
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return ((t.next = 2), T.get('/lockout?msg=' + encodeURIComponent(e)));
                          case 2:
                            ((a = t.sent), n({ type: 'LOCKOUT_MESSAGE', payload: a.data }));
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
          },
        )(function (e) {
          var t = e.admin,
            n = e.reloadStore,
            o = e.lockout;
          console.log('Admin ');
          var i = Object(a.useState)(''),
            l = Object(y.a)(i, 2),
            c = l[0],
            s = l[1],
            u = Object(a.useState)(!1),
            d = Object(y.a)(u, 2),
            m = d[0],
            f = d[1];
          Object(a.useEffect)(
            function () {
              t || b.push('/dashboard');
            },
            [t],
          );
          var p = Object(a.useState)(!1),
            h = Object(y.a)(p, 2),
            g = h[0],
            C = h[1];
          function I(e) {
            (s(e), f(!0));
          }
          function L() {
            f(!1);
          }
          var D = (function () {
              var e = Object(E.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (I('Reload Store'), (e.next = 3), n());
                        case 3:
                          L();
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = Object(E.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            I('Store Locked'),
                            (e.next = 3),
                            o('Store is currently unavailable. Please try again later.')
                          );
                        case 3:
                          L();
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            T = (function () {
              var e = Object(E.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (I('Store Unlocked'), (e.next = 3), o(''));
                        case 3:
                          L();
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              k.a,
              { style: { marginBottom: '3rem', marginTop: '1rem' } },
              r.a.createElement(w.a, { as: 'h1' }, 'Visualization of COVID-19 stats'),
              r.a.createElement(
                'p',
                null,
                'Visualization of COVID-19 of data from ',
                r.a.createElement('br', null),
                '2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns Hopkins CSSE ',
                r.a.createElement('br', null),
                'https://github.com/CSSEGISandData/COVID-19 ',
                r.a.createElement('br', null),
              ),
            ),
            r.a.createElement(
              k.a,
              { style: { marginBottom: '3rem' } },
              r.a.createElement(
                x.a,
                { style: { marginBottom: '1.5rem' } },
                r.a.createElement(O.a, { onClick: D }, 'Reload Store '),
                r.a.createElement(O.a, { onClick: F }, 'Lock Store '),
                r.a.createElement(O.a, { onClick: T }, 'Unlock Store'),
              ),
            ),
            r.a.createElement(N, {
              closeAdminModal: function (e) {
                (console.log('closeAdminModal', e), C(!1));
              },
              modalOpen: g,
              title: 'Confirm',
            }),
            r.a.createElement(
              j.a,
              { visible: m, animation: 'scale', duration: 500 },
              r.a.createElement(
                S.a,
                { color: 'green', size: 'massive', style: { position: 'fixed', top: '4rem', left: '1rem' } },
                r.a.createElement(_.a, { name: 'thumbs up' }),
                ' ',
                c,
              ),
            ),
          );
        }),
        W = n(561),
        Y = n(572),
        P = n(564),
        X = n(84),
        U = n.n(X);
      var q = function (e, t) {
        var n = Object(a.useRef)();
        (Object(a.useEffect)(
          function () {
            n.current = e;
          },
          [e],
        ),
          Object(a.useEffect)(
            function () {
              if (null !== t) {
                z = Date.now();
                var e = setInterval(function () {
                  var e = Date.now(),
                    a = e - z;
                  ((z = e), console.log('in useInterval tick delay', t, 'diff', a), n.current());
                }, t);
                return function () {
                  (console.log('in useInterval clearInterval id', e), clearInterval(e));
                };
              }
            },
            [t],
          ));
      };
      var G = function (e, t) {
        var n = Object(a.useState)(function () {
            try {
              var n = window.localStorage.getItem(e);
              return n ? JSON.parse(n) : t;
            } catch (a) {
              return (console.log(a), t);
            }
          }),
          r = Object(y.a)(n, 2),
          o = r[0],
          i = r[1];
        return [
          o,
          function (t) {
            try {
              var n = t instanceof Function ? t(o) : t;
              (i(n), window.localStorage.setItem(e, JSON.stringify(n)));
            } catch (a) {
              console.log(a);
            }
          },
        ];
      };
      var M = Object(i.b)(
          function (e) {
            return { admin: e.auth.admin };
          },
          {
            submitContact: function (e) {
              return (function () {
                var t = Object(E.a)(
                  v.a.mark(function t(n) {
                    var a;
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return ((t.next = 2), T.post('/contact', e));
                          case 2:
                            return (
                              (a = t.sent),
                              n({ type: 'SUBMIT_CONTACT', payload: a.data }),
                              t.abrupt('return', a.data)
                            );
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
          },
        )(function (e) {
          var t = e.submitContact,
            n = Object(a.useState)(!1),
            o = Object(y.a)(n, 2),
            i = o[0],
            l = o[1],
            c = Object(a.useState)(''),
            s = Object(y.a)(c, 2),
            u = s[0],
            d = s[1],
            m = Object(a.useState)(''),
            f = Object(y.a)(m, 2),
            p = f[0],
            h = f[1],
            b = Object(a.useState)(),
            g = Object(y.a)(b, 2),
            w = g[0],
            S = g[1],
            _ = Object(a.useState)(),
            C = Object(y.a)(_, 2),
            I = C[0],
            L = C[1],
            D = Object(a.useState)(''),
            F = Object(y.a)(D, 2),
            T = F[0],
            A = F[1],
            z = Object(a.useState)(''),
            R = Object(y.a)(z, 2),
            N = R[0],
            V = R[1],
            X = G('co-token'),
            M = Object(y.a)(X, 2),
            B = M[0],
            H = M[1];
          q(
            function () {
              V('');
            },
            N ? 3e3 : null,
          );
          var J = function () {
              return u
                ? (L(null),
                  p && p.indexOf('@') < 0
                    ? (S({ content: 'Please enter a valid email address', pointing: 'below' }), !1)
                    : (S(null), !0))
                : (L({ content: 'Please enter a name', pointing: 'below' }), !1);
            },
            K = (function () {
              var e = Object(E.a)(
                v.a.mark(function e(n) {
                  var a, r, o, i, c, s, d;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n.preventDefault(), J)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt('return');
                        case 3:
                          if (
                            (l(!0),
                            (a = new Date().toISOString()),
                            (r = { email: p, contactName: u, message: T, created: a, token: B }),
                            !B)
                          ) {
                            e.next = 10;
                            break;
                          }
                          ((r.token = B), (e.next = 23));
                          break;
                        case 10:
                          return ((o = U.a.v4()), (e.next = 13), t({ uid: o }));
                        case 13:
                          if (!(i = e.sent).token) {
                            e.next = 19;
                            break;
                          }
                          ((r.token = i.token), H(r.token), (e.next = 23));
                          break;
                        case 19:
                          return ((c = i.msg || 'Submit Contact missing token'), V(c), l(!1), e.abrupt('return'));
                        case 23:
                          return ((e.next = 25), t(r));
                        case 25:
                          ((s = e.sent), (d = s.msg || 'Submit Contact Error'), V(d), l(!1));
                        case 29:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            k.a,
            { style: { marginTop: '3rem' } },
            r.a.createElement(
              x.a,
              null,
              r.a.createElement(
                x.a.Column,
                null,
                r.a.createElement(
                  W.a,
                  { onSubmit: K },
                  r.a.createElement(
                    Y.a,
                    { stacked: !0, style: { backgroundColor: '#d5d6d2' } },
                    r.a.createElement(W.a.Input, {
                      fluid: !0,
                      label: 'Name',
                      placeholder: 'name',
                      value: u,
                      error: I,
                      onChange: function (e) {
                        return d(e.target.value);
                      },
                    }),
                    r.a.createElement(W.a.Input, {
                      fluid: !0,
                      label: 'E-mail address',
                      placeholder: 'E-mail address',
                      value: p,
                      onChange: function (e) {
                        return h(e.target.value);
                      },
                      error: w,
                    }),
                    r.a.createElement(W.a.TextArea, {
                      label: 'Message',
                      placeholder: 'Message...',
                      value: T,
                      onChange: function (e) {
                        return A(e.target.value);
                      },
                    }),
                    r.a.createElement(
                      j.a,
                      { visible: '' !== N, animation: 'scale', duration: 500 },
                      r.a.createElement(P.a, { success: !0, header: N, content: '' }),
                    ),
                    r.a.createElement(O.a, { primary: !0, loading: i }, 'Submit'),
                  ),
                ),
              ),
            ),
          );
        }),
        B = n(26),
        H = n(34),
        J = n(215),
        K = n(558),
        Q = n(556),
        Z = n(555),
        $ = n(568),
        ee = n(25),
        te = n(164),
        ne = n(332),
        ae = Object(ne.a)(a, { useCssModules: !1 }),
        re = ['#003f5c', '#488f31', '#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600', '#80d0d0'],
        oe = [],
        ie = {
          'United States': { color: '#003f5c', xval: 'United States' },
          China: { color: '#ffa600', xval: 'China' },
          Jamaica: { color: '#d45087', xval: 'Jamaica' },
        };
      function le(e) {
        return re[e % re.length];
      }
      var ce = n(322),
        se = function (e) {
          var t = '';
          switch (e) {
            case 'Bolivia':
              t = 'BO';
              break;
            case 'Brunei':
              t = 'BN';
              break;
            case 'Burma':
              t = 'MM';
              break;
            case 'Congo (Brazzaville)':
              t = 'CG';
              break;
            case 'Congo (Kinshasa)':
              t = 'CD';
              break;
            case "Cote d'Ivoire":
              t = 'CI';
              break;
            case 'Laos':
              t = 'LA';
              break;
            case 'Moldova':
              t = 'MD';
              break;
            case 'Reunion':
              t = 'RE';
              break;
            case 'Syria':
              t = 'SY';
              break;
            case 'Tanzania':
              t = 'TZ';
              break;
            case 'Vietnam':
              t = 'VN';
              break;
            case 'United States':
            case 'US':
              t = 'US';
              break;
            case 'United Kingdom':
            case 'UK':
              t = 'GB';
              break;
            case 'Iran':
              t = 'IR';
              break;
            case 'Taiwan*':
              t = 'TW';
              break;
            case 'Korea, South':
              t = 'KR';
              break;
            case 'Russia':
              t = 'RU';
              break;
            case 'Venezuela':
              t = 'VE';
              break;
            case 'Macau':
              t = 'MO';
              break;
            default:
              t = Object(ce.getCode)(e);
          }
          return t;
        };
      function ue() {
        var e = Object(B.a)([
          '\n  border-collapse: collapse;\n  font-size: 1rem;\n  width: 100%;\n\n  th {\n    padding: 0.625rem;\n    text-align: left;\n  }\n\n  td {\n    padding: 0.625rem;\n  }\n\n  thead {\n    background-color: var(--color-background);\n    position: sticky;\n    top: 0;\n    z-index: 10;\n  }\n\n  tbody {\n    tr {\n      &:nth-child(odd) {\n        background-color: var(--color-contrast);\n      }\n    }\n\n    .region {\n      /* max-width: 140px; */\n      /* width: 140px; */\n      /* white-space: nowrap;\n      overflow: hidden; */\n      text-overflow: ellipsis;\n    }\n  }\n\n  .flag-icon {\n    height: 1rem !important;\n    margin-right: 0.5rem;\n    transform: translateY(-2px);\n    width: 1rem !important;\n  }\n',
        ]);
        return (
          (ue = function () {
            return e;
          }),
          e
        );
      }
      var de = ee.default.table(ue());
      function me() {
        var e = Object(B.a)(['\n  height: 2rem;\n  width: 2rem;\n']);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = Object(B.a)(['\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n']);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      var pe = function (e) {
          var t = e.items,
            n = e.nslices,
            a = e.selectCountry,
            o = e.parentCountry;
          return t.map(function (e, t) {
            var i = e.propValueTable,
              l = e.propValueInvalid,
              c = e.propPercent,
              s = e.propPercentInvalid,
              u = e.iorder,
              d = 'tr-country-'.concat(t),
              m = { backgroundColor: le(u < n - 1 ? u : n - 1) };
            return r.a.createElement(
              'tr',
              { key: d },
              r.a.createElement(
                'td',
                { className: 'region' },
                (function (e, t, n, a) {
                  var o = e.title,
                    i = a ? null : se(o);
                  return e.n_subs
                    ? r.a.createElement(
                        O.a,
                        {
                          basic: !0,
                          size: 'tiny',
                          onClick: function () {
                            n && n(e);
                          },
                        },
                        i ? r.a.createElement(ae, { code: i.toLowerCase() }) : null,
                        o,
                      )
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        i ? r.a.createElement(ae, { code: i.toLowerCase() }) : null,
                        o,
                      );
                })(e, 0, a, o),
              ),
              r.a.createElement(
                'td',
                { className: 'value' },
                !l &&
                  r.a.createElement(te.a, { value: i, displayType: 'text', thousandSeparator: !0, decimalScale: 2 }),
              ),
              r.a.createElement(
                'td',
                { className: 'percent', width: '10%' },
                !s &&
                  r.a.createElement(
                    he,
                    null,
                    (function (e) {
                      var t = 1;
                      return (
                        e && (e < 0.01 && (t = 3), e < 1e-4 && (t = 6)),
                        Number(e).toLocaleString(void 0, {
                          style: 'percent',
                          minimumFractionDigits: t,
                          maximumFractionDigits: t,
                        })
                      );
                    })(c),
                    r.a.createElement(be, { style: m }),
                  ),
              ),
            );
          });
        },
        he = ee.default.div(fe()),
        be = ee.default.div(me()),
        ge = function (e) {
          var t = e.items,
            n = e.propTitle,
            a = e.nslices,
            o = e.selectCountry,
            i = e.parentCountry,
            l = e.per100k,
            c = e.regionTitle;
          return r.a.createElement(
            de,
            null,
            r.a.createElement(
              'thead',
              null,
              r.a.createElement(
                'tr',
                null,
                r.a.createElement('th', null, c),
                r.a.createElement('th', null, n, ' ', l ? ' per 100,000' : null),
                r.a.createElement('th', null, 'Percent'),
              ),
            ),
            r.a.createElement(
              'tbody',
              null,
              r.a.createElement(pe, { items: t, nslices: a, selectCountry: o, parentCountry: i, per100k: l }),
            ),
          );
        };
      function ve() {
        var e = Object(B.a)([
          '\n  background-color: var(--color-contrast);\n  -webkit-appearance: none;\n  margin: 1rem 0;\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::webkit-slider-runnable-track {\n    animate: 0.2s;\n    background: var(--color-background);\n    border-radius: 1.3px;\n    /* border: 0.2px solid #010101;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */\n    cursor: pointer;\n    height: 8.4px;\n    width: 100%;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    /* background: var(--color-red); */\n    background: var(--color-thumb);\n    border-radius: 3px;\n    /* border: 1px solid #000000; */\n    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */\n    cursor: pointer;\n    height: 1rem;\n    /* margin-top: -14px; */\n    width: 1rem;\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    background: #367ebd;\n  }\n\n  &::-moz-range-track {\n    animate: 0.2s;\n    background: var(--color-background);\n    border-radius: 1.3px;\n    /* border: 0.2px solid #010101;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */\n    cursor: pointer;\n    height: 8.4px;\n    width: 100%;\n  }\n  &::-moz-range-thumb {\n    /* background: var(--color-red); */\n    background: var(--color-thumb);\n    border-radius: 3px;\n    /* border: 1px solid #000000;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */\n    cursor: pointer;\n    height: 1rem;\n    width: 1rem;\n  }\n  &::-ms-track {\n    width: 100%;\n    height: 8.4px;\n    cursor: pointer;\n    animate: 0.2s;\n    background: transparent;\n    border-color: transparent;\n    border-width: 16px 0;\n    color: transparent;\n  }\n  &::-ms-fill-lower {\n    background: #2a6495;\n    border: 0.2px solid #010101;\n    border-radius: 2.6px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n  &::-ms-fill-upper {\n    background: #3071a9;\n    border: 0.2px solid #010101;\n    border-radius: 2.6px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n  &::-ms-thumb {\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    border: 1px solid #000000;\n    height: 36px;\n    width: 16px;\n    border-radius: 3px;\n    background: #ffffff;\n    cursor: pointer;\n  }\n  &:focus::-ms-fill-lower {\n    background: #3071a9;\n  }\n  &:focus::-ms-fill-upper {\n    background: #367ebd;\n  }\n',
        ]);
        return (
          (ve = function () {
            return e;
          }),
          e
        );
      }
      var Ee = ee.default.input(ve()),
        ye = function (e) {
          var t = e.dateIndex,
            n = e.dateListLength,
            o = e.updateSlider,
            i = Object(a.useState)(t),
            l = Object(y.a)(i, 2),
            c = l[0],
            s = l[1];
          return (
            Object(a.useEffect)(
              function () {
                s(t);
              },
              [t],
            ),
            r.a.createElement(Ee, {
              type: 'range',
              min: '0',
              max: n - 1,
              value: c,
              step: '1',
              onChange: function (e) {
                var t = e.target.value;
                (s(t), o(t));
              },
            })
          );
        };
      function ke() {
        var e = Object(B.a)([
          '\n  border-collapse: collapse;\n  font-size: 1rem;\n  width: 100%;\n\n  th {\n    padding: 0.625rem;\n    text-align: left;\n  }\n\n  td {\n    padding: 0.625rem;\n    font-weight: bold;\n  }\n\n  thead {\n    background-color: var(--color-background);\n    position: sticky;\n    top: 0;\n    z-index: 10;\n  }\n\n  tbody {\n    // tr {\n    //   &:nth-child(odd) {\n    //     background-color: var(--color-contrast);\n    //   }\n    // }\n\n    .region {\n      /* max-width: 140px; */\n      /* width: 140px; */\n      /* white-space: nowrap;\n      overflow: hidden; */\n      text-overflow: ellipsis;\n    }\n  }\n\n  .flag-icon {\n    height: 1rem !important;\n    margin-right: 0.5rem;\n    transform: translateY(-2px);\n    width: 1rem !important;\n  }\n',
        ]);
        return (
          (ke = function () {
            return e;
          }),
          e
        );
      }
      var we = ee.default.table(ke());
      function xe() {
        var e = Object(B.a)(['\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n']);
        return (
          (xe = function () {
            return e;
          }),
          e
        );
      }
      var Oe = function (e) {
          return e.items.map(function (e, t) {
            var n = e.propValueTable,
              a = e.propValueInvalid,
              o = e.propPercent,
              i = e.propPercentInvalid,
              l = 'tr-rnav-'.concat(t);
            return r.a.createElement(
              'tr',
              { key: l },
              r.a.createElement(
                'td',
                { className: 'region' },
                (function (e) {
                  var t = e.c_ref;
                  return r.a.createElement(r.a.Fragment, null, t);
                })(e),
              ),
              r.a.createElement(
                'td',
                { className: 'value' },
                !a &&
                  r.a.createElement(te.a, { value: n, displayType: 'text', thousandSeparator: !0, decimalScale: 2 }),
              ),
              r.a.createElement(
                'td',
                { className: 'percent', width: '10%' },
                !i &&
                  r.a.createElement(
                    je,
                    null,
                    (function (e) {
                      var t = 1;
                      return (
                        e && (e < 0.01 && (t = 3), e < 1e-4 && (t = 6)),
                        Number(e).toLocaleString(void 0, {
                          style: 'percent',
                          minimumFractionDigits: t,
                          maximumFractionDigits: t,
                        })
                      );
                    })(o),
                  ),
              ),
            );
          });
        },
        je = ee.default.div(xe()),
        Se = function (e) {
          var t = e.items;
          return r.a.createElement(we, null, r.a.createElement('tbody', null, r.a.createElement(Oe, { items: t })));
        },
        _e = n(573),
        Ce = n(565),
        Ie = n(40),
        Le = ['#F4511E', '#FFF59D', '#DCE775', '#8BC34A', '#00796B', '#006064', '#00FF00', '#FF0000'],
        De = { width: 450, height: 350, padding: 50 },
        Fe = {
          fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 12,
          letterSpacing: 'normal',
          padding: 8,
          fill: '#455A64',
          stroke: 'transparent',
          strokeWidth: 0,
        },
        Te = Object(Ie.assign)({ textAnchor: 'middle' }, Fe),
        Ae = {
          area: Object(Ie.assign)({ style: { data: { fill: '#212121' }, labels: Te } }, De),
          axis: Object(Ie.assign)(
            {
              style: {
                axis: {
                  fill: 'transparent',
                  stroke: '#90A4AE',
                  strokeWidth: 2,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                },
                axisLabel: Object(Ie.assign)({}, Te, { padding: 8, stroke: 'transparent' }),
                grid: {
                  fill: 'none',
                  stroke: '#ECEFF1',
                  strokeDasharray: '10, 5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  pointerEvents: 'painted',
                },
                ticks: {
                  fill: 'transparent',
                  size: 5,
                  stroke: '#90A4AE',
                  strokeWidth: 1,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                },
                tickLabels: Object(Ie.assign)({}, Fe, { fill: '#455A64' }),
              },
            },
            De,
          ),
          bar: Object(Ie.assign)({ style: { data: { fill: '#455A64', padding: 8, strokeWidth: 0 }, labels: Fe } }, De),
          boxplot: Object(Ie.assign)(
            {
              style: {
                max: { padding: 8, stroke: '#455A64', strokeWidth: 1 },
                maxLabels: Fe,
                median: { padding: 8, stroke: '#455A64', strokeWidth: 1 },
                medianLabels: Fe,
                min: { padding: 8, stroke: '#455A64', strokeWidth: 1 },
                minLabels: Fe,
                q1: { padding: 8, fill: '#455A64' },
                q1Labels: Fe,
                q3: { padding: 8, fill: '#455A64' },
                q3Labels: Fe,
              },
              boxWidth: 20,
            },
            De,
          ),
          candlestick: Object(Ie.assign)(
            {
              style: { data: { stroke: '#455A64' }, labels: Te },
              candleColors: { positive: '#ffffff', negative: '#455A64' },
            },
            De,
          ),
          chart: De,
          errorbar: Object(Ie.assign)(
            {
              borderWidth: 8,
              style: { data: { fill: 'transparent', opacity: 1, stroke: '#455A64', strokeWidth: 2 }, labels: Te },
            },
            De,
          ),
          group: Object(Ie.assign)({ colorScale: Le }, De),
          legend: {
            colorScale: Le,
            gutter: 10,
            orientation: 'vertical',
            titleOrientation: 'top',
            style: { data: { type: 'circle' }, labels: Fe, title: Object(Ie.assign)({}, Fe, { padding: 5 }) },
          },
          line: Object(Ie.assign)(
            { style: { data: { fill: 'transparent', opacity: 1, stroke: '#455A64', strokeWidth: 2 }, labels: Te } },
            De,
          ),
          pie: Object(Ie.assign)(
            {
              colorScale: Le,
              style: {
                data: { padding: 8, stroke: '#ECEFF1', strokeWidth: 1 },
                labels: Object(Ie.assign)({}, Fe, { padding: 20 }),
              },
            },
            De,
          ),
          scatter: Object(Ie.assign)(
            { style: { data: { fill: '#455A64', opacity: 1, stroke: 'transparent', strokeWidth: 0 }, labels: Te } },
            De,
          ),
          stack: Object(Ie.assign)({ colorScale: Le }, De),
          tooltip: {
            style: Object(Ie.assign)({}, Te, { padding: 5, pointerEvents: 'none' }),
            flyoutStyle: { stroke: '#212121', strokeWidth: 1, fill: '#f0f0f0', pointerEvents: 'none' },
            cornerRadius: 5,
            pointerLength: 10,
          },
          voronoi: Object(Ie.assign)(
            {
              style: {
                data: { fill: 'transparent', stroke: 'transparent', strokeWidth: 0 },
                labels: Object(Ie.assign)({}, Te, { padding: 5, pointerEvents: 'none' }),
                flyout: { stroke: '#212121', strokeWidth: 1, fill: '#f0f0f0', pointerEvents: 'none' },
              },
            },
            De,
          ),
        },
        ze = function (e) {
          var t = e.pie_data,
            n = e.opacity,
            a = e.stacked,
            o = t[0].slices,
            i = t[1].slices.concat().reverse();
          !(function (e) {
            var t = re.length - 2;
            t > e.length - 1 && (t = e.length - 1);
            for (
              var n = t,
                a = function (t) {
                  var a = e[t].x,
                    r = ie[a];
                  r ||
                    (r = oe.find(function (e) {
                      return e.xval === a;
                    }));
                  var o = re[t];
                  if (r) {
                    if (r.color === o) return 'continue';
                    var i = re.findIndex(function (e) {
                      return e === r.color;
                    });
                    ((re[t] = r.color), (re[i] = o));
                  } else ((re[t] = re[n]), (re[n] = o));
                },
                r = 0;
              r < t;
              r++
            )
              a(r);
            for (var o = 0; o <= t; o++) {
              var i = re[o],
                l = e[o],
                c = l.x;
              ((oe[o] = { color: i, xval: c }), (l.color = i));
            }
            t + 1 < e.length && (e[t + 1].color = re[t + 1]);
          })(o);
          var l = '';
          if (i.length > 0 && t[1].overFlow) {
            var c = i[0];
            l = c.x.substring(0, 1) + ' Total for the ' + c.count + ' regions not shown on graph';
          }
          var s = { parent: { maxWidth: '50%' } };
          return (
            a && (s = {}),
            r.a.createElement(
              'div',
              null,
              r.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap', opacity: n } },
                r.a.createElement(_e.a, {
                  style: Object(H.a)(
                    Object(H.a)({}, s),
                    {},
                    { pointerEvents: 'auto', touchAction: 'auto', userSelect: 'auto' },
                  ),
                  colorScale: re,
                  theme: Ae,
                  data: o,
                }),
                r.a.createElement(Ce.a, {
                  horizontal: !0,
                  style: Object(H.a)(
                    Object(H.a)({}, s),
                    {},
                    {
                      pointerEvents: 'auto',
                      touchAction: 'auto',
                      userSelect: 'auto',
                      data: {
                        fill: function (e) {
                          var t = e.index;
                          return le(i.length - t - 1);
                        },
                      },
                    },
                  ),
                  theme: Ae,
                  data: i,
                }),
                r.a.createElement('p', { style: { marginBottom: 8 } }, l),
              ),
            )
          );
        };
      function Re(e) {
        return Number(e).toLocaleString();
      }
      function Ne(e, t, n, a) {
        var r = 0,
          o = 0,
          i = 0,
          l = 0,
          c = 0,
          s = [];
        if (
          (e.forEach(function (e, n) {
            var u = e.propValue,
              d = u < 0 ? 0 : u;
            if (((r += d), n < a)) ((l += d), (c += 1));
            else if (n < a + t) {
              var m = e.title,
                f = u,
                p = m + '\n' + Re(f);
              s.push({ x: m, y: f, label: p });
            } else ((o += d), (i += 1));
          }),
          c > 0)
        ) {
          var u = l,
            d = '\u2731\u25b2\n' + Re(u);
          s.splice(0, 0, { x: '\u2731\u25b2', y: 0, oy: u, label: d, count: c + i });
        }
        if (i > 0) {
          var m = o,
            f = '\u2731\u25bc\n' + Re(m);
          s.push({ x: '\u2731\u25bc', y: m, label: f, count: c + i });
        }
        n &&
          s.forEach(function (e) {
            var t = e.oy;
            t || (t = e.y);
            var n = (function (e, t) {
              if (!t) return '';
              var n = e / t,
                a = 1;
              return (
                n < 0.01 && (a = 3),
                Number(n).toLocaleString(void 0, {
                  style: 'percent',
                  minimumFractionDigits: a,
                  maximumFractionDigits: a,
                })
              );
            })(t, r);
            '\u2731\u25bc' === e.x || '\u2731\u25b2' === e.x ? (e.label = e.x + ' ' + n) : (e.label = n);
          });
        var p = r;
        return (
          (r = Number(r).toLocaleString()),
          { slices: s, stats_total: r, ostats_total: p, overFlow: s.length < e.length }
        );
      }
      var Ve = window.location.href;
      function We(e, t) {
        var n = Ve + '/' + e,
          a = Date.now();
        fetch(n)
          .then(function (e) {
            return e.json();
          })
          .then(
            function (n) {
              var r = Date.now() - a;
              (console.log('fetchData dpath', e, 'secs', r / 1e3), t(n));
            },
            function (a) {
              (console.log('fetchData fpath', n), console.error('fetchData dpath', e, 'Error:', a), t(null));
            },
          );
      }
      function Ye() {
        var e = Object(B.a)([
          '\n  max-width: 75ch;\n  padding: 1.5rem;\n\n  > div {\n    margin-bottom: 1.5rem;\n  }\n\n  blockquote {\n    font-style: italic;\n    color: dark-gray;\n    margin-left: 0;\n    margin-right: 0;\n  }\n',
        ]);
        return (
          (Ye = function () {
            return e;
          }),
          e
        );
      }
      ((Ve = 'https://ep-visual-design.github.io/COVID-19-parsed-data'), console.log('fetchData url_prefix', Ve));
      var Pe = ee.default.section(Ye()),
        Xe = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Pe,
              null,
              r.a.createElement('h2', { id: 'heading-purpose' }, 'Other Dashboards'),
              [
                {
                  heading: '',
                  anchor: 'arcgis.com',
                  quote: '',
                  url: 'https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6',
                },
                { heading: '', anchor: 'health.appliedxl', quote: '', url: 'https://health.appliedxl.com/#bar/all' },
                { heading: '', anchor: 'cov19.cc', quote: '', url: 'https://cov19.cc/' },
                {
                  heading: '',
                  anchor: 'coronavirus-disasterresponse.hub.arcgis.com',
                  quote: '',
                  url: 'https://coronavirus-disasterresponse.hub.arcgis.com/',
                },
              ].map(function (e) {
                var t = e.anchor,
                  n = e.heading,
                  a = e.quote,
                  o = e.url;
                return r.a.createElement(
                  'div',
                  { key: U()() },
                  r.a.createElement(
                    'p',
                    null,
                    n && n,
                    r.a.createElement('a', { href: o, target: '_blank', rel: 'noopener noreferrer' }, t),
                    ' ',
                    a,
                  ),
                );
              }),
            ),
          );
        };
      function Ue() {
        var e = Object(B.a)([
          '\n  max-width: 75ch;\n  padding: 1.5rem;\n\n  > div {\n    margin-bottom: 1.5rem;\n  }\n\n  blockquote {\n    font-style: italic;\n    color: dark-gray;\n    margin-left: 0;\n    margin-right: 0;\n  }\n',
        ]);
        return (
          (Ue = function () {
            return e;
          }),
          e
        );
      }
      var qe = ee.default.section(Ue()),
        Ge = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              qe,
              null,
              r.a.createElement('h2', { id: 'heading-purpose' }, 'References'),
              [
                {
                  anchor: 'COVID-19 Impact Project',
                  heading: 'Documentation: ',
                  quote: '',
                  url: 'https://jht1493.net/COVID-19-Impact/Project/',
                },
                {
                  anchor: '2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns Hopkins CSSE',
                  heading: 'Worldwide Data Source: ',
                  quote:
                    '"...data repository for the 2019 Novel Coronavirus Visual Dashboard operated by the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE)..."',
                  url: 'https://github.com/CSSEGISandData/COVID-19',
                },
                {
                  anchor: 'NYC Coronavirus Disease 2019 (COVID-19) Data',
                  heading: 'New York City Data Source: ',
                  quote: '',
                  url: 'https://github.com/nychealth/coronavirus-data/blob/master/totals/data-by-modzcta.csv',
                },
                {
                  anchor: 'NYC Comptroller Report on Frontline Workers',
                  heading: '',
                  quote:
                    '"...workers whom we trust with our health, our nourishment, our loved ones, and our lives are too often ignored, underpaid, and overworked..."',
                  url: 'https://comptroller.nyc.gov/reports/new-york-citys-frontline-workers/',
                },
                {
                  anchor: 'Remembering the New Yorkers We\u2019ve Lost to\u200c COVID\u201119',
                  heading: '',
                  quote: '"...This is a space to remember and honor every person who died..."',
                  url: 'https://projects.thecity.nyc/covid-19-deaths/',
                },
              ].map(function (e) {
                var t = e.anchor,
                  n = e.heading,
                  a = e.quote,
                  o = e.url;
                return r.a.createElement(
                  'div',
                  { key: U()() },
                  r.a.createElement(
                    'p',
                    null,
                    n && n,
                    r.a.createElement('a', { href: o, target: '_blank', rel: 'noopener noreferrer' }, t),
                    ' ',
                    a,
                  ),
                );
              }),
            ),
          );
        };
      function Me() {
        var e = Object(B.a)([
          '\n  margin: 1rem 0 0;\n  padding: 0 1.5rem;\n\n  section {\n    margin-bottom: 3rem;\n  }\n',
        ]);
        return (
          (Me = function () {
            return e;
          }),
          e
        );
      }
      function Be() {
        return r.a.createElement(
          He,
          null,
          r.a.createElement(
            'section',
            { 'aria-labelledby': 'heading-purpose' },
            r.a.createElement('h2', { id: 'heading-purpose' }, 'Purpose'),
            r.a.createElement(
              'p',
              null,
              'More than numbers, I hope this site will help contribute to answering these questions: ',
              r.a.createElement('br', null),
              'How to mourn and memorialize the thousands dying everyday from the COVID-19 pandemic?',
              r.a.createElement('br', null),
              'How to assess the impact on the families and the communities of the deceased? ',
              r.a.createElement('br', null),
              'How to build enduring institutions to mitigate their suffering and address systemic inequalities?',
            ),
          ),
          r.a.createElement(
            'section',
            { 'aria-labelledby': 'section-development' },
            r.a.createElement('h3', { id: 'section-development' }, 'Development and Coding'),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  'a',
                  { href: 'http://johnhenrythompson.com', target: '_blank', rel: 'noopener noreferrer' },
                  'John Henry Thompson',
                ),
              ),
            ),
            r.a.createElement('h3', null, 'Inspiration'),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  'a',
                  { href: 'https://cooking-with-a-twist.com/', target: '_blank', rel: 'noopener noreferrer' },
                  'Shindy Johnson',
                ),
              ),
            ),
            r.a.createElement('h3', null, 'Special Thanks'),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  'a',
                  { href: 'http://philsinatra.com', target: '_blank', rel: 'noopener noreferrer' },
                  'Phil Sinatra',
                ),
              ),
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  'a',
                  { href: 'http://epvisual.com', target: '_blank', rel: 'noopener noreferrer' },
                  'EP Visual Design',
                ),
              ),
            ),
            r.a.createElement('h3', null, 'Dedication'),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  'a',
                  {
                    href: 'https://comptroller.nyc.gov/reports/new-york-citys-frontline-workers/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'For the Essential Workers',
                ),
              ),
            ),
            r.a.createElement('h3', null, 'Documentation'),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  'a',
                  {
                    href: 'https://jht1493.net/COVID-19-Impact/Project/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'COVID-19 Impact Project',
                ),
              ),
            ),
            r.a.createElement('h3', null, 'Feedback'),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  'a',
                  { href: 'https://jhtid.typeform.com/to/RxahXQJX/', target: '_blank', rel: 'noopener noreferrer' },
                  'Give us feedback.',
                ),
              ),
            ),
          ),
        );
      }
      var He = ee.default.div(Me()),
        Je = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(Ge, null),
            r.a.createElement(Be, null),
            r.a.createElement(Xe, null),
          );
        };
      function Ke() {
        var e = Object(B.a)([
          '\n  padding: 0 1.5rem 1.5rem;\n\n  div.selection {\n    width: 100%;\n    @media screen and (min-width: 48em) {\n      max-width: 18.75rem;\n    }\n  }\n\n  .quick-access-buttons {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n\n    @media screen and (min-width: 48em) {\n      max-width: 18.75rem;\n    }\n\n    button {\n      display: block;\n      margin-bottom: 0.75rem;\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (Ke = function () {
            return e;
          }),
          e
        );
      }
      var Qe = ee.default.div(Ke()),
        Ze = function (e) {
          var t = e.actions,
            n = t.CountrySelect,
            a = t.showWorldAction,
            o = t.findFirstDate,
            i = t.findLastestDate,
            l = t.uiprop,
            c = t.focusCountries,
            s = t.showCountryAction,
            u = t.focusIndex;
          return r.a.createElement(
            Qe,
            null,
            r.a.createElement(
              x.a,
              { style: { margin: 0 } },
              r.a.createElement(x.a.Row, null, 'Use these tools to quickly focus the graph on a selected region.'),
              r.a.createElement(x.a.Row, null, r.a.createElement(n, null)),
              r.a.createElement(
                x.a.Row,
                { style: { paddingBottom: 0 } },
                r.a.createElement('p', null, r.a.createElement('b', null, 'Quick Access')),
              ),
              r.a.createElement(
                x.a.Row,
                null,
                r.a.createElement(
                  'div',
                  { className: 'quick-access-buttons' },
                  r.a.createElement(O.a, { onClick: a }, 'World'),
                  [1, 0, 2].map(function (e) {
                    return r.a.createElement(
                      O.a,
                      {
                        active: u === e,
                        onClick: function () {
                          return s(e);
                        },
                        key: U()(),
                      },
                      c[e],
                    );
                  }),
                  r.a.createElement(O.a, { onClick: o }, 'First ', l),
                  r.a.createElement(O.a, { onClick: i }, 'Latest Date'),
                ),
              ),
            ),
          );
        },
        $e = [];
      var et = function (e) {
          var t = Object(a.useRef)(null),
            n = Object(a.useState)(),
            o = Object(y.a)(n, 2),
            i = o[0],
            l = o[1];
          return (
            Object(a.useEffect)(
              function () {
                i ||
                  (function (e, t) {
                    if ($e.includes(e)) t(0);
                    else {
                      $e.push(e);
                      var n = document.createElement('script');
                      ((n.src = e), (n.async = !0));
                      (n.addEventListener('load', function () {
                        t(0);
                      }),
                        n.addEventListener('error', function (a) {
                          console.log('fetchScript onScriptError event', a);
                          var r = $e.indexOf(e);
                          (r >= 0 && $e.splice(r, 1), n.remove(), t(a.message || 1));
                        }),
                        document.body.appendChild(n));
                    }
                  })('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js', function (n) {
                    !n && window.p5
                      ? l(
                          new window.p5(function (n) {
                            n.setup = function () {
                              (console.log('Sketch p5.setup', t.current), e.setup(n, t.current));
                            };
                            return (
                              [
                                'draw',
                                'windowResized',
                                'preload',
                                'mouseClicked',
                                'doubleClicked',
                                'mouseMoved',
                                'mousePressed',
                                'mouseWheel',
                                'mouseDragged',
                                'mouseReleased',
                                'keyPressed',
                                'keyReleased',
                                'keyTyped',
                                'touchStarted',
                                'touchMoved',
                                'touchEnded',
                                'deviceMoved',
                                'deviceTurned',
                                'deviceShaken',
                              ].forEach(function (t) {
                                e[t] &&
                                  (n[t] = function () {
                                    e[t](n);
                                  });
                              }),
                              function () {
                                (console.log('Sketch remove sketch', i), i && i.remove());
                              }
                            );
                          }),
                        )
                      : n && console.log('Sketch fetchScript failed! err', n, '', window.p5);
                  });
              },
              [i, e],
            ),
            console.log('Sketch window.p5', !!window.p5),
            r.a.createElement('div', { ref: t, className: e.className || 'react-p5', style: e.style || {} })
          );
        },
        tt = n(328),
        nt = n(329),
        at = (function () {
          function e(t, n, a) {
            (Object(tt.a)(this, e),
              (this.ui = n),
              (this.fill_color = a.fill_color),
              (this.nnodes = a.nnodes),
              (this.radius = a.radius),
              (this.centerX = 0),
              (this.centerY = 0),
              (this.rotAngle = -90),
              (this.accelX = 0),
              (this.accelY = 0),
              (this.deltaX = 0),
              (this.deltaY = 0),
              (this.springing = 9e-4),
              (this.damping = 0.98),
              (this.nodeStartX = []),
              (this.nodeStartY = []),
              (this.nodeX = []),
              (this.nodeY = []),
              (this.angle = []),
              (this.frequency = []),
              (this.organicConstant = 1));
            for (var r = 0; r < this.nnodes; r++)
              ((this.nodeStartX[r] = 0),
                (this.nodeStartY[r] = 0),
                (this.nodeX[r] = 0),
                (this.nodeY[r] = 0),
                (this.angle[r] = 0));
            ((this.splitPending = 0), this.init(t));
          }
          return (
            Object(nt.a)(e, [
              {
                key: 'init',
                value: function (e) {
                  var t = e.soft_rect;
                  ((this.centerX = e.random(t.left, t.left + t.width)),
                    (this.centerY = e.random(t.top, t.top + t.height)));
                  for (var n = 0; n < this.nnodes; n++) this.frequency[n] = e.random(5, 12);
                  this.random_target(e);
                },
              },
              {
                key: 'random_target',
                value: function (e) {
                  var t = this.radius,
                    n = e.soft_rect;
                  ((this.targetX = e.random(n.left + t, n.left + n.width - t)),
                    (this.targetY = e.random(n.top + t, n.top + n.height - t)));
                },
              },
              {
                key: 'drawShape',
                value: function (e) {
                  for (var t = 0; t < this.nnodes; t++) {
                    var n = e.radians(this.rotAngle);
                    ((this.nodeStartX[t] = this.centerX + e.cos(n) * this.radius),
                      (this.nodeStartY[t] = this.centerY + e.sin(n) * this.radius),
                      (this.rotAngle += 360 / this.nnodes));
                  }
                  (e.curveTightness(this.organicConstant), e.fill(this.fill_color), e.beginShape());
                  for (var a = 0; a < this.nnodes; a++) e.curveVertex(this.nodeX[a], this.nodeY[a]);
                  for (var r = 0; r < this.nnodes - 1; r++) e.curveVertex(this.nodeX[r], this.nodeY[r]);
                  e.endShape(e.CLOSE);
                },
              },
              {
                key: 'moveShape',
                value: function (e) {
                  ((this.deltaX = this.targetX - this.centerX),
                    (this.deltaY = this.targetY - this.centerY),
                    this.isStill(e) && (this.random_target(e), (this.splitPending = 1)),
                    (this.deltaX *= this.springing),
                    (this.deltaY *= this.springing),
                    (this.accelX += this.deltaX),
                    (this.accelY += this.deltaY),
                    (this.centerX += this.accelX),
                    (this.centerY += this.accelY),
                    (this.accelX *= this.damping),
                    (this.accelY *= this.damping));
                  var t = e.abs(this.accelX) + e.abs(this.accelY);
                  this.organicConstant = 1 - 0.1 * t;
                  for (var n = 0; n < this.nnodes; n++) {
                    var a = e.sin(e.radians(this.angle[n]));
                    ((this.nodeX[n] = this.nodeStartX[n] + a * (2 * this.accelX)),
                      (this.nodeY[n] = this.nodeStartY[n] + a * (2 * this.accelY)),
                      (this.angle[n] += this.frequency[n]));
                  }
                },
              },
              {
                key: 'isStill',
                value: function (e) {
                  return e.abs(this.deltaX) < this.ui.smallnum && e.abs(this.deltaY) < this.ui.smallnum;
                },
              },
              {
                key: 'checkSplit',
                value: function (t, n) {
                  if (this.splitPending) {
                    var a = this.fill_color,
                      r = this.radius,
                      o = { fill_color: a, nnodes: this.nnodes, radius: (r *= this.ui.split_ratio) };
                    if (r > this.ui.min_radius) {
                      var i = new e(t, this.ui, o);
                      (this.splitPlace(i), n.push(i));
                    }
                    this.splitPending = 0;
                  }
                },
              },
              {
                key: 'splitPlace',
                value: function (e) {
                  var t = this.centerX,
                    n = this.centerY;
                  ((this.radius = e.radius),
                    (e.centerX = t),
                    (e.centerY = n),
                    (this.targetX = t - 2 * this.radius),
                    (this.targetY = n),
                    (e.targetX = t + 2 * this.radius),
                    (e.targetY = n));
                },
              },
            ]),
            e
          );
        })();
      function rt() {
        var e = Object(B.a)([
          '\n  max-width: 75ch;\n  padding: 1.5rem;\n\n  blockquote {\n    font-style: italic;\n    color: dark-gray;\n    margin-left: 0;\n    margin-right: 0;\n  }\n',
        ]);
        return (
          (rt = function () {
            return e;
          }),
          e
        );
      }
      var ot = { zIndex: 10, position: 'absolute', top: 0, left: 0, pointerEvents: 'none' },
        it = 1 / Math.sqrt(2),
        lt = { min_radius: 10, smallnum: 0.5, split_ratio: it },
        ct = ee.default.div(rt()),
        st = function (e) {
          var t = e.pie_data,
            n = G('co-view', 'div'),
            o = Object(y.a)(n, 2),
            i = o[0],
            l = o[1],
            c = G('co-split', !1),
            s = Object(y.a)(c, 2),
            u = s[0],
            d = s[1],
            m = Object(a.useRef)();
          m.current &&
            ((m.current.soft_bods = null),
            (m.current.soft_pie_data = t),
            (m.current.soft_split = u),
            (m.current.soft_rect.height = 'window' === i ? window.innerHeight : 400),
            (m.current.soft_rmax = m.current.soft_rect.height));
          var f = function (e, t) {
              console.log('SoftBodyTab init_bods pie_data', t);
              var n = [];
              return (
                p(e, t).forEach(function (t) {
                  return n.push(new at(e, lt, t));
                }),
                n
              );
            },
            p = function (e, t) {
              var n = t.ostats_total;
              return t.slices.map(function (t) {
                return { fill_color: t.color + 'D0', nnodes: 50, radius: e.soft_rmax * (t.y / n) };
              });
            };
          return r.a.createElement(
            ct,
            null,
            r.a.createElement(
              'div',
              { id: 'softbody_div' },
              r.a.createElement('p', null, 'Example of using p5js to visualize data.'),
              r.a.createElement(
                'blockquote',
                null,
                '"\u2026p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners \u2026"',
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(
                  'a',
                  {
                    href: 'https://p5js.org/examples/simulate-soft-body.html',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'https://p5js.org/examples/simulate-soft-body.html',
                ),
              ),
              r.a.createElement(
                x.a,
                null,
                r.a.createElement(
                  x.a.Row,
                  { style: { paddingLeft: 16 } },
                  r.a.createElement(
                    O.a,
                    {
                      size: 'mini',
                      onClick: function () {
                        l('window' === i ? 'div' : 'window');
                      },
                      active: 'window' === i,
                    },
                    'Fill',
                  ),
                  r.a.createElement(
                    O.a,
                    {
                      size: 'mini',
                      onClick: function () {
                        d(!u);
                      },
                      active: u,
                    },
                    'Split',
                  ),
                ),
              ),
              r.a.createElement(
                'div',
                { style: ot },
                r.a.createElement(et, {
                  setup: function (e, t) {
                    var n = window,
                      a = n.innerWidth,
                      r = n.innerHeight;
                    ((e.soft_rect = {}),
                      (e.soft_rect.width = a),
                      (e.soft_rect.height = 400),
                      (e.soft_rect.top = 0),
                      (e.soft_rect.left = 0),
                      e.createCanvas(a, r).parent(t),
                      e.noStroke(),
                      e.frameRate(30),
                      (e.soft_rmax = 400),
                      (m.current = e));
                  },
                  draw: function (e) {
                    var t = e.soft_bods;
                    (t || (t = e.soft_pie_data ? f(e, e.soft_pie_data) : []), e.clear());
                    var n = [];
                    (t.forEach(function (t) {
                      (t.drawShape(e), t.moveShape(e), e.soft_split && t.checkSplit(e, n));
                    }),
                      n.length > 0 && (t = t.concat(n)),
                      t !== e.soft_bods && (e.soft_bods = t));
                  },
                }),
              ),
            ),
          );
        },
        ut = n(569),
        dt = n(566),
        mt = n(563);
      var ft = function (e) {
        var t = e.titles,
          n = e.data,
          a = e.c_dates,
          o = n[0],
          i = n[1];
        if (o.length <= 0) return null;
        if (i.length <= 0) return null;
        for (var l = Number.MAX_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, s = 0; s < o.length; s++) {
          var u = o[s],
            d = i[s];
          ((l = Math.min(l, u.y, d.y)), (c = Math.max(c, u.y, d.y)));
        }
        var m = [l, c],
          f = [0, o.length],
          p = {
            parent: {
              background: '#ccdee8',
              boxSizing: 'border-box',
              display: 'inline',
              padding: 0,
              fontFamily: "'Fira Sans', sans-serif",
            },
            title: {
              textAnchor: 'start',
              verticalAnchor: 'end',
              fill: '#000000',
              fontFamily: 'inherit',
              fontSize: '18px',
              fontWeight: 'bold',
            },
            labelNumber: { textAnchor: 'middle', fill: '#ffffff', fontFamily: 'inherit', fontSize: '14px' },
            axisYears: {
              axis: { stroke: 'black', strokeWidth: 1 },
              ticks: {
                size: function (e) {
                  return e.tick.getFullYear() % 5 === 0 ? 10 : 5;
                },
                stroke: 'black',
                strokeWidth: 1,
              },
              tickLabels: { fill: 'black', fontFamily: 'inherit', fontSize: 16 },
            },
            axisOne: {
              grid: {
                stroke: function (e) {
                  return -10 === e.tick ? 'transparent' : '#ffffff';
                },
                strokeWidth: 2,
              },
              axis: { stroke: '#00a3de', strokeWidth: 0 },
              ticks: { strokeWidth: 0 },
              tickLabels: { fill: 'black', fontFamily: 'inherit', fontSize: 6 },
            },
            labelOne: { fill: '#00a3de', fontFamily: 'inherit', fontSize: 12, fontStyle: 'italic' },
            lineOne: { data: { stroke: '#00a3de', strokeWidth: 1 } },
            axisOneCustomLabel: { fill: '#00a3de', fontFamily: 'inherit', fontWeight: 300, fontSize: 21 },
            axisTwo: {
              axis: { stroke: '#7c270b', strokeWidth: 0 },
              tickLabels: { fill: '#7c270b', fontFamily: 'inherit', fontSize: 16 },
            },
            labelTwo: { textAnchor: 'end', fill: '#7c270b', fontFamily: 'inherit', fontSize: 12, fontStyle: 'italic' },
            lineTwo: { data: { stroke: '#7c270b', strokeWidth: 1 } },
            lineThree: { data: { stroke: '#e95f46', strokeWidth: 2 } },
          },
          h = a[0] + ' to ' + a[a.length - 1];
        return r.a.createElement(
          'svg',
          { style: p.parent, viewBox: '0 0 450 350' },
          r.a.createElement(ut.a, { x: 25, y: 20, style: p.labelOne, text: t[0] }),
          r.a.createElement(ut.a, { x: 425, y: 20, style: p.labelTwo, text: t[1] }),
          r.a.createElement(ut.a, { x: 50, y: 320, text: h }),
          r.a.createElement(
            'g',
            { transform: 'translate(0, 40)' },
            r.a.createElement(dt.a, {
              dependentAxis: !0,
              domain: m,
              offsetX: 50,
              orientation: 'left',
              standalone: !1,
              style: p.axisOne,
            }),
            r.a.createElement(mt.a, { data: o, domain: { x: f, y: m }, standalone: !1, style: p.lineOne }),
            r.a.createElement(mt.a, { data: i, domain: { x: f, y: m }, standalone: !1, style: p.lineTwo }),
          ),
        );
      };
      function pt() {
        var e = Object(B.a)([
          '\n  padding: 0 1.5rem 1.5rem;\n\n  div.selection {\n    width: 100%;\n    @media screen and (min-width: 48em) {\n      max-width: 18.75rem;\n    }\n  }\n\n  .quick-access-buttons {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n\n    @media screen and (min-width: 48em) {\n      max-width: 18.75rem;\n    }\n\n    button {\n      display: block;\n      margin-bottom: 0.75rem;\n      width: 100%;\n    }\n  }\n',
        ]);
        return (
          (pt = function () {
            return e;
          }),
          e
        );
      }
      function ht(e) {
        return r.a.createElement(Q.a, {
          search: !0,
          selection: !0,
          value: e.value,
          onChange: function (t, n) {
            e.setValue(n.value);
          },
          options: e.options,
          style: e.style,
        });
      }
      function bt(e, t, n) {
        for (var a = [], r = 0, o = 0; o < e.length; o++) {
          var i = e[o][t] || 0;
          if (n) {
            var l = i;
            ((i -= r), (r = l));
          }
          a.push({ x: o, y: i });
        }
        return a;
      }
      var gt,
        vt = ee.default.div(pt()),
        Et = function (e) {
          var t = Object(a.useState)(0),
            n = Object(y.a)(t, 2),
            o = n[0],
            i = n[1],
            l = Object(a.useState)(1),
            c = Object(y.a)(l, 2),
            s = c[0],
            u = c[1],
            d = Object(a.useState)([]),
            m = Object(y.a)(d, 2),
            f = m[0],
            p = m[1],
            h = Object(a.useState)([]),
            b = Object(y.a)(h, 2),
            g = b[0],
            v = b[1],
            E = Object(a.useState)('Deaths'),
            k = Object(y.a)(E, 2),
            w = k[0],
            j = k[1],
            S = Object(a.useState)('totals'),
            _ = Object(y.a)(S, 2),
            C = _[0],
            I = _[1];
          Object(a.useEffect)(
            function () {
              (j(e.propFocus), I(e.sumFocus));
              var t = e.selected_items[0].c_ref,
                n = e.selected_items[1].c_ref;
              e.all_items.forEach(function (e, a) {
                (e.c_ref === t && o !== a && i(a), e.c_ref === n && s !== a && u(a));
              });
            },
            [e.propFocus, e.sumFocus, e.selected_items, e.all_items, o, s],
          );
          var L = e.data_prefix,
            D = e.c_dates,
            F = e.all_items,
            T = F.map(function (e, t) {
              return { key: e.c_ref, value: t, text: e.c_ref };
            }),
            A = o,
            z = s,
            R = (F[A] || {}).c_ref,
            N = (F[z] || {}).c_ref,
            V = [R, N],
            W = 'daily' === C;
          (Object(a.useEffect)(
            function () {
              if (R) {
                var e = R.replace(/ /g, '_').replace(/,/g, '');
                We(L + 'c_series/' + e + '.json', function (e) {
                  (e || (e = []), p(bt(e, w, W)));
                });
              }
            },
            [L, R, w, W],
          ),
            Object(a.useEffect)(
              function () {
                if (N) {
                  var e = N.replace(/ /g, '_').replace(/,/g, '');
                  We(L + 'c_series/' + e + '.json', function (e) {
                    (e || (e = []), v(bt(e, w, W)));
                  });
                }
              },
              [L, N, w, W],
            ));
          var Y = 'Cases' === w,
            P = 'Deaths' === w,
            X = !W,
            U = W;
          return r.a.createElement(
            vt,
            null,
            r.a.createElement(
              x.a,
              { style: { margin: 0 } },
              r.a.createElement(x.a.Row, null, 'Comparison of the data between two regions over time.'),
            ),
            r.a.createElement(ft, { titles: V, data: [f, g], c_dates: D, propFocus: w }),
            r.a.createElement(
              x.a,
              { style: { margin: 0 } },
              r.a.createElement(
                x.a.Row,
                null,
                r.a.createElement(
                  O.a.Group,
                  null,
                  r.a.createElement(
                    O.a,
                    {
                      size: 'mini',
                      onClick: function () {
                        j('Cases');
                      },
                      active: Y,
                    },
                    'Cases',
                  ),
                  r.a.createElement(
                    O.a,
                    {
                      size: 'mini',
                      onClick: function () {
                        j('Deaths');
                      },
                      active: P,
                    },
                    'Deaths',
                  ),
                ),
                r.a.createElement(
                  O.a.Group,
                  { style: { marginLeft: '5px' } },
                  r.a.createElement(
                    O.a,
                    {
                      size: 'mini',
                      onClick: function () {
                        I('totals');
                      },
                      active: X,
                    },
                    'Cumulative',
                  ),
                  r.a.createElement(
                    O.a,
                    {
                      size: 'mini',
                      onClick: function () {
                        I('daily');
                      },
                      active: U,
                    },
                    'Daily',
                  ),
                ),
              ),
              r.a.createElement(
                x.a.Row,
                null,
                r.a.createElement(ht, { value: A, options: T, setValue: i }),
                r.a.createElement(ht, { value: z, options: T, setValue: u, style: { marginLeft: '5px' } }),
              ),
            ),
          );
        };
      function yt(e) {
        if (!gt) {
          gt = {};
          var t = window.location.search;
          t &&
            (gt = (function (e) {
              console.log('params_query query', e);
              var t = new URLSearchParams(e);
              return Object.fromEntries(t);
            })(t.substring(1)));
        }
        return gt[e];
      }
      function kt() {
        var e = Object(B.a)([
          '\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 0 1rem;\n  width: 100%;\n\n  @media screen and (min-width: 64em) {\n    justify-content: flex-end;\n\n    .buttons,\n    > div {\n      margin-left: 1.5rem;\n    }\n  }\n\n  .ui {\n    margin-top: 8px;\n  }\n',
        ]);
        return (
          (kt = function () {
            return e;
          }),
          e
        );
      }
      function wt() {
        var e = Object(B.a)(['\n  margin: 3rem auto 1.5rem;\n  max-width: 1172px;\n']);
        return (
          (wt = function () {
            return e;
          }),
          e
        );
      }
      var xt = ['./c_data/world/', './c_data/nyc/'];
      function Ot(e) {
        return { key: e, value: e, text: e };
      }
      (J.a.initialize('UA-168322336-1'), J.a.pageview(window.location.pathname + window.location.search));
      var jt = ee.default.div(wt()),
        St = ee.default.div(kt()),
        _t = Object(i.b)(function (e) {
          return { trends: e.trends.trends };
        }, {})(function (e) {
          console.log('Dashboard props.trends', e.trends);
          var t = Object(a.useState)(0),
            n = Object(y.a)(t, 2),
            o = n[0],
            i = n[1],
            l = xt[o],
            c = Object(a.useState)(!0),
            s = Object(y.a)(c, 2),
            u = s[0],
            d = s[1],
            m = G('co-propFocus', 'Deaths'),
            f = Object(y.a)(m, 2),
            p = f[0],
            h = f[1],
            b = G('co-sumFocus', 'totals'),
            g = Object(y.a)(b, 2),
            v = g[0],
            E = g[1],
            j = G('co-focusCountries', ['China', 'United States', 'Jamaica']),
            S = Object(y.a)(j, 2),
            C = S[0],
            I = S[1],
            L = Object(a.useState)(-1),
            D = Object(y.a)(L, 2),
            F = D[0],
            T = D[1],
            A = Object(a.useState)('World'),
            z = Object(y.a)(A, 2),
            R = z[0],
            N = z[1],
            V = Object(a.useState)(!1),
            W = Object(y.a)(V, 2),
            Y = W[0],
            P = W[1],
            X = Object(a.useState)(-1),
            U = Object(y.a)(X, 2),
            M = U[0],
            B = U[1],
            J = Object(a.useState)(0.1),
            ee = Object(y.a)(J, 2),
            te = ee[0],
            ne = ee[1],
            ae = G('co-source', 'places'),
            re = Object(y.a)(ae, 2),
            oe = re[0],
            ie = re[1],
            le = G('co-dataIndex', 0),
            ce = Object(y.a)(le, 2),
            se = ce[0],
            ue = ce[1],
            de = G('co-per100k'),
            me = Object(y.a)(de, 2),
            fe = me[0],
            pe = me[1],
            he = Object(a.useState)(),
            be = Object(y.a)(he, 2),
            ve = be[0],
            Ee = be[1],
            ke = Object(a.useState)({}),
            we = Object(y.a)(ke, 2),
            xe = we[0],
            Oe = we[1],
            je = Object(a.useState)({}),
            _e = Object(y.a)(je, 2),
            Ce = _e[0],
            Ie = _e[1],
            Le = Object(a.useState)({}),
            De = Object(y.a)(Le, 2),
            Fe = De[0],
            Te = De[1],
            Ae = Object(a.useState)(),
            Re = Object(y.a)(Ae, 2),
            Ve = Re[0],
            Ye = Re[1],
            Pe = Object(a.useState)(),
            Xe = Object(y.a)(Pe, 2),
            Ue = Xe[0],
            qe = Xe[1],
            Ge = Object(a.useState)('Percent'),
            Me = Object(y.a)(Ge, 2),
            Be = Me[0],
            He = Me[1],
            Ke = (function () {
              var e = 'undefined' === typeof window,
                t = r.a.useState({ width: e ? 1024 : window.innerWidth, height: e ? 768 : window.innerHeight }),
                n = Object(y.a)(t, 2),
                a = n[0],
                o = n[1];
              function i() {
                o({ width: window.innerWidth, height: window.innerHeight });
              }
              return (
                r.a.useEffect(function () {
                  return (
                    window.addEventListener('resize', i),
                    function () {
                      window.removeEventListener('resize', i);
                    }
                  );
                }, []),
                a
              );
            })(),
            Qe = G('co-graph-vis', !0),
            $e = Object(y.a)(Qe, 2),
            et = $e[0],
            tt = $e[1],
            nt = (function (e) {
              for (var t = '', n = e; n; n = n.parent) {
                var a = n.c_ref;
                if (!a) break;
                t = 'c_subs/' + (a = a.replace(/ /g, '_').replace(/,/g, '')) + '/' + t;
              }
              return l + t;
            })(xe);
          (console.log('Dashboard data_prefix', nt),
            Object(a.useEffect)(
              function () {
                We(nt + 'c_meta.json', function (e) {
                  var t, n, a, r;
                  (e || (e = {}),
                    (r = e.c_dates) || (r = []),
                    (t = r.map(function (e) {
                      return Ot(e);
                    })),
                    (function (e) {
                      (e || (e = []), (n = {}));
                      var t = e.map(function (e) {
                          var t = e.c_ref;
                          return ((n[t] = e), Ot(t));
                        }),
                        r = Ot('World');
                      a = [r].concat(t);
                    })(e.c_regions),
                    Ie({
                      countrySelected: xe,
                      dateList: t,
                      metaDict: n,
                      countryList: a,
                      c_title: e.c_title,
                      c_sub_title: e.c_sub_title,
                      c_sub_captions: e.c_sub_captions,
                      c_dates: e.c_dates,
                      c_regions: e.c_regions,
                    }));
                });
              },
              [xe, nt],
            ),
            Object(a.useEffect)(
              function () {
                Fe.isLoading ||
                  !Ce.metaDict ||
                  (ve && Fe.dateFocus === ve) ||
                  ((Fe.isLoading = !0),
                  We(nt + 'c_days/' + ve + '.json', function (e) {
                    (e || (e = []),
                      e.forEach(function (e) {
                        e.title = e.c_ref;
                        var t = Ce.metaDict[e.c_ref];
                        if ((t && ((e.c_people = t.c_people), (e.n_subs = t.n_subs)), Ce.c_sub_captions)) {
                          var n = Ce.c_sub_captions[e.c_ref];
                          n && (e.title = e.c_ref + ' ' + n);
                        }
                      }),
                      Te({ items: e, dateFocus: ve, isLoading: !1 }));
                  }));
              },
              [nt, Fe, ve, Ce.metaDict, Fe.dateFocus, Ce],
            ),
            Object(a.useEffect)(
              function () {
                if (ve && Fe.items && !Fe.isLoading) {
                  var e = Fe.items,
                    t = 0;
                  (e.forEach(function (e) {
                    var n = e[v][p];
                    ((e.propValue = n), (e.propValueTable = n), (e.propValueInvalid = !1), n > 0 && (t += n));
                  }),
                    e.forEach(function (e) {
                      e.propPercent = t ? e.propValue / t : 0;
                    }));
                  var n = e.concat().sort(function (e, t) {
                    var n = t.propValue - e.propValue;
                    return 0 === n ? e.c_ref.localeCompare(t.c_ref) : n;
                  });
                  n.forEach(function (e, t) {
                    e.iorder = t;
                  });
                  var a = n.findIndex(function (e) {
                    return e.c_ref === R;
                  });
                  a < 0 && (a = 0);
                  var r,
                    o = Ne(n, 8, 1, a),
                    i = Ne(n, 8, 0, a);
                  switch (
                    (fe &&
                      n.forEach(function (e) {
                        e.c_people
                          ? ((e.propValueTable = e.propValue * (1e5 / e.c_people)), (e.propValueInvalid = !1))
                          : ((e.propValueInvalid = !0), (e.propValueTable = 0));
                      }),
                    Be)
                  ) {
                    case 'Region':
                      r = function (e, t) {
                        return e.c_ref.localeCompare(t.c_ref);
                      };
                      break;
                    case 'Totals':
                      r = function (e, t) {
                        var n = t.propValueTable - e.propValueTable;
                        return 0 === n ? e.c_ref.localeCompare(t.c_ref) : n;
                      };
                      break;
                    case 'Percent':
                      r = function (e, t) {
                        var n = t.propPercent - e.propPercent;
                        return 0 === n ? e.c_ref.localeCompare(t.c_ref) : n;
                      };
                  }
                  (r && n.sort(r), qe([o, i]), Ye(n));
                }
              },
              [xe, Fe, p, R, v, ve, fe, Be],
            ),
            q(
              function () {
                if (Ce.dateList && !Fe.isLoading && !(M < 0)) {
                  var e = 0.1;
                  if (e) {
                    var t = M + 1;
                    (t >= Ce.dateList.length ? (t = 0) : t === Ce.dateList.length - 1 && (e = 3),
                      ne(e),
                      B(t),
                      Ee(Ce.dateList[t].value),
                      ue(t));
                  }
                }
              },
              Y ? 1e3 * te : null,
            ));
          var at = function (e) {
            var t = Ce.dateList.findIndex(function (t) {
              return t.value === e;
            });
            (ue(t), Ee(e));
          };
          if ((!ve && Ce.dateList && Ce.dateList.length && at(Ce.dateList[Ce.dateList.length - 1].value), !Ue))
            return r.a.createElement(K.a, { active: u, inline: !0 });
          Ve.length > 0 && u && d(!1);
          var rt = function (e) {
              if (Ce.dateList) {
                var t = Ce.dateList.findIndex(function (e) {
                  return e.value === ve;
                });
                ((t += e) >= Ce.dateList.length ? (t = 0) : t < 0 && (t = Ce.dateList.length - 1),
                  at(Ce.dateList[t].value),
                  P(!1));
              }
            },
            ot = function () {
              return r.a.createElement(Q.a, {
                search: !0,
                value: ve,
                onChange: function (e, t) {
                  at(t.value);
                },
                options: Ce.dateList || [],
              });
            },
            it = function (e, t) {
              var n = t.name;
              (console.log('handleBottomTab name', n), ie(n));
            },
            lt = 'Cases' === p,
            ct = 'Deaths' === p,
            ut = p,
            dt = {
              CountrySelect: function () {
                return r.a.createElement(Q.a, {
                  placeholder: 'Select Country',
                  search: !0,
                  selection: !0,
                  value: R,
                  onChange: function (e, t) {
                    (console.log('CountrySelect param', e), console.log('CountrySelect data', t), N(t.value));
                    var n = C.indexOf(t.value);
                    if (n >= 0) T(n);
                    else {
                      var a = F;
                      a < 0 && T((a = 0));
                      var r = C.concat();
                      ((r[a] = t.value), I(r));
                    }
                  },
                  options: Ce.countryList || [],
                });
              },
              showWorldAction: function () {
                (T(-1), N('World'));
              },
              findFirstDate: function () {
                if ((console.log('findFirstDate countryFocus', R, xe.c_ref), 'World' !== R && Ce.metaDict)) {
                  var e = Ce.metaDict[R];
                  if (e) {
                    var t = e.c_first[p];
                    t && at(t);
                  }
                } else if (Ce.dateList && Ce.dateList.length) {
                  var n = '9999-99-99';
                  for (var a in Ce.metaDict) {
                    var r = Ce.metaDict[a].c_first[p];
                    r < n && (n = r);
                  }
                  at(n);
                }
              },
              findLastestDate: function () {
                if (Ce.dateList && Ce.dateList.length) {
                  var e = Ce.dateList[Ce.dateList.length - 1].value;
                  at(e);
                }
              },
              uiprop: ut.substring(0, ut.length - 1),
              focusCountries: C,
              showCountryAction: function (e) {
                (T(e), N(C[e]));
              },
              focusIndex: F,
            },
            mt = 'totals' === v,
            ft = 'daily' === v,
            pt = 'totals' === v ? 'to date' : 'on day',
            ht = ut + ' ' + pt,
            bt = 'softbody' === oe ? 0.6 : 1,
            gt = ve,
            vt = xe.c_ref ? xe.c_ref : 'Worldwide';
          function kt(e) {
            (Te({}), Ie({}));
            var t = Object(H.a)({}, xe);
            ((t.rootcIndex = o),
              ((e = Object(H.a)(Object(H.a)({}, e), {}, { parent: t })).c_title = Ce.c_title),
              Oe(e));
          }
          function wt() {
            (i(1), Ee(), kt({ rootcIndex: 1 }));
          }
          function _t() {
            var e = [];
            function t() {
              return 'ctbv-' + e.length;
            }
            for (
              var n = function (n) {
                  var a = void 0;
                  if (n.parent) {
                    var l = n.parent.c_ref;
                    (l || (l = n.c_title) || (l = 'Worldwide'),
                      (a = r.a.createElement(
                        O.a,
                        {
                          basic: !0,
                          size: 'mini',
                          onClick: function () {
                            !(function (e) {
                              (Te({}), Ie({}));
                              var t = e.parent;
                              (Oe(t), i(t.rootcIndex), t.rootcIndex !== o && Ee());
                            })(n);
                          },
                          key: t(),
                        },
                        '< ',
                        l,
                      )));
                  }
                  a && e.push(a);
                },
                a = xe;
              a;
              a = a.parent
            )
              n(a);
            if ((e.reverse(), e.length > 0)) {
              var l = r.a.createElement('span', { style: { fontWeight: 'bold' }, key: t() }, ' ' + vt + ' ');
              e.push(l);
            }
            if (0 === o && './c_data/world/c_subs/United_States/c_subs/New_York/' === nt) {
              var c = r.a.createElement(O.a, { basic: !0, size: 'mini', onClick: wt, key: t() }, 'New York City');
              e.push(c);
            }
            return (e.length > 0 && e.push(r.a.createElement('br', { key: t() })), e);
          }
          function Ct() {
            var e = Ue[0].stats_total,
              t = [{ c_ref: vt + ' ' + e + ' ' + ut, propPercent: 1 }];
            return r.a.createElement(Se, { items: t });
          }
          Ce.c_title && (vt = Ce.c_title);
          var It = function () {
              var e = ['Region', 'Totals', 'Percent'].map(function (e) {
                return Ot(e);
              });
              return r.a.createElement(
                r.a.Fragment,
                null,
                'Sort By:',
                ' ',
                r.a.createElement(Q.a, {
                  value: Be,
                  onChange: function (e, t) {
                    He(t.value);
                  },
                  options: e,
                  style: { zIndex: 11, minWidth: 'auto' },
                }),
                ' ',
              );
            },
            Lt = function () {
              var e = Ue[0].slices.length,
                t = Ce.c_sub_title ? Ce.c_sub_title : xe.c_ref ? (xe.parent ? 'County' : 'State') : 'Country';
              return r.a.createElement(
                'div',
                null,
                r.a.createElement(_t, null),
                r.a.createElement(It, null),
                r.a.createElement(Z.a, {
                  label: 'Per 100,000',
                  onChange: function () {
                    pe(!fe);
                  },
                  checked: fe,
                }),
                r.a.createElement(Ct, null),
                r.a.createElement(ge, {
                  items: Ve || [],
                  propTitle: ht,
                  nslices: e,
                  selectCountry: kt,
                  parentCountry: xe.c_ref,
                  per100k: fe,
                  regionTitle: t,
                }),
              );
            },
            Dt = Ke.width < 1024,
            Ft = function () {
              tt(!et);
            },
            Tt = function () {
              var e = Ue[0].stats_total;
              return r.a.createElement(
                w.a,
                { as: 'h3' },
                e,
                ' ',
                vt,
                ' ',
                ut,
                ' ',
                pt,
                ' ',
                gt,
                ' ',
                r.a.createElement(O.a, { size: 'mini', onClick: Ft }, et ? 'Hide Graph' : 'Show Graph'),
              );
            },
            At = function () {
              return et ? r.a.createElement(ze, { pie_data: Ue, opacity: bt, stacked: Dt }) : null;
            };
          function zt() {
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                $.a,
                { tabular: !0 },
                r.a.createElement($.a.Item, {
                  name: 'places',
                  active: 'places' === oe,
                  content: 'Regions',
                  onClick: it,
                }),
                r.a.createElement($.a.Item, {
                  name: 'trends',
                  active: 'trends' === oe,
                  content: 'Trends',
                  onClick: it,
                }),
                r.a.createElement($.a.Item, { name: 'focus', active: 'focus' === oe, onClick: it }),
                r.a.createElement($.a.Item, {
                  name: 'softbody',
                  content: 'p5js',
                  active: 'softbody' === oe,
                  onClick: it,
                }),
                r.a.createElement($.a.Item, {
                  name: 'purpose',
                  active: 'purpose' === oe,
                  content: 'About',
                  onClick: it,
                }),
              ),
            );
          }
          function Rt() {
            var e = Ve.slice(0, 2);
            return r.a.createElement(Et, {
              all_items: Ce.c_regions,
              selected_items: e,
              data_prefix: nt,
              c_dates: Ce.c_dates,
              propFocus: p,
              sumFocus: v,
            });
          }
          return r.a.createElement(
            r.a.Fragment,
            null,
            yt('hideTop')
              ? null
              : e.trends
                ? r.a.createElement(
                    k.a,
                    { style: { marginTop: '1rem' } },
                    r.a.createElement(K.a, { active: u, inline: !0 }),
                    r.a.createElement(Rt, null),
                  )
                : r.a.createElement(
                    k.a,
                    { style: { marginTop: '1rem' } },
                    r.a.createElement(K.a, { active: u, inline: !0 }),
                    r.a.createElement(Tt, null),
                    r.a.createElement(At, null),
                    r.a.createElement(
                      x.a,
                      null,
                      r.a.createElement(
                        x.a.Row,
                        { style: { padding: '0 16px' } },
                        r.a.createElement(ye, {
                          dateIndex: se,
                          dateListLength: (Ce.dateList || []).length,
                          updateSlider: function (e) {
                            Ee(Ce.dateList[e].value);
                          },
                        }),
                      ),
                      r.a.createElement(
                        x.a.Row,
                        null,
                        r.a.createElement(
                          St,
                          null,
                          r.a.createElement(
                            O.a.Group,
                            null,
                            r.a.createElement(
                              O.a,
                              {
                                size: 'mini',
                                onClick: function () {
                                  h('Cases');
                                },
                                active: lt,
                              },
                              'Cases',
                            ),
                            r.a.createElement(
                              O.a,
                              {
                                size: 'mini',
                                onClick: function () {
                                  h('Deaths');
                                },
                                active: ct,
                              },
                              'Deaths',
                            ),
                          ),
                          r.a.createElement(
                            O.a.Group,
                            null,
                            r.a.createElement(
                              O.a,
                              {
                                size: 'mini',
                                onClick: function () {
                                  E('totals');
                                },
                                active: mt,
                              },
                              'to date:',
                            ),
                            r.a.createElement(
                              O.a,
                              {
                                size: 'mini',
                                onClick: function () {
                                  E('daily');
                                },
                                active: ft,
                              },
                              'on day:',
                            ),
                          ),
                          r.a.createElement('div', null, r.a.createElement(ot, null)),
                          r.a.createElement(
                            O.a.Group,
                            null,
                            r.a.createElement(
                              'span',
                              null,
                              r.a.createElement(
                                O.a,
                                {
                                  size: 'mini',
                                  onClick: function () {
                                    rt(-1);
                                  },
                                },
                                r.a.createElement(_.a, { name: 'step backward' }),
                              ),
                              r.a.createElement(
                                O.a,
                                {
                                  size: 'mini',
                                  onClick: function () {
                                    if (Y) P(!1);
                                    else {
                                      var e = Ce.dateList.findIndex(function (e) {
                                        return e.value === ve;
                                      });
                                      (B(e), ne(0.1), P(!0));
                                    }
                                  },
                                },
                                r.a.createElement(_.a, { name: 'play' }),
                              ),
                              r.a.createElement(
                                O.a,
                                {
                                  size: 'mini',
                                  onClick: function () {
                                    rt(1);
                                  },
                                },
                                r.a.createElement(_.a, { name: 'step forward' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
            yt('hideBot')
              ? null
              : r.a.createElement(
                  jt,
                  null,
                  r.a.createElement(zt, null),
                  'places' === oe && r.a.createElement(Lt, null),
                  'trends' === oe && r.a.createElement(Rt, null),
                  'focus' === oe && r.a.createElement(Ze, { actions: dt }),
                  'softbody' === oe && r.a.createElement(st, { pie_data: Ue[0] }),
                  'purpose' === oe && r.a.createElement(Je, null),
                ),
          );
        }),
        Ct = n(334),
        It = Object(i.b)(
          function (e) {
            return { admin: e.auth.admin, app: e.auth.app, gallery: e.gallery };
          },
          {
            submitFile: function (e, t) {
              return (function () {
                var n = Object(E.a)(
                  v.a.mark(function n(a, r) {
                    var o, i, l, c, s, u, d;
                    return v.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            ((o = A(r)),
                              console.log('submitFile files', e),
                              console.log('submitFile values', t),
                              (i = new FormData()),
                              (l = Object(C.a)(e)));
                            try {
                              for (l.s(); !(c = l.n()).done; ) ((s = c.value), i.append('photo', s));
                            } catch (m) {
                              l.e(m);
                            } finally {
                              l.f();
                            }
                            for (u in t) i.append(u, t[u]);
                            return (
                              (n.next = 9),
                              T.post('/upload?'.concat(o), i, { headers: { 'Content-Type': 'multipart/form-data' } })
                            );
                          case 9:
                            return (
                              (d = n.sent),
                              a({ type: 'SUBMIT_FILE', payload: d.data }),
                              n.abrupt('return', d.data)
                            );
                          case 12:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                return function (e, t) {
                  return n.apply(this, arguments);
                };
              })();
            },
            fetchGallery: function () {
              return (function () {
                var e = Object(E.a)(
                  v.a.mark(function e(t, n) {
                    var a, r;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((a = A(n)), (e.next = 3), T.get('/gallery?'.concat(a)));
                          case 3:
                            return (
                              (r = e.sent),
                              t({ type: 'FETCH_GALLERY', payload: r.data }),
                              console.log('gallery response.data', r.data),
                              e.abrupt('return', r.data)
                            );
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })();
            },
          },
        )(function (e) {
          var t = e.submitFile,
            n = e.fetchGallery,
            o = e.gallery,
            i = e.app,
            l = Object(a.useState)(!1),
            c = Object(y.a)(l, 2),
            s = c[0],
            u = c[1],
            d = Object(a.useState)(''),
            m = Object(y.a)(d, 2),
            f = m[0],
            p = m[1],
            h = Object(a.useState)(''),
            b = Object(y.a)(h, 2),
            g = b[0],
            w = b[1],
            S = Object(a.useState)(''),
            _ = Object(y.a)(S, 2),
            C = _[0],
            I = _[1],
            L = Object(a.useState)(),
            D = Object(y.a)(L, 2),
            F = D[0],
            T = D[1];
          (console.log('Gallery gallery', o),
            Object(a.useEffect)(
              function () {
                n();
              },
              [n, i],
            ),
            q(
              function () {
                I('');
              },
              C ? 3e3 : null,
            ));
          var A = (function () {
            var e = Object(E.a)(
              v.a.mark(function e(a) {
                var r, o, i;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          u(!0),
                          (r = document.querySelector('#fileInput1')),
                          console.log('handleForm fileInput', r),
                          (e.next = 5),
                          t(r.files, { title: f, description: g })
                        );
                      case 5:
                        return ((o = e.sent), console.log('handleForm resp', o), (e.next = 9), n());
                      case 9:
                        ((i = o.msg || 'Submit Contact Error'), I(i), u(!1));
                      case 12:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return r.a.createElement(
            k.a,
            { style: { marginTop: '3rem' } },
            r.a.createElement(
              x.a,
              null,
              r.a.createElement(
                x.a.Column,
                null,
                r.a.createElement(
                  'div',
                  null,
                  F &&
                    F.map(function (e) {
                      return r.a.createElement('img', {
                        src: URL.createObjectURL(e),
                        width: '200',
                        style: { display: 'inline' },
                        alt: '',
                        key: e.name,
                      });
                    }),
                ),
                r.a.createElement(
                  W.a,
                  { onSubmit: A },
                  r.a.createElement('input', {
                    type: 'file',
                    multiple: !0,
                    name: 'photo',
                    id: 'fileInput1',
                    onChange: function (e) {
                      var t = Object(Ct.a)(e.target.files);
                      T(t);
                    },
                  }),
                  r.a.createElement(
                    Y.a,
                    { stacked: !0, style: { backgroundColor: '#d5d6d2' } },
                    r.a.createElement(W.a.Input, {
                      fluid: !0,
                      label: 'title',
                      placeholder: 'Title...',
                      value: f,
                      onChange: function (e) {
                        return p(e.target.value);
                      },
                    }),
                    r.a.createElement(W.a.TextArea, {
                      label: 'description',
                      placeholder: 'Description...',
                      value: g,
                      onChange: function (e) {
                        return w(e.target.value);
                      },
                    }),
                    r.a.createElement(
                      j.a,
                      { visible: '' !== C, animation: 'scale', duration: 500 },
                      r.a.createElement(P.a, { success: !0, header: C, content: '' }),
                    ),
                    r.a.createElement(O.a, { primary: !0, loading: s }, 'Submit'),
                  ),
                ),
                r.a.createElement(
                  'div',
                  null,
                  o.items
                    .concat()
                    .reverse()
                    .map(function (e) {
                      return r.a.createElement(
                        'div',
                        { key: 'g_' + e.filename },
                        r.a.createElement('img', {
                          src: window.location.href + '/../uploads/' + i + '/images/' + e.filename,
                          width: '200',
                          style: { display: 'inline' },
                          alt: e.title,
                        }),
                        ' ' + e.description,
                        ' ',
                        r.a.createElement('br', null),
                        ' ' + e.title,
                      );
                    }),
                ),
              ),
            ),
          );
        }),
        Lt = n(159),
        Dt = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              k.a,
              { style: { marginTop: '3rem' } },
              r.a.createElement(w.a, { as: 'h1' }, 'Page Not Found'),
              r.a.createElement(
                'p',
                null,
                "The page you're looking for does not exist. Would you like to",
                ' ',
                r.a.createElement(Lt.a, { to: '/' }, 'return to the dashboard'),
                '?',
              ),
            ),
          );
        };
      function Ft() {
        var e = Object(B.a)(['\n  background-color: #d5d6d2;\n']);
        return (
          (Ft = function () {
            return e;
          }),
          e
        );
      }
      var Tt = ee.default.div(Ft()),
        At = Object(i.b)(
          function (e) {
            return {
              admin: e.auth.admin,
              isSignedIn: e.auth.isSignedIn,
              loginFailed: e.auth.loginFailed,
              lockout_message: e.auth.lockout_message,
            };
          },
          {
            signIn: function (e, t, n) {
              return (function () {
                var a = Object(E.a)(
                  v.a.mark(function a(r) {
                    var o, i, l;
                    return v.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              '',
                              (o = '/users?app='.concat('', '&email=').concat(e, '&password=').concat(t)),
                              (a.next = 4),
                              T.get(o)
                            );
                          case 4:
                            ((i = a.sent),
                              console.log('signIn loginFailed=' + n),
                              console.log('signIn response.data=' + JSON.stringify(i.data, null, 2)),
                              (l = {}),
                              i.data.length > 0
                                ? (((l = i.data[0]).isSignedIn = !0), (l.loginFailed = 0))
                                : ((l.isSignedIn = !1), (l.loginFailed = n + 1)),
                              r({ type: 'SIGN_IN', payload: l }));
                          case 10:
                          case 'end':
                            return a.stop();
                        }
                    }, a);
                  }),
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })();
            },
          },
        )(function (e) {
          var t = e.isSignedIn,
            n = e.loginFailed,
            o = e.lockout_message,
            i = e.admin,
            l = Object(a.useState)(''),
            c = Object(y.a)(l, 2),
            s = c[0],
            u = c[1],
            d = Object(a.useState)(''),
            m = Object(y.a)(d, 2),
            f = m[0],
            p = m[1],
            h = Object(a.useState)(!1),
            g = Object(y.a)(h, 2),
            v = g[0],
            E = g[1],
            k = o || '';
          (Object(a.useEffect)(
            function () {
              o && !i ? w(1) : t && b.push('/');
            },
            [t, o, i],
          ),
            Object(a.useEffect)(
              function () {
                n && w();
              },
              [n],
            ));
          var w = function (e) {
            (E(!0),
              e ||
                setTimeout(function () {
                  E(!1);
                }, 3e3));
          };
          return r.a.createElement(
            Tt,
            null,
            r.a.createElement(
              x.a,
              { textAlign: 'center', style: { height: '100vh' }, verticalAlign: 'middle' },
              r.a.createElement(
                x.a.Column,
                { style: { maxWidth: 450 } },
                r.a.createElement(
                  W.a,
                  {
                    size: 'large',
                    onSubmit: function (t) {
                      !(function (t) {
                        (t.preventDefault(), e.signIn(s, f, n));
                      })(t);
                    },
                  },
                  r.a.createElement(
                    Y.a,
                    { stacked: !0 },
                    r.a.createElement(W.a.Input, {
                      fluid: !0,
                      icon: 'user',
                      iconPosition: 'left',
                      placeholder: 'E-mail address',
                      value: s,
                      onChange: function (e) {
                        return u(e.target.value);
                      },
                    }),
                    r.a.createElement(W.a.Input, {
                      fluid: !0,
                      icon: 'lock',
                      iconPosition: 'left',
                      placeholder: 'Password',
                      type: 'password',
                      value: f,
                      onChange: function (e) {
                        return p(e.target.value);
                      },
                    }),
                    r.a.createElement(O.a, { primary: !0, fluid: !0, size: 'large' }, 'Sign in'),
                  ),
                  r.a.createElement(
                    j.a,
                    { visible: v, animation: 'scale', duration: 500 },
                    r.a.createElement(
                      S.a,
                      { color: 'red', size: 'massive' },
                      r.a.createElement(_.a, { name: 'thumbs down' }),
                      ' Login Failed ',
                      r.a.createElement('br', null),
                      k,
                    ),
                  ),
                ),
              ),
            ),
          );
        });
      function zt() {
        var e = Object(B.a)([
          "\n  @font-face {\n      /* font-family: 'noto_sansbold'; */\n      font-family: 'Noto Sans';\n      src: url('/fonts/notosans-bold-webfont.woff2') format('woff2'), url('/fonts/notosans-bold-webfont.woff') format('woff');\n      font-weight: bold;\n      font-style: normal;\n  }\n\n  @font-face {\n      /* font-family: 'noto_sansbold_italic'; */\n      font-family: 'Noto Sans';\n      src: url('/fonts/notosans-bolditalic-webfont.woff2') format('woff2'), url('/fonts/notosans-bolditalic-webfont.woff') format('woff');\n      font-weight: bold;\n      font-style: italic;\n  }\n\n  @font-face {\n      /* font-family: 'noto_sansregular'; */\n      font-family: 'Noto Sans';\n      src: url('/fonts/notosans-regular-webfont.woff2') format('woff2'), url('/fonts/notosans-regular-webfont.woff') format('woff');\n      font-weight: normal;\n      font-style: normal;\n  }\n\n  @font-face {\n      /* font-family: 'noto_sansitalic'; */\n      font-family: 'Noto Sans';\n      src: url('/fonts/notosans-regularitalic-webfont.woff2') format('woff2'), url('/fonts/notosans-regularitalic-webfont.woff') format('woff');\n      font-weight: normal;\n      font-style: italic;\n  }\n\n  *, ::before, ::after { box-sizing: border-box; }\n\n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.001s !important;\n      transition-duration: 0.001s !important;\n      animation-iteration-count: 1 !important;\n    }\n  }\n\n  :root {\n    /* https://dribbble.com/shots/9193028-DahePico-branding */\n    --color-black: hsla(245, 49%, 9%, 1.000);\n    --color-blue-bright: hsla(192, 100%, 43%, 1.000);\n    --color-blue: hsla(203, 91%, 29%, 1.000);\n    --color-gray: hsla(109, 0%, 90%, 1.000);\n    --color-green: hsla(140, 100%, 35%, 1.000);\n    --color-orange: hsla(30, 100%, 57%, 1.000);\n    --color-pink: hsla(337, 100%, 68%, 1.000);\n    --color-purple-light: hsla(265, 26%, 30%, 1.000);\n    --color-purple: hsla(270, 29%, 22%, 1.000);\n    --color-red: hsla(357, 100%, 68%, 1.000);\n    --color-white: hsla(104, 100%, 100%, 1.000);\n    --color-yellow: hsla(48, 97%, 52%, 1.000);\n\n    /*\n    --color-background: var(--color-black);\n    --color-foreground: var(--color-white);\n    */\n    --color-background: var(--color-white);\n    --color-foreground: var(--color-black);\n    --color-contrast: rgba(240, 240, 240, 1.000);\n    --color-thumb: rgba(150, 150, 150, 1.000);\n\n    line-sizing: normal;\n    overflow-x: hidden;\n    text-spacing: trim-start allow-end trim-adjacent ideograph-alpha ideograph-numeric;\n    touch-action: manipulation;\n    -webkit-text-size-adjust: 100%;\n\n    @supports (font-kerning: normal) and (font-varient-ligatures: common-ligatures contextual) and (font-variant-numeric: oldstyle-nums proportional-nums) {\n      font-feature-settings: normal;\n      font-kerning: normal;\n      font-variant-ligatures: common-ligatures contextual;\n      font-variant-numeric: oldstyl-nums proportional-nums;\n    }\n\n    /* @media screen and (min-width: 80em) {\n      font-size: 150%;\n    } */\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: normal;\n    margin: 0;\n  }\n\n  .fonts-loaded {\n    body {\n      font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    line-height: 1;\n  }\n\n  p, ul, ol, dl, address {\n    line-height: 1.5;\n  }\n\n  pre {\n    white-space: pre-wrap;\n  }\n\n  nav ul {\n    list-style: none;\n  }\n\n  img, video, canvas, audio, iframe, embed, object  {\n    display: block;\n    vertical-align: middle;\n  }\n\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  abbr {\n    font-feature-settings: 'kern', 'liga', 'clig', 'calt', 'c2sc', 'smcp';\n\n    @supports (font-variant-caps: all-small-caps) {\n      font-feature-settings: normal;\n      font-variant-caps: all-small-caps;\n    }\n  }\n\n  [hidden] { display: none !important; }\n\n  .visually-hidden {\n    clip: rect(1px, 1px, 1px 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    visibility: hidden;\n    width: 1px;\n  }\n\n  .no-break { hyphens: none; }\n  .numbers { letter-spacing: .01em; }\n\n  .ui.search.dropdown { min-width: auto; }\n\n\n  .VictoryContainer {\n    user-select: auto !important;\n    pointer-events: auto !important;\n    touch-action: auto !important;\n    }    \n",
        ]);
        return (
          (zt = function () {
            return e;
          }),
          e
        );
      }
      var Rt = Object(ee.createGlobalStyle)(zt()),
        Nt = n(331),
        Vt = Object(i.b)(
          function (e) {
            return {
              admin: e.auth.admin,
              app: e.auth.app,
              email: e.auth.email,
              isSignedIn: e.auth.isSignedIn,
              admin_lockout_message: e.auth.admin_lockout_message,
              trends: e.trends.trends,
            };
          },
          {
            setApp: function (e) {
              return (function () {
                var t = Object(E.a)(
                  v.a.mark(function t(n) {
                    var a;
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (((a = {}).app = e), n({ type: 'SIGN_IN', payload: a }));
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
            signOut: function () {
              return function (e) {
                (e({ type: 'SIGN_OUT' }), e({ type: 'CLEAR_STATS' }), e({ type: 'CLEAR_GALLERY' }));
              };
            },
            setTrends: function (e) {
              return (function () {
                var t = Object(E.a)(
                  v.a.mark(function t(n) {
                    var a;
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (((a = {}).trends = e), n({ type: 'SET_TRENDS', payload: a }));
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
          },
        )(function (e) {
          var t = e.admin,
            n = e.app,
            a = e.isSignedIn,
            o = e.admin_lockout_message,
            i = e.setApp,
            l = e.signOut,
            c = e.email,
            s = function () {
              b.push('/admin');
            },
            u = function () {
              (console.log('handleSignOut'), l(), b.push('/signin'));
            },
            d = function () {
              (console.log('handleSignIn'), b.push('/signin'));
            },
            m = function () {
              return (
                console.log('admin:', t),
                t
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement($.a.Item, { name: 'admin', onClick: s }),
                      o ? r.a.createElement($.a.Item, null, r.a.createElement(_.a, { name: 'lock' })) : '',
                    )
                  : null
              );
            },
            f = function () {
              return a
                ? r.a.createElement(r.a.Fragment, null, r.a.createElement($.a.Item, { name: 'Sign Out', onClick: u }))
                : r.a.createElement(r.a.Fragment, null, r.a.createElement($.a.Item, { name: 'Sign In', onClick: d }));
            },
            p = function () {
              return r.a.createElement('span', null, r.a.createElement('small', null, '(', Nt.a, ')'));
            },
            h = function () {
              var e = ['a0', 'a1', 'a2'].map(function (e) {
                var t = 'covid19/' + e;
                return { key: t, value: t, text: t };
              });
              return t
                ? r.a.createElement(
                    $.a.Item,
                    null,
                    r.a.createElement(Q.a, {
                      onChange: function (e, t) {
                        i(t.value);
                      },
                      options: e,
                      value: n,
                    }),
                  )
                : null;
            };
          return yt('nav')
            ? r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  $.a,
                  { inverted: !0, style: { borderRadius: '0', marginTop: '0' } },
                  r.a.createElement(
                    $.a.Item,
                    {
                      name: 'dash',
                      onClick: function () {
                        b.push('/');
                      },
                    },
                    'COVID-19 Dashboard \xa0',
                    r.a.createElement(p, null),
                  ),
                  '',
                  a && r.a.createElement(m, null),
                  r.a.createElement(
                    $.a.Menu,
                    { position: 'right' },
                    r.a.createElement(h, null),
                    c && r.a.createElement($.a.Item, null, c),
                    r.a.createElement(f, null),
                  ),
                ),
              )
            : null;
        }),
        Wt = Object(f.f)(function (e) {
          var t = e.children,
            n = e.location.pathname;
          return (
            Object(a.useEffect)(
              function () {
                window.scrollTo(0, 0);
              },
              [n],
            ),
            t || null
          );
        }),
        Yt = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(p.Normalize, null),
            r.a.createElement(Rt, null),
            r.a.createElement(
              f.b,
              { history: b, basename: '/covid19-dashboard' },
              r.a.createElement(
                Wt,
                null,
                r.a.createElement(Vt, null),
                r.a.createElement(
                  f.c,
                  null,
                  r.a.createElement(f.a, { path: '/signin', exact: !0, component: At }),
                  r.a.createElement(f.a, { path: '/gallery', exact: !0, component: It }),
                  r.a.createElement(f.a, { path: '/contact', exact: !0, component: M }),
                  r.a.createElement(f.a, { path: '/admin', exact: !0, component: V }),
                  r.a.createElement(f.a, { path: '/', exact: !0, component: _t }),
                  r.a.createElement(f.a, { component: Dt }),
                ),
              ),
            ),
          );
        },
        Pt = function () {
          return r.a.createElement(Yt, null);
        },
        Xt = {
          admin: !1,
          app: null,
          email: null,
          password: null,
          utoken: null,
          isSignedIn: !1,
          loginFailed: 0,
          admin_lockout_message: '',
        },
        Ut = Object(l.c)({
          auth: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'SIGN_IN':
                return Object(H.a)(Object(H.a)({}, e), t.payload);
              case 'SIGN_OUT':
                return Xt;
              case 'LOCKOUT_MESSAGE':
                return Object(H.a)(Object(H.a)({}, e), {}, { admin_lockout_message: t.payload });
              default:
                return e;
            }
          },
          stats: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { items: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'FETCH_STATS':
                return Object(H.a)(Object(H.a)({}, e), {}, { items: t.payload });
              case 'CLEAR_STATS':
                return { items: [] };
              default:
                return e;
            }
          },
          gallery: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { items: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'FETCH_GALLERY':
                return Object(H.a)(Object(H.a)({}, e), {}, { items: t.payload });
              case 'CLEAR_GALLERY':
                return { items: [] };
              default:
                return e;
            }
          },
          trends: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'SET_TRENDS':
                return Object(H.a)(Object(H.a)({}, e), t.payload);
              default:
                return e;
            }
          },
        }),
        qt = { key: 'covid19', storage: m.a },
        Gt = Object(u.a)(qt, Ut),
        Mt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || l.d,
        Bt = Object(l.e)(Gt, Mt(Object(l.a)(c.a))),
        Ht = Object(u.b)(Bt);
      Object(o.render)(
        r.a.createElement(
          i.a,
          { store: Bt },
          r.a.createElement(s.PersistGate, { persistor: Ht }, r.a.createElement(Pt, null)),
        ),
        document.getElementById('root'),
      );
    },
  },
  [[350, 1, 2]],
]);
//# sourceMappingURL=main.5aec810d.chunk.js.map
