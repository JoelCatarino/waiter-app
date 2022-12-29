import logo from '/images/logo.svg'

export function Header() {
  return (
    <>
      <div className="bg-red flex justify-center h-48 items-center">
        <div className='mx-2 w-full flex max-w-screen-xl items-center justify-between'>
          <div>
            <h1 className='text-4xl text-white'>Pedidos</h1>
            <h2 className='text-white font-normal text-base opacity-60 mt-4'>Acompanhe os pedidos dos clientes</h2>
          </div>
          <img src={logo} alt="waiter-app" />
        </div>
      </div>
    </>
  )
}
