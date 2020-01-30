import { relative, dirname, join } from 'path'

/**
 * @type {import('splendid').Element}
 */
export default function Mask ({ splendid, file }) {
  // splendid.css('styles/mask.css', '.Mask')
  const path = splendid.resolveRelative(file)
  splendid.addFileSync(path)
  const p = relative(
    dirname(splendid.getDocPath(splendid.page.menuUrl)),
    splendid.getDocPath(splendid.config.mount, join('/', path))
  ) // OK voodle
  splendid.export({ file: p })
  return [(<div data-loading style="position:relative;">
    <canvas style="max-width:100%;" className="Mask">
      Your browser doesn't support canvas.
    </canvas>
    <a style="display:block;" href="#">Lights on</a>
  </div>), <noscript>
    <splendid-img src={file} style="max-width:100%" alt="Mask Testing Problem Space Graph" />
  </noscript>]
}