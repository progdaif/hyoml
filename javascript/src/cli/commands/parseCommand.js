/**
 * CLI Parse Command
 */

const { HyomlParser } = require('../../parser/core/hyomlParser')
const fs = require('fs')

function parseCommand(args) {
  const file = args[0]
  if (!file) {
    console.log('parse: missing file argument')
    return
  }

  const input = fs.readFileSync(file, 'utf-8')
  const parsed = HyomlParser.parse(input)
  console.log(parsed)
}

module.exports = { parseCommand }
