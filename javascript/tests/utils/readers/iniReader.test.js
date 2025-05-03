/**
 * File: iniReader.test.js
 * Auto-cleaned for consistency
 */
const { INIReader } = require('../../../src/utils/readers/iniReader')

test('parses INI with sections', () => {
  const content = `
    [section]
    key=value
  `
  const result = INIReader.read(content)
  expect(result.section.key).toBe('value')
})