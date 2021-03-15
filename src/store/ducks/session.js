import Immutable from 'seamless-immutable'
import { createActions, createReducer } from 'reduxsauce'

// creating a immutable iniial state
const INITIAL_STATE = Immutable({
  logedIn: false,
  error: false,
})

// creating all types and action creators for reducer...
export const { Types, Creators } = createActions({
  // sagas...
  userLogin: ['params'],
  logout: [],
  loadUser: [],
  // store...
  loadSucess: ['data'],
  loadError: [],
})

// creating reducer mutations...
const success = (state = INITIAL_STATE, { data }) => {
  return state.merge(data)
}
const loadError = (state = INITIAL_STATE, { data }) => {
  return state.merge({ error: true })
}

// creating reducer...
export default createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCESS]: success,
  [Types.LOAD_ERROR]: loadError,
})
