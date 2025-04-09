'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

export function HomeCarrousel() {
  return (
    <div className='flex flex-col w-full h-full'>
      <h1 className='text-3xl text-black w-full pl-6 pt-2 font-medium'>
        Ultimas Ofertas
      </h1>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        className='mt-2.5 w-6xl h-3xl flex justify-center items-center rounded-3xl'
      >
        <SwiperSlide>
          <Image
            src='/prueba-imagen.webp'
            alt='Banner'
            width={1200}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/prueba-imagen.webp'
            alt='Banner'
            width={1200}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/prueba-imagen.webp'
            alt='Banner'
            width={1200}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/prueba-imagen.webp'
            alt='Banner'
            width={1200}
            height={400}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
