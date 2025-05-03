/**
 * CLI Validate Command
 */

const { HyomlParser } = require('../../parser/core/hyomlParser')
const fs = require('fs')

function validateCommand(args) {
  const file = args[0]
  if (!file) {
    console.log('validate: missing file argument')
    return
  }

  const input = fs.readFileSync(file, 'utf-8')
  try {
    HyomlParser.parse(input, { validator: true })
    console.log('Validation passed')
  } catch (err) {
    console.log('Validation failed:', err.message)
  }
}

module.exports = { validateCommand }
