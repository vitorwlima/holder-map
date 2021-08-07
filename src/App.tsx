import React from 'react'
import { Container } from './AppStyles'
import { Button } from './components/Button'
import { Table } from './components/Table'

const App = () => {
  return (
    <Container>
      <header>
        <h1>Meus ativos</h1>
        <Button>Novo ativo</Button>
      </header>
      <Table />
    </Container>
  )
}

export default App
