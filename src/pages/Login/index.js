import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

import { Creators } from '../../store/ducks/user'
const { userLogin } = Creators

import * as S from './styles'
import colors from '../../global/colors'

import { Button, InputLarge } from '../../components/atoms'

const Login = () => {
  const dispatch = useDispatch()
  const { error } = useSelector(state => state.session)
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [color, setColor] = useState('#22bad9')

  const login = () => {
    dispatch(userLogin({ email, senha, nav: history }))
  }

  const pass = useRef()
  const submitInput = e => {
    if (e.key === 'Enter') {
      pass.current.focus()
    }
  }

  useEffect(() => {
    console.log('errror', error)
    const color = error ? colors.error : colors.blue
    setColor(color)
  }, [error])

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <img
            alt="logo"
            src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
          />
        </S.Logo>
        <InputLarge
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          color={color}
          onKeyPress={e => submitInput(e)}
          onChange={({ target }) => setEmail(target.value)}
        />
        <InputLarge
          placeholder="Senha"
          type="password"
          name="senha"
          value={senha}
          color={color}
          inputref={pass}
          onChange={({ target }) => setSenha(target.value)}
        />
        <Button onClick={() => login()} text="Login" />
      </S.Content>
    </S.Container>
  )
}

export default Login
