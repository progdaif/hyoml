/**
 * Test: RelaxedJSONParser
 */

const { RelaxedJSONParser } = require('../../parser/core/relaxedJSONParser')

test('RelaxedJSONParser parses relaxed JSON', () => {
  const input = "{name: 'hyoml', version: '0.0.3',}"
  const result = RelaxedJSONParser.parse(input)
  expect(result.name).toBe('hyoml')
})
