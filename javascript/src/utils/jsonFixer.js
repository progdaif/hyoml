/**
 * File: jsonFixer.js
 * Auto-cleaned and documented (v3-9)
 */

function fixQuotes(content) {
  return content.replace(/(['\"])\?([a-zA-Z0-9_]+)\1/g, '"$2"')
}

function removeTrailingCommas(content) {
  return content.replace(/,\s*([}\]])/g, '$1')
}

function relaxedParse(content) {
  try {
    return JSON.parse(content)
  } catch (e) {
    try {
      let fixed = fixQuotes(content)
      fixed = removeTrailingCommas(fixed)
      return JSON.parse(fixed)
    } catch (err) {
      throw new Error('Failed to parse JSON even in relaxed mode.')
    }
  }
}

module.exports = {
  fixQuotes,
  removeTrailingCommas,
  relaxedParse
}
