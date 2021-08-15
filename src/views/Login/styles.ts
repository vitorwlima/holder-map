import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  padding: 1rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid black;
      border-radius: 0.2em;
      padding: 1em 2em;
      margin-bottom: 1rem;
    }

    button {
      margin-top: 1rem;
    }
  }
`
