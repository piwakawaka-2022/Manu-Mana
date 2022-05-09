import { getBirds, getUserSightings, addBirdSighting } from '../apis/birds'

// Variables

export const GET_BIRDS = 'GET_BIRDS'
export const GET_SIGHTINGS = 'GET_SIGHTINGS'
export const ADD_SIGHTING = 'ADD_SIGHTING'

// Action Creators

export function getAllBirds(birds) {
  return {
    type: GET_BIRDS,
    birds,
  }
}

export function getBirdSightings(sightings) {
  return {
    type: GET_SIGHTINGS,
    sightings,
  }
}

export function addSighting(newSighting) {
  return {
    type: ADD_SIGHTING,
    newSighting,
  }
}

// Thunks

export function getBirdsThunk() {
  return (dispatch) => {
    getBirds() // api call
      .then((birdArray) => {
        return dispatch(getAllBirds(birdArray)) // dispatches action to reducer
      })
      .catch((err) => {
        dispatch(Error(err.message))
      })
  }
}

export function getSightingsThunk() {
  return (dispatch) => {
    getUserSightings()
      .then((birdArray) => {
        return dispatch(getBirdSightings(birdArray))
      })
      .catch((err) => {
        dispatch(Error(err.message))
      })
  }
}

export function addSightingThunk(newSighting) {
  return (dispatch) => {
    addBirdSighting(newSighting)
      .then((birdData) => {
        return dispatch(addSighting(birdData))
      })
      .then(() => {
        return dispatch(getSightingsThunk())
      })
      .then(() => {
        return dispatch(getBirdsThunk())
      })
      .catch((err) => {
        dispatch(Error(err.message))
      })
  }
}
