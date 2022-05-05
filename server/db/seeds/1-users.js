/* eslint-disable comma-dangle */
const { generateHash } = require('authenticare/server')

const replacePasswordWithHash = (user) => {
  // eslint-disable-next-line camelcase
  const { id, username, email_address, contact_details } = user
  return generateHash(user.password).then((hash) => {
    return {
      id,
      username,
      email_address,
      contact_details,
      hash,
    }
  })
}

const fakeUserData = [
  {
    id: 1,
    username: 'admin',
    password: 'Krang',
    email_address: 'hello@devacademy.co.nz',
    contact_details: 'Ring the bell ;)',
  },
  {
    id: 2,
    username: 'Mary',
    email_address: 'mary@email.com',
    contact_details: 'call me',
    password: 'hungry',
  },
  {
    id: 3,
    username: 'Roger',
    email_address: 'roger@email.com',
    contact_details: 'fb me',
    password: 'burgers',
  },
  {
    id: 4,
    username: 'Josh',
    email_address: 'josh@email.com',
    contact_details: 'dont come at me',
    password: 'cheese',
  },
]

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(() => fakeUserData.map(replacePasswordWithHash))
    .then((fakeUserPromises) => Promise.all(fakeUserPromises))
    .then((users) => knex('users').insert(users))
}
