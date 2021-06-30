import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

const Dashboard = () => {
  const dispatch = useDispatch()

  return (
    <S.Container>
      <p>Dashboard.</p>
    </S.Container>
  )
}

export default Dashboard
