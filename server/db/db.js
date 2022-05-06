/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
const conn = require('./connection')

function getAllBirds(db = conn) {
  return db('birds').select()
}

function getAllBirdsUsers(db = conn) {
  return db('birds')
    .join('users_birds', 'birds.id', 'users_birds.bird_id')
    .join('users', 'users_birds.user_id', 'users.id')
    .select('*', 'users.id as user_id', 'birds.id as bird_id')
}

function getUserBirds(db = conn) {
  return db('birds')
    .join('users_birds', 'birds.id', 'users_birds.bird_id')
    .join('users', 'users_birds.user_id', 'users.id')
    .select('*', 'users.id as user_id', 'birds.id as bird_id')
}

function addBird(newBirdSighting, db = conn) {
  return db('users_birds').insert(newBirdSighting)
}

function dbMarkers(db = conn) {
  return db('markers').select()
}

function getMarker(id, db = conn) {
  return db('markers').where('id', id).first()
}

function dbAddMarker(markerObj, db = conn) {
  return db('markers').insert({
    name: markerObj.name,
    lat: markerObj.coords.lat,
    lng: markerObj.coords.lng,
  })
}

module.exports = {
  getAllBirds,
  addBird,
  dbMarkers,
  dbAddMarker,
  getMarker,
  getAllBirdsUsers,
  getUserBirds,
}
