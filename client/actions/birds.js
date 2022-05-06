import { getBirds, getUserSightings } from '../apis/birds'

// Variables

export const GET_BIRDS = 'GET_BIRDS'
export const GET_SIGHTINGS = 'GET_SIGHTINGS'

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
