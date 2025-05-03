/**
 * INIReader parses INI-formatted strings into nested JavaScript objects.
 * Supports global and sectioned keys.
 */
const INIReader = {
  read(content, options = {}) {
    try {
      const result = {}
      let currentSection = null
      const lines = content.split(/\r?\n/)

      for (let line of lines) {
        line = line.trim()
        if (!line || line.startsWith('') || line.startsWith('#')) continue

        if (line.startsWith('[') && line.endsWith(']')) {
          currentSection = line.slice(1, -1)
          result[currentSection] = {}
        } else {
          const [key, ...rest] = line.split('=')
          if (!key || rest.length === 0) continue
          const value = rest.join('=').trim()
          const target = currentSection ? result[currentSection] : result
          target[key.trim()] = value
        }
      }

      return result
    } catch (err) {
      if (options.fallbackOnError) return {}
      throw new Error("Failed to parse INI content: " + err.message)
    }
  }
}
module.exports = { INIReader }