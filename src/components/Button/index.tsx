import React, { ReactNode } from 'react'
import { Container } from './styles'

interface IButtonProps {
  children: ReactNode
}

export const Button = ({ children }: IButtonProps) => {
  return <Container>{children}</Container>
}
