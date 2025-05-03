/**
 * Test: RelaxedYMLParser
 */

const { RelaxedYMLParser } = require('../../parser/core/relaxedYMLParser')

test('RelaxedYMLParser parses simple YML', () => {
  const input = 'name: hyoml\nversion: 0.0.3'
  const result = RelaxedYMLParser.parse(input)
  expect(result.name).toBe('hyoml')
})
