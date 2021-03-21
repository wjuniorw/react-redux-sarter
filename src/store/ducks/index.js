import { combineReducers } from 'redux'
import { resettableReducer } from 'reduxsauce'

import user from './user'
import loader from './loader'
import session from './session'

const resettableUser = resettableReducer('LOGOUT')
const resetSession = resettableReducer('LOGOUT')

const reducers = combineReducers({
  loader,
  session: resetSession(session),
  user: resettableUser(user),
})

export default reducers
