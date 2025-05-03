/**
 * File: asSQL.js
 * Auto-cleaned and documented (v3-9)
 */
function formatSQL(data, table = 'my_table') {
  const keys = Object.keys(data).map(k => `\`${k}\``).join(', ')
  const values = Object.values(data).map(v => `'${v}'`).join(', ')
  return `INSERT INTO ${table} (${keys}) VALUES (${values})`
}
module.exports = { format: formatSQL }