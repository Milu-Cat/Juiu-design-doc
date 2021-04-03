import { createStore, combineReducers } from 'redux'
import userReducer from './user'

const reducer = combineReducers({
  userReducer
})
export default createStore(
  reducer
)