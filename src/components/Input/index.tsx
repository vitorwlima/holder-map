import React from 'react'
import { Container } from './styles'

interface IInputProps {
  label: string
  nameId: string
  type?: string
}

export const Input = ({ label, nameId, type = 'text' }: IInputProps) => {
  return (
    <Container>
      <label id={nameId}>{label}</label>
      <input type={type} id={nameId} name={nameId} />
    </Container>
  )
}
