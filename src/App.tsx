import React, { useCallback, useState } from 'react'
import { Container } from './AppStyles'
import { Button, Table, NewAssetModal } from './components'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      <Container>
        <header>
          <h1>Meus ativos</h1>
          <Button onClick={handleOpenModal}>Novo ativo</Button>
        </header>
        <Table />
      </Container>
      <NewAssetModal isOpen={isOpen} handleClose={handleCloseModal} />
    </>
  )
}

export default App
