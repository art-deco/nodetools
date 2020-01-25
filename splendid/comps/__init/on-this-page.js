export default () => {
  /* eslint-env browser */
  const ents = [...document.querySelectorAll('div[data-section]')]

  if (ents.length) {
    /** @type {Element} */
    let active = null
    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          const section = target.id

          if (active && active.getAttribute('heading') != section) {
            active.classList.remove('Active')
          }
          active = document.querySelector(`[data-heading="${section}"]`)
          if (active) active.classList.add('Active')
        }
      })
    }, {  }) // rootMargin: `${-window.innerHeight + 1}px`

    ents.forEach((el) => {
      io.observe(el)
    })
  }
}