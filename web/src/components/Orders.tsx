import { Order } from '../types/Order'
import { Cards } from './Cards'

const orders: Order[] = [
  {
    '_id': '637d30f05ea29e23d248fe73',
    'table': '1',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza',
          'imagePath': '1669145371297-quatro-queijos.png',
          'price': 40,

        },
        'quantity': 5,
        '_id': '637d30f05ea29e23d248fe74'
      },
      {
        'product': {
          'name': 'Coca',
          'imagePath': '1669145726463-coca-cola.png',
          'price': 7,

        },
        'quantity': 1,
        '_id': '637d30f05ea29e23d248fe74'
      },
    ],

  }
]

export function Orders() {
  return (
    <>
      <div className="w-full max-w-6xl m-auto mt-10 flex gap-8">
        <Cards icon='⏲️' title='Fila de espera' orders={orders} />
        <Cards icon='🧑‍🍳' title='Em preparação' orders={[]} />
        <Cards icon='✅' title='Feito' orders={[]} />
      </div>
    </>
  )
}
