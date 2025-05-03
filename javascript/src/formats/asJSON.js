/**
 * AsJSON - Formatter to output object as JSON
 */

class AsJSON {
  /**
   * Format object as JSON string
   * @param {object} data
   * @param {object} options
   * @returns {string}
   */
  static format(data, options = {}) {
    const spacing = options.pretty ? 2 : 0
    return JSON.stringify(data, null, spacing)
  }
}

module.exports = { AsJSON }
