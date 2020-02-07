const { _trapcss } = require('./trapcss')

/**
 * Parses the supplied HTML and CSS and removes
unused selectors. Also removes empty CSS rules.
 * @param {_trapcss.Config} config Options for the program.
 * @param {string} config.html The input HTML.
 * @param {string} config.css The CSS to drop selectors from.
 * @param {boolean} [config.keepAlternate=false] Whether to keep the `@alternate` comment for
 * Closure Stylesheets. Default `false`.
 * @param {(sel: string) => boolean} [config.shouldDrop] Whether _TrapCSS_ should remove this selector.
 * The `shouldDrop` hook is called for every CSS selector
 * that could not be matched in the html. Return `false`
 * to retain the selector or `true` to drop it.
 * @return {_trapcss.Return}
 */
function trapcss(config) {
  return _trapcss(config)
}

module.exports = trapcss

/* typal types/index.xml namespace */
/**
 * @typedef {_trapcss.Config} Config `＠record` Options for the program.
 * @typedef {Object} _trapcss.Config `＠record` Options for the program.
 * @prop {string} html The input HTML.
 * @prop {string} css The CSS to drop selectors from.
 * @prop {boolean} [keepAlternate=false] Whether to keep the `@alternate` comment for
 * Closure Stylesheets. Default `false`.
 * @prop {(sel: string) => boolean} [shouldDrop] Whether _TrapCSS_ should remove this selector.
 * The `shouldDrop` hook is called for every CSS selector
 * that could not be matched in the html. Return `false`
 * to retain the selector or `true` to drop it.
 * @typedef {_trapcss.Return} Return `＠record` Return Type.
 * @typedef {Object} _trapcss.Return `＠record` Return Type.
 * @prop {string} css The dropped CSS.
 * @prop {!Set<string>} sels The used selectors.
 */
