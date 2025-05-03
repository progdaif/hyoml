/**
 * Atom formatter: Converts simple feed-like data into Atom XML.
 */
function formatAtom(data) {
  try {
    return `<?xml version="1.0"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${data.title || 'Untitled'}</title>
  <id>${data.id || 'urn:uuid:default-id'}</id>
  <updated>${data.updated || new Date().toISOString()}</updated>
</feed>`
  } catch (err) {
    throw new Error("Failed to format as Atom: " + err.message)
  }
}
module.exports = { format: formatAtom }