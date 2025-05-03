/**
 * File: read_example.js
 * Auto-cleaned for consistency
 */
/**
 * Read Example - Load from file using FileLoader
 */

const { FileLoader } = require('../utils/loaders/fileLoader')

const loader = new FileLoader()
const content = loader.load('examples/sample_input.hyoml')

console.log(content)
