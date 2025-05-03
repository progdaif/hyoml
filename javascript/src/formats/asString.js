/**
 * Convert any data into a stringified format.
 */
function asString(data) {
  return typeof data === 'string' ? data : JSON.stringify(data, null, 2)
}

module.exports = asString
