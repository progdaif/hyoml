/**
 * File: formatter_turtle.js
 * Auto-cleaned for consistency
 */
const { format } = require('../src/formats/asTurtle')

const data = {
  name: "Alice",
  email: "alice@example.com"
}

const ttl = format(data, "<user>")
console.log("Turtle Output:\n", ttl)

module.exports = {}