/**
 * @type {import('splendid').Element}
 */
export default function yarn({ splendid, log, debug, logError, setChildContext, children, ...props }) {
  splendid.export(props)
  splendid.css('styles/yarn.css', null, {
    whitelist: ['NpmManager', 'YarnManager'],
  })
  let [child] = children
  child = child.trim()
  const p = Object.keys(props)
  if (child) p.push(child)
  return (<span className="YarnManager"><span data-manager>yarn</span> {p.join(' ')}</span>)
}

// export const init = () => {
//   /* eslint-env browser */

// }