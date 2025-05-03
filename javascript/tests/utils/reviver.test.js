/**
 * File: reviver.test.js
 * Auto-cleaned for consistency
 */
const { applyReviver } = require('../../../src/utils/reviver')

test('applies reviver function to all keys', () => {
  const obj = { name: "John", age: "30" }
  const revived = applyReviver(obj, (k, v) => k === 'age' ? Number(v) : v)
  expect(typeof revived.age).toBe('number')
})