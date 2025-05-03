/**
 * Test: AutoFixer
 */

const { AutoFixer } = require('../../parser/core/middleware/autoFixer')

test('AutoFixer adds missing closing brace', () => {
  const input = '{"name": "hyoml"'
  const fixed = AutoFixer.fix(input)
  expect(fixed).toContain('}')
})
