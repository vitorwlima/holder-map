import React from 'react'
import Modal from 'react-modal'
import { Button } from '../Button'
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
    },
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={customStyles}>
      <Container>
        <div className='main'>
          <h1>Nova compra</h1>
        </div>
        <div className='buttons-wrapper'>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => {}}>Salvar</Button>
        </div>
      </Container>
    </Modal>
  )
}
