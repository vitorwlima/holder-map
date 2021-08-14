import React from 'react'
import { SnackbarProvider } from 'notistack'
import { Main } from './views'

const App = () => {
  return (
    <SnackbarProvider>
      <Main />
    </SnackbarProvider>
  )
}

export default App
