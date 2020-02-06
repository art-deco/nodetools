/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _nodetools = {}
/**
 * @record
 */
_nodetools.ServerResponse
/**
 * The user object.
 * @type {(!_nodetools.User)|undefined}
 */
_nodetools.ServerResponse.prototype.user
/**
 * The server-side error.
 * @type {string}
 */
_nodetools.ServerResponse.prototype.error
/**
 * @record
 */
_nodetools.User
/**
 * The name of the user.
 * @type {string}
 */
_nodetools.User.prototype.name
/**
 * The unique login of the user.
 * @type {string}
 */
_nodetools.User.prototype.login
