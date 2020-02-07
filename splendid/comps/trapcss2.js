import __initManager from './__init/manager'
import __initOnThisPage from './__init/on-this-page'
import __initSidebar from './__init/sidebar'
import __renameMap0 from './__rename-maps/styles/yarn'
import __renameMap1 from './__rename-maps/styles/sidebar'
import __renameMap2 from './__rename-maps/styles/on-this-page'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/yarn.css': __renameMap0,
  'styles/sidebar.css': __renameMap1,
  'styles/on-this-page.css': __renameMap2 }
__initManager(),__initOnThisPage(),__initSidebar()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from './__competent-lib'
import AkashicEmails from '../components/akashic-emails.jsx'
import AkashicUpdates from '../components/akashic-updates.jsx'
import GithubBadge from '../components/github-badge.jsx'
import Highlightjs from 'splendid/build/components/highlightjs'
import Manager from '../components/manager.jsx'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
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
  key: 'social-buttons',
  id: 'ce0df',
  props: {
    url: 'https://art-deco.github.io/nodetools/trapcss-2-advanced-nodetools.html',
    meta: true,
    className: 'b-xq b-Hk',
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
  id: 'ccdbf,ccdbf1,ccdbf10,ccdbf2,ccdbf3,ccdbf4,ccdbf5,ccdbf6,ccdbf7,ccdbf8,ccdbf9',
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
  key: 'manager',
  id: 'ca13e',
},
{
  key: 'highlightjs',
  id: 'c414d,c414d1,c414d2',
  props: {
    lang: 'bash',
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
