import { Order } from '../types/Order'
import { OrderModal } from './OrderModal'
import { useState } from 'react'
import Modal from 'react-modal'

interface CardProps {
  icon: string
  title: string
  orders: Order[]
}

Modal.setAppElement('#root')

export function Cards({ icon, title, orders }: CardProps) {
  const [IsOrderOpen, setOpen] = useState(false)
  const [IsSelectedOrder, setSelectedOrder] = useState<null | Order>(null)

  function handleOpenOrder(order: Order) {
    setOpen(true)
    setSelectedOrder(order)
  }

  function handleCloseOrder() {
    setOpen(false)
  }

  return (
    <>
      <OrderModal order={IsSelectedOrder} isOpen={IsOrderOpen} onRequestClose={handleCloseOrder} />
      <div className="flex-1 p-4  rounded-md flex flex-col items-center">
        <div className="p-2 mb-4 text-sm flex items-center gap-2">
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </div>
        {orders.map((order) => (
          <button onClick={() => handleOpenOrder(order)} key={order._id} className="w-full bg-white  h-32  rounded-md flex flex-col justify-center items-center gap-1" type="button">
            <strong className="font-semibold">Mesa {order.table}</strong>
            <span className="text-sm text-brownLight">{order.products.length} itens</span>
          </button>
        ))}
      </div>
    </>
  )
}
