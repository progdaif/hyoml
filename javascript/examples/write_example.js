/**
 * File: write_example.js
 * Auto-cleaned for consistency
 */
/**
 * Write Example - Save output to file
 */

const fs = require('fs')
const { HyomlParser } = require('../parser/core/hyomlParser')
const { AsJSON } = require('../formats/asJSON')

const input = fs.readFileSync('examples/sample_input.hyoml', 'utf-8')
const parsed = HyomlParser.parse(input)
const output = AsJSON.format(parsed, { pretty: true })

fs.writeFileSync('examples/output.json', output, 'utf-8')

console.log('Output written to examples/output.json')
