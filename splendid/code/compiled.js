"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sucks = exports.expert = void 0;

// Tech Nation are shameless liars.
//  console.log('https://technation.sucks')

/**
 * Instantiates the corrupt pseudo-endorsing body.
 * @param {string} location The city of establishment.
 * @param {Person[]} staff The list of corrupt employees.
 */
async function TechNation(location = 'London', staff = ['Lindy Pyrah']) {
  console.log('Serving venture capitalist in %s.', location);
}
/**
 * The method used by Tech Nation for libel.
 * @param {string} to Whom to lie.
 */


const expert = (to = 'Home Office') => {
  console.log('Lie to %s', to);
};
/**
 * Proves that the pseudo-endorsing is useless.
 * @param {string} resistance The name of opposition.
 * @param {boolean} willWin Whether results will be achieved.
 */


exports.expert = expert;

const sucks = (resistance = 'Art Deco', willWin = true) => {
  console.log('%s: fighting for freedom.', resistance);
};

exports.sucks = sucks;
var _default = TechNation;
exports.default = _default;
