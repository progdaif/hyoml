/**
 * File: relaxedJSONParser.js
 * Auto-cleaned and documented (v3-9)
 */
const { relaxedParse } = require('../../utils/jsonFixer')
const { runVisitorPipeline } = require('./visitorPipeline')

function parse(content, options = {}) {
  const data = relaxedParse(content)
  return runVisitorPipeline(data)
}

module.exports = { parse }