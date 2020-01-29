import makeTestSuite from '@zoroaster/mask'
import trapcss from '../../src'

// todo: test [foo="val"], [foo='val'], :not([attr~=value])
const contextFreeUnarySel = makeTestSuite(
  'test/result/0-context-free-unary-sel', {
    getResults() {
      let html, css
      if (!this.preamble) {
        [html, ...css] = this.input.split('\n')
        css = css.join('\n')
      } else {
        html = this.preamble
        css = this.input
      }
      [,html] = /content: '(.+?)'/.exec(html)
      return trapcss({ html, css })
    },
    mapActual({ css }) {
      return css
    },
  })

export default {
  'Context-free, unary selector': contextFreeUnarySel,
}