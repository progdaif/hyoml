/**
 * File: directiveVisitor.js
 * Auto-cleaned and documented (v3-9)
 */
function directiveVisitor(data) {
  if (!data || typeof data !== 'object') return data
  const directives = []
  const traverse = (obj) => {
    for (const key in obj) {
      if (key.startsWith('@') || key.toLowerCase().includes('directive')) {
        directives.push({ [key]: obj[key] })
      }
      if (typeof obj[key] === 'object') traverse(obj[key])
    }
  }
  traverse(data)
  data._directives = directives
  return data
}
module.exports = { directiveVisitor }