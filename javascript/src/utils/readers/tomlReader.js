/**
 * TOMLReader uses @iarna/toml or a fallback parser to parse TOML strings.
 */
const toml = require('@iarna/toml')

const TOMLReader = {
  read(content, options = {}) {
    try {
      return toml.parse(content)
    } catch (err) {
      if (options.fallbackOnError) return {}
      throw new Error("Failed to parse TOML content: " + err.message)
    }
  }
}
module.exports = { TOMLReader }