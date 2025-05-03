/**
 * AsYAML - Formatter to output object as YAML
 */

class AsYAML {
  /**
   * Format object as YAML string
   * @param {object} data
   * @param {object} options
   * @returns {string}
   */
  static format(data, options = {}) {
    return Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')
  }
}

module.exports = { AsYAML }
