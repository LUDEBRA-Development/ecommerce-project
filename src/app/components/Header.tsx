import Link from 'next/link'

export function Header() {
  return (
    <div className='w-full h-14 bg-black flex justify-center items-center flex-row p-1'>
      <ul className='flex flex-row justify-center items-center text-gray-300 gap-2.5 h-full font-bold'>
        <li className='transition duration-300 ease-in-out p-1 rounded hover:text-black hover:bg-gray-300'>
          <Link href='/categories'>Productos</Link>
        </li>
        <li className='transition duration-300 ease-in-out p-1 rounded hover:text-black hover:bg-gray-300'>
          <Link href='/contact'>Contacto</Link>
        </li>
        <li className='transition duration-300 ease-in-out p-1 rounded hover:text-black hover:bg-gray-300'>
          <Link href='/cart'>Carrito</Link>
        </li>
        <li className='transition duration-300 ease-in-out p-1 rounded hover:text-black hover:bg-gray-300'>
          <Link href='/login'>Iniciar Sesión</Link>
        </li>
        <li className='transition duration-300 ease-in-out p-1 rounded hover:text-black hover:bg-gray-300'>
          <Link href='/signup'>Registrarse</Link>
        </li>
      </ul>
    </div>
  )
}
