import { j as t, c as n } from './index-DZ4UuaLG.js'
function i({ children: s, expires: e, expired: r, issued: o, title: c }) {
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx('h3', { className: 'text-lg font-semibold text-foreground', children: c }),
      t.jsxs('p', {
        className: 'text-muted-foreground',
        children: ['Issued ', o, (e && ` | Expires ${e}`) || (r && ` | Expired ${r}`)],
      }),
      t.jsx('div', { className: 'mt-2 text-muted-foreground', children: s }),
    ],
  })
}
function m({ children: s, title: e }) {
  return t.jsxs('section', {
    className: n('mb-3 md:mb-5 lg:mb-7'),
    children: [t.jsx('h2', { className: n('text-3xl font-bold tracking-tighter text-foreground'), children: e }), s],
  })
}
export { i as C, m as S }
