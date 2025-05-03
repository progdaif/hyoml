/**
 * Test: Validator
 */

const { Validator } = require('../../parser/core/middleware/validator')

test('Validator passes a correct object', () => {
  const tree = { key: 'value' }
  expect(() => Validator.validate(tree)).not.toThrow()
})

test('Validator fails on non-object', () => {
  expect(() => Validator.validate('invalid')).toThrow()
})
