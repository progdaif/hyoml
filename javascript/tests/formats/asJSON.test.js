/**
 * File: asJSON.test.js
 * Auto-cleaned for consistency
 */
/**
 * Test: AsJSON Formatter
 */

const { AsJSON } = require('../../formats/asJSON')

test('AsJSON formats object to JSON string', () => {
  const obj = { key: 'value' }
  const result = AsJSON.format(obj, { pretty: true })
  expect(result).toContain('"key": "value"')
})
