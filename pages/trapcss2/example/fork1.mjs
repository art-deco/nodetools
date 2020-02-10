import TempContext from 'temp-context'
import Context from '../context'
import makeTestSuite from '@zoroaster/mask'

export default makeTestSuite('test/result/bin/default', {
  context: TempContext,
  fork: {
    /**
     * @param {string[]} args
     * @param {TempContext} t
     */
    async getArgs(_, { write }) {
      const html = await write('index.html', this.input)
      const [, css] = /<style>([\s\S]+?)<\/style>/.exec(this.css)
      const style = await write('style.css', css)
      return [html, '-c', style]
    },
    module: Context.BIN,
    preprocess: {
      stdout: Context.wrap,
    },
  },
})