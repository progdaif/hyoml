/**
 * File: formatter.js
 * Auto-cleaned and documented (v3-9)
 */
const formatters = {
  json: require('../formats/asJSON'),
  yaml: require('../formats/asYAML'),
  toml: require('../formats/asTOML'),
  xml: require('../formats/asXML'),
  env: require('../formats/asENV'),
  ini: require('../formats/asINI'),
  tuple: require('../formats/asTuple'),
  dataclass: require('../formats/asDataclass'),
  tree: require('../formats/asTree'),
  kv: require('../formats/asKV'),
  dot: require('../formats/asDot'),
  markdown: require('../formats/asMarkdown'),
  html: require('../formats/asHTML'),
  strictyml: require('../formats/asStrictYML'),
  properties: require('../formats/asJavaProperties'),
  atom: require('../formats/asAtom'),
  microdata: require('../formats/asMicrodata'),
  turtle: require('../formats/asTurtle'),
  n3: require('../formats/asNotation3'),
}

function format(data, type = 'json', options = {}) {
  try {
    const mod = formatters[type.toLowerCase()]
    if (!mod || typeof mod.format !== 'function') {
      throw new Error(`Formatter for '${type}' not found`)
    }
    return mod.format(data, options)
  } catch (err) {
    if (options.fallbackOnError) return ''
    throw new Error("Formatter failed: " + err.message)
  }
}

module.exports = { format }