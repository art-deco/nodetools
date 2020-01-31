export default () => {
  let c
  window['set-manager'] = (man) => {
    if (c) document.documentElement.classList.remove(c)
    document.documentElement.classList.add(man)
    c = man
  }
  // const current = document.cookie.replace(/(?:(?:^|.*;\s*)manager\s*=\s*([^;]*).*$)|^.*$/, '$1')
  // window['set-manager'](current || 'yarn')
}