'use client'
import Link from 'next/link'
export function CategoriesCard({ nombre }: { nombre: string }) {
  return (
    <Link
      href={`/categories/${nombre.toLowerCase()}`}
      className='flex flex-col justify-center items-center bg-[#ece6f0] w-1/6 h-full p-1 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105'
    >
      <div className='bg-[#dbdce0] w-[90%] h-[90%] rounded-xl mt-3'>{/* Aqui va una imagen  */}</div>
      <div className='w-full'>
        <p className='text-xl font-bold ml-3 mb-2'>{nombre}</p>
      </div>
    </Link>
  )
}
