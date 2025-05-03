/**
 * File: cli_example.js
 * Auto-cleaned for consistency
 */
/**
 * CLI Example - Show how to use CLI commands programmatically
 */

const { exec } = require('child_process')

exec('node src/cli/main.js parse examples/sample_input.hyoml', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    return
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`)
    return
  }
  console.log(`Output:\n${stdout}`)
})
Example	Done
Parse Example	✅
Format Example	✅
Validation Example	✅
Read Example	✅
Write Example	✅
CLI Example	✅

Tests (unit tests for parser, readers, loaders, middleware, etc.)

just say "continue" 🚀

Waiting for your confirmation 🎯!






y
now printing the Tests batch cleanly:
