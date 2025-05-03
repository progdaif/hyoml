/**
 * XMLReader parses XML strings into JavaScript objects using xml2js.
 * Only basic tag/value parsing is handled attributes are ignored by default.
 */
const xml2js = require('xml2js')

const XMLReader = {
  async read(content, options = {}) {
    const parser = new xml2js.Parser({
      explicitArray: false,
      ignoreAttrs: options.ignoreAttributes ?? true
    })

    try {
      const result = await parser.parseStringPromise(content)
      return result
    } catch (err) {
      if (options.fallbackOnError) return {}
      throw new Error("Failed to parse XML content: " + err.message)
    }
  }
}

module.exports = { XMLReader }