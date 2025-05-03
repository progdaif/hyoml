/**
 * Loads text data from a remote HTTP or HTTPS URL using fetch.
 */
const https = require('https')
const http = require('http')

function load(url, options = {}) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http
    lib.get(url, res => {
      let data = ''
      res.on('data', chunk => (data += chunk))
      res.on('end', () => resolve(data))
    }).on('error', err => {
      if (options.fallbackOnError) return resolve('')
      reject(new Error("Failed to fetch URL: " + err.message))
    })
  })
}

module.exports = { load }