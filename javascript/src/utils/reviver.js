/**
 * Reviver applies transformations to each (key, value) pair in a dataset.
 * Accepts a custom function: (key, value, context) => newValue
 */
function applyReviver(data, reviver, context = {}) {
  if (!reviver || typeof reviver !== 'function') return data

  function walk(obj) {
    if (Array.isArray(obj)) {
      return obj.map(item => walk(item))
    } else if (obj && typeof obj === 'object') {
      const result = {}
      for (const key of Object.keys(obj)) {
        const value = obj[key]
        const newValue = reviver(key, value, { ...context })
        result[key] = typeof newValue === 'object' ? walk(newValue) : newValue
      }
      return result
    }
    return obj
  }

  return walk(data)
}
module.exports = { applyReviver }