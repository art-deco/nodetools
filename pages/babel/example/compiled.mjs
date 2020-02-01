"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shmable = exports.transpile = exports.stable = exports.default = void 0;

var _stream = _interopRequireWildcard(require("stream"));

var _path = require("path");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Create a new instance of the class
 */
class Babel extends _stream.default {
  /**
   * Transpiles the source code.
   * @param {string} path Path to the source code to transpile.
   */
  constructor(path) {
    super();
    this.path = (0, _path.join)('example', path);
    const stream = new _stream.default();
    stream.pipe(new _stream.Transform());
  }

}
/**
 * Returns whether the version is stable.
 * @param {number} version The version to check.
 */


exports.default = Babel;

const stable = version => {
  return version <= 7;
};
/**
 * Transpile the source code.
 * @param {string} hello The code to transpile.
 */


exports.stable = stable;

const transpile = hello => {
  return hello + 'world';
};
/**
 * Software for free that breaks JSDoc.
 * @param {number} downloads How many downloads.
 */


exports.transpile = transpile;

const shmable = downloads => {
  return downloads - 1000000;
};

exports.shmable = shmable;