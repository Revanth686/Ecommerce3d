import { ChevronRightIcon ,ChevronLeftIcon} from "@heroicons/react/solid";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import ProductThumbnail from '../ProductThumbnail'
SwiperCore.use([Navigation])

export default function TopSellingProd({products}) {
  const PrevArrow = useRef(null);
  const NextArrow = useRef(null);
  return (
    <div className="w-full relative pt-6 pb-6">

      

        <Swiper
        spaceBetween={50}
        navigation={{
          prevEl: PrevArrow.current,
          nextEl: NextArrow.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = PrevArrow.current;
          swiper.params.navigation.nextEl = NextArrow.current;
     }}

     breakpoints={{
      400: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1331: {
        slidesPerView: 4,
      },

    }}
    
        className="w-full z-[1] "     
      >

        {products.map((result, i) => (
            <SwiperSlide  
            className="flex items-center justify-center"
            key={result.id+""+"SwiperSlide"}>

              <ProductThumbnail  product={result} />

              </SwiperSlide>
        ))}
      </Swiper>

     
     <div className="h-full flex items-center justify-center absolute left-0 top-0 z-[2]"  >
     <button className="flex items-center justify-center"  ref={PrevArrow}>
      <ChevronLeftIcon className="w-9 h-9"  />
      </button>
     </div>


      <div className="h-full flex items-center justify-center absolute right-0 top-0 z-[2]">

      <button className="flex items-center justify-center " ref={NextArrow}>
      <ChevronRightIcon  className="w-9 h-9 " />
      </button>
      </div>



        
    </div>
  )
}
