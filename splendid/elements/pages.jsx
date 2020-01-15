/**
 * @param {Object} props
 * @param {Splendid} props.splendid
 */
export default function Pages({ splendid }) {
  const { pages, page: { key } } = splendid
  // navigation within the dir using ajax
  const menuPages = pages.filter(({ dir }) => {
    if (!dir) return true
  })
  const ajax = (<ul className="AjaxNav">
    {menuPages.map(({
      title, menu = title, url, menuUrl = url, file, key: k,
    }) => {
      const active = k == key
      return (<li className={active ? 'Active' : ''}>
        <a data-file={file} href={menuUrl}>{menu}</a>
      </li>)
    }
    )}
  </ul>)
  // navigation between dirs
  const dirPages = pages.filter(({ dir, index }) => {
    return dir && index
  })
  const dir = (<ul>
    {dirPages.map(({
      title, menu = title, url, menuUrl = url,
    }) => {
      return (<li>
        <a href={splendid.wrapSlash(menuUrl)}>{menu}</a>
      </li>)
    }
    )}
  </ul>)
  return [
    ajax,
    dir,
  ]
}

export const init = () => {
  /* eslint-env browser */
  const hm = document.getElementById('HideMenu')
  const sm = document.getElementById('ShowMenu')
  if (hm) {
    hm.onclick = (e) => {
      const target = /** @type {!Element} */ (e.target)
      target.parentElement.classList.remove('sidebarshowing')
      return false
    }
  }
  if (sm) {
    sm.onclick = (e) => {
      const target = /** @type {!Element} */ (e.target)
      target.parentElement.classList.add('sidebarshowing')
      return false
    }
  }
}

/**
 * @typedef {import('splendid')} Splendid
 */