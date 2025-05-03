/**
 * File: s3Loader.js
 * Auto-cleaned and documented (v3-9)
 */
async function load(s3, bucket, key, options = {}) {
  try {
    const params = { Bucket: bucket, Key: key }
    const data = await s3.getObject(params).promise()
    return data.Body.toString('utf-8')
  } catch (err) {
    if (options.fallbackOnError) return ''
    throw new Error("Failed to load from S3: " + err.message)
  }
}

module.exports = { load }