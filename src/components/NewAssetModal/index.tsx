import React, { useState } from 'react'
import Modal from 'react-modal'
import { Button, Input } from '../'
import { IAsset } from '../../interfaces'
import { api } from '../../services/api'
import { Container } from './styles'

interface INewAssetModalProps {
  isOpen: boolean
  handleClose: () => void
  setAssets: React.Dispatch<React.SetStateAction<IAsset[]>>
}

export const NewAssetModal = ({ isOpen, handleClose, setAssets }: INewAssetModalProps) => {
  const [assetCode, setAssetCode] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minHeight: '50%',
      minWidth: '50%',
      display: 'flex',
      background: '#F5F5F5',
    },
  }

  const handleAddAsset = async () => {
    try {
      const { data } = await api.post('/asset', { assetCode: assetCode.toUpperCase(), price, quantity })
      setAssets(previousAssets => [...previousAssets, data])
      handleClose()
    } catch (error) {
      console.log(error)
      handleClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={customStyles} ariaHideApp={false}>
      <Container>
        <div className='main'>
          <h1>Novo ativo</h1>
          <div className='inputs'>
            <Input nameId='asset' label='Ativo:' value={assetCode} onChange={e => setAssetCode(e.target.value)} />
            <Input
              nameId='price'
              label='Preço (em reais):'
              type='number'
              value={price}
              onChange={e => setPrice(+e.target.value)}
            />
            <Input
              nameId='quantity'
              label='Quantidade:'
              type='number'
              value={quantity}
              onChange={e => setQuantity(+e.target.value)}
            />
          </div>
        </div>
        <div className='buttons-wrapper'>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAddAsset}>Salvar</Button>
        </div>
      </Container>
    </Modal>
  )
}
