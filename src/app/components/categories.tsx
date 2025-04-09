'use client'
export function Categorias() {
  return (
    <div className='mt-3'>
      <h1 className='text-3xl text-black w-full pl-6 pt-2 font-medium'>Categorias</h1>
      <div className='mt-2 flex flex-row flex-wrap w-full h-64 gap-3 items-center justify-center'>
        {/* !Despues de aca van los cards */}
        <div className='flex flex-col justify-center items-center bg-[#ece6f0] w-1/6 h-full p-1 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105'>
          <div className='bg-[#dbdce0] w-[90%] h-[90%] rounded-xl mt-3'>{/* Aqui va una imagen  */}</div>
          <div className='w-full'>
            <p className='text-xl font-bold ml-3 mb-2'>Titeres</p>
          </div>
        </div>
        {/* una  */}
        <div className='flex flex-col justify-center items-center bg-[#ece6f0] w-1/6 h-full p-1 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105'>
          <div className='bg-[#dbdce0] w-[90%] h-[90%] rounded-xl mt-3'>{/* Aqui va una imagen  */}</div>
          <div className='w-full'>
            <p className='text-xl font-bold ml-3 mb-2'>Escenarios</p>
          </div>
        </div>
        {/* dos  */}
        <div className='flex flex-col justify-center items-center bg-[#ece6f0] w-1/6 h-full p-1 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105'>
          <div className='bg-[#dbdce0] w-[90%] h-[90%] rounded-xl mt-3'>{/* Aqui va una imagen  */}</div>
          <div className='w-full'>
            <p className='text-xl font-bold ml-3 mb-2'>Llaveros</p>
          </div>
        </div>
        {/* tres  */}
        <div className='flex flex-col justify-center items-center bg-[#ece6f0] w-1/6 h-full p-1 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105'>
          <div className='bg-[#dbdce0] w-[90%] h-[90%] rounded-xl mt-3'>{/* Aqui va una imagen  */}</div>
          <div className='w-full'>
            <p className='text-xl font-bold ml-3 mb-2'>Collares</p>
          </div>
        </div>
        {/* cuatro  */}
        <div className='flex flex-col justify-center items-center bg-[#ece6f0] w-1/6 h-full p-1 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105'>
          <div className='bg-[#dbdce0] w-[90%] h-[90%] rounded-xl mt-3'>{/* Aqui va una imagen  */}</div>
          <div className='w-full'>
            <p className='text-xl font-bold ml-3 mb-2'>Aretes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
