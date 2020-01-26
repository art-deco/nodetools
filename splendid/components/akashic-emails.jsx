import { Component } from 'preact'
import { loadStyle } from '@lemuria/load-scripts'

export default class Emails extends Component {
  static 'load'(cb) {
    loadStyle('https://static.akashic.page/comments.css', cb)
  }
  render({ 'api-key': apiKey, host }) {
    const s = document.createElement('script')
    s.src = 'https://static.akashic.page/akashic.js'
    s.onload = () => {
      document.getElementById('emails-div').innerText = ''
      window['Akashic']['emails']({
        'host': host,
        'api_key': apiKey,
        'project': 'nodetools',
        'container': 'emails-div',
      })
    }
    document.body.appendChild(s)
    return (<div id="emails-div"/>)
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
    return (<div id="emails-div">Loading widget...</div>)
  }
}

/**
 * @typedef {import('splendid')} Splendid
 */