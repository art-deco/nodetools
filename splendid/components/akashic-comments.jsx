import { Component } from 'preact'
import { loadStyle } from '@lemuria/load-scripts'

export default class Comments extends Component {
  static 'load'(cb) {
    loadStyle('https://static.akashic.page/comments.css', cb)
  }
  render({ 'api-key': apiKey, host }) {
    const s = document.createElement('script')
    s.src = 'https://static.akashic.page/akashic.js'
    s.onload = () => {
      document.getElementById('comments-div').innerText = ''
      window['Akashic']['comments']({
        'host': host,
        'api_key': apiKey,
        'scope': '/nodetools/',
        'container': 'comments-div',
      })
    }
    document.body.appendChild(s)
    return (<div id="comments-div"/>)
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
    return (<div id="comments-div">Loading comments...</div>)
  }
}

/**
 * @typedef {import('splendid')} Splendid
 */