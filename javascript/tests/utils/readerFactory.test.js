/**
 * File: readerFactory.test.js
 * Auto-cleaned for consistency
 */
/**
 * Test: ReaderFactory
 */

const { ReaderFactory } = require('../../utils/readerFactory')

test('ReaderFactory creates JsonReader for JSON input', () => {
  const input = '{"name": "hyoml"}'
  const reader = ReaderFactory.createReader(input)
  expect(reader.read).toBeDefined()
})
