/**
 * File: asHTML.js
 * Auto-cleaned and documented (v3-9)
 */
function formatHTML(data) {
  const rows = Object.entries(data)
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join('')
  return `<table>${rows}</table>`
}
module.exports = { format: formatHTML }