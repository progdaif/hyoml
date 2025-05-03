/**
 * Notation3 (N3) formatter: Semantic triples with human-readable RDF-style output.
 */
function formatNotation3(data, subject = "<subject>") {
  try {
    const triples = Object.entries(data).map(([k, v]) => {
      const obj = isNaN(v) ? `"${v}"` : v
      return `${subject} <${k}> ${obj} .`
    })
    return `@prefix : <#> .\n` + triples.join('\n')
  } catch (err) {
    throw new Error("Failed to format as Notation3: " + err.message)
  }
}
module.exports = { format: formatNotation3 }