/**
 * @type {import('splendid').Page}
 */
export const index = {
  title: 'NodeTools: Node.JS Stack',
  seo: 'NodeTools is a small Node.JS development stack meant to help create packages, document, compile and test them in the most developer-friendly way.',
  og: {
    image: '/img/fav.png',
  },
  // links: {
  //   gutenberg: 'https://www.gutenberg.org/files/84/84-h/84-h.htm',
  // },
}

/**
 * @type {import('splendid').Page}
 */
export const quickStart = {
  title: 'Quick Start To NodeTools',
  file: 'quick-start',
  seo: 'How to start using NodeTools stack for productive, effective and developer-friendly Node.JS development process with Closure Compiler & without TypeScript.',
  og: {
    image: '/img/fav.png',
  },
  links: {
    'node-externs': 'https://github.com/externs/nodejs',
    // dropcss: 'https://github.com/leeoniya/dropcss',
  },
}

/**
 * @type {import('splendid').Page}
 */
export const trapcss = {
  title: 'TrapCSS: NodeTools Tutorial',
  seo: 'A use case of applying NodeTools stack to upgrade an existing Node.JS package called DropCSS into a library and binary compiled with Closure Compiler.',
  og: {
    image: '../pages/trapcss/img/splash.jpg',
  },
  links: {
    dropcss: 'https://github.com/leeoniya/dropcss',
    lighthouse: 'https://developers.google.com/web/tools/lighthouse/audits/unused-css',
    'methods': 'https://github.com/artdecocode/documentary/wiki/Custom-Methods',
    'closure-types': 'https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System',
    'implements-example': 'https://github.com/idiocc/goa/blob/4b4534c304870ace80a42245ac0303f85b6eb6d3/src/application.js#L18',
    attributes: 'https://github.com/kumarikandam/trapcss/tree/master/test/result/0-context-free-unary-sel/attr',
  },
}

/**
 * @type {import('splendid').Page}
 */
export const trapcss2 = {
  title: 'TrapCSS 2: Advanced NodeTools',
  seo: 'A continuation of NodeTools tutorial that describes how to create Node.JS binary, compile it and libarary with Closure Copmiler and generate Wiki pages.',
  og: {
    image: '../pages/trapcss/img/splash.jpg',
  },
  links: {

  },
}

/**
 * @type {import('splendid').Page}
 */
export const babel = {
  title: 'Babel: When Open Source Is Not Free Sofware',
  description: 'There is a difference between free and open source software which must be understood. Babel, praising itself on being open source, actually harms users\' freedoms and delivers them right into the hands of the vendor predator — TypeScript.',
  seo: 'Babel has been ruining JSDoc documentation of Node.JS packages for years, while its maintainers pay themselves $10k per month for not fixing bugs.',
  og: {
    image: '/img/fav.png',
  },
  links: {
    history: 'https://gist.github.com/jkrems/769a8cd8806f7f57903b641c74b5f08a',
    journey: 'https://drewdevault.com/2019/06/13/My-journey-from-MIT-to-GPL.html',
    privacy: 'https://en.wikipedia.org/wiki/Article_8_of_the_European_Convention_on_Human_Rights',
    'data-protection': 'https://gdpr-info.eu/recitals/no-1/',
    hive: 'https://www.gutenberg.org/files/52319/52319-h/52319-h.htm',
    signature: 'https://art-deco.github.io/open-source/',
    alamode: 'https://www.npmjs.com/package/alamode',
    'r-u-ok': 'https://github.com/babel/babel/issues/8432',
    'incorrect-placement': 'https://github.com/babel/babel/issues/8437',
  },
}

/**
 * @type {import('splendid').Page}
 */
export const discussion = {
  title: 'Discussion for NodeTools',
  seo: 'Leave comments and ask and answer questions about the NodeTools development stack here to receive answers quickly and help grow the knowledge base.',
  // og: {
  //   image: '/img/fav.png',
  // },
}

/**
 * A subdirectory with more pages should be exported as a
 * string constant.
 */
// export const help = '~/help'