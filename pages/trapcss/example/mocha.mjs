const dropcss = require('../../src/dropcss.js')
const assert = require('assert')

describe('Context-free, unary selector', () => {
  let html, css

  describe('*', () => {
    it('should retain present', function() {
      let { css: out } = dropcss({
        html:	'<div></div>',
        css:	'* {a:b;}',
      })
      assert.equal(out, '*{a:b;}')
    })
  })

  describe('<tag>', () => {
    it('should retain present', function() {
      let { css: out } = dropcss({
        html:	'<div></div>',
        css:	'div {a:b;}',
      })
      assert.equal(out, 'div{a:b;}')
    })

    it('should drop absent', function() {
      let { css: out } = dropcss({
        html:	'<div></div>',
        css:	'span {a:b;}',
      })
      assert.equal(out, '')
    })
  })

  describe('#id', () => {
    it('should retain present', function() {
      let { css: out } = dropcss({
        html:	'<div id="a"></div>',
        css:	'#a {a:b;}',
      })
      assert.equal(out, '#a{a:b;}')
    })

    it('should drop absent', function() {
      let { css: out } = dropcss({
        html:	'<div id="a"></div>',
        css:	'#b {a:b;}',
      })
      assert.equal(out, '')
    })
  })
})