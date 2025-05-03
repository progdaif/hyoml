/**
 * File: run_examples.js
 * Auto-cleaned for consistency
 */
const fs = require('fs')
const path = require('path')

const folder = './examples'
fs.readdirSync(folder).forEach(file => {
  if (file.endsWith('.js')) {
    console.log(`\n>>> Running ${file}`)
    require(path.join(__dirname, folder, file))
  }
})