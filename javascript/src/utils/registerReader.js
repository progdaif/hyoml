/**
 * File: registerReader.js
 * Auto-cleaned and documented (v3-9)
 */

const readerRegistry = {}

function registerReader(type, reader) {
  readerRegistry[type.toLowerCase()] = reader
}

function getRegisteredReader(type) {
  return readerRegistry[type.toLowerCase()]
}

module.exports = {
  registerReader,
  getRegisteredReader
}
