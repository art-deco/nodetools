/**
 * @type {import('splendid').Page}
 */
export const index = {
  title: 'NodeTools',
  seo: 'NodeTools is a small Node.JS development stack meant to help create packages, document, compile and test them in the most developer-friendly way.',
  og: {
    image: '/img/logo.jpg',
  },
  // links: {
  //   gutenberg: 'https://www.gutenberg.org/files/84/84-h/84-h.htm',
  // },
}

/**
 * @type {import('splendid').Page}
 */
export const dropcss = {
  title: 'Tutorial: TrapCSS',
  seo: 'A use case of using NodeTools stack to upgrade an existing Node.JS package called DropCSS into a library and binary compiled with Closure Compiler.',
  og: {
    image: '/img/logo.jpg',
  },
  links: {
    dropcss: 'https://github.com/leeoniya/dropcss',
  },
}

/**
 * A subdirectory with more pages should be exported as a
 * string constant.
 */
// export const help = '~/help'