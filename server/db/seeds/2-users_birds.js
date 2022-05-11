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
          timestamp: '2022-05-12T11:28:28.408Z',
          location: 'Khandallah, by Hells Pizza',
        },
        {
          id: 2,
          user_id: 1,
          bird_id: 11,
          timestamp: '2022-05-12T11:45:45.408Z',
          location: 'Karori park back left corner',
        },
        {
          id: 3,
          user_id: 5,
          bird_id: 2,
          timestamp: '2022-05-12T11:53:53.408Z',
          location: 'Near Peoples Coffee Newtown',
        },
        {
          id: 4,
          user_id: 3,
          bird_id: 4,
          timestamp: '2022-05-11T12:04:04.408Z',
          location: 'Te Papa Waterfront',
        },
        {
          id: 5,
          user_id: 2,
          bird_id: 7,
          timestamp: '2022-05-11T12:35:35.408Z',
          location: 'Brooklyn Wind Turbine',
        },
        {
          id: 6,
          user_id: 4,
          bird_id: 5,
          timestamp: '2022-05-11T14:16:16.408Z',
          location: 'Island Bay New World Carpark',
        },
      ])
    })
}
