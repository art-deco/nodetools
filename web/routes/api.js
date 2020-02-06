export default function API (ctx) {
  /** @type {_nodetools.User} */
  const user = {
    login: 'test',
    name: 'user',
  }
  // if error: ctx.body = { error }
  ctx.body = { user }
}

/**
 * @typedef {import('../types').User} _nodetools.User
 */