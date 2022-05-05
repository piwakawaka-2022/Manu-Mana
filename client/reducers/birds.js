import { GET_BIRDS } from '../actions/birds'

const birds = (state = [], action) => {
  switch (action.type) {
    case GET_BIRDS:
      return action.birds

    default:
      return state
  }
}

export default birds
