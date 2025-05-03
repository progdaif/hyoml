/**
 * File: asDot.js
 * Auto-cleaned and documented (v3-9)
 */
function formatDot(data, prefix = '') {
  let lines = []
  for (const [key, val] of Object.entries(data)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (typeof val === 'object' && val !== null) {
      lines = lines.concat(formatDot(val, fullKey))
    } else {
      lines.push(`${fullKey}=${val}`)
    }
  }
  return lines.join('\n')
}
module.exports = { format: formatDot }