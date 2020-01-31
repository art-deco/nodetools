/* eslint-env browser */
// console.log('main js')

window['update-manager'] = function(manager) {
  const els = [...document.querySelectorAll('[data-manager]')]
  els.forEach((el) => {
    if (el.update) el.update(manager)
  })
}