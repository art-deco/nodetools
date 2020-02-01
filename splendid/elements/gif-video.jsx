import { relative, dirname, join } from 'path'

/**
 * @type {import('splendid').Element}
 */
export default function GifVideo({ splendid, src, ...props }) {
  src = splendid.resolveRelative(src)
  splendid.addFileSync(src)
  const p = relative(
    dirname(splendid.getDocPath(splendid.page.menuUrl)),
    splendid.getDocPath(splendid.config.mount, join('/', src))
  )
  return (<video {...props} loop autoPlay muted playsinline src={p}/>)
}