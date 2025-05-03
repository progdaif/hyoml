/**
 * AsTree - Formatter to output object as indented tree
 */

class AsTree {
  /**
   * Format object as indented tree
   * @param {object} data
   * @param {string} prefix
   * @returns {string}
   */
  static format(data, prefix = '') {
    return Object.entries(data)
      .map(([key, value]) => {
        if (typeof value === 'object') {
          return `${prefix}${key}:\n${AsTree.format(value, prefix + '  ')}`
        }
        return `${prefix}${key}: ${value}`
      })
      .join('\n')
  }
}

module.exports = { AsTree }
