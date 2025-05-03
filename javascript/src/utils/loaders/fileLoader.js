/**
 * File: fileLoader.js
 * Auto-cleaned and documented (v3-9)
 */
const fs = require('fs')

function load(path, options = {}) {
  try {
    return fs.readFileSync(path, 'utf-8')
  } catch (e) {
    if (options.fallbackOnError) return ''
    throw new Error("Failed to read file: " + e.message)
  }
}

module.exports = { load }