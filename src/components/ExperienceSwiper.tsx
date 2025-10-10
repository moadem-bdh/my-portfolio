// Import Swiper React components
import { Swiper } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/swiper-bundle.css";

export default function ExperienceSwiper({
  children, setSwiperChanged 
}: {
  children: React.ReactNode,
 setSwiperChanged :(value:number)=> void

}) {






  return (
    <Swiper
      onRealIndexChange={(swiper) => setSwiperChanged(swiper.realIndex)}
      modules={[Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={100}
      slidesPerView={1}
      loop
      autoplay={{delay: 10000}}
      className="w-full"
    >
      {children}
    </Swiper>
  );
}
