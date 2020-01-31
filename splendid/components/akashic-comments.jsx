import { loadStyle } from '@lemuria/load-scripts'

export default class Comments {
  static get 'plain'() {
    return true
  }
  static 'load'(cb) {
    loadStyle('https://static.akashic.page/comments.css', cb)
  }
  constructor(el) {
    this.el = el
  }
  render({ 'api-key': apiKey, host }) {
    const s = document.createElement('script')
    s.src = 'https://static.akashic.page/akashic.js'
    s.onload = () => {
      this.el.innerText = ''
      window['Akashic']['comments']({
        'host': host,
        'api_key': apiKey,
        'scope': '/nodetools/',
        'container': this.el.id,
      })
    }
    document.body.appendChild(s)
  }
  /**
   *
   * @param {Object} param0
   * @param {Splendid} param0.splendid
   */
  async serverRender({ splendid }) {
    splendid.export()
    if (splendid.env != 'prod') {
      splendid.script('node_modules://preact/dist/preact.min.js', false)
      await splendid.addFile('node_modules://preact/dist/preact.min.js.map')
    }
    await splendid.addFile('service-worker.js')
    return (<div>Loading comments...</div>)
  }
}

/**
 * @typedef {import('splendid')} Splendid
 */