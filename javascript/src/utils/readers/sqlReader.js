/**
 * SQLReader parses basic SQL INSERT statements into objects.
 */
const SQLReader = {
  read(content, options = {}) {
    try {
      const match = content.match(/INSERT INTO .*?\((.*?)\).*?VALUES\s*\((.*?)\)/is)
      if (!match) throw new Error("Invalid SQL INSERT")

      const keys = match[1].split(',').map(k => k.replace(/`|'|"/g, '').trim())
      const values = match[2].split(',').map(v => v.replace(/'|"/g, '').trim())

      if (keys.length !== values.length) throw new Error("Mismatched keys/values")

      const obj = {}
      keys.forEach((k, i) => { obj[k] = values[i] })
      return obj
    } catch (err) {
      if (options.fallbackOnError) return {}
      throw new Error("Failed to parse SQL content: " + err.message)
    }
  }
}
module.exports = { SQLReader }