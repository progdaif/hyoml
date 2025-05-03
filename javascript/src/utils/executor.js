/**
 * File: executor.js
 * Auto-cleaned and documented (v3-9)
 */
const { exec } = require('child_process')

function execute(command, callback) {
  try {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        callback(`Error: ${error.message}`, null)
      } else if (stderr) {
        callback(`Stderr: ${stderr}`, null)
      } else {
        callback(null, stdout)
      }
    })
  } catch (err) {
    callback(`Execution failed: ${err.message}`, null)
  }
}

module.exports = { execute }