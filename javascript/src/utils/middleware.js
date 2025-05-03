/**
 * File: middleware.js
 * Auto-cleaned and documented (v3-9)
 */

function runMiddleware(content, middlewares = []) {
  return middlewares.reduce((acc, fn) => fn(acc), content)
}

module.exports = { runMiddleware }
