import Stream, { Transform } from 'stream'
import { join } from 'path'

/**
 * Create a new instance of the class
 */
export default class Babel extends Stream {
  /**
   * Transpiles the source code.
   * @param {string} path Path to the source code to transpile.
   */
  constructor(path) {
    super()
    this.path = join('example', path)
    const stream = new Stream()
    stream.pipe(new Transform())
  }
}

/**
 * Returns whether the version is stable.
 * @param {number} version The version to check.
 */
export const stable = (version) => {
  return version <= 7
}

/**
 * Transpile the source code.
 * @param {string} hello The code to transpile.
 */
export const transpile = (hello) => {
  return hello + 'world'
}

/**
 * Software for free that breaks JSDoc.
 * @param {number} downloads How many downloads.
 */
export const shmable = (downloads) => {
  return downloads - 1000000
}