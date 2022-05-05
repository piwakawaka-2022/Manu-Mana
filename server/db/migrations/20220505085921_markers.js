exports.up = function (knex) {
  return knex.schema.createTable('markers', (table) => {
    table.increments('id')
    table.string('name')
    table.decimal('lat', 30, 15)
    table.decimal('lng', 30, 15)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('markers')
}
