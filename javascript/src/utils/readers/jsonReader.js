/**
 * File: jsonReader.js
 * Auto-cleaned and documented (v3-9)
 */
const { relaxedParse } = require('../../jsonFixer')

class JSONReader {
  static read(content, options = {}) {
    const { relaxed = false } = options
    try {
      return relaxed ? relaxedParse(content) : JSON.parse(content)
    } catch (err) {
      if (options.fallbackOnError) return {}
      throw new Error("Invalid JSON input: " + err.message)
    }
  }
}

module.exports = { JSONReader }