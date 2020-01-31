import __initBandcampBabylon from './__init/bandcamp-babylon'
import __initManager from './__init/manager'
import __initOnThisPage from './__init/on-this-page'
import __initSidebar from './__init/sidebar'
import __renameMap0 from './__rename-maps/styles/bandcamp'
import __renameMap1 from './__rename-maps/styles/sidebar'
import __renameMap2 from './__rename-maps/styles/on-this-page'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/bandcamp.css': __renameMap0,
  'styles/sidebar.css': __renameMap1,
  'styles/on-this-page.css': __renameMap2 }
__initBandcampBabylon(),__initManager(),__initOnThisPage(),__initSidebar()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from './__competent-lib'
import AkashicComments from '../components/akashic-comments.jsx'
import AkashicEmails from '../components/akashic-emails.jsx'
import AkashicUpdates from '../components/akashic-updates.jsx'
import GithubBadge from '../components/github-badge.jsx'
import Highlightjs from 'splendid/build/components/highlightjs'
import Manager from '../components/manager.jsx'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'akashic-comments': AkashicComments,
  'akashic-emails': AkashicEmails,
  'akashic-updates': AkashicUpdates,
  'github-badge': GithubBadge,
  'highlightjs': Highlightjs,
  'manager': Manager,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'akashic-updates',
  id: 'updates-div',
  props: {
    apiKey: 'akashic',
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
  id: 'ccdbf,ccdbf1,ccdbf10,ccdbf11,ccdbf12,ccdbf13,ccdbf2,ccdbf3,ccdbf4,ccdbf5,ccdbf6,ccdbf7,ccdbf8,ccdbf9',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'social-buttons',
  id: 'cef93',
  props: {
    url: 'https://art-deco.github.io/nodetools/babel-when-open-source-is-not-free-sofware.html',
    meta: true,
    className: 'b-xq b-Hk',
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
  id: 'c8b27',
  props: {
    'api-key': 'akashic',
  },
},
{
  key: 'manager',
  id: 'ca13e',
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
