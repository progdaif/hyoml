/**
 * Aliases maps standard method names to internal functions
 * for flexible access across APIs (e.g., load = parse = decode).
 */
const { parse } = require('../parser/core/hyomlParser')
const { validate } = require('../parser/core/middleware/validator')
const { format: formatOutput } = require('../core/formatter')

module.exports = {
  parse,
  load: parse,
  decode: parse,
  read: parse,

  validate,
  isValid: validate,

  format: formatOutput,
  output: formatOutput,
  serialize: formatOutput,
  stringify: formatOutput,
  show: formatOutput,
}