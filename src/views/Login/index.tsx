import { useSnackbar } from 'notistack'
import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { Button } from '../../components'
import { IUser } from '../../interfaces'
import { api } from '../../services/api'
import { Container } from './styles'

interface ILoginProps {
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

export const Login = ({ setUser }: ILoginProps) => {
  const { enqueueSnackbar } = useSnackbar()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = useCallback(
    async event => {
      event.preventDefault()

      try {
        const { data } = await api.post('/authenticate', { username, password })
        localStorage.setItem('token', data.token)
        setUser(data.user)
      } catch (error) {
        const errorMessage =
          (error.response && error.response.data && error.response.data.error) || 'Ocorreu um erro. Tente novamente.'
        enqueueSnackbar(errorMessage, { variant: 'error' })
      }
    },
    [username, password, enqueueSnackbar, setUser]
  )

  return (
    <Container>
      <h1>HOLDER MAP</h1>
      <form>
        <input
          placeholder='Usuário'
          name='username'
          id='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          placeholder='Senha'
          name='password'
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Entrar</Button>
      </form>
    </Container>
  )
}
