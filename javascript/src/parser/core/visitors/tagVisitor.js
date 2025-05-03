/**
 * File: tagVisitor.js
 * Auto-cleaned and documented (v3-9)
 */
function tagVisitor(data) {
  if (!data || typeof data !== 'object') return data
  const tags = []
  const traverse = (obj) => {
    for (const key in obj) {
      const value = obj[key]
      if (typeof value === 'string' && value.startsWith('#')) tags.push(value)
      else if (typeof value === 'object') traverse(value)
    }
  }
  traverse(data)
  data._tags = [...new Set(tags)]
  return data
}
module.exports = { tagVisitor }