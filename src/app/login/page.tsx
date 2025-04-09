'use client'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()

  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4'>Iniciar sesión</h1>
      <button onClick={login} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Simular login
      </button>
    </div>
  )
}
