/**
 * File: autoFixer.js
 * Auto-cleaned and documented (v3-9)
 */
function autoFix(content) {
  return content.replace(/\t/g, '  ').replace(/,\s*([}\]])/g, '$1')
}

module.exports = { autoFix }