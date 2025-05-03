/**
 * File: relaxedYMLParser.js
 * Auto-cleaned and documented (v3-9)
 */
const yaml = require('js-yaml')
const { preprocessYAML } = require('../../utils/relaxedYAML')
const { runVisitorPipeline } = require('./visitorPipeline')

function parse(content, options = {}) {
  const clean = preprocessYAML(content)
  const data = yaml.load(clean)
  return runVisitorPipeline(data)
}

module.exports = { parse }