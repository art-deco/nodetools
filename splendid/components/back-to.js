/* eslint-env browser */
export default class BackTo {
  static get 'plain'() { return true }
  constructor(el) {
    this.el = el
    this.name = null
  }
  unrender() {
    const w = window['back-to']
    if (w && w.name == this.name) {
      window['back-to'] = null
      this.el.style.opacity = 0
    }
  }
  render({ name }) {
    const w = window['back-to']

    if (w && w.name == name) {
      this.el.style.opacity = 1
    } else return

    this.name = name
    const a = this.el.querySelector('a')
    a.onclick = () => {
      const backTo = window['back-to']
      if (backTo && backTo.name == this.name) {
        const { 'y': top } = backTo
        window.scrollTo({
          top,
          behavior: 'smooth',
        })
      }
      return false
    }
  }
}