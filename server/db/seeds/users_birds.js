/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_birds')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users_birds').insert([
        {
          id: 1,
          user_id: 1,
          bird_id: 10,
          timestamps: true,
          location: 'Khandallah',
        },
        {
          id: 2,
          user_id: 1,
          bird_id: 11,
          timestamps: true,
          location: 'Karori',
        },
        {
          id: 3,
          user_id: 1,
          bird_id: 2,
          timestamps: true,
          location: 'Newtown',
        },
      ])
    })
}
