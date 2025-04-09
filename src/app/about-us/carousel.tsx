"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function Carousel() {
  const totalImages = 19;

  return (
    <div className="flex items-center justify-center w-2xl h-[600px]">
      <Swiper
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000, // 3 segundos
          disableOnInteraction: false,
        }}

        loop={true}
        className="w-full h-full"
      >
        {Array.from({ length: totalImages }, (_, i) => (
          <SwiperSlide key={i} className="" >
            <Image
              src={`/source/carousel-${i + 1}.jpg`}
              alt={`Carousel ${i + 1}`}
              width={1280}
              height={600}
              className="flex justify-center align-center items-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}