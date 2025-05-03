/**
 * File: index.js
 * Auto-cleaned and documented (v3-9)
 */
const { parse, load, decode, read, validate, format } = require('./utils/aliases')

module.exports = {
  parse,
  load,
  decode,
  read,

  validate,
  isValid: validate,

  format,
  output: format,
  serialize: format,
  stringify: format,
  show: format,
}