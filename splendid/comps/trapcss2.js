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
  key: 'highlightjs',
  id: 'c724c,c724c1',
  props: {
    lang: 'shell',
  },
},
{
  key: 'highlightjs',
  id: 'c16f7,c16f71,c16f72',
  props: {
    lang: 'xml',
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
  id: 'c1953,c19531,c195310,c195311,c19532,c19533,c19534,c19535,c19536,c19537,c19538,c19539',
  props: {
    lang: 'markdown',
  },
},
{
  key: 'highlightjs',
  id: 'cb9de,cb9de1,cb9de2,cb9de3,cb9de4,cb9de5,cb9de6,cb9de7',
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
  id: 'ccdbf,ccdbf1,ccdbf10,ccdbf11,ccdbf12,ccdbf13,ccdbf14,ccdbf15,ccdbf16,ccdbf17,ccdbf18,ccdbf19,ccdbf2,ccdbf20,ccdbf21,ccdbf22,ccdbf23,ccdbf24,ccdbf25,ccdbf26,ccdbf27,ccdbf28,ccdbf29,ccdbf3,ccdbf30,ccdbf4,ccdbf5,ccdbf6,ccdbf7,ccdbf8,ccdbf9',
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
  key: 'social-buttons',
  id: 'cd192',
  props: {
    url: 'https://art-deco.github.io/nodetools/trapcss-2-advanced-nodetools.html',
    subject: 'TrapCSS 2: Advanced NodeTools',
    title: 'A continuation of NodeTools tutorial that describes how to create Node.JS binary, compile it and library with Closure Compiler and generate Wiki pages.',
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
  id: 'c414d,c414d1,c414d2,c414d3',
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
