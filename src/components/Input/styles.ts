import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 0.2em;
    border-radius: 0.2em;
    margin-left: 2rem;
    background-color: #c4c4c4;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  label {
    width: 144px;
  }
`
