/**
 * File: parser_format_roundtrip.test.js
 * Auto-cleaned and documented (v3-9)
 */
const { parse, format } = require('../../src')

test('parse and format JSON roundtrip', () => {
  const input = '{"foo":"bar"}'
  const result = parse(input, 'json')
  const output = format(result, 'json')
  expect(output).toMatch(/"foo": "bar"/)
})