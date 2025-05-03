/**
 * File: asShellScript.js
 * Auto-cleaned and documented (v3-9)
 */
function formatShellScript(data) {
  return Object.entries(data)
    .map(([k, v]) => `export ${k.toUpperCase()}="${v}"`)
    .join('\n')
}
module.exports = { format: formatShellScript }