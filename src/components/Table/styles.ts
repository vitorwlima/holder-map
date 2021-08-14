import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  table {
    width: 100%;
    border: 1px solid #111111;
    padding: 1rem 0.5rem;

    th {
      padding-bottom: 1rem;
    }

    td {
      text-align: center;
      padding: 0.5rem 0;
    }

    .profit {
      color: ${colors.secondary};
    }

    .loss {
      color: ${colors.warning};
    }
  }
`
