import React from 'react'
import { Container } from './styles'

interface IInputProps {
  label: string
  nameId: string
  type?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  value?: string | number | readonly string[] | undefined
}

export const Input = ({ label, nameId, type = 'text', onChange, value }: IInputProps) => {
  return (
    <Container>
      <label id={nameId}>{label}</label>
      <input type={type} id={nameId} name={nameId} onChange={onChange} value={value} />
    </Container>
  )
}
