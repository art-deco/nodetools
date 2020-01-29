/**
 * @type {import('splendid').Element}
 */
export default function OnThisPage({ splendid }) {
  splendid.polyfill('intersection-observer')
  const headings = splendid.headings
    .filter(({ level, title }) => {
      if (level < 2) return false
      // if (/On This Page/.test(title)) return false
      // if (/Share This/.test(title)) return false
      // if (/id="Stories"/.test(title)) return false
      return true
    })
  const hh = headings.map(({ title, id }) => {
    const a = <a href={`#${id}`} dangerouslySetInnerHTML={{ __html: title }} />
    return (<li data-heading={id} key={id}>{a}</li>)
  })
  return (<ul id="OnThisPage">{hh}</ul>)
}

export const init = () => {
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