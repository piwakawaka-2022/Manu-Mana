/* eslint-disable comma-dangle */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('markers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('markers')
    })
}
