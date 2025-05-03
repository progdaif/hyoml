/**
 * CLI Transform Command
 */

const { HyomlParser } = require('../../parser/core/hyomlParser')
const fs = require('fs')

function transformCommand(args) {
  const file = args[0]
  if (!file) {
    console.log('transform: missing file argument')
    return
  }

  const input = fs.readFileSync(file, 'utf-8')
  const parsed = HyomlParser.parse(input)
  const transformed = JSON.stringify(parsed, null, 2)
  console.log(transformed)
}

module.exports = { transformCommand }
