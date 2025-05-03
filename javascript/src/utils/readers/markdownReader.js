/**
 * MarkdownReader extracts pipe-delimited table data from Markdown.
 */
const MarkdownReader = {
  read(content, options = {}) {
    try {
      const lines = content.split(/\r?\n/).filter(line => line.includes('|'))
      const [header, separator, ...rows] = lines
      const headers = header.split('|').map(h => h.trim()).filter(Boolean)
      return rows.map(row => {
        const values = row.split('|').map(cell => cell.trim())
        const obj = {}
        headers.forEach((h, i) => { obj[h] = values[i] })
        return obj
      })
    } catch (err) {
      if (options.fallbackOnError) return []
      throw new Error("Failed to parse Markdown table: " + err.message)
    }
  }
}
module.exports = { MarkdownReader }