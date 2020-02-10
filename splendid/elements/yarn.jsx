/**
 * The span that shows the yarn/npm command. Yarn by default.
 * @type {import('splendid').Element}
 */
export default function yarn({ splendid, log, debug, logError, setChildContext, children, ...props }) {
  splendid.pretty(false)
  // splendid.export(props)
  splendid.css('styles/yarn.css', null, {
    whitelist: ['Manager', 'npm', 'yarn', 'npm-run', 'yarnManager',
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
  const args = [] // arguments with -
  p.forEach((a) => {
    if (!args.length && !a.startsWith('-')) arg.push(a)
    else args.push(a)
  })
  const hasArgs = Boolean(args.length)
  const t = ['add', 'info', 'test', 'i', 'install', 'link']
  const [firstArg, ...Args] = arg

  if (!firstArg) return (<span className="Manager">
    {' '}<span>
      <span className="yarn-cmd">yarn</span>
      <span className="npm-cmd">npm</span>
    </span>
  </span>)

  let npmFirstArg = firstArg
  if (firstArg == 'add') npmFirstArg = 'i'

  return (<span className="Manager">
    {' '}<span>
      <span className="yarn-cmd">yarn </span>
      <span className="npm-cmd">npm </span>
      {!t.includes(npmFirstArg) && <span className="npm-run">run </span>}
      {firstArg != npmFirstArg && <span className="npm-cmd">{npmFirstArg}</span>}
      {firstArg != npmFirstArg && <span className="yarn-cmd">{firstArg}</span>}
      {firstArg == npmFirstArg && <span>{firstArg}</span>}
      {Boolean(Args.length) && ' '}
      {Boolean(Args.length) &&
        <span dangerouslySetInnerHTML={{ __html: Args.join(' ') }}/>}
      {hasArgs && ' '}
      {hasArgs && <span className="npm-cmd">--</span>}
      {hasArgs && ' '}
      {hasArgs && <span dangerouslySetInnerHTML={{ __html: args.join(' ') }}/>}
    </span>
  </span>)
}