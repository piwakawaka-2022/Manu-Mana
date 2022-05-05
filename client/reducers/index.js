import { combineReducers } from 'redux'
import auth from './auth'
import birds from './birds'
import markers from './markers'

export default combineReducers({
  auth,
  birds,
  markers,
})
