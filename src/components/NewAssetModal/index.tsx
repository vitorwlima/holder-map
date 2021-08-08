import React from 'react'
import Modal from 'react-modal'
import { Button, Input } from '../'
import { Container } from './styles'

interface INewAssetModalProps {
  isOpen: boolean
  handleClose: () => void
}

export const NewAssetModal = ({ isOpen, handleClose }: INewAssetModalProps) => {
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

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={customStyles}>
      <Container>
        <div className='main'>
          <h1>Novo ativo</h1>
          <div className='inputs'>
            <Input nameId='asset' label='Ativo:' />
            <Input nameId='price' label='Preço (em reais):' type='number' />
            <Input nameId='quantity' label='Quantidade:' type='number' />
          </div>
        </div>
        <div className='buttons-wrapper'>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => {}}>Salvar</Button>
        </div>
      </Container>
    </Modal>
  )
}
