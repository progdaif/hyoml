/**
 * CLI Main Command - Dispatches subcommands
 */

const { parseCommand } = require('./parseCommand')
const { formatCommand } = require('./formatCommand')
const { validateCommand } = require('./validateCommand')
const { transformCommand } = require('./transformCommand')
const { infoCommand } = require('./infoCommand')

function mainCommand() {
  const args = process.argv.slice(2)
  const command = args[0]

  switch (command) {
    case 'parse':
      parseCommand(args.slice(1))
      break
    case 'format':
      formatCommand(args.slice(1))
      break
    case 'validate':
      validateCommand(args.slice(1))
      break
    case 'transform':
      transformCommand(args.slice(1))
      break
    case 'info':
      infoCommand()
      break
    default:
      console.log('Usage: hyoml <parse|format|validate|transform|info>')
  }
}

module.exports = { mainCommand }
