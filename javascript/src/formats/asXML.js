/**
 * File: asXML.js
 * Auto-cleaned and documented (v3-9)
 */
function escape(s) {
  return String(s).replace(/[&<>]/g, (c) =>
    ({ '&': '&amp', '<': '&lt', '>': '&gt' }[c])
  )
}
function formatXML(data, root = 'root') {
  let xml = [`<${root}>`]
  for (const [k, v] of Object.entries(data)) {
    xml.push(`  <${k}>${escape(v)}</${k}>`)
  }
  xml.push(`</${root}>`)
  return xml.join('\n')
}
module.exports = { format: formatXML }