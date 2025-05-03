/**
 * File: asDataclass.test.js
 * Auto-cleaned for consistency
 */
const { format } = require('../../../src/formats/asDataclass')

test('formats object as Python dataclass', () => {
  const output = format({ name: "x", age: 1 })
  expect(output).toContain('class MyData:')
  expect(output).toContain('name: str = "x"')
})