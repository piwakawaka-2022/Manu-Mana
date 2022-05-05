import { ADD_MARKER, RECEIVE_MARKERS } from '../actions/markers'

function markers(state = [], action) {
  switch (action.type) {
    case RECEIVE_MARKERS:
      return action.marker

    case ADD_MARKER:
      return [...state, action.marker]

    default:
      return state
  }
}

export default markers
