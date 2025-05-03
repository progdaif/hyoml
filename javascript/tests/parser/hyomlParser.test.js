/**
 * Test: HyomlParser
 */

const { HyomlParser } = require('../../parser/core/hyomlParser')

test('HyomlParser parses simple JSON input', () => {
  const input = '{"name": "hyoml"}'
  const result = HyomlParser.parse(input)
  expect(result).toEqual({ name: 'hyoml' })
})

test('HyomlParser parses simple YML input', () => {
  const input = 'name: hyoml'
  const result = HyomlParser.parse(input)
  expect(result).toEqual({ name: 'hyoml' })
})
