import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.button`
  background-color: ${colors.primary};
  padding: 0.8em 2.4em;
  border-radius: 0.2em;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary};
  }
`
