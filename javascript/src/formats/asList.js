/**
 * AsList - Formatter to output object as list format
 */

class AsList {
  /**
   * Format object as bullet list
   * @param {object} data
   * @returns {string}
   */
  static format(data) {
    return Object.entries(data)
      .map(([key, value]) => `- ${key}: ${value}`)
      .join('\n')
  }
}

module.exports = { AsList }
