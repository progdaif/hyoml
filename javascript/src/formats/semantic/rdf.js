/**
 * File: rdf.js
 * Auto-cleaned and documented (v3-9)
 */
function formatRDF(data) {
  return `<rdf><desc>${JSON.stringify(data)}</desc></rdf>`
}
module.exports = { format: formatRDF }