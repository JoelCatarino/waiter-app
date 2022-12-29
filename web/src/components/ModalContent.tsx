import { X } from 'phosphor-react'
import { Order } from '../types/Order'
import { formatCurrency } from '../utils/formatCurrency'

interface ModalContentProps {
  onRequestClose: () => void
  isOpen: boolean
  order: Order | null
}

export function ModalContent({ onRequestClose, isOpen, order }: ModalContentProps) {
  if (!isOpen || !order) {
    return null
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity)
  }, 0)

  return (
    <>
      <div className="w-2/5 rounded-lg p-8 bg-white">
        <div className='flex justify-between'>
          <strong className='text-xl'>Mesa {order.table}</strong>
          <button className='' onClick={onRequestClose}><X size={18} /></button>
        </div>
        <div className='mt-8'>
          <small className='decoration-8 text-xs text-brownLight'>Status do pedido</small>
          <div className='mt-2'>
            <span className='mr-1'>{order.status === 'WAITING' && '⏲️'}{order.status === 'IN_PRODUCTION' && '🧑‍🍳'}{order.status === 'DONE' && '✅'}</span>
            <strong className='text-lg'>{order.status === 'WAITING' && 'Fila de espera'}{order.status === 'IN_PRODUCTION' && 'Em preparação'}{order.status === 'DONE' && 'Pronto!'}</strong>
          </div>
        </div>
        <div className='mt-8'>
          <strong className='text-brownLight text-sm font-medium'>Itens</strong>
          <div className='mt-4'>
            {order.products.map(({ _id, product, quantity }) => (
              <div className='flex  mt-2' key={_id}>
                <img className='w-12 h-8 rounded-md' src={`http://localhost:3001/uploads/${product.imagePath}`} alt="" />
                <span className='text-sm ml-3 text-brownLight block min-w-min-w-20'>{quantity}x</span>
                <div className="">
                  <strong className='block'>{product.name}</strong>
                  <span className='text-sm text-brownLight'>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-6 flex justify-between'>
            <strong className='text-brownLight text-sm font-medium'>Total</strong>
            <strong>{formatCurrency(total)}</strong>
          </div>
          <div className="flex justify-center flex-col mt-8">
            <button className=' bg-darkBrown text-white px-6 py-3 rounded-full'>🧑‍🍳 Iniciar Produção</button>
            <button className=' text-red px-6 py-3 mt-3' onClick={onRequestClose}>Cancelar Produção</button>
          </div>
        </div>
      </div>

    </>
  )
}
