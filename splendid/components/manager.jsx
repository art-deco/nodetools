export default class Manager {
  static get 'plain'() {
    return true
  }
  /**
   * @param {!HTMLFormElement} el
   */
  constructor(el) {
    this.form = el
  }
  render() {
    const sel = /** @type {HTMLSelectElement} */ (this.form.firstElementChild)
    let c
    sel.onchange = () => {
      const val = sel.value
      if (val == c) return
      c = val
      document.cookie = `manager=${val};path=/nodetools;max-age=${31536000}`
      if (window['set-manager']) window['set-manager'](val)
    }
    const initial = document.cookie.replace(/(?:(?:^|.*;\s*)manager\s*=\s*([^;]*).*$)|^.*$/, '$1')
    if (initial) sel.value = initial
    sel.onchange()
  }
  serverRender({ splendid, ...props }) {
    splendid.export({})
    return (<form {...props}>
      <select value="npm">
        <option value="yarn">yarn</option>
        <option value="npm">npm</option>
      </select>
    </form>)
  }
}

export const init = () => {
  let c
  window['set-manager'] = (man) => {
    if (c) document.documentElement.classList.remove(c)
    document.documentElement.classList.add(man)
    c = man
  }
  // const current = document.cookie.replace(/(?:(?:^|.*;\s*)manager\s*=\s*([^;]*).*$)|^.*$/, '$1')
  // window['set-manager'](current || 'yarn')
}