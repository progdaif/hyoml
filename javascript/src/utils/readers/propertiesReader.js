/**
 * PropertiesReader parses Java-style key=value pairs, skipping comments.
 */
const PropertiesReader = {
  read(content, options = {}) {
    try {
      const result = {}
      const lines = content.split(/\r?\n/)
      for (const line of lines) {
        const clean = line.trim()
        if (!clean || clean.startsWith('#')) continue
        const [key, ...rest] = clean.split('=')
        if (key && rest.length > 0) result[key.trim()] = rest.join('=').trim()
      }
      return result
    } catch (err) {
      if (options.fallbackOnError) return {}
      throw new Error("Failed to parse Java .properties content: " + err.message)
    }
  }
}
module.exports = { PropertiesReader }