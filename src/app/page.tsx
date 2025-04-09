import { Categorias } from './components/categories'
import { HomeCarrousel } from './components/home-carrousel'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <HomeCarrousel />
      <Categorias />
    </div>
  )
}
