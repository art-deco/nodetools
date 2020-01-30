export default class Yarn {
  static 'plain'() {
    return true
  }
  constructor(el) {
    this.el = el
  }
  render({ ...props }) {
    // read cookies for the manager choice
  }
  /**
   * @param {Object} p
   * @param {Splendid} p.splendid
   */
  serverRender({ splendid, log, debug, logError, setChildContext, children, ...props }) {
    splendid.export(props)
    splendid.css('styles/yarn.css', '.Manager')
    let [child] = children
    child = child.trim()
    const p = Object.keys(props)
    if (child) p.push(child)
    return (<span className="Manager">yarn {p.join(' ')}</span>)
  }
}

/**
 * @typedef {import('splendid')} Splendid
 */