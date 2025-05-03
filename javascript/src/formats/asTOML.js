/**
 * File: asTOML.js
 * Auto-cleaned and documented (v3-9)
 */
function formatTOML(data) {
  const lines = []
  for (const [key, val] of Object.entries(data)) {
    lines.push(`${key} = ${JSON.stringify(val)}`)
  }
  return lines.join('\n')
}
module.exports = { format: formatTOML }