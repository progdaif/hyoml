/**
 * File: jsonld.js
 * Auto-cleaned and documented (v3-9)
 */
function formatJSONLD(data) {
  return JSON.stringify({ "@context": "http://schema.org", ...data }, null, 2)
}
module.exports = { format: formatJSONLD }