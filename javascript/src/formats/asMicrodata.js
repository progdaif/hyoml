/**
 * Microdata formatter: Embeds key/value pairs as HTML elements with microdata.
 */
function formatMicrodata(data, type = "Thing") {
  try {
    const items = Object.entries(data).map(([key, val]) =>
      `<span itemprop="${key}">${val}</span>`
    )
    return `<div itemscope itemtype="http://schema.org/${type}">\n  ${items.join('\n  ')}\n</div>`
  } catch (err) {
    throw new Error("Failed to format as Microdata: " + err.message)
  }
}
module.exports = { format: formatMicrodata }