import { getBirds } from '../apis/birds'

// Variables

export const GET_BIRDS = 'GET_BIRDS'

// Action Creators

export function getAllBirds(birds) {
  return {
    type: GET_BIRDS,
    birds,
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
