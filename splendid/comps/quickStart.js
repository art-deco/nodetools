import __initOnThisPage from './__init/on-this-page'
import __initSidebar from './__init/sidebar'
import __renameMap0 from './__rename-maps/styles/sidebar'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/sidebar.css': __renameMap0 }
__initOnThisPage(),__initSidebar()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from './__competent-lib'
import AkashicComments from '../components/akashic-comments.jsx'
import AkashicEmails from '../components/akashic-emails.jsx'
import AkashicUpdates from '../components/akashic-updates.jsx'
import GithubBadge from '../components/github-badge.jsx'
import Highlightjs from 'splendid/build/components/highlightjs'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'akashic-comments': AkashicComments,
  'akashic-emails': AkashicEmails,
  'akashic-updates': AkashicUpdates,
  'github-badge': GithubBadge,
  'highlightjs': Highlightjs,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'highlightjs',
  id: 'c724c,c724c1,c724c2',
  props: {
    lang: 'shell',
  },
},
{
  key: 'highlightjs',
  id: 'c16f7',
  props: {
    lang: 'xml',
  },
},
{
  key: 'social-buttons',
  id: 'ce295',
  props: {
    url: 'https://art-deco.github.io/nodetools/quick-start.html',
    meta: true,
    className: 'b-xq b-Hk',
  },
},
{
  key: 'akashic-updates',
  id: 'updates-div',
  props: {
    class: 'mb-3',
    'api-key': 'akashic',
  },
},
{
  key: 'highlightjs',
  id: 'cb9de',
  props: {
    lang: 'json',
  },
},
{
  key: 'github-badge',
  id: 'cacd9',
  props: {
    owner: 'art-deco',
    name: 'nodetools',
  },
},
{
  key: 'highlightjs',
  id: 'ccdbf,ccdbf1',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'akashic-emails',
  id: 'emails-div',
  props: {
    'api-key': 'akashic',
  },
},
{
  key: 'akashic-comments',
  id: 'comments-div',
  props: {
    'api-key': 'akashic',
  },
},
{
  key: 'highlightjs',
  id: 'cb288,cb2881',
  props: {
    lang: 'undefined',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const Comp = __components[key]
  const plain = Comp.plain || (/^\s*class\s+/.test(Comp.toString()) && !Component.isPrototypeOf(Comp))
  props.splendid = { mount: '/nodetools/', addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }

  const ids = id.split(',')
  ids.forEach((Id) => {
    const { parent, el } = init(Id, key)
    if (!el) return
    const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id: Id, plain })
    let comp
    el.render = () => {
      comp = start(renderMeta, Comp, comp, el, parent, props, children, { render, Component, h })
      return comp
    }
    el.render.meta = renderMeta
    io.observe(el)
  })
})