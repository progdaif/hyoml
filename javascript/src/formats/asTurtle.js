/**
 * Turtle formatter (TTL): Converts flat objects into RDF triples using Turtle syntax.
 */
function formatTurtle(data, subject = "<subject>") {
  try {
    const lines = []
    for (const [predicate, object] of Object.entries(data)) {
      const formattedObject = isNaN(object) ? `"${object}"` : object
      lines.push(`${subject} <${predicate}> ${formattedObject} .`)
    }
    return lines.join('\n')
  } catch (err) {
    throw new Error("Failed to format as Turtle: " + err.message)
  }
}
module.exports = { format: formatTurtle }