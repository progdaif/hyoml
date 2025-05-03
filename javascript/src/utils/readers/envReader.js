/**
 * ENVReader parses .env style key=value formatted content.
 */
const ENVReader = {
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
      throw new Error("Failed to parse ENV content: " + err.message)
    }
  }
}
module.exports = { ENVReader }