/* eslint-disable comma-dangle */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('markers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('markers').insert([
        {
          id: 1,
          name: 'Kaka',
          lat: -41.298493517295654,
          lng: 174.79978666984925,
        },
      ])
    })
}
