/**
 * JavaProperties formatter: Converts data into .properties key=value format.
 */
function formatJavaProperties(data) {
  try {
    return Object.entries(data)
      .map(([k, v]) => `${k}=${String(v).replace(/\n/g, '\\n')}`)
      .join('\n')
  } catch (err) {
    throw new Error("Failed to format as Java .properties: " + err.message)
  }
}
module.exports = { format: formatJavaProperties }