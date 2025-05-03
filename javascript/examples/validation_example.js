/**
 * File: validation_example.js
 * Auto-cleaned for consistency
 */
/**
 * Validation Example - Validate Hyoml input
 */

const { HyomlParser } = require('../parser/core/hyomlParser')
const fs = require('fs')

const input = fs.readFileSync('examples/sample_input.hyoml', 'utf-8')

try {
  HyomlParser.parse(input, { validator: true })
  console.log('Validation successful')
} catch (err) {
  console.error('Validation error:', err.message)
}
