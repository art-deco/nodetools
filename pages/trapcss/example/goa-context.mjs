import Cookies from '@contexts/http/cookies'
import { Duplex, Readable, Writable } from 'stream'
import Koa from '../../src'

export default class Context extends Cookies {
  /**
   * A mock context.
   * @param {http.IncomingMessage} [req]
   * @param {http.ServerResponse} [res]
   * @param {Koa} [app]
   */
  makeContext(req, res, app = new Koa()) {
    const socket = new Duplex()
    req = Object.assign({ headers: {}, socket }, Readable.prototype, req)
    res = Object.assign({ socket }, Writable.prototype, res)
    const _headers = {}
    req.socket.remoteAddress = req.socket.remoteAddress || '127.0.0.1'
    res.getHeader = k => _headers[k.toLowerCase()]
    res.getHeaders = () => _headers
    res.setHeader = (k, v) => _headers[k.toLowerCase()] = v
    res.removeHeader = (k) => delete _headers[k.toLowerCase()]
    return app.createContext(req, res)
  }
  /**
   * Returns an instance of a mock context.
   */
  get ctx() {
    return this.makeContext()
  }
  /**
   * Escapes HTML entities for &, ", < and >.
   * @param {string} html
   */
  escape(html){
    return `${html}`
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }
  /**
   * Pause runtime.
   * @param {number} time
   */
  sleep(time){
    return new Promise(resolve => setTimeout(resolve, time))
  }
}