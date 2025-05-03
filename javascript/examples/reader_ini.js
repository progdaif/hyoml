/**
 * File: reader_ini.js
 * Auto-cleaned for consistency
 */
const { INIReader } = require('../src/utils/readers/iniReader')

const content = `
[main]
username=admin
`

const result = INIReader.read(content)
console.log("Parsed INI:", result)

module.exports = {}