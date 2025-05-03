/**
 * Converts flat objects into Python-style dataclass strings.
 * Adds optional typing and default values.
 */
function formatDataclass(data, className = "MyData", options = {}) {
  try {
    const lines = [`@dataclass`, `class ${className}:`]
    for (const [k, v] of Object.entries(data)) {
      const typeHint = typeof v === 'number' ? 'float' :
                       typeof v === 'boolean' ? 'bool' :
                       'str'
      const defaultVal = typeof v === 'string' ? `"${v}"` : v
      lines.push(`  ${k}: ${typeHint} = ${defaultVal}`)
    }
    return lines.join('\n')
  } catch (err) {
    throw new Error("Failed to format as Dataclass: " + err.message)
  }
}
module.exports = { format: formatDataclass }