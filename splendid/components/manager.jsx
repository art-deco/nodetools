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
    sel.onchange = () => {
      const val = sel.value
      document.cookie = `manager=${val};path=/nodetools;max-age=${31536000}`
      change(val)
    }
    const change = (man) => {
      if (window['update-manager']) {
        window['update-manager'](man)
      }
    }
    const current = document.cookie.replace(/(?:(?:^|.*;\s*)manager\s*=\s*([^;]*).*$)|^.*$/, '$1')
    if (current) {
      sel.value = current
      change(current)
    }
  }
  serverRender({ splendid, ...props }) {
    splendid.export({})
    return (<form {...props}>
      <select value="yarn">
        <option value="yarn">yarn</option>
        <option value="npm">npm</option>
      </select>
    </form>)
  }
}