/**
 * File: asMarkdown.js
 * Auto-cleaned and documented (v3-9)
 */
function formatMarkdown(data) {
  const rows = Object.entries(data)
  const header = '| Key | Value |\n|-----|-------|'
  const body = rows.map(([k, v]) => `| ${k} | ${v} |`).join('\n')
  return [header, body].join('\n')
}
module.exports = { format: formatMarkdown }