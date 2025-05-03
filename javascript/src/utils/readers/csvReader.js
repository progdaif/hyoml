/**
 * File: csvReader.js
 * Auto-cleaned and documented (v3-9)
 */
const parseCSV = require('csv-parse/sync')

class CSVReader {
  static read(content, options = {}) {
    try {
      const records = parseCSV.parse(content, { columns: true, skip_empty_lines: true })
      return records
    } catch (e) {
      if (options.fallbackOnError) return []
      throw new Error("Invalid CSV input: " + e.message)
    }
  }
}

module.exports = { CSVReader }