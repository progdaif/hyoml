/**
 * StrictYML formatter: Produces YAML with quoted strings and enforced spacing.
 */
const yaml = require('js-yaml')

function formatStrictYML(data, indent = 2) {
  try {
    return yaml.dump(data, {
      indent,
      quotingType: '"',
      forceQuotes: true
    })
  } catch (err) {
    throw new Error("Failed to format as strict YAML: " + err.message)
  }
}
module.exports = { format: formatStrictYML }