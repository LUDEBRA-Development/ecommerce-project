export default function Categorias({ params }: { params: { categorias: string } }) {
  return (
    <div>
      <h1 className='text-3xl mt-[500] text-black'>{params.categorias}</h1>
    </div>
  )
}
