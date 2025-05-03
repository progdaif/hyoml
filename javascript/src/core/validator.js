/**
 * Basic format validation utility.
 */
function validate(data) {
  return typeof data === 'object' && data !== null
}
module.exports = { validate }