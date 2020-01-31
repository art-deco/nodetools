export default () => {
  /* eslint-env browser */
  window['update-manager'] = function(manager) {
    const els = [...document.querySelectorAll('[data-manager]')]
    els.forEach((el) => {
      el.update(manager)
    })
  }
}