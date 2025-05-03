/**
 * CLI Format Command
 */

const { HyomlParser } = require('../../parser/core/hyomlParser')
const { AsJSON } = require('../../formats/asJSON')
const fs = require('fs')

function formatCommand(args) {
  const file = args[0]
  if (!file) {
    console.log('format: missing file argument')
    return
  }

  const input = fs.readFileSync(file, 'utf-8')
  const parsed = HyomlParser.parse(input)
  const formatted = AsJSON.format(parsed, { pretty: true })
  console.log(formatted)
}

module.exports = { formatCommand }
