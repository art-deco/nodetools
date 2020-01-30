import __initOnThisPage from './__init/on-this-page'
import __initSidebar from './__init/sidebar'
import __renameMap0 from './__rename-maps/styles/yarn'
import __renameMap1 from './__rename-maps/styles/sidebar'
import __renameMap2 from './__rename-maps/styles/on-this-page'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/yarn.css': __renameMap0,
  'styles/sidebar.css': __renameMap1,
  'styles/on-this-page.css': __renameMap2 }
__initOnThisPage(),__initSidebar()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from './__competent-lib'
import AkashicEmails from '../components/akashic-emails.jsx'
import AkashicUpdates from '../components/akashic-updates.jsx'
import GithubBadge from '../components/github-badge.jsx'
import Highlightjs from 'splendid/build/components/highlightjs'
import Mask from '../components/mask.jsx'
import SocialButtons from 'splendid/build/components/social-buttons'
import Yarn from '../components/yarn.jsx'

const __components = {
  'akashic-emails': AkashicEmails,
  'akashic-updates': AkashicUpdates,
  'github-badge': GithubBadge,
  'highlightjs': Highlightjs,
  'mask': Mask,
  'social-buttons': SocialButtons,
  'yarn': Yarn,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'yarn',
  id: 'c824f',
  props: {
    doc: true,
  },
},
{
  key: 'highlightjs',
  id: 'c724c,c724c1,c724c2',
  props: {
    lang: 'shell',
  },
},
{
  key: 'yarn',
  id: 'c6a16',
  props: {
    mask: true,
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
  key: 'github-badge',
  id: 'c1dbc',
  props: {
    owner: 'artdecocode',
    name: 'trapcss',
  },
},
{
  key: 'yarn',
  id: 'cbabb',
  props: {
    'bin-alias': true,
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
  key: 'akashic-updates',
  id: 'updates-div',
  props: {
    class: 'mb-3',
    'api-key': 'akashic',
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
  id: 'ccdbf,ccdbf1,ccdbf10,ccdbf11,ccdbf12,ccdbf13,ccdbf14,ccdbf15,ccdbf16,ccdbf17,ccdbf18,ccdbf19,ccdbf2,ccdbf3,ccdbf4,ccdbf5,ccdbf6,ccdbf7,ccdbf8,ccdbf9',
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
  key: 'yarn',
  id: 'c651c,c651c1,c651c2',
  props: {
    d: true,
  },
},
{
  key: 'yarn',
  id: 'cb985',
  props: {
    doc: true,
    '-p': true,
  },
  children: ["\"commit message\""],
},
{
  key: 'yarn',
  id: 'c1b02',
  children: ["[spec|mask|test]"],
},
{
  key: 'highlightjs',
  id: 'c1d47',
  props: {
    lang: 'css',
  },
},
{
  key: 'highlightjs',
  id: 'c414d,c414d1,c414d2,c414d3,c414d4,c414d5,c414d6',
  props: {
    lang: 'bash',
  },
},
{
  key: 'yarn',
  id: 'c093b',
  props: {
    alanode: true,
  },
  children: ["src/dropcss "],
},
{
  key: 'highlightjs',
  id: 'cf541,cf5411,cf5412,cf5413,cf5414,cf5415,cf5416,cf5417,cf5418,cf5419',
  props: {
    lang: 'scss',
  },
},
{
  key: 'highlightjs',
  id: 'cb288',
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
