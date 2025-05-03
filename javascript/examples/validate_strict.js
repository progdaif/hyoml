/**
 * File: validate_strict.js
 * Auto-cleaned for consistency
 */
const { validate } = require('../src/core/validator')

console.log("Is object valid?", validate({ foo: "bar" }))
console.log("Is null valid?", validate(null))

module.exports = {}