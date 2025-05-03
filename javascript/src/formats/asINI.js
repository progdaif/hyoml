/**
 * File: asINI.js
 * Auto-cleaned and documented (v3-9)
 */
function formatINI(data, section = null) {
  const lines = []
  if (section) lines.push(`[${section}]`)
  for (const [key, value] of Object.entries(data)) {
    lines.push(`${key}=${value}`)
  }
  return lines.join('\n')
}
module.exports = { format: formatINI }