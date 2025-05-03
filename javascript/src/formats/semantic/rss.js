/**
 * File: rss.js
 * Auto-cleaned and documented (v3-9)
 */
function formatRSS(data) {
  return `<rss><channel><title>${data.title}</title></channel></rss>`
}
module.exports = { format: formatRSS }