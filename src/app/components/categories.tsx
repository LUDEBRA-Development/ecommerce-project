'use client'

import { CategoriesCard } from './categories-card'

export function Categorias() {
  return (
    <div className='mt-3'>
      <h1 className='text-3xl text-black w-full pl-6 pt-2 font-medium mb-4'>Categorias</h1>
      <div className='mt-2 flex flex-row flex-wrap w-full h-64 gap-3 items-center justify-center'>
        {/* !Despues de aca van los cards */}
        <CategoriesCard nombre='Titeres' />
        <CategoriesCard nombre='Escenarios' />
        <CategoriesCard nombre='Llaveros' />
        <CategoriesCard nombre='Collares' />
        <CategoriesCard nombre='Aretes' />
      </div>
    </div>
  )
}
