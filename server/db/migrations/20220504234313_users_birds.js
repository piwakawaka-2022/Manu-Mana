exports.up = function (knex) {
  return knex.schema.createTable('users_birds', (table) => {
    table.increments('id')
    table.integer('bird_id')
    table.integer('user_id')
    table.string('location')
    table.timestamps('timestamps')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users_birds')
}
