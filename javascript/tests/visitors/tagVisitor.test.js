/**
 * Test: TagVisitor
 */

const { TagVisitor } = require('../../parser/core/visitors/tagVisitor')

test('TagVisitor moves _tags to tags', () => {
  const tree = { _tags: ['important'] }
  const visited = TagVisitor.visit(tree)
  expect(visited.tags).toEqual(['important'])
})
