/**
 * File: asINI.test.js
 * Auto-cleaned for consistency
 */
const asINI = require('../../../formats/asINI')
test('asINI formats correctly', () => { expect(asINI({ a: 1 })).toContain('a=1') })
