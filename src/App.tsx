import React, { useState, useEffect } from 'react'
import { SnackbarProvider } from 'notistack'
import { Login, Main } from './views'
import { IUser } from './interfaces'
import { api } from './services/api'

const App = () => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const loginWithToken = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        const { data } = await api.get(`/user/${token}`)
        if (data) {
          setUser(data.user)
          localStorage.setItem('token', data.newToken)
        }
      }
    }

    loginWithToken()
  }, [])

  return (
    <SnackbarProvider>{user ? <Main user={user} setUser={setUser} /> : <Login setUser={setUser} />}</SnackbarProvider>
  )
}

export default App
