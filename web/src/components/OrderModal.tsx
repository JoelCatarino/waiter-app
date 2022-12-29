import Modal from 'react-modal'
import { Order } from '../types/Order'
import { ModalContent } from './ModalContent'

interface OrderModalProps {
  isOpen: boolean
  onRequestClose: () => void
  order: Order | null
}

export const OrderModal = ({ isOpen, onRequestClose, order}: OrderModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="bg-opaco backdrop-blur-sm w-full h-full fixed  top-0 left-0 flex items-center justify-center"
      >
        <ModalContent isOpen={true} onRequestClose={onRequestClose} order={order} />
      </Modal>
    </>
  )
}
