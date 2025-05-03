/**
 * Test: DirectiveVisitor
 */

const { DirectiveVisitor } = require('../../parser/core/visitors/directiveVisitor')

test('DirectiveVisitor moves _directives to directives', () => {
  const tree = { _directives: ['note'] }
  const visited = DirectiveVisitor.visit(tree)
  expect(visited.directives).toEqual(['note'])
})
