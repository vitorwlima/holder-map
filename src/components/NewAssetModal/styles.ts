import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .main {
    flex: 1;

    h1 {
      font-size: 1.5rem;
    }

    .inputs {
      margin-top: 2rem;

      div {
        margin-bottom: 1rem;
      }
    }
  }

  .buttons-wrapper {
    display: flex;
    justify-content: space-between;

    button:first-child {
      background-color: ${colors.warning};

      &:hover {
        background-color: ${colors.warningSecondary};
      }
    }
  }
`
