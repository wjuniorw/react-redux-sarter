import React from 'react'
import { InputLarge } from './styles'

const Input = ({ value, name, required, inputref, ...props }) => {
  const val = value[name]

  return (
    <InputLarge {...props}>
      <input {...props} ref={inputref} value={val} />
      <span />
    </InputLarge>
  )
}

export default Input
