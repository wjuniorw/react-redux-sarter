import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import * as S from './styles'

import { Creators } from '../../store/ducks/user'
const { loadUser } = Creators

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <S.Container>
      <p>Edit src/App.tsx and save to reload.</p>
      <NavLink className="App-link" to="/login" rel="noopener noreferrer">
        Login
      </NavLink>
    </S.Container>
  )
}

export default Home
