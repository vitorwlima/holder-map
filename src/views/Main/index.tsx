import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'

import { Button, NewAssetModal, Table } from '../../components'
import { IAsset, IUser } from '../../interfaces'
import { api } from '../../services/api'
import { Container } from './styles'

interface IMainProps {
  user: IUser
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

export const Main = ({ user, setUser }: IMainProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [assets, setAssets] = useState<IAsset[]>([])

  const token = localStorage.getItem('token')
  api.defaults.headers['Authorization'] = `Bearer ${token}`

  const handleOpenModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token')
    setUser(null)
  }, [setUser])

  useEffect(() => {
    const getAssets = async () => {
      const { data } = await api.get('/assets')
      setAssets(data)
    }

    getAssets()
  }, [])

  return (
    <>
      <Container>
        <header>
          {user.username}
          <AiOutlineLogout onClick={handleLogout} />
        </header>
        <div>
          <h1>Meus ativos</h1>
          <Button onClick={handleOpenModal}>Novo ativo</Button>
        </div>
        <Table assets={assets} />
      </Container>
      <NewAssetModal isOpen={isOpen} handleClose={handleCloseModal} setAssets={setAssets} />
    </>
  )
}
