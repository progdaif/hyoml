/**
 * File: gcsLoader.js
 * Auto-cleaned and documented (v3-9)
 */
async function load(gcsFile, options = {}) {
  try {
    const [contents] = await gcsFile.download()
    return contents.toString('utf-8')
  } catch (err) {
    if (options.fallbackOnError) return ''
    throw new Error("Failed to load from GCS: " + err.message)
  }
}

module.exports = { load }