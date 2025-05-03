/**
 * File: yamlReader.js
 * Auto-cleaned and documented (v3-9)
 */
const yaml = require('js-yaml')
const { preprocessYAML } = require('../../relaxedYAML')

class YAMLReader {
  static read(content, options = {}) {
    try {
      const finalContent = options.relaxed ? preprocessYAML(content) : content
      return yaml.load(finalContent)
    } catch (err) {
      if (options.fallbackOnError) return {}
      throw new Error("Invalid YAML input: " + err.message)
    }
  }
}

module.exports = { YAMLReader }