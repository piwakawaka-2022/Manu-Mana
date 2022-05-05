import { combineReducers } from 'redux'
import auth from './auth'
import birds from './birds'

export default combineReducers({
  auth,
  birds,
})
