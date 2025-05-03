/**
 * File: asENV.js
 * Auto-cleaned and documented (v3-9)
 */
function formatENV(data) {
  return Object.entries(data)
    .map(([k, v]) => `${k.toUpperCase()}=${v}`)
    .join('\n')
}
module.exports = { format: formatENV }