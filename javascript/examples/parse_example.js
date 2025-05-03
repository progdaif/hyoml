/**
 * File: parse_example.js
 * Auto-cleaned for consistency
 */
/**
 * Parse Example - Using HyomlParser
 */

const { HyomlParser } = require('../parser/core/hyomlParser')
const fs = require('fs')

const input = fs.readFileSync('examples/sample_input.hyoml', 'utf-8')
const parsed = HyomlParser.parse(input)

console.log(parsed)
