import React, { ReactNode } from 'react'
import { Container } from './styles'

interface IButtonProps {
  children: ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick }: IButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>
}
