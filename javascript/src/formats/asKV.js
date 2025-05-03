/**
 * File: asKV.js
 * Auto-cleaned and documented (v3-9)
 */
function formatKV(data) {
  return Object.entries(data)
    .map(([key, val]) => `${key}: ${val}`)
    .join('\n')
}
module.exports = { format: formatKV }