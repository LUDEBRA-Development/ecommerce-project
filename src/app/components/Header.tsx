'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { IconShoppingCartFilled } from '@tabler/icons-react'

export function Header() {
  const { isLoggedIn, logout } = useAuth()

  return (
    // bg-gray-800
    <div className='w-full h-20 bg-gray-50 flex justify-between items-center flex-row p-8 border-[#6B056E] border-b-2'>
      <Link href='/'>
        <Image src='/logo1.png' alt='Logo' width={80} height={80} className='cursor-pointer'/>
      </Link>
      <ul className='flex flex-row justify-center items-center text-gray-600 gap-3 h-full font-bold'>
        {/* hover:text-black hover:bg-gray-300 */}
        <li className='transition duration-300 ease-in-out p-1 rounded hover:text-white hover:bg-[#6B056E]'>
          <Link href='/categories'>Productos</Link>
        </li>
        <li className='transition duration-300 ease-in-out p-1 rounded hover:text-white hover:bg-[#6B056E]'>
          <Link href='/contact'>Contacto</Link>
        </li>
        <li className='transition duration-300 ease-in-out p-1 rounded hover:text-white hover:bg-[#6B056E]'>
          <Link href='/about-us'>Sobre Nosotros</Link>
        </li>
        <li className='transition duration-300 ease-in-out p-1 rounded hover:text-white hover:bg-[#6B056E]'>
          <Link href='/cart'>
            <IconShoppingCartFilled />
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className='transition duration-300 ease-in-out p-1 rounded hover:text-black hover:bg-gray-300'>
              <Link href='/profile'>Perfil</Link>
            </li>
            <li
              onClick={logout}
              className='cursor-pointer transition duration-300 ease-in-out p-1 rounded hover:text-black hover:bg-red-200'
            >
              Cerrar sesión
            </li>
          </>
        ) : (
          <>
            <li className='transition duration-300 ease-in-out p-1 rounded hover:text-white hover:bg-[#6B056E]'>
              <Link href='/login'>Iniciar Sesión</Link>
            </li>
            <li className='transition duration-300 ease-in-out p-1 rounded hover:text-white hover:bg-[#6B056E]'>
              <Link href='/signup'>Registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
