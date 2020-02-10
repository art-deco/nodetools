import idio from '@idio/idio'
import CDP from 'chrome-remote-interface'
import { spawn } from 'child_process'
import rqt from 'rqt'
import trapcss from '../..'

(async () => {
  const { app, url } = await idio({
    static: {
      use: true,
      root: 'example/www',
    },
  })
  const chrome = await new Promise((r) => {
    const p = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      ['--remote-debugging-port=9222', '--headless'])
    p.stderr.on('data', (d) => {
      d = `${d}`
      if (/listening/.test(d)) setTimeout(() => r(p), 1000)
    })
  })
  try {
    const client = await CDP()
    const { Network, Page, Runtime } = client
    await Network.enable()
    await Page.enable()
    await Page.navigate({ url })
    await Page.loadEventFired()
    const { result: { value: html } } = await Runtime.evaluate({
      expression: 'document.documentElement.outerHTML',
    })
    const { result: { value: links } } = await Runtime.evaluate({
      expression: `[...document.querySelectorAll("link[rel=stylesheet]")]
        .map((el) => el.href)`,
      returnByValue: true,
    })
    await client.close()

    await Promise.all(links.map(async href => {
      const css = await rqt(href)
      let start = +new Date()

      const clean = trapcss({
        css,
        html,
      })

      console.log({
        stylesheet: href,
        cleanCss: clean.css,
        elapsed: +new Date() - start,
      })
    }))
  } catch (err) {
    console.log(err)
  } finally {
    await app.destroy()
    chrome.kill()
  }
})()
