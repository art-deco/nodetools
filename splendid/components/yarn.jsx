export default class Yarn {
  static 'plain'() {
    return true
  }
  /**
   * @param {HTMLSpanElement} el
   */
  constructor(el) {
    this.span = el.firstElementChild
  }
  render() {
    this.span.update = (man) => {
      if (man == 'npm') {
        this.span.textContent = 'npm run'
        this.span.parentElement.classList.remove('YarnManager')
        this.span.parentElement.classList.add('NpmManager')
      } else if (man == 'yarn') {
        this.span.textContent = 'yarn'
        this.span.parentElement.classList.add('YarnManager')
        this.span.parentElement.classList.remove('NpmManager')
      }
    }
    const current = document.cookie.replace(/(?:(?:^|.*;\s*)manager\s*=\s*([^;]*).*$)|^.*$/, '$1')
    if (current) this.span.update(current)
  }
}

/**
 * @typedef {import('splendid')} Splendid
 */