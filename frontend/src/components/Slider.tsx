import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider(){

return(

<Swiper spaceBetween={50} slidesPerView={1} autoplay>

<SwiperSlide>
<img src="/studio1.jpg"/>
</SwiperSlide>

<SwiperSlide>
<img src="/studio2.jpg"/>
</SwiperSlide>

<SwiperSlide>
<img src="/studio3.jpg"/>
</SwiperSlide>

</Swiper>

)

}