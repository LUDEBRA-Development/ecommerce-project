import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <div className='flex flex-col bg-gray-800 w-full mt-5 border-[#6B056E] border-t-2'>
      <div className='p-4 flex flex-row gap-6'>
        <ul className=' flex flex-col gap-0.5'>
          <li className='text-gray-400 font-bold hover:text-white mb-32 flex items-center justify-center'>
            <Image src='/logo1.png' alt='Logo' width={80} height={80} />
          </li>
          <li className='text-gray-400 font-bold'>© 2025 Distr&Arte</li>
        </ul>

        <ul className=' flex flex-col gap-0.5 ml-12'>
          <li className='text-white font-bold mb-2'>Resources</li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'>
            <a
              href='https://github.com/LUDEBRA-Development/ecommerce-project'
              rel='noopener noreferrer'
              target='_blank'
            >
              Repositorio
            </a>
          </li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'>ajfkjdsf</li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'>adjfasdfjk</li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'>ajdfkjaskd</li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'>dsfsddsad</li>
        </ul>

        <ul className=' flex flex-col gap-0.5 ml-12'>
          <li className='text-white font-bold mb-2'>About</li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'>
            <Link href='/about-us'>Sobre Nosotros</Link>
          </li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'> - </li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'> - </li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'> - </li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'> - </li>
        </ul>

        <ul className=' flex flex-col gap-0.5 ml-12'>
          <li className='text-white font-bold mb-2'>Legal</li>
          <li className='text-gray-400 font-bold hover:text-white cursor-pointer'>Privacy Policy</li>
        </ul>
      </div>
    </div>
  )
}
