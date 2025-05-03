/**
 * File: format_example.js
 * Auto-cleaned for consistency
 */
/**
 * Format Example - Parse and Format as JSON
 */

const { HyomlParser } = require('../parser/core/hyomlParser')
const { AsJSON } = require('../formats/asJSON')
const fs = require('fs')

const input = fs.readFileSync('examples/sample_input.hyoml', 'utf-8')
const parsed = HyomlParser.parse(input)
const output = AsJSON.format(parsed, { pretty: true })

console.log(output)
