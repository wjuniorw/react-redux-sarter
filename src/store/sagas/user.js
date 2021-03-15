import { call, put, select, take } from 'redux-saga/effects'
import { Types } from '../ducks/user'
import { Creators as sessionActions } from '../ducks/session'

import { login as tryLogin } from './apiCalls'

const { loadError } = sessionActions

export function* login({ params: { nav, ...params } }) {
  try {
    console.log('saga login ===>', params)
    const { data: resp } = yield call(tryLogin, params)
    console.log('resp login===>', resp)
    const { token, refreshToken, ...user } = resp
    const res = { ...user, token, refreshToken }
    yield call(localStorage.setItem, 'App@User', JSON.stringify(user))
    yield call(localStorage.setItem, 'App@token', token)
    yield call(localStorage.setItem, 'App@refreshToken', refreshToken)

    yield put({ type: Types.LOGIN_SUCESS, data: res })
    yield put({ type: 'LOG_IN' })
    yield call(nav.push, '/dash')
  } catch (err) {
    yield put(loadError())
    console.log('error login saga ===>', err.message)
    if (!err.response) alert('Falha na requisicão...')
    if (err.response) {
      const {
        response: { data },
      } = err
      // yield call(alert, `Erro: ${data.message}`)
    }
  }
}

export function* loadUser({ param }) {
  console.log('<====load user====>')
  yield take('LOAD_USER')
  try {
    const user = yield call(localStorage.getItem, 'App@User')
    if (!!user) {
      const data = yield call(JSON.parse, user)
      console.log('user loaded ========>', data)
      yield put({ type: Types.LOGIN_SUCESS, data })
    }
  } catch (e) {
    console.log('error load user from storage====>', e.message)
    alert('Error: ', e.message)
  }
}

export function* logOut() {
  yield call(localStorage.removeItem, 'App@User')
  yield call(localStorage.removeItem, 'App@token')
  yield call(localStorage.removeItem, 'App@refreshToken')
}
