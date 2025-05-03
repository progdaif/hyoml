/**
 * File: asTurtle.test.js
 * Auto-cleaned and documented (v3-9)
 */
const { format } = require('../../../src/formats/asTurtle')

test('formats simple object as TTL', () => {
  const result = format({ name: "value" })
  expect(result).toContain('<name> "value" .')
})