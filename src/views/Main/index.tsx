import React, { useCallback, useEffect, useState } from 'react'
import { Button, NewAssetModal, Table } from '../../components'
import { IAsset } from '../../interfaces'
import { api } from '../../services/api'
import { Container } from './styles'

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [assets, setAssets] = useState<IAsset[]>([])

  const handleOpenModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    const getAssets = async () => {
      try {
        const { data } = await api.get('/assets')
        setAssets(data)
      } catch (error) {
        console.log(error)
      }
    }

    getAssets()
  }, [])

  return (
    <>
      <Container>
        <header>
          <h1>Meus ativos</h1>
          <Button onClick={handleOpenModal}>Novo ativo</Button>
        </header>
        <Table assets={assets} />
      </Container>
      <NewAssetModal isOpen={isOpen} handleClose={handleCloseModal} setAssets={setAssets} />
    </>
  )
}
