// import { Component } from 'preact'
import { loadStyle } from '@lemuria/load-scripts'

export default class AkashicUpdates {
  static get 'plain'() {
    return true
  }
  /**
   * @param {!HTMLDivElement} el
   */
  constructor(el) {
    this.el = el
  }
  static 'load'(cb) {
    loadStyle('https://static.akashic.page/comments.css', cb)
  }
  render({ apiKey, host }) {
    if (!AkashicUpdates.supports()) {
      this.el.innerText = 'Your browser doesn\'t support web-push.'
      return
    }
    const s = document.createElement('script')
    s.src = 'https://static.akashic.page/akashic.js'
    s.onload = () => {
      this.el.innerText = ''
      window['Akashic']['updates']({
        'host': host,
        'container': 'updates-div',
        'scope': '/nodetools/',
        'api_key': apiKey,
      })
    }
    document.body.appendChild(s)
  }
  static supports() {
    if (!('serviceWorker' in navigator)) {
      return false
    }
    if (!('PushManager' in window)) {
      return false
    }
    return true
  }
  /**
   *
   * @param {Object} param0
   * @param {Splendid} param0.splendid
   */
  async serverRender({ splendid, 'api-key': apiKey, host, ...props }) {
    splendid.export({ apiKey, host })
    if (splendid.env != 'prod') {
      splendid.script('node_modules://preact/dist/preact.min.js', false)
      await splendid.addFile('node_modules://preact/dist/preact.min.js.map')
    }
    await splendid.addFile('service-worker.js')
    return (<div {...props} id="updates-div">Loading web-push...</div>)
  }
}

/**
 * @typedef {import('splendid')} Splendid
 */