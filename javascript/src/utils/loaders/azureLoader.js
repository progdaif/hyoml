/**
 * Loads file content from Azure Blob Storage.
 * Expects a `blobClient` object passed by the user.
 */
async function load(blobClient, options = {}) {
  try {
    const downloadResponse = await blobClient.download()
    const downloaded = await streamToString(downloadResponse.readableStreamBody)
    return downloaded
  } catch (err) {
    if (options.fallbackOnError) return ''
    throw new Error("Failed to load from Azure Blob: " + err.message)
  }
}

// Helper to convert stream to string
function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = []
    readableStream.on('data', chunk => chunks.push(chunk))
    readableStream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')))
    readableStream.on('error', reject)
  })
}

module.exports = { load }