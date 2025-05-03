/**
 * HTMLReader extracts table-like data from simple HTML documents.
 * Depends on cheerio for DOM traversal.
 */
const cheerio = require('cheerio')

const HTMLReader = {
  read(content, options = {}) {
    try {
      const $ = cheerio.load(content)
      const rows = []
      $('table tr').each((_, tr) => {
        const cells = $(tr).find('td, th')
        if (cells.length === 0) return
        const row = {}
        cells.each((i, cell) => {
          row[`col${i}`] = $(cell).text().trim()
        })
        rows.push(row)
      })
      return rows
    } catch (err) {
      if (options.fallbackOnError) return []
      throw new Error("Failed to parse HTML content: " + err.message)
    }
  }
}

module.exports = { HTMLReader }