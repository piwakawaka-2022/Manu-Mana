exports.up = function (knex) {
  return knex.schema.createTable('birds', (table) => {
    table.increments('id')
    table.string('name')
    table.string('maori_name')
    table.string('photo')
    table.text('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('birds')
}
