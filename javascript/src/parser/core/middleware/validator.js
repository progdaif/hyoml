/**
 * File: validator.js
 * Auto-cleaned and documented (v3-9)
 */
function validate(data) {
  return typeof data === 'object' && data !== null
}

module.exports = { validate }