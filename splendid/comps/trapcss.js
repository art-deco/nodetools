import __initManager from './__init/manager'
import __initOnThisPage from './__init/on-this-page'
import __initSidebar from './__init/sidebar'
import 'splendid/internal/js/smooth-scroll'
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
import BackTo from '../components/back-to.js'
import GithubBadge from '../components/github-badge.jsx'
import Highlightjs from 'splendid/build/components/highlightjs'
import Manager from '../components/manager.jsx'
import Mask from '../components/mask.jsx'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'akashic-emails': AkashicEmails,
  'akashic-updates': AkashicUpdates,
  'back-to': BackTo,
  'github-badge': GithubBadge,
  'highlightjs': Highlightjs,
  'manager': Manager,
  'mask': Mask,
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
  key: 'mask',
  id: 'ce1cb',
  props: {
    file: 'pages/trapcss/5-testing/img/regression.jpg',
  },
},
{
  key: 'highlightjs',
  id: 'c16f7,c16f71',
  props: {
    lang: 'xml',
  },
},
{
  key: 'social-buttons',
  id: 'c485b',
  props: {
    url: 'https://art-deco.github.io/nodetools/trapcss-nodetools-tutorial.html',
    meta: true,
    className: 'b-xq b-Hk',
  },
},
{
  key: 'akashic-updates',
  id: 'updates-div',
  props: {
    apiKey: 'akashic',
  },
},
{
  key: 'github-badge',
  id: 'c1dbc',
  props: {
    owner: 'artdecocode',
    name: 'trapcss',
  },
},
{
  key: 'highlightjs',
  id: 'c1953,c19531,c19532,c19533,c19534,c19535',
  props: {
    lang: 'markdown',
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
  id: 'ccdbf,ccdbf1,ccdbf10,ccdbf11,ccdbf12,ccdbf13,ccdbf14,ccdbf15,ccdbf16,ccdbf17,ccdbf18,ccdbf19,ccdbf2,ccdbf20,ccdbf21,ccdbf22,ccdbf23,ccdbf24,ccdbf25,ccdbf26,ccdbf27,ccdbf3,ccdbf4,ccdbf5,ccdbf6,ccdbf7,ccdbf8,ccdbf9',
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
  key: 'back-to',
  id: 'c5823',
  props: {
    name: 'spec',
  },
},
{
  key: 'highlightjs',
  id: 'c1d47',
  props: {
    lang: 'css',
  },
},
{
  key: 'manager',
  id: 'ca13e',
},
{
  key: 'highlightjs',
  id: 'c414d,c414d1,c414d2,c414d3,c414d4,c414d5,c414d6',
  props: {
    lang: 'bash',
  },
},
{
  key: 'highlightjs',
  id: 'cf541,cf5411,cf5412,cf5413,cf5414,cf5415,cf5416,cf5417,cf5418,cf5419',
  props: {
    lang: 'scss',
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
