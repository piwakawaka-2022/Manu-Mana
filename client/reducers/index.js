import { combineReducers } from 'redux'
import auth from './auth'
import birds from './birds'
import markers from './markers'
import sightings from './sightings'

export default combineReducers({
  auth,
  birds,
  markers,
  sightings,
})
