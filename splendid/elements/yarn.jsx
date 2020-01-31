/**
 * The span that shows the yarn/npm command. Yarn by default.
 * @type {import('splendid').Element}
 */
export default function yarn({ splendid, log, debug, logError, setChildContext, children, ...props }) {
  // splendid.export(props)
  splendid.css('styles/yarn.css', null, {
    whitelist: ['Manager', 'npm', 'yarn', 'npm--', 'npm-run', 'yarnManager',
      'npmManager', 'yarn-cmd', 'npm-cmd'],
  })
  splendid.addFileSync('img/yarn.svg')
  splendid.addFileSync('img/box.svg')
  let [child] = children
  child = child.trim()
  const p = Object.keys(props)
  if (child) p.push(child)
  // const [arg, ...args] = p
  const arg = []
  const args = []
  p.forEach((a) => {
    if (!args.length && !a.startsWith('-')) arg.push(a)
    else args.push(a)
  })
  const hasArgs = Boolean(args.length)
  return (<span className="Manager">
    <span>
      <span className="yarn-cmd">yarn </span>
      <span className="npm-cmd">npm </span>
      {arg[0] && arg[0] != 'test' && <span className="npm-run">run </span>}
      <span dangerouslySetInnerHTML={{ __html: arg.join(' ') }}/>
      {hasArgs && ' '}
      {hasArgs && <span className="npm--">--</span>}
      {hasArgs && ' '}
      {hasArgs && <span dangerouslySetInnerHTML={{ __html: args.join(' ') }}/>}
    </span>
  </span>)
}

// export const init = () => {
//   /* eslint-env browser */

// }