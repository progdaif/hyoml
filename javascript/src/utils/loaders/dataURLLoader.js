/**
 * Loads base64 content from a data URL (data:text/plainbase64,...).
 */
function load(dataUrl, options = {}) {
  try {
    const match = dataUrl.match(/^data:(.*?)base64,(.*)$/)
    if (!match) throw new Error("Invalid data URL format")
    const content = Buffer.from(match[2], 'base64').toString('utf-8')
    return content
  } catch (err) {
    if (options.fallbackOnError) return ''
    throw new Error("Failed to load from data URL: " + err.message)
  }
}

module.exports = { load }