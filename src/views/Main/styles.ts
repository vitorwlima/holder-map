import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.main`
  padding: 4rem;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 3rem;

    svg {
      color: ${colors.warning};
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
    }
  }
`
