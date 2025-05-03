/**
 * File: asTuple.test.js
 * Auto-cleaned for consistency
 */
const { format } = require('../../../src/formats/asTuple')

test('formats object values as tuple', () => {
  expect(format({ x: 1, y: 2 })).toBe('(1, 2)')
})