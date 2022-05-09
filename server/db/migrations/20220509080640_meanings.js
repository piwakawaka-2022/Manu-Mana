/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
exports.up = function (knex) {
  return knex.schema.table('birds', (table) => {
    table.text('meaning')
  })
}

exports.down = function (knex) {
  return knex.schema.table('birds', (table) => {
    table.dropColumn('meaning')
  })
}
