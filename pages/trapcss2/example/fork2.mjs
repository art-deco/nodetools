import TempContext from 'temp-context'
import Context from '../context'
import makeTestSuite from '@zoroaster/mask'

export const output = makeTestSuite('test/result/bin/output', {
  context: TempContext,
  fork: {
    /**
     * @param {string[]} args
     * @param {TempContext} t
     */
    async getArgs(args, { resolve }) {
      return [...args, '-o', resolve('style-trap.css')]
    },
    module: Context.BIN,
  },
  /**
   * @param {TempContext} t
   */
  async getResults({ read }) {
    const s = await read('style-trap.css')
    return Context.wrap(s)
  },
})
