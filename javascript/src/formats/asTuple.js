/**
 * Converts object values into a tuple-style output: (val1, val2, ...)
 */
function formatTuple(data) {
  try {
    const values = Object.values(data)
    return `(${values.map(v => (typeof v === 'string' ? `"${v}"` : v)).join(', ')})`
  } catch (err) {
    throw new Error("Failed to format as Tuple: " + err.message)
  }
}
module.exports = { format: formatTuple }