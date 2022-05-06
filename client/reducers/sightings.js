import { GET_SIGHTINGS } from '../actions/birds'

const sightings = (state = [], action) => {
  switch (action.type) {
    case GET_SIGHTINGS:
      return action.sightings

    default:
      return state
  }
}

export default sightings
