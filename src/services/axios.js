import axios from 'axios'
import store from '../store'
import { Types as Loader } from '../store/ducks/loader'

const baseURL = 'http://192.168.0.103:5000/api'

const ApiInstance = axios.create({ baseURL })
// Add tokens on request ...
ApiInstance.interceptors.request.use(
  async config => {
    store.dispatch({ type: Loader.SHOW_LOADER })
    const userToken = await localStorage.getItem('App@token')
    const refreshToken = await localStorage.getItem('App@refreshToken')
    const login = config.url.includes('login')
    const signup = config.url.includes('signup')

    let withAuth = config
    let withoutAuth = config

    if (!login && !signup) {
      withAuth.headers['x-access-token'] = userToken
      withAuth.headers['refresh-token'] = refreshToken
      return withAuth
    }
    if (login || signup) {
      return withoutAuth
    }
  },
  error => {
    // console.log('beforeware error...', error)
    store.dispatch({ type: Loader.HIDE_LOADER })
    return Promise.reject(error)
  }
)

// Replace tokens on response
ApiInstance.interceptors.response.use(
  response => {
    store.dispatch({ type: Loader.HIDE_LOADER })
    return response
  },
  error => {
    const { status } = error.response || { status: 400 }
    if (status === 401) {
      store.dispatch({ type: 'LOGOUT' })
    }
    store.dispatch({ type: Loader.HIDE_LOADER })
    // Do something with response error
    return Promise.reject(error)
  }
)

export default ApiInstance
