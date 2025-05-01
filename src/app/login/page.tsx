'use client'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()

  return (
    <div className='p-4'>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col justify-center items-center h-96 w-96'>
          <h1 className='text-2xl mb-[60%] font-bold '>Ingresa tu e-mail o numero de telefono para iniciar sesion</h1>
        </div>
        <div className='p-4 flex flex-col border-2 border-gray-300 h-96 w-96 justify-center items-center  gap-2.5 rounded-2xl'>
          <div className='flex flex-col w-full'>
            <p>E-mail</p>
            <input
              type='text'
              className='w-full rounded border-2 border-black text-black pl-3 focus:border-[#6B056E]'
            />
          </div>
          <div className='flex flex-col w-full'>
            <p>Contraseña</p>
            <input
              type='text'
              className='w-full rounded border-2 border-black text-black pl-3 focus:border-[#6B056E]'
            />
          </div>
          <button
            onClick={login}
            className='bg-[#6B056E] text-white px-4 py-2 rounded w-full h-10 cursor-pointer hover:bg-[#B557A3]'
          >
            Simular login
          </button>
        </div>
      </div>
    </div>
  )
}
